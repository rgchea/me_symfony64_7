(self["webpackChunk"] = self["webpackChunk"] || []).push([["js/theme.init"],{

/***/ "./assets/js/portoadmin/theme.init.js":
/*!********************************************!*\
  !*** ./assets/js/portoadmin/theme.init.js ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

/* provided dependency */ var jQuery = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
__webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");
__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
// Animate
(function ($) {
  'use strict';

  if ($.isFunction($.fn['appear'])) {
    $(function () {
      $('[data-plugin-animate], [data-appear-animation]').each(function () {
        var $this = $(this),
          opts = {};
        var pluginOptions = $this.data('plugin-options');
        if (pluginOptions) opts = pluginOptions;
        $this.themePluginAnimate(opts);
      });
    });
  }
}).apply(this, [jQuery]);

// Carousel
(function ($) {
  'use strict';

  if ($.isFunction($.fn['owlCarousel'])) {
    $(function () {
      $('[data-plugin-carousel]').each(function () {
        var $this = $(this),
          opts = {};
        var pluginOptions = $this.data('plugin-options');
        if (pluginOptions) opts = pluginOptions;
        $this.themePluginCarousel(opts);
      });
    });
  }
}).apply(this, [jQuery]);

// Chart Circular
(function ($) {
  'use strict';

  if ($.isFunction($.fn['easyPieChart'])) {
    $(function () {
      $('[data-plugin-chart-circular], .circular-bar-chart:not(.manual)').each(function () {
        var $this = $(this),
          opts = {};
        var pluginOptions = $this.data('plugin-options');
        if (pluginOptions) opts = pluginOptions;
        $this.themePluginChartCircular(opts);
      });
    });
  }
}).apply(this, [jQuery]);

// Codemirror
(function ($) {
  'use strict';

  if (typeof CodeMirror !== 'undefined') {
    $(function () {
      $('[data-plugin-codemirror]').each(function () {
        var $this = $(this),
          opts = {};
        var pluginOptions = $this.data('plugin-options');
        if (pluginOptions) opts = pluginOptions;
        $this.themePluginCodeMirror(opts);
      });
    });
  }
}).apply(this, [jQuery]);

// Colorpicker
(function ($) {
  'use strict';

  if ($.isFunction($.fn['colorpicker'])) {
    $(function () {
      $('[data-plugin-colorpicker]').each(function () {
        var $this = $(this),
          opts = {};
        var pluginOptions = $this.data('plugin-options');
        if (pluginOptions) opts = pluginOptions;
        $this.themePluginColorPicker(opts);
      });
    });
  }
}).apply(this, [jQuery]);

// Datepicker
(function ($) {
  'use strict';

  if ($.isFunction($.fn['bootstrapDP'])) {
    $(function () {
      $('[data-plugin-datepicker]').each(function () {
        var $this = $(this),
          opts = {};
        var pluginOptions = $this.data('plugin-options');
        if (pluginOptions) opts = pluginOptions;
        $this.themePluginDatePicker(opts);
      });
    });
  }
}).apply(this, [jQuery]);

// Header Menu Nav
(function (theme, $) {
  'use strict';

  if (typeof theme.Nav !== 'undefined') {
    theme.Nav.initialize();
  }
}).apply(this, [window.theme, jQuery]);

// iosSwitcher
(function ($) {
  'use strict';

  if (typeof Switch !== 'undefined' && $.isFunction(Switch)) {
    $(function () {
      $('[data-plugin-ios-switch]').each(function () {
        var $this = $(this);
        $this.themePluginIOS7Switch();
      });
    });
  }
}).apply(this, [jQuery]);

// Lightbox
(function ($) {
  'use strict';

  if ($.isFunction($.fn['magnificPopup'])) {
    $(function () {
      $('[data-plugin-lightbox], .lightbox:not(.manual)').each(function () {
        var $this = $(this),
          opts = {};
        var pluginOptions = $this.data('plugin-options');
        if (pluginOptions) opts = pluginOptions;
        $this.themePluginLightbox(opts);
      });
    });
  }
}).apply(this, [jQuery]);

// Portlets
(function ($) {
  'use strict';

  if (typeof NProgress !== 'undefined' && $.isFunction(NProgress.configure)) {
    NProgress.configure({
      showSpinner: false,
      ease: 'ease',
      speed: 750
    });
  }
}).apply(this, [jQuery]);

// Markdown
(function ($) {
  'use strict';

  if ($.isFunction($.fn['markdown'])) {
    $(function () {
      $('[data-plugin-markdown-editor]').each(function () {
        var $this = $(this),
          opts = {};
        var pluginOptions = $this.data('plugin-options');
        if (pluginOptions) opts = pluginOptions;
        $this.themePluginMarkdownEditor(opts);
      });
    });
  }
}).apply(this, [jQuery]);

// Masked Input
(function ($) {
  'use strict';

  if ($.isFunction($.fn['mask'])) {
    $(function () {
      $('[data-plugin-masked-input]').each(function () {
        var $this = $(this),
          opts = {};
        var pluginOptions = $this.data('plugin-options');
        if (pluginOptions) opts = pluginOptions;
        $this.themePluginMaskedInput(opts);
      });
    });
  }
}).apply(this, [jQuery]);

// MaxLength
(function ($) {
  'use strict';

  if ($.isFunction($.fn['maxlength'])) {
    $(function () {
      $('[data-plugin-maxlength]').each(function () {
        var $this = $(this),
          opts = {};
        var pluginOptions = $this.data('plugin-options');
        if (pluginOptions) opts = pluginOptions;
        $this.themePluginMaxLength(opts);
      });
    });
  }
}).apply(this, [jQuery]);

// MultiSelect
(function ($) {
  'use strict';

  if ($.isFunction($.fn['multiselect'])) {
    $(function () {
      $('[data-plugin-multiselect]').each(function () {
        var $this = $(this),
          opts = {};
        var pluginOptions = $this.data('plugin-options');
        if (pluginOptions) opts = pluginOptions;
        $this.themePluginMultiSelect(opts);
      });
    });
  }
}).apply(this, [jQuery]);
(function ($) {
  'use strict';

  if ($.isFunction($.fn['placeholder'])) {
    $('input[placeholder]').placeholder();
  }
}).apply(this, [jQuery]);

// Popover
(function ($) {
  'use strict';

  if ($.isFunction($.fn['popover'])) {
    $('[data-toggle=popover]').popover();
  }
}).apply(this, [jQuery]);

// Portlets
(function ($) {
  'use strict';

  $(function () {
    $('[data-plugin-portlet]').each(function () {
      var $this = $(this),
        opts = {};
      var pluginOptions = $this.data('plugin-options');
      if (pluginOptions) opts = pluginOptions;
      $this.themePluginPortlet(opts);
    });
  });
}).apply(this, [jQuery]);

// Scroll to Top
(function (theme, $) {
  // Scroll to Top Button.
  if (typeof theme.PluginScrollToTop !== 'undefined') {
    theme.PluginScrollToTop.initialize();
  }
}).apply(this, [window.theme, jQuery]);

// Scrollable
(function ($) {
  'use strict';

  if ($.isFunction($.fn['nanoScroller'])) {
    $(function () {
      $('[data-plugin-scrollable]').each(function () {
        var $this = $(this),
          opts = {};
        var pluginOptions = $this.data('plugin-options');
        if (pluginOptions) {
          opts = pluginOptions;
        }
        $this.themePluginScrollable(opts);
      });
    });
  }
}).apply(this, [jQuery]);

// Select2
(function ($) {
  'use strict';

  if ($.isFunction($.fn['select2'])) {
    $(function () {
      $('[data-plugin-selectTwo]').each(function () {
        var $this = $(this),
          opts = {};
        var pluginOptions = $this.data('plugin-options');
        if (pluginOptions) opts = pluginOptions;
        $this.themePluginSelect2(opts);
      });
    });
  }
}).apply(this, [jQuery]);

// Sidebar Widgets
(function ($) {
  'use strict';

  function expand(content) {
    content.children('.widget-content').slideDown('fast', function () {
      $(this).css('display', '');
      content.removeClass('widget-collapsed');
    });
  }
  function collapse(content) {
    content.children('.widget-content').slideUp('fast', function () {
      content.addClass('widget-collapsed');
      $(this).css('display', '');
    });
  }
  var $widgets = $('.sidebar-widget');
  $widgets.each(function () {
    var $widget = $(this),
      $toggler = $widget.find('.widget-toggle');
    $toggler.on('click.widget-toggler', function () {
      $widget.hasClass('widget-collapsed') ? expand($widget) : collapse($widget);
    });
  });
}).apply(this, [jQuery]);

// Slider
(function ($) {
  'use strict';

  if ($.isFunction($.fn['slider'])) {
    $(function () {
      $('[data-plugin-slider]').each(function () {
        var $this = $(this),
          opts = {};
        var pluginOptions = $this.data('plugin-options');
        if (pluginOptions) {
          opts = pluginOptions;
        }
        $this.themePluginSlider(opts);
      });
    });
  }
}).apply(this, [jQuery]);

// Spinner
(function ($) {
  'use strict';

  if ($.isFunction($.fn['spinner'])) {
    $(function () {
      $('[data-plugin-spinner]').each(function () {
        var $this = $(this),
          opts = {};
        var pluginOptions = $this.data('plugin-options');
        if (pluginOptions) opts = pluginOptions;
        $this.themePluginSpinner(opts);
      });
    });
  }
}).apply(this, [jQuery]);

// SummerNote
(function ($) {
  'use strict';

  if ($.isFunction($.fn['summernote'])) {
    $(function () {
      $('[data-plugin-summernote]').each(function () {
        var $this = $(this),
          opts = {};
        var pluginOptions = $this.data('plugin-options');
        if (pluginOptions) opts = pluginOptions;
        $this.themePluginSummerNote(opts);
      });
    });
  }
}).apply(this, [jQuery]);

// TextArea AutoSize
(function ($) {
  'use strict';

  if (typeof autosize === 'function') {
    $(function () {
      $('[data-plugin-textarea-autosize]').each(function () {
        var $this = $(this),
          opts = {};
        var pluginOptions = $this.data('plugin-options');
        if (pluginOptions) opts = pluginOptions;
        $this.themePluginTextAreaAutoSize(opts);
      });
    });
  }
}).apply(this, [jQuery]);

// TimePicker
(function ($) {
  'use strict';

  if ($.isFunction($.fn['timepicker'])) {
    $(function () {
      $('[data-plugin-timepicker]').each(function () {
        var $this = $(this),
          opts = {};
        var pluginOptions = $this.data('plugin-options');
        if (pluginOptions) opts = pluginOptions;
        $this.themePluginTimePicker(opts);
      });
    });
  }
}).apply(this, [jQuery]);

// Toggle
(function ($) {
  'use strict';

  $(function () {
    $('[data-plugin-toggle]').each(function () {
      var $this = $(this),
        opts = {};
      var pluginOptions = $this.data('plugin-options');
      if (pluginOptions) opts = pluginOptions;
      $this.themePluginToggle(opts);
    });
  });
}).apply(this, [jQuery]);

// Tooltip
(function ($) {
  'use strict';

  if ($.isFunction($.fn['tooltip'])) {
    $('[data-toggle=tooltip],[rel=tooltip]').tooltip({
      container: 'body'
    });
  }
}).apply(this, [jQuery]);

// Widget - Todo
(function ($) {
  'use strict';

  if ($.isFunction($.fn['themePluginWidgetTodoList'])) {
    $(function () {
      $('[data-plugin-todo-list], ul.widget-todo-list').each(function () {
        var $this = $(this),
          opts = {};
        var pluginOptions = $this.data('plugin-options');
        if (pluginOptions) opts = pluginOptions;
        $this.themePluginWidgetTodoList(opts);
      });
    });
  }
}).apply(this, [jQuery]);

// Widget - Toggle
(function ($) {
  'use strict';

  if ($.isFunction($.fn['themePluginWidgetToggleExpand'])) {
    $(function () {
      $('[data-plugin-toggle-expand], .widget-toggle-expand').each(function () {
        var $this = $(this),
          opts = {};
        var pluginOptions = $this.data('plugin-options');
        if (pluginOptions) opts = pluginOptions;
        $this.themePluginWidgetToggleExpand(opts);
      });
    });
  }
}).apply(this, [jQuery]);

// Word Rotator
(function ($) {
  'use strict';

  if ($.isFunction($.fn['themePluginWordRotator'])) {
    $(function () {
      $('[data-plugin-wort-rotator], .wort-rotator:not(.manual)').each(function () {
        var $this = $(this),
          opts = {};
        var pluginOptions = $this.data('plugin-options');
        if (pluginOptions) opts = pluginOptions;
        $this.themePluginWordRotator(opts);
      });
    });
  }
}).apply(this, [jQuery]);

// Base
(function (theme, $) {
  'use strict';

  theme = theme || {};
  theme.Skeleton.initialize();
}).apply(this, [window.theme, jQuery]);

// Mailbox
(function ($) {
  'use strict';

  $(function () {
    $('[data-mailbox]').each(function () {
      var $this = $(this);
      $this.themeMailbox();
    });
  });
}).apply(this, [jQuery]);

/***/ }),

/***/ "./node_modules/core-js/internals/array-iteration.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/internals/array-iteration.js ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var bind = __webpack_require__(/*! ../internals/function-bind-context */ "./node_modules/core-js/internals/function-bind-context.js");
var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");
var IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ "./node_modules/core-js/internals/indexed-object.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");
var lengthOfArrayLike = __webpack_require__(/*! ../internals/length-of-array-like */ "./node_modules/core-js/internals/length-of-array-like.js");
var arraySpeciesCreate = __webpack_require__(/*! ../internals/array-species-create */ "./node_modules/core-js/internals/array-species-create.js");

var push = uncurryThis([].push);

// `Array.prototype.{ forEach, map, filter, some, every, find, findIndex, filterReject }` methods implementation
var createMethod = function (TYPE) {
  var IS_MAP = TYPE === 1;
  var IS_FILTER = TYPE === 2;
  var IS_SOME = TYPE === 3;
  var IS_EVERY = TYPE === 4;
  var IS_FIND_INDEX = TYPE === 6;
  var IS_FILTER_REJECT = TYPE === 7;
  var NO_HOLES = TYPE === 5 || IS_FIND_INDEX;
  return function ($this, callbackfn, that, specificCreate) {
    var O = toObject($this);
    var self = IndexedObject(O);
    var length = lengthOfArrayLike(self);
    var boundFunction = bind(callbackfn, that);
    var index = 0;
    var create = specificCreate || arraySpeciesCreate;
    var target = IS_MAP ? create($this, length) : IS_FILTER || IS_FILTER_REJECT ? create($this, 0) : undefined;
    var value, result;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      value = self[index];
      result = boundFunction(value, index, O);
      if (TYPE) {
        if (IS_MAP) target[index] = result; // map
        else if (result) switch (TYPE) {
          case 3: return true;              // some
          case 5: return value;             // find
          case 6: return index;             // findIndex
          case 2: push(target, value);      // filter
        } else switch (TYPE) {
          case 4: return false;             // every
          case 7: push(target, value);      // filterReject
        }
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
  };
};

module.exports = {
  // `Array.prototype.forEach` method
  // https://tc39.es/ecma262/#sec-array.prototype.foreach
  forEach: createMethod(0),
  // `Array.prototype.map` method
  // https://tc39.es/ecma262/#sec-array.prototype.map
  map: createMethod(1),
  // `Array.prototype.filter` method
  // https://tc39.es/ecma262/#sec-array.prototype.filter
  filter: createMethod(2),
  // `Array.prototype.some` method
  // https://tc39.es/ecma262/#sec-array.prototype.some
  some: createMethod(3),
  // `Array.prototype.every` method
  // https://tc39.es/ecma262/#sec-array.prototype.every
  every: createMethod(4),
  // `Array.prototype.find` method
  // https://tc39.es/ecma262/#sec-array.prototype.find
  find: createMethod(5),
  // `Array.prototype.findIndex` method
  // https://tc39.es/ecma262/#sec-array.prototype.findIndex
  findIndex: createMethod(6),
  // `Array.prototype.filterReject` method
  // https://github.com/tc39/proposal-array-filtering
  filterReject: createMethod(7)
};


/***/ }),

/***/ "./node_modules/core-js/internals/function-bind-context.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/internals/function-bind-context.js ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this-clause */ "./node_modules/core-js/internals/function-uncurry-this-clause.js");
var aCallable = __webpack_require__(/*! ../internals/a-callable */ "./node_modules/core-js/internals/a-callable.js");
var NATIVE_BIND = __webpack_require__(/*! ../internals/function-bind-native */ "./node_modules/core-js/internals/function-bind-native.js");

var bind = uncurryThis(uncurryThis.bind);

// optional / simple context binding
module.exports = function (fn, that) {
  aCallable(fn);
  return that === undefined ? fn : NATIVE_BIND ? bind(fn, that) : function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.find.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.find.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var $find = (__webpack_require__(/*! ../internals/array-iteration */ "./node_modules/core-js/internals/array-iteration.js").find);
var addToUnscopables = __webpack_require__(/*! ../internals/add-to-unscopables */ "./node_modules/core-js/internals/add-to-unscopables.js");

var FIND = 'find';
var SKIPS_HOLES = true;

// Shouldn't skip holes
// eslint-disable-next-line es/no-array-prototype-find -- testing
if (FIND in []) Array(1)[FIND](function () { SKIPS_HOLES = false; });

// `Array.prototype.find` method
// https://tc39.es/ecma262/#sec-array.prototype.find
$({ target: 'Array', proto: true, forced: SKIPS_HOLES }, {
  find: function find(callbackfn /* , that = undefined */) {
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables(FIND);


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_internals_export_js","vendors-node_modules_core-js_internals_add-to-unscopables_js-node_modules_core-js_internals_a-09983a","vendors-node_modules_jquery_dist_jquery_js"], () => (__webpack_exec__("./assets/js/portoadmin/theme.init.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvanMvdGhlbWUuaW5pdC5mMmRiNjFhMy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUVBO0FBQ0EsQ0FBQyxVQUFTQSxDQUFDLEVBQUU7RUFFWixZQUFZOztFQUVaLElBQUtBLENBQUMsQ0FBQ0MsVUFBVSxDQUFDRCxDQUFDLENBQUNFLEVBQUUsQ0FBRSxRQUFRLENBQUUsQ0FBQyxFQUFHO0lBRXJDRixDQUFDLENBQUMsWUFBVztNQUNaQSxDQUFDLENBQUMsZ0RBQWdELENBQUMsQ0FBQ0csSUFBSSxDQUFDLFlBQVc7UUFDbkUsSUFBSUMsS0FBSyxHQUFHSixDQUFDLENBQUUsSUFBSyxDQUFDO1VBQ3BCSyxJQUFJLEdBQUcsQ0FBQyxDQUFDO1FBRVYsSUFBSUMsYUFBYSxHQUFHRixLQUFLLENBQUNHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztRQUNoRCxJQUFJRCxhQUFhLEVBQ2hCRCxJQUFJLEdBQUdDLGFBQWE7UUFFckJGLEtBQUssQ0FBQ0ksa0JBQWtCLENBQUNILElBQUksQ0FBQztNQUMvQixDQUFDLENBQUM7SUFDSCxDQUFDLENBQUM7RUFFSDtBQUVELENBQUMsRUFBRUksS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDQyxNQUFNLENBQUMsQ0FBQzs7QUFFeEI7QUFDQSxDQUFDLFVBQVNWLENBQUMsRUFBRTtFQUVaLFlBQVk7O0VBRVosSUFBS0EsQ0FBQyxDQUFDQyxVQUFVLENBQUNELENBQUMsQ0FBQ0UsRUFBRSxDQUFFLGFBQWEsQ0FBRSxDQUFDLEVBQUc7SUFFMUNGLENBQUMsQ0FBQyxZQUFXO01BQ1pBLENBQUMsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDRyxJQUFJLENBQUMsWUFBVztRQUMzQyxJQUFJQyxLQUFLLEdBQUdKLENBQUMsQ0FBRSxJQUFLLENBQUM7VUFDcEJLLElBQUksR0FBRyxDQUFDLENBQUM7UUFFVixJQUFJQyxhQUFhLEdBQUdGLEtBQUssQ0FBQ0csSUFBSSxDQUFDLGdCQUFnQixDQUFDO1FBQ2hELElBQUlELGFBQWEsRUFDaEJELElBQUksR0FBR0MsYUFBYTtRQUVyQkYsS0FBSyxDQUFDTyxtQkFBbUIsQ0FBQ04sSUFBSSxDQUFDO01BQ2hDLENBQUMsQ0FBQztJQUNILENBQUMsQ0FBQztFQUVIO0FBRUQsQ0FBQyxFQUFFSSxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUNDLE1BQU0sQ0FBQyxDQUFDOztBQUV4QjtBQUNBLENBQUMsVUFBU1YsQ0FBQyxFQUFFO0VBRVosWUFBWTs7RUFFWixJQUFLQSxDQUFDLENBQUNDLFVBQVUsQ0FBQ0QsQ0FBQyxDQUFDRSxFQUFFLENBQUUsY0FBYyxDQUFFLENBQUMsRUFBRztJQUUzQ0YsQ0FBQyxDQUFDLFlBQVc7TUFDWkEsQ0FBQyxDQUFDLGdFQUFnRSxDQUFDLENBQUNHLElBQUksQ0FBQyxZQUFXO1FBQ25GLElBQUlDLEtBQUssR0FBR0osQ0FBQyxDQUFFLElBQUssQ0FBQztVQUNwQkssSUFBSSxHQUFHLENBQUMsQ0FBQztRQUVWLElBQUlDLGFBQWEsR0FBR0YsS0FBSyxDQUFDRyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7UUFDaEQsSUFBSUQsYUFBYSxFQUNoQkQsSUFBSSxHQUFHQyxhQUFhO1FBRXJCRixLQUFLLENBQUNRLHdCQUF3QixDQUFDUCxJQUFJLENBQUM7TUFDckMsQ0FBQyxDQUFDO0lBQ0gsQ0FBQyxDQUFDO0VBRUg7QUFFRCxDQUFDLEVBQUVJLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQ0MsTUFBTSxDQUFDLENBQUM7O0FBRXhCO0FBQ0EsQ0FBQyxVQUFTVixDQUFDLEVBQUU7RUFFWixZQUFZOztFQUVaLElBQUssT0FBT2EsVUFBVSxLQUFLLFdBQVcsRUFBRztJQUV4Q2IsQ0FBQyxDQUFDLFlBQVc7TUFDWkEsQ0FBQyxDQUFDLDBCQUEwQixDQUFDLENBQUNHLElBQUksQ0FBQyxZQUFXO1FBQzdDLElBQUlDLEtBQUssR0FBR0osQ0FBQyxDQUFFLElBQUssQ0FBQztVQUNwQkssSUFBSSxHQUFHLENBQUMsQ0FBQztRQUVWLElBQUlDLGFBQWEsR0FBR0YsS0FBSyxDQUFDRyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7UUFDaEQsSUFBSUQsYUFBYSxFQUNoQkQsSUFBSSxHQUFHQyxhQUFhO1FBRXJCRixLQUFLLENBQUNVLHFCQUFxQixDQUFDVCxJQUFJLENBQUM7TUFDbEMsQ0FBQyxDQUFDO0lBQ0gsQ0FBQyxDQUFDO0VBRUg7QUFFRCxDQUFDLEVBQUVJLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQ0MsTUFBTSxDQUFDLENBQUM7O0FBRXhCO0FBQ0EsQ0FBQyxVQUFTVixDQUFDLEVBQUU7RUFFWixZQUFZOztFQUVaLElBQUtBLENBQUMsQ0FBQ0MsVUFBVSxDQUFDRCxDQUFDLENBQUNFLEVBQUUsQ0FBRSxhQUFhLENBQUUsQ0FBQyxFQUFHO0lBRTFDRixDQUFDLENBQUMsWUFBVztNQUNaQSxDQUFDLENBQUMsMkJBQTJCLENBQUMsQ0FBQ0csSUFBSSxDQUFDLFlBQVc7UUFDOUMsSUFBSUMsS0FBSyxHQUFHSixDQUFDLENBQUUsSUFBSyxDQUFDO1VBQ3BCSyxJQUFJLEdBQUcsQ0FBQyxDQUFDO1FBRVYsSUFBSUMsYUFBYSxHQUFHRixLQUFLLENBQUNHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztRQUNoRCxJQUFJRCxhQUFhLEVBQ2hCRCxJQUFJLEdBQUdDLGFBQWE7UUFFckJGLEtBQUssQ0FBQ1csc0JBQXNCLENBQUNWLElBQUksQ0FBQztNQUNuQyxDQUFDLENBQUM7SUFDSCxDQUFDLENBQUM7RUFFSDtBQUVELENBQUMsRUFBRUksS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDQyxNQUFNLENBQUMsQ0FBQzs7QUFFeEI7QUFDQSxDQUFDLFVBQVNWLENBQUMsRUFBRTtFQUVaLFlBQVk7O0VBRVosSUFBS0EsQ0FBQyxDQUFDQyxVQUFVLENBQUNELENBQUMsQ0FBQ0UsRUFBRSxDQUFFLGFBQWEsQ0FBRSxDQUFDLEVBQUc7SUFFMUNGLENBQUMsQ0FBQyxZQUFXO01BQ1pBLENBQUMsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDRyxJQUFJLENBQUMsWUFBVztRQUM3QyxJQUFJQyxLQUFLLEdBQUdKLENBQUMsQ0FBRSxJQUFLLENBQUM7VUFDcEJLLElBQUksR0FBRyxDQUFDLENBQUM7UUFFVixJQUFJQyxhQUFhLEdBQUdGLEtBQUssQ0FBQ0csSUFBSSxDQUFDLGdCQUFnQixDQUFDO1FBQ2hELElBQUlELGFBQWEsRUFDaEJELElBQUksR0FBR0MsYUFBYTtRQUVyQkYsS0FBSyxDQUFDWSxxQkFBcUIsQ0FBQ1gsSUFBSSxDQUFDO01BQ2xDLENBQUMsQ0FBQztJQUNILENBQUMsQ0FBQztFQUVIO0FBRUQsQ0FBQyxFQUFFSSxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUNDLE1BQU0sQ0FBQyxDQUFDOztBQUV4QjtBQUNBLENBQUMsVUFBU08sS0FBSyxFQUFFakIsQ0FBQyxFQUFFO0VBRW5CLFlBQVk7O0VBRVosSUFBSSxPQUFPaUIsS0FBSyxDQUFDQyxHQUFHLEtBQUssV0FBVyxFQUFFO0lBQ3JDRCxLQUFLLENBQUNDLEdBQUcsQ0FBQ0MsVUFBVSxDQUFDLENBQUM7RUFDdkI7QUFFRCxDQUFDLEVBQUVWLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQ1csTUFBTSxDQUFDSCxLQUFLLEVBQUVQLE1BQU0sQ0FBQyxDQUFDOztBQUV0QztBQUNBLENBQUMsVUFBU1YsQ0FBQyxFQUFFO0VBRVosWUFBWTs7RUFFWixJQUFLLE9BQU9xQixNQUFNLEtBQUssV0FBVyxJQUFJckIsQ0FBQyxDQUFDQyxVQUFVLENBQUVvQixNQUFPLENBQUMsRUFBRztJQUU5RHJCLENBQUMsQ0FBQyxZQUFXO01BQ1pBLENBQUMsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDRyxJQUFJLENBQUMsWUFBVztRQUM3QyxJQUFJQyxLQUFLLEdBQUdKLENBQUMsQ0FBRSxJQUFLLENBQUM7UUFFckJJLEtBQUssQ0FBQ2tCLHFCQUFxQixDQUFDLENBQUM7TUFDOUIsQ0FBQyxDQUFDO0lBQ0gsQ0FBQyxDQUFDO0VBRUg7QUFFRCxDQUFDLEVBQUViLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQ0MsTUFBTSxDQUFDLENBQUM7O0FBRXhCO0FBQ0EsQ0FBQyxVQUFTVixDQUFDLEVBQUU7RUFFWixZQUFZOztFQUVaLElBQUtBLENBQUMsQ0FBQ0MsVUFBVSxDQUFDRCxDQUFDLENBQUNFLEVBQUUsQ0FBRSxlQUFlLENBQUUsQ0FBQyxFQUFHO0lBRTVDRixDQUFDLENBQUMsWUFBVztNQUNaQSxDQUFDLENBQUMsZ0RBQWdELENBQUMsQ0FBQ0csSUFBSSxDQUFDLFlBQVc7UUFDbkUsSUFBSUMsS0FBSyxHQUFHSixDQUFDLENBQUUsSUFBSyxDQUFDO1VBQ3BCSyxJQUFJLEdBQUcsQ0FBQyxDQUFDO1FBRVYsSUFBSUMsYUFBYSxHQUFHRixLQUFLLENBQUNHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztRQUNoRCxJQUFJRCxhQUFhLEVBQ2hCRCxJQUFJLEdBQUdDLGFBQWE7UUFFckJGLEtBQUssQ0FBQ21CLG1CQUFtQixDQUFDbEIsSUFBSSxDQUFDO01BQ2hDLENBQUMsQ0FBQztJQUNILENBQUMsQ0FBQztFQUVIO0FBRUQsQ0FBQyxFQUFFSSxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUNDLE1BQU0sQ0FBQyxDQUFDOztBQUV4QjtBQUNBLENBQUMsVUFBU1YsQ0FBQyxFQUFFO0VBRVosWUFBWTs7RUFFWixJQUFLLE9BQU93QixTQUFTLEtBQUssV0FBVyxJQUFJeEIsQ0FBQyxDQUFDQyxVQUFVLENBQUV1QixTQUFTLENBQUNDLFNBQVUsQ0FBQyxFQUFHO0lBRTlFRCxTQUFTLENBQUNDLFNBQVMsQ0FBQztNQUNuQkMsV0FBVyxFQUFFLEtBQUs7TUFDbEJDLElBQUksRUFBRSxNQUFNO01BQ1pDLEtBQUssRUFBRTtJQUNSLENBQUMsQ0FBQztFQUVIO0FBRUQsQ0FBQyxFQUFFbkIsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDQyxNQUFNLENBQUMsQ0FBQzs7QUFFeEI7QUFDQSxDQUFDLFVBQVNWLENBQUMsRUFBRTtFQUVaLFlBQVk7O0VBRVosSUFBS0EsQ0FBQyxDQUFDQyxVQUFVLENBQUNELENBQUMsQ0FBQ0UsRUFBRSxDQUFFLFVBQVUsQ0FBRSxDQUFDLEVBQUc7SUFFdkNGLENBQUMsQ0FBQyxZQUFXO01BQ1pBLENBQUMsQ0FBQywrQkFBK0IsQ0FBQyxDQUFDRyxJQUFJLENBQUMsWUFBVztRQUNsRCxJQUFJQyxLQUFLLEdBQUdKLENBQUMsQ0FBRSxJQUFLLENBQUM7VUFDcEJLLElBQUksR0FBRyxDQUFDLENBQUM7UUFFVixJQUFJQyxhQUFhLEdBQUdGLEtBQUssQ0FBQ0csSUFBSSxDQUFDLGdCQUFnQixDQUFDO1FBQ2hELElBQUlELGFBQWEsRUFDaEJELElBQUksR0FBR0MsYUFBYTtRQUVyQkYsS0FBSyxDQUFDeUIseUJBQXlCLENBQUN4QixJQUFJLENBQUM7TUFDdEMsQ0FBQyxDQUFDO0lBQ0gsQ0FBQyxDQUFDO0VBRUg7QUFFRCxDQUFDLEVBQUVJLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQ0MsTUFBTSxDQUFDLENBQUM7O0FBRXhCO0FBQ0EsQ0FBQyxVQUFTVixDQUFDLEVBQUU7RUFFWixZQUFZOztFQUVaLElBQUtBLENBQUMsQ0FBQ0MsVUFBVSxDQUFDRCxDQUFDLENBQUNFLEVBQUUsQ0FBRSxNQUFNLENBQUUsQ0FBQyxFQUFHO0lBRW5DRixDQUFDLENBQUMsWUFBVztNQUNaQSxDQUFDLENBQUMsNEJBQTRCLENBQUMsQ0FBQ0csSUFBSSxDQUFDLFlBQVc7UUFDL0MsSUFBSUMsS0FBSyxHQUFHSixDQUFDLENBQUUsSUFBSyxDQUFDO1VBQ3BCSyxJQUFJLEdBQUcsQ0FBQyxDQUFDO1FBRVYsSUFBSUMsYUFBYSxHQUFHRixLQUFLLENBQUNHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztRQUNoRCxJQUFJRCxhQUFhLEVBQ2hCRCxJQUFJLEdBQUdDLGFBQWE7UUFFckJGLEtBQUssQ0FBQzBCLHNCQUFzQixDQUFDekIsSUFBSSxDQUFDO01BQ25DLENBQUMsQ0FBQztJQUNILENBQUMsQ0FBQztFQUVIO0FBRUQsQ0FBQyxFQUFFSSxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUNDLE1BQU0sQ0FBQyxDQUFDOztBQUV4QjtBQUNBLENBQUMsVUFBU1YsQ0FBQyxFQUFFO0VBRVosWUFBWTs7RUFFWixJQUFLQSxDQUFDLENBQUNDLFVBQVUsQ0FBRUQsQ0FBQyxDQUFDRSxFQUFFLENBQUUsV0FBVyxDQUFFLENBQUMsRUFBRztJQUV6Q0YsQ0FBQyxDQUFDLFlBQVc7TUFDWkEsQ0FBQyxDQUFDLHlCQUF5QixDQUFDLENBQUNHLElBQUksQ0FBQyxZQUFXO1FBQzVDLElBQUlDLEtBQUssR0FBR0osQ0FBQyxDQUFFLElBQUssQ0FBQztVQUNwQkssSUFBSSxHQUFHLENBQUMsQ0FBQztRQUVWLElBQUlDLGFBQWEsR0FBR0YsS0FBSyxDQUFDRyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7UUFDaEQsSUFBSUQsYUFBYSxFQUNoQkQsSUFBSSxHQUFHQyxhQUFhO1FBRXJCRixLQUFLLENBQUMyQixvQkFBb0IsQ0FBQzFCLElBQUksQ0FBQztNQUNqQyxDQUFDLENBQUM7SUFDSCxDQUFDLENBQUM7RUFFSDtBQUVELENBQUMsRUFBRUksS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDQyxNQUFNLENBQUMsQ0FBQzs7QUFFeEI7QUFDQSxDQUFDLFVBQVNWLENBQUMsRUFBRTtFQUVaLFlBQVk7O0VBRVosSUFBS0EsQ0FBQyxDQUFDQyxVQUFVLENBQUVELENBQUMsQ0FBQ0UsRUFBRSxDQUFFLGFBQWEsQ0FBRyxDQUFDLEVBQUc7SUFFNUNGLENBQUMsQ0FBQyxZQUFXO01BQ1pBLENBQUMsQ0FBRSwyQkFBNEIsQ0FBQyxDQUFDRyxJQUFJLENBQUMsWUFBVztRQUVoRCxJQUFJQyxLQUFLLEdBQUdKLENBQUMsQ0FBRSxJQUFLLENBQUM7VUFDcEJLLElBQUksR0FBRyxDQUFDLENBQUM7UUFFVixJQUFJQyxhQUFhLEdBQUdGLEtBQUssQ0FBQ0csSUFBSSxDQUFDLGdCQUFnQixDQUFDO1FBQ2hELElBQUlELGFBQWEsRUFDaEJELElBQUksR0FBR0MsYUFBYTtRQUVyQkYsS0FBSyxDQUFDNEIsc0JBQXNCLENBQUMzQixJQUFJLENBQUM7TUFFbkMsQ0FBQyxDQUFDO0lBQ0gsQ0FBQyxDQUFDO0VBRUg7QUFFRCxDQUFDLEVBQUVJLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQ0MsTUFBTSxDQUFDLENBQUM7QUFFeEIsQ0FBQyxVQUFTVixDQUFDLEVBQUU7RUFFWixZQUFZOztFQUVaLElBQUtBLENBQUMsQ0FBQ0MsVUFBVSxDQUFFRCxDQUFDLENBQUNFLEVBQUUsQ0FBRSxhQUFhLENBQUUsQ0FBQyxFQUFHO0lBRTNDRixDQUFDLENBQUMsb0JBQW9CLENBQUMsQ0FBQ2lDLFdBQVcsQ0FBQyxDQUFDO0VBRXRDO0FBRUQsQ0FBQyxFQUFFeEIsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDQyxNQUFNLENBQUMsQ0FBQzs7QUFHeEI7QUFDQSxDQUFDLFVBQVNWLENBQUMsRUFBRTtFQUVaLFlBQVk7O0VBRVosSUFBS0EsQ0FBQyxDQUFDQyxVQUFVLENBQUVELENBQUMsQ0FBQ0UsRUFBRSxDQUFDLFNBQVMsQ0FBRSxDQUFDLEVBQUc7SUFDdENGLENBQUMsQ0FBRSx1QkFBd0IsQ0FBQyxDQUFDa0MsT0FBTyxDQUFDLENBQUM7RUFDdkM7QUFFRCxDQUFDLEVBQUV6QixLQUFLLENBQUMsSUFBSSxFQUFFLENBQUNDLE1BQU0sQ0FBQyxDQUFDOztBQUV4QjtBQUNBLENBQUMsVUFBU1YsQ0FBQyxFQUFFO0VBRVosWUFBWTs7RUFFWkEsQ0FBQyxDQUFDLFlBQVc7SUFDWkEsQ0FBQyxDQUFDLHVCQUF1QixDQUFDLENBQUNHLElBQUksQ0FBQyxZQUFXO01BQzFDLElBQUlDLEtBQUssR0FBR0osQ0FBQyxDQUFFLElBQUssQ0FBQztRQUNwQkssSUFBSSxHQUFHLENBQUMsQ0FBQztNQUVWLElBQUlDLGFBQWEsR0FBR0YsS0FBSyxDQUFDRyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7TUFDaEQsSUFBSUQsYUFBYSxFQUNoQkQsSUFBSSxHQUFHQyxhQUFhO01BRXJCRixLQUFLLENBQUMrQixrQkFBa0IsQ0FBQzlCLElBQUksQ0FBQztJQUMvQixDQUFDLENBQUM7RUFDSCxDQUFDLENBQUM7QUFFSCxDQUFDLEVBQUVJLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQ0MsTUFBTSxDQUFDLENBQUM7O0FBRXhCO0FBQ0EsQ0FBQyxVQUFTTyxLQUFLLEVBQUVqQixDQUFDLEVBQUU7RUFDbkI7RUFDQSxJQUFJLE9BQU9pQixLQUFLLENBQUNtQixpQkFBaUIsS0FBSyxXQUFXLEVBQUU7SUFDbkRuQixLQUFLLENBQUNtQixpQkFBaUIsQ0FBQ2pCLFVBQVUsQ0FBQyxDQUFDO0VBQ3JDO0FBQ0QsQ0FBQyxFQUFFVixLQUFLLENBQUMsSUFBSSxFQUFFLENBQUNXLE1BQU0sQ0FBQ0gsS0FBSyxFQUFFUCxNQUFNLENBQUMsQ0FBQzs7QUFFdEM7QUFDQSxDQUFDLFVBQVNWLENBQUMsRUFBRTtFQUVaLFlBQVk7O0VBRVosSUFBS0EsQ0FBQyxDQUFDQyxVQUFVLENBQUNELENBQUMsQ0FBQ0UsRUFBRSxDQUFFLGNBQWMsQ0FBRSxDQUFDLEVBQUc7SUFFM0NGLENBQUMsQ0FBQyxZQUFXO01BQ1pBLENBQUMsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDRyxJQUFJLENBQUMsWUFBVztRQUM3QyxJQUFJQyxLQUFLLEdBQUdKLENBQUMsQ0FBRSxJQUFLLENBQUM7VUFDcEJLLElBQUksR0FBRyxDQUFDLENBQUM7UUFFVixJQUFJQyxhQUFhLEdBQUdGLEtBQUssQ0FBQ0csSUFBSSxDQUFDLGdCQUFnQixDQUFDO1FBQ2hELElBQUlELGFBQWEsRUFBRTtVQUNsQkQsSUFBSSxHQUFHQyxhQUFhO1FBQ3JCO1FBRUFGLEtBQUssQ0FBQ2lDLHFCQUFxQixDQUFDaEMsSUFBSSxDQUFDO01BQ2xDLENBQUMsQ0FBQztJQUNILENBQUMsQ0FBQztFQUVIO0FBRUQsQ0FBQyxFQUFFSSxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUNDLE1BQU0sQ0FBQyxDQUFDOztBQUV4QjtBQUNBLENBQUMsVUFBU1YsQ0FBQyxFQUFFO0VBRVosWUFBWTs7RUFFWixJQUFLQSxDQUFDLENBQUNDLFVBQVUsQ0FBQ0QsQ0FBQyxDQUFDRSxFQUFFLENBQUUsU0FBUyxDQUFFLENBQUMsRUFBRztJQUV0Q0YsQ0FBQyxDQUFDLFlBQVc7TUFDWkEsQ0FBQyxDQUFDLHlCQUF5QixDQUFDLENBQUNHLElBQUksQ0FBQyxZQUFXO1FBQzVDLElBQUlDLEtBQUssR0FBR0osQ0FBQyxDQUFFLElBQUssQ0FBQztVQUNwQkssSUFBSSxHQUFHLENBQUMsQ0FBQztRQUVWLElBQUlDLGFBQWEsR0FBR0YsS0FBSyxDQUFDRyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7UUFDaEQsSUFBSUQsYUFBYSxFQUNoQkQsSUFBSSxHQUFHQyxhQUFhO1FBRXJCRixLQUFLLENBQUNrQyxrQkFBa0IsQ0FBQ2pDLElBQUksQ0FBQztNQUMvQixDQUFDLENBQUM7SUFDSCxDQUFDLENBQUM7RUFFSDtBQUVELENBQUMsRUFBRUksS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDQyxNQUFNLENBQUMsQ0FBQzs7QUFFeEI7QUFDQSxDQUFDLFVBQVNWLENBQUMsRUFBRTtFQUVaLFlBQVk7O0VBRVosU0FBU3VDLE1BQU1BLENBQUVDLE9BQU8sRUFBRztJQUMxQkEsT0FBTyxDQUFDQyxRQUFRLENBQUUsaUJBQWtCLENBQUMsQ0FBQ0MsU0FBUyxDQUFFLE1BQU0sRUFBRSxZQUFXO01BQ25FMUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDMkMsR0FBRyxDQUFFLFNBQVMsRUFBRSxFQUFHLENBQUM7TUFDNUJILE9BQU8sQ0FBQ0ksV0FBVyxDQUFFLGtCQUFtQixDQUFDO0lBQzFDLENBQUMsQ0FBQztFQUNIO0VBRUEsU0FBU0MsUUFBUUEsQ0FBRUwsT0FBTyxFQUFHO0lBQzVCQSxPQUFPLENBQUNDLFFBQVEsQ0FBQyxpQkFBa0IsQ0FBQyxDQUFDSyxPQUFPLENBQUUsTUFBTSxFQUFFLFlBQVc7TUFDaEVOLE9BQU8sQ0FBQ08sUUFBUSxDQUFFLGtCQUFtQixDQUFDO01BQ3RDL0MsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDMkMsR0FBRyxDQUFFLFNBQVMsRUFBRSxFQUFHLENBQUM7SUFDN0IsQ0FBQyxDQUFDO0VBQ0g7RUFFQSxJQUFJSyxRQUFRLEdBQUdoRCxDQUFDLENBQUUsaUJBQWtCLENBQUM7RUFFckNnRCxRQUFRLENBQUM3QyxJQUFJLENBQUUsWUFBVztJQUV6QixJQUFJOEMsT0FBTyxHQUFHakQsQ0FBQyxDQUFFLElBQUssQ0FBQztNQUN0QmtELFFBQVEsR0FBR0QsT0FBTyxDQUFDRSxJQUFJLENBQUUsZ0JBQWlCLENBQUM7SUFFNUNELFFBQVEsQ0FBQ0UsRUFBRSxDQUFDLHNCQUFzQixFQUFFLFlBQVc7TUFDOUNILE9BQU8sQ0FBQ0ksUUFBUSxDQUFDLGtCQUFrQixDQUFDLEdBQUdkLE1BQU0sQ0FBQ1UsT0FBTyxDQUFDLEdBQUdKLFFBQVEsQ0FBQ0ksT0FBTyxDQUFDO0lBQzNFLENBQUMsQ0FBQztFQUNILENBQUMsQ0FBQztBQUVILENBQUMsRUFBRXhDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQ0MsTUFBTSxDQUFDLENBQUM7O0FBRXhCO0FBQ0EsQ0FBQyxVQUFTVixDQUFDLEVBQUU7RUFFWixZQUFZOztFQUVaLElBQUtBLENBQUMsQ0FBQ0MsVUFBVSxDQUFDRCxDQUFDLENBQUNFLEVBQUUsQ0FBRSxRQUFRLENBQUUsQ0FBQyxFQUFHO0lBRXJDRixDQUFDLENBQUMsWUFBVztNQUNaQSxDQUFDLENBQUMsc0JBQXNCLENBQUMsQ0FBQ0csSUFBSSxDQUFDLFlBQVc7UUFDekMsSUFBSUMsS0FBSyxHQUFHSixDQUFDLENBQUUsSUFBSyxDQUFDO1VBQ3BCSyxJQUFJLEdBQUcsQ0FBQyxDQUFDO1FBRVYsSUFBSUMsYUFBYSxHQUFHRixLQUFLLENBQUNHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztRQUNoRCxJQUFJRCxhQUFhLEVBQUU7VUFDbEJELElBQUksR0FBR0MsYUFBYTtRQUNyQjtRQUVBRixLQUFLLENBQUNrRCxpQkFBaUIsQ0FBQ2pELElBQUksQ0FBQztNQUM5QixDQUFDLENBQUM7SUFDSCxDQUFDLENBQUM7RUFFSDtBQUVELENBQUMsRUFBRUksS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDQyxNQUFNLENBQUMsQ0FBQzs7QUFFeEI7QUFDQSxDQUFDLFVBQVNWLENBQUMsRUFBRTtFQUVaLFlBQVk7O0VBRVosSUFBS0EsQ0FBQyxDQUFDQyxVQUFVLENBQUNELENBQUMsQ0FBQ0UsRUFBRSxDQUFFLFNBQVMsQ0FBRSxDQUFDLEVBQUc7SUFFdENGLENBQUMsQ0FBQyxZQUFXO01BQ1pBLENBQUMsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDRyxJQUFJLENBQUMsWUFBVztRQUMxQyxJQUFJQyxLQUFLLEdBQUdKLENBQUMsQ0FBRSxJQUFLLENBQUM7VUFDcEJLLElBQUksR0FBRyxDQUFDLENBQUM7UUFFVixJQUFJQyxhQUFhLEdBQUdGLEtBQUssQ0FBQ0csSUFBSSxDQUFDLGdCQUFnQixDQUFDO1FBQ2hELElBQUlELGFBQWEsRUFDaEJELElBQUksR0FBR0MsYUFBYTtRQUVyQkYsS0FBSyxDQUFDbUQsa0JBQWtCLENBQUNsRCxJQUFJLENBQUM7TUFDL0IsQ0FBQyxDQUFDO0lBQ0gsQ0FBQyxDQUFDO0VBRUg7QUFFRCxDQUFDLEVBQUVJLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQ0MsTUFBTSxDQUFDLENBQUM7O0FBRXhCO0FBQ0EsQ0FBQyxVQUFTVixDQUFDLEVBQUU7RUFFWixZQUFZOztFQUVaLElBQUtBLENBQUMsQ0FBQ0MsVUFBVSxDQUFDRCxDQUFDLENBQUNFLEVBQUUsQ0FBRSxZQUFZLENBQUUsQ0FBQyxFQUFHO0lBRXpDRixDQUFDLENBQUMsWUFBVztNQUNaQSxDQUFDLENBQUMsMEJBQTBCLENBQUMsQ0FBQ0csSUFBSSxDQUFDLFlBQVc7UUFDN0MsSUFBSUMsS0FBSyxHQUFHSixDQUFDLENBQUUsSUFBSyxDQUFDO1VBQ3BCSyxJQUFJLEdBQUcsQ0FBQyxDQUFDO1FBRVYsSUFBSUMsYUFBYSxHQUFHRixLQUFLLENBQUNHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztRQUNoRCxJQUFJRCxhQUFhLEVBQ2hCRCxJQUFJLEdBQUdDLGFBQWE7UUFFckJGLEtBQUssQ0FBQ29ELHFCQUFxQixDQUFDbkQsSUFBSSxDQUFDO01BQ2xDLENBQUMsQ0FBQztJQUNILENBQUMsQ0FBQztFQUVIO0FBRUQsQ0FBQyxFQUFFSSxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUNDLE1BQU0sQ0FBQyxDQUFDOztBQUV4QjtBQUNBLENBQUMsVUFBU1YsQ0FBQyxFQUFFO0VBRVosWUFBWTs7RUFFWixJQUFLLE9BQU95RCxRQUFRLEtBQUssVUFBVSxFQUFHO0lBRXJDekQsQ0FBQyxDQUFDLFlBQVc7TUFDWkEsQ0FBQyxDQUFDLGlDQUFpQyxDQUFDLENBQUNHLElBQUksQ0FBQyxZQUFXO1FBQ3BELElBQUlDLEtBQUssR0FBR0osQ0FBQyxDQUFFLElBQUssQ0FBQztVQUNwQkssSUFBSSxHQUFHLENBQUMsQ0FBQztRQUVWLElBQUlDLGFBQWEsR0FBR0YsS0FBSyxDQUFDRyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7UUFDaEQsSUFBSUQsYUFBYSxFQUNoQkQsSUFBSSxHQUFHQyxhQUFhO1FBRXJCRixLQUFLLENBQUNzRCwyQkFBMkIsQ0FBQ3JELElBQUksQ0FBQztNQUN4QyxDQUFDLENBQUM7SUFDSCxDQUFDLENBQUM7RUFFSDtBQUVELENBQUMsRUFBRUksS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDQyxNQUFNLENBQUMsQ0FBQzs7QUFFeEI7QUFDQSxDQUFDLFVBQVNWLENBQUMsRUFBRTtFQUVaLFlBQVk7O0VBRVosSUFBS0EsQ0FBQyxDQUFDQyxVQUFVLENBQUNELENBQUMsQ0FBQ0UsRUFBRSxDQUFFLFlBQVksQ0FBRSxDQUFDLEVBQUc7SUFFekNGLENBQUMsQ0FBQyxZQUFXO01BQ1pBLENBQUMsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDRyxJQUFJLENBQUMsWUFBVztRQUM3QyxJQUFJQyxLQUFLLEdBQUdKLENBQUMsQ0FBRSxJQUFLLENBQUM7VUFDcEJLLElBQUksR0FBRyxDQUFDLENBQUM7UUFFVixJQUFJQyxhQUFhLEdBQUdGLEtBQUssQ0FBQ0csSUFBSSxDQUFDLGdCQUFnQixDQUFDO1FBQ2hELElBQUlELGFBQWEsRUFDaEJELElBQUksR0FBR0MsYUFBYTtRQUVyQkYsS0FBSyxDQUFDdUQscUJBQXFCLENBQUN0RCxJQUFJLENBQUM7TUFDbEMsQ0FBQyxDQUFDO0lBQ0gsQ0FBQyxDQUFDO0VBRUg7QUFFRCxDQUFDLEVBQUVJLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQ0MsTUFBTSxDQUFDLENBQUM7O0FBRXhCO0FBQ0EsQ0FBQyxVQUFTVixDQUFDLEVBQUU7RUFFWixZQUFZOztFQUVaQSxDQUFDLENBQUMsWUFBVztJQUNaQSxDQUFDLENBQUMsc0JBQXNCLENBQUMsQ0FBQ0csSUFBSSxDQUFDLFlBQVc7TUFDekMsSUFBSUMsS0FBSyxHQUFHSixDQUFDLENBQUUsSUFBSyxDQUFDO1FBQ3BCSyxJQUFJLEdBQUcsQ0FBQyxDQUFDO01BRVYsSUFBSUMsYUFBYSxHQUFHRixLQUFLLENBQUNHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztNQUNoRCxJQUFJRCxhQUFhLEVBQ2hCRCxJQUFJLEdBQUdDLGFBQWE7TUFFckJGLEtBQUssQ0FBQ3dELGlCQUFpQixDQUFDdkQsSUFBSSxDQUFDO0lBQzlCLENBQUMsQ0FBQztFQUNILENBQUMsQ0FBQztBQUVILENBQUMsRUFBRUksS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDQyxNQUFNLENBQUMsQ0FBQzs7QUFFeEI7QUFDQSxDQUFDLFVBQVNWLENBQUMsRUFBRTtFQUVaLFlBQVk7O0VBRVosSUFBS0EsQ0FBQyxDQUFDQyxVQUFVLENBQUVELENBQUMsQ0FBQ0UsRUFBRSxDQUFDLFNBQVMsQ0FBRSxDQUFDLEVBQUc7SUFDdENGLENBQUMsQ0FBRSxxQ0FBc0MsQ0FBQyxDQUFDNkQsT0FBTyxDQUFDO01BQUVDLFNBQVMsRUFBRTtJQUFPLENBQUMsQ0FBQztFQUMxRTtBQUVELENBQUMsRUFBRXJELEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQ0MsTUFBTSxDQUFDLENBQUM7O0FBRXhCO0FBQ0EsQ0FBQyxVQUFTVixDQUFDLEVBQUU7RUFFWixZQUFZOztFQUVaLElBQUtBLENBQUMsQ0FBQ0MsVUFBVSxDQUFDRCxDQUFDLENBQUNFLEVBQUUsQ0FBRSwyQkFBMkIsQ0FBRSxDQUFDLEVBQUc7SUFFeERGLENBQUMsQ0FBQyxZQUFXO01BQ1pBLENBQUMsQ0FBQyw4Q0FBOEMsQ0FBQyxDQUFDRyxJQUFJLENBQUMsWUFBVztRQUNqRSxJQUFJQyxLQUFLLEdBQUdKLENBQUMsQ0FBRSxJQUFLLENBQUM7VUFDcEJLLElBQUksR0FBRyxDQUFDLENBQUM7UUFFVixJQUFJQyxhQUFhLEdBQUdGLEtBQUssQ0FBQ0csSUFBSSxDQUFDLGdCQUFnQixDQUFDO1FBQ2hELElBQUlELGFBQWEsRUFDaEJELElBQUksR0FBR0MsYUFBYTtRQUVyQkYsS0FBSyxDQUFDMkQseUJBQXlCLENBQUMxRCxJQUFJLENBQUM7TUFDdEMsQ0FBQyxDQUFDO0lBQ0gsQ0FBQyxDQUFDO0VBRUg7QUFFRCxDQUFDLEVBQUVJLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQ0MsTUFBTSxDQUFDLENBQUM7O0FBRXhCO0FBQ0EsQ0FBQyxVQUFTVixDQUFDLEVBQUU7RUFFWixZQUFZOztFQUVaLElBQUtBLENBQUMsQ0FBQ0MsVUFBVSxDQUFDRCxDQUFDLENBQUNFLEVBQUUsQ0FBRSwrQkFBK0IsQ0FBRSxDQUFDLEVBQUc7SUFFNURGLENBQUMsQ0FBQyxZQUFXO01BQ1pBLENBQUMsQ0FBQyxvREFBb0QsQ0FBQyxDQUFDRyxJQUFJLENBQUMsWUFBVztRQUN2RSxJQUFJQyxLQUFLLEdBQUdKLENBQUMsQ0FBRSxJQUFLLENBQUM7VUFDcEJLLElBQUksR0FBRyxDQUFDLENBQUM7UUFFVixJQUFJQyxhQUFhLEdBQUdGLEtBQUssQ0FBQ0csSUFBSSxDQUFDLGdCQUFnQixDQUFDO1FBQ2hELElBQUlELGFBQWEsRUFDaEJELElBQUksR0FBR0MsYUFBYTtRQUVyQkYsS0FBSyxDQUFDNEQsNkJBQTZCLENBQUMzRCxJQUFJLENBQUM7TUFDMUMsQ0FBQyxDQUFDO0lBQ0gsQ0FBQyxDQUFDO0VBQ0g7QUFFRCxDQUFDLEVBQUVJLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQ0MsTUFBTSxDQUFDLENBQUM7O0FBRXhCO0FBQ0EsQ0FBQyxVQUFTVixDQUFDLEVBQUU7RUFFWixZQUFZOztFQUVaLElBQUtBLENBQUMsQ0FBQ0MsVUFBVSxDQUFDRCxDQUFDLENBQUNFLEVBQUUsQ0FBRSx3QkFBd0IsQ0FBRSxDQUFDLEVBQUc7SUFFckRGLENBQUMsQ0FBQyxZQUFXO01BQ1pBLENBQUMsQ0FBQyx3REFBd0QsQ0FBQyxDQUFDRyxJQUFJLENBQUMsWUFBVztRQUMzRSxJQUFJQyxLQUFLLEdBQUdKLENBQUMsQ0FBRSxJQUFLLENBQUM7VUFDcEJLLElBQUksR0FBRyxDQUFDLENBQUM7UUFFVixJQUFJQyxhQUFhLEdBQUdGLEtBQUssQ0FBQ0csSUFBSSxDQUFDLGdCQUFnQixDQUFDO1FBQ2hELElBQUlELGFBQWEsRUFDaEJELElBQUksR0FBR0MsYUFBYTtRQUVyQkYsS0FBSyxDQUFDNkQsc0JBQXNCLENBQUM1RCxJQUFJLENBQUM7TUFDbkMsQ0FBQyxDQUFDO0lBQ0gsQ0FBQyxDQUFDO0VBRUg7QUFFRCxDQUFDLEVBQUVJLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQ0MsTUFBTSxDQUFDLENBQUM7O0FBRXhCO0FBQ0EsQ0FBQyxVQUFTTyxLQUFLLEVBQUVqQixDQUFDLEVBQUU7RUFFbkIsWUFBWTs7RUFFWmlCLEtBQUssR0FBR0EsS0FBSyxJQUFJLENBQUMsQ0FBQztFQUVuQkEsS0FBSyxDQUFDaUQsUUFBUSxDQUFDL0MsVUFBVSxDQUFDLENBQUM7QUFFNUIsQ0FBQyxFQUFFVixLQUFLLENBQUMsSUFBSSxFQUFFLENBQUNXLE1BQU0sQ0FBQ0gsS0FBSyxFQUFFUCxNQUFNLENBQUMsQ0FBQzs7QUFFdEM7QUFDQSxDQUFDLFVBQVNWLENBQUMsRUFBRTtFQUVaLFlBQVk7O0VBRVpBLENBQUMsQ0FBQyxZQUFXO0lBQ1pBLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDRyxJQUFJLENBQUMsWUFBVztNQUNuQyxJQUFJQyxLQUFLLEdBQUdKLENBQUMsQ0FBRSxJQUFLLENBQUM7TUFFckJJLEtBQUssQ0FBQytELFlBQVksQ0FBQyxDQUFDO0lBQ3JCLENBQUMsQ0FBQztFQUNILENBQUMsQ0FBQztBQUVILENBQUMsRUFBRTFELEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQ0MsTUFBTSxDQUFDLENBQUMsQzs7Ozs7Ozs7Ozs7QUN4ckJYO0FBQ2IsV0FBVyxtQkFBTyxDQUFDLHFHQUFvQztBQUN2RCxrQkFBa0IsbUJBQU8sQ0FBQyxxR0FBb0M7QUFDOUQsb0JBQW9CLG1CQUFPLENBQUMsdUZBQTZCO0FBQ3pELGVBQWUsbUJBQU8sQ0FBQyw2RUFBd0I7QUFDL0Msd0JBQXdCLG1CQUFPLENBQUMsbUdBQW1DO0FBQ25FLHlCQUF5QixtQkFBTyxDQUFDLG1HQUFtQzs7QUFFcEU7O0FBRUEsc0JBQXNCLGtFQUFrRTtBQUN4RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSxnQkFBZ0I7QUFDMUI7QUFDQTtBQUNBO0FBQ0EsNENBQTRDO0FBQzVDO0FBQ0EsNENBQTRDO0FBQzVDLDRDQUE0QztBQUM1Qyw0Q0FBNEM7QUFDNUMsNENBQTRDO0FBQzVDLFVBQVU7QUFDViw0Q0FBNEM7QUFDNUMsNENBQTRDO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUN6RWE7QUFDYixrQkFBa0IsbUJBQU8sQ0FBQyxtSEFBMkM7QUFDckUsZ0JBQWdCLG1CQUFPLENBQUMsK0VBQXlCO0FBQ2pELGtCQUFrQixtQkFBTyxDQUFDLG1HQUFtQzs7QUFFN0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2JhO0FBQ2IsUUFBUSxtQkFBTyxDQUFDLHVFQUFxQjtBQUNyQyxZQUFZLHFIQUE0QztBQUN4RCx1QkFBdUIsbUJBQU8sQ0FBQywrRkFBaUM7O0FBRWhFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDZDQUE2QyxzQkFBc0I7O0FBRW5FO0FBQ0E7QUFDQSxJQUFJLG1EQUFtRDtBQUN2RDtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcG9ydG9hZG1pbi90aGVtZS5pbml0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hcnJheS1pdGVyYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2Z1bmN0aW9uLWJpbmQtY29udGV4dC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLmFycmF5LmZpbmQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG4vLyBBbmltYXRlXHJcbihmdW5jdGlvbigkKSB7XHJcblxyXG5cdCd1c2Ugc3RyaWN0JztcclxuXHJcblx0aWYgKCAkLmlzRnVuY3Rpb24oJC5mblsgJ2FwcGVhcicgXSkgKSB7XHJcblxyXG5cdFx0JChmdW5jdGlvbigpIHtcclxuXHRcdFx0JCgnW2RhdGEtcGx1Z2luLWFuaW1hdGVdLCBbZGF0YS1hcHBlYXItYW5pbWF0aW9uXScpLmVhY2goZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0dmFyICR0aGlzID0gJCggdGhpcyApLFxyXG5cdFx0XHRcdFx0b3B0cyA9IHt9O1xyXG5cclxuXHRcdFx0XHR2YXIgcGx1Z2luT3B0aW9ucyA9ICR0aGlzLmRhdGEoJ3BsdWdpbi1vcHRpb25zJyk7XHJcblx0XHRcdFx0aWYgKHBsdWdpbk9wdGlvbnMpXHJcblx0XHRcdFx0XHRvcHRzID0gcGx1Z2luT3B0aW9ucztcclxuXHJcblx0XHRcdFx0JHRoaXMudGhlbWVQbHVnaW5BbmltYXRlKG9wdHMpO1xyXG5cdFx0XHR9KTtcclxuXHRcdH0pO1xyXG5cclxuXHR9XHJcblxyXG59KS5hcHBseSh0aGlzLCBbalF1ZXJ5XSk7XHJcblxyXG4vLyBDYXJvdXNlbFxyXG4oZnVuY3Rpb24oJCkge1xyXG5cclxuXHQndXNlIHN0cmljdCc7XHJcblxyXG5cdGlmICggJC5pc0Z1bmN0aW9uKCQuZm5bICdvd2xDYXJvdXNlbCcgXSkgKSB7XHJcblxyXG5cdFx0JChmdW5jdGlvbigpIHtcclxuXHRcdFx0JCgnW2RhdGEtcGx1Z2luLWNhcm91c2VsXScpLmVhY2goZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0dmFyICR0aGlzID0gJCggdGhpcyApLFxyXG5cdFx0XHRcdFx0b3B0cyA9IHt9O1xyXG5cclxuXHRcdFx0XHR2YXIgcGx1Z2luT3B0aW9ucyA9ICR0aGlzLmRhdGEoJ3BsdWdpbi1vcHRpb25zJyk7XHJcblx0XHRcdFx0aWYgKHBsdWdpbk9wdGlvbnMpXHJcblx0XHRcdFx0XHRvcHRzID0gcGx1Z2luT3B0aW9ucztcclxuXHJcblx0XHRcdFx0JHRoaXMudGhlbWVQbHVnaW5DYXJvdXNlbChvcHRzKTtcclxuXHRcdFx0fSk7XHJcblx0XHR9KTtcclxuXHJcblx0fVxyXG5cclxufSkuYXBwbHkodGhpcywgW2pRdWVyeV0pO1xyXG5cclxuLy8gQ2hhcnQgQ2lyY3VsYXJcclxuKGZ1bmN0aW9uKCQpIHtcclxuXHJcblx0J3VzZSBzdHJpY3QnO1xyXG5cclxuXHRpZiAoICQuaXNGdW5jdGlvbigkLmZuWyAnZWFzeVBpZUNoYXJ0JyBdKSApIHtcclxuXHJcblx0XHQkKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHQkKCdbZGF0YS1wbHVnaW4tY2hhcnQtY2lyY3VsYXJdLCAuY2lyY3VsYXItYmFyLWNoYXJ0Om5vdCgubWFudWFsKScpLmVhY2goZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0dmFyICR0aGlzID0gJCggdGhpcyApLFxyXG5cdFx0XHRcdFx0b3B0cyA9IHt9O1xyXG5cclxuXHRcdFx0XHR2YXIgcGx1Z2luT3B0aW9ucyA9ICR0aGlzLmRhdGEoJ3BsdWdpbi1vcHRpb25zJyk7XHJcblx0XHRcdFx0aWYgKHBsdWdpbk9wdGlvbnMpXHJcblx0XHRcdFx0XHRvcHRzID0gcGx1Z2luT3B0aW9ucztcclxuXHJcblx0XHRcdFx0JHRoaXMudGhlbWVQbHVnaW5DaGFydENpcmN1bGFyKG9wdHMpO1xyXG5cdFx0XHR9KTtcclxuXHRcdH0pO1xyXG5cclxuXHR9XHJcblxyXG59KS5hcHBseSh0aGlzLCBbalF1ZXJ5XSk7XHJcblxyXG4vLyBDb2RlbWlycm9yXHJcbihmdW5jdGlvbigkKSB7XHJcblxyXG5cdCd1c2Ugc3RyaWN0JztcclxuXHJcblx0aWYgKCB0eXBlb2YgQ29kZU1pcnJvciAhPT0gJ3VuZGVmaW5lZCcgKSB7XHJcblxyXG5cdFx0JChmdW5jdGlvbigpIHtcclxuXHRcdFx0JCgnW2RhdGEtcGx1Z2luLWNvZGVtaXJyb3JdJykuZWFjaChmdW5jdGlvbigpIHtcclxuXHRcdFx0XHR2YXIgJHRoaXMgPSAkKCB0aGlzICksXHJcblx0XHRcdFx0XHRvcHRzID0ge307XHJcblxyXG5cdFx0XHRcdHZhciBwbHVnaW5PcHRpb25zID0gJHRoaXMuZGF0YSgncGx1Z2luLW9wdGlvbnMnKTtcclxuXHRcdFx0XHRpZiAocGx1Z2luT3B0aW9ucylcclxuXHRcdFx0XHRcdG9wdHMgPSBwbHVnaW5PcHRpb25zO1xyXG5cclxuXHRcdFx0XHQkdGhpcy50aGVtZVBsdWdpbkNvZGVNaXJyb3Iob3B0cyk7XHJcblx0XHRcdH0pO1xyXG5cdFx0fSk7XHJcblxyXG5cdH1cclxuXHJcbn0pLmFwcGx5KHRoaXMsIFtqUXVlcnldKTtcclxuXHJcbi8vIENvbG9ycGlja2VyXHJcbihmdW5jdGlvbigkKSB7XHJcblxyXG5cdCd1c2Ugc3RyaWN0JztcclxuXHJcblx0aWYgKCAkLmlzRnVuY3Rpb24oJC5mblsgJ2NvbG9ycGlja2VyJyBdKSApIHtcclxuXHJcblx0XHQkKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHQkKCdbZGF0YS1wbHVnaW4tY29sb3JwaWNrZXJdJykuZWFjaChmdW5jdGlvbigpIHtcclxuXHRcdFx0XHR2YXIgJHRoaXMgPSAkKCB0aGlzICksXHJcblx0XHRcdFx0XHRvcHRzID0ge307XHJcblxyXG5cdFx0XHRcdHZhciBwbHVnaW5PcHRpb25zID0gJHRoaXMuZGF0YSgncGx1Z2luLW9wdGlvbnMnKTtcclxuXHRcdFx0XHRpZiAocGx1Z2luT3B0aW9ucylcclxuXHRcdFx0XHRcdG9wdHMgPSBwbHVnaW5PcHRpb25zO1xyXG5cclxuXHRcdFx0XHQkdGhpcy50aGVtZVBsdWdpbkNvbG9yUGlja2VyKG9wdHMpO1xyXG5cdFx0XHR9KTtcclxuXHRcdH0pO1xyXG5cclxuXHR9XHJcblxyXG59KS5hcHBseSh0aGlzLCBbalF1ZXJ5XSk7XHJcblxyXG4vLyBEYXRlcGlja2VyXHJcbihmdW5jdGlvbigkKSB7XHJcblxyXG5cdCd1c2Ugc3RyaWN0JztcclxuXHJcblx0aWYgKCAkLmlzRnVuY3Rpb24oJC5mblsgJ2Jvb3RzdHJhcERQJyBdKSApIHtcclxuXHJcblx0XHQkKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHQkKCdbZGF0YS1wbHVnaW4tZGF0ZXBpY2tlcl0nKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdHZhciAkdGhpcyA9ICQoIHRoaXMgKSxcclxuXHRcdFx0XHRcdG9wdHMgPSB7fTtcclxuXHJcblx0XHRcdFx0dmFyIHBsdWdpbk9wdGlvbnMgPSAkdGhpcy5kYXRhKCdwbHVnaW4tb3B0aW9ucycpO1xyXG5cdFx0XHRcdGlmIChwbHVnaW5PcHRpb25zKVxyXG5cdFx0XHRcdFx0b3B0cyA9IHBsdWdpbk9wdGlvbnM7XHJcblxyXG5cdFx0XHRcdCR0aGlzLnRoZW1lUGx1Z2luRGF0ZVBpY2tlcihvcHRzKTtcclxuXHRcdFx0fSk7XHJcblx0XHR9KTtcclxuXHJcblx0fVxyXG5cclxufSkuYXBwbHkodGhpcywgW2pRdWVyeV0pO1xyXG5cclxuLy8gSGVhZGVyIE1lbnUgTmF2XHJcbihmdW5jdGlvbih0aGVtZSwgJCkge1xyXG5cclxuXHQndXNlIHN0cmljdCc7XHJcblx0XHJcblx0aWYgKHR5cGVvZiB0aGVtZS5OYXYgIT09ICd1bmRlZmluZWQnKSB7XHJcblx0XHR0aGVtZS5OYXYuaW5pdGlhbGl6ZSgpO1xyXG5cdH1cclxuXHRcclxufSkuYXBwbHkodGhpcywgW3dpbmRvdy50aGVtZSwgalF1ZXJ5XSk7XHJcblxyXG4vLyBpb3NTd2l0Y2hlclxyXG4oZnVuY3Rpb24oJCkge1xyXG5cclxuXHQndXNlIHN0cmljdCc7XHJcblxyXG5cdGlmICggdHlwZW9mIFN3aXRjaCAhPT0gJ3VuZGVmaW5lZCcgJiYgJC5pc0Z1bmN0aW9uKCBTd2l0Y2ggKSApIHtcclxuXHJcblx0XHQkKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHQkKCdbZGF0YS1wbHVnaW4taW9zLXN3aXRjaF0nKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdHZhciAkdGhpcyA9ICQoIHRoaXMgKTtcclxuXHJcblx0XHRcdFx0JHRoaXMudGhlbWVQbHVnaW5JT1M3U3dpdGNoKCk7XHJcblx0XHRcdH0pO1xyXG5cdFx0fSk7XHJcblxyXG5cdH1cclxuXHJcbn0pLmFwcGx5KHRoaXMsIFtqUXVlcnldKTtcclxuXHJcbi8vIExpZ2h0Ym94XHJcbihmdW5jdGlvbigkKSB7XHJcblxyXG5cdCd1c2Ugc3RyaWN0JztcclxuXHJcblx0aWYgKCAkLmlzRnVuY3Rpb24oJC5mblsgJ21hZ25pZmljUG9wdXAnIF0pICkge1xyXG5cclxuXHRcdCQoZnVuY3Rpb24oKSB7XHJcblx0XHRcdCQoJ1tkYXRhLXBsdWdpbi1saWdodGJveF0sIC5saWdodGJveDpub3QoLm1hbnVhbCknKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdHZhciAkdGhpcyA9ICQoIHRoaXMgKSxcclxuXHRcdFx0XHRcdG9wdHMgPSB7fTtcclxuXHJcblx0XHRcdFx0dmFyIHBsdWdpbk9wdGlvbnMgPSAkdGhpcy5kYXRhKCdwbHVnaW4tb3B0aW9ucycpO1xyXG5cdFx0XHRcdGlmIChwbHVnaW5PcHRpb25zKVxyXG5cdFx0XHRcdFx0b3B0cyA9IHBsdWdpbk9wdGlvbnM7XHJcblxyXG5cdFx0XHRcdCR0aGlzLnRoZW1lUGx1Z2luTGlnaHRib3gob3B0cyk7XHJcblx0XHRcdH0pO1xyXG5cdFx0fSk7XHJcblxyXG5cdH1cclxuXHJcbn0pLmFwcGx5KHRoaXMsIFtqUXVlcnldKTtcclxuXHJcbi8vIFBvcnRsZXRzXHJcbihmdW5jdGlvbigkKSB7XHJcblxyXG5cdCd1c2Ugc3RyaWN0JztcclxuXHJcblx0aWYgKCB0eXBlb2YgTlByb2dyZXNzICE9PSAndW5kZWZpbmVkJyAmJiAkLmlzRnVuY3Rpb24oIE5Qcm9ncmVzcy5jb25maWd1cmUgKSApIHtcclxuXHJcblx0XHROUHJvZ3Jlc3MuY29uZmlndXJlKHtcclxuXHRcdFx0c2hvd1NwaW5uZXI6IGZhbHNlLFxyXG5cdFx0XHRlYXNlOiAnZWFzZScsXHJcblx0XHRcdHNwZWVkOiA3NTBcclxuXHRcdH0pO1xyXG5cclxuXHR9XHJcblxyXG59KS5hcHBseSh0aGlzLCBbalF1ZXJ5XSk7XHJcblxyXG4vLyBNYXJrZG93blxyXG4oZnVuY3Rpb24oJCkge1xyXG5cclxuXHQndXNlIHN0cmljdCc7XHJcblxyXG5cdGlmICggJC5pc0Z1bmN0aW9uKCQuZm5bICdtYXJrZG93bicgXSkgKSB7XHJcblxyXG5cdFx0JChmdW5jdGlvbigpIHtcclxuXHRcdFx0JCgnW2RhdGEtcGx1Z2luLW1hcmtkb3duLWVkaXRvcl0nKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdHZhciAkdGhpcyA9ICQoIHRoaXMgKSxcclxuXHRcdFx0XHRcdG9wdHMgPSB7fTtcclxuXHJcblx0XHRcdFx0dmFyIHBsdWdpbk9wdGlvbnMgPSAkdGhpcy5kYXRhKCdwbHVnaW4tb3B0aW9ucycpO1xyXG5cdFx0XHRcdGlmIChwbHVnaW5PcHRpb25zKVxyXG5cdFx0XHRcdFx0b3B0cyA9IHBsdWdpbk9wdGlvbnM7XHJcblxyXG5cdFx0XHRcdCR0aGlzLnRoZW1lUGx1Z2luTWFya2Rvd25FZGl0b3Iob3B0cyk7XHJcblx0XHRcdH0pO1xyXG5cdFx0fSk7XHJcblxyXG5cdH1cclxuXHJcbn0pLmFwcGx5KHRoaXMsIFtqUXVlcnldKTtcclxuXHJcbi8vIE1hc2tlZCBJbnB1dFxyXG4oZnVuY3Rpb24oJCkge1xyXG5cclxuXHQndXNlIHN0cmljdCc7XHJcblxyXG5cdGlmICggJC5pc0Z1bmN0aW9uKCQuZm5bICdtYXNrJyBdKSApIHtcclxuXHJcblx0XHQkKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHQkKCdbZGF0YS1wbHVnaW4tbWFza2VkLWlucHV0XScpLmVhY2goZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0dmFyICR0aGlzID0gJCggdGhpcyApLFxyXG5cdFx0XHRcdFx0b3B0cyA9IHt9O1xyXG5cclxuXHRcdFx0XHR2YXIgcGx1Z2luT3B0aW9ucyA9ICR0aGlzLmRhdGEoJ3BsdWdpbi1vcHRpb25zJyk7XHJcblx0XHRcdFx0aWYgKHBsdWdpbk9wdGlvbnMpXHJcblx0XHRcdFx0XHRvcHRzID0gcGx1Z2luT3B0aW9ucztcclxuXHJcblx0XHRcdFx0JHRoaXMudGhlbWVQbHVnaW5NYXNrZWRJbnB1dChvcHRzKTtcclxuXHRcdFx0fSk7XHJcblx0XHR9KTtcclxuXHJcblx0fVxyXG5cclxufSkuYXBwbHkodGhpcywgW2pRdWVyeV0pO1xyXG5cclxuLy8gTWF4TGVuZ3RoXHJcbihmdW5jdGlvbigkKSB7XHJcblxyXG5cdCd1c2Ugc3RyaWN0JztcclxuXHJcblx0aWYgKCAkLmlzRnVuY3Rpb24oICQuZm5bICdtYXhsZW5ndGgnIF0pICkge1xyXG5cclxuXHRcdCQoZnVuY3Rpb24oKSB7XHJcblx0XHRcdCQoJ1tkYXRhLXBsdWdpbi1tYXhsZW5ndGhdJykuZWFjaChmdW5jdGlvbigpIHtcclxuXHRcdFx0XHR2YXIgJHRoaXMgPSAkKCB0aGlzICksXHJcblx0XHRcdFx0XHRvcHRzID0ge307XHJcblxyXG5cdFx0XHRcdHZhciBwbHVnaW5PcHRpb25zID0gJHRoaXMuZGF0YSgncGx1Z2luLW9wdGlvbnMnKTtcclxuXHRcdFx0XHRpZiAocGx1Z2luT3B0aW9ucylcclxuXHRcdFx0XHRcdG9wdHMgPSBwbHVnaW5PcHRpb25zO1xyXG5cclxuXHRcdFx0XHQkdGhpcy50aGVtZVBsdWdpbk1heExlbmd0aChvcHRzKTtcclxuXHRcdFx0fSk7XHJcblx0XHR9KTtcclxuXHJcblx0fVxyXG5cclxufSkuYXBwbHkodGhpcywgW2pRdWVyeV0pO1xyXG5cclxuLy8gTXVsdGlTZWxlY3RcclxuKGZ1bmN0aW9uKCQpIHtcclxuXHJcblx0J3VzZSBzdHJpY3QnO1xyXG5cclxuXHRpZiAoICQuaXNGdW5jdGlvbiggJC5mblsgJ211bHRpc2VsZWN0JyBdICkgKSB7XHJcblxyXG5cdFx0JChmdW5jdGlvbigpIHtcclxuXHRcdFx0JCggJ1tkYXRhLXBsdWdpbi1tdWx0aXNlbGVjdF0nICkuZWFjaChmdW5jdGlvbigpIHtcclxuXHJcblx0XHRcdFx0dmFyICR0aGlzID0gJCggdGhpcyApLFxyXG5cdFx0XHRcdFx0b3B0cyA9IHt9O1xyXG5cclxuXHRcdFx0XHR2YXIgcGx1Z2luT3B0aW9ucyA9ICR0aGlzLmRhdGEoJ3BsdWdpbi1vcHRpb25zJyk7XHJcblx0XHRcdFx0aWYgKHBsdWdpbk9wdGlvbnMpXHJcblx0XHRcdFx0XHRvcHRzID0gcGx1Z2luT3B0aW9ucztcclxuXHJcblx0XHRcdFx0JHRoaXMudGhlbWVQbHVnaW5NdWx0aVNlbGVjdChvcHRzKTtcclxuXHJcblx0XHRcdH0pO1xyXG5cdFx0fSk7XHJcblxyXG5cdH1cclxuXHJcbn0pLmFwcGx5KHRoaXMsIFtqUXVlcnldKTtcclxuXHJcbihmdW5jdGlvbigkKSB7XHJcblxyXG5cdCd1c2Ugc3RyaWN0JztcclxuXHJcblx0aWYgKCAkLmlzRnVuY3Rpb24oICQuZm5bICdwbGFjZWhvbGRlcicgXSkgKSB7XHJcblxyXG5cdFx0JCgnaW5wdXRbcGxhY2Vob2xkZXJdJykucGxhY2Vob2xkZXIoKTtcclxuXHJcblx0fVxyXG5cclxufSkuYXBwbHkodGhpcywgW2pRdWVyeV0pO1xyXG5cclxuXHJcbi8vIFBvcG92ZXJcclxuKGZ1bmN0aW9uKCQpIHtcclxuXHJcblx0J3VzZSBzdHJpY3QnO1xyXG5cclxuXHRpZiAoICQuaXNGdW5jdGlvbiggJC5mblsncG9wb3ZlciddICkgKSB7XHJcblx0XHQkKCAnW2RhdGEtdG9nZ2xlPXBvcG92ZXJdJyApLnBvcG92ZXIoKTtcclxuXHR9XHJcblxyXG59KS5hcHBseSh0aGlzLCBbalF1ZXJ5XSk7XHJcblxyXG4vLyBQb3J0bGV0c1xyXG4oZnVuY3Rpb24oJCkge1xyXG5cclxuXHQndXNlIHN0cmljdCc7XHJcblxyXG5cdCQoZnVuY3Rpb24oKSB7XHJcblx0XHQkKCdbZGF0YS1wbHVnaW4tcG9ydGxldF0nKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHR2YXIgJHRoaXMgPSAkKCB0aGlzICksXHJcblx0XHRcdFx0b3B0cyA9IHt9O1xyXG5cclxuXHRcdFx0dmFyIHBsdWdpbk9wdGlvbnMgPSAkdGhpcy5kYXRhKCdwbHVnaW4tb3B0aW9ucycpO1xyXG5cdFx0XHRpZiAocGx1Z2luT3B0aW9ucylcclxuXHRcdFx0XHRvcHRzID0gcGx1Z2luT3B0aW9ucztcclxuXHJcblx0XHRcdCR0aGlzLnRoZW1lUGx1Z2luUG9ydGxldChvcHRzKTtcclxuXHRcdH0pO1xyXG5cdH0pO1xyXG5cclxufSkuYXBwbHkodGhpcywgW2pRdWVyeV0pO1xyXG5cclxuLy8gU2Nyb2xsIHRvIFRvcFxyXG4oZnVuY3Rpb24odGhlbWUsICQpIHtcclxuXHQvLyBTY3JvbGwgdG8gVG9wIEJ1dHRvbi5cclxuXHRpZiAodHlwZW9mIHRoZW1lLlBsdWdpblNjcm9sbFRvVG9wICE9PSAndW5kZWZpbmVkJykge1xyXG5cdFx0dGhlbWUuUGx1Z2luU2Nyb2xsVG9Ub3AuaW5pdGlhbGl6ZSgpO1xyXG5cdH1cclxufSkuYXBwbHkodGhpcywgW3dpbmRvdy50aGVtZSwgalF1ZXJ5XSk7XHJcblxyXG4vLyBTY3JvbGxhYmxlXHJcbihmdW5jdGlvbigkKSB7XHJcblxyXG5cdCd1c2Ugc3RyaWN0JztcclxuXHJcblx0aWYgKCAkLmlzRnVuY3Rpb24oJC5mblsgJ25hbm9TY3JvbGxlcicgXSkgKSB7XHJcblxyXG5cdFx0JChmdW5jdGlvbigpIHtcclxuXHRcdFx0JCgnW2RhdGEtcGx1Z2luLXNjcm9sbGFibGVdJykuZWFjaChmdW5jdGlvbigpIHtcclxuXHRcdFx0XHR2YXIgJHRoaXMgPSAkKCB0aGlzICksXHJcblx0XHRcdFx0XHRvcHRzID0ge307XHJcblxyXG5cdFx0XHRcdHZhciBwbHVnaW5PcHRpb25zID0gJHRoaXMuZGF0YSgncGx1Z2luLW9wdGlvbnMnKTtcclxuXHRcdFx0XHRpZiAocGx1Z2luT3B0aW9ucykge1xyXG5cdFx0XHRcdFx0b3B0cyA9IHBsdWdpbk9wdGlvbnM7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQkdGhpcy50aGVtZVBsdWdpblNjcm9sbGFibGUob3B0cyk7XHJcblx0XHRcdH0pO1xyXG5cdFx0fSk7XHJcblxyXG5cdH1cclxuXHJcbn0pLmFwcGx5KHRoaXMsIFtqUXVlcnldKTtcclxuXHJcbi8vIFNlbGVjdDJcclxuKGZ1bmN0aW9uKCQpIHtcclxuXHJcblx0J3VzZSBzdHJpY3QnO1xyXG5cclxuXHRpZiAoICQuaXNGdW5jdGlvbigkLmZuWyAnc2VsZWN0MicgXSkgKSB7XHJcblxyXG5cdFx0JChmdW5jdGlvbigpIHtcclxuXHRcdFx0JCgnW2RhdGEtcGx1Z2luLXNlbGVjdFR3b10nKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdHZhciAkdGhpcyA9ICQoIHRoaXMgKSxcclxuXHRcdFx0XHRcdG9wdHMgPSB7fTtcclxuXHJcblx0XHRcdFx0dmFyIHBsdWdpbk9wdGlvbnMgPSAkdGhpcy5kYXRhKCdwbHVnaW4tb3B0aW9ucycpO1xyXG5cdFx0XHRcdGlmIChwbHVnaW5PcHRpb25zKVxyXG5cdFx0XHRcdFx0b3B0cyA9IHBsdWdpbk9wdGlvbnM7XHJcblxyXG5cdFx0XHRcdCR0aGlzLnRoZW1lUGx1Z2luU2VsZWN0MihvcHRzKTtcclxuXHRcdFx0fSk7XHJcblx0XHR9KTtcclxuXHJcblx0fVxyXG5cclxufSkuYXBwbHkodGhpcywgW2pRdWVyeV0pO1xyXG5cclxuLy8gU2lkZWJhciBXaWRnZXRzXHJcbihmdW5jdGlvbigkKSB7XHJcblxyXG5cdCd1c2Ugc3RyaWN0JztcclxuXHJcblx0ZnVuY3Rpb24gZXhwYW5kKCBjb250ZW50ICkge1xyXG5cdFx0Y29udGVudC5jaGlsZHJlbiggJy53aWRnZXQtY29udGVudCcgKS5zbGlkZURvd24oICdmYXN0JywgZnVuY3Rpb24oKSB7XHJcblx0XHRcdCQodGhpcykuY3NzKCAnZGlzcGxheScsICcnICk7XHJcblx0XHRcdGNvbnRlbnQucmVtb3ZlQ2xhc3MoICd3aWRnZXQtY29sbGFwc2VkJyApO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBjb2xsYXBzZSggY29udGVudCApIHtcclxuXHRcdGNvbnRlbnQuY2hpbGRyZW4oJy53aWRnZXQtY29udGVudCcgKS5zbGlkZVVwKCAnZmFzdCcsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRjb250ZW50LmFkZENsYXNzKCAnd2lkZ2V0LWNvbGxhcHNlZCcgKTtcclxuXHRcdFx0JCh0aGlzKS5jc3MoICdkaXNwbGF5JywgJycgKTtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0dmFyICR3aWRnZXRzID0gJCggJy5zaWRlYmFyLXdpZGdldCcgKTtcclxuXHJcblx0JHdpZGdldHMuZWFjaCggZnVuY3Rpb24oKSB7XHJcblxyXG5cdFx0dmFyICR3aWRnZXQgPSAkKCB0aGlzICksXHJcblx0XHRcdCR0b2dnbGVyID0gJHdpZGdldC5maW5kKCAnLndpZGdldC10b2dnbGUnICk7XHJcblxyXG5cdFx0JHRvZ2dsZXIub24oJ2NsaWNrLndpZGdldC10b2dnbGVyJywgZnVuY3Rpb24oKSB7XHJcblx0XHRcdCR3aWRnZXQuaGFzQ2xhc3MoJ3dpZGdldC1jb2xsYXBzZWQnKSA/IGV4cGFuZCgkd2lkZ2V0KSA6IGNvbGxhcHNlKCR3aWRnZXQpO1xyXG5cdFx0fSk7XHJcblx0fSk7XHJcblxyXG59KS5hcHBseSh0aGlzLCBbalF1ZXJ5XSk7XHJcblxyXG4vLyBTbGlkZXJcclxuKGZ1bmN0aW9uKCQpIHtcclxuXHJcblx0J3VzZSBzdHJpY3QnO1xyXG5cclxuXHRpZiAoICQuaXNGdW5jdGlvbigkLmZuWyAnc2xpZGVyJyBdKSApIHtcclxuXHJcblx0XHQkKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHQkKCdbZGF0YS1wbHVnaW4tc2xpZGVyXScpLmVhY2goZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0dmFyICR0aGlzID0gJCggdGhpcyApLFxyXG5cdFx0XHRcdFx0b3B0cyA9IHt9O1xyXG5cclxuXHRcdFx0XHR2YXIgcGx1Z2luT3B0aW9ucyA9ICR0aGlzLmRhdGEoJ3BsdWdpbi1vcHRpb25zJyk7XHJcblx0XHRcdFx0aWYgKHBsdWdpbk9wdGlvbnMpIHtcclxuXHRcdFx0XHRcdG9wdHMgPSBwbHVnaW5PcHRpb25zO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0JHRoaXMudGhlbWVQbHVnaW5TbGlkZXIob3B0cyk7XHJcblx0XHRcdH0pO1xyXG5cdFx0fSk7XHJcblxyXG5cdH1cclxuXHJcbn0pLmFwcGx5KHRoaXMsIFtqUXVlcnldKTtcclxuXHJcbi8vIFNwaW5uZXJcclxuKGZ1bmN0aW9uKCQpIHtcclxuXHJcblx0J3VzZSBzdHJpY3QnO1xyXG5cclxuXHRpZiAoICQuaXNGdW5jdGlvbigkLmZuWyAnc3Bpbm5lcicgXSkgKSB7XHJcblxyXG5cdFx0JChmdW5jdGlvbigpIHtcclxuXHRcdFx0JCgnW2RhdGEtcGx1Z2luLXNwaW5uZXJdJykuZWFjaChmdW5jdGlvbigpIHtcclxuXHRcdFx0XHR2YXIgJHRoaXMgPSAkKCB0aGlzICksXHJcblx0XHRcdFx0XHRvcHRzID0ge307XHJcblxyXG5cdFx0XHRcdHZhciBwbHVnaW5PcHRpb25zID0gJHRoaXMuZGF0YSgncGx1Z2luLW9wdGlvbnMnKTtcclxuXHRcdFx0XHRpZiAocGx1Z2luT3B0aW9ucylcclxuXHRcdFx0XHRcdG9wdHMgPSBwbHVnaW5PcHRpb25zO1xyXG5cclxuXHRcdFx0XHQkdGhpcy50aGVtZVBsdWdpblNwaW5uZXIob3B0cyk7XHJcblx0XHRcdH0pO1xyXG5cdFx0fSk7XHJcblxyXG5cdH1cclxuXHJcbn0pLmFwcGx5KHRoaXMsIFtqUXVlcnldKTtcclxuXHJcbi8vIFN1bW1lck5vdGVcclxuKGZ1bmN0aW9uKCQpIHtcclxuXHJcblx0J3VzZSBzdHJpY3QnO1xyXG5cclxuXHRpZiAoICQuaXNGdW5jdGlvbigkLmZuWyAnc3VtbWVybm90ZScgXSkgKSB7XHJcblxyXG5cdFx0JChmdW5jdGlvbigpIHtcclxuXHRcdFx0JCgnW2RhdGEtcGx1Z2luLXN1bW1lcm5vdGVdJykuZWFjaChmdW5jdGlvbigpIHtcclxuXHRcdFx0XHR2YXIgJHRoaXMgPSAkKCB0aGlzICksXHJcblx0XHRcdFx0XHRvcHRzID0ge307XHJcblxyXG5cdFx0XHRcdHZhciBwbHVnaW5PcHRpb25zID0gJHRoaXMuZGF0YSgncGx1Z2luLW9wdGlvbnMnKTtcclxuXHRcdFx0XHRpZiAocGx1Z2luT3B0aW9ucylcclxuXHRcdFx0XHRcdG9wdHMgPSBwbHVnaW5PcHRpb25zO1xyXG5cclxuXHRcdFx0XHQkdGhpcy50aGVtZVBsdWdpblN1bW1lck5vdGUob3B0cyk7XHJcblx0XHRcdH0pO1xyXG5cdFx0fSk7XHJcblxyXG5cdH1cclxuXHJcbn0pLmFwcGx5KHRoaXMsIFtqUXVlcnldKTtcclxuXHJcbi8vIFRleHRBcmVhIEF1dG9TaXplXHJcbihmdW5jdGlvbigkKSB7XHJcblxyXG5cdCd1c2Ugc3RyaWN0JztcclxuXHJcblx0aWYgKCB0eXBlb2YgYXV0b3NpemUgPT09ICdmdW5jdGlvbicgKSB7XHJcblxyXG5cdFx0JChmdW5jdGlvbigpIHtcclxuXHRcdFx0JCgnW2RhdGEtcGx1Z2luLXRleHRhcmVhLWF1dG9zaXplXScpLmVhY2goZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0dmFyICR0aGlzID0gJCggdGhpcyApLFxyXG5cdFx0XHRcdFx0b3B0cyA9IHt9O1xyXG5cclxuXHRcdFx0XHR2YXIgcGx1Z2luT3B0aW9ucyA9ICR0aGlzLmRhdGEoJ3BsdWdpbi1vcHRpb25zJyk7XHJcblx0XHRcdFx0aWYgKHBsdWdpbk9wdGlvbnMpXHJcblx0XHRcdFx0XHRvcHRzID0gcGx1Z2luT3B0aW9ucztcclxuXHJcblx0XHRcdFx0JHRoaXMudGhlbWVQbHVnaW5UZXh0QXJlYUF1dG9TaXplKG9wdHMpO1xyXG5cdFx0XHR9KTtcclxuXHRcdH0pO1xyXG5cclxuXHR9XHJcblxyXG59KS5hcHBseSh0aGlzLCBbalF1ZXJ5XSk7XHJcblxyXG4vLyBUaW1lUGlja2VyXHJcbihmdW5jdGlvbigkKSB7XHJcblxyXG5cdCd1c2Ugc3RyaWN0JztcclxuXHJcblx0aWYgKCAkLmlzRnVuY3Rpb24oJC5mblsgJ3RpbWVwaWNrZXInIF0pICkge1xyXG5cclxuXHRcdCQoZnVuY3Rpb24oKSB7XHJcblx0XHRcdCQoJ1tkYXRhLXBsdWdpbi10aW1lcGlja2VyXScpLmVhY2goZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0dmFyICR0aGlzID0gJCggdGhpcyApLFxyXG5cdFx0XHRcdFx0b3B0cyA9IHt9O1xyXG5cclxuXHRcdFx0XHR2YXIgcGx1Z2luT3B0aW9ucyA9ICR0aGlzLmRhdGEoJ3BsdWdpbi1vcHRpb25zJyk7XHJcblx0XHRcdFx0aWYgKHBsdWdpbk9wdGlvbnMpXHJcblx0XHRcdFx0XHRvcHRzID0gcGx1Z2luT3B0aW9ucztcclxuXHJcblx0XHRcdFx0JHRoaXMudGhlbWVQbHVnaW5UaW1lUGlja2VyKG9wdHMpO1xyXG5cdFx0XHR9KTtcclxuXHRcdH0pO1xyXG5cclxuXHR9XHJcblxyXG59KS5hcHBseSh0aGlzLCBbalF1ZXJ5XSk7XHJcblxyXG4vLyBUb2dnbGVcclxuKGZ1bmN0aW9uKCQpIHtcclxuXHJcblx0J3VzZSBzdHJpY3QnO1xyXG5cclxuXHQkKGZ1bmN0aW9uKCkge1xyXG5cdFx0JCgnW2RhdGEtcGx1Z2luLXRvZ2dsZV0nKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHR2YXIgJHRoaXMgPSAkKCB0aGlzICksXHJcblx0XHRcdFx0b3B0cyA9IHt9O1xyXG5cclxuXHRcdFx0dmFyIHBsdWdpbk9wdGlvbnMgPSAkdGhpcy5kYXRhKCdwbHVnaW4tb3B0aW9ucycpO1xyXG5cdFx0XHRpZiAocGx1Z2luT3B0aW9ucylcclxuXHRcdFx0XHRvcHRzID0gcGx1Z2luT3B0aW9ucztcclxuXHJcblx0XHRcdCR0aGlzLnRoZW1lUGx1Z2luVG9nZ2xlKG9wdHMpO1xyXG5cdFx0fSk7XHJcblx0fSk7XHJcblxyXG59KS5hcHBseSh0aGlzLCBbalF1ZXJ5XSk7XHJcblxyXG4vLyBUb29sdGlwXHJcbihmdW5jdGlvbigkKSB7XHJcblxyXG5cdCd1c2Ugc3RyaWN0JztcclxuXHJcblx0aWYgKCAkLmlzRnVuY3Rpb24oICQuZm5bJ3Rvb2x0aXAnXSApICkge1xyXG5cdFx0JCggJ1tkYXRhLXRvZ2dsZT10b29sdGlwXSxbcmVsPXRvb2x0aXBdJyApLnRvb2x0aXAoeyBjb250YWluZXI6ICdib2R5JyB9KTtcclxuXHR9XHJcblxyXG59KS5hcHBseSh0aGlzLCBbalF1ZXJ5XSk7XHJcblxyXG4vLyBXaWRnZXQgLSBUb2RvXHJcbihmdW5jdGlvbigkKSB7XHJcblxyXG5cdCd1c2Ugc3RyaWN0JztcclxuXHJcblx0aWYgKCAkLmlzRnVuY3Rpb24oJC5mblsgJ3RoZW1lUGx1Z2luV2lkZ2V0VG9kb0xpc3QnIF0pICkge1xyXG5cclxuXHRcdCQoZnVuY3Rpb24oKSB7XHJcblx0XHRcdCQoJ1tkYXRhLXBsdWdpbi10b2RvLWxpc3RdLCB1bC53aWRnZXQtdG9kby1saXN0JykuZWFjaChmdW5jdGlvbigpIHtcclxuXHRcdFx0XHR2YXIgJHRoaXMgPSAkKCB0aGlzICksXHJcblx0XHRcdFx0XHRvcHRzID0ge307XHJcblxyXG5cdFx0XHRcdHZhciBwbHVnaW5PcHRpb25zID0gJHRoaXMuZGF0YSgncGx1Z2luLW9wdGlvbnMnKTtcclxuXHRcdFx0XHRpZiAocGx1Z2luT3B0aW9ucylcclxuXHRcdFx0XHRcdG9wdHMgPSBwbHVnaW5PcHRpb25zO1xyXG5cclxuXHRcdFx0XHQkdGhpcy50aGVtZVBsdWdpbldpZGdldFRvZG9MaXN0KG9wdHMpO1xyXG5cdFx0XHR9KTtcclxuXHRcdH0pO1xyXG5cclxuXHR9XHJcblxyXG59KS5hcHBseSh0aGlzLCBbalF1ZXJ5XSk7XHJcblxyXG4vLyBXaWRnZXQgLSBUb2dnbGVcclxuKGZ1bmN0aW9uKCQpIHtcclxuXHJcblx0J3VzZSBzdHJpY3QnO1xyXG5cclxuXHRpZiAoICQuaXNGdW5jdGlvbigkLmZuWyAndGhlbWVQbHVnaW5XaWRnZXRUb2dnbGVFeHBhbmQnIF0pICkge1xyXG5cclxuXHRcdCQoZnVuY3Rpb24oKSB7XHJcblx0XHRcdCQoJ1tkYXRhLXBsdWdpbi10b2dnbGUtZXhwYW5kXSwgLndpZGdldC10b2dnbGUtZXhwYW5kJykuZWFjaChmdW5jdGlvbigpIHtcclxuXHRcdFx0XHR2YXIgJHRoaXMgPSAkKCB0aGlzICksXHJcblx0XHRcdFx0XHRvcHRzID0ge307XHJcblxyXG5cdFx0XHRcdHZhciBwbHVnaW5PcHRpb25zID0gJHRoaXMuZGF0YSgncGx1Z2luLW9wdGlvbnMnKTtcclxuXHRcdFx0XHRpZiAocGx1Z2luT3B0aW9ucylcclxuXHRcdFx0XHRcdG9wdHMgPSBwbHVnaW5PcHRpb25zO1xyXG5cclxuXHRcdFx0XHQkdGhpcy50aGVtZVBsdWdpbldpZGdldFRvZ2dsZUV4cGFuZChvcHRzKTtcclxuXHRcdFx0fSk7XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG59KS5hcHBseSh0aGlzLCBbalF1ZXJ5XSk7XHJcblxyXG4vLyBXb3JkIFJvdGF0b3JcclxuKGZ1bmN0aW9uKCQpIHtcclxuXHJcblx0J3VzZSBzdHJpY3QnO1xyXG5cclxuXHRpZiAoICQuaXNGdW5jdGlvbigkLmZuWyAndGhlbWVQbHVnaW5Xb3JkUm90YXRvcicgXSkgKSB7XHJcblxyXG5cdFx0JChmdW5jdGlvbigpIHtcclxuXHRcdFx0JCgnW2RhdGEtcGx1Z2luLXdvcnQtcm90YXRvcl0sIC53b3J0LXJvdGF0b3I6bm90KC5tYW51YWwpJykuZWFjaChmdW5jdGlvbigpIHtcclxuXHRcdFx0XHR2YXIgJHRoaXMgPSAkKCB0aGlzICksXHJcblx0XHRcdFx0XHRvcHRzID0ge307XHJcblxyXG5cdFx0XHRcdHZhciBwbHVnaW5PcHRpb25zID0gJHRoaXMuZGF0YSgncGx1Z2luLW9wdGlvbnMnKTtcclxuXHRcdFx0XHRpZiAocGx1Z2luT3B0aW9ucylcclxuXHRcdFx0XHRcdG9wdHMgPSBwbHVnaW5PcHRpb25zO1xyXG5cclxuXHRcdFx0XHQkdGhpcy50aGVtZVBsdWdpbldvcmRSb3RhdG9yKG9wdHMpO1xyXG5cdFx0XHR9KTtcclxuXHRcdH0pO1xyXG5cclxuXHR9XHJcblxyXG59KS5hcHBseSh0aGlzLCBbalF1ZXJ5XSk7XHJcblxyXG4vLyBCYXNlXHJcbihmdW5jdGlvbih0aGVtZSwgJCkge1xyXG5cclxuXHQndXNlIHN0cmljdCc7XHJcblxyXG5cdHRoZW1lID0gdGhlbWUgfHwge307XHJcblxyXG5cdHRoZW1lLlNrZWxldG9uLmluaXRpYWxpemUoKTtcclxuXHJcbn0pLmFwcGx5KHRoaXMsIFt3aW5kb3cudGhlbWUsIGpRdWVyeV0pO1xyXG5cclxuLy8gTWFpbGJveFxyXG4oZnVuY3Rpb24oJCkge1xyXG5cclxuXHQndXNlIHN0cmljdCc7XHJcblxyXG5cdCQoZnVuY3Rpb24oKSB7XHJcblx0XHQkKCdbZGF0YS1tYWlsYm94XScpLmVhY2goZnVuY3Rpb24oKSB7XHJcblx0XHRcdHZhciAkdGhpcyA9ICQoIHRoaXMgKTtcclxuXHJcblx0XHRcdCR0aGlzLnRoZW1lTWFpbGJveCgpO1xyXG5cdFx0fSk7XHJcblx0fSk7XHJcblxyXG59KS5hcHBseSh0aGlzLCBbalF1ZXJ5XSk7IiwiJ3VzZSBzdHJpY3QnO1xudmFyIGJpbmQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tYmluZC1jb250ZXh0Jyk7XG52YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG52YXIgSW5kZXhlZE9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pbmRleGVkLW9iamVjdCcpO1xudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLW9iamVjdCcpO1xudmFyIGxlbmd0aE9mQXJyYXlMaWtlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2xlbmd0aC1vZi1hcnJheS1saWtlJyk7XG52YXIgYXJyYXlTcGVjaWVzQ3JlYXRlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LXNwZWNpZXMtY3JlYXRlJyk7XG5cbnZhciBwdXNoID0gdW5jdXJyeVRoaXMoW10ucHVzaCk7XG5cbi8vIGBBcnJheS5wcm90b3R5cGUueyBmb3JFYWNoLCBtYXAsIGZpbHRlciwgc29tZSwgZXZlcnksIGZpbmQsIGZpbmRJbmRleCwgZmlsdGVyUmVqZWN0IH1gIG1ldGhvZHMgaW1wbGVtZW50YXRpb25cbnZhciBjcmVhdGVNZXRob2QgPSBmdW5jdGlvbiAoVFlQRSkge1xuICB2YXIgSVNfTUFQID0gVFlQRSA9PT0gMTtcbiAgdmFyIElTX0ZJTFRFUiA9IFRZUEUgPT09IDI7XG4gIHZhciBJU19TT01FID0gVFlQRSA9PT0gMztcbiAgdmFyIElTX0VWRVJZID0gVFlQRSA9PT0gNDtcbiAgdmFyIElTX0ZJTkRfSU5ERVggPSBUWVBFID09PSA2O1xuICB2YXIgSVNfRklMVEVSX1JFSkVDVCA9IFRZUEUgPT09IDc7XG4gIHZhciBOT19IT0xFUyA9IFRZUEUgPT09IDUgfHwgSVNfRklORF9JTkRFWDtcbiAgcmV0dXJuIGZ1bmN0aW9uICgkdGhpcywgY2FsbGJhY2tmbiwgdGhhdCwgc3BlY2lmaWNDcmVhdGUpIHtcbiAgICB2YXIgTyA9IHRvT2JqZWN0KCR0aGlzKTtcbiAgICB2YXIgc2VsZiA9IEluZGV4ZWRPYmplY3QoTyk7XG4gICAgdmFyIGxlbmd0aCA9IGxlbmd0aE9mQXJyYXlMaWtlKHNlbGYpO1xuICAgIHZhciBib3VuZEZ1bmN0aW9uID0gYmluZChjYWxsYmFja2ZuLCB0aGF0KTtcbiAgICB2YXIgaW5kZXggPSAwO1xuICAgIHZhciBjcmVhdGUgPSBzcGVjaWZpY0NyZWF0ZSB8fCBhcnJheVNwZWNpZXNDcmVhdGU7XG4gICAgdmFyIHRhcmdldCA9IElTX01BUCA/IGNyZWF0ZSgkdGhpcywgbGVuZ3RoKSA6IElTX0ZJTFRFUiB8fCBJU19GSUxURVJfUkVKRUNUID8gY3JlYXRlKCR0aGlzLCAwKSA6IHVuZGVmaW5lZDtcbiAgICB2YXIgdmFsdWUsIHJlc3VsdDtcbiAgICBmb3IgKDtsZW5ndGggPiBpbmRleDsgaW5kZXgrKykgaWYgKE5PX0hPTEVTIHx8IGluZGV4IGluIHNlbGYpIHtcbiAgICAgIHZhbHVlID0gc2VsZltpbmRleF07XG4gICAgICByZXN1bHQgPSBib3VuZEZ1bmN0aW9uKHZhbHVlLCBpbmRleCwgTyk7XG4gICAgICBpZiAoVFlQRSkge1xuICAgICAgICBpZiAoSVNfTUFQKSB0YXJnZXRbaW5kZXhdID0gcmVzdWx0OyAvLyBtYXBcbiAgICAgICAgZWxzZSBpZiAocmVzdWx0KSBzd2l0Y2ggKFRZUEUpIHtcbiAgICAgICAgICBjYXNlIDM6IHJldHVybiB0cnVlOyAgICAgICAgICAgICAgLy8gc29tZVxuICAgICAgICAgIGNhc2UgNTogcmV0dXJuIHZhbHVlOyAgICAgICAgICAgICAvLyBmaW5kXG4gICAgICAgICAgY2FzZSA2OiByZXR1cm4gaW5kZXg7ICAgICAgICAgICAgIC8vIGZpbmRJbmRleFxuICAgICAgICAgIGNhc2UgMjogcHVzaCh0YXJnZXQsIHZhbHVlKTsgICAgICAvLyBmaWx0ZXJcbiAgICAgICAgfSBlbHNlIHN3aXRjaCAoVFlQRSkge1xuICAgICAgICAgIGNhc2UgNDogcmV0dXJuIGZhbHNlOyAgICAgICAgICAgICAvLyBldmVyeVxuICAgICAgICAgIGNhc2UgNzogcHVzaCh0YXJnZXQsIHZhbHVlKTsgICAgICAvLyBmaWx0ZXJSZWplY3RcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gSVNfRklORF9JTkRFWCA/IC0xIDogSVNfU09NRSB8fCBJU19FVkVSWSA/IElTX0VWRVJZIDogdGFyZ2V0O1xuICB9O1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIC8vIGBBcnJheS5wcm90b3R5cGUuZm9yRWFjaGAgbWV0aG9kXG4gIC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLmZvcmVhY2hcbiAgZm9yRWFjaDogY3JlYXRlTWV0aG9kKDApLFxuICAvLyBgQXJyYXkucHJvdG90eXBlLm1hcGAgbWV0aG9kXG4gIC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLm1hcFxuICBtYXA6IGNyZWF0ZU1ldGhvZCgxKSxcbiAgLy8gYEFycmF5LnByb3RvdHlwZS5maWx0ZXJgIG1ldGhvZFxuICAvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5maWx0ZXJcbiAgZmlsdGVyOiBjcmVhdGVNZXRob2QoMiksXG4gIC8vIGBBcnJheS5wcm90b3R5cGUuc29tZWAgbWV0aG9kXG4gIC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLnNvbWVcbiAgc29tZTogY3JlYXRlTWV0aG9kKDMpLFxuICAvLyBgQXJyYXkucHJvdG90eXBlLmV2ZXJ5YCBtZXRob2RcbiAgLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuZXZlcnlcbiAgZXZlcnk6IGNyZWF0ZU1ldGhvZCg0KSxcbiAgLy8gYEFycmF5LnByb3RvdHlwZS5maW5kYCBtZXRob2RcbiAgLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuZmluZFxuICBmaW5kOiBjcmVhdGVNZXRob2QoNSksXG4gIC8vIGBBcnJheS5wcm90b3R5cGUuZmluZEluZGV4YCBtZXRob2RcbiAgLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuZmluZEluZGV4XG4gIGZpbmRJbmRleDogY3JlYXRlTWV0aG9kKDYpLFxuICAvLyBgQXJyYXkucHJvdG90eXBlLmZpbHRlclJlamVjdGAgbWV0aG9kXG4gIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS90YzM5L3Byb3Bvc2FsLWFycmF5LWZpbHRlcmluZ1xuICBmaWx0ZXJSZWplY3Q6IGNyZWF0ZU1ldGhvZCg3KVxufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMtY2xhdXNlJyk7XG52YXIgYUNhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2EtY2FsbGFibGUnKTtcbnZhciBOQVRJVkVfQklORCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1iaW5kLW5hdGl2ZScpO1xuXG52YXIgYmluZCA9IHVuY3VycnlUaGlzKHVuY3VycnlUaGlzLmJpbmQpO1xuXG4vLyBvcHRpb25hbCAvIHNpbXBsZSBjb250ZXh0IGJpbmRpbmdcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGZuLCB0aGF0KSB7XG4gIGFDYWxsYWJsZShmbik7XG4gIHJldHVybiB0aGF0ID09PSB1bmRlZmluZWQgPyBmbiA6IE5BVElWRV9CSU5EID8gYmluZChmbiwgdGhhdCkgOiBmdW5jdGlvbiAoLyogLi4uYXJncyAqLykge1xuICAgIHJldHVybiBmbi5hcHBseSh0aGF0LCBhcmd1bWVudHMpO1xuICB9O1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyICRmaW5kID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LWl0ZXJhdGlvbicpLmZpbmQ7XG52YXIgYWRkVG9VbnNjb3BhYmxlcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hZGQtdG8tdW5zY29wYWJsZXMnKTtcblxudmFyIEZJTkQgPSAnZmluZCc7XG52YXIgU0tJUFNfSE9MRVMgPSB0cnVlO1xuXG4vLyBTaG91bGRuJ3Qgc2tpcCBob2xlc1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLWFycmF5LXByb3RvdHlwZS1maW5kIC0tIHRlc3RpbmdcbmlmIChGSU5EIGluIFtdKSBBcnJheSgxKVtGSU5EXShmdW5jdGlvbiAoKSB7IFNLSVBTX0hPTEVTID0gZmFsc2U7IH0pO1xuXG4vLyBgQXJyYXkucHJvdG90eXBlLmZpbmRgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuZmluZFxuJCh7IHRhcmdldDogJ0FycmF5JywgcHJvdG86IHRydWUsIGZvcmNlZDogU0tJUFNfSE9MRVMgfSwge1xuICBmaW5kOiBmdW5jdGlvbiBmaW5kKGNhbGxiYWNrZm4gLyogLCB0aGF0ID0gdW5kZWZpbmVkICovKSB7XG4gICAgcmV0dXJuICRmaW5kKHRoaXMsIGNhbGxiYWNrZm4sIGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkKTtcbiAgfVxufSk7XG5cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLUBAdW5zY29wYWJsZXNcbmFkZFRvVW5zY29wYWJsZXMoRklORCk7XG4iXSwibmFtZXMiOlsiJCIsImlzRnVuY3Rpb24iLCJmbiIsImVhY2giLCIkdGhpcyIsIm9wdHMiLCJwbHVnaW5PcHRpb25zIiwiZGF0YSIsInRoZW1lUGx1Z2luQW5pbWF0ZSIsImFwcGx5IiwialF1ZXJ5IiwidGhlbWVQbHVnaW5DYXJvdXNlbCIsInRoZW1lUGx1Z2luQ2hhcnRDaXJjdWxhciIsIkNvZGVNaXJyb3IiLCJ0aGVtZVBsdWdpbkNvZGVNaXJyb3IiLCJ0aGVtZVBsdWdpbkNvbG9yUGlja2VyIiwidGhlbWVQbHVnaW5EYXRlUGlja2VyIiwidGhlbWUiLCJOYXYiLCJpbml0aWFsaXplIiwid2luZG93IiwiU3dpdGNoIiwidGhlbWVQbHVnaW5JT1M3U3dpdGNoIiwidGhlbWVQbHVnaW5MaWdodGJveCIsIk5Qcm9ncmVzcyIsImNvbmZpZ3VyZSIsInNob3dTcGlubmVyIiwiZWFzZSIsInNwZWVkIiwidGhlbWVQbHVnaW5NYXJrZG93bkVkaXRvciIsInRoZW1lUGx1Z2luTWFza2VkSW5wdXQiLCJ0aGVtZVBsdWdpbk1heExlbmd0aCIsInRoZW1lUGx1Z2luTXVsdGlTZWxlY3QiLCJwbGFjZWhvbGRlciIsInBvcG92ZXIiLCJ0aGVtZVBsdWdpblBvcnRsZXQiLCJQbHVnaW5TY3JvbGxUb1RvcCIsInRoZW1lUGx1Z2luU2Nyb2xsYWJsZSIsInRoZW1lUGx1Z2luU2VsZWN0MiIsImV4cGFuZCIsImNvbnRlbnQiLCJjaGlsZHJlbiIsInNsaWRlRG93biIsImNzcyIsInJlbW92ZUNsYXNzIiwiY29sbGFwc2UiLCJzbGlkZVVwIiwiYWRkQ2xhc3MiLCIkd2lkZ2V0cyIsIiR3aWRnZXQiLCIkdG9nZ2xlciIsImZpbmQiLCJvbiIsImhhc0NsYXNzIiwidGhlbWVQbHVnaW5TbGlkZXIiLCJ0aGVtZVBsdWdpblNwaW5uZXIiLCJ0aGVtZVBsdWdpblN1bW1lck5vdGUiLCJhdXRvc2l6ZSIsInRoZW1lUGx1Z2luVGV4dEFyZWFBdXRvU2l6ZSIsInRoZW1lUGx1Z2luVGltZVBpY2tlciIsInRoZW1lUGx1Z2luVG9nZ2xlIiwidG9vbHRpcCIsImNvbnRhaW5lciIsInRoZW1lUGx1Z2luV2lkZ2V0VG9kb0xpc3QiLCJ0aGVtZVBsdWdpbldpZGdldFRvZ2dsZUV4cGFuZCIsInRoZW1lUGx1Z2luV29yZFJvdGF0b3IiLCJTa2VsZXRvbiIsInRoZW1lTWFpbGJveCJdLCJzb3VyY2VSb290IjoiIn0=