(self["webpackChunk"] = self["webpackChunk"] || []).push([["js/bootstrap"],{

/***/ "./assets/css/portoadmin/vendor/bootstrap/js/bootstrap.js":
/*!****************************************************************!*\
  !*** ./assets/css/portoadmin/vendor/bootstrap/js/bootstrap.js ***!
  \****************************************************************/
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;__webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
__webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
__webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
__webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
__webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
__webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");
__webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
__webpack_require__(/*! core-js/modules/es.array.index-of.js */ "./node_modules/core-js/modules/es.array.index-of.js");
__webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
__webpack_require__(/*! core-js/modules/es.array.join.js */ "./node_modules/core-js/modules/es.array.join.js");
__webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
__webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
__webpack_require__(/*! core-js/modules/es.array.sort.js */ "./node_modules/core-js/modules/es.array.sort.js");
__webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
__webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
__webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
__webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
__webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptor.js");
__webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
__webpack_require__(/*! core-js/modules/es.parse-float.js */ "./node_modules/core-js/modules/es.parse-float.js");
__webpack_require__(/*! core-js/modules/es.parse-int.js */ "./node_modules/core-js/modules/es.parse-int.js");
__webpack_require__(/*! core-js/modules/es.regexp.constructor.js */ "./node_modules/core-js/modules/es.regexp.constructor.js");
__webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
__webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
__webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
__webpack_require__(/*! core-js/modules/es.string.match.js */ "./node_modules/core-js/modules/es.string.match.js");
__webpack_require__(/*! core-js/modules/es.string.trim.js */ "./node_modules/core-js/modules/es.string.trim.js");
__webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
__webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
__webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
/*!
  * Bootstrap v4.3.1 (https://getbootstrap.com/)
  * Copyright 2011-2019 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
  */
(function (global, factory) {
  ( false ? 0 : _typeof(exports)) === 'object' && "object" !== 'undefined' ? factory(exports, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js"), __webpack_require__(/*! popper.js */ "./node_modules/popper.js/dist/esm/popper.js")) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js"), __webpack_require__(/*! popper.js */ "./node_modules/popper.js/dist/esm/popper.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : (0);
})(this, function (exports, $, Popper) {
  'use strict';

  $ = $ && $.hasOwnProperty('default') ? $['default'] : $;
  Popper = Popper && Popper.hasOwnProperty('default') ? Popper['default'] : Popper;
  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }
  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }
    return obj;
  }
  function _objectSpread(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};
      var ownKeys = Object.keys(source);
      if (typeof Object.getOwnPropertySymbols === 'function') {
        ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
          return Object.getOwnPropertyDescriptor(source, sym).enumerable;
        }));
      }
      ownKeys.forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    }
    return target;
  }
  function _inheritsLoose(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
    subClass.__proto__ = superClass;
  }

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v4.3.1): util.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
   * --------------------------------------------------------------------------
   */
  /**
   * ------------------------------------------------------------------------
   * Private TransitionEnd Helpers
   * ------------------------------------------------------------------------
   */

  var TRANSITION_END = 'transitionend';
  var MAX_UID = 1000000;
  var MILLISECONDS_MULTIPLIER = 1000; // Shoutout AngusCroll (https://goo.gl/pxwQGp)

  function toType(obj) {
    return {}.toString.call(obj).match(/\s([a-z]+)/i)[1].toLowerCase();
  }
  function getSpecialTransitionEndEvent() {
    return {
      bindType: TRANSITION_END,
      delegateType: TRANSITION_END,
      handle: function handle(event) {
        if ($(event.target).is(this)) {
          return event.handleObj.handler.apply(this, arguments); // eslint-disable-line prefer-rest-params
        }
        return undefined; // eslint-disable-line no-undefined
      }
    };
  }
  function transitionEndEmulator(duration) {
    var _this = this;
    var called = false;
    $(this).one(Util.TRANSITION_END, function () {
      called = true;
    });
    setTimeout(function () {
      if (!called) {
        Util.triggerTransitionEnd(_this);
      }
    }, duration);
    return this;
  }
  function setTransitionEndSupport() {
    $.fn.emulateTransitionEnd = transitionEndEmulator;
    $.event.special[Util.TRANSITION_END] = getSpecialTransitionEndEvent();
  }
  /**
   * --------------------------------------------------------------------------
   * Public Util Api
   * --------------------------------------------------------------------------
   */

  var Util = {
    TRANSITION_END: 'bsTransitionEnd',
    getUID: function getUID(prefix) {
      do {
        // eslint-disable-next-line no-bitwise
        prefix += ~~(Math.random() * MAX_UID); // "~~" acts like a faster Math.floor() here
      } while (document.getElementById(prefix));
      return prefix;
    },
    getSelectorFromElement: function getSelectorFromElement(element) {
      var selector = element.getAttribute('data-target');
      if (!selector || selector === '#') {
        var hrefAttr = element.getAttribute('href');
        selector = hrefAttr && hrefAttr !== '#' ? hrefAttr.trim() : '';
      }
      try {
        return document.querySelector(selector) ? selector : null;
      } catch (err) {
        return null;
      }
    },
    getTransitionDurationFromElement: function getTransitionDurationFromElement(element) {
      if (!element) {
        return 0;
      } // Get transition-duration of the element

      var transitionDuration = $(element).css('transition-duration');
      var transitionDelay = $(element).css('transition-delay');
      var floatTransitionDuration = parseFloat(transitionDuration);
      var floatTransitionDelay = parseFloat(transitionDelay); // Return 0 if element or transition duration is not found

      if (!floatTransitionDuration && !floatTransitionDelay) {
        return 0;
      } // If multiple durations are defined, take the first

      transitionDuration = transitionDuration.split(',')[0];
      transitionDelay = transitionDelay.split(',')[0];
      return (parseFloat(transitionDuration) + parseFloat(transitionDelay)) * MILLISECONDS_MULTIPLIER;
    },
    reflow: function reflow(element) {
      return element.offsetHeight;
    },
    triggerTransitionEnd: function triggerTransitionEnd(element) {
      $(element).trigger(TRANSITION_END);
    },
    // TODO: Remove in v5
    supportsTransitionEnd: function supportsTransitionEnd() {
      return Boolean(TRANSITION_END);
    },
    isElement: function isElement(obj) {
      return (obj[0] || obj).nodeType;
    },
    typeCheckConfig: function typeCheckConfig(componentName, config, configTypes) {
      for (var property in configTypes) {
        if (Object.prototype.hasOwnProperty.call(configTypes, property)) {
          var expectedTypes = configTypes[property];
          var value = config[property];
          var valueType = value && Util.isElement(value) ? 'element' : toType(value);
          if (!new RegExp(expectedTypes).test(valueType)) {
            throw new Error(componentName.toUpperCase() + ": " + ("Option \"" + property + "\" provided type \"" + valueType + "\" ") + ("but expected type \"" + expectedTypes + "\"."));
          }
        }
      }
    },
    findShadowRoot: function findShadowRoot(element) {
      if (!document.documentElement.attachShadow) {
        return null;
      } // Can find the shadow root otherwise it'll return the document

      if (typeof element.getRootNode === 'function') {
        var root = element.getRootNode();
        return root instanceof ShadowRoot ? root : null;
      }
      if (element instanceof ShadowRoot) {
        return element;
      } // when we don't find a shadow root

      if (!element.parentNode) {
        return null;
      }
      return Util.findShadowRoot(element.parentNode);
    }
  };
  setTransitionEndSupport();

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME = 'alert';
  var VERSION = '4.3.1';
  var DATA_KEY = 'bs.alert';
  var EVENT_KEY = "." + DATA_KEY;
  var DATA_API_KEY = '.data-api';
  var JQUERY_NO_CONFLICT = $.fn[NAME];
  var Selector = {
    DISMISS: '[data-dismiss="alert"]'
  };
  var Event = {
    CLOSE: "close" + EVENT_KEY,
    CLOSED: "closed" + EVENT_KEY,
    CLICK_DATA_API: "click" + EVENT_KEY + DATA_API_KEY
  };
  var ClassName = {
    ALERT: 'alert',
    FADE: 'fade',
    SHOW: 'show'
    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */
  };
  var Alert = /*#__PURE__*/
  function () {
    function Alert(element) {
      this._element = element;
    } // Getters

    var _proto = Alert.prototype;

    // Public
    _proto.close = function close(element) {
      var rootElement = this._element;
      if (element) {
        rootElement = this._getRootElement(element);
      }
      var customEvent = this._triggerCloseEvent(rootElement);
      if (customEvent.isDefaultPrevented()) {
        return;
      }
      this._removeElement(rootElement);
    };
    _proto.dispose = function dispose() {
      $.removeData(this._element, DATA_KEY);
      this._element = null;
    } // Private
    ;
    _proto._getRootElement = function _getRootElement(element) {
      var selector = Util.getSelectorFromElement(element);
      var parent = false;
      if (selector) {
        parent = document.querySelector(selector);
      }
      if (!parent) {
        parent = $(element).closest("." + ClassName.ALERT)[0];
      }
      return parent;
    };
    _proto._triggerCloseEvent = function _triggerCloseEvent(element) {
      var closeEvent = $.Event(Event.CLOSE);
      $(element).trigger(closeEvent);
      return closeEvent;
    };
    _proto._removeElement = function _removeElement(element) {
      var _this = this;
      $(element).removeClass(ClassName.SHOW);
      if (!$(element).hasClass(ClassName.FADE)) {
        this._destroyElement(element);
        return;
      }
      var transitionDuration = Util.getTransitionDurationFromElement(element);
      $(element).one(Util.TRANSITION_END, function (event) {
        return _this._destroyElement(element, event);
      }).emulateTransitionEnd(transitionDuration);
    };
    _proto._destroyElement = function _destroyElement(element) {
      $(element).detach().trigger(Event.CLOSED).remove();
    } // Static
    ;
    Alert._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var $element = $(this);
        var data = $element.data(DATA_KEY);
        if (!data) {
          data = new Alert(this);
          $element.data(DATA_KEY, data);
        }
        if (config === 'close') {
          data[config](this);
        }
      });
    };
    Alert._handleDismiss = function _handleDismiss(alertInstance) {
      return function (event) {
        if (event) {
          event.preventDefault();
        }
        alertInstance.close(this);
      };
    };
    _createClass(Alert, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION;
      }
    }]);
    return Alert;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */

  $(document).on(Event.CLICK_DATA_API, Selector.DISMISS, Alert._handleDismiss(new Alert()));
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME] = Alert._jQueryInterface;
  $.fn[NAME].Constructor = Alert;
  $.fn[NAME].noConflict = function () {
    $.fn[NAME] = JQUERY_NO_CONFLICT;
    return Alert._jQueryInterface;
  };

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME$1 = 'button';
  var VERSION$1 = '4.3.1';
  var DATA_KEY$1 = 'bs.button';
  var EVENT_KEY$1 = "." + DATA_KEY$1;
  var DATA_API_KEY$1 = '.data-api';
  var JQUERY_NO_CONFLICT$1 = $.fn[NAME$1];
  var ClassName$1 = {
    ACTIVE: 'active',
    BUTTON: 'btn',
    FOCUS: 'focus'
  };
  var Selector$1 = {
    DATA_TOGGLE_CARROT: '[data-toggle^="button"]',
    DATA_TOGGLE: '[data-toggle="buttons"]',
    INPUT: 'input:not([type="hidden"])',
    ACTIVE: '.active',
    BUTTON: '.btn'
  };
  var Event$1 = {
    CLICK_DATA_API: "click" + EVENT_KEY$1 + DATA_API_KEY$1,
    FOCUS_BLUR_DATA_API: "focus" + EVENT_KEY$1 + DATA_API_KEY$1 + " " + ("blur" + EVENT_KEY$1 + DATA_API_KEY$1)
    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */
  };
  var Button = /*#__PURE__*/
  function () {
    function Button(element) {
      this._element = element;
    } // Getters

    var _proto = Button.prototype;

    // Public
    _proto.toggle = function toggle() {
      var triggerChangeEvent = true;
      var addAriaPressed = true;
      var rootElement = $(this._element).closest(Selector$1.DATA_TOGGLE)[0];
      if (rootElement) {
        var input = this._element.querySelector(Selector$1.INPUT);
        if (input) {
          if (input.type === 'radio') {
            if (input.checked && this._element.classList.contains(ClassName$1.ACTIVE)) {
              triggerChangeEvent = false;
            } else {
              var activeElement = rootElement.querySelector(Selector$1.ACTIVE);
              if (activeElement) {
                $(activeElement).removeClass(ClassName$1.ACTIVE);
              }
            }
          }
          if (triggerChangeEvent) {
            if (input.hasAttribute('disabled') || rootElement.hasAttribute('disabled') || input.classList.contains('disabled') || rootElement.classList.contains('disabled')) {
              return;
            }
            input.checked = !this._element.classList.contains(ClassName$1.ACTIVE);
            $(input).trigger('change');
          }
          input.focus();
          addAriaPressed = false;
        }
      }
      if (addAriaPressed) {
        this._element.setAttribute('aria-pressed', !this._element.classList.contains(ClassName$1.ACTIVE));
      }
      if (triggerChangeEvent) {
        $(this._element).toggleClass(ClassName$1.ACTIVE);
      }
    };
    _proto.dispose = function dispose() {
      $.removeData(this._element, DATA_KEY$1);
      this._element = null;
    } // Static
    ;
    Button._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var data = $(this).data(DATA_KEY$1);
        if (!data) {
          data = new Button(this);
          $(this).data(DATA_KEY$1, data);
        }
        if (config === 'toggle') {
          data[config]();
        }
      });
    };
    _createClass(Button, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$1;
      }
    }]);
    return Button;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */

  $(document).on(Event$1.CLICK_DATA_API, Selector$1.DATA_TOGGLE_CARROT, function (event) {
    event.preventDefault();
    var button = event.target;
    if (!$(button).hasClass(ClassName$1.BUTTON)) {
      button = $(button).closest(Selector$1.BUTTON);
    }
    Button._jQueryInterface.call($(button), 'toggle');
  }).on(Event$1.FOCUS_BLUR_DATA_API, Selector$1.DATA_TOGGLE_CARROT, function (event) {
    var button = $(event.target).closest(Selector$1.BUTTON)[0];
    $(button).toggleClass(ClassName$1.FOCUS, /^focus(in)?$/.test(event.type));
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME$1] = Button._jQueryInterface;
  $.fn[NAME$1].Constructor = Button;
  $.fn[NAME$1].noConflict = function () {
    $.fn[NAME$1] = JQUERY_NO_CONFLICT$1;
    return Button._jQueryInterface;
  };

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME$2 = 'carousel';
  var VERSION$2 = '4.3.1';
  var DATA_KEY$2 = 'bs.carousel';
  var EVENT_KEY$2 = "." + DATA_KEY$2;
  var DATA_API_KEY$2 = '.data-api';
  var JQUERY_NO_CONFLICT$2 = $.fn[NAME$2];
  var ARROW_LEFT_KEYCODE = 37; // KeyboardEvent.which value for left arrow key

  var ARROW_RIGHT_KEYCODE = 39; // KeyboardEvent.which value for right arrow key

  var TOUCHEVENT_COMPAT_WAIT = 500; // Time for mouse compat events to fire after touch

  var SWIPE_THRESHOLD = 40;
  var Default = {
    interval: 5000,
    keyboard: true,
    slide: false,
    pause: 'hover',
    wrap: true,
    touch: true
  };
  var DefaultType = {
    interval: '(number|boolean)',
    keyboard: 'boolean',
    slide: '(boolean|string)',
    pause: '(string|boolean)',
    wrap: 'boolean',
    touch: 'boolean'
  };
  var Direction = {
    NEXT: 'next',
    PREV: 'prev',
    LEFT: 'left',
    RIGHT: 'right'
  };
  var Event$2 = {
    SLIDE: "slide" + EVENT_KEY$2,
    SLID: "slid" + EVENT_KEY$2,
    KEYDOWN: "keydown" + EVENT_KEY$2,
    MOUSEENTER: "mouseenter" + EVENT_KEY$2,
    MOUSELEAVE: "mouseleave" + EVENT_KEY$2,
    TOUCHSTART: "touchstart" + EVENT_KEY$2,
    TOUCHMOVE: "touchmove" + EVENT_KEY$2,
    TOUCHEND: "touchend" + EVENT_KEY$2,
    POINTERDOWN: "pointerdown" + EVENT_KEY$2,
    POINTERUP: "pointerup" + EVENT_KEY$2,
    DRAG_START: "dragstart" + EVENT_KEY$2,
    LOAD_DATA_API: "load" + EVENT_KEY$2 + DATA_API_KEY$2,
    CLICK_DATA_API: "click" + EVENT_KEY$2 + DATA_API_KEY$2
  };
  var ClassName$2 = {
    CAROUSEL: 'carousel',
    ACTIVE: 'active',
    SLIDE: 'slide',
    RIGHT: 'carousel-item-right',
    LEFT: 'carousel-item-left',
    NEXT: 'carousel-item-next',
    PREV: 'carousel-item-prev',
    ITEM: 'carousel-item',
    POINTER_EVENT: 'pointer-event'
  };
  var Selector$2 = {
    ACTIVE: '.active',
    ACTIVE_ITEM: '.active.carousel-item',
    ITEM: '.carousel-item',
    ITEM_IMG: '.carousel-item img',
    NEXT_PREV: '.carousel-item-next, .carousel-item-prev',
    INDICATORS: '.carousel-indicators',
    DATA_SLIDE: '[data-slide], [data-slide-to]',
    DATA_RIDE: '[data-ride="carousel"]'
  };
  var PointerType = {
    TOUCH: 'touch',
    PEN: 'pen'
    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */
  };
  var Carousel = /*#__PURE__*/
  function () {
    function Carousel(element, config) {
      this._items = null;
      this._interval = null;
      this._activeElement = null;
      this._isPaused = false;
      this._isSliding = false;
      this.touchTimeout = null;
      this.touchStartX = 0;
      this.touchDeltaX = 0;
      this._config = this._getConfig(config);
      this._element = element;
      this._indicatorsElement = this._element.querySelector(Selector$2.INDICATORS);
      this._touchSupported = 'ontouchstart' in document.documentElement || navigator.maxTouchPoints > 0;
      this._pointerEvent = Boolean(window.PointerEvent || window.MSPointerEvent);
      this._addEventListeners();
    } // Getters

    var _proto = Carousel.prototype;

    // Public
    _proto.next = function next() {
      if (!this._isSliding) {
        this._slide(Direction.NEXT);
      }
    };
    _proto.nextWhenVisible = function nextWhenVisible() {
      // Don't call next when the page isn't visible
      // or the carousel or its parent isn't visible
      if (!document.hidden && $(this._element).is(':visible') && $(this._element).css('visibility') !== 'hidden') {
        this.next();
      }
    };
    _proto.prev = function prev() {
      if (!this._isSliding) {
        this._slide(Direction.PREV);
      }
    };
    _proto.pause = function pause(event) {
      if (!event) {
        this._isPaused = true;
      }
      if (this._element.querySelector(Selector$2.NEXT_PREV)) {
        Util.triggerTransitionEnd(this._element);
        this.cycle(true);
      }
      clearInterval(this._interval);
      this._interval = null;
    };
    _proto.cycle = function cycle(event) {
      if (!event) {
        this._isPaused = false;
      }
      if (this._interval) {
        clearInterval(this._interval);
        this._interval = null;
      }
      if (this._config.interval && !this._isPaused) {
        this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval);
      }
    };
    _proto.to = function to(index) {
      var _this = this;
      this._activeElement = this._element.querySelector(Selector$2.ACTIVE_ITEM);
      var activeIndex = this._getItemIndex(this._activeElement);
      if (index > this._items.length - 1 || index < 0) {
        return;
      }
      if (this._isSliding) {
        $(this._element).one(Event$2.SLID, function () {
          return _this.to(index);
        });
        return;
      }
      if (activeIndex === index) {
        this.pause();
        this.cycle();
        return;
      }
      var direction = index > activeIndex ? Direction.NEXT : Direction.PREV;
      this._slide(direction, this._items[index]);
    };
    _proto.dispose = function dispose() {
      $(this._element).off(EVENT_KEY$2);
      $.removeData(this._element, DATA_KEY$2);
      this._items = null;
      this._config = null;
      this._element = null;
      this._interval = null;
      this._isPaused = null;
      this._isSliding = null;
      this._activeElement = null;
      this._indicatorsElement = null;
    } // Private
    ;
    _proto._getConfig = function _getConfig(config) {
      config = _objectSpread({}, Default, config);
      Util.typeCheckConfig(NAME$2, config, DefaultType);
      return config;
    };
    _proto._handleSwipe = function _handleSwipe() {
      var absDeltax = Math.abs(this.touchDeltaX);
      if (absDeltax <= SWIPE_THRESHOLD) {
        return;
      }
      var direction = absDeltax / this.touchDeltaX; // swipe left

      if (direction > 0) {
        this.prev();
      } // swipe right

      if (direction < 0) {
        this.next();
      }
    };
    _proto._addEventListeners = function _addEventListeners() {
      var _this2 = this;
      if (this._config.keyboard) {
        $(this._element).on(Event$2.KEYDOWN, function (event) {
          return _this2._keydown(event);
        });
      }
      if (this._config.pause === 'hover') {
        $(this._element).on(Event$2.MOUSEENTER, function (event) {
          return _this2.pause(event);
        }).on(Event$2.MOUSELEAVE, function (event) {
          return _this2.cycle(event);
        });
      }
      if (this._config.touch) {
        this._addTouchEventListeners();
      }
    };
    _proto._addTouchEventListeners = function _addTouchEventListeners() {
      var _this3 = this;
      if (!this._touchSupported) {
        return;
      }
      var start = function start(event) {
        if (_this3._pointerEvent && PointerType[event.originalEvent.pointerType.toUpperCase()]) {
          _this3.touchStartX = event.originalEvent.clientX;
        } else if (!_this3._pointerEvent) {
          _this3.touchStartX = event.originalEvent.touches[0].clientX;
        }
      };
      var move = function move(event) {
        // ensure swiping with one touch and not pinching
        if (event.originalEvent.touches && event.originalEvent.touches.length > 1) {
          _this3.touchDeltaX = 0;
        } else {
          _this3.touchDeltaX = event.originalEvent.touches[0].clientX - _this3.touchStartX;
        }
      };
      var end = function end(event) {
        if (_this3._pointerEvent && PointerType[event.originalEvent.pointerType.toUpperCase()]) {
          _this3.touchDeltaX = event.originalEvent.clientX - _this3.touchStartX;
        }
        _this3._handleSwipe();
        if (_this3._config.pause === 'hover') {
          // If it's a touch-enabled device, mouseenter/leave are fired as
          // part of the mouse compatibility events on first tap - the carousel
          // would stop cycling until user tapped out of it;
          // here, we listen for touchend, explicitly pause the carousel
          // (as if it's the second time we tap on it, mouseenter compat event
          // is NOT fired) and after a timeout (to allow for mouse compatibility
          // events to fire) we explicitly restart cycling
          _this3.pause();
          if (_this3.touchTimeout) {
            clearTimeout(_this3.touchTimeout);
          }
          _this3.touchTimeout = setTimeout(function (event) {
            return _this3.cycle(event);
          }, TOUCHEVENT_COMPAT_WAIT + _this3._config.interval);
        }
      };
      $(this._element.querySelectorAll(Selector$2.ITEM_IMG)).on(Event$2.DRAG_START, function (e) {
        return e.preventDefault();
      });
      if (this._pointerEvent) {
        $(this._element).on(Event$2.POINTERDOWN, function (event) {
          return start(event);
        });
        $(this._element).on(Event$2.POINTERUP, function (event) {
          return end(event);
        });
        this._element.classList.add(ClassName$2.POINTER_EVENT);
      } else {
        $(this._element).on(Event$2.TOUCHSTART, function (event) {
          return start(event);
        });
        $(this._element).on(Event$2.TOUCHMOVE, function (event) {
          return move(event);
        });
        $(this._element).on(Event$2.TOUCHEND, function (event) {
          return end(event);
        });
      }
    };
    _proto._keydown = function _keydown(event) {
      if (/input|textarea/i.test(event.target.tagName)) {
        return;
      }
      switch (event.which) {
        case ARROW_LEFT_KEYCODE:
          event.preventDefault();
          this.prev();
          break;
        case ARROW_RIGHT_KEYCODE:
          event.preventDefault();
          this.next();
          break;
        default:
      }
    };
    _proto._getItemIndex = function _getItemIndex(element) {
      this._items = element && element.parentNode ? [].slice.call(element.parentNode.querySelectorAll(Selector$2.ITEM)) : [];
      return this._items.indexOf(element);
    };
    _proto._getItemByDirection = function _getItemByDirection(direction, activeElement) {
      var isNextDirection = direction === Direction.NEXT;
      var isPrevDirection = direction === Direction.PREV;
      var activeIndex = this._getItemIndex(activeElement);
      var lastItemIndex = this._items.length - 1;
      var isGoingToWrap = isPrevDirection && activeIndex === 0 || isNextDirection && activeIndex === lastItemIndex;
      if (isGoingToWrap && !this._config.wrap) {
        return activeElement;
      }
      var delta = direction === Direction.PREV ? -1 : 1;
      var itemIndex = (activeIndex + delta) % this._items.length;
      return itemIndex === -1 ? this._items[this._items.length - 1] : this._items[itemIndex];
    };
    _proto._triggerSlideEvent = function _triggerSlideEvent(relatedTarget, eventDirectionName) {
      var targetIndex = this._getItemIndex(relatedTarget);
      var fromIndex = this._getItemIndex(this._element.querySelector(Selector$2.ACTIVE_ITEM));
      var slideEvent = $.Event(Event$2.SLIDE, {
        relatedTarget: relatedTarget,
        direction: eventDirectionName,
        from: fromIndex,
        to: targetIndex
      });
      $(this._element).trigger(slideEvent);
      return slideEvent;
    };
    _proto._setActiveIndicatorElement = function _setActiveIndicatorElement(element) {
      if (this._indicatorsElement) {
        var indicators = [].slice.call(this._indicatorsElement.querySelectorAll(Selector$2.ACTIVE));
        $(indicators).removeClass(ClassName$2.ACTIVE);
        var nextIndicator = this._indicatorsElement.children[this._getItemIndex(element)];
        if (nextIndicator) {
          $(nextIndicator).addClass(ClassName$2.ACTIVE);
        }
      }
    };
    _proto._slide = function _slide(direction, element) {
      var _this4 = this;
      var activeElement = this._element.querySelector(Selector$2.ACTIVE_ITEM);
      var activeElementIndex = this._getItemIndex(activeElement);
      var nextElement = element || activeElement && this._getItemByDirection(direction, activeElement);
      var nextElementIndex = this._getItemIndex(nextElement);
      var isCycling = Boolean(this._interval);
      var directionalClassName;
      var orderClassName;
      var eventDirectionName;
      if (direction === Direction.NEXT) {
        directionalClassName = ClassName$2.LEFT;
        orderClassName = ClassName$2.NEXT;
        eventDirectionName = Direction.LEFT;
      } else {
        directionalClassName = ClassName$2.RIGHT;
        orderClassName = ClassName$2.PREV;
        eventDirectionName = Direction.RIGHT;
      }
      if (nextElement && $(nextElement).hasClass(ClassName$2.ACTIVE)) {
        this._isSliding = false;
        return;
      }
      var slideEvent = this._triggerSlideEvent(nextElement, eventDirectionName);
      if (slideEvent.isDefaultPrevented()) {
        return;
      }
      if (!activeElement || !nextElement) {
        // Some weirdness is happening, so we bail
        return;
      }
      this._isSliding = true;
      if (isCycling) {
        this.pause();
      }
      this._setActiveIndicatorElement(nextElement);
      var slidEvent = $.Event(Event$2.SLID, {
        relatedTarget: nextElement,
        direction: eventDirectionName,
        from: activeElementIndex,
        to: nextElementIndex
      });
      if ($(this._element).hasClass(ClassName$2.SLIDE)) {
        $(nextElement).addClass(orderClassName);
        Util.reflow(nextElement);
        $(activeElement).addClass(directionalClassName);
        $(nextElement).addClass(directionalClassName);
        var nextElementInterval = parseInt(nextElement.getAttribute('data-interval'), 10);
        if (nextElementInterval) {
          this._config.defaultInterval = this._config.defaultInterval || this._config.interval;
          this._config.interval = nextElementInterval;
        } else {
          this._config.interval = this._config.defaultInterval || this._config.interval;
        }
        var transitionDuration = Util.getTransitionDurationFromElement(activeElement);
        $(activeElement).one(Util.TRANSITION_END, function () {
          $(nextElement).removeClass(directionalClassName + " " + orderClassName).addClass(ClassName$2.ACTIVE);
          $(activeElement).removeClass(ClassName$2.ACTIVE + " " + orderClassName + " " + directionalClassName);
          _this4._isSliding = false;
          setTimeout(function () {
            return $(_this4._element).trigger(slidEvent);
          }, 0);
        }).emulateTransitionEnd(transitionDuration);
      } else {
        $(activeElement).removeClass(ClassName$2.ACTIVE);
        $(nextElement).addClass(ClassName$2.ACTIVE);
        this._isSliding = false;
        $(this._element).trigger(slidEvent);
      }
      if (isCycling) {
        this.cycle();
      }
    } // Static
    ;
    Carousel._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var data = $(this).data(DATA_KEY$2);
        var _config = _objectSpread({}, Default, $(this).data());
        if (_typeof(config) === 'object') {
          _config = _objectSpread({}, _config, config);
        }
        var action = typeof config === 'string' ? config : _config.slide;
        if (!data) {
          data = new Carousel(this, _config);
          $(this).data(DATA_KEY$2, data);
        }
        if (typeof config === 'number') {
          data.to(config);
        } else if (typeof action === 'string') {
          if (typeof data[action] === 'undefined') {
            throw new TypeError("No method named \"" + action + "\"");
          }
          data[action]();
        } else if (_config.interval && _config.ride) {
          data.pause();
          data.cycle();
        }
      });
    };
    Carousel._dataApiClickHandler = function _dataApiClickHandler(event) {
      var selector = Util.getSelectorFromElement(this);
      if (!selector) {
        return;
      }
      var target = $(selector)[0];
      if (!target || !$(target).hasClass(ClassName$2.CAROUSEL)) {
        return;
      }
      var config = _objectSpread({}, $(target).data(), $(this).data());
      var slideIndex = this.getAttribute('data-slide-to');
      if (slideIndex) {
        config.interval = false;
      }
      Carousel._jQueryInterface.call($(target), config);
      if (slideIndex) {
        $(target).data(DATA_KEY$2).to(slideIndex);
      }
      event.preventDefault();
    };
    _createClass(Carousel, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$2;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default;
      }
    }]);
    return Carousel;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */

  $(document).on(Event$2.CLICK_DATA_API, Selector$2.DATA_SLIDE, Carousel._dataApiClickHandler);
  $(window).on(Event$2.LOAD_DATA_API, function () {
    var carousels = [].slice.call(document.querySelectorAll(Selector$2.DATA_RIDE));
    for (var i = 0, len = carousels.length; i < len; i++) {
      var $carousel = $(carousels[i]);
      Carousel._jQueryInterface.call($carousel, $carousel.data());
    }
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME$2] = Carousel._jQueryInterface;
  $.fn[NAME$2].Constructor = Carousel;
  $.fn[NAME$2].noConflict = function () {
    $.fn[NAME$2] = JQUERY_NO_CONFLICT$2;
    return Carousel._jQueryInterface;
  };

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME$3 = 'collapse';
  var VERSION$3 = '4.3.1';
  var DATA_KEY$3 = 'bs.collapse';
  var EVENT_KEY$3 = "." + DATA_KEY$3;
  var DATA_API_KEY$3 = '.data-api';
  var JQUERY_NO_CONFLICT$3 = $.fn[NAME$3];
  var Default$1 = {
    toggle: true,
    parent: ''
  };
  var DefaultType$1 = {
    toggle: 'boolean',
    parent: '(string|element)'
  };
  var Event$3 = {
    SHOW: "show" + EVENT_KEY$3,
    SHOWN: "shown" + EVENT_KEY$3,
    HIDE: "hide" + EVENT_KEY$3,
    HIDDEN: "hidden" + EVENT_KEY$3,
    CLICK_DATA_API: "click" + EVENT_KEY$3 + DATA_API_KEY$3
  };
  var ClassName$3 = {
    SHOW: 'show',
    COLLAPSE: 'collapse',
    COLLAPSING: 'collapsing',
    COLLAPSED: 'collapsed'
  };
  var Dimension = {
    WIDTH: 'width',
    HEIGHT: 'height'
  };
  var Selector$3 = {
    ACTIVES: '.show, .collapsing',
    DATA_TOGGLE: '[data-toggle="collapse"]'
    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */
  };
  var Collapse = /*#__PURE__*/
  function () {
    function Collapse(element, config) {
      this._isTransitioning = false;
      this._element = element;
      this._config = this._getConfig(config);
      this._triggerArray = [].slice.call(document.querySelectorAll("[data-toggle=\"collapse\"][href=\"#" + element.id + "\"]," + ("[data-toggle=\"collapse\"][data-target=\"#" + element.id + "\"]")));
      var toggleList = [].slice.call(document.querySelectorAll(Selector$3.DATA_TOGGLE));
      for (var i = 0, len = toggleList.length; i < len; i++) {
        var elem = toggleList[i];
        var selector = Util.getSelectorFromElement(elem);
        var filterElement = [].slice.call(document.querySelectorAll(selector)).filter(function (foundElem) {
          return foundElem === element;
        });
        if (selector !== null && filterElement.length > 0) {
          this._selector = selector;
          this._triggerArray.push(elem);
        }
      }
      this._parent = this._config.parent ? this._getParent() : null;
      if (!this._config.parent) {
        this._addAriaAndCollapsedClass(this._element, this._triggerArray);
      }
      if (this._config.toggle) {
        this.toggle();
      }
    } // Getters

    var _proto = Collapse.prototype;

    // Public
    _proto.toggle = function toggle() {
      if ($(this._element).hasClass(ClassName$3.SHOW)) {
        this.hide();
      } else {
        this.show();
      }
    };
    _proto.show = function show() {
      var _this = this;
      if (this._isTransitioning || $(this._element).hasClass(ClassName$3.SHOW)) {
        return;
      }
      var actives;
      var activesData;
      if (this._parent) {
        actives = [].slice.call(this._parent.querySelectorAll(Selector$3.ACTIVES)).filter(function (elem) {
          if (typeof _this._config.parent === 'string') {
            return elem.getAttribute('data-parent') === _this._config.parent;
          }
          return elem.classList.contains(ClassName$3.COLLAPSE);
        });
        if (actives.length === 0) {
          actives = null;
        }
      }
      if (actives) {
        activesData = $(actives).not(this._selector).data(DATA_KEY$3);
        if (activesData && activesData._isTransitioning) {
          return;
        }
      }
      var startEvent = $.Event(Event$3.SHOW);
      $(this._element).trigger(startEvent);
      if (startEvent.isDefaultPrevented()) {
        return;
      }
      if (actives) {
        Collapse._jQueryInterface.call($(actives).not(this._selector), 'hide');
        if (!activesData) {
          $(actives).data(DATA_KEY$3, null);
        }
      }
      var dimension = this._getDimension();
      $(this._element).removeClass(ClassName$3.COLLAPSE).addClass(ClassName$3.COLLAPSING);
      this._element.style[dimension] = 0;
      if (this._triggerArray.length) {
        $(this._triggerArray).removeClass(ClassName$3.COLLAPSED).attr('aria-expanded', true);
      }
      this.setTransitioning(true);
      var complete = function complete() {
        $(_this._element).removeClass(ClassName$3.COLLAPSING).addClass(ClassName$3.COLLAPSE).addClass(ClassName$3.SHOW);
        _this._element.style[dimension] = '';
        _this.setTransitioning(false);
        $(_this._element).trigger(Event$3.SHOWN);
      };
      var capitalizedDimension = dimension[0].toUpperCase() + dimension.slice(1);
      var scrollSize = "scroll" + capitalizedDimension;
      var transitionDuration = Util.getTransitionDurationFromElement(this._element);
      $(this._element).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
      this._element.style[dimension] = this._element[scrollSize] + "px";
    };
    _proto.hide = function hide() {
      var _this2 = this;
      if (this._isTransitioning || !$(this._element).hasClass(ClassName$3.SHOW)) {
        return;
      }
      var startEvent = $.Event(Event$3.HIDE);
      $(this._element).trigger(startEvent);
      if (startEvent.isDefaultPrevented()) {
        return;
      }
      var dimension = this._getDimension();
      this._element.style[dimension] = this._element.getBoundingClientRect()[dimension] + "px";
      Util.reflow(this._element);
      $(this._element).addClass(ClassName$3.COLLAPSING).removeClass(ClassName$3.COLLAPSE).removeClass(ClassName$3.SHOW);
      var triggerArrayLength = this._triggerArray.length;
      if (triggerArrayLength > 0) {
        for (var i = 0; i < triggerArrayLength; i++) {
          var trigger = this._triggerArray[i];
          var selector = Util.getSelectorFromElement(trigger);
          if (selector !== null) {
            var $elem = $([].slice.call(document.querySelectorAll(selector)));
            if (!$elem.hasClass(ClassName$3.SHOW)) {
              $(trigger).addClass(ClassName$3.COLLAPSED).attr('aria-expanded', false);
            }
          }
        }
      }
      this.setTransitioning(true);
      var complete = function complete() {
        _this2.setTransitioning(false);
        $(_this2._element).removeClass(ClassName$3.COLLAPSING).addClass(ClassName$3.COLLAPSE).trigger(Event$3.HIDDEN);
      };
      this._element.style[dimension] = '';
      var transitionDuration = Util.getTransitionDurationFromElement(this._element);
      $(this._element).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
    };
    _proto.setTransitioning = function setTransitioning(isTransitioning) {
      this._isTransitioning = isTransitioning;
    };
    _proto.dispose = function dispose() {
      $.removeData(this._element, DATA_KEY$3);
      this._config = null;
      this._parent = null;
      this._element = null;
      this._triggerArray = null;
      this._isTransitioning = null;
    } // Private
    ;
    _proto._getConfig = function _getConfig(config) {
      config = _objectSpread({}, Default$1, config);
      config.toggle = Boolean(config.toggle); // Coerce string values

      Util.typeCheckConfig(NAME$3, config, DefaultType$1);
      return config;
    };
    _proto._getDimension = function _getDimension() {
      var hasWidth = $(this._element).hasClass(Dimension.WIDTH);
      return hasWidth ? Dimension.WIDTH : Dimension.HEIGHT;
    };
    _proto._getParent = function _getParent() {
      var _this3 = this;
      var parent;
      if (Util.isElement(this._config.parent)) {
        parent = this._config.parent; // It's a jQuery object

        if (typeof this._config.parent.jquery !== 'undefined') {
          parent = this._config.parent[0];
        }
      } else {
        parent = document.querySelector(this._config.parent);
      }
      var selector = "[data-toggle=\"collapse\"][data-parent=\"" + this._config.parent + "\"]";
      var children = [].slice.call(parent.querySelectorAll(selector));
      $(children).each(function (i, element) {
        _this3._addAriaAndCollapsedClass(Collapse._getTargetFromElement(element), [element]);
      });
      return parent;
    };
    _proto._addAriaAndCollapsedClass = function _addAriaAndCollapsedClass(element, triggerArray) {
      var isOpen = $(element).hasClass(ClassName$3.SHOW);
      if (triggerArray.length) {
        $(triggerArray).toggleClass(ClassName$3.COLLAPSED, !isOpen).attr('aria-expanded', isOpen);
      }
    } // Static
    ;
    Collapse._getTargetFromElement = function _getTargetFromElement(element) {
      var selector = Util.getSelectorFromElement(element);
      return selector ? document.querySelector(selector) : null;
    };
    Collapse._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var $this = $(this);
        var data = $this.data(DATA_KEY$3);
        var _config = _objectSpread({}, Default$1, $this.data(), _typeof(config) === 'object' && config ? config : {});
        if (!data && _config.toggle && /show|hide/.test(config)) {
          _config.toggle = false;
        }
        if (!data) {
          data = new Collapse(this, _config);
          $this.data(DATA_KEY$3, data);
        }
        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }
          data[config]();
        }
      });
    };
    _createClass(Collapse, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$3;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default$1;
      }
    }]);
    return Collapse;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */

  $(document).on(Event$3.CLICK_DATA_API, Selector$3.DATA_TOGGLE, function (event) {
    // preventDefault only for <a> elements (which change the URL) not inside the collapsible element
    if (event.currentTarget.tagName === 'A') {
      event.preventDefault();
    }
    var $trigger = $(this);
    var selector = Util.getSelectorFromElement(this);
    var selectors = [].slice.call(document.querySelectorAll(selector));
    $(selectors).each(function () {
      var $target = $(this);
      var data = $target.data(DATA_KEY$3);
      var config = data ? 'toggle' : $trigger.data();
      Collapse._jQueryInterface.call($target, config);
    });
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME$3] = Collapse._jQueryInterface;
  $.fn[NAME$3].Constructor = Collapse;
  $.fn[NAME$3].noConflict = function () {
    $.fn[NAME$3] = JQUERY_NO_CONFLICT$3;
    return Collapse._jQueryInterface;
  };

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME$4 = 'dropdown';
  var VERSION$4 = '4.3.1';
  var DATA_KEY$4 = 'bs.dropdown';
  var EVENT_KEY$4 = "." + DATA_KEY$4;
  var DATA_API_KEY$4 = '.data-api';
  var JQUERY_NO_CONFLICT$4 = $.fn[NAME$4];
  var ESCAPE_KEYCODE = 27; // KeyboardEvent.which value for Escape (Esc) key

  var SPACE_KEYCODE = 32; // KeyboardEvent.which value for space key

  var TAB_KEYCODE = 9; // KeyboardEvent.which value for tab key

  var ARROW_UP_KEYCODE = 38; // KeyboardEvent.which value for up arrow key

  var ARROW_DOWN_KEYCODE = 40; // KeyboardEvent.which value for down arrow key

  var RIGHT_MOUSE_BUTTON_WHICH = 3; // MouseEvent.which value for the right button (assuming a right-handed mouse)

  var REGEXP_KEYDOWN = new RegExp(ARROW_UP_KEYCODE + "|" + ARROW_DOWN_KEYCODE + "|" + ESCAPE_KEYCODE);
  var Event$4 = {
    HIDE: "hide" + EVENT_KEY$4,
    HIDDEN: "hidden" + EVENT_KEY$4,
    SHOW: "show" + EVENT_KEY$4,
    SHOWN: "shown" + EVENT_KEY$4,
    CLICK: "click" + EVENT_KEY$4,
    CLICK_DATA_API: "click" + EVENT_KEY$4 + DATA_API_KEY$4,
    KEYDOWN_DATA_API: "keydown" + EVENT_KEY$4 + DATA_API_KEY$4,
    KEYUP_DATA_API: "keyup" + EVENT_KEY$4 + DATA_API_KEY$4
  };
  var ClassName$4 = {
    DISABLED: 'disabled',
    SHOW: 'show',
    DROPUP: 'dropup',
    DROPRIGHT: 'dropright',
    DROPLEFT: 'dropleft',
    MENURIGHT: 'dropdown-menu-right',
    MENULEFT: 'dropdown-menu-left',
    POSITION_STATIC: 'position-static'
  };
  var Selector$4 = {
    DATA_TOGGLE: '[data-toggle="dropdown"]',
    FORM_CHILD: '.dropdown form',
    MENU: '.dropdown-menu',
    NAVBAR_NAV: '.navbar-nav',
    VISIBLE_ITEMS: '.dropdown-menu .dropdown-item:not(.disabled):not(:disabled)'
  };
  var AttachmentMap = {
    TOP: 'top-start',
    TOPEND: 'top-end',
    BOTTOM: 'bottom-start',
    BOTTOMEND: 'bottom-end',
    RIGHT: 'right-start',
    RIGHTEND: 'right-end',
    LEFT: 'left-start',
    LEFTEND: 'left-end'
  };
  var Default$2 = {
    offset: 0,
    flip: true,
    boundary: 'scrollParent',
    reference: 'toggle',
    display: 'dynamic'
  };
  var DefaultType$2 = {
    offset: '(number|string|function)',
    flip: 'boolean',
    boundary: '(string|element)',
    reference: '(string|element)',
    display: 'string'
    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */
  };
  var Dropdown = /*#__PURE__*/
  function () {
    function Dropdown(element, config) {
      this._element = element;
      this._popper = null;
      this._config = this._getConfig(config);
      this._menu = this._getMenuElement();
      this._inNavbar = this._detectNavbar();
      this._addEventListeners();
    } // Getters

    var _proto = Dropdown.prototype;

    // Public
    _proto.toggle = function toggle() {
      if (this._element.disabled || $(this._element).hasClass(ClassName$4.DISABLED)) {
        return;
      }
      var parent = Dropdown._getParentFromElement(this._element);
      var isActive = $(this._menu).hasClass(ClassName$4.SHOW);
      Dropdown._clearMenus();
      if (isActive) {
        return;
      }
      var relatedTarget = {
        relatedTarget: this._element
      };
      var showEvent = $.Event(Event$4.SHOW, relatedTarget);
      $(parent).trigger(showEvent);
      if (showEvent.isDefaultPrevented()) {
        return;
      } // Disable totally Popper.js for Dropdown in Navbar

      if (!this._inNavbar) {
        /**
         * Check for Popper dependency
         * Popper - https://popper.js.org
         */
        if (typeof Popper === 'undefined') {
          throw new TypeError('Bootstrap\'s dropdowns require Popper.js (https://popper.js.org/)');
        }
        var referenceElement = this._element;
        if (this._config.reference === 'parent') {
          referenceElement = parent;
        } else if (Util.isElement(this._config.reference)) {
          referenceElement = this._config.reference; // Check if it's jQuery element

          if (typeof this._config.reference.jquery !== 'undefined') {
            referenceElement = this._config.reference[0];
          }
        } // If boundary is not `scrollParent`, then set position to `static`
        // to allow the menu to "escape" the scroll parent's boundaries
        // https://github.com/twbs/bootstrap/issues/24251

        if (this._config.boundary !== 'scrollParent') {
          $(parent).addClass(ClassName$4.POSITION_STATIC);
        }
        this._popper = new Popper(referenceElement, this._menu, this._getPopperConfig());
      } // If this is a touch-enabled device we add extra
      // empty mouseover listeners to the body's immediate children;
      // only needed because of broken event delegation on iOS
      // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html

      if ('ontouchstart' in document.documentElement && $(parent).closest(Selector$4.NAVBAR_NAV).length === 0) {
        $(document.body).children().on('mouseover', null, $.noop);
      }
      this._element.focus();
      this._element.setAttribute('aria-expanded', true);
      $(this._menu).toggleClass(ClassName$4.SHOW);
      $(parent).toggleClass(ClassName$4.SHOW).trigger($.Event(Event$4.SHOWN, relatedTarget));
    };
    _proto.show = function show() {
      if (this._element.disabled || $(this._element).hasClass(ClassName$4.DISABLED) || $(this._menu).hasClass(ClassName$4.SHOW)) {
        return;
      }
      var relatedTarget = {
        relatedTarget: this._element
      };
      var showEvent = $.Event(Event$4.SHOW, relatedTarget);
      var parent = Dropdown._getParentFromElement(this._element);
      $(parent).trigger(showEvent);
      if (showEvent.isDefaultPrevented()) {
        return;
      }
      $(this._menu).toggleClass(ClassName$4.SHOW);
      $(parent).toggleClass(ClassName$4.SHOW).trigger($.Event(Event$4.SHOWN, relatedTarget));
    };
    _proto.hide = function hide() {
      if (this._element.disabled || $(this._element).hasClass(ClassName$4.DISABLED) || !$(this._menu).hasClass(ClassName$4.SHOW)) {
        return;
      }
      var relatedTarget = {
        relatedTarget: this._element
      };
      var hideEvent = $.Event(Event$4.HIDE, relatedTarget);
      var parent = Dropdown._getParentFromElement(this._element);
      $(parent).trigger(hideEvent);
      if (hideEvent.isDefaultPrevented()) {
        return;
      }
      $(this._menu).toggleClass(ClassName$4.SHOW);
      $(parent).toggleClass(ClassName$4.SHOW).trigger($.Event(Event$4.HIDDEN, relatedTarget));
    };
    _proto.dispose = function dispose() {
      $.removeData(this._element, DATA_KEY$4);
      $(this._element).off(EVENT_KEY$4);
      this._element = null;
      this._menu = null;
      if (this._popper !== null) {
        this._popper.destroy();
        this._popper = null;
      }
    };
    _proto.update = function update() {
      this._inNavbar = this._detectNavbar();
      if (this._popper !== null) {
        this._popper.scheduleUpdate();
      }
    } // Private
    ;
    _proto._addEventListeners = function _addEventListeners() {
      var _this = this;
      $(this._element).on(Event$4.CLICK, function (event) {
        event.preventDefault();
        event.stopPropagation();
        _this.toggle();
      });
    };
    _proto._getConfig = function _getConfig(config) {
      config = _objectSpread({}, this.constructor.Default, $(this._element).data(), config);
      Util.typeCheckConfig(NAME$4, config, this.constructor.DefaultType);
      return config;
    };
    _proto._getMenuElement = function _getMenuElement() {
      if (!this._menu) {
        var parent = Dropdown._getParentFromElement(this._element);
        if (parent) {
          this._menu = parent.querySelector(Selector$4.MENU);
        }
      }
      return this._menu;
    };
    _proto._getPlacement = function _getPlacement() {
      var $parentDropdown = $(this._element.parentNode);
      var placement = AttachmentMap.BOTTOM; // Handle dropup

      if ($parentDropdown.hasClass(ClassName$4.DROPUP)) {
        placement = AttachmentMap.TOP;
        if ($(this._menu).hasClass(ClassName$4.MENURIGHT)) {
          placement = AttachmentMap.TOPEND;
        }
      } else if ($parentDropdown.hasClass(ClassName$4.DROPRIGHT)) {
        placement = AttachmentMap.RIGHT;
      } else if ($parentDropdown.hasClass(ClassName$4.DROPLEFT)) {
        placement = AttachmentMap.LEFT;
      } else if ($(this._menu).hasClass(ClassName$4.MENURIGHT)) {
        placement = AttachmentMap.BOTTOMEND;
      }
      return placement;
    };
    _proto._detectNavbar = function _detectNavbar() {
      return $(this._element).closest('.navbar').length > 0;
    };
    _proto._getOffset = function _getOffset() {
      var _this2 = this;
      var offset = {};
      if (typeof this._config.offset === 'function') {
        offset.fn = function (data) {
          data.offsets = _objectSpread({}, data.offsets, _this2._config.offset(data.offsets, _this2._element) || {});
          return data;
        };
      } else {
        offset.offset = this._config.offset;
      }
      return offset;
    };
    _proto._getPopperConfig = function _getPopperConfig() {
      var popperConfig = {
        placement: this._getPlacement(),
        modifiers: {
          offset: this._getOffset(),
          flip: {
            enabled: this._config.flip
          },
          preventOverflow: {
            boundariesElement: this._config.boundary
          }
        } // Disable Popper.js if we have a static display
      };
      if (this._config.display === 'static') {
        popperConfig.modifiers.applyStyle = {
          enabled: false
        };
      }
      return popperConfig;
    } // Static
    ;
    Dropdown._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var data = $(this).data(DATA_KEY$4);
        var _config = _typeof(config) === 'object' ? config : null;
        if (!data) {
          data = new Dropdown(this, _config);
          $(this).data(DATA_KEY$4, data);
        }
        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }
          data[config]();
        }
      });
    };
    Dropdown._clearMenus = function _clearMenus(event) {
      if (event && (event.which === RIGHT_MOUSE_BUTTON_WHICH || event.type === 'keyup' && event.which !== TAB_KEYCODE)) {
        return;
      }
      var toggles = [].slice.call(document.querySelectorAll(Selector$4.DATA_TOGGLE));
      for (var i = 0, len = toggles.length; i < len; i++) {
        var parent = Dropdown._getParentFromElement(toggles[i]);
        var context = $(toggles[i]).data(DATA_KEY$4);
        var relatedTarget = {
          relatedTarget: toggles[i]
        };
        if (event && event.type === 'click') {
          relatedTarget.clickEvent = event;
        }
        if (!context) {
          continue;
        }
        var dropdownMenu = context._menu;
        if (!$(parent).hasClass(ClassName$4.SHOW)) {
          continue;
        }
        if (event && (event.type === 'click' && /input|textarea/i.test(event.target.tagName) || event.type === 'keyup' && event.which === TAB_KEYCODE) && $.contains(parent, event.target)) {
          continue;
        }
        var hideEvent = $.Event(Event$4.HIDE, relatedTarget);
        $(parent).trigger(hideEvent);
        if (hideEvent.isDefaultPrevented()) {
          continue;
        } // If this is a touch-enabled device we remove the extra
        // empty mouseover listeners we added for iOS support

        if ('ontouchstart' in document.documentElement) {
          $(document.body).children().off('mouseover', null, $.noop);
        }
        toggles[i].setAttribute('aria-expanded', 'false');
        $(dropdownMenu).removeClass(ClassName$4.SHOW);
        $(parent).removeClass(ClassName$4.SHOW).trigger($.Event(Event$4.HIDDEN, relatedTarget));
      }
    };
    Dropdown._getParentFromElement = function _getParentFromElement(element) {
      var parent;
      var selector = Util.getSelectorFromElement(element);
      if (selector) {
        parent = document.querySelector(selector);
      }
      return parent || element.parentNode;
    } // eslint-disable-next-line complexity
    ;
    Dropdown._dataApiKeydownHandler = function _dataApiKeydownHandler(event) {
      // If not input/textarea:
      //  - And not a key in REGEXP_KEYDOWN => not a dropdown command
      // If input/textarea:
      //  - If space key => not a dropdown command
      //  - If key is other than escape
      //    - If key is not up or down => not a dropdown command
      //    - If trigger inside the menu => not a dropdown command
      if (/input|textarea/i.test(event.target.tagName) ? event.which === SPACE_KEYCODE || event.which !== ESCAPE_KEYCODE && (event.which !== ARROW_DOWN_KEYCODE && event.which !== ARROW_UP_KEYCODE || $(event.target).closest(Selector$4.MENU).length) : !REGEXP_KEYDOWN.test(event.which)) {
        return;
      }
      event.preventDefault();
      event.stopPropagation();
      if (this.disabled || $(this).hasClass(ClassName$4.DISABLED)) {
        return;
      }
      var parent = Dropdown._getParentFromElement(this);
      var isActive = $(parent).hasClass(ClassName$4.SHOW);
      if (!isActive || isActive && (event.which === ESCAPE_KEYCODE || event.which === SPACE_KEYCODE)) {
        if (event.which === ESCAPE_KEYCODE) {
          var toggle = parent.querySelector(Selector$4.DATA_TOGGLE);
          $(toggle).trigger('focus');
        }
        $(this).trigger('click');
        return;
      }
      var items = [].slice.call(parent.querySelectorAll(Selector$4.VISIBLE_ITEMS));
      if (items.length === 0) {
        return;
      }
      var index = items.indexOf(event.target);
      if (event.which === ARROW_UP_KEYCODE && index > 0) {
        // Up
        index--;
      }
      if (event.which === ARROW_DOWN_KEYCODE && index < items.length - 1) {
        // Down
        index++;
      }
      if (index < 0) {
        index = 0;
      }
      items[index].focus();
    };
    _createClass(Dropdown, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$4;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default$2;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return DefaultType$2;
      }
    }]);
    return Dropdown;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */

  $(document).on(Event$4.KEYDOWN_DATA_API, Selector$4.DATA_TOGGLE, Dropdown._dataApiKeydownHandler).on(Event$4.KEYDOWN_DATA_API, Selector$4.MENU, Dropdown._dataApiKeydownHandler).on(Event$4.CLICK_DATA_API + " " + Event$4.KEYUP_DATA_API, Dropdown._clearMenus).on(Event$4.CLICK_DATA_API, Selector$4.DATA_TOGGLE, function (event) {
    event.preventDefault();
    event.stopPropagation();
    Dropdown._jQueryInterface.call($(this), 'toggle');
  }).on(Event$4.CLICK_DATA_API, Selector$4.FORM_CHILD, function (e) {
    e.stopPropagation();
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME$4] = Dropdown._jQueryInterface;
  $.fn[NAME$4].Constructor = Dropdown;
  $.fn[NAME$4].noConflict = function () {
    $.fn[NAME$4] = JQUERY_NO_CONFLICT$4;
    return Dropdown._jQueryInterface;
  };

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME$5 = 'modal';
  var VERSION$5 = '4.3.1';
  var DATA_KEY$5 = 'bs.modal';
  var EVENT_KEY$5 = "." + DATA_KEY$5;
  var DATA_API_KEY$5 = '.data-api';
  var JQUERY_NO_CONFLICT$5 = $.fn[NAME$5];
  var ESCAPE_KEYCODE$1 = 27; // KeyboardEvent.which value for Escape (Esc) key

  var Default$3 = {
    backdrop: true,
    keyboard: true,
    focus: true,
    show: true
  };
  var DefaultType$3 = {
    backdrop: '(boolean|string)',
    keyboard: 'boolean',
    focus: 'boolean',
    show: 'boolean'
  };
  var Event$5 = {
    HIDE: "hide" + EVENT_KEY$5,
    HIDDEN: "hidden" + EVENT_KEY$5,
    SHOW: "show" + EVENT_KEY$5,
    SHOWN: "shown" + EVENT_KEY$5,
    FOCUSIN: "focusin" + EVENT_KEY$5,
    RESIZE: "resize" + EVENT_KEY$5,
    CLICK_DISMISS: "click.dismiss" + EVENT_KEY$5,
    KEYDOWN_DISMISS: "keydown.dismiss" + EVENT_KEY$5,
    MOUSEUP_DISMISS: "mouseup.dismiss" + EVENT_KEY$5,
    MOUSEDOWN_DISMISS: "mousedown.dismiss" + EVENT_KEY$5,
    CLICK_DATA_API: "click" + EVENT_KEY$5 + DATA_API_KEY$5
  };
  var ClassName$5 = {
    SCROLLABLE: 'modal-dialog-scrollable',
    SCROLLBAR_MEASURER: 'modal-scrollbar-measure',
    BACKDROP: 'modal-backdrop',
    OPEN: 'modal-open',
    FADE: 'fade',
    SHOW: 'show'
  };
  var Selector$5 = {
    DIALOG: '.modal-dialog',
    MODAL_BODY: '.modal-body',
    DATA_TOGGLE: '[data-toggle="modal"]',
    DATA_DISMISS: '[data-dismiss="modal"]',
    FIXED_CONTENT: '.fixed-top, .fixed-bottom, .is-fixed, .sticky-top',
    STICKY_CONTENT: '.sticky-top'
    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */
  };
  var Modal = /*#__PURE__*/
  function () {
    function Modal(element, config) {
      this._config = this._getConfig(config);
      this._element = element;
      this._dialog = element.querySelector(Selector$5.DIALOG);
      this._backdrop = null;
      this._isShown = false;
      this._isBodyOverflowing = false;
      this._ignoreBackdropClick = false;
      this._isTransitioning = false;
      this._scrollbarWidth = 0;
    } // Getters

    var _proto = Modal.prototype;

    // Public
    _proto.toggle = function toggle(relatedTarget) {
      return this._isShown ? this.hide() : this.show(relatedTarget);
    };
    _proto.show = function show(relatedTarget) {
      var _this = this;
      if (this._isShown || this._isTransitioning) {
        return;
      }
      if ($(this._element).hasClass(ClassName$5.FADE)) {
        this._isTransitioning = true;
      }
      var showEvent = $.Event(Event$5.SHOW, {
        relatedTarget: relatedTarget
      });
      $(this._element).trigger(showEvent);
      if (this._isShown || showEvent.isDefaultPrevented()) {
        return;
      }
      this._isShown = true;
      this._checkScrollbar();
      this._setScrollbar();
      this._adjustDialog();
      this._setEscapeEvent();
      this._setResizeEvent();
      $(this._element).on(Event$5.CLICK_DISMISS, Selector$5.DATA_DISMISS, function (event) {
        return _this.hide(event);
      });
      $(this._dialog).on(Event$5.MOUSEDOWN_DISMISS, function () {
        $(_this._element).one(Event$5.MOUSEUP_DISMISS, function (event) {
          if ($(event.target).is(_this._element)) {
            _this._ignoreBackdropClick = true;
          }
        });
      });
      this._showBackdrop(function () {
        return _this._showElement(relatedTarget);
      });
    };
    _proto.hide = function hide(event) {
      var _this2 = this;
      if (event) {
        event.preventDefault();
      }
      if (!this._isShown || this._isTransitioning) {
        return;
      }
      var hideEvent = $.Event(Event$5.HIDE);
      $(this._element).trigger(hideEvent);
      if (!this._isShown || hideEvent.isDefaultPrevented()) {
        return;
      }
      this._isShown = false;
      var transition = $(this._element).hasClass(ClassName$5.FADE);
      if (transition) {
        this._isTransitioning = true;
      }
      this._setEscapeEvent();
      this._setResizeEvent();
      $(document).off(Event$5.FOCUSIN);
      $(this._element).removeClass(ClassName$5.SHOW);
      $(this._element).off(Event$5.CLICK_DISMISS);
      $(this._dialog).off(Event$5.MOUSEDOWN_DISMISS);
      if (transition) {
        var transitionDuration = Util.getTransitionDurationFromElement(this._element);
        $(this._element).one(Util.TRANSITION_END, function (event) {
          return _this2._hideModal(event);
        }).emulateTransitionEnd(transitionDuration);
      } else {
        this._hideModal();
      }
    };
    _proto.dispose = function dispose() {
      [window, this._element, this._dialog].forEach(function (htmlElement) {
        return $(htmlElement).off(EVENT_KEY$5);
      });
      /**
       * `document` has 2 events `Event.FOCUSIN` and `Event.CLICK_DATA_API`
       * Do not move `document` in `htmlElements` array
       * It will remove `Event.CLICK_DATA_API` event that should remain
       */

      $(document).off(Event$5.FOCUSIN);
      $.removeData(this._element, DATA_KEY$5);
      this._config = null;
      this._element = null;
      this._dialog = null;
      this._backdrop = null;
      this._isShown = null;
      this._isBodyOverflowing = null;
      this._ignoreBackdropClick = null;
      this._isTransitioning = null;
      this._scrollbarWidth = null;
    };
    _proto.handleUpdate = function handleUpdate() {
      this._adjustDialog();
    } // Private
    ;
    _proto._getConfig = function _getConfig(config) {
      config = _objectSpread({}, Default$3, config);
      Util.typeCheckConfig(NAME$5, config, DefaultType$3);
      return config;
    };
    _proto._showElement = function _showElement(relatedTarget) {
      var _this3 = this;
      var transition = $(this._element).hasClass(ClassName$5.FADE);
      if (!this._element.parentNode || this._element.parentNode.nodeType !== Node.ELEMENT_NODE) {
        // Don't move modal's DOM position
        document.body.appendChild(this._element);
      }
      this._element.style.display = 'block';
      this._element.removeAttribute('aria-hidden');
      this._element.setAttribute('aria-modal', true);
      if ($(this._dialog).hasClass(ClassName$5.SCROLLABLE)) {
        this._dialog.querySelector(Selector$5.MODAL_BODY).scrollTop = 0;
      } else {
        this._element.scrollTop = 0;
      }
      if (transition) {
        Util.reflow(this._element);
      }
      $(this._element).addClass(ClassName$5.SHOW);
      if (this._config.focus) {
        this._enforceFocus();
      }
      var shownEvent = $.Event(Event$5.SHOWN, {
        relatedTarget: relatedTarget
      });
      var transitionComplete = function transitionComplete() {
        if (_this3._config.focus) {
          _this3._element.focus();
        }
        _this3._isTransitioning = false;
        $(_this3._element).trigger(shownEvent);
      };
      if (transition) {
        var transitionDuration = Util.getTransitionDurationFromElement(this._dialog);
        $(this._dialog).one(Util.TRANSITION_END, transitionComplete).emulateTransitionEnd(transitionDuration);
      } else {
        transitionComplete();
      }
    };
    _proto._enforceFocus = function _enforceFocus() {
      var _this4 = this;
      $(document).off(Event$5.FOCUSIN) // Guard against infinite focus loop
      .on(Event$5.FOCUSIN, function (event) {
        if (document !== event.target && _this4._element !== event.target && $(_this4._element).has(event.target).length === 0) {
          _this4._element.focus();
        }
      });
    };
    _proto._setEscapeEvent = function _setEscapeEvent() {
      var _this5 = this;
      if (this._isShown && this._config.keyboard) {
        $(this._element).on(Event$5.KEYDOWN_DISMISS, function (event) {
          if (event.which === ESCAPE_KEYCODE$1) {
            event.preventDefault();
            _this5.hide();
          }
        });
      } else if (!this._isShown) {
        $(this._element).off(Event$5.KEYDOWN_DISMISS);
      }
    };
    _proto._setResizeEvent = function _setResizeEvent() {
      var _this6 = this;
      if (this._isShown) {
        $(window).on(Event$5.RESIZE, function (event) {
          return _this6.handleUpdate(event);
        });
      } else {
        $(window).off(Event$5.RESIZE);
      }
    };
    _proto._hideModal = function _hideModal() {
      var _this7 = this;
      this._element.style.display = 'none';
      this._element.setAttribute('aria-hidden', true);
      this._element.removeAttribute('aria-modal');
      this._isTransitioning = false;
      this._showBackdrop(function () {
        $(document.body).removeClass(ClassName$5.OPEN);
        _this7._resetAdjustments();
        _this7._resetScrollbar();
        $(_this7._element).trigger(Event$5.HIDDEN);
      });
    };
    _proto._removeBackdrop = function _removeBackdrop() {
      if (this._backdrop) {
        $(this._backdrop).remove();
        this._backdrop = null;
      }
    };
    _proto._showBackdrop = function _showBackdrop(callback) {
      var _this8 = this;
      var animate = $(this._element).hasClass(ClassName$5.FADE) ? ClassName$5.FADE : '';
      if (this._isShown && this._config.backdrop) {
        this._backdrop = document.createElement('div');
        this._backdrop.className = ClassName$5.BACKDROP;
        if (animate) {
          this._backdrop.classList.add(animate);
        }
        $(this._backdrop).appendTo(document.body);
        $(this._element).on(Event$5.CLICK_DISMISS, function (event) {
          if (_this8._ignoreBackdropClick) {
            _this8._ignoreBackdropClick = false;
            return;
          }
          if (event.target !== event.currentTarget) {
            return;
          }
          if (_this8._config.backdrop === 'static') {
            _this8._element.focus();
          } else {
            _this8.hide();
          }
        });
        if (animate) {
          Util.reflow(this._backdrop);
        }
        $(this._backdrop).addClass(ClassName$5.SHOW);
        if (!callback) {
          return;
        }
        if (!animate) {
          callback();
          return;
        }
        var backdropTransitionDuration = Util.getTransitionDurationFromElement(this._backdrop);
        $(this._backdrop).one(Util.TRANSITION_END, callback).emulateTransitionEnd(backdropTransitionDuration);
      } else if (!this._isShown && this._backdrop) {
        $(this._backdrop).removeClass(ClassName$5.SHOW);
        var callbackRemove = function callbackRemove() {
          _this8._removeBackdrop();
          if (callback) {
            callback();
          }
        };
        if ($(this._element).hasClass(ClassName$5.FADE)) {
          var _backdropTransitionDuration = Util.getTransitionDurationFromElement(this._backdrop);
          $(this._backdrop).one(Util.TRANSITION_END, callbackRemove).emulateTransitionEnd(_backdropTransitionDuration);
        } else {
          callbackRemove();
        }
      } else if (callback) {
        callback();
      }
    } // ----------------------------------------------------------------------
    // the following methods are used to handle overflowing modals
    // todo (fat): these should probably be refactored out of modal.js
    // ----------------------------------------------------------------------
    ;
    _proto._adjustDialog = function _adjustDialog() {
      var isModalOverflowing = this._element.scrollHeight > document.documentElement.clientHeight;
      if (!this._isBodyOverflowing && isModalOverflowing) {
        this._element.style.paddingLeft = this._scrollbarWidth + "px";
      }
      if (this._isBodyOverflowing && !isModalOverflowing) {
        this._element.style.paddingRight = this._scrollbarWidth + "px";
      }
    };
    _proto._resetAdjustments = function _resetAdjustments() {
      this._element.style.paddingLeft = '';
      this._element.style.paddingRight = '';
    };
    _proto._checkScrollbar = function _checkScrollbar() {
      var rect = document.body.getBoundingClientRect();
      this._isBodyOverflowing = rect.left + rect.right < window.innerWidth;
      this._scrollbarWidth = this._getScrollbarWidth();
    };
    _proto._setScrollbar = function _setScrollbar() {
      var _this9 = this;
      if (this._isBodyOverflowing) {
        // Note: DOMNode.style.paddingRight returns the actual value or '' if not set
        //   while $(DOMNode).css('padding-right') returns the calculated value or 0 if not set
        var fixedContent = [].slice.call(document.querySelectorAll(Selector$5.FIXED_CONTENT));
        var stickyContent = [].slice.call(document.querySelectorAll(Selector$5.STICKY_CONTENT)); // Adjust fixed content padding

        $(fixedContent).each(function (index, element) {
          var actualPadding = element.style.paddingRight;
          var calculatedPadding = $(element).css('padding-right');
          $(element).data('padding-right', actualPadding).css('padding-right', parseFloat(calculatedPadding) + _this9._scrollbarWidth + "px");
        }); // Adjust sticky content margin

        $(stickyContent).each(function (index, element) {
          var actualMargin = element.style.marginRight;
          var calculatedMargin = $(element).css('margin-right');
          $(element).data('margin-right', actualMargin).css('margin-right', parseFloat(calculatedMargin) - _this9._scrollbarWidth + "px");
        }); // Adjust body padding

        var actualPadding = document.body.style.paddingRight;
        var calculatedPadding = $(document.body).css('padding-right');
        $(document.body).data('padding-right', actualPadding).css('padding-right', parseFloat(calculatedPadding) + this._scrollbarWidth + "px");
      }
      $(document.body).addClass(ClassName$5.OPEN);
    };
    _proto._resetScrollbar = function _resetScrollbar() {
      // Restore fixed content padding
      var fixedContent = [].slice.call(document.querySelectorAll(Selector$5.FIXED_CONTENT));
      $(fixedContent).each(function (index, element) {
        var padding = $(element).data('padding-right');
        $(element).removeData('padding-right');
        element.style.paddingRight = padding ? padding : '';
      }); // Restore sticky content

      var elements = [].slice.call(document.querySelectorAll("" + Selector$5.STICKY_CONTENT));
      $(elements).each(function (index, element) {
        var margin = $(element).data('margin-right');
        if (typeof margin !== 'undefined') {
          $(element).css('margin-right', margin).removeData('margin-right');
        }
      }); // Restore body padding

      var padding = $(document.body).data('padding-right');
      $(document.body).removeData('padding-right');
      document.body.style.paddingRight = padding ? padding : '';
    };
    _proto._getScrollbarWidth = function _getScrollbarWidth() {
      // thx d.walsh
      var scrollDiv = document.createElement('div');
      scrollDiv.className = ClassName$5.SCROLLBAR_MEASURER;
      document.body.appendChild(scrollDiv);
      var scrollbarWidth = scrollDiv.getBoundingClientRect().width - scrollDiv.clientWidth;
      document.body.removeChild(scrollDiv);
      return scrollbarWidth;
    } // Static
    ;
    Modal._jQueryInterface = function _jQueryInterface(config, relatedTarget) {
      return this.each(function () {
        var data = $(this).data(DATA_KEY$5);
        var _config = _objectSpread({}, Default$3, $(this).data(), _typeof(config) === 'object' && config ? config : {});
        if (!data) {
          data = new Modal(this, _config);
          $(this).data(DATA_KEY$5, data);
        }
        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }
          data[config](relatedTarget);
        } else if (_config.show) {
          data.show(relatedTarget);
        }
      });
    };
    _createClass(Modal, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$5;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default$3;
      }
    }]);
    return Modal;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */

  $(document).on(Event$5.CLICK_DATA_API, Selector$5.DATA_TOGGLE, function (event) {
    var _this10 = this;
    var target;
    var selector = Util.getSelectorFromElement(this);
    if (selector) {
      target = document.querySelector(selector);
    }
    var config = $(target).data(DATA_KEY$5) ? 'toggle' : _objectSpread({}, $(target).data(), $(this).data());
    if (this.tagName === 'A' || this.tagName === 'AREA') {
      event.preventDefault();
    }
    var $target = $(target).one(Event$5.SHOW, function (showEvent) {
      if (showEvent.isDefaultPrevented()) {
        // Only register focus restorer if modal will actually get shown
        return;
      }
      $target.one(Event$5.HIDDEN, function () {
        if ($(_this10).is(':visible')) {
          _this10.focus();
        }
      });
    });
    Modal._jQueryInterface.call($(target), config, this);
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME$5] = Modal._jQueryInterface;
  $.fn[NAME$5].Constructor = Modal;
  $.fn[NAME$5].noConflict = function () {
    $.fn[NAME$5] = JQUERY_NO_CONFLICT$5;
    return Modal._jQueryInterface;
  };

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v4.3.1): tools/sanitizer.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
   * --------------------------------------------------------------------------
   */
  var uriAttrs = ['background', 'cite', 'href', 'itemtype', 'longdesc', 'poster', 'src', 'xlink:href'];
  var ARIA_ATTRIBUTE_PATTERN = /^aria-[\w-]*$/i;
  var DefaultWhitelist = {
    // Global attributes allowed on any supplied element below.
    '*': ['class', 'dir', 'id', 'lang', 'role', ARIA_ATTRIBUTE_PATTERN],
    a: ['target', 'href', 'title', 'rel'],
    area: [],
    b: [],
    br: [],
    col: [],
    code: [],
    div: [],
    em: [],
    hr: [],
    h1: [],
    h2: [],
    h3: [],
    h4: [],
    h5: [],
    h6: [],
    i: [],
    img: ['src', 'alt', 'title', 'width', 'height'],
    li: [],
    ol: [],
    p: [],
    pre: [],
    s: [],
    small: [],
    span: [],
    sub: [],
    sup: [],
    strong: [],
    u: [],
    ul: []
    /**
     * A pattern that recognizes a commonly useful subset of URLs that are safe.
     *
     * Shoutout to Angular 7 https://github.com/angular/angular/blob/7.2.4/packages/core/src/sanitization/url_sanitizer.ts
     */
  };
  var SAFE_URL_PATTERN = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi;
  /**
   * A pattern that matches safe data URLs. Only matches image, video and audio types.
   *
   * Shoutout to Angular 7 https://github.com/angular/angular/blob/7.2.4/packages/core/src/sanitization/url_sanitizer.ts
   */

  var DATA_URL_PATTERN = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+/]+=*$/i;
  function allowedAttribute(attr, allowedAttributeList) {
    var attrName = attr.nodeName.toLowerCase();
    if (allowedAttributeList.indexOf(attrName) !== -1) {
      if (uriAttrs.indexOf(attrName) !== -1) {
        return Boolean(attr.nodeValue.match(SAFE_URL_PATTERN) || attr.nodeValue.match(DATA_URL_PATTERN));
      }
      return true;
    }
    var regExp = allowedAttributeList.filter(function (attrRegex) {
      return attrRegex instanceof RegExp;
    }); // Check if a regular expression validates the attribute.

    for (var i = 0, l = regExp.length; i < l; i++) {
      if (attrName.match(regExp[i])) {
        return true;
      }
    }
    return false;
  }
  function sanitizeHtml(unsafeHtml, whiteList, sanitizeFn) {
    if (unsafeHtml.length === 0) {
      return unsafeHtml;
    }
    if (sanitizeFn && typeof sanitizeFn === 'function') {
      return sanitizeFn(unsafeHtml);
    }
    var domParser = new window.DOMParser();
    var createdDocument = domParser.parseFromString(unsafeHtml, 'text/html');
    var whitelistKeys = Object.keys(whiteList);
    var elements = [].slice.call(createdDocument.body.querySelectorAll('*'));
    var _loop = function _loop(i, len) {
      var el = elements[i];
      var elName = el.nodeName.toLowerCase();
      if (whitelistKeys.indexOf(el.nodeName.toLowerCase()) === -1) {
        el.parentNode.removeChild(el);
        return "continue";
      }
      var attributeList = [].slice.call(el.attributes);
      var whitelistedAttributes = [].concat(whiteList['*'] || [], whiteList[elName] || []);
      attributeList.forEach(function (attr) {
        if (!allowedAttribute(attr, whitelistedAttributes)) {
          el.removeAttribute(attr.nodeName);
        }
      });
    };
    for (var i = 0, len = elements.length; i < len; i++) {
      var _ret = _loop(i, len);
      if (_ret === "continue") continue;
    }
    return createdDocument.body.innerHTML;
  }

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME$6 = 'tooltip';
  var VERSION$6 = '4.3.1';
  var DATA_KEY$6 = 'bs.tooltip';
  var EVENT_KEY$6 = "." + DATA_KEY$6;
  var JQUERY_NO_CONFLICT$6 = $.fn[NAME$6];
  var CLASS_PREFIX = 'bs-tooltip';
  var BSCLS_PREFIX_REGEX = new RegExp("(^|\\s)" + CLASS_PREFIX + "\\S+", 'g');
  var DISALLOWED_ATTRIBUTES = ['sanitize', 'whiteList', 'sanitizeFn'];
  var DefaultType$4 = {
    animation: 'boolean',
    template: 'string',
    title: '(string|element|function)',
    trigger: 'string',
    delay: '(number|object)',
    html: 'boolean',
    selector: '(string|boolean)',
    placement: '(string|function)',
    offset: '(number|string|function)',
    container: '(string|element|boolean)',
    fallbackPlacement: '(string|array)',
    boundary: '(string|element)',
    sanitize: 'boolean',
    sanitizeFn: '(null|function)',
    whiteList: 'object'
  };
  var AttachmentMap$1 = {
    AUTO: 'auto',
    TOP: 'top',
    RIGHT: 'right',
    BOTTOM: 'bottom',
    LEFT: 'left'
  };
  var Default$4 = {
    animation: true,
    template: '<div class="tooltip" role="tooltip">' + '<div class="arrow"></div>' + '<div class="tooltip-inner"></div></div>',
    trigger: 'hover focus',
    title: '',
    delay: 0,
    html: false,
    selector: false,
    placement: 'top',
    offset: 0,
    container: false,
    fallbackPlacement: 'flip',
    boundary: 'scrollParent',
    sanitize: true,
    sanitizeFn: null,
    whiteList: DefaultWhitelist
  };
  var HoverState = {
    SHOW: 'show',
    OUT: 'out'
  };
  var Event$6 = {
    HIDE: "hide" + EVENT_KEY$6,
    HIDDEN: "hidden" + EVENT_KEY$6,
    SHOW: "show" + EVENT_KEY$6,
    SHOWN: "shown" + EVENT_KEY$6,
    INSERTED: "inserted" + EVENT_KEY$6,
    CLICK: "click" + EVENT_KEY$6,
    FOCUSIN: "focusin" + EVENT_KEY$6,
    FOCUSOUT: "focusout" + EVENT_KEY$6,
    MOUSEENTER: "mouseenter" + EVENT_KEY$6,
    MOUSELEAVE: "mouseleave" + EVENT_KEY$6
  };
  var ClassName$6 = {
    FADE: 'fade',
    SHOW: 'show'
  };
  var Selector$6 = {
    TOOLTIP: '.tooltip',
    TOOLTIP_INNER: '.tooltip-inner',
    ARROW: '.arrow'
  };
  var Trigger = {
    HOVER: 'hover',
    FOCUS: 'focus',
    CLICK: 'click',
    MANUAL: 'manual'
    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */
  };
  var Tooltip = /*#__PURE__*/
  function () {
    function Tooltip(element, config) {
      /**
       * Check for Popper dependency
       * Popper - https://popper.js.org
       */
      if (typeof Popper === 'undefined') {
        throw new TypeError('Bootstrap\'s tooltips require Popper.js (https://popper.js.org/)');
      } // private

      this._isEnabled = true;
      this._timeout = 0;
      this._hoverState = '';
      this._activeTrigger = {};
      this._popper = null; // Protected

      this.element = element;
      this.config = this._getConfig(config);
      this.tip = null;
      this._setListeners();
    } // Getters

    var _proto = Tooltip.prototype;

    // Public
    _proto.enable = function enable() {
      this._isEnabled = true;
    };
    _proto.disable = function disable() {
      this._isEnabled = false;
    };
    _proto.toggleEnabled = function toggleEnabled() {
      this._isEnabled = !this._isEnabled;
    };
    _proto.toggle = function toggle(event) {
      if (!this._isEnabled) {
        return;
      }
      if (event) {
        var dataKey = this.constructor.DATA_KEY;
        var context = $(event.currentTarget).data(dataKey);
        if (!context) {
          context = new this.constructor(event.currentTarget, this._getDelegateConfig());
          $(event.currentTarget).data(dataKey, context);
        }
        context._activeTrigger.click = !context._activeTrigger.click;
        if (context._isWithActiveTrigger()) {
          context._enter(null, context);
        } else {
          context._leave(null, context);
        }
      } else {
        if ($(this.getTipElement()).hasClass(ClassName$6.SHOW)) {
          this._leave(null, this);
          return;
        }
        this._enter(null, this);
      }
    };
    _proto.dispose = function dispose() {
      clearTimeout(this._timeout);
      $.removeData(this.element, this.constructor.DATA_KEY);
      $(this.element).off(this.constructor.EVENT_KEY);
      $(this.element).closest('.modal').off('hide.bs.modal');
      if (this.tip) {
        $(this.tip).remove();
      }
      this._isEnabled = null;
      this._timeout = null;
      this._hoverState = null;
      this._activeTrigger = null;
      if (this._popper !== null) {
        this._popper.destroy();
      }
      this._popper = null;
      this.element = null;
      this.config = null;
      this.tip = null;
    };
    _proto.show = function show() {
      var _this = this;
      if ($(this.element).css('display') === 'none') {
        throw new Error('Please use show on visible elements');
      }
      var showEvent = $.Event(this.constructor.Event.SHOW);
      if (this.isWithContent() && this._isEnabled) {
        $(this.element).trigger(showEvent);
        var shadowRoot = Util.findShadowRoot(this.element);
        var isInTheDom = $.contains(shadowRoot !== null ? shadowRoot : this.element.ownerDocument.documentElement, this.element);
        if (showEvent.isDefaultPrevented() || !isInTheDom) {
          return;
        }
        var tip = this.getTipElement();
        var tipId = Util.getUID(this.constructor.NAME);
        tip.setAttribute('id', tipId);
        this.element.setAttribute('aria-describedby', tipId);
        this.setContent();
        if (this.config.animation) {
          $(tip).addClass(ClassName$6.FADE);
        }
        var placement = typeof this.config.placement === 'function' ? this.config.placement.call(this, tip, this.element) : this.config.placement;
        var attachment = this._getAttachment(placement);
        this.addAttachmentClass(attachment);
        var container = this._getContainer();
        $(tip).data(this.constructor.DATA_KEY, this);
        if (!$.contains(this.element.ownerDocument.documentElement, this.tip)) {
          $(tip).appendTo(container);
        }
        $(this.element).trigger(this.constructor.Event.INSERTED);
        this._popper = new Popper(this.element, tip, {
          placement: attachment,
          modifiers: {
            offset: this._getOffset(),
            flip: {
              behavior: this.config.fallbackPlacement
            },
            arrow: {
              element: Selector$6.ARROW
            },
            preventOverflow: {
              boundariesElement: this.config.boundary
            }
          },
          onCreate: function onCreate(data) {
            if (data.originalPlacement !== data.placement) {
              _this._handlePopperPlacementChange(data);
            }
          },
          onUpdate: function onUpdate(data) {
            return _this._handlePopperPlacementChange(data);
          }
        });
        $(tip).addClass(ClassName$6.SHOW); // If this is a touch-enabled device we add extra
        // empty mouseover listeners to the body's immediate children;
        // only needed because of broken event delegation on iOS
        // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html

        if ('ontouchstart' in document.documentElement) {
          $(document.body).children().on('mouseover', null, $.noop);
        }
        var complete = function complete() {
          if (_this.config.animation) {
            _this._fixTransition();
          }
          var prevHoverState = _this._hoverState;
          _this._hoverState = null;
          $(_this.element).trigger(_this.constructor.Event.SHOWN);
          if (prevHoverState === HoverState.OUT) {
            _this._leave(null, _this);
          }
        };
        if ($(this.tip).hasClass(ClassName$6.FADE)) {
          var transitionDuration = Util.getTransitionDurationFromElement(this.tip);
          $(this.tip).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
        } else {
          complete();
        }
      }
    };
    _proto.hide = function hide(callback) {
      var _this2 = this;
      var tip = this.getTipElement();
      var hideEvent = $.Event(this.constructor.Event.HIDE);
      var complete = function complete() {
        if (_this2._hoverState !== HoverState.SHOW && tip.parentNode) {
          tip.parentNode.removeChild(tip);
        }
        _this2._cleanTipClass();
        _this2.element.removeAttribute('aria-describedby');
        $(_this2.element).trigger(_this2.constructor.Event.HIDDEN);
        if (_this2._popper !== null) {
          _this2._popper.destroy();
        }
        if (callback) {
          callback();
        }
      };
      $(this.element).trigger(hideEvent);
      if (hideEvent.isDefaultPrevented()) {
        return;
      }
      $(tip).removeClass(ClassName$6.SHOW); // If this is a touch-enabled device we remove the extra
      // empty mouseover listeners we added for iOS support

      if ('ontouchstart' in document.documentElement) {
        $(document.body).children().off('mouseover', null, $.noop);
      }
      this._activeTrigger[Trigger.CLICK] = false;
      this._activeTrigger[Trigger.FOCUS] = false;
      this._activeTrigger[Trigger.HOVER] = false;
      if ($(this.tip).hasClass(ClassName$6.FADE)) {
        var transitionDuration = Util.getTransitionDurationFromElement(tip);
        $(tip).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
      } else {
        complete();
      }
      this._hoverState = '';
    };
    _proto.update = function update() {
      if (this._popper !== null) {
        this._popper.scheduleUpdate();
      }
    } // Protected
    ;
    _proto.isWithContent = function isWithContent() {
      return Boolean(this.getTitle());
    };
    _proto.addAttachmentClass = function addAttachmentClass(attachment) {
      $(this.getTipElement()).addClass(CLASS_PREFIX + "-" + attachment);
    };
    _proto.getTipElement = function getTipElement() {
      this.tip = this.tip || $(this.config.template)[0];
      return this.tip;
    };
    _proto.setContent = function setContent() {
      var tip = this.getTipElement();
      this.setElementContent($(tip.querySelectorAll(Selector$6.TOOLTIP_INNER)), this.getTitle());
      $(tip).removeClass(ClassName$6.FADE + " " + ClassName$6.SHOW);
    };
    _proto.setElementContent = function setElementContent($element, content) {
      if (_typeof(content) === 'object' && (content.nodeType || content.jquery)) {
        // Content is a DOM node or a jQuery
        if (this.config.html) {
          if (!$(content).parent().is($element)) {
            $element.empty().append(content);
          }
        } else {
          $element.text($(content).text());
        }
        return;
      }
      if (this.config.html) {
        if (this.config.sanitize) {
          content = sanitizeHtml(content, this.config.whiteList, this.config.sanitizeFn);
        }
        $element.html(content);
      } else {
        $element.text(content);
      }
    };
    _proto.getTitle = function getTitle() {
      var title = this.element.getAttribute('data-original-title');
      if (!title) {
        title = typeof this.config.title === 'function' ? this.config.title.call(this.element) : this.config.title;
      }
      return title;
    } // Private
    ;
    _proto._getOffset = function _getOffset() {
      var _this3 = this;
      var offset = {};
      if (typeof this.config.offset === 'function') {
        offset.fn = function (data) {
          data.offsets = _objectSpread({}, data.offsets, _this3.config.offset(data.offsets, _this3.element) || {});
          return data;
        };
      } else {
        offset.offset = this.config.offset;
      }
      return offset;
    };
    _proto._getContainer = function _getContainer() {
      if (this.config.container === false) {
        return document.body;
      }
      if (Util.isElement(this.config.container)) {
        return $(this.config.container);
      }
      return $(document).find(this.config.container);
    };
    _proto._getAttachment = function _getAttachment(placement) {
      return AttachmentMap$1[placement.toUpperCase()];
    };
    _proto._setListeners = function _setListeners() {
      var _this4 = this;
      var triggers = this.config.trigger.split(' ');
      triggers.forEach(function (trigger) {
        if (trigger === 'click') {
          $(_this4.element).on(_this4.constructor.Event.CLICK, _this4.config.selector, function (event) {
            return _this4.toggle(event);
          });
        } else if (trigger !== Trigger.MANUAL) {
          var eventIn = trigger === Trigger.HOVER ? _this4.constructor.Event.MOUSEENTER : _this4.constructor.Event.FOCUSIN;
          var eventOut = trigger === Trigger.HOVER ? _this4.constructor.Event.MOUSELEAVE : _this4.constructor.Event.FOCUSOUT;
          $(_this4.element).on(eventIn, _this4.config.selector, function (event) {
            return _this4._enter(event);
          }).on(eventOut, _this4.config.selector, function (event) {
            return _this4._leave(event);
          });
        }
      });
      $(this.element).closest('.modal').on('hide.bs.modal', function () {
        if (_this4.element) {
          _this4.hide();
        }
      });
      if (this.config.selector) {
        this.config = _objectSpread({}, this.config, {
          trigger: 'manual',
          selector: ''
        });
      } else {
        this._fixTitle();
      }
    };
    _proto._fixTitle = function _fixTitle() {
      var titleType = _typeof(this.element.getAttribute('data-original-title'));
      if (this.element.getAttribute('title') || titleType !== 'string') {
        this.element.setAttribute('data-original-title', this.element.getAttribute('title') || '');
        this.element.setAttribute('title', '');
      }
    };
    _proto._enter = function _enter(event, context) {
      var dataKey = this.constructor.DATA_KEY;
      context = context || $(event.currentTarget).data(dataKey);
      if (!context) {
        context = new this.constructor(event.currentTarget, this._getDelegateConfig());
        $(event.currentTarget).data(dataKey, context);
      }
      if (event) {
        context._activeTrigger[event.type === 'focusin' ? Trigger.FOCUS : Trigger.HOVER] = true;
      }
      if ($(context.getTipElement()).hasClass(ClassName$6.SHOW) || context._hoverState === HoverState.SHOW) {
        context._hoverState = HoverState.SHOW;
        return;
      }
      clearTimeout(context._timeout);
      context._hoverState = HoverState.SHOW;
      if (!context.config.delay || !context.config.delay.show) {
        context.show();
        return;
      }
      context._timeout = setTimeout(function () {
        if (context._hoverState === HoverState.SHOW) {
          context.show();
        }
      }, context.config.delay.show);
    };
    _proto._leave = function _leave(event, context) {
      var dataKey = this.constructor.DATA_KEY;
      context = context || $(event.currentTarget).data(dataKey);
      if (!context) {
        context = new this.constructor(event.currentTarget, this._getDelegateConfig());
        $(event.currentTarget).data(dataKey, context);
      }
      if (event) {
        context._activeTrigger[event.type === 'focusout' ? Trigger.FOCUS : Trigger.HOVER] = false;
      }
      if (context._isWithActiveTrigger()) {
        return;
      }
      clearTimeout(context._timeout);
      context._hoverState = HoverState.OUT;
      if (!context.config.delay || !context.config.delay.hide) {
        context.hide();
        return;
      }
      context._timeout = setTimeout(function () {
        if (context._hoverState === HoverState.OUT) {
          context.hide();
        }
      }, context.config.delay.hide);
    };
    _proto._isWithActiveTrigger = function _isWithActiveTrigger() {
      for (var trigger in this._activeTrigger) {
        if (this._activeTrigger[trigger]) {
          return true;
        }
      }
      return false;
    };
    _proto._getConfig = function _getConfig(config) {
      var dataAttributes = $(this.element).data();
      Object.keys(dataAttributes).forEach(function (dataAttr) {
        if (DISALLOWED_ATTRIBUTES.indexOf(dataAttr) !== -1) {
          delete dataAttributes[dataAttr];
        }
      });
      config = _objectSpread({}, this.constructor.Default, dataAttributes, _typeof(config) === 'object' && config ? config : {});
      if (typeof config.delay === 'number') {
        config.delay = {
          show: config.delay,
          hide: config.delay
        };
      }
      if (typeof config.title === 'number') {
        config.title = config.title.toString();
      }
      if (typeof config.content === 'number') {
        config.content = config.content.toString();
      }
      Util.typeCheckConfig(NAME$6, config, this.constructor.DefaultType);
      if (config.sanitize) {
        config.template = sanitizeHtml(config.template, config.whiteList, config.sanitizeFn);
      }
      return config;
    };
    _proto._getDelegateConfig = function _getDelegateConfig() {
      var config = {};
      if (this.config) {
        for (var key in this.config) {
          if (this.constructor.Default[key] !== this.config[key]) {
            config[key] = this.config[key];
          }
        }
      }
      return config;
    };
    _proto._cleanTipClass = function _cleanTipClass() {
      var $tip = $(this.getTipElement());
      var tabClass = $tip.attr('class').match(BSCLS_PREFIX_REGEX);
      if (tabClass !== null && tabClass.length) {
        $tip.removeClass(tabClass.join(''));
      }
    };
    _proto._handlePopperPlacementChange = function _handlePopperPlacementChange(popperData) {
      var popperInstance = popperData.instance;
      this.tip = popperInstance.popper;
      this._cleanTipClass();
      this.addAttachmentClass(this._getAttachment(popperData.placement));
    };
    _proto._fixTransition = function _fixTransition() {
      var tip = this.getTipElement();
      var initConfigAnimation = this.config.animation;
      if (tip.getAttribute('x-placement') !== null) {
        return;
      }
      $(tip).removeClass(ClassName$6.FADE);
      this.config.animation = false;
      this.hide();
      this.show();
      this.config.animation = initConfigAnimation;
    } // Static
    ;
    Tooltip._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var data = $(this).data(DATA_KEY$6);
        var _config = _typeof(config) === 'object' && config;
        if (!data && /dispose|hide/.test(config)) {
          return;
        }
        if (!data) {
          data = new Tooltip(this, _config);
          $(this).data(DATA_KEY$6, data);
        }
        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }
          data[config]();
        }
      });
    };
    _createClass(Tooltip, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$6;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default$4;
      }
    }, {
      key: "NAME",
      get: function get() {
        return NAME$6;
      }
    }, {
      key: "DATA_KEY",
      get: function get() {
        return DATA_KEY$6;
      }
    }, {
      key: "Event",
      get: function get() {
        return Event$6;
      }
    }, {
      key: "EVENT_KEY",
      get: function get() {
        return EVENT_KEY$6;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return DefaultType$4;
      }
    }]);
    return Tooltip;
  }();
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME$6] = Tooltip._jQueryInterface;
  $.fn[NAME$6].Constructor = Tooltip;
  $.fn[NAME$6].noConflict = function () {
    $.fn[NAME$6] = JQUERY_NO_CONFLICT$6;
    return Tooltip._jQueryInterface;
  };

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME$7 = 'popover';
  var VERSION$7 = '4.3.1';
  var DATA_KEY$7 = 'bs.popover';
  var EVENT_KEY$7 = "." + DATA_KEY$7;
  var JQUERY_NO_CONFLICT$7 = $.fn[NAME$7];
  var CLASS_PREFIX$1 = 'bs-popover';
  var BSCLS_PREFIX_REGEX$1 = new RegExp("(^|\\s)" + CLASS_PREFIX$1 + "\\S+", 'g');
  var Default$5 = _objectSpread({}, Tooltip.Default, {
    placement: 'right',
    trigger: 'click',
    content: '',
    template: '<div class="popover" role="tooltip">' + '<div class="arrow"></div>' + '<h3 class="popover-header"></h3>' + '<div class="popover-body"></div></div>'
  });
  var DefaultType$5 = _objectSpread({}, Tooltip.DefaultType, {
    content: '(string|element|function)'
  });
  var ClassName$7 = {
    FADE: 'fade',
    SHOW: 'show'
  };
  var Selector$7 = {
    TITLE: '.popover-header',
    CONTENT: '.popover-body'
  };
  var Event$7 = {
    HIDE: "hide" + EVENT_KEY$7,
    HIDDEN: "hidden" + EVENT_KEY$7,
    SHOW: "show" + EVENT_KEY$7,
    SHOWN: "shown" + EVENT_KEY$7,
    INSERTED: "inserted" + EVENT_KEY$7,
    CLICK: "click" + EVENT_KEY$7,
    FOCUSIN: "focusin" + EVENT_KEY$7,
    FOCUSOUT: "focusout" + EVENT_KEY$7,
    MOUSEENTER: "mouseenter" + EVENT_KEY$7,
    MOUSELEAVE: "mouseleave" + EVENT_KEY$7
    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */
  };
  var Popover = /*#__PURE__*/
  function (_Tooltip) {
    _inheritsLoose(Popover, _Tooltip);
    function Popover() {
      return _Tooltip.apply(this, arguments) || this;
    }
    var _proto = Popover.prototype;

    // Overrides
    _proto.isWithContent = function isWithContent() {
      return this.getTitle() || this._getContent();
    };
    _proto.addAttachmentClass = function addAttachmentClass(attachment) {
      $(this.getTipElement()).addClass(CLASS_PREFIX$1 + "-" + attachment);
    };
    _proto.getTipElement = function getTipElement() {
      this.tip = this.tip || $(this.config.template)[0];
      return this.tip;
    };
    _proto.setContent = function setContent() {
      var $tip = $(this.getTipElement()); // We use append for html objects to maintain js events

      this.setElementContent($tip.find(Selector$7.TITLE), this.getTitle());
      var content = this._getContent();
      if (typeof content === 'function') {
        content = content.call(this.element);
      }
      this.setElementContent($tip.find(Selector$7.CONTENT), content);
      $tip.removeClass(ClassName$7.FADE + " " + ClassName$7.SHOW);
    } // Private
    ;
    _proto._getContent = function _getContent() {
      return this.element.getAttribute('data-content') || this.config.content;
    };
    _proto._cleanTipClass = function _cleanTipClass() {
      var $tip = $(this.getTipElement());
      var tabClass = $tip.attr('class').match(BSCLS_PREFIX_REGEX$1);
      if (tabClass !== null && tabClass.length > 0) {
        $tip.removeClass(tabClass.join(''));
      }
    } // Static
    ;
    Popover._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var data = $(this).data(DATA_KEY$7);
        var _config = _typeof(config) === 'object' ? config : null;
        if (!data && /dispose|hide/.test(config)) {
          return;
        }
        if (!data) {
          data = new Popover(this, _config);
          $(this).data(DATA_KEY$7, data);
        }
        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }
          data[config]();
        }
      });
    };
    _createClass(Popover, null, [{
      key: "VERSION",
      // Getters
      get: function get() {
        return VERSION$7;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default$5;
      }
    }, {
      key: "NAME",
      get: function get() {
        return NAME$7;
      }
    }, {
      key: "DATA_KEY",
      get: function get() {
        return DATA_KEY$7;
      }
    }, {
      key: "Event",
      get: function get() {
        return Event$7;
      }
    }, {
      key: "EVENT_KEY",
      get: function get() {
        return EVENT_KEY$7;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return DefaultType$5;
      }
    }]);
    return Popover;
  }(Tooltip);
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME$7] = Popover._jQueryInterface;
  $.fn[NAME$7].Constructor = Popover;
  $.fn[NAME$7].noConflict = function () {
    $.fn[NAME$7] = JQUERY_NO_CONFLICT$7;
    return Popover._jQueryInterface;
  };

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME$8 = 'scrollspy';
  var VERSION$8 = '4.3.1';
  var DATA_KEY$8 = 'bs.scrollspy';
  var EVENT_KEY$8 = "." + DATA_KEY$8;
  var DATA_API_KEY$6 = '.data-api';
  var JQUERY_NO_CONFLICT$8 = $.fn[NAME$8];
  var Default$6 = {
    offset: 10,
    method: 'auto',
    target: ''
  };
  var DefaultType$6 = {
    offset: 'number',
    method: 'string',
    target: '(string|element)'
  };
  var Event$8 = {
    ACTIVATE: "activate" + EVENT_KEY$8,
    SCROLL: "scroll" + EVENT_KEY$8,
    LOAD_DATA_API: "load" + EVENT_KEY$8 + DATA_API_KEY$6
  };
  var ClassName$8 = {
    DROPDOWN_ITEM: 'dropdown-item',
    DROPDOWN_MENU: 'dropdown-menu',
    ACTIVE: 'active'
  };
  var Selector$8 = {
    DATA_SPY: '[data-spy="scroll"]',
    ACTIVE: '.active',
    NAV_LIST_GROUP: '.nav, .list-group',
    NAV_LINKS: '.nav-link',
    NAV_ITEMS: '.nav-item',
    LIST_ITEMS: '.list-group-item',
    DROPDOWN: '.dropdown',
    DROPDOWN_ITEMS: '.dropdown-item',
    DROPDOWN_TOGGLE: '.dropdown-toggle'
  };
  var OffsetMethod = {
    OFFSET: 'offset',
    POSITION: 'position'
    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */
  };
  var ScrollSpy = /*#__PURE__*/
  function () {
    function ScrollSpy(element, config) {
      var _this = this;
      this._element = element;
      this._scrollElement = element.tagName === 'BODY' ? window : element;
      this._config = this._getConfig(config);
      this._selector = this._config.target + " " + Selector$8.NAV_LINKS + "," + (this._config.target + " " + Selector$8.LIST_ITEMS + ",") + (this._config.target + " " + Selector$8.DROPDOWN_ITEMS);
      this._offsets = [];
      this._targets = [];
      this._activeTarget = null;
      this._scrollHeight = 0;
      $(this._scrollElement).on(Event$8.SCROLL, function (event) {
        return _this._process(event);
      });
      this.refresh();
      this._process();
    } // Getters

    var _proto = ScrollSpy.prototype;

    // Public
    _proto.refresh = function refresh() {
      var _this2 = this;
      var autoMethod = this._scrollElement === this._scrollElement.window ? OffsetMethod.OFFSET : OffsetMethod.POSITION;
      var offsetMethod = this._config.method === 'auto' ? autoMethod : this._config.method;
      var offsetBase = offsetMethod === OffsetMethod.POSITION ? this._getScrollTop() : 0;
      this._offsets = [];
      this._targets = [];
      this._scrollHeight = this._getScrollHeight();
      var targets = [].slice.call(document.querySelectorAll(this._selector));
      targets.map(function (element) {
        var target;
        var targetSelector = Util.getSelectorFromElement(element);
        if (targetSelector) {
          target = document.querySelector(targetSelector);
        }
        if (target) {
          var targetBCR = target.getBoundingClientRect();
          if (targetBCR.width || targetBCR.height) {
            // TODO (fat): remove sketch reliance on jQuery position/offset
            return [$(target)[offsetMethod]().top + offsetBase, targetSelector];
          }
        }
        return null;
      }).filter(function (item) {
        return item;
      }).sort(function (a, b) {
        return a[0] - b[0];
      }).forEach(function (item) {
        _this2._offsets.push(item[0]);
        _this2._targets.push(item[1]);
      });
    };
    _proto.dispose = function dispose() {
      $.removeData(this._element, DATA_KEY$8);
      $(this._scrollElement).off(EVENT_KEY$8);
      this._element = null;
      this._scrollElement = null;
      this._config = null;
      this._selector = null;
      this._offsets = null;
      this._targets = null;
      this._activeTarget = null;
      this._scrollHeight = null;
    } // Private
    ;
    _proto._getConfig = function _getConfig(config) {
      config = _objectSpread({}, Default$6, _typeof(config) === 'object' && config ? config : {});
      if (typeof config.target !== 'string') {
        var id = $(config.target).attr('id');
        if (!id) {
          id = Util.getUID(NAME$8);
          $(config.target).attr('id', id);
        }
        config.target = "#" + id;
      }
      Util.typeCheckConfig(NAME$8, config, DefaultType$6);
      return config;
    };
    _proto._getScrollTop = function _getScrollTop() {
      return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop;
    };
    _proto._getScrollHeight = function _getScrollHeight() {
      return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
    };
    _proto._getOffsetHeight = function _getOffsetHeight() {
      return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height;
    };
    _proto._process = function _process() {
      var scrollTop = this._getScrollTop() + this._config.offset;
      var scrollHeight = this._getScrollHeight();
      var maxScroll = this._config.offset + scrollHeight - this._getOffsetHeight();
      if (this._scrollHeight !== scrollHeight) {
        this.refresh();
      }
      if (scrollTop >= maxScroll) {
        var target = this._targets[this._targets.length - 1];
        if (this._activeTarget !== target) {
          this._activate(target);
        }
        return;
      }
      if (this._activeTarget && scrollTop < this._offsets[0] && this._offsets[0] > 0) {
        this._activeTarget = null;
        this._clear();
        return;
      }
      var offsetLength = this._offsets.length;
      for (var i = offsetLength; i--;) {
        var isActiveTarget = this._activeTarget !== this._targets[i] && scrollTop >= this._offsets[i] && (typeof this._offsets[i + 1] === 'undefined' || scrollTop < this._offsets[i + 1]);
        if (isActiveTarget) {
          this._activate(this._targets[i]);
        }
      }
    };
    _proto._activate = function _activate(target) {
      this._activeTarget = target;
      this._clear();
      var queries = this._selector.split(',').map(function (selector) {
        return selector + "[data-target=\"" + target + "\"]," + selector + "[href=\"" + target + "\"]";
      });
      var $link = $([].slice.call(document.querySelectorAll(queries.join(','))));
      if ($link.hasClass(ClassName$8.DROPDOWN_ITEM)) {
        $link.closest(Selector$8.DROPDOWN).find(Selector$8.DROPDOWN_TOGGLE).addClass(ClassName$8.ACTIVE);
        $link.addClass(ClassName$8.ACTIVE);
      } else {
        // Set triggered link as active
        $link.addClass(ClassName$8.ACTIVE); // Set triggered links parents as active
        // With both <ul> and <nav> markup a parent is the previous sibling of any nav ancestor

        $link.parents(Selector$8.NAV_LIST_GROUP).prev(Selector$8.NAV_LINKS + ", " + Selector$8.LIST_ITEMS).addClass(ClassName$8.ACTIVE); // Handle special case when .nav-link is inside .nav-item

        $link.parents(Selector$8.NAV_LIST_GROUP).prev(Selector$8.NAV_ITEMS).children(Selector$8.NAV_LINKS).addClass(ClassName$8.ACTIVE);
      }
      $(this._scrollElement).trigger(Event$8.ACTIVATE, {
        relatedTarget: target
      });
    };
    _proto._clear = function _clear() {
      [].slice.call(document.querySelectorAll(this._selector)).filter(function (node) {
        return node.classList.contains(ClassName$8.ACTIVE);
      }).forEach(function (node) {
        return node.classList.remove(ClassName$8.ACTIVE);
      });
    } // Static
    ;
    ScrollSpy._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var data = $(this).data(DATA_KEY$8);
        var _config = _typeof(config) === 'object' && config;
        if (!data) {
          data = new ScrollSpy(this, _config);
          $(this).data(DATA_KEY$8, data);
        }
        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }
          data[config]();
        }
      });
    };
    _createClass(ScrollSpy, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$8;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default$6;
      }
    }]);
    return ScrollSpy;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */

  $(window).on(Event$8.LOAD_DATA_API, function () {
    var scrollSpys = [].slice.call(document.querySelectorAll(Selector$8.DATA_SPY));
    var scrollSpysLength = scrollSpys.length;
    for (var i = scrollSpysLength; i--;) {
      var $spy = $(scrollSpys[i]);
      ScrollSpy._jQueryInterface.call($spy, $spy.data());
    }
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME$8] = ScrollSpy._jQueryInterface;
  $.fn[NAME$8].Constructor = ScrollSpy;
  $.fn[NAME$8].noConflict = function () {
    $.fn[NAME$8] = JQUERY_NO_CONFLICT$8;
    return ScrollSpy._jQueryInterface;
  };

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME$9 = 'tab';
  var VERSION$9 = '4.3.1';
  var DATA_KEY$9 = 'bs.tab';
  var EVENT_KEY$9 = "." + DATA_KEY$9;
  var DATA_API_KEY$7 = '.data-api';
  var JQUERY_NO_CONFLICT$9 = $.fn[NAME$9];
  var Event$9 = {
    HIDE: "hide" + EVENT_KEY$9,
    HIDDEN: "hidden" + EVENT_KEY$9,
    SHOW: "show" + EVENT_KEY$9,
    SHOWN: "shown" + EVENT_KEY$9,
    CLICK_DATA_API: "click" + EVENT_KEY$9 + DATA_API_KEY$7
  };
  var ClassName$9 = {
    DROPDOWN_MENU: 'dropdown-menu',
    ACTIVE: 'active',
    DISABLED: 'disabled',
    FADE: 'fade',
    SHOW: 'show'
  };
  var Selector$9 = {
    DROPDOWN: '.dropdown',
    NAV_LIST_GROUP: '.nav, .list-group',
    ACTIVE: '.active',
    ACTIVE_UL: '> li > .active',
    DATA_TOGGLE: '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',
    DROPDOWN_TOGGLE: '.dropdown-toggle',
    DROPDOWN_ACTIVE_CHILD: '> .dropdown-menu .active'
    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */
  };
  var Tab = /*#__PURE__*/
  function () {
    function Tab(element) {
      this._element = element;
    } // Getters

    var _proto = Tab.prototype;

    // Public
    _proto.show = function show() {
      var _this = this;
      if (this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && $(this._element).hasClass(ClassName$9.ACTIVE) || $(this._element).hasClass(ClassName$9.DISABLED)) {
        return;
      }
      var target;
      var previous;
      var listElement = $(this._element).closest(Selector$9.NAV_LIST_GROUP)[0];
      var selector = Util.getSelectorFromElement(this._element);
      if (listElement) {
        var itemSelector = listElement.nodeName === 'UL' || listElement.nodeName === 'OL' ? Selector$9.ACTIVE_UL : Selector$9.ACTIVE;
        previous = $.makeArray($(listElement).find(itemSelector));
        previous = previous[previous.length - 1];
      }
      var hideEvent = $.Event(Event$9.HIDE, {
        relatedTarget: this._element
      });
      var showEvent = $.Event(Event$9.SHOW, {
        relatedTarget: previous
      });
      if (previous) {
        $(previous).trigger(hideEvent);
      }
      $(this._element).trigger(showEvent);
      if (showEvent.isDefaultPrevented() || hideEvent.isDefaultPrevented()) {
        return;
      }
      if (selector) {
        target = document.querySelector(selector);
      }
      this._activate(this._element, listElement);
      var complete = function complete() {
        var hiddenEvent = $.Event(Event$9.HIDDEN, {
          relatedTarget: _this._element
        });
        var shownEvent = $.Event(Event$9.SHOWN, {
          relatedTarget: previous
        });
        $(previous).trigger(hiddenEvent);
        $(_this._element).trigger(shownEvent);
      };
      if (target) {
        this._activate(target, target.parentNode, complete);
      } else {
        complete();
      }
    };
    _proto.dispose = function dispose() {
      $.removeData(this._element, DATA_KEY$9);
      this._element = null;
    } // Private
    ;
    _proto._activate = function _activate(element, container, callback) {
      var _this2 = this;
      var activeElements = container && (container.nodeName === 'UL' || container.nodeName === 'OL') ? $(container).find(Selector$9.ACTIVE_UL) : $(container).children(Selector$9.ACTIVE);
      var active = activeElements[0];
      var isTransitioning = callback && active && $(active).hasClass(ClassName$9.FADE);
      var complete = function complete() {
        return _this2._transitionComplete(element, active, callback);
      };
      if (active && isTransitioning) {
        var transitionDuration = Util.getTransitionDurationFromElement(active);
        $(active).removeClass(ClassName$9.SHOW).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
      } else {
        complete();
      }
    };
    _proto._transitionComplete = function _transitionComplete(element, active, callback) {
      if (active) {
        $(active).removeClass(ClassName$9.ACTIVE);
        var dropdownChild = $(active.parentNode).find(Selector$9.DROPDOWN_ACTIVE_CHILD)[0];
        if (dropdownChild) {
          $(dropdownChild).removeClass(ClassName$9.ACTIVE);
        }
        if (active.getAttribute('role') === 'tab') {
          active.setAttribute('aria-selected', false);
        }
      }
      $(element).addClass(ClassName$9.ACTIVE);
      if (element.getAttribute('role') === 'tab') {
        element.setAttribute('aria-selected', true);
      }
      Util.reflow(element);
      if (element.classList.contains(ClassName$9.FADE)) {
        element.classList.add(ClassName$9.SHOW);
      }
      if (element.parentNode && $(element.parentNode).hasClass(ClassName$9.DROPDOWN_MENU)) {
        var dropdownElement = $(element).closest(Selector$9.DROPDOWN)[0];
        if (dropdownElement) {
          var dropdownToggleList = [].slice.call(dropdownElement.querySelectorAll(Selector$9.DROPDOWN_TOGGLE));
          $(dropdownToggleList).addClass(ClassName$9.ACTIVE);
        }
        element.setAttribute('aria-expanded', true);
      }
      if (callback) {
        callback();
      }
    } // Static
    ;
    Tab._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var $this = $(this);
        var data = $this.data(DATA_KEY$9);
        if (!data) {
          data = new Tab(this);
          $this.data(DATA_KEY$9, data);
        }
        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }
          data[config]();
        }
      });
    };
    _createClass(Tab, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$9;
      }
    }]);
    return Tab;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */

  $(document).on(Event$9.CLICK_DATA_API, Selector$9.DATA_TOGGLE, function (event) {
    event.preventDefault();
    Tab._jQueryInterface.call($(this), 'show');
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME$9] = Tab._jQueryInterface;
  $.fn[NAME$9].Constructor = Tab;
  $.fn[NAME$9].noConflict = function () {
    $.fn[NAME$9] = JQUERY_NO_CONFLICT$9;
    return Tab._jQueryInterface;
  };

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME$a = 'toast';
  var VERSION$a = '4.3.1';
  var DATA_KEY$a = 'bs.toast';
  var EVENT_KEY$a = "." + DATA_KEY$a;
  var JQUERY_NO_CONFLICT$a = $.fn[NAME$a];
  var Event$a = {
    CLICK_DISMISS: "click.dismiss" + EVENT_KEY$a,
    HIDE: "hide" + EVENT_KEY$a,
    HIDDEN: "hidden" + EVENT_KEY$a,
    SHOW: "show" + EVENT_KEY$a,
    SHOWN: "shown" + EVENT_KEY$a
  };
  var ClassName$a = {
    FADE: 'fade',
    HIDE: 'hide',
    SHOW: 'show',
    SHOWING: 'showing'
  };
  var DefaultType$7 = {
    animation: 'boolean',
    autohide: 'boolean',
    delay: 'number'
  };
  var Default$7 = {
    animation: true,
    autohide: true,
    delay: 500
  };
  var Selector$a = {
    DATA_DISMISS: '[data-dismiss="toast"]'
    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */
  };
  var Toast = /*#__PURE__*/
  function () {
    function Toast(element, config) {
      this._element = element;
      this._config = this._getConfig(config);
      this._timeout = null;
      this._setListeners();
    } // Getters

    var _proto = Toast.prototype;

    // Public
    _proto.show = function show() {
      var _this = this;
      $(this._element).trigger(Event$a.SHOW);
      if (this._config.animation) {
        this._element.classList.add(ClassName$a.FADE);
      }
      var complete = function complete() {
        _this._element.classList.remove(ClassName$a.SHOWING);
        _this._element.classList.add(ClassName$a.SHOW);
        $(_this._element).trigger(Event$a.SHOWN);
        if (_this._config.autohide) {
          _this.hide();
        }
      };
      this._element.classList.remove(ClassName$a.HIDE);
      this._element.classList.add(ClassName$a.SHOWING);
      if (this._config.animation) {
        var transitionDuration = Util.getTransitionDurationFromElement(this._element);
        $(this._element).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
      } else {
        complete();
      }
    };
    _proto.hide = function hide(withoutTimeout) {
      var _this2 = this;
      if (!this._element.classList.contains(ClassName$a.SHOW)) {
        return;
      }
      $(this._element).trigger(Event$a.HIDE);
      if (withoutTimeout) {
        this._close();
      } else {
        this._timeout = setTimeout(function () {
          _this2._close();
        }, this._config.delay);
      }
    };
    _proto.dispose = function dispose() {
      clearTimeout(this._timeout);
      this._timeout = null;
      if (this._element.classList.contains(ClassName$a.SHOW)) {
        this._element.classList.remove(ClassName$a.SHOW);
      }
      $(this._element).off(Event$a.CLICK_DISMISS);
      $.removeData(this._element, DATA_KEY$a);
      this._element = null;
      this._config = null;
    } // Private
    ;
    _proto._getConfig = function _getConfig(config) {
      config = _objectSpread({}, Default$7, $(this._element).data(), _typeof(config) === 'object' && config ? config : {});
      Util.typeCheckConfig(NAME$a, config, this.constructor.DefaultType);
      return config;
    };
    _proto._setListeners = function _setListeners() {
      var _this3 = this;
      $(this._element).on(Event$a.CLICK_DISMISS, Selector$a.DATA_DISMISS, function () {
        return _this3.hide(true);
      });
    };
    _proto._close = function _close() {
      var _this4 = this;
      var complete = function complete() {
        _this4._element.classList.add(ClassName$a.HIDE);
        $(_this4._element).trigger(Event$a.HIDDEN);
      };
      this._element.classList.remove(ClassName$a.SHOW);
      if (this._config.animation) {
        var transitionDuration = Util.getTransitionDurationFromElement(this._element);
        $(this._element).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
      } else {
        complete();
      }
    } // Static
    ;
    Toast._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var $element = $(this);
        var data = $element.data(DATA_KEY$a);
        var _config = _typeof(config) === 'object' && config;
        if (!data) {
          data = new Toast(this, _config);
          $element.data(DATA_KEY$a, data);
        }
        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }
          data[config](this);
        }
      });
    };
    _createClass(Toast, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$a;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return DefaultType$7;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default$7;
      }
    }]);
    return Toast;
  }();
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME$a] = Toast._jQueryInterface;
  $.fn[NAME$a].Constructor = Toast;
  $.fn[NAME$a].noConflict = function () {
    $.fn[NAME$a] = JQUERY_NO_CONFLICT$a;
    return Toast._jQueryInterface;
  };

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v4.3.1): index.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
   * --------------------------------------------------------------------------
   */

  (function () {
    if (typeof $ === 'undefined') {
      throw new TypeError('Bootstrap\'s JavaScript requires jQuery. jQuery must be included before Bootstrap\'s JavaScript.');
    }
    var version = $.fn.jquery.split(' ')[0].split('.');
    var minMajor = 1;
    var ltMajor = 2;
    var minMinor = 9;
    var minPatch = 1;
    var maxMajor = 4;
    if (version[0] < ltMajor && version[1] < minMinor || version[0] === minMajor && version[1] === minMinor && version[2] < minPatch || version[0] >= maxMajor) {
      throw new Error('Bootstrap\'s JavaScript requires at least jQuery v1.9.1 but less than v4.0.0');
    }
  })();
  exports.Util = Util;
  exports.Alert = Alert;
  exports.Button = Button;
  exports.Carousel = Carousel;
  exports.Collapse = Collapse;
  exports.Dropdown = Dropdown;
  exports.Modal = Modal;
  exports.Popover = Popover;
  exports.Scrollspy = ScrollSpy;
  exports.Tab = Tab;
  exports.Toast = Toast;
  exports.Tooltip = Tooltip;
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
});

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_internals_export_js","vendors-node_modules_core-js_internals_add-to-unscopables_js-node_modules_core-js_internals_a-09983a","vendors-node_modules_core-js_internals_array-slice_js-node_modules_core-js_internals_function-caeab8","vendors-node_modules_core-js_modules_es_string_iterator_js-node_modules_core-js_modules_es_sy-23bad7","vendors-node_modules_jquery_dist_jquery_js","vendors-node_modules_core-js_internals_advance-string-index_js-node_modules_core-js_internals-27e96d","vendors-node_modules_core-js_modules_es_regexp_constructor_js-node_modules_core-js_modules_es-de7eec","vendors-node_modules_core-js_modules_es_array_filter_js-node_modules_core-js_modules_es_array-da338d","vendors-node_modules_popper_js_dist_esm_popper_js-node_modules_core-js_modules_es_array_conca-6eac64"], () => (__webpack_exec__("./assets/css/portoadmin/vendor/bootstrap/js/bootstrap.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ZUcsUUFBMUMsSUFBc0RILE9BQU8sQ0FBQyxDQUFELENBQVAsR0FBYUksUUFBcEgsSUFBZ0lKLE9BQU8sQ0FBQyxDQUFELENBQVAsSUFBY0ssUUFBbEosRUFBNEo7TUFDMUosTUFBTSxJQUFJbHZCLEtBQUosQ0FBVSw4RUFBVixDQUFOO0lBQ0Q7RUFDRixDQWZEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4uLy4uL2pzL3NyYy91dGlsLmpzIiwid2VicGFjazovLy8uLi8uLi9qcy9zcmMvYWxlcnQuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2pzL3NyYy9idXR0b24uanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2pzL3NyYy9jYXJvdXNlbC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vanMvc3JjL2NvbGxhcHNlLmpzIiwid2VicGFjazovLy8uLi8uLi9qcy9zcmMvZHJvcGRvd24uanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2pzL3NyYy9tb2RhbC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vanMvc3JjL3Rvb2xzL3Nhbml0aXplci5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vanMvc3JjL3Rvb2x0aXAuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2pzL3NyYy9wb3BvdmVyLmpzIiwid2VicGFjazovLy8uLi8uLi9qcy9zcmMvc2Nyb2xsc3B5LmpzIiwid2VicGFjazovLy8uLi8uLi9qcy9zcmMvdGFiLmpzIiwid2VicGFjazovLy8uLi8uLi9qcy9zcmMvdG9hc3QuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2pzL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBCb290c3RyYXAgKHY0LjMuMSk6IHV0aWwuanNcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFzdGVyL0xJQ0VOU0UpXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmltcG9ydCAkIGZyb20gJ2pxdWVyeSdcblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIFByaXZhdGUgVHJhbnNpdGlvbkVuZCBIZWxwZXJzXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5jb25zdCBUUkFOU0lUSU9OX0VORCA9ICd0cmFuc2l0aW9uZW5kJ1xuY29uc3QgTUFYX1VJRCA9IDEwMDAwMDBcbmNvbnN0IE1JTExJU0VDT05EU19NVUxUSVBMSUVSID0gMTAwMFxuXG4vLyBTaG91dG91dCBBbmd1c0Nyb2xsIChodHRwczovL2dvby5nbC9weHdRR3ApXG5mdW5jdGlvbiB0b1R5cGUob2JqKSB7XG4gIHJldHVybiB7fS50b1N0cmluZy5jYWxsKG9iaikubWF0Y2goL1xccyhbYS16XSspL2kpWzFdLnRvTG93ZXJDYXNlKClcbn1cblxuZnVuY3Rpb24gZ2V0U3BlY2lhbFRyYW5zaXRpb25FbmRFdmVudCgpIHtcbiAgcmV0dXJuIHtcbiAgICBiaW5kVHlwZTogVFJBTlNJVElPTl9FTkQsXG4gICAgZGVsZWdhdGVUeXBlOiBUUkFOU0lUSU9OX0VORCxcbiAgICBoYW5kbGUoZXZlbnQpIHtcbiAgICAgIGlmICgkKGV2ZW50LnRhcmdldCkuaXModGhpcykpIHtcbiAgICAgICAgcmV0dXJuIGV2ZW50LmhhbmRsZU9iai5oYW5kbGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgLy8gZXNsaW50LWRpc2FibGUtbGluZSBwcmVmZXItcmVzdC1wYXJhbXNcbiAgICAgIH1cbiAgICAgIHJldHVybiB1bmRlZmluZWQgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZmluZWRcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gdHJhbnNpdGlvbkVuZEVtdWxhdG9yKGR1cmF0aW9uKSB7XG4gIGxldCBjYWxsZWQgPSBmYWxzZVxuXG4gICQodGhpcykub25lKFV0aWwuVFJBTlNJVElPTl9FTkQsICgpID0+IHtcbiAgICBjYWxsZWQgPSB0cnVlXG4gIH0pXG5cbiAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgaWYgKCFjYWxsZWQpIHtcbiAgICAgIFV0aWwudHJpZ2dlclRyYW5zaXRpb25FbmQodGhpcylcbiAgICB9XG4gIH0sIGR1cmF0aW9uKVxuXG4gIHJldHVybiB0aGlzXG59XG5cbmZ1bmN0aW9uIHNldFRyYW5zaXRpb25FbmRTdXBwb3J0KCkge1xuICAkLmZuLmVtdWxhdGVUcmFuc2l0aW9uRW5kID0gdHJhbnNpdGlvbkVuZEVtdWxhdG9yXG4gICQuZXZlbnQuc3BlY2lhbFtVdGlsLlRSQU5TSVRJT05fRU5EXSA9IGdldFNwZWNpYWxUcmFuc2l0aW9uRW5kRXZlbnQoKVxufVxuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBQdWJsaWMgVXRpbCBBcGlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuY29uc3QgVXRpbCA9IHtcblxuICBUUkFOU0lUSU9OX0VORDogJ2JzVHJhbnNpdGlvbkVuZCcsXG5cbiAgZ2V0VUlEKHByZWZpeCkge1xuICAgIGRvIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1iaXR3aXNlXG4gICAgICBwcmVmaXggKz0gfn4oTWF0aC5yYW5kb20oKSAqIE1BWF9VSUQpIC8vIFwifn5cIiBhY3RzIGxpa2UgYSBmYXN0ZXIgTWF0aC5mbG9vcigpIGhlcmVcbiAgICB9IHdoaWxlIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChwcmVmaXgpKVxuICAgIHJldHVybiBwcmVmaXhcbiAgfSxcblxuICBnZXRTZWxlY3RvckZyb21FbGVtZW50KGVsZW1lbnQpIHtcbiAgICBsZXQgc2VsZWN0b3IgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS10YXJnZXQnKVxuXG4gICAgaWYgKCFzZWxlY3RvciB8fCBzZWxlY3RvciA9PT0gJyMnKSB7XG4gICAgICBjb25zdCBocmVmQXR0ciA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdocmVmJylcbiAgICAgIHNlbGVjdG9yID0gaHJlZkF0dHIgJiYgaHJlZkF0dHIgIT09ICcjJyA/IGhyZWZBdHRyLnRyaW0oKSA6ICcnXG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKSA/IHNlbGVjdG9yIDogbnVsbFxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG4gIH0sXG5cbiAgZ2V0VHJhbnNpdGlvbkR1cmF0aW9uRnJvbUVsZW1lbnQoZWxlbWVudCkge1xuICAgIGlmICghZWxlbWVudCkge1xuICAgICAgcmV0dXJuIDBcbiAgICB9XG5cbiAgICAvLyBHZXQgdHJhbnNpdGlvbi1kdXJhdGlvbiBvZiB0aGUgZWxlbWVudFxuICAgIGxldCB0cmFuc2l0aW9uRHVyYXRpb24gPSAkKGVsZW1lbnQpLmNzcygndHJhbnNpdGlvbi1kdXJhdGlvbicpXG4gICAgbGV0IHRyYW5zaXRpb25EZWxheSA9ICQoZWxlbWVudCkuY3NzKCd0cmFuc2l0aW9uLWRlbGF5JylcblxuICAgIGNvbnN0IGZsb2F0VHJhbnNpdGlvbkR1cmF0aW9uID0gcGFyc2VGbG9hdCh0cmFuc2l0aW9uRHVyYXRpb24pXG4gICAgY29uc3QgZmxvYXRUcmFuc2l0aW9uRGVsYXkgPSBwYXJzZUZsb2F0KHRyYW5zaXRpb25EZWxheSlcblxuICAgIC8vIFJldHVybiAwIGlmIGVsZW1lbnQgb3IgdHJhbnNpdGlvbiBkdXJhdGlvbiBpcyBub3QgZm91bmRcbiAgICBpZiAoIWZsb2F0VHJhbnNpdGlvbkR1cmF0aW9uICYmICFmbG9hdFRyYW5zaXRpb25EZWxheSkge1xuICAgICAgcmV0dXJuIDBcbiAgICB9XG5cbiAgICAvLyBJZiBtdWx0aXBsZSBkdXJhdGlvbnMgYXJlIGRlZmluZWQsIHRha2UgdGhlIGZpcnN0XG4gICAgdHJhbnNpdGlvbkR1cmF0aW9uID0gdHJhbnNpdGlvbkR1cmF0aW9uLnNwbGl0KCcsJylbMF1cbiAgICB0cmFuc2l0aW9uRGVsYXkgPSB0cmFuc2l0aW9uRGVsYXkuc3BsaXQoJywnKVswXVxuXG4gICAgcmV0dXJuIChwYXJzZUZsb2F0KHRyYW5zaXRpb25EdXJhdGlvbikgKyBwYXJzZUZsb2F0KHRyYW5zaXRpb25EZWxheSkpICogTUlMTElTRUNPTkRTX01VTFRJUExJRVJcbiAgfSxcblxuICByZWZsb3coZWxlbWVudCkge1xuICAgIHJldHVybiBlbGVtZW50Lm9mZnNldEhlaWdodFxuICB9LFxuXG4gIHRyaWdnZXJUcmFuc2l0aW9uRW5kKGVsZW1lbnQpIHtcbiAgICAkKGVsZW1lbnQpLnRyaWdnZXIoVFJBTlNJVElPTl9FTkQpXG4gIH0sXG5cbiAgLy8gVE9ETzogUmVtb3ZlIGluIHY1XG4gIHN1cHBvcnRzVHJhbnNpdGlvbkVuZCgpIHtcbiAgICByZXR1cm4gQm9vbGVhbihUUkFOU0lUSU9OX0VORClcbiAgfSxcblxuICBpc0VsZW1lbnQob2JqKSB7XG4gICAgcmV0dXJuIChvYmpbMF0gfHwgb2JqKS5ub2RlVHlwZVxuICB9LFxuXG4gIHR5cGVDaGVja0NvbmZpZyhjb21wb25lbnROYW1lLCBjb25maWcsIGNvbmZpZ1R5cGVzKSB7XG4gICAgZm9yIChjb25zdCBwcm9wZXJ0eSBpbiBjb25maWdUeXBlcykge1xuICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChjb25maWdUeXBlcywgcHJvcGVydHkpKSB7XG4gICAgICAgIGNvbnN0IGV4cGVjdGVkVHlwZXMgPSBjb25maWdUeXBlc1twcm9wZXJ0eV1cbiAgICAgICAgY29uc3QgdmFsdWUgICAgICAgICA9IGNvbmZpZ1twcm9wZXJ0eV1cbiAgICAgICAgY29uc3QgdmFsdWVUeXBlICAgICA9IHZhbHVlICYmIFV0aWwuaXNFbGVtZW50KHZhbHVlKVxuICAgICAgICAgID8gJ2VsZW1lbnQnIDogdG9UeXBlKHZhbHVlKVxuXG4gICAgICAgIGlmICghbmV3IFJlZ0V4cChleHBlY3RlZFR5cGVzKS50ZXN0KHZhbHVlVHlwZSkpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICBgJHtjb21wb25lbnROYW1lLnRvVXBwZXJDYXNlKCl9OiBgICtcbiAgICAgICAgICAgIGBPcHRpb24gXCIke3Byb3BlcnR5fVwiIHByb3ZpZGVkIHR5cGUgXCIke3ZhbHVlVHlwZX1cIiBgICtcbiAgICAgICAgICAgIGBidXQgZXhwZWN0ZWQgdHlwZSBcIiR7ZXhwZWN0ZWRUeXBlc31cIi5gKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9LFxuXG4gIGZpbmRTaGFkb3dSb290KGVsZW1lbnQpIHtcbiAgICBpZiAoIWRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5hdHRhY2hTaGFkb3cpIHtcbiAgICAgIHJldHVybiBudWxsXG4gICAgfVxuXG4gICAgLy8gQ2FuIGZpbmQgdGhlIHNoYWRvdyByb290IG90aGVyd2lzZSBpdCdsbCByZXR1cm4gdGhlIGRvY3VtZW50XG4gICAgaWYgKHR5cGVvZiBlbGVtZW50LmdldFJvb3ROb2RlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjb25zdCByb290ID0gZWxlbWVudC5nZXRSb290Tm9kZSgpXG4gICAgICByZXR1cm4gcm9vdCBpbnN0YW5jZW9mIFNoYWRvd1Jvb3QgPyByb290IDogbnVsbFxuICAgIH1cblxuICAgIGlmIChlbGVtZW50IGluc3RhbmNlb2YgU2hhZG93Um9vdCkge1xuICAgICAgcmV0dXJuIGVsZW1lbnRcbiAgICB9XG5cbiAgICAvLyB3aGVuIHdlIGRvbid0IGZpbmQgYSBzaGFkb3cgcm9vdFxuICAgIGlmICghZWxlbWVudC5wYXJlbnROb2RlKSB7XG4gICAgICByZXR1cm4gbnVsbFxuICAgIH1cblxuICAgIHJldHVybiBVdGlsLmZpbmRTaGFkb3dSb290KGVsZW1lbnQucGFyZW50Tm9kZSlcbiAgfVxufVxuXG5zZXRUcmFuc2l0aW9uRW5kU3VwcG9ydCgpXG5cbmV4cG9ydCBkZWZhdWx0IFV0aWxcbiIsIi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEJvb3RzdHJhcCAodjQuMy4xKTogYWxlcnQuanNcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFzdGVyL0xJQ0VOU0UpXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmltcG9ydCAkIGZyb20gJ2pxdWVyeSdcbmltcG9ydCBVdGlsIGZyb20gJy4vdXRpbCdcblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIENvbnN0YW50c1xuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuY29uc3QgTkFNRSAgICAgICAgICAgICAgICA9ICdhbGVydCdcbmNvbnN0IFZFUlNJT04gICAgICAgICAgICAgPSAnNC4zLjEnXG5jb25zdCBEQVRBX0tFWSAgICAgICAgICAgID0gJ2JzLmFsZXJ0J1xuY29uc3QgRVZFTlRfS0VZICAgICAgICAgICA9IGAuJHtEQVRBX0tFWX1gXG5jb25zdCBEQVRBX0FQSV9LRVkgICAgICAgID0gJy5kYXRhLWFwaSdcbmNvbnN0IEpRVUVSWV9OT19DT05GTElDVCAgPSAkLmZuW05BTUVdXG5cbmNvbnN0IFNlbGVjdG9yID0ge1xuICBESVNNSVNTIDogJ1tkYXRhLWRpc21pc3M9XCJhbGVydFwiXSdcbn1cblxuY29uc3QgRXZlbnQgPSB7XG4gIENMT1NFICAgICAgICAgIDogYGNsb3NlJHtFVkVOVF9LRVl9YCxcbiAgQ0xPU0VEICAgICAgICAgOiBgY2xvc2VkJHtFVkVOVF9LRVl9YCxcbiAgQ0xJQ0tfREFUQV9BUEkgOiBgY2xpY2ske0VWRU5UX0tFWX0ke0RBVEFfQVBJX0tFWX1gXG59XG5cbmNvbnN0IENsYXNzTmFtZSA9IHtcbiAgQUxFUlQgOiAnYWxlcnQnLFxuICBGQURFICA6ICdmYWRlJyxcbiAgU0hPVyAgOiAnc2hvdydcbn1cblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIENsYXNzIERlZmluaXRpb25cbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmNsYXNzIEFsZXJ0IHtcbiAgY29uc3RydWN0b3IoZWxlbWVudCkge1xuICAgIHRoaXMuX2VsZW1lbnQgPSBlbGVtZW50XG4gIH1cblxuICAvLyBHZXR0ZXJzXG5cbiAgc3RhdGljIGdldCBWRVJTSU9OKCkge1xuICAgIHJldHVybiBWRVJTSU9OXG4gIH1cblxuICAvLyBQdWJsaWNcblxuICBjbG9zZShlbGVtZW50KSB7XG4gICAgbGV0IHJvb3RFbGVtZW50ID0gdGhpcy5fZWxlbWVudFxuICAgIGlmIChlbGVtZW50KSB7XG4gICAgICByb290RWxlbWVudCA9IHRoaXMuX2dldFJvb3RFbGVtZW50KGVsZW1lbnQpXG4gICAgfVxuXG4gICAgY29uc3QgY3VzdG9tRXZlbnQgPSB0aGlzLl90cmlnZ2VyQ2xvc2VFdmVudChyb290RWxlbWVudClcblxuICAgIGlmIChjdXN0b21FdmVudC5pc0RlZmF1bHRQcmV2ZW50ZWQoKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5fcmVtb3ZlRWxlbWVudChyb290RWxlbWVudClcbiAgfVxuXG4gIGRpc3Bvc2UoKSB7XG4gICAgJC5yZW1vdmVEYXRhKHRoaXMuX2VsZW1lbnQsIERBVEFfS0VZKVxuICAgIHRoaXMuX2VsZW1lbnQgPSBudWxsXG4gIH1cblxuICAvLyBQcml2YXRlXG5cbiAgX2dldFJvb3RFbGVtZW50KGVsZW1lbnQpIHtcbiAgICBjb25zdCBzZWxlY3RvciA9IFV0aWwuZ2V0U2VsZWN0b3JGcm9tRWxlbWVudChlbGVtZW50KVxuICAgIGxldCBwYXJlbnQgICAgID0gZmFsc2VcblxuICAgIGlmIChzZWxlY3Rvcikge1xuICAgICAgcGFyZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3RvcilcbiAgICB9XG5cbiAgICBpZiAoIXBhcmVudCkge1xuICAgICAgcGFyZW50ID0gJChlbGVtZW50KS5jbG9zZXN0KGAuJHtDbGFzc05hbWUuQUxFUlR9YClbMF1cbiAgICB9XG5cbiAgICByZXR1cm4gcGFyZW50XG4gIH1cblxuICBfdHJpZ2dlckNsb3NlRXZlbnQoZWxlbWVudCkge1xuICAgIGNvbnN0IGNsb3NlRXZlbnQgPSAkLkV2ZW50KEV2ZW50LkNMT1NFKVxuXG4gICAgJChlbGVtZW50KS50cmlnZ2VyKGNsb3NlRXZlbnQpXG4gICAgcmV0dXJuIGNsb3NlRXZlbnRcbiAgfVxuXG4gIF9yZW1vdmVFbGVtZW50KGVsZW1lbnQpIHtcbiAgICAkKGVsZW1lbnQpLnJlbW92ZUNsYXNzKENsYXNzTmFtZS5TSE9XKVxuXG4gICAgaWYgKCEkKGVsZW1lbnQpLmhhc0NsYXNzKENsYXNzTmFtZS5GQURFKSkge1xuICAgICAgdGhpcy5fZGVzdHJveUVsZW1lbnQoZWxlbWVudClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHRyYW5zaXRpb25EdXJhdGlvbiA9IFV0aWwuZ2V0VHJhbnNpdGlvbkR1cmF0aW9uRnJvbUVsZW1lbnQoZWxlbWVudClcblxuICAgICQoZWxlbWVudClcbiAgICAgIC5vbmUoVXRpbC5UUkFOU0lUSU9OX0VORCwgKGV2ZW50KSA9PiB0aGlzLl9kZXN0cm95RWxlbWVudChlbGVtZW50LCBldmVudCkpXG4gICAgICAuZW11bGF0ZVRyYW5zaXRpb25FbmQodHJhbnNpdGlvbkR1cmF0aW9uKVxuICB9XG5cbiAgX2Rlc3Ryb3lFbGVtZW50KGVsZW1lbnQpIHtcbiAgICAkKGVsZW1lbnQpXG4gICAgICAuZGV0YWNoKClcbiAgICAgIC50cmlnZ2VyKEV2ZW50LkNMT1NFRClcbiAgICAgIC5yZW1vdmUoKVxuICB9XG5cbiAgLy8gU3RhdGljXG5cbiAgc3RhdGljIF9qUXVlcnlJbnRlcmZhY2UoY29uZmlnKSB7XG4gICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICBjb25zdCAkZWxlbWVudCA9ICQodGhpcylcbiAgICAgIGxldCBkYXRhICAgICAgID0gJGVsZW1lbnQuZGF0YShEQVRBX0tFWSlcblxuICAgICAgaWYgKCFkYXRhKSB7XG4gICAgICAgIGRhdGEgPSBuZXcgQWxlcnQodGhpcylcbiAgICAgICAgJGVsZW1lbnQuZGF0YShEQVRBX0tFWSwgZGF0YSlcbiAgICAgIH1cblxuICAgICAgaWYgKGNvbmZpZyA9PT0gJ2Nsb3NlJykge1xuICAgICAgICBkYXRhW2NvbmZpZ10odGhpcylcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgc3RhdGljIF9oYW5kbGVEaXNtaXNzKGFsZXJ0SW5zdGFuY2UpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBpZiAoZXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgfVxuXG4gICAgICBhbGVydEluc3RhbmNlLmNsb3NlKHRoaXMpXG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBEYXRhIEFwaSBpbXBsZW1lbnRhdGlvblxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuJChkb2N1bWVudCkub24oXG4gIEV2ZW50LkNMSUNLX0RBVEFfQVBJLFxuICBTZWxlY3Rvci5ESVNNSVNTLFxuICBBbGVydC5faGFuZGxlRGlzbWlzcyhuZXcgQWxlcnQoKSlcbilcblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIGpRdWVyeVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuJC5mbltOQU1FXSAgICAgICAgICAgICA9IEFsZXJ0Ll9qUXVlcnlJbnRlcmZhY2VcbiQuZm5bTkFNRV0uQ29uc3RydWN0b3IgPSBBbGVydFxuJC5mbltOQU1FXS5ub0NvbmZsaWN0ICA9ICgpID0+IHtcbiAgJC5mbltOQU1FXSA9IEpRVUVSWV9OT19DT05GTElDVFxuICByZXR1cm4gQWxlcnQuX2pRdWVyeUludGVyZmFjZVxufVxuXG5leHBvcnQgZGVmYXVsdCBBbGVydFxuIiwiLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQm9vdHN0cmFwICh2NC4zLjEpOiBidXR0b24uanNcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFzdGVyL0xJQ0VOU0UpXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmltcG9ydCAkIGZyb20gJ2pxdWVyeSdcblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIENvbnN0YW50c1xuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuY29uc3QgTkFNRSAgICAgICAgICAgICAgICA9ICdidXR0b24nXG5jb25zdCBWRVJTSU9OICAgICAgICAgICAgID0gJzQuMy4xJ1xuY29uc3QgREFUQV9LRVkgICAgICAgICAgICA9ICdicy5idXR0b24nXG5jb25zdCBFVkVOVF9LRVkgICAgICAgICAgID0gYC4ke0RBVEFfS0VZfWBcbmNvbnN0IERBVEFfQVBJX0tFWSAgICAgICAgPSAnLmRhdGEtYXBpJ1xuY29uc3QgSlFVRVJZX05PX0NPTkZMSUNUICA9ICQuZm5bTkFNRV1cblxuY29uc3QgQ2xhc3NOYW1lID0ge1xuICBBQ1RJVkUgOiAnYWN0aXZlJyxcbiAgQlVUVE9OIDogJ2J0bicsXG4gIEZPQ1VTICA6ICdmb2N1cydcbn1cblxuY29uc3QgU2VsZWN0b3IgPSB7XG4gIERBVEFfVE9HR0xFX0NBUlJPVCA6ICdbZGF0YS10b2dnbGVePVwiYnV0dG9uXCJdJyxcbiAgREFUQV9UT0dHTEUgICAgICAgIDogJ1tkYXRhLXRvZ2dsZT1cImJ1dHRvbnNcIl0nLFxuICBJTlBVVCAgICAgICAgICAgICAgOiAnaW5wdXQ6bm90KFt0eXBlPVwiaGlkZGVuXCJdKScsXG4gIEFDVElWRSAgICAgICAgICAgICA6ICcuYWN0aXZlJyxcbiAgQlVUVE9OICAgICAgICAgICAgIDogJy5idG4nXG59XG5cbmNvbnN0IEV2ZW50ID0ge1xuICBDTElDS19EQVRBX0FQSSAgICAgIDogYGNsaWNrJHtFVkVOVF9LRVl9JHtEQVRBX0FQSV9LRVl9YCxcbiAgRk9DVVNfQkxVUl9EQVRBX0FQSSA6IGBmb2N1cyR7RVZFTlRfS0VZfSR7REFUQV9BUElfS0VZfSBgICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYGJsdXIke0VWRU5UX0tFWX0ke0RBVEFfQVBJX0tFWX1gXG59XG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBDbGFzcyBEZWZpbml0aW9uXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5jbGFzcyBCdXR0b24ge1xuICBjb25zdHJ1Y3RvcihlbGVtZW50KSB7XG4gICAgdGhpcy5fZWxlbWVudCA9IGVsZW1lbnRcbiAgfVxuXG4gIC8vIEdldHRlcnNcblxuICBzdGF0aWMgZ2V0IFZFUlNJT04oKSB7XG4gICAgcmV0dXJuIFZFUlNJT05cbiAgfVxuXG4gIC8vIFB1YmxpY1xuXG4gIHRvZ2dsZSgpIHtcbiAgICBsZXQgdHJpZ2dlckNoYW5nZUV2ZW50ID0gdHJ1ZVxuICAgIGxldCBhZGRBcmlhUHJlc3NlZCA9IHRydWVcbiAgICBjb25zdCByb290RWxlbWVudCA9ICQodGhpcy5fZWxlbWVudCkuY2xvc2VzdChcbiAgICAgIFNlbGVjdG9yLkRBVEFfVE9HR0xFXG4gICAgKVswXVxuXG4gICAgaWYgKHJvb3RFbGVtZW50KSB7XG4gICAgICBjb25zdCBpbnB1dCA9IHRoaXMuX2VsZW1lbnQucXVlcnlTZWxlY3RvcihTZWxlY3Rvci5JTlBVVClcblxuICAgICAgaWYgKGlucHV0KSB7XG4gICAgICAgIGlmIChpbnB1dC50eXBlID09PSAncmFkaW8nKSB7XG4gICAgICAgICAgaWYgKGlucHV0LmNoZWNrZWQgJiZcbiAgICAgICAgICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKENsYXNzTmFtZS5BQ1RJVkUpKSB7XG4gICAgICAgICAgICB0cmlnZ2VyQ2hhbmdlRXZlbnQgPSBmYWxzZVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBhY3RpdmVFbGVtZW50ID0gcm9vdEVsZW1lbnQucXVlcnlTZWxlY3RvcihTZWxlY3Rvci5BQ1RJVkUpXG5cbiAgICAgICAgICAgIGlmIChhY3RpdmVFbGVtZW50KSB7XG4gICAgICAgICAgICAgICQoYWN0aXZlRWxlbWVudCkucmVtb3ZlQ2xhc3MoQ2xhc3NOYW1lLkFDVElWRSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHJpZ2dlckNoYW5nZUV2ZW50KSB7XG4gICAgICAgICAgaWYgKGlucHV0Lmhhc0F0dHJpYnV0ZSgnZGlzYWJsZWQnKSB8fFxuICAgICAgICAgICAgcm9vdEVsZW1lbnQuaGFzQXR0cmlidXRlKCdkaXNhYmxlZCcpIHx8XG4gICAgICAgICAgICBpbnB1dC5jbGFzc0xpc3QuY29udGFpbnMoJ2Rpc2FibGVkJykgfHxcbiAgICAgICAgICAgIHJvb3RFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnZGlzYWJsZWQnKSkge1xuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgfVxuICAgICAgICAgIGlucHV0LmNoZWNrZWQgPSAhdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoQ2xhc3NOYW1lLkFDVElWRSlcbiAgICAgICAgICAkKGlucHV0KS50cmlnZ2VyKCdjaGFuZ2UnKVxuICAgICAgICB9XG5cbiAgICAgICAgaW5wdXQuZm9jdXMoKVxuICAgICAgICBhZGRBcmlhUHJlc3NlZCA9IGZhbHNlXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGFkZEFyaWFQcmVzc2VkKSB7XG4gICAgICB0aGlzLl9lbGVtZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1wcmVzc2VkJyxcbiAgICAgICAgIXRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKENsYXNzTmFtZS5BQ1RJVkUpKVxuICAgIH1cblxuICAgIGlmICh0cmlnZ2VyQ2hhbmdlRXZlbnQpIHtcbiAgICAgICQodGhpcy5fZWxlbWVudCkudG9nZ2xlQ2xhc3MoQ2xhc3NOYW1lLkFDVElWRSlcbiAgICB9XG4gIH1cblxuICBkaXNwb3NlKCkge1xuICAgICQucmVtb3ZlRGF0YSh0aGlzLl9lbGVtZW50LCBEQVRBX0tFWSlcbiAgICB0aGlzLl9lbGVtZW50ID0gbnVsbFxuICB9XG5cbiAgLy8gU3RhdGljXG5cbiAgc3RhdGljIF9qUXVlcnlJbnRlcmZhY2UoY29uZmlnKSB7XG4gICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICBsZXQgZGF0YSA9ICQodGhpcykuZGF0YShEQVRBX0tFWSlcblxuICAgICAgaWYgKCFkYXRhKSB7XG4gICAgICAgIGRhdGEgPSBuZXcgQnV0dG9uKHRoaXMpXG4gICAgICAgICQodGhpcykuZGF0YShEQVRBX0tFWSwgZGF0YSlcbiAgICAgIH1cblxuICAgICAgaWYgKGNvbmZpZyA9PT0gJ3RvZ2dsZScpIHtcbiAgICAgICAgZGF0YVtjb25maWddKClcbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBEYXRhIEFwaSBpbXBsZW1lbnRhdGlvblxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuJChkb2N1bWVudClcbiAgLm9uKEV2ZW50LkNMSUNLX0RBVEFfQVBJLCBTZWxlY3Rvci5EQVRBX1RPR0dMRV9DQVJST1QsIChldmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcblxuICAgIGxldCBidXR0b24gPSBldmVudC50YXJnZXRcblxuICAgIGlmICghJChidXR0b24pLmhhc0NsYXNzKENsYXNzTmFtZS5CVVRUT04pKSB7XG4gICAgICBidXR0b24gPSAkKGJ1dHRvbikuY2xvc2VzdChTZWxlY3Rvci5CVVRUT04pXG4gICAgfVxuXG4gICAgQnV0dG9uLl9qUXVlcnlJbnRlcmZhY2UuY2FsbCgkKGJ1dHRvbiksICd0b2dnbGUnKVxuICB9KVxuICAub24oRXZlbnQuRk9DVVNfQkxVUl9EQVRBX0FQSSwgU2VsZWN0b3IuREFUQV9UT0dHTEVfQ0FSUk9ULCAoZXZlbnQpID0+IHtcbiAgICBjb25zdCBidXR0b24gPSAkKGV2ZW50LnRhcmdldCkuY2xvc2VzdChTZWxlY3Rvci5CVVRUT04pWzBdXG4gICAgJChidXR0b24pLnRvZ2dsZUNsYXNzKENsYXNzTmFtZS5GT0NVUywgL15mb2N1cyhpbik/JC8udGVzdChldmVudC50eXBlKSlcbiAgfSlcblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIGpRdWVyeVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuJC5mbltOQU1FXSA9IEJ1dHRvbi5falF1ZXJ5SW50ZXJmYWNlXG4kLmZuW05BTUVdLkNvbnN0cnVjdG9yID0gQnV0dG9uXG4kLmZuW05BTUVdLm5vQ29uZmxpY3QgPSAoKSA9PiB7XG4gICQuZm5bTkFNRV0gPSBKUVVFUllfTk9fQ09ORkxJQ1RcbiAgcmV0dXJuIEJ1dHRvbi5falF1ZXJ5SW50ZXJmYWNlXG59XG5cbmV4cG9ydCBkZWZhdWx0IEJ1dHRvblxuIiwiLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQm9vdHN0cmFwICh2NC4zLjEpOiBjYXJvdXNlbC5qc1xuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYXN0ZXIvTElDRU5TRSlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5J1xuaW1wb3J0IFV0aWwgZnJvbSAnLi91dGlsJ1xuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQ29uc3RhbnRzXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5jb25zdCBOQU1FICAgICAgICAgICAgICAgICAgID0gJ2Nhcm91c2VsJ1xuY29uc3QgVkVSU0lPTiAgICAgICAgICAgICAgICA9ICc0LjMuMSdcbmNvbnN0IERBVEFfS0VZICAgICAgICAgICAgICAgPSAnYnMuY2Fyb3VzZWwnXG5jb25zdCBFVkVOVF9LRVkgICAgICAgICAgICAgID0gYC4ke0RBVEFfS0VZfWBcbmNvbnN0IERBVEFfQVBJX0tFWSAgICAgICAgICAgPSAnLmRhdGEtYXBpJ1xuY29uc3QgSlFVRVJZX05PX0NPTkZMSUNUICAgICA9ICQuZm5bTkFNRV1cbmNvbnN0IEFSUk9XX0xFRlRfS0VZQ09ERSAgICAgPSAzNyAvLyBLZXlib2FyZEV2ZW50LndoaWNoIHZhbHVlIGZvciBsZWZ0IGFycm93IGtleVxuY29uc3QgQVJST1dfUklHSFRfS0VZQ09ERSAgICA9IDM5IC8vIEtleWJvYXJkRXZlbnQud2hpY2ggdmFsdWUgZm9yIHJpZ2h0IGFycm93IGtleVxuY29uc3QgVE9VQ0hFVkVOVF9DT01QQVRfV0FJVCA9IDUwMCAvLyBUaW1lIGZvciBtb3VzZSBjb21wYXQgZXZlbnRzIHRvIGZpcmUgYWZ0ZXIgdG91Y2hcbmNvbnN0IFNXSVBFX1RIUkVTSE9MRCAgICAgICAgPSA0MFxuXG5jb25zdCBEZWZhdWx0ID0ge1xuICBpbnRlcnZhbCA6IDUwMDAsXG4gIGtleWJvYXJkIDogdHJ1ZSxcbiAgc2xpZGUgICAgOiBmYWxzZSxcbiAgcGF1c2UgICAgOiAnaG92ZXInLFxuICB3cmFwICAgICA6IHRydWUsXG4gIHRvdWNoICAgIDogdHJ1ZVxufVxuXG5jb25zdCBEZWZhdWx0VHlwZSA9IHtcbiAgaW50ZXJ2YWwgOiAnKG51bWJlcnxib29sZWFuKScsXG4gIGtleWJvYXJkIDogJ2Jvb2xlYW4nLFxuICBzbGlkZSAgICA6ICcoYm9vbGVhbnxzdHJpbmcpJyxcbiAgcGF1c2UgICAgOiAnKHN0cmluZ3xib29sZWFuKScsXG4gIHdyYXAgICAgIDogJ2Jvb2xlYW4nLFxuICB0b3VjaCAgICA6ICdib29sZWFuJ1xufVxuXG5jb25zdCBEaXJlY3Rpb24gPSB7XG4gIE5FWFQgICAgIDogJ25leHQnLFxuICBQUkVWICAgICA6ICdwcmV2JyxcbiAgTEVGVCAgICAgOiAnbGVmdCcsXG4gIFJJR0hUICAgIDogJ3JpZ2h0J1xufVxuXG5jb25zdCBFdmVudCA9IHtcbiAgU0xJREUgICAgICAgICAgOiBgc2xpZGUke0VWRU5UX0tFWX1gLFxuICBTTElEICAgICAgICAgICA6IGBzbGlkJHtFVkVOVF9LRVl9YCxcbiAgS0VZRE9XTiAgICAgICAgOiBga2V5ZG93biR7RVZFTlRfS0VZfWAsXG4gIE1PVVNFRU5URVIgICAgIDogYG1vdXNlZW50ZXIke0VWRU5UX0tFWX1gLFxuICBNT1VTRUxFQVZFICAgICA6IGBtb3VzZWxlYXZlJHtFVkVOVF9LRVl9YCxcbiAgVE9VQ0hTVEFSVCAgICAgOiBgdG91Y2hzdGFydCR7RVZFTlRfS0VZfWAsXG4gIFRPVUNITU9WRSAgICAgIDogYHRvdWNobW92ZSR7RVZFTlRfS0VZfWAsXG4gIFRPVUNIRU5EICAgICAgIDogYHRvdWNoZW5kJHtFVkVOVF9LRVl9YCxcbiAgUE9JTlRFUkRPV04gICAgOiBgcG9pbnRlcmRvd24ke0VWRU5UX0tFWX1gLFxuICBQT0lOVEVSVVAgICAgICA6IGBwb2ludGVydXAke0VWRU5UX0tFWX1gLFxuICBEUkFHX1NUQVJUICAgICA6IGBkcmFnc3RhcnQke0VWRU5UX0tFWX1gLFxuICBMT0FEX0RBVEFfQVBJICA6IGBsb2FkJHtFVkVOVF9LRVl9JHtEQVRBX0FQSV9LRVl9YCxcbiAgQ0xJQ0tfREFUQV9BUEkgOiBgY2xpY2ske0VWRU5UX0tFWX0ke0RBVEFfQVBJX0tFWX1gXG59XG5cbmNvbnN0IENsYXNzTmFtZSA9IHtcbiAgQ0FST1VTRUwgICAgICA6ICdjYXJvdXNlbCcsXG4gIEFDVElWRSAgICAgICAgOiAnYWN0aXZlJyxcbiAgU0xJREUgICAgICAgICA6ICdzbGlkZScsXG4gIFJJR0hUICAgICAgICAgOiAnY2Fyb3VzZWwtaXRlbS1yaWdodCcsXG4gIExFRlQgICAgICAgICAgOiAnY2Fyb3VzZWwtaXRlbS1sZWZ0JyxcbiAgTkVYVCAgICAgICAgICA6ICdjYXJvdXNlbC1pdGVtLW5leHQnLFxuICBQUkVWICAgICAgICAgIDogJ2Nhcm91c2VsLWl0ZW0tcHJldicsXG4gIElURU0gICAgICAgICAgOiAnY2Fyb3VzZWwtaXRlbScsXG4gIFBPSU5URVJfRVZFTlQgOiAncG9pbnRlci1ldmVudCdcbn1cblxuY29uc3QgU2VsZWN0b3IgPSB7XG4gIEFDVElWRSAgICAgIDogJy5hY3RpdmUnLFxuICBBQ1RJVkVfSVRFTSA6ICcuYWN0aXZlLmNhcm91c2VsLWl0ZW0nLFxuICBJVEVNICAgICAgICA6ICcuY2Fyb3VzZWwtaXRlbScsXG4gIElURU1fSU1HICAgIDogJy5jYXJvdXNlbC1pdGVtIGltZycsXG4gIE5FWFRfUFJFViAgIDogJy5jYXJvdXNlbC1pdGVtLW5leHQsIC5jYXJvdXNlbC1pdGVtLXByZXYnLFxuICBJTkRJQ0FUT1JTICA6ICcuY2Fyb3VzZWwtaW5kaWNhdG9ycycsXG4gIERBVEFfU0xJREUgIDogJ1tkYXRhLXNsaWRlXSwgW2RhdGEtc2xpZGUtdG9dJyxcbiAgREFUQV9SSURFICAgOiAnW2RhdGEtcmlkZT1cImNhcm91c2VsXCJdJ1xufVxuXG5jb25zdCBQb2ludGVyVHlwZSA9IHtcbiAgVE9VQ0ggOiAndG91Y2gnLFxuICBQRU4gICA6ICdwZW4nXG59XG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBDbGFzcyBEZWZpbml0aW9uXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuY2xhc3MgQ2Fyb3VzZWwge1xuICBjb25zdHJ1Y3RvcihlbGVtZW50LCBjb25maWcpIHtcbiAgICB0aGlzLl9pdGVtcyAgICAgICAgID0gbnVsbFxuICAgIHRoaXMuX2ludGVydmFsICAgICAgPSBudWxsXG4gICAgdGhpcy5fYWN0aXZlRWxlbWVudCA9IG51bGxcbiAgICB0aGlzLl9pc1BhdXNlZCAgICAgID0gZmFsc2VcbiAgICB0aGlzLl9pc1NsaWRpbmcgICAgID0gZmFsc2VcbiAgICB0aGlzLnRvdWNoVGltZW91dCAgID0gbnVsbFxuICAgIHRoaXMudG91Y2hTdGFydFggICAgPSAwXG4gICAgdGhpcy50b3VjaERlbHRhWCAgICA9IDBcblxuICAgIHRoaXMuX2NvbmZpZyAgICAgICAgICAgID0gdGhpcy5fZ2V0Q29uZmlnKGNvbmZpZylcbiAgICB0aGlzLl9lbGVtZW50ICAgICAgICAgICA9IGVsZW1lbnRcbiAgICB0aGlzLl9pbmRpY2F0b3JzRWxlbWVudCA9IHRoaXMuX2VsZW1lbnQucXVlcnlTZWxlY3RvcihTZWxlY3Rvci5JTkRJQ0FUT1JTKVxuICAgIHRoaXMuX3RvdWNoU3VwcG9ydGVkICAgID0gJ29udG91Y2hzdGFydCcgaW4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50IHx8IG5hdmlnYXRvci5tYXhUb3VjaFBvaW50cyA+IDBcbiAgICB0aGlzLl9wb2ludGVyRXZlbnQgICAgICA9IEJvb2xlYW4od2luZG93LlBvaW50ZXJFdmVudCB8fCB3aW5kb3cuTVNQb2ludGVyRXZlbnQpXG5cbiAgICB0aGlzLl9hZGRFdmVudExpc3RlbmVycygpXG4gIH1cblxuICAvLyBHZXR0ZXJzXG5cbiAgc3RhdGljIGdldCBWRVJTSU9OKCkge1xuICAgIHJldHVybiBWRVJTSU9OXG4gIH1cblxuICBzdGF0aWMgZ2V0IERlZmF1bHQoKSB7XG4gICAgcmV0dXJuIERlZmF1bHRcbiAgfVxuXG4gIC8vIFB1YmxpY1xuXG4gIG5leHQoKSB7XG4gICAgaWYgKCF0aGlzLl9pc1NsaWRpbmcpIHtcbiAgICAgIHRoaXMuX3NsaWRlKERpcmVjdGlvbi5ORVhUKVxuICAgIH1cbiAgfVxuXG4gIG5leHRXaGVuVmlzaWJsZSgpIHtcbiAgICAvLyBEb24ndCBjYWxsIG5leHQgd2hlbiB0aGUgcGFnZSBpc24ndCB2aXNpYmxlXG4gICAgLy8gb3IgdGhlIGNhcm91c2VsIG9yIGl0cyBwYXJlbnQgaXNuJ3QgdmlzaWJsZVxuICAgIGlmICghZG9jdW1lbnQuaGlkZGVuICYmXG4gICAgICAoJCh0aGlzLl9lbGVtZW50KS5pcygnOnZpc2libGUnKSAmJiAkKHRoaXMuX2VsZW1lbnQpLmNzcygndmlzaWJpbGl0eScpICE9PSAnaGlkZGVuJykpIHtcbiAgICAgIHRoaXMubmV4dCgpXG4gICAgfVxuICB9XG5cbiAgcHJldigpIHtcbiAgICBpZiAoIXRoaXMuX2lzU2xpZGluZykge1xuICAgICAgdGhpcy5fc2xpZGUoRGlyZWN0aW9uLlBSRVYpXG4gICAgfVxuICB9XG5cbiAgcGF1c2UoZXZlbnQpIHtcbiAgICBpZiAoIWV2ZW50KSB7XG4gICAgICB0aGlzLl9pc1BhdXNlZCA9IHRydWVcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fZWxlbWVudC5xdWVyeVNlbGVjdG9yKFNlbGVjdG9yLk5FWFRfUFJFVikpIHtcbiAgICAgIFV0aWwudHJpZ2dlclRyYW5zaXRpb25FbmQodGhpcy5fZWxlbWVudClcbiAgICAgIHRoaXMuY3ljbGUodHJ1ZSlcbiAgICB9XG5cbiAgICBjbGVhckludGVydmFsKHRoaXMuX2ludGVydmFsKVxuICAgIHRoaXMuX2ludGVydmFsID0gbnVsbFxuICB9XG5cbiAgY3ljbGUoZXZlbnQpIHtcbiAgICBpZiAoIWV2ZW50KSB7XG4gICAgICB0aGlzLl9pc1BhdXNlZCA9IGZhbHNlXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2ludGVydmFsKSB7XG4gICAgICBjbGVhckludGVydmFsKHRoaXMuX2ludGVydmFsKVxuICAgICAgdGhpcy5faW50ZXJ2YWwgPSBudWxsXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2NvbmZpZy5pbnRlcnZhbCAmJiAhdGhpcy5faXNQYXVzZWQpIHtcbiAgICAgIHRoaXMuX2ludGVydmFsID0gc2V0SW50ZXJ2YWwoXG4gICAgICAgIChkb2N1bWVudC52aXNpYmlsaXR5U3RhdGUgPyB0aGlzLm5leHRXaGVuVmlzaWJsZSA6IHRoaXMubmV4dCkuYmluZCh0aGlzKSxcbiAgICAgICAgdGhpcy5fY29uZmlnLmludGVydmFsXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgdG8oaW5kZXgpIHtcbiAgICB0aGlzLl9hY3RpdmVFbGVtZW50ID0gdGhpcy5fZWxlbWVudC5xdWVyeVNlbGVjdG9yKFNlbGVjdG9yLkFDVElWRV9JVEVNKVxuXG4gICAgY29uc3QgYWN0aXZlSW5kZXggPSB0aGlzLl9nZXRJdGVtSW5kZXgodGhpcy5fYWN0aXZlRWxlbWVudClcblxuICAgIGlmIChpbmRleCA+IHRoaXMuX2l0ZW1zLmxlbmd0aCAtIDEgfHwgaW5kZXggPCAwKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAodGhpcy5faXNTbGlkaW5nKSB7XG4gICAgICAkKHRoaXMuX2VsZW1lbnQpLm9uZShFdmVudC5TTElELCAoKSA9PiB0aGlzLnRvKGluZGV4KSlcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmIChhY3RpdmVJbmRleCA9PT0gaW5kZXgpIHtcbiAgICAgIHRoaXMucGF1c2UoKVxuICAgICAgdGhpcy5jeWNsZSgpXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBkaXJlY3Rpb24gPSBpbmRleCA+IGFjdGl2ZUluZGV4XG4gICAgICA/IERpcmVjdGlvbi5ORVhUXG4gICAgICA6IERpcmVjdGlvbi5QUkVWXG5cbiAgICB0aGlzLl9zbGlkZShkaXJlY3Rpb24sIHRoaXMuX2l0ZW1zW2luZGV4XSlcbiAgfVxuXG4gIGRpc3Bvc2UoKSB7XG4gICAgJCh0aGlzLl9lbGVtZW50KS5vZmYoRVZFTlRfS0VZKVxuICAgICQucmVtb3ZlRGF0YSh0aGlzLl9lbGVtZW50LCBEQVRBX0tFWSlcblxuICAgIHRoaXMuX2l0ZW1zICAgICAgICAgICAgID0gbnVsbFxuICAgIHRoaXMuX2NvbmZpZyAgICAgICAgICAgID0gbnVsbFxuICAgIHRoaXMuX2VsZW1lbnQgICAgICAgICAgID0gbnVsbFxuICAgIHRoaXMuX2ludGVydmFsICAgICAgICAgID0gbnVsbFxuICAgIHRoaXMuX2lzUGF1c2VkICAgICAgICAgID0gbnVsbFxuICAgIHRoaXMuX2lzU2xpZGluZyAgICAgICAgID0gbnVsbFxuICAgIHRoaXMuX2FjdGl2ZUVsZW1lbnQgICAgID0gbnVsbFxuICAgIHRoaXMuX2luZGljYXRvcnNFbGVtZW50ID0gbnVsbFxuICB9XG5cbiAgLy8gUHJpdmF0ZVxuXG4gIF9nZXRDb25maWcoY29uZmlnKSB7XG4gICAgY29uZmlnID0ge1xuICAgICAgLi4uRGVmYXVsdCxcbiAgICAgIC4uLmNvbmZpZ1xuICAgIH1cbiAgICBVdGlsLnR5cGVDaGVja0NvbmZpZyhOQU1FLCBjb25maWcsIERlZmF1bHRUeXBlKVxuICAgIHJldHVybiBjb25maWdcbiAgfVxuXG4gIF9oYW5kbGVTd2lwZSgpIHtcbiAgICBjb25zdCBhYnNEZWx0YXggPSBNYXRoLmFicyh0aGlzLnRvdWNoRGVsdGFYKVxuXG4gICAgaWYgKGFic0RlbHRheCA8PSBTV0lQRV9USFJFU0hPTEQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IGRpcmVjdGlvbiA9IGFic0RlbHRheCAvIHRoaXMudG91Y2hEZWx0YVhcblxuICAgIC8vIHN3aXBlIGxlZnRcbiAgICBpZiAoZGlyZWN0aW9uID4gMCkge1xuICAgICAgdGhpcy5wcmV2KClcbiAgICB9XG5cbiAgICAvLyBzd2lwZSByaWdodFxuICAgIGlmIChkaXJlY3Rpb24gPCAwKSB7XG4gICAgICB0aGlzLm5leHQoKVxuICAgIH1cbiAgfVxuXG4gIF9hZGRFdmVudExpc3RlbmVycygpIHtcbiAgICBpZiAodGhpcy5fY29uZmlnLmtleWJvYXJkKSB7XG4gICAgICAkKHRoaXMuX2VsZW1lbnQpXG4gICAgICAgIC5vbihFdmVudC5LRVlET1dOLCAoZXZlbnQpID0+IHRoaXMuX2tleWRvd24oZXZlbnQpKVxuICAgIH1cblxuICAgIGlmICh0aGlzLl9jb25maWcucGF1c2UgPT09ICdob3ZlcicpIHtcbiAgICAgICQodGhpcy5fZWxlbWVudClcbiAgICAgICAgLm9uKEV2ZW50Lk1PVVNFRU5URVIsIChldmVudCkgPT4gdGhpcy5wYXVzZShldmVudCkpXG4gICAgICAgIC5vbihFdmVudC5NT1VTRUxFQVZFLCAoZXZlbnQpID0+IHRoaXMuY3ljbGUoZXZlbnQpKVxuICAgIH1cblxuICAgIGlmICh0aGlzLl9jb25maWcudG91Y2gpIHtcbiAgICAgIHRoaXMuX2FkZFRvdWNoRXZlbnRMaXN0ZW5lcnMoKVxuICAgIH1cbiAgfVxuXG4gIF9hZGRUb3VjaEV2ZW50TGlzdGVuZXJzKCkge1xuICAgIGlmICghdGhpcy5fdG91Y2hTdXBwb3J0ZWQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHN0YXJ0ID0gKGV2ZW50KSA9PiB7XG4gICAgICBpZiAodGhpcy5fcG9pbnRlckV2ZW50ICYmIFBvaW50ZXJUeXBlW2V2ZW50Lm9yaWdpbmFsRXZlbnQucG9pbnRlclR5cGUudG9VcHBlckNhc2UoKV0pIHtcbiAgICAgICAgdGhpcy50b3VjaFN0YXJ0WCA9IGV2ZW50Lm9yaWdpbmFsRXZlbnQuY2xpZW50WFxuICAgICAgfSBlbHNlIGlmICghdGhpcy5fcG9pbnRlckV2ZW50KSB7XG4gICAgICAgIHRoaXMudG91Y2hTdGFydFggPSBldmVudC5vcmlnaW5hbEV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WFxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IG1vdmUgPSAoZXZlbnQpID0+IHtcbiAgICAgIC8vIGVuc3VyZSBzd2lwaW5nIHdpdGggb25lIHRvdWNoIGFuZCBub3QgcGluY2hpbmdcbiAgICAgIGlmIChldmVudC5vcmlnaW5hbEV2ZW50LnRvdWNoZXMgJiYgZXZlbnQub3JpZ2luYWxFdmVudC50b3VjaGVzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgdGhpcy50b3VjaERlbHRhWCA9IDBcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMudG91Y2hEZWx0YVggPSBldmVudC5vcmlnaW5hbEV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WCAtIHRoaXMudG91Y2hTdGFydFhcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBlbmQgPSAoZXZlbnQpID0+IHtcbiAgICAgIGlmICh0aGlzLl9wb2ludGVyRXZlbnQgJiYgUG9pbnRlclR5cGVbZXZlbnQub3JpZ2luYWxFdmVudC5wb2ludGVyVHlwZS50b1VwcGVyQ2FzZSgpXSkge1xuICAgICAgICB0aGlzLnRvdWNoRGVsdGFYID0gZXZlbnQub3JpZ2luYWxFdmVudC5jbGllbnRYIC0gdGhpcy50b3VjaFN0YXJ0WFxuICAgICAgfVxuXG4gICAgICB0aGlzLl9oYW5kbGVTd2lwZSgpXG4gICAgICBpZiAodGhpcy5fY29uZmlnLnBhdXNlID09PSAnaG92ZXInKSB7XG4gICAgICAgIC8vIElmIGl0J3MgYSB0b3VjaC1lbmFibGVkIGRldmljZSwgbW91c2VlbnRlci9sZWF2ZSBhcmUgZmlyZWQgYXNcbiAgICAgICAgLy8gcGFydCBvZiB0aGUgbW91c2UgY29tcGF0aWJpbGl0eSBldmVudHMgb24gZmlyc3QgdGFwIC0gdGhlIGNhcm91c2VsXG4gICAgICAgIC8vIHdvdWxkIHN0b3AgY3ljbGluZyB1bnRpbCB1c2VyIHRhcHBlZCBvdXQgb2YgaXQ7XG4gICAgICAgIC8vIGhlcmUsIHdlIGxpc3RlbiBmb3IgdG91Y2hlbmQsIGV4cGxpY2l0bHkgcGF1c2UgdGhlIGNhcm91c2VsXG4gICAgICAgIC8vIChhcyBpZiBpdCdzIHRoZSBzZWNvbmQgdGltZSB3ZSB0YXAgb24gaXQsIG1vdXNlZW50ZXIgY29tcGF0IGV2ZW50XG4gICAgICAgIC8vIGlzIE5PVCBmaXJlZCkgYW5kIGFmdGVyIGEgdGltZW91dCAodG8gYWxsb3cgZm9yIG1vdXNlIGNvbXBhdGliaWxpdHlcbiAgICAgICAgLy8gZXZlbnRzIHRvIGZpcmUpIHdlIGV4cGxpY2l0bHkgcmVzdGFydCBjeWNsaW5nXG5cbiAgICAgICAgdGhpcy5wYXVzZSgpXG4gICAgICAgIGlmICh0aGlzLnRvdWNoVGltZW91dCkge1xuICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLnRvdWNoVGltZW91dClcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnRvdWNoVGltZW91dCA9IHNldFRpbWVvdXQoKGV2ZW50KSA9PiB0aGlzLmN5Y2xlKGV2ZW50KSwgVE9VQ0hFVkVOVF9DT01QQVRfV0FJVCArIHRoaXMuX2NvbmZpZy5pbnRlcnZhbClcbiAgICAgIH1cbiAgICB9XG5cbiAgICAkKHRoaXMuX2VsZW1lbnQucXVlcnlTZWxlY3RvckFsbChTZWxlY3Rvci5JVEVNX0lNRykpLm9uKEV2ZW50LkRSQUdfU1RBUlQsIChlKSA9PiBlLnByZXZlbnREZWZhdWx0KCkpXG4gICAgaWYgKHRoaXMuX3BvaW50ZXJFdmVudCkge1xuICAgICAgJCh0aGlzLl9lbGVtZW50KS5vbihFdmVudC5QT0lOVEVSRE9XTiwgKGV2ZW50KSA9PiBzdGFydChldmVudCkpXG4gICAgICAkKHRoaXMuX2VsZW1lbnQpLm9uKEV2ZW50LlBPSU5URVJVUCwgKGV2ZW50KSA9PiBlbmQoZXZlbnQpKVxuXG4gICAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5hZGQoQ2xhc3NOYW1lLlBPSU5URVJfRVZFTlQpXG4gICAgfSBlbHNlIHtcbiAgICAgICQodGhpcy5fZWxlbWVudCkub24oRXZlbnQuVE9VQ0hTVEFSVCwgKGV2ZW50KSA9PiBzdGFydChldmVudCkpXG4gICAgICAkKHRoaXMuX2VsZW1lbnQpLm9uKEV2ZW50LlRPVUNITU9WRSwgKGV2ZW50KSA9PiBtb3ZlKGV2ZW50KSlcbiAgICAgICQodGhpcy5fZWxlbWVudCkub24oRXZlbnQuVE9VQ0hFTkQsIChldmVudCkgPT4gZW5kKGV2ZW50KSlcbiAgICB9XG4gIH1cblxuICBfa2V5ZG93bihldmVudCkge1xuICAgIGlmICgvaW5wdXR8dGV4dGFyZWEvaS50ZXN0KGV2ZW50LnRhcmdldC50YWdOYW1lKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgc3dpdGNoIChldmVudC53aGljaCkge1xuICAgICAgY2FzZSBBUlJPV19MRUZUX0tFWUNPREU6XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgdGhpcy5wcmV2KClcbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgQVJST1dfUklHSFRfS0VZQ09ERTpcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICB0aGlzLm5leHQoKVxuICAgICAgICBicmVha1xuICAgICAgZGVmYXVsdDpcbiAgICB9XG4gIH1cblxuICBfZ2V0SXRlbUluZGV4KGVsZW1lbnQpIHtcbiAgICB0aGlzLl9pdGVtcyA9IGVsZW1lbnQgJiYgZWxlbWVudC5wYXJlbnROb2RlXG4gICAgICA/IFtdLnNsaWNlLmNhbGwoZWxlbWVudC5wYXJlbnROb2RlLnF1ZXJ5U2VsZWN0b3JBbGwoU2VsZWN0b3IuSVRFTSkpXG4gICAgICA6IFtdXG4gICAgcmV0dXJuIHRoaXMuX2l0ZW1zLmluZGV4T2YoZWxlbWVudClcbiAgfVxuXG4gIF9nZXRJdGVtQnlEaXJlY3Rpb24oZGlyZWN0aW9uLCBhY3RpdmVFbGVtZW50KSB7XG4gICAgY29uc3QgaXNOZXh0RGlyZWN0aW9uID0gZGlyZWN0aW9uID09PSBEaXJlY3Rpb24uTkVYVFxuICAgIGNvbnN0IGlzUHJldkRpcmVjdGlvbiA9IGRpcmVjdGlvbiA9PT0gRGlyZWN0aW9uLlBSRVZcbiAgICBjb25zdCBhY3RpdmVJbmRleCAgICAgPSB0aGlzLl9nZXRJdGVtSW5kZXgoYWN0aXZlRWxlbWVudClcbiAgICBjb25zdCBsYXN0SXRlbUluZGV4ICAgPSB0aGlzLl9pdGVtcy5sZW5ndGggLSAxXG4gICAgY29uc3QgaXNHb2luZ1RvV3JhcCAgID0gaXNQcmV2RGlyZWN0aW9uICYmIGFjdGl2ZUluZGV4ID09PSAwIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNOZXh0RGlyZWN0aW9uICYmIGFjdGl2ZUluZGV4ID09PSBsYXN0SXRlbUluZGV4XG5cbiAgICBpZiAoaXNHb2luZ1RvV3JhcCAmJiAhdGhpcy5fY29uZmlnLndyYXApIHtcbiAgICAgIHJldHVybiBhY3RpdmVFbGVtZW50XG4gICAgfVxuXG4gICAgY29uc3QgZGVsdGEgICAgID0gZGlyZWN0aW9uID09PSBEaXJlY3Rpb24uUFJFViA/IC0xIDogMVxuICAgIGNvbnN0IGl0ZW1JbmRleCA9IChhY3RpdmVJbmRleCArIGRlbHRhKSAlIHRoaXMuX2l0ZW1zLmxlbmd0aFxuXG4gICAgcmV0dXJuIGl0ZW1JbmRleCA9PT0gLTFcbiAgICAgID8gdGhpcy5faXRlbXNbdGhpcy5faXRlbXMubGVuZ3RoIC0gMV0gOiB0aGlzLl9pdGVtc1tpdGVtSW5kZXhdXG4gIH1cblxuICBfdHJpZ2dlclNsaWRlRXZlbnQocmVsYXRlZFRhcmdldCwgZXZlbnREaXJlY3Rpb25OYW1lKSB7XG4gICAgY29uc3QgdGFyZ2V0SW5kZXggPSB0aGlzLl9nZXRJdGVtSW5kZXgocmVsYXRlZFRhcmdldClcbiAgICBjb25zdCBmcm9tSW5kZXggPSB0aGlzLl9nZXRJdGVtSW5kZXgodGhpcy5fZWxlbWVudC5xdWVyeVNlbGVjdG9yKFNlbGVjdG9yLkFDVElWRV9JVEVNKSlcbiAgICBjb25zdCBzbGlkZUV2ZW50ID0gJC5FdmVudChFdmVudC5TTElERSwge1xuICAgICAgcmVsYXRlZFRhcmdldCxcbiAgICAgIGRpcmVjdGlvbjogZXZlbnREaXJlY3Rpb25OYW1lLFxuICAgICAgZnJvbTogZnJvbUluZGV4LFxuICAgICAgdG86IHRhcmdldEluZGV4XG4gICAgfSlcblxuICAgICQodGhpcy5fZWxlbWVudCkudHJpZ2dlcihzbGlkZUV2ZW50KVxuXG4gICAgcmV0dXJuIHNsaWRlRXZlbnRcbiAgfVxuXG4gIF9zZXRBY3RpdmVJbmRpY2F0b3JFbGVtZW50KGVsZW1lbnQpIHtcbiAgICBpZiAodGhpcy5faW5kaWNhdG9yc0VsZW1lbnQpIHtcbiAgICAgIGNvbnN0IGluZGljYXRvcnMgPSBbXS5zbGljZS5jYWxsKHRoaXMuX2luZGljYXRvcnNFbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoU2VsZWN0b3IuQUNUSVZFKSlcbiAgICAgICQoaW5kaWNhdG9ycylcbiAgICAgICAgLnJlbW92ZUNsYXNzKENsYXNzTmFtZS5BQ1RJVkUpXG5cbiAgICAgIGNvbnN0IG5leHRJbmRpY2F0b3IgPSB0aGlzLl9pbmRpY2F0b3JzRWxlbWVudC5jaGlsZHJlbltcbiAgICAgICAgdGhpcy5fZ2V0SXRlbUluZGV4KGVsZW1lbnQpXG4gICAgICBdXG5cbiAgICAgIGlmIChuZXh0SW5kaWNhdG9yKSB7XG4gICAgICAgICQobmV4dEluZGljYXRvcikuYWRkQ2xhc3MoQ2xhc3NOYW1lLkFDVElWRSlcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBfc2xpZGUoZGlyZWN0aW9uLCBlbGVtZW50KSB7XG4gICAgY29uc3QgYWN0aXZlRWxlbWVudCA9IHRoaXMuX2VsZW1lbnQucXVlcnlTZWxlY3RvcihTZWxlY3Rvci5BQ1RJVkVfSVRFTSlcbiAgICBjb25zdCBhY3RpdmVFbGVtZW50SW5kZXggPSB0aGlzLl9nZXRJdGVtSW5kZXgoYWN0aXZlRWxlbWVudClcbiAgICBjb25zdCBuZXh0RWxlbWVudCAgID0gZWxlbWVudCB8fCBhY3RpdmVFbGVtZW50ICYmXG4gICAgICB0aGlzLl9nZXRJdGVtQnlEaXJlY3Rpb24oZGlyZWN0aW9uLCBhY3RpdmVFbGVtZW50KVxuICAgIGNvbnN0IG5leHRFbGVtZW50SW5kZXggPSB0aGlzLl9nZXRJdGVtSW5kZXgobmV4dEVsZW1lbnQpXG4gICAgY29uc3QgaXNDeWNsaW5nID0gQm9vbGVhbih0aGlzLl9pbnRlcnZhbClcblxuICAgIGxldCBkaXJlY3Rpb25hbENsYXNzTmFtZVxuICAgIGxldCBvcmRlckNsYXNzTmFtZVxuICAgIGxldCBldmVudERpcmVjdGlvbk5hbWVcblxuICAgIGlmIChkaXJlY3Rpb24gPT09IERpcmVjdGlvbi5ORVhUKSB7XG4gICAgICBkaXJlY3Rpb25hbENsYXNzTmFtZSA9IENsYXNzTmFtZS5MRUZUXG4gICAgICBvcmRlckNsYXNzTmFtZSA9IENsYXNzTmFtZS5ORVhUXG4gICAgICBldmVudERpcmVjdGlvbk5hbWUgPSBEaXJlY3Rpb24uTEVGVFxuICAgIH0gZWxzZSB7XG4gICAgICBkaXJlY3Rpb25hbENsYXNzTmFtZSA9IENsYXNzTmFtZS5SSUdIVFxuICAgICAgb3JkZXJDbGFzc05hbWUgPSBDbGFzc05hbWUuUFJFVlxuICAgICAgZXZlbnREaXJlY3Rpb25OYW1lID0gRGlyZWN0aW9uLlJJR0hUXG4gICAgfVxuXG4gICAgaWYgKG5leHRFbGVtZW50ICYmICQobmV4dEVsZW1lbnQpLmhhc0NsYXNzKENsYXNzTmFtZS5BQ1RJVkUpKSB7XG4gICAgICB0aGlzLl9pc1NsaWRpbmcgPSBmYWxzZVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3Qgc2xpZGVFdmVudCA9IHRoaXMuX3RyaWdnZXJTbGlkZUV2ZW50KG5leHRFbGVtZW50LCBldmVudERpcmVjdGlvbk5hbWUpXG4gICAgaWYgKHNsaWRlRXZlbnQuaXNEZWZhdWx0UHJldmVudGVkKCkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmICghYWN0aXZlRWxlbWVudCB8fCAhbmV4dEVsZW1lbnQpIHtcbiAgICAgIC8vIFNvbWUgd2VpcmRuZXNzIGlzIGhhcHBlbmluZywgc28gd2UgYmFpbFxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5faXNTbGlkaW5nID0gdHJ1ZVxuXG4gICAgaWYgKGlzQ3ljbGluZykge1xuICAgICAgdGhpcy5wYXVzZSgpXG4gICAgfVxuXG4gICAgdGhpcy5fc2V0QWN0aXZlSW5kaWNhdG9yRWxlbWVudChuZXh0RWxlbWVudClcblxuICAgIGNvbnN0IHNsaWRFdmVudCA9ICQuRXZlbnQoRXZlbnQuU0xJRCwge1xuICAgICAgcmVsYXRlZFRhcmdldDogbmV4dEVsZW1lbnQsXG4gICAgICBkaXJlY3Rpb246IGV2ZW50RGlyZWN0aW9uTmFtZSxcbiAgICAgIGZyb206IGFjdGl2ZUVsZW1lbnRJbmRleCxcbiAgICAgIHRvOiBuZXh0RWxlbWVudEluZGV4XG4gICAgfSlcblxuICAgIGlmICgkKHRoaXMuX2VsZW1lbnQpLmhhc0NsYXNzKENsYXNzTmFtZS5TTElERSkpIHtcbiAgICAgICQobmV4dEVsZW1lbnQpLmFkZENsYXNzKG9yZGVyQ2xhc3NOYW1lKVxuXG4gICAgICBVdGlsLnJlZmxvdyhuZXh0RWxlbWVudClcblxuICAgICAgJChhY3RpdmVFbGVtZW50KS5hZGRDbGFzcyhkaXJlY3Rpb25hbENsYXNzTmFtZSlcbiAgICAgICQobmV4dEVsZW1lbnQpLmFkZENsYXNzKGRpcmVjdGlvbmFsQ2xhc3NOYW1lKVxuXG4gICAgICBjb25zdCBuZXh0RWxlbWVudEludGVydmFsID0gcGFyc2VJbnQobmV4dEVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWludGVydmFsJyksIDEwKVxuICAgICAgaWYgKG5leHRFbGVtZW50SW50ZXJ2YWwpIHtcbiAgICAgICAgdGhpcy5fY29uZmlnLmRlZmF1bHRJbnRlcnZhbCA9IHRoaXMuX2NvbmZpZy5kZWZhdWx0SW50ZXJ2YWwgfHwgdGhpcy5fY29uZmlnLmludGVydmFsXG4gICAgICAgIHRoaXMuX2NvbmZpZy5pbnRlcnZhbCA9IG5leHRFbGVtZW50SW50ZXJ2YWxcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX2NvbmZpZy5pbnRlcnZhbCA9IHRoaXMuX2NvbmZpZy5kZWZhdWx0SW50ZXJ2YWwgfHwgdGhpcy5fY29uZmlnLmludGVydmFsXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHRyYW5zaXRpb25EdXJhdGlvbiA9IFV0aWwuZ2V0VHJhbnNpdGlvbkR1cmF0aW9uRnJvbUVsZW1lbnQoYWN0aXZlRWxlbWVudClcblxuICAgICAgJChhY3RpdmVFbGVtZW50KVxuICAgICAgICAub25lKFV0aWwuVFJBTlNJVElPTl9FTkQsICgpID0+IHtcbiAgICAgICAgICAkKG5leHRFbGVtZW50KVxuICAgICAgICAgICAgLnJlbW92ZUNsYXNzKGAke2RpcmVjdGlvbmFsQ2xhc3NOYW1lfSAke29yZGVyQ2xhc3NOYW1lfWApXG4gICAgICAgICAgICAuYWRkQ2xhc3MoQ2xhc3NOYW1lLkFDVElWRSlcblxuICAgICAgICAgICQoYWN0aXZlRWxlbWVudCkucmVtb3ZlQ2xhc3MoYCR7Q2xhc3NOYW1lLkFDVElWRX0gJHtvcmRlckNsYXNzTmFtZX0gJHtkaXJlY3Rpb25hbENsYXNzTmFtZX1gKVxuXG4gICAgICAgICAgdGhpcy5faXNTbGlkaW5nID0gZmFsc2VcblxuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gJCh0aGlzLl9lbGVtZW50KS50cmlnZ2VyKHNsaWRFdmVudCksIDApXG4gICAgICAgIH0pXG4gICAgICAgIC5lbXVsYXRlVHJhbnNpdGlvbkVuZCh0cmFuc2l0aW9uRHVyYXRpb24pXG4gICAgfSBlbHNlIHtcbiAgICAgICQoYWN0aXZlRWxlbWVudCkucmVtb3ZlQ2xhc3MoQ2xhc3NOYW1lLkFDVElWRSlcbiAgICAgICQobmV4dEVsZW1lbnQpLmFkZENsYXNzKENsYXNzTmFtZS5BQ1RJVkUpXG5cbiAgICAgIHRoaXMuX2lzU2xpZGluZyA9IGZhbHNlXG4gICAgICAkKHRoaXMuX2VsZW1lbnQpLnRyaWdnZXIoc2xpZEV2ZW50KVxuICAgIH1cblxuICAgIGlmIChpc0N5Y2xpbmcpIHtcbiAgICAgIHRoaXMuY3ljbGUoKVxuICAgIH1cbiAgfVxuXG4gIC8vIFN0YXRpY1xuXG4gIHN0YXRpYyBfalF1ZXJ5SW50ZXJmYWNlKGNvbmZpZykge1xuICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgbGV0IGRhdGEgPSAkKHRoaXMpLmRhdGEoREFUQV9LRVkpXG4gICAgICBsZXQgX2NvbmZpZyA9IHtcbiAgICAgICAgLi4uRGVmYXVsdCxcbiAgICAgICAgLi4uJCh0aGlzKS5kYXRhKClcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBjb25maWcgPT09ICdvYmplY3QnKSB7XG4gICAgICAgIF9jb25maWcgPSB7XG4gICAgICAgICAgLi4uX2NvbmZpZyxcbiAgICAgICAgICAuLi5jb25maWdcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBjb25zdCBhY3Rpb24gPSB0eXBlb2YgY29uZmlnID09PSAnc3RyaW5nJyA/IGNvbmZpZyA6IF9jb25maWcuc2xpZGVcblxuICAgICAgaWYgKCFkYXRhKSB7XG4gICAgICAgIGRhdGEgPSBuZXcgQ2Fyb3VzZWwodGhpcywgX2NvbmZpZylcbiAgICAgICAgJCh0aGlzKS5kYXRhKERBVEFfS0VZLCBkYXRhKVxuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGNvbmZpZyA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgZGF0YS50byhjb25maWcpXG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiBhY3Rpb24gPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGlmICh0eXBlb2YgZGF0YVthY3Rpb25dID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYE5vIG1ldGhvZCBuYW1lZCBcIiR7YWN0aW9ufVwiYClcbiAgICAgICAgfVxuICAgICAgICBkYXRhW2FjdGlvbl0oKVxuICAgICAgfSBlbHNlIGlmIChfY29uZmlnLmludGVydmFsICYmIF9jb25maWcucmlkZSkge1xuICAgICAgICBkYXRhLnBhdXNlKClcbiAgICAgICAgZGF0YS5jeWNsZSgpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIHN0YXRpYyBfZGF0YUFwaUNsaWNrSGFuZGxlcihldmVudCkge1xuICAgIGNvbnN0IHNlbGVjdG9yID0gVXRpbC5nZXRTZWxlY3RvckZyb21FbGVtZW50KHRoaXMpXG5cbiAgICBpZiAoIXNlbGVjdG9yKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCB0YXJnZXQgPSAkKHNlbGVjdG9yKVswXVxuXG4gICAgaWYgKCF0YXJnZXQgfHwgISQodGFyZ2V0KS5oYXNDbGFzcyhDbGFzc05hbWUuQ0FST1VTRUwpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBjb25maWcgPSB7XG4gICAgICAuLi4kKHRhcmdldCkuZGF0YSgpLFxuICAgICAgLi4uJCh0aGlzKS5kYXRhKClcbiAgICB9XG4gICAgY29uc3Qgc2xpZGVJbmRleCA9IHRoaXMuZ2V0QXR0cmlidXRlKCdkYXRhLXNsaWRlLXRvJylcblxuICAgIGlmIChzbGlkZUluZGV4KSB7XG4gICAgICBjb25maWcuaW50ZXJ2YWwgPSBmYWxzZVxuICAgIH1cblxuICAgIENhcm91c2VsLl9qUXVlcnlJbnRlcmZhY2UuY2FsbCgkKHRhcmdldCksIGNvbmZpZylcblxuICAgIGlmIChzbGlkZUluZGV4KSB7XG4gICAgICAkKHRhcmdldCkuZGF0YShEQVRBX0tFWSkudG8oc2xpZGVJbmRleClcbiAgICB9XG5cbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gIH1cbn1cblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIERhdGEgQXBpIGltcGxlbWVudGF0aW9uXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG4kKGRvY3VtZW50KVxuICAub24oRXZlbnQuQ0xJQ0tfREFUQV9BUEksIFNlbGVjdG9yLkRBVEFfU0xJREUsIENhcm91c2VsLl9kYXRhQXBpQ2xpY2tIYW5kbGVyKVxuXG4kKHdpbmRvdykub24oRXZlbnQuTE9BRF9EQVRBX0FQSSwgKCkgPT4ge1xuICBjb25zdCBjYXJvdXNlbHMgPSBbXS5zbGljZS5jYWxsKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoU2VsZWN0b3IuREFUQV9SSURFKSlcbiAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IGNhcm91c2Vscy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgIGNvbnN0ICRjYXJvdXNlbCA9ICQoY2Fyb3VzZWxzW2ldKVxuICAgIENhcm91c2VsLl9qUXVlcnlJbnRlcmZhY2UuY2FsbCgkY2Fyb3VzZWwsICRjYXJvdXNlbC5kYXRhKCkpXG4gIH1cbn0pXG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBqUXVlcnlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbiQuZm5bTkFNRV0gPSBDYXJvdXNlbC5falF1ZXJ5SW50ZXJmYWNlXG4kLmZuW05BTUVdLkNvbnN0cnVjdG9yID0gQ2Fyb3VzZWxcbiQuZm5bTkFNRV0ubm9Db25mbGljdCA9ICgpID0+IHtcbiAgJC5mbltOQU1FXSA9IEpRVUVSWV9OT19DT05GTElDVFxuICByZXR1cm4gQ2Fyb3VzZWwuX2pRdWVyeUludGVyZmFjZVxufVxuXG5leHBvcnQgZGVmYXVsdCBDYXJvdXNlbFxuIiwiLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQm9vdHN0cmFwICh2NC4zLjEpOiBjb2xsYXBzZS5qc1xuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYXN0ZXIvTElDRU5TRSlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5J1xuaW1wb3J0IFV0aWwgZnJvbSAnLi91dGlsJ1xuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQ29uc3RhbnRzXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5jb25zdCBOQU1FICAgICAgICAgICAgICAgID0gJ2NvbGxhcHNlJ1xuY29uc3QgVkVSU0lPTiAgICAgICAgICAgICA9ICc0LjMuMSdcbmNvbnN0IERBVEFfS0VZICAgICAgICAgICAgPSAnYnMuY29sbGFwc2UnXG5jb25zdCBFVkVOVF9LRVkgICAgICAgICAgID0gYC4ke0RBVEFfS0VZfWBcbmNvbnN0IERBVEFfQVBJX0tFWSAgICAgICAgPSAnLmRhdGEtYXBpJ1xuY29uc3QgSlFVRVJZX05PX0NPTkZMSUNUICA9ICQuZm5bTkFNRV1cblxuY29uc3QgRGVmYXVsdCA9IHtcbiAgdG9nZ2xlIDogdHJ1ZSxcbiAgcGFyZW50IDogJydcbn1cblxuY29uc3QgRGVmYXVsdFR5cGUgPSB7XG4gIHRvZ2dsZSA6ICdib29sZWFuJyxcbiAgcGFyZW50IDogJyhzdHJpbmd8ZWxlbWVudCknXG59XG5cbmNvbnN0IEV2ZW50ID0ge1xuICBTSE9XICAgICAgICAgICA6IGBzaG93JHtFVkVOVF9LRVl9YCxcbiAgU0hPV04gICAgICAgICAgOiBgc2hvd24ke0VWRU5UX0tFWX1gLFxuICBISURFICAgICAgICAgICA6IGBoaWRlJHtFVkVOVF9LRVl9YCxcbiAgSElEREVOICAgICAgICAgOiBgaGlkZGVuJHtFVkVOVF9LRVl9YCxcbiAgQ0xJQ0tfREFUQV9BUEkgOiBgY2xpY2ske0VWRU5UX0tFWX0ke0RBVEFfQVBJX0tFWX1gXG59XG5cbmNvbnN0IENsYXNzTmFtZSA9IHtcbiAgU0hPVyAgICAgICA6ICdzaG93JyxcbiAgQ09MTEFQU0UgICA6ICdjb2xsYXBzZScsXG4gIENPTExBUFNJTkcgOiAnY29sbGFwc2luZycsXG4gIENPTExBUFNFRCAgOiAnY29sbGFwc2VkJ1xufVxuXG5jb25zdCBEaW1lbnNpb24gPSB7XG4gIFdJRFRIICA6ICd3aWR0aCcsXG4gIEhFSUdIVCA6ICdoZWlnaHQnXG59XG5cbmNvbnN0IFNlbGVjdG9yID0ge1xuICBBQ1RJVkVTICAgICA6ICcuc2hvdywgLmNvbGxhcHNpbmcnLFxuICBEQVRBX1RPR0dMRSA6ICdbZGF0YS10b2dnbGU9XCJjb2xsYXBzZVwiXSdcbn1cblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIENsYXNzIERlZmluaXRpb25cbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmNsYXNzIENvbGxhcHNlIHtcbiAgY29uc3RydWN0b3IoZWxlbWVudCwgY29uZmlnKSB7XG4gICAgdGhpcy5faXNUcmFuc2l0aW9uaW5nID0gZmFsc2VcbiAgICB0aGlzLl9lbGVtZW50ICAgICAgICAgPSBlbGVtZW50XG4gICAgdGhpcy5fY29uZmlnICAgICAgICAgID0gdGhpcy5fZ2V0Q29uZmlnKGNvbmZpZylcbiAgICB0aGlzLl90cmlnZ2VyQXJyYXkgICAgPSBbXS5zbGljZS5jYWxsKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXG4gICAgICBgW2RhdGEtdG9nZ2xlPVwiY29sbGFwc2VcIl1baHJlZj1cIiMke2VsZW1lbnQuaWR9XCJdLGAgK1xuICAgICAgYFtkYXRhLXRvZ2dsZT1cImNvbGxhcHNlXCJdW2RhdGEtdGFyZ2V0PVwiIyR7ZWxlbWVudC5pZH1cIl1gXG4gICAgKSlcblxuICAgIGNvbnN0IHRvZ2dsZUxpc3QgPSBbXS5zbGljZS5jYWxsKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoU2VsZWN0b3IuREFUQV9UT0dHTEUpKVxuICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSB0b2dnbGVMaXN0Lmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICBjb25zdCBlbGVtID0gdG9nZ2xlTGlzdFtpXVxuICAgICAgY29uc3Qgc2VsZWN0b3IgPSBVdGlsLmdldFNlbGVjdG9yRnJvbUVsZW1lbnQoZWxlbSlcbiAgICAgIGNvbnN0IGZpbHRlckVsZW1lbnQgPSBbXS5zbGljZS5jYWxsKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpKVxuICAgICAgICAuZmlsdGVyKChmb3VuZEVsZW0pID0+IGZvdW5kRWxlbSA9PT0gZWxlbWVudClcblxuICAgICAgaWYgKHNlbGVjdG9yICE9PSBudWxsICYmIGZpbHRlckVsZW1lbnQubGVuZ3RoID4gMCkge1xuICAgICAgICB0aGlzLl9zZWxlY3RvciA9IHNlbGVjdG9yXG4gICAgICAgIHRoaXMuX3RyaWdnZXJBcnJheS5wdXNoKGVsZW0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5fcGFyZW50ID0gdGhpcy5fY29uZmlnLnBhcmVudCA/IHRoaXMuX2dldFBhcmVudCgpIDogbnVsbFxuXG4gICAgaWYgKCF0aGlzLl9jb25maWcucGFyZW50KSB7XG4gICAgICB0aGlzLl9hZGRBcmlhQW5kQ29sbGFwc2VkQ2xhc3ModGhpcy5fZWxlbWVudCwgdGhpcy5fdHJpZ2dlckFycmF5KVxuICAgIH1cblxuICAgIGlmICh0aGlzLl9jb25maWcudG9nZ2xlKSB7XG4gICAgICB0aGlzLnRvZ2dsZSgpXG4gICAgfVxuICB9XG5cbiAgLy8gR2V0dGVyc1xuXG4gIHN0YXRpYyBnZXQgVkVSU0lPTigpIHtcbiAgICByZXR1cm4gVkVSU0lPTlxuICB9XG5cbiAgc3RhdGljIGdldCBEZWZhdWx0KCkge1xuICAgIHJldHVybiBEZWZhdWx0XG4gIH1cblxuICAvLyBQdWJsaWNcblxuICB0b2dnbGUoKSB7XG4gICAgaWYgKCQodGhpcy5fZWxlbWVudCkuaGFzQ2xhc3MoQ2xhc3NOYW1lLlNIT1cpKSB7XG4gICAgICB0aGlzLmhpZGUoKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNob3coKVxuICAgIH1cbiAgfVxuXG4gIHNob3coKSB7XG4gICAgaWYgKHRoaXMuX2lzVHJhbnNpdGlvbmluZyB8fFxuICAgICAgJCh0aGlzLl9lbGVtZW50KS5oYXNDbGFzcyhDbGFzc05hbWUuU0hPVykpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGxldCBhY3RpdmVzXG4gICAgbGV0IGFjdGl2ZXNEYXRhXG5cbiAgICBpZiAodGhpcy5fcGFyZW50KSB7XG4gICAgICBhY3RpdmVzID0gW10uc2xpY2UuY2FsbCh0aGlzLl9wYXJlbnQucXVlcnlTZWxlY3RvckFsbChTZWxlY3Rvci5BQ1RJVkVTKSlcbiAgICAgICAgLmZpbHRlcigoZWxlbSkgPT4ge1xuICAgICAgICAgIGlmICh0eXBlb2YgdGhpcy5fY29uZmlnLnBhcmVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIHJldHVybiBlbGVtLmdldEF0dHJpYnV0ZSgnZGF0YS1wYXJlbnQnKSA9PT0gdGhpcy5fY29uZmlnLnBhcmVudFxuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBlbGVtLmNsYXNzTGlzdC5jb250YWlucyhDbGFzc05hbWUuQ09MTEFQU0UpXG4gICAgICAgIH0pXG5cbiAgICAgIGlmIChhY3RpdmVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBhY3RpdmVzID0gbnVsbFxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChhY3RpdmVzKSB7XG4gICAgICBhY3RpdmVzRGF0YSA9ICQoYWN0aXZlcykubm90KHRoaXMuX3NlbGVjdG9yKS5kYXRhKERBVEFfS0VZKVxuICAgICAgaWYgKGFjdGl2ZXNEYXRhICYmIGFjdGl2ZXNEYXRhLl9pc1RyYW5zaXRpb25pbmcpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3Qgc3RhcnRFdmVudCA9ICQuRXZlbnQoRXZlbnQuU0hPVylcbiAgICAkKHRoaXMuX2VsZW1lbnQpLnRyaWdnZXIoc3RhcnRFdmVudClcbiAgICBpZiAoc3RhcnRFdmVudC5pc0RlZmF1bHRQcmV2ZW50ZWQoKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKGFjdGl2ZXMpIHtcbiAgICAgIENvbGxhcHNlLl9qUXVlcnlJbnRlcmZhY2UuY2FsbCgkKGFjdGl2ZXMpLm5vdCh0aGlzLl9zZWxlY3RvciksICdoaWRlJylcbiAgICAgIGlmICghYWN0aXZlc0RhdGEpIHtcbiAgICAgICAgJChhY3RpdmVzKS5kYXRhKERBVEFfS0VZLCBudWxsKVxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGRpbWVuc2lvbiA9IHRoaXMuX2dldERpbWVuc2lvbigpXG5cbiAgICAkKHRoaXMuX2VsZW1lbnQpXG4gICAgICAucmVtb3ZlQ2xhc3MoQ2xhc3NOYW1lLkNPTExBUFNFKVxuICAgICAgLmFkZENsYXNzKENsYXNzTmFtZS5DT0xMQVBTSU5HKVxuXG4gICAgdGhpcy5fZWxlbWVudC5zdHlsZVtkaW1lbnNpb25dID0gMFxuXG4gICAgaWYgKHRoaXMuX3RyaWdnZXJBcnJheS5sZW5ndGgpIHtcbiAgICAgICQodGhpcy5fdHJpZ2dlckFycmF5KVxuICAgICAgICAucmVtb3ZlQ2xhc3MoQ2xhc3NOYW1lLkNPTExBUFNFRClcbiAgICAgICAgLmF0dHIoJ2FyaWEtZXhwYW5kZWQnLCB0cnVlKVxuICAgIH1cblxuICAgIHRoaXMuc2V0VHJhbnNpdGlvbmluZyh0cnVlKVxuXG4gICAgY29uc3QgY29tcGxldGUgPSAoKSA9PiB7XG4gICAgICAkKHRoaXMuX2VsZW1lbnQpXG4gICAgICAgIC5yZW1vdmVDbGFzcyhDbGFzc05hbWUuQ09MTEFQU0lORylcbiAgICAgICAgLmFkZENsYXNzKENsYXNzTmFtZS5DT0xMQVBTRSlcbiAgICAgICAgLmFkZENsYXNzKENsYXNzTmFtZS5TSE9XKVxuXG4gICAgICB0aGlzLl9lbGVtZW50LnN0eWxlW2RpbWVuc2lvbl0gPSAnJ1xuXG4gICAgICB0aGlzLnNldFRyYW5zaXRpb25pbmcoZmFsc2UpXG5cbiAgICAgICQodGhpcy5fZWxlbWVudCkudHJpZ2dlcihFdmVudC5TSE9XTilcbiAgICB9XG5cbiAgICBjb25zdCBjYXBpdGFsaXplZERpbWVuc2lvbiA9IGRpbWVuc2lvblswXS50b1VwcGVyQ2FzZSgpICsgZGltZW5zaW9uLnNsaWNlKDEpXG4gICAgY29uc3Qgc2Nyb2xsU2l6ZSA9IGBzY3JvbGwke2NhcGl0YWxpemVkRGltZW5zaW9ufWBcbiAgICBjb25zdCB0cmFuc2l0aW9uRHVyYXRpb24gPSBVdGlsLmdldFRyYW5zaXRpb25EdXJhdGlvbkZyb21FbGVtZW50KHRoaXMuX2VsZW1lbnQpXG5cbiAgICAkKHRoaXMuX2VsZW1lbnQpXG4gICAgICAub25lKFV0aWwuVFJBTlNJVElPTl9FTkQsIGNvbXBsZXRlKVxuICAgICAgLmVtdWxhdGVUcmFuc2l0aW9uRW5kKHRyYW5zaXRpb25EdXJhdGlvbilcblxuICAgIHRoaXMuX2VsZW1lbnQuc3R5bGVbZGltZW5zaW9uXSA9IGAke3RoaXMuX2VsZW1lbnRbc2Nyb2xsU2l6ZV19cHhgXG4gIH1cblxuICBoaWRlKCkge1xuICAgIGlmICh0aGlzLl9pc1RyYW5zaXRpb25pbmcgfHxcbiAgICAgICEkKHRoaXMuX2VsZW1lbnQpLmhhc0NsYXNzKENsYXNzTmFtZS5TSE9XKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3Qgc3RhcnRFdmVudCA9ICQuRXZlbnQoRXZlbnQuSElERSlcbiAgICAkKHRoaXMuX2VsZW1lbnQpLnRyaWdnZXIoc3RhcnRFdmVudClcbiAgICBpZiAoc3RhcnRFdmVudC5pc0RlZmF1bHRQcmV2ZW50ZWQoKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgZGltZW5zaW9uID0gdGhpcy5fZ2V0RGltZW5zaW9uKClcblxuICAgIHRoaXMuX2VsZW1lbnQuc3R5bGVbZGltZW5zaW9uXSA9IGAke3RoaXMuX2VsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClbZGltZW5zaW9uXX1weGBcblxuICAgIFV0aWwucmVmbG93KHRoaXMuX2VsZW1lbnQpXG5cbiAgICAkKHRoaXMuX2VsZW1lbnQpXG4gICAgICAuYWRkQ2xhc3MoQ2xhc3NOYW1lLkNPTExBUFNJTkcpXG4gICAgICAucmVtb3ZlQ2xhc3MoQ2xhc3NOYW1lLkNPTExBUFNFKVxuICAgICAgLnJlbW92ZUNsYXNzKENsYXNzTmFtZS5TSE9XKVxuXG4gICAgY29uc3QgdHJpZ2dlckFycmF5TGVuZ3RoID0gdGhpcy5fdHJpZ2dlckFycmF5Lmxlbmd0aFxuICAgIGlmICh0cmlnZ2VyQXJyYXlMZW5ndGggPiAwKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRyaWdnZXJBcnJheUxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHRyaWdnZXIgPSB0aGlzLl90cmlnZ2VyQXJyYXlbaV1cbiAgICAgICAgY29uc3Qgc2VsZWN0b3IgPSBVdGlsLmdldFNlbGVjdG9yRnJvbUVsZW1lbnQodHJpZ2dlcilcblxuICAgICAgICBpZiAoc2VsZWN0b3IgIT09IG51bGwpIHtcbiAgICAgICAgICBjb25zdCAkZWxlbSA9ICQoW10uc2xpY2UuY2FsbChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKSkpXG4gICAgICAgICAgaWYgKCEkZWxlbS5oYXNDbGFzcyhDbGFzc05hbWUuU0hPVykpIHtcbiAgICAgICAgICAgICQodHJpZ2dlcikuYWRkQ2xhc3MoQ2xhc3NOYW1lLkNPTExBUFNFRClcbiAgICAgICAgICAgICAgLmF0dHIoJ2FyaWEtZXhwYW5kZWQnLCBmYWxzZSlcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLnNldFRyYW5zaXRpb25pbmcodHJ1ZSlcblxuICAgIGNvbnN0IGNvbXBsZXRlID0gKCkgPT4ge1xuICAgICAgdGhpcy5zZXRUcmFuc2l0aW9uaW5nKGZhbHNlKVxuICAgICAgJCh0aGlzLl9lbGVtZW50KVxuICAgICAgICAucmVtb3ZlQ2xhc3MoQ2xhc3NOYW1lLkNPTExBUFNJTkcpXG4gICAgICAgIC5hZGRDbGFzcyhDbGFzc05hbWUuQ09MTEFQU0UpXG4gICAgICAgIC50cmlnZ2VyKEV2ZW50LkhJRERFTilcbiAgICB9XG5cbiAgICB0aGlzLl9lbGVtZW50LnN0eWxlW2RpbWVuc2lvbl0gPSAnJ1xuICAgIGNvbnN0IHRyYW5zaXRpb25EdXJhdGlvbiA9IFV0aWwuZ2V0VHJhbnNpdGlvbkR1cmF0aW9uRnJvbUVsZW1lbnQodGhpcy5fZWxlbWVudClcblxuICAgICQodGhpcy5fZWxlbWVudClcbiAgICAgIC5vbmUoVXRpbC5UUkFOU0lUSU9OX0VORCwgY29tcGxldGUpXG4gICAgICAuZW11bGF0ZVRyYW5zaXRpb25FbmQodHJhbnNpdGlvbkR1cmF0aW9uKVxuICB9XG5cbiAgc2V0VHJhbnNpdGlvbmluZyhpc1RyYW5zaXRpb25pbmcpIHtcbiAgICB0aGlzLl9pc1RyYW5zaXRpb25pbmcgPSBpc1RyYW5zaXRpb25pbmdcbiAgfVxuXG4gIGRpc3Bvc2UoKSB7XG4gICAgJC5yZW1vdmVEYXRhKHRoaXMuX2VsZW1lbnQsIERBVEFfS0VZKVxuXG4gICAgdGhpcy5fY29uZmlnICAgICAgICAgID0gbnVsbFxuICAgIHRoaXMuX3BhcmVudCAgICAgICAgICA9IG51bGxcbiAgICB0aGlzLl9lbGVtZW50ICAgICAgICAgPSBudWxsXG4gICAgdGhpcy5fdHJpZ2dlckFycmF5ICAgID0gbnVsbFxuICAgIHRoaXMuX2lzVHJhbnNpdGlvbmluZyA9IG51bGxcbiAgfVxuXG4gIC8vIFByaXZhdGVcblxuICBfZ2V0Q29uZmlnKGNvbmZpZykge1xuICAgIGNvbmZpZyA9IHtcbiAgICAgIC4uLkRlZmF1bHQsXG4gICAgICAuLi5jb25maWdcbiAgICB9XG4gICAgY29uZmlnLnRvZ2dsZSA9IEJvb2xlYW4oY29uZmlnLnRvZ2dsZSkgLy8gQ29lcmNlIHN0cmluZyB2YWx1ZXNcbiAgICBVdGlsLnR5cGVDaGVja0NvbmZpZyhOQU1FLCBjb25maWcsIERlZmF1bHRUeXBlKVxuICAgIHJldHVybiBjb25maWdcbiAgfVxuXG4gIF9nZXREaW1lbnNpb24oKSB7XG4gICAgY29uc3QgaGFzV2lkdGggPSAkKHRoaXMuX2VsZW1lbnQpLmhhc0NsYXNzKERpbWVuc2lvbi5XSURUSClcbiAgICByZXR1cm4gaGFzV2lkdGggPyBEaW1lbnNpb24uV0lEVEggOiBEaW1lbnNpb24uSEVJR0hUXG4gIH1cblxuICBfZ2V0UGFyZW50KCkge1xuICAgIGxldCBwYXJlbnRcblxuICAgIGlmIChVdGlsLmlzRWxlbWVudCh0aGlzLl9jb25maWcucGFyZW50KSkge1xuICAgICAgcGFyZW50ID0gdGhpcy5fY29uZmlnLnBhcmVudFxuXG4gICAgICAvLyBJdCdzIGEgalF1ZXJ5IG9iamVjdFxuICAgICAgaWYgKHR5cGVvZiB0aGlzLl9jb25maWcucGFyZW50LmpxdWVyeSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgcGFyZW50ID0gdGhpcy5fY29uZmlnLnBhcmVudFswXVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBwYXJlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRoaXMuX2NvbmZpZy5wYXJlbnQpXG4gICAgfVxuXG4gICAgY29uc3Qgc2VsZWN0b3IgPVxuICAgICAgYFtkYXRhLXRvZ2dsZT1cImNvbGxhcHNlXCJdW2RhdGEtcGFyZW50PVwiJHt0aGlzLl9jb25maWcucGFyZW50fVwiXWBcblxuICAgIGNvbnN0IGNoaWxkcmVuID0gW10uc2xpY2UuY2FsbChwYXJlbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvcikpXG4gICAgJChjaGlsZHJlbikuZWFjaCgoaSwgZWxlbWVudCkgPT4ge1xuICAgICAgdGhpcy5fYWRkQXJpYUFuZENvbGxhcHNlZENsYXNzKFxuICAgICAgICBDb2xsYXBzZS5fZ2V0VGFyZ2V0RnJvbUVsZW1lbnQoZWxlbWVudCksXG4gICAgICAgIFtlbGVtZW50XVxuICAgICAgKVxuICAgIH0pXG5cbiAgICByZXR1cm4gcGFyZW50XG4gIH1cblxuICBfYWRkQXJpYUFuZENvbGxhcHNlZENsYXNzKGVsZW1lbnQsIHRyaWdnZXJBcnJheSkge1xuICAgIGNvbnN0IGlzT3BlbiA9ICQoZWxlbWVudCkuaGFzQ2xhc3MoQ2xhc3NOYW1lLlNIT1cpXG5cbiAgICBpZiAodHJpZ2dlckFycmF5Lmxlbmd0aCkge1xuICAgICAgJCh0cmlnZ2VyQXJyYXkpXG4gICAgICAgIC50b2dnbGVDbGFzcyhDbGFzc05hbWUuQ09MTEFQU0VELCAhaXNPcGVuKVxuICAgICAgICAuYXR0cignYXJpYS1leHBhbmRlZCcsIGlzT3BlbilcbiAgICB9XG4gIH1cblxuICAvLyBTdGF0aWNcblxuICBzdGF0aWMgX2dldFRhcmdldEZyb21FbGVtZW50KGVsZW1lbnQpIHtcbiAgICBjb25zdCBzZWxlY3RvciA9IFV0aWwuZ2V0U2VsZWN0b3JGcm9tRWxlbWVudChlbGVtZW50KVxuICAgIHJldHVybiBzZWxlY3RvciA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpIDogbnVsbFxuICB9XG5cbiAgc3RhdGljIF9qUXVlcnlJbnRlcmZhY2UoY29uZmlnKSB7XG4gICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICBjb25zdCAkdGhpcyAgID0gJCh0aGlzKVxuICAgICAgbGV0IGRhdGEgICAgICA9ICR0aGlzLmRhdGEoREFUQV9LRVkpXG4gICAgICBjb25zdCBfY29uZmlnID0ge1xuICAgICAgICAuLi5EZWZhdWx0LFxuICAgICAgICAuLi4kdGhpcy5kYXRhKCksXG4gICAgICAgIC4uLnR5cGVvZiBjb25maWcgPT09ICdvYmplY3QnICYmIGNvbmZpZyA/IGNvbmZpZyA6IHt9XG4gICAgICB9XG5cbiAgICAgIGlmICghZGF0YSAmJiBfY29uZmlnLnRvZ2dsZSAmJiAvc2hvd3xoaWRlLy50ZXN0KGNvbmZpZykpIHtcbiAgICAgICAgX2NvbmZpZy50b2dnbGUgPSBmYWxzZVxuICAgICAgfVxuXG4gICAgICBpZiAoIWRhdGEpIHtcbiAgICAgICAgZGF0YSA9IG5ldyBDb2xsYXBzZSh0aGlzLCBfY29uZmlnKVxuICAgICAgICAkdGhpcy5kYXRhKERBVEFfS0VZLCBkYXRhKVxuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGNvbmZpZyA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBkYXRhW2NvbmZpZ10gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgTm8gbWV0aG9kIG5hbWVkIFwiJHtjb25maWd9XCJgKVxuICAgICAgICB9XG4gICAgICAgIGRhdGFbY29uZmlnXSgpXG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogRGF0YSBBcGkgaW1wbGVtZW50YXRpb25cbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbiQoZG9jdW1lbnQpLm9uKEV2ZW50LkNMSUNLX0RBVEFfQVBJLCBTZWxlY3Rvci5EQVRBX1RPR0dMRSwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gIC8vIHByZXZlbnREZWZhdWx0IG9ubHkgZm9yIDxhPiBlbGVtZW50cyAod2hpY2ggY2hhbmdlIHRoZSBVUkwpIG5vdCBpbnNpZGUgdGhlIGNvbGxhcHNpYmxlIGVsZW1lbnRcbiAgaWYgKGV2ZW50LmN1cnJlbnRUYXJnZXQudGFnTmFtZSA9PT0gJ0EnKSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICB9XG5cbiAgY29uc3QgJHRyaWdnZXIgPSAkKHRoaXMpXG4gIGNvbnN0IHNlbGVjdG9yID0gVXRpbC5nZXRTZWxlY3RvckZyb21FbGVtZW50KHRoaXMpXG4gIGNvbnN0IHNlbGVjdG9ycyA9IFtdLnNsaWNlLmNhbGwoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvcikpXG5cbiAgJChzZWxlY3RvcnMpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0ICR0YXJnZXQgPSAkKHRoaXMpXG4gICAgY29uc3QgZGF0YSAgICA9ICR0YXJnZXQuZGF0YShEQVRBX0tFWSlcbiAgICBjb25zdCBjb25maWcgID0gZGF0YSA/ICd0b2dnbGUnIDogJHRyaWdnZXIuZGF0YSgpXG4gICAgQ29sbGFwc2UuX2pRdWVyeUludGVyZmFjZS5jYWxsKCR0YXJnZXQsIGNvbmZpZylcbiAgfSlcbn0pXG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBqUXVlcnlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbiQuZm5bTkFNRV0gPSBDb2xsYXBzZS5falF1ZXJ5SW50ZXJmYWNlXG4kLmZuW05BTUVdLkNvbnN0cnVjdG9yID0gQ29sbGFwc2VcbiQuZm5bTkFNRV0ubm9Db25mbGljdCA9ICgpID0+IHtcbiAgJC5mbltOQU1FXSA9IEpRVUVSWV9OT19DT05GTElDVFxuICByZXR1cm4gQ29sbGFwc2UuX2pRdWVyeUludGVyZmFjZVxufVxuXG5leHBvcnQgZGVmYXVsdCBDb2xsYXBzZVxuIiwiLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQm9vdHN0cmFwICh2NC4zLjEpOiBkcm9wZG93bi5qc1xuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYXN0ZXIvTElDRU5TRSlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5J1xuaW1wb3J0IFBvcHBlciBmcm9tICdwb3BwZXIuanMnXG5pbXBvcnQgVXRpbCBmcm9tICcuL3V0aWwnXG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBDb25zdGFudHNcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmNvbnN0IE5BTUUgICAgICAgICAgICAgICAgICAgICA9ICdkcm9wZG93bidcbmNvbnN0IFZFUlNJT04gICAgICAgICAgICAgICAgICA9ICc0LjMuMSdcbmNvbnN0IERBVEFfS0VZICAgICAgICAgICAgICAgICA9ICdicy5kcm9wZG93bidcbmNvbnN0IEVWRU5UX0tFWSAgICAgICAgICAgICAgICA9IGAuJHtEQVRBX0tFWX1gXG5jb25zdCBEQVRBX0FQSV9LRVkgICAgICAgICAgICAgPSAnLmRhdGEtYXBpJ1xuY29uc3QgSlFVRVJZX05PX0NPTkZMSUNUICAgICAgID0gJC5mbltOQU1FXVxuY29uc3QgRVNDQVBFX0tFWUNPREUgICAgICAgICAgID0gMjcgLy8gS2V5Ym9hcmRFdmVudC53aGljaCB2YWx1ZSBmb3IgRXNjYXBlIChFc2MpIGtleVxuY29uc3QgU1BBQ0VfS0VZQ09ERSAgICAgICAgICAgID0gMzIgLy8gS2V5Ym9hcmRFdmVudC53aGljaCB2YWx1ZSBmb3Igc3BhY2Uga2V5XG5jb25zdCBUQUJfS0VZQ09ERSAgICAgICAgICAgICAgPSA5IC8vIEtleWJvYXJkRXZlbnQud2hpY2ggdmFsdWUgZm9yIHRhYiBrZXlcbmNvbnN0IEFSUk9XX1VQX0tFWUNPREUgICAgICAgICA9IDM4IC8vIEtleWJvYXJkRXZlbnQud2hpY2ggdmFsdWUgZm9yIHVwIGFycm93IGtleVxuY29uc3QgQVJST1dfRE9XTl9LRVlDT0RFICAgICAgID0gNDAgLy8gS2V5Ym9hcmRFdmVudC53aGljaCB2YWx1ZSBmb3IgZG93biBhcnJvdyBrZXlcbmNvbnN0IFJJR0hUX01PVVNFX0JVVFRPTl9XSElDSCA9IDMgLy8gTW91c2VFdmVudC53aGljaCB2YWx1ZSBmb3IgdGhlIHJpZ2h0IGJ1dHRvbiAoYXNzdW1pbmcgYSByaWdodC1oYW5kZWQgbW91c2UpXG5jb25zdCBSRUdFWFBfS0VZRE9XTiAgICAgICAgICAgPSBuZXcgUmVnRXhwKGAke0FSUk9XX1VQX0tFWUNPREV9fCR7QVJST1dfRE9XTl9LRVlDT0RFfXwke0VTQ0FQRV9LRVlDT0RFfWApXG5cbmNvbnN0IEV2ZW50ID0ge1xuICBISURFICAgICAgICAgICAgIDogYGhpZGUke0VWRU5UX0tFWX1gLFxuICBISURERU4gICAgICAgICAgIDogYGhpZGRlbiR7RVZFTlRfS0VZfWAsXG4gIFNIT1cgICAgICAgICAgICAgOiBgc2hvdyR7RVZFTlRfS0VZfWAsXG4gIFNIT1dOICAgICAgICAgICAgOiBgc2hvd24ke0VWRU5UX0tFWX1gLFxuICBDTElDSyAgICAgICAgICAgIDogYGNsaWNrJHtFVkVOVF9LRVl9YCxcbiAgQ0xJQ0tfREFUQV9BUEkgICA6IGBjbGljayR7RVZFTlRfS0VZfSR7REFUQV9BUElfS0VZfWAsXG4gIEtFWURPV05fREFUQV9BUEkgOiBga2V5ZG93biR7RVZFTlRfS0VZfSR7REFUQV9BUElfS0VZfWAsXG4gIEtFWVVQX0RBVEFfQVBJICAgOiBga2V5dXAke0VWRU5UX0tFWX0ke0RBVEFfQVBJX0tFWX1gXG59XG5cbmNvbnN0IENsYXNzTmFtZSA9IHtcbiAgRElTQUJMRUQgICAgICAgIDogJ2Rpc2FibGVkJyxcbiAgU0hPVyAgICAgICAgICAgIDogJ3Nob3cnLFxuICBEUk9QVVAgICAgICAgICAgOiAnZHJvcHVwJyxcbiAgRFJPUFJJR0hUICAgICAgIDogJ2Ryb3ByaWdodCcsXG4gIERST1BMRUZUICAgICAgICA6ICdkcm9wbGVmdCcsXG4gIE1FTlVSSUdIVCAgICAgICA6ICdkcm9wZG93bi1tZW51LXJpZ2h0JyxcbiAgTUVOVUxFRlQgICAgICAgIDogJ2Ryb3Bkb3duLW1lbnUtbGVmdCcsXG4gIFBPU0lUSU9OX1NUQVRJQyA6ICdwb3NpdGlvbi1zdGF0aWMnXG59XG5cbmNvbnN0IFNlbGVjdG9yID0ge1xuICBEQVRBX1RPR0dMRSAgIDogJ1tkYXRhLXRvZ2dsZT1cImRyb3Bkb3duXCJdJyxcbiAgRk9STV9DSElMRCAgICA6ICcuZHJvcGRvd24gZm9ybScsXG4gIE1FTlUgICAgICAgICAgOiAnLmRyb3Bkb3duLW1lbnUnLFxuICBOQVZCQVJfTkFWICAgIDogJy5uYXZiYXItbmF2JyxcbiAgVklTSUJMRV9JVEVNUyA6ICcuZHJvcGRvd24tbWVudSAuZHJvcGRvd24taXRlbTpub3QoLmRpc2FibGVkKTpub3QoOmRpc2FibGVkKSdcbn1cblxuY29uc3QgQXR0YWNobWVudE1hcCA9IHtcbiAgVE9QICAgICAgIDogJ3RvcC1zdGFydCcsXG4gIFRPUEVORCAgICA6ICd0b3AtZW5kJyxcbiAgQk9UVE9NICAgIDogJ2JvdHRvbS1zdGFydCcsXG4gIEJPVFRPTUVORCA6ICdib3R0b20tZW5kJyxcbiAgUklHSFQgICAgIDogJ3JpZ2h0LXN0YXJ0JyxcbiAgUklHSFRFTkQgIDogJ3JpZ2h0LWVuZCcsXG4gIExFRlQgICAgICA6ICdsZWZ0LXN0YXJ0JyxcbiAgTEVGVEVORCAgIDogJ2xlZnQtZW5kJ1xufVxuXG5jb25zdCBEZWZhdWx0ID0ge1xuICBvZmZzZXQgICAgOiAwLFxuICBmbGlwICAgICAgOiB0cnVlLFxuICBib3VuZGFyeSAgOiAnc2Nyb2xsUGFyZW50JyxcbiAgcmVmZXJlbmNlIDogJ3RvZ2dsZScsXG4gIGRpc3BsYXkgICA6ICdkeW5hbWljJ1xufVxuXG5jb25zdCBEZWZhdWx0VHlwZSA9IHtcbiAgb2Zmc2V0ICAgIDogJyhudW1iZXJ8c3RyaW5nfGZ1bmN0aW9uKScsXG4gIGZsaXAgICAgICA6ICdib29sZWFuJyxcbiAgYm91bmRhcnkgIDogJyhzdHJpbmd8ZWxlbWVudCknLFxuICByZWZlcmVuY2UgOiAnKHN0cmluZ3xlbGVtZW50KScsXG4gIGRpc3BsYXkgICA6ICdzdHJpbmcnXG59XG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBDbGFzcyBEZWZpbml0aW9uXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5jbGFzcyBEcm9wZG93biB7XG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQsIGNvbmZpZykge1xuICAgIHRoaXMuX2VsZW1lbnQgID0gZWxlbWVudFxuICAgIHRoaXMuX3BvcHBlciAgID0gbnVsbFxuICAgIHRoaXMuX2NvbmZpZyAgID0gdGhpcy5fZ2V0Q29uZmlnKGNvbmZpZylcbiAgICB0aGlzLl9tZW51ICAgICA9IHRoaXMuX2dldE1lbnVFbGVtZW50KClcbiAgICB0aGlzLl9pbk5hdmJhciA9IHRoaXMuX2RldGVjdE5hdmJhcigpXG5cbiAgICB0aGlzLl9hZGRFdmVudExpc3RlbmVycygpXG4gIH1cblxuICAvLyBHZXR0ZXJzXG5cbiAgc3RhdGljIGdldCBWRVJTSU9OKCkge1xuICAgIHJldHVybiBWRVJTSU9OXG4gIH1cblxuICBzdGF0aWMgZ2V0IERlZmF1bHQoKSB7XG4gICAgcmV0dXJuIERlZmF1bHRcbiAgfVxuXG4gIHN0YXRpYyBnZXQgRGVmYXVsdFR5cGUoKSB7XG4gICAgcmV0dXJuIERlZmF1bHRUeXBlXG4gIH1cblxuICAvLyBQdWJsaWNcblxuICB0b2dnbGUoKSB7XG4gICAgaWYgKHRoaXMuX2VsZW1lbnQuZGlzYWJsZWQgfHwgJCh0aGlzLl9lbGVtZW50KS5oYXNDbGFzcyhDbGFzc05hbWUuRElTQUJMRUQpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBwYXJlbnQgICA9IERyb3Bkb3duLl9nZXRQYXJlbnRGcm9tRWxlbWVudCh0aGlzLl9lbGVtZW50KVxuICAgIGNvbnN0IGlzQWN0aXZlID0gJCh0aGlzLl9tZW51KS5oYXNDbGFzcyhDbGFzc05hbWUuU0hPVylcblxuICAgIERyb3Bkb3duLl9jbGVhck1lbnVzKClcblxuICAgIGlmIChpc0FjdGl2ZSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgcmVsYXRlZFRhcmdldCA9IHtcbiAgICAgIHJlbGF0ZWRUYXJnZXQ6IHRoaXMuX2VsZW1lbnRcbiAgICB9XG4gICAgY29uc3Qgc2hvd0V2ZW50ID0gJC5FdmVudChFdmVudC5TSE9XLCByZWxhdGVkVGFyZ2V0KVxuXG4gICAgJChwYXJlbnQpLnRyaWdnZXIoc2hvd0V2ZW50KVxuXG4gICAgaWYgKHNob3dFdmVudC5pc0RlZmF1bHRQcmV2ZW50ZWQoKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gRGlzYWJsZSB0b3RhbGx5IFBvcHBlci5qcyBmb3IgRHJvcGRvd24gaW4gTmF2YmFyXG4gICAgaWYgKCF0aGlzLl9pbk5hdmJhcikge1xuICAgICAgLyoqXG4gICAgICAgKiBDaGVjayBmb3IgUG9wcGVyIGRlcGVuZGVuY3lcbiAgICAgICAqIFBvcHBlciAtIGh0dHBzOi8vcG9wcGVyLmpzLm9yZ1xuICAgICAgICovXG4gICAgICBpZiAodHlwZW9mIFBvcHBlciA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQm9vdHN0cmFwXFwncyBkcm9wZG93bnMgcmVxdWlyZSBQb3BwZXIuanMgKGh0dHBzOi8vcG9wcGVyLmpzLm9yZy8pJylcbiAgICAgIH1cblxuICAgICAgbGV0IHJlZmVyZW5jZUVsZW1lbnQgPSB0aGlzLl9lbGVtZW50XG5cbiAgICAgIGlmICh0aGlzLl9jb25maWcucmVmZXJlbmNlID09PSAncGFyZW50Jykge1xuICAgICAgICByZWZlcmVuY2VFbGVtZW50ID0gcGFyZW50XG4gICAgICB9IGVsc2UgaWYgKFV0aWwuaXNFbGVtZW50KHRoaXMuX2NvbmZpZy5yZWZlcmVuY2UpKSB7XG4gICAgICAgIHJlZmVyZW5jZUVsZW1lbnQgPSB0aGlzLl9jb25maWcucmVmZXJlbmNlXG5cbiAgICAgICAgLy8gQ2hlY2sgaWYgaXQncyBqUXVlcnkgZWxlbWVudFxuICAgICAgICBpZiAodHlwZW9mIHRoaXMuX2NvbmZpZy5yZWZlcmVuY2UuanF1ZXJ5ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgIHJlZmVyZW5jZUVsZW1lbnQgPSB0aGlzLl9jb25maWcucmVmZXJlbmNlWzBdXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gSWYgYm91bmRhcnkgaXMgbm90IGBzY3JvbGxQYXJlbnRgLCB0aGVuIHNldCBwb3NpdGlvbiB0byBgc3RhdGljYFxuICAgICAgLy8gdG8gYWxsb3cgdGhlIG1lbnUgdG8gXCJlc2NhcGVcIiB0aGUgc2Nyb2xsIHBhcmVudCdzIGJvdW5kYXJpZXNcbiAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9pc3N1ZXMvMjQyNTFcbiAgICAgIGlmICh0aGlzLl9jb25maWcuYm91bmRhcnkgIT09ICdzY3JvbGxQYXJlbnQnKSB7XG4gICAgICAgICQocGFyZW50KS5hZGRDbGFzcyhDbGFzc05hbWUuUE9TSVRJT05fU1RBVElDKVxuICAgICAgfVxuICAgICAgdGhpcy5fcG9wcGVyID0gbmV3IFBvcHBlcihyZWZlcmVuY2VFbGVtZW50LCB0aGlzLl9tZW51LCB0aGlzLl9nZXRQb3BwZXJDb25maWcoKSlcbiAgICB9XG5cbiAgICAvLyBJZiB0aGlzIGlzIGEgdG91Y2gtZW5hYmxlZCBkZXZpY2Ugd2UgYWRkIGV4dHJhXG4gICAgLy8gZW1wdHkgbW91c2VvdmVyIGxpc3RlbmVycyB0byB0aGUgYm9keSdzIGltbWVkaWF0ZSBjaGlsZHJlbjtcbiAgICAvLyBvbmx5IG5lZWRlZCBiZWNhdXNlIG9mIGJyb2tlbiBldmVudCBkZWxlZ2F0aW9uIG9uIGlPU1xuICAgIC8vIGh0dHBzOi8vd3d3LnF1aXJrc21vZGUub3JnL2Jsb2cvYXJjaGl2ZXMvMjAxNC8wMi9tb3VzZV9ldmVudF9idWIuaHRtbFxuICAgIGlmICgnb250b3VjaHN0YXJ0JyBpbiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQgJiZcbiAgICAgICAgJChwYXJlbnQpLmNsb3Nlc3QoU2VsZWN0b3IuTkFWQkFSX05BVikubGVuZ3RoID09PSAwKSB7XG4gICAgICAkKGRvY3VtZW50LmJvZHkpLmNoaWxkcmVuKCkub24oJ21vdXNlb3ZlcicsIG51bGwsICQubm9vcClcbiAgICB9XG5cbiAgICB0aGlzLl9lbGVtZW50LmZvY3VzKClcbiAgICB0aGlzLl9lbGVtZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsIHRydWUpXG5cbiAgICAkKHRoaXMuX21lbnUpLnRvZ2dsZUNsYXNzKENsYXNzTmFtZS5TSE9XKVxuICAgICQocGFyZW50KVxuICAgICAgLnRvZ2dsZUNsYXNzKENsYXNzTmFtZS5TSE9XKVxuICAgICAgLnRyaWdnZXIoJC5FdmVudChFdmVudC5TSE9XTiwgcmVsYXRlZFRhcmdldCkpXG4gIH1cblxuICBzaG93KCkge1xuICAgIGlmICh0aGlzLl9lbGVtZW50LmRpc2FibGVkIHx8ICQodGhpcy5fZWxlbWVudCkuaGFzQ2xhc3MoQ2xhc3NOYW1lLkRJU0FCTEVEKSB8fCAkKHRoaXMuX21lbnUpLmhhc0NsYXNzKENsYXNzTmFtZS5TSE9XKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgcmVsYXRlZFRhcmdldCA9IHtcbiAgICAgIHJlbGF0ZWRUYXJnZXQ6IHRoaXMuX2VsZW1lbnRcbiAgICB9XG4gICAgY29uc3Qgc2hvd0V2ZW50ID0gJC5FdmVudChFdmVudC5TSE9XLCByZWxhdGVkVGFyZ2V0KVxuICAgIGNvbnN0IHBhcmVudCA9IERyb3Bkb3duLl9nZXRQYXJlbnRGcm9tRWxlbWVudCh0aGlzLl9lbGVtZW50KVxuXG4gICAgJChwYXJlbnQpLnRyaWdnZXIoc2hvd0V2ZW50KVxuXG4gICAgaWYgKHNob3dFdmVudC5pc0RlZmF1bHRQcmV2ZW50ZWQoKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgJCh0aGlzLl9tZW51KS50b2dnbGVDbGFzcyhDbGFzc05hbWUuU0hPVylcbiAgICAkKHBhcmVudClcbiAgICAgIC50b2dnbGVDbGFzcyhDbGFzc05hbWUuU0hPVylcbiAgICAgIC50cmlnZ2VyKCQuRXZlbnQoRXZlbnQuU0hPV04sIHJlbGF0ZWRUYXJnZXQpKVxuICB9XG5cbiAgaGlkZSgpIHtcbiAgICBpZiAodGhpcy5fZWxlbWVudC5kaXNhYmxlZCB8fCAkKHRoaXMuX2VsZW1lbnQpLmhhc0NsYXNzKENsYXNzTmFtZS5ESVNBQkxFRCkgfHwgISQodGhpcy5fbWVudSkuaGFzQ2xhc3MoQ2xhc3NOYW1lLlNIT1cpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCByZWxhdGVkVGFyZ2V0ID0ge1xuICAgICAgcmVsYXRlZFRhcmdldDogdGhpcy5fZWxlbWVudFxuICAgIH1cbiAgICBjb25zdCBoaWRlRXZlbnQgPSAkLkV2ZW50KEV2ZW50LkhJREUsIHJlbGF0ZWRUYXJnZXQpXG4gICAgY29uc3QgcGFyZW50ID0gRHJvcGRvd24uX2dldFBhcmVudEZyb21FbGVtZW50KHRoaXMuX2VsZW1lbnQpXG5cbiAgICAkKHBhcmVudCkudHJpZ2dlcihoaWRlRXZlbnQpXG5cbiAgICBpZiAoaGlkZUV2ZW50LmlzRGVmYXVsdFByZXZlbnRlZCgpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAkKHRoaXMuX21lbnUpLnRvZ2dsZUNsYXNzKENsYXNzTmFtZS5TSE9XKVxuICAgICQocGFyZW50KVxuICAgICAgLnRvZ2dsZUNsYXNzKENsYXNzTmFtZS5TSE9XKVxuICAgICAgLnRyaWdnZXIoJC5FdmVudChFdmVudC5ISURERU4sIHJlbGF0ZWRUYXJnZXQpKVxuICB9XG5cbiAgZGlzcG9zZSgpIHtcbiAgICAkLnJlbW92ZURhdGEodGhpcy5fZWxlbWVudCwgREFUQV9LRVkpXG4gICAgJCh0aGlzLl9lbGVtZW50KS5vZmYoRVZFTlRfS0VZKVxuICAgIHRoaXMuX2VsZW1lbnQgPSBudWxsXG4gICAgdGhpcy5fbWVudSA9IG51bGxcbiAgICBpZiAodGhpcy5fcG9wcGVyICE9PSBudWxsKSB7XG4gICAgICB0aGlzLl9wb3BwZXIuZGVzdHJveSgpXG4gICAgICB0aGlzLl9wb3BwZXIgPSBudWxsXG4gICAgfVxuICB9XG5cbiAgdXBkYXRlKCkge1xuICAgIHRoaXMuX2luTmF2YmFyID0gdGhpcy5fZGV0ZWN0TmF2YmFyKClcbiAgICBpZiAodGhpcy5fcG9wcGVyICE9PSBudWxsKSB7XG4gICAgICB0aGlzLl9wb3BwZXIuc2NoZWR1bGVVcGRhdGUoKVxuICAgIH1cbiAgfVxuXG4gIC8vIFByaXZhdGVcblxuICBfYWRkRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgJCh0aGlzLl9lbGVtZW50KS5vbihFdmVudC5DTElDSywgKGV2ZW50KSA9PiB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgdGhpcy50b2dnbGUoKVxuICAgIH0pXG4gIH1cblxuICBfZ2V0Q29uZmlnKGNvbmZpZykge1xuICAgIGNvbmZpZyA9IHtcbiAgICAgIC4uLnRoaXMuY29uc3RydWN0b3IuRGVmYXVsdCxcbiAgICAgIC4uLiQodGhpcy5fZWxlbWVudCkuZGF0YSgpLFxuICAgICAgLi4uY29uZmlnXG4gICAgfVxuXG4gICAgVXRpbC50eXBlQ2hlY2tDb25maWcoXG4gICAgICBOQU1FLFxuICAgICAgY29uZmlnLFxuICAgICAgdGhpcy5jb25zdHJ1Y3Rvci5EZWZhdWx0VHlwZVxuICAgIClcblxuICAgIHJldHVybiBjb25maWdcbiAgfVxuXG4gIF9nZXRNZW51RWxlbWVudCgpIHtcbiAgICBpZiAoIXRoaXMuX21lbnUpIHtcbiAgICAgIGNvbnN0IHBhcmVudCA9IERyb3Bkb3duLl9nZXRQYXJlbnRGcm9tRWxlbWVudCh0aGlzLl9lbGVtZW50KVxuXG4gICAgICBpZiAocGFyZW50KSB7XG4gICAgICAgIHRoaXMuX21lbnUgPSBwYXJlbnQucXVlcnlTZWxlY3RvcihTZWxlY3Rvci5NRU5VKVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fbWVudVxuICB9XG5cbiAgX2dldFBsYWNlbWVudCgpIHtcbiAgICBjb25zdCAkcGFyZW50RHJvcGRvd24gPSAkKHRoaXMuX2VsZW1lbnQucGFyZW50Tm9kZSlcbiAgICBsZXQgcGxhY2VtZW50ID0gQXR0YWNobWVudE1hcC5CT1RUT01cblxuICAgIC8vIEhhbmRsZSBkcm9wdXBcbiAgICBpZiAoJHBhcmVudERyb3Bkb3duLmhhc0NsYXNzKENsYXNzTmFtZS5EUk9QVVApKSB7XG4gICAgICBwbGFjZW1lbnQgPSBBdHRhY2htZW50TWFwLlRPUFxuICAgICAgaWYgKCQodGhpcy5fbWVudSkuaGFzQ2xhc3MoQ2xhc3NOYW1lLk1FTlVSSUdIVCkpIHtcbiAgICAgICAgcGxhY2VtZW50ID0gQXR0YWNobWVudE1hcC5UT1BFTkRcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKCRwYXJlbnREcm9wZG93bi5oYXNDbGFzcyhDbGFzc05hbWUuRFJPUFJJR0hUKSkge1xuICAgICAgcGxhY2VtZW50ID0gQXR0YWNobWVudE1hcC5SSUdIVFxuICAgIH0gZWxzZSBpZiAoJHBhcmVudERyb3Bkb3duLmhhc0NsYXNzKENsYXNzTmFtZS5EUk9QTEVGVCkpIHtcbiAgICAgIHBsYWNlbWVudCA9IEF0dGFjaG1lbnRNYXAuTEVGVFxuICAgIH0gZWxzZSBpZiAoJCh0aGlzLl9tZW51KS5oYXNDbGFzcyhDbGFzc05hbWUuTUVOVVJJR0hUKSkge1xuICAgICAgcGxhY2VtZW50ID0gQXR0YWNobWVudE1hcC5CT1RUT01FTkRcbiAgICB9XG4gICAgcmV0dXJuIHBsYWNlbWVudFxuICB9XG5cbiAgX2RldGVjdE5hdmJhcigpIHtcbiAgICByZXR1cm4gJCh0aGlzLl9lbGVtZW50KS5jbG9zZXN0KCcubmF2YmFyJykubGVuZ3RoID4gMFxuICB9XG5cbiAgX2dldE9mZnNldCgpIHtcbiAgICBjb25zdCBvZmZzZXQgPSB7fVxuXG4gICAgaWYgKHR5cGVvZiB0aGlzLl9jb25maWcub2Zmc2V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBvZmZzZXQuZm4gPSAoZGF0YSkgPT4ge1xuICAgICAgICBkYXRhLm9mZnNldHMgPSB7XG4gICAgICAgICAgLi4uZGF0YS5vZmZzZXRzLFxuICAgICAgICAgIC4uLnRoaXMuX2NvbmZpZy5vZmZzZXQoZGF0YS5vZmZzZXRzLCB0aGlzLl9lbGVtZW50KSB8fCB7fVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGRhdGFcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgb2Zmc2V0Lm9mZnNldCA9IHRoaXMuX2NvbmZpZy5vZmZzZXRcbiAgICB9XG5cbiAgICByZXR1cm4gb2Zmc2V0XG4gIH1cblxuICBfZ2V0UG9wcGVyQ29uZmlnKCkge1xuICAgIGNvbnN0IHBvcHBlckNvbmZpZyA9IHtcbiAgICAgIHBsYWNlbWVudDogdGhpcy5fZ2V0UGxhY2VtZW50KCksXG4gICAgICBtb2RpZmllcnM6IHtcbiAgICAgICAgb2Zmc2V0OiB0aGlzLl9nZXRPZmZzZXQoKSxcbiAgICAgICAgZmxpcDoge1xuICAgICAgICAgIGVuYWJsZWQ6IHRoaXMuX2NvbmZpZy5mbGlwXG4gICAgICAgIH0sXG4gICAgICAgIHByZXZlbnRPdmVyZmxvdzoge1xuICAgICAgICAgIGJvdW5kYXJpZXNFbGVtZW50OiB0aGlzLl9jb25maWcuYm91bmRhcnlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIERpc2FibGUgUG9wcGVyLmpzIGlmIHdlIGhhdmUgYSBzdGF0aWMgZGlzcGxheVxuICAgIGlmICh0aGlzLl9jb25maWcuZGlzcGxheSA9PT0gJ3N0YXRpYycpIHtcbiAgICAgIHBvcHBlckNvbmZpZy5tb2RpZmllcnMuYXBwbHlTdHlsZSA9IHtcbiAgICAgICAgZW5hYmxlZDogZmFsc2VcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcG9wcGVyQ29uZmlnXG4gIH1cblxuICAvLyBTdGF0aWNcblxuICBzdGF0aWMgX2pRdWVyeUludGVyZmFjZShjb25maWcpIHtcbiAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIGxldCBkYXRhID0gJCh0aGlzKS5kYXRhKERBVEFfS0VZKVxuICAgICAgY29uc3QgX2NvbmZpZyA9IHR5cGVvZiBjb25maWcgPT09ICdvYmplY3QnID8gY29uZmlnIDogbnVsbFxuXG4gICAgICBpZiAoIWRhdGEpIHtcbiAgICAgICAgZGF0YSA9IG5ldyBEcm9wZG93bih0aGlzLCBfY29uZmlnKVxuICAgICAgICAkKHRoaXMpLmRhdGEoREFUQV9LRVksIGRhdGEpXG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgY29uZmlnID09PSAnc3RyaW5nJykge1xuICAgICAgICBpZiAodHlwZW9mIGRhdGFbY29uZmlnXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBObyBtZXRob2QgbmFtZWQgXCIke2NvbmZpZ31cImApXG4gICAgICAgIH1cbiAgICAgICAgZGF0YVtjb25maWddKClcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgc3RhdGljIF9jbGVhck1lbnVzKGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50ICYmIChldmVudC53aGljaCA9PT0gUklHSFRfTU9VU0VfQlVUVE9OX1dISUNIIHx8XG4gICAgICBldmVudC50eXBlID09PSAna2V5dXAnICYmIGV2ZW50LndoaWNoICE9PSBUQUJfS0VZQ09ERSkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHRvZ2dsZXMgPSBbXS5zbGljZS5jYWxsKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoU2VsZWN0b3IuREFUQV9UT0dHTEUpKVxuXG4gICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IHRvZ2dsZXMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgIGNvbnN0IHBhcmVudCA9IERyb3Bkb3duLl9nZXRQYXJlbnRGcm9tRWxlbWVudCh0b2dnbGVzW2ldKVxuICAgICAgY29uc3QgY29udGV4dCA9ICQodG9nZ2xlc1tpXSkuZGF0YShEQVRBX0tFWSlcbiAgICAgIGNvbnN0IHJlbGF0ZWRUYXJnZXQgPSB7XG4gICAgICAgIHJlbGF0ZWRUYXJnZXQ6IHRvZ2dsZXNbaV1cbiAgICAgIH1cblxuICAgICAgaWYgKGV2ZW50ICYmIGV2ZW50LnR5cGUgPT09ICdjbGljaycpIHtcbiAgICAgICAgcmVsYXRlZFRhcmdldC5jbGlja0V2ZW50ID0gZXZlbnRcbiAgICAgIH1cblxuICAgICAgaWYgKCFjb250ZXh0KSB7XG4gICAgICAgIGNvbnRpbnVlXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGRyb3Bkb3duTWVudSA9IGNvbnRleHQuX21lbnVcbiAgICAgIGlmICghJChwYXJlbnQpLmhhc0NsYXNzKENsYXNzTmFtZS5TSE9XKSkge1xuICAgICAgICBjb250aW51ZVxuICAgICAgfVxuXG4gICAgICBpZiAoZXZlbnQgJiYgKGV2ZW50LnR5cGUgPT09ICdjbGljaycgJiZcbiAgICAgICAgICAvaW5wdXR8dGV4dGFyZWEvaS50ZXN0KGV2ZW50LnRhcmdldC50YWdOYW1lKSB8fCBldmVudC50eXBlID09PSAna2V5dXAnICYmIGV2ZW50LndoaWNoID09PSBUQUJfS0VZQ09ERSkgJiZcbiAgICAgICAgICAkLmNvbnRhaW5zKHBhcmVudCwgZXZlbnQudGFyZ2V0KSkge1xuICAgICAgICBjb250aW51ZVxuICAgICAgfVxuXG4gICAgICBjb25zdCBoaWRlRXZlbnQgPSAkLkV2ZW50KEV2ZW50LkhJREUsIHJlbGF0ZWRUYXJnZXQpXG4gICAgICAkKHBhcmVudCkudHJpZ2dlcihoaWRlRXZlbnQpXG4gICAgICBpZiAoaGlkZUV2ZW50LmlzRGVmYXVsdFByZXZlbnRlZCgpKSB7XG4gICAgICAgIGNvbnRpbnVlXG4gICAgICB9XG5cbiAgICAgIC8vIElmIHRoaXMgaXMgYSB0b3VjaC1lbmFibGVkIGRldmljZSB3ZSByZW1vdmUgdGhlIGV4dHJhXG4gICAgICAvLyBlbXB0eSBtb3VzZW92ZXIgbGlzdGVuZXJzIHdlIGFkZGVkIGZvciBpT1Mgc3VwcG9ydFxuICAgICAgaWYgKCdvbnRvdWNoc3RhcnQnIGluIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkge1xuICAgICAgICAkKGRvY3VtZW50LmJvZHkpLmNoaWxkcmVuKCkub2ZmKCdtb3VzZW92ZXInLCBudWxsLCAkLm5vb3ApXG4gICAgICB9XG5cbiAgICAgIHRvZ2dsZXNbaV0uc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgJ2ZhbHNlJylcblxuICAgICAgJChkcm9wZG93bk1lbnUpLnJlbW92ZUNsYXNzKENsYXNzTmFtZS5TSE9XKVxuICAgICAgJChwYXJlbnQpXG4gICAgICAgIC5yZW1vdmVDbGFzcyhDbGFzc05hbWUuU0hPVylcbiAgICAgICAgLnRyaWdnZXIoJC5FdmVudChFdmVudC5ISURERU4sIHJlbGF0ZWRUYXJnZXQpKVxuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBfZ2V0UGFyZW50RnJvbUVsZW1lbnQoZWxlbWVudCkge1xuICAgIGxldCBwYXJlbnRcbiAgICBjb25zdCBzZWxlY3RvciA9IFV0aWwuZ2V0U2VsZWN0b3JGcm9tRWxlbWVudChlbGVtZW50KVxuXG4gICAgaWYgKHNlbGVjdG9yKSB7XG4gICAgICBwYXJlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKVxuICAgIH1cblxuICAgIHJldHVybiBwYXJlbnQgfHwgZWxlbWVudC5wYXJlbnROb2RlXG4gIH1cblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY29tcGxleGl0eVxuICBzdGF0aWMgX2RhdGFBcGlLZXlkb3duSGFuZGxlcihldmVudCkge1xuICAgIC8vIElmIG5vdCBpbnB1dC90ZXh0YXJlYTpcbiAgICAvLyAgLSBBbmQgbm90IGEga2V5IGluIFJFR0VYUF9LRVlET1dOID0+IG5vdCBhIGRyb3Bkb3duIGNvbW1hbmRcbiAgICAvLyBJZiBpbnB1dC90ZXh0YXJlYTpcbiAgICAvLyAgLSBJZiBzcGFjZSBrZXkgPT4gbm90IGEgZHJvcGRvd24gY29tbWFuZFxuICAgIC8vICAtIElmIGtleSBpcyBvdGhlciB0aGFuIGVzY2FwZVxuICAgIC8vICAgIC0gSWYga2V5IGlzIG5vdCB1cCBvciBkb3duID0+IG5vdCBhIGRyb3Bkb3duIGNvbW1hbmRcbiAgICAvLyAgICAtIElmIHRyaWdnZXIgaW5zaWRlIHRoZSBtZW51ID0+IG5vdCBhIGRyb3Bkb3duIGNvbW1hbmRcbiAgICBpZiAoL2lucHV0fHRleHRhcmVhL2kudGVzdChldmVudC50YXJnZXQudGFnTmFtZSlcbiAgICAgID8gZXZlbnQud2hpY2ggPT09IFNQQUNFX0tFWUNPREUgfHwgZXZlbnQud2hpY2ggIT09IEVTQ0FQRV9LRVlDT0RFICYmXG4gICAgICAoZXZlbnQud2hpY2ggIT09IEFSUk9XX0RPV05fS0VZQ09ERSAmJiBldmVudC53aGljaCAhPT0gQVJST1dfVVBfS0VZQ09ERSB8fFxuICAgICAgICAkKGV2ZW50LnRhcmdldCkuY2xvc2VzdChTZWxlY3Rvci5NRU5VKS5sZW5ndGgpIDogIVJFR0VYUF9LRVlET1dOLnRlc3QoZXZlbnQud2hpY2gpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcblxuICAgIGlmICh0aGlzLmRpc2FibGVkIHx8ICQodGhpcykuaGFzQ2xhc3MoQ2xhc3NOYW1lLkRJU0FCTEVEKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgcGFyZW50ICAgPSBEcm9wZG93bi5fZ2V0UGFyZW50RnJvbUVsZW1lbnQodGhpcylcbiAgICBjb25zdCBpc0FjdGl2ZSA9ICQocGFyZW50KS5oYXNDbGFzcyhDbGFzc05hbWUuU0hPVylcblxuICAgIGlmICghaXNBY3RpdmUgfHwgaXNBY3RpdmUgJiYgKGV2ZW50LndoaWNoID09PSBFU0NBUEVfS0VZQ09ERSB8fCBldmVudC53aGljaCA9PT0gU1BBQ0VfS0VZQ09ERSkpIHtcbiAgICAgIGlmIChldmVudC53aGljaCA9PT0gRVNDQVBFX0tFWUNPREUpIHtcbiAgICAgICAgY29uc3QgdG9nZ2xlID0gcGFyZW50LnF1ZXJ5U2VsZWN0b3IoU2VsZWN0b3IuREFUQV9UT0dHTEUpXG4gICAgICAgICQodG9nZ2xlKS50cmlnZ2VyKCdmb2N1cycpXG4gICAgICB9XG5cbiAgICAgICQodGhpcykudHJpZ2dlcignY2xpY2snKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgaXRlbXMgPSBbXS5zbGljZS5jYWxsKHBhcmVudC5xdWVyeVNlbGVjdG9yQWxsKFNlbGVjdG9yLlZJU0lCTEVfSVRFTVMpKVxuXG4gICAgaWYgKGl0ZW1zLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgbGV0IGluZGV4ID0gaXRlbXMuaW5kZXhPZihldmVudC50YXJnZXQpXG5cbiAgICBpZiAoZXZlbnQud2hpY2ggPT09IEFSUk9XX1VQX0tFWUNPREUgJiYgaW5kZXggPiAwKSB7IC8vIFVwXG4gICAgICBpbmRleC0tXG4gICAgfVxuXG4gICAgaWYgKGV2ZW50LndoaWNoID09PSBBUlJPV19ET1dOX0tFWUNPREUgJiYgaW5kZXggPCBpdGVtcy5sZW5ndGggLSAxKSB7IC8vIERvd25cbiAgICAgIGluZGV4KytcbiAgICB9XG5cbiAgICBpZiAoaW5kZXggPCAwKSB7XG4gICAgICBpbmRleCA9IDBcbiAgICB9XG5cbiAgICBpdGVtc1tpbmRleF0uZm9jdXMoKVxuICB9XG59XG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBEYXRhIEFwaSBpbXBsZW1lbnRhdGlvblxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuJChkb2N1bWVudClcbiAgLm9uKEV2ZW50LktFWURPV05fREFUQV9BUEksIFNlbGVjdG9yLkRBVEFfVE9HR0xFLCBEcm9wZG93bi5fZGF0YUFwaUtleWRvd25IYW5kbGVyKVxuICAub24oRXZlbnQuS0VZRE9XTl9EQVRBX0FQSSwgU2VsZWN0b3IuTUVOVSwgRHJvcGRvd24uX2RhdGFBcGlLZXlkb3duSGFuZGxlcilcbiAgLm9uKGAke0V2ZW50LkNMSUNLX0RBVEFfQVBJfSAke0V2ZW50LktFWVVQX0RBVEFfQVBJfWAsIERyb3Bkb3duLl9jbGVhck1lbnVzKVxuICAub24oRXZlbnQuQ0xJQ0tfREFUQV9BUEksIFNlbGVjdG9yLkRBVEFfVE9HR0xFLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICBEcm9wZG93bi5falF1ZXJ5SW50ZXJmYWNlLmNhbGwoJCh0aGlzKSwgJ3RvZ2dsZScpXG4gIH0pXG4gIC5vbihFdmVudC5DTElDS19EQVRBX0FQSSwgU2VsZWN0b3IuRk9STV9DSElMRCwgKGUpID0+IHtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpXG4gIH0pXG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBqUXVlcnlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbiQuZm5bTkFNRV0gPSBEcm9wZG93bi5falF1ZXJ5SW50ZXJmYWNlXG4kLmZuW05BTUVdLkNvbnN0cnVjdG9yID0gRHJvcGRvd25cbiQuZm5bTkFNRV0ubm9Db25mbGljdCA9ICgpID0+IHtcbiAgJC5mbltOQU1FXSA9IEpRVUVSWV9OT19DT05GTElDVFxuICByZXR1cm4gRHJvcGRvd24uX2pRdWVyeUludGVyZmFjZVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IERyb3Bkb3duXG4iLCIvKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBCb290c3RyYXAgKHY0LjMuMSk6IG1vZGFsLmpzXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21hc3Rlci9MSUNFTlNFKVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknXG5pbXBvcnQgVXRpbCBmcm9tICcuL3V0aWwnXG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBDb25zdGFudHNcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmNvbnN0IE5BTUUgICAgICAgICAgICAgICA9ICdtb2RhbCdcbmNvbnN0IFZFUlNJT04gICAgICAgICAgICA9ICc0LjMuMSdcbmNvbnN0IERBVEFfS0VZICAgICAgICAgICA9ICdicy5tb2RhbCdcbmNvbnN0IEVWRU5UX0tFWSAgICAgICAgICA9IGAuJHtEQVRBX0tFWX1gXG5jb25zdCBEQVRBX0FQSV9LRVkgICAgICAgPSAnLmRhdGEtYXBpJ1xuY29uc3QgSlFVRVJZX05PX0NPTkZMSUNUID0gJC5mbltOQU1FXVxuY29uc3QgRVNDQVBFX0tFWUNPREUgICAgID0gMjcgLy8gS2V5Ym9hcmRFdmVudC53aGljaCB2YWx1ZSBmb3IgRXNjYXBlIChFc2MpIGtleVxuXG5jb25zdCBEZWZhdWx0ID0ge1xuICBiYWNrZHJvcCA6IHRydWUsXG4gIGtleWJvYXJkIDogdHJ1ZSxcbiAgZm9jdXMgICAgOiB0cnVlLFxuICBzaG93ICAgICA6IHRydWVcbn1cblxuY29uc3QgRGVmYXVsdFR5cGUgPSB7XG4gIGJhY2tkcm9wIDogJyhib29sZWFufHN0cmluZyknLFxuICBrZXlib2FyZCA6ICdib29sZWFuJyxcbiAgZm9jdXMgICAgOiAnYm9vbGVhbicsXG4gIHNob3cgICAgIDogJ2Jvb2xlYW4nXG59XG5cbmNvbnN0IEV2ZW50ID0ge1xuICBISURFICAgICAgICAgICAgICA6IGBoaWRlJHtFVkVOVF9LRVl9YCxcbiAgSElEREVOICAgICAgICAgICAgOiBgaGlkZGVuJHtFVkVOVF9LRVl9YCxcbiAgU0hPVyAgICAgICAgICAgICAgOiBgc2hvdyR7RVZFTlRfS0VZfWAsXG4gIFNIT1dOICAgICAgICAgICAgIDogYHNob3duJHtFVkVOVF9LRVl9YCxcbiAgRk9DVVNJTiAgICAgICAgICAgOiBgZm9jdXNpbiR7RVZFTlRfS0VZfWAsXG4gIFJFU0laRSAgICAgICAgICAgIDogYHJlc2l6ZSR7RVZFTlRfS0VZfWAsXG4gIENMSUNLX0RJU01JU1MgICAgIDogYGNsaWNrLmRpc21pc3Mke0VWRU5UX0tFWX1gLFxuICBLRVlET1dOX0RJU01JU1MgICA6IGBrZXlkb3duLmRpc21pc3Mke0VWRU5UX0tFWX1gLFxuICBNT1VTRVVQX0RJU01JU1MgICA6IGBtb3VzZXVwLmRpc21pc3Mke0VWRU5UX0tFWX1gLFxuICBNT1VTRURPV05fRElTTUlTUyA6IGBtb3VzZWRvd24uZGlzbWlzcyR7RVZFTlRfS0VZfWAsXG4gIENMSUNLX0RBVEFfQVBJICAgIDogYGNsaWNrJHtFVkVOVF9LRVl9JHtEQVRBX0FQSV9LRVl9YFxufVxuXG5jb25zdCBDbGFzc05hbWUgPSB7XG4gIFNDUk9MTEFCTEUgICAgICAgICA6ICdtb2RhbC1kaWFsb2ctc2Nyb2xsYWJsZScsXG4gIFNDUk9MTEJBUl9NRUFTVVJFUiA6ICdtb2RhbC1zY3JvbGxiYXItbWVhc3VyZScsXG4gIEJBQ0tEUk9QICAgICAgICAgICA6ICdtb2RhbC1iYWNrZHJvcCcsXG4gIE9QRU4gICAgICAgICAgICAgICA6ICdtb2RhbC1vcGVuJyxcbiAgRkFERSAgICAgICAgICAgICAgIDogJ2ZhZGUnLFxuICBTSE9XICAgICAgICAgICAgICAgOiAnc2hvdydcbn1cblxuY29uc3QgU2VsZWN0b3IgPSB7XG4gIERJQUxPRyAgICAgICAgIDogJy5tb2RhbC1kaWFsb2cnLFxuICBNT0RBTF9CT0RZICAgICA6ICcubW9kYWwtYm9keScsXG4gIERBVEFfVE9HR0xFICAgIDogJ1tkYXRhLXRvZ2dsZT1cIm1vZGFsXCJdJyxcbiAgREFUQV9ESVNNSVNTICAgOiAnW2RhdGEtZGlzbWlzcz1cIm1vZGFsXCJdJyxcbiAgRklYRURfQ09OVEVOVCAgOiAnLmZpeGVkLXRvcCwgLmZpeGVkLWJvdHRvbSwgLmlzLWZpeGVkLCAuc3RpY2t5LXRvcCcsXG4gIFNUSUNLWV9DT05URU5UIDogJy5zdGlja3ktdG9wJ1xufVxuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQ2xhc3MgRGVmaW5pdGlvblxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuY2xhc3MgTW9kYWwge1xuICBjb25zdHJ1Y3RvcihlbGVtZW50LCBjb25maWcpIHtcbiAgICB0aGlzLl9jb25maWcgICAgICAgICAgICAgID0gdGhpcy5fZ2V0Q29uZmlnKGNvbmZpZylcbiAgICB0aGlzLl9lbGVtZW50ICAgICAgICAgICAgID0gZWxlbWVudFxuICAgIHRoaXMuX2RpYWxvZyAgICAgICAgICAgICAgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoU2VsZWN0b3IuRElBTE9HKVxuICAgIHRoaXMuX2JhY2tkcm9wICAgICAgICAgICAgPSBudWxsXG4gICAgdGhpcy5faXNTaG93biAgICAgICAgICAgICA9IGZhbHNlXG4gICAgdGhpcy5faXNCb2R5T3ZlcmZsb3dpbmcgICA9IGZhbHNlXG4gICAgdGhpcy5faWdub3JlQmFja2Ryb3BDbGljayA9IGZhbHNlXG4gICAgdGhpcy5faXNUcmFuc2l0aW9uaW5nICAgICA9IGZhbHNlXG4gICAgdGhpcy5fc2Nyb2xsYmFyV2lkdGggICAgICA9IDBcbiAgfVxuXG4gIC8vIEdldHRlcnNcblxuICBzdGF0aWMgZ2V0IFZFUlNJT04oKSB7XG4gICAgcmV0dXJuIFZFUlNJT05cbiAgfVxuXG4gIHN0YXRpYyBnZXQgRGVmYXVsdCgpIHtcbiAgICByZXR1cm4gRGVmYXVsdFxuICB9XG5cbiAgLy8gUHVibGljXG5cbiAgdG9nZ2xlKHJlbGF0ZWRUYXJnZXQpIHtcbiAgICByZXR1cm4gdGhpcy5faXNTaG93biA/IHRoaXMuaGlkZSgpIDogdGhpcy5zaG93KHJlbGF0ZWRUYXJnZXQpXG4gIH1cblxuICBzaG93KHJlbGF0ZWRUYXJnZXQpIHtcbiAgICBpZiAodGhpcy5faXNTaG93biB8fCB0aGlzLl9pc1RyYW5zaXRpb25pbmcpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmICgkKHRoaXMuX2VsZW1lbnQpLmhhc0NsYXNzKENsYXNzTmFtZS5GQURFKSkge1xuICAgICAgdGhpcy5faXNUcmFuc2l0aW9uaW5nID0gdHJ1ZVxuICAgIH1cblxuICAgIGNvbnN0IHNob3dFdmVudCA9ICQuRXZlbnQoRXZlbnQuU0hPVywge1xuICAgICAgcmVsYXRlZFRhcmdldFxuICAgIH0pXG5cbiAgICAkKHRoaXMuX2VsZW1lbnQpLnRyaWdnZXIoc2hvd0V2ZW50KVxuXG4gICAgaWYgKHRoaXMuX2lzU2hvd24gfHwgc2hvd0V2ZW50LmlzRGVmYXVsdFByZXZlbnRlZCgpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLl9pc1Nob3duID0gdHJ1ZVxuXG4gICAgdGhpcy5fY2hlY2tTY3JvbGxiYXIoKVxuICAgIHRoaXMuX3NldFNjcm9sbGJhcigpXG5cbiAgICB0aGlzLl9hZGp1c3REaWFsb2coKVxuXG4gICAgdGhpcy5fc2V0RXNjYXBlRXZlbnQoKVxuICAgIHRoaXMuX3NldFJlc2l6ZUV2ZW50KClcblxuICAgICQodGhpcy5fZWxlbWVudCkub24oXG4gICAgICBFdmVudC5DTElDS19ESVNNSVNTLFxuICAgICAgU2VsZWN0b3IuREFUQV9ESVNNSVNTLFxuICAgICAgKGV2ZW50KSA9PiB0aGlzLmhpZGUoZXZlbnQpXG4gICAgKVxuXG4gICAgJCh0aGlzLl9kaWFsb2cpLm9uKEV2ZW50Lk1PVVNFRE9XTl9ESVNNSVNTLCAoKSA9PiB7XG4gICAgICAkKHRoaXMuX2VsZW1lbnQpLm9uZShFdmVudC5NT1VTRVVQX0RJU01JU1MsIChldmVudCkgPT4ge1xuICAgICAgICBpZiAoJChldmVudC50YXJnZXQpLmlzKHRoaXMuX2VsZW1lbnQpKSB7XG4gICAgICAgICAgdGhpcy5faWdub3JlQmFja2Ryb3BDbGljayA9IHRydWVcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9KVxuXG4gICAgdGhpcy5fc2hvd0JhY2tkcm9wKCgpID0+IHRoaXMuX3Nob3dFbGVtZW50KHJlbGF0ZWRUYXJnZXQpKVxuICB9XG5cbiAgaGlkZShldmVudCkge1xuICAgIGlmIChldmVudCkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIH1cblxuICAgIGlmICghdGhpcy5faXNTaG93biB8fCB0aGlzLl9pc1RyYW5zaXRpb25pbmcpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IGhpZGVFdmVudCA9ICQuRXZlbnQoRXZlbnQuSElERSlcblxuICAgICQodGhpcy5fZWxlbWVudCkudHJpZ2dlcihoaWRlRXZlbnQpXG5cbiAgICBpZiAoIXRoaXMuX2lzU2hvd24gfHwgaGlkZUV2ZW50LmlzRGVmYXVsdFByZXZlbnRlZCgpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLl9pc1Nob3duID0gZmFsc2VcbiAgICBjb25zdCB0cmFuc2l0aW9uID0gJCh0aGlzLl9lbGVtZW50KS5oYXNDbGFzcyhDbGFzc05hbWUuRkFERSlcblxuICAgIGlmICh0cmFuc2l0aW9uKSB7XG4gICAgICB0aGlzLl9pc1RyYW5zaXRpb25pbmcgPSB0cnVlXG4gICAgfVxuXG4gICAgdGhpcy5fc2V0RXNjYXBlRXZlbnQoKVxuICAgIHRoaXMuX3NldFJlc2l6ZUV2ZW50KClcblxuICAgICQoZG9jdW1lbnQpLm9mZihFdmVudC5GT0NVU0lOKVxuXG4gICAgJCh0aGlzLl9lbGVtZW50KS5yZW1vdmVDbGFzcyhDbGFzc05hbWUuU0hPVylcblxuICAgICQodGhpcy5fZWxlbWVudCkub2ZmKEV2ZW50LkNMSUNLX0RJU01JU1MpXG4gICAgJCh0aGlzLl9kaWFsb2cpLm9mZihFdmVudC5NT1VTRURPV05fRElTTUlTUylcblxuXG4gICAgaWYgKHRyYW5zaXRpb24pIHtcbiAgICAgIGNvbnN0IHRyYW5zaXRpb25EdXJhdGlvbiAgPSBVdGlsLmdldFRyYW5zaXRpb25EdXJhdGlvbkZyb21FbGVtZW50KHRoaXMuX2VsZW1lbnQpXG5cbiAgICAgICQodGhpcy5fZWxlbWVudClcbiAgICAgICAgLm9uZShVdGlsLlRSQU5TSVRJT05fRU5ELCAoZXZlbnQpID0+IHRoaXMuX2hpZGVNb2RhbChldmVudCkpXG4gICAgICAgIC5lbXVsYXRlVHJhbnNpdGlvbkVuZCh0cmFuc2l0aW9uRHVyYXRpb24pXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2hpZGVNb2RhbCgpXG4gICAgfVxuICB9XG5cbiAgZGlzcG9zZSgpIHtcbiAgICBbd2luZG93LCB0aGlzLl9lbGVtZW50LCB0aGlzLl9kaWFsb2ddXG4gICAgICAuZm9yRWFjaCgoaHRtbEVsZW1lbnQpID0+ICQoaHRtbEVsZW1lbnQpLm9mZihFVkVOVF9LRVkpKVxuXG4gICAgLyoqXG4gICAgICogYGRvY3VtZW50YCBoYXMgMiBldmVudHMgYEV2ZW50LkZPQ1VTSU5gIGFuZCBgRXZlbnQuQ0xJQ0tfREFUQV9BUElgXG4gICAgICogRG8gbm90IG1vdmUgYGRvY3VtZW50YCBpbiBgaHRtbEVsZW1lbnRzYCBhcnJheVxuICAgICAqIEl0IHdpbGwgcmVtb3ZlIGBFdmVudC5DTElDS19EQVRBX0FQSWAgZXZlbnQgdGhhdCBzaG91bGQgcmVtYWluXG4gICAgICovXG4gICAgJChkb2N1bWVudCkub2ZmKEV2ZW50LkZPQ1VTSU4pXG5cbiAgICAkLnJlbW92ZURhdGEodGhpcy5fZWxlbWVudCwgREFUQV9LRVkpXG5cbiAgICB0aGlzLl9jb25maWcgICAgICAgICAgICAgID0gbnVsbFxuICAgIHRoaXMuX2VsZW1lbnQgICAgICAgICAgICAgPSBudWxsXG4gICAgdGhpcy5fZGlhbG9nICAgICAgICAgICAgICA9IG51bGxcbiAgICB0aGlzLl9iYWNrZHJvcCAgICAgICAgICAgID0gbnVsbFxuICAgIHRoaXMuX2lzU2hvd24gICAgICAgICAgICAgPSBudWxsXG4gICAgdGhpcy5faXNCb2R5T3ZlcmZsb3dpbmcgICA9IG51bGxcbiAgICB0aGlzLl9pZ25vcmVCYWNrZHJvcENsaWNrID0gbnVsbFxuICAgIHRoaXMuX2lzVHJhbnNpdGlvbmluZyAgICAgPSBudWxsXG4gICAgdGhpcy5fc2Nyb2xsYmFyV2lkdGggICAgICA9IG51bGxcbiAgfVxuXG4gIGhhbmRsZVVwZGF0ZSgpIHtcbiAgICB0aGlzLl9hZGp1c3REaWFsb2coKVxuICB9XG5cbiAgLy8gUHJpdmF0ZVxuXG4gIF9nZXRDb25maWcoY29uZmlnKSB7XG4gICAgY29uZmlnID0ge1xuICAgICAgLi4uRGVmYXVsdCxcbiAgICAgIC4uLmNvbmZpZ1xuICAgIH1cbiAgICBVdGlsLnR5cGVDaGVja0NvbmZpZyhOQU1FLCBjb25maWcsIERlZmF1bHRUeXBlKVxuICAgIHJldHVybiBjb25maWdcbiAgfVxuXG4gIF9zaG93RWxlbWVudChyZWxhdGVkVGFyZ2V0KSB7XG4gICAgY29uc3QgdHJhbnNpdGlvbiA9ICQodGhpcy5fZWxlbWVudCkuaGFzQ2xhc3MoQ2xhc3NOYW1lLkZBREUpXG5cbiAgICBpZiAoIXRoaXMuX2VsZW1lbnQucGFyZW50Tm9kZSB8fFxuICAgICAgICB0aGlzLl9lbGVtZW50LnBhcmVudE5vZGUubm9kZVR5cGUgIT09IE5vZGUuRUxFTUVOVF9OT0RFKSB7XG4gICAgICAvLyBEb24ndCBtb3ZlIG1vZGFsJ3MgRE9NIHBvc2l0aW9uXG4gICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMuX2VsZW1lbnQpXG4gICAgfVxuXG4gICAgdGhpcy5fZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJ1xuICAgIHRoaXMuX2VsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdhcmlhLWhpZGRlbicpXG4gICAgdGhpcy5fZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtbW9kYWwnLCB0cnVlKVxuXG4gICAgaWYgKCQodGhpcy5fZGlhbG9nKS5oYXNDbGFzcyhDbGFzc05hbWUuU0NST0xMQUJMRSkpIHtcbiAgICAgIHRoaXMuX2RpYWxvZy5xdWVyeVNlbGVjdG9yKFNlbGVjdG9yLk1PREFMX0JPRFkpLnNjcm9sbFRvcCA9IDBcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fZWxlbWVudC5zY3JvbGxUb3AgPSAwXG4gICAgfVxuXG4gICAgaWYgKHRyYW5zaXRpb24pIHtcbiAgICAgIFV0aWwucmVmbG93KHRoaXMuX2VsZW1lbnQpXG4gICAgfVxuXG4gICAgJCh0aGlzLl9lbGVtZW50KS5hZGRDbGFzcyhDbGFzc05hbWUuU0hPVylcblxuICAgIGlmICh0aGlzLl9jb25maWcuZm9jdXMpIHtcbiAgICAgIHRoaXMuX2VuZm9yY2VGb2N1cygpXG4gICAgfVxuXG4gICAgY29uc3Qgc2hvd25FdmVudCA9ICQuRXZlbnQoRXZlbnQuU0hPV04sIHtcbiAgICAgIHJlbGF0ZWRUYXJnZXRcbiAgICB9KVxuXG4gICAgY29uc3QgdHJhbnNpdGlvbkNvbXBsZXRlID0gKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuX2NvbmZpZy5mb2N1cykge1xuICAgICAgICB0aGlzLl9lbGVtZW50LmZvY3VzKClcbiAgICAgIH1cbiAgICAgIHRoaXMuX2lzVHJhbnNpdGlvbmluZyA9IGZhbHNlXG4gICAgICAkKHRoaXMuX2VsZW1lbnQpLnRyaWdnZXIoc2hvd25FdmVudClcbiAgICB9XG5cbiAgICBpZiAodHJhbnNpdGlvbikge1xuICAgICAgY29uc3QgdHJhbnNpdGlvbkR1cmF0aW9uICA9IFV0aWwuZ2V0VHJhbnNpdGlvbkR1cmF0aW9uRnJvbUVsZW1lbnQodGhpcy5fZGlhbG9nKVxuXG4gICAgICAkKHRoaXMuX2RpYWxvZylcbiAgICAgICAgLm9uZShVdGlsLlRSQU5TSVRJT05fRU5ELCB0cmFuc2l0aW9uQ29tcGxldGUpXG4gICAgICAgIC5lbXVsYXRlVHJhbnNpdGlvbkVuZCh0cmFuc2l0aW9uRHVyYXRpb24pXG4gICAgfSBlbHNlIHtcbiAgICAgIHRyYW5zaXRpb25Db21wbGV0ZSgpXG4gICAgfVxuICB9XG5cbiAgX2VuZm9yY2VGb2N1cygpIHtcbiAgICAkKGRvY3VtZW50KVxuICAgICAgLm9mZihFdmVudC5GT0NVU0lOKSAvLyBHdWFyZCBhZ2FpbnN0IGluZmluaXRlIGZvY3VzIGxvb3BcbiAgICAgIC5vbihFdmVudC5GT0NVU0lOLCAoZXZlbnQpID0+IHtcbiAgICAgICAgaWYgKGRvY3VtZW50ICE9PSBldmVudC50YXJnZXQgJiZcbiAgICAgICAgICAgIHRoaXMuX2VsZW1lbnQgIT09IGV2ZW50LnRhcmdldCAmJlxuICAgICAgICAgICAgJCh0aGlzLl9lbGVtZW50KS5oYXMoZXZlbnQudGFyZ2V0KS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICB0aGlzLl9lbGVtZW50LmZvY3VzKClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgfVxuXG4gIF9zZXRFc2NhcGVFdmVudCgpIHtcbiAgICBpZiAodGhpcy5faXNTaG93biAmJiB0aGlzLl9jb25maWcua2V5Ym9hcmQpIHtcbiAgICAgICQodGhpcy5fZWxlbWVudCkub24oRXZlbnQuS0VZRE9XTl9ESVNNSVNTLCAoZXZlbnQpID0+IHtcbiAgICAgICAgaWYgKGV2ZW50LndoaWNoID09PSBFU0NBUEVfS0VZQ09ERSkge1xuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICB0aGlzLmhpZGUoKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0gZWxzZSBpZiAoIXRoaXMuX2lzU2hvd24pIHtcbiAgICAgICQodGhpcy5fZWxlbWVudCkub2ZmKEV2ZW50LktFWURPV05fRElTTUlTUylcbiAgICB9XG4gIH1cblxuICBfc2V0UmVzaXplRXZlbnQoKSB7XG4gICAgaWYgKHRoaXMuX2lzU2hvd24pIHtcbiAgICAgICQod2luZG93KS5vbihFdmVudC5SRVNJWkUsIChldmVudCkgPT4gdGhpcy5oYW5kbGVVcGRhdGUoZXZlbnQpKVxuICAgIH0gZWxzZSB7XG4gICAgICAkKHdpbmRvdykub2ZmKEV2ZW50LlJFU0laRSlcbiAgICB9XG4gIH1cblxuICBfaGlkZU1vZGFsKCkge1xuICAgIHRoaXMuX2VsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xuICAgIHRoaXMuX2VsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsIHRydWUpXG4gICAgdGhpcy5fZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ2FyaWEtbW9kYWwnKVxuICAgIHRoaXMuX2lzVHJhbnNpdGlvbmluZyA9IGZhbHNlXG4gICAgdGhpcy5fc2hvd0JhY2tkcm9wKCgpID0+IHtcbiAgICAgICQoZG9jdW1lbnQuYm9keSkucmVtb3ZlQ2xhc3MoQ2xhc3NOYW1lLk9QRU4pXG4gICAgICB0aGlzLl9yZXNldEFkanVzdG1lbnRzKClcbiAgICAgIHRoaXMuX3Jlc2V0U2Nyb2xsYmFyKClcbiAgICAgICQodGhpcy5fZWxlbWVudCkudHJpZ2dlcihFdmVudC5ISURERU4pXG4gICAgfSlcbiAgfVxuXG4gIF9yZW1vdmVCYWNrZHJvcCgpIHtcbiAgICBpZiAodGhpcy5fYmFja2Ryb3ApIHtcbiAgICAgICQodGhpcy5fYmFja2Ryb3ApLnJlbW92ZSgpXG4gICAgICB0aGlzLl9iYWNrZHJvcCA9IG51bGxcbiAgICB9XG4gIH1cblxuICBfc2hvd0JhY2tkcm9wKGNhbGxiYWNrKSB7XG4gICAgY29uc3QgYW5pbWF0ZSA9ICQodGhpcy5fZWxlbWVudCkuaGFzQ2xhc3MoQ2xhc3NOYW1lLkZBREUpXG4gICAgICA/IENsYXNzTmFtZS5GQURFIDogJydcblxuICAgIGlmICh0aGlzLl9pc1Nob3duICYmIHRoaXMuX2NvbmZpZy5iYWNrZHJvcCkge1xuICAgICAgdGhpcy5fYmFja2Ryb3AgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgdGhpcy5fYmFja2Ryb3AuY2xhc3NOYW1lID0gQ2xhc3NOYW1lLkJBQ0tEUk9QXG5cbiAgICAgIGlmIChhbmltYXRlKSB7XG4gICAgICAgIHRoaXMuX2JhY2tkcm9wLmNsYXNzTGlzdC5hZGQoYW5pbWF0ZSlcbiAgICAgIH1cblxuICAgICAgJCh0aGlzLl9iYWNrZHJvcCkuYXBwZW5kVG8oZG9jdW1lbnQuYm9keSlcblxuICAgICAgJCh0aGlzLl9lbGVtZW50KS5vbihFdmVudC5DTElDS19ESVNNSVNTLCAoZXZlbnQpID0+IHtcbiAgICAgICAgaWYgKHRoaXMuX2lnbm9yZUJhY2tkcm9wQ2xpY2spIHtcbiAgICAgICAgICB0aGlzLl9pZ25vcmVCYWNrZHJvcENsaWNrID0gZmFsc2VcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgICBpZiAoZXZlbnQudGFyZ2V0ICE9PSBldmVudC5jdXJyZW50VGFyZ2V0KSB7XG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuX2NvbmZpZy5iYWNrZHJvcCA9PT0gJ3N0YXRpYycpIHtcbiAgICAgICAgICB0aGlzLl9lbGVtZW50LmZvY3VzKClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmhpZGUoKVxuICAgICAgICB9XG4gICAgICB9KVxuXG4gICAgICBpZiAoYW5pbWF0ZSkge1xuICAgICAgICBVdGlsLnJlZmxvdyh0aGlzLl9iYWNrZHJvcClcbiAgICAgIH1cblxuICAgICAgJCh0aGlzLl9iYWNrZHJvcCkuYWRkQ2xhc3MoQ2xhc3NOYW1lLlNIT1cpXG5cbiAgICAgIGlmICghY2FsbGJhY2spIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGlmICghYW5pbWF0ZSkge1xuICAgICAgICBjYWxsYmFjaygpXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBjb25zdCBiYWNrZHJvcFRyYW5zaXRpb25EdXJhdGlvbiA9IFV0aWwuZ2V0VHJhbnNpdGlvbkR1cmF0aW9uRnJvbUVsZW1lbnQodGhpcy5fYmFja2Ryb3ApXG5cbiAgICAgICQodGhpcy5fYmFja2Ryb3ApXG4gICAgICAgIC5vbmUoVXRpbC5UUkFOU0lUSU9OX0VORCwgY2FsbGJhY2spXG4gICAgICAgIC5lbXVsYXRlVHJhbnNpdGlvbkVuZChiYWNrZHJvcFRyYW5zaXRpb25EdXJhdGlvbilcbiAgICB9IGVsc2UgaWYgKCF0aGlzLl9pc1Nob3duICYmIHRoaXMuX2JhY2tkcm9wKSB7XG4gICAgICAkKHRoaXMuX2JhY2tkcm9wKS5yZW1vdmVDbGFzcyhDbGFzc05hbWUuU0hPVylcblxuICAgICAgY29uc3QgY2FsbGJhY2tSZW1vdmUgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMuX3JlbW92ZUJhY2tkcm9wKClcbiAgICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgICAgY2FsbGJhY2soKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICgkKHRoaXMuX2VsZW1lbnQpLmhhc0NsYXNzKENsYXNzTmFtZS5GQURFKSkge1xuICAgICAgICBjb25zdCBiYWNrZHJvcFRyYW5zaXRpb25EdXJhdGlvbiA9IFV0aWwuZ2V0VHJhbnNpdGlvbkR1cmF0aW9uRnJvbUVsZW1lbnQodGhpcy5fYmFja2Ryb3ApXG5cbiAgICAgICAgJCh0aGlzLl9iYWNrZHJvcClcbiAgICAgICAgICAub25lKFV0aWwuVFJBTlNJVElPTl9FTkQsIGNhbGxiYWNrUmVtb3ZlKVxuICAgICAgICAgIC5lbXVsYXRlVHJhbnNpdGlvbkVuZChiYWNrZHJvcFRyYW5zaXRpb25EdXJhdGlvbilcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNhbGxiYWNrUmVtb3ZlKClcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGNhbGxiYWNrKSB7XG4gICAgICBjYWxsYmFjaygpXG4gICAgfVxuICB9XG5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyB0aGUgZm9sbG93aW5nIG1ldGhvZHMgYXJlIHVzZWQgdG8gaGFuZGxlIG92ZXJmbG93aW5nIG1vZGFsc1xuICAvLyB0b2RvIChmYXQpOiB0aGVzZSBzaG91bGQgcHJvYmFibHkgYmUgcmVmYWN0b3JlZCBvdXQgb2YgbW9kYWwuanNcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIF9hZGp1c3REaWFsb2coKSB7XG4gICAgY29uc3QgaXNNb2RhbE92ZXJmbG93aW5nID1cbiAgICAgIHRoaXMuX2VsZW1lbnQuc2Nyb2xsSGVpZ2h0ID4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodFxuXG4gICAgaWYgKCF0aGlzLl9pc0JvZHlPdmVyZmxvd2luZyAmJiBpc01vZGFsT3ZlcmZsb3dpbmcpIHtcbiAgICAgIHRoaXMuX2VsZW1lbnQuc3R5bGUucGFkZGluZ0xlZnQgPSBgJHt0aGlzLl9zY3JvbGxiYXJXaWR0aH1weGBcbiAgICB9XG5cbiAgICBpZiAodGhpcy5faXNCb2R5T3ZlcmZsb3dpbmcgJiYgIWlzTW9kYWxPdmVyZmxvd2luZykge1xuICAgICAgdGhpcy5fZWxlbWVudC5zdHlsZS5wYWRkaW5nUmlnaHQgPSBgJHt0aGlzLl9zY3JvbGxiYXJXaWR0aH1weGBcbiAgICB9XG4gIH1cblxuICBfcmVzZXRBZGp1c3RtZW50cygpIHtcbiAgICB0aGlzLl9lbGVtZW50LnN0eWxlLnBhZGRpbmdMZWZ0ID0gJydcbiAgICB0aGlzLl9lbGVtZW50LnN0eWxlLnBhZGRpbmdSaWdodCA9ICcnXG4gIH1cblxuICBfY2hlY2tTY3JvbGxiYXIoKSB7XG4gICAgY29uc3QgcmVjdCA9IGRvY3VtZW50LmJvZHkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICB0aGlzLl9pc0JvZHlPdmVyZmxvd2luZyA9IHJlY3QubGVmdCArIHJlY3QucmlnaHQgPCB3aW5kb3cuaW5uZXJXaWR0aFxuICAgIHRoaXMuX3Njcm9sbGJhcldpZHRoID0gdGhpcy5fZ2V0U2Nyb2xsYmFyV2lkdGgoKVxuICB9XG5cbiAgX3NldFNjcm9sbGJhcigpIHtcbiAgICBpZiAodGhpcy5faXNCb2R5T3ZlcmZsb3dpbmcpIHtcbiAgICAgIC8vIE5vdGU6IERPTU5vZGUuc3R5bGUucGFkZGluZ1JpZ2h0IHJldHVybnMgdGhlIGFjdHVhbCB2YWx1ZSBvciAnJyBpZiBub3Qgc2V0XG4gICAgICAvLyAgIHdoaWxlICQoRE9NTm9kZSkuY3NzKCdwYWRkaW5nLXJpZ2h0JykgcmV0dXJucyB0aGUgY2FsY3VsYXRlZCB2YWx1ZSBvciAwIGlmIG5vdCBzZXRcbiAgICAgIGNvbnN0IGZpeGVkQ29udGVudCA9IFtdLnNsaWNlLmNhbGwoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChTZWxlY3Rvci5GSVhFRF9DT05URU5UKSlcbiAgICAgIGNvbnN0IHN0aWNreUNvbnRlbnQgPSBbXS5zbGljZS5jYWxsKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoU2VsZWN0b3IuU1RJQ0tZX0NPTlRFTlQpKVxuXG4gICAgICAvLyBBZGp1c3QgZml4ZWQgY29udGVudCBwYWRkaW5nXG4gICAgICAkKGZpeGVkQ29udGVudCkuZWFjaCgoaW5kZXgsIGVsZW1lbnQpID0+IHtcbiAgICAgICAgY29uc3QgYWN0dWFsUGFkZGluZyA9IGVsZW1lbnQuc3R5bGUucGFkZGluZ1JpZ2h0XG4gICAgICAgIGNvbnN0IGNhbGN1bGF0ZWRQYWRkaW5nID0gJChlbGVtZW50KS5jc3MoJ3BhZGRpbmctcmlnaHQnKVxuICAgICAgICAkKGVsZW1lbnQpXG4gICAgICAgICAgLmRhdGEoJ3BhZGRpbmctcmlnaHQnLCBhY3R1YWxQYWRkaW5nKVxuICAgICAgICAgIC5jc3MoJ3BhZGRpbmctcmlnaHQnLCBgJHtwYXJzZUZsb2F0KGNhbGN1bGF0ZWRQYWRkaW5nKSArIHRoaXMuX3Njcm9sbGJhcldpZHRofXB4YClcbiAgICAgIH0pXG5cbiAgICAgIC8vIEFkanVzdCBzdGlja3kgY29udGVudCBtYXJnaW5cbiAgICAgICQoc3RpY2t5Q29udGVudCkuZWFjaCgoaW5kZXgsIGVsZW1lbnQpID0+IHtcbiAgICAgICAgY29uc3QgYWN0dWFsTWFyZ2luID0gZWxlbWVudC5zdHlsZS5tYXJnaW5SaWdodFxuICAgICAgICBjb25zdCBjYWxjdWxhdGVkTWFyZ2luID0gJChlbGVtZW50KS5jc3MoJ21hcmdpbi1yaWdodCcpXG4gICAgICAgICQoZWxlbWVudClcbiAgICAgICAgICAuZGF0YSgnbWFyZ2luLXJpZ2h0JywgYWN0dWFsTWFyZ2luKVxuICAgICAgICAgIC5jc3MoJ21hcmdpbi1yaWdodCcsIGAke3BhcnNlRmxvYXQoY2FsY3VsYXRlZE1hcmdpbikgLSB0aGlzLl9zY3JvbGxiYXJXaWR0aH1weGApXG4gICAgICB9KVxuXG4gICAgICAvLyBBZGp1c3QgYm9keSBwYWRkaW5nXG4gICAgICBjb25zdCBhY3R1YWxQYWRkaW5nID0gZG9jdW1lbnQuYm9keS5zdHlsZS5wYWRkaW5nUmlnaHRcbiAgICAgIGNvbnN0IGNhbGN1bGF0ZWRQYWRkaW5nID0gJChkb2N1bWVudC5ib2R5KS5jc3MoJ3BhZGRpbmctcmlnaHQnKVxuICAgICAgJChkb2N1bWVudC5ib2R5KVxuICAgICAgICAuZGF0YSgncGFkZGluZy1yaWdodCcsIGFjdHVhbFBhZGRpbmcpXG4gICAgICAgIC5jc3MoJ3BhZGRpbmctcmlnaHQnLCBgJHtwYXJzZUZsb2F0KGNhbGN1bGF0ZWRQYWRkaW5nKSArIHRoaXMuX3Njcm9sbGJhcldpZHRofXB4YClcbiAgICB9XG5cbiAgICAkKGRvY3VtZW50LmJvZHkpLmFkZENsYXNzKENsYXNzTmFtZS5PUEVOKVxuICB9XG5cbiAgX3Jlc2V0U2Nyb2xsYmFyKCkge1xuICAgIC8vIFJlc3RvcmUgZml4ZWQgY29udGVudCBwYWRkaW5nXG4gICAgY29uc3QgZml4ZWRDb250ZW50ID0gW10uc2xpY2UuY2FsbChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFNlbGVjdG9yLkZJWEVEX0NPTlRFTlQpKVxuICAgICQoZml4ZWRDb250ZW50KS5lYWNoKChpbmRleCwgZWxlbWVudCkgPT4ge1xuICAgICAgY29uc3QgcGFkZGluZyA9ICQoZWxlbWVudCkuZGF0YSgncGFkZGluZy1yaWdodCcpXG4gICAgICAkKGVsZW1lbnQpLnJlbW92ZURhdGEoJ3BhZGRpbmctcmlnaHQnKVxuICAgICAgZWxlbWVudC5zdHlsZS5wYWRkaW5nUmlnaHQgPSBwYWRkaW5nID8gcGFkZGluZyA6ICcnXG4gICAgfSlcblxuICAgIC8vIFJlc3RvcmUgc3RpY2t5IGNvbnRlbnRcbiAgICBjb25zdCBlbGVtZW50cyA9IFtdLnNsaWNlLmNhbGwoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgJHtTZWxlY3Rvci5TVElDS1lfQ09OVEVOVH1gKSlcbiAgICAkKGVsZW1lbnRzKS5lYWNoKChpbmRleCwgZWxlbWVudCkgPT4ge1xuICAgICAgY29uc3QgbWFyZ2luID0gJChlbGVtZW50KS5kYXRhKCdtYXJnaW4tcmlnaHQnKVxuICAgICAgaWYgKHR5cGVvZiBtYXJnaW4gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICQoZWxlbWVudCkuY3NzKCdtYXJnaW4tcmlnaHQnLCBtYXJnaW4pLnJlbW92ZURhdGEoJ21hcmdpbi1yaWdodCcpXG4gICAgICB9XG4gICAgfSlcblxuICAgIC8vIFJlc3RvcmUgYm9keSBwYWRkaW5nXG4gICAgY29uc3QgcGFkZGluZyA9ICQoZG9jdW1lbnQuYm9keSkuZGF0YSgncGFkZGluZy1yaWdodCcpXG4gICAgJChkb2N1bWVudC5ib2R5KS5yZW1vdmVEYXRhKCdwYWRkaW5nLXJpZ2h0JylcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLnBhZGRpbmdSaWdodCA9IHBhZGRpbmcgPyBwYWRkaW5nIDogJydcbiAgfVxuXG4gIF9nZXRTY3JvbGxiYXJXaWR0aCgpIHsgLy8gdGh4IGQud2Fsc2hcbiAgICBjb25zdCBzY3JvbGxEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHNjcm9sbERpdi5jbGFzc05hbWUgPSBDbGFzc05hbWUuU0NST0xMQkFSX01FQVNVUkVSXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzY3JvbGxEaXYpXG4gICAgY29uc3Qgc2Nyb2xsYmFyV2lkdGggPSBzY3JvbGxEaXYuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGggLSBzY3JvbGxEaXYuY2xpZW50V2lkdGhcbiAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHNjcm9sbERpdilcbiAgICByZXR1cm4gc2Nyb2xsYmFyV2lkdGhcbiAgfVxuXG4gIC8vIFN0YXRpY1xuXG4gIHN0YXRpYyBfalF1ZXJ5SW50ZXJmYWNlKGNvbmZpZywgcmVsYXRlZFRhcmdldCkge1xuICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgbGV0IGRhdGEgPSAkKHRoaXMpLmRhdGEoREFUQV9LRVkpXG4gICAgICBjb25zdCBfY29uZmlnID0ge1xuICAgICAgICAuLi5EZWZhdWx0LFxuICAgICAgICAuLi4kKHRoaXMpLmRhdGEoKSxcbiAgICAgICAgLi4udHlwZW9mIGNvbmZpZyA9PT0gJ29iamVjdCcgJiYgY29uZmlnID8gY29uZmlnIDoge31cbiAgICAgIH1cblxuICAgICAgaWYgKCFkYXRhKSB7XG4gICAgICAgIGRhdGEgPSBuZXcgTW9kYWwodGhpcywgX2NvbmZpZylcbiAgICAgICAgJCh0aGlzKS5kYXRhKERBVEFfS0VZLCBkYXRhKVxuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGNvbmZpZyA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBkYXRhW2NvbmZpZ10gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgTm8gbWV0aG9kIG5hbWVkIFwiJHtjb25maWd9XCJgKVxuICAgICAgICB9XG4gICAgICAgIGRhdGFbY29uZmlnXShyZWxhdGVkVGFyZ2V0KVxuICAgICAgfSBlbHNlIGlmIChfY29uZmlnLnNob3cpIHtcbiAgICAgICAgZGF0YS5zaG93KHJlbGF0ZWRUYXJnZXQpXG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogRGF0YSBBcGkgaW1wbGVtZW50YXRpb25cbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbiQoZG9jdW1lbnQpLm9uKEV2ZW50LkNMSUNLX0RBVEFfQVBJLCBTZWxlY3Rvci5EQVRBX1RPR0dMRSwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gIGxldCB0YXJnZXRcbiAgY29uc3Qgc2VsZWN0b3IgPSBVdGlsLmdldFNlbGVjdG9yRnJvbUVsZW1lbnQodGhpcylcblxuICBpZiAoc2VsZWN0b3IpIHtcbiAgICB0YXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKVxuICB9XG5cbiAgY29uc3QgY29uZmlnID0gJCh0YXJnZXQpLmRhdGEoREFUQV9LRVkpXG4gICAgPyAndG9nZ2xlJyA6IHtcbiAgICAgIC4uLiQodGFyZ2V0KS5kYXRhKCksXG4gICAgICAuLi4kKHRoaXMpLmRhdGEoKVxuICAgIH1cblxuICBpZiAodGhpcy50YWdOYW1lID09PSAnQScgfHwgdGhpcy50YWdOYW1lID09PSAnQVJFQScpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gIH1cblxuICBjb25zdCAkdGFyZ2V0ID0gJCh0YXJnZXQpLm9uZShFdmVudC5TSE9XLCAoc2hvd0V2ZW50KSA9PiB7XG4gICAgaWYgKHNob3dFdmVudC5pc0RlZmF1bHRQcmV2ZW50ZWQoKSkge1xuICAgICAgLy8gT25seSByZWdpc3RlciBmb2N1cyByZXN0b3JlciBpZiBtb2RhbCB3aWxsIGFjdHVhbGx5IGdldCBzaG93blxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgJHRhcmdldC5vbmUoRXZlbnQuSElEREVOLCAoKSA9PiB7XG4gICAgICBpZiAoJCh0aGlzKS5pcygnOnZpc2libGUnKSkge1xuICAgICAgICB0aGlzLmZvY3VzKClcbiAgICAgIH1cbiAgICB9KVxuICB9KVxuXG4gIE1vZGFsLl9qUXVlcnlJbnRlcmZhY2UuY2FsbCgkKHRhcmdldCksIGNvbmZpZywgdGhpcylcbn0pXG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBqUXVlcnlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbiQuZm5bTkFNRV0gPSBNb2RhbC5falF1ZXJ5SW50ZXJmYWNlXG4kLmZuW05BTUVdLkNvbnN0cnVjdG9yID0gTW9kYWxcbiQuZm5bTkFNRV0ubm9Db25mbGljdCA9ICgpID0+IHtcbiAgJC5mbltOQU1FXSA9IEpRVUVSWV9OT19DT05GTElDVFxuICByZXR1cm4gTW9kYWwuX2pRdWVyeUludGVyZmFjZVxufVxuXG5leHBvcnQgZGVmYXVsdCBNb2RhbFxuIiwiLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQm9vdHN0cmFwICh2NC4zLjEpOiB0b29scy9zYW5pdGl6ZXIuanNcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFzdGVyL0xJQ0VOU0UpXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmNvbnN0IHVyaUF0dHJzID0gW1xuICAnYmFja2dyb3VuZCcsXG4gICdjaXRlJyxcbiAgJ2hyZWYnLFxuICAnaXRlbXR5cGUnLFxuICAnbG9uZ2Rlc2MnLFxuICAncG9zdGVyJyxcbiAgJ3NyYycsXG4gICd4bGluazpocmVmJ1xuXVxuXG5jb25zdCBBUklBX0FUVFJJQlVURV9QQVRURVJOID0gL15hcmlhLVtcXHctXSokL2lcblxuZXhwb3J0IGNvbnN0IERlZmF1bHRXaGl0ZWxpc3QgPSB7XG4gIC8vIEdsb2JhbCBhdHRyaWJ1dGVzIGFsbG93ZWQgb24gYW55IHN1cHBsaWVkIGVsZW1lbnQgYmVsb3cuXG4gICcqJzogWydjbGFzcycsICdkaXInLCAnaWQnLCAnbGFuZycsICdyb2xlJywgQVJJQV9BVFRSSUJVVEVfUEFUVEVSTl0sXG4gIGE6IFsndGFyZ2V0JywgJ2hyZWYnLCAndGl0bGUnLCAncmVsJ10sXG4gIGFyZWE6IFtdLFxuICBiOiBbXSxcbiAgYnI6IFtdLFxuICBjb2w6IFtdLFxuICBjb2RlOiBbXSxcbiAgZGl2OiBbXSxcbiAgZW06IFtdLFxuICBocjogW10sXG4gIGgxOiBbXSxcbiAgaDI6IFtdLFxuICBoMzogW10sXG4gIGg0OiBbXSxcbiAgaDU6IFtdLFxuICBoNjogW10sXG4gIGk6IFtdLFxuICBpbWc6IFsnc3JjJywgJ2FsdCcsICd0aXRsZScsICd3aWR0aCcsICdoZWlnaHQnXSxcbiAgbGk6IFtdLFxuICBvbDogW10sXG4gIHA6IFtdLFxuICBwcmU6IFtdLFxuICBzOiBbXSxcbiAgc21hbGw6IFtdLFxuICBzcGFuOiBbXSxcbiAgc3ViOiBbXSxcbiAgc3VwOiBbXSxcbiAgc3Ryb25nOiBbXSxcbiAgdTogW10sXG4gIHVsOiBbXVxufVxuXG4vKipcbiAqIEEgcGF0dGVybiB0aGF0IHJlY29nbml6ZXMgYSBjb21tb25seSB1c2VmdWwgc3Vic2V0IG9mIFVSTHMgdGhhdCBhcmUgc2FmZS5cbiAqXG4gKiBTaG91dG91dCB0byBBbmd1bGFyIDcgaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci9ibG9iLzcuMi40L3BhY2thZ2VzL2NvcmUvc3JjL3Nhbml0aXphdGlvbi91cmxfc2FuaXRpemVyLnRzXG4gKi9cbmNvbnN0IFNBRkVfVVJMX1BBVFRFUk4gPSAvXig/Oig/Omh0dHBzP3xtYWlsdG98ZnRwfHRlbHxmaWxlKTp8W14mOi8/I10qKD86Wy8/I118JCkpL2dpXG5cbi8qKlxuICogQSBwYXR0ZXJuIHRoYXQgbWF0Y2hlcyBzYWZlIGRhdGEgVVJMcy4gT25seSBtYXRjaGVzIGltYWdlLCB2aWRlbyBhbmQgYXVkaW8gdHlwZXMuXG4gKlxuICogU2hvdXRvdXQgdG8gQW5ndWxhciA3IGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvYmxvYi83LjIuNC9wYWNrYWdlcy9jb3JlL3NyYy9zYW5pdGl6YXRpb24vdXJsX3Nhbml0aXplci50c1xuICovXG5jb25zdCBEQVRBX1VSTF9QQVRURVJOID0gL15kYXRhOig/OmltYWdlXFwvKD86Ym1wfGdpZnxqcGVnfGpwZ3xwbmd8dGlmZnx3ZWJwKXx2aWRlb1xcLyg/Om1wZWd8bXA0fG9nZ3x3ZWJtKXxhdWRpb1xcLyg/Om1wM3xvZ2F8b2dnfG9wdXMpKTtiYXNlNjQsW2EtejAtOSsvXSs9KiQvaVxuXG5mdW5jdGlvbiBhbGxvd2VkQXR0cmlidXRlKGF0dHIsIGFsbG93ZWRBdHRyaWJ1dGVMaXN0KSB7XG4gIGNvbnN0IGF0dHJOYW1lID0gYXR0ci5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpXG5cbiAgaWYgKGFsbG93ZWRBdHRyaWJ1dGVMaXN0LmluZGV4T2YoYXR0ck5hbWUpICE9PSAtMSkge1xuICAgIGlmICh1cmlBdHRycy5pbmRleE9mKGF0dHJOYW1lKSAhPT0gLTEpIHtcbiAgICAgIHJldHVybiBCb29sZWFuKGF0dHIubm9kZVZhbHVlLm1hdGNoKFNBRkVfVVJMX1BBVFRFUk4pIHx8IGF0dHIubm9kZVZhbHVlLm1hdGNoKERBVEFfVVJMX1BBVFRFUk4pKVxuICAgIH1cblxuICAgIHJldHVybiB0cnVlXG4gIH1cblxuICBjb25zdCByZWdFeHAgPSBhbGxvd2VkQXR0cmlidXRlTGlzdC5maWx0ZXIoKGF0dHJSZWdleCkgPT4gYXR0clJlZ2V4IGluc3RhbmNlb2YgUmVnRXhwKVxuXG4gIC8vIENoZWNrIGlmIGEgcmVndWxhciBleHByZXNzaW9uIHZhbGlkYXRlcyB0aGUgYXR0cmlidXRlLlxuICBmb3IgKGxldCBpID0gMCwgbCA9IHJlZ0V4cC5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBpZiAoYXR0ck5hbWUubWF0Y2gocmVnRXhwW2ldKSkge1xuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2Vcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNhbml0aXplSHRtbCh1bnNhZmVIdG1sLCB3aGl0ZUxpc3QsIHNhbml0aXplRm4pIHtcbiAgaWYgKHVuc2FmZUh0bWwubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIHVuc2FmZUh0bWxcbiAgfVxuXG4gIGlmIChzYW5pdGl6ZUZuICYmIHR5cGVvZiBzYW5pdGl6ZUZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIHNhbml0aXplRm4odW5zYWZlSHRtbClcbiAgfVxuXG4gIGNvbnN0IGRvbVBhcnNlciA9IG5ldyB3aW5kb3cuRE9NUGFyc2VyKClcbiAgY29uc3QgY3JlYXRlZERvY3VtZW50ID0gZG9tUGFyc2VyLnBhcnNlRnJvbVN0cmluZyh1bnNhZmVIdG1sLCAndGV4dC9odG1sJylcbiAgY29uc3Qgd2hpdGVsaXN0S2V5cyA9IE9iamVjdC5rZXlzKHdoaXRlTGlzdClcbiAgY29uc3QgZWxlbWVudHMgPSBbXS5zbGljZS5jYWxsKGNyZWF0ZWREb2N1bWVudC5ib2R5LnF1ZXJ5U2VsZWN0b3JBbGwoJyonKSlcblxuICBmb3IgKGxldCBpID0gMCwgbGVuID0gZWxlbWVudHMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICBjb25zdCBlbCA9IGVsZW1lbnRzW2ldXG4gICAgY29uc3QgZWxOYW1lID0gZWwubm9kZU5hbWUudG9Mb3dlckNhc2UoKVxuXG4gICAgaWYgKHdoaXRlbGlzdEtleXMuaW5kZXhPZihlbC5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpKSA9PT0gLTEpIHtcbiAgICAgIGVsLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZWwpXG5cbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuXG4gICAgY29uc3QgYXR0cmlidXRlTGlzdCA9IFtdLnNsaWNlLmNhbGwoZWwuYXR0cmlidXRlcylcbiAgICBjb25zdCB3aGl0ZWxpc3RlZEF0dHJpYnV0ZXMgPSBbXS5jb25jYXQod2hpdGVMaXN0WycqJ10gfHwgW10sIHdoaXRlTGlzdFtlbE5hbWVdIHx8IFtdKVxuXG4gICAgYXR0cmlidXRlTGlzdC5mb3JFYWNoKChhdHRyKSA9PiB7XG4gICAgICBpZiAoIWFsbG93ZWRBdHRyaWJ1dGUoYXR0ciwgd2hpdGVsaXN0ZWRBdHRyaWJ1dGVzKSkge1xuICAgICAgICBlbC5yZW1vdmVBdHRyaWJ1dGUoYXR0ci5ub2RlTmFtZSlcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgcmV0dXJuIGNyZWF0ZWREb2N1bWVudC5ib2R5LmlubmVySFRNTFxufVxuIiwiLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQm9vdHN0cmFwICh2NC4zLjEpOiB0b29sdGlwLmpzXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21hc3Rlci9MSUNFTlNFKVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5pbXBvcnQge1xuICBEZWZhdWx0V2hpdGVsaXN0LFxuICBzYW5pdGl6ZUh0bWxcbn0gZnJvbSAnLi90b29scy9zYW5pdGl6ZXInXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknXG5pbXBvcnQgUG9wcGVyIGZyb20gJ3BvcHBlci5qcydcbmltcG9ydCBVdGlsIGZyb20gJy4vdXRpbCdcblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIENvbnN0YW50c1xuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuY29uc3QgTkFNRSAgICAgICAgICAgICAgICAgID0gJ3Rvb2x0aXAnXG5jb25zdCBWRVJTSU9OICAgICAgICAgICAgICAgPSAnNC4zLjEnXG5jb25zdCBEQVRBX0tFWSAgICAgICAgICAgICAgPSAnYnMudG9vbHRpcCdcbmNvbnN0IEVWRU5UX0tFWSAgICAgICAgICAgICA9IGAuJHtEQVRBX0tFWX1gXG5jb25zdCBKUVVFUllfTk9fQ09ORkxJQ1QgICAgPSAkLmZuW05BTUVdXG5jb25zdCBDTEFTU19QUkVGSVggICAgICAgICAgPSAnYnMtdG9vbHRpcCdcbmNvbnN0IEJTQ0xTX1BSRUZJWF9SRUdFWCAgICA9IG5ldyBSZWdFeHAoYChefFxcXFxzKSR7Q0xBU1NfUFJFRklYfVxcXFxTK2AsICdnJylcbmNvbnN0IERJU0FMTE9XRURfQVRUUklCVVRFUyA9IFsnc2FuaXRpemUnLCAnd2hpdGVMaXN0JywgJ3Nhbml0aXplRm4nXVxuXG5jb25zdCBEZWZhdWx0VHlwZSA9IHtcbiAgYW5pbWF0aW9uICAgICAgICAgOiAnYm9vbGVhbicsXG4gIHRlbXBsYXRlICAgICAgICAgIDogJ3N0cmluZycsXG4gIHRpdGxlICAgICAgICAgICAgIDogJyhzdHJpbmd8ZWxlbWVudHxmdW5jdGlvbiknLFxuICB0cmlnZ2VyICAgICAgICAgICA6ICdzdHJpbmcnLFxuICBkZWxheSAgICAgICAgICAgICA6ICcobnVtYmVyfG9iamVjdCknLFxuICBodG1sICAgICAgICAgICAgICA6ICdib29sZWFuJyxcbiAgc2VsZWN0b3IgICAgICAgICAgOiAnKHN0cmluZ3xib29sZWFuKScsXG4gIHBsYWNlbWVudCAgICAgICAgIDogJyhzdHJpbmd8ZnVuY3Rpb24pJyxcbiAgb2Zmc2V0ICAgICAgICAgICAgOiAnKG51bWJlcnxzdHJpbmd8ZnVuY3Rpb24pJyxcbiAgY29udGFpbmVyICAgICAgICAgOiAnKHN0cmluZ3xlbGVtZW50fGJvb2xlYW4pJyxcbiAgZmFsbGJhY2tQbGFjZW1lbnQgOiAnKHN0cmluZ3xhcnJheSknLFxuICBib3VuZGFyeSAgICAgICAgICA6ICcoc3RyaW5nfGVsZW1lbnQpJyxcbiAgc2FuaXRpemUgICAgICAgICAgOiAnYm9vbGVhbicsXG4gIHNhbml0aXplRm4gICAgICAgIDogJyhudWxsfGZ1bmN0aW9uKScsXG4gIHdoaXRlTGlzdCAgICAgICAgIDogJ29iamVjdCdcbn1cblxuY29uc3QgQXR0YWNobWVudE1hcCA9IHtcbiAgQVVUTyAgIDogJ2F1dG8nLFxuICBUT1AgICAgOiAndG9wJyxcbiAgUklHSFQgIDogJ3JpZ2h0JyxcbiAgQk9UVE9NIDogJ2JvdHRvbScsXG4gIExFRlQgICA6ICdsZWZ0J1xufVxuXG5jb25zdCBEZWZhdWx0ID0ge1xuICBhbmltYXRpb24gICAgICAgICA6IHRydWUsXG4gIHRlbXBsYXRlICAgICAgICAgIDogJzxkaXYgY2xhc3M9XCJ0b29sdGlwXCIgcm9sZT1cInRvb2x0aXBcIj4nICtcbiAgICAgICAgICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJhcnJvd1wiPjwvZGl2PicgK1xuICAgICAgICAgICAgICAgICAgICAnPGRpdiBjbGFzcz1cInRvb2x0aXAtaW5uZXJcIj48L2Rpdj48L2Rpdj4nLFxuICB0cmlnZ2VyICAgICAgICAgICA6ICdob3ZlciBmb2N1cycsXG4gIHRpdGxlICAgICAgICAgICAgIDogJycsXG4gIGRlbGF5ICAgICAgICAgICAgIDogMCxcbiAgaHRtbCAgICAgICAgICAgICAgOiBmYWxzZSxcbiAgc2VsZWN0b3IgICAgICAgICAgOiBmYWxzZSxcbiAgcGxhY2VtZW50ICAgICAgICAgOiAndG9wJyxcbiAgb2Zmc2V0ICAgICAgICAgICAgOiAwLFxuICBjb250YWluZXIgICAgICAgICA6IGZhbHNlLFxuICBmYWxsYmFja1BsYWNlbWVudCA6ICdmbGlwJyxcbiAgYm91bmRhcnkgICAgICAgICAgOiAnc2Nyb2xsUGFyZW50JyxcbiAgc2FuaXRpemUgICAgICAgICAgOiB0cnVlLFxuICBzYW5pdGl6ZUZuICAgICAgICA6IG51bGwsXG4gIHdoaXRlTGlzdCAgICAgICAgIDogRGVmYXVsdFdoaXRlbGlzdFxufVxuXG5jb25zdCBIb3ZlclN0YXRlID0ge1xuICBTSE9XIDogJ3Nob3cnLFxuICBPVVQgIDogJ291dCdcbn1cblxuY29uc3QgRXZlbnQgPSB7XG4gIEhJREUgICAgICAgOiBgaGlkZSR7RVZFTlRfS0VZfWAsXG4gIEhJRERFTiAgICAgOiBgaGlkZGVuJHtFVkVOVF9LRVl9YCxcbiAgU0hPVyAgICAgICA6IGBzaG93JHtFVkVOVF9LRVl9YCxcbiAgU0hPV04gICAgICA6IGBzaG93biR7RVZFTlRfS0VZfWAsXG4gIElOU0VSVEVEICAgOiBgaW5zZXJ0ZWQke0VWRU5UX0tFWX1gLFxuICBDTElDSyAgICAgIDogYGNsaWNrJHtFVkVOVF9LRVl9YCxcbiAgRk9DVVNJTiAgICA6IGBmb2N1c2luJHtFVkVOVF9LRVl9YCxcbiAgRk9DVVNPVVQgICA6IGBmb2N1c291dCR7RVZFTlRfS0VZfWAsXG4gIE1PVVNFRU5URVIgOiBgbW91c2VlbnRlciR7RVZFTlRfS0VZfWAsXG4gIE1PVVNFTEVBVkUgOiBgbW91c2VsZWF2ZSR7RVZFTlRfS0VZfWBcbn1cblxuY29uc3QgQ2xhc3NOYW1lID0ge1xuICBGQURFIDogJ2ZhZGUnLFxuICBTSE9XIDogJ3Nob3cnXG59XG5cbmNvbnN0IFNlbGVjdG9yID0ge1xuICBUT09MVElQICAgICAgIDogJy50b29sdGlwJyxcbiAgVE9PTFRJUF9JTk5FUiA6ICcudG9vbHRpcC1pbm5lcicsXG4gIEFSUk9XICAgICAgICAgOiAnLmFycm93J1xufVxuXG5jb25zdCBUcmlnZ2VyID0ge1xuICBIT1ZFUiAgOiAnaG92ZXInLFxuICBGT0NVUyAgOiAnZm9jdXMnLFxuICBDTElDSyAgOiAnY2xpY2snLFxuICBNQU5VQUwgOiAnbWFudWFsJ1xufVxuXG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBDbGFzcyBEZWZpbml0aW9uXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5jbGFzcyBUb29sdGlwIHtcbiAgY29uc3RydWN0b3IoZWxlbWVudCwgY29uZmlnKSB7XG4gICAgLyoqXG4gICAgICogQ2hlY2sgZm9yIFBvcHBlciBkZXBlbmRlbmN5XG4gICAgICogUG9wcGVyIC0gaHR0cHM6Ly9wb3BwZXIuanMub3JnXG4gICAgICovXG4gICAgaWYgKHR5cGVvZiBQb3BwZXIgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdCb290c3RyYXBcXCdzIHRvb2x0aXBzIHJlcXVpcmUgUG9wcGVyLmpzIChodHRwczovL3BvcHBlci5qcy5vcmcvKScpXG4gICAgfVxuXG4gICAgLy8gcHJpdmF0ZVxuICAgIHRoaXMuX2lzRW5hYmxlZCAgICAgPSB0cnVlXG4gICAgdGhpcy5fdGltZW91dCAgICAgICA9IDBcbiAgICB0aGlzLl9ob3ZlclN0YXRlICAgID0gJydcbiAgICB0aGlzLl9hY3RpdmVUcmlnZ2VyID0ge31cbiAgICB0aGlzLl9wb3BwZXIgICAgICAgID0gbnVsbFxuXG4gICAgLy8gUHJvdGVjdGVkXG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudFxuICAgIHRoaXMuY29uZmlnICA9IHRoaXMuX2dldENvbmZpZyhjb25maWcpXG4gICAgdGhpcy50aXAgICAgID0gbnVsbFxuXG4gICAgdGhpcy5fc2V0TGlzdGVuZXJzKClcbiAgfVxuXG4gIC8vIEdldHRlcnNcblxuICBzdGF0aWMgZ2V0IFZFUlNJT04oKSB7XG4gICAgcmV0dXJuIFZFUlNJT05cbiAgfVxuXG4gIHN0YXRpYyBnZXQgRGVmYXVsdCgpIHtcbiAgICByZXR1cm4gRGVmYXVsdFxuICB9XG5cbiAgc3RhdGljIGdldCBOQU1FKCkge1xuICAgIHJldHVybiBOQU1FXG4gIH1cblxuICBzdGF0aWMgZ2V0IERBVEFfS0VZKCkge1xuICAgIHJldHVybiBEQVRBX0tFWVxuICB9XG5cbiAgc3RhdGljIGdldCBFdmVudCgpIHtcbiAgICByZXR1cm4gRXZlbnRcbiAgfVxuXG4gIHN0YXRpYyBnZXQgRVZFTlRfS0VZKCkge1xuICAgIHJldHVybiBFVkVOVF9LRVlcbiAgfVxuXG4gIHN0YXRpYyBnZXQgRGVmYXVsdFR5cGUoKSB7XG4gICAgcmV0dXJuIERlZmF1bHRUeXBlXG4gIH1cblxuICAvLyBQdWJsaWNcblxuICBlbmFibGUoKSB7XG4gICAgdGhpcy5faXNFbmFibGVkID0gdHJ1ZVxuICB9XG5cbiAgZGlzYWJsZSgpIHtcbiAgICB0aGlzLl9pc0VuYWJsZWQgPSBmYWxzZVxuICB9XG5cbiAgdG9nZ2xlRW5hYmxlZCgpIHtcbiAgICB0aGlzLl9pc0VuYWJsZWQgPSAhdGhpcy5faXNFbmFibGVkXG4gIH1cblxuICB0b2dnbGUoZXZlbnQpIHtcbiAgICBpZiAoIXRoaXMuX2lzRW5hYmxlZCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKGV2ZW50KSB7XG4gICAgICBjb25zdCBkYXRhS2V5ID0gdGhpcy5jb25zdHJ1Y3Rvci5EQVRBX0tFWVxuICAgICAgbGV0IGNvbnRleHQgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLmRhdGEoZGF0YUtleSlcblxuICAgICAgaWYgKCFjb250ZXh0KSB7XG4gICAgICAgIGNvbnRleHQgPSBuZXcgdGhpcy5jb25zdHJ1Y3RvcihcbiAgICAgICAgICBldmVudC5jdXJyZW50VGFyZ2V0LFxuICAgICAgICAgIHRoaXMuX2dldERlbGVnYXRlQ29uZmlnKClcbiAgICAgICAgKVxuICAgICAgICAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLmRhdGEoZGF0YUtleSwgY29udGV4dClcbiAgICAgIH1cblxuICAgICAgY29udGV4dC5fYWN0aXZlVHJpZ2dlci5jbGljayA9ICFjb250ZXh0Ll9hY3RpdmVUcmlnZ2VyLmNsaWNrXG5cbiAgICAgIGlmIChjb250ZXh0Ll9pc1dpdGhBY3RpdmVUcmlnZ2VyKCkpIHtcbiAgICAgICAgY29udGV4dC5fZW50ZXIobnVsbCwgY29udGV4dClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnRleHQuX2xlYXZlKG51bGwsIGNvbnRleHQpXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICgkKHRoaXMuZ2V0VGlwRWxlbWVudCgpKS5oYXNDbGFzcyhDbGFzc05hbWUuU0hPVykpIHtcbiAgICAgICAgdGhpcy5fbGVhdmUobnVsbCwgdGhpcylcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIHRoaXMuX2VudGVyKG51bGwsIHRoaXMpXG4gICAgfVxuICB9XG5cbiAgZGlzcG9zZSgpIHtcbiAgICBjbGVhclRpbWVvdXQodGhpcy5fdGltZW91dClcblxuICAgICQucmVtb3ZlRGF0YSh0aGlzLmVsZW1lbnQsIHRoaXMuY29uc3RydWN0b3IuREFUQV9LRVkpXG5cbiAgICAkKHRoaXMuZWxlbWVudCkub2ZmKHRoaXMuY29uc3RydWN0b3IuRVZFTlRfS0VZKVxuICAgICQodGhpcy5lbGVtZW50KS5jbG9zZXN0KCcubW9kYWwnKS5vZmYoJ2hpZGUuYnMubW9kYWwnKVxuXG4gICAgaWYgKHRoaXMudGlwKSB7XG4gICAgICAkKHRoaXMudGlwKS5yZW1vdmUoKVxuICAgIH1cblxuICAgIHRoaXMuX2lzRW5hYmxlZCAgICAgPSBudWxsXG4gICAgdGhpcy5fdGltZW91dCAgICAgICA9IG51bGxcbiAgICB0aGlzLl9ob3ZlclN0YXRlICAgID0gbnVsbFxuICAgIHRoaXMuX2FjdGl2ZVRyaWdnZXIgPSBudWxsXG4gICAgaWYgKHRoaXMuX3BvcHBlciAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5fcG9wcGVyLmRlc3Ryb3koKVxuICAgIH1cblxuICAgIHRoaXMuX3BvcHBlciA9IG51bGxcbiAgICB0aGlzLmVsZW1lbnQgPSBudWxsXG4gICAgdGhpcy5jb25maWcgID0gbnVsbFxuICAgIHRoaXMudGlwICAgICA9IG51bGxcbiAgfVxuXG4gIHNob3coKSB7XG4gICAgaWYgKCQodGhpcy5lbGVtZW50KS5jc3MoJ2Rpc3BsYXknKSA9PT0gJ25vbmUnKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1BsZWFzZSB1c2Ugc2hvdyBvbiB2aXNpYmxlIGVsZW1lbnRzJylcbiAgICB9XG5cbiAgICBjb25zdCBzaG93RXZlbnQgPSAkLkV2ZW50KHRoaXMuY29uc3RydWN0b3IuRXZlbnQuU0hPVylcbiAgICBpZiAodGhpcy5pc1dpdGhDb250ZW50KCkgJiYgdGhpcy5faXNFbmFibGVkKSB7XG4gICAgICAkKHRoaXMuZWxlbWVudCkudHJpZ2dlcihzaG93RXZlbnQpXG5cbiAgICAgIGNvbnN0IHNoYWRvd1Jvb3QgPSBVdGlsLmZpbmRTaGFkb3dSb290KHRoaXMuZWxlbWVudClcbiAgICAgIGNvbnN0IGlzSW5UaGVEb20gPSAkLmNvbnRhaW5zKFxuICAgICAgICBzaGFkb3dSb290ICE9PSBudWxsID8gc2hhZG93Um9vdCA6IHRoaXMuZWxlbWVudC5vd25lckRvY3VtZW50LmRvY3VtZW50RWxlbWVudCxcbiAgICAgICAgdGhpcy5lbGVtZW50XG4gICAgICApXG5cbiAgICAgIGlmIChzaG93RXZlbnQuaXNEZWZhdWx0UHJldmVudGVkKCkgfHwgIWlzSW5UaGVEb20pIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHRpcCAgID0gdGhpcy5nZXRUaXBFbGVtZW50KClcbiAgICAgIGNvbnN0IHRpcElkID0gVXRpbC5nZXRVSUQodGhpcy5jb25zdHJ1Y3Rvci5OQU1FKVxuXG4gICAgICB0aXAuc2V0QXR0cmlidXRlKCdpZCcsIHRpcElkKVxuICAgICAgdGhpcy5lbGVtZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1kZXNjcmliZWRieScsIHRpcElkKVxuXG4gICAgICB0aGlzLnNldENvbnRlbnQoKVxuXG4gICAgICBpZiAodGhpcy5jb25maWcuYW5pbWF0aW9uKSB7XG4gICAgICAgICQodGlwKS5hZGRDbGFzcyhDbGFzc05hbWUuRkFERSlcbiAgICAgIH1cblxuICAgICAgY29uc3QgcGxhY2VtZW50ICA9IHR5cGVvZiB0aGlzLmNvbmZpZy5wbGFjZW1lbnQgPT09ICdmdW5jdGlvbidcbiAgICAgICAgPyB0aGlzLmNvbmZpZy5wbGFjZW1lbnQuY2FsbCh0aGlzLCB0aXAsIHRoaXMuZWxlbWVudClcbiAgICAgICAgOiB0aGlzLmNvbmZpZy5wbGFjZW1lbnRcblxuICAgICAgY29uc3QgYXR0YWNobWVudCA9IHRoaXMuX2dldEF0dGFjaG1lbnQocGxhY2VtZW50KVxuICAgICAgdGhpcy5hZGRBdHRhY2htZW50Q2xhc3MoYXR0YWNobWVudClcblxuICAgICAgY29uc3QgY29udGFpbmVyID0gdGhpcy5fZ2V0Q29udGFpbmVyKClcbiAgICAgICQodGlwKS5kYXRhKHRoaXMuY29uc3RydWN0b3IuREFUQV9LRVksIHRoaXMpXG5cbiAgICAgIGlmICghJC5jb250YWlucyh0aGlzLmVsZW1lbnQub3duZXJEb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsIHRoaXMudGlwKSkge1xuICAgICAgICAkKHRpcCkuYXBwZW5kVG8oY29udGFpbmVyKVxuICAgICAgfVxuXG4gICAgICAkKHRoaXMuZWxlbWVudCkudHJpZ2dlcih0aGlzLmNvbnN0cnVjdG9yLkV2ZW50LklOU0VSVEVEKVxuXG4gICAgICB0aGlzLl9wb3BwZXIgPSBuZXcgUG9wcGVyKHRoaXMuZWxlbWVudCwgdGlwLCB7XG4gICAgICAgIHBsYWNlbWVudDogYXR0YWNobWVudCxcbiAgICAgICAgbW9kaWZpZXJzOiB7XG4gICAgICAgICAgb2Zmc2V0OiB0aGlzLl9nZXRPZmZzZXQoKSxcbiAgICAgICAgICBmbGlwOiB7XG4gICAgICAgICAgICBiZWhhdmlvcjogdGhpcy5jb25maWcuZmFsbGJhY2tQbGFjZW1lbnRcbiAgICAgICAgICB9LFxuICAgICAgICAgIGFycm93OiB7XG4gICAgICAgICAgICBlbGVtZW50OiBTZWxlY3Rvci5BUlJPV1xuICAgICAgICAgIH0sXG4gICAgICAgICAgcHJldmVudE92ZXJmbG93OiB7XG4gICAgICAgICAgICBib3VuZGFyaWVzRWxlbWVudDogdGhpcy5jb25maWcuYm91bmRhcnlcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIG9uQ3JlYXRlOiAoZGF0YSkgPT4ge1xuICAgICAgICAgIGlmIChkYXRhLm9yaWdpbmFsUGxhY2VtZW50ICE9PSBkYXRhLnBsYWNlbWVudCkge1xuICAgICAgICAgICAgdGhpcy5faGFuZGxlUG9wcGVyUGxhY2VtZW50Q2hhbmdlKGRhdGEpXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBvblVwZGF0ZTogKGRhdGEpID0+IHRoaXMuX2hhbmRsZVBvcHBlclBsYWNlbWVudENoYW5nZShkYXRhKVxuICAgICAgfSlcblxuICAgICAgJCh0aXApLmFkZENsYXNzKENsYXNzTmFtZS5TSE9XKVxuXG4gICAgICAvLyBJZiB0aGlzIGlzIGEgdG91Y2gtZW5hYmxlZCBkZXZpY2Ugd2UgYWRkIGV4dHJhXG4gICAgICAvLyBlbXB0eSBtb3VzZW92ZXIgbGlzdGVuZXJzIHRvIHRoZSBib2R5J3MgaW1tZWRpYXRlIGNoaWxkcmVuO1xuICAgICAgLy8gb25seSBuZWVkZWQgYmVjYXVzZSBvZiBicm9rZW4gZXZlbnQgZGVsZWdhdGlvbiBvbiBpT1NcbiAgICAgIC8vIGh0dHBzOi8vd3d3LnF1aXJrc21vZGUub3JnL2Jsb2cvYXJjaGl2ZXMvMjAxNC8wMi9tb3VzZV9ldmVudF9idWIuaHRtbFxuICAgICAgaWYgKCdvbnRvdWNoc3RhcnQnIGluIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkge1xuICAgICAgICAkKGRvY3VtZW50LmJvZHkpLmNoaWxkcmVuKCkub24oJ21vdXNlb3ZlcicsIG51bGwsICQubm9vcClcbiAgICAgIH1cblxuICAgICAgY29uc3QgY29tcGxldGUgPSAoKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLmNvbmZpZy5hbmltYXRpb24pIHtcbiAgICAgICAgICB0aGlzLl9maXhUcmFuc2l0aW9uKClcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBwcmV2SG92ZXJTdGF0ZSA9IHRoaXMuX2hvdmVyU3RhdGVcbiAgICAgICAgdGhpcy5faG92ZXJTdGF0ZSAgICAgPSBudWxsXG5cbiAgICAgICAgJCh0aGlzLmVsZW1lbnQpLnRyaWdnZXIodGhpcy5jb25zdHJ1Y3Rvci5FdmVudC5TSE9XTilcblxuICAgICAgICBpZiAocHJldkhvdmVyU3RhdGUgPT09IEhvdmVyU3RhdGUuT1VUKSB7XG4gICAgICAgICAgdGhpcy5fbGVhdmUobnVsbCwgdGhpcylcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoJCh0aGlzLnRpcCkuaGFzQ2xhc3MoQ2xhc3NOYW1lLkZBREUpKSB7XG4gICAgICAgIGNvbnN0IHRyYW5zaXRpb25EdXJhdGlvbiA9IFV0aWwuZ2V0VHJhbnNpdGlvbkR1cmF0aW9uRnJvbUVsZW1lbnQodGhpcy50aXApXG5cbiAgICAgICAgJCh0aGlzLnRpcClcbiAgICAgICAgICAub25lKFV0aWwuVFJBTlNJVElPTl9FTkQsIGNvbXBsZXRlKVxuICAgICAgICAgIC5lbXVsYXRlVHJhbnNpdGlvbkVuZCh0cmFuc2l0aW9uRHVyYXRpb24pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb21wbGV0ZSgpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaGlkZShjYWxsYmFjaykge1xuICAgIGNvbnN0IHRpcCAgICAgICA9IHRoaXMuZ2V0VGlwRWxlbWVudCgpXG4gICAgY29uc3QgaGlkZUV2ZW50ID0gJC5FdmVudCh0aGlzLmNvbnN0cnVjdG9yLkV2ZW50LkhJREUpXG4gICAgY29uc3QgY29tcGxldGUgPSAoKSA9PiB7XG4gICAgICBpZiAodGhpcy5faG92ZXJTdGF0ZSAhPT0gSG92ZXJTdGF0ZS5TSE9XICYmIHRpcC5wYXJlbnROb2RlKSB7XG4gICAgICAgIHRpcC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRpcClcbiAgICAgIH1cblxuICAgICAgdGhpcy5fY2xlYW5UaXBDbGFzcygpXG4gICAgICB0aGlzLmVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdhcmlhLWRlc2NyaWJlZGJ5JylcbiAgICAgICQodGhpcy5lbGVtZW50KS50cmlnZ2VyKHRoaXMuY29uc3RydWN0b3IuRXZlbnQuSElEREVOKVxuICAgICAgaWYgKHRoaXMuX3BvcHBlciAhPT0gbnVsbCkge1xuICAgICAgICB0aGlzLl9wb3BwZXIuZGVzdHJveSgpXG4gICAgICB9XG5cbiAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICBjYWxsYmFjaygpXG4gICAgICB9XG4gICAgfVxuXG4gICAgJCh0aGlzLmVsZW1lbnQpLnRyaWdnZXIoaGlkZUV2ZW50KVxuXG4gICAgaWYgKGhpZGVFdmVudC5pc0RlZmF1bHRQcmV2ZW50ZWQoKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgJCh0aXApLnJlbW92ZUNsYXNzKENsYXNzTmFtZS5TSE9XKVxuXG4gICAgLy8gSWYgdGhpcyBpcyBhIHRvdWNoLWVuYWJsZWQgZGV2aWNlIHdlIHJlbW92ZSB0aGUgZXh0cmFcbiAgICAvLyBlbXB0eSBtb3VzZW92ZXIgbGlzdGVuZXJzIHdlIGFkZGVkIGZvciBpT1Mgc3VwcG9ydFxuICAgIGlmICgnb250b3VjaHN0YXJ0JyBpbiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpIHtcbiAgICAgICQoZG9jdW1lbnQuYm9keSkuY2hpbGRyZW4oKS5vZmYoJ21vdXNlb3ZlcicsIG51bGwsICQubm9vcClcbiAgICB9XG5cbiAgICB0aGlzLl9hY3RpdmVUcmlnZ2VyW1RyaWdnZXIuQ0xJQ0tdID0gZmFsc2VcbiAgICB0aGlzLl9hY3RpdmVUcmlnZ2VyW1RyaWdnZXIuRk9DVVNdID0gZmFsc2VcbiAgICB0aGlzLl9hY3RpdmVUcmlnZ2VyW1RyaWdnZXIuSE9WRVJdID0gZmFsc2VcblxuICAgIGlmICgkKHRoaXMudGlwKS5oYXNDbGFzcyhDbGFzc05hbWUuRkFERSkpIHtcbiAgICAgIGNvbnN0IHRyYW5zaXRpb25EdXJhdGlvbiA9IFV0aWwuZ2V0VHJhbnNpdGlvbkR1cmF0aW9uRnJvbUVsZW1lbnQodGlwKVxuXG4gICAgICAkKHRpcClcbiAgICAgICAgLm9uZShVdGlsLlRSQU5TSVRJT05fRU5ELCBjb21wbGV0ZSlcbiAgICAgICAgLmVtdWxhdGVUcmFuc2l0aW9uRW5kKHRyYW5zaXRpb25EdXJhdGlvbilcbiAgICB9IGVsc2Uge1xuICAgICAgY29tcGxldGUoKVxuICAgIH1cblxuICAgIHRoaXMuX2hvdmVyU3RhdGUgPSAnJ1xuICB9XG5cbiAgdXBkYXRlKCkge1xuICAgIGlmICh0aGlzLl9wb3BwZXIgIT09IG51bGwpIHtcbiAgICAgIHRoaXMuX3BvcHBlci5zY2hlZHVsZVVwZGF0ZSgpXG4gICAgfVxuICB9XG5cbiAgLy8gUHJvdGVjdGVkXG5cbiAgaXNXaXRoQ29udGVudCgpIHtcbiAgICByZXR1cm4gQm9vbGVhbih0aGlzLmdldFRpdGxlKCkpXG4gIH1cblxuICBhZGRBdHRhY2htZW50Q2xhc3MoYXR0YWNobWVudCkge1xuICAgICQodGhpcy5nZXRUaXBFbGVtZW50KCkpLmFkZENsYXNzKGAke0NMQVNTX1BSRUZJWH0tJHthdHRhY2htZW50fWApXG4gIH1cblxuICBnZXRUaXBFbGVtZW50KCkge1xuICAgIHRoaXMudGlwID0gdGhpcy50aXAgfHwgJCh0aGlzLmNvbmZpZy50ZW1wbGF0ZSlbMF1cbiAgICByZXR1cm4gdGhpcy50aXBcbiAgfVxuXG4gIHNldENvbnRlbnQoKSB7XG4gICAgY29uc3QgdGlwID0gdGhpcy5nZXRUaXBFbGVtZW50KClcbiAgICB0aGlzLnNldEVsZW1lbnRDb250ZW50KCQodGlwLnF1ZXJ5U2VsZWN0b3JBbGwoU2VsZWN0b3IuVE9PTFRJUF9JTk5FUikpLCB0aGlzLmdldFRpdGxlKCkpXG4gICAgJCh0aXApLnJlbW92ZUNsYXNzKGAke0NsYXNzTmFtZS5GQURFfSAke0NsYXNzTmFtZS5TSE9XfWApXG4gIH1cblxuICBzZXRFbGVtZW50Q29udGVudCgkZWxlbWVudCwgY29udGVudCkge1xuICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ29iamVjdCcgJiYgKGNvbnRlbnQubm9kZVR5cGUgfHwgY29udGVudC5qcXVlcnkpKSB7XG4gICAgICAvLyBDb250ZW50IGlzIGEgRE9NIG5vZGUgb3IgYSBqUXVlcnlcbiAgICAgIGlmICh0aGlzLmNvbmZpZy5odG1sKSB7XG4gICAgICAgIGlmICghJChjb250ZW50KS5wYXJlbnQoKS5pcygkZWxlbWVudCkpIHtcbiAgICAgICAgICAkZWxlbWVudC5lbXB0eSgpLmFwcGVuZChjb250ZW50KVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAkZWxlbWVudC50ZXh0KCQoY29udGVudCkudGV4dCgpKVxuICAgICAgfVxuXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAodGhpcy5jb25maWcuaHRtbCkge1xuICAgICAgaWYgKHRoaXMuY29uZmlnLnNhbml0aXplKSB7XG4gICAgICAgIGNvbnRlbnQgPSBzYW5pdGl6ZUh0bWwoY29udGVudCwgdGhpcy5jb25maWcud2hpdGVMaXN0LCB0aGlzLmNvbmZpZy5zYW5pdGl6ZUZuKVxuICAgICAgfVxuXG4gICAgICAkZWxlbWVudC5odG1sKGNvbnRlbnQpXG4gICAgfSBlbHNlIHtcbiAgICAgICRlbGVtZW50LnRleHQoY29udGVudClcbiAgICB9XG4gIH1cblxuICBnZXRUaXRsZSgpIHtcbiAgICBsZXQgdGl0bGUgPSB0aGlzLmVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLW9yaWdpbmFsLXRpdGxlJylcblxuICAgIGlmICghdGl0bGUpIHtcbiAgICAgIHRpdGxlID0gdHlwZW9mIHRoaXMuY29uZmlnLnRpdGxlID09PSAnZnVuY3Rpb24nXG4gICAgICAgID8gdGhpcy5jb25maWcudGl0bGUuY2FsbCh0aGlzLmVsZW1lbnQpXG4gICAgICAgIDogdGhpcy5jb25maWcudGl0bGVcbiAgICB9XG5cbiAgICByZXR1cm4gdGl0bGVcbiAgfVxuXG4gIC8vIFByaXZhdGVcblxuICBfZ2V0T2Zmc2V0KCkge1xuICAgIGNvbnN0IG9mZnNldCA9IHt9XG5cbiAgICBpZiAodHlwZW9mIHRoaXMuY29uZmlnLm9mZnNldCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgb2Zmc2V0LmZuID0gKGRhdGEpID0+IHtcbiAgICAgICAgZGF0YS5vZmZzZXRzID0ge1xuICAgICAgICAgIC4uLmRhdGEub2Zmc2V0cyxcbiAgICAgICAgICAuLi50aGlzLmNvbmZpZy5vZmZzZXQoZGF0YS5vZmZzZXRzLCB0aGlzLmVsZW1lbnQpIHx8IHt9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZGF0YVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBvZmZzZXQub2Zmc2V0ID0gdGhpcy5jb25maWcub2Zmc2V0XG4gICAgfVxuXG4gICAgcmV0dXJuIG9mZnNldFxuICB9XG5cbiAgX2dldENvbnRhaW5lcigpIHtcbiAgICBpZiAodGhpcy5jb25maWcuY29udGFpbmVyID09PSBmYWxzZSkge1xuICAgICAgcmV0dXJuIGRvY3VtZW50LmJvZHlcbiAgICB9XG5cbiAgICBpZiAoVXRpbC5pc0VsZW1lbnQodGhpcy5jb25maWcuY29udGFpbmVyKSkge1xuICAgICAgcmV0dXJuICQodGhpcy5jb25maWcuY29udGFpbmVyKVxuICAgIH1cblxuICAgIHJldHVybiAkKGRvY3VtZW50KS5maW5kKHRoaXMuY29uZmlnLmNvbnRhaW5lcilcbiAgfVxuXG4gIF9nZXRBdHRhY2htZW50KHBsYWNlbWVudCkge1xuICAgIHJldHVybiBBdHRhY2htZW50TWFwW3BsYWNlbWVudC50b1VwcGVyQ2FzZSgpXVxuICB9XG5cbiAgX3NldExpc3RlbmVycygpIHtcbiAgICBjb25zdCB0cmlnZ2VycyA9IHRoaXMuY29uZmlnLnRyaWdnZXIuc3BsaXQoJyAnKVxuXG4gICAgdHJpZ2dlcnMuZm9yRWFjaCgodHJpZ2dlcikgPT4ge1xuICAgICAgaWYgKHRyaWdnZXIgPT09ICdjbGljaycpIHtcbiAgICAgICAgJCh0aGlzLmVsZW1lbnQpLm9uKFxuICAgICAgICAgIHRoaXMuY29uc3RydWN0b3IuRXZlbnQuQ0xJQ0ssXG4gICAgICAgICAgdGhpcy5jb25maWcuc2VsZWN0b3IsXG4gICAgICAgICAgKGV2ZW50KSA9PiB0aGlzLnRvZ2dsZShldmVudClcbiAgICAgICAgKVxuICAgICAgfSBlbHNlIGlmICh0cmlnZ2VyICE9PSBUcmlnZ2VyLk1BTlVBTCkge1xuICAgICAgICBjb25zdCBldmVudEluID0gdHJpZ2dlciA9PT0gVHJpZ2dlci5IT1ZFUlxuICAgICAgICAgID8gdGhpcy5jb25zdHJ1Y3Rvci5FdmVudC5NT1VTRUVOVEVSXG4gICAgICAgICAgOiB0aGlzLmNvbnN0cnVjdG9yLkV2ZW50LkZPQ1VTSU5cbiAgICAgICAgY29uc3QgZXZlbnRPdXQgPSB0cmlnZ2VyID09PSBUcmlnZ2VyLkhPVkVSXG4gICAgICAgICAgPyB0aGlzLmNvbnN0cnVjdG9yLkV2ZW50Lk1PVVNFTEVBVkVcbiAgICAgICAgICA6IHRoaXMuY29uc3RydWN0b3IuRXZlbnQuRk9DVVNPVVRcblxuICAgICAgICAkKHRoaXMuZWxlbWVudClcbiAgICAgICAgICAub24oXG4gICAgICAgICAgICBldmVudEluLFxuICAgICAgICAgICAgdGhpcy5jb25maWcuc2VsZWN0b3IsXG4gICAgICAgICAgICAoZXZlbnQpID0+IHRoaXMuX2VudGVyKGV2ZW50KVxuICAgICAgICAgIClcbiAgICAgICAgICAub24oXG4gICAgICAgICAgICBldmVudE91dCxcbiAgICAgICAgICAgIHRoaXMuY29uZmlnLnNlbGVjdG9yLFxuICAgICAgICAgICAgKGV2ZW50KSA9PiB0aGlzLl9sZWF2ZShldmVudClcbiAgICAgICAgICApXG4gICAgICB9XG4gICAgfSlcblxuICAgICQodGhpcy5lbGVtZW50KS5jbG9zZXN0KCcubW9kYWwnKS5vbihcbiAgICAgICdoaWRlLmJzLm1vZGFsJyxcbiAgICAgICgpID0+IHtcbiAgICAgICAgaWYgKHRoaXMuZWxlbWVudCkge1xuICAgICAgICAgIHRoaXMuaGlkZSgpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICApXG5cbiAgICBpZiAodGhpcy5jb25maWcuc2VsZWN0b3IpIHtcbiAgICAgIHRoaXMuY29uZmlnID0ge1xuICAgICAgICAuLi50aGlzLmNvbmZpZyxcbiAgICAgICAgdHJpZ2dlcjogJ21hbnVhbCcsXG4gICAgICAgIHNlbGVjdG9yOiAnJ1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9maXhUaXRsZSgpXG4gICAgfVxuICB9XG5cbiAgX2ZpeFRpdGxlKCkge1xuICAgIGNvbnN0IHRpdGxlVHlwZSA9IHR5cGVvZiB0aGlzLmVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLW9yaWdpbmFsLXRpdGxlJylcblxuICAgIGlmICh0aGlzLmVsZW1lbnQuZ2V0QXR0cmlidXRlKCd0aXRsZScpIHx8IHRpdGxlVHlwZSAhPT0gJ3N0cmluZycpIHtcbiAgICAgIHRoaXMuZWxlbWVudC5zZXRBdHRyaWJ1dGUoXG4gICAgICAgICdkYXRhLW9yaWdpbmFsLXRpdGxlJyxcbiAgICAgICAgdGhpcy5lbGVtZW50LmdldEF0dHJpYnV0ZSgndGl0bGUnKSB8fCAnJ1xuICAgICAgKVxuXG4gICAgICB0aGlzLmVsZW1lbnQuc2V0QXR0cmlidXRlKCd0aXRsZScsICcnKVxuICAgIH1cbiAgfVxuXG4gIF9lbnRlcihldmVudCwgY29udGV4dCkge1xuICAgIGNvbnN0IGRhdGFLZXkgPSB0aGlzLmNvbnN0cnVjdG9yLkRBVEFfS0VZXG4gICAgY29udGV4dCA9IGNvbnRleHQgfHwgJChldmVudC5jdXJyZW50VGFyZ2V0KS5kYXRhKGRhdGFLZXkpXG5cbiAgICBpZiAoIWNvbnRleHQpIHtcbiAgICAgIGNvbnRleHQgPSBuZXcgdGhpcy5jb25zdHJ1Y3RvcihcbiAgICAgICAgZXZlbnQuY3VycmVudFRhcmdldCxcbiAgICAgICAgdGhpcy5fZ2V0RGVsZWdhdGVDb25maWcoKVxuICAgICAgKVxuICAgICAgJChldmVudC5jdXJyZW50VGFyZ2V0KS5kYXRhKGRhdGFLZXksIGNvbnRleHQpXG4gICAgfVxuXG4gICAgaWYgKGV2ZW50KSB7XG4gICAgICBjb250ZXh0Ll9hY3RpdmVUcmlnZ2VyW1xuICAgICAgICBldmVudC50eXBlID09PSAnZm9jdXNpbicgPyBUcmlnZ2VyLkZPQ1VTIDogVHJpZ2dlci5IT1ZFUlxuICAgICAgXSA9IHRydWVcbiAgICB9XG5cbiAgICBpZiAoJChjb250ZXh0LmdldFRpcEVsZW1lbnQoKSkuaGFzQ2xhc3MoQ2xhc3NOYW1lLlNIT1cpIHx8IGNvbnRleHQuX2hvdmVyU3RhdGUgPT09IEhvdmVyU3RhdGUuU0hPVykge1xuICAgICAgY29udGV4dC5faG92ZXJTdGF0ZSA9IEhvdmVyU3RhdGUuU0hPV1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY2xlYXJUaW1lb3V0KGNvbnRleHQuX3RpbWVvdXQpXG5cbiAgICBjb250ZXh0Ll9ob3ZlclN0YXRlID0gSG92ZXJTdGF0ZS5TSE9XXG5cbiAgICBpZiAoIWNvbnRleHQuY29uZmlnLmRlbGF5IHx8ICFjb250ZXh0LmNvbmZpZy5kZWxheS5zaG93KSB7XG4gICAgICBjb250ZXh0LnNob3coKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29udGV4dC5fdGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgaWYgKGNvbnRleHQuX2hvdmVyU3RhdGUgPT09IEhvdmVyU3RhdGUuU0hPVykge1xuICAgICAgICBjb250ZXh0LnNob3coKVxuICAgICAgfVxuICAgIH0sIGNvbnRleHQuY29uZmlnLmRlbGF5LnNob3cpXG4gIH1cblxuICBfbGVhdmUoZXZlbnQsIGNvbnRleHQpIHtcbiAgICBjb25zdCBkYXRhS2V5ID0gdGhpcy5jb25zdHJ1Y3Rvci5EQVRBX0tFWVxuICAgIGNvbnRleHQgPSBjb250ZXh0IHx8ICQoZXZlbnQuY3VycmVudFRhcmdldCkuZGF0YShkYXRhS2V5KVxuXG4gICAgaWYgKCFjb250ZXh0KSB7XG4gICAgICBjb250ZXh0ID0gbmV3IHRoaXMuY29uc3RydWN0b3IoXG4gICAgICAgIGV2ZW50LmN1cnJlbnRUYXJnZXQsXG4gICAgICAgIHRoaXMuX2dldERlbGVnYXRlQ29uZmlnKClcbiAgICAgIClcbiAgICAgICQoZXZlbnQuY3VycmVudFRhcmdldCkuZGF0YShkYXRhS2V5LCBjb250ZXh0KVxuICAgIH1cblxuICAgIGlmIChldmVudCkge1xuICAgICAgY29udGV4dC5fYWN0aXZlVHJpZ2dlcltcbiAgICAgICAgZXZlbnQudHlwZSA9PT0gJ2ZvY3Vzb3V0JyA/IFRyaWdnZXIuRk9DVVMgOiBUcmlnZ2VyLkhPVkVSXG4gICAgICBdID0gZmFsc2VcbiAgICB9XG5cbiAgICBpZiAoY29udGV4dC5faXNXaXRoQWN0aXZlVHJpZ2dlcigpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjbGVhclRpbWVvdXQoY29udGV4dC5fdGltZW91dClcblxuICAgIGNvbnRleHQuX2hvdmVyU3RhdGUgPSBIb3ZlclN0YXRlLk9VVFxuXG4gICAgaWYgKCFjb250ZXh0LmNvbmZpZy5kZWxheSB8fCAhY29udGV4dC5jb25maWcuZGVsYXkuaGlkZSkge1xuICAgICAgY29udGV4dC5oaWRlKClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnRleHQuX3RpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGlmIChjb250ZXh0Ll9ob3ZlclN0YXRlID09PSBIb3ZlclN0YXRlLk9VVCkge1xuICAgICAgICBjb250ZXh0LmhpZGUoKVxuICAgICAgfVxuICAgIH0sIGNvbnRleHQuY29uZmlnLmRlbGF5LmhpZGUpXG4gIH1cblxuICBfaXNXaXRoQWN0aXZlVHJpZ2dlcigpIHtcbiAgICBmb3IgKGNvbnN0IHRyaWdnZXIgaW4gdGhpcy5fYWN0aXZlVHJpZ2dlcikge1xuICAgICAgaWYgKHRoaXMuX2FjdGl2ZVRyaWdnZXJbdHJpZ2dlcl0pIHtcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIF9nZXRDb25maWcoY29uZmlnKSB7XG4gICAgY29uc3QgZGF0YUF0dHJpYnV0ZXMgPSAkKHRoaXMuZWxlbWVudCkuZGF0YSgpXG5cbiAgICBPYmplY3Qua2V5cyhkYXRhQXR0cmlidXRlcylcbiAgICAgIC5mb3JFYWNoKChkYXRhQXR0cikgPT4ge1xuICAgICAgICBpZiAoRElTQUxMT1dFRF9BVFRSSUJVVEVTLmluZGV4T2YoZGF0YUF0dHIpICE9PSAtMSkge1xuICAgICAgICAgIGRlbGV0ZSBkYXRhQXR0cmlidXRlc1tkYXRhQXR0cl1cbiAgICAgICAgfVxuICAgICAgfSlcblxuICAgIGNvbmZpZyA9IHtcbiAgICAgIC4uLnRoaXMuY29uc3RydWN0b3IuRGVmYXVsdCxcbiAgICAgIC4uLmRhdGFBdHRyaWJ1dGVzLFxuICAgICAgLi4udHlwZW9mIGNvbmZpZyA9PT0gJ29iamVjdCcgJiYgY29uZmlnID8gY29uZmlnIDoge31cbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIGNvbmZpZy5kZWxheSA9PT0gJ251bWJlcicpIHtcbiAgICAgIGNvbmZpZy5kZWxheSA9IHtcbiAgICAgICAgc2hvdzogY29uZmlnLmRlbGF5LFxuICAgICAgICBoaWRlOiBjb25maWcuZGVsYXlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIGNvbmZpZy50aXRsZSA9PT0gJ251bWJlcicpIHtcbiAgICAgIGNvbmZpZy50aXRsZSA9IGNvbmZpZy50aXRsZS50b1N0cmluZygpXG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBjb25maWcuY29udGVudCA9PT0gJ251bWJlcicpIHtcbiAgICAgIGNvbmZpZy5jb250ZW50ID0gY29uZmlnLmNvbnRlbnQudG9TdHJpbmcoKVxuICAgIH1cblxuICAgIFV0aWwudHlwZUNoZWNrQ29uZmlnKFxuICAgICAgTkFNRSxcbiAgICAgIGNvbmZpZyxcbiAgICAgIHRoaXMuY29uc3RydWN0b3IuRGVmYXVsdFR5cGVcbiAgICApXG5cbiAgICBpZiAoY29uZmlnLnNhbml0aXplKSB7XG4gICAgICBjb25maWcudGVtcGxhdGUgPSBzYW5pdGl6ZUh0bWwoY29uZmlnLnRlbXBsYXRlLCBjb25maWcud2hpdGVMaXN0LCBjb25maWcuc2FuaXRpemVGbilcbiAgICB9XG5cbiAgICByZXR1cm4gY29uZmlnXG4gIH1cblxuICBfZ2V0RGVsZWdhdGVDb25maWcoKSB7XG4gICAgY29uc3QgY29uZmlnID0ge31cblxuICAgIGlmICh0aGlzLmNvbmZpZykge1xuICAgICAgZm9yIChjb25zdCBrZXkgaW4gdGhpcy5jb25maWcpIHtcbiAgICAgICAgaWYgKHRoaXMuY29uc3RydWN0b3IuRGVmYXVsdFtrZXldICE9PSB0aGlzLmNvbmZpZ1trZXldKSB7XG4gICAgICAgICAgY29uZmlnW2tleV0gPSB0aGlzLmNvbmZpZ1trZXldXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gY29uZmlnXG4gIH1cblxuICBfY2xlYW5UaXBDbGFzcygpIHtcbiAgICBjb25zdCAkdGlwID0gJCh0aGlzLmdldFRpcEVsZW1lbnQoKSlcbiAgICBjb25zdCB0YWJDbGFzcyA9ICR0aXAuYXR0cignY2xhc3MnKS5tYXRjaChCU0NMU19QUkVGSVhfUkVHRVgpXG4gICAgaWYgKHRhYkNsYXNzICE9PSBudWxsICYmIHRhYkNsYXNzLmxlbmd0aCkge1xuICAgICAgJHRpcC5yZW1vdmVDbGFzcyh0YWJDbGFzcy5qb2luKCcnKSlcbiAgICB9XG4gIH1cblxuICBfaGFuZGxlUG9wcGVyUGxhY2VtZW50Q2hhbmdlKHBvcHBlckRhdGEpIHtcbiAgICBjb25zdCBwb3BwZXJJbnN0YW5jZSA9IHBvcHBlckRhdGEuaW5zdGFuY2VcbiAgICB0aGlzLnRpcCA9IHBvcHBlckluc3RhbmNlLnBvcHBlclxuICAgIHRoaXMuX2NsZWFuVGlwQ2xhc3MoKVxuICAgIHRoaXMuYWRkQXR0YWNobWVudENsYXNzKHRoaXMuX2dldEF0dGFjaG1lbnQocG9wcGVyRGF0YS5wbGFjZW1lbnQpKVxuICB9XG5cbiAgX2ZpeFRyYW5zaXRpb24oKSB7XG4gICAgY29uc3QgdGlwID0gdGhpcy5nZXRUaXBFbGVtZW50KClcbiAgICBjb25zdCBpbml0Q29uZmlnQW5pbWF0aW9uID0gdGhpcy5jb25maWcuYW5pbWF0aW9uXG5cbiAgICBpZiAodGlwLmdldEF0dHJpYnV0ZSgneC1wbGFjZW1lbnQnKSAhPT0gbnVsbCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgJCh0aXApLnJlbW92ZUNsYXNzKENsYXNzTmFtZS5GQURFKVxuICAgIHRoaXMuY29uZmlnLmFuaW1hdGlvbiA9IGZhbHNlXG4gICAgdGhpcy5oaWRlKClcbiAgICB0aGlzLnNob3coKVxuICAgIHRoaXMuY29uZmlnLmFuaW1hdGlvbiA9IGluaXRDb25maWdBbmltYXRpb25cbiAgfVxuXG4gIC8vIFN0YXRpY1xuXG4gIHN0YXRpYyBfalF1ZXJ5SW50ZXJmYWNlKGNvbmZpZykge1xuICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgbGV0IGRhdGEgPSAkKHRoaXMpLmRhdGEoREFUQV9LRVkpXG4gICAgICBjb25zdCBfY29uZmlnID0gdHlwZW9mIGNvbmZpZyA9PT0gJ29iamVjdCcgJiYgY29uZmlnXG5cbiAgICAgIGlmICghZGF0YSAmJiAvZGlzcG9zZXxoaWRlLy50ZXN0KGNvbmZpZykpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGlmICghZGF0YSkge1xuICAgICAgICBkYXRhID0gbmV3IFRvb2x0aXAodGhpcywgX2NvbmZpZylcbiAgICAgICAgJCh0aGlzKS5kYXRhKERBVEFfS0VZLCBkYXRhKVxuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGNvbmZpZyA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBkYXRhW2NvbmZpZ10gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgTm8gbWV0aG9kIG5hbWVkIFwiJHtjb25maWd9XCJgKVxuICAgICAgICB9XG4gICAgICAgIGRhdGFbY29uZmlnXSgpXG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogalF1ZXJ5XG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG4kLmZuW05BTUVdID0gVG9vbHRpcC5falF1ZXJ5SW50ZXJmYWNlXG4kLmZuW05BTUVdLkNvbnN0cnVjdG9yID0gVG9vbHRpcFxuJC5mbltOQU1FXS5ub0NvbmZsaWN0ID0gKCkgPT4ge1xuICAkLmZuW05BTUVdID0gSlFVRVJZX05PX0NPTkZMSUNUXG4gIHJldHVybiBUb29sdGlwLl9qUXVlcnlJbnRlcmZhY2Vcbn1cblxuZXhwb3J0IGRlZmF1bHQgVG9vbHRpcFxuIiwiLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQm9vdHN0cmFwICh2NC4zLjEpOiBwb3BvdmVyLmpzXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21hc3Rlci9MSUNFTlNFKVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknXG5pbXBvcnQgVG9vbHRpcCBmcm9tICcuL3Rvb2x0aXAnXG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBDb25zdGFudHNcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmNvbnN0IE5BTUUgICAgICAgICAgICAgICAgPSAncG9wb3ZlcidcbmNvbnN0IFZFUlNJT04gICAgICAgICAgICAgPSAnNC4zLjEnXG5jb25zdCBEQVRBX0tFWSAgICAgICAgICAgID0gJ2JzLnBvcG92ZXInXG5jb25zdCBFVkVOVF9LRVkgICAgICAgICAgID0gYC4ke0RBVEFfS0VZfWBcbmNvbnN0IEpRVUVSWV9OT19DT05GTElDVCAgPSAkLmZuW05BTUVdXG5jb25zdCBDTEFTU19QUkVGSVggICAgICAgID0gJ2JzLXBvcG92ZXInXG5jb25zdCBCU0NMU19QUkVGSVhfUkVHRVggID0gbmV3IFJlZ0V4cChgKF58XFxcXHMpJHtDTEFTU19QUkVGSVh9XFxcXFMrYCwgJ2cnKVxuXG5jb25zdCBEZWZhdWx0ID0ge1xuICAuLi5Ub29sdGlwLkRlZmF1bHQsXG4gIHBsYWNlbWVudCA6ICdyaWdodCcsXG4gIHRyaWdnZXIgICA6ICdjbGljaycsXG4gIGNvbnRlbnQgICA6ICcnLFxuICB0ZW1wbGF0ZSAgOiAnPGRpdiBjbGFzcz1cInBvcG92ZXJcIiByb2xlPVwidG9vbHRpcFwiPicgK1xuICAgICAgICAgICAgICAnPGRpdiBjbGFzcz1cImFycm93XCI+PC9kaXY+JyArXG4gICAgICAgICAgICAgICc8aDMgY2xhc3M9XCJwb3BvdmVyLWhlYWRlclwiPjwvaDM+JyArXG4gICAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwicG9wb3Zlci1ib2R5XCI+PC9kaXY+PC9kaXY+J1xufVxuXG5jb25zdCBEZWZhdWx0VHlwZSA9IHtcbiAgLi4uVG9vbHRpcC5EZWZhdWx0VHlwZSxcbiAgY29udGVudCA6ICcoc3RyaW5nfGVsZW1lbnR8ZnVuY3Rpb24pJ1xufVxuXG5jb25zdCBDbGFzc05hbWUgPSB7XG4gIEZBREUgOiAnZmFkZScsXG4gIFNIT1cgOiAnc2hvdydcbn1cblxuY29uc3QgU2VsZWN0b3IgPSB7XG4gIFRJVExFICAgOiAnLnBvcG92ZXItaGVhZGVyJyxcbiAgQ09OVEVOVCA6ICcucG9wb3Zlci1ib2R5J1xufVxuXG5jb25zdCBFdmVudCA9IHtcbiAgSElERSAgICAgICA6IGBoaWRlJHtFVkVOVF9LRVl9YCxcbiAgSElEREVOICAgICA6IGBoaWRkZW4ke0VWRU5UX0tFWX1gLFxuICBTSE9XICAgICAgIDogYHNob3cke0VWRU5UX0tFWX1gLFxuICBTSE9XTiAgICAgIDogYHNob3duJHtFVkVOVF9LRVl9YCxcbiAgSU5TRVJURUQgICA6IGBpbnNlcnRlZCR7RVZFTlRfS0VZfWAsXG4gIENMSUNLICAgICAgOiBgY2xpY2ske0VWRU5UX0tFWX1gLFxuICBGT0NVU0lOICAgIDogYGZvY3VzaW4ke0VWRU5UX0tFWX1gLFxuICBGT0NVU09VVCAgIDogYGZvY3Vzb3V0JHtFVkVOVF9LRVl9YCxcbiAgTU9VU0VFTlRFUiA6IGBtb3VzZWVudGVyJHtFVkVOVF9LRVl9YCxcbiAgTU9VU0VMRUFWRSA6IGBtb3VzZWxlYXZlJHtFVkVOVF9LRVl9YFxufVxuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQ2xhc3MgRGVmaW5pdGlvblxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuY2xhc3MgUG9wb3ZlciBleHRlbmRzIFRvb2x0aXAge1xuICAvLyBHZXR0ZXJzXG5cbiAgc3RhdGljIGdldCBWRVJTSU9OKCkge1xuICAgIHJldHVybiBWRVJTSU9OXG4gIH1cblxuICBzdGF0aWMgZ2V0IERlZmF1bHQoKSB7XG4gICAgcmV0dXJuIERlZmF1bHRcbiAgfVxuXG4gIHN0YXRpYyBnZXQgTkFNRSgpIHtcbiAgICByZXR1cm4gTkFNRVxuICB9XG5cbiAgc3RhdGljIGdldCBEQVRBX0tFWSgpIHtcbiAgICByZXR1cm4gREFUQV9LRVlcbiAgfVxuXG4gIHN0YXRpYyBnZXQgRXZlbnQoKSB7XG4gICAgcmV0dXJuIEV2ZW50XG4gIH1cblxuICBzdGF0aWMgZ2V0IEVWRU5UX0tFWSgpIHtcbiAgICByZXR1cm4gRVZFTlRfS0VZXG4gIH1cblxuICBzdGF0aWMgZ2V0IERlZmF1bHRUeXBlKCkge1xuICAgIHJldHVybiBEZWZhdWx0VHlwZVxuICB9XG5cbiAgLy8gT3ZlcnJpZGVzXG5cbiAgaXNXaXRoQ29udGVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRUaXRsZSgpIHx8IHRoaXMuX2dldENvbnRlbnQoKVxuICB9XG5cbiAgYWRkQXR0YWNobWVudENsYXNzKGF0dGFjaG1lbnQpIHtcbiAgICAkKHRoaXMuZ2V0VGlwRWxlbWVudCgpKS5hZGRDbGFzcyhgJHtDTEFTU19QUkVGSVh9LSR7YXR0YWNobWVudH1gKVxuICB9XG5cbiAgZ2V0VGlwRWxlbWVudCgpIHtcbiAgICB0aGlzLnRpcCA9IHRoaXMudGlwIHx8ICQodGhpcy5jb25maWcudGVtcGxhdGUpWzBdXG4gICAgcmV0dXJuIHRoaXMudGlwXG4gIH1cblxuICBzZXRDb250ZW50KCkge1xuICAgIGNvbnN0ICR0aXAgPSAkKHRoaXMuZ2V0VGlwRWxlbWVudCgpKVxuXG4gICAgLy8gV2UgdXNlIGFwcGVuZCBmb3IgaHRtbCBvYmplY3RzIHRvIG1haW50YWluIGpzIGV2ZW50c1xuICAgIHRoaXMuc2V0RWxlbWVudENvbnRlbnQoJHRpcC5maW5kKFNlbGVjdG9yLlRJVExFKSwgdGhpcy5nZXRUaXRsZSgpKVxuICAgIGxldCBjb250ZW50ID0gdGhpcy5fZ2V0Q29udGVudCgpXG4gICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjb250ZW50ID0gY29udGVudC5jYWxsKHRoaXMuZWxlbWVudClcbiAgICB9XG4gICAgdGhpcy5zZXRFbGVtZW50Q29udGVudCgkdGlwLmZpbmQoU2VsZWN0b3IuQ09OVEVOVCksIGNvbnRlbnQpXG5cbiAgICAkdGlwLnJlbW92ZUNsYXNzKGAke0NsYXNzTmFtZS5GQURFfSAke0NsYXNzTmFtZS5TSE9XfWApXG4gIH1cblxuICAvLyBQcml2YXRlXG5cbiAgX2dldENvbnRlbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtY29udGVudCcpIHx8XG4gICAgICB0aGlzLmNvbmZpZy5jb250ZW50XG4gIH1cblxuICBfY2xlYW5UaXBDbGFzcygpIHtcbiAgICBjb25zdCAkdGlwID0gJCh0aGlzLmdldFRpcEVsZW1lbnQoKSlcbiAgICBjb25zdCB0YWJDbGFzcyA9ICR0aXAuYXR0cignY2xhc3MnKS5tYXRjaChCU0NMU19QUkVGSVhfUkVHRVgpXG4gICAgaWYgKHRhYkNsYXNzICE9PSBudWxsICYmIHRhYkNsYXNzLmxlbmd0aCA+IDApIHtcbiAgICAgICR0aXAucmVtb3ZlQ2xhc3ModGFiQ2xhc3Muam9pbignJykpXG4gICAgfVxuICB9XG5cbiAgLy8gU3RhdGljXG5cbiAgc3RhdGljIF9qUXVlcnlJbnRlcmZhY2UoY29uZmlnKSB7XG4gICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICBsZXQgZGF0YSA9ICQodGhpcykuZGF0YShEQVRBX0tFWSlcbiAgICAgIGNvbnN0IF9jb25maWcgPSB0eXBlb2YgY29uZmlnID09PSAnb2JqZWN0JyA/IGNvbmZpZyA6IG51bGxcblxuICAgICAgaWYgKCFkYXRhICYmIC9kaXNwb3NlfGhpZGUvLnRlc3QoY29uZmlnKSkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgaWYgKCFkYXRhKSB7XG4gICAgICAgIGRhdGEgPSBuZXcgUG9wb3Zlcih0aGlzLCBfY29uZmlnKVxuICAgICAgICAkKHRoaXMpLmRhdGEoREFUQV9LRVksIGRhdGEpXG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgY29uZmlnID09PSAnc3RyaW5nJykge1xuICAgICAgICBpZiAodHlwZW9mIGRhdGFbY29uZmlnXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBObyBtZXRob2QgbmFtZWQgXCIke2NvbmZpZ31cImApXG4gICAgICAgIH1cbiAgICAgICAgZGF0YVtjb25maWddKClcbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBqUXVlcnlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbiQuZm5bTkFNRV0gPSBQb3BvdmVyLl9qUXVlcnlJbnRlcmZhY2VcbiQuZm5bTkFNRV0uQ29uc3RydWN0b3IgPSBQb3BvdmVyXG4kLmZuW05BTUVdLm5vQ29uZmxpY3QgPSAoKSA9PiB7XG4gICQuZm5bTkFNRV0gPSBKUVVFUllfTk9fQ09ORkxJQ1RcbiAgcmV0dXJuIFBvcG92ZXIuX2pRdWVyeUludGVyZmFjZVxufVxuXG5leHBvcnQgZGVmYXVsdCBQb3BvdmVyXG4iLCIvKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBCb290c3RyYXAgKHY0LjMuMSk6IHNjcm9sbHNweS5qc1xuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYXN0ZXIvTElDRU5TRSlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5J1xuaW1wb3J0IFV0aWwgZnJvbSAnLi91dGlsJ1xuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQ29uc3RhbnRzXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5jb25zdCBOQU1FICAgICAgICAgICAgICAgPSAnc2Nyb2xsc3B5J1xuY29uc3QgVkVSU0lPTiAgICAgICAgICAgID0gJzQuMy4xJ1xuY29uc3QgREFUQV9LRVkgICAgICAgICAgID0gJ2JzLnNjcm9sbHNweSdcbmNvbnN0IEVWRU5UX0tFWSAgICAgICAgICA9IGAuJHtEQVRBX0tFWX1gXG5jb25zdCBEQVRBX0FQSV9LRVkgICAgICAgPSAnLmRhdGEtYXBpJ1xuY29uc3QgSlFVRVJZX05PX0NPTkZMSUNUID0gJC5mbltOQU1FXVxuXG5jb25zdCBEZWZhdWx0ID0ge1xuICBvZmZzZXQgOiAxMCxcbiAgbWV0aG9kIDogJ2F1dG8nLFxuICB0YXJnZXQgOiAnJ1xufVxuXG5jb25zdCBEZWZhdWx0VHlwZSA9IHtcbiAgb2Zmc2V0IDogJ251bWJlcicsXG4gIG1ldGhvZCA6ICdzdHJpbmcnLFxuICB0YXJnZXQgOiAnKHN0cmluZ3xlbGVtZW50KSdcbn1cblxuY29uc3QgRXZlbnQgPSB7XG4gIEFDVElWQVRFICAgICAgOiBgYWN0aXZhdGUke0VWRU5UX0tFWX1gLFxuICBTQ1JPTEwgICAgICAgIDogYHNjcm9sbCR7RVZFTlRfS0VZfWAsXG4gIExPQURfREFUQV9BUEkgOiBgbG9hZCR7RVZFTlRfS0VZfSR7REFUQV9BUElfS0VZfWBcbn1cblxuY29uc3QgQ2xhc3NOYW1lID0ge1xuICBEUk9QRE9XTl9JVEVNIDogJ2Ryb3Bkb3duLWl0ZW0nLFxuICBEUk9QRE9XTl9NRU5VIDogJ2Ryb3Bkb3duLW1lbnUnLFxuICBBQ1RJVkUgICAgICAgIDogJ2FjdGl2ZSdcbn1cblxuY29uc3QgU2VsZWN0b3IgPSB7XG4gIERBVEFfU1BZICAgICAgICA6ICdbZGF0YS1zcHk9XCJzY3JvbGxcIl0nLFxuICBBQ1RJVkUgICAgICAgICAgOiAnLmFjdGl2ZScsXG4gIE5BVl9MSVNUX0dST1VQICA6ICcubmF2LCAubGlzdC1ncm91cCcsXG4gIE5BVl9MSU5LUyAgICAgICA6ICcubmF2LWxpbmsnLFxuICBOQVZfSVRFTVMgICAgICAgOiAnLm5hdi1pdGVtJyxcbiAgTElTVF9JVEVNUyAgICAgIDogJy5saXN0LWdyb3VwLWl0ZW0nLFxuICBEUk9QRE9XTiAgICAgICAgOiAnLmRyb3Bkb3duJyxcbiAgRFJPUERPV05fSVRFTVMgIDogJy5kcm9wZG93bi1pdGVtJyxcbiAgRFJPUERPV05fVE9HR0xFIDogJy5kcm9wZG93bi10b2dnbGUnXG59XG5cbmNvbnN0IE9mZnNldE1ldGhvZCA9IHtcbiAgT0ZGU0VUICAgOiAnb2Zmc2V0JyxcbiAgUE9TSVRJT04gOiAncG9zaXRpb24nXG59XG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBDbGFzcyBEZWZpbml0aW9uXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5jbGFzcyBTY3JvbGxTcHkge1xuICBjb25zdHJ1Y3RvcihlbGVtZW50LCBjb25maWcpIHtcbiAgICB0aGlzLl9lbGVtZW50ICAgICAgID0gZWxlbWVudFxuICAgIHRoaXMuX3Njcm9sbEVsZW1lbnQgPSBlbGVtZW50LnRhZ05hbWUgPT09ICdCT0RZJyA/IHdpbmRvdyA6IGVsZW1lbnRcbiAgICB0aGlzLl9jb25maWcgICAgICAgID0gdGhpcy5fZ2V0Q29uZmlnKGNvbmZpZylcbiAgICB0aGlzLl9zZWxlY3RvciAgICAgID0gYCR7dGhpcy5fY29uZmlnLnRhcmdldH0gJHtTZWxlY3Rvci5OQVZfTElOS1N9LGAgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICBgJHt0aGlzLl9jb25maWcudGFyZ2V0fSAke1NlbGVjdG9yLkxJU1RfSVRFTVN9LGAgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICBgJHt0aGlzLl9jb25maWcudGFyZ2V0fSAke1NlbGVjdG9yLkRST1BET1dOX0lURU1TfWBcbiAgICB0aGlzLl9vZmZzZXRzICAgICAgID0gW11cbiAgICB0aGlzLl90YXJnZXRzICAgICAgID0gW11cbiAgICB0aGlzLl9hY3RpdmVUYXJnZXQgID0gbnVsbFxuICAgIHRoaXMuX3Njcm9sbEhlaWdodCAgPSAwXG5cbiAgICAkKHRoaXMuX3Njcm9sbEVsZW1lbnQpLm9uKEV2ZW50LlNDUk9MTCwgKGV2ZW50KSA9PiB0aGlzLl9wcm9jZXNzKGV2ZW50KSlcblxuICAgIHRoaXMucmVmcmVzaCgpXG4gICAgdGhpcy5fcHJvY2VzcygpXG4gIH1cblxuICAvLyBHZXR0ZXJzXG5cbiAgc3RhdGljIGdldCBWRVJTSU9OKCkge1xuICAgIHJldHVybiBWRVJTSU9OXG4gIH1cblxuICBzdGF0aWMgZ2V0IERlZmF1bHQoKSB7XG4gICAgcmV0dXJuIERlZmF1bHRcbiAgfVxuXG4gIC8vIFB1YmxpY1xuXG4gIHJlZnJlc2goKSB7XG4gICAgY29uc3QgYXV0b01ldGhvZCA9IHRoaXMuX3Njcm9sbEVsZW1lbnQgPT09IHRoaXMuX3Njcm9sbEVsZW1lbnQud2luZG93XG4gICAgICA/IE9mZnNldE1ldGhvZC5PRkZTRVQgOiBPZmZzZXRNZXRob2QuUE9TSVRJT05cblxuICAgIGNvbnN0IG9mZnNldE1ldGhvZCA9IHRoaXMuX2NvbmZpZy5tZXRob2QgPT09ICdhdXRvJ1xuICAgICAgPyBhdXRvTWV0aG9kIDogdGhpcy5fY29uZmlnLm1ldGhvZFxuXG4gICAgY29uc3Qgb2Zmc2V0QmFzZSA9IG9mZnNldE1ldGhvZCA9PT0gT2Zmc2V0TWV0aG9kLlBPU0lUSU9OXG4gICAgICA/IHRoaXMuX2dldFNjcm9sbFRvcCgpIDogMFxuXG4gICAgdGhpcy5fb2Zmc2V0cyA9IFtdXG4gICAgdGhpcy5fdGFyZ2V0cyA9IFtdXG5cbiAgICB0aGlzLl9zY3JvbGxIZWlnaHQgPSB0aGlzLl9nZXRTY3JvbGxIZWlnaHQoKVxuXG4gICAgY29uc3QgdGFyZ2V0cyA9IFtdLnNsaWNlLmNhbGwoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCh0aGlzLl9zZWxlY3RvcikpXG5cbiAgICB0YXJnZXRzXG4gICAgICAubWFwKChlbGVtZW50KSA9PiB7XG4gICAgICAgIGxldCB0YXJnZXRcbiAgICAgICAgY29uc3QgdGFyZ2V0U2VsZWN0b3IgPSBVdGlsLmdldFNlbGVjdG9yRnJvbUVsZW1lbnQoZWxlbWVudClcblxuICAgICAgICBpZiAodGFyZ2V0U2VsZWN0b3IpIHtcbiAgICAgICAgICB0YXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldFNlbGVjdG9yKVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRhcmdldCkge1xuICAgICAgICAgIGNvbnN0IHRhcmdldEJDUiA9IHRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgICAgICAgIGlmICh0YXJnZXRCQ1Iud2lkdGggfHwgdGFyZ2V0QkNSLmhlaWdodCkge1xuICAgICAgICAgICAgLy8gVE9ETyAoZmF0KTogcmVtb3ZlIHNrZXRjaCByZWxpYW5jZSBvbiBqUXVlcnkgcG9zaXRpb24vb2Zmc2V0XG4gICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAkKHRhcmdldClbb2Zmc2V0TWV0aG9kXSgpLnRvcCArIG9mZnNldEJhc2UsXG4gICAgICAgICAgICAgIHRhcmdldFNlbGVjdG9yXG4gICAgICAgICAgICBdXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsXG4gICAgICB9KVxuICAgICAgLmZpbHRlcigoaXRlbSkgPT4gaXRlbSlcbiAgICAgIC5zb3J0KChhLCBiKSA9PiBhWzBdIC0gYlswXSlcbiAgICAgIC5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgIHRoaXMuX29mZnNldHMucHVzaChpdGVtWzBdKVxuICAgICAgICB0aGlzLl90YXJnZXRzLnB1c2goaXRlbVsxXSlcbiAgICAgIH0pXG4gIH1cblxuICBkaXNwb3NlKCkge1xuICAgICQucmVtb3ZlRGF0YSh0aGlzLl9lbGVtZW50LCBEQVRBX0tFWSlcbiAgICAkKHRoaXMuX3Njcm9sbEVsZW1lbnQpLm9mZihFVkVOVF9LRVkpXG5cbiAgICB0aGlzLl9lbGVtZW50ICAgICAgID0gbnVsbFxuICAgIHRoaXMuX3Njcm9sbEVsZW1lbnQgPSBudWxsXG4gICAgdGhpcy5fY29uZmlnICAgICAgICA9IG51bGxcbiAgICB0aGlzLl9zZWxlY3RvciAgICAgID0gbnVsbFxuICAgIHRoaXMuX29mZnNldHMgICAgICAgPSBudWxsXG4gICAgdGhpcy5fdGFyZ2V0cyAgICAgICA9IG51bGxcbiAgICB0aGlzLl9hY3RpdmVUYXJnZXQgID0gbnVsbFxuICAgIHRoaXMuX3Njcm9sbEhlaWdodCAgPSBudWxsXG4gIH1cblxuICAvLyBQcml2YXRlXG5cbiAgX2dldENvbmZpZyhjb25maWcpIHtcbiAgICBjb25maWcgPSB7XG4gICAgICAuLi5EZWZhdWx0LFxuICAgICAgLi4udHlwZW9mIGNvbmZpZyA9PT0gJ29iamVjdCcgJiYgY29uZmlnID8gY29uZmlnIDoge31cbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIGNvbmZpZy50YXJnZXQgIT09ICdzdHJpbmcnKSB7XG4gICAgICBsZXQgaWQgPSAkKGNvbmZpZy50YXJnZXQpLmF0dHIoJ2lkJylcbiAgICAgIGlmICghaWQpIHtcbiAgICAgICAgaWQgPSBVdGlsLmdldFVJRChOQU1FKVxuICAgICAgICAkKGNvbmZpZy50YXJnZXQpLmF0dHIoJ2lkJywgaWQpXG4gICAgICB9XG4gICAgICBjb25maWcudGFyZ2V0ID0gYCMke2lkfWBcbiAgICB9XG5cbiAgICBVdGlsLnR5cGVDaGVja0NvbmZpZyhOQU1FLCBjb25maWcsIERlZmF1bHRUeXBlKVxuXG4gICAgcmV0dXJuIGNvbmZpZ1xuICB9XG5cbiAgX2dldFNjcm9sbFRvcCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc2Nyb2xsRWxlbWVudCA9PT0gd2luZG93XG4gICAgICA/IHRoaXMuX3Njcm9sbEVsZW1lbnQucGFnZVlPZmZzZXQgOiB0aGlzLl9zY3JvbGxFbGVtZW50LnNjcm9sbFRvcFxuICB9XG5cbiAgX2dldFNjcm9sbEhlaWdodCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc2Nyb2xsRWxlbWVudC5zY3JvbGxIZWlnaHQgfHwgTWF0aC5tYXgoXG4gICAgICBkb2N1bWVudC5ib2R5LnNjcm9sbEhlaWdodCxcbiAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxIZWlnaHRcbiAgICApXG4gIH1cblxuICBfZ2V0T2Zmc2V0SGVpZ2h0KCkge1xuICAgIHJldHVybiB0aGlzLl9zY3JvbGxFbGVtZW50ID09PSB3aW5kb3dcbiAgICAgID8gd2luZG93LmlubmVySGVpZ2h0IDogdGhpcy5fc2Nyb2xsRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHRcbiAgfVxuXG4gIF9wcm9jZXNzKCkge1xuICAgIGNvbnN0IHNjcm9sbFRvcCAgICA9IHRoaXMuX2dldFNjcm9sbFRvcCgpICsgdGhpcy5fY29uZmlnLm9mZnNldFxuICAgIGNvbnN0IHNjcm9sbEhlaWdodCA9IHRoaXMuX2dldFNjcm9sbEhlaWdodCgpXG4gICAgY29uc3QgbWF4U2Nyb2xsICAgID0gdGhpcy5fY29uZmlnLm9mZnNldCArXG4gICAgICBzY3JvbGxIZWlnaHQgLVxuICAgICAgdGhpcy5fZ2V0T2Zmc2V0SGVpZ2h0KClcblxuICAgIGlmICh0aGlzLl9zY3JvbGxIZWlnaHQgIT09IHNjcm9sbEhlaWdodCkge1xuICAgICAgdGhpcy5yZWZyZXNoKClcbiAgICB9XG5cbiAgICBpZiAoc2Nyb2xsVG9wID49IG1heFNjcm9sbCkge1xuICAgICAgY29uc3QgdGFyZ2V0ID0gdGhpcy5fdGFyZ2V0c1t0aGlzLl90YXJnZXRzLmxlbmd0aCAtIDFdXG5cbiAgICAgIGlmICh0aGlzLl9hY3RpdmVUYXJnZXQgIT09IHRhcmdldCkge1xuICAgICAgICB0aGlzLl9hY3RpdmF0ZSh0YXJnZXQpXG4gICAgICB9XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAodGhpcy5fYWN0aXZlVGFyZ2V0ICYmIHNjcm9sbFRvcCA8IHRoaXMuX29mZnNldHNbMF0gJiYgdGhpcy5fb2Zmc2V0c1swXSA+IDApIHtcbiAgICAgIHRoaXMuX2FjdGl2ZVRhcmdldCA9IG51bGxcbiAgICAgIHRoaXMuX2NsZWFyKClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IG9mZnNldExlbmd0aCA9IHRoaXMuX29mZnNldHMubGVuZ3RoXG4gICAgZm9yIChsZXQgaSA9IG9mZnNldExlbmd0aDsgaS0tOykge1xuICAgICAgY29uc3QgaXNBY3RpdmVUYXJnZXQgPSB0aGlzLl9hY3RpdmVUYXJnZXQgIT09IHRoaXMuX3RhcmdldHNbaV0gJiZcbiAgICAgICAgICBzY3JvbGxUb3AgPj0gdGhpcy5fb2Zmc2V0c1tpXSAmJlxuICAgICAgICAgICh0eXBlb2YgdGhpcy5fb2Zmc2V0c1tpICsgMV0gPT09ICd1bmRlZmluZWQnIHx8XG4gICAgICAgICAgICAgIHNjcm9sbFRvcCA8IHRoaXMuX29mZnNldHNbaSArIDFdKVxuXG4gICAgICBpZiAoaXNBY3RpdmVUYXJnZXQpIHtcbiAgICAgICAgdGhpcy5fYWN0aXZhdGUodGhpcy5fdGFyZ2V0c1tpXSlcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBfYWN0aXZhdGUodGFyZ2V0KSB7XG4gICAgdGhpcy5fYWN0aXZlVGFyZ2V0ID0gdGFyZ2V0XG5cbiAgICB0aGlzLl9jbGVhcigpXG5cbiAgICBjb25zdCBxdWVyaWVzID0gdGhpcy5fc2VsZWN0b3JcbiAgICAgIC5zcGxpdCgnLCcpXG4gICAgICAubWFwKChzZWxlY3RvcikgPT4gYCR7c2VsZWN0b3J9W2RhdGEtdGFyZ2V0PVwiJHt0YXJnZXR9XCJdLCR7c2VsZWN0b3J9W2hyZWY9XCIke3RhcmdldH1cIl1gKVxuXG4gICAgY29uc3QgJGxpbmsgPSAkKFtdLnNsaWNlLmNhbGwoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChxdWVyaWVzLmpvaW4oJywnKSkpKVxuXG4gICAgaWYgKCRsaW5rLmhhc0NsYXNzKENsYXNzTmFtZS5EUk9QRE9XTl9JVEVNKSkge1xuICAgICAgJGxpbmsuY2xvc2VzdChTZWxlY3Rvci5EUk9QRE9XTikuZmluZChTZWxlY3Rvci5EUk9QRE9XTl9UT0dHTEUpLmFkZENsYXNzKENsYXNzTmFtZS5BQ1RJVkUpXG4gICAgICAkbGluay5hZGRDbGFzcyhDbGFzc05hbWUuQUNUSVZFKVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBTZXQgdHJpZ2dlcmVkIGxpbmsgYXMgYWN0aXZlXG4gICAgICAkbGluay5hZGRDbGFzcyhDbGFzc05hbWUuQUNUSVZFKVxuICAgICAgLy8gU2V0IHRyaWdnZXJlZCBsaW5rcyBwYXJlbnRzIGFzIGFjdGl2ZVxuICAgICAgLy8gV2l0aCBib3RoIDx1bD4gYW5kIDxuYXY+IG1hcmt1cCBhIHBhcmVudCBpcyB0aGUgcHJldmlvdXMgc2libGluZyBvZiBhbnkgbmF2IGFuY2VzdG9yXG4gICAgICAkbGluay5wYXJlbnRzKFNlbGVjdG9yLk5BVl9MSVNUX0dST1VQKS5wcmV2KGAke1NlbGVjdG9yLk5BVl9MSU5LU30sICR7U2VsZWN0b3IuTElTVF9JVEVNU31gKS5hZGRDbGFzcyhDbGFzc05hbWUuQUNUSVZFKVxuICAgICAgLy8gSGFuZGxlIHNwZWNpYWwgY2FzZSB3aGVuIC5uYXYtbGluayBpcyBpbnNpZGUgLm5hdi1pdGVtXG4gICAgICAkbGluay5wYXJlbnRzKFNlbGVjdG9yLk5BVl9MSVNUX0dST1VQKS5wcmV2KFNlbGVjdG9yLk5BVl9JVEVNUykuY2hpbGRyZW4oU2VsZWN0b3IuTkFWX0xJTktTKS5hZGRDbGFzcyhDbGFzc05hbWUuQUNUSVZFKVxuICAgIH1cblxuICAgICQodGhpcy5fc2Nyb2xsRWxlbWVudCkudHJpZ2dlcihFdmVudC5BQ1RJVkFURSwge1xuICAgICAgcmVsYXRlZFRhcmdldDogdGFyZ2V0XG4gICAgfSlcbiAgfVxuXG4gIF9jbGVhcigpIHtcbiAgICBbXS5zbGljZS5jYWxsKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwodGhpcy5fc2VsZWN0b3IpKVxuICAgICAgLmZpbHRlcigobm9kZSkgPT4gbm9kZS5jbGFzc0xpc3QuY29udGFpbnMoQ2xhc3NOYW1lLkFDVElWRSkpXG4gICAgICAuZm9yRWFjaCgobm9kZSkgPT4gbm9kZS5jbGFzc0xpc3QucmVtb3ZlKENsYXNzTmFtZS5BQ1RJVkUpKVxuICB9XG5cbiAgLy8gU3RhdGljXG5cbiAgc3RhdGljIF9qUXVlcnlJbnRlcmZhY2UoY29uZmlnKSB7XG4gICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICBsZXQgZGF0YSA9ICQodGhpcykuZGF0YShEQVRBX0tFWSlcbiAgICAgIGNvbnN0IF9jb25maWcgPSB0eXBlb2YgY29uZmlnID09PSAnb2JqZWN0JyAmJiBjb25maWdcblxuICAgICAgaWYgKCFkYXRhKSB7XG4gICAgICAgIGRhdGEgPSBuZXcgU2Nyb2xsU3B5KHRoaXMsIF9jb25maWcpXG4gICAgICAgICQodGhpcykuZGF0YShEQVRBX0tFWSwgZGF0YSlcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBjb25maWcgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGlmICh0eXBlb2YgZGF0YVtjb25maWddID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYE5vIG1ldGhvZCBuYW1lZCBcIiR7Y29uZmlnfVwiYClcbiAgICAgICAgfVxuICAgICAgICBkYXRhW2NvbmZpZ10oKVxuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIERhdGEgQXBpIGltcGxlbWVudGF0aW9uXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG4kKHdpbmRvdykub24oRXZlbnQuTE9BRF9EQVRBX0FQSSwgKCkgPT4ge1xuICBjb25zdCBzY3JvbGxTcHlzID0gW10uc2xpY2UuY2FsbChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFNlbGVjdG9yLkRBVEFfU1BZKSlcbiAgY29uc3Qgc2Nyb2xsU3B5c0xlbmd0aCA9IHNjcm9sbFNweXMubGVuZ3RoXG5cbiAgZm9yIChsZXQgaSA9IHNjcm9sbFNweXNMZW5ndGg7IGktLTspIHtcbiAgICBjb25zdCAkc3B5ID0gJChzY3JvbGxTcHlzW2ldKVxuICAgIFNjcm9sbFNweS5falF1ZXJ5SW50ZXJmYWNlLmNhbGwoJHNweSwgJHNweS5kYXRhKCkpXG4gIH1cbn0pXG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBqUXVlcnlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbiQuZm5bTkFNRV0gPSBTY3JvbGxTcHkuX2pRdWVyeUludGVyZmFjZVxuJC5mbltOQU1FXS5Db25zdHJ1Y3RvciA9IFNjcm9sbFNweVxuJC5mbltOQU1FXS5ub0NvbmZsaWN0ID0gKCkgPT4ge1xuICAkLmZuW05BTUVdID0gSlFVRVJZX05PX0NPTkZMSUNUXG4gIHJldHVybiBTY3JvbGxTcHkuX2pRdWVyeUludGVyZmFjZVxufVxuXG5leHBvcnQgZGVmYXVsdCBTY3JvbGxTcHlcbiIsIi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEJvb3RzdHJhcCAodjQuMy4xKTogdGFiLmpzXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21hc3Rlci9MSUNFTlNFKVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknXG5pbXBvcnQgVXRpbCBmcm9tICcuL3V0aWwnXG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBDb25zdGFudHNcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmNvbnN0IE5BTUUgICAgICAgICAgICAgICA9ICd0YWInXG5jb25zdCBWRVJTSU9OICAgICAgICAgICAgPSAnNC4zLjEnXG5jb25zdCBEQVRBX0tFWSAgICAgICAgICAgPSAnYnMudGFiJ1xuY29uc3QgRVZFTlRfS0VZICAgICAgICAgID0gYC4ke0RBVEFfS0VZfWBcbmNvbnN0IERBVEFfQVBJX0tFWSAgICAgICA9ICcuZGF0YS1hcGknXG5jb25zdCBKUVVFUllfTk9fQ09ORkxJQ1QgPSAkLmZuW05BTUVdXG5cbmNvbnN0IEV2ZW50ID0ge1xuICBISURFICAgICAgICAgICA6IGBoaWRlJHtFVkVOVF9LRVl9YCxcbiAgSElEREVOICAgICAgICAgOiBgaGlkZGVuJHtFVkVOVF9LRVl9YCxcbiAgU0hPVyAgICAgICAgICAgOiBgc2hvdyR7RVZFTlRfS0VZfWAsXG4gIFNIT1dOICAgICAgICAgIDogYHNob3duJHtFVkVOVF9LRVl9YCxcbiAgQ0xJQ0tfREFUQV9BUEkgOiBgY2xpY2ske0VWRU5UX0tFWX0ke0RBVEFfQVBJX0tFWX1gXG59XG5cbmNvbnN0IENsYXNzTmFtZSA9IHtcbiAgRFJPUERPV05fTUVOVSA6ICdkcm9wZG93bi1tZW51JyxcbiAgQUNUSVZFICAgICAgICA6ICdhY3RpdmUnLFxuICBESVNBQkxFRCAgICAgIDogJ2Rpc2FibGVkJyxcbiAgRkFERSAgICAgICAgICA6ICdmYWRlJyxcbiAgU0hPVyAgICAgICAgICA6ICdzaG93J1xufVxuXG5jb25zdCBTZWxlY3RvciA9IHtcbiAgRFJPUERPV04gICAgICAgICAgICAgIDogJy5kcm9wZG93bicsXG4gIE5BVl9MSVNUX0dST1VQICAgICAgICA6ICcubmF2LCAubGlzdC1ncm91cCcsXG4gIEFDVElWRSAgICAgICAgICAgICAgICA6ICcuYWN0aXZlJyxcbiAgQUNUSVZFX1VMICAgICAgICAgICAgIDogJz4gbGkgPiAuYWN0aXZlJyxcbiAgREFUQV9UT0dHTEUgICAgICAgICAgIDogJ1tkYXRhLXRvZ2dsZT1cInRhYlwiXSwgW2RhdGEtdG9nZ2xlPVwicGlsbFwiXSwgW2RhdGEtdG9nZ2xlPVwibGlzdFwiXScsXG4gIERST1BET1dOX1RPR0dMRSAgICAgICA6ICcuZHJvcGRvd24tdG9nZ2xlJyxcbiAgRFJPUERPV05fQUNUSVZFX0NISUxEIDogJz4gLmRyb3Bkb3duLW1lbnUgLmFjdGl2ZSdcbn1cblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIENsYXNzIERlZmluaXRpb25cbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmNsYXNzIFRhYiB7XG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQpIHtcbiAgICB0aGlzLl9lbGVtZW50ID0gZWxlbWVudFxuICB9XG5cbiAgLy8gR2V0dGVyc1xuXG4gIHN0YXRpYyBnZXQgVkVSU0lPTigpIHtcbiAgICByZXR1cm4gVkVSU0lPTlxuICB9XG5cbiAgLy8gUHVibGljXG5cbiAgc2hvdygpIHtcbiAgICBpZiAodGhpcy5fZWxlbWVudC5wYXJlbnROb2RlICYmXG4gICAgICAgIHRoaXMuX2VsZW1lbnQucGFyZW50Tm9kZS5ub2RlVHlwZSA9PT0gTm9kZS5FTEVNRU5UX05PREUgJiZcbiAgICAgICAgJCh0aGlzLl9lbGVtZW50KS5oYXNDbGFzcyhDbGFzc05hbWUuQUNUSVZFKSB8fFxuICAgICAgICAkKHRoaXMuX2VsZW1lbnQpLmhhc0NsYXNzKENsYXNzTmFtZS5ESVNBQkxFRCkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGxldCB0YXJnZXRcbiAgICBsZXQgcHJldmlvdXNcbiAgICBjb25zdCBsaXN0RWxlbWVudCA9ICQodGhpcy5fZWxlbWVudCkuY2xvc2VzdChTZWxlY3Rvci5OQVZfTElTVF9HUk9VUClbMF1cbiAgICBjb25zdCBzZWxlY3RvciA9IFV0aWwuZ2V0U2VsZWN0b3JGcm9tRWxlbWVudCh0aGlzLl9lbGVtZW50KVxuXG4gICAgaWYgKGxpc3RFbGVtZW50KSB7XG4gICAgICBjb25zdCBpdGVtU2VsZWN0b3IgPSBsaXN0RWxlbWVudC5ub2RlTmFtZSA9PT0gJ1VMJyB8fCBsaXN0RWxlbWVudC5ub2RlTmFtZSA9PT0gJ09MJyA/IFNlbGVjdG9yLkFDVElWRV9VTCA6IFNlbGVjdG9yLkFDVElWRVxuICAgICAgcHJldmlvdXMgPSAkLm1ha2VBcnJheSgkKGxpc3RFbGVtZW50KS5maW5kKGl0ZW1TZWxlY3RvcikpXG4gICAgICBwcmV2aW91cyA9IHByZXZpb3VzW3ByZXZpb3VzLmxlbmd0aCAtIDFdXG4gICAgfVxuXG4gICAgY29uc3QgaGlkZUV2ZW50ID0gJC5FdmVudChFdmVudC5ISURFLCB7XG4gICAgICByZWxhdGVkVGFyZ2V0OiB0aGlzLl9lbGVtZW50XG4gICAgfSlcblxuICAgIGNvbnN0IHNob3dFdmVudCA9ICQuRXZlbnQoRXZlbnQuU0hPVywge1xuICAgICAgcmVsYXRlZFRhcmdldDogcHJldmlvdXNcbiAgICB9KVxuXG4gICAgaWYgKHByZXZpb3VzKSB7XG4gICAgICAkKHByZXZpb3VzKS50cmlnZ2VyKGhpZGVFdmVudClcbiAgICB9XG5cbiAgICAkKHRoaXMuX2VsZW1lbnQpLnRyaWdnZXIoc2hvd0V2ZW50KVxuXG4gICAgaWYgKHNob3dFdmVudC5pc0RlZmF1bHRQcmV2ZW50ZWQoKSB8fFxuICAgICAgICBoaWRlRXZlbnQuaXNEZWZhdWx0UHJldmVudGVkKCkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmIChzZWxlY3Rvcikge1xuICAgICAgdGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3RvcilcbiAgICB9XG5cbiAgICB0aGlzLl9hY3RpdmF0ZShcbiAgICAgIHRoaXMuX2VsZW1lbnQsXG4gICAgICBsaXN0RWxlbWVudFxuICAgIClcblxuICAgIGNvbnN0IGNvbXBsZXRlID0gKCkgPT4ge1xuICAgICAgY29uc3QgaGlkZGVuRXZlbnQgPSAkLkV2ZW50KEV2ZW50LkhJRERFTiwge1xuICAgICAgICByZWxhdGVkVGFyZ2V0OiB0aGlzLl9lbGVtZW50XG4gICAgICB9KVxuXG4gICAgICBjb25zdCBzaG93bkV2ZW50ID0gJC5FdmVudChFdmVudC5TSE9XTiwge1xuICAgICAgICByZWxhdGVkVGFyZ2V0OiBwcmV2aW91c1xuICAgICAgfSlcblxuICAgICAgJChwcmV2aW91cykudHJpZ2dlcihoaWRkZW5FdmVudClcbiAgICAgICQodGhpcy5fZWxlbWVudCkudHJpZ2dlcihzaG93bkV2ZW50KVxuICAgIH1cblxuICAgIGlmICh0YXJnZXQpIHtcbiAgICAgIHRoaXMuX2FjdGl2YXRlKHRhcmdldCwgdGFyZ2V0LnBhcmVudE5vZGUsIGNvbXBsZXRlKVxuICAgIH0gZWxzZSB7XG4gICAgICBjb21wbGV0ZSgpXG4gICAgfVxuICB9XG5cbiAgZGlzcG9zZSgpIHtcbiAgICAkLnJlbW92ZURhdGEodGhpcy5fZWxlbWVudCwgREFUQV9LRVkpXG4gICAgdGhpcy5fZWxlbWVudCA9IG51bGxcbiAgfVxuXG4gIC8vIFByaXZhdGVcblxuICBfYWN0aXZhdGUoZWxlbWVudCwgY29udGFpbmVyLCBjYWxsYmFjaykge1xuICAgIGNvbnN0IGFjdGl2ZUVsZW1lbnRzID0gY29udGFpbmVyICYmIChjb250YWluZXIubm9kZU5hbWUgPT09ICdVTCcgfHwgY29udGFpbmVyLm5vZGVOYW1lID09PSAnT0wnKVxuICAgICAgPyAkKGNvbnRhaW5lcikuZmluZChTZWxlY3Rvci5BQ1RJVkVfVUwpXG4gICAgICA6ICQoY29udGFpbmVyKS5jaGlsZHJlbihTZWxlY3Rvci5BQ1RJVkUpXG5cbiAgICBjb25zdCBhY3RpdmUgPSBhY3RpdmVFbGVtZW50c1swXVxuICAgIGNvbnN0IGlzVHJhbnNpdGlvbmluZyA9IGNhbGxiYWNrICYmIChhY3RpdmUgJiYgJChhY3RpdmUpLmhhc0NsYXNzKENsYXNzTmFtZS5GQURFKSlcbiAgICBjb25zdCBjb21wbGV0ZSA9ICgpID0+IHRoaXMuX3RyYW5zaXRpb25Db21wbGV0ZShcbiAgICAgIGVsZW1lbnQsXG4gICAgICBhY3RpdmUsXG4gICAgICBjYWxsYmFja1xuICAgIClcblxuICAgIGlmIChhY3RpdmUgJiYgaXNUcmFuc2l0aW9uaW5nKSB7XG4gICAgICBjb25zdCB0cmFuc2l0aW9uRHVyYXRpb24gPSBVdGlsLmdldFRyYW5zaXRpb25EdXJhdGlvbkZyb21FbGVtZW50KGFjdGl2ZSlcblxuICAgICAgJChhY3RpdmUpXG4gICAgICAgIC5yZW1vdmVDbGFzcyhDbGFzc05hbWUuU0hPVylcbiAgICAgICAgLm9uZShVdGlsLlRSQU5TSVRJT05fRU5ELCBjb21wbGV0ZSlcbiAgICAgICAgLmVtdWxhdGVUcmFuc2l0aW9uRW5kKHRyYW5zaXRpb25EdXJhdGlvbilcbiAgICB9IGVsc2Uge1xuICAgICAgY29tcGxldGUoKVxuICAgIH1cbiAgfVxuXG4gIF90cmFuc2l0aW9uQ29tcGxldGUoZWxlbWVudCwgYWN0aXZlLCBjYWxsYmFjaykge1xuICAgIGlmIChhY3RpdmUpIHtcbiAgICAgICQoYWN0aXZlKS5yZW1vdmVDbGFzcyhDbGFzc05hbWUuQUNUSVZFKVxuXG4gICAgICBjb25zdCBkcm9wZG93bkNoaWxkID0gJChhY3RpdmUucGFyZW50Tm9kZSkuZmluZChcbiAgICAgICAgU2VsZWN0b3IuRFJPUERPV05fQUNUSVZFX0NISUxEXG4gICAgICApWzBdXG5cbiAgICAgIGlmIChkcm9wZG93bkNoaWxkKSB7XG4gICAgICAgICQoZHJvcGRvd25DaGlsZCkucmVtb3ZlQ2xhc3MoQ2xhc3NOYW1lLkFDVElWRSlcbiAgICAgIH1cblxuICAgICAgaWYgKGFjdGl2ZS5nZXRBdHRyaWJ1dGUoJ3JvbGUnKSA9PT0gJ3RhYicpIHtcbiAgICAgICAgYWN0aXZlLnNldEF0dHJpYnV0ZSgnYXJpYS1zZWxlY3RlZCcsIGZhbHNlKVxuICAgICAgfVxuICAgIH1cblxuICAgICQoZWxlbWVudCkuYWRkQ2xhc3MoQ2xhc3NOYW1lLkFDVElWRSlcbiAgICBpZiAoZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ3JvbGUnKSA9PT0gJ3RhYicpIHtcbiAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLXNlbGVjdGVkJywgdHJ1ZSlcbiAgICB9XG5cbiAgICBVdGlsLnJlZmxvdyhlbGVtZW50KVxuXG4gICAgaWYgKGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKENsYXNzTmFtZS5GQURFKSkge1xuICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKENsYXNzTmFtZS5TSE9XKVxuICAgIH1cblxuICAgIGlmIChlbGVtZW50LnBhcmVudE5vZGUgJiYgJChlbGVtZW50LnBhcmVudE5vZGUpLmhhc0NsYXNzKENsYXNzTmFtZS5EUk9QRE9XTl9NRU5VKSkge1xuICAgICAgY29uc3QgZHJvcGRvd25FbGVtZW50ID0gJChlbGVtZW50KS5jbG9zZXN0KFNlbGVjdG9yLkRST1BET1dOKVswXVxuXG4gICAgICBpZiAoZHJvcGRvd25FbGVtZW50KSB7XG4gICAgICAgIGNvbnN0IGRyb3Bkb3duVG9nZ2xlTGlzdCA9IFtdLnNsaWNlLmNhbGwoZHJvcGRvd25FbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoU2VsZWN0b3IuRFJPUERPV05fVE9HR0xFKSlcblxuICAgICAgICAkKGRyb3Bkb3duVG9nZ2xlTGlzdCkuYWRkQ2xhc3MoQ2xhc3NOYW1lLkFDVElWRSlcbiAgICAgIH1cblxuICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCB0cnVlKVxuICAgIH1cblxuICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgY2FsbGJhY2soKVxuICAgIH1cbiAgfVxuXG4gIC8vIFN0YXRpY1xuXG4gIHN0YXRpYyBfalF1ZXJ5SW50ZXJmYWNlKGNvbmZpZykge1xuICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgY29uc3QgJHRoaXMgPSAkKHRoaXMpXG4gICAgICBsZXQgZGF0YSA9ICR0aGlzLmRhdGEoREFUQV9LRVkpXG5cbiAgICAgIGlmICghZGF0YSkge1xuICAgICAgICBkYXRhID0gbmV3IFRhYih0aGlzKVxuICAgICAgICAkdGhpcy5kYXRhKERBVEFfS0VZLCBkYXRhKVxuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGNvbmZpZyA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBkYXRhW2NvbmZpZ10gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgTm8gbWV0aG9kIG5hbWVkIFwiJHtjb25maWd9XCJgKVxuICAgICAgICB9XG4gICAgICAgIGRhdGFbY29uZmlnXSgpXG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogRGF0YSBBcGkgaW1wbGVtZW50YXRpb25cbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbiQoZG9jdW1lbnQpXG4gIC5vbihFdmVudC5DTElDS19EQVRBX0FQSSwgU2VsZWN0b3IuREFUQV9UT0dHTEUsIGZ1bmN0aW9uIChldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICBUYWIuX2pRdWVyeUludGVyZmFjZS5jYWxsKCQodGhpcyksICdzaG93JylcbiAgfSlcblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIGpRdWVyeVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuJC5mbltOQU1FXSA9IFRhYi5falF1ZXJ5SW50ZXJmYWNlXG4kLmZuW05BTUVdLkNvbnN0cnVjdG9yID0gVGFiXG4kLmZuW05BTUVdLm5vQ29uZmxpY3QgPSAoKSA9PiB7XG4gICQuZm5bTkFNRV0gPSBKUVVFUllfTk9fQ09ORkxJQ1RcbiAgcmV0dXJuIFRhYi5falF1ZXJ5SW50ZXJmYWNlXG59XG5cbmV4cG9ydCBkZWZhdWx0IFRhYlxuIiwiLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQm9vdHN0cmFwICh2NC4zLjEpOiB0b2FzdC5qc1xuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYXN0ZXIvTElDRU5TRSlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5J1xuaW1wb3J0IFV0aWwgZnJvbSAnLi91dGlsJ1xuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQ29uc3RhbnRzXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5jb25zdCBOQU1FICAgICAgICAgICAgICAgPSAndG9hc3QnXG5jb25zdCBWRVJTSU9OICAgICAgICAgICAgPSAnNC4zLjEnXG5jb25zdCBEQVRBX0tFWSAgICAgICAgICAgPSAnYnMudG9hc3QnXG5jb25zdCBFVkVOVF9LRVkgICAgICAgICAgPSBgLiR7REFUQV9LRVl9YFxuY29uc3QgSlFVRVJZX05PX0NPTkZMSUNUID0gJC5mbltOQU1FXVxuXG5jb25zdCBFdmVudCA9IHtcbiAgQ0xJQ0tfRElTTUlTUyA6IGBjbGljay5kaXNtaXNzJHtFVkVOVF9LRVl9YCxcbiAgSElERSAgICAgICAgICA6IGBoaWRlJHtFVkVOVF9LRVl9YCxcbiAgSElEREVOICAgICAgICA6IGBoaWRkZW4ke0VWRU5UX0tFWX1gLFxuICBTSE9XICAgICAgICAgIDogYHNob3cke0VWRU5UX0tFWX1gLFxuICBTSE9XTiAgICAgICAgIDogYHNob3duJHtFVkVOVF9LRVl9YFxufVxuXG5jb25zdCBDbGFzc05hbWUgPSB7XG4gIEZBREUgICAgOiAnZmFkZScsXG4gIEhJREUgICAgOiAnaGlkZScsXG4gIFNIT1cgICAgOiAnc2hvdycsXG4gIFNIT1dJTkcgOiAnc2hvd2luZydcbn1cblxuY29uc3QgRGVmYXVsdFR5cGUgPSB7XG4gIGFuaW1hdGlvbiA6ICdib29sZWFuJyxcbiAgYXV0b2hpZGUgIDogJ2Jvb2xlYW4nLFxuICBkZWxheSAgICAgOiAnbnVtYmVyJ1xufVxuXG5jb25zdCBEZWZhdWx0ID0ge1xuICBhbmltYXRpb24gOiB0cnVlLFxuICBhdXRvaGlkZSAgOiB0cnVlLFxuICBkZWxheSAgICAgOiA1MDBcbn1cblxuY29uc3QgU2VsZWN0b3IgPSB7XG4gIERBVEFfRElTTUlTUyA6ICdbZGF0YS1kaXNtaXNzPVwidG9hc3RcIl0nXG59XG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBDbGFzcyBEZWZpbml0aW9uXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5jbGFzcyBUb2FzdCB7XG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQsIGNvbmZpZykge1xuICAgIHRoaXMuX2VsZW1lbnQgPSBlbGVtZW50XG4gICAgdGhpcy5fY29uZmlnICA9IHRoaXMuX2dldENvbmZpZyhjb25maWcpXG4gICAgdGhpcy5fdGltZW91dCA9IG51bGxcbiAgICB0aGlzLl9zZXRMaXN0ZW5lcnMoKVxuICB9XG5cbiAgLy8gR2V0dGVyc1xuXG4gIHN0YXRpYyBnZXQgVkVSU0lPTigpIHtcbiAgICByZXR1cm4gVkVSU0lPTlxuICB9XG5cbiAgc3RhdGljIGdldCBEZWZhdWx0VHlwZSgpIHtcbiAgICByZXR1cm4gRGVmYXVsdFR5cGVcbiAgfVxuXG4gIHN0YXRpYyBnZXQgRGVmYXVsdCgpIHtcbiAgICByZXR1cm4gRGVmYXVsdFxuICB9XG5cbiAgLy8gUHVibGljXG5cbiAgc2hvdygpIHtcbiAgICAkKHRoaXMuX2VsZW1lbnQpLnRyaWdnZXIoRXZlbnQuU0hPVylcblxuICAgIGlmICh0aGlzLl9jb25maWcuYW5pbWF0aW9uKSB7XG4gICAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5hZGQoQ2xhc3NOYW1lLkZBREUpXG4gICAgfVxuXG4gICAgY29uc3QgY29tcGxldGUgPSAoKSA9PiB7XG4gICAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoQ2xhc3NOYW1lLlNIT1dJTkcpXG4gICAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5hZGQoQ2xhc3NOYW1lLlNIT1cpXG5cbiAgICAgICQodGhpcy5fZWxlbWVudCkudHJpZ2dlcihFdmVudC5TSE9XTilcblxuICAgICAgaWYgKHRoaXMuX2NvbmZpZy5hdXRvaGlkZSkge1xuICAgICAgICB0aGlzLmhpZGUoKVxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShDbGFzc05hbWUuSElERSlcbiAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5hZGQoQ2xhc3NOYW1lLlNIT1dJTkcpXG4gICAgaWYgKHRoaXMuX2NvbmZpZy5hbmltYXRpb24pIHtcbiAgICAgIGNvbnN0IHRyYW5zaXRpb25EdXJhdGlvbiA9IFV0aWwuZ2V0VHJhbnNpdGlvbkR1cmF0aW9uRnJvbUVsZW1lbnQodGhpcy5fZWxlbWVudClcblxuICAgICAgJCh0aGlzLl9lbGVtZW50KVxuICAgICAgICAub25lKFV0aWwuVFJBTlNJVElPTl9FTkQsIGNvbXBsZXRlKVxuICAgICAgICAuZW11bGF0ZVRyYW5zaXRpb25FbmQodHJhbnNpdGlvbkR1cmF0aW9uKVxuICAgIH0gZWxzZSB7XG4gICAgICBjb21wbGV0ZSgpXG4gICAgfVxuICB9XG5cbiAgaGlkZSh3aXRob3V0VGltZW91dCkge1xuICAgIGlmICghdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoQ2xhc3NOYW1lLlNIT1cpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAkKHRoaXMuX2VsZW1lbnQpLnRyaWdnZXIoRXZlbnQuSElERSlcblxuICAgIGlmICh3aXRob3V0VGltZW91dCkge1xuICAgICAgdGhpcy5fY2xvc2UoKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl90aW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuX2Nsb3NlKClcbiAgICAgIH0sIHRoaXMuX2NvbmZpZy5kZWxheSlcbiAgICB9XG4gIH1cblxuICBkaXNwb3NlKCkge1xuICAgIGNsZWFyVGltZW91dCh0aGlzLl90aW1lb3V0KVxuICAgIHRoaXMuX3RpbWVvdXQgPSBudWxsXG5cbiAgICBpZiAodGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoQ2xhc3NOYW1lLlNIT1cpKSB7XG4gICAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoQ2xhc3NOYW1lLlNIT1cpXG4gICAgfVxuXG4gICAgJCh0aGlzLl9lbGVtZW50KS5vZmYoRXZlbnQuQ0xJQ0tfRElTTUlTUylcblxuICAgICQucmVtb3ZlRGF0YSh0aGlzLl9lbGVtZW50LCBEQVRBX0tFWSlcbiAgICB0aGlzLl9lbGVtZW50ID0gbnVsbFxuICAgIHRoaXMuX2NvbmZpZyAgPSBudWxsXG4gIH1cblxuICAvLyBQcml2YXRlXG5cbiAgX2dldENvbmZpZyhjb25maWcpIHtcbiAgICBjb25maWcgPSB7XG4gICAgICAuLi5EZWZhdWx0LFxuICAgICAgLi4uJCh0aGlzLl9lbGVtZW50KS5kYXRhKCksXG4gICAgICAuLi50eXBlb2YgY29uZmlnID09PSAnb2JqZWN0JyAmJiBjb25maWcgPyBjb25maWcgOiB7fVxuICAgIH1cblxuICAgIFV0aWwudHlwZUNoZWNrQ29uZmlnKFxuICAgICAgTkFNRSxcbiAgICAgIGNvbmZpZyxcbiAgICAgIHRoaXMuY29uc3RydWN0b3IuRGVmYXVsdFR5cGVcbiAgICApXG5cbiAgICByZXR1cm4gY29uZmlnXG4gIH1cblxuICBfc2V0TGlzdGVuZXJzKCkge1xuICAgICQodGhpcy5fZWxlbWVudCkub24oXG4gICAgICBFdmVudC5DTElDS19ESVNNSVNTLFxuICAgICAgU2VsZWN0b3IuREFUQV9ESVNNSVNTLFxuICAgICAgKCkgPT4gdGhpcy5oaWRlKHRydWUpXG4gICAgKVxuICB9XG5cbiAgX2Nsb3NlKCkge1xuICAgIGNvbnN0IGNvbXBsZXRlID0gKCkgPT4ge1xuICAgICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuYWRkKENsYXNzTmFtZS5ISURFKVxuICAgICAgJCh0aGlzLl9lbGVtZW50KS50cmlnZ2VyKEV2ZW50LkhJRERFTilcbiAgICB9XG5cbiAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoQ2xhc3NOYW1lLlNIT1cpXG4gICAgaWYgKHRoaXMuX2NvbmZpZy5hbmltYXRpb24pIHtcbiAgICAgIGNvbnN0IHRyYW5zaXRpb25EdXJhdGlvbiA9IFV0aWwuZ2V0VHJhbnNpdGlvbkR1cmF0aW9uRnJvbUVsZW1lbnQodGhpcy5fZWxlbWVudClcblxuICAgICAgJCh0aGlzLl9lbGVtZW50KVxuICAgICAgICAub25lKFV0aWwuVFJBTlNJVElPTl9FTkQsIGNvbXBsZXRlKVxuICAgICAgICAuZW11bGF0ZVRyYW5zaXRpb25FbmQodHJhbnNpdGlvbkR1cmF0aW9uKVxuICAgIH0gZWxzZSB7XG4gICAgICBjb21wbGV0ZSgpXG4gICAgfVxuICB9XG5cbiAgLy8gU3RhdGljXG5cbiAgc3RhdGljIF9qUXVlcnlJbnRlcmZhY2UoY29uZmlnKSB7XG4gICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICBjb25zdCAkZWxlbWVudCA9ICQodGhpcylcbiAgICAgIGxldCBkYXRhICAgICAgID0gJGVsZW1lbnQuZGF0YShEQVRBX0tFWSlcbiAgICAgIGNvbnN0IF9jb25maWcgID0gdHlwZW9mIGNvbmZpZyA9PT0gJ29iamVjdCcgJiYgY29uZmlnXG5cbiAgICAgIGlmICghZGF0YSkge1xuICAgICAgICBkYXRhID0gbmV3IFRvYXN0KHRoaXMsIF9jb25maWcpXG4gICAgICAgICRlbGVtZW50LmRhdGEoREFUQV9LRVksIGRhdGEpXG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgY29uZmlnID09PSAnc3RyaW5nJykge1xuICAgICAgICBpZiAodHlwZW9mIGRhdGFbY29uZmlnXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBObyBtZXRob2QgbmFtZWQgXCIke2NvbmZpZ31cImApXG4gICAgICAgIH1cblxuICAgICAgICBkYXRhW2NvbmZpZ10odGhpcylcbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBqUXVlcnlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbiQuZm5bTkFNRV0gICAgICAgICAgICAgPSBUb2FzdC5falF1ZXJ5SW50ZXJmYWNlXG4kLmZuW05BTUVdLkNvbnN0cnVjdG9yID0gVG9hc3RcbiQuZm5bTkFNRV0ubm9Db25mbGljdCAgPSAoKSA9PiB7XG4gICQuZm5bTkFNRV0gPSBKUVVFUllfTk9fQ09ORkxJQ1RcbiAgcmV0dXJuIFRvYXN0Ll9qUXVlcnlJbnRlcmZhY2Vcbn1cblxuZXhwb3J0IGRlZmF1bHQgVG9hc3RcbiIsImltcG9ydCAkIGZyb20gJ2pxdWVyeSdcbmltcG9ydCBBbGVydCBmcm9tICcuL2FsZXJ0J1xuaW1wb3J0IEJ1dHRvbiBmcm9tICcuL2J1dHRvbidcbmltcG9ydCBDYXJvdXNlbCBmcm9tICcuL2Nhcm91c2VsJ1xuaW1wb3J0IENvbGxhcHNlIGZyb20gJy4vY29sbGFwc2UnXG5pbXBvcnQgRHJvcGRvd24gZnJvbSAnLi9kcm9wZG93bidcbmltcG9ydCBNb2RhbCBmcm9tICcuL21vZGFsJ1xuaW1wb3J0IFBvcG92ZXIgZnJvbSAnLi9wb3BvdmVyJ1xuaW1wb3J0IFNjcm9sbHNweSBmcm9tICcuL3Njcm9sbHNweSdcbmltcG9ydCBUYWIgZnJvbSAnLi90YWInXG5pbXBvcnQgVG9hc3QgZnJvbSAnLi90b2FzdCdcbmltcG9ydCBUb29sdGlwIGZyb20gJy4vdG9vbHRpcCdcbmltcG9ydCBVdGlsIGZyb20gJy4vdXRpbCdcblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQm9vdHN0cmFwICh2NC4zLjEpOiBpbmRleC5qc1xuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYXN0ZXIvTElDRU5TRSlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuKCgpID0+IHtcbiAgaWYgKHR5cGVvZiAkID09PSAndW5kZWZpbmVkJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0Jvb3RzdHJhcFxcJ3MgSmF2YVNjcmlwdCByZXF1aXJlcyBqUXVlcnkuIGpRdWVyeSBtdXN0IGJlIGluY2x1ZGVkIGJlZm9yZSBCb290c3RyYXBcXCdzIEphdmFTY3JpcHQuJylcbiAgfVxuXG4gIGNvbnN0IHZlcnNpb24gPSAkLmZuLmpxdWVyeS5zcGxpdCgnICcpWzBdLnNwbGl0KCcuJylcbiAgY29uc3QgbWluTWFqb3IgPSAxXG4gIGNvbnN0IGx0TWFqb3IgPSAyXG4gIGNvbnN0IG1pbk1pbm9yID0gOVxuICBjb25zdCBtaW5QYXRjaCA9IDFcbiAgY29uc3QgbWF4TWFqb3IgPSA0XG5cbiAgaWYgKHZlcnNpb25bMF0gPCBsdE1ham9yICYmIHZlcnNpb25bMV0gPCBtaW5NaW5vciB8fCB2ZXJzaW9uWzBdID09PSBtaW5NYWpvciAmJiB2ZXJzaW9uWzFdID09PSBtaW5NaW5vciAmJiB2ZXJzaW9uWzJdIDwgbWluUGF0Y2ggfHwgdmVyc2lvblswXSA+PSBtYXhNYWpvcikge1xuICAgIHRocm93IG5ldyBFcnJvcignQm9vdHN0cmFwXFwncyBKYXZhU2NyaXB0IHJlcXVpcmVzIGF0IGxlYXN0IGpRdWVyeSB2MS45LjEgYnV0IGxlc3MgdGhhbiB2NC4wLjAnKVxuICB9XG59KSgpXG5cbmV4cG9ydCB7XG4gIFV0aWwsXG4gIEFsZXJ0LFxuICBCdXR0b24sXG4gIENhcm91c2VsLFxuICBDb2xsYXBzZSxcbiAgRHJvcGRvd24sXG4gIE1vZGFsLFxuICBQb3BvdmVyLFxuICBTY3JvbGxzcHksXG4gIFRhYixcbiAgVG9hc3QsXG4gIFRvb2x0aXBcbn1cbiJdLCJuYW1lcyI6WyJUUkFOU0lUSU9OX0VORCIsIk1BWF9VSUQiLCJNSUxMSVNFQ09ORFNfTVVMVElQTElFUiIsInRvVHlwZSIsIm9iaiIsInRvU3RyaW5nIiwiY2FsbCIsIm1hdGNoIiwidG9Mb3dlckNhc2UiLCJnZXRTcGVjaWFsVHJhbnNpdGlvbkVuZEV2ZW50IiwiYmluZFR5cGUiLCJkZWxlZ2F0ZVR5cGUiLCJoYW5kbGUiLCJldmVudCIsIiQiLCJ0YXJnZXQiLCJpcyIsImhhbmRsZU9iaiIsImhhbmRsZXIiLCJhcHBseSIsImFyZ3VtZW50cyIsInVuZGVmaW5lZCIsInRyYW5zaXRpb25FbmRFbXVsYXRvciIsImR1cmF0aW9uIiwiX3RoaXMiLCJjYWxsZWQiLCJvbmUiLCJVdGlsIiwic2V0VGltZW91dCIsInRyaWdnZXJUcmFuc2l0aW9uRW5kIiwic2V0VHJhbnNpdGlvbkVuZFN1cHBvcnQiLCJmbiIsImVtdWxhdGVUcmFuc2l0aW9uRW5kIiwic3BlY2lhbCIsImdldFVJRCIsInByZWZpeCIsIk1hdGgiLCJyYW5kb20iLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiZ2V0U2VsZWN0b3JGcm9tRWxlbWVudCIsImVsZW1lbnQiLCJzZWxlY3RvciIsImdldEF0dHJpYnV0ZSIsImhyZWZBdHRyIiwidHJpbSIsInF1ZXJ5U2VsZWN0b3IiLCJlcnIiLCJnZXRUcmFuc2l0aW9uRHVyYXRpb25Gcm9tRWxlbWVudCIsInRyYW5zaXRpb25EdXJhdGlvbiIsImNzcyIsInRyYW5zaXRpb25EZWxheSIsImZsb2F0VHJhbnNpdGlvbkR1cmF0aW9uIiwicGFyc2VGbG9hdCIsImZsb2F0VHJhbnNpdGlvbkRlbGF5Iiwic3BsaXQiLCJyZWZsb3ciLCJvZmZzZXRIZWlnaHQiLCJ0cmlnZ2VyIiwic3VwcG9ydHNUcmFuc2l0aW9uRW5kIiwiQm9vbGVhbiIsImlzRWxlbWVudCIsIm5vZGVUeXBlIiwidHlwZUNoZWNrQ29uZmlnIiwiY29tcG9uZW50TmFtZSIsImNvbmZpZyIsImNvbmZpZ1R5cGVzIiwicHJvcGVydHkiLCJPYmplY3QiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImV4cGVjdGVkVHlwZXMiLCJ2YWx1ZSIsInZhbHVlVHlwZSIsIlJlZ0V4cCIsInRlc3QiLCJFcnJvciIsInRvVXBwZXJDYXNlIiwiZmluZFNoYWRvd1Jvb3QiLCJkb2N1bWVudEVsZW1lbnQiLCJhdHRhY2hTaGFkb3ciLCJnZXRSb290Tm9kZSIsInJvb3QiLCJTaGFkb3dSb290IiwicGFyZW50Tm9kZSIsIk5BTUUiLCJWRVJTSU9OIiwiREFUQV9LRVkiLCJFVkVOVF9LRVkiLCJEQVRBX0FQSV9LRVkiLCJKUVVFUllfTk9fQ09ORkxJQ1QiLCJTZWxlY3RvciIsIkRJU01JU1MiLCJFdmVudCIsIkNMT1NFIiwiQ0xPU0VEIiwiQ0xJQ0tfREFUQV9BUEkiLCJDbGFzc05hbWUiLCJBTEVSVCIsIkZBREUiLCJTSE9XIiwiQWxlcnQiLCJfZWxlbWVudCIsImNsb3NlIiwicm9vdEVsZW1lbnQiLCJfZ2V0Um9vdEVsZW1lbnQiLCJjdXN0b21FdmVudCIsIl90cmlnZ2VyQ2xvc2VFdmVudCIsImlzRGVmYXVsdFByZXZlbnRlZCIsIl9yZW1vdmVFbGVtZW50IiwiZGlzcG9zZSIsInJlbW92ZURhdGEiLCJwYXJlbnQiLCJjbG9zZXN0IiwiY2xvc2VFdmVudCIsInJlbW92ZUNsYXNzIiwiaGFzQ2xhc3MiLCJfZGVzdHJveUVsZW1lbnQiLCJkZXRhY2giLCJyZW1vdmUiLCJfalF1ZXJ5SW50ZXJmYWNlIiwiZWFjaCIsIiRlbGVtZW50IiwiZGF0YSIsIl9oYW5kbGVEaXNtaXNzIiwiYWxlcnRJbnN0YW5jZSIsInByZXZlbnREZWZhdWx0Iiwib24iLCJDb25zdHJ1Y3RvciIsIm5vQ29uZmxpY3QiLCJOQU1FJDEiLCJWRVJTSU9OJDEiLCJEQVRBX0tFWSQxIiwiRVZFTlRfS0VZJDEiLCJEQVRBX0FQSV9LRVkkMSIsIkpRVUVSWV9OT19DT05GTElDVCQxIiwiQ2xhc3NOYW1lJDEiLCJBQ1RJVkUiLCJCVVRUT04iLCJGT0NVUyIsIlNlbGVjdG9yJDEiLCJEQVRBX1RPR0dMRV9DQVJST1QiLCJEQVRBX1RPR0dMRSIsIklOUFVUIiwiRXZlbnQkMSIsIkZPQ1VTX0JMVVJfREFUQV9BUEkiLCJCdXR0b24iLCJ0b2dnbGUiLCJ0cmlnZ2VyQ2hhbmdlRXZlbnQiLCJhZGRBcmlhUHJlc3NlZCIsImlucHV0IiwidHlwZSIsImNoZWNrZWQiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsImFjdGl2ZUVsZW1lbnQiLCJoYXNBdHRyaWJ1dGUiLCJmb2N1cyIsInNldEF0dHJpYnV0ZSIsInRvZ2dsZUNsYXNzIiwiYnV0dG9uIiwiTkFNRSQyIiwiVkVSU0lPTiQyIiwiREFUQV9LRVkkMiIsIkVWRU5UX0tFWSQyIiwiREFUQV9BUElfS0VZJDIiLCJKUVVFUllfTk9fQ09ORkxJQ1QkMiIsIkFSUk9XX0xFRlRfS0VZQ09ERSIsIkFSUk9XX1JJR0hUX0tFWUNPREUiLCJUT1VDSEVWRU5UX0NPTVBBVF9XQUlUIiwiU1dJUEVfVEhSRVNIT0xEIiwiRGVmYXVsdCIsImludGVydmFsIiwia2V5Ym9hcmQiLCJzbGlkZSIsInBhdXNlIiwid3JhcCIsInRvdWNoIiwiRGVmYXVsdFR5cGUiLCJEaXJlY3Rpb24iLCJORVhUIiwiUFJFViIsIkxFRlQiLCJSSUdIVCIsIkV2ZW50JDIiLCJTTElERSIsIlNMSUQiLCJLRVlET1dOIiwiTU9VU0VFTlRFUiIsIk1PVVNFTEVBVkUiLCJUT1VDSFNUQVJUIiwiVE9VQ0hNT1ZFIiwiVE9VQ0hFTkQiLCJQT0lOVEVSRE9XTiIsIlBPSU5URVJVUCIsIkRSQUdfU1RBUlQiLCJMT0FEX0RBVEFfQVBJIiwiQ2xhc3NOYW1lJDIiLCJDQVJPVVNFTCIsIklURU0iLCJQT0lOVEVSX0VWRU5UIiwiU2VsZWN0b3IkMiIsIkFDVElWRV9JVEVNIiwiSVRFTV9JTUciLCJORVhUX1BSRVYiLCJJTkRJQ0FUT1JTIiwiREFUQV9TTElERSIsIkRBVEFfUklERSIsIlBvaW50ZXJUeXBlIiwiVE9VQ0giLCJQRU4iLCJDYXJvdXNlbCIsIl9pdGVtcyIsIl9pbnRlcnZhbCIsIl9hY3RpdmVFbGVtZW50IiwiX2lzUGF1c2VkIiwiX2lzU2xpZGluZyIsInRvdWNoVGltZW91dCIsInRvdWNoU3RhcnRYIiwidG91Y2hEZWx0YVgiLCJfY29uZmlnIiwiX2dldENvbmZpZyIsIl9pbmRpY2F0b3JzRWxlbWVudCIsIl90b3VjaFN1cHBvcnRlZCIsIm5hdmlnYXRvciIsIm1heFRvdWNoUG9pbnRzIiwiX3BvaW50ZXJFdmVudCIsIndpbmRvdyIsIlBvaW50ZXJFdmVudCIsIk1TUG9pbnRlckV2ZW50IiwiX2FkZEV2ZW50TGlzdGVuZXJzIiwibmV4dCIsIl9zbGlkZSIsIm5leHRXaGVuVmlzaWJsZSIsImhpZGRlbiIsInByZXYiLCJjeWNsZSIsImNsZWFySW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsInZpc2liaWxpdHlTdGF0ZSIsImJpbmQiLCJ0byIsImluZGV4IiwiYWN0aXZlSW5kZXgiLCJfZ2V0SXRlbUluZGV4IiwibGVuZ3RoIiwiZGlyZWN0aW9uIiwib2ZmIiwiX29iamVjdFNwcmVhZCIsIl9oYW5kbGVTd2lwZSIsImFic0RlbHRheCIsImFicyIsIl90aGlzMiIsIl9rZXlkb3duIiwiX2FkZFRvdWNoRXZlbnRMaXN0ZW5lcnMiLCJfdGhpczMiLCJzdGFydCIsIm9yaWdpbmFsRXZlbnQiLCJwb2ludGVyVHlwZSIsImNsaWVudFgiLCJ0b3VjaGVzIiwibW92ZSIsImVuZCIsImNsZWFyVGltZW91dCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJlIiwiYWRkIiwidGFnTmFtZSIsIndoaWNoIiwic2xpY2UiLCJpbmRleE9mIiwiX2dldEl0ZW1CeURpcmVjdGlvbiIsImlzTmV4dERpcmVjdGlvbiIsImlzUHJldkRpcmVjdGlvbiIsImxhc3RJdGVtSW5kZXgiLCJpc0dvaW5nVG9XcmFwIiwiZGVsdGEiLCJpdGVtSW5kZXgiLCJfdHJpZ2dlclNsaWRlRXZlbnQiLCJyZWxhdGVkVGFyZ2V0IiwiZXZlbnREaXJlY3Rpb25OYW1lIiwidGFyZ2V0SW5kZXgiLCJmcm9tSW5kZXgiLCJzbGlkZUV2ZW50IiwiZnJvbSIsIl9zZXRBY3RpdmVJbmRpY2F0b3JFbGVtZW50IiwiaW5kaWNhdG9ycyIsIm5leHRJbmRpY2F0b3IiLCJjaGlsZHJlbiIsImFkZENsYXNzIiwiX3RoaXM0IiwiYWN0aXZlRWxlbWVudEluZGV4IiwibmV4dEVsZW1lbnQiLCJuZXh0RWxlbWVudEluZGV4IiwiaXNDeWNsaW5nIiwiZGlyZWN0aW9uYWxDbGFzc05hbWUiLCJvcmRlckNsYXNzTmFtZSIsInNsaWRFdmVudCIsIm5leHRFbGVtZW50SW50ZXJ2YWwiLCJwYXJzZUludCIsImRlZmF1bHRJbnRlcnZhbCIsIl90eXBlb2YiLCJhY3Rpb24iLCJUeXBlRXJyb3IiLCJyaWRlIiwiX2RhdGFBcGlDbGlja0hhbmRsZXIiLCJzbGlkZUluZGV4IiwiY2Fyb3VzZWxzIiwiaSIsImxlbiIsIiRjYXJvdXNlbCIsIk5BTUUkMyIsIlZFUlNJT04kMyIsIkRBVEFfS0VZJDMiLCJFVkVOVF9LRVkkMyIsIkRBVEFfQVBJX0tFWSQzIiwiSlFVRVJZX05PX0NPTkZMSUNUJDMiLCJEZWZhdWx0JDEiLCJEZWZhdWx0VHlwZSQxIiwiRXZlbnQkMyIsIlNIT1dOIiwiSElERSIsIkhJRERFTiIsIkNsYXNzTmFtZSQzIiwiQ09MTEFQU0UiLCJDT0xMQVBTSU5HIiwiQ09MTEFQU0VEIiwiRGltZW5zaW9uIiwiV0lEVEgiLCJIRUlHSFQiLCJTZWxlY3RvciQzIiwiQUNUSVZFUyIsIkNvbGxhcHNlIiwiX2lzVHJhbnNpdGlvbmluZyIsIl90cmlnZ2VyQXJyYXkiLCJpZCIsInRvZ2dsZUxpc3QiLCJlbGVtIiwiZmlsdGVyRWxlbWVudCIsImZpbHRlciIsImZvdW5kRWxlbSIsIl9zZWxlY3RvciIsInB1c2giLCJfcGFyZW50IiwiX2dldFBhcmVudCIsIl9hZGRBcmlhQW5kQ29sbGFwc2VkQ2xhc3MiLCJoaWRlIiwic2hvdyIsImFjdGl2ZXMiLCJhY3RpdmVzRGF0YSIsIm5vdCIsInN0YXJ0RXZlbnQiLCJkaW1lbnNpb24iLCJfZ2V0RGltZW5zaW9uIiwic3R5bGUiLCJhdHRyIiwic2V0VHJhbnNpdGlvbmluZyIsImNvbXBsZXRlIiwiY2FwaXRhbGl6ZWREaW1lbnNpb24iLCJzY3JvbGxTaXplIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwidHJpZ2dlckFycmF5TGVuZ3RoIiwiJGVsZW0iLCJpc1RyYW5zaXRpb25pbmciLCJoYXNXaWR0aCIsImpxdWVyeSIsIl9nZXRUYXJnZXRGcm9tRWxlbWVudCIsInRyaWdnZXJBcnJheSIsImlzT3BlbiIsIiR0aGlzIiwiY3VycmVudFRhcmdldCIsIiR0cmlnZ2VyIiwic2VsZWN0b3JzIiwiJHRhcmdldCIsIk5BTUUkNCIsIlZFUlNJT04kNCIsIkRBVEFfS0VZJDQiLCJFVkVOVF9LRVkkNCIsIkRBVEFfQVBJX0tFWSQ0IiwiSlFVRVJZX05PX0NPTkZMSUNUJDQiLCJFU0NBUEVfS0VZQ09ERSIsIlNQQUNFX0tFWUNPREUiLCJUQUJfS0VZQ09ERSIsIkFSUk9XX1VQX0tFWUNPREUiLCJBUlJPV19ET1dOX0tFWUNPREUiLCJSSUdIVF9NT1VTRV9CVVRUT05fV0hJQ0giLCJSRUdFWFBfS0VZRE9XTiIsIkV2ZW50JDQiLCJDTElDSyIsIktFWURPV05fREFUQV9BUEkiLCJLRVlVUF9EQVRBX0FQSSIsIkNsYXNzTmFtZSQ0IiwiRElTQUJMRUQiLCJEUk9QVVAiLCJEUk9QUklHSFQiLCJEUk9QTEVGVCIsIk1FTlVSSUdIVCIsIk1FTlVMRUZUIiwiUE9TSVRJT05fU1RBVElDIiwiU2VsZWN0b3IkNCIsIkZPUk1fQ0hJTEQiLCJNRU5VIiwiTkFWQkFSX05BViIsIlZJU0lCTEVfSVRFTVMiLCJBdHRhY2htZW50TWFwIiwiVE9QIiwiVE9QRU5EIiwiQk9UVE9NIiwiQk9UVE9NRU5EIiwiUklHSFRFTkQiLCJMRUZURU5EIiwiRGVmYXVsdCQyIiwib2Zmc2V0IiwiZmxpcCIsImJvdW5kYXJ5IiwicmVmZXJlbmNlIiwiZGlzcGxheSIsIkRlZmF1bHRUeXBlJDIiLCJEcm9wZG93biIsIl9wb3BwZXIiLCJfbWVudSIsIl9nZXRNZW51RWxlbWVudCIsIl9pbk5hdmJhciIsIl9kZXRlY3ROYXZiYXIiLCJkaXNhYmxlZCIsIl9nZXRQYXJlbnRGcm9tRWxlbWVudCIsImlzQWN0aXZlIiwiX2NsZWFyTWVudXMiLCJzaG93RXZlbnQiLCJQb3BwZXIiLCJyZWZlcmVuY2VFbGVtZW50IiwiX2dldFBvcHBlckNvbmZpZyIsImJvZHkiLCJub29wIiwiaGlkZUV2ZW50IiwiZGVzdHJveSIsInVwZGF0ZSIsInNjaGVkdWxlVXBkYXRlIiwic3RvcFByb3BhZ2F0aW9uIiwiY29uc3RydWN0b3IiLCJfZ2V0UGxhY2VtZW50IiwiJHBhcmVudERyb3Bkb3duIiwicGxhY2VtZW50IiwiX2dldE9mZnNldCIsIm9mZnNldHMiLCJwb3BwZXJDb25maWciLCJtb2RpZmllcnMiLCJlbmFibGVkIiwicHJldmVudE92ZXJmbG93IiwiYm91bmRhcmllc0VsZW1lbnQiLCJhcHBseVN0eWxlIiwidG9nZ2xlcyIsImNvbnRleHQiLCJjbGlja0V2ZW50IiwiZHJvcGRvd25NZW51IiwiX2RhdGFBcGlLZXlkb3duSGFuZGxlciIsIml0ZW1zIiwiTkFNRSQ1IiwiVkVSU0lPTiQ1IiwiREFUQV9LRVkkNSIsIkVWRU5UX0tFWSQ1IiwiREFUQV9BUElfS0VZJDUiLCJKUVVFUllfTk9fQ09ORkxJQ1QkNSIsIkVTQ0FQRV9LRVlDT0RFJDEiLCJEZWZhdWx0JDMiLCJiYWNrZHJvcCIsIkRlZmF1bHRUeXBlJDMiLCJFdmVudCQ1IiwiRk9DVVNJTiIsIlJFU0laRSIsIkNMSUNLX0RJU01JU1MiLCJLRVlET1dOX0RJU01JU1MiLCJNT1VTRVVQX0RJU01JU1MiLCJNT1VTRURPV05fRElTTUlTUyIsIkNsYXNzTmFtZSQ1IiwiU0NST0xMQUJMRSIsIlNDUk9MTEJBUl9NRUFTVVJFUiIsIkJBQ0tEUk9QIiwiT1BFTiIsIlNlbGVjdG9yJDUiLCJESUFMT0ciLCJNT0RBTF9CT0RZIiwiREFUQV9ESVNNSVNTIiwiRklYRURfQ09OVEVOVCIsIlNUSUNLWV9DT05URU5UIiwiTW9kYWwiLCJfZGlhbG9nIiwiX2JhY2tkcm9wIiwiX2lzU2hvd24iLCJfaXNCb2R5T3ZlcmZsb3dpbmciLCJfaWdub3JlQmFja2Ryb3BDbGljayIsIl9zY3JvbGxiYXJXaWR0aCIsIl9jaGVja1Njcm9sbGJhciIsIl9zZXRTY3JvbGxiYXIiLCJfYWRqdXN0RGlhbG9nIiwiX3NldEVzY2FwZUV2ZW50IiwiX3NldFJlc2l6ZUV2ZW50IiwiX3Nob3dCYWNrZHJvcCIsIl9zaG93RWxlbWVudCIsInRyYW5zaXRpb24iLCJfaGlkZU1vZGFsIiwiZm9yRWFjaCIsImh0bWxFbGVtZW50IiwiaGFuZGxlVXBkYXRlIiwiTm9kZSIsIkVMRU1FTlRfTk9ERSIsImFwcGVuZENoaWxkIiwicmVtb3ZlQXR0cmlidXRlIiwic2Nyb2xsVG9wIiwiX2VuZm9yY2VGb2N1cyIsInNob3duRXZlbnQiLCJ0cmFuc2l0aW9uQ29tcGxldGUiLCJoYXMiLCJfdGhpczUiLCJfdGhpczYiLCJfdGhpczciLCJfcmVzZXRBZGp1c3RtZW50cyIsIl9yZXNldFNjcm9sbGJhciIsIl9yZW1vdmVCYWNrZHJvcCIsImNhbGxiYWNrIiwiX3RoaXM4IiwiYW5pbWF0ZSIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJhcHBlbmRUbyIsImJhY2tkcm9wVHJhbnNpdGlvbkR1cmF0aW9uIiwiY2FsbGJhY2tSZW1vdmUiLCJfYmFja2Ryb3BUcmFuc2l0aW9uRHVyYXRpb24iLCJpc01vZGFsT3ZlcmZsb3dpbmciLCJzY3JvbGxIZWlnaHQiLCJjbGllbnRIZWlnaHQiLCJwYWRkaW5nTGVmdCIsInBhZGRpbmdSaWdodCIsInJlY3QiLCJsZWZ0IiwicmlnaHQiLCJpbm5lcldpZHRoIiwiX2dldFNjcm9sbGJhcldpZHRoIiwiX3RoaXM5IiwiZml4ZWRDb250ZW50Iiwic3RpY2t5Q29udGVudCIsImFjdHVhbFBhZGRpbmciLCJjYWxjdWxhdGVkUGFkZGluZyIsImFjdHVhbE1hcmdpbiIsIm1hcmdpblJpZ2h0IiwiY2FsY3VsYXRlZE1hcmdpbiIsInBhZGRpbmciLCJlbGVtZW50cyIsIm1hcmdpbiIsInNjcm9sbERpdiIsInNjcm9sbGJhcldpZHRoIiwid2lkdGgiLCJjbGllbnRXaWR0aCIsInJlbW92ZUNoaWxkIiwiX3RoaXMxMCIsInVyaUF0dHJzIiwiQVJJQV9BVFRSSUJVVEVfUEFUVEVSTiIsIkRlZmF1bHRXaGl0ZWxpc3QiLCJhIiwiYXJlYSIsImIiLCJiciIsImNvbCIsImNvZGUiLCJkaXYiLCJlbSIsImhyIiwiaDEiLCJoMiIsImgzIiwiaDQiLCJoNSIsImg2IiwiaW1nIiwibGkiLCJvbCIsInAiLCJwcmUiLCJzIiwic21hbGwiLCJzcGFuIiwic3ViIiwic3VwIiwic3Ryb25nIiwidSIsInVsIiwiU0FGRV9VUkxfUEFUVEVSTiIsIkRBVEFfVVJMX1BBVFRFUk4iLCJhbGxvd2VkQXR0cmlidXRlIiwiYWxsb3dlZEF0dHJpYnV0ZUxpc3QiLCJhdHRyTmFtZSIsIm5vZGVOYW1lIiwibm9kZVZhbHVlIiwicmVnRXhwIiwiYXR0clJlZ2V4IiwibCIsInNhbml0aXplSHRtbCIsInVuc2FmZUh0bWwiLCJ3aGl0ZUxpc3QiLCJzYW5pdGl6ZUZuIiwiZG9tUGFyc2VyIiwiRE9NUGFyc2VyIiwiY3JlYXRlZERvY3VtZW50IiwicGFyc2VGcm9tU3RyaW5nIiwid2hpdGVsaXN0S2V5cyIsImtleXMiLCJfbG9vcCIsImVsIiwiZWxOYW1lIiwiYXR0cmlidXRlTGlzdCIsImF0dHJpYnV0ZXMiLCJ3aGl0ZWxpc3RlZEF0dHJpYnV0ZXMiLCJjb25jYXQiLCJfcmV0IiwiaW5uZXJIVE1MIiwiTkFNRSQ2IiwiVkVSU0lPTiQ2IiwiREFUQV9LRVkkNiIsIkVWRU5UX0tFWSQ2IiwiSlFVRVJZX05PX0NPTkZMSUNUJDYiLCJDTEFTU19QUkVGSVgiLCJCU0NMU19QUkVGSVhfUkVHRVgiLCJESVNBTExPV0VEX0FUVFJJQlVURVMiLCJEZWZhdWx0VHlwZSQ0IiwiYW5pbWF0aW9uIiwidGVtcGxhdGUiLCJ0aXRsZSIsImRlbGF5IiwiaHRtbCIsImNvbnRhaW5lciIsImZhbGxiYWNrUGxhY2VtZW50Iiwic2FuaXRpemUiLCJBdHRhY2htZW50TWFwJDEiLCJBVVRPIiwiRGVmYXVsdCQ0IiwiSG92ZXJTdGF0ZSIsIk9VVCIsIkV2ZW50JDYiLCJJTlNFUlRFRCIsIkZPQ1VTT1VUIiwiQ2xhc3NOYW1lJDYiLCJTZWxlY3RvciQ2IiwiVE9PTFRJUCIsIlRPT0xUSVBfSU5ORVIiLCJBUlJPVyIsIlRyaWdnZXIiLCJIT1ZFUiIsIk1BTlVBTCIsIlRvb2x0aXAiLCJfaXNFbmFibGVkIiwiX3RpbWVvdXQiLCJfaG92ZXJTdGF0ZSIsIl9hY3RpdmVUcmlnZ2VyIiwidGlwIiwiX3NldExpc3RlbmVycyIsImVuYWJsZSIsImRpc2FibGUiLCJ0b2dnbGVFbmFibGVkIiwiZGF0YUtleSIsIl9nZXREZWxlZ2F0ZUNvbmZpZyIsImNsaWNrIiwiX2lzV2l0aEFjdGl2ZVRyaWdnZXIiLCJfZW50ZXIiLCJfbGVhdmUiLCJnZXRUaXBFbGVtZW50IiwiaXNXaXRoQ29udGVudCIsInNoYWRvd1Jvb3QiLCJpc0luVGhlRG9tIiwib3duZXJEb2N1bWVudCIsInRpcElkIiwic2V0Q29udGVudCIsImF0dGFjaG1lbnQiLCJfZ2V0QXR0YWNobWVudCIsImFkZEF0dGFjaG1lbnRDbGFzcyIsIl9nZXRDb250YWluZXIiLCJiZWhhdmlvciIsImFycm93Iiwib25DcmVhdGUiLCJvcmlnaW5hbFBsYWNlbWVudCIsIl9oYW5kbGVQb3BwZXJQbGFjZW1lbnRDaGFuZ2UiLCJvblVwZGF0ZSIsIl9maXhUcmFuc2l0aW9uIiwicHJldkhvdmVyU3RhdGUiLCJfY2xlYW5UaXBDbGFzcyIsImdldFRpdGxlIiwic2V0RWxlbWVudENvbnRlbnQiLCJjb250ZW50IiwiZW1wdHkiLCJhcHBlbmQiLCJ0ZXh0IiwiZmluZCIsInRyaWdnZXJzIiwiZXZlbnRJbiIsImV2ZW50T3V0IiwiX2ZpeFRpdGxlIiwidGl0bGVUeXBlIiwiZGF0YUF0dHJpYnV0ZXMiLCJkYXRhQXR0ciIsImtleSIsIiR0aXAiLCJ0YWJDbGFzcyIsImpvaW4iLCJwb3BwZXJEYXRhIiwicG9wcGVySW5zdGFuY2UiLCJpbnN0YW5jZSIsInBvcHBlciIsImluaXRDb25maWdBbmltYXRpb24iLCJOQU1FJDciLCJWRVJTSU9OJDciLCJEQVRBX0tFWSQ3IiwiRVZFTlRfS0VZJDciLCJKUVVFUllfTk9fQ09ORkxJQ1QkNyIsIkNMQVNTX1BSRUZJWCQxIiwiQlNDTFNfUFJFRklYX1JFR0VYJDEiLCJEZWZhdWx0JDUiLCJEZWZhdWx0VHlwZSQ1IiwiQ2xhc3NOYW1lJDciLCJTZWxlY3RvciQ3IiwiVElUTEUiLCJDT05URU5UIiwiRXZlbnQkNyIsIlBvcG92ZXIiLCJfZ2V0Q29udGVudCIsIk5BTUUkOCIsIlZFUlNJT04kOCIsIkRBVEFfS0VZJDgiLCJFVkVOVF9LRVkkOCIsIkRBVEFfQVBJX0tFWSQ2IiwiSlFVRVJZX05PX0NPTkZMSUNUJDgiLCJEZWZhdWx0JDYiLCJtZXRob2QiLCJEZWZhdWx0VHlwZSQ2IiwiRXZlbnQkOCIsIkFDVElWQVRFIiwiU0NST0xMIiwiQ2xhc3NOYW1lJDgiLCJEUk9QRE9XTl9JVEVNIiwiRFJPUERPV05fTUVOVSIsIlNlbGVjdG9yJDgiLCJEQVRBX1NQWSIsIk5BVl9MSVNUX0dST1VQIiwiTkFWX0xJTktTIiwiTkFWX0lURU1TIiwiTElTVF9JVEVNUyIsIkRST1BET1dOIiwiRFJPUERPV05fSVRFTVMiLCJEUk9QRE9XTl9UT0dHTEUiLCJPZmZzZXRNZXRob2QiLCJPRkZTRVQiLCJQT1NJVElPTiIsIlNjcm9sbFNweSIsIl9zY3JvbGxFbGVtZW50IiwiX29mZnNldHMiLCJfdGFyZ2V0cyIsIl9hY3RpdmVUYXJnZXQiLCJfc2Nyb2xsSGVpZ2h0IiwiX3Byb2Nlc3MiLCJyZWZyZXNoIiwiYXV0b01ldGhvZCIsIm9mZnNldE1ldGhvZCIsIm9mZnNldEJhc2UiLCJfZ2V0U2Nyb2xsVG9wIiwiX2dldFNjcm9sbEhlaWdodCIsInRhcmdldHMiLCJtYXAiLCJ0YXJnZXRTZWxlY3RvciIsInRhcmdldEJDUiIsImhlaWdodCIsInRvcCIsIml0ZW0iLCJzb3J0IiwicGFnZVlPZmZzZXQiLCJtYXgiLCJfZ2V0T2Zmc2V0SGVpZ2h0IiwiaW5uZXJIZWlnaHQiLCJtYXhTY3JvbGwiLCJfYWN0aXZhdGUiLCJfY2xlYXIiLCJvZmZzZXRMZW5ndGgiLCJpc0FjdGl2ZVRhcmdldCIsInF1ZXJpZXMiLCIkbGluayIsInBhcmVudHMiLCJub2RlIiwic2Nyb2xsU3B5cyIsInNjcm9sbFNweXNMZW5ndGgiLCIkc3B5IiwiTkFNRSQ5IiwiVkVSU0lPTiQ5IiwiREFUQV9LRVkkOSIsIkVWRU5UX0tFWSQ5IiwiREFUQV9BUElfS0VZJDciLCJKUVVFUllfTk9fQ09ORkxJQ1QkOSIsIkV2ZW50JDkiLCJDbGFzc05hbWUkOSIsIlNlbGVjdG9yJDkiLCJBQ1RJVkVfVUwiLCJEUk9QRE9XTl9BQ1RJVkVfQ0hJTEQiLCJUYWIiLCJwcmV2aW91cyIsImxpc3RFbGVtZW50IiwiaXRlbVNlbGVjdG9yIiwibWFrZUFycmF5IiwiaGlkZGVuRXZlbnQiLCJhY3RpdmVFbGVtZW50cyIsImFjdGl2ZSIsIl90cmFuc2l0aW9uQ29tcGxldGUiLCJkcm9wZG93bkNoaWxkIiwiZHJvcGRvd25FbGVtZW50IiwiZHJvcGRvd25Ub2dnbGVMaXN0IiwiTkFNRSRhIiwiVkVSU0lPTiRhIiwiREFUQV9LRVkkYSIsIkVWRU5UX0tFWSRhIiwiSlFVRVJZX05PX0NPTkZMSUNUJGEiLCJFdmVudCRhIiwiQ2xhc3NOYW1lJGEiLCJTSE9XSU5HIiwiRGVmYXVsdFR5cGUkNyIsImF1dG9oaWRlIiwiRGVmYXVsdCQ3IiwiU2VsZWN0b3IkYSIsIlRvYXN0Iiwid2l0aG91dFRpbWVvdXQiLCJfY2xvc2UiLCJ2ZXJzaW9uIiwibWluTWFqb3IiLCJsdE1ham9yIiwibWluTWlub3IiLCJtaW5QYXRjaCIsIm1heE1ham9yIl0sInNvdXJjZVJvb3QiOiIifQ==