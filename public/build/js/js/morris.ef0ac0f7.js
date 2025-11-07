(self["webpackChunk"] = self["webpackChunk"] || []).push([["js/morris"],{

/***/ "./assets/css/portoadmin/vendor/morris/morris.js":
/*!*******************************************************!*\
  !*** ./assets/css/portoadmin/vendor/morris/morris.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

/* provided dependency */ var jQuery = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
__webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
__webpack_require__(/*! core-js/modules/es.array.index-of.js */ "./node_modules/core-js/modules/es.array.index-of.js");
__webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
__webpack_require__(/*! core-js/modules/es.array.reverse.js */ "./node_modules/core-js/modules/es.array.reverse.js");
__webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
__webpack_require__(/*! core-js/modules/es.array.sort.js */ "./node_modules/core-js/modules/es.array.sort.js");
__webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
__webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
__webpack_require__(/*! core-js/modules/es.number.to-fixed.js */ "./node_modules/core-js/modules/es.number.to-fixed.js");
__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
__webpack_require__(/*! core-js/modules/es.parse-float.js */ "./node_modules/core-js/modules/es.parse-float.js");
__webpack_require__(/*! core-js/modules/es.parse-int.js */ "./node_modules/core-js/modules/es.parse-int.js");
__webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
__webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
__webpack_require__(/*! core-js/modules/es.string.match.js */ "./node_modules/core-js/modules/es.string.match.js");
__webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
__webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
__webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
/* @license
morris.js v0.5.0
Copyright 2014 Olly Smith All rights reserved.
Licensed under the BSD-2-Clause License.
*/

(function () {
  var $,
    Morris,
    minutesSpecHelper,
    secondsSpecHelper,
    __slice = [].slice,
    __bind = function __bind(fn, me) {
      return function () {
        return fn.apply(me, arguments);
      };
    },
    __hasProp = {}.hasOwnProperty,
    __extends = function __extends(child, parent) {
      for (var key in parent) {
        if (__hasProp.call(parent, key)) child[key] = parent[key];
      }
      function ctor() {
        this.constructor = child;
      }
      ctor.prototype = parent.prototype;
      child.prototype = new ctor();
      child.__super__ = parent.prototype;
      return child;
    },
    __indexOf = [].indexOf || function (item) {
      for (var i = 0, l = this.length; i < l; i++) {
        if (i in this && this[i] === item) return i;
      }
      return -1;
    };
  Morris = window.Morris = {};
  $ = jQuery;
  Morris.EventEmitter = function () {
    function EventEmitter() {}
    EventEmitter.prototype.on = function (name, handler) {
      if (this.handlers == null) {
        this.handlers = {};
      }
      if (this.handlers[name] == null) {
        this.handlers[name] = [];
      }
      this.handlers[name].push(handler);
      return this;
    };
    EventEmitter.prototype.fire = function () {
      var args, handler, name, _i, _len, _ref, _results;
      name = arguments[0], args = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
      if (this.handlers != null && this.handlers[name] != null) {
        _ref = this.handlers[name];
        _results = [];
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          handler = _ref[_i];
          _results.push(handler.apply(null, args));
        }
        return _results;
      }
    };
    return EventEmitter;
  }();
  Morris.commas = function (num) {
    var absnum, intnum, ret, strabsnum;
    if (num != null) {
      ret = num < 0 ? "-" : "";
      absnum = Math.abs(num);
      intnum = Math.floor(absnum).toFixed(0);
      ret += intnum.replace(/(?=(?:\d{3})+$)(?!^)/g, ',');
      strabsnum = absnum.toString();
      if (strabsnum.length > intnum.length) {
        ret += strabsnum.slice(intnum.length);
      }
      return ret;
    } else {
      return '-';
    }
  };
  Morris.pad2 = function (number) {
    return (number < 10 ? '0' : '') + number;
  };
  Morris.Grid = function (_super) {
    __extends(Grid, _super);
    function Grid(options) {
      this.resizeHandler = __bind(this.resizeHandler, this);
      var _this = this;
      if (typeof options.element === 'string') {
        this.el = $(document.getElementById(options.element));
      } else {
        this.el = $(options.element);
      }
      if (this.el == null || this.el.length === 0) {
        throw new Error("Graph container element not found");
      }
      if (this.el.css('position') === 'static') {
        this.el.css('position', 'relative');
      }
      this.options = $.extend({}, this.gridDefaults, this.defaults || {}, options);
      if (typeof this.options.units === 'string') {
        this.options.postUnits = options.units;
      }
      this.raphael = new Raphael(this.el[0]);
      this.elementWidth = null;
      this.elementHeight = null;
      this.dirty = false;
      this.selectFrom = null;
      if (this.init) {
        this.init();
      }
      this.setData(this.options.data);
      this.el.bind('mousemove', function (evt) {
        var left, offset, right, width, x;
        offset = _this.el.offset();
        x = evt.pageX - offset.left;
        if (_this.selectFrom) {
          left = _this.data[_this.hitTest(Math.min(x, _this.selectFrom))]._x;
          right = _this.data[_this.hitTest(Math.max(x, _this.selectFrom))]._x;
          width = right - left;
          return _this.selectionRect.attr({
            x: left,
            width: width
          });
        } else {
          return _this.fire('hovermove', x, evt.pageY - offset.top);
        }
      });
      this.el.bind('mouseleave', function (evt) {
        if (_this.selectFrom) {
          _this.selectionRect.hide();
          _this.selectFrom = null;
        }
        return _this.fire('hoverout');
      });
      this.el.bind('touchstart touchmove touchend', function (evt) {
        var offset, touch;
        touch = evt.originalEvent.touches[0] || evt.originalEvent.changedTouches[0];
        offset = _this.el.offset();
        return _this.fire('hovermove', touch.pageX - offset.left, touch.pageY - offset.top);
      });
      this.el.bind('click', function (evt) {
        var offset;
        offset = _this.el.offset();
        return _this.fire('gridclick', evt.pageX - offset.left, evt.pageY - offset.top);
      });
      if (this.options.rangeSelect) {
        this.selectionRect = this.raphael.rect(0, 0, 0, this.el.innerHeight()).attr({
          fill: this.options.rangeSelectColor,
          stroke: false
        }).toBack().hide();
        this.el.bind('mousedown', function (evt) {
          var offset;
          offset = _this.el.offset();
          return _this.startRange(evt.pageX - offset.left);
        });
        this.el.bind('mouseup', function (evt) {
          var offset;
          offset = _this.el.offset();
          _this.endRange(evt.pageX - offset.left);
          return _this.fire('hovermove', evt.pageX - offset.left, evt.pageY - offset.top);
        });
      }
      if (this.options.resize) {
        $(window).bind('resize', function (evt) {
          if (_this.timeoutId != null) {
            window.clearTimeout(_this.timeoutId);
          }
          return _this.timeoutId = window.setTimeout(_this.resizeHandler, 100);
        });
      }
      this.el.css('-webkit-tap-highlight-color', 'rgba(0,0,0,0)');
      if (this.postInit) {
        this.postInit();
      }
    }
    Grid.prototype.gridDefaults = {
      dateFormat: null,
      axes: true,
      grid: true,
      gridLineColor: '#aaa',
      gridStrokeWidth: 0.5,
      gridTextColor: '#888',
      gridTextSize: 12,
      gridTextFamily: 'sans-serif',
      gridTextWeight: 'normal',
      hideHover: false,
      yLabelFormat: null,
      xLabelAngle: 0,
      numLines: 5,
      padding: 25,
      parseTime: true,
      postUnits: '',
      preUnits: '',
      ymax: 'auto',
      ymin: 'auto 0',
      goals: [],
      goalStrokeWidth: 1.0,
      goalLineColors: ['#666633', '#999966', '#cc6666', '#663333'],
      events: [],
      eventStrokeWidth: 1.0,
      eventLineColors: ['#005a04', '#ccffbb', '#3a5f0b', '#005502'],
      rangeSelect: null,
      rangeSelectColor: '#eef',
      resize: false
    };
    Grid.prototype.setData = function (data, redraw) {
      var e, idx, index, maxGoal, minGoal, ret, row, step, total, y, ykey, ymax, ymin, yval, _ref;
      if (redraw == null) {
        redraw = true;
      }
      this.options.data = data;
      if (data == null || data.length === 0) {
        this.data = [];
        this.raphael.clear();
        if (this.hover != null) {
          this.hover.hide();
        }
        return;
      }
      ymax = this.cumulative ? 0 : null;
      ymin = this.cumulative ? 0 : null;
      if (this.options.goals.length > 0) {
        minGoal = Math.min.apply(Math, this.options.goals);
        maxGoal = Math.max.apply(Math, this.options.goals);
        ymin = ymin != null ? Math.min(ymin, minGoal) : minGoal;
        ymax = ymax != null ? Math.max(ymax, maxGoal) : maxGoal;
      }
      this.data = function () {
        var _i, _len, _results;
        _results = [];
        for (index = _i = 0, _len = data.length; _i < _len; index = ++_i) {
          row = data[index];
          ret = {
            src: row
          };
          ret.label = row[this.options.xkey];
          if (this.options.parseTime) {
            ret.x = Morris.parseDate(ret.label);
            if (this.options.dateFormat) {
              ret.label = this.options.dateFormat(ret.x);
            } else if (typeof ret.label === 'number') {
              ret.label = new Date(ret.label).toString();
            }
          } else {
            ret.x = index;
            if (this.options.xLabelFormat) {
              ret.label = this.options.xLabelFormat(ret);
            }
          }
          total = 0;
          ret.y = function () {
            var _j, _len1, _ref, _results1;
            _ref = this.options.ykeys;
            _results1 = [];
            for (idx = _j = 0, _len1 = _ref.length; _j < _len1; idx = ++_j) {
              ykey = _ref[idx];
              yval = row[ykey];
              if (typeof yval === 'string') {
                yval = parseFloat(yval);
              }
              if (yval != null && typeof yval !== 'number') {
                yval = null;
              }
              if (yval != null) {
                if (this.cumulative) {
                  total += yval;
                } else {
                  if (ymax != null) {
                    ymax = Math.max(yval, ymax);
                    ymin = Math.min(yval, ymin);
                  } else {
                    ymax = ymin = yval;
                  }
                }
              }
              if (this.cumulative && total != null) {
                ymax = Math.max(total, ymax);
                ymin = Math.min(total, ymin);
              }
              _results1.push(yval);
            }
            return _results1;
          }.call(this);
          _results.push(ret);
        }
        return _results;
      }.call(this);
      if (this.options.parseTime) {
        this.data = this.data.sort(function (a, b) {
          return (a.x > b.x) - (b.x > a.x);
        });
      }
      this.xmin = this.data[0].x;
      this.xmax = this.data[this.data.length - 1].x;
      this.events = [];
      if (this.options.events.length > 0) {
        if (this.options.parseTime) {
          this.events = function () {
            var _i, _len, _ref, _results;
            _ref = this.options.events;
            _results = [];
            for (_i = 0, _len = _ref.length; _i < _len; _i++) {
              e = _ref[_i];
              _results.push(Morris.parseDate(e));
            }
            return _results;
          }.call(this);
        } else {
          this.events = this.options.events;
        }
        this.xmax = Math.max(this.xmax, Math.max.apply(Math, this.events));
        this.xmin = Math.min(this.xmin, Math.min.apply(Math, this.events));
      }
      if (this.xmin === this.xmax) {
        this.xmin -= 1;
        this.xmax += 1;
      }
      this.ymin = this.yboundary('min', ymin);
      this.ymax = this.yboundary('max', ymax);
      if (this.ymin === this.ymax) {
        if (ymin) {
          this.ymin -= 1;
        }
        this.ymax += 1;
      }
      if ((_ref = this.options.axes) === true || _ref === 'both' || _ref === 'y' || this.options.grid === true) {
        if (this.options.ymax === this.gridDefaults.ymax && this.options.ymin === this.gridDefaults.ymin) {
          this.grid = this.autoGridLines(this.ymin, this.ymax, this.options.numLines);
          this.ymin = Math.min(this.ymin, this.grid[0]);
          this.ymax = Math.max(this.ymax, this.grid[this.grid.length - 1]);
        } else {
          step = (this.ymax - this.ymin) / (this.options.numLines - 1);
          this.grid = function () {
            var _i, _ref1, _ref2, _results;
            _results = [];
            for (y = _i = _ref1 = this.ymin, _ref2 = this.ymax; step > 0 ? _i <= _ref2 : _i >= _ref2; y = _i += step) {
              _results.push(y);
            }
            return _results;
          }.call(this);
        }
      }
      this.dirty = true;
      if (redraw) {
        return this.redraw();
      }
    };
    Grid.prototype.yboundary = function (boundaryType, currentValue) {
      var boundaryOption, suggestedValue;
      boundaryOption = this.options["y" + boundaryType];
      if (typeof boundaryOption === 'string') {
        if (boundaryOption.slice(0, 4) === 'auto') {
          if (boundaryOption.length > 5) {
            suggestedValue = parseInt(boundaryOption.slice(5), 10);
            if (currentValue == null) {
              return suggestedValue;
            }
            return Math[boundaryType](currentValue, suggestedValue);
          } else {
            if (currentValue != null) {
              return currentValue;
            } else {
              return 0;
            }
          }
        } else {
          return parseInt(boundaryOption, 10);
        }
      } else {
        return boundaryOption;
      }
    };
    Grid.prototype.autoGridLines = function (ymin, ymax, nlines) {
      var gmax, gmin, grid, smag, span, step, unit, y, ymag;
      span = ymax - ymin;
      ymag = Math.floor(Math.log(span) / Math.log(10));
      unit = Math.pow(10, ymag);
      gmin = Math.floor(ymin / unit) * unit;
      gmax = Math.ceil(ymax / unit) * unit;
      step = (gmax - gmin) / (nlines - 1);
      if (unit === 1 && step > 1 && Math.ceil(step) !== step) {
        step = Math.ceil(step);
        gmax = gmin + step * (nlines - 1);
      }
      if (gmin < 0 && gmax > 0) {
        gmin = Math.floor(ymin / step) * step;
        gmax = Math.ceil(ymax / step) * step;
      }
      if (step < 1) {
        smag = Math.floor(Math.log(step) / Math.log(10));
        grid = function () {
          var _i, _results;
          _results = [];
          for (y = _i = gmin; step > 0 ? _i <= gmax : _i >= gmax; y = _i += step) {
            _results.push(parseFloat(y.toFixed(1 - smag)));
          }
          return _results;
        }();
      } else {
        grid = function () {
          var _i, _results;
          _results = [];
          for (y = _i = gmin; step > 0 ? _i <= gmax : _i >= gmax; y = _i += step) {
            _results.push(y);
          }
          return _results;
        }();
      }
      return grid;
    };
    Grid.prototype._calc = function () {
      var bottomOffsets, gridLine, h, i, w, yLabelWidths, _ref, _ref1;
      w = this.el.width();
      h = this.el.height();
      if (this.elementWidth !== w || this.elementHeight !== h || this.dirty) {
        this.elementWidth = w;
        this.elementHeight = h;
        this.dirty = false;
        this.left = this.options.padding;
        this.right = this.elementWidth - this.options.padding;
        this.top = this.options.padding;
        this.bottom = this.elementHeight - this.options.padding;
        if ((_ref = this.options.axes) === true || _ref === 'both' || _ref === 'y') {
          yLabelWidths = function () {
            var _i, _len, _ref1, _results;
            _ref1 = this.grid;
            _results = [];
            for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
              gridLine = _ref1[_i];
              _results.push(this.measureText(this.yAxisFormat(gridLine)).width);
            }
            return _results;
          }.call(this);
          this.left += Math.max.apply(Math, yLabelWidths);
        }
        if ((_ref1 = this.options.axes) === true || _ref1 === 'both' || _ref1 === 'x') {
          bottomOffsets = function () {
            var _i, _ref2, _results;
            _results = [];
            for (i = _i = 0, _ref2 = this.data.length; 0 <= _ref2 ? _i < _ref2 : _i > _ref2; i = 0 <= _ref2 ? ++_i : --_i) {
              _results.push(this.measureText(this.data[i].text, -this.options.xLabelAngle).height);
            }
            return _results;
          }.call(this);
          this.bottom -= Math.max.apply(Math, bottomOffsets);
        }
        this.width = Math.max(1, this.right - this.left);
        this.height = Math.max(1, this.bottom - this.top);
        this.dx = this.width / (this.xmax - this.xmin);
        this.dy = this.height / (this.ymax - this.ymin);
        if (this.calc) {
          return this.calc();
        }
      }
    };
    Grid.prototype.transY = function (y) {
      return this.bottom - (y - this.ymin) * this.dy;
    };
    Grid.prototype.transX = function (x) {
      if (this.data.length === 1) {
        return (this.left + this.right) / 2;
      } else {
        return this.left + (x - this.xmin) * this.dx;
      }
    };
    Grid.prototype.redraw = function () {
      this.raphael.clear();
      this._calc();
      this.drawGrid();
      this.drawGoals();
      this.drawEvents();
      if (this.draw) {
        return this.draw();
      }
    };
    Grid.prototype.measureText = function (text, angle) {
      var ret, tt;
      if (angle == null) {
        angle = 0;
      }
      tt = this.raphael.text(100, 100, text).attr('font-size', this.options.gridTextSize).attr('font-family', this.options.gridTextFamily).attr('font-weight', this.options.gridTextWeight).rotate(angle);
      ret = tt.getBBox();
      tt.remove();
      return ret;
    };
    Grid.prototype.yAxisFormat = function (label) {
      return this.yLabelFormat(label);
    };
    Grid.prototype.yLabelFormat = function (label) {
      if (typeof this.options.yLabelFormat === 'function') {
        return this.options.yLabelFormat(label);
      } else {
        return "" + this.options.preUnits + Morris.commas(label) + this.options.postUnits;
      }
    };
    Grid.prototype.drawGrid = function () {
      var lineY, y, _i, _len, _ref, _ref1, _ref2, _results;
      if (this.options.grid === false && (_ref = this.options.axes) !== true && _ref !== 'both' && _ref !== 'y') {
        return;
      }
      _ref1 = this.grid;
      _results = [];
      for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
        lineY = _ref1[_i];
        y = this.transY(lineY);
        if ((_ref2 = this.options.axes) === true || _ref2 === 'both' || _ref2 === 'y') {
          this.drawYAxisLabel(this.left - this.options.padding / 2, y, this.yAxisFormat(lineY));
        }
        if (this.options.grid) {
          _results.push(this.drawGridLine("M" + this.left + "," + y + "H" + (this.left + this.width)));
        } else {
          _results.push(void 0);
        }
      }
      return _results;
    };
    Grid.prototype.drawGoals = function () {
      var color, goal, i, _i, _len, _ref, _results;
      _ref = this.options.goals;
      _results = [];
      for (i = _i = 0, _len = _ref.length; _i < _len; i = ++_i) {
        goal = _ref[i];
        color = this.options.goalLineColors[i % this.options.goalLineColors.length];
        _results.push(this.drawGoal(goal, color));
      }
      return _results;
    };
    Grid.prototype.drawEvents = function () {
      var color, event, i, _i, _len, _ref, _results;
      _ref = this.events;
      _results = [];
      for (i = _i = 0, _len = _ref.length; _i < _len; i = ++_i) {
        event = _ref[i];
        color = this.options.eventLineColors[i % this.options.eventLineColors.length];
        _results.push(this.drawEvent(event, color));
      }
      return _results;
    };
    Grid.prototype.drawGoal = function (goal, color) {
      return this.raphael.path("M" + this.left + "," + this.transY(goal) + "H" + this.right).attr('stroke', color).attr('stroke-width', this.options.goalStrokeWidth);
    };
    Grid.prototype.drawEvent = function (event, color) {
      return this.raphael.path("M" + this.transX(event) + "," + this.bottom + "V" + this.top).attr('stroke', color).attr('stroke-width', this.options.eventStrokeWidth);
    };
    Grid.prototype.drawYAxisLabel = function (xPos, yPos, text) {
      return this.raphael.text(xPos, yPos, text).attr('font-size', this.options.gridTextSize).attr('font-family', this.options.gridTextFamily).attr('font-weight', this.options.gridTextWeight).attr('fill', this.options.gridTextColor).attr('text-anchor', 'end');
    };
    Grid.prototype.drawGridLine = function (path) {
      return this.raphael.path(path).attr('stroke', this.options.gridLineColor).attr('stroke-width', this.options.gridStrokeWidth);
    };
    Grid.prototype.startRange = function (x) {
      this.hover.hide();
      this.selectFrom = x;
      return this.selectionRect.attr({
        x: x,
        width: 0
      }).show();
    };
    Grid.prototype.endRange = function (x) {
      var end, start;
      if (this.selectFrom) {
        start = Math.min(this.selectFrom, x);
        end = Math.max(this.selectFrom, x);
        this.options.rangeSelect.call(this.el, {
          start: this.data[this.hitTest(start)].x,
          end: this.data[this.hitTest(end)].x
        });
        return this.selectFrom = null;
      }
    };
    Grid.prototype.resizeHandler = function () {
      this.timeoutId = null;
      this.raphael.setSize(this.el.width(), this.el.height());
      return this.redraw();
    };
    return Grid;
  }(Morris.EventEmitter);
  Morris.parseDate = function (date) {
    var isecs, m, msecs, n, o, offsetmins, p, q, r, ret, secs;
    if (typeof date === 'number') {
      return date;
    }
    m = date.match(/^(\d+) Q(\d)$/);
    n = date.match(/^(\d+)-(\d+)$/);
    o = date.match(/^(\d+)-(\d+)-(\d+)$/);
    p = date.match(/^(\d+) W(\d+)$/);
    q = date.match(/^(\d+)-(\d+)-(\d+)[ T](\d+):(\d+)(Z|([+-])(\d\d):?(\d\d))?$/);
    r = date.match(/^(\d+)-(\d+)-(\d+)[ T](\d+):(\d+):(\d+(\.\d+)?)(Z|([+-])(\d\d):?(\d\d))?$/);
    if (m) {
      return new Date(parseInt(m[1], 10), parseInt(m[2], 10) * 3 - 1, 1).getTime();
    } else if (n) {
      return new Date(parseInt(n[1], 10), parseInt(n[2], 10) - 1, 1).getTime();
    } else if (o) {
      return new Date(parseInt(o[1], 10), parseInt(o[2], 10) - 1, parseInt(o[3], 10)).getTime();
    } else if (p) {
      ret = new Date(parseInt(p[1], 10), 0, 1);
      if (ret.getDay() !== 4) {
        ret.setMonth(0, 1 + (4 - ret.getDay() + 7) % 7);
      }
      return ret.getTime() + parseInt(p[2], 10) * 604800000;
    } else if (q) {
      if (!q[6]) {
        return new Date(parseInt(q[1], 10), parseInt(q[2], 10) - 1, parseInt(q[3], 10), parseInt(q[4], 10), parseInt(q[5], 10)).getTime();
      } else {
        offsetmins = 0;
        if (q[6] !== 'Z') {
          offsetmins = parseInt(q[8], 10) * 60 + parseInt(q[9], 10);
          if (q[7] === '+') {
            offsetmins = 0 - offsetmins;
          }
        }
        return Date.UTC(parseInt(q[1], 10), parseInt(q[2], 10) - 1, parseInt(q[3], 10), parseInt(q[4], 10), parseInt(q[5], 10) + offsetmins);
      }
    } else if (r) {
      secs = parseFloat(r[6]);
      isecs = Math.floor(secs);
      msecs = Math.round((secs - isecs) * 1000);
      if (!r[8]) {
        return new Date(parseInt(r[1], 10), parseInt(r[2], 10) - 1, parseInt(r[3], 10), parseInt(r[4], 10), parseInt(r[5], 10), isecs, msecs).getTime();
      } else {
        offsetmins = 0;
        if (r[8] !== 'Z') {
          offsetmins = parseInt(r[10], 10) * 60 + parseInt(r[11], 10);
          if (r[9] === '+') {
            offsetmins = 0 - offsetmins;
          }
        }
        return Date.UTC(parseInt(r[1], 10), parseInt(r[2], 10) - 1, parseInt(r[3], 10), parseInt(r[4], 10), parseInt(r[5], 10) + offsetmins, isecs, msecs);
      }
    } else {
      return new Date(parseInt(date, 10), 0, 1).getTime();
    }
  };
  Morris.Hover = function () {
    Hover.defaults = {
      "class": 'morris-hover morris-default-style'
    };
    function Hover(options) {
      if (options == null) {
        options = {};
      }
      this.options = $.extend({}, Morris.Hover.defaults, options);
      this.el = $("<div class='" + this.options["class"] + "'></div>");
      this.el.hide();
      this.options.parent.append(this.el);
    }
    Hover.prototype.update = function (html, x, y) {
      if (!html) {
        return this.hide();
      } else {
        this.html(html);
        this.show();
        return this.moveTo(x, y);
      }
    };
    Hover.prototype.html = function (content) {
      return this.el.html(content);
    };
    Hover.prototype.moveTo = function (x, y) {
      var hoverHeight, hoverWidth, left, parentHeight, parentWidth, top;
      parentWidth = this.options.parent.innerWidth();
      parentHeight = this.options.parent.innerHeight();
      hoverWidth = this.el.outerWidth();
      hoverHeight = this.el.outerHeight();
      left = Math.min(Math.max(0, x - hoverWidth / 2), parentWidth - hoverWidth);
      if (y != null) {
        top = y - hoverHeight - 10;
        if (top < 0) {
          top = y + 10;
          if (top + hoverHeight > parentHeight) {
            top = parentHeight / 2 - hoverHeight / 2;
          }
        }
      } else {
        top = parentHeight / 2 - hoverHeight / 2;
      }
      return this.el.css({
        left: left + "px",
        top: parseInt(top) + "px"
      });
    };
    Hover.prototype.show = function () {
      return this.el.show();
    };
    Hover.prototype.hide = function () {
      return this.el.hide();
    };
    return Hover;
  }();
  Morris.Line = function (_super) {
    __extends(Line, _super);
    function Line(options) {
      this.hilight = __bind(this.hilight, this);
      this.onHoverOut = __bind(this.onHoverOut, this);
      this.onHoverMove = __bind(this.onHoverMove, this);
      this.onGridClick = __bind(this.onGridClick, this);
      if (!(this instanceof Morris.Line)) {
        return new Morris.Line(options);
      }
      Line.__super__.constructor.call(this, options);
    }
    Line.prototype.init = function () {
      if (this.options.hideHover !== 'always') {
        this.hover = new Morris.Hover({
          parent: this.el
        });
        this.on('hovermove', this.onHoverMove);
        this.on('hoverout', this.onHoverOut);
        return this.on('gridclick', this.onGridClick);
      }
    };
    Line.prototype.defaults = {
      lineWidth: 3,
      pointSize: 4,
      lineColors: ['#0b62a4', '#7A92A3', '#4da74d', '#afd8f8', '#edc240', '#cb4b4b', '#9440ed'],
      pointStrokeWidths: [1],
      pointStrokeColors: ['#ffffff'],
      pointFillColors: [],
      smooth: true,
      xLabels: 'auto',
      xLabelFormat: null,
      xLabelMargin: 24,
      hideHover: false
    };
    Line.prototype.calc = function () {
      this.calcPoints();
      return this.generatePaths();
    };
    Line.prototype.calcPoints = function () {
      var row, y, _i, _len, _ref, _results;
      _ref = this.data;
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        row = _ref[_i];
        row._x = this.transX(row.x);
        row._y = function () {
          var _j, _len1, _ref1, _results1;
          _ref1 = row.y;
          _results1 = [];
          for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
            y = _ref1[_j];
            if (y != null) {
              _results1.push(this.transY(y));
            } else {
              _results1.push(y);
            }
          }
          return _results1;
        }.call(this);
        _results.push(row._ymax = Math.min.apply(Math, [this.bottom].concat(function () {
          var _j, _len1, _ref1, _results1;
          _ref1 = row._y;
          _results1 = [];
          for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
            y = _ref1[_j];
            if (y != null) {
              _results1.push(y);
            }
          }
          return _results1;
        }())));
      }
      return _results;
    };
    Line.prototype.hitTest = function (x) {
      var index, r, _i, _len, _ref;
      if (this.data.length === 0) {
        return null;
      }
      _ref = this.data.slice(1);
      for (index = _i = 0, _len = _ref.length; _i < _len; index = ++_i) {
        r = _ref[index];
        if (x < (r._x + this.data[index]._x) / 2) {
          break;
        }
      }
      return index;
    };
    Line.prototype.onGridClick = function (x, y) {
      var index;
      index = this.hitTest(x);
      return this.fire('click', index, this.data[index].src, x, y);
    };
    Line.prototype.onHoverMove = function (x, y) {
      var index;
      index = this.hitTest(x);
      return this.displayHoverForRow(index);
    };
    Line.prototype.onHoverOut = function () {
      if (this.options.hideHover !== false) {
        return this.displayHoverForRow(null);
      }
    };
    Line.prototype.displayHoverForRow = function (index) {
      var _ref;
      if (index != null) {
        (_ref = this.hover).update.apply(_ref, this.hoverContentForRow(index));
        return this.hilight(index);
      } else {
        this.hover.hide();
        return this.hilight();
      }
    };
    Line.prototype.hoverContentForRow = function (index) {
      var content, j, row, y, _i, _len, _ref;
      row = this.data[index];
      content = "<div class='morris-hover-row-label'>" + row.label + "</div>";
      _ref = row.y;
      for (j = _i = 0, _len = _ref.length; _i < _len; j = ++_i) {
        y = _ref[j];
        content += "<div class='morris-hover-point' style='color: " + this.colorFor(row, j, 'label') + "'>\n  " + this.options.labels[j] + ":\n  " + this.yLabelFormat(y) + "\n</div>";
      }
      if (typeof this.options.hoverCallback === 'function') {
        content = this.options.hoverCallback(index, this.options, content, row.src);
      }
      return [content, row._x, row._ymax];
    };
    Line.prototype.generatePaths = function () {
      var coords, i, r, smooth;
      return this.paths = function () {
        var _i, _ref, _ref1, _results;
        _results = [];
        for (i = _i = 0, _ref = this.options.ykeys.length; 0 <= _ref ? _i < _ref : _i > _ref; i = 0 <= _ref ? ++_i : --_i) {
          smooth = typeof this.options.smooth === "boolean" ? this.options.smooth : (_ref1 = this.options.ykeys[i], __indexOf.call(this.options.smooth, _ref1) >= 0);
          coords = function () {
            var _j, _len, _ref2, _results1;
            _ref2 = this.data;
            _results1 = [];
            for (_j = 0, _len = _ref2.length; _j < _len; _j++) {
              r = _ref2[_j];
              if (r._y[i] !== void 0) {
                _results1.push({
                  x: r._x,
                  y: r._y[i]
                });
              }
            }
            return _results1;
          }.call(this);
          if (coords.length > 1) {
            _results.push(Morris.Line.createPath(coords, smooth, this.bottom));
          } else {
            _results.push(null);
          }
        }
        return _results;
      }.call(this);
    };
    Line.prototype.draw = function () {
      var _ref;
      if ((_ref = this.options.axes) === true || _ref === 'both' || _ref === 'x') {
        this.drawXAxis();
      }
      this.drawSeries();
      if (this.options.hideHover === false) {
        return this.displayHoverForRow(this.data.length - 1);
      }
    };
    Line.prototype.drawXAxis = function () {
      var drawLabel,
        l,
        labels,
        prevAngleMargin,
        prevLabelMargin,
        row,
        ypos,
        _i,
        _len,
        _results,
        _this = this;
      ypos = this.bottom + this.options.padding / 2;
      prevLabelMargin = null;
      prevAngleMargin = null;
      drawLabel = function drawLabel(labelText, xpos) {
        var label, labelBox, margin, offset, textBox;
        label = _this.drawXAxisLabel(_this.transX(xpos), ypos, labelText);
        textBox = label.getBBox();
        label.transform("r" + -_this.options.xLabelAngle);
        labelBox = label.getBBox();
        label.transform("t0," + labelBox.height / 2 + "...");
        if (_this.options.xLabelAngle !== 0) {
          offset = -0.5 * textBox.width * Math.cos(_this.options.xLabelAngle * Math.PI / 180.0);
          label.transform("t" + offset + ",0...");
        }
        labelBox = label.getBBox();
        if ((prevLabelMargin == null || prevLabelMargin >= labelBox.x + labelBox.width || prevAngleMargin != null && prevAngleMargin >= labelBox.x) && labelBox.x >= 0 && labelBox.x + labelBox.width < _this.el.width()) {
          if (_this.options.xLabelAngle !== 0) {
            margin = 1.25 * _this.options.gridTextSize / Math.sin(_this.options.xLabelAngle * Math.PI / 180.0);
            prevAngleMargin = labelBox.x - margin;
          }
          return prevLabelMargin = labelBox.x - _this.options.xLabelMargin;
        } else {
          return label.remove();
        }
      };
      if (this.options.parseTime) {
        if (this.data.length === 1 && this.options.xLabels === 'auto') {
          labels = [[this.data[0].label, this.data[0].x]];
        } else {
          labels = Morris.labelSeries(this.xmin, this.xmax, this.width, this.options.xLabels, this.options.xLabelFormat);
        }
      } else {
        labels = function () {
          var _i, _len, _ref, _results;
          _ref = this.data;
          _results = [];
          for (_i = 0, _len = _ref.length; _i < _len; _i++) {
            row = _ref[_i];
            _results.push([row.label, row.x]);
          }
          return _results;
        }.call(this);
      }
      labels.reverse();
      _results = [];
      for (_i = 0, _len = labels.length; _i < _len; _i++) {
        l = labels[_i];
        _results.push(drawLabel(l[0], l[1]));
      }
      return _results;
    };
    Line.prototype.drawSeries = function () {
      var i, _i, _j, _ref, _ref1, _results;
      this.seriesPoints = [];
      for (i = _i = _ref = this.options.ykeys.length - 1; _ref <= 0 ? _i <= 0 : _i >= 0; i = _ref <= 0 ? ++_i : --_i) {
        this._drawLineFor(i);
      }
      _results = [];
      for (i = _j = _ref1 = this.options.ykeys.length - 1; _ref1 <= 0 ? _j <= 0 : _j >= 0; i = _ref1 <= 0 ? ++_j : --_j) {
        _results.push(this._drawPointFor(i));
      }
      return _results;
    };
    Line.prototype._drawPointFor = function (index) {
      var circle, row, _i, _len, _ref, _results;
      this.seriesPoints[index] = [];
      _ref = this.data;
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        row = _ref[_i];
        circle = null;
        if (row._y[index] != null) {
          circle = this.drawLinePoint(row._x, row._y[index], this.colorFor(row, index, 'point'), index);
        }
        _results.push(this.seriesPoints[index].push(circle));
      }
      return _results;
    };
    Line.prototype._drawLineFor = function (index) {
      var path;
      path = this.paths[index];
      if (path !== null) {
        return this.drawLinePath(path, this.colorFor(null, index, 'line'), index);
      }
    };
    Line.createPath = function (coords, smooth, bottom) {
      var coord, g, grads, i, ix, lg, path, prevCoord, x1, x2, y1, y2, _i, _len;
      path = "";
      if (smooth) {
        grads = Morris.Line.gradients(coords);
      }
      prevCoord = {
        y: null
      };
      for (i = _i = 0, _len = coords.length; _i < _len; i = ++_i) {
        coord = coords[i];
        if (coord.y != null) {
          if (prevCoord.y != null) {
            if (smooth) {
              g = grads[i];
              lg = grads[i - 1];
              ix = (coord.x - prevCoord.x) / 4;
              x1 = prevCoord.x + ix;
              y1 = Math.min(bottom, prevCoord.y + ix * lg);
              x2 = coord.x - ix;
              y2 = Math.min(bottom, coord.y - ix * g);
              path += "C" + x1 + "," + y1 + "," + x2 + "," + y2 + "," + coord.x + "," + coord.y;
            } else {
              path += "L" + coord.x + "," + coord.y;
            }
          } else {
            if (!smooth || grads[i] != null) {
              path += "M" + coord.x + "," + coord.y;
            }
          }
        }
        prevCoord = coord;
      }
      return path;
    };
    Line.gradients = function (coords) {
      var coord, grad, i, nextCoord, prevCoord, _i, _len, _results;
      grad = function grad(a, b) {
        return (a.y - b.y) / (a.x - b.x);
      };
      _results = [];
      for (i = _i = 0, _len = coords.length; _i < _len; i = ++_i) {
        coord = coords[i];
        if (coord.y != null) {
          nextCoord = coords[i + 1] || {
            y: null
          };
          prevCoord = coords[i - 1] || {
            y: null
          };
          if (prevCoord.y != null && nextCoord.y != null) {
            _results.push(grad(prevCoord, nextCoord));
          } else if (prevCoord.y != null) {
            _results.push(grad(prevCoord, coord));
          } else if (nextCoord.y != null) {
            _results.push(grad(coord, nextCoord));
          } else {
            _results.push(null);
          }
        } else {
          _results.push(null);
        }
      }
      return _results;
    };
    Line.prototype.hilight = function (index) {
      var i, _i, _j, _ref, _ref1;
      if (this.prevHilight !== null && this.prevHilight !== index) {
        for (i = _i = 0, _ref = this.seriesPoints.length - 1; 0 <= _ref ? _i <= _ref : _i >= _ref; i = 0 <= _ref ? ++_i : --_i) {
          if (this.seriesPoints[i][this.prevHilight]) {
            this.seriesPoints[i][this.prevHilight].animate(this.pointShrinkSeries(i));
          }
        }
      }
      if (index !== null && this.prevHilight !== index) {
        for (i = _j = 0, _ref1 = this.seriesPoints.length - 1; 0 <= _ref1 ? _j <= _ref1 : _j >= _ref1; i = 0 <= _ref1 ? ++_j : --_j) {
          if (this.seriesPoints[i][index]) {
            this.seriesPoints[i][index].animate(this.pointGrowSeries(i));
          }
        }
      }
      return this.prevHilight = index;
    };
    Line.prototype.colorFor = function (row, sidx, type) {
      if (typeof this.options.lineColors === 'function') {
        return this.options.lineColors.call(this, row, sidx, type);
      } else if (type === 'point') {
        return this.options.pointFillColors[sidx % this.options.pointFillColors.length] || this.options.lineColors[sidx % this.options.lineColors.length];
      } else {
        return this.options.lineColors[sidx % this.options.lineColors.length];
      }
    };
    Line.prototype.drawXAxisLabel = function (xPos, yPos, text) {
      return this.raphael.text(xPos, yPos, text).attr('font-size', this.options.gridTextSize).attr('font-family', this.options.gridTextFamily).attr('font-weight', this.options.gridTextWeight).attr('fill', this.options.gridTextColor);
    };
    Line.prototype.drawLinePath = function (path, lineColor, lineIndex) {
      return this.raphael.path(path).attr('stroke', lineColor).attr('stroke-width', this.lineWidthForSeries(lineIndex));
    };
    Line.prototype.drawLinePoint = function (xPos, yPos, pointColor, lineIndex) {
      return this.raphael.circle(xPos, yPos, this.pointSizeForSeries(lineIndex)).attr('fill', pointColor).attr('stroke-width', this.pointStrokeWidthForSeries(lineIndex)).attr('stroke', this.pointStrokeColorForSeries(lineIndex));
    };
    Line.prototype.pointStrokeWidthForSeries = function (index) {
      return this.options.pointStrokeWidths[index % this.options.pointStrokeWidths.length];
    };
    Line.prototype.pointStrokeColorForSeries = function (index) {
      return this.options.pointStrokeColors[index % this.options.pointStrokeColors.length];
    };
    Line.prototype.lineWidthForSeries = function (index) {
      if (this.options.lineWidth instanceof Array) {
        return this.options.lineWidth[index % this.options.lineWidth.length];
      } else {
        return this.options.lineWidth;
      }
    };
    Line.prototype.pointSizeForSeries = function (index) {
      if (this.options.pointSize instanceof Array) {
        return this.options.pointSize[index % this.options.pointSize.length];
      } else {
        return this.options.pointSize;
      }
    };
    Line.prototype.pointGrowSeries = function (index) {
      return Raphael.animation({
        r: this.pointSizeForSeries(index) + 3
      }, 25, 'linear');
    };
    Line.prototype.pointShrinkSeries = function (index) {
      return Raphael.animation({
        r: this.pointSizeForSeries(index)
      }, 25, 'linear');
    };
    return Line;
  }(Morris.Grid);
  Morris.labelSeries = function (dmin, dmax, pxwidth, specName, xLabelFormat) {
    var d, d0, ddensity, name, ret, s, spec, t, _i, _len, _ref;
    ddensity = 200 * (dmax - dmin) / pxwidth;
    d0 = new Date(dmin);
    spec = Morris.LABEL_SPECS[specName];
    if (spec === void 0) {
      _ref = Morris.AUTO_LABEL_ORDER;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        name = _ref[_i];
        s = Morris.LABEL_SPECS[name];
        if (ddensity >= s.span) {
          spec = s;
          break;
        }
      }
    }
    if (spec === void 0) {
      spec = Morris.LABEL_SPECS["second"];
    }
    if (xLabelFormat) {
      spec = $.extend({}, spec, {
        fmt: xLabelFormat
      });
    }
    d = spec.start(d0);
    ret = [];
    while ((t = d.getTime()) <= dmax) {
      if (t >= dmin) {
        ret.push([spec.fmt(d), t]);
      }
      spec.incr(d);
    }
    return ret;
  };
  minutesSpecHelper = function minutesSpecHelper(interval) {
    return {
      span: interval * 60 * 1000,
      start: function start(d) {
        return new Date(d.getFullYear(), d.getMonth(), d.getDate(), d.getHours());
      },
      fmt: function fmt(d) {
        return "" + Morris.pad2(d.getHours()) + ":" + Morris.pad2(d.getMinutes());
      },
      incr: function incr(d) {
        return d.setUTCMinutes(d.getUTCMinutes() + interval);
      }
    };
  };
  secondsSpecHelper = function secondsSpecHelper(interval) {
    return {
      span: interval * 1000,
      start: function start(d) {
        return new Date(d.getFullYear(), d.getMonth(), d.getDate(), d.getHours(), d.getMinutes());
      },
      fmt: function fmt(d) {
        return "" + Morris.pad2(d.getHours()) + ":" + Morris.pad2(d.getMinutes()) + ":" + Morris.pad2(d.getSeconds());
      },
      incr: function incr(d) {
        return d.setUTCSeconds(d.getUTCSeconds() + interval);
      }
    };
  };
  Morris.LABEL_SPECS = {
    "decade": {
      span: 172800000000,
      start: function start(d) {
        return new Date(d.getFullYear() - d.getFullYear() % 10, 0, 1);
      },
      fmt: function fmt(d) {
        return "" + d.getFullYear();
      },
      incr: function incr(d) {
        return d.setFullYear(d.getFullYear() + 10);
      }
    },
    "year": {
      span: 17280000000,
      start: function start(d) {
        return new Date(d.getFullYear(), 0, 1);
      },
      fmt: function fmt(d) {
        return "" + d.getFullYear();
      },
      incr: function incr(d) {
        return d.setFullYear(d.getFullYear() + 1);
      }
    },
    "month": {
      span: 2419200000,
      start: function start(d) {
        return new Date(d.getFullYear(), d.getMonth(), 1);
      },
      fmt: function fmt(d) {
        return "" + d.getFullYear() + "-" + Morris.pad2(d.getMonth() + 1);
      },
      incr: function incr(d) {
        return d.setMonth(d.getMonth() + 1);
      }
    },
    "week": {
      span: 604800000,
      start: function start(d) {
        return new Date(d.getFullYear(), d.getMonth(), d.getDate());
      },
      fmt: function fmt(d) {
        return "" + d.getFullYear() + "-" + Morris.pad2(d.getMonth() + 1) + "-" + Morris.pad2(d.getDate());
      },
      incr: function incr(d) {
        return d.setDate(d.getDate() + 7);
      }
    },
    "day": {
      span: 86400000,
      start: function start(d) {
        return new Date(d.getFullYear(), d.getMonth(), d.getDate());
      },
      fmt: function fmt(d) {
        return "" + d.getFullYear() + "-" + Morris.pad2(d.getMonth() + 1) + "-" + Morris.pad2(d.getDate());
      },
      incr: function incr(d) {
        return d.setDate(d.getDate() + 1);
      }
    },
    "hour": minutesSpecHelper(60),
    "30min": minutesSpecHelper(30),
    "15min": minutesSpecHelper(15),
    "10min": minutesSpecHelper(10),
    "5min": minutesSpecHelper(5),
    "minute": minutesSpecHelper(1),
    "30sec": secondsSpecHelper(30),
    "15sec": secondsSpecHelper(15),
    "10sec": secondsSpecHelper(10),
    "5sec": secondsSpecHelper(5),
    "second": secondsSpecHelper(1)
  };
  Morris.AUTO_LABEL_ORDER = ["decade", "year", "month", "week", "day", "hour", "30min", "15min", "10min", "5min", "minute", "30sec", "15sec", "10sec", "5sec", "second"];
  Morris.Area = function (_super) {
    var areaDefaults;
    __extends(Area, _super);
    areaDefaults = {
      fillOpacity: 'auto',
      behaveLikeLine: false
    };
    function Area(options) {
      var areaOptions;
      if (!(this instanceof Morris.Area)) {
        return new Morris.Area(options);
      }
      areaOptions = $.extend({}, areaDefaults, options);
      this.cumulative = !areaOptions.behaveLikeLine;
      if (areaOptions.fillOpacity === 'auto') {
        areaOptions.fillOpacity = areaOptions.behaveLikeLine ? .8 : 1;
      }
      Area.__super__.constructor.call(this, areaOptions);
    }
    Area.prototype.calcPoints = function () {
      var row, total, y, _i, _len, _ref, _results;
      _ref = this.data;
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        row = _ref[_i];
        row._x = this.transX(row.x);
        total = 0;
        row._y = function () {
          var _j, _len1, _ref1, _results1;
          _ref1 = row.y;
          _results1 = [];
          for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
            y = _ref1[_j];
            if (this.options.behaveLikeLine) {
              _results1.push(this.transY(y));
            } else {
              total += y || 0;
              _results1.push(this.transY(total));
            }
          }
          return _results1;
        }.call(this);
        _results.push(row._ymax = Math.max.apply(Math, row._y));
      }
      return _results;
    };
    Area.prototype.drawSeries = function () {
      var i, range, _i, _j, _k, _len, _ref, _ref1, _results, _results1, _results2;
      this.seriesPoints = [];
      if (this.options.behaveLikeLine) {
        range = function () {
          _results = [];
          for (var _i = 0, _ref = this.options.ykeys.length - 1; 0 <= _ref ? _i <= _ref : _i >= _ref; 0 <= _ref ? _i++ : _i--) {
            _results.push(_i);
          }
          return _results;
        }.apply(this);
      } else {
        range = function () {
          _results1 = [];
          for (var _j = _ref1 = this.options.ykeys.length - 1; _ref1 <= 0 ? _j <= 0 : _j >= 0; _ref1 <= 0 ? _j++ : _j--) {
            _results1.push(_j);
          }
          return _results1;
        }.apply(this);
      }
      _results2 = [];
      for (_k = 0, _len = range.length; _k < _len; _k++) {
        i = range[_k];
        this._drawFillFor(i);
        this._drawLineFor(i);
        _results2.push(this._drawPointFor(i));
      }
      return _results2;
    };
    Area.prototype._drawFillFor = function (index) {
      var path;
      path = this.paths[index];
      if (path !== null) {
        path = path + ("L" + this.transX(this.xmax) + "," + this.bottom + "L" + this.transX(this.xmin) + "," + this.bottom + "Z");
        return this.drawFilledPath(path, this.fillForSeries(index));
      }
    };
    Area.prototype.fillForSeries = function (i) {
      var color;
      color = Raphael.rgb2hsl(this.colorFor(this.data[i], i, 'line'));
      return Raphael.hsl(color.h, this.options.behaveLikeLine ? color.s * 0.9 : color.s * 0.75, Math.min(0.98, this.options.behaveLikeLine ? color.l * 1.2 : color.l * 1.25));
    };
    Area.prototype.drawFilledPath = function (path, fill) {
      return this.raphael.path(path).attr('fill', fill).attr('fill-opacity', this.options.fillOpacity).attr('stroke', 'none');
    };
    return Area;
  }(Morris.Line);
  Morris.Bar = function (_super) {
    __extends(Bar, _super);
    function Bar(options) {
      this.onHoverOut = __bind(this.onHoverOut, this);
      this.onHoverMove = __bind(this.onHoverMove, this);
      this.onGridClick = __bind(this.onGridClick, this);
      if (!(this instanceof Morris.Bar)) {
        return new Morris.Bar(options);
      }
      Bar.__super__.constructor.call(this, $.extend({}, options, {
        parseTime: false
      }));
    }
    Bar.prototype.init = function () {
      this.cumulative = this.options.stacked;
      if (this.options.hideHover !== 'always') {
        this.hover = new Morris.Hover({
          parent: this.el
        });
        this.on('hovermove', this.onHoverMove);
        this.on('hoverout', this.onHoverOut);
        return this.on('gridclick', this.onGridClick);
      }
    };
    Bar.prototype.defaults = {
      barSizeRatio: 0.75,
      barGap: 3,
      barColors: ['#0b62a4', '#7a92a3', '#4da74d', '#afd8f8', '#edc240', '#cb4b4b', '#9440ed'],
      barOpacity: 1.0,
      barRadius: [0, 0, 0, 0],
      xLabelMargin: 50
    };
    Bar.prototype.calc = function () {
      var _ref;
      this.calcBars();
      if (this.options.hideHover === false) {
        return (_ref = this.hover).update.apply(_ref, this.hoverContentForRow(this.data.length - 1));
      }
    };
    Bar.prototype.calcBars = function () {
      var idx, row, y, _i, _len, _ref, _results;
      _ref = this.data;
      _results = [];
      for (idx = _i = 0, _len = _ref.length; _i < _len; idx = ++_i) {
        row = _ref[idx];
        row._x = this.left + this.width * (idx + 0.5) / this.data.length;
        _results.push(row._y = function () {
          var _j, _len1, _ref1, _results1;
          _ref1 = row.y;
          _results1 = [];
          for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
            y = _ref1[_j];
            if (y != null) {
              _results1.push(this.transY(y));
            } else {
              _results1.push(null);
            }
          }
          return _results1;
        }.call(this));
      }
      return _results;
    };
    Bar.prototype.draw = function () {
      var _ref;
      if ((_ref = this.options.axes) === true || _ref === 'both' || _ref === 'x') {
        this.drawXAxis();
      }
      return this.drawSeries();
    };
    Bar.prototype.drawXAxis = function () {
      var i, label, labelBox, margin, offset, prevAngleMargin, prevLabelMargin, row, textBox, ypos, _i, _ref, _results;
      ypos = this.bottom + (this.options.xAxisLabelTopPadding || this.options.padding / 2);
      prevLabelMargin = null;
      prevAngleMargin = null;
      _results = [];
      for (i = _i = 0, _ref = this.data.length; 0 <= _ref ? _i < _ref : _i > _ref; i = 0 <= _ref ? ++_i : --_i) {
        row = this.data[this.data.length - 1 - i];
        label = this.drawXAxisLabel(row._x, ypos, row.label);
        textBox = label.getBBox();
        label.transform("r" + -this.options.xLabelAngle);
        labelBox = label.getBBox();
        label.transform("t0," + labelBox.height / 2 + "...");
        if (this.options.xLabelAngle !== 0) {
          offset = -0.5 * textBox.width * Math.cos(this.options.xLabelAngle * Math.PI / 180.0);
          label.transform("t" + offset + ",0...");
        }
        if ((prevLabelMargin == null || prevLabelMargin >= labelBox.x + labelBox.width || prevAngleMargin != null && prevAngleMargin >= labelBox.x) && labelBox.x >= 0 && labelBox.x + labelBox.width < this.el.width()) {
          if (this.options.xLabelAngle !== 0) {
            margin = 1.25 * this.options.gridTextSize / Math.sin(this.options.xLabelAngle * Math.PI / 180.0);
            prevAngleMargin = labelBox.x - margin;
          }
          _results.push(prevLabelMargin = labelBox.x - this.options.xLabelMargin);
        } else {
          _results.push(label.remove());
        }
      }
      return _results;
    };
    Bar.prototype.drawSeries = function () {
      var barWidth, bottom, groupWidth, idx, lastTop, left, leftPadding, numBars, row, sidx, size, spaceLeft, top, ypos, zeroPos;
      groupWidth = this.width / this.options.data.length;
      numBars = this.options.stacked ? 1 : this.options.ykeys.length;
      barWidth = (groupWidth * this.options.barSizeRatio - this.options.barGap * (numBars - 1)) / numBars;
      if (this.options.barSize) {
        barWidth = Math.min(barWidth, this.options.barSize);
      }
      spaceLeft = groupWidth - barWidth * numBars - this.options.barGap * (numBars - 1);
      leftPadding = spaceLeft / 2;
      zeroPos = this.ymin <= 0 && this.ymax >= 0 ? this.transY(0) : null;
      return this.bars = function () {
        var _i, _len, _ref, _results;
        _ref = this.data;
        _results = [];
        for (idx = _i = 0, _len = _ref.length; _i < _len; idx = ++_i) {
          row = _ref[idx];
          lastTop = 0;
          _results.push(function () {
            var _j, _len1, _ref1, _results1;
            _ref1 = row._y;
            _results1 = [];
            for (sidx = _j = 0, _len1 = _ref1.length; _j < _len1; sidx = ++_j) {
              ypos = _ref1[sidx];
              if (ypos !== null) {
                if (zeroPos) {
                  top = Math.min(ypos, zeroPos);
                  bottom = Math.max(ypos, zeroPos);
                } else {
                  top = ypos;
                  bottom = this.bottom;
                }
                left = this.left + idx * groupWidth + leftPadding;
                if (!this.options.stacked) {
                  left += sidx * (barWidth + this.options.barGap);
                }
                size = bottom - top;
                if (this.options.verticalGridCondition && this.options.verticalGridCondition(row.x)) {
                  this.drawBar(this.left + idx * groupWidth, this.top, groupWidth, Math.abs(this.top - this.bottom), this.options.verticalGridColor, this.options.verticalGridOpacity, this.options.barRadius);
                }
                if (this.options.stacked) {
                  top -= lastTop;
                }
                this.drawBar(left, top, barWidth, size, this.colorFor(row, sidx, 'bar'), this.options.barOpacity, this.options.barRadius);
                _results1.push(lastTop += size);
              } else {
                _results1.push(null);
              }
            }
            return _results1;
          }.call(this));
        }
        return _results;
      }.call(this);
    };
    Bar.prototype.colorFor = function (row, sidx, type) {
      var r, s;
      if (typeof this.options.barColors === 'function') {
        r = {
          x: row.x,
          y: row.y[sidx],
          label: row.label
        };
        s = {
          index: sidx,
          key: this.options.ykeys[sidx],
          label: this.options.labels[sidx]
        };
        return this.options.barColors.call(this, r, s, type);
      } else {
        return this.options.barColors[sidx % this.options.barColors.length];
      }
    };
    Bar.prototype.hitTest = function (x) {
      if (this.data.length === 0) {
        return null;
      }
      x = Math.max(Math.min(x, this.right), this.left);
      return Math.min(this.data.length - 1, Math.floor((x - this.left) / (this.width / this.data.length)));
    };
    Bar.prototype.onGridClick = function (x, y) {
      var index;
      index = this.hitTest(x);
      return this.fire('click', index, this.data[index].src, x, y);
    };
    Bar.prototype.onHoverMove = function (x, y) {
      var index, _ref;
      index = this.hitTest(x);
      return (_ref = this.hover).update.apply(_ref, this.hoverContentForRow(index));
    };
    Bar.prototype.onHoverOut = function () {
      if (this.options.hideHover !== false) {
        return this.hover.hide();
      }
    };
    Bar.prototype.hoverContentForRow = function (index) {
      var content, j, row, x, y, _i, _len, _ref;
      row = this.data[index];
      content = "<div class='morris-hover-row-label'>" + row.label + "</div>";
      _ref = row.y;
      for (j = _i = 0, _len = _ref.length; _i < _len; j = ++_i) {
        y = _ref[j];
        content += "<div class='morris-hover-point' style='color: " + this.colorFor(row, j, 'label') + "'>\n  " + this.options.labels[j] + ":\n  " + this.yLabelFormat(y) + "\n</div>";
      }
      if (typeof this.options.hoverCallback === 'function') {
        content = this.options.hoverCallback(index, this.options, content, row.src);
      }
      x = this.left + (index + 0.5) * this.width / this.data.length;
      return [content, x];
    };
    Bar.prototype.drawXAxisLabel = function (xPos, yPos, text) {
      var label;
      return label = this.raphael.text(xPos, yPos, text).attr('font-size', this.options.gridTextSize).attr('font-family', this.options.gridTextFamily).attr('font-weight', this.options.gridTextWeight).attr('fill', this.options.gridTextColor);
    };
    Bar.prototype.drawBar = function (xPos, yPos, width, height, barColor, opacity, radiusArray) {
      var maxRadius, path;
      maxRadius = Math.max.apply(Math, radiusArray);
      if (maxRadius === 0 || maxRadius > height) {
        path = this.raphael.rect(xPos, yPos, width, height);
      } else {
        path = this.raphael.path(this.roundedRect(xPos, yPos, width, height, radiusArray));
      }
      return path.attr('fill', barColor).attr('fill-opacity', opacity).attr('stroke', 'none');
    };
    Bar.prototype.roundedRect = function (x, y, w, h, r) {
      if (r == null) {
        r = [0, 0, 0, 0];
      }
      return ["M", x, r[0] + y, "Q", x, y, x + r[0], y, "L", x + w - r[1], y, "Q", x + w, y, x + w, y + r[1], "L", x + w, y + h - r[2], "Q", x + w, y + h, x + w - r[2], y + h, "L", x + r[3], y + h, "Q", x, y + h, x, y + h - r[3], "Z"];
    };
    return Bar;
  }(Morris.Grid);
  Morris.Donut = function (_super) {
    __extends(Donut, _super);
    Donut.prototype.defaults = {
      colors: ['#0B62A4', '#3980B5', '#679DC6', '#95BBD7', '#B0CCE1', '#095791', '#095085', '#083E67', '#052C48', '#042135'],
      backgroundColor: '#FFFFFF',
      labelColor: '#000000',
      formatter: Morris.commas,
      resize: false
    };
    function Donut(options) {
      this.resizeHandler = __bind(this.resizeHandler, this);
      this.select = __bind(this.select, this);
      this.click = __bind(this.click, this);
      var _this = this;
      if (!(this instanceof Morris.Donut)) {
        return new Morris.Donut(options);
      }
      this.options = $.extend({}, this.defaults, options);
      if (typeof options.element === 'string') {
        this.el = $(document.getElementById(options.element));
      } else {
        this.el = $(options.element);
      }
      if (this.el === null || this.el.length === 0) {
        throw new Error("Graph placeholder not found.");
      }
      if (options.data === void 0 || options.data.length === 0) {
        return;
      }
      this.raphael = new Raphael(this.el[0]);
      if (this.options.resize) {
        $(window).bind('resize', function (evt) {
          if (_this.timeoutId != null) {
            window.clearTimeout(_this.timeoutId);
          }
          return _this.timeoutId = window.setTimeout(_this.resizeHandler, 100);
        });
      }
      this.setData(options.data);
    }
    Donut.prototype.redraw = function () {
      var C, cx, cy, i, idx, last, max_value, min, next, seg, total, value, w, _i, _j, _k, _len, _len1, _len2, _ref, _ref1, _ref2, _results;
      this.raphael.clear();
      cx = this.el.width() / 2;
      cy = this.el.height() / 2;
      w = (Math.min(cx, cy) - 10) / 3;
      total = 0;
      _ref = this.values;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        value = _ref[_i];
        total += value;
      }
      min = 5 / (2 * w);
      C = 1.9999 * Math.PI - min * this.data.length;
      last = 0;
      idx = 0;
      this.segments = [];
      _ref1 = this.values;
      for (i = _j = 0, _len1 = _ref1.length; _j < _len1; i = ++_j) {
        value = _ref1[i];
        next = last + min + C * (value / total);
        seg = new Morris.DonutSegment(cx, cy, w * 2, w, last, next, this.data[i].color || this.options.colors[idx % this.options.colors.length], this.options.backgroundColor, idx, this.raphael);
        seg.render();
        this.segments.push(seg);
        seg.on('hover', this.select);
        seg.on('click', this.click);
        last = next;
        idx += 1;
      }
      this.text1 = this.drawEmptyDonutLabel(cx, cy - 10, this.options.labelColor, 15, 800);
      this.text2 = this.drawEmptyDonutLabel(cx, cy + 10, this.options.labelColor, 14);
      max_value = Math.max.apply(Math, this.values);
      idx = 0;
      _ref2 = this.values;
      _results = [];
      for (_k = 0, _len2 = _ref2.length; _k < _len2; _k++) {
        value = _ref2[_k];
        if (value === max_value) {
          this.select(idx);
          break;
        }
        _results.push(idx += 1);
      }
      return _results;
    };
    Donut.prototype.setData = function (data) {
      var row;
      this.data = data;
      this.values = function () {
        var _i, _len, _ref, _results;
        _ref = this.data;
        _results = [];
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          row = _ref[_i];
          _results.push(parseFloat(row.value));
        }
        return _results;
      }.call(this);
      return this.redraw();
    };
    Donut.prototype.click = function (idx) {
      return this.fire('click', idx, this.data[idx]);
    };
    Donut.prototype.select = function (idx) {
      var row, s, segment, _i, _len, _ref;
      _ref = this.segments;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        s = _ref[_i];
        s.deselect();
      }
      segment = this.segments[idx];
      segment.select();
      row = this.data[idx];
      return this.setLabels(row.label, this.options.formatter(row.value, row));
    };
    Donut.prototype.setLabels = function (label1, label2) {
      var inner, maxHeightBottom, maxHeightTop, maxWidth, text1bbox, text1scale, text2bbox, text2scale;
      inner = (Math.min(this.el.width() / 2, this.el.height() / 2) - 10) * 2 / 3;
      maxWidth = 1.8 * inner;
      maxHeightTop = inner / 2;
      maxHeightBottom = inner / 3;
      this.text1.attr({
        text: label1,
        transform: ''
      });
      text1bbox = this.text1.getBBox();
      text1scale = Math.min(maxWidth / text1bbox.width, maxHeightTop / text1bbox.height);
      this.text1.attr({
        transform: "S" + text1scale + "," + text1scale + "," + (text1bbox.x + text1bbox.width / 2) + "," + (text1bbox.y + text1bbox.height)
      });
      this.text2.attr({
        text: label2,
        transform: ''
      });
      text2bbox = this.text2.getBBox();
      text2scale = Math.min(maxWidth / text2bbox.width, maxHeightBottom / text2bbox.height);
      return this.text2.attr({
        transform: "S" + text2scale + "," + text2scale + "," + (text2bbox.x + text2bbox.width / 2) + "," + text2bbox.y
      });
    };
    Donut.prototype.drawEmptyDonutLabel = function (xPos, yPos, color, fontSize, fontWeight) {
      var text;
      text = this.raphael.text(xPos, yPos, '').attr('font-size', fontSize).attr('fill', color);
      if (fontWeight != null) {
        text.attr('font-weight', fontWeight);
      }
      return text;
    };
    Donut.prototype.resizeHandler = function () {
      this.timeoutId = null;
      this.raphael.setSize(this.el.width(), this.el.height());
      return this.redraw();
    };
    return Donut;
  }(Morris.EventEmitter);
  Morris.DonutSegment = function (_super) {
    __extends(DonutSegment, _super);
    function DonutSegment(cx, cy, inner, outer, p0, p1, color, backgroundColor, index, raphael) {
      this.cx = cx;
      this.cy = cy;
      this.inner = inner;
      this.outer = outer;
      this.color = color;
      this.backgroundColor = backgroundColor;
      this.index = index;
      this.raphael = raphael;
      this.deselect = __bind(this.deselect, this);
      this.select = __bind(this.select, this);
      this.sin_p0 = Math.sin(p0);
      this.cos_p0 = Math.cos(p0);
      this.sin_p1 = Math.sin(p1);
      this.cos_p1 = Math.cos(p1);
      this.is_long = p1 - p0 > Math.PI ? 1 : 0;
      this.path = this.calcSegment(this.inner + 3, this.inner + this.outer - 5);
      this.selectedPath = this.calcSegment(this.inner + 3, this.inner + this.outer);
      this.hilight = this.calcArc(this.inner);
    }
    DonutSegment.prototype.calcArcPoints = function (r) {
      return [this.cx + r * this.sin_p0, this.cy + r * this.cos_p0, this.cx + r * this.sin_p1, this.cy + r * this.cos_p1];
    };
    DonutSegment.prototype.calcSegment = function (r1, r2) {
      var ix0, ix1, iy0, iy1, ox0, ox1, oy0, oy1, _ref, _ref1;
      _ref = this.calcArcPoints(r1), ix0 = _ref[0], iy0 = _ref[1], ix1 = _ref[2], iy1 = _ref[3];
      _ref1 = this.calcArcPoints(r2), ox0 = _ref1[0], oy0 = _ref1[1], ox1 = _ref1[2], oy1 = _ref1[3];
      return "M" + ix0 + "," + iy0 + ("A" + r1 + "," + r1 + ",0," + this.is_long + ",0," + ix1 + "," + iy1) + ("L" + ox1 + "," + oy1) + ("A" + r2 + "," + r2 + ",0," + this.is_long + ",1," + ox0 + "," + oy0) + "Z";
    };
    DonutSegment.prototype.calcArc = function (r) {
      var ix0, ix1, iy0, iy1, _ref;
      _ref = this.calcArcPoints(r), ix0 = _ref[0], iy0 = _ref[1], ix1 = _ref[2], iy1 = _ref[3];
      return "M" + ix0 + "," + iy0 + ("A" + r + "," + r + ",0," + this.is_long + ",0," + ix1 + "," + iy1);
    };
    DonutSegment.prototype.render = function () {
      var _this = this;
      this.arc = this.drawDonutArc(this.hilight, this.color);
      return this.seg = this.drawDonutSegment(this.path, this.color, this.backgroundColor, function () {
        return _this.fire('hover', _this.index);
      }, function () {
        return _this.fire('click', _this.index);
      });
    };
    DonutSegment.prototype.drawDonutArc = function (path, color) {
      return this.raphael.path(path).attr({
        stroke: color,
        'stroke-width': 2,
        opacity: 0
      });
    };
    DonutSegment.prototype.drawDonutSegment = function (path, fillColor, strokeColor, hoverFunction, clickFunction) {
      return this.raphael.path(path).attr({
        fill: fillColor,
        stroke: strokeColor,
        'stroke-width': 3
      }).hover(hoverFunction).click(clickFunction);
    };
    DonutSegment.prototype.select = function () {
      if (!this.selected) {
        this.seg.animate({
          path: this.selectedPath
        }, 150, '<>');
        this.arc.animate({
          opacity: 1
        }, 150, '<>');
        return this.selected = true;
      }
    };
    DonutSegment.prototype.deselect = function () {
      if (this.selected) {
        this.seg.animate({
          path: this.path
        }, 150, '<>');
        this.arc.animate({
          opacity: 0
        }, 150, '<>');
        return this.selected = false;
      }
    };
    return DonutSegment;
  }(Morris.EventEmitter);
}).call(this);

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_internals_export_js","vendors-node_modules_core-js_internals_add-to-unscopables_js-node_modules_core-js_internals_a-09983a","vendors-node_modules_core-js_internals_array-slice_js-node_modules_core-js_internals_function-caeab8","vendors-node_modules_jquery_dist_jquery_js","vendors-node_modules_core-js_internals_advance-string-index_js-node_modules_core-js_internals-27e96d","vendors-node_modules_core-js_modules_es_array_concat_js-node_modules_core-js_modules_es_array-ec8af7","vendors-node_modules_core-js_internals_does-not-exceed-safe-integer_js-node_modules_core-js_i-60ed0e"], () => (__webpack_exec__("./assets/css/portoadmin/vendor/morris/morris.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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L1QsS0FBSyxDQUFDZ1UsYUFBYSxDQUFDLENBQUMzRCxLQUFLLENBQUM0RCxhQUFhLENBQUM7SUFDOUMsQ0FBQztJQUVEaEQsWUFBWSxDQUFDdFosU0FBUyxDQUFDeVksTUFBTSxHQUFHLFlBQVc7TUFDekMsSUFBSSxDQUFDLElBQUksQ0FBQzhELFFBQVEsRUFBRTtRQUNsQixJQUFJLENBQUN0RCxHQUFHLENBQUMvRixPQUFPLENBQUM7VUFDZnZHLElBQUksRUFBRSxJQUFJLENBQUN3TztRQUNiLENBQUMsRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDO1FBQ2IsSUFBSSxDQUFDYSxHQUFHLENBQUM5SSxPQUFPLENBQUM7VUFDZjhFLE9BQU8sRUFBRTtRQUNYLENBQUMsRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDO1FBQ2IsT0FBTyxJQUFJLENBQUN1RSxRQUFRLEdBQUcsSUFBSTtNQUM3QjtJQUNGLENBQUM7SUFFRGpELFlBQVksQ0FBQ3RaLFNBQVMsQ0FBQzRaLFFBQVEsR0FBRyxZQUFXO01BQzNDLElBQUksSUFBSSxDQUFDMkMsUUFBUSxFQUFFO1FBQ2pCLElBQUksQ0FBQ3RELEdBQUcsQ0FBQy9GLE9BQU8sQ0FBQztVQUNmdkcsSUFBSSxFQUFFLElBQUksQ0FBQ0E7UUFDYixDQUFDLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQztRQUNiLElBQUksQ0FBQ3FQLEdBQUcsQ0FBQzlJLE9BQU8sQ0FBQztVQUNmOEUsT0FBTyxFQUFFO1FBQ1gsQ0FBQyxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUM7UUFDYixPQUFPLElBQUksQ0FBQ3VFLFFBQVEsR0FBRyxLQUFLO01BQzlCO0lBQ0YsQ0FBQztJQUVELE9BQU9qRCxZQUFZO0VBRXJCLENBQUMsQ0FBRXphLE1BQU0sQ0FBQzZCLFlBQVksQ0FBQztBQUV6QixDQUFDLEVBQUViLElBQUksQ0FBQyxJQUFJLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Fzc2V0cy9jc3MvcG9ydG9hZG1pbi92ZW5kb3IvbW9ycmlzL21vcnJpcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBAbGljZW5zZVxubW9ycmlzLmpzIHYwLjUuMFxuQ29weXJpZ2h0IDIwMTQgT2xseSBTbWl0aCBBbGwgcmlnaHRzIHJlc2VydmVkLlxuTGljZW5zZWQgdW5kZXIgdGhlIEJTRC0yLUNsYXVzZSBMaWNlbnNlLlxuKi9cblxuXG4oZnVuY3Rpb24oKSB7XG4gIHZhciAkLCBNb3JyaXMsIG1pbnV0ZXNTcGVjSGVscGVyLCBzZWNvbmRzU3BlY0hlbHBlcixcbiAgICBfX3NsaWNlID0gW10uc2xpY2UsXG4gICAgX19iaW5kID0gZnVuY3Rpb24oZm4sIG1lKXsgcmV0dXJuIGZ1bmN0aW9uKCl7IHJldHVybiBmbi5hcHBseShtZSwgYXJndW1lbnRzKTsgfTsgfSxcbiAgICBfX2hhc1Byb3AgPSB7fS5oYXNPd25Qcm9wZXJ0eSxcbiAgICBfX2V4dGVuZHMgPSBmdW5jdGlvbihjaGlsZCwgcGFyZW50KSB7IGZvciAodmFyIGtleSBpbiBwYXJlbnQpIHsgaWYgKF9faGFzUHJvcC5jYWxsKHBhcmVudCwga2V5KSkgY2hpbGRba2V5XSA9IHBhcmVudFtrZXldOyB9IGZ1bmN0aW9uIGN0b3IoKSB7IHRoaXMuY29uc3RydWN0b3IgPSBjaGlsZDsgfSBjdG9yLnByb3RvdHlwZSA9IHBhcmVudC5wcm90b3R5cGU7IGNoaWxkLnByb3RvdHlwZSA9IG5ldyBjdG9yKCk7IGNoaWxkLl9fc3VwZXJfXyA9IHBhcmVudC5wcm90b3R5cGU7IHJldHVybiBjaGlsZDsgfSxcbiAgICBfX2luZGV4T2YgPSBbXS5pbmRleE9mIHx8IGZ1bmN0aW9uKGl0ZW0pIHsgZm9yICh2YXIgaSA9IDAsIGwgPSB0aGlzLmxlbmd0aDsgaSA8IGw7IGkrKykgeyBpZiAoaSBpbiB0aGlzICYmIHRoaXNbaV0gPT09IGl0ZW0pIHJldHVybiBpOyB9IHJldHVybiAtMTsgfTtcblxuICBNb3JyaXMgPSB3aW5kb3cuTW9ycmlzID0ge307XG5cbiAgJCA9IGpRdWVyeTtcblxuICBNb3JyaXMuRXZlbnRFbWl0dGVyID0gKGZ1bmN0aW9uKCkge1xuICAgIGZ1bmN0aW9uIEV2ZW50RW1pdHRlcigpIHt9XG5cbiAgICBFdmVudEVtaXR0ZXIucHJvdG90eXBlLm9uID0gZnVuY3Rpb24obmFtZSwgaGFuZGxlcikge1xuICAgICAgaWYgKHRoaXMuaGFuZGxlcnMgPT0gbnVsbCkge1xuICAgICAgICB0aGlzLmhhbmRsZXJzID0ge307XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5oYW5kbGVyc1tuYW1lXSA9PSBudWxsKSB7XG4gICAgICAgIHRoaXMuaGFuZGxlcnNbbmFtZV0gPSBbXTtcbiAgICAgIH1cbiAgICAgIHRoaXMuaGFuZGxlcnNbbmFtZV0ucHVzaChoYW5kbGVyKTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG5cbiAgICBFdmVudEVtaXR0ZXIucHJvdG90eXBlLmZpcmUgPSBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBhcmdzLCBoYW5kbGVyLCBuYW1lLCBfaSwgX2xlbiwgX3JlZiwgX3Jlc3VsdHM7XG4gICAgICBuYW1lID0gYXJndW1lbnRzWzBdLCBhcmdzID0gMiA8PSBhcmd1bWVudHMubGVuZ3RoID8gX19zbGljZS5jYWxsKGFyZ3VtZW50cywgMSkgOiBbXTtcbiAgICAgIGlmICgodGhpcy5oYW5kbGVycyAhPSBudWxsKSAmJiAodGhpcy5oYW5kbGVyc1tuYW1lXSAhPSBudWxsKSkge1xuICAgICAgICBfcmVmID0gdGhpcy5oYW5kbGVyc1tuYW1lXTtcbiAgICAgICAgX3Jlc3VsdHMgPSBbXTtcbiAgICAgICAgZm9yIChfaSA9IDAsIF9sZW4gPSBfcmVmLmxlbmd0aDsgX2kgPCBfbGVuOyBfaSsrKSB7XG4gICAgICAgICAgaGFuZGxlciA9IF9yZWZbX2ldO1xuICAgICAgICAgIF9yZXN1bHRzLnB1c2goaGFuZGxlci5hcHBseShudWxsLCBhcmdzKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIF9yZXN1bHRzO1xuICAgICAgfVxuICAgIH07XG5cbiAgICByZXR1cm4gRXZlbnRFbWl0dGVyO1xuXG4gIH0pKCk7XG5cbiAgTW9ycmlzLmNvbW1hcyA9IGZ1bmN0aW9uKG51bSkge1xuICAgIHZhciBhYnNudW0sIGludG51bSwgcmV0LCBzdHJhYnNudW07XG4gICAgaWYgKG51bSAhPSBudWxsKSB7XG4gICAgICByZXQgPSBudW0gPCAwID8gXCItXCIgOiBcIlwiO1xuICAgICAgYWJzbnVtID0gTWF0aC5hYnMobnVtKTtcbiAgICAgIGludG51bSA9IE1hdGguZmxvb3IoYWJzbnVtKS50b0ZpeGVkKDApO1xuICAgICAgcmV0ICs9IGludG51bS5yZXBsYWNlKC8oPz0oPzpcXGR7M30pKyQpKD8hXikvZywgJywnKTtcbiAgICAgIHN0cmFic251bSA9IGFic251bS50b1N0cmluZygpO1xuICAgICAgaWYgKHN0cmFic251bS5sZW5ndGggPiBpbnRudW0ubGVuZ3RoKSB7XG4gICAgICAgIHJldCArPSBzdHJhYnNudW0uc2xpY2UoaW50bnVtLmxlbmd0aCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gcmV0O1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gJy0nO1xuICAgIH1cbiAgfTtcblxuICBNb3JyaXMucGFkMiA9IGZ1bmN0aW9uKG51bWJlcikge1xuICAgIHJldHVybiAobnVtYmVyIDwgMTAgPyAnMCcgOiAnJykgKyBudW1iZXI7XG4gIH07XG5cbiAgTW9ycmlzLkdyaWQgPSAoZnVuY3Rpb24oX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKEdyaWQsIF9zdXBlcik7XG5cbiAgICBmdW5jdGlvbiBHcmlkKG9wdGlvbnMpIHtcbiAgICAgIHRoaXMucmVzaXplSGFuZGxlciA9IF9fYmluZCh0aGlzLnJlc2l6ZUhhbmRsZXIsIHRoaXMpO1xuICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5lbGVtZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICB0aGlzLmVsID0gJChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChvcHRpb25zLmVsZW1lbnQpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZWwgPSAkKG9wdGlvbnMuZWxlbWVudCk7XG4gICAgICB9XG4gICAgICBpZiAoKHRoaXMuZWwgPT0gbnVsbCkgfHwgdGhpcy5lbC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiR3JhcGggY29udGFpbmVyIGVsZW1lbnQgbm90IGZvdW5kXCIpO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuZWwuY3NzKCdwb3NpdGlvbicpID09PSAnc3RhdGljJykge1xuICAgICAgICB0aGlzLmVsLmNzcygncG9zaXRpb24nLCAncmVsYXRpdmUnKTtcbiAgICAgIH1cbiAgICAgIHRoaXMub3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCB0aGlzLmdyaWREZWZhdWx0cywgdGhpcy5kZWZhdWx0cyB8fCB7fSwgb3B0aW9ucyk7XG4gICAgICBpZiAodHlwZW9mIHRoaXMub3B0aW9ucy51bml0cyA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgdGhpcy5vcHRpb25zLnBvc3RVbml0cyA9IG9wdGlvbnMudW5pdHM7XG4gICAgICB9XG4gICAgICB0aGlzLnJhcGhhZWwgPSBuZXcgUmFwaGFlbCh0aGlzLmVsWzBdKTtcbiAgICAgIHRoaXMuZWxlbWVudFdpZHRoID0gbnVsbDtcbiAgICAgIHRoaXMuZWxlbWVudEhlaWdodCA9IG51bGw7XG4gICAgICB0aGlzLmRpcnR5ID0gZmFsc2U7XG4gICAgICB0aGlzLnNlbGVjdEZyb20gPSBudWxsO1xuICAgICAgaWYgKHRoaXMuaW5pdCkge1xuICAgICAgICB0aGlzLmluaXQoKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuc2V0RGF0YSh0aGlzLm9wdGlvbnMuZGF0YSk7XG4gICAgICB0aGlzLmVsLmJpbmQoJ21vdXNlbW92ZScsIGZ1bmN0aW9uKGV2dCkge1xuICAgICAgICB2YXIgbGVmdCwgb2Zmc2V0LCByaWdodCwgd2lkdGgsIHg7XG4gICAgICAgIG9mZnNldCA9IF90aGlzLmVsLm9mZnNldCgpO1xuICAgICAgICB4ID0gZXZ0LnBhZ2VYIC0gb2Zmc2V0LmxlZnQ7XG4gICAgICAgIGlmIChfdGhpcy5zZWxlY3RGcm9tKSB7XG4gICAgICAgICAgbGVmdCA9IF90aGlzLmRhdGFbX3RoaXMuaGl0VGVzdChNYXRoLm1pbih4LCBfdGhpcy5zZWxlY3RGcm9tKSldLl94O1xuICAgICAgICAgIHJpZ2h0ID0gX3RoaXMuZGF0YVtfdGhpcy5oaXRUZXN0KE1hdGgubWF4KHgsIF90aGlzLnNlbGVjdEZyb20pKV0uX3g7XG4gICAgICAgICAgd2lkdGggPSByaWdodCAtIGxlZnQ7XG4gICAgICAgICAgcmV0dXJuIF90aGlzLnNlbGVjdGlvblJlY3QuYXR0cih7XG4gICAgICAgICAgICB4OiBsZWZ0LFxuICAgICAgICAgICAgd2lkdGg6IHdpZHRoXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIF90aGlzLmZpcmUoJ2hvdmVybW92ZScsIHgsIGV2dC5wYWdlWSAtIG9mZnNldC50b3ApO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHRoaXMuZWwuYmluZCgnbW91c2VsZWF2ZScsIGZ1bmN0aW9uKGV2dCkge1xuICAgICAgICBpZiAoX3RoaXMuc2VsZWN0RnJvbSkge1xuICAgICAgICAgIF90aGlzLnNlbGVjdGlvblJlY3QuaGlkZSgpO1xuICAgICAgICAgIF90aGlzLnNlbGVjdEZyb20gPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBfdGhpcy5maXJlKCdob3Zlcm91dCcpO1xuICAgICAgfSk7XG4gICAgICB0aGlzLmVsLmJpbmQoJ3RvdWNoc3RhcnQgdG91Y2htb3ZlIHRvdWNoZW5kJywgZnVuY3Rpb24oZXZ0KSB7XG4gICAgICAgIHZhciBvZmZzZXQsIHRvdWNoO1xuICAgICAgICB0b3VjaCA9IGV2dC5vcmlnaW5hbEV2ZW50LnRvdWNoZXNbMF0gfHwgZXZ0Lm9yaWdpbmFsRXZlbnQuY2hhbmdlZFRvdWNoZXNbMF07XG4gICAgICAgIG9mZnNldCA9IF90aGlzLmVsLm9mZnNldCgpO1xuICAgICAgICByZXR1cm4gX3RoaXMuZmlyZSgnaG92ZXJtb3ZlJywgdG91Y2gucGFnZVggLSBvZmZzZXQubGVmdCwgdG91Y2gucGFnZVkgLSBvZmZzZXQudG9wKTtcbiAgICAgIH0pO1xuICAgICAgdGhpcy5lbC5iaW5kKCdjbGljaycsIGZ1bmN0aW9uKGV2dCkge1xuICAgICAgICB2YXIgb2Zmc2V0O1xuICAgICAgICBvZmZzZXQgPSBfdGhpcy5lbC5vZmZzZXQoKTtcbiAgICAgICAgcmV0dXJuIF90aGlzLmZpcmUoJ2dyaWRjbGljaycsIGV2dC5wYWdlWCAtIG9mZnNldC5sZWZ0LCBldnQucGFnZVkgLSBvZmZzZXQudG9wKTtcbiAgICAgIH0pO1xuICAgICAgaWYgKHRoaXMub3B0aW9ucy5yYW5nZVNlbGVjdCkge1xuICAgICAgICB0aGlzLnNlbGVjdGlvblJlY3QgPSB0aGlzLnJhcGhhZWwucmVjdCgwLCAwLCAwLCB0aGlzLmVsLmlubmVySGVpZ2h0KCkpLmF0dHIoe1xuICAgICAgICAgIGZpbGw6IHRoaXMub3B0aW9ucy5yYW5nZVNlbGVjdENvbG9yLFxuICAgICAgICAgIHN0cm9rZTogZmFsc2VcbiAgICAgICAgfSkudG9CYWNrKCkuaGlkZSgpO1xuICAgICAgICB0aGlzLmVsLmJpbmQoJ21vdXNlZG93bicsIGZ1bmN0aW9uKGV2dCkge1xuICAgICAgICAgIHZhciBvZmZzZXQ7XG4gICAgICAgICAgb2Zmc2V0ID0gX3RoaXMuZWwub2Zmc2V0KCk7XG4gICAgICAgICAgcmV0dXJuIF90aGlzLnN0YXJ0UmFuZ2UoZXZ0LnBhZ2VYIC0gb2Zmc2V0LmxlZnQpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5lbC5iaW5kKCdtb3VzZXVwJywgZnVuY3Rpb24oZXZ0KSB7XG4gICAgICAgICAgdmFyIG9mZnNldDtcbiAgICAgICAgICBvZmZzZXQgPSBfdGhpcy5lbC5vZmZzZXQoKTtcbiAgICAgICAgICBfdGhpcy5lbmRSYW5nZShldnQucGFnZVggLSBvZmZzZXQubGVmdCk7XG4gICAgICAgICAgcmV0dXJuIF90aGlzLmZpcmUoJ2hvdmVybW92ZScsIGV2dC5wYWdlWCAtIG9mZnNldC5sZWZ0LCBldnQucGFnZVkgLSBvZmZzZXQudG9wKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5vcHRpb25zLnJlc2l6ZSkge1xuICAgICAgICAkKHdpbmRvdykuYmluZCgncmVzaXplJywgZnVuY3Rpb24oZXZ0KSB7XG4gICAgICAgICAgaWYgKF90aGlzLnRpbWVvdXRJZCAhPSBudWxsKSB7XG4gICAgICAgICAgICB3aW5kb3cuY2xlYXJUaW1lb3V0KF90aGlzLnRpbWVvdXRJZCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBfdGhpcy50aW1lb3V0SWQgPSB3aW5kb3cuc2V0VGltZW91dChfdGhpcy5yZXNpemVIYW5kbGVyLCAxMDApO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIHRoaXMuZWwuY3NzKCctd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3InLCAncmdiYSgwLDAsMCwwKScpO1xuICAgICAgaWYgKHRoaXMucG9zdEluaXQpIHtcbiAgICAgICAgdGhpcy5wb3N0SW5pdCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIEdyaWQucHJvdG90eXBlLmdyaWREZWZhdWx0cyA9IHtcbiAgICAgIGRhdGVGb3JtYXQ6IG51bGwsXG4gICAgICBheGVzOiB0cnVlLFxuICAgICAgZ3JpZDogdHJ1ZSxcbiAgICAgIGdyaWRMaW5lQ29sb3I6ICcjYWFhJyxcbiAgICAgIGdyaWRTdHJva2VXaWR0aDogMC41LFxuICAgICAgZ3JpZFRleHRDb2xvcjogJyM4ODgnLFxuICAgICAgZ3JpZFRleHRTaXplOiAxMixcbiAgICAgIGdyaWRUZXh0RmFtaWx5OiAnc2Fucy1zZXJpZicsXG4gICAgICBncmlkVGV4dFdlaWdodDogJ25vcm1hbCcsXG4gICAgICBoaWRlSG92ZXI6IGZhbHNlLFxuICAgICAgeUxhYmVsRm9ybWF0OiBudWxsLFxuICAgICAgeExhYmVsQW5nbGU6IDAsXG4gICAgICBudW1MaW5lczogNSxcbiAgICAgIHBhZGRpbmc6IDI1LFxuICAgICAgcGFyc2VUaW1lOiB0cnVlLFxuICAgICAgcG9zdFVuaXRzOiAnJyxcbiAgICAgIHByZVVuaXRzOiAnJyxcbiAgICAgIHltYXg6ICdhdXRvJyxcbiAgICAgIHltaW46ICdhdXRvIDAnLFxuICAgICAgZ29hbHM6IFtdLFxuICAgICAgZ29hbFN0cm9rZVdpZHRoOiAxLjAsXG4gICAgICBnb2FsTGluZUNvbG9yczogWycjNjY2NjMzJywgJyM5OTk5NjYnLCAnI2NjNjY2NicsICcjNjYzMzMzJ10sXG4gICAgICBldmVudHM6IFtdLFxuICAgICAgZXZlbnRTdHJva2VXaWR0aDogMS4wLFxuICAgICAgZXZlbnRMaW5lQ29sb3JzOiBbJyMwMDVhMDQnLCAnI2NjZmZiYicsICcjM2E1ZjBiJywgJyMwMDU1MDInXSxcbiAgICAgIHJhbmdlU2VsZWN0OiBudWxsLFxuICAgICAgcmFuZ2VTZWxlY3RDb2xvcjogJyNlZWYnLFxuICAgICAgcmVzaXplOiBmYWxzZVxuICAgIH07XG5cbiAgICBHcmlkLnByb3RvdHlwZS5zZXREYXRhID0gZnVuY3Rpb24oZGF0YSwgcmVkcmF3KSB7XG4gICAgICB2YXIgZSwgaWR4LCBpbmRleCwgbWF4R29hbCwgbWluR29hbCwgcmV0LCByb3csIHN0ZXAsIHRvdGFsLCB5LCB5a2V5LCB5bWF4LCB5bWluLCB5dmFsLCBfcmVmO1xuICAgICAgaWYgKHJlZHJhdyA9PSBudWxsKSB7XG4gICAgICAgIHJlZHJhdyA9IHRydWU7XG4gICAgICB9XG4gICAgICB0aGlzLm9wdGlvbnMuZGF0YSA9IGRhdGE7XG4gICAgICBpZiAoKGRhdGEgPT0gbnVsbCkgfHwgZGF0YS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgdGhpcy5kYXRhID0gW107XG4gICAgICAgIHRoaXMucmFwaGFlbC5jbGVhcigpO1xuICAgICAgICBpZiAodGhpcy5ob3ZlciAhPSBudWxsKSB7XG4gICAgICAgICAgdGhpcy5ob3Zlci5oaWRlKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgeW1heCA9IHRoaXMuY3VtdWxhdGl2ZSA/IDAgOiBudWxsO1xuICAgICAgeW1pbiA9IHRoaXMuY3VtdWxhdGl2ZSA/IDAgOiBudWxsO1xuICAgICAgaWYgKHRoaXMub3B0aW9ucy5nb2Fscy5sZW5ndGggPiAwKSB7XG4gICAgICAgIG1pbkdvYWwgPSBNYXRoLm1pbi5hcHBseShNYXRoLCB0aGlzLm9wdGlvbnMuZ29hbHMpO1xuICAgICAgICBtYXhHb2FsID0gTWF0aC5tYXguYXBwbHkoTWF0aCwgdGhpcy5vcHRpb25zLmdvYWxzKTtcbiAgICAgICAgeW1pbiA9IHltaW4gIT0gbnVsbCA/IE1hdGgubWluKHltaW4sIG1pbkdvYWwpIDogbWluR29hbDtcbiAgICAgICAgeW1heCA9IHltYXggIT0gbnVsbCA/IE1hdGgubWF4KHltYXgsIG1heEdvYWwpIDogbWF4R29hbDtcbiAgICAgIH1cbiAgICAgIHRoaXMuZGF0YSA9IChmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIF9pLCBfbGVuLCBfcmVzdWx0cztcbiAgICAgICAgX3Jlc3VsdHMgPSBbXTtcbiAgICAgICAgZm9yIChpbmRleCA9IF9pID0gMCwgX2xlbiA9IGRhdGEubGVuZ3RoOyBfaSA8IF9sZW47IGluZGV4ID0gKytfaSkge1xuICAgICAgICAgIHJvdyA9IGRhdGFbaW5kZXhdO1xuICAgICAgICAgIHJldCA9IHtcbiAgICAgICAgICAgIHNyYzogcm93XG4gICAgICAgICAgfTtcbiAgICAgICAgICByZXQubGFiZWwgPSByb3dbdGhpcy5vcHRpb25zLnhrZXldO1xuICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMucGFyc2VUaW1lKSB7XG4gICAgICAgICAgICByZXQueCA9IE1vcnJpcy5wYXJzZURhdGUocmV0LmxhYmVsKTtcbiAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMuZGF0ZUZvcm1hdCkge1xuICAgICAgICAgICAgICByZXQubGFiZWwgPSB0aGlzLm9wdGlvbnMuZGF0ZUZvcm1hdChyZXQueCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiByZXQubGFiZWwgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICAgIHJldC5sYWJlbCA9IG5ldyBEYXRlKHJldC5sYWJlbCkudG9TdHJpbmcoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0LnggPSBpbmRleDtcbiAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMueExhYmVsRm9ybWF0KSB7XG4gICAgICAgICAgICAgIHJldC5sYWJlbCA9IHRoaXMub3B0aW9ucy54TGFiZWxGb3JtYXQocmV0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgdG90YWwgPSAwO1xuICAgICAgICAgIHJldC55ID0gKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdmFyIF9qLCBfbGVuMSwgX3JlZiwgX3Jlc3VsdHMxO1xuICAgICAgICAgICAgX3JlZiA9IHRoaXMub3B0aW9ucy55a2V5cztcbiAgICAgICAgICAgIF9yZXN1bHRzMSA9IFtdO1xuICAgICAgICAgICAgZm9yIChpZHggPSBfaiA9IDAsIF9sZW4xID0gX3JlZi5sZW5ndGg7IF9qIDwgX2xlbjE7IGlkeCA9ICsrX2opIHtcbiAgICAgICAgICAgICAgeWtleSA9IF9yZWZbaWR4XTtcbiAgICAgICAgICAgICAgeXZhbCA9IHJvd1t5a2V5XTtcbiAgICAgICAgICAgICAgaWYgKHR5cGVvZiB5dmFsID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIHl2YWwgPSBwYXJzZUZsb2F0KHl2YWwpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGlmICgoeXZhbCAhPSBudWxsKSAmJiB0eXBlb2YgeXZhbCAhPT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgICAgICB5dmFsID0gbnVsbDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBpZiAoeXZhbCAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY3VtdWxhdGl2ZSkge1xuICAgICAgICAgICAgICAgICAgdG90YWwgKz0geXZhbDtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgaWYgKHltYXggIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICB5bWF4ID0gTWF0aC5tYXgoeXZhbCwgeW1heCk7XG4gICAgICAgICAgICAgICAgICAgIHltaW4gPSBNYXRoLm1pbih5dmFsLCB5bWluKTtcbiAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHltYXggPSB5bWluID0geXZhbDtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgaWYgKHRoaXMuY3VtdWxhdGl2ZSAmJiAodG90YWwgIT0gbnVsbCkpIHtcbiAgICAgICAgICAgICAgICB5bWF4ID0gTWF0aC5tYXgodG90YWwsIHltYXgpO1xuICAgICAgICAgICAgICAgIHltaW4gPSBNYXRoLm1pbih0b3RhbCwgeW1pbik7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgX3Jlc3VsdHMxLnB1c2goeXZhbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gX3Jlc3VsdHMxO1xuICAgICAgICAgIH0pLmNhbGwodGhpcyk7XG4gICAgICAgICAgX3Jlc3VsdHMucHVzaChyZXQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBfcmVzdWx0cztcbiAgICAgIH0pLmNhbGwodGhpcyk7XG4gICAgICBpZiAodGhpcy5vcHRpb25zLnBhcnNlVGltZSkge1xuICAgICAgICB0aGlzLmRhdGEgPSB0aGlzLmRhdGEuc29ydChmdW5jdGlvbihhLCBiKSB7XG4gICAgICAgICAgcmV0dXJuIChhLnggPiBiLngpIC0gKGIueCA+IGEueCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgdGhpcy54bWluID0gdGhpcy5kYXRhWzBdLng7XG4gICAgICB0aGlzLnhtYXggPSB0aGlzLmRhdGFbdGhpcy5kYXRhLmxlbmd0aCAtIDFdLng7XG4gICAgICB0aGlzLmV2ZW50cyA9IFtdO1xuICAgICAgaWYgKHRoaXMub3B0aW9ucy5ldmVudHMubGVuZ3RoID4gMCkge1xuICAgICAgICBpZiAodGhpcy5vcHRpb25zLnBhcnNlVGltZSkge1xuICAgICAgICAgIHRoaXMuZXZlbnRzID0gKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdmFyIF9pLCBfbGVuLCBfcmVmLCBfcmVzdWx0cztcbiAgICAgICAgICAgIF9yZWYgPSB0aGlzLm9wdGlvbnMuZXZlbnRzO1xuICAgICAgICAgICAgX3Jlc3VsdHMgPSBbXTtcbiAgICAgICAgICAgIGZvciAoX2kgPSAwLCBfbGVuID0gX3JlZi5sZW5ndGg7IF9pIDwgX2xlbjsgX2krKykge1xuICAgICAgICAgICAgICBlID0gX3JlZltfaV07XG4gICAgICAgICAgICAgIF9yZXN1bHRzLnB1c2goTW9ycmlzLnBhcnNlRGF0ZShlKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gX3Jlc3VsdHM7XG4gICAgICAgICAgfSkuY2FsbCh0aGlzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmV2ZW50cyA9IHRoaXMub3B0aW9ucy5ldmVudHM7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy54bWF4ID0gTWF0aC5tYXgodGhpcy54bWF4LCBNYXRoLm1heC5hcHBseShNYXRoLCB0aGlzLmV2ZW50cykpO1xuICAgICAgICB0aGlzLnhtaW4gPSBNYXRoLm1pbih0aGlzLnhtaW4sIE1hdGgubWluLmFwcGx5KE1hdGgsIHRoaXMuZXZlbnRzKSk7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy54bWluID09PSB0aGlzLnhtYXgpIHtcbiAgICAgICAgdGhpcy54bWluIC09IDE7XG4gICAgICAgIHRoaXMueG1heCArPSAxO1xuICAgICAgfVxuICAgICAgdGhpcy55bWluID0gdGhpcy55Ym91bmRhcnkoJ21pbicsIHltaW4pO1xuICAgICAgdGhpcy55bWF4ID0gdGhpcy55Ym91bmRhcnkoJ21heCcsIHltYXgpO1xuICAgICAgaWYgKHRoaXMueW1pbiA9PT0gdGhpcy55bWF4KSB7XG4gICAgICAgIGlmICh5bWluKSB7XG4gICAgICAgICAgdGhpcy55bWluIC09IDE7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy55bWF4ICs9IDE7XG4gICAgICB9XG4gICAgICBpZiAoKChfcmVmID0gdGhpcy5vcHRpb25zLmF4ZXMpID09PSB0cnVlIHx8IF9yZWYgPT09ICdib3RoJyB8fCBfcmVmID09PSAneScpIHx8IHRoaXMub3B0aW9ucy5ncmlkID09PSB0cnVlKSB7XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMueW1heCA9PT0gdGhpcy5ncmlkRGVmYXVsdHMueW1heCAmJiB0aGlzLm9wdGlvbnMueW1pbiA9PT0gdGhpcy5ncmlkRGVmYXVsdHMueW1pbikge1xuICAgICAgICAgIHRoaXMuZ3JpZCA9IHRoaXMuYXV0b0dyaWRMaW5lcyh0aGlzLnltaW4sIHRoaXMueW1heCwgdGhpcy5vcHRpb25zLm51bUxpbmVzKTtcbiAgICAgICAgICB0aGlzLnltaW4gPSBNYXRoLm1pbih0aGlzLnltaW4sIHRoaXMuZ3JpZFswXSk7XG4gICAgICAgICAgdGhpcy55bWF4ID0gTWF0aC5tYXgodGhpcy55bWF4LCB0aGlzLmdyaWRbdGhpcy5ncmlkLmxlbmd0aCAtIDFdKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzdGVwID0gKHRoaXMueW1heCAtIHRoaXMueW1pbikgLyAodGhpcy5vcHRpb25zLm51bUxpbmVzIC0gMSk7XG4gICAgICAgICAgdGhpcy5ncmlkID0gKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdmFyIF9pLCBfcmVmMSwgX3JlZjIsIF9yZXN1bHRzO1xuICAgICAgICAgICAgX3Jlc3VsdHMgPSBbXTtcbiAgICAgICAgICAgIGZvciAoeSA9IF9pID0gX3JlZjEgPSB0aGlzLnltaW4sIF9yZWYyID0gdGhpcy55bWF4OyBzdGVwID4gMCA/IF9pIDw9IF9yZWYyIDogX2kgPj0gX3JlZjI7IHkgPSBfaSArPSBzdGVwKSB7XG4gICAgICAgICAgICAgIF9yZXN1bHRzLnB1c2goeSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gX3Jlc3VsdHM7XG4gICAgICAgICAgfSkuY2FsbCh0aGlzKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdGhpcy5kaXJ0eSA9IHRydWU7XG4gICAgICBpZiAocmVkcmF3KSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlZHJhdygpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBHcmlkLnByb3RvdHlwZS55Ym91bmRhcnkgPSBmdW5jdGlvbihib3VuZGFyeVR5cGUsIGN1cnJlbnRWYWx1ZSkge1xuICAgICAgdmFyIGJvdW5kYXJ5T3B0aW9uLCBzdWdnZXN0ZWRWYWx1ZTtcbiAgICAgIGJvdW5kYXJ5T3B0aW9uID0gdGhpcy5vcHRpb25zW1wieVwiICsgYm91bmRhcnlUeXBlXTtcbiAgICAgIGlmICh0eXBlb2YgYm91bmRhcnlPcHRpb24gPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGlmIChib3VuZGFyeU9wdGlvbi5zbGljZSgwLCA0KSA9PT0gJ2F1dG8nKSB7XG4gICAgICAgICAgaWYgKGJvdW5kYXJ5T3B0aW9uLmxlbmd0aCA+IDUpIHtcbiAgICAgICAgICAgIHN1Z2dlc3RlZFZhbHVlID0gcGFyc2VJbnQoYm91bmRhcnlPcHRpb24uc2xpY2UoNSksIDEwKTtcbiAgICAgICAgICAgIGlmIChjdXJyZW50VmFsdWUgPT0gbnVsbCkge1xuICAgICAgICAgICAgICByZXR1cm4gc3VnZ2VzdGVkVmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gTWF0aFtib3VuZGFyeVR5cGVdKGN1cnJlbnRWYWx1ZSwgc3VnZ2VzdGVkVmFsdWUpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFZhbHVlICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGN1cnJlbnRWYWx1ZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gcGFyc2VJbnQoYm91bmRhcnlPcHRpb24sIDEwKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGJvdW5kYXJ5T3B0aW9uO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBHcmlkLnByb3RvdHlwZS5hdXRvR3JpZExpbmVzID0gZnVuY3Rpb24oeW1pbiwgeW1heCwgbmxpbmVzKSB7XG4gICAgICB2YXIgZ21heCwgZ21pbiwgZ3JpZCwgc21hZywgc3Bhbiwgc3RlcCwgdW5pdCwgeSwgeW1hZztcbiAgICAgIHNwYW4gPSB5bWF4IC0geW1pbjtcbiAgICAgIHltYWcgPSBNYXRoLmZsb29yKE1hdGgubG9nKHNwYW4pIC8gTWF0aC5sb2coMTApKTtcbiAgICAgIHVuaXQgPSBNYXRoLnBvdygxMCwgeW1hZyk7XG4gICAgICBnbWluID0gTWF0aC5mbG9vcih5bWluIC8gdW5pdCkgKiB1bml0O1xuICAgICAgZ21heCA9IE1hdGguY2VpbCh5bWF4IC8gdW5pdCkgKiB1bml0O1xuICAgICAgc3RlcCA9IChnbWF4IC0gZ21pbikgLyAobmxpbmVzIC0gMSk7XG4gICAgICBpZiAodW5pdCA9PT0gMSAmJiBzdGVwID4gMSAmJiBNYXRoLmNlaWwoc3RlcCkgIT09IHN0ZXApIHtcbiAgICAgICAgc3RlcCA9IE1hdGguY2VpbChzdGVwKTtcbiAgICAgICAgZ21heCA9IGdtaW4gKyBzdGVwICogKG5saW5lcyAtIDEpO1xuICAgICAgfVxuICAgICAgaWYgKGdtaW4gPCAwICYmIGdtYXggPiAwKSB7XG4gICAgICAgIGdtaW4gPSBNYXRoLmZsb29yKHltaW4gLyBzdGVwKSAqIHN0ZXA7XG4gICAgICAgIGdtYXggPSBNYXRoLmNlaWwoeW1heCAvIHN0ZXApICogc3RlcDtcbiAgICAgIH1cbiAgICAgIGlmIChzdGVwIDwgMSkge1xuICAgICAgICBzbWFnID0gTWF0aC5mbG9vcihNYXRoLmxvZyhzdGVwKSAvIE1hdGgubG9nKDEwKSk7XG4gICAgICAgIGdyaWQgPSAoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgdmFyIF9pLCBfcmVzdWx0cztcbiAgICAgICAgICBfcmVzdWx0cyA9IFtdO1xuICAgICAgICAgIGZvciAoeSA9IF9pID0gZ21pbjsgc3RlcCA+IDAgPyBfaSA8PSBnbWF4IDogX2kgPj0gZ21heDsgeSA9IF9pICs9IHN0ZXApIHtcbiAgICAgICAgICAgIF9yZXN1bHRzLnB1c2gocGFyc2VGbG9hdCh5LnRvRml4ZWQoMSAtIHNtYWcpKSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBfcmVzdWx0cztcbiAgICAgICAgfSkoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGdyaWQgPSAoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgdmFyIF9pLCBfcmVzdWx0cztcbiAgICAgICAgICBfcmVzdWx0cyA9IFtdO1xuICAgICAgICAgIGZvciAoeSA9IF9pID0gZ21pbjsgc3RlcCA+IDAgPyBfaSA8PSBnbWF4IDogX2kgPj0gZ21heDsgeSA9IF9pICs9IHN0ZXApIHtcbiAgICAgICAgICAgIF9yZXN1bHRzLnB1c2goeSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBfcmVzdWx0cztcbiAgICAgICAgfSkoKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBncmlkO1xuICAgIH07XG5cbiAgICBHcmlkLnByb3RvdHlwZS5fY2FsYyA9IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIGJvdHRvbU9mZnNldHMsIGdyaWRMaW5lLCBoLCBpLCB3LCB5TGFiZWxXaWR0aHMsIF9yZWYsIF9yZWYxO1xuICAgICAgdyA9IHRoaXMuZWwud2lkdGgoKTtcbiAgICAgIGggPSB0aGlzLmVsLmhlaWdodCgpO1xuICAgICAgaWYgKHRoaXMuZWxlbWVudFdpZHRoICE9PSB3IHx8IHRoaXMuZWxlbWVudEhlaWdodCAhPT0gaCB8fCB0aGlzLmRpcnR5KSB7XG4gICAgICAgIHRoaXMuZWxlbWVudFdpZHRoID0gdztcbiAgICAgICAgdGhpcy5lbGVtZW50SGVpZ2h0ID0gaDtcbiAgICAgICAgdGhpcy5kaXJ0eSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmxlZnQgPSB0aGlzLm9wdGlvbnMucGFkZGluZztcbiAgICAgICAgdGhpcy5yaWdodCA9IHRoaXMuZWxlbWVudFdpZHRoIC0gdGhpcy5vcHRpb25zLnBhZGRpbmc7XG4gICAgICAgIHRoaXMudG9wID0gdGhpcy5vcHRpb25zLnBhZGRpbmc7XG4gICAgICAgIHRoaXMuYm90dG9tID0gdGhpcy5lbGVtZW50SGVpZ2h0IC0gdGhpcy5vcHRpb25zLnBhZGRpbmc7XG4gICAgICAgIGlmICgoX3JlZiA9IHRoaXMub3B0aW9ucy5heGVzKSA9PT0gdHJ1ZSB8fCBfcmVmID09PSAnYm90aCcgfHwgX3JlZiA9PT0gJ3knKSB7XG4gICAgICAgICAgeUxhYmVsV2lkdGhzID0gKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdmFyIF9pLCBfbGVuLCBfcmVmMSwgX3Jlc3VsdHM7XG4gICAgICAgICAgICBfcmVmMSA9IHRoaXMuZ3JpZDtcbiAgICAgICAgICAgIF9yZXN1bHRzID0gW107XG4gICAgICAgICAgICBmb3IgKF9pID0gMCwgX2xlbiA9IF9yZWYxLmxlbmd0aDsgX2kgPCBfbGVuOyBfaSsrKSB7XG4gICAgICAgICAgICAgIGdyaWRMaW5lID0gX3JlZjFbX2ldO1xuICAgICAgICAgICAgICBfcmVzdWx0cy5wdXNoKHRoaXMubWVhc3VyZVRleHQodGhpcy55QXhpc0Zvcm1hdChncmlkTGluZSkpLndpZHRoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBfcmVzdWx0cztcbiAgICAgICAgICB9KS5jYWxsKHRoaXMpO1xuICAgICAgICAgIHRoaXMubGVmdCArPSBNYXRoLm1heC5hcHBseShNYXRoLCB5TGFiZWxXaWR0aHMpO1xuICAgICAgICB9XG4gICAgICAgIGlmICgoX3JlZjEgPSB0aGlzLm9wdGlvbnMuYXhlcykgPT09IHRydWUgfHwgX3JlZjEgPT09ICdib3RoJyB8fCBfcmVmMSA9PT0gJ3gnKSB7XG4gICAgICAgICAgYm90dG9tT2Zmc2V0cyA9IChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHZhciBfaSwgX3JlZjIsIF9yZXN1bHRzO1xuICAgICAgICAgICAgX3Jlc3VsdHMgPSBbXTtcbiAgICAgICAgICAgIGZvciAoaSA9IF9pID0gMCwgX3JlZjIgPSB0aGlzLmRhdGEubGVuZ3RoOyAwIDw9IF9yZWYyID8gX2kgPCBfcmVmMiA6IF9pID4gX3JlZjI7IGkgPSAwIDw9IF9yZWYyID8gKytfaSA6IC0tX2kpIHtcbiAgICAgICAgICAgICAgX3Jlc3VsdHMucHVzaCh0aGlzLm1lYXN1cmVUZXh0KHRoaXMuZGF0YVtpXS50ZXh0LCAtdGhpcy5vcHRpb25zLnhMYWJlbEFuZ2xlKS5oZWlnaHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIF9yZXN1bHRzO1xuICAgICAgICAgIH0pLmNhbGwodGhpcyk7XG4gICAgICAgICAgdGhpcy5ib3R0b20gLT0gTWF0aC5tYXguYXBwbHkoTWF0aCwgYm90dG9tT2Zmc2V0cyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy53aWR0aCA9IE1hdGgubWF4KDEsIHRoaXMucmlnaHQgLSB0aGlzLmxlZnQpO1xuICAgICAgICB0aGlzLmhlaWdodCA9IE1hdGgubWF4KDEsIHRoaXMuYm90dG9tIC0gdGhpcy50b3ApO1xuICAgICAgICB0aGlzLmR4ID0gdGhpcy53aWR0aCAvICh0aGlzLnhtYXggLSB0aGlzLnhtaW4pO1xuICAgICAgICB0aGlzLmR5ID0gdGhpcy5oZWlnaHQgLyAodGhpcy55bWF4IC0gdGhpcy55bWluKTtcbiAgICAgICAgaWYgKHRoaXMuY2FsYykge1xuICAgICAgICAgIHJldHVybiB0aGlzLmNhbGMoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG5cbiAgICBHcmlkLnByb3RvdHlwZS50cmFuc1kgPSBmdW5jdGlvbih5KSB7XG4gICAgICByZXR1cm4gdGhpcy5ib3R0b20gLSAoeSAtIHRoaXMueW1pbikgKiB0aGlzLmR5O1xuICAgIH07XG5cbiAgICBHcmlkLnByb3RvdHlwZS50cmFuc1ggPSBmdW5jdGlvbih4KSB7XG4gICAgICBpZiAodGhpcy5kYXRhLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICByZXR1cm4gKHRoaXMubGVmdCArIHRoaXMucmlnaHQpIC8gMjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB0aGlzLmxlZnQgKyAoeCAtIHRoaXMueG1pbikgKiB0aGlzLmR4O1xuICAgICAgfVxuICAgIH07XG5cbiAgICBHcmlkLnByb3RvdHlwZS5yZWRyYXcgPSBmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMucmFwaGFlbC5jbGVhcigpO1xuICAgICAgdGhpcy5fY2FsYygpO1xuICAgICAgdGhpcy5kcmF3R3JpZCgpO1xuICAgICAgdGhpcy5kcmF3R29hbHMoKTtcbiAgICAgIHRoaXMuZHJhd0V2ZW50cygpO1xuICAgICAgaWYgKHRoaXMuZHJhdykge1xuICAgICAgICByZXR1cm4gdGhpcy5kcmF3KCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIEdyaWQucHJvdG90eXBlLm1lYXN1cmVUZXh0ID0gZnVuY3Rpb24odGV4dCwgYW5nbGUpIHtcbiAgICAgIHZhciByZXQsIHR0O1xuICAgICAgaWYgKGFuZ2xlID09IG51bGwpIHtcbiAgICAgICAgYW5nbGUgPSAwO1xuICAgICAgfVxuICAgICAgdHQgPSB0aGlzLnJhcGhhZWwudGV4dCgxMDAsIDEwMCwgdGV4dCkuYXR0cignZm9udC1zaXplJywgdGhpcy5vcHRpb25zLmdyaWRUZXh0U2l6ZSkuYXR0cignZm9udC1mYW1pbHknLCB0aGlzLm9wdGlvbnMuZ3JpZFRleHRGYW1pbHkpLmF0dHIoJ2ZvbnQtd2VpZ2h0JywgdGhpcy5vcHRpb25zLmdyaWRUZXh0V2VpZ2h0KS5yb3RhdGUoYW5nbGUpO1xuICAgICAgcmV0ID0gdHQuZ2V0QkJveCgpO1xuICAgICAgdHQucmVtb3ZlKCk7XG4gICAgICByZXR1cm4gcmV0O1xuICAgIH07XG5cbiAgICBHcmlkLnByb3RvdHlwZS55QXhpc0Zvcm1hdCA9IGZ1bmN0aW9uKGxhYmVsKSB7XG4gICAgICByZXR1cm4gdGhpcy55TGFiZWxGb3JtYXQobGFiZWwpO1xuICAgIH07XG5cbiAgICBHcmlkLnByb3RvdHlwZS55TGFiZWxGb3JtYXQgPSBmdW5jdGlvbihsYWJlbCkge1xuICAgICAgaWYgKHR5cGVvZiB0aGlzLm9wdGlvbnMueUxhYmVsRm9ybWF0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm9wdGlvbnMueUxhYmVsRm9ybWF0KGxhYmVsKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBcIlwiICsgdGhpcy5vcHRpb25zLnByZVVuaXRzICsgKE1vcnJpcy5jb21tYXMobGFiZWwpKSArIHRoaXMub3B0aW9ucy5wb3N0VW5pdHM7XG4gICAgICB9XG4gICAgfTtcblxuICAgIEdyaWQucHJvdG90eXBlLmRyYXdHcmlkID0gZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgbGluZVksIHksIF9pLCBfbGVuLCBfcmVmLCBfcmVmMSwgX3JlZjIsIF9yZXN1bHRzO1xuICAgICAgaWYgKHRoaXMub3B0aW9ucy5ncmlkID09PSBmYWxzZSAmJiAoKF9yZWYgPSB0aGlzLm9wdGlvbnMuYXhlcykgIT09IHRydWUgJiYgX3JlZiAhPT0gJ2JvdGgnICYmIF9yZWYgIT09ICd5JykpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgX3JlZjEgPSB0aGlzLmdyaWQ7XG4gICAgICBfcmVzdWx0cyA9IFtdO1xuICAgICAgZm9yIChfaSA9IDAsIF9sZW4gPSBfcmVmMS5sZW5ndGg7IF9pIDwgX2xlbjsgX2krKykge1xuICAgICAgICBsaW5lWSA9IF9yZWYxW19pXTtcbiAgICAgICAgeSA9IHRoaXMudHJhbnNZKGxpbmVZKTtcbiAgICAgICAgaWYgKChfcmVmMiA9IHRoaXMub3B0aW9ucy5heGVzKSA9PT0gdHJ1ZSB8fCBfcmVmMiA9PT0gJ2JvdGgnIHx8IF9yZWYyID09PSAneScpIHtcbiAgICAgICAgICB0aGlzLmRyYXdZQXhpc0xhYmVsKHRoaXMubGVmdCAtIHRoaXMub3B0aW9ucy5wYWRkaW5nIC8gMiwgeSwgdGhpcy55QXhpc0Zvcm1hdChsaW5lWSkpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuZ3JpZCkge1xuICAgICAgICAgIF9yZXN1bHRzLnB1c2godGhpcy5kcmF3R3JpZExpbmUoXCJNXCIgKyB0aGlzLmxlZnQgKyBcIixcIiArIHkgKyBcIkhcIiArICh0aGlzLmxlZnQgKyB0aGlzLndpZHRoKSkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIF9yZXN1bHRzLnB1c2godm9pZCAwKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIF9yZXN1bHRzO1xuICAgIH07XG5cbiAgICBHcmlkLnByb3RvdHlwZS5kcmF3R29hbHMgPSBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBjb2xvciwgZ29hbCwgaSwgX2ksIF9sZW4sIF9yZWYsIF9yZXN1bHRzO1xuICAgICAgX3JlZiA9IHRoaXMub3B0aW9ucy5nb2FscztcbiAgICAgIF9yZXN1bHRzID0gW107XG4gICAgICBmb3IgKGkgPSBfaSA9IDAsIF9sZW4gPSBfcmVmLmxlbmd0aDsgX2kgPCBfbGVuOyBpID0gKytfaSkge1xuICAgICAgICBnb2FsID0gX3JlZltpXTtcbiAgICAgICAgY29sb3IgPSB0aGlzLm9wdGlvbnMuZ29hbExpbmVDb2xvcnNbaSAlIHRoaXMub3B0aW9ucy5nb2FsTGluZUNvbG9ycy5sZW5ndGhdO1xuICAgICAgICBfcmVzdWx0cy5wdXNoKHRoaXMuZHJhd0dvYWwoZ29hbCwgY29sb3IpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBfcmVzdWx0cztcbiAgICB9O1xuXG4gICAgR3JpZC5wcm90b3R5cGUuZHJhd0V2ZW50cyA9IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIGNvbG9yLCBldmVudCwgaSwgX2ksIF9sZW4sIF9yZWYsIF9yZXN1bHRzO1xuICAgICAgX3JlZiA9IHRoaXMuZXZlbnRzO1xuICAgICAgX3Jlc3VsdHMgPSBbXTtcbiAgICAgIGZvciAoaSA9IF9pID0gMCwgX2xlbiA9IF9yZWYubGVuZ3RoOyBfaSA8IF9sZW47IGkgPSArK19pKSB7XG4gICAgICAgIGV2ZW50ID0gX3JlZltpXTtcbiAgICAgICAgY29sb3IgPSB0aGlzLm9wdGlvbnMuZXZlbnRMaW5lQ29sb3JzW2kgJSB0aGlzLm9wdGlvbnMuZXZlbnRMaW5lQ29sb3JzLmxlbmd0aF07XG4gICAgICAgIF9yZXN1bHRzLnB1c2godGhpcy5kcmF3RXZlbnQoZXZlbnQsIGNvbG9yKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gX3Jlc3VsdHM7XG4gICAgfTtcblxuICAgIEdyaWQucHJvdG90eXBlLmRyYXdHb2FsID0gZnVuY3Rpb24oZ29hbCwgY29sb3IpIHtcbiAgICAgIHJldHVybiB0aGlzLnJhcGhhZWwucGF0aChcIk1cIiArIHRoaXMubGVmdCArIFwiLFwiICsgKHRoaXMudHJhbnNZKGdvYWwpKSArIFwiSFwiICsgdGhpcy5yaWdodCkuYXR0cignc3Ryb2tlJywgY29sb3IpLmF0dHIoJ3N0cm9rZS13aWR0aCcsIHRoaXMub3B0aW9ucy5nb2FsU3Ryb2tlV2lkdGgpO1xuICAgIH07XG5cbiAgICBHcmlkLnByb3RvdHlwZS5kcmF3RXZlbnQgPSBmdW5jdGlvbihldmVudCwgY29sb3IpIHtcbiAgICAgIHJldHVybiB0aGlzLnJhcGhhZWwucGF0aChcIk1cIiArICh0aGlzLnRyYW5zWChldmVudCkpICsgXCIsXCIgKyB0aGlzLmJvdHRvbSArIFwiVlwiICsgdGhpcy50b3ApLmF0dHIoJ3N0cm9rZScsIGNvbG9yKS5hdHRyKCdzdHJva2Utd2lkdGgnLCB0aGlzLm9wdGlvbnMuZXZlbnRTdHJva2VXaWR0aCk7XG4gICAgfTtcblxuICAgIEdyaWQucHJvdG90eXBlLmRyYXdZQXhpc0xhYmVsID0gZnVuY3Rpb24oeFBvcywgeVBvcywgdGV4dCkge1xuICAgICAgcmV0dXJuIHRoaXMucmFwaGFlbC50ZXh0KHhQb3MsIHlQb3MsIHRleHQpLmF0dHIoJ2ZvbnQtc2l6ZScsIHRoaXMub3B0aW9ucy5ncmlkVGV4dFNpemUpLmF0dHIoJ2ZvbnQtZmFtaWx5JywgdGhpcy5vcHRpb25zLmdyaWRUZXh0RmFtaWx5KS5hdHRyKCdmb250LXdlaWdodCcsIHRoaXMub3B0aW9ucy5ncmlkVGV4dFdlaWdodCkuYXR0cignZmlsbCcsIHRoaXMub3B0aW9ucy5ncmlkVGV4dENvbG9yKS5hdHRyKCd0ZXh0LWFuY2hvcicsICdlbmQnKTtcbiAgICB9O1xuXG4gICAgR3JpZC5wcm90b3R5cGUuZHJhd0dyaWRMaW5lID0gZnVuY3Rpb24ocGF0aCkge1xuICAgICAgcmV0dXJuIHRoaXMucmFwaGFlbC5wYXRoKHBhdGgpLmF0dHIoJ3N0cm9rZScsIHRoaXMub3B0aW9ucy5ncmlkTGluZUNvbG9yKS5hdHRyKCdzdHJva2Utd2lkdGgnLCB0aGlzLm9wdGlvbnMuZ3JpZFN0cm9rZVdpZHRoKTtcbiAgICB9O1xuXG4gICAgR3JpZC5wcm90b3R5cGUuc3RhcnRSYW5nZSA9IGZ1bmN0aW9uKHgpIHtcbiAgICAgIHRoaXMuaG92ZXIuaGlkZSgpO1xuICAgICAgdGhpcy5zZWxlY3RGcm9tID0geDtcbiAgICAgIHJldHVybiB0aGlzLnNlbGVjdGlvblJlY3QuYXR0cih7XG4gICAgICAgIHg6IHgsXG4gICAgICAgIHdpZHRoOiAwXG4gICAgICB9KS5zaG93KCk7XG4gICAgfTtcblxuICAgIEdyaWQucHJvdG90eXBlLmVuZFJhbmdlID0gZnVuY3Rpb24oeCkge1xuICAgICAgdmFyIGVuZCwgc3RhcnQ7XG4gICAgICBpZiAodGhpcy5zZWxlY3RGcm9tKSB7XG4gICAgICAgIHN0YXJ0ID0gTWF0aC5taW4odGhpcy5zZWxlY3RGcm9tLCB4KTtcbiAgICAgICAgZW5kID0gTWF0aC5tYXgodGhpcy5zZWxlY3RGcm9tLCB4KTtcbiAgICAgICAgdGhpcy5vcHRpb25zLnJhbmdlU2VsZWN0LmNhbGwodGhpcy5lbCwge1xuICAgICAgICAgIHN0YXJ0OiB0aGlzLmRhdGFbdGhpcy5oaXRUZXN0KHN0YXJ0KV0ueCxcbiAgICAgICAgICBlbmQ6IHRoaXMuZGF0YVt0aGlzLmhpdFRlc3QoZW5kKV0ueFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2VsZWN0RnJvbSA9IG51bGw7XG4gICAgICB9XG4gICAgfTtcblxuICAgIEdyaWQucHJvdG90eXBlLnJlc2l6ZUhhbmRsZXIgPSBmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMudGltZW91dElkID0gbnVsbDtcbiAgICAgIHRoaXMucmFwaGFlbC5zZXRTaXplKHRoaXMuZWwud2lkdGgoKSwgdGhpcy5lbC5oZWlnaHQoKSk7XG4gICAgICByZXR1cm4gdGhpcy5yZWRyYXcoKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIEdyaWQ7XG5cbiAgfSkoTW9ycmlzLkV2ZW50RW1pdHRlcik7XG5cbiAgTW9ycmlzLnBhcnNlRGF0ZSA9IGZ1bmN0aW9uKGRhdGUpIHtcbiAgICB2YXIgaXNlY3MsIG0sIG1zZWNzLCBuLCBvLCBvZmZzZXRtaW5zLCBwLCBxLCByLCByZXQsIHNlY3M7XG4gICAgaWYgKHR5cGVvZiBkYXRlID09PSAnbnVtYmVyJykge1xuICAgICAgcmV0dXJuIGRhdGU7XG4gICAgfVxuICAgIG0gPSBkYXRlLm1hdGNoKC9eKFxcZCspIFEoXFxkKSQvKTtcbiAgICBuID0gZGF0ZS5tYXRjaCgvXihcXGQrKS0oXFxkKykkLyk7XG4gICAgbyA9IGRhdGUubWF0Y2goL14oXFxkKyktKFxcZCspLShcXGQrKSQvKTtcbiAgICBwID0gZGF0ZS5tYXRjaCgvXihcXGQrKSBXKFxcZCspJC8pO1xuICAgIHEgPSBkYXRlLm1hdGNoKC9eKFxcZCspLShcXGQrKS0oXFxkKylbIFRdKFxcZCspOihcXGQrKShafChbKy1dKShcXGRcXGQpOj8oXFxkXFxkKSk/JC8pO1xuICAgIHIgPSBkYXRlLm1hdGNoKC9eKFxcZCspLShcXGQrKS0oXFxkKylbIFRdKFxcZCspOihcXGQrKTooXFxkKyhcXC5cXGQrKT8pKFp8KFsrLV0pKFxcZFxcZCk6PyhcXGRcXGQpKT8kLyk7XG4gICAgaWYgKG0pIHtcbiAgICAgIHJldHVybiBuZXcgRGF0ZShwYXJzZUludChtWzFdLCAxMCksIHBhcnNlSW50KG1bMl0sIDEwKSAqIDMgLSAxLCAxKS5nZXRUaW1lKCk7XG4gICAgfSBlbHNlIGlmIChuKSB7XG4gICAgICByZXR1cm4gbmV3IERhdGUocGFyc2VJbnQoblsxXSwgMTApLCBwYXJzZUludChuWzJdLCAxMCkgLSAxLCAxKS5nZXRUaW1lKCk7XG4gICAgfSBlbHNlIGlmIChvKSB7XG4gICAgICByZXR1cm4gbmV3IERhdGUocGFyc2VJbnQob1sxXSwgMTApLCBwYXJzZUludChvWzJdLCAxMCkgLSAxLCBwYXJzZUludChvWzNdLCAxMCkpLmdldFRpbWUoKTtcbiAgICB9IGVsc2UgaWYgKHApIHtcbiAgICAgIHJldCA9IG5ldyBEYXRlKHBhcnNlSW50KHBbMV0sIDEwKSwgMCwgMSk7XG4gICAgICBpZiAocmV0LmdldERheSgpICE9PSA0KSB7XG4gICAgICAgIHJldC5zZXRNb250aCgwLCAxICsgKCg0IC0gcmV0LmdldERheSgpKSArIDcpICUgNyk7XG4gICAgICB9XG4gICAgICByZXR1cm4gcmV0LmdldFRpbWUoKSArIHBhcnNlSW50KHBbMl0sIDEwKSAqIDYwNDgwMDAwMDtcbiAgICB9IGVsc2UgaWYgKHEpIHtcbiAgICAgIGlmICghcVs2XSkge1xuICAgICAgICByZXR1cm4gbmV3IERhdGUocGFyc2VJbnQocVsxXSwgMTApLCBwYXJzZUludChxWzJdLCAxMCkgLSAxLCBwYXJzZUludChxWzNdLCAxMCksIHBhcnNlSW50KHFbNF0sIDEwKSwgcGFyc2VJbnQocVs1XSwgMTApKS5nZXRUaW1lKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBvZmZzZXRtaW5zID0gMDtcbiAgICAgICAgaWYgKHFbNl0gIT09ICdaJykge1xuICAgICAgICAgIG9mZnNldG1pbnMgPSBwYXJzZUludChxWzhdLCAxMCkgKiA2MCArIHBhcnNlSW50KHFbOV0sIDEwKTtcbiAgICAgICAgICBpZiAocVs3XSA9PT0gJysnKSB7XG4gICAgICAgICAgICBvZmZzZXRtaW5zID0gMCAtIG9mZnNldG1pbnM7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBEYXRlLlVUQyhwYXJzZUludChxWzFdLCAxMCksIHBhcnNlSW50KHFbMl0sIDEwKSAtIDEsIHBhcnNlSW50KHFbM10sIDEwKSwgcGFyc2VJbnQocVs0XSwgMTApLCBwYXJzZUludChxWzVdLCAxMCkgKyBvZmZzZXRtaW5zKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHIpIHtcbiAgICAgIHNlY3MgPSBwYXJzZUZsb2F0KHJbNl0pO1xuICAgICAgaXNlY3MgPSBNYXRoLmZsb29yKHNlY3MpO1xuICAgICAgbXNlY3MgPSBNYXRoLnJvdW5kKChzZWNzIC0gaXNlY3MpICogMTAwMCk7XG4gICAgICBpZiAoIXJbOF0pIHtcbiAgICAgICAgcmV0dXJuIG5ldyBEYXRlKHBhcnNlSW50KHJbMV0sIDEwKSwgcGFyc2VJbnQoclsyXSwgMTApIC0gMSwgcGFyc2VJbnQoclszXSwgMTApLCBwYXJzZUludChyWzRdLCAxMCksIHBhcnNlSW50KHJbNV0sIDEwKSwgaXNlY3MsIG1zZWNzKS5nZXRUaW1lKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBvZmZzZXRtaW5zID0gMDtcbiAgICAgICAgaWYgKHJbOF0gIT09ICdaJykge1xuICAgICAgICAgIG9mZnNldG1pbnMgPSBwYXJzZUludChyWzEwXSwgMTApICogNjAgKyBwYXJzZUludChyWzExXSwgMTApO1xuICAgICAgICAgIGlmIChyWzldID09PSAnKycpIHtcbiAgICAgICAgICAgIG9mZnNldG1pbnMgPSAwIC0gb2Zmc2V0bWlucztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIERhdGUuVVRDKHBhcnNlSW50KHJbMV0sIDEwKSwgcGFyc2VJbnQoclsyXSwgMTApIC0gMSwgcGFyc2VJbnQoclszXSwgMTApLCBwYXJzZUludChyWzRdLCAxMCksIHBhcnNlSW50KHJbNV0sIDEwKSArIG9mZnNldG1pbnMsIGlzZWNzLCBtc2Vjcyk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBuZXcgRGF0ZShwYXJzZUludChkYXRlLCAxMCksIDAsIDEpLmdldFRpbWUoKTtcbiAgICB9XG4gIH07XG5cbiAgTW9ycmlzLkhvdmVyID0gKGZ1bmN0aW9uKCkge1xuICAgIEhvdmVyLmRlZmF1bHRzID0ge1xuICAgICAgXCJjbGFzc1wiOiAnbW9ycmlzLWhvdmVyIG1vcnJpcy1kZWZhdWx0LXN0eWxlJ1xuICAgIH07XG5cbiAgICBmdW5jdGlvbiBIb3ZlcihvcHRpb25zKSB7XG4gICAgICBpZiAob3B0aW9ucyA9PSBudWxsKSB7XG4gICAgICAgIG9wdGlvbnMgPSB7fTtcbiAgICAgIH1cbiAgICAgIHRoaXMub3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCBNb3JyaXMuSG92ZXIuZGVmYXVsdHMsIG9wdGlvbnMpO1xuICAgICAgdGhpcy5lbCA9ICQoXCI8ZGl2IGNsYXNzPSdcIiArIHRoaXMub3B0aW9uc1tcImNsYXNzXCJdICsgXCInPjwvZGl2PlwiKTtcbiAgICAgIHRoaXMuZWwuaGlkZSgpO1xuICAgICAgdGhpcy5vcHRpb25zLnBhcmVudC5hcHBlbmQodGhpcy5lbCk7XG4gICAgfVxuXG4gICAgSG92ZXIucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uKGh0bWwsIHgsIHkpIHtcbiAgICAgIGlmICghaHRtbCkge1xuICAgICAgICByZXR1cm4gdGhpcy5oaWRlKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmh0bWwoaHRtbCk7XG4gICAgICAgIHRoaXMuc2hvdygpO1xuICAgICAgICByZXR1cm4gdGhpcy5tb3ZlVG8oeCwgeSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIEhvdmVyLnByb3RvdHlwZS5odG1sID0gZnVuY3Rpb24oY29udGVudCkge1xuICAgICAgcmV0dXJuIHRoaXMuZWwuaHRtbChjb250ZW50KTtcbiAgICB9O1xuXG4gICAgSG92ZXIucHJvdG90eXBlLm1vdmVUbyA9IGZ1bmN0aW9uKHgsIHkpIHtcbiAgICAgIHZhciBob3ZlckhlaWdodCwgaG92ZXJXaWR0aCwgbGVmdCwgcGFyZW50SGVpZ2h0LCBwYXJlbnRXaWR0aCwgdG9wO1xuICAgICAgcGFyZW50V2lkdGggPSB0aGlzLm9wdGlvbnMucGFyZW50LmlubmVyV2lkdGgoKTtcbiAgICAgIHBhcmVudEhlaWdodCA9IHRoaXMub3B0aW9ucy5wYXJlbnQuaW5uZXJIZWlnaHQoKTtcbiAgICAgIGhvdmVyV2lkdGggPSB0aGlzLmVsLm91dGVyV2lkdGgoKTtcbiAgICAgIGhvdmVySGVpZ2h0ID0gdGhpcy5lbC5vdXRlckhlaWdodCgpO1xuICAgICAgbGVmdCA9IE1hdGgubWluKE1hdGgubWF4KDAsIHggLSBob3ZlcldpZHRoIC8gMiksIHBhcmVudFdpZHRoIC0gaG92ZXJXaWR0aCk7XG4gICAgICBpZiAoeSAhPSBudWxsKSB7XG4gICAgICAgIHRvcCA9IHkgLSBob3ZlckhlaWdodCAtIDEwO1xuICAgICAgICBpZiAodG9wIDwgMCkge1xuICAgICAgICAgIHRvcCA9IHkgKyAxMDtcbiAgICAgICAgICBpZiAodG9wICsgaG92ZXJIZWlnaHQgPiBwYXJlbnRIZWlnaHQpIHtcbiAgICAgICAgICAgIHRvcCA9IHBhcmVudEhlaWdodCAvIDIgLSBob3ZlckhlaWdodCAvIDI7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0b3AgPSBwYXJlbnRIZWlnaHQgLyAyIC0gaG92ZXJIZWlnaHQgLyAyO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXMuZWwuY3NzKHtcbiAgICAgICAgbGVmdDogbGVmdCArIFwicHhcIixcbiAgICAgICAgdG9wOiBwYXJzZUludCh0b3ApICsgXCJweFwiXG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgSG92ZXIucHJvdG90eXBlLnNob3cgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLmVsLnNob3coKTtcbiAgICB9O1xuXG4gICAgSG92ZXIucHJvdG90eXBlLmhpZGUgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLmVsLmhpZGUoKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIEhvdmVyO1xuXG4gIH0pKCk7XG5cbiAgTW9ycmlzLkxpbmUgPSAoZnVuY3Rpb24oX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKExpbmUsIF9zdXBlcik7XG5cbiAgICBmdW5jdGlvbiBMaW5lKG9wdGlvbnMpIHtcbiAgICAgIHRoaXMuaGlsaWdodCA9IF9fYmluZCh0aGlzLmhpbGlnaHQsIHRoaXMpO1xuICAgICAgdGhpcy5vbkhvdmVyT3V0ID0gX19iaW5kKHRoaXMub25Ib3Zlck91dCwgdGhpcyk7XG4gICAgICB0aGlzLm9uSG92ZXJNb3ZlID0gX19iaW5kKHRoaXMub25Ib3Zlck1vdmUsIHRoaXMpO1xuICAgICAgdGhpcy5vbkdyaWRDbGljayA9IF9fYmluZCh0aGlzLm9uR3JpZENsaWNrLCB0aGlzKTtcbiAgICAgIGlmICghKHRoaXMgaW5zdGFuY2VvZiBNb3JyaXMuTGluZSkpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBNb3JyaXMuTGluZShvcHRpb25zKTtcbiAgICAgIH1cbiAgICAgIExpbmUuX19zdXBlcl9fLmNvbnN0cnVjdG9yLmNhbGwodGhpcywgb3B0aW9ucyk7XG4gICAgfVxuXG4gICAgTGluZS5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKHRoaXMub3B0aW9ucy5oaWRlSG92ZXIgIT09ICdhbHdheXMnKSB7XG4gICAgICAgIHRoaXMuaG92ZXIgPSBuZXcgTW9ycmlzLkhvdmVyKHtcbiAgICAgICAgICBwYXJlbnQ6IHRoaXMuZWxcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMub24oJ2hvdmVybW92ZScsIHRoaXMub25Ib3Zlck1vdmUpO1xuICAgICAgICB0aGlzLm9uKCdob3Zlcm91dCcsIHRoaXMub25Ib3Zlck91dCk7XG4gICAgICAgIHJldHVybiB0aGlzLm9uKCdncmlkY2xpY2snLCB0aGlzLm9uR3JpZENsaWNrKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgTGluZS5wcm90b3R5cGUuZGVmYXVsdHMgPSB7XG4gICAgICBsaW5lV2lkdGg6IDMsXG4gICAgICBwb2ludFNpemU6IDQsXG4gICAgICBsaW5lQ29sb3JzOiBbJyMwYjYyYTQnLCAnIzdBOTJBMycsICcjNGRhNzRkJywgJyNhZmQ4ZjgnLCAnI2VkYzI0MCcsICcjY2I0YjRiJywgJyM5NDQwZWQnXSxcbiAgICAgIHBvaW50U3Ryb2tlV2lkdGhzOiBbMV0sXG4gICAgICBwb2ludFN0cm9rZUNvbG9yczogWycjZmZmZmZmJ10sXG4gICAgICBwb2ludEZpbGxDb2xvcnM6IFtdLFxuICAgICAgc21vb3RoOiB0cnVlLFxuICAgICAgeExhYmVsczogJ2F1dG8nLFxuICAgICAgeExhYmVsRm9ybWF0OiBudWxsLFxuICAgICAgeExhYmVsTWFyZ2luOiAyNCxcbiAgICAgIGhpZGVIb3ZlcjogZmFsc2VcbiAgICB9O1xuXG4gICAgTGluZS5wcm90b3R5cGUuY2FsYyA9IGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy5jYWxjUG9pbnRzKCk7XG4gICAgICByZXR1cm4gdGhpcy5nZW5lcmF0ZVBhdGhzKCk7XG4gICAgfTtcblxuICAgIExpbmUucHJvdG90eXBlLmNhbGNQb2ludHMgPSBmdW5jdGlvbigpIHtcbiAgICAgIHZhciByb3csIHksIF9pLCBfbGVuLCBfcmVmLCBfcmVzdWx0cztcbiAgICAgIF9yZWYgPSB0aGlzLmRhdGE7XG4gICAgICBfcmVzdWx0cyA9IFtdO1xuICAgICAgZm9yIChfaSA9IDAsIF9sZW4gPSBfcmVmLmxlbmd0aDsgX2kgPCBfbGVuOyBfaSsrKSB7XG4gICAgICAgIHJvdyA9IF9yZWZbX2ldO1xuICAgICAgICByb3cuX3ggPSB0aGlzLnRyYW5zWChyb3cueCk7XG4gICAgICAgIHJvdy5feSA9IChmdW5jdGlvbigpIHtcbiAgICAgICAgICB2YXIgX2osIF9sZW4xLCBfcmVmMSwgX3Jlc3VsdHMxO1xuICAgICAgICAgIF9yZWYxID0gcm93Lnk7XG4gICAgICAgICAgX3Jlc3VsdHMxID0gW107XG4gICAgICAgICAgZm9yIChfaiA9IDAsIF9sZW4xID0gX3JlZjEubGVuZ3RoOyBfaiA8IF9sZW4xOyBfaisrKSB7XG4gICAgICAgICAgICB5ID0gX3JlZjFbX2pdO1xuICAgICAgICAgICAgaWYgKHkgIT0gbnVsbCkge1xuICAgICAgICAgICAgICBfcmVzdWx0czEucHVzaCh0aGlzLnRyYW5zWSh5KSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBfcmVzdWx0czEucHVzaCh5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIF9yZXN1bHRzMTtcbiAgICAgICAgfSkuY2FsbCh0aGlzKTtcbiAgICAgICAgX3Jlc3VsdHMucHVzaChyb3cuX3ltYXggPSBNYXRoLm1pbi5hcHBseShNYXRoLCBbdGhpcy5ib3R0b21dLmNvbmNhdCgoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgdmFyIF9qLCBfbGVuMSwgX3JlZjEsIF9yZXN1bHRzMTtcbiAgICAgICAgICBfcmVmMSA9IHJvdy5feTtcbiAgICAgICAgICBfcmVzdWx0czEgPSBbXTtcbiAgICAgICAgICBmb3IgKF9qID0gMCwgX2xlbjEgPSBfcmVmMS5sZW5ndGg7IF9qIDwgX2xlbjE7IF9qKyspIHtcbiAgICAgICAgICAgIHkgPSBfcmVmMVtfal07XG4gICAgICAgICAgICBpZiAoeSAhPSBudWxsKSB7XG4gICAgICAgICAgICAgIF9yZXN1bHRzMS5wdXNoKHkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gX3Jlc3VsdHMxO1xuICAgICAgICB9KSgpKSkpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIF9yZXN1bHRzO1xuICAgIH07XG5cbiAgICBMaW5lLnByb3RvdHlwZS5oaXRUZXN0ID0gZnVuY3Rpb24oeCkge1xuICAgICAgdmFyIGluZGV4LCByLCBfaSwgX2xlbiwgX3JlZjtcbiAgICAgIGlmICh0aGlzLmRhdGEubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuICAgICAgX3JlZiA9IHRoaXMuZGF0YS5zbGljZSgxKTtcbiAgICAgIGZvciAoaW5kZXggPSBfaSA9IDAsIF9sZW4gPSBfcmVmLmxlbmd0aDsgX2kgPCBfbGVuOyBpbmRleCA9ICsrX2kpIHtcbiAgICAgICAgciA9IF9yZWZbaW5kZXhdO1xuICAgICAgICBpZiAoeCA8IChyLl94ICsgdGhpcy5kYXRhW2luZGV4XS5feCkgLyAyKSB7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBpbmRleDtcbiAgICB9O1xuXG4gICAgTGluZS5wcm90b3R5cGUub25HcmlkQ2xpY2sgPSBmdW5jdGlvbih4LCB5KSB7XG4gICAgICB2YXIgaW5kZXg7XG4gICAgICBpbmRleCA9IHRoaXMuaGl0VGVzdCh4KTtcbiAgICAgIHJldHVybiB0aGlzLmZpcmUoJ2NsaWNrJywgaW5kZXgsIHRoaXMuZGF0YVtpbmRleF0uc3JjLCB4LCB5KTtcbiAgICB9O1xuXG4gICAgTGluZS5wcm90b3R5cGUub25Ib3Zlck1vdmUgPSBmdW5jdGlvbih4LCB5KSB7XG4gICAgICB2YXIgaW5kZXg7XG4gICAgICBpbmRleCA9IHRoaXMuaGl0VGVzdCh4KTtcbiAgICAgIHJldHVybiB0aGlzLmRpc3BsYXlIb3ZlckZvclJvdyhpbmRleCk7XG4gICAgfTtcblxuICAgIExpbmUucHJvdG90eXBlLm9uSG92ZXJPdXQgPSBmdW5jdGlvbigpIHtcbiAgICAgIGlmICh0aGlzLm9wdGlvbnMuaGlkZUhvdmVyICE9PSBmYWxzZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5kaXNwbGF5SG92ZXJGb3JSb3cobnVsbCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIExpbmUucHJvdG90eXBlLmRpc3BsYXlIb3ZlckZvclJvdyA9IGZ1bmN0aW9uKGluZGV4KSB7XG4gICAgICB2YXIgX3JlZjtcbiAgICAgIGlmIChpbmRleCAhPSBudWxsKSB7XG4gICAgICAgIChfcmVmID0gdGhpcy5ob3ZlcikudXBkYXRlLmFwcGx5KF9yZWYsIHRoaXMuaG92ZXJDb250ZW50Rm9yUm93KGluZGV4KSk7XG4gICAgICAgIHJldHVybiB0aGlzLmhpbGlnaHQoaW5kZXgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5ob3Zlci5oaWRlKCk7XG4gICAgICAgIHJldHVybiB0aGlzLmhpbGlnaHQoKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgTGluZS5wcm90b3R5cGUuaG92ZXJDb250ZW50Rm9yUm93ID0gZnVuY3Rpb24oaW5kZXgpIHtcbiAgICAgIHZhciBjb250ZW50LCBqLCByb3csIHksIF9pLCBfbGVuLCBfcmVmO1xuICAgICAgcm93ID0gdGhpcy5kYXRhW2luZGV4XTtcbiAgICAgIGNvbnRlbnQgPSBcIjxkaXYgY2xhc3M9J21vcnJpcy1ob3Zlci1yb3ctbGFiZWwnPlwiICsgcm93LmxhYmVsICsgXCI8L2Rpdj5cIjtcbiAgICAgIF9yZWYgPSByb3cueTtcbiAgICAgIGZvciAoaiA9IF9pID0gMCwgX2xlbiA9IF9yZWYubGVuZ3RoOyBfaSA8IF9sZW47IGogPSArK19pKSB7XG4gICAgICAgIHkgPSBfcmVmW2pdO1xuICAgICAgICBjb250ZW50ICs9IFwiPGRpdiBjbGFzcz0nbW9ycmlzLWhvdmVyLXBvaW50JyBzdHlsZT0nY29sb3I6IFwiICsgKHRoaXMuY29sb3JGb3Iocm93LCBqLCAnbGFiZWwnKSkgKyBcIic+XFxuICBcIiArIHRoaXMub3B0aW9ucy5sYWJlbHNbal0gKyBcIjpcXG4gIFwiICsgKHRoaXMueUxhYmVsRm9ybWF0KHkpKSArIFwiXFxuPC9kaXY+XCI7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIHRoaXMub3B0aW9ucy5ob3ZlckNhbGxiYWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGNvbnRlbnQgPSB0aGlzLm9wdGlvbnMuaG92ZXJDYWxsYmFjayhpbmRleCwgdGhpcy5vcHRpb25zLCBjb250ZW50LCByb3cuc3JjKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBbY29udGVudCwgcm93Ll94LCByb3cuX3ltYXhdO1xuICAgIH07XG5cbiAgICBMaW5lLnByb3RvdHlwZS5nZW5lcmF0ZVBhdGhzID0gZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgY29vcmRzLCBpLCByLCBzbW9vdGg7XG4gICAgICByZXR1cm4gdGhpcy5wYXRocyA9IChmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIF9pLCBfcmVmLCBfcmVmMSwgX3Jlc3VsdHM7XG4gICAgICAgIF9yZXN1bHRzID0gW107XG4gICAgICAgIGZvciAoaSA9IF9pID0gMCwgX3JlZiA9IHRoaXMub3B0aW9ucy55a2V5cy5sZW5ndGg7IDAgPD0gX3JlZiA/IF9pIDwgX3JlZiA6IF9pID4gX3JlZjsgaSA9IDAgPD0gX3JlZiA/ICsrX2kgOiAtLV9pKSB7XG4gICAgICAgICAgc21vb3RoID0gdHlwZW9mIHRoaXMub3B0aW9ucy5zbW9vdGggPT09IFwiYm9vbGVhblwiID8gdGhpcy5vcHRpb25zLnNtb290aCA6IChfcmVmMSA9IHRoaXMub3B0aW9ucy55a2V5c1tpXSwgX19pbmRleE9mLmNhbGwodGhpcy5vcHRpb25zLnNtb290aCwgX3JlZjEpID49IDApO1xuICAgICAgICAgIGNvb3JkcyA9IChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHZhciBfaiwgX2xlbiwgX3JlZjIsIF9yZXN1bHRzMTtcbiAgICAgICAgICAgIF9yZWYyID0gdGhpcy5kYXRhO1xuICAgICAgICAgICAgX3Jlc3VsdHMxID0gW107XG4gICAgICAgICAgICBmb3IgKF9qID0gMCwgX2xlbiA9IF9yZWYyLmxlbmd0aDsgX2ogPCBfbGVuOyBfaisrKSB7XG4gICAgICAgICAgICAgIHIgPSBfcmVmMltfal07XG4gICAgICAgICAgICAgIGlmIChyLl95W2ldICE9PSB2b2lkIDApIHtcbiAgICAgICAgICAgICAgICBfcmVzdWx0czEucHVzaCh7XG4gICAgICAgICAgICAgICAgICB4OiByLl94LFxuICAgICAgICAgICAgICAgICAgeTogci5feVtpXVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gX3Jlc3VsdHMxO1xuICAgICAgICAgIH0pLmNhbGwodGhpcyk7XG4gICAgICAgICAgaWYgKGNvb3Jkcy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICBfcmVzdWx0cy5wdXNoKE1vcnJpcy5MaW5lLmNyZWF0ZVBhdGgoY29vcmRzLCBzbW9vdGgsIHRoaXMuYm90dG9tKSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIF9yZXN1bHRzLnB1c2gobnVsbCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBfcmVzdWx0cztcbiAgICAgIH0pLmNhbGwodGhpcyk7XG4gICAgfTtcblxuICAgIExpbmUucHJvdG90eXBlLmRyYXcgPSBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBfcmVmO1xuICAgICAgaWYgKChfcmVmID0gdGhpcy5vcHRpb25zLmF4ZXMpID09PSB0cnVlIHx8IF9yZWYgPT09ICdib3RoJyB8fCBfcmVmID09PSAneCcpIHtcbiAgICAgICAgdGhpcy5kcmF3WEF4aXMoKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuZHJhd1NlcmllcygpO1xuICAgICAgaWYgKHRoaXMub3B0aW9ucy5oaWRlSG92ZXIgPT09IGZhbHNlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRpc3BsYXlIb3ZlckZvclJvdyh0aGlzLmRhdGEubGVuZ3RoIC0gMSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIExpbmUucHJvdG90eXBlLmRyYXdYQXhpcyA9IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIGRyYXdMYWJlbCwgbCwgbGFiZWxzLCBwcmV2QW5nbGVNYXJnaW4sIHByZXZMYWJlbE1hcmdpbiwgcm93LCB5cG9zLCBfaSwgX2xlbiwgX3Jlc3VsdHMsXG4gICAgICAgIF90aGlzID0gdGhpcztcbiAgICAgIHlwb3MgPSB0aGlzLmJvdHRvbSArIHRoaXMub3B0aW9ucy5wYWRkaW5nIC8gMjtcbiAgICAgIHByZXZMYWJlbE1hcmdpbiA9IG51bGw7XG4gICAgICBwcmV2QW5nbGVNYXJnaW4gPSBudWxsO1xuICAgICAgZHJhd0xhYmVsID0gZnVuY3Rpb24obGFiZWxUZXh0LCB4cG9zKSB7XG4gICAgICAgIHZhciBsYWJlbCwgbGFiZWxCb3gsIG1hcmdpbiwgb2Zmc2V0LCB0ZXh0Qm94O1xuICAgICAgICBsYWJlbCA9IF90aGlzLmRyYXdYQXhpc0xhYmVsKF90aGlzLnRyYW5zWCh4cG9zKSwgeXBvcywgbGFiZWxUZXh0KTtcbiAgICAgICAgdGV4dEJveCA9IGxhYmVsLmdldEJCb3goKTtcbiAgICAgICAgbGFiZWwudHJhbnNmb3JtKFwiclwiICsgKC1fdGhpcy5vcHRpb25zLnhMYWJlbEFuZ2xlKSk7XG4gICAgICAgIGxhYmVsQm94ID0gbGFiZWwuZ2V0QkJveCgpO1xuICAgICAgICBsYWJlbC50cmFuc2Zvcm0oXCJ0MCxcIiArIChsYWJlbEJveC5oZWlnaHQgLyAyKSArIFwiLi4uXCIpO1xuICAgICAgICBpZiAoX3RoaXMub3B0aW9ucy54TGFiZWxBbmdsZSAhPT0gMCkge1xuICAgICAgICAgIG9mZnNldCA9IC0wLjUgKiB0ZXh0Qm94LndpZHRoICogTWF0aC5jb3MoX3RoaXMub3B0aW9ucy54TGFiZWxBbmdsZSAqIE1hdGguUEkgLyAxODAuMCk7XG4gICAgICAgICAgbGFiZWwudHJhbnNmb3JtKFwidFwiICsgb2Zmc2V0ICsgXCIsMC4uLlwiKTtcbiAgICAgICAgfVxuICAgICAgICBsYWJlbEJveCA9IGxhYmVsLmdldEJCb3goKTtcbiAgICAgICAgaWYgKCgocHJldkxhYmVsTWFyZ2luID09IG51bGwpIHx8IHByZXZMYWJlbE1hcmdpbiA+PSBsYWJlbEJveC54ICsgbGFiZWxCb3gud2lkdGggfHwgKHByZXZBbmdsZU1hcmdpbiAhPSBudWxsKSAmJiBwcmV2QW5nbGVNYXJnaW4gPj0gbGFiZWxCb3gueCkgJiYgbGFiZWxCb3gueCA+PSAwICYmIChsYWJlbEJveC54ICsgbGFiZWxCb3gud2lkdGgpIDwgX3RoaXMuZWwud2lkdGgoKSkge1xuICAgICAgICAgIGlmIChfdGhpcy5vcHRpb25zLnhMYWJlbEFuZ2xlICE9PSAwKSB7XG4gICAgICAgICAgICBtYXJnaW4gPSAxLjI1ICogX3RoaXMub3B0aW9ucy5ncmlkVGV4dFNpemUgLyBNYXRoLnNpbihfdGhpcy5vcHRpb25zLnhMYWJlbEFuZ2xlICogTWF0aC5QSSAvIDE4MC4wKTtcbiAgICAgICAgICAgIHByZXZBbmdsZU1hcmdpbiA9IGxhYmVsQm94LnggLSBtYXJnaW47XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBwcmV2TGFiZWxNYXJnaW4gPSBsYWJlbEJveC54IC0gX3RoaXMub3B0aW9ucy54TGFiZWxNYXJnaW47XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIGxhYmVsLnJlbW92ZSgpO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgaWYgKHRoaXMub3B0aW9ucy5wYXJzZVRpbWUpIHtcbiAgICAgICAgaWYgKHRoaXMuZGF0YS5sZW5ndGggPT09IDEgJiYgdGhpcy5vcHRpb25zLnhMYWJlbHMgPT09ICdhdXRvJykge1xuICAgICAgICAgIGxhYmVscyA9IFtbdGhpcy5kYXRhWzBdLmxhYmVsLCB0aGlzLmRhdGFbMF0ueF1dO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGxhYmVscyA9IE1vcnJpcy5sYWJlbFNlcmllcyh0aGlzLnhtaW4sIHRoaXMueG1heCwgdGhpcy53aWR0aCwgdGhpcy5vcHRpb25zLnhMYWJlbHMsIHRoaXMub3B0aW9ucy54TGFiZWxGb3JtYXQpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsYWJlbHMgPSAoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgdmFyIF9pLCBfbGVuLCBfcmVmLCBfcmVzdWx0cztcbiAgICAgICAgICBfcmVmID0gdGhpcy5kYXRhO1xuICAgICAgICAgIF9yZXN1bHRzID0gW107XG4gICAgICAgICAgZm9yIChfaSA9IDAsIF9sZW4gPSBfcmVmLmxlbmd0aDsgX2kgPCBfbGVuOyBfaSsrKSB7XG4gICAgICAgICAgICByb3cgPSBfcmVmW19pXTtcbiAgICAgICAgICAgIF9yZXN1bHRzLnB1c2goW3Jvdy5sYWJlbCwgcm93LnhdKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIF9yZXN1bHRzO1xuICAgICAgICB9KS5jYWxsKHRoaXMpO1xuICAgICAgfVxuICAgICAgbGFiZWxzLnJldmVyc2UoKTtcbiAgICAgIF9yZXN1bHRzID0gW107XG4gICAgICBmb3IgKF9pID0gMCwgX2xlbiA9IGxhYmVscy5sZW5ndGg7IF9pIDwgX2xlbjsgX2krKykge1xuICAgICAgICBsID0gbGFiZWxzW19pXTtcbiAgICAgICAgX3Jlc3VsdHMucHVzaChkcmF3TGFiZWwobFswXSwgbFsxXSkpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIF9yZXN1bHRzO1xuICAgIH07XG5cbiAgICBMaW5lLnByb3RvdHlwZS5kcmF3U2VyaWVzID0gZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgaSwgX2ksIF9qLCBfcmVmLCBfcmVmMSwgX3Jlc3VsdHM7XG4gICAgICB0aGlzLnNlcmllc1BvaW50cyA9IFtdO1xuICAgICAgZm9yIChpID0gX2kgPSBfcmVmID0gdGhpcy5vcHRpb25zLnlrZXlzLmxlbmd0aCAtIDE7IF9yZWYgPD0gMCA/IF9pIDw9IDAgOiBfaSA+PSAwOyBpID0gX3JlZiA8PSAwID8gKytfaSA6IC0tX2kpIHtcbiAgICAgICAgdGhpcy5fZHJhd0xpbmVGb3IoaSk7XG4gICAgICB9XG4gICAgICBfcmVzdWx0cyA9IFtdO1xuICAgICAgZm9yIChpID0gX2ogPSBfcmVmMSA9IHRoaXMub3B0aW9ucy55a2V5cy5sZW5ndGggLSAxOyBfcmVmMSA8PSAwID8gX2ogPD0gMCA6IF9qID49IDA7IGkgPSBfcmVmMSA8PSAwID8gKytfaiA6IC0tX2opIHtcbiAgICAgICAgX3Jlc3VsdHMucHVzaCh0aGlzLl9kcmF3UG9pbnRGb3IoaSkpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIF9yZXN1bHRzO1xuICAgIH07XG5cbiAgICBMaW5lLnByb3RvdHlwZS5fZHJhd1BvaW50Rm9yID0gZnVuY3Rpb24oaW5kZXgpIHtcbiAgICAgIHZhciBjaXJjbGUsIHJvdywgX2ksIF9sZW4sIF9yZWYsIF9yZXN1bHRzO1xuICAgICAgdGhpcy5zZXJpZXNQb2ludHNbaW5kZXhdID0gW107XG4gICAgICBfcmVmID0gdGhpcy5kYXRhO1xuICAgICAgX3Jlc3VsdHMgPSBbXTtcbiAgICAgIGZvciAoX2kgPSAwLCBfbGVuID0gX3JlZi5sZW5ndGg7IF9pIDwgX2xlbjsgX2krKykge1xuICAgICAgICByb3cgPSBfcmVmW19pXTtcbiAgICAgICAgY2lyY2xlID0gbnVsbDtcbiAgICAgICAgaWYgKHJvdy5feVtpbmRleF0gIT0gbnVsbCkge1xuICAgICAgICAgIGNpcmNsZSA9IHRoaXMuZHJhd0xpbmVQb2ludChyb3cuX3gsIHJvdy5feVtpbmRleF0sIHRoaXMuY29sb3JGb3Iocm93LCBpbmRleCwgJ3BvaW50JyksIGluZGV4KTtcbiAgICAgICAgfVxuICAgICAgICBfcmVzdWx0cy5wdXNoKHRoaXMuc2VyaWVzUG9pbnRzW2luZGV4XS5wdXNoKGNpcmNsZSkpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIF9yZXN1bHRzO1xuICAgIH07XG5cbiAgICBMaW5lLnByb3RvdHlwZS5fZHJhd0xpbmVGb3IgPSBmdW5jdGlvbihpbmRleCkge1xuICAgICAgdmFyIHBhdGg7XG4gICAgICBwYXRoID0gdGhpcy5wYXRoc1tpbmRleF07XG4gICAgICBpZiAocGF0aCAhPT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gdGhpcy5kcmF3TGluZVBhdGgocGF0aCwgdGhpcy5jb2xvckZvcihudWxsLCBpbmRleCwgJ2xpbmUnKSwgaW5kZXgpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBMaW5lLmNyZWF0ZVBhdGggPSBmdW5jdGlvbihjb29yZHMsIHNtb290aCwgYm90dG9tKSB7XG4gICAgICB2YXIgY29vcmQsIGcsIGdyYWRzLCBpLCBpeCwgbGcsIHBhdGgsIHByZXZDb29yZCwgeDEsIHgyLCB5MSwgeTIsIF9pLCBfbGVuO1xuICAgICAgcGF0aCA9IFwiXCI7XG4gICAgICBpZiAoc21vb3RoKSB7XG4gICAgICAgIGdyYWRzID0gTW9ycmlzLkxpbmUuZ3JhZGllbnRzKGNvb3Jkcyk7XG4gICAgICB9XG4gICAgICBwcmV2Q29vcmQgPSB7XG4gICAgICAgIHk6IG51bGxcbiAgICAgIH07XG4gICAgICBmb3IgKGkgPSBfaSA9IDAsIF9sZW4gPSBjb29yZHMubGVuZ3RoOyBfaSA8IF9sZW47IGkgPSArK19pKSB7XG4gICAgICAgIGNvb3JkID0gY29vcmRzW2ldO1xuICAgICAgICBpZiAoY29vcmQueSAhPSBudWxsKSB7XG4gICAgICAgICAgaWYgKHByZXZDb29yZC55ICE9IG51bGwpIHtcbiAgICAgICAgICAgIGlmIChzbW9vdGgpIHtcbiAgICAgICAgICAgICAgZyA9IGdyYWRzW2ldO1xuICAgICAgICAgICAgICBsZyA9IGdyYWRzW2kgLSAxXTtcbiAgICAgICAgICAgICAgaXggPSAoY29vcmQueCAtIHByZXZDb29yZC54KSAvIDQ7XG4gICAgICAgICAgICAgIHgxID0gcHJldkNvb3JkLnggKyBpeDtcbiAgICAgICAgICAgICAgeTEgPSBNYXRoLm1pbihib3R0b20sIHByZXZDb29yZC55ICsgaXggKiBsZyk7XG4gICAgICAgICAgICAgIHgyID0gY29vcmQueCAtIGl4O1xuICAgICAgICAgICAgICB5MiA9IE1hdGgubWluKGJvdHRvbSwgY29vcmQueSAtIGl4ICogZyk7XG4gICAgICAgICAgICAgIHBhdGggKz0gXCJDXCIgKyB4MSArIFwiLFwiICsgeTEgKyBcIixcIiArIHgyICsgXCIsXCIgKyB5MiArIFwiLFwiICsgY29vcmQueCArIFwiLFwiICsgY29vcmQueTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHBhdGggKz0gXCJMXCIgKyBjb29yZC54ICsgXCIsXCIgKyBjb29yZC55O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoIXNtb290aCB8fCAoZ3JhZHNbaV0gIT0gbnVsbCkpIHtcbiAgICAgICAgICAgICAgcGF0aCArPSBcIk1cIiArIGNvb3JkLnggKyBcIixcIiArIGNvb3JkLnk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHByZXZDb29yZCA9IGNvb3JkO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHBhdGg7XG4gICAgfTtcblxuICAgIExpbmUuZ3JhZGllbnRzID0gZnVuY3Rpb24oY29vcmRzKSB7XG4gICAgICB2YXIgY29vcmQsIGdyYWQsIGksIG5leHRDb29yZCwgcHJldkNvb3JkLCBfaSwgX2xlbiwgX3Jlc3VsdHM7XG4gICAgICBncmFkID0gZnVuY3Rpb24oYSwgYikge1xuICAgICAgICByZXR1cm4gKGEueSAtIGIueSkgLyAoYS54IC0gYi54KTtcbiAgICAgIH07XG4gICAgICBfcmVzdWx0cyA9IFtdO1xuICAgICAgZm9yIChpID0gX2kgPSAwLCBfbGVuID0gY29vcmRzLmxlbmd0aDsgX2kgPCBfbGVuOyBpID0gKytfaSkge1xuICAgICAgICBjb29yZCA9IGNvb3Jkc1tpXTtcbiAgICAgICAgaWYgKGNvb3JkLnkgIT0gbnVsbCkge1xuICAgICAgICAgIG5leHRDb29yZCA9IGNvb3Jkc1tpICsgMV0gfHwge1xuICAgICAgICAgICAgeTogbnVsbFxuICAgICAgICAgIH07XG4gICAgICAgICAgcHJldkNvb3JkID0gY29vcmRzW2kgLSAxXSB8fCB7XG4gICAgICAgICAgICB5OiBudWxsXG4gICAgICAgICAgfTtcbiAgICAgICAgICBpZiAoKHByZXZDb29yZC55ICE9IG51bGwpICYmIChuZXh0Q29vcmQueSAhPSBudWxsKSkge1xuICAgICAgICAgICAgX3Jlc3VsdHMucHVzaChncmFkKHByZXZDb29yZCwgbmV4dENvb3JkKSk7XG4gICAgICAgICAgfSBlbHNlIGlmIChwcmV2Q29vcmQueSAhPSBudWxsKSB7XG4gICAgICAgICAgICBfcmVzdWx0cy5wdXNoKGdyYWQocHJldkNvb3JkLCBjb29yZCkpO1xuICAgICAgICAgIH0gZWxzZSBpZiAobmV4dENvb3JkLnkgIT0gbnVsbCkge1xuICAgICAgICAgICAgX3Jlc3VsdHMucHVzaChncmFkKGNvb3JkLCBuZXh0Q29vcmQpKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgX3Jlc3VsdHMucHVzaChudWxsKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgX3Jlc3VsdHMucHVzaChudWxsKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIF9yZXN1bHRzO1xuICAgIH07XG5cbiAgICBMaW5lLnByb3RvdHlwZS5oaWxpZ2h0ID0gZnVuY3Rpb24oaW5kZXgpIHtcbiAgICAgIHZhciBpLCBfaSwgX2osIF9yZWYsIF9yZWYxO1xuICAgICAgaWYgKHRoaXMucHJldkhpbGlnaHQgIT09IG51bGwgJiYgdGhpcy5wcmV2SGlsaWdodCAhPT0gaW5kZXgpIHtcbiAgICAgICAgZm9yIChpID0gX2kgPSAwLCBfcmVmID0gdGhpcy5zZXJpZXNQb2ludHMubGVuZ3RoIC0gMTsgMCA8PSBfcmVmID8gX2kgPD0gX3JlZiA6IF9pID49IF9yZWY7IGkgPSAwIDw9IF9yZWYgPyArK19pIDogLS1faSkge1xuICAgICAgICAgIGlmICh0aGlzLnNlcmllc1BvaW50c1tpXVt0aGlzLnByZXZIaWxpZ2h0XSkge1xuICAgICAgICAgICAgdGhpcy5zZXJpZXNQb2ludHNbaV1bdGhpcy5wcmV2SGlsaWdodF0uYW5pbWF0ZSh0aGlzLnBvaW50U2hyaW5rU2VyaWVzKGkpKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChpbmRleCAhPT0gbnVsbCAmJiB0aGlzLnByZXZIaWxpZ2h0ICE9PSBpbmRleCkge1xuICAgICAgICBmb3IgKGkgPSBfaiA9IDAsIF9yZWYxID0gdGhpcy5zZXJpZXNQb2ludHMubGVuZ3RoIC0gMTsgMCA8PSBfcmVmMSA/IF9qIDw9IF9yZWYxIDogX2ogPj0gX3JlZjE7IGkgPSAwIDw9IF9yZWYxID8gKytfaiA6IC0tX2opIHtcbiAgICAgICAgICBpZiAodGhpcy5zZXJpZXNQb2ludHNbaV1baW5kZXhdKSB7XG4gICAgICAgICAgICB0aGlzLnNlcmllc1BvaW50c1tpXVtpbmRleF0uYW5pbWF0ZSh0aGlzLnBvaW50R3Jvd1NlcmllcyhpKSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcy5wcmV2SGlsaWdodCA9IGluZGV4O1xuICAgIH07XG5cbiAgICBMaW5lLnByb3RvdHlwZS5jb2xvckZvciA9IGZ1bmN0aW9uKHJvdywgc2lkeCwgdHlwZSkge1xuICAgICAgaWYgKHR5cGVvZiB0aGlzLm9wdGlvbnMubGluZUNvbG9ycyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4gdGhpcy5vcHRpb25zLmxpbmVDb2xvcnMuY2FsbCh0aGlzLCByb3csIHNpZHgsIHR5cGUpO1xuICAgICAgfSBlbHNlIGlmICh0eXBlID09PSAncG9pbnQnKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm9wdGlvbnMucG9pbnRGaWxsQ29sb3JzW3NpZHggJSB0aGlzLm9wdGlvbnMucG9pbnRGaWxsQ29sb3JzLmxlbmd0aF0gfHwgdGhpcy5vcHRpb25zLmxpbmVDb2xvcnNbc2lkeCAlIHRoaXMub3B0aW9ucy5saW5lQ29sb3JzLmxlbmd0aF07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdGhpcy5vcHRpb25zLmxpbmVDb2xvcnNbc2lkeCAlIHRoaXMub3B0aW9ucy5saW5lQ29sb3JzLmxlbmd0aF07XG4gICAgICB9XG4gICAgfTtcblxuICAgIExpbmUucHJvdG90eXBlLmRyYXdYQXhpc0xhYmVsID0gZnVuY3Rpb24oeFBvcywgeVBvcywgdGV4dCkge1xuICAgICAgcmV0dXJuIHRoaXMucmFwaGFlbC50ZXh0KHhQb3MsIHlQb3MsIHRleHQpLmF0dHIoJ2ZvbnQtc2l6ZScsIHRoaXMub3B0aW9ucy5ncmlkVGV4dFNpemUpLmF0dHIoJ2ZvbnQtZmFtaWx5JywgdGhpcy5vcHRpb25zLmdyaWRUZXh0RmFtaWx5KS5hdHRyKCdmb250LXdlaWdodCcsIHRoaXMub3B0aW9ucy5ncmlkVGV4dFdlaWdodCkuYXR0cignZmlsbCcsIHRoaXMub3B0aW9ucy5ncmlkVGV4dENvbG9yKTtcbiAgICB9O1xuXG4gICAgTGluZS5wcm90b3R5cGUuZHJhd0xpbmVQYXRoID0gZnVuY3Rpb24ocGF0aCwgbGluZUNvbG9yLCBsaW5lSW5kZXgpIHtcbiAgICAgIHJldHVybiB0aGlzLnJhcGhhZWwucGF0aChwYXRoKS5hdHRyKCdzdHJva2UnLCBsaW5lQ29sb3IpLmF0dHIoJ3N0cm9rZS13aWR0aCcsIHRoaXMubGluZVdpZHRoRm9yU2VyaWVzKGxpbmVJbmRleCkpO1xuICAgIH07XG5cbiAgICBMaW5lLnByb3RvdHlwZS5kcmF3TGluZVBvaW50ID0gZnVuY3Rpb24oeFBvcywgeVBvcywgcG9pbnRDb2xvciwgbGluZUluZGV4KSB7XG4gICAgICByZXR1cm4gdGhpcy5yYXBoYWVsLmNpcmNsZSh4UG9zLCB5UG9zLCB0aGlzLnBvaW50U2l6ZUZvclNlcmllcyhsaW5lSW5kZXgpKS5hdHRyKCdmaWxsJywgcG9pbnRDb2xvcikuYXR0cignc3Ryb2tlLXdpZHRoJywgdGhpcy5wb2ludFN0cm9rZVdpZHRoRm9yU2VyaWVzKGxpbmVJbmRleCkpLmF0dHIoJ3N0cm9rZScsIHRoaXMucG9pbnRTdHJva2VDb2xvckZvclNlcmllcyhsaW5lSW5kZXgpKTtcbiAgICB9O1xuXG4gICAgTGluZS5wcm90b3R5cGUucG9pbnRTdHJva2VXaWR0aEZvclNlcmllcyA9IGZ1bmN0aW9uKGluZGV4KSB7XG4gICAgICByZXR1cm4gdGhpcy5vcHRpb25zLnBvaW50U3Ryb2tlV2lkdGhzW2luZGV4ICUgdGhpcy5vcHRpb25zLnBvaW50U3Ryb2tlV2lkdGhzLmxlbmd0aF07XG4gICAgfTtcblxuICAgIExpbmUucHJvdG90eXBlLnBvaW50U3Ryb2tlQ29sb3JGb3JTZXJpZXMgPSBmdW5jdGlvbihpbmRleCkge1xuICAgICAgcmV0dXJuIHRoaXMub3B0aW9ucy5wb2ludFN0cm9rZUNvbG9yc1tpbmRleCAlIHRoaXMub3B0aW9ucy5wb2ludFN0cm9rZUNvbG9ycy5sZW5ndGhdO1xuICAgIH07XG5cbiAgICBMaW5lLnByb3RvdHlwZS5saW5lV2lkdGhGb3JTZXJpZXMgPSBmdW5jdGlvbihpbmRleCkge1xuICAgICAgaWYgKHRoaXMub3B0aW9ucy5saW5lV2lkdGggaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICByZXR1cm4gdGhpcy5vcHRpb25zLmxpbmVXaWR0aFtpbmRleCAlIHRoaXMub3B0aW9ucy5saW5lV2lkdGgubGVuZ3RoXTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB0aGlzLm9wdGlvbnMubGluZVdpZHRoO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBMaW5lLnByb3RvdHlwZS5wb2ludFNpemVGb3JTZXJpZXMgPSBmdW5jdGlvbihpbmRleCkge1xuICAgICAgaWYgKHRoaXMub3B0aW9ucy5wb2ludFNpemUgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICByZXR1cm4gdGhpcy5vcHRpb25zLnBvaW50U2l6ZVtpbmRleCAlIHRoaXMub3B0aW9ucy5wb2ludFNpemUubGVuZ3RoXTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB0aGlzLm9wdGlvbnMucG9pbnRTaXplO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBMaW5lLnByb3RvdHlwZS5wb2ludEdyb3dTZXJpZXMgPSBmdW5jdGlvbihpbmRleCkge1xuICAgICAgcmV0dXJuIFJhcGhhZWwuYW5pbWF0aW9uKHtcbiAgICAgICAgcjogdGhpcy5wb2ludFNpemVGb3JTZXJpZXMoaW5kZXgpICsgM1xuICAgICAgfSwgMjUsICdsaW5lYXInKTtcbiAgICB9O1xuXG4gICAgTGluZS5wcm90b3R5cGUucG9pbnRTaHJpbmtTZXJpZXMgPSBmdW5jdGlvbihpbmRleCkge1xuICAgICAgcmV0dXJuIFJhcGhhZWwuYW5pbWF0aW9uKHtcbiAgICAgICAgcjogdGhpcy5wb2ludFNpemVGb3JTZXJpZXMoaW5kZXgpXG4gICAgICB9LCAyNSwgJ2xpbmVhcicpO1xuICAgIH07XG5cbiAgICByZXR1cm4gTGluZTtcblxuICB9KShNb3JyaXMuR3JpZCk7XG5cbiAgTW9ycmlzLmxhYmVsU2VyaWVzID0gZnVuY3Rpb24oZG1pbiwgZG1heCwgcHh3aWR0aCwgc3BlY05hbWUsIHhMYWJlbEZvcm1hdCkge1xuICAgIHZhciBkLCBkMCwgZGRlbnNpdHksIG5hbWUsIHJldCwgcywgc3BlYywgdCwgX2ksIF9sZW4sIF9yZWY7XG4gICAgZGRlbnNpdHkgPSAyMDAgKiAoZG1heCAtIGRtaW4pIC8gcHh3aWR0aDtcbiAgICBkMCA9IG5ldyBEYXRlKGRtaW4pO1xuICAgIHNwZWMgPSBNb3JyaXMuTEFCRUxfU1BFQ1Nbc3BlY05hbWVdO1xuICAgIGlmIChzcGVjID09PSB2b2lkIDApIHtcbiAgICAgIF9yZWYgPSBNb3JyaXMuQVVUT19MQUJFTF9PUkRFUjtcbiAgICAgIGZvciAoX2kgPSAwLCBfbGVuID0gX3JlZi5sZW5ndGg7IF9pIDwgX2xlbjsgX2krKykge1xuICAgICAgICBuYW1lID0gX3JlZltfaV07XG4gICAgICAgIHMgPSBNb3JyaXMuTEFCRUxfU1BFQ1NbbmFtZV07XG4gICAgICAgIGlmIChkZGVuc2l0eSA+PSBzLnNwYW4pIHtcbiAgICAgICAgICBzcGVjID0gcztcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBpZiAoc3BlYyA9PT0gdm9pZCAwKSB7XG4gICAgICBzcGVjID0gTW9ycmlzLkxBQkVMX1NQRUNTW1wic2Vjb25kXCJdO1xuICAgIH1cbiAgICBpZiAoeExhYmVsRm9ybWF0KSB7XG4gICAgICBzcGVjID0gJC5leHRlbmQoe30sIHNwZWMsIHtcbiAgICAgICAgZm10OiB4TGFiZWxGb3JtYXRcbiAgICAgIH0pO1xuICAgIH1cbiAgICBkID0gc3BlYy5zdGFydChkMCk7XG4gICAgcmV0ID0gW107XG4gICAgd2hpbGUgKCh0ID0gZC5nZXRUaW1lKCkpIDw9IGRtYXgpIHtcbiAgICAgIGlmICh0ID49IGRtaW4pIHtcbiAgICAgICAgcmV0LnB1c2goW3NwZWMuZm10KGQpLCB0XSk7XG4gICAgICB9XG4gICAgICBzcGVjLmluY3IoZCk7XG4gICAgfVxuICAgIHJldHVybiByZXQ7XG4gIH07XG5cbiAgbWludXRlc1NwZWNIZWxwZXIgPSBmdW5jdGlvbihpbnRlcnZhbCkge1xuICAgIHJldHVybiB7XG4gICAgICBzcGFuOiBpbnRlcnZhbCAqIDYwICogMTAwMCxcbiAgICAgIHN0YXJ0OiBmdW5jdGlvbihkKSB7XG4gICAgICAgIHJldHVybiBuZXcgRGF0ZShkLmdldEZ1bGxZZWFyKCksIGQuZ2V0TW9udGgoKSwgZC5nZXREYXRlKCksIGQuZ2V0SG91cnMoKSk7XG4gICAgICB9LFxuICAgICAgZm10OiBmdW5jdGlvbihkKSB7XG4gICAgICAgIHJldHVybiBcIlwiICsgKE1vcnJpcy5wYWQyKGQuZ2V0SG91cnMoKSkpICsgXCI6XCIgKyAoTW9ycmlzLnBhZDIoZC5nZXRNaW51dGVzKCkpKTtcbiAgICAgIH0sXG4gICAgICBpbmNyOiBmdW5jdGlvbihkKSB7XG4gICAgICAgIHJldHVybiBkLnNldFVUQ01pbnV0ZXMoZC5nZXRVVENNaW51dGVzKCkgKyBpbnRlcnZhbCk7XG4gICAgICB9XG4gICAgfTtcbiAgfTtcblxuICBzZWNvbmRzU3BlY0hlbHBlciA9IGZ1bmN0aW9uKGludGVydmFsKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHNwYW46IGludGVydmFsICogMTAwMCxcbiAgICAgIHN0YXJ0OiBmdW5jdGlvbihkKSB7XG4gICAgICAgIHJldHVybiBuZXcgRGF0ZShkLmdldEZ1bGxZZWFyKCksIGQuZ2V0TW9udGgoKSwgZC5nZXREYXRlKCksIGQuZ2V0SG91cnMoKSwgZC5nZXRNaW51dGVzKCkpO1xuICAgICAgfSxcbiAgICAgIGZtdDogZnVuY3Rpb24oZCkge1xuICAgICAgICByZXR1cm4gXCJcIiArIChNb3JyaXMucGFkMihkLmdldEhvdXJzKCkpKSArIFwiOlwiICsgKE1vcnJpcy5wYWQyKGQuZ2V0TWludXRlcygpKSkgKyBcIjpcIiArIChNb3JyaXMucGFkMihkLmdldFNlY29uZHMoKSkpO1xuICAgICAgfSxcbiAgICAgIGluY3I6IGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgcmV0dXJuIGQuc2V0VVRDU2Vjb25kcyhkLmdldFVUQ1NlY29uZHMoKSArIGludGVydmFsKTtcbiAgICAgIH1cbiAgICB9O1xuICB9O1xuXG4gIE1vcnJpcy5MQUJFTF9TUEVDUyA9IHtcbiAgICBcImRlY2FkZVwiOiB7XG4gICAgICBzcGFuOiAxNzI4MDAwMDAwMDAsXG4gICAgICBzdGFydDogZnVuY3Rpb24oZCkge1xuICAgICAgICByZXR1cm4gbmV3IERhdGUoZC5nZXRGdWxsWWVhcigpIC0gZC5nZXRGdWxsWWVhcigpICUgMTAsIDAsIDEpO1xuICAgICAgfSxcbiAgICAgIGZtdDogZnVuY3Rpb24oZCkge1xuICAgICAgICByZXR1cm4gXCJcIiArIChkLmdldEZ1bGxZZWFyKCkpO1xuICAgICAgfSxcbiAgICAgIGluY3I6IGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgcmV0dXJuIGQuc2V0RnVsbFllYXIoZC5nZXRGdWxsWWVhcigpICsgMTApO1xuICAgICAgfVxuICAgIH0sXG4gICAgXCJ5ZWFyXCI6IHtcbiAgICAgIHNwYW46IDE3MjgwMDAwMDAwLFxuICAgICAgc3RhcnQ6IGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBEYXRlKGQuZ2V0RnVsbFllYXIoKSwgMCwgMSk7XG4gICAgICB9LFxuICAgICAgZm10OiBmdW5jdGlvbihkKSB7XG4gICAgICAgIHJldHVybiBcIlwiICsgKGQuZ2V0RnVsbFllYXIoKSk7XG4gICAgICB9LFxuICAgICAgaW5jcjogZnVuY3Rpb24oZCkge1xuICAgICAgICByZXR1cm4gZC5zZXRGdWxsWWVhcihkLmdldEZ1bGxZZWFyKCkgKyAxKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIFwibW9udGhcIjoge1xuICAgICAgc3BhbjogMjQxOTIwMDAwMCxcbiAgICAgIHN0YXJ0OiBmdW5jdGlvbihkKSB7XG4gICAgICAgIHJldHVybiBuZXcgRGF0ZShkLmdldEZ1bGxZZWFyKCksIGQuZ2V0TW9udGgoKSwgMSk7XG4gICAgICB9LFxuICAgICAgZm10OiBmdW5jdGlvbihkKSB7XG4gICAgICAgIHJldHVybiBcIlwiICsgKGQuZ2V0RnVsbFllYXIoKSkgKyBcIi1cIiArIChNb3JyaXMucGFkMihkLmdldE1vbnRoKCkgKyAxKSk7XG4gICAgICB9LFxuICAgICAgaW5jcjogZnVuY3Rpb24oZCkge1xuICAgICAgICByZXR1cm4gZC5zZXRNb250aChkLmdldE1vbnRoKCkgKyAxKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIFwid2Vla1wiOiB7XG4gICAgICBzcGFuOiA2MDQ4MDAwMDAsXG4gICAgICBzdGFydDogZnVuY3Rpb24oZCkge1xuICAgICAgICByZXR1cm4gbmV3IERhdGUoZC5nZXRGdWxsWWVhcigpLCBkLmdldE1vbnRoKCksIGQuZ2V0RGF0ZSgpKTtcbiAgICAgIH0sXG4gICAgICBmbXQ6IGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgcmV0dXJuIFwiXCIgKyAoZC5nZXRGdWxsWWVhcigpKSArIFwiLVwiICsgKE1vcnJpcy5wYWQyKGQuZ2V0TW9udGgoKSArIDEpKSArIFwiLVwiICsgKE1vcnJpcy5wYWQyKGQuZ2V0RGF0ZSgpKSk7XG4gICAgICB9LFxuICAgICAgaW5jcjogZnVuY3Rpb24oZCkge1xuICAgICAgICByZXR1cm4gZC5zZXREYXRlKGQuZ2V0RGF0ZSgpICsgNyk7XG4gICAgICB9XG4gICAgfSxcbiAgICBcImRheVwiOiB7XG4gICAgICBzcGFuOiA4NjQwMDAwMCxcbiAgICAgIHN0YXJ0OiBmdW5jdGlvbihkKSB7XG4gICAgICAgIHJldHVybiBuZXcgRGF0ZShkLmdldEZ1bGxZZWFyKCksIGQuZ2V0TW9udGgoKSwgZC5nZXREYXRlKCkpO1xuICAgICAgfSxcbiAgICAgIGZtdDogZnVuY3Rpb24oZCkge1xuICAgICAgICByZXR1cm4gXCJcIiArIChkLmdldEZ1bGxZZWFyKCkpICsgXCItXCIgKyAoTW9ycmlzLnBhZDIoZC5nZXRNb250aCgpICsgMSkpICsgXCItXCIgKyAoTW9ycmlzLnBhZDIoZC5nZXREYXRlKCkpKTtcbiAgICAgIH0sXG4gICAgICBpbmNyOiBmdW5jdGlvbihkKSB7XG4gICAgICAgIHJldHVybiBkLnNldERhdGUoZC5nZXREYXRlKCkgKyAxKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIFwiaG91clwiOiBtaW51dGVzU3BlY0hlbHBlcig2MCksXG4gICAgXCIzMG1pblwiOiBtaW51dGVzU3BlY0hlbHBlcigzMCksXG4gICAgXCIxNW1pblwiOiBtaW51dGVzU3BlY0hlbHBlcigxNSksXG4gICAgXCIxMG1pblwiOiBtaW51dGVzU3BlY0hlbHBlcigxMCksXG4gICAgXCI1bWluXCI6IG1pbnV0ZXNTcGVjSGVscGVyKDUpLFxuICAgIFwibWludXRlXCI6IG1pbnV0ZXNTcGVjSGVscGVyKDEpLFxuICAgIFwiMzBzZWNcIjogc2Vjb25kc1NwZWNIZWxwZXIoMzApLFxuICAgIFwiMTVzZWNcIjogc2Vjb25kc1NwZWNIZWxwZXIoMTUpLFxuICAgIFwiMTBzZWNcIjogc2Vjb25kc1NwZWNIZWxwZXIoMTApLFxuICAgIFwiNXNlY1wiOiBzZWNvbmRzU3BlY0hlbHBlcig1KSxcbiAgICBcInNlY29uZFwiOiBzZWNvbmRzU3BlY0hlbHBlcigxKVxuICB9O1xuXG4gIE1vcnJpcy5BVVRPX0xBQkVMX09SREVSID0gW1wiZGVjYWRlXCIsIFwieWVhclwiLCBcIm1vbnRoXCIsIFwid2Vla1wiLCBcImRheVwiLCBcImhvdXJcIiwgXCIzMG1pblwiLCBcIjE1bWluXCIsIFwiMTBtaW5cIiwgXCI1bWluXCIsIFwibWludXRlXCIsIFwiMzBzZWNcIiwgXCIxNXNlY1wiLCBcIjEwc2VjXCIsIFwiNXNlY1wiLCBcInNlY29uZFwiXTtcblxuICBNb3JyaXMuQXJlYSA9IChmdW5jdGlvbihfc3VwZXIpIHtcbiAgICB2YXIgYXJlYURlZmF1bHRzO1xuXG4gICAgX19leHRlbmRzKEFyZWEsIF9zdXBlcik7XG5cbiAgICBhcmVhRGVmYXVsdHMgPSB7XG4gICAgICBmaWxsT3BhY2l0eTogJ2F1dG8nLFxuICAgICAgYmVoYXZlTGlrZUxpbmU6IGZhbHNlXG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIEFyZWEob3B0aW9ucykge1xuICAgICAgdmFyIGFyZWFPcHRpb25zO1xuICAgICAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIE1vcnJpcy5BcmVhKSkge1xuICAgICAgICByZXR1cm4gbmV3IE1vcnJpcy5BcmVhKG9wdGlvbnMpO1xuICAgICAgfVxuICAgICAgYXJlYU9wdGlvbnMgPSAkLmV4dGVuZCh7fSwgYXJlYURlZmF1bHRzLCBvcHRpb25zKTtcbiAgICAgIHRoaXMuY3VtdWxhdGl2ZSA9ICFhcmVhT3B0aW9ucy5iZWhhdmVMaWtlTGluZTtcbiAgICAgIGlmIChhcmVhT3B0aW9ucy5maWxsT3BhY2l0eSA9PT0gJ2F1dG8nKSB7XG4gICAgICAgIGFyZWFPcHRpb25zLmZpbGxPcGFjaXR5ID0gYXJlYU9wdGlvbnMuYmVoYXZlTGlrZUxpbmUgPyAuOCA6IDE7XG4gICAgICB9XG4gICAgICBBcmVhLl9fc3VwZXJfXy5jb25zdHJ1Y3Rvci5jYWxsKHRoaXMsIGFyZWFPcHRpb25zKTtcbiAgICB9XG5cbiAgICBBcmVhLnByb3RvdHlwZS5jYWxjUG9pbnRzID0gZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgcm93LCB0b3RhbCwgeSwgX2ksIF9sZW4sIF9yZWYsIF9yZXN1bHRzO1xuICAgICAgX3JlZiA9IHRoaXMuZGF0YTtcbiAgICAgIF9yZXN1bHRzID0gW107XG4gICAgICBmb3IgKF9pID0gMCwgX2xlbiA9IF9yZWYubGVuZ3RoOyBfaSA8IF9sZW47IF9pKyspIHtcbiAgICAgICAgcm93ID0gX3JlZltfaV07XG4gICAgICAgIHJvdy5feCA9IHRoaXMudHJhbnNYKHJvdy54KTtcbiAgICAgICAgdG90YWwgPSAwO1xuICAgICAgICByb3cuX3kgPSAoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgdmFyIF9qLCBfbGVuMSwgX3JlZjEsIF9yZXN1bHRzMTtcbiAgICAgICAgICBfcmVmMSA9IHJvdy55O1xuICAgICAgICAgIF9yZXN1bHRzMSA9IFtdO1xuICAgICAgICAgIGZvciAoX2ogPSAwLCBfbGVuMSA9IF9yZWYxLmxlbmd0aDsgX2ogPCBfbGVuMTsgX2orKykge1xuICAgICAgICAgICAgeSA9IF9yZWYxW19qXTtcbiAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMuYmVoYXZlTGlrZUxpbmUpIHtcbiAgICAgICAgICAgICAgX3Jlc3VsdHMxLnB1c2godGhpcy50cmFuc1koeSkpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdG90YWwgKz0geSB8fCAwO1xuICAgICAgICAgICAgICBfcmVzdWx0czEucHVzaCh0aGlzLnRyYW5zWSh0b3RhbCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gX3Jlc3VsdHMxO1xuICAgICAgICB9KS5jYWxsKHRoaXMpO1xuICAgICAgICBfcmVzdWx0cy5wdXNoKHJvdy5feW1heCA9IE1hdGgubWF4LmFwcGx5KE1hdGgsIHJvdy5feSkpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIF9yZXN1bHRzO1xuICAgIH07XG5cbiAgICBBcmVhLnByb3RvdHlwZS5kcmF3U2VyaWVzID0gZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgaSwgcmFuZ2UsIF9pLCBfaiwgX2ssIF9sZW4sIF9yZWYsIF9yZWYxLCBfcmVzdWx0cywgX3Jlc3VsdHMxLCBfcmVzdWx0czI7XG4gICAgICB0aGlzLnNlcmllc1BvaW50cyA9IFtdO1xuICAgICAgaWYgKHRoaXMub3B0aW9ucy5iZWhhdmVMaWtlTGluZSkge1xuICAgICAgICByYW5nZSA9IChmdW5jdGlvbigpIHtcbiAgICAgICAgICBfcmVzdWx0cyA9IFtdO1xuICAgICAgICAgIGZvciAodmFyIF9pID0gMCwgX3JlZiA9IHRoaXMub3B0aW9ucy55a2V5cy5sZW5ndGggLSAxOyAwIDw9IF9yZWYgPyBfaSA8PSBfcmVmIDogX2kgPj0gX3JlZjsgMCA8PSBfcmVmID8gX2krKyA6IF9pLS0peyBfcmVzdWx0cy5wdXNoKF9pKTsgfVxuICAgICAgICAgIHJldHVybiBfcmVzdWx0cztcbiAgICAgICAgfSkuYXBwbHkodGhpcyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByYW5nZSA9IChmdW5jdGlvbigpIHtcbiAgICAgICAgICBfcmVzdWx0czEgPSBbXTtcbiAgICAgICAgICBmb3IgKHZhciBfaiA9IF9yZWYxID0gdGhpcy5vcHRpb25zLnlrZXlzLmxlbmd0aCAtIDE7IF9yZWYxIDw9IDAgPyBfaiA8PSAwIDogX2ogPj0gMDsgX3JlZjEgPD0gMCA/IF9qKysgOiBfai0tKXsgX3Jlc3VsdHMxLnB1c2goX2opOyB9XG4gICAgICAgICAgcmV0dXJuIF9yZXN1bHRzMTtcbiAgICAgICAgfSkuYXBwbHkodGhpcyk7XG4gICAgICB9XG4gICAgICBfcmVzdWx0czIgPSBbXTtcbiAgICAgIGZvciAoX2sgPSAwLCBfbGVuID0gcmFuZ2UubGVuZ3RoOyBfayA8IF9sZW47IF9rKyspIHtcbiAgICAgICAgaSA9IHJhbmdlW19rXTtcbiAgICAgICAgdGhpcy5fZHJhd0ZpbGxGb3IoaSk7XG4gICAgICAgIHRoaXMuX2RyYXdMaW5lRm9yKGkpO1xuICAgICAgICBfcmVzdWx0czIucHVzaCh0aGlzLl9kcmF3UG9pbnRGb3IoaSkpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIF9yZXN1bHRzMjtcbiAgICB9O1xuXG4gICAgQXJlYS5wcm90b3R5cGUuX2RyYXdGaWxsRm9yID0gZnVuY3Rpb24oaW5kZXgpIHtcbiAgICAgIHZhciBwYXRoO1xuICAgICAgcGF0aCA9IHRoaXMucGF0aHNbaW5kZXhdO1xuICAgICAgaWYgKHBhdGggIT09IG51bGwpIHtcbiAgICAgICAgcGF0aCA9IHBhdGggKyAoXCJMXCIgKyAodGhpcy50cmFuc1godGhpcy54bWF4KSkgKyBcIixcIiArIHRoaXMuYm90dG9tICsgXCJMXCIgKyAodGhpcy50cmFuc1godGhpcy54bWluKSkgKyBcIixcIiArIHRoaXMuYm90dG9tICsgXCJaXCIpO1xuICAgICAgICByZXR1cm4gdGhpcy5kcmF3RmlsbGVkUGF0aChwYXRoLCB0aGlzLmZpbGxGb3JTZXJpZXMoaW5kZXgpKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgQXJlYS5wcm90b3R5cGUuZmlsbEZvclNlcmllcyA9IGZ1bmN0aW9uKGkpIHtcbiAgICAgIHZhciBjb2xvcjtcbiAgICAgIGNvbG9yID0gUmFwaGFlbC5yZ2IyaHNsKHRoaXMuY29sb3JGb3IodGhpcy5kYXRhW2ldLCBpLCAnbGluZScpKTtcbiAgICAgIHJldHVybiBSYXBoYWVsLmhzbChjb2xvci5oLCB0aGlzLm9wdGlvbnMuYmVoYXZlTGlrZUxpbmUgPyBjb2xvci5zICogMC45IDogY29sb3IucyAqIDAuNzUsIE1hdGgubWluKDAuOTgsIHRoaXMub3B0aW9ucy5iZWhhdmVMaWtlTGluZSA/IGNvbG9yLmwgKiAxLjIgOiBjb2xvci5sICogMS4yNSkpO1xuICAgIH07XG5cbiAgICBBcmVhLnByb3RvdHlwZS5kcmF3RmlsbGVkUGF0aCA9IGZ1bmN0aW9uKHBhdGgsIGZpbGwpIHtcbiAgICAgIHJldHVybiB0aGlzLnJhcGhhZWwucGF0aChwYXRoKS5hdHRyKCdmaWxsJywgZmlsbCkuYXR0cignZmlsbC1vcGFjaXR5JywgdGhpcy5vcHRpb25zLmZpbGxPcGFjaXR5KS5hdHRyKCdzdHJva2UnLCAnbm9uZScpO1xuICAgIH07XG5cbiAgICByZXR1cm4gQXJlYTtcblxuICB9KShNb3JyaXMuTGluZSk7XG5cbiAgTW9ycmlzLkJhciA9IChmdW5jdGlvbihfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoQmFyLCBfc3VwZXIpO1xuXG4gICAgZnVuY3Rpb24gQmFyKG9wdGlvbnMpIHtcbiAgICAgIHRoaXMub25Ib3Zlck91dCA9IF9fYmluZCh0aGlzLm9uSG92ZXJPdXQsIHRoaXMpO1xuICAgICAgdGhpcy5vbkhvdmVyTW92ZSA9IF9fYmluZCh0aGlzLm9uSG92ZXJNb3ZlLCB0aGlzKTtcbiAgICAgIHRoaXMub25HcmlkQ2xpY2sgPSBfX2JpbmQodGhpcy5vbkdyaWRDbGljaywgdGhpcyk7XG4gICAgICBpZiAoISh0aGlzIGluc3RhbmNlb2YgTW9ycmlzLkJhcikpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBNb3JyaXMuQmFyKG9wdGlvbnMpO1xuICAgICAgfVxuICAgICAgQmFyLl9fc3VwZXJfXy5jb25zdHJ1Y3Rvci5jYWxsKHRoaXMsICQuZXh0ZW5kKHt9LCBvcHRpb25zLCB7XG4gICAgICAgIHBhcnNlVGltZTogZmFsc2VcbiAgICAgIH0pKTtcbiAgICB9XG5cbiAgICBCYXIucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMuY3VtdWxhdGl2ZSA9IHRoaXMub3B0aW9ucy5zdGFja2VkO1xuICAgICAgaWYgKHRoaXMub3B0aW9ucy5oaWRlSG92ZXIgIT09ICdhbHdheXMnKSB7XG4gICAgICAgIHRoaXMuaG92ZXIgPSBuZXcgTW9ycmlzLkhvdmVyKHtcbiAgICAgICAgICBwYXJlbnQ6IHRoaXMuZWxcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMub24oJ2hvdmVybW92ZScsIHRoaXMub25Ib3Zlck1vdmUpO1xuICAgICAgICB0aGlzLm9uKCdob3Zlcm91dCcsIHRoaXMub25Ib3Zlck91dCk7XG4gICAgICAgIHJldHVybiB0aGlzLm9uKCdncmlkY2xpY2snLCB0aGlzLm9uR3JpZENsaWNrKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgQmFyLnByb3RvdHlwZS5kZWZhdWx0cyA9IHtcbiAgICAgIGJhclNpemVSYXRpbzogMC43NSxcbiAgICAgIGJhckdhcDogMyxcbiAgICAgIGJhckNvbG9yczogWycjMGI2MmE0JywgJyM3YTkyYTMnLCAnIzRkYTc0ZCcsICcjYWZkOGY4JywgJyNlZGMyNDAnLCAnI2NiNGI0YicsICcjOTQ0MGVkJ10sXG4gICAgICBiYXJPcGFjaXR5OiAxLjAsXG4gICAgICBiYXJSYWRpdXM6IFswLCAwLCAwLCAwXSxcbiAgICAgIHhMYWJlbE1hcmdpbjogNTBcbiAgICB9O1xuXG4gICAgQmFyLnByb3RvdHlwZS5jYWxjID0gZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgX3JlZjtcbiAgICAgIHRoaXMuY2FsY0JhcnMoKTtcbiAgICAgIGlmICh0aGlzLm9wdGlvbnMuaGlkZUhvdmVyID09PSBmYWxzZSkge1xuICAgICAgICByZXR1cm4gKF9yZWYgPSB0aGlzLmhvdmVyKS51cGRhdGUuYXBwbHkoX3JlZiwgdGhpcy5ob3ZlckNvbnRlbnRGb3JSb3codGhpcy5kYXRhLmxlbmd0aCAtIDEpKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgQmFyLnByb3RvdHlwZS5jYWxjQmFycyA9IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIGlkeCwgcm93LCB5LCBfaSwgX2xlbiwgX3JlZiwgX3Jlc3VsdHM7XG4gICAgICBfcmVmID0gdGhpcy5kYXRhO1xuICAgICAgX3Jlc3VsdHMgPSBbXTtcbiAgICAgIGZvciAoaWR4ID0gX2kgPSAwLCBfbGVuID0gX3JlZi5sZW5ndGg7IF9pIDwgX2xlbjsgaWR4ID0gKytfaSkge1xuICAgICAgICByb3cgPSBfcmVmW2lkeF07XG4gICAgICAgIHJvdy5feCA9IHRoaXMubGVmdCArIHRoaXMud2lkdGggKiAoaWR4ICsgMC41KSAvIHRoaXMuZGF0YS5sZW5ndGg7XG4gICAgICAgIF9yZXN1bHRzLnB1c2gocm93Ll95ID0gKGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHZhciBfaiwgX2xlbjEsIF9yZWYxLCBfcmVzdWx0czE7XG4gICAgICAgICAgX3JlZjEgPSByb3cueTtcbiAgICAgICAgICBfcmVzdWx0czEgPSBbXTtcbiAgICAgICAgICBmb3IgKF9qID0gMCwgX2xlbjEgPSBfcmVmMS5sZW5ndGg7IF9qIDwgX2xlbjE7IF9qKyspIHtcbiAgICAgICAgICAgIHkgPSBfcmVmMVtfal07XG4gICAgICAgICAgICBpZiAoeSAhPSBudWxsKSB7XG4gICAgICAgICAgICAgIF9yZXN1bHRzMS5wdXNoKHRoaXMudHJhbnNZKHkpKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIF9yZXN1bHRzMS5wdXNoKG51bGwpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gX3Jlc3VsdHMxO1xuICAgICAgICB9KS5jYWxsKHRoaXMpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBfcmVzdWx0cztcbiAgICB9O1xuXG4gICAgQmFyLnByb3RvdHlwZS5kcmF3ID0gZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgX3JlZjtcbiAgICAgIGlmICgoX3JlZiA9IHRoaXMub3B0aW9ucy5heGVzKSA9PT0gdHJ1ZSB8fCBfcmVmID09PSAnYm90aCcgfHwgX3JlZiA9PT0gJ3gnKSB7XG4gICAgICAgIHRoaXMuZHJhd1hBeGlzKCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcy5kcmF3U2VyaWVzKCk7XG4gICAgfTtcblxuICAgIEJhci5wcm90b3R5cGUuZHJhd1hBeGlzID0gZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgaSwgbGFiZWwsIGxhYmVsQm94LCBtYXJnaW4sIG9mZnNldCwgcHJldkFuZ2xlTWFyZ2luLCBwcmV2TGFiZWxNYXJnaW4sIHJvdywgdGV4dEJveCwgeXBvcywgX2ksIF9yZWYsIF9yZXN1bHRzO1xuICAgICAgeXBvcyA9IHRoaXMuYm90dG9tICsgKHRoaXMub3B0aW9ucy54QXhpc0xhYmVsVG9wUGFkZGluZyB8fCB0aGlzLm9wdGlvbnMucGFkZGluZyAvIDIpO1xuICAgICAgcHJldkxhYmVsTWFyZ2luID0gbnVsbDtcbiAgICAgIHByZXZBbmdsZU1hcmdpbiA9IG51bGw7XG4gICAgICBfcmVzdWx0cyA9IFtdO1xuICAgICAgZm9yIChpID0gX2kgPSAwLCBfcmVmID0gdGhpcy5kYXRhLmxlbmd0aDsgMCA8PSBfcmVmID8gX2kgPCBfcmVmIDogX2kgPiBfcmVmOyBpID0gMCA8PSBfcmVmID8gKytfaSA6IC0tX2kpIHtcbiAgICAgICAgcm93ID0gdGhpcy5kYXRhW3RoaXMuZGF0YS5sZW5ndGggLSAxIC0gaV07XG4gICAgICAgIGxhYmVsID0gdGhpcy5kcmF3WEF4aXNMYWJlbChyb3cuX3gsIHlwb3MsIHJvdy5sYWJlbCk7XG4gICAgICAgIHRleHRCb3ggPSBsYWJlbC5nZXRCQm94KCk7XG4gICAgICAgIGxhYmVsLnRyYW5zZm9ybShcInJcIiArICgtdGhpcy5vcHRpb25zLnhMYWJlbEFuZ2xlKSk7XG4gICAgICAgIGxhYmVsQm94ID0gbGFiZWwuZ2V0QkJveCgpO1xuICAgICAgICBsYWJlbC50cmFuc2Zvcm0oXCJ0MCxcIiArIChsYWJlbEJveC5oZWlnaHQgLyAyKSArIFwiLi4uXCIpO1xuICAgICAgICBpZiAodGhpcy5vcHRpb25zLnhMYWJlbEFuZ2xlICE9PSAwKSB7XG4gICAgICAgICAgb2Zmc2V0ID0gLTAuNSAqIHRleHRCb3gud2lkdGggKiBNYXRoLmNvcyh0aGlzLm9wdGlvbnMueExhYmVsQW5nbGUgKiBNYXRoLlBJIC8gMTgwLjApO1xuICAgICAgICAgIGxhYmVsLnRyYW5zZm9ybShcInRcIiArIG9mZnNldCArIFwiLDAuLi5cIik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCgocHJldkxhYmVsTWFyZ2luID09IG51bGwpIHx8IHByZXZMYWJlbE1hcmdpbiA+PSBsYWJlbEJveC54ICsgbGFiZWxCb3gud2lkdGggfHwgKHByZXZBbmdsZU1hcmdpbiAhPSBudWxsKSAmJiBwcmV2QW5nbGVNYXJnaW4gPj0gbGFiZWxCb3gueCkgJiYgbGFiZWxCb3gueCA+PSAwICYmIChsYWJlbEJveC54ICsgbGFiZWxCb3gud2lkdGgpIDwgdGhpcy5lbC53aWR0aCgpKSB7XG4gICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy54TGFiZWxBbmdsZSAhPT0gMCkge1xuICAgICAgICAgICAgbWFyZ2luID0gMS4yNSAqIHRoaXMub3B0aW9ucy5ncmlkVGV4dFNpemUgLyBNYXRoLnNpbih0aGlzLm9wdGlvbnMueExhYmVsQW5nbGUgKiBNYXRoLlBJIC8gMTgwLjApO1xuICAgICAgICAgICAgcHJldkFuZ2xlTWFyZ2luID0gbGFiZWxCb3gueCAtIG1hcmdpbjtcbiAgICAgICAgICB9XG4gICAgICAgICAgX3Jlc3VsdHMucHVzaChwcmV2TGFiZWxNYXJnaW4gPSBsYWJlbEJveC54IC0gdGhpcy5vcHRpb25zLnhMYWJlbE1hcmdpbik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgX3Jlc3VsdHMucHVzaChsYWJlbC5yZW1vdmUoKSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBfcmVzdWx0cztcbiAgICB9O1xuXG4gICAgQmFyLnByb3RvdHlwZS5kcmF3U2VyaWVzID0gZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgYmFyV2lkdGgsIGJvdHRvbSwgZ3JvdXBXaWR0aCwgaWR4LCBsYXN0VG9wLCBsZWZ0LCBsZWZ0UGFkZGluZywgbnVtQmFycywgcm93LCBzaWR4LCBzaXplLCBzcGFjZUxlZnQsIHRvcCwgeXBvcywgemVyb1BvcztcbiAgICAgIGdyb3VwV2lkdGggPSB0aGlzLndpZHRoIC8gdGhpcy5vcHRpb25zLmRhdGEubGVuZ3RoO1xuICAgICAgbnVtQmFycyA9IHRoaXMub3B0aW9ucy5zdGFja2VkID8gMSA6IHRoaXMub3B0aW9ucy55a2V5cy5sZW5ndGg7XG4gICAgICBiYXJXaWR0aCA9IChncm91cFdpZHRoICogdGhpcy5vcHRpb25zLmJhclNpemVSYXRpbyAtIHRoaXMub3B0aW9ucy5iYXJHYXAgKiAobnVtQmFycyAtIDEpKSAvIG51bUJhcnM7XG4gICAgICBpZiAodGhpcy5vcHRpb25zLmJhclNpemUpIHtcbiAgICAgICAgYmFyV2lkdGggPSBNYXRoLm1pbihiYXJXaWR0aCwgdGhpcy5vcHRpb25zLmJhclNpemUpO1xuICAgICAgfVxuICAgICAgc3BhY2VMZWZ0ID0gZ3JvdXBXaWR0aCAtIGJhcldpZHRoICogbnVtQmFycyAtIHRoaXMub3B0aW9ucy5iYXJHYXAgKiAobnVtQmFycyAtIDEpO1xuICAgICAgbGVmdFBhZGRpbmcgPSBzcGFjZUxlZnQgLyAyO1xuICAgICAgemVyb1BvcyA9IHRoaXMueW1pbiA8PSAwICYmIHRoaXMueW1heCA+PSAwID8gdGhpcy50cmFuc1koMCkgOiBudWxsO1xuICAgICAgcmV0dXJuIHRoaXMuYmFycyA9IChmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIF9pLCBfbGVuLCBfcmVmLCBfcmVzdWx0cztcbiAgICAgICAgX3JlZiA9IHRoaXMuZGF0YTtcbiAgICAgICAgX3Jlc3VsdHMgPSBbXTtcbiAgICAgICAgZm9yIChpZHggPSBfaSA9IDAsIF9sZW4gPSBfcmVmLmxlbmd0aDsgX2kgPCBfbGVuOyBpZHggPSArK19pKSB7XG4gICAgICAgICAgcm93ID0gX3JlZltpZHhdO1xuICAgICAgICAgIGxhc3RUb3AgPSAwO1xuICAgICAgICAgIF9yZXN1bHRzLnB1c2goKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdmFyIF9qLCBfbGVuMSwgX3JlZjEsIF9yZXN1bHRzMTtcbiAgICAgICAgICAgIF9yZWYxID0gcm93Ll95O1xuICAgICAgICAgICAgX3Jlc3VsdHMxID0gW107XG4gICAgICAgICAgICBmb3IgKHNpZHggPSBfaiA9IDAsIF9sZW4xID0gX3JlZjEubGVuZ3RoOyBfaiA8IF9sZW4xOyBzaWR4ID0gKytfaikge1xuICAgICAgICAgICAgICB5cG9zID0gX3JlZjFbc2lkeF07XG4gICAgICAgICAgICAgIGlmICh5cG9zICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgaWYgKHplcm9Qb3MpIHtcbiAgICAgICAgICAgICAgICAgIHRvcCA9IE1hdGgubWluKHlwb3MsIHplcm9Qb3MpO1xuICAgICAgICAgICAgICAgICAgYm90dG9tID0gTWF0aC5tYXgoeXBvcywgemVyb1Bvcyk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIHRvcCA9IHlwb3M7XG4gICAgICAgICAgICAgICAgICBib3R0b20gPSB0aGlzLmJvdHRvbTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbGVmdCA9IHRoaXMubGVmdCArIGlkeCAqIGdyb3VwV2lkdGggKyBsZWZ0UGFkZGluZztcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMub3B0aW9ucy5zdGFja2VkKSB7XG4gICAgICAgICAgICAgICAgICBsZWZ0ICs9IHNpZHggKiAoYmFyV2lkdGggKyB0aGlzLm9wdGlvbnMuYmFyR2FwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgc2l6ZSA9IGJvdHRvbSAtIHRvcDtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLnZlcnRpY2FsR3JpZENvbmRpdGlvbiAmJiB0aGlzLm9wdGlvbnMudmVydGljYWxHcmlkQ29uZGl0aW9uKHJvdy54KSkge1xuICAgICAgICAgICAgICAgICAgdGhpcy5kcmF3QmFyKHRoaXMubGVmdCArIGlkeCAqIGdyb3VwV2lkdGgsIHRoaXMudG9wLCBncm91cFdpZHRoLCBNYXRoLmFicyh0aGlzLnRvcCAtIHRoaXMuYm90dG9tKSwgdGhpcy5vcHRpb25zLnZlcnRpY2FsR3JpZENvbG9yLCB0aGlzLm9wdGlvbnMudmVydGljYWxHcmlkT3BhY2l0eSwgdGhpcy5vcHRpb25zLmJhclJhZGl1cyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMuc3RhY2tlZCkge1xuICAgICAgICAgICAgICAgICAgdG9wIC09IGxhc3RUb3A7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuZHJhd0JhcihsZWZ0LCB0b3AsIGJhcldpZHRoLCBzaXplLCB0aGlzLmNvbG9yRm9yKHJvdywgc2lkeCwgJ2JhcicpLCB0aGlzLm9wdGlvbnMuYmFyT3BhY2l0eSwgdGhpcy5vcHRpb25zLmJhclJhZGl1cyk7XG4gICAgICAgICAgICAgICAgX3Jlc3VsdHMxLnB1c2gobGFzdFRvcCArPSBzaXplKTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBfcmVzdWx0czEucHVzaChudWxsKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIF9yZXN1bHRzMTtcbiAgICAgICAgICB9KS5jYWxsKHRoaXMpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gX3Jlc3VsdHM7XG4gICAgICB9KS5jYWxsKHRoaXMpO1xuICAgIH07XG5cbiAgICBCYXIucHJvdG90eXBlLmNvbG9yRm9yID0gZnVuY3Rpb24ocm93LCBzaWR4LCB0eXBlKSB7XG4gICAgICB2YXIgciwgcztcbiAgICAgIGlmICh0eXBlb2YgdGhpcy5vcHRpb25zLmJhckNvbG9ycyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByID0ge1xuICAgICAgICAgIHg6IHJvdy54LFxuICAgICAgICAgIHk6IHJvdy55W3NpZHhdLFxuICAgICAgICAgIGxhYmVsOiByb3cubGFiZWxcbiAgICAgICAgfTtcbiAgICAgICAgcyA9IHtcbiAgICAgICAgICBpbmRleDogc2lkeCxcbiAgICAgICAgICBrZXk6IHRoaXMub3B0aW9ucy55a2V5c1tzaWR4XSxcbiAgICAgICAgICBsYWJlbDogdGhpcy5vcHRpb25zLmxhYmVsc1tzaWR4XVxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gdGhpcy5vcHRpb25zLmJhckNvbG9ycy5jYWxsKHRoaXMsIHIsIHMsIHR5cGUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMub3B0aW9ucy5iYXJDb2xvcnNbc2lkeCAlIHRoaXMub3B0aW9ucy5iYXJDb2xvcnMubGVuZ3RoXTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgQmFyLnByb3RvdHlwZS5oaXRUZXN0ID0gZnVuY3Rpb24oeCkge1xuICAgICAgaWYgKHRoaXMuZGF0YS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG4gICAgICB4ID0gTWF0aC5tYXgoTWF0aC5taW4oeCwgdGhpcy5yaWdodCksIHRoaXMubGVmdCk7XG4gICAgICByZXR1cm4gTWF0aC5taW4odGhpcy5kYXRhLmxlbmd0aCAtIDEsIE1hdGguZmxvb3IoKHggLSB0aGlzLmxlZnQpIC8gKHRoaXMud2lkdGggLyB0aGlzLmRhdGEubGVuZ3RoKSkpO1xuICAgIH07XG5cbiAgICBCYXIucHJvdG90eXBlLm9uR3JpZENsaWNrID0gZnVuY3Rpb24oeCwgeSkge1xuICAgICAgdmFyIGluZGV4O1xuICAgICAgaW5kZXggPSB0aGlzLmhpdFRlc3QoeCk7XG4gICAgICByZXR1cm4gdGhpcy5maXJlKCdjbGljaycsIGluZGV4LCB0aGlzLmRhdGFbaW5kZXhdLnNyYywgeCwgeSk7XG4gICAgfTtcblxuICAgIEJhci5wcm90b3R5cGUub25Ib3Zlck1vdmUgPSBmdW5jdGlvbih4LCB5KSB7XG4gICAgICB2YXIgaW5kZXgsIF9yZWY7XG4gICAgICBpbmRleCA9IHRoaXMuaGl0VGVzdCh4KTtcbiAgICAgIHJldHVybiAoX3JlZiA9IHRoaXMuaG92ZXIpLnVwZGF0ZS5hcHBseShfcmVmLCB0aGlzLmhvdmVyQ29udGVudEZvclJvdyhpbmRleCkpO1xuICAgIH07XG5cbiAgICBCYXIucHJvdG90eXBlLm9uSG92ZXJPdXQgPSBmdW5jdGlvbigpIHtcbiAgICAgIGlmICh0aGlzLm9wdGlvbnMuaGlkZUhvdmVyICE9PSBmYWxzZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5ob3Zlci5oaWRlKCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIEJhci5wcm90b3R5cGUuaG92ZXJDb250ZW50Rm9yUm93ID0gZnVuY3Rpb24oaW5kZXgpIHtcbiAgICAgIHZhciBjb250ZW50LCBqLCByb3csIHgsIHksIF9pLCBfbGVuLCBfcmVmO1xuICAgICAgcm93ID0gdGhpcy5kYXRhW2luZGV4XTtcbiAgICAgIGNvbnRlbnQgPSBcIjxkaXYgY2xhc3M9J21vcnJpcy1ob3Zlci1yb3ctbGFiZWwnPlwiICsgcm93LmxhYmVsICsgXCI8L2Rpdj5cIjtcbiAgICAgIF9yZWYgPSByb3cueTtcbiAgICAgIGZvciAoaiA9IF9pID0gMCwgX2xlbiA9IF9yZWYubGVuZ3RoOyBfaSA8IF9sZW47IGogPSArK19pKSB7XG4gICAgICAgIHkgPSBfcmVmW2pdO1xuICAgICAgICBjb250ZW50ICs9IFwiPGRpdiBjbGFzcz0nbW9ycmlzLWhvdmVyLXBvaW50JyBzdHlsZT0nY29sb3I6IFwiICsgKHRoaXMuY29sb3JGb3Iocm93LCBqLCAnbGFiZWwnKSkgKyBcIic+XFxuICBcIiArIHRoaXMub3B0aW9ucy5sYWJlbHNbal0gKyBcIjpcXG4gIFwiICsgKHRoaXMueUxhYmVsRm9ybWF0KHkpKSArIFwiXFxuPC9kaXY+XCI7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIHRoaXMub3B0aW9ucy5ob3ZlckNhbGxiYWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGNvbnRlbnQgPSB0aGlzLm9wdGlvbnMuaG92ZXJDYWxsYmFjayhpbmRleCwgdGhpcy5vcHRpb25zLCBjb250ZW50LCByb3cuc3JjKTtcbiAgICAgIH1cbiAgICAgIHggPSB0aGlzLmxlZnQgKyAoaW5kZXggKyAwLjUpICogdGhpcy53aWR0aCAvIHRoaXMuZGF0YS5sZW5ndGg7XG4gICAgICByZXR1cm4gW2NvbnRlbnQsIHhdO1xuICAgIH07XG5cbiAgICBCYXIucHJvdG90eXBlLmRyYXdYQXhpc0xhYmVsID0gZnVuY3Rpb24oeFBvcywgeVBvcywgdGV4dCkge1xuICAgICAgdmFyIGxhYmVsO1xuICAgICAgcmV0dXJuIGxhYmVsID0gdGhpcy5yYXBoYWVsLnRleHQoeFBvcywgeVBvcywgdGV4dCkuYXR0cignZm9udC1zaXplJywgdGhpcy5vcHRpb25zLmdyaWRUZXh0U2l6ZSkuYXR0cignZm9udC1mYW1pbHknLCB0aGlzLm9wdGlvbnMuZ3JpZFRleHRGYW1pbHkpLmF0dHIoJ2ZvbnQtd2VpZ2h0JywgdGhpcy5vcHRpb25zLmdyaWRUZXh0V2VpZ2h0KS5hdHRyKCdmaWxsJywgdGhpcy5vcHRpb25zLmdyaWRUZXh0Q29sb3IpO1xuICAgIH07XG5cbiAgICBCYXIucHJvdG90eXBlLmRyYXdCYXIgPSBmdW5jdGlvbih4UG9zLCB5UG9zLCB3aWR0aCwgaGVpZ2h0LCBiYXJDb2xvciwgb3BhY2l0eSwgcmFkaXVzQXJyYXkpIHtcbiAgICAgIHZhciBtYXhSYWRpdXMsIHBhdGg7XG4gICAgICBtYXhSYWRpdXMgPSBNYXRoLm1heC5hcHBseShNYXRoLCByYWRpdXNBcnJheSk7XG4gICAgICBpZiAobWF4UmFkaXVzID09PSAwIHx8IG1heFJhZGl1cyA+IGhlaWdodCkge1xuICAgICAgICBwYXRoID0gdGhpcy5yYXBoYWVsLnJlY3QoeFBvcywgeVBvcywgd2lkdGgsIGhlaWdodCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwYXRoID0gdGhpcy5yYXBoYWVsLnBhdGgodGhpcy5yb3VuZGVkUmVjdCh4UG9zLCB5UG9zLCB3aWR0aCwgaGVpZ2h0LCByYWRpdXNBcnJheSkpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHBhdGguYXR0cignZmlsbCcsIGJhckNvbG9yKS5hdHRyKCdmaWxsLW9wYWNpdHknLCBvcGFjaXR5KS5hdHRyKCdzdHJva2UnLCAnbm9uZScpO1xuICAgIH07XG5cbiAgICBCYXIucHJvdG90eXBlLnJvdW5kZWRSZWN0ID0gZnVuY3Rpb24oeCwgeSwgdywgaCwgcikge1xuICAgICAgaWYgKHIgPT0gbnVsbCkge1xuICAgICAgICByID0gWzAsIDAsIDAsIDBdO1xuICAgICAgfVxuICAgICAgcmV0dXJuIFtcIk1cIiwgeCwgclswXSArIHksIFwiUVwiLCB4LCB5LCB4ICsgclswXSwgeSwgXCJMXCIsIHggKyB3IC0gclsxXSwgeSwgXCJRXCIsIHggKyB3LCB5LCB4ICsgdywgeSArIHJbMV0sIFwiTFwiLCB4ICsgdywgeSArIGggLSByWzJdLCBcIlFcIiwgeCArIHcsIHkgKyBoLCB4ICsgdyAtIHJbMl0sIHkgKyBoLCBcIkxcIiwgeCArIHJbM10sIHkgKyBoLCBcIlFcIiwgeCwgeSArIGgsIHgsIHkgKyBoIC0gclszXSwgXCJaXCJdO1xuICAgIH07XG5cbiAgICByZXR1cm4gQmFyO1xuXG4gIH0pKE1vcnJpcy5HcmlkKTtcblxuICBNb3JyaXMuRG9udXQgPSAoZnVuY3Rpb24oX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKERvbnV0LCBfc3VwZXIpO1xuXG4gICAgRG9udXQucHJvdG90eXBlLmRlZmF1bHRzID0ge1xuICAgICAgY29sb3JzOiBbJyMwQjYyQTQnLCAnIzM5ODBCNScsICcjNjc5REM2JywgJyM5NUJCRDcnLCAnI0IwQ0NFMScsICcjMDk1NzkxJywgJyMwOTUwODUnLCAnIzA4M0U2NycsICcjMDUyQzQ4JywgJyMwNDIxMzUnXSxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJyNGRkZGRkYnLFxuICAgICAgbGFiZWxDb2xvcjogJyMwMDAwMDAnLFxuICAgICAgZm9ybWF0dGVyOiBNb3JyaXMuY29tbWFzLFxuICAgICAgcmVzaXplOiBmYWxzZVxuICAgIH07XG5cbiAgICBmdW5jdGlvbiBEb251dChvcHRpb25zKSB7XG4gICAgICB0aGlzLnJlc2l6ZUhhbmRsZXIgPSBfX2JpbmQodGhpcy5yZXNpemVIYW5kbGVyLCB0aGlzKTtcbiAgICAgIHRoaXMuc2VsZWN0ID0gX19iaW5kKHRoaXMuc2VsZWN0LCB0aGlzKTtcbiAgICAgIHRoaXMuY2xpY2sgPSBfX2JpbmQodGhpcy5jbGljaywgdGhpcyk7XG4gICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIE1vcnJpcy5Eb251dCkpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBNb3JyaXMuRG9udXQob3B0aW9ucyk7XG4gICAgICB9XG4gICAgICB0aGlzLm9wdGlvbnMgPSAkLmV4dGVuZCh7fSwgdGhpcy5kZWZhdWx0cywgb3B0aW9ucyk7XG4gICAgICBpZiAodHlwZW9mIG9wdGlvbnMuZWxlbWVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgdGhpcy5lbCA9ICQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQob3B0aW9ucy5lbGVtZW50KSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmVsID0gJChvcHRpb25zLmVsZW1lbnQpO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuZWwgPT09IG51bGwgfHwgdGhpcy5lbC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiR3JhcGggcGxhY2Vob2xkZXIgbm90IGZvdW5kLlwiKTtcbiAgICAgIH1cbiAgICAgIGlmIChvcHRpb25zLmRhdGEgPT09IHZvaWQgMCB8fCBvcHRpb25zLmRhdGEubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRoaXMucmFwaGFlbCA9IG5ldyBSYXBoYWVsKHRoaXMuZWxbMF0pO1xuICAgICAgaWYgKHRoaXMub3B0aW9ucy5yZXNpemUpIHtcbiAgICAgICAgJCh3aW5kb3cpLmJpbmQoJ3Jlc2l6ZScsIGZ1bmN0aW9uKGV2dCkge1xuICAgICAgICAgIGlmIChfdGhpcy50aW1lb3V0SWQgIT0gbnVsbCkge1xuICAgICAgICAgICAgd2luZG93LmNsZWFyVGltZW91dChfdGhpcy50aW1lb3V0SWQpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gX3RoaXMudGltZW91dElkID0gd2luZG93LnNldFRpbWVvdXQoX3RoaXMucmVzaXplSGFuZGxlciwgMTAwKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICB0aGlzLnNldERhdGEob3B0aW9ucy5kYXRhKTtcbiAgICB9XG5cbiAgICBEb251dC5wcm90b3R5cGUucmVkcmF3ID0gZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgQywgY3gsIGN5LCBpLCBpZHgsIGxhc3QsIG1heF92YWx1ZSwgbWluLCBuZXh0LCBzZWcsIHRvdGFsLCB2YWx1ZSwgdywgX2ksIF9qLCBfaywgX2xlbiwgX2xlbjEsIF9sZW4yLCBfcmVmLCBfcmVmMSwgX3JlZjIsIF9yZXN1bHRzO1xuICAgICAgdGhpcy5yYXBoYWVsLmNsZWFyKCk7XG4gICAgICBjeCA9IHRoaXMuZWwud2lkdGgoKSAvIDI7XG4gICAgICBjeSA9IHRoaXMuZWwuaGVpZ2h0KCkgLyAyO1xuICAgICAgdyA9IChNYXRoLm1pbihjeCwgY3kpIC0gMTApIC8gMztcbiAgICAgIHRvdGFsID0gMDtcbiAgICAgIF9yZWYgPSB0aGlzLnZhbHVlcztcbiAgICAgIGZvciAoX2kgPSAwLCBfbGVuID0gX3JlZi5sZW5ndGg7IF9pIDwgX2xlbjsgX2krKykge1xuICAgICAgICB2YWx1ZSA9IF9yZWZbX2ldO1xuICAgICAgICB0b3RhbCArPSB2YWx1ZTtcbiAgICAgIH1cbiAgICAgIG1pbiA9IDUgLyAoMiAqIHcpO1xuICAgICAgQyA9IDEuOTk5OSAqIE1hdGguUEkgLSBtaW4gKiB0aGlzLmRhdGEubGVuZ3RoO1xuICAgICAgbGFzdCA9IDA7XG4gICAgICBpZHggPSAwO1xuICAgICAgdGhpcy5zZWdtZW50cyA9IFtdO1xuICAgICAgX3JlZjEgPSB0aGlzLnZhbHVlcztcbiAgICAgIGZvciAoaSA9IF9qID0gMCwgX2xlbjEgPSBfcmVmMS5sZW5ndGg7IF9qIDwgX2xlbjE7IGkgPSArK19qKSB7XG4gICAgICAgIHZhbHVlID0gX3JlZjFbaV07XG4gICAgICAgIG5leHQgPSBsYXN0ICsgbWluICsgQyAqICh2YWx1ZSAvIHRvdGFsKTtcbiAgICAgICAgc2VnID0gbmV3IE1vcnJpcy5Eb251dFNlZ21lbnQoY3gsIGN5LCB3ICogMiwgdywgbGFzdCwgbmV4dCwgdGhpcy5kYXRhW2ldLmNvbG9yIHx8IHRoaXMub3B0aW9ucy5jb2xvcnNbaWR4ICUgdGhpcy5vcHRpb25zLmNvbG9ycy5sZW5ndGhdLCB0aGlzLm9wdGlvbnMuYmFja2dyb3VuZENvbG9yLCBpZHgsIHRoaXMucmFwaGFlbCk7XG4gICAgICAgIHNlZy5yZW5kZXIoKTtcbiAgICAgICAgdGhpcy5zZWdtZW50cy5wdXNoKHNlZyk7XG4gICAgICAgIHNlZy5vbignaG92ZXInLCB0aGlzLnNlbGVjdCk7XG4gICAgICAgIHNlZy5vbignY2xpY2snLCB0aGlzLmNsaWNrKTtcbiAgICAgICAgbGFzdCA9IG5leHQ7XG4gICAgICAgIGlkeCArPSAxO1xuICAgICAgfVxuICAgICAgdGhpcy50ZXh0MSA9IHRoaXMuZHJhd0VtcHR5RG9udXRMYWJlbChjeCwgY3kgLSAxMCwgdGhpcy5vcHRpb25zLmxhYmVsQ29sb3IsIDE1LCA4MDApO1xuICAgICAgdGhpcy50ZXh0MiA9IHRoaXMuZHJhd0VtcHR5RG9udXRMYWJlbChjeCwgY3kgKyAxMCwgdGhpcy5vcHRpb25zLmxhYmVsQ29sb3IsIDE0KTtcbiAgICAgIG1heF92YWx1ZSA9IE1hdGgubWF4LmFwcGx5KE1hdGgsIHRoaXMudmFsdWVzKTtcbiAgICAgIGlkeCA9IDA7XG4gICAgICBfcmVmMiA9IHRoaXMudmFsdWVzO1xuICAgICAgX3Jlc3VsdHMgPSBbXTtcbiAgICAgIGZvciAoX2sgPSAwLCBfbGVuMiA9IF9yZWYyLmxlbmd0aDsgX2sgPCBfbGVuMjsgX2srKykge1xuICAgICAgICB2YWx1ZSA9IF9yZWYyW19rXTtcbiAgICAgICAgaWYgKHZhbHVlID09PSBtYXhfdmFsdWUpIHtcbiAgICAgICAgICB0aGlzLnNlbGVjdChpZHgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIF9yZXN1bHRzLnB1c2goaWR4ICs9IDEpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIF9yZXN1bHRzO1xuICAgIH07XG5cbiAgICBEb251dC5wcm90b3R5cGUuc2V0RGF0YSA9IGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgIHZhciByb3c7XG4gICAgICB0aGlzLmRhdGEgPSBkYXRhO1xuICAgICAgdGhpcy52YWx1ZXMgPSAoZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBfaSwgX2xlbiwgX3JlZiwgX3Jlc3VsdHM7XG4gICAgICAgIF9yZWYgPSB0aGlzLmRhdGE7XG4gICAgICAgIF9yZXN1bHRzID0gW107XG4gICAgICAgIGZvciAoX2kgPSAwLCBfbGVuID0gX3JlZi5sZW5ndGg7IF9pIDwgX2xlbjsgX2krKykge1xuICAgICAgICAgIHJvdyA9IF9yZWZbX2ldO1xuICAgICAgICAgIF9yZXN1bHRzLnB1c2gocGFyc2VGbG9hdChyb3cudmFsdWUpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gX3Jlc3VsdHM7XG4gICAgICB9KS5jYWxsKHRoaXMpO1xuICAgICAgcmV0dXJuIHRoaXMucmVkcmF3KCk7XG4gICAgfTtcblxuICAgIERvbnV0LnByb3RvdHlwZS5jbGljayA9IGZ1bmN0aW9uKGlkeCkge1xuICAgICAgcmV0dXJuIHRoaXMuZmlyZSgnY2xpY2snLCBpZHgsIHRoaXMuZGF0YVtpZHhdKTtcbiAgICB9O1xuXG4gICAgRG9udXQucHJvdG90eXBlLnNlbGVjdCA9IGZ1bmN0aW9uKGlkeCkge1xuICAgICAgdmFyIHJvdywgcywgc2VnbWVudCwgX2ksIF9sZW4sIF9yZWY7XG4gICAgICBfcmVmID0gdGhpcy5zZWdtZW50cztcbiAgICAgIGZvciAoX2kgPSAwLCBfbGVuID0gX3JlZi5sZW5ndGg7IF9pIDwgX2xlbjsgX2krKykge1xuICAgICAgICBzID0gX3JlZltfaV07XG4gICAgICAgIHMuZGVzZWxlY3QoKTtcbiAgICAgIH1cbiAgICAgIHNlZ21lbnQgPSB0aGlzLnNlZ21lbnRzW2lkeF07XG4gICAgICBzZWdtZW50LnNlbGVjdCgpO1xuICAgICAgcm93ID0gdGhpcy5kYXRhW2lkeF07XG4gICAgICByZXR1cm4gdGhpcy5zZXRMYWJlbHMocm93LmxhYmVsLCB0aGlzLm9wdGlvbnMuZm9ybWF0dGVyKHJvdy52YWx1ZSwgcm93KSk7XG4gICAgfTtcblxuICAgIERvbnV0LnByb3RvdHlwZS5zZXRMYWJlbHMgPSBmdW5jdGlvbihsYWJlbDEsIGxhYmVsMikge1xuICAgICAgdmFyIGlubmVyLCBtYXhIZWlnaHRCb3R0b20sIG1heEhlaWdodFRvcCwgbWF4V2lkdGgsIHRleHQxYmJveCwgdGV4dDFzY2FsZSwgdGV4dDJiYm94LCB0ZXh0MnNjYWxlO1xuICAgICAgaW5uZXIgPSAoTWF0aC5taW4odGhpcy5lbC53aWR0aCgpIC8gMiwgdGhpcy5lbC5oZWlnaHQoKSAvIDIpIC0gMTApICogMiAvIDM7XG4gICAgICBtYXhXaWR0aCA9IDEuOCAqIGlubmVyO1xuICAgICAgbWF4SGVpZ2h0VG9wID0gaW5uZXIgLyAyO1xuICAgICAgbWF4SGVpZ2h0Qm90dG9tID0gaW5uZXIgLyAzO1xuICAgICAgdGhpcy50ZXh0MS5hdHRyKHtcbiAgICAgICAgdGV4dDogbGFiZWwxLFxuICAgICAgICB0cmFuc2Zvcm06ICcnXG4gICAgICB9KTtcbiAgICAgIHRleHQxYmJveCA9IHRoaXMudGV4dDEuZ2V0QkJveCgpO1xuICAgICAgdGV4dDFzY2FsZSA9IE1hdGgubWluKG1heFdpZHRoIC8gdGV4dDFiYm94LndpZHRoLCBtYXhIZWlnaHRUb3AgLyB0ZXh0MWJib3guaGVpZ2h0KTtcbiAgICAgIHRoaXMudGV4dDEuYXR0cih7XG4gICAgICAgIHRyYW5zZm9ybTogXCJTXCIgKyB0ZXh0MXNjYWxlICsgXCIsXCIgKyB0ZXh0MXNjYWxlICsgXCIsXCIgKyAodGV4dDFiYm94LnggKyB0ZXh0MWJib3gud2lkdGggLyAyKSArIFwiLFwiICsgKHRleHQxYmJveC55ICsgdGV4dDFiYm94LmhlaWdodClcbiAgICAgIH0pO1xuICAgICAgdGhpcy50ZXh0Mi5hdHRyKHtcbiAgICAgICAgdGV4dDogbGFiZWwyLFxuICAgICAgICB0cmFuc2Zvcm06ICcnXG4gICAgICB9KTtcbiAgICAgIHRleHQyYmJveCA9IHRoaXMudGV4dDIuZ2V0QkJveCgpO1xuICAgICAgdGV4dDJzY2FsZSA9IE1hdGgubWluKG1heFdpZHRoIC8gdGV4dDJiYm94LndpZHRoLCBtYXhIZWlnaHRCb3R0b20gLyB0ZXh0MmJib3guaGVpZ2h0KTtcbiAgICAgIHJldHVybiB0aGlzLnRleHQyLmF0dHIoe1xuICAgICAgICB0cmFuc2Zvcm06IFwiU1wiICsgdGV4dDJzY2FsZSArIFwiLFwiICsgdGV4dDJzY2FsZSArIFwiLFwiICsgKHRleHQyYmJveC54ICsgdGV4dDJiYm94LndpZHRoIC8gMikgKyBcIixcIiArIHRleHQyYmJveC55XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgRG9udXQucHJvdG90eXBlLmRyYXdFbXB0eURvbnV0TGFiZWwgPSBmdW5jdGlvbih4UG9zLCB5UG9zLCBjb2xvciwgZm9udFNpemUsIGZvbnRXZWlnaHQpIHtcbiAgICAgIHZhciB0ZXh0O1xuICAgICAgdGV4dCA9IHRoaXMucmFwaGFlbC50ZXh0KHhQb3MsIHlQb3MsICcnKS5hdHRyKCdmb250LXNpemUnLCBmb250U2l6ZSkuYXR0cignZmlsbCcsIGNvbG9yKTtcbiAgICAgIGlmIChmb250V2VpZ2h0ICE9IG51bGwpIHtcbiAgICAgICAgdGV4dC5hdHRyKCdmb250LXdlaWdodCcsIGZvbnRXZWlnaHQpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRleHQ7XG4gICAgfTtcblxuICAgIERvbnV0LnByb3RvdHlwZS5yZXNpemVIYW5kbGVyID0gZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLnRpbWVvdXRJZCA9IG51bGw7XG4gICAgICB0aGlzLnJhcGhhZWwuc2V0U2l6ZSh0aGlzLmVsLndpZHRoKCksIHRoaXMuZWwuaGVpZ2h0KCkpO1xuICAgICAgcmV0dXJuIHRoaXMucmVkcmF3KCk7XG4gICAgfTtcblxuICAgIHJldHVybiBEb251dDtcblxuICB9KShNb3JyaXMuRXZlbnRFbWl0dGVyKTtcblxuICBNb3JyaXMuRG9udXRTZWdtZW50ID0gKGZ1bmN0aW9uKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhEb251dFNlZ21lbnQsIF9zdXBlcik7XG5cbiAgICBmdW5jdGlvbiBEb251dFNlZ21lbnQoY3gsIGN5LCBpbm5lciwgb3V0ZXIsIHAwLCBwMSwgY29sb3IsIGJhY2tncm91bmRDb2xvciwgaW5kZXgsIHJhcGhhZWwpIHtcbiAgICAgIHRoaXMuY3ggPSBjeDtcbiAgICAgIHRoaXMuY3kgPSBjeTtcbiAgICAgIHRoaXMuaW5uZXIgPSBpbm5lcjtcbiAgICAgIHRoaXMub3V0ZXIgPSBvdXRlcjtcbiAgICAgIHRoaXMuY29sb3IgPSBjb2xvcjtcbiAgICAgIHRoaXMuYmFja2dyb3VuZENvbG9yID0gYmFja2dyb3VuZENvbG9yO1xuICAgICAgdGhpcy5pbmRleCA9IGluZGV4O1xuICAgICAgdGhpcy5yYXBoYWVsID0gcmFwaGFlbDtcbiAgICAgIHRoaXMuZGVzZWxlY3QgPSBfX2JpbmQodGhpcy5kZXNlbGVjdCwgdGhpcyk7XG4gICAgICB0aGlzLnNlbGVjdCA9IF9fYmluZCh0aGlzLnNlbGVjdCwgdGhpcyk7XG4gICAgICB0aGlzLnNpbl9wMCA9IE1hdGguc2luKHAwKTtcbiAgICAgIHRoaXMuY29zX3AwID0gTWF0aC5jb3MocDApO1xuICAgICAgdGhpcy5zaW5fcDEgPSBNYXRoLnNpbihwMSk7XG4gICAgICB0aGlzLmNvc19wMSA9IE1hdGguY29zKHAxKTtcbiAgICAgIHRoaXMuaXNfbG9uZyA9IChwMSAtIHAwKSA+IE1hdGguUEkgPyAxIDogMDtcbiAgICAgIHRoaXMucGF0aCA9IHRoaXMuY2FsY1NlZ21lbnQodGhpcy5pbm5lciArIDMsIHRoaXMuaW5uZXIgKyB0aGlzLm91dGVyIC0gNSk7XG4gICAgICB0aGlzLnNlbGVjdGVkUGF0aCA9IHRoaXMuY2FsY1NlZ21lbnQodGhpcy5pbm5lciArIDMsIHRoaXMuaW5uZXIgKyB0aGlzLm91dGVyKTtcbiAgICAgIHRoaXMuaGlsaWdodCA9IHRoaXMuY2FsY0FyYyh0aGlzLmlubmVyKTtcbiAgICB9XG5cbiAgICBEb251dFNlZ21lbnQucHJvdG90eXBlLmNhbGNBcmNQb2ludHMgPSBmdW5jdGlvbihyKSB7XG4gICAgICByZXR1cm4gW3RoaXMuY3ggKyByICogdGhpcy5zaW5fcDAsIHRoaXMuY3kgKyByICogdGhpcy5jb3NfcDAsIHRoaXMuY3ggKyByICogdGhpcy5zaW5fcDEsIHRoaXMuY3kgKyByICogdGhpcy5jb3NfcDFdO1xuICAgIH07XG5cbiAgICBEb251dFNlZ21lbnQucHJvdG90eXBlLmNhbGNTZWdtZW50ID0gZnVuY3Rpb24ocjEsIHIyKSB7XG4gICAgICB2YXIgaXgwLCBpeDEsIGl5MCwgaXkxLCBveDAsIG94MSwgb3kwLCBveTEsIF9yZWYsIF9yZWYxO1xuICAgICAgX3JlZiA9IHRoaXMuY2FsY0FyY1BvaW50cyhyMSksIGl4MCA9IF9yZWZbMF0sIGl5MCA9IF9yZWZbMV0sIGl4MSA9IF9yZWZbMl0sIGl5MSA9IF9yZWZbM107XG4gICAgICBfcmVmMSA9IHRoaXMuY2FsY0FyY1BvaW50cyhyMiksIG94MCA9IF9yZWYxWzBdLCBveTAgPSBfcmVmMVsxXSwgb3gxID0gX3JlZjFbMl0sIG95MSA9IF9yZWYxWzNdO1xuICAgICAgcmV0dXJuIChcIk1cIiArIGl4MCArIFwiLFwiICsgaXkwKSArIChcIkFcIiArIHIxICsgXCIsXCIgKyByMSArIFwiLDAsXCIgKyB0aGlzLmlzX2xvbmcgKyBcIiwwLFwiICsgaXgxICsgXCIsXCIgKyBpeTEpICsgKFwiTFwiICsgb3gxICsgXCIsXCIgKyBveTEpICsgKFwiQVwiICsgcjIgKyBcIixcIiArIHIyICsgXCIsMCxcIiArIHRoaXMuaXNfbG9uZyArIFwiLDEsXCIgKyBveDAgKyBcIixcIiArIG95MCkgKyBcIlpcIjtcbiAgICB9O1xuXG4gICAgRG9udXRTZWdtZW50LnByb3RvdHlwZS5jYWxjQXJjID0gZnVuY3Rpb24ocikge1xuICAgICAgdmFyIGl4MCwgaXgxLCBpeTAsIGl5MSwgX3JlZjtcbiAgICAgIF9yZWYgPSB0aGlzLmNhbGNBcmNQb2ludHMociksIGl4MCA9IF9yZWZbMF0sIGl5MCA9IF9yZWZbMV0sIGl4MSA9IF9yZWZbMl0sIGl5MSA9IF9yZWZbM107XG4gICAgICByZXR1cm4gKFwiTVwiICsgaXgwICsgXCIsXCIgKyBpeTApICsgKFwiQVwiICsgciArIFwiLFwiICsgciArIFwiLDAsXCIgKyB0aGlzLmlzX2xvbmcgKyBcIiwwLFwiICsgaXgxICsgXCIsXCIgKyBpeTEpO1xuICAgIH07XG5cbiAgICBEb251dFNlZ21lbnQucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgIHRoaXMuYXJjID0gdGhpcy5kcmF3RG9udXRBcmModGhpcy5oaWxpZ2h0LCB0aGlzLmNvbG9yKTtcbiAgICAgIHJldHVybiB0aGlzLnNlZyA9IHRoaXMuZHJhd0RvbnV0U2VnbWVudCh0aGlzLnBhdGgsIHRoaXMuY29sb3IsIHRoaXMuYmFja2dyb3VuZENvbG9yLCBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzLmZpcmUoJ2hvdmVyJywgX3RoaXMuaW5kZXgpO1xuICAgICAgfSwgZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBfdGhpcy5maXJlKCdjbGljaycsIF90aGlzLmluZGV4KTtcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICBEb251dFNlZ21lbnQucHJvdG90eXBlLmRyYXdEb251dEFyYyA9IGZ1bmN0aW9uKHBhdGgsIGNvbG9yKSB7XG4gICAgICByZXR1cm4gdGhpcy5yYXBoYWVsLnBhdGgocGF0aCkuYXR0cih7XG4gICAgICAgIHN0cm9rZTogY29sb3IsXG4gICAgICAgICdzdHJva2Utd2lkdGgnOiAyLFxuICAgICAgICBvcGFjaXR5OiAwXG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgRG9udXRTZWdtZW50LnByb3RvdHlwZS5kcmF3RG9udXRTZWdtZW50ID0gZnVuY3Rpb24ocGF0aCwgZmlsbENvbG9yLCBzdHJva2VDb2xvciwgaG92ZXJGdW5jdGlvbiwgY2xpY2tGdW5jdGlvbikge1xuICAgICAgcmV0dXJuIHRoaXMucmFwaGFlbC5wYXRoKHBhdGgpLmF0dHIoe1xuICAgICAgICBmaWxsOiBmaWxsQ29sb3IsXG4gICAgICAgIHN0cm9rZTogc3Ryb2tlQ29sb3IsXG4gICAgICAgICdzdHJva2Utd2lkdGgnOiAzXG4gICAgICB9KS5ob3Zlcihob3ZlckZ1bmN0aW9uKS5jbGljayhjbGlja0Z1bmN0aW9uKTtcbiAgICB9O1xuXG4gICAgRG9udXRTZWdtZW50LnByb3RvdHlwZS5zZWxlY3QgPSBmdW5jdGlvbigpIHtcbiAgICAgIGlmICghdGhpcy5zZWxlY3RlZCkge1xuICAgICAgICB0aGlzLnNlZy5hbmltYXRlKHtcbiAgICAgICAgICBwYXRoOiB0aGlzLnNlbGVjdGVkUGF0aFxuICAgICAgICB9LCAxNTAsICc8PicpO1xuICAgICAgICB0aGlzLmFyYy5hbmltYXRlKHtcbiAgICAgICAgICBvcGFjaXR5OiAxXG4gICAgICAgIH0sIDE1MCwgJzw+Jyk7XG4gICAgICAgIHJldHVybiB0aGlzLnNlbGVjdGVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgRG9udXRTZWdtZW50LnByb3RvdHlwZS5kZXNlbGVjdCA9IGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKHRoaXMuc2VsZWN0ZWQpIHtcbiAgICAgICAgdGhpcy5zZWcuYW5pbWF0ZSh7XG4gICAgICAgICAgcGF0aDogdGhpcy5wYXRoXG4gICAgICAgIH0sIDE1MCwgJzw+Jyk7XG4gICAgICAgIHRoaXMuYXJjLmFuaW1hdGUoe1xuICAgICAgICAgIG9wYWNpdHk6IDBcbiAgICAgICAgfSwgMTUwLCAnPD4nKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2VsZWN0ZWQgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgcmV0dXJuIERvbnV0U2VnbWVudDtcblxuICB9KShNb3JyaXMuRXZlbnRFbWl0dGVyKTtcblxufSkuY2FsbCh0aGlzKTtcbiJdLCJuYW1lcyI6WyIkIiwiTW9ycmlzIiwibWludXRlc1NwZWNIZWxwZXIiLCJzZWNvbmRzU3BlY0hlbHBlciIsIl9fc2xpY2UiLCJzbGljZSIsIl9fYmluZCIsImZuIiwibWUiLCJhcHBseSIsImFyZ3VtZW50cyIsIl9faGFzUHJvcCIsImhhc093blByb3BlcnR5IiwiX19leHRlbmRzIiwiY2hpbGQiLCJwYXJlbnQiLCJrZXkiLCJjYWxsIiwiY3RvciIsImNvbnN0cnVjdG9yIiwicHJvdG90eXBlIiwiX19zdXBlcl9fIiwiX19pbmRleE9mIiwiaW5kZXhPZiIsIml0ZW0iLCJpIiwibCIsImxlbmd0aCIsIndpbmRvdyIsImpRdWVyeSIsIkV2ZW50RW1pdHRlciIsIm9uIiwibmFtZSIsImhhbmRsZXIiLCJoYW5kbGVycyIsInB1c2giLCJmaXJlIiwiYXJncyIsIl9pIiwiX2xlbiIsIl9yZWYiLCJfcmVzdWx0cyIsImNvbW1hcyIsIm51bSIsImFic251bSIsImludG51bSIsInJldCIsInN0cmFic251bSIsIk1hdGgiLCJhYnMiLCJmbG9vciIsInRvRml4ZWQiLCJyZXBsYWNlIiwidG9TdHJpbmciLCJwYWQyIiwibnVtYmVyIiwiR3JpZCIsIl9zdXBlciIsIm9wdGlvbnMiLCJyZXNpemVIYW5kbGVyIiwiX3RoaXMiLCJlbGVtZW50IiwiZWwiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiRXJyb3IiLCJjc3MiLCJleHRlbmQiLCJncmlkRGVmYXVsdHMiLCJkZWZhdWx0cyIsInVuaXRzIiwicG9zdFVuaXRzIiwicmFwaGFlbCIsIlJhcGhhZWwiLCJlbGVtZW50V2lkdGgiLCJlbGVtZW50SGVpZ2h0IiwiZGlydHkiLCJzZWxlY3RGcm9tIiwiaW5pdCIsInNldERhdGEiLCJkYXRhIiwiYmluZCIsImV2dCIsImxlZnQiLCJvZmZzZXQiLCJyaWdodCIsIndpZHRoIiwieCIsInBhZ2VYIiwiaGl0VGVzdCIsIm1pbiIsIl94IiwibWF4Iiwic2VsZWN0aW9uUmVjdCIsImF0dHIiLCJwYWdlWSIsInRvcCIsImhpZGUiLCJ0b3VjaCIsIm9yaWdpbmFsRXZlbnQiLCJ0b3VjaGVzIiwiY2hhbmdlZFRvdWNoZXMiLCJyYW5nZVNlbGVjdCIsInJlY3QiLCJpbm5lckhlaWdodCIsImZpbGwiLCJyYW5nZVNlbGVjdENvbG9yIiwic3Ryb2tlIiwidG9CYWNrIiwic3RhcnRSYW5nZSIsImVuZFJhbmdlIiwicmVzaXplIiwidGltZW91dElkIiwiY2xlYXJUaW1lb3V0Iiwic2V0VGltZW91dCIsInBvc3RJbml0IiwiZGF0ZUZvcm1hdCIsImF4ZXMiLCJncmlkIiwiZ3JpZExpbmVDb2xvciIsImdyaWRTdHJva2VXaWR0aCIsImdyaWRUZXh0Q29sb3IiLCJncmlkVGV4dFNpemUiLCJncmlkVGV4dEZhbWlseSIsImdyaWRUZXh0V2VpZ2h0IiwiaGlkZUhvdmVyIiwieUxhYmVsRm9ybWF0IiwieExhYmVsQW5nbGUiLCJudW1MaW5lcyIsInBhZGRpbmciLCJwYXJzZVRpbWUiLCJwcmVVbml0cyIsInltYXgiLCJ5bWluIiwiZ29hbHMiLCJnb2FsU3Ryb2tlV2lkdGgiLCJnb2FsTGluZUNvbG9ycyIsImV2ZW50cyIsImV2ZW50U3Ryb2tlV2lkdGgiLCJldmVudExpbmVDb2xvcnMiLCJyZWRyYXciLCJlIiwiaWR4IiwiaW5kZXgiLCJtYXhHb2FsIiwibWluR29hbCIsInJvdyIsInN0ZXAiLCJ0b3RhbCIsInkiLCJ5a2V5IiwieXZhbCIsImNsZWFyIiwiaG92ZXIiLCJjdW11bGF0aXZlIiwic3JjIiwibGFiZWwiLCJ4a2V5IiwicGFyc2VEYXRlIiwiRGF0ZSIsInhMYWJlbEZvcm1hdCIsIl9qIiwiX2xlbjEiLCJfcmVzdWx0czEiLCJ5a2V5cyIsInBhcnNlRmxvYXQiLCJzb3J0IiwiYSIsImIiLCJ4bWluIiwieG1heCIsInlib3VuZGFyeSIsImF1dG9HcmlkTGluZXMiLCJfcmVmMSIsIl9yZWYyIiwiYm91bmRhcnlUeXBlIiwiY3VycmVudFZhbHVlIiwiYm91bmRhcnlPcHRpb24iLCJzdWdnZXN0ZWRWYWx1ZSIsInBhcnNlSW50IiwibmxpbmVzIiwiZ21heCIsImdtaW4iLCJzbWFnIiwic3BhbiIsInVuaXQiLCJ5bWFnIiwibG9nIiwicG93IiwiY2VpbCIsIl9jYWxjIiwiYm90dG9tT2Zmc2V0cyIsImdyaWRMaW5lIiwiaCIsInciLCJ5TGFiZWxXaWR0aHMiLCJoZWlnaHQiLCJib3R0b20iLCJtZWFzdXJlVGV4dCIsInlBeGlzRm9ybWF0IiwidGV4dCIsImR4IiwiZHkiLCJjYWxjIiwidHJhbnNZIiwidHJhbnNYIiwiZHJhd0dyaWQiLCJkcmF3R29hbHMiLCJkcmF3RXZlbnRzIiwiZHJhdyIsImFuZ2xlIiwidHQiLCJyb3RhdGUiLCJnZXRCQm94IiwicmVtb3ZlIiwibGluZVkiLCJkcmF3WUF4aXNMYWJlbCIsImRyYXdHcmlkTGluZSIsImNvbG9yIiwiZ29hbCIsImRyYXdHb2FsIiwiZXZlbnQiLCJkcmF3RXZlbnQiLCJwYXRoIiwieFBvcyIsInlQb3MiLCJzaG93IiwiZW5kIiwic3RhcnQiLCJzZXRTaXplIiwiZGF0ZSIsImlzZWNzIiwibSIsIm1zZWNzIiwibiIsIm8iLCJvZmZzZXRtaW5zIiwicCIsInEiLCJyIiwic2VjcyIsIm1hdGNoIiwiZ2V0VGltZSIsImdldERheSIsInNldE1vbnRoIiwiVVRDIiwicm91bmQiLCJIb3ZlciIsImFwcGVuZCIsInVwZGF0ZSIsImh0bWwiLCJtb3ZlVG8iLCJjb250ZW50IiwiaG92ZXJIZWlnaHQiLCJob3ZlcldpZHRoIiwicGFyZW50SGVpZ2h0IiwicGFyZW50V2lkdGgiLCJpbm5lcldpZHRoIiwib3V0ZXJXaWR0aCIsIm91dGVySGVpZ2h0IiwiTGluZSIsImhpbGlnaHQiLCJvbkhvdmVyT3V0Iiwib25Ib3Zlck1vdmUiLCJvbkdyaWRDbGljayIsImxpbmVXaWR0aCIsInBvaW50U2l6ZSIsImxpbmVDb2xvcnMiLCJwb2ludFN0cm9rZVdpZHRocyIsInBvaW50U3Ryb2tlQ29sb3JzIiwicG9pbnRGaWxsQ29sb3JzIiwic21vb3RoIiwieExhYmVscyIsInhMYWJlbE1hcmdpbiIsImNhbGNQb2ludHMiLCJnZW5lcmF0ZVBhdGhzIiwiX3kiLCJfeW1heCIsImNvbmNhdCIsImRpc3BsYXlIb3ZlckZvclJvdyIsImhvdmVyQ29udGVudEZvclJvdyIsImoiLCJjb2xvckZvciIsImxhYmVscyIsImhvdmVyQ2FsbGJhY2siLCJjb29yZHMiLCJwYXRocyIsImNyZWF0ZVBhdGgiLCJkcmF3WEF4aXMiLCJkcmF3U2VyaWVzIiwiZHJhd0xhYmVsIiwicHJldkFuZ2xlTWFyZ2luIiwicHJldkxhYmVsTWFyZ2luIiwieXBvcyIsImxhYmVsVGV4dCIsInhwb3MiLCJsYWJlbEJveCIsIm1hcmdpbiIsInRleHRCb3giLCJkcmF3WEF4aXNMYWJlbCIsInRyYW5zZm9ybSIsImNvcyIsIlBJIiwic2luIiwibGFiZWxTZXJpZXMiLCJyZXZlcnNlIiwic2VyaWVzUG9pbnRzIiwiX2RyYXdMaW5lRm9yIiwiX2RyYXdQb2ludEZvciIsImNpcmNsZSIsImRyYXdMaW5lUG9pbnQiLCJkcmF3TGluZVBhdGgiLCJjb29yZCIsImciLCJncmFkcyIsIml4IiwibGciLCJwcmV2Q29vcmQiLCJ4MSIsIngyIiwieTEiLCJ5MiIsImdyYWRpZW50cyIsImdyYWQiLCJuZXh0Q29vcmQiLCJwcmV2SGlsaWdodCIsImFuaW1hdGUiLCJwb2ludFNocmlua1NlcmllcyIsInBvaW50R3Jvd1NlcmllcyIsInNpZHgiLCJ0eXBlIiwibGluZUNvbG9yIiwibGluZUluZGV4IiwibGluZVdpZHRoRm9yU2VyaWVzIiwicG9pbnRDb2xvciIsInBvaW50U2l6ZUZvclNlcmllcyIsInBvaW50U3Ryb2tlV2lkdGhGb3JTZXJpZXMiLCJwb2ludFN0cm9rZUNvbG9yRm9yU2VyaWVzIiwiQXJyYXkiLCJhbmltYXRpb24iLCJkbWluIiwiZG1heCIsInB4d2lkdGgiLCJzcGVjTmFtZSIsImQiLCJkMCIsImRkZW5zaXR5IiwicyIsInNwZWMiLCJ0IiwiTEFCRUxfU1BFQ1MiLCJBVVRPX0xBQkVMX09SREVSIiwiZm10IiwiaW5jciIsImludGVydmFsIiwiZ2V0RnVsbFllYXIiLCJnZXRNb250aCIsImdldERhdGUiLCJnZXRIb3VycyIsImdldE1pbnV0ZXMiLCJzZXRVVENNaW51dGVzIiwiZ2V0VVRDTWludXRlcyIsImdldFNlY29uZHMiLCJzZXRVVENTZWNvbmRzIiwiZ2V0VVRDU2Vjb25kcyIsInNldEZ1bGxZZWFyIiwic2V0RGF0ZSIsIkFyZWEiLCJhcmVhRGVmYXVsdHMiLCJmaWxsT3BhY2l0eSIsImJlaGF2ZUxpa2VMaW5lIiwiYXJlYU9wdGlvbnMiLCJyYW5nZSIsIl9rIiwiX3Jlc3VsdHMyIiwiX2RyYXdGaWxsRm9yIiwiZHJhd0ZpbGxlZFBhdGgiLCJmaWxsRm9yU2VyaWVzIiwicmdiMmhzbCIsImhzbCIsIkJhciIsInN0YWNrZWQiLCJiYXJTaXplUmF0aW8iLCJiYXJHYXAiLCJiYXJDb2xvcnMiLCJiYXJPcGFjaXR5IiwiYmFyUmFkaXVzIiwiY2FsY0JhcnMiLCJ4QXhpc0xhYmVsVG9wUGFkZGluZyIsImJhcldpZHRoIiwiZ3JvdXBXaWR0aCIsImxhc3RUb3AiLCJsZWZ0UGFkZGluZyIsIm51bUJhcnMiLCJzaXplIiwic3BhY2VMZWZ0IiwiemVyb1BvcyIsImJhclNpemUiLCJiYXJzIiwidmVydGljYWxHcmlkQ29uZGl0aW9uIiwiZHJhd0JhciIsInZlcnRpY2FsR3JpZENvbG9yIiwidmVydGljYWxHcmlkT3BhY2l0eSIsImJhckNvbG9yIiwib3BhY2l0eSIsInJhZGl1c0FycmF5IiwibWF4UmFkaXVzIiwicm91bmRlZFJlY3QiLCJEb251dCIsImNvbG9ycyIsImJhY2tncm91bmRDb2xvciIsImxhYmVsQ29sb3IiLCJmb3JtYXR0ZXIiLCJzZWxlY3QiLCJjbGljayIsIkMiLCJjeCIsImN5IiwibGFzdCIsIm1heF92YWx1ZSIsIm5leHQiLCJzZWciLCJ2YWx1ZSIsIl9sZW4yIiwidmFsdWVzIiwic2VnbWVudHMiLCJEb251dFNlZ21lbnQiLCJyZW5kZXIiLCJ0ZXh0MSIsImRyYXdFbXB0eURvbnV0TGFiZWwiLCJ0ZXh0MiIsInNlZ21lbnQiLCJkZXNlbGVjdCIsInNldExhYmVscyIsImxhYmVsMSIsImxhYmVsMiIsImlubmVyIiwibWF4SGVpZ2h0Qm90dG9tIiwibWF4SGVpZ2h0VG9wIiwibWF4V2lkdGgiLCJ0ZXh0MWJib3giLCJ0ZXh0MXNjYWxlIiwidGV4dDJiYm94IiwidGV4dDJzY2FsZSIsImZvbnRTaXplIiwiZm9udFdlaWdodCIsIm91dGVyIiwicDAiLCJwMSIsInNpbl9wMCIsImNvc19wMCIsInNpbl9wMSIsImNvc19wMSIsImlzX2xvbmciLCJjYWxjU2VnbWVudCIsInNlbGVjdGVkUGF0aCIsImNhbGNBcmMiLCJjYWxjQXJjUG9pbnRzIiwicjEiLCJyMiIsIml4MCIsIml4MSIsIml5MCIsIml5MSIsIm94MCIsIm94MSIsIm95MCIsIm95MSIsImFyYyIsImRyYXdEb251dEFyYyIsImRyYXdEb251dFNlZ21lbnQiLCJmaWxsQ29sb3IiLCJzdHJva2VDb2xvciIsImhvdmVyRnVuY3Rpb24iLCJjbGlja0Z1bmN0aW9uIiwic2VsZWN0ZWQiXSwic291cmNlUm9vdCI6IiJ9