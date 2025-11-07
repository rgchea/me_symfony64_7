(self["webpackChunk"] = self["webpackChunk"] || []).push([["js/jquery-schedule"],{

/***/ "./assets/js/dws_jquery_schedule/dist/jquery.schedule.min.js":
/*!*******************************************************************!*\
  !*** ./assets/js/dws_jquery_schedule/dist/jquery.schedule.min.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

/* provided dependency */ var jQuery = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
__webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
__webpack_require__(/*! core-js/modules/es.date.to-json.js */ "./node_modules/core-js/modules/es.date.to-json.js");
__webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
__webpack_require__(/*! core-js/modules/es.parse-int.js */ "./node_modules/core-js/modules/es.parse-int.js");
__webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
__webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
__webpack_require__(/*! core-js/modules/es.string.match.js */ "./node_modules/core-js/modules/es.string.match.js");
/** jQuery Schedule v2.1.0 | https://github.com/Yehzuna/jquery-schedule */
!function (t, i, e, o) {
  "use strict";

  function s(i, e) {
    this.element = i, this.settings = t.extend({}, r, e), this.periodOptions = {
      title: this.settings.periodTitle,
      backgroundColor: this.settings.periodBackgroundColor,
      borderColor: this.settings.periodBorderColor,
      textColor: this.settings.periodTextColor
    }, this.init();
  }
  var r = {
    mode: "edit",
    hour: 24,
    periodDuration: 30,
    data: [],
    periodOptions: !0,
    periodColors: [],
    periodTitle: "",
    periodBackgroundColor: "rgba(82, 155, 255, 0.5)",
    periodBorderColor: "#2a3cff",
    periodTextColor: "#000",
    periodRemoveButton: "Remove",
    periodDuplicateButton: "Duplicate",
    periodTitlePlaceholder: "Title",
    days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    onInit: function onInit() {},
    onAddPeriod: function onAddPeriod() {},
    onRemovePeriod: function onRemovePeriod() {},
    onDuplicatePeriod: function onDuplicatePeriod() {},
    onClickPeriod: function onClickPeriod() {}
  };
  t.extend(s.prototype, {
    seed: Math.random().toString(36).substr(2),
    counter: 0,
    periodInterval: 0,
    periodHeight: 0,
    periodPosition: 0,
    uniqId: function uniqId() {
      return this.counter++, "jqs_" + this.seed + "_" + this.counter;
    },
    init: function init() {
      var i = this;
      if (this.settings.periodColors.length > 0 && t.each(this.settings.periodColors, function (i, e) {
        if (!t.inArray(e) || 3 !== e.length) throw new Error("Invalid periodColors");
      }), -1 === t.inArray(this.settings.periodDuration, [15, 30, 60])) throw new Error("Invalid periodDuration");
      if (this.periodInterval = 60 / this.settings.periodDuration, this.periodHeight = 24 * this.periodInterval, this.periodPosition = 40 / this.periodInterval, t(this.element).addClass("jqs").addClass("jqs-mode-" + this.settings.mode), "edit" === this.settings.mode) {
        var e = 0,
          o = !1;
        t(this.element).on("mousedown", ".jqs-day", function (s) {
          var r = s.pageY - t(this).offset().top;
          if (e = Math.floor(r / i.periodPosition), !t(s.target).hasClass("jqs-period") && 0 === t(s.target).parents(".jqs-period").length) {
            var n = "";
            15 !== i.settings.periodDuration && (n = i.periodInit(e, e + 1)), o = t("<div>").addClass("jqs-period-helper").css({
              height: i.periodPosition,
              top: e * i.periodPosition
            }).append('<div class="jqs-period-helper-time">' + n + "</div>"), t(this).append(o);
          }
        }), t(this.element).on("mousemove", ".jqs-day", function (s) {
          if (o) {
            var r = s.pageY - t(this).offset().top,
              n = Math.round(r / i.periodPosition) - e;
            n <= 0 && (n = 1), o.css({
              height: n * i.periodPosition
            }), n >= 1 ? t(".jqs-period-helper-time", o).text(i.periodInit(e, e + n)) : t(".jqs-period-helper-time", o).text("");
          }
        }), t(this.element).on("mouseup", ".jqs-day", function (s) {
          if (!t(s.target).hasClass("jqs-period") && 0 === t(s.target).parents(".jqs-period").length) {
            var r = s.pageY - t(this).offset().top,
              n = Math.round(r / i.periodPosition) - e;
            n <= 0 && (n = 1), i.add(t(this), e, n);
          }
          e = 0, o && (o.remove(), o = !1);
        }), t(this.element).on("mouseenter", ".jqs-day", function () {
          var e = t(this).parents("td").index();
          t(".jqs-grid-day", i.element).eq(e).addClass("jqs-grid-day-buttons");
        }), t(this.element).on("mouseleave", ".jqs-day", function () {
          var e = t(this).parents("td").index();
          t(".jqs-grid-day", i.element).eq(e).removeClass("jqs-grid-day-buttons");
        }), t(this.element).on("click", ".jqs-period-remove", function () {
          var e = t(this).parents(".jqs-period");
          i.remove(e);
        }), t(this.element).on("click", ".jqs-period-duplicate", function () {
          var e = t(this).parents(".jqs-period");
          i.duplicate(e);
        }), t(this.element).on("click", ".jqs-day-remove", function () {
          var e = t(this).parents(".jqs-grid-day").index(),
            o = t(".jqs-day", i.element).eq(e);
          i.removeAll(o);
        }), t(this.element).on("click", ".jqs-day-duplicate", function () {
          var e = t(this).parents(".jqs-grid-day").index(),
            o = t(".jqs-day", i.element).eq(e);
          i.duplicateAll(o);
        });
      }
      this.create(), this.generate(), this.settings.onInit.call(this, this.element);
    },
    create: function create() {
      t('<table class="jqs-table"><tr></tr></table>').appendTo(t(this.element));
      for (var i = 0; i < 7; i++) t('<td><div class="jqs-day"></div></td>').appendTo(t(".jqs-table tr", this.element));
      t('<div class="jqs-grid"><div class="jqs-grid-head"></div></div>').appendTo(t(this.element));
      for (var e = 0; e < 25; e++) t('<div class="jqs-grid-line"><div class="jqs-grid-hour">' + this.formatHour(e) + "</div></div>").appendTo(t(".jqs-grid", this.element));
      var o = "",
        s = "";
      "edit" === this.settings.mode && (o = '<div class="jqs-day-remove" title="' + this.settings.periodRemoveButton + '"></div>', s = '<div class="jqs-day-duplicate" title="' + this.settings.periodDuplicateButton + '"></div>');
      for (var r = 0; r < 7; r++) t('<div class="jqs-grid-day">' + this.settings.days[r] + o + s + "</div>").appendTo(t(".jqs-grid-head", this.element));
    },
    generate: function generate() {
      if (this.settings.data.length > 0) {
        var i = this;
        t.each(this.settings.data, function (e, o) {
          t.each(o.periods, function (e, s) {
            var r,
              n,
              d = t(".jqs-day", i.element).eq(o.day),
              a = {};
            t.isArray(s) ? (n = i.positionFormat(s[0]), r = i.positionFormat(s[1])) : (n = i.positionFormat(s.start), r = i.positionFormat(s.end), a = s), 0 === r && (r = i.periodHeight), i.add(d, n, r - n, a);
          });
        });
      }
    },
    add: function add(i, e, o, s) {
      if (o <= 0 || e >= this.periodHeight) return !1;
      s = t.extend({}, this.periodOptions, s);
      var r = "",
        n = "";
      "edit" === this.settings.mode && (r = '<div class="jqs-period-remove" title="' + this.settings.periodRemoveButton + '"></div>', n = '<div class="jqs-period-duplicate" title="' + this.settings.periodDuplicateButton + '"></div>');
      var d = '<div class="jqs-period-title">' + s.title + "</div>",
        a = '<div class="jqs-period-time">' + this.periodInit(e, e + o) + "</div>",
        p = t('<div class="jqs-period"><div class="jqs-period-container">' + a + d + r + n + "</div></div>").css({
          top: e * this.periodPosition,
          height: o * this.periodPosition
        }).attr("id", this.uniqId()).attr("title", s.title).appendTo(i);
      if (t(".jqs-period-container", p).css({
        "background-color": s.backgroundColor,
        "border-color": s.borderColor,
        color: s.textColor
      }), !this.isValid(p)) return t(p).remove(), !1;
      if (this.periodText(p), "edit" === this.settings.mode) {
        var l = this;
        p.draggable({
          grid: [0, this.periodPosition],
          containment: "parent",
          drag: function drag(i, e) {
            t(".jqs-period-time", e.helper).text(l.periodDrag(e)), l.closeOptions();
          },
          stop: function stop(i, e) {
            l.isValid(t(e.helper)) || t(e.helper).css("top", Math.round(e.originalPosition.top));
          }
        }).resizable({
          grid: [0, this.periodPosition],
          containment: "parent",
          handles: "n, s",
          resize: function resize(i, e) {
            t(".jqs-period-time", e.helper).text(l.periodResize(e)), l.periodText(p), l.closeOptions();
          },
          stop: function stop(i, e) {
            l.isValid(t(e.helper)) || t(e.helper).css({
              height: Math.round(e.originalSize.height),
              top: Math.round(e.originalPosition.top)
            });
          }
        }), this.settings.periodOptions && p.click(function (i) {
          t(i.target).hasClass("jqs-period-remove") && t(i.target).hasClass("jqs-period-duplicate") || (l.settings.onClickPeriod.call(this, i, p, l.element), l.openOptions(i, p));
        });
      }
      return this.settings.onAddPeriod.call(this, p, this.element), !0;
    },
    remove: function remove(t) {
      this.settings.onRemovePeriod.call(this, t, this.element) || (t.remove(), this.closeOptions());
    },
    removeAll: function removeAll(i) {
      var e = this;
      t(".jqs-period", i).each(function (t, i) {
        e.remove(i);
      });
    },
    duplicate: function duplicate(i) {
      if (!this.settings.onDuplicatePeriod.call(this, i, this.element)) {
        var e = this.periodData(i),
          o = Math.round(i.position().top / this.periodPosition),
          s = Math.round(i.height() / this.periodPosition),
          r = this;
        t(".jqs-day", this.element).each(function (t, i) {
          r.add(i, o, s, e);
        }), this.closeOptions();
      }
    },
    duplicateAll: function duplicateAll(i) {
      var e = this;
      t(".jqs-period", i).each(function (i, o) {
        e.duplicate(t(o));
      });
    },
    openOptions: function openOptions(i, e) {
      var o = this;
      o.closeOptions();
      var s = e.offset().top - t(this.element).offset().top + t(this.element).scrollTop() - 20;
      s < 20 && (s = 20), s > 850 && (s = 850);
      var r = t(this.element).width() - 290,
        n = e.offset().left - t(this.element).offset().left + e.width() + 20;
      n > r && (n = n - 330 - e.width());
      var d = Math.round(e.position().top / this.periodPosition),
        a = Math.round(e.height() / this.periodPosition),
        p = '<div class="jqs-options-time">' + this.periodInit(d, d + a) + "</div>",
        l = t("jqs-period-title", e).text(),
        h = '<div class="jqs-options-title-container"><input type="text" placeholder="' + this.settings.periodTitlePlaceholder + '" value="' + l + '" class="jqs-options-title"></div>',
        c = "";
      if (this.settings.periodColors && this.settings.periodColors.length > 0) {
        var u = 12 === this.settings.hour ? "12pm" : "00:00";
        c = '<div class="jqs-options-color-container">', t.each(this.settings.periodColors, function (t, i) {
          c += '<button class="jqs-options-color" style="background-color: ' + i[0] + "; border-color: " + i[1] + "; color:" + i[2] + '">' + u + "</button>";
        }), c += "</div>";
      }
      var v = '<div class="jqs-options-remove">' + this.settings.periodRemoveButton + "</div>",
        m = '<div class="jqs-options-duplicate">' + this.settings.periodDuplicateButton + "</div>";
      t('<div class="jqs-options">' + p + h + c + v + m + '<div class="jqs-options-close"></div></div>').css({
        top: s,
        left: n
      }).appendTo(this.element), t(".jqs-options-color", this.element).click(function () {
        t(".jqs-period-container", e).css({
          "background-color": t(this).css("background-color"),
          "border-color": t(this).css("border-top-color"),
          color: t(this).css("color")
        });
      }), t(".jqs-options-title", this.element).keyup(function () {
        t(".jqs-period-title", e).text(t(this).val()), e.attr("title", t(this).val());
      }), t(".jqs-options-remove", this.element).click(function () {
        o.remove(e);
      }), t(".jqs-options-duplicate", this.element).click(function () {
        o.duplicate(e);
      }), t(".jqs-options-close", this.element).click(function () {
        o.closeOptions();
      });
    },
    closeOptions: function closeOptions() {
      t(".jqs-options", this.element).remove();
    },
    periodInit: function periodInit(t, i) {
      return this.periodFormat(t) + " - " + this.periodFormat(i);
    },
    periodDrag: function periodDrag(i) {
      var e = Math.round(i.position.top / this.periodPosition),
        o = Math.round((t(i.helper).height() + i.position.top) / this.periodPosition);
      return this.periodFormat(e) + " - " + this.periodFormat(o);
    },
    periodResize: function periodResize(t) {
      var i = Math.round(t.position.top / this.periodPosition),
        e = Math.round((t.size.height + t.position.top) / this.periodPosition);
      return this.periodFormat(i) + " - " + this.periodFormat(e);
    },
    periodText: function periodText(i) {
      var e = i.height();
      if (i.removeClass("jqs-period-15").removeClass("jqs-period-30"), 10 === e) return i.addClass("jqs-period-15"), !1;
      if (20 === e) return i.addClass("jqs-period-30"), !1;
      var o = 12 * Math.floor((e - 16 - 4) / 12);
      t(".jqs-period-title", i).height(o);
    },
    periodData: function periodData(i) {
      var e = Math.round(i.position().top / this.periodPosition),
        o = Math.round((i.height() + i.position().top) / this.periodPosition);
      return {
        start: this.periodFormat(e),
        end: this.periodFormat(o),
        title: t(".jqs-period-title", i).text(),
        backgroundColor: t(".jqs-period-container", i).css("background-color"),
        borderColor: t(".jqs-period-container", i).css("border-top-color"),
        textColor: t(".jqs-period-container", i).css("color")
      };
    },
    periodFormat: function periodFormat(t) {
      t >= this.periodHeight && (t = 0), t < 0 && (t = 0);
      var i = Math.floor(t / this.periodInterval),
        e = 60 * (t / this.periodInterval - i);
      if (12 === this.settings.hour) {
        var o = i,
          s = "";
        return i >= 12 && (s = "p"), i > 12 && (o = i - 12), 0 !== i && 24 !== i || (s = "", o = 12), 0 !== e && (o += ":" + e), o + s;
      }
      return i < 10 && (i = "0" + i), e < 10 && (e = "0" + e), i + ":" + e;
    },
    positionFormat: function positionFormat(t) {
      var i = t.split(":"),
        e = parseInt(i[0]),
        o = parseInt(i[1]);
      if (12 === this.settings.hour) {
        var s = t.match(/([0-1]?[0-9]):?([0-5][0-9])?\s?(am|pm|p)?/),
          r = s[3];
        r || (r = "am"), e = parseInt(s[1]), (o = parseInt(s[2])) || (o = 0), 12 === e && "am" === r && (e = 0), 12 !== e || "pm" !== r && "p" !== r || (r = "am"), "pm" !== r && "p" !== r || (e += 12);
      }
      var n = 0;
      return n += e * this.periodInterval, n += o / 60 * this.periodInterval, Math.floor(n) !== n ? -1 : n;
    },
    formatHour: function formatHour(t) {
      if (12 === this.settings.hour) switch (t) {
        case 0:
        case 24:
          t = "12am";
          break;
        case 12:
          t = "12pm";
          break;
        default:
          t > 12 ? t = t - 12 + "pm" : t += "am";
      } else t >= 24 && (t = 0), t < 10 && (t = "0" + t), t += ":00";
      return t;
    },
    isValid: function isValid(i) {
      var e = Math.round(i.position().top),
        o = Math.round(i.position().top + i.height()),
        s = 0,
        r = 0,
        n = !0;
      return t(".jqs-period", t(i).parent()).each(function (d, a) {
        i.attr("id") !== t(a).attr("id") && (s = Math.round(t(a).position().top), r = Math.round(t(a).position().top + t(a).height()), s > e && s < o && (n = !1), r > e && r < o && (n = !1), s < e && r > o && (n = !1), s !== e && r !== o || (n = !1));
      }), n;
    },
    "export": function _export() {
      var i = this,
        e = [];
      return t(".jqs-day", i.element).each(function (o, s) {
        var r = [];
        t(".jqs-period", s).each(function (e, o) {
          r.push(i.periodData(t(o)));
        }), e.push({
          day: o,
          periods: r
        });
      }), JSON.stringify(e);
    },
    "import": function _import(i) {
      var e = this,
        o = i[1],
        s = [];
      return t.each(o, function (i, o) {
        t.each(o.periods, function (i, r) {
          var n,
            d,
            a = t(".jqs-day", e.element).eq(o.day),
            p = {};
          t.isArray(r) ? (d = e.positionFormat(r[0]), n = e.positionFormat(r[1])) : (d = e.positionFormat(r.start), n = e.positionFormat(r.end), p = r), 0 === n && (n = e.periodHeight);
          var l = !0;
          e.add(a, d, n - d, p) || (l = !1), s.push({
            day: o.day,
            period: [e.periodFormat(d), e.periodFormat(n)],
            status: l
          });
        });
      }), JSON.stringify(s);
    },
    reset: function reset() {
      this.removeAll(this.element);
    }
  }), t.fn.jqs = function (i) {
    var e = !1,
      o = Array.prototype.slice.call(arguments),
      r = this.each(function () {
        t.data(this, "plugin_jqs") ? t.isFunction(s.prototype[i]) && (e = t.data(this, "plugin_jqs")[i](o)) : t.data(this, "plugin_jqs", new s(this, i));
      });
    return e || r;
  };
}(jQuery, window, document);

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_internals_export_js","vendors-node_modules_jquery_dist_jquery_js","vendors-node_modules_core-js_internals_advance-string-index_js-node_modules_core-js_internals-27e96d","vendors-node_modules_core-js_internals_object-create_js-node_modules_core-js_internals_string-0e2212"], () => (__webpack_exec__("./assets/js/dws_jquery_schedule/dist/jquery.schedule.min.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0YsQ0FBQyxDQUFDc0IsSUFBSSxDQUFDLElBQUksRUFBQyxZQUFZLENBQUMsQ0FBQ3JCLENBQUMsQ0FBQyxDQUFDRSxDQUFDLENBQUMsQ0FBQyxHQUFDSCxDQUFDLENBQUNzQixJQUFJLENBQUMsSUFBSSxFQUFDLFlBQVksRUFBQyxJQUFJbEIsQ0FBQyxDQUFDLElBQUksRUFBQ0gsQ0FBQyxDQUFDLENBQUM7TUFBQSxDQUFDLENBQUM7SUFBQyxPQUFPQyxDQUFDLElBQUVNLENBQUM7RUFBQSxDQUFDO0FBQUEsQ0FBQyxDQUFDbUksTUFBTSxFQUFDQyxNQUFNLEVBQUNDLFFBQVEsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2R3c19qcXVlcnlfc2NoZWR1bGUvZGlzdC9qcXVlcnkuc2NoZWR1bGUubWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKiBqUXVlcnkgU2NoZWR1bGUgdjIuMS4wIHwgaHR0cHM6Ly9naXRodWIuY29tL1llaHp1bmEvanF1ZXJ5LXNjaGVkdWxlICovXG4hZnVuY3Rpb24odCxpLGUsbyl7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gcyhpLGUpe3RoaXMuZWxlbWVudD1pLHRoaXMuc2V0dGluZ3M9dC5leHRlbmQoe30scixlKSx0aGlzLnBlcmlvZE9wdGlvbnM9e3RpdGxlOnRoaXMuc2V0dGluZ3MucGVyaW9kVGl0bGUsYmFja2dyb3VuZENvbG9yOnRoaXMuc2V0dGluZ3MucGVyaW9kQmFja2dyb3VuZENvbG9yLGJvcmRlckNvbG9yOnRoaXMuc2V0dGluZ3MucGVyaW9kQm9yZGVyQ29sb3IsdGV4dENvbG9yOnRoaXMuc2V0dGluZ3MucGVyaW9kVGV4dENvbG9yfSx0aGlzLmluaXQoKX12YXIgcj17bW9kZTpcImVkaXRcIixob3VyOjI0LHBlcmlvZER1cmF0aW9uOjMwLGRhdGE6W10scGVyaW9kT3B0aW9uczohMCxwZXJpb2RDb2xvcnM6W10scGVyaW9kVGl0bGU6XCJcIixwZXJpb2RCYWNrZ3JvdW5kQ29sb3I6XCJyZ2JhKDgyLCAxNTUsIDI1NSwgMC41KVwiLHBlcmlvZEJvcmRlckNvbG9yOlwiIzJhM2NmZlwiLHBlcmlvZFRleHRDb2xvcjpcIiMwMDBcIixwZXJpb2RSZW1vdmVCdXR0b246XCJSZW1vdmVcIixwZXJpb2REdXBsaWNhdGVCdXR0b246XCJEdXBsaWNhdGVcIixwZXJpb2RUaXRsZVBsYWNlaG9sZGVyOlwiVGl0bGVcIixkYXlzOltcIk1vbmRheVwiLFwiVHVlc2RheVwiLFwiV2VkbmVzZGF5XCIsXCJUaHVyc2RheVwiLFwiRnJpZGF5XCIsXCJTYXR1cmRheVwiLFwiU3VuZGF5XCJdLG9uSW5pdDpmdW5jdGlvbigpe30sb25BZGRQZXJpb2Q6ZnVuY3Rpb24oKXt9LG9uUmVtb3ZlUGVyaW9kOmZ1bmN0aW9uKCl7fSxvbkR1cGxpY2F0ZVBlcmlvZDpmdW5jdGlvbigpe30sb25DbGlja1BlcmlvZDpmdW5jdGlvbigpe319O3QuZXh0ZW5kKHMucHJvdG90eXBlLHtzZWVkOk1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnN1YnN0cigyKSxjb3VudGVyOjAscGVyaW9kSW50ZXJ2YWw6MCxwZXJpb2RIZWlnaHQ6MCxwZXJpb2RQb3NpdGlvbjowLHVuaXFJZDpmdW5jdGlvbigpe3JldHVybiB0aGlzLmNvdW50ZXIrKyxcImpxc19cIit0aGlzLnNlZWQrXCJfXCIrdGhpcy5jb3VudGVyfSxpbml0OmZ1bmN0aW9uKCl7dmFyIGk9dGhpcztpZih0aGlzLnNldHRpbmdzLnBlcmlvZENvbG9ycy5sZW5ndGg+MCYmdC5lYWNoKHRoaXMuc2V0dGluZ3MucGVyaW9kQ29sb3JzLGZ1bmN0aW9uKGksZSl7aWYoIXQuaW5BcnJheShlKXx8MyE9PWUubGVuZ3RoKXRocm93IG5ldyBFcnJvcihcIkludmFsaWQgcGVyaW9kQ29sb3JzXCIpfSksLTE9PT10LmluQXJyYXkodGhpcy5zZXR0aW5ncy5wZXJpb2REdXJhdGlvbixbMTUsMzAsNjBdKSl0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIHBlcmlvZER1cmF0aW9uXCIpO2lmKHRoaXMucGVyaW9kSW50ZXJ2YWw9NjAvdGhpcy5zZXR0aW5ncy5wZXJpb2REdXJhdGlvbix0aGlzLnBlcmlvZEhlaWdodD0yNCp0aGlzLnBlcmlvZEludGVydmFsLHRoaXMucGVyaW9kUG9zaXRpb249NDAvdGhpcy5wZXJpb2RJbnRlcnZhbCx0KHRoaXMuZWxlbWVudCkuYWRkQ2xhc3MoXCJqcXNcIikuYWRkQ2xhc3MoXCJqcXMtbW9kZS1cIit0aGlzLnNldHRpbmdzLm1vZGUpLFwiZWRpdFwiPT09dGhpcy5zZXR0aW5ncy5tb2RlKXt2YXIgZT0wLG89ITE7dCh0aGlzLmVsZW1lbnQpLm9uKFwibW91c2Vkb3duXCIsXCIuanFzLWRheVwiLGZ1bmN0aW9uKHMpe3ZhciByPXMucGFnZVktdCh0aGlzKS5vZmZzZXQoKS50b3A7aWYoZT1NYXRoLmZsb29yKHIvaS5wZXJpb2RQb3NpdGlvbiksIXQocy50YXJnZXQpLmhhc0NsYXNzKFwianFzLXBlcmlvZFwiKSYmMD09PXQocy50YXJnZXQpLnBhcmVudHMoXCIuanFzLXBlcmlvZFwiKS5sZW5ndGgpe3ZhciBuPVwiXCI7MTUhPT1pLnNldHRpbmdzLnBlcmlvZER1cmF0aW9uJiYobj1pLnBlcmlvZEluaXQoZSxlKzEpKSxvPXQoXCI8ZGl2PlwiKS5hZGRDbGFzcyhcImpxcy1wZXJpb2QtaGVscGVyXCIpLmNzcyh7aGVpZ2h0OmkucGVyaW9kUG9zaXRpb24sdG9wOmUqaS5wZXJpb2RQb3NpdGlvbn0pLmFwcGVuZCgnPGRpdiBjbGFzcz1cImpxcy1wZXJpb2QtaGVscGVyLXRpbWVcIj4nK24rXCI8L2Rpdj5cIiksdCh0aGlzKS5hcHBlbmQobyl9fSksdCh0aGlzLmVsZW1lbnQpLm9uKFwibW91c2Vtb3ZlXCIsXCIuanFzLWRheVwiLGZ1bmN0aW9uKHMpe2lmKG8pe3ZhciByPXMucGFnZVktdCh0aGlzKS5vZmZzZXQoKS50b3Asbj1NYXRoLnJvdW5kKHIvaS5wZXJpb2RQb3NpdGlvbiktZTtuPD0wJiYobj0xKSxvLmNzcyh7aGVpZ2h0Om4qaS5wZXJpb2RQb3NpdGlvbn0pLG4+PTE/dChcIi5qcXMtcGVyaW9kLWhlbHBlci10aW1lXCIsbykudGV4dChpLnBlcmlvZEluaXQoZSxlK24pKTp0KFwiLmpxcy1wZXJpb2QtaGVscGVyLXRpbWVcIixvKS50ZXh0KFwiXCIpfX0pLHQodGhpcy5lbGVtZW50KS5vbihcIm1vdXNldXBcIixcIi5qcXMtZGF5XCIsZnVuY3Rpb24ocyl7aWYoIXQocy50YXJnZXQpLmhhc0NsYXNzKFwianFzLXBlcmlvZFwiKSYmMD09PXQocy50YXJnZXQpLnBhcmVudHMoXCIuanFzLXBlcmlvZFwiKS5sZW5ndGgpe3ZhciByPXMucGFnZVktdCh0aGlzKS5vZmZzZXQoKS50b3Asbj1NYXRoLnJvdW5kKHIvaS5wZXJpb2RQb3NpdGlvbiktZTtuPD0wJiYobj0xKSxpLmFkZCh0KHRoaXMpLGUsbil9ZT0wLG8mJihvLnJlbW92ZSgpLG89ITEpfSksdCh0aGlzLmVsZW1lbnQpLm9uKFwibW91c2VlbnRlclwiLFwiLmpxcy1kYXlcIixmdW5jdGlvbigpe3ZhciBlPXQodGhpcykucGFyZW50cyhcInRkXCIpLmluZGV4KCk7dChcIi5qcXMtZ3JpZC1kYXlcIixpLmVsZW1lbnQpLmVxKGUpLmFkZENsYXNzKFwianFzLWdyaWQtZGF5LWJ1dHRvbnNcIil9KSx0KHRoaXMuZWxlbWVudCkub24oXCJtb3VzZWxlYXZlXCIsXCIuanFzLWRheVwiLGZ1bmN0aW9uKCl7dmFyIGU9dCh0aGlzKS5wYXJlbnRzKFwidGRcIikuaW5kZXgoKTt0KFwiLmpxcy1ncmlkLWRheVwiLGkuZWxlbWVudCkuZXEoZSkucmVtb3ZlQ2xhc3MoXCJqcXMtZ3JpZC1kYXktYnV0dG9uc1wiKX0pLHQodGhpcy5lbGVtZW50KS5vbihcImNsaWNrXCIsXCIuanFzLXBlcmlvZC1yZW1vdmVcIixmdW5jdGlvbigpe3ZhciBlPXQodGhpcykucGFyZW50cyhcIi5qcXMtcGVyaW9kXCIpO2kucmVtb3ZlKGUpfSksdCh0aGlzLmVsZW1lbnQpLm9uKFwiY2xpY2tcIixcIi5qcXMtcGVyaW9kLWR1cGxpY2F0ZVwiLGZ1bmN0aW9uKCl7dmFyIGU9dCh0aGlzKS5wYXJlbnRzKFwiLmpxcy1wZXJpb2RcIik7aS5kdXBsaWNhdGUoZSl9KSx0KHRoaXMuZWxlbWVudCkub24oXCJjbGlja1wiLFwiLmpxcy1kYXktcmVtb3ZlXCIsZnVuY3Rpb24oKXt2YXIgZT10KHRoaXMpLnBhcmVudHMoXCIuanFzLWdyaWQtZGF5XCIpLmluZGV4KCksbz10KFwiLmpxcy1kYXlcIixpLmVsZW1lbnQpLmVxKGUpO2kucmVtb3ZlQWxsKG8pfSksdCh0aGlzLmVsZW1lbnQpLm9uKFwiY2xpY2tcIixcIi5qcXMtZGF5LWR1cGxpY2F0ZVwiLGZ1bmN0aW9uKCl7dmFyIGU9dCh0aGlzKS5wYXJlbnRzKFwiLmpxcy1ncmlkLWRheVwiKS5pbmRleCgpLG89dChcIi5qcXMtZGF5XCIsaS5lbGVtZW50KS5lcShlKTtpLmR1cGxpY2F0ZUFsbChvKX0pfXRoaXMuY3JlYXRlKCksdGhpcy5nZW5lcmF0ZSgpLHRoaXMuc2V0dGluZ3Mub25Jbml0LmNhbGwodGhpcyx0aGlzLmVsZW1lbnQpfSxjcmVhdGU6ZnVuY3Rpb24oKXt0KCc8dGFibGUgY2xhc3M9XCJqcXMtdGFibGVcIj48dHI+PC90cj48L3RhYmxlPicpLmFwcGVuZFRvKHQodGhpcy5lbGVtZW50KSk7Zm9yKHZhciBpPTA7aTw3O2krKyl0KCc8dGQ+PGRpdiBjbGFzcz1cImpxcy1kYXlcIj48L2Rpdj48L3RkPicpLmFwcGVuZFRvKHQoXCIuanFzLXRhYmxlIHRyXCIsdGhpcy5lbGVtZW50KSk7dCgnPGRpdiBjbGFzcz1cImpxcy1ncmlkXCI+PGRpdiBjbGFzcz1cImpxcy1ncmlkLWhlYWRcIj48L2Rpdj48L2Rpdj4nKS5hcHBlbmRUbyh0KHRoaXMuZWxlbWVudCkpO2Zvcih2YXIgZT0wO2U8MjU7ZSsrKXQoJzxkaXYgY2xhc3M9XCJqcXMtZ3JpZC1saW5lXCI+PGRpdiBjbGFzcz1cImpxcy1ncmlkLWhvdXJcIj4nK3RoaXMuZm9ybWF0SG91cihlKStcIjwvZGl2PjwvZGl2PlwiKS5hcHBlbmRUbyh0KFwiLmpxcy1ncmlkXCIsdGhpcy5lbGVtZW50KSk7dmFyIG89XCJcIixzPVwiXCI7XCJlZGl0XCI9PT10aGlzLnNldHRpbmdzLm1vZGUmJihvPSc8ZGl2IGNsYXNzPVwianFzLWRheS1yZW1vdmVcIiB0aXRsZT1cIicrdGhpcy5zZXR0aW5ncy5wZXJpb2RSZW1vdmVCdXR0b24rJ1wiPjwvZGl2Picscz0nPGRpdiBjbGFzcz1cImpxcy1kYXktZHVwbGljYXRlXCIgdGl0bGU9XCInK3RoaXMuc2V0dGluZ3MucGVyaW9kRHVwbGljYXRlQnV0dG9uKydcIj48L2Rpdj4nKTtmb3IodmFyIHI9MDtyPDc7cisrKXQoJzxkaXYgY2xhc3M9XCJqcXMtZ3JpZC1kYXlcIj4nK3RoaXMuc2V0dGluZ3MuZGF5c1tyXStvK3MrXCI8L2Rpdj5cIikuYXBwZW5kVG8odChcIi5qcXMtZ3JpZC1oZWFkXCIsdGhpcy5lbGVtZW50KSl9LGdlbmVyYXRlOmZ1bmN0aW9uKCl7aWYodGhpcy5zZXR0aW5ncy5kYXRhLmxlbmd0aD4wKXt2YXIgaT10aGlzO3QuZWFjaCh0aGlzLnNldHRpbmdzLmRhdGEsZnVuY3Rpb24oZSxvKXt0LmVhY2goby5wZXJpb2RzLGZ1bmN0aW9uKGUscyl7dmFyIHIsbixkPXQoXCIuanFzLWRheVwiLGkuZWxlbWVudCkuZXEoby5kYXkpLGE9e307dC5pc0FycmF5KHMpPyhuPWkucG9zaXRpb25Gb3JtYXQoc1swXSkscj1pLnBvc2l0aW9uRm9ybWF0KHNbMV0pKToobj1pLnBvc2l0aW9uRm9ybWF0KHMuc3RhcnQpLHI9aS5wb3NpdGlvbkZvcm1hdChzLmVuZCksYT1zKSwwPT09ciYmKHI9aS5wZXJpb2RIZWlnaHQpLGkuYWRkKGQsbixyLW4sYSl9KX0pfX0sYWRkOmZ1bmN0aW9uKGksZSxvLHMpe2lmKG88PTB8fGU+PXRoaXMucGVyaW9kSGVpZ2h0KXJldHVybiExO3M9dC5leHRlbmQoe30sdGhpcy5wZXJpb2RPcHRpb25zLHMpO3ZhciByPVwiXCIsbj1cIlwiO1wiZWRpdFwiPT09dGhpcy5zZXR0aW5ncy5tb2RlJiYocj0nPGRpdiBjbGFzcz1cImpxcy1wZXJpb2QtcmVtb3ZlXCIgdGl0bGU9XCInK3RoaXMuc2V0dGluZ3MucGVyaW9kUmVtb3ZlQnV0dG9uKydcIj48L2Rpdj4nLG49JzxkaXYgY2xhc3M9XCJqcXMtcGVyaW9kLWR1cGxpY2F0ZVwiIHRpdGxlPVwiJyt0aGlzLnNldHRpbmdzLnBlcmlvZER1cGxpY2F0ZUJ1dHRvbisnXCI+PC9kaXY+Jyk7dmFyIGQ9JzxkaXYgY2xhc3M9XCJqcXMtcGVyaW9kLXRpdGxlXCI+JytzLnRpdGxlK1wiPC9kaXY+XCIsYT0nPGRpdiBjbGFzcz1cImpxcy1wZXJpb2QtdGltZVwiPicrdGhpcy5wZXJpb2RJbml0KGUsZStvKStcIjwvZGl2PlwiLHA9dCgnPGRpdiBjbGFzcz1cImpxcy1wZXJpb2RcIj48ZGl2IGNsYXNzPVwianFzLXBlcmlvZC1jb250YWluZXJcIj4nK2ErZCtyK24rXCI8L2Rpdj48L2Rpdj5cIikuY3NzKHt0b3A6ZSp0aGlzLnBlcmlvZFBvc2l0aW9uLGhlaWdodDpvKnRoaXMucGVyaW9kUG9zaXRpb259KS5hdHRyKFwiaWRcIix0aGlzLnVuaXFJZCgpKS5hdHRyKFwidGl0bGVcIixzLnRpdGxlKS5hcHBlbmRUbyhpKTtpZih0KFwiLmpxcy1wZXJpb2QtY29udGFpbmVyXCIscCkuY3NzKHtcImJhY2tncm91bmQtY29sb3JcIjpzLmJhY2tncm91bmRDb2xvcixcImJvcmRlci1jb2xvclwiOnMuYm9yZGVyQ29sb3IsY29sb3I6cy50ZXh0Q29sb3J9KSwhdGhpcy5pc1ZhbGlkKHApKXJldHVybiB0KHApLnJlbW92ZSgpLCExO2lmKHRoaXMucGVyaW9kVGV4dChwKSxcImVkaXRcIj09PXRoaXMuc2V0dGluZ3MubW9kZSl7dmFyIGw9dGhpcztwLmRyYWdnYWJsZSh7Z3JpZDpbMCx0aGlzLnBlcmlvZFBvc2l0aW9uXSxjb250YWlubWVudDpcInBhcmVudFwiLGRyYWc6ZnVuY3Rpb24oaSxlKXt0KFwiLmpxcy1wZXJpb2QtdGltZVwiLGUuaGVscGVyKS50ZXh0KGwucGVyaW9kRHJhZyhlKSksbC5jbG9zZU9wdGlvbnMoKX0sc3RvcDpmdW5jdGlvbihpLGUpe2wuaXNWYWxpZCh0KGUuaGVscGVyKSl8fHQoZS5oZWxwZXIpLmNzcyhcInRvcFwiLE1hdGgucm91bmQoZS5vcmlnaW5hbFBvc2l0aW9uLnRvcCkpfX0pLnJlc2l6YWJsZSh7Z3JpZDpbMCx0aGlzLnBlcmlvZFBvc2l0aW9uXSxjb250YWlubWVudDpcInBhcmVudFwiLGhhbmRsZXM6XCJuLCBzXCIscmVzaXplOmZ1bmN0aW9uKGksZSl7dChcIi5qcXMtcGVyaW9kLXRpbWVcIixlLmhlbHBlcikudGV4dChsLnBlcmlvZFJlc2l6ZShlKSksbC5wZXJpb2RUZXh0KHApLGwuY2xvc2VPcHRpb25zKCl9LHN0b3A6ZnVuY3Rpb24oaSxlKXtsLmlzVmFsaWQodChlLmhlbHBlcikpfHx0KGUuaGVscGVyKS5jc3Moe2hlaWdodDpNYXRoLnJvdW5kKGUub3JpZ2luYWxTaXplLmhlaWdodCksdG9wOk1hdGgucm91bmQoZS5vcmlnaW5hbFBvc2l0aW9uLnRvcCl9KX19KSx0aGlzLnNldHRpbmdzLnBlcmlvZE9wdGlvbnMmJnAuY2xpY2soZnVuY3Rpb24oaSl7dChpLnRhcmdldCkuaGFzQ2xhc3MoXCJqcXMtcGVyaW9kLXJlbW92ZVwiKSYmdChpLnRhcmdldCkuaGFzQ2xhc3MoXCJqcXMtcGVyaW9kLWR1cGxpY2F0ZVwiKXx8KGwuc2V0dGluZ3Mub25DbGlja1BlcmlvZC5jYWxsKHRoaXMsaSxwLGwuZWxlbWVudCksbC5vcGVuT3B0aW9ucyhpLHApKX0pfXJldHVybiB0aGlzLnNldHRpbmdzLm9uQWRkUGVyaW9kLmNhbGwodGhpcyxwLHRoaXMuZWxlbWVudCksITB9LHJlbW92ZTpmdW5jdGlvbih0KXt0aGlzLnNldHRpbmdzLm9uUmVtb3ZlUGVyaW9kLmNhbGwodGhpcyx0LHRoaXMuZWxlbWVudCl8fCh0LnJlbW92ZSgpLHRoaXMuY2xvc2VPcHRpb25zKCkpfSxyZW1vdmVBbGw6ZnVuY3Rpb24oaSl7dmFyIGU9dGhpczt0KFwiLmpxcy1wZXJpb2RcIixpKS5lYWNoKGZ1bmN0aW9uKHQsaSl7ZS5yZW1vdmUoaSl9KX0sZHVwbGljYXRlOmZ1bmN0aW9uKGkpe2lmKCF0aGlzLnNldHRpbmdzLm9uRHVwbGljYXRlUGVyaW9kLmNhbGwodGhpcyxpLHRoaXMuZWxlbWVudCkpe3ZhciBlPXRoaXMucGVyaW9kRGF0YShpKSxvPU1hdGgucm91bmQoaS5wb3NpdGlvbigpLnRvcC90aGlzLnBlcmlvZFBvc2l0aW9uKSxzPU1hdGgucm91bmQoaS5oZWlnaHQoKS90aGlzLnBlcmlvZFBvc2l0aW9uKSxyPXRoaXM7dChcIi5qcXMtZGF5XCIsdGhpcy5lbGVtZW50KS5lYWNoKGZ1bmN0aW9uKHQsaSl7ci5hZGQoaSxvLHMsZSl9KSx0aGlzLmNsb3NlT3B0aW9ucygpfX0sZHVwbGljYXRlQWxsOmZ1bmN0aW9uKGkpe3ZhciBlPXRoaXM7dChcIi5qcXMtcGVyaW9kXCIsaSkuZWFjaChmdW5jdGlvbihpLG8pe2UuZHVwbGljYXRlKHQobykpfSl9LG9wZW5PcHRpb25zOmZ1bmN0aW9uKGksZSl7dmFyIG89dGhpcztvLmNsb3NlT3B0aW9ucygpO3ZhciBzPWUub2Zmc2V0KCkudG9wLXQodGhpcy5lbGVtZW50KS5vZmZzZXQoKS50b3ArdCh0aGlzLmVsZW1lbnQpLnNjcm9sbFRvcCgpLTIwO3M8MjAmJihzPTIwKSxzPjg1MCYmKHM9ODUwKTt2YXIgcj10KHRoaXMuZWxlbWVudCkud2lkdGgoKS0yOTAsbj1lLm9mZnNldCgpLmxlZnQtdCh0aGlzLmVsZW1lbnQpLm9mZnNldCgpLmxlZnQrZS53aWR0aCgpKzIwO24+ciYmKG49bi0zMzAtZS53aWR0aCgpKTt2YXIgZD1NYXRoLnJvdW5kKGUucG9zaXRpb24oKS50b3AvdGhpcy5wZXJpb2RQb3NpdGlvbiksYT1NYXRoLnJvdW5kKGUuaGVpZ2h0KCkvdGhpcy5wZXJpb2RQb3NpdGlvbikscD0nPGRpdiBjbGFzcz1cImpxcy1vcHRpb25zLXRpbWVcIj4nK3RoaXMucGVyaW9kSW5pdChkLGQrYSkrXCI8L2Rpdj5cIixsPXQoXCJqcXMtcGVyaW9kLXRpdGxlXCIsZSkudGV4dCgpLGg9JzxkaXYgY2xhc3M9XCJqcXMtb3B0aW9ucy10aXRsZS1jb250YWluZXJcIj48aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIicrdGhpcy5zZXR0aW5ncy5wZXJpb2RUaXRsZVBsYWNlaG9sZGVyKydcIiB2YWx1ZT1cIicrbCsnXCIgY2xhc3M9XCJqcXMtb3B0aW9ucy10aXRsZVwiPjwvZGl2PicsYz1cIlwiO2lmKHRoaXMuc2V0dGluZ3MucGVyaW9kQ29sb3JzJiZ0aGlzLnNldHRpbmdzLnBlcmlvZENvbG9ycy5sZW5ndGg+MCl7dmFyIHU9MTI9PT10aGlzLnNldHRpbmdzLmhvdXI/XCIxMnBtXCI6XCIwMDowMFwiO2M9JzxkaXYgY2xhc3M9XCJqcXMtb3B0aW9ucy1jb2xvci1jb250YWluZXJcIj4nLHQuZWFjaCh0aGlzLnNldHRpbmdzLnBlcmlvZENvbG9ycyxmdW5jdGlvbih0LGkpe2MrPSc8YnV0dG9uIGNsYXNzPVwianFzLW9wdGlvbnMtY29sb3JcIiBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6ICcraVswXStcIjsgYm9yZGVyLWNvbG9yOiBcIitpWzFdK1wiOyBjb2xvcjpcIitpWzJdKydcIj4nK3UrXCI8L2J1dHRvbj5cIn0pLGMrPVwiPC9kaXY+XCJ9dmFyIHY9JzxkaXYgY2xhc3M9XCJqcXMtb3B0aW9ucy1yZW1vdmVcIj4nK3RoaXMuc2V0dGluZ3MucGVyaW9kUmVtb3ZlQnV0dG9uK1wiPC9kaXY+XCIsbT0nPGRpdiBjbGFzcz1cImpxcy1vcHRpb25zLWR1cGxpY2F0ZVwiPicrdGhpcy5zZXR0aW5ncy5wZXJpb2REdXBsaWNhdGVCdXR0b24rXCI8L2Rpdj5cIjt0KCc8ZGl2IGNsYXNzPVwianFzLW9wdGlvbnNcIj4nK3AraCtjK3YrbSsnPGRpdiBjbGFzcz1cImpxcy1vcHRpb25zLWNsb3NlXCI+PC9kaXY+PC9kaXY+JykuY3NzKHt0b3A6cyxsZWZ0Om59KS5hcHBlbmRUbyh0aGlzLmVsZW1lbnQpLHQoXCIuanFzLW9wdGlvbnMtY29sb3JcIix0aGlzLmVsZW1lbnQpLmNsaWNrKGZ1bmN0aW9uKCl7dChcIi5qcXMtcGVyaW9kLWNvbnRhaW5lclwiLGUpLmNzcyh7XCJiYWNrZ3JvdW5kLWNvbG9yXCI6dCh0aGlzKS5jc3MoXCJiYWNrZ3JvdW5kLWNvbG9yXCIpLFwiYm9yZGVyLWNvbG9yXCI6dCh0aGlzKS5jc3MoXCJib3JkZXItdG9wLWNvbG9yXCIpLGNvbG9yOnQodGhpcykuY3NzKFwiY29sb3JcIil9KX0pLHQoXCIuanFzLW9wdGlvbnMtdGl0bGVcIix0aGlzLmVsZW1lbnQpLmtleXVwKGZ1bmN0aW9uKCl7dChcIi5qcXMtcGVyaW9kLXRpdGxlXCIsZSkudGV4dCh0KHRoaXMpLnZhbCgpKSxlLmF0dHIoXCJ0aXRsZVwiLHQodGhpcykudmFsKCkpfSksdChcIi5qcXMtb3B0aW9ucy1yZW1vdmVcIix0aGlzLmVsZW1lbnQpLmNsaWNrKGZ1bmN0aW9uKCl7by5yZW1vdmUoZSl9KSx0KFwiLmpxcy1vcHRpb25zLWR1cGxpY2F0ZVwiLHRoaXMuZWxlbWVudCkuY2xpY2soZnVuY3Rpb24oKXtvLmR1cGxpY2F0ZShlKX0pLHQoXCIuanFzLW9wdGlvbnMtY2xvc2VcIix0aGlzLmVsZW1lbnQpLmNsaWNrKGZ1bmN0aW9uKCl7by5jbG9zZU9wdGlvbnMoKX0pfSxjbG9zZU9wdGlvbnM6ZnVuY3Rpb24oKXt0KFwiLmpxcy1vcHRpb25zXCIsdGhpcy5lbGVtZW50KS5yZW1vdmUoKX0scGVyaW9kSW5pdDpmdW5jdGlvbih0LGkpe3JldHVybiB0aGlzLnBlcmlvZEZvcm1hdCh0KStcIiAtIFwiK3RoaXMucGVyaW9kRm9ybWF0KGkpfSxwZXJpb2REcmFnOmZ1bmN0aW9uKGkpe3ZhciBlPU1hdGgucm91bmQoaS5wb3NpdGlvbi50b3AvdGhpcy5wZXJpb2RQb3NpdGlvbiksbz1NYXRoLnJvdW5kKCh0KGkuaGVscGVyKS5oZWlnaHQoKStpLnBvc2l0aW9uLnRvcCkvdGhpcy5wZXJpb2RQb3NpdGlvbik7cmV0dXJuIHRoaXMucGVyaW9kRm9ybWF0KGUpK1wiIC0gXCIrdGhpcy5wZXJpb2RGb3JtYXQobyl9LHBlcmlvZFJlc2l6ZTpmdW5jdGlvbih0KXt2YXIgaT1NYXRoLnJvdW5kKHQucG9zaXRpb24udG9wL3RoaXMucGVyaW9kUG9zaXRpb24pLGU9TWF0aC5yb3VuZCgodC5zaXplLmhlaWdodCt0LnBvc2l0aW9uLnRvcCkvdGhpcy5wZXJpb2RQb3NpdGlvbik7cmV0dXJuIHRoaXMucGVyaW9kRm9ybWF0KGkpK1wiIC0gXCIrdGhpcy5wZXJpb2RGb3JtYXQoZSl9LHBlcmlvZFRleHQ6ZnVuY3Rpb24oaSl7dmFyIGU9aS5oZWlnaHQoKTtpZihpLnJlbW92ZUNsYXNzKFwianFzLXBlcmlvZC0xNVwiKS5yZW1vdmVDbGFzcyhcImpxcy1wZXJpb2QtMzBcIiksMTA9PT1lKXJldHVybiBpLmFkZENsYXNzKFwianFzLXBlcmlvZC0xNVwiKSwhMTtpZigyMD09PWUpcmV0dXJuIGkuYWRkQ2xhc3MoXCJqcXMtcGVyaW9kLTMwXCIpLCExO3ZhciBvPTEyKk1hdGguZmxvb3IoKGUtMTYtNCkvMTIpO3QoXCIuanFzLXBlcmlvZC10aXRsZVwiLGkpLmhlaWdodChvKX0scGVyaW9kRGF0YTpmdW5jdGlvbihpKXt2YXIgZT1NYXRoLnJvdW5kKGkucG9zaXRpb24oKS50b3AvdGhpcy5wZXJpb2RQb3NpdGlvbiksbz1NYXRoLnJvdW5kKChpLmhlaWdodCgpK2kucG9zaXRpb24oKS50b3ApL3RoaXMucGVyaW9kUG9zaXRpb24pO3JldHVybntzdGFydDp0aGlzLnBlcmlvZEZvcm1hdChlKSxlbmQ6dGhpcy5wZXJpb2RGb3JtYXQobyksdGl0bGU6dChcIi5qcXMtcGVyaW9kLXRpdGxlXCIsaSkudGV4dCgpLGJhY2tncm91bmRDb2xvcjp0KFwiLmpxcy1wZXJpb2QtY29udGFpbmVyXCIsaSkuY3NzKFwiYmFja2dyb3VuZC1jb2xvclwiKSxib3JkZXJDb2xvcjp0KFwiLmpxcy1wZXJpb2QtY29udGFpbmVyXCIsaSkuY3NzKFwiYm9yZGVyLXRvcC1jb2xvclwiKSx0ZXh0Q29sb3I6dChcIi5qcXMtcGVyaW9kLWNvbnRhaW5lclwiLGkpLmNzcyhcImNvbG9yXCIpfX0scGVyaW9kRm9ybWF0OmZ1bmN0aW9uKHQpe3Q+PXRoaXMucGVyaW9kSGVpZ2h0JiYodD0wKSx0PDAmJih0PTApO3ZhciBpPU1hdGguZmxvb3IodC90aGlzLnBlcmlvZEludGVydmFsKSxlPTYwKih0L3RoaXMucGVyaW9kSW50ZXJ2YWwtaSk7aWYoMTI9PT10aGlzLnNldHRpbmdzLmhvdXIpe3ZhciBvPWkscz1cIlwiO3JldHVybiBpPj0xMiYmKHM9XCJwXCIpLGk+MTImJihvPWktMTIpLDAhPT1pJiYyNCE9PWl8fChzPVwiXCIsbz0xMiksMCE9PWUmJihvKz1cIjpcIitlKSxvK3N9cmV0dXJuIGk8MTAmJihpPVwiMFwiK2kpLGU8MTAmJihlPVwiMFwiK2UpLGkrXCI6XCIrZX0scG9zaXRpb25Gb3JtYXQ6ZnVuY3Rpb24odCl7dmFyIGk9dC5zcGxpdChcIjpcIiksZT1wYXJzZUludChpWzBdKSxvPXBhcnNlSW50KGlbMV0pO2lmKDEyPT09dGhpcy5zZXR0aW5ncy5ob3VyKXt2YXIgcz10Lm1hdGNoKC8oWzAtMV0/WzAtOV0pOj8oWzAtNV1bMC05XSk/XFxzPyhhbXxwbXxwKT8vKSxyPXNbM107cnx8KHI9XCJhbVwiKSxlPXBhcnNlSW50KHNbMV0pLChvPXBhcnNlSW50KHNbMl0pKXx8KG89MCksMTI9PT1lJiZcImFtXCI9PT1yJiYoZT0wKSwxMiE9PWV8fFwicG1cIiE9PXImJlwicFwiIT09cnx8KHI9XCJhbVwiKSxcInBtXCIhPT1yJiZcInBcIiE9PXJ8fChlKz0xMil9dmFyIG49MDtyZXR1cm4gbis9ZSp0aGlzLnBlcmlvZEludGVydmFsLG4rPW8vNjAqdGhpcy5wZXJpb2RJbnRlcnZhbCxNYXRoLmZsb29yKG4pIT09bj8tMTpufSxmb3JtYXRIb3VyOmZ1bmN0aW9uKHQpe2lmKDEyPT09dGhpcy5zZXR0aW5ncy5ob3VyKXN3aXRjaCh0KXtjYXNlIDA6Y2FzZSAyNDp0PVwiMTJhbVwiO2JyZWFrO2Nhc2UgMTI6dD1cIjEycG1cIjticmVhaztkZWZhdWx0OnQ+MTI/dD10LTEyK1wicG1cIjp0Kz1cImFtXCJ9ZWxzZSB0Pj0yNCYmKHQ9MCksdDwxMCYmKHQ9XCIwXCIrdCksdCs9XCI6MDBcIjtyZXR1cm4gdH0saXNWYWxpZDpmdW5jdGlvbihpKXt2YXIgZT1NYXRoLnJvdW5kKGkucG9zaXRpb24oKS50b3ApLG89TWF0aC5yb3VuZChpLnBvc2l0aW9uKCkudG9wK2kuaGVpZ2h0KCkpLHM9MCxyPTAsbj0hMDtyZXR1cm4gdChcIi5qcXMtcGVyaW9kXCIsdChpKS5wYXJlbnQoKSkuZWFjaChmdW5jdGlvbihkLGEpe2kuYXR0cihcImlkXCIpIT09dChhKS5hdHRyKFwiaWRcIikmJihzPU1hdGgucm91bmQodChhKS5wb3NpdGlvbigpLnRvcCkscj1NYXRoLnJvdW5kKHQoYSkucG9zaXRpb24oKS50b3ArdChhKS5oZWlnaHQoKSkscz5lJiZzPG8mJihuPSExKSxyPmUmJnI8byYmKG49ITEpLHM8ZSYmcj5vJiYobj0hMSkscyE9PWUmJnIhPT1vfHwobj0hMSkpfSksbn0sZXhwb3J0OmZ1bmN0aW9uKCl7dmFyIGk9dGhpcyxlPVtdO3JldHVybiB0KFwiLmpxcy1kYXlcIixpLmVsZW1lbnQpLmVhY2goZnVuY3Rpb24obyxzKXt2YXIgcj1bXTt0KFwiLmpxcy1wZXJpb2RcIixzKS5lYWNoKGZ1bmN0aW9uKGUsbyl7ci5wdXNoKGkucGVyaW9kRGF0YSh0KG8pKSl9KSxlLnB1c2goe2RheTpvLHBlcmlvZHM6cn0pfSksSlNPTi5zdHJpbmdpZnkoZSl9LGltcG9ydDpmdW5jdGlvbihpKXt2YXIgZT10aGlzLG89aVsxXSxzPVtdO3JldHVybiB0LmVhY2gobyxmdW5jdGlvbihpLG8pe3QuZWFjaChvLnBlcmlvZHMsZnVuY3Rpb24oaSxyKXt2YXIgbixkLGE9dChcIi5qcXMtZGF5XCIsZS5lbGVtZW50KS5lcShvLmRheSkscD17fTt0LmlzQXJyYXkocik/KGQ9ZS5wb3NpdGlvbkZvcm1hdChyWzBdKSxuPWUucG9zaXRpb25Gb3JtYXQoclsxXSkpOihkPWUucG9zaXRpb25Gb3JtYXQoci5zdGFydCksbj1lLnBvc2l0aW9uRm9ybWF0KHIuZW5kKSxwPXIpLDA9PT1uJiYobj1lLnBlcmlvZEhlaWdodCk7dmFyIGw9ITA7ZS5hZGQoYSxkLG4tZCxwKXx8KGw9ITEpLHMucHVzaCh7ZGF5Om8uZGF5LHBlcmlvZDpbZS5wZXJpb2RGb3JtYXQoZCksZS5wZXJpb2RGb3JtYXQobildLHN0YXR1czpsfSl9KX0pLEpTT04uc3RyaW5naWZ5KHMpfSxyZXNldDpmdW5jdGlvbigpe3RoaXMucmVtb3ZlQWxsKHRoaXMuZWxlbWVudCl9fSksdC5mbi5qcXM9ZnVuY3Rpb24oaSl7dmFyIGU9ITEsbz1BcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpLHI9dGhpcy5lYWNoKGZ1bmN0aW9uKCl7dC5kYXRhKHRoaXMsXCJwbHVnaW5fanFzXCIpP3QuaXNGdW5jdGlvbihzLnByb3RvdHlwZVtpXSkmJihlPXQuZGF0YSh0aGlzLFwicGx1Z2luX2pxc1wiKVtpXShvKSk6dC5kYXRhKHRoaXMsXCJwbHVnaW5fanFzXCIsbmV3IHModGhpcyxpKSl9KTtyZXR1cm4gZXx8cn19KGpRdWVyeSx3aW5kb3csZG9jdW1lbnQpOyJdLCJuYW1lcyI6WyJ0IiwiaSIsImUiLCJvIiwicyIsImVsZW1lbnQiLCJzZXR0aW5ncyIsImV4dGVuZCIsInIiLCJwZXJpb2RPcHRpb25zIiwidGl0bGUiLCJwZXJpb2RUaXRsZSIsImJhY2tncm91bmRDb2xvciIsInBlcmlvZEJhY2tncm91bmRDb2xvciIsImJvcmRlckNvbG9yIiwicGVyaW9kQm9yZGVyQ29sb3IiLCJ0ZXh0Q29sb3IiLCJwZXJpb2RUZXh0Q29sb3IiLCJpbml0IiwibW9kZSIsImhvdXIiLCJwZXJpb2REdXJhdGlvbiIsImRhdGEiLCJwZXJpb2RDb2xvcnMiLCJwZXJpb2RSZW1vdmVCdXR0b24iLCJwZXJpb2REdXBsaWNhdGVCdXR0b24iLCJwZXJpb2RUaXRsZVBsYWNlaG9sZGVyIiwiZGF5cyIsIm9uSW5pdCIsIm9uQWRkUGVyaW9kIiwib25SZW1vdmVQZXJpb2QiLCJvbkR1cGxpY2F0ZVBlcmlvZCIsIm9uQ2xpY2tQZXJpb2QiLCJwcm90b3R5cGUiLCJzZWVkIiwiTWF0aCIsInJhbmRvbSIsInRvU3RyaW5nIiwic3Vic3RyIiwiY291bnRlciIsInBlcmlvZEludGVydmFsIiwicGVyaW9kSGVpZ2h0IiwicGVyaW9kUG9zaXRpb24iLCJ1bmlxSWQiLCJsZW5ndGgiLCJlYWNoIiwiaW5BcnJheSIsIkVycm9yIiwiYWRkQ2xhc3MiLCJvbiIsInBhZ2VZIiwib2Zmc2V0IiwidG9wIiwiZmxvb3IiLCJ0YXJnZXQiLCJoYXNDbGFzcyIsInBhcmVudHMiLCJuIiwicGVyaW9kSW5pdCIsImNzcyIsImhlaWdodCIsImFwcGVuZCIsInJvdW5kIiwidGV4dCIsImFkZCIsInJlbW92ZSIsImluZGV4IiwiZXEiLCJyZW1vdmVDbGFzcyIsImR1cGxpY2F0ZSIsInJlbW92ZUFsbCIsImR1cGxpY2F0ZUFsbCIsImNyZWF0ZSIsImdlbmVyYXRlIiwiY2FsbCIsImFwcGVuZFRvIiwiZm9ybWF0SG91ciIsInBlcmlvZHMiLCJkIiwiZGF5IiwiYSIsImlzQXJyYXkiLCJwb3NpdGlvbkZvcm1hdCIsInN0YXJ0IiwiZW5kIiwicCIsImF0dHIiLCJjb2xvciIsImlzVmFsaWQiLCJwZXJpb2RUZXh0IiwibCIsImRyYWdnYWJsZSIsImdyaWQiLCJjb250YWlubWVudCIsImRyYWciLCJoZWxwZXIiLCJwZXJpb2REcmFnIiwiY2xvc2VPcHRpb25zIiwic3RvcCIsIm9yaWdpbmFsUG9zaXRpb24iLCJyZXNpemFibGUiLCJoYW5kbGVzIiwicmVzaXplIiwicGVyaW9kUmVzaXplIiwib3JpZ2luYWxTaXplIiwiY2xpY2siLCJvcGVuT3B0aW9ucyIsInBlcmlvZERhdGEiLCJwb3NpdGlvbiIsInNjcm9sbFRvcCIsIndpZHRoIiwibGVmdCIsImgiLCJjIiwidSIsInYiLCJtIiwia2V5dXAiLCJ2YWwiLCJwZXJpb2RGb3JtYXQiLCJzaXplIiwic3BsaXQiLCJwYXJzZUludCIsIm1hdGNoIiwicGFyZW50IiwiZXhwb3J0IiwicHVzaCIsIkpTT04iLCJzdHJpbmdpZnkiLCJpbXBvcnQiLCJwZXJpb2QiLCJzdGF0dXMiLCJyZXNldCIsImZuIiwianFzIiwiQXJyYXkiLCJzbGljZSIsImFyZ3VtZW50cyIsImlzRnVuY3Rpb24iLCJqUXVlcnkiLCJ3aW5kb3ciLCJkb2N1bWVudCJdLCJzb3VyY2VSb290IjoiIn0=