var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a2, b2) => {
  for (var prop in b2 || (b2 = {}))
    if (__hasOwnProp.call(b2, prop))
      __defNormalProp(a2, prop, b2[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b2)) {
      if (__propIsEnum.call(b2, prop))
        __defNormalProp(a2, prop, b2[prop]);
    }
  return a2;
};
var __spreadProps = (a2, b2) => __defProps(a2, __getOwnPropDescs(b2));
import { defineComponent, ref, reactive, watch, nextTick, onMounted, onUnmounted, toRefs, openBlock, createElementBlock, createElementVNode, normalizeClass, renderSlot, toDisplayString, createCommentVNode, withModifiers, normalizeStyle } from "vue";
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var extendStatics = function(d2, b2) {
  extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d3, b3) {
    d3.__proto__ = b3;
  } || function(d3, b3) {
    for (var p in b3)
      if (Object.prototype.hasOwnProperty.call(b3, p))
        d3[p] = b3[p];
  };
  return extendStatics(d2, b2);
};
function __extends(d2, b2) {
  if (typeof b2 !== "function" && b2 !== null)
    throw new TypeError("Class extends value " + String(b2) + " is not a constructor or null");
  extendStatics(d2, b2);
  function __() {
    this.constructor = d2;
  }
  d2.prototype = b2 === null ? Object.create(b2) : (__.prototype = b2.prototype, new __());
}
var __assign = function() {
  __assign = Object.assign || function __assign2(t) {
    for (var s2, i2 = 1, n2 = arguments.length; i2 < n2; i2++) {
      s2 = arguments[i2];
      for (var p in s2)
        if (Object.prototype.hasOwnProperty.call(s2, p))
          t[p] = s2[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
function __rest(s2, e2) {
  var t = {};
  for (var p in s2)
    if (Object.prototype.hasOwnProperty.call(s2, p) && e2.indexOf(p) < 0)
      t[p] = s2[p];
  if (s2 != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i2 = 0, p = Object.getOwnPropertySymbols(s2); i2 < p.length; i2++) {
      if (e2.indexOf(p[i2]) < 0 && Object.prototype.propertyIsEnumerable.call(s2, p[i2]))
        t[p[i2]] = s2[p[i2]];
    }
  return t;
}
function __values(o2) {
  var s2 = typeof Symbol === "function" && Symbol.iterator, m2 = s2 && o2[s2], i2 = 0;
  if (m2)
    return m2.call(o2);
  if (o2 && typeof o2.length === "number")
    return {
      next: function() {
        if (o2 && i2 >= o2.length)
          o2 = void 0;
        return { value: o2 && o2[i2++], done: !o2 };
      }
    };
  throw new TypeError(s2 ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
var e$1 = function() {
  function e2() {
    this.__map = {};
  }
  return e2.prototype.beforeEach = function(t) {
    this.__interceptor = t;
  }, e2.prototype.on = function(r2, e3) {
    var i2, o2, n2 = Array.isArray(r2) ? r2 : [r2];
    try {
      for (var a2 = __values(n2), _ = a2.next(); !_.done; _ = a2.next()) {
        var p = _.value;
        this.__map[p] = this.__map[p] || [];
        var f2 = this.__map[p];
        f2 && f2.push(e3);
      }
    } catch (t) {
      i2 = { error: t };
    } finally {
      try {
        _ && !_.done && (o2 = a2.return) && o2.call(a2);
      } finally {
        if (i2)
          throw i2.error;
      }
    }
    return this;
  }, e2.prototype.emit = function(t, r2, e3) {
    var i2 = this;
    this.__interceptor !== void 0 ? this.__interceptor(t, function() {
      i2.__emit(t, r2), e3 && e3();
    }) : (this.__emit(t, r2), e3 && e3());
  }, e2.prototype.__emit = function(e3, i2) {
    var o2, n2, a2 = this.__map[e3];
    if (Array.isArray(a2) && (a2 == null ? void 0 : a2.length))
      try {
        for (var _ = __values(a2), p = _.next(); !p.done; p = _.next()) {
          (0, p.value)(i2);
        }
      } catch (t) {
        o2 = { error: t };
      } finally {
        try {
          p && !p.done && (n2 = _.return) && n2.call(_);
        } finally {
          if (o2)
            throw o2.error;
        }
      }
    this.event = __assign(__assign({}, i2), { __type: e3 });
  }, e2.prototype.off = function(t, r2) {
    var e3 = this.__map[t];
    if (e3 !== void 0)
      if (r2 === void 0)
        delete this.__map[t];
      else {
        var i2 = e3.findIndex(function(t2) {
          return t2 === r2;
        });
        e3.splice(i2, 1);
      }
  }, e2.prototype.destroy = function() {
    this.__map = {};
  }, e2;
}();
var e = Object.prototype.toString;
function n(t) {
  return e.call(t) === "[object Function]";
}
var o, c = "clientX", u = "clientY", r = 16, a$1 = "start", i$1 = "move", d$2 = "cancel", l = "end", m$1 = "computed", s = "left", v$1 = "right", f$1 = "up", h$1 = "down", g = "touchstart", j = "touchmove", w$1 = "touchend", x$1 = "touchcancel", y = "mouseup", F = "mousemove", M = "mousedown", N = ((o = {})[4] = "start", o[5] = "move", o[1] = "end", o[3] = "cancel", o);
function O(t) {
  return N[t];
}
function S(t, e2, n2) {
  var o2, c2, u2, r2, a2, i2, d2, l2 = { 1: (o2 = {}, o2[0] = (c2 = {}, c2.move = 4, c2), o2[4] = (u2 = {}, u2.move = 5, u2.end = 1, u2.cancel = 3, u2), o2[5] = (r2 = {}, r2.move = 5, r2.end = 1, r2.cancel = 3, r2), o2), 0: (a2 = {}, a2[4] = (i2 = {}, i2.move = 2, i2.end = 1, i2.cancel = 3, i2), a2[5] = (d2 = {}, d2.start = 2, d2.move = 2, d2.end = 1, d2.cancel = 3, d2), a2) }[Number(t)][e2];
  return l2 !== void 0 && l2[n2] || 0;
}
function X(t) {
  [1, 3, 2].includes(t.state) && (t.state = 0);
}
function Y(t) {
  return [4, 5].includes(t);
}
function k(t) {
  if (t.disabled)
    return t.state = 0, true;
}
function q(e2, n2) {
  return __assign(__assign(__assign({}, e2), n2), { state: 0, disabled: false });
}
function E() {
  var e2, n2, r2, i2, c2 = 0;
  return function(s2) {
    if (e2 = n2, s2 !== void 0) {
      var p = function(t, e3) {
        var n3 = t.phase, r3 = t.points, i3 = t.changedPoints, c3 = t.nativeEvent, s3 = r3.length, p2 = a$1 === n3, v3 = l === n3 && s3 === 0 || d$2 === n3, f3 = Date.now(), l$1 = b(r3) || b(i3), h2 = l$1.x, d2 = l$1.y, g2 = c3.currentTarget;
        return Object.assign(t, { id: e3, x: h2, y: d2, timestamp: f3, isStart: p2, isEnd: v3, pointLength: s3, currentTarget: g2, getOffset: function(t2) {
          t2 === void 0 && (t2 = g2);
          var e4 = t2.getBoundingClientRect();
          return { x: h2 - Math.round(e4.left), y: d2 - Math.round(e4.top) };
        } });
      }(s2, c2 = Number.MAX_SAFE_INTEGER > c2 ? ++c2 : 1);
      n2 = p;
      var v2 = p.isStart, f2 = p.pointLength;
      return v2 && (r2 = p, e2 = void 0, i2 = 1 < f2 ? p : void 0), __assign(__assign({}, p), { prevInput: e2, startMultiInput: i2, startInput: r2 });
    }
  };
}
function b(t) {
  var e2 = t.length;
  if (0 < e2) {
    if (e2 === 1) {
      var n2 = t[0], r2 = n2.clientX, i2 = n2.clientY;
      return { x: Math.round(r2), y: Math.round(i2) };
    }
    var o2 = t.reduce(function(t2, e3) {
      return t2.x += e3[c], t2.y += e3[u], t2;
    }, { x: 0, y: 0 });
    return { x: Math.round(o2.x / e2), y: Math.round(o2.y / e2) };
  }
}
function L(t, n2, r2, i2) {
  r2.target, r2.currentTarget, r2.type;
  var o2, a2 = __rest(r2, ["target", "currentTarget", "type"]);
  return document.createEvent ? (o2 = document.createEvent("HTMLEvents")).initEvent(t, i2 == null ? void 0 : i2.bubbles, i2 == null ? void 0 : i2.cancelable) : o2 = new Event(t, i2), Object.assign(o2, a2, { match: function() {
    return r2.targets && 0 < r2.targets.length && r2.targets.every(function(t2) {
      return o2.currentTarget.contains(t2);
    });
  } }), n2.dispatchEvent(o2);
}
var T = [g, j, w$1, x$1];
var w = { domEvents: { bubbles: true, cancelable: true }, preventDefault: function(t) {
  if (t.target && "tagName" in t.target) {
    var e2 = t.target.tagName;
    return !/^(?:INPUT|TEXTAREA|BUTTON|SELECT)$/.test(e2);
  }
  return false;
} }, x = function(e2) {
  function i2(n2, r2) {
    var i3, u2 = e2.call(this) || this;
    u2.__computeFunctionList = [], u2.__computeFunctionCreatorList = [], u2.__pluginContexts = [], u2.el = n2, u2.c = {}, u2.__options = __assign(__assign({}, w), r2);
    var c2, s2, h2, y$1, b2 = function(t) {
      var e3 = E();
      return function(n3) {
        var r3 = [], i4 = [];
        Array.from(n3.touches).forEach(function(e4) {
          var n4 = e4.clientX, o3 = e4.clientY, a2 = e4.target;
          (t == null ? void 0 : t.contains(a2)) && (r3.push(a2), i4.push({ clientX: n4, clientY: o3, target: a2 }));
        });
        var o2 = Array.from(n3.changedTouches).map(function(t2) {
          return { clientX: t2.clientX, clientY: t2.clientY, target: t2.target };
        });
        return e3({ phase: n3.type.replace("touch", ""), changedPoints: o2, points: i4, nativeEvent: n3, target: n3.target, targets: r3 });
      };
    }(u2.el), x2 = (s2 = false, h2 = null, y$1 = E(), function(t) {
      var e3, n3 = t.clientX, r3 = t.clientY, i4 = t.type, u3 = t.button, d2 = t.target, g2 = [{ clientX: n3, clientY: r3, target: d2 }];
      if (M === i4 && u3 === 0)
        h2 = d2, s2 = true, e3 = a$1;
      else {
        if (!s2)
          return;
        F === i4 ? e3 = i$1 : y === i4 && (g2 = [], e3 = l, s2 = false);
      }
      var m2 = c2 || [{ clientX: n3, clientY: r3, target: d2 }];
      if (c2 = [{ clientX: n3, clientY: r3, target: d2 }], e3 !== void 0)
        return y$1({ phase: e3, changedPoints: m2, points: g2, target: h2, targets: [h2], nativeEvent: t });
    });
    if (u2.__inputCreatorMap = ((i3 = {})[g] = b2, i3[j] = b2, i3[w$1] = b2, i3[x$1] = b2, i3[M] = x2, i3[F] = x2, i3[y] = x2, i3), u2.on("at:after", function(t) {
      var e3 = t.target, n3 = t.__type, r3 = u2.__options.domEvents;
      r3 && u2.el !== void 0 && e3 && (L(n3, e3, t, r3), L("at:after", e3, t, r3));
    }), n2 !== void 0) {
      n2.style.webkitTapHighlightColor = "rgba(0,0,0,0)";
      var C = false;
      try {
        var M$1 = {};
        Object.defineProperty(M$1, "passive", { get: function() {
          C = true;
        } }), window.addEventListener("_", function() {
        }, M$1);
      } catch (t) {
      }
      u2.on("u", function(t, e3, n3) {
        return T.forEach(function(r3) {
          t.addEventListener(r3, e3, n3);
        }), t.addEventListener(M, e3, n3), window.addEventListener(F, e3, n3), window.addEventListener(y, e3, n3), function() {
          T.forEach(function(n4) {
            t.removeEventListener(n4, e3);
          }), t.removeEventListener(M, e3, n3), window.removeEventListener(F, e3, n3), window.removeEventListener(y, e3, n3);
        };
      }(n2, u2.catchEvent.bind(u2), !(u2.__options.preventDefault !== false || !C) && { passive: true }));
    }
    return u2;
  }
  return __extends(i2, e2), i2.prototype.use = function(t, e3) {
    this.__pluginContexts.push(t(this, e3));
  }, i2.prototype.catchEvent = function(e3) {
    var n$1 = this.__inputCreatorMap[e3.type](e3);
    if (n$1 !== void 0) {
      var r2 = function() {
        return e3.preventDefault();
      };
      (function(t, e4) {
        var n$12 = e4.preventDefault;
        return n(n$12) ? n$12(t) : !!n$12;
      })(e3, this.__options) && r2(), this.emit("input", n$1), this.emit2("at:" + n$1.phase, n$1, {});
      var i3 = {};
      this.__computeFunctionList.forEach(function(t) {
        var e4 = t(n$1, i3);
        if (e4 !== void 0)
          for (var r3 in e4)
            i3[r3] = e4[r3];
      }), this.emit(m$1, __assign(__assign(__assign({}, n$1), i3), { stopPropagation: function() {
        return e3.stopPropagation();
      }, stopImmediatePropagation: function() {
        return e3.stopImmediatePropagation();
      }, preventDefault: r2 }));
    }
  }, i2.prototype.compute = function(t, e3) {
    var n2, i3;
    try {
      for (var o2 = __values(t), a2 = o2.next(); !a2.done; a2 = o2.next()) {
        var u2 = a2.value;
        this.__computeFunctionCreatorList.includes(u2) || (this.__computeFunctionCreatorList.push(u2), this.__computeFunctionList.push(u2()));
      }
    } catch (t2) {
      n2 = { error: t2 };
    } finally {
      try {
        a2 && !a2.done && (i3 = o2.return) && i3.call(o2);
      } finally {
        if (n2)
          throw n2.error;
      }
    }
    this.on(m$1, e3);
  }, i2.prototype.beforeEach = function(t) {
    var n2 = this;
    e2.prototype.beforeEach.call(this, function(e3, r2) {
      var i3;
      ((i3 = n2.c) === null || i3 === void 0 ? void 0 : i3.name) ? t(e3, r2) : r2();
    });
  }, i2.prototype.get = function(t) {
    return this.__pluginContexts.find(function(e3) {
      return t === e3.name;
    });
  }, i2.prototype.set = function(e3) {
    this.__options = __assign(__assign({}, this.__options), e3);
  }, i2.prototype.emit2 = function(e3, n2, r2) {
    var i3 = this;
    this.c = r2, this.emit(e3, __assign(__assign({}, n2), { type: e3 }), function() {
      i3.emit("at:after", __assign(__assign({}, n2), { name: e3, __type: e3 }));
    });
  }, i2.prototype.destroy = function() {
    this.emit("u"), e2.prototype.destroy.call(this);
  }, i2;
}(e$1);
var a = function(r2) {
  return Math.sqrt(r2.x * r2.x + r2.y * r2.y);
}, i = function(r2) {
  return r2 / Math.PI * 180;
}, h = function(a2, o2) {
  if (a2 !== 0 || o2 !== 0)
    return Math.abs(a2) >= Math.abs(o2) ? 0 < a2 ? v$1 : s : 0 < o2 ? h$1 : f$1;
};
function v() {
  return function(t) {
    var r2 = t.prevInput, a2 = 0, e2 = 0, o2 = 0;
    if (r2 !== void 0 && (a2 = t.x - r2.x, e2 = t.y - r2.y, a2 !== 0 || e2 !== 0)) {
      var i$12 = Math.sqrt(Math.pow(a2, 2) + Math.pow(e2, 2));
      o2 = Math.round(i(Math.acos(Math.abs(a2) / i$12)));
    }
    return { deltaX: a2, deltaY: e2, deltaXYAngle: o2 };
  };
}
function d$1() {
  var t, n2 = 0, c$1 = 0, p = 0, s2 = 0, v2 = 0;
  return function(d2) {
    var h$12 = d2.phase, f2 = d2.startInput;
    return a$1 === h$12 ? (n2 = 0, c$1 = 0, p = 0, s2 = 0, v2 = 0) : i$1 === h$12 && (n2 = Math.round(d2.points[0][c] - f2.points[0][c]), c$1 = Math.round(d2.points[0][u] - f2.points[0][u]), p = Math.abs(n2), s2 = Math.abs(c$1), v2 = Math.round(a({ x: p, y: s2 })), t = h(n2, c$1)), { displacementX: n2, displacementY: c$1, distanceX: p, distanceY: s2, distance: v2, overallDirection: t };
  };
}
function f() {
  var t, n2, r$1 = 0, e2 = 0, o2 = 0, i2 = 0;
  return function(u2) {
    if (u2 !== void 0) {
      n2 = n2 || u2.startInput;
      var c2 = u2.timestamp - n2.timestamp;
      if (r < c2) {
        var s2 = u2.x - n2.x, v2 = u2.y - n2.y;
        o2 = Math.round(s2 / c2 * 100) / 100, i2 = Math.round(v2 / c2 * 100) / 100, r$1 = Math.abs(o2), e2 = Math.abs(i2), t = h(s2, v2), n2 = u2;
      }
    }
    return { velocityX: r$1, velocityY: e2, speedX: o2, speedY: i2, direction: t };
  };
}
var d = { name: "pan", threshold: 10, pointLength: 1 };
function m(m2, u2) {
  var f$12 = q(d, u2);
  return m2.compute([f, d$1, v], function(t) {
    if (X(f$12), !k(f$12)) {
      var h2, c2, p, d2, u3, l$1 = (h2 = t.pointLength, c2 = t.distance, p = t.direction, d2 = t.phase, u3 = f$12.state, (Y(u3) || f$12.threshold <= c2) && f$12.pointLength === h2 && p !== void 0 || Y(u3) && [d$2, l].includes(d2));
      if (f$12.state = S(l$1, f$12.state, t.phase), l$1) {
        var v2 = f$12.name;
        m2.emit2(v2, t, f$12), m2.emit2(v2 + O(f$12.state), t, f$12), ![l, d$2].includes(t.phase) && t.direction && m2.emit2(v2 + t.direction, t, f$12);
      }
    }
  }), f$12;
}
const AudioPlayerOptionDefault = {
  src: "",
  title: "",
  autoPlay: false,
  coverImage: "",
  coverRotate: true,
  progressBarColor: "#3C91F4",
  indicatorColor: "#3C91F4"
};
const formatSecond = (second) => {
  let hour_str = `${Math.floor(second / 60)}`;
  let second_str = `${Math.ceil(second % 60)}`;
  if (hour_str.length === 1) {
    hour_str = `0${hour_str}`;
  }
  if (second_str.length === 1) {
    second_str = `0${second_str}`;
  }
  return `${hour_str}:${second_str}`;
};
var IconPlay = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAAaVBMVEUAAAAsLCwsLCwrKysrKysrKystLS0rKyssLCwsLCwsLCwsLCwrKyssLCwuLi4sLCwsLCwsLCwsLCwrKyssLCwrKyssLCwsLCwsLCwrKyssLCwsLCwsLCwsLCwsLCwrKysrKystLS0sLCzwNR2YAAAAInRSTlMAQMMg2RQFurTxi3NgVhvqzKiYLuTen21HNSj5k3lnUFl+HOo+7gAAAYdJREFUeNrt2mlygkAQQOEeFkEE3BXUGNP3P2Tyr6uyakp4ltPfCV7RLsVMi3POOeecu9YkDelEKE2ZHfXDNpm1Mr46UTNdBRlXSPST5VpGVOlX07eJjKXUby0aGUethphD0J9NX4afQ57pb5LB5zDTP+wOMqiFGmIOF71C8iqDKdUgc8j0OvOZDOOohphDqzdYpXJ3vRpkDkFvk3RYgM0BDtDNHgowRQcFmFNKBdgcoABTBCjAnFo4QLdnLMDmAAWYKocDNDtDAaYMWIDNAQ7QrIYCzDKFA3TTQQFmTwdooAM0pwN2dIDWdEBJB2hPB1R0wIIOmNMBmtMBPR2wlshHgH8I8a8h/kPUx/5nVMMBhcABLRxQCxvQCBqQreFXszzql9Mqj/mAIjtHfUhVhKgPKk9tzIfVm33UFxZFF/Wl1Sp9rotL/OoWv7zGr+/5BQZ8hQNfYsHXePhFpnwLr3LJBXr6poLW+UwBLTSaBlrpNIfin0//adZ6H2Cx+QFWu51zzjnnntk7RtaPfcpOlQoAAAAASUVORK5CYII=";
var IconPause = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACABAMAAAAxEHz4AAAAIVBMVEUAAAArKystLS0sLCwsLCwsLCwrKysrKysuLi4rKyssLCwr2prcAAAACnRSTlMA32Pso5eOWBwSpDP37gAAAKJJREFUaN7t2KsRwmAQRWFU0gAIUgFQAYPD4rColJAaoALogJe5VWIyDMvOP1dkonI+ecURK3cGAEDZ+ajeYuX3rNrp69naPVPg9qxW0Jk9uypYmj3bKHiYPTsoeJk9axTczZ7pT2knQIAAAQIECBAgQIAAAQIECEw3MPgBcVLwNvsIT5iLgq3Zs0pBa/bhr7Csbn5u3fk9u+3Vm6+LOwAARR8xXXbv+0wzMgAAAABJRU5ErkJggg==";
var CoverImageDefault = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAAn1BMVEUAAADa2trb29vb29vc3Nzc3Nzb29vb29vb29vc3Nzb29vc3Nzf39/b29vb29vc3Nzd3d3b29vb29vc3Nzb29vb29vc3Nzc3Nzb29vc3Nzc3Nzb29vd3d3a2trb29vZ2dnb29vb29vc3Nzb29vc3Nzc3Nzb29vb29vc3Nzc3Nzc3Nzb29vb29vc3Nzb29vc3Nzb29vb29vb29vb29vb29tVgExrAAAANHRSTlMAgD91vxzUybgw7qkRVlEVDPPcSTX54MSRb0wqJSGXB857W5yEsq2loERoY1855OiMiWvYaXMgsAAAB4pJREFUeNrtWteiojAQDQgIFooNOxauvZv//7bFJc4QkRrv7ovn6V41zGTamUwgX3zxxRelMNnurit31jo5tFvraVVlOW92GuTfwKjo9D1a/aFFfhntvkZToUsdAvi89BbNAaUyIr+AxhykZ+Nn+Gnx3gDE/xcVdm893z23Zm5V69V+W4WhQl9wqvsLwyYAdbvr6w59wXLyEfGj5avwQUKQHecvmp4HRBySw1l9baZrO5/xWXkUFK/WaQSzyjiHwzZdinD2YpkfDT7lkNdpfo8i+gLyK9GgNosUjcEs4gajrPwrBfR2BdfafiRszXLypxQwVYsvlyOcVSoQqshyprAHK8VX4+J66XoiV8tr0BJQHtFANzaLrUT/CVZ0qZwGqHinZAHpCGmA0aOWk98MmIgw7OFh7dzqwxIRw8+esbulDFrO7ahQf8ekJMb0ARPswVDPt7r+gfjbnmkAif03pwzzQnHbFOrhZtEtrAvs6diF/BfDhgaQWT2oPhk1e90P+EsUUiSNO8++MbNHuj3r/4R8RIM7a98WT1pVM8L3RClEsDAuwYNWL6F1yVcCpyIEgJtco9G9ZxgYqc1UFwxVGu2I+pPAoDUm0czTol3Yj3aCfZwLJxpwAljXSSlvExarP0QAnb9SoKrhdtRz+PRr8lpfNAKRyu7PaUKwJ83jHn9Ws7oQhYhhH60jc4zDsQMlLp0FD0QQ5kPShrXHWlBU2PSmHz7fja/gvp8RYcg93MceScigIeR0D1SIOIxukMusmCqBCTyu0+uneqA7FhB8WIyw8LGmaBj8uQj/HLCTip3mgbWA/GYQ8iPmejS1BiE5TmX6mXgOShQ0OGAm+Nhc6SmEMGJVmAjAeux7Fhp4BW1oBwNrkJIHu/C7TaG+Z3I0LG4XDw38sLPBKNBB5JGGsJM7kX2BkanCdG5GNOgFYRyORdyAiCyojUxPRvdbEkfBTli9dinAZYHDfP8Drr9BfrW5jld6Q0TFQmDRoxzW0V6w+3e7W/jYYn7BY8rqTSNdqBWU6CtqkIqQ9g8eCj+7U6pzod5KjEE/X6kFuXEb2I/ggzxoPA3v8J62k+Yxi1z+v9M3kAiUXgXMLQMlely9j4/vVtCxFRoezXrohDEqAHYyITItLtl2SRMZOxfTwOwm+PlkDpOkNwrsIcAmTPkkV4c76RaJQIlPIFrznmmAClQg9BhLVZIIMdzVucD4qoptIHfya9fo4UWBBjsjYbAvY3M9SI9MeCAOIHF2fVZnGX2N1LhI4Nwx3w1tlCRSRIs3CMB8yyMyEG8Dw9tMaLyPHE0dsLDEceR0BQEB9BcFoOirWOO3CY2vwflVShzP4E97cfut4sGC36tc36XHmJyNcWIKDHvL8ZufYl6hY+MnStliUYoeayaRAbctGV1Qx+PlU2J8grFO5Dh0hsfYKKntqHGUIikGVsh+uIsZnfJDJKyMWUNFC5ugQdLxW4OHxg7sqxe37Ji8qgptL/gvAY2bBSelhAMi624gVFxcUAU/W+HTNOAfszE6LAtNlZdsZdIXW7CyBD47gR8NiDkORY6Ubqz35k2zg6hy0b6Qy3sIOg6oezbOmEI8mhxJ3IA9VFBXi2yyRhHZ8694yXIIgicUHavdDc4rG+AxE2sMIH8ng2LcBNUgD+0u1Aop0Nf+a4tatP7WOfG9ZrFB/DT5bNyBWHEsKN4LGPLoWFyW4IfqoFHwJmSffDatsJgEJvNOT+6yNb6EeUN/o6+mRd6Z8NiQZETiGHI8aWDTMAXuHwsfHts0ue+xWBBYYKsWtoBMLVl0iiyljeF0rhIMMA8u2P6oMyzXApeR8zTtdJzq3W0YH1ZZmNl1KonMEEO0U789MopDTX2uiRP3QDXha4UbX4wD15/UcNsuRx/CHqikF4mThdHvs8LoYK0TzwFnkjQr52nVCKQ6I+BE0fkhVs9N1nXN3cNi1McyVRceX6aEIH/BdwPuRvqRVgvSkLNLbnYvomQHycxGnznb6CCvNhA3wCHHlZUfucA4Qak3xN5J0aFzTIbdgnEyOuE+hvGPyCx/ACGeXSmQdb3uo25Y8JBa6Vn++Mw6B4ukQkE90ey6R4SxhgDPOX6Sox+sVEHxaNrcv6w2ohrcm2LyF9y+8jlhyhvlIiAer44vJP/1ObLP5O8nrlFWPF6eV+0i+YIaeCsaoHsTDUAqF/w99q4XkcuUftFXktR7XOOFBlW0ZAIUYTPzzXmv8TBCU8T+WqwNyOQEfs/bVRkeqKP8omaDBlYANpMPfVYJDdZQBUVep+va5V8GvA9LEyDc6jilLiEBkleK/x7sDRNgMQ2qZontn3F56YtYxFQt/0bpz0deKz77BS61txuKuHzqxWqnb+TkXp0iansihDmNYtXMDEfD16Ir3M6H3+1vXY8pOqiHH8rhYhNxDHqUg+NOF6M453d2S43y0GXyEagXGkfr51rZLcxtu7kfzJfumcbQu5GPweg7tCC0ikU+ifH1XES8ciAfh1pxc0p3Nm3yO5D7p2zx1cqE/B7s5rKVanq/TX4dnbnSe2f42dK0yL+CNxoO/P5y/aPoq830Ki2OFvniiy++KIc/UEKQQoJw9wEAAAAASUVORK5CYII=";
var AudioPlayer_vue_vue_type_style_index_0_scoped_true_lang = "";
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const mergeOption = (option) => {
  return {
    src: option.src || AudioPlayerOptionDefault.src,
    title: option.title || AudioPlayerOptionDefault.title,
    autoPlay: option.autoPlay || AudioPlayerOptionDefault.autoPlay,
    coverImage: option.coverImage || AudioPlayerOptionDefault.coverImage,
    coverRotate: option.coverRotate || AudioPlayerOptionDefault.coverRotate,
    progressBarColor: option.progressBarColor || AudioPlayerOptionDefault.progressBarColor,
    indicatorColor: option.indicatorColor || AudioPlayerOptionDefault.indicatorColor
  };
};
const _sfc_main = defineComponent({
  props: {
    option: {
      type: Object,
      default: AudioPlayerOptionDefault
    }
  },
  emits: [
    "loadedmetadata",
    "playing",
    "play",
    "play-error",
    "timeupdate",
    "pause",
    "ended",
    "progress-start",
    "progress-end",
    "progress-move",
    "progress-click"
  ],
  setup(props, { emit }) {
    const audioPlayer = ref();
    const audioProgressWrap = ref();
    const audioProgressPoint = ref();
    const audioProgress = ref();
    const progressInterval = 200;
    const option_ = ref(mergeOption(props.option));
    let toucher = null;
    let timer = null;
    const state = reactive({
      isPlaying: false,
      isDragging: false,
      currentTime: 0,
      totalTime: 0,
      totalTimeStr: "00:00"
    });
    const initState = () => {
      state.isPlaying = false;
      state.isDragging = false;
      state.currentTime = 0;
      state.totalTime = 0;
      state.totalTimeStr = "00:00";
    };
    const playUpdate = () => {
      if (state.isDragging) {
        return;
      }
      const offsetLeft = audioPlayer.value.currentTime / audioPlayer.value.duration * audioProgressWrap.value.offsetWidth;
      state.currentTime = audioPlayer.value.currentTime;
      audioProgress.value.style.width = `${offsetLeft}px`;
      setPointPosition(offsetLeft);
      emit("playing");
    };
    const startTimer = () => {
      clearTimer();
      timer = window.setInterval(playUpdate, progressInterval);
      state.isPlaying = true;
    };
    const clearTimer = () => {
      if (timer) {
        window.clearInterval(timer);
        timer = null;
      }
    };
    const play = () => {
      audioPlayer.value.play().then(() => {
        startTimer();
        setTotalTime(audioPlayer.value.duration);
      }).catch((error) => {
        emit("play-error", error);
      });
    };
    const pause = () => {
      audioPlayer.value.pause();
      state.isPlaying = false;
    };
    const togglePlayer = () => {
      if (state.isPlaying) {
        pause();
      } else {
        play();
      }
    };
    const setTotalTime = (seconds) => {
      state.totalTime = seconds;
      state.totalTimeStr = formatSecond(state.totalTime);
    };
    const onAudioEnded = () => {
      console.log("onAudioEnded");
      state.isPlaying = false;
      clearTimer();
      emit("ended");
    };
    const onAudioPause = () => {
      console.log("onAudioPause");
      state.isPlaying = false;
      console.log("epgpt");
      emit("pause");
    };
    const onAudioPlay = () => {
      console.log("onAudioPlay");
      state.isPlaying = true;
      emit("play");
    };
    const onLoadMetaData = (e2) => {
      console.log("onLoadMetaData", e2);
      setTotalTime(e2.target.duration);
      emit("loadedmetadata", e2);
    };
    const onTimeUpdate = (event) => {
      emit("timeupdate", event);
    };
    const setPointPosition = (offsetLeft) => {
      audioProgressPoint.value.style.left = `${offsetLeft - audioProgressPoint.value.offsetWidth / 2}px`;
    };
    const handleProgressPanStart = (event) => {
      state.isDragging = true;
      emit("progress-start", event);
    };
    const handleProgressPanEnd = (event) => {
      audioPlayer.value.currentTime = state.currentTime;
      play();
      state.isDragging = false;
      emit("progress-end", event);
    };
    const handleProgressPanMove = (event) => {
      const pageX = event.x;
      const bcr = event.target.getBoundingClientRect();
      const targetLeft = parseInt(getComputedStyle(event.target).left);
      let offsetLeft = targetLeft + (pageX - bcr.left);
      offsetLeft = Math.min(offsetLeft, audioProgressWrap.value.offsetWidth);
      offsetLeft = Math.max(offsetLeft, 0);
      setPointPosition(offsetLeft);
      audioProgress.value.style.width = `${offsetLeft}px`;
      state.currentTime = offsetLeft / audioProgressWrap.value.offsetWidth * state.totalTime;
      emit("progress-move", event);
    };
    const handleClickProgressWrap = (event) => {
      const { offsetX } = event;
      if (event.target === audioProgressPoint.value) {
        return;
      }
      state.currentTime = offsetX / audioProgressWrap.value.offsetWidth * state.totalTime;
      audioPlayer.value.currentTime = state.currentTime;
      setPointPosition(offsetX);
      audioProgress.value.style.width = `${offsetX}px`;
      play();
      emit("progress-click", event);
    };
    watch(() => props.option, (newValue, oldValue) => {
      option_.value = mergeOption(newValue);
      initState();
      if (option_.value.autoPlay) {
        nextTick(() => {
          play();
        });
      }
    }, { deep: true });
    onMounted(() => {
      toucher = new x(document.getElementById("app") || void 0, {
        preventDefault: false
      });
      toucher.use(m);
    });
    onUnmounted(() => {
      if (toucher)
        toucher.destroy();
    });
    return __spreadProps(__spreadValues({
      audioPlayer,
      option_
    }, toRefs(state)), {
      onAudioEnded,
      onAudioPlay,
      onAudioPause,
      onLoadMetaData,
      onTimeUpdate,
      play,
      pause,
      togglePlayer,
      formatSecond,
      handleProgressPanStart,
      handleProgressPanEnd,
      handleProgressPanMove,
      handleClickProgressWrap,
      audioProgressWrap,
      audioProgressPoint,
      audioProgress,
      IconPlay,
      IconPause,
      CoverImageDefault
    });
  }
});
const _hoisted_1 = { class: "audio__player" };
const _hoisted_2 = { class: "audio__player-play-and-title" };
const _hoisted_3 = { class: "audio__player-play-cont" };
const _hoisted_4 = ["src"];
const _hoisted_5 = { class: "audio__player-play-icon" };
const _hoisted_6 = ["src"];
const _hoisted_7 = {
  key: 0,
  class: "audio__player-title"
};
const _hoisted_8 = { class: "audio__player-progress-container" };
const _hoisted_9 = { class: "audio__player-time" };
const _hoisted_10 = ["src"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createElementVNode("div", _hoisted_2, [
      createElementVNode("div", _hoisted_3, [
        createElementVNode("div", {
          class: "audio__player-play",
          onClick: _cache[0] || (_cache[0] = (...args) => _ctx.togglePlayer && _ctx.togglePlayer(...args))
        }, [
          createElementVNode("img", {
            src: _ctx.option_.coverImage ? _ctx.option_.coverImage : _ctx.CoverImageDefault,
            class: normalizeClass(`${_ctx.isPlaying && _ctx.option_.coverRotate ? "audio__player-spin-anim" : ""}`)
          }, null, 10, _hoisted_4),
          createElementVNode("div", _hoisted_5, [
            createElementVNode("img", {
              src: _ctx.isPlaying ? _ctx.IconPause : _ctx.IconPlay
            }, null, 8, _hoisted_6)
          ])
        ])
      ]),
      renderSlot(_ctx.$slots, "title", {}, () => [
        _ctx.option_.title ? (openBlock(), createElementBlock("div", _hoisted_7, toDisplayString(_ctx.option_.title), 1)) : createCommentVNode("", true)
      ], true)
    ]),
    createElementVNode("div", _hoisted_8, [
      createElementVNode("div", {
        ref: "audioProgressWrap",
        class: "audio__player-progress-wrap",
        onClick: _cache[4] || (_cache[4] = withModifiers((...args) => _ctx.handleClickProgressWrap && _ctx.handleClickProgressWrap(...args), ["stop"]))
      }, [
        createElementVNode("div", {
          ref: "audioProgress",
          class: "audio__player-progress",
          style: normalizeStyle({
            backgroundColor: _ctx.option_.progressBarColor
          })
        }, null, 4),
        createElementVNode("div", {
          ref: "audioProgressPoint",
          class: "audio__player-progress-point",
          style: normalizeStyle({
            backgroundColor: _ctx.option_.indicatorColor,
            boxShadow: `0 0 10px 0 ${_ctx.option_.indicatorColor}`
          }),
          onPanstart: _cache[1] || (_cache[1] = (...args) => _ctx.handleProgressPanStart && _ctx.handleProgressPanStart(...args)),
          onPanend: _cache[2] || (_cache[2] = (...args) => _ctx.handleProgressPanEnd && _ctx.handleProgressPanEnd(...args)),
          onPanmove: _cache[3] || (_cache[3] = (...args) => _ctx.handleProgressPanMove && _ctx.handleProgressPanMove(...args))
        }, null, 36)
      ], 512),
      createElementVNode("div", _hoisted_9, [
        createElementVNode("span", null, toDisplayString(`${_ctx.formatSecond(_ctx.currentTime)}`), 1)
      ])
    ]),
    createElementVNode("audio", {
      ref: "audioPlayer",
      src: _ctx.option_.src,
      onEnded: _cache[5] || (_cache[5] = (...args) => _ctx.onAudioEnded && _ctx.onAudioEnded(...args)),
      onPlay: _cache[6] || (_cache[6] = (...args) => _ctx.onAudioPlay && _ctx.onAudioPlay(...args)),
      onPause: _cache[7] || (_cache[7] = (...args) => _ctx.onAudioPause && _ctx.onAudioPause(...args)),
      onLoadedmetadata: _cache[8] || (_cache[8] = (...args) => _ctx.onLoadMetaData && _ctx.onLoadMetaData(...args)),
      onTimeupdate: _cache[9] || (_cache[9] = (...args) => _ctx.onTimeUpdate && _ctx.onTimeUpdate(...args))
    }, null, 40, _hoisted_10)
  ]);
}
var AudioPlayer = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-1e0ca532"]]);
export { AudioPlayer as default };
