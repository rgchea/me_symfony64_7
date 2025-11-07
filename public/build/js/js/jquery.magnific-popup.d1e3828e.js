(self["webpackChunk"] = self["webpackChunk"] || []).push([["js/jquery.magnific-popup"],{

/***/ "./assets/css/portoadmin/vendor/magnific-popup/jquery.magnific-popup.js":
/*!******************************************************************************!*\
  !*** ./assets/css/portoadmin/vendor/magnific-popup/jquery.magnific-popup.js ***!
  \******************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

/* provided dependency */ var __webpack_provided_window_dot_jQuery = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;__webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
__webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
__webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
__webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");
__webpack_require__(/*! core-js/modules/es.array.index-of.js */ "./node_modules/core-js/modules/es.array.index-of.js");
__webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
__webpack_require__(/*! core-js/modules/es.array.last-index-of.js */ "./node_modules/core-js/modules/es.array.last-index-of.js");
__webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
__webpack_require__(/*! core-js/modules/es.parse-int.js */ "./node_modules/core-js/modules/es.parse-int.js");
__webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
__webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
__webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
__webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
__webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
__webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
/*! Magnific Popup - v1.1.0 - 2016-02-20
* http://dimsemenov.com/plugins/magnific-popup/
* Copyright (c) 2016 Dmitry Semenov; */
;
(function (factory) {
  if (true) {
    // AMD. Register as an anonymous module. 
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else // removed by dead control flow
{}
})(function ($) {
  /*>>core*/
  /**
   * 
   * Magnific Popup Core JS file
   * 
   */

  /**
   * Private static constants
   */
  var CLOSE_EVENT = 'Close',
    BEFORE_CLOSE_EVENT = 'BeforeClose',
    AFTER_CLOSE_EVENT = 'AfterClose',
    BEFORE_APPEND_EVENT = 'BeforeAppend',
    MARKUP_PARSE_EVENT = 'MarkupParse',
    OPEN_EVENT = 'Open',
    CHANGE_EVENT = 'Change',
    NS = 'mfp',
    EVENT_NS = '.' + NS,
    READY_CLASS = 'mfp-ready',
    REMOVING_CLASS = 'mfp-removing',
    PREVENT_CLOSE_CLASS = 'mfp-prevent-close';

  /**
   * Private vars 
   */
  /*jshint -W079 */
  var mfp,
    // As we have only one instance of MagnificPopup object, we define it locally to not to use 'this'
    MagnificPopup = function MagnificPopup() {},
    _isJQ = !!__webpack_provided_window_dot_jQuery,
    _prevStatus,
    _window = $(window),
    _document,
    _prevContentType,
    _wrapClasses,
    _currPopupType;

  /**
   * Private functions
   */
  var _mfpOn = function _mfpOn(name, f) {
      mfp.ev.on(NS + name + EVENT_NS, f);
    },
    _getEl = function _getEl(className, appendTo, html, raw) {
      var el = document.createElement('div');
      el.className = 'mfp-' + className;
      if (html) {
        el.innerHTML = html;
      }
      if (!raw) {
        el = $(el);
        if (appendTo) {
          el.appendTo(appendTo);
        }
      } else if (appendTo) {
        appendTo.appendChild(el);
      }
      return el;
    },
    _mfpTrigger = function _mfpTrigger(e, data) {
      mfp.ev.triggerHandler(NS + e, data);
      if (mfp.st.callbacks) {
        // converts "mfpEventName" to "eventName" callback and triggers it if it's present
        e = e.charAt(0).toLowerCase() + e.slice(1);
        if (mfp.st.callbacks[e]) {
          mfp.st.callbacks[e].apply(mfp, $.isArray(data) ? data : [data]);
        }
      }
    },
    _getCloseBtn = function _getCloseBtn(type) {
      if (type !== _currPopupType || !mfp.currTemplate.closeBtn) {
        mfp.currTemplate.closeBtn = $(mfp.st.closeMarkup.replace('%title%', mfp.st.tClose));
        _currPopupType = type;
      }
      return mfp.currTemplate.closeBtn;
    },
    // Initialize Magnific Popup only when called at least once
    _checkInstance = function _checkInstance() {
      if (!$.magnificPopup.instance) {
        /*jshint -W020 */
        mfp = new MagnificPopup();
        mfp.init();
        $.magnificPopup.instance = mfp;
      }
    },
    // CSS transition detection, http://stackoverflow.com/questions/7264899/detect-css-transitions-using-javascript-and-without-modernizr
    supportsTransitions = function supportsTransitions() {
      var s = document.createElement('p').style,
        // 's' for style. better to create an element if body yet to exist
        v = ['ms', 'O', 'Moz', 'Webkit']; // 'v' for vendor

      if (s['transition'] !== undefined) {
        return true;
      }
      while (v.length) {
        if (v.pop() + 'Transition' in s) {
          return true;
        }
      }
      return false;
    };

  /**
   * Public functions
   */
  MagnificPopup.prototype = {
    constructor: MagnificPopup,
    /**
     * Initializes Magnific Popup plugin. 
     * This function is triggered only once when $.fn.magnificPopup or $.magnificPopup is executed
     */
    init: function init() {
      var appVersion = navigator.appVersion;
      mfp.isLowIE = mfp.isIE8 = document.all && !document.addEventListener;
      mfp.isAndroid = /android/gi.test(appVersion);
      mfp.isIOS = /iphone|ipad|ipod/gi.test(appVersion);
      mfp.supportsTransition = supportsTransitions();

      // We disable fixed positioned lightbox on devices that don't handle it nicely.
      // If you know a better way of detecting this - let me know.
      mfp.probablyMobile = mfp.isAndroid || mfp.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent);
      _document = $(document);
      mfp.popupsCache = {};
    },
    /**
     * Opens popup
     * @param  data [description]
     */
    open: function open(data) {
      var i;
      if (data.isObj === false) {
        // convert jQuery collection to array to avoid conflicts later
        mfp.items = data.items.toArray();
        mfp.index = 0;
        var items = data.items,
          item;
        for (i = 0; i < items.length; i++) {
          item = items[i];
          if (item.parsed) {
            item = item.el[0];
          }
          if (item === data.el[0]) {
            mfp.index = i;
            break;
          }
        }
      } else {
        mfp.items = $.isArray(data.items) ? data.items : [data.items];
        mfp.index = data.index || 0;
      }

      // if popup is already opened - we just update the content
      if (mfp.isOpen) {
        mfp.updateItemHTML();
        return;
      }
      mfp.types = [];
      _wrapClasses = '';
      if (data.mainEl && data.mainEl.length) {
        mfp.ev = data.mainEl.eq(0);
      } else {
        mfp.ev = _document;
      }
      if (data.key) {
        if (!mfp.popupsCache[data.key]) {
          mfp.popupsCache[data.key] = {};
        }
        mfp.currTemplate = mfp.popupsCache[data.key];
      } else {
        mfp.currTemplate = {};
      }
      mfp.st = $.extend(true, {}, $.magnificPopup.defaults, data);
      mfp.fixedContentPos = mfp.st.fixedContentPos === 'auto' ? !mfp.probablyMobile : mfp.st.fixedContentPos;
      if (mfp.st.modal) {
        mfp.st.closeOnContentClick = false;
        mfp.st.closeOnBgClick = false;
        mfp.st.showCloseBtn = false;
        mfp.st.enableEscapeKey = false;
      }

      // Building markup
      // main containers are created only once
      if (!mfp.bgOverlay) {
        // Dark overlay
        mfp.bgOverlay = _getEl('bg').on('click' + EVENT_NS, function () {
          mfp.close();
        });
        mfp.wrap = _getEl('wrap').attr('tabindex', -1).on('click' + EVENT_NS, function (e) {
          if (mfp._checkIfClose(e.target)) {
            mfp.close();
          }
        });
        mfp.container = _getEl('container', mfp.wrap);
      }
      mfp.contentContainer = _getEl('content');
      if (mfp.st.preloader) {
        mfp.preloader = _getEl('preloader', mfp.container, mfp.st.tLoading);
      }

      // Initializing modules
      var modules = $.magnificPopup.modules;
      for (i = 0; i < modules.length; i++) {
        var n = modules[i];
        n = n.charAt(0).toUpperCase() + n.slice(1);
        mfp['init' + n].call(mfp);
      }
      _mfpTrigger('BeforeOpen');
      if (mfp.st.showCloseBtn) {
        // Close button
        if (!mfp.st.closeBtnInside) {
          mfp.wrap.append(_getCloseBtn());
        } else {
          _mfpOn(MARKUP_PARSE_EVENT, function (e, template, values, item) {
            values.close_replaceWith = _getCloseBtn(item.type);
          });
          _wrapClasses += ' mfp-close-btn-in';
        }
      }
      if (mfp.st.alignTop) {
        _wrapClasses += ' mfp-align-top';
      }
      if (mfp.fixedContentPos) {
        mfp.wrap.css({
          overflow: mfp.st.overflowY,
          overflowX: 'hidden',
          overflowY: mfp.st.overflowY
        });
      } else {
        mfp.wrap.css({
          top: _window.scrollTop(),
          position: 'absolute'
        });
      }
      if (mfp.st.fixedBgPos === false || mfp.st.fixedBgPos === 'auto' && !mfp.fixedContentPos) {
        mfp.bgOverlay.css({
          height: _document.height(),
          position: 'absolute'
        });
      }
      if (mfp.st.enableEscapeKey) {
        // Close on ESC key
        _document.on('keyup' + EVENT_NS, function (e) {
          if (e.keyCode === 27) {
            mfp.close();
          }
        });
      }
      _window.on('resize' + EVENT_NS, function () {
        mfp.updateSize();
      });
      if (!mfp.st.closeOnContentClick) {
        _wrapClasses += ' mfp-auto-cursor';
      }
      if (_wrapClasses) mfp.wrap.addClass(_wrapClasses);

      // this triggers recalculation of layout, so we get it once to not to trigger twice
      var windowHeight = mfp.wH = _window.height();
      var windowStyles = {};
      if (mfp.fixedContentPos) {
        if (mfp._hasScrollBar(windowHeight)) {
          var s = mfp._getScrollbarSize();
          if (s) {
            windowStyles.marginRight = s;
          }
        }
      }
      if (mfp.fixedContentPos) {
        if (!mfp.isIE7) {
          windowStyles.overflow = 'hidden';
        } else {
          // ie7 double-scroll bug
          $('body, html').css('overflow', 'hidden');
        }
      }
      var classesToadd = mfp.st.mainClass;
      if (mfp.isIE7) {
        classesToadd += ' mfp-ie7';
      }
      if (classesToadd) {
        mfp._addClassToMFP(classesToadd);
      }

      // add content
      mfp.updateItemHTML();
      _mfpTrigger('BuildControls');

      // remove scrollbar, add margin e.t.c
      $('html').css(windowStyles);

      // add everything to DOM
      mfp.bgOverlay.add(mfp.wrap).prependTo(mfp.st.prependTo || $(document.body));

      // Save last focused element
      mfp._lastFocusedEl = document.activeElement;

      // Wait for next cycle to allow CSS transition
      setTimeout(function () {
        if (mfp.content) {
          mfp._addClassToMFP(READY_CLASS);
          mfp._setFocus();
        } else {
          // if content is not defined (not loaded e.t.c) we add class only for BG
          mfp.bgOverlay.addClass(READY_CLASS);
        }

        // Trap the focus in popup
        _document.on('focusin' + EVENT_NS, mfp._onFocusIn);
      }, 16);
      mfp.isOpen = true;
      mfp.updateSize(windowHeight);
      _mfpTrigger(OPEN_EVENT);
      return data;
    },
    /**
     * Closes the popup
     */
    close: function close() {
      if (!mfp.isOpen) return;
      _mfpTrigger(BEFORE_CLOSE_EVENT);
      mfp.isOpen = false;
      // for CSS3 animation
      if (mfp.st.removalDelay && !mfp.isLowIE && mfp.supportsTransition) {
        mfp._addClassToMFP(REMOVING_CLASS);
        setTimeout(function () {
          mfp._close();
        }, mfp.st.removalDelay);
      } else {
        mfp._close();
      }
    },
    /**
     * Helper for close() function
     */
    _close: function _close() {
      _mfpTrigger(CLOSE_EVENT);
      var classesToRemove = REMOVING_CLASS + ' ' + READY_CLASS + ' ';
      mfp.bgOverlay.detach();
      mfp.wrap.detach();
      mfp.container.empty();
      if (mfp.st.mainClass) {
        classesToRemove += mfp.st.mainClass + ' ';
      }
      mfp._removeClassFromMFP(classesToRemove);
      if (mfp.fixedContentPos) {
        var windowStyles = {
          marginRight: ''
        };
        if (mfp.isIE7) {
          $('body, html').css('overflow', '');
        } else {
          windowStyles.overflow = '';
        }
        $('html').css(windowStyles);
      }
      _document.off('keyup' + EVENT_NS + ' focusin' + EVENT_NS);
      mfp.ev.off(EVENT_NS);

      // clean up DOM elements that aren't removed
      mfp.wrap.attr('class', 'mfp-wrap').removeAttr('style');
      mfp.bgOverlay.attr('class', 'mfp-bg');
      mfp.container.attr('class', 'mfp-container');

      // remove close button from target element
      if (mfp.st.showCloseBtn && (!mfp.st.closeBtnInside || mfp.currTemplate[mfp.currItem.type] === true)) {
        if (mfp.currTemplate.closeBtn) mfp.currTemplate.closeBtn.detach();
      }
      if (mfp.st.autoFocusLast && mfp._lastFocusedEl) {
        $(mfp._lastFocusedEl).focus(); // put tab focus back
      }
      mfp.currItem = null;
      mfp.content = null;
      mfp.currTemplate = null;
      mfp.prevHeight = 0;
      _mfpTrigger(AFTER_CLOSE_EVENT);
    },
    updateSize: function updateSize(winHeight) {
      if (mfp.isIOS) {
        // fixes iOS nav bars https://github.com/dimsemenov/Magnific-Popup/issues/2
        var zoomLevel = document.documentElement.clientWidth / window.innerWidth;
        var height = window.innerHeight * zoomLevel;
        mfp.wrap.css('height', height);
        mfp.wH = height;
      } else {
        mfp.wH = winHeight || _window.height();
      }
      // Fixes #84: popup incorrectly positioned with position:relative on body
      if (!mfp.fixedContentPos) {
        mfp.wrap.css('height', mfp.wH);
      }
      _mfpTrigger('Resize');
    },
    /**
     * Set content of popup based on current index
     */
    updateItemHTML: function updateItemHTML() {
      var item = mfp.items[mfp.index];

      // Detach and perform modifications
      mfp.contentContainer.detach();
      if (mfp.content) mfp.content.detach();
      if (!item.parsed) {
        item = mfp.parseEl(mfp.index);
      }
      var type = item.type;
      _mfpTrigger('BeforeChange', [mfp.currItem ? mfp.currItem.type : '', type]);
      // BeforeChange event works like so:
      // _mfpOn('BeforeChange', function(e, prevType, newType) { });

      mfp.currItem = item;
      if (!mfp.currTemplate[type]) {
        var markup = mfp.st[type] ? mfp.st[type].markup : false;

        // allows to modify markup
        _mfpTrigger('FirstMarkupParse', markup);
        if (markup) {
          mfp.currTemplate[type] = $(markup);
        } else {
          // if there is no markup found we just define that template is parsed
          mfp.currTemplate[type] = true;
        }
      }
      if (_prevContentType && _prevContentType !== item.type) {
        mfp.container.removeClass('mfp-' + _prevContentType + '-holder');
      }
      var newContent = mfp['get' + type.charAt(0).toUpperCase() + type.slice(1)](item, mfp.currTemplate[type]);
      mfp.appendContent(newContent, type);
      item.preloaded = true;
      _mfpTrigger(CHANGE_EVENT, item);
      _prevContentType = item.type;

      // Append container back after its content changed
      mfp.container.prepend(mfp.contentContainer);
      _mfpTrigger('AfterChange');
    },
    /**
     * Set HTML content of popup
     */
    appendContent: function appendContent(newContent, type) {
      mfp.content = newContent;
      if (newContent) {
        if (mfp.st.showCloseBtn && mfp.st.closeBtnInside && mfp.currTemplate[type] === true) {
          // if there is no markup, we just append close button element inside
          if (!mfp.content.find('.mfp-close').length) {
            mfp.content.append(_getCloseBtn());
          }
        } else {
          mfp.content = newContent;
        }
      } else {
        mfp.content = '';
      }
      _mfpTrigger(BEFORE_APPEND_EVENT);
      mfp.container.addClass('mfp-' + type + '-holder');
      mfp.contentContainer.append(mfp.content);
    },
    /**
     * Creates Magnific Popup data object based on given data
     * @param  {int} index Index of item to parse
     */
    parseEl: function parseEl(index) {
      var item = mfp.items[index],
        type;
      if (item.tagName) {
        item = {
          el: $(item)
        };
      } else {
        type = item.type;
        item = {
          data: item,
          src: item.src
        };
      }
      if (item.el) {
        var types = mfp.types;

        // check for 'mfp-TYPE' class
        for (var i = 0; i < types.length; i++) {
          if (item.el.hasClass('mfp-' + types[i])) {
            type = types[i];
            break;
          }
        }
        item.src = item.el.attr('data-mfp-src');
        if (!item.src) {
          item.src = item.el.attr('href');
        }
      }
      item.type = type || mfp.st.type || 'inline';
      item.index = index;
      item.parsed = true;
      mfp.items[index] = item;
      _mfpTrigger('ElementParse', item);
      return mfp.items[index];
    },
    /**
     * Initializes single popup or a group of popups
     */
    addGroup: function addGroup(el, options) {
      var eHandler = function eHandler(e) {
        e.mfpEl = this;
        mfp._openClick(e, el, options);
      };
      if (!options) {
        options = {};
      }
      var eName = 'click.magnificPopup';
      options.mainEl = el;
      if (options.items) {
        options.isObj = true;
        el.off(eName).on(eName, eHandler);
      } else {
        options.isObj = false;
        if (options.delegate) {
          el.off(eName).on(eName, options.delegate, eHandler);
        } else {
          options.items = el;
          el.off(eName).on(eName, eHandler);
        }
      }
    },
    _openClick: function _openClick(e, el, options) {
      var midClick = options.midClick !== undefined ? options.midClick : $.magnificPopup.defaults.midClick;
      if (!midClick && (e.which === 2 || e.ctrlKey || e.metaKey || e.altKey || e.shiftKey)) {
        return;
      }
      var disableOn = options.disableOn !== undefined ? options.disableOn : $.magnificPopup.defaults.disableOn;
      if (disableOn) {
        if ($.isFunction(disableOn)) {
          if (!disableOn.call(mfp)) {
            return true;
          }
        } else {
          // else it's number
          if (_window.width() < disableOn) {
            return true;
          }
        }
      }
      if (e.type) {
        e.preventDefault();

        // This will prevent popup from closing if element is inside and popup is already opened
        if (mfp.isOpen) {
          e.stopPropagation();
        }
      }
      options.el = $(e.mfpEl);
      if (options.delegate) {
        options.items = el.find(options.delegate);
      }
      mfp.open(options);
    },
    /**
     * Updates text on preloader
     */
    updateStatus: function updateStatus(status, text) {
      if (mfp.preloader) {
        if (_prevStatus !== status) {
          mfp.container.removeClass('mfp-s-' + _prevStatus);
        }
        if (!text && status === 'loading') {
          text = mfp.st.tLoading;
        }
        var data = {
          status: status,
          text: text
        };
        // allows to modify status
        _mfpTrigger('UpdateStatus', data);
        status = data.status;
        text = data.text;
        mfp.preloader.html(text);
        mfp.preloader.find('a').on('click', function (e) {
          e.stopImmediatePropagation();
        });
        mfp.container.addClass('mfp-s-' + status);
        _prevStatus = status;
      }
    },
    /*
    	"Private" helpers that aren't private at all
     */
    // Check to close popup or not
    // "target" is an element that was clicked
    _checkIfClose: function _checkIfClose(target) {
      if ($(target).hasClass(PREVENT_CLOSE_CLASS)) {
        return;
      }
      var closeOnContent = mfp.st.closeOnContentClick;
      var closeOnBg = mfp.st.closeOnBgClick;
      if (closeOnContent && closeOnBg) {
        return true;
      } else {
        // We close the popup if click is on close button or on preloader. Or if there is no content.
        if (!mfp.content || $(target).hasClass('mfp-close') || mfp.preloader && target === mfp.preloader[0]) {
          return true;
        }

        // if click is outside the content
        if (target !== mfp.content[0] && !$.contains(mfp.content[0], target)) {
          if (closeOnBg) {
            // last check, if the clicked element is in DOM, (in case it's removed onclick)
            if ($.contains(document, target)) {
              return true;
            }
          }
        } else if (closeOnContent) {
          return true;
        }
      }
      return false;
    },
    _addClassToMFP: function _addClassToMFP(cName) {
      mfp.bgOverlay.addClass(cName);
      mfp.wrap.addClass(cName);
    },
    _removeClassFromMFP: function _removeClassFromMFP(cName) {
      this.bgOverlay.removeClass(cName);
      mfp.wrap.removeClass(cName);
    },
    _hasScrollBar: function _hasScrollBar(winHeight) {
      return (mfp.isIE7 ? _document.height() : document.body.scrollHeight) > (winHeight || _window.height());
    },
    _setFocus: function _setFocus() {
      (mfp.st.focus ? mfp.content.find(mfp.st.focus).eq(0) : mfp.wrap).focus();
    },
    _onFocusIn: function _onFocusIn(e) {
      if (e.target !== mfp.wrap[0] && !$.contains(mfp.wrap[0], e.target)) {
        mfp._setFocus();
        return false;
      }
    },
    _parseMarkup: function _parseMarkup(template, values, item) {
      var arr;
      if (item.data) {
        values = $.extend(item.data, values);
      }
      _mfpTrigger(MARKUP_PARSE_EVENT, [template, values, item]);
      $.each(values, function (key, value) {
        if (value === undefined || value === false) {
          return true;
        }
        arr = key.split('_');
        if (arr.length > 1) {
          var el = template.find(EVENT_NS + '-' + arr[0]);
          if (el.length > 0) {
            var attr = arr[1];
            if (attr === 'replaceWith') {
              if (el[0] !== value[0]) {
                el.replaceWith(value);
              }
            } else if (attr === 'img') {
              if (el.is('img')) {
                el.attr('src', value);
              } else {
                el.replaceWith($('<img>').attr('src', value).attr('class', el.attr('class')));
              }
            } else {
              el.attr(arr[1], value);
            }
          }
        } else {
          template.find(EVENT_NS + '-' + key).html(value);
        }
      });
    },
    _getScrollbarSize: function _getScrollbarSize() {
      // thx David
      if (mfp.scrollbarSize === undefined) {
        var scrollDiv = document.createElement("div");
        scrollDiv.style.cssText = 'width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;';
        document.body.appendChild(scrollDiv);
        mfp.scrollbarSize = scrollDiv.offsetWidth - scrollDiv.clientWidth;
        document.body.removeChild(scrollDiv);
      }
      return mfp.scrollbarSize;
    }
  }; /* MagnificPopup core prototype end */

  /**
   * Public static functions
   */
  $.magnificPopup = {
    instance: null,
    proto: MagnificPopup.prototype,
    modules: [],
    open: function open(options, index) {
      _checkInstance();
      if (!options) {
        options = {};
      } else {
        options = $.extend(true, {}, options);
      }
      options.isObj = true;
      options.index = index || 0;
      return this.instance.open(options);
    },
    close: function close() {
      return $.magnificPopup.instance && $.magnificPopup.instance.close();
    },
    registerModule: function registerModule(name, module) {
      if (module.options) {
        $.magnificPopup.defaults[name] = module.options;
      }
      $.extend(this.proto, module.proto);
      this.modules.push(name);
    },
    defaults: {
      // Info about options is in docs:
      // http://dimsemenov.com/plugins/magnific-popup/documentation.html#options

      disableOn: 0,
      key: null,
      midClick: false,
      mainClass: '',
      preloader: true,
      focus: '',
      // CSS selector of input to focus after popup is opened

      closeOnContentClick: false,
      closeOnBgClick: true,
      closeBtnInside: true,
      showCloseBtn: true,
      enableEscapeKey: true,
      modal: false,
      alignTop: false,
      removalDelay: 0,
      prependTo: null,
      fixedContentPos: 'auto',
      fixedBgPos: 'auto',
      overflowY: 'auto',
      closeMarkup: '<button title="%title%" type="button" class="mfp-close">&#215;</button>',
      tClose: 'Close (Esc)',
      tLoading: 'Loading...',
      autoFocusLast: true
    }
  };
  $.fn.magnificPopup = function (options) {
    _checkInstance();
    var jqEl = $(this);

    // We call some API method of first param is a string
    if (typeof options === "string") {
      if (options === 'open') {
        var items,
          itemOpts = _isJQ ? jqEl.data('magnificPopup') : jqEl[0].magnificPopup,
          index = parseInt(arguments[1], 10) || 0;
        if (itemOpts.items) {
          items = itemOpts.items[index];
        } else {
          items = jqEl;
          if (itemOpts.delegate) {
            items = items.find(itemOpts.delegate);
          }
          items = items.eq(index);
        }
        mfp._openClick({
          mfpEl: items
        }, jqEl, itemOpts);
      } else {
        if (mfp.isOpen) mfp[options].apply(mfp, Array.prototype.slice.call(arguments, 1));
      }
    } else {
      // clone options obj
      options = $.extend(true, {}, options);

      /*
       * As Zepto doesn't support .data() method for objects
       * and it works only in normal browsers
       * we assign "options" object directly to the DOM element. FTW!
       */
      if (_isJQ) {
        jqEl.data('magnificPopup', options);
      } else {
        jqEl[0].magnificPopup = options;
      }
      mfp.addGroup(jqEl, options);
    }
    return jqEl;
  };

  /*>>core*/

  /*>>inline*/

  var INLINE_NS = 'inline',
    _hiddenClass,
    _inlinePlaceholder,
    _lastInlineElement,
    _putInlineElementsBack = function _putInlineElementsBack() {
      if (_lastInlineElement) {
        _inlinePlaceholder.after(_lastInlineElement.addClass(_hiddenClass)).detach();
        _lastInlineElement = null;
      }
    };
  $.magnificPopup.registerModule(INLINE_NS, {
    options: {
      hiddenClass: 'hide',
      // will be appended with `mfp-` prefix
      markup: '',
      tNotFound: 'Content not found'
    },
    proto: {
      initInline: function initInline() {
        mfp.types.push(INLINE_NS);
        _mfpOn(CLOSE_EVENT + '.' + INLINE_NS, function () {
          _putInlineElementsBack();
        });
      },
      getInline: function getInline(item, template) {
        _putInlineElementsBack();
        if (item.src) {
          var inlineSt = mfp.st.inline,
            el = $(item.src);
          if (el.length) {
            // If target element has parent - we replace it with placeholder and put it back after popup is closed
            var parent = el[0].parentNode;
            if (parent && parent.tagName) {
              if (!_inlinePlaceholder) {
                _hiddenClass = inlineSt.hiddenClass;
                _inlinePlaceholder = _getEl(_hiddenClass);
                _hiddenClass = 'mfp-' + _hiddenClass;
              }
              // replace target inline element with placeholder
              _lastInlineElement = el.after(_inlinePlaceholder).detach().removeClass(_hiddenClass);
            }
            mfp.updateStatus('ready');
          } else {
            mfp.updateStatus('error', inlineSt.tNotFound);
            el = $('<div>');
          }
          item.inlineElement = el;
          return el;
        }
        mfp.updateStatus('ready');
        mfp._parseMarkup(template, {}, item);
        return template;
      }
    }
  });

  /*>>inline*/

  /*>>ajax*/
  var AJAX_NS = 'ajax',
    _ajaxCur,
    _removeAjaxCursor = function _removeAjaxCursor() {
      if (_ajaxCur) {
        $(document.body).removeClass(_ajaxCur);
      }
    },
    _destroyAjaxRequest = function _destroyAjaxRequest() {
      _removeAjaxCursor();
      if (mfp.req) {
        mfp.req.abort();
      }
    };
  $.magnificPopup.registerModule(AJAX_NS, {
    options: {
      settings: null,
      cursor: 'mfp-ajax-cur',
      tError: '<a href="%url%">The content</a> could not be loaded.'
    },
    proto: {
      initAjax: function initAjax() {
        mfp.types.push(AJAX_NS);
        _ajaxCur = mfp.st.ajax.cursor;
        _mfpOn(CLOSE_EVENT + '.' + AJAX_NS, _destroyAjaxRequest);
        _mfpOn('BeforeChange.' + AJAX_NS, _destroyAjaxRequest);
      },
      getAjax: function getAjax(item) {
        if (_ajaxCur) {
          $(document.body).addClass(_ajaxCur);
        }
        mfp.updateStatus('loading');
        var opts = $.extend({
          url: item.src,
          success: function success(data, textStatus, jqXHR) {
            var temp = {
              data: data,
              xhr: jqXHR
            };
            _mfpTrigger('ParseAjax', temp);
            mfp.appendContent($(temp.data), AJAX_NS);
            item.finished = true;
            _removeAjaxCursor();
            mfp._setFocus();
            setTimeout(function () {
              mfp.wrap.addClass(READY_CLASS);
            }, 16);
            mfp.updateStatus('ready');
            _mfpTrigger('AjaxContentAdded');
          },
          error: function error() {
            _removeAjaxCursor();
            item.finished = item.loadError = true;
            mfp.updateStatus('error', mfp.st.ajax.tError.replace('%url%', item.src));
          }
        }, mfp.st.ajax.settings);
        mfp.req = $.ajax(opts);
        return '';
      }
    }
  });

  /*>>ajax*/

  /*>>image*/
  var _imgInterval,
    _getTitle = function _getTitle(item) {
      if (item.data && item.data.title !== undefined) return item.data.title;
      var src = mfp.st.image.titleSrc;
      if (src) {
        if ($.isFunction(src)) {
          return src.call(mfp, item);
        } else if (item.el) {
          return item.el.attr(src) || '';
        }
      }
      return '';
    };
  $.magnificPopup.registerModule('image', {
    options: {
      markup: '<div class="mfp-figure">' + '<div class="mfp-close"></div>' + '<figure>' + '<div class="mfp-img"></div>' + '<figcaption>' + '<div class="mfp-bottom-bar">' + '<div class="mfp-title"></div>' + '<div class="mfp-counter"></div>' + '</div>' + '</figcaption>' + '</figure>' + '</div>',
      cursor: 'mfp-zoom-out-cur',
      titleSrc: 'title',
      verticalFit: true,
      tError: '<a href="%url%">The image</a> could not be loaded.'
    },
    proto: {
      initImage: function initImage() {
        var imgSt = mfp.st.image,
          ns = '.image';
        mfp.types.push('image');
        _mfpOn(OPEN_EVENT + ns, function () {
          if (mfp.currItem.type === 'image' && imgSt.cursor) {
            $(document.body).addClass(imgSt.cursor);
          }
        });
        _mfpOn(CLOSE_EVENT + ns, function () {
          if (imgSt.cursor) {
            $(document.body).removeClass(imgSt.cursor);
          }
          _window.off('resize' + EVENT_NS);
        });
        _mfpOn('Resize' + ns, mfp.resizeImage);
        if (mfp.isLowIE) {
          _mfpOn('AfterChange', mfp.resizeImage);
        }
      },
      resizeImage: function resizeImage() {
        var item = mfp.currItem;
        if (!item || !item.img) return;
        if (mfp.st.image.verticalFit) {
          var decr = 0;
          // fix box-sizing in ie7/8
          if (mfp.isLowIE) {
            decr = parseInt(item.img.css('padding-top'), 10) + parseInt(item.img.css('padding-bottom'), 10);
          }
          item.img.css('max-height', mfp.wH - decr);
        }
      },
      _onImageHasSize: function _onImageHasSize(item) {
        if (item.img) {
          item.hasSize = true;
          if (_imgInterval) {
            clearInterval(_imgInterval);
          }
          item.isCheckingImgSize = false;
          _mfpTrigger('ImageHasSize', item);
          if (item.imgHidden) {
            if (mfp.content) mfp.content.removeClass('mfp-loading');
            item.imgHidden = false;
          }
        }
      },
      /**
       * Function that loops until the image has size to display elements that rely on it asap
       */
      findImageSize: function findImageSize(item) {
        var counter = 0,
          img = item.img[0],
          _mfpSetInterval = function mfpSetInterval(delay) {
            if (_imgInterval) {
              clearInterval(_imgInterval);
            }
            // decelerating interval that checks for size of an image
            _imgInterval = setInterval(function () {
              if (img.naturalWidth > 0) {
                mfp._onImageHasSize(item);
                return;
              }
              if (counter > 200) {
                clearInterval(_imgInterval);
              }
              counter++;
              if (counter === 3) {
                _mfpSetInterval(10);
              } else if (counter === 40) {
                _mfpSetInterval(50);
              } else if (counter === 100) {
                _mfpSetInterval(500);
              }
            }, delay);
          };
        _mfpSetInterval(1);
      },
      getImage: function getImage(item, template) {
        var guard = 0,
          // image load complete handler
          _onLoadComplete = function onLoadComplete() {
            if (item) {
              if (item.img[0].complete) {
                item.img.off('.mfploader');
                if (item === mfp.currItem) {
                  mfp._onImageHasSize(item);
                  mfp.updateStatus('ready');
                }
                item.hasSize = true;
                item.loaded = true;
                _mfpTrigger('ImageLoadComplete');
              } else {
                // if image complete check fails 200 times (20 sec), we assume that there was an error.
                guard++;
                if (guard < 200) {
                  setTimeout(_onLoadComplete, 100);
                } else {
                  onLoadError();
                }
              }
            }
          },
          // image error handler
          onLoadError = function onLoadError() {
            if (item) {
              item.img.off('.mfploader');
              if (item === mfp.currItem) {
                mfp._onImageHasSize(item);
                mfp.updateStatus('error', imgSt.tError.replace('%url%', item.src));
              }
              item.hasSize = true;
              item.loaded = true;
              item.loadError = true;
            }
          },
          imgSt = mfp.st.image;
        var el = template.find('.mfp-img');
        if (el.length) {
          var img = document.createElement('img');
          img.className = 'mfp-img';
          if (item.el && item.el.find('img').length) {
            img.alt = item.el.find('img').attr('alt');
          }
          item.img = $(img).on('load.mfploader', _onLoadComplete).on('error.mfploader', onLoadError);
          img.src = item.src;

          // without clone() "error" event is not firing when IMG is replaced by new IMG
          // TODO: find a way to avoid such cloning
          if (el.is('img')) {
            item.img = item.img.clone();
          }
          img = item.img[0];
          if (img.naturalWidth > 0) {
            item.hasSize = true;
          } else if (!img.width) {
            item.hasSize = false;
          }
        }
        mfp._parseMarkup(template, {
          title: _getTitle(item),
          img_replaceWith: item.img
        }, item);
        mfp.resizeImage();
        if (item.hasSize) {
          if (_imgInterval) clearInterval(_imgInterval);
          if (item.loadError) {
            template.addClass('mfp-loading');
            mfp.updateStatus('error', imgSt.tError.replace('%url%', item.src));
          } else {
            template.removeClass('mfp-loading');
            mfp.updateStatus('ready');
          }
          return template;
        }
        mfp.updateStatus('loading');
        item.loading = true;
        if (!item.hasSize) {
          item.imgHidden = true;
          template.addClass('mfp-loading');
          mfp.findImageSize(item);
        }
        return template;
      }
    }
  });

  /*>>image*/

  /*>>zoom*/
  var hasMozTransform,
    getHasMozTransform = function getHasMozTransform() {
      if (hasMozTransform === undefined) {
        hasMozTransform = document.createElement('p').style.MozTransform !== undefined;
      }
      return hasMozTransform;
    };
  $.magnificPopup.registerModule('zoom', {
    options: {
      enabled: false,
      easing: 'ease-in-out',
      duration: 300,
      opener: function opener(element) {
        return element.is('img') ? element : element.find('img');
      }
    },
    proto: {
      initZoom: function initZoom() {
        var zoomSt = mfp.st.zoom,
          ns = '.zoom',
          image;
        if (!zoomSt.enabled || !mfp.supportsTransition) {
          return;
        }
        var duration = zoomSt.duration,
          getElToAnimate = function getElToAnimate(image) {
            var newImg = image.clone().removeAttr('style').removeAttr('class').addClass('mfp-animated-image'),
              transition = 'all ' + zoomSt.duration / 1000 + 's ' + zoomSt.easing,
              cssObj = {
                position: 'fixed',
                zIndex: 9999,
                left: 0,
                top: 0,
                '-webkit-backface-visibility': 'hidden'
              },
              t = 'transition';
            cssObj['-webkit-' + t] = cssObj['-moz-' + t] = cssObj['-o-' + t] = cssObj[t] = transition;
            newImg.css(cssObj);
            return newImg;
          },
          showMainContent = function showMainContent() {
            mfp.content.css('visibility', 'visible');
          },
          openTimeout,
          animatedImg;
        _mfpOn('BuildControls' + ns, function () {
          if (mfp._allowZoom()) {
            clearTimeout(openTimeout);
            mfp.content.css('visibility', 'hidden');

            // Basically, all code below does is clones existing image, puts in on top of the current one and animated it

            image = mfp._getItemToZoom();
            if (!image) {
              showMainContent();
              return;
            }
            animatedImg = getElToAnimate(image);
            animatedImg.css(mfp._getOffset());
            mfp.wrap.append(animatedImg);
            openTimeout = setTimeout(function () {
              animatedImg.css(mfp._getOffset(true));
              openTimeout = setTimeout(function () {
                showMainContent();
                setTimeout(function () {
                  animatedImg.remove();
                  image = animatedImg = null;
                  _mfpTrigger('ZoomAnimationEnded');
                }, 16); // avoid blink when switching images
              }, duration); // this timeout equals animation duration
            }, 16); // by adding this timeout we avoid short glitch at the beginning of animation

            // Lots of timeouts...
          }
        });
        _mfpOn(BEFORE_CLOSE_EVENT + ns, function () {
          if (mfp._allowZoom()) {
            clearTimeout(openTimeout);
            mfp.st.removalDelay = duration;
            if (!image) {
              image = mfp._getItemToZoom();
              if (!image) {
                return;
              }
              animatedImg = getElToAnimate(image);
            }
            animatedImg.css(mfp._getOffset(true));
            mfp.wrap.append(animatedImg);
            mfp.content.css('visibility', 'hidden');
            setTimeout(function () {
              animatedImg.css(mfp._getOffset());
            }, 16);
          }
        });
        _mfpOn(CLOSE_EVENT + ns, function () {
          if (mfp._allowZoom()) {
            showMainContent();
            if (animatedImg) {
              animatedImg.remove();
            }
            image = null;
          }
        });
      },
      _allowZoom: function _allowZoom() {
        return mfp.currItem.type === 'image';
      },
      _getItemToZoom: function _getItemToZoom() {
        if (mfp.currItem.hasSize) {
          return mfp.currItem.img;
        } else {
          return false;
        }
      },
      // Get element postion relative to viewport
      _getOffset: function _getOffset(isLarge) {
        var el;
        if (isLarge) {
          el = mfp.currItem.img;
        } else {
          el = mfp.st.zoom.opener(mfp.currItem.el || mfp.currItem);
        }
        var offset = el.offset();
        var paddingTop = parseInt(el.css('padding-top'), 10);
        var paddingBottom = parseInt(el.css('padding-bottom'), 10);
        offset.top -= $(window).scrollTop() - paddingTop;

        /*
        	Animating left + top + width/height looks glitchy in Firefox, but perfect in Chrome. And vice-versa.
        	 */
        var obj = {
          width: el.width(),
          // fix Zepto height+padding issue
          height: (_isJQ ? el.innerHeight() : el[0].offsetHeight) - paddingBottom - paddingTop
        };

        // I hate to do this, but there is no another option
        if (getHasMozTransform()) {
          obj['-moz-transform'] = obj['transform'] = 'translate(' + offset.left + 'px,' + offset.top + 'px)';
        } else {
          obj.left = offset.left;
          obj.top = offset.top;
        }
        return obj;
      }
    }
  });

  /*>>zoom*/

  /*>>iframe*/

  var IFRAME_NS = 'iframe',
    _emptyPage = '//about:blank',
    _fixIframeBugs = function _fixIframeBugs(isShowing) {
      if (mfp.currTemplate[IFRAME_NS]) {
        var el = mfp.currTemplate[IFRAME_NS].find('iframe');
        if (el.length) {
          // reset src after the popup is closed to avoid "video keeps playing after popup is closed" bug
          if (!isShowing) {
            el[0].src = _emptyPage;
          }

          // IE8 black screen bug fix
          if (mfp.isIE8) {
            el.css('display', isShowing ? 'block' : 'none');
          }
        }
      }
    };
  $.magnificPopup.registerModule(IFRAME_NS, {
    options: {
      markup: '<div class="mfp-iframe-scaler">' + '<div class="mfp-close"></div>' + '<iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe>' + '</div>',
      srcAction: 'iframe_src',
      // we don't care and support only one default type of URL by default
      patterns: {
        youtube: {
          index: 'youtube.com',
          id: 'v=',
          src: '//www.youtube.com/embed/%id%?autoplay=1'
        },
        vimeo: {
          index: 'vimeo.com/',
          id: '/',
          src: '//player.vimeo.com/video/%id%?autoplay=1'
        },
        gmaps: {
          index: '//maps.google.',
          src: '%id%&output=embed'
        }
      }
    },
    proto: {
      initIframe: function initIframe() {
        mfp.types.push(IFRAME_NS);
        _mfpOn('BeforeChange', function (e, prevType, newType) {
          if (prevType !== newType) {
            if (prevType === IFRAME_NS) {
              _fixIframeBugs(); // iframe if removed
            } else if (newType === IFRAME_NS) {
              _fixIframeBugs(true); // iframe is showing
            }
          } // else {
          // iframe source is switched, don't do anything
          //}
        });
        _mfpOn(CLOSE_EVENT + '.' + IFRAME_NS, function () {
          _fixIframeBugs();
        });
      },
      getIframe: function getIframe(item, template) {
        var embedSrc = item.src;
        var iframeSt = mfp.st.iframe;
        $.each(iframeSt.patterns, function () {
          if (embedSrc.indexOf(this.index) > -1) {
            if (this.id) {
              if (typeof this.id === 'string') {
                embedSrc = embedSrc.substr(embedSrc.lastIndexOf(this.id) + this.id.length, embedSrc.length);
              } else {
                embedSrc = this.id.call(this, embedSrc);
              }
            }
            embedSrc = this.src.replace('%id%', embedSrc);
            return false; // break;
          }
        });
        var dataObj = {};
        if (iframeSt.srcAction) {
          dataObj[iframeSt.srcAction] = embedSrc;
        }
        mfp._parseMarkup(template, dataObj, item);
        mfp.updateStatus('ready');
        return template;
      }
    }
  });

  /*>>iframe*/

  /*>>gallery*/
  /**
   * Get looped index depending on number of slides
   */
  var _getLoopedId = function _getLoopedId(index) {
      var numSlides = mfp.items.length;
      if (index > numSlides - 1) {
        return index - numSlides;
      } else if (index < 0) {
        return numSlides + index;
      }
      return index;
    },
    _replaceCurrTotal = function _replaceCurrTotal(text, curr, total) {
      return text.replace(/%curr%/gi, curr + 1).replace(/%total%/gi, total);
    };
  $.magnificPopup.registerModule('gallery', {
    options: {
      enabled: false,
      arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
      preload: [0, 2],
      navigateByImgClick: true,
      arrows: true,
      tPrev: 'Previous (Left arrow key)',
      tNext: 'Next (Right arrow key)',
      tCounter: '%curr% of %total%'
    },
    proto: {
      initGallery: function initGallery() {
        var gSt = mfp.st.gallery,
          ns = '.mfp-gallery';
        mfp.direction = true; // true - next, false - prev

        if (!gSt || !gSt.enabled) return false;
        _wrapClasses += ' mfp-gallery';
        _mfpOn(OPEN_EVENT + ns, function () {
          if (gSt.navigateByImgClick) {
            mfp.wrap.on('click' + ns, '.mfp-img', function () {
              if (mfp.items.length > 1) {
                mfp.next();
                return false;
              }
            });
          }
          _document.on('keydown' + ns, function (e) {
            if (e.keyCode === 37) {
              mfp.prev();
            } else if (e.keyCode === 39) {
              mfp.next();
            }
          });
        });
        _mfpOn('UpdateStatus' + ns, function (e, data) {
          if (data.text) {
            data.text = _replaceCurrTotal(data.text, mfp.currItem.index, mfp.items.length);
          }
        });
        _mfpOn(MARKUP_PARSE_EVENT + ns, function (e, element, values, item) {
          var l = mfp.items.length;
          values.counter = l > 1 ? _replaceCurrTotal(gSt.tCounter, item.index, l) : '';
        });
        _mfpOn('BuildControls' + ns, function () {
          if (mfp.items.length > 1 && gSt.arrows && !mfp.arrowLeft) {
            var markup = gSt.arrowMarkup,
              arrowLeft = mfp.arrowLeft = $(markup.replace(/%title%/gi, gSt.tPrev).replace(/%dir%/gi, 'left')).addClass(PREVENT_CLOSE_CLASS),
              arrowRight = mfp.arrowRight = $(markup.replace(/%title%/gi, gSt.tNext).replace(/%dir%/gi, 'right')).addClass(PREVENT_CLOSE_CLASS);
            arrowLeft.click(function () {
              mfp.prev();
            });
            arrowRight.click(function () {
              mfp.next();
            });
            mfp.container.append(arrowLeft.add(arrowRight));
          }
        });
        _mfpOn(CHANGE_EVENT + ns, function () {
          if (mfp._preloadTimeout) clearTimeout(mfp._preloadTimeout);
          mfp._preloadTimeout = setTimeout(function () {
            mfp.preloadNearbyImages();
            mfp._preloadTimeout = null;
          }, 16);
        });
        _mfpOn(CLOSE_EVENT + ns, function () {
          _document.off(ns);
          mfp.wrap.off('click' + ns);
          mfp.arrowRight = mfp.arrowLeft = null;
        });
      },
      next: function next() {
        mfp.direction = true;
        mfp.index = _getLoopedId(mfp.index + 1);
        mfp.updateItemHTML();
      },
      prev: function prev() {
        mfp.direction = false;
        mfp.index = _getLoopedId(mfp.index - 1);
        mfp.updateItemHTML();
      },
      goTo: function goTo(newIndex) {
        mfp.direction = newIndex >= mfp.index;
        mfp.index = newIndex;
        mfp.updateItemHTML();
      },
      preloadNearbyImages: function preloadNearbyImages() {
        var p = mfp.st.gallery.preload,
          preloadBefore = Math.min(p[0], mfp.items.length),
          preloadAfter = Math.min(p[1], mfp.items.length),
          i;
        for (i = 1; i <= (mfp.direction ? preloadAfter : preloadBefore); i++) {
          mfp._preloadItem(mfp.index + i);
        }
        for (i = 1; i <= (mfp.direction ? preloadBefore : preloadAfter); i++) {
          mfp._preloadItem(mfp.index - i);
        }
      },
      _preloadItem: function _preloadItem(index) {
        index = _getLoopedId(index);
        if (mfp.items[index].preloaded) {
          return;
        }
        var item = mfp.items[index];
        if (!item.parsed) {
          item = mfp.parseEl(index);
        }
        _mfpTrigger('LazyLoad', item);
        if (item.type === 'image') {
          item.img = $('<img class="mfp-img" />').on('load.mfploader', function () {
            item.hasSize = true;
          }).on('error.mfploader', function () {
            item.hasSize = true;
            item.loadError = true;
            _mfpTrigger('LazyLoadError', item);
          }).attr('src', item.src);
        }
        item.preloaded = true;
      }
    }
  });

  /*>>gallery*/

  /*>>retina*/

  var RETINA_NS = 'retina';
  $.magnificPopup.registerModule(RETINA_NS, {
    options: {
      replaceSrc: function replaceSrc(item) {
        return item.src.replace(/\.\w+$/, function (m) {
          return '@2x' + m;
        });
      },
      ratio: 1 // Function or number.  Set to 1 to disable.
    },
    proto: {
      initRetina: function initRetina() {
        if (window.devicePixelRatio > 1) {
          var st = mfp.st.retina,
            ratio = st.ratio;
          ratio = !isNaN(ratio) ? ratio : ratio();
          if (ratio > 1) {
            _mfpOn('ImageHasSize' + '.' + RETINA_NS, function (e, item) {
              item.img.css({
                'max-width': item.img[0].naturalWidth / ratio,
                'width': '100%'
              });
            });
            _mfpOn('ElementParse' + '.' + RETINA_NS, function (e, item) {
              item.src = st.replaceSrc(item, ratio);
            });
          }
        }
      }
    }
  });

  /*>>retina*/
  _checkInstance();
});

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_internals_export_js","vendors-node_modules_core-js_internals_add-to-unscopables_js-node_modules_core-js_internals_a-09983a","vendors-node_modules_core-js_internals_array-slice_js-node_modules_core-js_internals_function-caeab8","vendors-node_modules_core-js_modules_es_string_iterator_js-node_modules_core-js_modules_es_sy-23bad7","vendors-node_modules_jquery_dist_jquery_js","vendors-node_modules_core-js_internals_advance-string-index_js-node_modules_core-js_internals-27e96d","vendors-node_modules_core-js_internals_array-method-has-species-support_js-node_modules_core--d0f16b","vendors-node_modules_core-js_internals_set-species_js-node_modules_core-js_modules_es_array_f-b01261"], () => (__webpack_exec__("./assets/css/portoadmin/vendor/magnific-popup/jquery.magnific-popup.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q055SyxVQUFVLEVBQUUsU0FBWkEsVUFBVUEsQ0FBQSxFQUFhO1FBQ3RCLElBQUcxWSxNQUFNLENBQUMyWSxnQkFBZ0IsR0FBRyxDQUFDLEVBQUU7VUFFL0IsSUFBSS9WLEVBQUUsR0FBRzVCLEdBQUcsQ0FBQzRCLEVBQUUsQ0FBQ2dXLE1BQU07WUFDckJILEtBQUssR0FBRzdWLEVBQUUsQ0FBQzZWLEtBQUs7VUFFakJBLEtBQUssR0FBRyxDQUFDSSxLQUFLLENBQUNKLEtBQUssQ0FBQyxHQUFHQSxLQUFLLEdBQUdBLEtBQUssQ0FBQyxDQUFDO1VBRXZDLElBQUdBLEtBQUssR0FBRyxDQUFDLEVBQUU7WUFDYmhYLE1BQU0sQ0FBQyxjQUFjLEdBQUcsR0FBRyxHQUFHNlcsU0FBUyxFQUFFLFVBQVM3VixDQUFDLEVBQUVpRCxJQUFJLEVBQUU7Y0FDMURBLElBQUksQ0FBQ2dNLEdBQUcsQ0FBQzVKLEdBQUcsQ0FBQztnQkFDWixXQUFXLEVBQUVwQyxJQUFJLENBQUNnTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUNZLFlBQVksR0FBR21HLEtBQUs7Z0JBQzdDLE9BQU8sRUFBRTtjQUNWLENBQUMsQ0FBQztZQUNILENBQUMsQ0FBQztZQUNGaFgsTUFBTSxDQUFDLGNBQWMsR0FBRyxHQUFHLEdBQUc2VyxTQUFTLEVBQUUsVUFBUzdWLENBQUMsRUFBRWlELElBQUksRUFBRTtjQUMxREEsSUFBSSxDQUFDOEYsR0FBRyxHQUFHNUksRUFBRSxDQUFDMlYsVUFBVSxDQUFDN1MsSUFBSSxFQUFFK1MsS0FBSyxDQUFDO1lBQ3RDLENBQUMsQ0FBQztVQUNIO1FBQ0Q7TUFFRDtJQUNEO0VBQ0QsQ0FBQyxDQUFDOztFQUVGO0VBQ0MvVSxjQUFjLENBQUMsQ0FBQztBQUFFLENBQUMsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2Nzcy9wb3J0b2FkbWluL3ZlbmRvci9tYWduaWZpYy1wb3B1cC9qcXVlcnkubWFnbmlmaWMtcG9wdXAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyohIE1hZ25pZmljIFBvcHVwIC0gdjEuMS4wIC0gMjAxNi0wMi0yMFxuKiBodHRwOi8vZGltc2VtZW5vdi5jb20vcGx1Z2lucy9tYWduaWZpYy1wb3B1cC9cbiogQ29weXJpZ2h0IChjKSAyMDE2IERtaXRyeSBTZW1lbm92OyAqL1xuOyhmdW5jdGlvbiAoZmFjdG9yeSkgeyBcbmlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpIHsgXG4gLy8gQU1ELiBSZWdpc3RlciBhcyBhbiBhbm9ueW1vdXMgbW9kdWxlLiBcbiBkZWZpbmUoWydqcXVlcnknXSwgZmFjdG9yeSk7IFxuIH0gZWxzZSBpZiAodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKSB7IFxuIC8vIE5vZGUvQ29tbW9uSlMgXG4gZmFjdG9yeShyZXF1aXJlKCdqcXVlcnknKSk7IFxuIH0gZWxzZSB7IFxuIC8vIEJyb3dzZXIgZ2xvYmFscyBcbiBmYWN0b3J5KHdpbmRvdy5qUXVlcnkgfHwgd2luZG93LlplcHRvKTsgXG4gfSBcbiB9KGZ1bmN0aW9uKCQpIHsgXG5cbi8qPj5jb3JlKi9cbi8qKlxuICogXG4gKiBNYWduaWZpYyBQb3B1cCBDb3JlIEpTIGZpbGVcbiAqIFxuICovXG5cblxuLyoqXG4gKiBQcml2YXRlIHN0YXRpYyBjb25zdGFudHNcbiAqL1xudmFyIENMT1NFX0VWRU5UID0gJ0Nsb3NlJyxcblx0QkVGT1JFX0NMT1NFX0VWRU5UID0gJ0JlZm9yZUNsb3NlJyxcblx0QUZURVJfQ0xPU0VfRVZFTlQgPSAnQWZ0ZXJDbG9zZScsXG5cdEJFRk9SRV9BUFBFTkRfRVZFTlQgPSAnQmVmb3JlQXBwZW5kJyxcblx0TUFSS1VQX1BBUlNFX0VWRU5UID0gJ01hcmt1cFBhcnNlJyxcblx0T1BFTl9FVkVOVCA9ICdPcGVuJyxcblx0Q0hBTkdFX0VWRU5UID0gJ0NoYW5nZScsXG5cdE5TID0gJ21mcCcsXG5cdEVWRU5UX05TID0gJy4nICsgTlMsXG5cdFJFQURZX0NMQVNTID0gJ21mcC1yZWFkeScsXG5cdFJFTU9WSU5HX0NMQVNTID0gJ21mcC1yZW1vdmluZycsXG5cdFBSRVZFTlRfQ0xPU0VfQ0xBU1MgPSAnbWZwLXByZXZlbnQtY2xvc2UnO1xuXG5cbi8qKlxuICogUHJpdmF0ZSB2YXJzIFxuICovXG4vKmpzaGludCAtVzA3OSAqL1xudmFyIG1mcCwgLy8gQXMgd2UgaGF2ZSBvbmx5IG9uZSBpbnN0YW5jZSBvZiBNYWduaWZpY1BvcHVwIG9iamVjdCwgd2UgZGVmaW5lIGl0IGxvY2FsbHkgdG8gbm90IHRvIHVzZSAndGhpcydcblx0TWFnbmlmaWNQb3B1cCA9IGZ1bmN0aW9uKCl7fSxcblx0X2lzSlEgPSAhISh3aW5kb3cualF1ZXJ5KSxcblx0X3ByZXZTdGF0dXMsXG5cdF93aW5kb3cgPSAkKHdpbmRvdyksXG5cdF9kb2N1bWVudCxcblx0X3ByZXZDb250ZW50VHlwZSxcblx0X3dyYXBDbGFzc2VzLFxuXHRfY3VyclBvcHVwVHlwZTtcblxuXG4vKipcbiAqIFByaXZhdGUgZnVuY3Rpb25zXG4gKi9cbnZhciBfbWZwT24gPSBmdW5jdGlvbihuYW1lLCBmKSB7XG5cdFx0bWZwLmV2Lm9uKE5TICsgbmFtZSArIEVWRU5UX05TLCBmKTtcblx0fSxcblx0X2dldEVsID0gZnVuY3Rpb24oY2xhc3NOYW1lLCBhcHBlbmRUbywgaHRtbCwgcmF3KSB7XG5cdFx0dmFyIGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdFx0ZWwuY2xhc3NOYW1lID0gJ21mcC0nK2NsYXNzTmFtZTtcblx0XHRpZihodG1sKSB7XG5cdFx0XHRlbC5pbm5lckhUTUwgPSBodG1sO1xuXHRcdH1cblx0XHRpZighcmF3KSB7XG5cdFx0XHRlbCA9ICQoZWwpO1xuXHRcdFx0aWYoYXBwZW5kVG8pIHtcblx0XHRcdFx0ZWwuYXBwZW5kVG8oYXBwZW5kVG8pO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSBpZihhcHBlbmRUbykge1xuXHRcdFx0YXBwZW5kVG8uYXBwZW5kQ2hpbGQoZWwpO1xuXHRcdH1cblx0XHRyZXR1cm4gZWw7XG5cdH0sXG5cdF9tZnBUcmlnZ2VyID0gZnVuY3Rpb24oZSwgZGF0YSkge1xuXHRcdG1mcC5ldi50cmlnZ2VySGFuZGxlcihOUyArIGUsIGRhdGEpO1xuXG5cdFx0aWYobWZwLnN0LmNhbGxiYWNrcykge1xuXHRcdFx0Ly8gY29udmVydHMgXCJtZnBFdmVudE5hbWVcIiB0byBcImV2ZW50TmFtZVwiIGNhbGxiYWNrIGFuZCB0cmlnZ2VycyBpdCBpZiBpdCdzIHByZXNlbnRcblx0XHRcdGUgPSBlLmNoYXJBdCgwKS50b0xvd2VyQ2FzZSgpICsgZS5zbGljZSgxKTtcblx0XHRcdGlmKG1mcC5zdC5jYWxsYmFja3NbZV0pIHtcblx0XHRcdFx0bWZwLnN0LmNhbGxiYWNrc1tlXS5hcHBseShtZnAsICQuaXNBcnJheShkYXRhKSA/IGRhdGEgOiBbZGF0YV0pO1xuXHRcdFx0fVxuXHRcdH1cblx0fSxcblx0X2dldENsb3NlQnRuID0gZnVuY3Rpb24odHlwZSkge1xuXHRcdGlmKHR5cGUgIT09IF9jdXJyUG9wdXBUeXBlIHx8ICFtZnAuY3VyclRlbXBsYXRlLmNsb3NlQnRuKSB7XG5cdFx0XHRtZnAuY3VyclRlbXBsYXRlLmNsb3NlQnRuID0gJCggbWZwLnN0LmNsb3NlTWFya3VwLnJlcGxhY2UoJyV0aXRsZSUnLCBtZnAuc3QudENsb3NlICkgKTtcblx0XHRcdF9jdXJyUG9wdXBUeXBlID0gdHlwZTtcblx0XHR9XG5cdFx0cmV0dXJuIG1mcC5jdXJyVGVtcGxhdGUuY2xvc2VCdG47XG5cdH0sXG5cdC8vIEluaXRpYWxpemUgTWFnbmlmaWMgUG9wdXAgb25seSB3aGVuIGNhbGxlZCBhdCBsZWFzdCBvbmNlXG5cdF9jaGVja0luc3RhbmNlID0gZnVuY3Rpb24oKSB7XG5cdFx0aWYoISQubWFnbmlmaWNQb3B1cC5pbnN0YW5jZSkge1xuXHRcdFx0Lypqc2hpbnQgLVcwMjAgKi9cblx0XHRcdG1mcCA9IG5ldyBNYWduaWZpY1BvcHVwKCk7XG5cdFx0XHRtZnAuaW5pdCgpO1xuXHRcdFx0JC5tYWduaWZpY1BvcHVwLmluc3RhbmNlID0gbWZwO1xuXHRcdH1cblx0fSxcblx0Ly8gQ1NTIHRyYW5zaXRpb24gZGV0ZWN0aW9uLCBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzcyNjQ4OTkvZGV0ZWN0LWNzcy10cmFuc2l0aW9ucy11c2luZy1qYXZhc2NyaXB0LWFuZC13aXRob3V0LW1vZGVybml6clxuXHRzdXBwb3J0c1RyYW5zaXRpb25zID0gZnVuY3Rpb24oKSB7XG5cdFx0dmFyIHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJykuc3R5bGUsIC8vICdzJyBmb3Igc3R5bGUuIGJldHRlciB0byBjcmVhdGUgYW4gZWxlbWVudCBpZiBib2R5IHlldCB0byBleGlzdFxuXHRcdFx0diA9IFsnbXMnLCdPJywnTW96JywnV2Via2l0J107IC8vICd2JyBmb3IgdmVuZG9yXG5cblx0XHRpZiggc1sndHJhbnNpdGlvbiddICE9PSB1bmRlZmluZWQgKSB7XG5cdFx0XHRyZXR1cm4gdHJ1ZTsgXG5cdFx0fVxuXHRcdFx0XG5cdFx0d2hpbGUoIHYubGVuZ3RoICkge1xuXHRcdFx0aWYoIHYucG9wKCkgKyAnVHJhbnNpdGlvbicgaW4gcyApIHtcblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdFx0XHRcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH07XG5cblxuXG4vKipcbiAqIFB1YmxpYyBmdW5jdGlvbnNcbiAqL1xuTWFnbmlmaWNQb3B1cC5wcm90b3R5cGUgPSB7XG5cblx0Y29uc3RydWN0b3I6IE1hZ25pZmljUG9wdXAsXG5cblx0LyoqXG5cdCAqIEluaXRpYWxpemVzIE1hZ25pZmljIFBvcHVwIHBsdWdpbi4gXG5cdCAqIFRoaXMgZnVuY3Rpb24gaXMgdHJpZ2dlcmVkIG9ubHkgb25jZSB3aGVuICQuZm4ubWFnbmlmaWNQb3B1cCBvciAkLm1hZ25pZmljUG9wdXAgaXMgZXhlY3V0ZWRcblx0ICovXG5cdGluaXQ6IGZ1bmN0aW9uKCkge1xuXHRcdHZhciBhcHBWZXJzaW9uID0gbmF2aWdhdG9yLmFwcFZlcnNpb247XG5cdFx0bWZwLmlzTG93SUUgPSBtZnAuaXNJRTggPSBkb2N1bWVudC5hbGwgJiYgIWRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXI7XG5cdFx0bWZwLmlzQW5kcm9pZCA9ICgvYW5kcm9pZC9naSkudGVzdChhcHBWZXJzaW9uKTtcblx0XHRtZnAuaXNJT1MgPSAoL2lwaG9uZXxpcGFkfGlwb2QvZ2kpLnRlc3QoYXBwVmVyc2lvbik7XG5cdFx0bWZwLnN1cHBvcnRzVHJhbnNpdGlvbiA9IHN1cHBvcnRzVHJhbnNpdGlvbnMoKTtcblxuXHRcdC8vIFdlIGRpc2FibGUgZml4ZWQgcG9zaXRpb25lZCBsaWdodGJveCBvbiBkZXZpY2VzIHRoYXQgZG9uJ3QgaGFuZGxlIGl0IG5pY2VseS5cblx0XHQvLyBJZiB5b3Uga25vdyBhIGJldHRlciB3YXkgb2YgZGV0ZWN0aW5nIHRoaXMgLSBsZXQgbWUga25vdy5cblx0XHRtZnAucHJvYmFibHlNb2JpbGUgPSAobWZwLmlzQW5kcm9pZCB8fCBtZnAuaXNJT1MgfHwgLyhPcGVyYSBNaW5pKXxLaW5kbGV8d2ViT1N8QmxhY2tCZXJyeXwoT3BlcmEgTW9iaSl8KFdpbmRvd3MgUGhvbmUpfElFTW9iaWxlL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSApO1xuXHRcdF9kb2N1bWVudCA9ICQoZG9jdW1lbnQpO1xuXG5cdFx0bWZwLnBvcHVwc0NhY2hlID0ge307XG5cdH0sXG5cblx0LyoqXG5cdCAqIE9wZW5zIHBvcHVwXG5cdCAqIEBwYXJhbSAgZGF0YSBbZGVzY3JpcHRpb25dXG5cdCAqL1xuXHRvcGVuOiBmdW5jdGlvbihkYXRhKSB7XG5cblx0XHR2YXIgaTtcblxuXHRcdGlmKGRhdGEuaXNPYmogPT09IGZhbHNlKSB7IFxuXHRcdFx0Ly8gY29udmVydCBqUXVlcnkgY29sbGVjdGlvbiB0byBhcnJheSB0byBhdm9pZCBjb25mbGljdHMgbGF0ZXJcblx0XHRcdG1mcC5pdGVtcyA9IGRhdGEuaXRlbXMudG9BcnJheSgpO1xuXG5cdFx0XHRtZnAuaW5kZXggPSAwO1xuXHRcdFx0dmFyIGl0ZW1zID0gZGF0YS5pdGVtcyxcblx0XHRcdFx0aXRlbTtcblx0XHRcdGZvcihpID0gMDsgaSA8IGl0ZW1zLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGl0ZW0gPSBpdGVtc1tpXTtcblx0XHRcdFx0aWYoaXRlbS5wYXJzZWQpIHtcblx0XHRcdFx0XHRpdGVtID0gaXRlbS5lbFswXTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZihpdGVtID09PSBkYXRhLmVsWzBdKSB7XG5cdFx0XHRcdFx0bWZwLmluZGV4ID0gaTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRtZnAuaXRlbXMgPSAkLmlzQXJyYXkoZGF0YS5pdGVtcykgPyBkYXRhLml0ZW1zIDogW2RhdGEuaXRlbXNdO1xuXHRcdFx0bWZwLmluZGV4ID0gZGF0YS5pbmRleCB8fCAwO1xuXHRcdH1cblxuXHRcdC8vIGlmIHBvcHVwIGlzIGFscmVhZHkgb3BlbmVkIC0gd2UganVzdCB1cGRhdGUgdGhlIGNvbnRlbnRcblx0XHRpZihtZnAuaXNPcGVuKSB7XG5cdFx0XHRtZnAudXBkYXRlSXRlbUhUTUwoKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0XG5cdFx0bWZwLnR5cGVzID0gW107IFxuXHRcdF93cmFwQ2xhc3NlcyA9ICcnO1xuXHRcdGlmKGRhdGEubWFpbkVsICYmIGRhdGEubWFpbkVsLmxlbmd0aCkge1xuXHRcdFx0bWZwLmV2ID0gZGF0YS5tYWluRWwuZXEoMCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdG1mcC5ldiA9IF9kb2N1bWVudDtcblx0XHR9XG5cblx0XHRpZihkYXRhLmtleSkge1xuXHRcdFx0aWYoIW1mcC5wb3B1cHNDYWNoZVtkYXRhLmtleV0pIHtcblx0XHRcdFx0bWZwLnBvcHVwc0NhY2hlW2RhdGEua2V5XSA9IHt9O1xuXHRcdFx0fVxuXHRcdFx0bWZwLmN1cnJUZW1wbGF0ZSA9IG1mcC5wb3B1cHNDYWNoZVtkYXRhLmtleV07XG5cdFx0fSBlbHNlIHtcblx0XHRcdG1mcC5jdXJyVGVtcGxhdGUgPSB7fTtcblx0XHR9XG5cblxuXG5cdFx0bWZwLnN0ID0gJC5leHRlbmQodHJ1ZSwge30sICQubWFnbmlmaWNQb3B1cC5kZWZhdWx0cywgZGF0YSApOyBcblx0XHRtZnAuZml4ZWRDb250ZW50UG9zID0gbWZwLnN0LmZpeGVkQ29udGVudFBvcyA9PT0gJ2F1dG8nID8gIW1mcC5wcm9iYWJseU1vYmlsZSA6IG1mcC5zdC5maXhlZENvbnRlbnRQb3M7XG5cblx0XHRpZihtZnAuc3QubW9kYWwpIHtcblx0XHRcdG1mcC5zdC5jbG9zZU9uQ29udGVudENsaWNrID0gZmFsc2U7XG5cdFx0XHRtZnAuc3QuY2xvc2VPbkJnQ2xpY2sgPSBmYWxzZTtcblx0XHRcdG1mcC5zdC5zaG93Q2xvc2VCdG4gPSBmYWxzZTtcblx0XHRcdG1mcC5zdC5lbmFibGVFc2NhcGVLZXkgPSBmYWxzZTtcblx0XHR9XG5cdFx0XG5cblx0XHQvLyBCdWlsZGluZyBtYXJrdXBcblx0XHQvLyBtYWluIGNvbnRhaW5lcnMgYXJlIGNyZWF0ZWQgb25seSBvbmNlXG5cdFx0aWYoIW1mcC5iZ092ZXJsYXkpIHtcblxuXHRcdFx0Ly8gRGFyayBvdmVybGF5XG5cdFx0XHRtZnAuYmdPdmVybGF5ID0gX2dldEVsKCdiZycpLm9uKCdjbGljaycrRVZFTlRfTlMsIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRtZnAuY2xvc2UoKTtcblx0XHRcdH0pO1xuXG5cdFx0XHRtZnAud3JhcCA9IF9nZXRFbCgnd3JhcCcpLmF0dHIoJ3RhYmluZGV4JywgLTEpLm9uKCdjbGljaycrRVZFTlRfTlMsIGZ1bmN0aW9uKGUpIHtcblx0XHRcdFx0aWYobWZwLl9jaGVja0lmQ2xvc2UoZS50YXJnZXQpKSB7XG5cdFx0XHRcdFx0bWZwLmNsb3NlKCk7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXG5cdFx0XHRtZnAuY29udGFpbmVyID0gX2dldEVsKCdjb250YWluZXInLCBtZnAud3JhcCk7XG5cdFx0fVxuXG5cdFx0bWZwLmNvbnRlbnRDb250YWluZXIgPSBfZ2V0RWwoJ2NvbnRlbnQnKTtcblx0XHRpZihtZnAuc3QucHJlbG9hZGVyKSB7XG5cdFx0XHRtZnAucHJlbG9hZGVyID0gX2dldEVsKCdwcmVsb2FkZXInLCBtZnAuY29udGFpbmVyLCBtZnAuc3QudExvYWRpbmcpO1xuXHRcdH1cblxuXG5cdFx0Ly8gSW5pdGlhbGl6aW5nIG1vZHVsZXNcblx0XHR2YXIgbW9kdWxlcyA9ICQubWFnbmlmaWNQb3B1cC5tb2R1bGVzO1xuXHRcdGZvcihpID0gMDsgaSA8IG1vZHVsZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBuID0gbW9kdWxlc1tpXTtcblx0XHRcdG4gPSBuLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgbi5zbGljZSgxKTtcblx0XHRcdG1mcFsnaW5pdCcrbl0uY2FsbChtZnApO1xuXHRcdH1cblx0XHRfbWZwVHJpZ2dlcignQmVmb3JlT3BlbicpO1xuXG5cblx0XHRpZihtZnAuc3Quc2hvd0Nsb3NlQnRuKSB7XG5cdFx0XHQvLyBDbG9zZSBidXR0b25cblx0XHRcdGlmKCFtZnAuc3QuY2xvc2VCdG5JbnNpZGUpIHtcblx0XHRcdFx0bWZwLndyYXAuYXBwZW5kKCBfZ2V0Q2xvc2VCdG4oKSApO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0X21mcE9uKE1BUktVUF9QQVJTRV9FVkVOVCwgZnVuY3Rpb24oZSwgdGVtcGxhdGUsIHZhbHVlcywgaXRlbSkge1xuXHRcdFx0XHRcdHZhbHVlcy5jbG9zZV9yZXBsYWNlV2l0aCA9IF9nZXRDbG9zZUJ0bihpdGVtLnR5cGUpO1xuXHRcdFx0XHR9KTtcblx0XHRcdFx0X3dyYXBDbGFzc2VzICs9ICcgbWZwLWNsb3NlLWJ0bi1pbic7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYobWZwLnN0LmFsaWduVG9wKSB7XG5cdFx0XHRfd3JhcENsYXNzZXMgKz0gJyBtZnAtYWxpZ24tdG9wJztcblx0XHR9XG5cblx0XG5cblx0XHRpZihtZnAuZml4ZWRDb250ZW50UG9zKSB7XG5cdFx0XHRtZnAud3JhcC5jc3Moe1xuXHRcdFx0XHRvdmVyZmxvdzogbWZwLnN0Lm92ZXJmbG93WSxcblx0XHRcdFx0b3ZlcmZsb3dYOiAnaGlkZGVuJyxcblx0XHRcdFx0b3ZlcmZsb3dZOiBtZnAuc3Qub3ZlcmZsb3dZXG5cdFx0XHR9KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0bWZwLndyYXAuY3NzKHsgXG5cdFx0XHRcdHRvcDogX3dpbmRvdy5zY3JvbGxUb3AoKSxcblx0XHRcdFx0cG9zaXRpb246ICdhYnNvbHV0ZSdcblx0XHRcdH0pO1xuXHRcdH1cblx0XHRpZiggbWZwLnN0LmZpeGVkQmdQb3MgPT09IGZhbHNlIHx8IChtZnAuc3QuZml4ZWRCZ1BvcyA9PT0gJ2F1dG8nICYmICFtZnAuZml4ZWRDb250ZW50UG9zKSApIHtcblx0XHRcdG1mcC5iZ092ZXJsYXkuY3NzKHtcblx0XHRcdFx0aGVpZ2h0OiBfZG9jdW1lbnQuaGVpZ2h0KCksXG5cdFx0XHRcdHBvc2l0aW9uOiAnYWJzb2x1dGUnXG5cdFx0XHR9KTtcblx0XHR9XG5cblx0XHRcblxuXHRcdGlmKG1mcC5zdC5lbmFibGVFc2NhcGVLZXkpIHtcblx0XHRcdC8vIENsb3NlIG9uIEVTQyBrZXlcblx0XHRcdF9kb2N1bWVudC5vbigna2V5dXAnICsgRVZFTlRfTlMsIGZ1bmN0aW9uKGUpIHtcblx0XHRcdFx0aWYoZS5rZXlDb2RlID09PSAyNykge1xuXHRcdFx0XHRcdG1mcC5jbG9zZSgpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHR9XG5cblx0XHRfd2luZG93Lm9uKCdyZXNpemUnICsgRVZFTlRfTlMsIGZ1bmN0aW9uKCkge1xuXHRcdFx0bWZwLnVwZGF0ZVNpemUoKTtcblx0XHR9KTtcblxuXG5cdFx0aWYoIW1mcC5zdC5jbG9zZU9uQ29udGVudENsaWNrKSB7XG5cdFx0XHRfd3JhcENsYXNzZXMgKz0gJyBtZnAtYXV0by1jdXJzb3InO1xuXHRcdH1cblx0XHRcblx0XHRpZihfd3JhcENsYXNzZXMpXG5cdFx0XHRtZnAud3JhcC5hZGRDbGFzcyhfd3JhcENsYXNzZXMpO1xuXG5cblx0XHQvLyB0aGlzIHRyaWdnZXJzIHJlY2FsY3VsYXRpb24gb2YgbGF5b3V0LCBzbyB3ZSBnZXQgaXQgb25jZSB0byBub3QgdG8gdHJpZ2dlciB0d2ljZVxuXHRcdHZhciB3aW5kb3dIZWlnaHQgPSBtZnAud0ggPSBfd2luZG93LmhlaWdodCgpO1xuXG5cdFx0XG5cdFx0dmFyIHdpbmRvd1N0eWxlcyA9IHt9O1xuXG5cdFx0aWYoIG1mcC5maXhlZENvbnRlbnRQb3MgKSB7XG4gICAgICAgICAgICBpZihtZnAuX2hhc1Njcm9sbEJhcih3aW5kb3dIZWlnaHQpKXtcbiAgICAgICAgICAgICAgICB2YXIgcyA9IG1mcC5fZ2V0U2Nyb2xsYmFyU2l6ZSgpO1xuICAgICAgICAgICAgICAgIGlmKHMpIHtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93U3R5bGVzLm1hcmdpblJpZ2h0ID0gcztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuXHRcdGlmKG1mcC5maXhlZENvbnRlbnRQb3MpIHtcblx0XHRcdGlmKCFtZnAuaXNJRTcpIHtcblx0XHRcdFx0d2luZG93U3R5bGVzLm92ZXJmbG93ID0gJ2hpZGRlbic7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHQvLyBpZTcgZG91YmxlLXNjcm9sbCBidWdcblx0XHRcdFx0JCgnYm9keSwgaHRtbCcpLmNzcygnb3ZlcmZsb3cnLCAnaGlkZGVuJyk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0XG5cdFx0XG5cdFx0dmFyIGNsYXNzZXNUb2FkZCA9IG1mcC5zdC5tYWluQ2xhc3M7XG5cdFx0aWYobWZwLmlzSUU3KSB7XG5cdFx0XHRjbGFzc2VzVG9hZGQgKz0gJyBtZnAtaWU3Jztcblx0XHR9XG5cdFx0aWYoY2xhc3Nlc1RvYWRkKSB7XG5cdFx0XHRtZnAuX2FkZENsYXNzVG9NRlAoIGNsYXNzZXNUb2FkZCApO1xuXHRcdH1cblxuXHRcdC8vIGFkZCBjb250ZW50XG5cdFx0bWZwLnVwZGF0ZUl0ZW1IVE1MKCk7XG5cblx0XHRfbWZwVHJpZ2dlcignQnVpbGRDb250cm9scycpO1xuXG5cdFx0Ly8gcmVtb3ZlIHNjcm9sbGJhciwgYWRkIG1hcmdpbiBlLnQuY1xuXHRcdCQoJ2h0bWwnKS5jc3Mod2luZG93U3R5bGVzKTtcblx0XHRcblx0XHQvLyBhZGQgZXZlcnl0aGluZyB0byBET01cblx0XHRtZnAuYmdPdmVybGF5LmFkZChtZnAud3JhcCkucHJlcGVuZFRvKCBtZnAuc3QucHJlcGVuZFRvIHx8ICQoZG9jdW1lbnQuYm9keSkgKTtcblxuXHRcdC8vIFNhdmUgbGFzdCBmb2N1c2VkIGVsZW1lbnRcblx0XHRtZnAuX2xhc3RGb2N1c2VkRWwgPSBkb2N1bWVudC5hY3RpdmVFbGVtZW50O1xuXHRcdFxuXHRcdC8vIFdhaXQgZm9yIG5leHQgY3ljbGUgdG8gYWxsb3cgQ1NTIHRyYW5zaXRpb25cblx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuXHRcdFx0XG5cdFx0XHRpZihtZnAuY29udGVudCkge1xuXHRcdFx0XHRtZnAuX2FkZENsYXNzVG9NRlAoUkVBRFlfQ0xBU1MpO1xuXHRcdFx0XHRtZnAuX3NldEZvY3VzKCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHQvLyBpZiBjb250ZW50IGlzIG5vdCBkZWZpbmVkIChub3QgbG9hZGVkIGUudC5jKSB3ZSBhZGQgY2xhc3Mgb25seSBmb3IgQkdcblx0XHRcdFx0bWZwLmJnT3ZlcmxheS5hZGRDbGFzcyhSRUFEWV9DTEFTUyk7XG5cdFx0XHR9XG5cdFx0XHRcblx0XHRcdC8vIFRyYXAgdGhlIGZvY3VzIGluIHBvcHVwXG5cdFx0XHRfZG9jdW1lbnQub24oJ2ZvY3VzaW4nICsgRVZFTlRfTlMsIG1mcC5fb25Gb2N1c0luKTtcblxuXHRcdH0sIDE2KTtcblxuXHRcdG1mcC5pc09wZW4gPSB0cnVlO1xuXHRcdG1mcC51cGRhdGVTaXplKHdpbmRvd0hlaWdodCk7XG5cdFx0X21mcFRyaWdnZXIoT1BFTl9FVkVOVCk7XG5cblx0XHRyZXR1cm4gZGF0YTtcblx0fSxcblxuXHQvKipcblx0ICogQ2xvc2VzIHRoZSBwb3B1cFxuXHQgKi9cblx0Y2xvc2U6IGZ1bmN0aW9uKCkge1xuXHRcdGlmKCFtZnAuaXNPcGVuKSByZXR1cm47XG5cdFx0X21mcFRyaWdnZXIoQkVGT1JFX0NMT1NFX0VWRU5UKTtcblxuXHRcdG1mcC5pc09wZW4gPSBmYWxzZTtcblx0XHQvLyBmb3IgQ1NTMyBhbmltYXRpb25cblx0XHRpZihtZnAuc3QucmVtb3ZhbERlbGF5ICYmICFtZnAuaXNMb3dJRSAmJiBtZnAuc3VwcG9ydHNUcmFuc2l0aW9uICkgIHtcblx0XHRcdG1mcC5fYWRkQ2xhc3NUb01GUChSRU1PVklOR19DTEFTUyk7XG5cdFx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRtZnAuX2Nsb3NlKCk7XG5cdFx0XHR9LCBtZnAuc3QucmVtb3ZhbERlbGF5KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0bWZwLl9jbG9zZSgpO1xuXHRcdH1cblx0fSxcblxuXHQvKipcblx0ICogSGVscGVyIGZvciBjbG9zZSgpIGZ1bmN0aW9uXG5cdCAqL1xuXHRfY2xvc2U6IGZ1bmN0aW9uKCkge1xuXHRcdF9tZnBUcmlnZ2VyKENMT1NFX0VWRU5UKTtcblxuXHRcdHZhciBjbGFzc2VzVG9SZW1vdmUgPSBSRU1PVklOR19DTEFTUyArICcgJyArIFJFQURZX0NMQVNTICsgJyAnO1xuXG5cdFx0bWZwLmJnT3ZlcmxheS5kZXRhY2goKTtcblx0XHRtZnAud3JhcC5kZXRhY2goKTtcblx0XHRtZnAuY29udGFpbmVyLmVtcHR5KCk7XG5cblx0XHRpZihtZnAuc3QubWFpbkNsYXNzKSB7XG5cdFx0XHRjbGFzc2VzVG9SZW1vdmUgKz0gbWZwLnN0Lm1haW5DbGFzcyArICcgJztcblx0XHR9XG5cblx0XHRtZnAuX3JlbW92ZUNsYXNzRnJvbU1GUChjbGFzc2VzVG9SZW1vdmUpO1xuXG5cdFx0aWYobWZwLmZpeGVkQ29udGVudFBvcykge1xuXHRcdFx0dmFyIHdpbmRvd1N0eWxlcyA9IHttYXJnaW5SaWdodDogJyd9O1xuXHRcdFx0aWYobWZwLmlzSUU3KSB7XG5cdFx0XHRcdCQoJ2JvZHksIGh0bWwnKS5jc3MoJ292ZXJmbG93JywgJycpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0d2luZG93U3R5bGVzLm92ZXJmbG93ID0gJyc7XG5cdFx0XHR9XG5cdFx0XHQkKCdodG1sJykuY3NzKHdpbmRvd1N0eWxlcyk7XG5cdFx0fVxuXHRcdFxuXHRcdF9kb2N1bWVudC5vZmYoJ2tleXVwJyArIEVWRU5UX05TICsgJyBmb2N1c2luJyArIEVWRU5UX05TKTtcblx0XHRtZnAuZXYub2ZmKEVWRU5UX05TKTtcblxuXHRcdC8vIGNsZWFuIHVwIERPTSBlbGVtZW50cyB0aGF0IGFyZW4ndCByZW1vdmVkXG5cdFx0bWZwLndyYXAuYXR0cignY2xhc3MnLCAnbWZwLXdyYXAnKS5yZW1vdmVBdHRyKCdzdHlsZScpO1xuXHRcdG1mcC5iZ092ZXJsYXkuYXR0cignY2xhc3MnLCAnbWZwLWJnJyk7XG5cdFx0bWZwLmNvbnRhaW5lci5hdHRyKCdjbGFzcycsICdtZnAtY29udGFpbmVyJyk7XG5cblx0XHQvLyByZW1vdmUgY2xvc2UgYnV0dG9uIGZyb20gdGFyZ2V0IGVsZW1lbnRcblx0XHRpZihtZnAuc3Quc2hvd0Nsb3NlQnRuICYmXG5cdFx0KCFtZnAuc3QuY2xvc2VCdG5JbnNpZGUgfHwgbWZwLmN1cnJUZW1wbGF0ZVttZnAuY3Vyckl0ZW0udHlwZV0gPT09IHRydWUpKSB7XG5cdFx0XHRpZihtZnAuY3VyclRlbXBsYXRlLmNsb3NlQnRuKVxuXHRcdFx0XHRtZnAuY3VyclRlbXBsYXRlLmNsb3NlQnRuLmRldGFjaCgpO1xuXHRcdH1cblxuXG5cdFx0aWYobWZwLnN0LmF1dG9Gb2N1c0xhc3QgJiYgbWZwLl9sYXN0Rm9jdXNlZEVsKSB7XG5cdFx0XHQkKG1mcC5fbGFzdEZvY3VzZWRFbCkuZm9jdXMoKTsgLy8gcHV0IHRhYiBmb2N1cyBiYWNrXG5cdFx0fVxuXHRcdG1mcC5jdXJySXRlbSA9IG51bGw7XHRcblx0XHRtZnAuY29udGVudCA9IG51bGw7XG5cdFx0bWZwLmN1cnJUZW1wbGF0ZSA9IG51bGw7XG5cdFx0bWZwLnByZXZIZWlnaHQgPSAwO1xuXG5cdFx0X21mcFRyaWdnZXIoQUZURVJfQ0xPU0VfRVZFTlQpO1xuXHR9LFxuXHRcblx0dXBkYXRlU2l6ZTogZnVuY3Rpb24od2luSGVpZ2h0KSB7XG5cblx0XHRpZihtZnAuaXNJT1MpIHtcblx0XHRcdC8vIGZpeGVzIGlPUyBuYXYgYmFycyBodHRwczovL2dpdGh1Yi5jb20vZGltc2VtZW5vdi9NYWduaWZpYy1Qb3B1cC9pc3N1ZXMvMlxuXHRcdFx0dmFyIHpvb21MZXZlbCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aCAvIHdpbmRvdy5pbm5lcldpZHRoO1xuXHRcdFx0dmFyIGhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodCAqIHpvb21MZXZlbDtcblx0XHRcdG1mcC53cmFwLmNzcygnaGVpZ2h0JywgaGVpZ2h0KTtcblx0XHRcdG1mcC53SCA9IGhlaWdodDtcblx0XHR9IGVsc2Uge1xuXHRcdFx0bWZwLndIID0gd2luSGVpZ2h0IHx8IF93aW5kb3cuaGVpZ2h0KCk7XG5cdFx0fVxuXHRcdC8vIEZpeGVzICM4NDogcG9wdXAgaW5jb3JyZWN0bHkgcG9zaXRpb25lZCB3aXRoIHBvc2l0aW9uOnJlbGF0aXZlIG9uIGJvZHlcblx0XHRpZighbWZwLmZpeGVkQ29udGVudFBvcykge1xuXHRcdFx0bWZwLndyYXAuY3NzKCdoZWlnaHQnLCBtZnAud0gpO1xuXHRcdH1cblxuXHRcdF9tZnBUcmlnZ2VyKCdSZXNpemUnKTtcblxuXHR9LFxuXG5cdC8qKlxuXHQgKiBTZXQgY29udGVudCBvZiBwb3B1cCBiYXNlZCBvbiBjdXJyZW50IGluZGV4XG5cdCAqL1xuXHR1cGRhdGVJdGVtSFRNTDogZnVuY3Rpb24oKSB7XG5cdFx0dmFyIGl0ZW0gPSBtZnAuaXRlbXNbbWZwLmluZGV4XTtcblxuXHRcdC8vIERldGFjaCBhbmQgcGVyZm9ybSBtb2RpZmljYXRpb25zXG5cdFx0bWZwLmNvbnRlbnRDb250YWluZXIuZGV0YWNoKCk7XG5cblx0XHRpZihtZnAuY29udGVudClcblx0XHRcdG1mcC5jb250ZW50LmRldGFjaCgpO1xuXG5cdFx0aWYoIWl0ZW0ucGFyc2VkKSB7XG5cdFx0XHRpdGVtID0gbWZwLnBhcnNlRWwoIG1mcC5pbmRleCApO1xuXHRcdH1cblxuXHRcdHZhciB0eXBlID0gaXRlbS50eXBlO1xuXG5cdFx0X21mcFRyaWdnZXIoJ0JlZm9yZUNoYW5nZScsIFttZnAuY3Vyckl0ZW0gPyBtZnAuY3Vyckl0ZW0udHlwZSA6ICcnLCB0eXBlXSk7XG5cdFx0Ly8gQmVmb3JlQ2hhbmdlIGV2ZW50IHdvcmtzIGxpa2Ugc286XG5cdFx0Ly8gX21mcE9uKCdCZWZvcmVDaGFuZ2UnLCBmdW5jdGlvbihlLCBwcmV2VHlwZSwgbmV3VHlwZSkgeyB9KTtcblxuXHRcdG1mcC5jdXJySXRlbSA9IGl0ZW07XG5cblx0XHRpZighbWZwLmN1cnJUZW1wbGF0ZVt0eXBlXSkge1xuXHRcdFx0dmFyIG1hcmt1cCA9IG1mcC5zdFt0eXBlXSA/IG1mcC5zdFt0eXBlXS5tYXJrdXAgOiBmYWxzZTtcblxuXHRcdFx0Ly8gYWxsb3dzIHRvIG1vZGlmeSBtYXJrdXBcblx0XHRcdF9tZnBUcmlnZ2VyKCdGaXJzdE1hcmt1cFBhcnNlJywgbWFya3VwKTtcblxuXHRcdFx0aWYobWFya3VwKSB7XG5cdFx0XHRcdG1mcC5jdXJyVGVtcGxhdGVbdHlwZV0gPSAkKG1hcmt1cCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHQvLyBpZiB0aGVyZSBpcyBubyBtYXJrdXAgZm91bmQgd2UganVzdCBkZWZpbmUgdGhhdCB0ZW1wbGF0ZSBpcyBwYXJzZWRcblx0XHRcdFx0bWZwLmN1cnJUZW1wbGF0ZVt0eXBlXSA9IHRydWU7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYoX3ByZXZDb250ZW50VHlwZSAmJiBfcHJldkNvbnRlbnRUeXBlICE9PSBpdGVtLnR5cGUpIHtcblx0XHRcdG1mcC5jb250YWluZXIucmVtb3ZlQ2xhc3MoJ21mcC0nK19wcmV2Q29udGVudFR5cGUrJy1ob2xkZXInKTtcblx0XHR9XG5cblx0XHR2YXIgbmV3Q29udGVudCA9IG1mcFsnZ2V0JyArIHR5cGUuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyB0eXBlLnNsaWNlKDEpXShpdGVtLCBtZnAuY3VyclRlbXBsYXRlW3R5cGVdKTtcblx0XHRtZnAuYXBwZW5kQ29udGVudChuZXdDb250ZW50LCB0eXBlKTtcblxuXHRcdGl0ZW0ucHJlbG9hZGVkID0gdHJ1ZTtcblxuXHRcdF9tZnBUcmlnZ2VyKENIQU5HRV9FVkVOVCwgaXRlbSk7XG5cdFx0X3ByZXZDb250ZW50VHlwZSA9IGl0ZW0udHlwZTtcblxuXHRcdC8vIEFwcGVuZCBjb250YWluZXIgYmFjayBhZnRlciBpdHMgY29udGVudCBjaGFuZ2VkXG5cdFx0bWZwLmNvbnRhaW5lci5wcmVwZW5kKG1mcC5jb250ZW50Q29udGFpbmVyKTtcblxuXHRcdF9tZnBUcmlnZ2VyKCdBZnRlckNoYW5nZScpO1xuXHR9LFxuXG5cblx0LyoqXG5cdCAqIFNldCBIVE1MIGNvbnRlbnQgb2YgcG9wdXBcblx0ICovXG5cdGFwcGVuZENvbnRlbnQ6IGZ1bmN0aW9uKG5ld0NvbnRlbnQsIHR5cGUpIHtcblx0XHRtZnAuY29udGVudCA9IG5ld0NvbnRlbnQ7XG5cblx0XHRpZihuZXdDb250ZW50KSB7XG5cdFx0XHRpZihtZnAuc3Quc2hvd0Nsb3NlQnRuICYmIG1mcC5zdC5jbG9zZUJ0bkluc2lkZSAmJlxuXHRcdFx0XHRtZnAuY3VyclRlbXBsYXRlW3R5cGVdID09PSB0cnVlKSB7XG5cdFx0XHRcdC8vIGlmIHRoZXJlIGlzIG5vIG1hcmt1cCwgd2UganVzdCBhcHBlbmQgY2xvc2UgYnV0dG9uIGVsZW1lbnQgaW5zaWRlXG5cdFx0XHRcdGlmKCFtZnAuY29udGVudC5maW5kKCcubWZwLWNsb3NlJykubGVuZ3RoKSB7XG5cdFx0XHRcdFx0bWZwLmNvbnRlbnQuYXBwZW5kKF9nZXRDbG9zZUJ0bigpKTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0bWZwLmNvbnRlbnQgPSBuZXdDb250ZW50O1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRtZnAuY29udGVudCA9ICcnO1xuXHRcdH1cblxuXHRcdF9tZnBUcmlnZ2VyKEJFRk9SRV9BUFBFTkRfRVZFTlQpO1xuXHRcdG1mcC5jb250YWluZXIuYWRkQ2xhc3MoJ21mcC0nK3R5cGUrJy1ob2xkZXInKTtcblxuXHRcdG1mcC5jb250ZW50Q29udGFpbmVyLmFwcGVuZChtZnAuY29udGVudCk7XG5cdH0sXG5cblxuXHQvKipcblx0ICogQ3JlYXRlcyBNYWduaWZpYyBQb3B1cCBkYXRhIG9iamVjdCBiYXNlZCBvbiBnaXZlbiBkYXRhXG5cdCAqIEBwYXJhbSAge2ludH0gaW5kZXggSW5kZXggb2YgaXRlbSB0byBwYXJzZVxuXHQgKi9cblx0cGFyc2VFbDogZnVuY3Rpb24oaW5kZXgpIHtcblx0XHR2YXIgaXRlbSA9IG1mcC5pdGVtc1tpbmRleF0sXG5cdFx0XHR0eXBlO1xuXG5cdFx0aWYoaXRlbS50YWdOYW1lKSB7XG5cdFx0XHRpdGVtID0geyBlbDogJChpdGVtKSB9O1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0eXBlID0gaXRlbS50eXBlO1xuXHRcdFx0aXRlbSA9IHsgZGF0YTogaXRlbSwgc3JjOiBpdGVtLnNyYyB9O1xuXHRcdH1cblxuXHRcdGlmKGl0ZW0uZWwpIHtcblx0XHRcdHZhciB0eXBlcyA9IG1mcC50eXBlcztcblxuXHRcdFx0Ly8gY2hlY2sgZm9yICdtZnAtVFlQRScgY2xhc3Ncblx0XHRcdGZvcih2YXIgaSA9IDA7IGkgPCB0eXBlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRpZiggaXRlbS5lbC5oYXNDbGFzcygnbWZwLScrdHlwZXNbaV0pICkge1xuXHRcdFx0XHRcdHR5cGUgPSB0eXBlc1tpXTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRpdGVtLnNyYyA9IGl0ZW0uZWwuYXR0cignZGF0YS1tZnAtc3JjJyk7XG5cdFx0XHRpZighaXRlbS5zcmMpIHtcblx0XHRcdFx0aXRlbS5zcmMgPSBpdGVtLmVsLmF0dHIoJ2hyZWYnKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpdGVtLnR5cGUgPSB0eXBlIHx8IG1mcC5zdC50eXBlIHx8ICdpbmxpbmUnO1xuXHRcdGl0ZW0uaW5kZXggPSBpbmRleDtcblx0XHRpdGVtLnBhcnNlZCA9IHRydWU7XG5cdFx0bWZwLml0ZW1zW2luZGV4XSA9IGl0ZW07XG5cdFx0X21mcFRyaWdnZXIoJ0VsZW1lbnRQYXJzZScsIGl0ZW0pO1xuXG5cdFx0cmV0dXJuIG1mcC5pdGVtc1tpbmRleF07XG5cdH0sXG5cblxuXHQvKipcblx0ICogSW5pdGlhbGl6ZXMgc2luZ2xlIHBvcHVwIG9yIGEgZ3JvdXAgb2YgcG9wdXBzXG5cdCAqL1xuXHRhZGRHcm91cDogZnVuY3Rpb24oZWwsIG9wdGlvbnMpIHtcblx0XHR2YXIgZUhhbmRsZXIgPSBmdW5jdGlvbihlKSB7XG5cdFx0XHRlLm1mcEVsID0gdGhpcztcblx0XHRcdG1mcC5fb3BlbkNsaWNrKGUsIGVsLCBvcHRpb25zKTtcblx0XHR9O1xuXG5cdFx0aWYoIW9wdGlvbnMpIHtcblx0XHRcdG9wdGlvbnMgPSB7fTtcblx0XHR9XG5cblx0XHR2YXIgZU5hbWUgPSAnY2xpY2subWFnbmlmaWNQb3B1cCc7XG5cdFx0b3B0aW9ucy5tYWluRWwgPSBlbDtcblxuXHRcdGlmKG9wdGlvbnMuaXRlbXMpIHtcblx0XHRcdG9wdGlvbnMuaXNPYmogPSB0cnVlO1xuXHRcdFx0ZWwub2ZmKGVOYW1lKS5vbihlTmFtZSwgZUhhbmRsZXIpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRvcHRpb25zLmlzT2JqID0gZmFsc2U7XG5cdFx0XHRpZihvcHRpb25zLmRlbGVnYXRlKSB7XG5cdFx0XHRcdGVsLm9mZihlTmFtZSkub24oZU5hbWUsIG9wdGlvbnMuZGVsZWdhdGUgLCBlSGFuZGxlcik7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRvcHRpb25zLml0ZW1zID0gZWw7XG5cdFx0XHRcdGVsLm9mZihlTmFtZSkub24oZU5hbWUsIGVIYW5kbGVyKTtcblx0XHRcdH1cblx0XHR9XG5cdH0sXG5cdF9vcGVuQ2xpY2s6IGZ1bmN0aW9uKGUsIGVsLCBvcHRpb25zKSB7XG5cdFx0dmFyIG1pZENsaWNrID0gb3B0aW9ucy5taWRDbGljayAhPT0gdW5kZWZpbmVkID8gb3B0aW9ucy5taWRDbGljayA6ICQubWFnbmlmaWNQb3B1cC5kZWZhdWx0cy5taWRDbGljaztcblxuXG5cdFx0aWYoIW1pZENsaWNrICYmICggZS53aGljaCA9PT0gMiB8fCBlLmN0cmxLZXkgfHwgZS5tZXRhS2V5IHx8IGUuYWx0S2V5IHx8IGUuc2hpZnRLZXkgKSApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHR2YXIgZGlzYWJsZU9uID0gb3B0aW9ucy5kaXNhYmxlT24gIT09IHVuZGVmaW5lZCA/IG9wdGlvbnMuZGlzYWJsZU9uIDogJC5tYWduaWZpY1BvcHVwLmRlZmF1bHRzLmRpc2FibGVPbjtcblxuXHRcdGlmKGRpc2FibGVPbikge1xuXHRcdFx0aWYoJC5pc0Z1bmN0aW9uKGRpc2FibGVPbikpIHtcblx0XHRcdFx0aWYoICFkaXNhYmxlT24uY2FsbChtZnApICkge1xuXHRcdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2UgeyAvLyBlbHNlIGl0J3MgbnVtYmVyXG5cdFx0XHRcdGlmKCBfd2luZG93LndpZHRoKCkgPCBkaXNhYmxlT24gKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZihlLnR5cGUpIHtcblx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblxuXHRcdFx0Ly8gVGhpcyB3aWxsIHByZXZlbnQgcG9wdXAgZnJvbSBjbG9zaW5nIGlmIGVsZW1lbnQgaXMgaW5zaWRlIGFuZCBwb3B1cCBpcyBhbHJlYWR5IG9wZW5lZFxuXHRcdFx0aWYobWZwLmlzT3Blbikge1xuXHRcdFx0XHRlLnN0b3BQcm9wYWdhdGlvbigpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdG9wdGlvbnMuZWwgPSAkKGUubWZwRWwpO1xuXHRcdGlmKG9wdGlvbnMuZGVsZWdhdGUpIHtcblx0XHRcdG9wdGlvbnMuaXRlbXMgPSBlbC5maW5kKG9wdGlvbnMuZGVsZWdhdGUpO1xuXHRcdH1cblx0XHRtZnAub3BlbihvcHRpb25zKTtcblx0fSxcblxuXG5cdC8qKlxuXHQgKiBVcGRhdGVzIHRleHQgb24gcHJlbG9hZGVyXG5cdCAqL1xuXHR1cGRhdGVTdGF0dXM6IGZ1bmN0aW9uKHN0YXR1cywgdGV4dCkge1xuXG5cdFx0aWYobWZwLnByZWxvYWRlcikge1xuXHRcdFx0aWYoX3ByZXZTdGF0dXMgIT09IHN0YXR1cykge1xuXHRcdFx0XHRtZnAuY29udGFpbmVyLnJlbW92ZUNsYXNzKCdtZnAtcy0nK19wcmV2U3RhdHVzKTtcblx0XHRcdH1cblxuXHRcdFx0aWYoIXRleHQgJiYgc3RhdHVzID09PSAnbG9hZGluZycpIHtcblx0XHRcdFx0dGV4dCA9IG1mcC5zdC50TG9hZGluZztcblx0XHRcdH1cblxuXHRcdFx0dmFyIGRhdGEgPSB7XG5cdFx0XHRcdHN0YXR1czogc3RhdHVzLFxuXHRcdFx0XHR0ZXh0OiB0ZXh0XG5cdFx0XHR9O1xuXHRcdFx0Ly8gYWxsb3dzIHRvIG1vZGlmeSBzdGF0dXNcblx0XHRcdF9tZnBUcmlnZ2VyKCdVcGRhdGVTdGF0dXMnLCBkYXRhKTtcblxuXHRcdFx0c3RhdHVzID0gZGF0YS5zdGF0dXM7XG5cdFx0XHR0ZXh0ID0gZGF0YS50ZXh0O1xuXG5cdFx0XHRtZnAucHJlbG9hZGVyLmh0bWwodGV4dCk7XG5cblx0XHRcdG1mcC5wcmVsb2FkZXIuZmluZCgnYScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcblx0XHRcdFx0ZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcblx0XHRcdH0pO1xuXG5cdFx0XHRtZnAuY29udGFpbmVyLmFkZENsYXNzKCdtZnAtcy0nK3N0YXR1cyk7XG5cdFx0XHRfcHJldlN0YXR1cyA9IHN0YXR1cztcblx0XHR9XG5cdH0sXG5cblxuXHQvKlxuXHRcdFwiUHJpdmF0ZVwiIGhlbHBlcnMgdGhhdCBhcmVuJ3QgcHJpdmF0ZSBhdCBhbGxcblx0ICovXG5cdC8vIENoZWNrIHRvIGNsb3NlIHBvcHVwIG9yIG5vdFxuXHQvLyBcInRhcmdldFwiIGlzIGFuIGVsZW1lbnQgdGhhdCB3YXMgY2xpY2tlZFxuXHRfY2hlY2tJZkNsb3NlOiBmdW5jdGlvbih0YXJnZXQpIHtcblxuXHRcdGlmKCQodGFyZ2V0KS5oYXNDbGFzcyhQUkVWRU5UX0NMT1NFX0NMQVNTKSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdHZhciBjbG9zZU9uQ29udGVudCA9IG1mcC5zdC5jbG9zZU9uQ29udGVudENsaWNrO1xuXHRcdHZhciBjbG9zZU9uQmcgPSBtZnAuc3QuY2xvc2VPbkJnQ2xpY2s7XG5cblx0XHRpZihjbG9zZU9uQ29udGVudCAmJiBjbG9zZU9uQmcpIHtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH0gZWxzZSB7XG5cblx0XHRcdC8vIFdlIGNsb3NlIHRoZSBwb3B1cCBpZiBjbGljayBpcyBvbiBjbG9zZSBidXR0b24gb3Igb24gcHJlbG9hZGVyLiBPciBpZiB0aGVyZSBpcyBubyBjb250ZW50LlxuXHRcdFx0aWYoIW1mcC5jb250ZW50IHx8ICQodGFyZ2V0KS5oYXNDbGFzcygnbWZwLWNsb3NlJykgfHwgKG1mcC5wcmVsb2FkZXIgJiYgdGFyZ2V0ID09PSBtZnAucHJlbG9hZGVyWzBdKSApIHtcblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9XG5cblx0XHRcdC8vIGlmIGNsaWNrIGlzIG91dHNpZGUgdGhlIGNvbnRlbnRcblx0XHRcdGlmKCAgKHRhcmdldCAhPT0gbWZwLmNvbnRlbnRbMF0gJiYgISQuY29udGFpbnMobWZwLmNvbnRlbnRbMF0sIHRhcmdldCkpICApIHtcblx0XHRcdFx0aWYoY2xvc2VPbkJnKSB7XG5cdFx0XHRcdFx0Ly8gbGFzdCBjaGVjaywgaWYgdGhlIGNsaWNrZWQgZWxlbWVudCBpcyBpbiBET00sIChpbiBjYXNlIGl0J3MgcmVtb3ZlZCBvbmNsaWNrKVxuXHRcdFx0XHRcdGlmKCAkLmNvbnRhaW5zKGRvY3VtZW50LCB0YXJnZXQpICkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2UgaWYoY2xvc2VPbkNvbnRlbnQpIHtcblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9XG5cblx0XHR9XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9LFxuXHRfYWRkQ2xhc3NUb01GUDogZnVuY3Rpb24oY05hbWUpIHtcblx0XHRtZnAuYmdPdmVybGF5LmFkZENsYXNzKGNOYW1lKTtcblx0XHRtZnAud3JhcC5hZGRDbGFzcyhjTmFtZSk7XG5cdH0sXG5cdF9yZW1vdmVDbGFzc0Zyb21NRlA6IGZ1bmN0aW9uKGNOYW1lKSB7XG5cdFx0dGhpcy5iZ092ZXJsYXkucmVtb3ZlQ2xhc3MoY05hbWUpO1xuXHRcdG1mcC53cmFwLnJlbW92ZUNsYXNzKGNOYW1lKTtcblx0fSxcblx0X2hhc1Njcm9sbEJhcjogZnVuY3Rpb24od2luSGVpZ2h0KSB7XG5cdFx0cmV0dXJuICggIChtZnAuaXNJRTcgPyBfZG9jdW1lbnQuaGVpZ2h0KCkgOiBkb2N1bWVudC5ib2R5LnNjcm9sbEhlaWdodCkgPiAod2luSGVpZ2h0IHx8IF93aW5kb3cuaGVpZ2h0KCkpICk7XG5cdH0sXG5cdF9zZXRGb2N1czogZnVuY3Rpb24oKSB7XG5cdFx0KG1mcC5zdC5mb2N1cyA/IG1mcC5jb250ZW50LmZpbmQobWZwLnN0LmZvY3VzKS5lcSgwKSA6IG1mcC53cmFwKS5mb2N1cygpO1xuXHR9LFxuXHRfb25Gb2N1c0luOiBmdW5jdGlvbihlKSB7XG5cdFx0aWYoIGUudGFyZ2V0ICE9PSBtZnAud3JhcFswXSAmJiAhJC5jb250YWlucyhtZnAud3JhcFswXSwgZS50YXJnZXQpICkge1xuXHRcdFx0bWZwLl9zZXRGb2N1cygpO1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0fSxcblx0X3BhcnNlTWFya3VwOiBmdW5jdGlvbih0ZW1wbGF0ZSwgdmFsdWVzLCBpdGVtKSB7XG5cdFx0dmFyIGFycjtcblx0XHRpZihpdGVtLmRhdGEpIHtcblx0XHRcdHZhbHVlcyA9ICQuZXh0ZW5kKGl0ZW0uZGF0YSwgdmFsdWVzKTtcblx0XHR9XG5cdFx0X21mcFRyaWdnZXIoTUFSS1VQX1BBUlNFX0VWRU5ULCBbdGVtcGxhdGUsIHZhbHVlcywgaXRlbV0gKTtcblxuXHRcdCQuZWFjaCh2YWx1ZXMsIGZ1bmN0aW9uKGtleSwgdmFsdWUpIHtcblx0XHRcdGlmKHZhbHVlID09PSB1bmRlZmluZWQgfHwgdmFsdWUgPT09IGZhbHNlKSB7XG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fVxuXHRcdFx0YXJyID0ga2V5LnNwbGl0KCdfJyk7XG5cdFx0XHRpZihhcnIubGVuZ3RoID4gMSkge1xuXHRcdFx0XHR2YXIgZWwgPSB0ZW1wbGF0ZS5maW5kKEVWRU5UX05TICsgJy0nK2FyclswXSk7XG5cblx0XHRcdFx0aWYoZWwubGVuZ3RoID4gMCkge1xuXHRcdFx0XHRcdHZhciBhdHRyID0gYXJyWzFdO1xuXHRcdFx0XHRcdGlmKGF0dHIgPT09ICdyZXBsYWNlV2l0aCcpIHtcblx0XHRcdFx0XHRcdGlmKGVsWzBdICE9PSB2YWx1ZVswXSkge1xuXHRcdFx0XHRcdFx0XHRlbC5yZXBsYWNlV2l0aCh2YWx1ZSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSBlbHNlIGlmKGF0dHIgPT09ICdpbWcnKSB7XG5cdFx0XHRcdFx0XHRpZihlbC5pcygnaW1nJykpIHtcblx0XHRcdFx0XHRcdFx0ZWwuYXR0cignc3JjJywgdmFsdWUpO1xuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0ZWwucmVwbGFjZVdpdGgoICQoJzxpbWc+JykuYXR0cignc3JjJywgdmFsdWUpLmF0dHIoJ2NsYXNzJywgZWwuYXR0cignY2xhc3MnKSkgKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0ZWwuYXR0cihhcnJbMV0sIHZhbHVlKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGVtcGxhdGUuZmluZChFVkVOVF9OUyArICctJytrZXkpLmh0bWwodmFsdWUpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9LFxuXG5cdF9nZXRTY3JvbGxiYXJTaXplOiBmdW5jdGlvbigpIHtcblx0XHQvLyB0aHggRGF2aWRcblx0XHRpZihtZnAuc2Nyb2xsYmFyU2l6ZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHR2YXIgc2Nyb2xsRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0XHRcdHNjcm9sbERpdi5zdHlsZS5jc3NUZXh0ID0gJ3dpZHRoOiA5OXB4OyBoZWlnaHQ6IDk5cHg7IG92ZXJmbG93OiBzY3JvbGw7IHBvc2l0aW9uOiBhYnNvbHV0ZTsgdG9wOiAtOTk5OXB4Oyc7XG5cdFx0XHRkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHNjcm9sbERpdik7XG5cdFx0XHRtZnAuc2Nyb2xsYmFyU2l6ZSA9IHNjcm9sbERpdi5vZmZzZXRXaWR0aCAtIHNjcm9sbERpdi5jbGllbnRXaWR0aDtcblx0XHRcdGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoc2Nyb2xsRGl2KTtcblx0XHR9XG5cdFx0cmV0dXJuIG1mcC5zY3JvbGxiYXJTaXplO1xuXHR9XG5cbn07IC8qIE1hZ25pZmljUG9wdXAgY29yZSBwcm90b3R5cGUgZW5kICovXG5cblxuXG5cbi8qKlxuICogUHVibGljIHN0YXRpYyBmdW5jdGlvbnNcbiAqL1xuJC5tYWduaWZpY1BvcHVwID0ge1xuXHRpbnN0YW5jZTogbnVsbCxcblx0cHJvdG86IE1hZ25pZmljUG9wdXAucHJvdG90eXBlLFxuXHRtb2R1bGVzOiBbXSxcblxuXHRvcGVuOiBmdW5jdGlvbihvcHRpb25zLCBpbmRleCkge1xuXHRcdF9jaGVja0luc3RhbmNlKCk7XG5cblx0XHRpZighb3B0aW9ucykge1xuXHRcdFx0b3B0aW9ucyA9IHt9O1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRvcHRpb25zID0gJC5leHRlbmQodHJ1ZSwge30sIG9wdGlvbnMpO1xuXHRcdH1cblxuXHRcdG9wdGlvbnMuaXNPYmogPSB0cnVlO1xuXHRcdG9wdGlvbnMuaW5kZXggPSBpbmRleCB8fCAwO1xuXHRcdHJldHVybiB0aGlzLmluc3RhbmNlLm9wZW4ob3B0aW9ucyk7XG5cdH0sXG5cblx0Y2xvc2U6IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiAkLm1hZ25pZmljUG9wdXAuaW5zdGFuY2UgJiYgJC5tYWduaWZpY1BvcHVwLmluc3RhbmNlLmNsb3NlKCk7XG5cdH0sXG5cblx0cmVnaXN0ZXJNb2R1bGU6IGZ1bmN0aW9uKG5hbWUsIG1vZHVsZSkge1xuXHRcdGlmKG1vZHVsZS5vcHRpb25zKSB7XG5cdFx0XHQkLm1hZ25pZmljUG9wdXAuZGVmYXVsdHNbbmFtZV0gPSBtb2R1bGUub3B0aW9ucztcblx0XHR9XG5cdFx0JC5leHRlbmQodGhpcy5wcm90bywgbW9kdWxlLnByb3RvKTtcblx0XHR0aGlzLm1vZHVsZXMucHVzaChuYW1lKTtcblx0fSxcblxuXHRkZWZhdWx0czoge1xuXG5cdFx0Ly8gSW5mbyBhYm91dCBvcHRpb25zIGlzIGluIGRvY3M6XG5cdFx0Ly8gaHR0cDovL2RpbXNlbWVub3YuY29tL3BsdWdpbnMvbWFnbmlmaWMtcG9wdXAvZG9jdW1lbnRhdGlvbi5odG1sI29wdGlvbnNcblxuXHRcdGRpc2FibGVPbjogMCxcblxuXHRcdGtleTogbnVsbCxcblxuXHRcdG1pZENsaWNrOiBmYWxzZSxcblxuXHRcdG1haW5DbGFzczogJycsXG5cblx0XHRwcmVsb2FkZXI6IHRydWUsXG5cblx0XHRmb2N1czogJycsIC8vIENTUyBzZWxlY3RvciBvZiBpbnB1dCB0byBmb2N1cyBhZnRlciBwb3B1cCBpcyBvcGVuZWRcblxuXHRcdGNsb3NlT25Db250ZW50Q2xpY2s6IGZhbHNlLFxuXG5cdFx0Y2xvc2VPbkJnQ2xpY2s6IHRydWUsXG5cblx0XHRjbG9zZUJ0bkluc2lkZTogdHJ1ZSxcblxuXHRcdHNob3dDbG9zZUJ0bjogdHJ1ZSxcblxuXHRcdGVuYWJsZUVzY2FwZUtleTogdHJ1ZSxcblxuXHRcdG1vZGFsOiBmYWxzZSxcblxuXHRcdGFsaWduVG9wOiBmYWxzZSxcblxuXHRcdHJlbW92YWxEZWxheTogMCxcblxuXHRcdHByZXBlbmRUbzogbnVsbCxcblxuXHRcdGZpeGVkQ29udGVudFBvczogJ2F1dG8nLFxuXG5cdFx0Zml4ZWRCZ1BvczogJ2F1dG8nLFxuXG5cdFx0b3ZlcmZsb3dZOiAnYXV0bycsXG5cblx0XHRjbG9zZU1hcmt1cDogJzxidXR0b24gdGl0bGU9XCIldGl0bGUlXCIgdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwibWZwLWNsb3NlXCI+JiMyMTU7PC9idXR0b24+JyxcblxuXHRcdHRDbG9zZTogJ0Nsb3NlIChFc2MpJyxcblxuXHRcdHRMb2FkaW5nOiAnTG9hZGluZy4uLicsXG5cblx0XHRhdXRvRm9jdXNMYXN0OiB0cnVlXG5cblx0fVxufTtcblxuXG5cbiQuZm4ubWFnbmlmaWNQb3B1cCA9IGZ1bmN0aW9uKG9wdGlvbnMpIHtcblx0X2NoZWNrSW5zdGFuY2UoKTtcblxuXHR2YXIganFFbCA9ICQodGhpcyk7XG5cblx0Ly8gV2UgY2FsbCBzb21lIEFQSSBtZXRob2Qgb2YgZmlyc3QgcGFyYW0gaXMgYSBzdHJpbmdcblx0aWYgKHR5cGVvZiBvcHRpb25zID09PSBcInN0cmluZ1wiICkge1xuXG5cdFx0aWYob3B0aW9ucyA9PT0gJ29wZW4nKSB7XG5cdFx0XHR2YXIgaXRlbXMsXG5cdFx0XHRcdGl0ZW1PcHRzID0gX2lzSlEgPyBqcUVsLmRhdGEoJ21hZ25pZmljUG9wdXAnKSA6IGpxRWxbMF0ubWFnbmlmaWNQb3B1cCxcblx0XHRcdFx0aW5kZXggPSBwYXJzZUludChhcmd1bWVudHNbMV0sIDEwKSB8fCAwO1xuXG5cdFx0XHRpZihpdGVtT3B0cy5pdGVtcykge1xuXHRcdFx0XHRpdGVtcyA9IGl0ZW1PcHRzLml0ZW1zW2luZGV4XTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGl0ZW1zID0ganFFbDtcblx0XHRcdFx0aWYoaXRlbU9wdHMuZGVsZWdhdGUpIHtcblx0XHRcdFx0XHRpdGVtcyA9IGl0ZW1zLmZpbmQoaXRlbU9wdHMuZGVsZWdhdGUpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGl0ZW1zID0gaXRlbXMuZXEoIGluZGV4ICk7XG5cdFx0XHR9XG5cdFx0XHRtZnAuX29wZW5DbGljayh7bWZwRWw6aXRlbXN9LCBqcUVsLCBpdGVtT3B0cyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGlmKG1mcC5pc09wZW4pXG5cdFx0XHRcdG1mcFtvcHRpb25zXS5hcHBseShtZnAsIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSkpO1xuXHRcdH1cblxuXHR9IGVsc2Uge1xuXHRcdC8vIGNsb25lIG9wdGlvbnMgb2JqXG5cdFx0b3B0aW9ucyA9ICQuZXh0ZW5kKHRydWUsIHt9LCBvcHRpb25zKTtcblxuXHRcdC8qXG5cdFx0ICogQXMgWmVwdG8gZG9lc24ndCBzdXBwb3J0IC5kYXRhKCkgbWV0aG9kIGZvciBvYmplY3RzXG5cdFx0ICogYW5kIGl0IHdvcmtzIG9ubHkgaW4gbm9ybWFsIGJyb3dzZXJzXG5cdFx0ICogd2UgYXNzaWduIFwib3B0aW9uc1wiIG9iamVjdCBkaXJlY3RseSB0byB0aGUgRE9NIGVsZW1lbnQuIEZUVyFcblx0XHQgKi9cblx0XHRpZihfaXNKUSkge1xuXHRcdFx0anFFbC5kYXRhKCdtYWduaWZpY1BvcHVwJywgb3B0aW9ucyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGpxRWxbMF0ubWFnbmlmaWNQb3B1cCA9IG9wdGlvbnM7XG5cdFx0fVxuXG5cdFx0bWZwLmFkZEdyb3VwKGpxRWwsIG9wdGlvbnMpO1xuXG5cdH1cblx0cmV0dXJuIGpxRWw7XG59O1xuXG4vKj4+Y29yZSovXG5cbi8qPj5pbmxpbmUqL1xuXG52YXIgSU5MSU5FX05TID0gJ2lubGluZScsXG5cdF9oaWRkZW5DbGFzcyxcblx0X2lubGluZVBsYWNlaG9sZGVyLFxuXHRfbGFzdElubGluZUVsZW1lbnQsXG5cdF9wdXRJbmxpbmVFbGVtZW50c0JhY2sgPSBmdW5jdGlvbigpIHtcblx0XHRpZihfbGFzdElubGluZUVsZW1lbnQpIHtcblx0XHRcdF9pbmxpbmVQbGFjZWhvbGRlci5hZnRlciggX2xhc3RJbmxpbmVFbGVtZW50LmFkZENsYXNzKF9oaWRkZW5DbGFzcykgKS5kZXRhY2goKTtcblx0XHRcdF9sYXN0SW5saW5lRWxlbWVudCA9IG51bGw7XG5cdFx0fVxuXHR9O1xuXG4kLm1hZ25pZmljUG9wdXAucmVnaXN0ZXJNb2R1bGUoSU5MSU5FX05TLCB7XG5cdG9wdGlvbnM6IHtcblx0XHRoaWRkZW5DbGFzczogJ2hpZGUnLCAvLyB3aWxsIGJlIGFwcGVuZGVkIHdpdGggYG1mcC1gIHByZWZpeFxuXHRcdG1hcmt1cDogJycsXG5cdFx0dE5vdEZvdW5kOiAnQ29udGVudCBub3QgZm91bmQnXG5cdH0sXG5cdHByb3RvOiB7XG5cblx0XHRpbml0SW5saW5lOiBmdW5jdGlvbigpIHtcblx0XHRcdG1mcC50eXBlcy5wdXNoKElOTElORV9OUyk7XG5cblx0XHRcdF9tZnBPbihDTE9TRV9FVkVOVCsnLicrSU5MSU5FX05TLCBmdW5jdGlvbigpIHtcblx0XHRcdFx0X3B1dElubGluZUVsZW1lbnRzQmFjaygpO1xuXHRcdFx0fSk7XG5cdFx0fSxcblxuXHRcdGdldElubGluZTogZnVuY3Rpb24oaXRlbSwgdGVtcGxhdGUpIHtcblxuXHRcdFx0X3B1dElubGluZUVsZW1lbnRzQmFjaygpO1xuXG5cdFx0XHRpZihpdGVtLnNyYykge1xuXHRcdFx0XHR2YXIgaW5saW5lU3QgPSBtZnAuc3QuaW5saW5lLFxuXHRcdFx0XHRcdGVsID0gJChpdGVtLnNyYyk7XG5cblx0XHRcdFx0aWYoZWwubGVuZ3RoKSB7XG5cblx0XHRcdFx0XHQvLyBJZiB0YXJnZXQgZWxlbWVudCBoYXMgcGFyZW50IC0gd2UgcmVwbGFjZSBpdCB3aXRoIHBsYWNlaG9sZGVyIGFuZCBwdXQgaXQgYmFjayBhZnRlciBwb3B1cCBpcyBjbG9zZWRcblx0XHRcdFx0XHR2YXIgcGFyZW50ID0gZWxbMF0ucGFyZW50Tm9kZTtcblx0XHRcdFx0XHRpZihwYXJlbnQgJiYgcGFyZW50LnRhZ05hbWUpIHtcblx0XHRcdFx0XHRcdGlmKCFfaW5saW5lUGxhY2Vob2xkZXIpIHtcblx0XHRcdFx0XHRcdFx0X2hpZGRlbkNsYXNzID0gaW5saW5lU3QuaGlkZGVuQ2xhc3M7XG5cdFx0XHRcdFx0XHRcdF9pbmxpbmVQbGFjZWhvbGRlciA9IF9nZXRFbChfaGlkZGVuQ2xhc3MpO1xuXHRcdFx0XHRcdFx0XHRfaGlkZGVuQ2xhc3MgPSAnbWZwLScrX2hpZGRlbkNsYXNzO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0Ly8gcmVwbGFjZSB0YXJnZXQgaW5saW5lIGVsZW1lbnQgd2l0aCBwbGFjZWhvbGRlclxuXHRcdFx0XHRcdFx0X2xhc3RJbmxpbmVFbGVtZW50ID0gZWwuYWZ0ZXIoX2lubGluZVBsYWNlaG9sZGVyKS5kZXRhY2goKS5yZW1vdmVDbGFzcyhfaGlkZGVuQ2xhc3MpO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdG1mcC51cGRhdGVTdGF0dXMoJ3JlYWR5Jyk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0bWZwLnVwZGF0ZVN0YXR1cygnZXJyb3InLCBpbmxpbmVTdC50Tm90Rm91bmQpO1xuXHRcdFx0XHRcdGVsID0gJCgnPGRpdj4nKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGl0ZW0uaW5saW5lRWxlbWVudCA9IGVsO1xuXHRcdFx0XHRyZXR1cm4gZWw7XG5cdFx0XHR9XG5cblx0XHRcdG1mcC51cGRhdGVTdGF0dXMoJ3JlYWR5Jyk7XG5cdFx0XHRtZnAuX3BhcnNlTWFya3VwKHRlbXBsYXRlLCB7fSwgaXRlbSk7XG5cdFx0XHRyZXR1cm4gdGVtcGxhdGU7XG5cdFx0fVxuXHR9XG59KTtcblxuLyo+PmlubGluZSovXG5cbi8qPj5hamF4Ki9cbnZhciBBSkFYX05TID0gJ2FqYXgnLFxuXHRfYWpheEN1cixcblx0X3JlbW92ZUFqYXhDdXJzb3IgPSBmdW5jdGlvbigpIHtcblx0XHRpZihfYWpheEN1cikge1xuXHRcdFx0JChkb2N1bWVudC5ib2R5KS5yZW1vdmVDbGFzcyhfYWpheEN1cik7XG5cdFx0fVxuXHR9LFxuXHRfZGVzdHJveUFqYXhSZXF1ZXN0ID0gZnVuY3Rpb24oKSB7XG5cdFx0X3JlbW92ZUFqYXhDdXJzb3IoKTtcblx0XHRpZihtZnAucmVxKSB7XG5cdFx0XHRtZnAucmVxLmFib3J0KCk7XG5cdFx0fVxuXHR9O1xuXG4kLm1hZ25pZmljUG9wdXAucmVnaXN0ZXJNb2R1bGUoQUpBWF9OUywge1xuXG5cdG9wdGlvbnM6IHtcblx0XHRzZXR0aW5nczogbnVsbCxcblx0XHRjdXJzb3I6ICdtZnAtYWpheC1jdXInLFxuXHRcdHRFcnJvcjogJzxhIGhyZWY9XCIldXJsJVwiPlRoZSBjb250ZW50PC9hPiBjb3VsZCBub3QgYmUgbG9hZGVkLidcblx0fSxcblxuXHRwcm90bzoge1xuXHRcdGluaXRBamF4OiBmdW5jdGlvbigpIHtcblx0XHRcdG1mcC50eXBlcy5wdXNoKEFKQVhfTlMpO1xuXHRcdFx0X2FqYXhDdXIgPSBtZnAuc3QuYWpheC5jdXJzb3I7XG5cblx0XHRcdF9tZnBPbihDTE9TRV9FVkVOVCsnLicrQUpBWF9OUywgX2Rlc3Ryb3lBamF4UmVxdWVzdCk7XG5cdFx0XHRfbWZwT24oJ0JlZm9yZUNoYW5nZS4nICsgQUpBWF9OUywgX2Rlc3Ryb3lBamF4UmVxdWVzdCk7XG5cdFx0fSxcblx0XHRnZXRBamF4OiBmdW5jdGlvbihpdGVtKSB7XG5cblx0XHRcdGlmKF9hamF4Q3VyKSB7XG5cdFx0XHRcdCQoZG9jdW1lbnQuYm9keSkuYWRkQ2xhc3MoX2FqYXhDdXIpO1xuXHRcdFx0fVxuXG5cdFx0XHRtZnAudXBkYXRlU3RhdHVzKCdsb2FkaW5nJyk7XG5cblx0XHRcdHZhciBvcHRzID0gJC5leHRlbmQoe1xuXHRcdFx0XHR1cmw6IGl0ZW0uc3JjLFxuXHRcdFx0XHRzdWNjZXNzOiBmdW5jdGlvbihkYXRhLCB0ZXh0U3RhdHVzLCBqcVhIUikge1xuXHRcdFx0XHRcdHZhciB0ZW1wID0ge1xuXHRcdFx0XHRcdFx0ZGF0YTpkYXRhLFxuXHRcdFx0XHRcdFx0eGhyOmpxWEhSXG5cdFx0XHRcdFx0fTtcblxuXHRcdFx0XHRcdF9tZnBUcmlnZ2VyKCdQYXJzZUFqYXgnLCB0ZW1wKTtcblxuXHRcdFx0XHRcdG1mcC5hcHBlbmRDb250ZW50KCAkKHRlbXAuZGF0YSksIEFKQVhfTlMgKTtcblxuXHRcdFx0XHRcdGl0ZW0uZmluaXNoZWQgPSB0cnVlO1xuXG5cdFx0XHRcdFx0X3JlbW92ZUFqYXhDdXJzb3IoKTtcblxuXHRcdFx0XHRcdG1mcC5fc2V0Rm9jdXMoKTtcblxuXHRcdFx0XHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0XHRtZnAud3JhcC5hZGRDbGFzcyhSRUFEWV9DTEFTUyk7XG5cdFx0XHRcdFx0fSwgMTYpO1xuXG5cdFx0XHRcdFx0bWZwLnVwZGF0ZVN0YXR1cygncmVhZHknKTtcblxuXHRcdFx0XHRcdF9tZnBUcmlnZ2VyKCdBamF4Q29udGVudEFkZGVkJyk7XG5cdFx0XHRcdH0sXG5cdFx0XHRcdGVycm9yOiBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRfcmVtb3ZlQWpheEN1cnNvcigpO1xuXHRcdFx0XHRcdGl0ZW0uZmluaXNoZWQgPSBpdGVtLmxvYWRFcnJvciA9IHRydWU7XG5cdFx0XHRcdFx0bWZwLnVwZGF0ZVN0YXR1cygnZXJyb3InLCBtZnAuc3QuYWpheC50RXJyb3IucmVwbGFjZSgnJXVybCUnLCBpdGVtLnNyYykpO1xuXHRcdFx0XHR9XG5cdFx0XHR9LCBtZnAuc3QuYWpheC5zZXR0aW5ncyk7XG5cblx0XHRcdG1mcC5yZXEgPSAkLmFqYXgob3B0cyk7XG5cblx0XHRcdHJldHVybiAnJztcblx0XHR9XG5cdH1cbn0pO1xuXG4vKj4+YWpheCovXG5cbi8qPj5pbWFnZSovXG52YXIgX2ltZ0ludGVydmFsLFxuXHRfZ2V0VGl0bGUgPSBmdW5jdGlvbihpdGVtKSB7XG5cdFx0aWYoaXRlbS5kYXRhICYmIGl0ZW0uZGF0YS50aXRsZSAhPT0gdW5kZWZpbmVkKVxuXHRcdFx0cmV0dXJuIGl0ZW0uZGF0YS50aXRsZTtcblxuXHRcdHZhciBzcmMgPSBtZnAuc3QuaW1hZ2UudGl0bGVTcmM7XG5cblx0XHRpZihzcmMpIHtcblx0XHRcdGlmKCQuaXNGdW5jdGlvbihzcmMpKSB7XG5cdFx0XHRcdHJldHVybiBzcmMuY2FsbChtZnAsIGl0ZW0pO1xuXHRcdFx0fSBlbHNlIGlmKGl0ZW0uZWwpIHtcblx0XHRcdFx0cmV0dXJuIGl0ZW0uZWwuYXR0cihzcmMpIHx8ICcnO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gJyc7XG5cdH07XG5cbiQubWFnbmlmaWNQb3B1cC5yZWdpc3Rlck1vZHVsZSgnaW1hZ2UnLCB7XG5cblx0b3B0aW9uczoge1xuXHRcdG1hcmt1cDogJzxkaXYgY2xhc3M9XCJtZnAtZmlndXJlXCI+Jytcblx0XHRcdFx0XHQnPGRpdiBjbGFzcz1cIm1mcC1jbG9zZVwiPjwvZGl2PicrXG5cdFx0XHRcdFx0JzxmaWd1cmU+Jytcblx0XHRcdFx0XHRcdCc8ZGl2IGNsYXNzPVwibWZwLWltZ1wiPjwvZGl2PicrXG5cdFx0XHRcdFx0XHQnPGZpZ2NhcHRpb24+Jytcblx0XHRcdFx0XHRcdFx0JzxkaXYgY2xhc3M9XCJtZnAtYm90dG9tLWJhclwiPicrXG5cdFx0XHRcdFx0XHRcdFx0JzxkaXYgY2xhc3M9XCJtZnAtdGl0bGVcIj48L2Rpdj4nK1xuXHRcdFx0XHRcdFx0XHRcdCc8ZGl2IGNsYXNzPVwibWZwLWNvdW50ZXJcIj48L2Rpdj4nK1xuXHRcdFx0XHRcdFx0XHQnPC9kaXY+Jytcblx0XHRcdFx0XHRcdCc8L2ZpZ2NhcHRpb24+Jytcblx0XHRcdFx0XHQnPC9maWd1cmU+Jytcblx0XHRcdFx0JzwvZGl2PicsXG5cdFx0Y3Vyc29yOiAnbWZwLXpvb20tb3V0LWN1cicsXG5cdFx0dGl0bGVTcmM6ICd0aXRsZScsXG5cdFx0dmVydGljYWxGaXQ6IHRydWUsXG5cdFx0dEVycm9yOiAnPGEgaHJlZj1cIiV1cmwlXCI+VGhlIGltYWdlPC9hPiBjb3VsZCBub3QgYmUgbG9hZGVkLidcblx0fSxcblxuXHRwcm90bzoge1xuXHRcdGluaXRJbWFnZTogZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgaW1nU3QgPSBtZnAuc3QuaW1hZ2UsXG5cdFx0XHRcdG5zID0gJy5pbWFnZSc7XG5cblx0XHRcdG1mcC50eXBlcy5wdXNoKCdpbWFnZScpO1xuXG5cdFx0XHRfbWZwT24oT1BFTl9FVkVOVCtucywgZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGlmKG1mcC5jdXJySXRlbS50eXBlID09PSAnaW1hZ2UnICYmIGltZ1N0LmN1cnNvcikge1xuXHRcdFx0XHRcdCQoZG9jdW1lbnQuYm9keSkuYWRkQ2xhc3MoaW1nU3QuY3Vyc29yKTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cblx0XHRcdF9tZnBPbihDTE9TRV9FVkVOVCtucywgZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGlmKGltZ1N0LmN1cnNvcikge1xuXHRcdFx0XHRcdCQoZG9jdW1lbnQuYm9keSkucmVtb3ZlQ2xhc3MoaW1nU3QuY3Vyc29yKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRfd2luZG93Lm9mZigncmVzaXplJyArIEVWRU5UX05TKTtcblx0XHRcdH0pO1xuXG5cdFx0XHRfbWZwT24oJ1Jlc2l6ZScrbnMsIG1mcC5yZXNpemVJbWFnZSk7XG5cdFx0XHRpZihtZnAuaXNMb3dJRSkge1xuXHRcdFx0XHRfbWZwT24oJ0FmdGVyQ2hhbmdlJywgbWZwLnJlc2l6ZUltYWdlKTtcblx0XHRcdH1cblx0XHR9LFxuXHRcdHJlc2l6ZUltYWdlOiBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBpdGVtID0gbWZwLmN1cnJJdGVtO1xuXHRcdFx0aWYoIWl0ZW0gfHwgIWl0ZW0uaW1nKSByZXR1cm47XG5cblx0XHRcdGlmKG1mcC5zdC5pbWFnZS52ZXJ0aWNhbEZpdCkge1xuXHRcdFx0XHR2YXIgZGVjciA9IDA7XG5cdFx0XHRcdC8vIGZpeCBib3gtc2l6aW5nIGluIGllNy84XG5cdFx0XHRcdGlmKG1mcC5pc0xvd0lFKSB7XG5cdFx0XHRcdFx0ZGVjciA9IHBhcnNlSW50KGl0ZW0uaW1nLmNzcygncGFkZGluZy10b3AnKSwgMTApICsgcGFyc2VJbnQoaXRlbS5pbWcuY3NzKCdwYWRkaW5nLWJvdHRvbScpLDEwKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpdGVtLmltZy5jc3MoJ21heC1oZWlnaHQnLCBtZnAud0gtZGVjcik7XG5cdFx0XHR9XG5cdFx0fSxcblx0XHRfb25JbWFnZUhhc1NpemU6IGZ1bmN0aW9uKGl0ZW0pIHtcblx0XHRcdGlmKGl0ZW0uaW1nKSB7XG5cblx0XHRcdFx0aXRlbS5oYXNTaXplID0gdHJ1ZTtcblxuXHRcdFx0XHRpZihfaW1nSW50ZXJ2YWwpIHtcblx0XHRcdFx0XHRjbGVhckludGVydmFsKF9pbWdJbnRlcnZhbCk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpdGVtLmlzQ2hlY2tpbmdJbWdTaXplID0gZmFsc2U7XG5cblx0XHRcdFx0X21mcFRyaWdnZXIoJ0ltYWdlSGFzU2l6ZScsIGl0ZW0pO1xuXG5cdFx0XHRcdGlmKGl0ZW0uaW1nSGlkZGVuKSB7XG5cdFx0XHRcdFx0aWYobWZwLmNvbnRlbnQpXG5cdFx0XHRcdFx0XHRtZnAuY29udGVudC5yZW1vdmVDbGFzcygnbWZwLWxvYWRpbmcnKTtcblxuXHRcdFx0XHRcdGl0ZW0uaW1nSGlkZGVuID0gZmFsc2U7XG5cdFx0XHRcdH1cblxuXHRcdFx0fVxuXHRcdH0sXG5cblx0XHQvKipcblx0XHQgKiBGdW5jdGlvbiB0aGF0IGxvb3BzIHVudGlsIHRoZSBpbWFnZSBoYXMgc2l6ZSB0byBkaXNwbGF5IGVsZW1lbnRzIHRoYXQgcmVseSBvbiBpdCBhc2FwXG5cdFx0ICovXG5cdFx0ZmluZEltYWdlU2l6ZTogZnVuY3Rpb24oaXRlbSkge1xuXG5cdFx0XHR2YXIgY291bnRlciA9IDAsXG5cdFx0XHRcdGltZyA9IGl0ZW0uaW1nWzBdLFxuXHRcdFx0XHRtZnBTZXRJbnRlcnZhbCA9IGZ1bmN0aW9uKGRlbGF5KSB7XG5cblx0XHRcdFx0XHRpZihfaW1nSW50ZXJ2YWwpIHtcblx0XHRcdFx0XHRcdGNsZWFySW50ZXJ2YWwoX2ltZ0ludGVydmFsKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Ly8gZGVjZWxlcmF0aW5nIGludGVydmFsIHRoYXQgY2hlY2tzIGZvciBzaXplIG9mIGFuIGltYWdlXG5cdFx0XHRcdFx0X2ltZ0ludGVydmFsID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0XHRpZihpbWcubmF0dXJhbFdpZHRoID4gMCkge1xuXHRcdFx0XHRcdFx0XHRtZnAuX29uSW1hZ2VIYXNTaXplKGl0ZW0pO1xuXHRcdFx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdGlmKGNvdW50ZXIgPiAyMDApIHtcblx0XHRcdFx0XHRcdFx0Y2xlYXJJbnRlcnZhbChfaW1nSW50ZXJ2YWwpO1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRjb3VudGVyKys7XG5cdFx0XHRcdFx0XHRpZihjb3VudGVyID09PSAzKSB7XG5cdFx0XHRcdFx0XHRcdG1mcFNldEludGVydmFsKDEwKTtcblx0XHRcdFx0XHRcdH0gZWxzZSBpZihjb3VudGVyID09PSA0MCkge1xuXHRcdFx0XHRcdFx0XHRtZnBTZXRJbnRlcnZhbCg1MCk7XG5cdFx0XHRcdFx0XHR9IGVsc2UgaWYoY291bnRlciA9PT0gMTAwKSB7XG5cdFx0XHRcdFx0XHRcdG1mcFNldEludGVydmFsKDUwMCk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSwgZGVsYXkpO1xuXHRcdFx0XHR9O1xuXG5cdFx0XHRtZnBTZXRJbnRlcnZhbCgxKTtcblx0XHR9LFxuXG5cdFx0Z2V0SW1hZ2U6IGZ1bmN0aW9uKGl0ZW0sIHRlbXBsYXRlKSB7XG5cblx0XHRcdHZhciBndWFyZCA9IDAsXG5cblx0XHRcdFx0Ly8gaW1hZ2UgbG9hZCBjb21wbGV0ZSBoYW5kbGVyXG5cdFx0XHRcdG9uTG9hZENvbXBsZXRlID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0aWYoaXRlbSkge1xuXHRcdFx0XHRcdFx0aWYgKGl0ZW0uaW1nWzBdLmNvbXBsZXRlKSB7XG5cdFx0XHRcdFx0XHRcdGl0ZW0uaW1nLm9mZignLm1mcGxvYWRlcicpO1xuXG5cdFx0XHRcdFx0XHRcdGlmKGl0ZW0gPT09IG1mcC5jdXJySXRlbSl7XG5cdFx0XHRcdFx0XHRcdFx0bWZwLl9vbkltYWdlSGFzU2l6ZShpdGVtKTtcblxuXHRcdFx0XHRcdFx0XHRcdG1mcC51cGRhdGVTdGF0dXMoJ3JlYWR5Jyk7XG5cdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHRpdGVtLmhhc1NpemUgPSB0cnVlO1xuXHRcdFx0XHRcdFx0XHRpdGVtLmxvYWRlZCA9IHRydWU7XG5cblx0XHRcdFx0XHRcdFx0X21mcFRyaWdnZXIoJ0ltYWdlTG9hZENvbXBsZXRlJyk7XG5cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGVsc2Uge1xuXHRcdFx0XHRcdFx0XHQvLyBpZiBpbWFnZSBjb21wbGV0ZSBjaGVjayBmYWlscyAyMDAgdGltZXMgKDIwIHNlYyksIHdlIGFzc3VtZSB0aGF0IHRoZXJlIHdhcyBhbiBlcnJvci5cblx0XHRcdFx0XHRcdFx0Z3VhcmQrKztcblx0XHRcdFx0XHRcdFx0aWYoZ3VhcmQgPCAyMDApIHtcblx0XHRcdFx0XHRcdFx0XHRzZXRUaW1lb3V0KG9uTG9hZENvbXBsZXRlLDEwMCk7XG5cdFx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdFx0b25Mb2FkRXJyb3IoKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSxcblxuXHRcdFx0XHQvLyBpbWFnZSBlcnJvciBoYW5kbGVyXG5cdFx0XHRcdG9uTG9hZEVycm9yID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0aWYoaXRlbSkge1xuXHRcdFx0XHRcdFx0aXRlbS5pbWcub2ZmKCcubWZwbG9hZGVyJyk7XG5cdFx0XHRcdFx0XHRpZihpdGVtID09PSBtZnAuY3Vyckl0ZW0pe1xuXHRcdFx0XHRcdFx0XHRtZnAuX29uSW1hZ2VIYXNTaXplKGl0ZW0pO1xuXHRcdFx0XHRcdFx0XHRtZnAudXBkYXRlU3RhdHVzKCdlcnJvcicsIGltZ1N0LnRFcnJvci5yZXBsYWNlKCcldXJsJScsIGl0ZW0uc3JjKSApO1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRpdGVtLmhhc1NpemUgPSB0cnVlO1xuXHRcdFx0XHRcdFx0aXRlbS5sb2FkZWQgPSB0cnVlO1xuXHRcdFx0XHRcdFx0aXRlbS5sb2FkRXJyb3IgPSB0cnVlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSxcblx0XHRcdFx0aW1nU3QgPSBtZnAuc3QuaW1hZ2U7XG5cblxuXHRcdFx0dmFyIGVsID0gdGVtcGxhdGUuZmluZCgnLm1mcC1pbWcnKTtcblx0XHRcdGlmKGVsLmxlbmd0aCkge1xuXHRcdFx0XHR2YXIgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG5cdFx0XHRcdGltZy5jbGFzc05hbWUgPSAnbWZwLWltZyc7XG5cdFx0XHRcdGlmKGl0ZW0uZWwgJiYgaXRlbS5lbC5maW5kKCdpbWcnKS5sZW5ndGgpIHtcblx0XHRcdFx0XHRpbWcuYWx0ID0gaXRlbS5lbC5maW5kKCdpbWcnKS5hdHRyKCdhbHQnKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpdGVtLmltZyA9ICQoaW1nKS5vbignbG9hZC5tZnBsb2FkZXInLCBvbkxvYWRDb21wbGV0ZSkub24oJ2Vycm9yLm1mcGxvYWRlcicsIG9uTG9hZEVycm9yKTtcblx0XHRcdFx0aW1nLnNyYyA9IGl0ZW0uc3JjO1xuXG5cdFx0XHRcdC8vIHdpdGhvdXQgY2xvbmUoKSBcImVycm9yXCIgZXZlbnQgaXMgbm90IGZpcmluZyB3aGVuIElNRyBpcyByZXBsYWNlZCBieSBuZXcgSU1HXG5cdFx0XHRcdC8vIFRPRE86IGZpbmQgYSB3YXkgdG8gYXZvaWQgc3VjaCBjbG9uaW5nXG5cdFx0XHRcdGlmKGVsLmlzKCdpbWcnKSkge1xuXHRcdFx0XHRcdGl0ZW0uaW1nID0gaXRlbS5pbWcuY2xvbmUoKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGltZyA9IGl0ZW0uaW1nWzBdO1xuXHRcdFx0XHRpZihpbWcubmF0dXJhbFdpZHRoID4gMCkge1xuXHRcdFx0XHRcdGl0ZW0uaGFzU2l6ZSA9IHRydWU7XG5cdFx0XHRcdH0gZWxzZSBpZighaW1nLndpZHRoKSB7XG5cdFx0XHRcdFx0aXRlbS5oYXNTaXplID0gZmFsc2U7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0bWZwLl9wYXJzZU1hcmt1cCh0ZW1wbGF0ZSwge1xuXHRcdFx0XHR0aXRsZTogX2dldFRpdGxlKGl0ZW0pLFxuXHRcdFx0XHRpbWdfcmVwbGFjZVdpdGg6IGl0ZW0uaW1nXG5cdFx0XHR9LCBpdGVtKTtcblxuXHRcdFx0bWZwLnJlc2l6ZUltYWdlKCk7XG5cblx0XHRcdGlmKGl0ZW0uaGFzU2l6ZSkge1xuXHRcdFx0XHRpZihfaW1nSW50ZXJ2YWwpIGNsZWFySW50ZXJ2YWwoX2ltZ0ludGVydmFsKTtcblxuXHRcdFx0XHRpZihpdGVtLmxvYWRFcnJvcikge1xuXHRcdFx0XHRcdHRlbXBsYXRlLmFkZENsYXNzKCdtZnAtbG9hZGluZycpO1xuXHRcdFx0XHRcdG1mcC51cGRhdGVTdGF0dXMoJ2Vycm9yJywgaW1nU3QudEVycm9yLnJlcGxhY2UoJyV1cmwlJywgaXRlbS5zcmMpICk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dGVtcGxhdGUucmVtb3ZlQ2xhc3MoJ21mcC1sb2FkaW5nJyk7XG5cdFx0XHRcdFx0bWZwLnVwZGF0ZVN0YXR1cygncmVhZHknKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gdGVtcGxhdGU7XG5cdFx0XHR9XG5cblx0XHRcdG1mcC51cGRhdGVTdGF0dXMoJ2xvYWRpbmcnKTtcblx0XHRcdGl0ZW0ubG9hZGluZyA9IHRydWU7XG5cblx0XHRcdGlmKCFpdGVtLmhhc1NpemUpIHtcblx0XHRcdFx0aXRlbS5pbWdIaWRkZW4gPSB0cnVlO1xuXHRcdFx0XHR0ZW1wbGF0ZS5hZGRDbGFzcygnbWZwLWxvYWRpbmcnKTtcblx0XHRcdFx0bWZwLmZpbmRJbWFnZVNpemUoaXRlbSk7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiB0ZW1wbGF0ZTtcblx0XHR9XG5cdH1cbn0pO1xuXG4vKj4+aW1hZ2UqL1xuXG4vKj4+em9vbSovXG52YXIgaGFzTW96VHJhbnNmb3JtLFxuXHRnZXRIYXNNb3pUcmFuc2Zvcm0gPSBmdW5jdGlvbigpIHtcblx0XHRpZihoYXNNb3pUcmFuc2Zvcm0gPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0aGFzTW96VHJhbnNmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpLnN0eWxlLk1velRyYW5zZm9ybSAhPT0gdW5kZWZpbmVkO1xuXHRcdH1cblx0XHRyZXR1cm4gaGFzTW96VHJhbnNmb3JtO1xuXHR9O1xuXG4kLm1hZ25pZmljUG9wdXAucmVnaXN0ZXJNb2R1bGUoJ3pvb20nLCB7XG5cblx0b3B0aW9uczoge1xuXHRcdGVuYWJsZWQ6IGZhbHNlLFxuXHRcdGVhc2luZzogJ2Vhc2UtaW4tb3V0Jyxcblx0XHRkdXJhdGlvbjogMzAwLFxuXHRcdG9wZW5lcjogZnVuY3Rpb24oZWxlbWVudCkge1xuXHRcdFx0cmV0dXJuIGVsZW1lbnQuaXMoJ2ltZycpID8gZWxlbWVudCA6IGVsZW1lbnQuZmluZCgnaW1nJyk7XG5cdFx0fVxuXHR9LFxuXG5cdHByb3RvOiB7XG5cblx0XHRpbml0Wm9vbTogZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgem9vbVN0ID0gbWZwLnN0Lnpvb20sXG5cdFx0XHRcdG5zID0gJy56b29tJyxcblx0XHRcdFx0aW1hZ2U7XG5cblx0XHRcdGlmKCF6b29tU3QuZW5hYmxlZCB8fCAhbWZwLnN1cHBvcnRzVHJhbnNpdGlvbikge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdHZhciBkdXJhdGlvbiA9IHpvb21TdC5kdXJhdGlvbixcblx0XHRcdFx0Z2V0RWxUb0FuaW1hdGUgPSBmdW5jdGlvbihpbWFnZSkge1xuXHRcdFx0XHRcdHZhciBuZXdJbWcgPSBpbWFnZS5jbG9uZSgpLnJlbW92ZUF0dHIoJ3N0eWxlJykucmVtb3ZlQXR0cignY2xhc3MnKS5hZGRDbGFzcygnbWZwLWFuaW1hdGVkLWltYWdlJyksXG5cdFx0XHRcdFx0XHR0cmFuc2l0aW9uID0gJ2FsbCAnKyh6b29tU3QuZHVyYXRpb24vMTAwMCkrJ3MgJyArIHpvb21TdC5lYXNpbmcsXG5cdFx0XHRcdFx0XHRjc3NPYmogPSB7XG5cdFx0XHRcdFx0XHRcdHBvc2l0aW9uOiAnZml4ZWQnLFxuXHRcdFx0XHRcdFx0XHR6SW5kZXg6IDk5OTksXG5cdFx0XHRcdFx0XHRcdGxlZnQ6IDAsXG5cdFx0XHRcdFx0XHRcdHRvcDogMCxcblx0XHRcdFx0XHRcdFx0Jy13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eSc6ICdoaWRkZW4nXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0dCA9ICd0cmFuc2l0aW9uJztcblxuXHRcdFx0XHRcdGNzc09ialsnLXdlYmtpdC0nK3RdID0gY3NzT2JqWyctbW96LScrdF0gPSBjc3NPYmpbJy1vLScrdF0gPSBjc3NPYmpbdF0gPSB0cmFuc2l0aW9uO1xuXG5cdFx0XHRcdFx0bmV3SW1nLmNzcyhjc3NPYmopO1xuXHRcdFx0XHRcdHJldHVybiBuZXdJbWc7XG5cdFx0XHRcdH0sXG5cdFx0XHRcdHNob3dNYWluQ29udGVudCA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdG1mcC5jb250ZW50LmNzcygndmlzaWJpbGl0eScsICd2aXNpYmxlJyk7XG5cdFx0XHRcdH0sXG5cdFx0XHRcdG9wZW5UaW1lb3V0LFxuXHRcdFx0XHRhbmltYXRlZEltZztcblxuXHRcdFx0X21mcE9uKCdCdWlsZENvbnRyb2xzJytucywgZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGlmKG1mcC5fYWxsb3dab29tKCkpIHtcblxuXHRcdFx0XHRcdGNsZWFyVGltZW91dChvcGVuVGltZW91dCk7XG5cdFx0XHRcdFx0bWZwLmNvbnRlbnQuY3NzKCd2aXNpYmlsaXR5JywgJ2hpZGRlbicpO1xuXG5cdFx0XHRcdFx0Ly8gQmFzaWNhbGx5LCBhbGwgY29kZSBiZWxvdyBkb2VzIGlzIGNsb25lcyBleGlzdGluZyBpbWFnZSwgcHV0cyBpbiBvbiB0b3Agb2YgdGhlIGN1cnJlbnQgb25lIGFuZCBhbmltYXRlZCBpdFxuXG5cdFx0XHRcdFx0aW1hZ2UgPSBtZnAuX2dldEl0ZW1Ub1pvb20oKTtcblxuXHRcdFx0XHRcdGlmKCFpbWFnZSkge1xuXHRcdFx0XHRcdFx0c2hvd01haW5Db250ZW50KCk7XG5cdFx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0YW5pbWF0ZWRJbWcgPSBnZXRFbFRvQW5pbWF0ZShpbWFnZSk7XG5cblx0XHRcdFx0XHRhbmltYXRlZEltZy5jc3MoIG1mcC5fZ2V0T2Zmc2V0KCkgKTtcblxuXHRcdFx0XHRcdG1mcC53cmFwLmFwcGVuZChhbmltYXRlZEltZyk7XG5cblx0XHRcdFx0XHRvcGVuVGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0XHRhbmltYXRlZEltZy5jc3MoIG1mcC5fZ2V0T2Zmc2V0KCB0cnVlICkgKTtcblx0XHRcdFx0XHRcdG9wZW5UaW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbigpIHtcblxuXHRcdFx0XHRcdFx0XHRzaG93TWFpbkNvbnRlbnQoKTtcblxuXHRcdFx0XHRcdFx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdFx0XHRcdGFuaW1hdGVkSW1nLnJlbW92ZSgpO1xuXHRcdFx0XHRcdFx0XHRcdGltYWdlID0gYW5pbWF0ZWRJbWcgPSBudWxsO1xuXHRcdFx0XHRcdFx0XHRcdF9tZnBUcmlnZ2VyKCdab29tQW5pbWF0aW9uRW5kZWQnKTtcblx0XHRcdFx0XHRcdFx0fSwgMTYpOyAvLyBhdm9pZCBibGluayB3aGVuIHN3aXRjaGluZyBpbWFnZXNcblxuXHRcdFx0XHRcdFx0fSwgZHVyYXRpb24pOyAvLyB0aGlzIHRpbWVvdXQgZXF1YWxzIGFuaW1hdGlvbiBkdXJhdGlvblxuXG5cdFx0XHRcdFx0fSwgMTYpOyAvLyBieSBhZGRpbmcgdGhpcyB0aW1lb3V0IHdlIGF2b2lkIHNob3J0IGdsaXRjaCBhdCB0aGUgYmVnaW5uaW5nIG9mIGFuaW1hdGlvblxuXG5cblx0XHRcdFx0XHQvLyBMb3RzIG9mIHRpbWVvdXRzLi4uXG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdFx0X21mcE9uKEJFRk9SRV9DTE9TRV9FVkVOVCtucywgZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGlmKG1mcC5fYWxsb3dab29tKCkpIHtcblxuXHRcdFx0XHRcdGNsZWFyVGltZW91dChvcGVuVGltZW91dCk7XG5cblx0XHRcdFx0XHRtZnAuc3QucmVtb3ZhbERlbGF5ID0gZHVyYXRpb247XG5cblx0XHRcdFx0XHRpZighaW1hZ2UpIHtcblx0XHRcdFx0XHRcdGltYWdlID0gbWZwLl9nZXRJdGVtVG9ab29tKCk7XG5cdFx0XHRcdFx0XHRpZighaW1hZ2UpIHtcblx0XHRcdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0YW5pbWF0ZWRJbWcgPSBnZXRFbFRvQW5pbWF0ZShpbWFnZSk7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0YW5pbWF0ZWRJbWcuY3NzKCBtZnAuX2dldE9mZnNldCh0cnVlKSApO1xuXHRcdFx0XHRcdG1mcC53cmFwLmFwcGVuZChhbmltYXRlZEltZyk7XG5cdFx0XHRcdFx0bWZwLmNvbnRlbnQuY3NzKCd2aXNpYmlsaXR5JywgJ2hpZGRlbicpO1xuXG5cdFx0XHRcdFx0c2V0VGltZW91dChmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRcdGFuaW1hdGVkSW1nLmNzcyggbWZwLl9nZXRPZmZzZXQoKSApO1xuXHRcdFx0XHRcdH0sIDE2KTtcblx0XHRcdFx0fVxuXG5cdFx0XHR9KTtcblxuXHRcdFx0X21mcE9uKENMT1NFX0VWRU5UK25zLCBmdW5jdGlvbigpIHtcblx0XHRcdFx0aWYobWZwLl9hbGxvd1pvb20oKSkge1xuXHRcdFx0XHRcdHNob3dNYWluQ29udGVudCgpO1xuXHRcdFx0XHRcdGlmKGFuaW1hdGVkSW1nKSB7XG5cdFx0XHRcdFx0XHRhbmltYXRlZEltZy5yZW1vdmUoKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aW1hZ2UgPSBudWxsO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHR9LFxuXG5cdFx0X2FsbG93Wm9vbTogZnVuY3Rpb24oKSB7XG5cdFx0XHRyZXR1cm4gbWZwLmN1cnJJdGVtLnR5cGUgPT09ICdpbWFnZSc7XG5cdFx0fSxcblxuXHRcdF9nZXRJdGVtVG9ab29tOiBmdW5jdGlvbigpIHtcblx0XHRcdGlmKG1mcC5jdXJySXRlbS5oYXNTaXplKSB7XG5cdFx0XHRcdHJldHVybiBtZnAuY3Vyckl0ZW0uaW1nO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXHRcdH0sXG5cblx0XHQvLyBHZXQgZWxlbWVudCBwb3N0aW9uIHJlbGF0aXZlIHRvIHZpZXdwb3J0XG5cdFx0X2dldE9mZnNldDogZnVuY3Rpb24oaXNMYXJnZSkge1xuXHRcdFx0dmFyIGVsO1xuXHRcdFx0aWYoaXNMYXJnZSkge1xuXHRcdFx0XHRlbCA9IG1mcC5jdXJySXRlbS5pbWc7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRlbCA9IG1mcC5zdC56b29tLm9wZW5lcihtZnAuY3Vyckl0ZW0uZWwgfHwgbWZwLmN1cnJJdGVtKTtcblx0XHRcdH1cblxuXHRcdFx0dmFyIG9mZnNldCA9IGVsLm9mZnNldCgpO1xuXHRcdFx0dmFyIHBhZGRpbmdUb3AgPSBwYXJzZUludChlbC5jc3MoJ3BhZGRpbmctdG9wJyksMTApO1xuXHRcdFx0dmFyIHBhZGRpbmdCb3R0b20gPSBwYXJzZUludChlbC5jc3MoJ3BhZGRpbmctYm90dG9tJyksMTApO1xuXHRcdFx0b2Zmc2V0LnRvcCAtPSAoICQod2luZG93KS5zY3JvbGxUb3AoKSAtIHBhZGRpbmdUb3AgKTtcblxuXG5cdFx0XHQvKlxuXG5cdFx0XHRBbmltYXRpbmcgbGVmdCArIHRvcCArIHdpZHRoL2hlaWdodCBsb29rcyBnbGl0Y2h5IGluIEZpcmVmb3gsIGJ1dCBwZXJmZWN0IGluIENocm9tZS4gQW5kIHZpY2UtdmVyc2EuXG5cblx0XHRcdCAqL1xuXHRcdFx0dmFyIG9iaiA9IHtcblx0XHRcdFx0d2lkdGg6IGVsLndpZHRoKCksXG5cdFx0XHRcdC8vIGZpeCBaZXB0byBoZWlnaHQrcGFkZGluZyBpc3N1ZVxuXHRcdFx0XHRoZWlnaHQ6IChfaXNKUSA/IGVsLmlubmVySGVpZ2h0KCkgOiBlbFswXS5vZmZzZXRIZWlnaHQpIC0gcGFkZGluZ0JvdHRvbSAtIHBhZGRpbmdUb3Bcblx0XHRcdH07XG5cblx0XHRcdC8vIEkgaGF0ZSB0byBkbyB0aGlzLCBidXQgdGhlcmUgaXMgbm8gYW5vdGhlciBvcHRpb25cblx0XHRcdGlmKCBnZXRIYXNNb3pUcmFuc2Zvcm0oKSApIHtcblx0XHRcdFx0b2JqWyctbW96LXRyYW5zZm9ybSddID0gb2JqWyd0cmFuc2Zvcm0nXSA9ICd0cmFuc2xhdGUoJyArIG9mZnNldC5sZWZ0ICsgJ3B4LCcgKyBvZmZzZXQudG9wICsgJ3B4KSc7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRvYmoubGVmdCA9IG9mZnNldC5sZWZ0O1xuXHRcdFx0XHRvYmoudG9wID0gb2Zmc2V0LnRvcDtcblx0XHRcdH1cblx0XHRcdHJldHVybiBvYmo7XG5cdFx0fVxuXG5cdH1cbn0pO1xuXG5cblxuLyo+Pnpvb20qL1xuXG4vKj4+aWZyYW1lKi9cblxudmFyIElGUkFNRV9OUyA9ICdpZnJhbWUnLFxuXHRfZW1wdHlQYWdlID0gJy8vYWJvdXQ6YmxhbmsnLFxuXG5cdF9maXhJZnJhbWVCdWdzID0gZnVuY3Rpb24oaXNTaG93aW5nKSB7XG5cdFx0aWYobWZwLmN1cnJUZW1wbGF0ZVtJRlJBTUVfTlNdKSB7XG5cdFx0XHR2YXIgZWwgPSBtZnAuY3VyclRlbXBsYXRlW0lGUkFNRV9OU10uZmluZCgnaWZyYW1lJyk7XG5cdFx0XHRpZihlbC5sZW5ndGgpIHtcblx0XHRcdFx0Ly8gcmVzZXQgc3JjIGFmdGVyIHRoZSBwb3B1cCBpcyBjbG9zZWQgdG8gYXZvaWQgXCJ2aWRlbyBrZWVwcyBwbGF5aW5nIGFmdGVyIHBvcHVwIGlzIGNsb3NlZFwiIGJ1Z1xuXHRcdFx0XHRpZighaXNTaG93aW5nKSB7XG5cdFx0XHRcdFx0ZWxbMF0uc3JjID0gX2VtcHR5UGFnZTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIElFOCBibGFjayBzY3JlZW4gYnVnIGZpeFxuXHRcdFx0XHRpZihtZnAuaXNJRTgpIHtcblx0XHRcdFx0XHRlbC5jc3MoJ2Rpc3BsYXknLCBpc1Nob3dpbmcgPyAnYmxvY2snIDogJ25vbmUnKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fTtcblxuJC5tYWduaWZpY1BvcHVwLnJlZ2lzdGVyTW9kdWxlKElGUkFNRV9OUywge1xuXG5cdG9wdGlvbnM6IHtcblx0XHRtYXJrdXA6ICc8ZGl2IGNsYXNzPVwibWZwLWlmcmFtZS1zY2FsZXJcIj4nK1xuXHRcdFx0XHRcdCc8ZGl2IGNsYXNzPVwibWZwLWNsb3NlXCI+PC9kaXY+Jytcblx0XHRcdFx0XHQnPGlmcmFtZSBjbGFzcz1cIm1mcC1pZnJhbWVcIiBzcmM9XCIvL2Fib3V0OmJsYW5rXCIgZnJhbWVib3JkZXI9XCIwXCIgYWxsb3dmdWxsc2NyZWVuPjwvaWZyYW1lPicrXG5cdFx0XHRcdCc8L2Rpdj4nLFxuXG5cdFx0c3JjQWN0aW9uOiAnaWZyYW1lX3NyYycsXG5cblx0XHQvLyB3ZSBkb24ndCBjYXJlIGFuZCBzdXBwb3J0IG9ubHkgb25lIGRlZmF1bHQgdHlwZSBvZiBVUkwgYnkgZGVmYXVsdFxuXHRcdHBhdHRlcm5zOiB7XG5cdFx0XHR5b3V0dWJlOiB7XG5cdFx0XHRcdGluZGV4OiAneW91dHViZS5jb20nLFxuXHRcdFx0XHRpZDogJ3Y9Jyxcblx0XHRcdFx0c3JjOiAnLy93d3cueW91dHViZS5jb20vZW1iZWQvJWlkJT9hdXRvcGxheT0xJ1xuXHRcdFx0fSxcblx0XHRcdHZpbWVvOiB7XG5cdFx0XHRcdGluZGV4OiAndmltZW8uY29tLycsXG5cdFx0XHRcdGlkOiAnLycsXG5cdFx0XHRcdHNyYzogJy8vcGxheWVyLnZpbWVvLmNvbS92aWRlby8laWQlP2F1dG9wbGF5PTEnXG5cdFx0XHR9LFxuXHRcdFx0Z21hcHM6IHtcblx0XHRcdFx0aW5kZXg6ICcvL21hcHMuZ29vZ2xlLicsXG5cdFx0XHRcdHNyYzogJyVpZCUmb3V0cHV0PWVtYmVkJ1xuXHRcdFx0fVxuXHRcdH1cblx0fSxcblxuXHRwcm90bzoge1xuXHRcdGluaXRJZnJhbWU6IGZ1bmN0aW9uKCkge1xuXHRcdFx0bWZwLnR5cGVzLnB1c2goSUZSQU1FX05TKTtcblxuXHRcdFx0X21mcE9uKCdCZWZvcmVDaGFuZ2UnLCBmdW5jdGlvbihlLCBwcmV2VHlwZSwgbmV3VHlwZSkge1xuXHRcdFx0XHRpZihwcmV2VHlwZSAhPT0gbmV3VHlwZSkge1xuXHRcdFx0XHRcdGlmKHByZXZUeXBlID09PSBJRlJBTUVfTlMpIHtcblx0XHRcdFx0XHRcdF9maXhJZnJhbWVCdWdzKCk7IC8vIGlmcmFtZSBpZiByZW1vdmVkXG5cdFx0XHRcdFx0fSBlbHNlIGlmKG5ld1R5cGUgPT09IElGUkFNRV9OUykge1xuXHRcdFx0XHRcdFx0X2ZpeElmcmFtZUJ1Z3ModHJ1ZSk7IC8vIGlmcmFtZSBpcyBzaG93aW5nXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9Ly8gZWxzZSB7XG5cdFx0XHRcdFx0Ly8gaWZyYW1lIHNvdXJjZSBpcyBzd2l0Y2hlZCwgZG9uJ3QgZG8gYW55dGhpbmdcblx0XHRcdFx0Ly99XG5cdFx0XHR9KTtcblxuXHRcdFx0X21mcE9uKENMT1NFX0VWRU5UICsgJy4nICsgSUZSQU1FX05TLCBmdW5jdGlvbigpIHtcblx0XHRcdFx0X2ZpeElmcmFtZUJ1Z3MoKTtcblx0XHRcdH0pO1xuXHRcdH0sXG5cblx0XHRnZXRJZnJhbWU6IGZ1bmN0aW9uKGl0ZW0sIHRlbXBsYXRlKSB7XG5cdFx0XHR2YXIgZW1iZWRTcmMgPSBpdGVtLnNyYztcblx0XHRcdHZhciBpZnJhbWVTdCA9IG1mcC5zdC5pZnJhbWU7XG5cblx0XHRcdCQuZWFjaChpZnJhbWVTdC5wYXR0ZXJucywgZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGlmKGVtYmVkU3JjLmluZGV4T2YoIHRoaXMuaW5kZXggKSA+IC0xKSB7XG5cdFx0XHRcdFx0aWYodGhpcy5pZCkge1xuXHRcdFx0XHRcdFx0aWYodHlwZW9mIHRoaXMuaWQgPT09ICdzdHJpbmcnKSB7XG5cdFx0XHRcdFx0XHRcdGVtYmVkU3JjID0gZW1iZWRTcmMuc3Vic3RyKGVtYmVkU3JjLmxhc3RJbmRleE9mKHRoaXMuaWQpK3RoaXMuaWQubGVuZ3RoLCBlbWJlZFNyYy5sZW5ndGgpO1xuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0ZW1iZWRTcmMgPSB0aGlzLmlkLmNhbGwoIHRoaXMsIGVtYmVkU3JjICk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGVtYmVkU3JjID0gdGhpcy5zcmMucmVwbGFjZSgnJWlkJScsIGVtYmVkU3JjICk7XG5cdFx0XHRcdFx0cmV0dXJuIGZhbHNlOyAvLyBicmVhaztcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cblx0XHRcdHZhciBkYXRhT2JqID0ge307XG5cdFx0XHRpZihpZnJhbWVTdC5zcmNBY3Rpb24pIHtcblx0XHRcdFx0ZGF0YU9ialtpZnJhbWVTdC5zcmNBY3Rpb25dID0gZW1iZWRTcmM7XG5cdFx0XHR9XG5cdFx0XHRtZnAuX3BhcnNlTWFya3VwKHRlbXBsYXRlLCBkYXRhT2JqLCBpdGVtKTtcblxuXHRcdFx0bWZwLnVwZGF0ZVN0YXR1cygncmVhZHknKTtcblxuXHRcdFx0cmV0dXJuIHRlbXBsYXRlO1xuXHRcdH1cblx0fVxufSk7XG5cblxuXG4vKj4+aWZyYW1lKi9cblxuLyo+PmdhbGxlcnkqL1xuLyoqXG4gKiBHZXQgbG9vcGVkIGluZGV4IGRlcGVuZGluZyBvbiBudW1iZXIgb2Ygc2xpZGVzXG4gKi9cbnZhciBfZ2V0TG9vcGVkSWQgPSBmdW5jdGlvbihpbmRleCkge1xuXHRcdHZhciBudW1TbGlkZXMgPSBtZnAuaXRlbXMubGVuZ3RoO1xuXHRcdGlmKGluZGV4ID4gbnVtU2xpZGVzIC0gMSkge1xuXHRcdFx0cmV0dXJuIGluZGV4IC0gbnVtU2xpZGVzO1xuXHRcdH0gZWxzZSAgaWYoaW5kZXggPCAwKSB7XG5cdFx0XHRyZXR1cm4gbnVtU2xpZGVzICsgaW5kZXg7XG5cdFx0fVxuXHRcdHJldHVybiBpbmRleDtcblx0fSxcblx0X3JlcGxhY2VDdXJyVG90YWwgPSBmdW5jdGlvbih0ZXh0LCBjdXJyLCB0b3RhbCkge1xuXHRcdHJldHVybiB0ZXh0LnJlcGxhY2UoLyVjdXJyJS9naSwgY3VyciArIDEpLnJlcGxhY2UoLyV0b3RhbCUvZ2ksIHRvdGFsKTtcblx0fTtcblxuJC5tYWduaWZpY1BvcHVwLnJlZ2lzdGVyTW9kdWxlKCdnYWxsZXJ5Jywge1xuXG5cdG9wdGlvbnM6IHtcblx0XHRlbmFibGVkOiBmYWxzZSxcblx0XHRhcnJvd01hcmt1cDogJzxidXR0b24gdGl0bGU9XCIldGl0bGUlXCIgdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwibWZwLWFycm93IG1mcC1hcnJvdy0lZGlyJVwiPjwvYnV0dG9uPicsXG5cdFx0cHJlbG9hZDogWzAsMl0sXG5cdFx0bmF2aWdhdGVCeUltZ0NsaWNrOiB0cnVlLFxuXHRcdGFycm93czogdHJ1ZSxcblxuXHRcdHRQcmV2OiAnUHJldmlvdXMgKExlZnQgYXJyb3cga2V5KScsXG5cdFx0dE5leHQ6ICdOZXh0IChSaWdodCBhcnJvdyBrZXkpJyxcblx0XHR0Q291bnRlcjogJyVjdXJyJSBvZiAldG90YWwlJ1xuXHR9LFxuXG5cdHByb3RvOiB7XG5cdFx0aW5pdEdhbGxlcnk6IGZ1bmN0aW9uKCkge1xuXG5cdFx0XHR2YXIgZ1N0ID0gbWZwLnN0LmdhbGxlcnksXG5cdFx0XHRcdG5zID0gJy5tZnAtZ2FsbGVyeSc7XG5cblx0XHRcdG1mcC5kaXJlY3Rpb24gPSB0cnVlOyAvLyB0cnVlIC0gbmV4dCwgZmFsc2UgLSBwcmV2XG5cblx0XHRcdGlmKCFnU3QgfHwgIWdTdC5lbmFibGVkICkgcmV0dXJuIGZhbHNlO1xuXG5cdFx0XHRfd3JhcENsYXNzZXMgKz0gJyBtZnAtZ2FsbGVyeSc7XG5cblx0XHRcdF9tZnBPbihPUEVOX0VWRU5UK25zLCBmdW5jdGlvbigpIHtcblxuXHRcdFx0XHRpZihnU3QubmF2aWdhdGVCeUltZ0NsaWNrKSB7XG5cdFx0XHRcdFx0bWZwLndyYXAub24oJ2NsaWNrJytucywgJy5tZnAtaW1nJywgZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0XHRpZihtZnAuaXRlbXMubGVuZ3RoID4gMSkge1xuXHRcdFx0XHRcdFx0XHRtZnAubmV4dCgpO1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRfZG9jdW1lbnQub24oJ2tleWRvd24nK25zLCBmdW5jdGlvbihlKSB7XG5cdFx0XHRcdFx0aWYgKGUua2V5Q29kZSA9PT0gMzcpIHtcblx0XHRcdFx0XHRcdG1mcC5wcmV2KCk7XG5cdFx0XHRcdFx0fSBlbHNlIGlmIChlLmtleUNvZGUgPT09IDM5KSB7XG5cdFx0XHRcdFx0XHRtZnAubmV4dCgpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cdFx0XHR9KTtcblxuXHRcdFx0X21mcE9uKCdVcGRhdGVTdGF0dXMnK25zLCBmdW5jdGlvbihlLCBkYXRhKSB7XG5cdFx0XHRcdGlmKGRhdGEudGV4dCkge1xuXHRcdFx0XHRcdGRhdGEudGV4dCA9IF9yZXBsYWNlQ3VyclRvdGFsKGRhdGEudGV4dCwgbWZwLmN1cnJJdGVtLmluZGV4LCBtZnAuaXRlbXMubGVuZ3RoKTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cblx0XHRcdF9tZnBPbihNQVJLVVBfUEFSU0VfRVZFTlQrbnMsIGZ1bmN0aW9uKGUsIGVsZW1lbnQsIHZhbHVlcywgaXRlbSkge1xuXHRcdFx0XHR2YXIgbCA9IG1mcC5pdGVtcy5sZW5ndGg7XG5cdFx0XHRcdHZhbHVlcy5jb3VudGVyID0gbCA+IDEgPyBfcmVwbGFjZUN1cnJUb3RhbChnU3QudENvdW50ZXIsIGl0ZW0uaW5kZXgsIGwpIDogJyc7XG5cdFx0XHR9KTtcblxuXHRcdFx0X21mcE9uKCdCdWlsZENvbnRyb2xzJyArIG5zLCBmdW5jdGlvbigpIHtcblx0XHRcdFx0aWYobWZwLml0ZW1zLmxlbmd0aCA+IDEgJiYgZ1N0LmFycm93cyAmJiAhbWZwLmFycm93TGVmdCkge1xuXHRcdFx0XHRcdHZhciBtYXJrdXAgPSBnU3QuYXJyb3dNYXJrdXAsXG5cdFx0XHRcdFx0XHRhcnJvd0xlZnQgPSBtZnAuYXJyb3dMZWZ0ID0gJCggbWFya3VwLnJlcGxhY2UoLyV0aXRsZSUvZ2ksIGdTdC50UHJldikucmVwbGFjZSgvJWRpciUvZ2ksICdsZWZ0JykgKS5hZGRDbGFzcyhQUkVWRU5UX0NMT1NFX0NMQVNTKSxcblx0XHRcdFx0XHRcdGFycm93UmlnaHQgPSBtZnAuYXJyb3dSaWdodCA9ICQoIG1hcmt1cC5yZXBsYWNlKC8ldGl0bGUlL2dpLCBnU3QudE5leHQpLnJlcGxhY2UoLyVkaXIlL2dpLCAncmlnaHQnKSApLmFkZENsYXNzKFBSRVZFTlRfQ0xPU0VfQ0xBU1MpO1xuXG5cdFx0XHRcdFx0YXJyb3dMZWZ0LmNsaWNrKGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdFx0bWZwLnByZXYoKTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRhcnJvd1JpZ2h0LmNsaWNrKGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdFx0bWZwLm5leHQoKTtcblx0XHRcdFx0XHR9KTtcblxuXHRcdFx0XHRcdG1mcC5jb250YWluZXIuYXBwZW5kKGFycm93TGVmdC5hZGQoYXJyb3dSaWdodCkpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblxuXHRcdFx0X21mcE9uKENIQU5HRV9FVkVOVCtucywgZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGlmKG1mcC5fcHJlbG9hZFRpbWVvdXQpIGNsZWFyVGltZW91dChtZnAuX3ByZWxvYWRUaW1lb3V0KTtcblxuXHRcdFx0XHRtZnAuX3ByZWxvYWRUaW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRtZnAucHJlbG9hZE5lYXJieUltYWdlcygpO1xuXHRcdFx0XHRcdG1mcC5fcHJlbG9hZFRpbWVvdXQgPSBudWxsO1xuXHRcdFx0XHR9LCAxNik7XG5cdFx0XHR9KTtcblxuXG5cdFx0XHRfbWZwT24oQ0xPU0VfRVZFTlQrbnMsIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRfZG9jdW1lbnQub2ZmKG5zKTtcblx0XHRcdFx0bWZwLndyYXAub2ZmKCdjbGljaycrbnMpO1xuXHRcdFx0XHRtZnAuYXJyb3dSaWdodCA9IG1mcC5hcnJvd0xlZnQgPSBudWxsO1xuXHRcdFx0fSk7XG5cblx0XHR9LFxuXHRcdG5leHQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0bWZwLmRpcmVjdGlvbiA9IHRydWU7XG5cdFx0XHRtZnAuaW5kZXggPSBfZ2V0TG9vcGVkSWQobWZwLmluZGV4ICsgMSk7XG5cdFx0XHRtZnAudXBkYXRlSXRlbUhUTUwoKTtcblx0XHR9LFxuXHRcdHByZXY6IGZ1bmN0aW9uKCkge1xuXHRcdFx0bWZwLmRpcmVjdGlvbiA9IGZhbHNlO1xuXHRcdFx0bWZwLmluZGV4ID0gX2dldExvb3BlZElkKG1mcC5pbmRleCAtIDEpO1xuXHRcdFx0bWZwLnVwZGF0ZUl0ZW1IVE1MKCk7XG5cdFx0fSxcblx0XHRnb1RvOiBmdW5jdGlvbihuZXdJbmRleCkge1xuXHRcdFx0bWZwLmRpcmVjdGlvbiA9IChuZXdJbmRleCA+PSBtZnAuaW5kZXgpO1xuXHRcdFx0bWZwLmluZGV4ID0gbmV3SW5kZXg7XG5cdFx0XHRtZnAudXBkYXRlSXRlbUhUTUwoKTtcblx0XHR9LFxuXHRcdHByZWxvYWROZWFyYnlJbWFnZXM6IGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIHAgPSBtZnAuc3QuZ2FsbGVyeS5wcmVsb2FkLFxuXHRcdFx0XHRwcmVsb2FkQmVmb3JlID0gTWF0aC5taW4ocFswXSwgbWZwLml0ZW1zLmxlbmd0aCksXG5cdFx0XHRcdHByZWxvYWRBZnRlciA9IE1hdGgubWluKHBbMV0sIG1mcC5pdGVtcy5sZW5ndGgpLFxuXHRcdFx0XHRpO1xuXG5cdFx0XHRmb3IoaSA9IDE7IGkgPD0gKG1mcC5kaXJlY3Rpb24gPyBwcmVsb2FkQWZ0ZXIgOiBwcmVsb2FkQmVmb3JlKTsgaSsrKSB7XG5cdFx0XHRcdG1mcC5fcHJlbG9hZEl0ZW0obWZwLmluZGV4K2kpO1xuXHRcdFx0fVxuXHRcdFx0Zm9yKGkgPSAxOyBpIDw9IChtZnAuZGlyZWN0aW9uID8gcHJlbG9hZEJlZm9yZSA6IHByZWxvYWRBZnRlcik7IGkrKykge1xuXHRcdFx0XHRtZnAuX3ByZWxvYWRJdGVtKG1mcC5pbmRleC1pKTtcblx0XHRcdH1cblx0XHR9LFxuXHRcdF9wcmVsb2FkSXRlbTogZnVuY3Rpb24oaW5kZXgpIHtcblx0XHRcdGluZGV4ID0gX2dldExvb3BlZElkKGluZGV4KTtcblxuXHRcdFx0aWYobWZwLml0ZW1zW2luZGV4XS5wcmVsb2FkZWQpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHR2YXIgaXRlbSA9IG1mcC5pdGVtc1tpbmRleF07XG5cdFx0XHRpZighaXRlbS5wYXJzZWQpIHtcblx0XHRcdFx0aXRlbSA9IG1mcC5wYXJzZUVsKCBpbmRleCApO1xuXHRcdFx0fVxuXG5cdFx0XHRfbWZwVHJpZ2dlcignTGF6eUxvYWQnLCBpdGVtKTtcblxuXHRcdFx0aWYoaXRlbS50eXBlID09PSAnaW1hZ2UnKSB7XG5cdFx0XHRcdGl0ZW0uaW1nID0gJCgnPGltZyBjbGFzcz1cIm1mcC1pbWdcIiAvPicpLm9uKCdsb2FkLm1mcGxvYWRlcicsIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdGl0ZW0uaGFzU2l6ZSA9IHRydWU7XG5cdFx0XHRcdH0pLm9uKCdlcnJvci5tZnBsb2FkZXInLCBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRpdGVtLmhhc1NpemUgPSB0cnVlO1xuXHRcdFx0XHRcdGl0ZW0ubG9hZEVycm9yID0gdHJ1ZTtcblx0XHRcdFx0XHRfbWZwVHJpZ2dlcignTGF6eUxvYWRFcnJvcicsIGl0ZW0pO1xuXHRcdFx0XHR9KS5hdHRyKCdzcmMnLCBpdGVtLnNyYyk7XG5cdFx0XHR9XG5cblxuXHRcdFx0aXRlbS5wcmVsb2FkZWQgPSB0cnVlO1xuXHRcdH1cblx0fVxufSk7XG5cbi8qPj5nYWxsZXJ5Ki9cblxuLyo+PnJldGluYSovXG5cbnZhciBSRVRJTkFfTlMgPSAncmV0aW5hJztcblxuJC5tYWduaWZpY1BvcHVwLnJlZ2lzdGVyTW9kdWxlKFJFVElOQV9OUywge1xuXHRvcHRpb25zOiB7XG5cdFx0cmVwbGFjZVNyYzogZnVuY3Rpb24oaXRlbSkge1xuXHRcdFx0cmV0dXJuIGl0ZW0uc3JjLnJlcGxhY2UoL1xcLlxcdyskLywgZnVuY3Rpb24obSkgeyByZXR1cm4gJ0AyeCcgKyBtOyB9KTtcblx0XHR9LFxuXHRcdHJhdGlvOiAxIC8vIEZ1bmN0aW9uIG9yIG51bWJlci4gIFNldCB0byAxIHRvIGRpc2FibGUuXG5cdH0sXG5cdHByb3RvOiB7XG5cdFx0aW5pdFJldGluYTogZnVuY3Rpb24oKSB7XG5cdFx0XHRpZih3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbyA+IDEpIHtcblxuXHRcdFx0XHR2YXIgc3QgPSBtZnAuc3QucmV0aW5hLFxuXHRcdFx0XHRcdHJhdGlvID0gc3QucmF0aW87XG5cblx0XHRcdFx0cmF0aW8gPSAhaXNOYU4ocmF0aW8pID8gcmF0aW8gOiByYXRpbygpO1xuXG5cdFx0XHRcdGlmKHJhdGlvID4gMSkge1xuXHRcdFx0XHRcdF9tZnBPbignSW1hZ2VIYXNTaXplJyArICcuJyArIFJFVElOQV9OUywgZnVuY3Rpb24oZSwgaXRlbSkge1xuXHRcdFx0XHRcdFx0aXRlbS5pbWcuY3NzKHtcblx0XHRcdFx0XHRcdFx0J21heC13aWR0aCc6IGl0ZW0uaW1nWzBdLm5hdHVyYWxXaWR0aCAvIHJhdGlvLFxuXHRcdFx0XHRcdFx0XHQnd2lkdGgnOiAnMTAwJSdcblx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdF9tZnBPbignRWxlbWVudFBhcnNlJyArICcuJyArIFJFVElOQV9OUywgZnVuY3Rpb24oZSwgaXRlbSkge1xuXHRcdFx0XHRcdFx0aXRlbS5zcmMgPSBzdC5yZXBsYWNlU3JjKGl0ZW0sIHJhdGlvKTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0fVxuXHR9XG59KTtcblxuLyo+PnJldGluYSovXG4gX2NoZWNrSW5zdGFuY2UoKTsgfSkpOyJdLCJuYW1lcyI6WyJmYWN0b3J5IiwiZGVmaW5lIiwiYW1kIiwiZXhwb3J0cyIsIl90eXBlb2YiLCJyZXF1aXJlIiwid2luZG93IiwialF1ZXJ5IiwiWmVwdG8iLCIkIiwiQ0xPU0VfRVZFTlQiLCJCRUZPUkVfQ0xPU0VfRVZFTlQiLCJBRlRFUl9DTE9TRV9FVkVOVCIsIkJFRk9SRV9BUFBFTkRfRVZFTlQiLCJNQVJLVVBfUEFSU0VfRVZFTlQiLCJPUEVOX0VWRU5UIiwiQ0hBTkdFX0VWRU5UIiwiTlMiLCJFVkVOVF9OUyIsIlJFQURZX0NMQVNTIiwiUkVNT1ZJTkdfQ0xBU1MiLCJQUkVWRU5UX0NMT1NFX0NMQVNTIiwibWZwIiwiTWFnbmlmaWNQb3B1cCIsIl9pc0pRIiwiX3ByZXZTdGF0dXMiLCJfd2luZG93IiwiX2RvY3VtZW50IiwiX3ByZXZDb250ZW50VHlwZSIsIl93cmFwQ2xhc3NlcyIsIl9jdXJyUG9wdXBUeXBlIiwiX21mcE9uIiwibmFtZSIsImYiLCJldiIsIm9uIiwiX2dldEVsIiwiY2xhc3NOYW1lIiwiYXBwZW5kVG8iLCJodG1sIiwicmF3IiwiZWwiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJpbm5lckhUTUwiLCJhcHBlbmRDaGlsZCIsIl9tZnBUcmlnZ2VyIiwiZSIsImRhdGEiLCJ0cmlnZ2VySGFuZGxlciIsInN0IiwiY2FsbGJhY2tzIiwiY2hhckF0IiwidG9Mb3dlckNhc2UiLCJzbGljZSIsImFwcGx5IiwiaXNBcnJheSIsIl9nZXRDbG9zZUJ0biIsInR5cGUiLCJjdXJyVGVtcGxhdGUiLCJjbG9zZUJ0biIsImNsb3NlTWFya3VwIiwicmVwbGFjZSIsInRDbG9zZSIsIl9jaGVja0luc3RhbmNlIiwibWFnbmlmaWNQb3B1cCIsImluc3RhbmNlIiwiaW5pdCIsInN1cHBvcnRzVHJhbnNpdGlvbnMiLCJzIiwic3R5bGUiLCJ2IiwidW5kZWZpbmVkIiwibGVuZ3RoIiwicG9wIiwicHJvdG90eXBlIiwiY29uc3RydWN0b3IiLCJhcHBWZXJzaW9uIiwibmF2aWdhdG9yIiwiaXNMb3dJRSIsImlzSUU4IiwiYWxsIiwiYWRkRXZlbnRMaXN0ZW5lciIsImlzQW5kcm9pZCIsInRlc3QiLCJpc0lPUyIsInN1cHBvcnRzVHJhbnNpdGlvbiIsInByb2JhYmx5TW9iaWxlIiwidXNlckFnZW50IiwicG9wdXBzQ2FjaGUiLCJvcGVuIiwiaSIsImlzT2JqIiwiaXRlbXMiLCJ0b0FycmF5IiwiaW5kZXgiLCJpdGVtIiwicGFyc2VkIiwiaXNPcGVuIiwidXBkYXRlSXRlbUhUTUwiLCJ0eXBlcyIsIm1haW5FbCIsImVxIiwia2V5IiwiZXh0ZW5kIiwiZGVmYXVsdHMiLCJmaXhlZENvbnRlbnRQb3MiLCJtb2RhbCIsImNsb3NlT25Db250ZW50Q2xpY2siLCJjbG9zZU9uQmdDbGljayIsInNob3dDbG9zZUJ0biIsImVuYWJsZUVzY2FwZUtleSIsImJnT3ZlcmxheSIsImNsb3NlIiwid3JhcCIsImF0dHIiLCJfY2hlY2tJZkNsb3NlIiwidGFyZ2V0IiwiY29udGFpbmVyIiwiY29udGVudENvbnRhaW5lciIsInByZWxvYWRlciIsInRMb2FkaW5nIiwibW9kdWxlcyIsIm4iLCJ0b1VwcGVyQ2FzZSIsImNhbGwiLCJjbG9zZUJ0bkluc2lkZSIsImFwcGVuZCIsInRlbXBsYXRlIiwidmFsdWVzIiwiY2xvc2VfcmVwbGFjZVdpdGgiLCJhbGlnblRvcCIsImNzcyIsIm92ZXJmbG93Iiwib3ZlcmZsb3dZIiwib3ZlcmZsb3dYIiwidG9wIiwic2Nyb2xsVG9wIiwicG9zaXRpb24iLCJmaXhlZEJnUG9zIiwiaGVpZ2h0Iiwia2V5Q29kZSIsInVwZGF0ZVNpemUiLCJhZGRDbGFzcyIsIndpbmRvd0hlaWdodCIsIndIIiwid2luZG93U3R5bGVzIiwiX2hhc1Njcm9sbEJhciIsIl9nZXRTY3JvbGxiYXJTaXplIiwibWFyZ2luUmlnaHQiLCJpc0lFNyIsImNsYXNzZXNUb2FkZCIsIm1haW5DbGFzcyIsIl9hZGRDbGFzc1RvTUZQIiwiYWRkIiwicHJlcGVuZFRvIiwiYm9keSIsIl9sYXN0Rm9jdXNlZEVsIiwiYWN0aXZlRWxlbWVudCIsInNldFRpbWVvdXQiLCJjb250ZW50IiwiX3NldEZvY3VzIiwiX29uRm9jdXNJbiIsInJlbW92YWxEZWxheSIsIl9jbG9zZSIsImNsYXNzZXNUb1JlbW92ZSIsImRldGFjaCIsImVtcHR5IiwiX3JlbW92ZUNsYXNzRnJvbU1GUCIsIm9mZiIsInJlbW92ZUF0dHIiLCJjdXJySXRlbSIsImF1dG9Gb2N1c0xhc3QiLCJmb2N1cyIsInByZXZIZWlnaHQiLCJ3aW5IZWlnaHQiLCJ6b29tTGV2ZWwiLCJkb2N1bWVudEVsZW1lbnQiLCJjbGllbnRXaWR0aCIsImlubmVyV2lkdGgiLCJpbm5lckhlaWdodCIsInBhcnNlRWwiLCJtYXJrdXAiLCJyZW1vdmVDbGFzcyIsIm5ld0NvbnRlbnQiLCJhcHBlbmRDb250ZW50IiwicHJlbG9hZGVkIiwicHJlcGVuZCIsImZpbmQiLCJ0YWdOYW1lIiwic3JjIiwiaGFzQ2xhc3MiLCJhZGRHcm91cCIsIm9wdGlvbnMiLCJlSGFuZGxlciIsIm1mcEVsIiwiX29wZW5DbGljayIsImVOYW1lIiwiZGVsZWdhdGUiLCJtaWRDbGljayIsIndoaWNoIiwiY3RybEtleSIsIm1ldGFLZXkiLCJhbHRLZXkiLCJzaGlmdEtleSIsImRpc2FibGVPbiIsImlzRnVuY3Rpb24iLCJ3aWR0aCIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwidXBkYXRlU3RhdHVzIiwic3RhdHVzIiwidGV4dCIsInN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbiIsImNsb3NlT25Db250ZW50IiwiY2xvc2VPbkJnIiwiY29udGFpbnMiLCJjTmFtZSIsInNjcm9sbEhlaWdodCIsIl9wYXJzZU1hcmt1cCIsImFyciIsImVhY2giLCJ2YWx1ZSIsInNwbGl0IiwicmVwbGFjZVdpdGgiLCJpcyIsInNjcm9sbGJhclNpemUiLCJzY3JvbGxEaXYiLCJjc3NUZXh0Iiwib2Zmc2V0V2lkdGgiLCJyZW1vdmVDaGlsZCIsInByb3RvIiwicmVnaXN0ZXJNb2R1bGUiLCJtb2R1bGUiLCJwdXNoIiwiZm4iLCJqcUVsIiwiaXRlbU9wdHMiLCJwYXJzZUludCIsImFyZ3VtZW50cyIsIkFycmF5IiwiSU5MSU5FX05TIiwiX2hpZGRlbkNsYXNzIiwiX2lubGluZVBsYWNlaG9sZGVyIiwiX2xhc3RJbmxpbmVFbGVtZW50IiwiX3B1dElubGluZUVsZW1lbnRzQmFjayIsImFmdGVyIiwiaGlkZGVuQ2xhc3MiLCJ0Tm90Rm91bmQiLCJpbml0SW5saW5lIiwiZ2V0SW5saW5lIiwiaW5saW5lU3QiLCJpbmxpbmUiLCJwYXJlbnQiLCJwYXJlbnROb2RlIiwiaW5saW5lRWxlbWVudCIsIkFKQVhfTlMiLCJfYWpheEN1ciIsIl9yZW1vdmVBamF4Q3Vyc29yIiwiX2Rlc3Ryb3lBamF4UmVxdWVzdCIsInJlcSIsImFib3J0Iiwic2V0dGluZ3MiLCJjdXJzb3IiLCJ0RXJyb3IiLCJpbml0QWpheCIsImFqYXgiLCJnZXRBamF4Iiwib3B0cyIsInVybCIsInN1Y2Nlc3MiLCJ0ZXh0U3RhdHVzIiwianFYSFIiLCJ0ZW1wIiwieGhyIiwiZmluaXNoZWQiLCJlcnJvciIsImxvYWRFcnJvciIsIl9pbWdJbnRlcnZhbCIsIl9nZXRUaXRsZSIsInRpdGxlIiwiaW1hZ2UiLCJ0aXRsZVNyYyIsInZlcnRpY2FsRml0IiwiaW5pdEltYWdlIiwiaW1nU3QiLCJucyIsInJlc2l6ZUltYWdlIiwiaW1nIiwiZGVjciIsIl9vbkltYWdlSGFzU2l6ZSIsImhhc1NpemUiLCJjbGVhckludGVydmFsIiwiaXNDaGVja2luZ0ltZ1NpemUiLCJpbWdIaWRkZW4iLCJmaW5kSW1hZ2VTaXplIiwiY291bnRlciIsIm1mcFNldEludGVydmFsIiwiZGVsYXkiLCJzZXRJbnRlcnZhbCIsIm5hdHVyYWxXaWR0aCIsImdldEltYWdlIiwiZ3VhcmQiLCJvbkxvYWRDb21wbGV0ZSIsImNvbXBsZXRlIiwibG9hZGVkIiwib25Mb2FkRXJyb3IiLCJhbHQiLCJjbG9uZSIsImltZ19yZXBsYWNlV2l0aCIsImxvYWRpbmciLCJoYXNNb3pUcmFuc2Zvcm0iLCJnZXRIYXNNb3pUcmFuc2Zvcm0iLCJNb3pUcmFuc2Zvcm0iLCJlbmFibGVkIiwiZWFzaW5nIiwiZHVyYXRpb24iLCJvcGVuZXIiLCJlbGVtZW50IiwiaW5pdFpvb20iLCJ6b29tU3QiLCJ6b29tIiwiZ2V0RWxUb0FuaW1hdGUiLCJuZXdJbWciLCJ0cmFuc2l0aW9uIiwiY3NzT2JqIiwiekluZGV4IiwibGVmdCIsInQiLCJzaG93TWFpbkNvbnRlbnQiLCJvcGVuVGltZW91dCIsImFuaW1hdGVkSW1nIiwiX2FsbG93Wm9vbSIsImNsZWFyVGltZW91dCIsIl9nZXRJdGVtVG9ab29tIiwiX2dldE9mZnNldCIsInJlbW92ZSIsImlzTGFyZ2UiLCJvZmZzZXQiLCJwYWRkaW5nVG9wIiwicGFkZGluZ0JvdHRvbSIsIm9iaiIsIm9mZnNldEhlaWdodCIsIklGUkFNRV9OUyIsIl9lbXB0eVBhZ2UiLCJfZml4SWZyYW1lQnVncyIsImlzU2hvd2luZyIsInNyY0FjdGlvbiIsInBhdHRlcm5zIiwieW91dHViZSIsImlkIiwidmltZW8iLCJnbWFwcyIsImluaXRJZnJhbWUiLCJwcmV2VHlwZSIsIm5ld1R5cGUiLCJnZXRJZnJhbWUiLCJlbWJlZFNyYyIsImlmcmFtZVN0IiwiaWZyYW1lIiwiaW5kZXhPZiIsInN1YnN0ciIsImxhc3RJbmRleE9mIiwiZGF0YU9iaiIsIl9nZXRMb29wZWRJZCIsIm51bVNsaWRlcyIsIl9yZXBsYWNlQ3VyclRvdGFsIiwiY3VyciIsInRvdGFsIiwiYXJyb3dNYXJrdXAiLCJwcmVsb2FkIiwibmF2aWdhdGVCeUltZ0NsaWNrIiwiYXJyb3dzIiwidFByZXYiLCJ0TmV4dCIsInRDb3VudGVyIiwiaW5pdEdhbGxlcnkiLCJnU3QiLCJnYWxsZXJ5IiwiZGlyZWN0aW9uIiwibmV4dCIsInByZXYiLCJsIiwiYXJyb3dMZWZ0IiwiYXJyb3dSaWdodCIsImNsaWNrIiwiX3ByZWxvYWRUaW1lb3V0IiwicHJlbG9hZE5lYXJieUltYWdlcyIsImdvVG8iLCJuZXdJbmRleCIsInAiLCJwcmVsb2FkQmVmb3JlIiwiTWF0aCIsIm1pbiIsInByZWxvYWRBZnRlciIsIl9wcmVsb2FkSXRlbSIsIlJFVElOQV9OUyIsInJlcGxhY2VTcmMiLCJtIiwicmF0aW8iLCJpbml0UmV0aW5hIiwiZGV2aWNlUGl4ZWxSYXRpbyIsInJldGluYSIsImlzTmFOIl0sInNvdXJjZVJvb3QiOiIifQ==