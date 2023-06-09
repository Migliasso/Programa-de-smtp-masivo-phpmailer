/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 *
 * Version: 5.0.10 (2019-07-02)
 */
! function(H) {
    "use strict";
    var tt = function() {},
        p = function(e, o) {
            return function() {
                for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                return e(o.apply(null, t))
            }
        },
        nt = function(t) {
            return function() {
                return t
            }
        },
        d = function(t) {
            return t
        };

    function g(o) {
        for (var r = [], t = 1; t < arguments.length; t++) r[t - 1] = arguments[t];
        return function() {
            for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
            var e = r.concat(t);
            return o.apply(null, e)
        }
    }
    var x = function(e) {
            return function() {
                for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                return !e.apply(null, t)
            }
        },
        u = function(t) {
            return function() {
                throw new Error(t)
            }
        },
        t = nt(!1),
        n = nt(!0),
        e = tinymce.util.Tools.resolve("tinymce.ThemeManager"),
        P = function() {
            return (P = Object.assign || function(t) {
                for (var n, e = 1, o = arguments.length; e < o; e++)
                    for (var r in n = arguments[e]) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
                return t
            }).apply(this, arguments)
        };

    function h(t, n) {
        var e = {};
        for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && n.indexOf(o) < 0 && (e[o] = t[o]);
        if (null != t && "function" == typeof Object.getOwnPropertySymbols) {
            var r = 0;
            for (o = Object.getOwnPropertySymbols(t); r < o.length; r++) n.indexOf(o[r]) < 0 && Object.prototype.propertyIsEnumerable.call(t, o[r]) && (e[o[r]] = t[o[r]])
        }
        return e
    }
    var o, r, i, a, c, s, f, l = t,
        m = n,
        v = function() {
            return b
        },
        b = (a = {
            fold: function(t, n) {
                return t()
            },
            is: l,
            isSome: l,
            isNone: m,
            getOr: i = function(t) {
                return t
            },
            getOrThunk: r = function(t) {
                return t()
            },
            getOrDie: function(t) {
                throw new Error(t || "error: getOrDie called on none.")
            },
            getOrNull: function() {
                return null
            },
            getOrUndefined: function() {
                return undefined
            },
            or: i,
            orThunk: r,
            map: v,
            ap: v,
            each: function() {},
            bind: v,
            flatten: v,
            exists: l,
            forall: m,
            filter: v,
            equals: o = function(t) {
                return t.isNone()
            },
            equals_: o,
            toArray: function() {
                return []
            },
            toString: nt("none()")
        }, Object.freeze && Object.freeze(a), a),
        y = function(e) {
            var t = function() {
                    return e
                },
                n = function() {
                    return r
                },
                o = function(t) {
                    return t(e)
                },
                r = {
                    fold: function(t, n) {
                        return n(e)
                    },
                    is: function(t) {
                        return e === t
                    },
                    isSome: m,
                    isNone: l,
                    getOr: t,
                    getOrThunk: t,
                    getOrDie: t,
                    getOrNull: t,
                    getOrUndefined: t,
                    or: n,
                    orThunk: n,
                    map: function(t) {
                        return y(t(e))
                    },
                    ap: function(t) {
                        return t.fold(v, function(t) {
                            return y(t(e))
                        })
                    },
                    each: function(t) {
                        t(e)
                    },
                    bind: o,
                    flatten: t,
                    exists: o,
                    forall: o,
                    filter: function(t) {
                        return t(e) ? r : b
                    },
                    equals: function(t) {
                        return t.is(e)
                    },
                    equals_: function(t, n) {
                        return t.fold(l, function(t) {
                            return n(e, t)
                        })
                    },
                    toArray: function() {
                        return [e]
                    },
                    toString: function() {
                        return "some(" + e + ")"
                    }
                };
            return r
        },
        et = {
            some: y,
            none: v,
            from: function(t) {
                return null === t || t === undefined ? b : y(t)
            }
        },
        w = function(e) {
            return {
                is: function(t) {
                    return e === t
                },
                isValue: n,
                isError: t,
                getOr: nt(e),
                getOrThunk: nt(e),
                getOrDie: nt(e),
                or: function(t) {
                    return w(e)
                },
                orThunk: function(t) {
                    return w(e)
                },
                fold: function(t, n) {
                    return n(e)
                },
                map: function(t) {
                    return w(t(e))
                },
                mapError: function(t) {
                    return w(e)
                },
                each: function(t) {
                    t(e)
                },
                bind: function(t) {
                    return t(e)
                },
                exists: function(t) {
                    return t(e)
                },
                forall: function(t) {
                    return t(e)
                },
                toOption: function() {
                    return et.some(e)
                }
            }
        },
        S = function(e) {
            return {
                is: t,
                isValue: t,
                isError: n,
                getOr: d,
                getOrThunk: function(t) {
                    return t()
                },
                getOrDie: function() {
                    return u(String(e))()
                },
                or: function(t) {
                    return t
                },
                orThunk: function(t) {
                    return t()
                },
                fold: function(t, n) {
                    return t(e)
                },
                map: function(t) {
                    return S(e)
                },
                mapError: function(t) {
                    return S(t(e))
                },
                each: tt,
                bind: function(t) {
                    return S(e)
                },
                exists: t,
                forall: n,
                toOption: et.none
            }
        },
        z = {
            value: w,
            error: S,
            fromOption: function(t, n) {
                return t.fold(function() {
                    return S(n)
                }, w)
            }
        },
        C = function(n) {
            return function(t) {
                return function(t) {
                    if (null === t) return "null";
                    var n = typeof t;
                    return "object" === n && (Array.prototype.isPrototypeOf(t) || t.constructor && "Array" === t.constructor.name) ? "array" : "object" === n && (String.prototype.isPrototypeOf(t) || t.constructor && "String" === t.constructor.name) ? "string" : n
                }(t) === n
            }
        },
        L = C("string"),
        k = C("object"),
        j = C("array"),
        O = C("boolean"),
        E = C("function"),
        U = C("number"),
        T = function(t, n) {
            if (j(t)) {
                for (var e = 0, o = t.length; e < o; ++e)
                    if (!0 !== n(t[e])) return !1;
                return !0
            }
            return !1
        },
        B = Array.prototype.slice,
        A = (c = Array.prototype.indexOf) === undefined ? function(t, n) {
            return X(t, n)
        } : function(t, n) {
            return c.call(t, n)
        },
        D = function(t, n) {
            return -1 < A(t, n)
        },
        _ = function(t, n) {
            return G(t, n).isSome()
        },
        M = function(t, n) {
            for (var e = [], o = 0; o < t.length; o += n) {
                var r = B.call(t, o, o + n);
                e.push(r)
            }
            return e
        },
        F = function(t, n) {
            for (var e = t.length, o = new Array(e), r = 0; r < e; r++) {
                var i = t[r];
                o[r] = n(i, r, t)
            }
            return o
        },
        W = function(t, n) {
            for (var e = 0, o = t.length; e < o; e++) {
                n(t[e], e, t)
            }
        },
        I = function(t, n) {
            for (var e = [], o = 0, r = t.length; o < r; o++) {
                var i = t[o];
                n(i, o, t) && e.push(i)
            }
            return e
        },
        R = function(t, n, e) {
            return function(t, n) {
                for (var e = t.length - 1; 0 <= e; e--) n(t[e], e, t)
            }(t, function(t) {
                e = n(e, t)
            }), e
        },
        V = function(t, n, e) {
            return W(t, function(t) {
                e = n(e, t)
            }), e
        },
        N = function(t, n) {
            for (var e = 0, o = t.length; e < o; e++) {
                var r = t[e];
                if (n(r, e, t)) return et.some(r)
            }
            return et.none()
        },
        G = function(t, n) {
            for (var e = 0, o = t.length; e < o; e++) {
                if (n(t[e], e, t)) return et.some(e)
            }
            return et.none()
        },
        X = function(t, n) {
            for (var e = 0, o = t.length; e < o; ++e)
                if (t[e] === n) return e;
            return -1
        },
        Y = Array.prototype.push,
        q = function(t) {
            for (var n = [], e = 0, o = t.length; e < o; ++e) {
                if (!Array.prototype.isPrototypeOf(t[e])) throw new Error("Arr.flatten item " + e + " was not an array, input: " + t);
                Y.apply(n, t[e])
            }
            return n
        },
        K = function(t, n) {
            var e = F(t, n);
            return q(e)
        },
        $ = function(t, n) {
            for (var e = 0, o = t.length; e < o; ++e) {
                if (!0 !== n(t[e], e, t)) return !1
            }
            return !0
        },
        J = function(t) {
            var n = B.call(t, 0);
            return n.reverse(), n
        },
        Q = function(t, n) {
            return I(t, function(t) {
                return !D(n, t)
            })
        },
        Z = function(t) {
            return [t]
        },
        ot = function(t) {
            return 0 === t.length ? et.none() : et.some(t[0])
        },
        rt = function(t) {
            return 0 === t.length ? et.none() : et.some(t[t.length - 1])
        },
        it = E(Array.from) ? Array.from : function(t) {
            return B.call(t)
        },
        ut = Object.keys,
        at = Object.hasOwnProperty,
        ct = function(t, n) {
            for (var e = ut(t), o = 0, r = e.length; o < r; o++) {
                var i = e[o];
                n(t[i], i, t)
            }
        },
        st = function(t, o) {
            return ft(t, function(t, n, e) {
                return {
                    k: n,
                    v: o(t, n, e)
                }
            })
        },
        ft = function(o, r) {
            var i = {};
            return ct(o, function(t, n) {
                var e = r(t, n, o);
                i[e.k] = e.v
            }), i
        },
        lt = function(t, e) {
            var o = [];
            return ct(t, function(t, n) {
                o.push(e(t, n))
            }), o
        },
        dt = function(t) {
            return lt(t, function(t) {
                return t
            })
        },
        mt = function(t, n) {
            return gt(t, n) ? et.from(t[n]) : et.none()
        },
        gt = function(t, n) {
            return at.call(t, n)
        },
        pt = function(u) {
            if (!j(u)) throw new Error("cases must be an array");
            if (0 === u.length) throw new Error("there must be at least one case");
            var a = [],
                e = {};
            return W(u, function(t, o) {
                var n = ut(t);
                if (1 !== n.length) throw new Error("one and only one name per case");
                var r = n[0],
                    i = t[r];
                if (e[r] !== undefined) throw new Error("duplicate key detected:" + r);
                if ("cata" === r) throw new Error("cannot have a case named cata (sorry)");
                if (!j(i)) throw new Error("case arguments must be an array");
                a.push(r), e[r] = function() {
                    var t = arguments.length;
                    if (t !== i.length) throw new Error("Wrong number of arguments to case " + r + ". Expected " + i.length + " (" + i + "), got " + t);
                    for (var e = new Array(t), n = 0; n < e.length; n++) e[n] = arguments[n];
                    return {
                        fold: function() {
                            if (arguments.length !== u.length) throw new Error("Wrong number of arguments to fold. Expected " + u.length + ", got " + arguments.length);
                            return arguments[o].apply(null, e)
                        },
                        match: function(t) {
                            var n = ut(t);
                            if (a.length !== n.length) throw new Error("Wrong number of arguments to match. Expected: " + a.join(",") + "\nActual: " + n.join(","));
                            if (!$(a, function(t) {
                                    return D(n, t)
                                })) throw new Error("Not all branches were specified when using match. Specified: " + n.join(", ") + "\nRequired: " + a.join(", "));
                            return t[r].apply(null, e)
                        },
                        log: function(t) {
                            H.console.log(t, {
                                constructors: a,
                                constructor: r,
                                params: e
                            })
                        }
                    }
                }
            }), e
        },
        ht = Object.prototype.hasOwnProperty,
        vt = function(u) {
            return function() {
                for (var t = new Array(arguments.length), n = 0; n < t.length; n++) t[n] = arguments[n];
                if (0 === t.length) throw new Error("Can't merge zero objects");
                for (var e = {}, o = 0; o < t.length; o++) {
                    var r = t[o];
                    for (var i in r) ht.call(r, i) && (e[i] = u(e[i], r[i]))
                }
                return e
            }
        },
        bt = vt(function(t, n) {
            return k(t) && k(n) ? bt(t, n) : n
        }),
        yt = vt(function(t, n) {
            return n
        }),
        xt = function(e) {
            var o, r = !1;
            return function() {
                for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                return r || (r = !0, o = e.apply(null, t)), o
            }
        },
        wt = pt([{
            strict: []
        }, {
            defaultedThunk: ["fallbackThunk"]
        }, {
            asOption: []
        }, {
            asDefaultedOptionThunk: ["fallbackThunk"]
        }, {
            mergeWithThunk: ["baseThunk"]
        }]),
        St = function(t) {
            return wt.defaultedThunk(nt(t))
        },
        Ct = wt.strict,
        kt = wt.asOption,
        Ot = wt.defaultedThunk,
        Et = wt.mergeWithThunk,
        Tt = function(n) {
            return function(t) {
                return gt(t, n) ? et.from(t[n]) : et.none()
            }
        },
        Bt = function(t, n) {
            return Tt(n)(t)
        },
        At = function(t, n) {
            var e = {};
            return e[t] = n, e
        },
        Dt = (pt([{
            bothErrors: ["error1", "error2"]
        }, {
            firstError: ["error1", "value2"]
        }, {
            secondError: ["value1", "error2"]
        }, {
            bothValues: ["value1", "value2"]
        }]), function(t, n) {
            return e = n, o = {}, ct(t, function(t, n) {
                D(e, n) || (o[n] = t)
            }), o;
            var e, o
        }),
        _t = function(t) {
            return Tt(t)
        },
        Mt = function(t, n) {
            return e = t, o = n,
                function(t) {
                    return gt(t, e) ? t[e] : o
                };
            var e, o
        },
        Ft = function(t, n) {
            return Bt(t, n)
        },
        It = function(t, n) {
            return At(t, n)
        },
        Rt = function(t) {
            return n = {}, W(t, function(t) {
                n[t.key] = t.value
            }), n;
            var n
        },
        Vt = function(t, n) {
            var e, o, r, i, u, a = (e = [], o = [], W(t, function(t) {
                t.fold(function(t) {
                    e.push(t)
                }, function(t) {
                    o.push(t)
                })
            }), {
                errors: e,
                values: o
            });
            return 0 < a.errors.length ? (u = a.errors, p(z.error, q)(u)) : (i = n, 0 === (r = a.values).length ? z.value(i) : z.value(bt(i, yt.apply(undefined, r))))
        },
        Nt = function(t, n) {
            return gt(e = t, o = n) && e[o] !== undefined && null !== e[o];
            var e, o
        };
    (f = s || (s = {}))[f.Error = 0] = "Error", f[f.Value = 1] = "Value";
    var Ht = function(t, n, e) {
            return t.stype === s.Error ? n(t.serror) : e(t.svalue)
        },
        Pt = function(t) {
            return {
                stype: s.Value,
                svalue: t
            }
        },
        zt = function(t) {
            return {
                stype: s.Error,
                serror: t
            }
        },
        Lt = function(t) {
            return t.fold(zt, Pt)
        },
        jt = function(t) {
            return Ht(t, z.error, z.value)
        },
        Ut = Pt,
        Wt = function(t) {
            var n = [],
                e = [];
            return W(t, function(t) {
                Ht(t, function(t) {
                    return e.push(t)
                }, function(t) {
                    return n.push(t)
                })
            }), {
                values: n,
                errors: e
            }
        },
        Gt = zt,
        Xt = function(t, n) {
            return t.stype === s.Value ? n(t.svalue) : t
        },
        Yt = function(t, n) {
            return t.stype === s.Error ? n(t.serror) : t
        },
        qt = function(t, n) {
            return t.stype === s.Value ? {
                stype: s.Value,
                svalue: n(t.svalue)
            } : t
        },
        Kt = function(t, n) {
            return t.stype === s.Error ? {
                stype: s.Error,
                serror: n(t.serror)
            } : t
        },
        $t = function(t) {
            return p(Gt, q)(t)
        },
        Jt = function(t, n) {
            var e, o, r = Wt(t);
            return 0 < r.errors.length ? $t(r.errors) : (e = r.values, o = n, 0 < e.length ? Ut(bt(o, yt.apply(undefined, e))) : Ut(o))
        },
        Qt = function(t) {
            var n = Wt(t);
            return 0 < n.errors.length ? $t(n.errors) : Ut(n.values)
        },
        Zt = pt([{
            setOf: ["validator", "valueType"]
        }, {
            arrOf: ["valueType"]
        }, {
            objOf: ["fields"]
        }, {
            itemOf: ["validator"]
        }, {
            choiceOf: ["key", "branches"]
        }, {
            thunk: ["description"]
        }, {
            func: ["args", "outputSchema"]
        }]),
        tn = pt([{
            field: ["name", "presence", "type"]
        }, {
            state: ["name"]
        }]),
        nn = "undefined" != typeof H.window ? H.window : Function("return this;")(),
        en = function(t, n) {
            return function(t, n) {
                for (var e = n !== undefined && null !== n ? n : nn, o = 0; o < t.length && e !== undefined && null !== e; ++o) e = e[t[o]];
                return e
            }(t.split("."), n)
        },
        on = {
            getOrDie: function(t, n) {
                var e = en(t, n);
                if (e === undefined || null === e) throw t + " not available on this browser";
                return e
            }
        },
        rn = function() {
            return on.getOrDie("JSON")
        },
        un = function(t, n, e) {
            return rn().stringify(t, n, e)
        },
        an = function(t) {
            return k(t) && 100 < ut(t).length ? " removed due to size" : un(t, null, 2)
        },
        cn = function(t, n) {
            return Gt([{
                path: t,
                getErrorInfo: n
            }])
        },
        sn = pt([{
            field: ["key", "okey", "presence", "prop"]
        }, {
            state: ["okey", "instantiator"]
        }]),
        fn = function(e, o, r) {
            return Bt(o, r).fold(function() {
                return t = r, n = o, cn(e, function() {
                    return 'Could not find valid *strict* value for "' + t + '" in ' + an(n)
                });
                var t, n
            }, Ut)
        },
        ln = function(t, n, e) {
            var o = Bt(t, n).fold(function() {
                return e(t)
            }, d);
            return Ut(o)
        },
        dn = function(a, c, t, s) {
            return t.fold(function(r, e, t, o) {
                var i = function(t) {
                        var n = o.extract(a.concat([r]), s, t);
                        return qt(n, function(t) {
                            return At(e, s(t))
                        })
                    },
                    u = function(t) {
                        return t.fold(function() {
                            var t = At(e, s(et.none()));
                            return Ut(t)
                        }, function(t) {
                            var n = o.extract(a.concat([r]), s, t);
                            return qt(n, function(t) {
                                return At(e, s(et.some(t)))
                            })
                        })
                    };
                return t.fold(function() {
                    return Xt(fn(a, c, r), i)
                }, function(t) {
                    return Xt(ln(c, r, t), i)
                }, function() {
                    return Xt(Ut(Bt(c, r)), u)
                }, function(t) {
                    return Xt((e = t, o = Bt(n = c, r).map(function(t) {
                        return !0 === t ? e(n) : t
                    }), Ut(o)), u);
                    var n, e, o
                }, function(t) {
                    var n = t(c),
                        e = qt(ln(c, r, nt({})), function(t) {
                            return bt(n, t)
                        });
                    return Xt(e, i)
                })
            }, function(t, n) {
                var e = n(c);
                return Ut(At(t, s(e)))
            })
        },
        mn = function(o) {
            return {
                extract: function(e, t, n) {
                    return Yt(o(n, t), function(t) {
                        return n = t, cn(e, function() {
                            return n
                        });
                        var n
                    })
                },
                toString: function() {
                    return "val"
                },
                toDsl: function() {
                    return Zt.itemOf(o)
                }
            }
        },
        gn = function(t) {
            var c = pn(t),
                s = R(t, function(n, t) {
                    return t.fold(function(t) {
                        return bt(n, It(t, !0))
                    }, nt(n))
                }, {});
            return {
                extract: function(t, n, e) {
                    var o, r, i, u = O(e) ? [] : (r = ut(o = e), I(r, function(t) {
                            return Nt(o, t)
                        })),
                        a = I(u, function(t) {
                            return !Nt(s, t)
                        });
                    return 0 === a.length ? c.extract(t, n, e) : (i = a, cn(t, function() {
                        return "There are unsupported fields: [" + i.join(", ") + "] specified"
                    }))
                },
                toString: c.toString,
                toDsl: c.toDsl
            }
        },
        pn = function(a) {
            return {
                extract: function(t, n, e) {
                    return o = t, r = e, i = n, u = F(a, function(t) {
                        return dn(o, r, t, i)
                    }), Jt(u, {});
                    var o, r, i, u
                },
                toString: function() {
                    return "obj{\n" + F(a, function(t) {
                        return t.fold(function(t, n, e, o) {
                            return t + " -> " + o.toString()
                        }, function(t, n) {
                            return "state(" + t + ")"
                        })
                    }).join("\n") + "}"
                },
                toDsl: function() {
                    return Zt.objOf(F(a, function(t) {
                        return t.fold(function(t, n, e, o) {
                            return tn.field(t, e, o)
                        }, function(t, n) {
                            return tn.state(t)
                        })
                    }))
                }
            }
        },
        hn = function(r) {
            return {
                extract: function(e, o, t) {
                    var n = F(t, function(t, n) {
                        return r.extract(e.concat(["[" + n + "]"]), o, t)
                    });
                    return Qt(n)
                },
                toString: function() {
                    return "array(" + r.toString() + ")"
                },
                toDsl: function() {
                    return Zt.arrOf(r)
                }
            }
        },
        vn = function(a, c) {
            return {
                extract: function(e, o, r) {
                    var t, n, i = ut(r),
                        u = (t = e, n = i, hn(mn(a)).extract(t, d, n));
                    return Xt(u, function(t) {
                        var n = F(t, function(t) {
                            return sn.field(t, t, Ct(), c)
                        });
                        return pn(n).extract(e, o, r)
                    })
                },
                toString: function() {
                    return "setOf(" + c.toString() + ")"
                },
                toDsl: function() {
                    return Zt.setOf(a, c)
                }
            }
        },
        bn = nt(mn(Ut)),
        yn = p(hn, pn),
        xn = sn.state,
        wn = sn.field,
        Sn = function(e, n, o, r, i) {
            return Ft(r, i).fold(function() {
                return t = r, n = i, cn(e, function() {
                    return 'The chosen schema: "' + n + '" did not exist in branches: ' + an(t)
                });
                var t, n
            }, function(t) {
                return pn(t).extract(e.concat(["branch: " + i]), n, o)
            })
        },
        Cn = function(r, i) {
            return {
                extract: function(n, e, o) {
                    return Ft(o, r).fold(function() {
                        return t = r, cn(n, function() {
                            return 'Choice schema did not contain choice key: "' + t + '"'
                        });
                        var t
                    }, function(t) {
                        return Sn(n, e, o, i, t)
                    })
                },
                toString: function() {
                    return "chooseOn(" + r + "). Possible values: " + ut(i)
                },
                toDsl: function() {
                    return Zt.choiceOf(r, i)
                }
            }
        },
        kn = mn(Ut),
        On = function(n) {
            return mn(function(t) {
                return n(t).fold(Gt, Ut)
            })
        },
        En = function(n, t) {
            return vn(function(t) {
                return Lt(n(t))
            }, t)
        },
        Tn = function(t, n, e) {
            return jt((o = t, r = d, i = e, u = n.extract([o], r, i), Kt(u, function(t) {
                return {
                    input: i,
                    errors: t
                }
            })));
            var o, r, i, u
        },
        Bn = function(t) {
            return t.fold(function(t) {
                throw new Error(Dn(t))
            }, d)
        },
        An = function(t, n, e) {
            return Bn(Tn(t, n, e))
        },
        Dn = function(t) {
            return "Errors: \n" + (n = t.errors, e = 10 < n.length ? n.slice(0, 10).concat([{
                path: [],
                getErrorInfo: function() {
                    return "... (only showing first ten failures)"
                }
            }]) : n, F(e, function(t) {
                return "Failed path: (" + t.path.join(" > ") + ")\n" + t.getErrorInfo()
            })) + "\n\nInput object: " + an(t.input);
            var n, e
        },
        _n = function(t, n) {
            return Cn(t, n)
        },
        Mn = nt(kn),
        Fn = function(e, o) {
            return mn(function(t) {
                var n = typeof t;
                return e(t) ? Ut(t) : Gt("Expected type: " + o + " but got: " + n)
            })
        },
        In = Fn(U, "number"),
        Rn = Fn(L, "string"),
        Vn = Fn(O, "boolean"),
        Nn = Fn(E, "function"),
        Hn = function(n) {
            return On(function(t) {
                return D(n, t) ? z.value(t) : z.error('Unsupported value: "' + t + '", choose one of "' + n.join(", ") + '".')
            })
        },
        Pn = function(t) {
            return wn(t, t, Ct(), bn())
        },
        zn = function(t, n) {
            return wn(t, t, Ct(), n)
        },
        Ln = function(t) {
            return zn(t, Rn)
        },
        jn = function(t, n) {
            return wn(t, t, Ct(), Hn(n))
        },
        Un = function(t) {
            return zn(t, Nn)
        },
        Wn = function(t, n) {
            return wn(t, t, Ct(), pn(n))
        },
        Gn = function(t, n) {
            return wn(t, t, Ct(), yn(n))
        },
        Xn = function(t, n) {
            return wn(t, t, Ct(), hn(n))
        },
        Yn = function(t) {
            return wn(t, t, kt(), bn())
        },
        qn = function(t, n) {
            return wn(t, t, kt(), n)
        },
        Kn = function(t) {
            return qn(t, In)
        },
        $n = function(t) {
            return qn(t, Rn)
        },
        Jn = function(t) {
            return qn(t, Nn)
        },
        Qn = function(t, n) {
            return qn(t, pn(n))
        },
        Zn = function(t, n) {
            return wn(t, t, St(n), bn())
        },
        te = function(t, n, e) {
            return wn(t, t, St(n), e)
        },
        ne = function(t, n) {
            return te(t, n, In)
        },
        ee = function(t, n) {
            return te(t, n, Rn)
        },
        oe = function(t, n, e) {
            return te(t, n, Hn(e))
        },
        re = function(t, n) {
            return te(t, n, Vn)
        },
        ie = function(t, n) {
            return te(t, n, Nn)
        },
        ue = function(t, n, e) {
            return te(t, n, pn(e))
        },
        ae = function(t, n) {
            return xn(t, n)
        },
        ce = function(t) {
            var n = t,
                e = function() {
                    return n
                };
            return {
                get: e,
                set: function(t) {
                    n = t
                },
                clone: function() {
                    return ce(e())
                }
            }
        },
        se = function(t) {
            if (null === t || t === undefined) throw new Error("Node cannot be null or undefined");
            return {
                dom: nt(t)
            }
        },
        fe = {
            fromHtml: function(t, n) {
                var e = (n || H.document).createElement("div");
                if (e.innerHTML = t, !e.hasChildNodes() || 1 < e.childNodes.length) throw H.console.error("HTML does not have a single root node", t), new Error("HTML must have a single root node");
                return se(e.childNodes[0])
            },
            fromTag: function(t, n) {
                var e = (n || H.document).createElement(t);
                return se(e)
            },
            fromText: function(t, n) {
                var e = (n || H.document).createTextNode(t);
                return se(e)
            },
            fromDom: se,
            fromPoint: function(t, n, e) {
                var o = t.dom();
                return et.from(o.elementFromPoint(n, e)).map(se)
            }
        },
        le = function() {
            return on.getOrDie("Node")
        },
        de = function(t, n, e) {
            return 0 != (t.compareDocumentPosition(n) & e)
        },
        me = function(t, n) {
            return de(t, n, le().DOCUMENT_POSITION_CONTAINED_BY)
        },
        ge = function(t, n) {
            var e = function(t, n) {
                for (var e = 0; e < t.length; e++) {
                    var o = t[e];
                    if (o.test(n)) return o
                }
                return undefined
            }(t, n);
            if (!e) return {
                major: 0,
                minor: 0
            };
            var o = function(t) {
                return Number(n.replace(e, "$" + t))
            };
            return he(o(1), o(2))
        },
        pe = function() {
            return he(0, 0)
        },
        he = function(t, n) {
            return {
                major: t,
                minor: n
            }
        },
        ve = {
            nu: he,
            detect: function(t, n) {
                var e = String(n).toLowerCase();
                return 0 === t.length ? pe() : ge(t, e)
            },
            unknown: pe
        },
        be = "Firefox",
        ye = function(t, n) {
            return function() {
                return n === t
            }
        },
        xe = function(t) {
            var n = t.current;
            return {
                current: n,
                version: t.version,
                isEdge: ye("Edge", n),
                isChrome: ye("Chrome", n),
                isIE: ye("IE", n),
                isOpera: ye("Opera", n),
                isFirefox: ye(be, n),
                isSafari: ye("Safari", n)
            }
        },
        we = {
            unknown: function() {
                return xe({
                    current: undefined,
                    version: ve.unknown()
                })
            },
            nu: xe,
            edge: nt("Edge"),
            chrome: nt("Chrome"),
            ie: nt("IE"),
            opera: nt("Opera"),
            firefox: nt(be),
            safari: nt("Safari")
        },
        Se = "Windows",
        Ce = "Android",
        ke = "Solaris",
        Oe = "FreeBSD",
        Ee = function(t, n) {
            return function() {
                return n === t
            }
        },
        Te = function(t) {
            var n = t.current;
            return {
                current: n,
                version: t.version,
                isWindows: Ee(Se, n),
                isiOS: Ee("iOS", n),
                isAndroid: Ee(Ce, n),
                isOSX: Ee("OSX", n),
                isLinux: Ee("Linux", n),
                isSolaris: Ee(ke, n),
                isFreeBSD: Ee(Oe, n)
            }
        },
        Be = {
            unknown: function() {
                return Te({
                    current: undefined,
                    version: ve.unknown()
                })
            },
            nu: Te,
            windows: nt(Se),
            ios: nt("iOS"),
            android: nt(Ce),
            linux: nt("Linux"),
            osx: nt("OSX"),
            solaris: nt(ke),
            freebsd: nt(Oe)
        },
        Ae = function(t, n) {
            var e = String(n).toLowerCase();
            return N(t, function(t) {
                return t.search(e)
            })
        },
        De = function(t, e) {
            return Ae(t, e).map(function(t) {
                var n = ve.detect(t.versionRegexes, e);
                return {
                    current: t.name,
                    version: n
                }
            })
        },
        _e = function(t, e) {
            return Ae(t, e).map(function(t) {
                var n = ve.detect(t.versionRegexes, e);
                return {
                    current: t.name,
                    version: n
                }
            })
        },
        Me = function(t, n) {
            return -1 !== t.indexOf(n)
        },
        Fe = /.*?version\/\ ?([0-9]+)\.([0-9]+).*/,
        Ie = function(n) {
            return function(t) {
                return Me(t, n)
            }
        },
        Re = [{
            name: "Edge",
            versionRegexes: [/.*?edge\/ ?([0-9]+)\.([0-9]+)$/],
            search: function(t) {
                return Me(t, "edge/") && Me(t, "chrome") && Me(t, "safari") && Me(t, "applewebkit")
            }
        }, {
            name: "Chrome",
            versionRegexes: [/.*?chrome\/([0-9]+)\.([0-9]+).*/, Fe],
            search: function(t) {
                return Me(t, "chrome") && !Me(t, "chromeframe")
            }
        }, {
            name: "IE",
            versionRegexes: [/.*?msie\ ?([0-9]+)\.([0-9]+).*/, /.*?rv:([0-9]+)\.([0-9]+).*/],
            search: function(t) {
                return Me(t, "msie") || Me(t, "trident")
            }
        }, {
            name: "Opera",
            versionRegexes: [Fe, /.*?opera\/([0-9]+)\.([0-9]+).*/],
            search: Ie("opera")
        }, {
            name: "Firefox",
            versionRegexes: [/.*?firefox\/\ ?([0-9]+)\.([0-9]+).*/],
            search: Ie("firefox")
        }, {
            name: "Safari",
            versionRegexes: [Fe, /.*?cpu os ([0-9]+)_([0-9]+).*/],
            search: function(t) {
                return (Me(t, "safari") || Me(t, "mobile/")) && Me(t, "applewebkit")
            }
        }],
        Ve = [{
            name: "Windows",
            search: Ie("win"),
            versionRegexes: [/.*?windows\ nt\ ?([0-9]+)\.([0-9]+).*/]
        }, {
            name: "iOS",
            search: function(t) {
                return Me(t, "iphone") || Me(t, "ipad")
            },
            versionRegexes: [/.*?version\/\ ?([0-9]+)\.([0-9]+).*/, /.*cpu os ([0-9]+)_([0-9]+).*/, /.*cpu iphone os ([0-9]+)_([0-9]+).*/]
        }, {
            name: "Android",
            search: Ie("android"),
            versionRegexes: [/.*?android\ ?([0-9]+)\.([0-9]+).*/]
        }, {
            name: "OSX",
            search: Ie("os x"),
            versionRegexes: [/.*?os\ x\ ?([0-9]+)_([0-9]+).*/]
        }, {
            name: "Linux",
            search: Ie("linux"),
            versionRegexes: []
        }, {
            name: "Solaris",
            search: Ie("sunos"),
            versionRegexes: []
        }, {
            name: "FreeBSD",
            search: Ie("freebsd"),
            versionRegexes: []
        }],
        Ne = {
            browsers: nt(Re),
            oses: nt(Ve)
        },
        He = function(t) {
            var n, e, o, r, i, u, a, c, s, f, l, d = Ne.browsers(),
                m = Ne.oses(),
                g = De(d, t).fold(we.unknown, we.nu),
                p = _e(m, t).fold(Be.unknown, Be.nu);
            return {
                browser: g,
                os: p,
                deviceType: (e = g, o = t, r = (n = p).isiOS() && !0 === /ipad/i.test(o), i = n.isiOS() && !r, u = n.isAndroid() && 3 === n.version.major, a = n.isAndroid() && 4 === n.version.major, c = r || u || a && !0 === /mobile/i.test(o), s = n.isiOS() || n.isAndroid(), f = s && !c, l = e.isSafari() && n.isiOS() && !1 === /safari/i.test(o), {
                    isiPad: nt(r),
                    isiPhone: nt(i),
                    isTablet: nt(c),
                    isPhone: nt(f),
                    isTouch: nt(s),
                    isAndroid: n.isAndroid,
                    isiOS: n.isiOS,
                    isWebView: nt(l)
                })
            }
        },
        Pe = {
            detect: xt(function() {
                var t = H.navigator.userAgent;
                return He(t)
            })
        },
        ze = (H.Node.ATTRIBUTE_NODE, H.Node.CDATA_SECTION_NODE, H.Node.COMMENT_NODE, H.Node.DOCUMENT_NODE),
        Le = (H.Node.DOCUMENT_TYPE_NODE, H.Node.DOCUMENT_FRAGMENT_NODE, H.Node.ELEMENT_NODE),
        je = H.Node.TEXT_NODE,
        Ue = (H.Node.PROCESSING_INSTRUCTION_NODE, H.Node.ENTITY_REFERENCE_NODE, H.Node.ENTITY_NODE, H.Node.NOTATION_NODE, Le),
        We = ze,
        Ge = function(t, n) {
            var e = t.dom();
            if (e.nodeType !== Ue) return !1;
            if (e.matches !== undefined) return e.matches(n);
            if (e.msMatchesSelector !== undefined) return e.msMatchesSelector(n);
            if (e.webkitMatchesSelector !== undefined) return e.webkitMatchesSelector(n);
            if (e.mozMatchesSelector !== undefined) return e.mozMatchesSelector(n);
            throw new Error("Browser lacks native selectors")
        },
        Xe = function(t) {
            return t.nodeType !== Ue && t.nodeType !== We || 0 === t.childElementCount
        },
        Ye = function(t, n) {
            var e = n === undefined ? H.document : n.dom();
            return Xe(e) ? [] : F(e.querySelectorAll(t), fe.fromDom)
        },
        qe = function(t, n) {
            return t.dom() === n.dom()
        },
        Ke = (Pe.detect().browser.isIE(), function(t, n) {
            return qe(t.element(), n.event().target())
        }),
        $e = function(t) {
            if (!Nt(t, "can") && !Nt(t, "abort") && !Nt(t, "run")) throw new Error("EventHandler defined by: " + un(t, null, 2) + " does not have can, abort, or run!");
            return An("Extracting event.handler", gn([Zn("can", nt(!0)), Zn("abort", nt(!1)), Zn("run", tt)]), t)
        },
        Je = function(e) {
            var n, o, r, i, t = (n = e, o = function(t) {
                    return t.can
                }, function() {
                    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                    return V(n, function(t, n) {
                        return t && o(n).apply(undefined, e)
                    }, !0)
                }),
                u = (r = e, i = function(t) {
                    return t.abort
                }, function() {
                    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                    return V(r, function(t, n) {
                        return t || i(n).apply(undefined, e)
                    }, !1)
                });
            return $e({
                can: t,
                abort: u,
                run: function() {
                    for (var n = [], t = 0; t < arguments.length; t++) n[t] = arguments[t];
                    W(e, function(t) {
                        t.run.apply(undefined, n)
                    })
                }
            })
        },
        Qe = nt("touchstart"),
        Ze = nt("touchmove"),
        to = nt("touchend"),
        no = nt("mousedown"),
        eo = nt("mousemove"),
        oo = nt("mouseout"),
        ro = nt("mouseup"),
        io = nt("mouseover"),
        uo = nt("focusin"),
        ao = nt("focusout"),
        co = nt("keydown"),
        so = nt("keyup"),
        fo = nt("input"),
        lo = nt("change"),
        mo = nt("click"),
        go = nt("transitionend"),
        po = nt("selectstart"),
        ho = {
            tap: nt("alloy.tap")
        },
        vo = nt("alloy.focus"),
        bo = nt("alloy.blur.post"),
        yo = nt("alloy.paste.post"),
        xo = nt("alloy.receive"),
        wo = nt("alloy.execute"),
        So = nt("alloy.focus.item"),
        Co = ho.tap,
        ko = Pe.detect().deviceType.isTouch() ? ho.tap : mo,
        Oo = nt("alloy.longpress"),
        Eo = nt("alloy.sandbox.close"),
        To = nt("alloy.typeahead.cancel"),
        Bo = nt("alloy.system.init"),
        Ao = nt("alloy.system.scroll"),
        Do = nt("alloy.system.resize"),
        _o = nt("alloy.system.attached"),
        Mo = nt("alloy.system.detached"),
        Fo = nt("alloy.system.dismissRequested"),
        Io = nt("alloy.focusmanager.shifted"),
        Ro = nt("alloy.slotcontainer.visibility"),
        Vo = nt("alloy.change.tab"),
        No = nt("alloy.dismiss.tab"),
        Ho = nt("alloy.highlight"),
        Po = nt("alloy.dehighlight"),
        zo = function(t, n) {
            Wo(t, t.element(), n, {})
        },
        Lo = function(t, n, e) {
            Wo(t, t.element(), n, e)
        },
        jo = function(t) {
            zo(t, wo())
        },
        Uo = function(t, n, e) {
            Wo(t, n, e, {})
        },
        Wo = function(t, n, e, o) {
            var r = P({
                target: n
            }, o);
            t.getSystem().triggerEvent(e, n, st(r, nt))
        },
        Go = function(t, n, e, o) {
            t.getSystem().triggerEvent(e, n, o.event())
        };

    function Xo(t, n, e, o, r) {
        return t(e, o) ? et.some(e) : E(r) && r(e) ? et.none() : n(e, o, r)
    }
    var Yo, qo, Ko, $o, Jo, Qo = function(t) {
            return t.dom().nodeName.toLowerCase()
        },
        Zo = function(n) {
            return function(t) {
                return t.dom().nodeType === n
            }
        },
        tr = Zo(Le),
        nr = Zo(je),
        er = Zo(ze),
        or = function(t) {
            var n = nr(t) ? t.dom().parentNode : t.dom();
            return n !== undefined && null !== n && n.ownerDocument.body.contains(n)
        },
        rr = xt(function() {
            return ir(fe.fromDom(H.document))
        }),
        ir = function(t) {
            var n = t.dom().body;
            if (null === n || n === undefined) throw new Error("Body is not available yet");
            return fe.fromDom(n)
        },
        ur = function(t, n, e) {
            for (var o = t.dom(), r = E(e) ? e : nt(!1); o.parentNode;) {
                o = o.parentNode;
                var i = fe.fromDom(o);
                if (n(i)) return et.some(i);
                if (r(i)) break
            }
            return et.none()
        },
        ar = function(t, n, e) {
            return Xo(function(t) {
                return n(t)
            }, ur, t, n, e)
        },
        cr = function(t, o) {
            var r = function(t) {
                for (var n = 0; n < t.childNodes.length; n++) {
                    if (o(fe.fromDom(t.childNodes[n]))) return et.some(fe.fromDom(t.childNodes[n]));
                    var e = r(t.childNodes[n]);
                    if (e.isSome()) return e
                }
                return et.none()
            };
            return r(t.dom())
        },
        sr = function(t, n, e) {
            return ar(t, function(t) {
                return n(t).isSome()
            }, e).bind(n)
        },
        fr = function(t) {
            return Rt(t)
        },
        lr = function(t, n) {
            return {
                key: t,
                value: $e({
                    abort: n
                })
            }
        },
        dr = function(t) {
            return {
                key: t,
                value: $e({
                    run: function(t, n) {
                        n.event().prevent()
                    }
                })
            }
        },
        mr = function(t, n) {
            return {
                key: t,
                value: $e({
                    run: n
                })
            }
        },
        gr = function(t, n, e) {
            return {
                key: t,
                value: $e({
                    run: function(t) {
                        n.apply(undefined, [t].concat(e))
                    }
                })
            }
        },
        pr = function(t) {
            return function(e) {
                return {
                    key: t,
                    value: $e({
                        run: function(t, n) {
                            Ke(t, n) && e(t, n)
                        }
                    })
                }
            }
        },
        hr = function(t, n, e) {
            var o, r, i = n.partUids[e];
            return r = i, mr(o = t, function(t, n) {
                t.getSystem().getByUid(r).each(function(t) {
                    Go(t, t.element(), o, n)
                })
            })
        },
        vr = function(t, r) {
            return mr(t, function(n, t) {
                var e = t.event(),
                    o = n.getSystem().getByDom(e.target()).fold(function() {
                        return sr(e.target(), function(t) {
                            return n.getSystem().getByDom(t).toOption()
                        }, nt(!1)).getOr(n)
                    }, function(t) {
                        return t
                    });
                r(n, o, t)
            })
        },
        br = function(t) {
            return mr(t, function(t, n) {
                n.cut()
            })
        },
        yr = function(t) {
            return mr(t, function(t, n) {
                n.stop()
            })
        },
        xr = function(t, n) {
            return pr(t)(n)
        },
        wr = pr(_o()),
        Sr = pr(Mo()),
        Cr = pr(Bo()),
        kr = (Yo = wo(), function(t) {
            return mr(Yo, t)
        }),
        Or = function() {
            for (var n = [], t = 0; t < arguments.length; t++) n[t] = arguments[t];
            return function() {
                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                if (n.length !== e.length) throw new Error('Wrong number of arguments to struct. Expected "[' + n.length + ']", got ' + e.length + " arguments");
                var o = {};
                return W(n, function(t, n) {
                    o[t] = nt(e[n])
                }), o
            }
        },
        Er = function(t) {
            return t.slice(0).sort()
        },
        Tr = function(n, t) {
            if (!j(t)) throw new Error("The " + n + " fields must be an array. Was: " + t + ".");
            W(t, function(t) {
                if (!L(t)) throw new Error("The value " + t + " in the " + n + " fields was not a string.")
            })
        },
        Br = function(r, i) {
            var e, u = r.concat(i);
            if (0 === u.length) throw new Error("You must specify at least one required or optional field.");
            return Tr("required", r), Tr("optional", i), e = Er(u), N(e, function(t, n) {
                    return n < e.length - 1 && t === e[n + 1]
                }).each(function(t) {
                    throw new Error("The field: " + t + " occurs more than once in the combined fields: [" + e.join(", ") + "].")
                }),
                function(n) {
                    var e = ut(n);
                    $(r, function(t) {
                        return D(e, t)
                    }) || function(t, n) {
                        throw new Error("All required keys (" + Er(t).join(", ") + ") were not specified. Specified keys were: " + Er(n).join(", ") + ".")
                    }(r, e);
                    var t = I(e, function(t) {
                        return !D(u, t)
                    });
                    0 < t.length && function(t) {
                        throw new Error("Unsupported keys for object: " + Er(t).join(", "))
                    }(t);
                    var o = {};
                    return W(r, function(t) {
                        o[t] = nt(n[t])
                    }), W(i, function(t) {
                        o[t] = nt(Object.prototype.hasOwnProperty.call(n, t) ? et.some(n[t]) : et.none())
                    }), o
                }
        },
        Ar = function(t) {
            return fe.fromDom(t.dom().ownerDocument)
        },
        Dr = function(t) {
            var n = t.dom().ownerDocument.defaultView;
            return fe.fromDom(n)
        },
        _r = function(t) {
            var n = t.dom();
            return et.from(n.parentNode).map(fe.fromDom)
        },
        Mr = function(t) {
            var n = t.dom();
            return et.from(n.offsetParent).map(fe.fromDom)
        },
        Fr = function(t) {
            var n = t.dom();
            return F(n.childNodes, fe.fromDom)
        },
        Ir = function(t, n) {
            var e = t.dom().childNodes;
            return et.from(e[n]).map(fe.fromDom)
        },
        Rr = (Or("element", "offset"), function(n, e) {
            _r(n).each(function(t) {
                t.dom().insertBefore(e.dom(), n.dom())
            })
        }),
        Vr = function(t, n) {
            var e;
            (e = t.dom(), et.from(e.nextSibling).map(fe.fromDom)).fold(function() {
                _r(t).each(function(t) {
                    Hr(t, n)
                })
            }, function(t) {
                Rr(t, n)
            })
        },
        Nr = function(n, e) {
            Ir(n, 0).fold(function() {
                Hr(n, e)
            }, function(t) {
                n.dom().insertBefore(e.dom(), t.dom())
            })
        },
        Hr = function(t, n) {
            t.dom().appendChild(n.dom())
        },
        Pr = function(n, t) {
            W(t, function(t) {
                Hr(n, t)
            })
        },
        zr = function(t) {
            t.dom().textContent = "", W(Fr(t), function(t) {
                Lr(t)
            })
        },
        Lr = function(t) {
            var n = t.dom();
            null !== n.parentNode && n.parentNode.removeChild(n)
        },
        jr = function(t) {
            var n, e = Fr(t);
            0 < e.length && (n = t, W(e, function(t) {
                Rr(n, t)
            })), Lr(t)
        },
        Ur = function(t) {
            return t.dom().innerHTML
        },
        Wr = function(t, n) {
            var e, o, r = Ar(t).dom(),
                i = fe.fromDom(r.createDocumentFragment()),
                u = (e = n, (o = (r || H.document).createElement("div")).innerHTML = e, Fr(fe.fromDom(o)));
            Pr(i, u), zr(t), Hr(t, i)
        },
        Gr = function(t, n, e) {
            if (!(L(e) || O(e) || U(e))) throw H.console.error("Invalid call to Attr.set. Key ", n, ":: Value ", e, ":: Element ", t), new Error("Attribute value was not simple");
            t.setAttribute(n, e + "")
        },
        Xr = function(t, n, e) {
            Gr(t.dom(), n, e)
        },
        Yr = function(t, n) {
            var e = t.dom();
            ct(n, function(t, n) {
                Gr(e, n, t)
            })
        },
        qr = function(t, n) {
            var e = t.dom().getAttribute(n);
            return null === e ? undefined : e
        },
        Kr = function(t, n) {
            var e = t.dom();
            return !(!e || !e.hasAttribute) && e.hasAttribute(n)
        },
        $r = function(t, n) {
            t.dom().removeAttribute(n)
        },
        Jr = function(t) {
            return n = t, e = !1, fe.fromDom(n.dom().cloneNode(e));
            var n, e
        },
        Qr = function(t) {
            var n, e, o, r = Jr(t);
            return n = r, e = fe.fromTag("div"), o = fe.fromDom(n.dom().cloneNode(!0)), Hr(e, o), Ur(e)
        },
        Zr = function(t) {
            return Qr(t)
        },
        ti = fr([(qo = vo(), Ko = function(t, n) {
            var e, o, r = n.event().originator(),
                i = n.event().target();
            return o = i, !(qe(e = r, t.element()) && !qe(e, o)) || (H.console.warn(vo() + " did not get interpreted by the desired target. \nOriginator: " + Zr(r) + "\nTarget: " + Zr(i) + "\nCheck the " + vo() + " event handlers"), !1)
        }, {
            key: qo,
            value: $e({
                can: Ko
            })
        })]),
        ni = /* */ Object.freeze({
            events: ti
        }),
        ei = 0,
        oi = function(t) {
            var n = (new Date).getTime();
            return t + "_" + Math.floor(1e9 * Math.random()) + ++ei + String(n)
        },
        ri = nt("alloy-id-"),
        ii = nt("data-alloy-id"),
        ui = ri(),
        ai = ii(),
        ci = function(t, n) {
            Object.defineProperty(t.dom(), ai, {
                value: n,
                writable: !0
            })
        },
        si = function(t) {
            var n = tr(t) ? t.dom()[ai] : null;
            return et.from(n)
        },
        fi = function(t) {
            return oi(t)
        },
        li = d,
        di = function(n) {
            var t = function(t) {
                return function() {
                    throw new Error("The component must be in a context to send: " + t + "\n" + Zr(n().element()) + " is not in context.")
                }
            };
            return {
                debugInfo: nt("fake"),
                triggerEvent: t("triggerEvent"),
                triggerFocus: t("triggerFocus"),
                triggerEscape: t("triggerEscape"),
                build: t("build"),
                addToWorld: t("addToWorld"),
                removeFromWorld: t("removeFromWorld"),
                addToGui: t("addToGui"),
                removeFromGui: t("removeFromGui"),
                getByUid: t("getByUid"),
                getByDom: t("getByDom"),
                broadcast: t("broadcast"),
                broadcastOn: t("broadcastOn"),
                broadcastEvent: t("broadcastEvent"),
                isConnected: nt(!1)
            }
        },
        mi = di(),
        gi = function(t) {
            return F(t, function(t) {
                return o = n = "/*", r = (e = t).length - n.length, "" !== o && (e.length < o.length || e.substr(r, r + o.length) !== o) ? t : t.substring(0, t.length - "/*".length);
                var n, e, o, r
            })
        },
        pi = function(t, n) {
            var e = t.toString(),
                o = e.indexOf(")") + 1,
                r = e.indexOf("("),
                i = e.substring(r + 1, o - 1).split(/,\s*/);
            return t.toFunctionAnnotation = function() {
                return {
                    name: n,
                    parameters: gi(i)
                }
            }, t
        },
        hi = oi("alloy-premade"),
        vi = function(t) {
            return It(hi, t)
        },
        bi = function(o) {
            return t = function(t) {
                for (var n = [], e = 1; e < arguments.length; e++) n[e - 1] = arguments[e];
                return o.apply(undefined, [t.getApis()].concat([t].concat(n)))
            }, n = o.toString(), e = n.indexOf(")") + 1, r = n.indexOf("("), i = n.substring(r + 1, e - 1).split(/,\s*/), t.toFunctionAnnotation = function() {
                return {
                    name: "OVERRIDE",
                    parameters: gi(i.slice(1))
                }
            }, t;
            var t, n, e, r, i
        },
        yi = {
            init: function() {
                return xi({
                    readState: function() {
                        return "No State required"
                    }
                })
            }
        },
        xi = function(t) {
            return t
        },
        wi = function(t, r) {
            var i = {};
            return ct(t, function(t, o) {
                ct(t, function(t, n) {
                    var e = Mt(n, [])(i);
                    i[n] = e.concat([r(o, t)])
                })
            }), i
        },
        Si = function(t) {
            return {
                classes: t.classes !== undefined ? t.classes : [],
                attributes: t.attributes !== undefined ? t.attributes : {},
                styles: t.styles !== undefined ? t.styles : {}
            }
        },
        Ci = function(t, n) {
            return e = g.apply(undefined, [t.handler].concat(n)), o = t.purpose(), {
                cHandler: e,
                purpose: nt(o)
            };
            var e, o
        },
        ki = function(t) {
            return t.cHandler
        },
        Oi = function(t, n) {
            return {
                name: nt(t),
                handler: nt(n)
            }
        },
        Ei = function(t, n, e) {
            var o, r, i = P({}, e, (o = t, r = {}, W(n, function(t) {
                r[t.name()] = t.handlers(o)
            }), r));
            return wi(i, Oi)
        },
        Ti = function(t) {
            var n, i = E(n = t) ? {
                can: nt(!0),
                abort: nt(!1),
                run: n
            } : n;
            return function(t, n) {
                for (var e = [], o = 2; o < arguments.length; o++) e[o - 2] = arguments[o];
                var r = [t, n].concat(e);
                i.abort.apply(undefined, r) ? n.stop() : i.can.apply(undefined, r) && i.run.apply(undefined, r)
            }
        },
        Bi = function(t, n, e) {
            var o, r, i = n[e];
            return i ? function(u, a, t, c) {
                var n = t.slice(0);
                try {
                    var e = n.sort(function(t, n) {
                        var e = t[a](),
                            o = n[a](),
                            r = c.indexOf(e),
                            i = c.indexOf(o);
                        if (-1 === r) throw new Error("The ordering for " + u + " does not have an entry for " + e + ".\nOrder specified: " + un(c, null, 2));
                        if (-1 === i) throw new Error("The ordering for " + u + " does not have an entry for " + o + ".\nOrder specified: " + un(c, null, 2));
                        return r < i ? -1 : i < r ? 1 : 0
                    });
                    return z.value(e)
                } catch (o) {
                    return z.error([o])
                }
            }("Event: " + e, "name", t, i).map(function(t) {
                var n = F(t, function(t) {
                    return t.handler()
                });
                return Je(n)
            }) : (o = e, r = t, z.error(["The event (" + o + ') has more than one behaviour that listens to it.\nWhen this occurs, you must specify an event ordering for the behaviours in your spec (e.g. [ "listing", "toggling" ]).\nThe behaviours that can trigger it are: ' + un(F(r, function(t) {
                return t.name()
            }), null, 2)]))
        },
        Ai = function(t, i) {
            var n = lt(t, function(o, r) {
                return (1 === o.length ? z.value(o[0].handler()) : Bi(o, i, r)).map(function(t) {
                    var n = Ti(t),
                        e = 1 < o.length ? I(i, function(n) {
                            return D(o, function(t) {
                                return t.name() === n
                            })
                        }).join(" > ") : o[0].name();
                    return It(r, {
                        handler: n,
                        purpose: nt(e)
                    })
                })
            });
            return Vt(n, {})
        },
        Di = function(t) {
            return Tn("custom.definition", pn([wn("dom", "dom", Ct(), pn([Pn("tag"), Zn("styles", {}), Zn("classes", []), Zn("attributes", {}), Yn("value"), Yn("innerHtml")])), Pn("components"), Pn("uid"), Zn("events", {}), Zn("apis", {}), wn("eventOrder", "eventOrder", (n = {
                "alloy.execute": ["disabling", "alloy.base.behaviour", "toggling", "typeaheadevents"],
                "alloy.focus": ["alloy.base.behaviour", "focusing", "keying"],
                "alloy.system.init": ["alloy.base.behaviour", "disabling", "toggling", "representing"],
                input: ["alloy.base.behaviour", "representing", "streaming", "invalidating"],
                "alloy.system.detached": ["alloy.base.behaviour", "representing", "item-events", "tooltipping"],
                mousedown: ["focusing", "alloy.base.behaviour", "item-type-events"],
                mouseover: ["item-type-events", "tooltipping"]
            }, wt.mergeWithThunk(nt(n))), Mn()), Yn("domModification")]), t);
            var n
        },
        _i = function(t, n) {
            var e = qr(t, n);
            return e === undefined || "" === e ? [] : e.split(" ")
        },
        Mi = function(t) {
            return t.dom().classList !== undefined
        },
        Fi = function(t, n) {
            return r = n, i = _i(e = t, o = "class").concat([r]), Xr(e, o, i.join(" ")), !0;
            var e, o, r, i
        },
        Ii = function(t, n) {
            return r = n, 0 < (i = I(_i(e = t, o = "class"), function(t) {
                return t !== r
            })).length ? Xr(e, o, i.join(" ")) : $r(e, o), !1;
            var e, o, r, i
        },
        Ri = function(t, n) {
            Mi(t) ? t.dom().classList.add(n) : Fi(t, n)
        },
        Vi = function(t) {
            0 === (Mi(t) ? t.dom().classList : _i(t, "class")).length && $r(t, "class")
        },
        Ni = function(t, n) {
            Mi(t) ? t.dom().classList.remove(n) : Ii(t, n);
            Vi(t)
        },
        Hi = function(t, n) {
            return Mi(t) && t.dom().classList.contains(n)
        },
        Pi = function(n, t) {
            W(t, function(t) {
                Ri(n, t)
            })
        },
        zi = function(n, t) {
            W(t, function(t) {
                Ni(n, t)
            })
        },
        Li = function(t) {
            return t.style !== undefined && E(t.style.getPropertyValue)
        },
        ji = function(t, n, e) {
            if (!L(e)) throw H.console.error("Invalid call to CSS.set. Property ", n, ":: Value ", e, ":: Element ", t), new Error("CSS value must be a string: " + e);
            Li(t) && t.style.setProperty(n, e)
        },
        Ui = function(t, n) {
            Li(t) && t.style.removeProperty(n)
        },
        Wi = function(t, n, e) {
            var o = t.dom();
            ji(o, n, e)
        },
        Gi = function(t, n) {
            var e = t.dom();
            ct(n, function(t, n) {
                ji(e, n, t)
            })
        },
        Xi = function(t, n) {
            var e = t.dom(),
                o = H.window.getComputedStyle(e).getPropertyValue(n),
                r = "" !== o || or(t) ? o : Yi(e, n);
            return null === r ? undefined : r
        },
        Yi = function(t, n) {
            return Li(t) ? t.style.getPropertyValue(n) : ""
        },
        qi = function(t, n) {
            var e = t.dom(),
                o = Yi(e, n);
            return et.from(o).filter(function(t) {
                return 0 < t.length
            })
        },
        Ki = function(t, n, e) {
            var o = fe.fromTag(t);
            return Wi(o, n, e), qi(o, n).isSome()
        },
        $i = function(t, n) {
            var e = t.dom();
            Ui(e, n), Kr(t, "style") && "" === qr(t, "style").replace(/^\s+|\s+$/g, "") && $r(t, "style")
        },
        Ji = function(t) {
            return t.dom().offsetWidth
        },
        Qi = function(t) {
            return t.dom().value
        },
        Zi = function(t, n) {
            if (n === undefined) throw new Error("Value.set was undefined");
            t.dom().value = n
        },
        tu = function(t, n) {
            return e = t, r = F(o = n, function(t) {
                return Qn(t.name(), [Pn("config"), Zn("state", yi)])
            }), i = Tn("component.behaviours", pn(r), e.behaviours).fold(function(t) {
                throw new Error(Dn(t) + "\nComplete spec:\n" + un(e, null, 2))
            }, function(t) {
                return t
            }), {
                list: o,
                data: st(i, function(t) {
                    var n = t.map(function(t) {
                        return {
                            config: t.config,
                            state: t.state.init(t.config)
                        }
                    });
                    return function() {
                        return n
                    }
                })
            };
            var e, o, r, i
        },
        nu = function(t) {
            var n, e, o, r = (n = t, e = Mt("behaviours", {})(n), o = I(ut(e), function(t) {
                return e[t] !== undefined
            }), F(o, function(t) {
                return e[t].me
            }));
            return tu(t, r)
        },
        eu = function(t, n, e) {
            var o, r, i, u = P({}, (o = t).dom, {
                    uid: o.uid,
                    domChildren: F(o.components, function(t) {
                        return t.element()
                    })
                }),
                a = t.domModification.fold(function() {
                    return Si({})
                }, Si),
                c = {
                    "alloy.base.modification": a
                },
                s = 0 < n.length ? function(n, t, e, o) {
                    var r = P({}, t);
                    W(e, function(t) {
                        r[t.name()] = t.exhibit(n, o)
                    });
                    var i = wi(r, function(t, n) {
                            return {
                                name: t,
                                modification: n
                            }
                        }),
                        u = function(t) {
                            return R(t, function(t, n) {
                                return P({}, n.modification, t)
                            }, {})
                        },
                        a = R(i.classes, function(t, n) {
                            return n.modification.concat(t)
                        }, []),
                        c = u(i.attributes),
                        s = u(i.styles);
                    return Si({
                        classes: a,
                        attributes: c,
                        styles: s
                    })
                }(e, c, n, u) : a;
            return i = s, P({}, r = u, {
                attributes: P({}, r.attributes, i.attributes),
                styles: P({}, r.styles, i.styles),
                classes: r.classes.concat(i.classes)
            })
        },
        ou = function(t, n, e) {
            var o, r, i, u, a, c, s = {
                "alloy.base.behaviour": (o = t, o.events)
            };
            return (r = e, i = t.eventOrder, u = n, a = s, c = Ei(r, u, a), Ai(c, i)).getOrDie()
        },
        ru = function(e) {
            var t = function() {
                    return f
                },
                o = ce(mi),
                n = Bn(Di(e)),
                r = nu(e),
                i = r.list,
                u = r.data,
                a = function(t) {
                    var n = fe.fromTag(t.tag);
                    Yr(n, t.attributes), Pi(n, t.classes), Gi(n, t.styles), t.innerHtml.each(function(t) {
                        return Wr(n, t)
                    });
                    var e = t.domChildren;
                    return Pr(n, e), t.value.each(function(t) {
                        Zi(n, t)
                    }), t.uid, ci(n, t.uid), n
                }(eu(n, i, u)),
                c = ou(n, i, u),
                s = ce(n.components),
                f = {
                    getSystem: o.get,
                    config: function(t) {
                        var n = u;
                        return (E(n[t.name()]) ? n[t.name()] : function() {
                            throw new Error("Could not find " + t.name() + " in " + un(e, null, 2))
                        })()
                    },
                    hasConfigured: function(t) {
                        return E(u[t.name()])
                    },
                    spec: nt(e),
                    readState: function(t) {
                        return u[t]().map(function(t) {
                            return t.state.readState()
                        }).getOr("not enabled")
                    },
                    getApis: function() {
                        return n.apis
                    },
                    connect: function(t) {
                        o.set(t)
                    },
                    disconnect: function() {
                        o.set(di(t))
                    },
                    element: nt(a),
                    syncComponents: function() {
                        var t = Fr(a),
                            n = K(t, function(t) {
                                return o.get().getByDom(t).fold(function() {
                                    return []
                                }, function(t) {
                                    return [t]
                                })
                            });
                        s.set(n)
                    },
                    components: s.get,
                    events: nt(c)
                };
            return f
        },
        iu = function(t) {
            var n, e, o = li(t),
                r = o.events,
                i = h(o, ["events"]),
                u = (n = i, e = Mt("components", [])(n), F(e, su)),
                a = P({}, i, {
                    events: P({}, ni, r),
                    components: u
                });
            return z.value(ru(a))
        },
        uu = function(t) {
            var n = fe.fromText(t);
            return au({
                element: n
            })
        },
        au = function(t) {
            var n = An("external.component", gn([Pn("element"), Yn("uid")]), t),
                e = ce(di());
            n.uid.each(function(t) {
                ci(n.element, t)
            });
            var o = {
                getSystem: e.get,
                config: et.none,
                hasConfigured: nt(!1),
                connect: function(t) {
                    e.set(t)
                },
                disconnect: function() {
                    e.set(di(function() {
                        return o
                    }))
                },
                getApis: function() {
                    return {}
                },
                element: nt(n.element),
                spec: nt(t),
                readState: nt("No state"),
                syncComponents: tt,
                components: nt([]),
                events: nt({})
            };
            return vi(o)
        },
        cu = fi,
        su = function(n) {
            return (t = n, Ft(t, hi)).fold(function() {
                var t = n.hasOwnProperty("uid") ? n : P({
                    uid: cu("")
                }, n);
                return iu(t).getOrDie()
            }, function(t) {
                return t
            });
            var t
        },
        fu = vi,
        lu = function(t, n, e) {
            return ur(t, function(t) {
                return Ge(t, n)
            }, e)
        },
        du = function(t, n) {
            return e = n, r = (o = t) === undefined ? H.document : o.dom(), Xe(r) ? et.none() : et.from(r.querySelector(e)).map(fe.fromDom);
            var e, o, r
        },
        mu = function(t, n, e) {
            return Xo(Ge, lu, t, n, e)
        },
        gu = function() {
            var n = oi("aria-owns");
            return {
                id: nt(n),
                link: function(t) {
                    Xr(t, "aria-owns", n)
                },
                unlink: function(t) {
                    $r(t, "aria-owns")
                }
            }
        },
        pu = function(n, t) {
            return (e = t, ar(e, function(t) {
                if (!tr(t)) return !1;
                var n = qr(t, "id");
                return n !== undefined && -1 < n.indexOf("aria-owns")
            }).bind(function(t) {
                var n = qr(t, "id"),
                    e = Ar(t);
                return du(e, '[aria-owns="' + n + '"]')
            })).exists(function(t) {
                return hu(n, t)
            });
            var e
        },
        hu = function(n, t) {
            return e = t, r = nt(!(o = function(t) {
                return qe(t, n.element())
            })), ar(e, o, r).isSome() || pu(n, t);
            var e, o, r
        },
        vu = function(t) {
            for (var n = [], e = function(t) {
                    n.push(t)
                }, o = 0; o < t.length; o++) t[o].each(e);
            return n
        },
        bu = function(t, n) {
            for (var e = 0; e < t.length; e++) {
                var o = n(t[e], e);
                if (o.isSome()) return o
            }
            return et.none()
        },
        yu = "unknown";
    (Jo = $o || ($o = {}))[Jo.STOP = 0] = "STOP", Jo[Jo.NORMAL = 1] = "NORMAL", Jo[Jo.LOGGING = 2] = "LOGGING";
    var xu = ce({}),
        wu = function(n, t, e) {
            var o, r, i, u;
            switch (Ft(xu.get(), n).orThunk(function() {
                var t = ut(xu.get());
                return bu(t, function(t) {
                    return -1 < n.indexOf(t) ? et.some(xu.get()[t]) : et.none()
                })
            }).getOr($o.NORMAL)) {
                case $o.NORMAL:
                    return e(ku());
                case $o.LOGGING:
                    var a = (o = n, r = t, i = [], u = (new Date).getTime(), {
                            logEventCut: function(t, n, e) {
                                i.push({
                                    outcome: "cut",
                                    target: n,
                                    purpose: e
                                })
                            },
                            logEventStopped: function(t, n, e) {
                                i.push({
                                    outcome: "stopped",
                                    target: n,
                                    purpose: e
                                })
                            },
                            logNoParent: function(t, n, e) {
                                i.push({
                                    outcome: "no-parent",
                                    target: n,
                                    purpose: e
                                })
                            },
                            logEventNoHandlers: function(t, n) {
                                i.push({
                                    outcome: "no-handlers-left",
                                    target: n
                                })
                            },
                            logEventResponse: function(t, n, e) {
                                i.push({
                                    outcome: "response",
                                    purpose: e,
                                    target: n
                                })
                            },
                            write: function() {
                                var t = (new Date).getTime();
                                D(["mousemove", "mouseover", "mouseout", Bo()], o) || H.console.log(o, {
                                    event: o,
                                    time: t - u,
                                    target: r.dom(),
                                    sequence: F(i, function(t) {
                                        return D(["cut", "stopped", "response"], t.outcome) ? "{" + t.purpose + "} " + t.outcome + " at (" + Zr(t.target) + ")" : t.outcome
                                    })
                                })
                            }
                        }),
                        c = e(a);
                    return a.write(), c;
                case $o.STOP:
                    return !0
            }
        },
        Su = ["alloy/data/Fields", "alloy/debugging/Debugging"],
        Cu = function(t, n, e) {
            return wu(t, n, e)
        },
        ku = nt({
            logEventCut: tt,
            logEventStopped: tt,
            logNoParent: tt,
            logEventNoHandlers: tt,
            logEventResponse: tt,
            write: tt
        }),
        Ou = nt([Pn("menu"), Pn("selectedMenu")]),
        Eu = nt([Pn("item"), Pn("selectedItem")]),
        Tu = (nt(pn(Eu().concat(Ou()))), nt(pn(Eu()))),
        Bu = Wn("initSize", [Pn("numColumns"), Pn("numRows")]),
        Au = function() {
            return Wn("markers", [Pn("backgroundMenu")].concat(Ou()).concat(Eu()))
        },
        Du = function(t) {
            return Wn("markers", F(t, Pn))
        },
        _u = function(t, n, e) {
            ! function() {
                var t = new Error;
                if (t.stack === undefined) return;
                var n = t.stack.split("\n");
                N(n, function(n) {
                    return 0 < n.indexOf("alloy") && !_(Su, function(t) {
                        return -1 < n.indexOf(t)
                    })
                }).getOr(yu)
            }();
            return wn(n, n, e, On(function(e) {
                return z.value(function() {
                    for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                    return e.apply(undefined, t)
                })
            }))
        },
        Mu = function(t) {
            return _u(0, t, St(tt))
        },
        Fu = function(t) {
            return _u(0, t, St(et.none))
        },
        Iu = function(t) {
            return _u(0, t, Ct())
        },
        Ru = function(t) {
            return _u(0, t, Ct())
        },
        Vu = function(t, n) {
            return ae(t, nt(n))
        },
        Nu = function(t) {
            return ae(t, d)
        },
        Hu = nt(Bu),
        Pu = function(e, o, r) {
            return Cr(function(t, n) {
                r(t, e, o)
            })
        },
        zu = function(t, n, e, o, r, i) {
            var u, a, c = gn(t),
                s = Qn(n, [(u = "config", a = t, qn(u, gn(a)))]);
            return Uu(c, s, n, e, o, r, i)
        },
        Lu = function(r, i, u) {
            var t, n, e, o, a, c;
            return t = function(e) {
                for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
                var o = [e].concat(t);
                return e.config({
                    name: nt(r)
                }).fold(function() {
                    throw new Error("We could not find any behaviour configuration for: " + r + ". Using API: " + u)
                }, function(t) {
                    var n = Array.prototype.slice.call(o, 1);
                    return i.apply(undefined, [e, t.config, t.state].concat(n))
                })
            }, n = u, e = i.toString(), o = e.indexOf(")") + 1, a = e.indexOf("("), c = e.substring(a + 1, o - 1).split(/,\s*/), t.toFunctionAnnotation = function() {
                return {
                    name: n,
                    parameters: gi(c.slice(0, 1).concat(c.slice(3)))
                }
            }, t
        },
        ju = function(t) {
            return {
                key: t,
                value: undefined
            }
        },
        Uu = function(e, t, o, r, n, i, u) {
            var a = function(t) {
                    return Nt(t, o) ? t[o]() : et.none()
                },
                c = st(n, function(t, n) {
                    return Lu(o, t, n)
                }),
                s = st(i, function(t, n) {
                    return pi(t, n)
                }),
                f = P({}, s, c, {
                    revoke: g(ju, o),
                    config: function(t) {
                        var n = An(o + "-config", e, t);
                        return {
                            key: o,
                            value: {
                                config: n,
                                me: f,
                                configAsRaw: xt(function() {
                                    return An(o + "-config", e, t)
                                }),
                                initialConfig: t,
                                state: u
                            }
                        }
                    },
                    schema: function() {
                        return t
                    },
                    exhibit: function(t, e) {
                        return a(t).bind(function(n) {
                            return Ft(r, "exhibit").map(function(t) {
                                return t(e, n.config, n.state)
                            })
                        }).getOr(Si({}))
                    },
                    name: function() {
                        return o
                    },
                    handlers: function(t) {
                        return a(t).map(function(t) {
                            return Mt("events", function(t, n) {
                                return {}
                            })(r)(t.config, t.state)
                        }).getOr({})
                    }
                });
            return f
        },
        Wu = function(t) {
            return Rt(t)
        },
        Gu = gn([Pn("fields"), Pn("name"), Zn("active", {}), Zn("apis", {}), Zn("state", yi), Zn("extra", {})]),
        Xu = function(t) {
            var n = An("Creating behaviour: " + t.name, Gu, t);
            return zu(n.fields, n.name, n.active, n.apis, n.extra, n.state)
        },
        Yu = gn([Pn("branchKey"), Pn("branches"), Pn("name"), Zn("active", {}), Zn("apis", {}), Zn("state", yi), Zn("extra", {})]),
        qu = function(t) {
            var n, e, o, r, i, u, a, c, s = An("Creating behaviour: " + t.name, Yu, t);
            return n = _n(s.branchKey, s.branches), e = s.name, o = s.active, r = s.apis, i = s.extra, u = s.state, c = Qn(e, [qn("config", a = n)]), Uu(a, c, e, o, r, i, u)
        },
        Ku = nt(undefined),
        $u = /* */ Object.freeze({
            events: function(a) {
                return fr([mr(xo(), function(r, i) {
                    var t, n, u = a.channels,
                        e = ut(u),
                        o = (t = e, (n = i).universal() ? t : I(t, function(t) {
                            return D(n.channels(), t)
                        }));
                    W(o, function(t) {
                        var n = u[t],
                            e = n.schema,
                            o = An("channel[" + t + "] data\nReceiver: " + Zr(r.element()), e, i.data());
                        n.onReceive(r, o)
                    })
                })])
            }
        }),
        Ju = [zn("channels", En(z.value, gn([Iu("onReceive"), Zn("schema", Mn())])))],
        Qu = Xu({
            fields: Ju,
            name: "receiving",
            active: $u
        }),
        Zu = /* */ Object.freeze({
            exhibit: function(t, n) {
                return Si({
                    classes: [],
                    styles: n.useFixed ? {} : {
                        position: "relative"
                    }
                })
            }
        }),
        ta = function(e, o) {
            return {
                left: nt(e),
                top: nt(o),
                translate: function(t, n) {
                    return ta(e + t, o + n)
                }
            }
        },
        na = ta,
        ea = function(t, n) {
            return t !== undefined ? t : n !== undefined ? n : 0
        },
        oa = function(t) {
            var n, e, o = t.dom().ownerDocument,
                r = o.body,
                i = (n = fe.fromDom(o), (e = n.dom()) === e.window && n instanceof H.Window ? n : er(n) ? e.defaultView || e.parentWindow : null),
                u = o.documentElement,
                a = ea(i.pageYOffset, u.scrollTop),
                c = ea(i.pageXOffset, u.scrollLeft),
                s = ea(u.clientTop, r.clientTop),
                f = ea(u.clientLeft, r.clientLeft);
            return ra(t).translate(c - f, a - s)
        },
        ra = function(t) {
            var n, e, o, r = t.dom(),
                i = r.ownerDocument,
                u = i.body,
                a = fe.fromDom(i.documentElement);
            return u === r ? na(u.offsetLeft, u.offsetTop) : (n = t, e = a || fe.fromDom(H.document.documentElement), ur(n, g(qe, e)).isSome() ? (o = r.getBoundingClientRect(), na(o.left, o.top)) : na(0, 0))
        },
        ia = (Pe.detect().browser.isSafari(), function(t) {
            var n = t !== undefined ? t.dom() : H.document,
                e = n.body.scrollLeft || n.documentElement.scrollLeft,
                o = n.body.scrollTop || n.documentElement.scrollTop;
            return na(e, o)
        });

    function ua(o, r) {
        var t = function(t) {
                var n = r(t);
                if (n <= 0 || null === n) {
                    var e = Xi(t, o);
                    return parseFloat(e) || 0
                }
                return n
            },
            i = function(r, t) {
                return V(t, function(t, n) {
                    var e = Xi(r, n),
                        o = e === undefined ? 0 : parseInt(e, 10);
                    return isNaN(o) ? t : t + o
                }, 0)
            };
        return {
            set: function(t, n) {
                if (!U(n) && !n.match(/^[0-9]+$/)) throw new Error(o + ".set accepts only positive integer values. Value was " + n);
                var e = t.dom();
                Li(e) && (e.style[o] = n + "px")
            },
            get: t,
            getOuter: t,
            aggregate: i,
            max: function(t, n, e) {
                var o = i(t, e);
                return o < n ? n - o : 0
            }
        }
    }
    var aa = ua("width", function(t) {
            return t.dom().offsetWidth
        }),
        ca = function(t) {
            return aa.get(t)
        },
        sa = function(t) {
            return aa.getOuter(t)
        },
        fa = ua("height", function(t) {
            var n = t.dom();
            return or(t) ? n.getBoundingClientRect().height : n.offsetHeight
        }),
        la = function(t) {
            return fa.get(t)
        },
        da = function(t) {
            return fa.getOuter(t)
        },
        ma = Br(["x", "y", "width", "height", "maxHeight", "direction", "classes", "label", "candidateYforTest"], []),
        ga = Or("position", "left", "top", "right", "bottom"),
        pa = pt([{
            southeast: []
        }, {
            southwest: []
        }, {
            northeast: []
        }, {
            northwest: []
        }, {
            south: []
        }, {
            north: []
        }, {
            east: []
        }, {
            west: []
        }]),
        ha = pa.southeast,
        va = pa.southwest,
        ba = pa.northeast,
        ya = pa.northwest,
        xa = pa.south,
        wa = pa.north,
        Sa = pa.east,
        Ca = pa.west,
        ka = Or("point", "width", "height"),
        Oa = Or("x", "y", "width", "height"),
        Ea = function(t, n, e, o) {
            return {
                x: nt(t),
                y: nt(n),
                width: nt(e),
                height: nt(o),
                right: nt(t + e),
                bottom: nt(n + o)
            }
        },
        Ta = function(t) {
            var n = oa(t),
                e = sa(t),
                o = da(t);
            return Ea(n.left(), n.top(), e, o)
        },
        Ba = function(o, t) {
            return o.view(t).fold(nt([]), function(t) {
                var n = o.owner(t),
                    e = Ba(o, n);
                return [t].concat(e)
            })
        },
        Aa = /* */ Object.freeze({
            view: function(t) {
                return (t.dom() === H.document ? et.none() : et.from(t.dom().defaultView.frameElement)).map(fe.fromDom)
            },
            owner: function(t) {
                return Ar(t)
            }
        }),
        Da = function(o) {
            var t, n, e, r, i = fe.fromDom(H.document),
                u = ia(i);
            return (t = o, e = (n = Aa).owner(t), r = Ba(n, e), et.some(r)).fold(g(oa, o), function(t) {
                var n = ra(o),
                    e = R(t, function(t, n) {
                        var e = ra(n);
                        return {
                            left: t.left + e.left(),
                            top: t.top + e.top()
                        }
                    }, {
                        left: 0,
                        top: 0
                    });
                return na(e.left + n.left() + u.left(), e.top + n.top() + u.top())
            })
        },
        _a = function() {
            var t = H.window.innerWidth,
                n = H.window.innerHeight,
                e = fe.fromDom(H.document),
                o = ia(e);
            return Ea(o.left(), o.top(), t, n)
        },
        Ma = pt([{
            none: []
        }, {
            relative: ["x", "y", "width", "height"]
        }, {
            fixed: ["x", "y", "width", "height"]
        }]),
        Fa = function(t, n, e, o, r, i) {
            var u, a, c, s, f, l, d, m, g, p = n.x() - e,
                h = n.y() - o,
                v = r - (p + n.width()),
                b = i - (h + n.height()),
                y = et.some(p),
                x = et.some(h),
                w = et.some(v),
                S = et.some(b),
                C = et.none();
            return u = n.direction(), a = function() {
                return ga(t, y, x, C, C)
            }, c = function() {
                return ga(t, C, x, w, C)
            }, s = function() {
                return ga(t, y, C, C, S)
            }, f = function() {
                return ga(t, C, C, w, S)
            }, l = function() {
                return ga(t, y, x, C, C)
            }, d = function() {
                return ga(t, y, C, C, S)
            }, m = function() {
                return ga(t, y, x, C, C)
            }, g = function() {
                return ga(t, C, x, w, C)
            }, u.fold(a, c, s, f, l, d, m, g)
        },
        Ia = function(t, n) {
            var e = g(Da, n),
                o = t.fold(e, e, function() {
                    var t = ia();
                    return Da(n).translate(-t.left(), -t.top())
                }),
                r = sa(n),
                i = da(n);
            return Ea(o.left(), o.top(), r, i)
        },
        Ra = Ma.relative,
        Va = Ma.fixed,
        Na = Or("anchorBox", "origin"),
        Ha = pt([{
            fit: ["reposition"]
        }, {
            nofit: ["reposition", "deltaW", "deltaH"]
        }]),
        Pa = function(t, N, H, P, z) {
            var L = H.width(),
                j = H.height(),
                o = function(t, o, r, i) {
                    var n, e, u, a, c, s, f, l, d, m, g, p, h, v, b, y, x, w, S, C, k, O, E, T, B, A, D, _, M, F, I, R, V = t(N, H, P);
                    return (e = L, u = j, a = z, d = (n = V).x(), m = n.y(), g = n.bubble().offset().left(), p = n.bubble().offset().top(), h = a.x(), v = a.y(), b = a.width(), y = a.height(), C = v <= (w = m + p), k = (S = h <= (x = d + g)) && C, O = x + e <= h + b && w + u <= v + y, E = S ? Math.min(e, h + b - x) : Math.abs(h - (x + e)), T = C ? Math.min(u, v + y - w) : Math.abs(v - (w + u)), B = a.x() + a.width(), A = Math.max(a.x(), x), D = Math.min(A, B), M = nt((_ = C ? w : w + (u - T)) + T - v), F = nt(v + y - _), c = n.direction(), f = s = F, l = M, I = c.fold(s, s, l, l, s, l, f, f), R = ma({
                        x: D,
                        y: _,
                        width: E,
                        height: T,
                        maxHeight: I,
                        direction: n.direction(),
                        classes: {
                            on: n.bubble().classesOn(),
                            off: n.bubble().classesOff()
                        },
                        label: n.label(),
                        candidateYforTest: w
                    }), k && O ? Ha.fit(R) : Ha.nofit(R, E, T)).fold(Ha.fit, function(t, n, e) {
                        return i < e || r < n ? Ha.nofit(t, n, e) : Ha.nofit(o, r, i)
                    })
                };
            return V(t, function(t, n) {
                var e = g(o, n);
                return t.fold(Ha.fit, e)
            }, Ha.nofit(ma({
                x: N.x(),
                y: N.y(),
                width: H.width(),
                height: H.height(),
                maxHeight: H.height(),
                direction: ha(),
                classes: [],
                label: "none",
                candidateYforTest: N.y()
            }), -1, -1)).fold(d, d)
        },
        za = function(t, n, e, o) {
            $i(n, "max-height");
            var r, i = {
                width: nt(sa(r = n)),
                height: nt(da(r))
            };
            return Pa(o.preference(), t, i, e, o.bounds())
        },
        La = function(t, n, e) {
            var o, r, i, u, a, c = function(t) {
                    return t + "px"
                },
                s = (o = e.origin(), r = n, o.fold(function() {
                    return ga("absolute", et.some(r.x()), et.some(r.y()), et.none(), et.none())
                }, function(t, n, e, o) {
                    return Fa("absolute", r, t, n, e, o)
                }, function(t, n, e, o) {
                    return Fa("fixed", r, t, n, e, o)
                }));
            i = t, u = {
                position: et.some(s.position()),
                left: s.left().map(c),
                top: s.top().map(c),
                right: s.right().map(c),
                bottom: s.bottom().map(c)
            }, a = i.dom(), ct(u, function(t, n) {
                t.fold(function() {
                    Ui(a, n)
                }, function(t) {
                    ji(a, n, t)
                })
            })
        },
        ja = function(t, n) {
            var e, o, r;
            e = t, o = Math.floor(n), r = fa.max(e, o, ["margin-top", "border-top-width", "padding-top", "padding-bottom", "border-bottom-width", "margin-bottom"]), Wi(e, "max-height", r + "px")
        },
        Ua = nt(function(t, n) {
            ja(t, n), Gi(t, {
                "overflow-x": "hidden",
                "overflow-y": "auto"
            })
        }),
        Wa = nt(function(t, n) {
            ja(t, n)
        }),
        Ga = Br(["bounds", "origin", "preference", "maxHeightFunction"], []),
        Xa = function(t, n, e, o, r, i) {
            var u, a, c, s, f, l = (u = i, a = "maxHeightFunction", c = Ua(), u[a] === undefined ? c : u[a]),
                d = t.anchorBox(),
                m = t.origin(),
                g = Ga({
                    bounds: (s = m, f = r, f.fold(function() {
                        return s.fold(_a, _a, Ea)
                    }, function(t) {
                        return s.fold(t, t, Ea)
                    })),
                    origin: m,
                    preference: o,
                    maxHeightFunction: l
                });
            Ya(d, n, e, g)
        },
        Ya = function(t, n, e, o) {
            var r, i, u, a, c = za(t, n, e, o);
            La(n, c, o), r = n, i = c.classes(), zi(r, i.off), Pi(r, i.on), u = n, a = c, o.maxHeightFunction()(u, a.maxHeight())
        },
        qa = ["valignCentre", "alignLeft", "alignRight", "alignCentre", "top", "bottom", "left", "right"],
        Ka = function(t, n, e) {
            var r = function(t) {
                    return Ft(e, t).getOr([])
                },
                o = function(t, n, e) {
                    var o = Q(qa, e);
                    return {
                        offset: function() {
                            return na(t, n)
                        },
                        classesOn: function() {
                            return K(e, r)
                        },
                        classesOff: function() {
                            return K(o, r)
                        }
                    }
                };
            return {
                southeast: function() {
                    return o(-t, n, ["top", "alignLeft"])
                },
                southwest: function() {
                    return o(t, n, ["top", "alignRight"])
                },
                south: function() {
                    return o(-t / 2, n, ["top", "alignCentre"])
                },
                northeast: function() {
                    return o(-t, -n, ["bottom", "alignLeft"])
                },
                northwest: function() {
                    return o(t, -n, ["bottom", "alignRight"])
                },
                north: function() {
                    return o(-t / 2, -n, ["bottom", "alignCentre"])
                },
                east: function() {
                    return o(t, -n / 2, ["valignCentre", "left"])
                },
                west: function() {
                    return o(-t, -n / 2, ["valignCentre", "right"])
                }
            }
        },
        $a = function() {
            return Ka(0, 0, {})
        },
        Ja = Or("x", "y", "bubble", "direction", "label"),
        Qa = function(t) {
            return t.x()
        },
        Za = function(t, n) {
            return t.x() + t.width() / 2 - n.width() / 2
        },
        tc = function(t, n) {
            return t.x() + t.width() - n.width()
        },
        nc = function(t, n) {
            return t.y() - n.height()
        },
        ec = function(t) {
            return t.y() + t.height()
        },
        oc = function(t, n) {
            return t.y() + t.height() / 2 - n.height() / 2
        },
        rc = function(t, n, e) {
            return Ja(Qa(t), ec(t), e.southeast(), ha(), "layout-se")
        },
        ic = function(t, n, e) {
            return Ja(tc(t, n), ec(t), e.southwest(), va(), "layout-sw")
        },
        uc = function(t, n, e) {
            return Ja(Qa(t), nc(t, n), e.northeast(), ba(), "layout-ne")
        },
        ac = function(t, n, e) {
            return Ja(tc(t, n), nc(t, n), e.northwest(), ya(), "layout-nw")
        },
        cc = function(t, n, e) {
            return Ja(Za(t, n), nc(t, n), e.north(), wa(), "layout-n")
        },
        sc = function(t, n, e) {
            return Ja(Za(t, n), ec(t), e.south(), xa(), "layout-s")
        },
        fc = function(t, n, e) {
            return Ja((o = t).x() + o.width(), oc(t, n), e.east(), Sa(), "layout-e");
            var o
        },
        lc = function(t, n, e) {
            return Ja((o = n, t.x() - o.width()), oc(t, n), e.west(), Ca(), "layout-w");
            var o
        },
        dc = function() {
            return [rc, ic, uc, ac, sc, cc, fc, lc]
        },
        mc = function() {
            return [ic, rc, ac, uc, sc, cc, fc, lc]
        },
        gc = function(t) {
            return t
        },
        pc = function(n, e) {
            return function(t) {
                return "rtl" === hc(t) ? e : n
            }
        },
        hc = function(t) {
            return "rtl" === Xi(t, "direction") ? "rtl" : "ltr"
        },
        vc = function() {
            return Qn("layouts", [Pn("onLtr"), Pn("onRtl")])
        },
        bc = function(n, t, e, o) {
            var r = t.layouts.map(function(t) {
                    return t.onLtr(n)
                }).getOr(e),
                i = t.layouts.map(function(t) {
                    return t.onRtl(n)
                }).getOr(o);
            return pc(r, i)(n)
        },
        yc = [Pn("hotspot"), Yn("bubble"), Zn("overrides", {}), vc(), Vu("placement", function(t, n, e) {
            var o = n.hotspot,
                r = Ia(e, o.element()),
                i = bc(t.element(), n, dc(), mc());
            return et.some(gc({
                anchorBox: r,
                bubble: n.bubble.getOr($a()),
                overrides: n.overrides,
                layouts: i,
                placer: et.none()
            }))
        })],
        xc = [Pn("x"), Pn("y"), Zn("height", 0), Zn("width", 0), Zn("bubble", $a()), Zn("overrides", {}), vc(), Vu("placement", function(t, n, e) {
            var o = Ea(n.x, n.y, n.width, n.height),
                r = bc(t.element(), n, dc(), mc());
            return et.some(gc({
                anchorBox: o,
                bubble: n.bubble,
                overrides: n.overrides,
                layouts: r,
                placer: et.none()
            }))
        })],
        wc = {
            create: Or("start", "soffset", "finish", "foffset")
        },
        Sc = pt([{
            before: ["element"]
        }, {
            on: ["element", "offset"]
        }, {
            after: ["element"]
        }]),
        Cc = (Sc.before, Sc.on, Sc.after, function(t) {
            return t.fold(d, d, d)
        }),
        kc = pt([{
            domRange: ["rng"]
        }, {
            relative: ["startSitu", "finishSitu"]
        }, {
            exact: ["start", "soffset", "finish", "foffset"]
        }]),
        Oc = {
            domRange: kc.domRange,
            relative: kc.relative,
            exact: kc.exact,
            exactFromRange: function(t) {
                return kc.exact(t.start(), t.soffset(), t.finish(), t.foffset())
            },
            getWin: function(t) {
                var n = t.match({
                    domRange: function(t) {
                        return fe.fromDom(t.startContainer)
                    },
                    relative: function(t, n) {
                        return Cc(t)
                    },
                    exact: function(t, n, e, o) {
                        return t
                    }
                });
                return Dr(n)
            },
            range: wc.create
        },
        Ec = function(t, n, e) {
            var o, r, i = t.document.createRange();
            return o = i, n.fold(function(t) {
                o.setStartBefore(t.dom())
            }, function(t, n) {
                o.setStart(t.dom(), n)
            }, function(t) {
                o.setStartAfter(t.dom())
            }), r = i, e.fold(function(t) {
                r.setEndBefore(t.dom())
            }, function(t, n) {
                r.setEnd(t.dom(), n)
            }, function(t) {
                r.setEndAfter(t.dom())
            }), i
        },
        Tc = function(t, n, e, o, r) {
            var i = t.document.createRange();
            return i.setStart(n.dom(), e), i.setEnd(o.dom(), r), i
        },
        Bc = function(t) {
            return {
                left: nt(t.left),
                top: nt(t.top),
                right: nt(t.right),
                bottom: nt(t.bottom),
                width: nt(t.width),
                height: nt(t.height)
            }
        },
        Ac = pt([{
            ltr: ["start", "soffset", "finish", "foffset"]
        }, {
            rtl: ["start", "soffset", "finish", "foffset"]
        }]),
        Dc = function(t, n, e) {
            return n(fe.fromDom(e.startContainer), e.startOffset, fe.fromDom(e.endContainer), e.endOffset)
        },
        _c = function(t, n) {
            var r, e, o, i = (r = t, n.match({
                domRange: function(t) {
                    return {
                        ltr: nt(t),
                        rtl: et.none
                    }
                },
                relative: function(t, n) {
                    return {
                        ltr: xt(function() {
                            return Ec(r, t, n)
                        }),
                        rtl: xt(function() {
                            return et.some(Ec(r, n, t))
                        })
                    }
                },
                exact: function(t, n, e, o) {
                    return {
                        ltr: xt(function() {
                            return Tc(r, t, n, e, o)
                        }),
                        rtl: xt(function() {
                            return et.some(Tc(r, e, o, t, n))
                        })
                    }
                }
            }));
            return (o = (e = i).ltr()).collapsed ? e.rtl().filter(function(t) {
                return !1 === t.collapsed
            }).map(function(t) {
                return Ac.rtl(fe.fromDom(t.endContainer), t.endOffset, fe.fromDom(t.startContainer), t.startOffset)
            }).getOrThunk(function() {
                return Dc(0, Ac.ltr, o)
            }) : Dc(0, Ac.ltr, o)
        },
        Mc = function(t, n, e) {
            return n >= t.left && n <= t.right && e >= t.top && e <= t.bottom
        };
    var Fc = function T_(e, o) {
            var r = function(t) {
                    return e(t) ? et.from(t.dom().nodeValue) : et.none()
                },
                t = Pe.detect().browser,
                n = t.isIE() && 10 === t.version.major ? function(t) {
                    try {
                        return r(t)
                    } catch (n) {
                        return et.none()
                    }
                } : r;
            return {
                get: function(t) {
                    if (!e(t)) throw new Error("Can only get " + o + " value of a " + o + " node");
                    return n(t).getOr("")
                },
                getOption: n,
                set: function(t, n) {
                    if (!e(t)) throw new Error("Can only set raw " + o + " value of a " + o + " node");
                    t.dom().nodeValue = n
                }
            }
        }(nr, "text"),
        Ic = function(t) {
            return Fc.get(t)
        },
        Rc = function(t) {
            return Fc.getOption(t)
        },
        Vc = function(e, o, t, n, r) {
            var i = function(t) {
                    var n = e.dom().createRange();
                    return n.setStart(o.dom(), t), n.collapse(!0), n
                },
                u = Ic(o).length,
                a = function(t, n, e, o, r) {
                    if (0 === r) return 0;
                    if (n === o) return r - 1;
                    for (var i = o, u = 1; u < r; u++) {
                        var a = t(u),
                            c = Math.abs(n - a.left);
                        if (e <= a.bottom) {
                            if (e < a.top || i < c) return u - 1;
                            i = c
                        }
                    }
                    return 0
                }(function(t) {
                    return i(t).getBoundingClientRect()
                }, t, n, r.right, u);
            return i(a)
        },
        Nc = function(n, e, o, r) {
            var t = n.dom().createRange();
            t.selectNode(e.dom());
            var i = t.getClientRects();
            return bu(i, function(t) {
                return Mc(t, o, r) ? et.some(t) : et.none()
            }).map(function(t) {
                return Vc(n, e, o, r, t)
            })
        },
        Hc = function(n, t, e, o) {
            var r = n.dom().createRange(),
                i = Fr(t);
            return bu(i, function(t) {
                return r.selectNode(t.dom()), Mc(r.getBoundingClientRect(), e, o) ? Pc(n, t, e, o) : et.none()
            })
        },
        Pc = function(t, n, e, o) {
            return (nr(n) ? Nc : Hc)(t, n, e, o)
        },
        zc = ["img", "br"],
        Lc = function(t) {
            return Rc(t).filter(function(t) {
                return 0 !== t.trim().length || -1 < t.indexOf("\xa0")
            }).isSome() || D(zc, Qo(t))
        },
        jc = function(t) {
            return cr(t, Lc)
        },
        Uc = function(t) {
            return Wc(t, Lc)
        },
        Wc = function(t, i) {
            var u = function(t) {
                for (var n = Fr(t), e = n.length - 1; 0 <= e; e--) {
                    var o = n[e];
                    if (i(o)) return et.some(o);
                    var r = u(o);
                    if (r.isSome()) return r
                }
                return et.none()
            };
            return u(t)
        },
        Gc = function(t, n) {
            return n - t.left < t.right - n
        },
        Xc = function(t, n, e) {
            var o = t.dom().createRange();
            return o.selectNode(n.dom()), o.collapse(e), o
        },
        Yc = function(n, t, e) {
            var o = n.dom().createRange();
            o.selectNode(t.dom());
            var r = o.getBoundingClientRect(),
                i = Gc(r, e);
            return (!0 === i ? jc : Uc)(t).map(function(t) {
                return Xc(n, t, i)
            })
        },
        qc = function(t, n, e) {
            var o = n.dom().getBoundingClientRect(),
                r = Gc(o, e);
            return et.some(Xc(t, n, r))
        },
        Kc = function(t, n, e, o) {
            var r = t.dom().createRange();
            r.selectNode(n.dom());
            var i = r.getBoundingClientRect();
            return function(t, n, e, o) {
                var r = t.dom().createRange();
                r.selectNode(n.dom());
                var i = r.getBoundingClientRect(),
                    u = Math.max(i.left, Math.min(i.right, e)),
                    a = Math.max(i.top, Math.min(i.bottom, o));
                return Pc(t, n, u, a)
            }(t, n, Math.max(i.left, Math.min(i.right, e)), Math.max(i.top, Math.min(i.bottom, o)))
        },
        $c = (document.caretPositionFromPoint || document.caretRangeFromPoint, function(t, n) {
            return Ye(n, t)
        }),
        Jc = function(t, n, e, o) {
            var r, i, u, a, c, s = (i = n, u = e, a = o, (c = Ar(r = t).dom().createRange()).setStart(r.dom(), i), c.setEnd(u.dom(), a), c),
                f = qe(t, e) && n === o;
            return s.collapsed && !f
        },
        Qc = function(t) {
            var n = fe.fromDom(t.anchorNode),
                e = fe.fromDom(t.focusNode);
            return Jc(n, t.anchorOffset, e, t.focusOffset) ? et.some(wc.create(n, t.anchorOffset, e, t.focusOffset)) : function(t) {
                if (0 < t.rangeCount) {
                    var n = t.getRangeAt(0),
                        e = t.getRangeAt(t.rangeCount - 1);
                    return et.some(wc.create(fe.fromDom(n.startContainer), n.startOffset, fe.fromDom(e.endContainer), e.endOffset))
                }
                return et.none()
            }(t)
        },
        Zc = function(t, n) {
            var i, e, o, r, u = _c(i = t, n).match({
                ltr: function(t, n, e, o) {
                    var r = i.document.createRange();
                    return r.setStart(t.dom(), n), r.setEnd(e.dom(), o), r
                },
                rtl: function(t, n, e, o) {
                    var r = i.document.createRange();
                    return r.setStart(e.dom(), o), r.setEnd(t.dom(), n), r
                }
            });
            return o = (e = u).getClientRects(), 0 < (r = 0 < o.length ? o[0] : e.getBoundingClientRect()).width || 0 < r.height ? et.some(r).map(Bc) : et.none()
        },
        ts = Or("element", "offset"),
        ns = pt([{
            screen: ["point"]
        }, {
            absolute: ["point", "scrollLeft", "scrollTop"]
        }]),
        es = function(t) {
            return t.fold(function(t) {
                return t
            }, function(t, n, e) {
                return t.translate(-n, -e)
            })
        },
        os = function(t) {
            return t.fold(function(t) {
                return t
            }, function(t, n, e) {
                return t
            })
        },
        rs = function(t) {
            return V(t, function(t, n) {
                return t.translate(n.left(), n.top())
            }, na(0, 0))
        },
        is = function(t) {
            var n = F(t, os);
            return rs(n)
        },
        us = ns.screen,
        as = ns.absolute,
        cs = function(t, n, e) {
            var o, r, i, u = Ar(t.element()),
                a = ia(u),
                c = (o = t, r = e, i = Dr(r.root).dom(), et.from(i.frameElement).map(fe.fromDom).filter(function(t) {
                    var n = Ar(t),
                        e = Ar(o.element());
                    return qe(n, e)
                }).map(oa)).getOr(a);
            return as(c, a.left(), a.top())
        },
        ss = function(t, n, e, o) {
            var r = t,
                i = n,
                u = e,
                a = o;
            t < 0 && (r = 0, u = e + t), n < 0 && (i = 0, a = o + n);
            var c = us(na(r, i));
            return et.some(ka(c, u, a))
        },
        fs = function(t, c, s, f, l) {
            return t.map(function(t) {
                var n, e, o, r = [c, t.point()],
                    i = (n = function() {
                        return is(r)
                    }, e = function() {
                        return is(r)
                    }, o = function() {
                        return t = F(r, es), rs(t);
                        var t
                    }, f.fold(n, e, o)),
                    u = Oa(i.left(), i.top(), t.width(), t.height()),
                    a = bc(l, s, s.showAbove ? [uc, ac, rc, ic, cc, sc] : [rc, ic, uc, ac, sc, sc], s.showAbove ? [ac, uc, ic, rc, cc, sc] : [ic, rc, ac, uc, sc, cc]);
                return gc({
                    anchorBox: u,
                    bubble: s.bubble.getOr($a()),
                    overrides: s.overrides,
                    layouts: a,
                    placer: et.none()
                })
            })
        },
        ls = Or("element", "offset"),
        ds = function(t, n) {
            return nr(t) ? ls(t, n) : function(t, n) {
                var e = Fr(t);
                if (0 === e.length) return ts(t, n);
                if (n < e.length) return ts(e[n], 0);
                var o = e[e.length - 1],
                    r = nr(o) ? Ic(o).length : Fr(o).length;
                return ts(o, r)
            }(t, n)
        },
        ms = function(n, t) {
            return t.getSelection.getOrThunk(function() {
                return function() {
                    return t = n, et.from(t.getSelection()).filter(function(t) {
                        return 0 < t.rangeCount
                    }).bind(Qc);
                    var t
                }
            })().map(function(t) {
                var n = ds(t.start(), t.soffset()),
                    e = ds(t.finish(), t.foffset());
                return Oc.range(n.element(), n.offset(), e.element(), e.offset())
            })
        },
        gs = [Yn("getSelection"), Pn("root"), Yn("bubble"), vc(), Zn("overrides", {}), Zn("showAbove", !1), Vu("placement", function(t, n, e) {
            var o = Dr(n.root).dom(),
                r = cs(t, 0, n),
                i = ms(o, n).bind(function(t) {
                    return Zc(o, Oc.exactFromRange(t)).orThunk(function() {
                        var n = fe.fromText("\ufeff");
                        return Rr(t.start(), n), Zc(o, Oc.exact(n, 0, n, 1)).map(function(t) {
                            return Lr(n), t
                        })
                    }).bind(function(t) {
                        return ss(t.left(), t.top(), t.width(), t.height())
                    })
                }),
                u = ms(o, n).bind(function(t) {
                    return tr(t.start()) ? et.some(t.start()) : _r(t.start())
                }).getOr(t.element());
            return fs(i, r, n, e, u)
        })],
        ps = [Pn("node"), Pn("root"), Yn("bubble"), vc(), Zn("overrides", {}), Zn("showAbove", !1), Vu("placement", function(r, i, u) {
            var a = cs(r, 0, i);
            return i.node.bind(function(t) {
                var n = t.dom().getBoundingClientRect(),
                    e = ss(n.left, n.top, n.width, n.height),
                    o = i.node.getOr(r.element());
                return fs(e, a, i, u, o)
            })
        })],
        hs = function(t) {
            return t.x() + t.width()
        },
        vs = function(t, n) {
            return t.x() - n.width()
        },
        bs = function(t, n) {
            return t.y() - n.height() + t.height()
        },
        ys = function(t) {
            return t.y()
        },
        xs = function(t, n, e) {
            return Ja(hs(t), ys(t), e.southeast(), ha(), "link-layout-se")
        },
        ws = function(t, n, e) {
            return Ja(vs(t, n), ys(t), e.southwest(), va(), "link-layout-sw")
        },
        Ss = function(t, n, e) {
            return Ja(hs(t), bs(t, n), e.northeast(), ba(), "link-layout-ne")
        },
        Cs = function(t, n, e) {
            return Ja(vs(t, n), bs(t, n), e.northwest(), ya(), "link-layout-nw")
        },
        ks = [Pn("item"), vc(), Zn("overrides", {}), Vu("placement", function(t, n, e) {
            var o = Ia(e, n.item.element()),
                r = bc(t.element(), n, [xs, ws, Ss, Cs], [ws, xs, Cs, Ss]);
            return et.some(gc({
                anchorBox: o,
                bubble: $a(),
                overrides: n.overrides,
                layouts: r,
                placer: et.none()
            }))
        })],
        Os = _n("anchor", {
            selection: gs,
            node: ps,
            hotspot: yc,
            submenu: ks,
            makeshift: xc
        }),
        Es = function(t, n, e, o, r) {
            var i, u = (i = e.anchorBox, Na(i, n));
            Xa(u, r.element(), e.bubble, e.layouts, o, e.overrides)
        },
        Ts = function(n, t, e, o, r, i) {
            var u = An("positioning anchor.info", Os, o);
            Wi(r.element(), "position", "fixed");
            var a = qi(r.element(), "visibility");
            Wi(r.element(), "visibility", "hidden");
            var c, s, f, l = t.useFixed ? Va(0, 0, H.window.innerWidth, H.window.innerHeight) : (s = oa((c = n).element()), f = c.element().dom().getBoundingClientRect(), Ra(s.left(), s.top(), f.width, f.height)),
                d = u.placement,
                m = i.map(function(t) {
                    return function() {
                        return Ta(t)
                    }
                }).or(t.getBounds);
            d(n, u, l).each(function(t) {
                t.placer.getOr(Es)(n, l, t, m, r)
            }), a.fold(function() {
                $i(r.element(), "visibility")
            }, function(t) {
                Wi(r.element(), "visibility", t)
            }), qi(r.element(), "left").isNone() && qi(r.element(), "top").isNone() && qi(r.element(), "right").isNone() && qi(r.element(), "bottom").isNone() && qi(r.element(), "position").is("fixed") && $i(r.element(), "position")
        },
        Bs = /* */ Object.freeze({
            position: function(t, n, e, o, r) {
                var i = et.none();
                Ts(t, n, e, o, r, i)
            },
            positionWithin: Ts,
            getMode: function(t, n, e) {
                return n.useFixed ? "fixed" : "absolute"
            }
        }),
        As = [Zn("useFixed", !1), Yn("getBounds")],
        Ds = Xu({
            fields: As,
            name: "positioning",
            active: Zu,
            apis: Bs
        }),
        _s = function(t) {
            zo(t, Mo());
            var n = t.components();
            W(n, _s)
        },
        Ms = function(t) {
            var n = t.components();
            W(n, Ms), zo(t, _o())
        },
        Fs = function(t, n) {
            Is(t, n, Hr)
        },
        Is = function(t, n, e) {
            t.getSystem().addToWorld(n), e(t.element(), n.element()), or(t.element()) && Ms(n), t.syncComponents()
        },
        Rs = function(t) {
            _s(t), Lr(t.element()), t.getSystem().removeFromWorld(t)
        },
        Vs = function(n) {
            var t = _r(n.element()).bind(function(t) {
                return n.getSystem().getByDom(t).fold(et.none, et.some)
            });
            Rs(n), t.each(function(t) {
                t.syncComponents()
            })
        },
        Ns = function(t) {
            var n = t.components();
            W(n, Rs), zr(t.element()), t.syncComponents()
        },
        Hs = function(t, n) {
            Ps(t, n, Hr)
        },
        Ps = function(t, n, e) {
            e(t, n.element());
            var o = Fr(n.element());
            W(o, function(t) {
                n.getByDom(t).each(Ms)
            })
        },
        zs = function(n) {
            var t = Fr(n.element());
            W(t, function(t) {
                n.getByDom(t).each(_s)
            }), Lr(n.element())
        },
        Ls = function(t, n, e, o) {
            var r = function(n, t, e, o) {
                e.get().each(function(t) {
                    Ns(n)
                });
                var r = t.getAttachPoint(n);
                Fs(r, n);
                var i = n.getSystem().build(o);
                return Fs(n, i), e.set(i), i
            }(t, n, e, o);
            return n.onOpen(t, r), r
        },
        js = function(n, e, o) {
            o.get().each(function(t) {
                Ns(n), Vs(n), e.onClose(n, t), o.clear()
            })
        },
        Us = function(t, n, e) {
            return e.isOpen()
        },
        Ws = function(t, n, e) {
            var o, r, i, u, a = n.getAttachPoint(t);
            Wi(t.element(), "position", Ds.getMode(a)), o = t, r = "visibility", i = n.cloakVisibilityAttr, u = "hidden", qi(o.element(), r).fold(function() {
                $r(o.element(), i)
            }, function(t) {
                Xr(o.element(), i, t)
            }), Wi(o.element(), r, u)
        },
        Gs = function(t, n, e) {
            var o;
            o = t.element(), _(["top", "left", "right", "bottom"], function(t) {
                    return qi(o, t).isSome()
                }) || $i(t.element(), "position"),
                function(t, n, e) {
                    if (Kr(t.element(), e)) {
                        var o = qr(t.element(), e);
                        Wi(t.element(), n, o)
                    } else $i(t.element(), n)
                }(t, "visibility", n.cloakVisibilityAttr)
        },
        Xs = /* */ Object.freeze({
            cloak: Ws,
            decloak: Gs,
            open: Ls,
            openWhileCloaked: function(t, n, e, o, r) {
                Ws(t, n), Ls(t, n, e, o), r(), Gs(t, n)
            },
            close: js,
            isOpen: Us,
            isPartOf: function(n, e, t, o) {
                return Us(0, 0, t) && t.get().exists(function(t) {
                    return e.isPartOf(n, t, o)
                })
            },
            getState: function(t, n, e) {
                return e.get()
            }
        }),
        Ys = /* */ Object.freeze({
            events: function(e, o) {
                return fr([mr(Eo(), function(t, n) {
                    js(t, e, o)
                })])
            }
        }),
        qs = [Mu("onOpen"), Mu("onClose"), Pn("isPartOf"), Pn("getAttachPoint"), Zn("cloakVisibilityAttr", "data-precloak-visibility")],
        Ks = Xu({
            fields: qs,
            name: "sandboxing",
            active: Ys,
            apis: Xs,
            state: /* */ Object.freeze({
                init: function() {
                    var n = ce(et.none()),
                        t = nt("not-implemented");
                    return xi({
                        readState: t,
                        isOpen: function() {
                            return n.get().isSome()
                        },
                        clear: function() {
                            n.set(et.none())
                        },
                        set: function(t) {
                            n.set(et.some(t))
                        },
                        get: function(t) {
                            return n.get()
                        }
                    })
                }
            })
        }),
        $s = nt("dismiss.popups"),
        Js = nt("mouse.released"),
        Qs = gn([Zn("isExtraPart", nt(!1)), Qn("fireEventInstead", [Zn("event", Fo())])]),
        Zs = function(t) {
            var n = tf(t);
            return Qu.config(n)
        },
        tf = function(t) {
            var e = An("Dismissal", Qs, t);
            return {
                channels: It($s(), {
                    schema: gn([Pn("target")]),
                    onReceive: function(n, t) {
                        Ks.isOpen(n) && (Ks.isPartOf(n, t.target) || e.isExtraPart(n, t.target) || e.fireEventInstead.fold(function() {
                            return Ks.close(n)
                        }, function(t) {
                            return zo(n, t.event)
                        }))
                    }
                })
            }
        },
        nf = function(o, t) {
            return ue(o, {}, F(t, function(t) {
                return n = t.name(), e = "Cannot configure " + t.name() + " for " + o, wn(n, n, kt(), mn(function(t) {
                    return Gt("The field: " + n + " is forbidden. " + e)
                }));
                var n, e
            }).concat([ae("dump", d)]))
        },
        ef = function(t) {
            return t.dump
        },
        of = function(t, n) {
            return P({}, t.dump, Wu(n))
        },
        rf = nf,
        uf = of,
        af = "placeholder",
        cf = pt([{
            single: ["required", "valueThunk"]
        }, {
            multiple: ["required", "valueThunks"]
        }]),
        sf = function(t, n, e, o) {
            return e.uiType === af ? (i = e, u = o, (r = t).exists(function(t) {
                return t !== i.owner
            }) ? cf.single(!0, nt(i)) : Ft(u, i.name).fold(function() {
                throw new Error("Unknown placeholder component: " + i.name + "\nKnown: [" + ut(u) + "]\nNamespace: " + r.getOr("none") + "\nSpec: " + un(i, null, 2))
            }, function(t) {
                return t.replace()
            })) : cf.single(!1, nt(e));
            var r, i, u
        },
        ff = function(i, u, a, c) {
            return sf(i, 0, a, c).fold(function(t, n) {
                var e = n(u, a.config, a.validated),
                    o = Ft(e, "components").getOr([]),
                    r = K(o, function(t) {
                        return ff(i, u, t, c)
                    });
                return [P({}, e, {
                    components: r
                })]
            }, function(t, n) {
                var e = n(u, a.config, a.validated);
                return a.validated.preprocess.getOr(d)(e)
            })
        },
        lf = function(n, e, t, o) {
            var r, i, u, a = st(o, function(t, n) {
                    return o = t, r = !1, {
                        name: nt(e = n),
                        required: function() {
                            return o.fold(function(t, n) {
                                return t
                            }, function(t, n) {
                                return t
                            })
                        },
                        used: function() {
                            return r
                        },
                        replace: function() {
                            if (!0 === r) throw new Error("Trying to use the same placeholder more than once: " + e);
                            return r = !0, o
                        }
                    };
                    var e, o, r
                }),
                c = (r = n, i = e, u = a, K(t, function(t) {
                    return ff(r, i, t, u)
                }));
            return ct(a, function(t) {
                if (!1 === t.used() && t.required()) throw new Error("Placeholder: " + t.name() + " was not found in components list\nNamespace: " + n.getOr("none") + "\nComponents: " + un(e.components, null, 2))
            }), c
        },
        df = cf.single,
        mf = cf.multiple,
        gf = nt(af),
        pf = pt([{
            required: ["data"]
        }, {
            external: ["data"]
        }, {
            optional: ["data"]
        }, {
            group: ["data"]
        }]),
        hf = Zn("factory", {
            sketch: d
        }),
        vf = Zn("schema", []),
        bf = Pn("name"),
        yf = wn("pname", "pname", Ot(function(t) {
            return "<alloy." + oi(t.name) + ">"
        }), Mn()),
        xf = ae("schema", function() {
            return [Yn("preprocess")]
        }),
        wf = Zn("defaults", nt({})),
        Sf = Zn("overrides", nt({})),
        Cf = pn([hf, vf, bf, yf, wf, Sf]),
        kf = pn([hf, vf, bf, wf, Sf]),
        Of = pn([hf, vf, bf, yf, wf, Sf]),
        Ef = pn([hf, xf, bf, Pn("unit"), yf, wf, Sf]),
        Tf = function(t) {
            return t.fold(et.some, et.none, et.some, et.some)
        },
        Bf = function(t) {
            var n = function(t) {
                return t.name
            };
            return t.fold(n, n, n, n)
        },
        Af = function(e, o) {
            return function(t) {
                var n = An("Converting part type", o, t);
                return e(n)
            }
        },
        Df = Af(pf.required, Cf),
        _f = Af(pf.external, kf),
        Mf = Af(pf.optional, Of),
        Ff = Af(pf.group, Ef),
        If = nt("entirety"),
        Rf = /* */ Object.freeze({
            required: Df,
            external: _f,
            optional: Mf,
            group: Ff,
            asNamedPart: Tf,
            name: Bf,
            asCommon: function(t) {
                return t.fold(d, d, d, d)
            },
            original: If
        }),
        Vf = function(t, n, e, o) {
            return bt(n.defaults(t, e, o), e, {
                uid: t.partUids[n.name]
            }, n.overrides(t, e, o))
        },
        Nf = function(r, t) {
            var n = {};
            return W(t, function(t) {
                Tf(t).each(function(e) {
                    var o = Hf(r, e.pname);
                    n[e.name] = function(t) {
                        var n = An("Part: " + e.name + " in " + r, pn(e.schema), t);
                        return P({}, o, {
                            config: t,
                            validated: n
                        })
                    }
                })
            }), n
        },
        Hf = function(t, n) {
            return {
                uiType: gf(),
                owner: t,
                name: n
            }
        },
        Pf = function(t, n, e) {
            return {
                uiType: gf(),
                owner: t,
                name: n,
                config: e,
                validated: {}
            }
        },
        zf = function(t) {
            return K(t, function(t) {
                return t.fold(et.none, et.some, et.none, et.none).map(function(t) {
                    return Wn(t.name, t.schema.concat([Nu(If())]))
                }).toArray()
            })
        },
        Lf = function(t) {
            return F(t, Bf)
        },
        jf = function(t, n, e) {
            return o = n, i = {}, r = {}, W(e, function(t) {
                t.fold(function(o) {
                    i[o.pname] = df(!0, function(t, n, e) {
                        return o.factory.sketch(Vf(t, o, n, e))
                    })
                }, function(t) {
                    var n = o.parts[t.name];
                    r[t.name] = nt(t.factory.sketch(Vf(o, t, n[If()]), n))
                }, function(o) {
                    i[o.pname] = df(!1, function(t, n, e) {
                        return o.factory.sketch(Vf(t, o, n, e))
                    })
                }, function(r) {
                    i[r.pname] = mf(!0, function(n, t, e) {
                        var o = n[r.name];
                        return F(o, function(t) {
                            return r.factory.sketch(bt(r.defaults(n, t, e), t, r.overrides(n, t)))
                        })
                    })
                })
            }), {
                internals: nt(i),
                externals: nt(r)
            };
            var o, i, r
        },
        Uf = function(t, n, e) {
            return lf(et.some(t), n, n.components, e)
        },
        Wf = function(t, n, e) {
            var o = n.partUids[e];
            return t.getSystem().getByUid(o).toOption()
        },
        Gf = function(t, n, e) {
            return Wf(t, n, e).getOrDie("Could not find part: " + e)
        },
        Xf = function(t, n, e) {
            var o = {},
                r = n.partUids,
                i = t.getSystem();
            return W(e, function(t) {
                o[t] = i.getByUid(r[t])
            }), st(o, nt)
        },
        Yf = function(t, n) {
            var e = t.getSystem();
            return st(n.partUids, function(t, n) {
                return nt(e.getByUid(t))
            })
        },
        qf = function(t) {
            return ut(t.partUids)
        },
        Kf = function(t, n, e) {
            var o = {},
                r = n.partUids,
                i = t.getSystem();
            return W(e, function(t) {
                o[t] = i.getByUid(r[t]).getOrDie()
            }), st(o, nt)
        },
        $f = function(n, t) {
            var e = Lf(t);
            return Rt(F(e, function(t) {
                return {
                    key: t,
                    value: n + "-" + t
                }
            }))
        },
        Jf = function(n) {
            return wn("partUids", "partUids", Et(function(t) {
                return $f(t.uid, n)
            }), Mn())
        },
        Qf = /* */ Object.freeze({
            generate: Nf,
            generateOne: Pf,
            schemas: zf,
            names: Lf,
            substitutes: jf,
            components: Uf,
            defaultUids: $f,
            defaultUidsSchema: Jf,
            getAllParts: Yf,
            getAllPartNames: qf,
            getPart: Wf,
            getPartOrDie: Gf,
            getParts: Xf,
            getPartsOrDie: Kf
        }),
        Zf = function(t, n, e, o, r) {
            var i, u, a = (u = r, (0 < (i = o).length ? [Wn("parts", i)] : []).concat([Pn("uid"), Zn("dom", {}), Zn("components", []), Nu("originalSpec"), Zn("debug.sketcher", {})]).concat(u));
            return An(t + " [SpecSchema]", gn(a.concat(n)), e)
        },
        tl = function(t, n, e, o, r) {
            var i = nl(r),
                u = zf(e),
                a = Jf(e),
                c = Zf(t, n, i, u, [a]),
                s = jf(0, c, e);
            return o(c, Uf(t, c, s.internals()), i, s.externals())
        },
        nl = function(t) {
            return t.hasOwnProperty("uid") ? t : P({}, t, {
                uid: fi("uid")
            })
        };
    var el, ol, rl = gn([Pn("name"), Pn("factory"), Pn("configFields"), Zn("apis", {}), Zn("extraApis", {})]),
        il = gn([Pn("name"), Pn("factory"), Pn("configFields"), Pn("partFields"), Zn("apis", {}), Zn("extraApis", {})]),
        ul = function(t) {
            var i = An("Sketcher for " + t.name, rl, t),
                n = st(i.apis, bi),
                e = st(i.extraApis, function(t, n) {
                    return pi(t, n)
                });
            return P({
                name: nt(i.name),
                partFields: nt([]),
                configFields: nt(i.configFields),
                sketch: function(t) {
                    return n = i.name, e = i.configFields, o = i.factory, r = nl(t), o(Zf(n, e, r, [], []), r);
                    var n, e, o, r
                }
            }, n, e)
        },
        al = function(t) {
            var n = An("Sketcher for " + t.name, il, t),
                e = Nf(n.name, n.partFields),
                o = st(n.apis, bi),
                r = st(n.extraApis, function(t, n) {
                    return pi(t, n)
                });
            return P({
                name: nt(n.name),
                partFields: nt(n.partFields),
                configFields: nt(n.configFields),
                sketch: function(t) {
                    return tl(n.name, n.configFields, n.partFields, n.factory, t)
                },
                parts: nt(e)
            }, o, r)
        },
        cl = function(t) {
            return "input" === Qo(t) && "radio" !== qr(t, "type") || "textarea" === Qo(t)
        },
        sl = /* */ Object.freeze({
            getCurrent: function(t, n, e) {
                return n.find(t)
            }
        }),
        fl = [Pn("find")],
        ll = Xu({
            fields: fl,
            name: "composing",
            apis: sl
        }),
        dl = function(t, n, e, o) {
            var r = t + n;
            return o < r ? e : r < e ? o : r
        },
        ml = function(t, n, e) {
            return t <= n ? n : e <= t ? e : t
        },
        gl = function(e, o, t, r) {
            var n = $c(e.element(), "." + o.highlightClass);
            W(n, function(n) {
                _(r, function(t) {
                    return t.element() === n
                }) || (Ni(n, o.highlightClass), e.getSystem().getByDom(n).each(function(t) {
                    o.onDehighlight(e, t), zo(t, Po())
                }))
            })
        },
        pl = function(t, n, e, o) {
            gl(t, n, 0, [o]), hl(t, n, e, o) || (Ri(o.element(), n.highlightClass), n.onHighlight(t, o), zo(o, Ho()))
        },
        hl = function(t, n, e, o) {
            return Hi(o.element(), n.highlightClass)
        },
        vl = function(t, n, e, o) {
            var r = $c(t.element(), "." + n.itemClass);
            return et.from(r[o]).fold(function() {
                return z.error("No element found with index " + o)
            }, t.getSystem().getByDom)
        },
        bl = function(n, t, e) {
            return du(n.element(), "." + t.itemClass).bind(function(t) {
                return n.getSystem().getByDom(t).toOption()
            })
        },
        yl = function(n, t, e) {
            var o = $c(n.element(), "." + t.itemClass);
            return (0 < o.length ? et.some(o[o.length - 1]) : et.none()).bind(function(t) {
                return n.getSystem().getByDom(t).toOption()
            })
        },
        xl = function(e, n, t, o) {
            var r = $c(e.element(), "." + n.itemClass);
            return G(r, function(t) {
                return Hi(t, n.highlightClass)
            }).bind(function(t) {
                var n = dl(t, o, 0, r.length - 1);
                return e.getSystem().getByDom(r[n]).toOption()
            })
        },
        wl = function(n, t, e) {
            var o = $c(n.element(), "." + t.itemClass);
            return vu(F(o, function(t) {
                return n.getSystem().getByDom(t).toOption()
            }))
        },
        Sl = /* */ Object.freeze({
            dehighlightAll: function(t, n, e) {
                return gl(t, n, 0, [])
            },
            dehighlight: function(t, n, e, o) {
                hl(t, n, e, o) && (Ni(o.element(), n.highlightClass), n.onDehighlight(t, o), zo(o, Po()))
            },
            highlight: pl,
            highlightFirst: function(n, e, o) {
                bl(n, e).each(function(t) {
                    pl(n, e, o, t)
                })
            },
            highlightLast: function(n, e, o) {
                yl(n, e).each(function(t) {
                    pl(n, e, o, t)
                })
            },
            highlightAt: function(n, e, o, t) {
                vl(n, e, o, t).fold(function(t) {
                    throw new Error(t)
                }, function(t) {
                    pl(n, e, o, t)
                })
            },
            highlightBy: function(n, e, o, t) {
                var r = wl(n, e);
                N(r, t).each(function(t) {
                    pl(n, e, o, t)
                })
            },
            isHighlighted: hl,
            getHighlighted: function(n, t, e) {
                return du(n.element(), "." + t.highlightClass).bind(function(t) {
                    return n.getSystem().getByDom(t).toOption()
                })
            },
            getFirst: bl,
            getLast: yl,
            getPrevious: function(t, n, e) {
                return xl(t, n, 0, -1)
            },
            getNext: function(t, n, e) {
                return xl(t, n, 0, 1)
            },
            getCandidates: wl
        }),
        Cl = [Pn("highlightClass"), Pn("itemClass"), Mu("onHighlight"), Mu("onDehighlight")],
        kl = Xu({
            fields: Cl,
            name: "highlighting",
            apis: Sl
        }),
        Ol = function(t, n, e) {
            var o = J(t.slice(0, n)),
                r = J(t.slice(n + 1));
            return N(o.concat(r), e)
        },
        El = function(t, n, e) {
            var o = J(t.slice(0, n));
            return N(o, e)
        },
        Tl = function(t, n, e) {
            var o = t.slice(0, n),
                r = t.slice(n + 1);
            return N(r.concat(o), e)
        },
        Bl = function(t, n, e) {
            var o = t.slice(n + 1);
            return N(o, e)
        },
        Al = function(e) {
            return function(t) {
                var n = t.raw();
                return D(e, n.which)
            }
        },
        Dl = function(t) {
            return function(n) {
                return $(t, function(t) {
                    return t(n)
                })
            }
        },
        _l = function(t) {
            return !0 === t.raw().shiftKey
        },
        Ml = function(t) {
            return !0 === t.raw().ctrlKey
        },
        Fl = x(_l),
        Il = function(t, n) {
            return {
                matches: t,
                classification: n
            }
        },
        Rl = function(t) {
            t.dom().focus()
        },
        Vl = function(t) {
            var n = t !== undefined ? t.dom() : H.document;
            return et.from(n.activeElement).map(fe.fromDom)
        },
        Nl = function(n) {
            return Vl(Ar(n)).filter(function(t) {
                return n.dom().contains(t.dom())
            })
        },
        Hl = function(t, n, e) {
            n.exists(function(n) {
                return e.exists(function(t) {
                    return qe(t, n)
                })
            }) || Lo(t, Io(), {
                prevFocus: n,
                newFocus: e
            })
        },
        Pl = function() {
            var r = function(t) {
                return Nl(t.element())
            };
            return {
                get: r,
                set: function(t, n) {
                    var e = r(t);
                    t.getSystem().triggerFocus(n, t.element());
                    var o = r(t);
                    Hl(t, e, o)
                }
            }
        },
        zl = function() {
            var r = function(t) {
                return kl.getHighlighted(t).map(function(t) {
                    return t.element()
                })
            };
            return {
                get: r,
                set: function(n, t) {
                    var e = r(n);
                    n.getSystem().getByDom(t).fold(tt, function(t) {
                        kl.highlight(n, t)
                    });
                    var o = r(n);
                    Hl(n, e, o)
                }
            }
        };
    (ol = el || (el = {})).OnFocusMode = "onFocus", ol.OnEnterOrSpaceMode = "onEnterOrSpace", ol.OnApiMode = "onApi";
    var Ll, jl = function(t, n, e, o, a) {
            var c = function(n, e, t, o, r) {
                    var i, u, a = t(n, e, o, r);
                    return (i = a, u = e.event(), N(i, function(t) {
                        return t.matches(u)
                    }).map(function(t) {
                        return t.classification
                    })).bind(function(t) {
                        return t(n, e, o, r)
                    })
                },
                r = {
                    schema: function() {
                        return t.concat([Zn("focusManager", Pl()), te("focusInside", "onFocus", On(function(t) {
                            return D(["onFocus", "onEnterOrSpace", "onApi"], t) ? z.value(t) : z.error("Invalid value for focusInside")
                        })), Vu("handler", r), Vu("state", n), Vu("sendFocusIn", a)])
                    },
                    processKey: c,
                    toEvents: function(i, u) {
                        var t = i.focusInside !== el.OnFocusMode ? et.none() : a(i).map(function(e) {
                            return mr(vo(), function(t, n) {
                                e(t, i, u), n.stop()
                            })
                        });
                        return fr(t.toArray().concat([mr(co(), function(o, r) {
                            c(o, r, e, i, u).fold(function() {
                                var n, e, t;
                                n = o, e = r, t = Al([32].concat([13]))(e.event()), i.focusInside === el.OnEnterOrSpaceMode && t && Ke(n, e) && a(i).each(function(t) {
                                    t(n, i, u), e.stop()
                                })
                            }, function(t) {
                                r.stop()
                            })
                        }), mr(so(), function(t, n) {
                            c(t, n, o, i, u).each(function(t) {
                                n.stop()
                            })
                        })]))
                    }
                };
            return r
        },
        Ul = function(t) {
            var n = [Yn("onEscape"), Yn("onEnter"), Zn("selector", '[data-alloy-tabstop="true"]'), Zn("firstTabstop", 0), Zn("useTabstopAt", nt(!0)), Yn("visibilitySelector")].concat([t]),
                u = function(t, n) {
                    var e = t.visibilitySelector.bind(function(t) {
                        return mu(n, t)
                    }).getOr(n);
                    return 0 < la(e)
                },
                e = function(n, e) {
                    var t, o, r, i;
                    (t = n, o = e, r = $c(t.element(), o.selector), i = I(r, function(t) {
                        return u(o, t)
                    }), et.from(i[o.firstTabstop])).each(function(t) {
                        e.focusManager.set(n, t)
                    })
                },
                a = function(n, t, e, o, r) {
                    return r(t, e, function(t) {
                        return u(n = o, e = t) && n.useTabstopAt(e);
                        var n, e
                    }).fold(function() {
                        return o.cyclic ? et.some(!0) : et.none()
                    }, function(t) {
                        return o.focusManager.set(n, t), et.some(!0)
                    })
                },
                i = function(n, t, e, o) {
                    var r, i, u = $c(n.element(), e.selector);
                    return (r = n, i = e, i.focusManager.get(r).bind(function(t) {
                        return mu(t, i.selector)
                    })).bind(function(t) {
                        return G(u, g(qe, t)).bind(function(t) {
                            return a(n, u, t, e, o)
                        })
                    })
                },
                o = nt([Il(Dl([_l, Al([9])]), function(t, n, e, o) {
                    var r = e.cyclic ? Ol : El;
                    return i(t, 0, e, r)
                }), Il(Al([9]), function(t, n, e, o) {
                    var r = e.cyclic ? Tl : Bl;
                    return i(t, 0, e, r)
                }), Il(Al([27]), function(n, e, t, o) {
                    return t.onEscape.bind(function(t) {
                        return t(n, e)
                    })
                }), Il(Dl([Fl, Al([13])]), function(n, e, t, o) {
                    return t.onEnter.bind(function(t) {
                        return t(n, e)
                    })
                })]),
                r = nt([]);
            return jl(n, yi.init, o, r, function() {
                return et.some(e)
            })
        },
        Wl = Ul(ae("cyclic", nt(!1))),
        Gl = Ul(ae("cyclic", nt(!0))),
        Xl = function(t, n, e) {
            return cl(e) && Al([32])(n.event()) ? et.none() : (Uo(t, e, wo()), et.some(!0))
        },
        Yl = function(t, n) {
            return et.some(!0)
        },
        ql = [Zn("execute", Xl), Zn("useSpace", !1), Zn("useEnter", !0), Zn("useControlEnter", !1), Zn("useDown", !1)],
        Kl = function(t, n, e) {
            return e.execute(t, n, t.element())
        },
        $l = jl(ql, yi.init, function(t, n, e, o) {
            var r = e.useSpace && !cl(t.element()) ? [32] : [],
                i = e.useEnter ? [13] : [],
                u = e.useDown ? [40] : [],
                a = r.concat(i).concat(u);
            return [Il(Al(a), Kl)].concat(e.useControlEnter ? [Il(Dl([Ml, Al([13])]), Kl)] : [])
        }, function(t, n, e, o) {
            return e.useSpace && !cl(t.element()) ? [Il(Al([32]), Yl)] : []
        }, function() {
            return et.none()
        }),
        Jl = function(t) {
            var e = ce(et.none());
            return xi({
                readState: function() {
                    return e.get().map(function(t) {
                        return {
                            numRows: t.numRows(),
                            numColumns: t.numColumns()
                        }
                    }).getOr({
                        numRows: "?",
                        numColumns: "?"
                    })
                },
                setGridSize: function(t, n) {
                    e.set(et.some({
                        numRows: nt(t),
                        numColumns: nt(n)
                    }))
                },
                getNumRows: function() {
                    return e.get().map(function(t) {
                        return t.numRows()
                    })
                },
                getNumColumns: function() {
                    return e.get().map(function(t) {
                        return t.numColumns()
                    })
                }
            })
        },
        Ql = /* */ Object.freeze({
            flatgrid: Jl,
            init: function(t) {
                return t.state(t)
            }
        }),
        Zl = function(i) {
            return function(t, n, e, o) {
                var r = i(t.element());
                return od(r, t, n, e, o)
            }
        },
        td = function(t, n) {
            var e = pc(t, n);
            return Zl(e)
        },
        nd = function(t, n) {
            var e = pc(n, t);
            return Zl(e)
        },
        ed = function(r) {
            return function(t, n, e, o) {
                return od(r, t, n, e, o)
            }
        },
        od = function(n, e, t, o, r) {
            return o.focusManager.get(e).bind(function(t) {
                return n(e.element(), t, o, r)
            }).map(function(t) {
                return o.focusManager.set(e, t), !0
            })
        },
        rd = ed,
        id = ed,
        ud = ed,
        ad = function(t) {
            var n, e = t.dom();
            return !((n = e).offsetWidth <= 0 && n.offsetHeight <= 0)
        },
        cd = Br(["index", "candidates"], []),
        sd = function(t, n, e) {
            return fd(t, n, e)
        },
        fd = function(t, n, e, o) {
            var r, i = g(qe, n),
                u = o($c(t, e), ad);
            return G(r = u, i).map(function(t) {
                return cd({
                    index: t,
                    candidates: r
                })
            })
        },
        ld = function(t, n) {
            return G(t, function(t) {
                return qe(n, t)
            })
        },
        dd = function(e, t, o, n) {
            return n(Math.floor(t / o), t % o).bind(function(t) {
                var n = t.row() * o + t.column();
                return 0 <= n && n < e.length ? et.some(e[n]) : et.none()
            })
        },
        md = function(r, t, i, u, a) {
            return dd(r, t, u, function(t, n) {
                var e = t === i - 1 ? r.length - t * u : u,
                    o = dl(n, a, 0, e - 1);
                return et.some({
                    row: nt(t),
                    column: nt(o)
                })
            })
        },
        gd = function(i, t, u, a, c) {
            return dd(i, t, a, function(t, n) {
                var e = dl(t, c, 0, u - 1),
                    o = e === u - 1 ? i.length - e * a : a,
                    r = ml(n, 0, o - 1);
                return et.some({
                    row: nt(e),
                    column: nt(r)
                })
            })
        },
        pd = [Pn("selector"), Zn("execute", Xl), Fu("onEscape"), Zn("captureTab", !1), Hu()],
        hd = function(n, e, t) {
            du(n.element(), e.selector).each(function(t) {
                e.focusManager.set(n, t)
            })
        },
        vd = function(r) {
            return function(t, n, e, o) {
                return sd(t, n, e.selector).bind(function(t) {
                    return r(t.candidates(), t.index(), o.getNumRows().getOr(e.initSize.numRows), o.getNumColumns().getOr(e.initSize.numColumns))
                })
            }
        },
        bd = function(t, n, e, o) {
            return e.captureTab ? et.some(!0) : et.none()
        },
        yd = vd(function(t, n, e, o) {
            return md(t, n, e, o, -1)
        }),
        xd = vd(function(t, n, e, o) {
            return md(t, n, e, o, 1)
        }),
        wd = vd(function(t, n, e, o) {
            return gd(t, n, e, o, -1)
        }),
        Sd = vd(function(t, n, e, o) {
            return gd(t, n, e, o, 1)
        }),
        Cd = nt([Il(Al([37]), td(yd, xd)), Il(Al([39]), nd(yd, xd)), Il(Al([38]), rd(wd)), Il(Al([40]), id(Sd)), Il(Dl([_l, Al([9])]), bd), Il(Dl([Fl, Al([9])]), bd), Il(Al([27]), function(t, n, e, o) {
            return e.onEscape(t, n)
        }), Il(Al([32].concat([13])), function(n, e, o, t) {
            return (r = n, i = o, i.focusManager.get(r).bind(function(t) {
                return mu(t, i.selector)
            })).bind(function(t) {
                return o.execute(n, e, t)
            });
            var r, i
        })]),
        kd = nt([Il(Al([32]), Yl)]),
        Od = jl(pd, Jl, Cd, kd, function() {
            return et.some(hd)
        }),
        Ed = function(t, n, e, i) {
            var u = function(t, n, e) {
                var o, r = dl(n, i, 0, e.length - 1);
                return r === t ? et.none() : (o = e[r], "button" === Qo(o) && "disabled" === qr(o, "disabled") ? u(t, r, e) : et.from(e[r]))
            };
            return sd(t, e, n).bind(function(t) {
                var n = t.index(),
                    e = t.candidates();
                return u(n, n, e)
            })
        },
        Td = [Pn("selector"), Zn("getInitial", et.none), Zn("execute", Xl), Fu("onEscape"), Zn("executeOnMove", !1), Zn("allowVertical", !0)],
        Bd = function(n, e, o) {
            return (t = n, r = o, r.focusManager.get(t).bind(function(t) {
                return mu(t, r.selector)
            })).bind(function(t) {
                return o.execute(n, e, t)
            });
            var t, r
        },
        Ad = function(n, e) {
            e.getInitial(n).orThunk(function() {
                return du(n.element(), e.selector)
            }).each(function(t) {
                e.focusManager.set(n, t)
            })
        },
        Dd = function(t, n, e) {
            return Ed(t, e.selector, n, -1)
        },
        _d = function(t, n, e) {
            return Ed(t, e.selector, n, 1)
        },
        Md = function(o) {
            return function(t, n, e) {
                return o(t, n, e).bind(function() {
                    return e.executeOnMove ? Bd(t, n, e) : et.some(!0)
                })
            }
        },
        Fd = function(t, n, e, o) {
            return e.onEscape(t, n)
        },
        Id = nt([Il(Al([32]), Yl)]),
        Rd = jl(Td, yi.init, function(t, n, e, o) {
            var r = [37].concat(e.allowVertical ? [38] : []),
                i = [39].concat(e.allowVertical ? [40] : []);
            return [Il(Al(r), Md(td(Dd, _d))), Il(Al(i), Md(nd(Dd, _d))), Il(Al([13]), Bd), Il(Al([32]), Bd), Il(Al([27]), Fd)]
        }, Id, function() {
            return et.some(Ad)
        }),
        Vd = Br(["rowIndex", "columnIndex", "cell"], []),
        Nd = function(t, n, e) {
            return et.from(t[n]).bind(function(t) {
                return et.from(t[e]).map(function(t) {
                    return Vd({
                        rowIndex: n,
                        columnIndex: e,
                        cell: t
                    })
                })
            })
        },
        Hd = function(t, n, e, o) {
            var r = t[n].length,
                i = dl(e, o, 0, r - 1);
            return Nd(t, n, i)
        },
        Pd = function(t, n, e, o) {
            var r = dl(e, o, 0, t.length - 1),
                i = t[r].length,
                u = ml(n, 0, i - 1);
            return Nd(t, r, u)
        },
        zd = function(t, n, e, o) {
            var r = t[n].length,
                i = ml(e + o, 0, r - 1);
            return Nd(t, n, i)
        },
        Ld = function(t, n, e, o) {
            var r = ml(e + o, 0, t.length - 1),
                i = t[r].length,
                u = ml(n, 0, i - 1);
            return Nd(t, r, u)
        },
        jd = [Wn("selectors", [Pn("row"), Pn("cell")]), Zn("cycles", !0), Zn("previousSelector", et.none), Zn("execute", Xl)],
        Ud = function(n, e) {
            e.previousSelector(n).orThunk(function() {
                var t = e.selectors;
                return du(n.element(), t.cell)
            }).each(function(t) {
                e.focusManager.set(n, t)
            })
        },
        Wd = function(t, n) {
            return function(e, o, i) {
                var u = i.cycles ? t : n;
                return mu(o, i.selectors.row).bind(function(t) {
                    var n = $c(t, i.selectors.cell);
                    return ld(n, o).bind(function(o) {
                        var r = $c(e, i.selectors.row);
                        return ld(r, t).bind(function(t) {
                            var n, e = (n = i, F(r, function(t) {
                                return $c(t, n.selectors.cell)
                            }));
                            return u(e, t, o).map(function(t) {
                                return t.cell()
                            })
                        })
                    })
                })
            }
        },
        Gd = Wd(function(t, n, e) {
            return Hd(t, n, e, -1)
        }, function(t, n, e) {
            return zd(t, n, e, -1)
        }),
        Xd = Wd(function(t, n, e) {
            return Hd(t, n, e, 1)
        }, function(t, n, e) {
            return zd(t, n, e, 1)
        }),
        Yd = Wd(function(t, n, e) {
            return Pd(t, e, n, -1)
        }, function(t, n, e) {
            return Ld(t, e, n, -1)
        }),
        qd = Wd(function(t, n, e) {
            return Pd(t, e, n, 1)
        }, function(t, n, e) {
            return Ld(t, e, n, 1)
        }),
        Kd = nt([Il(Al([37]), td(Gd, Xd)), Il(Al([39]), nd(Gd, Xd)), Il(Al([38]), rd(Yd)), Il(Al([40]), id(qd)), Il(Al([32].concat([13])), function(n, e, o) {
            return Nl(n.element()).bind(function(t) {
                return o.execute(n, e, t)
            })
        })]),
        $d = nt([Il(Al([32]), Yl)]),
        Jd = jl(jd, yi.init, Kd, $d, function() {
            return et.some(Ud)
        }),
        Qd = [Pn("selector"), Zn("execute", Xl), Zn("moveOnTab", !1)],
        Zd = function(n, e, o) {
            return o.focusManager.get(n).bind(function(t) {
                return o.execute(n, e, t)
            })
        },
        tm = function(n, e) {
            du(n.element(), e.selector).each(function(t) {
                e.focusManager.set(n, t)
            })
        },
        nm = function(t, n, e) {
            return Ed(t, e.selector, n, -1)
        },
        em = function(t, n, e) {
            return Ed(t, e.selector, n, 1)
        },
        om = nt([Il(Al([38]), ud(nm)), Il(Al([40]), ud(em)), Il(Dl([_l, Al([9])]), function(t, n, e) {
            return e.moveOnTab ? ud(nm)(t, n, e) : et.none()
        }), Il(Dl([Fl, Al([9])]), function(t, n, e) {
            return e.moveOnTab ? ud(em)(t, n, e) : et.none()
        }), Il(Al([13]), Zd), Il(Al([32]), Zd)]),
        rm = nt([Il(Al([32]), Yl)]),
        im = jl(Qd, yi.init, om, rm, function() {
            return et.some(tm)
        }),
        um = [Fu("onSpace"), Fu("onEnter"), Fu("onShiftEnter"), Fu("onLeft"), Fu("onRight"), Fu("onTab"), Fu("onShiftTab"), Fu("onUp"), Fu("onDown"), Fu("onEscape"), Zn("stopSpaceKeyup", !1), Yn("focusIn")],
        am = jl(um, yi.init, function(t, n, e) {
            return [Il(Al([32]), e.onSpace), Il(Dl([Fl, Al([13])]), e.onEnter), Il(Dl([_l, Al([13])]), e.onShiftEnter), Il(Dl([_l, Al([9])]), e.onShiftTab), Il(Dl([Fl, Al([9])]), e.onTab), Il(Al([38]), e.onUp), Il(Al([40]), e.onDown), Il(Al([37]), e.onLeft), Il(Al([39]), e.onRight), Il(Al([32]), e.onSpace), Il(Al([27]), e.onEscape)]
        }, function(t, n, e) {
            return e.stopSpaceKeyup ? [Il(Al([32]), Yl)] : []
        }, function(t) {
            return t.focusIn
        }),
        cm = Wl.schema(),
        sm = Gl.schema(),
        fm = Rd.schema(),
        lm = Od.schema(),
        dm = Jd.schema(),
        mm = $l.schema(),
        gm = im.schema(),
        pm = am.schema(),
        hm = qu({
            branchKey: "mode",
            branches: /* */ Object.freeze({
                acyclic: cm,
                cyclic: sm,
                flow: fm,
                flatgrid: lm,
                matrix: dm,
                execution: mm,
                menu: gm,
                special: pm
            }),
            name: "keying",
            active: {
                events: function(t, n) {
                    return t.handler.toEvents(t, n)
                }
            },
            apis: {
                focusIn: function(n, e, o) {
                    e.sendFocusIn(e).fold(function() {
                        n.getSystem().triggerFocus(n.element(), n.element())
                    }, function(t) {
                        t(n, e, o)
                    })
                },
                setGridSize: function(t, n, e, o, r) {
                    Nt(e, "setGridSize") ? e.setGridSize(o, r) : H.console.error("Layout does not support setGridSize")
                }
            },
            state: Ql
        }),
        vm = function(t, n, e, o) {
            var r = t.getSystem().build(o);
            Is(t, r, e)
        },
        bm = function(t, n, e, o) {
            var r = ym(t);
            N(r, function(t) {
                return qe(o.element(), t.element())
            }).each(Vs)
        },
        ym = function(t, n) {
            return t.components()
        },
        xm = function(n, t, e, r, o) {
            var i = ym(n);
            return et.from(i[r]).map(function(t) {
                return bm(n, 0, 0, t), o.each(function(t) {
                    vm(n, 0, function(t, n) {
                        var e, o;
                        o = n, Ir(e = t, r).fold(function() {
                            Hr(e, o)
                        }, function(t) {
                            Rr(t, o)
                        })
                    }, t)
                }), t
            })
        },
        wm = Xu({
            fields: [],
            name: "replacing",
            apis: /* */ Object.freeze({
                append: function(t, n, e, o) {
                    vm(t, 0, Hr, o)
                },
                prepend: function(t, n, e, o) {
                    vm(t, 0, Nr, o)
                },
                remove: bm,
                replaceAt: xm,
                replaceBy: function(n, t, e, o, r) {
                    var i = ym(n);
                    return G(i, o).bind(function(t) {
                        return xm(n, 0, 0, t, r)
                    })
                },
                set: function(n, t, e, o) {
                    var r, i, u, a;
                    Ns(n), r = function() {
                        var t = F(o, n.getSystem().build);
                        W(t, function(t) {
                            Fs(n, t)
                        })
                    }, i = n.element(), u = Ar(i), a = Vl(u).bind(function(n) {
                        var t = function(t) {
                            return qe(n, t)
                        };
                        return t(i) ? et.some(i) : cr(i, t)
                    }), r(i), a.each(function(n) {
                        Vl(u).filter(function(t) {
                            return qe(t, n)
                        }).fold(function() {
                            Rl(n)
                        }, tt)
                    })
                },
                contents: ym
            })
        }),
        Sm = function(t, n, e) {
            n.store.manager.onLoad(t, n, e)
        },
        Cm = function(t, n, e) {
            n.store.manager.onUnload(t, n, e)
        },
        km = /* */ Object.freeze({
            onLoad: Sm,
            onUnload: Cm,
            setValue: function(t, n, e, o) {
                n.store.manager.setValue(t, n, e, o)
            },
            getValue: function(t, n, e) {
                return n.store.manager.getValue(t, n, e)
            },
            getState: function(t, n, e) {
                return e
            }
        }),
        Om = /* */ Object.freeze({
            events: function(e, o) {
                var t = e.resetOnDom ? [wr(function(t, n) {
                    Sm(t, e, o)
                }), Sr(function(t, n) {
                    Cm(t, e, o)
                })] : [Pu(e, o, Sm)];
                return fr(t)
            }
        }),
        Em = function() {
            var t = ce(null);
            return xi({
                set: t.set,
                get: t.get,
                isNotSet: function() {
                    return null === t.get()
                },
                clear: function() {
                    t.set(null)
                },
                readState: function() {
                    return {
                        mode: "memory",
                        value: t.get()
                    }
                }
            })
        },
        Tm = function() {
            var i = ce({}),
                u = ce({});
            return xi({
                readState: function() {
                    return {
                        mode: "dataset",
                        dataByValue: i.get(),
                        dataByText: u.get()
                    }
                },
                lookup: function(t) {
                    return Ft(i.get(), t).orThunk(function() {
                        return Ft(u.get(), t)
                    })
                },
                update: function(t) {
                    var n = i.get(),
                        e = u.get(),
                        o = {},
                        r = {};
                    W(t, function(n) {
                        o[n.value] = n, Ft(n, "meta").each(function(t) {
                            Ft(t, "text").each(function(t) {
                                r[t] = n
                            })
                        })
                    }), i.set(P({}, n, o)), u.set(P({}, e, r))
                },
                clear: function() {
                    i.set({}), u.set({})
                }
            })
        },
        Bm = /* */ Object.freeze({
            memory: Em,
            dataset: Tm,
            manual: function() {
                return xi({
                    readState: function() {}
                })
            },
            init: function(t) {
                return t.store.manager.state(t)
            }
        }),
        Am = function(t, n, e, o) {
            var r = n.store;
            e.update([o]), r.setValue(t, o), n.onSetValue(t, o)
        },
        Dm = [Yn("initialValue"), Pn("getFallbackEntry"), Pn("getDataKey"), Pn("setValue"), Vu("manager", {
            setValue: Am,
            getValue: function(t, n, e) {
                var o = n.store,
                    r = o.getDataKey(t);
                return e.lookup(r).fold(function() {
                    return o.getFallbackEntry(r)
                }, function(t) {
                    return t
                })
            },
            onLoad: function(n, e, o) {
                e.store.initialValue.each(function(t) {
                    Am(n, e, o, t)
                })
            },
            onUnload: function(t, n, e) {
                e.clear()
            },
            state: Tm
        })],
        _m = [Pn("getValue"), Zn("setValue", tt), Yn("initialValue"), Vu("manager", {
            setValue: function(t, n, e, o) {
                n.store.setValue(t, o), n.onSetValue(t, o)
            },
            getValue: function(t, n, e) {
                return n.store.getValue(t)
            },
            onLoad: function(n, e, t) {
                e.store.initialValue.each(function(t) {
                    e.store.setValue(n, t)
                })
            },
            onUnload: tt,
            state: yi.init
        })],
        Mm = [Yn("initialValue"), Vu("manager", {
            setValue: function(t, n, e, o) {
                e.set(o), n.onSetValue(t, o)
            },
            getValue: function(t, n, e) {
                return e.get()
            },
            onLoad: function(t, n, e) {
                n.store.initialValue.each(function(t) {
                    e.isNotSet() && e.set(t)
                })
            },
            onUnload: function(t, n, e) {
                e.clear()
            },
            state: Em
        })],
        Fm = [te("store", {
            mode: "memory"
        }, _n("mode", {
            memory: Mm,
            manual: _m,
            dataset: Dm
        })), Mu("onSetValue"), Zn("resetOnDom", !1)],
        Im = Xu({
            fields: Fm,
            name: "representing",
            active: Om,
            apis: km,
            extra: {
                setValueFrom: function(t, n) {
                    var e = Im.getValue(n);
                    Im.setValue(t, e)
                }
            },
            state: Bm
        }),
        Rm = function(t, n) {
            n.ignore || (Rl(t.element()), n.onFocus(t))
        },
        Vm = /* */ Object.freeze({
            focus: Rm,
            blur: function(t, n) {
                n.ignore || t.element().dom().blur()
            },
            isFocused: function(t) {
                return n = t.element(), e = Ar(n).dom(), n.dom() === e.activeElement;
                var n, e
            }
        }),
        Nm = /* */ Object.freeze({
            exhibit: function(t, n) {
                var e = n.ignore ? {} : {
                    attributes: {
                        tabindex: "-1"
                    }
                };
                return Si(e)
            },
            events: function(e) {
                return fr([mr(vo(), function(t, n) {
                    Rm(t, e), n.stop()
                })].concat(e.stopMousedown ? [mr(no(), function(t, n) {
                    n.event().prevent()
                })] : []))
            }
        }),
        Hm = [Mu("onFocus"), Zn("stopMousedown", !1), Zn("ignore", !1)],
        Pm = Xu({
            fields: Hm,
            name: "focusing",
            active: Nm,
            apis: Vm
        }),
        zm = function(t, n, e) {
            var o = n.aria;
            o.update(t, o, e.get())
        },
        Lm = function(n, t, e) {
            t.toggleClass.each(function(t) {
                e.get() ? Ri(n.element(), t) : Ni(n.element(), t)
            })
        },
        jm = function(t, n, e) {
            Gm(t, n, e, !e.get())
        },
        Um = function(t, n, e) {
            e.set(!0), Lm(t, n, e), zm(t, n, e)
        },
        Wm = function(t, n, e) {
            e.set(!1), Lm(t, n, e), zm(t, n, e)
        },
        Gm = function(t, n, e, o) {
            (o ? Um : Wm)(t, n, e)
        },
        Xm = function(t, n, e) {
            Gm(t, n, e, n.selected)
        },
        Ym = /* */ Object.freeze({
            onLoad: Xm,
            toggle: jm,
            isOn: function(t, n, e) {
                return e.get()
            },
            on: Um,
            off: Wm,
            set: Gm
        }),
        qm = /* */ Object.freeze({
            exhibit: function(t, n, e) {
                return Si({})
            },
            events: function(t, n) {
                var e, o, r, i = (e = t, o = n, r = jm, kr(function(t) {
                        r(t, e, o)
                    })),
                    u = Pu(t, n, Xm);
                return fr(q([t.toggleOnExecute ? [i] : [],
                    [u]
                ]))
            }
        }),
        Km = function(t, n, e) {
            Xr(t.element(), "aria-expanded", e)
        },
        $m = [Zn("selected", !1), Yn("toggleClass"), Zn("toggleOnExecute", !0), te("aria", {
            mode: "none"
        }, _n("mode", {
            pressed: [Zn("syncWithExpanded", !1), Vu("update", function(t, n, e) {
                Xr(t.element(), "aria-pressed", e), n.syncWithExpanded && Km(t, n, e)
            })],
            checked: [Vu("update", function(t, n, e) {
                Xr(t.element(), "aria-checked", e)
            })],
            expanded: [Vu("update", Km)],
            selected: [Vu("update", function(t, n, e) {
                Xr(t.element(), "aria-selected", e)
            })],
            none: [Vu("update", tt)]
        }))],
        Jm = Xu({
            fields: $m,
            name: "toggling",
            active: qm,
            apis: Ym,
            state: (Ll = !1, {
                init: function() {
                    var n = ce(Ll);
                    return {
                        get: function() {
                            return n.get()
                        },
                        set: function(t) {
                            return n.set(t)
                        },
                        clear: function() {
                            return n.set(Ll)
                        },
                        readState: function() {
                            return n.get()
                        }
                    }
                }
            })
        }),
        Qm = "alloy.item-hover",
        Zm = "alloy.item-focus",
        tg = function(t) {
            (Nl(t.element()).isNone() || Pm.isFocused(t)) && (Pm.isFocused(t) || Pm.focus(t), Lo(t, Qm, {
                item: t
            }))
        },
        ng = function(t) {
            Lo(t, Zm, {
                item: t
            })
        },
        eg = nt(Qm),
        og = nt(Zm),
        rg = function(t, n) {
            var e, o;
            return {
                key: t,
                value: {
                    config: {},
                    me: (e = t, o = fr(n), Xu({
                        fields: [Pn("enabled")],
                        name: e,
                        active: {
                            events: nt(o)
                        }
                    })),
                    configAsRaw: nt({}),
                    initialConfig: {},
                    state: yi
                }
            }
        },
        ig = [Pn("data"), Pn("components"), Pn("dom"), Zn("hasSubmenu", !1), Yn("toggling"), rf("itemBehaviours", [Jm, Pm, hm, Im]), Zn("ignoreFocus", !1), Zn("domModification", {}), Vu("builder", function(t) {
            return {
                dom: t.dom,
                domModification: P({}, t.domModification, {
                    attributes: P({
                        role: t.toggling.isSome() ? "menuitemcheckbox" : "menuitem"
                    }, t.domModification.attributes, {
                        "aria-haspopup": t.hasSubmenu
                    }, t.hasSubmenu ? {
                        "aria-expanded": !1
                    } : {})
                }),
                behaviours: uf(t.itemBehaviours, [t.toggling.fold(Jm.revoke, function(t) {
                    return Jm.config(P({
                        aria: {
                            mode: "checked"
                        }
                    }, t))
                }), Pm.config({
                    ignore: t.ignoreFocus,
                    stopMousedown: t.ignoreFocus,
                    onFocus: function(t) {
                        ng(t)
                    }
                }), hm.config({
                    mode: "execution"
                }), Im.config({
                    store: {
                        mode: "memory",
                        initialValue: t.data
                    }
                }), rg("item-type-events", [mr(ko(), jo), br(no()), mr(io(), tg), mr(So(), Pm.focus)])]),
                components: t.components,
                eventOrder: t.eventOrder
            }
        }), Zn("eventOrder", {})],
        ug = [Pn("dom"), Pn("components"), Vu("builder", function(t) {
            return {
                dom: t.dom,
                components: t.components,
                events: fr([yr(So())])
            }
        })],
        ag = nt([Df({
            name: "widget",
            overrides: function(n) {
                return {
                    behaviours: Wu([Im.config({
                        store: {
                            mode: "manual",
                            getValue: function(t) {
                                return n.data
                            },
                            setValue: function() {}
                        }
                    })])
                }
            }
        })]),
        cg = [Pn("uid"), Pn("data"), Pn("components"), Pn("dom"), Zn("autofocus", !1), Zn("ignoreFocus", !1), rf("widgetBehaviours", [Im, Pm, hm]), Zn("domModification", {}), Jf(ag()), Vu("builder", function(e) {
            var t = jf(0, e, ag()),
                n = Uf("item-widget", e, t.internals()),
                o = function(t) {
                    return Wf(t, e, "widget").map(function(t) {
                        return hm.focusIn(t), t
                    })
                },
                r = function(t, n) {
                    return cl(n.event().target()) || e.autofocus && n.setSource(t.element()), et.none()
                };
            return {
                dom: e.dom,
                components: n,
                domModification: e.domModification,
                events: fr([kr(function(t, n) {
                    o(t).each(function(t) {
                        n.stop()
                    })
                }), mr(io(), tg), mr(So(), function(t, n) {
                    e.autofocus ? o(t) : Pm.focus(t)
                })]),
                behaviours: uf(e.widgetBehaviours, [Im.config({
                    store: {
                        mode: "memory",
                        initialValue: e.data
                    }
                }), Pm.config({
                    ignore: e.ignoreFocus,
                    onFocus: function(t) {
                        ng(t)
                    }
                }), hm.config({
                    mode: "special",
                    focusIn: e.autofocus ? function(t) {
                        o(t)
                    } : Ku(),
                    onLeft: r,
                    onRight: r,
                    onEscape: function(t, n) {
                        return Pm.isFocused(t) || e.autofocus ? (e.autofocus && n.setSource(t.element()), et.none()) : (Pm.focus(t), et.some(!0))
                    }
                })])
            }
        })],
        sg = _n("type", {
            widget: cg,
            item: ig,
            separator: ug
        }),
        fg = nt([Ff({
            factory: {
                sketch: function(t) {
                    var n = An("menu.spec item", sg, t);
                    return n.builder(n)
                }
            },
            name: "items",
            unit: "item",
            defaults: function(t, n) {
                return n.hasOwnProperty("uid") ? n : P({}, n, {
                    uid: fi("item")
                })
            },
            overrides: function(t, n) {
                return {
                    type: n.type,
                    ignoreFocus: t.fakeFocus,
                    domModification: {
                        classes: [t.markers.item]
                    }
                }
            }
        })]),
        lg = nt([Pn("value"), Pn("items"), Pn("dom"), Pn("components"), Zn("eventOrder", {}), nf("menuBehaviours", [kl, Im, ll, hm]), te("movement", {
            mode: "menu",
            moveOnTab: !0
        }, _n("mode", {
            grid: [Hu(), Vu("config", function(t, n) {
                return {
                    mode: "flatgrid",
                    selector: "." + t.markers.item,
                    initSize: {
                        numColumns: n.initSize.numColumns,
                        numRows: n.initSize.numRows
                    },
                    focusManager: t.focusManager
                }
            })],
            matrix: [Vu("config", function(t, n) {
                return {
                    mode: "matrix",
                    selectors: {
                        row: n.rowSelector,
                        cell: "." + t.markers.item
                    },
                    focusManager: t.focusManager
                }
            }), Pn("rowSelector")],
            menu: [Zn("moveOnTab", !0), Vu("config", function(t, n) {
                return {
                    mode: "menu",
                    selector: "." + t.markers.item,
                    moveOnTab: n.moveOnTab,
                    focusManager: t.focusManager
                }
            })]
        })), zn("markers", Tu()), Zn("fakeFocus", !1), Zn("focusManager", Pl()), Mu("onHighlight")]),
        dg = nt("alloy.menu-focus"),
        mg = al({
            name: "Menu",
            configFields: lg(),
            partFields: fg(),
            factory: function(t, n, e, o) {
                return {
                    uid: t.uid,
                    dom: t.dom,
                    markers: t.markers,
                    behaviours: of(t.menuBehaviours, [kl.config({
                        highlightClass: t.markers.selectedItem,
                        itemClass: t.markers.item,
                        onHighlight: t.onHighlight
                    }), Im.config({
                        store: {
                            mode: "memory",
                            initialValue: t.value
                        }
                    }), ll.config({
                        find: et.some
                    }), hm.config(t.movement.config(t, t.movement))]),
                    events: fr([mr(og(), function(n, e) {
                        var t = e.event();
                        n.getSystem().getByDom(t.target()).each(function(t) {
                            kl.highlight(n, t), e.stop(), Lo(n, dg(), {
                                menu: n,
                                item: t
                            })
                        })
                    }), mr(eg(), function(t, n) {
                        var e = n.event().item();
                        kl.highlight(t, e)
                    })]),
                    components: n,
                    eventOrder: t.eventOrder,
                    domModification: {
                        attributes: {
                            role: "menu"
                        }
                    }
                }
            }
        }),
        gg = function(e, o, r, t) {
            return Ft(r, t).bind(function(t) {
                return Ft(e, t).bind(function(t) {
                    var n = gg(e, o, r, t);
                    return et.some([t].concat(n))
                })
            }).getOr([])
        },
        pg = function(t, n) {
            var e = {};
            ct(t, function(t, n) {
                W(t, function(t) {
                    e[t] = n
                })
            });
            var o = n,
                r = ft(n, function(t, n) {
                    return {
                        k: t,
                        v: n
                    }
                }),
                i = st(r, function(t, n) {
                    return [n].concat(gg(e, o, r, n))
                });
            return st(e, function(t) {
                return Ft(i, t).getOr([t])
            })
        },
        hg = function() {
            var i = ce({}),
                u = ce({}),
                a = ce({}),
                c = ce(et.none()),
                s = ce({}),
                n = function(t) {
                    return Ft(u.get(), t)
                };
            return {
                setMenuBuilt: function(t, n) {
                    var e;
                    u.set(P({}, u.get(), ((e = {})[t] = {
                        type: "prepared",
                        menu: n
                    }, e)))
                },
                setContents: function(t, n, e, o) {
                    c.set(et.some(t)), i.set(e), u.set(n), s.set(o);
                    var r = pg(o, e);
                    a.set(r)
                },
                expand: function(e) {
                    return Ft(i.get(), e).map(function(t) {
                        var n = Ft(a.get(), e).getOr([]);
                        return [t].concat(n)
                    })
                },
                refresh: function(t) {
                    return Ft(a.get(), t)
                },
                collapse: function(t) {
                    return Ft(a.get(), t).bind(function(t) {
                        return 1 < t.length ? et.some(t.slice(1)) : et.none()
                    })
                },
                lookupMenu: n,
                otherMenus: function(t) {
                    var n = s.get();
                    return Q(ut(n), t)
                },
                getPrimary: function() {
                    return c.get().bind(function(t) {
                        return n(t).bind(function(t) {
                            return "prepared" === t.type ? et.some(t.menu) : et.none()
                        })
                    })
                },
                getMenus: function() {
                    return u.get()
                },
                clear: function() {
                    i.set({}), u.set({}), a.set({}), c.set(et.none())
                },
                isClear: function() {
                    return c.get().isNone()
                }
            }
        },
        vg = nt("collapse-item"),
        bg = ul({
            name: "TieredMenu",
            configFields: [Ru("onExecute"), Ru("onEscape"), Iu("onOpenMenu"), Iu("onOpenSubmenu"), Mu("onCollapseMenu"), Zn("highlightImmediately", !0), Wn("data", [Pn("primary"), Pn("menus"), Pn("expansions")]), Zn("fakeFocus", !1), Mu("onHighlight"), Mu("onHover"), Au(), Pn("dom"), Zn("navigateOnHover", !0), Zn("stayInDom", !1), nf("tmenuBehaviours", [hm, kl, ll, wm]), Zn("eventOrder", {})],
            apis: {
                collapseMenu: function(t, n) {
                    t.collapseMenu(n)
                },
                highlightPrimary: function(t, n) {
                    t.highlightPrimary(n)
                }
            },
            factory: function(a, t) {
                var c, n, i = ce(et.none()),
                    s = hg(),
                    e = function(t) {
                        var o, r, n, e = (o = t, r = a.data.primary, n = a.data.menus, st(n, function(t, n) {
                                var e = function() {
                                    return mg.sketch(P({
                                        dom: t.dom
                                    }, t, {
                                        value: n,
                                        items: t.items,
                                        markers: a.markers,
                                        fakeFocus: a.fakeFocus,
                                        onHighlight: a.onHighlight,
                                        focusManager: a.fakeFocus ? zl() : Pl()
                                    }))
                                };
                                return n === r ? {
                                    type: "prepared",
                                    menu: o.getSystem().build(e())
                                } : {
                                    type: "notbuilt",
                                    nbMenu: e
                                }
                            })),
                            i = u();
                        return s.setContents(a.data.primary, e, a.data.expansions, i), s.getPrimary()
                    },
                    f = function(t) {
                        return Im.getValue(t).value
                    },
                    u = function(t) {
                        return st(a.data.menus, function(t, n) {
                            return K(t.items, function(t) {
                                return "separator" === t.type ? [] : [t.data.value]
                            })
                        })
                    },
                    l = function(n, t) {
                        kl.highlight(n, t), kl.getHighlighted(t).orThunk(function() {
                            return kl.getFirst(t)
                        }).each(function(t) {
                            Uo(n, t.element(), So())
                        })
                    },
                    d = function(n, t) {
                        return vu(F(t, function(t) {
                            return n.lookupMenu(t).bind(function(t) {
                                return "prepared" === t.type ? et.some(t.menu) : et.none()
                            })
                        }))
                    },
                    m = function(n, t, e) {
                        var o = d(t, t.otherMenus(e));
                        W(o, function(t) {
                            zi(t.element(), [a.markers.backgroundMenu]), a.stayInDom || wm.remove(n, t)
                        })
                    },
                    g = function(t, o) {
                        var r, n = (r = t, i.get().getOrThunk(function() {
                            var e = {},
                                t = $c(r.element(), "." + a.markers.item),
                                n = I(t, function(t) {
                                    return "true" === qr(t, "aria-haspopup")
                                });
                            return W(n, function(t) {
                                r.getSystem().getByDom(t).each(function(t) {
                                    var n = f(t);
                                    e[n] = t
                                })
                            }), i.set(et.some(e)), e
                        }));
                        ct(n, function(t, n) {
                            var e = D(o, n);
                            Xr(t.element(), "aria-expanded", e)
                        })
                    },
                    p = function(o, r, i) {
                        return et.from(i[0]).bind(function(t) {
                            return r.lookupMenu(t).bind(function(t) {
                                if ("notbuilt" === t.type) return et.none();
                                var n = t.menu,
                                    e = d(r, i.slice(1));
                                return W(e, function(t) {
                                    Ri(t.element(), a.markers.backgroundMenu)
                                }), or(n.element()) || wm.append(o, fu(n)), zi(n.element(), [a.markers.backgroundMenu]), l(o, n), m(o, r, i), et.some(n)
                            })
                        })
                    };
                (n = c || (c = {}))[n.HighlightSubmenu = 0] = "HighlightSubmenu", n[n.HighlightParent = 1] = "HighlightParent";
                var h = function(r, i, u) {
                        void 0 === u && (u = c.HighlightSubmenu);
                        var t = f(i);
                        return s.expand(t).bind(function(o) {
                            return g(r, o), et.from(o[0]).bind(function(e) {
                                return s.lookupMenu(e).bind(function(t) {
                                    var n = function(t, n, e) {
                                        if ("notbuilt" !== e.type) return e.menu;
                                        var o = t.getSystem().build(e.nbMenu());
                                        return s.setMenuBuilt(n, o), o
                                    }(r, e, t);
                                    return or(n.element()) || wm.append(r, fu(n)), a.onOpenSubmenu(r, i, n), u === c.HighlightSubmenu ? (kl.highlightFirst(n), p(r, s, o)) : (kl.dehighlightAll(n), et.some(i))
                                })
                            })
                        })
                    },
                    o = function(n, e) {
                        var t = f(e);
                        return s.collapse(t).bind(function(t) {
                            return g(n, t), p(n, s, t).map(function(t) {
                                return a.onCollapseMenu(n, e, t), t
                            })
                        })
                    },
                    r = function(e) {
                        return function(n, t) {
                            return mu(t.getSource(), "." + a.markers.item).bind(function(t) {
                                return n.getSystem().getByDom(t).toOption().bind(function(t) {
                                    return e(n, t).map(function() {
                                        return !0
                                    })
                                })
                            })
                        }
                    },
                    v = fr([mr(dg(), function(n, t) {
                        var e = t.event().menu();
                        kl.highlight(n, e);
                        var o = f(t.event().item());
                        s.refresh(o).each(function(t) {
                            return m(n, s, t)
                        })
                    }), kr(function(n, t) {
                        var e = t.event().target();
                        n.getSystem().getByDom(e).each(function(t) {
                            0 === f(t).indexOf("collapse-item") && o(n, t), h(n, t, c.HighlightSubmenu).fold(function() {
                                a.onExecute(n, t)
                            }, function() {})
                        })
                    }), wr(function(n, t) {
                        e(n).each(function(t) {
                            wm.append(n, fu(t)), a.onOpenMenu(n, t), a.highlightImmediately && l(n, t)
                        })
                    })].concat(a.navigateOnHover ? [mr(eg(), function(t, n) {
                        var e, o, r = n.event().item();
                        e = t, o = f(r), s.refresh(o).bind(function(t) {
                            return g(e, t), p(e, s, t)
                        }), h(t, r, c.HighlightParent), a.onHover(t, r)
                    })] : [])),
                    b = {
                        collapseMenu: function(n) {
                            kl.getHighlighted(n).each(function(t) {
                                kl.getHighlighted(t).each(function(t) {
                                    o(n, t)
                                })
                            })
                        },
                        highlightPrimary: function(n) {
                            s.getPrimary().each(function(t) {
                                l(n, t)
                            })
                        }
                    };
                return {
                    uid: a.uid,
                    dom: a.dom,
                    markers: a.markers,
                    behaviours: of(a.tmenuBehaviours, [hm.config({
                        mode: "special",
                        onRight: r(function(t, n) {
                            return cl(n.element()) ? et.none() : h(t, n, c.HighlightSubmenu)
                        }),
                        onLeft: r(function(t, n) {
                            return cl(n.element()) ? et.none() : o(t, n)
                        }),
                        onEscape: r(function(t, n) {
                            return o(t, n).orThunk(function() {
                                return a.onEscape(t, n).map(function() {
                                    return t
                                })
                            })
                        }),
                        focusIn: function(n, t) {
                            s.getPrimary().each(function(t) {
                                Uo(n, t.element(), So())
                            })
                        }
                    }), kl.config({
                        highlightClass: a.markers.selectedMenu,
                        itemClass: a.markers.menu
                    }), ll.config({
                        find: function(t) {
                            return kl.getHighlighted(t)
                        }
                    }), wm.config({})]),
                    eventOrder: a.eventOrder,
                    apis: b,
                    events: v
                }
            },
            extraApis: {
                tieredData: function(t, n, e) {
                    return {
                        primary: t,
                        menus: n,
                        expansions: e
                    }
                },
                singleData: function(t, n) {
                    return {
                        primary: t,
                        menus: It(t, n),
                        expansions: {}
                    }
                },
                collapseItem: function(t) {
                    return {
                        value: oi(vg()),
                        meta: {
                            text: t
                        }
                    }
                }
            }
        }),
        yg = ul({
            name: "InlineView",
            configFields: [Pn("lazySink"), Mu("onShow"), Mu("onHide"), Jn("onEscape"), nf("inlineBehaviours", [Ks, Qu]), Qn("fireDismissalEventInstead", [Zn("event", Fo())]), Zn("getRelated", et.none), Zn("eventOrder", et.none)],
            factory: function(s, t) {
                var r = function(t, n, e, o) {
                        var r = s.lazySink(t).getOrDie();
                        Ks.openWhileCloaked(t, e, function() {
                            return Ds.positionWithin(r, n, t, o)
                        }), s.onShow(t)
                    },
                    n = {
                        setContent: function(t, n) {
                            Ks.open(t, n)
                        },
                        showAt: function(t, n, e) {
                            var o = et.none();
                            r(t, n, e, o)
                        },
                        showWithin: r,
                        showMenuAt: function(t, n, e) {
                            var o, r, i, u, a, c = (o = s, r = t, i = n, u = e, a = function() {
                                return o.lazySink(r)
                            }, bg.sketch({
                                dom: {
                                    tag: "div"
                                },
                                data: u.data,
                                markers: u.menu.markers,
                                onEscape: function() {
                                    return Ks.close(r), o.onEscape.map(function(t) {
                                        return t(r)
                                    }), et.some(!0)
                                },
                                onExecute: function() {
                                    return et.some(!0)
                                },
                                onOpenMenu: function(t, n) {
                                    Ds.position(a().getOrDie(), i, n)
                                },
                                onOpenSubmenu: function(t, n, e) {
                                    var o = a().getOrDie();
                                    Ds.position(o, {
                                        anchor: "submenu",
                                        item: n
                                    }, e)
                                }
                            }));
                            Ks.open(t, c), s.onShow(t)
                        },
                        hide: function(t) {
                            Ks.close(t), s.onHide(t)
                        },
                        getContent: function(t) {
                            return Ks.getState(t)
                        },
                        isOpen: Ks.isOpen
                    };
                return {
                    uid: s.uid,
                    dom: s.dom,
                    behaviours: of(s.inlineBehaviours, [Ks.config({
                        isPartOf: function(t, n, e) {
                            return hu(n, e) || (o = t, r = e, s.getRelated(o).exists(function(t) {
                                return hu(t, r)
                            }));
                            var o, r
                        },
                        getAttachPoint: function(t) {
                            return s.lazySink(t).getOrDie()
                        }
                    }), Zs(P({
                        isExtraPart: nt(!1)
                    }, s.fireDismissalEventInstead.map(function(t) {
                        return {
                            fireEventInstead: {
                                event: t.event
                            }
                        }
                    }).getOr({})))]),
                    eventOrder: s.eventOrder,
                    apis: n
                }
            },
            apis: {
                showAt: function(t, n, e, o) {
                    t.showAt(n, e, o)
                },
                showWithin: function(t, n, e, o, r) {
                    t.showWithin(n, e, o, r)
                },
                showMenuAt: function(t, n, e, o) {
                    t.showMenuAt(n, e, o)
                },
                hide: function(t, n) {
                    t.hide(n)
                },
                isOpen: function(t, n) {
                    return t.isOpen(n)
                },
                getContent: function(t, n) {
                    return t.getContent(n)
                },
                setContent: function(t, n, e) {
                    t.setContent(n, e)
                }
            }
        }),
        xg = function(t) {
            var n = function(t, n) {
                    n.stop(), jo(t)
                },
                e = Pe.detect().deviceType.isTouch() ? [mr(Co(), n)] : [mr(mo(), n), mr(no(), function(t, n) {
                    n.cut()
                })];
            return fr(q([t.map(function(e) {
                return mr(wo(), function(t, n) {
                    e(t), n.stop()
                })
            }).toArray(), e]))
        },
        wg = ul({
            name: "Button",
            factory: function(t) {
                var n = xg(t.action),
                    e = t.dom.tag,
                    o = function(n) {
                        return Ft(t.dom, "attributes").bind(function(t) {
                            return Ft(t, n)
                        })
                    };
                return {
                    uid: t.uid,
                    dom: t.dom,
                    components: t.components,
                    events: n,
                    behaviours: uf(t.buttonBehaviours, [Pm.config({}), hm.config({
                        mode: "execution",
                        useSpace: !0,
                        useEnter: !0
                    })]),
                    domModification: {
                        attributes: function() {
                            if ("button" !== e) return {
                                role: o("role").getOr("button")
                            };
                            var t = o("type").getOr("button"),
                                n = o("role").map(function(t) {
                                    return {
                                        role: t
                                    }
                                }).getOr({});
                            return P({
                                type: t
                            }, n)
                        }()
                    },
                    eventOrder: t.eventOrder
                }
            },
            configFields: [Zn("uid", undefined), Pn("dom"), Zn("components", []), rf("buttonBehaviours", [Pm, hm]), Yn("action"), Yn("role"), Zn("eventOrder", {})]
        }),
        Sg = function(t) {
            var n = function e(t) {
                return t.uid !== undefined
            }(t) && Nt(t, "uid") ? t.uid : fi("memento");
            return {
                get: function(t) {
                    return t.getSystem().getByUid(n).getOrDie()
                },
                getOpt: function(t) {
                    return t.getSystem().getByUid(n).fold(et.none, et.some)
                },
                asSpec: function() {
                    return P({}, t, {
                        uid: n
                    })
                }
            }
        },
        Cg = function(t) {
            return et.from(t()["temporary-placeholder"]).getOr("!not found!")
        },
        kg = function(t, n) {
            return et.from(n()[t]).getOrThunk(function() {
                return Cg(n)
            })
        },
        Og = {
            success: "checkmark",
            error: "warning",
            err: "error",
            warning: "warning",
            warn: "warning",
            info: "info"
        },
        Eg = ul({
            name: "Notification",
            factory: function(n) {
                var t, e, o = Sg({
                        dom: {
                            tag: "p",
                            innerHtml: n.translationProvider(n.text)
                        },
                        behaviours: Wu([wm.config({})])
                    }),
                    r = function(t) {
                        return {
                            dom: {
                                tag: "div",
                                classes: ["tox-bar"],
                                attributes: {
                                    style: "width: " + t + "%"
                                }
                            }
                        }
                    },
                    i = function(t) {
                        return {
                            dom: {
                                tag: "div",
                                classes: ["tox-text"],
                                innerHtml: t + "%"
                            }
                        }
                    },
                    u = Sg({
                        dom: {
                            tag: "div",
                            classes: n.progress ? ["tox-progress-bar", "tox-progress-indicator"] : ["tox-progress-bar"]
                        },
                        components: [{
                            dom: {
                                tag: "div",
                                classes: ["tox-bar-container"]
                            },
                            components: [r(0)]
                        }, i(0)],
                        behaviours: Wu([wm.config({})])
                    }),
                    a = {
                        updateProgress: function(t, n) {
                            t.getSystem().isConnected() && u.getOpt(t).each(function(t) {
                                wm.set(t, [{
                                    dom: {
                                        tag: "div",
                                        classes: ["tox-bar-container"]
                                    },
                                    components: [r(n)]
                                }, i(n)])
                            })
                        },
                        updateText: function(t, n) {
                            if (t.getSystem().isConnected()) {
                                var e = o.get(t);
                                wm.set(e, [uu(n)])
                            }
                        }
                    },
                    c = q([n.icon.toArray(), n.level.toArray(), n.level.bind(function(t) {
                        return et.from(Og[t])
                    }).toArray()]);
                return {
                    uid: n.uid,
                    dom: {
                        tag: "div",
                        attributes: {
                            role: "alert"
                        },
                        classes: n.level.map(function(t) {
                            return ["tox-notification", "tox-notification--in", "tox-notification--" + t]
                        }).getOr(["tox-notification", "tox-notification--in"])
                    },
                    components: [{
                        dom: {
                            tag: "div",
                            classes: ["tox-notification__icon"],
                            innerHtml: (t = c, e = n.iconProvider, bu(t, function(t) {
                                return et.from(e()[t])
                            }).getOrThunk(function() {
                                return Cg(e)
                            }))
                        }
                    }, {
                        dom: {
                            tag: "div",
                            classes: ["tox-notification__body"]
                        },
                        components: [o.asSpec()],
                        behaviours: Wu([wm.config({})])
                    }].concat(n.progress ? [u.asSpec()] : []).concat(wg.sketch({
                        dom: {
                            tag: "button",
                            classes: ["tox-notification__dismiss", "tox-button", "tox-button--naked", "tox-button--icon"]
                        },
                        components: [{
                            dom: {
                                tag: "div",
                                classes: ["tox-icon"],
                                innerHtml: kg("close", n.iconProvider),
                                attributes: {
                                    "aria-label": n.translationProvider("Close")
                                }
                            }
                        }],
                        action: function(t) {
                            n.onAction(t)
                        }
                    })),
                    apis: a
                }
            },
            configFields: [Yn("level"), Pn("progress"), Pn("icon"), Pn("onAction"), Pn("text"), Pn("iconProvider"), Pn("translationProvider")],
            apis: {
                updateProgress: function(t, n, e) {
                    t.updateProgress(n, e)
                },
                updateText: function(t, n, e) {
                    t.updateText(n, e)
                }
            }
        }),
        Tg = tinymce.util.Tools.resolve("tinymce.util.Delay");

    function Bg(r, i, u) {
        var a = i.backstage;
        return {
            open: function(t, n) {
                var e = function() {
                        n(), yg.hide(r)
                    },
                    o = su(Eg.sketch({
                        text: t.text,
                        level: D(["success", "error", "warning", "info"], t.type) ? t.type : undefined,
                        progress: !0 === t.progressBar,
                        icon: et.from(t.icon),
                        onAction: e,
                        iconProvider: a.shared.providers.icons,
                        translationProvider: a.shared.providers.translate
                    })),
                    r = su(yg.sketch({
                        dom: {
                            tag: "div",
                            classes: ["tox-notifications-container"]
                        },
                        lazySink: i.backstage.shared.getSink,
                        fireDismissalEventInstead: {}
                    }));
                return u.add(r), t.timeout && Tg.setTimeout(function() {
                    e()
                }, t.timeout), {
                    close: e,
                    moveTo: function(t, n) {
                        yg.showAt(r, {
                            anchor: "makeshift",
                            x: t,
                            y: n
                        }, fu(o))
                    },
                    moveRel: function(t, n) {
                        yg.showAt(r, i.backstage.shared.anchors.banner(), fu(o))
                    },
                    text: function(t) {
                        Eg.updateText(o, t)
                    },
                    settings: t,
                    getEl: function() {},
                    progressBar: {
                        value: function(t) {
                            Eg.updateProgress(o, t)
                        }
                    }
                }
            },
            close: function(t) {
                t.close()
            },
            reposition: function(t) {
                W(t, function(t) {
                        t.moveTo(0, 0)
                    }),
                    function(e) {
                        if (0 < e.length) {
                            var t = e.slice(0, 1)[0],
                                n = (o = r).inline ? o.getElement() : o.getContentAreaContainer();
                            t.moveRel(n, "tc-tc"), W(e, function(t, n) {
                                0 < n && t.moveRel(e[n - 1].getEl(), "bc-tc")
                            })
                        }
                        var o
                    }(t)
            },
            getArgs: function(t) {
                return t.settings
            }
        }
    }
    var Ag, Dg, _g = function(e, o) {
            var r = null;
            return {
                cancel: function() {
                    null !== r && (H.clearTimeout(r), r = null)
                },
                throttle: function() {
                    for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                    null !== r && H.clearTimeout(r), r = H.setTimeout(function() {
                        e.apply(null, t), r = null
                    }, o)
                }
            }
        },
        Mg = tinymce.util.Tools.resolve("tinymce.dom.TreeWalker"),
        Fg = pt([{
            aborted: []
        }, {
            edge: ["element"]
        }, {
            success: ["info"]
        }]),
        Ig = pt([{
            abort: []
        }, {
            kontinue: []
        }, {
            finish: ["info"]
        }]),
        Rg = function(n, e, t, o, r, i) {
            var u = function() {
                    return i.fold(Fg.aborted, Fg.edge)
                },
                a = function() {
                    var t = r();
                    return t ? Rg(n, t, et.none(), o, r, et.some(e)) : u()
                };
            if (n.isBlock(e)) return u();
            if (e.nodeType !== H.Node.TEXT_NODE) return a();
            var c = e.textContent;
            return o(Ig, e, c, t).fold(Fg.aborted, function() {
                return a()
            }, Fg.success)
        },
        Vg = function(t, n, e, o, r) {
            var i = new Mg(n, r || t.getRoot());
            return Rg(t, n, et.some(e), o, i.prev, et.none())
        },
        Ng = function(e, n) {
            return Hg(fe.fromDom(e.selection.getNode())).getOrThunk(function() {
                var t = fe.fromHtml('<span data-mce-autocompleter="1" data-mce-bogus="1"></span>', e.getDoc());
                return Hr(t, fe.fromDom(n.extractContents())), n.insertNode(t.dom()), _r(t).each(function(t) {
                    return t.dom().normalize()
                }), Uc(t).map(function(t) {
                    var n;
                    e.selection.setCursorLocation(t.dom(), "img" === Qo(n = t) ? 1 : Rc(n).fold(function() {
                        return Fr(n).length
                    }, function(t) {
                        return t.length
                    }))
                }), t
            })
        },
        Hg = function(t) {
            return mu(t, "[data-mce-autocompleter]")
        },
        Pg = /[\u00a0 \t\r\n]/,
        zg = function(t, n) {
            return t.toString().substring(n.length).replace(/\u00A0/g, " ").replace(/\uFEFF/g, "")
        },
        Lg = function(t, u, a, c) {
            if (void 0 === c && (c = 0), !(n = u).collapsed || 3 !== n.startContainer.nodeType) return et.none();
            var n;
            return Vg(t, u.startContainer, u.startOffset, function(e, o, r, t) {
                var i = t.getOr(r.length);
                return function(t, n, e, o) {
                    var r;
                    for (r = n - 1; 0 <= r; r--) {
                        var i = t.charAt(r);
                        if (Pg.test(i)) return et.none();
                        if (i === e) break
                    }
                    return -1 === r || n - r < o ? et.none() : et.some(t.substring(r + 1, n))
                }(r, i, a, 1).fold(function() {
                    return r.match(Pg) ? e.abort() : e.kontinue()
                }, function(t) {
                    var n = u.cloneRange();
                    return n.setStart(o, i - t.length - 1), n.setEnd(u.endContainer, u.endOffset), r.length < c ? e.abort() : e.finish({
                        text: zg(n, a),
                        range: n,
                        triggerChar: a
                    })
                })
            }).fold(et.none, et.none, et.some)
        },
        jg = function(e, t, o, n) {
            return void 0 === n && (n = 0), Hg(fe.fromDom(t.startContainer)).fold(function() {
                return Lg(e, t, o, n)
            }, function(t) {
                var n = e.createRng();
                return n.selectNode(t.dom()), et.some({
                    range: n,
                    text: zg(n, o),
                    triggerChar: o
                })
            })
        },
        Ug = function(e, t) {
            t.on("keypress compositionend", e.onKeypress.throttle), t.on("remove", e.onKeypress.cancel);
            var o = function(t, n) {
                Lo(t, co(), {
                    raw: n
                })
            };
            t.on("keydown", function(n) {
                var t = function() {
                    return e.getView().bind(kl.getHighlighted)
                };
                8 === n.which && e.onKeypress.throttle(n), e.isActive() && (27 === n.which && e.cancelIfNecessary(), e.isMenuOpen() ? 13 === n.which ? (t().each(jo), n.preventDefault()) : 40 === n.which ? (t().fold(function() {
                    e.getView().each(kl.highlightFirst)
                }, function(t) {
                    o(t, n)
                }), n.preventDefault(), n.stopImmediatePropagation()) : 37 !== n.which && 38 !== n.which && 39 !== n.which || t().each(function(t) {
                    o(t, n), n.preventDefault(), n.stopImmediatePropagation()
                }) : 13 !== n.which && 38 !== n.which && 40 !== n.which || e.cancelIfNecessary())
            }), t.on("NodeChange", function(t) {
                e.isActive() && Hg(fe.fromDom(t.element)).isNone() && e.cancelIfNecessary()
            })
        },
        Wg = tinymce.util.Tools.resolve("tinymce.util.Promise"),
        Gg = function(t, n) {
            return {
                element: t,
                offset: n
            }
        },
        Xg = function(t) {
            if (t.nodeType === H.Node.TEXT_NODE) return Gg(t, t.data.length);
            var n = t.childNodes;
            return 0 < n.length ? Xg(n[n.length - 1]) : Gg(t, n.length)
        },
        Yg = function(t, n) {
            var e = t.childNodes;
            return 0 < e.length && n < e.length ? Yg(e[n], 0) : 0 < e.length && t.nodeType === H.Node.ELEMENT_NODE && e.length === n ? Xg(e[e.length - 1]) : Gg(t, n)
        },
        qg = function(n, e) {
            var o, r, t, i = e(),
                u = n.selection.getRng();
            return (o = n.dom, r = u, t = i, bu(t.triggerChars, function(t) {
                return jg(o, r, t)
            })).bind(function(t) {
                return Kg(n, e, t)
            })
        },
        Kg = function(n, t, e) {
            var o = t(),
                r = n.selection.getRng().startContainer.nodeValue,
                i = I(o.lookupByChar(e.triggerChar), function(t) {
                    return e.text.length >= t.minChars && t.matches.getOrThunk(function() {
                        return e = n.dom, o = function(t, n, e, o) {
                                var r = o.getOr(e.length);
                                return 0 === r ? t.kontinue() : t.finish(/\s/.test(e.charAt(r - 1)))
                            },
                            function(t) {
                                var n = Yg(t.startContainer, t.startOffset);
                                return Vg(e, n.element, n.offset, o).fold(nt(!0), nt(!0), d)
                            };
                        var e, o
                    })(e.range, r, e.text)
                });
            if (0 === i.length) return et.none();
            var u = Wg.all(F(i, function(n) {
                return n.fetch(e.text, n.maxResults).then(function(t) {
                    return {
                        matchText: e.text,
                        items: t,
                        columns: n.columns,
                        onAction: n.onAction
                    }
                })
            }));
            return et.some({
                lookupData: u,
                context: e
            })
        },
        $g = pn([ae("type", function() {
            return "autocompleteitem"
        }), ae("active", function() {
            return !1
        }), ae("disabled", function() {
            return !1
        }), Zn("meta", {}), Ln("value"), $n("text"), $n("icon")]),
        Jg = pn([Ln("type"), Ln("ch"), ne("minChars", 1), Zn("columns", 1), ne("maxResults", 10), Jn("matches"), Un("fetch"), Un("onAction")]),
        Qg = function(t) {
            var n, e, o = t.ui.registry.getAll().popups,
                r = st(o, function(t) {
                    return (n = t, Tn("Autocompleter", Jg, n)).fold(function(t) {
                        throw new Error(Dn(t))
                    }, function(t) {
                        return t
                    });
                    var n
                }),
                i = (n = lt(r, function(t) {
                    return t.ch
                }), e = {}, W(n, function(t) {
                    e[t] = {}
                }), ut(e)),
                u = dt(r);
            return {
                dataset: r,
                triggerChars: i,
                lookupByChar: function(n) {
                    return I(u, function(t) {
                        return t.ch === n
                    })
                }
            }
        },
        Zg = [re("disabled", !1), $n("text"), $n("shortcut"), wn("value", "value", Ot(function() {
            return oi("menuitem-value")
        }), Mn()), Zn("meta", {})],
        tp = pn([Ln("type"), ie("onSetup", function() {
            return tt
        }), ie("onAction", tt), $n("icon")].concat(Zg)),
        np = pn([Ln("type"), Un("getSubmenuItems"), ie("onSetup", function() {
            return tt
        }), $n("icon")].concat(Zg)),
        ep = pn([Ln("type"), re("active", !1), ie("onSetup", function() {
            return tt
        }), Un("onAction")].concat(Zg)),
        op = pn([Ln("type"), re("active", !1), $n("icon")].concat(Zg)),
        rp = pn([Ln("type"), $n("text")]),
        ip = pn([Ln("type"), jn("fancytype", ["inserttable", "colorswatch"]), ie("onAction", tt)]),
        up = function(t, o, n) {
            var r = $c(t.element(), "." + n);
            if (0 < r.length) {
                var e = G(r, function(t) {
                    var n = t.dom().getBoundingClientRect().top,
                        e = r[0].dom().getBoundingClientRect().top;
                    return Math.abs(n - e) > o
                }).getOr(r.length);
                return et.some({
                    numColumns: e,
                    numRows: Math.ceil(r.length / e)
                })
            }
            return et.none()
        },
        ap = function(t, n) {
            return Wu([rg(t, n)])
        },
        cp = function(t) {
            return ap(oi("unnamed-events"), t)
        },
        sp = [Pn("lazySink"), Pn("tooltipDom"), Zn("exclusive", !0), Zn("tooltipComponents", []), Zn("delay", 300), oe("mode", "normal", ["normal", "follow-highlight"]), Zn("anchor", function(t) {
            return {
                anchor: "hotspot",
                hotspot: t,
                layouts: {
                    onLtr: nt([sc, cc, rc, uc, ic, ac]),
                    onRtl: nt([sc, cc, rc, uc, ic, ac])
                }
            }
        }), Mu("onHide"), Mu("onShow")],
        fp = /* */ Object.freeze({
            init: function() {
                var e = ce(et.none()),
                    n = ce(et.none()),
                    o = function() {
                        e.get().each(function(t) {
                            H.clearTimeout(t)
                        })
                    },
                    t = nt("not-implemented");
                return xi({
                    getTooltip: function() {
                        return n.get()
                    },
                    isShowing: function() {
                        return n.get().isSome()
                    },
                    setTooltip: function(t) {
                        n.set(et.some(t))
                    },
                    clearTooltip: function() {
                        n.set(et.none())
                    },
                    clearTimer: o,
                    resetTimer: function(t, n) {
                        o(), e.set(et.some(H.setTimeout(function() {
                            t()
                        }, n)))
                    },
                    readState: t
                })
            }
        }),
        lp = oi("tooltip.exclusive"),
        dp = oi("tooltip.show"),
        mp = oi("tooltip.hide"),
        gp = function(t, n, e) {
            t.getSystem().broadcastOn([lp], {})
        },
        pp = /* */ Object.freeze({
            hideAllExclusive: gp,
            setComponents: function(t, n, e, o) {
                e.getTooltip().each(function(t) {
                    t.getSystem().isConnected() && wm.set(t, o)
                })
            }
        }),
        hp = Xu({
            fields: sp,
            name: "tooltipping",
            active: /* */ Object.freeze({
                events: function(o, r) {
                    var e = function(n) {
                        r.getTooltip().each(function(t) {
                            Vs(t), o.onHide(n, t), r.clearTooltip()
                        }), r.clearTimer()
                    };
                    return fr(q([
                        [mr(dp, function(t) {
                            r.resetTimer(function() {
                                ! function(n) {
                                    if (!r.isShowing()) {
                                        gp(n);
                                        var t = o.lazySink(n).getOrDie(),
                                            e = n.getSystem().build({
                                                dom: o.tooltipDom,
                                                components: o.tooltipComponents,
                                                events: fr("normal" === o.mode ? [mr(io(), function(t) {
                                                    zo(n, dp)
                                                }), mr(oo(), function(t) {
                                                    zo(n, mp)
                                                })] : []),
                                                behaviours: Wu([wm.config({})])
                                            });
                                        r.setTooltip(e), Fs(t, e), o.onShow(n, e), Ds.position(t, o.anchor(n), e)
                                    }
                                }(t)
                            }, o.delay)
                        }), mr(mp, function(t) {
                            r.resetTimer(function() {
                                e(t)
                            }, o.delay)
                        }), mr(xo(), function(t, n) {
                            D(n.channels(), lp) && e(t)
                        }), Sr(function(t) {
                            e(t)
                        })], "normal" === o.mode ? [mr(uo(), function(t) {
                            zo(t, dp)
                        }), mr(bo(), function(t) {
                            zo(t, mp)
                        }), mr(io(), function(t) {
                            zo(t, dp)
                        }), mr(oo(), function(t) {
                            zo(t, mp)
                        })] : [mr(Ho(), function(t, n) {
                            zo(t, dp)
                        }), mr(Po(), function(t) {
                            zo(t, mp)
                        })]
                    ]))
                }
            }),
            state: fp,
            apis: pp
        }),
        vp = function(t) {
            var n, e, o, r = fe.fromHtml(t),
                i = Fr(r),
                u = (e = (n = r).dom().attributes !== undefined ? n.dom().attributes : [], V(e, function(t, n) {
                    var e;
                    return "class" === n.name ? t : P({}, t, ((e = {})[n.name] = n.value, e))
                }, {})),
                a = (o = r, Array.prototype.slice.call(o.dom().classList, 0)),
                c = 0 === i.length ? {} : {
                    innerHtml: Ur(r)
                };
            return P({
                tag: Qo(r),
                classes: a,
                attributes: u
            }, c)
        },
        bp = tinymce.util.Tools.resolve("tinymce.util.I18n"),
        yp = "tox-menu-nav__js",
        xp = "tox-collection__item",
        wp = "tox-swatch",
        Sp = {
            normal: yp,
            color: wp
        },
        Cp = "tox-collection__item--enabled",
        kp = "tox-collection__item-icon",
        Op = "tox-collection__item-label",
        Ep = "tox-collection__item--active",
        Tp = function(t) {
            return Ft(Sp, t).getOr(yp)
        },
        Bp = tinymce.util.Tools.resolve("tinymce.Env"),
        Ap = function(t) {
            var e = Bp.mac ? {
                    alt: "&#x2325;",
                    ctrl: "&#x2303;",
                    shift: "&#x21E7;",
                    meta: "&#x2318;",
                    access: "&#x2303;&#x2325;"
                } : {
                    meta: "Ctrl",
                    access: "Shift+Alt"
                },
                n = t.split("+"),
                o = F(n, function(t) {
                    var n = t.toLowerCase().trim();
                    return gt(e, n) ? e[n] : t
                });
            return Bp.mac ? o.join("") : o.join("+")
        },
        Dp = function(t) {
            return {
                dom: {
                    tag: "div",
                    classes: [kp],
                    innerHtml: t
                }
            }
        },
        _p = function(t) {
            return {
                dom: {
                    tag: "div",
                    classes: [Op]
                },
                components: [uu(bp.translate(t))]
            }
        },
        Mp = function(t, n) {
            return {
                dom: {
                    tag: "div",
                    classes: [Op]
                },
                components: [{
                    dom: {
                        tag: t.tag,
                        attributes: {
                            style: t.styleAttr
                        }
                    },
                    components: [uu(bp.translate(n))]
                }]
            }
        },
        Fp = function(t) {
            return {
                dom: {
                    tag: "div",
                    classes: ["tox-collection__item-accessory"],
                    innerHtml: Ap(t)
                }
            }
        },
        Ip = function(t) {
            return {
                dom: {
                    tag: "div",
                    classes: [kp, "tox-collection__item-checkmark"],
                    innerHtml: kg("checkmark", t)
                }
            }
        },
        Rp = function(t, n, e, o, r) {
            var i = e ? t.checkMark.orThunk(function() {
                    return n.or(et.some("")).map(Dp)
                }) : et.none(),
                u = t.ariaLabel.map(function(t) {
                    return {
                        attributes: {
                            title: bp.translate(t)
                        }
                    }
                }).getOr({});
            return {
                dom: yt({
                    tag: "div",
                    classes: [yp, xp].concat(r ? ["tox-collection__item-icon-rtl"] : [])
                }, u),
                optComponents: [i, t.htmlContent.fold(function() {
                    return t.textContent.map(o)
                }, function(t) {
                    return et.some({
                        dom: {
                            tag: "div",
                            classes: [Op],
                            innerHtml: t
                        }
                    })
                }), t.shortcutContent.map(Fp), t.caret]
            }
        },
        Vp = ["list-num-default", "list-num-lower-alpha", "list-num-lower-greek", "list-num-lower-roman", "list-num-upper-alpha", "list-num-upper-roman"],
        Np = ["list-bull-circle", "list-bull-default", "list-bull-square"],
        Hp = function(t, r, n, i) {
            void 0 === i && (i = et.none());
            var e, o, u, a, c, s, f, l = bp.isRtl() && t.iconContent.exists(function(t) {
                    return D(Np, t)
                }),
                d = (e = t.iconContent, e.map(function(t) {
                    return bp.isRtl() && D(Vp, t) ? t + "-rtl" : t
                })).map(function(t) {
                    return n = t, e = r.icons, o = i, et.from(e()[n]).or(o).getOrThunk(function() {
                        return Cg(e)
                    });
                    var n, e, o
                }),
                m = et.from(t.meta).fold(function() {
                    return _p
                }, function(t) {
                    return gt(t, "style") ? g(Mp, t.style) : _p
                });
            return "color" === t.presets ? (o = t.ariaLabel, u = t.value, a = r, {
                dom: (c = wp, s = d.getOr(""), f = o.map(function(t) {
                    return ' title="' + a.translate(t) + '"'
                }).getOr(""), vp("custom" === u ? '<button class="' + c + ' tox-swatches__picker-btn"' + f + ">" + s + "</button>" : "remove" === u ? '<div class="' + c + ' tox-swatch--remove"' + f + ">" + s + "</div>" : '<div class="' + c + '" style="background-color: ' + u + '" data-mce-color="' + u + '"' + f + "></div>")),
                optComponents: []
            }) : Rp(t, d, n, m, l)
        },
        Pp = ["input", "button", "textarea"],
        zp = function(t, n, e) {
            n.disabled && Xp(t, n)
        },
        Lp = function(t) {
            return D(Pp, Qo(t.element()))
        },
        jp = function(t) {
            Xr(t.element(), "disabled", "disabled")
        },
        Up = function(t) {
            $r(t.element(), "disabled")
        },
        Wp = function(t) {
            Xr(t.element(), "aria-disabled", "true")
        },
        Gp = function(t) {
            Xr(t.element(), "aria-disabled", "false")
        },
        Xp = function(n, t, e) {
            t.disableClass.each(function(t) {
                Ri(n.element(), t)
            }), (Lp(n) ? jp : Wp)(n)
        },
        Yp = function(n, t, e) {
            t.disableClass.each(function(t) {
                Ni(n.element(), t)
            }), (Lp(n) ? Up : Gp)(n)
        },
        qp = function(t) {
            return Lp(t) ? Kr(t.element(), "disabled") : "true" === qr(t.element(), "aria-disabled")
        },
        Kp = /* */ Object.freeze({
            enable: Yp,
            disable: Xp,
            isDisabled: qp,
            onLoad: zp,
            set: function(t, n, e, o) {
                (o ? Xp : Yp)(t, n, e)
            }
        }),
        $p = /* */ Object.freeze({
            exhibit: function(t, n, e) {
                return Si({
                    classes: n.disabled ? n.disableClass.map(Z).getOr([]) : []
                })
            },
            events: function(t, n) {
                return fr([lr(wo(), function(t, n) {
                    return qp(t)
                }), Pu(t, n, zp)])
            }
        }),
        Jp = [Zn("disabled", !1), Yn("disableClass")],
        Qp = Xu({
            fields: Jp,
            name: "disabling",
            active: $p,
            apis: Kp
        }),
        Zp = function(t) {
            return Qp.config({
                disabled: t,
                disableClass: "tox-collection__item--state-disabled"
            })
        },
        th = function(t) {
            return Qp.config({
                disabled: t
            })
        },
        nh = function(t) {
            return Qp.config({
                disabled: t,
                disableClass: "tox-tbtn--disabled"
            })
        },
        eh = function(t, n) {
            var e = t.getApi(n);
            return function(t) {
                t(e)
            }
        },
        oh = function(e, o) {
            return wr(function(t) {
                eh(e, t)(function(t) {
                    var n = e.onSetup(t);
                    null !== n && n !== undefined && o.set(n)
                })
            })
        },
        rh = function(n, e) {
            return Sr(function(t) {
                return eh(n, t)(e.get())
            })
        };
    (Dg = Ag || (Ag = {}))[Dg.CLOSE_ON_EXECUTE = 0] = "CLOSE_ON_EXECUTE", Dg[Dg.BUBBLE_TO_SANDBOX = 1] = "BUBBLE_TO_SANDBOX";
    var ih = Ag,
        uh = {
            "alloy.execute": ["disabling", "alloy.base.behaviour", "toggling", "item-events"]
        },
        ah = function(t) {
            return K(t, function(t) {
                return t.toArray()
            })
        },
        ch = function(t, n, e) {
            var o, r, i = ce(tt);
            return {
                type: "item",
                dom: n.dom,
                components: ah(n.optComponents),
                data: t.data,
                eventOrder: uh,
                hasSubmenu: t.triggersSubmenu,
                itemBehaviours: Wu([rg("item-events", [(o = t, r = e, kr(function(t, n) {
                    eh(o, t)(o.onAction), o.triggersSubmenu || r !== ih.CLOSE_ON_EXECUTE || (zo(t, Eo()), n.stop())
                })), oh(t, i), rh(t, i)]), Zp(t.disabled), wm.config({})].concat(t.itemBehaviours))
            }
        },
        sh = function(t) {
            return {
                value: t.value,
                meta: yt({
                    text: t.text.getOr("")
                }, t.meta)
            }
        },
        fh = tinymce.util.Tools.resolve("tinymce.dom.DOMUtils"),
        lh = function(t, n) {
            var e, o = bp.translate(t),
                r = (e = o, fh.DOM.encode(e));
            if (0 < n.length) {
                var i = new RegExp(n.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "gi");
                return r.replace(i, function(t) {
                    return '<span class="tox-autocompleter-highlight">' + t + "</span>"
                })
            }
            return r
        },
        dh = nt(Nf("item-widget", ag())),
        mh = oi("cell-over"),
        gh = oi("cell-execute"),
        ph = function(n, e, t) {
            var o, r = function(t) {
                return Lo(t, gh, {
                    row: n,
                    col: e
                })
            };
            return su({
                dom: {
                    tag: "div",
                    attributes: (o = {
                        role: "button"
                    }, o["aria-labelledby"] = t, o)
                },
                behaviours: Wu([rg("insert-table-picker-cell", [mr(io(), Pm.focus), mr(wo(), r), mr(ko(), r)]), Jm.config({
                    toggleClass: "tox-insert-table-picker__selected",
                    toggleOnExecute: !1
                }), Pm.config({
                    onFocus: function(t) {
                        return Lo(t, mh, {
                            row: n,
                            col: e
                        })
                    }
                })])
            })
        };
    var hh = function(t) {
            return {
                value: nt(t)
            }
        },
        vh = /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
        bh = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i,
        yh = function(t) {
            return vh.test(t) || bh.test(t)
        },
        xh = function(t) {
            var n, e = (n = t.value().replace(vh, function(t, n, e, o) {
                    return n + n + e + e + o + o
                }), {
                    value: nt(n)
                }),
                o = bh.exec(e.value());
            return null === o ? ["FFFFFF", "FF", "FF", "FF"] : o
        },
        wh = function(t) {
            var n = t.toString(16);
            return 1 === n.length ? "0" + n : n
        },
        Sh = function(t) {
            var n = wh(t.red()) + wh(t.green()) + wh(t.blue());
            return hh(n)
        },
        Ch = Math.min,
        kh = Math.max,
        Oh = Math.round,
        Eh = /^rgb\((\d+),\s*(\d+),\s*(\d+)\)/,
        Th = /^rgba\((\d+),\s*(\d+),\s*(\d+),\s*(\d?(?:\.\d+)?)\)/,
        Bh = function(t, n, e, o) {
            return {
                red: nt(t),
                green: nt(n),
                blue: nt(e),
                alpha: nt(o)
            }
        },
        Ah = function(t) {
            var n = parseInt(t, 10);
            return n.toString() === t && 0 <= n && n <= 255
        },
        Dh = function(t) {
            var n, e, o, r = (t.hue() || 0) % 360,
                i = t.saturation() / 100,
                u = t.value() / 100;
            if (i = kh(0, Ch(i, 1)), u = kh(0, Ch(u, 1)), 0 === i) return n = e = o = Oh(255 * u), Bh(n, e, o, 1);
            var a = r / 60,
                c = u * i,
                s = c * (1 - Math.abs(a % 2 - 1)),
                f = u - c;
            switch (Math.floor(a)) {
                case 0:
                    n = c, e = s, o = 0;
                    break;
                case 1:
                    n = s, e = c, o = 0;
                    break;
                case 2:
                    n = 0, e = c, o = s;
                    break;
                case 3:
                    n = 0, e = s, o = c;
                    break;
                case 4:
                    n = s, e = 0, o = c;
                    break;
                case 5:
                    n = c, e = 0, o = s;
                    break;
                default:
                    n = e = o = 0
            }
            return n = Oh(255 * (n + f)), e = Oh(255 * (e + f)), o = Oh(255 * (o + f)), Bh(n, e, o, 1)
        },
        _h = function(t) {
            var n = xh(t),
                e = parseInt(n[1], 16),
                o = parseInt(n[2], 16),
                r = parseInt(n[3], 16);
            return Bh(e, o, r, 1)
        },
        Mh = function(t, n, e, o) {
            var r = parseInt(t, 10),
                i = parseInt(n, 10),
                u = parseInt(e, 10),
                a = parseFloat(o);
            return Bh(r, i, u, a)
        },
        Fh = function(t) {
            return "rgba(" + t.red() + "," + t.green() + "," + t.blue() + "," + t.alpha() + ")"
        },
        Ih = nt(Bh(255, 0, 0, 1)),
        Rh = tinymce.util.Tools.resolve("tinymce.util.LocalStorage"),
        Vh = "tinymce-custom-colors";
    var Nh = "choiceitem",
        Hh = [{
            type: Nh,
            text: "Light Green",
            value: "#BFEDD2"
        }, {
            type: Nh,
            text: "Light Yellow",
            value: "#FBEEB8"
        }, {
            type: Nh,
            text: "Light Red",
            value: "#F8CAC6"
        }, {
            type: Nh,
            text: "Light Purple",
            value: "#ECCAFA"
        }, {
            type: Nh,
            text: "Light Blue",
            value: "#C2E0F4"
        }, {
            type: Nh,
            text: "Green",
            value: "#2DC26B"
        }, {
            type: Nh,
            text: "Yellow",
            value: "#F1C40F"
        }, {
            type: Nh,
            text: "Red",
            value: "#E03E2D"
        }, {
            type: Nh,
            text: "Purple",
            value: "#B96AD9"
        }, {
            type: Nh,
            text: "Blue",
            value: "#3598DB"
        }, {
            type: Nh,
            text: "Dark Turquoise",
            value: "#169179"
        }, {
            type: Nh,
            text: "Orange",
            value: "#E67E23"
        }, {
            type: Nh,
            text: "Dark Red",
            value: "#BA372A"
        }, {
            type: Nh,
            text: "Dark Purple",
            value: "#843FA1"
        }, {
            type: Nh,
            text: "Dark Blue",
            value: "#236FA1"
        }, {
            type: Nh,
            text: "Light Gray",
            value: "#ECF0F1"
        }, {
            type: Nh,
            text: "Medium Gray",
            value: "#CED4D9"
        }, {
            type: Nh,
            text: "Gray",
            value: "#95A5A6"
        }, {
            type: Nh,
            text: "Dark Gray",
            value: "#7E8C8D"
        }, {
            type: Nh,
            text: "Navy Blue",
            value: "#34495E"
        }, {
            type: Nh,
            text: "Black",
            value: "#000000"
        }, {
            type: Nh,
            text: "White",
            value: "#ffffff"
        }],
        Ph = function B_(r) {
            void 0 === r && (r = 10);
            var t, n = Rh.getItem(Vh),
                e = L(n) ? JSON.parse(n) : [],
                i = r - (t = e).length < 0 ? t.slice(0, r) : t,
                u = function(t) {
                    i.splice(t, 1)
                };
            return {
                add: function(t) {
                    var n, e, o;
                    (n = i, e = t, o = A(n, e), -1 === o ? et.none() : et.some(o)).each(u), i.unshift(t), i.length > r && i.pop(), Rh.setItem(Vh, JSON.stringify(i))
                },
                state: function() {
                    return i.slice(0)
                }
            }
        }(10),
        zh = function(t) {
            var n = [],
                u = H.document.createElement("canvas");
            u.height = 1, u.width = 1;
            for (var a = u.getContext("2d"), c = function(t, n) {
                    var e = n / 255;
                    return ("0" + Math.round(t * e + 255 * (1 - e)).toString(16)).slice(-2).toUpperCase()
                }, e = function(t) {
                    if (/^[0-9A-Fa-f]{6}$/.test(t)) return "#" + t.toUpperCase();
                    a.clearRect(0, 0, u.width, u.height), a.fillStyle = "#FFFFFF", a.fillStyle = t, a.fillRect(0, 0, 1, 1);
                    var n = a.getImageData(0, 0, 1, 1).data,
                        e = n[0],
                        o = n[1],
                        r = n[2],
                        i = n[3];
                    return "#" + c(e, i) + c(o, i) + c(r, i)
                }, o = 0; o < t.length; o += 2) n.push({
                text: t[o + 1],
                value: e(t[o]),
                type: "choiceitem"
            });
            return n
        },
        Lh = function(t) {
            return t.getParam("color_map")
        },
        jh = function(t, n) {
            return t.getParam("color_cols", n, "number")
        },
        Uh = function(t) {
            return !1 !== t.getParam("custom_colors")
        },
        Wh = function(t) {
            var n = Lh(t);
            return n !== undefined ? zh(n) : Hh
        },
        Gh = function() {
            return F(Ph.state(), function(t) {
                return {
                    type: Nh,
                    text: t,
                    value: t
                }
            })
        },
        Xh = function(t) {
            Ph.add(t)
        },
        Yh = function(t) {
            return t.fire("SkinLoaded")
        },
        qh = function(t) {
            return t.fire("ResizeEditor")
        },
        Kh = function(t) {
            return t.fire("ResizeContent")
        },
        $h = function(t, n) {
            t.fire("TextColorChange", n)
        },
        Jh = function(t, e) {
            var o;
            return t.dom.getParents(t.selection.getStart(), function(t) {
                var n;
                (n = t.style["forecolor" === e ? "color" : "background-color"]) && (o = o || n)
            }), o
        },
        Qh = function(t) {
            return Math.max(5, Math.ceil(Math.sqrt(t)))
        },
        Zh = function(t) {
            var n = Wh(t),
                e = Qh(n.length);
            return jh(t, e)
        },
        tv = function(n, e, t, o) {
            "custom" === t ? uv(n)(function(t) {
                t.each(function(t) {
                    Xh(t), n.execCommand("mceApplyTextcolor", e, t), o(t)
                })
            }, "#000000") : "remove" === t ? (o(""), n.execCommand("mceRemoveTextcolor", e)) : (o(t), n.execCommand("mceApplyTextcolor", e, t))
        },
        nv = function(t, n) {
            return t.concat(Gh().concat((o = {
                type: e = "choiceitem",
                text: "Remove color",
                icon: "color-swatch-remove-color",
                value: "remove"
            }, n ? [o, {
                type: e,
                text: "Custom color",
                icon: "color-picker",
                value: "custom"
            }] : [o])));
            var e, o
        },
        ev = function(n, e) {
            return function(t) {
                t(nv(n, e))
            }
        },
        ov = function(t, n, e) {
            var o, r;
            o = "forecolor" === n ? "tox-icon-text-color__color" : "tox-icon-highlight-bg-color__color", r = e, t.setIconFill(o, r), t.setIconStroke(o, r)
        },
        rv = function(o, e, r, t, i) {
            o.ui.registry.addSplitButton(e, {
                tooltip: t,
                presets: "color",
                icon: "forecolor" === e ? "text-color" : "highlight-bg-color",
                select: function(e) {
                    return et.from(Jh(o, r)).bind(function(t) {
                        return function(t) {
                            if ("transparent" === t) return et.some(Bh(0, 0, 0, 0));
                            var n = Eh.exec(t);
                            if (null !== n) return et.some(Mh(n[1], n[2], n[3], "1"));
                            var e = Th.exec(t);
                            return null !== e ? et.some(Mh(e[1], e[2], e[3], e[4])) : et.none()
                        }(t).map(function(t) {
                            var n = Sh(t).value();
                            return Me(e.toLowerCase(), n)
                        })
                    }).getOr(!1)
                },
                columns: Zh(o),
                fetch: ev(Wh(o), Uh(o)),
                onAction: function(t) {
                    null !== i.get() && tv(o, r, i.get(), function() {})
                },
                onItemAction: function(t, n) {
                    tv(o, r, n, function(t) {
                        i.set(t), $h(o, {
                            name: e,
                            color: t
                        })
                    })
                },
                onSetup: function(n) {
                    null !== i.get() && ov(n, e, i.get());
                    var t = function(t) {
                        t.name === e && ov(n, t.name, t.color)
                    };
                    return o.on("TextColorChange", t),
                        function() {
                            o.off("TextColorChange", t)
                        }
                }
            })
        },
        iv = function(n, t, e, o) {
            n.ui.registry.addNestedMenuItem(t, {
                text: o,
                icon: "forecolor" === t ? "text-color" : "highlight-bg-color",
                getSubmenuItems: function() {
                    return [{
                        type: "fancymenuitem",
                        fancytype: "colorswatch",
                        onAction: function(t) {
                            tv(n, e, t.value, tt)
                        }
                    }]
                }
            })
        },
        uv = function(i) {
            return function(t, n) {
                var e, o = {
                        colorpicker: n
                    },
                    r = (e = t, function(t) {
                        var n = t.getData();
                        e(et.from(n.colorpicker)), t.close()
                    });
                i.windowManager.open({
                    title: "Color Picker",
                    size: "normal",
                    body: {
                        type: "panel",
                        items: [{
                            type: "colorpicker",
                            name: "colorpicker",
                            label: "Color"
                        }]
                    },
                    buttons: [{
                        type: "cancel",
                        name: "cancel",
                        text: "Cancel"
                    }, {
                        type: "submit",
                        name: "save",
                        text: "Save",
                        primary: !0
                    }],
                    initialData: o,
                    onAction: function(t, n) {
                        "hex-valid" === n.name && (n.value ? t.enable("ok") : t.disable("ok"))
                    },
                    onSubmit: r,
                    onClose: function() {},
                    onCancel: function() {
                        t(et.none())
                    }
                })
            }
        },
        av = {
            register: function(t) {
                var i;
                (i = t).addCommand("mceApplyTextcolor", function(t, n) {
                    var e, o, r;
                    o = t, r = n, (e = i).undoManager.transact(function() {
                        e.focus(), e.formatter.apply(o, {
                            value: r
                        }), e.nodeChanged()
                    })
                }), i.addCommand("mceRemoveTextcolor", function(t) {
                    var n, e;
                    e = t, (n = i).undoManager.transact(function() {
                        n.focus(), n.formatter.remove(e, {
                            value: null
                        }, null, !0), n.nodeChanged()
                    })
                });
                var n = ce(null),
                    e = ce(null);
                rv(t, "forecolor", "forecolor", "Text color", n), rv(t, "backcolor", "hilitecolor", "Background color", e), iv(t, "forecolor", "forecolor", "Text color"), iv(t, "backcolor", "hilitecolor", "Background color")
            },
            getColors: nv,
            getFetch: ev,
            colorPickerDialog: uv,
            getCurrentColor: Jh,
            getColorCols: Zh,
            calcCols: Qh
        },
        cv = function(e, o) {
            return function(t) {
                var n = M(t, o);
                return F(n, function(t) {
                    return {
                        dom: e,
                        components: t
                    }
                })
            }
        },
        sv = function(n, i, t) {
            return {
                dom: {
                    tag: "div",
                    classes: ["tox-menu", "tox-collection"].concat(1 === n ? ["tox-collection--list"] : ["tox-collection--grid"])
                },
                components: [mg.parts().items({
                    preprocess: function(t) {
                        return "auto" !== n && 1 < n ? cv({
                            tag: "div",
                            classes: ["tox-collection__group"]
                        }, n)(t) : (e = function(t, n) {
                            return "separator" === i[n].type
                        }, o = [], r = [], W(t, function(t, n) {
                            e(t, n) ? (0 < r.length && o.push(r), r = [], gt(t.dom, "innerHtml") && r.push(t)) : r.push(t)
                        }), 0 < r.length && o.push(r), F(o, function(t) {
                            return {
                                dom: {
                                    tag: "div",
                                    classes: ["tox-collection__group"]
                                },
                                components: t
                            }
                        }));
                        var e, o, r
                    }
                })]
            }
        },
        fv = function(t) {
            return {
                backgroundMenu: "tox-background-menu",
                selectedMenu: "tox-selected-menu",
                selectedItem: "tox-collection__item--active",
                hasIcons: "tox-menu--has-icons",
                menu: (n = t, "color" === n ? "tox-swatches" : "tox-menu"),
                tieredMenu: "tox-tiered-menu"
            };
            var n
        },
        lv = function(t) {
            var n = fv(t);
            return {
                backgroundMenu: n.backgroundMenu,
                selectedMenu: n.selectedMenu,
                menu: n.menu,
                selectedItem: n.selectedItem,
                item: Tp(t)
            }
        },
        dv = [mg.parts().items({})],
        mv = function(t, n, e) {
            var o = fv(e);
            return {
                dom: {
                    tag: "div",
                    classes: q([
                        [o.tieredMenu]
                    ])
                },
                markers: lv(e)
            }
        },
        gv = function(t) {
            return t.icon !== undefined || "togglemenuitem" === t.type || "choicemenuitem" === t.type
        },
        pv = function(t) {
            return H.console.error(Dn(t)), H.console.log(t), et.none()
        },
        hv = function(t, n, e, o, r) {
            var i, u, a, c, s, f, l;
            return "color" === r ? {
                value: t,
                dom: (l = (i = o, {
                    dom: {
                        tag: "div",
                        classes: ["tox-menu", "tox-swatches-menu"]
                    },
                    components: [{
                        dom: {
                            tag: "div",
                            classes: ["tox-swatches"]
                        },
                        components: [mg.parts().items({
                            preprocess: "auto" !== i ? cv({
                                tag: "div",
                                classes: ["tox-swatches__row"]
                            }, i) : d
                        })]
                    }]
                })).dom,
                components: l.components,
                items: e
            } : "normal" === r && "auto" === o ? {
                value: t,
                dom: (l = sv(o, e)).dom,
                components: l.components,
                items: e
            } : "normal" === r && 1 === o ? {
                value: t,
                dom: (l = sv(1, e)).dom,
                components: l.components,
                items: e
            } : "normal" === r ? {
                value: t,
                dom: (l = sv(o, e)).dom,
                components: l.components,
                items: e
            } : "listpreview" !== r || "auto" === o ? {
                value: t,
                dom: (a = n, c = o, s = r, f = fv(s), {
                    tag: "div",
                    classes: q([
                        [f.menu, "tox-menu-" + c + "-column"], a ? [f.hasIcons] : []
                    ])
                }),
                components: dv,
                items: e
            } : {
                value: t,
                dom: (l = (u = o, {
                    dom: {
                        tag: "div",
                        classes: ["tox-menu", "tox-collection", "tox-collection--toolbar", "tox-collection--toolbar-lg"]
                    },
                    components: [mg.parts().items({
                        preprocess: cv({
                            tag: "div",
                            classes: ["tox-collection__group"]
                        }, u)
                    })]
                })).dom,
                components: l.components,
                items: e
            }
        },
        vv = function(t, n, e, o, r, i, u, a) {
            var c = _(n, gv),
                s = bv(n, e, o, "color" !== r ? "normal" : "color", i, u, a);
            return hv(t, c, s, o, r)
        },
        bv = function(t, f, l, d, m, g, p) {
            return vu(F(t, function(s) {
                return "choiceitem" === s.type ? (t = s, Tn("choicemenuitem", op, t)).fold(pv, function(t) {
                    return et.some((n = t, e = 1 === l, o = d, r = f, i = g(s.value), u = m, a = p, c = Hp({
                        presets: o,
                        textContent: e ? n.text : et.none(),
                        htmlContent: et.none(),
                        ariaLabel: n.text,
                        iconContent: n.icon,
                        shortcutContent: e ? n.shortcut : et.none(),
                        checkMark: e ? et.some(Ip(a.icons)) : et.none(),
                        caret: et.none(),
                        value: n.value
                    }, a, !0), bt(ch({
                        data: sh(n),
                        disabled: n.disabled,
                        getApi: function(n) {
                            return {
                                setActive: function(t) {
                                    Jm.set(n, t)
                                },
                                isActive: function() {
                                    return Jm.isOn(n)
                                },
                                isDisabled: function() {
                                    return Qp.isDisabled(n)
                                },
                                setDisabled: function(t) {
                                    return Qp.set(n, t)
                                }
                            }
                        },
                        onAction: function(t) {
                            return r(n.value)
                        },
                        onSetup: function(t) {
                            return t.setActive(i),
                                function() {}
                        },
                        triggersSubmenu: !1,
                        itemBehaviours: []
                    }, c, u), {
                        toggling: {
                            toggleClass: Cp,
                            toggleOnExecute: !1,
                            selected: n.active
                        }
                    })));
                    var n, e, o, r, i, u, a, c
                }) : et.none();
                var t
            }))
        },
        yv = function(t, n) {
            var e = lv(n);
            return 1 === t ? {
                mode: "menu",
                moveOnTab: !0
            } : "auto" === t ? {
                mode: "grid",
                selector: "." + e.item,
                initSize: {
                    numColumns: 1,
                    numRows: 1
                }
            } : {
                mode: "matrix",
                rowSelector: "." + ("color" === n ? "tox-swatches__row" : "tox-collection__group")
            }
        };
    var xv, wv, Sv = {
            inserttable: function A_(o) {
                var t, n = oi("size-label"),
                    a = function(t, n, e) {
                        for (var o = [], r = 0; r < n; r++) {
                            for (var i = [], u = 0; u < e; u++) i.push(ph(r, u, t));
                            o.push(i)
                        }
                        return o
                    }(n, 10, 10),
                    c = Sg({
                        dom: {
                            tag: "span",
                            classes: ["tox-insert-table-picker__label"],
                            attributes: {
                                id: n
                            }
                        },
                        components: [uu("0x0")],
                        behaviours: Wu([wm.config({})])
                    });
                return {
                    type: "widget",
                    data: {
                        value: oi("widget-id")
                    },
                    dom: {
                        tag: "div",
                        classes: ["tox-fancymenuitem"]
                    },
                    autofocus: !0,
                    components: [dh().widget({
                        dom: {
                            tag: "div",
                            classes: ["tox-insert-table-picker"]
                        },
                        components: (t = a, K(t, function(t) {
                            return F(t, fu)
                        })).concat(c.asSpec()),
                        behaviours: Wu([rg("insert-table-picker", [vr(mh, function(t, n, e) {
                            var o, r, i = e.event().row(),
                                u = e.event().col();
                            ! function(t, n, e, o, r) {
                                for (var i = 0; i < o; i++)
                                    for (var u = 0; u < r; u++) Jm.set(t[i][u], i <= n && u <= e)
                            }(a, i, u, 10, 10), wm.set(c.get(t), [(o = i, r = u, uu(r + 1 + "x" + (o + 1)))])
                        }), vr(gh, function(t, n, e) {
                            o.onAction({
                                numRows: e.event().row() + 1,
                                numColumns: e.event().col() + 1
                            }), zo(t, Eo())
                        })]), hm.config({
                            initSize: {
                                numRows: 10,
                                numColumns: 10
                            },
                            mode: "flatgrid",
                            selector: '[role="button"]'
                        })])
                    })]
                }
            },
            colorswatch: function D_(n, t) {
                var e = av.getColors(t.colorinput.getColors(), t.colorinput.hasCustomColors()),
                    o = t.colorinput.getColorCols(),
                    r = vv(oi("menu-value"), e, function(t) {
                        n.onAction({
                            value: t
                        })
                    }, o, "color", ih.CLOSE_ON_EXECUTE, function() {
                        return !1
                    }, t.shared.providers),
                    i = bt(P({}, r, {
                        markers: lv("color"),
                        movement: yv(o, "color")
                    }));
                return {
                    type: "widget",
                    data: {
                        value: oi("widget-id")
                    },
                    dom: {
                        tag: "div",
                        classes: ["tox-fancymenuitem"]
                    },
                    autofocus: !0,
                    components: [dh().widget(mg.sketch(i))]
                }
            }
        },
        Cv = function(n, e, t, o, r, i, u, a) {
            void 0 === a && (a = !0);
            var c, s, f = Hp({
                presets: o,
                textContent: et.none(),
                htmlContent: t ? n.text.map(function(t) {
                    return lh(t, e)
                }) : et.none(),
                ariaLabel: n.text,
                iconContent: n.icon,
                shortcutContent: et.none(),
                checkMark: et.none(),
                caret: et.none(),
                value: n.value
            }, u.providers, a, n.icon);
            return ch({
                data: sh(n),
                disabled: n.disabled,
                getApi: function() {
                    return {}
                },
                onAction: function(t) {
                    return r(n.value, n.meta)
                },
                onSetup: function() {
                    return function() {}
                },
                triggersSubmenu: !1,
                itemBehaviours: (c = n.meta, s = u, mt(c, "tooltipWorker").map(function(e) {
                    return [hp.config({
                        lazySink: s.getSink,
                        tooltipDom: {
                            tag: "div",
                            classes: ["tox-tooltip-worker-container"]
                        },
                        tooltipComponents: [],
                        anchor: function(t) {
                            return {
                                anchor: "submenu",
                                item: t,
                                overrides: {
                                    maxHeightFunction: Wa
                                }
                            }
                        },
                        mode: "follow-highlight",
                        onShow: function(n, t) {
                            e(function(t) {
                                hp.setComponents(n, [au({
                                    element: fe.fromDom(t)
                                })])
                            })
                        }
                    })]
                }).getOr([]))
            }, f, i)
        },
        kv = function(t) {
            var n = t.text.fold(function() {
                return {}
            }, function(t) {
                return {
                    innerHtml: t
                }
            });
            return {
                type: "separator",
                dom: P({
                    tag: "div",
                    classes: [xp, "tox-collection__group-heading"]
                }, n),
                components: []
            }
        },
        Ov = function(t, n, e, o) {
            void 0 === o && (o = !0);
            var r = Hp({
                presets: "normal",
                iconContent: t.icon,
                textContent: t.text,
                htmlContent: et.none(),
                ariaLabel: t.text,
                caret: et.none(),
                checkMark: et.none(),
                shortcutContent: t.shortcut
            }, e, o);
            return ch({
                data: sh(t),
                getApi: function(n) {
                    return {
                        isDisabled: function() {
                            return Qp.isDisabled(n)
                        },
                        setDisabled: function(t) {
                            return Qp.set(n, t)
                        }
                    }
                },
                disabled: t.disabled,
                onAction: t.onAction,
                onSetup: t.onSetup,
                triggersSubmenu: !1,
                itemBehaviours: []
            }, r, n)
        },
        Ev = function(t, n, e, o) {
            void 0 === o && (o = !0);
            var r, i = (r = e.icons, {
                    dom: {
                        tag: "div",
                        classes: ["tox-collection__item-caret"],
                        innerHtml: kg("chevron-right", r)
                    }
                }),
                u = Hp({
                    presets: "normal",
                    iconContent: t.icon,
                    textContent: t.text,
                    htmlContent: et.none(),
                    ariaLabel: t.text,
                    caret: et.some(i),
                    checkMark: et.none(),
                    shortcutContent: t.shortcut
                }, e, o);
            return ch({
                data: sh(t),
                getApi: function(n) {
                    return {
                        isDisabled: function() {
                            return Qp.isDisabled(n)
                        },
                        setDisabled: function(t) {
                            return Qp.set(n, t)
                        }
                    }
                },
                disabled: t.disabled,
                onAction: tt,
                onSetup: t.onSetup,
                triggersSubmenu: !0,
                itemBehaviours: []
            }, u, n)
        },
        Tv = function(t, n, e) {
            var o = Hp({
                iconContent: et.none(),
                textContent: t.text,
                htmlContent: et.none(),
                ariaLabel: t.text,
                checkMark: et.some(Ip(e.icons)),
                caret: et.none(),
                shortcutContent: t.shortcut,
                presets: "normal",
                meta: t.meta
            }, e, !0);
            return bt(ch({
                data: sh(t),
                disabled: t.disabled,
                getApi: function(n) {
                    return {
                        setActive: function(t) {
                            Jm.set(n, t)
                        },
                        isActive: function() {
                            return Jm.isOn(n)
                        },
                        isDisabled: function() {
                            return Qp.isDisabled(n)
                        },
                        setDisabled: function(t) {
                            return Qp.set(n, t)
                        }
                    }
                },
                onAction: t.onAction,
                onSetup: t.onSetup,
                triggersSubmenu: !1,
                itemBehaviours: []
            }, o, n), {
                toggling: {
                    toggleClass: Cp,
                    toggleOnExecute: !1,
                    selected: t.active
                }
            })
        },
        Bv = function(n, e) {
            return (t = Sv, o = n.fancytype, Object.prototype.hasOwnProperty.call(t, o) ? et.some(t[o]) : et.none()).map(function(t) {
                return t(n, e)
            });
            var t, o
        };
    (wv = xv || (xv = {}))[wv.ContentFocus = 0] = "ContentFocus", wv[wv.UiFocus = 1] = "UiFocus";
    var Av = function(t) {
            return t.icon !== undefined || "togglemenuitem" === t.type || "choicemenuitem" === t.type
        },
        Dv = function(t) {
            return _(t, Av)
        },
        _v = function(t, n, e, o) {
            void 0 === o && (o = !0);
            var r, i, u, a, c, s = e.shared.providers;
            switch (t.type) {
                case "menuitem":
                    return (c = t, Tn("menuitem", tp, c)).fold(pv, function(t) {
                        return et.some(Ov(t, n, s, o))
                    });
                case "nestedmenuitem":
                    return (a = t, Tn("nestedmenuitem", np, a)).fold(pv, function(t) {
                        return et.some(Ev(t, n, s, o))
                    });
                case "togglemenuitem":
                    return (u = t, Tn("togglemenuitem", ep, u)).fold(pv, function(t) {
                        return et.some(Tv(t, n, s))
                    });
                case "separator":
                    return (i = t, Tn("separatormenuitem", rp, i)).fold(pv, function(t) {
                        return et.some(kv(t))
                    });
                case "fancymenuitem":
                    return (r = t, Tn("fancymenuitem", ip, r)).fold(pv, function(t) {
                        return Bv(t, e)
                    });
                default:
                    return H.console.error("Unknown item in general menu", t), et.none()
            }
        },
        Mv = function(t, e, o, n, r, i) {
            var u = 1 === n,
                a = !u || Dv(t);
            return vu(F(t, function(t) {
                return (n = t, Tn("Autocompleter.Item", $g, n)).fold(pv, function(t) {
                    return et.some(Cv(t, e, u, "normal", o, r, i, a))
                });
                var n
            }))
        },
        Fv = function(t, n, e, o) {
            var r = Dv(n),
                i = vu(F(n, function(t) {
                    var n = function(t) {
                        return _v(t, e, o, r)
                    };
                    return "nestedmenuitem" === t.type && t.getSubmenuItems().length <= 0 ? n(yt(t, {
                        disabled: !0
                    })) : n(t)
                }));
            return hv(t, r, i, 1, "normal")
        },
        Iv = function(t) {
            return bg.singleData(t.value, t)
        },
        Rv = function(d, c) {
            var e = ce(et.none()),
                m = su(yg.sketch({
                    dom: {
                        tag: "div",
                        classes: ["tox-autocompleter"]
                    },
                    components: [],
                    fireDismissalEventInstead: {},
                    inlineBehaviours: Wu([rg("dismissAutocompleter", [mr(Fo(), function() {
                        return f()
                    })])]),
                    lazySink: c.getSink
                })),
                o = function() {
                    return e.get().isSome()
                },
                s = function() {
                    o() && yg.hide(m)
                },
                f = function() {
                    if (o()) {
                        var t = e.get().map(function(t) {
                            return t.element
                        });
                        Hg(t.getOr(fe.fromDom(d.selection.getNode()))).each(jr), s(), e.set(et.none())
                    }
                },
                n = xt(function() {
                    return Qg(d)
                }),
                l = function(t, n, e, o) {
                    t.matchLength = n.text.length;
                    var r, i, u, a, c, s, f, l = bu(e, function(t) {
                        return et.from(t.columns)
                    }).getOr(1);
                    yg.showAt(m, {
                        anchor: "node",
                        root: fe.fromDom(d.getBody()),
                        node: et.from(t.element)
                    }, mg.sketch((r = hv("autocompleter-value", !0, o, l, "normal"), i = l, u = xv.ContentFocus, a = "normal", c = u === xv.ContentFocus ? zl() : Pl(), s = yv(i, a), f = lv(a), {
                        dom: r.dom,
                        components: r.components,
                        items: r.items,
                        value: r.value,
                        markers: {
                            selectedItem: f.selectedItem,
                            item: f.item
                        },
                        movement: s,
                        fakeFocus: u === xv.ContentFocus,
                        focusManager: c,
                        menuBehaviours: cp("auto" !== i ? [] : [wr(function(o, t) {
                            up(o, 4, f.item).each(function(t) {
                                var n = t.numColumns,
                                    e = t.numRows;
                                hm.setGridSize(o, e, n)
                            })
                        })])
                    }))), yg.getContent(m).each(kl.highlightFirst)
                },
                t = _g(function(t) {
                    27 !== t.which && e.get().map(function(t) {
                        return jg(d.dom, d.selection.getRng(), t.triggerChar).bind(function(t) {
                            return Kg(d, n, t)
                        })
                    }).getOrThunk(function() {
                        return qg(d, n)
                    }).fold(f, function(a) {
                        ! function(t) {
                            if (!o()) {
                                var n = Ng(d, t.range);
                                e.set(et.some({
                                    triggerChar: t.triggerChar,
                                    element: n,
                                    matchLength: t.text.length
                                }))
                            }
                        }(a.context), a.lookupData.then(function(u) {
                            e.get().map(function(t) {
                                var n, e, o, r = a.context;
                                if (t.triggerChar === r.triggerChar) {
                                    var i = (n = r.triggerChar, o = bu(e = u, function(t) {
                                        return et.from(t.columns)
                                    }).getOr(1), K(e, function(i) {
                                        var t = i.items;
                                        return Mv(t, i.matchText, function(o, r) {
                                            var t = d.selection.getRng();
                                            jg(d.dom, t, n).fold(function() {
                                                return H.console.error("Lost context. Cursor probably moved")
                                            }, function(t) {
                                                var n = t.range,
                                                    e = {
                                                        hide: f
                                                    };
                                                i.onAction(e, n, o, r)
                                            })
                                        }, o, ih.BUBBLE_TO_SANDBOX, c)
                                    }));
                                    0 < i.length ? l(t, r, u, i) : 10 <= r.text.length - t.matchLength ? f() : s()
                                }
                            })
                        })
                    })
                }, 50);
            Ug({
                onKeypress: t,
                cancelIfNecessary: f,
                isMenuOpen: function() {
                    return yg.isOpen(m)
                },
                isActive: o,
                getView: function() {
                    return yg.getContent(m)
                }
            }, d)
        },
        Vv = function(m, g) {
            return function(t) {
                if (m(t)) {
                    var n, e, o, r, i, u, a, c = fe.fromDom(t.target),
                        s = function() {
                            t.stopPropagation()
                        },
                        f = function() {
                            t.preventDefault()
                        },
                        l = p(f, s),
                        d = (n = c, e = t.clientX, o = t.clientY, r = s, i = f, u = l, a = t, {
                            target: nt(n),
                            x: nt(e),
                            y: nt(o),
                            stop: r,
                            prevent: i,
                            kill: u,
                            raw: nt(a)
                        });
                    g(d)
                }
            }
        },
        Nv = function(t, n, e, o, r) {
            var i = Vv(e, o);
            return t.dom().addEventListener(n, i, r), {
                unbind: g(Hv, t, n, i, r)
            }
        },
        Hv = function(t, n, e, o) {
            t.dom().removeEventListener(n, e, o)
        },
        Pv = nt(!0),
        zv = function(t, n, e) {
            return Nv(t, n, Pv, e, !1)
        },
        Lv = function(t, n, e) {
            return Nv(t, n, Pv, e, !0)
        },
        jv = function(t, n, e) {
            return mu(t, n, e).isSome()
        };

    function Uv(e, o) {
        var r = null;
        return {
            cancel: function() {
                null !== r && (H.clearTimeout(r), r = null)
            },
            schedule: function() {
                for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                r = H.setTimeout(function() {
                    e.apply(null, t), r = null
                }, o)
            }
        }
    }
    var Wv = function(t) {
            var n = t.raw();
            return n.touches === undefined || 1 !== n.touches.length ? et.none() : et.some(n.touches[0])
        },
        Gv = function(e) {
            var u = ce(et.none()),
                o = Uv(function(t) {
                    u.set(et.none()), e.triggerEvent(Oo(), t)
                }, 400),
                r = Rt([{
                    key: Qe(),
                    value: function(e) {
                        return Wv(e).each(function(t) {
                            o.cancel();
                            var n = {
                                x: nt(t.clientX),
                                y: nt(t.clientY),
                                target: e.target
                            };
                            o.schedule(e), u.set(et.some(n))
                        }), et.none()
                    }
                }, {
                    key: Ze(),
                    value: function(t) {
                        return o.cancel(), Wv(t).each(function(i) {
                            u.get().each(function(t) {
                                var n, e, o, r;
                                n = i, e = t, o = Math.abs(n.clientX - e.x()), r = Math.abs(n.clientY - e.y()), (5 < o || 5 < r) && u.set(et.none())
                            })
                        }), et.none()
                    }
                }, {
                    key: to(),
                    value: function(n) {
                        o.cancel();
                        return u.get().filter(function(t) {
                            return qe(t.target(), n.target())
                        }).map(function(t) {
                            return e.triggerEvent(Co(), n)
                        })
                    }
                }]);
            return {
                fireIfReady: function(n, t) {
                    return Ft(r, t).bind(function(t) {
                        return t(n)
                    })
                }
            }
        },
        Xv = Pe.detect().browser.isFirefox(),
        Yv = gn([Un("triggerEvent"), Zn("stopBackspace", !0)]),
        qv = function(n, t) {
            var e, o, r, i, u = An("Getting GUI events settings", Yv, t),
                a = Pe.detect().deviceType.isTouch() ? ["touchstart", "touchmove", "touchend", "gesturestart"] : ["mousedown", "mouseup", "mouseover", "mousemove", "mouseout", "click"],
                c = Gv(u),
                s = F(a.concat(["selectstart", "input", "contextmenu", "change", "transitionend", "drag", "dragstart", "dragend", "dragenter", "dragleave", "dragover", "drop", "keyup"]), function(t) {
                    return zv(n, t, function(n) {
                        c.fireIfReady(n, t).each(function(t) {
                            t && n.kill()
                        }), u.triggerEvent(t, n) && n.kill()
                    })
                }),
                f = ce(et.none()),
                l = zv(n, "paste", function(n) {
                    c.fireIfReady(n, "paste").each(function(t) {
                        t && n.kill()
                    }), u.triggerEvent("paste", n) && n.kill(), f.set(et.some(H.setTimeout(function() {
                        u.triggerEvent(yo(), n)
                    }, 0)))
                }),
                d = zv(n, "keydown", function(t) {
                    var n;
                    u.triggerEvent("keydown", t) ? t.kill() : !0 !== u.stopBackspace || (8 !== (n = t).raw().which || D(["input", "textarea"], Qo(n.target())) || jv(n.target(), '[contenteditable="true"]')) || t.prevent()
                }),
                m = (e = n, o = function(t) {
                    u.triggerEvent("focusin", t) && t.kill()
                }, Xv ? Lv(e, "focus", o) : zv(e, "focusin", o)),
                g = ce(et.none()),
                p = (r = n, i = function(t) {
                    u.triggerEvent("focusout", t) && t.kill(), g.set(et.some(H.setTimeout(function() {
                        u.triggerEvent(bo(), t)
                    }, 0)))
                }, Xv ? Lv(r, "blur", i) : zv(r, "focusout", i));
            return {
                unbind: function() {
                    W(s, function(t) {
                        t.unbind()
                    }), d.unbind(), m.unbind(), p.unbind(), l.unbind(), f.get().each(H.clearTimeout), g.get().each(H.clearTimeout)
                }
            }
        },
        Kv = function(t, n) {
            var e = Ft(t, "target").map(function(t) {
                return t()
            }).getOr(n);
            return ce(e)
        },
        $v = pt([{
            stopped: []
        }, {
            resume: ["element"]
        }, {
            complete: []
        }]),
        Jv = function(t, o, n, e, r, i) {
            var u, a, c, s, f = t(o, e),
                l = (u = n, a = r, c = ce(!1), s = ce(!1), {
                    stop: function() {
                        c.set(!0)
                    },
                    cut: function() {
                        s.set(!0)
                    },
                    isStopped: c.get,
                    isCut: s.get,
                    event: nt(u),
                    setSource: a.set,
                    getSource: a.get
                });
            return f.fold(function() {
                return i.logEventNoHandlers(o, e), $v.complete()
            }, function(n) {
                var e = n.descHandler();
                return ki(e)(l), l.isStopped() ? (i.logEventStopped(o, n.element(), e.purpose()), $v.stopped()) : l.isCut() ? (i.logEventCut(o, n.element(), e.purpose()), $v.complete()) : _r(n.element()).fold(function() {
                    return i.logNoParent(o, n.element(), e.purpose()), $v.complete()
                }, function(t) {
                    return i.logEventResponse(o, n.element(), e.purpose()), $v.resume(t)
                })
            })
        },
        Qv = function(n, e, o, t, r, i) {
            return Jv(n, e, o, t, r, i).fold(function() {
                return !0
            }, function(t) {
                return Qv(n, e, o, t, r, i)
            }, function() {
                return !1
            })
        },
        Zv = function(t, n, e) {
            var o, r, i = (o = n, r = ce(!1), {
                stop: function() {
                    r.set(!0)
                },
                cut: tt,
                isStopped: r.get,
                isCut: nt(!1),
                event: nt(o),
                setSource: u("Cannot set source of a broadcasted event"),
                getSource: u("Cannot get source of a broadcasted event")
            });
            return W(t, function(t) {
                var n = t.descHandler();
                ki(n)(i)
            }), i.isStopped()
        },
        tb = function(t, n, e, o, r) {
            var i = Kv(e, o);
            return Qv(t, n, e, o, i, r)
        },
        nb = Or("element", "descHandler"),
        eb = function(t, n) {
            return {
                id: nt(t),
                descHandler: nt(n)
            }
        };

    function ob() {
        var i = {};
        return {
            registerId: function(o, r, t) {
                ct(t, function(t, n) {
                    var e = i[n] !== undefined ? i[n] : {};
                    e[r] = Ci(t, o), i[n] = e
                })
            },
            unregisterId: function(e) {
                ct(i, function(t, n) {
                    t.hasOwnProperty(e) && delete t[e]
                })
            },
            filterByType: function(t) {
                return Ft(i, t).map(function(t) {
                    return lt(t, function(t, n) {
                        return eb(n, t)
                    })
                }).getOr([])
            },
            find: function(t, n, e) {
                var r = _t(n)(i);
                return sr(e, function(t) {
                    return e = r, si(o = t).fold(function() {
                        return et.none()
                    }, function(t) {
                        var n = _t(t);
                        return e.bind(n).map(function(t) {
                            return nb(o, t)
                        })
                    });
                    var e, o
                }, t)
            }
        }
    }

    function rb() {
        var o = ob(),
            r = {},
            i = function(o) {
                var t = o.element();
                return si(t).fold(function() {
                    return t = "uid-", n = o.element(), e = oi(ui + t), ci(n, e), e;
                    var t, n, e
                }, function(t) {
                    return t
                })
            },
            u = function(t) {
                si(t.element()).each(function(t) {
                    delete r[t], o.unregisterId(t)
                })
            };
        return {
            find: function(t, n, e) {
                return o.find(t, n, e)
            },
            filter: function(t) {
                return o.filterByType(t)
            },
            register: function(t) {
                var n = i(t);
                Nt(r, n) && function(t, n) {
                    var e = r[n];
                    if (e !== t) throw new Error('The tagId "' + n + '" is already used by: ' + Zr(e.element()) + "\nCannot use it for: " + Zr(t.element()) + "\nThe conflicting element is" + (or(e.element()) ? " " : " not ") + "already in the DOM");
                    u(t)
                }(t, n);
                var e = [t];
                o.registerId(e, n, t.events()), r[n] = t
            },
            unregister: u,
            getById: function(t) {
                return _t(t)(r)
            }
        }
    }
    var ib, ub, ab = ul({
            name: "Container",
            factory: function(t) {
                var n = t.dom,
                    e = n.attributes,
                    o = h(n, ["attributes"]);
                return {
                    uid: t.uid,
                    dom: P({
                        tag: "div",
                        attributes: P({
                            role: "presentation"
                        }, e)
                    }, o),
                    components: t.components,
                    behaviours: ef(t.containerBehaviours),
                    events: t.events,
                    domModification: t.domModification,
                    eventOrder: t.eventOrder
                }
            },
            configFields: [Zn("components", []), nf("containerBehaviours", []), Zn("events", {}), Zn("domModification", {}), Zn("eventOrder", {})]
        }),
        cb = function(e) {
            var o = function(n) {
                    return _r(e.element()).fold(function() {
                        return !0
                    }, function(t) {
                        return qe(n, t)
                    })
                },
                r = rb(),
                s = function(t, n) {
                    return r.find(o, t, n)
                },
                t = qv(e.element(), {
                    triggerEvent: function(u, a) {
                        return Cu(u, a.target(), function(t) {
                            return n = s, e = u, r = t, i = (o = a).target(), tb(n, e, o, i, r);
                            var n, e, o, r, i
                        })
                    }
                }),
                i = {
                    debugInfo: nt("real"),
                    triggerEvent: function(n, e, o) {
                        Cu(n, e, function(t) {
                            tb(s, n, o, e, t)
                        })
                    },
                    triggerFocus: function(a, c) {
                        si(a).fold(function() {
                            Rl(a)
                        }, function(t) {
                            Cu(vo(), a, function(t) {
                                var n, e, o, r, i, u;
                                n = s, e = vo(), o = {
                                    originator: nt(c),
                                    kill: tt,
                                    prevent: tt,
                                    target: nt(a)
                                }, i = t, u = Kv(o, r = a), Jv(n, e, o, r, u, i)
                            })
                        })
                    },
                    triggerEscape: function(t, n) {
                        i.triggerEvent("keydown", t.element(), n.event())
                    },
                    getByUid: function(t) {
                        return g(t)
                    },
                    getByDom: function(t) {
                        return p(t)
                    },
                    build: su,
                    addToGui: function(t) {
                        a(t)
                    },
                    removeFromGui: function(t) {
                        c(t)
                    },
                    addToWorld: function(t) {
                        n(t)
                    },
                    removeFromWorld: function(t) {
                        u(t)
                    },
                    broadcast: function(t) {
                        l(t)
                    },
                    broadcastOn: function(t, n) {
                        d(t, n)
                    },
                    broadcastEvent: function(t, n) {
                        m(t, n)
                    },
                    isConnected: nt(!0)
                },
                n = function(t) {
                    t.connect(i), nr(t.element()) || (r.register(t), W(t.components(), n), i.triggerEvent(Bo(), t.element(), {
                        target: nt(t.element())
                    }))
                },
                u = function(t) {
                    nr(t.element()) || (W(t.components(), u), r.unregister(t)), t.disconnect()
                },
                a = function(t) {
                    Fs(e, t)
                },
                c = function(t) {
                    Vs(t)
                },
                f = function(e) {
                    var t = r.filter(xo());
                    W(t, function(t) {
                        var n = t.descHandler();
                        ki(n)(e)
                    })
                },
                l = function(t) {
                    f({
                        universal: nt(!0),
                        data: nt(t)
                    })
                },
                d = function(t, n) {
                    f({
                        universal: nt(!1),
                        channels: nt(t),
                        data: nt(n)
                    })
                },
                m = function(t, n) {
                    var e = r.filter(t);
                    return Zv(e, n)
                },
                g = function(t) {
                    return r.getById(t).fold(function() {
                        return z.error(new Error('Could not find component with uid: "' + t + '" in system.'))
                    }, z.value)
                },
                p = function(t) {
                    var n = si(t).getOr("not found");
                    return g(n)
                };
            return n(e), {
                root: nt(e),
                element: e.element,
                destroy: function() {
                    t.unbind(), Lr(e.element())
                },
                add: a,
                remove: c,
                getByUid: g,
                getByDom: p,
                addToWorld: n,
                removeFromWorld: u,
                broadcast: l,
                broadcastOn: d,
                broadcastEvent: m
            }
        },
        sb = tinymce.util.Tools.resolve("tinymce.EditorManager"),
        fb = function(t) {
            return et.from(t.settings.min_width).filter(U)
        },
        lb = function(t) {
            return et.from(t.settings.min_height).filter(U)
        },
        db = function(n) {
            var t = ut(n.settings),
                e = I(t, function(t) {
                    return /^toolbar([1-9])$/.test(t)
                }),
                o = F(e, function(t) {
                    return n.getParam(t, !1, "string")
                }),
                r = I(o, function(t) {
                    return "string" == typeof t
                });
            return 0 < r.length ? et.some(r) : et.none()
        },
        mb = function(t) {
            return db(t).fold(function() {
                return 0 < t.getParam("toolbar", [], "string[]").length
            }, function() {
                return !0
            })
        };
    (ub = ib || (ib = {}))["default"] = "", ub.floating = "floating", ub.sliding = "sliding";
    var gb, pb, hb = function(t) {
            return t.getParam("toolbar_drawer", "", "string")
        },
        vb = function(t) {
            var n = t.getParam("fixed_toolbar_container", "", "string"),
                e = t.getParam("inline", !1, "boolean");
            return 0 < n.length && e ? du(rr(), n) : et.none()
        },
        bb = function(t) {
            return t.getParam("inline", !1, "boolean") && vb(t).isSome()
        },
        yb = oi("form-component-change"),
        xb = oi("form-close"),
        wb = oi("form-cancel"),
        Sb = oi("form-action"),
        Cb = oi("form-submit"),
        kb = oi("form-block"),
        Ob = oi("form-unblock"),
        Eb = oi("form-tabchange"),
        Tb = oi("form-resize"),
        Bb = nt([Zn("prefix", "form-field"), nf("fieldBehaviours", [ll, Im])]),
        Ab = nt([Mf({
            schema: [Pn("dom")],
            name: "label"
        }), Mf({
            factory: {
                sketch: function(t) {
                    return {
                        uid: t.uid,
                        dom: {
                            tag: "span",
                            styles: {
                                display: "none"
                            },
                            attributes: {
                                "aria-hidden": "true"
                            },
                            innerHtml: t.text
                        }
                    }
                }
            },
            schema: [Pn("text")],
            name: "aria-descriptor"
        }), Df({
            factory: {
                sketch: function(t) {
                    var n = Dt(t, ["factory"]);
                    return t.factory.sketch(n)
                }
            },
            schema: [Pn("factory")],
            name: "field"
        })]),
        Db = al({
            name: "FormField",
            configFields: Bb(),
            partFields: Ab(),
            factory: function(r, t, n, e) {
                var o = of(r.fieldBehaviours, [ll.config({
                        find: function(t) {
                            return Wf(t, r, "field")
                        }
                    }), Im.config({
                        store: {
                            mode: "manual",
                            getValue: function(t) {
                                return ll.getCurrent(t).bind(Im.getValue)
                            },
                            setValue: function(t, n) {
                                ll.getCurrent(t).each(function(t) {
                                    Im.setValue(t, n)
                                })
                            }
                        }
                    })]),
                    i = fr([wr(function(t, n) {
                        var o = Xf(t, r, ["label", "field", "aria-descriptor"]);
                        o.field().each(function(e) {
                            var n = oi(r.prefix);
                            o.label().each(function(t) {
                                Xr(t.element(), "for", n), Xr(e.element(), "id", n)
                            }), o["aria-descriptor"]().each(function(t) {
                                var n = oi(r.prefix);
                                Xr(t.element(), "id", n), Xr(e.element(), "aria-describedby", n)
                            })
                        })
                    })]),
                    u = {
                        getField: function(t) {
                            return Wf(t, r, "field")
                        },
                        getLabel: function(t) {
                            return Wf(t, r, "label")
                        }
                    };
                return {
                    uid: r.uid,
                    dom: r.dom,
                    components: t,
                    behaviours: o,
                    events: i,
                    apis: u
                }
            },
            apis: {
                getField: function(t, n) {
                    return t.getField(n)
                },
                getLabel: function(t, n) {
                    return t.getLabel(n)
                }
            }
        }),
        _b = /* */ Object.freeze({
            getCoupled: function(t, n, e, o) {
                return e.getOrCreate(t, n, o)
            }
        }),
        Mb = [zn("others", En(z.value, Mn()))],
        Fb = Xu({
            fields: Mb,
            name: "coupling",
            apis: _b,
            state: /* */ Object.freeze({
                init: function(t) {
                    var i = {},
                        n = nt({});
                    return xi({
                        readState: n,
                        getOrCreate: function(e, o, r) {
                            var t = ut(o.others);
                            if (t) return Ft(i, r).getOrThunk(function() {
                                var t = Ft(o.others, r).getOrDie("No information found for coupled component: " + r)(e),
                                    n = e.getSystem().build(t);
                                return i[r] = n
                            });
                            throw new Error("Cannot find coupled component: " + r + ". Known coupled components: " + un(t, null, 2))
                        }
                    })
                }
            })
        }),
        Ib = /* */ Object.freeze({
            events: function(t, n) {
                var e = t.stream.streams.setup(t, n);
                return fr([mr(t.event, e), Sr(function() {
                    return n.cancel()
                })].concat(t.cancelEvent.map(function(t) {
                    return [mr(t, function() {
                        return n.cancel()
                    })]
                }).getOr([])))
            }
        }),
        Rb = function(t) {
            var n = ce(null);
            return xi({
                readState: function() {
                    return {
                        timer: null !== n.get() ? "set" : "unset"
                    }
                },
                setTimer: function(t) {
                    n.set(t)
                },
                cancel: function() {
                    var t = n.get();
                    null !== t && t.cancel()
                }
            })
        },
        Vb = /* */ Object.freeze({
            throttle: Rb,
            init: function(t) {
                return t.stream.streams.state(t)
            }
        }),
        Nb = [zn("stream", _n("mode", {
            throttle: [Pn("delay"), Zn("stopEvent", !0), Vu("streams", {
                setup: function(t, n) {
                    var e = t.stream,
                        o = _g(t.onStream, e.delay);
                    return n.setTimer(o),
                        function(t, n) {
                            o.throttle(t, n), e.stopEvent && n.stop()
                        }
                },
                state: Rb
            })]
        })), Zn("event", "input"), Yn("cancelEvent"), Iu("onStream")],
        Hb = Xu({
            fields: Nb,
            name: "streaming",
            active: Ib,
            state: Vb
        }),
        Pb = function(t) {
            var e = et.none(),
                n = [],
                o = function(t) {
                    r() ? u(t) : n.push(t)
                },
                r = function() {
                    return e.isSome()
                },
                i = function(t) {
                    W(t, u)
                },
                u = function(n) {
                    e.each(function(t) {
                        H.setTimeout(function() {
                            n(t)
                        }, 0)
                    })
                };
            return t(function(t) {
                e = et.some(t), i(n), n = []
            }), {
                get: o,
                map: function(e) {
                    return Pb(function(n) {
                        o(function(t) {
                            n(e(t))
                        })
                    })
                },
                isReady: r
            }
        },
        zb = {
            nu: Pb,
            pure: function(n) {
                return Pb(function(t) {
                    t(n)
                })
            }
        },
        Lb = function(n) {
            var t = function(t) {
                    var o;
                    n((o = t, function() {
                        for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                        var e = this;
                        H.setTimeout(function() {
                            o.apply(e, t)
                        }, 0)
                    }))
                },
                e = function() {
                    return zb.nu(t)
                };
            return {
                map: function(o) {
                    return Lb(function(e) {
                        t(function(t) {
                            var n = o(t);
                            e(n)
                        })
                    })
                },
                bind: function(e) {
                    return Lb(function(n) {
                        t(function(t) {
                            e(t).get(n)
                        })
                    })
                },
                anonBind: function(e) {
                    return Lb(function(n) {
                        t(function(t) {
                            e.get(n)
                        })
                    })
                },
                toLazy: e,
                toCached: function() {
                    var n = null;
                    return Lb(function(t) {
                        null === n && (n = e()), n.get(t)
                    })
                },
                get: t
            }
        },
        jb = {
            nu: Lb,
            pure: function(n) {
                return Lb(function(t) {
                    t(n)
                })
            }
        },
        Ub = nt("sink"),
        Wb = nt(Mf({
            name: Ub(),
            overrides: nt({
                dom: {
                    tag: "div"
                },
                behaviours: Wu([Ds.config({
                    useFixed: !0
                })]),
                events: fr([br(co()), br(no()), br(mo())])
            })
        }));
    (pb = gb || (gb = {}))[pb.HighlightFirst = 0] = "HighlightFirst", pb[pb.HighlightNone = 1] = "HighlightNone";
    var Gb = function(t, n) {
            var e = t.getHotspot(n).getOr(n),
                o = t.getAnchorOverrides();
            return t.layouts.fold(function() {
                return {
                    anchor: "hotspot",
                    hotspot: e,
                    overrides: o
                }
            }, function(t) {
                return {
                    anchor: "hotspot",
                    hotspot: e,
                    overrides: o,
                    layouts: t
                }
            })
        },
        Xb = function(t, n, e, o, r, i, u) {
            var a, c, s, f, l, d, m, g, p, h, v = Gb(t, e);
            return (c = v, f = o, l = r, d = u, m = n, g = s = e, p = (0, (a = t).fetch)(g).map(m), h = $b(s, a), p.map(function(t) {
                return t.bind(function(t) {
                    return et.from(bg.sketch(P({}, l.menu(), {
                        uid: fi(""),
                        data: t,
                        highlightImmediately: d === gb.HighlightFirst,
                        onOpenMenu: function(t, n) {
                            var e = h().getOrDie();
                            Ds.position(e, c, n), Ks.decloak(f)
                        },
                        onOpenSubmenu: function(t, n, e) {
                            var o = h().getOrDie();
                            Ds.position(o, {
                                anchor: "submenu",
                                item: n
                            }, e), Ks.decloak(f)
                        },
                        onEscape: function() {
                            return Pm.focus(s), Ks.close(f), et.some(!0)
                        }
                    })))
                })
            })).map(function(t) {
                return t.fold(function() {
                    Ks.isOpen(o) && Ks.close(o)
                }, function(t) {
                    Ks.cloak(o), Ks.open(o, t), i(o)
                }), o
            })
        },
        Yb = function(t, n, e, o, r, i, u) {
            return Ks.close(o), jb.pure(o)
        },
        qb = function(t, n, e, o, r, i) {
            var u = Fb.getCoupled(e, "sandbox");
            return (Ks.isOpen(u) ? Yb : Xb)(t, n, e, u, o, r, i)
        },
        Kb = function(t, n, e) {
            var o, r, i = ll.getCurrent(n).getOr(n),
                u = ca(t.element());
            e ? Wi(i.element(), "min-width", u + "px") : (o = i.element(), r = u, aa.set(o, r))
        },
        $b = function(n, t) {
            return n.getSystem().getByUid(t.uid + "-" + Ub()).map(function(t) {
                return function() {
                    return z.value(t)
                }
            }).getOrThunk(function() {
                return t.lazySink.fold(function() {
                    return function() {
                        return z.error(new Error("No internal sink is specified, nor could an external sink be found"))
                    }
                }, function(t) {
                    return function() {
                        return t(n)
                    }
                })
            })
        },
        Jb = function(o, r, i) {
            var u = gu(),
                t = $b(r, o);
            return {
                dom: {
                    tag: "div",
                    classes: o.sandboxClasses,
                    attributes: {
                        id: u.id(),
                        role: "listbox"
                    }
                },
                behaviours: uf(o.sandboxBehaviours, [Im.config({
                    store: {
                        mode: "memory",
                        initialValue: r
                    }
                }), Ks.config({
                    onOpen: function(t, n) {
                        var e = Gb(o, r);
                        u.link(r.element()), o.matchWidth && Kb(e.hotspot, n, o.useMinWidth), o.onOpen(e, t, n), i !== undefined && i.onOpen !== undefined && i.onOpen(t, n)
                    },
                    onClose: function(t, n) {
                        u.unlink(r.element()), i !== undefined && i.onClose !== undefined && i.onClose(t, n)
                    },
                    isPartOf: function(t, n, e) {
                        return hu(n, e) || hu(r, e)
                    },
                    getAttachPoint: function() {
                        return t().getOrDie()
                    }
                }), ll.config({
                    find: function(t) {
                        return Ks.getState(t).bind(function(t) {
                            return ll.getCurrent(t)
                        })
                    }
                }), Zs({
                    isExtraPart: nt(!1)
                })])
            }
        },
        Qb = function(t, n, e) {
            var o = Im.getValue(e);
            Im.setValue(n, o), ty(n)
        },
        Zb = function(t, n) {
            var e = t.element(),
                o = Qi(e),
                r = e.dom();
            "number" !== qr(e, "type") && n(r, o)
        },
        ty = function(t) {
            Zb(t, function(t, n) {
                return t.setSelectionRange(n.length, n.length)
            })
        },
        ny = function(t, n, o) {
            if (t.selectsOver) {
                var e = Im.getValue(n),
                    r = t.getDisplayText(e),
                    i = Im.getValue(o);
                return 0 === t.getDisplayText(i).indexOf(r) ? et.some(function() {
                    var t, e;
                    Qb(0, n, o), t = n, e = r.length, Zb(t, function(t, n) {
                        return t.setSelectionRange(e, n.length)
                    })
                }) : et.none()
            }
            return et.none()
        },
        ey = nt([Yn("data"), Zn("inputAttributes", {}), Zn("inputStyles", {}), Zn("tag", "input"), Zn("inputClasses", []), Mu("onSetValue"), Zn("styles", {}), Zn("eventOrder", {}), nf("inputBehaviours", [Im, Pm]), Zn("selectOnFocus", !0)]),
        oy = function(t) {
            return Wu([Pm.config({
                onFocus: !1 === t.selectOnFocus ? tt : function(t) {
                    var n = t.element(),
                        e = Qi(n);
                    n.dom().setSelectionRange(0, e.length)
                }
            })])
        },
        ry = function(t) {
            return {
                tag: t.tag,
                attributes: P({
                    type: "text"
                }, t.inputAttributes),
                styles: t.inputStyles,
                classes: t.inputClasses
            }
        },
        iy = nt("alloy.typeahead.itemexecute"),
        uy = function() {
            return [Zn("sandboxClasses", []), rf("sandboxBehaviours", [ll, Qu, Ks, Im])]
        },
        ay = nt([Yn("lazySink"), Pn("fetch"), Zn("minChars", 5), Zn("responseTime", 1e3), Mu("onOpen"), Zn("getHotspot", et.some), Zn("getAnchorOverrides", nt({})), Zn("layouts", et.none()), Zn("eventOrder", {}), ue("model", {}, [Zn("getDisplayText", function(t) {
            return t.meta !== undefined && t.meta.text !== undefined ? t.meta.text : t.value
        }), Zn("selectsOver", !0), Zn("populateFromBrowse", !0)]), Mu("onSetValue"), Fu("onExecute"), Mu("onItemExecute"), Zn("inputClasses", []), Zn("inputAttributes", {}), Zn("inputStyles", {}), Zn("matchWidth", !0), Zn("useMinWidth", !1), Zn("dismissOnBlur", !0), Du(["openClass"]), Yn("initialData"), nf("typeaheadBehaviours", [Pm, Im, Hb, hm, Jm, Fb]), ae("previewing", function() {
            return ce(!0)
        })].concat(ey()).concat(uy())),
        cy = nt([_f({
            schema: [Au()],
            name: "menu",
            overrides: function(o) {
                return {
                    fakeFocus: !0,
                    onHighlight: function(n, e) {
                        o.previewing.get() ? n.getSystem().getByUid(o.uid).each(function(t) {
                            ny(o.model, t, e).fold(function() {
                                return kl.dehighlight(n, e)
                            }, function(t) {
                                return t()
                            })
                        }) : n.getSystem().getByUid(o.uid).each(function(t) {
                            o.model.populateFromBrowse && Qb(o.model, t, e)
                        }), o.previewing.set(!1)
                    },
                    onExecute: function(t, n) {
                        return t.getSystem().getByUid(o.uid).toOption().map(function(t) {
                            return Lo(t, iy(), {
                                item: n
                            }), !0
                        })
                    },
                    onHover: function(t, n) {
                        o.previewing.set(!1), t.getSystem().getByUid(o.uid).each(function(t) {
                            o.model.populateFromBrowse && Qb(o.model, t, n)
                        })
                    }
                }
            }
        })]),
        sy = al({
            name: "Typeahead",
            configFields: ay(),
            partFields: cy(),
            factory: function(r, t, n, i) {
                var e = function(t, n, e) {
                        r.previewing.set(!1);
                        var o = Fb.getCoupled(t, "sandbox");
                        Ks.isOpen(o) ? ll.getCurrent(o).each(function(t) {
                            kl.getHighlighted(t).fold(function() {
                                e(t)
                            }, function() {
                                Go(o, t.element(), "keydown", n)
                            })
                        }) : Xb(r, u(t), t, o, i, function(t) {
                            ll.getCurrent(t).each(e)
                        }, gb.HighlightFirst).get(tt)
                    },
                    o = oy(r),
                    u = function(o) {
                        return function(t) {
                            return t.map(function(t) {
                                var n = dt(t.menus),
                                    e = K(n, function(t) {
                                        return I(t.items, function(t) {
                                            return "item" === t.type
                                        })
                                    });
                                return Im.getState(o).update(F(e, function(t) {
                                    return t.data
                                })), t
                            })
                        }
                    },
                    a = [Pm.config({}), Im.config({
                        onSetValue: r.onSetValue,
                        store: P({
                            mode: "dataset",
                            getDataKey: function(t) {
                                return Qi(t.element())
                            },
                            getFallbackEntry: function(t) {
                                return {
                                    value: t,
                                    meta: {}
                                }
                            },
                            setValue: function(t, n) {
                                Zi(t.element(), r.model.getDisplayText(n))
                            }
                        }, r.initialData.map(function(t) {
                            return It("initialValue", t)
                        }).getOr({}))
                    }), Hb.config({
                        stream: {
                            mode: "throttle",
                            delay: r.responseTime,
                            stopEvent: !1
                        },
                        onStream: function(t, n) {
                            var e = Fb.getCoupled(t, "sandbox");
                            if (Pm.isFocused(t) && Qi(t.element()).length >= r.minChars) {
                                var o = ll.getCurrent(e).bind(function(t) {
                                    return kl.getHighlighted(t).map(Im.getValue)
                                });
                                r.previewing.set(!0), Xb(r, u(t), t, e, i, function(t) {
                                    ll.getCurrent(e).each(function(t) {
                                        o.fold(function() {
                                            r.model.selectsOver && kl.highlightFirst(t)
                                        }, function(n) {
                                            kl.highlightBy(t, function(t) {
                                                return Im.getValue(t).value === n.value
                                            }), kl.getHighlighted(t).orThunk(function() {
                                                return kl.highlightFirst(t), et.none()
                                            })
                                        })
                                    })
                                }, gb.HighlightFirst).get(tt)
                            }
                        },
                        cancelEvent: To()
                    }), hm.config({
                        mode: "special",
                        onDown: function(t, n) {
                            return e(t, n, kl.highlightFirst), et.some(!0)
                        },
                        onEscape: function(t) {
                            var n = Fb.getCoupled(t, "sandbox");
                            return Ks.isOpen(n) ? (Ks.close(n), et.some(!0)) : et.none()
                        },
                        onUp: function(t, n) {
                            return e(t, n, kl.highlightLast), et.some(!0)
                        },
                        onEnter: function(n) {
                            var t = Fb.getCoupled(n, "sandbox"),
                                e = Ks.isOpen(t);
                            if (e && !r.previewing.get()) return ll.getCurrent(t).bind(function(t) {
                                return kl.getHighlighted(t)
                            }).map(function(t) {
                                return Lo(n, iy(), {
                                    item: t
                                }), !0
                            });
                            var o = Im.getValue(n);
                            return zo(n, To()), r.onExecute(t, n, o), e && Ks.close(t), et.some(!0)
                        }
                    }), Jm.config({
                        toggleClass: r.markers.openClass,
                        aria: {
                            mode: "expanded"
                        }
                    }), Fb.config({
                        others: {
                            sandbox: function(t) {
                                return Jb(r, t, {
                                    onOpen: function() {
                                        return Jm.on(t)
                                    },
                                    onClose: function() {
                                        return Jm.off(t)
                                    }
                                })
                            }
                        }
                    }), rg("typeaheadevents", [kr(function(t) {
                        var n = tt;
                        qb(r, u(t), t, i, n, gb.HighlightFirst).get(tt)
                    }), mr(iy(), function(t, n) {
                        var e = Fb.getCoupled(t, "sandbox");
                        Qb(r.model, t, n.event().item()), zo(t, To()), r.onItemExecute(t, e, n.event().item(), Im.getValue(t)), Ks.close(e), ty(t)
                    })].concat(r.dismissOnBlur ? [mr(bo(), function(t) {
                        var n = Fb.getCoupled(t, "sandbox");
                        Nl(n.element()).isNone() && Ks.close(n)
                    })] : []))];
                return {
                    uid: r.uid,
                    dom: ry(bt(r, {
                        inputAttributes: {
                            role: "combobox",
                            "aria-autocomplete": "list",
                            "aria-haspopup": "true"
                        }
                    })),
                    behaviours: P({}, o, of(r.typeaheadBehaviours, a)),
                    eventOrder: r.eventOrder
                }
            }
        }),
        fy = function(t, n, e) {
            var o = dy(t, n, e);
            return Db.sketch(o)
        },
        ly = function(t, n) {
            return fy(t, n, [])
        },
        dy = function(t, n, e) {
            return {
                dom: my(e),
                components: t.toArray().concat([n])
            }
        },
        my = function(t) {
            return {
                tag: "div",
                classes: ["tox-form__group"].concat(t)
            }
        },
        gy = function(t, n) {
            return Db.parts().label({
                dom: {
                    tag: "label",
                    classes: ["tox-label"],
                    innerHtml: n.translate(t)
                }
            })
        },
        py = function(t) {
            return "separator" === t.type
        },
        hy = {
            type: "separator"
        },
        vy = function(t, e) {
            var n = V(t, function(t, n) {
                return L(n) ? "" === n ? t : "|" === n ? 0 < t.length && !py(t[t.length - 1]) ? t.concat([hy]) : t : gt(e, n.toLowerCase()) ? t.concat([e[n.toLowerCase()]]) : t : t.concat([n])
            }, []);
            return 0 < n.length && py(n[n.length - 1]) && n.pop(), n
        },
        by = function(t, n) {
            return gt(t, "getSubmenuItems") ? (o = n, r = (e = t).getSubmenuItems(), i = yy(r, o), {
                item: e,
                menus: bt(i.menus, It(e.value, i.items)),
                expansions: bt(i.expansions, It(e.value, e.value))
            }) : {
                item: t,
                menus: {},
                expansions: {}
            };
            var e, o, r, i
        },
        yy = function(t, r) {
            var n = vy(L(t) ? t.split(" ") : t, r);
            return R(n, function(t, n) {
                var e = function(t) {
                        if (py(t)) return t;
                        var n = Ft(t, "value").getOrThunk(function() {
                            return oi("generated-menu-item")
                        });
                        return bt({
                            value: n
                        }, t)
                    }(n),
                    o = by(e, r);
                return {
                    menus: bt(t.menus, o.menus),
                    items: [o.item].concat(t.items),
                    expansions: bt(t.expansions, o.expansions)
                }
            }, {
                menus: {},
                expansions: {},
                items: []
            })
        },
        xy = function(t, e, o) {
            var n = oi("primary-menu"),
                r = yy(t, o.shared.providers.menuItems());
            if (0 === r.items.length) return et.none();
            var i = Fv(n, r.items, e, o),
                u = st(r.menus, function(t, n) {
                    return Fv(n, t, e, o)
                }),
                a = bt(u, It(n, i));
            return et.from(bg.tieredData(n, a, r.expansions))
        },
        wy = ul({
            name: "Input",
            configFields: ey(),
            factory: function(t, n) {
                return {
                    uid: t.uid,
                    dom: ry(t),
                    components: [],
                    behaviours: (e = t, P({}, oy(e), of(e.inputBehaviours, [Im.config({
                        store: {
                            mode: "manual",
                            initialValue: e.data.getOr(undefined),
                            getValue: function(t) {
                                return Qi(t.element())
                            },
                            setValue: function(t, n) {
                                Qi(t.element()) !== n && Zi(t.element(), n)
                            }
                        },
                        onSetValue: e.onSetValue
                    })]))),
                    eventOrder: t.eventOrder
                };
                var e
            }
        }),
        Sy = ["input", "textarea"],
        Cy = function(t) {
            var n = Qo(t);
            return D(Sy, n)
        },
        ky = function(t, n) {
            var e = n.getRoot(t).getOr(t.element());
            Ni(e, n.invalidClass), n.notify.each(function(n) {
                Cy(t.element()) && Xr(t.element(), "aria-invalid", !1), n.getContainer(t).each(function(t) {
                    Wr(t, n.validHtml)
                }), n.onValid(t)
            })
        },
        Oy = function(n, t, e, o) {
            var r = t.getRoot(n).getOr(n.element());
            Ri(r, t.invalidClass), t.notify.each(function(t) {
                Cy(n.element()) && Xr(n.element(), "aria-invalid", !0), t.getContainer(n).each(function(t) {
                    Wr(t, o)
                }), t.onInvalid(n, o)
            })
        },
        Ey = function(n, t, e) {
            return t.validator.fold(function() {
                return jb.pure(z.value(!0))
            }, function(t) {
                return t.validate(n)
            })
        },
        Ty = function(n, e, t) {
            return e.notify.each(function(t) {
                t.onValidate(n)
            }), Ey(n, e).map(function(t) {
                return n.getSystem().isConnected() ? t.fold(function(t) {
                    return Oy(n, e, 0, t), z.error(t)
                }, function(t) {
                    return ky(n, e), z.value(t)
                }) : z.error("No longer in system")
            })
        },
        By = /* */ Object.freeze({
            markValid: ky,
            markInvalid: Oy,
            query: Ey,
            run: Ty,
            isInvalid: function(t, n) {
                var e = n.getRoot(t).getOr(t.element());
                return Hi(e, n.invalidClass)
            }
        }),
        Ay = /* */ Object.freeze({
            events: function(n, t) {
                return n.validator.map(function(t) {
                    return fr([mr(t.onEvent, function(t) {
                        Ty(t, n).get(d)
                    })].concat(t.validateOnLoad ? [wr(function(t) {
                        Ty(t, n).get(tt)
                    })] : []))
                }).getOr({})
            }
        }),
        Dy = [Pn("invalidClass"), Zn("getRoot", et.none), Qn("notify", [Zn("aria", "alert"), Zn("getContainer", et.none), Zn("validHtml", ""), Mu("onValid"), Mu("onInvalid"), Mu("onValidate")]), Qn("validator", [Pn("validate"), Zn("onEvent", "input"), Zn("validateOnLoad", !0)])],
        _y = Xu({
            fields: Dy,
            name: "invalidating",
            active: Ay,
            apis: By,
            extra: {
                validation: function(e) {
                    return function(t) {
                        var n = Im.getValue(t);
                        return jb.pure(e(n))
                    }
                }
            }
        }),
        My = /* */ Object.freeze({
            exhibit: function(t, n) {
                return Si({
                    attributes: Rt([{
                        key: n.tabAttr,
                        value: "true"
                    }])
                })
            }
        }),
        Fy = [Zn("tabAttr", "data-alloy-tabstop")],
        Iy = Xu({
            fields: Fy,
            name: "tabstopping",
            active: My
        }),
        Ry = nt([Pn("dom"), Pn("fetch"), Mu("onOpen"), Fu("onExecute"), Zn("getHotspot", et.some), Zn("getAnchorOverrides", nt({})), Zn("layouts", et.none()), nf("dropdownBehaviours", [Jm, Fb, hm, Pm]), Pn("toggleClass"), Zn("eventOrder", {}), Yn("lazySink"), Zn("matchWidth", !1), Zn("useMinWidth", !1), Yn("role")].concat(uy())),
        Vy = nt([_f({
            schema: [Au()],
            name: "menu",
            defaults: function(t) {
                return {
                    onExecute: t.onExecute
                }
            }
        }), Wb()]),
        Ny = al({
            name: "Dropdown",
            configFields: Ry(),
            partFields: Vy(),
            factory: function(n, t, e, o) {
                var r, i, u = function(t) {
                        Ks.getState(t).each(function(t) {
                            bg.highlightPrimary(t)
                        })
                    },
                    a = {
                        expand: function(t) {
                            Jm.isOn(t) || qb(n, function(t) {
                                return t
                            }, t, o, tt, gb.HighlightNone).get(tt)
                        },
                        open: function(t) {
                            Jm.isOn(t) || qb(n, function(t) {
                                return t
                            }, t, o, tt, gb.HighlightFirst).get(tt)
                        },
                        isOpen: Jm.isOn,
                        close: function(t) {
                            Jm.isOn(t) && qb(n, function(t) {
                                return t
                            }, t, o, tt, gb.HighlightFirst).get(tt)
                        }
                    },
                    c = function(t, n) {
                        return jo(t), et.some(!0)
                    };
                return {
                    uid: n.uid,
                    dom: n.dom,
                    components: t,
                    behaviours: of(n.dropdownBehaviours, [Jm.config({
                        toggleClass: n.toggleClass,
                        aria: {
                            mode: "expanded"
                        }
                    }), Fb.config({
                        others: {
                            sandbox: function(t) {
                                return Jb(n, t, {
                                    onOpen: function() {
                                        Jm.on(t)
                                    },
                                    onClose: function() {
                                        Jm.off(t)
                                    }
                                })
                            }
                        }
                    }), hm.config({
                        mode: "special",
                        onSpace: c,
                        onEnter: c,
                        onDown: function(t, n) {
                            if (Ny.isOpen(t)) {
                                var e = Fb.getCoupled(t, "sandbox");
                                u(e)
                            } else Ny.open(t);
                            return et.some(!0)
                        },
                        onEscape: function(t, n) {
                            return Ny.isOpen(t) ? (Ny.close(t), et.some(!0)) : et.none()
                        }
                    }), Pm.config({})]),
                    events: xg(et.some(function(t) {
                        qb(n, function(t) {
                            return t
                        }, t, o, u, gb.HighlightFirst).get(tt)
                    })),
                    eventOrder: P({}, n.eventOrder, (r = {}, r[wo()] = ["disabling", "toggling", "alloy.base.behaviour"], r)),
                    apis: a,
                    domModification: {
                        attributes: P({
                            "aria-haspopup": "true"
                        }, n.role.fold(function() {
                            return {}
                        }, function(t) {
                            return {
                                role: t
                            }
                        }), "button" === n.dom.tag ? {
                            type: (i = "type", Ft(n.dom, "attributes").bind(function(t) {
                                return Ft(t, i)
                            })).getOr("button")
                        } : {})
                    }
                }
            },
            apis: {
                open: function(t, n) {
                    return t.open(n)
                },
                expand: function(t, n) {
                    return t.expand(n)
                },
                close: function(t, n) {
                    return t.close(n)
                },
                isOpen: function(t, n) {
                    return t.isOpen(n)
                }
            }
        }),
        Hy = Xu({
            fields: [],
            name: "unselecting",
            active: /* */ Object.freeze({
                events: function(t) {
                    return fr([lr(po(), nt(!0))])
                },
                exhibit: function(t, n) {
                    return Si({
                        styles: {
                            "-webkit-user-select": "none",
                            "user-select": "none",
                            "-ms-user-select": "none",
                            "-moz-user-select": "-moz-none"
                        },
                        attributes: {
                            unselectable: "on"
                        }
                    })
                }
            })
        }),
        Py = oi("color-input-change"),
        zy = oi("color-swatch-change"),
        Ly = oi("color-picker-cancel"),
        jy = function(t, n, o) {
            var e, r, i = Db.parts().field({
                    factory: wy,
                    inputClasses: ["tox-textfield"],
                    onSetValue: function(t) {
                        return _y.run(t).get(function() {})
                    },
                    inputBehaviours: Wu([Iy.config({}), _y.config({
                        invalidClass: "tox-textbox-field-invalid",
                        getRoot: function(t) {
                            return _r(t.element())
                        },
                        notify: {
                            onValid: function(t) {
                                var n = Im.getValue(t);
                                Lo(t, Py, {
                                    color: n
                                })
                            }
                        },
                        validator: {
                            validateOnLoad: !1,
                            validate: function(t) {
                                var n = Im.getValue(t);
                                if (0 === n.length) return jb.pure(z.value(!0));
                                var e = fe.fromTag("span");
                                Wi(e, "background-color", n);
                                var o = qi(e, "background-color").fold(function() {
                                    return z.error("blah")
                                }, function(t) {
                                    return z.value(n)
                                });
                                return jb.pure(o)
                            }
                        }
                    })]),
                    selectOnFocus: !1
                }),
                u = t.label.map(function(t) {
                    return gy(t, n.providers)
                }),
                a = function(t, n) {
                    Lo(t, zy, {
                        value: n
                    })
                },
                c = Sg((e = {
                    dom: {
                        tag: "span",
                        attributes: {
                            "aria-label": n.providers.translate("Color swatch")
                        }
                    },
                    layouts: et.some({
                        onRtl: function() {
                            return [rc]
                        },
                        onLtr: function() {
                            return [ic]
                        }
                    }),
                    components: [],
                    fetch: av.getFetch(o.getColors(), o.hasCustomColors()),
                    columns: o.getColorCols(),
                    presets: "color",
                    onItemAction: function(t, e) {
                        c.getOpt(t).each(function(n) {
                            "custom" === e ? o.colorPicker(function(t) {
                                t.fold(function() {
                                    return zo(n, Ly)
                                }, function(t) {
                                    a(n, t), Xh(t)
                                })
                            }, "#ffffff") : a(n, "remove" === e ? "" : e)
                        })
                    }
                }, r = n, Ny.sketch({
                    dom: e.dom,
                    components: e.components,
                    toggleClass: "mce-active",
                    dropdownBehaviours: Wu([Hy.config({}), Iy.config({})]),
                    layouts: e.layouts,
                    sandboxClasses: ["tox-dialog__popups"],
                    lazySink: r.getSink,
                    fetch: function(n) {
                        return jb.nu(function(t) {
                            return e.fetch(t)
                        }).map(function(t) {
                            return et.from(Iv(bt(vv(oi("menu-value"), t, function(t) {
                                e.onItemAction(n, t)
                            }, e.columns, e.presets, ih.CLOSE_ON_EXECUTE, function() {
                                return !1
                            }, r.providers), {
                                movement: yv(e.columns, e.presets)
                            })))
                        })
                    },
                    parts: {
                        menu: mv(0, 0, e.presets)
                    }
                })));
            return Db.sketch({
                dom: {
                    tag: "div",
                    classes: ["tox-form__group"]
                },
                components: u.toArray().concat([{
                    dom: {
                        tag: "div",
                        classes: ["tox-color-input"]
                    },
                    components: [i, c.asSpec()]
                }]),
                fieldBehaviours: Wu([rg("form-field-events", [mr(Py, function(t, n) {
                    c.getOpt(t).each(function(t) {
                        Wi(t.element(), "background-color", n.event().color())
                    })
                }), mr(zy, function(n, e) {
                    Db.getField(n).each(function(t) {
                        Im.setValue(t, e.event().value()), ll.getCurrent(n).each(Pm.focus)
                    })
                }), mr(Ly, function(n, t) {
                    Db.getField(n).each(function(t) {
                        ll.getCurrent(n).each(Pm.focus)
                    })
                })])])
            })
        },
        Uy = function(t, n, e) {
            return {
                hue: nt(t),
                saturation: nt(n),
                value: nt(e)
            }
        },
        Wy = nt(oi("rgb-hex-update")),
        Gy = nt(oi("slider-update")),
        Xy = nt(oi("palette-update")),
        Yy = Pe.detect().deviceType.isTouch(),
        qy = Mf({
            schema: [Pn("dom")],
            name: "label"
        }),
        Ky = function(t) {
            return Mf({
                name: t + "-edge",
                overrides: function(o) {
                    return o.model.manager.edgeActions[t].fold(function() {
                        return {}
                    }, function(e) {
                        var t = fr([gr(Qe(), e, [o])]),
                            n = fr([gr(no(), e, [o]), gr(eo(), function(t, n) {
                                n.mouseIsDown.get() && e(t, n)
                            }, [o])]);
                        return {
                            events: Yy ? t : n
                        }
                    })
                }
            })
        },
        $y = Ky("top-left"),
        Jy = Ky("top"),
        Qy = Ky("top-right"),
        Zy = Ky("right"),
        tx = Ky("bottom-right"),
        nx = Ky("bottom"),
        ex = Ky("bottom-left"),
        ox = [qy, Ky("left"), Zy, Jy, nx, $y, Qy, ex, tx, Df({
            name: "thumb",
            defaults: nt({
                dom: {
                    styles: {
                        position: "absolute"
                    }
                }
            }),
            overrides: function(t) {
                return {
                    events: fr([hr(Qe(), t, "spectrum"), hr(Ze(), t, "spectrum"), hr(to(), t, "spectrum"), hr(no(), t, "spectrum"), hr(eo(), t, "spectrum"), hr(ro(), t, "spectrum")])
                }
            }
        }), Df({
            schema: [ae("mouseIsDown", function() {
                return ce(!1)
            })],
            name: "spectrum",
            overrides: function(e) {
                var o = e.model.manager,
                    r = function(n, t) {
                        return o.getValueFromEvent(t).map(function(t) {
                            return o.setValueFrom(n, e, t)
                        })
                    },
                    t = fr([mr(Qe(), r), mr(Ze(), r)]),
                    n = fr([mr(no(), r), mr(eo(), function(t, n) {
                        e.mouseIsDown.get() && r(t, n)
                    })]);
                return {
                    behaviours: Wu(Yy ? [] : [hm.config({
                        mode: "special",
                        onLeft: function(t) {
                            return o.onLeft(t, e)
                        },
                        onRight: function(t) {
                            return o.onRight(t, e)
                        },
                        onUp: function(t) {
                            return o.onUp(t, e)
                        },
                        onDown: function(t) {
                            return o.onDown(t, e)
                        }
                    }), Pm.config({})]),
                    events: Yy ? t : n
                }
            }
        })],
        rx = Pe.detect().deviceType.isTouch(),
        ix = nt("slider.change.value"),
        ux = function(t) {
            var n = t.event().raw();
            if (rx) {
                var e = n;
                return e.touches !== undefined && 1 === e.touches.length ? et.some(e.touches[0]).map(function(t) {
                    return na(t.clientX, t.clientY)
                }) : et.none()
            }
            var o = n;
            return o.clientX !== undefined ? et.some(o).map(function(t) {
                return na(t.clientX, t.clientY)
            }) : et.none()
        },
        ax = function(t, n, e, o) {
            return t < n ? t : e < t ? e : t === n ? n - 1 : Math.max(n, t - o)
        },
        cx = function(t, n, e, o) {
            return e < t ? t : t < n ? n : t === e ? e + 1 : Math.min(e, t + o)
        },
        sx = function(t, n, e) {
            return Math.max(n, Math.min(e, t))
        },
        fx = function(t) {
            var n = t.min,
                e = t.max,
                o = t.range,
                r = t.value,
                i = t.step,
                u = t.snap,
                a = t.snapStart,
                c = t.rounded,
                s = t.hasMinEdge,
                f = t.hasMaxEdge,
                l = t.minBound,
                d = t.maxBound,
                m = t.screenRange,
                g = s ? n - 1 : n,
                p = f ? e + 1 : e;
            if (r < l) return g;
            if (d < r) return p;
            var h, v, b, y, x, w, S, C = (x = r, w = l, S = d, Math.min(S, Math.max(x, w)) - w),
                k = sx(C / m * o + n, g, p);
            return u && n <= k && k <= e ? (h = k, v = n, b = e, y = i, a.fold(function() {
                var t = h - v,
                    n = Math.round(t / y) * y;
                return sx(v + n, v - 1, b + 1)
            }, function(t) {
                var n = (h - t) % y,
                    e = Math.round(n / y),
                    o = Math.floor((h - t) / y),
                    r = Math.floor((b - t) / y),
                    i = t + Math.min(r, o + e) * y;
                return Math.max(t, i)
            })) : c ? Math.round(k) : k
        },
        lx = function(t) {
            var n = t.min,
                e = t.max,
                o = t.range,
                r = t.value,
                i = t.hasMinEdge,
                u = t.hasMaxEdge,
                a = t.maxBound,
                c = t.maxOffset,
                s = t.centerMinEdge,
                f = t.centerMaxEdge;
            return r < n ? i ? 0 : s : e < r ? u ? a : f : (r - n) / o * c
        },
        dx = function(t) {
            return t.model.minX
        },
        mx = function(t) {
            return t.model.minY
        },
        gx = function(t) {
            return t.model.minX - 1
        },
        px = function(t) {
            return t.model.minY - 1
        },
        hx = function(t) {
            return t.model.maxX
        },
        vx = function(t) {
            return t.model.maxY
        },
        bx = function(t) {
            return t.model.maxX + 1
        },
        yx = function(t) {
            return t.model.maxY + 1
        },
        xx = function(t, n, e) {
            return n(t) - e(t)
        },
        wx = function(t) {
            return xx(t, hx, dx)
        },
        Sx = function(t) {
            return xx(t, vx, mx)
        },
        Cx = function(t) {
            return wx(t) / 2
        },
        kx = function(t) {
            return Sx(t) / 2
        },
        Ox = function(t) {
            return t.stepSize
        },
        Ex = function(t) {
            return t.snapToGrid
        },
        Tx = function(t) {
            return t.snapStart
        },
        Bx = function(t) {
            return t.rounded
        },
        Ax = function(t, n) {
            return t[n + "-edge"] !== undefined
        },
        Dx = function(t) {
            return Ax(t, "left")
        },
        _x = function(t) {
            return Ax(t, "right")
        },
        Mx = function(t) {
            return Ax(t, "top")
        },
        Fx = function(t) {
            return Ax(t, "bottom")
        },
        Ix = function(t) {
            return t.model.value.get()
        },
        Rx = function(t) {
            return {
                x: nt(t)
            }
        },
        Vx = function(t) {
            return {
                y: nt(t)
            }
        },
        Nx = function(t, n) {
            return {
                x: nt(t),
                y: nt(n)
            }
        },
        Hx = function(t, n) {
            Lo(t, ix(), {
                value: n
            })
        },
        Px = "left",
        zx = function(t) {
            return t.element().dom().getBoundingClientRect()
        },
        Lx = function(t, n) {
            return t[n]
        },
        jx = function(t) {
            var n = zx(t);
            return Lx(n, Px)
        },
        Ux = function(t) {
            var n = zx(t);
            return Lx(n, "right")
        },
        Wx = function(t) {
            var n = zx(t);
            return Lx(n, "top")
        },
        Gx = function(t) {
            var n = zx(t);
            return Lx(n, "bottom")
        },
        Xx = function(t) {
            var n = zx(t);
            return Lx(n, "width")
        },
        Yx = function(t) {
            var n = zx(t);
            return Lx(n, "height")
        },
        qx = function(t, n, e) {
            return (t + n) / 2 - e
        },
        Kx = function(t, n) {
            var e = zx(t),
                o = zx(n),
                r = Lx(e, Px),
                i = Lx(e, "right"),
                u = Lx(o, Px);
            return qx(r, i, u)
        },
        $x = function(t, n) {
            var e = zx(t),
                o = zx(n),
                r = Lx(e, "top"),
                i = Lx(e, "bottom"),
                u = Lx(o, "top");
            return qx(r, i, u)
        },
        Jx = function(t, n) {
            Lo(t, ix(), {
                value: n
            })
        },
        Qx = function(t) {
            return {
                x: nt(t)
            }
        },
        Zx = function(t, n, e) {
            var o = {
                min: dx(n),
                max: hx(n),
                range: wx(n),
                value: e,
                step: Ox(n),
                snap: Ex(n),
                snapStart: Tx(n),
                rounded: Bx(n),
                hasMinEdge: Dx(n),
                hasMaxEdge: _x(n),
                minBound: jx(t),
                maxBound: Ux(t),
                screenRange: Xx(t)
            };
            return fx(o)
        },
        tw = function(u) {
            return function(t, n) {
                return (e = u, o = t, r = n, i = (0 < e ? cx : ax)(Ix(r).x(), dx(r), hx(r), Ox(r)), Jx(o, Qx(i)), et.some(i)).map(function() {
                    return !0
                });
                var e, o, r, i
            }
        },
        nw = function(t, n, e, o, r, i) {
            var u, a, c, s, f, l, d, m, g, p = (a = i, c = e, s = o, f = r, l = Xx(u = n), d = s.bind(function(t) {
                return et.some(Kx(t, u))
            }).getOr(0), m = f.bind(function(t) {
                return et.some(Kx(t, u))
            }).getOr(l), g = {
                min: dx(a),
                max: hx(a),
                range: wx(a),
                value: c,
                hasMinEdge: Dx(a),
                hasMaxEdge: _x(a),
                minBound: jx(u),
                minOffset: 0,
                maxBound: Ux(u),
                maxOffset: l,
                centerMinEdge: d,
                centerMaxEdge: m
            }, lx(g));
            return jx(n) - jx(t) + p
        },
        ew = tw(-1),
        ow = tw(1),
        rw = et.none,
        iw = et.none,
        uw = {
            "top-left": et.none(),
            top: et.none(),
            "top-right": et.none(),
            right: et.some(function(t, n) {
                Hx(t, Rx(bx(n)))
            }),
            "bottom-right": et.none(),
            bottom: et.none(),
            "bottom-left": et.none(),
            left: et.some(function(t, n) {
                Hx(t, Rx(gx(n)))
            })
        },
        aw = /* */ Object.freeze({
            setValueFrom: function(t, n, e) {
                var o = Zx(t, n, e),
                    r = Qx(o);
                return Jx(t, r), o
            },
            setToMin: function(t, n) {
                var e = dx(n);
                Jx(t, Qx(e))
            },
            setToMax: function(t, n) {
                var e = hx(n);
                Jx(t, Qx(e))
            },
            findValueOfOffset: Zx,
            getValueFromEvent: function(t) {
                return ux(t).map(function(t) {
                    return t.left()
                })
            },
            findPositionOfValue: nw,
            setPositionFromValue: function(t, n, e, o) {
                var r = Ix(e),
                    i = nw(t, o.getSpectrum(t), r.x(), o.getLeftEdge(t), o.getRightEdge(t), e),
                    u = ca(n.element()) / 2;
                Wi(n.element(), "left", i - u + "px")
            },
            onLeft: ew,
            onRight: ow,
            onUp: rw,
            onDown: iw,
            edgeActions: uw
        }),
        cw = function(t, n) {
            Lo(t, ix(), {
                value: n
            })
        },
        sw = function(t) {
            return {
                y: nt(t)
            }
        },
        fw = function(t, n, e) {
            var o = {
                min: mx(n),
                max: vx(n),
                range: Sx(n),
                value: e,
                step: Ox(n),
                snap: Ex(n),
                snapStart: Tx(n),
                rounded: Bx(n),
                hasMinEdge: Mx(n),
                hasMaxEdge: Fx(n),
                minBound: Wx(t),
                maxBound: Gx(t),
                screenRange: Yx(t)
            };
            return fx(o)
        },
        lw = function(u) {
            return function(t, n) {
                return (e = u, o = t, r = n, i = (0 < e ? cx : ax)(Ix(r).y(), mx(r), vx(r), Ox(r)), cw(o, sw(i)), et.some(i)).map(function() {
                    return !0
                });
                var e, o, r, i
            }
        },
        dw = function(t, n, e, o, r, i) {
            var u, a, c, s, f, l, d, m, g, p = (a = i, c = e, s = o, f = r, l = Yx(u = n), d = s.bind(function(t) {
                return et.some($x(t, u))
            }).getOr(0), m = f.bind(function(t) {
                return et.some($x(t, u))
            }).getOr(l), g = {
                min: mx(a),
                max: vx(a),
                range: Sx(a),
                value: c,
                hasMinEdge: Mx(a),
                hasMaxEdge: Fx(a),
                minBound: Wx(u),
                minOffset: 0,
                maxBound: Gx(u),
                maxOffset: l,
                centerMinEdge: d,
                centerMaxEdge: m
            }, lx(g));
            return Wx(n) - Wx(t) + p
        },
        mw = et.none,
        gw = et.none,
        pw = lw(-1),
        hw = lw(1),
        vw = {
            "top-left": et.none(),
            top: et.some(function(t, n) {
                Hx(t, Vx(px(n)))
            }),
            "top-right": et.none(),
            right: et.none(),
            "bottom-right": et.none(),
            bottom: et.some(function(t, n) {
                Hx(t, Vx(yx(n)))
            }),
            "bottom-left": et.none(),
            left: et.none()
        },
        bw = /* */ Object.freeze({
            setValueFrom: function(t, n, e) {
                var o = fw(t, n, e),
                    r = sw(o);
                return cw(t, r), o
            },
            setToMin: function(t, n) {
                var e = mx(n);
                cw(t, sw(e))
            },
            setToMax: function(t, n) {
                var e = vx(n);
                cw(t, sw(e))
            },
            findValueOfOffset: fw,
            getValueFromEvent: function(t) {
                return ux(t).map(function(t) {
                    return t.top()
                })
            },
            findPositionOfValue: dw,
            setPositionFromValue: function(t, n, e, o) {
                var r = Ix(e),
                    i = dw(t, o.getSpectrum(t), r.y(), o.getTopEdge(t), o.getBottomEdge(t), e),
                    u = la(n.element()) / 2;
                Wi(n.element(), "top", i - u + "px")
            },
            onLeft: mw,
            onRight: gw,
            onUp: pw,
            onDown: hw,
            edgeActions: vw
        }),
        yw = function(t, n) {
            Lo(t, ix(), {
                value: n
            })
        },
        xw = function(t, n) {
            return {
                x: nt(t),
                y: nt(n)
            }
        },
        ww = function(s, f) {
            return function(t, n) {
                return (e = s, o = f, r = t, i = n, u = 0 < e ? cx : ax, a = o ? Ix(i).x() : u(Ix(i).x(), dx(i), hx(i), Ox(i)), c = o ? u(Ix(i).y(), mx(i), vx(i), Ox(i)) : Ix(i).y(), yw(r, xw(a, c)), et.some(a)).map(function() {
                    return !0
                });
                var e, o, r, i, u, a, c
            }
        },
        Sw = ww(-1, !1),
        Cw = ww(1, !1),
        kw = ww(-1, !0),
        Ow = ww(1, !0),
        Ew = {
            "top-left": et.some(function(t, n) {
                Hx(t, Nx(gx(n), px(n)))
            }),
            top: et.some(function(t, n) {
                Hx(t, Nx(Cx(n), px(n)))
            }),
            "top-right": et.some(function(t, n) {
                Hx(t, Nx(bx(n), px(n)))
            }),
            right: et.some(function(t, n) {
                Hx(t, Nx(bx(n), kx(n)))
            }),
            "bottom-right": et.some(function(t, n) {
                Hx(t, Nx(bx(n), yx(n)))
            }),
            bottom: et.some(function(t, n) {
                Hx(t, Nx(Cx(n), yx(n)))
            }),
            "bottom-left": et.some(function(t, n) {
                Hx(t, Nx(gx(n), yx(n)))
            }),
            left: et.some(function(t, n) {
                Hx(t, Nx(gx(n), kx(n)))
            })
        },
        Tw = /* */ Object.freeze({
            setValueFrom: function(t, n, e) {
                var o = Zx(t, n, e.left()),
                    r = fw(t, n, e.top()),
                    i = xw(o, r);
                return yw(t, i), i
            },
            setToMin: function(t, n) {
                var e = dx(n),
                    o = mx(n);
                yw(t, xw(e, o))
            },
            setToMax: function(t, n) {
                var e = hx(n),
                    o = vx(n);
                yw(t, xw(e, o))
            },
            getValueFromEvent: function(t) {
                return ux(t)
            },
            setPositionFromValue: function(t, n, e, o) {
                var r = Ix(e),
                    i = nw(t, o.getSpectrum(t), r.x(), o.getLeftEdge(t), o.getRightEdge(t), e),
                    u = dw(t, o.getSpectrum(t), r.y(), o.getTopEdge(t), o.getBottomEdge(t), e),
                    a = ca(n.element()) / 2,
                    c = la(n.element()) / 2;
                Wi(n.element(), "left", i - a + "px"), Wi(n.element(), "top", u - c + "px")
            },
            onLeft: Sw,
            onRight: Cw,
            onUp: kw,
            onDown: Ow,
            edgeActions: Ew
        }),
        Bw = Pe.detect().deviceType.isTouch(),
        Aw = [Zn("stepSize", 1), Zn("onChange", tt), Zn("onChoose", tt), Zn("onInit", tt), Zn("onDragStart", tt), Zn("onDragEnd", tt), Zn("snapToGrid", !1), Zn("rounded", !0), Yn("snapStart"), zn("model", _n("mode", {
            x: [Zn("minX", 0), Zn("maxX", 100), ae("value", function(t) {
                return ce(t.mode.minX)
            }), Pn("getInitialValue"), Vu("manager", aw)],
            y: [Zn("minY", 0), Zn("maxY", 100), ae("value", function(t) {
                return ce(t.mode.minY)
            }), Pn("getInitialValue"), Vu("manager", bw)],
            xy: [Zn("minX", 0), Zn("maxX", 100), Zn("minY", 0), Zn("maxY", 100), ae("value", function(t) {
                return ce({
                    x: nt(t.mode.minX),
                    y: nt(t.mode.minY)
                })
            }), Pn("getInitialValue"), Vu("manager", Tw)]
        })), nf("sliderBehaviours", [hm, Im])].concat(Bw ? [] : [ae("mouseIsDown", function() {
            return ce(!1)
        })]),
        Dw = Pe.detect().deviceType.isTouch(),
        _w = al({
            name: "Slider",
            configFields: Aw,
            partFields: ox,
            factory: function(i, t, n, e) {
                var u = function(t) {
                        return Gf(t, i, "thumb")
                    },
                    a = function(t) {
                        return Gf(t, i, "spectrum")
                    },
                    o = function(t) {
                        return Wf(t, i, "left-edge")
                    },
                    r = function(t) {
                        return Wf(t, i, "right-edge")
                    },
                    c = function(t) {
                        return Wf(t, i, "top-edge")
                    },
                    s = function(t) {
                        return Wf(t, i, "bottom-edge")
                    },
                    f = i.model,
                    l = f.manager,
                    d = function(t, n) {
                        l.setPositionFromValue(t, n, i, {
                            getLeftEdge: o,
                            getRightEdge: r,
                            getTopEdge: c,
                            getBottomEdge: s,
                            getSpectrum: a
                        })
                    },
                    m = function(t, n) {
                        f.value.set(n);
                        var e = u(t);
                        return d(t, e), i.onChange(t, e, n), et.some(!0)
                    },
                    g = [mr(Qe(), function(t, n) {
                        i.onDragStart(t, u(t))
                    }), mr(to(), function(t, n) {
                        i.onDragEnd(t, u(t))
                    })],
                    p = [mr(no(), function(t, n) {
                        n.stop(), i.onDragStart(t, u(t)), i.mouseIsDown.set(!0)
                    }), mr(ro(), function(t, n) {
                        i.onDragEnd(t, u(t))
                    })],
                    h = Dw ? g : p;
                return {
                    uid: i.uid,
                    dom: i.dom,
                    components: t,
                    behaviours: of(i.sliderBehaviours, q([Dw ? [] : [hm.config({
                            mode: "special",
                            focusIn: function(t) {
                                return Wf(t, i, "spectrum").map(hm.focusIn).map(nt(!0))
                            }
                        })],
                        [Im.config({
                            store: {
                                mode: "manual",
                                getValue: function(t) {
                                    return f.value.get()
                                }
                            }
                        }), Qu.config({
                            channels: {
                                "mouse.released": {
                                    onReceive: function(e, t) {
                                        var n = i.mouseIsDown.get();
                                        i.mouseIsDown.set(!1), n && Wf(e, i, "thumb").each(function(t) {
                                            var n = f.value.get();
                                            i.onChoose(e, t, n)
                                        })
                                    }
                                }
                            }
                        })]
                    ])),
                    events: fr([mr(ix(), function(t, n) {
                        m(t, n.event().value())
                    }), wr(function(t, n) {
                        var e = f.getInitialValue();
                        f.value.set(e);
                        var o = u(t);
                        d(t, o);
                        var r = a(t);
                        i.onInit(t, o, r, f.value.get())
                    })].concat(h)),
                    apis: {
                        resetToMin: function(t) {
                            l.setToMin(t, i)
                        },
                        resetToMax: function(t) {
                            l.setToMax(t, i)
                        },
                        changeValue: m,
                        refresh: d
                    },
                    domModification: {
                        styles: {
                            position: "relative"
                        }
                    }
                }
            },
            apis: {
                resetToMin: function(t, n) {
                    t.resetToMin(n)
                },
                resetToMax: function(t, n) {
                    t.resetToMax(n)
                },
                refresh: function(t, n) {
                    t.refresh(n)
                }
            }
        }),
        Mw = function(t, n) {
            var e = _w.parts().spectrum({
                    dom: {
                        tag: "div",
                        classes: [n("hue-slider-spectrum")],
                        attributes: {
                            role: "presentation"
                        }
                    }
                }),
                o = _w.parts().thumb({
                    dom: {
                        tag: "div",
                        classes: [n("hue-slider-thumb")],
                        attributes: {
                            role: "presentation"
                        }
                    }
                });
            return _w.sketch({
                dom: {
                    tag: "div",
                    classes: [n("hue-slider")],
                    attributes: {
                        role: "presentation"
                    }
                },
                rounded: !1,
                model: {
                    mode: "y",
                    getInitialValue: nt({
                        y: nt(0)
                    })
                },
                components: [e, o],
                sliderBehaviours: Wu([Pm.config({})]),
                onChange: function(t, n, e) {
                    Lo(t, Gy(), {
                        value: e
                    })
                }
            })
        },
        Fw = [nf("formBehaviours", [Im])],
        Iw = function(t) {
            return "<alloy.field." + t + ">"
        },
        Rw = function(o, t, n) {
            return {
                uid: o.uid,
                dom: o.dom,
                components: t,
                behaviours: of(o.formBehaviours, [Im.config({
                    store: {
                        mode: "manual",
                        getValue: function(t) {
                            var n = Yf(t, o);
                            return st(n, function(t, n) {
                                return t().bind(function(t) {
                                    var n, e = ll.getCurrent(t);
                                    return n = "missing current", e.fold(function() {
                                        return z.error(n)
                                    }, z.value)
                                }).map(Im.getValue)
                            })
                        },
                        setValue: function(e, t) {
                            ct(t, function(n, t) {
                                Wf(e, o, t).each(function(t) {
                                    ll.getCurrent(t).each(function(t) {
                                        Im.setValue(t, n)
                                    })
                                })
                            })
                        }
                    }
                })]),
                apis: {
                    getField: function(t, n) {
                        return Wf(t, o, n).bind(ll.getCurrent)
                    }
                }
            }
        },
        Vw = {
            getField: bi(function(t, n, e) {
                return t.getField(n, e)
            }),
            sketch: function(t) {
                var e, n = (e = [], {
                        field: function(t, n) {
                            return e.push(t), Pf("form", Iw(t), n)
                        },
                        record: function() {
                            return e
                        }
                    }),
                    o = t(n),
                    r = n.record(),
                    i = F(r, function(t) {
                        return Df({
                            name: t,
                            pname: Iw(t)
                        })
                    });
                return tl("form", Fw, i, Rw, o)
            }
        },
        Nw = oi("valid-input"),
        Hw = oi("invalid-input"),
        Pw = oi("validating-input"),
        zw = "colorcustom.rgb.",
        Lw = function(d, m, g, p) {
            var h = function(t, n, e, o, r) {
                    var i, u, a = d(zw + "range"),
                        c = [Db.parts().label({
                            dom: {
                                tag: "label",
                                innerHtml: e,
                                attributes: {
                                    "aria-label": o
                                }
                            }
                        }), Db.parts().field({
                            data: r,
                            factory: wy,
                            inputAttributes: P({
                                type: "text"
                            }, "hex" === n ? {
                                "aria-live": "polite"
                            } : {}),
                            inputClasses: [m("textfield")],
                            inputBehaviours: Wu([(i = n, u = t, _y.config({
                                invalidClass: m("invalid"),
                                notify: {
                                    onValidate: function(t) {
                                        Lo(t, Pw, {
                                            type: i
                                        })
                                    },
                                    onValid: function(t) {
                                        Lo(t, Nw, {
                                            type: i,
                                            value: Im.getValue(t)
                                        })
                                    },
                                    onInvalid: function(t) {
                                        Lo(t, Hw, {
                                            type: i,
                                            value: Im.getValue(t)
                                        })
                                    }
                                },
                                validator: {
                                    validate: function(t) {
                                        var n = Im.getValue(t),
                                            e = u(n) ? z.value(!0) : z.error(d("aria.input.invalid"));
                                        return jb.pure(e)
                                    },
                                    validateOnLoad: !1
                                }
                            })), Iy.config({})]),
                            onSetValue: function(t) {
                                _y.isInvalid(t) && _y.run(t).get(tt)
                            }
                        })],
                        s = "hex" !== n ? [Db.parts()["aria-descriptor"]({
                            text: a
                        })] : [];
                    return {
                        dom: {
                            tag: "div",
                            attributes: {
                                role: "presentation"
                            }
                        },
                        components: c.concat(s)
                    }
                },
                v = function(t, n) {
                    var e = n.red(),
                        o = n.green(),
                        r = n.blue();
                    Im.setValue(t, {
                        red: e,
                        green: o,
                        blue: r
                    })
                },
                b = Sg({
                    dom: {
                        tag: "div",
                        classes: [m("rgba-preview")],
                        styles: {
                            "background-color": "white"
                        },
                        attributes: {
                            role: "presentation"
                        }
                    }
                }),
                y = function(t, n) {
                    b.getOpt(t).each(function(t) {
                        Wi(t.element(), "background-color", "#" + n.value())
                    })
                };
            return ul({
                factory: function() {
                    var e = {
                            red: nt(ce(et.some(255))),
                            green: nt(ce(et.some(255))),
                            blue: nt(ce(et.some(255))),
                            hex: nt(ce(et.some("ffffff")))
                        },
                        o = function(t) {
                            return e[t]().get()
                        },
                        i = function(t, n) {
                            e[t]().set(n)
                        },
                        r = function(t) {
                            var n = t.red(),
                                e = t.green(),
                                o = t.blue();
                            i("red", et.some(n)), i("green", et.some(e)), i("blue", et.some(o))
                        },
                        n = function(t, n) {
                            var e = n.event();
                            "hex" !== e.type() ? i(e.type(), et.none()) : p(t)
                        },
                        u = function(r, t, n) {
                            var e = parseInt(n, 10);
                            i(t, et.some(e)), o("red").bind(function(e) {
                                return o("green").bind(function(n) {
                                    return o("blue").map(function(t) {
                                        return Bh(e, n, t, 1)
                                    })
                                })
                            }).each(function(t) {
                                var n, e, o = (n = r, e = Sh(t), Vw.getField(n, "hex").each(function(t) {
                                    Pm.isFocused(t) || Im.setValue(n, {
                                        hex: e.value()
                                    })
                                }), e);
                                y(r, o)
                            })
                        },
                        a = function(t, n) {
                            var e = n.event();
                            "hex" === e.type() ? function(t, n) {
                                g(t);
                                var e = hh(n);
                                i("hex", et.some(n));
                                var o = _h(e);
                                v(t, o), r(o), Lo(t, Wy(), {
                                    hex: e
                                }), y(t, e)
                            }(t, e.value()) : u(t, e.type(), e.value())
                        },
                        t = function(t) {
                            return {
                                label: d(zw + t + ".label"),
                                description: d(zw + t + ".description")
                            }
                        },
                        c = t("red"),
                        s = t("green"),
                        f = t("blue"),
                        l = t("hex");
                    return bt(Vw.sketch(function(t) {
                        return {
                            dom: {
                                tag: "form",
                                classes: [m("rgb-form")],
                                attributes: {
                                    "aria-label": d("aria.color.picker")
                                }
                            },
                            components: [t.field("red", Db.sketch(h(Ah, "red", c.label, c.description, 255))), t.field("green", Db.sketch(h(Ah, "green", s.label, s.description, 255))), t.field("blue", Db.sketch(h(Ah, "blue", f.label, f.description, 255))), t.field("hex", Db.sketch(h(yh, "hex", l.label, l.description, "ffffff"))), b.asSpec()],
                            formBehaviours: Wu([_y.config({
                                invalidClass: m("form-invalid")
                            }), rg("rgb-form-events", [mr(Nw, a), mr(Hw, n), mr(Pw, n)])])
                        }
                    }), {
                        apis: {
                            updateHex: function(t, n) {
                                var e, o;
                                Im.setValue(t, {
                                    hex: n.value()
                                }), e = t, o = _h(n), v(e, o), r(o), y(t, n)
                            }
                        }
                    })
                },
                name: "RgbForm",
                configFields: [],
                apis: {
                    updateHex: function(t, n, e) {
                        t.updateHex(n, e)
                    }
                },
                extraApis: {}
            })
        },
        jw = function(t, o) {
            var r = _w.parts().spectrum({
                    dom: {
                        tag: "canvas",
                        attributes: {
                            role: "presentation"
                        },
                        classes: [o("sv-palette-spectrum")]
                    }
                }),
                i = _w.parts().thumb({
                    dom: {
                        tag: "div",
                        attributes: {
                            role: "presentation"
                        },
                        classes: [o("sv-palette-thumb")],
                        innerHtml: "<div class=" + o("sv-palette-inner-thumb") + ' role="presentation"></div>'
                    }
                }),
                u = function(t, n) {
                    var e = t.width,
                        o = t.height,
                        r = t.getContext("2d");
                    if (null !== r) {
                        r.fillStyle = n, r.fillRect(0, 0, e, o);
                        var i = r.createLinearGradient(0, 0, e, 0);
                        i.addColorStop(0, "rgba(255,255,255,1)"), i.addColorStop(1, "rgba(255,255,255,0)"), r.fillStyle = i, r.fillRect(0, 0, e, o);
                        var u = r.createLinearGradient(0, 0, 0, o);
                        u.addColorStop(0, "rgba(0,0,0,0)"), u.addColorStop(1, "rgba(0,0,0,1)"), r.fillStyle = u, r.fillRect(0, 0, e, o)
                    }
                };
            return ul({
                factory: function(t) {
                    var n = nt({
                            x: nt(0),
                            y: nt(0)
                        }),
                        e = Wu([ll.config({
                            find: et.some
                        }), Pm.config({})]);
                    return _w.sketch({
                        dom: {
                            tag: "div",
                            attributes: {
                                role: "presentation"
                            },
                            classes: [o("sv-palette")]
                        },
                        model: {
                            mode: "xy",
                            getInitialValue: n
                        },
                        rounded: !1,
                        components: [r, i],
                        onChange: function(t, n, e) {
                            Lo(t, Xy(), {
                                value: e
                            })
                        },
                        onInit: function(t, n, e, o) {
                            u(e.element().dom(), Fh(Ih()))
                        },
                        sliderBehaviours: e
                    })
                },
                name: "SaturationBrightnessPalette",
                configFields: [],
                apis: {
                    setRgba: function(t, n, e) {
                        var o, r;
                        o = e, r = n.components()[0].element().dom(), u(r, Fh(o))
                    }
                },
                extraApis: {}
            })
        },
        Uw = function(c, s) {
            return ul({
                name: "ColourPicker",
                configFields: [Pn("dom"), Zn("onValidHex", tt), Zn("onInvalidHex", tt)],
                factory: function(t) {
                    var a, v, e = Lw(c, s, t.onValidHex, t.onInvalidHex),
                        o = jw(c, s),
                        b = {
                            paletteRgba: nt(ce(Ih()))
                        },
                        n = Sg(o.sketch({})),
                        r = Sg(e.sketch({})),
                        i = function(t, e) {
                            n.getOpt(t).each(function(t) {
                                var n = _h(e);
                                b.paletteRgba().set(n), o.setRgba(t, n)
                            })
                        },
                        u = function(t, n) {
                            r.getOpt(t).each(function(t) {
                                e.updateHex(t, n)
                            })
                        },
                        y = function(n, e, t) {
                            W(t, function(t) {
                                t(n, e)
                            })
                        };
                    return {
                        uid: t.uid,
                        dom: t.dom,
                        components: [n.asSpec(), Mw(c, s), r.asSpec()],
                        behaviours: Wu([rg("colour-picker-events", [mr(Xy(), (v = [u], function(t, n) {
                            var e, o, r, i, u, a, c, s, f, l = n.event().value(),
                                d = b.paletteRgba().get(),
                                m = (i = r = 0, u = (e = d).red() / 255, a = e.green() / 255, c = e.blue() / 255, s = Math.min(u, Math.min(a, c)), f = Math.max(u, Math.max(a, c)), s === f ? Uy(0, 0, 100 * (i = s)) : (r = 60 * ((r = u === s ? 3 : c === s ? 1 : 5) - (u === s ? a - c : c === s ? u - a : c - u) / (f - s)), o = (f - s) / f, i = f, Uy(Math.round(r), Math.round(100 * o), Math.round(100 * i)))),
                                g = Uy(m.hue(), l.x(), 100 - l.y()),
                                p = Dh(g),
                                h = Sh(p);
                            y(t, h, v)
                        })), mr(Gy(), (a = [i, u], function(t, n) {
                            var e, o, r, i = n.event().value(),
                                u = (e = i.y(), o = Uy((100 - e) / 100 * 360, 100, 100), r = Dh(o), Sh(r));
                            y(t, u, a)
                        }))]), ll.config({
                            find: function(t) {
                                return r.getOpt(t)
                            }
                        }), hm.config({
                            mode: "acyclic"
                        })])
                    }
                }
            })
        },
        Ww = function() {
            return ll.config({
                find: et.some
            })
        },
        Gw = function(t) {
            return ll.config({
                find: t.getOpt
            })
        },
        Xw = function(t) {
            return ll.config({
                find: function(n) {
                    return Ir(n.element(), t).bind(function(t) {
                        return n.getSystem().getByDom(t).toOption()
                    })
                }
            })
        },
        Yw = {
            "colorcustom.rgb.red.label": "R",
            "colorcustom.rgb.red.description": "Red component",
            "colorcustom.rgb.green.label": "G",
            "colorcustom.rgb.green.description": "Green component",
            "colorcustom.rgb.blue.label": "B",
            "colorcustom.rgb.blue.description": "Blue component",
            "colorcustom.rgb.hex.label": "#",
            "colorcustom.rgb.hex.description": "Hex color code",
            "colorcustom.rgb.range": "Range 0 to 255",
            "colorcustom.sb.saturation": "Saturation",
            "colorcustom.sb.brightness": "Brightness",
            "colorcustom.sb.picker": "Saturation and Brightness Picker",
            "colorcustom.sb.palette": "Saturation and Brightness Palette",
            "colorcustom.sb.instructions": "Use arrow keys to select saturation and brightness, on x and y axes",
            "colorcustom.hue.hue": "Hue",
            "colorcustom.hue.slider": "Hue Slider",
            "colorcustom.hue.palette": "Hue Palette",
            "colorcustom.hue.instructions": "Use arrow keys to select a hue",
            "aria.color.picker": "Color Picker",
            "aria.input.invalid": "Invalid input"
        },
        qw = function(t) {
            return Yw[t]
        },
        Kw = pn([Zn("preprocess", d), Zn("postprocess", d)]),
        $w = function(t, n, e) {
            return Im.config(bt({
                store: {
                    mode: "manual",
                    getValue: n,
                    setValue: e
                }
            }, t.map(function(t) {
                return {
                    store: {
                        initialValue: t
                    }
                }
            }).getOr({})))
        },
        Jw = function(t, n, e) {
            return $w(t, function(t) {
                return n(t.element())
            }, function(t, n) {
                return e(t.element(), n)
            })
        },
        Qw = function(r, t) {
            var i = An("RepresentingConfigs.memento processors", Kw, t);
            return Im.config({
                store: {
                    mode: "manual",
                    getValue: function(t) {
                        var n = r.get(t),
                            e = Im.getValue(n);
                        return i.postprocess(e)
                    },
                    setValue: function(t, n) {
                        var e = i.preprocess(n),
                            o = r.get(t);
                        Im.setValue(o, e)
                    }
                }
            })
        },
        Zw = $w,
        tS = function(t) {
            return Jw(t, Ur, Wr)
        },
        nS = function(t) {
            return Im.config({
                store: {
                    mode: "memory",
                    initialValue: t
                }
            })
        },
        eS = function(r, n) {
            var e = function(t, n) {
                    n.stop()
                },
                o = function(t) {
                    return function(n, e) {
                        W(t, function(t) {
                            t(n, e)
                        })
                    }
                },
                i = function(t, n) {
                    if (!Qp.isDisabled(t)) {
                        var e = n.event().raw();
                        a(t, e.dataTransfer.files)
                    }
                },
                u = function(t, n) {
                    var e = n.event().raw().target.files;
                    a(t, e)
                },
                a = function(t, n) {
                    var e, o;
                    Im.setValue(t, (e = n, o = new RegExp("(" + ".jpg,.jpeg,.png,.gif".split(/\s*,\s*/).join("|") + ")$", "i"), I(it(e), function(t) {
                        return o.test(t.name)
                    }))), Lo(t, yb, {
                        name: r.name
                    })
                },
                c = Sg({
                    dom: {
                        tag: "input",
                        attributes: {
                            type: "file",
                            accept: "image/*"
                        },
                        styles: {
                            display: "none"
                        }
                    },
                    behaviours: Wu([rg("input-file-events", [br(ko())])])
                }),
                t = r.label.map(function(t) {
                    return gy(t, n)
                }),
                s = Db.parts().field({
                    factory: {
                        sketch: function(t) {
                            return {
                                uid: t.uid,
                                dom: {
                                    tag: "div",
                                    classes: ["tox-dropzone-container"]
                                },
                                behaviours: Wu([nS([]), Ww(), Qp.config({}), Jm.config({
                                    toggleClass: "dragenter",
                                    toggleOnExecute: !1
                                }), rg("dropzone-events", [mr("dragenter", o([e, Jm.toggle])), mr("dragleave", o([e, Jm.toggle])), mr("dragover", e), mr("drop", o([e, i])), mr(lo(), u)])]),
                                components: [{
                                    dom: {
                                        tag: "div",
                                        classes: ["tox-dropzone"],
                                        styles: {}
                                    },
                                    components: [{
                                        dom: {
                                            tag: "p",
                                            innerHtml: n.translate("Drop an image here")
                                        }
                                    }, wg.sketch({
                                        dom: {
                                            tag: "button",
                                            innerHtml: n.translate("Browse for an image"),
                                            styles: {
                                                position: "relative"
                                            },
                                            classes: ["tox-button", "tox-button--secondary"]
                                        },
                                        components: [c.asSpec()],
                                        action: function(t) {
                                            c.get(t).element().dom().click()
                                        },
                                        buttonBehaviours: Wu([Iy.config({})])
                                    })]
                                }]
                            }
                        }
                    }
                });
            return fy(t, s, ["tox-form__group--stretched"])
        },
        oS = oi("alloy-fake-before-tabstop"),
        rS = oi("alloy-fake-after-tabstop"),
        iS = function(t) {
            return {
                dom: {
                    tag: "div",
                    styles: {
                        width: "1px",
                        height: "1px",
                        outline: "none"
                    },
                    attributes: {
                        tabindex: "0"
                    },
                    classes: t
                },
                behaviours: Wu([Pm.config({
                    ignore: !0
                }), Iy.config({})])
            }
        },
        uS = function(t, n) {
            Lo(t, co(), {
                raw: {
                    which: 9,
                    shiftKey: n
                }
            })
        },
        aS = function(t) {
            return jv(t, ["." + oS, "." + rS].join(","), nt(!1))
        },
        cS = function(t, n) {
            var e = n.element();
            Hi(e, oS) ? uS(t, !0) : Hi(e, rS) && uS(t, !1)
        },
        sS = function(t) {
            return {
                dom: {
                    tag: "div",
                    classes: ["tox-navobj"]
                },
                components: [iS([oS]), t, iS([rS])],
                behaviours: Wu([Xw(1)])
            }
        },
        fS = !(Pe.detect().browser.isIE() || Pe.detect().browser.isEdge()),
        lS = function(t, n) {
            var o, r, e = fS && t.sandboxed,
                i = P({}, t.label.map(function(t) {
                    return {
                        title: t
                    }
                }).getOr({}), e ? {
                    sandbox: "allow-scripts allow-same-origin"
                } : {}),
                u = (o = e, r = ce(""), {
                    getValue: function(t) {
                        return r.get()
                    },
                    setValue: function(t, n) {
                        if (o) Xr(t.element(), "srcdoc", n);
                        else {
                            Xr(t.element(), "src", "javascript:''");
                            var e = t.element().dom().contentWindow.document;
                            e.open(), e.write(n), e.close()
                        }
                        r.set(n)
                    }
                }),
                a = t.label.map(function(t) {
                    return gy(t, n)
                }),
                c = Db.parts().field({
                    factory: {
                        sketch: function(t) {
                            return sS({
                                uid: t.uid,
                                dom: {
                                    tag: "iframe",
                                    attributes: i
                                },
                                behaviours: Wu([Iy.config({}), Pm.config({}), Zw(et.none(), u.getValue, u.setValue)])
                            })
                        }
                    }
                });
            return fy(a, c, ["tox-form__group--stretched"])
        };

    function dS(t, n) {
        return pS(H.document.createElement("canvas"), t, n)
    }

    function mS(t) {
        var n = dS(t.width, t.height);
        return gS(n).drawImage(t, 0, 0), n
    }

    function gS(t) {
        return t.getContext("2d")
    }

    function pS(t, n, e) {
        return t.width = n, t.height = e, t
    }
    var hS = {
        atob: function(t) {
            return on.getOrDie("atob")(t)
        },
        requestAnimationFrame: function(t) {
            on.getOrDie("requestAnimationFrame")(t)
        }
    };

    function vS(t) {
        return t.naturalWidth || t.width
    }

    function bS(t) {
        return t.naturalHeight || t.height
    }
    var yS = window.Promise ? window.Promise : function() {
        var i = function(t) {
                if ("object" != typeof this) throw new TypeError("Promises must be constructed via new");
                if ("function" != typeof t) throw new TypeError("not a function");
                this._state = null, this._value = null, this._deferreds = [], f(t, o(r, this), o(a, this))
            },
            t = i.immediateFn || "function" == typeof window.setImmediate && window.setImmediate || function(t) {
                H.setTimeout(t, 1)
            };

        function o(t, n) {
            return function() {
                return t.apply(n, arguments)
            }
        }
        var e = Array.isArray || function(t) {
            return "[object Array]" === Object.prototype.toString.call(t)
        };

        function u(o) {
            var r = this;
            null !== this._state ? t(function() {
                var t = r._state ? o.onFulfilled : o.onRejected;
                if (null !== t) {
                    var n;
                    try {
                        n = t(r._value)
                    } catch (e) {
                        return void o.reject(e)
                    }
                    o.resolve(n)
                } else(r._state ? o.resolve : o.reject)(r._value)
            }) : this._deferreds.push(o)
        }

        function r(t) {
            try {
                if (t === this) throw new TypeError("A promise cannot be resolved with itself.");
                if (t && ("object" == typeof t || "function" == typeof t)) {
                    var n = t.then;
                    if ("function" == typeof n) return void f(o(n, t), o(r, this), o(a, this))
                }
                this._state = !0, this._value = t, c.call(this)
            } catch (e) {
                a.call(this, e)
            }
        }

        function a(t) {
            this._state = !1, this._value = t, c.call(this)
        }

        function c() {
            for (var t = 0, n = this._deferreds; t < n.length; t++) {
                var e = n[t];
                u.call(this, e)
            }
            this._deferreds = []
        }

        function s(t, n, e, o) {
            this.onFulfilled = "function" == typeof t ? t : null, this.onRejected = "function" == typeof n ? n : null, this.resolve = e, this.reject = o
        }

        function f(t, n, e) {
            var o = !1;
            try {
                t(function(t) {
                    o || (o = !0, n(t))
                }, function(t) {
                    o || (o = !0, e(t))
                })
            } catch (r) {
                if (o) return;
                o = !0, e(r)
            }
        }
        return i.prototype["catch"] = function(t) {
            return this.then(null, t)
        }, i.prototype.then = function(e, o) {
            var r = this;
            return new i(function(t, n) {
                u.call(r, new s(e, o, t, n))
            })
        }, i.all = function() {
            for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
            var c = Array.prototype.slice.call(1 === t.length && e(t[0]) ? t[0] : t);
            return new i(function(r, i) {
                if (0 === c.length) return r([]);
                var u = c.length;

                function a(n, t) {
                    try {
                        if (t && ("object" == typeof t || "function" == typeof t)) {
                            var e = t.then;
                            if ("function" == typeof e) return void e.call(t, function(t) {
                                a(n, t)
                            }, i)
                        }
                        c[n] = t, 0 == --u && r(c)
                    } catch (o) {
                        i(o)
                    }
                }
                for (var t = 0; t < c.length; t++) a(t, c[t])
            })
        }, i.resolve = function(n) {
            return n && "object" == typeof n && n.constructor === i ? n : new i(function(t) {
                t(n)
            })
        }, i.reject = function(e) {
            return new i(function(t, n) {
                n(e)
            })
        }, i.race = function(r) {
            return new i(function(t, n) {
                for (var e = 0, o = r; e < o.length; e++) o[e].then(t, n)
            })
        }, i
    }();

    function xS(t) {
        var n = t.split(","),
            e = /data:([^;]+)/.exec(n[0]);
        if (!e) return et.none();
        for (var o, r = e[1], i = n[1], u = hS.atob(i), a = u.length, c = Math.ceil(a / 1024), s = new Array(c), f = 0; f < c; ++f) {
            for (var l = 1024 * f, d = Math.min(l + 1024, a), m = new Array(d - l), g = l, p = 0; g < d; ++p, ++g) m[p] = u[g].charCodeAt(0);
            s[f] = (o = m, new(on.getOrDie("Uint8Array"))(o))
        }
        return et.some(function h(t, n) {
            return new(on.getOrDie("Blob"))(t, n)
        }(s, {
            type: r
        }))
    }

    function wS(t, o, r) {
        return o = o || "image/png", H.HTMLCanvasElement.prototype.toBlob ? new yS(function(n, e) {
            t.toBlob(function(t) {
                t ? n(t) : e()
            }, o, r)
        }) : function n(e) {
            return new yS(function(t, n) {
                xS(e).fold(function() {
                    n("uri is not base64: " + e)
                }, t)
            })
        }(t.toDataURL(o, r))
    }

    function SS(t) {
        return function n(a) {
            return new yS(function(t, n) {
                var e = H.URL.createObjectURL(a),
                    o = new H.Image,
                    r = function() {
                        o.removeEventListener("load", i), o.removeEventListener("error", u)
                    };

                function i() {
                    r(), t(o)
                }

                function u() {
                    r(), n("Unable to load data of type " + a.type + ": " + e)
                }
                o.addEventListener("load", i), o.addEventListener("error", u), o.src = e, o.complete && i()
            })
        }(t).then(function(t) {
            ! function e(t) {
                H.URL.revokeObjectURL(t.src)
            }(t);
            var n = dS(vS(t), bS(t));
            return gS(n).drawImage(t, 0, 0), n
        })
    }

    function CS(o) {
        return new yS(function(t) {
            var n = function e() {
                return new(on.getOrDie("FileReader"))
            }();
            n.onloadend = function() {
                t(n.result)
            }, n.readAsDataURL(o)
        })
    }

    function kS(t, n, e) {
        var o = n.type;

        function r(n, e) {
            return t.then(function(t) {
                return function o(t, n, e) {
                    return n = n || "image/png", t.toDataURL(n, e)
                }(t, n, e)
            })
        }
        return {
            getType: nt(o),
            toBlob: function i() {
                return yS.resolve(n)
            },
            toDataURL: function u() {
                return e
            },
            toBase64: function a() {
                return e.split(",")[1]
            },
            toAdjustedBlob: function c(n, e) {
                return t.then(function(t) {
                    return wS(t, n, e)
                })
            },
            toAdjustedDataURL: r,
            toAdjustedBase64: function s(t, n) {
                return r(t, n).then(function(t) {
                    return t.split(",")[1]
                })
            },
            toCanvas: function f() {
                return t.then(mS)
            }
        }
    }

    function OS(n, t) {
        return wS(n, t).then(function(t) {
            return kS(yS.resolve(n), t, n.toDataURL())
        })
    }
    var ES = function(t) {
        return function e(n) {
            return CS(n).then(function(t) {
                return kS(SS(n), n, t)
            })
        }(t)
    };

    function TS(t, n, e) {
        var o = "string" == typeof t ? parseFloat(t) : t;
        return e < o ? o = e : o < n && (o = n), o
    }
    var BS = [0, .01, .02, .04, .05, .06, .07, .08, .1, .11, .12, .14, .15, .16, .17, .18, .2, .21, .22, .24, .25, .27, .28, .3, .32, .34, .36, .38, .4, .42, .44, .46, .48, .5, .53, .56, .59, .62, .65, .68, .71, .74, .77, .8, .83, .86, .89, .92, .95, .98, 1, 1.06, 1.12, 1.18, 1.24, 1.3, 1.36, 1.42, 1.48, 1.54, 1.6, 1.66, 1.72, 1.78, 1.84, 1.9, 1.96, 2, 2.12, 2.25, 2.37, 2.5, 2.62, 2.75, 2.87, 3, 3.2, 3.4, 3.6, 3.8, 4, 4.3, 4.7, 4.9, 5, 5.5, 6, 6.5, 6.8, 7, 7.3, 7.5, 7.8, 8, 8.4, 8.7, 9, 9.4, 9.6, 9.8, 10];

    function AS(t, n) {
        for (var e, o = [], r = new Array(25), i = 0; i < 5; i++) {
            for (var u = 0; u < 5; u++) o[u] = n[u + 5 * i];
            for (u = 0; u < 5; u++) {
                for (var a = e = 0; a < 5; a++) e += t[u + 5 * a] * o[a];
                r[u + 5 * i] = e
            }
        }
        return r
    }

    function DS(n, e) {
        return n.toCanvas().then(function(t) {
            return function i(t, n, e) {
                var o = gS(t);
                var r = function B(t, n) {
                    for (var e, o, r, i, u = t.data, a = n[0], c = n[1], s = n[2], f = n[3], l = n[4], d = n[5], m = n[6], g = n[7], p = n[8], h = n[9], v = n[10], b = n[11], y = n[12], x = n[13], w = n[14], S = n[15], C = n[16], k = n[17], O = n[18], E = n[19], T = 0; T < u.length; T += 4) e = u[T], o = u[T + 1], r = u[T + 2], i = u[T + 3], u[T] = e * a + o * c + r * s + i * f + l, u[T + 1] = e * d + o * m + r * g + i * p + h, u[T + 2] = e * v + o * b + r * y + i * x + w, u[T + 3] = e * S + o * C + r * k + i * O + E;
                    return t
                }(o.getImageData(0, 0, t.width, t.height), e);
                return o.putImageData(r, 0, 0), OS(t, n)
            }(t, n.getType(), e)
        })
    }

    function _S(n, e) {
        return n.toCanvas().then(function(t) {
            return function u(t, n, e) {
                var o = gS(t);
                var r = o.getImageData(0, 0, t.width, t.height),
                    i = o.getImageData(0, 0, t.width, t.height);
                return i = function S(t, n, e) {
                    function o(t, n, e) {
                        return e < t ? t = e : t < n && (t = n), t
                    }
                    for (var r = Math.round(Math.sqrt(e.length)), i = Math.floor(r / 2), u = t.data, a = n.data, c = t.width, s = t.height, f = 0; f < s; f++)
                        for (var l = 0; l < c; l++) {
                            for (var d = 0, m = 0, g = 0, p = 0; p < r; p++)
                                for (var h = 0; h < r; h++) {
                                    var v = o(l + h - i, 0, c - 1),
                                        b = o(f + p - i, 0, s - 1),
                                        y = 4 * (b * c + v),
                                        x = e[p * r + h];
                                    d += u[y] * x, m += u[y + 1] * x, g += u[y + 2] * x
                                }
                            var w = 4 * (f * c + l);
                            a[w] = o(d, 0, 255), a[w + 1] = o(m, 0, 255), a[w + 2] = o(g, 0, 255)
                        }
                    return n
                }(r, i, e), o.putImageData(i, 0, 0), OS(t, n)
            }(t, n.getType(), e)
        })
    }

    function MS(e) {
        return function(t, n) {
            return DS(t, e([1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1], n))
        }
    }
    var FS = function __(n) {
            return function(t) {
                return DS(t, n)
            }
        }([-1, 0, 0, 0, 255, 0, -1, 0, 0, 255, 0, 0, -1, 0, 255, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1]),
        IS = MS(function M_(t, n) {
            return AS(t, [1, 0, 0, 0, n = TS(255 * n, -255, 255), 0, 1, 0, 0, n, 0, 0, 1, 0, n, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1])
        }),
        RS = MS(function F_(t, n) {
            var e;
            return n = TS(n, -1, 1), AS(t, [(e = (n *= 100) < 0 ? 127 + n / 100 * 127 : 127 * (e = 0 == (e = n % 1) ? BS[n] : BS[Math.floor(n)] * (1 - e) + BS[Math.floor(n) + 1] * e) + 127) / 127, 0, 0, 0, .5 * (127 - e), 0, e / 127, 0, 0, .5 * (127 - e), 0, 0, e / 127, 0, .5 * (127 - e), 0, 0, 0, 1, 0, 0, 0, 0, 0, 1])
        }),
        VS = function(t, n, e, o) {
            return DS(t, function r(t, n, e, o) {
                return AS(t, [n = TS(n, 0, 2), 0, 0, 0, 0, 0, e = TS(e, 0, 2), 0, 0, 0, 0, 0, o = TS(o, 0, 2), 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1])
            }([1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1], n, e, o))
        },
        NS = function I_(n) {
            return function(t) {
                return _S(t, n)
            }
        }([0, -1, 0, -1, 5, -1, 0, -1, 0]),
        HS = function R_(c) {
            return function(n, e) {
                return n.toCanvas().then(function(t) {
                    return function(t, n, e) {
                        for (var o = gS(t), r = new Array(256), i = 0; i < r.length; i++) r[i] = c(i, e);
                        var u = function a(t, n) {
                            for (var e = t.data, o = 0; o < e.length; o += 4) e[o] = n[e[o]], e[o + 1] = n[e[o + 1]], e[o + 2] = n[e[o + 2]];
                            return t
                        }(o.getImageData(0, 0, t.width, t.height), r);
                        return o.putImageData(u, 0, 0), OS(t, n)
                    }(t, n.getType(), e)
                })
            }
        }(function(t, n) {
            return 255 * Math.pow(t / 255, 1 - n)
        });

    function PS(t, n, e) {
        var o = vS(t),
            r = bS(t),
            i = n / o,
            u = e / r,
            a = !1;
        (i < .5 || 2 < i) && (i = i < .5 ? .5 : 2, a = !0), (u < .5 || 2 < u) && (u = u < .5 ? .5 : 2, a = !0);
        var c = function f(a, c, s) {
            return new yS(function(t) {
                var n = vS(a),
                    e = bS(a),
                    o = Math.floor(n * c),
                    r = Math.floor(e * s),
                    i = dS(o, r),
                    u = gS(i);
                u.drawImage(a, 0, 0, n, e, 0, 0, o, r), t(i)
            })
        }(t, i, u);
        return a ? c.then(function(t) {
            return PS(t, n, e)
        }) : c
    }

    function zS(n, e) {
        return n.toCanvas().then(function(t) {
            return function a(t, n, e) {
                var o = dS(t.width, t.height),
                    r = gS(o),
                    i = 0,
                    u = 0;
                90 !== (e = e < 0 ? 360 + e : e) && 270 !== e || pS(o, o.height, o.width);
                90 !== e && 180 !== e || (i = o.width);
                270 !== e && 180 !== e || (u = o.height);
                return r.translate(i, u), r.rotate(e * Math.PI / 180), r.drawImage(t, 0, 0), OS(o, n)
            }(t, n.getType(), e)
        })
    }

    function LS(n, e) {
        return n.toCanvas().then(function(t) {
            return function i(t, n, e) {
                var o = dS(t.width, t.height),
                    r = gS(o);
                "v" === e ? (r.scale(1, -1), r.drawImage(t, 0, -o.height)) : (r.scale(-1, 1), r.drawImage(t, -o.width, 0));
                return OS(o, n)
            }(t, n.getType(), e)
        })
    }

    function jS(n, e, o, r, i) {
        return n.toCanvas().then(function(t) {
            return function a(t, n, e, o, r, i) {
                var u = dS(r, i);
                return gS(u).drawImage(t, -e, -o), OS(u, n)
            }(t, n.getType(), e, o, r, i)
        })
    }
    var US = function(t) {
            return FS(t)
        },
        WS = function(t) {
            return NS(t)
        },
        GS = function(t, n) {
            return HS(t, n)
        },
        XS = function(t, n) {
            return IS(t, n)
        },
        YS = function(t, n) {
            return RS(t, n)
        },
        qS = function(t, n) {
            return LS(t, n)
        },
        KS = function(t, n, e) {
            return function r(n, e, o) {
                return n.toCanvas().then(function(t) {
                    return PS(t, e, o).then(function(t) {
                        return OS(t, n.getType())
                    })
                })
            }(t, n, e)
        },
        $S = function(t, n) {
            return zS(t, n)
        },
        JS = function(t, n) {
            return P({
                dom: {
                    tag: "span",
                    innerHtml: t,
                    classes: ["tox-icon", "tox-tbtn__icon-wrap"]
                }
            }, n)
        },
        QS = function(t, n) {
            return JS(kg(t, n), {})
        },
        ZS = function(t, n) {
            return JS(kg(t, n), {
                behaviours: Wu([wm.config({})])
            })
        },
        tC = function(t, n, e) {
            return {
                dom: {
                    tag: "span",
                    innerHtml: e.translate(t),
                    classes: [n + "__select-label"]
                },
                behaviours: Wu([wm.config({})])
            }
        },
        nC = function(t, n, e, o, r) {
            void 0 === e && (e = []);
            var i = n.fold(function() {
                    return {}
                }, function(t) {
                    return {
                        action: t
                    }
                }),
                u = P({
                    buttonBehaviours: Wu([th(t.disabled), Iy.config({}), rg("button press", [dr("click"), dr("mousedown")])].concat(e)),
                    eventOrder: {
                        click: ["button press", "alloy.base.behaviour"],
                        mousedown: ["button press", "alloy.base.behaviour"]
                    }
                }, i),
                a = bt(u, {
                    dom: o
                });
            return bt(a, {
                components: r
            })
        },
        eC = function(t, n, e, o) {
            void 0 === o && (o = []);
            var r = {
                    tag: "button",
                    classes: ["tox-tbtn"],
                    attributes: t.tooltip.map(function(t) {
                        return {
                            "aria-label": e.translate(t),
                            title: e.translate(t)
                        }
                    }).getOr({})
                },
                i = t.icon.map(function(t) {
                    return QS(t, e.icons)
                }),
                u = ah([i]);
            return nC(t, n, o, r, u)
        },
        oC = function(t, n, e, o) {
            void 0 === o && (o = []);
            var r = eC(t, et.some(n), e, o);
            return wg.sketch(r)
        },
        rC = function(t, n, e, o) {
            void 0 === o && (o = []);
            var r = e.translate(t.text),
                i = t.icon ? t.icon.map(function(t) {
                    return QS(t, e.icons)
                }) : et.none(),
                u = i.isSome() ? ah([i]) : [],
                a = i.isSome() ? {} : {
                    innerHtml: r
                },
                c = (t.primary ? ["tox-button"] : ["tox-button", "tox-button--secondary"]).concat(i.isSome() ? ["tox-button--icon"] : []);
            return function(t, n, e, o, r) {
                void 0 === e && (e = []);
                var i = nC(t, et.some(n), e, o, r);
                return wg.sketch(i)
            }(t, n, o, P({
                tag: "button",
                classes: c
            }, a, {
                attributes: {
                    title: r
                }
            }), u)
        },
        iC = function(n, e) {
            return function(t) {
                "custom" === e ? Lo(t, Sb, {
                    name: n,
                    value: {}
                }) : "submit" === e ? zo(t, Cb) : "cancel" === e ? zo(t, wb) : H.console.error("Unknown button type: ", e)
            }
        },
        uC = function(t, n, e) {
            var o = iC(t.name, n);
            return rC(t, o, e, [])
        },
        aC = nt([Zn("field1Name", "field1"), Zn("field2Name", "field2"), Iu("onLockedChange"), Du(["lockClass"]), Zn("locked", !1), rf("coupledFieldBehaviours", [ll, Im])]),
        cC = function(t, i) {
            return Df({
                factory: Db,
                name: t,
                overrides: function(r) {
                    return {
                        fieldBehaviours: Wu([rg("coupled-input-behaviour", [mr(fo(), function(e) {
                            var t, n, o;
                            (t = e, n = r, o = i, Wf(t, n, o).bind(ll.getCurrent)).each(function(n) {
                                Wf(e, r, "lock").each(function(t) {
                                    Jm.isOn(t) && r.onLockedChange(e, n, t)
                                })
                            })
                        })])])
                    }
                }
            })
        },
        sC = nt([cC("field1", "field2"), cC("field2", "field1"), Df({
            factory: wg,
            schema: [Pn("dom")],
            name: "lock",
            overrides: function(t) {
                return {
                    buttonBehaviours: Wu([Jm.config({
                        selected: t.locked,
                        toggleClass: t.markers.lockClass,
                        aria: {
                            mode: "pressed"
                        }
                    })])
                }
            }
        })]),
        fC = al({
            name: "FormCoupledInputs",
            configFields: aC(),
            partFields: sC(),
            factory: function(o, t, n, e) {
                return {
                    uid: o.uid,
                    dom: o.dom,
                    components: t,
                    behaviours: uf(o.coupledFieldBehaviours, [ll.config({
                        find: et.some
                    }), Im.config({
                        store: {
                            mode: "manual",
                            getValue: function(t) {
                                var n, e = Kf(t, o, ["field1", "field2"]);
                                return (n = {})[o.field1Name] = Im.getValue(e.field1()), n[o.field2Name] = Im.getValue(e.field2()), n
                            },
                            setValue: function(t, n) {
                                var e = Kf(t, o, ["field1", "field2"]);
                                Nt(n, o.field1Name) && Im.setValue(e.field1(), n[o.field1Name]), Nt(n, o.field2Name) && Im.setValue(e.field2(), n[o.field2Name])
                            }
                        }
                    })]),
                    apis: {
                        getField1: function(t) {
                            return Wf(t, o, "field1")
                        },
                        getField2: function(t) {
                            return Wf(t, o, "field2")
                        },
                        getLock: function(t) {
                            return Wf(t, o, "lock")
                        }
                    }
                }
            },
            apis: {
                getField1: function(t, n) {
                    return t.getField1(n)
                },
                getField2: function(t, n) {
                    return t.getField2(n)
                },
                getLock: function(t, n) {
                    return t.getLock(n)
                }
            }
        }),
        lC = function(t) {
            var n = /^\s*(\d+(?:\.\d+)?)\s*(|cm|mm|in|px|pt|pc|em|ex|ch|rem|vw|vh|vmin|vmax|%)\s*$/.exec(t);
            if (null === n) return z.error(t);
            var e = parseFloat(n[1]),
                o = n[2];
            return z.value({
                value: e,
                unit: o
            })
        },
        dC = function(t, n) {
            var e = {
                    "": 96,
                    px: 96,
                    pt: 72,
                    cm: 2.54,
                    pc: 12,
                    mm: 25.4,
                    "in": 1
                },
                o = function(t) {
                    return Object.prototype.hasOwnProperty.call(e, t)
                };
            return t.unit === n ? et.some(t.value) : o(t.unit) && o(n) ? e[t.unit] === e[n] ? et.some(t.value) : et.some(t.value / e[t.unit] * e[n]) : et.none()
        },
        mC = function(t) {
            return et.none()
        },
        gC = function(t, n) {
            return function(t, n) {
                for (var e = [], o = 0; o < t.length; o++) {
                    var r = t[o];
                    if (!r.isSome()) return et.none();
                    e.push(r.getOrDie())
                }
                return et.some(n.apply(null, e))
            }([lC(t).toOption(), lC(n).toOption()], function(t, o) {
                return dC(t, o.unit).map(function(t) {
                    return o.value / t
                }).map(function(t) {
                    return n = t, e = o.unit,
                        function(t) {
                            return dC(t, e).map(function(t) {
                                return {
                                    value: t * n,
                                    unit: e
                                }
                            })
                        };
                    var n, e
                }).getOr(mC)
            }).getOr(mC)
        },
        pC = function(o, n) {
            var a = mC,
                r = oi("ratio-event"),
                t = fC.parts().lock({
                    dom: {
                        tag: "button",
                        classes: ["tox-lock", "tox-button", "tox-button--naked", "tox-button--icon"],
                        attributes: {
                            title: n.translate(o.label.getOr("Constrain proportions"))
                        }
                    },
                    components: [{
                        dom: {
                            tag: "span",
                            classes: ["tox-icon", "tox-lock-icon__lock"],
                            innerHtml: kg("lock", n.icons)
                        }
                    }, {
                        dom: {
                            tag: "span",
                            classes: ["tox-icon", "tox-lock-icon__unlock"],
                            innerHtml: kg("unlock", n.icons)
                        }
                    }],
                    buttonBehaviours: Wu([Iy.config({})])
                }),
                e = function(t) {
                    return {
                        dom: {
                            tag: "div",
                            classes: ["tox-form__group"]
                        },
                        components: t
                    }
                },
                i = function(e) {
                    return Db.parts().field({
                        factory: wy,
                        inputClasses: ["tox-textfield"],
                        inputBehaviours: Wu([Iy.config({}), rg("size-input-events", [mr(uo(), function(t, n) {
                            Lo(t, r, {
                                isField1: e
                            })
                        }), mr(lo(), function(t, n) {
                            Lo(t, yb, {
                                name: o.name
                            })
                        })])]),
                        selectOnFocus: !1
                    })
                },
                u = function(t) {
                    return {
                        dom: {
                            tag: "label",
                            classes: ["tox-label"],
                            innerHtml: n.translate(t)
                        }
                    }
                },
                c = fC.parts().field1(e([Db.parts().label(u("Width")), i(!0)])),
                s = fC.parts().field2(e([Db.parts().label(u("Height")), i(!1)]));
            return fC.sketch({
                dom: {
                    tag: "div",
                    classes: ["tox-form__group"]
                },
                components: [{
                    dom: {
                        tag: "div",
                        classes: ["tox-form__controls-h-stack"]
                    },
                    components: [c, s, e([u("&nbsp;"), t])]
                }],
                field1Name: "width",
                field2Name: "height",
                locked: !0,
                markers: {
                    lockClass: "tox-locked"
                },
                onLockedChange: function(t, i, n) {
                    lC(Im.getValue(t)).each(function(t) {
                        a(t).each(function(t) {
                            var n, e, o, r;
                            Im.setValue(i, (o = {
                                "": 0,
                                px: 0,
                                pt: 1,
                                mm: 1,
                                pc: 2,
                                ex: 2,
                                em: 2,
                                ch: 2,
                                rem: 2,
                                cm: 3,
                                "in": 4,
                                "%": 4
                            }, -1 !== (r = (n = t).value.toFixed((e = n.unit) in o ? o[e] : 1)).indexOf(".") && (r = r.replace(/\.?0*$/, "")), r + n.unit))
                        })
                    })
                },
                coupledFieldBehaviours: Wu([Qp.config({}), rg("size-input-events2", [mr(r, function(t, n) {
                    var e = n.event().isField1(),
                        o = e ? fC.getField1(t) : fC.getField2(t),
                        r = e ? fC.getField2(t) : fC.getField1(t),
                        i = o.map(Im.getValue).getOr(""),
                        u = r.map(Im.getValue).getOr("");
                    a = gC(i, u)
                })])])
            })
        },
        hC = {
            undo: nt(oi("undo")),
            redo: nt(oi("redo")),
            zoom: nt(oi("zoom")),
            back: nt(oi("back")),
            apply: nt(oi("apply")),
            swap: nt(oi("swap")),
            transform: nt(oi("transform")),
            tempTransform: nt(oi("temp-transform")),
            transformApply: nt(oi("transform-apply"))
        },
        vC = nt("save-state"),
        bC = nt("disable"),
        yC = nt("enable"),
        xC = {
            formActionEvent: Sb,
            saveState: vC,
            disable: bC,
            enable: yC
        },
        wC = function(a, c) {
            var t = function(t, n, e, o) {
                    return Sg(rC({
                        name: t,
                        text: t,
                        disabled: e,
                        primary: o,
                        icon: et.none()
                    }, n, c))
                },
                n = function(t, n, e, o) {
                    return Sg(oC({
                        name: t,
                        icon: et.some(t),
                        tooltip: et.some(n),
                        disabled: o,
                        primary: !1
                    }, e, c))
                },
                u = function(t, e) {
                    t.map(function(t) {
                        var n = t.get(e);
                        n.hasConfigured(Qp) && Qp.disable(n)
                    })
                },
                s = function(t, e) {
                    t.map(function(t) {
                        var n = t.get(e);
                        n.hasConfigured(Qp) && Qp.enable(n)
                    })
                },
                f = {
                    tag: "div",
                    classes: ["tox-image-tools__toolbar", "tox-image-tools-edit-panel"]
                },
                e = et.none(),
                o = tt,
                r = function(t, n, e) {
                    Lo(t, n, e)
                },
                i = function(t) {
                    return zo(t, xC.disable())
                },
                l = function(t) {
                    return zo(t, xC.enable())
                },
                d = function(t, n) {
                    i(t), r(t, hC.transform(), {
                        transform: n
                    }), l(t)
                },
                m = function(t) {
                    return function() {
                        Z.getOpt(t).each(function(t) {
                            wm.set(t, [J])
                        })
                    }
                },
                g = function(t, n) {
                    i(t), r(t, hC.transformApply(), {
                        transform: n,
                        swap: m(t)
                    }), l(t)
                },
                p = function() {
                    return t("Back", function(t) {
                        return r(t, hC.back(), {
                            swap: m(t)
                        })
                    }, !1, !1)
                },
                h = function() {
                    return Sg({
                        dom: {
                            tag: "div",
                            classes: ["tox-spacer"]
                        },
                        behaviours: Wu([Qp.config({})])
                    })
                },
                v = function() {
                    return t("Apply", function(t) {
                        return r(t, hC.apply(), {
                            swap: m(t)
                        })
                    }, !0, !0)
                },
                b = function() {
                    return function(t) {
                        var n, e, o, r, i, u = a.getRect();
                        return n = t, e = u.x, o = u.y, r = u.w, i = u.h, jS(n, e, o, r, i)
                    }
                },
                y = [p(), h(), t("Apply", function(t) {
                    var n = b();
                    g(t, n), a.hideCrop()
                }, !1, !0)],
                x = ab.sketch({
                    dom: f,
                    components: y.map(function(t) {
                        return t.asSpec()
                    }),
                    containerBehaviours: Wu([rg("image-tools-crop-buttons-events", [mr(xC.disable(), function(t, n) {
                        u(y, t)
                    }), mr(xC.enable(), function(t, n) {
                        s(y, t)
                    })])])
                }),
                w = Sg(pC({
                    name: "size",
                    label: e,
                    constrain: !0
                }, c)),
                S = [p(), h(), w, h(), t("Apply", function(a) {
                    w.getOpt(a).each(function(t) {
                        var n, e, o = Im.getValue(t),
                            r = parseInt(o.width, 10),
                            i = parseInt(o.height, 10),
                            u = (n = r, e = i, function(t) {
                                return KS(t, n, e)
                            });
                        g(a, u)
                    })
                }, !1, !0)],
                C = ab.sketch({
                    dom: f,
                    components: S.map(function(t) {
                        return t.asSpec()
                    }),
                    containerBehaviours: Wu([rg("image-tools-resize-buttons-events", [mr(xC.disable(), function(t, n) {
                        u(S, t)
                    }), mr(xC.enable(), function(t, n) {
                        s(S, t)
                    })])])
                }),
                k = function(n, e) {
                    return function(t) {
                        return n(t, e)
                    }
                },
                O = k(qS, "h"),
                E = k(qS, "v"),
                T = k($S, -90),
                B = k($S, 90),
                A = function(t, n) {
                    var e, o;
                    o = n, i(e = t), r(e, hC.tempTransform(), {
                        transform: o
                    }), l(e)
                },
                D = [p(), h(), n("flip-horizontally", "Flip horizontally", function(t) {
                    A(t, O)
                }, !1), n("flip-vertically", "Flip vertically", function(t) {
                    A(t, E)
                }, !1), n("rotate-left", "Rotate counterclockwise", function(t) {
                    A(t, T)
                }, !1), n("rotate-right", "Rotate clockwise", function(t) {
                    A(t, B)
                }, !1), h(), v()],
                _ = ab.sketch({
                    dom: f,
                    components: D.map(function(t) {
                        return t.asSpec()
                    }),
                    containerBehaviours: Wu([rg("image-tools-fliprotate-buttons-events", [mr(xC.disable(), function(t, n) {
                        u(D, t)
                    }), mr(xC.enable(), function(t, n) {
                        s(D, t)
                    })])])
                }),
                M = function(t, n, e, o, r) {
                    var i = _w.parts().label({
                            dom: {
                                tag: "label",
                                classes: ["tox-label"],
                                innerHtml: c.translate(t)
                            }
                        }),
                        u = _w.parts().spectrum({
                            dom: {
                                tag: "div",
                                classes: ["tox-slider__rail"],
                                attributes: {
                                    role: "presentation"
                                }
                            }
                        }),
                        a = _w.parts().thumb({
                            dom: {
                                tag: "div",
                                classes: ["tox-slider__handle"],
                                attributes: {
                                    role: "presentation"
                                }
                            }
                        });
                    return Sg(_w.sketch({
                        dom: {
                            tag: "div",
                            classes: ["tox-slider"],
                            attributes: {
                                role: "presentation"
                            }
                        },
                        model: {
                            mode: "x",
                            minX: e,
                            maxX: r,
                            getInitialValue: nt({
                                x: nt(o)
                            })
                        },
                        components: [i, u, a],
                        sliderBehaviours: Wu([Pm.config({})]),
                        onChoose: n
                    }))
                },
                F = function(t, n, e, o, r) {
                    return [p(), (i = t, u = n, a = e, c = o, s = r, M(i, function(t, n, e) {
                        var o = k(u, e.x() / 100);
                        d(t, o)
                    }, a, c, s)), v()];
                    var i, u, a, c, s
                },
                I = function(t, n, e, o, r) {
                    var i = F(t, n, e, o, r);
                    return ab.sketch({
                        dom: f,
                        components: i.map(function(t) {
                            return t.asSpec()
                        }),
                        containerBehaviours: Wu([rg("image-tools-filter-panel-buttons-events", [mr(xC.disable(), function(t, n) {
                            u(i, t)
                        }), mr(xC.enable(), function(t, n) {
                            s(i, t)
                        })])])
                    })
                },
                R = [p(), h(), v()],
                V = ab.sketch({
                    dom: f,
                    components: R.map(function(t) {
                        return t.asSpec()
                    })
                }),
                N = I("Brightness", XS, -100, 0, 100),
                H = I("Contrast", YS, -100, 0, 100),
                P = I("Gamma", GS, -100, 0, 100),
                z = function(n, e, o) {
                    return function(t) {
                        return VS(t, n, e, o)
                    }
                },
                L = function(t) {
                    return M(t, function(a, t, n) {
                        var e = j.getOpt(a),
                            o = W.getOpt(a),
                            r = U.getOpt(a);
                        e.each(function(u) {
                            o.each(function(i) {
                                r.each(function(t) {
                                    var n = Im.getValue(u).x() / 100,
                                        e = Im.getValue(t).x() / 100,
                                        o = Im.getValue(i).x() / 100,
                                        r = z(n, e, o);
                                    d(a, r)
                                })
                            })
                        })
                    }, 0, 100, 200)
                },
                j = L("R"),
                U = L("G"),
                W = L("B"),
                G = [p(), j, U, W, v()],
                X = ab.sketch({
                    dom: f,
                    components: G.map(function(t) {
                        return t.asSpec()
                    })
                }),
                Y = function(n, e, o) {
                    return function(t) {
                        r(t, hC.swap(), {
                            transform: e,
                            swap: function() {
                                Z.getOpt(t).each(function(t) {
                                    wm.set(t, [n]), o(t)
                                })
                            }
                        })
                    }
                },
                q = et.some(WS),
                K = et.some(US),
                $ = [n("crop", "Crop", Y(x, e, function(t) {
                    a.showCrop()
                }), !1), n("resize", "Resize", Y(C, e, function(t) {
                    w.getOpt(t).each(function(t) {
                        var n = a.getMeasurements(),
                            e = n.width,
                            o = n.height;
                        Im.setValue(t, {
                            width: e,
                            height: o
                        })
                    })
                }), !1), n("orientation", "Orientation", Y(_, e, o), !1), n("brightness", "Brightness", Y(N, e, o), !1), n("sharpen", "Sharpen", Y(V, q, o), !1), n("contrast", "Contrast", Y(H, e, o), !1), n("color-levels", "Color levels", Y(X, e, o), !1), n("gamma", "Gamma", Y(P, e, o), !1), n("invert", "Invert", Y(V, K, o), !1)],
                J = ab.sketch({
                    dom: f,
                    components: $.map(function(t) {
                        return t.asSpec()
                    })
                }),
                Q = ab.sketch({
                    dom: {
                        tag: "div"
                    },
                    components: [J],
                    containerBehaviours: Wu([wm.config({})])
                }),
                Z = Sg(Q);
            return {
                memContainer: Z,
                getApplyButton: function(t) {
                    return Z.getOpt(t).map(function(t) {
                        var n = t.components()[0];
                        return n.components()[n.components().length - 1]
                    })
                }
            }
        },
        SC = tinymce.util.Tools.resolve("tinymce.dom.DomQuery"),
        CC = tinymce.util.Tools.resolve("tinymce.geom.Rect"),
        kC = tinymce.util.Tools.resolve("tinymce.util.Observable"),
        OC = tinymce.util.Tools.resolve("tinymce.util.Tools"),
        EC = tinymce.util.Tools.resolve("tinymce.util.VK");

    function TC(t) {
        var n, e;
        if (t.changedTouches)
            for (n = "screenX screenY pageX pageY clientX clientY".split(" "), e = 0; e < n.length; e++) t[n[e]] = t.changedTouches[0][n[e]]
    }

    function BC(t, r) {
        var i, u, n, a, c, f, l, d = r.document || H.document;
        r = r || {};
        var m = d.getElementById(r.handle || t);
        n = function(t) {
            var n, e, o = function s(t) {
                var n, e, o, r, i, u, a, c = Math.max;
                return n = t.documentElement, e = t.body, o = c(n.scrollWidth, e.scrollWidth), r = c(n.clientWidth, e.clientWidth), i = c(n.offsetWidth, e.offsetWidth), u = c(n.scrollHeight, e.scrollHeight), a = c(n.clientHeight, e.clientHeight), {
                    width: o < i ? r : o,
                    height: u < c(n.offsetHeight, e.offsetHeight) ? a : u
                }
            }(d);
            TC(t), t.preventDefault(), u = t.button, n = m, f = t.screenX, l = t.screenY, e = H.window.getComputedStyle ? H.window.getComputedStyle(n, null).getPropertyValue("cursor") : n.runtimeStyle.cursor, i = SC("<div></div>").css({
                position: "absolute",
                top: 0,
                left: 0,
                width: o.width,
                height: o.height,
                zIndex: 2147483647,
                opacity: 1e-4,
                cursor: e
            }).appendTo(d.body), SC(d).on("mousemove touchmove", c).on("mouseup touchend", a), r.start(t)
        }, c = function(t) {
            if (TC(t), t.button !== u) return a(t);
            t.deltaX = t.screenX - f, t.deltaY = t.screenY - l, t.preventDefault(), r.drag(t)
        }, a = function(t) {
            TC(t), SC(d).off("mousemove touchmove", c).off("mouseup touchend", a), i.remove(), r.stop && r.stop(t)
        }, this.destroy = function() {
            SC(m).off()
        }, SC(m).on("mousedown touchstart", n)
    }
    var AC = 0;
    var DC = function(n) {
            var f = Sg({
                    dom: {
                        tag: "div",
                        classes: ["tox-image-tools__image-bg"],
                        attributes: {
                            role: "presentation"
                        }
                    }
                }),
                l = ce(1),
                d = ce(et.none()),
                m = ce({
                    x: 0,
                    y: 0,
                    w: 1,
                    h: 1
                }),
                c = ce({
                    x: 0,
                    y: 0,
                    w: 1,
                    h: 1
                }),
                s = function(t, s) {
                    g.getOpt(t).each(function(t) {
                        var e = l.get(),
                            o = ca(t.element()),
                            r = la(t.element()),
                            i = s.dom().naturalWidth * e,
                            u = s.dom().naturalHeight * e,
                            a = Math.max(0, o / 2 - i / 2),
                            c = Math.max(0, r / 2 - u / 2),
                            n = {
                                left: a.toString() + "px",
                                top: c.toString() + "px",
                                width: i.toString() + "px",
                                height: u.toString() + "px",
                                position: "absolute"
                            };
                        Gi(s, n), f.getOpt(t).each(function(t) {
                            Gi(t.element(), n)
                        }), d.get().each(function(t) {
                            var n = m.get();
                            t.setRect({
                                x: n.x * e + a,
                                y: n.y * e + c,
                                w: n.w * e,
                                h: n.h * e
                            }), t.setClampRect({
                                x: a,
                                y: c,
                                w: i,
                                h: u
                            }), t.setViewPortRect({
                                x: 0,
                                y: 0,
                                w: o,
                                h: r
                            })
                        })
                    })
                },
                e = function(t, n) {
                    var e, a = fe.fromTag("img");
                    return Xr(a, "src", n), (e = a.dom(), new Wg(function(t) {
                        var n = function() {
                            e.removeEventListener("load", n), t(e)
                        };
                        e.complete ? t(e) : e.addEventListener("load", n)
                    })).then(function() {
                        return g.getOpt(t).map(function(t) {
                            var n = au({
                                element: a
                            });
                            wm.replaceAt(t, 1, et.some(n));
                            var e = c.get(),
                                o = {
                                    x: 0,
                                    y: 0,
                                    w: a.dom().naturalWidth,
                                    h: a.dom().naturalHeight
                                };
                            c.set(o);
                            var r, u, i = CC.inflate(o, -20, -20);
                            return m.set(i), e.w === o.w && e.h === o.h || (r = t, u = a, g.getOpt(r).each(function(t) {
                                var n = ca(t.element()),
                                    e = la(t.element()),
                                    o = u.dom().naturalWidth,
                                    r = u.dom().naturalHeight,
                                    i = Math.min(n / o, e / r);
                                1 <= i ? l.set(1) : l.set(i)
                            })), s(t, a), a
                        })
                    })
                },
                t = ab.sketch({
                    dom: {
                        tag: "div",
                        classes: ["tox-image-tools__image"]
                    },
                    components: [f.asSpec(), {
                        dom: {
                            tag: "img",
                            attributes: {
                                src: n
                            }
                        }
                    }, {
                        dom: {
                            tag: "div"
                        },
                        behaviours: Wu([rg("image-panel-crop-events", [wr(function(t) {
                            g.getOpt(t).each(function(t) {
                                var n = function S(s, e, f, o, r) {
                                    var l, u, n, i, a = "tox-",
                                        c = "tox-crid-" + AC++;

                                    function d(t, n) {
                                        return {
                                            x: n.x - t.x,
                                            y: n.y - t.y,
                                            w: n.w,
                                            h: n.h
                                        }
                                    }

                                    function m(t, n, e, o) {
                                        var r, i, u, a, c;
                                        r = n.x, i = n.y, u = n.w, a = n.h, r += e * t.deltaX, i += o * t.deltaY, (u += e * t.deltaW) < 20 && (u = 20), (a += o * t.deltaH) < 20 && (a = 20), c = s = CC.clamp({
                                            x: r,
                                            y: i,
                                            w: u,
                                            h: a
                                        }, f, "move" === t.name), c = d(f, c), l.fire("updateRect", {
                                            rect: c
                                        }), h(c)
                                    }

                                    function g(n) {
                                        function t(t, n) {
                                            n.h < 0 && (n.h = 0), n.w < 0 && (n.w = 0), SC("#" + c + "-" + t, o).css({
                                                left: n.x,
                                                top: n.y,
                                                width: n.w,
                                                height: n.h
                                            })
                                        }
                                        OC.each(u, function(t) {
                                            SC("#" + c + "-" + t.name, o).css({
                                                left: n.w * t.xMul + n.x,
                                                top: n.h * t.yMul + n.y
                                            })
                                        }), t("top", {
                                            x: e.x,
                                            y: e.y,
                                            w: e.w,
                                            h: n.y - e.y
                                        }), t("right", {
                                            x: n.x + n.w,
                                            y: n.y,
                                            w: e.w - n.x - n.w + e.x,
                                            h: n.h
                                        }), t("bottom", {
                                            x: e.x,
                                            y: n.y + n.h,
                                            w: e.w,
                                            h: e.h - n.y - n.h + e.y
                                        }), t("left", {
                                            x: e.x,
                                            y: n.y,
                                            w: n.x - e.x,
                                            h: n.h
                                        }), t("move", n)
                                    }

                                    function p(t) {
                                        g(s = t)
                                    }

                                    function h(t) {
                                        p(function e(t, n) {
                                            return {
                                                x: n.x + t.x,
                                                y: n.y + t.y,
                                                w: n.w,
                                                h: n.h
                                            }
                                        }(f, t))
                                    }
                                    return u = [{
                                            name: "move",
                                            xMul: 0,
                                            yMul: 0,
                                            deltaX: 1,
                                            deltaY: 1,
                                            deltaW: 0,
                                            deltaH: 0,
                                            label: "Crop Mask"
                                        }, {
                                            name: "nw",
                                            xMul: 0,
                                            yMul: 0,
                                            deltaX: 1,
                                            deltaY: 1,
                                            deltaW: -1,
                                            deltaH: -1,
                                            label: "Top Left Crop Handle"
                                        }, {
                                            name: "ne",
                                            xMul: 1,
                                            yMul: 0,
                                            deltaX: 0,
                                            deltaY: 1,
                                            deltaW: 1,
                                            deltaH: -1,
                                            label: "Top Right Crop Handle"
                                        }, {
                                            name: "sw",
                                            xMul: 0,
                                            yMul: 1,
                                            deltaX: 1,
                                            deltaY: 0,
                                            deltaW: -1,
                                            deltaH: 1,
                                            label: "Bottom Left Crop Handle"
                                        }, {
                                            name: "se",
                                            xMul: 1,
                                            yMul: 1,
                                            deltaX: 0,
                                            deltaY: 0,
                                            deltaW: 1,
                                            deltaH: 1,
                                            label: "Bottom Right Crop Handle"
                                        }], i = ["top", "right", "bottom", "left"],
                                        function v() {
                                            SC('<div id="' + c + '" class="' + a + 'croprect-container" role="grid" aria-dropeffect="execute">').appendTo(o), OC.each(i, function(t) {
                                                SC("#" + c, o).append('<div id="' + c + "-" + t + '"class="' + a + 'croprect-block" style="display: none" data-mce-bogus="all">')
                                            }), OC.each(u, function(t) {
                                                SC("#" + c, o).append('<div id="' + c + "-" + t.name + '" class="' + a + "croprect-handle " + a + "croprect-handle-" + t.name + '"style="display: none" data-mce-bogus="all" role="gridcell" tabindex="-1" aria-label="' + t.label + '" aria-grabbed="false" title="' + t.label + '">')
                                            }), n = OC.map(u, function t(n) {
                                                var e;
                                                return new BC(c, {
                                                    document: o.ownerDocument,
                                                    handle: c + "-" + n.name,
                                                    start: function() {
                                                        e = s
                                                    },
                                                    drag: function(t) {
                                                        m(n, e, t.deltaX, t.deltaY)
                                                    }
                                                })
                                            }), g(s), SC(o).on("focusin focusout", function(t) {
                                                SC(t.target).attr("aria-grabbed", "focus" === t.type ? "true" : "false")
                                            }), SC(o).on("keydown", function(n) {
                                                var i;

                                                function t(t, n, e, o, r) {
                                                    t.stopPropagation(), t.preventDefault(), m(i, e, o, r)
                                                }
                                                switch (OC.each(u, function(t) {
                                                    if (n.target.id === c + "-" + t.name) return i = t, !1
                                                }), n.keyCode) {
                                                    case EC.LEFT:
                                                        t(n, 0, s, -10, 0);
                                                        break;
                                                    case EC.RIGHT:
                                                        t(n, 0, s, 10, 0);
                                                        break;
                                                    case EC.UP:
                                                        t(n, 0, s, 0, -10);
                                                        break;
                                                    case EC.DOWN:
                                                        t(n, 0, s, 0, 10);
                                                        break;
                                                    case EC.ENTER:
                                                    case EC.SPACEBAR:
                                                        n.preventDefault(), r()
                                                }
                                            })
                                        }(), l = OC.extend({
                                            toggleVisibility: function b(t) {
                                                var n;
                                                n = OC.map(u, function(t) {
                                                    return "#" + c + "-" + t.name
                                                }).concat(OC.map(i, function(t) {
                                                    return "#" + c + "-" + t
                                                })).join(","), t ? SC(n, o).show() : SC(n, o).hide()
                                            },
                                            setClampRect: function y(t) {
                                                f = t, g(s)
                                            },
                                            setRect: p,
                                            getInnerRect: function t() {
                                                return d(f, s)
                                            },
                                            setInnerRect: h,
                                            setViewPortRect: function x(t) {
                                                e = t, g(s)
                                            },
                                            destroy: function w() {
                                                OC.each(n, function(t) {
                                                    t.destroy()
                                                }), n = []
                                            }
                                        }, kC)
                                }({
                                    x: 10,
                                    y: 10,
                                    w: 100,
                                    h: 100
                                }, {
                                    x: 0,
                                    y: 0,
                                    w: 200,
                                    h: 200
                                }, {
                                    x: 0,
                                    y: 0,
                                    w: 200,
                                    h: 200
                                }, t.element().dom(), function() {});
                                n.toggleVisibility(!1), n.on("updateRect", function(t) {
                                    var n = t.rect,
                                        e = l.get(),
                                        o = {
                                            x: Math.round(n.x / e),
                                            y: Math.round(n.y / e),
                                            w: Math.round(n.w / e),
                                            h: Math.round(n.h / e)
                                        };
                                    m.set(o)
                                }), d.set(et.some(n))
                            })
                        })])])
                    }],
                    containerBehaviours: Wu([wm.config({}), rg("image-panel-events", [wr(function(t) {
                        e(t, n)
                    })])])
                }),
                g = Sg(t);
            return {
                memContainer: g,
                updateSrc: e,
                zoom: function(t, n) {
                    var e = l.get(),
                        o = 0 < n ? Math.min(2, e + .1) : Math.max(.1, e - .1);
                    l.set(o), g.getOpt(t).each(function(t) {
                        var n = t.components()[1].element();
                        s(t, n)
                    })
                },
                showCrop: function() {
                    d.get().each(function(t) {
                        t.toggleVisibility(!0)
                    })
                },
                hideCrop: function() {
                    d.get().each(function(t) {
                        t.toggleVisibility(!1)
                    })
                },
                getRect: function() {
                    return m.get()
                },
                getMeasurements: function() {
                    var t = c.get();
                    return {
                        width: t.w,
                        height: t.h
                    }
                }
            }
        },
        _C = function(t, n, e, o, r) {
            return oC({
                name: t,
                icon: et.some(n),
                disabled: e,
                tooltip: et.some(t),
                primary: !1
            }, o, r)
        },
        MC = function(t, n) {
            n ? Qp.enable(t) : Qp.disable(t)
        },
        FC = function() {
            return on.getOrDie("URL")
        },
        IC = function(t) {
            return FC().createObjectURL(t)
        },
        RC = function(t) {
            FC().revokeObjectURL(t)
        };
    var VC, NC, HC, PC, zC = function(t) {
            var n = ce(t),
                e = ce(et.none()),
                r = function s() {
                    var e = [],
                        o = -1;

                    function t() {
                        return 0 < o
                    }

                    function n() {
                        return -1 !== o && o < e.length - 1
                    }
                    return {
                        data: e,
                        add: function r(t) {
                            var n;
                            return n = e.splice(++o), e.push(t), {
                                state: t,
                                removed: n
                            }
                        },
                        undo: function i() {
                            if (t()) return e[--o]
                        },
                        redo: function u() {
                            if (n()) return e[++o]
                        },
                        canUndo: t,
                        canRedo: n
                    }
                }();
            r.add(t);
            var i = function(t) {
                    n.set(t)
                },
                u = function(t) {
                    return {
                        blob: t,
                        url: IC(t)
                    }
                },
                a = function(t) {
                    RC(t.url)
                },
                o = function() {
                    e.get().each(a), e.set(et.none())
                },
                c = function(t) {
                    var n = u(t);
                    i(n);
                    var e, o = r.add(n).removed;
                    return e = o, OC.each(e, a), n.url
                };
            return {
                getBlobState: function() {
                    return n.get()
                },
                setBlobState: i,
                addBlobState: c,
                getTempState: function() {
                    return e.get().fold(function() {
                        return n.get()
                    }, function(t) {
                        return t
                    })
                },
                updateTempState: function(t) {
                    var n = u(t);
                    return o(), e.set(et.some(n)), n.url
                },
                addTempState: function(t) {
                    var n = u(t);
                    return e.set(et.some(n)), n.url
                },
                applyTempState: function(n) {
                    return e.get().fold(function() {}, function(t) {
                        c(t.blob), n()
                    })
                },
                destroyTempState: o,
                undo: function() {
                    var t = r.undo();
                    return i(t), t.url
                },
                redo: function() {
                    var t = r.redo();
                    return i(t), t.url
                },
                getHistoryStates: function() {
                    return {
                        undoEnabled: r.canUndo(),
                        redoEnabled: r.canRedo()
                    }
                }
            }
        },
        LC = function(t, n) {
            var e, o, r, u = zC(t.currentState),
                i = function(t) {
                    var n = u.getHistoryStates();
                    p.updateButtonUndoStates(t, n.undoEnabled, n.redoEnabled), Lo(t, xC.formActionEvent, {
                        name: xC.saveState(),
                        value: n.undoEnabled
                    })
                },
                a = function(t) {
                    return t.toBlob()
                },
                c = function(t) {
                    Lo(t, xC.formActionEvent, {
                        name: xC.disable(),
                        value: {}
                    })
                },
                s = function(t) {
                    h.getApplyButton(t).each(function(t) {
                        Qp.enable(t)
                    }), Lo(t, xC.formActionEvent, {
                        name: xC.enable(),
                        value: {}
                    })
                },
                f = function(t, n) {
                    return c(t), g.updateSrc(t, n)
                },
                l = function(n, t, e, o, r) {
                    return c(n), ES(t).then(e).then(a).then(o).then(function(t) {
                        return f(n, t).then(function(t) {
                            return i(n), r(), s(n), t
                        })
                    })["catch"](function(t) {
                        return H.console.log(t), s(n), t
                    })
                },
                d = function(t, n, e) {
                    var o = u.getBlobState().blob;
                    l(t, o, n, function(t) {
                        return u.updateTempState(t)
                    }, e)
                },
                m = function(t) {
                    var n = u.getBlobState().url;
                    return u.destroyTempState(), i(t), n
                },
                g = DC(t.currentState.url),
                p = (o = Sg(_C("Undo", "undo", !0, function(t) {
                    Lo(t, hC.undo(), {
                        direction: 1
                    })
                }, e = n)), r = Sg(_C("Redo", "redo", !0, function(t) {
                    Lo(t, hC.redo(), {
                        direction: 1
                    })
                }, e)), {
                    container: ab.sketch({
                        dom: {
                            tag: "div",
                            classes: ["tox-image-tools__toolbar", "tox-image-tools__sidebar"]
                        },
                        components: [o.asSpec(), r.asSpec(), _C("Zoom in", "zoom-in", !1, function(t) {
                            Lo(t, hC.zoom(), {
                                direction: 1
                            })
                        }, e), _C("Zoom out", "zoom-out", !1, function(t) {
                            Lo(t, hC.zoom(), {
                                direction: -1
                            })
                        }, e)]
                    }),
                    updateButtonUndoStates: function(t, n, e) {
                        o.getOpt(t).each(function(t) {
                            MC(t, n)
                        }), r.getOpt(t).each(function(t) {
                            MC(t, e)
                        })
                    }
                }),
                h = wC(g, n);
            return {
                dom: {
                    tag: "div",
                    attributes: {
                        role: "presentation"
                    }
                },
                components: [h.memContainer.asSpec(), g.memContainer.asSpec(), p.container],
                behaviours: Wu([Im.config({
                    store: {
                        mode: "manual",
                        getValue: function() {
                            return u.getBlobState()
                        }
                    }
                }), rg("image-tools-events", [mr(hC.undo(), function(n, t) {
                    var e = u.undo();
                    f(n, e).then(function(t) {
                        s(n), i(n)
                    })
                }), mr(hC.redo(), function(n, t) {
                    var e = u.redo();
                    f(n, e).then(function(t) {
                        s(n), i(n)
                    })
                }), mr(hC.zoom(), function(t, n) {
                    var e = n.event().direction();
                    g.zoom(t, e)
                }), mr(hC.back(), function(t, n) {
                    var e, o;
                    o = m(e = t), f(e, o).then(function(t) {
                        s(e)
                    }), n.event().swap()(), g.hideCrop()
                }), mr(hC.apply(), function(t, n) {
                    u.applyTempState(function() {
                        m(t), n.event().swap()()
                    })
                }), mr(hC.transform(), function(t, n) {
                    return d(t, n.event().transform(), tt)
                }), mr(hC.tempTransform(), function(t, n) {
                    return e = t, o = n.event().transform(), r = u.getTempState().blob, void l(e, r, o, function(t) {
                        return u.addTempState(t)
                    }, tt);
                    var e, o, r
                }), mr(hC.transformApply(), function(t, n) {
                    return e = t, o = n.event().transform(), r = n.event().swap(), i = u.getBlobState().blob, void l(e, i, o, function(t) {
                        var n = u.addBlobState(t);
                        return m(e), n
                    }, r);
                    var e, o, r, i
                }), mr(hC.swap(), function(n, t) {
                    var e;
                    e = n, p.updateButtonUndoStates(e, !1, !1);
                    var o = t.event().transform(),
                        r = t.event().swap();
                    o.fold(function() {
                        r()
                    }, function(t) {
                        d(n, t, r)
                    })
                })]), Ww()])
            }
        },
        jC = ul({
            name: "HtmlSelect",
            configFields: [Pn("options"), nf("selectBehaviours", [Pm, Im]), Zn("selectClasses", []), Zn("selectAttributes", {}), Yn("data")],
            factory: function(e, t) {
                var n = F(e.options, function(t) {
                        return {
                            dom: {
                                tag: "option",
                                value: t.value,
                                innerHtml: t.text
                            }
                        }
                    }),
                    o = e.data.map(function(t) {
                        return It("initialValue", t)
                    }).getOr({});
                return {
                    uid: e.uid,
                    dom: {
                        tag: "select",
                        classes: e.selectClasses,
                        attributes: e.selectAttributes
                    },
                    components: n,
                    behaviours: of(e.selectBehaviours, [Pm.config({}), Im.config({
                        store: P({
                            mode: "manual",
                            getValue: function(t) {
                                return Qi(t.element())
                            },
                            setValue: function(t, n) {
                                N(e.options, function(t) {
                                    return t.value === n
                                }).isSome() && Zi(t.element(), n)
                            }
                        }, o)
                    })])
                }
            }
        }),
        UC = function(e, n) {
            var t = e.label.map(function(t) {
                    return gy(t, n)
                }),
                o = [hm.config({
                    mode: "execution",
                    useEnter: !0 !== e.multiline,
                    useControlEnter: !0 === e.multiline,
                    execute: function(t) {
                        return zo(t, Cb), et.some(!0)
                    }
                }), rg("textfield-change", [mr(fo(), function(t, n) {
                    Lo(t, yb, {
                        name: e.name
                    })
                }), mr(yo(), function(t, n) {
                    Lo(t, yb, {
                        name: e.name
                    })
                })]), Iy.config({})],
                r = e.validation.map(function(o) {
                    return _y.config({
                        getRoot: function(t) {
                            return _r(t.element())
                        },
                        invalidClass: "tox-invalid",
                        validator: {
                            validate: function(t) {
                                var n = Im.getValue(t),
                                    e = o.validator(n);
                                return jb.pure(!0 === e ? z.value(n) : z.error(e))
                            },
                            validateOnLoad: o.validateOnLoad
                        }
                    })
                }).toArray(),
                i = Db.parts().field({
                    tag: !0 === e.multiline ? "textarea" : "input",
                    inputAttributes: e.placeholder.fold(function() {}, function(t) {
                        return {
                            placeholder: n.translate(t)
                        }
                    }),
                    inputClasses: [e.classname],
                    inputBehaviours: Wu(q([o, r])),
                    selectOnFocus: !1,
                    factory: wy
                }),
                u = e.flex ? ["tox-form__group--stretched"] : [];
            return fy(t, i, u)
        },
        WC = function(i) {
            return P({}, i, {
                toCached: function() {
                    return WC(i.toCached())
                },
                bindFuture: function(n) {
                    return WC(i.bind(function(t) {
                        return t.fold(function(t) {
                            return jb.pure(z.error(t))
                        }, function(t) {
                            return n(t)
                        })
                    }))
                },
                bindResult: function(n) {
                    return WC(i.map(function(t) {
                        return t.bind(n)
                    }))
                },
                mapResult: function(n) {
                    return WC(i.map(function(t) {
                        return t.map(n)
                    }))
                },
                mapError: function(n) {
                    return WC(i.map(function(t) {
                        return t.mapError(n)
                    }))
                },
                foldResult: function(n, e) {
                    return i.map(function(t) {
                        return t.fold(n, e)
                    })
                },
                withTimeout: function(t, r) {
                    return WC(jb.nu(function(n) {
                        var e = !1,
                            o = H.setTimeout(function() {
                                e = !0, n(z.error(r()))
                            }, t);
                        i.get(function(t) {
                            e || (H.clearTimeout(o), n(t))
                        })
                    }))
                }
            })
        },
        GC = function(t) {
            return WC(jb.nu(t))
        },
        XC = GC,
        YC = {
            type: "separator"
        },
        qC = function(t) {
            return {
                type: "menuitem",
                value: t.url,
                text: t.title,
                meta: {
                    attach: t.attach
                },
                onAction: function() {}
            }
        },
        KC = function(t, n) {
            return {
                type: "menuitem",
                value: n,
                text: t,
                meta: {
                    attach: undefined
                },
                onAction: function() {}
            }
        },
        $C = function(t, n) {
            return o = t, e = I(n, function(t) {
                return t.type === o
            }), F(e, qC);
            var e, o
        },
        JC = function(t, n) {
            var e = t.toLowerCase();
            return I(n, function(t) {
                var n = t.meta !== undefined && t.meta.text !== undefined ? t.meta.text : t.text;
                return Me(n.toLowerCase(), e) || Me(t.value.toLowerCase(), e)
            })
        },
        QC = function(c, t, s) {
            var n = Im.getValue(t),
                f = n.meta.text !== undefined ? n.meta.text : n.value;
            return s.getLinkInformation().fold(function() {
                return []
            }, function(t) {
                var n, e, o, r, i, u, a = JC(f, (n = s.getHistory(c), F(n, function(t) {
                    return KC(t, t)
                })));
                return "file" === c ? (e = [a, JC(f, (u = t, $C("header", u.targets))), JC(f, q([(i = t, et.from(i.anchorTop).map(function(t) {
                    return KC("<top>", t)
                }).toArray()), (r = t, $C("anchor", r.targets)), (o = t, et.from(o.anchorBottom).map(function(t) {
                    return KC("<bottom>", t)
                }).toArray())]))], V(e, function(t, n) {
                    return 0 === t.length || 0 === n.length ? t.concat(n) : t.concat(YC, n)
                }, [])) : a
            })
        },
        ZC = oi("aria-invalid"),
        tk = function(i, o, r) {
            var t, n, e, u, a, c = o.shared.providers,
                s = function(t) {
                    var n = Im.getValue(t);
                    r.addToHistory(n.value, i.filetype)
                },
                f = Db.parts().field({
                    factory: sy,
                    dismissOnBlur: !0,
                    inputClasses: ["tox-textfield"],
                    sandboxClasses: ["tox-dialog__popups"],
                    inputAttributes: {
                        "aria-errormessage": ZC
                    },
                    minChars: 0,
                    responseTime: 0,
                    fetch: function(t) {
                        var n = QC(i.filetype, t, r),
                            e = xy(n, ih.BUBBLE_TO_SANDBOX, o);
                        return jb.pure(e)
                    },
                    getHotspot: function(t) {
                        return h.getOpt(t)
                    },
                    onSetValue: function(t, n) {
                        t.hasConfigured(_y) && _y.run(t).get(tt)
                    },
                    typeaheadBehaviours: Wu(q([r.getValidationHandler().map(function(o) {
                        return _y.config({
                            getRoot: function(t) {
                                return _r(t.element())
                            },
                            invalidClass: "tox-control-wrap--status-invalid",
                            notify: {
                                onInvalid: function(t, n) {
                                    d.getOpt(t).each(function(t) {
                                        Xr(t.element(), "title", c.translate(n))
                                    })
                                }
                            },
                            validator: {
                                validate: function(t) {
                                    var e = Im.getValue(t);
                                    return XC(function(n) {
                                        o({
                                            type: i.filetype,
                                            url: e.value
                                        }, function(t) {
                                            n(("invalid" === t.status ? z.error : z.value)(t.message))
                                        })
                                    })
                                },
                                validateOnLoad: !1
                            }
                        })
                    }).toArray(), [Iy.config({}), rg("urlinput-events", q(["file" === i.filetype ? [mr(fo(), function(t) {
                            Lo(t, yb, {
                                name: i.name
                            })
                        })] : [],
                        [mr(lo(), function(t) {
                            Lo(t, yb, {
                                name: i.name
                            }), s(t)
                        }), mr(yo(), function(t) {
                            Lo(t, yb, {
                                name: i.name
                            }), s(t)
                        })]
                    ]))]])),
                    eventOrder: (t = {}, t[fo()] = ["streaming", "urlinput-events", "invalidating"], t),
                    model: {
                        getDisplayText: function(t) {
                            return t.value
                        },
                        selectsOver: !1,
                        populateFromBrowse: !1
                    },
                    markers: {
                        openClass: "dog"
                    },
                    lazySink: o.shared.getSink,
                    parts: {
                        menu: mv(0, 0, "normal")
                    },
                    onExecute: function(t, n, e) {
                        Lo(n, Cb, {})
                    },
                    onItemExecute: function(t, n, e, o) {
                        s(t), Lo(t, yb, {
                            name: i.name
                        })
                    }
                }),
                l = i.label.map(function(t) {
                    return gy(t, c)
                }),
                d = Sg((n = "invalid", e = et.some(ZC), void 0 === (u = "warning") && (u = n), void 0 === a && (a = n), {
                    dom: {
                        tag: "div",
                        classes: ["tox-icon", "tox-control-wrap__status-icon-" + n],
                        innerHtml: kg(u, c.icons),
                        attributes: P({
                            title: c.translate(a),
                            "aria-live": "polite"
                        }, e.fold(function() {
                            return {}
                        }, function(t) {
                            return {
                                id: t
                            }
                        }))
                    }
                })),
                m = Sg({
                    dom: {
                        tag: "div",
                        classes: ["tox-control-wrap__status-icon-wrap"]
                    },
                    components: [d.asSpec()]
                }),
                g = r.getUrlPicker(i.filetype),
                p = oi("browser.url.event"),
                h = Sg({
                    dom: {
                        tag: "div",
                        classes: ["tox-control-wrap"]
                    },
                    components: [f, m.asSpec()]
                });
            return Db.sketch({
                dom: my([]),
                components: l.toArray().concat([{
                    dom: {
                        tag: "div",
                        classes: ["tox-form__controls-h-stack"]
                    },
                    components: q([
                        [h.asSpec()], g.map(function() {
                            return t = i.label, n = p, e = "tox-browse-url", o = "browse", r = c, wg.sketch({
                                dom: {
                                    tag: "button",
                                    classes: ["tox-tbtn", e],
                                    innerHtml: kg(o, r.icons),
                                    attributes: {
                                        title: r.translate(t.getOr(""))
                                    }
                                },
                                buttonBehaviours: Wu([Iy.config({})]),
                                action: function(t) {
                                    zo(t, n)
                                }
                            });
                            var t, n, e, o, r
                        }).toArray()
                    ])
                }]),
                fieldBehaviours: Wu([rg("url-input-events", [mr(p, function(o) {
                    ll.getCurrent(o).each(function(n) {
                        var e = Im.getValue(n);
                        g.each(function(t) {
                            t(e).get(function(t) {
                                Im.setValue(n, t), Lo(o, yb, {
                                    name: i.name
                                })
                            })
                        })
                    })
                })])])
            })
        },
        nk = function(u, n) {
            var t, e, o = u.label.map(function(t) {
                    return gy(t, n)
                }),
                r = function(e) {
                    return function(n, t) {
                        mu(t.event().target(), "[data-collection-item-value]").each(function(t) {
                            e(n, t, qr(t, "data-collection-item-value"))
                        })
                    }
                },
                i = [mr(io(), r(function(t, n) {
                    Rl(n)
                })), mr(ko(), r(function(t, n, e) {
                    Lo(t, Sb, {
                        name: u.name,
                        value: e
                    })
                })), mr(uo(), r(function(t, n, e) {
                    du(t.element(), "." + Ep).each(function(t) {
                        Ni(t, Ep)
                    }), Ri(n, Ep)
                })), mr(ao(), r(function(t, n, e) {
                    du(t.element(), "." + Ep).each(function(t) {
                        Ni(t, Ep)
                    })
                })), kr(r(function(t, n, e) {
                    Lo(t, Sb, {
                        name: u.name,
                        value: e
                    })
                }))],
                a = Db.parts().field({
                    dom: {
                        tag: "div",
                        classes: ["tox-collection"].concat(1 !== u.columns ? ["tox-collection--grid"] : ["tox-collection--list"])
                    },
                    components: [],
                    factory: {
                        sketch: d
                    },
                    behaviours: Wu([wm.config({}), Im.config({
                        store: {
                            mode: "memory",
                            initialValue: []
                        },
                        onSetValue: function(o, t) {
                            var n, e, r, i;
                            n = o, e = F(t, function(t) {
                                var n, e = 1 === u.columns ? '<div class="tox-collection__item-label">' + t.text + "</div>" : "",
                                    o = '<div class="tox-collection__item-icon">' + t.icon + "</div>",
                                    r = {
                                        _: " ",
                                        " - ": " ",
                                        "-": " "
                                    },
                                    i = t.text.replace(/\_| \- |\-/g, function(t) {
                                        return r[t]
                                    });
                                return '<div class="tox-collection__item" tabindex="-1" data-collection-item-value="' + ('"' === (n = t.value) ? "&quot;" : n) + '" title="' + i + '" aria-label="' + i + '">' + o + e + "</div>"
                            }), r = 1 < u.columns && "auto" !== u.columns ? M(e, u.columns) : [e], i = F(r, function(t) {
                                return '<div class="tox-collection__group">' + t.join("") + "</div>"
                            }), Wr(n.element(), i.join("")), "auto" === u.columns && up(o, 5, "tox-collection__item").each(function(t) {
                                var n = t.numRows,
                                    e = t.numColumns;
                                hm.setGridSize(o, n, e)
                            }), zo(o, Tb)
                        }
                    }), Iy.config({}), hm.config((t = u.columns, e = "normal", 1 === t ? {
                        mode: "menu",
                        moveOnTab: !1,
                        selector: ".tox-collection__item"
                    } : "auto" === t ? {
                        mode: "flatgrid",
                        selector: ".tox-collection__item",
                        initSize: {
                            numColumns: 1,
                            numRows: 1
                        }
                    } : {
                        mode: "matrix",
                        selectors: {
                            row: "color" === e ? ".tox-swatches__row" : ".tox-collection__group",
                            cell: "color" === e ? "." + wp : "." + xp
                        }
                    })), rg("collection-events", i)])
                });
            return fy(o, a, ["tox-form__group--collection"])
        },
        ek = function(r) {
            return function(n, e, o) {
                return Ft(e, "name").fold(function() {
                    return r(e, o)
                }, function(t) {
                    return n.field(t, r(e, o))
                })
            }
        },
        ok = {
            bar: ek(function(t, n) {
                return e = t, o = n.shared, {
                    dom: {
                        tag: "div",
                        classes: ["tox-bar"]
                    },
                    components: F(e.items, o.interpreter)
                };
                var e, o
            }),
            collection: ek(function(t, n) {
                return nk(t, n.shared.providers)
            }),
            alloy: ek(d),
            alertbanner: ek(function(t, n) {
                return e = t, o = n.shared.providers, ab.sketch({
                    dom: {
                        tag: "div",
                        attributes: {
                            role: "alert"
                        },
                        classes: ["tox-notification", "tox-notification--in", "tox-notification--" + e.level]
                    },
                    components: [{
                        dom: {
                            tag: "div",
                            classes: ["tox-notification__icon"]
                        },
                        components: [wg.sketch({
                            dom: {
                                tag: "button",
                                classes: ["tox-button", "tox-button--naked", "tox-button--icon"],
                                innerHtml: kg(e.icon, o.icons),
                                attributes: {
                                    title: o.translate(e.iconTooltip)
                                }
                            },
                            action: function(t) {
                                Lo(t, Sb, {
                                    name: "alert-banner",
                                    value: e.url
                                })
                            }
                        })]
                    }, {
                        dom: {
                            tag: "div",
                            classes: ["tox-notification__body"],
                            innerHtml: o.translate(e.text)
                        }
                    }]
                });
                var e, o
            }),
            input: ek(function(t, n) {
                return e = t, o = n.shared.providers, UC({
                    name: e.name,
                    multiline: !1,
                    label: e.label,
                    placeholder: e.placeholder,
                    flex: !1,
                    classname: "tox-textfield",
                    validation: et.none()
                }, o);
                var e, o
            }),
            textarea: ek(function(t, n) {
                return e = t, o = n.shared.providers, UC({
                    name: e.name,
                    multiline: !0,
                    label: e.label,
                    placeholder: e.placeholder,
                    flex: !0,
                    classname: "tox-textarea",
                    validation: et.none()
                }, o);
                var e, o
            }),
            listbox: ek(function(t, n) {
                return e = t, o = n.shared.providers, r = gy(e.label, o), i = Db.parts().field({
                    factory: jC,
                    dom: {
                        classes: ["mce-select-field"]
                    },
                    selectBehaviours: Wu([Iy.config({})]),
                    options: e.values,
                    data: e.initialValue.getOr(undefined)
                }), ly(et.some(r), i);
                var e, o, r, i
            }),
            label: ek(function(t, n) {
                return e = t, o = n.shared, r = {
                    dom: {
                        tag: "label",
                        innerHtml: o.providers.translate(e.label),
                        classes: ["tox-label"]
                    }
                }, i = F(e.items, o.interpreter), {
                    dom: {
                        tag: "div",
                        classes: ["tox-form__group"]
                    },
                    components: [r].concat(i),
                    behaviours: Wu([Ww(), wm.config({}), tS(et.none()), hm.config({
                        mode: "acyclic"
                    })])
                };
                var e, o, r, i
            }),
            iframe: (VC = function(t, n) {
                return lS(t, n.shared.providers)
            }, function(t, n, e) {
                var o = bt(n, {
                    source: "dynamic"
                });
                return ek(VC)(t, o, e)
            }),
            autocomplete: ek(function(t, n) {
                return i = n, e = gy((r = t).label.getOr("?"), i.shared.providers), o = Db.parts().field({
                    factory: sy,
                    dismissOnBlur: !1,
                    inputClasses: ["tox-textfield"],
                    minChars: 1,
                    fetch: function(t) {
                        var n = Im.getValue(t),
                            e = r.getItems(n),
                            o = xy(e, ih.BUBBLE_TO_SANDBOX, i);
                        return jb.pure(o)
                    },
                    markers: {
                        openClass: "dog"
                    },
                    lazySink: i.shared.getSink,
                    parts: {
                        menu: mv(0, 0, "normal")
                    }
                }), ly(et.some(e), o);
                var r, i, e, o
            }),
            button: ek(function(t, n) {
                return e = t, o = n.shared.providers, r = iC(e.name, "custom"), rC(e, r, o, [nS(""), Ww()]);
                var e, o, r
            }),
            checkbox: ek(function(t, n) {
                return e = t, o = n.shared.providers, r = Im.config({
                    store: {
                        mode: "manual",
                        getValue: function(t) {
                            return t.element().dom().checked
                        },
                        setValue: function(t, n) {
                            t.element().dom().checked = n
                        }
                    }
                }), i = function(t) {
                    return t.element().dom().click(), et.some(!0)
                }, u = Db.parts().field({
                    factory: {
                        sketch: d
                    },
                    dom: {
                        tag: "input",
                        classes: ["tox-checkbox__input"],
                        attributes: {
                            type: "checkbox"
                        }
                    },
                    behaviours: Wu([Ww(), Iy.config({}), Pm.config({}), r, hm.config({
                        mode: "special",
                        onEnter: i,
                        onSpace: i,
                        stopSpaceKeyup: !0
                    }), rg("checkbox-events", [mr(lo(), function(t, n) {
                        Lo(t, yb, {
                            name: e.name
                        })
                    })])])
                }), a = Db.parts().label({
                    dom: {
                        tag: "span",
                        classes: ["tox-checkbox__label"],
                        innerHtml: o.translate(e.label)
                    },
                    behaviours: Wu([Hy.config({})])
                }), s = Sg({
                    dom: {
                        tag: "div",
                        classes: ["tox-checkbox__icons"]
                    },
                    components: [(c = function(t) {
                        return {
                            dom: {
                                tag: "span",
                                classes: ["tox-icon", "tox-checkbox-icon__" + t],
                                innerHtml: kg("checked" === t ? "selected" : "unselected", o.icons)
                            }
                        }
                    })("checked"), c("unchecked")]
                }), Db.sketch({
                    dom: {
                        tag: "label",
                        classes: ["tox-checkbox"]
                    },
                    components: [u, s.asSpec(), a]
                });
                var e, o, r, i, u, a, c, s
            }),
            colorinput: ek(function(t, n) {
                return jy(t, n.shared, n.colorinput)
            }),
            colorpicker: ek(function(t) {
                var n = function(t) {
                        return "tox-" + t
                    },
                    e = Uw(qw, n),
                    r = Sg(e.sketch({
                        dom: {
                            tag: "div",
                            classes: [n("color-picker-container")],
                            attributes: {
                                role: "presentation"
                            }
                        },
                        onValidHex: function(t) {
                            Lo(t, Sb, {
                                name: "hex-valid",
                                value: !0
                            })
                        },
                        onInvalidHex: function(t) {
                            Lo(t, Sb, {
                                name: "hex-valid",
                                value: !1
                            })
                        }
                    }));
                return {
                    dom: {
                        tag: "div"
                    },
                    components: [r.asSpec()],
                    behaviours: Wu([Im.config({
                        store: {
                            mode: "manual",
                            getValue: function(t) {
                                var n = r.get(t);
                                return ll.getCurrent(n).bind(function(t) {
                                    return Im.getValue(t).hex
                                }).map(function(t) {
                                    return "#" + t
                                }).getOr("")
                            },
                            setValue: function(t, n) {
                                var e = /^#([a-fA-F0-9]{3}(?:[a-fA-F0-9]{3})?)/.exec(n),
                                    o = r.get(t);
                                ll.getCurrent(o).fold(function() {
                                    H.console.log("Can not find form")
                                }, function(t) {
                                    Im.setValue(t, {
                                        hex: et.from(e[1]).getOr("")
                                    }), Vw.getField(t, "hex").each(function(t) {
                                        zo(t, fo())
                                    })
                                })
                            }
                        }
                    }), Ww()])
                }
            }),
            dropzone: ek(function(t, n) {
                return eS(t, n.shared.providers)
            }),
            grid: ek(function(t, n) {
                return e = t, o = n.shared, {
                    dom: {
                        tag: "div",
                        classes: ["tox-form__grid", "tox-form__grid--" + e.columns + "col"]
                    },
                    components: F(e.items, o.interpreter)
                };
                var e, o
            }),
            selectbox: ek(function(t, n) {
                return e = t, o = n.shared.providers, r = F(e.items, function(t) {
                    return {
                        text: o.translate(t.text),
                        value: t.value
                    }
                }), i = e.label.map(function(t) {
                    return gy(t, o)
                }), u = Db.parts().field({
                    dom: {},
                    selectAttributes: {
                        size: e.size
                    },
                    options: r,
                    factory: jC,
                    selectBehaviours: Wu([Iy.config({}), rg("selectbox-change", [mr(lo(), function(t, n) {
                        Lo(t, yb, {
                            name: e.name
                        })
                    })])])
                }), a = 1 < e.size ? et.none() : et.some({
                    dom: {
                        tag: "div",
                        classes: ["tox-selectfield__icon-js"],
                        innerHtml: kg("chevron-down", o.icons)
                    }
                }), c = {
                    dom: {
                        tag: "div",
                        classes: ["tox-selectfield"]
                    },
                    components: q([
                        [u], a.toArray()
                    ])
                }, Db.sketch({
                    dom: {
                        tag: "div",
                        classes: ["tox-form__group"]
                    },
                    components: q([i.toArray(), [c]])
                });
                var e, o, r, i, u, a, c
            }),
            sizeinput: ek(function(t, n) {
                return pC(t, n.shared.providers)
            }),
            urlinput: ek(function(t, n) {
                return tk(t, n, n.urlinput)
            }),
            customeditor: ek(function(n) {
                var e = ce(et.none()),
                    o = Sg({
                        dom: {
                            tag: n.tag
                        }
                    }),
                    r = ce(et.none());
                return {
                    dom: {
                        tag: "div",
                        classes: ["tox-custom-editor"]
                    },
                    behaviours: Wu([rg("editor-foo-events", [wr(function(t) {
                        o.getOpt(t).each(function(t) {
                            n.init(t.element().dom()).then(function(n) {
                                r.get().each(function(t) {
                                    n.setValue(t)
                                }), r.set(et.none()), e.set(et.some(n))
                            })
                        })
                    })]), Im.config({
                        store: {
                            mode: "manual",
                            getValue: function() {
                                return e.get().fold(function() {
                                    return r.get().getOr("")
                                }, function(t) {
                                    return t.getValue()
                                })
                            },
                            setValue: function(t, n) {
                                e.get().fold(function() {
                                    r.set(et.some(n))
                                }, function(t) {
                                    return t.setValue(n)
                                })
                            }
                        }
                    }), Ww()]),
                    components: [o.asSpec()]
                }
            }),
            htmlpanel: ek(function(t) {
                return "presentation" === t.presets ? ab.sketch({
                    dom: {
                        tag: "div",
                        classes: ["tox-form__group"],
                        innerHtml: t.html
                    }
                }) : ab.sketch({
                    dom: {
                        tag: "div",
                        classes: ["tox-form__group"],
                        innerHtml: t.html,
                        attributes: {
                            role: "document"
                        }
                    },
                    containerBehaviours: Wu([Iy.config({}), Pm.config({})])
                })
            }),
            imagetools: ek(function(t, n) {
                return LC(t, n.shared.providers)
            }),
            table: ek(function(t, n) {
                return e = t, o = n.shared.providers, u = function(t) {
                    return {
                        dom: {
                            tag: "th",
                            innerHtml: o.translate(t)
                        }
                    }
                }, a = function(t) {
                    return {
                        dom: {
                            tag: "td",
                            innerHtml: o.translate(t)
                        }
                    }
                }, c = function(t) {
                    return {
                        dom: {
                            tag: "tr"
                        },
                        components: F(t, a)
                    }
                }, {
                    dom: {
                        tag: "table",
                        classes: ["tox-dialog__table"]
                    },
                    components: [(i = e.header, {
                        dom: {
                            tag: "thead"
                        },
                        components: [{
                            dom: {
                                tag: "tr"
                            },
                            components: F(i, u)
                        }]
                    }), (r = e.cells, {
                        dom: {
                            tag: "tbody"
                        },
                        components: F(r, c)
                    })],
                    behaviours: Wu([Iy.config({}), Pm.config({})])
                };
                var e, o, r, i, u, a, c
            })
        },
        rk = {
            field: function(t, n) {
                return n
            }
        },
        ik = function(n, t, e) {
            var o = bt(e, {
                shared: {
                    interpreter: function(t) {
                        return uk(n, t, o)
                    }
                }
            });
            return uk(n, t, o)
        },
        uk = function(n, e, o) {
            return Ft(ok, e.type).fold(function() {
                return H.console.error('Unknown factory type "' + e.type + '", defaulting to container: ', e), e
            }, function(t) {
                return t(n, e, o)
            })
        },
        ak = function(t) {
            return t.y()
        },
        ck = function(t, n, e) {
            return Ja(t.x(), ak(t), e.northeast(), ba(), "layout-ne")
        },
        sk = function(t, n, e) {
            return Ja((r = n, (o = t).x() + o.width() - r.width()), ak(t), e.northwest(), ya(), "layout-nw");
            var o, r
        },
        fk = function(t, n, e) {
            return Ja((r = n, (o = t).x() + o.width() / 2 - r.width() / 2), ak(t), e.north(), wa(), "layout-n");
            var o, r
        },
        lk = {
            valignCentre: [],
            alignCentre: [],
            alignLeft: [],
            alignRight: [],
            right: [],
            left: [],
            bottom: [],
            top: []
        },
        dk = function(t, n, e) {
            var o, r, i, u, a, c, s, f, l, d, m = bb(t),
                g = function() {
                    return fe.fromDom(t.getBody())
                };
            return {
                toolbar: (f = g, l = n, d = m, d ? function() {
                    return {
                        anchor: "node",
                        root: f(),
                        node: et.from(f()),
                        bubble: Ka(-12, -12, lk),
                        layouts: {
                            onRtl: function() {
                                return [ck]
                            },
                            onLtr: function() {
                                return [sk]
                            }
                        }
                    }
                } : function() {
                    return {
                        anchor: "hotspot",
                        hotspot: l(),
                        bubble: Ka(-12, 12, lk),
                        layouts: {
                            onRtl: function() {
                                return [rc]
                            },
                            onLtr: function() {
                                return [ic]
                            }
                        }
                    }
                }),
                toolbarOverflow: (s = e, function() {
                    return {
                        anchor: "hotspot",
                        hotspot: s(),
                        layouts: {
                            onRtl: function() {
                                return [rc]
                            },
                            onLtr: function() {
                                return [ic]
                            }
                        }
                    }
                }),
                banner: (u = g, a = n, c = e, c ? function() {
                    return {
                        anchor: "node",
                        root: u(),
                        node: et.from(u()),
                        layouts: {
                            onRtl: function() {
                                return [fk]
                            },
                            onLtr: function() {
                                return [fk]
                            }
                        }
                    }
                } : function() {
                    return {
                        anchor: "hotspot",
                        hotspot: a(),
                        layouts: {
                            onRtl: function() {
                                return [sc]
                            },
                            onLtr: function() {
                                return [sc]
                            }
                        }
                    }
                }),
                cursor: (r = t, i = g, function() {
                    return {
                        anchor: "selection",
                        root: i(),
                        getSelection: function() {
                            var t = r.selection.getRng();
                            return et.some(Oc.range(fe.fromDom(t.startContainer), t.startOffset, fe.fromDom(t.endContainer), t.endOffset))
                        }
                    }
                }),
                node: (o = g, function(t) {
                    return {
                        anchor: "node",
                        root: o(),
                        node: t
                    }
                })
            }
        },
        mk = function(t) {
            return {
                colorPicker: (r = t, function(t, n) {
                    av.colorPickerDialog(r)(t, n)
                }),
                hasCustomColors: (o = t, function() {
                    return Uh(o)
                }),
                getColors: (e = t, function() {
                    return Wh(e)
                }),
                getColorCols: (n = t, function() {
                    return av.getColorCols(n)
                })
            };
            var n, e, o, r
        },
        gk = [{
            title: "Headings",
            items: [{
                title: "Heading 1",
                format: "h1"
            }, {
                title: "Heading 2",
                format: "h2"
            }, {
                title: "Heading 3",
                format: "h3"
            }, {
                title: "Heading 4",
                format: "h4"
            }, {
                title: "Heading 5",
                format: "h5"
            }, {
                title: "Heading 6",
                format: "h6"
            }]
        }, {
            title: "Inline",
            items: [{
                title: "Bold",
                icon: "bold",
                format: "bold"
            }, {
                title: "Italic",
                icon: "italic",
                format: "italic"
            }, {
                title: "Underline",
                icon: "underline",
                format: "underline"
            }, {
                title: "Strikethrough",
                icon: "strike-through",
                format: "strikethrough"
            }, {
                title: "Superscript",
                icon: "superscript",
                format: "superscript"
            }, {
                title: "Subscript",
                icon: "subscript",
                format: "subscript"
            }, {
                title: "Code",
                icon: "code",
                format: "code"
            }]
        }, {
            title: "Blocks",
            items: [{
                title: "Paragraph",
                format: "p"
            }, {
                title: "Blockquote",
                format: "blockquote"
            }, {
                title: "Div",
                format: "div"
            }, {
                title: "Pre",
                format: "pre"
            }]
        }, {
            title: "Align",
            items: [{
                title: "Left",
                icon: "align-left",
                format: "alignleft"
            }, {
                title: "Center",
                icon: "align-center",
                format: "aligncenter"
            }, {
                title: "Right",
                icon: "align-right",
                format: "alignright"
            }, {
                title: "Justify",
                icon: "align-justify",
                format: "alignjustify"
            }]
        }],
        pk = function(t) {
            return V(t, function(t, n) {
                if (gt(n, "items")) {
                    var e = pk(n.items);
                    return {
                        customFormats: t.customFormats.concat(e.customFormats),
                        formats: t.formats.concat([{
                            title: n.title,
                            items: e.formats
                        }])
                    }
                }
                if (gt(n, "inline") || gt(n, "block") || gt(n, "selector")) {
                    var o = "custom-" + n.title.toLowerCase();
                    return {
                        customFormats: t.customFormats.concat([{
                            name: o,
                            format: n
                        }]),
                        formats: t.formats.concat([{
                            title: n.title,
                            format: o,
                            icon: n.icon
                        }])
                    }
                }
                return P({}, t, {
                    formats: t.formats.concat(n)
                })
            }, {
                customFormats: [],
                formats: []
            })
        },
        hk = function(i) {
            return (t = i, et.from(t.getParam("style_formats")).filter(j)).map(function(t) {
                var n, e, o, r = (n = i, e = pk(t), o = function(t) {
                    W(t, function(t) {
                        n.formatter.has(t.name) || n.formatter.register(t.name, t.format)
                    })
                }, n.formatter ? o(e.customFormats) : n.on("init", function() {
                    o(e.customFormats)
                }), e.formats);
                return i.getParam("style_formats_merge", !1, "boolean") ? gk.concat(r) : r
            }).getOr(gk);
            var t
        },
        vk = function(t, n, e) {
            var o = {
                type: "formatter",
                isSelected: n(t.format),
                getStylePreview: e(t.format)
            };
            return bt(t, o)
        },
        bk = function(s, t, f, l) {
            var d = function(t) {
                return F(t, function(t) {
                    var n, e, o, r, i, u, a = ut(t);
                    if (Nt(t, "items")) {
                        var c = d(t.items);
                        return bt((i = t, u = {
                            type: "submenu",
                            isSelected: nt(!1),
                            getStylePreview: function() {
                                return et.none()
                            }
                        }, bt(i, u)), {
                            getStyleItems: function() {
                                return c
                            }
                        })
                    }
                    return Nt(t, "format") ? vk(t, f, l) : 1 === a.length && D(a, "title") ? bt(t, {
                        type: "separator"
                    }) : (e = oi((n = t).title), o = {
                        type: "formatter",
                        format: e,
                        isSelected: f(e),
                        getStylePreview: l(e)
                    }, r = bt(n, o), s.formatter.register(e, r), r)
                })
            };
            return d(t)
        },
        yk = OC.trim,
        xk = function(n) {
            return function(t) {
                if (t && 1 === t.nodeType) {
                    if (t.contentEditable === n) return !0;
                    if (t.getAttribute("data-mce-contenteditable") === n) return !0
                }
                return !1
            }
        },
        wk = xk("true"),
        Sk = xk("false"),
        Ck = function(t, n, e, o, r) {
            return {
                type: t,
                title: n,
                url: e,
                level: o,
                attach: r
            }
        },
        kk = function(t) {
            return t.innerText || t.textContent
        },
        Ok = function(t) {
            return (n = t) && "A" === n.nodeName && (n.id || n.name) !== undefined && Tk(t);
            var n
        },
        Ek = function(t) {
            return t && /^(H[1-6])$/.test(t.nodeName)
        },
        Tk = function(t) {
            return function(t) {
                for (; t = t.parentNode;) {
                    var n = t.contentEditable;
                    if (n && "inherit" !== n) return wk(t)
                }
                return !1
            }(t) && !Sk(t)
        },
        Bk = function(t) {
            return Ek(t) && Tk(t)
        },
        Ak = function(t) {
            var n, e, o = (n = t).id ? n.id : oi("h");
            return Ck("header", kk(t), "#" + o, Ek(e = t) ? parseInt(e.nodeName.substr(1), 10) : 0, function() {
                t.id = o
            })
        },
        Dk = function(t) {
            var n = t.id || t.name,
                e = kk(t);
            return Ck("anchor", e || "#" + n, "#" + n, 0, tt)
        },
        _k = function(t) {
            var n, e;
            return n = "h1,h2,h3,h4,h5,h6,a:not([href])", e = t, F($c(fe.fromDom(e), n), function(t) {
                return t.dom()
            })
        },
        Mk = function(t) {
            return 0 < yk(t.title).length
        },
        Fk = function(t) {
            var n, e = _k(t);
            return I((n = e, F(I(n, Bk), Ak)).concat(F(I(e, Ok), Dk)), Mk)
        },
        Ik = "tinymce-url-history",
        Rk = function(t) {
            return L(t) && /^https?/.test(t)
        },
        Vk = function(t) {
            return k(t) && function(t, n) {
                for (var e = ut(t), o = 0, r = e.length; o < r; o++) {
                    var i = e[o],
                        u = t[i];
                    if (n(u, i, t)) return et.some(u)
                }
                return et.none()
            }(t, function(t) {
                return !(j(n = t) && n.length <= 5 && $(n, Rk));
                var n
            }).isNone()
        },
        Nk = function() {
            var t, n = H.localStorage.getItem(Ik);
            if (null === n) return {};
            try {
                t = JSON.parse(n)
            } catch (e) {
                if (e instanceof SyntaxError) return H.console.log("Local storage " + Ik + " was not valid JSON", e), {};
                throw e
            }
            return Vk(t) ? t : (H.console.log("Local storage " + Ik + " was not valid format", t), {})
        },
        Hk = function(t) {
            var n = Nk();
            return Object.prototype.hasOwnProperty.call(n, t) ? n[t] : []
        },
        Pk = function(n, t) {
            if (Rk(n)) {
                var e = Nk(),
                    o = Object.prototype.hasOwnProperty.call(e, t) ? e[t] : [],
                    r = I(o, function(t) {
                        return t !== n
                    });
                e[t] = [n].concat(r).slice(0, 5),
                    function(t) {
                        if (!Vk(t)) throw new Error("Bad format for history:\n" + JSON.stringify(t));
                        H.localStorage.setItem(Ik, JSON.stringify(t))
                    }(e)
            }
        },
        zk = Object.prototype.hasOwnProperty,
        Lk = function(t) {
            return !!t
        },
        jk = function(t) {
            return st(OC.makeMap(t, /[, ]/), Lk)
        },
        Uk = function(t, n, e) {
            var o, r, i = (o = t, r = n, zk.call(o, r) ? et.some(o[r]) : et.none()).getOr(e);
            return L(i) ? et.some(i) : et.none()
        },
        Wk = function(t) {
            return et.some(t.file_picker_callback).filter(E)
        },
        Gk = function(t, n) {
            var e, o, r, i, u = (e = t, o = et.some(e.file_picker_types).filter(Lk), r = et.some(e.file_browser_callback_types).filter(Lk), i = o.or(r).map(jk), Wk(e).fold(function() {
                return !1
            }, function(t) {
                return i.fold(function() {
                    return !0
                }, function(t) {
                    return 0 < ut(t).length && t
                })
            }));
            return O(u) ? u ? Wk(t) : et.none() : u[n] ? Wk(t) : et.none()
        },
        Xk = function(n) {
            return {
                getHistory: Hk,
                addToHistory: Pk,
                getLinkInformation: function() {
                    return !1 === (t = n).settings.typeahead_urls ? et.none() : et.some({
                        targets: Fk(t.getBody()),
                        anchorTop: Uk(t.settings, "anchor_top", "#top").getOrUndefined(),
                        anchorBottom: Uk(t.settings, "anchor_bottom", "#bottom").getOrUndefined()
                    });
                    var t
                },
                getValidationHandler: function() {
                    return t = n.settings.filepicker_validator_handler, E(t) ? et.some(t) : et.none();
                    var t
                },
                getUrlPicker: function(t) {
                    return i = t, Gk((r = n).settings, i).map(function(o) {
                        return function(n) {
                            return jb.nu(function(e) {
                                var t = OC.extend({
                                    filetype: i
                                }, et.from(n.meta).getOr({}));
                                o.call(r, function(t, n) {
                                    if (!L(t)) throw new Error("Expected value to be string");
                                    if (n !== undefined && !k(n)) throw new Error("Expected meta to be a object");
                                    e({
                                        value: t,
                                        meta: n
                                    })
                                }, n.value, t)
                            })
                        }
                    });
                    var r, i
                }
            }
        },
        Yk = function(t, n, e, o) {
            var r = {
                shared: {
                    providers: {
                        icons: function() {
                            return n.ui.registry.getAll().icons
                        },
                        menuItems: function() {
                            return n.ui.registry.getAll().menuItems
                        },
                        translate: bp.translate
                    },
                    interpreter: function(t) {
                        return uk(rk, t, r)
                    },
                    anchors: dk(n, e, o),
                    getSink: function() {
                        return z.value(t)
                    }
                },
                urlinput: Xk(n),
                styleselect: function(e) {
                    var o = function(t) {
                            return function() {
                                return e.formatter.match(t)
                            }
                        },
                        r = function(n) {
                            return function() {
                                var t = e.formatter.get(n);
                                return t !== undefined ? et.some({
                                    tag: 0 < t.length && (t[0].inline || t[0].block) || "div",
                                    styleAttr: e.formatter.getCssText(n)
                                }) : et.none()
                            }
                        },
                        i = function(t) {
                            var n = t.items;
                            return n !== undefined && 0 < n.length ? K(n, i) : [t.format]
                        },
                        u = ce([]),
                        a = ce([]),
                        c = ce([]),
                        s = ce([]),
                        f = ce(!1);
                    e.on("init", function() {
                        var t = hk(e),
                            n = bk(e, t, o, r);
                        u.set(n), a.set(K(n, i))
                    }), e.on("addStyleModifications", function(t) {
                        var n = bk(e, t.items, o, r);
                        c.set(n), f.set(t.replace), s.set(K(n, i))
                    });
                    return {
                        getData: function() {
                            var t = f.get() ? [] : u.get(),
                                n = c.get();
                            return t.concat(n)
                        },
                        getFlattenedKeys: function() {
                            var t = f.get() ? [] : a.get(),
                                n = s.get();
                            return t.concat(n)
                        }
                    }
                }(n),
                colorinput: mk(n)
            };
            return r
        },
        qk = nt([Pn("dom"), Zn("shell", !0), nf("toolbarBehaviours", [wm])]),
        Kk = nt([Mf({
            name: "groups",
            overrides: function(t) {
                return {
                    behaviours: Wu([wm.config({})])
                }
            }
        })]),
        $k = al({
            name: "Toolbar",
            configFields: qk(),
            partFields: Kk(),
            factory: function(n, t, e, o) {
                var r = function(t) {
                        return n.shell ? et.some(t) : Wf(t, n, "groups")
                    },
                    i = n.shell ? {
                        behaviours: [wm.config({})],
                        components: []
                    } : {
                        behaviours: [],
                        components: t
                    };
                return {
                    uid: n.uid,
                    dom: n.dom,
                    components: i.components,
                    behaviours: of(n.toolbarBehaviours, i.behaviours),
                    apis: {
                        setGroups: function(t, n) {
                            r(t).fold(function() {
                                throw H.console.error("Toolbar was defined to not be a shell, but no groups container was specified in components"), new Error("Toolbar was defined to not be a shell, but no groups container was specified in components")
                            }, function(t) {
                                wm.set(t, n)
                            })
                        }
                    },
                    domModification: {
                        attributes: {
                            role: "group"
                        }
                    }
                }
            },
            apis: {
                setGroups: function(t, n, e) {
                    t.setGroups(n, e)
                }
            }
        }),
        Jk = Or("within", "extra", "withinWidth"),
        Qk = function(t, n, o) {
            var e, r = (e = function(t, n) {
                    var e = o(t);
                    return et.some({
                        element: nt(t),
                        start: nt(n),
                        finish: nt(n + e),
                        width: nt(e)
                    })
                }, V(t, function(n, t) {
                    return e(t, n.len).fold(nt(n), function(t) {
                        return {
                            len: t.finish(),
                            list: n.list.concat([t])
                        }
                    })
                }, {
                    len: 0,
                    list: []
                }).list),
                i = I(r, function(t) {
                    return t.finish() <= n
                }),
                u = R(i, function(t, n) {
                    return t + n.width()
                }, 0),
                a = r.slice(i.length);
            return {
                within: nt(i),
                extra: nt(a),
                withinWidth: nt(u)
            }
        },
        Zk = function(t) {
            return F(t, function(t) {
                return t.element()
            })
        },
        tO = function(t, n, e, o) {
            var r, i, u, a, c, s, f, l, d, m, g, p, h = (r = t, i = n, u = e, a = Qk(i, r, u), 0 === a.extra().length ? et.some(a) : et.none()).getOrThunk(function() {
                    return Qk(n, t - e(o), e)
                }),
                v = h.within(),
                b = h.extra(),
                y = h.withinWidth();
            return 1 === b.length && b[0].width() <= e(o) ? (m = b, g = y, p = Zk(v.concat(m)), Jk(p, [], g)) : 1 <= b.length ? (s = b, f = o, l = y, d = Zk(v).concat([f]), Jk(d, Zk(s), l)) : (c = y, Jk(Zk(v), [], c))
        },
        nO = function(t, n) {
            var e = F(n, function(t) {
                return fu(t)
            });
            $k.setGroups(t, e)
        },
        eO = function(t, n, e, o) {
            var r = Gf(t, n, "primary"),
                i = Wf(t, n, "overflow-button"),
                u = Fb.getCoupled(t, "overflowGroup");
            Wi(r.element(), "visibility", "hidden");
            var a, c = (a = i, e.bind(function(n) {
                return Nl(n.element()).bind(function(t) {
                    return n.getSystem().getByDom(t).toOption()
                })
            }).orThunk(function() {
                return a.filter(Pm.isFocused)
            }));
            e.each(function(t) {
                $k.setGroups(t, [])
            });
            var s = n.builtGroups.get();
            nO(r, s.concat([u]));
            var f = ca(r.element()),
                l = tO(f, s, function(t) {
                    return ca(t.element())
                }, u);
            0 === l.extra().length ? (wm.remove(r, u), e.each(function(t) {
                $k.setGroups(t, [])
            })) : (nO(r, l.within()), e.each(function(t) {
                nO(t, l.extra())
            })), $i(r.element(), "visibility"), Ji(r.element()), e.each(function(n) {
                i.each(function(t) {
                    return Jm.set(t, o(n))
                }), c.each(Pm.focus)
            })
        },
        oO = nt([Pn("items"), Du(["itemSelector"]), nf("tgroupBehaviours", [hm])]),
        rO = nt([Ff({
            name: "items",
            unit: "item"
        })]),
        iO = al({
            name: "ToolbarGroup",
            configFields: oO(),
            partFields: rO(),
            factory: function(t, n, e, o) {
                return {
                    uid: t.uid,
                    dom: t.dom,
                    components: n,
                    behaviours: of(t.tgroupBehaviours, [hm.config({
                        mode: "flow",
                        selector: t.markers.itemSelector
                    })]),
                    domModification: {
                        attributes: {
                            role: "toolbar"
                        }
                    }
                }
            }
        }),
        uO = nt([nf("splitToolbarBehaviours", []), ae("builtGroups", function() {
            return ce([])
        })]),
        aO = function(o, t, n, e, r) {
            var i = "alloy.toolbar.toggle";
            return {
                uid: o.uid,
                dom: o.dom,
                components: t,
                behaviours: of(o.splitToolbarBehaviours, [Fb.config({
                    others: P({}, r.coupling, {
                        overflowGroup: function(n) {
                            return iO.sketch(P({}, e["overflow-group"](), {
                                items: [wg.sketch(P({}, e["overflow-button"](), {
                                    action: function(t) {
                                        zo(n, i)
                                    }
                                }))]
                            }))
                        }
                    })
                }), rg("toolbar-toggle-events", [mr(i, function(t) {
                    r.toggleToolbar(t, o, e)
                })])]),
                apis: {
                    setGroups: function(t, n) {
                        var e;
                        e = F(n, t.getSystem().build), o.builtGroups.set(e), r.refresh(t, o)
                    },
                    refresh: function(t) {
                        r.refresh(t, o)
                    },
                    getMoreButton: function(t) {
                        return Wf(t, o, "overflow-button")
                    },
                    getOverflow: function(t) {
                        return n = t, r.getOverflow(n);
                        var n
                    },
                    toggle: function(t) {
                        r.toggleToolbar(t, o, e)
                    }
                },
                domModification: {
                    attributes: {
                        role: "group"
                    }
                }
            }
        },
        cO = nt([Du(["overflowToggledClass"]), Pn("getAnchor"), Pn("lazySink")].concat(uO())),
        sO = nt([Df({
            factory: $k,
            schema: qk(),
            name: "primary"
        }), _f({
            factory: $k,
            schema: qk(),
            name: "overflow",
            overrides: function(n) {
                return {
                    toolbarBehaviours: Wu([hm.config({
                        mode: "cyclic",
                        onEscape: function(t) {
                            return Wf(t, n, "overflow-button").each(Pm.focus), et.none()
                        }
                    })])
                }
            }
        }), _f({
            name: "overflow-button",
            overrides: function(t) {
                return {
                    dom: {
                        attributes: {
                            "aria-haspopup": "true"
                        }
                    },
                    buttonBehaviours: Wu([Jm.config({
                        toggleClass: t.markers.overflowToggledClass,
                        aria: {
                            mode: "expanded"
                        },
                        toggleOnExecute: !1
                    })])
                }
            }
        }), _f({
            name: "overflow-group"
        })]),
        fO = function(t, n, e) {
            var o = Fb.getCoupled(t, "sandbox");
            Ks.isOpen(o) ? Ks.close(o) : Ks.open(o, e.overflow())
        },
        lO = function(t) {
            return t.getSystem().isConnected()
        },
        dO = function(o, r) {
            var t = Ks.getState(Fb.getCoupled(o, "sandbox"));
            eO(o, r, t, lO), t.each(function(t) {
                var n = r.lazySink(o).getOrDie(),
                    e = r.getAnchor(o);
                Ds.position(n, e, t)
            })
        },
        mO = al({
            name: "SplitFloatingToolbar",
            configFields: cO(),
            partFields: sO(),
            factory: function(n, t, e, o) {
                return aO(n, t, 0, o, {
                    refresh: dO,
                    toggleToolbar: fO,
                    getOverflow: function(t) {
                        return Ks.getState(Fb.getCoupled(t, "sandbox"))
                    },
                    coupling: {
                        sandbox: function(t) {
                            return o = t, e = n, {
                                dom: {
                                    tag: "div",
                                    attributes: {
                                        id: (r = gu()).id()
                                    }
                                },
                                behaviours: Wu([hm.config({
                                    mode: "special",
                                    onEscape: function(t) {
                                        return Ks.close(t), et.some(!0)
                                    }
                                }), Ks.config({
                                    onOpen: function(t, n) {
                                        dO(o, e), Wf(o, e, "overflow-button").each(function(t) {
                                            Jm.on(t), r.link(t.element())
                                        }), hm.focusIn(n)
                                    },
                                    onClose: function() {
                                        Wf(o, e, "overflow-button").each(function(t) {
                                            Jm.off(t), Pm.focus(t), r.unlink(t.element())
                                        })
                                    },
                                    isPartOf: function(t, n, e) {
                                        return hu(n, e) || hu(o, e)
                                    },
                                    getAttachPoint: function() {
                                        return e.lazySink(o).getOrDie()
                                    }
                                })])
                            };
                            var o, e, r
                        }
                    }
                })
            },
            apis: {
                setGroups: function(t, n, e) {
                    t.setGroups(n, e)
                },
                refresh: function(t, n) {
                    t.refresh(n)
                },
                getMoreButton: function(t, n) {
                    return t.getMoreButton(n)
                },
                getOverflow: function(t, n) {
                    return t.getOverflow(n)
                },
                toggle: function(t, n) {
                    t.toggle(n)
                }
            }
        }),
        gO = function(n, t) {
            return t.getAnimationRoot.fold(function() {
                return n.element()
            }, function(t) {
                return t(n)
            })
        },
        pO = function(t) {
            return t.dimension.property
        },
        hO = function(t, n) {
            return t.dimension.getDimension(n)
        },
        vO = function(t, n) {
            var e = gO(t, n);
            zi(e, [n.shrinkingClass, n.growingClass])
        },
        bO = function(t, n) {
            Ni(t.element(), n.openClass), Ri(t.element(), n.closedClass), Wi(t.element(), pO(n), "0px"), Ji(t.element())
        },
        yO = function(t, n) {
            Ni(t.element(), n.closedClass), Ri(t.element(), n.openClass), $i(t.element(), pO(n))
        },
        xO = function(t, n, e, o) {
            e.setCollapsed(), Wi(t.element(), pO(n), hO(n, t.element())), Ji(t.element()), vO(t, n), bO(t, n), n.onStartShrink(t), n.onShrunk(t)
        },
        wO = function(t, n, e, o) {
            var r = o.getOrThunk(function() {
                return hO(n, t.element())
            });
            e.setCollapsed(), Wi(t.element(), pO(n), r), Ji(t.element());
            var i = gO(t, n);
            Ni(i, n.growingClass), Ri(i, n.shrinkingClass), bO(t, n), n.onStartShrink(t)
        },
        SO = function(t, n, e) {
            var o = hO(n, t.element());
            ("0px" === o ? xO : wO)(t, n, e, et.some(o))
        },
        CO = function(t, n, e) {
            var o = gO(t, n),
                r = Hi(o, n.shrinkingClass),
                i = hO(n, t.element());
            yO(t, n);
            var u = hO(n, t.element());
            (r ? function() {
                Wi(t.element(), pO(n), i), Ji(t.element())
            } : function() {
                bO(t, n)
            })(), Ni(o, n.shrinkingClass), Ri(o, n.growingClass), yO(t, n), Wi(t.element(), pO(n), u), e.setExpanded(), n.onStartGrow(t)
        },
        kO = function(t, n, e) {
            var o = gO(t, n);
            return !0 === Hi(o, n.growingClass)
        },
        OO = function(t, n, e) {
            var o = gO(t, n);
            return !0 === Hi(o, n.shrinkingClass)
        },
        EO = /* */ Object.freeze({
            refresh: function(t, n, e) {
                if (e.isExpanded()) {
                    $i(t.element(), pO(n));
                    var o = hO(n, t.element());
                    Wi(t.element(), pO(n), o)
                }
            },
            grow: function(t, n, e) {
                e.isExpanded() || CO(t, n, e)
            },
            shrink: function(t, n, e) {
                e.isExpanded() && SO(t, n, e)
            },
            immediateShrink: function(t, n, e) {
                e.isExpanded() && xO(t, n, e)
            },
            hasGrown: function(t, n, e) {
                return e.isExpanded()
            },
            hasShrunk: function(t, n, e) {
                return e.isCollapsed()
            },
            isGrowing: kO,
            isShrinking: OO,
            isTransitioning: function(t, n, e) {
                return !0 === kO(t, n) || !0 === OO(t, n)
            },
            toggleGrow: function(t, n, e) {
                (e.isExpanded() ? SO : CO)(t, n, e)
            },
            disableTransitions: vO
        }),
        TO = /* */ Object.freeze({
            exhibit: function(t, n) {
                var e = n.expanded;
                return Si(e ? {
                    classes: [n.openClass],
                    styles: {}
                } : {
                    classes: [n.closedClass],
                    styles: It(n.dimension.property, "0px")
                })
            },
            events: function(e, o) {
                return fr([xr(go(), function(t, n) {
                    n.event().raw().propertyName === e.dimension.property && (vO(t, e), o.isExpanded() && $i(t.element(), e.dimension.property), (o.isExpanded() ? e.onGrown : e.onShrunk)(t))
                })])
            }
        }),
        BO = [Pn("closedClass"), Pn("openClass"), Pn("shrinkingClass"), Pn("growingClass"), Yn("getAnimationRoot"), Mu("onShrunk"), Mu("onStartShrink"), Mu("onGrown"), Mu("onStartGrow"), Zn("expanded", !1), zn("dimension", _n("property", {
            width: [Vu("property", "width"), Vu("getDimension", function(t) {
                return ca(t) + "px"
            })],
            height: [Vu("property", "height"), Vu("getDimension", function(t) {
                return la(t) + "px"
            })]
        }))],
        AO = Xu({
            fields: BO,
            name: "sliding",
            active: TO,
            apis: EO,
            state: /* */ Object.freeze({
                init: function(t) {
                    var n = ce(t.expanded);
                    return xi({
                        isExpanded: function() {
                            return !0 === n.get()
                        },
                        isCollapsed: function() {
                            return !1 === n.get()
                        },
                        setCollapsed: g(n.set, !1),
                        setExpanded: g(n.set, !0),
                        readState: function() {
                            return "expanded: " + n.get()
                        }
                    })
                }
            })
        }),
        DO = nt([Du(["closedClass", "openClass", "shrinkingClass", "growingClass", "overflowToggledClass"])].concat(uO())),
        _O = nt([Df({
            factory: $k,
            schema: qk(),
            name: "primary"
        }), Df({
            factory: $k,
            schema: qk(),
            name: "overflow",
            overrides: function(n) {
                return {
                    toolbarBehaviours: Wu([AO.config({
                        dimension: {
                            property: "height"
                        },
                        closedClass: n.markers.closedClass,
                        openClass: n.markers.openClass,
                        shrinkingClass: n.markers.shrinkingClass,
                        growingClass: n.markers.growingClass,
                        onShrunk: function(t) {
                            Wf(t, n, "overflow-button").each(function(t) {
                                Jm.off(t), Pm.focus(t)
                            })
                        },
                        onGrown: function(t) {
                            hm.focusIn(t)
                        },
                        onStartGrow: function(t) {
                            Wf(t, n, "overflow-button").each(Jm.on)
                        }
                    }), hm.config({
                        mode: "acyclic",
                        onEscape: function(t) {
                            return Wf(t, n, "overflow-button").each(Pm.focus), et.some(!0)
                        }
                    })])
                }
            }
        }), _f({
            name: "overflow-button",
            overrides: function(t) {
                return {
                    buttonBehaviours: Wu([Jm.config({
                        toggleClass: t.markers.overflowToggledClass,
                        aria: {
                            mode: "pressed"
                        },
                        toggleOnExecute: !1
                    })])
                }
            }
        }), _f({
            name: "overflow-group"
        })]),
        MO = function(n, e) {
            Wf(n, e, "overflow").each(function(t) {
                IO(n, e), AO.toggleGrow(t)
            })
        },
        FO = function(t) {
            return AO.hasGrown(t)
        },
        IO = function(t, n) {
            var e = Wf(t, n, "overflow");
            eO(t, n, e, FO), e.each(AO.refresh)
        },
        RO = al({
            name: "SplitSlidingToolbar",
            configFields: DO(),
            partFields: _O(),
            factory: function(n, t, e, o) {
                return aO(n, t, 0, o, {
                    refresh: IO,
                    toggleToolbar: MO,
                    getOverflow: function(t) {
                        return Wf(t, n, "overflow")
                    },
                    coupling: {}
                })
            },
            apis: {
                setGroups: function(t, n, e) {
                    t.setGroups(n, e)
                },
                refresh: function(t, n) {
                    t.refresh(n)
                },
                getMoreButton: function(t, n) {
                    return t.getMoreButton(n)
                },
                getOverflow: function(t, n) {
                    return t.getOverflow(n)
                },
                toggle: function(t, n) {
                    t.toggle(n)
                }
            }
        }),
        VO = "silver.readonly",
        NO = pn([(NC = "readonly", zn(NC, Vn))]),
        HO = function(t, n) {
            var e, o, r, i = t.outerContainer;
            o = n, r = (e = t).outerContainer.element(), o && (e.mothership.broadcastOn([$s()], {
                target: r
            }), e.uiMothership.broadcastOn([$s()], {
                target: r
            })), e.mothership.broadcastOn([VO], {
                readonly: o
            }), e.uiMothership.broadcastOn([VO], {
                readonly: o
            }), Ye("*", i.element()).forEach(function(t) {
                i.getSystem().getByDom(t).each(function(t) {
                    t.hasConfigured(Qp) && Qp.set(t, n)
                })
            })
        },
        PO = function(t, n) {
            t.on("init", function() {
                t.readonly && HO(n, !0)
            }), t.on("SwitchMode", function() {
                return HO(n, t.readonly)
            }), t.getParam("readonly", !1, "boolean") && t.setMode("readonly")
        },
        zO = function(n) {
            var t;
            return Qu.config({
                channels: (t = {}, t[VO] = {
                    schema: NO,
                    onReceive: function(t, o) {
                        n(t).each(function(t) {
                            var n, e;
                            n = t, e = o.readonly, Ye("*", n.element()).forEach(function(t) {
                                n.getSystem().getByDom(t).each(function(t) {
                                    t.hasConfigured(Qp) && Qp.set(t, e)
                                })
                            })
                        })
                    }
                }, t)
            })
        },
        LO = function(t) {
            var n = t.title.fold(function() {
                return {}
            }, function(t) {
                return {
                    attributes: {
                        title: t
                    }
                }
            });
            return {
                dom: P({
                    tag: "div",
                    classes: ["tox-toolbar__group"]
                }, n),
                components: [iO.parts().items({})],
                items: t.items,
                markers: {
                    itemSelector: "*:not(.tox-split-button) > .tox-tbtn:not([disabled]), .tox-split-button:not([disabled]), .tox-toolbar-nav-js:not([disabled])"
                },
                tgroupBehaviours: Wu([Iy.config({}), Pm.config({})])
            }
        },
        jO = function(t) {
            return iO.sketch(LO(t))
        },
        UO = function(e, t, n) {
            var o = wr(function(t) {
                var n = F(e.initGroups, jO);
                $k.setGroups(t, n)
            });
            return Wu([hm.config({
                mode: t,
                onEscape: e.onEscape,
                selector: ".tox-toolbar__group"
            }), rg("toolbar-events", [o]), zO(n)])
        },
        WO = function(t, n) {
            var e = t.cyclicKeying ? "cyclic" : "acyclic";
            return {
                uid: t.uid,
                dom: {
                    tag: "div",
                    classes: ["tox-toolbar-overlord"]
                },
                parts: {
                    "overflow-group": LO({
                        title: et.none(),
                        items: []
                    }),
                    "overflow-button": eC({
                        name: "more",
                        icon: et.some("more-drawer"),
                        disabled: !1,
                        tooltip: et.some("More..."),
                        primary: !1
                    }, et.none(), t.backstage.shared.providers)
                },
                splitToolbarBehaviours: UO(t, e, n)
            }
        },
        GO = function(t) {
            var n = WO(t, mO.getOverflow),
                e = mO.parts().primary({
                    dom: {
                        tag: "div",
                        classes: ["tox-toolbar__primary"]
                    }
                });
            return mO.sketch(P({}, n, {
                lazySink: t.getSink,
                getAnchor: function() {
                    return t.backstage.shared.anchors.toolbarOverflow()
                },
                parts: P({}, n.parts, {
                    overflow: {
                        dom: {
                            tag: "div",
                            classes: ["tox-toolbar__overflow"]
                        }
                    }
                }),
                components: [e],
                markers: {
                    overflowToggledClass: "tox-tbtn--enabled"
                }
            }))
        },
        XO = function(t) {
            var n = RO.parts().primary({
                    dom: {
                        tag: "div",
                        classes: ["tox-toolbar__primary"]
                    }
                }),
                e = RO.parts().overflow({
                    dom: {
                        tag: "div",
                        classes: ["tox-toolbar__overflow"]
                    }
                }),
                o = WO(t, RO.getOverflow);
            return RO.sketch(P({}, o, {
                components: [n, e],
                markers: {
                    openClass: "tox-toolbar__overflow--open",
                    closedClass: "tox-toolbar__overflow--closed",
                    growingClass: "tox-toolbar__overflow--growing",
                    shrinkingClass: "tox-toolbar__overflow--shrinking",
                    overflowToggledClass: "tox-tbtn--enabled"
                }
            }))
        },
        YO = function(t) {
            var n = t.cyclicKeying ? "cyclic" : "acyclic";
            return $k.sketch({
                uid: t.uid,
                dom: {
                    tag: "div",
                    classes: ["tox-toolbar"]
                },
                components: [$k.parts().groups({})],
                toolbarBehaviours: UO(t, n, nt(et.none()))
            })
        },
        qO = [re("disabled", !1), $n("tooltip"), $n("icon"), $n("text"), ie("onSetup", function() {
            return tt
        })],
        KO = pn([Ln("type"), Un("onAction")].concat(qO)),
        $O = function(t) {
            return Tn("toolbarbutton", KO, t)
        },
        JO = pn([Ln("type"), $n("tooltip"), $n("icon"), $n("text"), Un("fetch"), ie("onSetup", function() {
            return tt
        })]),
        QO = function(t) {
            return Tn("menubutton", JO, t)
        },
        ZO = pn([Ln("type"), $n("tooltip"), $n("icon"), $n("text"), Jn("select"), Un("fetch"), ie("onSetup", function() {
            return tt
        }), oe("presets", "normal", ["normal", "color", "listpreview"]), Zn("columns", 1), Un("onAction"), Un("onItemAction")]),
        tE = [re("active", !1)].concat(qO),
        nE = pn(tE.concat([Ln("type"), Un("onAction")])),
        eE = function(t) {
            return Tn("ToggleButton", nE, t)
        },
        oE = [ie("predicate", function() {
            return !1
        }), oe("scope", "node", ["node", "editor"]), oe("position", "selection", ["node", "selection", "line"])],
        rE = qO.concat([Zn("type", "contextformbutton"), Zn("primary", !1), Un("onAction"), ae("original", d)]),
        iE = tE.concat([Zn("type", "contextformbutton"), Zn("primary", !1), Un("onAction"), ae("original", d)]),
        uE = qO.concat([Zn("type", "contextformbutton")]),
        aE = tE.concat([Zn("type", "contextformtogglebutton")]),
        cE = _n("type", {
            contextformbutton: rE,
            contextformtogglebutton: iE
        }),
        sE = pn([Zn("type", "contextform"), ie("initValue", function() {
            return ""
        }), $n("label"), Xn("commands", cE), qn("launch", _n("type", {
            contextformbutton: uE,
            contextformtogglebutton: aE
        }))].concat(oE)),
        fE = pn([Zn("type", "contexttoolbar"), Ln("items")].concat(oE)),
        lE = oi("toolbar.button.execute"),
        dE = {
            "alloy.execute": ["disabling", "alloy.base.behaviour", "toggling", "toolbar-button-events"]
        },
        mE = /* */ Object.freeze({
            getState: function(t, n, e) {
                return e
            }
        }),
        gE = /* */ Object.freeze({
            events: function(r, i) {
                var o = function(e, o) {
                    r.updateState.each(function(t) {
                        var n = t(e, o);
                        i.set(n)
                    }), r.renderComponents.each(function(t) {
                        var n = t(o, i.get());
                        Ns(e), W(n, function(t) {
                            Fs(e, e.getSystem().build(t))
                        })
                    })
                };
                return fr([mr(xo(), function(t, n) {
                    var e = r.channel;
                    D(n.channels(), e) && o(t, n.data())
                }), wr(function(n, t) {
                    r.initialData.each(function(t) {
                        o(n, t)
                    })
                })])
            }
        }),
        pE = /* */ Object.freeze({
            init: function(t) {
                var n = ce(et.none());
                return {
                    readState: function() {
                        return n.get().getOr("none")
                    },
                    get: function() {
                        return n.get()
                    },
                    set: function(t) {
                        return n.set(t)
                    },
                    clear: function() {
                        return n.set(et.none())
                    }
                }
            }
        }),
        hE = [Pn("channel"), Yn("renderComponents"), Yn("updateState"), Yn("initialData")],
        vE = Xu({
            fields: hE,
            name: "reflecting",
            active: gE,
            apis: mE,
            state: pE
        }),
        bE = nt([Pn("toggleClass"), Pn("fetch"), Iu("onExecute"), Zn("getHotspot", et.some), Zn("getAnchorOverrides", nt({})), Zn("layouts", et.none()), Iu("onItemExecute"), Yn("lazySink"), Pn("dom"), Mu("onOpen"), nf("splitDropdownBehaviours", [Fb, hm, Pm]), Zn("matchWidth", !1), Zn("useMinWidth", !1), Zn("eventOrder", {}), Yn("role")].concat(uy())),
        yE = Df({
            factory: wg,
            schema: [Pn("dom")],
            name: "arrow",
            defaults: function(t) {
                return {
                    buttonBehaviours: Wu([Pm.revoke()])
                }
            },
            overrides: function(n) {
                return {
                    dom: {
                        tag: "span",
                        attributes: {
                            role: "presentation"
                        }
                    },
                    action: function(t) {
                        t.getSystem().getByUid(n.uid).each(jo)
                    },
                    buttonBehaviours: Wu([Jm.config({
                        toggleOnExecute: !1,
                        toggleClass: n.toggleClass
                    })])
                }
            }
        }),
        xE = Df({
            factory: wg,
            schema: [Pn("dom")],
            name: "button",
            defaults: function(t) {
                return {
                    buttonBehaviours: Wu([Pm.revoke()])
                }
            },
            overrides: function(e) {
                return {
                    dom: {
                        tag: "span",
                        attributes: {
                            role: "presentation"
                        }
                    },
                    action: function(n) {
                        n.getSystem().getByUid(e.uid).each(function(t) {
                            e.onExecute(t, n)
                        })
                    }
                }
            }
        }),
        wE = nt([yE, xE, Mf({
            factory: {
                sketch: function(t) {
                    return {
                        uid: t.uid,
                        dom: {
                            tag: "span",
                            styles: {
                                display: "none"
                            },
                            attributes: {
                                "aria-hidden": "true"
                            },
                            innerHtml: t.text
                        }
                    }
                }
            },
            schema: [Pn("text")],
            name: "aria-descriptor"
        }), _f({
            schema: [Au()],
            name: "menu",
            defaults: function(o) {
                return {
                    onExecute: function(n, e) {
                        n.getSystem().getByUid(o.uid).each(function(t) {
                            o.onItemExecute(t, n, e)
                        })
                    }
                }
            }
        }), Wb()]),
        SE = al({
            name: "SplitDropdown",
            configFields: bE(),
            partFields: wE(),
            factory: function(o, t, n, e) {
                var r = function(t) {
                        ll.getCurrent(t).each(function(t) {
                            kl.highlightFirst(t), hm.focusIn(t)
                        })
                    },
                    i = function(t) {
                        qb(o, function(t) {
                            return t
                        }, t, e, r, gb.HighlightFirst).get(tt)
                    },
                    u = function(t) {
                        var n = Gf(t, o, "button");
                        return jo(n), et.some(!0)
                    },
                    a = yt(fr([wr(function(e, t) {
                        Wf(e, o, "aria-descriptor").each(function(t) {
                            var n = oi("aria");
                            Xr(t.element(), "id", n), Xr(e.element(), "aria-describedby", n)
                        })
                    })]), xg(et.some(i)));
                return {
                    uid: o.uid,
                    dom: o.dom,
                    components: t,
                    eventOrder: P({}, o.eventOrder, {
                        "alloy.execute": ["disabling", "toggling", "alloy.base.behaviour"]
                    }),
                    events: a,
                    behaviours: of(o.splitDropdownBehaviours, [Fb.config({
                        others: {
                            sandbox: function(t) {
                                var n = Gf(t, o, "arrow");
                                return Jb(o, t, {
                                    onOpen: function() {
                                        Jm.on(n), Jm.on(t)
                                    },
                                    onClose: function() {
                                        Jm.off(n), Jm.off(t)
                                    }
                                })
                            }
                        }
                    }), hm.config({
                        mode: "special",
                        onSpace: u,
                        onEnter: u,
                        onDown: function(t) {
                            return i(t), et.some(!0)
                        }
                    }), Pm.config({}), Jm.config({
                        toggleOnExecute: !1,
                        aria: {
                            mode: "expanded"
                        }
                    })]),
                    domModification: {
                        attributes: {
                            role: o.role.getOr("button"),
                            "aria-haspopup": !0
                        }
                    }
                }
            }
        }),
        CE = oi("update-menu-text"),
        kE = oi("update-menu-icon"),
        OE = function(t, n, o) {
            var e = ce(tt),
                r = t.text.map(function(t) {
                    return Sg(tC(t, n, o.providers))
                }),
                i = t.icon.map(function(t) {
                    return Sg(ZS(t, o.providers.icons))
                }),
                u = function(t, n) {
                    var e = Im.getValue(t);
                    return Pm.focus(e), Lo(e, "keydown", {
                        raw: n.event().raw()
                    }), Ny.close(e), et.some(!0)
                },
                a = t.role.fold(function() {
                    return {}
                }, function(t) {
                    return {
                        role: t
                    }
                }),
                c = t.tooltip.fold(function() {
                    return {}
                }, function(t) {
                    var n = o.providers.translate(t);
                    return {
                        title: n,
                        "aria-label": n
                    }
                });
            return Sg(Ny.sketch(P({}, a, {
                dom: {
                    tag: "button",
                    classes: [n, n + "--select"].concat(F(t.classes, function(t) {
                        return n + "--" + t
                    })),
                    attributes: P({}, c)
                },
                components: ah([i.map(function(t) {
                    return t.asSpec()
                }), r.map(function(t) {
                    return t.asSpec()
                }), et.some({
                    dom: {
                        tag: "div",
                        classes: [n + "__select-chevron"],
                        innerHtml: kg("chevron-down", o.providers.icons)
                    }
                })]),
                matchWidth: !0,
                useMinWidth: !0,
                dropdownBehaviours: Wu(t.dropdownBehaviours.concat([th(t.disabled), Hy.config({}), wm.config({}), rg("dropdown-events", [oh(t, e), rh(t, e)]), rg("menubutton-update-display-text", [mr(CE, function(n, e) {
                    r.bind(function(t) {
                        return t.getOpt(n)
                    }).each(function(t) {
                        wm.set(t, [uu(o.providers.translate(e.event().text()))])
                    })
                }), mr(kE, function(n, e) {
                    i.bind(function(t) {
                        return t.getOpt(n)
                    }).each(function(t) {
                        wm.set(t, [ZS(e.event().icon(), o.providers.icons)])
                    })
                })])])),
                eventOrder: bt(dE, {
                    mousedown: ["focusing", "alloy.base.behaviour", "item-type-events", "normal-dropdown-events"]
                }),
                sandboxBehaviours: Wu([hm.config({
                    mode: "special",
                    onLeft: u,
                    onRight: u
                })]),
                lazySink: o.getSink,
                toggleClass: n + "--active",
                parts: {
                    menu: mv(0, t.columns, t.presets)
                },
                fetch: function() {
                    return jb.nu(t.fetch)
                }
            }))).asSpec()
        },
        EE = function(n) {
            return {
                isDisabled: function() {
                    return Qp.isDisabled(n)
                },
                setDisabled: function(t) {
                    return Qp.set(n, t)
                }
            }
        },
        TE = function(n) {
            return {
                setActive: function(t) {
                    Jm.set(n, t)
                },
                isActive: function() {
                    return Jm.isOn(n)
                },
                isDisabled: function() {
                    return Qp.isDisabled(n)
                },
                setDisabled: function(t) {
                    return Qp.set(n, t)
                }
            }
        },
        BE = function(e) {
            return {
                isDisabled: function() {
                    return Qp.isDisabled(e)
                },
                setDisabled: function(t) {
                    return Qp.set(e, t)
                },
                setActive: function(t) {
                    var n = e.element();
                    t ? (Ri(n, "tox-tbtn--enabled"), Xr(n, "aria-pressed", !0)) : (Ni(n, "tox-tbtn--enabled"), $r(n, "aria-pressed"))
                },
                isActive: function() {
                    return Hi(e.element(), "tox-tbtn--enabled")
                }
            }
        },
        AE = function(t, n) {
            return t.map(function(t) {
                return {
                    "aria-label": n.translate(t),
                    title: n.translate(t)
                }
            }).getOr({})
        },
        DE = oi("focus-button"),
        _E = ["checklist", "ordered-list"],
        ME = ["indent", "outdent", "table-insert-column-after", "table-insert-column-before", "unordered-list"],
        FE = function(n, e, t, o, r, i) {
            var u, a = function(t) {
                    return bp.isRtl() && D(_E, t) ? t + "-rtl" : t
                },
                c = bp.isRtl() && n.exists(function(t) {
                    return D(ME, t)
                });
            return {
                dom: {
                    tag: "button",
                    classes: ["tox-tbtn"].concat(e.isSome() ? ["tox-tbtn--select"] : []).concat(c ? ["tox-tbtn__icon-rtl"] : []),
                    attributes: AE(t, i)
                },
                components: ah([n.map(function(t) {
                    return QS(a(t), i.icons)
                }), e.map(function(t) {
                    return tC(t, "tox-tbtn", i)
                })]),
                eventOrder: (u = {}, u[no()] = ["focusing", "alloy.base.behaviour", "common-button-display-events"], u),
                buttonBehaviours: Wu([rg("common-button-display-events", [mr(no(), function(t, n) {
                    n.event().prevent(), zo(t, DE)
                })])].concat(o.map(function(t) {
                    return vE.config({
                        channel: t,
                        initialData: {
                            icon: n,
                            text: e
                        },
                        renderComponents: function(t, n) {
                            return ah([t.icon.map(function(t) {
                                return QS(a(t), i.icons)
                            }), t.text.map(function(t) {
                                return tC(t, "tox-tbtn", i)
                            })])
                        }
                    })
                }).toArray()).concat(r.getOr([])))
            }
        },
        IE = function(t, n, e) {
            var o, r = ce(tt),
                i = FE(t.icon, t.text, t.tooltip, et.none(), et.none(), e);
            return wg.sketch({
                dom: i.dom,
                components: i.components,
                eventOrder: dE,
                buttonBehaviours: Wu([rg("toolbar-button-events", [(o = {
                    onAction: t.onAction,
                    getApi: n.getApi
                }, kr(function(n, t) {
                    eh(o, n)(function(t) {
                        Lo(n, lE, {
                            buttonApi: t
                        }), o.onAction(t)
                    })
                })), oh(n, r), rh(n, r)]), th(t.disabled)].concat(n.toolbarButtonBehaviours))
            })
        },
        RE = function(t, n, e) {
            return IE(t, {
                toolbarButtonBehaviours: [].concat(0 < e.length ? [rg("toolbarButtonWith", e)] : []),
                getApi: EE,
                onSetup: t.onSetup
            }, n)
        },
        VE = function(t, n, e) {
            return bt(IE(t, {
                toolbarButtonBehaviours: [wm.config({}), Jm.config({
                    toggleClass: "tox-tbtn--enabled",
                    aria: {
                        mode: "pressed"
                    },
                    toggleOnExecute: !1
                })].concat(0 < e.length ? [rg("toolbarToggleButtonWith", e)] : []),
                getApi: TE,
                onSetup: t.onSetup
            }, n))
        },
        NE = function(n, t) {
            var e, o, r, i, u = oi("channel-update-split-dropdown-display"),
                a = function(e) {
                    return {
                        isDisabled: function() {
                            return Qp.isDisabled(e)
                        },
                        setDisabled: function(t) {
                            return Qp.set(e, t)
                        },
                        setIconFill: function(t, n) {
                            du(e.element(), 'svg path[id="' + t + '"], rect[id="' + t + '"]').each(function(t) {
                                Xr(t, "fill", n)
                            })
                        },
                        setIconStroke: function(t, n) {
                            du(e.element(), 'svg path[id="' + t + '"], rect[id="' + t + '"]').each(function(t) {
                                Xr(t, "stroke", n)
                            })
                        },
                        setActive: function(n) {
                            Xr(e.element(), "aria-pressed", n), du(e.element(), "span").each(function(t) {
                                e.getSystem().getByDom(t).each(function(t) {
                                    return Jm.set(t, n)
                                })
                            })
                        },
                        isActive: function() {
                            return du(e.element(), "span").exists(function(t) {
                                return e.getSystem().getByDom(t).exists(Jm.isOn)
                            })
                        }
                    }
                },
                c = ce(tt),
                s = {
                    getApi: a,
                    onSetup: n.onSetup
                };
            return SE.sketch({
                dom: {
                    tag: "div",
                    classes: ["tox-split-button"],
                    attributes: yt({
                        "aria-pressed": !1
                    }, AE(n.tooltip, t.providers))
                },
                onExecute: function(t) {
                    n.onAction(a(t))
                },
                onItemExecute: function(t, n, e) {},
                splitDropdownBehaviours: Wu([nh(!1), rg("split-dropdown-events", [mr(DE, Pm.focus), oh(s, c), rh(s, c)])]),
                eventOrder: (e = {}, e[_o()] = ["alloy.base.behaviour", "split-dropdown-events"], e),
                toggleClass: "tox-tbtn--enabled",
                lazySink: t.getSink,
                fetch: (o = a, r = n, i = t.providers, function(n) {
                    return jb.nu(function(t) {
                        return r.fetch(t)
                    }).map(function(t) {
                        return et.from(Iv(bt(vv(oi("menu-value"), t, function(t) {
                            r.onItemAction(o(n), t)
                        }, r.columns, r.presets, ih.CLOSE_ON_EXECUTE, r.select.getOr(function() {
                            return !1
                        }), i), {
                            movement: yv(r.columns, r.presets),
                            menuBehaviours: cp("auto" !== r.columns ? [] : [wr(function(o, t) {
                                up(o, 4, Tp(r.presets)).each(function(t) {
                                    var n = t.numRows,
                                        e = t.numColumns;
                                    hm.setGridSize(o, n, e)
                                })
                            })])
                        })))
                    })
                }),
                parts: {
                    menu: mv(0, n.columns, n.presets)
                },
                components: [SE.parts().button(FE(n.icon, n.text, et.none(), et.some(u), et.some([Jm.config({
                    toggleClass: "tox-tbtn--enabled",
                    toggleOnExecute: !1
                })]), t.providers)), SE.parts().arrow({
                    dom: {
                        tag: "button",
                        classes: ["tox-tbtn", "tox-split-button__chevron"],
                        innerHtml: kg("chevron-down", t.providers.icons)
                    }
                }), SE.parts()["aria-descriptor"]({
                    text: t.providers.translate("To open the popup, press Shift+Enter")
                })]
            })
        },
        HE = function(t, n, e, o) {
            return OE({
                text: t.text,
                icon: t.icon,
                tooltip: t.tooltip,
                role: o,
                fetch: function(n) {
                    t.fetch(function(t) {
                        n(xy(t, ih.CLOSE_ON_EXECUTE, e))
                    })
                },
                onSetup: t.onSetup,
                getApi: BE,
                columns: 1,
                presets: "normal",
                classes: [],
                dropdownBehaviours: []
            }, n, e.shared)
        },
        PE = function(i, u) {
            return mr(lE, function(t, n) {
                var e, o = i.get(t),
                    r = (e = o, {
                        hide: function() {
                            return zo(e, Eo())
                        },
                        getValue: function() {
                            return Im.getValue(e)
                        }
                    });
                u.onAction(r, n.event().buttonApi())
            })
        },
        zE = function(t, n, e) {
            var o, r, i, u, a, c, s, f, l, d, m, g, p = {
                backstage: {
                    shared: {
                        providers: e
                    }
                }
            };
            return "contextformtogglebutton" === n.type ? (s = t, l = p, (d = (f = n).original).primary, m = h(d, ["primary"]), g = Bn(eE(P({}, m, {
                type: "togglebutton",
                onAction: function() {}
            }))), VE(g, l.backstage.shared.providers, [PE(s, f)])) : (o = t, i = p, (u = (r = n).original).primary, a = h(u, ["primary"]), c = Bn($O(P({}, a, {
                type: "button",
                onAction: function() {}
            }))), RE(c, i.backstage.shared.providers, [PE(o, r)]))
        },
        LE = function(t, n) {
            var e, o, r, i, u = t.label.fold(function() {
                    return {}
                }, function(t) {
                    return {
                        "aria-label": t
                    }
                }),
                a = Sg(wy.sketch({
                    inputClasses: ["tox-toolbar-textfield", "tox-toolbar-nav-js"],
                    data: t.initValue(),
                    inputAttributes: u,
                    selectOnFocus: !0,
                    inputBehaviours: Wu([hm.config({
                        mode: "special",
                        onEnter: function(t) {
                            return c.findPrimary(t).map(function(t) {
                                return jo(t), !0
                            })
                        },
                        onLeft: function(t, n) {
                            return n.cut(), et.none()
                        },
                        onRight: function(t, n) {
                            return n.cut(), et.none()
                        }
                    })])
                })),
                c = (e = a, o = t.commands, r = n.shared.providers, i = F(o, function(t) {
                    return Sg(zE(e, t, r))
                }), {
                    asSpecs: function() {
                        return F(i, function(t) {
                            return t.asSpec()
                        })
                    },
                    findPrimary: function(e) {
                        return bu(o, function(t, n) {
                            return t.primary ? et.from(i[n]).bind(function(t) {
                                return t.getOpt(e)
                            }).filter(x(Qp.isDisabled)) : et.none()
                        })
                    }
                });
            return YO({
                uid: oi("context-toolbar"),
                initGroups: [{
                    title: et.none(),
                    items: [a.asSpec()]
                }, {
                    title: et.none(),
                    items: c.asSpecs()
                }],
                onEscape: et.none,
                cyclicKeying: !0,
                backstage: n,
                getSink: function() {
                    return z.error("")
                }
            })
        },
        jE = oi("forward-slide"),
        UE = oi("backward-slide"),
        WE = oi("change-slide-event"),
        GE = "tox-pop--resizing",
        XE = function(n, t) {
            return bu(t, function(t) {
                return t.predicate(n.dom()) ? et.some({
                    toolbarApi: t,
                    elem: n
                }) : et.none()
            })
        },
        YE = function(n, e) {
            var t = function(t) {
                    return t.dom() === e.getBody()
                },
                o = fe.fromDom(e.selection.getNode());
            return XE(o, n.inNodeScope).orThunk(function() {
                return XE(o, n.inEditorScope).orThunk(function() {
                    return function(t, n, e) {
                        for (var o = t.dom(), r = E(e) ? e : nt(!1); o.parentNode;) {
                            o = o.parentNode;
                            var i = fe.fromDom(o),
                                u = n(i);
                            if (u.isSome()) return u;
                            if (r(i)) break
                        }
                        return et.none()
                    }(o, function(t) {
                        return XE(t, n.inNodeScope)
                    }, t)
                })
            })
        },
        qE = function(e, r) {
            var t = {},
                i = [],
                u = [],
                a = {},
                c = {},
                o = function(n, e) {
                    var o = Bn(Tn("ContextForm", sE, e));
                    (t[n] = o).launch.map(function(t) {
                        a["form:" + n] = P({}, e.launch, {
                            type: "contextformtogglebutton" === t.type ? "togglebutton" : "button",
                            onAction: function() {
                                r(o)
                            }
                        })
                    }), "editor" === o.scope ? u.push(o) : i.push(o), c[n] = o
                },
                s = function(n, e) {
                    var t;
                    (t = e, Tn("ContextToolbar", fE, t)).each(function(t) {
                        "editor" === e.scope ? u.push(t) : i.push(t), c[n] = t
                    })
                },
                n = ut(e);
            return W(n, function(t) {
                var n = e[t];
                "contextform" === n.type ? o(t, n) : "contexttoolbar" === n.type && s(t, n)
            }), {
                forms: t,
                inNodeScope: i,
                inEditorScope: u,
                lookupTable: c,
                formNavigators: a
            }
        },
        KE = function(o, r) {
            return function(n) {
                var e = ce(et.none()),
                    t = function() {
                        n.setActive(o.formatter.match(r));
                        var t = o.formatter.formatChanged(r, n.setActive).unbind;
                        e.set(et.some(t))
                    };
                return o.initialized ? t() : o.on("init", t),
                    function() {
                        return e.get().each(function(t) {
                            return t()
                        })
                    }
            }
        },
        $E = function(n) {
            return function(t) {
                return function() {
                    n.undoManager.transact(function() {
                        n.focus(), n.execCommand("mceToggleFormat", !1, t.format)
                    })
                }
            }
        },
        JE = function(t, n, e, o) {
            var u, a, r, c, i, s = "basic" === e.type ? function() {
                return F(e.data, function(t) {
                    return vk(t, o.isSelectedFor, o.getPreviewFor)
                })
            } : e.getData;
            return {
                items: (u = n, a = o, r = function(t, n, e, o) {
                    var r = u.shared.providers.translate(t.title);
                    if ("separator" === t.type) return et.some({
                        type: "separator",
                        text: r
                    });
                    if ("submenu" !== t.type) return et.some(P({
                        type: "togglemenuitem",
                        text: r,
                        active: t.isSelected(o),
                        disabled: e,
                        onAction: a.onAction(t)
                    }, t.getStylePreview().fold(function() {
                        return {}
                    }, function(t) {
                        return {
                            meta: {
                                style: t
                            }
                        }
                    })));
                    var i = K(t.getStyleItems(), function(t) {
                        return c(t, n, o)
                    });
                    return 0 === n && i.length <= 0 ? et.none() : et.some({
                        type: "nestedmenuitem",
                        text: r,
                        disabled: i.length <= 0,
                        getSubmenuItems: function() {
                            return K(t.getStyleItems(), function(t) {
                                return c(t, n, o)
                            })
                        }
                    })
                }, c = function(t, n, e) {
                    var o = "formatter" === t.type && a.isInvalid(t);
                    return 0 === n ? o ? [] : r(t, n, !1, e).toArray() : r(t, n, o, e).toArray()
                }, i = function(t) {
                    var n = a.getCurrentValue(),
                        e = a.shouldHide ? 0 : 1;
                    return K(t, function(t) {
                        return c(t, e, n)
                    })
                }, {
                    validateItems: i,
                    getFetch: function(o, r) {
                        return function(t) {
                            var n = r(),
                                e = i(n);
                            t(xy(e, ih.CLOSE_ON_EXECUTE, o))
                        }
                    }
                }),
                getStyleItems: s
            }
        },
        QE = function(o, t, n, r) {
            var e = JE(0, t, n, r),
                i = e.items,
                u = e.getStyleItems;
            return OE({
                text: r.icon.isSome() ? et.none() : et.some(""),
                icon: r.icon,
                tooltip: et.from(r.tooltip),
                role: et.none(),
                fetch: i.getFetch(t, u),
                onSetup: function(e) {
                    return r.setInitialValue.each(function(t) {
                        return t(e.getComponent())
                    }), r.nodeChangeHandler.map(function(t) {
                        var n = t(e.getComponent());
                        return o.on("NodeChange", n),
                            function() {
                                o.off("NodeChange", n)
                            }
                    }).getOr(tt)
                },
                getApi: function(t) {
                    return {
                        getComponent: function() {
                            return t
                        }
                    }
                },
                columns: 1,
                presets: "normal",
                classes: r.icon.isSome() ? [] : ["bespoke"],
                dropdownBehaviours: []
            }, "tox-tbtn", t.shared)
        };
    (PC = HC || (HC = {}))[PC.SemiColon = 0] = "SemiColon", PC[PC.Space = 1] = "Space";
    var ZE, tT, nT = function(t, n, e, o) {
            var r, i, u = Ft(t.settings, n).getOr(e);
            return {
                type: "basic",
                data: (i = u, r = o === HC.SemiColon ? i.replace(/;$/, "").split(";") : i.split(" "), F(r, function(t) {
                    var n = t,
                        e = t,
                        o = t.split("=");
                    return 1 < o.length && (n = o[0], e = o[1]), {
                        title: n,
                        format: e
                    }
                }))
            }
        },
        eT = [{
            title: "Left",
            icon: "align-left",
            format: "alignleft"
        }, {
            title: "Center",
            icon: "align-center",
            format: "aligncenter"
        }, {
            title: "Right",
            icon: "align-right",
            format: "alignright"
        }, {
            title: "Justify",
            icon: "align-justify",
            format: "alignjustify"
        }],
        oT = function(e) {
            var n = function(t) {
                    var n = N(eT, function(t) {
                        return e.formatter.match(t.format)
                    }).fold(function() {
                        return "left"
                    }, function(t) {
                        return t.title.toLowerCase()
                    });
                    Lo(t, kE, {
                        icon: "align-" + n
                    })
                },
                t = et.some(function(t) {
                    return function() {
                        return n(t)
                    }
                }),
                o = et.some(function(t) {
                    return n(t)
                }),
                r = {
                    type: "basic",
                    data: eT
                };
            return {
                tooltip: "Align",
                icon: et.some("align-left"),
                isSelectedFor: function(t) {
                    return function() {
                        return e.formatter.match(t)
                    }
                },
                getCurrentValue: nt(et.none()),
                getPreviewFor: function(t) {
                    return function() {
                        return et.none()
                    }
                },
                onAction: $E(e),
                setInitialValue: o,
                nodeChangeHandler: t,
                dataset: r,
                shouldHide: !1,
                isInvalid: function(t) {
                    return !e.formatter.canApply(t.format)
                }
            }
        },
        rT = ["-apple-system", "Segoe UI", "Roboto", "Helvetica Neue", "sans-serif"],
        iT = function(t) {
            var n = t.split(/\s*,\s*/);
            return F(n, function(t) {
                return t.replace(/^['"]+|['"]+$/g, "")
            })
        },
        uT = function(r) {
            var i = function() {
                    var e = function(t) {
                            return t ? iT(t)[0] : ""
                        },
                        t = r.queryCommandValue("FontName"),
                        n = u.data,
                        o = t ? t.toLowerCase() : "";
                    return {
                        matchOpt: N(n, function(t) {
                            var n = t.format;
                            return n.toLowerCase() === o || e(n).toLowerCase() === e(o).toLowerCase()
                        }).orThunk(function() {
                            return 0 === (t = o).indexOf("-apple-system") && (n = iT(t.toLowerCase()), $(rT, function(t) {
                                return -1 < n.indexOf(t.toLowerCase())
                            })) ? et.from({
                                title: "System Font",
                                format: o
                            }) : et.none();
                            var t, n
                        }),
                        font: t
                    }
                },
                n = function(t) {
                    var n = i(),
                        e = n.matchOpt,
                        o = n.font,
                        r = e.fold(function() {
                            return o
                        }, function(t) {
                            return t.title
                        });
                    Lo(t, CE, {
                        text: r
                    })
                },
                t = et.some(function(t) {
                    return function() {
                        return n(t)
                    }
                }),
                e = et.some(function(t) {
                    return n(t)
                }),
                u = nT(r, "font_formats", "Andale Mono=andale mono,monospace;Arial=arial,helvetica,sans-serif;Arial Black=arial black,sans-serif;Book Antiqua=book antiqua,palatino,serif;Comic Sans MS=comic sans ms,sans-serif;Courier New=courier new,courier,monospace;Georgia=georgia,palatino,serif;Helvetica=helvetica,arial,sans-serif;Impact=impact,sans-serif;Symbol=symbol;Tahoma=tahoma,arial,helvetica,sans-serif;Terminal=terminal,monaco,monospace;Times New Roman=times new roman,times,serif;Trebuchet MS=trebuchet ms,geneva,sans-serif;Verdana=verdana,geneva,sans-serif;Webdings=webdings;Wingdings=wingdings,zapf dingbats", HC.SemiColon);
            return {
                tooltip: "Fonts",
                icon: et.none(),
                isSelectedFor: function(n) {
                    return function(t) {
                        return t.exists(function(t) {
                            return t.format === n
                        })
                    }
                },
                getCurrentValue: function() {
                    return i().matchOpt
                },
                getPreviewFor: function(t) {
                    return function() {
                        return et.some({
                            tag: "div",
                            styleAttr: -1 === t.indexOf("dings") ? "font-family:" + t : ""
                        })
                    }
                },
                onAction: function(t) {
                    return function() {
                        r.undoManager.transact(function() {
                            r.focus(), r.execCommand("FontName", !1, t.format)
                        })
                    }
                },
                setInitialValue: e,
                nodeChangeHandler: t,
                dataset: u,
                shouldHide: !1,
                isInvalid: function() {
                    return !1
                }
            }
        },
        aT = {
            "8pt": "1",
            "10pt": "2",
            "12pt": "3",
            "14pt": "4",
            "18pt": "5",
            "24pt": "6",
            "36pt": "7"
        },
        cT = function(t, n) {
            return /[0-9.]+px$/.test(t) ? (e = 72 * parseInt(t, 10) / 96, o = n || 0, r = Math.pow(10, o), Math.round(e * r) / r + "pt") : t;
            var e, o, r
        },
        sT = function(e) {
            var i = function() {
                    var o = et.none(),
                        r = u.data,
                        i = e.queryCommandValue("FontSize");
                    if (i)
                        for (var t = function(t) {
                                var n = cT(i, t),
                                    e = mt(aT, n).getOr("");
                                o = N(r, function(t) {
                                    return t.format === i || t.format === n || t.format === e
                                })
                            }, n = 3; o.isNone() && 0 <= n; n--) t(n);
                    return {
                        matchOpt: o,
                        px: i
                    }
                },
                n = function(t) {
                    var n = i(),
                        e = n.matchOpt,
                        o = n.px,
                        r = e.fold(function() {
                            return o
                        }, function(t) {
                            return t.title
                        });
                    Lo(t, CE, {
                        text: r
                    })
                },
                t = et.some(function(t) {
                    return function() {
                        return n(t)
                    }
                }),
                o = et.some(function(t) {
                    return n(t)
                }),
                u = nT(e, "fontsize_formats", "8pt 10pt 12pt 14pt 18pt 24pt 36pt", HC.Space);
            return {
                tooltip: "Font sizes",
                icon: et.none(),
                isSelectedFor: function(n) {
                    return function(t) {
                        return t.exists(function(t) {
                            return t.format === n
                        })
                    }
                },
                getPreviewFor: function() {
                    return nt(et.none())
                },
                getCurrentValue: function() {
                    return i().matchOpt
                },
                onAction: function(t) {
                    return function() {
                        e.undoManager.transact(function() {
                            e.focus(), e.execCommand("FontSize", !1, t.format)
                        })
                    }
                },
                setInitialValue: o,
                nodeChangeHandler: t,
                dataset: u,
                shouldHide: !1,
                isInvalid: function() {
                    return !1
                }
            }
        },
        fT = function(e, t, n) {
            var o = t();
            return bu(n, function(n) {
                return N(o, function(t) {
                    return e.formatter.matchNode(n, t.format)
                })
            }).orThunk(function() {
                return e.formatter.match("p") ? et.some({
                    title: "Paragraph",
                    format: "p"
                }) : et.none()
            })
        },
        lT = function(t) {
            var n = t.selection.getStart(!0) || t.getBody();
            return t.dom.getParents(n, function() {
                return !0
            }, t.getBody())
        },
        dT = function(o) {
            var e = function(t, n) {
                    var e = fT(o, function() {
                        return r.data
                    }, t).fold(function() {
                        return "Paragraph"
                    }, function(t) {
                        return t.title
                    });
                    Lo(n, CE, {
                        text: e
                    })
                },
                t = et.some(function(n) {
                    return function(t) {
                        return e(t.parents, n)
                    }
                }),
                n = et.some(function(t) {
                    var n = lT(o);
                    e(n, t)
                }),
                r = nT(o, "block_formats", "Paragraph=p;Heading 1=h1;Heading 2=h2;Heading 3=h3;Heading 4=h4;Heading 5=h5;Heading 6=h6;Preformatted=pre", HC.SemiColon);
            return {
                tooltip: "Blocks",
                icon: et.none(),
                isSelectedFor: function(t) {
                    return function() {
                        return o.formatter.match(t)
                    }
                },
                getCurrentValue: nt(et.none()),
                getPreviewFor: function(n) {
                    return function() {
                        var t = o.formatter.get(n);
                        return et.some({
                            tag: 0 < t.length && (t[0].inline || t[0].block) || "div",
                            styleAttr: o.formatter.getCssText(n)
                        })
                    }
                },
                onAction: $E(o),
                setInitialValue: n,
                nodeChangeHandler: t,
                dataset: r,
                shouldHide: !1,
                isInvalid: function(t) {
                    return !o.formatter.canApply(t.format)
                }
            }
        },
        mT = function(i) {
            var e = function(t, n) {
                    var e = function(t) {
                            var n = t.items;
                            return n !== undefined && 0 < n.length ? K(n, e) : [{
                                title: t.title,
                                format: t.format
                            }]
                        },
                        o = K(hk(i), e),
                        r = fT(i, function() {
                            return o
                        }, t).fold(function() {
                            return "Paragraph"
                        }, function(t) {
                            return t.title
                        });
                    Lo(n, CE, {
                        text: r
                    })
                },
                t = et.some(function(n) {
                    return function(t) {
                        return e(t.parents, n)
                    }
                }),
                n = et.some(function(t) {
                    var n = lT(i);
                    e(n, t)
                });
            return {
                tooltip: "Formats",
                icon: et.none(),
                isSelectedFor: function(t) {
                    return function() {
                        return i.formatter.match(t)
                    }
                },
                getCurrentValue: nt(et.none()),
                getPreviewFor: function(n) {
                    return function() {
                        var t = i.formatter.get(n);
                        return t !== undefined ? et.some({
                            tag: 0 < t.length && (t[0].inline || t[0].block) || "div",
                            styleAttr: i.formatter.getCssText(n)
                        }) : et.none()
                    }
                },
                onAction: $E(i),
                setInitialValue: n,
                nodeChangeHandler: t,
                shouldHide: i.getParam("style_formats_autohide", !1, "boolean"),
                isInvalid: function(t) {
                    return !i.formatter.canApply(t.format)
                }
            }
        },
        gT = [{
            name: "history",
            items: ["undo", "redo"]
        }, {
            name: "styles",
            items: ["styleselect"]
        }, {
            name: "formatting",
            items: ["bold", "italic"]
        }, {
            name: "alignment",
            items: ["alignleft", "aligncenter", "alignright", "alignjustify"]
        }, {
            name: "indentation",
            items: ["outdent", "indent"]
        }, {
            name: "permanent pen",
            items: ["permanentpen"]
        }, {
            name: "comments",
            items: ["addcomment"]
        }],
        pT = function(o, r) {
            return function(t, n) {
                var e = o(t).mapError(function(t) {
                    return Dn(t)
                }).getOrDie();
                return r(e, n)
            }
        },
        hT = {
            button: pT($O, function(t, n) {
                return e = t, o = n.backstage.shared.providers, RE(e, o, []);
                var e, o
            }),
            togglebutton: pT(eE, function(t, n) {
                return e = t, o = n.backstage.shared.providers, VE(e, o, []);
                var e, o
            }),
            menubutton: pT(QO, function(t, n) {
                return HE(t, "tox-tbtn", n.backstage, et.none())
            }),
            splitbutton: pT(function(t) {
                return Tn("SplitButton", ZO, t)
            }, function(t, n) {
                return NE(t, n.backstage.shared)
            }),
            styleSelectButton: function(t, n) {
                return e = t, o = n.backstage, r = o.styleselect, QE(e, o, r, mT(e));
                var e, o, r
            },
            fontsizeSelectButton: function(t, n) {
                return e = t, o = n.backstage, r = sT(e), QE(e, o, r.dataset, r);
                var e, o, r
            },
            fontSelectButton: function(t, n) {
                return e = t, o = n.backstage, r = uT(e), QE(e, o, r.dataset, r);
                var e, o, r
            },
            formatButton: function(t, n) {
                return e = t, o = n.backstage, r = dT(e), QE(e, o, r.dataset, r);
                var e, o, r
            },
            alignMenuButton: function(t, n) {
                return e = t, o = n.backstage, r = oT(e), QE(e, o, r.dataset, r);
                var e, o, r
            }
        },
        vT = {
            styleselect: hT.styleSelectButton,
            fontsizeselect: hT.fontsizeSelectButton,
            fontselect: hT.fontSelectButton,
            formatselect: hT.formatButton,
            align: hT.alignMenuButton
        },
        bT = function(t) {
            var n, e, o, r = t.toolbar,
                i = t.buttons;
            return !1 === r ? [] : r === undefined || !0 === r ? (e = i, o = F(gT, function(t) {
                var n = I(t.items, function(t) {
                    return gt(e, t) || gt(vT, t)
                });
                return {
                    name: t.name,
                    items: n
                }
            }), I(o, function(t) {
                return 0 < t.items.length
            })) : L(r) ? (n = r.split("|"), F(n, function(t) {
                return {
                    items: t.trim().split(" ")
                }
            })) : T(r, function(t) {
                return gt(t, "name") && gt(t, "items")
            }) ? r : (H.console.error("Toolbar type should be string, string[], boolean or ToolbarGroup[]"), [])
        },
        yT = function(n, e, o, r, t) {
            return mt(e, o.toLowerCase()).orThunk(function() {
                return t.bind(function(t) {
                    return bu(t, function(t) {
                        return mt(e, t + o.toLowerCase())
                    })
                })
            }).fold(function() {
                return mt(vT, o.toLowerCase()).map(function(t) {
                    return t(n, r)
                }).orThunk(function() {
                    return et.none()
                })
            }, function(t) {
                return e = r, mt(hT, (n = t).type).fold(function() {
                    return H.console.error("skipping button defined by", n), et.none()
                }, function(t) {
                    return et.some(t(n, e))
                });
                var n, e
            })
        },
        xT = function(e, o, r, i) {
            var t = bT(o),
                n = F(t, function(t) {
                    var n = K(t.items, function(t) {
                        return 0 === t.trim().length ? [] : yT(e, o.buttons, t, r, i).toArray()
                    });
                    return {
                        title: et.from(e.translate(t.name)),
                        items: n
                    }
                });
            return I(n, function(t) {
                return 0 < t.items.length
            })
        },
        wT = function(i, t, u, c) {
            var e, o, s = su((e = {
                    sink: u,
                    onEscape: function() {
                        return i.focus(), et.some(!0)
                    }
                }, o = ce([]), yg.sketch({
                    dom: {
                        tag: "div",
                        classes: ["tox-pop"]
                    },
                    fireDismissalEventInstead: {
                        event: "doNotDismissYet"
                    },
                    onShow: function(t) {
                        o.set([]), yg.getContent(t).each(function(t) {
                            $i(t.element(), "visibility")
                        }), Ni(t.element(), GE), $i(t.element(), "width")
                    },
                    inlineBehaviours: Wu([rg("context-toolbar-events", [xr(go(), function(t, n) {
                        yg.getContent(t).each(function(t) {}), Ni(t.element(), GE), $i(t.element(), "width")
                    }), mr(WE, function(n, e) {
                        $i(n.element(), "width");
                        var t = ca(n.element());
                        yg.setContent(n, e.event().contents()), Ri(n.element(), GE);
                        var o = ca(n.element());
                        Wi(n.element(), "width", t + "px"), yg.getContent(n).each(function(t) {
                            e.event().focus().bind(function(t) {
                                return Rl(t), Nl(n.element())
                            }).orThunk(function() {
                                return hm.focusIn(t), Vl()
                            })
                        }), Tg.setTimeout(function() {
                            Wi(n.element(), "width", o + "px")
                        }, 0)
                    }), mr(jE, function(t, n) {
                        yg.getContent(t).each(function(t) {
                            o.set(o.get().concat([{
                                bar: t,
                                focus: Vl()
                            }]))
                        }), Lo(t, WE, {
                            contents: n.event().forwardContents(),
                            focus: et.none()
                        })
                    }), mr(UE, function(n, t) {
                        rt(o.get()).each(function(t) {
                            o.set(o.get().slice(0, o.get().length - 1)), Lo(n, WE, {
                                contents: fu(t.bar),
                                focus: t.focus
                            })
                        })
                    })]), hm.config({
                        mode: "special",
                        onEscape: function(n) {
                            return rt(o.get()).fold(function() {
                                return e.onEscape()
                            }, function(t) {
                                return zo(n, UE), et.some(!0)
                            })
                        }
                    })]),
                    lazySink: function() {
                        return z.value(e.sink)
                    }
                }))),
                f = function() {
                    return et.some(fe.fromDom(i.contentAreaContainer))
                };
            i.on("init", function() {
                var t = i.getBody().ownerDocument.defaultView,
                    n = zv(fe.fromDom(t), "scroll", function() {
                        l.get().each(function(t) {
                            var n = d.get().getOr(i.selection.getNode()).getBoundingClientRect(),
                                e = i.contentAreaContainer.getBoundingClientRect(),
                                o = n.bottom < 0,
                                r = n.top > e.height;
                            o || r ? Wi(s.element(), "display", "none") : ($i(s.element(), "display"), Ds.positionWithin(u, t, s, f()))
                        })
                    });
                i.on("remove", function() {
                    n.unbind()
                })
            });
            var l = ce(et.none()),
                d = ce(et.none()),
                n = ce(null),
                m = function(t) {
                    return {
                        dom: {
                            tag: "div",
                            classes: ["tox-pop__dialog"]
                        },
                        components: [t],
                        behaviours: Wu([hm.config({
                            mode: "acyclic"
                        }), rg("pop-dialog-wrap-events", [wr(function(t) {
                            i.shortcuts.add("ctrl+F9", "focus statusbar", function() {
                                return hm.focusIn(t)
                            })
                        }), Sr(function(t) {
                            i.shortcuts.remove("ctrl+F9")
                        })])])
                    }
                },
                a = xt(function() {
                    return qE(t, function(t) {
                        var n = g(t);
                        Lo(s, jE, {
                            forwardContents: m(n)
                        })
                    })
                }),
                g = function(t) {
                    var n, e, o = i.ui.registry.getAll().buttons,
                        r = a();
                    return "contexttoolbar" === t.type ? (n = yt(o, r.formNavigators), e = xT(i, {
                        buttons: n,
                        toolbar: t.items
                    }, c, et.some(["form:"])), YO({
                        uid: oi("context-toolbar"),
                        initGroups: e,
                        onEscape: et.none,
                        cyclicKeying: !0,
                        backstage: c.backstage,
                        getSink: function() {
                            return z.error("")
                        }
                    })) : LE(t, c.backstage)
                };
            i.on("contexttoolbar-show", function(n) {
                var t = a();
                Ft(t.lookupTable, n.toolbarKey).each(function(t) {
                    b(t, n.target === i ? et.none() : et.some(n)), yg.getContent(s).each(hm.focusIn)
                })
            });
            var r = {
                    valignCentre: [],
                    alignCentre: [],
                    alignLeft: ["tox-pop--align-left"],
                    alignRight: ["tox-pop--align-right"],
                    right: ["tox-pop--right"],
                    left: ["tox-pop--left"],
                    bottom: ["tox-pop--bottom"],
                    top: ["tox-pop--top"]
                },
                p = {
                    maxHeightFunction: Wa()
                },
                h = {
                    bubble: Ka(12, 0, r),
                    layouts: {
                        onLtr: function() {
                            return [fc]
                        },
                        onRtl: function() {
                            return [lc]
                        }
                    },
                    overrides: p
                },
                v = {
                    bubble: Ka(0, 12, r),
                    layouts: {
                        onLtr: function() {
                            return [cc, sc, uc, rc, ac, ic]
                        },
                        onRtl: function() {
                            return [cc, sc, ac, ic, uc, rc]
                        }
                    },
                    overrides: p
                },
                b = function(t, n) {
                    x();
                    var e, o, r, i = g(t),
                        u = n.map(fe.fromDom),
                        a = (e = t.position, o = u, r = "node" === e ? c.backstage.shared.anchors.node(o) : c.backstage.shared.anchors.cursor(), bt(r, "line" === e ? h : v));
                    l.set(et.some(a)), d.set(n), yg.showWithin(s, a, m(i), f()), $i(s.element(), "display")
                },
                y = function() {
                    var t = a();
                    YE(t, i).fold(function() {
                        l.set(et.none()), yg.hide(s)
                    }, function(t) {
                        b(t.toolbarApi, et.some(t.elem.dom()))
                    })
                },
                x = function() {
                    var t = n.get();
                    null !== t && (Tg.clearTimeout(t), n.set(null))
                },
                w = function(t) {
                    x(), n.set(t)
                };
            i.on("init", function() {
                i.on("click keyup SetContent ObjectResized ResizeEditor", function(t) {
                    w(Tg.setEditorTimeout(i, y, 0))
                }), i.on("focusout", function(t) {
                    Tg.setEditorTimeout(i, function() {
                        Nl(u.element()).isNone() && Nl(s.element()).isNone() && (l.set(et.none()), yg.hide(s))
                    }, 0)
                }), i.on("SwitchMode", function() {
                    i.readonly && (l.set(et.none()), yg.hide(s))
                }), i.on("NodeChange", function(t) {
                    Nl(s.element()).fold(function() {
                        w(Tg.setEditorTimeout(i, y, 0))
                    }, function(t) {})
                })
            })
        },
        ST = function(t, e, o) {
            var n = zv(fe.fromDom(H.document), "mousedown", function(n) {
                    W([e, o], function(t) {
                        t.broadcastOn([$s()], {
                            target: n.target()
                        })
                    })
                }),
                r = zv(fe.fromDom(H.document), "touchstart", function(n) {
                    W([e, o], function(t) {
                        t.broadcastOn([$s()], {
                            target: n.target()
                        })
                    })
                }),
                i = zv(fe.fromDom(H.document), "mouseup", function(n) {
                    0 === n.raw().button && W([e, o], function(t) {
                        t.broadcastOn([Js()], {
                            target: n.target()
                        })
                    })
                }),
                u = function(n) {
                    W([e, o], function(t) {
                        t.broadcastOn([$s()], {
                            target: fe.fromDom(n.target)
                        })
                    })
                };
            t.on("mousedown", u), t.on("touchstart", u);
            var a = function(n) {
                0 === n.button && W([e, o], function(t) {
                    t.broadcastOn([Js()], {
                        target: fe.fromDom(n.target)
                    })
                })
            };
            t.on("mouseup", a);
            var c = function(n) {
                W([e, o], function(t) {
                    t.broadcastEvent(Ao(), n)
                })
            };
            t.on("ScrollWindow", c);
            var s = function(n) {
                W([e, o], function(t) {
                    t.broadcastEvent(Do(), n)
                })
            };
            t.on("ResizeWindow", s), t.on("remove", function() {
                t.off("mousedown", u), t.off("touchstart", u), t.off("mouseup", a), t.off("ResizeWindow", s), t.off("ScrollWindow", c), n.unbind(), r.unbind(), i.unbind()
            }), t.on("detach", function() {
                zs(e), zs(o), e.destroy(), o.destroy()
            })
        },
        CT = nt([Zn("shell", !1), Pn("makeItem"), Zn("setupItem", tt), rf("listBehaviours", [wm])]),
        kT = Mf({
            name: "items",
            overrides: function(t) {
                return {
                    behaviours: Wu([wm.config({})])
                }
            }
        }),
        OT = nt([kT]),
        ET = al({
            name: nt("CustomList")(),
            configFields: CT(),
            partFields: OT(),
            factory: function(s, t, n, e) {
                var o = s.shell ? {
                        behaviours: [wm.config({})],
                        components: []
                    } : {
                        behaviours: [],
                        components: t
                    },
                    r = function(t) {
                        return s.shell ? et.some(t) : Wf(t, s, "items")
                    };
                return {
                    uid: s.uid,
                    dom: s.dom,
                    components: o.components,
                    behaviours: of(s.listBehaviours, o.behaviours),
                    apis: {
                        setItems: function(a, c) {
                            r(a).fold(function() {
                                throw H.console.error("Custom List was defined to not be a shell, but no item container was specified in components"), new Error("Custom List was defined to not be a shell, but no item container was specified in components")
                            }, function(n) {
                                var t = wm.contents(n),
                                    e = c.length,
                                    o = e - t.length,
                                    r = 0 < o ? function(t, n) {
                                        for (var e = [], o = 0; o < t; o++) e.push(n(o));
                                        return e
                                    }(o, function() {
                                        return s.makeItem()
                                    }) : [],
                                    i = t.slice(e);
                                W(i, function(t) {
                                    return wm.remove(n, t)
                                }), W(r, function(t) {
                                    return wm.append(n, t)
                                });
                                var u = wm.contents(n);
                                W(u, function(t, n) {
                                    s.setupItem(a, t, c[n], n)
                                })
                            })
                        }
                    }
                }
            },
            apis: {
                setItems: function(t, n, e) {
                    t.setItems(n, e)
                }
            }
        }),
        TT = Qf,
        BT = Rf,
        AT = ul({
            factory: function(n, o) {
                var t = {
                    focus: hm.focusIn,
                    setMenus: function(t, n) {
                        var e = F(n, function(n) {
                            var t = {
                                    type: "menubutton",
                                    text: n.text,
                                    fetch: function(t) {
                                        t(n.getItems())
                                    }
                                },
                                e = QO(t).mapError(function(t) {
                                    return Dn(t)
                                }).getOrDie();
                            return HE(e, "tox-mbtn", o.backstage, et.some("menuitem"))
                        });
                        wm.set(t, e)
                    }
                };
                return {
                    uid: n.uid,
                    dom: n.dom,
                    components: [],
                    behaviours: Wu([wm.config({}), rg("menubar-events", [wr(function(t) {
                        n.onSetup(t)
                    }), mr(io(), function(e, t) {
                        du(e.element(), ".tox-mbtn--active").each(function(n) {
                            mu(t.event().target(), ".tox-mbtn").each(function(t) {
                                qe(n, t) || e.getSystem().getByDom(n).each(function(n) {
                                    e.getSystem().getByDom(t).each(function(t) {
                                        Ny.expand(t), Ny.close(n), Pm.focus(t)
                                    })
                                })
                            })
                        })
                    }), mr(Io(), function(e, t) {
                        t.event().prevFocus().bind(function(t) {
                            return e.getSystem().getByDom(t).toOption()
                        }).each(function(n) {
                            t.event().newFocus().bind(function(t) {
                                return e.getSystem().getByDom(t).toOption()
                            }).each(function(t) {
                                Ny.isOpen(n) && (Ny.expand(t), Ny.close(n))
                            })
                        })
                    })]), hm.config({
                        mode: "flow",
                        selector: ".tox-mbtn",
                        onEscape: function(t) {
                            return n.onEscape(t), et.some(!0)
                        }
                    }), Iy.config({})]),
                    apis: t,
                    domModification: {
                        attributes: {
                            role: "menubar"
                        }
                    }
                }
            },
            name: "silver.Menubar",
            configFields: [Pn("dom"), Pn("uid"), Pn("onEscape"), Pn("backstage"), Zn("onSetup", tt)],
            apis: {
                focus: function(t, n) {
                    t.focus(n)
                },
                setMenus: function(t, n, e) {
                    t.setMenus(n, e)
                }
            }
        }),
        DT = "container",
        _T = [nf("slotBehaviours", [])],
        MT = function(t) {
            return "<alloy.field." + t + ">"
        },
        FT = function(r, t, n) {
            var e, o = function(t) {
                    return qf(r)
                },
                i = function(e, o) {
                    return void 0 === o && (o = undefined),
                        function(t, n) {
                            return Wf(t, r, n).map(function(t) {
                                return e(t, n)
                            }).getOr(o)
                        }
                },
                u = function(t, n) {
                    return "true" !== qr(t.element(), "aria-hidden")
                },
                a = i(u, !1),
                c = i(function(t, n) {
                    if (u(t)) {
                        var e = t.element();
                        Wi(e, "display", "none"), Xr(e, "aria-hidden", "true"), Lo(t, Ro(), {
                            name: n,
                            visible: !1
                        })
                    }
                }),
                s = (e = c, function(n, t) {
                    W(t, function(t) {
                        return e(n, t)
                    })
                }),
                f = i(function(t, n) {
                    if (!u(t)) {
                        var e = t.element();
                        $i(e, "display"), $r(e, "aria-hidden"), Lo(t, Ro(), {
                            name: n,
                            visible: !0
                        })
                    }
                }),
                l = {
                    getSlotNames: o,
                    getSlot: function(t, n) {
                        return Wf(t, r, n)
                    },
                    isShowing: a,
                    hideSlot: c,
                    hideAllSlots: function(t) {
                        return s(t, o())
                    },
                    showSlot: f
                };
            return {
                uid: r.uid,
                dom: r.dom,
                components: t,
                behaviours: ef(r.slotBehaviours),
                apis: l
            }
        },
        IT = st({
            getSlotNames: function(t, n) {
                return t.getSlotNames(n)
            },
            getSlot: function(t, n, e) {
                return t.getSlot(n, e)
            },
            isShowing: function(t, n, e) {
                return t.isShowing(n, e)
            },
            hideSlot: function(t, n, e) {
                return t.hideSlot(n, e)
            },
            hideAllSlots: function(t, n) {
                return t.hideAllSlots(n)
            },
            showSlot: function(t, n, e) {
                return t.showSlot(n, e)
            }
        }, bi),
        RT = P({}, IT, {
            sketch: function(t) {
                var e, n = (e = [], {
                        slot: function(t, n) {
                            return e.push(t), Pf(DT, MT(t), n)
                        },
                        record: function() {
                            return e
                        }
                    }),
                    o = t(n),
                    r = n.record(),
                    i = F(r, function(t) {
                        return Df({
                            name: t,
                            pname: MT(t)
                        })
                    });
                return tl(DT, _T, i, FT, o)
            }
        }),
        VT = pn([$n("icon"), $n("tooltip"), ie("onShow", tt), ie("onHide", tt), ie("onSetup", function() {
            return tt
        })]),
        NT = function(t) {
            return {
                element: function() {
                    return t.element().dom()
                }
            }
        },
        HT = function(e, o) {
            var r = F(ut(o), function(t) {
                var n = o[t],
                    e = Bn(Tn("sidebar", VT, n));
                return {
                    name: t,
                    getApi: NT,
                    onSetup: e.onSetup,
                    onShow: e.onShow,
                    onHide: e.onHide
                }
            });
            return F(r, function(t) {
                var n = ce(tt);
                return e.slot(t.name, {
                    dom: {
                        tag: "div",
                        classes: ["tox-sidebar__pane"]
                    },
                    behaviours: cp([oh(t, n), rh(t, n), mr(Ro(), function(n, t) {
                        var e = t.event();
                        N(r, function(t) {
                            return t.name === e.name()
                        }).each(function(t) {
                            (e.visible() ? t.onShow : t.onHide)(t.getApi(n))
                        })
                    })])
                })
            })
        },
        PT = function(t, e) {
            ll.getCurrent(t).each(function(t) {
                return wm.set(t, [(n = e, RT.sketch(function(t) {
                    return {
                        dom: {
                            tag: "div",
                            classes: ["tox-sidebar__pane-container"]
                        },
                        components: HT(t, n),
                        slotBehaviours: cp([wr(function(t) {
                            return RT.hideAllSlots(t)
                        })])
                    }
                }))]);
                var n
            })
        },
        zT = function(t) {
            return ll.getCurrent(t).bind(function(t) {
                return AO.isGrowing(t) || AO.hasGrown(t) ? ll.getCurrent(t).bind(function(n) {
                    return N(RT.getSlotNames(n), function(t) {
                        return RT.isShowing(n, t)
                    })
                }) : et.none()
            })
        },
        LT = oi("FixSizeEvent"),
        jT = oi("AutoSizeEvent"),
        UT = function(t, n, e) {
            var o, r = t.element();
            !0 === n ? (wm.set(t, [(o = e, {
                dom: {
                    tag: "div",
                    attributes: {
                        "aria-label": o.translate("Loading...")
                    },
                    classes: ["tox-throbber__busy-spinner"]
                },
                components: [{
                    dom: vp('<div class="tox-spinner"><div></div><div></div><div></div></div>')
                }],
                behaviours: Wu([hm.config({
                    mode: "special",
                    onTab: function() {
                        return et.some(!0)
                    },
                    onShiftTab: function() {
                        return et.some(!0)
                    }
                }), Pm.config({})])
            })]), $i(r, "display"), $r(r, "aria-hidden")) : (wm.set(t, []), Wi(r, "display", "none"), Xr(r, "aria-hidden", "true"))
        },
        WT = BT.optional({
            factory: AT,
            name: "menubar",
            schema: [Pn("backstage")]
        }),
        GT = BT.optional({
            factory: {
                sketch: function(t) {
                    return ET.sketch({
                        uid: t.uid,
                        dom: t.dom,
                        listBehaviours: Wu([hm.config({
                            mode: "acyclic",
                            selector: ".tox-toolbar"
                        })]),
                        makeItem: function() {
                            return YO({
                                uid: oi("multiple-toolbar-item"),
                                backstage: t.backstage,
                                cyclicKeying: !1,
                                getSink: t.getSink,
                                initGroups: [],
                                onEscape: function() {
                                    return et.none()
                                }
                            })
                        },
                        setupItem: function(t, n, e, o) {
                            $k.setGroups(n, e)
                        },
                        shell: !0
                    })
                }
            },
            name: "multiple-toolbar",
            schema: [Pn("dom"), Pn("onEscape")]
        }),
        XT = BT.optional({
            factory: {
                sketch: function(t) {
                    var n;
                    return ((n = t).split === ib.sliding ? XO : n.split === ib.floating ? GO : YO)({
                        uid: t.uid,
                        onEscape: function() {
                            return t.onEscape(), et.some(!0)
                        },
                        cyclicKeying: !1,
                        initGroups: [],
                        getSink: t.getSink,
                        backstage: t.backstage,
                        moreDrawerData: {
                            lazyToolbar: t.lazyToolbar,
                            lazyMoreButton: t.lazyMoreButton
                        }
                    })
                }
            },
            name: "toolbar",
            schema: [Pn("dom"), Pn("onEscape"), Pn("getSink")]
        }),
        YT = BT.optional({
            name: "socket",
            schema: [Pn("dom")]
        }),
        qT = BT.optional({
            factory: {
                sketch: function(t) {
                    return {
                        uid: t.uid,
                        dom: {
                            tag: "div",
                            classes: ["tox-sidebar"],
                            attributes: {
                                role: "complementary"
                            }
                        },
                        components: [{
                            dom: {
                                tag: "div",
                                classes: ["tox-sidebar__slider"]
                            },
                            components: [],
                            behaviours: Wu([Iy.config({}), Pm.config({}), AO.config({
                                dimension: {
                                    property: "width"
                                },
                                closedClass: "tox-sidebar--sliding-closed",
                                openClass: "tox-sidebar--sliding-open",
                                shrinkingClass: "tox-sidebar--sliding-shrinking",
                                growingClass: "tox-sidebar--sliding-growing",
                                onShrunk: function(t) {
                                    ll.getCurrent(t).each(RT.hideAllSlots), zo(t, jT)
                                },
                                onGrown: function(t) {
                                    zo(t, jT)
                                },
                                onStartGrow: function(t) {
                                    Lo(t, LT, {
                                        width: qi(t.element(), "width").getOr("")
                                    })
                                },
                                onStartShrink: function(t) {
                                    Lo(t, LT, {
                                        width: ca(t.element()) + "px"
                                    })
                                }
                            }), wm.config({}), ll.config({
                                find: function(t) {
                                    var n = wm.contents(t);
                                    return ot(n)
                                }
                            })])
                        }],
                        behaviours: Wu([Xw(0), rg("sidebar-sliding-events", [mr(LT, function(t, n) {
                            Wi(t.element(), "width", n.event().width())
                        }), mr(jT, function(t, n) {
                            $i(t.element(), "width")
                        })])])
                    }
                }
            },
            name: "sidebar",
            schema: [Pn("dom")]
        }),
        KT = BT.optional({
            factory: {
                sketch: function(t) {
                    return {
                        uid: t.uid,
                        dom: {
                            tag: "div",
                            attributes: {
                                "aria-hidden": "true"
                            },
                            classes: ["tox-throbber"],
                            styles: {
                                display: "none"
                            }
                        },
                        behaviours: Wu([wm.config({})]),
                        components: []
                    }
                }
            },
            name: "throbber",
            schema: [Pn("dom")]
        }),
        $T = al({
            name: "OuterContainer",
            factory: function(e, t, n) {
                var o = {
                    getSocket: function(t) {
                        return TT.getPart(t, e, "socket")
                    },
                    setSidebar: function(t, n) {
                        TT.getPart(t, e, "sidebar").each(function(t) {
                            return PT(t, n)
                        })
                    },
                    toggleSidebar: function(t, o) {
                        TT.getPart(t, e, "sidebar").each(function(t) {
                            return n = t, e = o, void ll.getCurrent(n).each(function(n) {
                                ll.getCurrent(n).each(function(t) {
                                    AO.hasGrown(n) ? RT.isShowing(t, e) ? AO.shrink(n) : (RT.hideAllSlots(t), RT.showSlot(t, e)) : (RT.hideAllSlots(t), RT.showSlot(t, e), AO.grow(n))
                                })
                            });
                            var n, e
                        })
                    },
                    whichSidebar: function(t) {
                        return TT.getPart(t, e, "sidebar").bind(zT).getOrNull()
                    },
                    getToolbar: function(t) {
                        return TT.getPart(t, e, "toolbar")
                    },
                    setToolbar: function(t, n) {
                        TT.getPart(t, e, "toolbar").each(function(t) {
                            t.getApis().setGroups(t, n)
                        })
                    },
                    setToolbars: function(t, n) {
                        TT.getPart(t, e, "multiple-toolbar").each(function(t) {
                            ET.setItems(t, n)
                        })
                    },
                    refreshToolbar: function(t) {
                        TT.getPart(t, e, "toolbar").each(function(t) {
                            return t.getApis().refresh(t)
                        })
                    },
                    getMoreButton: function(t) {
                        return TT.getPart(t, e, "toolbar").bind(function(t) {
                            return t.getApis().getMoreButton(t)
                        })
                    },
                    getThrobber: function(t) {
                        return TT.getPart(t, e, "throbber")
                    },
                    focusToolbar: function(t) {
                        TT.getPart(t, e, "toolbar").orThunk(function() {
                            return TT.getPart(t, e, "multiple-toolbar")
                        }).each(function(t) {
                            hm.focusIn(t)
                        })
                    },
                    setMenubar: function(t, n) {
                        TT.getPart(t, e, "menubar").each(function(t) {
                            AT.setMenus(t, n)
                        })
                    },
                    focusMenubar: function(t) {
                        TT.getPart(t, e, "menubar").each(function(t) {
                            AT.focus(t)
                        })
                    }
                };
                return {
                    uid: e.uid,
                    dom: e.dom,
                    components: t,
                    apis: o,
                    behaviours: e.behaviours
                }
            },
            configFields: [Pn("dom"), Pn("behaviours")],
            partFields: [WT, XT, GT, YT, qT, KT],
            apis: {
                getSocket: function(t, n) {
                    return t.getSocket(n)
                },
                setSidebar: function(t, n, e) {
                    t.setSidebar(n, e)
                },
                toggleSidebar: function(t, n, e) {
                    t.toggleSidebar(n, e)
                },
                whichSidebar: function(t, n) {
                    return t.whichSidebar(n)
                },
                getToolbar: function(t, n) {
                    return t.getToolbar(n)
                },
                setToolbar: function(t, n, e) {
                    var o = F(e, function(t) {
                        return jO(t)
                    });
                    t.setToolbar(n, o)
                },
                setToolbars: function(t, n, e) {
                    var o = F(e, function(t) {
                        return F(t, jO)
                    });
                    t.setToolbars(n, o)
                },
                getMoreButton: function(t, n) {
                    return t.getMoreButton(n)
                },
                refreshToolbar: function(t, n) {
                    return t.refreshToolbar(n)
                },
                getThrobber: function(t, n) {
                    return t.getThrobber(n)
                },
                setMenubar: function(t, n, e) {
                    t.setMenubar(n, e)
                },
                focusMenubar: function(t, n) {
                    t.focusMenubar(n)
                },
                focusToolbar: function(t, n) {
                    t.focusToolbar(n)
                }
            }
        }),
        JT = {
            file: {
                title: "File",
                items: "newdocument restoredraft | preview | print | deleteallconversations"
            },
            edit: {
                title: "Edit",
                items: "undo redo | cut copy paste pastetext | selectall | searchreplace"
            },
            view: {
                title: "View",
                items: "code | visualaid visualchars visualblocks | spellchecker | preview fullscreen | showcomments"
            },
            insert: {
                title: "Insert",
                items: "image link media addcomment pageembed template codesample inserttable | charmap emoticons hr | pagebreak nonbreaking anchor toc | insertdatetime"
            },
            format: {
                title: "Format",
                items: "bold italic underline strikethrough superscript subscript codeformat | formats blockformats fontformats fontsizes align | forecolor backcolor | removeformat"
            },
            tools: {
                title: "Tools",
                items: "spellchecker spellcheckerlanguage | a11ycheck code wordcount"
            },
            table: {
                title: "Table",
                items: "inserttable tableprops deletetable row column cell"
            },
            help: {
                title: "Help",
                items: "help"
            }
        },
        QT = function(t) {
            return "string" == typeof t ? t.split(" ") : t
        },
        ZT = function(u, a) {
            var c = yt(JT, a.menus),
                n = 0 < ut(a.menus).length,
                t = a.menubar === undefined || !0 === a.menubar ? QT("file edit view insert format tools table help") : QT(!1 === a.menubar ? "" : a.menubar),
                e = I(t, function(t) {
                    return n && a.menus.hasOwnProperty(t) && a.menus[t].hasOwnProperty("items") || JT.hasOwnProperty(t)
                }),
                o = F(e, function(t) {
                    var n, e, o, r, i = c[t];
                    return n = {
                        title: i.title,
                        items: QT(i.items)
                    }, e = a, r = (o = u, o.getParam("removed_menuitems", "")).split(/[ ,]/), {
                        text: n.title,
                        getItems: function() {
                            return K(n.items, function(t) {
                                var n = t.toLowerCase();
                                return 0 === n.trim().length ? [] : _(r, function(t) {
                                    return t === n
                                }) ? [] : "separator" === n || "|" === n ? [{
                                    type: "separator"
                                }] : e.menuItems[n] ? [e.menuItems[n]] : []
                            })
                        }
                    }
                });
            return I(o, function(t) {
                return 0 < t.getItems().length && _(t.getItems(), function(t) {
                    return "separator" !== t.type
                })
            })
        },
        tB = function(t) {
            var n = function() {
                t._skinLoaded = !0, Yh(t)
            };
            return function() {
                t.initialized ? n() : t.on("init", n)
            }
        },
        nB = function(t, n) {
            var e, o = function(t) {
                var n = t.settings,
                    e = n.skin,
                    o = n.skin_url;
                if (!1 !== e) {
                    var r = e || "oxide";
                    o = o ? t.documentBaseURI.toAbsolute(o) : sb.baseURL + "/skins/ui/" + r
                }
                return o
            }(n);
            o && (e = o + "/skin.min.css", n.contentCSS.push(o + (t ? "/content.inline" : "/content") + ".min.css")), !1 == (!1 === n.getParam("skin")) && e ? fh.DOM.styleSheetLoader.load(e, tB(n)) : tB(n)()
        },
        eB = g(nB, !1),
        oB = g(nB, !0),
        rB = function(n, t, e, o) {
            var r = t.outerContainer,
                i = e.toolbar,
                u = e.buttons;
            if (T(i, L)) {
                var a = i.map(function(t) {
                    return xT(n, {
                        toolbar: t,
                        buttons: u
                    }, {
                        backstage: o
                    }, et.none())
                });
                $T.setToolbars(r, a)
            } else $T.setToolbar(r, xT(n, e, {
                backstage: o
            }, et.none()))
        },
        iB = fh.DOM,
        uB = {
            render: function(e, o, t, n, r) {
                var i, u, a = ce(0);
                eB(e), i = fe.fromDom(r.targetNode), u = o.mothership, Ps(i, u, Vr), Hs(rr(), o.uiMothership), e.on("init", function() {
                    rB(e, o, t, n), a.set(e.getWin().innerWidth), $T.setMenubar(o.outerContainer, ZT(e, t)), $T.setSidebar(o.outerContainer, t.sidebar),
                        function(o) {
                            var r = o.getWin(),
                                t = o.getDoc().documentElement,
                                i = ce(na(r.innerWidth, r.innerHeight)),
                                u = ce(na(t.offsetWidth, t.offsetHeight)),
                                n = function() {
                                    var t = o.getDoc().documentElement,
                                        n = i.get(),
                                        e = u.get();
                                    n.left() !== r.innerWidth || n.top() !== r.innerHeight ? (i.set(na(r.innerWidth, r.innerHeight)), Kh(o)) : e.left() === t.offsetWidth && e.top() === t.offsetHeight || (u.set(na(t.offsetWidth, t.offsetHeight)), Kh(o))
                                };
                            iB.bind(r, "resize", n);
                            var e = Lv(fe.fromDom(o.getBody()), "load", n);
                            o.on("remove", function() {
                                e.unbind(), iB.unbind(r, "resize", n)
                            })
                        }(e)
                });
                var c = $T.getSocket(o.outerContainer).getOrDie("Could not find expected socket element");
                PO(e, o), e.addCommand("ToggleSidebar", function(t, n) {
                    $T.toggleSidebar(o.outerContainer, n), e.fire("ToggleSidebar")
                }), e.addQueryValueHandler("ToggleSidebar", function() {
                    return $T.whichSidebar(o.outerContainer)
                });
                var s = hb(e);
                return s !== ib.sliding && s !== ib.floating || e.on("ResizeContent", function() {
                    var t = e.getWin().innerWidth;
                    t !== a.get() && $T.refreshToolbar(o.outerContainer), a.set(t)
                }), {
                    iframeContainer: c.element().dom(),
                    editorContainer: o.outerContainer.element().dom()
                }
            },
            getBehaviours: function(t) {
                return []
            }
        },
        aB = function(e, n) {
            return Mr(e).orThunk(function() {
                var t = fe.fromTag("span");
                Rr(e, t);
                var n = Mr(t);
                return Lr(t), n
            }).map(function(t) {
                return oa(t).translate(-n.left(), -n.top())
            }).getOrThunk(function() {
                return na(0, 0)
            })
        },
        cB = pt([{
            offset: ["x", "y"]
        }, {
            absolute: ["x", "y"]
        }, {
            fixed: ["x", "y"]
        }]),
        sB = function(n) {
            return function(t) {
                return t.translate(-n.left(), -n.top())
            }
        },
        fB = function(n) {
            return function(t) {
                return t.translate(n.left(), n.top())
            }
        },
        lB = function(e) {
            return function(t, n) {
                return V(e, function(t, n) {
                    return n(t)
                }, na(t, n))
            }
        },
        dB = function(t, n, e) {
            return t.fold(lB([fB(e), sB(n)]), lB([sB(n)]), lB([]))
        },
        mB = function(t, n, e) {
            return t.fold(lB([fB(e)]), lB([]), lB([fB(n)]))
        },
        gB = function(t, n, e) {
            return t.fold(lB([]), lB([sB(e)]), lB([fB(n), sB(e)]))
        },
        pB = function(t, n, e) {
            return t.fold(function(t, n) {
                return {
                    position: "absolute",
                    left: t + "px",
                    top: n + "px"
                }
            }, function(t, n) {
                return {
                    position: "absolute",
                    left: t - e.left() + "px",
                    top: n - e.top() + "px"
                }
            }, function(t, n) {
                return {
                    position: "fixed",
                    left: t + "px",
                    top: n + "px"
                }
            })
        },
        hB = cB.offset,
        vB = cB.absolute,
        bB = cB.fixed,
        yB = function(t, n) {
            Ri(t.element(), n.transitionClass), Ni(t.element(), n.fadeOutClass), Ri(t.element(), n.fadeInClass)
        },
        xB = function(t, n) {
            Ri(t.element(), n.transitionClass), Ni(t.element(), n.fadeInClass), Ri(t.element(), n.fadeOutClass)
        },
        wB = function(t, n) {
            return t.y() >= n.y() && t.bottom() <= n.bottom()
        },
        SB = function(t, n) {
            return Kr(t, n) ? et.some(parseInt(qr(t, n), 10)) : et.none()
        },
        CB = function(o, r, i) {
            return (u = o, t = r, n = u.element(), SB(n, t.leftAttr).bind(function(o) {
                return SB(n, t.topAttr).map(function(t) {
                    var n = ca(u.element()),
                        e = la(u.element());
                    return Ea(o, t, n, e)
                })
            })).bind(function(t) {
                return wB(t, i) ? (n = r, e = o.element(), $r(e, n.leftAttr), $r(e, n.topAttr), et.some(vB(t.x(), t.y()))) : et.none();
                var n, e
            });
            var u, t, n
        },
        kB = function(t, n, e, o, r) {
            var i = oa(t.element()),
                u = Ea(i.left(), i.top(), ca(t.element()), la(t.element()));
            if (wB(u, e)) return et.none();
            a = t, c = n, s = i.left(), f = i.top(), l = a.element(), Xr(l, c.leftAttr, s), Xr(l, c.topAttr, f);
            var a, c, s, f, l, d = vB(i.left(), i.top()),
                m = dB(d, o, r),
                g = vB(e.x(), e.y()),
                p = dB(g, o, r),
                h = u.y() <= e.y() ? p.top() : p.top() + e.height() - u.height();
            return et.some(bB(m.left(), h))
        },
        OB = function(i, t, n) {
            var u = t.lazyViewport(i);
            t.contextual.each(function(r) {
                r.lazyContext(i).each(function(t) {
                    var n, e, o = Ta(t);
                    ((e = u, (n = o).y() < e.bottom() && n.bottom() > e.y()) ? yB : xB)(i, r)
                })
            });
            var e, o, r, a, c, s = Ar(i.element()),
                f = ia(s),
                l = aB(i.element(), f);
            (e = i, o = t, r = u, a = f, c = l, qi(e.element(), "position").is("fixed") ? CB(e, o, r) : kB(e, o, r, a, c)).each(function(t) {
                var n = pB(t, 0, l);
                Gi(i.element(), n)
            })
        },
        EB = /* */ Object.freeze({
            refresh: OB
        }),
        TB = /* */ Object.freeze({
            events: function(o, t) {
                return fr([mr(go(), function(n, e) {
                    o.contextual.each(function(t) {
                        qe(n.element(), e.event().target()) && (Ni(n.element(), t.transitionClass), e.stop())
                    })
                }), mr(Ao(), function(t, n) {
                    OB(t, o)
                })])
            }
        }),
        BB = [Qn("contextual", [Pn("fadeInClass"), Pn("fadeOutClass"), Pn("transitionClass"), Pn("lazyContext")]), Zn("lazyViewport", function(t) {
            var n = ia();
            return Ea(n.left(), n.top(), H.window.innerWidth, H.window.innerHeight)
        }), Pn("leftAttr"), Pn("topAttr")],
        AB = Xu({
            fields: BB,
            name: "docking",
            active: TB,
            apis: EB
        }),
        DB = {
            render: function(o, n, e, r, t) {
                var i, u = fh.DOM,
                    a = bb(o),
                    c = hb(o),
                    s = c === ib.sliding || c === ib.floating;
                oB(o);
                var f = function(t) {
                        var n = qi(i.element(), "position").is("fixed"),
                            e = function(t) {
                                void 0 === t && (t = 0);
                                var n = oa(fe.fromDom(o.getBody()));
                                return {
                                    top: Math.round(n.top() - la(i.element())) + t,
                                    left: Math.round(n.left())
                                }
                            }(s ? t.fold(function() {
                                return 0
                            }, function(t) {
                                return 1 < t.components().length ? la(t.components()[1].element()) : 0
                            }) : 0);
                        n ? Yr(i.element(), ft(e, function(t, n) {
                            return {
                                k: "data-dock-" + n,
                                v: t
                            }
                        })) : Gi(i.element(), st(e, function(t) {
                            return t + "px"
                        })), AB.refresh(i)
                    },
                    l = function() {
                        var t = $T.getToolbar(n.outerContainer);
                        s && $T.refreshToolbar(n.outerContainer), a || f(t)
                    },
                    d = function() {
                        Wi(n.outerContainer.element(), "display", "flex"), u.addClass(o.getBody(), "mce-edit-focus"), $i(n.uiMothership.element(), "display"), l()
                    },
                    m = function() {
                        n.outerContainer && (Wi(n.outerContainer.element(), "display", "none"), u.removeClass(o.getBody(), "mce-edit-focus")), Wi(n.uiMothership.element(), "display", "none")
                    },
                    g = function() {
                        if (i) d();
                        else {
                            i = n.outerContainer;
                            var t = vb(o).getOr(rr());
                            Hs(t, n.mothership), Hs(t, n.uiMothership), rB(o, n, e, r), $T.setMenubar(n.outerContainer, ZT(o, e)), a || Wi(i.element(), "position", "absolute"), l(), d(), o.on("NodeChange ResizeWindow", l), o.on("activate", d), o.on("deactivate", m), o.nodeChanged()
                        }
                    };
                return o.on("focus", g), o.on("blur hide", m), o.on("init", function() {
                    o.hasFocus() && g()
                }), PO(o, n), {
                    editorContainer: n.outerContainer.element().dom()
                }
            },
            getBehaviours: function(n) {
                return bb(n) ? [] : [AB.config({
                    leftAttr: "data-dock-left",
                    topAttr: "data-dock-top",
                    contextual: {
                        lazyContext: function(t) {
                            return et.from(n).map(function(t) {
                                return fe.fromDom(t.getBody())
                            })
                        },
                        fadeInClass: "tox-toolbar-dock-fadein",
                        fadeOutClass: "tox-toolbar-dock-fadeout",
                        transitionClass: "tox-toolbar-dock-transition"
                    }
                }), Pm.config({})]
            }
        },
        _B = function(n) {
            OC.each([{
                name: "alignleft",
                text: "Align left",
                cmd: "JustifyLeft",
                icon: "align-left"
            }, {
                name: "aligncenter",
                text: "Align center",
                cmd: "JustifyCenter",
                icon: "align-center"
            }, {
                name: "alignright",
                text: "Align right",
                cmd: "JustifyRight",
                icon: "align-right"
            }, {
                name: "alignjustify",
                text: "Justify",
                cmd: "JustifyFull",
                icon: "align-justify"
            }], function(t) {
                n.ui.registry.addToggleButton(t.name, {
                    tooltip: t.text,
                    onAction: function() {
                        return n.execCommand(t.cmd)
                    },
                    icon: t.icon,
                    onSetup: KE(n, t.name)
                })
            });
            var t = "alignnone",
                e = "No alignment",
                o = "JustifyNone",
                r = "align-none";
            n.ui.registry.addButton(t, {
                tooltip: e,
                onAction: function() {
                    return n.execCommand(o)
                },
                icon: r
            })
        },
        MB = function(t, n) {
            return function() {
                t.execCommand("mceToggleFormat", !1, n)
            }
        },
        FB = function(t) {
            var n, e;
            ! function(e) {
                OC.each([{
                    name: "bold",
                    text: "Bold",
                    icon: "bold"
                }, {
                    name: "italic",
                    text: "Italic",
                    icon: "italic"
                }, {
                    name: "underline",
                    text: "Underline",
                    icon: "underline"
                }, {
                    name: "strikethrough",
                    text: "Strikethrough",
                    icon: "strike-through"
                }, {
                    name: "subscript",
                    text: "Subscript",
                    icon: "subscript"
                }, {
                    name: "superscript",
                    text: "Superscript",
                    icon: "superscript"
                }], function(t, n) {
                    e.ui.registry.addToggleButton(t.name, {
                        tooltip: t.text,
                        icon: t.icon,
                        onSetup: KE(e, t.name),
                        onAction: MB(e, t.name)
                    })
                });
                for (var t = 1; t <= 6; t++) {
                    var n = "h" + t;
                    e.ui.registry.addToggleButton(n, {
                        text: n.toUpperCase(),
                        tooltip: "Heading " + t,
                        onSetup: KE(e, n),
                        onAction: MB(e, n)
                    })
                }
            }(t), n = t, OC.each([{
                name: "cut",
                text: "Cut",
                action: "Cut",
                icon: "cut"
            }, {
                name: "copy",
                text: "Copy",
                action: "Copy",
                icon: "copy"
            }, {
                name: "paste",
                text: "Paste",
                action: "Paste",
                icon: "paste"
            }, {
                name: "help",
                text: "Help",
                action: "mceHelp",
                icon: "help"
            }, {
                name: "selectall",
                text: "Select all",
                action: "SelectAll",
                icon: "select-all"
            }, {
                name: "newdocument",
                text: "New document",
                action: "mceNewDocument",
                icon: "new-document"
            }, {
                name: "removeformat",
                text: "Clear formatting",
                action: "RemoveFormat",
                icon: "remove-formatting"
            }, {
                name: "remove",
                text: "Remove",
                action: "Delete",
                icon: "remove"
            }], function(t) {
                n.ui.registry.addButton(t.name, {
                    tooltip: t.text,
                    icon: t.icon,
                    onAction: function() {
                        return n.execCommand(t.action)
                    }
                })
            }), e = t, OC.each([{
                name: "blockquote",
                text: "Blockquote",
                action: "mceBlockQuote",
                icon: "quote"
            }], function(t) {
                e.ui.registry.addToggleButton(t.name, {
                    tooltip: t.text,
                    icon: t.icon,
                    onAction: function() {
                        return e.execCommand(t.action)
                    },
                    onSetup: KE(e, t.name)
                })
            })
        },
        IB = function(t) {
            var n;
            FB(t), n = t, OC.each([{
                name: "bold",
                text: "Bold",
                action: "Bold",
                icon: "bold",
                shortcut: "Meta+B"
            }, {
                name: "italic",
                text: "Italic",
                action: "Italic",
                icon: "italic",
                shortcut: "Meta+I"
            }, {
                name: "underline",
                text: "Underline",
                action: "Underline",
                icon: "underline",
                shortcut: "Meta+U"
            }, {
                name: "strikethrough",
                text: "Strikethrough",
                action: "Strikethrough",
                icon: "strike-through",
                shortcut: ""
            }, {
                name: "subscript",
                text: "Subscript",
                action: "Subscript",
                icon: "subscript",
                shortcut: ""
            }, {
                name: "superscript",
                text: "Superscript",
                action: "Superscript",
                icon: "superscript",
                shortcut: ""
            }, {
                name: "removeformat",
                text: "Clear formatting",
                action: "RemoveFormat",
                icon: "remove-formatting",
                shortcut: ""
            }, {
                name: "newdocument",
                text: "New document",
                action: "mceNewDocument",
                icon: "new-document",
                shortcut: ""
            }, {
                name: "cut",
                text: "Cut",
                action: "Cut",
                icon: "cut",
                shortcut: "Meta+X"
            }, {
                name: "copy",
                text: "Copy",
                action: "Copy",
                icon: "copy",
                shortcut: "Meta+C"
            }, {
                name: "paste",
                text: "Paste",
                action: "Paste",
                icon: "paste",
                shortcut: "Meta+V"
            }, {
                name: "selectall",
                text: "Select all",
                action: "SelectAll",
                icon: "select-all",
                shortcut: "Meta+A"
            }], function(t) {
                n.ui.registry.addMenuItem(t.name, {
                    text: t.text,
                    icon: t.icon,
                    shortcut: t.shortcut,
                    onAction: function() {
                        return n.execCommand(t.action)
                    }
                })
            }), n.ui.registry.addMenuItem("codeformat", {
                text: "Code",
                icon: "sourcecode",
                onAction: MB(n, "code")
            })
        },
        RB = function(t, n, e) {
            var o = function() {
                    return !!n.undoManager && n.undoManager[e]()
                },
                r = function() {
                    t.setDisabled(n.readonly || !o())
                };
            return t.setDisabled(!o()), n.on("Undo Redo AddUndo TypingUndo ClearUndos SwitchMode", r),
                function() {
                    return n.off("Undo Redo AddUndo TypingUndo ClearUndos SwitchMode", r)
                }
        },
        VB = function(t) {
            var n, e;
            (n = t).ui.registry.addMenuItem("undo", {
                text: "Undo",
                icon: "undo",
                shortcut: "Meta+Z",
                onSetup: function(t) {
                    return RB(t, n, "hasUndo")
                },
                onAction: function() {
                    return n.execCommand("undo")
                }
            }), n.ui.registry.addMenuItem("redo", {
                text: "Redo",
                icon: "redo",
                shortcut: "Meta+Y",
                onSetup: function(t) {
                    return RB(t, n, "hasRedo")
                },
                onAction: function() {
                    return n.execCommand("redo")
                }
            }), (e = t).ui.registry.addButton("undo", {
                tooltip: "Undo",
                icon: "undo",
                onSetup: function(t) {
                    return RB(t, e, "hasUndo")
                },
                onAction: function() {
                    return e.execCommand("undo")
                }
            }), e.ui.registry.addButton("redo", {
                tooltip: "Redo",
                icon: "redo",
                onSetup: function(t) {
                    return RB(t, e, "hasRedo")
                },
                onAction: function() {
                    return e.execCommand("redo")
                }
            })
        },
        NB = function(t) {
            var n, e;
            (n = t).ui.registry.addButton("visualaid", {
                tooltip: "Visual aids",
                text: "Visual aids",
                onAction: function() {
                    return n.execCommand("mceToggleVisualAid")
                }
            }), (e = t).ui.registry.addToggleMenuItem("visualaid", {
                text: "Visual aids",
                onSetup: function(t) {
                    return function(n, t) {
                        n.setActive(t.hasVisual);
                        var e = function(t) {
                            n.setActive(t.hasVisual)
                        };
                        return t.on("VisualAid", e),
                            function() {
                                return t.off("VisualAid", e)
                            }
                    }(t, e)
                },
                onAction: function() {
                    e.execCommand("mceToggleVisualAid")
                }
            })
        },
        HB = function(t) {
            var n;
            (n = t).ui.registry.addButton("outdent", {
                tooltip: "Decrease indent",
                icon: "outdent",
                onSetup: function(t) {
                    return function(t, n) {
                        t.setDisabled(!n.queryCommandState("outdent"));
                        var e = function() {
                            t.setDisabled(!n.queryCommandState("outdent"))
                        };
                        return n.on("NodeChange", e),
                            function() {
                                return n.off("NodeChange", e)
                            }
                    }(t, n)
                },
                onAction: function() {
                    return n.execCommand("outdent")
                }
            }), n.ui.registry.addButton("indent", {
                tooltip: "Increase indent",
                icon: "indent",
                onAction: function() {
                    return n.execCommand("indent")
                }
            })
        },
        PB = function(t, n) {
            var e, o, r, i, u, a, c, s, f, l, d, m, g, p, h, v, b, y, x, w;
            o = n, r = oT(e = t), i = JE(0, o, r.dataset, r), e.ui.registry.addNestedMenuItem("align", {
                text: o.shared.providers.translate("Align"),
                getSubmenuItems: function() {
                    return i.items.validateItems(i.getStyleItems())
                }
            }), a = n, c = uT(u = t), s = JE(0, a, c.dataset, c), u.ui.registry.addNestedMenuItem("fontformats", {
                text: a.shared.providers.translate("Fonts"),
                getSubmenuItems: function() {
                    return s.items.validateItems(s.getStyleItems())
                }
            }), f = t, d = (l = n).styleselect, m = JE(0, l, d, mT(f)), f.ui.registry.addNestedMenuItem("formats", {
                text: "Formats",
                getSubmenuItems: function() {
                    return m.items.validateItems(m.getStyleItems())
                }
            }), p = n, h = dT(g = t), v = JE(0, p, h.dataset, h), g.ui.registry.addNestedMenuItem("blockformats", {
                text: "Blocks",
                getSubmenuItems: function() {
                    return v.items.validateItems(v.getStyleItems())
                }
            }), y = n, x = sT(b = t), w = JE(0, y, x.dataset, x), b.ui.registry.addNestedMenuItem("fontsizes", {
                text: "Font sizes",
                getSubmenuItems: function() {
                    return w.items.validateItems(w.getStyleItems())
                }
            })
        },
        zB = function(t, n) {
            _B(t), IB(t), PB(t, n), VB(t), av.register(t), NB(t), HB(t)
        },
        LB = function(t, n) {
            return {
                anchor: "makeshift",
                x: t,
                y: n
            }
        },
        jB = function(t, n) {
            var e, o, r, i = fh.DOM.getPos(t);
            return e = n, o = i.x, r = i.y, LB(e.x + o, e.y + r)
        },
        UB = function(t, n) {
            return "contextmenu" === n.type ? t.inline ? LB((o = n).pageX, o.pageY) : jB(t.getContentAreaContainer(), LB((e = n).clientX, e.clientY)) : WB(t);
            var e, o
        },
        WB = function(t) {
            return {
                anchor: "selection",
                root: fe.fromDom(t.selection.getNode())
            }
        },
        GB = function(t) {
            return "string" == typeof t ? t.split(/[ ,]/) : t
        },
        XB = function(t) {
            return t.settings.contextmenu_never_use_native || !1
        },
        YB = function(t) {
            return e = "contextmenu", o = "link linkchecker image imagetools table spellchecker configurepermanentpen", r = (n = t).ui.registry.getAll().contextMenus, mt(n.settings, e).map(GB).getOrThunk(function() {
                return I(GB(o), function(t) {
                    return gt(r, t)
                })
            });
            var n, e, o, r
        },
        qB = function(t) {
            return !1 === t.getParam("contextmenu")
        },
        KB = function(t) {
            return L(t) ? "|" === t : "separator" === t.type
        },
        $B = {
            type: "separator"
        },
        JB = function(n) {
            if (L(n)) return n;
            switch (n.type) {
                case "separator":
                    return $B;
                case "submenu":
                    return {
                        type: "nestedmenuitem",
                        text: n.text,
                        icon: n.icon,
                        getSubmenuItems: function() {
                            var t = n.getSubmenuItems();
                            return L(t) ? t : F(t, JB)
                        }
                    };
                default:
                    return {
                        type: "menuitem",
                        text: n.text,
                        icon: n.icon,
                        onAction: (t = n.onAction, function() {
                            return t()
                        })
                    }
            }
            var t
        },
        QB = function(t, n) {
            if (0 === n.length) return t;
            var e = rt(t).filter(function(t) {
                return !KB(t)
            }).fold(function() {
                return []
            }, function(t) {
                return [$B]
            });
            return t.concat(e).concat(n).concat([$B])
        },
        ZB = function(d, t, m) {
            var g = su(yg.sketch({
                dom: {
                    tag: "div"
                },
                lazySink: t,
                onEscape: function() {
                    return d.focus()
                },
                fireDismissalEventInstead: {},
                inlineBehaviours: Wu([rg("dismissContextMenu", [mr(Fo(), function(t, n) {
                    Ks.close(t), d.focus()
                })])])
            }));
            d.on("init", function() {
                d.on("contextmenu", function(n) {
                    if (XB(d) && n.preventDefault(), t = d, !(n.ctrlKey && !XB(t) || qB(d))) {
                        var t, e, r, i, o, u = 2 !== n.button || n.target === d.getBody(),
                            a = u ? (e = d, {
                                anchor: "node",
                                node: et.some(fe.fromDom(e.selection.getNode())),
                                root: fe.fromDom(e.getBody())
                            }) : UB(d, n),
                            c = d.ui.registry.getAll(),
                            s = YB(d),
                            f = u ? d.selection.getStart(!0) : n.target,
                            l = (r = c.contextMenus, i = f, 0 < (o = V(s, function(t, n) {
                                if (gt(r, n)) {
                                    var e = r[n].update(i);
                                    if (L(e)) return QB(t, e.split(" "));
                                    if (0 < e.length) {
                                        var o = F(e, JB);
                                        return QB(t, o)
                                    }
                                    return t
                                }
                                return t.concat([n])
                            }, [])).length && KB(o[o.length - 1]) && o.pop(), o);
                        xy(l, ih.CLOSE_ON_EXECUTE, m).map(function(t) {
                            n.preventDefault(), yg.showMenuAt(g, a, {
                                menu: {
                                    markers: lv("normal")
                                },
                                data: t
                            })
                        })
                    }
                })
            })
        },
        tA = function(t) {
            return /^[0-9\.]+(|px)$/i.test("" + t) ? et.some(parseInt(t, 10)) : et.none()
        },
        nA = function(t) {
            return U(t) ? t + "px" : t
        },
        eA = "data-initial-z-index",
        oA = function(t, n) {
            var e;
            t.getSystem().addToGui(n), _r((e = n).element()).each(function(n) {
                qi(n, "z-index").each(function(t) {
                    Xr(n, eA, t)
                }), Wi(n, "z-index", Xi(e.element(), "z-index"))
            })
        },
        rA = function(t) {
            _r(t.element()).each(function(t) {
                var n = qr(t, eA);
                Kr(t, eA) ? Wi(t, "z-index", n) : $i(t, "z-index"), $r(t, eA)
            }), t.getSystem().removeFromGui(t)
        },
        iA = function(t, n, e, o) {
            return (r = t, i = n, u = r.element(), a = parseInt(qr(u, i.leftAttr), 10), c = parseInt(qr(u, i.topAttr), 10), isNaN(a) || isNaN(c) ? et.none() : et.some(na(a, c))).fold(function() {
                return e
            }, function(t) {
                return bB(t.left() + o.left(), t.top() + o.top())
            });
            var r, i, u, a, c
        },
        uA = function(t, n, e, o, r, i) {
            var u, a, c, s = iA(t, n, e, o),
                f = cA(t, n, s, r, i),
                l = dB(s, r, i);
            return u = n, a = l, c = t.element(), Xr(c, u.leftAttr, a.left() + "px"), Xr(c, u.topAttr, a.top() + "px"), f.fold(function() {
                return {
                    coord: bB(l.left(), l.top()),
                    extra: et.none()
                }
            }, function(t) {
                return {
                    coord: t.output(),
                    extra: t.extra()
                }
            })
        },
        aA = function(t, n) {
            var e, o;
            e = n, o = t.element(), $r(o, e.leftAttr), $r(o, e.topAttr)
        },
        cA = function(t, n, p, h, v) {
            var e = n.getSnapPoints(t);
            return bu(e, function(t) {
                var n, e, o, r, i, u, a, c, s, f, l, d, m, g = t.sensor();
                return (n = p, e = g, o = t.range().left(), r = t.range().top(), a = mB(n, i = h, u = v), c = mB(e, i, u), Math.abs(a.left() - c.left()) <= o && Math.abs(a.top() - c.top()) <= r) ? et.some({
                    output: nt((s = t.output(), f = p, l = h, d = v, m = function(o, r) {
                        return function(t, n) {
                            var e = o(f, l, d);
                            return r(t.getOr(e.left()), n.getOr(e.top()))
                        }
                    }, s.fold(m(gB, cB.offset), m(mB, cB.absolute), m(dB, cB.fixed)))),
                    extra: t.extra
                }) : et.none()
            })
        },
        sA = function(e, t, i, u, a, c) {
            return t.fold(function() {
                var t, e, o, n = (t = i, e = c.left(), o = c.top(), t.fold(function(t, n) {
                        return cB.offset(t + e, n + o)
                    }, function(t, n) {
                        return cB.absolute(t + e, n + o)
                    }, function(t, n) {
                        return cB.fixed(t + e, n + o)
                    })),
                    r = dB(n, u, a);
                return bB(r.left(), r.top())
            }, function(n) {
                var t = uA(e, n, i, c, u, a);
                return t.extra.each(function(t) {
                    n.onSensor(e, t)
                }), t.coord
            })
        },
        fA = function(t, n, e) {
            var o, r = n.getTarget(t.element());
            if (n.repositionTarget) {
                var i = Ar(t.element()),
                    u = ia(i),
                    a = aB(r, u),
                    c = qi(o = r, "left").bind(function(e) {
                        return qi(o, "top").bind(function(n) {
                            return qi(o, "position").map(function(t) {
                                return ("fixed" === t ? bB : hB)(parseInt(e, 10), parseInt(n, 10))
                            })
                        })
                    }).getOrThunk(function() {
                        var t = oa(o);
                        return vB(t.left(), t.top())
                    }),
                    s = sA(t, n.snaps, c, u, a, e),
                    f = pB(s, 0, a);
                Gi(r, f)
            }
            n.onDrag(t, r, e)
        },
        lA = Qn("snaps", [Pn("getSnapPoints"), Mu("onSensor"), Pn("leftAttr"), Pn("topAttr"), Zn("lazyViewport", function() {
            var t = ia();
            return {
                x: t.left,
                y: t.top,
                width: nt(H.window.innerWidth),
                height: nt(H.window.innerHeight),
                bottom: nt(t.top() + H.window.innerHeight),
                right: nt(t.left() + H.window.innerWidth)
            }
        })]),
        dA = /* */ Object.freeze({
            getData: function(t) {
                return et.from(na(t.x(), t.y()))
            },
            getDelta: function(t, n) {
                return na(n.left() - t.left(), n.top() - t.top())
            }
        }),
        mA = [Zn("useFixed", !1), Pn("blockerClass"), Zn("getTarget", d), Zn("onDrag", tt), Zn("repositionTarget", !0), Mu("onDrop"), lA, Vu("dragger", {
            handlers: function(a, c) {
                return fr([mr(no(), function(n, t) {
                    if (0 === t.event().raw().button) {
                        t.stop();
                        var e, o = {
                                drop: function() {
                                    i()
                                },
                                delayDrop: function() {
                                    u.schedule()
                                },
                                forceDrop: function() {
                                    i()
                                },
                                move: function(t) {
                                    u.cancel(), c.update(dA, t).each(function(t) {
                                        fA(n, a, t)
                                    })
                                }
                            },
                            r = n.getSystem().build(ab.sketch({
                                dom: {
                                    styles: {
                                        left: "0px",
                                        top: "0px",
                                        width: "100%",
                                        height: "100%",
                                        position: "fixed",
                                        "z-index": "1000000000000000"
                                    },
                                    classes: [a.blockerClass]
                                },
                                events: (e = o, fr([mr(no(), e.forceDrop), mr(ro(), e.drop), mr(eo(), function(t, n) {
                                    e.move(n.event())
                                }), mr(oo(), e.delayDrop)]))
                            })),
                            i = function() {
                                rA(r), a.snaps.each(function(t) {
                                    aA(n, t)
                                });
                                var t = a.getTarget(n.element());
                                a.onDrop(n, t)
                            },
                            u = Uv(i, 200);
                        c.reset(), oA(n, r)
                    }
                })])
            }
        })],
        gA = /* */ Object.freeze({
            getData: function(t) {
                var n, e = t.raw().touches;
                return 1 === e.length ? (n = e[0], et.some(na(n.clientX, n.clientY))) : et.none()
            },
            getDelta: function(t, n) {
                return na(n.left() - t.left(), n.top() - t.top())
            }
        }),
        pA = mA,
        hA = [Zn("useFixed", !1), Zn("getTarget", d), Zn("onDrag", tt), Zn("repositionTarget", !0), Zn("onDrop", tt), lA, Vu("dragger", {
            handlers: function(o, r) {
                return fr([yr(Qe()), mr(Ze(), function(n, t) {
                    t.stop(), r.update(gA, t.event()).each(function(t) {
                        fA(n, o, t)
                    })
                }), mr(to(), function(n, t) {
                    o.snaps.each(function(t) {
                        aA(n, t)
                    });
                    var e = o.getTarget(n.element());
                    r.reset(), o.onDrop(n, e)
                })])
            }
        })],
        vA = /* */ Object.freeze({
            mouse: pA,
            touch: hA
        }),
        bA = /* */ Object.freeze({
            init: function() {
                var i = et.none(),
                    t = nt({});
                return xi({
                    readState: t,
                    reset: function() {
                        i = et.none()
                    },
                    update: function(r, t) {
                        return r.getData(t).bind(function(t) {
                            return n = r, e = t, o = i.map(function(t) {
                                return n.getDelta(t, e)
                            }), i = et.some(e), o;
                            var n, e, o
                        })
                    }
                })
            }
        }),
        yA = qu({
            branchKey: "mode",
            branches: vA,
            name: "dragging",
            active: {
                events: function(t, n) {
                    return t.dragger.handlers(t, n)
                }
            },
            extra: {
                snap: Br(["sensor", "range", "output"], ["extra"])
            },
            state: bA
        });
    (tT = ZE || (ZE = {}))[tT.None = 0] = "None", tT[tT.Both = 1] = "Both", tT[tT.Vertical = 2] = "Vertical";
    var xA, wA, SA, CA, kA, OA, EA, TA = function(t, n, e, o) {
            var r = t + n,
                i = e.filter(function(t) {
                    return r < t
                }),
                u = o.filter(function(t) {
                    return t < r
                });
            return i.or(u).getOr(r)
        },
        BA = function(t, n, e, o, r) {
            var i, u, a = {};
            return a.height = TA(o, n.top(), lb(t), (i = t, et.from(i.getParam("max_height")).filter(U))), e === ZE.Both && (a.width = TA(r, n.left(), fb(t), (u = t, et.from(u.getParam("max_width")).filter(U)))), a
        },
        AA = function(t) {
            if (1 === t.nodeType) {
                if ("BR" === t.nodeName || t.getAttribute("data-mce-bogus")) return !0;
                if ("bookmark" === t.getAttribute("data-mce-type")) return !0
            }
            return !1
        },
        DA = function(i, u) {
            u.delimiter || (u.delimiter = "\xbb");
            return {
                dom: {
                    tag: "div",
                    classes: ["tox-statusbar__path"],
                    attributes: {
                        role: "navigation"
                    }
                },
                behaviours: Wu([hm.config({
                    mode: "flow",
                    selector: "div[role=button]"
                }), Iy.config({}), wm.config({}), rg("elementPathEvents", [wr(function(r, t) {
                    i.shortcuts.add("alt+F11", "focus statusbar elementpath", function() {
                        return hm.focusIn(r)
                    }), i.on("NodeChange", function(t) {
                        var n, o, e = function(t) {
                            for (var n = [], e = t.length; 0 < e--;) {
                                var o = t[e];
                                if (1 === o.nodeType && !AA(o)) {
                                    var r = i.fire("ResolveName", {
                                        name: o.nodeName.toLowerCase(),
                                        target: o
                                    });
                                    if (r.isDefaultPrevented() || n.push({
                                            name: r.name,
                                            element: o
                                        }), r.isPropagationStopped()) break
                                }
                            }
                            return n
                        }(t.parents);
                        0 < e.length && wm.set(r, (n = F(e || [], function(n, t) {
                            return wg.sketch({
                                dom: {
                                    tag: "div",
                                    classes: ["tox-statusbar__path-item"],
                                    attributes: {
                                        role: "button",
                                        "data-index": t,
                                        "tab-index": -1,
                                        "aria-level": t + 1
                                    },
                                    innerHtml: n.name
                                },
                                action: function(t) {
                                    i.focus(), i.selection.select(n.element), i.nodeChanged()
                                }
                            })
                        }), o = {
                            dom: {
                                tag: "div",
                                classes: ["tox-statusbar__path-divider"],
                                attributes: {
                                    "aria-hidden": !0
                                },
                                innerHtml: " " + u.delimiter + " "
                            }
                        }, V(n.slice(1), function(t, n) {
                            var e = t;
                            return e.push(o), e.push(n), e
                        }, [n[0]])))
                    })
                })])]),
                components: []
            }
        },
        _A = function(s, u) {
            var t, n, e, o, r, i = function(c) {
                return {
                    dom: {
                        tag: "div",
                        classes: ["tox-statusbar__resize-handle"],
                        attributes: {
                            title: u.translate("Resize")
                        },
                        innerHtml: kg("resize-handle", u.icons)
                    },
                    behaviours: Wu([yA.config({
                        mode: "mouse",
                        repositionTarget: !1,
                        onDrag: function(t, n, e) {
                            var o, r, i, u, a;
                            o = s, r = e, i = c, u = fe.fromDom(o.getContainer()), a = BA(o, r, i, la(u), ca(u)), ct(a, function(t, n) {
                                return Wi(u, n, nA(t))
                            }), qh(o)
                        },
                        blockerClass: "tox-blocker"
                    })])
                }
            };
            return {
                dom: {
                    tag: "div",
                    classes: ["tox-statusbar"]
                },
                components: (o = function() {
                    var t, o, n, r, e, i = [];
                    return s.getParam("elementpath", !0, "boolean") && i.push(DA(s, {})), Me(s.settings.plugins, "wordcount") && i.push((t = s, o = u, r = function(t, n, e) {
                        return wm.set(t, [uu(o.translate(["{0} " + e, n[e]]))])
                    }, wg.sketch({
                        dom: {
                            tag: "button",
                            classes: ["tox-statusbar__wordcount"]
                        },
                        components: [],
                        buttonBehaviours: Wu([Iy.config({}), wm.config({}), Im.config({
                            store: {
                                mode: "memory",
                                initialValue: {
                                    mode: "words",
                                    count: {
                                        words: 0,
                                        characters: 0
                                    }
                                }
                            }
                        }), rg("wordcount-events", [mr(ko(), function(t) {
                            var n = Im.getValue(t),
                                e = "words" === n.mode ? "characters" : "words";
                            Im.setValue(t, {
                                mode: e,
                                count: n.count
                            }), r(t, n.count, e)
                        }), wr(function(e) {
                            t.on("wordCountUpdate", function(t) {
                                var n = Im.getValue(e).mode;
                                Im.setValue(e, {
                                    mode: n,
                                    count: t.wordCount
                                }), r(e, t.wordCount, n)
                            })
                        })])]),
                        eventOrder: (n = {}, n[ko()] = ["wordcount-events", "alloy.base.behaviour"], n)
                    }))), s.getParam("branding", !0, "boolean") && i.push({
                        dom: {
                            tag: "span",
                            classes: ["tox-statusbar__branding"],
                            innerHtml: '<a href="https://www.tiny.cloud/?utm_campaign=editor_referral&amp;utm_medium=poweredby&amp;utm_source=tinymce&amp;utm_content=v5" rel="noopener" target="_blank" tabindex="-1" aria-label="' + (e = bp.translate(["Powered by {0}", "Tiny"])) + '">' + e + "</a>"
                        }
                    }), 0 < i.length ? [{
                        dom: {
                            tag: "div",
                            classes: ["tox-statusbar__text-container"]
                        },
                        components: i
                    }] : []
                }(), n = !Me((t = s).settings.plugins, "autoresize"), r = !1 === (e = t.getParam("resize", n)) ? ZE.None : "both" === e ? ZE.Both : ZE.Vertical, r !== ZE.None && o.push(i(r)), o)
            }
        },
        MA = function(y) {
            var t, n, e, o, r, i = y.getParam("inline", !1, "boolean"),
                x = i ? DB : uB,
                u = et.none(),
                a = Pe.detect().browser.isIE() ? ["tox-platform-ie"] : [],
                c = bp.isRtl() ? {
                    attributes: {
                        dir: "rtl"
                    }
                } : {},
                w = su({
                    dom: P({
                        tag: "div",
                        classes: ["tox", "tox-silver-sink", "tox-tinymce-aux"].concat(a)
                    }, c),
                    behaviours: Wu([Ds.config({
                        useFixed: !1
                    })])
                }),
                s = Sg({
                    dom: {
                        tag: "div",
                        classes: ["tox-anchorbar"]
                    }
                }),
                f = function() {
                    return u.bind(function(t) {
                        return $T.getMoreButton(t)
                    }).getOrDie("Could not find more button element")
                },
                S = function() {
                    return u.bind(function(t) {
                        return $T.getThrobber(t)
                    }).getOrDie("Could not find throbber element")
                },
                C = Yk(w, y, function() {
                    return u.bind(function(t) {
                        return s.getOpt(t)
                    }).getOrDie("Could not find a anchor bar element")
                }, f),
                k = function() {
                    return z.value(w)
                },
                l = $T.parts().menubar({
                    dom: {
                        tag: "div",
                        classes: ["tox-menubar"]
                    },
                    backstage: C,
                    onEscape: function() {
                        y.focus()
                    }
                }),
                d = function(t) {
                    return hb(t)
                },
                m = $T.parts().toolbar({
                    dom: {
                        tag: "div",
                        classes: ["tox-toolbar"]
                    },
                    getSink: k,
                    backstage: C,
                    onEscape: function() {
                        y.focus()
                    },
                    split: d(y),
                    lazyToolbar: function() {
                        return u.bind(function(t) {
                            return $T.getToolbar(t)
                        }).getOrDie("Could not find more toolbar element")
                    },
                    lazyMoreButton: f
                }),
                g = $T.parts()["multiple-toolbar"]({
                    dom: {
                        tag: "div",
                        classes: ["tox-toolbar-overlord"]
                    },
                    onEscape: function() {}
                }),
                p = $T.parts().socket({
                    dom: {
                        tag: "div",
                        classes: ["tox-edit-area"]
                    }
                }),
                h = $T.parts().sidebar({
                    dom: {
                        tag: "div",
                        classes: ["tox-sidebar"]
                    }
                }),
                v = $T.parts().throbber({
                    dom: {
                        tag: "div",
                        classes: ["tox-throbber"]
                    },
                    backstage: C
                }),
                b = y.getParam("statusbar", !0, "boolean") && !i ? et.some(_A(y, C.shared.providers)) : et.none(),
                O = {
                    dom: {
                        tag: "div",
                        classes: ["tox-sidebar-wrap"]
                    },
                    components: [p, h]
                },
                E = mb(y),
                T = (n = (t = y).getParam("toolbar", !0), e = !0 === n, o = L(n), r = j(n) && 0 < n.length, !mb(t) && (r || o || e)),
                B = !1 !== y.getParam("menubar", !0, "boolean"),
                A = d(y) !== ib["default"],
                D = q([B ? [l] : [], E ? (A && H.console.warn("Toolbar drawer cannot be applied when multiple toolbars are active"), [g]) : T ? [m] : [], bb(y) ? [] : [s.asSpec()], i ? [] : [O]]),
                _ = q([
                    [{
                        dom: {
                            tag: "div",
                            classes: ["tox-editor-container"]
                        },
                        components: D
                    }], i ? [] : b.toArray(), [v]
                ]),
                M = i && !B && !T && !E,
                F = P({
                    role: "application"
                }, bp.isRtl() ? {
                    dir: "rtl"
                } : {}, M ? {
                    "aria-hidden": "true"
                } : {}),
                I = su($T.sketch({
                    dom: {
                        tag: "div",
                        classes: ["tox", "tox-tinymce"].concat(i ? ["tox-tinymce-inline"] : []).concat(a),
                        styles: P({
                            visibility: "hidden"
                        }, M ? {
                            opacity: "0",
                            border: "0"
                        } : {}),
                        attributes: F
                    },
                    components: _,
                    behaviours: Wu(x.getBehaviours(y).concat([hm.config({
                        mode: "cyclic",
                        selector: ".tox-menubar, .tox-toolbar, .tox-toolbar__primary, .tox-toolbar__overflow--open, .tox-sidebar__overflow--open, .tox-statusbar__path, .tox-statusbar__wordcount, .tox-statusbar__branding a"
                    })]))
                }));
            u = et.some(I), y.shortcuts.add("alt+F9", "focus menubar", function() {
                $T.focusMenubar(I)
            }), y.shortcuts.add("alt+F10", "focus toolbar", function() {
                $T.focusToolbar(I)
            });
            var R = cb(I),
                V = cb(w);
            ST(y, R, V);
            var N = function(t) {
                var n, e = fh.DOM,
                    o = y.getParam("width", e.getStyle(t, "width")),
                    r = (n = y).getParam("height", Math.max(n.getElement().offsetHeight, 200)),
                    i = fb(y),
                    u = lb(y),
                    a = tA(o).bind(function(n) {
                        return nA(i.map(function(t) {
                            return Math.max(n, t)
                        }))
                    }).getOr(nA(o)),
                    c = tA(r).bind(function(n) {
                        return u.map(function(t) {
                            return Math.max(n, t)
                        })
                    }).getOr(r),
                    s = nA(a);
                if (Ki("div", "width", s) && Wi(I.element(), "width", s), !y.inline) {
                    var f = nA(c);
                    Ki("div", "height", f) ? Wi(I.element(), "height", f) : Wi(I.element(), "height", "200px")
                }
                return c
            };
            return {
                mothership: R,
                uiMothership: V,
                backstage: C,
                renderUI: function() {
                    var o, r, e, n, i, u, a, c;
                    zB(y, C), ZB(y, k, C), r = (o = y).ui.registry.getAll().sidebars, W(ut(r), function(n) {
                        var t = r[n],
                            e = function() {
                                return et.from(o.queryCommandValue("ToggleSidebar")).is(n)
                            };
                        o.ui.registry.addToggleButton(n, {
                            icon: t.icon,
                            tooltip: t.tooltip,
                            onAction: function(t) {
                                o.execCommand("ToggleSidebar", !1, n), t.setActive(e())
                            },
                            onSetup: function(t) {
                                var n = function() {
                                    return t.setActive(e())
                                };
                                return o.on("ToggleSidebar", n),
                                    function() {
                                        o.off("ToggleSidebar", n)
                                    }
                            }
                        })
                    }), e = y, n = S, i = C.shared, u = ce(!1), a = ce(et.none()), c = function(t) {
                        t !== u.get() && (UT(n(), t, i.providers), u.set(t))
                    }, e.on("ProgressState", function(t) {
                        if (a.get().each(Tg.clearTimeout), U(t.time)) {
                            var n = Tg.setEditorTimeout(e, function() {
                                return c(t.state)
                            }, t.time);
                            a.set(et.some(n))
                        } else c(t.state), a.set(et.none())
                    });
                    var t = y.ui.registry.getAll(),
                        s = t.buttons,
                        f = t.menuItems,
                        l = t.contextToolbars,
                        d = t.sidebars,
                        m = db(y),
                        g = {
                            menuItems: f,
                            menus: y.settings.menu ? st(y.settings.menu, function(t) {
                                return yt(t, {
                                    items: t.items
                                })
                            }) : {},
                            menubar: y.settings.menubar,
                            toolbar: m.getOrThunk(function() {
                                return y.getParam("toolbar", !0)
                            }),
                            buttons: s,
                            sidebar: d
                        };
                    wT(y, l, w, {
                        backstage: C
                    });
                    var p = y.getElement(),
                        h = N(p),
                        v = {
                            mothership: R,
                            uiMothership: V,
                            outerContainer: I
                        },
                        b = {
                            targetNode: p,
                            height: h
                        };
                    return x.render(y, v, g, C, b)
                },
                getUi: function() {
                    return {
                        channels: {
                            broadcastAll: V.broadcast,
                            broadcastOn: V.broadcastOn,
                            register: function() {}
                        }
                    }
                }
            }
        },
        FA = function(t, n) {
            var e = et.from(qr(t, "id")).fold(function() {
                var t = oi("dialog-label");
                return Xr(n, "id", t), t
            }, d);
            Xr(t, "aria-labelledby", e)
        },
        IA = nt([Pn("lazySink"), Yn("dragBlockClass"), Zn("useTabstopAt", nt(!0)), Zn("eventOrder", {}), nf("modalBehaviours", [hm]), Fu("onExecute"), Ru("onEscape")]),
        RA = {
            sketch: d
        },
        VA = nt([Mf({
            name: "draghandle",
            overrides: function(t, n) {
                return {
                    behaviours: Wu([yA.config({
                        mode: "mouse",
                        getTarget: function(t) {
                            return lu(t, '[role="dialog"]').getOr(t)
                        },
                        blockerClass: t.dragBlockClass.getOrDie(new Error("The drag blocker class was not specified for a dialog with a drag handle: \n" + un(n, null, 2)).message)
                    })])
                }
            }
        }), Df({
            schema: [Pn("dom")],
            name: "title"
        }), Df({
            factory: RA,
            schema: [Pn("dom")],
            name: "close"
        }), Df({
            factory: RA,
            schema: [Pn("dom")],
            name: "body"
        }), Mf({
            factory: RA,
            schema: [Pn("dom")],
            name: "footer"
        }), _f({
            factory: {
                sketch: function(t, n) {
                    return P({}, t, {
                        dom: n.dom,
                        components: n.components
                    })
                }
            },
            schema: [Zn("dom", {
                tag: "div",
                styles: {
                    position: "fixed",
                    left: "0px",
                    top: "0px",
                    right: "0px",
                    bottom: "0px"
                }
            }), Zn("components", [])],
            name: "blocker"
        })]),
        NA = al({
            name: "ModalDialog",
            configFields: IA(),
            partFields: VA(),
            factory: function(r, t, n, o) {
                var a = oi("alloy.dialog.busy"),
                    c = oi("alloy.dialog.idle"),
                    s = Wu([hm.config({
                        mode: "special",
                        onTab: function() {
                            return et.some(!0)
                        },
                        onShiftTab: function() {
                            return et.some(!0)
                        }
                    }), Pm.config({})]),
                    e = oi("modal-events"),
                    i = P({}, r.eventOrder, {
                        "alloy.system.attached": [e].concat(r.eventOrder["alloy.system.attached"] || [])
                    });
                return {
                    uid: r.uid,
                    dom: r.dom,
                    components: t,
                    apis: {
                        show: function(i) {
                            var t = r.lazySink(i).getOrDie(),
                                u = ce(et.none()),
                                n = o.blocker(),
                                e = t.getSystem().build(P({}, n, {
                                    components: n.components.concat([fu(i)]),
                                    behaviours: Wu([rg("dialog-blocker-events", [mr(c, function(t, n) {
                                        Kr(i.element(), "aria-busy") && ($r(i.element(), "aria-busy"), u.get().each(function(t) {
                                            return wm.remove(i, t)
                                        }))
                                    }), mr(a, function(t, n) {
                                        Xr(i.element(), "aria-busy", "true");
                                        var e = n.event().getBusySpec();
                                        u.get().each(function(t) {
                                            wm.remove(i, t)
                                        });
                                        var o = e(i, s),
                                            r = t.getSystem().build(o);
                                        u.set(et.some(r)), wm.append(i, fu(r)), r.hasConfigured(hm) && hm.focusIn(r)
                                    })])])
                                }));
                            Fs(t, e), hm.focusIn(i)
                        },
                        hide: function(n) {
                            _r(n.element()).each(function(t) {
                                n.getSystem().getByDom(t).each(function(t) {
                                    Vs(t)
                                })
                            })
                        },
                        getBody: function(t) {
                            return Gf(t, r, "body")
                        },
                        getFooter: function(t) {
                            return Gf(t, r, "footer")
                        },
                        setIdle: function(t) {
                            zo(t, c)
                        },
                        setBusy: function(t, n) {
                            Lo(t, a, {
                                getBusySpec: n
                            })
                        }
                    },
                    eventOrder: i,
                    domModification: {
                        attributes: {
                            role: "dialog",
                            "aria-modal": "true"
                        }
                    },
                    behaviours: of(r.modalBehaviours, [wm.config({}), hm.config({
                        mode: "cyclic",
                        onEnter: r.onExecute,
                        onEscape: r.onEscape,
                        useTabstopAt: r.useTabstopAt
                    }), rg(e, [wr(function(t) {
                        var n, e, o;
                        FA(t.element(), Gf(t, r, "title").element()), n = t.element(), e = Gf(t, r, "body").element(), o = et.from(qr(n, "id")).fold(function() {
                            var t = oi("dialog-describe");
                            return Xr(e, "id", t), t
                        }, d), Xr(n, "aria-describedby", o)
                    })])])
                }
            },
            apis: {
                show: function(t, n) {
                    t.show(n)
                },
                hide: function(t, n) {
                    t.hide(n)
                },
                getBody: function(t, n) {
                    return t.getBody(n)
                },
                getFooter: function(t, n) {
                    return t.getFooter(n)
                },
                setBusy: function(t, n, e) {
                    t.setBusy(n, e)
                },
                setIdle: function(t, n) {
                    t.setIdle(n)
                }
            }
        }),
        HA = [Ln("type"), Ln("text"), jn("level", ["info", "warn", "error", "success"]), Ln("icon"), Zn("url", "")],
        PA = [Ln("type"), Ln("text"), re("disabled", !1), re("primary", !1), wn("name", "name", Ot(function() {
            return oi("button-name")
        }), Rn), $n("icon")],
        zA = [Ln("type"), Ln("name"), Ln("label")],
        LA = Vn,
        jA = [Ln("type"), Ln("name"), $n("label")],
        UA = jA,
        WA = Rn,
        GA = jA,
        XA = Rn,
        YA = jA,
        qA = hn(kn),
        KA = jA.concat([re("sandboxed", !0)]),
        $A = Rn,
        JA = jA.concat([$n("placeholder")]),
        QA = Rn,
        ZA = jA.concat([Gn("items", [Ln("text"), Ln("value")]), ne("size", 1)]),
        tD = Rn,
        nD = jA.concat([re("constrain", !0)]),
        eD = pn([Ln("width"), Ln("height")]),
        oD = jA.concat([$n("placeholder")]),
        rD = Rn,
        iD = jA.concat([oe("filetype", "file", ["image", "media", "file"])]),
        uD = pn([Ln("value"), Zn("meta", {})]),
        aD = [Ln("type"), ee("tag", "textarea"), Un("init")],
        cD = Rn,
        sD = [Ln("type"), Ln("html"), oe("presets", "presentation", ["presentation", "document"])],
        fD = jA.concat([zn("currentState", pn([Pn("blob"), Ln("url")]))]),
        lD = jA.concat([Zn("columns", "auto")]),
        dD = (xA = [Ln("value"), Ln("text"), Ln("icon")], yn(xA)),
        mD = [Ln("type"), Xn("header", Rn), Xn("cells", hn(Rn))],
        gD = function(n) {
            return wn("items", "items", Ct(), hn(On(function(t) {
                return Tn("Checking item of " + n, pD, t).fold(function(t) {
                    return z.error(Dn(t))
                }, function(t) {
                    return z.value(t)
                })
            })))
        },
        pD = _n("type", {
            alertbanner: HA,
            bar: (kA = gD("bar"), [Ln("type"), kA]),
            button: PA,
            checkbox: zA,
            colorinput: UA,
            colorpicker: GA,
            dropzone: YA,
            grid: (SA = gD("grid"), [Ln("type"), (CA = "columns", zn(CA, In)), SA]),
            iframe: KA,
            input: JA,
            selectbox: ZA,
            sizeinput: nD,
            textarea: oD,
            urlinput: iD,
            customeditor: aD,
            htmlpanel: sD,
            imagetools: fD,
            collection: lD,
            label: (wA = gD("label"), [Ln("type"), Ln("label"), wA]),
            table: mD
        }),
        hD = [Ln("type"), Xn("items", pD)],
        vD = [wn("name", "name", Ot(function() {
            return oi("tab-name")
        }), Rn), Ln("title"), Xn("items", pD)],
        bD = [Ln("type"), Gn("tabs", vD)],
        yD = [wn("name", "name", Ot(function() {
            return oi("button-name")
        }), Rn), Ln("text"), $n("icon"), oe("align", "end", ["start", "end"]), re("primary", !1), re("disabled", !1)],
        xD = pn([jn("type", ["submit", "cancel", "custom"])].concat(yD)),
        wD = pn([Ln("title"), zn("body", _n("type", {
            panel: hD,
            tabpanel: bD
        })), ee("size", "normal"), Xn("buttons", xD), Zn("initialData", {}), ie("onAction", tt), ie("onChange", tt), ie("onSubmit", tt), ie("onClose", tt), ie("onCancel", tt), Zn("onTabChange", tt)]),
        SD = function(t) {
            return k(t) ? [t].concat(K(dt(t), SD)) : j(t) ? K(t, SD) : []
        },
        CD = function(t) {
            return L(t.type) && L(t.name)
        },
        kD = {
            checkbox: LA,
            colorinput: WA,
            colorpicker: XA,
            dropzone: qA,
            input: QA,
            iframe: $A,
            sizeinput: eD,
            selectbox: tD,
            size: eD,
            textarea: rD,
            urlinput: uD,
            customeditor: cD,
            collection: dD
        },
        OD = function(t) {
            var n = K(I(SD(t), CD), function(n) {
                return (t = n, et.from(kD[t.type])).fold(function() {
                    return []
                }, function(t) {
                    return [zn(n.name, t)]
                });
                var t
            });
            return pn(n)
        },
        ED = pn([jn("type", ["cancel", "custom"])].concat(yD)),
        TD = pn([Ln("title"), Ln("url"), Kn("height"), Kn("width"), (OA = "buttons", EA = ED, qn(OA, hn(EA))), ie("onAction", tt), ie("onCancel", tt), ie("onClose", tt), ie("onMessage", tt)]),
        BD = function(t) {
            return {
                internalDialog: Bn(Tn("dialog", wD, t)),
                dataValidator: OD(t),
                initialData: t.initialData
            }
        },
        AD = {
            open: function(t, n) {
                var e = BD(n);
                return t(e.internalDialog, e.initialData, e.dataValidator)
            },
            openUrl: function(t, n) {
                return t(Bn(Tn("dialog", TD, n)))
            },
            redial: function(t) {
                return BD(t)
            }
        },
        DD = function(t) {
            var e = [],
                o = {};
            return ct(t, function(t, n) {
                t.fold(function() {
                    e.push(n)
                }, function(t) {
                    o[n] = t
                })
            }), 0 < e.length ? z.error(e) : z.value(o)
        },
        _D = ul({
            name: "TabButton",
            configFields: [Zn("uid", undefined), Pn("value"), wn("dom", "dom", Et(function(t) {
                return {
                    attributes: {
                        role: "tab",
                        id: oi("aria"),
                        "aria-selected": "false"
                    }
                }
            }), Mn()), Yn("action"), Zn("domModification", {}), nf("tabButtonBehaviours", [Pm, hm, Im]), Pn("view")],
            factory: function(t, n) {
                return {
                    uid: t.uid,
                    dom: t.dom,
                    components: t.components,
                    events: xg(t.action),
                    behaviours: of(t.tabButtonBehaviours, [Pm.config({}), hm.config({
                        mode: "execution",
                        useSpace: !0,
                        useEnter: !0
                    }), Im.config({
                        store: {
                            mode: "memory",
                            initialValue: t.value
                        }
                    })]),
                    domModification: t.domModification
                }
            }
        }),
        MD = nt([Pn("tabs"), Pn("dom"), Zn("clickToDismiss", !1), nf("tabbarBehaviours", [kl, hm]), Du(["tabClass", "selectedClass"])]),
        FD = Ff({
            factory: _D,
            name: "tabs",
            unit: "tab",
            overrides: function(o, t) {
                var r = function(t, n) {
                        kl.dehighlight(t, n), Lo(t, No(), {
                            tabbar: t,
                            button: n
                        })
                    },
                    i = function(t, n) {
                        kl.highlight(t, n), Lo(t, Vo(), {
                            tabbar: t,
                            button: n
                        })
                    };
                return {
                    action: function(t) {
                        var n = t.getSystem().getByUid(o.uid).getOrDie(),
                            e = kl.isHighlighted(n, t);
                        (e && o.clickToDismiss ? r : e ? tt : i)(n, t)
                    },
                    domModification: {
                        classes: [o.markers.tabClass]
                    }
                }
            }
        }),
        ID = nt([FD]),
        RD = al({
            name: "Tabbar",
            configFields: MD(),
            partFields: ID(),
            factory: function(t, n, e, o) {
                return {
                    uid: t.uid,
                    dom: t.dom,
                    components: n,
                    "debug.sketcher": "Tabbar",
                    domModification: {
                        attributes: {
                            role: "tablist"
                        }
                    },
                    behaviours: of(t.tabbarBehaviours, [kl.config({
                        highlightClass: t.markers.selectedClass,
                        itemClass: t.markers.tabClass,
                        onHighlight: function(t, n) {
                            Xr(n.element(), "aria-selected", "true")
                        },
                        onDehighlight: function(t, n) {
                            Xr(n.element(), "aria-selected", "false")
                        }
                    }), hm.config({
                        mode: "flow",
                        getInitial: function(t) {
                            return kl.getHighlighted(t).map(function(t) {
                                return t.element()
                            })
                        },
                        selector: "." + t.markers.tabClass,
                        executeOnMove: !0
                    })])
                }
            }
        }),
        VD = ul({
            name: "Tabview",
            configFields: [nf("tabviewBehaviours", [wm])],
            factory: function(t, n) {
                return {
                    uid: t.uid,
                    dom: t.dom,
                    behaviours: of(t.tabviewBehaviours, [wm.config({})]),
                    domModification: {
                        attributes: {
                            role: "tabpanel"
                        }
                    }
                }
            }
        }),
        ND = nt([Zn("selectFirst", !0), Mu("onChangeTab"), Mu("onDismissTab"), Zn("tabs", []), nf("tabSectionBehaviours", [])]),
        HD = Df({
            factory: RD,
            schema: [Pn("dom"), Wn("markers", [Pn("tabClass"), Pn("selectedClass")])],
            name: "tabbar",
            defaults: function(t) {
                return {
                    tabs: t.tabs
                }
            }
        }),
        PD = Df({
            factory: VD,
            name: "tabview"
        }),
        zD = nt([HD, PD]),
        LD = al({
            name: "TabSection",
            configFields: ND(),
            partFields: zD(),
            factory: function(i, t, n, e) {
                var o = function(t, n) {
                    Wf(t, i, "tabbar").each(function(t) {
                        n(t).each(jo)
                    })
                };
                return {
                    uid: i.uid,
                    dom: i.dom,
                    components: t,
                    behaviours: ef(i.tabSectionBehaviours),
                    events: fr(q([i.selectFirst ? [wr(function(t, n) {
                            o(t, kl.getFirst)
                        })] : [],
                        [mr(Vo(), function(t, n) {
                            var o, r, e = n.event().button();
                            o = e, r = Im.getValue(o), Wf(o, i, "tabview").each(function(e) {
                                N(i.tabs, function(t) {
                                    return t.value === r
                                }).each(function(t) {
                                    var n = t.view();
                                    Xr(e.element(), "aria-labelledby", qr(o.element(), "id")), wm.set(e, n), i.onChangeTab(e, o, n)
                                })
                            })
                        }), mr(No(), function(t, n) {
                            var e = n.event().button();
                            i.onDismissTab(t, e)
                        })]
                    ])),
                    apis: {
                        getViewItems: function(t) {
                            return Wf(t, i, "tabview").map(function(t) {
                                return wm.contents(t)
                            }).getOr([])
                        },
                        showTab: function(t, e) {
                            o(t, function(n) {
                                var t = kl.getCandidates(n);
                                return N(t, function(t) {
                                    return Im.getValue(t) === e
                                }).filter(function(t) {
                                    return !kl.isHighlighted(n, t)
                                })
                            })
                        }
                    }
                }
            },
            apis: {
                getViewItems: function(t, n) {
                    return t.getViewItems(n)
                },
                showTab: function(t, n, e) {
                    t.showTab(n, e)
                }
            }
        }),
        jD = function(t) {
            return ot((n = t, e = function(t, n) {
                return n < t ? -1 : t < n ? 1 : 0
            }, (o = B.call(n, 0)).sort(e), o));
            var n, e, o
        },
        UD = function(i, u, t) {
            lu(i, '[role="dialog"]').each(function(r) {
                t.get().map(function(t) {
                    return Wi(u, "height", "0"), Math.min(t, (e = i, o = lu(n = r, ".tox-dialog-wrap").getOr(n), ("fixed" === Xi(o, "position") ? Math.max(H.document.documentElement.clientHeight, H.window.innerHeight) : Math.max(H.document.documentElement.offsetHeight, H.document.documentElement.scrollHeight)) - (n.dom().getBoundingClientRect().height - e.dom().getBoundingClientRect().height)));
                    var n, e, o
                }).each(function(t) {
                    Wi(u, "height", t + "px")
                })
            })
        },
        WD = function(a) {
            var c;
            return {
                smartTabHeight: (c = ce(et.none()), {
                    extraEvents: [wr(function(t) {
                        du(t.element(), '[role="tabpanel"]').each(function(u) {
                            var n;
                            Wi(u, "visibility", "hidden"), t.getSystem().getByDom(u).toOption().each(function(t) {
                                var o, r, i, n = (r = u, i = t, F(o = a, function(t, n) {
                                        wm.set(i, o[n].view());
                                        var e = r.dom().getBoundingClientRect();
                                        return wm.set(i, []), e.height
                                    })),
                                    e = jD(n);
                                c.set(e)
                            }), UD(t.element(), u, c), $i(u, "visibility"), n = t, ot(a).each(function(t) {
                                return LD.showTab(n, t.value)
                            }), Tg.requestAnimationFrame(function() {
                                UD(t.element(), u, c)
                            })
                        })
                    }), mr(Do(), function(n) {
                        du(n.element(), '[role="tabpanel"]').each(function(t) {
                            UD(n.element(), t, c)
                        })
                    }), mr(Tb, function(r, t) {
                        du(r.element(), '[role="tabpanel"]').each(function(n) {
                            var t = Vl();
                            Wi(n, "visibility", "hidden");
                            var e = qi(n, "height").map(function(t) {
                                return parseInt(t, 10)
                            });
                            $i(n, "height");
                            var o = n.dom().getBoundingClientRect().height;
                            e.forall(function(t) {
                                return t < o
                            }) ? (c.set(et.from(o)), UD(r.element(), n, c)) : e.each(function(t) {
                                Wi(n, "height", t + "px")
                            }), $i(n, "visibility"), t.each(Rl)
                        })
                    })],
                    selectFirst: !1
                }),
                naiveTabHeight: {
                    extraEvents: [],
                    selectFirst: !0
                }
            }
        },
        GD = "send-data-to-section",
        XD = "send-data-to-view",
        YD = oi("update-dialog"),
        qD = oi("update-title"),
        KD = oi("update-body"),
        $D = oi("update-footer"),
        JD = oi("body-send-message"),
        QD = function(t, n, d, e) {
            return {
                dom: {
                    tag: "div",
                    classes: ["tox-dialog__content-js"],
                    attributes: P({}, n.map(function(t) {
                        return {
                            id: t
                        }
                    }).getOr({}), e ? {
                        "aria-live": "polite"
                    } : {})
                },
                components: [],
                behaviours: Wu([Xw(0), vE.config({
                    channel: KD,
                    updateState: function(t, n) {
                        return et.some({
                            isTabPanel: function() {
                                return "tabpanel" === n.body.type
                            }
                        })
                    },
                    renderComponents: function(t) {
                        switch (t.body.type) {
                            case "tabpanel":
                                return [(r = {
                                    tabs: t.body.tabs
                                }, i = d, u = ce({}), a = function(t) {
                                    var n = Im.getValue(t),
                                        e = DD(n).getOr({}),
                                        o = u.get(),
                                        r = bt(o, e);
                                    u.set(r)
                                }, c = function(t) {
                                    var n = u.get();
                                    Im.setValue(t, n)
                                }, s = ce(null), f = F(r.tabs, function(t) {
                                    return {
                                        value: t.name,
                                        dom: {
                                            tag: "div",
                                            classes: ["tox-dialog__body-nav-item"],
                                            innerHtml: i.shared.providers.translate(t.title)
                                        },
                                        view: function() {
                                            return [Vw.sketch(function(n) {
                                                return {
                                                    dom: {
                                                        tag: "div",
                                                        classes: ["tox-form"]
                                                    },
                                                    components: F(t.items, function(t) {
                                                        return ik(n, t, i)
                                                    }),
                                                    formBehaviours: Wu([hm.config({
                                                        mode: "acyclic",
                                                        useTabstopAt: x(aS)
                                                    }), rg("TabView.form.events", [wr(c), Sr(a)]), Qu.config({
                                                        channels: Rt([{
                                                            key: GD,
                                                            value: {
                                                                onReceive: a
                                                            }
                                                        }, {
                                                            key: XD,
                                                            value: {
                                                                onReceive: c
                                                            }
                                                        }])
                                                    })])
                                                }
                                            })]
                                        }
                                    }
                                }), l = WD(f).smartTabHeight, LD.sketch({
                                    dom: {
                                        tag: "div",
                                        classes: ["tox-dialog__body"]
                                    },
                                    onChangeTab: function(t, n, e) {
                                        var o = Im.getValue(n);
                                        Lo(t, Eb, {
                                            name: o,
                                            oldName: s.get()
                                        }), s.set(o)
                                    },
                                    tabs: f,
                                    components: [LD.parts().tabbar({
                                        dom: {
                                            tag: "div",
                                            classes: ["tox-dialog__body-nav"]
                                        },
                                        components: [RD.parts().tabs({})],
                                        markers: {
                                            tabClass: "tox-tab",
                                            selectedClass: "tox-dialog__body-nav-item--active"
                                        },
                                        tabbarBehaviours: Wu([Iy.config({})])
                                    }), LD.parts().tabview({
                                        dom: {
                                            tag: "div",
                                            classes: ["tox-dialog__body-content"]
                                        }
                                    })],
                                    selectFirst: l.selectFirst,
                                    tabSectionBehaviours: Wu([rg("tabpanel", l.extraEvents), hm.config({
                                        mode: "acyclic"
                                    }), ll.config({
                                        find: function(t) {
                                            return ot(LD.getViewItems(t))
                                        }
                                    }), Im.config({
                                        store: {
                                            mode: "manual",
                                            getValue: function(t) {
                                                return t.getSystem().broadcastOn([GD], {}), u.get()
                                            },
                                            setValue: function(t, n) {
                                                u.set(n), t.getSystem().broadcastOn([XD], {})
                                            }
                                        }
                                    })])
                                }))];
                            default:
                                return [(e = {
                                    items: t.body.items
                                }, o = d, n = Sg(Vw.sketch(function(n) {
                                    return {
                                        dom: {
                                            tag: "div",
                                            classes: ["tox-form"]
                                        },
                                        components: F(e.items, function(t) {
                                            return ik(n, t, o)
                                        })
                                    }
                                })), {
                                    dom: {
                                        tag: "div",
                                        classes: ["tox-dialog__body"]
                                    },
                                    components: [{
                                        dom: {
                                            tag: "div",
                                            classes: ["tox-dialog__body-content"]
                                        },
                                        components: [n.asSpec()]
                                    }],
                                    behaviours: Wu([hm.config({
                                        mode: "acyclic",
                                        useTabstopAt: x(aS)
                                    }), Gw(n), Qw(n, {
                                        postprocess: function(t) {
                                            return DD(t).fold(function(t) {
                                                return H.console.error(t), {}
                                            }, function(t) {
                                                return t
                                            })
                                        }
                                    })])
                                })]
                        }
                        var e, o, n, r, i, u, a, c, s, f, l
                    },
                    initialData: t
                })])
            }
        },
        ZD = function(t, e) {
            return [vr(uo(), cS), t(xb, function(t, n) {
                e.onClose(), n.onClose()
            }), t(wb, function(t, n, e, o) {
                n.onCancel(t), zo(o, xb)
            }), mr(Ob, function(t, n) {
                return e.onUnblock()
            }), mr(kb, function(t, n) {
                return e.onBlock(n.event())
            })]
        },
        t_ = function(i, t) {
            var n = function(t, r) {
                    return mr(t, function(e, o) {
                        u(e, function(t, n) {
                            r(i(), t, o.event(), e)
                        })
                    })
                },
                u = function(n, e) {
                    vE.getState(n).get().each(function(t) {
                        e(t, n)
                    })
                };
            return ZD(n, t).concat([n(Sb, function(t, n, e) {
                n.onAction(t, {
                    name: e.name()
                })
            })])
        },
        n_ = function(i, t) {
            var n = function(t, r) {
                    return mr(t, function(e, o) {
                        u(e, function(t, n) {
                            r(i(), t, o.event(), e)
                        })
                    })
                },
                u = function(n, e) {
                    vE.getState(n).get().each(function(t) {
                        e(t.internalDialog, n)
                    })
                };
            return ZD(n, t).concat([n(Cb, function(t, n) {
                return n.onSubmit(t)
            }), n(yb, function(t, n, e) {
                n.onChange(t, {
                    name: e.name()
                })
            }), n(Sb, function(t, n, e) {
                n.onAction(t, {
                    name: e.name(),
                    value: e.value()
                })
            }), n(Eb, function(t, n, e) {
                n.onTabChange(t, {
                    newTabName: e.name(),
                    oldTabName: e.oldName()
                })
            }), Sr(function(t) {
                var n = i();
                Im.setValue(t, n.getData())
            })])
        },
        e_ = function(t, n) {
            var e = function(t, n) {
                    for (var e = [], o = [], r = 0, i = t.length; r < i; r++) {
                        var u = t[r];
                        (n(u, r, t) ? e : o).push(u)
                    }
                    return {
                        pass: e,
                        fail: o
                    }
                }(n.map(function(t) {
                    return t.footerButtons
                }).getOr([]), function(t) {
                    return "start" === t.align
                }),
                o = function(t, n) {
                    return ab.sketch({
                        dom: {
                            tag: "div",
                            classes: ["tox-dialog__footer-" + t]
                        },
                        components: F(n, function(t) {
                            return t.memento.asSpec()
                        })
                    })
                };
            return [o("start", e.pass), o("end", e.fail)]
        },
        o_ = function(t, i) {
            return {
                dom: vp('<div class="tox-dialog__footer"></div>'),
                components: [],
                behaviours: Wu([vE.config({
                    channel: $D,
                    initialData: t,
                    updateState: function(t, n) {
                        var r = F(n.buttons, function(t) {
                            var n, e, o = Sg((e = i, uC(n = t, n.type, e)));
                            return {
                                name: t.name,
                                align: t.align,
                                memento: o
                            }
                        });
                        return et.some({
                            lookupByName: function(t, n) {
                                return e = t, o = n, N(r, function(t) {
                                    return t.name === o
                                }).bind(function(t) {
                                    return t.memento.getOpt(e)
                                });
                                var e, o
                            },
                            footerButtons: r
                        })
                    },
                    renderComponents: e_
                })])
            }
        },
        r_ = function(t, n) {
            return NA.parts().footer(o_(t, n))
        },
        i_ = function(n, e) {
            if (n.getRoot().getSystem().isConnected()) {
                var o = ll.getCurrent(n.getFormWrapper()).getOr(n.getFormWrapper());
                return Vw.getField(o, e).fold(function() {
                    var t = n.getFooter();
                    return vE.getState(t).get().bind(function(t) {
                        return t.lookupByName(o, e)
                    })
                }, function(t) {
                    return et.some(t)
                })
            }
            return et.none()
        },
        u_ = function(c, o) {
            var t = function(t) {
                    var n = c.getRoot();
                    n.getSystem().isConnected() && t(n)
                },
                s = {
                    getData: function() {
                        var t = c.getRoot(),
                            n = t.getSystem().isConnected() ? c.getFormWrapper() : t;
                        return Im.getValue(n)
                    },
                    setData: function(a) {
                        t(function(t) {
                            var n, e, o = s.getData(),
                                r = yt(o, a),
                                i = (n = r, e = c.getRoot(), vE.getState(e).get().map(function(t) {
                                    return Bn(Tn("data", t.dataValidator, n))
                                }).getOr(n)),
                                u = c.getFormWrapper();
                            Im.setValue(u, i)
                        })
                    },
                    disable: function(t) {
                        i_(c, t).each(Qp.disable)
                    },
                    enable: function(t) {
                        i_(c, t).each(Qp.enable)
                    },
                    focus: function(t) {
                        i_(c, t).each(Pm.focus)
                    },
                    block: function(n) {
                        if (!L(n)) throw new Error("The dialogInstanceAPI.block function should be passed a blocking message of type string as an argument");
                        t(function(t) {
                            Lo(t, kb, {
                                message: n
                            })
                        })
                    },
                    unblock: function() {
                        t(function(t) {
                            zo(t, Ob)
                        })
                    },
                    showTab: function(e) {
                        t(function(t) {
                            var n = c.getBody();
                            vE.getState(n).get().exists(function(t) {
                                return t.isTabPanel()
                            }) && ll.getCurrent(n).each(function(t) {
                                LD.showTab(t, e)
                            })
                        })
                    },
                    redial: function(e) {
                        t(function(t) {
                            var n = o(e);
                            t.getSystem().broadcastOn([YD], n), t.getSystem().broadcastOn([qD], n.internalDialog), t.getSystem().broadcastOn([KD], n.internalDialog), t.getSystem().broadcastOn([$D], n.internalDialog), s.setData(n.initialData)
                        })
                    },
                    close: function() {
                        t(function(t) {
                            zo(t, xb)
                        })
                    }
                };
            return s
        },
        a_ = function(t) {
            return wg.sketch({
                dom: {
                    tag: "button",
                    classes: ["tox-button", "tox-button--icon", "tox-button--naked"],
                    attributes: {
                        type: "button",
                        "aria-label": t.translate("Close"),
                        title: t.translate("Close")
                    }
                },
                components: [{
                    dom: {
                        tag: "div",
                        classes: ["tox-icon"],
                        innerHtml: '<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M17.953 7.453L13.422 12l4.531 4.547-1.406 1.406L12 13.422l-4.547 4.531-1.406-1.406L10.578 12 6.047 7.453l1.406-1.406L12 10.578l4.547-4.531z" fill-rule="evenodd"></path></svg>'
                    }
                }],
                action: function(t) {
                    zo(t, wb)
                }
            })
        },
        c_ = function(t, n, e) {
            var o = function(t) {
                return [uu(e.translate(t.title))]
            };
            return {
                dom: {
                    tag: "div",
                    classes: ["tox-dialog__title"],
                    attributes: P({}, n.map(function(t) {
                        return {
                            id: t
                        }
                    }).getOr({}))
                },
                components: o(t),
                behaviours: Wu([vE.config({
                    channel: qD,
                    renderComponents: o
                })])
            }
        },
        s_ = function(t, n) {
            return e = {
                title: n.shared.providers.translate(t),
                draggable: !0
            }, o = n.shared.providers, r = NA.parts().title(c_(e, et.none(), o)), i = NA.parts().draghandle({
                dom: vp('<div class="tox-dialog__draghandle"></div>')
            }), u = NA.parts().close(a_(o)), a = [r].concat(e.draggable ? [i] : []).concat([u]), ab.sketch({
                dom: vp('<div class="tox-dialog__header"></div>'),
                components: a
            });
            var e, o, r, i, u, a
        },
        f_ = function(t, n) {
            return {
                onClose: function() {
                    return n.closeWindow()
                },
                onBlock: function(e) {
                    NA.setBusy(t(), function(t, n) {
                        return {
                            dom: {
                                tag: "div",
                                classes: ["tox-dialog__busy-spinner"],
                                attributes: {
                                    "aria-label": e.message()
                                },
                                styles: {
                                    left: "0px",
                                    right: "0px",
                                    bottom: "0px",
                                    top: "0px",
                                    position: "absolute"
                                }
                            },
                            behaviours: n,
                            components: [{
                                dom: vp('<div class="tox-spinner"><div></div><div></div><div></div></div>')
                            }]
                        }
                    })
                },
                onUnblock: function() {
                    NA.setIdle(t())
                }
            }
        },
        l_ = function(t, n, e, o) {
            var r;
            return su(NA.sketch({
                lazySink: o.shared.getSink,
                onEscape: function(t) {
                    return zo(t, wb), et.some(!0)
                },
                useTabstopAt: function(t) {
                    return !aS(t) && ("button" !== Qo(t) || "disabled" !== qr(t, "disabled"))
                },
                modalBehaviours: Wu([vE.config({
                    channel: YD,
                    updateState: function(t, n) {
                        return et.some(n)
                    },
                    initialData: n
                }), nS({}), Pm.config({}), rg("execute-on-form", e.concat([xr(uo(), function(t, n) {
                    hm.focusIn(t)
                })])), rg("scroll-lock", [wr(function() {
                    Ri(rr(), "tox-dialog__disable-scroll")
                }), Sr(function() {
                    Ni(rr(), "tox-dialog__disable-scroll")
                })])].concat(t.extraBehaviours)),
                eventOrder: (r = {}, r[wo()] = ["execute-on-form"], r[xo()] = ["reflecting", "receiving"], r[_o()] = ["scroll-lock", "reflecting", "messages", "execute-on-form", "alloy.base.behaviour"], r[Mo()] = ["alloy.base.behaviour", "execute-on-form", "messages", "reflecting", "scroll-lock"], r),
                dom: {
                    tag: "div",
                    classes: ["tox-dialog"].concat(t.extraClasses),
                    styles: P({
                        position: "relative"
                    }, t.extraStyles)
                },
                components: [t.header, t.body].concat(t.footer.toArray()),
                dragBlockClass: "tox-dialog-wrap",
                parts: {
                    blocker: {
                        dom: vp('<div class="tox-dialog-wrap"></div>'),
                        components: [{
                            dom: {
                                tag: "div",
                                classes: ["tox-dialog-wrap__backdrop"]
                            }
                        }]
                    }
                }
            }))
        },
        d_ = function(t, n, e) {
            var o, r, i, u = s_(t.internalDialog.title, e),
                a = (o = {
                    body: t.internalDialog.body
                }, r = e, i = QD(o, et.none(), r, !1), NA.parts().body(i)),
                c = r_({
                    buttons: t.internalDialog.buttons
                }, e.shared.providers),
                s = n_(function() {
                    return m
                }, f_(function() {
                    return d
                }, n)),
                f = "normal" !== t.internalDialog.size ? "large" === t.internalDialog.size ? ["tox-dialog--width-lg"] : ["tox-dialog--width-md"] : [],
                l = {
                    header: u,
                    body: a,
                    footer: et.some(c),
                    extraClasses: f,
                    extraBehaviours: [],
                    extraStyles: {}
                },
                d = l_(l, t, s, e),
                m = u_({
                    getRoot: function() {
                        return d
                    },
                    getBody: function() {
                        return NA.getBody(d)
                    },
                    getFooter: function() {
                        return NA.getFooter(d)
                    },
                    getFormWrapper: function() {
                        var t = NA.getBody(d);
                        return ll.getCurrent(t).getOr(t)
                    }
                }, n.redial);
            return {
                dialog: d,
                instanceApi: m
            }
        },
        m_ = tinymce.util.Tools.resolve("tinymce.util.URI"),
        g_ = ["insertContent", "setContent", "execCommand", "close", "block", "unblock"],
        p_ = function(t) {
            return k(t) && -1 !== g_.indexOf(t.mceAction)
        },
        h_ = function(o, t, r, n) {
            var e, i, u, a, c = s_(o.title, n),
                s = (i = {
                    dom: {
                        tag: "div",
                        classes: ["tox-dialog__content-js"]
                    },
                    components: [{
                        dom: {
                            tag: "div",
                            classes: ["tox-dialog__body-iframe"]
                        },
                        components: [sS({
                            dom: {
                                tag: "iframe",
                                attributes: {
                                    src: o.url
                                }
                            },
                            behaviours: Wu([Iy.config({}), Pm.config({})])
                        })]
                    }],
                    behaviours: Wu([hm.config({
                        mode: "acyclic",
                        useTabstopAt: x(aS)
                    })])
                }, NA.parts().body(i)),
                f = o.buttons.bind(function(t) {
                    return 0 === t.length ? et.none() : et.some(r_({
                        buttons: t
                    }, n.shared.providers))
                }),
                l = t_(function() {
                    return y
                }, f_(function() {
                    return b
                }, t)),
                d = P({}, o.height.fold(function() {
                    return {}
                }, function(t) {
                    return {
                        height: t + "px",
                        "max-height": t + "px"
                    }
                }), o.width.fold(function() {
                    return {}
                }, function(t) {
                    return {
                        width: t + "px",
                        "max-width": t + "px"
                    }
                })),
                m = o.width.isNone() && o.height.isNone() ? ["tox-dialog--width-lg"] : [],
                g = new m_(o.url, {
                    base_uri: new m_(H.window.location.href)
                }),
                p = g.protocol + "://" + g.host + (g.port ? ":" + g.port : ""),
                h = ce(et.none()),
                v = [rg("messages", [wr(function() {
                    var t = zv(fe.fromDom(H.window), "message", function(t) {
                        if (g.isSameOrigin(new m_(t.raw().origin))) {
                            var n = t.raw().data;
                            p_(n) ? function(t, n, e) {
                                switch (e.mceAction) {
                                    case "insertContent":
                                        t.insertContent(e.content);
                                        break;
                                    case "setContent":
                                        t.setContent(e.content);
                                        break;
                                    case "execCommand":
                                        var o = !!O(e.ui) && e.ui;
                                        t.execCommand(e.cmd, o, e.value);
                                        break;
                                    case "close":
                                        n.close();
                                        break;
                                    case "block":
                                        n.block(e.message);
                                        break;
                                    case "unblock":
                                        n.unblock()
                                }
                            }(r, y, n) : !p_(e = n) && k(e) && gt(e, "mceAction") && o.onMessage(y, n)
                        }
                        var e
                    });
                    h.set(et.some(t))
                }), Sr(function() {
                    h.get().each(function(t) {
                        return t.unbind()
                    })
                })]), Qu.config({
                    channels: (e = {}, e[JD] = {
                        onReceive: function(t, n) {
                            du(t.element(), "iframe").each(function(t) {
                                t.dom().contentWindow.postMessage(n, p)
                            })
                        }
                    }, e)
                })],
                b = l_({
                    header: c,
                    body: s,
                    footer: f,
                    extraClasses: m,
                    extraBehaviours: v,
                    extraStyles: d
                }, o, l, n),
                y = (u = b, a = function(t) {
                    u.getSystem().isConnected() && t(u)
                }, {
                    block: function(n) {
                        if (!L(n)) throw new Error("The urlDialogInstanceAPI.block function should be passed a blocking message of type string as an argument");
                        a(function(t) {
                            Lo(t, kb, {
                                message: n
                            })
                        })
                    },
                    unblock: function() {
                        a(function(t) {
                            zo(t, Ob)
                        })
                    },
                    close: function() {
                        a(function(t) {
                            zo(t, xb)
                        })
                    },
                    sendMessage: function(n) {
                        a(function(t) {
                            t.getSystem().broadcastOn([JD], n)
                        })
                    }
                });
            return {
                dialog: b,
                instanceApi: y
            }
        },
        v_ = function(t, n, e, o) {
            var r, i, u, a, c, s, f, l, d, m, g, p = oi("dialog-label"),
                h = oi("dialog-content"),
                v = Sg((u = {
                    title: t.internalDialog.title,
                    draggable: !0
                }, a = p, c = e.shared.providers, ab.sketch({
                    dom: vp('<div class="tox-dialog__header"></div>'),
                    components: [c_(u, et.some(a), c), a_(c)],
                    containerBehaviours: Wu([yA.config({
                        mode: "mouse",
                        blockerClass: "blocker",
                        getTarget: function(t) {
                            return mu(t, '[role="dialog"]').getOrDie()
                        },
                        snaps: {
                            getSnapPoints: function() {
                                return []
                            },
                            leftAttr: "data-drag-left",
                            topAttr: "data-drag-top"
                        }
                    })])
                }))),
                b = Sg((s = {
                    body: t.internalDialog.body
                }, f = h, l = e, d = o, QD(s, et.some(f), l, d))),
                y = Sg((m = {
                    buttons: t.internalDialog.buttons
                }, g = e.shared.providers, o_(m, g))),
                x = n_(function() {
                    return S
                }, {
                    onBlock: function() {},
                    onUnblock: function() {},
                    onClose: function() {
                        return n.closeWindow()
                    }
                }),
                w = su({
                    dom: {
                        tag: "div",
                        classes: ["tox-dialog"],
                        attributes: (r = {
                            role: "dialog"
                        }, r["aria-labelledby"] = p, r["aria-describedby"] = "" + h, r)
                    },
                    eventOrder: (i = {}, i[xo()] = [vE.name(), Qu.name()], i[wo()] = ["execute-on-form"], i[_o()] = ["reflecting", "execute-on-form"], i),
                    behaviours: Wu([hm.config({
                        mode: "cyclic",
                        onEscape: function(t) {
                            return zo(t, xb), et.some(!0)
                        },
                        useTabstopAt: function(t) {
                            return !aS(t) && ("button" !== Qo(t) || "disabled" !== qr(t, "disabled"))
                        }
                    }), vE.config({
                        channel: YD,
                        updateState: function(t, n) {
                            return et.some(n)
                        },
                        initialData: t
                    }), rg("execute-on-form", x), nS({})]),
                    components: [v.asSpec(), b.asSpec(), y.asSpec()]
                }),
                S = u_({
                    getRoot: function() {
                        return w
                    },
                    getFooter: function() {
                        return y.get(w)
                    },
                    getBody: function() {
                        return b.get(w)
                    },
                    getFormWrapper: function() {
                        var t = b.get(w);
                        return ll.getCurrent(t).getOr(t)
                    }
                }, n.redial);
            return {
                dialog: w,
                instanceApi: S
            }
        },
        b_ = {
            dom: {
                tag: "div",
                styles: {
                    display: "none"
                },
                classes: ["tox-dialog__header"]
            }
        },
        y_ = {
            dom: {
                tag: "div",
                classes: ["tox-dialog__header"]
            }
        },
        x_ = function(t, n) {
            return NA.parts().close(wg.sketch({
                dom: {
                    tag: "button",
                    classes: ["tox-button", "tox-button--icon", "tox-button--naked"],
                    attributes: {
                        type: "button",
                        "aria-label": n.translate("Close")
                    }
                },
                action: t,
                buttonBehaviours: Wu([Iy.config({})])
            }))
        },
        w_ = function() {
            return NA.parts().title({
                dom: {
                    tag: "div",
                    classes: ["tox-dialog__title"],
                    innerHtml: "",
                    styles: {
                        display: "none"
                    }
                }
            })
        },
        S_ = function(t, n) {
            return NA.parts().body({
                dom: {
                    tag: "div",
                    classes: ["tox-dialog__body"]
                },
                components: [{
                    dom: {
                        tag: "div",
                        classes: ["tox-dialog__body-content"]
                    },
                    components: [{
                        dom: vp("<p>" + n.translate(t) + "</p>")
                    }]
                }]
            })
        },
        C_ = function(t) {
            return NA.parts().footer({
                dom: {
                    tag: "div",
                    classes: ["tox-dialog__footer"]
                },
                components: t
            })
        },
        k_ = function(t, n) {
            return [ab.sketch({
                dom: {
                    tag: "div",
                    classes: ["tox-dialog__footer-start"]
                },
                components: t
            }), ab.sketch({
                dom: {
                    tag: "div",
                    classes: ["tox-dialog__footer-end"]
                },
                components: n
            })]
        },
        O_ = function(e) {
            return NA.sketch({
                lazySink: e.lazySink,
                onEscape: function() {
                    return e.onCancel(), et.some(!0)
                },
                dom: {
                    tag: "div",
                    classes: ["tox-dialog"].concat(e.extraClasses)
                },
                components: [bt(e.headerOverride.getOr(y_), {
                    components: [e.partSpecs.title, e.partSpecs.close]
                }), e.partSpecs.body, e.partSpecs.footer],
                parts: {
                    blocker: {
                        dom: vp('<div class="tox-dialog-wrap"></div>'),
                        components: [{
                            dom: {
                                tag: "div",
                                classes: ["tox-dialog-wrap__backdrop"]
                            }
                        }]
                    }
                },
                modalBehaviours: Wu([rg("basic-dialog-events", [mr(wb, function(t, n) {
                    e.onCancel()
                }), mr(Cb, function(t, n) {
                    e.onSubmit()
                })])])
            })
        },
        E_ = function(s) {
            var u, a, e = (u = s.backstage.shared, {
                    open: function(t, n) {
                        var e = function() {
                                NA.hide(r), n()
                            },
                            o = Sg(uC({
                                name: "close-alert",
                                text: "OK",
                                primary: !0,
                                align: "end",
                                disabled: !1,
                                icon: et.none()
                            }, "cancel", u.providers)),
                            r = su(O_({
                                lazySink: function() {
                                    return u.getSink()
                                },
                                headerOverride: et.some(b_),
                                partSpecs: {
                                    title: w_(),
                                    close: x_(function() {
                                        e()
                                    }, u.providers),
                                    body: S_(t, u.providers),
                                    footer: C_(k_([], [o.asSpec()]))
                                },
                                onCancel: function() {
                                    return e()
                                },
                                onSubmit: tt,
                                extraClasses: ["tox-alert-dialog"]
                            }));
                        NA.show(r);
                        var i = o.get(r);
                        Pm.focus(i)
                    }
                }),
                o = (a = s.backstage.shared, {
                    open: function(t, n) {
                        var e = function(t) {
                                NA.hide(i), n(t)
                            },
                            o = Sg(uC({
                                name: "yes",
                                text: "Yes",
                                primary: !0,
                                align: "end",
                                disabled: !1,
                                icon: et.none()
                            }, "submit", a.providers)),
                            r = uC({
                                name: "no",
                                text: "No",
                                primary: !0,
                                align: "end",
                                disabled: !1,
                                icon: et.none()
                            }, "cancel", a.providers),
                            i = su(O_({
                                lazySink: function() {
                                    return a.getSink()
                                },
                                headerOverride: et.some(b_),
                                partSpecs: {
                                    title: w_(),
                                    close: x_(function() {
                                        e(!1)
                                    }, a.providers),
                                    body: S_(t, a.providers),
                                    footer: C_(k_([], [r, o.asSpec()]))
                                },
                                onCancel: function() {
                                    return e(!1)
                                },
                                onSubmit: function() {
                                    return e(!0)
                                },
                                extraClasses: ["tox-confirm-dialog"]
                            }));
                        NA.show(i);
                        var u = o.get(i);
                        Pm.focus(u)
                    }
                }),
                r = function(t, e) {
                    return AD.openUrl(function(t) {
                        var n = h_(t, {
                            closeWindow: function() {
                                NA.hide(n.dialog), e(n.instanceApi)
                            }
                        }, s.editor, s.backstage);
                        return NA.show(n.dialog), n.instanceApi
                    }, t)
                },
                i = function(t, i) {
                    return AD.open(function(t, n, e) {
                        var o = n,
                            r = d_({
                                dataValidator: e,
                                initialData: o,
                                internalDialog: t
                            }, {
                                redial: AD.redial,
                                closeWindow: function() {
                                    NA.hide(r.dialog), i(r.instanceApi)
                                }
                            }, s.backstage);
                        return NA.show(r.dialog), r.instanceApi.setData(o), r.instanceApi
                    }, t)
                },
                c = function(t, u, a, c) {
                    return AD.open(function(t, n, e) {
                        var o = Bn(Tn("data", e, n)),
                            r = v_({
                                dataValidator: e,
                                initialData: o,
                                internalDialog: t
                            }, {
                                redial: AD.redial,
                                closeWindow: function() {
                                    yg.hide(i), a(r.instanceApi)
                                }
                            }, s.backstage, c),
                            i = su(yg.sketch({
                                lazySink: s.backstage.shared.getSink,
                                dom: {
                                    tag: "div",
                                    classes: []
                                },
                                fireDismissalEventInstead: {},
                                inlineBehaviours: Wu([rg("window-manager-inline-events", [mr(Fo(), function(t, n) {
                                    zo(r.dialog, wb)
                                })])])
                            }));
                        return yg.showAt(i, u, fu(r.dialog)), r.instanceApi.setData(o), hm.focusIn(r.dialog), r.instanceApi
                    }, t)
                };
            return {
                open: function(t, n, e) {
                    return n !== undefined && "toolbar" === n.inline ? c(t, s.backstage.shared.anchors.toolbar(), e, n.ariaAttrs) : n !== undefined && "cursor" === n.inline ? c(t, s.backstage.shared.anchors.cursor(), e, n.ariaAttrs) : i(t, e)
                },
                openUrl: function(t, n) {
                    return r(t, n)
                },
                alert: function(t, n) {
                    e.open(t, function() {
                        n()
                    })
                },
                close: function(t) {
                    t.close()
                },
                confirm: function(t, n) {
                    o.open(t, function(t) {
                        n(t)
                    })
                }
            }
        };
    ! function V_() {
        e.add("silver", function(t) {
            var n = MA(t),
                e = n.uiMothership,
                o = n.backstage,
                r = n.renderUI,
                i = n.getUi;
            Rv(t, o.shared);
            var u = E_({
                editor: t,
                backstage: o
            });
            return {
                renderUI: r,
                getWindowManagerImpl: nt(u),
                getNotificationManagerImpl: function() {
                    return Bg(t, {
                        backstage: o
                    }, e)
                },
                ui: i()
            }
        })
    }()
}(window);