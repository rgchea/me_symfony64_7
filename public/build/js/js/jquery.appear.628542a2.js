(self["webpackChunk"] = self["webpackChunk"] || []).push([["js/jquery.appear"],{

/***/ "./assets/css/portoadmin/vendor/jquery-appear/jquery.appear.js":
/*!*********************************************************************!*\
  !*** ./assets/css/portoadmin/vendor/jquery-appear/jquery.appear.js ***!
  \*********************************************************************/
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;__webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
__webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
__webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
__webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
__webpack_require__(/*! core-js/modules/es.array.splice.js */ "./node_modules/core-js/modules/es.array.splice.js");
__webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
__webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
__webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
__webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
/*
 * jQuery.appear
 * https://github.com/bas2k/jquery.appear/
 * http://code.google.com/p/jquery-appear/
 * http://bas2k.ru/
 *
 * Copyright (c) 2009 Michael Hixson
 * Copyright (c) 2012-2014 Alexander Brovikov
 * Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php)
 */
(function (root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else // removed by dead control flow
{}
})(this, function ($) {
  $.fn.appear = function (fn, options) {
    var settings = $.extend({
      //arbitrary data to pass to fn
      data: undefined,
      //call fn only on the first appear?
      one: true,
      // X & Y accuracy
      accX: 0,
      accY: 0
    }, options);
    return this.each(function () {
      var t = $(this);

      //whether the element is currently visible
      t.appeared = false;
      if (!fn) {
        //trigger the custom event
        t.trigger('appear', settings.data);
        return;
      }
      var w = $(window);

      //fires the appear event when appropriate
      var check = function check() {
        //is the element hidden?
        if (!t.is(':visible')) {
          //it became hidden
          t.appeared = false;
          return;
        }

        //is the element inside the visible window?
        var a = w.scrollLeft();
        var b = w.scrollTop();
        var o = t.offset();
        var x = o.left;
        var y = o.top;
        var ax = settings.accX;
        var ay = settings.accY;
        var th = t.height();
        var wh = w.height();
        var tw = t.width();
        var ww = w.width();
        if (y + th + ay >= b && y <= b + wh + ay && x + tw + ax >= a && x <= a + ww + ax) {
          //trigger the custom event
          if (!t.appeared) t.trigger('appear', settings.data);
        } else {
          //it scrolled out of view
          t.appeared = false;
        }
      };

      //create a modified fn with some additional logic
      var modifiedFn = function modifiedFn() {
        //mark the element as visible
        t.appeared = true;

        //is this supposed to happen only once?
        if (settings.one) {
          //remove the check
          w.unbind('scroll', check);
          var i = $.inArray(check, $.fn.appear.checks);
          if (i >= 0) $.fn.appear.checks.splice(i, 1);
        }

        //trigger the original fn
        fn.apply(this, arguments);
      };

      //bind the modified fn to the element
      if (settings.one) t.one('appear', settings.data, modifiedFn);else t.bind('appear', settings.data, modifiedFn);

      //check whenever the window scrolls
      w.scroll(check);

      //check whenever the dom changes
      $.fn.appear.checks.push(check);

      //check now
      check();
    });
  };

  //keep a queue of appearance checks
  $.extend($.fn.appear, {
    checks: [],
    timeout: null,
    //process the queue
    checkAll: function checkAll() {
      var length = $.fn.appear.checks.length;
      if (length > 0) while (length--) $.fn.appear.checks[length]();
    },
    //check the queue asynchronously
    run: function run() {
      if ($.fn.appear.timeout) clearTimeout($.fn.appear.timeout);
      $.fn.appear.timeout = setTimeout($.fn.appear.checkAll, 20);
    }
  });

  //run checks when these methods are called
  $.each(['append', 'prepend', 'after', 'before', 'attr', 'removeAttr', 'addClass', 'removeClass', 'toggleClass', 'remove', 'css', 'show', 'hide'], function (i, n) {
    var old = $.fn[n];
    if (old) {
      $.fn[n] = function () {
        var r = old.apply(this, arguments);
        $.fn.appear.run();
        return r;
      };
    }
  });
});

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_internals_export_js","vendors-node_modules_core-js_internals_add-to-unscopables_js-node_modules_core-js_internals_a-09983a","vendors-node_modules_core-js_internals_array-slice_js-node_modules_core-js_internals_function-caeab8","vendors-node_modules_core-js_modules_es_string_iterator_js-node_modules_core-js_modules_es_sy-23bad7","vendors-node_modules_jquery_dist_jquery_js","vendors-node_modules_core-js_modules_es_array_splice_js-node_modules_core-js_modules_es_funct-54cdba"], () => (__webpack_exec__("./assets/css/portoadmin/vendor/jquery-appear/jquery.appear.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LElBQUlDLEdBQUcsRUFBRTtNQUNMdkQsQ0FBQyxDQUFDQyxFQUFFLENBQUNxRCxDQUFDLENBQUMsR0FBRyxZQUFXO1FBQ2pCLElBQUlFLENBQUMsR0FBR0QsR0FBRyxDQUFDWixLQUFLLENBQUMsSUFBSSxFQUFFQyxTQUFTLENBQUM7UUFDbEM1QyxDQUFDLENBQUNDLEVBQUUsQ0FBQ0MsTUFBTSxDQUFDaUQsR0FBRyxDQUFDLENBQUM7UUFDakIsT0FBT0ssQ0FBQztNQUNaLENBQUM7SUFDTDtFQUNKLENBQUMsQ0FBQztBQUNOLENBQUMsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2Nzcy9wb3J0b2FkbWluL3ZlbmRvci9qcXVlcnktYXBwZWFyL2pxdWVyeS5hcHBlYXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLypcclxuICogalF1ZXJ5LmFwcGVhclxyXG4gKiBodHRwczovL2dpdGh1Yi5jb20vYmFzMmsvanF1ZXJ5LmFwcGVhci9cclxuICogaHR0cDovL2NvZGUuZ29vZ2xlLmNvbS9wL2pxdWVyeS1hcHBlYXIvXHJcbiAqIGh0dHA6Ly9iYXMyay5ydS9cclxuICpcclxuICogQ29weXJpZ2h0IChjKSAyMDA5IE1pY2hhZWwgSGl4c29uXHJcbiAqIENvcHlyaWdodCAoYykgMjAxMi0yMDE0IEFsZXhhbmRlciBCcm92aWtvdlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgKGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwKVxyXG4gKi9cclxuKGZ1bmN0aW9uIChyb290LCBmYWN0b3J5KSB7XHJcbiAgICBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKSB7XHJcbiAgICAgICAgZGVmaW5lKFsnanF1ZXJ5J10sIGZhY3RvcnkpO1xyXG4gICAgfSBlbHNlIGlmICh0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0JyAmJiBtb2R1bGUuZXhwb3J0cykge1xyXG4gICAgICAgIGZhY3RvcnkocmVxdWlyZSgnanF1ZXJ5JykpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBmYWN0b3J5KHJvb3QualF1ZXJ5KTtcclxuICAgIH1cclxufSh0aGlzLCBmdW5jdGlvbiAoJCkge1xyXG4gICAgJC5mbi5hcHBlYXIgPSBmdW5jdGlvbihmbiwgb3B0aW9ucykge1xyXG5cclxuICAgICAgICB2YXIgc2V0dGluZ3MgPSAkLmV4dGVuZCh7XHJcblxyXG4gICAgICAgICAgICAvL2FyYml0cmFyeSBkYXRhIHRvIHBhc3MgdG8gZm5cclxuICAgICAgICAgICAgZGF0YTogdW5kZWZpbmVkLFxyXG5cclxuICAgICAgICAgICAgLy9jYWxsIGZuIG9ubHkgb24gdGhlIGZpcnN0IGFwcGVhcj9cclxuICAgICAgICAgICAgb25lOiB0cnVlLFxyXG5cclxuICAgICAgICAgICAgLy8gWCAmIFkgYWNjdXJhY3lcclxuICAgICAgICAgICAgYWNjWDogMCxcclxuICAgICAgICAgICAgYWNjWTogMFxyXG5cclxuICAgICAgICB9LCBvcHRpb25zKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgICAgIHZhciB0ID0gJCh0aGlzKTtcclxuXHJcbiAgICAgICAgICAgIC8vd2hldGhlciB0aGUgZWxlbWVudCBpcyBjdXJyZW50bHkgdmlzaWJsZVxyXG4gICAgICAgICAgICB0LmFwcGVhcmVkID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICBpZiAoIWZuKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgLy90cmlnZ2VyIHRoZSBjdXN0b20gZXZlbnRcclxuICAgICAgICAgICAgICAgIHQudHJpZ2dlcignYXBwZWFyJywgc2V0dGluZ3MuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHZhciB3ID0gJCh3aW5kb3cpO1xyXG5cclxuICAgICAgICAgICAgLy9maXJlcyB0aGUgYXBwZWFyIGV2ZW50IHdoZW4gYXBwcm9wcmlhdGVcclxuICAgICAgICAgICAgdmFyIGNoZWNrID0gZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgLy9pcyB0aGUgZWxlbWVudCBoaWRkZW4/XHJcbiAgICAgICAgICAgICAgICBpZiAoIXQuaXMoJzp2aXNpYmxlJykpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy9pdCBiZWNhbWUgaGlkZGVuXHJcbiAgICAgICAgICAgICAgICAgICAgdC5hcHBlYXJlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAvL2lzIHRoZSBlbGVtZW50IGluc2lkZSB0aGUgdmlzaWJsZSB3aW5kb3c/XHJcbiAgICAgICAgICAgICAgICB2YXIgYSA9IHcuc2Nyb2xsTGVmdCgpO1xyXG4gICAgICAgICAgICAgICAgdmFyIGIgPSB3LnNjcm9sbFRvcCgpO1xyXG4gICAgICAgICAgICAgICAgdmFyIG8gPSB0Lm9mZnNldCgpO1xyXG4gICAgICAgICAgICAgICAgdmFyIHggPSBvLmxlZnQ7XHJcbiAgICAgICAgICAgICAgICB2YXIgeSA9IG8udG9wO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBheCA9IHNldHRpbmdzLmFjY1g7XHJcbiAgICAgICAgICAgICAgICB2YXIgYXkgPSBzZXR0aW5ncy5hY2NZO1xyXG4gICAgICAgICAgICAgICAgdmFyIHRoID0gdC5oZWlnaHQoKTtcclxuICAgICAgICAgICAgICAgIHZhciB3aCA9IHcuaGVpZ2h0KCk7XHJcbiAgICAgICAgICAgICAgICB2YXIgdHcgPSB0LndpZHRoKCk7XHJcbiAgICAgICAgICAgICAgICB2YXIgd3cgPSB3LndpZHRoKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHkgKyB0aCArIGF5ID49IGIgJiZcclxuICAgICAgICAgICAgICAgICAgICB5IDw9IGIgKyB3aCArIGF5ICYmXHJcbiAgICAgICAgICAgICAgICAgICAgeCArIHR3ICsgYXggPj0gYSAmJlxyXG4gICAgICAgICAgICAgICAgICAgIHggPD0gYSArIHd3ICsgYXgpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy90cmlnZ2VyIHRoZSBjdXN0b20gZXZlbnRcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIXQuYXBwZWFyZWQpIHQudHJpZ2dlcignYXBwZWFyJywgc2V0dGluZ3MuZGF0YSk7XHJcblxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy9pdCBzY3JvbGxlZCBvdXQgb2Ygdmlld1xyXG4gICAgICAgICAgICAgICAgICAgIHQuYXBwZWFyZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIC8vY3JlYXRlIGEgbW9kaWZpZWQgZm4gd2l0aCBzb21lIGFkZGl0aW9uYWwgbG9naWNcclxuICAgICAgICAgICAgdmFyIG1vZGlmaWVkRm4gPSBmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAvL21hcmsgdGhlIGVsZW1lbnQgYXMgdmlzaWJsZVxyXG4gICAgICAgICAgICAgICAgdC5hcHBlYXJlZCA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICAgICAgLy9pcyB0aGlzIHN1cHBvc2VkIHRvIGhhcHBlbiBvbmx5IG9uY2U/XHJcbiAgICAgICAgICAgICAgICBpZiAoc2V0dGluZ3Mub25lKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vcmVtb3ZlIHRoZSBjaGVja1xyXG4gICAgICAgICAgICAgICAgICAgIHcudW5iaW5kKCdzY3JvbGwnLCBjaGVjayk7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGkgPSAkLmluQXJyYXkoY2hlY2ssICQuZm4uYXBwZWFyLmNoZWNrcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGkgPj0gMCkgJC5mbi5hcHBlYXIuY2hlY2tzLnNwbGljZShpLCAxKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAvL3RyaWdnZXIgdGhlIG9yaWdpbmFsIGZuXHJcbiAgICAgICAgICAgICAgICBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgLy9iaW5kIHRoZSBtb2RpZmllZCBmbiB0byB0aGUgZWxlbWVudFxyXG4gICAgICAgICAgICBpZiAoc2V0dGluZ3Mub25lKSB0Lm9uZSgnYXBwZWFyJywgc2V0dGluZ3MuZGF0YSwgbW9kaWZpZWRGbik7XHJcbiAgICAgICAgICAgIGVsc2UgdC5iaW5kKCdhcHBlYXInLCBzZXR0aW5ncy5kYXRhLCBtb2RpZmllZEZuKTtcclxuXHJcbiAgICAgICAgICAgIC8vY2hlY2sgd2hlbmV2ZXIgdGhlIHdpbmRvdyBzY3JvbGxzXHJcbiAgICAgICAgICAgIHcuc2Nyb2xsKGNoZWNrKTtcclxuXHJcbiAgICAgICAgICAgIC8vY2hlY2sgd2hlbmV2ZXIgdGhlIGRvbSBjaGFuZ2VzXHJcbiAgICAgICAgICAgICQuZm4uYXBwZWFyLmNoZWNrcy5wdXNoKGNoZWNrKTtcclxuXHJcbiAgICAgICAgICAgIC8vY2hlY2sgbm93XHJcbiAgICAgICAgICAgIChjaGVjaykoKTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgLy9rZWVwIGEgcXVldWUgb2YgYXBwZWFyYW5jZSBjaGVja3NcclxuICAgICQuZXh0ZW5kKCQuZm4uYXBwZWFyLCB7XHJcblxyXG4gICAgICAgIGNoZWNrczogW10sXHJcbiAgICAgICAgdGltZW91dDogbnVsbCxcclxuXHJcbiAgICAgICAgLy9wcm9jZXNzIHRoZSBxdWV1ZVxyXG4gICAgICAgIGNoZWNrQWxsOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgdmFyIGxlbmd0aCA9ICQuZm4uYXBwZWFyLmNoZWNrcy5sZW5ndGg7XHJcbiAgICAgICAgICAgIGlmIChsZW5ndGggPiAwKSB3aGlsZSAobGVuZ3RoLS0pICgkLmZuLmFwcGVhci5jaGVja3NbbGVuZ3RoXSkoKTtcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICAvL2NoZWNrIHRoZSBxdWV1ZSBhc3luY2hyb25vdXNseVxyXG4gICAgICAgIHJ1bjogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGlmICgkLmZuLmFwcGVhci50aW1lb3V0KSBjbGVhclRpbWVvdXQoJC5mbi5hcHBlYXIudGltZW91dCk7XHJcbiAgICAgICAgICAgICQuZm4uYXBwZWFyLnRpbWVvdXQgPSBzZXRUaW1lb3V0KCQuZm4uYXBwZWFyLmNoZWNrQWxsLCAyMCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgLy9ydW4gY2hlY2tzIHdoZW4gdGhlc2UgbWV0aG9kcyBhcmUgY2FsbGVkXHJcbiAgICAkLmVhY2goWydhcHBlbmQnLCAncHJlcGVuZCcsICdhZnRlcicsICdiZWZvcmUnLCAnYXR0cicsXHJcbiAgICAgICAgJ3JlbW92ZUF0dHInLCAnYWRkQ2xhc3MnLCAncmVtb3ZlQ2xhc3MnLCAndG9nZ2xlQ2xhc3MnLFxyXG4gICAgICAgICdyZW1vdmUnLCAnY3NzJywgJ3Nob3cnLCAnaGlkZSddLCBmdW5jdGlvbihpLCBuKSB7XHJcbiAgICAgICAgdmFyIG9sZCA9ICQuZm5bbl07XHJcbiAgICAgICAgaWYgKG9sZCkge1xyXG4gICAgICAgICAgICAkLmZuW25dID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgciA9IG9sZC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG4gICAgICAgICAgICAgICAgJC5mbi5hcHBlYXIucnVuKCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59KSk7XHJcbiJdLCJuYW1lcyI6WyJyb290IiwiZmFjdG9yeSIsImRlZmluZSIsImFtZCIsIm1vZHVsZSIsIl90eXBlb2YiLCJleHBvcnRzIiwicmVxdWlyZSIsImpRdWVyeSIsIiQiLCJmbiIsImFwcGVhciIsIm9wdGlvbnMiLCJzZXR0aW5ncyIsImV4dGVuZCIsImRhdGEiLCJ1bmRlZmluZWQiLCJvbmUiLCJhY2NYIiwiYWNjWSIsImVhY2giLCJ0IiwiYXBwZWFyZWQiLCJ0cmlnZ2VyIiwidyIsIndpbmRvdyIsImNoZWNrIiwiaXMiLCJhIiwic2Nyb2xsTGVmdCIsImIiLCJzY3JvbGxUb3AiLCJvIiwib2Zmc2V0IiwieCIsImxlZnQiLCJ5IiwidG9wIiwiYXgiLCJheSIsInRoIiwiaGVpZ2h0Iiwid2giLCJ0dyIsIndpZHRoIiwid3ciLCJtb2RpZmllZEZuIiwidW5iaW5kIiwiaSIsImluQXJyYXkiLCJjaGVja3MiLCJzcGxpY2UiLCJhcHBseSIsImFyZ3VtZW50cyIsImJpbmQiLCJzY3JvbGwiLCJwdXNoIiwidGltZW91dCIsImNoZWNrQWxsIiwibGVuZ3RoIiwicnVuIiwiY2xlYXJUaW1lb3V0Iiwic2V0VGltZW91dCIsIm4iLCJvbGQiLCJyIl0sInNvdXJjZVJvb3QiOiIifQ==