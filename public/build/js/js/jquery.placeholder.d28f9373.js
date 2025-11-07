(self["webpackChunk"] = self["webpackChunk"] || []).push([["js/jquery.placeholder"],{

/***/ "./assets/css/portoadmin/vendor/jquery-placeholder/jquery.placeholder.js":
/*!*******************************************************************************!*\
  !*** ./assets/css/portoadmin/vendor/jquery-placeholder/jquery.placeholder.js ***!
  \*******************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;__webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
__webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
__webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
__webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
__webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
__webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
__webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
__webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
__webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
__webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
__webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
__webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
__webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
/*!
 * jQuery Placeholder Plugin v2.3.1
 * https://github.com/mathiasbynens/jquery-placeholder
 *
 * Copyright 2011, 2015 Mathias Bynens
 * Released under the MIT license
 */
(function (factory) {
  if (true) {
    // AMD
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else // removed by dead control flow
{}
})(function ($) {
  /****
   * Allows plugin behavior simulation in modern browsers for easier debugging. 
   * When setting to true, use attribute "placeholder-x" rather than the usual "placeholder" in your inputs/textareas 
   * i.e. <input type="text" placeholder-x="my placeholder text" />
   */
  var debugMode = false;

  // Opera Mini v7 doesn't support placeholder although its DOM seems to indicate so
  var isOperaMini = Object.prototype.toString.call(window.operamini) === '[object OperaMini]';
  var isInputSupported = 'placeholder' in document.createElement('input') && !isOperaMini && !debugMode;
  var isTextareaSupported = 'placeholder' in document.createElement('textarea') && !isOperaMini && !debugMode;
  var valHooks = $.valHooks;
  var propHooks = $.propHooks;
  var hooks;
  var placeholder;
  var settings = {};
  if (isInputSupported && isTextareaSupported) {
    placeholder = $.fn.placeholder = function () {
      return this;
    };
    placeholder.input = true;
    placeholder.textarea = true;
  } else {
    placeholder = $.fn.placeholder = function (options) {
      var defaults = {
        customClass: 'placeholder'
      };
      settings = $.extend({}, defaults, options);
      return this.filter((isInputSupported ? 'textarea' : ':input') + '[' + (debugMode ? 'placeholder-x' : 'placeholder') + ']').not('.' + settings.customClass).not(':radio, :checkbox, [type=hidden]').bind({
        'focus.placeholder': clearPlaceholder,
        'blur.placeholder': setPlaceholder
      }).data('placeholder-enabled', true).trigger('blur.placeholder');
    };
    placeholder.input = isInputSupported;
    placeholder.textarea = isTextareaSupported;
    hooks = {
      'get': function get(element) {
        var $element = $(element);
        var $passwordInput = $element.data('placeholder-password');
        if ($passwordInput) {
          return $passwordInput[0].value;
        }
        return $element.data('placeholder-enabled') && $element.hasClass(settings.customClass) ? '' : element.value;
      },
      'set': function set(element, value) {
        var $element = $(element);
        var $replacement;
        var $passwordInput;
        if (value !== '') {
          $replacement = $element.data('placeholder-textinput');
          $passwordInput = $element.data('placeholder-password');
          if ($replacement) {
            clearPlaceholder.call($replacement[0], true, value) || (element.value = value);
            $replacement[0].value = value;
          } else if ($passwordInput) {
            clearPlaceholder.call(element, true, value) || ($passwordInput[0].value = value);
            element.value = value;
          }
        }
        if (!$element.data('placeholder-enabled')) {
          element.value = value;
          return $element;
        }
        if (value === '') {
          element.value = value;

          // Setting the placeholder causes problems if the element continues to have focus.
          if (element != safeActiveElement()) {
            // We can't use `triggerHandler` here because of dummy text/password inputs :(
            setPlaceholder.call(element);
          }
        } else {
          if ($element.hasClass(settings.customClass)) {
            clearPlaceholder.call(element);
          }
          element.value = value;
        }
        // `set` can not return `undefined`; see http://jsapi.info/jquery/1.7.1/val#L2363
        return $element;
      }
    };
    if (!isInputSupported) {
      valHooks.input = hooks;
      propHooks.value = hooks;
    }
    if (!isTextareaSupported) {
      valHooks.textarea = hooks;
      propHooks.value = hooks;
    }
    $(function () {
      // Look for forms
      $(document).delegate('form', 'submit.placeholder', function () {
        // Clear the placeholder values so they don't get submitted
        var $inputs = $('.' + settings.customClass, this).each(function () {
          clearPlaceholder.call(this, true, '');
        });
        setTimeout(function () {
          $inputs.each(setPlaceholder);
        }, 10);
      });
    });

    // Clear placeholder values upon page reload
    $(window).bind('beforeunload.placeholder', function () {
      var clearPlaceholders = true;
      try {
        // Prevent IE javascript:void(0) anchors from causing cleared values
        if (document.activeElement.toString() === 'javascript:void(0)') {
          clearPlaceholders = false;
        }
      } catch (exception) {}
      if (clearPlaceholders) {
        $('.' + settings.customClass).each(function () {
          this.value = '';
        });
      }
    });
  }
  function args(elem) {
    // Return an object of element attributes
    var newAttrs = {};
    var rinlinejQuery = /^jQuery\d+$/;
    $.each(elem.attributes, function (i, attr) {
      if (attr.specified && !rinlinejQuery.test(attr.name)) {
        newAttrs[attr.name] = attr.value;
      }
    });
    return newAttrs;
  }
  function clearPlaceholder(event, value) {
    var input = this;
    var $input = $(this);
    if (input.value === $input.attr(debugMode ? 'placeholder-x' : 'placeholder') && $input.hasClass(settings.customClass)) {
      input.value = '';
      $input.removeClass(settings.customClass);
      if ($input.data('placeholder-password')) {
        $input = $input.hide().nextAll('input[type="password"]:first').show().attr('id', $input.removeAttr('id').data('placeholder-id'));

        // If `clearPlaceholder` was called from `$.valHooks.input.set`
        if (event === true) {
          $input[0].value = value;
          return value;
        }
        $input.focus();
      } else {
        input == safeActiveElement() && input.select();
      }
    }
  }
  function setPlaceholder(event) {
    var $replacement;
    var input = this;
    var $input = $(this);
    var id = input.id;

    // If the placeholder is activated, triggering blur event (`$input.trigger('blur')`) should do nothing.
    if (event && event.type === 'blur' && $input.hasClass(settings.customClass)) {
      return;
    }
    if (input.value === '') {
      if (input.type === 'password') {
        if (!$input.data('placeholder-textinput')) {
          try {
            $replacement = $input.clone().prop({
              'type': 'text'
            });
          } catch (e) {
            $replacement = $('<input>').attr($.extend(args(this), {
              'type': 'text'
            }));
          }
          $replacement.removeAttr('name').data({
            'placeholder-enabled': true,
            'placeholder-password': $input,
            'placeholder-id': id
          }).bind('focus.placeholder', clearPlaceholder);
          $input.data({
            'placeholder-textinput': $replacement,
            'placeholder-id': id
          }).before($replacement);
        }
        input.value = '';
        $input = $input.removeAttr('id').hide().prevAll('input[type="text"]:first').attr('id', $input.data('placeholder-id')).show();
      } else {
        var $passwordInput = $input.data('placeholder-password');
        if ($passwordInput) {
          $passwordInput[0].value = '';
          $input.attr('id', $input.data('placeholder-id')).show().nextAll('input[type="password"]:last').hide().removeAttr('id');
        }
      }
      $input.addClass(settings.customClass);
      $input[0].value = $input.attr(debugMode ? 'placeholder-x' : 'placeholder');
    } else {
      $input.removeClass(settings.customClass);
    }
  }
  function safeActiveElement() {
    // Avoid IE9 `document.activeElement` of death
    try {
      return document.activeElement;
    } catch (exception) {}
  }
});

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_internals_export_js","vendors-node_modules_core-js_internals_add-to-unscopables_js-node_modules_core-js_internals_a-09983a","vendors-node_modules_core-js_internals_array-slice_js-node_modules_core-js_internals_function-caeab8","vendors-node_modules_core-js_modules_es_string_iterator_js-node_modules_core-js_modules_es_sy-23bad7","vendors-node_modules_jquery_dist_jquery_js","vendors-node_modules_core-js_modules_es_array_filter_js-node_modules_core-js_modules_es_date_-a53956"], () => (__webpack_exec__("./assets/css/portoadmin/vendor/jquery-placeholder/jquery.placeholder.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFFBQVEsQ0FBQ29DLGFBQWE7SUFDakMsQ0FBQyxDQUFDLE9BQU9DLFNBQVMsRUFBRSxDQUFDO0VBQ3pCO0FBQ0osQ0FBQyxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY3NzL3BvcnRvYWRtaW4vdmVuZG9yL2pxdWVyeS1wbGFjZWhvbGRlci9qcXVlcnkucGxhY2Vob2xkZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyohXG4gKiBqUXVlcnkgUGxhY2Vob2xkZXIgUGx1Z2luIHYyLjMuMVxuICogaHR0cHM6Ly9naXRodWIuY29tL21hdGhpYXNieW5lbnMvanF1ZXJ5LXBsYWNlaG9sZGVyXG4gKlxuICogQ29weXJpZ2h0IDIwMTEsIDIwMTUgTWF0aGlhcyBCeW5lbnNcbiAqIFJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZVxuICovXG4oZnVuY3Rpb24oZmFjdG9yeSkge1xuICAgIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpIHtcbiAgICAgICAgLy8gQU1EXG4gICAgICAgIGRlZmluZShbJ2pxdWVyeSddLCBmYWN0b3J5KTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnICYmIG1vZHVsZS5leHBvcnRzKSB7XG4gICAgICAgIGZhY3RvcnkocmVxdWlyZSgnanF1ZXJ5JykpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIEJyb3dzZXIgZ2xvYmFsc1xuICAgICAgICBmYWN0b3J5KGpRdWVyeSk7XG4gICAgfVxufShmdW5jdGlvbigkKSB7XG5cbiAgICAvKioqKlxuICAgICAqIEFsbG93cyBwbHVnaW4gYmVoYXZpb3Igc2ltdWxhdGlvbiBpbiBtb2Rlcm4gYnJvd3NlcnMgZm9yIGVhc2llciBkZWJ1Z2dpbmcuIFxuICAgICAqIFdoZW4gc2V0dGluZyB0byB0cnVlLCB1c2UgYXR0cmlidXRlIFwicGxhY2Vob2xkZXIteFwiIHJhdGhlciB0aGFuIHRoZSB1c3VhbCBcInBsYWNlaG9sZGVyXCIgaW4geW91ciBpbnB1dHMvdGV4dGFyZWFzIFxuICAgICAqIGkuZS4gPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXIteD1cIm15IHBsYWNlaG9sZGVyIHRleHRcIiAvPlxuICAgICAqL1xuICAgIHZhciBkZWJ1Z01vZGUgPSBmYWxzZTsgXG5cbiAgICAvLyBPcGVyYSBNaW5pIHY3IGRvZXNuJ3Qgc3VwcG9ydCBwbGFjZWhvbGRlciBhbHRob3VnaCBpdHMgRE9NIHNlZW1zIHRvIGluZGljYXRlIHNvXG4gICAgdmFyIGlzT3BlcmFNaW5pID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHdpbmRvdy5vcGVyYW1pbmkpID09PSAnW29iamVjdCBPcGVyYU1pbmldJztcbiAgICB2YXIgaXNJbnB1dFN1cHBvcnRlZCA9ICdwbGFjZWhvbGRlcicgaW4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKSAmJiAhaXNPcGVyYU1pbmkgJiYgIWRlYnVnTW9kZTtcbiAgICB2YXIgaXNUZXh0YXJlYVN1cHBvcnRlZCA9ICdwbGFjZWhvbGRlcicgaW4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKSAmJiAhaXNPcGVyYU1pbmkgJiYgIWRlYnVnTW9kZTtcbiAgICB2YXIgdmFsSG9va3MgPSAkLnZhbEhvb2tzO1xuICAgIHZhciBwcm9wSG9va3MgPSAkLnByb3BIb29rcztcbiAgICB2YXIgaG9va3M7XG4gICAgdmFyIHBsYWNlaG9sZGVyO1xuICAgIHZhciBzZXR0aW5ncyA9IHt9O1xuXG4gICAgaWYgKGlzSW5wdXRTdXBwb3J0ZWQgJiYgaXNUZXh0YXJlYVN1cHBvcnRlZCkge1xuXG4gICAgICAgIHBsYWNlaG9sZGVyID0gJC5mbi5wbGFjZWhvbGRlciA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH07XG5cbiAgICAgICAgcGxhY2Vob2xkZXIuaW5wdXQgPSB0cnVlO1xuICAgICAgICBwbGFjZWhvbGRlci50ZXh0YXJlYSA9IHRydWU7XG5cbiAgICB9IGVsc2Uge1xuXG4gICAgICAgIHBsYWNlaG9sZGVyID0gJC5mbi5wbGFjZWhvbGRlciA9IGZ1bmN0aW9uKG9wdGlvbnMpIHtcblxuICAgICAgICAgICAgdmFyIGRlZmF1bHRzID0ge2N1c3RvbUNsYXNzOiAncGxhY2Vob2xkZXInfTtcbiAgICAgICAgICAgIHNldHRpbmdzID0gJC5leHRlbmQoe30sIGRlZmF1bHRzLCBvcHRpb25zKTtcblxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZmlsdGVyKChpc0lucHV0U3VwcG9ydGVkID8gJ3RleHRhcmVhJyA6ICc6aW5wdXQnKSArICdbJyArIChkZWJ1Z01vZGUgPyAncGxhY2Vob2xkZXIteCcgOiAncGxhY2Vob2xkZXInKSArICddJylcbiAgICAgICAgICAgICAgICAubm90KCcuJytzZXR0aW5ncy5jdXN0b21DbGFzcylcbiAgICAgICAgICAgICAgICAubm90KCc6cmFkaW8sIDpjaGVja2JveCwgW3R5cGU9aGlkZGVuXScpXG4gICAgICAgICAgICAgICAgLmJpbmQoe1xuICAgICAgICAgICAgICAgICAgICAnZm9jdXMucGxhY2Vob2xkZXInOiBjbGVhclBsYWNlaG9sZGVyLFxuICAgICAgICAgICAgICAgICAgICAnYmx1ci5wbGFjZWhvbGRlcic6IHNldFBsYWNlaG9sZGVyXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuZGF0YSgncGxhY2Vob2xkZXItZW5hYmxlZCcsIHRydWUpXG4gICAgICAgICAgICAgICAgLnRyaWdnZXIoJ2JsdXIucGxhY2Vob2xkZXInKTtcbiAgICAgICAgfTtcblxuICAgICAgICBwbGFjZWhvbGRlci5pbnB1dCA9IGlzSW5wdXRTdXBwb3J0ZWQ7XG4gICAgICAgIHBsYWNlaG9sZGVyLnRleHRhcmVhID0gaXNUZXh0YXJlYVN1cHBvcnRlZDtcblxuICAgICAgICBob29rcyA9IHtcbiAgICAgICAgICAgICdnZXQnOiBmdW5jdGlvbihlbGVtZW50KSB7XG5cbiAgICAgICAgICAgICAgICB2YXIgJGVsZW1lbnQgPSAkKGVsZW1lbnQpO1xuICAgICAgICAgICAgICAgIHZhciAkcGFzc3dvcmRJbnB1dCA9ICRlbGVtZW50LmRhdGEoJ3BsYWNlaG9sZGVyLXBhc3N3b3JkJyk7XG5cbiAgICAgICAgICAgICAgICBpZiAoJHBhc3N3b3JkSW5wdXQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICRwYXNzd29yZElucHV0WzBdLnZhbHVlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiAkZWxlbWVudC5kYXRhKCdwbGFjZWhvbGRlci1lbmFibGVkJykgJiYgJGVsZW1lbnQuaGFzQ2xhc3Moc2V0dGluZ3MuY3VzdG9tQ2xhc3MpID8gJycgOiBlbGVtZW50LnZhbHVlO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICdzZXQnOiBmdW5jdGlvbihlbGVtZW50LCB2YWx1ZSkge1xuXG4gICAgICAgICAgICAgICAgdmFyICRlbGVtZW50ID0gJChlbGVtZW50KTtcbiAgICAgICAgICAgICAgICB2YXIgJHJlcGxhY2VtZW50O1xuICAgICAgICAgICAgICAgIHZhciAkcGFzc3dvcmRJbnB1dDtcblxuICAgICAgICAgICAgICAgIGlmICh2YWx1ZSAhPT0gJycpIHtcblxuICAgICAgICAgICAgICAgICAgICAkcmVwbGFjZW1lbnQgPSAkZWxlbWVudC5kYXRhKCdwbGFjZWhvbGRlci10ZXh0aW5wdXQnKTtcbiAgICAgICAgICAgICAgICAgICAgJHBhc3N3b3JkSW5wdXQgPSAkZWxlbWVudC5kYXRhKCdwbGFjZWhvbGRlci1wYXNzd29yZCcpO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmICgkcmVwbGFjZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFyUGxhY2Vob2xkZXIuY2FsbCgkcmVwbGFjZW1lbnRbMF0sIHRydWUsIHZhbHVlKSB8fCAoZWxlbWVudC52YWx1ZSA9IHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICRyZXBsYWNlbWVudFswXS52YWx1ZSA9IHZhbHVlO1xuXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoJHBhc3N3b3JkSW5wdXQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFyUGxhY2Vob2xkZXIuY2FsbChlbGVtZW50LCB0cnVlLCB2YWx1ZSkgfHwgKCRwYXNzd29yZElucHV0WzBdLnZhbHVlID0gdmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC52YWx1ZSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKCEkZWxlbWVudC5kYXRhKCdwbGFjZWhvbGRlci1lbmFibGVkJykpIHtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC52YWx1ZSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJGVsZW1lbnQ7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlID09PSAnJykge1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC52YWx1ZSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgLy8gU2V0dGluZyB0aGUgcGxhY2Vob2xkZXIgY2F1c2VzIHByb2JsZW1zIGlmIHRoZSBlbGVtZW50IGNvbnRpbnVlcyB0byBoYXZlIGZvY3VzLlxuICAgICAgICAgICAgICAgICAgICBpZiAoZWxlbWVudCAhPSBzYWZlQWN0aXZlRWxlbWVudCgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBXZSBjYW4ndCB1c2UgYHRyaWdnZXJIYW5kbGVyYCBoZXJlIGJlY2F1c2Ugb2YgZHVtbXkgdGV4dC9wYXNzd29yZCBpbnB1dHMgOihcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFBsYWNlaG9sZGVyLmNhbGwoZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBpZiAoJGVsZW1lbnQuaGFzQ2xhc3Moc2V0dGluZ3MuY3VzdG9tQ2xhc3MpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGVhclBsYWNlaG9sZGVyLmNhbGwoZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnZhbHVlID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIGBzZXRgIGNhbiBub3QgcmV0dXJuIGB1bmRlZmluZWRgOyBzZWUgaHR0cDovL2pzYXBpLmluZm8vanF1ZXJ5LzEuNy4xL3ZhbCNMMjM2M1xuICAgICAgICAgICAgICAgIHJldHVybiAkZWxlbWVudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICBpZiAoIWlzSW5wdXRTdXBwb3J0ZWQpIHtcbiAgICAgICAgICAgIHZhbEhvb2tzLmlucHV0ID0gaG9va3M7XG4gICAgICAgICAgICBwcm9wSG9va3MudmFsdWUgPSBob29rcztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghaXNUZXh0YXJlYVN1cHBvcnRlZCkge1xuICAgICAgICAgICAgdmFsSG9va3MudGV4dGFyZWEgPSBob29rcztcbiAgICAgICAgICAgIHByb3BIb29rcy52YWx1ZSA9IGhvb2tzO1xuICAgICAgICB9XG5cbiAgICAgICAgJChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIC8vIExvb2sgZm9yIGZvcm1zXG4gICAgICAgICAgICAkKGRvY3VtZW50KS5kZWxlZ2F0ZSgnZm9ybScsICdzdWJtaXQucGxhY2Vob2xkZXInLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAvLyBDbGVhciB0aGUgcGxhY2Vob2xkZXIgdmFsdWVzIHNvIHRoZXkgZG9uJ3QgZ2V0IHN1Ym1pdHRlZFxuICAgICAgICAgICAgICAgIHZhciAkaW5wdXRzID0gJCgnLicrc2V0dGluZ3MuY3VzdG9tQ2xhc3MsIHRoaXMpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIGNsZWFyUGxhY2Vob2xkZXIuY2FsbCh0aGlzLCB0cnVlLCAnJyk7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAkaW5wdXRzLmVhY2goc2V0UGxhY2Vob2xkZXIpO1xuICAgICAgICAgICAgICAgIH0sIDEwKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBDbGVhciBwbGFjZWhvbGRlciB2YWx1ZXMgdXBvbiBwYWdlIHJlbG9hZFxuICAgICAgICAkKHdpbmRvdykuYmluZCgnYmVmb3JldW5sb2FkLnBsYWNlaG9sZGVyJywgZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgICAgIHZhciBjbGVhclBsYWNlaG9sZGVycyA9IHRydWU7XG5cbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgLy8gUHJldmVudCBJRSBqYXZhc2NyaXB0OnZvaWQoMCkgYW5jaG9ycyBmcm9tIGNhdXNpbmcgY2xlYXJlZCB2YWx1ZXNcbiAgICAgICAgICAgICAgICBpZiAoZG9jdW1lbnQuYWN0aXZlRWxlbWVudC50b1N0cmluZygpID09PSAnamF2YXNjcmlwdDp2b2lkKDApJykge1xuICAgICAgICAgICAgICAgICAgICBjbGVhclBsYWNlaG9sZGVycyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gY2F0Y2ggKGV4Y2VwdGlvbikgeyB9XG5cbiAgICAgICAgICAgIGlmIChjbGVhclBsYWNlaG9sZGVycykge1xuICAgICAgICAgICAgICAgICQoJy4nK3NldHRpbmdzLmN1c3RvbUNsYXNzKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnZhbHVlID0gJyc7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGFyZ3MoZWxlbSkge1xuICAgICAgICAvLyBSZXR1cm4gYW4gb2JqZWN0IG9mIGVsZW1lbnQgYXR0cmlidXRlc1xuICAgICAgICB2YXIgbmV3QXR0cnMgPSB7fTtcbiAgICAgICAgdmFyIHJpbmxpbmVqUXVlcnkgPSAvXmpRdWVyeVxcZCskLztcblxuICAgICAgICAkLmVhY2goZWxlbS5hdHRyaWJ1dGVzLCBmdW5jdGlvbihpLCBhdHRyKSB7XG4gICAgICAgICAgICBpZiAoYXR0ci5zcGVjaWZpZWQgJiYgIXJpbmxpbmVqUXVlcnkudGVzdChhdHRyLm5hbWUpKSB7XG4gICAgICAgICAgICAgICAgbmV3QXR0cnNbYXR0ci5uYW1lXSA9IGF0dHIudmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBuZXdBdHRycztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjbGVhclBsYWNlaG9sZGVyKGV2ZW50LCB2YWx1ZSkge1xuICAgICAgICBcbiAgICAgICAgdmFyIGlucHV0ID0gdGhpcztcbiAgICAgICAgdmFyICRpbnB1dCA9ICQodGhpcyk7XG4gICAgICAgIFxuICAgICAgICBpZiAoaW5wdXQudmFsdWUgPT09ICRpbnB1dC5hdHRyKChkZWJ1Z01vZGUgPyAncGxhY2Vob2xkZXIteCcgOiAncGxhY2Vob2xkZXInKSkgJiYgJGlucHV0Lmhhc0NsYXNzKHNldHRpbmdzLmN1c3RvbUNsYXNzKSkge1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpbnB1dC52YWx1ZSA9ICcnO1xuICAgICAgICAgICAgJGlucHV0LnJlbW92ZUNsYXNzKHNldHRpbmdzLmN1c3RvbUNsYXNzKTtcblxuICAgICAgICAgICAgaWYgKCRpbnB1dC5kYXRhKCdwbGFjZWhvbGRlci1wYXNzd29yZCcpKSB7XG5cbiAgICAgICAgICAgICAgICAkaW5wdXQgPSAkaW5wdXQuaGlkZSgpLm5leHRBbGwoJ2lucHV0W3R5cGU9XCJwYXNzd29yZFwiXTpmaXJzdCcpLnNob3coKS5hdHRyKCdpZCcsICRpbnB1dC5yZW1vdmVBdHRyKCdpZCcpLmRhdGEoJ3BsYWNlaG9sZGVyLWlkJykpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC8vIElmIGBjbGVhclBsYWNlaG9sZGVyYCB3YXMgY2FsbGVkIGZyb20gYCQudmFsSG9va3MuaW5wdXQuc2V0YFxuICAgICAgICAgICAgICAgIGlmIChldmVudCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICAkaW5wdXRbMF0udmFsdWUgPSB2YWx1ZTtcblxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgJGlucHV0LmZvY3VzKCk7XG5cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaW5wdXQgPT0gc2FmZUFjdGl2ZUVsZW1lbnQoKSAmJiBpbnB1dC5zZWxlY3QoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNldFBsYWNlaG9sZGVyKGV2ZW50KSB7XG4gICAgICAgIHZhciAkcmVwbGFjZW1lbnQ7XG4gICAgICAgIHZhciBpbnB1dCA9IHRoaXM7XG4gICAgICAgIHZhciAkaW5wdXQgPSAkKHRoaXMpO1xuICAgICAgICB2YXIgaWQgPSBpbnB1dC5pZDtcblxuICAgICAgICAvLyBJZiB0aGUgcGxhY2Vob2xkZXIgaXMgYWN0aXZhdGVkLCB0cmlnZ2VyaW5nIGJsdXIgZXZlbnQgKGAkaW5wdXQudHJpZ2dlcignYmx1cicpYCkgc2hvdWxkIGRvIG5vdGhpbmcuXG4gICAgICAgIGlmIChldmVudCAmJiBldmVudC50eXBlID09PSAnYmx1cicgJiYgJGlucHV0Lmhhc0NsYXNzKHNldHRpbmdzLmN1c3RvbUNsYXNzKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGlucHV0LnZhbHVlID09PSAnJykge1xuICAgICAgICAgICAgaWYgKGlucHV0LnR5cGUgPT09ICdwYXNzd29yZCcpIHtcbiAgICAgICAgICAgICAgICBpZiAoISRpbnB1dC5kYXRhKCdwbGFjZWhvbGRlci10ZXh0aW5wdXQnKSkge1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICRyZXBsYWNlbWVudCA9ICRpbnB1dC5jbG9uZSgpLnByb3AoeyAndHlwZSc6ICd0ZXh0JyB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSBjYXRjaChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkcmVwbGFjZW1lbnQgPSAkKCc8aW5wdXQ+JykuYXR0cigkLmV4dGVuZChhcmdzKHRoaXMpLCB7ICd0eXBlJzogJ3RleHQnIH0pKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICRyZXBsYWNlbWVudFxuICAgICAgICAgICAgICAgICAgICAgICAgLnJlbW92ZUF0dHIoJ25hbWUnKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmRhdGEoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdwbGFjZWhvbGRlci1lbmFibGVkJzogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAncGxhY2Vob2xkZXItcGFzc3dvcmQnOiAkaW5wdXQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3BsYWNlaG9sZGVyLWlkJzogaWRcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAuYmluZCgnZm9jdXMucGxhY2Vob2xkZXInLCBjbGVhclBsYWNlaG9sZGVyKTtcblxuICAgICAgICAgICAgICAgICAgICAkaW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgIC5kYXRhKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAncGxhY2Vob2xkZXItdGV4dGlucHV0JzogJHJlcGxhY2VtZW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdwbGFjZWhvbGRlci1pZCc6IGlkXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgLmJlZm9yZSgkcmVwbGFjZW1lbnQpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlucHV0LnZhbHVlID0gJyc7XG4gICAgICAgICAgICAgICAgJGlucHV0ID0gJGlucHV0LnJlbW92ZUF0dHIoJ2lkJykuaGlkZSgpLnByZXZBbGwoJ2lucHV0W3R5cGU9XCJ0ZXh0XCJdOmZpcnN0JykuYXR0cignaWQnLCAkaW5wdXQuZGF0YSgncGxhY2Vob2xkZXItaWQnKSkuc2hvdygpO1xuXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHZhciAkcGFzc3dvcmRJbnB1dCA9ICRpbnB1dC5kYXRhKCdwbGFjZWhvbGRlci1wYXNzd29yZCcpO1xuXG4gICAgICAgICAgICAgICAgaWYgKCRwYXNzd29yZElucHV0KSB7XG4gICAgICAgICAgICAgICAgICAgICRwYXNzd29yZElucHV0WzBdLnZhbHVlID0gJyc7XG4gICAgICAgICAgICAgICAgICAgICRpbnB1dC5hdHRyKCdpZCcsICRpbnB1dC5kYXRhKCdwbGFjZWhvbGRlci1pZCcpKS5zaG93KCkubmV4dEFsbCgnaW5wdXRbdHlwZT1cInBhc3N3b3JkXCJdOmxhc3QnKS5oaWRlKCkucmVtb3ZlQXR0cignaWQnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICRpbnB1dC5hZGRDbGFzcyhzZXR0aW5ncy5jdXN0b21DbGFzcyk7XG4gICAgICAgICAgICAkaW5wdXRbMF0udmFsdWUgPSAkaW5wdXQuYXR0cigoZGVidWdNb2RlID8gJ3BsYWNlaG9sZGVyLXgnIDogJ3BsYWNlaG9sZGVyJykpO1xuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkaW5wdXQucmVtb3ZlQ2xhc3Moc2V0dGluZ3MuY3VzdG9tQ2xhc3MpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2FmZUFjdGl2ZUVsZW1lbnQoKSB7XG4gICAgICAgIC8vIEF2b2lkIElFOSBgZG9jdW1lbnQuYWN0aXZlRWxlbWVudGAgb2YgZGVhdGhcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJldHVybiBkb2N1bWVudC5hY3RpdmVFbGVtZW50O1xuICAgICAgICB9IGNhdGNoIChleGNlcHRpb24pIHt9XG4gICAgfVxufSkpO1xuIl0sIm5hbWVzIjpbImZhY3RvcnkiLCJkZWZpbmUiLCJhbWQiLCJtb2R1bGUiLCJfdHlwZW9mIiwiZXhwb3J0cyIsInJlcXVpcmUiLCJqUXVlcnkiLCIkIiwiZGVidWdNb2RlIiwiaXNPcGVyYU1pbmkiLCJPYmplY3QiLCJwcm90b3R5cGUiLCJ0b1N0cmluZyIsImNhbGwiLCJ3aW5kb3ciLCJvcGVyYW1pbmkiLCJpc0lucHV0U3VwcG9ydGVkIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiaXNUZXh0YXJlYVN1cHBvcnRlZCIsInZhbEhvb2tzIiwicHJvcEhvb2tzIiwiaG9va3MiLCJwbGFjZWhvbGRlciIsInNldHRpbmdzIiwiZm4iLCJpbnB1dCIsInRleHRhcmVhIiwib3B0aW9ucyIsImRlZmF1bHRzIiwiY3VzdG9tQ2xhc3MiLCJleHRlbmQiLCJmaWx0ZXIiLCJub3QiLCJiaW5kIiwiY2xlYXJQbGFjZWhvbGRlciIsInNldFBsYWNlaG9sZGVyIiwiZGF0YSIsInRyaWdnZXIiLCJnZXQiLCJlbGVtZW50IiwiJGVsZW1lbnQiLCIkcGFzc3dvcmRJbnB1dCIsInZhbHVlIiwiaGFzQ2xhc3MiLCJzZXQiLCIkcmVwbGFjZW1lbnQiLCJzYWZlQWN0aXZlRWxlbWVudCIsImRlbGVnYXRlIiwiJGlucHV0cyIsImVhY2giLCJzZXRUaW1lb3V0IiwiY2xlYXJQbGFjZWhvbGRlcnMiLCJhY3RpdmVFbGVtZW50IiwiZXhjZXB0aW9uIiwiYXJncyIsImVsZW0iLCJuZXdBdHRycyIsInJpbmxpbmVqUXVlcnkiLCJhdHRyaWJ1dGVzIiwiaSIsImF0dHIiLCJzcGVjaWZpZWQiLCJ0ZXN0IiwibmFtZSIsImV2ZW50IiwiJGlucHV0IiwicmVtb3ZlQ2xhc3MiLCJoaWRlIiwibmV4dEFsbCIsInNob3ciLCJyZW1vdmVBdHRyIiwiZm9jdXMiLCJzZWxlY3QiLCJpZCIsInR5cGUiLCJjbG9uZSIsInByb3AiLCJlIiwiYmVmb3JlIiwicHJldkFsbCIsImFkZENsYXNzIl0sInNvdXJjZVJvb3QiOiIifQ==