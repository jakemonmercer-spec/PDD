(function() {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload"))
        return;
    for (const o of document.querySelectorAll('link[rel="modulepreload"]'))
        s(o);
    new MutationObserver(o => {
        for (const r of o)
            if (r.type === "childList")
                for (const i of r.addedNodes)
                    i.tagName === "LINK" && i.rel === "modulepreload" && s(i)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function n(o) {
        const r = {};
        return o.integrity && (r.integrity = o.integrity),
        o.referrerPolicy && (r.referrerPolicy = o.referrerPolicy),
        o.crossOrigin === "use-credentials" ? r.credentials = "include" : o.crossOrigin === "anonymous" ? r.credentials = "omit" : r.credentials = "same-origin",
        r
    }
    function s(o) {
        if (o.ep)
            return;
        o.ep = !0;
        const r = n(o);
        fetch(o.href, r)
    }
}
)();
/**
* @vue/shared v3.4.35
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
/*! #__NO_SIDE_EFFECTS__ */
function si(e, t) {
    const n = new Set(e.split(","));
    return t ? s => n.has(s.toLowerCase()) : s => n.has(s)
}
const xe = {}
  , Jn = []
  , Ct = () => {}
  , Rf = () => !1
  , Io = e => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97)
  , oi = e => e.startsWith("onUpdate:")
  , nt = Object.assign
  , ri = (e, t) => {
    const n = e.indexOf(t);
    n > -1 && e.splice(n, 1)
}
  , Of = Object.prototype.hasOwnProperty
  , ke = (e, t) => Of.call(e, t)
  , he = Array.isArray
  , Xn = e => Hs(e) === "[object Map]"
  , xo = e => Hs(e) === "[object Set]"
  , Gi = e => Hs(e) === "[object Date]"
  , ge = e => typeof e == "function"
  , Ue = e => typeof e == "string"
  , Wt = e => typeof e == "symbol"
  , Ie = e => e !== null && typeof e == "object"
  , Yl = e => (Ie(e) || ge(e)) && ge(e.then) && ge(e.catch)
  , Jl = Object.prototype.toString
  , Hs = e => Jl.call(e)
  , Lf = e => Hs(e).slice(8, -1)
  , Xl = e => Hs(e) === "[object Object]"
  , ii = e => Ue(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e
  , Ts = si(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted")
  , Mo = e => {
    const t = Object.create(null);
    return n => t[n] || (t[n] = e(n))
}
  , Nf = /-(\w)/g
  , At = Mo(e => e.replace(Nf, (t, n) => n ? n.toUpperCase() : ""))
  , Af = /\B([A-Z])/g
  , En = Mo(e => e.replace(Af, "-$1").toLowerCase())
  , Do = Mo(e => e.charAt(0).toUpperCase() + e.slice(1))
  , ir = Mo(e => e ? `on${Do(e)}` : "")
  , bn = (e, t) => !Object.is(e, t)
  , ao = (e, ...t) => {
    for (let n = 0; n < e.length; n++)
        e[n](...t)
}
  , zl = (e, t, n, s=!1) => {
    Object.defineProperty(e, t, {
        configurable: !0,
        enumerable: !1,
        writable: s,
        value: n
    })
}
  , bo = e => {
    const t = parseFloat(e);
    return isNaN(t) ? e : t
}
;
let Yi;
const Zl = () => Yi || (Yi = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Vn(e) {
    if (he(e)) {
        const t = {};
        for (let n = 0; n < e.length; n++) {
            const s = e[n]
              , o = Ue(s) ? Df(s) : Vn(s);
            if (o)
                for (const r in o)
                    t[r] = o[r]
        }
        return t
    } else if (Ue(e) || Ie(e))
        return e
}
const If = /;(?![^(]*\))/g
  , xf = /:([^]+)/
  , Mf = /\/\*[^]*?\*\//g;
function Df(e) {
    const t = {};
    return e.replace(Mf, "").split(If).forEach(n => {
        if (n) {
            const s = n.split(xf);
            s.length > 1 && (t[s[0].trim()] = s[1].trim())
        }
    }
    ),
    t
}
function ie(e) {
    let t = "";
    if (Ue(e))
        t = e;
    else if (he(e))
        for (let n = 0; n < e.length; n++) {
            const s = ie(e[n]);
            s && (t += s + " ")
        }
    else if (Ie(e))
        for (const n in e)
            e[n] && (t += n + " ");
    return t.trim()
}
const Bf = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly"
  , Ff = si(Bf);
function ec(e) {
    return !!e || e === ""
}
function Uf(e, t) {
    if (e.length !== t.length)
        return !1;
    let n = !0;
    for (let s = 0; n && s < e.length; s++)
        n = ts(e[s], t[s]);
    return n
}
function ts(e, t) {
    if (e === t)
        return !0;
    let n = Gi(e)
      , s = Gi(t);
    if (n || s)
        return n && s ? e.getTime() === t.getTime() : !1;
    if (n = Wt(e),
    s = Wt(t),
    n || s)
        return e === t;
    if (n = he(e),
    s = he(t),
    n || s)
        return n && s ? Uf(e, t) : !1;
    if (n = Ie(e),
    s = Ie(t),
    n || s) {
        if (!n || !s)
            return !1;
        const o = Object.keys(e).length
          , r = Object.keys(t).length;
        if (o !== r)
            return !1;
        for (const i in e) {
            const a = e.hasOwnProperty(i)
              , l = t.hasOwnProperty(i);
            if (a && !l || !a && l || !ts(e[i], t[i]))
                return !1
        }
    }
    return String(e) === String(t)
}
function Vf(e, t) {
    return e.findIndex(n => ts(n, t))
}
const tc = e => !!(e && e.__v_isRef === !0)
  , $ = e => Ue(e) ? e : e == null ? "" : he(e) || Ie(e) && (e.toString === Jl || !ge(e.toString)) ? tc(e) ? $(e.value) : JSON.stringify(e, nc, 2) : String(e)
  , nc = (e, t) => tc(t) ? nc(e, t.value) : Xn(t) ? {
    [`Map(${t.size})`]: [...t.entries()].reduce( (n, [s,o], r) => (n[ar(s, r) + " =>"] = o,
    n), {})
} : xo(t) ? {
    [`Set(${t.size})`]: [...t.values()].map(n => ar(n))
} : Wt(t) ? ar(t) : Ie(t) && !he(t) && !Xl(t) ? String(t) : t
  , ar = (e, t="") => {
    var n;
    return Wt(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
}
;
/**
* @vue/reactivity v3.4.35
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let vt;
class sc {
    constructor(t=!1) {
        this.detached = t,
        this._active = !0,
        this.effects = [],
        this.cleanups = [],
        this.parent = vt,
        !t && vt && (this.index = (vt.scopes || (vt.scopes = [])).push(this) - 1)
    }
    get active() {
        return this._active
    }
    run(t) {
        if (this._active) {
            const n = vt;
            try {
                return vt = this,
                t()
            } finally {
                vt = n
            }
        }
    }
    on() {
        vt = this
    }
    off() {
        vt = this.parent
    }
    stop(t) {
        if (this._active) {
            let n, s;
            for (n = 0,
            s = this.effects.length; n < s; n++)
                this.effects[n].stop();
            for (n = 0,
            s = this.cleanups.length; n < s; n++)
                this.cleanups[n]();
            if (this.scopes)
                for (n = 0,
                s = this.scopes.length; n < s; n++)
                    this.scopes[n].stop(!0);
            if (!this.detached && this.parent && !t) {
                const o = this.parent.scopes.pop();
                o && o !== this && (this.parent.scopes[this.index] = o,
                o.index = this.index)
            }
            this.parent = void 0,
            this._active = !1
        }
    }
}
function ai(e) {
    return new sc(e)
}
function Hf(e, t=vt) {
    t && t.active && t.effects.push(e)
}
function oc() {
    return vt
}
function jf(e) {
    vt && vt.cleanups.push(e)
}
let In;
class li {
    constructor(t, n, s, o) {
        this.fn = t,
        this.trigger = n,
        this.scheduler = s,
        this.active = !0,
        this.deps = [],
        this._dirtyLevel = 4,
        this._trackId = 0,
        this._runnings = 0,
        this._shouldSchedule = !1,
        this._depsLength = 0,
        Hf(this, o)
    }
    get dirty() {
        if (this._dirtyLevel === 2 || this._dirtyLevel === 3) {
            this._dirtyLevel = 1,
            Sn();
            for (let t = 0; t < this._depsLength; t++) {
                const n = this.deps[t];
                if (n.computed && (qf(n.computed),
                this._dirtyLevel >= 4))
                    break
            }
            this._dirtyLevel === 1 && (this._dirtyLevel = 0),
            Tn()
        }
        return this._dirtyLevel >= 4
    }
    set dirty(t) {
        this._dirtyLevel = t ? 4 : 0
    }
    run() {
        if (this._dirtyLevel = 0,
        !this.active)
            return this.fn();
        let t = gn
          , n = In;
        try {
            return gn = !0,
            In = this,
            this._runnings++,
            Ji(this),
            this.fn()
        } finally {
            Xi(this),
            this._runnings--,
            In = n,
            gn = t
        }
    }
    stop() {
        this.active && (Ji(this),
        Xi(this),
        this.onStop && this.onStop(),
        this.active = !1)
    }
}
function qf(e) {
    return e.value
}
function Ji(e) {
    e._trackId++,
    e._depsLength = 0
}
function Xi(e) {
    if (e.deps.length > e._depsLength) {
        for (let t = e._depsLength; t < e.deps.length; t++)
            rc(e.deps[t], e);
        e.deps.length = e._depsLength
    }
}
function rc(e, t) {
    const n = e.get(t);
    n !== void 0 && t._trackId !== n && (e.delete(t),
    e.size === 0 && e.cleanup())
}
let gn = !0
  , Tr = 0;
const ic = [];
function Sn() {
    ic.push(gn),
    gn = !1
}
function Tn() {
    const e = ic.pop();
    gn = e === void 0 ? !0 : e
}
function ci() {
    Tr++
}
function ui() {
    for (Tr--; !Tr && Cr.length; )
        Cr.shift()()
}
function ac(e, t, n) {
    if (t.get(e) !== e._trackId) {
        t.set(e, e._trackId);
        const s = e.deps[e._depsLength];
        s !== t ? (s && rc(s, e),
        e.deps[e._depsLength++] = t) : e._depsLength++
    }
}
const Cr = [];
function lc(e, t, n) {
    ci();
    for (const s of e.keys()) {
        let o;
        s._dirtyLevel < t && (o ?? (o = e.get(s) === s._trackId)) && (s._shouldSchedule || (s._shouldSchedule = s._dirtyLevel === 0),
        s._dirtyLevel = t),
        s._shouldSchedule && (o ?? (o = e.get(s) === s._trackId)) && (s.trigger(),
        (!s._runnings || s.allowRecurse) && s._dirtyLevel !== 2 && (s._shouldSchedule = !1,
        s.scheduler && Cr.push(s.scheduler)))
    }
    ui()
}
const cc = (e, t) => {
    const n = new Map;
    return n.cleanup = e,
    n.computed = t,
    n
}
  , yo = new WeakMap
  , xn = Symbol("")
  , kr = Symbol("");
function dt(e, t, n) {
    if (gn && In) {
        let s = yo.get(e);
        s || yo.set(e, s = new Map);
        let o = s.get(n);
        o || s.set(n, o = cc( () => s.delete(n))),
        ac(In, o)
    }
}
function Zt(e, t, n, s, o, r) {
    const i = yo.get(e);
    if (!i)
        return;
    let a = [];
    if (t === "clear")
        a = [...i.values()];
    else if (n === "length" && he(e)) {
        const l = Number(s);
        i.forEach( (c, u) => {
            (u === "length" || !Wt(u) && u >= l) && a.push(c)
        }
        )
    } else
        switch (n !== void 0 && a.push(i.get(n)),
        t) {
        case "add":
            he(e) ? ii(n) && a.push(i.get("length")) : (a.push(i.get(xn)),
            Xn(e) && a.push(i.get(kr)));
            break;
        case "delete":
            he(e) || (a.push(i.get(xn)),
            Xn(e) && a.push(i.get(kr)));
            break;
        case "set":
            Xn(e) && a.push(i.get(xn));
            break
        }
    ci();
    for (const l of a)
        l && lc(l, 4);
    ui()
}
function Wf(e, t) {
    const n = yo.get(e);
    return n && n.get(t)
}
const Kf = si("__proto__,__v_isRef,__isVue")
  , uc = new Set(Object.getOwnPropertyNames(Symbol).filter(e => e !== "arguments" && e !== "caller").map(e => Symbol[e]).filter(Wt))
  , zi = Qf();
function Qf() {
    const e = {};
    return ["includes", "indexOf", "lastIndexOf"].forEach(t => {
        e[t] = function(...n) {
            const s = $e(this);
            for (let r = 0, i = this.length; r < i; r++)
                dt(s, "get", r + "");
            const o = s[t](...n);
            return o === -1 || o === !1 ? s[t](...n.map($e)) : o
        }
    }
    ),
    ["push", "pop", "shift", "unshift", "splice"].forEach(t => {
        e[t] = function(...n) {
            Sn(),
            ci();
            const s = $e(this)[t].apply(this, n);
            return ui(),
            Tn(),
            s
        }
    }
    ),
    e
}
function Gf(e) {
    Wt(e) || (e = String(e));
    const t = $e(this);
    return dt(t, "has", e),
    t.hasOwnProperty(e)
}
class fc {
    constructor(t=!1, n=!1) {
        this._isReadonly = t,
        this._isShallow = n
    }
    get(t, n, s) {
        const o = this._isReadonly
          , r = this._isShallow;
        if (n === "__v_isReactive")
            return !o;
        if (n === "__v_isReadonly")
            return o;
        if (n === "__v_isShallow")
            return r;
        if (n === "__v_raw")
            return s === (o ? r ? ad : mc : r ? pc : hc).get(t) || Object.getPrototypeOf(t) === Object.getPrototypeOf(s) ? t : void 0;
        const i = he(t);
        if (!o) {
            if (i && ke(zi, n))
                return Reflect.get(zi, n, s);
            if (n === "hasOwnProperty")
                return Gf
        }
        const a = Reflect.get(t, n, s);
        return (Wt(n) ? uc.has(n) : Kf(n)) || (o || dt(t, "get", n),
        r) ? a : De(a) ? i && ii(n) ? a : a.value : Ie(a) ? o ? gc(a) : ht(a) : a
    }
}
class dc extends fc {
    constructor(t=!1) {
        super(!1, t)
    }
    set(t, n, s, o) {
        let r = t[n];
        if (!this._isShallow) {
            const l = Dn(r);
            if (!ns(s) && !Dn(s) && (r = $e(r),
            s = $e(s)),
            !he(t) && De(r) && !De(s))
                return l ? !1 : (r.value = s,
                !0)
        }
        const i = he(t) && ii(n) ? Number(n) < t.length : ke(t, n)
          , a = Reflect.set(t, n, s, o);
        return t === $e(o) && (i ? bn(s, r) && Zt(t, "set", n, s) : Zt(t, "add", n, s)),
        a
    }
    deleteProperty(t, n) {
        const s = ke(t, n);
        t[n];
        const o = Reflect.deleteProperty(t, n);
        return o && s && Zt(t, "delete", n, void 0),
        o
    }
    has(t, n) {
        const s = Reflect.has(t, n);
        return (!Wt(n) || !uc.has(n)) && dt(t, "has", n),
        s
    }
    ownKeys(t) {
        return dt(t, "iterate", he(t) ? "length" : xn),
        Reflect.ownKeys(t)
    }
}
class Yf extends fc {
    constructor(t=!1) {
        super(!0, t)
    }
    set(t, n) {
        return !0
    }
    deleteProperty(t, n) {
        return !0
    }
}
const Jf = new dc
  , Xf = new Yf
  , zf = new dc(!0);
const fi = e => e
  , Bo = e => Reflect.getPrototypeOf(e);
function zs(e, t, n=!1, s=!1) {
    e = e.__v_raw;
    const o = $e(e)
      , r = $e(t);
    n || (bn(t, r) && dt(o, "get", t),
    dt(o, "get", r));
    const {has: i} = Bo(o)
      , a = s ? fi : n ? mi : Ns;
    if (i.call(o, t))
        return a(e.get(t));
    if (i.call(o, r))
        return a(e.get(r));
    e !== o && e.get(t)
}
function Zs(e, t=!1) {
    const n = this.__v_raw
      , s = $e(n)
      , o = $e(e);
    return t || (bn(e, o) && dt(s, "has", e),
    dt(s, "has", o)),
    e === o ? n.has(e) : n.has(e) || n.has(o)
}
function eo(e, t=!1) {
    return e = e.__v_raw,
    !t && dt($e(e), "iterate", xn),
    Reflect.get(e, "size", e)
}
function Zi(e, t=!1) {
    !t && !ns(e) && !Dn(e) && (e = $e(e));
    const n = $e(this);
    return Bo(n).has.call(n, e) || (n.add(e),
    Zt(n, "add", e, e)),
    this
}
function ea(e, t, n=!1) {
    !n && !ns(t) && !Dn(t) && (t = $e(t));
    const s = $e(this)
      , {has: o, get: r} = Bo(s);
    let i = o.call(s, e);
    i || (e = $e(e),
    i = o.call(s, e));
    const a = r.call(s, e);
    return s.set(e, t),
    i ? bn(t, a) && Zt(s, "set", e, t) : Zt(s, "add", e, t),
    this
}
function ta(e) {
    const t = $e(this)
      , {has: n, get: s} = Bo(t);
    let o = n.call(t, e);
    o || (e = $e(e),
    o = n.call(t, e)),
    s && s.call(t, e);
    const r = t.delete(e);
    return o && Zt(t, "delete", e, void 0),
    r
}
function na() {
    const e = $e(this)
      , t = e.size !== 0
      , n = e.clear();
    return t && Zt(e, "clear", void 0, void 0),
    n
}
function to(e, t) {
    return function(s, o) {
        const r = this
          , i = r.__v_raw
          , a = $e(i)
          , l = t ? fi : e ? mi : Ns;
        return !e && dt(a, "iterate", xn),
        i.forEach( (c, u) => s.call(o, l(c), l(u), r))
    }
}
function no(e, t, n) {
    return function(...s) {
        const o = this.__v_raw
          , r = $e(o)
          , i = Xn(r)
          , a = e === "entries" || e === Symbol.iterator && i
          , l = e === "keys" && i
          , c = o[e](...s)
          , u = n ? fi : t ? mi : Ns;
        return !t && dt(r, "iterate", l ? kr : xn),
        {
            next() {
                const {value: h, done: f} = c.next();
                return f ? {
                    value: h,
                    done: f
                } : {
                    value: a ? [u(h[0]), u(h[1])] : u(h),
                    done: f
                }
            },
            [Symbol.iterator]() {
                return this
            }
        }
    }
}
function rn(e) {
    return function(...t) {
        return e === "delete" ? !1 : e === "clear" ? void 0 : this
    }
}
function Zf() {
    const e = {
        get(r) {
            return zs(this, r)
        },
        get size() {
            return eo(this)
        },
        has: Zs,
        add: Zi,
        set: ea,
        delete: ta,
        clear: na,
        forEach: to(!1, !1)
    }
      , t = {
        get(r) {
            return zs(this, r, !1, !0)
        },
        get size() {
            return eo(this)
        },
        has: Zs,
        add(r) {
            return Zi.call(this, r, !0)
        },
        set(r, i) {
            return ea.call(this, r, i, !0)
        },
        delete: ta,
        clear: na,
        forEach: to(!1, !0)
    }
      , n = {
        get(r) {
            return zs(this, r, !0)
        },
        get size() {
            return eo(this, !0)
        },
        has(r) {
            return Zs.call(this, r, !0)
        },
        add: rn("add"),
        set: rn("set"),
        delete: rn("delete"),
        clear: rn("clear"),
        forEach: to(!0, !1)
    }
      , s = {
        get(r) {
            return zs(this, r, !0, !0)
        },
        get size() {
            return eo(this, !0)
        },
        has(r) {
            return Zs.call(this, r, !0)
        },
        add: rn("add"),
        set: rn("set"),
        delete: rn("delete"),
        clear: rn("clear"),
        forEach: to(!0, !0)
    };
    return ["keys", "values", "entries", Symbol.iterator].forEach(r => {
        e[r] = no(r, !1, !1),
        n[r] = no(r, !0, !1),
        t[r] = no(r, !1, !0),
        s[r] = no(r, !0, !0)
    }
    ),
    [e, n, t, s]
}
const [ed,td,nd,sd] = Zf();
function di(e, t) {
    const n = t ? e ? sd : nd : e ? td : ed;
    return (s, o, r) => o === "__v_isReactive" ? !e : o === "__v_isReadonly" ? e : o === "__v_raw" ? s : Reflect.get(ke(n, o) && o in s ? n : s, o, r)
}
const od = {
    get: di(!1, !1)
}
  , rd = {
    get: di(!1, !0)
}
  , id = {
    get: di(!0, !1)
};
const hc = new WeakMap
  , pc = new WeakMap
  , mc = new WeakMap
  , ad = new WeakMap;
function ld(e) {
    switch (e) {
    case "Object":
    case "Array":
        return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
        return 2;
    default:
        return 0
    }
}
function cd(e) {
    return e.__v_skip || !Object.isExtensible(e) ? 0 : ld(Lf(e))
}
function ht(e) {
    return Dn(e) ? e : hi(e, !1, Jf, od, hc)
}
function _c(e) {
    return hi(e, !1, zf, rd, pc)
}
function gc(e) {
    return hi(e, !0, Xf, id, mc)
}
function hi(e, t, n, s, o) {
    if (!Ie(e) || e.__v_raw && !(t && e.__v_isReactive))
        return e;
    const r = o.get(e);
    if (r)
        return r;
    const i = cd(e);
    if (i === 0)
        return e;
    const a = new Proxy(e,i === 2 ? s : n);
    return o.set(e, a),
    a
}
function Mn(e) {
    return Dn(e) ? Mn(e.__v_raw) : !!(e && e.__v_isReactive)
}
function Dn(e) {
    return !!(e && e.__v_isReadonly)
}
function ns(e) {
    return !!(e && e.__v_isShallow)
}
function vc(e) {
    return e ? !!e.__v_raw : !1
}
function $e(e) {
    const t = e && e.__v_raw;
    return t ? $e(t) : e
}
function pi(e) {
    return Object.isExtensible(e) && zl(e, "__v_skip", !0),
    e
}
const Ns = e => Ie(e) ? ht(e) : e
  , mi = e => Ie(e) ? gc(e) : e;
class bc {
    constructor(t, n, s, o) {
        this.getter = t,
        this._setter = n,
        this.dep = void 0,
        this.__v_isRef = !0,
        this.__v_isReadonly = !1,
        this.effect = new li( () => t(this._value), () => lo(this, this.effect._dirtyLevel === 2 ? 2 : 3)),
        this.effect.computed = this,
        this.effect.active = this._cacheable = !o,
        this.__v_isReadonly = s
    }
    get value() {
        const t = $e(this);
        return (!t._cacheable || t.effect.dirty) && bn(t._value, t._value = t.effect.run()) && lo(t, 4),
        yc(t),
        t.effect._dirtyLevel >= 2 && lo(t, 2),
        t._value
    }
    set value(t) {
        this._setter(t)
    }
    get _dirty() {
        return this.effect.dirty
    }
    set _dirty(t) {
        this.effect.dirty = t
    }
}
function ud(e, t, n=!1) {
    let s, o;
    const r = ge(e);
    return r ? (s = e,
    o = Ct) : (s = e.get,
    o = e.set),
    new bc(s,o,r || !o,n)
}
function yc(e) {
    var t;
    gn && In && (e = $e(e),
    ac(In, (t = e.dep) != null ? t : e.dep = cc( () => e.dep = void 0, e instanceof bc ? e : void 0)))
}
function lo(e, t=4, n, s) {
    e = $e(e);
    const o = e.dep;
    o && lc(o, t)
}
function De(e) {
    return !!(e && e.__v_isRef === !0)
}
function V(e) {
    return Ec(e, !1)
}
function wc(e) {
    return Ec(e, !0)
}
function Ec(e, t) {
    return De(e) ? e : new fd(e,t)
}
class fd {
    constructor(t, n) {
        this.__v_isShallow = n,
        this.dep = void 0,
        this.__v_isRef = !0,
        this._rawValue = n ? t : $e(t),
        this._value = n ? t : Ns(t)
    }
    get value() {
        return yc(this),
        this._value
    }
    set value(t) {
        const n = this.__v_isShallow || ns(t) || Dn(t);
        t = n ? t : $e(t),
        bn(t, this._rawValue) && (this._rawValue,
        this._rawValue = t,
        this._value = n ? t : Ns(t),
        lo(this, 4))
    }
}
function x(e) {
    return De(e) ? e.value : e
}
const dd = {
    get: (e, t, n) => x(Reflect.get(e, t, n)),
    set: (e, t, n, s) => {
        const o = e[t];
        return De(o) && !De(n) ? (o.value = n,
        !0) : Reflect.set(e, t, n, s)
    }
};
function Sc(e) {
    return Mn(e) ? e : new Proxy(e,dd)
}
function hd(e) {
    const t = he(e) ? new Array(e.length) : {};
    for (const n in e)
        t[n] = Tc(e, n);
    return t
}
class pd {
    constructor(t, n, s) {
        this._object = t,
        this._key = n,
        this._defaultValue = s,
        this.__v_isRef = !0
    }
    get value() {
        const t = this._object[this._key];
        return t === void 0 ? this._defaultValue : t
    }
    set value(t) {
        this._object[this._key] = t
    }
    get dep() {
        return Wf($e(this._object), this._key)
    }
}
class md {
    constructor(t) {
        this._getter = t,
        this.__v_isRef = !0,
        this.__v_isReadonly = !0
    }
    get value() {
        return this._getter()
    }
}
function us(e, t, n) {
    return De(e) ? e : ge(e) ? new md(e) : Ie(e) && arguments.length > 1 ? Tc(e, t, n) : V(e)
}
function Tc(e, t, n) {
    const s = e[t];
    return De(s) ? s : new pd(e,t,n)
}
/**
* @vue/runtime-core v3.4.35
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function vn(e, t, n, s) {
    try {
        return s ? e(...s) : e()
    } catch (o) {
        Fo(o, t, n)
    }
}
function Ot(e, t, n, s) {
    if (ge(e)) {
        const o = vn(e, t, n, s);
        return o && Yl(o) && o.catch(r => {
            Fo(r, t, n)
        }
        ),
        o
    }
    if (he(e)) {
        const o = [];
        for (let r = 0; r < e.length; r++)
            o.push(Ot(e[r], t, n, s));
        return o
    }
}
function Fo(e, t, n, s=!0) {
    const o = t ? t.vnode : null;
    if (t) {
        let r = t.parent;
        const i = t.proxy
          , a = `https://vuejs.org/error-reference/#runtime-${n}`;
        for (; r; ) {
            const c = r.ec;
            if (c) {
                for (let u = 0; u < c.length; u++)
                    if (c[u](e, i, a) === !1)
                        return
            }
            r = r.parent
        }
        const l = t.appContext.config.errorHandler;
        if (l) {
            Sn(),
            vn(l, null, 10, [e, i, a]),
            Tn();
            return
        }
    }
    _d(e, n, o, s)
}
function _d(e, t, n, s=!0) {
    console.error(e)
}
let As = !1
  , $r = !1;
const Ze = [];
let Ht = 0;
const zn = [];
let dn = null
  , Nn = 0;
const Cc = Promise.resolve();
let _i = null;
function Bn(e) {
    const t = _i || Cc;
    return e ? t.then(this ? e.bind(this) : e) : t
}
function gd(e) {
    let t = Ht + 1
      , n = Ze.length;
    for (; t < n; ) {
        const s = t + n >>> 1
          , o = Ze[s]
          , r = Is(o);
        r < e || r === e && o.pre ? t = s + 1 : n = s
    }
    return t
}
function gi(e) {
    (!Ze.length || !Ze.includes(e, As && e.allowRecurse ? Ht + 1 : Ht)) && (e.id == null ? Ze.push(e) : Ze.splice(gd(e.id), 0, e),
    kc())
}
function kc() {
    !As && !$r && ($r = !0,
    _i = Cc.then(Pc))
}
function vd(e) {
    const t = Ze.indexOf(e);
    t > Ht && Ze.splice(t, 1)
}
function bd(e) {
    he(e) ? zn.push(...e) : (!dn || !dn.includes(e, e.allowRecurse ? Nn + 1 : Nn)) && zn.push(e),
    kc()
}
function sa(e, t, n=As ? Ht + 1 : 0) {
    for (; n < Ze.length; n++) {
        const s = Ze[n];
        if (s && s.pre) {
            if (e && s.id !== e.uid)
                continue;
            Ze.splice(n, 1),
            n--,
            s()
        }
    }
}
function $c(e) {
    if (zn.length) {
        const t = [...new Set(zn)].sort( (n, s) => Is(n) - Is(s));
        if (zn.length = 0,
        dn) {
            dn.push(...t);
            return
        }
        for (dn = t,
        Nn = 0; Nn < dn.length; Nn++) {
            const n = dn[Nn];
            n.active !== !1 && n()
        }
        dn = null,
        Nn = 0
    }
}
const Is = e => e.id == null ? 1 / 0 : e.id
  , yd = (e, t) => {
    const n = Is(e) - Is(t);
    if (n === 0) {
        if (e.pre && !t.pre)
            return -1;
        if (t.pre && !e.pre)
            return 1
    }
    return n
}
;
function Pc(e) {
    $r = !1,
    As = !0,
    Ze.sort(yd);
    try {
        for (Ht = 0; Ht < Ze.length; Ht++) {
            const t = Ze[Ht];
            t && t.active !== !1 && vn(t, t.i, t.i ? 15 : 14)
        }
    } finally {
        Ht = 0,
        Ze.length = 0,
        $c(),
        As = !1,
        _i = null,
        (Ze.length || zn.length) && Pc()
    }
}
let Ke = null
  , Uo = null;
function wo(e) {
    const t = Ke;
    return Ke = e,
    Uo = e && e.type.__scopeId || null,
    t
}
function pt(e) {
    Uo = e
}
function mt() {
    Uo = null
}
function Se(e, t=Ke, n) {
    if (!t || e._n)
        return e;
    const s = (...o) => {
        s._d && pa(-1);
        const r = wo(t);
        let i;
        try {
            i = e(...o)
        } finally {
            wo(r),
            s._d && pa(1)
        }
        return i
    }
    ;
    return s._n = !0,
    s._c = !0,
    s._d = !0,
    s
}
function Fe(e, t) {
    if (Ke === null)
        return e;
    const n = qo(Ke)
      , s = e.dirs || (e.dirs = []);
    for (let o = 0; o < t.length; o++) {
        let[r,i,a,l=xe] = t[o];
        r && (ge(r) && (r = {
            mounted: r,
            updated: r
        }),
        r.deep && mn(i),
        s.push({
            dir: r,
            instance: n,
            value: i,
            oldValue: void 0,
            arg: a,
            modifiers: l
        }))
    }
    return e
}
function Rn(e, t, n, s) {
    const o = e.dirs
      , r = t && t.dirs;
    for (let i = 0; i < o.length; i++) {
        const a = o[i];
        r && (a.oldValue = r[i].value);
        let l = a.dir[s];
        l && (Sn(),
        Ot(l, n, 8, [e.el, a, e, t]),
        Tn())
    }
}
function Rc(e, t) {
    e.shapeFlag & 6 && e.component ? Rc(e.component.subTree, t) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent),
    e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t
}
/*! #__NO_SIDE_EFFECTS__ */
function fs(e, t) {
    return ge(e) ? nt({
        name: e.name
    }, t, {
        setup: e
    }) : e
}
const Cs = e => !!e.type.__asyncLoader
  , Oc = e => e.type.__isKeepAlive;
function Lc(e, t) {
    Ac(e, "a", t)
}
function Nc(e, t) {
    Ac(e, "da", t)
}
function Ac(e, t, n=Ge) {
    const s = e.__wdc || (e.__wdc = () => {
        let o = n;
        for (; o; ) {
            if (o.isDeactivated)
                return;
            o = o.parent
        }
        return e()
    }
    );
    if (Vo(t, s, n),
    n) {
        let o = n.parent;
        for (; o && o.parent; )
            Oc(o.parent.vnode) && wd(s, t, n, o),
            o = o.parent
    }
}
function wd(e, t, n, s) {
    const o = Vo(t, e, s, !0);
    ds( () => {
        ri(s[t], o)
    }
    , n)
}
function Vo(e, t, n=Ge, s=!1) {
    if (n) {
        const o = n[e] || (n[e] = [])
          , r = t.__weh || (t.__weh = (...i) => {
            Sn();
            const a = qs(n)
              , l = Ot(t, n, e, i);
            return a(),
            Tn(),
            l
        }
        );
        return s ? o.unshift(r) : o.push(r),
        r
    }
}
const sn = e => (t, n=Ge) => {
    (!jo || e === "sp") && Vo(e, (...s) => t(...s), n)
}
  , at = sn("bm")
  , Hn = sn("m")
  , Ed = sn("bu")
  , Sd = sn("u")
  , Td = sn("bum")
  , ds = sn("um")
  , Cd = sn("sp")
  , kd = sn("rtg")
  , $d = sn("rtc");
function Pd(e, t=Ge) {
    Vo("ec", e, t)
}
const vi = "components";
function hs(e, t) {
    return xc(vi, e, !0, t) || e
}
const Ic = Symbol.for("v-ndc");
function Pt(e) {
    return Ue(e) ? xc(vi, e, !1) || e : e || Ic
}
function xc(e, t, n=!0, s=!1) {
    const o = Ke || Ge;
    if (o) {
        const r = o.type;
        if (e === vi) {
            const a = yh(r, !1);
            if (a && (a === t || a === At(t) || a === Do(At(t))))
                return r
        }
        const i = oa(o[e] || r[e], t) || oa(o.appContext[e], t);
        return !i && s ? r : i
    }
}
function oa(e, t) {
    return e && (e[t] || e[At(t)] || e[Do(At(t))])
}
function st(e, t, n, s) {
    let o;
    const r = n && n[s];
    if (he(e) || Ue(e)) {
        o = new Array(e.length);
        for (let i = 0, a = e.length; i < a; i++)
            o[i] = t(e[i], i, void 0, r && r[i])
    } else if (typeof e == "number") {
        o = new Array(e);
        for (let i = 0; i < e; i++)
            o[i] = t(i + 1, i, void 0, r && r[i])
    } else if (Ie(e))
        if (e[Symbol.iterator])
            o = Array.from(e, (i, a) => t(i, a, void 0, r && r[a]));
        else {
            const i = Object.keys(e);
            o = new Array(i.length);
            for (let a = 0, l = i.length; a < l; a++) {
                const c = i[a];
                o[a] = t(e[c], c, a, r && r[a])
            }
        }
    else
        o = [];
    return n && (n[s] = o),
    o
}
function Jt(e, t, n={}, s, o) {
    if (Ke.isCE || Ke.parent && Cs(Ke.parent) && Ke.parent.isCE)
        return t !== "default" && (n.name = t),
        _e("slot", n, s && s());
    let r = e[t];
    r && r._c && (r._d = !1),
    k();
    const i = r && Mc(r(n))
      , a = Te(Ee, {
        key: (n.key || i && i.key || `_${t}`) + (!i && s ? "_fb" : "")
    }, i || (s ? s() : []), i && e._ === 1 ? 64 : -2);
    return !o && a.scopeId && (a.slotScopeIds = [a.scopeId + "-s"]),
    r && r._c && (r._d = !0),
    a
}
function Mc(e) {
    return e.some(t => So(t) ? !(t.type === yn || t.type === Ee && !Mc(t.children)) : !0) ? e : null
}
const Pr = e => e ? su(e) ? qo(e) : Pr(e.parent) : null
  , ks = nt(Object.create(null), {
    $: e => e,
    $el: e => e.vnode.el,
    $data: e => e.data,
    $props: e => e.props,
    $attrs: e => e.attrs,
    $slots: e => e.slots,
    $refs: e => e.refs,
    $parent: e => Pr(e.parent),
    $root: e => Pr(e.root),
    $emit: e => e.emit,
    $options: e => bi(e),
    $forceUpdate: e => e.f || (e.f = () => {
        e.effect.dirty = !0,
        gi(e.update)
    }
    ),
    $nextTick: e => e.n || (e.n = Bn.bind(e.proxy)),
    $watch: e => eh.bind(e)
})
  , lr = (e, t) => e !== xe && !e.__isScriptSetup && ke(e, t)
  , Rd = {
    get({_: e}, t) {
        if (t === "__v_skip")
            return !0;
        const {ctx: n, setupState: s, data: o, props: r, accessCache: i, type: a, appContext: l} = e;
        let c;
        if (t[0] !== "$") {
            const m = i[t];
            if (m !== void 0)
                switch (m) {
                case 1:
                    return s[t];
                case 2:
                    return o[t];
                case 4:
                    return n[t];
                case 3:
                    return r[t]
                }
            else {
                if (lr(s, t))
                    return i[t] = 1,
                    s[t];
                if (o !== xe && ke(o, t))
                    return i[t] = 2,
                    o[t];
                if ((c = e.propsOptions[0]) && ke(c, t))
                    return i[t] = 3,
                    r[t];
                if (n !== xe && ke(n, t))
                    return i[t] = 4,
                    n[t];
                Rr && (i[t] = 0)
            }
        }
        const u = ks[t];
        let h, f;
        if (u)
            return t === "$attrs" && dt(e.attrs, "get", ""),
            u(e);
        if ((h = a.__cssModules) && (h = h[t]))
            return h;
        if (n !== xe && ke(n, t))
            return i[t] = 4,
            n[t];
        if (f = l.config.globalProperties,
        ke(f, t))
            return f[t]
    },
    set({_: e}, t, n) {
        const {data: s, setupState: o, ctx: r} = e;
        return lr(o, t) ? (o[t] = n,
        !0) : s !== xe && ke(s, t) ? (s[t] = n,
        !0) : ke(e.props, t) || t[0] === "$" && t.slice(1)in e ? !1 : (r[t] = n,
        !0)
    },
    has({_: {data: e, setupState: t, accessCache: n, ctx: s, appContext: o, propsOptions: r}}, i) {
        let a;
        return !!n[i] || e !== xe && ke(e, i) || lr(t, i) || (a = r[0]) && ke(a, i) || ke(s, i) || ke(ks, i) || ke(o.config.globalProperties, i)
    },
    defineProperty(e, t, n) {
        return n.get != null ? e._.accessCache[t] = 0 : ke(n, "value") && this.set(e, t, n.value, null),
        Reflect.defineProperty(e, t, n)
    }
};
function ra(e) {
    return he(e) ? e.reduce( (t, n) => (t[n] = null,
    t), {}) : e
}
let Rr = !0;
function Od(e) {
    const t = bi(e)
      , n = e.proxy
      , s = e.ctx;
    Rr = !1,
    t.beforeCreate && ia(t.beforeCreate, e, "bc");
    const {data: o, computed: r, methods: i, watch: a, provide: l, inject: c, created: u, beforeMount: h, mounted: f, beforeUpdate: m, updated: v, activated: y, deactivated: S, beforeDestroy: b, beforeUnmount: g, destroyed: E, unmounted: T, render: R, renderTracked: C, renderTriggered: L, errorCaptured: M, serverPrefetch: I, expose: K, inheritAttrs: J, components: ne, directives: D, filters: j} = t;
    if (c && Ld(c, s, null),
    i)
        for (const de in i) {
            const be = i[de];
            ge(be) && (s[de] = be.bind(n))
        }
    if (o) {
        const de = o.call(n, n);
        Ie(de) && (e.data = ht(de))
    }
    if (Rr = !0,
    r)
        for (const de in r) {
            const be = r[de]
              , me = ge(be) ? be.bind(n, n) : ge(be.get) ? be.get.bind(n, n) : Ct
              , St = !ge(be) && ge(be.set) ? be.set.bind(n) : Ct
              , He = G({
                get: me,
                set: St
            });
            Object.defineProperty(s, de, {
                enumerable: !0,
                configurable: !0,
                get: () => He.value,
                set: We => He.value = We
            })
        }
    if (a)
        for (const de in a)
            Dc(a[de], s, n, de);
    if (l) {
        const de = ge(l) ? l.call(n) : l;
        Reflect.ownKeys(de).forEach(be => {
            es(be, de[be])
        }
        )
    }
    u && ia(u, e, "c");
    function se(de, be) {
        he(be) ? be.forEach(me => de(me.bind(n))) : be && de(be.bind(n))
    }
    if (se(at, h),
    se(Hn, f),
    se(Ed, m),
    se(Sd, v),
    se(Lc, y),
    se(Nc, S),
    se(Pd, M),
    se($d, C),
    se(kd, L),
    se(Td, g),
    se(ds, T),
    se(Cd, I),
    he(K))
        if (K.length) {
            const de = e.exposed || (e.exposed = {});
            K.forEach(be => {
                Object.defineProperty(de, be, {
                    get: () => n[be],
                    set: me => n[be] = me
                })
            }
            )
        } else
            e.exposed || (e.exposed = {});
    R && e.render === Ct && (e.render = R),
    J != null && (e.inheritAttrs = J),
    ne && (e.components = ne),
    D && (e.directives = D)
}
function Ld(e, t, n=Ct) {
    he(e) && (e = Or(e));
    for (const s in e) {
        const o = e[s];
        let r;
        Ie(o) ? "default"in o ? r = et(o.from || s, o.default, !0) : r = et(o.from || s) : r = et(o),
        De(r) ? Object.defineProperty(t, s, {
            enumerable: !0,
            configurable: !0,
            get: () => r.value,
            set: i => r.value = i
        }) : t[s] = r
    }
}
function ia(e, t, n) {
    Ot(he(e) ? e.map(s => s.bind(t.proxy)) : e.bind(t.proxy), t, n)
}
function Dc(e, t, n, s) {
    const o = s.includes(".") ? Zc(n, s) : () => n[s];
    if (Ue(e)) {
        const r = t[e];
        ge(r) && it(o, r)
    } else if (ge(e))
        it(o, e.bind(n));
    else if (Ie(e))
        if (he(e))
            e.forEach(r => Dc(r, t, n, s));
        else {
            const r = ge(e.handler) ? e.handler.bind(n) : t[e.handler];
            ge(r) && it(o, r, e)
        }
}
function bi(e) {
    const t = e.type
      , {mixins: n, extends: s} = t
      , {mixins: o, optionsCache: r, config: {optionMergeStrategies: i}} = e.appContext
      , a = r.get(t);
    let l;
    return a ? l = a : !o.length && !n && !s ? l = t : (l = {},
    o.length && o.forEach(c => Eo(l, c, i, !0)),
    Eo(l, t, i)),
    Ie(t) && r.set(t, l),
    l
}
function Eo(e, t, n, s=!1) {
    const {mixins: o, extends: r} = t;
    r && Eo(e, r, n, !0),
    o && o.forEach(i => Eo(e, i, n, !0));
    for (const i in t)
        if (!(s && i === "expose")) {
            const a = Nd[i] || n && n[i];
            e[i] = a ? a(e[i], t[i]) : t[i]
        }
    return e
}
const Nd = {
    data: aa,
    props: la,
    emits: la,
    methods: Ss,
    computed: Ss,
    beforeCreate: ot,
    created: ot,
    beforeMount: ot,
    mounted: ot,
    beforeUpdate: ot,
    updated: ot,
    beforeDestroy: ot,
    beforeUnmount: ot,
    destroyed: ot,
    unmounted: ot,
    activated: ot,
    deactivated: ot,
    errorCaptured: ot,
    serverPrefetch: ot,
    components: Ss,
    directives: Ss,
    watch: Id,
    provide: aa,
    inject: Ad
};
function aa(e, t) {
    return t ? e ? function() {
        return nt(ge(e) ? e.call(this, this) : e, ge(t) ? t.call(this, this) : t)
    }
    : t : e
}
function Ad(e, t) {
    return Ss(Or(e), Or(t))
}
function Or(e) {
    if (he(e)) {
        const t = {};
        for (let n = 0; n < e.length; n++)
            t[e[n]] = e[n];
        return t
    }
    return e
}
function ot(e, t) {
    return e ? [...new Set([].concat(e, t))] : t
}
function Ss(e, t) {
    return e ? nt(Object.create(null), e, t) : t
}
function la(e, t) {
    return e ? he(e) && he(t) ? [...new Set([...e, ...t])] : nt(Object.create(null), ra(e), ra(t ?? {})) : t
}
function Id(e, t) {
    if (!e)
        return t;
    if (!t)
        return e;
    const n = nt(Object.create(null), e);
    for (const s in t)
        n[s] = ot(e[s], t[s]);
    return n
}
function Bc() {
    return {
        app: null,
        config: {
            isNativeTag: Rf,
            performance: !1,
            globalProperties: {},
            optionMergeStrategies: {},
            errorHandler: void 0,
            warnHandler: void 0,
            compilerOptions: {}
        },
        mixins: [],
        components: {},
        directives: {},
        provides: Object.create(null),
        optionsCache: new WeakMap,
        propsCache: new WeakMap,
        emitsCache: new WeakMap
    }
}
let xd = 0;
function Md(e, t) {
    return function(s, o=null) {
        ge(s) || (s = nt({}, s)),
        o != null && !Ie(o) && (o = null);
        const r = Bc()
          , i = new WeakSet;
        let a = !1;
        const l = r.app = {
            _uid: xd++,
            _component: s,
            _props: o,
            _container: null,
            _context: r,
            _instance: null,
            version: Eh,
            get config() {
                return r.config
            },
            set config(c) {},
            use(c, ...u) {
                return i.has(c) || (c && ge(c.install) ? (i.add(c),
                c.install(l, ...u)) : ge(c) && (i.add(c),
                c(l, ...u))),
                l
            },
            mixin(c) {
                return r.mixins.includes(c) || r.mixins.push(c),
                l
            },
            component(c, u) {
                return u ? (r.components[c] = u,
                l) : r.components[c]
            },
            directive(c, u) {
                return u ? (r.directives[c] = u,
                l) : r.directives[c]
            },
            mount(c, u, h) {
                if (!a) {
                    const f = _e(s, o);
                    return f.appContext = r,
                    h === !0 ? h = "svg" : h === !1 && (h = void 0),
                    u && t ? t(f, c) : e(f, c, h),
                    a = !0,
                    l._container = c,
                    c.__vue_app__ = l,
                    qo(f.component)
                }
            },
            unmount() {
                a && (e(null, l._container),
                delete l._container.__vue_app__)
            },
            provide(c, u) {
                return r.provides[c] = u,
                l
            },
            runWithContext(c) {
                const u = Zn;
                Zn = l;
                try {
                    return c()
                } finally {
                    Zn = u
                }
            }
        };
        return l
    }
}
let Zn = null;
function es(e, t) {
    if (Ge) {
        let n = Ge.provides;
        const s = Ge.parent && Ge.parent.provides;
        s === n && (n = Ge.provides = Object.create(s)),
        n[e] = t
    }
}
function et(e, t, n=!1) {
    const s = Ge || Ke;
    if (s || Zn) {
        const o = s ? s.parent == null ? s.vnode.appContext && s.vnode.appContext.provides : s.parent.provides : Zn._context.provides;
        if (o && e in o)
            return o[e];
        if (arguments.length > 1)
            return n && ge(t) ? t.call(s && s.proxy) : t
    }
}
function Dd() {
    return !!(Ge || Ke || Zn)
}
const Fc = {}
  , Uc = () => Object.create(Fc)
  , Vc = e => Object.getPrototypeOf(e) === Fc;
function Bd(e, t, n, s=!1) {
    const o = {}
      , r = Uc();
    e.propsDefaults = Object.create(null),
    Hc(e, t, o, r);
    for (const i in e.propsOptions[0])
        i in o || (o[i] = void 0);
    n ? e.props = s ? o : _c(o) : e.type.props ? e.props = o : e.props = r,
    e.attrs = r
}
function Fd(e, t, n, s) {
    const {props: o, attrs: r, vnode: {patchFlag: i}} = e
      , a = $e(o)
      , [l] = e.propsOptions;
    let c = !1;
    if ((s || i > 0) && !(i & 16)) {
        if (i & 8) {
            const u = e.vnode.dynamicProps;
            for (let h = 0; h < u.length; h++) {
                let f = u[h];
                if (Ho(e.emitsOptions, f))
                    continue;
                const m = t[f];
                if (l)
                    if (ke(r, f))
                        m !== r[f] && (r[f] = m,
                        c = !0);
                    else {
                        const v = At(f);
                        o[v] = Lr(l, a, v, m, e, !1)
                    }
                else
                    m !== r[f] && (r[f] = m,
                    c = !0)
            }
        }
    } else {
        Hc(e, t, o, r) && (c = !0);
        let u;
        for (const h in a)
            (!t || !ke(t, h) && ((u = En(h)) === h || !ke(t, u))) && (l ? n && (n[h] !== void 0 || n[u] !== void 0) && (o[h] = Lr(l, a, h, void 0, e, !0)) : delete o[h]);
        if (r !== a)
            for (const h in r)
                (!t || !ke(t, h)) && (delete r[h],
                c = !0)
    }
    c && Zt(e.attrs, "set", "")
}
function Hc(e, t, n, s) {
    const [o,r] = e.propsOptions;
    let i = !1, a;
    if (t)
        for (let l in t) {
            if (Ts(l))
                continue;
            const c = t[l];
            let u;
            o && ke(o, u = At(l)) ? !r || !r.includes(u) ? n[u] = c : (a || (a = {}))[u] = c : Ho(e.emitsOptions, l) || (!(l in s) || c !== s[l]) && (s[l] = c,
            i = !0)
        }
    if (r) {
        const l = $e(n)
          , c = a || xe;
        for (let u = 0; u < r.length; u++) {
            const h = r[u];
            n[h] = Lr(o, l, h, c[h], e, !ke(c, h))
        }
    }
    return i
}
function Lr(e, t, n, s, o, r) {
    const i = e[n];
    if (i != null) {
        const a = ke(i, "default");
        if (a && s === void 0) {
            const l = i.default;
            if (i.type !== Function && !i.skipFactory && ge(l)) {
                const {propsDefaults: c} = o;
                if (n in c)
                    s = c[n];
                else {
                    const u = qs(o);
                    s = c[n] = l.call(null, t),
                    u()
                }
            } else
                s = l
        }
        i[0] && (r && !a ? s = !1 : i[1] && (s === "" || s === En(n)) && (s = !0))
    }
    return s
}
const Ud = new WeakMap;
function jc(e, t, n=!1) {
    const s = n ? Ud : t.propsCache
      , o = s.get(e);
    if (o)
        return o;
    const r = e.props
      , i = {}
      , a = [];
    let l = !1;
    if (!ge(e)) {
        const u = h => {
            l = !0;
            const [f,m] = jc(h, t, !0);
            nt(i, f),
            m && a.push(...m)
        }
        ;
        !n && t.mixins.length && t.mixins.forEach(u),
        e.extends && u(e.extends),
        e.mixins && e.mixins.forEach(u)
    }
    if (!r && !l)
        return Ie(e) && s.set(e, Jn),
        Jn;
    if (he(r))
        for (let u = 0; u < r.length; u++) {
            const h = At(r[u]);
            ca(h) && (i[h] = xe)
        }
    else if (r)
        for (const u in r) {
            const h = At(u);
            if (ca(h)) {
                const f = r[u]
                  , m = i[h] = he(f) || ge(f) ? {
                    type: f
                } : nt({}, f)
                  , v = m.type;
                let y = !1
                  , S = !0;
                if (he(v))
                    for (let b = 0; b < v.length; ++b) {
                        const g = v[b]
                          , E = ge(g) && g.name;
                        if (E === "Boolean") {
                            y = !0;
                            break
                        } else
                            E === "String" && (S = !1)
                    }
                else
                    y = ge(v) && v.name === "Boolean";
                m[0] = y,
                m[1] = S,
                (y || ke(m, "default")) && a.push(h)
            }
        }
    const c = [i, a];
    return Ie(e) && s.set(e, c),
    c
}
function ca(e) {
    return e[0] !== "$" && !Ts(e)
}
const qc = e => e[0] === "_" || e === "$stable"
  , yi = e => he(e) ? e.map(Vt) : [Vt(e)]
  , Vd = (e, t, n) => {
    if (t._n)
        return t;
    const s = Se( (...o) => yi(t(...o)), n);
    return s._c = !1,
    s
}
  , Wc = (e, t, n) => {
    const s = e._ctx;
    for (const o in e) {
        if (qc(o))
            continue;
        const r = e[o];
        if (ge(r))
            t[o] = Vd(o, r, s);
        else if (r != null) {
            const i = yi(r);
            t[o] = () => i
        }
    }
}
  , Kc = (e, t) => {
    const n = yi(t);
    e.slots.default = () => n
}
  , Qc = (e, t, n) => {
    for (const s in t)
        (n || s !== "_") && (e[s] = t[s])
}
  , Hd = (e, t, n) => {
    const s = e.slots = Uc();
    if (e.vnode.shapeFlag & 32) {
        const o = t._;
        o ? (Qc(s, t, n),
        n && zl(s, "_", o, !0)) : Wc(t, s)
    } else
        t && Kc(e, t)
}
  , jd = (e, t, n) => {
    const {vnode: s, slots: o} = e;
    let r = !0
      , i = xe;
    if (s.shapeFlag & 32) {
        const a = t._;
        a ? n && a === 1 ? r = !1 : Qc(o, t, n) : (r = !t.$stable,
        Wc(t, o)),
        i = t
    } else
        t && (Kc(e, t),
        i = {
            default: 1
        });
    if (r)
        for (const a in o)
            !qc(a) && i[a] == null && delete o[a]
}
;
function Nr(e, t, n, s, o=!1) {
    if (he(e)) {
        e.forEach( (f, m) => Nr(f, t && (he(t) ? t[m] : t), n, s, o));
        return
    }
    if (Cs(s) && !o)
        return;
    const r = s.shapeFlag & 4 ? qo(s.component) : s.el
      , i = o ? null : r
      , {i: a, r: l} = e
      , c = t && t.r
      , u = a.refs === xe ? a.refs = {} : a.refs
      , h = a.setupState;
    if (c != null && c !== l && (Ue(c) ? (u[c] = null,
    ke(h, c) && (h[c] = null)) : De(c) && (c.value = null)),
    ge(l))
        vn(l, a, 12, [i, u]);
    else {
        const f = Ue(l)
          , m = De(l);
        if (f || m) {
            const v = () => {
                if (e.f) {
                    const y = f ? ke(h, l) ? h[l] : u[l] : l.value;
                    o ? he(y) && ri(y, r) : he(y) ? y.includes(r) || y.push(r) : f ? (u[l] = [r],
                    ke(h, l) && (h[l] = u[l])) : (l.value = [r],
                    e.k && (u[e.k] = l.value))
                } else
                    f ? (u[l] = i,
                    ke(h, l) && (h[l] = i)) : m && (l.value = i,
                    e.k && (u[e.k] = i))
            }
            ;
            i ? (v.id = -1,
            ft(v, n)) : v()
        }
    }
}
const Gc = Symbol("_vte")
  , qd = e => e.__isTeleport
  , $s = e => e && (e.disabled || e.disabled === "")
  , ua = e => typeof SVGElement < "u" && e instanceof SVGElement
  , fa = e => typeof MathMLElement == "function" && e instanceof MathMLElement
  , Ar = (e, t) => {
    const n = e && e.to;
    return Ue(n) ? t ? t(n) : null : n
}
  , Wd = {
    name: "Teleport",
    __isTeleport: !0,
    process(e, t, n, s, o, r, i, a, l, c) {
        const {mc: u, pc: h, pbc: f, o: {insert: m, querySelector: v, createText: y, createComment: S}} = c
          , b = $s(t.props);
        let {shapeFlag: g, children: E, dynamicChildren: T} = t;
        if (e == null) {
            const R = t.el = y("")
              , C = t.anchor = y("");
            m(R, n, s),
            m(C, n, s);
            const L = t.target = Ar(t.props, v)
              , M = Jc(L, t, y, m);
            L && (i === "svg" || ua(L) ? i = "svg" : (i === "mathml" || fa(L)) && (i = "mathml"));
            const I = (K, J) => {
                g & 16 && u(E, K, J, o, r, i, a, l)
            }
            ;
            b ? I(n, C) : L && I(L, M)
        } else {
            t.el = e.el,
            t.targetStart = e.targetStart;
            const R = t.anchor = e.anchor
              , C = t.target = e.target
              , L = t.targetAnchor = e.targetAnchor
              , M = $s(e.props)
              , I = M ? n : C
              , K = M ? R : L;
            if (i === "svg" || ua(C) ? i = "svg" : (i === "mathml" || fa(C)) && (i = "mathml"),
            T ? (f(e.dynamicChildren, T, I, o, r, i, a),
            wi(e, t, !0)) : l || h(e, t, I, K, o, r, i, a, !1),
            b)
                M ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : so(t, n, R, c, 1);
            else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
                const J = t.target = Ar(t.props, v);
                J && so(t, J, null, c, 0)
            } else
                M && so(t, C, L, c, 1)
        }
        Yc(t)
    },
    remove(e, t, n, {um: s, o: {remove: o}}, r) {
        const {shapeFlag: i, children: a, anchor: l, targetStart: c, targetAnchor: u, target: h, props: f} = e;
        if (h && (o(c),
        o(u)),
        r && o(l),
        i & 16) {
            const m = r || !$s(f);
            for (let v = 0; v < a.length; v++) {
                const y = a[v];
                s(y, t, n, m, !!y.dynamicChildren)
            }
        }
    },
    move: so,
    hydrate: Kd
};
function so(e, t, n, {o: {insert: s}, m: o}, r=2) {
    r === 0 && s(e.targetAnchor, t, n);
    const {el: i, anchor: a, shapeFlag: l, children: c, props: u} = e
      , h = r === 2;
    if (h && s(i, t, n),
    (!h || $s(u)) && l & 16)
        for (let f = 0; f < c.length; f++)
            o(c[f], t, n, 2);
    h && s(a, t, n)
}
function Kd(e, t, n, s, o, r, {o: {nextSibling: i, parentNode: a, querySelector: l, insert: c, createText: u}}, h) {
    const f = t.target = Ar(t.props, l);
    if (f) {
        const m = f._lpa || f.firstChild;
        if (t.shapeFlag & 16)
            if ($s(t.props))
                t.anchor = h(i(e), t, a(e), n, s, o, r),
                t.targetStart = m,
                t.targetAnchor = m && i(m);
            else {
                t.anchor = i(e);
                let v = m;
                for (; v; ) {
                    if (v && v.nodeType === 8) {
                        if (v.data === "teleport start anchor")
                            t.targetStart = v;
                        else if (v.data === "teleport anchor") {
                            t.targetAnchor = v,
                            f._lpa = t.targetAnchor && i(t.targetAnchor);
                            break
                        }
                    }
                    v = i(v)
                }
                t.targetAnchor || Jc(f, t, u, c),
                h(m && i(m), t, f, n, s, o, r)
            }
        Yc(t)
    }
    return t.anchor && i(t.anchor)
}
const Qd = Wd;
function Yc(e) {
    const t = e.ctx;
    if (t && t.ut) {
        let n = e.children[0].el;
        for (; n && n !== e.targetAnchor; )
            n.nodeType === 1 && n.setAttribute("data-v-owner", t.uid),
            n = n.nextSibling;
        t.ut()
    }
}
function Jc(e, t, n, s) {
    const o = t.targetStart = n("")
      , r = t.targetAnchor = n("");
    return o[Gc] = r,
    e && (s(o, e),
    s(r, e)),
    r
}
const ft = lh;
function Gd(e) {
    return Yd(e)
}
function Yd(e, t) {
    const n = Zl();
    n.__VUE__ = !0;
    const {insert: s, remove: o, patchProp: r, createElement: i, createText: a, createComment: l, setText: c, setElementText: u, parentNode: h, nextSibling: f, setScopeId: m=Ct, insertStaticContent: v} = e
      , y = (d, p, w, P=null, O=null, U=null, Y=void 0, Q=null, z=!!p.dynamicChildren) => {
        if (d === p)
            return;
        d && !bs(d, p) && (P = H(d),
        We(d, O, U, !0),
        d = null),
        p.patchFlag === -2 && (z = !1,
        p.dynamicChildren = null);
        const {type: q, ref: oe, shapeFlag: le} = p;
        switch (q) {
        case js:
            S(d, p, w, P);
            break;
        case yn:
            b(d, p, w, P);
            break;
        case fr:
            d == null && g(p, w, P, Y);
            break;
        case Ee:
            ne(d, p, w, P, O, U, Y, Q, z);
            break;
        default:
            le & 1 ? R(d, p, w, P, O, U, Y, Q, z) : le & 6 ? D(d, p, w, P, O, U, Y, Q, z) : (le & 64 || le & 128) && q.process(d, p, w, P, O, U, Y, Q, z, re)
        }
        oe != null && O && Nr(oe, d && d.ref, U, p || d, !p)
    }
      , S = (d, p, w, P) => {
        if (d == null)
            s(p.el = a(p.children), w, P);
        else {
            const O = p.el = d.el;
            p.children !== d.children && c(O, p.children)
        }
    }
      , b = (d, p, w, P) => {
        d == null ? s(p.el = l(p.children || ""), w, P) : p.el = d.el
    }
      , g = (d, p, w, P) => {
        [d.el,d.anchor] = v(d.children, p, w, P, d.el, d.anchor)
    }
      , E = ({el: d, anchor: p}, w, P) => {
        let O;
        for (; d && d !== p; )
            O = f(d),
            s(d, w, P),
            d = O;
        s(p, w, P)
    }
      , T = ({el: d, anchor: p}) => {
        let w;
        for (; d && d !== p; )
            w = f(d),
            o(d),
            d = w;
        o(p)
    }
      , R = (d, p, w, P, O, U, Y, Q, z) => {
        p.type === "svg" ? Y = "svg" : p.type === "math" && (Y = "mathml"),
        d == null ? C(p, w, P, O, U, Y, Q, z) : I(d, p, O, U, Y, Q, z)
    }
      , C = (d, p, w, P, O, U, Y, Q) => {
        let z, q;
        const {props: oe, shapeFlag: le, transition: ee, dirs: N} = d;
        if (z = d.el = i(d.type, U, oe && oe.is, oe),
        le & 8 ? u(z, d.children) : le & 16 && M(d.children, z, null, P, O, cr(d, U), Y, Q),
        N && Rn(d, null, P, "created"),
        L(z, d, d.scopeId, Y, P),
        oe) {
            for (const ce in oe)
                ce !== "value" && !Ts(ce) && r(z, ce, null, oe[ce], U, P);
            "value"in oe && r(z, "value", null, oe.value, U),
            (q = oe.onVnodeBeforeMount) && Ft(q, P, d)
        }
        N && Rn(d, null, P, "beforeMount");
        const F = Jd(O, ee);
        F && ee.beforeEnter(z),
        s(z, p, w),
        ((q = oe && oe.onVnodeMounted) || F || N) && ft( () => {
            q && Ft(q, P, d),
            F && ee.enter(z),
            N && Rn(d, null, P, "mounted")
        }
        , O)
    }
      , L = (d, p, w, P, O) => {
        if (w && m(d, w),
        P)
            for (let U = 0; U < P.length; U++)
                m(d, P[U]);
        if (O) {
            let U = O.subTree;
            if (p === U) {
                const Y = O.vnode;
                L(d, Y, Y.scopeId, Y.slotScopeIds, O.parent)
            }
        }
    }
      , M = (d, p, w, P, O, U, Y, Q, z=0) => {
        for (let q = z; q < d.length; q++) {
            const oe = d[q] = Q ? hn(d[q]) : Vt(d[q]);
            y(null, oe, p, w, P, O, U, Y, Q)
        }
    }
      , I = (d, p, w, P, O, U, Y) => {
        const Q = p.el = d.el;
        let {patchFlag: z, dynamicChildren: q, dirs: oe} = p;
        z |= d.patchFlag & 16;
        const le = d.props || xe
          , ee = p.props || xe;
        let N;
        if (w && On(w, !1),
        (N = ee.onVnodeBeforeUpdate) && Ft(N, w, p, d),
        oe && Rn(p, d, w, "beforeUpdate"),
        w && On(w, !0),
        (le.innerHTML && ee.innerHTML == null || le.textContent && ee.textContent == null) && u(Q, ""),
        q ? K(d.dynamicChildren, q, Q, w, P, cr(p, O), U) : Y || be(d, p, Q, null, w, P, cr(p, O), U, !1),
        z > 0) {
            if (z & 16)
                J(Q, le, ee, w, O);
            else if (z & 2 && le.class !== ee.class && r(Q, "class", null, ee.class, O),
            z & 4 && r(Q, "style", le.style, ee.style, O),
            z & 8) {
                const F = p.dynamicProps;
                for (let ce = 0; ce < F.length; ce++) {
                    const ue = F[ce]
                      , Ae = le[ue]
                      , ze = ee[ue];
                    (ze !== Ae || ue === "value") && r(Q, ue, Ae, ze, O, w)
                }
            }
            z & 1 && d.children !== p.children && u(Q, p.children)
        } else
            !Y && q == null && J(Q, le, ee, w, O);
        ((N = ee.onVnodeUpdated) || oe) && ft( () => {
            N && Ft(N, w, p, d),
            oe && Rn(p, d, w, "updated")
        }
        , P)
    }
      , K = (d, p, w, P, O, U, Y) => {
        for (let Q = 0; Q < p.length; Q++) {
            const z = d[Q]
              , q = p[Q]
              , oe = z.el && (z.type === Ee || !bs(z, q) || z.shapeFlag & 70) ? h(z.el) : w;
            y(z, q, oe, null, P, O, U, Y, !0)
        }
    }
      , J = (d, p, w, P, O) => {
        if (p !== w) {
            if (p !== xe)
                for (const U in p)
                    !Ts(U) && !(U in w) && r(d, U, p[U], null, O, P);
            for (const U in w) {
                if (Ts(U))
                    continue;
                const Y = w[U]
                  , Q = p[U];
                Y !== Q && U !== "value" && r(d, U, Q, Y, O, P)
            }
            "value"in w && r(d, "value", p.value, w.value, O)
        }
    }
      , ne = (d, p, w, P, O, U, Y, Q, z) => {
        const q = p.el = d ? d.el : a("")
          , oe = p.anchor = d ? d.anchor : a("");
        let {patchFlag: le, dynamicChildren: ee, slotScopeIds: N} = p;
        N && (Q = Q ? Q.concat(N) : N),
        d == null ? (s(q, w, P),
        s(oe, w, P),
        M(p.children || [], w, oe, O, U, Y, Q, z)) : le > 0 && le & 64 && ee && d.dynamicChildren ? (K(d.dynamicChildren, ee, w, O, U, Y, Q),
        (p.key != null || O && p === O.subTree) && wi(d, p, !0)) : be(d, p, w, oe, O, U, Y, Q, z)
    }
      , D = (d, p, w, P, O, U, Y, Q, z) => {
        p.slotScopeIds = Q,
        d == null ? p.shapeFlag & 512 ? O.ctx.activate(p, w, P, Y, z) : j(p, w, P, O, U, Y, z) : X(d, p, z)
    }
      , j = (d, p, w, P, O, U, Y) => {
        const Q = d.component = mh(d, P, O);
        if (Oc(d) && (Q.ctx.renderer = re),
        _h(Q, !1, Y),
        Q.asyncDep) {
            if (O && O.registerDep(Q, se, Y),
            !d.el) {
                const z = Q.subTree = _e(yn);
                b(null, z, p, w)
            }
        } else
            se(Q, d, p, w, O, U, Y)
    }
      , X = (d, p, w) => {
        const P = p.component = d.component;
        if (rh(d, p, w))
            if (P.asyncDep && !P.asyncResolved) {
                de(P, p, w);
                return
            } else
                P.next = p,
                vd(P.update),
                P.effect.dirty = !0,
                P.update();
        else
            p.el = d.el,
            P.vnode = p
    }
      , se = (d, p, w, P, O, U, Y) => {
        const Q = () => {
            if (d.isMounted) {
                let {next: oe, bu: le, u: ee, parent: N, vnode: F} = d;
                {
                    const _t = Xc(d);
                    if (_t) {
                        oe && (oe.el = F.el,
                        de(d, oe, Y)),
                        _t.asyncDep.then( () => {
                            d.isUnmounted || Q()
                        }
                        );
                        return
                    }
                }
                let ce = oe, ue;
                On(d, !1),
                oe ? (oe.el = F.el,
                de(d, oe, Y)) : oe = F,
                le && ao(le),
                (ue = oe.props && oe.props.onVnodeBeforeUpdate) && Ft(ue, N, oe, F),
                On(d, !0);
                const Ae = ur(d)
                  , ze = d.subTree;
                d.subTree = Ae,
                y(ze, Ae, h(ze.el), H(ze), d, O, U),
                oe.el = Ae.el,
                ce === null && ih(d, Ae.el),
                ee && ft(ee, O),
                (ue = oe.props && oe.props.onVnodeUpdated) && ft( () => Ft(ue, N, oe, F), O)
            } else {
                let oe;
                const {el: le, props: ee} = p
                  , {bm: N, m: F, parent: ce} = d
                  , ue = Cs(p);
                if (On(d, !1),
                N && ao(N),
                !ue && (oe = ee && ee.onVnodeBeforeMount) && Ft(oe, ce, p),
                On(d, !0),
                le && Ne) {
                    const Ae = () => {
                        d.subTree = ur(d),
                        Ne(le, d.subTree, d, O, null)
                    }
                    ;
                    ue ? p.type.__asyncLoader().then( () => !d.isUnmounted && Ae()) : Ae()
                } else {
                    const Ae = d.subTree = ur(d);
                    y(null, Ae, w, P, d, O, U),
                    p.el = Ae.el
                }
                if (F && ft(F, O),
                !ue && (oe = ee && ee.onVnodeMounted)) {
                    const Ae = p;
                    ft( () => Ft(oe, ce, Ae), O)
                }
                (p.shapeFlag & 256 || ce && Cs(ce.vnode) && ce.vnode.shapeFlag & 256) && d.a && ft(d.a, O),
                d.isMounted = !0,
                p = w = P = null
            }
        }
          , z = d.effect = new li(Q,Ct, () => gi(q),d.scope)
          , q = d.update = () => {
            z.dirty && z.run()
        }
        ;
        q.i = d,
        q.id = d.uid,
        On(d, !0),
        q()
    }
      , de = (d, p, w) => {
        p.component = d;
        const P = d.vnode.props;
        d.vnode = p,
        d.next = null,
        Fd(d, p.props, P, w),
        jd(d, p.children, w),
        Sn(),
        sa(d),
        Tn()
    }
      , be = (d, p, w, P, O, U, Y, Q, z=!1) => {
        const q = d && d.children
          , oe = d ? d.shapeFlag : 0
          , le = p.children
          , {patchFlag: ee, shapeFlag: N} = p;
        if (ee > 0) {
            if (ee & 128) {
                St(q, le, w, P, O, U, Y, Q, z);
                return
            } else if (ee & 256) {
                me(q, le, w, P, O, U, Y, Q, z);
                return
            }
        }
        N & 8 ? (oe & 16 && Xe(q, O, U),
        le !== q && u(w, le)) : oe & 16 ? N & 16 ? St(q, le, w, P, O, U, Y, Q, z) : Xe(q, O, U, !0) : (oe & 8 && u(w, ""),
        N & 16 && M(le, w, P, O, U, Y, Q, z))
    }
      , me = (d, p, w, P, O, U, Y, Q, z) => {
        d = d || Jn,
        p = p || Jn;
        const q = d.length
          , oe = p.length
          , le = Math.min(q, oe);
        let ee;
        for (ee = 0; ee < le; ee++) {
            const N = p[ee] = z ? hn(p[ee]) : Vt(p[ee]);
            y(d[ee], N, w, null, O, U, Y, Q, z)
        }
        q > oe ? Xe(d, O, U, !0, !1, le) : M(p, w, P, O, U, Y, Q, z, le)
    }
      , St = (d, p, w, P, O, U, Y, Q, z) => {
        let q = 0;
        const oe = p.length;
        let le = d.length - 1
          , ee = oe - 1;
        for (; q <= le && q <= ee; ) {
            const N = d[q]
              , F = p[q] = z ? hn(p[q]) : Vt(p[q]);
            if (bs(N, F))
                y(N, F, w, null, O, U, Y, Q, z);
            else
                break;
            q++
        }
        for (; q <= le && q <= ee; ) {
            const N = d[le]
              , F = p[ee] = z ? hn(p[ee]) : Vt(p[ee]);
            if (bs(N, F))
                y(N, F, w, null, O, U, Y, Q, z);
            else
                break;
            le--,
            ee--
        }
        if (q > le) {
            if (q <= ee) {
                const N = ee + 1
                  , F = N < oe ? p[N].el : P;
                for (; q <= ee; )
                    y(null, p[q] = z ? hn(p[q]) : Vt(p[q]), w, F, O, U, Y, Q, z),
                    q++
            }
        } else if (q > ee)
            for (; q <= le; )
                We(d[q], O, U, !0),
                q++;
        else {
            const N = q
              , F = q
              , ce = new Map;
            for (q = F; q <= ee; q++) {
                const gt = p[q] = z ? hn(p[q]) : Vt(p[q]);
                gt.key != null && ce.set(gt.key, q)
            }
            let ue, Ae = 0;
            const ze = ee - F + 1;
            let _t = !1
              , Xs = 0;
            const Kn = new Array(ze);
            for (q = 0; q < ze; q++)
                Kn[q] = 0;
            for (q = N; q <= le; q++) {
                const gt = d[q];
                if (Ae >= ze) {
                    We(gt, O, U, !0);
                    continue
                }
                let Bt;
                if (gt.key != null)
                    Bt = ce.get(gt.key);
                else
                    for (ue = F; ue <= ee; ue++)
                        if (Kn[ue - F] === 0 && bs(gt, p[ue])) {
                            Bt = ue;
                            break
                        }
                Bt === void 0 ? We(gt, O, U, !0) : (Kn[Bt - F] = q + 1,
                Bt >= Xs ? Xs = Bt : _t = !0,
                y(gt, p[Bt], w, null, O, U, Y, Q, z),
                Ae++)
            }
            const Ki = _t ? Xd(Kn) : Jn;
            for (ue = Ki.length - 1,
            q = ze - 1; q >= 0; q--) {
                const gt = F + q
                  , Bt = p[gt]
                  , Qi = gt + 1 < oe ? p[gt + 1].el : P;
                Kn[q] === 0 ? y(null, Bt, w, Qi, O, U, Y, Q, z) : _t && (ue < 0 || q !== Ki[ue] ? He(Bt, w, Qi, 2) : ue--)
            }
        }
    }
      , He = (d, p, w, P, O=null) => {
        const {el: U, type: Y, transition: Q, children: z, shapeFlag: q} = d;
        if (q & 6) {
            He(d.component.subTree, p, w, P);
            return
        }
        if (q & 128) {
            d.suspense.move(p, w, P);
            return
        }
        if (q & 64) {
            Y.move(d, p, w, re);
            return
        }
        if (Y === Ee) {
            s(U, p, w);
            for (let le = 0; le < z.length; le++)
                He(z[le], p, w, P);
            s(d.anchor, p, w);
            return
        }
        if (Y === fr) {
            E(d, p, w);
            return
        }
        if (P !== 2 && q & 1 && Q)
            if (P === 0)
                Q.beforeEnter(U),
                s(U, p, w),
                ft( () => Q.enter(U), O);
            else {
                const {leave: le, delayLeave: ee, afterLeave: N} = Q
                  , F = () => s(U, p, w)
                  , ce = () => {
                    le(U, () => {
                        F(),
                        N && N()
                    }
                    )
                }
                ;
                ee ? ee(U, F, ce) : ce()
            }
        else
            s(U, p, w)
    }
      , We = (d, p, w, P=!1, O=!1) => {
        const {type: U, props: Y, ref: Q, children: z, dynamicChildren: q, shapeFlag: oe, patchFlag: le, dirs: ee, cacheIndex: N} = d;
        if (le === -2 && (O = !1),
        Q != null && Nr(Q, null, w, d, !0),
        N != null && (p.renderCache[N] = void 0),
        oe & 256) {
            p.ctx.deactivate(d);
            return
        }
        const F = oe & 1 && ee
          , ce = !Cs(d);
        let ue;
        if (ce && (ue = Y && Y.onVnodeBeforeUnmount) && Ft(ue, p, d),
        oe & 6)
            on(d.component, w, P);
        else {
            if (oe & 128) {
                d.suspense.unmount(w, P);
                return
            }
            F && Rn(d, null, p, "beforeUnmount"),
            oe & 64 ? d.type.remove(d, p, w, re, P) : q && !q.hasOnce && (U !== Ee || le > 0 && le & 64) ? Xe(q, p, w, !1, !0) : (U === Ee && le & 384 || !O && oe & 16) && Xe(z, p, w),
            P && Dt(d)
        }
        (ce && (ue = Y && Y.onVnodeUnmounted) || F) && ft( () => {
            ue && Ft(ue, p, d),
            F && Rn(d, null, p, "unmounted")
        }
        , w)
    }
      , Dt = d => {
        const {type: p, el: w, anchor: P, transition: O} = d;
        if (p === Ee) {
            $t(w, P);
            return
        }
        if (p === fr) {
            T(d);
            return
        }
        const U = () => {
            o(w),
            O && !O.persisted && O.afterLeave && O.afterLeave()
        }
        ;
        if (d.shapeFlag & 1 && O && !O.persisted) {
            const {leave: Y, delayLeave: Q} = O
              , z = () => Y(w, U);
            Q ? Q(d.el, U, z) : z()
        } else
            U()
    }
      , $t = (d, p) => {
        let w;
        for (; d !== p; )
            w = f(d),
            o(d),
            d = w;
        o(p)
    }
      , on = (d, p, w) => {
        const {bum: P, scope: O, update: U, subTree: Y, um: Q, m: z, a: q} = d;
        da(z),
        da(q),
        P && ao(P),
        O.stop(),
        U && (U.active = !1,
        We(Y, d, p, w)),
        Q && ft(Q, p),
        ft( () => {
            d.isUnmounted = !0
        }
        , p),
        p && p.pendingBranch && !p.isUnmounted && d.asyncDep && !d.asyncResolved && d.suspenseId === p.pendingId && (p.deps--,
        p.deps === 0 && p.resolve())
    }
      , Xe = (d, p, w, P=!1, O=!1, U=0) => {
        for (let Y = U; Y < d.length; Y++)
            We(d[Y], p, w, P, O)
    }
      , H = d => {
        if (d.shapeFlag & 6)
            return H(d.component.subTree);
        if (d.shapeFlag & 128)
            return d.suspense.next();
        const p = f(d.anchor || d.el)
          , w = p && p[Gc];
        return w ? f(w) : p
    }
    ;
    let te = !1;
    const Z = (d, p, w) => {
        d == null ? p._vnode && We(p._vnode, null, null, !0) : y(p._vnode || null, d, p, null, null, null, w),
        te || (te = !0,
        sa(),
        $c(),
        te = !1),
        p._vnode = d
    }
      , re = {
        p: y,
        um: We,
        m: He,
        r: Dt,
        mt: j,
        mc: M,
        pc: be,
        pbc: K,
        n: H,
        o: e
    };
    let we, Ne;
    return t && ([we,Ne] = t(re)),
    {
        render: Z,
        hydrate: we,
        createApp: Md(Z, we)
    }
}
function cr({type: e, props: t}, n) {
    return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n
}
function On({effect: e, update: t}, n) {
    e.allowRecurse = t.allowRecurse = n
}
function Jd(e, t) {
    return (!e || e && !e.pendingBranch) && t && !t.persisted
}
function wi(e, t, n=!1) {
    const s = e.children
      , o = t.children;
    if (he(s) && he(o))
        for (let r = 0; r < s.length; r++) {
            const i = s[r];
            let a = o[r];
            a.shapeFlag & 1 && !a.dynamicChildren && ((a.patchFlag <= 0 || a.patchFlag === 32) && (a = o[r] = hn(o[r]),
            a.el = i.el),
            !n && a.patchFlag !== -2 && wi(i, a)),
            a.type === js && (a.el = i.el)
        }
}
function Xd(e) {
    const t = e.slice()
      , n = [0];
    let s, o, r, i, a;
    const l = e.length;
    for (s = 0; s < l; s++) {
        const c = e[s];
        if (c !== 0) {
            if (o = n[n.length - 1],
            e[o] < c) {
                t[s] = o,
                n.push(s);
                continue
            }
            for (r = 0,
            i = n.length - 1; r < i; )
                a = r + i >> 1,
                e[n[a]] < c ? r = a + 1 : i = a;
            c < e[n[r]] && (r > 0 && (t[s] = n[r - 1]),
            n[r] = s)
        }
    }
    for (r = n.length,
    i = n[r - 1]; r-- > 0; )
        n[r] = i,
        i = t[i];
    return n
}
function Xc(e) {
    const t = e.subTree.component;
    if (t)
        return t.asyncDep && !t.asyncResolved ? t : Xc(t)
}
function da(e) {
    if (e)
        for (let t = 0; t < e.length; t++)
            e[t].active = !1
}
const zd = Symbol.for("v-scx")
  , Zd = () => et(zd)
  , oo = {};
function it(e, t, n) {
    return zc(e, t, n)
}
function zc(e, t, {immediate: n, deep: s, flush: o, once: r, onTrack: i, onTrigger: a}=xe) {
    if (t && r) {
        const C = t;
        t = (...L) => {
            C(...L),
            R()
        }
    }
    const l = Ge
      , c = C => s === !0 ? C : mn(C, s === !1 ? 1 : void 0);
    let u, h = !1, f = !1;
    if (De(e) ? (u = () => e.value,
    h = ns(e)) : Mn(e) ? (u = () => c(e),
    h = !0) : he(e) ? (f = !0,
    h = e.some(C => Mn(C) || ns(C)),
    u = () => e.map(C => {
        if (De(C))
            return C.value;
        if (Mn(C))
            return c(C);
        if (ge(C))
            return vn(C, l, 2)
    }
    )) : ge(e) ? t ? u = () => vn(e, l, 2) : u = () => (m && m(),
    Ot(e, l, 3, [v])) : u = Ct,
    t && s) {
        const C = u;
        u = () => mn(C())
    }
    let m, v = C => {
        m = E.onStop = () => {
            vn(C, l, 4),
            m = E.onStop = void 0
        }
    }
    , y;
    if (jo)
        if (v = Ct,
        t ? n && Ot(t, l, 3, [u(), f ? [] : void 0, v]) : u(),
        o === "sync") {
            const C = Zd();
            y = C.__watcherHandles || (C.__watcherHandles = [])
        } else
            return Ct;
    let S = f ? new Array(e.length).fill(oo) : oo;
    const b = () => {
        if (!(!E.active || !E.dirty))
            if (t) {
                const C = E.run();
                (s || h || (f ? C.some( (L, M) => bn(L, S[M])) : bn(C, S))) && (m && m(),
                Ot(t, l, 3, [C, S === oo ? void 0 : f && S[0] === oo ? [] : S, v]),
                S = C)
            } else
                E.run()
    }
    ;
    b.allowRecurse = !!t;
    let g;
    o === "sync" ? g = b : o === "post" ? g = () => ft(b, l && l.suspense) : (b.pre = !0,
    l && (b.id = l.uid),
    g = () => gi(b));
    const E = new li(u,Ct,g)
      , T = oc()
      , R = () => {
        E.stop(),
        T && ri(T.effects, E)
    }
    ;
    return t ? n ? b() : S = E.run() : o === "post" ? ft(E.run.bind(E), l && l.suspense) : E.run(),
    y && y.push(R),
    R
}
function eh(e, t, n) {
    const s = this.proxy
      , o = Ue(e) ? e.includes(".") ? Zc(s, e) : () => s[e] : e.bind(s, s);
    let r;
    ge(t) ? r = t : (r = t.handler,
    n = t);
    const i = qs(this)
      , a = zc(o, r.bind(s), n);
    return i(),
    a
}
function Zc(e, t) {
    const n = t.split(".");
    return () => {
        let s = e;
        for (let o = 0; o < n.length && s; o++)
            s = s[n[o]];
        return s
    }
}
function mn(e, t=1 / 0, n) {
    if (t <= 0 || !Ie(e) || e.__v_skip || (n = n || new Set,
    n.has(e)))
        return e;
    if (n.add(e),
    t--,
    De(e))
        mn(e.value, t, n);
    else if (he(e))
        for (let s = 0; s < e.length; s++)
            mn(e[s], t, n);
    else if (xo(e) || Xn(e))
        e.forEach(s => {
            mn(s, t, n)
        }
        );
    else if (Xl(e)) {
        for (const s in e)
            mn(e[s], t, n);
        for (const s of Object.getOwnPropertySymbols(e))
            Object.prototype.propertyIsEnumerable.call(e, s) && mn(e[s], t, n)
    }
    return e
}
const th = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${At(t)}Modifiers`] || e[`${En(t)}Modifiers`];
function nh(e, t, ...n) {
    if (e.isUnmounted)
        return;
    const s = e.vnode.props || xe;
    let o = n;
    const r = t.startsWith("update:")
      , i = r && th(s, t.slice(7));
    i && (i.trim && (o = n.map(u => Ue(u) ? u.trim() : u)),
    i.number && (o = n.map(bo)));
    let a, l = s[a = ir(t)] || s[a = ir(At(t))];
    !l && r && (l = s[a = ir(En(t))]),
    l && Ot(l, e, 6, o);
    const c = s[a + "Once"];
    if (c) {
        if (!e.emitted)
            e.emitted = {};
        else if (e.emitted[a])
            return;
        e.emitted[a] = !0,
        Ot(c, e, 6, o)
    }
}
function eu(e, t, n=!1) {
    const s = t.emitsCache
      , o = s.get(e);
    if (o !== void 0)
        return o;
    const r = e.emits;
    let i = {}
      , a = !1;
    if (!ge(e)) {
        const l = c => {
            const u = eu(c, t, !0);
            u && (a = !0,
            nt(i, u))
        }
        ;
        !n && t.mixins.length && t.mixins.forEach(l),
        e.extends && l(e.extends),
        e.mixins && e.mixins.forEach(l)
    }
    return !r && !a ? (Ie(e) && s.set(e, null),
    null) : (he(r) ? r.forEach(l => i[l] = null) : nt(i, r),
    Ie(e) && s.set(e, i),
    i)
}
function Ho(e, t) {
    return !e || !Io(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""),
    ke(e, t[0].toLowerCase() + t.slice(1)) || ke(e, En(t)) || ke(e, t))
}
function ur(e) {
    const {type: t, vnode: n, proxy: s, withProxy: o, propsOptions: [r], slots: i, attrs: a, emit: l, render: c, renderCache: u, props: h, data: f, setupState: m, ctx: v, inheritAttrs: y} = e
      , S = wo(e);
    let b, g;
    try {
        if (n.shapeFlag & 4) {
            const T = o || s
              , R = T;
            b = Vt(c.call(R, T, u, h, m, f, v)),
            g = a
        } else {
            const T = t;
            b = Vt(T.length > 1 ? T(h, {
                attrs: a,
                slots: i,
                emit: l
            }) : T(h, null)),
            g = t.props ? a : sh(a)
        }
    } catch (T) {
        Ps.length = 0,
        Fo(T, e, 1),
        b = _e(yn)
    }
    let E = b;
    if (g && y !== !1) {
        const T = Object.keys(g)
          , {shapeFlag: R} = E;
        T.length && R & 7 && (r && T.some(oi) && (g = oh(g, r)),
        E = ss(E, g, !1, !0))
    }
    return n.dirs && (E = ss(E, null, !1, !0),
    E.dirs = E.dirs ? E.dirs.concat(n.dirs) : n.dirs),
    n.transition && (E.transition = n.transition),
    b = E,
    wo(S),
    b
}
const sh = e => {
    let t;
    for (const n in e)
        (n === "class" || n === "style" || Io(n)) && ((t || (t = {}))[n] = e[n]);
    return t
}
  , oh = (e, t) => {
    const n = {};
    for (const s in e)
        (!oi(s) || !(s.slice(9)in t)) && (n[s] = e[s]);
    return n
}
;
function rh(e, t, n) {
    const {props: s, children: o, component: r} = e
      , {props: i, children: a, patchFlag: l} = t
      , c = r.emitsOptions;
    if (t.dirs || t.transition)
        return !0;
    if (n && l >= 0) {
        if (l & 1024)
            return !0;
        if (l & 16)
            return s ? ha(s, i, c) : !!i;
        if (l & 8) {
            const u = t.dynamicProps;
            for (let h = 0; h < u.length; h++) {
                const f = u[h];
                if (i[f] !== s[f] && !Ho(c, f))
                    return !0
            }
        }
    } else
        return (o || a) && (!a || !a.$stable) ? !0 : s === i ? !1 : s ? i ? ha(s, i, c) : !0 : !!i;
    return !1
}
function ha(e, t, n) {
    const s = Object.keys(t);
    if (s.length !== Object.keys(e).length)
        return !0;
    for (let o = 0; o < s.length; o++) {
        const r = s[o];
        if (t[r] !== e[r] && !Ho(n, r))
            return !0
    }
    return !1
}
function ih({vnode: e, parent: t}, n) {
    for (; t; ) {
        const s = t.subTree;
        if (s.suspense && s.suspense.activeBranch === e && (s.el = e.el),
        s === e)
            (e = t.vnode).el = n,
            t = t.parent;
        else
            break
    }
}
const ah = e => e.__isSuspense;
function lh(e, t) {
    t && t.pendingBranch ? he(e) ? t.effects.push(...e) : t.effects.push(e) : bd(e)
}
const Ee = Symbol.for("v-fgt")
  , js = Symbol.for("v-txt")
  , yn = Symbol.for("v-cmt")
  , fr = Symbol.for("v-stc")
  , Ps = [];
let yt = null;
function k(e=!1) {
    Ps.push(yt = e ? null : [])
}
function ch() {
    Ps.pop(),
    yt = Ps[Ps.length - 1] || null
}
let xs = 1;
function pa(e) {
    xs += e,
    e < 0 && yt && (yt.hasOnce = !0)
}
function tu(e) {
    return e.dynamicChildren = xs > 0 ? yt || Jn : null,
    ch(),
    xs > 0 && yt && yt.push(e),
    e
}
function A(e, t, n, s, o, r) {
    return tu(_(e, t, n, s, o, r, !0))
}
function Te(e, t, n, s, o) {
    return tu(_e(e, t, n, s, o, !0))
}
function So(e) {
    return e ? e.__v_isVNode === !0 : !1
}
function bs(e, t) {
    return e.type === t.type && e.key === t.key
}
const nu = ({key: e}) => e ?? null
  , co = ({ref: e, ref_key: t, ref_for: n}) => (typeof e == "number" && (e = "" + e),
e != null ? Ue(e) || De(e) || ge(e) ? {
    i: Ke,
    r: e,
    k: t,
    f: !!n
} : e : null);
function _(e, t=null, n=null, s=0, o=null, r=e === Ee ? 0 : 1, i=!1, a=!1) {
    const l = {
        __v_isVNode: !0,
        __v_skip: !0,
        type: e,
        props: t,
        key: t && nu(t),
        ref: t && co(t),
        scopeId: Uo,
        slotScopeIds: null,
        children: n,
        component: null,
        suspense: null,
        ssContent: null,
        ssFallback: null,
        dirs: null,
        transition: null,
        el: null,
        anchor: null,
        target: null,
        targetStart: null,
        targetAnchor: null,
        staticCount: 0,
        shapeFlag: r,
        patchFlag: s,
        dynamicProps: o,
        dynamicChildren: null,
        appContext: null,
        ctx: Ke
    };
    return a ? (Ei(l, n),
    r & 128 && e.normalize(l)) : n && (l.shapeFlag |= Ue(n) ? 8 : 16),
    xs > 0 && !i && yt && (l.patchFlag > 0 || r & 6) && l.patchFlag !== 32 && yt.push(l),
    l
}
const _e = uh;
function uh(e, t=null, n=null, s=0, o=null, r=!1) {
    if ((!e || e === Ic) && (e = yn),
    So(e)) {
        const a = ss(e, t, !0);
        return n && Ei(a, n),
        xs > 0 && !r && yt && (a.shapeFlag & 6 ? yt[yt.indexOf(e)] = a : yt.push(a)),
        a.patchFlag = -2,
        a
    }
    if (wh(e) && (e = e.__vccOpts),
    t) {
        t = fh(t);
        let {class: a, style: l} = t;
        a && !Ue(a) && (t.class = ie(a)),
        Ie(l) && (vc(l) && !he(l) && (l = nt({}, l)),
        t.style = Vn(l))
    }
    const i = Ue(e) ? 1 : ah(e) ? 128 : qd(e) ? 64 : Ie(e) ? 4 : ge(e) ? 2 : 0;
    return _(e, t, n, s, o, i, r, !0)
}
function fh(e) {
    return e ? vc(e) || Vc(e) ? nt({}, e) : e : null
}
function ss(e, t, n=!1, s=!1) {
    const {props: o, ref: r, patchFlag: i, children: a, transition: l} = e
      , c = t ? dh(o || {}, t) : o
      , u = {
        __v_isVNode: !0,
        __v_skip: !0,
        type: e.type,
        props: c,
        key: c && nu(c),
        ref: t && t.ref ? n && r ? he(r) ? r.concat(co(t)) : [r, co(t)] : co(t) : r,
        scopeId: e.scopeId,
        slotScopeIds: e.slotScopeIds,
        children: a,
        target: e.target,
        targetStart: e.targetStart,
        targetAnchor: e.targetAnchor,
        staticCount: e.staticCount,
        shapeFlag: e.shapeFlag,
        patchFlag: t && e.type !== Ee ? i === -1 ? 16 : i | 16 : i,
        dynamicProps: e.dynamicProps,
        dynamicChildren: e.dynamicChildren,
        appContext: e.appContext,
        dirs: e.dirs,
        transition: l,
        component: e.component,
        suspense: e.suspense,
        ssContent: e.ssContent && ss(e.ssContent),
        ssFallback: e.ssFallback && ss(e.ssFallback),
        el: e.el,
        anchor: e.anchor,
        ctx: e.ctx,
        ce: e.ce
    };
    return l && s && Rc(u, l.clone(u)),
    u
}
function ye(e=" ", t=0) {
    return _e(js, null, e, t)
}
function W(e="", t=!1) {
    return t ? (k(),
    Te(yn, null, e)) : _e(yn, null, e)
}
function Vt(e) {
    return e == null || typeof e == "boolean" ? _e(yn) : he(e) ? _e(Ee, null, e.slice()) : typeof e == "object" ? hn(e) : _e(js, null, String(e))
}
function hn(e) {
    return e.el === null && e.patchFlag !== -1 || e.memo ? e : ss(e)
}
function Ei(e, t) {
    let n = 0;
    const {shapeFlag: s} = e;
    if (t == null)
        t = null;
    else if (he(t))
        n = 16;
    else if (typeof t == "object")
        if (s & 65) {
            const o = t.default;
            o && (o._c && (o._d = !1),
            Ei(e, o()),
            o._c && (o._d = !0));
            return
        } else {
            n = 32;
            const o = t._;
            !o && !Vc(t) ? t._ctx = Ke : o === 3 && Ke && (Ke.slots._ === 1 ? t._ = 1 : (t._ = 2,
            e.patchFlag |= 1024))
        }
    else
        ge(t) ? (t = {
            default: t,
            _ctx: Ke
        },
        n = 32) : (t = String(t),
        s & 64 ? (n = 16,
        t = [ye(t)]) : n = 8);
    e.children = t,
    e.shapeFlag |= n
}
function dh(...e) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
        const s = e[n];
        for (const o in s)
            if (o === "class")
                t.class !== s.class && (t.class = ie([t.class, s.class]));
            else if (o === "style")
                t.style = Vn([t.style, s.style]);
            else if (Io(o)) {
                const r = t[o]
                  , i = s[o];
                i && r !== i && !(he(r) && r.includes(i)) && (t[o] = r ? [].concat(r, i) : i)
            } else
                o !== "" && (t[o] = s[o])
    }
    return t
}
function Ft(e, t, n, s=null) {
    Ot(e, t, 7, [n, s])
}
const hh = Bc();
let ph = 0;
function mh(e, t, n) {
    const s = e.type
      , o = (t ? t.appContext : e.appContext) || hh
      , r = {
        uid: ph++,
        vnode: e,
        type: s,
        parent: t,
        appContext: o,
        root: null,
        next: null,
        subTree: null,
        effect: null,
        update: null,
        scope: new sc(!0),
        render: null,
        proxy: null,
        exposed: null,
        exposeProxy: null,
        withProxy: null,
        provides: t ? t.provides : Object.create(o.provides),
        accessCache: null,
        renderCache: [],
        components: null,
        directives: null,
        propsOptions: jc(s, o),
        emitsOptions: eu(s, o),
        emit: null,
        emitted: null,
        propsDefaults: xe,
        inheritAttrs: s.inheritAttrs,
        ctx: xe,
        data: xe,
        props: xe,
        attrs: xe,
        slots: xe,
        refs: xe,
        setupState: xe,
        setupContext: null,
        suspense: n,
        suspenseId: n ? n.pendingId : 0,
        asyncDep: null,
        asyncResolved: !1,
        isMounted: !1,
        isUnmounted: !1,
        isDeactivated: !1,
        bc: null,
        c: null,
        bm: null,
        m: null,
        bu: null,
        u: null,
        um: null,
        bum: null,
        da: null,
        a: null,
        rtg: null,
        rtc: null,
        ec: null,
        sp: null
    };
    return r.ctx = {
        _: r
    },
    r.root = t ? t.root : r,
    r.emit = nh.bind(null, r),
    e.ce && e.ce(r),
    r
}
let Ge = null;
const Si = () => Ge || Ke;
let To, Ir;
{
    const e = Zl()
      , t = (n, s) => {
        let o;
        return (o = e[n]) || (o = e[n] = []),
        o.push(s),
        r => {
            o.length > 1 ? o.forEach(i => i(r)) : o[0](r)
        }
    }
    ;
    To = t("__VUE_INSTANCE_SETTERS__", n => Ge = n),
    Ir = t("__VUE_SSR_SETTERS__", n => jo = n)
}
const qs = e => {
    const t = Ge;
    return To(e),
    e.scope.on(),
    () => {
        e.scope.off(),
        To(t)
    }
}
  , ma = () => {
    Ge && Ge.scope.off(),
    To(null)
}
;
function su(e) {
    return e.vnode.shapeFlag & 4
}
let jo = !1;
function _h(e, t=!1, n=!1) {
    t && Ir(t);
    const {props: s, children: o} = e.vnode
      , r = su(e);
    Bd(e, s, r, t),
    Hd(e, o, n);
    const i = r ? gh(e, t) : void 0;
    return t && Ir(!1),
    i
}
function gh(e, t) {
    const n = e.type;
    e.accessCache = Object.create(null),
    e.proxy = new Proxy(e.ctx,Rd);
    const {setup: s} = n;
    if (s) {
        const o = e.setupContext = s.length > 1 ? bh(e) : null
          , r = qs(e);
        Sn();
        const i = vn(s, e, 0, [e.props, o]);
        if (Tn(),
        r(),
        Yl(i)) {
            if (i.then(ma, ma),
            t)
                return i.then(a => {
                    _a(e, a, t)
                }
                ).catch(a => {
                    Fo(a, e, 0)
                }
                );
            e.asyncDep = i
        } else
            _a(e, i, t)
    } else
        ou(e, t)
}
function _a(e, t, n) {
    ge(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : Ie(t) && (e.setupState = Sc(t)),
    ou(e, n)
}
let ga;
function ou(e, t, n) {
    const s = e.type;
    if (!e.render) {
        if (!t && ga && !s.render) {
            const o = s.template || bi(e).template;
            if (o) {
                const {isCustomElement: r, compilerOptions: i} = e.appContext.config
                  , {delimiters: a, compilerOptions: l} = s
                  , c = nt(nt({
                    isCustomElement: r,
                    delimiters: a
                }, i), l);
                s.render = ga(o, c)
            }
        }
        e.render = s.render || Ct
    }
    {
        const o = qs(e);
        Sn();
        try {
            Od(e)
        } finally {
            Tn(),
            o()
        }
    }
}
const vh = {
    get(e, t) {
        return dt(e, "get", ""),
        e[t]
    }
};
function bh(e) {
    const t = n => {
        e.exposed = n || {}
    }
    ;
    return {
        attrs: new Proxy(e.attrs,vh),
        slots: e.slots,
        emit: e.emit,
        expose: t
    }
}
function qo(e) {
    return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Sc(pi(e.exposed)),{
        get(t, n) {
            if (n in t)
                return t[n];
            if (n in ks)
                return ks[n](e)
        },
        has(t, n) {
            return n in t || n in ks
        }
    })) : e.proxy
}
function yh(e, t=!0) {
    return ge(e) ? e.displayName || e.name : e.name || t && e.__name
}
function wh(e) {
    return ge(e) && "__vccOpts"in e
}
const G = (e, t) => ud(e, t, jo);
function Wo(e, t, n) {
    const s = arguments.length;
    return s === 2 ? Ie(t) && !he(t) ? So(t) ? _e(e, null, [t]) : _e(e, t) : _e(e, null, t) : (s > 3 ? n = Array.prototype.slice.call(arguments, 2) : s === 3 && So(n) && (n = [n]),
    _e(e, t, n))
}
const Eh = "3.4.35";
/**
* @vue/runtime-dom v3.4.35
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const Sh = "http://www.w3.org/2000/svg"
  , Th = "http://www.w3.org/1998/Math/MathML"
  , Xt = typeof document < "u" ? document : null
  , va = Xt && Xt.createElement("template")
  , Ch = {
    insert: (e, t, n) => {
        t.insertBefore(e, n || null)
    }
    ,
    remove: e => {
        const t = e.parentNode;
        t && t.removeChild(e)
    }
    ,
    createElement: (e, t, n, s) => {
        const o = t === "svg" ? Xt.createElementNS(Sh, e) : t === "mathml" ? Xt.createElementNS(Th, e) : n ? Xt.createElement(e, {
            is: n
        }) : Xt.createElement(e);
        return e === "select" && s && s.multiple != null && o.setAttribute("multiple", s.multiple),
        o
    }
    ,
    createText: e => Xt.createTextNode(e),
    createComment: e => Xt.createComment(e),
    setText: (e, t) => {
        e.nodeValue = t
    }
    ,
    setElementText: (e, t) => {
        e.textContent = t
    }
    ,
    parentNode: e => e.parentNode,
    nextSibling: e => e.nextSibling,
    querySelector: e => Xt.querySelector(e),
    setScopeId(e, t) {
        e.setAttribute(t, "")
    },
    insertStaticContent(e, t, n, s, o, r) {
        const i = n ? n.previousSibling : t.lastChild;
        if (o && (o === r || o.nextSibling))
            for (; t.insertBefore(o.cloneNode(!0), n),
            !(o === r || !(o = o.nextSibling)); )
                ;
        else {
            va.innerHTML = s === "svg" ? `<svg>${e}</svg>` : s === "mathml" ? `<math>${e}</math>` : e;
            const a = va.content;
            if (s === "svg" || s === "mathml") {
                const l = a.firstChild;
                for (; l.firstChild; )
                    a.appendChild(l.firstChild);
                a.removeChild(l)
            }
            t.insertBefore(a, n)
        }
        return [i ? i.nextSibling : t.firstChild, n ? n.previousSibling : t.lastChild]
    }
}
  , kh = Symbol("_vtc");
function $h(e, t, n) {
    const s = e[kh];
    s && (t = (t ? [t, ...s] : [...s]).join(" ")),
    t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t
}
const ba = Symbol("_vod")
  , Ph = Symbol("_vsh")
  , Rh = Symbol("")
  , Oh = /(^|;)\s*display\s*:/;
function Lh(e, t, n) {
    const s = e.style
      , o = Ue(n);
    let r = !1;
    if (n && !o) {
        if (t)
            if (Ue(t))
                for (const i of t.split(";")) {
                    const a = i.slice(0, i.indexOf(":")).trim();
                    n[a] == null && uo(s, a, "")
                }
            else
                for (const i in t)
                    n[i] == null && uo(s, i, "");
        for (const i in n)
            i === "display" && (r = !0),
            uo(s, i, n[i])
    } else if (o) {
        if (t !== n) {
            const i = s[Rh];
            i && (n += ";" + i),
            s.cssText = n,
            r = Oh.test(n)
        }
    } else
        t && e.removeAttribute("style");
    ba in e && (e[ba] = r ? s.display : "",
    e[Ph] && (s.display = "none"))
}
const ya = /\s*!important$/;
function uo(e, t, n) {
    if (he(n))
        n.forEach(s => uo(e, t, s));
    else if (n == null && (n = ""),
    t.startsWith("--"))
        e.setProperty(t, n);
    else {
        const s = Nh(e, t);
        ya.test(n) ? e.setProperty(En(s), n.replace(ya, ""), "important") : e[s] = n
    }
}
const wa = ["Webkit", "Moz", "ms"]
  , dr = {};
function Nh(e, t) {
    const n = dr[t];
    if (n)
        return n;
    let s = At(t);
    if (s !== "filter" && s in e)
        return dr[t] = s;
    s = Do(s);
    for (let o = 0; o < wa.length; o++) {
        const r = wa[o] + s;
        if (r in e)
            return dr[t] = r
    }
    return t
}
const Ea = "http://www.w3.org/1999/xlink";
function Sa(e, t, n, s, o, r=Ff(t)) {
    s && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(Ea, t.slice(6, t.length)) : e.setAttributeNS(Ea, t, n) : n == null || r && !ec(n) ? e.removeAttribute(t) : e.setAttribute(t, r ? "" : Wt(n) ? String(n) : n)
}
function Ah(e, t, n, s) {
    if (t === "innerHTML" || t === "textContent") {
        if (n == null)
            return;
        e[t] = n;
        return
    }
    const o = e.tagName;
    if (t === "value" && o !== "PROGRESS" && !o.includes("-")) {
        const i = o === "OPTION" ? e.getAttribute("value") || "" : e.value
          , a = n == null ? "" : String(n);
        (i !== a || !("_value"in e)) && (e.value = a),
        n == null && e.removeAttribute(t),
        e._value = n;
        return
    }
    let r = !1;
    if (n === "" || n == null) {
        const i = typeof e[t];
        i === "boolean" ? n = ec(n) : n == null && i === "string" ? (n = "",
        r = !0) : i === "number" && (n = 0,
        r = !0)
    }
    try {
        e[t] = n
    } catch {}
    r && e.removeAttribute(t)
}
function _n(e, t, n, s) {
    e.addEventListener(t, n, s)
}
function Ih(e, t, n, s) {
    e.removeEventListener(t, n, s)
}
const Ta = Symbol("_vei");
function xh(e, t, n, s, o=null) {
    const r = e[Ta] || (e[Ta] = {})
      , i = r[t];
    if (s && i)
        i.value = s;
    else {
        const [a,l] = Mh(t);
        if (s) {
            const c = r[t] = Fh(s, o);
            _n(e, a, c, l)
        } else
            i && (Ih(e, a, i, l),
            r[t] = void 0)
    }
}
const Ca = /(?:Once|Passive|Capture)$/;
function Mh(e) {
    let t;
    if (Ca.test(e)) {
        t = {};
        let s;
        for (; s = e.match(Ca); )
            e = e.slice(0, e.length - s[0].length),
            t[s[0].toLowerCase()] = !0
    }
    return [e[2] === ":" ? e.slice(3) : En(e.slice(2)), t]
}
let hr = 0;
const Dh = Promise.resolve()
  , Bh = () => hr || (Dh.then( () => hr = 0),
hr = Date.now());
function Fh(e, t) {
    const n = s => {
        if (!s._vts)
            s._vts = Date.now();
        else if (s._vts <= n.attached)
            return;
        Ot(Uh(s, n.value), t, 5, [s])
    }
    ;
    return n.value = e,
    n.attached = Bh(),
    n
}
function Uh(e, t) {
    if (he(t)) {
        const n = e.stopImmediatePropagation;
        return e.stopImmediatePropagation = () => {
            n.call(e),
            e._stopped = !0
        }
        ,
        t.map(s => o => !o._stopped && s && s(o))
    } else
        return t
}
const ka = e => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123
  , Vh = (e, t, n, s, o, r) => {
    const i = o === "svg";
    t === "class" ? $h(e, s, i) : t === "style" ? Lh(e, n, s) : Io(t) ? oi(t) || xh(e, t, n, s, r) : (t[0] === "." ? (t = t.slice(1),
    !0) : t[0] === "^" ? (t = t.slice(1),
    !1) : Hh(e, t, s, i)) ? (Ah(e, t, s),
    !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Sa(e, t, s, i, r, t !== "value")) : (t === "true-value" ? e._trueValue = s : t === "false-value" && (e._falseValue = s),
    Sa(e, t, s, i))
}
;
function Hh(e, t, n, s) {
    if (s)
        return !!(t === "innerHTML" || t === "textContent" || t in e && ka(t) && ge(n));
    if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
        return !1;
    if (t === "width" || t === "height") {
        const o = e.tagName;
        if (o === "IMG" || o === "VIDEO" || o === "CANVAS" || o === "SOURCE")
            return !1
    }
    return ka(t) && Ue(n) ? !1 : t in e
}
const os = e => {
    const t = e.props["onUpdate:modelValue"] || !1;
    return he(t) ? n => ao(t, n) : t
}
;
function jh(e) {
    e.target.composing = !0
}
function $a(e) {
    const t = e.target;
    t.composing && (t.composing = !1,
    t.dispatchEvent(new Event("input")))
}
const en = Symbol("_assign")
  , qe = {
    created(e, {modifiers: {lazy: t, trim: n, number: s}}, o) {
        e[en] = os(o);
        const r = s || o.props && o.props.type === "number";
        _n(e, t ? "change" : "input", i => {
            if (i.target.composing)
                return;
            let a = e.value;
            n && (a = a.trim()),
            r && (a = bo(a)),
            e[en](a)
        }
        ),
        n && _n(e, "change", () => {
            e.value = e.value.trim()
        }
        ),
        t || (_n(e, "compositionstart", jh),
        _n(e, "compositionend", $a),
        _n(e, "change", $a))
    },
    mounted(e, {value: t}) {
        e.value = t ?? ""
    },
    beforeUpdate(e, {value: t, oldValue: n, modifiers: {lazy: s, trim: o, number: r}}, i) {
        if (e[en] = os(i),
        e.composing)
            return;
        const a = (r || e.type === "number") && !/^0\d/.test(e.value) ? bo(e.value) : e.value
          , l = t ?? "";
        a !== l && (document.activeElement === e && e.type !== "range" && (s && t === n || o && e.value.trim() === l) || (e.value = l))
    }
}
  , qh = {
    created(e, {value: t}, n) {
        e.checked = ts(t, n.props.value),
        e[en] = os(n),
        _n(e, "change", () => {
            e[en](Ms(e))
        }
        )
    },
    beforeUpdate(e, {value: t, oldValue: n}, s) {
        e[en] = os(s),
        t !== n && (e.checked = ts(t, s.props.value))
    }
}
  , Wh = {
    deep: !0,
    created(e, {value: t, modifiers: {number: n}}, s) {
        const o = xo(t);
        _n(e, "change", () => {
            const r = Array.prototype.filter.call(e.options, i => i.selected).map(i => n ? bo(Ms(i)) : Ms(i));
            e[en](e.multiple ? o ? new Set(r) : r : r[0]),
            e._assigning = !0,
            Bn( () => {
                e._assigning = !1
            }
            )
        }
        ),
        e[en] = os(s)
    },
    mounted(e, {value: t, modifiers: {number: n}}) {
        Pa(e, t)
    },
    beforeUpdate(e, t, n) {
        e[en] = os(n)
    },
    updated(e, {value: t, modifiers: {number: n}}) {
        e._assigning || Pa(e, t)
    }
};
function Pa(e, t, n) {
    const s = e.multiple
      , o = he(t);
    if (!(s && !o && !xo(t))) {
        for (let r = 0, i = e.options.length; r < i; r++) {
            const a = e.options[r]
              , l = Ms(a);
            if (s)
                if (o) {
                    const c = typeof l;
                    c === "string" || c === "number" ? a.selected = t.some(u => String(u) === String(l)) : a.selected = Vf(t, l) > -1
                } else
                    a.selected = t.has(l);
            else if (ts(Ms(a), t)) {
                e.selectedIndex !== r && (e.selectedIndex = r);
                return
            }
        }
        !s && e.selectedIndex !== -1 && (e.selectedIndex = -1)
    }
}
function Ms(e) {
    return "_value"in e ? e._value : e.value
}
const Kh = ["ctrl", "shift", "alt", "meta"]
  , Qh = {
    stop: e => e.stopPropagation(),
    prevent: e => e.preventDefault(),
    self: e => e.target !== e.currentTarget,
    ctrl: e => !e.ctrlKey,
    shift: e => !e.shiftKey,
    alt: e => !e.altKey,
    meta: e => !e.metaKey,
    left: e => "button"in e && e.button !== 0,
    middle: e => "button"in e && e.button !== 1,
    right: e => "button"in e && e.button !== 2,
    exact: (e, t) => Kh.some(n => e[`${n}Key`] && !t.includes(n))
}
  , je = (e, t) => {
    const n = e._withMods || (e._withMods = {})
      , s = t.join(".");
    return n[s] || (n[s] = (o, ...r) => {
        for (let i = 0; i < t.length; i++) {
            const a = Qh[t[i]];
            if (a && a(o, t))
                return
        }
        return e(o, ...r)
    }
    )
}
  , Gh = {
    esc: "escape",
    space: " ",
    up: "arrow-up",
    left: "arrow-left",
    right: "arrow-right",
    down: "arrow-down",
    delete: "backspace"
}
  , Co = (e, t) => {
    const n = e._withKeys || (e._withKeys = {})
      , s = t.join(".");
    return n[s] || (n[s] = o => {
        if (!("key"in o))
            return;
        const r = En(o.key);
        if (t.some(i => i === r || Gh[i] === r))
            return e(o)
    }
    )
}
  , Yh = nt({
    patchProp: Vh
}, Ch);
let Ra;
function Jh() {
    return Ra || (Ra = Gd(Yh))
}
const Xh = (...e) => {
    const t = Jh().createApp(...e)
      , {mount: n} = t;
    return t.mount = s => {
        const o = Zh(s);
        if (!o)
            return;
        const r = t._component;
        !ge(r) && !r.render && !r.template && (r.template = o.innerHTML),
        o.innerHTML = "";
        const i = n(o, !1, zh(o));
        return o instanceof Element && (o.removeAttribute("v-cloak"),
        o.setAttribute("data-v-app", "")),
        i
    }
    ,
    t
}
;
function zh(e) {
    if (e instanceof SVGElement)
        return "svg";
    if (typeof MathMLElement == "function" && e instanceof MathMLElement)
        return "mathml"
}
function Zh(e) {
    return Ue(e) ? document.querySelector(e) : e
}
var ep = !1;
/*!
 * pinia v2.1.7
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */
let ru;
const Ko = e => ru = e
  , iu = Symbol();
function xr(e) {
    return e && typeof e == "object" && Object.prototype.toString.call(e) === "[object Object]" && typeof e.toJSON != "function"
}
var Rs;
(function(e) {
    e.direct = "direct",
    e.patchObject = "patch object",
    e.patchFunction = "patch function"
}
)(Rs || (Rs = {}));
function tp() {
    const e = ai(!0)
      , t = e.run( () => V({}));
    let n = []
      , s = [];
    const o = pi({
        install(r) {
            Ko(o),
            o._a = r,
            r.provide(iu, o),
            r.config.globalProperties.$pinia = o,
            s.forEach(i => n.push(i)),
            s = []
        },
        use(r) {
            return !this._a && !ep ? s.push(r) : n.push(r),
            this
        },
        _p: n,
        _a: null,
        _e: e,
        _s: new Map,
        state: t
    });
    return o
}
const au = () => {}
;
function Oa(e, t, n, s=au) {
    e.push(t);
    const o = () => {
        const r = e.indexOf(t);
        r > -1 && (e.splice(r, 1),
        s())
    }
    ;
    return !n && oc() && jf(o),
    o
}
function Qn(e, ...t) {
    e.slice().forEach(n => {
        n(...t)
    }
    )
}
const np = e => e();
function Mr(e, t) {
    e instanceof Map && t instanceof Map && t.forEach( (n, s) => e.set(s, n)),
    e instanceof Set && t instanceof Set && t.forEach(e.add, e);
    for (const n in t) {
        if (!t.hasOwnProperty(n))
            continue;
        const s = t[n]
          , o = e[n];
        xr(o) && xr(s) && e.hasOwnProperty(n) && !De(s) && !Mn(s) ? e[n] = Mr(o, s) : e[n] = s
    }
    return e
}
const sp = Symbol();
function op(e) {
    return !xr(e) || !e.hasOwnProperty(sp)
}
const {assign: fn} = Object;
function rp(e) {
    return !!(De(e) && e.effect)
}
function ip(e, t, n, s) {
    const {state: o, actions: r, getters: i} = t
      , a = n.state.value[e];
    let l;
    function c() {
        a || (n.state.value[e] = o ? o() : {});
        const u = hd(n.state.value[e]);
        return fn(u, r, Object.keys(i || {}).reduce( (h, f) => (h[f] = pi(G( () => {
            Ko(n);
            const m = n._s.get(e);
            return i[f].call(m, m)
        }
        )),
        h), {}))
    }
    return l = lu(e, c, t, n, s, !0),
    l
}
function lu(e, t, n={}, s, o, r) {
    let i;
    const a = fn({
        actions: {}
    }, n)
      , l = {
        deep: !0
    };
    let c, u, h = [], f = [], m;
    const v = s.state.value[e];
    !r && !v && (s.state.value[e] = {}),
    V({});
    let y;
    function S(M) {
        let I;
        c = u = !1,
        typeof M == "function" ? (M(s.state.value[e]),
        I = {
            type: Rs.patchFunction,
            storeId: e,
            events: m
        }) : (Mr(s.state.value[e], M),
        I = {
            type: Rs.patchObject,
            payload: M,
            storeId: e,
            events: m
        });
        const K = y = Symbol();
        Bn().then( () => {
            y === K && (c = !0)
        }
        ),
        u = !0,
        Qn(h, I, s.state.value[e])
    }
    const b = r ? function() {
        const {state: I} = n
          , K = I ? I() : {};
        this.$patch(J => {
            fn(J, K)
        }
        )
    }
    : au;
    function g() {
        i.stop(),
        h = [],
        f = [],
        s._s.delete(e)
    }
    function E(M, I) {
        return function() {
            Ko(s);
            const K = Array.from(arguments)
              , J = []
              , ne = [];
            function D(se) {
                J.push(se)
            }
            function j(se) {
                ne.push(se)
            }
            Qn(f, {
                args: K,
                name: M,
                store: R,
                after: D,
                onError: j
            });
            let X;
            try {
                X = I.apply(this && this.$id === e ? this : R, K)
            } catch (se) {
                throw Qn(ne, se),
                se
            }
            return X instanceof Promise ? X.then(se => (Qn(J, se),
            se)).catch(se => (Qn(ne, se),
            Promise.reject(se))) : (Qn(J, X),
            X)
        }
    }
    const T = {
        _p: s,
        $id: e,
        $onAction: Oa.bind(null, f),
        $patch: S,
        $reset: b,
        $subscribe(M, I={}) {
            const K = Oa(h, M, I.detached, () => J())
              , J = i.run( () => it( () => s.state.value[e], ne => {
                (I.flush === "sync" ? u : c) && M({
                    storeId: e,
                    type: Rs.direct,
                    events: m
                }, ne)
            }
            , fn({}, l, I)));
            return K
        },
        $dispose: g
    }
      , R = ht(T);
    s._s.set(e, R);
    const L = (s._a && s._a.runWithContext || np)( () => s._e.run( () => (i = ai()).run(t)));
    for (const M in L) {
        const I = L[M];
        if (De(I) && !rp(I) || Mn(I))
            r || (v && op(I) && (De(I) ? I.value = v[M] : Mr(I, v[M])),
            s.state.value[e][M] = I);
        else if (typeof I == "function") {
            const K = E(M, I);
            L[M] = K,
            a.actions[M] = I
        }
    }
    return fn(R, L),
    fn($e(R), L),
    Object.defineProperty(R, "$state", {
        get: () => s.state.value[e],
        set: M => {
            S(I => {
                fn(I, M)
            }
            )
        }
    }),
    s._p.forEach(M => {
        fn(R, i.run( () => M({
            store: R,
            app: s._a,
            pinia: s,
            options: a
        })))
    }
    ),
    v && r && n.hydrate && n.hydrate(R.$state, v),
    c = !0,
    u = !0,
    R
}
function jn(e, t, n) {
    let s, o;
    const r = typeof t == "function";
    typeof e == "string" ? (s = e,
    o = r ? n : t) : (o = e,
    s = e.id);
    function i(a, l) {
        const c = Dd();
        return a = a || (c ? et(iu, null) : null),
        a && Ko(a),
        a = ru,
        a._s.has(s) || (r ? lu(s, t, o, a) : ip(s, o, a)),
        a._s.get(s)
    }
    return i.$id = s,
    i
}
/*!
  * vue-router v4.3.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */
const Gn = typeof document < "u";
function ap(e) {
    return e.__esModule || e[Symbol.toStringTag] === "Module"
}
const Oe = Object.assign;
function pr(e, t) {
    const n = {};
    for (const s in t) {
        const o = t[s];
        n[s] = It(o) ? o.map(e) : e(o)
    }
    return n
}
const Os = () => {}
  , It = Array.isArray
  , cu = /#/g
  , lp = /&/g
  , cp = /\//g
  , up = /=/g
  , fp = /\?/g
  , uu = /\+/g
  , dp = /%5B/g
  , hp = /%5D/g
  , fu = /%5E/g
  , pp = /%60/g
  , du = /%7B/g
  , mp = /%7C/g
  , hu = /%7D/g
  , _p = /%20/g;
function Ti(e) {
    return encodeURI("" + e).replace(mp, "|").replace(dp, "[").replace(hp, "]")
}
function gp(e) {
    return Ti(e).replace(du, "{").replace(hu, "}").replace(fu, "^")
}
function Dr(e) {
    return Ti(e).replace(uu, "%2B").replace(_p, "+").replace(cu, "%23").replace(lp, "%26").replace(pp, "`").replace(du, "{").replace(hu, "}").replace(fu, "^")
}
function vp(e) {
    return Dr(e).replace(up, "%3D")
}
function bp(e) {
    return Ti(e).replace(cu, "%23").replace(fp, "%3F")
}
function yp(e) {
    return e == null ? "" : bp(e).replace(cp, "%2F")
}
function Ds(e) {
    try {
        return decodeURIComponent("" + e)
    } catch {}
    return "" + e
}
const wp = /\/$/
  , Ep = e => e.replace(wp, "");
function mr(e, t, n="/") {
    let s, o = {}, r = "", i = "";
    const a = t.indexOf("#");
    let l = t.indexOf("?");
    return a < l && a >= 0 && (l = -1),
    l > -1 && (s = t.slice(0, l),
    r = t.slice(l + 1, a > -1 ? a : t.length),
    o = e(r)),
    a > -1 && (s = s || t.slice(0, a),
    i = t.slice(a, t.length)),
    s = kp(s ?? t, n),
    {
        fullPath: s + (r && "?") + r + i,
        path: s,
        query: o,
        hash: Ds(i)
    }
}
function Sp(e, t) {
    const n = t.query ? e(t.query) : "";
    return t.path + (n && "?") + n + (t.hash || "")
}
function La(e, t) {
    return !t || !e.toLowerCase().startsWith(t.toLowerCase()) ? e : e.slice(t.length) || "/"
}
function Tp(e, t, n) {
    const s = t.matched.length - 1
      , o = n.matched.length - 1;
    return s > -1 && s === o && rs(t.matched[s], n.matched[o]) && pu(t.params, n.params) && e(t.query) === e(n.query) && t.hash === n.hash
}
function rs(e, t) {
    return (e.aliasOf || e) === (t.aliasOf || t)
}
function pu(e, t) {
    if (Object.keys(e).length !== Object.keys(t).length)
        return !1;
    for (const n in e)
        if (!Cp(e[n], t[n]))
            return !1;
    return !0
}
function Cp(e, t) {
    return It(e) ? Na(e, t) : It(t) ? Na(t, e) : e === t
}
function Na(e, t) {
    return It(t) ? e.length === t.length && e.every( (n, s) => n === t[s]) : e.length === 1 && e[0] === t
}
function kp(e, t) {
    if (e.startsWith("/"))
        return e;
    if (!e)
        return t;
    const n = t.split("/")
      , s = e.split("/")
      , o = s[s.length - 1];
    (o === ".." || o === ".") && s.push("");
    let r = n.length - 1, i, a;
    for (i = 0; i < s.length; i++)
        if (a = s[i],
        a !== ".")
            if (a === "..")
                r > 1 && r--;
            else
                break;
    return n.slice(0, r).join("/") + "/" + s.slice(i).join("/")
}
var Bs;
(function(e) {
    e.pop = "pop",
    e.push = "push"
}
)(Bs || (Bs = {}));
var Ls;
(function(e) {
    e.back = "back",
    e.forward = "forward",
    e.unknown = ""
}
)(Ls || (Ls = {}));
function $p(e) {
    if (!e)
        if (Gn) {
            const t = document.querySelector("base");
            e = t && t.getAttribute("href") || "/",
            e = e.replace(/^\w+:\/\/[^\/]+/, "")
        } else
            e = "/";
    return e[0] !== "/" && e[0] !== "#" && (e = "/" + e),
    Ep(e)
}
const Pp = /^[^#]+#/;
function Rp(e, t) {
    return e.replace(Pp, "#") + t
}
function Op(e, t) {
    const n = document.documentElement.getBoundingClientRect()
      , s = e.getBoundingClientRect();
    return {
        behavior: t.behavior,
        left: s.left - n.left - (t.left || 0),
        top: s.top - n.top - (t.top || 0)
    }
}
const Qo = () => ({
    left: window.scrollX,
    top: window.scrollY
});
function Lp(e) {
    let t;
    if ("el"in e) {
        const n = e.el
          , s = typeof n == "string" && n.startsWith("#")
          , o = typeof n == "string" ? s ? document.getElementById(n.slice(1)) : document.querySelector(n) : n;
        if (!o)
            return;
        t = Op(o, e)
    } else
        t = e;
    "scrollBehavior"in document.documentElement.style ? window.scrollTo(t) : window.scrollTo(t.left != null ? t.left : window.scrollX, t.top != null ? t.top : window.scrollY)
}
function Aa(e, t) {
    return (history.state ? history.state.position - t : -1) + e
}
const Br = new Map;
function Np(e, t) {
    Br.set(e, t)
}
function Ap(e) {
    const t = Br.get(e);
    return Br.delete(e),
    t
}
let Ip = () => location.protocol + "//" + location.host;
function mu(e, t) {
    const {pathname: n, search: s, hash: o} = t
      , r = e.indexOf("#");
    if (r > -1) {
        let a = o.includes(e.slice(r)) ? e.slice(r).length : 1
          , l = o.slice(a);
        return l[0] !== "/" && (l = "/" + l),
        La(l, "")
    }
    return La(n, e) + s + o
}
function xp(e, t, n, s) {
    let o = []
      , r = []
      , i = null;
    const a = ({state: f}) => {
        const m = mu(e, location)
          , v = n.value
          , y = t.value;
        let S = 0;
        if (f) {
            if (n.value = m,
            t.value = f,
            i && i === v) {
                i = null;
                return
            }
            S = y ? f.position - y.position : 0
        } else
            s(m);
        o.forEach(b => {
            b(n.value, v, {
                delta: S,
                type: Bs.pop,
                direction: S ? S > 0 ? Ls.forward : Ls.back : Ls.unknown
            })
        }
        )
    }
    ;
    function l() {
        i = n.value
    }
    function c(f) {
        o.push(f);
        const m = () => {
            const v = o.indexOf(f);
            v > -1 && o.splice(v, 1)
        }
        ;
        return r.push(m),
        m
    }
    function u() {
        const {history: f} = window;
        f.state && f.replaceState(Oe({}, f.state, {
            scroll: Qo()
        }), "")
    }
    function h() {
        for (const f of r)
            f();
        r = [],
        window.removeEventListener("popstate", a),
        window.removeEventListener("beforeunload", u)
    }
    return window.addEventListener("popstate", a),
    window.addEventListener("beforeunload", u, {
        passive: !0
    }),
    {
        pauseListeners: l,
        listen: c,
        destroy: h
    }
}
function Ia(e, t, n, s=!1, o=!1) {
    return {
        back: e,
        current: t,
        forward: n,
        replaced: s,
        position: window.history.length,
        scroll: o ? Qo() : null
    }
}
function Mp(e) {
    const {history: t, location: n} = window
      , s = {
        value: mu(e, n)
    }
      , o = {
        value: t.state
    };
    o.value || r(s.value, {
        back: null,
        current: s.value,
        forward: null,
        position: t.length - 1,
        replaced: !0,
        scroll: null
    }, !0);
    function r(l, c, u) {
        const h = e.indexOf("#")
          , f = h > -1 ? (n.host && document.querySelector("base") ? e : e.slice(h)) + l : Ip() + e + l;
        try {
            t[u ? "replaceState" : "pushState"](c, "", f),
            o.value = c
        } catch (m) {
            console.error(m),
            n[u ? "replace" : "assign"](f)
        }
    }
    function i(l, c) {
        const u = Oe({}, t.state, Ia(o.value.back, l, o.value.forward, !0), c, {
            position: o.value.position
        });
        r(l, u, !0),
        s.value = l
    }
    function a(l, c) {
        const u = Oe({}, o.value, t.state, {
            forward: l,
            scroll: Qo()
        });
        r(u.current, u, !0);
        const h = Oe({}, Ia(s.value, l, null), {
            position: u.position + 1
        }, c);
        r(l, h, !1),
        s.value = l
    }
    return {
        location: s,
        state: o,
        push: a,
        replace: i
    }
}
function Dp(e) {
    e = $p(e);
    const t = Mp(e)
      , n = xp(e, t.state, t.location, t.replace);
    function s(r, i=!0) {
        i || n.pauseListeners(),
        history.go(r)
    }
    const o = Oe({
        location: "",
        base: e,
        go: s,
        createHref: Rp.bind(null, e)
    }, t, n);
    return Object.defineProperty(o, "location", {
        enumerable: !0,
        get: () => t.location.value
    }),
    Object.defineProperty(o, "state", {
        enumerable: !0,
        get: () => t.state.value
    }),
    o
}
function Bp(e) {
    return e = location.host ? e || location.pathname + location.search : "",
    e.includes("#") || (e += "#"),
    Dp(e)
}
function Fp(e) {
    return typeof e == "string" || e && typeof e == "object"
}
function _u(e) {
    return typeof e == "string" || typeof e == "symbol"
}
const an = {
    path: "/",
    name: void 0,
    params: {},
    query: {},
    hash: "",
    fullPath: "/",
    matched: [],
    meta: {},
    redirectedFrom: void 0
}
  , gu = Symbol("");
var xa;
(function(e) {
    e[e.aborted = 4] = "aborted",
    e[e.cancelled = 8] = "cancelled",
    e[e.duplicated = 16] = "duplicated"
}
)(xa || (xa = {}));
function is(e, t) {
    return Oe(new Error, {
        type: e,
        [gu]: !0
    }, t)
}
function Kt(e, t) {
    return e instanceof Error && gu in e && (t == null || !!(e.type & t))
}
const Ma = "[^/]+?"
  , Up = {
    sensitive: !1,
    strict: !1,
    start: !0,
    end: !0
}
  , Vp = /[.+*?^${}()[\]/\\]/g;
function Hp(e, t) {
    const n = Oe({}, Up, t)
      , s = [];
    let o = n.start ? "^" : "";
    const r = [];
    for (const c of e) {
        const u = c.length ? [] : [90];
        n.strict && !c.length && (o += "/");
        for (let h = 0; h < c.length; h++) {
            const f = c[h];
            let m = 40 + (n.sensitive ? .25 : 0);
            if (f.type === 0)
                h || (o += "/"),
                o += f.value.replace(Vp, "\\$&"),
                m += 40;
            else if (f.type === 1) {
                const {value: v, repeatable: y, optional: S, regexp: b} = f;
                r.push({
                    name: v,
                    repeatable: y,
                    optional: S
                });
                const g = b || Ma;
                if (g !== Ma) {
                    m += 10;
                    try {
                        new RegExp(`(${g})`)
                    } catch (T) {
                        throw new Error(`Invalid custom RegExp for param "${v}" (${g}): ` + T.message)
                    }
                }
                let E = y ? `((?:${g})(?:/(?:${g}))*)` : `(${g})`;
                h || (E = S && c.length < 2 ? `(?:/${E})` : "/" + E),
                S && (E += "?"),
                o += E,
                m += 20,
                S && (m += -8),
                y && (m += -20),
                g === ".*" && (m += -50)
            }
            u.push(m)
        }
        s.push(u)
    }
    if (n.strict && n.end) {
        const c = s.length - 1;
        s[c][s[c].length - 1] += .7000000000000001
    }
    n.strict || (o += "/?"),
    n.end ? o += "$" : n.strict && (o += "(?:/|$)");
    const i = new RegExp(o,n.sensitive ? "" : "i");
    function a(c) {
        const u = c.match(i)
          , h = {};
        if (!u)
            return null;
        for (let f = 1; f < u.length; f++) {
            const m = u[f] || ""
              , v = r[f - 1];
            h[v.name] = m && v.repeatable ? m.split("/") : m
        }
        return h
    }
    function l(c) {
        let u = ""
          , h = !1;
        for (const f of e) {
            (!h || !u.endsWith("/")) && (u += "/"),
            h = !1;
            for (const m of f)
                if (m.type === 0)
                    u += m.value;
                else if (m.type === 1) {
                    const {value: v, repeatable: y, optional: S} = m
                      , b = v in c ? c[v] : "";
                    if (It(b) && !y)
                        throw new Error(`Provided param "${v}" is an array but it is not repeatable (* or + modifiers)`);
                    const g = It(b) ? b.join("/") : b;
                    if (!g)
                        if (S)
                            f.length < 2 && (u.endsWith("/") ? u = u.slice(0, -1) : h = !0);
                        else
                            throw new Error(`Missing required param "${v}"`);
                    u += g
                }
        }
        return u || "/"
    }
    return {
        re: i,
        score: s,
        keys: r,
        parse: a,
        stringify: l
    }
}
function jp(e, t) {
    let n = 0;
    for (; n < e.length && n < t.length; ) {
        const s = t[n] - e[n];
        if (s)
            return s;
        n++
    }
    return e.length < t.length ? e.length === 1 && e[0] === 80 ? -1 : 1 : e.length > t.length ? t.length === 1 && t[0] === 80 ? 1 : -1 : 0
}
function qp(e, t) {
    let n = 0;
    const s = e.score
      , o = t.score;
    for (; n < s.length && n < o.length; ) {
        const r = jp(s[n], o[n]);
        if (r)
            return r;
        n++
    }
    if (Math.abs(o.length - s.length) === 1) {
        if (Da(s))
            return 1;
        if (Da(o))
            return -1
    }
    return o.length - s.length
}
function Da(e) {
    const t = e[e.length - 1];
    return e.length > 0 && t[t.length - 1] < 0
}
const Wp = {
    type: 0,
    value: ""
}
  , Kp = /[a-zA-Z0-9_]/;
function Qp(e) {
    if (!e)
        return [[]];
    if (e === "/")
        return [[Wp]];
    if (!e.startsWith("/"))
        throw new Error(`Invalid path "${e}"`);
    function t(m) {
        throw new Error(`ERR (${n})/"${c}": ${m}`)
    }
    let n = 0
      , s = n;
    const o = [];
    let r;
    function i() {
        r && o.push(r),
        r = []
    }
    let a = 0, l, c = "", u = "";
    function h() {
        c && (n === 0 ? r.push({
            type: 0,
            value: c
        }) : n === 1 || n === 2 || n === 3 ? (r.length > 1 && (l === "*" || l === "+") && t(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),
        r.push({
            type: 1,
            value: c,
            regexp: u,
            repeatable: l === "*" || l === "+",
            optional: l === "*" || l === "?"
        })) : t("Invalid state to consume buffer"),
        c = "")
    }
    function f() {
        c += l
    }
    for (; a < e.length; ) {
        if (l = e[a++],
        l === "\\" && n !== 2) {
            s = n,
            n = 4;
            continue
        }
        switch (n) {
        case 0:
            l === "/" ? (c && h(),
            i()) : l === ":" ? (h(),
            n = 1) : f();
            break;
        case 4:
            f(),
            n = s;
            break;
        case 1:
            l === "(" ? n = 2 : Kp.test(l) ? f() : (h(),
            n = 0,
            l !== "*" && l !== "?" && l !== "+" && a--);
            break;
        case 2:
            l === ")" ? u[u.length - 1] == "\\" ? u = u.slice(0, -1) + l : n = 3 : u += l;
            break;
        case 3:
            h(),
            n = 0,
            l !== "*" && l !== "?" && l !== "+" && a--,
            u = "";
            break;
        default:
            t("Unknown state");
            break
        }
    }
    return n === 2 && t(`Unfinished custom RegExp for param "${c}"`),
    h(),
    i(),
    o
}
function Gp(e, t, n) {
    const s = Hp(Qp(e.path), n)
      , o = Oe(s, {
        record: e,
        parent: t,
        children: [],
        alias: []
    });
    return t && !o.record.aliasOf == !t.record.aliasOf && t.children.push(o),
    o
}
function Yp(e, t) {
    const n = []
      , s = new Map;
    t = Ua({
        strict: !1,
        end: !0,
        sensitive: !1
    }, t);
    function o(u) {
        return s.get(u)
    }
    function r(u, h, f) {
        const m = !f
          , v = Jp(u);
        v.aliasOf = f && f.record;
        const y = Ua(t, u)
          , S = [v];
        if ("alias"in u) {
            const E = typeof u.alias == "string" ? [u.alias] : u.alias;
            for (const T of E)
                S.push(Oe({}, v, {
                    components: f ? f.record.components : v.components,
                    path: T,
                    aliasOf: f ? f.record : v
                }))
        }
        let b, g;
        for (const E of S) {
            const {path: T} = E;
            if (h && T[0] !== "/") {
                const R = h.record.path
                  , C = R[R.length - 1] === "/" ? "" : "/";
                E.path = h.record.path + (T && C + T)
            }
            if (b = Gp(E, h, y),
            f ? f.alias.push(b) : (g = g || b,
            g !== b && g.alias.push(b),
            m && u.name && !Fa(b) && i(u.name)),
            v.children) {
                const R = v.children;
                for (let C = 0; C < R.length; C++)
                    r(R[C], b, f && f.children[C])
            }
            f = f || b,
            (b.record.components && Object.keys(b.record.components).length || b.record.name || b.record.redirect) && l(b)
        }
        return g ? () => {
            i(g)
        }
        : Os
    }
    function i(u) {
        if (_u(u)) {
            const h = s.get(u);
            h && (s.delete(u),
            n.splice(n.indexOf(h), 1),
            h.children.forEach(i),
            h.alias.forEach(i))
        } else {
            const h = n.indexOf(u);
            h > -1 && (n.splice(h, 1),
            u.record.name && s.delete(u.record.name),
            u.children.forEach(i),
            u.alias.forEach(i))
        }
    }
    function a() {
        return n
    }
    function l(u) {
        let h = 0;
        for (; h < n.length && qp(u, n[h]) >= 0 && (u.record.path !== n[h].record.path || !vu(u, n[h])); )
            h++;
        n.splice(h, 0, u),
        u.record.name && !Fa(u) && s.set(u.record.name, u)
    }
    function c(u, h) {
        let f, m = {}, v, y;
        if ("name"in u && u.name) {
            if (f = s.get(u.name),
            !f)
                throw is(1, {
                    location: u
                });
            y = f.record.name,
            m = Oe(Ba(h.params, f.keys.filter(g => !g.optional).concat(f.parent ? f.parent.keys.filter(g => g.optional) : []).map(g => g.name)), u.params && Ba(u.params, f.keys.map(g => g.name))),
            v = f.stringify(m)
        } else if (u.path != null)
            v = u.path,
            f = n.find(g => g.re.test(v)),
            f && (m = f.parse(v),
            y = f.record.name);
        else {
            if (f = h.name ? s.get(h.name) : n.find(g => g.re.test(h.path)),
            !f)
                throw is(1, {
                    location: u,
                    currentLocation: h
                });
            y = f.record.name,
            m = Oe({}, h.params, u.params),
            v = f.stringify(m)
        }
        const S = [];
        let b = f;
        for (; b; )
            S.unshift(b.record),
            b = b.parent;
        return {
            name: y,
            path: v,
            params: m,
            matched: S,
            meta: zp(S)
        }
    }
    return e.forEach(u => r(u)),
    {
        addRoute: r,
        resolve: c,
        removeRoute: i,
        getRoutes: a,
        getRecordMatcher: o
    }
}
function Ba(e, t) {
    const n = {};
    for (const s of t)
        s in e && (n[s] = e[s]);
    return n
}
function Jp(e) {
    return {
        path: e.path,
        redirect: e.redirect,
        name: e.name,
        meta: e.meta || {},
        aliasOf: void 0,
        beforeEnter: e.beforeEnter,
        props: Xp(e),
        children: e.children || [],
        instances: {},
        leaveGuards: new Set,
        updateGuards: new Set,
        enterCallbacks: {},
        components: "components"in e ? e.components || null : e.component && {
            default: e.component
        }
    }
}
function Xp(e) {
    const t = {}
      , n = e.props || !1;
    if ("component"in e)
        t.default = n;
    else
        for (const s in e.components)
            t[s] = typeof n == "object" ? n[s] : n;
    return t
}
function Fa(e) {
    for (; e; ) {
        if (e.record.aliasOf)
            return !0;
        e = e.parent
    }
    return !1
}
function zp(e) {
    return e.reduce( (t, n) => Oe(t, n.meta), {})
}
function Ua(e, t) {
    const n = {};
    for (const s in e)
        n[s] = s in t ? t[s] : e[s];
    return n
}
function vu(e, t) {
    return t.children.some(n => n === e || vu(e, n))
}
function Zp(e) {
    const t = {};
    if (e === "" || e === "?")
        return t;
    const s = (e[0] === "?" ? e.slice(1) : e).split("&");
    for (let o = 0; o < s.length; ++o) {
        const r = s[o].replace(uu, " ")
          , i = r.indexOf("=")
          , a = Ds(i < 0 ? r : r.slice(0, i))
          , l = i < 0 ? null : Ds(r.slice(i + 1));
        if (a in t) {
            let c = t[a];
            It(c) || (c = t[a] = [c]),
            c.push(l)
        } else
            t[a] = l
    }
    return t
}
function Va(e) {
    let t = "";
    for (let n in e) {
        const s = e[n];
        if (n = vp(n),
        s == null) {
            s !== void 0 && (t += (t.length ? "&" : "") + n);
            continue
        }
        (It(s) ? s.map(r => r && Dr(r)) : [s && Dr(s)]).forEach(r => {
            r !== void 0 && (t += (t.length ? "&" : "") + n,
            r != null && (t += "=" + r))
        }
        )
    }
    return t
}
function em(e) {
    const t = {};
    for (const n in e) {
        const s = e[n];
        s !== void 0 && (t[n] = It(s) ? s.map(o => o == null ? null : "" + o) : s == null ? s : "" + s)
    }
    return t
}
const bu = Symbol("")
  , Ha = Symbol("")
  , Go = Symbol("")
  , Ci = Symbol("")
  , Fr = Symbol("");
function ys() {
    let e = [];
    function t(s) {
        return e.push(s),
        () => {
            const o = e.indexOf(s);
            o > -1 && e.splice(o, 1)
        }
    }
    function n() {
        e = []
    }
    return {
        add: t,
        list: () => e.slice(),
        reset: n
    }
}
function tm(e, t, n) {
    const s = () => {
        e[t].delete(n)
    }
    ;
    ds(s),
    Nc(s),
    Lc( () => {
        e[t].add(n)
    }
    ),
    e[t].add(n)
}
function nm(e) {
    const t = et(bu, {}).value;
    t && tm(t, "updateGuards", e)
}
function pn(e, t, n, s, o, r=i => i()) {
    const i = s && (s.enterCallbacks[o] = s.enterCallbacks[o] || []);
    return () => new Promise( (a, l) => {
        const c = f => {
            f === !1 ? l(is(4, {
                from: n,
                to: t
            })) : f instanceof Error ? l(f) : Fp(f) ? l(is(2, {
                from: t,
                to: f
            })) : (i && s.enterCallbacks[o] === i && typeof f == "function" && i.push(f),
            a())
        }
          , u = r( () => e.call(s && s.instances[o], t, n, c));
        let h = Promise.resolve(u);
        e.length < 3 && (h = h.then(c)),
        h.catch(f => l(f))
    }
    )
}
function _r(e, t, n, s, o=r => r()) {
    const r = [];
    for (const i of e)
        for (const a in i.components) {
            let l = i.components[a];
            if (!(t !== "beforeRouteEnter" && !i.instances[a]))
                if (sm(l)) {
                    const u = (l.__vccOpts || l)[t];
                    u && r.push(pn(u, n, s, i, a, o))
                } else {
                    let c = l();
                    r.push( () => c.then(u => {
                        if (!u)
                            return Promise.reject(new Error(`Couldn't resolve component "${a}" at "${i.path}"`));
                        const h = ap(u) ? u.default : u;
                        i.components[a] = h;
                        const m = (h.__vccOpts || h)[t];
                        return m && pn(m, n, s, i, a, o)()
                    }
                    ))
                }
        }
    return r
}
function sm(e) {
    return typeof e == "object" || "displayName"in e || "props"in e || "__vccOpts"in e
}
function ja(e) {
    const t = et(Go)
      , n = et(Ci)
      , s = G( () => t.resolve(x(e.to)))
      , o = G( () => {
        const {matched: l} = s.value
          , {length: c} = l
          , u = l[c - 1]
          , h = n.matched;
        if (!u || !h.length)
            return -1;
        const f = h.findIndex(rs.bind(null, u));
        if (f > -1)
            return f;
        const m = qa(l[c - 2]);
        return c > 1 && qa(u) === m && h[h.length - 1].path !== m ? h.findIndex(rs.bind(null, l[c - 2])) : f
    }
    )
      , r = G( () => o.value > -1 && am(n.params, s.value.params))
      , i = G( () => o.value > -1 && o.value === n.matched.length - 1 && pu(n.params, s.value.params));
    function a(l={}) {
        return im(l) ? t[x(e.replace) ? "replace" : "push"](x(e.to)).catch(Os) : Promise.resolve()
    }
    return {
        route: s,
        href: G( () => s.value.href),
        isActive: r,
        isExactActive: i,
        navigate: a
    }
}
const om = fs({
    name: "RouterLink",
    compatConfig: {
        MODE: 3
    },
    props: {
        to: {
            type: [String, Object],
            required: !0
        },
        replace: Boolean,
        activeClass: String,
        exactActiveClass: String,
        custom: Boolean,
        ariaCurrentValue: {
            type: String,
            default: "page"
        }
    },
    useLink: ja,
    setup(e, {slots: t}) {
        const n = ht(ja(e))
          , {options: s} = et(Go)
          , o = G( () => ({
            [Wa(e.activeClass, s.linkActiveClass, "router-link-active")]: n.isActive,
            [Wa(e.exactActiveClass, s.linkExactActiveClass, "router-link-exact-active")]: n.isExactActive
        }));
        return () => {
            const r = t.default && t.default(n);
            return e.custom ? r : Wo("a", {
                "aria-current": n.isExactActive ? e.ariaCurrentValue : null,
                href: n.href,
                onClick: n.navigate,
                class: o.value
            }, r)
        }
    }
})
  , rm = om;
function im(e) {
    if (!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) && !e.defaultPrevented && !(e.button !== void 0 && e.button !== 0)) {
        if (e.currentTarget && e.currentTarget.getAttribute) {
            const t = e.currentTarget.getAttribute("target");
            if (/\b_blank\b/i.test(t))
                return
        }
        return e.preventDefault && e.preventDefault(),
        !0
    }
}
function am(e, t) {
    for (const n in t) {
        const s = t[n]
          , o = e[n];
        if (typeof s == "string") {
            if (s !== o)
                return !1
        } else if (!It(o) || o.length !== s.length || s.some( (r, i) => r !== o[i]))
            return !1
    }
    return !0
}
function qa(e) {
    return e ? e.aliasOf ? e.aliasOf.path : e.path : ""
}
const Wa = (e, t, n) => e ?? t ?? n
  , lm = fs({
    name: "RouterView",
    inheritAttrs: !1,
    props: {
        name: {
            type: String,
            default: "default"
        },
        route: Object
    },
    compatConfig: {
        MODE: 3
    },
    setup(e, {attrs: t, slots: n}) {
        const s = et(Fr)
          , o = G( () => e.route || s.value)
          , r = et(Ha, 0)
          , i = G( () => {
            let c = x(r);
            const {matched: u} = o.value;
            let h;
            for (; (h = u[c]) && !h.components; )
                c++;
            return c
        }
        )
          , a = G( () => o.value.matched[i.value]);
        es(Ha, G( () => i.value + 1)),
        es(bu, a),
        es(Fr, o);
        const l = V();
        return it( () => [l.value, a.value, e.name], ([c,u,h], [f,m,v]) => {
            u && (u.instances[h] = c,
            m && m !== u && c && c === f && (u.leaveGuards.size || (u.leaveGuards = m.leaveGuards),
            u.updateGuards.size || (u.updateGuards = m.updateGuards))),
            c && u && (!m || !rs(u, m) || !f) && (u.enterCallbacks[h] || []).forEach(y => y(c))
        }
        , {
            flush: "post"
        }),
        () => {
            const c = o.value
              , u = e.name
              , h = a.value
              , f = h && h.components[u];
            if (!f)
                return Ka(n.default, {
                    Component: f,
                    route: c
                });
            const m = h.props[u]
              , v = m ? m === !0 ? c.params : typeof m == "function" ? m(c) : m : null
              , S = Wo(f, Oe({}, v, t, {
                onVnodeUnmounted: b => {
                    b.component.isUnmounted && (h.instances[u] = null)
                }
                ,
                ref: l
            }));
            return Ka(n.default, {
                Component: S,
                route: c
            }) || S
        }
    }
});
function Ka(e, t) {
    if (!e)
        return null;
    const n = e(t);
    return n.length === 1 ? n[0] : n
}
const yu = lm;
function cm(e) {
    const t = Yp(e.routes, e)
      , n = e.parseQuery || Zp
      , s = e.stringifyQuery || Va
      , o = e.history
      , r = ys()
      , i = ys()
      , a = ys()
      , l = wc(an);
    let c = an;
    Gn && e.scrollBehavior && "scrollRestoration"in history && (history.scrollRestoration = "manual");
    const u = pr.bind(null, H => "" + H)
      , h = pr.bind(null, yp)
      , f = pr.bind(null, Ds);
    function m(H, te) {
        let Z, re;
        return _u(H) ? (Z = t.getRecordMatcher(H),
        re = te) : re = H,
        t.addRoute(re, Z)
    }
    function v(H) {
        const te = t.getRecordMatcher(H);
        te && t.removeRoute(te)
    }
    function y() {
        return t.getRoutes().map(H => H.record)
    }
    function S(H) {
        return !!t.getRecordMatcher(H)
    }
    function b(H, te) {
        if (te = Oe({}, te || l.value),
        typeof H == "string") {
            const p = mr(n, H, te.path)
              , w = t.resolve({
                path: p.path
            }, te)
              , P = o.createHref(p.fullPath);
            return Oe(p, w, {
                params: f(w.params),
                hash: Ds(p.hash),
                redirectedFrom: void 0,
                href: P
            })
        }
        let Z;
        if (H.path != null)
            Z = Oe({}, H, {
                path: mr(n, H.path, te.path).path
            });
        else {
            const p = Oe({}, H.params);
            for (const w in p)
                p[w] == null && delete p[w];
            Z = Oe({}, H, {
                params: h(p)
            }),
            te.params = h(te.params)
        }
        const re = t.resolve(Z, te)
          , we = H.hash || "";
        re.params = u(f(re.params));
        const Ne = Sp(s, Oe({}, H, {
            hash: gp(we),
            path: re.path
        }))
          , d = o.createHref(Ne);
        return Oe({
            fullPath: Ne,
            hash: we,
            query: s === Va ? em(H.query) : H.query || {}
        }, re, {
            redirectedFrom: void 0,
            href: d
        })
    }
    function g(H) {
        return typeof H == "string" ? mr(n, H, l.value.path) : Oe({}, H)
    }
    function E(H, te) {
        if (c !== H)
            return is(8, {
                from: te,
                to: H
            })
    }
    function T(H) {
        return L(H)
    }
    function R(H) {
        return T(Oe(g(H), {
            replace: !0
        }))
    }
    function C(H) {
        const te = H.matched[H.matched.length - 1];
        if (te && te.redirect) {
            const {redirect: Z} = te;
            let re = typeof Z == "function" ? Z(H) : Z;
            return typeof re == "string" && (re = re.includes("?") || re.includes("#") ? re = g(re) : {
                path: re
            },
            re.params = {}),
            Oe({
                query: H.query,
                hash: H.hash,
                params: re.path != null ? {} : H.params
            }, re)
        }
    }
    function L(H, te) {
        const Z = c = b(H)
          , re = l.value
          , we = H.state
          , Ne = H.force
          , d = H.replace === !0
          , p = C(Z);
        if (p)
            return L(Oe(g(p), {
                state: typeof p == "object" ? Oe({}, we, p.state) : we,
                force: Ne,
                replace: d
            }), te || Z);
        const w = Z;
        w.redirectedFrom = te;
        let P;
        return !Ne && Tp(s, re, Z) && (P = is(16, {
            to: w,
            from: re
        }),
        He(re, re, !0, !1)),
        (P ? Promise.resolve(P) : K(w, re)).catch(O => Kt(O) ? Kt(O, 2) ? O : St(O) : be(O, w, re)).then(O => {
            if (O) {
                if (Kt(O, 2))
                    return L(Oe({
                        replace: d
                    }, g(O.to), {
                        state: typeof O.to == "object" ? Oe({}, we, O.to.state) : we,
                        force: Ne
                    }), te || w)
            } else
                O = ne(w, re, !0, d, we);
            return J(w, re, O),
            O
        }
        )
    }
    function M(H, te) {
        const Z = E(H, te);
        return Z ? Promise.reject(Z) : Promise.resolve()
    }
    function I(H) {
        const te = $t.values().next().value;
        return te && typeof te.runWithContext == "function" ? te.runWithContext(H) : H()
    }
    function K(H, te) {
        let Z;
        const [re,we,Ne] = um(H, te);
        Z = _r(re.reverse(), "beforeRouteLeave", H, te);
        for (const p of re)
            p.leaveGuards.forEach(w => {
                Z.push(pn(w, H, te))
            }
            );
        const d = M.bind(null, H, te);
        return Z.push(d),
        Xe(Z).then( () => {
            Z = [];
            for (const p of r.list())
                Z.push(pn(p, H, te));
            return Z.push(d),
            Xe(Z)
        }
        ).then( () => {
            Z = _r(we, "beforeRouteUpdate", H, te);
            for (const p of we)
                p.updateGuards.forEach(w => {
                    Z.push(pn(w, H, te))
                }
                );
            return Z.push(d),
            Xe(Z)
        }
        ).then( () => {
            Z = [];
            for (const p of Ne)
                if (p.beforeEnter)
                    if (It(p.beforeEnter))
                        for (const w of p.beforeEnter)
                            Z.push(pn(w, H, te));
                    else
                        Z.push(pn(p.beforeEnter, H, te));
            return Z.push(d),
            Xe(Z)
        }
        ).then( () => (H.matched.forEach(p => p.enterCallbacks = {}),
        Z = _r(Ne, "beforeRouteEnter", H, te, I),
        Z.push(d),
        Xe(Z))).then( () => {
            Z = [];
            for (const p of i.list())
                Z.push(pn(p, H, te));
            return Z.push(d),
            Xe(Z)
        }
        ).catch(p => Kt(p, 8) ? p : Promise.reject(p))
    }
    function J(H, te, Z) {
        a.list().forEach(re => I( () => re(H, te, Z)))
    }
    function ne(H, te, Z, re, we) {
        const Ne = E(H, te);
        if (Ne)
            return Ne;
        const d = te === an
          , p = Gn ? history.state : {};
        Z && (re || d ? o.replace(H.fullPath, Oe({
            scroll: d && p && p.scroll
        }, we)) : o.push(H.fullPath, we)),
        l.value = H,
        He(H, te, Z, d),
        St()
    }
    let D;
    function j() {
        D || (D = o.listen( (H, te, Z) => {
            if (!on.listening)
                return;
            const re = b(H)
              , we = C(re);
            if (we) {
                L(Oe(we, {
                    replace: !0
                }), re).catch(Os);
                return
            }
            c = re;
            const Ne = l.value;
            Gn && Np(Aa(Ne.fullPath, Z.delta), Qo()),
            K(re, Ne).catch(d => Kt(d, 12) ? d : Kt(d, 2) ? (L(d.to, re).then(p => {
                Kt(p, 20) && !Z.delta && Z.type === Bs.pop && o.go(-1, !1)
            }
            ).catch(Os),
            Promise.reject()) : (Z.delta && o.go(-Z.delta, !1),
            be(d, re, Ne))).then(d => {
                d = d || ne(re, Ne, !1),
                d && (Z.delta && !Kt(d, 8) ? o.go(-Z.delta, !1) : Z.type === Bs.pop && Kt(d, 20) && o.go(-1, !1)),
                J(re, Ne, d)
            }
            ).catch(Os)
        }
        ))
    }
    let X = ys(), se = ys(), de;
    function be(H, te, Z) {
        St(H);
        const re = se.list();
        return re.length ? re.forEach(we => we(H, te, Z)) : console.error(H),
        Promise.reject(H)
    }
    function me() {
        return de && l.value !== an ? Promise.resolve() : new Promise( (H, te) => {
            X.add([H, te])
        }
        )
    }
    function St(H) {
        return de || (de = !H,
        j(),
        X.list().forEach( ([te,Z]) => H ? Z(H) : te()),
        X.reset()),
        H
    }
    function He(H, te, Z, re) {
        const {scrollBehavior: we} = e;
        if (!Gn || !we)
            return Promise.resolve();
        const Ne = !Z && Ap(Aa(H.fullPath, 0)) || (re || !Z) && history.state && history.state.scroll || null;
        return Bn().then( () => we(H, te, Ne)).then(d => d && Lp(d)).catch(d => be(d, H, te))
    }
    const We = H => o.go(H);
    let Dt;
    const $t = new Set
      , on = {
        currentRoute: l,
        listening: !0,
        addRoute: m,
        removeRoute: v,
        hasRoute: S,
        getRoutes: y,
        resolve: b,
        options: e,
        push: T,
        replace: R,
        go: We,
        back: () => We(-1),
        forward: () => We(1),
        beforeEach: r.add,
        beforeResolve: i.add,
        afterEach: a.add,
        onError: se.add,
        isReady: me,
        install(H) {
            const te = this;
            H.component("RouterLink", rm),
            H.component("RouterView", yu),
            H.config.globalProperties.$router = te,
            Object.defineProperty(H.config.globalProperties, "$route", {
                enumerable: !0,
                get: () => x(l)
            }),
            Gn && !Dt && l.value === an && (Dt = !0,
            T(o.location).catch(we => {}
            ));
            const Z = {};
            for (const we in an)
                Object.defineProperty(Z, we, {
                    get: () => l.value[we],
                    enumerable: !0
                });
            H.provide(Go, te),
            H.provide(Ci, _c(Z)),
            H.provide(Fr, l);
            const re = H.unmount;
            $t.add(H),
            H.unmount = function() {
                $t.delete(H),
                $t.size < 1 && (c = an,
                D && D(),
                D = null,
                l.value = an,
                Dt = !1,
                de = !1),
                re()
            }
        }
    };
    function Xe(H) {
        return H.reduce( (te, Z) => te.then( () => I(Z)), Promise.resolve())
    }
    return on
}
function um(e, t) {
    const n = []
      , s = []
      , o = []
      , r = Math.max(t.matched.length, e.matched.length);
    for (let i = 0; i < r; i++) {
        const a = t.matched[i];
        a && (e.matched.find(c => rs(c, a)) ? s.push(a) : n.push(a));
        const l = e.matched[i];
        l && (t.matched.find(c => rs(c, l)) || o.push(l))
    }
    return [n, s, o]
}
function Je() {
    return et(Go)
}
function lt() {
    return et(Ci)
}
/*!
  * shared v9.10.2
  * (c) 2024 kazuya kawaguchi
  * Released under the MIT License.
  */
const ko = typeof window < "u"
  , Cn = (e, t=!1) => t ? Symbol.for(e) : Symbol(e)
  , fm = (e, t, n) => dm({
    l: e,
    k: t,
    s: n
})
  , dm = e => JSON.stringify(e).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029").replace(/\u0027/g, "\\u0027")
  , Ye = e => typeof e == "number" && isFinite(e)
  , hm = e => Eu(e) === "[object Date]"
  , $o = e => Eu(e) === "[object RegExp]"
  , Yo = e => Ce(e) && Object.keys(e).length === 0
  , tt = Object.assign;
let Qa;
const ki = () => Qa || (Qa = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Ga(e) {
    return e.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;")
}
const pm = Object.prototype.hasOwnProperty;
function Po(e, t) {
    return pm.call(e, t)
}
const Qe = Array.isArray
  , Be = e => typeof e == "function"
  , ae = e => typeof e == "string"
  , Me = e => typeof e == "boolean"
  , Re = e => e !== null && typeof e == "object"
  , mm = e => Re(e) && Be(e.then) && Be(e.catch)
  , wu = Object.prototype.toString
  , Eu = e => wu.call(e)
  , Ce = e => {
    if (!Re(e))
        return !1;
    const t = Object.getPrototypeOf(e);
    return t === null || t.constructor === Object
}
  , _m = e => e == null ? "" : Qe(e) || Ce(e) && e.toString === wu ? JSON.stringify(e, null, 2) : String(e);
function gm(e, t="") {
    return e.reduce( (n, s, o) => o === 0 ? n + s : n + t + s, "")
}
function $i(e) {
    let t = e;
    return () => ++t
}
function vm(e, t) {
    typeof console < "u" && (console.warn("[intlify] " + e),
    t && console.warn(t.stack))
}
const ro = e => !Re(e) || Qe(e);
function fo(e, t) {
    if (ro(e) || ro(t))
        throw new Error("Invalid value");
    const n = [{
        src: e,
        des: t
    }];
    for (; n.length; ) {
        const {src: s, des: o} = n.pop();
        Object.keys(s).forEach(r => {
            ro(s[r]) || ro(o[r]) ? o[r] = s[r] : n.push({
                src: s[r],
                des: o[r]
            })
        }
        )
    }
}
/*!
  * message-compiler v9.10.2
  * (c) 2024 kazuya kawaguchi
  * Released under the MIT License.
  */
function bm(e, t, n) {
    return {
        line: e,
        column: t,
        offset: n
    }
}
function Ur(e, t, n) {
    const s = {
        start: e,
        end: t
    };
    return n != null && (s.source = n),
    s
}
const ym = /\{([0-9a-zA-Z]+)\}/g;
function wm(e, ...t) {
    return t.length === 1 && Em(t[0]) && (t = t[0]),
    (!t || !t.hasOwnProperty) && (t = {}),
    e.replace(ym, (n, s) => t.hasOwnProperty(s) ? t[s] : "")
}
const Su = Object.assign
  , Ya = e => typeof e == "string"
  , Em = e => e !== null && typeof e == "object";
function Tu(e, t="") {
    return e.reduce( (n, s, o) => o === 0 ? n + s : n + t + s, "")
}
const pe = {
    EXPECTED_TOKEN: 1,
    INVALID_TOKEN_IN_PLACEHOLDER: 2,
    UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER: 3,
    UNKNOWN_ESCAPE_SEQUENCE: 4,
    INVALID_UNICODE_ESCAPE_SEQUENCE: 5,
    UNBALANCED_CLOSING_BRACE: 6,
    UNTERMINATED_CLOSING_BRACE: 7,
    EMPTY_PLACEHOLDER: 8,
    NOT_ALLOW_NEST_PLACEHOLDER: 9,
    INVALID_LINKED_FORMAT: 10,
    MUST_HAVE_MESSAGES_IN_PLURAL: 11,
    UNEXPECTED_EMPTY_LINKED_MODIFIER: 12,
    UNEXPECTED_EMPTY_LINKED_KEY: 13,
    UNEXPECTED_LEXICAL_ANALYSIS: 14,
    UNHANDLED_CODEGEN_NODE_TYPE: 15,
    UNHANDLED_MINIFIER_NODE_TYPE: 16,
    __EXTEND_POINT__: 17
}
  , Sm = {
    [pe.EXPECTED_TOKEN]: "Expected token: '{0}'",
    [pe.INVALID_TOKEN_IN_PLACEHOLDER]: "Invalid token in placeholder: '{0}'",
    [pe.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER]: "Unterminated single quote in placeholder",
    [pe.UNKNOWN_ESCAPE_SEQUENCE]: "Unknown escape sequence: \\{0}",
    [pe.INVALID_UNICODE_ESCAPE_SEQUENCE]: "Invalid unicode escape sequence: {0}",
    [pe.UNBALANCED_CLOSING_BRACE]: "Unbalanced closing brace",
    [pe.UNTERMINATED_CLOSING_BRACE]: "Unterminated closing brace",
    [pe.EMPTY_PLACEHOLDER]: "Empty placeholder",
    [pe.NOT_ALLOW_NEST_PLACEHOLDER]: "Not allowed nest placeholder",
    [pe.INVALID_LINKED_FORMAT]: "Invalid linked format",
    [pe.MUST_HAVE_MESSAGES_IN_PLURAL]: "Plural must have messages",
    [pe.UNEXPECTED_EMPTY_LINKED_MODIFIER]: "Unexpected empty linked modifier",
    [pe.UNEXPECTED_EMPTY_LINKED_KEY]: "Unexpected empty linked key",
    [pe.UNEXPECTED_LEXICAL_ANALYSIS]: "Unexpected lexical analysis in token: '{0}'",
    [pe.UNHANDLED_CODEGEN_NODE_TYPE]: "unhandled codegen node type: '{0}'",
    [pe.UNHANDLED_MINIFIER_NODE_TYPE]: "unhandled mimifier node type: '{0}'"
};
function ps(e, t, n={}) {
    const {domain: s, messages: o, args: r} = n
      , i = wm((o || Sm)[e] || "", ...r || [])
      , a = new SyntaxError(String(i));
    return a.code = e,
    t && (a.location = t),
    a.domain = s,
    a
}
function Tm(e) {
    throw e
}
const Qt = " "
  , Cm = "\r"
  , rt = `
`
  , km = "\u2028"
  , $m = "\u2029";
function Pm(e) {
    const t = e;
    let n = 0
      , s = 1
      , o = 1
      , r = 0;
    const i = L => t[L] === Cm && t[L + 1] === rt
      , a = L => t[L] === rt
      , l = L => t[L] === $m
      , c = L => t[L] === km
      , u = L => i(L) || a(L) || l(L) || c(L)
      , h = () => n
      , f = () => s
      , m = () => o
      , v = () => r
      , y = L => i(L) || l(L) || c(L) ? rt : t[L]
      , S = () => y(n)
      , b = () => y(n + r);
    function g() {
        return r = 0,
        u(n) && (s++,
        o = 0),
        i(n) && n++,
        n++,
        o++,
        t[n]
    }
    function E() {
        return i(n + r) && r++,
        r++,
        t[n + r]
    }
    function T() {
        n = 0,
        s = 1,
        o = 1,
        r = 0
    }
    function R(L=0) {
        r = L
    }
    function C() {
        const L = n + r;
        for (; L !== n; )
            g();
        r = 0
    }
    return {
        index: h,
        line: f,
        column: m,
        peekOffset: v,
        charAt: y,
        currentChar: S,
        currentPeek: b,
        next: g,
        peek: E,
        reset: T,
        resetPeek: R,
        skipToPeek: C
    }
}
const ln = void 0
  , Rm = "."
  , Ja = "'"
  , Om = "tokenizer";
function Lm(e, t={}) {
    const n = t.location !== !1
      , s = Pm(e)
      , o = () => s.index()
      , r = () => bm(s.line(), s.column(), s.index())
      , i = r()
      , a = o()
      , l = {
        currentType: 14,
        offset: a,
        startLoc: i,
        endLoc: i,
        lastType: 14,
        lastOffset: a,
        lastStartLoc: i,
        lastEndLoc: i,
        braceNest: 0,
        inLinked: !1,
        text: ""
    }
      , c = () => l
      , {onError: u} = t;
    function h(d, p, w, ...P) {
        const O = c();
        if (p.column += w,
        p.offset += w,
        u) {
            const U = n ? Ur(O.startLoc, p) : null
              , Y = ps(d, U, {
                domain: Om,
                args: P
            });
            u(Y)
        }
    }
    function f(d, p, w) {
        d.endLoc = r(),
        d.currentType = p;
        const P = {
            type: p
        };
        return n && (P.loc = Ur(d.startLoc, d.endLoc)),
        w != null && (P.value = w),
        P
    }
    const m = d => f(d, 14);
    function v(d, p) {
        return d.currentChar() === p ? (d.next(),
        p) : (h(pe.EXPECTED_TOKEN, r(), 0, p),
        "")
    }
    function y(d) {
        let p = "";
        for (; d.currentPeek() === Qt || d.currentPeek() === rt; )
            p += d.currentPeek(),
            d.peek();
        return p
    }
    function S(d) {
        const p = y(d);
        return d.skipToPeek(),
        p
    }
    function b(d) {
        if (d === ln)
            return !1;
        const p = d.charCodeAt(0);
        return p >= 97 && p <= 122 || p >= 65 && p <= 90 || p === 95
    }
    function g(d) {
        if (d === ln)
            return !1;
        const p = d.charCodeAt(0);
        return p >= 48 && p <= 57
    }
    function E(d, p) {
        const {currentType: w} = p;
        if (w !== 2)
            return !1;
        y(d);
        const P = b(d.currentPeek());
        return d.resetPeek(),
        P
    }
    function T(d, p) {
        const {currentType: w} = p;
        if (w !== 2)
            return !1;
        y(d);
        const P = d.currentPeek() === "-" ? d.peek() : d.currentPeek()
          , O = g(P);
        return d.resetPeek(),
        O
    }
    function R(d, p) {
        const {currentType: w} = p;
        if (w !== 2)
            return !1;
        y(d);
        const P = d.currentPeek() === Ja;
        return d.resetPeek(),
        P
    }
    function C(d, p) {
        const {currentType: w} = p;
        if (w !== 8)
            return !1;
        y(d);
        const P = d.currentPeek() === ".";
        return d.resetPeek(),
        P
    }
    function L(d, p) {
        const {currentType: w} = p;
        if (w !== 9)
            return !1;
        y(d);
        const P = b(d.currentPeek());
        return d.resetPeek(),
        P
    }
    function M(d, p) {
        const {currentType: w} = p;
        if (!(w === 8 || w === 12))
            return !1;
        y(d);
        const P = d.currentPeek() === ":";
        return d.resetPeek(),
        P
    }
    function I(d, p) {
        const {currentType: w} = p;
        if (w !== 10)
            return !1;
        const P = () => {
            const U = d.currentPeek();
            return U === "{" ? b(d.peek()) : U === "@" || U === "%" || U === "|" || U === ":" || U === "." || U === Qt || !U ? !1 : U === rt ? (d.peek(),
            P()) : b(U)
        }
          , O = P();
        return d.resetPeek(),
        O
    }
    function K(d) {
        y(d);
        const p = d.currentPeek() === "|";
        return d.resetPeek(),
        p
    }
    function J(d) {
        const p = y(d)
          , w = d.currentPeek() === "%" && d.peek() === "{";
        return d.resetPeek(),
        {
            isModulo: w,
            hasSpace: p.length > 0
        }
    }
    function ne(d, p=!0) {
        const w = (O=!1, U="", Y=!1) => {
            const Q = d.currentPeek();
            return Q === "{" ? U === "%" ? !1 : O : Q === "@" || !Q ? U === "%" ? !0 : O : Q === "%" ? (d.peek(),
            w(O, "%", !0)) : Q === "|" ? U === "%" || Y ? !0 : !(U === Qt || U === rt) : Q === Qt ? (d.peek(),
            w(!0, Qt, Y)) : Q === rt ? (d.peek(),
            w(!0, rt, Y)) : !0
        }
          , P = w();
        return p && d.resetPeek(),
        P
    }
    function D(d, p) {
        const w = d.currentChar();
        return w === ln ? ln : p(w) ? (d.next(),
        w) : null
    }
    function j(d) {
        return D(d, w => {
            const P = w.charCodeAt(0);
            return P >= 97 && P <= 122 || P >= 65 && P <= 90 || P >= 48 && P <= 57 || P === 95 || P === 36
        }
        )
    }
    function X(d) {
        return D(d, w => {
            const P = w.charCodeAt(0);
            return P >= 48 && P <= 57
        }
        )
    }
    function se(d) {
        return D(d, w => {
            const P = w.charCodeAt(0);
            return P >= 48 && P <= 57 || P >= 65 && P <= 70 || P >= 97 && P <= 102
        }
        )
    }
    function de(d) {
        let p = ""
          , w = "";
        for (; p = X(d); )
            w += p;
        return w
    }
    function be(d) {
        S(d);
        const p = d.currentChar();
        return p !== "%" && h(pe.EXPECTED_TOKEN, r(), 0, p),
        d.next(),
        "%"
    }
    function me(d) {
        let p = "";
        for (; ; ) {
            const w = d.currentChar();
            if (w === "{" || w === "}" || w === "@" || w === "|" || !w)
                break;
            if (w === "%")
                if (ne(d))
                    p += w,
                    d.next();
                else
                    break;
            else if (w === Qt || w === rt)
                if (ne(d))
                    p += w,
                    d.next();
                else {
                    if (K(d))
                        break;
                    p += w,
                    d.next()
                }
            else
                p += w,
                d.next()
        }
        return p
    }
    function St(d) {
        S(d);
        let p = ""
          , w = "";
        for (; p = j(d); )
            w += p;
        return d.currentChar() === ln && h(pe.UNTERMINATED_CLOSING_BRACE, r(), 0),
        w
    }
    function He(d) {
        S(d);
        let p = "";
        return d.currentChar() === "-" ? (d.next(),
        p += `-${de(d)}`) : p += de(d),
        d.currentChar() === ln && h(pe.UNTERMINATED_CLOSING_BRACE, r(), 0),
        p
    }
    function We(d) {
        S(d),
        v(d, "'");
        let p = ""
          , w = "";
        const P = U => U !== Ja && U !== rt;
        for (; p = D(d, P); )
            p === "\\" ? w += Dt(d) : w += p;
        const O = d.currentChar();
        return O === rt || O === ln ? (h(pe.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER, r(), 0),
        O === rt && (d.next(),
        v(d, "'")),
        w) : (v(d, "'"),
        w)
    }
    function Dt(d) {
        const p = d.currentChar();
        switch (p) {
        case "\\":
        case "'":
            return d.next(),
            `\\${p}`;
        case "u":
            return $t(d, p, 4);
        case "U":
            return $t(d, p, 6);
        default:
            return h(pe.UNKNOWN_ESCAPE_SEQUENCE, r(), 0, p),
            ""
        }
    }
    function $t(d, p, w) {
        v(d, p);
        let P = "";
        for (let O = 0; O < w; O++) {
            const U = se(d);
            if (!U) {
                h(pe.INVALID_UNICODE_ESCAPE_SEQUENCE, r(), 0, `\\${p}${P}${d.currentChar()}`);
                break
            }
            P += U
        }
        return `\\${p}${P}`
    }
    function on(d) {
        S(d);
        let p = ""
          , w = "";
        const P = O => O !== "{" && O !== "}" && O !== Qt && O !== rt;
        for (; p = D(d, P); )
            w += p;
        return w
    }
    function Xe(d) {
        let p = ""
          , w = "";
        for (; p = j(d); )
            w += p;
        return w
    }
    function H(d) {
        const p = (w=!1, P) => {
            const O = d.currentChar();
            return O === "{" || O === "%" || O === "@" || O === "|" || O === "(" || O === ")" || !O || O === Qt ? P : O === rt || O === Rm ? (P += O,
            d.next(),
            p(w, P)) : (P += O,
            d.next(),
            p(!0, P))
        }
        ;
        return p(!1, "")
    }
    function te(d) {
        S(d);
        const p = v(d, "|");
        return S(d),
        p
    }
    function Z(d, p) {
        let w = null;
        switch (d.currentChar()) {
        case "{":
            return p.braceNest >= 1 && h(pe.NOT_ALLOW_NEST_PLACEHOLDER, r(), 0),
            d.next(),
            w = f(p, 2, "{"),
            S(d),
            p.braceNest++,
            w;
        case "}":
            return p.braceNest > 0 && p.currentType === 2 && h(pe.EMPTY_PLACEHOLDER, r(), 0),
            d.next(),
            w = f(p, 3, "}"),
            p.braceNest--,
            p.braceNest > 0 && S(d),
            p.inLinked && p.braceNest === 0 && (p.inLinked = !1),
            w;
        case "@":
            return p.braceNest > 0 && h(pe.UNTERMINATED_CLOSING_BRACE, r(), 0),
            w = re(d, p) || m(p),
            p.braceNest = 0,
            w;
        default:
            {
                let O = !0
                  , U = !0
                  , Y = !0;
                if (K(d))
                    return p.braceNest > 0 && h(pe.UNTERMINATED_CLOSING_BRACE, r(), 0),
                    w = f(p, 1, te(d)),
                    p.braceNest = 0,
                    p.inLinked = !1,
                    w;
                if (p.braceNest > 0 && (p.currentType === 5 || p.currentType === 6 || p.currentType === 7))
                    return h(pe.UNTERMINATED_CLOSING_BRACE, r(), 0),
                    p.braceNest = 0,
                    we(d, p);
                if (O = E(d, p))
                    return w = f(p, 5, St(d)),
                    S(d),
                    w;
                if (U = T(d, p))
                    return w = f(p, 6, He(d)),
                    S(d),
                    w;
                if (Y = R(d, p))
                    return w = f(p, 7, We(d)),
                    S(d),
                    w;
                if (!O && !U && !Y)
                    return w = f(p, 13, on(d)),
                    h(pe.INVALID_TOKEN_IN_PLACEHOLDER, r(), 0, w.value),
                    S(d),
                    w;
                break
            }
        }
        return w
    }
    function re(d, p) {
        const {currentType: w} = p;
        let P = null;
        const O = d.currentChar();
        switch ((w === 8 || w === 9 || w === 12 || w === 10) && (O === rt || O === Qt) && h(pe.INVALID_LINKED_FORMAT, r(), 0),
        O) {
        case "@":
            return d.next(),
            P = f(p, 8, "@"),
            p.inLinked = !0,
            P;
        case ".":
            return S(d),
            d.next(),
            f(p, 9, ".");
        case ":":
            return S(d),
            d.next(),
            f(p, 10, ":");
        default:
            return K(d) ? (P = f(p, 1, te(d)),
            p.braceNest = 0,
            p.inLinked = !1,
            P) : C(d, p) || M(d, p) ? (S(d),
            re(d, p)) : L(d, p) ? (S(d),
            f(p, 12, Xe(d))) : I(d, p) ? (S(d),
            O === "{" ? Z(d, p) || P : f(p, 11, H(d))) : (w === 8 && h(pe.INVALID_LINKED_FORMAT, r(), 0),
            p.braceNest = 0,
            p.inLinked = !1,
            we(d, p))
        }
    }
    function we(d, p) {
        let w = {
            type: 14
        };
        if (p.braceNest > 0)
            return Z(d, p) || m(p);
        if (p.inLinked)
            return re(d, p) || m(p);
        switch (d.currentChar()) {
        case "{":
            return Z(d, p) || m(p);
        case "}":
            return h(pe.UNBALANCED_CLOSING_BRACE, r(), 0),
            d.next(),
            f(p, 3, "}");
        case "@":
            return re(d, p) || m(p);
        default:
            {
                if (K(d))
                    return w = f(p, 1, te(d)),
                    p.braceNest = 0,
                    p.inLinked = !1,
                    w;
                const {isModulo: O, hasSpace: U} = J(d);
                if (O)
                    return U ? f(p, 0, me(d)) : f(p, 4, be(d));
                if (ne(d))
                    return f(p, 0, me(d));
                break
            }
        }
        return w
    }
    function Ne() {
        const {currentType: d, offset: p, startLoc: w, endLoc: P} = l;
        return l.lastType = d,
        l.lastOffset = p,
        l.lastStartLoc = w,
        l.lastEndLoc = P,
        l.offset = o(),
        l.startLoc = r(),
        s.currentChar() === ln ? f(l, 14) : we(s, l)
    }
    return {
        nextToken: Ne,
        currentOffset: o,
        currentPosition: r,
        context: c
    }
}
const Nm = "parser"
  , Am = /(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;
function Im(e, t, n) {
    switch (e) {
    case "\\\\":
        return "\\";
    case "\\'":
        return "'";
    default:
        {
            const s = parseInt(t || n, 16);
            return s <= 55295 || s >= 57344 ? String.fromCodePoint(s) : "�"
        }
    }
}
function xm(e={}) {
    const t = e.location !== !1
      , {onError: n} = e;
    function s(b, g, E, T, ...R) {
        const C = b.currentPosition();
        if (C.offset += T,
        C.column += T,
        n) {
            const L = t ? Ur(E, C) : null
              , M = ps(g, L, {
                domain: Nm,
                args: R
            });
            n(M)
        }
    }
    function o(b, g, E) {
        const T = {
            type: b
        };
        return t && (T.start = g,
        T.end = g,
        T.loc = {
            start: E,
            end: E
        }),
        T
    }
    function r(b, g, E, T) {
        T && (b.type = T),
        t && (b.end = g,
        b.loc && (b.loc.end = E))
    }
    function i(b, g) {
        const E = b.context()
          , T = o(3, E.offset, E.startLoc);
        return T.value = g,
        r(T, b.currentOffset(), b.currentPosition()),
        T
    }
    function a(b, g) {
        const E = b.context()
          , {lastOffset: T, lastStartLoc: R} = E
          , C = o(5, T, R);
        return C.index = parseInt(g, 10),
        b.nextToken(),
        r(C, b.currentOffset(), b.currentPosition()),
        C
    }
    function l(b, g) {
        const E = b.context()
          , {lastOffset: T, lastStartLoc: R} = E
          , C = o(4, T, R);
        return C.key = g,
        b.nextToken(),
        r(C, b.currentOffset(), b.currentPosition()),
        C
    }
    function c(b, g) {
        const E = b.context()
          , {lastOffset: T, lastStartLoc: R} = E
          , C = o(9, T, R);
        return C.value = g.replace(Am, Im),
        b.nextToken(),
        r(C, b.currentOffset(), b.currentPosition()),
        C
    }
    function u(b) {
        const g = b.nextToken()
          , E = b.context()
          , {lastOffset: T, lastStartLoc: R} = E
          , C = o(8, T, R);
        return g.type !== 12 ? (s(b, pe.UNEXPECTED_EMPTY_LINKED_MODIFIER, E.lastStartLoc, 0),
        C.value = "",
        r(C, T, R),
        {
            nextConsumeToken: g,
            node: C
        }) : (g.value == null && s(b, pe.UNEXPECTED_LEXICAL_ANALYSIS, E.lastStartLoc, 0, Ut(g)),
        C.value = g.value || "",
        r(C, b.currentOffset(), b.currentPosition()),
        {
            node: C
        })
    }
    function h(b, g) {
        const E = b.context()
          , T = o(7, E.offset, E.startLoc);
        return T.value = g,
        r(T, b.currentOffset(), b.currentPosition()),
        T
    }
    function f(b) {
        const g = b.context()
          , E = o(6, g.offset, g.startLoc);
        let T = b.nextToken();
        if (T.type === 9) {
            const R = u(b);
            E.modifier = R.node,
            T = R.nextConsumeToken || b.nextToken()
        }
        switch (T.type !== 10 && s(b, pe.UNEXPECTED_LEXICAL_ANALYSIS, g.lastStartLoc, 0, Ut(T)),
        T = b.nextToken(),
        T.type === 2 && (T = b.nextToken()),
        T.type) {
        case 11:
            T.value == null && s(b, pe.UNEXPECTED_LEXICAL_ANALYSIS, g.lastStartLoc, 0, Ut(T)),
            E.key = h(b, T.value || "");
            break;
        case 5:
            T.value == null && s(b, pe.UNEXPECTED_LEXICAL_ANALYSIS, g.lastStartLoc, 0, Ut(T)),
            E.key = l(b, T.value || "");
            break;
        case 6:
            T.value == null && s(b, pe.UNEXPECTED_LEXICAL_ANALYSIS, g.lastStartLoc, 0, Ut(T)),
            E.key = a(b, T.value || "");
            break;
        case 7:
            T.value == null && s(b, pe.UNEXPECTED_LEXICAL_ANALYSIS, g.lastStartLoc, 0, Ut(T)),
            E.key = c(b, T.value || "");
            break;
        default:
            {
                s(b, pe.UNEXPECTED_EMPTY_LINKED_KEY, g.lastStartLoc, 0);
                const R = b.context()
                  , C = o(7, R.offset, R.startLoc);
                return C.value = "",
                r(C, R.offset, R.startLoc),
                E.key = C,
                r(E, R.offset, R.startLoc),
                {
                    nextConsumeToken: T,
                    node: E
                }
            }
        }
        return r(E, b.currentOffset(), b.currentPosition()),
        {
            node: E
        }
    }
    function m(b) {
        const g = b.context()
          , E = g.currentType === 1 ? b.currentOffset() : g.offset
          , T = g.currentType === 1 ? g.endLoc : g.startLoc
          , R = o(2, E, T);
        R.items = [];
        let C = null;
        do {
            const I = C || b.nextToken();
            switch (C = null,
            I.type) {
            case 0:
                I.value == null && s(b, pe.UNEXPECTED_LEXICAL_ANALYSIS, g.lastStartLoc, 0, Ut(I)),
                R.items.push(i(b, I.value || ""));
                break;
            case 6:
                I.value == null && s(b, pe.UNEXPECTED_LEXICAL_ANALYSIS, g.lastStartLoc, 0, Ut(I)),
                R.items.push(a(b, I.value || ""));
                break;
            case 5:
                I.value == null && s(b, pe.UNEXPECTED_LEXICAL_ANALYSIS, g.lastStartLoc, 0, Ut(I)),
                R.items.push(l(b, I.value || ""));
                break;
            case 7:
                I.value == null && s(b, pe.UNEXPECTED_LEXICAL_ANALYSIS, g.lastStartLoc, 0, Ut(I)),
                R.items.push(c(b, I.value || ""));
                break;
            case 8:
                {
                    const K = f(b);
                    R.items.push(K.node),
                    C = K.nextConsumeToken || null;
                    break
                }
            }
        } while (g.currentType !== 14 && g.currentType !== 1);
        const L = g.currentType === 1 ? g.lastOffset : b.currentOffset()
          , M = g.currentType === 1 ? g.lastEndLoc : b.currentPosition();
        return r(R, L, M),
        R
    }
    function v(b, g, E, T) {
        const R = b.context();
        let C = T.items.length === 0;
        const L = o(1, g, E);
        L.cases = [],
        L.cases.push(T);
        do {
            const M = m(b);
            C || (C = M.items.length === 0),
            L.cases.push(M)
        } while (R.currentType !== 14);
        return C && s(b, pe.MUST_HAVE_MESSAGES_IN_PLURAL, E, 0),
        r(L, b.currentOffset(), b.currentPosition()),
        L
    }
    function y(b) {
        const g = b.context()
          , {offset: E, startLoc: T} = g
          , R = m(b);
        return g.currentType === 14 ? R : v(b, E, T, R)
    }
    function S(b) {
        const g = Lm(b, Su({}, e))
          , E = g.context()
          , T = o(0, E.offset, E.startLoc);
        return t && T.loc && (T.loc.source = b),
        T.body = y(g),
        e.onCacheKey && (T.cacheKey = e.onCacheKey(b)),
        E.currentType !== 14 && s(g, pe.UNEXPECTED_LEXICAL_ANALYSIS, E.lastStartLoc, 0, b[E.offset] || ""),
        r(T, g.currentOffset(), g.currentPosition()),
        T
    }
    return {
        parse: S
    }
}
function Ut(e) {
    if (e.type === 14)
        return "EOF";
    const t = (e.value || "").replace(/\r?\n/gu, "\\n");
    return t.length > 10 ? t.slice(0, 9) + "…" : t
}
function Mm(e, t={}) {
    const n = {
        ast: e,
        helpers: new Set
    };
    return {
        context: () => n,
        helper: r => (n.helpers.add(r),
        r)
    }
}
function Xa(e, t) {
    for (let n = 0; n < e.length; n++)
        Pi(e[n], t)
}
function Pi(e, t) {
    switch (e.type) {
    case 1:
        Xa(e.cases, t),
        t.helper("plural");
        break;
    case 2:
        Xa(e.items, t);
        break;
    case 6:
        {
            Pi(e.key, t),
            t.helper("linked"),
            t.helper("type");
            break
        }
    case 5:
        t.helper("interpolate"),
        t.helper("list");
        break;
    case 4:
        t.helper("interpolate"),
        t.helper("named");
        break
    }
}
function Dm(e, t={}) {
    const n = Mm(e);
    n.helper("normalize"),
    e.body && Pi(e.body, n);
    const s = n.context();
    e.helpers = Array.from(s.helpers)
}
function Bm(e) {
    const t = e.body;
    return t.type === 2 ? za(t) : t.cases.forEach(n => za(n)),
    e
}
function za(e) {
    if (e.items.length === 1) {
        const t = e.items[0];
        (t.type === 3 || t.type === 9) && (e.static = t.value,
        delete t.value)
    } else {
        const t = [];
        for (let n = 0; n < e.items.length; n++) {
            const s = e.items[n];
            if (!(s.type === 3 || s.type === 9) || s.value == null)
                break;
            t.push(s.value)
        }
        if (t.length === e.items.length) {
            e.static = Tu(t);
            for (let n = 0; n < e.items.length; n++) {
                const s = e.items[n];
                (s.type === 3 || s.type === 9) && delete s.value
            }
        }
    }
}
const Fm = "minifier";
function Yn(e) {
    switch (e.t = e.type,
    e.type) {
    case 0:
        {
            const t = e;
            Yn(t.body),
            t.b = t.body,
            delete t.body;
            break
        }
    case 1:
        {
            const t = e
              , n = t.cases;
            for (let s = 0; s < n.length; s++)
                Yn(n[s]);
            t.c = n,
            delete t.cases;
            break
        }
    case 2:
        {
            const t = e
              , n = t.items;
            for (let s = 0; s < n.length; s++)
                Yn(n[s]);
            t.i = n,
            delete t.items,
            t.static && (t.s = t.static,
            delete t.static);
            break
        }
    case 3:
    case 9:
    case 8:
    case 7:
        {
            const t = e;
            t.value && (t.v = t.value,
            delete t.value);
            break
        }
    case 6:
        {
            const t = e;
            Yn(t.key),
            t.k = t.key,
            delete t.key,
            t.modifier && (Yn(t.modifier),
            t.m = t.modifier,
            delete t.modifier);
            break
        }
    case 5:
        {
            const t = e;
            t.i = t.index,
            delete t.index;
            break
        }
    case 4:
        {
            const t = e;
            t.k = t.key,
            delete t.key;
            break
        }
    default:
        throw ps(pe.UNHANDLED_MINIFIER_NODE_TYPE, null, {
            domain: Fm,
            args: [e.type]
        })
    }
    delete e.type
}
const Um = "parser";
function Vm(e, t) {
    const {sourceMap: n, filename: s, breakLineCode: o, needIndent: r} = t
      , i = t.location !== !1
      , a = {
        filename: s,
        code: "",
        column: 1,
        line: 1,
        offset: 0,
        map: void 0,
        breakLineCode: o,
        needIndent: r,
        indentLevel: 0
    };
    i && e.loc && (a.source = e.loc.source);
    const l = () => a;
    function c(S, b) {
        a.code += S
    }
    function u(S, b=!0) {
        const g = b ? o : "";
        c(r ? g + "  ".repeat(S) : g)
    }
    function h(S=!0) {
        const b = ++a.indentLevel;
        S && u(b)
    }
    function f(S=!0) {
        const b = --a.indentLevel;
        S && u(b)
    }
    function m() {
        u(a.indentLevel)
    }
    return {
        context: l,
        push: c,
        indent: h,
        deindent: f,
        newline: m,
        helper: S => `_${S}`,
        needIndent: () => a.needIndent
    }
}
function Hm(e, t) {
    const {helper: n} = e;
    e.push(`${n("linked")}(`),
    as(e, t.key),
    t.modifier ? (e.push(", "),
    as(e, t.modifier),
    e.push(", _type")) : e.push(", undefined, _type"),
    e.push(")")
}
function jm(e, t) {
    const {helper: n, needIndent: s} = e;
    e.push(`${n("normalize")}([`),
    e.indent(s());
    const o = t.items.length;
    for (let r = 0; r < o && (as(e, t.items[r]),
    r !== o - 1); r++)
        e.push(", ");
    e.deindent(s()),
    e.push("])")
}
function qm(e, t) {
    const {helper: n, needIndent: s} = e;
    if (t.cases.length > 1) {
        e.push(`${n("plural")}([`),
        e.indent(s());
        const o = t.cases.length;
        for (let r = 0; r < o && (as(e, t.cases[r]),
        r !== o - 1); r++)
            e.push(", ");
        e.deindent(s()),
        e.push("])")
    }
}
function Wm(e, t) {
    t.body ? as(e, t.body) : e.push("null")
}
function as(e, t) {
    const {helper: n} = e;
    switch (t.type) {
    case 0:
        Wm(e, t);
        break;
    case 1:
        qm(e, t);
        break;
    case 2:
        jm(e, t);
        break;
    case 6:
        Hm(e, t);
        break;
    case 8:
        e.push(JSON.stringify(t.value), t);
        break;
    case 7:
        e.push(JSON.stringify(t.value), t);
        break;
    case 5:
        e.push(`${n("interpolate")}(${n("list")}(${t.index}))`, t);
        break;
    case 4:
        e.push(`${n("interpolate")}(${n("named")}(${JSON.stringify(t.key)}))`, t);
        break;
    case 9:
        e.push(JSON.stringify(t.value), t);
        break;
    case 3:
        e.push(JSON.stringify(t.value), t);
        break;
    default:
        throw ps(pe.UNHANDLED_CODEGEN_NODE_TYPE, null, {
            domain: Um,
            args: [t.type]
        })
    }
}
const Km = (e, t={}) => {
    const n = Ya(t.mode) ? t.mode : "normal"
      , s = Ya(t.filename) ? t.filename : "message.intl"
      , o = !!t.sourceMap
      , r = t.breakLineCode != null ? t.breakLineCode : n === "arrow" ? ";" : `
`
      , i = t.needIndent ? t.needIndent : n !== "arrow"
      , a = e.helpers || []
      , l = Vm(e, {
        mode: n,
        filename: s,
        sourceMap: o,
        breakLineCode: r,
        needIndent: i
    });
    l.push(n === "normal" ? "function __msg__ (ctx) {" : "(ctx) => {"),
    l.indent(i),
    a.length > 0 && (l.push(`const { ${Tu(a.map(h => `${h}: _${h}`), ", ")} } = ctx`),
    l.newline()),
    l.push("return "),
    as(l, e),
    l.deindent(i),
    l.push("}"),
    delete e.helpers;
    const {code: c, map: u} = l.context();
    return {
        ast: e,
        code: c,
        map: u ? u.toJSON() : void 0
    }
}
;
function Qm(e, t={}) {
    const n = Su({}, t)
      , s = !!n.jit
      , o = !!n.minify
      , r = n.optimize == null ? !0 : n.optimize
      , a = xm(n).parse(e);
    return s ? (r && Bm(a),
    o && Yn(a),
    {
        ast: a,
        code: ""
    }) : (Dm(a, n),
    Km(a, n))
}
/*!
  * core-base v9.10.2
  * (c) 2024 kazuya kawaguchi
  * Released under the MIT License.
  */
function Gm() {
    typeof __INTLIFY_PROD_DEVTOOLS__ != "boolean" && (ki().__INTLIFY_PROD_DEVTOOLS__ = !1)
}
const kn = [];
kn[0] = {
    w: [0],
    i: [3, 0],
    "[": [4],
    o: [7]
};
kn[1] = {
    w: [1],
    ".": [2],
    "[": [4],
    o: [7]
};
kn[2] = {
    w: [2],
    i: [3, 0],
    0: [3, 0]
};
kn[3] = {
    i: [3, 0],
    0: [3, 0],
    w: [1, 1],
    ".": [2, 1],
    "[": [4, 1],
    o: [7, 1]
};
kn[4] = {
    "'": [5, 0],
    '"': [6, 0],
    "[": [4, 2],
    "]": [1, 3],
    o: 8,
    l: [4, 0]
};
kn[5] = {
    "'": [4, 0],
    o: 8,
    l: [5, 0]
};
kn[6] = {
    '"': [4, 0],
    o: 8,
    l: [6, 0]
};
const Ym = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;
function Jm(e) {
    return Ym.test(e)
}
function Xm(e) {
    const t = e.charCodeAt(0)
      , n = e.charCodeAt(e.length - 1);
    return t === n && (t === 34 || t === 39) ? e.slice(1, -1) : e
}
function zm(e) {
    if (e == null)
        return "o";
    switch (e.charCodeAt(0)) {
    case 91:
    case 93:
    case 46:
    case 34:
    case 39:
        return e;
    case 95:
    case 36:
    case 45:
        return "i";
    case 9:
    case 10:
    case 13:
    case 160:
    case 65279:
    case 8232:
    case 8233:
        return "w"
    }
    return "i"
}
function Zm(e) {
    const t = e.trim();
    return e.charAt(0) === "0" && isNaN(parseInt(e)) ? !1 : Jm(t) ? Xm(t) : "*" + t
}
function e_(e) {
    const t = [];
    let n = -1, s = 0, o = 0, r, i, a, l, c, u, h;
    const f = [];
    f[0] = () => {
        i === void 0 ? i = a : i += a
    }
    ,
    f[1] = () => {
        i !== void 0 && (t.push(i),
        i = void 0)
    }
    ,
    f[2] = () => {
        f[0](),
        o++
    }
    ,
    f[3] = () => {
        if (o > 0)
            o--,
            s = 4,
            f[0]();
        else {
            if (o = 0,
            i === void 0 || (i = Zm(i),
            i === !1))
                return !1;
            f[1]()
        }
    }
    ;
    function m() {
        const v = e[n + 1];
        if (s === 5 && v === "'" || s === 6 && v === '"')
            return n++,
            a = "\\" + v,
            f[0](),
            !0
    }
    for (; s !== null; )
        if (n++,
        r = e[n],
        !(r === "\\" && m())) {
            if (l = zm(r),
            h = kn[s],
            c = h[l] || h.l || 8,
            c === 8 || (s = c[0],
            c[1] !== void 0 && (u = f[c[1]],
            u && (a = r,
            u() === !1))))
                return;
            if (s === 7)
                return t
        }
}
const Za = new Map;
function t_(e, t) {
    return Re(e) ? e[t] : null
}
function n_(e, t) {
    if (!Re(e))
        return null;
    let n = Za.get(t);
    if (n || (n = e_(t),
    n && Za.set(t, n)),
    !n)
        return null;
    const s = n.length;
    let o = e
      , r = 0;
    for (; r < s; ) {
        const i = o[n[r]];
        if (i === void 0 || Be(o))
            return null;
        o = i,
        r++
    }
    return o
}
const s_ = e => e
  , o_ = e => ""
  , r_ = "text"
  , i_ = e => e.length === 0 ? "" : gm(e)
  , a_ = _m;
function el(e, t) {
    return e = Math.abs(e),
    t === 2 ? e ? e > 1 ? 1 : 0 : 1 : e ? Math.min(e, 2) : 0
}
function l_(e) {
    const t = Ye(e.pluralIndex) ? e.pluralIndex : -1;
    return e.named && (Ye(e.named.count) || Ye(e.named.n)) ? Ye(e.named.count) ? e.named.count : Ye(e.named.n) ? e.named.n : t : t
}
function c_(e, t) {
    t.count || (t.count = e),
    t.n || (t.n = e)
}
function u_(e={}) {
    const t = e.locale
      , n = l_(e)
      , s = Re(e.pluralRules) && ae(t) && Be(e.pluralRules[t]) ? e.pluralRules[t] : el
      , o = Re(e.pluralRules) && ae(t) && Be(e.pluralRules[t]) ? el : void 0
      , r = b => b[s(n, b.length, o)]
      , i = e.list || []
      , a = b => i[b]
      , l = e.named || {};
    Ye(e.pluralIndex) && c_(n, l);
    const c = b => l[b];
    function u(b) {
        const g = Be(e.messages) ? e.messages(b) : Re(e.messages) ? e.messages[b] : !1;
        return g || (e.parent ? e.parent.message(b) : o_)
    }
    const h = b => e.modifiers ? e.modifiers[b] : s_
      , f = Ce(e.processor) && Be(e.processor.normalize) ? e.processor.normalize : i_
      , m = Ce(e.processor) && Be(e.processor.interpolate) ? e.processor.interpolate : a_
      , v = Ce(e.processor) && ae(e.processor.type) ? e.processor.type : r_
      , S = {
        list: a,
        named: c,
        plural: r,
        linked: (b, ...g) => {
            const [E,T] = g;
            let R = "text"
              , C = "";
            g.length === 1 ? Re(E) ? (C = E.modifier || C,
            R = E.type || R) : ae(E) && (C = E || C) : g.length === 2 && (ae(E) && (C = E || C),
            ae(T) && (R = T || R));
            const L = u(b)(S)
              , M = R === "vnode" && Qe(L) && C ? L[0] : L;
            return C ? h(C)(M, R) : M
        }
        ,
        message: u,
        type: v,
        interpolate: m,
        normalize: f,
        values: tt({}, i, l)
    };
    return S
}
let Fs = null;
function f_(e) {
    Fs = e
}
function d_(e, t, n) {
    Fs && Fs.emit("i18n:init", {
        timestamp: Date.now(),
        i18n: e,
        version: t,
        meta: n
    })
}
const h_ = p_("function:translate");
function p_(e) {
    return t => Fs && Fs.emit(e, t)
}
const m_ = {
    NOT_FOUND_KEY: 1,
    FALLBACK_TO_TRANSLATE: 2,
    CANNOT_FORMAT_NUMBER: 3,
    FALLBACK_TO_NUMBER_FORMAT: 4,
    CANNOT_FORMAT_DATE: 5,
    FALLBACK_TO_DATE_FORMAT: 6,
    EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER: 7,
    __EXTEND_POINT__: 8
}
  , Cu = pe.__EXTEND_POINT__
  , Ln = $i(Cu)
  , jt = {
    INVALID_ARGUMENT: Cu,
    INVALID_DATE_ARGUMENT: Ln(),
    INVALID_ISO_DATE_ARGUMENT: Ln(),
    NOT_SUPPORT_NON_STRING_MESSAGE: Ln(),
    NOT_SUPPORT_LOCALE_PROMISE_VALUE: Ln(),
    NOT_SUPPORT_LOCALE_ASYNC_FUNCTION: Ln(),
    NOT_SUPPORT_LOCALE_TYPE: Ln(),
    __EXTEND_POINT__: Ln()
};
function zt(e) {
    return ps(e, null, void 0)
}
function Ri(e, t) {
    return t.locale != null ? tl(t.locale) : tl(e.locale)
}
let gr;
function tl(e) {
    if (ae(e))
        return e;
    if (Be(e)) {
        if (e.resolvedOnce && gr != null)
            return gr;
        if (e.constructor.name === "Function") {
            const t = e();
            if (mm(t))
                throw zt(jt.NOT_SUPPORT_LOCALE_PROMISE_VALUE);
            return gr = t
        } else
            throw zt(jt.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION)
    } else
        throw zt(jt.NOT_SUPPORT_LOCALE_TYPE)
}
function __(e, t, n) {
    return [...new Set([n, ...Qe(t) ? t : Re(t) ? Object.keys(t) : ae(t) ? [t] : [n]])]
}
function ku(e, t, n) {
    const s = ae(n) ? n : Ro
      , o = e;
    o.__localeChainCache || (o.__localeChainCache = new Map);
    let r = o.__localeChainCache.get(s);
    if (!r) {
        r = [];
        let i = [n];
        for (; Qe(i); )
            i = nl(r, i, t);
        const a = Qe(t) || !Ce(t) ? t : t.default ? t.default : null;
        i = ae(a) ? [a] : a,
        Qe(i) && nl(r, i, !1),
        o.__localeChainCache.set(s, r)
    }
    return r
}
function nl(e, t, n) {
    let s = !0;
    for (let o = 0; o < t.length && Me(s); o++) {
        const r = t[o];
        ae(r) && (s = g_(e, t[o], n))
    }
    return s
}
function g_(e, t, n) {
    let s;
    const o = t.split("-");
    do {
        const r = o.join("-");
        s = v_(e, r, n),
        o.splice(-1, 1)
    } while (o.length && s === !0);
    return s
}
function v_(e, t, n) {
    let s = !1;
    if (!e.includes(t) && (s = !0,
    t)) {
        s = t[t.length - 1] !== "!";
        const o = t.replace(/!/g, "");
        e.push(o),
        (Qe(n) || Ce(n)) && n[o] && (s = n[o])
    }
    return s
}
const b_ = "9.10.2"
  , Jo = -1
  , Ro = "en-US"
  , sl = ""
  , ol = e => `${e.charAt(0).toLocaleUpperCase()}${e.substr(1)}`;
function y_() {
    return {
        upper: (e, t) => t === "text" && ae(e) ? e.toUpperCase() : t === "vnode" && Re(e) && "__v_isVNode"in e ? e.children.toUpperCase() : e,
        lower: (e, t) => t === "text" && ae(e) ? e.toLowerCase() : t === "vnode" && Re(e) && "__v_isVNode"in e ? e.children.toLowerCase() : e,
        capitalize: (e, t) => t === "text" && ae(e) ? ol(e) : t === "vnode" && Re(e) && "__v_isVNode"in e ? ol(e.children) : e
    }
}
let $u;
function w_(e) {
    $u = e
}
let Pu;
function E_(e) {
    Pu = e
}
let Ru;
function S_(e) {
    Ru = e
}
let Ou = null;
const T_ = e => {
    Ou = e
}
  , C_ = () => Ou;
let Lu = null;
const rl = e => {
    Lu = e
}
  , k_ = () => Lu;
let il = 0;
function $_(e={}) {
    const t = Be(e.onWarn) ? e.onWarn : vm
      , n = ae(e.version) ? e.version : b_
      , s = ae(e.locale) || Be(e.locale) ? e.locale : Ro
      , o = Be(s) ? Ro : s
      , r = Qe(e.fallbackLocale) || Ce(e.fallbackLocale) || ae(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : o
      , i = Ce(e.messages) ? e.messages : {
        [o]: {}
    }
      , a = Ce(e.datetimeFormats) ? e.datetimeFormats : {
        [o]: {}
    }
      , l = Ce(e.numberFormats) ? e.numberFormats : {
        [o]: {}
    }
      , c = tt({}, e.modifiers || {}, y_())
      , u = e.pluralRules || {}
      , h = Be(e.missing) ? e.missing : null
      , f = Me(e.missingWarn) || $o(e.missingWarn) ? e.missingWarn : !0
      , m = Me(e.fallbackWarn) || $o(e.fallbackWarn) ? e.fallbackWarn : !0
      , v = !!e.fallbackFormat
      , y = !!e.unresolving
      , S = Be(e.postTranslation) ? e.postTranslation : null
      , b = Ce(e.processor) ? e.processor : null
      , g = Me(e.warnHtmlMessage) ? e.warnHtmlMessage : !0
      , E = !!e.escapeParameter
      , T = Be(e.messageCompiler) ? e.messageCompiler : $u
      , R = Be(e.messageResolver) ? e.messageResolver : Pu || t_
      , C = Be(e.localeFallbacker) ? e.localeFallbacker : Ru || __
      , L = Re(e.fallbackContext) ? e.fallbackContext : void 0
      , M = e
      , I = Re(M.__datetimeFormatters) ? M.__datetimeFormatters : new Map
      , K = Re(M.__numberFormatters) ? M.__numberFormatters : new Map
      , J = Re(M.__meta) ? M.__meta : {};
    il++;
    const ne = {
        version: n,
        cid: il,
        locale: s,
        fallbackLocale: r,
        messages: i,
        modifiers: c,
        pluralRules: u,
        missing: h,
        missingWarn: f,
        fallbackWarn: m,
        fallbackFormat: v,
        unresolving: y,
        postTranslation: S,
        processor: b,
        warnHtmlMessage: g,
        escapeParameter: E,
        messageCompiler: T,
        messageResolver: R,
        localeFallbacker: C,
        fallbackContext: L,
        onWarn: t,
        __meta: J
    };
    return ne.datetimeFormats = a,
    ne.numberFormats = l,
    ne.__datetimeFormatters = I,
    ne.__numberFormatters = K,
    __INTLIFY_PROD_DEVTOOLS__ && d_(ne, n, J),
    ne
}
function Oi(e, t, n, s, o) {
    const {missing: r, onWarn: i} = e;
    if (r !== null) {
        const a = r(e, n, t, o);
        return ae(a) ? a : t
    } else
        return t
}
function ws(e, t, n) {
    const s = e;
    s.__localeChainCache = new Map,
    e.localeFallbacker(e, n, t)
}
function vr(e) {
    return n => P_(n, e)
}
function P_(e, t) {
    const n = t.b || t.body;
    if ((n.t || n.type) === 1) {
        const s = n
          , o = s.c || s.cases;
        return e.plural(o.reduce( (r, i) => [...r, al(e, i)], []))
    } else
        return al(e, n)
}
function al(e, t) {
    const n = t.s || t.static;
    if (n)
        return e.type === "text" ? n : e.normalize([n]);
    {
        const s = (t.i || t.items).reduce( (o, r) => [...o, Vr(e, r)], []);
        return e.normalize(s)
    }
}
function Vr(e, t) {
    const n = t.t || t.type;
    switch (n) {
    case 3:
        {
            const s = t;
            return s.v || s.value
        }
    case 9:
        {
            const s = t;
            return s.v || s.value
        }
    case 4:
        {
            const s = t;
            return e.interpolate(e.named(s.k || s.key))
        }
    case 5:
        {
            const s = t;
            return e.interpolate(e.list(s.i != null ? s.i : s.index))
        }
    case 6:
        {
            const s = t
              , o = s.m || s.modifier;
            return e.linked(Vr(e, s.k || s.key), o ? Vr(e, o) : void 0, e.type)
        }
    case 7:
        {
            const s = t;
            return s.v || s.value
        }
    case 8:
        {
            const s = t;
            return s.v || s.value
        }
    default:
        throw new Error(`unhandled node type on format message part: ${n}`)
    }
}
const R_ = e => e;
let io = Object.create(null);
const ls = e => Re(e) && (e.t === 0 || e.type === 0) && ("b"in e || "body"in e);
function O_(e, t={}) {
    let n = !1;
    const s = t.onError || Tm;
    return t.onError = o => {
        n = !0,
        s(o)
    }
    ,
    {
        ...Qm(e, t),
        detectError: n
    }
}
function L_(e, t) {
    if (ae(e)) {
        Me(t.warnHtmlMessage) && t.warnHtmlMessage;
        const s = (t.onCacheKey || R_)(e)
          , o = io[s];
        if (o)
            return o;
        const {ast: r, detectError: i} = O_(e, {
            ...t,
            location: !1,
            jit: !0
        })
          , a = vr(r);
        return i ? a : io[s] = a
    } else {
        const n = e.cacheKey;
        if (n) {
            const s = io[n];
            return s || (io[n] = vr(e))
        } else
            return vr(e)
    }
}
const ll = () => ""
  , Tt = e => Be(e);
function cl(e, ...t) {
    const {fallbackFormat: n, postTranslation: s, unresolving: o, messageCompiler: r, fallbackLocale: i, messages: a} = e
      , [l,c] = Hr(...t)
      , u = Me(c.missingWarn) ? c.missingWarn : e.missingWarn
      , h = Me(c.fallbackWarn) ? c.fallbackWarn : e.fallbackWarn
      , f = Me(c.escapeParameter) ? c.escapeParameter : e.escapeParameter
      , m = !!c.resolvedMessage
      , v = ae(c.default) || Me(c.default) ? Me(c.default) ? r ? l : () => l : c.default : n ? r ? l : () => l : ""
      , y = n || v !== ""
      , S = Ri(e, c);
    f && N_(c);
    let[b,g,E] = m ? [l, S, a[S] || {}] : Nu(e, l, S, i, h, u)
      , T = b
      , R = l;
    if (!m && !(ae(T) || ls(T) || Tt(T)) && y && (T = v,
    R = T),
    !m && (!(ae(T) || ls(T) || Tt(T)) || !ae(g)))
        return o ? Jo : l;
    let C = !1;
    const L = () => {
        C = !0
    }
      , M = Tt(T) ? T : Au(e, l, g, T, R, L);
    if (C)
        return T;
    const I = x_(e, g, E, c)
      , K = u_(I)
      , J = A_(e, M, K)
      , ne = s ? s(J, l) : J;
    if (__INTLIFY_PROD_DEVTOOLS__) {
        const D = {
            timestamp: Date.now(),
            key: ae(l) ? l : Tt(T) ? T.key : "",
            locale: g || (Tt(T) ? T.locale : ""),
            format: ae(T) ? T : Tt(T) ? T.source : "",
            message: ne
        };
        D.meta = tt({}, e.__meta, C_() || {}),
        h_(D)
    }
    return ne
}
function N_(e) {
    Qe(e.list) ? e.list = e.list.map(t => ae(t) ? Ga(t) : t) : Re(e.named) && Object.keys(e.named).forEach(t => {
        ae(e.named[t]) && (e.named[t] = Ga(e.named[t]))
    }
    )
}
function Nu(e, t, n, s, o, r) {
    const {messages: i, onWarn: a, messageResolver: l, localeFallbacker: c} = e
      , u = c(e, s, n);
    let h = {}, f, m = null;
    const v = "translate";
    for (let y = 0; y < u.length && (f = u[y],
    h = i[f] || {},
    (m = l(h, t)) === null && (m = h[t]),
    !(ae(m) || ls(m) || Tt(m))); y++) {
        const S = Oi(e, t, f, r, v);
        S !== t && (m = S)
    }
    return [m, f, h]
}
function Au(e, t, n, s, o, r) {
    const {messageCompiler: i, warnHtmlMessage: a} = e;
    if (Tt(s)) {
        const c = s;
        return c.locale = c.locale || n,
        c.key = c.key || t,
        c
    }
    if (i == null) {
        const c = () => s;
        return c.locale = n,
        c.key = t,
        c
    }
    const l = i(s, I_(e, n, o, s, a, r));
    return l.locale = n,
    l.key = t,
    l.source = s,
    l
}
function A_(e, t, n) {
    return t(n)
}
function Hr(...e) {
    const [t,n,s] = e
      , o = {};
    if (!ae(t) && !Ye(t) && !Tt(t) && !ls(t))
        throw zt(jt.INVALID_ARGUMENT);
    const r = Ye(t) ? String(t) : (Tt(t),
    t);
    return Ye(n) ? o.plural = n : ae(n) ? o.default = n : Ce(n) && !Yo(n) ? o.named = n : Qe(n) && (o.list = n),
    Ye(s) ? o.plural = s : ae(s) ? o.default = s : Ce(s) && tt(o, s),
    [r, o]
}
function I_(e, t, n, s, o, r) {
    return {
        locale: t,
        key: n,
        warnHtmlMessage: o,
        onError: i => {
            throw r && r(i),
            i
        }
        ,
        onCacheKey: i => fm(t, n, i)
    }
}
function x_(e, t, n, s) {
    const {modifiers: o, pluralRules: r, messageResolver: i, fallbackLocale: a, fallbackWarn: l, missingWarn: c, fallbackContext: u} = e
      , f = {
        locale: t,
        modifiers: o,
        pluralRules: r,
        messages: m => {
            let v = i(n, m);
            if (v == null && u) {
                const [,,y] = Nu(u, m, t, a, l, c);
                v = i(y, m)
            }
            if (ae(v) || ls(v)) {
                let y = !1;
                const b = Au(e, m, t, v, m, () => {
                    y = !0
                }
                );
                return y ? ll : b
            } else
                return Tt(v) ? v : ll
        }
    };
    return e.processor && (f.processor = e.processor),
    s.list && (f.list = s.list),
    s.named && (f.named = s.named),
    Ye(s.plural) && (f.pluralIndex = s.plural),
    f
}
function ul(e, ...t) {
    const {datetimeFormats: n, unresolving: s, fallbackLocale: o, onWarn: r, localeFallbacker: i} = e
      , {__datetimeFormatters: a} = e
      , [l,c,u,h] = jr(...t)
      , f = Me(u.missingWarn) ? u.missingWarn : e.missingWarn;
    Me(u.fallbackWarn) ? u.fallbackWarn : e.fallbackWarn;
    const m = !!u.part
      , v = Ri(e, u)
      , y = i(e, o, v);
    if (!ae(l) || l === "")
        return new Intl.DateTimeFormat(v,h).format(c);
    let S = {}, b, g = null;
    const E = "datetime format";
    for (let C = 0; C < y.length && (b = y[C],
    S = n[b] || {},
    g = S[l],
    !Ce(g)); C++)
        Oi(e, l, b, f, E);
    if (!Ce(g) || !ae(b))
        return s ? Jo : l;
    let T = `${b}__${l}`;
    Yo(h) || (T = `${T}__${JSON.stringify(h)}`);
    let R = a.get(T);
    return R || (R = new Intl.DateTimeFormat(b,tt({}, g, h)),
    a.set(T, R)),
    m ? R.formatToParts(c) : R.format(c)
}
const Iu = ["localeMatcher", "weekday", "era", "year", "month", "day", "hour", "minute", "second", "timeZoneName", "formatMatcher", "hour12", "timeZone", "dateStyle", "timeStyle", "calendar", "dayPeriod", "numberingSystem", "hourCycle", "fractionalSecondDigits"];
function jr(...e) {
    const [t,n,s,o] = e
      , r = {};
    let i = {}, a;
    if (ae(t)) {
        const l = t.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);
        if (!l)
            throw zt(jt.INVALID_ISO_DATE_ARGUMENT);
        const c = l[3] ? l[3].trim().startsWith("T") ? `${l[1].trim()}${l[3].trim()}` : `${l[1].trim()}T${l[3].trim()}` : l[1].trim();
        a = new Date(c);
        try {
            a.toISOString()
        } catch {
            throw zt(jt.INVALID_ISO_DATE_ARGUMENT)
        }
    } else if (hm(t)) {
        if (isNaN(t.getTime()))
            throw zt(jt.INVALID_DATE_ARGUMENT);
        a = t
    } else if (Ye(t))
        a = t;
    else
        throw zt(jt.INVALID_ARGUMENT);
    return ae(n) ? r.key = n : Ce(n) && Object.keys(n).forEach(l => {
        Iu.includes(l) ? i[l] = n[l] : r[l] = n[l]
    }
    ),
    ae(s) ? r.locale = s : Ce(s) && (i = s),
    Ce(o) && (i = o),
    [r.key || "", a, r, i]
}
function fl(e, t, n) {
    const s = e;
    for (const o in n) {
        const r = `${t}__${o}`;
        s.__datetimeFormatters.has(r) && s.__datetimeFormatters.delete(r)
    }
}
function dl(e, ...t) {
    const {numberFormats: n, unresolving: s, fallbackLocale: o, onWarn: r, localeFallbacker: i} = e
      , {__numberFormatters: a} = e
      , [l,c,u,h] = qr(...t)
      , f = Me(u.missingWarn) ? u.missingWarn : e.missingWarn;
    Me(u.fallbackWarn) ? u.fallbackWarn : e.fallbackWarn;
    const m = !!u.part
      , v = Ri(e, u)
      , y = i(e, o, v);
    if (!ae(l) || l === "")
        return new Intl.NumberFormat(v,h).format(c);
    let S = {}, b, g = null;
    const E = "number format";
    for (let C = 0; C < y.length && (b = y[C],
    S = n[b] || {},
    g = S[l],
    !Ce(g)); C++)
        Oi(e, l, b, f, E);
    if (!Ce(g) || !ae(b))
        return s ? Jo : l;
    let T = `${b}__${l}`;
    Yo(h) || (T = `${T}__${JSON.stringify(h)}`);
    let R = a.get(T);
    return R || (R = new Intl.NumberFormat(b,tt({}, g, h)),
    a.set(T, R)),
    m ? R.formatToParts(c) : R.format(c)
}
const xu = ["localeMatcher", "style", "currency", "currencyDisplay", "currencySign", "useGrouping", "minimumIntegerDigits", "minimumFractionDigits", "maximumFractionDigits", "minimumSignificantDigits", "maximumSignificantDigits", "compactDisplay", "notation", "signDisplay", "unit", "unitDisplay", "roundingMode", "roundingPriority", "roundingIncrement", "trailingZeroDisplay"];
function qr(...e) {
    const [t,n,s,o] = e
      , r = {};
    let i = {};
    if (!Ye(t))
        throw zt(jt.INVALID_ARGUMENT);
    const a = t;
    return ae(n) ? r.key = n : Ce(n) && Object.keys(n).forEach(l => {
        xu.includes(l) ? i[l] = n[l] : r[l] = n[l]
    }
    ),
    ae(s) ? r.locale = s : Ce(s) && (i = s),
    Ce(o) && (i = o),
    [r.key || "", a, r, i]
}
function hl(e, t, n) {
    const s = e;
    for (const o in n) {
        const r = `${t}__${o}`;
        s.__numberFormatters.has(r) && s.__numberFormatters.delete(r)
    }
}
Gm();
/*!
  * vue-i18n v9.10.2
  * (c) 2024 kazuya kawaguchi
  * Released under the MIT License.
  */
const M_ = "9.10.2";
function D_() {
    typeof __INTLIFY_PROD_DEVTOOLS__ != "boolean" && (ki().__INTLIFY_PROD_DEVTOOLS__ = !1)
}
const Mu = m_.__EXTEND_POINT__
  , Gt = $i(Mu);
Gt(),
Gt(),
Gt(),
Gt(),
Gt(),
Gt(),
Gt(),
Gt(),
Gt();
const Du = jt.__EXTEND_POINT__
  , ut = $i(Du)
  , kt = {
    UNEXPECTED_RETURN_TYPE: Du,
    INVALID_ARGUMENT: ut(),
    MUST_BE_CALL_SETUP_TOP: ut(),
    NOT_INSTALLED: ut(),
    NOT_AVAILABLE_IN_LEGACY_MODE: ut(),
    REQUIRED_VALUE: ut(),
    INVALID_VALUE: ut(),
    CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN: ut(),
    NOT_INSTALLED_WITH_PROVIDE: ut(),
    UNEXPECTED_ERROR: ut(),
    NOT_COMPATIBLE_LEGACY_VUE_I18N: ut(),
    BRIDGE_SUPPORT_VUE_2_ONLY: ut(),
    MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION: ut(),
    NOT_AVAILABLE_COMPOSITION_IN_LEGACY: ut(),
    __EXTEND_POINT__: ut()
};
function xt(e, ...t) {
    return ps(e, null, void 0)
}
const Wr = Cn("__translateVNode")
  , Kr = Cn("__datetimeParts")
  , Qr = Cn("__numberParts")
  , B_ = Cn("__setPluralRules")
  , F_ = Cn("__injectWithOption")
  , Gr = Cn("__dispose");
function Us(e) {
    if (!Re(e))
        return e;
    for (const t in e)
        if (Po(e, t))
            if (!t.includes("."))
                Re(e[t]) && Us(e[t]);
            else {
                const n = t.split(".")
                  , s = n.length - 1;
                let o = e
                  , r = !1;
                for (let i = 0; i < s; i++) {
                    if (n[i]in o || (o[n[i]] = {}),
                    !Re(o[n[i]])) {
                        r = !0;
                        break
                    }
                    o = o[n[i]]
                }
                r || (o[n[s]] = e[t],
                delete e[t]),
                Re(o[n[s]]) && Us(o[n[s]])
            }
    return e
}
function Bu(e, t) {
    const {messages: n, __i18n: s, messageResolver: o, flatJson: r} = t
      , i = Ce(n) ? n : Qe(s) ? {} : {
        [e]: {}
    };
    if (Qe(s) && s.forEach(a => {
        if ("locale"in a && "resource"in a) {
            const {locale: l, resource: c} = a;
            l ? (i[l] = i[l] || {},
            fo(c, i[l])) : fo(c, i)
        } else
            ae(a) && fo(JSON.parse(a), i)
    }
    ),
    o == null && r)
        for (const a in i)
            Po(i, a) && Us(i[a]);
    return i
}
function Fu(e) {
    return e.type
}
function U_(e, t, n) {
    let s = Re(t.messages) ? t.messages : {};
    "__i18nGlobal"in n && (s = Bu(e.locale.value, {
        messages: s,
        __i18n: n.__i18nGlobal
    }));
    const o = Object.keys(s);
    o.length && o.forEach(r => {
        e.mergeLocaleMessage(r, s[r])
    }
    );
    {
        if (Re(t.datetimeFormats)) {
            const r = Object.keys(t.datetimeFormats);
            r.length && r.forEach(i => {
                e.mergeDateTimeFormat(i, t.datetimeFormats[i])
            }
            )
        }
        if (Re(t.numberFormats)) {
            const r = Object.keys(t.numberFormats);
            r.length && r.forEach(i => {
                e.mergeNumberFormat(i, t.numberFormats[i])
            }
            )
        }
    }
}
function pl(e) {
    return _e(js, null, e, 0)
}
const ml = "__INTLIFY_META__"
  , _l = () => []
  , V_ = () => !1;
let gl = 0;
function vl(e) {
    return (t, n, s, o) => e(n, s, Si() || void 0, o)
}
const H_ = () => {
    const e = Si();
    let t = null;
    return e && (t = Fu(e)[ml]) ? {
        [ml]: t
    } : null
}
;
function Uu(e={}, t) {
    const {__root: n, __injectWithOption: s} = e
      , o = n === void 0
      , r = e.flatJson
      , i = ko ? V : wc
      , a = !!e.translateExistCompatible;
    let l = Me(e.inheritLocale) ? e.inheritLocale : !0;
    const c = i(n && l ? n.locale.value : ae(e.locale) ? e.locale : Ro)
      , u = i(n && l ? n.fallbackLocale.value : ae(e.fallbackLocale) || Qe(e.fallbackLocale) || Ce(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : c.value)
      , h = i(Bu(c.value, e))
      , f = i(Ce(e.datetimeFormats) ? e.datetimeFormats : {
        [c.value]: {}
    })
      , m = i(Ce(e.numberFormats) ? e.numberFormats : {
        [c.value]: {}
    });
    let v = n ? n.missingWarn : Me(e.missingWarn) || $o(e.missingWarn) ? e.missingWarn : !0
      , y = n ? n.fallbackWarn : Me(e.fallbackWarn) || $o(e.fallbackWarn) ? e.fallbackWarn : !0
      , S = n ? n.fallbackRoot : Me(e.fallbackRoot) ? e.fallbackRoot : !0
      , b = !!e.fallbackFormat
      , g = Be(e.missing) ? e.missing : null
      , E = Be(e.missing) ? vl(e.missing) : null
      , T = Be(e.postTranslation) ? e.postTranslation : null
      , R = n ? n.warnHtmlMessage : Me(e.warnHtmlMessage) ? e.warnHtmlMessage : !0
      , C = !!e.escapeParameter;
    const L = n ? n.modifiers : Ce(e.modifiers) ? e.modifiers : {};
    let M = e.pluralRules || n && n.pluralRules, I;
    I = ( () => {
        o && rl(null);
        const N = {
            version: M_,
            locale: c.value,
            fallbackLocale: u.value,
            messages: h.value,
            modifiers: L,
            pluralRules: M,
            missing: E === null ? void 0 : E,
            missingWarn: v,
            fallbackWarn: y,
            fallbackFormat: b,
            unresolving: !0,
            postTranslation: T === null ? void 0 : T,
            warnHtmlMessage: R,
            escapeParameter: C,
            messageResolver: e.messageResolver,
            messageCompiler: e.messageCompiler,
            __meta: {
                framework: "vue"
            }
        };
        N.datetimeFormats = f.value,
        N.numberFormats = m.value,
        N.__datetimeFormatters = Ce(I) ? I.__datetimeFormatters : void 0,
        N.__numberFormatters = Ce(I) ? I.__numberFormatters : void 0;
        const F = $_(N);
        return o && rl(F),
        F
    }
    )(),
    ws(I, c.value, u.value);
    function J() {
        return [c.value, u.value, h.value, f.value, m.value]
    }
    const ne = G({
        get: () => c.value,
        set: N => {
            c.value = N,
            I.locale = c.value
        }
    })
      , D = G({
        get: () => u.value,
        set: N => {
            u.value = N,
            I.fallbackLocale = u.value,
            ws(I, c.value, N)
        }
    })
      , j = G( () => h.value)
      , X = G( () => f.value)
      , se = G( () => m.value);
    function de() {
        return Be(T) ? T : null
    }
    function be(N) {
        T = N,
        I.postTranslation = N
    }
    function me() {
        return g
    }
    function St(N) {
        N !== null && (E = vl(N)),
        g = N,
        I.missing = E
    }
    const He = (N, F, ce, ue, Ae, ze) => {
        J();
        let _t;
        try {
            __INTLIFY_PROD_DEVTOOLS__,
            o || (I.fallbackContext = n ? k_() : void 0),
            _t = N(I)
        } finally {
            __INTLIFY_PROD_DEVTOOLS__,
            o || (I.fallbackContext = void 0)
        }
        if (ce !== "translate exists" && Ye(_t) && _t === Jo || ce === "translate exists" && !_t) {
            const [Xs,Kn] = F();
            return n && S ? ue(n) : Ae(Xs)
        } else {
            if (ze(_t))
                return _t;
            throw xt(kt.UNEXPECTED_RETURN_TYPE)
        }
    }
    ;
    function We(...N) {
        return He(F => Reflect.apply(cl, null, [F, ...N]), () => Hr(...N), "translate", F => Reflect.apply(F.t, F, [...N]), F => F, F => ae(F))
    }
    function Dt(...N) {
        const [F,ce,ue] = N;
        if (ue && !Re(ue))
            throw xt(kt.INVALID_ARGUMENT);
        return We(F, ce, tt({
            resolvedMessage: !0
        }, ue || {}))
    }
    function $t(...N) {
        return He(F => Reflect.apply(ul, null, [F, ...N]), () => jr(...N), "datetime format", F => Reflect.apply(F.d, F, [...N]), () => sl, F => ae(F))
    }
    function on(...N) {
        return He(F => Reflect.apply(dl, null, [F, ...N]), () => qr(...N), "number format", F => Reflect.apply(F.n, F, [...N]), () => sl, F => ae(F))
    }
    function Xe(N) {
        return N.map(F => ae(F) || Ye(F) || Me(F) ? pl(String(F)) : F)
    }
    const te = {
        normalize: Xe,
        interpolate: N => N,
        type: "vnode"
    };
    function Z(...N) {
        return He(F => {
            let ce;
            const ue = F;
            try {
                ue.processor = te,
                ce = Reflect.apply(cl, null, [ue, ...N])
            } finally {
                ue.processor = null
            }
            return ce
        }
        , () => Hr(...N), "translate", F => F[Wr](...N), F => [pl(F)], F => Qe(F))
    }
    function re(...N) {
        return He(F => Reflect.apply(dl, null, [F, ...N]), () => qr(...N), "number format", F => F[Qr](...N), _l, F => ae(F) || Qe(F))
    }
    function we(...N) {
        return He(F => Reflect.apply(ul, null, [F, ...N]), () => jr(...N), "datetime format", F => F[Kr](...N), _l, F => ae(F) || Qe(F))
    }
    function Ne(N) {
        M = N,
        I.pluralRules = M
    }
    function d(N, F) {
        return He( () => {
            if (!N)
                return !1;
            const ce = ae(F) ? F : c.value
              , ue = P(ce)
              , Ae = I.messageResolver(ue, N);
            return a ? Ae != null : ls(Ae) || Tt(Ae) || ae(Ae)
        }
        , () => [N], "translate exists", ce => Reflect.apply(ce.te, ce, [N, F]), V_, ce => Me(ce))
    }
    function p(N) {
        let F = null;
        const ce = ku(I, u.value, c.value);
        for (let ue = 0; ue < ce.length; ue++) {
            const Ae = h.value[ce[ue]] || {}
              , ze = I.messageResolver(Ae, N);
            if (ze != null) {
                F = ze;
                break
            }
        }
        return F
    }
    function w(N) {
        const F = p(N);
        return F ?? (n ? n.tm(N) || {} : {})
    }
    function P(N) {
        return h.value[N] || {}
    }
    function O(N, F) {
        if (r) {
            const ce = {
                [N]: F
            };
            for (const ue in ce)
                Po(ce, ue) && Us(ce[ue]);
            F = ce[N]
        }
        h.value[N] = F,
        I.messages = h.value
    }
    function U(N, F) {
        h.value[N] = h.value[N] || {};
        const ce = {
            [N]: F
        };
        if (r)
            for (const ue in ce)
                Po(ce, ue) && Us(ce[ue]);
        F = ce[N],
        fo(F, h.value[N]),
        I.messages = h.value
    }
    function Y(N) {
        return f.value[N] || {}
    }
    function Q(N, F) {
        f.value[N] = F,
        I.datetimeFormats = f.value,
        fl(I, N, F)
    }
    function z(N, F) {
        f.value[N] = tt(f.value[N] || {}, F),
        I.datetimeFormats = f.value,
        fl(I, N, F)
    }
    function q(N) {
        return m.value[N] || {}
    }
    function oe(N, F) {
        m.value[N] = F,
        I.numberFormats = m.value,
        hl(I, N, F)
    }
    function le(N, F) {
        m.value[N] = tt(m.value[N] || {}, F),
        I.numberFormats = m.value,
        hl(I, N, F)
    }
    gl++,
    n && ko && (it(n.locale, N => {
        l && (c.value = N,
        I.locale = N,
        ws(I, c.value, u.value))
    }
    ),
    it(n.fallbackLocale, N => {
        l && (u.value = N,
        I.fallbackLocale = N,
        ws(I, c.value, u.value))
    }
    ));
    const ee = {
        id: gl,
        locale: ne,
        fallbackLocale: D,
        get inheritLocale() {
            return l
        },
        set inheritLocale(N) {
            l = N,
            N && n && (c.value = n.locale.value,
            u.value = n.fallbackLocale.value,
            ws(I, c.value, u.value))
        },
        get availableLocales() {
            return Object.keys(h.value).sort()
        },
        messages: j,
        get modifiers() {
            return L
        },
        get pluralRules() {
            return M || {}
        },
        get isGlobal() {
            return o
        },
        get missingWarn() {
            return v
        },
        set missingWarn(N) {
            v = N,
            I.missingWarn = v
        },
        get fallbackWarn() {
            return y
        },
        set fallbackWarn(N) {
            y = N,
            I.fallbackWarn = y
        },
        get fallbackRoot() {
            return S
        },
        set fallbackRoot(N) {
            S = N
        },
        get fallbackFormat() {
            return b
        },
        set fallbackFormat(N) {
            b = N,
            I.fallbackFormat = b
        },
        get warnHtmlMessage() {
            return R
        },
        set warnHtmlMessage(N) {
            R = N,
            I.warnHtmlMessage = N
        },
        get escapeParameter() {
            return C
        },
        set escapeParameter(N) {
            C = N,
            I.escapeParameter = N
        },
        t: We,
        getLocaleMessage: P,
        setLocaleMessage: O,
        mergeLocaleMessage: U,
        getPostTranslationHandler: de,
        setPostTranslationHandler: be,
        getMissingHandler: me,
        setMissingHandler: St,
        [B_]: Ne
    };
    return ee.datetimeFormats = X,
    ee.numberFormats = se,
    ee.rt = Dt,
    ee.te = d,
    ee.tm = w,
    ee.d = $t,
    ee.n = on,
    ee.getDateTimeFormat = Y,
    ee.setDateTimeFormat = Q,
    ee.mergeDateTimeFormat = z,
    ee.getNumberFormat = q,
    ee.setNumberFormat = oe,
    ee.mergeNumberFormat = le,
    ee[F_] = s,
    ee[Wr] = Z,
    ee[Kr] = we,
    ee[Qr] = re,
    ee
}
const Li = {
    tag: {
        type: [String, Object]
    },
    locale: {
        type: String
    },
    scope: {
        type: String,
        validator: e => e === "parent" || e === "global",
        default: "parent"
    },
    i18n: {
        type: Object
    }
};
function j_({slots: e}, t) {
    return t.length === 1 && t[0] === "default" ? (e.default ? e.default() : []).reduce( (s, o) => [...s, ...o.type === Ee ? o.children : [o]], []) : t.reduce( (n, s) => {
        const o = e[s];
        return o && (n[s] = o()),
        n
    }
    , {})
}
function Vu(e) {
    return Ee
}
const q_ = fs({
    name: "i18n-t",
    props: tt({
        keypath: {
            type: String,
            required: !0
        },
        plural: {
            type: [Number, String],
            validator: e => Ye(e) || !isNaN(e)
        }
    }, Li),
    setup(e, t) {
        const {slots: n, attrs: s} = t
          , o = e.i18n || Le({
            useScope: e.scope,
            __useComponent: !0
        });
        return () => {
            const r = Object.keys(n).filter(h => h !== "_")
              , i = {};
            e.locale && (i.locale = e.locale),
            e.plural !== void 0 && (i.plural = ae(e.plural) ? +e.plural : e.plural);
            const a = j_(t, r)
              , l = o[Wr](e.keypath, a, i)
              , c = tt({}, s)
              , u = ae(e.tag) || Re(e.tag) ? e.tag : Vu();
            return Wo(u, c, l)
        }
    }
})
  , bl = q_;
function W_(e) {
    return Qe(e) && !ae(e[0])
}
function Hu(e, t, n, s) {
    const {slots: o, attrs: r} = t;
    return () => {
        const i = {
            part: !0
        };
        let a = {};
        e.locale && (i.locale = e.locale),
        ae(e.format) ? i.key = e.format : Re(e.format) && (ae(e.format.key) && (i.key = e.format.key),
        a = Object.keys(e.format).reduce( (f, m) => n.includes(m) ? tt({}, f, {
            [m]: e.format[m]
        }) : f, {}));
        const l = s(e.value, i, a);
        let c = [i.key];
        Qe(l) ? c = l.map( (f, m) => {
            const v = o[f.type]
              , y = v ? v({
                [f.type]: f.value,
                index: m,
                parts: l
            }) : [f.value];
            return W_(y) && (y[0].key = `${f.type}-${m}`),
            y
        }
        ) : ae(l) && (c = [l]);
        const u = tt({}, r)
          , h = ae(e.tag) || Re(e.tag) ? e.tag : Vu();
        return Wo(h, u, c)
    }
}
const K_ = fs({
    name: "i18n-n",
    props: tt({
        value: {
            type: Number,
            required: !0
        },
        format: {
            type: [String, Object]
        }
    }, Li),
    setup(e, t) {
        const n = e.i18n || Le({
            useScope: "parent",
            __useComponent: !0
        });
        return Hu(e, t, xu, (...s) => n[Qr](...s))
    }
})
  , yl = K_
  , Q_ = fs({
    name: "i18n-d",
    props: tt({
        value: {
            type: [Number, Date],
            required: !0
        },
        format: {
            type: [String, Object]
        }
    }, Li),
    setup(e, t) {
        const n = e.i18n || Le({
            useScope: "parent",
            __useComponent: !0
        });
        return Hu(e, t, Iu, (...s) => n[Kr](...s))
    }
})
  , wl = Q_;
function G_(e, t) {
    const n = e;
    if (e.mode === "composition")
        return n.__getInstance(t) || e.global;
    {
        const s = n.__getInstance(t);
        return s != null ? s.__composer : e.global.__composer
    }
}
function Y_(e) {
    const t = i => {
        const {instance: a, modifiers: l, value: c} = i;
        if (!a || !a.$)
            throw xt(kt.UNEXPECTED_ERROR);
        const u = G_(e, a.$)
          , h = El(c);
        return [Reflect.apply(u.t, u, [...Sl(h)]), u]
    }
    ;
    return {
        created: (i, a) => {
            const [l,c] = t(a);
            ko && e.global === c && (i.__i18nWatcher = it(c.locale, () => {
                a.instance && a.instance.$forceUpdate()
            }
            )),
            i.__composer = c,
            i.textContent = l
        }
        ,
        unmounted: i => {
            ko && i.__i18nWatcher && (i.__i18nWatcher(),
            i.__i18nWatcher = void 0,
            delete i.__i18nWatcher),
            i.__composer && (i.__composer = void 0,
            delete i.__composer)
        }
        ,
        beforeUpdate: (i, {value: a}) => {
            if (i.__composer) {
                const l = i.__composer
                  , c = El(a);
                i.textContent = Reflect.apply(l.t, l, [...Sl(c)])
            }
        }
        ,
        getSSRProps: i => {
            const [a] = t(i);
            return {
                textContent: a
            }
        }
    }
}
function El(e) {
    if (ae(e))
        return {
            path: e
        };
    if (Ce(e)) {
        if (!("path"in e))
            throw xt(kt.REQUIRED_VALUE, "path");
        return e
    } else
        throw xt(kt.INVALID_VALUE)
}
function Sl(e) {
    const {path: t, locale: n, args: s, choice: o, plural: r} = e
      , i = {}
      , a = s || {};
    return ae(n) && (i.locale = n),
    Ye(o) && (i.plural = o),
    Ye(r) && (i.plural = r),
    [t, a, i]
}
function J_(e, t, ...n) {
    const s = Ce(n[0]) ? n[0] : {}
      , o = !!s.useI18nComponentName;
    (Me(s.globalInstall) ? s.globalInstall : !0) && ([o ? "i18n" : bl.name, "I18nT"].forEach(i => e.component(i, bl)),
    [yl.name, "I18nN"].forEach(i => e.component(i, yl)),
    [wl.name, "I18nD"].forEach(i => e.component(i, wl))),
    e.directive("t", Y_(t))
}
const X_ = Cn("global-vue-i18n");
function z_(e={}, t) {
    const n = Me(e.globalInjection) ? e.globalInjection : !0
      , s = !0
      , o = new Map
      , [r,i] = Z_(e)
      , a = Cn("");
    function l(h) {
        return o.get(h) || null
    }
    function c(h, f) {
        o.set(h, f)
    }
    function u(h) {
        o.delete(h)
    }
    {
        const h = {
            get mode() {
                return "composition"
            },
            get allowComposition() {
                return s
            },
            async install(f, ...m) {
                if (f.__VUE_I18N_SYMBOL__ = a,
                f.provide(f.__VUE_I18N_SYMBOL__, h),
                Ce(m[0])) {
                    const S = m[0];
                    h.__composerExtend = S.__composerExtend,
                    h.__vueI18nExtend = S.__vueI18nExtend
                }
                let v = null;
                n && (v = ag(f, h.global)),
                J_(f, h, ...m);
                const y = f.unmount;
                f.unmount = () => {
                    v && v(),
                    h.dispose(),
                    y()
                }
            },
            get global() {
                return i
            },
            dispose() {
                r.stop()
            },
            __instances: o,
            __getInstance: l,
            __setInstance: c,
            __deleteInstance: u
        };
        return h
    }
}
function Le(e={}) {
    const t = Si();
    if (t == null)
        throw xt(kt.MUST_BE_CALL_SETUP_TOP);
    if (!t.isCE && t.appContext.app != null && !t.appContext.app.__VUE_I18N_SYMBOL__)
        throw xt(kt.NOT_INSTALLED);
    const n = eg(t)
      , s = ng(n)
      , o = Fu(t)
      , r = tg(e, o);
    if (r === "global")
        return U_(s, e, o),
        s;
    if (r === "parent") {
        let l = sg(n, t, e.__useComponent);
        return l == null && (l = s),
        l
    }
    const i = n;
    let a = i.__getInstance(t);
    if (a == null) {
        const l = tt({}, e);
        "__i18n"in o && (l.__i18n = o.__i18n),
        s && (l.__root = s),
        a = Uu(l),
        i.__composerExtend && (a[Gr] = i.__composerExtend(a)),
        rg(i, t, a),
        i.__setInstance(t, a)
    }
    return a
}
function Z_(e, t, n) {
    const s = ai();
    {
        const o = s.run( () => Uu(e));
        if (o == null)
            throw xt(kt.UNEXPECTED_ERROR);
        return [s, o]
    }
}
function eg(e) {
    {
        const t = et(e.isCE ? X_ : e.appContext.app.__VUE_I18N_SYMBOL__);
        if (!t)
            throw xt(e.isCE ? kt.NOT_INSTALLED_WITH_PROVIDE : kt.UNEXPECTED_ERROR);
        return t
    }
}
function tg(e, t) {
    return Yo(e) ? "__i18n"in t ? "local" : "global" : e.useScope ? e.useScope : "local"
}
function ng(e) {
    return e.mode === "composition" ? e.global : e.global.__composer
}
function sg(e, t, n=!1) {
    let s = null;
    const o = t.root;
    let r = og(t, n);
    for (; r != null; ) {
        const i = e;
        if (e.mode === "composition" && (s = i.__getInstance(r)),
        s != null || o === r)
            break;
        r = r.parent
    }
    return s
}
function og(e, t=!1) {
    return e == null ? null : t && e.vnode.ctx || e.parent
}
function rg(e, t, n) {
    Hn( () => {}
    , t),
    ds( () => {
        const s = n;
        e.__deleteInstance(t);
        const o = s[Gr];
        o && (o(),
        delete s[Gr])
    }
    , t)
}
const ig = ["locale", "fallbackLocale", "availableLocales"]
  , Tl = ["t", "rt", "d", "n", "tm", "te"];
function ag(e, t) {
    const n = Object.create(null);
    return ig.forEach(o => {
        const r = Object.getOwnPropertyDescriptor(t, o);
        if (!r)
            throw xt(kt.UNEXPECTED_ERROR);
        const i = De(r.value) ? {
            get() {
                return r.value.value
            },
            set(a) {
                r.value.value = a
            }
        } : {
            get() {
                return r.get && r.get()
            }
        };
        Object.defineProperty(n, o, i)
    }
    ),
    e.config.globalProperties.$i18n = n,
    Tl.forEach(o => {
        const r = Object.getOwnPropertyDescriptor(t, o);
        if (!r || !r.value)
            throw xt(kt.UNEXPECTED_ERROR);
        Object.defineProperty(e.config.globalProperties, `$${o}`, r)
    }
    ),
    () => {
        delete e.config.globalProperties.$i18n,
        Tl.forEach(o => {
            delete e.config.globalProperties[`$${o}`]
        }
        )
    }
}
D_();
w_(L_);
E_(n_);
S_(ku);
if (__INTLIFY_PROD_DEVTOOLS__) {
    const e = ki();
    e.__INTLIFY__ = !0,
    f_(e.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__)
}
function ju(e, t) {
    return function() {
        return e.apply(t, arguments)
    }
}
const {toString: lg} = Object.prototype
  , {getPrototypeOf: Ni} = Object
  , Xo = (e => t => {
    const n = lg.call(t);
    return e[n] || (e[n] = n.slice(8, -1).toLowerCase())
}
)(Object.create(null))
  , Mt = e => (e = e.toLowerCase(),
t => Xo(t) === e)
  , zo = e => t => typeof t === e
  , {isArray: ms} = Array
  , Vs = zo("undefined");
function cg(e) {
    return e !== null && !Vs(e) && e.constructor !== null && !Vs(e.constructor) && wt(e.constructor.isBuffer) && e.constructor.isBuffer(e)
}
const qu = Mt("ArrayBuffer");
function ug(e) {
    let t;
    return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && qu(e.buffer),
    t
}
const fg = zo("string")
  , wt = zo("function")
  , Wu = zo("number")
  , Zo = e => e !== null && typeof e == "object"
  , dg = e => e === !0 || e === !1
  , ho = e => {
    if (Xo(e) !== "object")
        return !1;
    const t = Ni(e);
    return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e)
}
  , hg = Mt("Date")
  , pg = Mt("File")
  , mg = Mt("Blob")
  , _g = Mt("FileList")
  , gg = e => Zo(e) && wt(e.pipe)
  , vg = e => {
    let t;
    return e && (typeof FormData == "function" && e instanceof FormData || wt(e.append) && ((t = Xo(e)) === "formdata" || t === "object" && wt(e.toString) && e.toString() === "[object FormData]"))
}
  , bg = Mt("URLSearchParams")
  , [yg,wg,Eg,Sg] = ["ReadableStream", "Request", "Response", "Headers"].map(Mt)
  , Tg = e => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Ws(e, t, {allOwnKeys: n=!1}={}) {
    if (e === null || typeof e > "u")
        return;
    let s, o;
    if (typeof e != "object" && (e = [e]),
    ms(e))
        for (s = 0,
        o = e.length; s < o; s++)
            t.call(null, e[s], s, e);
    else {
        const r = n ? Object.getOwnPropertyNames(e) : Object.keys(e)
          , i = r.length;
        let a;
        for (s = 0; s < i; s++)
            a = r[s],
            t.call(null, e[a], a, e)
    }
}
function Ku(e, t) {
    t = t.toLowerCase();
    const n = Object.keys(e);
    let s = n.length, o;
    for (; s-- > 0; )
        if (o = n[s],
        t === o.toLowerCase())
            return o;
    return null
}
const An = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global
  , Qu = e => !Vs(e) && e !== An;
function Yr() {
    const {caseless: e} = Qu(this) && this || {}
      , t = {}
      , n = (s, o) => {
        const r = e && Ku(t, o) || o;
        ho(t[r]) && ho(s) ? t[r] = Yr(t[r], s) : ho(s) ? t[r] = Yr({}, s) : ms(s) ? t[r] = s.slice() : t[r] = s
    }
    ;
    for (let s = 0, o = arguments.length; s < o; s++)
        arguments[s] && Ws(arguments[s], n);
    return t
}
const Cg = (e, t, n, {allOwnKeys: s}={}) => (Ws(t, (o, r) => {
    n && wt(o) ? e[r] = ju(o, n) : e[r] = o
}
, {
    allOwnKeys: s
}),
e)
  , kg = e => (e.charCodeAt(0) === 65279 && (e = e.slice(1)),
e)
  , $g = (e, t, n, s) => {
    e.prototype = Object.create(t.prototype, s),
    e.prototype.constructor = e,
    Object.defineProperty(e, "super", {
        value: t.prototype
    }),
    n && Object.assign(e.prototype, n)
}
  , Pg = (e, t, n, s) => {
    let o, r, i;
    const a = {};
    if (t = t || {},
    e == null)
        return t;
    do {
        for (o = Object.getOwnPropertyNames(e),
        r = o.length; r-- > 0; )
            i = o[r],
            (!s || s(i, e, t)) && !a[i] && (t[i] = e[i],
            a[i] = !0);
        e = n !== !1 && Ni(e)
    } while (e && (!n || n(e, t)) && e !== Object.prototype);
    return t
}
  , Rg = (e, t, n) => {
    e = String(e),
    (n === void 0 || n > e.length) && (n = e.length),
    n -= t.length;
    const s = e.indexOf(t, n);
    return s !== -1 && s === n
}
  , Og = e => {
    if (!e)
        return null;
    if (ms(e))
        return e;
    let t = e.length;
    if (!Wu(t))
        return null;
    const n = new Array(t);
    for (; t-- > 0; )
        n[t] = e[t];
    return n
}
  , Lg = (e => t => e && t instanceof e)(typeof Uint8Array < "u" && Ni(Uint8Array))
  , Ng = (e, t) => {
    const s = (e && e[Symbol.iterator]).call(e);
    let o;
    for (; (o = s.next()) && !o.done; ) {
        const r = o.value;
        t.call(e, r[0], r[1])
    }
}
  , Ag = (e, t) => {
    let n;
    const s = [];
    for (; (n = e.exec(t)) !== null; )
        s.push(n);
    return s
}
  , Ig = Mt("HTMLFormElement")
  , xg = e => e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function(n, s, o) {
    return s.toUpperCase() + o
})
  , Cl = ( ({hasOwnProperty: e}) => (t, n) => e.call(t, n))(Object.prototype)
  , Mg = Mt("RegExp")
  , Gu = (e, t) => {
    const n = Object.getOwnPropertyDescriptors(e)
      , s = {};
    Ws(n, (o, r) => {
        let i;
        (i = t(o, r, e)) !== !1 && (s[r] = i || o)
    }
    ),
    Object.defineProperties(e, s)
}
  , Dg = e => {
    Gu(e, (t, n) => {
        if (wt(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
            return !1;
        const s = e[n];
        if (wt(s)) {
            if (t.enumerable = !1,
            "writable"in t) {
                t.writable = !1;
                return
            }
            t.set || (t.set = () => {
                throw Error("Can not rewrite read-only method '" + n + "'")
            }
            )
        }
    }
    )
}
  , Bg = (e, t) => {
    const n = {}
      , s = o => {
        o.forEach(r => {
            n[r] = !0
        }
        )
    }
    ;
    return ms(e) ? s(e) : s(String(e).split(t)),
    n
}
  , Fg = () => {}
  , Ug = (e, t) => e != null && Number.isFinite(e = +e) ? e : t
  , br = "abcdefghijklmnopqrstuvwxyz"
  , kl = "0123456789"
  , Yu = {
    DIGIT: kl,
    ALPHA: br,
    ALPHA_DIGIT: br + br.toUpperCase() + kl
}
  , Vg = (e=16, t=Yu.ALPHA_DIGIT) => {
    let n = "";
    const {length: s} = t;
    for (; e--; )
        n += t[Math.random() * s | 0];
    return n
}
;
function Hg(e) {
    return !!(e && wt(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator])
}
const jg = e => {
    const t = new Array(10)
      , n = (s, o) => {
        if (Zo(s)) {
            if (t.indexOf(s) >= 0)
                return;
            if (!("toJSON"in s)) {
                t[o] = s;
                const r = ms(s) ? [] : {};
                return Ws(s, (i, a) => {
                    const l = n(i, o + 1);
                    !Vs(l) && (r[a] = l)
                }
                ),
                t[o] = void 0,
                r
            }
        }
        return s
    }
    ;
    return n(e, 0)
}
  , qg = Mt("AsyncFunction")
  , Wg = e => e && (Zo(e) || wt(e)) && wt(e.then) && wt(e.catch)
  , Ju = ( (e, t) => e ? setImmediate : t ? ( (n, s) => (An.addEventListener("message", ({source: o, data: r}) => {
    o === An && r === n && s.length && s.shift()()
}
, !1),
o => {
    s.push(o),
    An.postMessage(n, "*")
}
))(`axios@${Math.random()}`, []) : n => setTimeout(n))(typeof setImmediate == "function", wt(An.postMessage))
  , Kg = typeof queueMicrotask < "u" ? queueMicrotask.bind(An) : typeof process < "u" && process.nextTick || Ju
  , B = {
    isArray: ms,
    isArrayBuffer: qu,
    isBuffer: cg,
    isFormData: vg,
    isArrayBufferView: ug,
    isString: fg,
    isNumber: Wu,
    isBoolean: dg,
    isObject: Zo,
    isPlainObject: ho,
    isReadableStream: yg,
    isRequest: wg,
    isResponse: Eg,
    isHeaders: Sg,
    isUndefined: Vs,
    isDate: hg,
    isFile: pg,
    isBlob: mg,
    isRegExp: Mg,
    isFunction: wt,
    isStream: gg,
    isURLSearchParams: bg,
    isTypedArray: Lg,
    isFileList: _g,
    forEach: Ws,
    merge: Yr,
    extend: Cg,
    trim: Tg,
    stripBOM: kg,
    inherits: $g,
    toFlatObject: Pg,
    kindOf: Xo,
    kindOfTest: Mt,
    endsWith: Rg,
    toArray: Og,
    forEachEntry: Ng,
    matchAll: Ag,
    isHTMLForm: Ig,
    hasOwnProperty: Cl,
    hasOwnProp: Cl,
    reduceDescriptors: Gu,
    freezeMethods: Dg,
    toObjectSet: Bg,
    toCamelCase: xg,
    noop: Fg,
    toFiniteNumber: Ug,
    findKey: Ku,
    global: An,
    isContextDefined: Qu,
    ALPHABET: Yu,
    generateString: Vg,
    isSpecCompliantForm: Hg,
    toJSONObject: jg,
    isAsyncFn: qg,
    isThenable: Wg,
    setImmediate: Ju,
    asap: Kg
};
function ve(e, t, n, s, o) {
    Error.call(this),
    Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack,
    this.message = e,
    this.name = "AxiosError",
    t && (this.code = t),
    n && (this.config = n),
    s && (this.request = s),
    o && (this.response = o)
}
B.inherits(ve, Error, {
    toJSON: function() {
        return {
            message: this.message,
            name: this.name,
            description: this.description,
            number: this.number,
            fileName: this.fileName,
            lineNumber: this.lineNumber,
            columnNumber: this.columnNumber,
            stack: this.stack,
            config: B.toJSONObject(this.config),
            code: this.code,
            status: this.response && this.response.status ? this.response.status : null
        }
    }
});
const Xu = ve.prototype
  , zu = {};
["ERR_BAD_OPTION_VALUE", "ERR_BAD_OPTION", "ECONNABORTED", "ETIMEDOUT", "ERR_NETWORK", "ERR_FR_TOO_MANY_REDIRECTS", "ERR_DEPRECATED", "ERR_BAD_RESPONSE", "ERR_BAD_REQUEST", "ERR_CANCELED", "ERR_NOT_SUPPORT", "ERR_INVALID_URL"].forEach(e => {
    zu[e] = {
        value: e
    }
}
);
Object.defineProperties(ve, zu);
Object.defineProperty(Xu, "isAxiosError", {
    value: !0
});
ve.from = (e, t, n, s, o, r) => {
    const i = Object.create(Xu);
    return B.toFlatObject(e, i, function(l) {
        return l !== Error.prototype
    }, a => a !== "isAxiosError"),
    ve.call(i, e.message, t, n, s, o),
    i.cause = e,
    i.name = e.name,
    r && Object.assign(i, r),
    i
}
;
const Qg = null;
function Jr(e) {
    return B.isPlainObject(e) || B.isArray(e)
}
function Zu(e) {
    return B.endsWith(e, "[]") ? e.slice(0, -2) : e
}
function $l(e, t, n) {
    return e ? e.concat(t).map(function(o, r) {
        return o = Zu(o),
        !n && r ? "[" + o + "]" : o
    }).join(n ? "." : "") : t
}
function Gg(e) {
    return B.isArray(e) && !e.some(Jr)
}
const Yg = B.toFlatObject(B, {}, null, function(t) {
    return /^is[A-Z]/.test(t)
});
function er(e, t, n) {
    if (!B.isObject(e))
        throw new TypeError("target must be an object");
    t = t || new FormData,
    n = B.toFlatObject(n, {
        metaTokens: !0,
        dots: !1,
        indexes: !1
    }, !1, function(y, S) {
        return !B.isUndefined(S[y])
    });
    const s = n.metaTokens
      , o = n.visitor || u
      , r = n.dots
      , i = n.indexes
      , l = (n.Blob || typeof Blob < "u" && Blob) && B.isSpecCompliantForm(t);
    if (!B.isFunction(o))
        throw new TypeError("visitor must be a function");
    function c(v) {
        if (v === null)
            return "";
        if (B.isDate(v))
            return v.toISOString();
        if (!l && B.isBlob(v))
            throw new ve("Blob is not supported. Use a Buffer instead.");
        return B.isArrayBuffer(v) || B.isTypedArray(v) ? l && typeof Blob == "function" ? new Blob([v]) : Buffer.from(v) : v
    }
    function u(v, y, S) {
        let b = v;
        if (v && !S && typeof v == "object") {
            if (B.endsWith(y, "{}"))
                y = s ? y : y.slice(0, -2),
                v = JSON.stringify(v);
            else if (B.isArray(v) && Gg(v) || (B.isFileList(v) || B.endsWith(y, "[]")) && (b = B.toArray(v)))
                return y = Zu(y),
                b.forEach(function(E, T) {
                    !(B.isUndefined(E) || E === null) && t.append(i === !0 ? $l([y], T, r) : i === null ? y : y + "[]", c(E))
                }),
                !1
        }
        return Jr(v) ? !0 : (t.append($l(S, y, r), c(v)),
        !1)
    }
    const h = []
      , f = Object.assign(Yg, {
        defaultVisitor: u,
        convertValue: c,
        isVisitable: Jr
    });
    function m(v, y) {
        if (!B.isUndefined(v)) {
            if (h.indexOf(v) !== -1)
                throw Error("Circular reference detected in " + y.join("."));
            h.push(v),
            B.forEach(v, function(b, g) {
                (!(B.isUndefined(b) || b === null) && o.call(t, b, B.isString(g) ? g.trim() : g, y, f)) === !0 && m(b, y ? y.concat(g) : [g])
            }),
            h.pop()
        }
    }
    if (!B.isObject(e))
        throw new TypeError("data must be an object");
    return m(e),
    t
}
function Pl(e) {
    const t = {
        "!": "%21",
        "'": "%27",
        "(": "%28",
        ")": "%29",
        "~": "%7E",
        "%20": "+",
        "%00": "\0"
    };
    return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function(s) {
        return t[s]
    })
}
function Ai(e, t) {
    this._pairs = [],
    e && er(e, this, t)
}
const ef = Ai.prototype;
ef.append = function(t, n) {
    this._pairs.push([t, n])
}
;
ef.toString = function(t) {
    const n = t ? function(s) {
        return t.call(this, s, Pl)
    }
    : Pl;
    return this._pairs.map(function(o) {
        return n(o[0]) + "=" + n(o[1])
    }, "").join("&")
}
;
function Jg(e) {
    return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]")
}
function tf(e, t, n) {
    if (!t)
        return e;
    const s = n && n.encode || Jg
      , o = n && n.serialize;
    let r;
    if (o ? r = o(t, n) : r = B.isURLSearchParams(t) ? t.toString() : new Ai(t,n).toString(s),
    r) {
        const i = e.indexOf("#");
        i !== -1 && (e = e.slice(0, i)),
        e += (e.indexOf("?") === -1 ? "?" : "&") + r
    }
    return e
}
class Rl {
    constructor() {
        this.handlers = []
    }
    use(t, n, s) {
        return this.handlers.push({
            fulfilled: t,
            rejected: n,
            synchronous: s ? s.synchronous : !1,
            runWhen: s ? s.runWhen : null
        }),
        this.handlers.length - 1
    }
    eject(t) {
        this.handlers[t] && (this.handlers[t] = null)
    }
    clear() {
        this.handlers && (this.handlers = [])
    }
    forEach(t) {
        B.forEach(this.handlers, function(s) {
            s !== null && t(s)
        })
    }
}
const nf = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1
}
  , Xg = typeof URLSearchParams < "u" ? URLSearchParams : Ai
  , zg = typeof FormData < "u" ? FormData : null
  , Zg = typeof Blob < "u" ? Blob : null
  , ev = {
    isBrowser: !0,
    classes: {
        URLSearchParams: Xg,
        FormData: zg,
        Blob: Zg
    },
    protocols: ["http", "https", "file", "blob", "url", "data"]
}
  , Ii = typeof window < "u" && typeof document < "u"
  , tv = (e => Ii && ["ReactNative", "NativeScript", "NS"].indexOf(e) < 0)(typeof navigator < "u" && navigator.product)
  , nv = typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope && typeof self.importScripts == "function"
  , sv = Ii && window.location.href || "http://localhost"
  , ov = Object.freeze(Object.defineProperty({
    __proto__: null,
    hasBrowserEnv: Ii,
    hasStandardBrowserEnv: tv,
    hasStandardBrowserWebWorkerEnv: nv,
    origin: sv
}, Symbol.toStringTag, {
    value: "Module"
}))
  , Lt = {
    ...ov,
    ...ev
};
function rv(e, t) {
    return er(e, new Lt.classes.URLSearchParams, Object.assign({
        visitor: function(n, s, o, r) {
            return Lt.isNode && B.isBuffer(n) ? (this.append(s, n.toString("base64")),
            !1) : r.defaultVisitor.apply(this, arguments)
        }
    }, t))
}
function iv(e) {
    return B.matchAll(/\w+|\[(\w*)]/g, e).map(t => t[0] === "[]" ? "" : t[1] || t[0])
}
function av(e) {
    const t = {}
      , n = Object.keys(e);
    let s;
    const o = n.length;
    let r;
    for (s = 0; s < o; s++)
        r = n[s],
        t[r] = e[r];
    return t
}
function sf(e) {
    function t(n, s, o, r) {
        let i = n[r++];
        if (i === "__proto__")
            return !0;
        const a = Number.isFinite(+i)
          , l = r >= n.length;
        return i = !i && B.isArray(o) ? o.length : i,
        l ? (B.hasOwnProp(o, i) ? o[i] = [o[i], s] : o[i] = s,
        !a) : ((!o[i] || !B.isObject(o[i])) && (o[i] = []),
        t(n, s, o[i], r) && B.isArray(o[i]) && (o[i] = av(o[i])),
        !a)
    }
    if (B.isFormData(e) && B.isFunction(e.entries)) {
        const n = {};
        return B.forEachEntry(e, (s, o) => {
            t(iv(s), o, n, 0)
        }
        ),
        n
    }
    return null
}
function lv(e, t, n) {
    if (B.isString(e))
        try {
            return (t || JSON.parse)(e),
            B.trim(e)
        } catch (s) {
            if (s.name !== "SyntaxError")
                throw s
        }
    return (n || JSON.stringify)(e)
}
const xi = {
    transitional: nf,
    adapter: ["xhr", "http", "fetch"],
    transformRequest: [function(t, n) {
        const s = n.getContentType() || ""
          , o = s.indexOf("application/json") > -1
          , r = B.isObject(t);
        if (r && B.isHTMLForm(t) && (t = new FormData(t)),
        B.isFormData(t))
            return o ? JSON.stringify(sf(t)) : t;
        if (B.isArrayBuffer(t) || B.isBuffer(t) || B.isStream(t) || B.isFile(t) || B.isBlob(t) || B.isReadableStream(t))
            return t;
        if (B.isArrayBufferView(t))
            return t.buffer;
        if (B.isURLSearchParams(t))
            return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1),
            t.toString();
        let a;
        if (r) {
            if (s.indexOf("application/x-www-form-urlencoded") > -1)
                return rv(t, this.formSerializer).toString();
            if ((a = B.isFileList(t)) || s.indexOf("multipart/form-data") > -1) {
                const l = this.env && this.env.FormData;
                return er(a ? {
                    "files[]": t
                } : t, l && new l, this.formSerializer)
            }
        }
        return r || o ? (n.setContentType("application/json", !1),
        lv(t)) : t
    }
    ],
    transformResponse: [function(t) {
        const n = this.transitional || xi.transitional
          , s = n && n.forcedJSONParsing
          , o = this.responseType === "json";
        if (B.isResponse(t) || B.isReadableStream(t))
            return t;
        if (t && B.isString(t) && (s && !this.responseType || o)) {
            const i = !(n && n.silentJSONParsing) && o;
            try {
                return JSON.parse(t)
            } catch (a) {
                if (i)
                    throw a.name === "SyntaxError" ? ve.from(a, ve.ERR_BAD_RESPONSE, this, null, this.response) : a
            }
        }
        return t
    }
    ],
    timeout: 0,
    xsrfCookieName: "XSRF-TOKEN",
    xsrfHeaderName: "X-XSRF-TOKEN",
    maxContentLength: -1,
    maxBodyLength: -1,
    env: {
        FormData: Lt.classes.FormData,
        Blob: Lt.classes.Blob
    },
    validateStatus: function(t) {
        return t >= 200 && t < 300
    },
    headers: {
        common: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": void 0
        }
    }
};
B.forEach(["delete", "get", "head", "post", "put", "patch"], e => {
    xi.headers[e] = {}
}
);
const Mi = xi
  , cv = B.toObjectSet(["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"])
  , uv = e => {
    const t = {};
    let n, s, o;
    return e && e.split(`
`).forEach(function(i) {
        o = i.indexOf(":"),
        n = i.substring(0, o).trim().toLowerCase(),
        s = i.substring(o + 1).trim(),
        !(!n || t[n] && cv[n]) && (n === "set-cookie" ? t[n] ? t[n].push(s) : t[n] = [s] : t[n] = t[n] ? t[n] + ", " + s : s)
    }),
    t
}
  , Ol = Symbol("internals");
function Es(e) {
    return e && String(e).trim().toLowerCase()
}
function po(e) {
    return e === !1 || e == null ? e : B.isArray(e) ? e.map(po) : String(e)
}
function fv(e) {
    const t = Object.create(null)
      , n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
    let s;
    for (; s = n.exec(e); )
        t[s[1]] = s[2];
    return t
}
const dv = e => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function yr(e, t, n, s, o) {
    if (B.isFunction(s))
        return s.call(this, t, n);
    if (o && (t = n),
    !!B.isString(t)) {
        if (B.isString(s))
            return t.indexOf(s) !== -1;
        if (B.isRegExp(s))
            return s.test(t)
    }
}
function hv(e) {
    return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, n, s) => n.toUpperCase() + s)
}
function pv(e, t) {
    const n = B.toCamelCase(" " + t);
    ["get", "set", "has"].forEach(s => {
        Object.defineProperty(e, s + n, {
            value: function(o, r, i) {
                return this[s].call(this, t, o, r, i)
            },
            configurable: !0
        })
    }
    )
}
class tr {
    constructor(t) {
        t && this.set(t)
    }
    set(t, n, s) {
        const o = this;
        function r(a, l, c) {
            const u = Es(l);
            if (!u)
                throw new Error("header name must be a non-empty string");
            const h = B.findKey(o, u);
            (!h || o[h] === void 0 || c === !0 || c === void 0 && o[h] !== !1) && (o[h || l] = po(a))
        }
        const i = (a, l) => B.forEach(a, (c, u) => r(c, u, l));
        if (B.isPlainObject(t) || t instanceof this.constructor)
            i(t, n);
        else if (B.isString(t) && (t = t.trim()) && !dv(t))
            i(uv(t), n);
        else if (B.isHeaders(t))
            for (const [a,l] of t.entries())
                r(l, a, s);
        else
            t != null && r(n, t, s);
        return this
    }
    get(t, n) {
        if (t = Es(t),
        t) {
            const s = B.findKey(this, t);
            if (s) {
                const o = this[s];
                if (!n)
                    return o;
                if (n === !0)
                    return fv(o);
                if (B.isFunction(n))
                    return n.call(this, o, s);
                if (B.isRegExp(n))
                    return n.exec(o);
                throw new TypeError("parser must be boolean|regexp|function")
            }
        }
    }
    has(t, n) {
        if (t = Es(t),
        t) {
            const s = B.findKey(this, t);
            return !!(s && this[s] !== void 0 && (!n || yr(this, this[s], s, n)))
        }
        return !1
    }
    delete(t, n) {
        const s = this;
        let o = !1;
        function r(i) {
            if (i = Es(i),
            i) {
                const a = B.findKey(s, i);
                a && (!n || yr(s, s[a], a, n)) && (delete s[a],
                o = !0)
            }
        }
        return B.isArray(t) ? t.forEach(r) : r(t),
        o
    }
    clear(t) {
        const n = Object.keys(this);
        let s = n.length
          , o = !1;
        for (; s--; ) {
            const r = n[s];
            (!t || yr(this, this[r], r, t, !0)) && (delete this[r],
            o = !0)
        }
        return o
    }
    normalize(t) {
        const n = this
          , s = {};
        return B.forEach(this, (o, r) => {
            const i = B.findKey(s, r);
            if (i) {
                n[i] = po(o),
                delete n[r];
                return
            }
            const a = t ? hv(r) : String(r).trim();
            a !== r && delete n[r],
            n[a] = po(o),
            s[a] = !0
        }
        ),
        this
    }
    concat(...t) {
        return this.constructor.concat(this, ...t)
    }
    toJSON(t) {
        const n = Object.create(null);
        return B.forEach(this, (s, o) => {
            s != null && s !== !1 && (n[o] = t && B.isArray(s) ? s.join(", ") : s)
        }
        ),
        n
    }
    [Symbol.iterator]() {
        return Object.entries(this.toJSON())[Symbol.iterator]()
    }
    toString() {
        return Object.entries(this.toJSON()).map( ([t,n]) => t + ": " + n).join(`
`)
    }
    get[Symbol.toStringTag]() {
        return "AxiosHeaders"
    }
    static from(t) {
        return t instanceof this ? t : new this(t)
    }
    static concat(t, ...n) {
        const s = new this(t);
        return n.forEach(o => s.set(o)),
        s
    }
    static accessor(t) {
        const s = (this[Ol] = this[Ol] = {
            accessors: {}
        }).accessors
          , o = this.prototype;
        function r(i) {
            const a = Es(i);
            s[a] || (pv(o, i),
            s[a] = !0)
        }
        return B.isArray(t) ? t.forEach(r) : r(t),
        this
    }
}
tr.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
B.reduceDescriptors(tr.prototype, ({value: e}, t) => {
    let n = t[0].toUpperCase() + t.slice(1);
    return {
        get: () => e,
        set(s) {
            this[n] = s
        }
    }
}
);
B.freezeMethods(tr);
const Nt = tr;
function wr(e, t) {
    const n = this || Mi
      , s = t || n
      , o = Nt.from(s.headers);
    let r = s.data;
    return B.forEach(e, function(a) {
        r = a.call(n, r, o.normalize(), t ? t.status : void 0)
    }),
    o.normalize(),
    r
}
function of(e) {
    return !!(e && e.__CANCEL__)
}
function _s(e, t, n) {
    ve.call(this, e ?? "canceled", ve.ERR_CANCELED, t, n),
    this.name = "CanceledError"
}
B.inherits(_s, ve, {
    __CANCEL__: !0
});
function rf(e, t, n) {
    const s = n.config.validateStatus;
    !n.status || !s || s(n.status) ? e(n) : t(new ve("Request failed with status code " + n.status,[ve.ERR_BAD_REQUEST, ve.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],n.config,n.request,n))
}
function mv(e) {
    const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
    return t && t[1] || ""
}
function _v(e, t) {
    e = e || 10;
    const n = new Array(e)
      , s = new Array(e);
    let o = 0, r = 0, i;
    return t = t !== void 0 ? t : 1e3,
    function(l) {
        const c = Date.now()
          , u = s[r];
        i || (i = c),
        n[o] = l,
        s[o] = c;
        let h = r
          , f = 0;
        for (; h !== o; )
            f += n[h++],
            h = h % e;
        if (o = (o + 1) % e,
        o === r && (r = (r + 1) % e),
        c - i < t)
            return;
        const m = u && c - u;
        return m ? Math.round(f * 1e3 / m) : void 0
    }
}
function gv(e, t) {
    let n = 0, s = 1e3 / t, o, r;
    const i = (c, u=Date.now()) => {
        n = u,
        o = null,
        r && (clearTimeout(r),
        r = null),
        e.apply(null, c)
    }
    ;
    return [ (...c) => {
        const u = Date.now()
          , h = u - n;
        h >= s ? i(c, u) : (o = c,
        r || (r = setTimeout( () => {
            r = null,
            i(o)
        }
        , s - h)))
    }
    , () => o && i(o)]
}
const Oo = (e, t, n=3) => {
    let s = 0;
    const o = _v(50, 250);
    return gv(r => {
        const i = r.loaded
          , a = r.lengthComputable ? r.total : void 0
          , l = i - s
          , c = o(l)
          , u = i <= a;
        s = i;
        const h = {
            loaded: i,
            total: a,
            progress: a ? i / a : void 0,
            bytes: l,
            rate: c || void 0,
            estimated: c && a && u ? (a - i) / c : void 0,
            event: r,
            lengthComputable: a != null,
            [t ? "download" : "upload"]: !0
        };
        e(h)
    }
    , n)
}
  , Ll = (e, t) => {
    const n = e != null;
    return [s => t[0]({
        lengthComputable: n,
        total: e,
        loaded: s
    }), t[1]]
}
  , Nl = e => (...t) => B.asap( () => e(...t))
  , vv = Lt.hasStandardBrowserEnv ? function() {
    const t = /(msie|trident)/i.test(navigator.userAgent)
      , n = document.createElement("a");
    let s;
    function o(r) {
        let i = r;
        return t && (n.setAttribute("href", i),
        i = n.href),
        n.setAttribute("href", i),
        {
            href: n.href,
            protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
            host: n.host,
            search: n.search ? n.search.replace(/^\?/, "") : "",
            hash: n.hash ? n.hash.replace(/^#/, "") : "",
            hostname: n.hostname,
            port: n.port,
            pathname: n.pathname.charAt(0) === "/" ? n.pathname : "/" + n.pathname
        }
    }
    return s = o(window.location.href),
    function(i) {
        const a = B.isString(i) ? o(i) : i;
        return a.protocol === s.protocol && a.host === s.host
    }
}() : function() {
    return function() {
        return !0
    }
}()
  , bv = Lt.hasStandardBrowserEnv ? {
    write(e, t, n, s, o, r) {
        const i = [e + "=" + encodeURIComponent(t)];
        B.isNumber(n) && i.push("expires=" + new Date(n).toGMTString()),
        B.isString(s) && i.push("path=" + s),
        B.isString(o) && i.push("domain=" + o),
        r === !0 && i.push("secure"),
        document.cookie = i.join("; ")
    },
    read(e) {
        const t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
        return t ? decodeURIComponent(t[3]) : null
    },
    remove(e) {
        this.write(e, "", Date.now() - 864e5)
    }
} : {
    write() {},
    read() {
        return null
    },
    remove() {}
};
function yv(e) {
    return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)
}
function wv(e, t) {
    return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e
}
function af(e, t) {
    return e && !yv(t) ? wv(e, t) : t
}
const Al = e => e instanceof Nt ? {
    ...e
} : e;
function Fn(e, t) {
    t = t || {};
    const n = {};
    function s(c, u, h) {
        return B.isPlainObject(c) && B.isPlainObject(u) ? B.merge.call({
            caseless: h
        }, c, u) : B.isPlainObject(u) ? B.merge({}, u) : B.isArray(u) ? u.slice() : u
    }
    function o(c, u, h) {
        if (B.isUndefined(u)) {
            if (!B.isUndefined(c))
                return s(void 0, c, h)
        } else
            return s(c, u, h)
    }
    function r(c, u) {
        if (!B.isUndefined(u))
            return s(void 0, u)
    }
    function i(c, u) {
        if (B.isUndefined(u)) {
            if (!B.isUndefined(c))
                return s(void 0, c)
        } else
            return s(void 0, u)
    }
    function a(c, u, h) {
        if (h in t)
            return s(c, u);
        if (h in e)
            return s(void 0, c)
    }
    const l = {
        url: r,
        method: r,
        data: r,
        baseURL: i,
        transformRequest: i,
        transformResponse: i,
        paramsSerializer: i,
        timeout: i,
        timeoutMessage: i,
        withCredentials: i,
        withXSRFToken: i,
        adapter: i,
        responseType: i,
        xsrfCookieName: i,
        xsrfHeaderName: i,
        onUploadProgress: i,
        onDownloadProgress: i,
        decompress: i,
        maxContentLength: i,
        maxBodyLength: i,
        beforeRedirect: i,
        transport: i,
        httpAgent: i,
        httpsAgent: i,
        cancelToken: i,
        socketPath: i,
        responseEncoding: i,
        validateStatus: a,
        headers: (c, u) => o(Al(c), Al(u), !0)
    };
    return B.forEach(Object.keys(Object.assign({}, e, t)), function(u) {
        const h = l[u] || o
          , f = h(e[u], t[u], u);
        B.isUndefined(f) && h !== a || (n[u] = f)
    }),
    n
}
const lf = e => {
    const t = Fn({}, e);
    let {data: n, withXSRFToken: s, xsrfHeaderName: o, xsrfCookieName: r, headers: i, auth: a} = t;
    t.headers = i = Nt.from(i),
    t.url = tf(af(t.baseURL, t.url), e.params, e.paramsSerializer),
    a && i.set("Authorization", "Basic " + btoa((a.username || "") + ":" + (a.password ? unescape(encodeURIComponent(a.password)) : "")));
    let l;
    if (B.isFormData(n)) {
        if (Lt.hasStandardBrowserEnv || Lt.hasStandardBrowserWebWorkerEnv)
            i.setContentType(void 0);
        else if ((l = i.getContentType()) !== !1) {
            const [c,...u] = l ? l.split(";").map(h => h.trim()).filter(Boolean) : [];
            i.setContentType([c || "multipart/form-data", ...u].join("; "))
        }
    }
    if (Lt.hasStandardBrowserEnv && (s && B.isFunction(s) && (s = s(t)),
    s || s !== !1 && vv(t.url))) {
        const c = o && r && bv.read(r);
        c && i.set(o, c)
    }
    return t
}
  , Ev = typeof XMLHttpRequest < "u"
  , Sv = Ev && function(e) {
    return new Promise(function(n, s) {
        const o = lf(e);
        let r = o.data;
        const i = Nt.from(o.headers).normalize();
        let {responseType: a, onUploadProgress: l, onDownloadProgress: c} = o, u, h, f, m, v;
        function y() {
            m && m(),
            v && v(),
            o.cancelToken && o.cancelToken.unsubscribe(u),
            o.signal && o.signal.removeEventListener("abort", u)
        }
        let S = new XMLHttpRequest;
        S.open(o.method.toUpperCase(), o.url, !0),
        S.timeout = o.timeout;
        function b() {
            if (!S)
                return;
            const E = Nt.from("getAllResponseHeaders"in S && S.getAllResponseHeaders())
              , R = {
                data: !a || a === "text" || a === "json" ? S.responseText : S.response,
                status: S.status,
                statusText: S.statusText,
                headers: E,
                config: e,
                request: S
            };
            rf(function(L) {
                n(L),
                y()
            }, function(L) {
                s(L),
                y()
            }, R),
            S = null
        }
        "onloadend"in S ? S.onloadend = b : S.onreadystatechange = function() {
            !S || S.readyState !== 4 || S.status === 0 && !(S.responseURL && S.responseURL.indexOf("file:") === 0) || setTimeout(b)
        }
        ,
        S.onabort = function() {
            S && (s(new ve("Request aborted",ve.ECONNABORTED,e,S)),
            S = null)
        }
        ,
        S.onerror = function() {
            s(new ve("Network Error",ve.ERR_NETWORK,e,S)),
            S = null
        }
        ,
        S.ontimeout = function() {
            let T = o.timeout ? "timeout of " + o.timeout + "ms exceeded" : "timeout exceeded";
            const R = o.transitional || nf;
            o.timeoutErrorMessage && (T = o.timeoutErrorMessage),
            s(new ve(T,R.clarifyTimeoutError ? ve.ETIMEDOUT : ve.ECONNABORTED,e,S)),
            S = null
        }
        ,
        r === void 0 && i.setContentType(null),
        "setRequestHeader"in S && B.forEach(i.toJSON(), function(T, R) {
            S.setRequestHeader(R, T)
        }),
        B.isUndefined(o.withCredentials) || (S.withCredentials = !!o.withCredentials),
        a && a !== "json" && (S.responseType = o.responseType),
        c && ([f,v] = Oo(c, !0),
        S.addEventListener("progress", f)),
        l && S.upload && ([h,m] = Oo(l),
        S.upload.addEventListener("progress", h),
        S.upload.addEventListener("loadend", m)),
        (o.cancelToken || o.signal) && (u = E => {
            S && (s(!E || E.type ? new _s(null,e,S) : E),
            S.abort(),
            S = null)
        }
        ,
        o.cancelToken && o.cancelToken.subscribe(u),
        o.signal && (o.signal.aborted ? u() : o.signal.addEventListener("abort", u)));
        const g = mv(o.url);
        if (g && Lt.protocols.indexOf(g) === -1) {
            s(new ve("Unsupported protocol " + g + ":",ve.ERR_BAD_REQUEST,e));
            return
        }
        S.send(r || null)
    }
    )
}
  , Tv = (e, t) => {
    let n = new AbortController, s;
    const o = function(l) {
        if (!s) {
            s = !0,
            i();
            const c = l instanceof Error ? l : this.reason;
            n.abort(c instanceof ve ? c : new _s(c instanceof Error ? c.message : c))
        }
    };
    let r = t && setTimeout( () => {
        o(new ve(`timeout ${t} of ms exceeded`,ve.ETIMEDOUT))
    }
    , t);
    const i = () => {
        e && (r && clearTimeout(r),
        r = null,
        e.forEach(l => {
            l && (l.removeEventListener ? l.removeEventListener("abort", o) : l.unsubscribe(o))
        }
        ),
        e = null)
    }
    ;
    e.forEach(l => l && l.addEventListener && l.addEventListener("abort", o));
    const {signal: a} = n;
    return a.unsubscribe = i,
    [a, () => {
        r && clearTimeout(r),
        r = null
    }
    ]
}
  , Cv = function*(e, t) {
    let n = e.byteLength;
    if (!t || n < t) {
        yield e;
        return
    }
    let s = 0, o;
    for (; s < n; )
        o = s + t,
        yield e.slice(s, o),
        s = o
}
  , kv = async function*(e, t, n) {
    for await(const s of e)
        yield*Cv(ArrayBuffer.isView(s) ? s : await n(String(s)), t)
}
  , Il = (e, t, n, s, o) => {
    const r = kv(e, t, o);
    let i = 0, a, l = c => {
        a || (a = !0,
        s && s(c))
    }
    ;
    return new ReadableStream({
        async pull(c) {
            try {
                const {done: u, value: h} = await r.next();
                if (u) {
                    l(),
                    c.close();
                    return
                }
                let f = h.byteLength;
                if (n) {
                    let m = i += f;
                    n(m)
                }
                c.enqueue(new Uint8Array(h))
            } catch (u) {
                throw l(u),
                u
            }
        },
        cancel(c) {
            return l(c),
            r.return()
        }
    },{
        highWaterMark: 2
    })
}
  , nr = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function"
  , cf = nr && typeof ReadableStream == "function"
  , Xr = nr && (typeof TextEncoder == "function" ? (e => t => e.encode(t))(new TextEncoder) : async e => new Uint8Array(await new Response(e).arrayBuffer()))
  , uf = (e, ...t) => {
    try {
        return !!e(...t)
    } catch {
        return !1
    }
}
  , $v = cf && uf( () => {
    let e = !1;
    const t = new Request(Lt.origin,{
        body: new ReadableStream,
        method: "POST",
        get duplex() {
            return e = !0,
            "half"
        }
    }).headers.has("Content-Type");
    return e && !t
}
)
  , xl = 64 * 1024
  , zr = cf && uf( () => B.isReadableStream(new Response("").body))
  , Lo = {
    stream: zr && (e => e.body)
};
nr && (e => {
    ["text", "arrayBuffer", "blob", "formData", "stream"].forEach(t => {
        !Lo[t] && (Lo[t] = B.isFunction(e[t]) ? n => n[t]() : (n, s) => {
            throw new ve(`Response type '${t}' is not supported`,ve.ERR_NOT_SUPPORT,s)
        }
        )
    }
    )
}
)(new Response);
const Pv = async e => {
    if (e == null)
        return 0;
    if (B.isBlob(e))
        return e.size;
    if (B.isSpecCompliantForm(e))
        return (await new Request(e).arrayBuffer()).byteLength;
    if (B.isArrayBufferView(e) || B.isArrayBuffer(e))
        return e.byteLength;
    if (B.isURLSearchParams(e) && (e = e + ""),
    B.isString(e))
        return (await Xr(e)).byteLength
}
  , Rv = async (e, t) => {
    const n = B.toFiniteNumber(e.getContentLength());
    return n ?? Pv(t)
}
  , Ov = nr && (async e => {
    let {url: t, method: n, data: s, signal: o, cancelToken: r, timeout: i, onDownloadProgress: a, onUploadProgress: l, responseType: c, headers: u, withCredentials: h="same-origin", fetchOptions: f} = lf(e);
    c = c ? (c + "").toLowerCase() : "text";
    let[m,v] = o || r || i ? Tv([o, r], i) : [], y, S;
    const b = () => {
        !y && setTimeout( () => {
            m && m.unsubscribe()
        }
        ),
        y = !0
    }
    ;
    let g;
    try {
        if (l && $v && n !== "get" && n !== "head" && (g = await Rv(u, s)) !== 0) {
            let C = new Request(t,{
                method: "POST",
                body: s,
                duplex: "half"
            }), L;
            if (B.isFormData(s) && (L = C.headers.get("content-type")) && u.setContentType(L),
            C.body) {
                const [M,I] = Ll(g, Oo(Nl(l)));
                s = Il(C.body, xl, M, I, Xr)
            }
        }
        B.isString(h) || (h = h ? "include" : "omit"),
        S = new Request(t,{
            ...f,
            signal: m,
            method: n.toUpperCase(),
            headers: u.normalize().toJSON(),
            body: s,
            duplex: "half",
            credentials: h
        });
        let E = await fetch(S);
        const T = zr && (c === "stream" || c === "response");
        if (zr && (a || T)) {
            const C = {};
            ["status", "statusText", "headers"].forEach(K => {
                C[K] = E[K]
            }
            );
            const L = B.toFiniteNumber(E.headers.get("content-length"))
              , [M,I] = a && Ll(L, Oo(Nl(a), !0)) || [];
            E = new Response(Il(E.body, xl, M, () => {
                I && I(),
                T && b()
            }
            , Xr),C)
        }
        c = c || "text";
        let R = await Lo[B.findKey(Lo, c) || "text"](E, e);
        return !T && b(),
        v && v(),
        await new Promise( (C, L) => {
            rf(C, L, {
                data: R,
                headers: Nt.from(E.headers),
                status: E.status,
                statusText: E.statusText,
                config: e,
                request: S
            })
        }
        )
    } catch (E) {
        throw b(),
        E && E.name === "TypeError" && /fetch/i.test(E.message) ? Object.assign(new ve("Network Error",ve.ERR_NETWORK,e,S), {
            cause: E.cause || E
        }) : ve.from(E, E && E.code, e, S)
    }
}
)
  , Zr = {
    http: Qg,
    xhr: Sv,
    fetch: Ov
};
B.forEach(Zr, (e, t) => {
    if (e) {
        try {
            Object.defineProperty(e, "name", {
                value: t
            })
        } catch {}
        Object.defineProperty(e, "adapterName", {
            value: t
        })
    }
}
);
const Ml = e => `- ${e}`
  , Lv = e => B.isFunction(e) || e === null || e === !1
  , ff = {
    getAdapter: e => {
        e = B.isArray(e) ? e : [e];
        const {length: t} = e;
        let n, s;
        const o = {};
        for (let r = 0; r < t; r++) {
            n = e[r];
            let i;
            if (s = n,
            !Lv(n) && (s = Zr[(i = String(n)).toLowerCase()],
            s === void 0))
                throw new ve(`Unknown adapter '${i}'`);
            if (s)
                break;
            o[i || "#" + r] = s
        }
        if (!s) {
            const r = Object.entries(o).map( ([a,l]) => `adapter ${a} ` + (l === !1 ? "is not supported by the environment" : "is not available in the build"));
            let i = t ? r.length > 1 ? `since :
` + r.map(Ml).join(`
`) : " " + Ml(r[0]) : "as no adapter specified";
            throw new ve("There is no suitable adapter to dispatch the request " + i,"ERR_NOT_SUPPORT")
        }
        return s
    }
    ,
    adapters: Zr
};
function Er(e) {
    if (e.cancelToken && e.cancelToken.throwIfRequested(),
    e.signal && e.signal.aborted)
        throw new _s(null,e)
}
function Dl(e) {
    return Er(e),
    e.headers = Nt.from(e.headers),
    e.data = wr.call(e, e.transformRequest),
    ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1),
    ff.getAdapter(e.adapter || Mi.adapter)(e).then(function(s) {
        return Er(e),
        s.data = wr.call(e, e.transformResponse, s),
        s.headers = Nt.from(s.headers),
        s
    }, function(s) {
        return of(s) || (Er(e),
        s && s.response && (s.response.data = wr.call(e, e.transformResponse, s.response),
        s.response.headers = Nt.from(s.response.headers))),
        Promise.reject(s)
    })
}
const df = "1.7.3"
  , Di = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach( (e, t) => {
    Di[e] = function(s) {
        return typeof s === e || "a" + (t < 1 ? "n " : " ") + e
    }
}
);
const Bl = {};
Di.transitional = function(t, n, s) {
    function o(r, i) {
        return "[Axios v" + df + "] Transitional option '" + r + "'" + i + (s ? ". " + s : "")
    }
    return (r, i, a) => {
        if (t === !1)
            throw new ve(o(i, " has been removed" + (n ? " in " + n : "")),ve.ERR_DEPRECATED);
        return n && !Bl[i] && (Bl[i] = !0,
        console.warn(o(i, " has been deprecated since v" + n + " and will be removed in the near future"))),
        t ? t(r, i, a) : !0
    }
}
;
function Nv(e, t, n) {
    if (typeof e != "object")
        throw new ve("options must be an object",ve.ERR_BAD_OPTION_VALUE);
    const s = Object.keys(e);
    let o = s.length;
    for (; o-- > 0; ) {
        const r = s[o]
          , i = t[r];
        if (i) {
            const a = e[r]
              , l = a === void 0 || i(a, r, e);
            if (l !== !0)
                throw new ve("option " + r + " must be " + l,ve.ERR_BAD_OPTION_VALUE);
            continue
        }
        if (n !== !0)
            throw new ve("Unknown option " + r,ve.ERR_BAD_OPTION)
    }
}
const ei = {
    assertOptions: Nv,
    validators: Di
}
  , cn = ei.validators;
class No {
    constructor(t) {
        this.defaults = t,
        this.interceptors = {
            request: new Rl,
            response: new Rl
        }
    }
    async request(t, n) {
        try {
            return await this._request(t, n)
        } catch (s) {
            if (s instanceof Error) {
                let o;
                Error.captureStackTrace ? Error.captureStackTrace(o = {}) : o = new Error;
                const r = o.stack ? o.stack.replace(/^.+\n/, "") : "";
                try {
                    s.stack ? r && !String(s.stack).endsWith(r.replace(/^.+\n.+\n/, "")) && (s.stack += `
` + r) : s.stack = r
                } catch {}
            }
            throw s
        }
    }
    _request(t, n) {
        typeof t == "string" ? (n = n || {},
        n.url = t) : n = t || {},
        n = Fn(this.defaults, n);
        const {transitional: s, paramsSerializer: o, headers: r} = n;
        s !== void 0 && ei.assertOptions(s, {
            silentJSONParsing: cn.transitional(cn.boolean),
            forcedJSONParsing: cn.transitional(cn.boolean),
            clarifyTimeoutError: cn.transitional(cn.boolean)
        }, !1),
        o != null && (B.isFunction(o) ? n.paramsSerializer = {
            serialize: o
        } : ei.assertOptions(o, {
            encode: cn.function,
            serialize: cn.function
        }, !0)),
        n.method = (n.method || this.defaults.method || "get").toLowerCase();
        let i = r && B.merge(r.common, r[n.method]);
        r && B.forEach(["delete", "get", "head", "post", "put", "patch", "common"], v => {
            delete r[v]
        }
        ),
        n.headers = Nt.concat(i, r);
        const a = [];
        let l = !0;
        this.interceptors.request.forEach(function(y) {
            typeof y.runWhen == "function" && y.runWhen(n) === !1 || (l = l && y.synchronous,
            a.unshift(y.fulfilled, y.rejected))
        });
        const c = [];
        this.interceptors.response.forEach(function(y) {
            c.push(y.fulfilled, y.rejected)
        });
        let u, h = 0, f;
        if (!l) {
            const v = [Dl.bind(this), void 0];
            for (v.unshift.apply(v, a),
            v.push.apply(v, c),
            f = v.length,
            u = Promise.resolve(n); h < f; )
                u = u.then(v[h++], v[h++]);
            return u
        }
        f = a.length;
        let m = n;
        for (h = 0; h < f; ) {
            const v = a[h++]
              , y = a[h++];
            try {
                m = v(m)
            } catch (S) {
                y.call(this, S);
                break
            }
        }
        try {
            u = Dl.call(this, m)
        } catch (v) {
            return Promise.reject(v)
        }
        for (h = 0,
        f = c.length; h < f; )
            u = u.then(c[h++], c[h++]);
        return u
    }
    getUri(t) {
        t = Fn(this.defaults, t);
        const n = af(t.baseURL, t.url);
        return tf(n, t.params, t.paramsSerializer)
    }
}
B.forEach(["delete", "get", "head", "options"], function(t) {
    No.prototype[t] = function(n, s) {
        return this.request(Fn(s || {}, {
            method: t,
            url: n,
            data: (s || {}).data
        }))
    }
});
B.forEach(["post", "put", "patch"], function(t) {
    function n(s) {
        return function(r, i, a) {
            return this.request(Fn(a || {}, {
                method: t,
                headers: s ? {
                    "Content-Type": "multipart/form-data"
                } : {},
                url: r,
                data: i
            }))
        }
    }
    No.prototype[t] = n(),
    No.prototype[t + "Form"] = n(!0)
});
const mo = No;
class Bi {
    constructor(t) {
        if (typeof t != "function")
            throw new TypeError("executor must be a function.");
        let n;
        this.promise = new Promise(function(r) {
            n = r
        }
        );
        const s = this;
        this.promise.then(o => {
            if (!s._listeners)
                return;
            let r = s._listeners.length;
            for (; r-- > 0; )
                s._listeners[r](o);
            s._listeners = null
        }
        ),
        this.promise.then = o => {
            let r;
            const i = new Promise(a => {
                s.subscribe(a),
                r = a
            }
            ).then(o);
            return i.cancel = function() {
                s.unsubscribe(r)
            }
            ,
            i
        }
        ,
        t(function(r, i, a) {
            s.reason || (s.reason = new _s(r,i,a),
            n(s.reason))
        })
    }
    throwIfRequested() {
        if (this.reason)
            throw this.reason
    }
    subscribe(t) {
        if (this.reason) {
            t(this.reason);
            return
        }
        this._listeners ? this._listeners.push(t) : this._listeners = [t]
    }
    unsubscribe(t) {
        if (!this._listeners)
            return;
        const n = this._listeners.indexOf(t);
        n !== -1 && this._listeners.splice(n, 1)
    }
    static source() {
        let t;
        return {
            token: new Bi(function(o) {
                t = o
            }
            ),
            cancel: t
        }
    }
}
const Av = Bi;
function Iv(e) {
    return function(n) {
        return e.apply(null, n)
    }
}
function xv(e) {
    return B.isObject(e) && e.isAxiosError === !0
}
const ti = {
    Continue: 100,
    SwitchingProtocols: 101,
    Processing: 102,
    EarlyHints: 103,
    Ok: 200,
    Created: 201,
    Accepted: 202,
    NonAuthoritativeInformation: 203,
    NoContent: 204,
    ResetContent: 205,
    PartialContent: 206,
    MultiStatus: 207,
    AlreadyReported: 208,
    ImUsed: 226,
    MultipleChoices: 300,
    MovedPermanently: 301,
    Found: 302,
    SeeOther: 303,
    NotModified: 304,
    UseProxy: 305,
    Unused: 306,
    TemporaryRedirect: 307,
    PermanentRedirect: 308,
    BadRequest: 400,
    Unauthorized: 401,
    PaymentRequired: 402,
    Forbidden: 403,
    NotFound: 404,
    MethodNotAllowed: 405,
    NotAcceptable: 406,
    ProxyAuthenticationRequired: 407,
    RequestTimeout: 408,
    Conflict: 409,
    Gone: 410,
    LengthRequired: 411,
    PreconditionFailed: 412,
    PayloadTooLarge: 413,
    UriTooLong: 414,
    UnsupportedMediaType: 415,
    RangeNotSatisfiable: 416,
    ExpectationFailed: 417,
    ImATeapot: 418,
    MisdirectedRequest: 421,
    UnprocessableEntity: 422,
    Locked: 423,
    FailedDependency: 424,
    TooEarly: 425,
    UpgradeRequired: 426,
    PreconditionRequired: 428,
    TooManyRequests: 429,
    RequestHeaderFieldsTooLarge: 431,
    UnavailableForLegalReasons: 451,
    InternalServerError: 500,
    NotImplemented: 501,
    BadGateway: 502,
    ServiceUnavailable: 503,
    GatewayTimeout: 504,
    HttpVersionNotSupported: 505,
    VariantAlsoNegotiates: 506,
    InsufficientStorage: 507,
    LoopDetected: 508,
    NotExtended: 510,
    NetworkAuthenticationRequired: 511
};
Object.entries(ti).forEach( ([e,t]) => {
    ti[t] = e
}
);
const Mv = ti;
function hf(e) {
    const t = new mo(e)
      , n = ju(mo.prototype.request, t);
    return B.extend(n, mo.prototype, t, {
        allOwnKeys: !0
    }),
    B.extend(n, t, null, {
        allOwnKeys: !0
    }),
    n.create = function(o) {
        return hf(Fn(e, o))
    }
    ,
    n
}
const fe = hf(Mi);
fe.Axios = mo;
fe.CanceledError = _s;
fe.CancelToken = Av;
fe.isCancel = of;
fe.VERSION = df;
fe.toFormData = er;
fe.AxiosError = ve;
fe.Cancel = fe.CanceledError;
fe.all = function(t) {
    return Promise.all(t)
}
;
fe.spread = Iv;
fe.isAxiosError = xv;
fe.mergeConfig = Fn;
fe.AxiosHeaders = Nt;
fe.formToJSON = e => sf(B.isHTMLForm(e) ? new FormData(e) : e);
fe.getAdapter = ff.getAdapter;
fe.HttpStatusCode = Mv;
fe.default = fe;
function Dv(e) {
    const t = /\/\/.*$/gm;
    return e.replace(t, "")
}
function cs() {
    return navigator.userAgent.match(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i)
}
function Yt(e) {}
function *sr(e, t) {
    const n = Math.min(e.length, t);
    for (let s = 0; s < e.length; s += n)
        yield e.slice(s, s + n)
}
function pf(e) {
    return typeof e != "string" ? e : e.split(/\s+/).map(t => t.length > 25 ? t.slice(0, 25) + "…" : t).join(" ")
}
function _o(e) {
    return !1
}
function go(e, t) {
    return fetch(e + `?v=${window._DATA_VERSION}`, t)
}
const Bv = 20
  , Fv = 40
  , Fl = 3
  , Uv = 70
  , $n = "test"
  , qn = "test2"
  , tn = "card"
  , qt = "topic"
  , Un = "repeat"
  , wn = "challenge"
  , nn = "marathon"
  , Rt = {
    [$n]: 0,
    [qn]: 1,
    [tn]: 2,
    [qt]: 3,
    [Un]: 4,
    [wn]: 5,
    [nn]: 6
};
let vo = V(0);
function Vv(e) {
    return JSON.parse(JSON.stringify(e))
}
function Ul(e) {
    for (let t = 0; t < e.length; ++t)
        e[t].id = t + 1;
    return e
}
let bt;
async function Hv() {
    bt = {
        getQuestions(s) {
            return s === "en" ? this.enQuestions : this.ruQuestions
        }
    };
    const e = await go("data/data.json").then(s => s.json());
    bt.ruQuestions = Ul(e.questions);
    const t = await go("data/data.en.json").then(s => s.json());
    bt.enQuestions = Ul(t.questions);
    const n = await go("data/challenge.json").then(s => s.json());
    bt.challengeQuestions = n.questions,
    vo.value = bt.ruQuestions.length
}
function mf(e) {
    if (!bt)
        throw alert("Ошибка: дождитесь загрузки приложения."),
        new Error("App uninitialized.");
    switch (e == null ? void 0 : e.testType) {
    case $n:
    case qn:
        return jv(e, bt);
    case tn:
    case qt:
        return qv(e, bt);
    case Un:
        return Wv(e, bt);
    case wn:
        return Kv(e, bt);
    case nn:
        return Qv(e, bt);
    default:
        return bt
    }
}
function Fi(e, t) {
    let n = [...e]
      , s = [];
    t = Math.min(t, e.length);
    for (let o = n.length - 1; o > 0; o--) {
        const r = Math.floor(Math.random() * (o + 1));
        [n[o],n[r]] = [n[r], n[o]]
    }
    return s = n.slice(0, t),
    s
}
function jv(e, t) {
    const n = t.getQuestions(e.locale)
      , s = Fi(n, Bv);
    return Ks(s)
}
function qv(e, t) {
    const n = t.getQuestions(e.locale)
      , s = _f(e.card.questions)
      , o = [];
    for (let r of s)
        r < n.length && o.push(n[r]);
    return Ks(o)
}
async function Wv(e, t) {
    try {
        const s = (await fe.get("data/failed_questions/")).data.map(i => i.question_id)
          , r = t.getQuestions(e.locale).filter(i => s.some(a => a === i.id));
        return Ks(r)
    } catch (n) {
        throw console.log(n),
        "Can't start repeat test due to error."
    }
}
async function Kv(e, t) {
    const n = t.getQuestions(e.locale)
      , s = new Set(t.challengeQuestions)
      , o = n.filter(i => s.has(i.id))
      , r = Fi(o, Fv);
    return Ks(r)
}
async function Qv(e, t) {
    const n = t.getQuestions(e.locale);
    return Ks(n)
}
function Ks(e) {
    var t;
    e = Vv(e);
    for (const n of e)
        n.answers = Fi(n.questions, n.questions.length),
        n.answers = (t = n.answers) == null ? void 0 : t.filter(s => s.name),
        delete n.questions;
    return e.map(n => ht(n))
}
function _f(e) {
    const t = e.split(",");
    let n = [];
    return t.forEach(s => {
        if (s.includes("-")) {
            const [o,r] = s.split("-").map(Number);
            for (let i = o; i <= r; i++)
                n.push(i)
        } else
            n.push(Number(s))
    }
    ),
    n
}
function Gv(e, t) {
    const n = bt.getQuestions(t);
    for (const s of e) {
        const o = n.find(r => r.id === s.id);
        o && (s.title = o.title,
        s.explanation = o.explanation,
        s.imgSrc = o.imgSrc);
        for (const r of s.answers) {
            const i = o.questions.find(a => a.id === r.id);
            i && (r.name = i.name)
        }
    }
}
const Qs = jn("test", () => {
    let e = Fl;
    const t = V(null)
      , n = V(0)
      , s = V("test")
      , o = V([])
      , r = V(null)
      , i = G(h)
      , a = G(f)
      , l = G(m)
      , c = V()
      , u = V();
    function h() {
        return o.value.reduce( (g, E) => E.answered && E.correct ? g + 1 : g, 0)
    }
    function f() {
        return o.value.reduce( (g, E) => E.answered && !E.correct ? g + 1 : g, 0)
    }
    function m() {
        return o.value.reduce( (g, E) => E.answered ? g + 1 : g, 0)
    }
    async function v(g) {
        var E;
        n.value = ((E = g.card) == null ? void 0 : E.id) || 0,
        s.value = g.testType,
        r.value = null,
        o.value = await mf(g),
        e = g.threshold || Fl,
        _log(`test threshold: ${e}`)
    }
    function y() {
        const g = {}
          , E = a.value
          , T = l.value;
        switch (console.log(`Checking completion, test type: ${s.value}, failed: ${E}, answered: ${T}`),
        s.value) {
        case $n:
            E >= e ? g.success = !1 : T === o.value.length && (g.success = !0);
            break;
        case qn:
        case tn:
        case qt:
        case Un:
        case wn:
        case nn:
            T === o.value.length && (g.success = E === 0 || E < e);
            break
        }
        if (_log(`Completion checked, result: ${JSON.stringify(g)}`),
        g.hasOwnProperty("success"))
            return _log(`Success '${g.success}': ${E}/${e}`),
            r.value = g,
            c.value(this),
            g
    }
    function S() {
        const g = a.value + (o.value.length - l.value)
          , E = {
            success: g === 0 || g < e
        };
        return r.value = E,
        c.value(this),
        E
    }
    function b(g) {
        u.value = g
    }
    return {
        locale: t,
        id: n,
        type: s,
        questions: o,
        completed: r,
        initialize: v,
        correctQuestions: i,
        failedQuestions: a,
        answeredQuestions: l,
        checkCompletion: y,
        completeByTimeout: S,
        saveTestResults: c,
        newAchievements: u,
        setNewAchievements: b
    }
}
)
  , Yv = 25
  , Gs = jn("timer", () => {
    const e = V();
    let t = V();
    const n = V(Yv * 60 * 1e3)
      , s = V(!1);
    let o = !1;
    function r(m) {
        const v = new Date(m)
          , y = v.getSeconds() < 10 ? `0${v.getSeconds()}` : v.getSeconds()
          , S = v.getMinutes() < 10 ? `0${v.getMinutes()}` : v.getMinutes()
          , b = v.getUTCHours();
        return b ? `${b}:${S}:${y}` : `${S}:${y}`
    }
    const i = G( () => s.value ? r(t.value) : "")
      , a = G( () => r(o ? t.value : n.value - t.value));
    function l(m) {
        h(),
        o = m,
        s.value = !0,
        t.value = m ? 0 : n.value;
        const v = m ? u : c;
        e.value = setInterval(v, 1e3)
    }
    function c() {
        t.value -= 1e3,
        t.value <= 0 && h()
    }
    function u() {
        t.value += 1e3
    }
    function h() {
        clearInterval(e.value),
        s.value = !1
    }
    function f(m) {
        m && (n.value = m * 60 * 1e3)
    }
    return {
        isActive: s,
        time: i,
        elapsed: a,
        defaultTime: n,
        setDefaultTime: f,
        start: l,
        stop: h
    }
}
)
  , Ve = jn("config", () => {
    const e = V("")
      , t = ht({})
      , n = V([])
      , s = V([])
      , o = cs()
      , r = !1;
    async function i(c) {
        let u = await fetch("config.json", {
            cache: "no-store"
        }).then(h => h.text());
        u = Dv(u),
        u = JSON.parse(u),
        Object.assign(t, u),
        window._DATA_VERSION = u.dataVersion,
        c !== "settings" && (n.value = await a("cards"),
        s.value = await a("topics"))
    }
    async function a(c) {
        let u = [];
        const h = `data/${c}.json`;
        try {
            u = await go(h).then(m => m.json());
            let f = 0;
            for (const m of u)
                m.id = f++
        } catch {
            alert(`Ошибка в файле билетов ${h}.`)
        }
        return u
    }
    function l() {
        return Object.keys(t).length === 0
    }
    return {
        settings: t,
        cards: n,
        topics: s,
        origin: e,
        load: i,
        isMobile: o,
        isDebug: r,
        isLoaded: l
    }
}
)
  , Pe = (e, t) => {
    const n = e.__vccOpts || e;
    for (const [s,o] of t)
        n[s] = o;
    return n
}
  , Jv = {
    class: "language-switcher"
}
  , Xv = ["title"]
  , zv = ["src"]
  , Zv = {
    key: 0,
    class: "dropdown-overlay"
}
  , eb = ["onClick"]
  , tb = ["src", "alt"]
  , nb = {
    __name: "LanguageSelector",
    props: {
        initialLanguage: {
            type: String,
            default: "ru"
        },
        bgWhite: {
            type: Boolean,
            default: !1
        }
    },
    emits: ["language-changed"],
    setup(e, {emit: t}) {
        const n = e
          , s = t
          , {t: o} = Le()
          , r = V(!1)
          , i = V(n.initialLanguage)
          , a = V(null)
          , l = V({})
          , c = [{
            code: "ru",
            name: o("russian"),
            flag: "images/flag-ru.svg"
        }, {
            code: "en",
            name: o("english"),
            flag: "images/flag-kg.svg"
        }]
          , u = G( () => {
            var y;
            return (y = c.find(S => S.code === i.value)) == null ? void 0 : y.flag
        }
        )
          , h = () => {
            if (a.value) {
                const y = a.value.getBoundingClientRect();
                l.value = {
                    position: "absolute",
                    top: `${y.bottom + window.scrollY}px`,
                    left: `${y.left + window.scrollX}px`,
                    minWidth: `${y.width}px`
                }
            }
        }
          , f = () => {
            r.value = !r.value,
            r.value && h()
        }
          , m = y => {
            i.value = y.code,
            r.value = !1,
            s("language-changed", y.code)
        }
          , v = y => {
            var S;
            !((S = a.value) != null && S.contains(y.target)) && r.value && (r.value = !1)
        }
        ;
        return Hn( () => {
            document.addEventListener("click", v),
            window.addEventListener("scroll", h),
            window.addEventListener("resize", h)
        }
        ),
        ds( () => {
            document.removeEventListener("click", v),
            window.removeEventListener("scroll", h),
            window.removeEventListener("resize", h)
        }
        ),
        (y, S) => (k(),
        A("div", Jv, [_("button", {
            class: "language-button",
            onClick: f,
            ref_key: "triggerButton",
            ref: a,
            title: y.$t("language")
        }, [_("img", {
            src: u.value,
            class: "flag-icon"
        }, null, 8, zv), _("span", {
            class: ie(["dropdown-arrow", {
                open: r.value
            }])
        }, "▼", 2)], 8, Xv), (k(),
        Te(Qd, {
            to: "body"
        }, [r.value ? (k(),
        A("div", Zv, [_("div", {
            class: "language-dropdown",
            style: Vn(l.value)
        }, [(k(),
        A(Ee, null, st(c, b => _("button", {
            key: b.code,
            class: "language-option",
            onClick: g => m(b)
        }, [_("img", {
            src: b.flag,
            alt: b.name,
            class: "flag-icon"
        }, null, 8, tb), _("span", null, $(b.name), 1)], 8, eb)), 64))], 4)])) : W("", !0)]))]))
    }
}
  , gf = Pe(nb, [["__scopeId", "data-v-424e6e4f"]])
  , sb = {
    title: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Жол кыймылынын эрежелери боюнча экзаменациялык билеттин шаблону"
        }
    },
    language: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Тил"
        }
    },
    closeBtn: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Жабуу"
        }
    },
    answerBtn: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Жооп берүү"
        }
    },
    forwardBtn: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Кийинки"
        }
    },
    explanation: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Түшүндүрмө"
        }
    },
    prev: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Алдынкы"
        }
    },
    next: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Кийинки"
        }
    },
    successTest: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "СИЗ ТЕСТТИ ИЙГИЛИКТYY ТАПШЫРДЫНЫЗ!"
        }
    },
    failedTest: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "СИЗ ТЕСТТИ ТАПШЫРА АЛГАН ЖОКСУЗ!"
        }
    },
    testCount: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Жалпы сурооло"
        }
    },
    failedCount: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Туура эмес жооптор"
        }
    },
    successCount: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Туура жооптор"
        }
    },
    time: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Сиз кетирген убакыт"
        }
    },
    time_needed: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Убакыт"
        }
    },
    time_neededN: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "25"
        }
    },
    showResult: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Тестти көрүү"
        }
    },
    title_main1_test: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Кыргыз Республикасынын Жол кыймылынын эрежелери боюнча теориялык сынак"
        }
    },
    title_main1_cards: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Кыргыз Республикасынын Жол кыймылынын эрежелери боюнча сынактык билеттери"
        }
    },
    title_main1_topics: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Кыргыз Республикасынын Жол кыймылынын эрежелери боюнча тематикалык билеттери"
        }
    },
    title_main1_challenge: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Кыргыз Республикасынын Жол кыймылынын эрежелери боюнча эң кыйын суроолор"
        }
    },
    title_main1_marathon: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Кыргыз Республикасынын Жол кыймылынын эрежелери боюнча  марафон"
        }
    },
    title_main1b: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "_____________________________________________"
        }
    },
    title_school1: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: `Главная Дорога
"Унаамектеби"`
        }
    },
    title_school: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: `Унаамектеби
`
        }
    },
    pass_bar: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "18"
        }
    },
    min: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "мин"
        }
    },
    testCount_num: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "20"
        }
    },
    pass_bar_s: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Өтүү упайы"
        }
    },
    button_start: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Тестти баштоо"
        }
    },
    russian: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Русский"
        }
    },
    english: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Кыргызча"
        }
    },
    cardsTitle: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Сынак билеттери"
        }
    },
    topicsTitle: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Тема"
        }
    },
    topic: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "ТЕМА"
        }
    },
    modeTest: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Тест"
        }
    },
    modeExam: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Экзамен"
        }
    },
    modeRepeat: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Менин каталарым"
        }
    },
    modeCards: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Билеттер"
        }
    },
    modeTopics: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Темалар боюнча"
        }
    },
    login: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Кирүү"
        }
    },
    password: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Пароль"
        }
    },
    password_required: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Пароль*"
        }
    },
    password_confirmation: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Паролду тастыктоо"
        }
    },
    password_confirmation_required: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Паролду тастыктоо"
        }
    },
    new_user: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Жаңы колдонуучу"
        }
    },
    new_school: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Жаңы унаамектеби"
        }
    },
    real_name: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Фамилия Аты*"
        }
    },
    school_name: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Аталышы*"
        }
    },
    phone_number: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Телефон*"
        }
    },
    driving_school: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Унаамектеби"
        }
    },
    to_register: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Катталуу"
        }
    },
    register: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Катталуу"
        }
    },
    registration: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Каттоо"
        }
    },
    school_owner_prompt: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: `Эгерде сиз автомектептин өкүлү болсоңуз, жеке кабинетиңизге кирүү үчүн
 биз менен байланышыңыз.`
        }
    },
    school_owner_phone_to: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "+996 755 30-00-30"
        }
    },
    school_owner_telegram_to: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Сиз биз менен Telegram аркылуу байланышсаңыз болот"
        }
    },
    forgot_password: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Паролду унуттуңузбу?"
        }
    },
    login_with_google: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Google менен кирүү"
        }
    },
    incorrect_login_or_password: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Логин же парол туура эмес."
        }
    },
    exit: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Чыгуу"
        }
    },
    user_already_exists: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Бул e-mail дареги менен колдонуучу мурундан катталган."
        }
    },
    please_fill_required_fields: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Сураныч, бардык милдеттүү талааларды толтуруңуз."
        }
    },
    please_enter_correct_email: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Сураныч, туура e-mail дарегин киргизиңиз."
        }
    },
    passwords_do_not_match: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Парол жана тастыктоо туура келбейт жатат."
        }
    },
    please_specify_lengthy_password: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Сураныч, 6 символ же андан узун пароль колдонуңуз"
        }
    },
    registration_successful: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Каттоону тастыктоо"
        }
    },
    use_your_credentials_to_login: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Каттоону тастыктагандан кийин, аккаунтуңузга кирүү үчүн логин жана паролуңузду колдонуңуз."
        }
    },
    password_reset: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Паролду калыбына келтирүү"
        }
    },
    do_password_reset: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Паролду калыбына келтирүү"
        }
    },
    wait_password_reset_email: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "%EMAIL% электрондук почтаңызга паролду калыбына келтирүү үчүн шилтеме менен кат жөнөтүлдү."
        }
    },
    new_password: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Жаңы пароль*"
        }
    },
    save_password: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Сактоо"
        }
    },
    password_reset_error: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Кирүү калыбына келтирүүдө каталык."
        }
    },
    change_password: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Паролду алмаштыруу"
        }
    },
    changing_password: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Паролду алмаштыруу"
        }
    },
    please_wait: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Сураныч, күтө туруңуз..."
        }
    },
    social_authorization_error: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Авторизация катасы. Логин жана пароль менен кирип көрүңүз."
        }
    },
    personal_page: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Профиль"
        }
    },
    driving_school_unselected: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Унаамектеби (тандалган эмес)"
        }
    },
    testing: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Тестирлөө"
        }
    },
    change_userpic: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Колдонуучунун сүрөтүн жүктөө"
        }
    },
    change_username: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Атты-жөнүнүздү алмаштыруу"
        }
    },
    choose_school: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Унаамектебиңизди тандаңыз"
        }
    },
    rating_position_title: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Рейтингдеги позиция"
        }
    },
    rating_points_title: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Сиздин упайларыңыз"
        }
    },
    rating_points: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Упайлар"
        }
    },
    no_data: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Маалымат жок"
        }
    },
    enter_real_name: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Фамилия же аты-жөнүнүздү киргизиңиз"
        }
    },
    enter_name_or_school: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Фамилия, аты-жөнүнүздү же унаамектебиңизди аталышыны киргизиңиз"
        }
    },
    exam_readiness: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Экзамен тапшырууга даярдык"
        }
    },
    solved_questions: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Чечилген суроолор"
        }
    },
    solved_cards: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Өткөн билеттер"
        }
    },
    solved_topics: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Катасыз темалар"
        }
    },
    user_rating_title: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Колдонуучулардын рейтинги"
        }
    },
    rating_full_name: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Аты-жөнү"
        }
    },
    student_name: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Курсанттын аты"
        }
    },
    test_mode: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Режим"
        }
    },
    test_result: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Жыйынтык"
        }
    },
    test_time: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Убакыт"
        }
    },
    user_recent_test_results_title: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Унаамектебинин курсанттарынын тестирлөө жыйынтыгы"
        }
    },
    result_type_card: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Билет"
        }
    },
    result_type_topic: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Тема"
        }
    },
    stats: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Статистика"
        }
    },
    my_mistakes: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Менин каталарым"
        }
    },
    rating: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Ранг"
        }
    },
    your_rating: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Ранг"
        }
    },
    your_student_number: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Сиздин окуучулары-ңыздын саны"
        }
    },
    back: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Артка"
        }
    },
    settings: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Настройкалар"
        }
    },
    reset_test_results: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Тесттин натыйжаларын баштапкы абалга келтирүү"
        }
    },
    remove_account: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Аккаунтту өчүрүү"
        }
    },
    confirm_results_reset: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Бардык тестирлөө натыйжаларыңыз баштапкы абалга келтирилет. Бул аракеттин жыйынтыгы артка кайтарылбайт. Чын эле уланткыңыз келеби?"
        }
    },
    confirm_remove_account: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Сиздин аккаунтуңуз өчүрүлөт. Бул аракеттин натыйжасын кайтаруу мүмкүн эмес. Чындыгында улантқыңыз келеби?"
        }
    },
    topics: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Темалар"
        }
    },
    you_have_no_failed_questions: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Сизде азырынча ката жок"
        }
    },
    challenging_questions: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Эң кыйыны"
        }
    },
    activity_days: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Активдүүлүк (күндөр)"
        }
    },
    status_active: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Активдүү"
        }
    },
    days: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "кун"
        }
    },
    status_inactive: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Активдүү эмес"
        }
    },
    use_your_new_password: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: `Сиз паролуңузду ийгиликтүү калыбына келтирдиңиз.
Жеке аккаунтуңузга кирүү үчүн жаңы паролду колдонуңуз.`
        }
    },
    please_close_this_page: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Сиз ийгиликтүү кирдиңиз. Сураныч, бул баракты жабыңыз."
        }
    },
    wait_registration_email: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "%EMAIL% электрондук почта дарегиңизге каттоо процессин тастыктоо үчүн код жөнөтүлдү."
        }
    },
    check_the_spam_folder: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Эгер кат бир нече мүнөттүн ичинде келбесе, даректин тууралыгын текшерип же СПАМ папкасын караңыз."
        }
    },
    use_obtained_code_to_login: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Электрондук почтаңызды тастыктоо үчүн алынган кодду төмөндө киргизиңиз."
        }
    },
    verify_code: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Тастыктоо"
        }
    },
    network_error: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Байланыш катасы."
        }
    },
    invalid_email_code: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Каттоо коду туура эмес."
        }
    },
    achievement_weekly: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Активдүүлүк үчүн (7+ күн)."
        }
    },
    achievement_weekly_desc: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Активдүүлүк үчүн (7+ күн)"
        }
    },
    achievements_title: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Сыйлыктар"
        }
    },
    achievement_beginner: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Баштоочу"
        }
    },
    achievement_beginner_desc: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Бир билет өтүлдү"
        }
    },
    achievement_amateur: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Билет сүйүүчү"
        }
    },
    achievement_amateur_desc: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "10 билет өтүлдү"
        }
    },
    achievement_master: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Билеттердин устасы"
        }
    },
    achievement_master_desc: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Бардык билеттер өтүлдү"
        }
    },
    achievement_expert: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Тематикалык эксперт"
        }
    },
    achievement_expert_desc: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Бардык темалар өтүлдү"
        }
    },
    achievement_specialist: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Специалист"
        }
    },
    achievement_specialist_desc: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Бардык темалар жана билеттер өтүлдү"
        }
    },
    achievement_connoisseur: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Кыйын суроолордун билгири"
        }
    },
    achievement_connoisseur_desc: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: '"Эң кыйын суроолор" Бөлүмү өтүлдү'
        }
    },
    achievement_profi: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Сынактын Профессионалы"
        }
    },
    achievement_profi_desc: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Катары 10 жолу экзаменден катасыз өтүлдү"
        }
    },
    achievement_hero: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Марафон баатыры"
        }
    },
    achievement_hero_desc: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: '"Марафон" Бөлүмү өтүлдү'
        }
    },
    user_congratulation: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Куттуктайбыз!"
        }
    },
    new_achievement: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Сиз буга жеттиңиз!"
        }
    },
    new_rank: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Сиз жаңы ранга жеттиңиз!"
        }
    },
    award: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Сыйлык:"
        }
    },
    its_yours_now: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Эми сиздики!"
        }
    },
    unanswered_questions_notice: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "<span style='color: red'>Көңүл буруңуз!</span> Сиз суроону өткөрүп жибердиңиз"
        }
    },
    page_title_test: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Тест"
        }
    },
    page_title_login: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Логин"
        }
    },
    page_title_me: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Жеке кабинет"
        }
    },
    page_title_register: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Каттоо"
        }
    },
    page_title_rating: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Колдонуучулардын рейтинги"
        }
    },
    page_title_stats: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Статистика"
        }
    },
    page_title_mistakes: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Менин каталарым"
        }
    },
    page_title_achievements: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Сыйлыктар"
        }
    },
    delete_userpic: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Колдонуучунун сүрөтүн жок кылуу"
        }
    },
    marathon: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Марафон"
        }
    },
    marathon_title: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: `"М А Р А Ф О Н"
Бардык суроолорго үзгүлтүксүз тартипте жооп бергенге аракет кылыңыз`
        }
    }
}
  , ob = {
    title: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Шаблон для экзаменационных билетов ПДД"
        }
    },
    language: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Язык"
        }
    },
    closeBtn: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Закрыть"
        }
    },
    answerBtn: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Ответить"
        }
    },
    forwardBtn: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Далее"
        }
    },
    explanation: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Пояснение"
        }
    },
    prev: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Предыдущий"
        }
    },
    next: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Следующий"
        }
    },
    successTest: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "ВЫ УСПЕШНО СДАЛИ ТЕСТИРОВАНИЕ!"
        }
    },
    failedTest: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "ВЫ НЕ СДАЛИ ТЕСТИРОВАНИЕ!"
        }
    },
    testCount: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Всего вопросов"
        }
    },
    failedCount: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Неправильных ответов"
        }
    },
    successCount: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Правильных ответов"
        }
    },
    time: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Потрачено времени"
        }
    },
    time_needed: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Время"
        }
    },
    time_neededN: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "25"
        }
    },
    showResult: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Просмотр теста"
        }
    },
    title_main1_test: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Теоретический экзамен"
        }
    },
    title_main1_cards: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Экзаменационные билеты"
        }
    },
    title_main1_topics: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Тематические билеты"
        }
    },
    title_main1_challenge: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Самые трудные вопросы экзамена"
        }
    },
    title_main1_marathon: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Марафон"
        }
    },
    title_main1b: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "по Правилам Дорожного Движения Кыргызской Республики"
        }
    },
    title_school1: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: `Автошкола
"Главная Дорога"`
        }
    },
    title_school: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: `Автошкола
`
        }
    },
    pass_bar: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "18"
        }
    },
    min: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "мин"
        }
    },
    testCount_num: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "20"
        }
    },
    pass_bar_s: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Проходной балл"
        }
    },
    button_start: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Начать тестирование"
        }
    },
    russian: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Русский"
        }
    },
    english: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Кыргызча"
        }
    },
    cardsTitle: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Экзаменационые билеты"
        }
    },
    topicsTitle: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Темы"
        }
    },
    topic: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "ТЕМА"
        }
    },
    modeTest: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Тест"
        }
    },
    modeExam: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Экзамен"
        }
    },
    modeRepeat: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Мои ошибки"
        }
    },
    modeCards: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Билеты"
        }
    },
    modeTopics: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "По темам"
        }
    },
    login: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Вход"
        }
    },
    password: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Пароль"
        }
    },
    password_required: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Пароль*"
        }
    },
    password_confirmation: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Подтверждение пароля"
        }
    },
    password_confirmation_required: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Подтверждение пароля*"
        }
    },
    new_user: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Новый пользователь"
        }
    },
    new_school: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Новая автошкола"
        }
    },
    real_name: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Фамилия Имя*"
        }
    },
    school_name: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Название*"
        }
    },
    phone_number: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Телефон*"
        }
    },
    email_or_phone: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "E-mail или телефон"
        }
    },
    driving_school: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Автошкола"
        }
    },
    to_register: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Зарегистрироваться"
        }
    },
    register: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Зарегистрировать"
        }
    },
    registration: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Регистрация"
        }
    },
    school_owner_prompt: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: `Если вы являетесь представителем автошколы, пожалуйста свяжитесь с нами
 для получения доступа к вашему личному кабинету.`
        }
    },
    school_owner_phone_to: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "+996 755 30-00-30"
        }
    },
    school_owner_telegram_to: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Вы можете связаться с нами через Telegram"
        }
    },
    please_enter_valid_phone_number: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Пожалуйста, введите корректный номер телефона."
        }
    },
    error_phone_already_exists: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Пользователь с таким номером телефона уже зарегистрирован."
        }
    },
    forgot_password: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Забыли пароль?"
        }
    },
    login_with_google: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Вход с Google"
        }
    },
    incorrect_login_or_password: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Неверные логин или пароль."
        }
    },
    exit: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Выход"
        }
    },
    user_already_exists: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Пользователь с таким e-mail уже зарегистрирован."
        }
    },
    please_fill_required_fields: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Пожалуйста, заполните все обязательные поля."
        }
    },
    please_enter_correct_email: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Пожалуйста, введите корректный e-mail."
        }
    },
    passwords_do_not_match: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Пароль и подтверждение не совпадают."
        }
    },
    please_specify_lengthy_password: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Пожалуйста, используйте пароль длиной 6 символов или более."
        }
    },
    registration_successful: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Подтверждение регистрации"
        }
    },
    use_your_credentials_to_login: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "После подтверждения регистрации, используйте ваши логин и пароль для входа в учетную запись."
        }
    },
    password_reset: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Сброс пароля"
        }
    },
    do_password_reset: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Сбросить пароль"
        }
    },
    wait_password_reset_email: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "На почтовый ящик %EMAIL% было выслано письмо со ссылкой для сброса пароля."
        }
    },
    new_password: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Новый пароль*"
        }
    },
    save_password: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Сохранить"
        }
    },
    password_reset_error: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Ошибка восстановления доступа."
        }
    },
    change_password: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Сменить пароль"
        }
    },
    changing_password: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Смена пароля"
        }
    },
    please_wait: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Пожалуйста, подождите..."
        }
    },
    social_authorization_error: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Ошибка авторизации. Попробуйте войти с логином и паролем."
        }
    },
    personal_page: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Профиль"
        }
    },
    driving_school_unselected: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Автошкола (не выбрано)"
        }
    },
    testing: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Тестирование"
        }
    },
    change_userpic: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Загрузить изображение пользователя"
        }
    },
    change_username: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Изменить имя"
        }
    },
    choose_school: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Выбрать автошколу"
        }
    },
    rating_position_title: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Позиция в рейтинге"
        }
    },
    rating_points_title: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Ваши балы"
        }
    },
    rating_points: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Баллы"
        }
    },
    no_data: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Нет данных"
        }
    },
    enter_real_name: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Введите фамилию или имя"
        }
    },
    enter_name_or_school: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Введите фамилию, имя или название автошколы"
        }
    },
    exam_readiness: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Готовность к сдаче экзамена"
        }
    },
    solved_questions: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Решенные вопросы"
        }
    },
    solved_cards: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Сданные билеты"
        }
    },
    solved_topics: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Темы без ошибок"
        }
    },
    user_rating_title: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Рейтинг пользователей"
        }
    },
    rating_full_name: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "ФИО"
        }
    },
    student_name: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Имя курсанта"
        }
    },
    test_mode: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Режим"
        }
    },
    test_result: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Результат"
        }
    },
    test_time: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Время"
        }
    },
    user_recent_test_results_title: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Результаты тестирования курсантов автошкол"
        }
    },
    result_type_card: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Билет"
        }
    },
    result_type_topic: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Тема"
        }
    },
    stats: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Статистика"
        }
    },
    my_mistakes: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Мои ошибки"
        }
    },
    rating: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Ранг"
        }
    },
    your_rating: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Ваш ранг"
        }
    },
    your_student_number: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Количество ваших учеников"
        }
    },
    back: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Назад"
        }
    },
    settings: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Настройки"
        }
    },
    reset_test_results: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Сбросить результаты тестирования"
        }
    },
    remove_account: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Удалить аккаунт"
        }
    },
    confirm_results_reset: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Все ваши результаты тестирования будут сброшены. Результат этого действия невозможно отменить. Вы действительно хотите продолжить?"
        }
    },
    confirm_remove_account: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Ваш аккаунт будет удален. Результат этого действия невозможно отменить. Вы действительно хотите продолжить?"
        }
    },
    topics: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Темы"
        }
    },
    you_have_no_failed_questions: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "У вас пока нет ошибок"
        }
    },
    challenging_questions: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Самые трудные"
        }
    },
    activity_days: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Активность (дней)"
        }
    },
    status_active: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Активен"
        }
    },
    days: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "д."
        }
    },
    status_inactive: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Не активен"
        }
    },
    use_your_new_password: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: `Вы успешно сбросили пароль.
Используйте ваш новый пароль для входа в личный кабинет.`
        }
    },
    please_close_this_page: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Вы успешно авторизованы. Пожалуйста, закройте эту страницу."
        }
    },
    wait_registration_email: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "На почтовый ящик %EMAIL% было выслано письмо с кодом для подтверждения регистрации."
        }
    },
    check_the_spam_folder: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Если письмо не пришло в течении нескольких минут, проверьте правильность адреса или содержимое папки СПАМ."
        }
    },
    use_obtained_code_to_login: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Введите полученный код ниже, чтобы подтвердить ваш e-mail."
        }
    },
    verify_code: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Подтвердить"
        }
    },
    network_error: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Ошибка соединения."
        }
    },
    invalid_email_code: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Неверный код регистрации"
        }
    },
    achievement_weekly: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "За активность (7+ дней)"
        }
    },
    achievement_weekly_desc: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "За активность (7+ дней)"
        }
    },
    achievements_title: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Достижения"
        }
    },
    achievement_beginner: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Начинающий"
        }
    },
    achievement_beginner_desc: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Решен один билет"
        }
    },
    achievement_amateur: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Любитель билетов"
        }
    },
    achievement_amateur_desc: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Прорешено 10 билетов"
        }
    },
    achievement_master: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Мастер билетов"
        }
    },
    achievement_master_desc: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Прорешены все билеты"
        }
    },
    achievement_expert: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Тематический эксперт"
        }
    },
    achievement_expert_desc: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Пройдены все темы"
        }
    },
    achievement_specialist: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Специалист"
        }
    },
    achievement_specialist_desc: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Пройдены все темы и билеты"
        }
    },
    achievement_connoisseur: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Знаток трудных вопросов"
        }
    },
    achievement_connoisseur_desc: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: 'Пройден раздел "Самые трудные вопросы"'
        }
    },
    achievement_profi: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Экзаменационный профи"
        }
    },
    achievement_profi_desc: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "10 раз подряд сдан экзамен без ошибок"
        }
    },
    achievement_hero: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Герой марафона"
        }
    },
    achievement_hero_desc: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: 'Пройден раздел "Марафон"'
        }
    },
    user_congratulation: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Поздравляем Вас!"
        }
    },
    new_achievement: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Вы сделали это!"
        }
    },
    new_rank: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Вы достигли нового ранга!"
        }
    },
    award: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Награда:"
        }
    },
    its_yours_now: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Теперь ваша!"
        }
    },
    unanswered_questions_notice: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "<span style='color: red'>ВНИМАНИЕ!</span> Пропущен вопрос"
        }
    },
    page_title_test: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Тест"
        }
    },
    page_title_login: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Логин"
        }
    },
    page_title_me: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Личный кабинет"
        }
    },
    page_title_register: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Регистрация"
        }
    },
    page_title_rating: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Рейтинг пользователей"
        }
    },
    page_title_stats: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Статистика"
        }
    },
    page_title_mistakes: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Мои ошибки"
        }
    },
    page_title_achievements: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Достижения"
        }
    },
    delete_userpic: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Удалить изображение пользователя"
        }
    },
    school_registration_failed: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Ошибка регистрации школы. Проверьте, зарегистрирован ли уже указанный e-mail."
        }
    },
    staff_only_page: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Эта страница доступна только сотрудникам."
        }
    },
    account_details: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Данные учётной записи"
        }
    },
    contact_person_details: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Контактные данные"
        }
    },
    contact_name: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Имя"
        }
    },
    contact_surname: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Фамилия"
        }
    },
    contact_patronymic: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Отчество"
        }
    },
    contact_phone: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Телефон"
        }
    },
    license_details: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Данные лицензии"
        }
    },
    license_number: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Номер лицензии"
        }
    },
    license_issue_date: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Дата выдачи лицензии"
        }
    },
    license_valid_until: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Лицензия действительна до"
        }
    },
    marathon: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Марафон"
        }
    },
    marathon_title: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: `"М А Р А Ф О Н"
Попробуйте ответить на все вопросы по порядку не прерываясь`
        }
    },
    please_enter_valid_email_or_phone: {
        t: 0,
        b: {
            t: 2,
            i: [{
                t: 3
            }],
            s: "Пожалуйста, введите корректные e-mail или телефон"
        }
    }
}
  , vf = "driver_exam_app_language"
  , ni = z_({
    locale: "ru",
    fallbackLocale: "en",
    legacy: !1,
    globalInjection: !0,
    allowComposition: !0,
    messages: {
        en: sb,
        ru: ob
    },
    compilationOptions: {
        allowHtml: !0
    }
});
function Ao(e) {
    localStorage.setItem(vf, e)
}
function Ui() {
    return localStorage.getItem(vf)
}
const rb = {
    class: "header"
}
  , ib = {
    key: 0,
    class: "header-time"
}
  , ab = {
    key: 1,
    class: "language-container"
}
  , lb = {
    class: "language-title"
}
  , cb = ["value"]
  , ub = {
    value: "ru"
}
  , fb = {
    value: "en"
}
  , db = {
    class: "header-close-btn-container"
}
  , hb = {
    __name: "PageHeaderTest",
    setup(e) {
        const {locale: t} = Le()
          , n = Je()
          , s = lt()
          , o = Qs()
          , r = Gs()
          , i = G( () => s.name === "testQuestion" && o.completed)
          , a = G( () => s.fullPath.includes("/question/"))
          , l = Ui() || "ru"
          , c = ["rating", "user_results"]
          , u = G( () => c.some(v => {
            var y;
            return (y = s.name) == null ? void 0 : y.startsWith(v)
        }
        ));
        function h(v) {
            t.value = v.target.value,
            Ao(t.value),
            Gv(o.questions, t.value)
        }
        function f() {
            n.replace({
                path: "/result"
            })
        }
        function m(v) {
            t.value = v,
            Ao(t.value)
        }
        return (v, y) => (k(),
        A("header", rb, [a.value ? (k(),
        A("span", ib, $(x(r).time), 1)) : W("", !0), _("div", {
            class: ie(["language", {
                completed: !!x(o).completed
            }])
        }, [u.value ? (k(),
        Te(gf, {
            key: 0,
            "initial-language": x(l),
            onLanguageChanged: m
        }, null, 8, ["initial-language"])) : (k(),
        A("div", ab, [_("span", lb, $(v.$t("language")), 1), _("select", {
            class: ie(["language-value", {
                language_value_ru: x(t) === "ru",
                language_value_en: x(t) === "en"
            }]),
            onChange: y[0] || (y[0] = S => h(S)),
            value: x(t)
        }, [_("option", ub, $(v.$t("russian")), 1), _("option", fb, $(v.$t("english")), 1)], 42, cb)]))], 2), _("div", db, [i.value ? (k(),
        A("button", {
            key: 0,
            onClick: y[1] || (y[1] = S => f()),
            class: "header-close-btn"
        }, $(v.$t("closeBtn")), 1)) : W("", !0)])]))
    }
}
  , pb = Pe(hb, [["__scopeId", "data-v-4a60abab"]])
  , mb = "" + new URL("../images/back.png",import.meta.url).href
  , _b = "" + new URL("../images/gear.svg",import.meta.url).href
  , gb = "" + new URL("../images/signout.png",import.meta.url).href;
function vb() {
    const e = V([])
      , t = G(l)
      , n = G(c)
      , s = G(u)
      , {locale: o} = Le()
      , r = Ve()
      , i = V([]);
    async function a(f) {
        try {
            const m = await fe.get(`data/test_results/${f ? f + "/" : ""}`);
            m.data && (e.value = m.data)
        } catch (m) {
            console.error(m)
        }
    }
    function l() {
        const f = e.value.filter(m => m.test_type === Rt[qn] || m.test_type === Rt[$n]);
        return f.sort( (m, v) => new Date(v.timestamp) - new Date(m.timestamp)),
        f == null ? void 0 : f[0]
    }
    function c() {
        const f = Rt[tn]
          , m = e.value.filter(v => v.test_type === f);
        for (const v of m) {
            const y = r.cards.find(S => S.id === v.test_id);
            v.title = (y == null ? void 0 : y.name[o.value]) || ""
        }
        return m
    }
    function u() {
        const f = Rt[qt]
          , m = e.value.filter(v => v.test_type === f);
        for (const v of m) {
            const y = r.topics.find(S => S.id === v.test_id);
            v.title = (y == null ? void 0 : y.name[o.value]) || ""
        }
        return m
    }
    async function h(f) {
        try {
            const m = await fe.get(`data/failed_questions/${f ? f + "/" : ""}`);
            m.data && (i.value = m.data)
        } catch (m) {
            console.error(m)
        }
    }
    return {
        loadTestResults: a,
        loadFailedQuestions: h,
        examResults: t,
        cardResults: n,
        topicResults: s,
        failedQuestions: i
    }
}
function bf() {
    return vb()
}
const ct = jn("user", () => {
    const e = ht({})
      , t = G( () => !!e.id)
      , n = V(!1)
      , s = bf()
      , o = V([]);
    async function r(l) {
        let c = !1;
        try {
            const u = await fe.get("user/");
            Object.assign(e, u.data),
            c = !0
        } catch (u) {
            i(),
            console.error(u)
        }
        return c && !l && (e.is_school ? await a() : (await s.loadTestResults(),
        await s.loadFailedQuestions())),
        n.value = c,
        c
    }
    function i() {
        for (const l of Object.keys(e))
            e[l] = null;
        o.value = []
    }
    async function a() {
        try {
            const l = await fe.get("data/my_school_users/");
            l.data && (o.value = l.data)
        } catch (l) {
            console.error(l)
        }
    }
    return {
        data: e,
        initialized: n,
        logged_in: t,
        load: r,
        reset: i,
        students: o,
        ...s
    }
}
)
  , Vi = e => (pt("data-v-f1c8640b"),
e = e(),
mt(),
e)
  , bb = {
    class: "user-header"
}
  , yb = Vi( () => _("img", {
    src: mb
}, null, -1))
  , wb = {
    class: "language-switch"
}
  , Eb = {
    class: "logout-buttons"
}
  , Sb = {
    key: 0,
    class: "header-auth-container"
}
  , Tb = {
    key: 1,
    class: "header-auth-container"
}
  , Cb = Vi( () => _("img", {
    src: _b
}, null, -1))
  , kb = ["title"]
  , $b = Vi( () => _("img", {
    class: "signout-img",
    src: gb
}, null, -1))
  , Pb = [$b]
  , Rb = {
    __name: "PageHeaderUser",
    setup(e) {
        const {t, locale: n} = Le()
          , s = Je()
          , o = lt()
          , r = Ve()
          , i = ct()
          , a = Ui() || "ru"
          , l = ["testQuestion", "topics", "cards", "register", "register_school", "google_login", "settings", "me"]
          , c = G( () => r.isDebug && i.initialized && !l.some(g => g === o.name))
          , u = ["me", "mistakes", "stats", "settings"]
          , h = G( () => i.initialized && i.logged_in && u.some(g => o.name.startsWith(g)))
          , f = V();
        it( () => o.fullPath, v),
        at( () => v(o.fullPath));
        const m = ["mistakes", "stats", "settings", "user", "achievements", "me"];
        function v(g) {
            f.value = m.some(E => g.startsWith("/" + E))
        }
        async function y() {
            try {
                await fe.post("/auth/logout/"),
                i.reset(),
                await s.replace({
                    path: "/login"
                })
            } catch (g) {
                const E = g.response;
                console.error(E)
            }
        }
        function S(g) {
            n.value = g,
            localStorage.setItem("language", n.value)
        }
        function b() {
            s.go(-1)
        }
        return (g, E) => {
            const T = hs("router-link");
            return k(),
            A("div", bb, [f.value ? (k(),
            A("div", {
                key: 0,
                class: "back-button",
                onClick: b
            }, [yb, ye("  " + $(g.$t("back")), 1)])) : W("", !0), _("div", wb, [_e(gf, {
                "initial-language": x(a),
                onLanguageChanged: S
            }, null, 8, ["initial-language"])]), _("div", Eb, [c.value ? (k(),
            A("div", Sb, [x(i).logged_in ? (k(),
            Te(T, {
                key: 1,
                to: "/me",
                class: "header-link"
            }, {
                default: Se( () => [ye($(g.$t("personal_page")), 1)]),
                _: 1
            })) : (k(),
            Te(T, {
                key: 0,
                to: "/login",
                class: "header-link"
            }, {
                default: Se( () => [ye($(g.$t("login")), 1)]),
                _: 1
            }))])) : W("", !0), x(i).logged_in && h.value ? (k(),
            A("div", Tb, [_e(T, {
                to: "/settings",
                title: g.$t("settings"),
                class: "header-link settings-button"
            }, {
                default: Se( () => [Cb]),
                _: 1
            }, 8, ["title"]), ye("    "), _("a", {
                href: "#",
                onClick: je(y, ["prevent"]),
                title: x(t)("exit"),
                class: "header-link"
            }, Pb, 8, kb)])) : W("", !0)])])
        }
    }
}
  , Ob = Pe(Rb, [["__scopeId", "data-v-f1c8640b"]])
  , Lb = {
    __name: "PageHeader",
    setup(e) {
        const t = lt();
        return (n, s) => x(t).meta.userHeader ? (k(),
        Te(Ob, {
            key: 0,
            "bg-white": x(t).meta.whiteHeader
        }, null, 8, ["bg-white"])) : (k(),
        Te(pb, {
            key: 1
        }))
    }
}
  , Hi = jn("schools", () => {
    const e = V([])
      , {t} = Le();
    async function n() {
        var r;
        let o = (r = (await fe.get("schools/")).data) == null ? void 0 : r.map(i => (i.title = i.real_name,
        i));
        o = [{
            id: -1,
            title: t("driving_school_unselected")
        }, ...o],
        e.value = o
    }
    return {
        items: e,
        load: n
    }
}
)
  , yf = jn("testHistory", () => {
    const e = [];
    function t(s) {
        e.push({
            id: s.id,
            type: s.type,
            completed: s.completed,
            correctQuestions: s.correctQuestions,
            failedQuestions: s.failedQuestions,
            answeredQuestions: s.answeredQuestions
        })
    }
    function n(s) {
        let o = !1;
        if (e.length) {
            const r = e.at(-1);
            o = r.type === s.type && r.id === s.id
        }
        return o
    }
    return {
        addTest: t,
        hasLastTest: n
    }
}
)
  , Nb = {
    __name: "DocumentHeightObserver",
    emits: ["height-change", "mutation-start", "mutation-end"],
    setup(e, {emit: t}) {
        const n = t
          , s = () => {
            let o = document.documentElement.scrollHeight
              , r = !1;
            const a = ( (c, u) => {
                let h;
                return (...f) => {
                    clearTimeout(h),
                    h = setTimeout( () => c(...f), u)
                }
            }
            )( () => {
                const c = document.documentElement.scrollHeight;
                c !== o && (n("height-change", {
                    currentHeight: c,
                    previousHeight: o,
                    changeType: c > o ? "grow" : "shrink"
                }),
                o = c,
                r && (r = !1,
                n("mutation-end")))
            }
            , 100)
              , l = new MutationObserver(c => {
                c.some(h => {
                    switch (h.type) {
                    case "childList":
                        return h.addedNodes.length > 0 || h.removedNodes.length > 0;
                    case "attributes":
                        return ["style", "class", "height", "width", "display", "hidden"].includes(h.attributeName);
                    case "characterData":
                        return !0;
                    default:
                        return !1
                    }
                }
                ) && (r || (r = !0,
                n("mutation-start")),
                a())
            }
            );
            return {
                start() {
                    l.observe(document.body, {
                        childList: !0,
                        subtree: !0,
                        attributes: !0,
                        characterData: !0
                    }),
                    window.addEventListener("resize", a),
                    new MutationObserver(u => {
                        u.forEach(h => {
                            h.type === "childList" && (h.addedNodes.forEach(f => {
                                f.nodeName === "IMG" && !f.complete && f.addEventListener("load", a)
                            }
                            ),
                            h.removedNodes.forEach(f => {
                                f.nodeName === "IMG" && (f.removeEventListener("load", a),
                                a())
                            }
                            ))
                        }
                        )
                    }
                    ).observe(document.body, {
                        childList: !0,
                        subtree: !0
                    })
                },
                stop() {
                    l.disconnect(),
                    window.removeEventListener("resize", a)
                }
            }
        }
        ;
        return Hn( () => {
            const o = s();
            o.start(),
            window.__heightObserver = o
        }
        ),
        ds( () => {
            window.__heightObserver && (window.__heightObserver.stop(),
            delete window.__heightObserver)
        }
        ),
        () => {}
    }
}
  , Ab = {
    class: "container"
}
  , Ib = {
    __name: "App",
    setup(e) {
        const {locale: t, t: n} = Le()
          , s = Je()
          , o = lt()
          , r = Ve()
          , i = Qs()
          , a = yf()
          , l = Gs()
          , c = ct()
          , u = Hi()
          , h = Ui();
        let f = G( () => v(o.name));
        at(async () => {
            var C;
            y(),
            await r.load(),
            m(),
            await Hv(),
            r.origin = o.fullPath,
            l.setDefaultTime((C = r.settings) == null ? void 0 : C.testTime),
            i.saveTestResults = b,
            await c.load(!0),
            await u.load()
        }
        ),
        Hn( () => {}
        );
        function m() {
            var I, K, J, ne;
            const C = location.path || "/"
              , L = (K = (I = r.settings.select_language_by_url) == null ? void 0 : I.ru) == null ? void 0 : K.some(D => C.startsWith(D))
              , M = (ne = (J = r.settings.select_language_by_url) == null ? void 0 : J.kg) == null ? void 0 : ne.some(D => C.startsWith(D));
            L ? (_log("Setting Russian locale"),
            t.value = "ru",
            Ao("language")) : M ? (_log("Setting Kyrgyz locale"),
            t.value = "en",
            Ao("language")) : h && (_log("Setting previously stored locale"),
            t.value = h)
        }
        function v(C) {
            let L = !0;
            return ["cards", "topics", "root"].some(M => M === C) && (L = !1),
            C === "me" && (!c.initialized || _o(c == null ? void 0 : c.data)) && (L = !1),
            L
        }
        function y() {
            r.isDebug || (document.oncontextmenu = C => !1)
        }
        it( () => o.name, C => f.value = v(C)),
        it( () => l.isActive, C => {
            !C && !i.completed && (i.completeByTimeout(),
            a.addTest(i),
            s.replace({
                path: "/result"
            }))
        }
        );
        async function S(C) {
            var L;
            if (await i.initialize(C),
            i.type === Un && !((L = i.questions) != null && L.length))
                alert(n("you_have_no_failed_questions"));
            else {
                const M = i.type === qt || i.type === Un || i.type === wn || i.type === nn;
                return l.start(M),
                s.replace.bind(s)({
                    path: `/question/${i.type}/1`
                })
            }
        }
        async function b(C) {
            var L, M, I;
            try {
                if (c.logged_in) {
                    const K = {
                        id: C.id,
                        test_type: C.type,
                        questions: (L = C.questions) == null ? void 0 : L.length,
                        incorrect_answers: C.failedQuestions,
                        correct_answers: C.correctQuestions,
                        success: (M = C.completed) == null ? void 0 : M.success,
                        points_delta: g(C),
                        points_unlocked: E(C),
                        time: l.elapsed
                    }
                      , J = await fe.post("data/save_test_results/", K);
                    C.setNewAchievements((I = J.data) == null ? void 0 : I.new_achievements),
                    await c.load()
                }
            } catch (K) {
                console.error(K)
            }
        }
        function g(C) {
            var L, M, I, K;
            if (C.type === tn) {
                const J = r.cards.find(D => D.id === C.id);
                let ne = J == null ? void 0 : J.rating_points;
                if (typeof ne == "number" && (ne = {
                    add: ne,
                    sub: ne
                }),
                J && ne)
                    return (L = C.completed) != null && L.success ? ne.add : -ne.sub
            } else if (C.type === qt) {
                const J = r.topics.find(D => D.id === C.id);
                let ne = J == null ? void 0 : J.rating_points;
                if (typeof ne == "number" && (ne = {
                    add: ne,
                    sub: ne
                }),
                J && ne)
                    return (M = C.completed) != null && M.success ? ne.add : -ne.sub
            } else {
                let J = (I = r.settings.test_mode_rating_points) == null ? void 0 : I[C.type];
                return typeof J == "number" && (J = {
                    add: J,
                    sub: J
                }),
                (K = C.completed) != null && K.success ? J.add : -J.sub
            }
            return 0
        }
        function E(C) {
            var L, M, I, K;
            if (C.type === tn) {
                const J = r.cards.find(ne => ne.id === C.id);
                return (L = J == null ? void 0 : J.rating_points) == null ? void 0 : L.unlocked
            } else if (C.type === qt) {
                const J = r.topics.find(ne => ne.id === C.id);
                return (M = J == null ? void 0 : J.rating_points) == null ? void 0 : M.unlocked
            } else
                return (K = (I = r.settings.test_mode_rating_points) == null ? void 0 : I[C.type]) == null ? void 0 : K.unlocked
        }
        es("onStartTest", S);
        function T(C) {
            window.parent && window.parent.postMessage({
                type: "DRVEXAM_WINDOW_HEIGHT",
                height: C.currentHeight
            }, "*")
        }
        function R() {
            T({
                currentHeight: r.isMobile ? r.settings.defaultWindowHeightMobile : r.settings.defaultWindowHeight
            })
        }
        return es("setDefaultWindowHeight", R),
        (C, L) => (k(),
        A(Ee, null, [_("div", Ab, [x(f) ? (k(),
        Te(Lb, {
            key: 0
        })) : W("", !0), _e(x(yu))]), _e(Nb, {
            onHeightChange: T
        })], 64))
    }
}
  , xb = "" + new URL("../images/Znak_Y.png",import.meta.url).href
  , Et = e => (pt("data-v-dfa61dcc"),
e = e(),
mt(),
e)
  , Mb = {
    class: "div_welcome_page"
}
  , Db = Et( () => _("div", {
    class: "stylish_line1"
}, null, -1))
  , Bb = Et( () => _("br", null, null, -1))
  , Fb = Et( () => _("div", {
    class: "welcome_page_spacer"
}, null, -1))
  , Ub = {
    class: "welcome_page_logo"
}
  , Vb = Et( () => _("img", {
    class: "logo_main1",
    id: "myImg1",
    src: xb,
    alt: "Autoschool Logo"
}, null, -1))
  , Hb = {
    class: "title_main2"
}
  , jb = Et( () => _("div", {
    class: "welcome_page_spacer"
}, null, -1))
  , qb = {
    key: 0
}
  , Wb = Et( () => _("br", null, null, -1))
  , Kb = Et( () => _("br", null, null, -1))
  , Qb = Et( () => _("br", null, null, -1))
  , Gb = Et( () => _("br", null, null, -1))
  , Yb = Et( () => _("br", null, null, -1))
  , Jb = Et( () => _("br", null, null, -1))
  , Xb = Et( () => _("br", null, null, -1))
  , zb = {
    key: 1,
    class: "welcome_page_spacer"
}
  , Zb = {
    key: 5,
    class: "welcome_page_spacer"
}
  , ey = {
    key: 6,
    class: "welcome_page_spacer"
}
  , ty = {
    key: 7,
    class: "welcome_page_info"
}
  , ny = {
    class: "span_main"
}
  , sy = {
    id: "sp_t1"
}
  , oy = {
    key: 0
}
  , ry = {
    class: "span_main"
}
  , iy = {
    id: "sp_qs1"
}
  , ay = {
    key: 1
}
  , ly = {
    class: "span_main"
}
  , cy = {
    id: "sp_pp1"
}
  , uy = {
    key: 9,
    class: "welcome_page_spacer"
}
  , fy = Et( () => _("div", {
    class: "stylish_line1"
}, null, -1))
  , dy = {
    __name: "WelcomePage",
    setup(e) {
        var T;
        const t = ct();
        Gs();
        const n = et("onStartTest")
          , {locale: s, t: o} = Le()
          , r = lt()
          , i = Ve()
          , a = V("")
          , l = parseInt(((T = r.params) == null ? void 0 : T.id) || 1);
        let c = V()
          , u = ht({
            id: 0,
            name: ""
        })
          , h = G(S)
          , f = G(y)
          , m = G(E);
        at( () => v(r)),
        it( () => r.fullPath, R => {
            v(r)
        }
        );
        async function v(R) {
            var L;
            a.value = R.meta.mode,
            a.value.startsWith("test") || await i.load(),
            c.value = a.value + "s";
            const C = ((L = i[c.value]) == null ? void 0 : L[l - 1]) || {
                id: 0
            };
            Object.assign(u, C)
        }
        function y() {
            let R = "test";
            return [$n, qn, tn, qt].some(C => a.value === C) && (R = a.value.startsWith("test") ? "test" : c.value),
            [wn, nn].some(C => a.value === C) && (R = a.value),
            R ? o("title_main1_" + R) : ""
        }
        function S() {
            var C;
            let R = ((C = u == null ? void 0 : u.name) == null ? void 0 : C[s.value]) || "";
            return a.value === "topic" && (R = o("topic") + `
` + R),
            R || ""
        }
        function b() {
            var C;
            const R = {
                locale: s.value,
                testType: a.value,
                itemId: (C = r.params) == null ? void 0 : C.id,
                card: u,
                threshold: g()
            };
            localStorage.setItem("testPath", r.fullPath),
            n(R)
        }
        function g() {
            return a.value === nn ? i.settings.max_failed_marathon || Uv : u.max_failed || i.settings.max_failed
        }
        function E() {
            const R = t.logged_in && t.data.school_name ? '"' + t.data.school_name + '"' : " ";
            return s.value === "ru" ? o("title_school") + R : R + `
` + o("title_school").trim()
        }
        return (R, C) => {
            const L = hs("router-link");
            return k(),
            A("div", Mb, [Db, _("div", {
                class: "title_main1",
                style: Vn({
                    visibility: x(f) ? "visible" : "hidden"
                })
            }, [_("div", {
                class: ie(["title_main1i", {
                    hidden: a.value === "repeat"
                }])
            }, [ye($(x(f) || " ") + " ", 1), Bb, ye(" " + $(R.$t("title_main1b")), 1)], 2)], 4), Fb, _("div", Ub, [Vb, _("div", Hb, $(x(m)), 1)]), jb, a.value === "debug" ? (k(),
            A("div", qb, [_e(L, {
                class: "test-mode-link",
                to: {
                    path: "/test",
                    force: !0
                }
            }, {
                default: Se( () => [ye($(R.$t("modeTest")), 1)]),
                _: 1
            }), Wb, _e(L, {
                class: "test-mode-link",
                to: {
                    path: "/test2",
                    force: !0
                }
            }, {
                default: Se( () => [ye($(R.$t("modeExam")), 1)]),
                _: 1
            }), Kb, _e(L, {
                class: "test-mode-link",
                to: {
                    path: "/repeat",
                    force: !0
                }
            }, {
                default: Se( () => [ye($(R.$t("modeRepeat")), 1)]),
                _: 1
            }), Qb, _e(L, {
                class: "test-mode-link",
                to: {
                    path: "/cards",
                    force: !0
                }
            }, {
                default: Se( () => [ye($(R.$t("modeCards")), 1)]),
                _: 1
            }), Gb, _e(L, {
                class: "test-mode-link",
                to: {
                    path: "/topics",
                    force: !0
                }
            }, {
                default: Se( () => [ye($(R.$t("modeTopics")), 1)]),
                _: 1
            }), Yb, _e(L, {
                class: "test-mode-link",
                to: {
                    path: "/challenge",
                    force: !0
                }
            }, {
                default: Se( () => [ye($(R.$t("challenging_questions")), 1)]),
                _: 1
            }), Jb, _e(L, {
                class: "test-mode-link",
                to: {
                    path: "/marathon",
                    force: !0
                }
            }, {
                default: Se( () => [ye($(R.$t("marathon")), 1)]),
                _: 1
            }), Xb])) : W("", !0), a.value === "card" || a.value === "topic" ? (k(),
            A("div", zb)) : W("", !0), a.value === "card" || a.value === "topic" ? (k(),
            A("div", {
                key: 2,
                class: ie(["card-name", {
                    "mode-card": a.value === "card",
                    "mode-topic": a.value !== "card"
                }])
            }, $(x(h) || ""), 3)) : a.value === "marathon" ? (k(),
            A("div", {
                key: 3,
                class: ie(["card-name", {
                    "mode-topic": !0
                }])
            }, $(x(o)("marathon_title")), 1)) : W("", !0), a.value === "repeat" ? (k(),
            A("div", {
                key: 4,
                class: ie(["card-name mode-repeat", {
                    "mode-card": !0
                }])
            }, $(R.$t("modeRepeat")), 1)) : W("", !0), a.value === "repeat" || a.value === "marathon" ? (k(),
            A("div", Zb)) : W("", !0), a.value === "card" || a.value === "topic" ? (k(),
            A("div", ey)) : W("", !0), a.value.startsWith("test") || a.value === "card" ? (k(),
            A("div", ty, [_("span", ny, [ye($(R.$t("time_needed")) + ": " + $(x(i).settings.testTime) + " ", 1), _("span", sy, $(R.$t("min")), 1)]), x(cs)() ? (k(),
            A("br", oy)) : W("", !0), _("span", ry, [ye($(R.$t("testCount")) + ":", 1), _("span", iy, $(R.$t("testCount_num")), 1)]), x(cs)() ? (k(),
            A("br", ay)) : W("", !0), _("span", ly, [ye($(R.$t("pass_bar_s")) + ": ", 1), _("span", cy, $(R.$t("pass_bar")), 1)])])) : W("", !0), a.value !== "debug" ? (k(),
            A("button", {
                key: 8,
                class: "button_main",
                onClick: C[0] || (C[0] = M => b())
            }, $(R.$t("button_start")), 1)) : W("", !0), a.value === "debug" ? (k(),
            A("div", uy)) : W("", !0), fy])
        }
    }
}
  , un = Pe(dy, [["__scopeId", "data-v-dfa61dcc"]])
  , hy = {
    key: 0,
    class: "unanswered-notification"
}
  , py = ["innerHTML"]
  , my = ["data-test-mode"]
  , _y = {
    key: 0
}
  , gy = {
    key: 1
}
  , vy = {
    key: 2
}
  , by = {
    key: 3
}
  , yy = {
    key: 4
}
  , wy = {
    key: 5
}
  , Ey = {
    key: 6
}
  , Sy = {
    key: 7
}
  , Ty = {
    key: 8
}
  , Cy = {
    key: 9
}
  , Ys = fs({
    __name: "Pages",
    props: {
        totalItems: {
            type: Number,
            required: !0
        },
        itemsPerPage: {
            type: Number,
            default: 10,
            validator: e => {
                if (e <= 0) {
                    const t = "itemsPerPage attribute must be greater than 0.";
                    throw console.error(t),
                    new TypeError(t)
                }
                return !0
            }
        },
        currentPage: {
            type: Number,
            default: 1,
            validator: e => {
                const t = "currentPage attribute must be greater than 0.";
                if (e <= 0)
                    throw console.error(t),
                    new TypeError(t);
                return !0
            }
        },
        modelValue: {
            type: Number,
            required: !0,
            validator: e => {
                const t = "v-model is required and must be greater than 0.";
                if (e <= 0)
                    throw console.error(t),
                    new TypeError(t);
                return !0
            }
        },
        maxPagesShown: {
            type: Number,
            default: 5,
            validator: e => {
                const t = "maxPagesShown attribute must be greater than 0.";
                if (e <= 0)
                    throw console.error(t),
                    new TypeError(t);
                return !0
            }
        },
        dir: {
            type: String,
            default: "ltr",
            validator: e => {
                const t = 'dir attribute must be either "ltr" or "rtl".';
                if (e !== "ltr" && e !== "rtl")
                    throw console.error(t),
                    new TypeError(t);
                return !0
            }
        },
        type: {
            type: String,
            default: "button",
            validator: e => {
                const t = ["link", "button"]
                  , n = "type attribute must be one of the following: " + t.join(", ");
                if (t.indexOf(e) === -1)
                    throw console.error(n),
                    new TypeError(n);
                return !0
            }
        },
        onClick: {
            type: Function,
            default: () => {}
        },
        locale: {
            type: String,
            default: "en",
            validator: e => {
                const t = ["en", "ar", "ir"]
                  , n = "locale attribute must be one of the following: " + t.join(", ");
                if (t.indexOf(e) === -1)
                    throw console.error(n),
                    new TypeError(n);
                return !0
            }
        },
        prevButtonContent: {
            type: String,
            default: "<"
        },
        nextButtonContent: {
            type: String,
            default: ">"
        },
        hidePrevNext: {
            type: Boolean,
            default: !1
        },
        hidePrevNextWhenEnds: {
            type: Boolean,
            default: !1
        },
        showBreakpointButtons: {
            type: Boolean,
            default: !0
        },
        disableBreakpointButtons: {
            type: Boolean,
            default: !1
        },
        startingBreakpointContent: {
            type: String,
            default: cs() ? "…" : "..."
        },
        endingBreakpointButtonContent: {
            type: String,
            default: cs() ? "…" : "..."
        },
        showJumpButtons: {
            type: Boolean,
            default: !1
        },
        linkUrl: {
            type: String,
            default: "#"
        },
        backwardJumpButtonContent: {
            type: String,
            default: "<<"
        },
        forwardJumpButtonContent: {
            type: String,
            default: ">>"
        },
        disablePagination: {
            type: Boolean,
            default: !1
        },
        showEndingButtons: {
            type: Boolean,
            default: !1
        },
        firstPageContent: {
            type: String,
            default: "First"
        },
        lastPageContent: {
            type: String,
            default: "Last"
        },
        backButtonClass: {
            type: String,
            default: "back-button"
        },
        nextButtonClass: {
            type: String,
            default: "next-button"
        },
        firstButtonClass: {
            type: String,
            default: "first-button"
        },
        lastButtonClass: {
            type: String,
            default: "last-button"
        },
        numberButtonsClass: {
            type: String,
            default: "number-buttons"
        },
        startingBreakpointButtonClass: {
            type: String,
            default: "starting-breakpoint-button"
        },
        endingBreakPointButtonClass: {
            type: String,
            default: "ending-breakpoint-button"
        },
        firstPageButtonClass: {
            type: String,
            default: "first-page-button"
        },
        lastPageButtonClass: {
            type: String,
            default: "last-page-button"
        },
        paginateButtonsClass: {
            type: String,
            default: "paginate-buttons pagination-item"
        },
        disabledPaginateButtonsClass: {
            type: String,
            default: "disabled-paginate-buttons"
        },
        activePageClass: {
            type: String,
            default: "active-page"
        },
        paginationContainerClass: {
            type: String,
            default: "pagination-container"
        },
        disabledBreakPointButtonClass: {
            type: String,
            default: "disabled-breakpoint-button"
        },
        backwardJumpButtonClass: {
            type: String,
            default: "backward-jump-button"
        },
        forwardJumpButtonClass: {
            type: String,
            default: "forward-jump-button"
        },
        disabledBackwardJumpButtonClass: {
            type: String,
            default: "disabled-backward-jump-button"
        },
        disabledBackButtonClass: {
            type: String,
            default: "disabled-back-button"
        },
        disabledFirstButtonClass: {
            type: String,
            default: "disabled-first-button"
        },
        disabledLastButtonClass: {
            type: String,
            default: "disabled-last-button"
        },
        disabledNextButtonClass: {
            type: String,
            default: "disabled-next-button"
        },
        disabledForwardJumpButtonClass: {
            type: String,
            default: "disabled-forward-jump-button"
        },
        testMode: {
            type: Boolean,
            default: !1
        }
    },
    emits: ["update:modelValue"],
    setup(e, {emit: t}) {
        const {t: n} = Le()
          , s = Qs();
        function o(D) {
            let j = "";
            if (!f.testMode)
                return j;
            const X = s.questions[D - 1];
            return X != null && X.answered && (X.correct ? j = "test-success" : j = "test-failed"),
            j
        }
        G( () => {
            if (!f.testMode)
                return null;
            const D = s.questions.filter(j => !j.answered);
            return D.length === 0 || D.length === s.questions.length ? null : s.questions.findIndex(j => !j.answered) + 1
        }
        ),
        G( () => {
            if (!f.testMode)
                return null;
            const D = s.questions.filter(se => !se.answered);
            if (D.length === 0 || D.length === s.questions.length)
                return null;
            const X = [...s.questions].reverse().findIndex(se => !se.answered);
            return s.questions.length - X
        }
        );
        const r = G( () => f.testMode ? s.questions.findIndex(D => D.answered) + 1 : null)
          , i = G( () => {
            if (!f.testMode)
                return null;
            const j = [...s.questions].reverse().findIndex(X => X.answered);
            return s.questions.length - j
        }
        )
          , a = G( () => {
            if (!f.testMode)
                return !1;
            const D = r.value
              , j = i.value;
            return !D || !j ? !1 : s.questions.slice(0, j).some(X => !X.answered)
        }
        )
          , l = G( () => f.testMode ? a.value : !1)
          , c = (D, j) => {
            if (!f.testMode)
                return null;
            const X = s.questions
              , se = X.length
              , de = X.filter(me => !me.answered);
            if (de.length === 0 || de.length === se)
                return null;
            if (!a.value)
                return j === "forward" ? X.findIndex(me => !me.answered) + 1 : X.findLastIndex(me => !me.answered) + 1;
            const be = D - 1;
            if (j === "forward") {
                for (let me = be + 1; me < se; me++)
                    if (!X[me].answered)
                        return me + 1;
                for (let me = 0; me < be; me++)
                    if (!X[me].answered)
                        return me + 1
            } else {
                for (let me = be - 1; me >= 0; me--)
                    if (!X[me].answered)
                        return me + 1;
                for (let me = se - 1; me > be; me--)
                    if (!X[me].answered)
                        return me + 1
            }
            return null
        }
          , u = () => {
            if (l.value) {
                const D = c(m.value, "backward");
                if (D) {
                    y(D);
                    return
                }
            }
            y(T.value ? m.value + 1 : m.value - 1)
        }
          , h = () => {
            if (l.value) {
                const D = c(m.value, "forward");
                if (D) {
                    y(D);
                    return
                }
            }
            y(T.value ? m.value - 1 : m.value + 1)
        }
          , f = e;
        if (f.currentPage && !f.modelValue)
            throw new Error("currentPage/current-page is now deprecated, use v-model instead to set the current page.");
        if (!f.modelValue)
            throw new TypeError("v-model is required for the paginate component.");
        const m = us(f, "modelValue")
          , v = t
          , y = D => {
            D !== m.value && (D > g.value || D < 1 || f.disablePagination || (v("update:modelValue", D),
            f.onClick(D)))
        }
          , S = D => {
            switch (f.locale) {
            case "en":
                return D;
            case "ar":
                return D.toLocaleString("ar-SA");
            case "ir":
                return D.toLocaleString("fa-IR");
            default:
                return D
            }
        }
          , b = D => f.type !== "link" ? "" : f.linkUrl.replace("[page]", D.toString())
          , g = G( () => Math.ceil(f.totalItems / f.itemsPerPage))
          , E = G( () => {
            let D, j;
            if (g.value <= f.maxPagesShown)
                D = 1,
                j = g.value;
            else {
                let se = Math.floor(f.maxPagesShown / 2)
                  , de = Math.ceil(f.maxPagesShown / 2) - 1;
                m.value <= se ? (D = 1,
                j = f.maxPagesShown) : m.value + de >= g.value ? (D = g.value - f.maxPagesShown + 1,
                j = g.value) : (D = m.value - se,
                j = m.value + de)
            }
            let X = Array.from(Array(j + 1 - D).keys()).map(se => D + se);
            return f.dir === "rtl" && (X = X.reverse()),
            {
                totalItems: f.totalItems,
                currentPage: m.value,
                itemsPerPage: f.itemsPerPage,
                totalPages: g,
                startPage: D,
                endPage: j,
                pages: X
            }
        }
        )
          , T = G( () => f.dir === "rtl")
          , R = G( () => T.value ? !f.hidePrevNextWhenEnds || m.value !== g.value : !f.hidePrevNextWhenEnds || m.value !== 1)
          , C = G( () => T.value ? !f.hidePrevNextWhenEnds || m.value !== 1 : !f.hidePrevNextWhenEnds || m.value !== g.value)
          , L = G( () => T.value ? E.value.pages[0] < g.value - 1 : E.value.pages[0] >= 3)
          , M = G( () => T.value ? E.value.pages[E.value.pages.length - 1] >= 3 : E.value.pages[E.value.pages.length - 1] < g.value - 1)
          , I = G( () => T.value ? E.value.pages[0] < g.value : E.value.pages[0] >= 2)
          , K = G( () => T.value ? E.value.pages[E.value.pages.length - 1] >= 2 : E.value.pages[E.value.pages.length - 1] < g.value)
          , J = G( () => m.value !== 1)
          , ne = G( () => m.value !== g.value);
        if (f.type === "link" && f.linkUrl === "#")
            throw console.error("linkUrl attribute is required if type attribute is 'link'"),
            new TypeError("linkUrl attribute is required if type attribute is 'link'");
        if (f.type === "link" && !f.linkUrl.includes("[page]"))
            throw console.error("linkUrl attribute must contain '[page]' substring"),
            new TypeError("linkUrl attribute must contain '[page]' substring");
        return (D, j) => (k(),
        A(Ee, null, [e.testMode && a.value ? (k(),
        A("div", hy, [W("", !0), _("small", {
            innerHTML: x(n)("unanswered_questions_notice")
        }, null, 8, py)])) : W("", !0), _("ul", {
            id: "componentContainer",
            class: ie(["pagination", e.paginationContainerClass]),
            "data-test-mode": e.testMode ? "true" : null
        }, [e.showEndingButtons && J.value ? (k(),
        A("li", _y, [(k(),
        Te(Pt(e.type === "button" ? "button" : "a"), {
            href: b(T.value ? g.value : 1),
            onClick: j[0] || (j[0] = je(X => y(T.value ? g.value : 1), ["prevent"])),
            class: ie([e.firstPageButtonClass, e.paginateButtonsClass, e.disablePagination ? e.disabledPaginateButtonsClass : ""]),
            disabled: e.disablePagination,
            onTouchend: x(Yt)
        }, {
            default: Se( () => [Jt(D.$slots, "first-page-button", {}, () => [ye($(e.firstPageContent), 1)])]),
            _: 3
        }, 40, ["href", "class", "disabled", "onTouchend"]))])) : W("", !0), e.showJumpButtons && L.value ? (k(),
        A("li", gy, [(k(),
        Te(Pt(e.type === "button" ? "button" : "a"), {
            href: b(T.value ? m.value + Math.ceil(e.maxPagesShown / 2) : m.value - Math.ceil(e.maxPagesShown / 2)),
            onClick: j[1] || (j[1] = je(X => y(T.value ? m.value + Math.ceil(e.maxPagesShown / 2) : m.value - Math.ceil(e.maxPagesShown / 2)), ["prevent"])),
            class: ie([e.backwardJumpButtonClass, e.paginateButtonsClass, e.disablePagination ? e.disabledPaginateButtonsClass : "", e.disablePagination ? e.disabledBackwardJumpButtonClass : ""]),
            disabled: e.disablePagination,
            onTouchend: x(Yt)
        }, {
            default: Se( () => [Jt(D.$slots, "backward-jump-button", {}, () => [ye($(e.backwardJumpButtonContent), 1)])]),
            _: 3
        }, 40, ["href", "class", "disabled", "onTouchend"]))])) : W("", !0), !e.hidePrevNext && R.value ? (k(),
        A("li", vy, [(k(),
        Te(Pt(e.type === "button" ? "button" : "a"), {
            href: b(T.value ? m.value + 1 : m.value - 1),
            onClick: je(u, ["prevent"]),
            class: ie([e.backButtonClass, e.paginateButtonsClass, e.disablePagination ? e.disabledPaginateButtonsClass : "", e.disablePagination ? e.disabledBackButtonClass : ""]),
            disabled: e.disablePagination
        }, {
            default: Se( () => [Jt(D.$slots, "prev-button", {}, () => [ye($(e.prevButtonContent), 1)])]),
            _: 3
        }, 8, ["href", "class", "disabled"]))])) : W("", !0), e.showBreakpointButtons && I.value ? (k(),
        A("li", by, [(k(),
        Te(Pt(e.type === "button" ? "button" : "a"), {
            href: b(T.value ? g.value : 1),
            onClick: j[2] || (j[2] = je(X => y(T.value ? g.value : 1), ["prevent"])),
            class: ie([e.firstButtonClass, e.paginateButtonsClass, e.disablePagination ? e.disabledPaginateButtonsClass : "", e.disablePagination ? e.disabledFirstButtonClass : "", o(1)]),
            disabled: e.disablePagination,
            onTouchend: x(Yt)
        }, {
            default: Se( () => [ye($(T.value ? S(g.value) : S(1)), 1)]),
            _: 1
        }, 40, ["href", "class", "disabled", "onTouchend"]))])) : W("", !0), e.showBreakpointButtons && L.value ? (k(),
        A("li", yy, [(k(),
        Te(Pt(e.type === "button" ? "button" : "a"), {
            href: b(e.disableBreakpointButtons ? m.value : T.value ? m.value + Math.ceil(e.maxPagesShown / 2) : m.value - Math.ceil(e.maxPagesShown / 2)),
            onClick: j[3] || (j[3] = je(X => y(e.disableBreakpointButtons ? m.value : T.value ? m.value + Math.ceil(e.maxPagesShown / 2) : m.value - Math.ceil(e.maxPagesShown / 2)), ["prevent"])),
            disabled: e.disableBreakpointButtons || e.disablePagination,
            class: ie(["breakpoint-button", [e.startingBreakpointButtonClass, e.paginateButtonsClass, e.disableBreakpointButtons || e.disablePagination ? `${e.disabledPaginateButtonsClass} ${e.disabledBreakPointButtonClass}` : ""]]),
            onTouchend: x(Yt)
        }, {
            default: Se( () => [Jt(D.$slots, "starting-breakpoint-button", {}, () => [ye($(e.startingBreakpointContent), 1)])]),
            _: 3
        }, 40, ["href", "disabled", "class", "onTouchend"]))])) : W("", !0), (k(!0),
        A(Ee, null, st(E.value.pages, (X, se) => (k(),
        A("li", {
            key: se
        }, [(k(),
        Te(Pt(e.type === "button" ? "button" : "a"), {
            href: b(X),
            onClick: je( () => y(X), ["prevent"]),
            class: ie([e.paginateButtonsClass, e.numberButtonsClass, X === m.value ? e.activePageClass : "", e.disablePagination ? e.disabledPaginateButtonsClass : "", o(X)]),
            disabled: e.disablePagination,
            onTouchend: x(Yt)
        }, {
            default: Se( () => [ye($(S(X)), 1)]),
            _: 2
        }, 1064, ["href", "onClick", "class", "disabled", "onTouchend"]))]))), 128)), e.showBreakpointButtons && M.value ? (k(),
        A("li", wy, [(k(),
        Te(Pt(e.type === "button" ? "button" : "a"), {
            href: b(e.disableBreakpointButtons ? m.value : T.value ? m.value - Math.ceil(e.maxPagesShown / 2) : m.value + Math.ceil(e.maxPagesShown / 2)),
            onClick: j[4] || (j[4] = je(X => y(e.disableBreakpointButtons ? m.value : T.value ? m.value - Math.ceil(e.maxPagesShown / 2) : m.value + Math.ceil(e.maxPagesShown / 2)), ["prevent"])),
            disabled: e.disableBreakpointButtons || e.disablePagination,
            class: ie(["breakpoint-button", [e.endingBreakPointButtonClass, e.paginateButtonsClass, e.disableBreakpointButtons || e.disablePagination ? `${e.disabledPaginateButtonsClass} ${e.disabledBreakPointButtonClass}` : ""]]),
            onTouchend: x(Yt)
        }, {
            default: Se( () => [Jt(D.$slots, "ending-breakpoint-button", {}, () => [ye($(e.endingBreakpointButtonContent), 1)])]),
            _: 3
        }, 40, ["href", "disabled", "class", "onTouchend"]))])) : W("", !0), e.showBreakpointButtons && K.value ? (k(),
        A("li", Ey, [(k(),
        Te(Pt(e.type === "button" ? "button" : "a"), {
            href: b(T.value ? 1 : g.value),
            onClick: j[5] || (j[5] = je(X => y(T.value ? 1 : g.value), ["prevent"])),
            class: ie([e.lastButtonClass, e.paginateButtonsClass, e.disablePagination ? e.disabledPaginateButtonsClass : "", e.disablePagination ? e.disabledLastButtonClass : "", o(g.value)]),
            disabled: e.disablePagination,
            onTouchend: x(Yt)
        }, {
            default: Se( () => [ye($(T.value ? S(1) : S(g.value)), 1)]),
            _: 1
        }, 40, ["href", "class", "disabled", "onTouchend"]))])) : W("", !0), !e.hidePrevNext && C.value ? (k(),
        A("li", Sy, [(k(),
        Te(Pt(e.type === "button" ? "button" : "a"), {
            href: b(T.value ? m.value - 1 : m.value + 1),
            onClick: je(h, ["prevent"]),
            class: ie([e.paginateButtonsClass, e.nextButtonClass, e.disablePagination ? e.disabledPaginateButtonsClass : "", e.disablePagination ? e.disabledNextButtonClass : ""]),
            disabled: e.disablePagination
        }, {
            default: Se( () => [Jt(D.$slots, "next-button", {}, () => [ye($(e.nextButtonContent), 1)])]),
            _: 3
        }, 8, ["href", "class", "disabled"]))])) : W("", !0), e.showJumpButtons && M.value ? (k(),
        A("li", Ty, [(k(),
        Te(Pt(e.type === "button" ? "button" : "a"), {
            href: b(T.value ? m.value - Math.ceil(e.maxPagesShown / 2) : m.value + Math.ceil(e.maxPagesShown / 2)),
            onClick: j[6] || (j[6] = je(X => y(T.value ? m.value - Math.ceil(e.maxPagesShown / 2) : m.value + Math.ceil(e.maxPagesShown / 2)), ["prevent"])),
            class: ie([e.forwardJumpButtonClass, e.paginateButtonsClass, e.disablePagination ? e.disabledPaginateButtonsClass : "", e.disablePagination ? e.disabledForwardJumpButtonClass : ""]),
            disabled: e.disablePagination,
            onTouchend: x(Yt)
        }, {
            default: Se( () => [Jt(D.$slots, "forward-jump-button", {}, () => [ye($(e.forwardJumpButtonContent), 1)])]),
            _: 3
        }, 40, ["href", "class", "disabled", "onTouchend"]))])) : W("", !0), e.showEndingButtons && ne.value ? (k(),
        A("li", Cy, [(k(),
        Te(Pt(e.type === "button" ? "button" : "a"), {
            href: b(T.value ? 1 : g.value),
            onClick: j[7] || (j[7] = je(X => y(T.value ? 1 : g.value), ["prevent"])),
            class: ie([e.lastPageButtonClass, e.paginateButtonsClass, e.disablePagination ? e.disabledPaginateButtonsClass : ""]),
            disabled: e.disablePagination,
            onTouchend: x(Yt)
        }, {
            default: Se( () => [Jt(D.$slots, "last-page-button", {}, () => [ye($(e.lastPageContent), 1)])]),
            _: 3
        }, 40, ["href", "class", "disabled", "onTouchend"]))])) : W("", !0)], 10, my)], 64))
    }
})
  , ky = e => (pt("data-v-c530e74b"),
e = e(),
mt(),
e)
  , $y = ["src"]
  , Py = ky( () => _("div", {
    class: "main-line"
}, null, -1))
  , Ry = {
    class: "question"
}
  , Oy = {
    class: "question-title"
}
  , Ly = {
    class: "question-content"
}
  , Ny = ["disabled", "value"]
  , Ay = {
    class: "explanation-title"
}
  , Iy = {
    class: "explanation-desc"
}
  , xy = {
    __name: "TestQuestion",
    setup(e) {
        const t = Je()
          , n = lt()
          , s = Ve()
          , o = Gs()
          , r = Qs()
          , i = yf()
          , a = ct();
        let l, c, u, h, f, m, v;
        if (!r.questions.length) {
            const L = localStorage.getItem("testPath")
              , M = "/" + n.params.type + (n.params.type.startsWith("test") ? "" : "s");
            t.replace({
                path: L || M
            })
        }
        nm( (L, M) => {
            y(L)
        }
        );
        function y(L) {
            l = parseInt(L.params.id || 1),
            c = r.questions[l - 1] || {},
            u = r.questions[l],
            h = V(c.selectedAnswer),
            f = V(l),
            m = V(!r.type.startsWith($n)),
            v = G(S),
            g()
        }
        y(n);
        function S() {
            let L = !r.completed;
            return m.value && c.answered && !c.correct && (L = !1),
            L
        }
        function b(L) {
            return {
                active: L.id === h.value,
                valid: c.answered && L.id === c.validItem,
                invalid: c.answered && L.id === c.selectedAnswer && !c.correct
            }
        }
        function g() {
            let L;
            if (u)
                try {
                    L = new Image,
                    L.src = u.imgSrc
                } catch (M) {
                    console.error(M)
                }
        }
        function E() {
            h.value && !c.answered && (c.answered = !0,
            c.selectedAnswer = h.value,
            c.correct = h.value == c.validItem,
            console.log(`Question ${c.id} answered, correct: ${c.correct}`),
            T(c),
            m.value ? c.correct && R(!0) : R())
        }
        async function T(L) {
            try {
                const M = {
                    question_id: L.id,
                    answer_id: L.selectedAnswer,
                    correct: L.correct
                };
                a.logged_in && await fe.post("data/save_question_results/", M)
            } catch (M) {
                console.error(M)
            }
        }
        function R(L) {
            const M = r.checkCompletion();
            if (!M && l < r.questions.length) {
                let I = 500;
                m.value && L === !1 && (I = 0),
                console.log("Advancing from question: " + l),
                setTimeout( () => t.replace({
                    path: `/question/${r.type}/${l + 1}`
                }), I)
            } else
                M && (o.stop(),
                i.addTest(r),
                console.log("Showing result"),
                t.replace({
                    path: "/result"
                }))
        }
        function C(L) {
            console.log("Moving to question using pages: " + L),
            t.replace({
                path: `/question/${r.type}/${L}`
            })
        }
        return (L, M) => {
            var I;
            return k(),
            A("main", {
                class: ie(["main", {
                    mobile: x(s).isMobile
                }])
            }, [_("img", {
                src: x(c).imgSrc || "/images/placeholder.png",
                class: "main-img",
                alt: "...",
                rel: "preload"
            }, null, 8, $y), Py, _("div", Ry, [_("h3", Oy, $(x(c).title), 1), _("div", Ly, [(k(!0),
            A(Ee, null, st((I = x(c).answers) == null ? void 0 : I.filter(K => K.name), K => (k(),
            A("label", {
                key: K.id,
                class: ie(["question-item", b(K)])
            }, [Fe(_("input", {
                type: "radio",
                name: "question",
                disabled: x(c).answered,
                "onUpdate:modelValue": M[0] || (M[0] = J => De(h) ? h.value = J : h = J),
                value: K.id,
                class: "question-radio"
            }, null, 8, Ny), [[qh, x(h)]]), _("span", null, $(K.name), 1)], 2))), 128))]), x(v) ? (k(),
            A("button", {
                key: 0,
                onClick: M[1] || (M[1] = K => E()),
                class: "answer-btn"
            }, $(L.$t("answerBtn")), 1)) : W("", !0), !x(r).completed && x(m) && x(c).answered && !x(c).correct ? (k(),
            A("button", {
                key: 1,
                onClick: M[2] || (M[2] = K => R(!1)),
                class: "answer-btn"
            }, $(L.$t("forwardBtn")), 1)) : W("", !0), x(r).completed && x(c).answered || x(m) && x(c).answered && !x(c).correct ? (k(),
            A("div", {
                key: 2,
                class: ie(["question-explanation", {
                    error: !x(c).correct,
                    success: x(c).correct
                }])
            }, [_("h2", Ay, $(L.$t("explanation")), 1), _("p", Iy, $(x(c).explanation), 1)], 2)) : W("", !0)]), _e(Ys, {
                "total-items": x(r).questions.length,
                "items-per-page": 1,
                "max-pages-shown": x(cs)() ? 3 : 9,
                modelValue: x(f),
                "onUpdate:modelValue": M[3] || (M[3] = K => De(f) ? f.value = K : f = K),
                "on-click": C,
                "test-mode": !0
            }, null, 8, ["total-items", "max-pages-shown", "modelValue"])], 2)
        }
    }
}
  , My = Pe(xy, [["__scopeId", "data-v-c530e74b"]])
  , Dy = {
    class: "inner-test-results-container"
}
  , By = {
    key: 1,
    class: "result-title test-success"
}
  , Fy = {
    key: 2,
    class: "mobile-results"
}
  , Uy = {
    class: "titles-group"
}
  , Vy = {
    class: "title"
}
  , Hy = {
    class: "values-group"
}
  , jy = {
    class: "value result-value-success"
}
  , qy = {
    class: "titles-group"
}
  , Wy = {
    class: "title"
}
  , Ky = {
    class: "values-group"
}
  , Qy = {
    class: "value result-value-fail"
}
  , Gy = {
    class: "titles-group"
}
  , Yy = {
    class: "title"
}
  , Jy = {
    class: "values-group"
}
  , Xy = {
    class: "value"
}
  , zy = {
    key: 3
}
  , Zy = {
    class: "titles-group"
}
  , e0 = {
    class: "title"
}
  , t0 = {
    class: "title"
}
  , n0 = {
    class: "title"
}
  , s0 = {
    class: "values-group"
}
  , o0 = {
    class: "value result-value-success"
}
  , r0 = {
    class: "value result-value-fail"
}
  , i0 = {
    class: "value"
}
  , a0 = {
    __name: "SingleTestResultInfo",
    props: ["noData", "isSuccess", "correctQuestions", "failedQuestions", "timeElapsed"],
    setup(e) {
        const t = Ve();
        return (n, s) => (k(),
        A("div", {
            class: ie(["outer-test-results-container", {
                mobile: x(t).isMobile
            }])
        }, [_("div", Dy, [e.noData ? (k(),
        A("h3", By, $(n.$t("no_data")), 1)) : (k(),
        A("h3", {
            key: 0,
            class: ie(["result-title", {
                "test-success": e.isSuccess,
                "test-failed": !e.isSuccess
            }])
        }, $(e.isSuccess ? n.$t("successTest") : n.$t("failedTest")), 3)), x(t).isMobile && !e.noData ? (k(),
        A("div", Fy, [_("div", Uy, [_("span", Vy, $(n.$t("successCount")), 1)]), _("div", Hy, [_("span", jy, $(e.correctQuestions), 1)]), _("div", qy, [_("span", Wy, $(n.$t("failedCount")), 1)]), _("div", Ky, [_("span", Qy, $(e.failedQuestions), 1)]), _("div", Gy, [_("span", Yy, $(n.$t("time")), 1)]), _("div", Jy, [_("span", Xy, $(e.timeElapsed), 1)])])) : W("", !0), !x(t).isMobile && !e.noData ? (k(),
        A("div", zy, [_("div", Zy, [_("span", e0, $(n.$t("successCount")), 1), _("span", t0, $(n.$t("failedCount")), 1), _("span", n0, $(n.$t("time")), 1)]), _("div", s0, [_("span", o0, $(e.correctQuestions), 1), _("span", r0, $(e.failedQuestions), 1), _("span", i0, $(e.timeElapsed), 1)])])) : W("", !0)])], 2))
    }
}
  , wf = Pe(a0, [["__scopeId", "data-v-5c18214b"]])
  , l0 = {
    class: "popup-container"
}
  , c0 = {
    class: "popup-content"
}
  , u0 = {
    class: "popup-title"
}
  , f0 = ["src", "alt"]
  , d0 = {
    key: 0,
    class: "popup-text"
}
  , h0 = {
    key: 1,
    class: "popup-subtext"
}
  , p0 = ["innerHTML"]
  , m0 = {
    __name: "CongratulationsDialog",
    props: {
        isVisible: {
            type: Boolean,
            default: !1
        },
        image: {
            type: String,
            required: !0
        },
        title: {
            type: String,
            default: ""
        },
        text: {
            type: String,
            default: ""
        },
        subText: {
            type: String,
            default: ""
        },
        subHtml: {
            type: String,
            default: ""
        }
    },
    emits: ["close"],
    setup(e, {emit: t}) {
        const n = t;
        function s() {
            n("close")
        }
        return (o, r) => e.isVisible ? (k(),
        A("div", {
            key: 0,
            class: "popup-overlay",
            onClick: je(s, ["self"])
        }, [_("div", l0, [_("button", {
            class: "close-button",
            onClick: s
        }, " × "), _("div", c0, [_("h2", u0, $(e.title), 1), _("img", {
            src: e.image,
            alt: e.title,
            class: "popup-image"
        }, null, 8, f0), e.text ? (k(),
        A("p", d0, $(e.text), 1)) : W("", !0), e.subText ? (k(),
        A("p", h0, $(e.subText), 1)) : W("", !0), e.subHtml ? (k(),
        A("div", {
            key: 2,
            class: "popup-subhtml",
            innerHTML: e.subHtml
        }, null, 8, p0)) : W("", !0)])])])) : W("", !0)
    }
}
  , Vl = Pe(m0, [["__scopeId", "data-v-79983551"]])
  , Ef = (e=!1) => {
    const {t} = Le();
    let n = [{
        id: "beginner",
        title: G( () => t("achievement_beginner")),
        description: G( () => t("achievement_beginner_desc")),
        icon: "images/achievement/beginner.png",
        unlocked: !1
    }, {
        id: "amateur",
        title: G( () => t("achievement_amateur")),
        description: G( () => t("achievement_amateur_desc")),
        icon: "images/achievement/amateur.png",
        unlocked: !1
    }, {
        id: "master",
        title: G( () => t("achievement_master")),
        description: G( () => t("achievement_master_desc")),
        icon: "images/achievement/master.png",
        unlocked: !1
    }, {
        id: "expert",
        title: G( () => t("achievement_expert")),
        description: G( () => t("achievement_expert_desc")),
        icon: "images/achievement/expert.png",
        unlocked: !1
    }, {
        id: "connoisseur",
        title: G( () => t("achievement_connoisseur")),
        description: G( () => t("achievement_connoisseur_desc")),
        icon: "images/achievement/connoisseur.png",
        unlocked: !1
    }, {
        id: "profi",
        title: G( () => t("achievement_profi")),
        description: G( () => t("achievement_profi_desc")),
        icon: "images/achievement/profi.png",
        unlocked: !1
    }, {
        id: "specialist",
        title: G( () => t("achievement_specialist")),
        description: G( () => t("achievement_specialist_desc")),
        icon: "images/achievement/specialist.png",
        unlocked: !1
    }, {
        id: "hero",
        title: G( () => t("achievement_hero")),
        description: G( () => t("achievement_hero_desc")),
        icon: "images/achievement/hero.png",
        unlocked: !1
    }, {
        id: "weekly",
        title: G( () => t("achievement_weekly")),
        description: G( () => t("achievement_weekly_desc")),
        icon: "images/achievement/weekly.png",
        unlocked: !1,
        hidden: !0
    }];
    return e || (n = n.filter(s => !s.hidden)),
    ht(n)
}
;
function ji(e, t) {
    let n = {};
    return t != null && t.user_ranks && (e < t.user_ranks.student.threshold ? n = {
        src: "images/rank/newbie.png",
        title: "Newbie"
    } : e < t.user_ranks.master.threshold ? n = {
        src: "images/rank/student.png",
        title: "Student"
    } : e < t.user_ranks.expert.threshold ? n = {
        src: "images/rank/master.png",
        title: "Master"
    } : e < t.user_ranks.profi.threshold ? n = {
        src: "images/rank/expert.png",
        title: "Expert"
    } : e < t.user_ranks.epic.threshold ? n = {
        src: "images/rank/profi.png",
        title: "Profi"
    } : e < t.user_ranks.legend.threshold ? n = {
        src: "images/rank/epic.png",
        title: "Epic"
    } : e < t.user_ranks.mythic.threshold ? n = {
        src: "images/rank/legend.png",
        title: "Legend"
    } : e >= t.user_ranks.mythic.threshold && (n = {
        src: "images/rank/mythic.png",
        title: "Mythic"
    })),
    n
}
const _0 = {
    class: "result"
}
  , g0 = {
    class: "actions-group"
}
  , v0 = {
    __name: "TestResult",
    setup(e) {
        const {t} = Le()
          , n = Je()
          , s = Ve()
          , o = Gs()
          , r = Qs()
          , i = ct()
          , a = Ef(!0)
          , l = V()
          , c = V()
          , u = V()
          , h = V()
          , f = V()
          , m = V()
          , v = V()
          , y = V()
          , S = V()
          , b = r.completed && r.completed.success
          , g = et("setDefaultWindowHeight");
        function E() {
            const J = localStorage.getItem("testPath");
            n.replace({
                path: J || s.origin
            }),
            g()
        }
        function T() {
            n.push({
                path: `/question/${r.type}/1`
            })
        }
        function R(J) {
            const ne = J || [];
            let D = null;
            for (const j in ne)
                if (ne[j]) {
                    D = j;
                    break
                }
            return D
        }
        function C(J, ne) {
            if (!J)
                return;
            const D = R(J);
            if (D) {
                const j = a.find(X => X.id === D);
                j && (c.value = t("user_congratulation"),
                h.value = t("new_achievement"),
                f.value = `<br><b>${t("award")}</b><br>
            <span style="color: #ff00ff; font-size: 22px; font-weight: bold;">${j.title}</span><br><br>
            <b>${t("its_yours_now")}</b><br><span style="color: grey;">(баллы)</span><br>
            <span style="color: #00ff00">+${s.settings.user_achievements[j.id].points}</span>
        `,
                u.value = j.icon,
                l.value = !0)
            }
            r.setNewAchievements(null)
        }
        function L() {
            l.value = !1
        }
        function M(J, ne) {
            const D = Object.keys(s.settings.user_ranks).sort( (se, de) => (s.settings.user_ranks[se].threshold || 0) - (s.settings.user_ranks[de].threshold || 0))
              , j = D.findLastIndex(se => ne >= (s.settings.user_ranks[se].threshold || 0))
              , X = D.findLastIndex(se => J >= (s.settings.user_ranks[se].threshold || 0));
            return X > j ? D[X] : null
        }
        function I(J, ne) {
            var j;
            if (!ne)
                return;
            M(J, ne) && (v.value = t("user_congratulation"),
            y.value = (j = ji(J, s.settings)) == null ? void 0 : j.src,
            S.value = t("new_rank"),
            m.value = !0)
        }
        function K() {
            m.value = !1
        }
        return it( () => r.newAchievements, C),
        it( () => i.data.rank_points, I),
        Hn( () => {}
        ),
        (J, ne) => (k(),
        A(Ee, null, [_("div", _0, [_e(wf, {
            "is-success": x(b),
            "correct-questions": x(r).correctQuestions,
            "failed-questions": x(r).failedQuestions,
            "time-elapsed": x(o).elapsed
        }, null, 8, ["is-success", "correct-questions", "failed-questions", "time-elapsed"]), _("div", g0, [_("button", {
            onClick: ne[0] || (ne[0] = D => E()),
            class: "action-close"
        }, $(J.$t("closeBtn")), 1), _("button", {
            onClick: ne[1] || (ne[1] = D => T()),
            class: "action-result"
        }, $(J.$t("showResult")), 1)])]), _e(Vl, {
            "is-visible": l.value,
            image: u.value,
            title: c.value,
            text: h.value,
            "sub-html": f.value,
            onClose: L
        }, null, 8, ["is-visible", "image", "title", "text", "sub-html"]), _e(Vl, {
            "is-visible": m.value,
            image: y.value,
            title: v.value,
            text: S.value,
            onClose: K
        }, null, 8, ["is-visible", "image", "title", "text"])], 64))
    }
}
  , b0 = {
    class: "cards-title"
}
  , y0 = {
    class: "card-container"
}
  , w0 = ["onClick"]
  , Hl = {
    __name: "TestCards",
    setup(e) {
        const t = Je()
          , n = lt()
          , {locale: s} = Le()
          , o = Ve()
          , r = V("");
        let i = V([]);
        at(async () => {
            await o.load(),
            r.value = n.meta.mode,
            i.value = r.value === "cards" ? o.cards : o.topics
        }
        );
        function a(l) {
            t.push({
                path: `/${r.value.substring(0, r.value.length - 1)}/${l + 1}`
            })
        }
        return (l, c) => (k(),
        A("main", {
            class: ie(["cards", {
                "mode-cards": r.value === "cards",
                "mode-topics": r.value !== "cards"
            }])
        }, [_("h3", b0, $(r.value === "cards" ? l.$t("cardsTitle") : l.$t("topicsTitle")), 1), _("div", y0, [(k(!0),
        A(Ee, null, st(x(i), (u, h) => (k(),
        A("div", {
            class: "card",
            onClick: f => a(h)
        }, $(u.name[x(s)]), 9, w0))), 256))])], 2))
    }
}
  , E0 = "" + new URL("../images/google-icon.png",import.meta.url).href
  , Sf = e => (pt("data-v-7e57c12a"),
e = e(),
mt(),
e)
  , S0 = Sf( () => _("div", {
    class: "stylish_line1"
}, null, -1))
  , T0 = {
    key: 0,
    class: "spacer"
}
  , C0 = {
    class: "content"
}
  , k0 = {
    key: 1,
    class: "spacer"
}
  , $0 = Sf( () => _("div", {
    class: "stylish_line1"
}, null, -1))
  , P0 = {
    __name: "DecoratedPage",
    props: ["floating"],
    setup(e) {
        return (t, n) => (k(),
        A("div", {
            class: ie(["root-container", {
                "root-container-top": e.floating === !1
            }])
        }, [S0, e.floating !== !1 ? (k(),
        A("div", T0)) : W("", !0), _("div", C0, [Jt(t.$slots, "default", {}, void 0, !0)]), e.floating !== !1 ? (k(),
        A("div", k0)) : W("", !0), $0], 2))
    }
}
  , gs = Pe(P0, [["__scopeId", "data-v-7e57c12a"]])
  , R0 = e => (pt("data-v-51328451"),
e = e(),
mt(),
e)
  , O0 = {
    class: "container"
}
  , L0 = ["placeholder"];
const N0 = ["placeholder"]
  , A0 = {
    type: "submit"
}
  , I0 = R0( () => _("img", {
    src: E0,
    class: "google-logo-icon"
}, null, -1))
  , x0 = {
    key: 0,
    class: "error"
};
const M0 = {
    __name: "LoginPage",
    setup(e) {
        const {locale: t, t: n} = Le()
          , s = Je();
        lt(),
        Ve();
        const o = V()
          , r = V()
          , i = V(" ");
        at(async () => {}
        );
        function a(f) {
            if (!f)
                return null;
            const m = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
              , v = /^\+?1?\d{9,15}$/;
            if (m.test(f))
                return "email";
            const y = f.replace(/[^\d+]/g, "");
            return v.test(y) ? "phone" : null
        }
        const l = G( () => a(o.value));
        async function c() {
            try {
                if (i.value = " ",
                !o.value || !r.value) {
                    i.value = n("please_fill_all_fields");
                    return
                }
                const f = a(o.value);
                if (!f) {
                    i.value = n("please_enter_valid_email_or_phone");
                    return
                }
                let m = {
                    password: r.value
                };
                f === "email" ? m.email = o.value : f === "phone" && (m.phone_number = o.value.replace(/[^\d+]/g, "")),
                await fe.post("/auth/login/", m),
                setTimeout( () => s.replace({
                    path: "/me"
                }), 50)
            } catch (f) {
                const m = f.response;
                (m == null ? void 0 : m.status) === 400 && (i.value = n("incorrect_login_or_password")),
                console.error(m)
            }
        }
        async function u() {
            s.push({
                path: "/register"
            })
        }
        async function h() {
            try {
                const f = await fe.get("auth/google/url");
                location.href = f.data.redirect_url
            } catch (f) {
                console.error(f)
            }
        }
        return (f, m) => {
            const v = hs("router-link");
            return k(),
            Te(gs, null, {
                default: Se( () => [_("div", O0, [_("h2", null, $(f.$t("login")), 1), _("form", {
                    onSubmit: je(c, ["prevent"])
                }, [_("div", null, [Fe(_("input", {
                    type: "text",
                    name: "emailOrPhone",
                    placeholder: x(n)("email_or_phone"),
                    "onUpdate:modelValue": m[0] || (m[0] = y => o.value = y),
                    required: ""
                }, null, 8, L0), [[qe, o.value]]), W("", !0), W("", !0)]), _("div", null, [Fe(_("input", {
                    type: "password",
                    name: "password",
                    placeholder: x(n)("password"),
                    "onUpdate:modelValue": m[1] || (m[1] = y => r.value = y),
                    required: ""
                }, null, 8, N0), [[qe, r.value]])]), _("div", null, [_e(v, {
                    to: "/reset_password",
                    class: "link password-reset-link"
                }, {
                    default: Se( () => [ye($(f.$t("forgot_password")), 1)]),
                    _: 1
                })]), _("button", A0, $(f.$t("login")), 1)], 32), _("button", {
                    class: "google-login-button",
                    onClick: h
                }, [I0, ye("   " + $(f.$t("login_with_google")), 1)]), _("button", {
                    class: "register-button",
                    onClick: m[2] || (m[2] = y => u())
                }, $(f.$t("registration")), 1), i.value ? (k(),
                A("div", x0, $(i.value), 1)) : W("", !0), W("", !0)])]),
                _: 1
            })
        }
    }
}
  , jl = Pe(M0, [["__scopeId", "data-v-51328451"]])
  , Wn = "" + new URL("../images/loader.gif",import.meta.url).href
  , or = 6
  , D0 = {
    key: 0,
    class: "container"
}
  , B0 = {
    class: "column"
}
  , F0 = ["placeholder"]
  , U0 = ["placeholder"]
  , V0 = ["placeholder"]
  , H0 = ["placeholder"];
const j0 = {
    class: "full-width"
}
  , q0 = {
    type: "submit",
    class: "submit-button"
}
  , W0 = {
    key: 0
}
  , K0 = {
    key: 1,
    src: Wn
}
  , Q0 = {
    key: 0,
    class: "error"
}
  , G0 = {
    key: 1
}
  , Y0 = {
    __name: "SchoolRegistration",
    setup(e) {
        const {t} = Le()
          , n = Je()
          , s = ct()
          , o = V()
          , r = V()
          , i = V()
          , a = V()
          , l = V()
          , c = V()
          , u = V()
          , h = V()
          , f = V()
          , m = V()
          , v = V()
          , y = V()
          , S = V(" ")
          , b = V(!1);
        async function g() {
            T() && await E()
        }
        async function E() {
            try {
                S.value = " ",
                b.value = !0,
                await fe.post("/school_data/", {
                    username: o.value,
                    email: o.value,
                    password1: r.value,
                    password2: i.value,
                    school_name: a.value,
                    phone_number: l.value,
                    is_school: !0,
                    school_data: {
                        contact_name: c.value,
                        contact_surname: u.value,
                        contact_patronymic: h.value,
                        contact_phone: f.value,
                        license_number: m.value,
                        license_issue_date: v.value,
                        license_valid_until: y.value
                    }
                }),
                await n.push({
                    path: "/login"
                })
            } catch (M) {
                b.value = !1;
                const I = M.response;
                (I.status === 400 || I.status === 500) && (S.value = t("school_registration_failed")),
                console.error(I)
            }
        }
        function T() {
            return C() && R() && L()
        }
        function R() {
            return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(o.value) ? !0 : (S.value = t("please_enter_correct_email"),
            !1)
        }
        function C() {
            return o.value && r.value && l.value && i.value && a.value ? !0 : (S.value = t("please_fill_required_fields"),
            !1)
        }
        function L() {
            let M = r.value.length >= or;
            return M ? (M = r.value === i.value,
            M ? !0 : (S.value = t("passwords_do_not_match"),
            !1)) : (S.value = t("please_specify_lengthy_password"),
            !1)
        }
        return (M, I) => (k(),
        Te(gs, null, {
            default: Se( () => [x(s).logged_in && (x(s).data.is_staff || x(s).data.is_superuser) ? (k(),
            A("div", D0, [_("h2", null, $(M.$t("new_school")), 1), _("form", {
                onSubmit: je(g, ["prevent"]),
                class: "-registration-grid"
            }, [_("div", B0, [_("h3", null, $(M.$t("account_details")), 1), _("div", null, [Fe(_("input", {
                type: "email",
                name: "email",
                placeholder: "Email*",
                "onUpdate:modelValue": I[0] || (I[0] = K => o.value = K)
            }, null, 512), [[qe, o.value]])]), _("div", null, [Fe(_("input", {
                type: "password",
                name: "password",
                placeholder: x(t)("password_required"),
                "onUpdate:modelValue": I[1] || (I[1] = K => r.value = K)
            }, null, 8, F0), [[qe, r.value]])]), _("div", null, [Fe(_("input", {
                type: "password",
                name: "confirmation",
                placeholder: x(t)("password_confirmation_required"),
                "onUpdate:modelValue": I[2] || (I[2] = K => i.value = K)
            }, null, 8, U0), [[qe, i.value]])]), _("div", null, [Fe(_("input", {
                type: "text",
                name: "name",
                placeholder: x(t)("school_name"),
                "onUpdate:modelValue": I[3] || (I[3] = K => a.value = K)
            }, null, 8, V0), [[qe, a.value]])]), _("div", null, [Fe(_("input", {
                type: "text",
                name: "phone",
                placeholder: x(t)("phone_number"),
                "onUpdate:modelValue": I[4] || (I[4] = K => l.value = K)
            }, null, 8, H0), [[qe, l.value]])])]), W("", !0), W("", !0), _("div", j0, [_("button", q0, [b.value ? W("", !0) : (k(),
            A("span", W0, $(M.$t("register")), 1)), b.value ? (k(),
            A("img", K0)) : W("", !0)]), S.value ? (k(),
            A("div", Q0, $(S.value), 1)) : W("", !0)])], 32)])) : (k(),
            A("div", G0, $(x(t)("staff_only_page")), 1))]),
            _: 1
        }))
    }
}
  , J0 = Pe(Y0, [["__scopeId", "data-v-fb40c678"]])
  , X0 = {
    key: 0,
    class: "container"
}
  , z0 = ["placeholder"]
  , Z0 = ["placeholder"]
  , ew = ["placeholder"]
  , tw = ["placeholder"]
  , nw = ["value"]
  , sw = {
    type: "submit"
}
  , ow = {
    key: 0
}
  , rw = {
    key: 1,
    src: Wn
}
  , iw = {
    key: 0,
    class: "error"
}
  , aw = {
    class: "school_owner_prompt"
}
  , lw = {
    class: "school_owner_phone_to"
}
  , cw = {
    class: "school_owner_telegram_to"
}
  , uw = {
    key: 1,
    class: "wait-email"
}
  , fw = ["innerHTML"]
  , dw = {
    class: "registration-code-input"
}
  , hw = {
    class: "code-inputs"
}
  , pw = ["value", "onInput", "onKeydown"]
  , mw = {
    key: 0,
    class: "code-error"
}
  , _w = ["disabled"]
  , gw = {
    key: 0
}
  , vw = {
    key: 1,
    src: Wn
}
  , bw = {
    __name: "UserRegistration",
    setup(e) {
        const {t} = Le()
          , n = Je()
          , s = ct()
          , o = Hi()
          , r = V()
          , i = V()
          , a = V()
          , l = V()
          , c = V(-1)
          , u = V()
          , h = V(" ")
          , f = V(!1)
          , m = V(!1);
        at(async () => {
            s.logged_in && await n.replace({
                path: "/me"
            })
        }
        );
        async function v() {
            S() && await y()
        }
        async function y() {
            var D, j, X, se, de;
            try {
                h.value = " ",
                f.value = !0,
                await fe.post("/auth/registration/", {
                    username: r.value,
                    email: r.value,
                    password1: i.value,
                    password2: a.value,
                    real_name: l.value,
                    phone_number: u.value,
                    driving_school: parseInt(c.value),
                    is_school: !1
                }),
                m.value = !0,
                f.value = !1
            } catch (be) {
                f.value = !1;
                const me = be.response;
                me.status === 400 && ((X = (j = (D = me.data) == null ? void 0 : D.username) == null ? void 0 : j[0]) != null && X.includes("already") ? h.value = t("user_already_exists") : ((de = (se = me.data) == null ? void 0 : se.non_field_errors) == null ? void 0 : de[0]) === "A user with this phone number already exists." && (h.value = t("error_phone_already_exists"))),
                console.error(me)
            }
        }
        function S() {
            return E() && b() && g() && T()
        }
        function b() {
            return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(r.value) ? !0 : (h.value = t("please_enter_correct_email"),
            !1)
        }
        function g() {
            const D = /^\+?\d{9,15}$/;
            if (!u.value)
                return h.value = t("phone_number_required"),
                !1;
            const j = u.value.replace(/[^\d+]/g, "");
            return D.test(j) ? !0 : (h.value = t("please_enter_valid_phone_number"),
            !1)
        }
        function E() {
            return r.value && i.value && u.value && a.value && l.value ? !0 : (h.value = t("please_fill_required_fields"),
            !1)
        }
        function T() {
            let D = i.value.length >= or;
            return D ? (D = i.value === a.value,
            D ? !0 : (h.value = t("passwords_do_not_match"),
            !1)) : (h.value = t("please_specify_lengthy_password"),
            !1)
        }
        function R(D) {
            return D.replace(/[^\d+]/g, "")
        }
        function C(D) {
            const j = D.target.value;
            u.value = R(j)
        }
        const L = V([])
          , M = V("")
          , I = async (D, j) => {
            const X = D.target.value.replace(/\D/g, "")
              , se = M.value.split("");
            se[j] = X,
            M.value = se.join(""),
            X && j < 5 && (await Bn(),
            L.value[j + 1].focus())
        }
          , K = (D, j) => {
            D.key === "Backspace" && !D.target.value && j > 0 && L.value[j - 1].focus()
        }
          , J = async D => {
            D.preventDefault();
            const j = D.clipboardData.getData("text").replace(/\D/g, "").slice(0, 6);
            M.value = j,
            await Bn(),
            j.split("").forEach( (X, se) => {
                L.value[se].value = X
            }
            ),
            L.value[j.length - 1].focus()
        }
          , ne = async () => {
            h.value = "";
            try {
                f.value = !0;
                const D = await fe.post("/auth/verify_email_code/", {
                    email: r.value,
                    code: M.value
                }, {
                    headers: {
                        "Content-Type": "application/json"
                    }
                });
                f.value = !1,
                D.data.success && await n.push("/me")
            } catch (D) {
                f.value = !1,
                D.response ? h.value = t("invalid_email_code") : h.value = t("network_error")
            }
        }
        ;
        return (D, j) => (k(),
        Te(gs, null, {
            default: Se( () => [m.value ? (k(),
            A("div", uw, [_("h2", null, $(D.$t("registration_successful")), 1), _("div", {
                innerHTML: D.$t("wait_registration_email").replace("%EMAIL%", "<b>" + r.value + "</b>")
            }, null, 8, fw), _("div", null, $(D.$t("check_the_spam_folder")), 1), _("div", null, $(D.$t("use_obtained_code_to_login")), 1), _("div", dw, [_("div", hw, [(k(),
            A(Ee, null, st(6, (X, se) => _("input", {
                key: se,
                ref_for: !0,
                ref_key: "inputRefs",
                ref: L,
                value: M.value[se],
                type: "text",
                maxlength: "1",
                pattern: "\\d*",
                onInput: de => I(de, se),
                onKeydown: de => K(de, se),
                onPaste: j[6] || (j[6] = de => J(de))
            }, null, 40, pw)), 64))]), h.value ? (k(),
            A("p", mw, $(h.value), 1)) : W("", !0), _("button", {
                onClick: ne,
                disabled: M.value.length !== 6
            }, [f.value ? W("", !0) : (k(),
            A("span", gw, $(x(t)("verify_code")), 1)), f.value ? (k(),
            A("img", vw)) : W("", !0)], 8, _w)])])) : (k(),
            A("div", X0, [_("h2", null, $(D.$t("new_user")), 1), _("form", {
                onSubmit: je(v, ["prevent"])
            }, [_("div", null, [Fe(_("input", {
                type: "email",
                name: "email",
                placeholder: "Email*",
                "onUpdate:modelValue": j[0] || (j[0] = X => r.value = X)
            }, null, 512), [[qe, r.value]])]), _("div", null, [Fe(_("input", {
                type: "tel",
                name: "phone",
                placeholder: x(t)("phone_number"),
                "onUpdate:modelValue": j[1] || (j[1] = X => u.value = X),
                onInput: C
            }, null, 40, z0), [[qe, u.value]])]), _("div", null, [Fe(_("input", {
                type: "password",
                name: "password",
                placeholder: x(t)("password_required"),
                "onUpdate:modelValue": j[2] || (j[2] = X => i.value = X)
            }, null, 8, Z0), [[qe, i.value]])]), _("div", null, [Fe(_("input", {
                type: "password",
                name: "confirmation",
                placeholder: x(t)("password_confirmation_required"),
                "onUpdate:modelValue": j[3] || (j[3] = X => a.value = X)
            }, null, 8, ew), [[qe, a.value]])]), _("div", null, [Fe(_("input", {
                type: "text",
                name: "name",
                placeholder: x(t)("real_name"),
                "onUpdate:modelValue": j[4] || (j[4] = X => l.value = X)
            }, null, 8, tw), [[qe, l.value]])]), _("div", null, [Fe(_("select", {
                name: "school",
                "onUpdate:modelValue": j[5] || (j[5] = X => c.value = X)
            }, [(k(!0),
            A(Ee, null, st(x(o).items, X => (k(),
            A("option", {
                value: X.id
            }, $(X.title), 9, nw))), 256))], 512), [[Wh, c.value]])]), _("button", sw, [f.value ? W("", !0) : (k(),
            A("span", ow, $(D.$t("to_register")), 1)), f.value ? (k(),
            A("img", rw)) : W("", !0)]), h.value ? (k(),
            A("div", iw, $(h.value), 1)) : W("", !0), _("div", aw, $(D.$t("school_owner_prompt")), 1), _("div", lw, $(D.$t("school_owner_phone_to")), 1), _("div", cw, $(D.$t("school_owner_telegram_to")), 1)], 32)]))]),
            _: 1
        }))
    }
}
  , yw = Pe(bw, [["__scopeId", "data-v-68bf343a"]])
  , Tf = e => (pt("data-v-1915e58e"),
e = e(),
mt(),
e)
  , ww = {
    class: "student-list"
}
  , Ew = Tf( () => _("th", null, "№", -1))
  , Sw = Tf( () => _("th", null, null, -1))
  , Tw = {
    class: "user-number"
}
  , Cw = {
    class: "userpic"
}
  , kw = ["src"]
  , $w = {
    class: "username"
}
  , Pw = {
    class: "rating"
}
  , Rw = {
    class: "points"
}
  , Ow = {
    __name: "StudentList",
    props: ["students", "filter"],
    setup(e) {
        const t = e
          , n = Ve()
          , s = G(i)
          , o = us(t, "filter")
          , r = V(1);
        function i() {
            const l = [];
            let c = 1;
            for (const u of t.students) {
                const h = {
                    id: u.id,
                    number: c++,
                    title: u.real_name,
                    user_pic_url: u.userpic_path || "images/default-user.png",
                    rating: u.rating_pos,
                    points: u.rank_points
                };
                a(h) && l.push(h)
            }
            return [...sr(l, 7)]
        }
        function a(l) {
            var c, u, h;
            return o.value.length < 1 || ((h = (c = l.title) == null ? void 0 : c.toLowerCase()) == null ? void 0 : h.includes((u = o.value) == null ? void 0 : u.toLowerCase()))
        }
        return (l, c) => {
            const u = hs("RouterLink");
            return k(),
            A(Ee, null, [_("table", ww, [_("tr", null, [Ew, Sw, _("th", null, $(l.$t("rating_full_name")), 1), _("th", null, $(l.$t("rating")), 1), _("th", null, $(l.$t("rating_points")), 1)]), (k(!0),
            A(Ee, null, st(s.value[r.value - 1], (h, f) => (k(),
            A("tr", {
                class: ie({
                    prized: f < 3 && r.value === 1
                })
            }, [_("td", Tw, $(h.number), 1), _("td", Cw, [_("img", {
                src: h.user_pic_url
            }, null, 8, kw)]), _("td", $w, [_e(u, {
                to: {
                    path: "/user/" + h.id,
                    force: !0
                }
            }, {
                default: Se( () => [ye($(h.title), 1)]),
                _: 2
            }, 1032, ["to"])]), _("td", Pw, $(h.rating), 1), _("td", Rw, $(h.points), 1)], 2))), 256))]), s.value.length > 1 ? (k(),
            Te(Ys, {
                key: 0,
                "total-items": s.value.length,
                "items-per-page": 1,
                "max-pages-shown": x(n).isMobile ? 3 : 9,
                modelValue: r.value,
                "onUpdate:modelValue": c[0] || (c[0] = h => r.value = h)
            }, null, 8, ["total-items", "max-pages-shown", "modelValue"])) : W("", !0)], 64)
        }
    }
}
  , Lw = Pe(Ow, [["__scopeId", "data-v-1915e58e"]])
  , Nw = "" + new URL("../images/trash-bin.svg",import.meta.url).href
  , Aw = {
    key: 0,
    class: "school"
}
  , Iw = ["title"]
  , xw = {
    key: 3,
    class: "school"
}
  , Mw = {
    __name: "EditableUserName",
    props: ["value", "title", "isSchool", "readonly"],
    emits: ["textSave"],
    setup(e, {emit: t}) {
        const n = e
          , s = t
          , {locale: o, t: r} = Le()
          , i = Ve()
          , a = us(n, "value")
          , l = V(a.value)
          , c = V(!1)
          , u = V(null);
        at( () => {}
        );
        const h = () => {
            n.readonly || (c.value = !0,
            l.value = a.value,
            Bn( () => u.value.focus()))
        }
          , f = () => {
            l.value && (a.value = l.value,
            s("textSave", l.value),
            c.value = !1)
        }
          , m = () => {
            c.value = !1
        }
        ;
        return (v, y) => (k(),
        A("div", {
            class: ie({
                mobile: x(i).isMobile
            })
        }, [e.isSchool && x(o) === "ru" ? (k(),
        A("h3", Aw, $(v.$t("driving_school")), 1)) : W("", !0), c.value ? Fe((k(),
        A("input", {
            key: 2,
            "onUpdate:modelValue": y[0] || (y[0] = S => l.value = S),
            ref_key: "inputRef",
            ref: u,
            onKeyup: [Co(f, ["enter"]), Co(m, ["esc"])],
            onBlur: f,
            class: "borderless-input"
        }, null, 544)), [[qe, l.value]]) : (k(),
        A("h2", {
            key: 1,
            title: e.title,
            class: ie({
                "school-name": e.isSchool,
                readonly: e.readonly,
                editable: !e.readonly
            }),
            onClick: h
        }, $(a.value), 11, Iw)), e.isSchool && x(o) === "en" ? (k(),
        A("h3", xw, $(v.$t("driving_school")), 1)) : W("", !0)], 2))
    }
}
  , Dw = Pe(Mw, [["__scopeId", "data-v-582845e3"]])
  , Bw = ["title"]
  , Fw = ["value"]
  , Uw = ["value", "selected"]
  , Vw = {
    __name: "SelectableText",
    props: ["items", "selected", "title", "readonly"],
    emits: ["valueSave"],
    setup(e, {emit: t}) {
        const n = e
          , s = t
          , o = G( () => {
            var h, f;
            return n.selected ? (f = n.items.find(m => m.id === n.selected)) == null ? void 0 : f.title : (h = n.items.find(m => m.id === -1)) == null ? void 0 : h.title
        }
        )
          , r = V(us(n, "selected"))
          , i = V()
          , a = V(!1)
          , l = () => {
            n.readonly || (a.value = !0)
        }
          , c = () => {
            var f;
            const h = parseInt(i.value.value);
            o.value = (f = n.items.find(m => m.id === h)) == null ? void 0 : f.title,
            s("valueSave", h),
            a.value = !1
        }
          , u = () => {
            a.value = !1
        }
        ;
        return (h, f) => a.value ? (k(),
        A("select", {
            key: 1,
            value: r.value || -1,
            ref_key: "selectRef",
            ref: i,
            onKeyup: [Co(c, ["enter"]), Co(u, ["esc"])],
            onBlur: c,
            class: "item-select"
        }, [(k(!0),
        A(Ee, null, st(e.items, m => (k(),
        A("option", {
            value: m.id,
            selected: e.selected === m.id ? !0 : null
        }, $(m.title), 9, Uw))), 256))], 40, Fw)) : (k(),
        A("div", {
            key: 0,
            title: e.title,
            class: ie({
                readonly: e.readonly,
                editable: !e.readonly
            }),
            onClick: l
        }, $(o.value), 11, Bw))
    }
}
  , Hw = Pe(Vw, [["__scopeId", "data-v-7d022204"]])
  , Cf = e => (pt("data-v-e7bae1b2"),
e = e(),
mt(),
e)
  , jw = {
    key: 0,
    class: "h-container"
}
  , qw = {
    class: "userpic-container"
}
  , Ww = ["title", "src"]
  , Kw = ["title"]
  , Qw = Cf( () => _("img", {
    class: "trash-bin-icon",
    src: Nw
}, null, -1))
  , Gw = [Qw]
  , Yw = {
    key: 0,
    class: "school-name-container"
}
  , Jw = {
    key: 0,
    class: "your-students-container"
}
  , Xw = {
    class: "your-students"
}
  , zw = {
    class: "student-number"
}
  , Zw = {
    key: 1,
    class: "user-rating"
}
  , e1 = ["src"]
  , t1 = {
    class: "rating-title"
}
  , n1 = Cf( () => _("br", null, null, -1))
  , s1 = {
    key: 1,
    class: "school-separator"
}
  , o1 = {
    __name: "UserInfo",
    props: ["user", "isPublic"],
    setup(e, {expose: t}) {
        const n = e
          , {t: s} = Le()
          , o = Ve()
          , r = Hi()
          , i = us(n, "user")
          , a = V()
          , l = V()
          , c = V("images/empty.png")
          , u = V("images/empty.png")
          , h = V(!1);
        async function f(g) {
            var E;
            await o.load("settings"),
            c.value = g.data.userpic_path || (n.isPublic ? "images/default-user.png" : "images/default-user-upload.png"),
            h.value = !!g.data.userpic_path,
            u.value = (E = ji(g.data.rank_points || 0, o.settings)) == null ? void 0 : E.src
        }
        async function m(g) {
            i.value.data.real_name = g,
            await fe.post("user/update_name/", {
                data: g
            })
        }
        async function v(g) {
            i.value.data.driving_school = g,
            await fe.post("user/update_school/", {
                data: g
            })
        }
        function y(g) {
            n.isPublic || a.value.click()
        }
        async function S(g) {
            let E = g.target.files[0]
              , T = new FormData;
            T.append("file", E);
            try {
                const R = await fe.post("user/update_userpic/", T);
                c.value = i.value.data.userpic_path = R.data.userpic_path,
                h.value = !0
            } catch (R) {
                console.error(R)
            }
        }
        async function b() {
            try {
                await fe.delete("user/delete_userpic/"),
                h.value = !1,
                c.value = "images/default-user-upload.png"
            } catch (g) {
                console.error(g)
            }
        }
        return t({
            onUserLoaded: f
        }),
        (g, E) => {
            var T, R, C;
            return k(),
            A("div", {
                class: ie(["userinfo-container", {
                    mobile: x(o).isMobile
                }])
            }, [(T = i.value) != null && T.data.id ? (k(),
            A("div", jw, [_("div", {
                class: ie(["user-info", {
                    school: i.value.data.is_school
                }])
            }, [_("div", qw, [_("img", {
                class: ie(["userpic", {
                    readonly: e.isPublic
                }]),
                title: e.isPublic ? "" : x(s)("change_userpic"),
                src: c.value,
                onClick: y,
                ref_key: "userpicImage",
                ref: l
            }, null, 10, Ww), !e.isPublic && h.value ? (k(),
            A("div", {
                key: 0,
                class: "delete-icon",
                onClick: b,
                title: x(s)("delete_userpic")
            }, Gw, 8, Kw)) : W("", !0)]), _("input", {
                type: "file",
                id: "userpic-file",
                ref_key: "userpicFile",
                ref: a,
                onChange: S
            }, null, 544), _e(Dw, {
                title: e.isPublic ? "" : x(s)("change_username"),
                value: i.value.data.real_name,
                onTextSave: m,
                "is-school": i.value.data.is_school,
                readonly: e.isPublic
            }, null, 8, ["title", "value", "is-school", "readonly"]), i.value.data.is_school ? W("", !0) : (k(),
            A("div", Yw, [_e(Hw, {
                title: e.isPublic ? "" : x(s)("choose_school"),
                items: x(r).items,
                readonly: e.isPublic,
                selected: i.value.data.driving_school,
                onValueSave: v
            }, null, 8, ["title", "items", "readonly", "selected"])]))], 2), i.value.data.is_school ? (k(),
            A("div", Jw, [_("div", Xw, [_("h3", null, $(x(o).isMobile ? g.$t("your_student_number") : g.$t("your_student_number").replace("-", "")), 1), _("div", zw, $(((R = i.value.students) == null ? void 0 : R.length) || 0), 1)])])) : (k(),
            A("div", Zw, [_("img", {
                class: "rating-status-image",
                src: u.value
            }, null, 8, e1), _("div", t1, [ye("..."), n1, ye($(e.isPublic ? g.$t("rating") : g.$t("your_rating")), 1)])]))])) : W("", !0), (C = i.value) != null && C.data.is_school ? (k(),
            A("hr", s1)) : W("", !0)], 2)
        }
    }
}
  , r1 = Pe(o1, [["__scopeId", "data-v-e7bae1b2"]])
  , i1 = "" + new URL("../images/stat-cards.png",import.meta.url).href
  , a1 = "" + new URL("../images/stat-topics.png",import.meta.url).href
  , l1 = "" + new URL("../images/stat-exam.png",import.meta.url).href
  , c1 = {
    class: "card-title"
}
  , u1 = {
    class: "score"
}
  , f1 = {
    key: 0,
    class: "time"
}
  , d1 = {
    __name: "TestResultsList",
    props: ["results", "cards", "split"],
    setup(e) {
        const t = e
          , {locale: n} = Le()
          , s = Ve()
          , o = G(r);
        function r() {
            var l;
            const i = t.cards
              , a = [];
            for (const c of i) {
                const u = (l = t.results) == null ? void 0 : l.find(f => f.test_id === c.id)
                  , h = {
                    title: c.name[n.value],
                    questions: _f(c.questions).length,
                    correct_answers: u ? u.correct_answers : 0,
                    time: u ? u.time : "00:00",
                    success: u == null ? void 0 : u.success
                };
                a.push(h)
            }
            return a
        }
        return (i, a) => (k(),
        A("div", {
            class: ie(["results-grid", {
                mobile: x(s).isMobile,
                "split-grid": e.split,
                "topic-grid": !e.split
            }])
        }, [(k(!0),
        A(Ee, null, st(o.value, (l, c) => (k(),
        A("div", {
            key: c,
            class: ie(["result-card attempted", {
                success: l.success,
                fail: !l.success,
                "topic-card": !e.split
            }])
        }, [_("div", c1, $(l.title), 1), _("div", u1, $(l.correct_answers) + "/" + $(l.questions), 1), e.split ? W("", !0) : (k(),
        A("div", f1, $(l.time), 1))], 2))), 128))], 2))
    }
}
  , ql = Pe(d1, [["__scopeId", "data-v-5e9eac9c"]])
  , rr = jn("profile", () => {
    const e = ht({})
      , t = bf()
      , n = V(!1);
    async function s(r, i) {
        let a = !1;
        try {
            const l = await fe.get(`user/${r}/`);
            Object.assign(e, l.data),
            a = !0,
            i && (await t.loadTestResults(r),
            await t.loadFailedQuestions(r))
        } catch (l) {
            o(),
            console.error(l)
        }
        return n.value = a,
        a
    }
    function o() {
        for (const r of Object.keys(e))
            e[r] = null
    }
    return {
        data: e,
        load: s,
        reset: o,
        initialized: n,
        ...t
    }
}
)
  , qi = e => (pt("data-v-cd83b2f6"),
e = e(),
mt(),
e)
  , h1 = {
    class: "top-bar"
}
  , p1 = {
    class: "nav-buttons"
}
  , m1 = qi( () => _("img", {
    class: "heading-button-image",
    src: i1
}, null, -1))
  , _1 = qi( () => _("img", {
    class: "heading-button-image",
    src: a1
}, null, -1))
  , g1 = qi( () => _("img", {
    class: "heading-button-image",
    src: l1
}, null, -1))
  , v1 = {
    __name: "UserStats",
    setup(e) {
        const t = Je()
          , n = lt()
          , s = Ve()
          , o = ct()
          , r = rr()
          , i = ht({})
          , a = V("card-results-btn");
        at( () => l());
        async function l() {
            let u = !1;
            try {
                n.params.id ? (u = await r.load(n.params.id, !0),
                Object.assign(i, r)) : (u = await o.load(),
                Object.assign(i, o))
            } catch (h) {
                console.error(h)
            }
            u || await t.push({
                path: "/login"
            })
        }
        function c(u) {
            a.value = u.target.closest(".nav-button").id
        }
        return (u, h) => {
            var f, m, v, y;
            return i != null && i.data && !i.data.is_school ? (k(),
            A("div", {
                key: 0,
                class: ie(["stats-container", {
                    mobile: x(s).isMobile
                }])
            }, [_("div", h1, [_("div", p1, [_("div", {
                class: ie(["nav-button", {
                    selected: a.value === "card-results-btn"
                }]),
                id: "card-results-btn",
                onClick: c
            }, [m1, ye(" " + $(u.$t("modeCards")), 1)], 2), _("div", {
                class: ie(["nav-button", {
                    selected: a.value === "topic-results-btn"
                }]),
                id: "topic-results-btn",
                onClick: c
            }, [_1, ye(" " + $(u.$t("topics")), 1)], 2), _("div", {
                class: ie(["nav-button", {
                    selected: a.value === "exam-results-btn"
                }]),
                id: "exam-results-btn",
                onClick: c
            }, [g1, ye(" " + $(u.$t("modeExam")), 1)], 2)])]), _("div", {
                class: ie(["content-container", {
                    mobile: x(s).isMobile
                }])
            }, [a.value === "card-results-btn" ? (k(),
            Te(ql, {
                key: 0,
                results: i.cardResults,
                cards: x(s).cards,
                split: !0
            }, null, 8, ["results", "cards"])) : W("", !0), a.value === "topic-results-btn" ? (k(),
            Te(ql, {
                key: 1,
                results: i.topicResults,
                cards: x(s).topics
            }, null, 8, ["results", "cards"])) : W("", !0), a.value === "exam-results-btn" ? (k(),
            Te(wf, {
                key: 2,
                "no-data": !i.examResults,
                "is-success": (f = i.examResults) == null ? void 0 : f.success,
                "correct-questions": (m = i.examResults) == null ? void 0 : m.correct_answers,
                "failed-questions": (v = i.examResults) == null ? void 0 : v.incorrect_answers,
                "time-elapsed": (y = i.examResults) == null ? void 0 : y.time
            }, null, 8, ["no-data", "is-success", "correct-questions", "failed-questions", "time-elapsed"])) : W("", !0)], 2)], 2)) : W("", !0)
        }
    }
}
  , Wl = Pe(v1, [["__scopeId", "data-v-cd83b2f6"]])
  , b1 = "" + new URL("../images/achievements.png",import.meta.url).href
  , y1 = "" + new URL("../images/statistics.png",import.meta.url).href
  , w1 = "" + new URL("../images/pencil.png",import.meta.url).href
  , kf = e => (pt("data-v-8e4e288d"),
e = e(),
mt(),
e)
  , E1 = {
    class: "rating"
}
  , S1 = {
    href: "https://jyldyz.kg/user_rating",
    target: "_blank"
}
  , T1 = {
    class: "rating-position-title"
}
  , C1 = {
    class: "rating-position-value"
}
  , k1 = {
    class: "user-button rating-points-button"
}
  , $1 = {
    class: "rating-points-title"
}
  , P1 = {
    class: "rating-points-value"
}
  , R1 = {
    class: "user-activity-buttons"
}
  , O1 = {
    class: "user-button user-active-status"
}
  , L1 = {
    class: "activity-title"
}
  , N1 = {
    class: "activity-status"
}
  , A1 = {
    class: "achievements-images"
}
  , I1 = {
    key: 0,
    class: "achievement-badge",
    src: b1
}
  , x1 = {
    class: "achivement-star"
}
  , M1 = {
    key: 0,
    class: "user-stats-buttons"
}
  , D1 = kf( () => _("img", {
    class: "button-img",
    src: y1
}, null, -1))
  , B1 = {
    class: "button-title"
}
  , F1 = {
    class: "my-mistakes-container"
}
  , U1 = kf( () => _("img", {
    class: "button-img",
    src: w1
}, null, -1))
  , V1 = {
    class: "error-number"
}
  , H1 = {
    class: "button-title"
}
  , j1 = {
    __name: "ProfileButtons",
    props: ["user", "isPublic"],
    setup(e) {
        const {locale: t, t: n} = Le()
          , s = e
          , o = Je()
          , r = lt()
          , i = Ve()
          , a = ct()
          , l = G( () => a.data.id === s.user.data.driving_school || !s.isPublic)
          , c = G(v)
          , u = V(void 0);
        function h() {}
        function f() {
            r.params.id ? o.push({
                path: "/mistakes/" + r.params.id
            }) : o.push({
                path: "/mistakes"
            })
        }
        function m() {
            r.params.id ? o.push({
                path: "/stats/" + r.params.id
            }) : o.push({
                path: "/stats"
            })
        }
        function v() {
            return s.user.data.inactive_days ? s.user.data.inactive_days > 0 ? `${n("status_inactive")} - ${s.user.data.inactive_days} ${n("days")}` : n("status_inactive") : n("status_active")
        }
        function y(b) {
            r.params.id ? o.push({
                path: "/achievements/" + r.params.id
            }) : o.push({
                path: "/achievements"
            })
        }
        at(async () => {
            await S()
        }
        );
        async function S() {
            var b;
            try {
                const g = ((b = s.user.data) == null ? void 0 : b.achievements) || {};
                g && (u.value = Object.values(g).filter(Boolean).length)
            } catch (g) {
                console.error(g),
                u.value = 0
            }
        }
        return (b, g) => {
            var E;
            return k(),
            A("div", {
                class: ie(["button-container", {
                    public: !l.value,
                    mobile: x(i).isMobile
                }])
            }, [_("div", E1, [_("div", {
                class: "user-button rating-position-button",
                onClick: h
            }, [_("a", S1, [_("h3", T1, $(b.$t("rating_position_title")), 1), _("div", C1, $(e.user.data.rating_pos || "-"), 1)])]), _("div", k1, [_("h3", $1, $(e.isPublic ? b.$t("rating_points") : b.$t("rating_points_title")), 1), _("div", P1, $(e.user.data.rank_points || 0), 1)])]), _("div", R1, [_("div", O1, [_("div", L1, $(x(n)("activity_days")), 1), _("div", N1, $(c.value), 1)]), _("div", {
                class: "user-button user-achievements",
                onClick: y
            }, [_("div", {
                class: ie(["achievements-container", {
                    show: u.value !== void 0
                }])
            }, [_("div", A1, [u.value === 0 ? (k(),
            A("img", I1)) : (k(!0),
            A(Ee, {
                key: 1
            }, st(u.value, T => (k(),
            A("span", x1, "⭐"))), 256))]), _("div", {
                class: ie(["achievements-title", {
                    margin: u.value
                }])
            }, $(x(n)("achievements_title")), 3)], 2)])]), l.value ? (k(),
            A("div", M1, [_("div", {
                class: "user-button user-stats-button",
                onClick: m
            }, [D1, _("div", B1, $(b.$t("stats")), 1)]), _("div", {
                class: "user-button user-errors-button",
                onClick: f
            }, [_("div", F1, [U1, _("div", V1, $(((E = e.user.failedQuestions) == null ? void 0 : E.length) || 0), 1)]), _("div", H1, $(b.$t("my_mistakes")), 1)])])) : W("", !0)], 2)
        }
    }
}
  , q1 = Pe(j1, [["__scopeId", "data-v-8e4e288d"]])
  , W1 = e => (pt("data-v-68940237"),
e = e(),
mt(),
e)
  , K1 = {
    class: "progress-container"
}
  , Q1 = {
    class: "progress-caption"
}
  , G1 = {
    class: "progress-text"
}
  , Y1 = W1( () => _("div", {
    class: "separator"
}, null, -1))
  , J1 = {
    class: "progress-items"
}
  , X1 = {
    class: "progress-bar-container"
}
  , z1 = {
    __name: "ResultsProgressBar",
    props: ["caption", "done", "total"],
    setup(e) {
        return (t, n) => (k(),
        A("div", K1, [_("div", Q1, [_("div", G1, $(e.caption), 1), Y1, _("div", J1, $(e.done + "/" + e.total), 1)]), _("div", X1, [_("div", {
            class: "progress-bar",
            style: Vn({
                width: e.done / e.total * 100 + "%"
            })
        }, null, 4)])]))
    }
}
  , Sr = Pe(z1, [["__scopeId", "data-v-68940237"]])
  , Z1 = {
    class: "gauge-container"
}
  , eE = {
    class: "gauge-cover"
}
  , tE = {
    __name: "ResultsProgressGauge",
    props: ["progress"],
    setup(e) {
        const t = e
          , n = G(s);
        function s() {
            if (t.progress < 30)
                return "#ff503d";
            if (t.progress >= 30 && t.progress < 70)
                return "#fff30e";
            if (t.progress >= 70)
                return "#43ff3d"
        }
        return (o, r) => (k(),
        A("div", Z1, [_("div", {
            class: "gauge",
            style: Vn({
                background: `conic-gradient(${n.value} ${e.progress}%, #d2d1d7 0)`
            })
        }, [_("div", eE, $(e.progress) + "%", 1)], 4)]))
    }
}
  , nE = Pe(tE, [["__scopeId", "data-v-2e76af14"]])
  , sE = {
    class: "stats"
}
  , oE = {
    class: "overall-progress"
}
  , rE = {
    class: "partial-progress"
}
  , iE = {
    __name: "OverallStats",
    props: ["data"],
    setup(e) {
        const n = us(e, "data")
          , {locale: s, t: o} = Le()
          , r = Ve()
          , i = G( () => n.value.solved_questions || 0)
          , a = G( () => n.value.solved_cards || 0)
          , l = G( () => n.value.solved_topics || 0)
          , c = G(u);
        function u() {
            let f = i.value / vo.value;
            return (isNaN(f) || !isFinite(f)) && (f = 0),
            Math.round(f * 100)
        }
        return (h, f) => x(vo) && n.value.id && x(r).cards.length && x(r).topics.length ? (k(),
        A("div", {
            key: 0,
            class: ie(["stats-container", {
                mobile: x(r).isMobile
            }])
        }, [_("div", sE, [_("div", oE, [_("h3", null, $(h.$t("exam_readiness")), 1), _e(nE, {
            progress: c.value
        }, null, 8, ["progress"])]), _("div", rE, [_e(Sr, {
            caption: x(o)("solved_questions"),
            done: i.value,
            total: x(vo)
        }, null, 8, ["caption", "done", "total"]), _e(Sr, {
            caption: x(o)("solved_cards"),
            done: a.value,
            total: x(r).cards.length
        }, null, 8, ["caption", "done", "total"]), _e(Sr, {
            caption: x(o)("solved_topics"),
            done: l.value,
            total: x(r).topics.length
        }, null, 8, ["caption", "done", "total"])])])], 2)) : W("", !0)
    }
}
  , aE = Pe(iE, [["__scopeId", "data-v-45555d80"]])
  , lE = {
    key: 1,
    class: "student-list-container"
}
  , cE = ["placeholder"]
  , uE = {
    class: "school-users-container"
}
  , fE = {
    key: 2,
    class: "user-stats-container"
}
  , dE = {
    key: 0,
    class: "overall-stats-container"
}
  , hE = {
    __name: "PersonalPage",
    setup(e) {
        const {t, locale: n} = Le()
          , s = Je()
          , o = lt()
          , r = Ve()
          , i = ct()
          , a = rr()
          , l = V()
          , c = V()
          , u = V("")
          , h = G( () => o.name === "user");
        at( () => f()),
        it( () => o.fullPath, (m, v) => {
            m && f()
        }
        );
        async function f() {
            var m, v;
            try {
                o.params.id ? (a.initialized = !1,
                await a.load(o.params.id, !0),
                l.value = a) : (await i.load(),
                l.value = i)
            } catch (y) {
                console.error(y)
            }
            if ((m = l.value) != null && m.initialized)
                l.value.data.is_school && _o(l.value.data) && (l.value.data.school_cabinet_url.startsWith("http") ? location.href = l.value.data.school_cabinet_url : location.href = location.origin + l.value.data.school_cabinet_url);
            else {
                await s.push({
                    path: "/login"
                });
                return
            }
            await ((v = c.value) == null ? void 0 : v.onUserLoaded(l.value))
        }
        return (m, v) => {
            var y, S, b, g, E;
            return k(),
            A(Ee, null, [x(_o)((y = l.value) == null ? void 0 : y.data) ? W("", !0) : (k(),
            Te(r1, {
                key: 0,
                user: l.value,
                "is-public": h.value,
                ref_key: "userInfo",
                ref: c
            }, null, 8, ["user", "is-public"])), !x(_o)((S = l.value) == null ? void 0 : S.data) && ((b = l.value) != null && b.initialized) && l.value.data.is_school ? (k(),
            A("div", lE, [_("div", {
                class: ie(["user-search-container", {
                    mobile: x(r).isMobile
                }])
            }, [Fe(_("input", {
                placeholder: x(t)("enter_real_name"),
                class: "student-filter-input",
                type: "text",
                "onUpdate:modelValue": v[0] || (v[0] = T => u.value = T)
            }, null, 8, cE), [[qe, u.value]])], 2), _("div", uE, [_e(Lw, {
                students: l.value.students,
                filter: u.value
            }, null, 8, ["students", "filter"])])])) : W("", !0), (g = l.value) != null && g.initialized && !l.value.data.is_school ? (k(),
            A("div", fE, [_e(q1, {
                user: l.value,
                "is-public": h.value
            }, null, 8, ["user", "is-public"]), (E = l.value) != null && E.initialized && !l.value.data.is_school ? (k(),
            A("div", dE, [_e(aE, {
                data: l.value.data
            }, null, 8, ["data"])])) : W("", !0)])) : W("", !0)], 64)
        }
    }
}
  , Kl = Pe(hE, [["__scopeId", "data-v-05988833"]])
  , pE = {
    key: 0,
    class: "container"
}
  , mE = {
    type: "submit"
}
  , _E = {
    key: 0
}
  , gE = {
    key: 1,
    src: Wn
}
  , vE = {
    key: 0,
    class: "error"
}
  , bE = {
    key: 1,
    class: "wait-email"
}
  , yE = {
    __name: "RequestPasswordReset",
    setup(e) {
        const {t} = Le()
          , n = V()
          , s = V(" ")
          , o = V(!1)
          , r = V(!1);
        async function i() {
            if (a())
                try {
                    s.value = " ",
                    o.value = !0,
                    await fe.post("/auth/password/reset/", {
                        email: n.value
                    }),
                    r.value = !0,
                    o.value = !1
                } catch (c) {
                    o.value = !1;
                    const u = c.response;
                    u.status,
                    console.error(u)
                }
        }
        function a() {
            return l()
        }
        function l() {
            let c = !!n.value;
            return c = c && /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(n.value),
            c ? !0 : (s.value = t("please_enter_correct_email"),
            !1)
        }
        return (c, u) => (k(),
        Te(gs, null, {
            default: Se( () => [r.value ? W("", !0) : (k(),
            A("div", pE, [_("h2", null, $(c.$t("password_reset")), 1), _("form", {
                onSubmit: je(i, ["prevent"])
            }, [_("div", null, [Fe(_("input", {
                type: "email",
                name: "email",
                placeholder: "Email",
                "onUpdate:modelValue": u[0] || (u[0] = h => n.value = h)
            }, null, 512), [[qe, n.value]])]), _("button", mE, [o.value ? W("", !0) : (k(),
            A("span", _E, $(c.$t("do_password_reset")), 1)), o.value ? (k(),
            A("img", gE)) : W("", !0)]), s.value ? (k(),
            A("div", vE, $(s.value), 1)) : W("", !0)], 32)])), r.value ? (k(),
            A("div", bE, [_("h2", null, $(c.$t("password_reset")), 1), _("b", null, $(c.$t("wait_password_reset_email").replace("%EMAIL%", n.value)), 1)])) : W("", !0)]),
            _: 1
        }))
    }
}
  , wE = Pe(yE, [["__scopeId", "data-v-b30ec131"]])
  , EE = {
    key: 0,
    class: "container"
}
  , SE = ["placeholder"]
  , TE = ["placeholder"]
  , CE = {
    type: "submit"
}
  , kE = {
    key: 0
}
  , $E = {
    key: 1,
    src: Wn
}
  , PE = {
    key: 0,
    class: "error"
}
  , RE = {
    key: 1,
    class: "container reset-notice"
}
  , OE = {
    __name: "ConfirmPasswordReset",
    setup(e) {
        const {t} = Le()
          , n = Je()
          , s = lt()
          , o = ct()
          , r = V()
          , i = V()
          , a = V(" ")
          , l = V(!1)
          , c = V(!1);
        V(!1);
        const u = s.meta.mode
          , h = V(t(u === "change" ? "changing_password" : "password_reset"));
        async function f() {
            if (y())
                try {
                    a.value = " ",
                    l.value = !0,
                    u === "change" ? await v() : await m(),
                    c.value = !0,
                    l.value = !1,
                    u === "change" && (await o.load(!0),
                    o.data.login_redirect_url && (location.href = o.data.login_redirect_url),
                    await n.replace({
                        path: "/me"
                    }))
                } catch (g) {
                    l.value = !1;
                    const E = g.response;
                    E.status === 400 && (a.value = t("password_reset_error")),
                    console.error(E)
                }
        }
        async function m() {
            const g = location.hash.replace(/^.*\?/, "?")
              , E = new URLSearchParams(g)
              , T = E.get("uid")
              , R = E.get("token");
            await fe.post("/auth/password/reset/confirm/", {
                new_password1: r.value,
                new_password2: i.value,
                uid: T,
                token: R
            })
        }
        async function v() {
            await fe.post("/auth/password/change/", {
                new_password1: r.value,
                new_password2: i.value
            })
        }
        function y() {
            return S() && b()
        }
        function S() {
            return r.value && i.value ? !0 : (a.value = t("please_fill_required_fields"),
            !1)
        }
        function b() {
            let g = r.value.length >= or;
            return g ? (g = r.value === i.value,
            g ? !0 : (a.value = t("passwords_do_not_match"),
            !1)) : (a.value = t("please_specify_lengthy_password"),
            !1)
        }
        return (g, E) => (k(),
        Te(gs, null, {
            default: Se( () => [c.value ? W("", !0) : (k(),
            A("div", EE, [_("h2", null, $(h.value), 1), _("form", {
                onSubmit: je(f, ["prevent"])
            }, [_("div", null, [Fe(_("input", {
                type: "password",
                name: "password",
                placeholder: x(t)("new_password"),
                "onUpdate:modelValue": E[0] || (E[0] = T => r.value = T)
            }, null, 8, SE), [[qe, r.value]])]), _("div", null, [Fe(_("input", {
                type: "password",
                name: "confirmation",
                placeholder: x(t)("password_confirmation_required"),
                "onUpdate:modelValue": E[1] || (E[1] = T => i.value = T)
            }, null, 8, TE), [[qe, i.value]])]), _("button", CE, [l.value ? W("", !0) : (k(),
            A("span", kE, $(g.$t("save_password")), 1)), l.value ? (k(),
            A("img", $E)) : W("", !0)]), a.value ? (k(),
            A("div", PE, $(a.value), 1)) : W("", !0)], 32)])), c.value ? (k(),
            A("div", RE, $(x(t)("use_your_new_password")), 1)) : W("", !0)]),
            _: 1
        }))
    }
}
  , LE = Pe(OE, [["__scopeId", "data-v-1585667b"]])
  , NE = {
    key: 0,
    class: "login-box"
}
  , AE = {
    key: 1,
    class: "error"
}
  , IE = {
    __name: "GoogleLogin",
    setup(e) {
        const {t} = Le()
          , n = Je()
          , s = V()
          , o = ct();
        return Hn(async () => {
            const r = location.hash.replace(/^.*\?/, "?")
              , a = new URLSearchParams(r).get("code");
            if (a)
                try {
                    o.logged_in || await fe.post("/auth/google/login/", {
                        code: a
                    }),
                    setTimeout( () => {
                        n.replace({
                            path: "/me"
                        })
                    }
                    , 50)
                } catch (l) {
                    const c = l.response;
                    s.value = t("social_authorization_error"),
                    console.error(c)
                }
            else
                await n.replace({
                    path: "/login"
                })
        }
        ),
        (r, i) => (k(),
        Te(gs, null, {
            default: Se( () => [s.value ? W("", !0) : (k(),
            A("div", NE, $(r.$t("please_close_this_page")), 1)), s.value ? (k(),
            A("div", AE, $(s.value), 1)) : W("", !0)]),
            _: 1
        }))
    }
}
  , xE = Pe(IE, [["__scopeId", "data-v-adfcf635"]])
  , $f = "" + new URL("../images/spinner.svg",import.meta.url).href
  , Pn = e => (pt("data-v-cda99cb1"),
e = e(),
mt(),
e)
  , ME = Pn( () => _("div", {
    class: "stylish_line1"
}, null, -1))
  , DE = {
    class: "rating-table-container"
}
  , BE = {
    class: "rating-title"
}
  , FE = Pn( () => _("th", null, "№", -1))
  , UE = Pn( () => _("th", null, null, -1))
  , VE = Pn( () => _("th", null, null, -1))
  , HE = {
    class: "user-number"
}
  , jE = {
    class: "rank-image"
}
  , qE = ["src", "title"]
  , WE = {
    class: "userpic"
}
  , KE = ["src"]
  , QE = {
    class: "username"
}
  , GE = Pn( () => _("br", null, null, -1))
  , YE = {
    class: "school-name"
}
  , JE = {
    class: "rank"
}
  , XE = Pn( () => _("th", null, "№", -1))
  , zE = Pn( () => _("th", null, null, -1))
  , ZE = Pn( () => _("th", null, null, -1))
  , eS = {
    class: "user-number"
}
  , tS = {
    class: "rank-image"
}
  , nS = ["src", "title"]
  , sS = {
    class: "userpic"
}
  , oS = ["src"]
  , rS = {
    class: "username"
}
  , iS = {
    class: "rank"
}
  , aS = {
    class: "school-name"
}
  , lS = {
    __name: "UserRating",
    setup(e) {
        const t = Ve()
          , n = V([])
          , s = V(!1)
          , o = V(1);
        return at(async () => {
            try {
                await t.load("settings");
                const r = await fe.get("data/user_rating");
                for (let i = 0; i < r.data.length; ++i) {
                    r.data[i].index = i + 1,
                    r.data[i].real_name = pf(r.data[i].real_name);
                    const a = ji(r.data[i].rank_points, t.settings);
                    r.data[i].rankImgSrc = a == null ? void 0 : a.src,
                    r.data[i].rankTitle = a == null ? void 0 : a.title
                }
                n.value = [...sr(r.data, t.isMobile ? 10 : 12)],
                s.value = !0
            } catch (r) {
                console.error(r)
            }
        }
        ),
        (r, i) => {
            const a = hs("RouterLink");
            return k(),
            A("div", {
                class: ie(["user-rating-container", {
                    mobile: x(t).isMobile
                }])
            }, [ME, _("div", DE, [_("h2", BE, $(r.$t("user_rating_title")), 1), _("img", {
                class: ie(["spinner-image", {
                    hidden: s.value
                }]),
                src: $f
            }, null, 2), x(t).isMobile ? (k(),
            A("table", {
                key: 0,
                class: ie(["user-rating", {
                    "displayed-table": s.value
                }])
            }, [_("tr", null, [FE, UE, VE, _("th", null, $(r.$t("rating_full_name") + "/" + r.$t("driving_school")), 1), _("th", null, $(r.$t("rating_points")), 1)]), (k(!0),
            A(Ee, null, st(n.value[o.value - 1], (l, c) => (k(),
            A("tr", {
                class: ie({
                    prized: c < 3 && o.value === 1
                })
            }, [_("td", HE, $(l.index), 1), _("td", jE, [_("img", {
                src: l.rankImgSrc,
                title: l.rankTitle
            }, null, 8, qE)]), _("td", WE, [_("img", {
                src: l.userpic_path || "images/default-user.png"
            }, null, 8, KE)]), _("td", QE, [_e(a, {
                to: "/user/" + l.id
            }, {
                default: Se( () => [ye($(l.real_name), 1)]),
                _: 2
            }, 1032, ["to"]), GE, _("span", YE, $(l.school_name), 1)]), _("td", JE, $(l.rank_points), 1)], 2))), 256))], 2)) : (k(),
            A("table", {
                key: 1,
                class: ie(["user-rating", {
                    "displayed-table": s.value
                }])
            }, [_("tr", null, [XE, zE, ZE, _("th", null, $(r.$t("rating_full_name")), 1), _("th", null, $(r.$t("rating_points")), 1), _("th", null, $(r.$t("driving_school")), 1)]), (k(!0),
            A(Ee, null, st(n.value[o.value - 1], (l, c) => (k(),
            A("tr", {
                class: ie({
                    prized: c < 3 && o.value === 1
                })
            }, [_("td", eS, $(l.index), 1), _("td", tS, [_("img", {
                src: l.rankImgSrc,
                title: l.rankTitle
            }, null, 8, nS)]), _("td", sS, [_("img", {
                src: l.userpic_path || "images/default-user.png"
            }, null, 8, oS)]), _("td", rS, [_e(a, {
                to: "/user/" + l.id
            }, {
                default: Se( () => [ye($(l.real_name), 1)]),
                _: 2
            }, 1032, ["to"])]), _("td", iS, $(l.rank_points), 1), _("td", aS, $(l.school_name), 1)], 2))), 256))], 2)), n.value.length > 1 ? (k(),
            Te(Ys, {
                key: 2,
                "total-items": n.value.length,
                "items-per-page": 1,
                "max-pages-shown": x(t).isMobile ? 3 : 9,
                modelValue: o.value,
                "onUpdate:modelValue": i[0] || (i[0] = l => o.value = l)
            }, null, 8, ["total-items", "max-pages-shown", "modelValue"])) : W("", !0)])], 2)
        }
    }
}
  , cS = Pe(lS, [["__scopeId", "data-v-cda99cb1"]])
  , uS = {};
function fS(e, t) {
    return null
}
const dS = Pe(uS, [["render", fS]])
  , Js = e => (pt("data-v-91b0a05f"),
e = e(),
mt(),
e)
  , hS = Js( () => _("div", {
    class: "stylish_line1"
}, null, -1))
  , pS = ["placeholder"]
  , mS = {
    class: "student-table-container"
}
  , _S = Js( () => _("th", null, "№", -1))
  , gS = {
    class: "user-number"
}
  , vS = {
    class: "username"
}
  , bS = Js( () => _("br", null, null, -1))
  , yS = {
    class: "schoolname"
}
  , wS = Js( () => _("br", null, null, -1))
  , ES = {
    class: "time"
}
  , SS = Js( () => _("th", null, "№", -1))
  , TS = {
    class: "user-number"
}
  , CS = {
    class: "username"
}
  , kS = {
    class: "schoolname"
}
  , $S = {
    class: "time"
}
  , PS = {
    __name: "StudentRecentResultList",
    setup(e) {
        const {t, locale: n} = Le();
        Je();
        const s = Ve();
        ct();
        const o = V("")
          , r = V([])
          , i = G(c)
          , a = V(!1)
          , l = V(1);
        at(async () => {
            try {
                const m = (await fe.get("data/user_recent_results")).data;
                Array.isArray(m) && (m.sort( (v, y) => (y.recent_test_timestamp || 0) - (v.recent_test_timestamp || 0)),
                r.value = m),
                a.value = !0
            } catch (f) {
                console.error(f)
            }
        }
        );
        function c() {
            const f = [];
            let m = 1;
            for (const v of r.value)
                if (v.recent_test_type !== null) {
                    const y = {
                        ...v
                    };
                    y.number = m++,
                    u(y) && (y.real_name = pf(y.real_name),
                    f.push(y))
                }
            return [...sr(f, s.isMobile ? 5 : 15)]
        }
        function u(f) {
            var m, v, y, S, b, g;
            return o.value.length < 1 || ((y = (m = f.real_name) == null ? void 0 : m.toLowerCase()) == null ? void 0 : y.includes((v = o.value) == null ? void 0 : v.toLowerCase())) || ((g = (S = f.school_name) == null ? void 0 : S.toLowerCase()) == null ? void 0 : g.includes((b = o.value) == null ? void 0 : b.toLowerCase()))
        }
        function h(f) {
            if (f.recent_test_type === Rt[$n])
                return t("modeTest");
            if (f.recent_test_type === Rt[qn])
                return t("modeExam");
            if (f.recent_test_type === Rt[Un])
                return t("modeRepeat");
            if (f.recent_test_type === Rt[wn])
                return t("challenging_questions");
            if (f.recent_test_type === Rt[nn])
                return t("marathon");
            if (f.recent_test_type === Rt[tn]) {
                const m = s.cards.find(v => v.id === f.recent_test_id);
                return m ? m.name[n.value] : "-"
            } else if (f.recent_test_type === Rt[qt]) {
                const m = s.topics.find(v => v.id === f.recent_test_id);
                return m ? m.name[n.value] : "-"
            }
        }
        return (f, m) => {
            const v = hs("RouterLink");
            return k(),
            A("div", {
                class: ie(["student-list-container", {
                    mobile: x(s).isMobile
                }])
            }, [hS, Fe(_("input", {
                placeholder: x(t)("enter_name_or_school"),
                class: "student-filter-input",
                type: "text",
                "onUpdate:modelValue": m[0] || (m[0] = y => o.value = y)
            }, null, 8, pS), [[qe, o.value]]), _("h2", null, $(f.$t("user_recent_test_results_title")), 1), _("img", {
                class: ie(["spinner-image", {
                    hidden: a.value
                }]),
                src: $f
            }, null, 2), _("div", mS, [x(s).isMobile ? (k(),
            A("table", {
                key: 0,
                class: ie(["student-list", {
                    "displayed-table": a.value
                }])
            }, [_S, _("th", null, $(f.$t("student_name") + "/" + f.$t("driving_school")), 1), _("th", null, $(f.$t("test_mode")), 1), _("th", null, $(f.$t("test_result") + "/" + f.$t("test_time")), 1), (k(!0),
            A(Ee, null, st(i.value[l.value - 1], y => (k(),
            A("tr", null, [_("td", gS, $(y.number), 1), _("td", vS, [_e(v, {
                to: {
                    path: "/user/" + y.id,
                    force: !0
                }
            }, {
                default: Se( () => [ye($(y.real_name), 1)]),
                _: 2
            }, 1032, ["to"]), bS, _("span", yS, $(y.school_name), 1)]), _("td", null, $(h(y)), 1), _("td", {
                class: ie(["test-result", {
                    success: y.recent_test_success,
                    fail: !y.recent_test_success
                }])
            }, [ye($(y.recent_test_correct_answers + "/" + y.recent_test_questions) + " ", 1), wS, _("span", ES, $(y.recent_test_time), 1)], 2)]))), 256))], 2)) : (k(),
            A("table", {
                key: 1,
                class: ie(["student-list", {
                    "displayed-table": a.value
                }])
            }, [SS, _("th", null, $(f.$t("student_name")), 1), _("th", null, $(f.$t("driving_school")), 1), _("th", null, $(f.$t("test_mode")), 1), _("th", null, $(f.$t("test_result")), 1), _("th", null, $(f.$t("test_time")), 1), (k(!0),
            A(Ee, null, st(i.value[l.value - 1], y => (k(),
            A("tr", null, [_("td", TS, $(y.number), 1), _("td", CS, [_e(v, {
                to: {
                    path: "/user/" + y.id,
                    force: !0
                }
            }, {
                default: Se( () => [ye($(y.real_name), 1)]),
                _: 2
            }, 1032, ["to"])]), _("td", kS, $(y.school_name), 1), _("td", null, $(h(y)), 1), _("td", {
                class: ie(["test-result", {
                    success: y.recent_test_success,
                    fail: !y.recent_test_success
                }])
            }, $(y.recent_test_correct_answers + "/" + y.recent_test_questions), 3), _("td", $S, $(y.recent_test_time), 1)]))), 256))], 2)), i.value.length > 1 ? (k(),
            Te(Ys, {
                key: 2,
                "total-items": i.value.length,
                "items-per-page": 1,
                "max-pages-shown": x(s).isMobile ? 3 : 9,
                modelValue: l.value,
                "onUpdate:modelValue": m[1] || (m[1] = y => l.value = y)
            }, null, 8, ["total-items", "max-pages-shown", "modelValue"])) : W("", !0)])], 2)
        }
    }
}
  , RS = Pe(PS, [["__scopeId", "data-v-91b0a05f"]])
  , OS = {
    class: "card-list"
}
  , LS = ["src"]
  , NS = {
    key: 1,
    class: "no-errors"
}
  , AS = {
    __name: "FailedQuestionList",
    setup(e) {
        const {locale: t} = Le()
          , n = Je()
          , s = lt()
          , o = Ve()
          , r = ct()
          , i = rr()
          , a = ht({})
          , l = G( () => {
            var v;
            return ((v = mf()) == null ? void 0 : v[t.value + "Questions"]) || []
        }
        )
          , c = G(f)
          , u = V(1);
        at( () => h());
        async function h() {
            let v = !1;
            try {
                s.params.id ? (v = await i.load(s.params.id, !0),
                Object.assign(a, i)) : (v = await r.load(),
                Object.assign(a, r),
                console.log(a))
            } catch (y) {
                console.error(y)
            }
            v || await n.push({
                path: "/login"
            })
        }
        function f() {
            const v = a.failedQuestions || []
              , y = [];
            for (const S of v) {
                const b = l.value.find(E => E.id === S.question_id)
                  , g = {
                    text: b == null ? void 0 : b.title,
                    imgSrc: b == null ? void 0 : b.imgSrc
                };
                y.push(g)
            }
            return [...sr(y, o.isMobile ? 2 : 5)]
        }
        function m() {}
        return (v, y) => (k(),
        A(Ee, null, [_("h2", null, $(v.$t("my_mistakes")), 1), a.initialized && c.value.length ? (k(),
        A("div", {
            key: 0,
            class: ie(["container", {
                mobile: x(o).isMobile
            }])
        }, [_("table", OS, [(k(!0),
        A(Ee, null, st(c.value[u.value - 1], S => (k(),
        A("tr", null, [_("td", null, [_("img", {
            src: S.imgSrc
        }, null, 8, LS)]), _("td", null, $(S.text), 1)]))), 256))]), c.value.length > 1 ? (k(),
        Te(Ys, {
            key: 0,
            "total-items": c.value.length,
            "items-per-page": 1,
            "max-pages-shown": x(o).isMobile ? 3 : 9,
            modelValue: u.value,
            "onUpdate:modelValue": y[0] || (y[0] = S => u.value = S),
            "on-click": m
        }, null, 8, ["total-items", "max-pages-shown", "modelValue"])) : W("", !0)], 2)) : W("", !0), a.initialized && !c.value.length ? (k(),
        A("h3", NS, $(v.$t("you_have_no_failed_questions")), 1)) : W("", !0)], 64))
    }
}
  , Ql = Pe(AS, [["__scopeId", "data-v-1b6574e1"]])
  , Wi = e => (pt("data-v-14ad4eac"),
e = e(),
mt(),
e)
  , IS = {
    key: 0,
    class: "container"
}
  , xS = ["placeholder"]
  , MS = Wi( () => _("br", null, null, -1))
  , DS = ["placeholder"]
  , BS = Wi( () => _("br", null, null, -1))
  , FS = {
    type: "submit"
}
  , US = {
    key: 0
}
  , VS = {
    key: 1,
    src: Wn
}
  , HS = {
    key: 0,
    class: "error"
}
  , jS = Wi( () => _("div", {
    class: "separator"
}, [_("hr")], -1))
  , qS = {
    key: 0,
    src: Wn
}
  , WS = {
    key: 1
}
  , KS = {
    class: "remove-account-container"
}
  , QS = {
    __name: "UserSettings",
    setup(e) {
        const {t} = Le()
          , n = Je()
          , s = lt()
          , o = V()
          , r = V()
          , i = V("")
          , a = V(!1)
          , l = V(!1)
          , c = s.meta.mode;
        async function u() {
            if (f())
                try {
                    i.value = "",
                    a.value = !0,
                    await h(),
                    l.value = !0,
                    a.value = !1,
                    await n.replace({
                        path: c === "change" ? "/me" : "/login"
                    })
                } catch (b) {
                    a.value = !1;
                    const g = b.response;
                    g.status === 400 && (i.value = t("password_reset_error")),
                    console.error(g)
                }
        }
        async function h() {
            await fe.post("/auth/password/change/", {
                new_password1: o.value,
                new_password2: r.value
            })
        }
        function f() {
            return m() && v()
        }
        function m() {
            return o.value && r.value ? !0 : (i.value = t("please_fill_required_fields"),
            !1)
        }
        function v() {
            let b = o.value.length >= or;
            return b ? (b = o.value === r.value,
            b ? !0 : (i.value = t("passwords_do_not_match"),
            !1)) : (i.value = t("please_specify_lengthy_password"),
            !1)
        }
        async function y() {
            if (confirm(t("confirm_results_reset")))
                try {
                    a.value = !0,
                    await fe.get("user/reset_test_results/")
                } catch (g) {
                    console.error(g)
                } finally {
                    a.value = !1
                }
        }
        async function S() {
            if (confirm(t("confirm_remove_account")))
                try {
                    await fe.get("user/remove_account/"),
                    await n.replace({
                        path: "/login"
                    })
                } catch (g) {
                    console.error(g)
                }
        }
        return (b, g) => l.value ? W("", !0) : (k(),
        A("div", IS, [_("h2", null, $(b.$t("changing_password")), 1), _("form", {
            onSubmit: je(u, ["prevent"])
        }, [Fe(_("input", {
            type: "password",
            name: "password",
            placeholder: x(t)("new_password"),
            "onUpdate:modelValue": g[0] || (g[0] = E => o.value = E)
        }, null, 8, xS), [[qe, o.value]]), MS, Fe(_("input", {
            type: "password",
            name: "confirmation",
            placeholder: x(t)("password_confirmation_required"),
            "onUpdate:modelValue": g[1] || (g[1] = E => r.value = E)
        }, null, 8, DS), [[qe, r.value]]), BS, _("button", FS, [a.value ? W("", !0) : (k(),
        A("span", US, $(b.$t("save_password")), 1)), a.value ? (k(),
        A("img", VS)) : W("", !0)]), i.value ? (k(),
        A("div", HS, $(i.value), 1)) : W("", !0), jS], 32), _("button", {
            class: "reset-test-results-button",
            onClick: y
        }, [a.value ? (k(),
        A("img", qS)) : (k(),
        A("span", WS, $(b.$t("reset_test_results")), 1))]), _("div", KS, [_("a", {
            class: "remove-account-link",
            href: "#",
            onClick: je(S, ["prevent"])
        }, $(b.$t("remove_account")), 1)])]))
    }
}
  , GS = Pe(QS, [["__scopeId", "data-v-14ad4eac"]])
  , YS = e => (pt("data-v-b6d5ebee"),
e = e(),
mt(),
e)
  , JS = YS( () => _("div", {
    class: "achievements-header"
}, null, -1))
  , XS = ["src", "alt"]
  , zS = {
    key: 1,
    class: "lock-icon",
    src: "images/achievement-locked.svg"
}
  , ZS = {
    class: "achievement-info"
}
  , eT = {
    class: "achievement-title"
}
  , tT = {
    class: "achievement-description"
}
  , nT = {
    __name: "UserAchievements",
    setup(e) {
        const t = Ve()
          , n = Je()
          , s = lt()
          , o = ct()
          , r = rr()
          , i = ht({})
          , a = Ef()
          , l = V();
        at( () => c());
        async function c() {
            let h = !1;
            try {
                s.params.id ? (h = await r.load(s.params.id, !0),
                Object.assign(i, r)) : (h = await o.load(),
                Object.assign(i, o))
            } catch (f) {
                console.error(f)
            }
            if (!h) {
                await n.push({
                    path: "/login"
                });
                return
            }
            await u()
        }
        async function u() {
            var h;
            try {
                const f = ((h = i.data) == null ? void 0 : h.achievements) || {};
                for (const m in f) {
                    const v = a.find(y => y.id === m);
                    v && (v.unlocked = f[m])
                }
                l.value = !0
            } catch (f) {
                console.error(f)
            }
        }
        return (h, f) => (k(),
        A("div", {
            class: ie(["achievements-container", {
                mobile: x(t).isMobile
            }])
        }, [JS, _("div", {
            class: ie(["achievements", {
                show: l.value
            }])
        }, [(k(!0),
        A(Ee, null, st(x(a), (m, v) => (k(),
        A("div", {
            key: v,
            class: "achievement-item"
        }, [_("div", {
            class: ie(["achievement-icon", {
                locked: !m.unlocked
            }])
        }, [m.unlocked ? (k(),
        A("img", {
            key: 0,
            src: m.icon,
            alt: m.title,
            class: "achievement-image"
        }, null, 8, XS)) : (k(),
        A("img", zS))], 2), _("div", ZS, [_("h3", eT, $(m.title), 1), _("p", tT, $(m.description), 1)])]))), 128))], 2)], 2))
    }
}
  , Gl = Pe(nT, [["__scopeId", "data-v-b6d5ebee"]])
  , Pf = cm({
    history: Bp(),
    routes: [{
        path: "/",
        name: "root",
        component: dS,
        meta: {
            mode: "root"
        }
    }, {
        path: "/debug",
        name: "debug",
        component: un,
        meta: {
            mode: "debug"
        }
    }, {
        path: "/login",
        name: "login",
        component: jl
    }, {
        path: "/login_reset",
        name: "login_reset",
        component: jl,
        meta: {
            mode: "reset"
        }
    }, {
        path: "/login_google",
        name: "login_google",
        component: xE
    }, {
        path: "/register",
        name: "register",
        component: yw,
        meta: {
            mode: "register"
        }
    }, {
        path: "/register_school",
        name: "register_school",
        component: J0,
        meta: {
            mode: "register_school"
        }
    }, {
        path: "/reset_password",
        name: "reset_password",
        component: wE
    }, {
        path: "/confirm_reset_password",
        name: "confirm_reset_password",
        component: LE,
        meta: {
            mode: "reset"
        }
    }, {
        path: "/settings",
        name: "settings",
        component: GS,
        meta: {
            mode: "change",
            userHeader: !0
        }
    }, {
        path: "/me",
        name: "me",
        meta: {
            userHeader: !0
        },
        component: Kl
    }, {
        path: "/mistakes",
        name: "mistakes_personal",
        meta: {
            userHeader: !0
        },
        component: Ql
    }, {
        path: "/mistakes/:id",
        name: "mistakes",
        meta: {
            userHeader: !0
        },
        component: Ql
    }, {
        path: "/stats",
        name: "stats_personal",
        component: Wl,
        meta: {
            mode: "stats_personal",
            userHeader: !0
        }
    }, {
        path: "/stats/:id",
        name: "stats",
        component: Wl,
        meta: {
            mode: "stats",
            userHeader: !0
        },
        params: !0
    }, {
        path: "/user/:id",
        name: "user",
        component: Kl,
        meta: {
            mode: "profile",
            userHeader: !0
        },
        params: !0
    }, {
        path: "/test",
        name: $n,
        component: un,
        meta: {
            mode: "test"
        }
    }, {
        path: "/test2",
        name: qn,
        component: un,
        meta: {
            mode: "test2"
        }
    }, {
        path: "/repeat",
        name: "repeat",
        component: un,
        meta: {
            mode: Un
        }
    }, {
        path: "/cards",
        name: "cards",
        component: Hl,
        meta: {
            mode: "cards"
        }
    }, {
        path: "/card/:id",
        name: tn,
        component: un,
        meta: {
            mode: "card"
        },
        params: !0
    }, {
        path: "/topics",
        name: "topics",
        component: Hl,
        meta: {
            mode: "topics"
        }
    }, {
        path: "/topic/:id",
        name: qt,
        component: un,
        meta: {
            mode: "topic"
        },
        params: !0
    }, {
        path: "/challenge",
        name: wn,
        component: un,
        meta: {
            mode: wn
        },
        params: !0
    }, {
        path: "/marathon",
        name: nn,
        component: un,
        meta: {
            mode: nn
        },
        params: !0
    }, {
        path: "/question/:type/:id",
        name: "testQuestion",
        component: My,
        meta: {},
        params: !0
    }, {
        path: "/result",
        name: "testResult",
        component: v0,
        meta: {},
        params: !0
    }, {
        path: "/rating",
        name: "rating",
        component: cS
    }, {
        path: "/user_results",
        name: "user_results",
        component: RS
    }, {
        path: "/achievements",
        name: "achievements_personal",
        component: Gl,
        meta: {
            userHeader: !0,
            whiteHeader: !0
        }
    }, {
        path: "/achievements/:id",
        name: "achievements",
        component: Gl,
        meta: {
            userHeader: !0
        },
        params: !0
    }]
});
Pf.beforeEach( (e, t, n) => {
    const s = e.path.substring(1)
      , o = ["login", "me", "register", "rating", "stats", "mistakes", "achievements"];
    document.title = (o.includes(s) ? ni.global.t(`page_title_${s}`) : ni.global.t("page_title_test")) + " - Jyldyz.KG",
    n()
}
);
fe.defaults.baseURL = location.pathname + "api/";
fe.defaults.xsrfHeaderName = "X-CSRFToken";
fe.defaults.xsrfCookieName = "csrftoken";
fe.defaults.withCredentials = !0;
fe.defaults.withXSRFToken = !0;
const vs = Xh(Ib);
vs.config.globalProperties.window = window;
vs.config.globalProperties.navigator = navigator;
vs.use(tp());
vs.use(Pf);
vs.use(ni);
vs.mount("#app");
