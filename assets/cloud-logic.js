/* 
   PDD CLOUD LOGIC v2.0
   Обработка Firebase, слежка за ошибками и режим тренировки
*/

const db = firebase.database();
let mainDatabase = null;
let currentMistakeIndex = 0;
let userMistakesKeys = [];

// 1. Генерация короткого ID для вопроса (фикс ошибки 768 байт)
function generateId(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        hash = ((hash << 5) - hash) + str.charCodeAt(i);
        hash |= 0;
    }
    return 'q' + Math.abs(hash);
}

// 2. Инициализация логики
export async function initCloudApp(uid) {
    console.log("Cloud Logic Initialized for:", uid);

    // Загружаем основную базу вопросов
    try {
        const resp = await fetch('./data/data.json');
        mainDatabase = await resp.json();
        console.log("Main DB Loaded");
    } catch (e) {
        console.error("Failed to load data.json", e);
    }

    // Запускаем наблюдатель за интерфейсом
    const observer = new MutationObserver(() => {
        // А. Окрашивание цифр внизу (пагинация)
        document.querySelectorAll('ul#componentContainer li').forEach(li => {
            const btn = li.querySelector('.pagination-item');
            if (btn) {
                if (li.className.includes('valid')) btn.classList.add('is-correct');
                if (li.className.includes('invalid')) btn.classList.add('is-wrong');
            }
        });

        // Б. Ловля ошибки для записи в Firebase
        const wrongItem = document.querySelector('.question-item.invalid');
        if (wrongItem) {
            const qText = document.querySelector('.question-title')?.innerText;
            if (qText) {
                const qId = generateId(qText);
                db.ref(`users/${uid}/errors/${qId}`).set({
                    title: qText,
                    date: new Date().toLocaleString()
                });
            }
        }
    });

    observer.observe(document.getElementById('app'), { 
        childList: true, 
        subtree: true, 
        attributes: true 
    });

    // Слушаем клики по кнопке "Мои ошибки"
    document.addEventListener('click', (e) => {
        if (e.target.innerText && e.target.innerText.includes('Мои ошибки')) {
            e.preventDefault();
            startMistakeTrainer(uid);
        }
    });
}

// 3. Режим тренировки ошибок
async function startMistakeTrainer(uid) {
    const app = document.querySelector('#app');
    app.innerHTML = '<div style="text-align:center; padding:50px; color:var(--primary);">Загрузка работы над ошибками...</div>';

    const snap = await db.ref(`users/${uid}/errors`).once('value');
    const data = snap.val();

    if (!data || !mainDatabase) {
        app.innerHTML = `
            <div class="div_welcome_page">
                <h2 class="title_main2">ОШИБОК НЕТ</h2>
                <p style="margin:20px 0;">Вы еще не совершали ошибок или база пуста.</p>
                <button class="button_main" onclick="location.reload()">В МЕНЮ</button>
            </div>`;
        return;
    }

    userMistakesKeys = Object.keys(data);
    currentMistakeIndex = 0;
    renderMistakeQuestion(uid, data);
}

function renderMistakeQuestion(uid, mistakesData) {
    const app = document.querySelector('#app');
    const qKey = userMistakesKeys[currentMistakeIndex];
    
    // Ищем вопрос в основной базе по тексту (через наш генератор ID)
    const questionData = mainDatabase.questions.find(q => generateId(q.title) === qKey);

    if (!questionData) {
        console.warn("Question not found in local DB:", qKey);
        nextMistake(uid, mistakesData);
        return;
    }

    const progress = ((currentMistakeIndex + 1) / userMistakesKeys.length) * 100;

    app.innerHTML = `
        <div class="container">
            <div style="width:100%; height:4px; background:var(--border); margin-bottom:15px; border-radius:2px; overflow:hidden;">
                <div style="width:${progress}%; height:100%; background:var(--primary); transition:0.3s;"></div>
            </div>
            <p style="font-size:11px; color:var(--text-muted); margin-bottom:10px;">Ошибка ${currentMistakeIndex + 1} из ${userMistakesKeys.length}</p>
            
            <img src="./data/images/${questionData.image}" class="main-img" onerror="this.style.display='none'">
            <div class="question-title">${questionData.title}</div>
            
            <div class="question-content">
                ${questionData.answers.map((ans, idx) => `
                    <div class="question-item mistake-option" data-idx="${idx}">
                        ${ans.title}
                    </div>
                `).join('')}
            </div>
            <div id="feedback-area"></div>
            <button id="next-mistake-btn" class="button_main" style="display:none; margin-top:20px;">ДАЛЕЕ</button>
        </div>
    `;

    // Логика выбора ответа
    document.querySelectorAll('.mistake-option').forEach(el => {
        el.onclick = function() {
            const selectedIdx = parseInt(this.dataset.idx) + 1;
            const isCorrect = selectedIdx === questionData.correct;
            
            // Блокируем клики
            document.querySelectorAll('.mistake-option').forEach(opt => opt.style.pointerEvents = 'none');

            if (isCorrect) {
                this.classList.add('valid');
                // Удаляем ошибку из базы, так как пользователь ответил верно
                db.ref(`users/${uid}/errors/${qKey}`).remove();
                showFeedback("Правильно! Вопрос удален из списка ошибок.", true);
            } else {
                this.classList.add('invalid');
                const correctEl = document.querySelector(`.mistake-option[data-idx="${questionData.correct - 1}"]`);
                if (correctEl) correctEl.classList.add('valid');
                showFeedback(questionData.explanation || "Неверно. Повторите материал.", false);
            }
            document.getElementById('next-mistake-btn').style.display = 'block';
        };
    });

    document.getElementById('next-mistake-btn').onclick = () => nextMistake(uid, mistakesData);
}

function showFeedback(text, correct) {
    const area = document.getElementById('feedback-area');
    area.innerHTML = `
        <div style="margin-top:15px; padding:15px; border-radius:12px; background:var(--surface); border-left:4px solid ${correct ? 'var(--success)' : 'var(--danger)'}; font-size:13px;">
            ${text}
        </div>
    `;
}

function nextMistake(uid, mistakesData) {
    currentMistakeIndex++;
    if (currentMistakeIndex < userMistakesKeys.length) {
        renderMistakeQuestion(uid, mistakesData);
    } else {
        document.querySelector('#app').innerHTML = `
            <div class="div_welcome_page">
                <h2 class="title_main2">ГОТОВО!</h2>
                <p style="margin:20px 0;">Вы проработали все доступные ошибки.</p>
                <button class="button_main" onclick="location.reload()">В МЕНЮ</button>
            </div>`;
    }
}
