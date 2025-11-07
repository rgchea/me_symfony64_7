(self["webpackChunk"] = self["webpackChunk"] || []).push([["js/bootstrap-datepicker"],{

/***/ "./assets/css/portoadmin/vendor/bootstrap-datepicker/js/bootstrap-datepicker.js":
/*!**************************************************************************************!*\
  !*** ./assets/css/portoadmin/vendor/bootstrap-datepicker/js/bootstrap-datepicker.js ***!
  \**************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;__webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
__webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
__webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
__webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
__webpack_require__(/*! core-js/modules/es.array.fill.js */ "./node_modules/core-js/modules/es.array.fill.js");
__webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
__webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");
__webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
__webpack_require__(/*! core-js/modules/es.array.join.js */ "./node_modules/core-js/modules/es.array.join.js");
__webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
__webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
__webpack_require__(/*! core-js/modules/es.array.splice.js */ "./node_modules/core-js/modules/es.array.splice.js");
__webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
__webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
__webpack_require__(/*! core-js/modules/es.parse-int.js */ "./node_modules/core-js/modules/es.parse-int.js");
__webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
__webpack_require__(/*! core-js/modules/es.regexp.constructor.js */ "./node_modules/core-js/modules/es.regexp.constructor.js");
__webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
__webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
__webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
__webpack_require__(/*! core-js/modules/es.string.match.js */ "./node_modules/core-js/modules/es.string.match.js");
__webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
__webpack_require__(/*! core-js/modules/es.string.split.js */ "./node_modules/core-js/modules/es.string.split.js");
__webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
/*!
 * Datepicker for Bootstrap v1.8.0 (https://github.com/uxsolutions/bootstrap-datepicker)
 *
 * Licensed under the Apache License v2.0 (http://www.apache.org/licenses/LICENSE-2.0)
 */

(function (factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else // removed by dead control flow
{}
})(function ($, undefined) {
  function UTCDate() {
    return new Date(Date.UTC.apply(Date, arguments));
  }
  function UTCToday() {
    var today = new Date();
    return UTCDate(today.getFullYear(), today.getMonth(), today.getDate());
  }
  function isUTCEquals(date1, date2) {
    return date1.getUTCFullYear() === date2.getUTCFullYear() && date1.getUTCMonth() === date2.getUTCMonth() && date1.getUTCDate() === date2.getUTCDate();
  }
  function alias(method, deprecationMsg) {
    return function () {
      if (deprecationMsg !== undefined) {
        $.fn.datepicker.deprecated(deprecationMsg);
      }
      return this[method].apply(this, arguments);
    };
  }
  function isValidDate(d) {
    return d && !isNaN(d.getTime());
  }
  var DateArray = function () {
    var extras = {
      get: function get(i) {
        return this.slice(i)[0];
      },
      contains: function contains(d) {
        // Array.indexOf is not cross-browser;
        // $.inArray doesn't work with Dates
        var val = d && d.valueOf();
        for (var i = 0, l = this.length; i < l; i++)
        // Use date arithmetic to allow dates with different times to match
        if (0 <= this[i].valueOf() - val && this[i].valueOf() - val < 1000 * 60 * 60 * 24) return i;
        return -1;
      },
      remove: function remove(i) {
        this.splice(i, 1);
      },
      replace: function replace(new_array) {
        if (!new_array) return;
        if (!$.isArray(new_array)) new_array = [new_array];
        this.clear();
        this.push.apply(this, new_array);
      },
      clear: function clear() {
        this.length = 0;
      },
      copy: function copy() {
        var a = new DateArray();
        a.replace(this);
        return a;
      }
    };
    return function () {
      var a = [];
      a.push.apply(a, arguments);
      $.extend(a, extras);
      return a;
    };
  }();

  // Picker object

  var Datepicker = function Datepicker(element, options) {
    $.data(element, 'datepicker', this);
    this._process_options(options);
    this.dates = new DateArray();
    this.viewDate = this.o.defaultViewDate;
    this.focusDate = null;
    this.element = $(element);
    this.isInput = this.element.is('input');
    this.inputField = this.isInput ? this.element : this.element.find('input');
    this.component = this.element.hasClass('date') ? this.element.find('.add-on, .input-group-addon, .btn') : false;
    if (this.component && this.component.length === 0) this.component = false;
    this.isInline = !this.component && this.element.is('div');
    this.picker = $(DPGlobal.template);

    // Checking templates and inserting
    if (this._check_template(this.o.templates.leftArrow)) {
      this.picker.find('.prev').html(this.o.templates.leftArrow);
    }
    if (this._check_template(this.o.templates.rightArrow)) {
      this.picker.find('.next').html(this.o.templates.rightArrow);
    }
    this._buildEvents();
    this._attachEvents();
    if (this.isInline) {
      this.picker.addClass('datepicker-inline').appendTo(this.element);
    } else {
      this.picker.addClass('datepicker-dropdown dropdown-menu');
    }
    if (this.o.rtl) {
      this.picker.addClass('datepicker-rtl');
    }
    if (this.o.calendarWeeks) {
      this.picker.find('.datepicker-days .datepicker-switch, thead .datepicker-title, tfoot .today, tfoot .clear').attr('colspan', function (i, val) {
        return Number(val) + 1;
      });
    }
    this._process_options({
      startDate: this._o.startDate,
      endDate: this._o.endDate,
      daysOfWeekDisabled: this.o.daysOfWeekDisabled,
      daysOfWeekHighlighted: this.o.daysOfWeekHighlighted,
      datesDisabled: this.o.datesDisabled
    });
    this._allow_update = false;
    this.setViewMode(this.o.startView);
    this._allow_update = true;
    this.fillDow();
    this.fillMonths();
    this.update();
    if (this.isInline) {
      this.show();
    }
  };
  Datepicker.prototype = {
    constructor: Datepicker,
    _resolveViewName: function _resolveViewName(view) {
      $.each(DPGlobal.viewModes, function (i, viewMode) {
        if (view === i || $.inArray(view, viewMode.names) !== -1) {
          view = i;
          return false;
        }
      });
      return view;
    },
    _resolveDaysOfWeek: function _resolveDaysOfWeek(daysOfWeek) {
      if (!$.isArray(daysOfWeek)) daysOfWeek = daysOfWeek.split(/[,\s]*/);
      return $.map(daysOfWeek, Number);
    },
    _check_template: function _check_template(tmp) {
      try {
        // If empty
        if (tmp === undefined || tmp === "") {
          return false;
        }
        // If no html, everything ok
        if ((tmp.match(/[<>]/g) || []).length <= 0) {
          return true;
        }
        // Checking if html is fine
        var jDom = $(tmp);
        return jDom.length > 0;
      } catch (ex) {
        return false;
      }
    },
    _process_options: function _process_options(opts) {
      // Store raw options for reference
      this._o = $.extend({}, this._o, opts);
      // Processed options
      var o = this.o = $.extend({}, this._o);

      // Check if "de-DE" style date is available, if not language should
      // fallback to 2 letter code eg "de"
      var lang = o.language;
      if (!dates[lang]) {
        lang = lang.split('-')[0];
        if (!dates[lang]) lang = defaults.language;
      }
      o.language = lang;

      // Retrieve view index from any aliases
      o.startView = this._resolveViewName(o.startView);
      o.minViewMode = this._resolveViewName(o.minViewMode);
      o.maxViewMode = this._resolveViewName(o.maxViewMode);

      // Check view is between min and max
      o.startView = Math.max(this.o.minViewMode, Math.min(this.o.maxViewMode, o.startView));

      // true, false, or Number > 0
      if (o.multidate !== true) {
        o.multidate = Number(o.multidate) || false;
        if (o.multidate !== false) o.multidate = Math.max(0, o.multidate);
      }
      o.multidateSeparator = String(o.multidateSeparator);
      o.weekStart %= 7;
      o.weekEnd = (o.weekStart + 6) % 7;
      var format = DPGlobal.parseFormat(o.format);
      if (o.startDate !== -Infinity) {
        if (!!o.startDate) {
          if (o.startDate instanceof Date) o.startDate = this._local_to_utc(this._zero_time(o.startDate));else o.startDate = DPGlobal.parseDate(o.startDate, format, o.language, o.assumeNearbyYear);
        } else {
          o.startDate = -Infinity;
        }
      }
      if (o.endDate !== Infinity) {
        if (!!o.endDate) {
          if (o.endDate instanceof Date) o.endDate = this._local_to_utc(this._zero_time(o.endDate));else o.endDate = DPGlobal.parseDate(o.endDate, format, o.language, o.assumeNearbyYear);
        } else {
          o.endDate = Infinity;
        }
      }
      o.daysOfWeekDisabled = this._resolveDaysOfWeek(o.daysOfWeekDisabled || []);
      o.daysOfWeekHighlighted = this._resolveDaysOfWeek(o.daysOfWeekHighlighted || []);
      o.datesDisabled = o.datesDisabled || [];
      if (!$.isArray(o.datesDisabled)) {
        o.datesDisabled = o.datesDisabled.split(',');
      }
      o.datesDisabled = $.map(o.datesDisabled, function (d) {
        return DPGlobal.parseDate(d, format, o.language, o.assumeNearbyYear);
      });
      var plc = String(o.orientation).toLowerCase().split(/\s+/g),
        _plc = o.orientation.toLowerCase();
      plc = $.grep(plc, function (word) {
        return /^auto|left|right|top|bottom$/.test(word);
      });
      o.orientation = {
        x: 'auto',
        y: 'auto'
      };
      if (!_plc || _plc === 'auto') ; // no action
      else if (plc.length === 1) {
        switch (plc[0]) {
          case 'top':
          case 'bottom':
            o.orientation.y = plc[0];
            break;
          case 'left':
          case 'right':
            o.orientation.x = plc[0];
            break;
        }
      } else {
        _plc = $.grep(plc, function (word) {
          return /^left|right$/.test(word);
        });
        o.orientation.x = _plc[0] || 'auto';
        _plc = $.grep(plc, function (word) {
          return /^top|bottom$/.test(word);
        });
        o.orientation.y = _plc[0] || 'auto';
      }
      if (o.defaultViewDate instanceof Date || typeof o.defaultViewDate === 'string') {
        o.defaultViewDate = DPGlobal.parseDate(o.defaultViewDate, format, o.language, o.assumeNearbyYear);
      } else if (o.defaultViewDate) {
        var year = o.defaultViewDate.year || new Date().getFullYear();
        var month = o.defaultViewDate.month || 0;
        var day = o.defaultViewDate.day || 1;
        o.defaultViewDate = UTCDate(year, month, day);
      } else {
        o.defaultViewDate = UTCToday();
      }
    },
    _events: [],
    _secondaryEvents: [],
    _applyEvents: function _applyEvents(evs) {
      for (var i = 0, el, ch, ev; i < evs.length; i++) {
        el = evs[i][0];
        if (evs[i].length === 2) {
          ch = undefined;
          ev = evs[i][1];
        } else if (evs[i].length === 3) {
          ch = evs[i][1];
          ev = evs[i][2];
        }
        el.on(ev, ch);
      }
    },
    _unapplyEvents: function _unapplyEvents(evs) {
      for (var i = 0, el, ev, ch; i < evs.length; i++) {
        el = evs[i][0];
        if (evs[i].length === 2) {
          ch = undefined;
          ev = evs[i][1];
        } else if (evs[i].length === 3) {
          ch = evs[i][1];
          ev = evs[i][2];
        }
        el.off(ev, ch);
      }
    },
    _buildEvents: function _buildEvents() {
      var events = {
        keyup: $.proxy(function (e) {
          if ($.inArray(e.keyCode, [27, 37, 39, 38, 40, 32, 13, 9]) === -1) this.update();
        }, this),
        keydown: $.proxy(this.keydown, this),
        paste: $.proxy(this.paste, this)
      };
      if (this.o.showOnFocus === true) {
        events.focus = $.proxy(this.show, this);
      }
      if (this.isInput) {
        // single input
        this._events = [[this.element, events]];
      }
      // component: input + button
      else if (this.component && this.inputField.length) {
        this._events = [
        // For components that are not readonly, allow keyboard nav
        [this.inputField, events], [this.component, {
          click: $.proxy(this.show, this)
        }]];
      } else {
        this._events = [[this.element, {
          click: $.proxy(this.show, this),
          keydown: $.proxy(this.keydown, this)
        }]];
      }
      this._events.push(
      // Component: listen for blur on element descendants
      [this.element, '*', {
        blur: $.proxy(function (e) {
          this._focused_from = e.target;
        }, this)
      }],
      // Input: listen for blur on element
      [this.element, {
        blur: $.proxy(function (e) {
          this._focused_from = e.target;
        }, this)
      }]);
      if (this.o.immediateUpdates) {
        // Trigger input updates immediately on changed year/month
        this._events.push([this.element, {
          'changeYear changeMonth': $.proxy(function (e) {
            this.update(e.date);
          }, this)
        }]);
      }
      this._secondaryEvents = [[this.picker, {
        click: $.proxy(this.click, this)
      }], [this.picker, '.prev, .next', {
        click: $.proxy(this.navArrowsClick, this)
      }], [this.picker, '.day:not(.disabled)', {
        click: $.proxy(this.dayCellClick, this)
      }], [$(window), {
        resize: $.proxy(this.place, this)
      }], [$(document), {
        'mousedown touchstart': $.proxy(function (e) {
          // Clicked outside the datepicker, hide it
          if (!(this.element.is(e.target) || this.element.find(e.target).length || this.picker.is(e.target) || this.picker.find(e.target).length || this.isInline)) {
            this.hide();
          }
        }, this)
      }]];
    },
    _attachEvents: function _attachEvents() {
      this._detachEvents();
      this._applyEvents(this._events);
    },
    _detachEvents: function _detachEvents() {
      this._unapplyEvents(this._events);
    },
    _attachSecondaryEvents: function _attachSecondaryEvents() {
      this._detachSecondaryEvents();
      this._applyEvents(this._secondaryEvents);
    },
    _detachSecondaryEvents: function _detachSecondaryEvents() {
      this._unapplyEvents(this._secondaryEvents);
    },
    _trigger: function _trigger(event, altdate) {
      var date = altdate || this.dates.get(-1),
        local_date = this._utc_to_local(date);
      this.element.trigger({
        type: event,
        date: local_date,
        viewMode: this.viewMode,
        dates: $.map(this.dates, this._utc_to_local),
        format: $.proxy(function (ix, format) {
          if (arguments.length === 0) {
            ix = this.dates.length - 1;
            format = this.o.format;
          } else if (typeof ix === 'string') {
            format = ix;
            ix = this.dates.length - 1;
          }
          format = format || this.o.format;
          var date = this.dates.get(ix);
          return DPGlobal.formatDate(date, format, this.o.language);
        }, this)
      });
    },
    show: function show() {
      if (this.inputField.prop('disabled') || this.inputField.prop('readonly') && this.o.enableOnReadonly === false) return;
      if (!this.isInline) this.picker.appendTo(this.o.container);
      this.place();
      this.picker.show();
      this._attachSecondaryEvents();
      this._trigger('show');
      if ((window.navigator.msMaxTouchPoints || 'ontouchstart' in document) && this.o.disableTouchKeyboard) {
        $(this.element).blur();
      }
      return this;
    },
    hide: function hide() {
      if (this.isInline || !this.picker.is(':visible')) return this;
      this.focusDate = null;
      this.picker.hide().detach();
      this._detachSecondaryEvents();
      this.setViewMode(this.o.startView);
      if (this.o.forceParse && this.inputField.val()) this.setValue();
      this._trigger('hide');
      return this;
    },
    destroy: function destroy() {
      this.hide();
      this._detachEvents();
      this._detachSecondaryEvents();
      this.picker.remove();
      delete this.element.data().datepicker;
      if (!this.isInput) {
        delete this.element.data().date;
      }
      return this;
    },
    paste: function paste(e) {
      var dateString;
      if (e.originalEvent.clipboardData && e.originalEvent.clipboardData.types && $.inArray('text/plain', e.originalEvent.clipboardData.types) !== -1) {
        dateString = e.originalEvent.clipboardData.getData('text/plain');
      } else if (window.clipboardData) {
        dateString = window.clipboardData.getData('Text');
      } else {
        return;
      }
      this.setDate(dateString);
      this.update();
      e.preventDefault();
    },
    _utc_to_local: function _utc_to_local(utc) {
      if (!utc) {
        return utc;
      }
      var local = new Date(utc.getTime() + utc.getTimezoneOffset() * 60000);
      if (local.getTimezoneOffset() !== utc.getTimezoneOffset()) {
        local = new Date(utc.getTime() + local.getTimezoneOffset() * 60000);
      }
      return local;
    },
    _local_to_utc: function _local_to_utc(local) {
      return local && new Date(local.getTime() - local.getTimezoneOffset() * 60000);
    },
    _zero_time: function _zero_time(local) {
      return local && new Date(local.getFullYear(), local.getMonth(), local.getDate());
    },
    _zero_utc_time: function _zero_utc_time(utc) {
      return utc && UTCDate(utc.getUTCFullYear(), utc.getUTCMonth(), utc.getUTCDate());
    },
    getDates: function getDates() {
      return $.map(this.dates, this._utc_to_local);
    },
    getUTCDates: function getUTCDates() {
      return $.map(this.dates, function (d) {
        return new Date(d);
      });
    },
    getDate: function getDate() {
      return this._utc_to_local(this.getUTCDate());
    },
    getUTCDate: function getUTCDate() {
      var selected_date = this.dates.get(-1);
      if (selected_date !== undefined) {
        return new Date(selected_date);
      } else {
        return null;
      }
    },
    clearDates: function clearDates() {
      this.inputField.val('');
      this.update();
      this._trigger('changeDate');
      if (this.o.autoclose) {
        this.hide();
      }
    },
    setDates: function setDates() {
      var args = $.isArray(arguments[0]) ? arguments[0] : arguments;
      this.update.apply(this, args);
      this._trigger('changeDate');
      this.setValue();
      return this;
    },
    setUTCDates: function setUTCDates() {
      var args = $.isArray(arguments[0]) ? arguments[0] : arguments;
      this.setDates.apply(this, $.map(args, this._utc_to_local));
      return this;
    },
    setDate: alias('setDates'),
    setUTCDate: alias('setUTCDates'),
    remove: alias('destroy', 'Method `remove` is deprecated and will be removed in version 2.0. Use `destroy` instead'),
    setValue: function setValue() {
      var formatted = this.getFormattedDate();
      this.inputField.val(formatted);
      return this;
    },
    getFormattedDate: function getFormattedDate(format) {
      if (format === undefined) format = this.o.format;
      var lang = this.o.language;
      return $.map(this.dates, function (d) {
        return DPGlobal.formatDate(d, format, lang);
      }).join(this.o.multidateSeparator);
    },
    getStartDate: function getStartDate() {
      return this.o.startDate;
    },
    setStartDate: function setStartDate(startDate) {
      this._process_options({
        startDate: startDate
      });
      this.update();
      this.updateNavArrows();
      return this;
    },
    getEndDate: function getEndDate() {
      return this.o.endDate;
    },
    setEndDate: function setEndDate(endDate) {
      this._process_options({
        endDate: endDate
      });
      this.update();
      this.updateNavArrows();
      return this;
    },
    setDaysOfWeekDisabled: function setDaysOfWeekDisabled(daysOfWeekDisabled) {
      this._process_options({
        daysOfWeekDisabled: daysOfWeekDisabled
      });
      this.update();
      return this;
    },
    setDaysOfWeekHighlighted: function setDaysOfWeekHighlighted(daysOfWeekHighlighted) {
      this._process_options({
        daysOfWeekHighlighted: daysOfWeekHighlighted
      });
      this.update();
      return this;
    },
    setDatesDisabled: function setDatesDisabled(datesDisabled) {
      this._process_options({
        datesDisabled: datesDisabled
      });
      this.update();
      return this;
    },
    place: function place() {
      if (this.isInline) return this;
      var calendarWidth = this.picker.outerWidth(),
        calendarHeight = this.picker.outerHeight(),
        visualPadding = 10,
        container = $(this.o.container),
        windowWidth = container.width(),
        scrollTop = this.o.container === 'body' ? $(document).scrollTop() : container.scrollTop(),
        appendOffset = container.offset();
      var parentsZindex = [0];
      this.element.parents().each(function () {
        var itemZIndex = $(this).css('z-index');
        if (itemZIndex !== 'auto' && Number(itemZIndex) !== 0) parentsZindex.push(Number(itemZIndex));
      });
      var zIndex = Math.max.apply(Math, parentsZindex) + this.o.zIndexOffset;
      var offset = this.component ? this.component.parent().offset() : this.element.offset();
      var height = this.component ? this.component.outerHeight(true) : this.element.outerHeight(false);
      var width = this.component ? this.component.outerWidth(true) : this.element.outerWidth(false);
      var left = offset.left - appendOffset.left;
      var top = offset.top - appendOffset.top;
      if (this.o.container !== 'body') {
        top += scrollTop;
      }
      this.picker.removeClass('datepicker-orient-top datepicker-orient-bottom ' + 'datepicker-orient-right datepicker-orient-left');
      if (this.o.orientation.x !== 'auto') {
        this.picker.addClass('datepicker-orient-' + this.o.orientation.x);
        if (this.o.orientation.x === 'right') left -= calendarWidth - width;
      }
      // auto x orientation is best-placement: if it crosses a window
      // edge, fudge it sideways
      else {
        if (offset.left < 0) {
          // component is outside the window on the left side. Move it into visible range
          this.picker.addClass('datepicker-orient-left');
          left -= offset.left - visualPadding;
        } else if (left + calendarWidth > windowWidth) {
          // the calendar passes the widow right edge. Align it to component right side
          this.picker.addClass('datepicker-orient-right');
          left += width - calendarWidth;
        } else {
          if (this.o.rtl) {
            // Default to right
            this.picker.addClass('datepicker-orient-right');
          } else {
            // Default to left
            this.picker.addClass('datepicker-orient-left');
          }
        }
      }

      // auto y orientation is best-situation: top or bottom, no fudging,
      // decision based on which shows more of the calendar
      var yorient = this.o.orientation.y,
        top_overflow;
      if (yorient === 'auto') {
        top_overflow = -scrollTop + top - calendarHeight;
        yorient = top_overflow < 0 ? 'bottom' : 'top';
      }
      this.picker.addClass('datepicker-orient-' + yorient);
      if (yorient === 'top') top -= calendarHeight + parseInt(this.picker.css('padding-top'));else top += height;
      if (this.o.rtl) {
        var right = windowWidth - (left + width);
        this.picker.css({
          top: top,
          right: right,
          zIndex: zIndex
        });
      } else {
        this.picker.css({
          top: top,
          left: left,
          zIndex: zIndex
        });
      }
      return this;
    },
    _allow_update: true,
    update: function update() {
      if (!this._allow_update) return this;
      var oldDates = this.dates.copy(),
        dates = [],
        fromArgs = false;
      if (arguments.length) {
        $.each(arguments, $.proxy(function (i, date) {
          if (date instanceof Date) date = this._local_to_utc(date);
          dates.push(date);
        }, this));
        fromArgs = true;
      } else {
        dates = this.isInput ? this.element.val() : this.element.data('date') || this.inputField.val();
        if (dates && this.o.multidate) dates = dates.split(this.o.multidateSeparator);else dates = [dates];
        delete this.element.data().date;
      }
      dates = $.map(dates, $.proxy(function (date) {
        return DPGlobal.parseDate(date, this.o.format, this.o.language, this.o.assumeNearbyYear);
      }, this));
      dates = $.grep(dates, $.proxy(function (date) {
        return !this.dateWithinRange(date) || !date;
      }, this), true);
      this.dates.replace(dates);
      if (this.o.updateViewDate) {
        if (this.dates.length) this.viewDate = new Date(this.dates.get(-1));else if (this.viewDate < this.o.startDate) this.viewDate = new Date(this.o.startDate);else if (this.viewDate > this.o.endDate) this.viewDate = new Date(this.o.endDate);else this.viewDate = this.o.defaultViewDate;
      }
      if (fromArgs) {
        // setting date by clicking
        this.setValue();
        this.element.change();
      } else if (this.dates.length) {
        // setting date by typing
        if (String(oldDates) !== String(this.dates) && fromArgs) {
          this._trigger('changeDate');
          this.element.change();
        }
      }
      if (!this.dates.length && oldDates.length) {
        this._trigger('clearDate');
        this.element.change();
      }
      this.fill();
      return this;
    },
    fillDow: function fillDow() {
      if (this.o.showWeekDays) {
        var dowCnt = this.o.weekStart,
          html = '<tr>';
        if (this.o.calendarWeeks) {
          html += '<th class="cw">&#160;</th>';
        }
        while (dowCnt < this.o.weekStart + 7) {
          html += '<th class="dow';
          if ($.inArray(dowCnt, this.o.daysOfWeekDisabled) !== -1) html += ' disabled';
          html += '">' + dates[this.o.language].daysMin[dowCnt++ % 7] + '</th>';
        }
        html += '</tr>';
        this.picker.find('.datepicker-days thead').append(html);
      }
    },
    fillMonths: function fillMonths() {
      var localDate = this._utc_to_local(this.viewDate);
      var html = '';
      var focused;
      for (var i = 0; i < 12; i++) {
        focused = localDate && localDate.getMonth() === i ? ' focused' : '';
        html += '<span class="month' + focused + '">' + dates[this.o.language].monthsShort[i] + '</span>';
      }
      this.picker.find('.datepicker-months td').html(html);
    },
    setRange: function setRange(range) {
      if (!range || !range.length) delete this.range;else this.range = $.map(range, function (d) {
        return d.valueOf();
      });
      this.fill();
    },
    getClassNames: function getClassNames(date) {
      var cls = [],
        year = this.viewDate.getUTCFullYear(),
        month = this.viewDate.getUTCMonth(),
        today = UTCToday();
      if (date.getUTCFullYear() < year || date.getUTCFullYear() === year && date.getUTCMonth() < month) {
        cls.push('old');
      } else if (date.getUTCFullYear() > year || date.getUTCFullYear() === year && date.getUTCMonth() > month) {
        cls.push('new');
      }
      if (this.focusDate && date.valueOf() === this.focusDate.valueOf()) cls.push('focused');
      // Compare internal UTC date with UTC today, not local today
      if (this.o.todayHighlight && isUTCEquals(date, today)) {
        cls.push('today');
      }
      if (this.dates.contains(date) !== -1) cls.push('active');
      if (!this.dateWithinRange(date)) {
        cls.push('disabled');
      }
      if (this.dateIsDisabled(date)) {
        cls.push('disabled', 'disabled-date');
      }
      if ($.inArray(date.getUTCDay(), this.o.daysOfWeekHighlighted) !== -1) {
        cls.push('highlighted');
      }
      if (this.range) {
        if (date > this.range[0] && date < this.range[this.range.length - 1]) {
          cls.push('range');
        }
        if ($.inArray(date.valueOf(), this.range) !== -1) {
          cls.push('selected');
        }
        if (date.valueOf() === this.range[0]) {
          cls.push('range-start');
        }
        if (date.valueOf() === this.range[this.range.length - 1]) {
          cls.push('range-end');
        }
      }
      return cls;
    },
    _fill_yearsView: function _fill_yearsView(selector, cssClass, factor, year, startYear, endYear, beforeFn) {
      var html = '';
      var step = factor / 10;
      var view = this.picker.find(selector);
      var startVal = Math.floor(year / factor) * factor;
      var endVal = startVal + step * 9;
      var focusedVal = Math.floor(this.viewDate.getFullYear() / step) * step;
      var selected = $.map(this.dates, function (d) {
        return Math.floor(d.getUTCFullYear() / step) * step;
      });
      var classes, tooltip, before;
      for (var currVal = startVal - step; currVal <= endVal + step; currVal += step) {
        classes = [cssClass];
        tooltip = null;
        if (currVal === startVal - step) {
          classes.push('old');
        } else if (currVal === endVal + step) {
          classes.push('new');
        }
        if ($.inArray(currVal, selected) !== -1) {
          classes.push('active');
        }
        if (currVal < startYear || currVal > endYear) {
          classes.push('disabled');
        }
        if (currVal === focusedVal) {
          classes.push('focused');
        }
        if (beforeFn !== $.noop) {
          before = beforeFn(new Date(currVal, 0, 1));
          if (before === undefined) {
            before = {};
          } else if (typeof before === 'boolean') {
            before = {
              enabled: before
            };
          } else if (typeof before === 'string') {
            before = {
              classes: before
            };
          }
          if (before.enabled === false) {
            classes.push('disabled');
          }
          if (before.classes) {
            classes = classes.concat(before.classes.split(/\s+/));
          }
          if (before.tooltip) {
            tooltip = before.tooltip;
          }
        }
        html += '<span class="' + classes.join(' ') + '"' + (tooltip ? ' title="' + tooltip + '"' : '') + '>' + currVal + '</span>';
      }
      view.find('.datepicker-switch').text(startVal + '-' + endVal);
      view.find('td').html(html);
    },
    fill: function fill() {
      var d = new Date(this.viewDate),
        year = d.getUTCFullYear(),
        month = d.getUTCMonth(),
        startYear = this.o.startDate !== -Infinity ? this.o.startDate.getUTCFullYear() : -Infinity,
        startMonth = this.o.startDate !== -Infinity ? this.o.startDate.getUTCMonth() : -Infinity,
        endYear = this.o.endDate !== Infinity ? this.o.endDate.getUTCFullYear() : Infinity,
        endMonth = this.o.endDate !== Infinity ? this.o.endDate.getUTCMonth() : Infinity,
        todaytxt = dates[this.o.language].today || dates['en'].today || '',
        cleartxt = dates[this.o.language].clear || dates['en'].clear || '',
        titleFormat = dates[this.o.language].titleFormat || dates['en'].titleFormat,
        tooltip,
        before;
      if (isNaN(year) || isNaN(month)) return;
      this.picker.find('.datepicker-days .datepicker-switch').text(DPGlobal.formatDate(d, titleFormat, this.o.language));
      this.picker.find('tfoot .today').text(todaytxt).css('display', this.o.todayBtn === true || this.o.todayBtn === 'linked' ? 'table-cell' : 'none');
      this.picker.find('tfoot .clear').text(cleartxt).css('display', this.o.clearBtn === true ? 'table-cell' : 'none');
      this.picker.find('thead .datepicker-title').text(this.o.title).css('display', typeof this.o.title === 'string' && this.o.title !== '' ? 'table-cell' : 'none');
      this.updateNavArrows();
      this.fillMonths();
      var prevMonth = UTCDate(year, month, 0),
        day = prevMonth.getUTCDate();
      prevMonth.setUTCDate(day - (prevMonth.getUTCDay() - this.o.weekStart + 7) % 7);
      var nextMonth = new Date(prevMonth);
      if (prevMonth.getUTCFullYear() < 100) {
        nextMonth.setUTCFullYear(prevMonth.getUTCFullYear());
      }
      nextMonth.setUTCDate(nextMonth.getUTCDate() + 42);
      nextMonth = nextMonth.valueOf();
      var html = [];
      var weekDay, clsName;
      while (prevMonth.valueOf() < nextMonth) {
        weekDay = prevMonth.getUTCDay();
        if (weekDay === this.o.weekStart) {
          html.push('<tr>');
          if (this.o.calendarWeeks) {
            // ISO 8601: First week contains first thursday.
            // ISO also states week starts on Monday, but we can be more abstract here.
            var
              // Start of current week: based on weekstart/current date
              ws = new Date(+prevMonth + (this.o.weekStart - weekDay - 7) % 7 * 864e5),
              // Thursday of this week
              th = new Date(Number(ws) + (7 + 4 - ws.getUTCDay()) % 7 * 864e5),
              // First Thursday of year, year from thursday
              yth = new Date(Number(yth = UTCDate(th.getUTCFullYear(), 0, 1)) + (7 + 4 - yth.getUTCDay()) % 7 * 864e5),
              // Calendar week: ms between thursdays, div ms per day, div 7 days
              calWeek = (th - yth) / 864e5 / 7 + 1;
            html.push('<td class="cw">' + calWeek + '</td>');
          }
        }
        clsName = this.getClassNames(prevMonth);
        clsName.push('day');
        var content = prevMonth.getUTCDate();
        if (this.o.beforeShowDay !== $.noop) {
          before = this.o.beforeShowDay(this._utc_to_local(prevMonth));
          if (before === undefined) before = {};else if (typeof before === 'boolean') before = {
            enabled: before
          };else if (typeof before === 'string') before = {
            classes: before
          };
          if (before.enabled === false) clsName.push('disabled');
          if (before.classes) clsName = clsName.concat(before.classes.split(/\s+/));
          if (before.tooltip) tooltip = before.tooltip;
          if (before.content) content = before.content;
        }

        //Check if uniqueSort exists (supported by jquery >=1.12 and >=2.2)
        //Fallback to unique function for older jquery versions
        if ($.isFunction($.uniqueSort)) {
          clsName = $.uniqueSort(clsName);
        } else {
          clsName = $.unique(clsName);
        }
        html.push('<td class="' + clsName.join(' ') + '"' + (tooltip ? ' title="' + tooltip + '"' : '') + ' data-date="' + prevMonth.getTime().toString() + '">' + content + '</td>');
        tooltip = null;
        if (weekDay === this.o.weekEnd) {
          html.push('</tr>');
        }
        prevMonth.setUTCDate(prevMonth.getUTCDate() + 1);
      }
      this.picker.find('.datepicker-days tbody').html(html.join(''));
      var monthsTitle = dates[this.o.language].monthsTitle || dates['en'].monthsTitle || 'Months';
      var months = this.picker.find('.datepicker-months').find('.datepicker-switch').text(this.o.maxViewMode < 2 ? monthsTitle : year).end().find('tbody span').removeClass('active');
      $.each(this.dates, function (i, d) {
        if (d.getUTCFullYear() === year) months.eq(d.getUTCMonth()).addClass('active');
      });
      if (year < startYear || year > endYear) {
        months.addClass('disabled');
      }
      if (year === startYear) {
        months.slice(0, startMonth).addClass('disabled');
      }
      if (year === endYear) {
        months.slice(endMonth + 1).addClass('disabled');
      }
      if (this.o.beforeShowMonth !== $.noop) {
        var that = this;
        $.each(months, function (i, month) {
          var moDate = new Date(year, i, 1);
          var before = that.o.beforeShowMonth(moDate);
          if (before === undefined) before = {};else if (typeof before === 'boolean') before = {
            enabled: before
          };else if (typeof before === 'string') before = {
            classes: before
          };
          if (before.enabled === false && !$(month).hasClass('disabled')) $(month).addClass('disabled');
          if (before.classes) $(month).addClass(before.classes);
          if (before.tooltip) $(month).prop('title', before.tooltip);
        });
      }

      // Generating decade/years picker
      this._fill_yearsView('.datepicker-years', 'year', 10, year, startYear, endYear, this.o.beforeShowYear);

      // Generating century/decades picker
      this._fill_yearsView('.datepicker-decades', 'decade', 100, year, startYear, endYear, this.o.beforeShowDecade);

      // Generating millennium/centuries picker
      this._fill_yearsView('.datepicker-centuries', 'century', 1000, year, startYear, endYear, this.o.beforeShowCentury);
    },
    updateNavArrows: function updateNavArrows() {
      if (!this._allow_update) return;
      var d = new Date(this.viewDate),
        year = d.getUTCFullYear(),
        month = d.getUTCMonth(),
        startYear = this.o.startDate !== -Infinity ? this.o.startDate.getUTCFullYear() : -Infinity,
        startMonth = this.o.startDate !== -Infinity ? this.o.startDate.getUTCMonth() : -Infinity,
        endYear = this.o.endDate !== Infinity ? this.o.endDate.getUTCFullYear() : Infinity,
        endMonth = this.o.endDate !== Infinity ? this.o.endDate.getUTCMonth() : Infinity,
        prevIsDisabled,
        nextIsDisabled,
        factor = 1;
      switch (this.viewMode) {
        case 4:
          factor *= 10;
        /* falls through */
        case 3:
          factor *= 10;
        /* falls through */
        case 2:
          factor *= 10;
        /* falls through */
        case 1:
          prevIsDisabled = Math.floor(year / factor) * factor < startYear;
          nextIsDisabled = Math.floor(year / factor) * factor + factor > endYear;
          break;
        case 0:
          prevIsDisabled = year <= startYear && month < startMonth;
          nextIsDisabled = year >= endYear && month > endMonth;
          break;
      }
      this.picker.find('.prev').toggleClass('disabled', prevIsDisabled);
      this.picker.find('.next').toggleClass('disabled', nextIsDisabled);
    },
    click: function click(e) {
      e.preventDefault();
      e.stopPropagation();
      var target, dir, day, year, month;
      target = $(e.target);

      // Clicked on the switch
      if (target.hasClass('datepicker-switch') && this.viewMode !== this.o.maxViewMode) {
        this.setViewMode(this.viewMode + 1);
      }

      // Clicked on today button
      if (target.hasClass('today') && !target.hasClass('day')) {
        this.setViewMode(0);
        this._setDate(UTCToday(), this.o.todayBtn === 'linked' ? null : 'view');
      }

      // Clicked on clear button
      if (target.hasClass('clear')) {
        this.clearDates();
      }
      if (!target.hasClass('disabled')) {
        // Clicked on a month, year, decade, century
        if (target.hasClass('month') || target.hasClass('year') || target.hasClass('decade') || target.hasClass('century')) {
          this.viewDate.setUTCDate(1);
          day = 1;
          if (this.viewMode === 1) {
            month = target.parent().find('span').index(target);
            year = this.viewDate.getUTCFullYear();
            this.viewDate.setUTCMonth(month);
          } else {
            month = 0;
            year = Number(target.text());
            this.viewDate.setUTCFullYear(year);
          }
          this._trigger(DPGlobal.viewModes[this.viewMode - 1].e, this.viewDate);
          if (this.viewMode === this.o.minViewMode) {
            this._setDate(UTCDate(year, month, day));
          } else {
            this.setViewMode(this.viewMode - 1);
            this.fill();
          }
        }
      }
      if (this.picker.is(':visible') && this._focused_from) {
        this._focused_from.focus();
      }
      delete this._focused_from;
    },
    dayCellClick: function dayCellClick(e) {
      var $target = $(e.currentTarget);
      var timestamp = $target.data('date');
      var date = new Date(timestamp);
      if (this.o.updateViewDate) {
        if (date.getUTCFullYear() !== this.viewDate.getUTCFullYear()) {
          this._trigger('changeYear', this.viewDate);
        }
        if (date.getUTCMonth() !== this.viewDate.getUTCMonth()) {
          this._trigger('changeMonth', this.viewDate);
        }
      }
      this._setDate(date);
    },
    // Clicked on prev or next
    navArrowsClick: function navArrowsClick(e) {
      var $target = $(e.currentTarget);
      var dir = $target.hasClass('prev') ? -1 : 1;
      if (this.viewMode !== 0) {
        dir *= DPGlobal.viewModes[this.viewMode].navStep * 12;
      }
      this.viewDate = this.moveMonth(this.viewDate, dir);
      this._trigger(DPGlobal.viewModes[this.viewMode].e, this.viewDate);
      this.fill();
    },
    _toggle_multidate: function _toggle_multidate(date) {
      var ix = this.dates.contains(date);
      if (!date) {
        this.dates.clear();
      }
      if (ix !== -1) {
        if (this.o.multidate === true || this.o.multidate > 1 || this.o.toggleActive) {
          this.dates.remove(ix);
        }
      } else if (this.o.multidate === false) {
        this.dates.clear();
        this.dates.push(date);
      } else {
        this.dates.push(date);
      }
      if (typeof this.o.multidate === 'number') while (this.dates.length > this.o.multidate) this.dates.remove(0);
    },
    _setDate: function _setDate(date, which) {
      if (!which || which === 'date') this._toggle_multidate(date && new Date(date));
      if (!which && this.o.updateViewDate || which === 'view') this.viewDate = date && new Date(date);
      this.fill();
      this.setValue();
      if (!which || which !== 'view') {
        this._trigger('changeDate');
      }
      this.inputField.trigger('change');
      if (this.o.autoclose && (!which || which === 'date')) {
        this.hide();
      }
    },
    moveDay: function moveDay(date, dir) {
      var newDate = new Date(date);
      newDate.setUTCDate(date.getUTCDate() + dir);
      return newDate;
    },
    moveWeek: function moveWeek(date, dir) {
      return this.moveDay(date, dir * 7);
    },
    moveMonth: function moveMonth(date, dir) {
      if (!isValidDate(date)) return this.o.defaultViewDate;
      if (!dir) return date;
      var new_date = new Date(date.valueOf()),
        day = new_date.getUTCDate(),
        month = new_date.getUTCMonth(),
        mag = Math.abs(dir),
        new_month,
        test;
      dir = dir > 0 ? 1 : -1;
      if (mag === 1) {
        test = dir === -1
        // If going back one month, make sure month is not current month
        // (eg, Mar 31 -> Feb 31 == Feb 28, not Mar 02)
        ? function () {
          return new_date.getUTCMonth() === month;
        }
        // If going forward one month, make sure month is as expected
        // (eg, Jan 31 -> Feb 31 == Feb 28, not Mar 02)
        : function () {
          return new_date.getUTCMonth() !== new_month;
        };
        new_month = month + dir;
        new_date.setUTCMonth(new_month);
        // Dec -> Jan (12) or Jan -> Dec (-1) -- limit expected date to 0-11
        new_month = (new_month + 12) % 12;
      } else {
        // For magnitudes >1, move one month at a time...
        for (var i = 0; i < mag; i++)
        // ...which might decrease the day (eg, Jan 31 to Feb 28, etc)...
        new_date = this.moveMonth(new_date, dir);
        // ...then reset the day, keeping it in the new month
        new_month = new_date.getUTCMonth();
        new_date.setUTCDate(day);
        test = function test() {
          return new_month !== new_date.getUTCMonth();
        };
      }
      // Common date-resetting loop -- if date is beyond end of month, make it
      // end of month
      while (test()) {
        new_date.setUTCDate(--day);
        new_date.setUTCMonth(new_month);
      }
      return new_date;
    },
    moveYear: function moveYear(date, dir) {
      return this.moveMonth(date, dir * 12);
    },
    moveAvailableDate: function moveAvailableDate(date, dir, fn) {
      do {
        date = this[fn](date, dir);
        if (!this.dateWithinRange(date)) return false;
        fn = 'moveDay';
      } while (this.dateIsDisabled(date));
      return date;
    },
    weekOfDateIsDisabled: function weekOfDateIsDisabled(date) {
      return $.inArray(date.getUTCDay(), this.o.daysOfWeekDisabled) !== -1;
    },
    dateIsDisabled: function dateIsDisabled(date) {
      return this.weekOfDateIsDisabled(date) || $.grep(this.o.datesDisabled, function (d) {
        return isUTCEquals(date, d);
      }).length > 0;
    },
    dateWithinRange: function dateWithinRange(date) {
      return date >= this.o.startDate && date <= this.o.endDate;
    },
    keydown: function keydown(e) {
      if (!this.picker.is(':visible')) {
        if (e.keyCode === 40 || e.keyCode === 27) {
          // allow down to re-show picker
          this.show();
          e.stopPropagation();
        }
        return;
      }
      var dateChanged = false,
        dir,
        newViewDate,
        focusDate = this.focusDate || this.viewDate;
      switch (e.keyCode) {
        case 27:
          // escape
          if (this.focusDate) {
            this.focusDate = null;
            this.viewDate = this.dates.get(-1) || this.viewDate;
            this.fill();
          } else this.hide();
          e.preventDefault();
          e.stopPropagation();
          break;
        case 37: // left
        case 38: // up
        case 39: // right
        case 40:
          // down
          if (!this.o.keyboardNavigation || this.o.daysOfWeekDisabled.length === 7) break;
          dir = e.keyCode === 37 || e.keyCode === 38 ? -1 : 1;
          if (this.viewMode === 0) {
            if (e.ctrlKey) {
              newViewDate = this.moveAvailableDate(focusDate, dir, 'moveYear');
              if (newViewDate) this._trigger('changeYear', this.viewDate);
            } else if (e.shiftKey) {
              newViewDate = this.moveAvailableDate(focusDate, dir, 'moveMonth');
              if (newViewDate) this._trigger('changeMonth', this.viewDate);
            } else if (e.keyCode === 37 || e.keyCode === 39) {
              newViewDate = this.moveAvailableDate(focusDate, dir, 'moveDay');
            } else if (!this.weekOfDateIsDisabled(focusDate)) {
              newViewDate = this.moveAvailableDate(focusDate, dir, 'moveWeek');
            }
          } else if (this.viewMode === 1) {
            if (e.keyCode === 38 || e.keyCode === 40) {
              dir = dir * 4;
            }
            newViewDate = this.moveAvailableDate(focusDate, dir, 'moveMonth');
          } else if (this.viewMode === 2) {
            if (e.keyCode === 38 || e.keyCode === 40) {
              dir = dir * 4;
            }
            newViewDate = this.moveAvailableDate(focusDate, dir, 'moveYear');
          }
          if (newViewDate) {
            this.focusDate = this.viewDate = newViewDate;
            this.setValue();
            this.fill();
            e.preventDefault();
          }
          break;
        case 13:
          // enter
          if (!this.o.forceParse) break;
          focusDate = this.focusDate || this.dates.get(-1) || this.viewDate;
          if (this.o.keyboardNavigation) {
            this._toggle_multidate(focusDate);
            dateChanged = true;
          }
          this.focusDate = null;
          this.viewDate = this.dates.get(-1) || this.viewDate;
          this.setValue();
          this.fill();
          if (this.picker.is(':visible')) {
            e.preventDefault();
            e.stopPropagation();
            if (this.o.autoclose) this.hide();
          }
          break;
        case 9:
          // tab
          this.focusDate = null;
          this.viewDate = this.dates.get(-1) || this.viewDate;
          this.fill();
          this.hide();
          break;
      }
      if (dateChanged) {
        if (this.dates.length) this._trigger('changeDate');else this._trigger('clearDate');
        this.inputField.trigger('change');
      }
    },
    setViewMode: function setViewMode(viewMode) {
      this.viewMode = viewMode;
      this.picker.children('div').hide().filter('.datepicker-' + DPGlobal.viewModes[this.viewMode].clsName).show();
      this.updateNavArrows();
      this._trigger('changeViewMode', new Date(this.viewDate));
    }
  };
  var DateRangePicker = function DateRangePicker(element, options) {
    $.data(element, 'datepicker', this);
    this.element = $(element);
    this.inputs = $.map(options.inputs, function (i) {
      return i.jquery ? i[0] : i;
    });
    delete options.inputs;
    this.keepEmptyValues = options.keepEmptyValues;
    delete options.keepEmptyValues;
    datepickerPlugin.call($(this.inputs), options).on('changeDate', $.proxy(this.dateUpdated, this));
    this.pickers = $.map(this.inputs, function (i) {
      return $.data(i, 'datepicker');
    });
    this.updateDates();
  };
  DateRangePicker.prototype = {
    updateDates: function updateDates() {
      this.dates = $.map(this.pickers, function (i) {
        return i.getUTCDate();
      });
      this.updateRanges();
    },
    updateRanges: function updateRanges() {
      var range = $.map(this.dates, function (d) {
        return d.valueOf();
      });
      $.each(this.pickers, function (i, p) {
        p.setRange(range);
      });
    },
    clearDates: function clearDates() {
      $.each(this.pickers, function (i, p) {
        p.clearDates();
      });
    },
    dateUpdated: function dateUpdated(e) {
      // `this.updating` is a workaround for preventing infinite recursion
      // between `changeDate` triggering and `setUTCDate` calling.  Until
      // there is a better mechanism.
      if (this.updating) return;
      this.updating = true;
      var dp = $.data(e.target, 'datepicker');
      if (dp === undefined) {
        return;
      }
      var new_date = dp.getUTCDate(),
        keep_empty_values = this.keepEmptyValues,
        i = $.inArray(e.target, this.inputs),
        j = i - 1,
        k = i + 1,
        l = this.inputs.length;
      if (i === -1) return;
      $.each(this.pickers, function (i, p) {
        if (!p.getUTCDate() && (p === dp || !keep_empty_values)) p.setUTCDate(new_date);
      });
      if (new_date < this.dates[j]) {
        // Date being moved earlier/left
        while (j >= 0 && new_date < this.dates[j]) {
          this.pickers[j--].setUTCDate(new_date);
        }
      } else if (new_date > this.dates[k]) {
        // Date being moved later/right
        while (k < l && new_date > this.dates[k]) {
          this.pickers[k++].setUTCDate(new_date);
        }
      }
      this.updateDates();
      delete this.updating;
    },
    destroy: function destroy() {
      $.map(this.pickers, function (p) {
        p.destroy();
      });
      $(this.inputs).off('changeDate', this.dateUpdated);
      delete this.element.data().datepicker;
    },
    remove: alias('destroy', 'Method `remove` is deprecated and will be removed in version 2.0. Use `destroy` instead')
  };
  function opts_from_el(el, prefix) {
    // Derive options from element data-attrs
    var data = $(el).data(),
      out = {},
      inkey,
      replace = new RegExp('^' + prefix.toLowerCase() + '([A-Z])');
    prefix = new RegExp('^' + prefix.toLowerCase());
    function re_lower(_, a) {
      return a.toLowerCase();
    }
    for (var key in data) if (prefix.test(key)) {
      inkey = key.replace(replace, re_lower);
      out[inkey] = data[key];
    }
    return out;
  }
  function opts_from_locale(lang) {
    // Derive options from locale plugins
    var out = {};
    // Check if "de-DE" style date is available, if not language should
    // fallback to 2 letter code eg "de"
    if (!dates[lang]) {
      lang = lang.split('-')[0];
      if (!dates[lang]) return;
    }
    var d = dates[lang];
    $.each(locale_opts, function (i, k) {
      if (k in d) out[k] = d[k];
    });
    return out;
  }
  var old = $.fn.datepicker;
  var datepickerPlugin = function datepickerPlugin(option) {
    var args = Array.apply(null, arguments);
    args.shift();
    var internal_return;
    this.each(function () {
      var $this = $(this),
        data = $this.data('datepicker'),
        options = _typeof(option) === 'object' && option;
      if (!data) {
        var elopts = opts_from_el(this, 'date'),
          // Preliminary otions
          xopts = $.extend({}, defaults, elopts, options),
          locopts = opts_from_locale(xopts.language),
          // Options priority: js args, data-attrs, locales, defaults
          opts = $.extend({}, defaults, locopts, elopts, options);
        if ($this.hasClass('input-daterange') || opts.inputs) {
          $.extend(opts, {
            inputs: opts.inputs || $this.find('input').toArray()
          });
          data = new DateRangePicker(this, opts);
        } else {
          data = new Datepicker(this, opts);
        }
        $this.data('datepicker', data);
      }
      if (typeof option === 'string' && typeof data[option] === 'function') {
        internal_return = data[option].apply(data, args);
      }
    });
    if (internal_return === undefined || internal_return instanceof Datepicker || internal_return instanceof DateRangePicker) return this;
    if (this.length > 1) throw new Error('Using only allowed for the collection of a single element (' + option + ' function)');else return internal_return;
  };
  $.fn.datepicker = datepickerPlugin;
  var defaults = $.fn.datepicker.defaults = {
    assumeNearbyYear: false,
    autoclose: false,
    beforeShowDay: $.noop,
    beforeShowMonth: $.noop,
    beforeShowYear: $.noop,
    beforeShowDecade: $.noop,
    beforeShowCentury: $.noop,
    calendarWeeks: false,
    clearBtn: false,
    toggleActive: false,
    daysOfWeekDisabled: [],
    daysOfWeekHighlighted: [],
    datesDisabled: [],
    endDate: Infinity,
    forceParse: true,
    format: 'mm/dd/yyyy',
    keepEmptyValues: false,
    keyboardNavigation: true,
    language: 'en',
    minViewMode: 0,
    maxViewMode: 4,
    multidate: false,
    multidateSeparator: ',',
    orientation: "auto",
    rtl: false,
    startDate: -Infinity,
    startView: 0,
    todayBtn: false,
    todayHighlight: false,
    updateViewDate: true,
    weekStart: 0,
    disableTouchKeyboard: false,
    enableOnReadonly: true,
    showOnFocus: true,
    zIndexOffset: 10,
    container: 'body',
    immediateUpdates: false,
    title: '',
    templates: {
      leftArrow: '&#x00AB;',
      rightArrow: '&#x00BB;'
    },
    showWeekDays: true
  };
  var locale_opts = $.fn.datepicker.locale_opts = ['format', 'rtl', 'weekStart'];
  $.fn.datepicker.Constructor = Datepicker;
  var dates = $.fn.datepicker.dates = {
    en: {
      days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      daysMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
      months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
      monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      today: "Today",
      clear: "Clear",
      titleFormat: "MM yyyy"
    }
  };
  var DPGlobal = {
    viewModes: [{
      names: ['days', 'month'],
      clsName: 'days',
      e: 'changeMonth'
    }, {
      names: ['months', 'year'],
      clsName: 'months',
      e: 'changeYear',
      navStep: 1
    }, {
      names: ['years', 'decade'],
      clsName: 'years',
      e: 'changeDecade',
      navStep: 10
    }, {
      names: ['decades', 'century'],
      clsName: 'decades',
      e: 'changeCentury',
      navStep: 100
    }, {
      names: ['centuries', 'millennium'],
      clsName: 'centuries',
      e: 'changeMillennium',
      navStep: 1000
    }],
    validParts: /dd?|DD?|mm?|MM?|yy(?:yy)?/g,
    nonpunctuation: /[^ -\/:-@\u5e74\u6708\u65e5\[-`{-~\t\n\r]+/g,
    parseFormat: function parseFormat(format) {
      if (typeof format.toValue === 'function' && typeof format.toDisplay === 'function') return format;
      // IE treats \0 as a string end in inputs (truncating the value),
      // so it's a bad format delimiter, anyway
      var separators = format.replace(this.validParts, '\0').split('\0'),
        parts = format.match(this.validParts);
      if (!separators || !separators.length || !parts || parts.length === 0) {
        throw new Error("Invalid date format.");
      }
      return {
        separators: separators,
        parts: parts
      };
    },
    parseDate: function parseDate(date, format, language, assumeNearby) {
      if (!date) return undefined;
      if (date instanceof Date) return date;
      if (typeof format === 'string') format = DPGlobal.parseFormat(format);
      if (format.toValue) return format.toValue(date, format, language);
      var fn_map = {
          d: 'moveDay',
          m: 'moveMonth',
          w: 'moveWeek',
          y: 'moveYear'
        },
        dateAliases = {
          yesterday: '-1d',
          today: '+0d',
          tomorrow: '+1d'
        },
        parts,
        part,
        dir,
        i,
        fn;
      if (date in dateAliases) {
        date = dateAliases[date];
      }
      if (/^[\-+]\d+[dmwy]([\s,]+[\-+]\d+[dmwy])*$/i.test(date)) {
        parts = date.match(/([\-+]\d+)([dmwy])/gi);
        date = new Date();
        for (i = 0; i < parts.length; i++) {
          part = parts[i].match(/([\-+]\d+)([dmwy])/i);
          dir = Number(part[1]);
          fn = fn_map[part[2].toLowerCase()];
          date = Datepicker.prototype[fn](date, dir);
        }
        return Datepicker.prototype._zero_utc_time(date);
      }
      parts = date && date.match(this.nonpunctuation) || [];
      function applyNearbyYear(year, threshold) {
        if (threshold === true) threshold = 10;

        // if year is 2 digits or less, than the user most likely is trying to get a recent century
        if (year < 100) {
          year += 2000;
          // if the new year is more than threshold years in advance, use last century
          if (year > new Date().getFullYear() + threshold) {
            year -= 100;
          }
        }
        return year;
      }
      var parsed = {},
        setters_order = ['yyyy', 'yy', 'M', 'MM', 'm', 'mm', 'd', 'dd'],
        setters_map = {
          yyyy: function yyyy(d, v) {
            return d.setUTCFullYear(assumeNearby ? applyNearbyYear(v, assumeNearby) : v);
          },
          m: function m(d, v) {
            if (isNaN(d)) return d;
            v -= 1;
            while (v < 0) v += 12;
            v %= 12;
            d.setUTCMonth(v);
            while (d.getUTCMonth() !== v) d.setUTCDate(d.getUTCDate() - 1);
            return d;
          },
          d: function d(_d, v) {
            return _d.setUTCDate(v);
          }
        },
        val,
        filtered;
      setters_map['yy'] = setters_map['yyyy'];
      setters_map['M'] = setters_map['MM'] = setters_map['mm'] = setters_map['m'];
      setters_map['dd'] = setters_map['d'];
      date = UTCToday();
      var fparts = format.parts.slice();
      // Remove noop parts
      if (parts.length !== fparts.length) {
        fparts = $(fparts).filter(function (i, p) {
          return $.inArray(p, setters_order) !== -1;
        }).toArray();
      }
      // Process remainder
      function match_part() {
        var m = this.slice(0, parts[i].length),
          p = parts[i].slice(0, m.length);
        return m.toLowerCase() === p.toLowerCase();
      }
      if (parts.length === fparts.length) {
        var cnt;
        for (i = 0, cnt = fparts.length; i < cnt; i++) {
          val = parseInt(parts[i], 10);
          part = fparts[i];
          if (isNaN(val)) {
            switch (part) {
              case 'MM':
                filtered = $(dates[language].months).filter(match_part);
                val = $.inArray(filtered[0], dates[language].months) + 1;
                break;
              case 'M':
                filtered = $(dates[language].monthsShort).filter(match_part);
                val = $.inArray(filtered[0], dates[language].monthsShort) + 1;
                break;
            }
          }
          parsed[part] = val;
        }
        var _date, s;
        for (i = 0; i < setters_order.length; i++) {
          s = setters_order[i];
          if (s in parsed && !isNaN(parsed[s])) {
            _date = new Date(date);
            setters_map[s](_date, parsed[s]);
            if (!isNaN(_date)) date = _date;
          }
        }
      }
      return date;
    },
    formatDate: function formatDate(date, format, language) {
      if (!date) return '';
      if (typeof format === 'string') format = DPGlobal.parseFormat(format);
      if (format.toDisplay) return format.toDisplay(date, format, language);
      var val = {
        d: date.getUTCDate(),
        D: dates[language].daysShort[date.getUTCDay()],
        DD: dates[language].days[date.getUTCDay()],
        m: date.getUTCMonth() + 1,
        M: dates[language].monthsShort[date.getUTCMonth()],
        MM: dates[language].months[date.getUTCMonth()],
        yy: date.getUTCFullYear().toString().substring(2),
        yyyy: date.getUTCFullYear()
      };
      val.dd = (val.d < 10 ? '0' : '') + val.d;
      val.mm = (val.m < 10 ? '0' : '') + val.m;
      date = [];
      var seps = $.extend([], format.separators);
      for (var i = 0, cnt = format.parts.length; i <= cnt; i++) {
        if (seps.length) date.push(seps.shift());
        date.push(val[format.parts[i]]);
      }
      return date.join('');
    },
    headTemplate: '<thead>' + '<tr>' + '<th colspan="7" class="datepicker-title"></th>' + '</tr>' + '<tr>' + '<th class="prev">' + defaults.templates.leftArrow + '</th>' + '<th colspan="5" class="datepicker-switch"></th>' + '<th class="next">' + defaults.templates.rightArrow + '</th>' + '</tr>' + '</thead>',
    contTemplate: '<tbody><tr><td colspan="7"></td></tr></tbody>',
    footTemplate: '<tfoot>' + '<tr>' + '<th colspan="7" class="today"></th>' + '</tr>' + '<tr>' + '<th colspan="7" class="clear"></th>' + '</tr>' + '</tfoot>'
  };
  DPGlobal.template = '<div class="datepicker">' + '<div class="datepicker-days">' + '<table class="table-condensed">' + DPGlobal.headTemplate + '<tbody></tbody>' + DPGlobal.footTemplate + '</table>' + '</div>' + '<div class="datepicker-months">' + '<table class="table-condensed">' + DPGlobal.headTemplate + DPGlobal.contTemplate + DPGlobal.footTemplate + '</table>' + '</div>' + '<div class="datepicker-years">' + '<table class="table-condensed">' + DPGlobal.headTemplate + DPGlobal.contTemplate + DPGlobal.footTemplate + '</table>' + '</div>' + '<div class="datepicker-decades">' + '<table class="table-condensed">' + DPGlobal.headTemplate + DPGlobal.contTemplate + DPGlobal.footTemplate + '</table>' + '</div>' + '<div class="datepicker-centuries">' + '<table class="table-condensed">' + DPGlobal.headTemplate + DPGlobal.contTemplate + DPGlobal.footTemplate + '</table>' + '</div>' + '</div>';
  $.fn.datepicker.DPGlobal = DPGlobal;

  /* DATEPICKER NO CONFLICT
  * =================== */

  $.fn.datepicker.noConflict = function () {
    $.fn.datepicker = old;
    return this;
  };

  /* DATEPICKER VERSION
   * =================== */
  $.fn.datepicker.version = '1.8.0';
  $.fn.datepicker.deprecated = function (msg) {
    var console = window.console;
    if (console && console.warn) {
      console.warn('DEPRECATED: ' + msg);
    }
  };

  /* DATEPICKER DATA-API
  * ================== */

  $(document).on('focus.datepicker.data-api click.datepicker.data-api', '[data-provide="datepicker"]', function (e) {
    var $this = $(this);
    if ($this.data('datepicker')) return;
    e.preventDefault();
    // component click requires us to explicitly show it
    datepickerPlugin.call($this, 'show');
  });
  $(function () {
    datepickerPlugin.call($('[data-provide="datepicker-inline"]'));
  });
});

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_internals_export_js","vendors-node_modules_core-js_internals_add-to-unscopables_js-node_modules_core-js_internals_a-09983a","vendors-node_modules_core-js_internals_array-slice_js-node_modules_core-js_internals_function-caeab8","vendors-node_modules_core-js_modules_es_string_iterator_js-node_modules_core-js_modules_es_sy-23bad7","vendors-node_modules_jquery_dist_jquery_js","vendors-node_modules_core-js_internals_advance-string-index_js-node_modules_core-js_internals-27e96d","vendors-node_modules_core-js_modules_es_regexp_constructor_js-node_modules_core-js_modules_es-de7eec","vendors-node_modules_core-js_internals_array-method-has-species-support_js-node_modules_core--d0f16b","vendors-node_modules_core-js_internals_array-method-is-strict_js-node_modules_core-js_interna-29fcfd","vendors-node_modules_core-js_modules_es_array_concat_js-node_modules_core-js_modules_es_array-02d318"], () => (__webpack_exec__("./assets/css/portoadmin/vendor/bootstrap-datepicker/js/bootstrap-datepicker.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvanMvYm9vdHN0cmFwLWRhdGVwaWNrZXIuZWI2OTc1ZTMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUMsV0FBU0EsT0FBTyxFQUFDO0VBQ2QsSUFBSSxJQUEwQyxFQUFFO0lBQzVDQyxpQ0FBTyxDQUFDLHlFQUFRLENBQUMsb0NBQUVELE9BQU87QUFBQTtBQUFBO0FBQUEsa0dBQUM7RUFDL0IsQ0FBQyxNQUFNO0FBQUEsRUFJTjtBQUNMLENBQUMsRUFBQyxVQUFTTyxDQUFDLEVBQUVDLFNBQVMsRUFBQztFQUN2QixTQUFTQyxPQUFPQSxDQUFBLEVBQUU7SUFDakIsT0FBTyxJQUFJQyxJQUFJLENBQUNBLElBQUksQ0FBQ0MsR0FBRyxDQUFDQyxLQUFLLENBQUNGLElBQUksRUFBRUcsU0FBUyxDQUFDLENBQUM7RUFDakQ7RUFDQSxTQUFTQyxRQUFRQSxDQUFBLEVBQUU7SUFDbEIsSUFBSUMsS0FBSyxHQUFHLElBQUlMLElBQUksQ0FBQyxDQUFDO0lBQ3RCLE9BQU9ELE9BQU8sQ0FBQ00sS0FBSyxDQUFDQyxXQUFXLENBQUMsQ0FBQyxFQUFFRCxLQUFLLENBQUNFLFFBQVEsQ0FBQyxDQUFDLEVBQUVGLEtBQUssQ0FBQ0csT0FBTyxDQUFDLENBQUMsQ0FBQztFQUN2RTtFQUNBLFNBQVNDLFdBQVdBLENBQUNDLEtBQUssRUFBRUMsS0FBSyxFQUFFO0lBQ2xDLE9BQ0NELEtBQUssQ0FBQ0UsY0FBYyxDQUFDLENBQUMsS0FBS0QsS0FBSyxDQUFDQyxjQUFjLENBQUMsQ0FBQyxJQUNqREYsS0FBSyxDQUFDRyxXQUFXLENBQUMsQ0FBQyxLQUFLRixLQUFLLENBQUNFLFdBQVcsQ0FBQyxDQUFDLElBQzNDSCxLQUFLLENBQUNJLFVBQVUsQ0FBQyxDQUFDLEtBQUtILEtBQUssQ0FBQ0csVUFBVSxDQUFDLENBQUM7RUFFM0M7RUFDQSxTQUFTQyxLQUFLQSxDQUFDQyxNQUFNLEVB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QUNDLFVBQVUsQ0FBQ0MsVUFBVSxHQUFHLFVBQVNvYSxHQUFHLEVBQUM7SUFDekMsSUFBSUMsT0FBTyxHQUFHalIsTUFBTSxDQUFDaVIsT0FBTztJQUM1QixJQUFJQSxPQUFPLElBQUlBLE9BQU8sQ0FBQ0MsSUFBSSxFQUFFO01BQzVCRCxPQUFPLENBQUNDLElBQUksQ0FBQyxjQUFjLEdBQUdGLEdBQUcsQ0FBQztJQUNuQztFQUNELENBQUM7O0VBR0Q7QUFDRDs7RUFFQzNiLENBQUMsQ0FBQzhLLFFBQVEsQ0FBQyxDQUFDdkIsRUFBRSxDQUNiLHFEQUFxRCxFQUNyRCw2QkFBNkIsRUFDN0IsVUFBU00sQ0FBQyxFQUFDO0lBQ1YsSUFBSTJPLEtBQUssR0FBR3hZLENBQUMsQ0FBQyxJQUFJLENBQUM7SUFDbkIsSUFBSXdZLEtBQUssQ0FBQ3JWLElBQUksQ0FBQyxZQUFZLENBQUMsRUFDM0I7SUFDRDBHLENBQUMsQ0FBQytDLGNBQWMsQ0FBQyxDQUFDO0lBQ2xCO0lBQ0FpSyxnQkFBZ0IsQ0FBQ0MsSUFBSSxDQUFDMEIsS0FBSyxFQUFFLE1BQU0sQ0FBQztFQUNyQyxDQUNELENBQUM7RUFDRHhZLENBQUMsQ0FBQyxZQUFVO0lBQ1g2VyxnQkFBZ0IsQ0FBQ0MsSUFBSSxDQUFDOVcsQ0FBQyxDQUFDLG9DQUFvQyxDQUFDLENBQUM7RUFDL0QsQ0FBQyxDQUFDO0FBRUgsQ0FBQyxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY3NzL3BvcnRvYWRtaW4vdmVuZG9yL2Jvb3RzdHJhcC1kYXRlcGlja2VyL2pzL2Jvb3RzdHJhcC1kYXRlcGlja2VyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIVxuICogRGF0ZXBpY2tlciBmb3IgQm9vdHN0cmFwIHYxLjguMCAoaHR0cHM6Ly9naXRodWIuY29tL3V4c29sdXRpb25zL2Jvb3RzdHJhcC1kYXRlcGlja2VyKVxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSB2Mi4wIChodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjApXG4gKi9cblxuKGZ1bmN0aW9uKGZhY3Rvcnkpe1xuICAgIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpIHtcbiAgICAgICAgZGVmaW5lKFsnanF1ZXJ5J10sIGZhY3RvcnkpO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKSB7XG4gICAgICAgIGZhY3RvcnkocmVxdWlyZSgnanF1ZXJ5JykpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGZhY3RvcnkoalF1ZXJ5KTtcbiAgICB9XG59KGZ1bmN0aW9uKCQsIHVuZGVmaW5lZCl7XG5cdGZ1bmN0aW9uIFVUQ0RhdGUoKXtcblx0XHRyZXR1cm4gbmV3IERhdGUoRGF0ZS5VVEMuYXBwbHkoRGF0ZSwgYXJndW1lbnRzKSk7XG5cdH1cblx0ZnVuY3Rpb24gVVRDVG9kYXkoKXtcblx0XHR2YXIgdG9kYXkgPSBuZXcgRGF0ZSgpO1xuXHRcdHJldHVybiBVVENEYXRlKHRvZGF5LmdldEZ1bGxZZWFyKCksIHRvZGF5LmdldE1vbnRoKCksIHRvZGF5LmdldERhdGUoKSk7XG5cdH1cblx0ZnVuY3Rpb24gaXNVVENFcXVhbHMoZGF0ZTEsIGRhdGUyKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdGRhdGUxLmdldFVUQ0Z1bGxZZWFyKCkgPT09IGRhdGUyLmdldFVUQ0Z1bGxZZWFyKCkgJiZcblx0XHRcdGRhdGUxLmdldFVUQ01vbnRoKCkgPT09IGRhdGUyLmdldFVUQ01vbnRoKCkgJiZcblx0XHRcdGRhdGUxLmdldFVUQ0RhdGUoKSA9PT0gZGF0ZTIuZ2V0VVRDRGF0ZSgpXG5cdFx0KTtcblx0fVxuXHRmdW5jdGlvbiBhbGlhcyhtZXRob2QsIGRlcHJlY2F0aW9uTXNnKXtcblx0XHRyZXR1cm4gZnVuY3Rpb24oKXtcblx0XHRcdGlmIChkZXByZWNhdGlvbk1zZyAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdCQuZm4uZGF0ZXBpY2tlci5kZXByZWNhdGVkKGRlcHJlY2F0aW9uTXNnKTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIHRoaXNbbWV0aG9kXS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXHRcdH07XG5cdH1cblx0ZnVuY3Rpb24gaXNWYWxpZERhdGUoZCkge1xuXHRcdHJldHVybiBkICYmICFpc05hTihkLmdldFRpbWUoKSk7XG5cdH1cblxuXHR2YXIgRGF0ZUFycmF5ID0gKGZ1bmN0aW9uKCl7XG5cdFx0dmFyIGV4dHJhcyA9IHtcblx0XHRcdGdldDogZnVuY3Rpb24oaSl7XG5cdFx0XHRcdHJldHVybiB0aGlzLnNsaWNlKGkpWzBdO1xuXHRcdFx0fSxcblx0XHRcdGNvbnRhaW5zOiBmdW5jdGlvbihkKXtcblx0XHRcdFx0Ly8gQXJyYXkuaW5kZXhPZiBpcyBub3QgY3Jvc3MtYnJvd3Nlcjtcblx0XHRcdFx0Ly8gJC5pbkFycmF5IGRvZXNuJ3Qgd29yayB3aXRoIERhdGVzXG5cdFx0XHRcdHZhciB2YWwgPSBkICYmIGQudmFsdWVPZigpO1xuXHRcdFx0XHRmb3IgKHZhciBpPTAsIGw9dGhpcy5sZW5ndGg7IGkgPCBsOyBpKyspXG4gICAgICAgICAgLy8gVXNlIGRhdGUgYXJpdGhtZXRpYyB0byBhbGxvdyBkYXRlcyB3aXRoIGRpZmZlcmVudCB0aW1lcyB0byBtYXRjaFxuICAgICAgICAgIGlmICgwIDw9IHRoaXNbaV0udmFsdWVPZigpIC0gdmFsICYmIHRoaXNbaV0udmFsdWVPZigpIC0gdmFsIDwgMTAwMCo2MCo2MCoyNClcblx0XHRcdFx0XHRcdHJldHVybiBpO1xuXHRcdFx0XHRyZXR1cm4gLTE7XG5cdFx0XHR9LFxuXHRcdFx0cmVtb3ZlOiBmdW5jdGlvbihpKXtcblx0XHRcdFx0dGhpcy5zcGxpY2UoaSwxKTtcblx0XHRcdH0sXG5cdFx0XHRyZXBsYWNlOiBmdW5jdGlvbihuZXdfYXJyYXkpe1xuXHRcdFx0XHRpZiAoIW5ld19hcnJheSlcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdGlmICghJC5pc0FycmF5KG5ld19hcnJheSkpXG5cdFx0XHRcdFx0bmV3X2FycmF5ID0gW25ld19hcnJheV07XG5cdFx0XHRcdHRoaXMuY2xlYXIoKTtcblx0XHRcdFx0dGhpcy5wdXNoLmFwcGx5KHRoaXMsIG5ld19hcnJheSk7XG5cdFx0XHR9LFxuXHRcdFx0Y2xlYXI6IGZ1bmN0aW9uKCl7XG5cdFx0XHRcdHRoaXMubGVuZ3RoID0gMDtcblx0XHRcdH0sXG5cdFx0XHRjb3B5OiBmdW5jdGlvbigpe1xuXHRcdFx0XHR2YXIgYSA9IG5ldyBEYXRlQXJyYXkoKTtcblx0XHRcdFx0YS5yZXBsYWNlKHRoaXMpO1xuXHRcdFx0XHRyZXR1cm4gYTtcblx0XHRcdH1cblx0XHR9O1xuXG5cdFx0cmV0dXJuIGZ1bmN0aW9uKCl7XG5cdFx0XHR2YXIgYSA9IFtdO1xuXHRcdFx0YS5wdXNoLmFwcGx5KGEsIGFyZ3VtZW50cyk7XG5cdFx0XHQkLmV4dGVuZChhLCBleHRyYXMpO1xuXHRcdFx0cmV0dXJuIGE7XG5cdFx0fTtcblx0fSkoKTtcblxuXG5cdC8vIFBpY2tlciBvYmplY3RcblxuXHR2YXIgRGF0ZXBpY2tlciA9IGZ1bmN0aW9uKGVsZW1lbnQsIG9wdGlvbnMpe1xuXHRcdCQuZGF0YShlbGVtZW50LCAnZGF0ZXBpY2tlcicsIHRoaXMpO1xuXHRcdHRoaXMuX3Byb2Nlc3Nfb3B0aW9ucyhvcHRpb25zKTtcblxuXHRcdHRoaXMuZGF0ZXMgPSBuZXcgRGF0ZUFycmF5KCk7XG5cdFx0dGhpcy52aWV3RGF0ZSA9IHRoaXMuby5kZWZhdWx0Vmlld0RhdGU7XG5cdFx0dGhpcy5mb2N1c0RhdGUgPSBudWxsO1xuXG5cdFx0dGhpcy5lbGVtZW50ID0gJChlbGVtZW50KTtcblx0XHR0aGlzLmlzSW5wdXQgPSB0aGlzLmVsZW1lbnQuaXMoJ2lucHV0Jyk7XG5cdFx0dGhpcy5pbnB1dEZpZWxkID0gdGhpcy5pc0lucHV0ID8gdGhpcy5lbGVtZW50IDogdGhpcy5lbGVtZW50LmZpbmQoJ2lucHV0Jyk7XG5cdFx0dGhpcy5jb21wb25lbnQgPSB0aGlzLmVsZW1lbnQuaGFzQ2xhc3MoJ2RhdGUnKSA/IHRoaXMuZWxlbWVudC5maW5kKCcuYWRkLW9uLCAuaW5wdXQtZ3JvdXAtYWRkb24sIC5idG4nKSA6IGZhbHNlO1xuXHRcdGlmICh0aGlzLmNvbXBvbmVudCAmJiB0aGlzLmNvbXBvbmVudC5sZW5ndGggPT09IDApXG5cdFx0XHR0aGlzLmNvbXBvbmVudCA9IGZhbHNlO1xuXHRcdHRoaXMuaXNJbmxpbmUgPSAhdGhpcy5jb21wb25lbnQgJiYgdGhpcy5lbGVtZW50LmlzKCdkaXYnKTtcblxuXHRcdHRoaXMucGlja2VyID0gJChEUEdsb2JhbC50ZW1wbGF0ZSk7XG5cblx0XHQvLyBDaGVja2luZyB0ZW1wbGF0ZXMgYW5kIGluc2VydGluZ1xuXHRcdGlmICh0aGlzLl9jaGVja190ZW1wbGF0ZSh0aGlzLm8udGVtcGxhdGVzLmxlZnRBcnJvdykpIHtcblx0XHRcdHRoaXMucGlja2VyLmZpbmQoJy5wcmV2JykuaHRtbCh0aGlzLm8udGVtcGxhdGVzLmxlZnRBcnJvdyk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMuX2NoZWNrX3RlbXBsYXRlKHRoaXMuby50ZW1wbGF0ZXMucmlnaHRBcnJvdykpIHtcblx0XHRcdHRoaXMucGlja2VyLmZpbmQoJy5uZXh0JykuaHRtbCh0aGlzLm8udGVtcGxhdGVzLnJpZ2h0QXJyb3cpO1xuXHRcdH1cblxuXHRcdHRoaXMuX2J1aWxkRXZlbnRzKCk7XG5cdFx0dGhpcy5fYXR0YWNoRXZlbnRzKCk7XG5cblx0XHRpZiAodGhpcy5pc0lubGluZSl7XG5cdFx0XHR0aGlzLnBpY2tlci5hZGRDbGFzcygnZGF0ZXBpY2tlci1pbmxpbmUnKS5hcHBlbmRUbyh0aGlzLmVsZW1lbnQpO1xuXHRcdH1cblx0XHRlbHNlIHtcblx0XHRcdHRoaXMucGlja2VyLmFkZENsYXNzKCdkYXRlcGlja2VyLWRyb3Bkb3duIGRyb3Bkb3duLW1lbnUnKTtcblx0XHR9XG5cblx0XHRpZiAodGhpcy5vLnJ0bCl7XG5cdFx0XHR0aGlzLnBpY2tlci5hZGRDbGFzcygnZGF0ZXBpY2tlci1ydGwnKTtcblx0XHR9XG5cblx0XHRpZiAodGhpcy5vLmNhbGVuZGFyV2Vla3MpIHtcblx0XHRcdHRoaXMucGlja2VyLmZpbmQoJy5kYXRlcGlja2VyLWRheXMgLmRhdGVwaWNrZXItc3dpdGNoLCB0aGVhZCAuZGF0ZXBpY2tlci10aXRsZSwgdGZvb3QgLnRvZGF5LCB0Zm9vdCAuY2xlYXInKVxuXHRcdFx0XHQuYXR0cignY29sc3BhbicsIGZ1bmN0aW9uKGksIHZhbCl7XG5cdFx0XHRcdFx0cmV0dXJuIE51bWJlcih2YWwpICsgMTtcblx0XHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0dGhpcy5fcHJvY2Vzc19vcHRpb25zKHtcblx0XHRcdHN0YXJ0RGF0ZTogdGhpcy5fby5zdGFydERhdGUsXG5cdFx0XHRlbmREYXRlOiB0aGlzLl9vLmVuZERhdGUsXG5cdFx0XHRkYXlzT2ZXZWVrRGlzYWJsZWQ6IHRoaXMuby5kYXlzT2ZXZWVrRGlzYWJsZWQsXG5cdFx0XHRkYXlzT2ZXZWVrSGlnaGxpZ2h0ZWQ6IHRoaXMuby5kYXlzT2ZXZWVrSGlnaGxpZ2h0ZWQsXG5cdFx0XHRkYXRlc0Rpc2FibGVkOiB0aGlzLm8uZGF0ZXNEaXNhYmxlZFxuXHRcdH0pO1xuXG5cdFx0dGhpcy5fYWxsb3dfdXBkYXRlID0gZmFsc2U7XG5cdFx0dGhpcy5zZXRWaWV3TW9kZSh0aGlzLm8uc3RhcnRWaWV3KTtcblx0XHR0aGlzLl9hbGxvd191cGRhdGUgPSB0cnVlO1xuXG5cdFx0dGhpcy5maWxsRG93KCk7XG5cdFx0dGhpcy5maWxsTW9udGhzKCk7XG5cblx0XHR0aGlzLnVwZGF0ZSgpO1xuXG5cdFx0aWYgKHRoaXMuaXNJbmxpbmUpe1xuXHRcdFx0dGhpcy5zaG93KCk7XG5cdFx0fVxuXHR9O1xuXG5cdERhdGVwaWNrZXIucHJvdG90eXBlID0ge1xuXHRcdGNvbnN0cnVjdG9yOiBEYXRlcGlja2VyLFxuXG5cdFx0X3Jlc29sdmVWaWV3TmFtZTogZnVuY3Rpb24odmlldyl7XG5cdFx0XHQkLmVhY2goRFBHbG9iYWwudmlld01vZGVzLCBmdW5jdGlvbihpLCB2aWV3TW9kZSl7XG5cdFx0XHRcdGlmICh2aWV3ID09PSBpIHx8ICQuaW5BcnJheSh2aWV3LCB2aWV3TW9kZS5uYW1lcykgIT09IC0xKXtcblx0XHRcdFx0XHR2aWV3ID0gaTtcblx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXG5cdFx0XHRyZXR1cm4gdmlldztcblx0XHR9LFxuXG5cdFx0X3Jlc29sdmVEYXlzT2ZXZWVrOiBmdW5jdGlvbihkYXlzT2ZXZWVrKXtcblx0XHRcdGlmICghJC5pc0FycmF5KGRheXNPZldlZWspKVxuXHRcdFx0XHRkYXlzT2ZXZWVrID0gZGF5c09mV2Vlay5zcGxpdCgvWyxcXHNdKi8pO1xuXHRcdFx0cmV0dXJuICQubWFwKGRheXNPZldlZWssIE51bWJlcik7XG5cdFx0fSxcblxuXHRcdF9jaGVja190ZW1wbGF0ZTogZnVuY3Rpb24odG1wKXtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdC8vIElmIGVtcHR5XG5cdFx0XHRcdGlmICh0bXAgPT09IHVuZGVmaW5lZCB8fCB0bXAgPT09IFwiXCIpIHtcblx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdH1cblx0XHRcdFx0Ly8gSWYgbm8gaHRtbCwgZXZlcnl0aGluZyBva1xuXHRcdFx0XHRpZiAoKHRtcC5tYXRjaCgvWzw+XS9nKSB8fCBbXSkubGVuZ3RoIDw9IDApIHtcblx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdFx0fVxuXHRcdFx0XHQvLyBDaGVja2luZyBpZiBodG1sIGlzIGZpbmVcblx0XHRcdFx0dmFyIGpEb20gPSAkKHRtcCk7XG5cdFx0XHRcdHJldHVybiBqRG9tLmxlbmd0aCA+IDA7XG5cdFx0XHR9XG5cdFx0XHRjYXRjaCAoZXgpIHtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXHRcdH0sXG5cblx0XHRfcHJvY2Vzc19vcHRpb25zOiBmdW5jdGlvbihvcHRzKXtcblx0XHRcdC8vIFN0b3JlIHJhdyBvcHRpb25zIGZvciByZWZlcmVuY2Vcblx0XHRcdHRoaXMuX28gPSAkLmV4dGVuZCh7fSwgdGhpcy5fbywgb3B0cyk7XG5cdFx0XHQvLyBQcm9jZXNzZWQgb3B0aW9uc1xuXHRcdFx0dmFyIG8gPSB0aGlzLm8gPSAkLmV4dGVuZCh7fSwgdGhpcy5fbyk7XG5cblx0XHRcdC8vIENoZWNrIGlmIFwiZGUtREVcIiBzdHlsZSBkYXRlIGlzIGF2YWlsYWJsZSwgaWYgbm90IGxhbmd1YWdlIHNob3VsZFxuXHRcdFx0Ly8gZmFsbGJhY2sgdG8gMiBsZXR0ZXIgY29kZSBlZyBcImRlXCJcblx0XHRcdHZhciBsYW5nID0gby5sYW5ndWFnZTtcblx0XHRcdGlmICghZGF0ZXNbbGFuZ10pe1xuXHRcdFx0XHRsYW5nID0gbGFuZy5zcGxpdCgnLScpWzBdO1xuXHRcdFx0XHRpZiAoIWRhdGVzW2xhbmddKVxuXHRcdFx0XHRcdGxhbmcgPSBkZWZhdWx0cy5sYW5ndWFnZTtcblx0XHRcdH1cblx0XHRcdG8ubGFuZ3VhZ2UgPSBsYW5nO1xuXG5cdFx0XHQvLyBSZXRyaWV2ZSB2aWV3IGluZGV4IGZyb20gYW55IGFsaWFzZXNcblx0XHRcdG8uc3RhcnRWaWV3ID0gdGhpcy5fcmVzb2x2ZVZpZXdOYW1lKG8uc3RhcnRWaWV3KTtcblx0XHRcdG8ubWluVmlld01vZGUgPSB0aGlzLl9yZXNvbHZlVmlld05hbWUoby5taW5WaWV3TW9kZSk7XG5cdFx0XHRvLm1heFZpZXdNb2RlID0gdGhpcy5fcmVzb2x2ZVZpZXdOYW1lKG8ubWF4Vmlld01vZGUpO1xuXG5cdFx0XHQvLyBDaGVjayB2aWV3IGlzIGJldHdlZW4gbWluIGFuZCBtYXhcblx0XHRcdG8uc3RhcnRWaWV3ID0gTWF0aC5tYXgodGhpcy5vLm1pblZpZXdNb2RlLCBNYXRoLm1pbih0aGlzLm8ubWF4Vmlld01vZGUsIG8uc3RhcnRWaWV3KSk7XG5cblx0XHRcdC8vIHRydWUsIGZhbHNlLCBvciBOdW1iZXIgPiAwXG5cdFx0XHRpZiAoby5tdWx0aWRhdGUgIT09IHRydWUpe1xuXHRcdFx0XHRvLm11bHRpZGF0ZSA9IE51bWJlcihvLm11bHRpZGF0ZSkgfHwgZmFsc2U7XG5cdFx0XHRcdGlmIChvLm11bHRpZGF0ZSAhPT0gZmFsc2UpXG5cdFx0XHRcdFx0by5tdWx0aWRhdGUgPSBNYXRoLm1heCgwLCBvLm11bHRpZGF0ZSk7XG5cdFx0XHR9XG5cdFx0XHRvLm11bHRpZGF0ZVNlcGFyYXRvciA9IFN0cmluZyhvLm11bHRpZGF0ZVNlcGFyYXRvcik7XG5cblx0XHRcdG8ud2Vla1N0YXJ0ICU9IDc7XG5cdFx0XHRvLndlZWtFbmQgPSAoby53ZWVrU3RhcnQgKyA2KSAlIDc7XG5cblx0XHRcdHZhciBmb3JtYXQgPSBEUEdsb2JhbC5wYXJzZUZvcm1hdChvLmZvcm1hdCk7XG5cdFx0XHRpZiAoby5zdGFydERhdGUgIT09IC1JbmZpbml0eSl7XG5cdFx0XHRcdGlmICghIW8uc3RhcnREYXRlKXtcblx0XHRcdFx0XHRpZiAoby5zdGFydERhdGUgaW5zdGFuY2VvZiBEYXRlKVxuXHRcdFx0XHRcdFx0by5zdGFydERhdGUgPSB0aGlzLl9sb2NhbF90b191dGModGhpcy5femVyb190aW1lKG8uc3RhcnREYXRlKSk7XG5cdFx0XHRcdFx0ZWxzZVxuXHRcdFx0XHRcdFx0by5zdGFydERhdGUgPSBEUEdsb2JhbC5wYXJzZURhdGUoby5zdGFydERhdGUsIGZvcm1hdCwgby5sYW5ndWFnZSwgby5hc3N1bWVOZWFyYnlZZWFyKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRlbHNlIHtcblx0XHRcdFx0XHRvLnN0YXJ0RGF0ZSA9IC1JbmZpbml0eTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0aWYgKG8uZW5kRGF0ZSAhPT0gSW5maW5pdHkpe1xuXHRcdFx0XHRpZiAoISFvLmVuZERhdGUpe1xuXHRcdFx0XHRcdGlmIChvLmVuZERhdGUgaW5zdGFuY2VvZiBEYXRlKVxuXHRcdFx0XHRcdFx0by5lbmREYXRlID0gdGhpcy5fbG9jYWxfdG9fdXRjKHRoaXMuX3plcm9fdGltZShvLmVuZERhdGUpKTtcblx0XHRcdFx0XHRlbHNlXG5cdFx0XHRcdFx0XHRvLmVuZERhdGUgPSBEUEdsb2JhbC5wYXJzZURhdGUoby5lbmREYXRlLCBmb3JtYXQsIG8ubGFuZ3VhZ2UsIG8uYXNzdW1lTmVhcmJ5WWVhcik7XG5cdFx0XHRcdH1cblx0XHRcdFx0ZWxzZSB7XG5cdFx0XHRcdFx0by5lbmREYXRlID0gSW5maW5pdHk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0by5kYXlzT2ZXZWVrRGlzYWJsZWQgPSB0aGlzLl9yZXNvbHZlRGF5c09mV2VlayhvLmRheXNPZldlZWtEaXNhYmxlZHx8W10pO1xuXHRcdFx0by5kYXlzT2ZXZWVrSGlnaGxpZ2h0ZWQgPSB0aGlzLl9yZXNvbHZlRGF5c09mV2VlayhvLmRheXNPZldlZWtIaWdobGlnaHRlZHx8W10pO1xuXG5cdFx0XHRvLmRhdGVzRGlzYWJsZWQgPSBvLmRhdGVzRGlzYWJsZWR8fFtdO1xuXHRcdFx0aWYgKCEkLmlzQXJyYXkoby5kYXRlc0Rpc2FibGVkKSkge1xuXHRcdFx0XHRvLmRhdGVzRGlzYWJsZWQgPSBvLmRhdGVzRGlzYWJsZWQuc3BsaXQoJywnKTtcblx0XHRcdH1cblx0XHRcdG8uZGF0ZXNEaXNhYmxlZCA9ICQubWFwKG8uZGF0ZXNEaXNhYmxlZCwgZnVuY3Rpb24oZCl7XG5cdFx0XHRcdHJldHVybiBEUEdsb2JhbC5wYXJzZURhdGUoZCwgZm9ybWF0LCBvLmxhbmd1YWdlLCBvLmFzc3VtZU5lYXJieVllYXIpO1xuXHRcdFx0fSk7XG5cblx0XHRcdHZhciBwbGMgPSBTdHJpbmcoby5vcmllbnRhdGlvbikudG9Mb3dlckNhc2UoKS5zcGxpdCgvXFxzKy9nKSxcblx0XHRcdFx0X3BsYyA9IG8ub3JpZW50YXRpb24udG9Mb3dlckNhc2UoKTtcblx0XHRcdHBsYyA9ICQuZ3JlcChwbGMsIGZ1bmN0aW9uKHdvcmQpe1xuXHRcdFx0XHRyZXR1cm4gL15hdXRvfGxlZnR8cmlnaHR8dG9wfGJvdHRvbSQvLnRlc3Qod29yZCk7XG5cdFx0XHR9KTtcblx0XHRcdG8ub3JpZW50YXRpb24gPSB7eDogJ2F1dG8nLCB5OiAnYXV0byd9O1xuXHRcdFx0aWYgKCFfcGxjIHx8IF9wbGMgPT09ICdhdXRvJylcblx0XHRcdFx0OyAvLyBubyBhY3Rpb25cblx0XHRcdGVsc2UgaWYgKHBsYy5sZW5ndGggPT09IDEpe1xuXHRcdFx0XHRzd2l0Y2ggKHBsY1swXSl7XG5cdFx0XHRcdFx0Y2FzZSAndG9wJzpcblx0XHRcdFx0XHRjYXNlICdib3R0b20nOlxuXHRcdFx0XHRcdFx0by5vcmllbnRhdGlvbi55ID0gcGxjWzBdO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0Y2FzZSAnbGVmdCc6XG5cdFx0XHRcdFx0Y2FzZSAncmlnaHQnOlxuXHRcdFx0XHRcdFx0by5vcmllbnRhdGlvbi54ID0gcGxjWzBdO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGVsc2Uge1xuXHRcdFx0XHRfcGxjID0gJC5ncmVwKHBsYywgZnVuY3Rpb24od29yZCl7XG5cdFx0XHRcdFx0cmV0dXJuIC9ebGVmdHxyaWdodCQvLnRlc3Qod29yZCk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0XHRvLm9yaWVudGF0aW9uLnggPSBfcGxjWzBdIHx8ICdhdXRvJztcblxuXHRcdFx0XHRfcGxjID0gJC5ncmVwKHBsYywgZnVuY3Rpb24od29yZCl7XG5cdFx0XHRcdFx0cmV0dXJuIC9edG9wfGJvdHRvbSQvLnRlc3Qod29yZCk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0XHRvLm9yaWVudGF0aW9uLnkgPSBfcGxjWzBdIHx8ICdhdXRvJztcblx0XHRcdH1cblx0XHRcdGlmIChvLmRlZmF1bHRWaWV3RGF0ZSBpbnN0YW5jZW9mIERhdGUgfHwgdHlwZW9mIG8uZGVmYXVsdFZpZXdEYXRlID09PSAnc3RyaW5nJykge1xuXHRcdFx0XHRvLmRlZmF1bHRWaWV3RGF0ZSA9IERQR2xvYmFsLnBhcnNlRGF0ZShvLmRlZmF1bHRWaWV3RGF0ZSwgZm9ybWF0LCBvLmxhbmd1YWdlLCBvLmFzc3VtZU5lYXJieVllYXIpO1xuXHRcdFx0fSBlbHNlIGlmIChvLmRlZmF1bHRWaWV3RGF0ZSkge1xuXHRcdFx0XHR2YXIgeWVhciA9IG8uZGVmYXVsdFZpZXdEYXRlLnllYXIgfHwgbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpO1xuXHRcdFx0XHR2YXIgbW9udGggPSBvLmRlZmF1bHRWaWV3RGF0ZS5tb250aCB8fCAwO1xuXHRcdFx0XHR2YXIgZGF5ID0gby5kZWZhdWx0Vmlld0RhdGUuZGF5IHx8IDE7XG5cdFx0XHRcdG8uZGVmYXVsdFZpZXdEYXRlID0gVVRDRGF0ZSh5ZWFyLCBtb250aCwgZGF5KTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdG8uZGVmYXVsdFZpZXdEYXRlID0gVVRDVG9kYXkoKTtcblx0XHRcdH1cblx0XHR9LFxuXHRcdF9ldmVudHM6IFtdLFxuXHRcdF9zZWNvbmRhcnlFdmVudHM6IFtdLFxuXHRcdF9hcHBseUV2ZW50czogZnVuY3Rpb24oZXZzKXtcblx0XHRcdGZvciAodmFyIGk9MCwgZWwsIGNoLCBldjsgaSA8IGV2cy5sZW5ndGg7IGkrKyl7XG5cdFx0XHRcdGVsID0gZXZzW2ldWzBdO1xuXHRcdFx0XHRpZiAoZXZzW2ldLmxlbmd0aCA9PT0gMil7XG5cdFx0XHRcdFx0Y2ggPSB1bmRlZmluZWQ7XG5cdFx0XHRcdFx0ZXYgPSBldnNbaV1bMV07XG5cdFx0XHRcdH0gZWxzZSBpZiAoZXZzW2ldLmxlbmd0aCA9PT0gMyl7XG5cdFx0XHRcdFx0Y2ggPSBldnNbaV1bMV07XG5cdFx0XHRcdFx0ZXYgPSBldnNbaV1bMl07XG5cdFx0XHRcdH1cblx0XHRcdFx0ZWwub24oZXYsIGNoKTtcblx0XHRcdH1cblx0XHR9LFxuXHRcdF91bmFwcGx5RXZlbnRzOiBmdW5jdGlvbihldnMpe1xuXHRcdFx0Zm9yICh2YXIgaT0wLCBlbCwgZXYsIGNoOyBpIDwgZXZzLmxlbmd0aDsgaSsrKXtcblx0XHRcdFx0ZWwgPSBldnNbaV1bMF07XG5cdFx0XHRcdGlmIChldnNbaV0ubGVuZ3RoID09PSAyKXtcblx0XHRcdFx0XHRjaCA9IHVuZGVmaW5lZDtcblx0XHRcdFx0XHRldiA9IGV2c1tpXVsxXTtcblx0XHRcdFx0fSBlbHNlIGlmIChldnNbaV0ubGVuZ3RoID09PSAzKXtcblx0XHRcdFx0XHRjaCA9IGV2c1tpXVsxXTtcblx0XHRcdFx0XHRldiA9IGV2c1tpXVsyXTtcblx0XHRcdFx0fVxuXHRcdFx0XHRlbC5vZmYoZXYsIGNoKTtcblx0XHRcdH1cblx0XHR9LFxuXHRcdF9idWlsZEV2ZW50czogZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIHZhciBldmVudHMgPSB7XG4gICAgICAgICAgICAgICAga2V5dXA6ICQucHJveHkoZnVuY3Rpb24oZSl7XG4gICAgICAgICAgICAgICAgICAgIGlmICgkLmluQXJyYXkoZS5rZXlDb2RlLCBbMjcsIDM3LCAzOSwgMzgsIDQwLCAzMiwgMTMsIDldKSA9PT0gLTEpXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZSgpO1xuICAgICAgICAgICAgICAgIH0sIHRoaXMpLFxuICAgICAgICAgICAgICAgIGtleWRvd246ICQucHJveHkodGhpcy5rZXlkb3duLCB0aGlzKSxcbiAgICAgICAgICAgICAgICBwYXN0ZTogJC5wcm94eSh0aGlzLnBhc3RlLCB0aGlzKVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgaWYgKHRoaXMuby5zaG93T25Gb2N1cyA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIGV2ZW50cy5mb2N1cyA9ICQucHJveHkodGhpcy5zaG93LCB0aGlzKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRoaXMuaXNJbnB1dCkgeyAvLyBzaW5nbGUgaW5wdXRcbiAgICAgICAgICAgICAgICB0aGlzLl9ldmVudHMgPSBbXG4gICAgICAgICAgICAgICAgICAgIFt0aGlzLmVsZW1lbnQsIGV2ZW50c11cbiAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gY29tcG9uZW50OiBpbnB1dCArIGJ1dHRvblxuICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5jb21wb25lbnQgJiYgdGhpcy5pbnB1dEZpZWxkLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHRoaXMuX2V2ZW50cyA9IFtcbiAgICAgICAgICAgICAgICAgICAgLy8gRm9yIGNvbXBvbmVudHMgdGhhdCBhcmUgbm90IHJlYWRvbmx5LCBhbGxvdyBrZXlib2FyZCBuYXZcbiAgICAgICAgICAgICAgICAgICAgW3RoaXMuaW5wdXRGaWVsZCwgZXZlbnRzXSxcbiAgICAgICAgICAgICAgICAgICAgW3RoaXMuY29tcG9uZW50LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGljazogJC5wcm94eSh0aGlzLnNob3csIHRoaXMpXG4gICAgICAgICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgIH1cblx0XHRcdGVsc2Uge1xuXHRcdFx0XHR0aGlzLl9ldmVudHMgPSBbXG5cdFx0XHRcdFx0W3RoaXMuZWxlbWVudCwge1xuXHRcdFx0XHRcdFx0Y2xpY2s6ICQucHJveHkodGhpcy5zaG93LCB0aGlzKSxcblx0XHRcdFx0XHRcdGtleWRvd246ICQucHJveHkodGhpcy5rZXlkb3duLCB0aGlzKVxuXHRcdFx0XHRcdH1dXG5cdFx0XHRcdF07XG5cdFx0XHR9XG5cdFx0XHR0aGlzLl9ldmVudHMucHVzaChcblx0XHRcdFx0Ly8gQ29tcG9uZW50OiBsaXN0ZW4gZm9yIGJsdXIgb24gZWxlbWVudCBkZXNjZW5kYW50c1xuXHRcdFx0XHRbdGhpcy5lbGVtZW50LCAnKicsIHtcblx0XHRcdFx0XHRibHVyOiAkLnByb3h5KGZ1bmN0aW9uKGUpe1xuXHRcdFx0XHRcdFx0dGhpcy5fZm9jdXNlZF9mcm9tID0gZS50YXJnZXQ7XG5cdFx0XHRcdFx0fSwgdGhpcylcblx0XHRcdFx0fV0sXG5cdFx0XHRcdC8vIElucHV0OiBsaXN0ZW4gZm9yIGJsdXIgb24gZWxlbWVudFxuXHRcdFx0XHRbdGhpcy5lbGVtZW50LCB7XG5cdFx0XHRcdFx0Ymx1cjogJC5wcm94eShmdW5jdGlvbihlKXtcblx0XHRcdFx0XHRcdHRoaXMuX2ZvY3VzZWRfZnJvbSA9IGUudGFyZ2V0O1xuXHRcdFx0XHRcdH0sIHRoaXMpXG5cdFx0XHRcdH1dXG5cdFx0XHQpO1xuXG5cdFx0XHRpZiAodGhpcy5vLmltbWVkaWF0ZVVwZGF0ZXMpIHtcblx0XHRcdFx0Ly8gVHJpZ2dlciBpbnB1dCB1cGRhdGVzIGltbWVkaWF0ZWx5IG9uIGNoYW5nZWQgeWVhci9tb250aFxuXHRcdFx0XHR0aGlzLl9ldmVudHMucHVzaChbdGhpcy5lbGVtZW50LCB7XG5cdFx0XHRcdFx0J2NoYW5nZVllYXIgY2hhbmdlTW9udGgnOiAkLnByb3h5KGZ1bmN0aW9uKGUpe1xuXHRcdFx0XHRcdFx0dGhpcy51cGRhdGUoZS5kYXRlKTtcblx0XHRcdFx0XHR9LCB0aGlzKVxuXHRcdFx0XHR9XSk7XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMuX3NlY29uZGFyeUV2ZW50cyA9IFtcblx0XHRcdFx0W3RoaXMucGlja2VyLCB7XG5cdFx0XHRcdFx0Y2xpY2s6ICQucHJveHkodGhpcy5jbGljaywgdGhpcylcblx0XHRcdFx0fV0sXG5cdFx0XHRcdFt0aGlzLnBpY2tlciwgJy5wcmV2LCAubmV4dCcsIHtcblx0XHRcdFx0XHRjbGljazogJC5wcm94eSh0aGlzLm5hdkFycm93c0NsaWNrLCB0aGlzKVxuXHRcdFx0XHR9XSxcblx0XHRcdFx0W3RoaXMucGlja2VyLCAnLmRheTpub3QoLmRpc2FibGVkKScsIHtcblx0XHRcdFx0XHRjbGljazogJC5wcm94eSh0aGlzLmRheUNlbGxDbGljaywgdGhpcylcblx0XHRcdFx0fV0sXG5cdFx0XHRcdFskKHdpbmRvdyksIHtcblx0XHRcdFx0XHRyZXNpemU6ICQucHJveHkodGhpcy5wbGFjZSwgdGhpcylcblx0XHRcdFx0fV0sXG5cdFx0XHRcdFskKGRvY3VtZW50KSwge1xuXHRcdFx0XHRcdCdtb3VzZWRvd24gdG91Y2hzdGFydCc6ICQucHJveHkoZnVuY3Rpb24oZSl7XG5cdFx0XHRcdFx0XHQvLyBDbGlja2VkIG91dHNpZGUgdGhlIGRhdGVwaWNrZXIsIGhpZGUgaXRcblx0XHRcdFx0XHRcdGlmICghKFxuXHRcdFx0XHRcdFx0XHR0aGlzLmVsZW1lbnQuaXMoZS50YXJnZXQpIHx8XG5cdFx0XHRcdFx0XHRcdHRoaXMuZWxlbWVudC5maW5kKGUudGFyZ2V0KS5sZW5ndGggfHxcblx0XHRcdFx0XHRcdFx0dGhpcy5waWNrZXIuaXMoZS50YXJnZXQpIHx8XG5cdFx0XHRcdFx0XHRcdHRoaXMucGlja2VyLmZpbmQoZS50YXJnZXQpLmxlbmd0aCB8fFxuXHRcdFx0XHRcdFx0XHR0aGlzLmlzSW5saW5lXG5cdFx0XHRcdFx0XHQpKXtcblx0XHRcdFx0XHRcdFx0dGhpcy5oaWRlKCk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSwgdGhpcylcblx0XHRcdFx0fV1cblx0XHRcdF07XG5cdFx0fSxcblx0XHRfYXR0YWNoRXZlbnRzOiBmdW5jdGlvbigpe1xuXHRcdFx0dGhpcy5fZGV0YWNoRXZlbnRzKCk7XG5cdFx0XHR0aGlzLl9hcHBseUV2ZW50cyh0aGlzLl9ldmVudHMpO1xuXHRcdH0sXG5cdFx0X2RldGFjaEV2ZW50czogZnVuY3Rpb24oKXtcblx0XHRcdHRoaXMuX3VuYXBwbHlFdmVudHModGhpcy5fZXZlbnRzKTtcblx0XHR9LFxuXHRcdF9hdHRhY2hTZWNvbmRhcnlFdmVudHM6IGZ1bmN0aW9uKCl7XG5cdFx0XHR0aGlzLl9kZXRhY2hTZWNvbmRhcnlFdmVudHMoKTtcblx0XHRcdHRoaXMuX2FwcGx5RXZlbnRzKHRoaXMuX3NlY29uZGFyeUV2ZW50cyk7XG5cdFx0fSxcblx0XHRfZGV0YWNoU2Vjb25kYXJ5RXZlbnRzOiBmdW5jdGlvbigpe1xuXHRcdFx0dGhpcy5fdW5hcHBseUV2ZW50cyh0aGlzLl9zZWNvbmRhcnlFdmVudHMpO1xuXHRcdH0sXG5cdFx0X3RyaWdnZXI6IGZ1bmN0aW9uKGV2ZW50LCBhbHRkYXRlKXtcblx0XHRcdHZhciBkYXRlID0gYWx0ZGF0ZSB8fCB0aGlzLmRhdGVzLmdldCgtMSksXG5cdFx0XHRcdGxvY2FsX2RhdGUgPSB0aGlzLl91dGNfdG9fbG9jYWwoZGF0ZSk7XG5cblx0XHRcdHRoaXMuZWxlbWVudC50cmlnZ2VyKHtcblx0XHRcdFx0dHlwZTogZXZlbnQsXG5cdFx0XHRcdGRhdGU6IGxvY2FsX2RhdGUsXG5cdFx0XHRcdHZpZXdNb2RlOiB0aGlzLnZpZXdNb2RlLFxuXHRcdFx0XHRkYXRlczogJC5tYXAodGhpcy5kYXRlcywgdGhpcy5fdXRjX3RvX2xvY2FsKSxcblx0XHRcdFx0Zm9ybWF0OiAkLnByb3h5KGZ1bmN0aW9uKGl4LCBmb3JtYXQpe1xuXHRcdFx0XHRcdGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAwKXtcblx0XHRcdFx0XHRcdGl4ID0gdGhpcy5kYXRlcy5sZW5ndGggLSAxO1xuXHRcdFx0XHRcdFx0Zm9ybWF0ID0gdGhpcy5vLmZvcm1hdDtcblx0XHRcdFx0XHR9IGVsc2UgaWYgKHR5cGVvZiBpeCA9PT0gJ3N0cmluZycpe1xuXHRcdFx0XHRcdFx0Zm9ybWF0ID0gaXg7XG5cdFx0XHRcdFx0XHRpeCA9IHRoaXMuZGF0ZXMubGVuZ3RoIC0gMTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Zm9ybWF0ID0gZm9ybWF0IHx8IHRoaXMuby5mb3JtYXQ7XG5cdFx0XHRcdFx0dmFyIGRhdGUgPSB0aGlzLmRhdGVzLmdldChpeCk7XG5cdFx0XHRcdFx0cmV0dXJuIERQR2xvYmFsLmZvcm1hdERhdGUoZGF0ZSwgZm9ybWF0LCB0aGlzLm8ubGFuZ3VhZ2UpO1xuXHRcdFx0XHR9LCB0aGlzKVxuXHRcdFx0fSk7XG5cdFx0fSxcblxuXHRcdHNob3c6IGZ1bmN0aW9uKCl7XG5cdFx0XHRpZiAodGhpcy5pbnB1dEZpZWxkLnByb3AoJ2Rpc2FibGVkJykgfHwgKHRoaXMuaW5wdXRGaWVsZC5wcm9wKCdyZWFkb25seScpICYmIHRoaXMuby5lbmFibGVPblJlYWRvbmx5ID09PSBmYWxzZSkpXG5cdFx0XHRcdHJldHVybjtcblx0XHRcdGlmICghdGhpcy5pc0lubGluZSlcblx0XHRcdFx0dGhpcy5waWNrZXIuYXBwZW5kVG8odGhpcy5vLmNvbnRhaW5lcik7XG5cdFx0XHR0aGlzLnBsYWNlKCk7XG5cdFx0XHR0aGlzLnBpY2tlci5zaG93KCk7XG5cdFx0XHR0aGlzLl9hdHRhY2hTZWNvbmRhcnlFdmVudHMoKTtcblx0XHRcdHRoaXMuX3RyaWdnZXIoJ3Nob3cnKTtcblx0XHRcdGlmICgod2luZG93Lm5hdmlnYXRvci5tc01heFRvdWNoUG9pbnRzIHx8ICdvbnRvdWNoc3RhcnQnIGluIGRvY3VtZW50KSAmJiB0aGlzLm8uZGlzYWJsZVRvdWNoS2V5Ym9hcmQpIHtcblx0XHRcdFx0JCh0aGlzLmVsZW1lbnQpLmJsdXIoKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH0sXG5cblx0XHRoaWRlOiBmdW5jdGlvbigpe1xuXHRcdFx0aWYgKHRoaXMuaXNJbmxpbmUgfHwgIXRoaXMucGlja2VyLmlzKCc6dmlzaWJsZScpKVxuXHRcdFx0XHRyZXR1cm4gdGhpcztcblx0XHRcdHRoaXMuZm9jdXNEYXRlID0gbnVsbDtcblx0XHRcdHRoaXMucGlja2VyLmhpZGUoKS5kZXRhY2goKTtcblx0XHRcdHRoaXMuX2RldGFjaFNlY29uZGFyeUV2ZW50cygpO1xuXHRcdFx0dGhpcy5zZXRWaWV3TW9kZSh0aGlzLm8uc3RhcnRWaWV3KTtcblxuXHRcdFx0aWYgKHRoaXMuby5mb3JjZVBhcnNlICYmIHRoaXMuaW5wdXRGaWVsZC52YWwoKSlcblx0XHRcdFx0dGhpcy5zZXRWYWx1ZSgpO1xuXHRcdFx0dGhpcy5fdHJpZ2dlcignaGlkZScpO1xuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fSxcblxuXHRcdGRlc3Ryb3k6IGZ1bmN0aW9uKCl7XG5cdFx0XHR0aGlzLmhpZGUoKTtcblx0XHRcdHRoaXMuX2RldGFjaEV2ZW50cygpO1xuXHRcdFx0dGhpcy5fZGV0YWNoU2Vjb25kYXJ5RXZlbnRzKCk7XG5cdFx0XHR0aGlzLnBpY2tlci5yZW1vdmUoKTtcblx0XHRcdGRlbGV0ZSB0aGlzLmVsZW1lbnQuZGF0YSgpLmRhdGVwaWNrZXI7XG5cdFx0XHRpZiAoIXRoaXMuaXNJbnB1dCl7XG5cdFx0XHRcdGRlbGV0ZSB0aGlzLmVsZW1lbnQuZGF0YSgpLmRhdGU7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9LFxuXG5cdFx0cGFzdGU6IGZ1bmN0aW9uKGUpe1xuXHRcdFx0dmFyIGRhdGVTdHJpbmc7XG5cdFx0XHRpZiAoZS5vcmlnaW5hbEV2ZW50LmNsaXBib2FyZERhdGEgJiYgZS5vcmlnaW5hbEV2ZW50LmNsaXBib2FyZERhdGEudHlwZXNcblx0XHRcdFx0JiYgJC5pbkFycmF5KCd0ZXh0L3BsYWluJywgZS5vcmlnaW5hbEV2ZW50LmNsaXBib2FyZERhdGEudHlwZXMpICE9PSAtMSkge1xuXHRcdFx0XHRkYXRlU3RyaW5nID0gZS5vcmlnaW5hbEV2ZW50LmNsaXBib2FyZERhdGEuZ2V0RGF0YSgndGV4dC9wbGFpbicpO1xuXHRcdFx0fSBlbHNlIGlmICh3aW5kb3cuY2xpcGJvYXJkRGF0YSkge1xuXHRcdFx0XHRkYXRlU3RyaW5nID0gd2luZG93LmNsaXBib2FyZERhdGEuZ2V0RGF0YSgnVGV4dCcpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5zZXREYXRlKGRhdGVTdHJpbmcpO1xuXHRcdFx0dGhpcy51cGRhdGUoKTtcblx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHR9LFxuXG5cdFx0X3V0Y190b19sb2NhbDogZnVuY3Rpb24odXRjKXtcblx0XHRcdGlmICghdXRjKSB7XG5cdFx0XHRcdHJldHVybiB1dGM7XG5cdFx0XHR9XG5cblx0XHRcdHZhciBsb2NhbCA9IG5ldyBEYXRlKHV0Yy5nZXRUaW1lKCkgKyAodXRjLmdldFRpbWV6b25lT2Zmc2V0KCkgKiA2MDAwMCkpO1xuXG5cdFx0XHRpZiAobG9jYWwuZ2V0VGltZXpvbmVPZmZzZXQoKSAhPT0gdXRjLmdldFRpbWV6b25lT2Zmc2V0KCkpIHtcblx0XHRcdFx0bG9jYWwgPSBuZXcgRGF0ZSh1dGMuZ2V0VGltZSgpICsgKGxvY2FsLmdldFRpbWV6b25lT2Zmc2V0KCkgKiA2MDAwMCkpO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gbG9jYWw7XG5cdFx0fSxcblx0XHRfbG9jYWxfdG9fdXRjOiBmdW5jdGlvbihsb2NhbCl7XG5cdFx0XHRyZXR1cm4gbG9jYWwgJiYgbmV3IERhdGUobG9jYWwuZ2V0VGltZSgpIC0gKGxvY2FsLmdldFRpbWV6b25lT2Zmc2V0KCkqNjAwMDApKTtcblx0XHR9LFxuXHRcdF96ZXJvX3RpbWU6IGZ1bmN0aW9uKGxvY2FsKXtcblx0XHRcdHJldHVybiBsb2NhbCAmJiBuZXcgRGF0ZShsb2NhbC5nZXRGdWxsWWVhcigpLCBsb2NhbC5nZXRNb250aCgpLCBsb2NhbC5nZXREYXRlKCkpO1xuXHRcdH0sXG5cdFx0X3plcm9fdXRjX3RpbWU6IGZ1bmN0aW9uKHV0Yyl7XG5cdFx0XHRyZXR1cm4gdXRjICYmIFVUQ0RhdGUodXRjLmdldFVUQ0Z1bGxZZWFyKCksIHV0Yy5nZXRVVENNb250aCgpLCB1dGMuZ2V0VVRDRGF0ZSgpKTtcblx0XHR9LFxuXG5cdFx0Z2V0RGF0ZXM6IGZ1bmN0aW9uKCl7XG5cdFx0XHRyZXR1cm4gJC5tYXAodGhpcy5kYXRlcywgdGhpcy5fdXRjX3RvX2xvY2FsKTtcblx0XHR9LFxuXG5cdFx0Z2V0VVRDRGF0ZXM6IGZ1bmN0aW9uKCl7XG5cdFx0XHRyZXR1cm4gJC5tYXAodGhpcy5kYXRlcywgZnVuY3Rpb24oZCl7XG5cdFx0XHRcdHJldHVybiBuZXcgRGF0ZShkKTtcblx0XHRcdH0pO1xuXHRcdH0sXG5cblx0XHRnZXREYXRlOiBmdW5jdGlvbigpe1xuXHRcdFx0cmV0dXJuIHRoaXMuX3V0Y190b19sb2NhbCh0aGlzLmdldFVUQ0RhdGUoKSk7XG5cdFx0fSxcblxuXHRcdGdldFVUQ0RhdGU6IGZ1bmN0aW9uKCl7XG5cdFx0XHR2YXIgc2VsZWN0ZWRfZGF0ZSA9IHRoaXMuZGF0ZXMuZ2V0KC0xKTtcblx0XHRcdGlmIChzZWxlY3RlZF9kYXRlICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0cmV0dXJuIG5ldyBEYXRlKHNlbGVjdGVkX2RhdGUpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0XHR9XG5cdFx0fSxcblxuXHRcdGNsZWFyRGF0ZXM6IGZ1bmN0aW9uKCl7XG5cdFx0XHR0aGlzLmlucHV0RmllbGQudmFsKCcnKTtcblx0XHRcdHRoaXMudXBkYXRlKCk7XG5cdFx0XHR0aGlzLl90cmlnZ2VyKCdjaGFuZ2VEYXRlJyk7XG5cblx0XHRcdGlmICh0aGlzLm8uYXV0b2Nsb3NlKSB7XG5cdFx0XHRcdHRoaXMuaGlkZSgpO1xuXHRcdFx0fVxuXHRcdH0sXG5cblx0XHRzZXREYXRlczogZnVuY3Rpb24oKXtcblx0XHRcdHZhciBhcmdzID0gJC5pc0FycmF5KGFyZ3VtZW50c1swXSkgPyBhcmd1bWVudHNbMF0gOiBhcmd1bWVudHM7XG5cdFx0XHR0aGlzLnVwZGF0ZS5hcHBseSh0aGlzLCBhcmdzKTtcblx0XHRcdHRoaXMuX3RyaWdnZXIoJ2NoYW5nZURhdGUnKTtcblx0XHRcdHRoaXMuc2V0VmFsdWUoKTtcblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH0sXG5cblx0XHRzZXRVVENEYXRlczogZnVuY3Rpb24oKXtcblx0XHRcdHZhciBhcmdzID0gJC5pc0FycmF5KGFyZ3VtZW50c1swXSkgPyBhcmd1bWVudHNbMF0gOiBhcmd1bWVudHM7XG5cdFx0XHR0aGlzLnNldERhdGVzLmFwcGx5KHRoaXMsICQubWFwKGFyZ3MsIHRoaXMuX3V0Y190b19sb2NhbCkpO1xuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fSxcblxuXHRcdHNldERhdGU6IGFsaWFzKCdzZXREYXRlcycpLFxuXHRcdHNldFVUQ0RhdGU6IGFsaWFzKCdzZXRVVENEYXRlcycpLFxuXHRcdHJlbW92ZTogYWxpYXMoJ2Rlc3Ryb3knLCAnTWV0aG9kIGByZW1vdmVgIGlzIGRlcHJlY2F0ZWQgYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiB2ZXJzaW9uIDIuMC4gVXNlIGBkZXN0cm95YCBpbnN0ZWFkJyksXG5cblx0XHRzZXRWYWx1ZTogZnVuY3Rpb24oKXtcblx0XHRcdHZhciBmb3JtYXR0ZWQgPSB0aGlzLmdldEZvcm1hdHRlZERhdGUoKTtcblx0XHRcdHRoaXMuaW5wdXRGaWVsZC52YWwoZm9ybWF0dGVkKTtcblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH0sXG5cblx0XHRnZXRGb3JtYXR0ZWREYXRlOiBmdW5jdGlvbihmb3JtYXQpe1xuXHRcdFx0aWYgKGZvcm1hdCA9PT0gdW5kZWZpbmVkKVxuXHRcdFx0XHRmb3JtYXQgPSB0aGlzLm8uZm9ybWF0O1xuXG5cdFx0XHR2YXIgbGFuZyA9IHRoaXMuby5sYW5ndWFnZTtcblx0XHRcdHJldHVybiAkLm1hcCh0aGlzLmRhdGVzLCBmdW5jdGlvbihkKXtcblx0XHRcdFx0cmV0dXJuIERQR2xvYmFsLmZvcm1hdERhdGUoZCwgZm9ybWF0LCBsYW5nKTtcblx0XHRcdH0pLmpvaW4odGhpcy5vLm11bHRpZGF0ZVNlcGFyYXRvcik7XG5cdFx0fSxcblxuXHRcdGdldFN0YXJ0RGF0ZTogZnVuY3Rpb24oKXtcblx0XHRcdHJldHVybiB0aGlzLm8uc3RhcnREYXRlO1xuXHRcdH0sXG5cblx0XHRzZXRTdGFydERhdGU6IGZ1bmN0aW9uKHN0YXJ0RGF0ZSl7XG5cdFx0XHR0aGlzLl9wcm9jZXNzX29wdGlvbnMoe3N0YXJ0RGF0ZTogc3RhcnREYXRlfSk7XG5cdFx0XHR0aGlzLnVwZGF0ZSgpO1xuXHRcdFx0dGhpcy51cGRhdGVOYXZBcnJvd3MoKTtcblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH0sXG5cblx0XHRnZXRFbmREYXRlOiBmdW5jdGlvbigpe1xuXHRcdFx0cmV0dXJuIHRoaXMuby5lbmREYXRlO1xuXHRcdH0sXG5cblx0XHRzZXRFbmREYXRlOiBmdW5jdGlvbihlbmREYXRlKXtcblx0XHRcdHRoaXMuX3Byb2Nlc3Nfb3B0aW9ucyh7ZW5kRGF0ZTogZW5kRGF0ZX0pO1xuXHRcdFx0dGhpcy51cGRhdGUoKTtcblx0XHRcdHRoaXMudXBkYXRlTmF2QXJyb3dzKCk7XG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9LFxuXG5cdFx0c2V0RGF5c09mV2Vla0Rpc2FibGVkOiBmdW5jdGlvbihkYXlzT2ZXZWVrRGlzYWJsZWQpe1xuXHRcdFx0dGhpcy5fcHJvY2Vzc19vcHRpb25zKHtkYXlzT2ZXZWVrRGlzYWJsZWQ6IGRheXNPZldlZWtEaXNhYmxlZH0pO1xuXHRcdFx0dGhpcy51cGRhdGUoKTtcblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH0sXG5cblx0XHRzZXREYXlzT2ZXZWVrSGlnaGxpZ2h0ZWQ6IGZ1bmN0aW9uKGRheXNPZldlZWtIaWdobGlnaHRlZCl7XG5cdFx0XHR0aGlzLl9wcm9jZXNzX29wdGlvbnMoe2RheXNPZldlZWtIaWdobGlnaHRlZDogZGF5c09mV2Vla0hpZ2hsaWdodGVkfSk7XG5cdFx0XHR0aGlzLnVwZGF0ZSgpO1xuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fSxcblxuXHRcdHNldERhdGVzRGlzYWJsZWQ6IGZ1bmN0aW9uKGRhdGVzRGlzYWJsZWQpe1xuXHRcdFx0dGhpcy5fcHJvY2Vzc19vcHRpb25zKHtkYXRlc0Rpc2FibGVkOiBkYXRlc0Rpc2FibGVkfSk7XG5cdFx0XHR0aGlzLnVwZGF0ZSgpO1xuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fSxcblxuXHRcdHBsYWNlOiBmdW5jdGlvbigpe1xuXHRcdFx0aWYgKHRoaXMuaXNJbmxpbmUpXG5cdFx0XHRcdHJldHVybiB0aGlzO1xuXHRcdFx0dmFyIGNhbGVuZGFyV2lkdGggPSB0aGlzLnBpY2tlci5vdXRlcldpZHRoKCksXG5cdFx0XHRcdGNhbGVuZGFySGVpZ2h0ID0gdGhpcy5waWNrZXIub3V0ZXJIZWlnaHQoKSxcblx0XHRcdFx0dmlzdWFsUGFkZGluZyA9IDEwLFxuXHRcdFx0XHRjb250YWluZXIgPSAkKHRoaXMuby5jb250YWluZXIpLFxuXHRcdFx0XHR3aW5kb3dXaWR0aCA9IGNvbnRhaW5lci53aWR0aCgpLFxuXHRcdFx0XHRzY3JvbGxUb3AgPSB0aGlzLm8uY29udGFpbmVyID09PSAnYm9keScgPyAkKGRvY3VtZW50KS5zY3JvbGxUb3AoKSA6IGNvbnRhaW5lci5zY3JvbGxUb3AoKSxcblx0XHRcdFx0YXBwZW5kT2Zmc2V0ID0gY29udGFpbmVyLm9mZnNldCgpO1xuXG5cdFx0XHR2YXIgcGFyZW50c1ppbmRleCA9IFswXTtcblx0XHRcdHRoaXMuZWxlbWVudC5wYXJlbnRzKCkuZWFjaChmdW5jdGlvbigpe1xuXHRcdFx0XHR2YXIgaXRlbVpJbmRleCA9ICQodGhpcykuY3NzKCd6LWluZGV4Jyk7XG5cdFx0XHRcdGlmIChpdGVtWkluZGV4ICE9PSAnYXV0bycgJiYgTnVtYmVyKGl0ZW1aSW5kZXgpICE9PSAwKSBwYXJlbnRzWmluZGV4LnB1c2goTnVtYmVyKGl0ZW1aSW5kZXgpKTtcblx0XHRcdH0pO1xuXHRcdFx0dmFyIHpJbmRleCA9IE1hdGgubWF4LmFwcGx5KE1hdGgsIHBhcmVudHNaaW5kZXgpICsgdGhpcy5vLnpJbmRleE9mZnNldDtcblx0XHRcdHZhciBvZmZzZXQgPSB0aGlzLmNvbXBvbmVudCA/IHRoaXMuY29tcG9uZW50LnBhcmVudCgpLm9mZnNldCgpIDogdGhpcy5lbGVtZW50Lm9mZnNldCgpO1xuXHRcdFx0dmFyIGhlaWdodCA9IHRoaXMuY29tcG9uZW50ID8gdGhpcy5jb21wb25lbnQub3V0ZXJIZWlnaHQodHJ1ZSkgOiB0aGlzLmVsZW1lbnQub3V0ZXJIZWlnaHQoZmFsc2UpO1xuXHRcdFx0dmFyIHdpZHRoID0gdGhpcy5jb21wb25lbnQgPyB0aGlzLmNvbXBvbmVudC5vdXRlcldpZHRoKHRydWUpIDogdGhpcy5lbGVtZW50Lm91dGVyV2lkdGgoZmFsc2UpO1xuXHRcdFx0dmFyIGxlZnQgPSBvZmZzZXQubGVmdCAtIGFwcGVuZE9mZnNldC5sZWZ0O1xuXHRcdFx0dmFyIHRvcCA9IG9mZnNldC50b3AgLSBhcHBlbmRPZmZzZXQudG9wO1xuXG5cdFx0XHRpZiAodGhpcy5vLmNvbnRhaW5lciAhPT0gJ2JvZHknKSB7XG5cdFx0XHRcdHRvcCArPSBzY3JvbGxUb3A7XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMucGlja2VyLnJlbW92ZUNsYXNzKFxuXHRcdFx0XHQnZGF0ZXBpY2tlci1vcmllbnQtdG9wIGRhdGVwaWNrZXItb3JpZW50LWJvdHRvbSAnK1xuXHRcdFx0XHQnZGF0ZXBpY2tlci1vcmllbnQtcmlnaHQgZGF0ZXBpY2tlci1vcmllbnQtbGVmdCdcblx0XHRcdCk7XG5cblx0XHRcdGlmICh0aGlzLm8ub3JpZW50YXRpb24ueCAhPT0gJ2F1dG8nKXtcblx0XHRcdFx0dGhpcy5waWNrZXIuYWRkQ2xhc3MoJ2RhdGVwaWNrZXItb3JpZW50LScgKyB0aGlzLm8ub3JpZW50YXRpb24ueCk7XG5cdFx0XHRcdGlmICh0aGlzLm8ub3JpZW50YXRpb24ueCA9PT0gJ3JpZ2h0Jylcblx0XHRcdFx0XHRsZWZ0IC09IGNhbGVuZGFyV2lkdGggLSB3aWR0aDtcblx0XHRcdH1cblx0XHRcdC8vIGF1dG8geCBvcmllbnRhdGlvbiBpcyBiZXN0LXBsYWNlbWVudDogaWYgaXQgY3Jvc3NlcyBhIHdpbmRvd1xuXHRcdFx0Ly8gZWRnZSwgZnVkZ2UgaXQgc2lkZXdheXNcblx0XHRcdGVsc2Uge1xuXHRcdFx0XHRpZiAob2Zmc2V0LmxlZnQgPCAwKSB7XG5cdFx0XHRcdFx0Ly8gY29tcG9uZW50IGlzIG91dHNpZGUgdGhlIHdpbmRvdyBvbiB0aGUgbGVmdCBzaWRlLiBNb3ZlIGl0IGludG8gdmlzaWJsZSByYW5nZVxuXHRcdFx0XHRcdHRoaXMucGlja2VyLmFkZENsYXNzKCdkYXRlcGlja2VyLW9yaWVudC1sZWZ0Jyk7XG5cdFx0XHRcdFx0bGVmdCAtPSBvZmZzZXQubGVmdCAtIHZpc3VhbFBhZGRpbmc7XG5cdFx0XHRcdH0gZWxzZSBpZiAobGVmdCArIGNhbGVuZGFyV2lkdGggPiB3aW5kb3dXaWR0aCkge1xuXHRcdFx0XHRcdC8vIHRoZSBjYWxlbmRhciBwYXNzZXMgdGhlIHdpZG93IHJpZ2h0IGVkZ2UuIEFsaWduIGl0IHRvIGNvbXBvbmVudCByaWdodCBzaWRlXG5cdFx0XHRcdFx0dGhpcy5waWNrZXIuYWRkQ2xhc3MoJ2RhdGVwaWNrZXItb3JpZW50LXJpZ2h0Jyk7XG5cdFx0XHRcdFx0bGVmdCArPSB3aWR0aCAtIGNhbGVuZGFyV2lkdGg7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0aWYgKHRoaXMuby5ydGwpIHtcblx0XHRcdFx0XHRcdC8vIERlZmF1bHQgdG8gcmlnaHRcblx0XHRcdFx0XHRcdHRoaXMucGlja2VyLmFkZENsYXNzKCdkYXRlcGlja2VyLW9yaWVudC1yaWdodCcpO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHQvLyBEZWZhdWx0IHRvIGxlZnRcblx0XHRcdFx0XHRcdHRoaXMucGlja2VyLmFkZENsYXNzKCdkYXRlcGlja2VyLW9yaWVudC1sZWZ0Jyk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdC8vIGF1dG8geSBvcmllbnRhdGlvbiBpcyBiZXN0LXNpdHVhdGlvbjogdG9wIG9yIGJvdHRvbSwgbm8gZnVkZ2luZyxcblx0XHRcdC8vIGRlY2lzaW9uIGJhc2VkIG9uIHdoaWNoIHNob3dzIG1vcmUgb2YgdGhlIGNhbGVuZGFyXG5cdFx0XHR2YXIgeW9yaWVudCA9IHRoaXMuby5vcmllbnRhdGlvbi55LFxuXHRcdFx0XHR0b3Bfb3ZlcmZsb3c7XG5cdFx0XHRpZiAoeW9yaWVudCA9PT0gJ2F1dG8nKXtcblx0XHRcdFx0dG9wX292ZXJmbG93ID0gLXNjcm9sbFRvcCArIHRvcCAtIGNhbGVuZGFySGVpZ2h0O1xuXHRcdFx0XHR5b3JpZW50ID0gdG9wX292ZXJmbG93IDwgMCA/ICdib3R0b20nIDogJ3RvcCc7XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMucGlja2VyLmFkZENsYXNzKCdkYXRlcGlja2VyLW9yaWVudC0nICsgeW9yaWVudCk7XG5cdFx0XHRpZiAoeW9yaWVudCA9PT0gJ3RvcCcpXG5cdFx0XHRcdHRvcCAtPSBjYWxlbmRhckhlaWdodCArIHBhcnNlSW50KHRoaXMucGlja2VyLmNzcygncGFkZGluZy10b3AnKSk7XG5cdFx0XHRlbHNlXG5cdFx0XHRcdHRvcCArPSBoZWlnaHQ7XG5cblx0XHRcdGlmICh0aGlzLm8ucnRsKSB7XG5cdFx0XHRcdHZhciByaWdodCA9IHdpbmRvd1dpZHRoIC0gKGxlZnQgKyB3aWR0aCk7XG5cdFx0XHRcdHRoaXMucGlja2VyLmNzcyh7XG5cdFx0XHRcdFx0dG9wOiB0b3AsXG5cdFx0XHRcdFx0cmlnaHQ6IHJpZ2h0LFxuXHRcdFx0XHRcdHpJbmRleDogekluZGV4XG5cdFx0XHRcdH0pO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhpcy5waWNrZXIuY3NzKHtcblx0XHRcdFx0XHR0b3A6IHRvcCxcblx0XHRcdFx0XHRsZWZ0OiBsZWZ0LFxuXHRcdFx0XHRcdHpJbmRleDogekluZGV4XG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fSxcblxuXHRcdF9hbGxvd191cGRhdGU6IHRydWUsXG5cdFx0dXBkYXRlOiBmdW5jdGlvbigpe1xuXHRcdFx0aWYgKCF0aGlzLl9hbGxvd191cGRhdGUpXG5cdFx0XHRcdHJldHVybiB0aGlzO1xuXG5cdFx0XHR2YXIgb2xkRGF0ZXMgPSB0aGlzLmRhdGVzLmNvcHkoKSxcblx0XHRcdFx0ZGF0ZXMgPSBbXSxcblx0XHRcdFx0ZnJvbUFyZ3MgPSBmYWxzZTtcblx0XHRcdGlmIChhcmd1bWVudHMubGVuZ3RoKXtcblx0XHRcdFx0JC5lYWNoKGFyZ3VtZW50cywgJC5wcm94eShmdW5jdGlvbihpLCBkYXRlKXtcblx0XHRcdFx0XHRpZiAoZGF0ZSBpbnN0YW5jZW9mIERhdGUpXG5cdFx0XHRcdFx0XHRkYXRlID0gdGhpcy5fbG9jYWxfdG9fdXRjKGRhdGUpO1xuXHRcdFx0XHRcdGRhdGVzLnB1c2goZGF0ZSk7XG5cdFx0XHRcdH0sIHRoaXMpKTtcblx0XHRcdFx0ZnJvbUFyZ3MgPSB0cnVlO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZGF0ZXMgPSB0aGlzLmlzSW5wdXRcblx0XHRcdFx0XHRcdD8gdGhpcy5lbGVtZW50LnZhbCgpXG5cdFx0XHRcdFx0XHQ6IHRoaXMuZWxlbWVudC5kYXRhKCdkYXRlJykgfHwgdGhpcy5pbnB1dEZpZWxkLnZhbCgpO1xuXHRcdFx0XHRpZiAoZGF0ZXMgJiYgdGhpcy5vLm11bHRpZGF0ZSlcblx0XHRcdFx0XHRkYXRlcyA9IGRhdGVzLnNwbGl0KHRoaXMuby5tdWx0aWRhdGVTZXBhcmF0b3IpO1xuXHRcdFx0XHRlbHNlXG5cdFx0XHRcdFx0ZGF0ZXMgPSBbZGF0ZXNdO1xuXHRcdFx0XHRkZWxldGUgdGhpcy5lbGVtZW50LmRhdGEoKS5kYXRlO1xuXHRcdFx0fVxuXG5cdFx0XHRkYXRlcyA9ICQubWFwKGRhdGVzLCAkLnByb3h5KGZ1bmN0aW9uKGRhdGUpe1xuXHRcdFx0XHRyZXR1cm4gRFBHbG9iYWwucGFyc2VEYXRlKGRhdGUsIHRoaXMuby5mb3JtYXQsIHRoaXMuby5sYW5ndWFnZSwgdGhpcy5vLmFzc3VtZU5lYXJieVllYXIpO1xuXHRcdFx0fSwgdGhpcykpO1xuXHRcdFx0ZGF0ZXMgPSAkLmdyZXAoZGF0ZXMsICQucHJveHkoZnVuY3Rpb24oZGF0ZSl7XG5cdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0IXRoaXMuZGF0ZVdpdGhpblJhbmdlKGRhdGUpIHx8XG5cdFx0XHRcdFx0IWRhdGVcblx0XHRcdFx0KTtcblx0XHRcdH0sIHRoaXMpLCB0cnVlKTtcblx0XHRcdHRoaXMuZGF0ZXMucmVwbGFjZShkYXRlcyk7XG5cblx0XHRcdGlmICh0aGlzLm8udXBkYXRlVmlld0RhdGUpIHtcblx0XHRcdFx0aWYgKHRoaXMuZGF0ZXMubGVuZ3RoKVxuXHRcdFx0XHRcdHRoaXMudmlld0RhdGUgPSBuZXcgRGF0ZSh0aGlzLmRhdGVzLmdldCgtMSkpO1xuXHRcdFx0XHRlbHNlIGlmICh0aGlzLnZpZXdEYXRlIDwgdGhpcy5vLnN0YXJ0RGF0ZSlcblx0XHRcdFx0XHR0aGlzLnZpZXdEYXRlID0gbmV3IERhdGUodGhpcy5vLnN0YXJ0RGF0ZSk7XG5cdFx0XHRcdGVsc2UgaWYgKHRoaXMudmlld0RhdGUgPiB0aGlzLm8uZW5kRGF0ZSlcblx0XHRcdFx0XHR0aGlzLnZpZXdEYXRlID0gbmV3IERhdGUodGhpcy5vLmVuZERhdGUpO1xuXHRcdFx0XHRlbHNlXG5cdFx0XHRcdFx0dGhpcy52aWV3RGF0ZSA9IHRoaXMuby5kZWZhdWx0Vmlld0RhdGU7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChmcm9tQXJncyl7XG5cdFx0XHRcdC8vIHNldHRpbmcgZGF0ZSBieSBjbGlja2luZ1xuXHRcdFx0XHR0aGlzLnNldFZhbHVlKCk7XG5cdFx0XHRcdHRoaXMuZWxlbWVudC5jaGFuZ2UoKTtcblx0XHRcdH1cblx0XHRcdGVsc2UgaWYgKHRoaXMuZGF0ZXMubGVuZ3RoKXtcblx0XHRcdFx0Ly8gc2V0dGluZyBkYXRlIGJ5IHR5cGluZ1xuXHRcdFx0XHRpZiAoU3RyaW5nKG9sZERhdGVzKSAhPT0gU3RyaW5nKHRoaXMuZGF0ZXMpICYmIGZyb21BcmdzKSB7XG5cdFx0XHRcdFx0dGhpcy5fdHJpZ2dlcignY2hhbmdlRGF0ZScpO1xuXHRcdFx0XHRcdHRoaXMuZWxlbWVudC5jaGFuZ2UoKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0aWYgKCF0aGlzLmRhdGVzLmxlbmd0aCAmJiBvbGREYXRlcy5sZW5ndGgpIHtcblx0XHRcdFx0dGhpcy5fdHJpZ2dlcignY2xlYXJEYXRlJyk7XG5cdFx0XHRcdHRoaXMuZWxlbWVudC5jaGFuZ2UoKTtcblx0XHRcdH1cblxuXHRcdFx0dGhpcy5maWxsKCk7XG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9LFxuXG5cdFx0ZmlsbERvdzogZnVuY3Rpb24oKXtcbiAgICAgIGlmICh0aGlzLm8uc2hvd1dlZWtEYXlzKSB7XG5cdFx0XHR2YXIgZG93Q250ID0gdGhpcy5vLndlZWtTdGFydCxcblx0XHRcdFx0aHRtbCA9ICc8dHI+Jztcblx0XHRcdGlmICh0aGlzLm8uY2FsZW5kYXJXZWVrcyl7XG5cdFx0XHRcdGh0bWwgKz0gJzx0aCBjbGFzcz1cImN3XCI+JiMxNjA7PC90aD4nO1xuXHRcdFx0fVxuXHRcdFx0d2hpbGUgKGRvd0NudCA8IHRoaXMuby53ZWVrU3RhcnQgKyA3KXtcblx0XHRcdFx0aHRtbCArPSAnPHRoIGNsYXNzPVwiZG93JztcbiAgICAgICAgaWYgKCQuaW5BcnJheShkb3dDbnQsIHRoaXMuby5kYXlzT2ZXZWVrRGlzYWJsZWQpICE9PSAtMSlcbiAgICAgICAgICBodG1sICs9ICcgZGlzYWJsZWQnO1xuICAgICAgICBodG1sICs9ICdcIj4nK2RhdGVzW3RoaXMuby5sYW5ndWFnZV0uZGF5c01pblsoZG93Q250KyspJTddKyc8L3RoPic7XG5cdFx0XHR9XG5cdFx0XHRodG1sICs9ICc8L3RyPic7XG5cdFx0XHR0aGlzLnBpY2tlci5maW5kKCcuZGF0ZXBpY2tlci1kYXlzIHRoZWFkJykuYXBwZW5kKGh0bWwpO1xuICAgICAgfVxuXHRcdH0sXG5cblx0XHRmaWxsTW9udGhzOiBmdW5jdGlvbigpe1xuICAgICAgdmFyIGxvY2FsRGF0ZSA9IHRoaXMuX3V0Y190b19sb2NhbCh0aGlzLnZpZXdEYXRlKTtcblx0XHRcdHZhciBodG1sID0gJyc7XG5cdFx0XHR2YXIgZm9jdXNlZDtcblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgMTI7IGkrKyl7XG5cdFx0XHRcdGZvY3VzZWQgPSBsb2NhbERhdGUgJiYgbG9jYWxEYXRlLmdldE1vbnRoKCkgPT09IGkgPyAnIGZvY3VzZWQnIDogJyc7XG5cdFx0XHRcdGh0bWwgKz0gJzxzcGFuIGNsYXNzPVwibW9udGgnICsgZm9jdXNlZCArICdcIj4nICsgZGF0ZXNbdGhpcy5vLmxhbmd1YWdlXS5tb250aHNTaG9ydFtpXSArICc8L3NwYW4+Jztcblx0XHRcdH1cblx0XHRcdHRoaXMucGlja2VyLmZpbmQoJy5kYXRlcGlja2VyLW1vbnRocyB0ZCcpLmh0bWwoaHRtbCk7XG5cdFx0fSxcblxuXHRcdHNldFJhbmdlOiBmdW5jdGlvbihyYW5nZSl7XG5cdFx0XHRpZiAoIXJhbmdlIHx8ICFyYW5nZS5sZW5ndGgpXG5cdFx0XHRcdGRlbGV0ZSB0aGlzLnJhbmdlO1xuXHRcdFx0ZWxzZVxuXHRcdFx0XHR0aGlzLnJhbmdlID0gJC5tYXAocmFuZ2UsIGZ1bmN0aW9uKGQpe1xuXHRcdFx0XHRcdHJldHVybiBkLnZhbHVlT2YoKTtcblx0XHRcdFx0fSk7XG5cdFx0XHR0aGlzLmZpbGwoKTtcblx0XHR9LFxuXG5cdFx0Z2V0Q2xhc3NOYW1lczogZnVuY3Rpb24oZGF0ZSl7XG5cdFx0XHR2YXIgY2xzID0gW10sXG5cdFx0XHRcdHllYXIgPSB0aGlzLnZpZXdEYXRlLmdldFVUQ0Z1bGxZZWFyKCksXG5cdFx0XHRcdG1vbnRoID0gdGhpcy52aWV3RGF0ZS5nZXRVVENNb250aCgpLFxuXHRcdFx0XHR0b2RheSA9IFVUQ1RvZGF5KCk7XG5cdFx0XHRpZiAoZGF0ZS5nZXRVVENGdWxsWWVhcigpIDwgeWVhciB8fCAoZGF0ZS5nZXRVVENGdWxsWWVhcigpID09PSB5ZWFyICYmIGRhdGUuZ2V0VVRDTW9udGgoKSA8IG1vbnRoKSl7XG5cdFx0XHRcdGNscy5wdXNoKCdvbGQnKTtcblx0XHRcdH0gZWxzZSBpZiAoZGF0ZS5nZXRVVENGdWxsWWVhcigpID4geWVhciB8fCAoZGF0ZS5nZXRVVENGdWxsWWVhcigpID09PSB5ZWFyICYmIGRhdGUuZ2V0VVRDTW9udGgoKSA+IG1vbnRoKSl7XG5cdFx0XHRcdGNscy5wdXNoKCduZXcnKTtcblx0XHRcdH1cblx0XHRcdGlmICh0aGlzLmZvY3VzRGF0ZSAmJiBkYXRlLnZhbHVlT2YoKSA9PT0gdGhpcy5mb2N1c0RhdGUudmFsdWVPZigpKVxuXHRcdFx0XHRjbHMucHVzaCgnZm9jdXNlZCcpO1xuXHRcdFx0Ly8gQ29tcGFyZSBpbnRlcm5hbCBVVEMgZGF0ZSB3aXRoIFVUQyB0b2RheSwgbm90IGxvY2FsIHRvZGF5XG5cdFx0XHRpZiAodGhpcy5vLnRvZGF5SGlnaGxpZ2h0ICYmIGlzVVRDRXF1YWxzKGRhdGUsIHRvZGF5KSkge1xuXHRcdFx0XHRjbHMucHVzaCgndG9kYXknKTtcblx0XHRcdH1cblx0XHRcdGlmICh0aGlzLmRhdGVzLmNvbnRhaW5zKGRhdGUpICE9PSAtMSlcblx0XHRcdFx0Y2xzLnB1c2goJ2FjdGl2ZScpO1xuXHRcdFx0aWYgKCF0aGlzLmRhdGVXaXRoaW5SYW5nZShkYXRlKSl7XG5cdFx0XHRcdGNscy5wdXNoKCdkaXNhYmxlZCcpO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHRoaXMuZGF0ZUlzRGlzYWJsZWQoZGF0ZSkpe1xuXHRcdFx0XHRjbHMucHVzaCgnZGlzYWJsZWQnLCAnZGlzYWJsZWQtZGF0ZScpO1xuXHRcdFx0fVxuXHRcdFx0aWYgKCQuaW5BcnJheShkYXRlLmdldFVUQ0RheSgpLCB0aGlzLm8uZGF5c09mV2Vla0hpZ2hsaWdodGVkKSAhPT0gLTEpe1xuXHRcdFx0XHRjbHMucHVzaCgnaGlnaGxpZ2h0ZWQnKTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKHRoaXMucmFuZ2Upe1xuXHRcdFx0XHRpZiAoZGF0ZSA+IHRoaXMucmFuZ2VbMF0gJiYgZGF0ZSA8IHRoaXMucmFuZ2VbdGhpcy5yYW5nZS5sZW5ndGgtMV0pe1xuXHRcdFx0XHRcdGNscy5wdXNoKCdyYW5nZScpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmICgkLmluQXJyYXkoZGF0ZS52YWx1ZU9mKCksIHRoaXMucmFuZ2UpICE9PSAtMSl7XG5cdFx0XHRcdFx0Y2xzLnB1c2goJ3NlbGVjdGVkJyk7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKGRhdGUudmFsdWVPZigpID09PSB0aGlzLnJhbmdlWzBdKXtcbiAgICAgICAgICBjbHMucHVzaCgncmFuZ2Utc3RhcnQnKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZGF0ZS52YWx1ZU9mKCkgPT09IHRoaXMucmFuZ2VbdGhpcy5yYW5nZS5sZW5ndGgtMV0pe1xuICAgICAgICAgIGNscy5wdXNoKCdyYW5nZS1lbmQnKTtcbiAgICAgICAgfVxuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGNscztcblx0XHR9LFxuXG5cdFx0X2ZpbGxfeWVhcnNWaWV3OiBmdW5jdGlvbihzZWxlY3RvciwgY3NzQ2xhc3MsIGZhY3RvciwgeWVhciwgc3RhcnRZZWFyLCBlbmRZZWFyLCBiZWZvcmVGbil7XG5cdFx0XHR2YXIgaHRtbCA9ICcnO1xuXHRcdFx0dmFyIHN0ZXAgPSBmYWN0b3IgLyAxMDtcblx0XHRcdHZhciB2aWV3ID0gdGhpcy5waWNrZXIuZmluZChzZWxlY3Rvcik7XG5cdFx0XHR2YXIgc3RhcnRWYWwgPSBNYXRoLmZsb29yKHllYXIgLyBmYWN0b3IpICogZmFjdG9yO1xuXHRcdFx0dmFyIGVuZFZhbCA9IHN0YXJ0VmFsICsgc3RlcCAqIDk7XG5cdFx0XHR2YXIgZm9jdXNlZFZhbCA9IE1hdGguZmxvb3IodGhpcy52aWV3RGF0ZS5nZXRGdWxsWWVhcigpIC8gc3RlcCkgKiBzdGVwO1xuXHRcdFx0dmFyIHNlbGVjdGVkID0gJC5tYXAodGhpcy5kYXRlcywgZnVuY3Rpb24oZCl7XG5cdFx0XHRcdHJldHVybiBNYXRoLmZsb29yKGQuZ2V0VVRDRnVsbFllYXIoKSAvIHN0ZXApICogc3RlcDtcblx0XHRcdH0pO1xuXG5cdFx0XHR2YXIgY2xhc3NlcywgdG9vbHRpcCwgYmVmb3JlO1xuXHRcdFx0Zm9yICh2YXIgY3VyclZhbCA9IHN0YXJ0VmFsIC0gc3RlcDsgY3VyclZhbCA8PSBlbmRWYWwgKyBzdGVwOyBjdXJyVmFsICs9IHN0ZXApIHtcblx0XHRcdFx0Y2xhc3NlcyA9IFtjc3NDbGFzc107XG5cdFx0XHRcdHRvb2x0aXAgPSBudWxsO1xuXG5cdFx0XHRcdGlmIChjdXJyVmFsID09PSBzdGFydFZhbCAtIHN0ZXApIHtcblx0XHRcdFx0XHRjbGFzc2VzLnB1c2goJ29sZCcpO1xuXHRcdFx0XHR9IGVsc2UgaWYgKGN1cnJWYWwgPT09IGVuZFZhbCArIHN0ZXApIHtcblx0XHRcdFx0XHRjbGFzc2VzLnB1c2goJ25ldycpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmICgkLmluQXJyYXkoY3VyclZhbCwgc2VsZWN0ZWQpICE9PSAtMSkge1xuXHRcdFx0XHRcdGNsYXNzZXMucHVzaCgnYWN0aXZlJyk7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKGN1cnJWYWwgPCBzdGFydFllYXIgfHwgY3VyclZhbCA+IGVuZFllYXIpIHtcblx0XHRcdFx0XHRjbGFzc2VzLnB1c2goJ2Rpc2FibGVkJyk7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKGN1cnJWYWwgPT09IGZvY3VzZWRWYWwpIHtcblx0XHRcdFx0ICBjbGFzc2VzLnB1c2goJ2ZvY3VzZWQnKTtcbiAgICAgICAgfVxuXG5cdFx0XHRcdGlmIChiZWZvcmVGbiAhPT0gJC5ub29wKSB7XG5cdFx0XHRcdFx0YmVmb3JlID0gYmVmb3JlRm4obmV3IERhdGUoY3VyclZhbCwgMCwgMSkpO1xuXHRcdFx0XHRcdGlmIChiZWZvcmUgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRcdFx0YmVmb3JlID0ge307XG5cdFx0XHRcdFx0fSBlbHNlIGlmICh0eXBlb2YgYmVmb3JlID09PSAnYm9vbGVhbicpIHtcblx0XHRcdFx0XHRcdGJlZm9yZSA9IHtlbmFibGVkOiBiZWZvcmV9O1xuXHRcdFx0XHRcdH0gZWxzZSBpZiAodHlwZW9mIGJlZm9yZSA9PT0gJ3N0cmluZycpIHtcblx0XHRcdFx0XHRcdGJlZm9yZSA9IHtjbGFzc2VzOiBiZWZvcmV9O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZiAoYmVmb3JlLmVuYWJsZWQgPT09IGZhbHNlKSB7XG5cdFx0XHRcdFx0XHRjbGFzc2VzLnB1c2goJ2Rpc2FibGVkJyk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmIChiZWZvcmUuY2xhc3Nlcykge1xuXHRcdFx0XHRcdFx0Y2xhc3NlcyA9IGNsYXNzZXMuY29uY2F0KGJlZm9yZS5jbGFzc2VzLnNwbGl0KC9cXHMrLykpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZiAoYmVmb3JlLnRvb2x0aXApIHtcblx0XHRcdFx0XHRcdHRvb2x0aXAgPSBiZWZvcmUudG9vbHRpcDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRodG1sICs9ICc8c3BhbiBjbGFzcz1cIicgKyBjbGFzc2VzLmpvaW4oJyAnKSArICdcIicgKyAodG9vbHRpcCA/ICcgdGl0bGU9XCInICsgdG9vbHRpcCArICdcIicgOiAnJykgKyAnPicgKyBjdXJyVmFsICsgJzwvc3Bhbj4nO1xuXHRcdFx0fVxuXG5cdFx0XHR2aWV3LmZpbmQoJy5kYXRlcGlja2VyLXN3aXRjaCcpLnRleHQoc3RhcnRWYWwgKyAnLScgKyBlbmRWYWwpO1xuXHRcdFx0dmlldy5maW5kKCd0ZCcpLmh0bWwoaHRtbCk7XG5cdFx0fSxcblxuXHRcdGZpbGw6IGZ1bmN0aW9uKCl7XG5cdFx0XHR2YXIgZCA9IG5ldyBEYXRlKHRoaXMudmlld0RhdGUpLFxuXHRcdFx0XHR5ZWFyID0gZC5nZXRVVENGdWxsWWVhcigpLFxuXHRcdFx0XHRtb250aCA9IGQuZ2V0VVRDTW9udGgoKSxcblx0XHRcdFx0c3RhcnRZZWFyID0gdGhpcy5vLnN0YXJ0RGF0ZSAhPT0gLUluZmluaXR5ID8gdGhpcy5vLnN0YXJ0RGF0ZS5nZXRVVENGdWxsWWVhcigpIDogLUluZmluaXR5LFxuXHRcdFx0XHRzdGFydE1vbnRoID0gdGhpcy5vLnN0YXJ0RGF0ZSAhPT0gLUluZmluaXR5ID8gdGhpcy5vLnN0YXJ0RGF0ZS5nZXRVVENNb250aCgpIDogLUluZmluaXR5LFxuXHRcdFx0XHRlbmRZZWFyID0gdGhpcy5vLmVuZERhdGUgIT09IEluZmluaXR5ID8gdGhpcy5vLmVuZERhdGUuZ2V0VVRDRnVsbFllYXIoKSA6IEluZmluaXR5LFxuXHRcdFx0XHRlbmRNb250aCA9IHRoaXMuby5lbmREYXRlICE9PSBJbmZpbml0eSA/IHRoaXMuby5lbmREYXRlLmdldFVUQ01vbnRoKCkgOiBJbmZpbml0eSxcblx0XHRcdFx0dG9kYXl0eHQgPSBkYXRlc1t0aGlzLm8ubGFuZ3VhZ2VdLnRvZGF5IHx8IGRhdGVzWydlbiddLnRvZGF5IHx8ICcnLFxuXHRcdFx0XHRjbGVhcnR4dCA9IGRhdGVzW3RoaXMuby5sYW5ndWFnZV0uY2xlYXIgfHwgZGF0ZXNbJ2VuJ10uY2xlYXIgfHwgJycsXG5cdFx0XHRcdHRpdGxlRm9ybWF0ID0gZGF0ZXNbdGhpcy5vLmxhbmd1YWdlXS50aXRsZUZvcm1hdCB8fCBkYXRlc1snZW4nXS50aXRsZUZvcm1hdCxcblx0XHRcdFx0dG9vbHRpcCxcblx0XHRcdFx0YmVmb3JlO1xuXHRcdFx0aWYgKGlzTmFOKHllYXIpIHx8IGlzTmFOKG1vbnRoKSlcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0dGhpcy5waWNrZXIuZmluZCgnLmRhdGVwaWNrZXItZGF5cyAuZGF0ZXBpY2tlci1zd2l0Y2gnKVxuXHRcdFx0XHRcdFx0LnRleHQoRFBHbG9iYWwuZm9ybWF0RGF0ZShkLCB0aXRsZUZvcm1hdCwgdGhpcy5vLmxhbmd1YWdlKSk7XG5cdFx0XHR0aGlzLnBpY2tlci5maW5kKCd0Zm9vdCAudG9kYXknKVxuXHRcdFx0XHRcdFx0LnRleHQodG9kYXl0eHQpXG5cdFx0XHRcdFx0XHQuY3NzKCdkaXNwbGF5JywgdGhpcy5vLnRvZGF5QnRuID09PSB0cnVlIHx8IHRoaXMuby50b2RheUJ0biA9PT0gJ2xpbmtlZCcgPyAndGFibGUtY2VsbCcgOiAnbm9uZScpO1xuXHRcdFx0dGhpcy5waWNrZXIuZmluZCgndGZvb3QgLmNsZWFyJylcblx0XHRcdFx0XHRcdC50ZXh0KGNsZWFydHh0KVxuXHRcdFx0XHRcdFx0LmNzcygnZGlzcGxheScsIHRoaXMuby5jbGVhckJ0biA9PT0gdHJ1ZSA/ICd0YWJsZS1jZWxsJyA6ICdub25lJyk7XG5cdFx0XHR0aGlzLnBpY2tlci5maW5kKCd0aGVhZCAuZGF0ZXBpY2tlci10aXRsZScpXG5cdFx0XHRcdFx0XHQudGV4dCh0aGlzLm8udGl0bGUpXG5cdFx0XHRcdFx0XHQuY3NzKCdkaXNwbGF5JywgdHlwZW9mIHRoaXMuby50aXRsZSA9PT0gJ3N0cmluZycgJiYgdGhpcy5vLnRpdGxlICE9PSAnJyA/ICd0YWJsZS1jZWxsJyA6ICdub25lJyk7XG5cdFx0XHR0aGlzLnVwZGF0ZU5hdkFycm93cygpO1xuXHRcdFx0dGhpcy5maWxsTW9udGhzKCk7XG5cdFx0XHR2YXIgcHJldk1vbnRoID0gVVRDRGF0ZSh5ZWFyLCBtb250aCwgMCksXG5cdFx0XHRcdGRheSA9IHByZXZNb250aC5nZXRVVENEYXRlKCk7XG5cdFx0XHRwcmV2TW9udGguc2V0VVRDRGF0ZShkYXkgLSAocHJldk1vbnRoLmdldFVUQ0RheSgpIC0gdGhpcy5vLndlZWtTdGFydCArIDcpJTcpO1xuXHRcdFx0dmFyIG5leHRNb250aCA9IG5ldyBEYXRlKHByZXZNb250aCk7XG5cdFx0XHRpZiAocHJldk1vbnRoLmdldFVUQ0Z1bGxZZWFyKCkgPCAxMDApe1xuICAgICAgICBuZXh0TW9udGguc2V0VVRDRnVsbFllYXIocHJldk1vbnRoLmdldFVUQ0Z1bGxZZWFyKCkpO1xuICAgICAgfVxuXHRcdFx0bmV4dE1vbnRoLnNldFVUQ0RhdGUobmV4dE1vbnRoLmdldFVUQ0RhdGUoKSArIDQyKTtcblx0XHRcdG5leHRNb250aCA9IG5leHRNb250aC52YWx1ZU9mKCk7XG5cdFx0XHR2YXIgaHRtbCA9IFtdO1xuXHRcdFx0dmFyIHdlZWtEYXksIGNsc05hbWU7XG5cdFx0XHR3aGlsZSAocHJldk1vbnRoLnZhbHVlT2YoKSA8IG5leHRNb250aCl7XG5cdFx0XHRcdHdlZWtEYXkgPSBwcmV2TW9udGguZ2V0VVRDRGF5KCk7XG5cdFx0XHRcdGlmICh3ZWVrRGF5ID09PSB0aGlzLm8ud2Vla1N0YXJ0KXtcblx0XHRcdFx0XHRodG1sLnB1c2goJzx0cj4nKTtcblx0XHRcdFx0XHRpZiAodGhpcy5vLmNhbGVuZGFyV2Vla3Mpe1xuXHRcdFx0XHRcdFx0Ly8gSVNPIDg2MDE6IEZpcnN0IHdlZWsgY29udGFpbnMgZmlyc3QgdGh1cnNkYXkuXG5cdFx0XHRcdFx0XHQvLyBJU08gYWxzbyBzdGF0ZXMgd2VlayBzdGFydHMgb24gTW9uZGF5LCBidXQgd2UgY2FuIGJlIG1vcmUgYWJzdHJhY3QgaGVyZS5cblx0XHRcdFx0XHRcdHZhclxuXHRcdFx0XHRcdFx0XHQvLyBTdGFydCBvZiBjdXJyZW50IHdlZWs6IGJhc2VkIG9uIHdlZWtzdGFydC9jdXJyZW50IGRhdGVcblx0XHRcdFx0XHRcdFx0d3MgPSBuZXcgRGF0ZSgrcHJldk1vbnRoICsgKHRoaXMuby53ZWVrU3RhcnQgLSB3ZWVrRGF5IC0gNykgJSA3ICogODY0ZTUpLFxuXHRcdFx0XHRcdFx0XHQvLyBUaHVyc2RheSBvZiB0aGlzIHdlZWtcblx0XHRcdFx0XHRcdFx0dGggPSBuZXcgRGF0ZShOdW1iZXIod3MpICsgKDcgKyA0IC0gd3MuZ2V0VVRDRGF5KCkpICUgNyAqIDg2NGU1KSxcblx0XHRcdFx0XHRcdFx0Ly8gRmlyc3QgVGh1cnNkYXkgb2YgeWVhciwgeWVhciBmcm9tIHRodXJzZGF5XG5cdFx0XHRcdFx0XHRcdHl0aCA9IG5ldyBEYXRlKE51bWJlcih5dGggPSBVVENEYXRlKHRoLmdldFVUQ0Z1bGxZZWFyKCksIDAsIDEpKSArICg3ICsgNCAtIHl0aC5nZXRVVENEYXkoKSkgJSA3ICogODY0ZTUpLFxuXHRcdFx0XHRcdFx0XHQvLyBDYWxlbmRhciB3ZWVrOiBtcyBiZXR3ZWVuIHRodXJzZGF5cywgZGl2IG1zIHBlciBkYXksIGRpdiA3IGRheXNcblx0XHRcdFx0XHRcdFx0Y2FsV2VlayA9ICh0aCAtIHl0aCkgLyA4NjRlNSAvIDcgKyAxO1xuXHRcdFx0XHRcdFx0aHRtbC5wdXNoKCc8dGQgY2xhc3M9XCJjd1wiPicrIGNhbFdlZWsgKyc8L3RkPicpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRjbHNOYW1lID0gdGhpcy5nZXRDbGFzc05hbWVzKHByZXZNb250aCk7XG5cdFx0XHRcdGNsc05hbWUucHVzaCgnZGF5Jyk7XG5cblx0XHRcdFx0dmFyIGNvbnRlbnQgPSBwcmV2TW9udGguZ2V0VVRDRGF0ZSgpO1xuXG5cdFx0XHRcdGlmICh0aGlzLm8uYmVmb3JlU2hvd0RheSAhPT0gJC5ub29wKXtcblx0XHRcdFx0XHRiZWZvcmUgPSB0aGlzLm8uYmVmb3JlU2hvd0RheSh0aGlzLl91dGNfdG9fbG9jYWwocHJldk1vbnRoKSk7XG5cdFx0XHRcdFx0aWYgKGJlZm9yZSA9PT0gdW5kZWZpbmVkKVxuXHRcdFx0XHRcdFx0YmVmb3JlID0ge307XG5cdFx0XHRcdFx0ZWxzZSBpZiAodHlwZW9mIGJlZm9yZSA9PT0gJ2Jvb2xlYW4nKVxuXHRcdFx0XHRcdFx0YmVmb3JlID0ge2VuYWJsZWQ6IGJlZm9yZX07XG5cdFx0XHRcdFx0ZWxzZSBpZiAodHlwZW9mIGJlZm9yZSA9PT0gJ3N0cmluZycpXG5cdFx0XHRcdFx0XHRiZWZvcmUgPSB7Y2xhc3NlczogYmVmb3JlfTtcblx0XHRcdFx0XHRpZiAoYmVmb3JlLmVuYWJsZWQgPT09IGZhbHNlKVxuXHRcdFx0XHRcdFx0Y2xzTmFtZS5wdXNoKCdkaXNhYmxlZCcpO1xuXHRcdFx0XHRcdGlmIChiZWZvcmUuY2xhc3Nlcylcblx0XHRcdFx0XHRcdGNsc05hbWUgPSBjbHNOYW1lLmNvbmNhdChiZWZvcmUuY2xhc3Nlcy5zcGxpdCgvXFxzKy8pKTtcblx0XHRcdFx0XHRpZiAoYmVmb3JlLnRvb2x0aXApXG5cdFx0XHRcdFx0XHR0b29sdGlwID0gYmVmb3JlLnRvb2x0aXA7XG5cdFx0XHRcdFx0aWYgKGJlZm9yZS5jb250ZW50KVxuXHRcdFx0XHRcdFx0Y29udGVudCA9IGJlZm9yZS5jb250ZW50O1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly9DaGVjayBpZiB1bmlxdWVTb3J0IGV4aXN0cyAoc3VwcG9ydGVkIGJ5IGpxdWVyeSA+PTEuMTIgYW5kID49Mi4yKVxuXHRcdFx0XHQvL0ZhbGxiYWNrIHRvIHVuaXF1ZSBmdW5jdGlvbiBmb3Igb2xkZXIganF1ZXJ5IHZlcnNpb25zXG5cdFx0XHRcdGlmICgkLmlzRnVuY3Rpb24oJC51bmlxdWVTb3J0KSkge1xuXHRcdFx0XHRcdGNsc05hbWUgPSAkLnVuaXF1ZVNvcnQoY2xzTmFtZSk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0Y2xzTmFtZSA9ICQudW5pcXVlKGNsc05hbWUpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aHRtbC5wdXNoKCc8dGQgY2xhc3M9XCInK2Nsc05hbWUuam9pbignICcpKydcIicgKyAodG9vbHRpcCA/ICcgdGl0bGU9XCInK3Rvb2x0aXArJ1wiJyA6ICcnKSArICcgZGF0YS1kYXRlPVwiJyArIHByZXZNb250aC5nZXRUaW1lKCkudG9TdHJpbmcoKSArICdcIj4nICsgY29udGVudCArICc8L3RkPicpO1xuXHRcdFx0XHR0b29sdGlwID0gbnVsbDtcblx0XHRcdFx0aWYgKHdlZWtEYXkgPT09IHRoaXMuby53ZWVrRW5kKXtcblx0XHRcdFx0XHRodG1sLnB1c2goJzwvdHI+Jyk7XG5cdFx0XHRcdH1cblx0XHRcdFx0cHJldk1vbnRoLnNldFVUQ0RhdGUocHJldk1vbnRoLmdldFVUQ0RhdGUoKSArIDEpO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5waWNrZXIuZmluZCgnLmRhdGVwaWNrZXItZGF5cyB0Ym9keScpLmh0bWwoaHRtbC5qb2luKCcnKSk7XG5cblx0XHRcdHZhciBtb250aHNUaXRsZSA9IGRhdGVzW3RoaXMuby5sYW5ndWFnZV0ubW9udGhzVGl0bGUgfHwgZGF0ZXNbJ2VuJ10ubW9udGhzVGl0bGUgfHwgJ01vbnRocyc7XG5cdFx0XHR2YXIgbW9udGhzID0gdGhpcy5waWNrZXIuZmluZCgnLmRhdGVwaWNrZXItbW9udGhzJylcblx0XHRcdFx0XHRcdC5maW5kKCcuZGF0ZXBpY2tlci1zd2l0Y2gnKVxuXHRcdFx0XHRcdFx0XHQudGV4dCh0aGlzLm8ubWF4Vmlld01vZGUgPCAyID8gbW9udGhzVGl0bGUgOiB5ZWFyKVxuXHRcdFx0XHRcdFx0XHQuZW5kKClcblx0XHRcdFx0XHRcdC5maW5kKCd0Ym9keSBzcGFuJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuXG5cdFx0XHQkLmVhY2godGhpcy5kYXRlcywgZnVuY3Rpb24oaSwgZCl7XG5cdFx0XHRcdGlmIChkLmdldFVUQ0Z1bGxZZWFyKCkgPT09IHllYXIpXG5cdFx0XHRcdFx0bW9udGhzLmVxKGQuZ2V0VVRDTW9udGgoKSkuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuXHRcdFx0fSk7XG5cblx0XHRcdGlmICh5ZWFyIDwgc3RhcnRZZWFyIHx8IHllYXIgPiBlbmRZZWFyKXtcblx0XHRcdFx0bW9udGhzLmFkZENsYXNzKCdkaXNhYmxlZCcpO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHllYXIgPT09IHN0YXJ0WWVhcil7XG5cdFx0XHRcdG1vbnRocy5zbGljZSgwLCBzdGFydE1vbnRoKS5hZGRDbGFzcygnZGlzYWJsZWQnKTtcblx0XHRcdH1cblx0XHRcdGlmICh5ZWFyID09PSBlbmRZZWFyKXtcblx0XHRcdFx0bW9udGhzLnNsaWNlKGVuZE1vbnRoKzEpLmFkZENsYXNzKCdkaXNhYmxlZCcpO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAodGhpcy5vLmJlZm9yZVNob3dNb250aCAhPT0gJC5ub29wKXtcblx0XHRcdFx0dmFyIHRoYXQgPSB0aGlzO1xuXHRcdFx0XHQkLmVhY2gobW9udGhzLCBmdW5jdGlvbihpLCBtb250aCl7XG4gICAgICAgICAgdmFyIG1vRGF0ZSA9IG5ldyBEYXRlKHllYXIsIGksIDEpO1xuICAgICAgICAgIHZhciBiZWZvcmUgPSB0aGF0Lm8uYmVmb3JlU2hvd01vbnRoKG1vRGF0ZSk7XG5cdFx0XHRcdFx0aWYgKGJlZm9yZSA9PT0gdW5kZWZpbmVkKVxuXHRcdFx0XHRcdFx0YmVmb3JlID0ge307XG5cdFx0XHRcdFx0ZWxzZSBpZiAodHlwZW9mIGJlZm9yZSA9PT0gJ2Jvb2xlYW4nKVxuXHRcdFx0XHRcdFx0YmVmb3JlID0ge2VuYWJsZWQ6IGJlZm9yZX07XG5cdFx0XHRcdFx0ZWxzZSBpZiAodHlwZW9mIGJlZm9yZSA9PT0gJ3N0cmluZycpXG5cdFx0XHRcdFx0XHRiZWZvcmUgPSB7Y2xhc3NlczogYmVmb3JlfTtcblx0XHRcdFx0XHRpZiAoYmVmb3JlLmVuYWJsZWQgPT09IGZhbHNlICYmICEkKG1vbnRoKS5oYXNDbGFzcygnZGlzYWJsZWQnKSlcblx0XHRcdFx0XHQgICAgJChtb250aCkuYWRkQ2xhc3MoJ2Rpc2FibGVkJyk7XG5cdFx0XHRcdFx0aWYgKGJlZm9yZS5jbGFzc2VzKVxuXHRcdFx0XHRcdCAgICAkKG1vbnRoKS5hZGRDbGFzcyhiZWZvcmUuY2xhc3Nlcyk7XG5cdFx0XHRcdFx0aWYgKGJlZm9yZS50b29sdGlwKVxuXHRcdFx0XHRcdCAgICAkKG1vbnRoKS5wcm9wKCd0aXRsZScsIGJlZm9yZS50b29sdGlwKTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIEdlbmVyYXRpbmcgZGVjYWRlL3llYXJzIHBpY2tlclxuXHRcdFx0dGhpcy5fZmlsbF95ZWFyc1ZpZXcoXG5cdFx0XHRcdCcuZGF0ZXBpY2tlci15ZWFycycsXG5cdFx0XHRcdCd5ZWFyJyxcblx0XHRcdFx0MTAsXG5cdFx0XHRcdHllYXIsXG5cdFx0XHRcdHN0YXJ0WWVhcixcblx0XHRcdFx0ZW5kWWVhcixcblx0XHRcdFx0dGhpcy5vLmJlZm9yZVNob3dZZWFyXG5cdFx0XHQpO1xuXG5cdFx0XHQvLyBHZW5lcmF0aW5nIGNlbnR1cnkvZGVjYWRlcyBwaWNrZXJcblx0XHRcdHRoaXMuX2ZpbGxfeWVhcnNWaWV3KFxuXHRcdFx0XHQnLmRhdGVwaWNrZXItZGVjYWRlcycsXG5cdFx0XHRcdCdkZWNhZGUnLFxuXHRcdFx0XHQxMDAsXG5cdFx0XHRcdHllYXIsXG5cdFx0XHRcdHN0YXJ0WWVhcixcblx0XHRcdFx0ZW5kWWVhcixcblx0XHRcdFx0dGhpcy5vLmJlZm9yZVNob3dEZWNhZGVcblx0XHRcdCk7XG5cblx0XHRcdC8vIEdlbmVyYXRpbmcgbWlsbGVubml1bS9jZW50dXJpZXMgcGlja2VyXG5cdFx0XHR0aGlzLl9maWxsX3llYXJzVmlldyhcblx0XHRcdFx0Jy5kYXRlcGlja2VyLWNlbnR1cmllcycsXG5cdFx0XHRcdCdjZW50dXJ5Jyxcblx0XHRcdFx0MTAwMCxcblx0XHRcdFx0eWVhcixcblx0XHRcdFx0c3RhcnRZZWFyLFxuXHRcdFx0XHRlbmRZZWFyLFxuXHRcdFx0XHR0aGlzLm8uYmVmb3JlU2hvd0NlbnR1cnlcblx0XHRcdCk7XG5cdFx0fSxcblxuXHRcdHVwZGF0ZU5hdkFycm93czogZnVuY3Rpb24oKXtcblx0XHRcdGlmICghdGhpcy5fYWxsb3dfdXBkYXRlKVxuXHRcdFx0XHRyZXR1cm47XG5cblx0XHRcdHZhciBkID0gbmV3IERhdGUodGhpcy52aWV3RGF0ZSksXG5cdFx0XHRcdHllYXIgPSBkLmdldFVUQ0Z1bGxZZWFyKCksXG5cdFx0XHRcdG1vbnRoID0gZC5nZXRVVENNb250aCgpLFxuXHRcdFx0XHRzdGFydFllYXIgPSB0aGlzLm8uc3RhcnREYXRlICE9PSAtSW5maW5pdHkgPyB0aGlzLm8uc3RhcnREYXRlLmdldFVUQ0Z1bGxZZWFyKCkgOiAtSW5maW5pdHksXG5cdFx0XHRcdHN0YXJ0TW9udGggPSB0aGlzLm8uc3RhcnREYXRlICE9PSAtSW5maW5pdHkgPyB0aGlzLm8uc3RhcnREYXRlLmdldFVUQ01vbnRoKCkgOiAtSW5maW5pdHksXG5cdFx0XHRcdGVuZFllYXIgPSB0aGlzLm8uZW5kRGF0ZSAhPT0gSW5maW5pdHkgPyB0aGlzLm8uZW5kRGF0ZS5nZXRVVENGdWxsWWVhcigpIDogSW5maW5pdHksXG5cdFx0XHRcdGVuZE1vbnRoID0gdGhpcy5vLmVuZERhdGUgIT09IEluZmluaXR5ID8gdGhpcy5vLmVuZERhdGUuZ2V0VVRDTW9udGgoKSA6IEluZmluaXR5LFxuXHRcdFx0XHRwcmV2SXNEaXNhYmxlZCxcblx0XHRcdFx0bmV4dElzRGlzYWJsZWQsXG5cdFx0XHRcdGZhY3RvciA9IDE7XG5cdFx0XHRzd2l0Y2ggKHRoaXMudmlld01vZGUpe1xuXHRcdFx0XHRjYXNlIDQ6XG5cdFx0XHRcdFx0ZmFjdG9yICo9IDEwO1xuXHRcdFx0XHRcdC8qIGZhbGxzIHRocm91Z2ggKi9cblx0XHRcdFx0Y2FzZSAzOlxuXHRcdFx0XHRcdGZhY3RvciAqPSAxMDtcblx0XHRcdFx0XHQvKiBmYWxscyB0aHJvdWdoICovXG5cdFx0XHRcdGNhc2UgMjpcblx0XHRcdFx0XHRmYWN0b3IgKj0gMTA7XG5cdFx0XHRcdFx0LyogZmFsbHMgdGhyb3VnaCAqL1xuXHRcdFx0XHRjYXNlIDE6XG5cdFx0XHRcdFx0cHJldklzRGlzYWJsZWQgPSBNYXRoLmZsb29yKHllYXIgLyBmYWN0b3IpICogZmFjdG9yIDwgc3RhcnRZZWFyO1xuXHRcdFx0XHRcdG5leHRJc0Rpc2FibGVkID0gTWF0aC5mbG9vcih5ZWFyIC8gZmFjdG9yKSAqIGZhY3RvciArIGZhY3RvciA+IGVuZFllYXI7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgMDpcblx0XHRcdFx0XHRwcmV2SXNEaXNhYmxlZCA9IHllYXIgPD0gc3RhcnRZZWFyICYmIG1vbnRoIDwgc3RhcnRNb250aDtcblx0XHRcdFx0XHRuZXh0SXNEaXNhYmxlZCA9IHllYXIgPj0gZW5kWWVhciAmJiBtb250aCA+IGVuZE1vbnRoO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLnBpY2tlci5maW5kKCcucHJldicpLnRvZ2dsZUNsYXNzKCdkaXNhYmxlZCcsIHByZXZJc0Rpc2FibGVkKTtcblx0XHRcdHRoaXMucGlja2VyLmZpbmQoJy5uZXh0JykudG9nZ2xlQ2xhc3MoJ2Rpc2FibGVkJywgbmV4dElzRGlzYWJsZWQpO1xuXHRcdH0sXG5cblx0XHRjbGljazogZnVuY3Rpb24oZSl7XG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRlLnN0b3BQcm9wYWdhdGlvbigpO1xuXG5cdFx0XHR2YXIgdGFyZ2V0LCBkaXIsIGRheSwgeWVhciwgbW9udGg7XG5cdFx0XHR0YXJnZXQgPSAkKGUudGFyZ2V0KTtcblxuXHRcdFx0Ly8gQ2xpY2tlZCBvbiB0aGUgc3dpdGNoXG5cdFx0XHRpZiAodGFyZ2V0Lmhhc0NsYXNzKCdkYXRlcGlja2VyLXN3aXRjaCcpICYmIHRoaXMudmlld01vZGUgIT09IHRoaXMuby5tYXhWaWV3TW9kZSl7XG5cdFx0XHRcdHRoaXMuc2V0Vmlld01vZGUodGhpcy52aWV3TW9kZSArIDEpO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBDbGlja2VkIG9uIHRvZGF5IGJ1dHRvblxuXHRcdFx0aWYgKHRhcmdldC5oYXNDbGFzcygndG9kYXknKSAmJiAhdGFyZ2V0Lmhhc0NsYXNzKCdkYXknKSl7XG5cdFx0XHRcdHRoaXMuc2V0Vmlld01vZGUoMCk7XG5cdFx0XHRcdHRoaXMuX3NldERhdGUoVVRDVG9kYXkoKSwgdGhpcy5vLnRvZGF5QnRuID09PSAnbGlua2VkJyA/IG51bGwgOiAndmlldycpO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBDbGlja2VkIG9uIGNsZWFyIGJ1dHRvblxuXHRcdFx0aWYgKHRhcmdldC5oYXNDbGFzcygnY2xlYXInKSl7XG5cdFx0XHRcdHRoaXMuY2xlYXJEYXRlcygpO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoIXRhcmdldC5oYXNDbGFzcygnZGlzYWJsZWQnKSl7XG5cdFx0XHRcdC8vIENsaWNrZWQgb24gYSBtb250aCwgeWVhciwgZGVjYWRlLCBjZW50dXJ5XG5cdFx0XHRcdGlmICh0YXJnZXQuaGFzQ2xhc3MoJ21vbnRoJylcblx0XHRcdFx0XHRcdHx8IHRhcmdldC5oYXNDbGFzcygneWVhcicpXG5cdFx0XHRcdFx0XHR8fCB0YXJnZXQuaGFzQ2xhc3MoJ2RlY2FkZScpXG5cdFx0XHRcdFx0XHR8fCB0YXJnZXQuaGFzQ2xhc3MoJ2NlbnR1cnknKSkge1xuXHRcdFx0XHRcdHRoaXMudmlld0RhdGUuc2V0VVRDRGF0ZSgxKTtcblxuXHRcdFx0XHRcdGRheSA9IDE7XG5cdFx0XHRcdFx0aWYgKHRoaXMudmlld01vZGUgPT09IDEpe1xuXHRcdFx0XHRcdFx0bW9udGggPSB0YXJnZXQucGFyZW50KCkuZmluZCgnc3BhbicpLmluZGV4KHRhcmdldCk7XG5cdFx0XHRcdFx0XHR5ZWFyID0gdGhpcy52aWV3RGF0ZS5nZXRVVENGdWxsWWVhcigpO1xuXHRcdFx0XHRcdFx0dGhpcy52aWV3RGF0ZS5zZXRVVENNb250aChtb250aCk7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdG1vbnRoID0gMDtcblx0XHRcdFx0XHRcdHllYXIgPSBOdW1iZXIodGFyZ2V0LnRleHQoKSk7XG5cdFx0XHRcdFx0XHR0aGlzLnZpZXdEYXRlLnNldFVUQ0Z1bGxZZWFyKHllYXIpO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdHRoaXMuX3RyaWdnZXIoRFBHbG9iYWwudmlld01vZGVzW3RoaXMudmlld01vZGUgLSAxXS5lLCB0aGlzLnZpZXdEYXRlKTtcblxuXHRcdFx0XHRcdGlmICh0aGlzLnZpZXdNb2RlID09PSB0aGlzLm8ubWluVmlld01vZGUpe1xuXHRcdFx0XHRcdFx0dGhpcy5fc2V0RGF0ZShVVENEYXRlKHllYXIsIG1vbnRoLCBkYXkpKTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0dGhpcy5zZXRWaWV3TW9kZSh0aGlzLnZpZXdNb2RlIC0gMSk7XG5cdFx0XHRcdFx0XHR0aGlzLmZpbGwoKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0aWYgKHRoaXMucGlja2VyLmlzKCc6dmlzaWJsZScpICYmIHRoaXMuX2ZvY3VzZWRfZnJvbSl7XG5cdFx0XHRcdHRoaXMuX2ZvY3VzZWRfZnJvbS5mb2N1cygpO1xuXHRcdFx0fVxuXHRcdFx0ZGVsZXRlIHRoaXMuX2ZvY3VzZWRfZnJvbTtcblx0XHR9LFxuXG5cdFx0ZGF5Q2VsbENsaWNrOiBmdW5jdGlvbihlKXtcblx0XHRcdHZhciAkdGFyZ2V0ID0gJChlLmN1cnJlbnRUYXJnZXQpO1xuXHRcdFx0dmFyIHRpbWVzdGFtcCA9ICR0YXJnZXQuZGF0YSgnZGF0ZScpO1xuXHRcdFx0dmFyIGRhdGUgPSBuZXcgRGF0ZSh0aW1lc3RhbXApO1xuXG5cdFx0XHRpZiAodGhpcy5vLnVwZGF0ZVZpZXdEYXRlKSB7XG5cdFx0XHRcdGlmIChkYXRlLmdldFVUQ0Z1bGxZZWFyKCkgIT09IHRoaXMudmlld0RhdGUuZ2V0VVRDRnVsbFllYXIoKSkge1xuXHRcdFx0XHRcdHRoaXMuX3RyaWdnZXIoJ2NoYW5nZVllYXInLCB0aGlzLnZpZXdEYXRlKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmIChkYXRlLmdldFVUQ01vbnRoKCkgIT09IHRoaXMudmlld0RhdGUuZ2V0VVRDTW9udGgoKSkge1xuXHRcdFx0XHRcdHRoaXMuX3RyaWdnZXIoJ2NoYW5nZU1vbnRoJywgdGhpcy52aWV3RGF0ZSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHRoaXMuX3NldERhdGUoZGF0ZSk7XG5cdFx0fSxcblxuXHRcdC8vIENsaWNrZWQgb24gcHJldiBvciBuZXh0XG5cdFx0bmF2QXJyb3dzQ2xpY2s6IGZ1bmN0aW9uKGUpe1xuXHRcdFx0dmFyICR0YXJnZXQgPSAkKGUuY3VycmVudFRhcmdldCk7XG5cdFx0XHR2YXIgZGlyID0gJHRhcmdldC5oYXNDbGFzcygncHJldicpID8gLTEgOiAxO1xuXHRcdFx0aWYgKHRoaXMudmlld01vZGUgIT09IDApe1xuXHRcdFx0XHRkaXIgKj0gRFBHbG9iYWwudmlld01vZGVzW3RoaXMudmlld01vZGVdLm5hdlN0ZXAgKiAxMjtcblx0XHRcdH1cblx0XHRcdHRoaXMudmlld0RhdGUgPSB0aGlzLm1vdmVNb250aCh0aGlzLnZpZXdEYXRlLCBkaXIpO1xuXHRcdFx0dGhpcy5fdHJpZ2dlcihEUEdsb2JhbC52aWV3TW9kZXNbdGhpcy52aWV3TW9kZV0uZSwgdGhpcy52aWV3RGF0ZSk7XG5cdFx0XHR0aGlzLmZpbGwoKTtcblx0XHR9LFxuXG5cdFx0X3RvZ2dsZV9tdWx0aWRhdGU6IGZ1bmN0aW9uKGRhdGUpe1xuXHRcdFx0dmFyIGl4ID0gdGhpcy5kYXRlcy5jb250YWlucyhkYXRlKTtcblx0XHRcdGlmICghZGF0ZSl7XG5cdFx0XHRcdHRoaXMuZGF0ZXMuY2xlYXIoKTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKGl4ICE9PSAtMSl7XG5cdFx0XHRcdGlmICh0aGlzLm8ubXVsdGlkYXRlID09PSB0cnVlIHx8IHRoaXMuby5tdWx0aWRhdGUgPiAxIHx8IHRoaXMuby50b2dnbGVBY3RpdmUpe1xuXHRcdFx0XHRcdHRoaXMuZGF0ZXMucmVtb3ZlKGl4KTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIGlmICh0aGlzLm8ubXVsdGlkYXRlID09PSBmYWxzZSkge1xuXHRcdFx0XHR0aGlzLmRhdGVzLmNsZWFyKCk7XG5cdFx0XHRcdHRoaXMuZGF0ZXMucHVzaChkYXRlKTtcblx0XHRcdH1cblx0XHRcdGVsc2Uge1xuXHRcdFx0XHR0aGlzLmRhdGVzLnB1c2goZGF0ZSk7XG5cdFx0XHR9XG5cblx0XHRcdGlmICh0eXBlb2YgdGhpcy5vLm11bHRpZGF0ZSA9PT0gJ251bWJlcicpXG5cdFx0XHRcdHdoaWxlICh0aGlzLmRhdGVzLmxlbmd0aCA+IHRoaXMuby5tdWx0aWRhdGUpXG5cdFx0XHRcdFx0dGhpcy5kYXRlcy5yZW1vdmUoMCk7XG5cdFx0fSxcblxuXHRcdF9zZXREYXRlOiBmdW5jdGlvbihkYXRlLCB3aGljaCl7XG5cdFx0XHRpZiAoIXdoaWNoIHx8IHdoaWNoID09PSAnZGF0ZScpXG5cdFx0XHRcdHRoaXMuX3RvZ2dsZV9tdWx0aWRhdGUoZGF0ZSAmJiBuZXcgRGF0ZShkYXRlKSk7XG5cdFx0XHRpZiAoKCF3aGljaCAmJiB0aGlzLm8udXBkYXRlVmlld0RhdGUpIHx8IHdoaWNoID09PSAndmlldycpXG5cdFx0XHRcdHRoaXMudmlld0RhdGUgPSBkYXRlICYmIG5ldyBEYXRlKGRhdGUpO1xuXG5cdFx0XHR0aGlzLmZpbGwoKTtcblx0XHRcdHRoaXMuc2V0VmFsdWUoKTtcblx0XHRcdGlmICghd2hpY2ggfHwgd2hpY2ggIT09ICd2aWV3Jykge1xuXHRcdFx0XHR0aGlzLl90cmlnZ2VyKCdjaGFuZ2VEYXRlJyk7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLmlucHV0RmllbGQudHJpZ2dlcignY2hhbmdlJyk7XG5cdFx0XHRpZiAodGhpcy5vLmF1dG9jbG9zZSAmJiAoIXdoaWNoIHx8IHdoaWNoID09PSAnZGF0ZScpKXtcblx0XHRcdFx0dGhpcy5oaWRlKCk7XG5cdFx0XHR9XG5cdFx0fSxcblxuXHRcdG1vdmVEYXk6IGZ1bmN0aW9uKGRhdGUsIGRpcil7XG5cdFx0XHR2YXIgbmV3RGF0ZSA9IG5ldyBEYXRlKGRhdGUpO1xuXHRcdFx0bmV3RGF0ZS5zZXRVVENEYXRlKGRhdGUuZ2V0VVRDRGF0ZSgpICsgZGlyKTtcblxuXHRcdFx0cmV0dXJuIG5ld0RhdGU7XG5cdFx0fSxcblxuXHRcdG1vdmVXZWVrOiBmdW5jdGlvbihkYXRlLCBkaXIpe1xuXHRcdFx0cmV0dXJuIHRoaXMubW92ZURheShkYXRlLCBkaXIgKiA3KTtcblx0XHR9LFxuXG5cdFx0bW92ZU1vbnRoOiBmdW5jdGlvbihkYXRlLCBkaXIpe1xuXHRcdFx0aWYgKCFpc1ZhbGlkRGF0ZShkYXRlKSlcblx0XHRcdFx0cmV0dXJuIHRoaXMuby5kZWZhdWx0Vmlld0RhdGU7XG5cdFx0XHRpZiAoIWRpcilcblx0XHRcdFx0cmV0dXJuIGRhdGU7XG5cdFx0XHR2YXIgbmV3X2RhdGUgPSBuZXcgRGF0ZShkYXRlLnZhbHVlT2YoKSksXG5cdFx0XHRcdGRheSA9IG5ld19kYXRlLmdldFVUQ0RhdGUoKSxcblx0XHRcdFx0bW9udGggPSBuZXdfZGF0ZS5nZXRVVENNb250aCgpLFxuXHRcdFx0XHRtYWcgPSBNYXRoLmFicyhkaXIpLFxuXHRcdFx0XHRuZXdfbW9udGgsIHRlc3Q7XG5cdFx0XHRkaXIgPSBkaXIgPiAwID8gMSA6IC0xO1xuXHRcdFx0aWYgKG1hZyA9PT0gMSl7XG5cdFx0XHRcdHRlc3QgPSBkaXIgPT09IC0xXG5cdFx0XHRcdFx0Ly8gSWYgZ29pbmcgYmFjayBvbmUgbW9udGgsIG1ha2Ugc3VyZSBtb250aCBpcyBub3QgY3VycmVudCBtb250aFxuXHRcdFx0XHRcdC8vIChlZywgTWFyIDMxIC0+IEZlYiAzMSA9PSBGZWIgMjgsIG5vdCBNYXIgMDIpXG5cdFx0XHRcdFx0PyBmdW5jdGlvbigpe1xuXHRcdFx0XHRcdFx0cmV0dXJuIG5ld19kYXRlLmdldFVUQ01vbnRoKCkgPT09IG1vbnRoO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQvLyBJZiBnb2luZyBmb3J3YXJkIG9uZSBtb250aCwgbWFrZSBzdXJlIG1vbnRoIGlzIGFzIGV4cGVjdGVkXG5cdFx0XHRcdFx0Ly8gKGVnLCBKYW4gMzEgLT4gRmViIDMxID09IEZlYiAyOCwgbm90IE1hciAwMilcblx0XHRcdFx0XHQ6IGZ1bmN0aW9uKCl7XG5cdFx0XHRcdFx0XHRyZXR1cm4gbmV3X2RhdGUuZ2V0VVRDTW9udGgoKSAhPT0gbmV3X21vbnRoO1xuXHRcdFx0XHRcdH07XG5cdFx0XHRcdG5ld19tb250aCA9IG1vbnRoICsgZGlyO1xuXHRcdFx0XHRuZXdfZGF0ZS5zZXRVVENNb250aChuZXdfbW9udGgpO1xuXHRcdFx0XHQvLyBEZWMgLT4gSmFuICgxMikgb3IgSmFuIC0+IERlYyAoLTEpIC0tIGxpbWl0IGV4cGVjdGVkIGRhdGUgdG8gMC0xMVxuXHRcdFx0XHRuZXdfbW9udGggPSAobmV3X21vbnRoICsgMTIpICUgMTI7XG5cdFx0XHR9XG5cdFx0XHRlbHNlIHtcblx0XHRcdFx0Ly8gRm9yIG1hZ25pdHVkZXMgPjEsIG1vdmUgb25lIG1vbnRoIGF0IGEgdGltZS4uLlxuXHRcdFx0XHRmb3IgKHZhciBpPTA7IGkgPCBtYWc7IGkrKylcblx0XHRcdFx0XHQvLyAuLi53aGljaCBtaWdodCBkZWNyZWFzZSB0aGUgZGF5IChlZywgSmFuIDMxIHRvIEZlYiAyOCwgZXRjKS4uLlxuXHRcdFx0XHRcdG5ld19kYXRlID0gdGhpcy5tb3ZlTW9udGgobmV3X2RhdGUsIGRpcik7XG5cdFx0XHRcdC8vIC4uLnRoZW4gcmVzZXQgdGhlIGRheSwga2VlcGluZyBpdCBpbiB0aGUgbmV3IG1vbnRoXG5cdFx0XHRcdG5ld19tb250aCA9IG5ld19kYXRlLmdldFVUQ01vbnRoKCk7XG5cdFx0XHRcdG5ld19kYXRlLnNldFVUQ0RhdGUoZGF5KTtcblx0XHRcdFx0dGVzdCA9IGZ1bmN0aW9uKCl7XG5cdFx0XHRcdFx0cmV0dXJuIG5ld19tb250aCAhPT0gbmV3X2RhdGUuZ2V0VVRDTW9udGgoKTtcblx0XHRcdFx0fTtcblx0XHRcdH1cblx0XHRcdC8vIENvbW1vbiBkYXRlLXJlc2V0dGluZyBsb29wIC0tIGlmIGRhdGUgaXMgYmV5b25kIGVuZCBvZiBtb250aCwgbWFrZSBpdFxuXHRcdFx0Ly8gZW5kIG9mIG1vbnRoXG5cdFx0XHR3aGlsZSAodGVzdCgpKXtcblx0XHRcdFx0bmV3X2RhdGUuc2V0VVRDRGF0ZSgtLWRheSk7XG5cdFx0XHRcdG5ld19kYXRlLnNldFVUQ01vbnRoKG5ld19tb250aCk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gbmV3X2RhdGU7XG5cdFx0fSxcblxuXHRcdG1vdmVZZWFyOiBmdW5jdGlvbihkYXRlLCBkaXIpe1xuXHRcdFx0cmV0dXJuIHRoaXMubW92ZU1vbnRoKGRhdGUsIGRpcioxMik7XG5cdFx0fSxcblxuXHRcdG1vdmVBdmFpbGFibGVEYXRlOiBmdW5jdGlvbihkYXRlLCBkaXIsIGZuKXtcblx0XHRcdGRvIHtcblx0XHRcdFx0ZGF0ZSA9IHRoaXNbZm5dKGRhdGUsIGRpcik7XG5cblx0XHRcdFx0aWYgKCF0aGlzLmRhdGVXaXRoaW5SYW5nZShkYXRlKSlcblx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cblx0XHRcdFx0Zm4gPSAnbW92ZURheSc7XG5cdFx0XHR9XG5cdFx0XHR3aGlsZSAodGhpcy5kYXRlSXNEaXNhYmxlZChkYXRlKSk7XG5cblx0XHRcdHJldHVybiBkYXRlO1xuXHRcdH0sXG5cblx0XHR3ZWVrT2ZEYXRlSXNEaXNhYmxlZDogZnVuY3Rpb24oZGF0ZSl7XG5cdFx0XHRyZXR1cm4gJC5pbkFycmF5KGRhdGUuZ2V0VVRDRGF5KCksIHRoaXMuby5kYXlzT2ZXZWVrRGlzYWJsZWQpICE9PSAtMTtcblx0XHR9LFxuXG5cdFx0ZGF0ZUlzRGlzYWJsZWQ6IGZ1bmN0aW9uKGRhdGUpe1xuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0dGhpcy53ZWVrT2ZEYXRlSXNEaXNhYmxlZChkYXRlKSB8fFxuXHRcdFx0XHQkLmdyZXAodGhpcy5vLmRhdGVzRGlzYWJsZWQsIGZ1bmN0aW9uKGQpe1xuXHRcdFx0XHRcdHJldHVybiBpc1VUQ0VxdWFscyhkYXRlLCBkKTtcblx0XHRcdFx0fSkubGVuZ3RoID4gMFxuXHRcdFx0KTtcblx0XHR9LFxuXG5cdFx0ZGF0ZVdpdGhpblJhbmdlOiBmdW5jdGlvbihkYXRlKXtcblx0XHRcdHJldHVybiBkYXRlID49IHRoaXMuby5zdGFydERhdGUgJiYgZGF0ZSA8PSB0aGlzLm8uZW5kRGF0ZTtcblx0XHR9LFxuXG5cdFx0a2V5ZG93bjogZnVuY3Rpb24oZSl7XG5cdFx0XHRpZiAoIXRoaXMucGlja2VyLmlzKCc6dmlzaWJsZScpKXtcblx0XHRcdFx0aWYgKGUua2V5Q29kZSA9PT0gNDAgfHwgZS5rZXlDb2RlID09PSAyNykgeyAvLyBhbGxvdyBkb3duIHRvIHJlLXNob3cgcGlja2VyXG5cdFx0XHRcdFx0dGhpcy5zaG93KCk7XG5cdFx0XHRcdFx0ZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgfVxuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHR2YXIgZGF0ZUNoYW5nZWQgPSBmYWxzZSxcblx0XHRcdFx0ZGlyLCBuZXdWaWV3RGF0ZSxcblx0XHRcdFx0Zm9jdXNEYXRlID0gdGhpcy5mb2N1c0RhdGUgfHwgdGhpcy52aWV3RGF0ZTtcblx0XHRcdHN3aXRjaCAoZS5rZXlDb2RlKXtcblx0XHRcdFx0Y2FzZSAyNzogLy8gZXNjYXBlXG5cdFx0XHRcdFx0aWYgKHRoaXMuZm9jdXNEYXRlKXtcblx0XHRcdFx0XHRcdHRoaXMuZm9jdXNEYXRlID0gbnVsbDtcblx0XHRcdFx0XHRcdHRoaXMudmlld0RhdGUgPSB0aGlzLmRhdGVzLmdldCgtMSkgfHwgdGhpcy52aWV3RGF0ZTtcblx0XHRcdFx0XHRcdHRoaXMuZmlsbCgpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRlbHNlXG5cdFx0XHRcdFx0XHR0aGlzLmhpZGUoKTtcblx0XHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0ZS5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAzNzogLy8gbGVmdFxuXHRcdFx0XHRjYXNlIDM4OiAvLyB1cFxuXHRcdFx0XHRjYXNlIDM5OiAvLyByaWdodFxuXHRcdFx0XHRjYXNlIDQwOiAvLyBkb3duXG5cdFx0XHRcdFx0aWYgKCF0aGlzLm8ua2V5Ym9hcmROYXZpZ2F0aW9uIHx8IHRoaXMuby5kYXlzT2ZXZWVrRGlzYWJsZWQubGVuZ3RoID09PSA3KVxuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0ZGlyID0gZS5rZXlDb2RlID09PSAzNyB8fCBlLmtleUNvZGUgPT09IDM4ID8gLTEgOiAxO1xuICAgICAgICAgIGlmICh0aGlzLnZpZXdNb2RlID09PSAwKSB7XG4gIFx0XHRcdFx0XHRpZiAoZS5jdHJsS2V5KXtcbiAgXHRcdFx0XHRcdFx0bmV3Vmlld0RhdGUgPSB0aGlzLm1vdmVBdmFpbGFibGVEYXRlKGZvY3VzRGF0ZSwgZGlyLCAnbW92ZVllYXInKTtcblxuICBcdFx0XHRcdFx0XHRpZiAobmV3Vmlld0RhdGUpXG4gIFx0XHRcdFx0XHRcdFx0dGhpcy5fdHJpZ2dlcignY2hhbmdlWWVhcicsIHRoaXMudmlld0RhdGUpO1xuICBcdFx0XHRcdFx0fSBlbHNlIGlmIChlLnNoaWZ0S2V5KXtcbiAgXHRcdFx0XHRcdFx0bmV3Vmlld0RhdGUgPSB0aGlzLm1vdmVBdmFpbGFibGVEYXRlKGZvY3VzRGF0ZSwgZGlyLCAnbW92ZU1vbnRoJyk7XG5cbiAgXHRcdFx0XHRcdFx0aWYgKG5ld1ZpZXdEYXRlKVxuICBcdFx0XHRcdFx0XHRcdHRoaXMuX3RyaWdnZXIoJ2NoYW5nZU1vbnRoJywgdGhpcy52aWV3RGF0ZSk7XG4gIFx0XHRcdFx0XHR9IGVsc2UgaWYgKGUua2V5Q29kZSA9PT0gMzcgfHwgZS5rZXlDb2RlID09PSAzOSl7XG4gIFx0XHRcdFx0XHRcdG5ld1ZpZXdEYXRlID0gdGhpcy5tb3ZlQXZhaWxhYmxlRGF0ZShmb2N1c0RhdGUsIGRpciwgJ21vdmVEYXknKTtcbiAgXHRcdFx0XHRcdH0gZWxzZSBpZiAoIXRoaXMud2Vla09mRGF0ZUlzRGlzYWJsZWQoZm9jdXNEYXRlKSl7XG4gIFx0XHRcdFx0XHRcdG5ld1ZpZXdEYXRlID0gdGhpcy5tb3ZlQXZhaWxhYmxlRGF0ZShmb2N1c0RhdGUsIGRpciwgJ21vdmVXZWVrJyk7XG4gIFx0XHRcdFx0XHR9XG4gICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnZpZXdNb2RlID09PSAxKSB7XG4gICAgICAgICAgICBpZiAoZS5rZXlDb2RlID09PSAzOCB8fCBlLmtleUNvZGUgPT09IDQwKSB7XG4gICAgICAgICAgICAgIGRpciA9IGRpciAqIDQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBuZXdWaWV3RGF0ZSA9IHRoaXMubW92ZUF2YWlsYWJsZURhdGUoZm9jdXNEYXRlLCBkaXIsICdtb3ZlTW9udGgnKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMudmlld01vZGUgPT09IDIpIHtcbiAgICAgICAgICAgIGlmIChlLmtleUNvZGUgPT09IDM4IHx8IGUua2V5Q29kZSA9PT0gNDApIHtcbiAgICAgICAgICAgICAgZGlyID0gZGlyICogNDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG5ld1ZpZXdEYXRlID0gdGhpcy5tb3ZlQXZhaWxhYmxlRGF0ZShmb2N1c0RhdGUsIGRpciwgJ21vdmVZZWFyJyk7XG4gICAgICAgICAgfVxuXHRcdFx0XHRcdGlmIChuZXdWaWV3RGF0ZSl7XG5cdFx0XHRcdFx0XHR0aGlzLmZvY3VzRGF0ZSA9IHRoaXMudmlld0RhdGUgPSBuZXdWaWV3RGF0ZTtcblx0XHRcdFx0XHRcdHRoaXMuc2V0VmFsdWUoKTtcblx0XHRcdFx0XHRcdHRoaXMuZmlsbCgpO1xuXHRcdFx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAxMzogLy8gZW50ZXJcblx0XHRcdFx0XHRpZiAoIXRoaXMuby5mb3JjZVBhcnNlKVxuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0Zm9jdXNEYXRlID0gdGhpcy5mb2N1c0RhdGUgfHwgdGhpcy5kYXRlcy5nZXQoLTEpIHx8IHRoaXMudmlld0RhdGU7XG5cdFx0XHRcdFx0aWYgKHRoaXMuby5rZXlib2FyZE5hdmlnYXRpb24pIHtcblx0XHRcdFx0XHRcdHRoaXMuX3RvZ2dsZV9tdWx0aWRhdGUoZm9jdXNEYXRlKTtcblx0XHRcdFx0XHRcdGRhdGVDaGFuZ2VkID0gdHJ1ZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0dGhpcy5mb2N1c0RhdGUgPSBudWxsO1xuXHRcdFx0XHRcdHRoaXMudmlld0RhdGUgPSB0aGlzLmRhdGVzLmdldCgtMSkgfHwgdGhpcy52aWV3RGF0ZTtcblx0XHRcdFx0XHR0aGlzLnNldFZhbHVlKCk7XG5cdFx0XHRcdFx0dGhpcy5maWxsKCk7XG5cdFx0XHRcdFx0aWYgKHRoaXMucGlja2VyLmlzKCc6dmlzaWJsZScpKXtcblx0XHRcdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0XHRcdGUuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdFx0XHRcdFx0XHRpZiAodGhpcy5vLmF1dG9jbG9zZSlcblx0XHRcdFx0XHRcdFx0dGhpcy5oaWRlKCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIDk6IC8vIHRhYlxuXHRcdFx0XHRcdHRoaXMuZm9jdXNEYXRlID0gbnVsbDtcblx0XHRcdFx0XHR0aGlzLnZpZXdEYXRlID0gdGhpcy5kYXRlcy5nZXQoLTEpIHx8IHRoaXMudmlld0RhdGU7XG5cdFx0XHRcdFx0dGhpcy5maWxsKCk7XG5cdFx0XHRcdFx0dGhpcy5oaWRlKCk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0XHRpZiAoZGF0ZUNoYW5nZWQpe1xuXHRcdFx0XHRpZiAodGhpcy5kYXRlcy5sZW5ndGgpXG5cdFx0XHRcdFx0dGhpcy5fdHJpZ2dlcignY2hhbmdlRGF0ZScpO1xuXHRcdFx0XHRlbHNlXG5cdFx0XHRcdFx0dGhpcy5fdHJpZ2dlcignY2xlYXJEYXRlJyk7XG5cdFx0XHRcdHRoaXMuaW5wdXRGaWVsZC50cmlnZ2VyKCdjaGFuZ2UnKTtcblx0XHRcdH1cblx0XHR9LFxuXG5cdFx0c2V0Vmlld01vZGU6IGZ1bmN0aW9uKHZpZXdNb2RlKXtcblx0XHRcdHRoaXMudmlld01vZGUgPSB2aWV3TW9kZTtcblx0XHRcdHRoaXMucGlja2VyXG5cdFx0XHRcdC5jaGlsZHJlbignZGl2Jylcblx0XHRcdFx0LmhpZGUoKVxuXHRcdFx0XHQuZmlsdGVyKCcuZGF0ZXBpY2tlci0nICsgRFBHbG9iYWwudmlld01vZGVzW3RoaXMudmlld01vZGVdLmNsc05hbWUpXG5cdFx0XHRcdFx0LnNob3coKTtcblx0XHRcdHRoaXMudXBkYXRlTmF2QXJyb3dzKCk7XG4gICAgICB0aGlzLl90cmlnZ2VyKCdjaGFuZ2VWaWV3TW9kZScsIG5ldyBEYXRlKHRoaXMudmlld0RhdGUpKTtcblx0XHR9XG5cdH07XG5cblx0dmFyIERhdGVSYW5nZVBpY2tlciA9IGZ1bmN0aW9uKGVsZW1lbnQsIG9wdGlvbnMpe1xuXHRcdCQuZGF0YShlbGVtZW50LCAnZGF0ZXBpY2tlcicsIHRoaXMpO1xuXHRcdHRoaXMuZWxlbWVudCA9ICQoZWxlbWVudCk7XG5cdFx0dGhpcy5pbnB1dHMgPSAkLm1hcChvcHRpb25zLmlucHV0cywgZnVuY3Rpb24oaSl7XG5cdFx0XHRyZXR1cm4gaS5qcXVlcnkgPyBpWzBdIDogaTtcblx0XHR9KTtcblx0XHRkZWxldGUgb3B0aW9ucy5pbnB1dHM7XG5cblx0XHR0aGlzLmtlZXBFbXB0eVZhbHVlcyA9IG9wdGlvbnMua2VlcEVtcHR5VmFsdWVzO1xuXHRcdGRlbGV0ZSBvcHRpb25zLmtlZXBFbXB0eVZhbHVlcztcblxuXHRcdGRhdGVwaWNrZXJQbHVnaW4uY2FsbCgkKHRoaXMuaW5wdXRzKSwgb3B0aW9ucylcblx0XHRcdC5vbignY2hhbmdlRGF0ZScsICQucHJveHkodGhpcy5kYXRlVXBkYXRlZCwgdGhpcykpO1xuXG5cdFx0dGhpcy5waWNrZXJzID0gJC5tYXAodGhpcy5pbnB1dHMsIGZ1bmN0aW9uKGkpe1xuXHRcdFx0cmV0dXJuICQuZGF0YShpLCAnZGF0ZXBpY2tlcicpO1xuXHRcdH0pO1xuXHRcdHRoaXMudXBkYXRlRGF0ZXMoKTtcblx0fTtcblx0RGF0ZVJhbmdlUGlja2VyLnByb3RvdHlwZSA9IHtcblx0XHR1cGRhdGVEYXRlczogZnVuY3Rpb24oKXtcblx0XHRcdHRoaXMuZGF0ZXMgPSAkLm1hcCh0aGlzLnBpY2tlcnMsIGZ1bmN0aW9uKGkpe1xuXHRcdFx0XHRyZXR1cm4gaS5nZXRVVENEYXRlKCk7XG5cdFx0XHR9KTtcblx0XHRcdHRoaXMudXBkYXRlUmFuZ2VzKCk7XG5cdFx0fSxcblx0XHR1cGRhdGVSYW5nZXM6IGZ1bmN0aW9uKCl7XG5cdFx0XHR2YXIgcmFuZ2UgPSAkLm1hcCh0aGlzLmRhdGVzLCBmdW5jdGlvbihkKXtcblx0XHRcdFx0cmV0dXJuIGQudmFsdWVPZigpO1xuXHRcdFx0fSk7XG5cdFx0XHQkLmVhY2godGhpcy5waWNrZXJzLCBmdW5jdGlvbihpLCBwKXtcblx0XHRcdFx0cC5zZXRSYW5nZShyYW5nZSk7XG5cdFx0XHR9KTtcblx0XHR9LFxuXHRcdGNsZWFyRGF0ZXM6IGZ1bmN0aW9uKCl7XG5cdFx0XHQkLmVhY2godGhpcy5waWNrZXJzLCBmdW5jdGlvbihpLCBwKXtcblx0XHRcdFx0cC5jbGVhckRhdGVzKCk7XG5cdFx0XHR9KTtcblx0XHR9LFxuXHRcdGRhdGVVcGRhdGVkOiBmdW5jdGlvbihlKXtcblx0XHRcdC8vIGB0aGlzLnVwZGF0aW5nYCBpcyBhIHdvcmthcm91bmQgZm9yIHByZXZlbnRpbmcgaW5maW5pdGUgcmVjdXJzaW9uXG5cdFx0XHQvLyBiZXR3ZWVuIGBjaGFuZ2VEYXRlYCB0cmlnZ2VyaW5nIGFuZCBgc2V0VVRDRGF0ZWAgY2FsbGluZy4gIFVudGlsXG5cdFx0XHQvLyB0aGVyZSBpcyBhIGJldHRlciBtZWNoYW5pc20uXG5cdFx0XHRpZiAodGhpcy51cGRhdGluZylcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0dGhpcy51cGRhdGluZyA9IHRydWU7XG5cblx0XHRcdHZhciBkcCA9ICQuZGF0YShlLnRhcmdldCwgJ2RhdGVwaWNrZXInKTtcblxuXHRcdFx0aWYgKGRwID09PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHR2YXIgbmV3X2RhdGUgPSBkcC5nZXRVVENEYXRlKCksXG5cdFx0XHRcdGtlZXBfZW1wdHlfdmFsdWVzID0gdGhpcy5rZWVwRW1wdHlWYWx1ZXMsXG5cdFx0XHRcdGkgPSAkLmluQXJyYXkoZS50YXJnZXQsIHRoaXMuaW5wdXRzKSxcblx0XHRcdFx0aiA9IGkgLSAxLFxuXHRcdFx0XHRrID0gaSArIDEsXG5cdFx0XHRcdGwgPSB0aGlzLmlucHV0cy5sZW5ndGg7XG5cdFx0XHRpZiAoaSA9PT0gLTEpXG5cdFx0XHRcdHJldHVybjtcblxuXHRcdFx0JC5lYWNoKHRoaXMucGlja2VycywgZnVuY3Rpb24oaSwgcCl7XG5cdFx0XHRcdGlmICghcC5nZXRVVENEYXRlKCkgJiYgKHAgPT09IGRwIHx8ICFrZWVwX2VtcHR5X3ZhbHVlcykpXG5cdFx0XHRcdFx0cC5zZXRVVENEYXRlKG5ld19kYXRlKTtcblx0XHRcdH0pO1xuXG5cdFx0XHRpZiAobmV3X2RhdGUgPCB0aGlzLmRhdGVzW2pdKXtcblx0XHRcdFx0Ly8gRGF0ZSBiZWluZyBtb3ZlZCBlYXJsaWVyL2xlZnRcblx0XHRcdFx0d2hpbGUgKGogPj0gMCAmJiBuZXdfZGF0ZSA8IHRoaXMuZGF0ZXNbal0pe1xuXHRcdFx0XHRcdHRoaXMucGlja2Vyc1tqLS1dLnNldFVUQ0RhdGUobmV3X2RhdGUpO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2UgaWYgKG5ld19kYXRlID4gdGhpcy5kYXRlc1trXSl7XG5cdFx0XHRcdC8vIERhdGUgYmVpbmcgbW92ZWQgbGF0ZXIvcmlnaHRcblx0XHRcdFx0d2hpbGUgKGsgPCBsICYmIG5ld19kYXRlID4gdGhpcy5kYXRlc1trXSl7XG5cdFx0XHRcdFx0dGhpcy5waWNrZXJzW2srK10uc2V0VVRDRGF0ZShuZXdfZGF0ZSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHRoaXMudXBkYXRlRGF0ZXMoKTtcblxuXHRcdFx0ZGVsZXRlIHRoaXMudXBkYXRpbmc7XG5cdFx0fSxcblx0XHRkZXN0cm95OiBmdW5jdGlvbigpe1xuXHRcdFx0JC5tYXAodGhpcy5waWNrZXJzLCBmdW5jdGlvbihwKXsgcC5kZXN0cm95KCk7IH0pO1xuXHRcdFx0JCh0aGlzLmlucHV0cykub2ZmKCdjaGFuZ2VEYXRlJywgdGhpcy5kYXRlVXBkYXRlZCk7XG5cdFx0XHRkZWxldGUgdGhpcy5lbGVtZW50LmRhdGEoKS5kYXRlcGlja2VyO1xuXHRcdH0sXG5cdFx0cmVtb3ZlOiBhbGlhcygnZGVzdHJveScsICdNZXRob2QgYHJlbW92ZWAgaXMgZGVwcmVjYXRlZCBhbmQgd2lsbCBiZSByZW1vdmVkIGluIHZlcnNpb24gMi4wLiBVc2UgYGRlc3Ryb3lgIGluc3RlYWQnKVxuXHR9O1xuXG5cdGZ1bmN0aW9uIG9wdHNfZnJvbV9lbChlbCwgcHJlZml4KXtcblx0XHQvLyBEZXJpdmUgb3B0aW9ucyBmcm9tIGVsZW1lbnQgZGF0YS1hdHRyc1xuXHRcdHZhciBkYXRhID0gJChlbCkuZGF0YSgpLFxuXHRcdFx0b3V0ID0ge30sIGlua2V5LFxuXHRcdFx0cmVwbGFjZSA9IG5ldyBSZWdFeHAoJ14nICsgcHJlZml4LnRvTG93ZXJDYXNlKCkgKyAnKFtBLVpdKScpO1xuXHRcdHByZWZpeCA9IG5ldyBSZWdFeHAoJ14nICsgcHJlZml4LnRvTG93ZXJDYXNlKCkpO1xuXHRcdGZ1bmN0aW9uIHJlX2xvd2VyKF8sYSl7XG5cdFx0XHRyZXR1cm4gYS50b0xvd2VyQ2FzZSgpO1xuXHRcdH1cblx0XHRmb3IgKHZhciBrZXkgaW4gZGF0YSlcblx0XHRcdGlmIChwcmVmaXgudGVzdChrZXkpKXtcblx0XHRcdFx0aW5rZXkgPSBrZXkucmVwbGFjZShyZXBsYWNlLCByZV9sb3dlcik7XG5cdFx0XHRcdG91dFtpbmtleV0gPSBkYXRhW2tleV07XG5cdFx0XHR9XG5cdFx0cmV0dXJuIG91dDtcblx0fVxuXG5cdGZ1bmN0aW9uIG9wdHNfZnJvbV9sb2NhbGUobGFuZyl7XG5cdFx0Ly8gRGVyaXZlIG9wdGlvbnMgZnJvbSBsb2NhbGUgcGx1Z2luc1xuXHRcdHZhciBvdXQgPSB7fTtcblx0XHQvLyBDaGVjayBpZiBcImRlLURFXCIgc3R5bGUgZGF0ZSBpcyBhdmFpbGFibGUsIGlmIG5vdCBsYW5ndWFnZSBzaG91bGRcblx0XHQvLyBmYWxsYmFjayB0byAyIGxldHRlciBjb2RlIGVnIFwiZGVcIlxuXHRcdGlmICghZGF0ZXNbbGFuZ10pe1xuXHRcdFx0bGFuZyA9IGxhbmcuc3BsaXQoJy0nKVswXTtcblx0XHRcdGlmICghZGF0ZXNbbGFuZ10pXG5cdFx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0dmFyIGQgPSBkYXRlc1tsYW5nXTtcblx0XHQkLmVhY2gobG9jYWxlX29wdHMsIGZ1bmN0aW9uKGksayl7XG5cdFx0XHRpZiAoayBpbiBkKVxuXHRcdFx0XHRvdXRba10gPSBkW2tdO1xuXHRcdH0pO1xuXHRcdHJldHVybiBvdXQ7XG5cdH1cblxuXHR2YXIgb2xkID0gJC5mbi5kYXRlcGlja2VyO1xuXHR2YXIgZGF0ZXBpY2tlclBsdWdpbiA9IGZ1bmN0aW9uKG9wdGlvbil7XG5cdFx0dmFyIGFyZ3MgPSBBcnJheS5hcHBseShudWxsLCBhcmd1bWVudHMpO1xuXHRcdGFyZ3Muc2hpZnQoKTtcblx0XHR2YXIgaW50ZXJuYWxfcmV0dXJuO1xuXHRcdHRoaXMuZWFjaChmdW5jdGlvbigpe1xuXHRcdFx0dmFyICR0aGlzID0gJCh0aGlzKSxcblx0XHRcdFx0ZGF0YSA9ICR0aGlzLmRhdGEoJ2RhdGVwaWNrZXInKSxcblx0XHRcdFx0b3B0aW9ucyA9IHR5cGVvZiBvcHRpb24gPT09ICdvYmplY3QnICYmIG9wdGlvbjtcblx0XHRcdGlmICghZGF0YSl7XG5cdFx0XHRcdHZhciBlbG9wdHMgPSBvcHRzX2Zyb21fZWwodGhpcywgJ2RhdGUnKSxcblx0XHRcdFx0XHQvLyBQcmVsaW1pbmFyeSBvdGlvbnNcblx0XHRcdFx0XHR4b3B0cyA9ICQuZXh0ZW5kKHt9LCBkZWZhdWx0cywgZWxvcHRzLCBvcHRpb25zKSxcblx0XHRcdFx0XHRsb2NvcHRzID0gb3B0c19mcm9tX2xvY2FsZSh4b3B0cy5sYW5ndWFnZSksXG5cdFx0XHRcdFx0Ly8gT3B0aW9ucyBwcmlvcml0eToganMgYXJncywgZGF0YS1hdHRycywgbG9jYWxlcywgZGVmYXVsdHNcblx0XHRcdFx0XHRvcHRzID0gJC5leHRlbmQoe30sIGRlZmF1bHRzLCBsb2NvcHRzLCBlbG9wdHMsIG9wdGlvbnMpO1xuXHRcdFx0XHRpZiAoJHRoaXMuaGFzQ2xhc3MoJ2lucHV0LWRhdGVyYW5nZScpIHx8IG9wdHMuaW5wdXRzKXtcblx0XHRcdFx0XHQkLmV4dGVuZChvcHRzLCB7XG5cdFx0XHRcdFx0XHRpbnB1dHM6IG9wdHMuaW5wdXRzIHx8ICR0aGlzLmZpbmQoJ2lucHV0JykudG9BcnJheSgpXG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0ZGF0YSA9IG5ldyBEYXRlUmFuZ2VQaWNrZXIodGhpcywgb3B0cyk7XG5cdFx0XHRcdH1cblx0XHRcdFx0ZWxzZSB7XG5cdFx0XHRcdFx0ZGF0YSA9IG5ldyBEYXRlcGlja2VyKHRoaXMsIG9wdHMpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdCR0aGlzLmRhdGEoJ2RhdGVwaWNrZXInLCBkYXRhKTtcblx0XHRcdH1cblx0XHRcdGlmICh0eXBlb2Ygb3B0aW9uID09PSAnc3RyaW5nJyAmJiB0eXBlb2YgZGF0YVtvcHRpb25dID09PSAnZnVuY3Rpb24nKXtcblx0XHRcdFx0aW50ZXJuYWxfcmV0dXJuID0gZGF0YVtvcHRpb25dLmFwcGx5KGRhdGEsIGFyZ3MpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXG5cdFx0aWYgKFxuXHRcdFx0aW50ZXJuYWxfcmV0dXJuID09PSB1bmRlZmluZWQgfHxcblx0XHRcdGludGVybmFsX3JldHVybiBpbnN0YW5jZW9mIERhdGVwaWNrZXIgfHxcblx0XHRcdGludGVybmFsX3JldHVybiBpbnN0YW5jZW9mIERhdGVSYW5nZVBpY2tlclxuXHRcdClcblx0XHRcdHJldHVybiB0aGlzO1xuXG5cdFx0aWYgKHRoaXMubGVuZ3RoID4gMSlcblx0XHRcdHRocm93IG5ldyBFcnJvcignVXNpbmcgb25seSBhbGxvd2VkIGZvciB0aGUgY29sbGVjdGlvbiBvZiBhIHNpbmdsZSBlbGVtZW50ICgnICsgb3B0aW9uICsgJyBmdW5jdGlvbiknKTtcblx0XHRlbHNlXG5cdFx0XHRyZXR1cm4gaW50ZXJuYWxfcmV0dXJuO1xuXHR9O1xuXHQkLmZuLmRhdGVwaWNrZXIgPSBkYXRlcGlja2VyUGx1Z2luO1xuXG5cdHZhciBkZWZhdWx0cyA9ICQuZm4uZGF0ZXBpY2tlci5kZWZhdWx0cyA9IHtcblx0XHRhc3N1bWVOZWFyYnlZZWFyOiBmYWxzZSxcblx0XHRhdXRvY2xvc2U6IGZhbHNlLFxuXHRcdGJlZm9yZVNob3dEYXk6ICQubm9vcCxcblx0XHRiZWZvcmVTaG93TW9udGg6ICQubm9vcCxcblx0XHRiZWZvcmVTaG93WWVhcjogJC5ub29wLFxuXHRcdGJlZm9yZVNob3dEZWNhZGU6ICQubm9vcCxcblx0XHRiZWZvcmVTaG93Q2VudHVyeTogJC5ub29wLFxuXHRcdGNhbGVuZGFyV2Vla3M6IGZhbHNlLFxuXHRcdGNsZWFyQnRuOiBmYWxzZSxcblx0XHR0b2dnbGVBY3RpdmU6IGZhbHNlLFxuXHRcdGRheXNPZldlZWtEaXNhYmxlZDogW10sXG5cdFx0ZGF5c09mV2Vla0hpZ2hsaWdodGVkOiBbXSxcblx0XHRkYXRlc0Rpc2FibGVkOiBbXSxcblx0XHRlbmREYXRlOiBJbmZpbml0eSxcblx0XHRmb3JjZVBhcnNlOiB0cnVlLFxuXHRcdGZvcm1hdDogJ21tL2RkL3l5eXknLFxuXHRcdGtlZXBFbXB0eVZhbHVlczogZmFsc2UsXG5cdFx0a2V5Ym9hcmROYXZpZ2F0aW9uOiB0cnVlLFxuXHRcdGxhbmd1YWdlOiAnZW4nLFxuXHRcdG1pblZpZXdNb2RlOiAwLFxuXHRcdG1heFZpZXdNb2RlOiA0LFxuXHRcdG11bHRpZGF0ZTogZmFsc2UsXG5cdFx0bXVsdGlkYXRlU2VwYXJhdG9yOiAnLCcsXG5cdFx0b3JpZW50YXRpb246IFwiYXV0b1wiLFxuXHRcdHJ0bDogZmFsc2UsXG5cdFx0c3RhcnREYXRlOiAtSW5maW5pdHksXG5cdFx0c3RhcnRWaWV3OiAwLFxuXHRcdHRvZGF5QnRuOiBmYWxzZSxcblx0XHR0b2RheUhpZ2hsaWdodDogZmFsc2UsXG5cdFx0dXBkYXRlVmlld0RhdGU6IHRydWUsXG5cdFx0d2Vla1N0YXJ0OiAwLFxuXHRcdGRpc2FibGVUb3VjaEtleWJvYXJkOiBmYWxzZSxcblx0XHRlbmFibGVPblJlYWRvbmx5OiB0cnVlLFxuXHRcdHNob3dPbkZvY3VzOiB0cnVlLFxuXHRcdHpJbmRleE9mZnNldDogMTAsXG5cdFx0Y29udGFpbmVyOiAnYm9keScsXG5cdFx0aW1tZWRpYXRlVXBkYXRlczogZmFsc2UsXG5cdFx0dGl0bGU6ICcnLFxuXHRcdHRlbXBsYXRlczoge1xuXHRcdFx0bGVmdEFycm93OiAnJiN4MDBBQjsnLFxuXHRcdFx0cmlnaHRBcnJvdzogJyYjeDAwQkI7J1xuXHRcdH0sXG4gICAgc2hvd1dlZWtEYXlzOiB0cnVlXG5cdH07XG5cdHZhciBsb2NhbGVfb3B0cyA9ICQuZm4uZGF0ZXBpY2tlci5sb2NhbGVfb3B0cyA9IFtcblx0XHQnZm9ybWF0Jyxcblx0XHQncnRsJyxcblx0XHQnd2Vla1N0YXJ0J1xuXHRdO1xuXHQkLmZuLmRhdGVwaWNrZXIuQ29uc3RydWN0b3IgPSBEYXRlcGlja2VyO1xuXHR2YXIgZGF0ZXMgPSAkLmZuLmRhdGVwaWNrZXIuZGF0ZXMgPSB7XG5cdFx0ZW46IHtcblx0XHRcdGRheXM6IFtcIlN1bmRheVwiLCBcIk1vbmRheVwiLCBcIlR1ZXNkYXlcIiwgXCJXZWRuZXNkYXlcIiwgXCJUaHVyc2RheVwiLCBcIkZyaWRheVwiLCBcIlNhdHVyZGF5XCJdLFxuXHRcdFx0ZGF5c1Nob3J0OiBbXCJTdW5cIiwgXCJNb25cIiwgXCJUdWVcIiwgXCJXZWRcIiwgXCJUaHVcIiwgXCJGcmlcIiwgXCJTYXRcIl0sXG5cdFx0XHRkYXlzTWluOiBbXCJTdVwiLCBcIk1vXCIsIFwiVHVcIiwgXCJXZVwiLCBcIlRoXCIsIFwiRnJcIiwgXCJTYVwiXSxcblx0XHRcdG1vbnRoczogW1wiSmFudWFyeVwiLCBcIkZlYnJ1YXJ5XCIsIFwiTWFyY2hcIiwgXCJBcHJpbFwiLCBcIk1heVwiLCBcIkp1bmVcIiwgXCJKdWx5XCIsIFwiQXVndXN0XCIsIFwiU2VwdGVtYmVyXCIsIFwiT2N0b2JlclwiLCBcIk5vdmVtYmVyXCIsIFwiRGVjZW1iZXJcIl0sXG5cdFx0XHRtb250aHNTaG9ydDogW1wiSmFuXCIsIFwiRmViXCIsIFwiTWFyXCIsIFwiQXByXCIsIFwiTWF5XCIsIFwiSnVuXCIsIFwiSnVsXCIsIFwiQXVnXCIsIFwiU2VwXCIsIFwiT2N0XCIsIFwiTm92XCIsIFwiRGVjXCJdLFxuXHRcdFx0dG9kYXk6IFwiVG9kYXlcIixcblx0XHRcdGNsZWFyOiBcIkNsZWFyXCIsXG5cdFx0XHR0aXRsZUZvcm1hdDogXCJNTSB5eXl5XCJcblx0XHR9XG5cdH07XG5cblx0dmFyIERQR2xvYmFsID0ge1xuXHRcdHZpZXdNb2RlczogW1xuXHRcdFx0e1xuXHRcdFx0XHRuYW1lczogWydkYXlzJywgJ21vbnRoJ10sXG5cdFx0XHRcdGNsc05hbWU6ICdkYXlzJyxcblx0XHRcdFx0ZTogJ2NoYW5nZU1vbnRoJ1xuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0bmFtZXM6IFsnbW9udGhzJywgJ3llYXInXSxcblx0XHRcdFx0Y2xzTmFtZTogJ21vbnRocycsXG5cdFx0XHRcdGU6ICdjaGFuZ2VZZWFyJyxcblx0XHRcdFx0bmF2U3RlcDogMVxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0bmFtZXM6IFsneWVhcnMnLCAnZGVjYWRlJ10sXG5cdFx0XHRcdGNsc05hbWU6ICd5ZWFycycsXG5cdFx0XHRcdGU6ICdjaGFuZ2VEZWNhZGUnLFxuXHRcdFx0XHRuYXZTdGVwOiAxMFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0bmFtZXM6IFsnZGVjYWRlcycsICdjZW50dXJ5J10sXG5cdFx0XHRcdGNsc05hbWU6ICdkZWNhZGVzJyxcblx0XHRcdFx0ZTogJ2NoYW5nZUNlbnR1cnknLFxuXHRcdFx0XHRuYXZTdGVwOiAxMDBcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdG5hbWVzOiBbJ2NlbnR1cmllcycsICdtaWxsZW5uaXVtJ10sXG5cdFx0XHRcdGNsc05hbWU6ICdjZW50dXJpZXMnLFxuXHRcdFx0XHRlOiAnY2hhbmdlTWlsbGVubml1bScsXG5cdFx0XHRcdG5hdlN0ZXA6IDEwMDBcblx0XHRcdH1cblx0XHRdLFxuXHRcdHZhbGlkUGFydHM6IC9kZD98REQ/fG1tP3xNTT98eXkoPzp5eSk/L2csXG5cdFx0bm9ucHVuY3R1YXRpb246IC9bXiAtXFwvOi1AXFx1NWU3NFxcdTY3MDhcXHU2NWU1XFxbLWB7LX5cXHRcXG5cXHJdKy9nLFxuXHRcdHBhcnNlRm9ybWF0OiBmdW5jdGlvbihmb3JtYXQpe1xuXHRcdFx0aWYgKHR5cGVvZiBmb3JtYXQudG9WYWx1ZSA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgZm9ybWF0LnRvRGlzcGxheSA9PT0gJ2Z1bmN0aW9uJylcbiAgICAgICAgICAgICAgICByZXR1cm4gZm9ybWF0O1xuICAgICAgICAgICAgLy8gSUUgdHJlYXRzIFxcMCBhcyBhIHN0cmluZyBlbmQgaW4gaW5wdXRzICh0cnVuY2F0aW5nIHRoZSB2YWx1ZSksXG5cdFx0XHQvLyBzbyBpdCdzIGEgYmFkIGZvcm1hdCBkZWxpbWl0ZXIsIGFueXdheVxuXHRcdFx0dmFyIHNlcGFyYXRvcnMgPSBmb3JtYXQucmVwbGFjZSh0aGlzLnZhbGlkUGFydHMsICdcXDAnKS5zcGxpdCgnXFwwJyksXG5cdFx0XHRcdHBhcnRzID0gZm9ybWF0Lm1hdGNoKHRoaXMudmFsaWRQYXJ0cyk7XG5cdFx0XHRpZiAoIXNlcGFyYXRvcnMgfHwgIXNlcGFyYXRvcnMubGVuZ3RoIHx8ICFwYXJ0cyB8fCBwYXJ0cy5sZW5ndGggPT09IDApe1xuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIGRhdGUgZm9ybWF0LlwiKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiB7c2VwYXJhdG9yczogc2VwYXJhdG9ycywgcGFydHM6IHBhcnRzfTtcblx0XHR9LFxuXHRcdHBhcnNlRGF0ZTogZnVuY3Rpb24oZGF0ZSwgZm9ybWF0LCBsYW5ndWFnZSwgYXNzdW1lTmVhcmJ5KXtcblx0XHRcdGlmICghZGF0ZSlcblx0XHRcdFx0cmV0dXJuIHVuZGVmaW5lZDtcblx0XHRcdGlmIChkYXRlIGluc3RhbmNlb2YgRGF0ZSlcblx0XHRcdFx0cmV0dXJuIGRhdGU7XG5cdFx0XHRpZiAodHlwZW9mIGZvcm1hdCA9PT0gJ3N0cmluZycpXG5cdFx0XHRcdGZvcm1hdCA9IERQR2xvYmFsLnBhcnNlRm9ybWF0KGZvcm1hdCk7XG5cdFx0XHRpZiAoZm9ybWF0LnRvVmFsdWUpXG5cdFx0XHRcdHJldHVybiBmb3JtYXQudG9WYWx1ZShkYXRlLCBmb3JtYXQsIGxhbmd1YWdlKTtcblx0XHRcdHZhciBmbl9tYXAgPSB7XG5cdFx0XHRcdFx0ZDogJ21vdmVEYXknLFxuXHRcdFx0XHRcdG06ICdtb3ZlTW9udGgnLFxuXHRcdFx0XHRcdHc6ICdtb3ZlV2VlaycsXG5cdFx0XHRcdFx0eTogJ21vdmVZZWFyJ1xuXHRcdFx0XHR9LFxuXHRcdFx0XHRkYXRlQWxpYXNlcyA9IHtcblx0XHRcdFx0XHR5ZXN0ZXJkYXk6ICctMWQnLFxuXHRcdFx0XHRcdHRvZGF5OiAnKzBkJyxcblx0XHRcdFx0XHR0b21vcnJvdzogJysxZCdcblx0XHRcdFx0fSxcblx0XHRcdFx0cGFydHMsIHBhcnQsIGRpciwgaSwgZm47XG5cdFx0XHRpZiAoZGF0ZSBpbiBkYXRlQWxpYXNlcyl7XG5cdFx0XHRcdGRhdGUgPSBkYXRlQWxpYXNlc1tkYXRlXTtcblx0XHRcdH1cblx0XHRcdGlmICgvXltcXC0rXVxcZCtbZG13eV0oW1xccyxdK1tcXC0rXVxcZCtbZG13eV0pKiQvaS50ZXN0KGRhdGUpKXtcblx0XHRcdFx0cGFydHMgPSBkYXRlLm1hdGNoKC8oW1xcLStdXFxkKykoW2Rtd3ldKS9naSk7XG5cdFx0XHRcdGRhdGUgPSBuZXcgRGF0ZSgpO1xuXHRcdFx0XHRmb3IgKGk9MDsgaSA8IHBhcnRzLmxlbmd0aDsgaSsrKXtcblx0XHRcdFx0XHRwYXJ0ID0gcGFydHNbaV0ubWF0Y2goLyhbXFwtK11cXGQrKShbZG13eV0pL2kpO1xuXHRcdFx0XHRcdGRpciA9IE51bWJlcihwYXJ0WzFdKTtcblx0XHRcdFx0XHRmbiA9IGZuX21hcFtwYXJ0WzJdLnRvTG93ZXJDYXNlKCldO1xuXHRcdFx0XHRcdGRhdGUgPSBEYXRlcGlja2VyLnByb3RvdHlwZVtmbl0oZGF0ZSwgZGlyKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gRGF0ZXBpY2tlci5wcm90b3R5cGUuX3plcm9fdXRjX3RpbWUoZGF0ZSk7XG5cdFx0XHR9XG5cblx0XHRcdHBhcnRzID0gZGF0ZSAmJiBkYXRlLm1hdGNoKHRoaXMubm9ucHVuY3R1YXRpb24pIHx8IFtdO1xuXG5cdFx0XHRmdW5jdGlvbiBhcHBseU5lYXJieVllYXIoeWVhciwgdGhyZXNob2xkKXtcblx0XHRcdFx0aWYgKHRocmVzaG9sZCA9PT0gdHJ1ZSlcblx0XHRcdFx0XHR0aHJlc2hvbGQgPSAxMDtcblxuXHRcdFx0XHQvLyBpZiB5ZWFyIGlzIDIgZGlnaXRzIG9yIGxlc3MsIHRoYW4gdGhlIHVzZXIgbW9zdCBsaWtlbHkgaXMgdHJ5aW5nIHRvIGdldCBhIHJlY2VudCBjZW50dXJ5XG5cdFx0XHRcdGlmICh5ZWFyIDwgMTAwKXtcblx0XHRcdFx0XHR5ZWFyICs9IDIwMDA7XG5cdFx0XHRcdFx0Ly8gaWYgdGhlIG5ldyB5ZWFyIGlzIG1vcmUgdGhhbiB0aHJlc2hvbGQgeWVhcnMgaW4gYWR2YW5jZSwgdXNlIGxhc3QgY2VudHVyeVxuXHRcdFx0XHRcdGlmICh5ZWFyID4gKChuZXcgRGF0ZSgpKS5nZXRGdWxsWWVhcigpK3RocmVzaG9sZCkpe1xuXHRcdFx0XHRcdFx0eWVhciAtPSAxMDA7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0cmV0dXJuIHllYXI7XG5cdFx0XHR9XG5cblx0XHRcdHZhciBwYXJzZWQgPSB7fSxcblx0XHRcdFx0c2V0dGVyc19vcmRlciA9IFsneXl5eScsICd5eScsICdNJywgJ01NJywgJ20nLCAnbW0nLCAnZCcsICdkZCddLFxuXHRcdFx0XHRzZXR0ZXJzX21hcCA9IHtcblx0XHRcdFx0XHR5eXl5OiBmdW5jdGlvbihkLHYpe1xuXHRcdFx0XHRcdFx0cmV0dXJuIGQuc2V0VVRDRnVsbFllYXIoYXNzdW1lTmVhcmJ5ID8gYXBwbHlOZWFyYnlZZWFyKHYsIGFzc3VtZU5lYXJieSkgOiB2KTtcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdG06IGZ1bmN0aW9uKGQsdil7XG5cdFx0XHRcdFx0XHRpZiAoaXNOYU4oZCkpXG5cdFx0XHRcdFx0XHRcdHJldHVybiBkO1xuXHRcdFx0XHRcdFx0diAtPSAxO1xuXHRcdFx0XHRcdFx0d2hpbGUgKHYgPCAwKSB2ICs9IDEyO1xuXHRcdFx0XHRcdFx0diAlPSAxMjtcblx0XHRcdFx0XHRcdGQuc2V0VVRDTW9udGgodik7XG5cdFx0XHRcdFx0XHR3aGlsZSAoZC5nZXRVVENNb250aCgpICE9PSB2KVxuXHRcdFx0XHRcdFx0XHRkLnNldFVUQ0RhdGUoZC5nZXRVVENEYXRlKCktMSk7XG5cdFx0XHRcdFx0XHRyZXR1cm4gZDtcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdGQ6IGZ1bmN0aW9uKGQsdil7XG5cdFx0XHRcdFx0XHRyZXR1cm4gZC5zZXRVVENEYXRlKHYpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSxcblx0XHRcdFx0dmFsLCBmaWx0ZXJlZDtcblx0XHRcdHNldHRlcnNfbWFwWyd5eSddID0gc2V0dGVyc19tYXBbJ3l5eXknXTtcblx0XHRcdHNldHRlcnNfbWFwWydNJ10gPSBzZXR0ZXJzX21hcFsnTU0nXSA9IHNldHRlcnNfbWFwWydtbSddID0gc2V0dGVyc19tYXBbJ20nXTtcblx0XHRcdHNldHRlcnNfbWFwWydkZCddID0gc2V0dGVyc19tYXBbJ2QnXTtcblx0XHRcdGRhdGUgPSBVVENUb2RheSgpO1xuXHRcdFx0dmFyIGZwYXJ0cyA9IGZvcm1hdC5wYXJ0cy5zbGljZSgpO1xuXHRcdFx0Ly8gUmVtb3ZlIG5vb3AgcGFydHNcblx0XHRcdGlmIChwYXJ0cy5sZW5ndGggIT09IGZwYXJ0cy5sZW5ndGgpe1xuXHRcdFx0XHRmcGFydHMgPSAkKGZwYXJ0cykuZmlsdGVyKGZ1bmN0aW9uKGkscCl7XG5cdFx0XHRcdFx0cmV0dXJuICQuaW5BcnJheShwLCBzZXR0ZXJzX29yZGVyKSAhPT0gLTE7XG5cdFx0XHRcdH0pLnRvQXJyYXkoKTtcblx0XHRcdH1cblx0XHRcdC8vIFByb2Nlc3MgcmVtYWluZGVyXG5cdFx0XHRmdW5jdGlvbiBtYXRjaF9wYXJ0KCl7XG5cdFx0XHRcdHZhciBtID0gdGhpcy5zbGljZSgwLCBwYXJ0c1tpXS5sZW5ndGgpLFxuXHRcdFx0XHRcdHAgPSBwYXJ0c1tpXS5zbGljZSgwLCBtLmxlbmd0aCk7XG5cdFx0XHRcdHJldHVybiBtLnRvTG93ZXJDYXNlKCkgPT09IHAudG9Mb3dlckNhc2UoKTtcblx0XHRcdH1cblx0XHRcdGlmIChwYXJ0cy5sZW5ndGggPT09IGZwYXJ0cy5sZW5ndGgpe1xuXHRcdFx0XHR2YXIgY250O1xuXHRcdFx0XHRmb3IgKGk9MCwgY250ID0gZnBhcnRzLmxlbmd0aDsgaSA8IGNudDsgaSsrKXtcblx0XHRcdFx0XHR2YWwgPSBwYXJzZUludChwYXJ0c1tpXSwgMTApO1xuXHRcdFx0XHRcdHBhcnQgPSBmcGFydHNbaV07XG5cdFx0XHRcdFx0aWYgKGlzTmFOKHZhbCkpe1xuXHRcdFx0XHRcdFx0c3dpdGNoIChwYXJ0KXtcblx0XHRcdFx0XHRcdFx0Y2FzZSAnTU0nOlxuXHRcdFx0XHRcdFx0XHRcdGZpbHRlcmVkID0gJChkYXRlc1tsYW5ndWFnZV0ubW9udGhzKS5maWx0ZXIobWF0Y2hfcGFydCk7XG5cdFx0XHRcdFx0XHRcdFx0dmFsID0gJC5pbkFycmF5KGZpbHRlcmVkWzBdLCBkYXRlc1tsYW5ndWFnZV0ubW9udGhzKSArIDE7XG5cdFx0XHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0XHRcdGNhc2UgJ00nOlxuXHRcdFx0XHRcdFx0XHRcdGZpbHRlcmVkID0gJChkYXRlc1tsYW5ndWFnZV0ubW9udGhzU2hvcnQpLmZpbHRlcihtYXRjaF9wYXJ0KTtcblx0XHRcdFx0XHRcdFx0XHR2YWwgPSAkLmluQXJyYXkoZmlsdGVyZWRbMF0sIGRhdGVzW2xhbmd1YWdlXS5tb250aHNTaG9ydCkgKyAxO1xuXHRcdFx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRwYXJzZWRbcGFydF0gPSB2YWw7XG5cdFx0XHRcdH1cblx0XHRcdFx0dmFyIF9kYXRlLCBzO1xuXHRcdFx0XHRmb3IgKGk9MDsgaSA8IHNldHRlcnNfb3JkZXIubGVuZ3RoOyBpKyspe1xuXHRcdFx0XHRcdHMgPSBzZXR0ZXJzX29yZGVyW2ldO1xuXHRcdFx0XHRcdGlmIChzIGluIHBhcnNlZCAmJiAhaXNOYU4ocGFyc2VkW3NdKSl7XG5cdFx0XHRcdFx0XHRfZGF0ZSA9IG5ldyBEYXRlKGRhdGUpO1xuXHRcdFx0XHRcdFx0c2V0dGVyc19tYXBbc10oX2RhdGUsIHBhcnNlZFtzXSk7XG5cdFx0XHRcdFx0XHRpZiAoIWlzTmFOKF9kYXRlKSlcblx0XHRcdFx0XHRcdFx0ZGF0ZSA9IF9kYXRlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGRhdGU7XG5cdFx0fSxcblx0XHRmb3JtYXREYXRlOiBmdW5jdGlvbihkYXRlLCBmb3JtYXQsIGxhbmd1YWdlKXtcblx0XHRcdGlmICghZGF0ZSlcblx0XHRcdFx0cmV0dXJuICcnO1xuXHRcdFx0aWYgKHR5cGVvZiBmb3JtYXQgPT09ICdzdHJpbmcnKVxuXHRcdFx0XHRmb3JtYXQgPSBEUEdsb2JhbC5wYXJzZUZvcm1hdChmb3JtYXQpO1xuXHRcdFx0aWYgKGZvcm1hdC50b0Rpc3BsYXkpXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZvcm1hdC50b0Rpc3BsYXkoZGF0ZSwgZm9ybWF0LCBsYW5ndWFnZSk7XG4gICAgICAgICAgICB2YXIgdmFsID0ge1xuXHRcdFx0XHRkOiBkYXRlLmdldFVUQ0RhdGUoKSxcblx0XHRcdFx0RDogZGF0ZXNbbGFuZ3VhZ2VdLmRheXNTaG9ydFtkYXRlLmdldFVUQ0RheSgpXSxcblx0XHRcdFx0REQ6IGRhdGVzW2xhbmd1YWdlXS5kYXlzW2RhdGUuZ2V0VVRDRGF5KCldLFxuXHRcdFx0XHRtOiBkYXRlLmdldFVUQ01vbnRoKCkgKyAxLFxuXHRcdFx0XHRNOiBkYXRlc1tsYW5ndWFnZV0ubW9udGhzU2hvcnRbZGF0ZS5nZXRVVENNb250aCgpXSxcblx0XHRcdFx0TU06IGRhdGVzW2xhbmd1YWdlXS5tb250aHNbZGF0ZS5nZXRVVENNb250aCgpXSxcblx0XHRcdFx0eXk6IGRhdGUuZ2V0VVRDRnVsbFllYXIoKS50b1N0cmluZygpLnN1YnN0cmluZygyKSxcblx0XHRcdFx0eXl5eTogZGF0ZS5nZXRVVENGdWxsWWVhcigpXG5cdFx0XHR9O1xuXHRcdFx0dmFsLmRkID0gKHZhbC5kIDwgMTAgPyAnMCcgOiAnJykgKyB2YWwuZDtcblx0XHRcdHZhbC5tbSA9ICh2YWwubSA8IDEwID8gJzAnIDogJycpICsgdmFsLm07XG5cdFx0XHRkYXRlID0gW107XG5cdFx0XHR2YXIgc2VwcyA9ICQuZXh0ZW5kKFtdLCBmb3JtYXQuc2VwYXJhdG9ycyk7XG5cdFx0XHRmb3IgKHZhciBpPTAsIGNudCA9IGZvcm1hdC5wYXJ0cy5sZW5ndGg7IGkgPD0gY250OyBpKyspe1xuXHRcdFx0XHRpZiAoc2Vwcy5sZW5ndGgpXG5cdFx0XHRcdFx0ZGF0ZS5wdXNoKHNlcHMuc2hpZnQoKSk7XG5cdFx0XHRcdGRhdGUucHVzaCh2YWxbZm9ybWF0LnBhcnRzW2ldXSk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gZGF0ZS5qb2luKCcnKTtcblx0XHR9LFxuXHRcdGhlYWRUZW1wbGF0ZTogJzx0aGVhZD4nK1xuXHRcdFx0ICAgICAgICAgICAgICAnPHRyPicrXG5cdFx0XHQgICAgICAgICAgICAgICAgJzx0aCBjb2xzcGFuPVwiN1wiIGNsYXNzPVwiZGF0ZXBpY2tlci10aXRsZVwiPjwvdGg+Jytcblx0XHRcdCAgICAgICAgICAgICAgJzwvdHI+Jytcblx0XHRcdFx0XHRcdFx0Jzx0cj4nK1xuXHRcdFx0XHRcdFx0XHRcdCc8dGggY2xhc3M9XCJwcmV2XCI+JytkZWZhdWx0cy50ZW1wbGF0ZXMubGVmdEFycm93Kyc8L3RoPicrXG5cdFx0XHRcdFx0XHRcdFx0Jzx0aCBjb2xzcGFuPVwiNVwiIGNsYXNzPVwiZGF0ZXBpY2tlci1zd2l0Y2hcIj48L3RoPicrXG5cdFx0XHRcdFx0XHRcdFx0Jzx0aCBjbGFzcz1cIm5leHRcIj4nK2RlZmF1bHRzLnRlbXBsYXRlcy5yaWdodEFycm93Kyc8L3RoPicrXG5cdFx0XHRcdFx0XHRcdCc8L3RyPicrXG5cdFx0XHRcdFx0XHQnPC90aGVhZD4nLFxuXHRcdGNvbnRUZW1wbGF0ZTogJzx0Ym9keT48dHI+PHRkIGNvbHNwYW49XCI3XCI+PC90ZD48L3RyPjwvdGJvZHk+Jyxcblx0XHRmb290VGVtcGxhdGU6ICc8dGZvb3Q+Jytcblx0XHRcdFx0XHRcdFx0Jzx0cj4nK1xuXHRcdFx0XHRcdFx0XHRcdCc8dGggY29sc3Bhbj1cIjdcIiBjbGFzcz1cInRvZGF5XCI+PC90aD4nK1xuXHRcdFx0XHRcdFx0XHQnPC90cj4nK1xuXHRcdFx0XHRcdFx0XHQnPHRyPicrXG5cdFx0XHRcdFx0XHRcdFx0Jzx0aCBjb2xzcGFuPVwiN1wiIGNsYXNzPVwiY2xlYXJcIj48L3RoPicrXG5cdFx0XHRcdFx0XHRcdCc8L3RyPicrXG5cdFx0XHRcdFx0XHQnPC90Zm9vdD4nXG5cdH07XG5cdERQR2xvYmFsLnRlbXBsYXRlID0gJzxkaXYgY2xhc3M9XCJkYXRlcGlja2VyXCI+Jytcblx0XHRcdFx0XHRcdFx0JzxkaXYgY2xhc3M9XCJkYXRlcGlja2VyLWRheXNcIj4nK1xuXHRcdFx0XHRcdFx0XHRcdCc8dGFibGUgY2xhc3M9XCJ0YWJsZS1jb25kZW5zZWRcIj4nK1xuXHRcdFx0XHRcdFx0XHRcdFx0RFBHbG9iYWwuaGVhZFRlbXBsYXRlK1xuXHRcdFx0XHRcdFx0XHRcdFx0Jzx0Ym9keT48L3Rib2R5PicrXG5cdFx0XHRcdFx0XHRcdFx0XHREUEdsb2JhbC5mb290VGVtcGxhdGUrXG5cdFx0XHRcdFx0XHRcdFx0JzwvdGFibGU+Jytcblx0XHRcdFx0XHRcdFx0JzwvZGl2PicrXG5cdFx0XHRcdFx0XHRcdCc8ZGl2IGNsYXNzPVwiZGF0ZXBpY2tlci1tb250aHNcIj4nK1xuXHRcdFx0XHRcdFx0XHRcdCc8dGFibGUgY2xhc3M9XCJ0YWJsZS1jb25kZW5zZWRcIj4nK1xuXHRcdFx0XHRcdFx0XHRcdFx0RFBHbG9iYWwuaGVhZFRlbXBsYXRlK1xuXHRcdFx0XHRcdFx0XHRcdFx0RFBHbG9iYWwuY29udFRlbXBsYXRlK1xuXHRcdFx0XHRcdFx0XHRcdFx0RFBHbG9iYWwuZm9vdFRlbXBsYXRlK1xuXHRcdFx0XHRcdFx0XHRcdCc8L3RhYmxlPicrXG5cdFx0XHRcdFx0XHRcdCc8L2Rpdj4nK1xuXHRcdFx0XHRcdFx0XHQnPGRpdiBjbGFzcz1cImRhdGVwaWNrZXIteWVhcnNcIj4nK1xuXHRcdFx0XHRcdFx0XHRcdCc8dGFibGUgY2xhc3M9XCJ0YWJsZS1jb25kZW5zZWRcIj4nK1xuXHRcdFx0XHRcdFx0XHRcdFx0RFBHbG9iYWwuaGVhZFRlbXBsYXRlK1xuXHRcdFx0XHRcdFx0XHRcdFx0RFBHbG9iYWwuY29udFRlbXBsYXRlK1xuXHRcdFx0XHRcdFx0XHRcdFx0RFBHbG9iYWwuZm9vdFRlbXBsYXRlK1xuXHRcdFx0XHRcdFx0XHRcdCc8L3RhYmxlPicrXG5cdFx0XHRcdFx0XHRcdCc8L2Rpdj4nK1xuXHRcdFx0XHRcdFx0XHQnPGRpdiBjbGFzcz1cImRhdGVwaWNrZXItZGVjYWRlc1wiPicrXG5cdFx0XHRcdFx0XHRcdFx0Jzx0YWJsZSBjbGFzcz1cInRhYmxlLWNvbmRlbnNlZFwiPicrXG5cdFx0XHRcdFx0XHRcdFx0XHREUEdsb2JhbC5oZWFkVGVtcGxhdGUrXG5cdFx0XHRcdFx0XHRcdFx0XHREUEdsb2JhbC5jb250VGVtcGxhdGUrXG5cdFx0XHRcdFx0XHRcdFx0XHREUEdsb2JhbC5mb290VGVtcGxhdGUrXG5cdFx0XHRcdFx0XHRcdFx0JzwvdGFibGU+Jytcblx0XHRcdFx0XHRcdFx0JzwvZGl2PicrXG5cdFx0XHRcdFx0XHRcdCc8ZGl2IGNsYXNzPVwiZGF0ZXBpY2tlci1jZW50dXJpZXNcIj4nK1xuXHRcdFx0XHRcdFx0XHRcdCc8dGFibGUgY2xhc3M9XCJ0YWJsZS1jb25kZW5zZWRcIj4nK1xuXHRcdFx0XHRcdFx0XHRcdFx0RFBHbG9iYWwuaGVhZFRlbXBsYXRlK1xuXHRcdFx0XHRcdFx0XHRcdFx0RFBHbG9iYWwuY29udFRlbXBsYXRlK1xuXHRcdFx0XHRcdFx0XHRcdFx0RFBHbG9iYWwuZm9vdFRlbXBsYXRlK1xuXHRcdFx0XHRcdFx0XHRcdCc8L3RhYmxlPicrXG5cdFx0XHRcdFx0XHRcdCc8L2Rpdj4nK1xuXHRcdFx0XHRcdFx0JzwvZGl2Pic7XG5cblx0JC5mbi5kYXRlcGlja2VyLkRQR2xvYmFsID0gRFBHbG9iYWw7XG5cblxuXHQvKiBEQVRFUElDS0VSIE5PIENPTkZMSUNUXG5cdCogPT09PT09PT09PT09PT09PT09PSAqL1xuXG5cdCQuZm4uZGF0ZXBpY2tlci5ub0NvbmZsaWN0ID0gZnVuY3Rpb24oKXtcblx0XHQkLmZuLmRhdGVwaWNrZXIgPSBvbGQ7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH07XG5cblx0LyogREFURVBJQ0tFUiBWRVJTSU9OXG5cdCAqID09PT09PT09PT09PT09PT09PT0gKi9cblx0JC5mbi5kYXRlcGlja2VyLnZlcnNpb24gPSAnMS44LjAnO1xuXG5cdCQuZm4uZGF0ZXBpY2tlci5kZXByZWNhdGVkID0gZnVuY3Rpb24obXNnKXtcblx0XHR2YXIgY29uc29sZSA9IHdpbmRvdy5jb25zb2xlO1xuXHRcdGlmIChjb25zb2xlICYmIGNvbnNvbGUud2Fybikge1xuXHRcdFx0Y29uc29sZS53YXJuKCdERVBSRUNBVEVEOiAnICsgbXNnKTtcblx0XHR9XG5cdH07XG5cblxuXHQvKiBEQVRFUElDS0VSIERBVEEtQVBJXG5cdCogPT09PT09PT09PT09PT09PT09ICovXG5cblx0JChkb2N1bWVudCkub24oXG5cdFx0J2ZvY3VzLmRhdGVwaWNrZXIuZGF0YS1hcGkgY2xpY2suZGF0ZXBpY2tlci5kYXRhLWFwaScsXG5cdFx0J1tkYXRhLXByb3ZpZGU9XCJkYXRlcGlja2VyXCJdJyxcblx0XHRmdW5jdGlvbihlKXtcblx0XHRcdHZhciAkdGhpcyA9ICQodGhpcyk7XG5cdFx0XHRpZiAoJHRoaXMuZGF0YSgnZGF0ZXBpY2tlcicpKVxuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHQvLyBjb21wb25lbnQgY2xpY2sgcmVxdWlyZXMgdXMgdG8gZXhwbGljaXRseSBzaG93IGl0XG5cdFx0XHRkYXRlcGlja2VyUGx1Z2luLmNhbGwoJHRoaXMsICdzaG93Jyk7XG5cdFx0fVxuXHQpO1xuXHQkKGZ1bmN0aW9uKCl7XG5cdFx0ZGF0ZXBpY2tlclBsdWdpbi5jYWxsKCQoJ1tkYXRhLXByb3ZpZGU9XCJkYXRlcGlja2VyLWlubGluZVwiXScpKTtcblx0fSk7XG5cbn0pKTtcbiJdLCJuYW1lcyI6WyJmYWN0b3J5IiwiZGVmaW5lIiwiYW1kIiwiZXhwb3J0cyIsIl90eXBlb2YiLCJyZXF1aXJlIiwialF1ZXJ5IiwiJCIsInVuZGVmaW5lZCIsIlVUQ0RhdGUiLCJEYXRlIiwiVVRDIiwiYXBwbHkiLCJhcmd1bWVudHMiLCJVVENUb2RheSIsInRvZGF5IiwiZ2V0RnVsbFllYXIiLCJnZXRNb250aCIsImdldERhdGUiLCJpc1VUQ0VxdWFscyIsImRhdGUxIiwiZGF0ZTIiLCJnZXRVVENGdWxsWWVhciIsImdldFVUQ01vbnRoIiwiZ2V0VVRDRGF0ZSIsImFsaWFzIiwibWV0aG9kIiwiZGVwcmVjYXRpb25Nc2ciLCJmbiIsImRhdGVwaWNrZXIiLCJkZXByZWNhdGVkIiwiaXNWYWxpZERhdGUiLCJkIiwiaXNOYU4iLCJnZXRUaW1lIiwiRGF0ZUFycmF5IiwiZXh0cmFzIiwiZ2V0IiwiaSIsInNsaWNlIiwiY29udGFpbnMiLCJ2YWwiLCJ2YWx1ZU9mIiwibCIsImxlbmd0aCIsInJlbW92ZSIsInNwbGljZSIsInJlcGxhY2UiLCJuZXdfYXJyYXkiLCJpc0FycmF5IiwiY2xlYXIiLCJwdXNoIiwiY29weSIsImEiLCJleHRlbmQiLCJEYXRlcGlja2VyIiwiZWxlbWVudCIsIm9wdGlvbnMiLCJkYXRhIiwiX3Byb2Nlc3Nfb3B0aW9ucyIsImRhdGVzIiwidmlld0RhdGUiLCJvIiwiZGVmYXVsdFZpZXdEYXRlIiwiZm9jdXNEYXRlIiwiaXNJbnB1dCIsImlzIiwiaW5wdXRGaWVsZCIsImZpbmQiLCJjb21wb25lbnQiLCJoYXNDbGFzcyIsImlzSW5saW5lIiwicGlja2VyIiwiRFBHbG9iYWwiLCJ0ZW1wbGF0ZSIsIl9jaGVja190ZW1wbGF0ZSIsInRlbXBsYXRlcyIsImxlZnRBcnJvdyIsImh0bWwiLCJyaWdodEFycm93IiwiX2J1aWxkRXZlbnRzIiwiX2F0dGFjaEV2ZW50cyIsImFkZENsYXNzIiwiYXBwZW5kVG8iLCJydGwiLCJjYWxlbmRhcldlZWtzIiwiYXR0ciIsIk51bWJlciIsInN0YXJ0RGF0ZSIsIl9vIiwiZW5kRGF0ZSIsImRheXNPZldlZWtEaXNhYmxlZCIsImRheXNPZldlZWtIaWdobGlnaHRlZCIsImRhdGVzRGlzYWJsZWQiLCJfYWxsb3dfdXBkYXRlIiwic2V0Vmlld01vZGUiLCJzdGFydFZpZXciLCJmaWxsRG93IiwiZmlsbE1vbnRocyIsInVwZGF0ZSIsInNob3ciLCJwcm90b3R5cGUiLCJjb25zdHJ1Y3RvciIsIl9yZXNvbHZlVmlld05hbWUiLCJ2aWV3IiwiZWFjaCIsInZpZXdNb2RlcyIsInZpZXdNb2RlIiwiaW5BcnJheSIsIm5hbWVzIiwiX3Jlc29sdmVEYXlzT2ZXZWVrIiwiZGF5c09mV2VlayIsInNwbGl0IiwibWFwIiwidG1wIiwibWF0Y2giLCJqRG9tIiwiZXgiLCJvcHRzIiwibGFuZyIsImxhbmd1YWdlIiwiZGVmYXVsdHMiLCJtaW5WaWV3TW9kZSIsIm1heFZpZXdNb2RlIiwiTWF0aCIsIm1heCIsIm1pbiIsIm11bHRpZGF0ZSIsIm11bHRpZGF0ZVNlcGFyYXRvciIsIlN0cmluZyIsIndlZWtTdGFydCIsIndlZWtFbmQiLCJmb3JtYXQiLCJwYXJzZUZvcm1hdCIsIkluZmluaXR5IiwiX2xvY2FsX3RvX3V0YyIsIl96ZXJvX3RpbWUiLCJwYXJzZURhdGUiLCJhc3N1bWVOZWFyYnlZZWFyIiwicGxjIiwib3JpZW50YXRpb24iLCJ0b0xvd2VyQ2FzZSIsIl9wbGMiLCJncmVwIiwid29yZCIsInRlc3QiLCJ4IiwieSIsInllYXIiLCJtb250aCIsImRheSIsIl9ldmVudHMiLCJfc2Vjb25kYXJ5RXZlbnRzIiwiX2FwcGx5RXZlbnRzIiwiZXZzIiwiZWwiLCJjaCIsImV2Iiwib24iLCJfdW5hcHBseUV2ZW50cyIsIm9mZiIsImV2ZW50cyIsImtleXVwIiwicHJveHkiLCJlIiwia2V5Q29kZSIsImtleWRvd24iLCJwYXN0ZSIsInNob3dPbkZvY3VzIiwiZm9jdXMiLCJjbGljayIsImJsdXIiLCJfZm9jdXNlZF9mcm9tIiwidGFyZ2V0IiwiaW1tZWRpYXRlVXBkYXRlcyIsImRhdGUiLCJuYXZBcnJvd3NDbGljayIsImRheUNlbGxDbGljayIsIndpbmRvdyIsInJlc2l6ZSIsInBsYWNlIiwiZG9jdW1lbnQiLCJoaWRlIiwiX2RldGFjaEV2ZW50cyIsIl9hdHRhY2hTZWNvbmRhcnlFdmVudHMiLCJfZGV0YWNoU2Vjb25kYXJ5RXZlbnRzIiwiX3RyaWdnZXIiLCJldmVudCIsImFsdGRhdGUiLCJsb2NhbF9kYXRlIiwiX3V0Y190b19sb2NhbCIsInRyaWdnZXIiLCJ0eXBlIiwiaXgiLCJmb3JtYXREYXRlIiwicHJvcCIsImVuYWJsZU9uUmVhZG9ubHkiLCJjb250YWluZXIiLCJuYXZpZ2F0b3IiLCJtc01heFRvdWNoUG9pbnRzIiwiZGlzYWJsZVRvdWNoS2V5Ym9hcmQiLCJkZXRhY2giLCJmb3JjZVBhcnNlIiwic2V0VmFsdWUiLCJkZXN0cm95IiwiZGF0ZVN0cmluZyIsIm9yaWdpbmFsRXZlbnQiLCJjbGlwYm9hcmREYXRhIiwidHlwZXMiLCJnZXREYXRhIiwic2V0RGF0ZSIsInByZXZlbnREZWZhdWx0IiwidXRjIiwibG9jYWwiLCJnZXRUaW1lem9uZU9mZnNldCIsIl96ZXJvX3V0Y190aW1lIiwiZ2V0RGF0ZXMiLCJnZXRVVENEYXRlcyIsInNlbGVjdGVkX2RhdGUiLCJjbGVhckRhdGVzIiwiYXV0b2Nsb3NlIiwic2V0RGF0ZXMiLCJhcmdzIiwic2V0VVRDRGF0ZXMiLCJzZXRVVENEYXRlIiwiZm9ybWF0dGVkIiwiZ2V0Rm9ybWF0dGVkRGF0ZSIsImpvaW4iLCJnZXRTdGFydERhdGUiLCJzZXRTdGFydERhdGUiLCJ1cGRhdGVOYXZBcnJvd3MiLCJnZXRFbmREYXRlIiwic2V0RW5kRGF0ZSIsInNldERheXNPZldlZWtEaXNhYmxlZCIsInNldERheXNPZldlZWtIaWdobGlnaHRlZCIsInNldERhdGVzRGlzYWJsZWQiLCJjYWxlbmRhcldpZHRoIiwib3V0ZXJXaWR0aCIsImNhbGVuZGFySGVpZ2h0Iiwib3V0ZXJIZWlnaHQiLCJ2aXN1YWxQYWRkaW5nIiwid2luZG93V2lkdGgiLCJ3aWR0aCIsInNjcm9sbFRvcCIsImFwcGVuZE9mZnNldCIsIm9mZnNldCIsInBhcmVudHNaaW5kZXgiLCJwYXJlbnRzIiwiaXRlbVpJbmRleCIsImNzcyIsInpJbmRleCIsInpJbmRleE9mZnNldCIsInBhcmVudCIsImhlaWdodCIsImxlZnQiLCJ0b3AiLCJyZW1vdmVDbGFzcyIsInlvcmllbnQiLCJ0b3Bfb3ZlcmZsb3ciLCJwYXJzZUludCIsInJpZ2h0Iiwib2xkRGF0ZXMiLCJmcm9tQXJncyIsImRhdGVXaXRoaW5SYW5nZSIsInVwZGF0ZVZpZXdEYXRlIiwiY2hhbmdlIiwiZmlsbCIsInNob3dXZWVrRGF5cyIsImRvd0NudCIsImRheXNNaW4iLCJhcHBlbmQiLCJsb2NhbERhdGUiLCJmb2N1c2VkIiwibW9udGhzU2hvcnQiLCJzZXRSYW5nZSIsInJhbmdlIiwiZ2V0Q2xhc3NOYW1lcyIsImNscyIsInRvZGF5SGlnaGxpZ2h0IiwiZGF0ZUlzRGlzYWJsZWQiLCJnZXRVVENEYXkiLCJfZmlsbF95ZWFyc1ZpZXciLCJzZWxlY3RvciIsImNzc0NsYXNzIiwiZmFjdG9yIiwic3RhcnRZZWFyIiwiZW5kWWVhciIsImJlZm9yZUZuIiwic3RlcCIsInN0YXJ0VmFsIiwiZmxvb3IiLCJlbmRWYWwiLCJmb2N1c2VkVmFsIiwic2VsZWN0ZWQiLCJjbGFzc2VzIiwidG9vbHRpcCIsImJlZm9yZSIsImN1cnJWYWwiLCJub29wIiwiZW5hYmxlZCIsImNvbmNhdCIsInRleHQiLCJzdGFydE1vbnRoIiwiZW5kTW9udGgiLCJ0b2RheXR4dCIsImNsZWFydHh0IiwidGl0bGVGb3JtYXQiLCJ0b2RheUJ0biIsImNsZWFyQnRuIiwidGl0bGUiLCJwcmV2TW9udGgiLCJuZXh0TW9udGgiLCJzZXRVVENGdWxsWWVhciIsIndlZWtEYXkiLCJjbHNOYW1lIiwid3MiLCJ0aCIsInl0aCIsImNhbFdlZWsiLCJjb250ZW50IiwiYmVmb3JlU2hvd0RheSIsImlzRnVuY3Rpb24iLCJ1bmlxdWVTb3J0IiwidW5pcXVlIiwidG9TdHJpbmciLCJtb250aHNUaXRsZSIsIm1vbnRocyIsImVuZCIsImVxIiwiYmVmb3JlU2hvd01vbnRoIiwidGhhdCIsIm1vRGF0ZSIsImJlZm9yZVNob3dZZWFyIiwiYmVmb3JlU2hvd0RlY2FkZSIsImJlZm9yZVNob3dDZW50dXJ5IiwicHJldklzRGlzYWJsZWQiLCJuZXh0SXNEaXNhYmxlZCIsInRvZ2dsZUNsYXNzIiwic3RvcFByb3BhZ2F0aW9uIiwiZGlyIiwiX3NldERhdGUiLCJpbmRleCIsInNldFVUQ01vbnRoIiwiJHRhcmdldCIsImN1cnJlbnRUYXJnZXQiLCJ0aW1lc3RhbXAiLCJuYXZTdGVwIiwibW92ZU1vbnRoIiwiX3RvZ2dsZV9tdWx0aWRhdGUiLCJ0b2dnbGVBY3RpdmUiLCJ3aGljaCIsIm1vdmVEYXkiLCJuZXdEYXRlIiwibW92ZVdlZWsiLCJuZXdfZGF0ZSIsIm1hZyIsImFicyIsIm5ld19tb250aCIsIm1vdmVZZWFyIiwibW92ZUF2YWlsYWJsZURhdGUiLCJ3ZWVrT2ZEYXRlSXNEaXNhYmxlZCIsImRhdGVDaGFuZ2VkIiwibmV3Vmlld0RhdGUiLCJrZXlib2FyZE5hdmlnYXRpb24iLCJjdHJsS2V5Iiwic2hpZnRLZXkiLCJjaGlsZHJlbiIsImZpbHRlciIsIkRhdGVSYW5nZVBpY2tlciIsImlucHV0cyIsImpxdWVyeSIsImtlZXBFbXB0eVZhbHVlcyIsImRhdGVwaWNrZXJQbHVnaW4iLCJjYWxsIiwiZGF0ZVVwZGF0ZWQiLCJwaWNrZXJzIiwidXBkYXRlRGF0ZXMiLCJ1cGRhdGVSYW5nZXMiLCJwIiwidXBkYXRpbmciLCJkcCIsImtlZXBfZW1wdHlfdmFsdWVzIiwiaiIsImsiLCJvcHRzX2Zyb21fZWwiLCJwcmVmaXgiLCJvdXQiLCJpbmtleSIsIlJlZ0V4cCIsInJlX2xvd2VyIiwiXyIsImtleSIsIm9wdHNfZnJvbV9sb2NhbGUiLCJsb2NhbGVfb3B0cyIsIm9sZCIsIm9wdGlvbiIsIkFycmF5Iiwic2hpZnQiLCJpbnRlcm5hbF9yZXR1cm4iLCIkdGhpcyIsImVsb3B0cyIsInhvcHRzIiwibG9jb3B0cyIsInRvQXJyYXkiLCJFcnJvciIsIkNvbnN0cnVjdG9yIiwiZW4iLCJkYXlzIiwiZGF5c1Nob3J0IiwidmFsaWRQYXJ0cyIsIm5vbnB1bmN0dWF0aW9uIiwidG9WYWx1ZSIsInRvRGlzcGxheSIsInNlcGFyYXRvcnMiLCJwYXJ0cyIsImFzc3VtZU5lYXJieSIsImZuX21hcCIsIm0iLCJ3IiwiZGF0ZUFsaWFzZXMiLCJ5ZXN0ZXJkYXkiLCJ0b21vcnJvdyIsInBhcnQiLCJhcHBseU5lYXJieVllYXIiLCJ0aHJlc2hvbGQiLCJwYXJzZWQiLCJzZXR0ZXJzX29yZGVyIiwic2V0dGVyc19tYXAiLCJ5eXl5IiwidiIsImZpbHRlcmVkIiwiZnBhcnRzIiwibWF0Y2hfcGFydCIsImNudCIsIl9kYXRlIiwicyIsIkQiLCJERCIsIk0iLCJNTSIsInl5Iiwic3Vic3RyaW5nIiwiZGQiLCJtbSIsInNlcHMiLCJoZWFkVGVtcGxhdGUiLCJjb250VGVtcGxhdGUiLCJmb290VGVtcGxhdGUiLCJub0NvbmZsaWN0IiwidmVyc2lvbiIsIm1zZyIsImNvbnNvbGUiLCJ3YXJuIl0sInNvdXJjZVJvb3QiOiIifQ==