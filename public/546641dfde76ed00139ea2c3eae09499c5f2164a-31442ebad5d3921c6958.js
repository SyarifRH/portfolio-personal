/*! For license information please see 546641dfde76ed00139ea2c3eae09499c5f2164a-31442ebad5d3921c6958.js.LICENSE.txt */
(self.webpackChunkv4 = self.webpackChunkv4 || []).push([
  [98],
  {
    2993: function(e) {
      const t = 'undefined' !== typeof Element;
      const n = 'function' === typeof Map;
      const r = 'function' === typeof Set;
      const i = 'function' === typeof ArrayBuffer && !!ArrayBuffer.isView;
      function a(e, o) {
        if (e === o) {return !0;}
        if (e && o && 'object' === typeof e && 'object' === typeof o) {
          if (e.constructor !== o.constructor) {return !1;}
          let l; let s; let c; let u;
          if (Array.isArray(e)) {
            if ((l = e.length) != o.length) {return !1;}
            for (s = l; 0 != s--; ) {if (!a(e[s], o[s])) {return !1;}}
            return !0;
          }
          if (n && e instanceof Map && o instanceof Map) {
            if (e.size !== o.size) {return !1;}
            for (u = e.entries(); !(s = u.next()).done; ) {if (!o.has(s.value[0])) {return !1;}}
            for (u = e.entries(); !(s = u.next()).done; ) {if (!a(s.value[1], o.get(s.value[0]))) {return !1;}}
            return !0;
          }
          if (r && e instanceof Set && o instanceof Set) {
            if (e.size !== o.size) {return !1;}
            for (u = e.entries(); !(s = u.next()).done; ) {if (!o.has(s.value[0])) {return !1;}}
            return !0;
          }
          if (i && ArrayBuffer.isView(e) && ArrayBuffer.isView(o)) {
            if ((l = e.length) != o.length) {return !1;}
            for (s = l; 0 != s--; ) {if (e[s] !== o[s]) {return !1;}}
            return !0;
          }
          if (e.constructor === RegExp) {return e.source === o.source && e.flags === o.flags;}
          if (
            e.valueOf !== Object.prototype.valueOf &&
            'function' === typeof e.valueOf &&
            'function' === typeof o.valueOf
          ) {return e.valueOf() === o.valueOf();}
          if (
            e.toString !== Object.prototype.toString &&
            'function' === typeof e.toString &&
            'function' === typeof o.toString
          ) {return e.toString() === o.toString();}
          if ((l = (c = Object.keys(e)).length) !== Object.keys(o).length) {return !1;}
          for (s = l; 0 != s--; ) {if (!Object.prototype.hasOwnProperty.call(o, c[s])) {return !1;}}
          if (t && e instanceof Element) {return !1;}
          for (s = l; 0 != s--; ) {
            if (
              (('_owner' !== c[s] && '__v' !== c[s] && '__o' !== c[s]) || !e.$$typeof) &&
              !a(e[c[s]], o[c[s]])
            ) {return !1;}
          }
          return !0;
        }
        return e != e && o != o;
      }
      e.exports = function(e, t) {
        try {
          return a(e, t);
        } catch (n) {
          if ((n.message || '').match(/stack|recursion/i)) {return console.warn('react-fast-compare cannot handle circular refs'), !1;}
          throw n;
        }
      };
    },
    5414: function(e, t, n) {
      'use strict';
      n.d(t, {
        q: function() {
          return me;
        },
      });
      let r;
      let i;
      let a;
      let o;
      const l = n(5697);
      const s = n.n(l);
      const c = n(4839);
      const u = n.n(c);
      const d = n(2993);
      const f = n.n(d);
      const m = n(7294);
      const p = n(6494);
      const h = n.n(p);
      const g = 'bodyAttributes';
      const v = 'htmlAttributes';
      const x = 'titleAttributes';
      const b = {
        BASE: 'base',
        BODY: 'body',
        HEAD: 'head',
        HTML: 'html',
        LINK: 'link',
        META: 'meta',
        NOSCRIPT: 'noscript',
        SCRIPT: 'script',
        STYLE: 'style',
        TITLE: 'title',
      };
      const y =
          (Object.keys(b).map(function(e) {
            return b[e];
          }),
          'charset');
      const w = 'cssText';
      const E = 'href';
      const k = 'http-equiv';
      const C = 'innerHTML';
      const T = 'itemprop';
      const S = 'name';
      const L = 'property';
      const O = 'rel';
      const N = 'src';
      const j = 'target';
      const z = {
        accesskey: 'accessKey',
        charset: 'charSet',
        class: 'className',
        contenteditable: 'contentEditable',
        contextmenu: 'contextMenu',
        'http-equiv': 'httpEquiv',
        itemprop: 'itemProp',
        tabindex: 'tabIndex',
      };
      const A = 'defaultTitle';
      const M = 'defer';
      const I = 'encodeSpecialCharacters';
      const P = 'onChangeClientState';
      const _ = 'titleTemplate';
      const R = Object.keys(z).reduce(function(e, t) {
        return (e[z[t]] = t), e;
      }, {});
      const D = [b.NOSCRIPT, b.SCRIPT, b.STYLE];
      const B = 'data-react-helmet';
      const F =
          'function' === typeof Symbol && 'symbol' === typeof Symbol.iterator
            ? function(e) {
              return typeof e;
            }
            : function(e) {
              return e &&
                  'function' === typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                ? 'symbol'
                : typeof e;
            };
      const H = (function() {
        function e(e, t) {
          for (let n = 0; n < t.length; n++) {
            const r = t[n];
            (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
          }
        }
        return function(t, n, r) {
          return n && e(t.prototype, n), r && e(t, r), t;
        };
      })();
      const q =
          Object.assign ||
          function(e) {
            for (let t = 1; t < arguments.length; t++) {
              const n = arguments[t];
              for (const r in n) {Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);}
            }
            return e;
          };
      const Z = function(e, t) {
        const n = {};
        for (const r in e) {t.indexOf(r) >= 0 || (Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]));}
        return n;
      };
      const W = function(e) {
        return !1 === (!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1])
          ? String(e)
          : String(e)
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#x27;');
      };
      const V = function(e) {
        const t = J(e, b.TITLE);
        const n = J(e, _);
        if (n && t) {
          return n.replace(/%s/g, function() {
            return Array.isArray(t) ? t.join('') : t;
          });
        }
        const r = J(e, A);
        return t || r || void 0;
      };
      const Y = function(e) {
        return J(e, P) || function() {};
      };
      const G = function(e, t) {
        return t
          .filter(function(t) {
            return void 0 !== t[e];
          })
          .map(function(t) {
            return t[e];
          })
          .reduce(function(e, t) {
            return q({}, e, t);
          }, {});
      };
      const U = function(e, t) {
        return t
          .filter(function(e) {
            return void 0 !== e[b.BASE];
          })
          .map(function(e) {
            return e[b.BASE];
          })
          .reverse()
          .reduce(function(t, n) {
            if (!t.length) {
              for (let r = Object.keys(n), i = 0; i < r.length; i++) {
                const a = r[i].toLowerCase();
                if (-1 !== e.indexOf(a) && n[a]) {return t.concat(n);}
              }
            }
            return t;
          }, []);
      };
      const $ = function(e, t, n) {
        const r = {};
        return n
          .filter(function(t) {
            return (
              !!Array.isArray(t[e]) ||
                (void 0 !== t[e] &&
                  te(
                    `Helmet: ${ 
                      e 
                    } should be of type "Array". Instead found type "${ 
                      F(t[e]) 
                    }"`,
                  ),
                !1)
            );
          })
          .map(function(t) {
            return t[e];
          })
          .reverse()
          .reduce(function(e, n) {
            const i = {};
            n.filter(function(e) {
              for (var n = void 0, a = Object.keys(e), o = 0; o < a.length; o++) {
                const l = a[o];
                const s = l.toLowerCase();
                -1 === t.indexOf(s) ||
                    (n === O && 'canonical' === e[n].toLowerCase()) ||
                    (s === O && 'stylesheet' === e[s].toLowerCase()) ||
                    (n = s),
                -1 === t.indexOf(l) || (l !== C && l !== w && l !== T) || (n = l);
              }
              if (!n || !e[n]) {return !1;}
              const c = e[n].toLowerCase();
              return r[n] || (r[n] = {}), i[n] || (i[n] = {}), !r[n][c] && ((i[n][c] = !0), !0);
            })
              .reverse()
              .forEach(function(t) {
                return e.push(t);
              });
            for (let a = Object.keys(i), o = 0; o < a.length; o++) {
              const l = a[o];
              const s = h()({}, r[l], i[l]);
              r[l] = s;
            }
            return e;
          }, [])
          .reverse();
      };
      var J = function(e, t) {
        for (let n = e.length - 1; n >= 0; n--) {
          const r = e[n];
          if (r.hasOwnProperty(t)) {return r[t];}
        }
        return null;
      };
      var Q =
          ((r = Date.now()),
          function(e) {
            const t = Date.now();
            t - r > 16
              ? ((r = t), e(t))
              : setTimeout(function() {
                Q(e);
              }, 0);
          });
      const K = function(e) {
        return clearTimeout(e);
      };
      const X =
          'undefined' !== typeof window
            ? (window.requestAnimationFrame && window.requestAnimationFrame.bind(window)) ||
              window.webkitRequestAnimationFrame ||
              window.mozRequestAnimationFrame ||
              Q
            : n.g.requestAnimationFrame || Q;
      const ee =
          'undefined' !== typeof window
            ? window.cancelAnimationFrame ||
              window.webkitCancelAnimationFrame ||
              window.mozCancelAnimationFrame ||
              K
            : n.g.cancelAnimationFrame || K;
      var te = function(e) {
        return console && 'function' === typeof console.warn && console.warn(e);
      };
      let ne = null;
      const re = function(e, t) {
        const n = e.baseTag;
        const r = e.bodyAttributes;
        const i = e.htmlAttributes;
        const a = e.linkTags;
        const o = e.metaTags;
        const l = e.noscriptTags;
        const s = e.onChangeClientState;
        const c = e.scriptTags;
        const u = e.styleTags;
        const d = e.title;
        const f = e.titleAttributes;
        oe(b.BODY, r), oe(b.HTML, i), ae(d, f);
        const m = {
          baseTag: le(b.BASE, n),
          linkTags: le(b.LINK, a),
          metaTags: le(b.META, o),
          noscriptTags: le(b.NOSCRIPT, l),
          scriptTags: le(b.SCRIPT, c),
          styleTags: le(b.STYLE, u),
        };
        const p = {};
        const h = {};
        Object.keys(m).forEach(function(e) {
          const t = m[e];
          const n = t.newTags;
          const r = t.oldTags;
          n.length && (p[e] = n), r.length && (h[e] = m[e].oldTags);
        }),
        t && t(),
        s(e, p, h);
      };
      const ie = function(e) {
        return Array.isArray(e) ? e.join('') : e;
      };
      var ae = function(e, t) {
        void 0 !== e && document.title !== e && (document.title = ie(e)), oe(b.TITLE, t);
      };
      var oe = function(e, t) {
        const n = document.getElementsByTagName(e)[0];
        if (n) {
          for (
            var r = n.getAttribute(B),
              i = r ? r.split(',') : [],
              a = [].concat(i),
              o = Object.keys(t),
              l = 0;
            l < o.length;
            l++
          ) {
            const s = o[l];
            const c = t[s] || '';
            n.getAttribute(s) !== c && n.setAttribute(s, c), -1 === i.indexOf(s) && i.push(s);
            const u = a.indexOf(s);
            -1 !== u && a.splice(u, 1);
          }
          for (let d = a.length - 1; d >= 0; d--) {n.removeAttribute(a[d]);}
          i.length === a.length
            ? n.removeAttribute(B)
            : n.getAttribute(B) !== o.join(',') && n.setAttribute(B, o.join(','));
        }
      };
      var le = function(e, t) {
        const n = document.head || document.querySelector(b.HEAD);
        const r = n.querySelectorAll(`${e  }[${  B  }]`);
        const i = Array.prototype.slice.call(r);
        const a = [];
        let o = void 0;
        return (
          t &&
              t.length &&
              t.forEach(function(t) {
                const n = document.createElement(e);
                for (const r in t) {
                  if (t.hasOwnProperty(r)) {
                    if (r === C) {n.innerHTML = t.innerHTML;} else if (r === w) {
                      n.styleSheet
                        ? (n.styleSheet.cssText = t.cssText)
                        : n.appendChild(document.createTextNode(t.cssText));
                    } else {
                      const l = void 0 === t[r] ? '' : t[r];
                      n.setAttribute(r, l);
                    }
                  }
                }
                n.setAttribute(B, 'true'),
                i.some(function(e, t) {
                  return (o = t), n.isEqualNode(e);
                })
                  ? i.splice(o, 1)
                  : a.push(n);
              }),
          i.forEach(function(e) {
            return e.parentNode.removeChild(e);
          }),
          a.forEach(function(e) {
            return n.appendChild(e);
          }),
          { oldTags: i, newTags: a }
        );
      };
      const se = function(e) {
        return Object.keys(e).reduce(function(t, n) {
          const r = void 0 !== e[n] ? `${n  }="${  e[n]  }"` : `${  n}`;
          return t ? `${t  } ${  r}` : r;
        }, '');
      };
      const ce = function(e) {
        const t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return Object.keys(e).reduce(function(t, n) {
          return (t[z[n] || n] = e[n]), t;
        }, t);
      };
      const ue = function(e, t, n) {
        switch (e) {
          case b.TITLE:
            return {
              toComponent: function() {
                return (
                  (e = t.title),
                  (n = t.titleAttributes),
                  ((r = { key: e })[B] = !0),
                  (i = ce(n, r)),
                  [m.createElement(b.TITLE, i, e)]
                );
                let e; let n; let r; let i;
              },
              toString: function() {
                return (function(e, t, n, r) {
                  const i = se(n);
                  const a = ie(t);
                  return i
                    ? `<${  e  } ${  B  }="true" ${  i  }>${  W(a, r)  }</${  e  }>`
                    : `<${  e  } ${  B  }="true">${  W(a, r)  }</${  e  }>`;
                })(e, t.title, t.titleAttributes, n);
              },
            };
          case g:
          case v:
            return {
              toComponent: function() {
                return ce(t);
              },
              toString: function() {
                return se(t);
              },
            };
          default:
            return {
              toComponent: function() {
                return (function(e, t) {
                  return t.map(function(t, n) {
                    let r;
                    const i = (((r = { key: n })[B] = !0), r);
                    return (
                      Object.keys(t).forEach(function(e) {
                        const n = z[e] || e;
                        if (n === C || n === w) {
                          const r = t.innerHTML || t.cssText;
                          i.dangerouslySetInnerHTML = { __html: r };
                        } else {i[n] = t[e];}
                      }),
                      m.createElement(e, i)
                    );
                  });
                })(e, t);
              },
              toString: function() {
                return (function(e, t, n) {
                  return t.reduce(function(t, r) {
                    const i = Object.keys(r)
                      .filter(function(e) {
                        return !(e === C || e === w);
                      })
                      .reduce(function(e, t) {
                        const i = void 0 === r[t] ? t : `${t  }="${  W(r[t], n)  }"`;
                        return e ? `${e  } ${  i}` : i;
                      }, '');
                    const a = r.innerHTML || r.cssText || '';
                    const o = -1 === D.indexOf(e);
                    return (
                      `${t 
                      }<${ 
                        e 
                      } ${ 
                        B 
                      }="true" ${ 
                        i 
                      }${o ? '/>' : `>${  a  }</${  e  }>`}`
                    );
                  }, '');
                })(e, t, n);
              },
            };
        }
      };
      const de = function(e) {
        const t = e.baseTag;
        const n = e.bodyAttributes;
        const r = e.encode;
        const i = e.htmlAttributes;
        const a = e.linkTags;
        const o = e.metaTags;
        const l = e.noscriptTags;
        const s = e.scriptTags;
        const c = e.styleTags;
        const u = e.title;
        const d = void 0 === u ? '' : u;
        const f = e.titleAttributes;
        return {
          base: ue(b.BASE, t, r),
          bodyAttributes: ue(g, n, r),
          htmlAttributes: ue(v, i, r),
          link: ue(b.LINK, a, r),
          meta: ue(b.META, o, r),
          noscript: ue(b.NOSCRIPT, l, r),
          script: ue(b.SCRIPT, s, r),
          style: ue(b.STYLE, c, r),
          title: ue(b.TITLE, { title: d, titleAttributes: f }, r),
        };
      };
      const fe = u()(
        function(e) {
          return {
            baseTag: U([E, j], e),
            bodyAttributes: G(g, e),
            defer: J(e, M),
            encode: J(e, I),
            htmlAttributes: G(v, e),
            linkTags: $(b.LINK, [O, E], e),
            metaTags: $(b.META, [S, y, k, L, T], e),
            noscriptTags: $(b.NOSCRIPT, [C], e),
            onChangeClientState: Y(e),
            scriptTags: $(b.SCRIPT, [N, C], e),
            styleTags: $(b.STYLE, [w], e),
            title: V(e),
            titleAttributes: G(x, e),
          };
        },
        function(e) {
          ne && ee(ne),
          e.defer
            ? (ne = X(function() {
              re(e, function() {
                ne = null;
              });
            }))
            : (re(e), (ne = null));
        },
        de,
      )(function() {
        return null;
      });
      var me =
          ((i = fe),
          (o = a =
            (function(e) {
              function t() {
                return (
                  (function(e, t) {
                    if (!(e instanceof t)) {throw new TypeError('Cannot call a class as a function');}
                  })(this, t),
                  (function(e, t) {
                    if (!e) {
                      throw new ReferenceError(
                        'this hasn\'t been initialised - super() hasn\'t been called',
                      );
                    }
                    return !t || ('object' !== typeof t && 'function' !== typeof t) ? e : t;
                  })(this, e.apply(this, arguments))
                );
              }
              return (
                (function(e, t) {
                  if ('function' !== typeof t && null !== t) {
                    throw new TypeError(
                      `Super expression must either be null or a function, not ${  typeof t}`,
                    );
                  }
                  (e.prototype = Object.create(t && t.prototype, {
                    constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 },
                  })),
                  t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t));
                })(t, e),
                (t.prototype.shouldComponentUpdate = function(e) {
                  return !f()(this.props, e);
                }),
                (t.prototype.mapNestedChildrenToProps = function(e, t) {
                  if (!t) {return null;}
                  switch (e.type) {
                    case b.SCRIPT:
                    case b.NOSCRIPT:
                      return { innerHTML: t };
                    case b.STYLE:
                      return { cssText: t };
                  }
                  throw new Error(
                    `<${ 
                      e.type 
                    } /> elements are self-closing and can not contain children. Refer to our API for more information.`,
                  );
                }),
                (t.prototype.flattenArrayTypeChildren = function(e) {
                  let t;
                  const n = e.child;
                  const r = e.arrayTypeChildren;
                  const i = e.newChildProps;
                  const a = e.nestedChildren;
                  return q(
                    {},
                    r,
                    (((t = {})[n.type] = [].concat(r[n.type] || [], [
                      q({}, i, this.mapNestedChildrenToProps(n, a)),
                    ])),
                    t),
                  );
                }),
                (t.prototype.mapObjectTypeChildren = function(e) {
                  let t;
                  let n;
                  const r = e.child;
                  const i = e.newProps;
                  const a = e.newChildProps;
                  const o = e.nestedChildren;
                  switch (r.type) {
                    case b.TITLE:
                      return q({}, i, (((t = {})[r.type] = o), (t.titleAttributes = q({}, a)), t));
                    case b.BODY:
                      return q({}, i, { bodyAttributes: q({}, a) });
                    case b.HTML:
                      return q({}, i, { htmlAttributes: q({}, a) });
                  }
                  return q({}, i, (((n = {})[r.type] = q({}, a)), n));
                }),
                (t.prototype.mapArrayTypeChildrenToProps = function(e, t) {
                  let n = q({}, t);
                  return (
                    Object.keys(e).forEach(function(t) {
                      let r;
                      n = q({}, n, (((r = {})[t] = e[t]), r));
                    }),
                    n
                  );
                }),
                (t.prototype.warnOnInvalidChildren = function(e, t) {
                  return !0;
                }),
                (t.prototype.mapChildrenToProps = function(e, t) {
                  const n = this;
                  let r = {};
                  return (
                    m.Children.forEach(e, function(e) {
                      if (e && e.props) {
                        const i = e.props;
                        const a = i.children;
                        const o = (function(e) {
                          const t =
                              arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                          return Object.keys(e).reduce(function(t, n) {
                            return (t[R[n] || n] = e[n]), t;
                          }, t);
                        })(Z(i, ['children']));
                        switch ((n.warnOnInvalidChildren(e, a), e.type)) {
                          case b.LINK:
                          case b.META:
                          case b.NOSCRIPT:
                          case b.SCRIPT:
                          case b.STYLE:
                            r = n.flattenArrayTypeChildren({
                              child: e,
                              arrayTypeChildren: r,
                              newChildProps: o,
                              nestedChildren: a,
                            });
                            break;
                          default:
                            t = n.mapObjectTypeChildren({
                              child: e,
                              newProps: t,
                              newChildProps: o,
                              nestedChildren: a,
                            });
                        }
                      }
                    }),
                    (t = this.mapArrayTypeChildrenToProps(r, t))
                  );
                }),
                (t.prototype.render = function() {
                  const e = this.props;
                  const t = e.children;
                  const n = Z(e, ['children']);
                  let r = q({}, n);
                  return t && (r = this.mapChildrenToProps(t, r)), m.createElement(i, r);
                }),
                H(t, null, [
                  {
                    key: 'canUseDOM',
                    set: function(e) {
                      i.canUseDOM = e;
                    },
                  },
                ]),
                t
              );
            })(m.Component)),
          (a.propTypes = {
            base: s().object,
            bodyAttributes: s().object,
            children: s().oneOfType([s().arrayOf(s().node), s().node]),
            defaultTitle: s().string,
            defer: s().bool,
            encodeSpecialCharacters: s().bool,
            htmlAttributes: s().object,
            link: s().arrayOf(s().object),
            meta: s().arrayOf(s().object),
            noscript: s().arrayOf(s().object),
            onChangeClientState: s().func,
            script: s().arrayOf(s().object),
            style: s().arrayOf(s().object),
            title: s().string,
            titleAttributes: s().object,
            titleTemplate: s().string,
          }),
          (a.defaultProps = { defer: !0, encodeSpecialCharacters: !0 }),
          (a.peek = i.peek),
          (a.rewind = function() {
            let e = i.rewind();
            return (
              e ||
                (e = de({
                  baseTag: [],
                  bodyAttributes: {},
                  encodeSpecialCharacters: !0,
                  htmlAttributes: {},
                  linkTags: [],
                  metaTags: [],
                  noscriptTags: [],
                  scriptTags: [],
                  styleTags: [],
                  title: '',
                  titleAttributes: {},
                })),
              e
            );
          }),
          o);
      me.renderStatic = me.rewind;
    },
    4839: function(e, t, n) {
      'use strict';
      let r;
      const i = n(7294);
      const a = (r = i) && 'object' === typeof r && 'default' in r ? r.default : r;
      function o(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
            : (e[t] = n),
          e
        );
      }
      const l = !('undefined' === typeof window || !window.document || !window.document.createElement);
      e.exports = function(e, t, n) {
        if ('function' !== typeof e) {throw new Error('Expected reducePropsToState to be a function.');}
        if ('function' !== typeof t) {throw new Error('Expected handleStateChangeOnClient to be a function.');}
        if (void 0 !== n && 'function' !== typeof n) {throw new Error('Expected mapStateOnServer to either be undefined or a function.');}
        return function(r) {
          if ('function' !== typeof r) {throw new Error('Expected WrappedComponent to be a React component.');}
          let s;
          let c = [];
          function u() {
            (s = e(
              c.map(function(e) {
                return e.props;
              }),
            )),
            d.canUseDOM ? t(s) : n && (s = n(s));
          }
          var d = (function(e) {
            let t; let n;
            function i() {
              return e.apply(this, arguments) || this;
            }
            (n = e),
            ((t = i).prototype = Object.create(n.prototype)),
            (t.prototype.constructor = t),
            (t.__proto__ = n),
            (i.peek = function() {
              return s;
            }),
            (i.rewind = function() {
              if (i.canUseDOM) {
                throw new Error(
                  'You may only call rewind() on the server. Call peek() to read the current state.',
                );
              }
              const e = s;
              return (s = void 0), (c = []), e;
            });
            const o = i.prototype;
            return (
              (o.UNSAFE_componentWillMount = function() {
                c.push(this), u();
              }),
              (o.componentDidUpdate = function() {
                u();
              }),
              (o.componentWillUnmount = function() {
                const e = c.indexOf(this);
                c.splice(e, 1), u();
              }),
              (o.render = function() {
                return a.createElement(r, this.props);
              }),
              i
            );
          })(i.PureComponent);
          return (
            o(
              d,
              'displayName',
              `SideEffect(${ 
                (function(e) {
                  return e.displayName || e.name || 'Component';
                })(r) 
              })`,
            ),
            o(d, 'canUseDOM', l),
            d
          );
        };
      };
    },
    7428: function(e, t, n) {
      'use strict';
      n.d(t, {
        Z: function() {
          return E;
        },
      });
      const r = n(7462);
      const i = n(3366);
      const a = n(1721);
      function o(e, t) {
        return e
          .replace(new RegExp(`(^|\\s)${  t  }(?:\\s|$)`, 'g'), '$1')
          .replace(/\s+/g, ' ')
          .replace(/^\s*|\s*$/g, '');
      }
      const l = n(7294);
      const s = n(3935);
      const c = !1;
      const u = n(1278);
      const d = function(e) {
        return e.scrollTop;
      };
      const f = 'unmounted';
      const m = 'exited';
      const p = 'entering';
      const h = 'entered';
      const g = 'exiting';
      const v = (function(e) {
        function t(t, n) {
          let r;
          r = e.call(this, t, n) || this;
          let i;
          const a = n && !n.isMounting ? t.enter : t.appear;
          return (
            (r.appearStatus = null),
            t.in
              ? a
                ? ((i = m), (r.appearStatus = p))
                : (i = h)
              : (i = t.unmountOnExit || t.mountOnEnter ? f : m),
            (r.state = { status: i }),
            (r.nextCallback = null),
            r
          );
        }
        (0, a.Z)(t, e),
        (t.getDerivedStateFromProps = function(e, t) {
          return e.in && t.status === f ? { status: m } : null;
        });
        const n = t.prototype;
        return (
          (n.componentDidMount = function() {
            this.updateStatus(!0, this.appearStatus);
          }),
          (n.componentDidUpdate = function(e) {
            let t = null;
            if (e !== this.props) {
              const n = this.state.status;
              this.props.in ? n !== p && n !== h && (t = p) : (n !== p && n !== h) || (t = g);
            }
            this.updateStatus(!1, t);
          }),
          (n.componentWillUnmount = function() {
            this.cancelNextCallback();
          }),
          (n.getTimeouts = function() {
            let e;
            let t;
            let n;
            const r = this.props.timeout;
            return (
              (e = t = n = r),
              null != r &&
                  'number' !== typeof r &&
                  ((e = r.exit), (t = r.enter), (n = void 0 !== r.appear ? r.appear : t)),
              { exit: e, enter: t, appear: n }
            );
          }),
          (n.updateStatus = function(e, t) {
            if ((void 0 === e && (e = !1), null !== t)) {
              if ((this.cancelNextCallback(), t === p)) {
                if (this.props.unmountOnExit || this.props.mountOnEnter) {
                  const n = this.props.nodeRef ? this.props.nodeRef.current : s.findDOMNode(this);
                  n && d(n);
                }
                this.performEnter(e);
              } else {this.performExit();}
            } else {this.props.unmountOnExit && this.state.status === m && this.setState({ status: f });}
          }),
          (n.performEnter = function(e) {
            const t = this;
            const n = this.props.enter;
            const r = this.context ? this.context.isMounting : e;
            const i = this.props.nodeRef ? [r] : [s.findDOMNode(this), r];
            const a = i[0];
            const o = i[1];
            const l = this.getTimeouts();
            const u = r ? l.appear : l.enter;
            (!e && !n) || c
              ? this.safeSetState({ status: h }, function() {
                t.props.onEntered(a);
              })
              : (this.props.onEnter(a, o),
              this.safeSetState({ status: p }, function() {
                t.props.onEntering(a, o),
                t.onTransitionEnd(u, function() {
                  t.safeSetState({ status: h }, function() {
                    t.props.onEntered(a, o);
                  });
                });
              }));
          }),
          (n.performExit = function() {
            const e = this;
            const t = this.props.exit;
            const n = this.getTimeouts();
            const r = this.props.nodeRef ? void 0 : s.findDOMNode(this);
            t && !c
              ? (this.props.onExit(r),
              this.safeSetState({ status: g }, function() {
                e.props.onExiting(r),
                e.onTransitionEnd(n.exit, function() {
                  e.safeSetState({ status: m }, function() {
                    e.props.onExited(r);
                  });
                });
              }))
              : this.safeSetState({ status: m }, function() {
                e.props.onExited(r);
              });
          }),
          (n.cancelNextCallback = function() {
            null !== this.nextCallback &&
                (this.nextCallback.cancel(), (this.nextCallback = null));
          }),
          (n.safeSetState = function(e, t) {
            (t = this.setNextCallback(t)), this.setState(e, t);
          }),
          (n.setNextCallback = function(e) {
            const t = this;
            let n = !0;
            return (
              (this.nextCallback = function(r) {
                n && ((n = !1), (t.nextCallback = null), e(r));
              }),
              (this.nextCallback.cancel = function() {
                n = !1;
              }),
              this.nextCallback
            );
          }),
          (n.onTransitionEnd = function(e, t) {
            this.setNextCallback(t);
            const n = this.props.nodeRef ? this.props.nodeRef.current : s.findDOMNode(this);
            const r = null == e && !this.props.addEndListener;
            if (n && !r) {
              if (this.props.addEndListener) {
                const i = this.props.nodeRef ? [this.nextCallback] : [n, this.nextCallback];
                const a = i[0];
                const o = i[1];
                this.props.addEndListener(a, o);
              }
              null != e && setTimeout(this.nextCallback, e);
            } else {setTimeout(this.nextCallback, 0);}
          }),
          (n.render = function() {
            const e = this.state.status;
            if (e === f) {return null;}
            const t = this.props;
            const n = t.children;
            const r =
                  (t.in,
                  t.mountOnEnter,
                  t.unmountOnExit,
                  t.appear,
                  t.enter,
                  t.exit,
                  t.timeout,
                  t.addEndListener,
                  t.onEnter,
                  t.onEntering,
                  t.onEntered,
                  t.onExit,
                  t.onExiting,
                  t.onExited,
                  t.nodeRef,
                  (0, i.Z)(t, [
                    'children',
                    'in',
                    'mountOnEnter',
                    'unmountOnExit',
                    'appear',
                    'enter',
                    'exit',
                    'timeout',
                    'addEndListener',
                    'onEnter',
                    'onEntering',
                    'onEntered',
                    'onExit',
                    'onExiting',
                    'onExited',
                    'nodeRef',
                  ]));
            return l.createElement(
              u.Z.Provider,
              { value: null },
              'function' === typeof n ? n(e, r) : l.cloneElement(l.Children.only(n), r),
            );
          }),
          t
        );
      })(l.Component);
      function x() {}
      (v.contextType = u.Z),
      (v.defaultProps = {
        in: !1,
        mountOnEnter: !1,
        unmountOnExit: !1,
        appear: !1,
        enter: !0,
        exit: !0,
        onEnter: x,
        onEntering: x,
        onEntered: x,
        onExit: x,
        onExiting: x,
        onExited: x,
      }),
      (v.UNMOUNTED = f),
      (v.EXITED = m),
      (v.ENTERING = p),
      (v.ENTERED = h),
      (v.EXITING = g);
      const b = v;
      const y = function(e, t) {
        return (
          e &&
            t &&
            t.split(' ').forEach(function(t) {
              return (
                (r = t),
                void ((n = e).classList
                  ? n.classList.remove(r)
                  : 'string' === typeof n.className
                    ? (n.className = o(n.className, r))
                    : n.setAttribute('class', o((n.className && n.className.baseVal) || '', r)))
              );
              let n; let r;
            })
        );
      };
      const w = (function(e) {
        function t() {
          for (var t, n = arguments.length, r = new Array(n), i = 0; i < n; i++) {r[i] = arguments[i];}
          return (
            ((t = e.call.apply(e, [this].concat(r)) || this).appliedClasses = {
              appear: {},
              enter: {},
              exit: {},
            }),
            (t.onEnter = function(e, n) {
              const r = t.resolveArguments(e, n);
              const i = r[0];
              const a = r[1];
              t.removeClasses(i, 'exit'),
              t.addClass(i, a ? 'appear' : 'enter', 'base'),
              t.props.onEnter && t.props.onEnter(e, n);
            }),
            (t.onEntering = function(e, n) {
              const r = t.resolveArguments(e, n);
              const i = r[0];
              const a = r[1] ? 'appear' : 'enter';
              t.addClass(i, a, 'active'), t.props.onEntering && t.props.onEntering(e, n);
            }),
            (t.onEntered = function(e, n) {
              const r = t.resolveArguments(e, n);
              const i = r[0];
              const a = r[1] ? 'appear' : 'enter';
              t.removeClasses(i, a),
              t.addClass(i, a, 'done'),
              t.props.onEntered && t.props.onEntered(e, n);
            }),
            (t.onExit = function(e) {
              const n = t.resolveArguments(e)[0];
              t.removeClasses(n, 'appear'),
              t.removeClasses(n, 'enter'),
              t.addClass(n, 'exit', 'base'),
              t.props.onExit && t.props.onExit(e);
            }),
            (t.onExiting = function(e) {
              const n = t.resolveArguments(e)[0];
              t.addClass(n, 'exit', 'active'), t.props.onExiting && t.props.onExiting(e);
            }),
            (t.onExited = function(e) {
              const n = t.resolveArguments(e)[0];
              t.removeClasses(n, 'exit'),
              t.addClass(n, 'exit', 'done'),
              t.props.onExited && t.props.onExited(e);
            }),
            (t.resolveArguments = function(e, n) {
              return t.props.nodeRef ? [t.props.nodeRef.current, e] : [e, n];
            }),
            (t.getClassNames = function(e) {
              const n = t.props.classNames;
              const r = 'string' === typeof n;
              const i = r ? `${  r && n ? `${n  }-` : ''  }${e}` : n[e];
              return {
                baseClassName: i,
                activeClassName: r ? `${i  }-active` : n[`${e  }Active`],
                doneClassName: r ? `${i  }-done` : n[`${e  }Done`],
              };
            }),
            t
          );
        }
        (0, a.Z)(t, e);
        const n = t.prototype;
        return (
          (n.addClass = function(e, t, n) {
            let r = this.getClassNames(t)[`${n  }ClassName`];
            const i = this.getClassNames('enter').doneClassName;
            'appear' === t && 'done' === n && i && (r += ` ${  i}`),
            'active' === n && e && d(e),
            r &&
                  ((this.appliedClasses[t][n] = r),
                  (function(e, t) {
                    e &&
                      t &&
                      t.split(' ').forEach(function(t) {
                        return (
                          (r = t),
                          void ((n = e).classList
                            ? n.classList.add(r)
                            : (function(e, t) {
                              return e.classList
                                ? !!t && e.classList.contains(t)
                                : -1 !==
                                      (` ${  e.className.baseVal || e.className  } `).indexOf(
                                        ` ${  t  } `,
                                      );
                            })(n, r) ||
                              ('string' === typeof n.className
                                ? (n.className = `${n.className  } ${  r}`)
                                : n.setAttribute(
                                  'class',
                                  `${(n.className && n.className.baseVal) || ''  } ${  r}`,
                                )))
                        );
                        let n; let r;
                      });
                  })(e, r));
          }),
          (n.removeClasses = function(e, t) {
            const n = this.appliedClasses[t];
            const r = n.base;
            const i = n.active;
            const a = n.done;
            (this.appliedClasses[t] = {}), r && y(e, r), i && y(e, i), a && y(e, a);
          }),
          (n.render = function() {
            const e = this.props;
            const t = (e.classNames, (0, i.Z)(e, ['classNames']));
            return l.createElement(
              b,
              (0, r.Z)({}, t, {
                onEnter: this.onEnter,
                onEntered: this.onEntered,
                onEntering: this.onEntering,
                onExit: this.onExit,
                onExiting: this.onExiting,
                onExited: this.onExited,
              }),
            );
          }),
          t
        );
      })(l.Component);
      w.defaultProps = { classNames: '' };
      var E = w;
    },
    5813: function(e, t, n) {
      'use strict';
      n.d(t, {
        Z: function() {
          return m;
        },
      });
      const r = n(3366);
      const i = n(7462);
      const a = n(1721);
      const o = n(7294);
      const l = n(1278);
      function s(e, t) {
        const n = Object.create(null);
        return (
          e &&
            o.Children.map(e, function(e) {
              return e;
            }).forEach(function(e) {
              n[e.key] = (function(e) {
                return t && (0, o.isValidElement)(e) ? t(e) : e;
              })(e);
            }),
          n
        );
      }
      function c(e, t, n) {
        return null != n[t] ? n[t] : e.props[t];
      }
      function u(e, t, n) {
        const r = s(e.children);
        const i = (function(e, t) {
          function n(n) {
            return n in t ? t[n] : e[n];
          }
          (e = e || {}), (t = t || {});
          let r;
          const i = Object.create(null);
          let a = [];
          for (const o in e) {o in t ? a.length && ((i[o] = a), (a = [])) : a.push(o);}
          const l = {};
          for (const s in t) {
            if (i[s]) {
              for (r = 0; r < i[s].length; r++) {
                const c = i[s][r];
                l[i[s][r]] = n(c);
              }
            }
            l[s] = n(s);
          }
          for (r = 0; r < a.length; r++) {l[a[r]] = n(a[r]);}
          return l;
        })(t, r);
        return (
          Object.keys(i).forEach(function(a) {
            const l = i[a];
            if ((0, o.isValidElement)(l)) {
              const s = a in t;
              const u = a in r;
              const d = t[a];
              const f = (0, o.isValidElement)(d) && !d.props.in;
              !u || (s && !f)
                ? u || !s || f
                  ? u &&
                    s &&
                    (0, o.isValidElement)(d) &&
                    (i[a] = (0, o.cloneElement)(l, {
                      onExited: n.bind(null, l),
                      in: d.props.in,
                      exit: c(l, 'exit', e),
                      enter: c(l, 'enter', e),
                    }))
                  : (i[a] = (0, o.cloneElement)(l, { in: !1 }))
                : (i[a] = (0, o.cloneElement)(l, {
                  onExited: n.bind(null, l),
                  in: !0,
                  exit: c(l, 'exit', e),
                  enter: c(l, 'enter', e),
                }));
            }
          }),
          i
        );
      }
      const d =
          Object.values ||
          function(e) {
            return Object.keys(e).map(function(t) {
              return e[t];
            });
          };
      const f = (function(e) {
        function t(t, n) {
          let r;
          const i = (r = e.call(this, t, n) || this).handleExited.bind(
            (function(e) {
              if (void 0 === e) {
                throw new ReferenceError(
                  'this hasn\'t been initialised - super() hasn\'t been called',
                );
              }
              return e;
            })(r),
          );
          return (
            (r.state = { contextValue: { isMounting: !0 }, handleExited: i, firstRender: !0 }), r
          );
        }
        (0, a.Z)(t, e);
        const n = t.prototype;
        return (
          (n.componentDidMount = function() {
            (this.mounted = !0), this.setState({ contextValue: { isMounting: !1 } });
          }),
          (n.componentWillUnmount = function() {
            this.mounted = !1;
          }),
          (t.getDerivedStateFromProps = function(e, t) {
            let n;
            let r;
            const i = t.children;
            const a = t.handleExited;
            return {
              children: t.firstRender
                ? ((n = e),
                (r = a),
                s(n.children, function(e) {
                  return (0,
                  o.cloneElement)(e, { onExited: r.bind(null, e), in: !0, appear: c(e, 'appear', n), enter: c(e, 'enter', n), exit: c(e, 'exit', n) });
                }))
                : u(e, i, a),
              firstRender: !1,
            };
          }),
          (n.handleExited = function(e, t) {
            const n = s(this.props.children);
            e.key in n ||
                (e.props.onExited && e.props.onExited(t),
                this.mounted &&
                  this.setState(function(t) {
                    const n = (0, i.Z)({}, t.children);
                    return delete n[e.key], { children: n };
                  }));
          }),
          (n.render = function() {
            const e = this.props;
            const t = e.component;
            const n = e.childFactory;
            const i = (0, r.Z)(e, ['component', 'childFactory']);
            const a = this.state.contextValue;
            const s = d(this.state.children).map(n);
            return (
              delete i.appear,
              delete i.enter,
              delete i.exit,
              null === t
                ? o.createElement(l.Z.Provider, { value: a }, s)
                : o.createElement(l.Z.Provider, { value: a }, o.createElement(t, i, s))
            );
          }),
          t
        );
      })(o.Component);
      f.defaultProps = {
        component: 'div',
        childFactory: function(e) {
          return e;
        },
      };
      var m = f;
    },
    1278: function(e, t, n) {
      'use strict';
      const r = n(7294);
      t.Z = r.createContext(null);
    },
    9086: function(e, t, n) {
      'use strict';
      n.d(t, {
        JO: function() {
          return u;
        },
        UN: function() {
          return i;
        },
        BZ: function() {
          return a;
        },
        Pj: function() {
          return o;
        },
        Ak: function() {
          return l;
        },
        PU: function() {
          return s;
        },
        Rt: function() {
          return c;
        },
        Mr: function() {
          return d;
        },
        RM: function() {
          return f;
        },
        jb: function() {
          return m;
        },
        pA: function() {
          return p;
        },
        mp: function() {
          return h;
        },
        cq: function() {
          return g;
        },
        GK: function() {
          return v;
        },
        JD: function() {
          return x;
        },
      });
      const r = n(7294);
      var i = function() {
        return r.createElement(
          'svg',
          {
            version: '1.1',
            xmlns: 'http://www.w3.org/2000/svg',
            x: '0px',
            y: '0px',
            viewBox: '0 0 512 512',
            xmlSpace: 'preserve',
          },
          r.createElement('title', null, 'Apple App Store'),
          r.createElement(
            'g',
            null,
            r.createElement(
              'g',
              null,
              r.createElement('path', {
                d: 'M407,0H105C47.103,0,0,47.103,0,105v302c0,57.897,47.103,105,105,105h302c57.897,0,105-47.103,105-105V105\r C512,47.103,464.897,0,407,0z M482,407c0,41.355-33.645,75-75,75H105c-41.355,0-75-33.645-75-75V105c0-41.355,33.645-75,75-75h302\r c41.355,0,75,33.645,75,75V407z',
              }),
            ),
          ),
          r.createElement(
            'g',
            null,
            r.createElement(
              'g',
              null,
              r.createElement('path', {
                d: 'M305.646,123.531c-1.729-6.45-5.865-11.842-11.648-15.18c-11.936-6.892-27.256-2.789-34.15,9.151L256,124.166\r l-3.848-6.665c-6.893-11.937-22.212-16.042-34.15-9.151h-0.001c-11.938,6.893-16.042,22.212-9.15,34.151l18.281,31.664\r L159.678,291H110.5c-13.785,0-25,11.215-25,25c0,13.785,11.215,25,25,25h189.86l-28.868-50h-54.079l85.735-148.498\r C306.487,136.719,307.375,129.981,305.646,123.531z',
              }),
            ),
          ),
          r.createElement(
            'g',
            null,
            r.createElement(
              'g',
              null,
              r.createElement('path', {
                d: 'M401.5,291h-49.178l-55.907-96.834l-28.867,50l86.804,150.348c3.339,5.784,8.729,9.921,15.181,11.65\r c2.154,0.577,4.339,0.863,6.511,0.863c4.332,0,8.608-1.136,12.461-3.361c11.938-6.893,16.042-22.213,9.149-34.15L381.189,341\r H401.5c13.785,0,25-11.215,25-25C426.5,302.215,415.285,291,401.5,291z',
              }),
            ),
          ),
          r.createElement(
            'g',
            null,
            r.createElement(
              'g',
              null,
              r.createElement('path', {
                d: 'M119.264,361l-4.917,8.516c-6.892,11.938-2.787,27.258,9.151,34.15c3.927,2.267,8.219,3.345,12.458,3.344\r c8.646,0,17.067-4.484,21.693-12.495L176.999,361H119.264z',
              }),
            ),
          ),
        );
      };
      var a = function() {
        return r.createElement(
          'svg',
          {
            xmlns: 'http://www.w3.org/2000/svg',
            viewBox: '0 0 24 24',
            fill: 'none',
            stroke: 'currentColor',
            strokeWidth: '1',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            className: 'feather feather-bookmark',
          },
          r.createElement('title', null, 'Bookmark'),
          r.createElement('path', { d: 'M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z' }),
        );
      };
      var o = function() {
        return r.createElement(
          'svg',
          {
            xmlns: 'http://www.w3.org/2000/svg',
            role: 'img',
            viewBox: '0 0 24 24',
            fill: 'none',
            stroke: 'currentColor',
            strokeWidth: '2',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            className: 'feather feather-codepen',
          },
          r.createElement('title', null, 'CodePen'),
          r.createElement('polygon', { points: '12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2' }),
          r.createElement('line', { x1: '12', y1: '22', x2: '12', y2: '15.5' }),
          r.createElement('polyline', { points: '22 8.5 12 15.5 2 8.5' }),
          r.createElement('polyline', { points: '2 15.5 12 8.5 22 15.5' }),
          r.createElement('line', { x1: '12', y1: '2', x2: '12', y2: '8.5' }),
        );
      };
      var l = function() {
        return r.createElement(
          'svg',
          {
            xmlns: 'http://www.w3.org/2000/svg',
            role: 'img',
            viewBox: '0 0 24 24',
            fill: 'none',
            stroke: 'currentColor',
            strokeWidth: '2',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            className: 'feather feather-external-link',
          },
          r.createElement('title', null, 'External Link'),
          r.createElement('path', {
            d: 'M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6',
          }),
          r.createElement('polyline', { points: '15 3 21 3 21 9' }),
          r.createElement('line', { x1: '10', y1: '14', x2: '21', y2: '3' }),
        );
      };
      var s = function() {
        return r.createElement(
          'svg',
          {
            xmlns: 'http://www.w3.org/2000/svg',
            role: 'img',
            viewBox: '0 0 24 24',
            fill: 'none',
            stroke: 'currentColor',
            strokeWidth: '1',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            className: 'feather feather-folder',
          },
          r.createElement('title', null, 'Folder'),
          r.createElement('path', {
            d: 'M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z',
          }),
        );
      };
      var c = function() {
        return r.createElement(
          'svg',
          {
            viewBox: '0 0 24 24',
            fill: 'none',
            stroke: 'currentColor',
            strokeWidth: '2',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            className: 'feather feather-git-branch',
          },
          r.createElement('title', null, 'Git Fork'),
          r.createElement('line', { x1: '6', y1: '3', x2: '6', y2: '15' }),
          r.createElement('circle', { cx: '18', cy: '6', r: '3' }),
          r.createElement('circle', { cx: '6', cy: '18', r: '3' }),
          r.createElement('path', { d: 'M18 9a9 9 0 0 1-9 9' }),
        );
      };
      var u = function(e) {
        switch (e.name) {
          case 'AppStore':
            return r.createElement(i, null);
          case 'Bookmark':
            return r.createElement(a, null);
          case 'Codepen':
            return r.createElement(o, null);
          case 'External':
          default:
            return r.createElement(l, null);
          case 'Folder':
            return r.createElement(s, null);
          case 'Fork':
            return r.createElement(c, null);
          case 'GitHub':
            return r.createElement(d, null);
          case 'Instagram':
            return r.createElement(f, null);
          case 'Linkedin':
            return r.createElement(m, null);
          case 'Loader':
            return r.createElement(p, null);
          case 'Logo':
            return r.createElement(h, null);
          case 'PlayStore':
            return r.createElement(g, null);
          case 'Star':
            return r.createElement(v, null);
          case 'Twitter':
            return r.createElement(x, null);
        }
      };
      var d = function() {
        return r.createElement(
          'svg',
          {
            xmlns: 'http://www.w3.org/2000/svg',
            role: 'img',
            viewBox: '0 0 24 24',
            fill: 'none',
            stroke: 'currentColor',
            strokeWidth: '2',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            className: 'feather feather-github',
          },
          r.createElement('title', null, 'GitHub'),
          r.createElement('path', {
            d: 'M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22',
          }),
        );
      };
      var f = function() {
        return r.createElement(
          'svg',
          {
            xmlns: 'http://www.w3.org/2000/svg',
            role: 'img',
            viewBox: '0 0 24 24',
            fill: 'none',
            stroke: 'currentColor',
            strokeWidth: '2',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            className: 'feather feather-instagram',
          },
          r.createElement('title', null, 'Instagram'),
          r.createElement('rect', {
            x: '2',
            y: '2',
            width: '20',
            height: '20',
            rx: '5',
            ry: '5',
          }),
          r.createElement('path', { d: 'M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z' }),
          r.createElement('line', { x1: '17.5', y1: '6.5', x2: '17.51', y2: '6.5' }),
        );
      };
      var m = function() {
        return r.createElement(
          'svg',
          {
            xmlns: 'http://www.w3.org/2000/svg',
            role: 'img',
            viewBox: '0 0 24 24',
            fill: 'none',
            stroke: 'currentColor',
            strokeWidth: '2',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            className: 'feather feather-linkedin',
          },
          r.createElement('title', null, 'LinkedIn'),
          r.createElement('path', {
            d: 'M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z',
          }),
          r.createElement('rect', { x: '2', y: '9', width: '4', height: '12' }),
          r.createElement('circle', { cx: '4', cy: '4', r: '2' }),
        );
      };
      var p = function() {
        return r.createElement(
          'svg',
          { id: 'logo', xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 100 100' },
          r.createElement('title', null, 'Loader Logo'),
          r.createElement(
            'g',
            null,
            r.createElement(
              'g',
              { id: 'B', transform: 'translate(11.000000, 5.000000)' },
              r.createElement('path', {
                d: 'M45.691667,45.15 C48.591667,46.1 50.691667,48.95 50.691667,52.2 C50.691667,57.95 46.691667,61 40.291667,61 L28.541667,61 L28.541667,30.3 L39.291667,30.3 C45.691667,30.3 49.691667,33.15 49.691667,38.65 C49.691667,41.95 47.941667,44.35 45.691667,45.15 Z M33.591667,43.2 L39.241667,43.2 C42.791667,43.2 44.691667,41.85 44.691667,38.95 C44.691667,36.05 42.791667,34.8 39.241667,34.8 L33.591667,34.8 L33.591667,43.2 Z M33.591667,47.5 L33.591667,56.5 L40.191667,56.5 C43.691667,56.5 45.591667,54.75 45.591667,52 C45.591667,49.2 43.691667,47.5 40.191667,47.5 L33.591667,47.5 Z',
                fill: 'currentColor',
              }),
            ),
            r.createElement('path', {
              stroke: 'currentColor',
              strokeWidth: '5',
              strokeLinecap: 'round',
              strokeLinejoin: 'round',
              d: 'M 50, 5\r L 11, 27\r L 11, 72\r L 50, 95\r L 89, 73\r L 89, 28 z',
            }),
          ),
        );
      };
      var h = function() {
        return r.createElement(
          'svg',
          { id: 'logo', xmlns: 'http://www.w3.org/2000/svg', role: 'img', viewBox: '0 0 84 96' },
          r.createElement('title', null, 'Logo'),
          r.createElement(
            'g',
            { transform: 'translate(-8.000000, -2.000000)' },
            r.createElement(
              'g',
              { transform: 'translate(11.000000, 5.000000)' },
              r.createElement('path', {
                d: 'M45.691667,45.15 C48.591667,46.1 50.691667,48.95 50.691667,52.2 C50.691667,57.95 46.691667,61 40.291667,61 L28.541667,61 L28.541667,30.3 L39.291667,30.3 C45.691667,30.3 49.691667,33.15 49.691667,38.65 C49.691667,41.95 47.941667,44.35 45.691667,45.15 Z M33.591667,43.2 L39.241667,43.2 C42.791667,43.2 44.691667,41.85 44.691667,38.95 C44.691667,36.05 42.791667,34.8 39.241667,34.8 L33.591667,34.8 L33.591667,43.2 Z M33.591667,47.5 L33.591667,56.5 L40.191667,56.5 C43.691667,56.5 45.591667,54.75 45.591667,52 C45.591667,49.2 43.691667,47.5 40.191667,47.5 L33.591667,47.5 Z',
                fill: 'currentColor',
              }),
              r.createElement('polygon', {
                id: 'Shape',
                stroke: 'currentColor',
                strokeWidth: '5',
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                points: '39 0 0 22 0 67 39 90 78 68 78 23',
              }),
            ),
          ),
        );
      };
      var g = function() {
        return r.createElement(
          'svg',
          {
            xmlns: 'http://www.w3.org/2000/svg',
            role: 'img',
            x: '0px',
            y: '0px',
            viewBox: '0 0 512.001 512.001',
          },
          r.createElement('title', null, 'Google Play Store'),
          r.createElement('path', {
            d: 'M464.252,212.09L99.624,8.07C84.247-1.873,64.754-2.691,48.574,5.967C32.183,14.74,22,31.737,22,50.329v411.342\r c0,18.592,10.183,35.59,26.573,44.361c16.097,8.617,35.593,7.891,51.052-2.101l364.628-204.022\r c16.121-9.02,25.747-25.435,25.747-43.908C490,237.527,480.374,221.111,464.252,212.09z M341.677,181.943l-50.339,50.339\r L113.108,54.051L341.677,181.943z M55.544,467.323V44.676L267.621,256L55.544,467.323z M113.108,457.949l178.232-178.231\r l50.339,50.339L113.108,457.949z M447.874,270.637l-75.779,42.401l-57.038-57.037l57.037-57.037l75.778,42.4\r c7.746,4.335,8.583,11.68,8.583,14.637C456.455,258.958,455.62,266.302,447.874,270.637z',
          }),
        );
      };
      var v = function() {
        return r.createElement(
          'svg',
          {
            viewBox: '0 0 24 24',
            fill: 'none',
            stroke: 'currentColor',
            strokeWidth: '2',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            className: 'feather feather-star',
          },
          r.createElement('title', null, 'Star'),
          r.createElement('polygon', {
            points:
                '12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2',
          }),
        );
      };
      var x = function() {
        return r.createElement(
          'svg',
          {
            xmlns: 'http://www.w3.org/2000/svg',
            role: 'img',
            viewBox: '0 0 24 24',
            fill: 'none',
            stroke: 'currentColor',
            strokeWidth: '2',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            className: 'feather feather-twitter',
          },
          r.createElement('title', null, 'Twitter'),
          r.createElement('path', {
            d: 'M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z',
          }),
        );
      };
    },
    4741: function(e, t, n) {
      'use strict';
      n.d(t, {
        CL: function() {
          return wt;
        },
        r8: function() {
          return _t;
        },
        GT: function() {
          return ct;
        },
        g4: function() {
          return zt;
        },
        $_: function() {
          return mt;
        },
        Fb: function() {
          return s;
        },
        VM: function() {
          return ht;
        },
        pe: function() {
          return Ot;
        },
        Ar: function() {
          return P;
        },
        aN: function() {
          return Ze;
        },
        v2: function() {
          return rt;
        },
        JL: function() {
          return Ke;
        },
        pj: function() {
          return It;
        },
        MF: function() {
          return at;
        },
        g_: function() {
          return lt;
        },
      });
      const r = n(7294);
      const i = n(5414);
      const a = n(9499);
      const o = n(5444);
      const l = function(e) {
        const t = e.title;
        const n = e.description;
        const l = e.image;
        const s = (0, a.useLocation)().pathname;
        const c = (0, o.useStaticQuery)('1994492073').site.siteMetadata;
        const u = c.defaultTitle;
        const d = c.defaultDescription;
        const f = c.siteUrl;
        const m = c.defaultImage;
        const p = c.twitterUsername;
        const h = { title: t || u, description: n || d, image: `${  f  }${l || m}`, url: `${  f  }${s}` };
        return r.createElement(
          i.q,
          { title: t, defaultTitle: h.title, titleTemplate: `%s | ${  u}` },
          r.createElement('html', { lang: 'en' }),
          r.createElement('meta', { name: 'description', content: h.description }),
          r.createElement('meta', { name: 'image', content: h.image }),
          r.createElement('meta', { property: 'og:title', content: h.title }),
          r.createElement('meta', { property: 'og:description', content: h.description }),
          r.createElement('meta', { property: 'og:image', content: h.image }),
          r.createElement('meta', { property: 'og:url', content: h.url }),
          r.createElement('meta', { property: 'og:type', content: 'website' }),
          r.createElement('meta', { name: 'twitter:card', content: 'summary_large_image' }),
          r.createElement('meta', { name: 'twitter:creator', content: p }),
          r.createElement('meta', { name: 'twitter:title', content: h.title }),
          r.createElement('meta', { name: 'twitter:description', content: h.description }),
          r.createElement('meta', { name: 'twitter:image', content: h.image }),
          r.createElement('meta', {
            name: 'google-site-verification',
            content: 'DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx9Lk',
          }),
        );
      };
      var s = l;
      l.defaultProps = { title: null, description: null, image: null };
      const c = n(3494);
      const u = (0, c.css)([
        'color:var(--green);background-color:transparent;border:1px solid var(--green);border-radius:var(--border-radius);font-size:var(--fz-xs);font-family:var(--font-mono);line-height:1;text-decoration:none;cursor:pointer;transition:var(--transition);padding:1.25rem 1.75rem;&:hover,&:focus,&:active{background-color:var(--green-tint);outline:none;}&:after{display:none !important;}',
      ]);
      const d = {
        bp: {
          mobileS: 'max-width: 330px',
          mobileM: 'max-width: 400px',
          mobileL: 'max-width: 480px',
          tabletS: 'max-width: 600px',
          tabletL: 'max-width: 768px',
          desktopXS: 'max-width: 900px',
          desktopS: 'max-width: 1080px',
          desktopM: 'max-width: 1200px',
          desktopL: 'max-width: 1400px',
        },
        mixins: {
          flexCenter: (0, c.css)(['display:flex;justify-content:center;align-items:center;']),
          flexBetween: (0, c.css)([
            'display:flex;justify-content:space-between;align-items:center;',
          ]),
          link: (0, c.css)([
            'display:inline-block;text-decoration:none;text-decoration-skip-ink:auto;color:inherit;position:relative;transition:var(--transition);&:hover,&:active,&:focus{color:var(--green);outline:0;}',
          ]),
          inlineLink: (0, c.css)([
            'display:inline-block;text-decoration:none;text-decoration-skip-ink:auto;position:relative;transition:var(--transition);color:var(--green);&:hover,&:focus,&:active{color:var(--green);outline:0;&:after{width:100%;}& > *{color:var(--green) !important;transition:var(--transition);}}&:after{content:\'\';display:block;width:0;height:1px;position:relative;bottom:0.37em;background-color:var(--green);transition:var(--transition);opacity:0.5;}',
          ]),
          button: u,
          smallButton: (0, c.css)([
            'color:var(--green);background-color:transparent;border:1px solid var(--green);border-radius:var(--border-radius);padding:0.75rem 1rem;font-size:var(--fz-xs);font-family:var(--font-mono);line-height:1;text-decoration:none;cursor:pointer;transition:var(--transition);&:hover,&:focus,&:active{background-color:var(--green-tint);outline:none;}&:after{display:none !important;}',
          ]),
          bigButton: (0, c.css)([
            'color:var(--green);background-color:transparent;border:1px solid var(--green);border-radius:var(--border-radius);padding:1.25rem 1.75rem;font-size:var(--fz-sm);font-family:var(--font-mono);line-height:1;text-decoration:none;cursor:pointer;transition:var(--transition);&:hover,&:focus,&:active{background-color:var(--green-tint);outline:none;}&:after{display:none !important;}',
          ]),
          boxShadow: (0, c.css)([
            'box-shadow:0 10px 30px -15px var(--navy-shadow);transition:var(--transition);&:hover,&:focus{box-shadow:0 20px 30px -15px var(--navy-shadow);}',
          ]),
          fancyList: (0, c.css)([
            'padding:0;margin:0;list-style:none;font-size:var(--fz-lg);li{position:relative;padding-left:30px;margin-bottom:10px;&:before{content:\'▹\';position:absolute;left:0;color:var(--green);}}',
          ]),
          resetList: (0, c.css)(['list-style:none;padding:0;margin:0;']),
        },
      };
      const f = {
        name: 'Calibre',
        normal: {
          400: [
            `${n.p  }static/Calibre-Regular-98526589fa32315c552129869e08427e.woff`,
            `${n.p  }static/Calibre-Regular-b0d4cbb1201155ddccc21d1b8059a670.woff2`,
          ],
          500: [
            `${n.p  }static/Calibre-Medium-46693d9b57a6b8a657b5393258f6e899.woff`,
            `${n.p  }static/Calibre-Medium-568dce56f869a519a015d3b69443b067.woff2`,
          ],
          600: [
            `${n.p  }static/Calibre-Semibold-6972688a249bd53a6c7e69a89e50cdd6.woff`,
            `${n.p  }static/Calibre-Semibold-94fc73852539d6733dc0d80252c5e3fb.woff2`,
          ],
        },
        italic: {
          400: [
            `${n.p  }static/Calibre-RegularItalic-57371b9e514dbbe9da31dad1a298de2d.woff`,
            `${n.p  }static/Calibre-RegularItalic-5f875bd7b669f1e11b622d4d6d71b5b0.woff2`,
          ],
          500: [
            `${n.p  }static/Calibre-MediumItalic-aa285f95879aa2c2d26b228d5e422da6.woff`,
            `${n.p  }static/Calibre-MediumItalic-7aa140573fd9ed30ae01e117c418b12b.woff2`,
          ],
          600: [
            `${n.p  }static/Calibre-SemiboldItalic-ad4bd95abee7bca1bdd6a93398f84a04.woff`,
            `${n.p  }static/Calibre-SemiboldItalic-5f04bffe7ce988169806d66e417a966a.woff2`,
          ],
        },
      };
      const m = {
        name: 'SF Mono',
        normal: {
          400: [
            `${n.p  }static/SFMono-Regular-e36fa5257c93fc7711eae342068f9eda.woff`,
            `${n.p  }static/SFMono-Regular-8799e6387338d58f2f137df821c86eb4.woff2`,
          ],
          600: [
            `${n.p  }static/SFMono-Semibold-ee054046915420413d0068fb1e7105c3.woff`,
            `${n.p  }static/SFMono-Semibold-6e6f6c93f4bdf9cbd090c60e97a017e2.woff2`,
          ],
        },
        italic: {
          400: [
            `${n.p  }static/SFMono-RegularItalic-3a20a00dfdeb4ba538473fa7bf625cbd.woff`,
            `${n.p  }static/SFMono-RegularItalic-a596917f86217b40000ff1b894cd0e52.woff2`,
          ],
          600: [
            `${n.p  }static/SFMono-SemiboldItalic-10eb596e904940cd1aebb2cc6286015c.woff`,
            `${n.p  }static/SFMono-SemiboldItalic-9a0ae6382e12c5e28a7342ffb41cf4da.woff2`,
          ],
        },
      };
      const p = function(e, t) {
        void 0 === t && (t = 'normal');
        for (var n = '', r = 0, i = Object.entries(e[t]); r < i.length; r++) {
          const a = i[r];
          const o = a[0];
          const l = a[1];
          const s = l[0];
          const c = l[1];
          n +=
              `\n      @font-face {\n        font-family: '${ 
                e.name 
              }';\n        src: url(${ 
                c 
              }) format('woff2'),\n            url(${ 
                s 
              }) format('woff');\n        font-weight: ${ 
                o 
              };\n        font-style: ${ 
                t 
              };\n        font-display: auto;\n      }\n    `;
        }
        return n;
      };
      const h = p(f);
      const g = p(f, 'italic');
      const v = p(m);
      const x = p(m, 'italic');
      const b = (0, c.css)(['', ''], h + g + v + x);
      const y = (0, c.css)([
        ':root{--dark-navy:#020c1b;--navy:#0a192f;--light-navy:#112240;--lightest-navy:#233554;--navy-shadow:rgba(2,12,27,0.7);--dark-slate:#495670;--slate:#8892b0;--light-slate:#a8b2d1;--lightest-slate:#ccd6f6;--white:#e6f1ff;--green:#64ffda;--green-tint:rgba(100,255,218,0.1);--pink:#f57dff;--blue:#57cbff;--font-sans:\'Calibre\',\'Inter\',\'San Francisco\',\'SF Pro Text\',-apple-system,system-ui,sans-serif;--font-mono:\'SF Mono\',\'Fira Code\',\'Fira Mono\',\'Roboto Mono\',monospace;--fz-xxs:12px;--fz-xs:13px;--fz-sm:14px;--fz-md:16px;--fz-lg:18px;--fz-xl:20px;--fz-xxl:22px;--fz-heading:32px;--border-radius:4px;--nav-height:100px;--nav-scroll-height:70px;--tab-height:42px;--tab-width:120px;--easing:cubic-bezier(0.645,0.045,0.355,1);--transition:all 0.25s cubic-bezier(0.645,0.045,0.355,1);--hamburger-width:30px;--ham-before:top 0.1s ease-in 0.25s,opacity 0.1s ease-in;--ham-before-active:top 0.1s ease-out,opacity 0.1s ease-out 0.12s;--ham-after:bottom 0.1s ease-in 0.25s,transform 0.22s cubic-bezier(0.55,0.055,0.675,0.19);--ham-after-active:bottom 0.1s ease-out,transform 0.22s cubic-bezier(0.215,0.61,0.355,1) 0.12s;}',
      ]);
      const w = (0, c.css)([
        '.fadeup-enter{opacity:0.01;transform:translateY(20px);transition:opacity 300ms var(--easing),transform 300ms var(--easing);}.fadeup-enter-active{opacity:1;transform:translateY(0px);transition:opacity 300ms var(--easing),transform 300ms var(--easing);}.fadedown-enter{opacity:0.01;transform:translateY(-20px);transition:opacity 300ms var(--easing),transform 300ms var(--easing);}.fadedown-enter-active{opacity:1;transform:translateY(0px);transition:opacity 300ms var(--easing),transform 300ms var(--easing);}.fade-enter{opacity:0;}.fade-enter-active{opacity:1;transition:opacity 300ms var(--easing);}.fade-exit{opacity:1;}.fade-exit-active{opacity:0;transition:opacity 300ms var(--easing);}',
      ]);
      const E = '#112340';
      const k = '#1d2d50';
      const C = '#5ccfe6';
      const T = '#c3a6ff';
      const S = '#bae67e';
      const L = '#ffd580';
      const O = '#ffae57';
      const N = '#ef6b73';
      const j = '#a2aabc';
      const z = '#8695b799';
      const A = (0, c.css)(
        [
          '.gatsby-highlight{background-color:',
          ';color:',
          ';border-radius:var(--border-radius);margin:2em 0;padding:1.25em;overflow:auto;position:relative;font-family:var(--font-mono);font-size:var(--fz-md);}.gatsby-highlight code[class*=\'language-\'],.gatsby-highlight pre[class*=\'language-\']{height:auto !important;font-size:var(--fz-sm);line-height:1.5;white-space:pre;word-spacing:normal;word-break:normal;word-wrap:normal;tab-size:2;hyphens:none;}.gatsby-highlight pre[class*=\'language-\']{background-color:transparent;margin:0;padding:0;overflow:initial;float:left;min-width:100%;padding-top:2em;}.gatsby-code-title{padding:1em 1.5em;font-family:var(--font-mono);font-size:var(--fz-xs);background-color:',
          ';color:',
          ';border-top-left-radius:var(--border-radius);border-top-right-radius:var(--border-radius);border-bottom:1px solid ',
          ';& + .gatsby-highlight{margin-top:0;border-top-left-radius:0;border-top-right-radius:0;}}.gatsby-highlight-code-line{display:block;background-color:',
          ';border-left:2px solid var(--green);padding-left:calc(1em + 2px);padding-right:1em;margin-right:-1.35em;margin-left:-1.35em;}.gatsby-highlight pre[class*=\'language-\']::before{background:var(--lightest-navy);color:var(--white);font-size:var(--fz-xxs);font-family:var(--font-mono);line-height:1.5;letter-spacing:0.1em;text-transform:uppercase;border-radius:0 0 3px 3px;position:absolute;top:0;left:1.25rem;padding:0.25rem 0.5rem;}.gatsby-highlight pre[class=\'language-javascript\']::before{content:\'js\';}.gatsby-highlight pre[class=\'language-js\']::before{content:\'js\';}.gatsby-highlight pre[class=\'language-jsx\']::before{content:\'jsx\';}.gatsby-highlight pre[class=\'language-graphql\']::before{content:\'GraphQL\';}.gatsby-highlight pre[class=\'language-html\']::before{content:\'html\';}.gatsby-highlight pre[class=\'language-css\']::before{content:\'css\';}.gatsby-highlight pre[class=\'language-mdx\']::before{content:\'mdx\';}.gatsby-highlight pre[class=\'language-shell\']::before{content:\'shell\';}.gatsby-highlight pre[class=\'language-sh\']::before{content:\'sh\';}.gatsby-highlight pre[class=\'language-bash\']::before{content:\'bash\';}.gatsby-highlight pre[class=\'language-yaml\']::before{content:\'yaml\';}.gatsby-highlight pre[class=\'language-markdown\']::before{content:\'md\';}.gatsby-highlight pre[class=\'language-json\']::before,.gatsby-highlight pre[class=\'language-json5\']::before{content:\'json\';}.gatsby-highlight pre[class=\'language-diff\']::before{content:\'diff\';}.gatsby-highlight pre[class=\'language-text\']::before{content:\'text\';}.gatsby-highlight pre[class=\'language-flow\']::before{content:\'flow\';}.token{display:inline;}.token.comment,.token.block-comment,.token.prolog,.token.doctype,.token.cdata{color:',
          ';}.token.punctuation{color:',
          ';}.token.namespace,.token.deleted{color:',
          ';}.token.function-name,.token.function,.token.class-name,.token.constant,.token.symbol{color:',
          ';}.token.attr-name,.token.operator,.token.rule{color:',
          ';}.token.keyword,.token.boolean,.token.number,.token.property{color:',
          ';}.token.tag,.token.selector,.token.important,.token.atrule,.token.builtin,.token.entity,.token.url{color:',
          ';}.token.string,.token.char,.token.attr-value,.token.regex,.token.variable,.token.inserted{color:',
          ';}.token.important,.token.bold{font-weight:600;}.token.italic{font-style:italic;}.token.entity{cursor:help;}.namespace{opacity:0.7;}',
        ],
        E,
        j,
        E,
        j,
        k,
        k,
        z,
        j,
        N,
        L,
        O,
        T,
        C,
        S,
      );
      const M = (0, c.createGlobalStyle)(
        [
          '',
          ';',
          ';html{box-sizing:border-box;width:100%;scroll-behavior:smooth;}*,*:before,*:after{box-sizing:inherit;}::selection{background-color:var(--lightest-navy);color:var(--lightest-slate);}:focus{outline:2px dashed var(--green);outline-offset:3px;}:focus:not(:focus-visible){outline:none;outline-offset:0px;}:focus-visible{outline:2px dashed var(--green);outline-offset:3px;}html{scrollbar-width:thin;scrollbar-color:var(--dark-slate) var(--navy);}::-webkit-scrollbar{width:12px;}::-webkit-scrollbar-track{background:var(--navy);}::-webkit-scrollbar-thumb{background-color:var(--dark-slate);border:3px solid var(--navy);border-radius:10px;}body{margin:0;width:100%;min-height:100%;overflow-x:hidden;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;background-color:var(--navy);color:var(--slate);font-family:var(--font-sans);font-size:var(--fz-xl);line-height:1.3;@media (max-width:480px){font-size:var(--fz-lg);}&.hidden{overflow:hidden;}&.blur{overflow:hidden;header{background-color:transparent;}#content > *{filter:blur(5px) brightness(0.7);transition:var(--transition);pointer-events:none;user-select:none;}}}#root{min-height:100vh;display:grid;grid-template-rows:1fr auto;grid-template-columns:100%;}main{margin:0 auto;width:100%;max-width:1600px;min-height:100vh;padding:200px 150px;@media (max-width:1080px){padding:200px 100px;}@media (max-width:768px){padding:150px 50px;}@media (max-width:480px){padding:125px 25px;}&.fillHeight{padding:0 150px;@media (max-width:1080px){padding:0 100px;}@media (max-width:768px){padding:0 50px;}@media (max-width:480px){padding:0 25px;}}}section{margin:0 auto;padding:100px 0;max-width:1000px;@media (max-width:768px){padding:80px 0;}@media (max-width:480px){padding:60px 0;}}h1,h2,h3,h4,h5,h6{margin:0 0 10px 0;font-weight:600;color:var(--lightest-slate);line-height:1.1;}.big-heading{margin:0;font-size:clamp(40px,8vw,80px);}.medium-heading{margin:0;font-size:clamp(40px,8vw,60px);}.numbered-heading{display:flex;align-items:center;position:relative;margin:10px 0 40px;width:100%;font-size:clamp(26px,5vw,var(--fz-heading));white-space:nowrap;&:before{position:relative;bottom:4px;counter-increment:section;content:\'0\' counter(section) \'.\';margin-right:10px;color:var(--green);font-family:var(--font-mono);font-size:clamp(var(--fz-md),3vw,var(--fz-xl));font-weight:400;@media (max-width:480px){margin-bottom:-3px;margin-right:5px;}}&:after{content:\'\';display:block;position:relative;top:-5px;width:300px;height:1px;margin-left:20px;background-color:var(--lightest-navy);@media (max-width:1080px){width:200px;}@media (max-width:768px){width:100%;}@media (max-width:600px){margin-left:10px;}}}img,svg,.gatsby-image-wrapper{width:100%;max-width:100%;vertical-align:middle;}img[alt=""],img:not([alt]){filter:blur(5px);}svg{width:100%;height:100%;fill:currentColor;vertical-align:middle;&.feather{fill:none;}}a{display:inline-block;text-decoration:none;text-decoration-skip-ink:auto;color:inherit;position:relative;transition:var(--transition);&:hover,&:focus{color:var(--green);}&.inline-link{',
          ';}}button{cursor:pointer;border:0;border-radius:0;}input,textarea{border-radius:0;outline:0;&:focus{outline:0;}&:focus,&:active{&::placeholder{opacity:0.5;}}}p{margin:0 0 15px 0;&:last-child,&:last-of-type{margin:0;}& > a{',
          ';}& > code{background-color:var(--light-navy);color:var(--white);font-size:var(--fz-sm);border-radius:var(--border-radius);padding:0.3em 0.5em;}}ul{&.fancy-list{padding:0;margin:0;list-style:none;font-size:var(--fz-lg);li{position:relative;padding-left:30px;margin-bottom:10px;&:before{content:\'▹\';position:absolute;left:0;color:var(--green);}}}}blockquote{border-left-color:var(--green);border-left-style:solid;border-left-width:1px;margin-left:0px;margin-right:0px;padding-left:1.5rem;p{font-style:italic;font-size:24px;}}hr{background-color:var(--lightest-navy);height:1px;border-width:0px;border-style:initial;border-color:initial;border-image:initial;margin:1rem;}code{font-family:var(--font-mono);font-size:var(--fz-md);}.skip-to-content{',
          ';position:absolute;top:auto;left:-999px;width:1px;height:1px;overflow:hidden;z-index:-99;&:focus,&:active{background-color:var(--green);color:var(--navy);top:0;left:0;width:auto;height:auto;overflow:auto;z-index:99;}}#logo{color:var(--green);}.overline{color:var(--green);font-family:var(--font-mono);font-size:var(--fz-md);font-weight:400;}.subtitle{color:var(--green);margin:0 0 20px 0;font-size:var(--fz-md);font-family:var(--font-mono);font-weight:400;line-height:1.5;@media (max-width:1080px){font-size:var(--fz-sm);}@media (max-width:768px){font-size:var(--fz-xs);}a{',
          ';line-height:1.5;}}.breadcrumb{display:flex;align-items:center;margin-bottom:50px;color:var(--green);.arrow{display:block;margin-right:10px;padding-top:4px;}a{',
          ';font-family:var(--font-mono);font-size:var(--fz-sm);font-weight:600;line-height:1.5;text-transform:uppercase;letter-spacing:0.1em;}}.gatsby-image-outer-wrapper{height:100%;}',
          ';',
          ';',
        ],
        b,
        y,
        function(e) {
          return e.theme.mixins.inlineLink;
        },
        function(e) {
          return e.theme.mixins.inlineLink;
        },
        function(e) {
          return e.theme.mixins.button;
        },
        function(e) {
          return e.theme.mixins.inlineLink;
        },
        function(e) {
          return e.theme.mixins.inlineLink;
        },
        w,
        A,
      );
      const I = c.default.div.withConfig({
        displayName: 'layout__StyledContent',
        componentId: 'sc-1yw8zls-0',
      })(['display:flex;flex-direction:column;min-height:100vh;']);
      var P = function(e) {
        const t = e.children;
        const n = e.location;
        const i = '/' === n.pathname;
        const a = (0, r.useState)(i);
        const o = a[0];
        const l = a[1];
        return (
          (0, r.useEffect)(
            function() {
              if (!o) {
                if (n.hash) {
                  const e = n.hash.substring(1);
                  setTimeout(function() {
                    const t = document.getElementById(e);
                    t && (t.scrollIntoView(), t.focus());
                  }, 0);
                }
                let t;
                (t = Array.from(document.querySelectorAll('a'))).length > 0 &&
                    t.forEach(function(e) {
                      e.host !== window.location.host &&
                        (e.setAttribute('rel', 'noopener noreferrer'),
                        e.setAttribute('target', '_blank'));
                    });
              }
            },
            [o],
          ),
          r.createElement(
            r.Fragment,
            null,
            r.createElement(s, null),
            r.createElement(
              'div',
              { id: 'root' },
              r.createElement(
                c.ThemeProvider,
                { theme: d },
                r.createElement(M, null),
                r.createElement(
                  'a',
                  { className: 'skip-to-content', href: '#content' },
                  'Skip to Content',
                ),
                o && i
                  ? r.createElement(Ze, {
                    finishLoading: function() {
                      return l(!1);
                    },
                  })
                  : r.createElement(
                    I,
                    null,
                    r.createElement(Ke, { isHome: i }),
                    r.createElement(lt, { isHome: i }),
                    r.createElement(ct, { isHome: i }),
                    r.createElement('div', { id: 'content' }, t, r.createElement(mt, null)),
                  ),
              ),
            ),
          )
        );
      };
      const _ = {
        update: null,
        begin: null,
        loopBegin: null,
        changeBegin: null,
        change: null,
        changeComplete: null,
        loopComplete: null,
        complete: null,
        loop: 1,
        direction: 'normal',
        autoplay: !0,
        timelineOffset: 0,
      };
      const R = { duration: 1e3, delay: 0, endDelay: 0, easing: 'easeOutElastic(1, .5)', round: 0 };
      const D = [
        'translateX',
        'translateY',
        'translateZ',
        'rotate',
        'rotateX',
        'rotateY',
        'rotateZ',
        'scale',
        'scaleX',
        'scaleY',
        'scaleZ',
        'skew',
        'skewX',
        'skewY',
        'perspective',
        'matrix',
        'matrix3d',
      ];
      const B = { CSS: {}, springs: {} };
      function F(e, t, n) {
        return Math.min(Math.max(e, t), n);
      }
      function H(e, t) {
        return e.indexOf(t) > -1;
      }
      function q(e, t) {
        return e.apply(null, t);
      }
      var Z = {
        arr: function(e) {
          return Array.isArray(e);
        },
        obj: function(e) {
          return H(Object.prototype.toString.call(e), 'Object');
        },
        pth: function(e) {
          return Z.obj(e) && e.hasOwnProperty('totalLength');
        },
        svg: function(e) {
          return e instanceof SVGElement;
        },
        inp: function(e) {
          return e instanceof HTMLInputElement;
        },
        dom: function(e) {
          return e.nodeType || Z.svg(e);
        },
        str: function(e) {
          return 'string' === typeof e;
        },
        fnc: function(e) {
          return 'function' === typeof e;
        },
        und: function(e) {
          return void 0 === e;
        },
        nil: function(e) {
          return Z.und(e) || null === e;
        },
        hex: function(e) {
          return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(e);
        },
        rgb: function(e) {
          return /^rgb/.test(e);
        },
        hsl: function(e) {
          return /^hsl/.test(e);
        },
        col: function(e) {
          return Z.hex(e) || Z.rgb(e) || Z.hsl(e);
        },
        key: function(e) {
          return (
            !_.hasOwnProperty(e) && !R.hasOwnProperty(e) && 'targets' !== e && 'keyframes' !== e
          );
        },
      };
      function W(e) {
        const t = /\(([^)]+)\)/.exec(e);
        return t
          ? t[1].split(',').map(function(e) {
            return parseFloat(e);
          })
          : [];
      }
      function V(e, t) {
        const n = W(e);
        const r = F(Z.und(n[0]) ? 1 : n[0], 0.1, 100);
        const i = F(Z.und(n[1]) ? 100 : n[1], 0.1, 100);
        const a = F(Z.und(n[2]) ? 10 : n[2], 0.1, 100);
        const o = F(Z.und(n[3]) ? 0 : n[3], 0.1, 100);
        const l = Math.sqrt(i / r);
        const s = a / (2 * Math.sqrt(i * r));
        const c = s < 1 ? l * Math.sqrt(1 - s * s) : 0;
        const u = 1;
        const d = s < 1 ? (s * l - o) / c : -o + l;
        function f(e) {
          let n = t ? (t * e) / 1e3 : e;
          return (
            (n =
              s < 1
                ? Math.exp(-n * s * l) * (u * Math.cos(c * n) + d * Math.sin(c * n))
                : (u + d * n) * Math.exp(-n * l)),
            0 === e || 1 === e ? e : 1 - n
          );
        }
        return t
          ? f
          : function() {
            const t = B.springs[e];
            if (t) {return t;}
            for (var n = 1 / 6, r = 0, i = 0; ; ) {
              if (1 === f((r += n))) {
                if (++i >= 16) {break;}
              } else {i = 0;}
            }
            const a = r * n * 1e3;
            return (B.springs[e] = a), a;
          };
      }
      function Y(e) {
        return (
          void 0 === e && (e = 10),
          function(t) {
            return Math.ceil(F(t, 1e-6, 1) * e) * (1 / e);
          }
        );
      }
      let G;
      let U;
      const $ = (function() {
        const e = 0.1;
        function t(e, t) {
          return 1 - 3 * t + 3 * e;
        }
        function n(e, t) {
          return 3 * t - 6 * e;
        }
        function r(e) {
          return 3 * e;
        }
        function i(e, i, a) {
          return ((t(i, a) * e + n(i, a)) * e + r(i)) * e;
        }
        function a(e, i, a) {
          return 3 * t(i, a) * e * e + 2 * n(i, a) * e + r(i);
        }
        return function(t, n, r, o) {
          if (0 <= t && t <= 1 && 0 <= r && r <= 1) {
            var l = new Float32Array(11);
            if (t !== n || r !== o) {for (let s = 0; s < 11; ++s) {l[s] = i(s * e, t, r);}}
            return function(e) {
              return (t === n && r === o) || 0 === e || 1 === e ? e : i(c(e), n, o);
            };
          }
          function c(n) {
            for (var o = 0, s = 1; 10 !== s && l[s] <= n; ++s) {o += e;}
            --s;
            const c = o + ((n - l[s]) / (l[s + 1] - l[s])) * e;
            const u = a(c, t, r);
            return u >= 0.001
              ? (function(e, t, n, r) {
                for (let o = 0; o < 4; ++o) {
                  const l = a(t, n, r);
                  if (0 === l) {return t;}
                  t -= (i(t, n, r) - e) / l;
                }
                return t;
              })(n, c, t, r)
              : 0 === u
                ? c
                : (function(e, t, n, r, a) {
                  let o;
                  let l;
                  let s = 0;
                  do {
                    (o = i((l = t + (n - t) / 2), r, a) - e) > 0 ? (n = l) : (t = l);
                  } while (Math.abs(o) > 1e-7 && ++s < 10);
                  return l;
                })(n, o, o + e, t, r);
          }
        };
      })();
      const J =
          ((G = {
            linear: function() {
              return function(e) {
                return e;
              };
            },
          }),
          (U = {
            Sine: function() {
              return function(e) {
                return 1 - Math.cos((e * Math.PI) / 2);
              };
            },
            Circ: function() {
              return function(e) {
                return 1 - Math.sqrt(1 - e * e);
              };
            },
            Back: function() {
              return function(e) {
                return e * e * (3 * e - 2);
              };
            },
            Bounce: function() {
              return function(e) {
                for (var t, n = 4; e < ((t = Math.pow(2, --n)) - 1) / 11; ){;}
                return 1 / Math.pow(4, 3 - n) - 7.5625 * Math.pow((3 * t - 2) / 22 - e, 2);
              };
            },
            Elastic: function(e, t) {
              void 0 === e && (e = 1), void 0 === t && (t = 0.5);
              const n = F(e, 1, 10);
              const r = F(t, 0.1, 2);
              return function(e) {
                return 0 === e || 1 === e
                  ? e
                  : -n *
                      Math.pow(2, 10 * (e - 1)) *
                      Math.sin(
                        ((e - 1 - (r / (2 * Math.PI)) * Math.asin(1 / n)) * (2 * Math.PI)) / r,
                      );
              };
            },
          }),
          ['Quad', 'Cubic', 'Quart', 'Quint', 'Expo'].forEach(function(e, t) {
            U[e] = function() {
              return function(e) {
                return Math.pow(e, t + 2);
              };
            };
          }),
          Object.keys(U).forEach(function(e) {
            const t = U[e];
            (G[`easeIn${  e}`] = t),
            (G[`easeOut${  e}`] = function(e, n) {
              return function(r) {
                return 1 - t(e, n)(1 - r);
              };
            }),
            (G[`easeInOut${  e}`] = function(e, n) {
              return function(r) {
                return r < 0.5 ? t(e, n)(2 * r) / 2 : 1 - t(e, n)(-2 * r + 2) / 2;
              };
            }),
            (G[`easeOutIn${  e}`] = function(e, n) {
              return function(r) {
                return r < 0.5 ? (1 - t(e, n)(1 - 2 * r)) / 2 : (t(e, n)(2 * r - 1) + 1) / 2;
              };
            });
          }),
          G);
      function Q(e, t) {
        if (Z.fnc(e)) {return e;}
        const n = e.split('(')[0];
        const r = J[n];
        const i = W(e);
        switch (n) {
          case 'spring':
            return V(e, t);
          case 'cubicBezier':
            return q($, i);
          case 'steps':
            return q(Y, i);
          default:
            return q(r, i);
        }
      }
      function K(e) {
        try {
          return document.querySelectorAll(e);
        } catch (t) {
          return;
        }
      }
      function X(e, t) {
        for (
          var n = e.length, r = arguments.length >= 2 ? arguments[1] : void 0, i = [], a = 0;
          a < n;
          a++
        ) {
          if (a in e) {
            const o = e[a];
            t.call(r, o, a, e) && i.push(o);
          }
        }
        return i;
      }
      function ee(e) {
        return e.reduce(function(e, t) {
          return e.concat(Z.arr(t) ? ee(t) : t);
        }, []);
      }
      function te(e) {
        return Z.arr(e)
          ? e
          : (Z.str(e) && (e = K(e) || e),
          e instanceof NodeList || e instanceof HTMLCollection ? [].slice.call(e) : [e]);
      }
      function ne(e, t) {
        return e.some(function(e) {
          return e === t;
        });
      }
      function re(e) {
        const t = {};
        for (const n in e) {t[n] = e[n];}
        return t;
      }
      function ie(e, t) {
        const n = re(e);
        for (const r in e) {n[r] = t.hasOwnProperty(r) ? t[r] : e[r];}
        return n;
      }
      function ae(e, t) {
        const n = re(e);
        for (const r in t) {n[r] = Z.und(e[r]) ? t[r] : e[r];}
        return n;
      }
      function oe(e) {
        return Z.rgb(e)
          ? (n = /rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec((t = e)))
            ? `rgba(${  n[1]  },1)`
            : t
          : Z.hex(e)
            ? (function(e) {
              const t = e.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, function(e, t, n, r) {
                return t + t + n + n + r + r;
              });
              const n = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);
              return (
                `rgba(${ 
                  parseInt(n[1], 16) 
                },${ 
                  parseInt(n[2], 16) 
                },${ 
                  parseInt(n[3], 16) 
                },1)`
              );
            })(e)
            : Z.hsl(e)
              ? (function(e) {
                let t;
                let n;
                let r;
                const i =
                  /hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(e) ||
                  /hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(e);
                const a = parseInt(i[1], 10) / 360;
                const o = parseInt(i[2], 10) / 100;
                const l = parseInt(i[3], 10) / 100;
                const s = i[4] || 1;
                function c(e, t, n) {
                  return (
                    n < 0 && (n += 1),
                    n > 1 && (n -= 1),
                    n < 1 / 6
                      ? e + 6 * (t - e) * n
                      : n < 0.5
                        ? t
                        : n < 2 / 3
                          ? e + (t - e) * (2 / 3 - n) * 6
                          : e
                  );
                }
                if (0 == o) {t = n = r = l;} else {
                  const u = l < 0.5 ? l * (1 + o) : l + o - l * o;
                  const d = 2 * l - u;
                  (t = c(d, u, a + 1 / 3)), (n = c(d, u, a)), (r = c(d, u, a - 1 / 3));
                }
                return `rgba(${  255 * t  },${  255 * n  },${  255 * r  },${  s  })`;
              })(e)
              : void 0;
        let t; let n;
      }
      function le(e) {
        const t =
          /[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(
            e,
          );
        if (t) {return t[1];}
      }
      function se(e, t) {
        return Z.fnc(e) ? e(t.target, t.id, t.total) : e;
      }
      function ce(e, t) {
        return e.getAttribute(t);
      }
      function ue(e, t, n) {
        if (ne([n, 'deg', 'rad', 'turn'], le(t))) {return t;}
        const r = B.CSS[t + n];
        if (!Z.und(r)) {return r;}
        const i = document.createElement(e.tagName);
        const a = e.parentNode && e.parentNode !== document ? e.parentNode : document.body;
        a.appendChild(i), (i.style.position = 'absolute'), (i.style.width = 100 + n);
        const o = 100 / i.offsetWidth;
        a.removeChild(i);
        const l = o * parseFloat(t);
        return (B.CSS[t + n] = l), l;
      }
      function de(e, t, n) {
        if (t in e.style) {
          const r = t.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
          const i = e.style[t] || getComputedStyle(e).getPropertyValue(r) || '0';
          return n ? ue(e, i, n) : i;
        }
      }
      function fe(e, t) {
        return Z.dom(e) && !Z.inp(e) && (!Z.nil(ce(e, t)) || (Z.svg(e) && e[t]))
          ? 'attribute'
          : Z.dom(e) && ne(D, t)
            ? 'transform'
            : Z.dom(e) && 'transform' !== t && de(e, t)
              ? 'css'
              : null != e[t]
                ? 'object'
                : void 0;
      }
      function me(e) {
        if (Z.dom(e)) {
          for (
            var t, n = e.style.transform || '', r = /(\w+)\(([^)]*)\)/g, i = new Map();
            (t = r.exec(n));

          ) {i.set(t[1], t[2]);}
          return i;
        }
      }
      function pe(e, t, n, r) {
        const i = H(t, 'scale')
          ? 1
          : 0 +
              (function(e) {
                return H(e, 'translate') || 'perspective' === e
                  ? 'px'
                  : H(e, 'rotate') || H(e, 'skew')
                    ? 'deg'
                    : void 0;
              })(t);
        const a = me(e).get(t) || i;
        return n && (n.transforms.list.set(t, a), (n.transforms.last = t)), r ? ue(e, a, r) : a;
      }
      function he(e, t, n, r) {
        switch (fe(e, t)) {
          case 'transform':
            return pe(e, t, r, n);
          case 'css':
            return de(e, t, n);
          case 'attribute':
            return ce(e, t);
          default:
            return e[t] || 0;
        }
      }
      function ge(e, t) {
        const n = /^(\*=|\+=|-=)/.exec(e);
        if (!n) {return e;}
        const r = le(e) || 0;
        const i = parseFloat(t);
        const a = parseFloat(e.replace(n[0], ''));
        switch (n[0][0]) {
          case '+':
            return i + a + r;
          case '-':
            return i - a + r;
          case '*':
            return i * a + r;
        }
      }
      function ve(e, t) {
        if (Z.col(e)) {return oe(e);}
        if (/\s/g.test(e)) {return e;}
        const n = le(e);
        const r = n ? e.substr(0, e.length - n.length) : e;
        return t ? r + t : r;
      }
      function xe(e, t) {
        return Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2));
      }
      function be(e) {
        for (var t, n = e.points, r = 0, i = 0; i < n.numberOfItems; i++) {
          const a = n.getItem(i);
          i > 0 && (r += xe(t, a)), (t = a);
        }
        return r;
      }
      function ye(e) {
        if (e.getTotalLength) {return e.getTotalLength();}
        switch (e.tagName.toLowerCase()) {
          case 'circle':
            return (function(e) {
              return 2 * Math.PI * ce(e, 'r');
            })(e);
          case 'rect':
            return (function(e) {
              return 2 * ce(e, 'width') + 2 * ce(e, 'height');
            })(e);
          case 'line':
            return (function(e) {
              return xe({ x: ce(e, 'x1'), y: ce(e, 'y1') }, { x: ce(e, 'x2'), y: ce(e, 'y2') });
            })(e);
          case 'polyline':
            return be(e);
          case 'polygon':
            return (function(e) {
              const t = e.points;
              return be(e) + xe(t.getItem(t.numberOfItems - 1), t.getItem(0));
            })(e);
        }
      }
      function we(e, t) {
        const n = t || {};
        const r =
            n.el ||
            (function(e) {
              for (var t = e.parentNode; Z.svg(t) && Z.svg(t.parentNode); ) {t = t.parentNode;}
              return t;
            })(e);
        const i = r.getBoundingClientRect();
        const a = ce(r, 'viewBox');
        const o = i.width;
        const l = i.height;
        const s = n.viewBox || (a ? a.split(' ') : [0, 0, o, l]);
        return { el: r, viewBox: s, x: s[0] / 1, y: s[1] / 1, w: o, h: l, vW: s[2], vH: s[3] };
      }
      function Ee(e, t, n) {
        function r(n) {
          void 0 === n && (n = 0);
          const r = t + n >= 1 ? t + n : 0;
          return e.el.getPointAtLength(r);
        }
        const i = we(e.el, e.svg);
        const a = r();
        const o = r(-1);
        const l = r(1);
        const s = n ? 1 : i.w / i.vW;
        const c = n ? 1 : i.h / i.vH;
        switch (e.property) {
          case 'x':
            return (a.x - i.x) * s;
          case 'y':
            return (a.y - i.y) * c;
          case 'angle':
            return (180 * Math.atan2(l.y - o.y, l.x - o.x)) / Math.PI;
        }
      }
      function ke(e, t) {
        const n = /[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g;
        const r = `${ve(Z.pth(e) ? e.totalLength : e, t)  }`;
        return {
          original: r,
          numbers: r.match(n) ? r.match(n).map(Number) : [0],
          strings: Z.str(e) || t ? r.split(n) : [],
        };
      }
      function Ce(e) {
        return X(e ? ee(Z.arr(e) ? e.map(te) : te(e)) : [], function(e, t, n) {
          return n.indexOf(e) === t;
        });
      }
      function Te(e) {
        const t = Ce(e);
        return t.map(function(e, n) {
          return { target: e, id: n, total: t.length, transforms: { list: me(e) } };
        });
      }
      function Se(e, t) {
        const n = re(t);
        if ((/^spring/.test(n.easing) && (n.duration = V(n.easing)), Z.arr(e))) {
          const r = e.length;
          2 === r && !Z.obj(e[0])
            ? (e = { value: e })
            : Z.fnc(t.duration) || (n.duration = t.duration / r);
        }
        const i = Z.arr(e) ? e : [e];
        return i
          .map(function(e, n) {
            const r = Z.obj(e) && !Z.pth(e) ? e : { value: e };
            return (
              Z.und(r.delay) && (r.delay = n ? 0 : t.delay),
              Z.und(r.endDelay) && (r.endDelay = n === i.length - 1 ? t.endDelay : 0),
              r
            );
          })
          .map(function(e) {
            return ae(e, n);
          });
      }
      function Le(e, t) {
        const n = [];
        const r = t.keyframes;
        for (const i in (r &&
          (t = ae(
            (function(e) {
              for (
                var t = X(
                    ee(
                      e.map(function(e) {
                        return Object.keys(e);
                      }),
                    ),
                    function(e) {
                      return Z.key(e);
                    },
                  ).reduce(function(e, t) {
                    return e.indexOf(t) < 0 && e.push(t), e;
                  }, []),
                  n = {},
                  r = function(r) {
                    const i = t[r];
                    n[i] = e.map(function(e) {
                      const t = {};
                      for (const n in e) {Z.key(n) ? n == i && (t.value = e[n]) : (t[n] = e[n]);}
                      return t;
                    });
                  },
                  i = 0;
                i < t.length;
                i++
              ) {r(i);}
              return n;
            })(r),
            t,
          )),
        t)) {Z.key(i) && n.push({ name: i, tweens: Se(t[i], e) });}
        return n;
      }
      function Oe(e, t) {
        let n;
        return e.tweens.map(function(r) {
          const i = (function(e, t) {
            const n = {};
            for (const r in e) {
              let i = se(e[r], t);
              Z.arr(i) &&
                  1 ===
                    (i = i.map(function(e) {
                      return se(e, t);
                    })).length &&
                  (i = i[0]),
              (n[r] = i);
            }
            return (n.duration = parseFloat(n.duration)), (n.delay = parseFloat(n.delay)), n;
          })(r, t);
          const a = i.value;
          let o = Z.arr(a) ? a[1] : a;
          const l = le(o);
          const s = he(t.target, e.name, l, t);
          const c = n ? n.to.original : s;
          const u = Z.arr(a) ? a[0] : c;
          const d = le(u) || le(s);
          const f = l || d;
          return (
            Z.und(o) && (o = c),
            (i.from = ke(u, f)),
            (i.to = ke(ge(o, u), f)),
            (i.start = n ? n.end : 0),
            (i.end = i.start + i.delay + i.duration + i.endDelay),
            (i.easing = Q(i.easing, i.duration)),
            (i.isPath = Z.pth(a)),
            (i.isPathTargetInsideSVG = i.isPath && Z.svg(t.target)),
            (i.isColor = Z.col(i.from.original)),
            i.isColor && (i.round = 1),
            (n = i),
            i
          );
        });
      }
      const Ne = {
        css: function(e, t, n) {
          return (e.style[t] = n);
        },
        attribute: function(e, t, n) {
          return e.setAttribute(t, n);
        },
        object: function(e, t, n) {
          return (e[t] = n);
        },
        transform: function(e, t, n, r, i) {
          if ((r.list.set(t, n), t === r.last || i)) {
            let a = '';
            r.list.forEach(function(e, t) {
              a += `${t  }(${  e  }) `;
            }),
            (e.style.transform = a);
          }
        },
      };
      function je(e, t) {
        Te(e).forEach(function(e) {
          for (const n in t) {
            const r = se(t[n], e);
            const i = e.target;
            const a = le(r);
            const o = he(i, n, a, e);
            const l = ge(ve(r, a || le(o)), o);
            const s = fe(i, n);
            Ne[s](i, n, l, e.transforms, !0);
          }
        });
      }
      function ze(e, t) {
        return X(
          ee(
            e.map(function(e) {
              return t.map(function(t) {
                return (function(e, t) {
                  const n = fe(e.target, t.name);
                  if (n) {
                    const r = Oe(t, e);
                    const i = r[r.length - 1];
                    return {
                      type: n,
                      property: t.name,
                      animatable: e,
                      tweens: r,
                      duration: i.end,
                      delay: r[0].delay,
                      endDelay: i.endDelay,
                    };
                  }
                })(e, t);
              });
            }),
          ),
          function(e) {
            return !Z.und(e);
          },
        );
      }
      function Ae(e, t) {
        const n = e.length;
        const r = function(e) {
          return e.timelineOffset ? e.timelineOffset : 0;
        };
        const i = {};
        return (
          (i.duration = n
            ? Math.max.apply(
              Math,
              e.map(function(e) {
                return r(e) + e.duration;
              }),
            )
            : t.duration),
          (i.delay = n
            ? Math.min.apply(
              Math,
              e.map(function(e) {
                return r(e) + e.delay;
              }),
            )
            : t.delay),
          (i.endDelay = n
            ? i.duration -
              Math.max.apply(
                Math,
                e.map(function(e) {
                  return r(e) + e.duration - e.endDelay;
                }),
              )
            : t.endDelay),
          i
        );
      }
      let Me = 0;
      const Ie = [];
      var Pe = (function() {
        let e;
        function t(n) {
          for (var r = Ie.length, i = 0; i < r; ) {
            const a = Ie[i];
            a.paused ? (Ie.splice(i, 1), r--) : (a.tick(n), i++);
          }
          e = i > 0 ? requestAnimationFrame(t) : void 0;
        }
        return (
          'undefined' !== typeof document &&
              document.addEventListener('visibilitychange', function() {
                Re.suspendWhenDocumentHidden &&
                  (_e()
                    ? (e = cancelAnimationFrame(e))
                    : (Ie.forEach(function(e) {
                      return e._onDocumentVisibility();
                    }),
                    Pe()));
              }),
          function() {
            e ||
                (_e() && Re.suspendWhenDocumentHidden) ||
                !(Ie.length > 0) ||
                (e = requestAnimationFrame(t));
          }
        );
      })();
      function _e() {
        return !!document && document.hidden;
      }
      function Re(e) {
        void 0 === e && (e = {});
        let t;
        let n = 0;
        let r = 0;
        let i = 0;
        let a = 0;
        let o = null;
        function l(e) {
          const t =
            window.Promise &&
            new Promise(function(e) {
              return (o = e);
            });
          return (e.finished = t), t;
        }
        const s = (function(e) {
          const t = ie(_, e);
          const n = ie(R, e);
          const r = Le(n, e);
          const i = Te(e.targets);
          const a = ze(i, r);
          const o = Ae(a, n);
          const l = Me;
          return (
            Me++,
            ae(t, {
              id: l,
              children: [],
              animatables: i,
              animations: a,
              duration: o.duration,
              delay: o.delay,
              endDelay: o.endDelay,
            })
          );
        })(e);
        l(s);
        function c() {
          const e = s.direction;
          'alternate' !== e && (s.direction = 'normal' !== e ? 'normal' : 'reverse'),
          (s.reversed = !s.reversed),
          t.forEach(function(e) {
            return (e.reversed = s.reversed);
          });
        }
        function u(e) {
          return s.reversed ? s.duration - e : e;
        }
        function d() {
          (n = 0), (r = u(s.currentTime) * (1 / Re.speed));
        }
        function f(e, t) {
          t && t.seek(e - t.timelineOffset);
        }
        function m(e) {
          for (let t = 0, n = s.animations, r = n.length; t < r; ) {
            const i = n[t];
            const a = i.animatable;
            const o = i.tweens;
            const l = o.length - 1;
            let c = o[l];
            l &&
              (c =
                X(o, function(t) {
                  return e < t.end;
                })[0] || c);
            for (
              var u = F(e - c.start - c.delay, 0, c.duration) / c.duration,
                d = isNaN(u) ? 1 : c.easing(u),
                f = c.to.strings,
                m = c.round,
                p = [],
                h = c.to.numbers.length,
                g = void 0,
                v = 0;
              v < h;
              v++
            ) {
              let x = void 0;
              const b = c.to.numbers[v];
              const y = c.from.numbers[v] || 0;
              (x = c.isPath ? Ee(c.value, d * b, c.isPathTargetInsideSVG) : y + d * (b - y)),
              m && ((c.isColor && v > 2) || (x = Math.round(x * m) / m)),
              p.push(x);
            }
            const w = f.length;
            if (w) {
              g = f[0];
              for (let E = 0; E < w; E++) {
                f[E];
                const k = f[E + 1];
                const C = p[E];
                isNaN(C) || (g += k ? C + k : `${C  } `);
              }
            } else {g = p[0];}
            Ne[i.type](a.target, i.property, g, a.transforms), (i.currentValue = g), t++;
          }
        }
        function p(e) {
          s[e] && !s.passThrough && s[e](s);
        }
        function h(e) {
          const d = s.duration;
          const h = s.delay;
          const g = d - s.endDelay;
          const v = u(e);
          (s.progress = F((v / d) * 100, 0, 100)),
          (s.reversePlayback = v < s.currentTime),
          t &&
              (function(e) {
                if (s.reversePlayback) {for (let n = a; n--; ) {f(e, t[n]);}} else {for (let r = 0; r < a; r++) {f(e, t[r]);}}
              })(v),
          !s.began && s.currentTime > 0 && ((s.began = !0), p('begin')),
          !s.loopBegan && s.currentTime > 0 && ((s.loopBegan = !0), p('loopBegin')),
          v <= h && 0 !== s.currentTime && m(0),
          ((v >= g && s.currentTime !== d) || !d) && m(d),
          v > h && v < g
            ? (s.changeBegan ||
                  ((s.changeBegan = !0), (s.changeCompleted = !1), p('changeBegin')),
            p('change'),
            m(v))
            : s.changeBegan &&
                ((s.changeCompleted = !0), (s.changeBegan = !1), p('changeComplete')),
          (s.currentTime = F(v, 0, d)),
          s.began && p('update'),
          e >= d &&
              ((r = 0),
              s.remaining && !0 !== s.remaining && s.remaining--,
              s.remaining
                ? ((n = i),
                p('loopComplete'),
                (s.loopBegan = !1),
                'alternate' === s.direction && c())
                : ((s.paused = !0),
                s.completed ||
                    ((s.completed = !0),
                    p('loopComplete'),
                    p('complete'),
                    !s.passThrough && 'Promise' in window && (o(), l(s)))));
        }
        return (
          (s.reset = function() {
            const e = s.direction;
            (s.passThrough = !1),
            (s.currentTime = 0),
            (s.progress = 0),
            (s.paused = !0),
            (s.began = !1),
            (s.loopBegan = !1),
            (s.changeBegan = !1),
            (s.completed = !1),
            (s.changeCompleted = !1),
            (s.reversePlayback = !1),
            (s.reversed = 'reverse' === e),
            (s.remaining = s.loop),
            (t = s.children);
            for (let n = (a = t.length); n--; ) {s.children[n].reset();}
            ((s.reversed && !0 !== s.loop) || ('alternate' === e && 1 === s.loop)) && s.remaining++,
            m(s.reversed ? s.duration : 0);
          }),
          (s._onDocumentVisibility = d),
          (s.set = function(e, t) {
            return je(e, t), s;
          }),
          (s.tick = function(e) {
            (i = e), n || (n = i), h((i + (r - n)) * Re.speed);
          }),
          (s.seek = function(e) {
            h(u(e));
          }),
          (s.pause = function() {
            (s.paused = !0), d();
          }),
          (s.play = function() {
            s.paused && (s.completed && s.reset(), (s.paused = !1), Ie.push(s), d(), Pe());
          }),
          (s.reverse = function() {
            c(), (s.completed = !s.reversed), d();
          }),
          (s.restart = function() {
            s.reset(), s.play();
          }),
          (s.remove = function(e) {
            Be(Ce(e), s);
          }),
          s.reset(),
          s.autoplay && s.play(),
          s
        );
      }
      function De(e, t) {
        for (let n = t.length; n--; ) {ne(e, t[n].animatable.target) && t.splice(n, 1);}
      }
      function Be(e, t) {
        const n = t.animations;
        const r = t.children;
        De(e, n);
        for (let i = r.length; i--; ) {
          const a = r[i];
          const o = a.animations;
          De(e, o), o.length || a.children.length || r.splice(i, 1);
        }
        n.length || r.length || t.pause();
      }
      (Re.version = '3.2.1'),
      (Re.speed = 1),
      (Re.suspendWhenDocumentHidden = !0),
      (Re.running = Ie),
      (Re.remove = function(e) {
        for (let t = Ce(e), n = Ie.length; n--; ) {
          Be(t, Ie[n]);
        }
      }),
      (Re.get = he),
      (Re.set = je),
      (Re.convertPx = ue),
      (Re.path = function(e, t) {
        const n = Z.str(e) ? K(e)[0] : e;
        const r = t || 100;
        return function(e) {
          return { property: e, el: n, svg: we(n), totalLength: ye(n) * (r / 100) };
        };
      }),
      (Re.setDashoffset = function(e) {
        const t = ye(e);
        return e.setAttribute('stroke-dasharray', t), t;
      }),
      (Re.stagger = function(e, t) {
        void 0 === t && (t = {});
        const n = t.direction || 'normal';
        const r = t.easing ? Q(t.easing) : null;
        const i = t.grid;
        const a = t.axis;
        let o = t.from || 0;
        const l = 'first' === o;
        const s = 'center' === o;
        const c = 'last' === o;
        const u = Z.arr(e);
        const d = u ? parseFloat(e[0]) : parseFloat(e);
        const f = u ? parseFloat(e[1]) : 0;
        const m = le(u ? e[1] : e) || 0;
        const p = t.start || 0 + (u ? d : 0);
        let h = [];
        let g = 0;
        return function(e, t, v) {
          if ((l && (o = 0), s && (o = (v - 1) / 2), c && (o = v - 1), !h.length)) {
            for (let x = 0; x < v; x++) {
              if (i) {
                const b = s ? (i[0] - 1) / 2 : o % i[0];
                const y = s ? (i[1] - 1) / 2 : Math.floor(o / i[0]);
                const w = b - (x % i[0]);
                const E = y - Math.floor(x / i[0]);
                let k = Math.sqrt(w * w + E * E);
                'x' === a && (k = -w), 'y' === a && (k = -E), h.push(k);
              } else {h.push(Math.abs(o - x));}
              g = Math.max.apply(Math, h);
            }
            r &&
                (h = h.map(function(e) {
                  return r(e / g) * g;
                })),
            'reverse' === n &&
                  (h = h.map(function(e) {
                    return a ? (e < 0 ? -1 * e : -e) : Math.abs(g - e);
                  }));
          }
          return p + (u ? (f - d) / g : d) * (Math.round(100 * h[t]) / 100) + m;
        };
      }),
      (Re.timeline = function(e) {
        void 0 === e && (e = {});
        const t = Re(e);
        return (
          (t.duration = 0),
          (t.add = function(n, r) {
            const i = Ie.indexOf(t);
            const a = t.children;
            function o(e) {
              e.passThrough = !0;
            }
            i > -1 && Ie.splice(i, 1);
            for (let l = 0; l < a.length; l++) {o(a[l]);}
            const s = ae(n, ie(R, e));
            s.targets = s.targets || e.targets;
            const c = t.duration;
            (s.autoplay = !1),
            (s.direction = t.direction),
            (s.timelineOffset = Z.und(r) ? c : ge(r, c)),
            o(t),
            t.seek(s.timelineOffset);
            const u = Re(s);
            o(u), a.push(u);
            const d = Ae(a, e);
            return (
              (t.delay = d.delay),
              (t.endDelay = d.endDelay),
              (t.duration = d.duration),
              t.seek(0),
              t.reset(),
              t.autoplay && t.play(),
              t
            );
          }),
          t
        );
      }),
      (Re.easing = Q),
      (Re.penner = J),
      (Re.random = function(e, t) {
        return Math.floor(Math.random() * (t - e + 1)) + e;
      });
      const Fe = Re;
      const He = n(9086);
      const qe = c.default.div.withConfig({
        displayName: 'loader__StyledLoader',
        componentId: 'sc-177se4j-0',
      })(
        [
          '',
          ';position:fixed;top:0;bottom:0;left:0;right:0;width:100%;height:100%;background-color:var(--dark-navy);z-index:99;.logo-wrapper{width:max-content;max-width:100px;transition:var(--transition);opacity:',
          ';svg{display:block;width:100%;height:100%;margin:0 auto;fill:none;user-select:none;#B{opacity:0;}}}',
        ],
        function(e) {
          return e.theme.mixins.flexCenter;
        },
        function(e) {
          return e.isMounted ? 1 : 0;
        },
      );
      var Ze = function(e) {
        const t = e.finishLoading;
        const n = (0, r.useState)(!1);
        const a = n[0];
        const o = n[1];
        return (
          (0, r.useEffect)(function() {
            const e = setTimeout(function() {
              return o(!0);
            }, 10);
            return (
              Fe.timeline({
                complete: function() {
                  return t();
                },
              })
                .add({
                  targets: '#logo path',
                  delay: 300,
                  duration: 1500,
                  easing: 'easeInOutQuart',
                  strokeDashoffset: [Fe.setDashoffset, 0],
                })
                .add({ targets: '#logo #B', duration: 700, easing: 'easeInOutQuart', opacity: 1 })
                .add({
                  targets: '#logo',
                  delay: 500,
                  duration: 300,
                  easing: 'easeInOutQuart',
                  opacity: 0,
                  scale: 0.1,
                })
                .add({
                  targets: '.loader',
                  duration: 200,
                  easing: 'easeInOutQuart',
                  opacity: 0,
                  zIndex: -1,
                }),
              function() {
                return clearTimeout(e);
              }
            );
          }, []),
          r.createElement(
            qe,
            { className: 'loader', isMounted: a },
            r.createElement(i.q, { bodyAttributes: { class: 'hidden' } }),
            r.createElement('div', { className: 'logo-wrapper' }, r.createElement(He.pA, null)),
          )
        );
      };
      const We = n(5813);
      const Ve = n(7428);
      const Ye = n(537);
      const Ge = n(4165);
      const Ue = n(3082);
      const $e = c.default.header.withConfig({
        displayName: 'nav__StyledHeader',
        componentId: 'sc-ghklvd-0',
      })(
        [
          '',
          ';position:fixed;top:0;z-index:11;padding:0px 50px;width:100%;height:var(--nav-height);background-color:rgba(10,25,47,0.85);filter:none !important;pointer-events:auto !important;user-select:auto !important;backdrop-filter:blur(10px);transition:var(--transition);@media (max-width:1080px){padding:0 40px;}@media (max-width:768px){padding:0 25px;}@media (prefers-reduced-motion:no-preference){',
          ';',
          ';}',
        ],
        function(e) {
          return e.theme.mixins.flexBetween;
        },
        function(e) {
          return (
            'up' === e.scrollDirection &&
              !e.scrolledToTop &&
              (0, c.css)([
                'height:var(--nav-scroll-height);transform:translateY(0px);background-color:rgba(10,25,47,0.85);box-shadow:0 10px 30px -10px var(--navy-shadow);',
              ])
          );
        },
        function(e) {
          return (
            'down' === e.scrollDirection &&
              !e.scrolledToTop &&
              (0, c.css)([
                'height:var(--nav-scroll-height);transform:translateY(calc(var(--nav-scroll-height) * -1));box-shadow:0 10px 30px -10px var(--navy-shadow);',
              ])
          );
        },
      );
      const Je = c.default.nav.withConfig({
        displayName: 'nav__StyledNav',
        componentId: 'sc-ghklvd-1',
      })(
        [
          '',
          ';position:relative;width:100%;color:var(--lightest-slate);font-family:var(--font-mono);counter-reset:item 0;z-index:12;.logo{',
          ';a{color:var(--green);width:42px;height:42px;&:hover,&:focus{svg{fill:var(--green-tint);}}svg{fill:none;transition:var(--transition);user-select:none;}}}',
        ],
        function(e) {
          return e.theme.mixins.flexBetween;
        },
        function(e) {
          return e.theme.mixins.flexCenter;
        },
      );
      const Qe = c.default.div.withConfig({
        displayName: 'nav__StyledLinks',
        componentId: 'sc-ghklvd-2',
      })(
        [
          'display:flex;align-items:center;@media (max-width:768px){display:none;}ol{',
          ';padding:0;margin:0;list-style:none;li{margin:0 5px;position:relative;counter-increment:item 1;font-size:var(--fz-xs);a{padding:10px;&:before{content:\'0\' counter(item) \'.\';margin-right:5px;color:var(--green);font-size:var(--fz-xxs);text-align:right;}}}}.resume-button{',
          ';margin-left:15px;font-size:var(--fz-xs);}',
        ],
        function(e) {
          return e.theme.mixins.flexBetween;
        },
        function(e) {
          return e.theme.mixins.smallButton;
        },
      );
      var Ke = function(e) {
        const t = e.isHome;
        const n = (0, r.useState)(!t);
        const i = n[0];
        const a = n[1];
        const l = (0, Ue.C7)('down');
        const s = (0, r.useState)(!0);
        const c = s[0];
        const u = s[1];
        const d = (0, Ue.Tb)();
        const f = function() {
          u(window.pageYOffset < 50);
        };
        (0, r.useEffect)(function() {
          if (!d) {
            const e = setTimeout(function() {
              a(!0);
            }, 100);
            return (
              window.addEventListener('scroll', f),
              function() {
                clearTimeout(e), window.removeEventListener('scroll', f);
              }
            );
          }
        }, []);
        const m = t ? Ge.Cs : 0;
        const p = t ? 'fade' : '';
        const h = t ? 'fadedown' : '';
        const g = r.createElement(
          'div',
          { className: 'logo', tabIndex: '-1' },
          t
            ? r.createElement(
              'a',
              { href: '/', 'aria-label': 'home' },
              r.createElement(He.mp, null),
            )
            : r.createElement(
              o.Link,
              { to: '/', 'aria-label': 'home' },
              r.createElement(He.mp, null),
            ),
        );
        const v = r.createElement(
          'a',
          {
            className: 'resume-button',
            href: '/resume.pdf',
            target: '_blank',
            rel: 'noopener noreferrer',
          },
          'Resume',
        );
        return r.createElement(
          $e,
          { scrollDirection: l, scrolledToTop: c },
          r.createElement(
            Je,
            null,
            d
              ? r.createElement(
                r.Fragment,
                null,
                g,
                r.createElement(
                  Qe,
                  null,
                  r.createElement(
                    'ol',
                    null,
                    Ye.navLinks &&
                          Ye.navLinks.map(function(e, t) {
                            const n = e.url;
                            const i = e.name;
                            return r.createElement(
                              'li',
                              { key: t },
                              r.createElement(o.Link, { to: n }, i),
                            );
                          }),
                  ),
                  r.createElement('div', null, v),
                ),
                r.createElement(rt, null),
              )
              : r.createElement(
                r.Fragment,
                null,
                r.createElement(
                  We.Z,
                  { component: null },
                  i &&
                        r.createElement(
                          Ve.Z,
                          { classNames: p, timeout: m },
                          r.createElement(r.Fragment, null, g),
                        ),
                ),
                r.createElement(
                  Qe,
                  null,
                  r.createElement(
                    'ol',
                    null,
                    r.createElement(
                      We.Z,
                      { component: null },
                      i &&
                            Ye.navLinks &&
                            Ye.navLinks.map(function(e, n) {
                              const i = e.url;
                              const a = e.name;
                              return r.createElement(
                                Ve.Z,
                                { key: n, classNames: h, timeout: m },
                                r.createElement(
                                  'li',
                                  { key: n, style: { transitionDelay: `${t ? 100 * n : 0  }ms` } },
                                  r.createElement(o.Link, { to: i }, a),
                                ),
                              );
                            }),
                    ),
                  ),
                  r.createElement(
                    We.Z,
                    { component: null },
                    i &&
                          r.createElement(
                            Ve.Z,
                            { classNames: h, timeout: m },
                            r.createElement(
                              'div',
                              {
                                style: {
                                  transitionDelay: `${t ? 100 * Ye.navLinks.length : 0  }ms`,
                                },
                              },
                              v,
                            ),
                          ),
                  ),
                ),
                r.createElement(
                  We.Z,
                  { component: null },
                  i &&
                        r.createElement(
                          Ve.Z,
                          { classNames: p, timeout: m },
                          r.createElement(rt, null),
                        ),
                ),
              ),
          ),
        );
      };
      const Xe = n(5785);
      const et = c.default.div.withConfig({
        displayName: 'menu__StyledMenu',
        componentId: 'sc-sdn9y6-0',
      })(['display:none;@media (max-width:768px){display:block;}']);
      const tt = c.default.button.withConfig({
        displayName: 'menu__StyledHamburgerButton',
        componentId: 'sc-sdn9y6-1',
      })(
        [
          'display:none;@media (max-width:768px){',
          ';position:relative;z-index:10;margin-right:-15px;padding:15px;border:0;background-color:transparent;color:inherit;text-transform:none;transition-timing-function:linear;transition-duration:0.15s;transition-property:opacity,filter;}.ham-box{display:inline-block;position:relative;width:var(--hamburger-width);height:24px;}.ham-box-inner{position:absolute;top:50%;right:0;width:var(--hamburger-width);height:2px;border-radius:var(--border-radius);background-color:var(--green);transition-duration:0.22s;transition-property:transform;transition-delay:',
          ';transform:rotate(',
          ');transition-timing-function:cubic-bezier( ',
          ' );&:before,&:after{content:\'\';display:block;position:absolute;left:auto;right:0;width:var(--hamburger-width);height:2px;border-radius:4px;background-color:var(--green);transition-timing-function:ease;transition-duration:0.15s;transition-property:transform;}&:before{width:',
          ';top:',
          ';opacity:',
          ';transition:',
          ';}&:after{width:',
          ';bottom:',
          ';transform:rotate(',
          ');transition:',
          ';}}',
        ],
        function(e) {
          return e.theme.mixins.flexCenter;
        },
        function(e) {
          return e.menuOpen ? '0.12s' : '0s';
        },
        function(e) {
          return e.menuOpen ? '225deg' : '0deg';
        },
        function(e) {
          return e.menuOpen ? '0.215, 0.61, 0.355, 1' : '0.55, 0.055, 0.675, 0.19';
        },
        function(e) {
          return e.menuOpen ? '100%' : '120%';
        },
        function(e) {
          return e.menuOpen ? '0' : '-10px';
        },
        function(e) {
          return e.menuOpen ? 0 : 1;
        },
        function(e) {
          return e.menuOpen ? 'var(--ham-before-active)' : 'var(--ham-before)';
        },
        function(e) {
          return e.menuOpen ? '100%' : '80%';
        },
        function(e) {
          return e.menuOpen ? '0' : '-10px';
        },
        function(e) {
          return e.menuOpen ? '-90deg' : '0';
        },
        function(e) {
          return e.menuOpen ? 'var(--ham-after-active)' : 'var(--ham-after)';
        },
      );
      const nt = c.default.aside.withConfig({
        displayName: 'menu__StyledSidebar',
        componentId: 'sc-sdn9y6-2',
      })(
        [
          'display:none;@media (max-width:768px){',
          ';position:fixed;top:0;bottom:0;right:0;padding:50px 10px;width:min(75vw,400px);height:100vh;outline:0;background-color:var(--light-navy);box-shadow:-10px 0px 30px -15px var(--navy-shadow);z-index:9;transform:translateX(',
          'vw);visibility:',
          ';transition:var(--transition);}nav{',
          ';width:100%;flex-direction:column;color:var(--lightest-slate);font-family:var(--font-mono);text-align:center;}ol{padding:0;margin:0;list-style:none;width:100%;li{position:relative;margin:0 auto 20px;counter-increment:item 1;font-size:clamp(var(--fz-sm),4vw,var(--fz-lg));@media (max-width:600px){margin:0 auto 10px;}&:before{content:\'0\' counter(item) \'.\';display:block;margin-bottom:5px;color:var(--green);font-size:var(--fz-sm);}}a{',
          ';width:100%;padding:3px 20px 20px;}}.resume-link{',
          ';padding:18px 50px;margin:10% auto 0;width:max-content;}',
        ],
        function(e) {
          return e.theme.mixins.flexCenter;
        },
        function(e) {
          return e.menuOpen ? 0 : 100;
        },
        function(e) {
          return e.menuOpen ? 'visible' : 'hidden';
        },
        function(e) {
          return e.theme.mixins.flexBetween;
        },
        function(e) {
          return e.theme.mixins.link;
        },
        function(e) {
          return e.theme.mixins.bigButton;
        },
      );
      var rt = function() {
        let e;
        let t;
        let n;
        const a = (0, r.useState)(!1);
        const l = a[0];
        const s = a[1];
        const c = (0, r.useRef)(null);
        const u = (0, r.useRef)(null);
        const d = function(r) {
          switch (r.key) {
            case Ge.nx.ESCAPE:
            case Ge.nx.ESCAPE_IE11:
              s(!1);
              break;
            case Ge.nx.TAB:
              if (e && 1 === e.length) {
                r.preventDefault();
                break;
              }
              r.shiftKey
                ? (function(e) {
                  document.activeElement === t && (e.preventDefault(), n.focus());
                })(r)
                : (function(e) {
                  document.activeElement === n && (e.preventDefault(), t.focus());
                })(r);
          }
        };
        const f = function(e) {
          e.currentTarget.innerWidth > 768 && s(!1);
        };
        (0, r.useEffect)(function() {
          return (
            document.addEventListener('keydown', d),
            window.addEventListener('resize', f),
            (e = [c.current].concat((0, Xe.Z)(Array.from(u.current.querySelectorAll('a'))))),
            (t = e[0]),
            (n = e[e.length - 1]),
            function() {
              document.removeEventListener('keydown', d), window.removeEventListener('resize', f);
            }
          );
        }, []);
        const m = (0, r.useRef)();
        return (
          (0, Ue.t$)(m, function() {
            return s(!1);
          }),
          r.createElement(
            et,
            null,
            r.createElement(i.q, null, r.createElement('body', { className: l ? 'blur' : '' })),
            r.createElement(
              'div',
              { ref: m },
              r.createElement(
                tt,
                {
                  onClick: function() {
                    return s(!l);
                  },
                  menuOpen: l,
                  ref: c,
                  'aria-label': 'Menu',
                },
                r.createElement(
                  'div',
                  { className: 'ham-box' },
                  r.createElement('div', { className: 'ham-box-inner' }),
                ),
              ),
              r.createElement(
                nt,
                { menuOpen: l, 'aria-hidden': !l, tabIndex: l ? 1 : -1 },
                r.createElement(
                  'nav',
                  { ref: u },
                  Ye.navLinks &&
                      r.createElement(
                        'ol',
                        null,
                        Ye.navLinks.map(function(e, t) {
                          const n = e.url;
                          const i = e.name;
                          return r.createElement(
                            'li',
                            { key: t },
                            r.createElement(
                              o.Link,
                              {
                                to: n,
                                onClick: function() {
                                  return s(!1);
                                },
                              },
                              i,
                            ),
                          );
                        }),
                      ),
                  r.createElement(
                    'a',
                    { href: '/resume.pdf', className: 'resume-link' },
                    'Resume',
                  ),
                ),
              ),
            ),
          )
        );
      };
      const it = c.default.div.withConfig({
        displayName: 'side__StyledSideElement',
        componentId: 'sc-1duznzb-0',
      })(
        [
          'width:40px;position:fixed;bottom:0;left:',
          ';right:',
          ';z-index:10;color:var(--light-slate);@media (max-width:1080px){left:',
          ';right:',
          ';}@media (max-width:768px){display:none;}',
        ],
        function(e) {
          return 'left' === e.orientation ? '40px' : 'auto';
        },
        function(e) {
          return 'left' === e.orientation ? 'auto' : '40px';
        },
        function(e) {
          return 'left' === e.orientation ? '20px' : 'auto';
        },
        function(e) {
          return 'left' === e.orientation ? 'auto' : '20px';
        },
      );
      var at = function(e) {
        const t = e.children;
        const n = e.isHome;
        const i = e.orientation;
        const a = (0, r.useState)(!n);
        const o = a[0];
        const l = a[1];
        const s = (0, Ue.Tb)();
        return (
          (0, r.useEffect)(function() {
            if (n && !s) {
              const e = setTimeout(function() {
                return l(!0);
              }, Ge.Cs);
              return function() {
                return clearTimeout(e);
              };
            }
          }, []),
          r.createElement(
            it,
            { orientation: i },
            s
              ? r.createElement(r.Fragment, null, t)
              : r.createElement(
                We.Z,
                { component: null },
                o &&
                      r.createElement(
                        Ve.Z,
                        { classNames: n ? 'fade' : '', timeout: n ? Ge.Cs : 0 },
                        t,
                      ),
              ),
          )
        );
      };
      const ot = c.default.ul.withConfig({
        displayName: 'social__StyledSocialList',
        componentId: 'sc-anu6nt-0',
      })([
        'display:flex;flex-direction:column;align-items:center;margin:0;padding:0;list-style:none;&:after{content:\'\';display:block;width:1px;height:90px;margin:0 auto;background-color:var(--light-slate);}li{&:last-of-type{margin-bottom:20px;}a{padding:10px;&:hover,&:focus{transform:translateY(-3px);}svg{width:20px;height:20px;}}}',
      ]);
      var lt = function(e) {
        const t = e.isHome;
        return r.createElement(
          at,
          { isHome: t, orientation: 'left' },
          r.createElement(
            ot,
            null,
            Ye.socialMedia &&
                Ye.socialMedia.map(function(e, t) {
                  const n = e.url;
                  const i = e.name;
                  return r.createElement(
                    'li',
                    { key: t },
                    r.createElement(
                      'a',
                      { href: n, 'aria-label': i, target: '_blank', rel: 'noreferrer' },
                      r.createElement(He.JO, { name: i }),
                    ),
                  );
                }),
          ),
        );
      };
      const st = c.default.div.withConfig({
        displayName: 'email__StyledLinkWrapper',
        componentId: 'sc-2epoq-0',
      })([
        'display:flex;flex-direction:column;align-items:center;position:relative;&:after{content:\'\';display:block;width:1px;height:90px;margin:0 auto;background-color:var(--light-slate);}a{margin:20px auto;padding:10px;font-family:var(--font-mono);font-size:var(--fz-xxs);line-height:var(--fz-lg);letter-spacing:0.1em;writing-mode:vertical-rl;&:hover,&:focus{transform:translateY(-3px);}}',
      ]);
      var ct = function(e) {
        const t = e.isHome;
        return r.createElement(
          at,
          { isHome: t, orientation: 'right' },
          r.createElement(
            st,
            null,
            r.createElement('a', { href: `mailto:${  Ye.email}` }, Ye.email),
          ),
        );
      };
      const ut = c.default.footer.withConfig({
        displayName: 'footer__StyledFooter',
        componentId: 'sc-4jwnt4-0',
      })(
        [
          '',
          ';flex-direction:column;height:auto;min-height:70px;padding:15px;text-align:center;',
        ],
        function(e) {
          return e.theme.mixins.flexCenter;
        },
      );
      const dt = c.default.div.withConfig({
        displayName: 'footer__StyledSocialLinks',
        componentId: 'sc-4jwnt4-1',
      })(
        [
          'display:none;@media (max-width:768px){display:block;width:100%;max-width:270px;margin:0 auto 10px;color:var(--light-slate);}ul{',
          ';padding:0;margin:0;list-style:none;a{padding:10px;svg{width:20px;height:20px;}}}',
        ],
        function(e) {
          return e.theme.mixins.flexBetween;
        },
      );
      const ft = c.default.div.withConfig({
        displayName: 'footer__StyledCredit',
        componentId: 'sc-4jwnt4-2',
      })([
        'color:var(--light-slate);font-family:var(--font-mono);font-size:var(--fz-xxs);line-height:1;a{padding:10px;}.github-stats{margin-top:10px;& > span{display:inline-flex;align-items:center;margin:0 7px;}svg{display:inline-block;margin-right:5px;width:14px;height:14px;}}',
      ]);
      var mt = function() {
        const e = (0, r.useState)({ stars: null, forks: null });
        const t = e[0];
        const n = e[1];
        return (
          (0, r.useEffect)(function() {
            fetch('https://api.github.com/repos/bchiang7/v4')
              .then(function(e) {
                return e.json();
              })
              .then(function(e) {
                const t = e.stargazers_count;
                const r = e.forks_count;
                n({ stars: t, forks: r });
              })
              .catch(function(e) {
                return console.error(e);
              });
          }, []),
          r.createElement(
            ut,
            null,
            r.createElement(
              dt,
              null,
              r.createElement(
                'ul',
                null,
                Ye.socialMedia &&
                    Ye.socialMedia.map(function(e, t) {
                      const n = e.name;
                      const i = e.url;
                      return r.createElement(
                        'li',
                        { key: t },
                        r.createElement(
                          'a',
                          { href: i, 'aria-label': n },
                          r.createElement(He.JO, { name: n }),
                        ),
                      );
                    }),
              ),
            ),
            r.createElement(
              ft,
              { tabindex: '-1' },
              r.createElement(
                'a',
                { href: 'https://github.com/bchiang7/v4' },
                r.createElement('div', null, 'Designed & Built by Brittany Chiang'),
                t.stars &&
                    t.forks &&
                    r.createElement(
                      'div',
                      { className: 'github-stats' },
                      r.createElement(
                        'span',
                        null,
                        r.createElement(He.JO, { name: 'Star' }),
                        r.createElement('span', null, t.stars.toLocaleString()),
                      ),
                      r.createElement(
                        'span',
                        null,
                        r.createElement(He.JO, { name: 'Fork' }),
                        r.createElement('span', null, t.forks.toLocaleString()),
                      ),
                    ),
              ),
            ),
          )
        );
      };
      const pt = c.default.section.withConfig({
        displayName: 'hero__StyledHeroSection',
        componentId: 'sc-116xg8t-0',
      })(
        [
          '',
          ';flex-direction:column;align-items:flex-start;min-height:100vh;height:100vh;padding:0;@media (max-height:700px) and (min-width:700px),(max-width:360px){height:auto;padding-top:var(--nav-height);}h1{margin:0 0 30px 4px;color:var(--green);font-family:var(--font-mono);font-size:clamp(var(--fz-sm),5vw,var(--fz-md));font-weight:400;@media (max-width:480px){margin:0 0 20px 2px;}}h3{margin-top:5px;color:var(--slate);line-height:0.9;}p{margin:20px 0 0;max-width:540px;}.email-link{',
          ';margin-top:50px;}',
        ],
        function(e) {
          return e.theme.mixins.flexCenter;
        },
        function(e) {
          return e.theme.mixins.bigButton;
        },
      );
      var ht = function() {
        const e = (0, r.useState)(!1);
        const t = e[0];
        const n = e[1];
        const i = (0, Ue.Tb)();
        (0, r.useEffect)(function() {
          if (!i) {
            const e = setTimeout(function() {
              return n(!0);
            }, Ge.fb);
            return function() {
              return clearTimeout(e);
            };
          }
        }, []);
        const a = [
          r.createElement('h1', null, 'Hi, my name is'),
          r.createElement('h2', { className: 'big-heading' }, 'Syarif Ridho.'),
          r.createElement('h3', { className: 'big-heading' }, 'I do software quality testing.'),
          r.createElement(
            r.Fragment,
            null,
            r.createElement(
              'p',
              null,
              'I am Quality Assurance doing software quality Currently, looking for a job in',
              ' ',
              r.createElement(
                'a',
                {
                  href: 'https://www.linkedin.com/in/syarif-ridhohidayatulloh/',
                  target: '_blank',
                  rel: 'noreferrer',
                },
                'Software Quality Assurance',
              ),
              '.',
            ),
          ),
          r.createElement(
            'a',
            { className: 'email-link', href: '#about', rel: 'noreferrer' },
            'Find me!',
          ),
        ];
        return r.createElement(
          pt,
          null,
          i
            ? r.createElement(
              r.Fragment,
              null,
              a.map(function(e, t) {
                return r.createElement('div', { key: t }, e);
              }),
            )
            : r.createElement(
              We.Z,
              { component: null },
              t &&
                    a.map(function(e, t) {
                      return r.createElement(
                        Ve.Z,
                        { key: t, classNames: 'fadeup', timeout: Ge.Cs },
                        r.createElement('div', { style: { transitionDelay: `${t + 1  }00ms` } }, e),
                      );
                    }),
            ),
        );
      };
      const gt = n(6125);
      const vt = n(355);
      const xt = c.default.section.withConfig({
        displayName: 'about__StyledAboutSection',
        componentId: 'sc-1ownso9-0',
      })([
        'max-width:900px;.inner{display:grid;grid-template-columns:3fr 2fr;grid-gap:50px;@media (max-width:768px){display:block;}}',
      ]);
      const bt = c.default.div.withConfig({
        displayName: 'about__StyledText',
        componentId: 'sc-1ownso9-1',
      })([
        'ul.skills-list{display:grid;grid-template-columns:repeat(2,minmax(140px,200px));grid-gap:0 10px;padding:0;margin:20px 0 0 0;overflow:hidden;list-style:none;li{position:relative;margin-bottom:10px;padding-left:20px;font-family:var(--font-mono);font-size:var(--fz-xs);&:before{content:\'▹\';position:absolute;left:0;color:var(--green);font-size:var(--fz-sm);line-height:12px;}}}',
      ]);
      const yt = c.default.div.withConfig({
        displayName: 'about__StyledPic',
        componentId: 'sc-1ownso9-2',
      })(
        [
          'position:relative;max-width:300px;@media (max-width:768px){margin:50px auto 0;width:70%;}.wrapper{',
          ';display:block;position:relative;width:100%;border-radius:var(--border-radius);background-color:var(--green);&:hover,&:focus{outline:0;&:after{top:15px;left:15px;}.img{filter:none;mix-blend-mode:normal;}}.img{position:relative;border-radius:var(--border-radius);mix-blend-mode:multiply;filter:grayscale(100%) contrast(1);transition:var(--transition);}&:before,&:after{content:\'\';display:block;position:absolute;width:100%;height:100%;border-radius:var(--border-radius);transition:var(--transition);}&:before{top:0;left:0;background-color:var(--navy);mix-blend-mode:screen;}&:after{border:2px solid var(--green);top:20px;left:20px;z-index:-1;}}',
        ],
        function(e) {
          return e.theme.mixins.boxShadow;
        },
      );
      var wt = function() {
        const e = (0, r.useRef)(null);
        const t = (0, Ue.Tb)();
        (0, r.useEffect)(function() {
          t || vt.Z.reveal(e.current, (0, Ye.srConfig)());
        }, []);
        const i = [
          'Python',
          'Selenium',
          'Appium',
          'JMeter',
          'Postman',
          'Cypress.io',
          'Katalon Studio',
          'Git',
          'Github',
        ];
        return r.createElement(
          xt,
          { id: 'about', ref: e },
          r.createElement('h2', { className: 'numbered-heading' }, 'About Me'),
          r.createElement(
            'div',
            { className: 'inner' },
            r.createElement(
              bt,
              null,
              r.createElement(
                'div',
                null,
                r.createElement(
                  'p',
                  null,
                  'Hello! My name is Syarif Ridhohidayatulloh and I am an experienced QA professional skilled in both manual and automated testing. I am dedicated to continuous learning and implementing the latest trends in software development to ensure that the products I work on meet the highest standards of quality. My passion for testing and software development began 2022 when I started exploring various testing techniques and tools. Over the years, I have gained expertise in Python, Selenium, Appium, JMeter, Postman, Cypress.io, Github, Katalon Studio, and I am always looking for new challenges to further enhance my skills.',
                ),
                r.createElement('p', null, 'Here are a few technologies :'),
              ),
              r.createElement(
                'ul',
                { className: 'skills-list' },
                i &&
                    i.map(function(e, t) {
                      return r.createElement('li', { key: t }, e);
                    }),
              ),
            ),
            r.createElement(
              yt,
              null,
              r.createElement(
                'div',
                { className: 'wrapper' },
                r.createElement(gt.S, {
                  className: 'img',
                  src: '../../images/me.png',
                  width: 500,
                  quality: 95,
                  formats: ['AUTO', 'WEBP', 'AVIF'],
                  alt: 'Headshot',
                  __imageData: n(1202),
                }),
              ),
            ),
          ),
        );
      };
      const Et = c.default.section.withConfig({
        displayName: 'jobs__StyledJobsSection',
        componentId: 'sc-59sdss-0',
      })([
        'max-width:700px;.inner{display:flex;@media (max-width:600px){display:block;}@media (min-width:700px){min-height:340px;}}',
      ]);
      const kt = c.default.div.withConfig({
        displayName: 'jobs__StyledTabList',
        componentId: 'sc-59sdss-1',
      })([
        'position:relative;z-index:3;width:max-content;padding:0;margin:0;list-style:none;@media (max-width:600px){display:flex;overflow-x:auto;width:calc(100% + 100px);padding-left:50px;margin-left:-50px;margin-bottom:30px;}@media (max-width:480px){width:calc(100% + 50px);padding-left:25px;margin-left:-25px;}li{&:first-of-type{@media (max-width:600px){margin-left:50px;}@media (max-width:480px){margin-left:25px;}}&:last-of-type{@media (max-width:600px){padding-right:50px;}@media (max-width:480px){padding-right:25px;}}}',
      ]);
      const Ct = c.default.button.withConfig({
        displayName: 'jobs__StyledTabButton',
        componentId: 'sc-59sdss-2',
      })(
        [
          '',
          ';display:flex;align-items:center;width:100%;height:var(--tab-height);padding:0 20px 2px;border-left:2px solid var(--lightest-navy);background-color:transparent;color:',
          ';font-family:var(--font-mono);font-size:var(--fz-xs);text-align:left;white-space:nowrap;@media (max-width:768px){padding:0 15px 2px;}@media (max-width:600px){',
          ';min-width:120px;padding:0 15px;border-left:0;border-bottom:2px solid var(--lightest-navy);text-align:center;}&:hover,&:focus{background-color:var(--light-navy);}',
        ],
        function(e) {
          return e.theme.mixins.link;
        },
        function(e) {
          return e.isActive ? 'var(--green)' : 'var(--slate)';
        },
        function(e) {
          return e.theme.mixins.flexCenter;
        },
      );
      const Tt = c.default.div.withConfig({
        displayName: 'jobs__StyledHighlight',
        componentId: 'sc-59sdss-3',
      })(
        [
          'position:absolute;top:0;left:0;z-index:10;width:2px;height:var(--tab-height);border-radius:var(--border-radius);background:var(--green);transform:translateY(calc(',
          ' * var(--tab-height)));transition:transform 0.25s cubic-bezier(0.645,0.045,0.355,1);transition-delay:0.1s;@media (max-width:600px){top:auto;bottom:0;width:100%;max-width:var(--tab-width);height:2px;margin-left:50px;transform:translateX(calc(',
          ' * var(--tab-width)));}@media (max-width:480px){margin-left:25px;}',
        ],
        function(e) {
          return e.activeTabId;
        },
        function(e) {
          return e.activeTabId;
        },
      );
      const St = c.default.div.withConfig({
        displayName: 'jobs__StyledTabPanels',
        componentId: 'sc-59sdss-4',
      })([
        'position:relative;width:100%;margin-left:20px;@media (max-width:600px){margin-left:0;}',
      ]);
      const Lt = c.default.div.withConfig({
        displayName: 'jobs__StyledTabPanel',
        componentId: 'sc-59sdss-5',
      })(
        [
          'width:100%;height:auto;padding:10px 5px;ul{',
          ';}h3{margin-bottom:2px;font-size:var(--fz-xxl);font-weight:500;line-height:1.3;.company{color:var(--green);}}.range{margin-bottom:25px;color:var(--light-slate);font-family:var(--font-mono);font-size:var(--fz-xs);}',
        ],
        function(e) {
          return e.theme.mixins.fancyList;
        },
      );
      var Ot = function() {
        const e = (0, o.useStaticQuery)('2009693873').jobs.edges;
        const t = (0, r.useState)(0);
        const n = t[0];
        const i = t[1];
        const a = (0, r.useState)(null);
        const l = a[0];
        const s = a[1];
        const c = (0, r.useRef)([]);
        const u = (0, r.useRef)(null);
        const d = (0, Ue.Tb)();
        (0, r.useEffect)(function() {
          d || vt.Z.reveal(u.current, (0, Ye.srConfig)());
        }, []);
        (0, r.useEffect)(
          function() {
            c.current[l]
              ? c.current[l].focus()
              : (l >= c.current.length && s(0), l < 0 && s(c.current.length - 1));
          },
          [l],
        );
        return r.createElement(
          Et,
          { id: 'jobs', ref: u },
          r.createElement('h2', { className: 'numbered-heading' }, 'Where I’ve Worked'),
          r.createElement(
            'div',
            { className: 'inner' },
            r.createElement(
              kt,
              {
                role: 'tablist',
                'aria-label': 'Job tabs',
                onKeyDown: function(e) {
                  return (function(e) {
                    switch (e.key) {
                      case Ge.nx.ARROW_UP:
                        e.preventDefault(), s(l - 1);
                        break;
                      case Ge.nx.ARROW_DOWN:
                        e.preventDefault(), s(l + 1);
                    }
                  })(e);
                },
              },
              e &&
                  e.map(function(e, t) {
                    const a = e.node.frontmatter.company;
                    return r.createElement(
                      Ct,
                      {
                        key: t,
                        isActive: n === t,
                        onClick: function() {
                          return i(t);
                        },
                        ref: function(e) {
                          return (c.current[t] = e);
                        },
                        id: `tab-${  t}`,
                        role: 'tab',
                        tabIndex: n === t ? '0' : '-1',
                        'aria-selected': n === t,
                        'aria-controls': `panel-${  t}`,
                      },
                      r.createElement('span', null, a),
                    );
                  }),
              r.createElement(Tt, { activeTabId: n }),
            ),
            r.createElement(
              St,
              null,
              e &&
                  e.map(function(e, t) {
                    const i = e.node;
                    const a = i.frontmatter;
                    const o = i.html;
                    const l = a.title;
                    const s = a.url;
                    const c = a.company;
                    const u = a.range;
                    return r.createElement(
                      Ve.Z,
                      { key: t, in: n === t, timeout: 250, classNames: 'fade' },
                      r.createElement(
                        Lt,
                        {
                          id: `panel-${  t}`,
                          role: 'tabpanel',
                          tabIndex: n === t ? '0' : '-1',
                          'aria-labelledby': `tab-${  t}`,
                          'aria-hidden': n !== t,
                          hidden: n !== t,
                        },
                        r.createElement(
                          'h3',
                          null,
                          r.createElement('span', null, l),
                          r.createElement(
                            'span',
                            { className: 'company' },
                            ' @ ',
                            r.createElement('a', { href: s, className: 'inline-link' }, c),
                          ),
                        ),
                        r.createElement('p', { className: 'range' }, u),
                        r.createElement('div', { dangerouslySetInnerHTML: { __html: o } }),
                      ),
                    );
                  }),
            ),
          ),
        );
      };
      const Nt = c.default.ul.withConfig({
        displayName: 'featured__StyledProjectsGrid',
        componentId: 'sc-ywnbqt-0',
      })(['', ';a{position:relative;z-index:1;}'], function(e) {
        return e.theme.mixins.resetList;
      });
      const jt = c.default.li.withConfig({
        displayName: 'featured__StyledProject',
        componentId: 'sc-ywnbqt-1',
      })(
        [
          'position:relative;display:grid;grid-gap:10px;grid-template-columns:repeat(12,1fr);align-items:center;@media (max-width:768px){',
          ';}&:not(:last-of-type){margin-bottom:100px;@media (max-width:768px){margin-bottom:70px;}@media (max-width:480px){margin-bottom:30px;}}&:nth-of-type(odd){.project-content{grid-column:7 / -1;text-align:right;@media (max-width:1080px){grid-column:5 / -1;}@media (max-width:768px){grid-column:1 / -1;padding:40px 40px 30px;text-align:left;}@media (max-width:480px){padding:25px 25px 20px;}}.project-tech-list{justify-content:flex-end;@media (max-width:768px){justify-content:flex-start;}li{margin:0 0 5px 20px;@media (max-width:768px){margin:0 10px 5px 0;}}}.project-links{justify-content:flex-end;margin-left:0;margin-right:-10px;@media (max-width:768px){justify-content:flex-start;margin-left:-10px;margin-right:0;}}.project-image{grid-column:1 / 8;@media (max-width:768px){grid-column:1 / -1;}}}.project-content{position:relative;grid-column:1 / 7;grid-row:1 / -1;@media (max-width:1080px){grid-column:1 / 9;}@media (max-width:768px){display:flex;flex-direction:column;justify-content:center;height:100%;grid-column:1 / -1;padding:40px 40px 30px;z-index:5;}@media (max-width:480px){padding:30px 25px 20px;}}.project-overline{margin:10px 0;color:var(--green);font-family:var(--font-mono);font-size:var(--fz-xs);font-weight:400;}.project-title{color:var(--lightest-slate);font-size:clamp(24px,5vw,28px);@media (min-width:768px){margin:0 0 20px;}@media (max-width:768px){color:var(--white);a{position:static;&:before{content:\'\';display:block;position:absolute;z-index:0;width:100%;height:100%;top:0;left:0;}}}}.project-description{',
          ';position:relative;z-index:2;padding:25px;border-radius:var(--border-radius);background-color:var(--light-navy);color:var(--light-slate);font-size:var(--fz-lg);@media (max-width:768px){padding:20px 0;background-color:transparent;box-shadow:none;&:hover{box-shadow:none;}}a{',
          ';}strong{color:var(--white);font-weight:normal;}}.project-tech-list{display:flex;flex-wrap:wrap;position:relative;z-index:2;margin:25px 0 10px;padding:0;list-style:none;li{margin:0 20px 5px 0;color:var(--light-slate);font-family:var(--font-mono);font-size:var(--fz-xs);white-space:nowrap;}@media (max-width:768px){margin:10px 0;li{margin:0 10px 5px 0;color:var(--lightest-slate);}}}.project-links{display:flex;align-items:center;position:relative;margin-top:10px;margin-left:-10px;color:var(--lightest-slate);a{',
          ';padding:10px;&.external{svg{width:22px;height:22px;margin-top:-4px;}}svg{width:20px;height:20px;}}.cta{',
          ';margin:10px;}}.project-image{',
          ';grid-column:6 / -1;grid-row:1 / -1;position:relative;z-index:1;@media (max-width:768px){grid-column:1 / -1;height:100%;opacity:0.25;}a{width:100%;height:100%;background-color:var(--green);border-radius:var(--border-radius);vertical-align:middle;&:hover,&:focus{background:transparent;outline:0;&:before,.img{background:transparent;filter:none;}}&:before{content:\'\';position:absolute;width:100%;height:100%;top:0;left:0;right:0;bottom:0;z-index:3;transition:var(--transition);background-color:var(--navy);mix-blend-mode:screen;}}.img{border-radius:var(--border-radius);mix-blend-mode:multiply;filter:grayscale(100%) contrast(1) brightness(90%);@media (max-width:768px){object-fit:cover;width:auto;height:100%;filter:grayscale(100%) contrast(1) brightness(50%);}}}',
        ],
        function(e) {
          return e.theme.mixins.boxShadow;
        },
        function(e) {
          return e.theme.mixins.boxShadow;
        },
        function(e) {
          return e.theme.mixins.inlineLink;
        },
        function(e) {
          return e.theme.mixins.flexCenter;
        },
        function(e) {
          return e.theme.mixins.smallButton;
        },
        function(e) {
          return e.theme.mixins.boxShadow;
        },
      );
      var zt = function() {
        const e = (0, o.useStaticQuery)('2031412112').featured.edges.filter(function(e) {
          return e.node;
        });
        const t = (0, r.useRef)(null);
        const n = (0, r.useRef)([]);
        const i = (0, Ue.Tb)();
        return (
          (0, r.useEffect)(function() {
            i ||
                (vt.Z.reveal(t.current, (0, Ye.srConfig)()),
                n.current.forEach(function(e, t) {
                  return vt.Z.reveal(e, (0, Ye.srConfig)(100 * t));
                }));
          }, []),
          r.createElement(
            'section',
            { id: 'projects' },
            r.createElement(
              'h2',
              { className: 'numbered-heading', ref: t },
              'Some Things I’ve Built',
            ),
            r.createElement(
              Nt,
              null,
              e &&
                  e.map(function(e, t) {
                    const i = e.node;
                    const a = i.frontmatter;
                    const o = i.html;
                    const l = a.external;
                    const s = a.title;
                    const c = a.tech;
                    const u = a.github;
                    const d = a.cover;
                    const f = a.cta;
                    const m = (0, gt.d)(d);
                    return r.createElement(
                      jt,
                      {
                        key: t,
                        ref: function(e) {
                          return (n.current[t] = e);
                        },
                      },
                      r.createElement(
                        'div',
                        { className: 'project-content' },
                        r.createElement(
                          'div',
                          null,
                          r.createElement(
                            'p',
                            { className: 'project-overline' },
                            'Featured Project',
                          ),
                          r.createElement(
                            'h3',
                            { className: 'project-title' },
                            r.createElement('a', { href: l }, s),
                          ),
                          r.createElement('div', {
                            className: 'project-description',
                            dangerouslySetInnerHTML: { __html: o },
                          }),
                          c.length &&
                            r.createElement(
                              'ul',
                              { className: 'project-tech-list' },
                              c.map(function(e, t) {
                                return r.createElement('li', { key: t }, e);
                              }),
                            ),
                          r.createElement(
                            'div',
                            { className: 'project-links' },
                            f &&
                              r.createElement(
                                'a',
                                { href: f, 'aria-label': 'Course Link', className: 'cta' },
                                'Learn More',
                              ),
                            u &&
                              r.createElement(
                                'a',
                                { href: u, 'aria-label': 'GitHub Link' },
                                r.createElement(He.JO, { name: 'GitHub' }),
                              ),
                            l &&
                              !f &&
                              r.createElement(
                                'a',
                                { href: l, 'aria-label': 'External Link', className: 'external' },
                                r.createElement(He.JO, { name: 'External' }),
                              ),
                          ),
                        ),
                      ),
                      r.createElement(
                        'div',
                        { className: 'project-image' },
                        r.createElement(
                          'a',
                          { href: l || u || '#' },
                          r.createElement(gt.G, { image: m, alt: s, className: 'img' }),
                        ),
                      ),
                    );
                  }),
            ),
          )
        );
      };
      const At = c.default.section.withConfig({
        displayName: 'projects__StyledProjectsSection',
        componentId: 'sc-1v1fime-0',
      })(
        [
          'display:flex;flex-direction:column;align-items:center;h2{font-size:clamp(24px,5vw,var(--fz-heading));}.archive-link{font-family:var(--font-mono);font-size:var(--fz-sm);&:after{bottom:0.1em;}}.projects-grid{',
          ';display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));grid-gap:15px;position:relative;margin-top:50px;@media (max-width:1080px){grid-template-columns:repeat(auto-fill,minmax(250px,1fr));}}.more-button{',
          ';margin:80px auto 0;}',
        ],
        function(e) {
          return e.theme.mixins.resetList;
        },
        function(e) {
          return e.theme.mixins.button;
        },
      );
      const Mt = c.default.li.withConfig({
        displayName: 'projects__StyledProject',
        componentId: 'sc-1v1fime-1',
      })(
        [
          'position:relative;cursor:default;transition:var(--transition);@media (prefers-reduced-motion:no-preference){&:hover,&:focus-within{.project-inner{transform:translateY(-7px);}}}a{position:relative;z-index:1;}.project-inner{',
          ';',
          ';flex-direction:column;align-items:flex-start;position:relative;height:100%;padding:2rem 1.75rem;border-radius:var(--border-radius);background-color:var(--light-navy);transition:var(--transition);overflow:auto;}.project-top{',
          ';margin-bottom:35px;.folder{color:var(--green);svg{width:40px;height:40px;}}.project-links{display:flex;align-items:center;margin-right:-10px;color:var(--light-slate);a{',
          ';padding:5px 7px;&.external{svg{width:22px;height:22px;margin-top:-4px;}}svg{width:20px;height:20px;}}}}.project-title{margin:0 0 10px;color:var(--lightest-slate);font-size:var(--fz-xxl);a{position:static;&:before{content:\'\';display:block;position:absolute;z-index:0;width:100%;height:100%;top:0;left:0;}}}.project-description{color:var(--light-slate);font-size:17px;a{',
          ';}}.project-tech-list{display:flex;align-items:flex-end;flex-grow:1;flex-wrap:wrap;padding:0;margin:20px 0 0 0;list-style:none;li{font-family:var(--font-mono);font-size:var(--fz-xxs);line-height:1.75;&:not(:last-of-type){margin-right:15px;}}}',
        ],
        function(e) {
          return e.theme.mixins.boxShadow;
        },
        function(e) {
          return e.theme.mixins.flexBetween;
        },
        function(e) {
          return e.theme.mixins.flexBetween;
        },
        function(e) {
          return e.theme.mixins.flexCenter;
        },
        function(e) {
          return e.theme.mixins.inlineLink;
        },
      );
      var It = function() {
        const e = (0, o.useStaticQuery)('3825832676');
        const t = (0, r.useState)(!1);
        const n = t[0];
        const i = t[1];
        const a = (0, r.useRef)(null);
        const l = (0, r.useRef)(null);
        const s = (0, r.useRef)([]);
        const c = (0, Ue.Tb)();
        (0, r.useEffect)(function() {
          c ||
              (vt.Z.reveal(a.current, (0, Ye.srConfig)()),
              vt.Z.reveal(l.current, (0, Ye.srConfig)()),
              s.current.forEach(function(e, t) {
                return vt.Z.reveal(e, (0, Ye.srConfig)(100 * t));
              }));
        }, []);
        const u = e.projects.edges.filter(function(e) {
          return e.node;
        });
        const d = u.slice(0, 6);
        const f = n ? u : d;
        const m = function(e) {
          const t = e.frontmatter;
          const n = e.html;
          const i = t.github;
          const a = t.external;
          const o = t.title;
          const l = t.tech;
          return r.createElement(
            'div',
            { className: 'project-inner' },
            r.createElement(
              'header',
              null,
              r.createElement(
                'div',
                { className: 'project-top' },
                r.createElement(
                  'div',
                  { className: 'folder' },
                  r.createElement(He.JO, { name: 'Folder' }),
                ),
                r.createElement(
                  'div',
                  { className: 'project-links' },
                  i &&
                        r.createElement(
                          'a',
                          {
                            href: i,
                            'aria-label': 'GitHub Link',
                            target: '_blank',
                            rel: 'noreferrer',
                          },
                          r.createElement(He.JO, { name: 'GitHub' }),
                        ),
                  a &&
                        r.createElement(
                          'a',
                          {
                            href: a,
                            'aria-label': 'External Link',
                            className: 'external',
                            target: '_blank',
                            rel: 'noreferrer',
                          },
                          r.createElement(He.JO, { name: 'External' }),
                        ),
                ),
              ),
              r.createElement(
                'h3',
                { className: 'project-title' },
                r.createElement('a', { href: a, target: '_blank', rel: 'noreferrer' }, o),
              ),
              r.createElement('div', {
                className: 'project-description',
                dangerouslySetInnerHTML: { __html: n },
              }),
            ),
            r.createElement(
              'footer',
              null,
              l &&
                    r.createElement(
                      'ul',
                      { className: 'project-tech-list' },
                      l.map(function(e, t) {
                        return r.createElement('li', { key: t }, e);
                      }),
                    ),
            ),
          );
        };
        return r.createElement(
          At,
          null,
          r.createElement('h2', { ref: a }, 'Other Noteworthy Projects'),
          r.createElement(
            o.Link,
            { className: 'inline-link archive-link', to: '/archive', ref: l },
            'view the archive',
          ),
          r.createElement(
            'ul',
            { className: 'projects-grid' },
            c
              ? r.createElement(
                r.Fragment,
                null,
                f &&
                      f.map(function(e, t) {
                        const n = e.node;
                        return r.createElement(Mt, { key: t }, m(n));
                      }),
              )
              : r.createElement(
                We.Z,
                { component: null },
                f &&
                      f.map(function(e, t) {
                        const n = e.node;
                        return r.createElement(
                          Ve.Z,
                          {
                            key: t,
                            classNames: 'fadeup',
                            timeout: t >= 6 ? 300 * (t - 6) : 300,
                            exit: !1,
                          },
                          r.createElement(
                            Mt,
                            {
                              key: t,
                              ref: function(e) {
                                return (s.current[t] = e);
                              },
                              style: { transitionDelay: `${t >= 6 ? 100 * (t - 6) : 0  }ms` },
                            },
                            m(n),
                          ),
                        );
                      }),
              ),
          ),
          r.createElement(
            'button',
            {
              className: 'more-button',
              onClick: function() {
                return i(!n);
              },
            },
            'Show ',
            n ? 'Less' : 'More',
          ),
        );
      };
      const Pt = c.default.section.withConfig({
        displayName: 'contact__StyledContactSection',
        componentId: 'sc-1m8df4t-0',
      })(
        [
          'max-width:600px;margin:0 auto 100px;text-align:center;@media (max-width:768px){margin:0 auto 50px;}.overline{display:block;margin-bottom:20px;color:var(--green);font-family:var(--font-mono);font-size:var(--fz-md);font-weight:400;&:before{bottom:0;font-size:var(--fz-sm);}&:after{display:none;}}.title{font-size:clamp(40px,5vw,60px);}.email-link{',
          ';margin-top:50px;}',
        ],
        function(e) {
          return e.theme.mixins.bigButton;
        },
      );
      var _t = function() {
        const e = (0, r.useRef)(null);
        const t = (0, Ue.Tb)();
        return (
          (0, r.useEffect)(function() {
            t || vt.Z.reveal(e.current, (0, Ye.srConfig)());
          }, []),
          r.createElement(
            Pt,
            { id: 'contact', ref: e },
            r.createElement('h2', { className: 'numbered-heading overline' }, 'What’s Next?'),
            r.createElement('h2', { className: 'title' }, 'Get In Touch'),
            r.createElement(
              'p',
              null,
              'Although I’m not currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!',
            ),
            r.createElement(
              'a',
              { className: 'email-link', href: `mailto:${  Ye.email}` },
              'Say Hello',
            ),
          )
        );
      };
    },
    537: function(e) {
      e.exports = {
        email: 'brittany.chiang@gmail.com',
        socialMedia: [
          { name: 'GitHub', url: 'https://github.com/bchiang7' },
          { name: 'Instagram', url: 'https://www.instagram.com/bchiang7' },
          { name: 'Twitter', url: 'https://twitter.com/bchiang7' },
          { name: 'Linkedin', url: 'https://www.linkedin.com/in/bchiang7' },
          { name: 'Codepen', url: 'https://codepen.io/bchiang7' },
        ],
        navLinks: [
          { name: 'About', url: '/#about' },
          { name: 'Experience', url: '/#jobs' },
          { name: 'Work', url: '/#projects' },
          { name: 'Contact', url: '/#contact' },
        ],
        colors: { green: '#64ffda', navy: '#0a192f', darkNavy: '#020c1b' },
        srConfig: function(e, t) {
          return (
            void 0 === e && (e = 200),
            void 0 === t && (t = 0.25),
            {
              origin: 'bottom',
              distance: '20px',
              duration: 500,
              delay: e,
              rotate: { x: 0, y: 0, z: 0 },
              opacity: 0,
              scale: 1,
              easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
              mobile: !0,
              reset: !1,
              useDelay: 'always',
              viewFactor: t,
              viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
            }
          );
        },
      };
    },
    3082: function(e, t, n) {
      'use strict';
      n.d(t, {
        t$: function() {
          return i;
        },
        Tb: function() {
          return s;
        },
        C7: function() {
          return c;
        },
      });
      const r = n(7294);
      var i = function(e, t) {
        (0, r.useEffect)(
          function() {
            const n = function(n) {
              e.current && !e.current.contains(n.target) && t(n);
            };
            return (
              document.addEventListener('mousedown', n),
              document.addEventListener('touchstart', n),
              function() {
                document.removeEventListener('mousedown', n),
                document.removeEventListener('touchstart', n);
              }
            );
          },
          [e, t],
        );
      };
      const a = '(prefers-reduced-motion: no-preference)';
      const o = 'undefined' === typeof window;
      const l = function() {
        return !!o || !window.matchMedia(a).matches;
      };
      var s = function() {
        const e = (0, r.useState)(l);
        const t = e[0];
        const n = e[1];
        return (
          (0, r.useEffect)(function() {
            const e = window.matchMedia(a);
            const t = function(e) {
              n(!e.matches);
            };
            return (
              e.addListener(t),
              function() {
                e.removeListener(t);
              }
            );
          }, []),
          t
        );
      };
      var c = function(e) {
        const t = void 0 === e ? {} : e;
        const n = t.initialDirection;
        const i = t.thresholdPixels;
        const a = t.off;
        const o = (0, r.useState)(n);
        const l = o[0];
        const s = o[1];
        return (
          (0, r.useEffect)(
            function() {
              const e = i || 0;
              let t = window.pageYOffset;
              let r = !1;
              const o = function() {
                const n = window.pageYOffset;
                Math.abs(n - t) < e || (s(n > t ? 'down' : 'up'), (t = n > 0 ? n : 0)),
                (r = !1);
              };
              const l = function() {
                r || (window.requestAnimationFrame(o), (r = !0));
              };
              return (
                a ? s(n) : window.addEventListener('scroll', l),
                function() {
                  return window.removeEventListener('scroll', l);
                }
              );
            },
            [n, i, a],
          ),
          l
        );
      };
    },
    4165: function(e, t, n) {
      'use strict';
      n.d(t, {
        Cs: function() {
          return i;
        },
        fb: function() {
          return r;
        },
        nx: function() {
          return a;
        },
      });
      var r = 1e3;
      var i = 2e3;
      var a = {
        ARROW_LEFT: 'ArrowLeft',
        ARROW_LEFT_IE11: 'Left',
        ARROW_RIGHT: 'ArrowRight',
        ARROW_RIGHT_IE11: 'Right',
        ARROW_UP: 'ArrowUp',
        ARROW_UP_IE11: 'Up',
        ARROW_DOWN: 'ArrowDown',
        ARROW_DOWN_IE11: 'Down',
        ESCAPE: 'Escape',
        ESCAPE_IE11: 'Esc',
        TAB: 'Tab',
        SPACE: ' ',
        SPACE_IE11: 'Spacebar',
        ENTER: 'Enter',
      };
    },
    355: function(e, t, n) {
      'use strict';
      n.d(t, {
        Z: function() {
          return te;
        },
      });
      const r = function(e) {
        return 'object' === typeof window.Node
          ? e instanceof window.Node
          : null !== e &&
              'object' === typeof e &&
              'number' === typeof e.nodeType &&
              'string' === typeof e.nodeName;
      };
      const i = function(e) {
        const t = Object.prototype.toString.call(e);
        return 'object' === typeof window.NodeList
          ? e instanceof window.NodeList
          : null !== e &&
              'object' === typeof e &&
              'number' === typeof e.length &&
              /^\[object (HTMLCollection|NodeList|Object)\]$/.test(t) &&
              (0 === e.length || r(e[0]));
      };
      const a = function(e, t) {
        if ((void 0 === t && (t = document), e instanceof Array)) {return e.filter(r);}
        if (r(e)) {return [e];}
        if (i(e)) {return Array.prototype.slice.call(e);}
        if ('string' === typeof e) {
          try {
            const n = t.querySelectorAll(e);
            return Array.prototype.slice.call(n);
          } catch (a) {
            return [];
          }
        }
        return [];
      };
      function o(e) {
        if (e.constructor !== Array) {throw new TypeError('Expected array.');}
        if (16 === e.length) {return e;}
        if (6 === e.length) {
          const t = l();
          return (
            (t[0] = e[0]),
            (t[1] = e[1]),
            (t[4] = e[2]),
            (t[5] = e[3]),
            (t[12] = e[4]),
            (t[13] = e[5]),
            t
          );
        }
        throw new RangeError('Expected array with either 6 or 16 values.');
      }
      function l() {
        for (var e = [], t = 0; t < 16; t++) {t % 5 == 0 ? e.push(1) : e.push(0);}
        return e;
      }
      function s(e, t) {
        for (var n = o(e), r = o(t), i = [], a = 0; a < 4; a++) {
          for (let l = [n[a], n[a + 4], n[a + 8], n[a + 12]], s = 0; s < 4; s++) {
            const c = 4 * s;
            const u = [r[c], r[c + 1], r[c + 2], r[c + 3]];
            const d = l[0] * u[0] + l[1] * u[1] + l[2] * u[2] + l[3] * u[3];
            i[a + c] = d;
          }
        }
        return i;
      }
      function c(e) {
        if ('string' === typeof e) {
          const t = e.match(/matrix(3d)?\(([^)]+)\)/);
          if (t) {return o(t[2].split(', ').map(parseFloat));}
        }
        return l();
      }
      function u(e) {
        const t = (Math.PI / 180) * e;
        const n = l();
        return (n[0] = n[5] = Math.cos(t)), (n[1] = n[4] = Math.sin(t)), (n[4] *= -1), n;
      }
      function d(e, t) {
        const n = l();
        return (n[0] = e), (n[5] = 'number' === typeof t ? t : e), n;
      }
      let f;
      var m =
          ((f = Date.now()),
          function(e) {
            const t = Date.now();
            t - f > 16
              ? ((f = t), e(t))
              : setTimeout(function() {
                return m(e);
              }, 0);
          });
      const p =
          window.requestAnimationFrame ||
          window.webkitRequestAnimationFrame ||
          window.mozRequestAnimationFrame ||
          m;
      const h = {
        delay: 0,
        distance: '0',
        duration: 600,
        easing: 'cubic-bezier(0.5, 0, 0, 1)',
        interval: 0,
        opacity: 0,
        origin: 'bottom',
        rotate: { x: 0, y: 0, z: 0 },
        scale: 1,
        cleanup: !1,
        container: document.documentElement,
        desktop: !0,
        mobile: !0,
        reset: !1,
        useDelay: 'always',
        viewFactor: 0,
        viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
        afterReset: function() {},
        afterReveal: function() {},
        beforeReset: function() {},
        beforeReveal: function() {},
      };
      const g = {
        success: function() {
          document.documentElement.classList.add('sr'),
          document.body
            ? (document.body.style.height = '100%')
            : document.addEventListener('DOMContentLoaded', function() {
              document.body.style.height = '100%';
            });
        },
        failure: function() {
          return (
            document.documentElement.classList.remove('sr'),
            {
              clean: function() {},
              destroy: function() {},
              reveal: function() {},
              sync: function() {},
              get noop() {
                return !0;
              },
            }
          );
        },
      };
      function v(e) {
        return (
          null !== e &&
          e instanceof Object &&
          (e.constructor === Object || '[object Object]' === Object.prototype.toString.call(e))
        );
      }
      function x(e, t) {
        if (v(e)) {
          return Object.keys(e).forEach(function(n) {
            return t(e[n], n, e);
          });
        }
        if (e instanceof Array) {
          return e.forEach(function(n, r) {
            return t(n, r, e);
          });
        }
        throw new TypeError('Expected either an array or object literal.');
      }
      function b(e) {
        for (var t = [], n = arguments.length - 1; n-- > 0; ) {t[n] = arguments[n + 1];}
        if (this.constructor.debug && console) {
          let r = `%cScrollReveal: ${  e}`;
          t.forEach(function(e) {
            return (r += `\n — ${  e}`);
          }),
          console.log(r, 'color: #ea654b;');
        }
      }
      function y() {
        const e = this;
        const t = { active: [], stale: [] };
        const n = { active: [], stale: [] };
        const r = { active: [], stale: [] };
        try {
          x(a('[data-sr-id]'), function(e) {
            const n = parseInt(e.getAttribute('data-sr-id'));
            t.active.push(n);
          });
        } catch (i) {
          throw i;
        }
        x(this.store.elements, function(e) {
          -1 === t.active.indexOf(e.id) && t.stale.push(e.id);
        }),
        x(t.stale, function(t) {
          return delete e.store.elements[t];
        }),
        x(this.store.elements, function(e) {
          -1 === r.active.indexOf(e.containerId) && r.active.push(e.containerId),
          e.hasOwnProperty('sequence') &&
                -1 === n.active.indexOf(e.sequence.id) &&
                n.active.push(e.sequence.id);
        }),
        x(this.store.containers, function(e) {
          -1 === r.active.indexOf(e.id) && r.stale.push(e.id);
        }),
        x(r.stale, function(t) {
          const n = e.store.containers[t].node;
          n.removeEventListener('scroll', e.delegate),
          n.removeEventListener('resize', e.delegate),
          delete e.store.containers[t];
        }),
        x(this.store.sequences, function(e) {
          -1 === n.active.indexOf(e.id) && n.stale.push(e.id);
        }),
        x(n.stale, function(t) {
          return delete e.store.sequences[t];
        });
      }
      const w = (function() {
        let e = {};
        const t = document.documentElement.style;
        function n(n, r) {
          if ((void 0 === r && (r = t), n && 'string' === typeof n)) {
            if (e[n]) {return e[n];}
            if ('string' === typeof r[n]) {return (e[n] = n);}
            if ('string' === typeof r[`-webkit-${  n}`]) {return (e[n] = `-webkit-${  n}`);}
            throw new RangeError(`Unable to find "${  n  }" style property.`);
          }
          throw new TypeError('Expected a string.');
        }
        return (
          (n.clearCache = function() {
            return (e = {});
          }),
          n
        );
      })();
      function E(e) {
        const t = window.getComputedStyle(e.node);
        const n = t.position;
        const r = e.config;
        const i = {};
        const a = (e.node.getAttribute('style') || '').match(/[\w-]+\s*:\s*[^;]+\s*/gi) || [];
        (i.computed = a
          ? `${a
            .map(function(e) {
              return e.trim();
            })
            .join('; ')  };`
          : ''),
        (i.generated = a.some(function(e) {
          return e.match(/visibility\s?:\s?visible/i);
        })
          ? i.computed
          : `${a
            .concat(['visibility: visible'])
            .map(function(e) {
              return e.trim();
            })
            .join('; ')  };`);
        let o;
        let f;
        let m;
        const p = parseFloat(t.opacity);
        const h = isNaN(parseFloat(r.opacity)) ? parseFloat(t.opacity) : parseFloat(r.opacity);
        const g = {
          computed: p !== h ? `opacity: ${  p  };` : '',
          generated: p !== h ? `opacity: ${  h  };` : '',
        };
        const v = [];
        if (parseFloat(r.distance)) {
          const x = 'top' === r.origin || 'bottom' === r.origin ? 'Y' : 'X';
          let b = r.distance;
          ('top' !== r.origin && 'left' !== r.origin) || (b = /^-/.test(b) ? b.substr(1) : `-${  b}`);
          const y = b.match(/(^-?\d+\.?\d?)|(em$|px$|%$)/g);
          const E = y[0];
          switch (y[1]) {
            case 'em':
              b = parseInt(t.fontSize) * E;
              break;
            case 'px':
              b = E;
              break;
            case '%':
              b =
                'Y' === x
                  ? (e.node.getBoundingClientRect().height * E) / 100
                  : (e.node.getBoundingClientRect().width * E) / 100;
              break;
            default:
              throw new RangeError('Unrecognized or missing distance unit.');
          }
          'Y' === x
            ? v.push(
              (function(e) {
                const t = l();
                return (t[13] = e), t;
              })(b),
            )
            : v.push(
              (function(e) {
                const t = l();
                return (t[12] = e), t;
              })(b),
            );
        }
        r.rotate.x &&
          v.push(
            ((o = r.rotate.x),
            (f = (Math.PI / 180) * o),
            ((m = l())[5] = m[10] = Math.cos(f)),
            (m[6] = m[9] = Math.sin(f)),
            (m[9] *= -1),
            m),
          ),
        r.rotate.y &&
            v.push(
              (function(e) {
                const t = (Math.PI / 180) * e;
                const n = l();
                return (n[0] = n[10] = Math.cos(t)), (n[2] = n[8] = Math.sin(t)), (n[2] *= -1), n;
              })(r.rotate.y),
            ),
        r.rotate.z && v.push(u(r.rotate.z)),
        1 !== r.scale && (0 === r.scale ? v.push(d(2e-4)) : v.push(d(r.scale)));
        const k = {};
        if (v.length) {
          (k.property = w('transform')),
          (k.computed = { raw: t[k.property], matrix: c(t[k.property]) }),
          v.unshift(k.computed.matrix);
          const C = v.reduce(s);
          k.generated = {
            initial: `${k.property  }: matrix3d(${  C.join(', ')  });`,
            final: `${k.property  }: matrix3d(${  k.computed.matrix.join(', ')  });`,
          };
        } else {k.generated = { initial: '', final: '' };}
        const T = {};
        if (g.generated || k.generated.initial) {
          (T.property = w('transition')), (T.computed = t[T.property]), (T.fragments = []);
          const S = r.delay;
          const L = r.duration;
          const O = r.easing;
          g.generated &&
            T.fragments.push({
              delayed: `opacity ${  L / 1e3  }s ${  O  } ${  S / 1e3  }s`,
              instant: `opacity ${  L / 1e3  }s ${  O  } 0s`,
            }),
          k.generated.initial &&
              T.fragments.push({
                delayed: `${k.property  } ${  L / 1e3  }s ${  O  } ${  S / 1e3  }s`,
                instant: `${k.property  } ${  L / 1e3  }s ${  O  } 0s`,
              }),
          T.computed &&
              !T.computed.match(/all 0s|none 0s/) &&
              T.fragments.unshift({ delayed: T.computed, instant: T.computed });
          const N = T.fragments.reduce(
            function(e, t, n) {
              return (
                (e.delayed += 0 === n ? t.delayed : `, ${  t.delayed}`),
                (e.instant += 0 === n ? t.instant : `, ${  t.instant}`),
                e
              );
            },
            { delayed: '', instant: '' },
          );
          T.generated = {
            delayed: `${T.property  }: ${  N.delayed  };`,
            instant: `${T.property  }: ${  N.instant  };`,
          };
        } else {T.generated = { delayed: '', instant: '' };}
        return { inline: i, opacity: g, position: n, transform: k, transition: T };
      }
      function k(e, t) {
        t.split(';').forEach(function(t) {
          const n = t.split(':');
          const r = n[0];
          const i = n.slice(1);
          r && i && (e.style[r.trim()] = i.join(':'));
        });
      }
      function C(e) {
        let t;
        const n = this;
        try {
          x(a(e), function(e) {
            const r = e.getAttribute('data-sr-id');
            if (null !== r) {
              t = !0;
              const i = n.store.elements[r];
              i.callbackTimer && window.clearTimeout(i.callbackTimer.clock),
              k(i.node, i.styles.inline.generated),
              e.removeAttribute('data-sr-id'),
              delete n.store.elements[r];
            }
          });
        } catch (r) {
          return b.call(this, 'Clean failed.', r.message);
        }
        if (t) {
          try {
            y.call(this);
          } catch (r) {
            return b.call(this, 'Clean failed.', r.message);
          }
        }
      }
      function T() {
        const e = this;
        x(this.store.elements, function(e) {
          k(e.node, e.styles.inline.generated), e.node.removeAttribute('data-sr-id');
        }),
        x(this.store.containers, function(t) {
          const n = t.node === document.documentElement ? window : t.node;
          n.removeEventListener('scroll', e.delegate),
          n.removeEventListener('resize', e.delegate);
        }),
        (this.store = { containers: {}, elements: {}, history: [], sequences: {} });
      }
      function S(e) {
        for (var t = [], n = arguments.length - 1; n-- > 0; ) {t[n] = arguments[n + 1];}
        if (v(e)) {
          return (
            x(t, function(t) {
              x(t, function(t, n) {
                v(t) ? ((e[n] && v(e[n])) || (e[n] = {}), S(e[n], t)) : (e[n] = t);
              });
            }),
            e
          );
        }
        throw new TypeError('Target must be an object literal.');
      }
      function L(e) {
        return void 0 === e && (e = navigator.userAgent), /Android|iPhone|iPad|iPod/i.test(e);
      }
      let O;
      const N =
          ((O = 0),
          function() {
            return O++;
          });
      function j() {
        const e = this;
        y.call(this),
        x(this.store.elements, function(e) {
          const t = [e.styles.inline.generated];
          e.visible
            ? (t.push(e.styles.opacity.computed),
            t.push(e.styles.transform.generated.final),
            (e.revealed = !0))
            : (t.push(e.styles.opacity.generated),
            t.push(e.styles.transform.generated.initial),
            (e.revealed = !1)),
          k(
            e.node,
            t
              .filter(function(e) {
                return '' !== e;
              })
              .join(' '),
          );
        }),
        x(this.store.containers, function(t) {
          const n = t.node === document.documentElement ? window : t.node;
          n.addEventListener('scroll', e.delegate), n.addEventListener('resize', e.delegate);
        }),
        this.delegate(),
        (this.initTimeout = null);
      }
      function z(e, t) {
        void 0 === t && (t = {});
        const n = t.pristine || this.pristine;
        const r =
            'always' === e.config.useDelay ||
            ('onload' === e.config.useDelay && n) ||
            ('once' === e.config.useDelay && !e.seen);
        const i = e.visible && !e.revealed;
        const a = !e.visible && e.revealed && e.config.reset;
        return t.reveal || i ? A.call(this, e, r) : t.reset || a ? M.call(this, e) : void 0;
      }
      function A(e, t) {
        const n = [
          e.styles.inline.generated,
          e.styles.opacity.computed,
          e.styles.transform.generated.final,
        ];
        t
          ? n.push(e.styles.transition.generated.delayed)
          : n.push(e.styles.transition.generated.instant),
        (e.revealed = e.seen = !0),
        k(
          e.node,
          n
            .filter(function(e) {
              return '' !== e;
            })
            .join(' '),
        ),
        I.call(this, e, t);
      }
      function M(e) {
        const t = [
          e.styles.inline.generated,
          e.styles.opacity.generated,
          e.styles.transform.generated.initial,
          e.styles.transition.generated.instant,
        ];
        (e.revealed = !1),
        k(
          e.node,
          t
            .filter(function(e) {
              return '' !== e;
            })
            .join(' '),
        ),
        I.call(this, e);
      }
      function I(e, t) {
        const n = this;
        const r = t ? e.config.duration + e.config.delay : e.config.duration;
        const i = e.revealed ? e.config.beforeReveal : e.config.beforeReset;
        const a = e.revealed ? e.config.afterReveal : e.config.afterReset;
        let o = 0;
        e.callbackTimer &&
          ((o = Date.now() - e.callbackTimer.start), window.clearTimeout(e.callbackTimer.clock)),
        i(e.node),
        (e.callbackTimer = {
          start: Date.now(),
          clock: window.setTimeout(function() {
            a(e.node),
            (e.callbackTimer = null),
            e.revealed && !e.config.reset && e.config.cleanup && C.call(n, e.node);
          }, r - o),
        });
      }
      function P(e, t) {
        if ((void 0 === t && (t = this.pristine), !e.visible && e.revealed && e.config.reset)) {return z.call(this, e, { reset: !0 });}
        const n = this.store.sequences[e.sequence.id];
        const r = e.sequence.index;
        if (n) {
          const i = new R(n, 'visible', this.store);
          const a = new R(n, 'revealed', this.store);
          if (((n.models = { visible: i, revealed: a }), !a.body.length)) {
            const o = n.members[i.body[0]];
            const l = this.store.elements[o];
            if (l) {
              return (
                D.call(this, n, i.body[0], -1, t),
                D.call(this, n, i.body[0], 1, t),
                z.call(this, l, { reveal: !0, pristine: t })
              );
            }
          }
          if (!n.blocked.head && r === [].concat(a.head).pop() && r >= [].concat(i.body).shift()) {return D.call(this, n, r, -1, t), z.call(this, e, { reveal: !0, pristine: t });}
          if (!n.blocked.foot && r === [].concat(a.foot).shift() && r <= [].concat(i.body).pop()) {return D.call(this, n, r, 1, t), z.call(this, e, { reveal: !0, pristine: t });}
        }
      }
      function _(e) {
        const t = Math.abs(e);
        if (isNaN(t)) {throw new RangeError('Invalid sequence interval.');}
        (this.id = N()),
        (this.interval = Math.max(t, 16)),
        (this.members = []),
        (this.models = {}),
        (this.blocked = { head: !1, foot: !1 });
      }
      function R(e, t, n) {
        const r = this;
        (this.head = []),
        (this.body = []),
        (this.foot = []),
        x(e.members, function(e, i) {
          const a = n.elements[e];
          a && a[t] && r.body.push(i);
        }),
        this.body.length &&
            x(e.members, function(e, i) {
              const a = n.elements[e];
              a && !a[t] && (i < r.body[0] ? r.head.push(i) : r.foot.push(i));
            });
      }
      function D(e, t, n, r) {
        const i = this;
        const a = ['head', null, 'foot'][1 + n];
        const o = e.members[t + n];
        const l = this.store.elements[o];
        (e.blocked[a] = !0),
        setTimeout(function() {
          (e.blocked[a] = !1), l && P.call(i, l, r);
        }, e.interval);
      }
      function B(e, t, n) {
        const r = this;
        void 0 === t && (t = {}), void 0 === n && (n = !1);
        let i;
        const o = [];
        const l = t.interval || h.interval;
        try {
          l && (i = new _(l));
          const s = a(e);
          if (!s.length) {throw new Error('Invalid reveal target.');}
          const c = s.reduce(function(e, n) {
            const l = {};
            const s = n.getAttribute('data-sr-id');
            s
              ? (S(l, r.store.elements[s]), k(l.node, l.styles.inline.computed))
              : ((l.id = N()), (l.node = n), (l.seen = !1), (l.revealed = !1), (l.visible = !1));
            const c = S({}, l.config || r.defaults, t);
            if ((!c.mobile && L()) || (!c.desktop && !L())) {return s && C.call(r, l), e;}
            let u;
            const d = a(c.container)[0];
            if (!d) {throw new Error('Invalid container.');}
            return d.contains(n)
              ? ((u = (function(e) {
                const t = [];
                let n = arguments.length - 1;
                for (; n-- > 0; ) {t[n] = arguments[n + 1];}
                let r = null;
                return (
                  x(t, function(t) {
                    x(t, function(t) {
                      null === r && t.node === e && (r = t.id);
                    });
                  }),
                  r
                );
              })(d, o, r.store.containers)),
              null === u && ((u = N()), o.push({ id: u, node: d })),
              (l.config = c),
              (l.containerId = u),
              (l.styles = E(l)),
              i && ((l.sequence = { id: i.id, index: i.members.length }), i.members.push(l.id)),
              e.push(l),
              e)
              : e;
          }, []);
          x(c, function(e) {
            (r.store.elements[e.id] = e), e.node.setAttribute('data-sr-id', e.id);
          });
        } catch (u) {
          return b.call(this, 'Reveal failed.', u.message);
        }
        x(o, function(e) {
          r.store.containers[e.id] = { id: e.id, node: e.node };
        }),
        i && (this.store.sequences[i.id] = i),
        !0 !== n &&
            (this.store.history.push({ target: e, options: t }),
            this.initTimeout && window.clearTimeout(this.initTimeout),
            (this.initTimeout = window.setTimeout(j.bind(this), 0)));
      }
      function F() {
        const e = this;
        x(this.store.history, function(t) {
          B.call(e, t.target, t.options, !0);
        }),
        j.call(this);
      }
      const H =
        Math.sign ||
        function(e) {
          return (e > 0) - (e < 0) || +e;
        };
      function q(e, t) {
        const n = t ? e.node.clientHeight : e.node.offsetHeight;
        const r = t ? e.node.clientWidth : e.node.offsetWidth;
        let i = 0;
        let a = 0;
        let o = e.node;
        do {
          isNaN(o.offsetTop) || (i += o.offsetTop),
          isNaN(o.offsetLeft) || (a += o.offsetLeft),
          (o = o.offsetParent);
        } while (o);
        return { bounds: { top: i, right: a + r, bottom: i + n, left: a }, height: n, width: r };
      }
      function Z(e) {
        let t; let n;
        return (
          e.node === document.documentElement
            ? ((t = window.pageYOffset), (n = window.pageXOffset))
            : ((t = e.node.scrollTop), (n = e.node.scrollLeft)),
          { top: t, left: n }
        );
      }
      function W(e) {
        void 0 === e && (e = {});
        const t = this.store.containers[e.containerId];
        if (t) {
          const n = Math.max(0, Math.min(1, e.config.viewFactor));
          const r = e.config.viewOffset;
          const i = e.geometry.bounds.top + e.geometry.height * n;
          const a = e.geometry.bounds.right - e.geometry.width * n;
          const o = e.geometry.bounds.bottom - e.geometry.height * n;
          const l = e.geometry.bounds.left + e.geometry.width * n;
          const s = t.geometry.bounds.top + t.scroll.top + r.top;
          const c = t.geometry.bounds.right + t.scroll.left - r.right;
          const u = t.geometry.bounds.bottom + t.scroll.top - r.bottom;
          const d = t.geometry.bounds.left + t.scroll.left + r.left;
          return (i < u && a > d && o > s && l < c) || 'fixed' === e.styles.position;
        }
      }
      function V(e, t) {
        const n = this;
        void 0 === e && (e = { type: 'init' }),
        void 0 === t && (t = this.store.elements),
        p(function() {
          const r = 'init' === e.type || 'resize' === e.type;
          x(n.store.containers, function(e) {
            r && (e.geometry = q.call(n, e, !0));
            const t = Z.call(n, e);
            e.scroll &&
                (e.direction = { x: H(t.left - e.scroll.left), y: H(t.top - e.scroll.top) }),
            (e.scroll = t);
          }),
          x(t, function(e) {
            (r || void 0 === e.geometry) && (e.geometry = q.call(n, e)),
            (e.visible = W.call(n, e));
          }),
          x(t, function(e) {
            e.sequence ? P.call(n, e) : z.call(n, e);
          }),
          (n.pristine = !1);
        });
      }
      let Y; let G; let U; let $; let J; let Q; let K; let X;
      function ee(e) {
        let t;
        if (
          (void 0 === e && (e = {}),
          void 0 === this || Object.getPrototypeOf(this) !== ee.prototype)
        ) {return new ee(e);}
        if (!ee.isSupported()) {
          return (
            b.call(this, 'Instantiation failed.', 'This browser is not supported.'), g.failure()
          );
        }
        try {
          t = S({}, Q || h, e);
        } catch (n) {
          return b.call(this, 'Invalid configuration.', n.message), g.failure();
        }
        try {
          if (!a(t.container)[0]) {throw new Error('Invalid container.');}
        } catch (n) {
          return b.call(this, n.message), g.failure();
        }
        return (!(Q = t).mobile && L()) || (!Q.desktop && !L())
          ? (b.call(
            this,
            'This device is disabled.',
            `desktop: ${  Q.desktop}`,
            `mobile: ${  Q.mobile}`,
          ),
          g.failure())
          : (g.success(),
          (this.store = { containers: {}, elements: {}, history: [], sequences: {} }),
          (this.pristine = !0),
          (Y = Y || V.bind(this)),
          (G = G || T.bind(this)),
          (U = U || B.bind(this)),
          ($ = $ || C.bind(this)),
          (J = J || F.bind(this)),
          Object.defineProperty(this, 'delegate', {
            get: function() {
              return Y;
            },
          }),
          Object.defineProperty(this, 'destroy', {
            get: function() {
              return G;
            },
          }),
          Object.defineProperty(this, 'reveal', {
            get: function() {
              return U;
            },
          }),
          Object.defineProperty(this, 'clean', {
            get: function() {
              return $;
            },
          }),
          Object.defineProperty(this, 'sync', {
            get: function() {
              return J;
            },
          }),
          Object.defineProperty(this, 'defaults', {
            get: function() {
              return Q;
            },
          }),
          Object.defineProperty(this, 'version', {
            get: function() {
              return '4.0.9';
            },
          }),
          Object.defineProperty(this, 'noop', {
            get: function() {
              return !1;
            },
          }),
          X || (X = this));
      }
      (ee.isSupported = function() {
        return (
          (function() {
            const e = document.documentElement.style;
            return 'transform' in e || 'WebkitTransform' in e;
          })() &&
          (function() {
            const e = document.documentElement.style;
            return 'transition' in e || 'WebkitTransition' in e;
          })()
        );
      }),
      Object.defineProperty(ee, 'debug', {
        get: function() {
          return K || !1;
        },
        set: function(e) {
          return (K = 'boolean' === typeof e ? e : K);
        },
      }),
      ee();
      var te = 'undefined' === typeof window ? null : ee();
    },
    7462: function(e, t, n) {
      'use strict';
      function r() {
        return (
          (r = Object.assign
            ? Object.assign.bind()
            : function(e) {
              for (let t = 1; t < arguments.length; t++) {
                const n = arguments[t];
                for (const r in n) {Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);}
              }
              return e;
            }),
          r.apply(this, arguments)
        );
      }
      n.d(t, {
        Z: function() {
          return r;
        },
      });
    },
    3366: function(e, t, n) {
      'use strict';
      function r(e, t) {
        if (null == e) {return {};}
        let n;
        let r;
        const i = {};
        const a = Object.keys(e);
        for (r = 0; r < a.length; r++) {(n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);}
        return i;
      }
      n.d(t, {
        Z: function() {
          return r;
        },
      });
    },
    1202: function(e) {
      'use strict';
      e.exports = JSON.parse(
        '{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/static/36841a55ab4e2945e7f838d0f6eca826/d218e/me.png","srcSet":"/static/36841a55ab4e2945e7f838d0f6eca826/a84e3/me.png 125w,\\n/static/36841a55ab4e2945e7f838d0f6eca826/64938/me.png 250w,\\n/static/36841a55ab4e2945e7f838d0f6eca826/d218e/me.png 500w","sizes":"(min-width: 500px) 500px, 100vw"},"sources":[{"srcSet":"/static/36841a55ab4e2945e7f838d0f6eca826/aebc8/me.avif 125w,\\n/static/36841a55ab4e2945e7f838d0f6eca826/6b255/me.avif 250w,\\n/static/36841a55ab4e2945e7f838d0f6eca826/f9526/me.avif 500w","type":"image/avif","sizes":"(min-width: 500px) 500px, 100vw"},{"srcSet":"/static/36841a55ab4e2945e7f838d0f6eca826/4155f/me.webp 125w,\\n/static/36841a55ab4e2945e7f838d0f6eca826/02deb/me.webp 250w,\\n/static/36841a55ab4e2945e7f838d0f6eca826/1ee78/me.webp 500w","type":"image/webp","sizes":"(min-width: 500px) 500px, 100vw"}]},"width":500,"height":500}',
      );
    },
  },
]);
//# sourceMappingURL=546641dfde76ed00139ea2c3eae09499c5f2164a-31442ebad5d3921c6958.js.map
