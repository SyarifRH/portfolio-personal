'use strict';
(self.webpackChunkv4 = self.webpackChunkv4 || []).push([
  [589],
  {
    1589: function(t, e, n) {
      n.r(e),
      n.d(e, {
        getCLS: function() {
          return s;
        },
        getFCP: function() {
          return v;
        },
        getFID: function() {
          return p;
        },
        getLCP: function() {
          return l;
        },
        getTTFB: function() {
          return h;
        },
      });
      const i = function(t, e) {
        return {
          name: t,
          value: void 0 === e ? -1 : e,
          delta: 0,
          entries: [],
          id: 'v1-'
            .concat(Date.now(), '-')
            .concat(Math.floor(8999999999999 * Math.random()) + 1e12),
        };
      };
      const a = function(t, e) {
        try {
          if (PerformanceObserver.supportedEntryTypes.includes(t)) {
            if ('first-input' === t && !('PerformanceEventTiming' in self)) {return;}
            const n = new PerformanceObserver(function(t) {
              return t.getEntries().map(e);
            });
            return n.observe({ type: t, buffered: !0 }), n;
          }
        } catch (t) {}
      };
      const r = function(t, e) {
        const n = function n(i) {
          ('pagehide' !== i.type && 'hidden' !== document.visibilityState) ||
              (t(i),
              e &&
                (removeEventListener('visibilitychange', n, !0),
                removeEventListener('pagehide', n, !0)));
        };
        addEventListener('visibilitychange', n, !0), addEventListener('pagehide', n, !0);
      };
      const o = function(t) {
        addEventListener(
          'pageshow',
          function(e) {
            e.persisted && t(e);
          },
          !0,
        );
      };
      const u = 'function' === typeof WeakSet ? new WeakSet() : new Set();
      const c = function(t, e, n) {
        let i;
        return function() {
          e.value >= 0 &&
              (n || u.has(e) || 'hidden' === document.visibilityState) &&
              ((e.delta = e.value - (i || 0)), (e.delta || void 0 === i) && ((i = e.value), t(e)));
        };
      };
      var s = function(t, e) {
        let n;
        let u = i('CLS', 0);
        const s = function(t) {
          t.hadRecentInput || ((u.value += t.value), u.entries.push(t), n());
        };
        const f = a('layout-shift', s);
        f &&
            ((n = c(t, u, e)),
            r(function() {
              f.takeRecords().map(s), n();
            }),
            o(function() {
              (u = i('CLS', 0)), (n = c(t, u, e));
            }));
      };
      let f = -1;
      const d = function() {
        r(function(t) {
          const e = t.timeStamp;
          f = e;
        }, !0);
      };
      const m = function() {
        return (
          f < 0 &&
              ((f = self.webVitals.firstHiddenTime) === 1 / 0 && d(),
              o(function() {
                setTimeout(function() {
                  (f = 'hidden' === document.visibilityState ? 0 : 1 / 0), d();
                }, 0);
              })),
          {
            get timeStamp() {
              return f;
            },
          }
        );
      };
      var v = function(t, e) {
        let n;
        const r = m();
        let s = i('FCP');
        const f = function(t) {
          'first-contentful-paint' === t.name &&
                (v && v.disconnect(),
                t.startTime < r.timeStamp &&
                  ((s.value = t.startTime), s.entries.push(t), u.add(s), n()));
        };
        const d = performance.getEntriesByName('first-contentful-paint')[0];
        var v = d ? null : a('paint', f);
        (d || v) &&
            ((n = c(t, s, e)),
            d && f(d),
            o(function(a) {
              (s = i('FCP')),
              (n = c(t, s, e)),
              requestAnimationFrame(function() {
                requestAnimationFrame(function() {
                  (s.value = performance.now() - a.timeStamp), u.add(s), n();
                });
              });
            }));
      };
      var p = function(t, e) {
        let n;
        const s = m();
        let f = i('FID');
        const d = function(t) {
          t.startTime < s.timeStamp &&
                ((f.value = t.processingStart - t.startTime), f.entries.push(t), u.add(f), n());
        };
        const v = a('first-input', d);
        (n = c(t, f, e)),
        v &&
              r(function() {
                v.takeRecords().map(d), v.disconnect();
              }, !0),
        v || window.webVitals.firstInputPolyfill(d),
        o(function() {
          (f = i('FID')),
          (n = c(t, f, e)),
          window.webVitals.resetFirstInputPolyfill(),
          window.webVitals.firstInputPolyfill(d);
        });
      };
      var l = function(t, e) {
        let n;
        const s = m();
        let f = i('LCP');
        const d = function(t) {
          const e = t.startTime;
          e < s.timeStamp && ((f.value = e), f.entries.push(t)), n();
        };
        const v = a('largest-contentful-paint', d);
        if (v) {
          n = c(t, f, e);
          const p = function() {
            u.has(f) || (v.takeRecords().map(d), v.disconnect(), u.add(f), n());
          };
          ['keydown', 'click'].forEach(function(t) {
            addEventListener(t, p, { once: !0, capture: !0 });
          }),
          r(p, !0),
          o(function(a) {
            (f = i('LCP')),
            (n = c(t, f, e)),
            requestAnimationFrame(function() {
              requestAnimationFrame(function() {
                (f.value = performance.now() - a.timeStamp), u.add(f), n();
              });
            });
          });
        }
      };
      var h = function(t) {
        let e;
        const n = i('TTFB');
        (e = function() {
          try {
            const e =
                performance.getEntriesByType('navigation')[0] ||
                (function() {
                  const t = performance.timing;
                  const e = { entryType: 'navigation', startTime: 0 };
                  for (const n in t) {
                    'navigationStart' !== n &&
                      'toJSON' !== n &&
                      (e[n] = Math.max(t[n] - t.navigationStart, 0));
                  }
                  return e;
                })();
            if (((n.value = n.delta = e.responseStart), n.value < 0)) {return;}
            (n.entries = [e]), t(n);
          } catch (e) {}
        }),
        'complete' === document.readyState ? setTimeout(e, 0) : addEventListener('pageshow', e);
      };
    },
  },
]);
//# sourceMappingURL=589-74f73fa7d1f5a231ae8c.js.map
