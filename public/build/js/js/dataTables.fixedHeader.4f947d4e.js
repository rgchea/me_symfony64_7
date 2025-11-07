(self["webpackChunk"] = self["webpackChunk"] || []).push([["js/dataTables.fixedHeader"],{

/***/ "./assets/css/portoadmin/vendor/datatables/extras/TableTools/FixedHeader-3.1.3/js/dataTables.fixedHeader.js":
/*!******************************************************************************************************************!*\
  !*** ./assets/css/portoadmin/vendor/datatables/extras/TableTools/FixedHeader-3.1.3/js/dataTables.fixedHeader.js ***!
  \******************************************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;__webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
__webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
__webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
__webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");
__webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
__webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
__webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
__webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
__webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
/*! FixedHeader 3.1.3
 * ©2009-2017 SpryMedia Ltd - datatables.net/license
 */

/**
 * @summary     FixedHeader
 * @description Fix a table's header or footer, so it is always visible while
 *              scrolling
 * @version     3.1.3
 * @file        dataTables.fixedHeader.js
 * @author      SpryMedia Ltd (www.sprymedia.co.uk)
 * @contact     www.sprymedia.co.uk/contact
 * @copyright   Copyright 2009-2017 SpryMedia Ltd.
 *
 * This source file is free software, available under the following license:
 *   MIT license - http://datatables.net/license/mit
 *
 * This source file is distributed in the hope that it will be useful, but
 * WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY
 * or FITNESS FOR A PARTICULAR PURPOSE. See the license files for details.
 *
 * For details please refer to: http://www.datatables.net
 */

(function (factory) {
  if (true) {
    // AMD
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js"), __webpack_require__(/*! datatables.net */ "./node_modules/datatables.net/js/jquery.dataTables.mjs")], __WEBPACK_AMD_DEFINE_RESULT__ = (function ($) {
      return factory($, window, document);
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else // removed by dead control flow
{}
})(function ($, window, document, undefined) {
  'use strict';

  var DataTable = $.fn.dataTable;
  var _instCounter = 0;
  var _FixedHeader = function FixedHeader(dt, config) {
    // Sanity check - you just know it will happen
    if (!(this instanceof _FixedHeader)) {
      throw "FixedHeader must be initialised with the 'new' keyword.";
    }

    // Allow a boolean true for defaults
    if (config === true) {
      config = {};
    }
    dt = new DataTable.Api(dt);
    this.c = $.extend(true, {}, _FixedHeader.defaults, config);
    this.s = {
      dt: dt,
      position: {
        theadTop: 0,
        tbodyTop: 0,
        tfootTop: 0,
        tfootBottom: 0,
        width: 0,
        left: 0,
        tfootHeight: 0,
        theadHeight: 0,
        windowHeight: $(window).height(),
        visible: true
      },
      headerMode: null,
      footerMode: null,
      autoWidth: dt.settings()[0].oFeatures.bAutoWidth,
      namespace: '.dtfc' + _instCounter++,
      scrollLeft: {
        header: -1,
        footer: -1
      },
      enable: true
    };
    this.dom = {
      floatingHeader: null,
      thead: $(dt.table().header()),
      tbody: $(dt.table().body()),
      tfoot: $(dt.table().footer()),
      header: {
        host: null,
        floating: null,
        placeholder: null
      },
      footer: {
        host: null,
        floating: null,
        placeholder: null
      }
    };
    this.dom.header.host = this.dom.thead.parent();
    this.dom.footer.host = this.dom.tfoot.parent();
    var dtSettings = dt.settings()[0];
    if (dtSettings._fixedHeader) {
      throw "FixedHeader already initialised on table " + dtSettings.nTable.id;
    }
    dtSettings._fixedHeader = this;
    this._constructor();
  };

  /*
   * Variable: FixedHeader
   * Purpose:  Prototype for FixedHeader
   * Scope:    global
   */
  $.extend(_FixedHeader.prototype, {
    /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
     * API methods
     */

    /**
     * Enable / disable the fixed elements
     *
     * @param  {boolean} enable `true` to enable, `false` to disable
     */
    enable: function enable(_enable) {
      this.s.enable = _enable;
      if (this.c.header) {
        this._modeChange('in-place', 'header', true);
      }
      if (this.c.footer && this.dom.tfoot.length) {
        this._modeChange('in-place', 'footer', true);
      }
      this.update();
    },
    /**
     * Set header offset 
     *
     * @param  {int} new value for headerOffset
     */
    headerOffset: function headerOffset(offset) {
      if (offset !== undefined) {
        this.c.headerOffset = offset;
        this.update();
      }
      return this.c.headerOffset;
    },
    /**
     * Set footer offset
     *
     * @param  {int} new value for footerOffset
     */
    footerOffset: function footerOffset(offset) {
      if (offset !== undefined) {
        this.c.footerOffset = offset;
        this.update();
      }
      return this.c.footerOffset;
    },
    /**
     * Recalculate the position of the fixed elements and force them into place
     */
    update: function update() {
      this._positions();
      this._scroll(true);
    },
    /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
     * Constructor
     */

    /**
     * FixedHeader constructor - adding the required event listeners and
     * simple initialisation
     *
     * @private
     */
    _constructor: function _constructor() {
      var that = this;
      var dt = this.s.dt;
      $(window).on('scroll' + this.s.namespace, function () {
        that._scroll();
      }).on('resize' + this.s.namespace, function () {
        that.s.position.windowHeight = $(window).height();
        that.update();
      });
      var autoHeader = $('.fh-fixedHeader');
      if (!this.c.headerOffset && autoHeader.length) {
        this.c.headerOffset = autoHeader.outerHeight();
      }
      var autoFooter = $('.fh-fixedFooter');
      if (!this.c.footerOffset && autoFooter.length) {
        this.c.footerOffset = autoFooter.outerHeight();
      }
      dt.on('column-reorder.dt.dtfc column-visibility.dt.dtfc draw.dt.dtfc column-sizing.dt.dtfc', function () {
        that.update();
      });
      dt.on('destroy.dtfc', function () {
        dt.off('.dtfc');
        $(window).off(that.s.namespace);
      });
      this._positions();
      this._scroll();
    },
    /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
     * Private methods
     */

    /**
     * Clone a fixed item to act as a place holder for the original element
     * which is moved into a clone of the table element, and moved around the
     * document to give the fixed effect.
     *
     * @param  {string}  item  'header' or 'footer'
     * @param  {boolean} force Force the clone to happen, or allow automatic
     *   decision (reuse existing if available)
     * @private
     */
    _clone: function _clone(item, force) {
      var dt = this.s.dt;
      var itemDom = this.dom[item];
      var itemElement = item === 'header' ? this.dom.thead : this.dom.tfoot;
      if (!force && itemDom.floating) {
        // existing floating element - reuse it
        itemDom.floating.removeClass('fixedHeader-floating fixedHeader-locked');
      } else {
        if (itemDom.floating) {
          itemDom.placeholder.remove();
          this._unsize(item);
          itemDom.floating.children().detach();
          itemDom.floating.remove();
        }
        itemDom.floating = $(dt.table().node().cloneNode(false)).css('table-layout', 'fixed').removeAttr('id').append(itemElement).appendTo('body');

        // Insert a fake thead/tfoot into the DataTable to stop it jumping around
        itemDom.placeholder = itemElement.clone(false);
        itemDom.placeholder.find('*[id]').removeAttr('id');
        itemDom.host.prepend(itemDom.placeholder);

        // Clone widths
        this._matchWidths(itemDom.placeholder, itemDom.floating);
      }
    },
    /**
     * Copy widths from the cells in one element to another. This is required
     * for the footer as the footer in the main table takes its sizes from the
     * header columns. That isn't present in the footer so to have it still
     * align correctly, the sizes need to be copied over. It is also required
     * for the header when auto width is not enabled
     *
     * @param  {jQuery} from Copy widths from
     * @param  {jQuery} to   Copy widths to
     * @private
     */
    _matchWidths: function _matchWidths(from, to) {
      var get = function get(name) {
        return $(name, from).map(function () {
          return $(this).width();
        }).toArray();
      };
      var set = function set(name, toWidths) {
        $(name, to).each(function (i) {
          $(this).css({
            width: toWidths[i],
            minWidth: toWidths[i]
          });
        });
      };
      var thWidths = get('th');
      var tdWidths = get('td');
      set('th', thWidths);
      set('td', tdWidths);
    },
    /**
     * Remove assigned widths from the cells in an element. This is required
     * when inserting the footer back into the main table so the size is defined
     * by the header columns and also when auto width is disabled in the
     * DataTable.
     *
     * @param  {string} item The `header` or `footer`
     * @private
     */
    _unsize: function _unsize(item) {
      var el = this.dom[item].floating;
      if (el && (item === 'footer' || item === 'header' && !this.s.autoWidth)) {
        $('th, td', el).css({
          width: '',
          minWidth: ''
        });
      } else if (el && item === 'header') {
        $('th, td', el).css('min-width', '');
      }
    },
    /**
     * Reposition the floating elements to take account of horizontal page
     * scroll
     *
     * @param  {string} item       The `header` or `footer`
     * @param  {int}    scrollLeft Document scrollLeft
     * @private
     */
    _horizontal: function _horizontal(item, scrollLeft) {
      var itemDom = this.dom[item];
      var position = this.s.position;
      var lastScrollLeft = this.s.scrollLeft;
      if (itemDom.floating && lastScrollLeft[item] !== scrollLeft) {
        itemDom.floating.css('left', position.left - scrollLeft);
        lastScrollLeft[item] = scrollLeft;
      }
    },
    /**
     * Change from one display mode to another. Each fixed item can be in one
     * of:
     *
     * * `in-place` - In the main DataTable
     * * `in` - Floating over the DataTable
     * * `below` - (Header only) Fixed to the bottom of the table body
     * * `above` - (Footer only) Fixed to the top of the table body
     * 
     * @param  {string}  mode        Mode that the item should be shown in
     * @param  {string}  item        'header' or 'footer'
     * @param  {boolean} forceChange Force a redraw of the mode, even if already
     *     in that mode.
     * @private
     */
    _modeChange: function _modeChange(mode, item, forceChange) {
      var dt = this.s.dt;
      var itemDom = this.dom[item];
      var position = this.s.position;

      // Record focus. Browser's will cause input elements to loose focus if
      // they are inserted else where in the doc
      var tablePart = this.dom[item === 'footer' ? 'tfoot' : 'thead'];
      var focus = $.contains(tablePart[0], document.activeElement) ? document.activeElement : null;
      if (mode === 'in-place') {
        // Insert the header back into the table's real header
        if (itemDom.placeholder) {
          itemDom.placeholder.remove();
          itemDom.placeholder = null;
        }
        this._unsize(item);
        if (item === 'header') {
          itemDom.host.prepend(this.dom.thead);
        } else {
          itemDom.host.append(this.dom.tfoot);
        }
        if (itemDom.floating) {
          itemDom.floating.remove();
          itemDom.floating = null;
        }
      } else if (mode === 'in') {
        // Remove the header from the read header and insert into a fixed
        // positioned floating table clone
        this._clone(item, forceChange);
        itemDom.floating.addClass('fixedHeader-floating').css(item === 'header' ? 'top' : 'bottom', this.c[item + 'Offset']).css('left', position.left + 'px').css('width', position.width + 'px');
        if (item === 'footer') {
          itemDom.floating.css('top', '');
        }
      } else if (mode === 'below') {
        // only used for the header
        // Fix the position of the floating header at base of the table body
        this._clone(item, forceChange);
        itemDom.floating.addClass('fixedHeader-locked').css('top', position.tfootTop - position.theadHeight).css('left', position.left + 'px').css('width', position.width + 'px');
      } else if (mode === 'above') {
        // only used for the footer
        // Fix the position of the floating footer at top of the table body
        this._clone(item, forceChange);
        itemDom.floating.addClass('fixedHeader-locked').css('top', position.tbodyTop).css('left', position.left + 'px').css('width', position.width + 'px');
      }

      // Restore focus if it was lost
      if (focus && focus !== document.activeElement) {
        focus.focus();
      }
      this.s.scrollLeft.header = -1;
      this.s.scrollLeft.footer = -1;
      this.s[item + 'Mode'] = mode;
    },
    /**
     * Cache the positional information that is required for the mode
     * calculations that FixedHeader performs.
     *
     * @private
     */
    _positions: function _positions() {
      var dt = this.s.dt;
      var table = dt.table();
      var position = this.s.position;
      var dom = this.dom;
      var tableNode = $(table.node());

      // Need to use the header and footer that are in the main table,
      // regardless of if they are clones, since they hold the positions we
      // want to measure from
      var thead = tableNode.children('thead');
      var tfoot = tableNode.children('tfoot');
      var tbody = dom.tbody;
      position.visible = tableNode.is(':visible');
      position.width = tableNode.outerWidth();
      position.left = tableNode.offset().left;
      position.theadTop = thead.offset().top;
      position.tbodyTop = tbody.offset().top;
      position.theadHeight = position.tbodyTop - position.theadTop;
      if (tfoot.length) {
        position.tfootTop = tfoot.offset().top;
        position.tfootBottom = position.tfootTop + tfoot.outerHeight();
        position.tfootHeight = position.tfootBottom - position.tfootTop;
      } else {
        position.tfootTop = position.tbodyTop + tbody.outerHeight();
        position.tfootBottom = position.tfootTop;
        position.tfootHeight = position.tfootTop;
      }
    },
    /**
     * Mode calculation - determine what mode the fixed items should be placed
     * into.
     *
     * @param  {boolean} forceChange Force a redraw of the mode, even if already
     *     in that mode.
     * @private
     */
    _scroll: function _scroll(forceChange) {
      var windowTop = $(document).scrollTop();
      var windowLeft = $(document).scrollLeft();
      var position = this.s.position;
      var headerMode, footerMode;
      if (!this.s.enable) {
        return;
      }
      if (this.c.header) {
        if (!position.visible || windowTop <= position.theadTop - this.c.headerOffset) {
          headerMode = 'in-place';
        } else if (windowTop <= position.tfootTop - position.theadHeight - this.c.headerOffset) {
          headerMode = 'in';
        } else {
          headerMode = 'below';
        }
        if (forceChange || headerMode !== this.s.headerMode) {
          this._modeChange(headerMode, 'header', forceChange);
        }
        this._horizontal('header', windowLeft);
      }
      if (this.c.footer && this.dom.tfoot.length) {
        if (!position.visible || windowTop + position.windowHeight >= position.tfootBottom + this.c.footerOffset) {
          footerMode = 'in-place';
        } else if (position.windowHeight + windowTop > position.tbodyTop + position.tfootHeight + this.c.footerOffset) {
          footerMode = 'in';
        } else {
          footerMode = 'above';
        }
        if (forceChange || footerMode !== this.s.footerMode) {
          this._modeChange(footerMode, 'footer', forceChange);
        }
        this._horizontal('footer', windowLeft);
      }
    }
  });

  /**
   * Version
   * @type {String}
   * @static
   */
  _FixedHeader.version = "3.1.3";

  /**
   * Defaults
   * @type {Object}
   * @static
   */
  _FixedHeader.defaults = {
    header: true,
    footer: false,
    headerOffset: 0,
    footerOffset: 0
  };

  /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
   * DataTables interfaces
   */

  // Attach for constructor access
  $.fn.dataTable.FixedHeader = _FixedHeader;
  $.fn.DataTable.FixedHeader = _FixedHeader;

  // DataTables creation - check if the FixedHeader option has been defined on the
  // table and if so, initialise
  $(document).on('init.dt.dtfh', function (e, settings, json) {
    if (e.namespace !== 'dt') {
      return;
    }
    var init = settings.oInit.fixedHeader;
    var defaults = DataTable.defaults.fixedHeader;
    if ((init || defaults) && !settings._fixedHeader) {
      var opts = $.extend({}, defaults, init);
      if (init !== false) {
        new _FixedHeader(settings, opts);
      }
    }
  });

  // DataTables API methods
  DataTable.Api.register('fixedHeader()', function () {});
  DataTable.Api.register('fixedHeader.adjust()', function () {
    return this.iterator('table', function (ctx) {
      var fh = ctx._fixedHeader;
      if (fh) {
        fh.update();
      }
    });
  });
  DataTable.Api.register('fixedHeader.enable()', function (flag) {
    return this.iterator('table', function (ctx) {
      var fh = ctx._fixedHeader;
      flag = flag !== undefined ? flag : true;
      if (fh && flag !== fh.s.enable) {
        fh.enable(flag);
      }
    });
  });
  DataTable.Api.register('fixedHeader.disable()', function () {
    return this.iterator('table', function (ctx) {
      var fh = ctx._fixedHeader;
      if (fh && fh.s.enable) {
        fh.enable(false);
      }
    });
  });
  $.each(['header', 'footer'], function (i, el) {
    DataTable.Api.register('fixedHeader.' + el + 'Offset()', function (offset) {
      var ctx = this.context;
      if (offset === undefined) {
        return ctx.length && ctx[0]._fixedHeader ? ctx[0]._fixedHeader[el + 'Offset']() : undefined;
      }
      return this.iterator('table', function (ctx) {
        var fh = ctx._fixedHeader;
        if (fh) {
          fh[el + 'Offset'](offset);
        }
      });
    });
  });
  return _FixedHeader;
});

/***/ }),

/***/ "./node_modules/core-js/internals/set-species.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/set-species.js ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "./node_modules/core-js/internals/get-built-in.js");
var defineBuiltInAccessor = __webpack_require__(/*! ../internals/define-built-in-accessor */ "./node_modules/core-js/internals/define-built-in-accessor.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");

var SPECIES = wellKnownSymbol('species');

module.exports = function (CONSTRUCTOR_NAME) {
  var Constructor = getBuiltIn(CONSTRUCTOR_NAME);

  if (DESCRIPTORS && Constructor && !Constructor[SPECIES]) {
    defineBuiltInAccessor(Constructor, SPECIES, {
      configurable: true,
      get: function () { return this; }
    });
  }
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


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.map.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.map.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var $map = (__webpack_require__(/*! ../internals/array-iteration */ "./node_modules/core-js/internals/array-iteration.js").map);
var arrayMethodHasSpeciesSupport = __webpack_require__(/*! ../internals/array-method-has-species-support */ "./node_modules/core-js/internals/array-method-has-species-support.js");

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('map');

// `Array.prototype.map` method
// https://tc39.es/ecma262/#sec-array.prototype.map
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT }, {
  map: function map(callbackfn /* , thisArg */) {
    return $map(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_internals_export_js","vendors-node_modules_core-js_internals_add-to-unscopables_js-node_modules_core-js_internals_a-09983a","vendors-node_modules_core-js_internals_array-slice_js-node_modules_core-js_internals_function-caeab8","vendors-node_modules_core-js_modules_es_string_iterator_js-node_modules_core-js_modules_es_sy-23bad7","vendors-node_modules_jquery_dist_jquery_js","vendors-node_modules_core-js_internals_array-method-has-species-support_js-node_modules_core--d0f16b","vendors-node_modules_datatables_net_js_jquery_dataTables_mjs"], () => (__webpack_exec__("./assets/css/portoadmin/vendor/datatables/extras/TableTools/FixedHeader-3.1.3/js/dataTables.fixedHeader.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvanMvZGF0YVRhYmxlcy5maXhlZEhlYWRlci40Zjk0N2Q0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVDLFdBQVVBLE9BQU8sRUFBRTtFQUNuQixJQUFLLElBQTBDLEVBQUc7SUFDakQ7SUFDQUMsaUNBQVEsQ0FBQyx5RUFBUSxFQUFFLG1HQUFnQixDQUFDLG1DQUFFLFVBQVdFLENBQUMsRUFBRztNQUNwRCxPQUFPSCxPQUFPLENBQUVHLENBQUMsRUFBRUMsTUFBTSxFQUFFQyxRQUFTLENBQUM7SUFDdEMsQ0FBRTtBQUFBLGtHQUFDO0VBQ0osQ0FBQyxNQUNJO0FBQUEsRUFpQko7QUFDRixDQUFDLEVBQUMsVUFBVUYsQ0FBQyxFQUFFQyxNQUFNLEVBQUVDLFFBQVEsRUFBRVMsU0FBUyxFQUFHO0VBQzdDLFlBQVk7O0VBQ1osSUFBSUMsU0FBUyxHQUFHWixDQUFDLENBQUNPLEVBQUUsQ0FBQ0MsU0FBUztFQUc5QixJQUFJSyxZQUFZLEdBQUcsQ0FBQztFQUVwQixJQUFJQyxZQUFXLEdBQUcsU0FBZEEsV0FBV0EsQ0FBY0MsRUFBRSxFQUFFQyxNQUFNLEVBQUc7SUFDekM7SUFDQSxJQUFLLEVBQUcsSUFBSSxZQUFZRixZQUFXLENBQUMsRUFBRztNQUN0QyxNQUFNLHlEQUF5RDtJQUNoRTs7SUFFQTtJQUNBLElBQUtFLE1BQU0sS0FBSyxJQUFJLEVBQUc7TUFDdEJBLE1BQU0sR0FBRyxDQUFDLENBQUM7SUFDWjtJQUVBRCxFQUFFLEdBQUcsSUFBSUgsU0FBUyxDQUFDSyxHQUFHLENBQUVGLEVBQUcsQ0FBQztJQUU1QixJQUFJLENBQUNHLENBQUMsR0FBR2xCLENBQUMsQ0FBQ21CLE1BQU0sQ0FBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLEVB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O0FBQ3JDLFdBQVcsb0hBQTJDO0FBQ3RELG1DQUFtQyxtQkFBTyxDQUFDLDJIQUErQzs7QUFFMUY7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSSw0REFBNEQ7QUFDaEU7QUFDQTtBQUNBO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Fzc2V0cy9jc3MvcG9ydG9hZG1pbi92ZW5kb3IvZGF0YXRhYmxlcy9leHRyYXMvVGFibGVUb29scy9GaXhlZEhlYWRlci0zLjEuMy9qcy9kYXRhVGFibGVzLmZpeGVkSGVhZGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9zZXQtc3BlY2llcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLmFycmF5LmZpbmQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5tYXAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyohIEZpeGVkSGVhZGVyIDMuMS4zXHJcbiAqIMKpMjAwOS0yMDE3IFNwcnlNZWRpYSBMdGQgLSBkYXRhdGFibGVzLm5ldC9saWNlbnNlXHJcbiAqL1xyXG5cclxuLyoqXHJcbiAqIEBzdW1tYXJ5ICAgICBGaXhlZEhlYWRlclxyXG4gKiBAZGVzY3JpcHRpb24gRml4IGEgdGFibGUncyBoZWFkZXIgb3IgZm9vdGVyLCBzbyBpdCBpcyBhbHdheXMgdmlzaWJsZSB3aGlsZVxyXG4gKiAgICAgICAgICAgICAgc2Nyb2xsaW5nXHJcbiAqIEB2ZXJzaW9uICAgICAzLjEuM1xyXG4gKiBAZmlsZSAgICAgICAgZGF0YVRhYmxlcy5maXhlZEhlYWRlci5qc1xyXG4gKiBAYXV0aG9yICAgICAgU3ByeU1lZGlhIEx0ZCAod3d3LnNwcnltZWRpYS5jby51aylcclxuICogQGNvbnRhY3QgICAgIHd3dy5zcHJ5bWVkaWEuY28udWsvY29udGFjdFxyXG4gKiBAY29weXJpZ2h0ICAgQ29weXJpZ2h0IDIwMDktMjAxNyBTcHJ5TWVkaWEgTHRkLlxyXG4gKlxyXG4gKiBUaGlzIHNvdXJjZSBmaWxlIGlzIGZyZWUgc29mdHdhcmUsIGF2YWlsYWJsZSB1bmRlciB0aGUgZm9sbG93aW5nIGxpY2Vuc2U6XHJcbiAqICAgTUlUIGxpY2Vuc2UgLSBodHRwOi8vZGF0YXRhYmxlcy5uZXQvbGljZW5zZS9taXRcclxuICpcclxuICogVGhpcyBzb3VyY2UgZmlsZSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXRcclxuICogV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFlcclxuICogb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFNlZSB0aGUgbGljZW5zZSBmaWxlcyBmb3IgZGV0YWlscy5cclxuICpcclxuICogRm9yIGRldGFpbHMgcGxlYXNlIHJlZmVyIHRvOiBodHRwOi8vd3d3LmRhdGF0YWJsZXMubmV0XHJcbiAqL1xyXG5cclxuKGZ1bmN0aW9uKCBmYWN0b3J5ICl7XHJcblx0aWYgKCB0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgKSB7XHJcblx0XHQvLyBBTURcclxuXHRcdGRlZmluZSggWydqcXVlcnknLCAnZGF0YXRhYmxlcy5uZXQnXSwgZnVuY3Rpb24gKCAkICkge1xyXG5cdFx0XHRyZXR1cm4gZmFjdG9yeSggJCwgd2luZG93LCBkb2N1bWVudCApO1xyXG5cdFx0fSApO1xyXG5cdH1cclxuXHRlbHNlIGlmICggdHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICkge1xyXG5cdFx0Ly8gQ29tbW9uSlNcclxuXHRcdG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHJvb3QsICQpIHtcclxuXHRcdFx0aWYgKCAhIHJvb3QgKSB7XHJcblx0XHRcdFx0cm9vdCA9IHdpbmRvdztcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYgKCAhICQgfHwgISAkLmZuLmRhdGFUYWJsZSApIHtcclxuXHRcdFx0XHQkID0gcmVxdWlyZSgnZGF0YXRhYmxlcy5uZXQnKShyb290LCAkKS4kO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRyZXR1cm4gZmFjdG9yeSggJCwgcm9vdCwgcm9vdC5kb2N1bWVudCApO1xyXG5cdFx0fTtcclxuXHR9XHJcblx0ZWxzZSB7XHJcblx0XHQvLyBCcm93c2VyXHJcblx0XHRmYWN0b3J5KCBqUXVlcnksIHdpbmRvdywgZG9jdW1lbnQgKTtcclxuXHR9XHJcbn0oZnVuY3Rpb24oICQsIHdpbmRvdywgZG9jdW1lbnQsIHVuZGVmaW5lZCApIHtcclxuJ3VzZSBzdHJpY3QnO1xyXG52YXIgRGF0YVRhYmxlID0gJC5mbi5kYXRhVGFibGU7XHJcblxyXG5cclxudmFyIF9pbnN0Q291bnRlciA9IDA7XHJcblxyXG52YXIgRml4ZWRIZWFkZXIgPSBmdW5jdGlvbiAoIGR0LCBjb25maWcgKSB7XHJcblx0Ly8gU2FuaXR5IGNoZWNrIC0geW91IGp1c3Qga25vdyBpdCB3aWxsIGhhcHBlblxyXG5cdGlmICggISAodGhpcyBpbnN0YW5jZW9mIEZpeGVkSGVhZGVyKSApIHtcclxuXHRcdHRocm93IFwiRml4ZWRIZWFkZXIgbXVzdCBiZSBpbml0aWFsaXNlZCB3aXRoIHRoZSAnbmV3JyBrZXl3b3JkLlwiO1xyXG5cdH1cclxuXHJcblx0Ly8gQWxsb3cgYSBib29sZWFuIHRydWUgZm9yIGRlZmF1bHRzXHJcblx0aWYgKCBjb25maWcgPT09IHRydWUgKSB7XHJcblx0XHRjb25maWcgPSB7fTtcclxuXHR9XHJcblxyXG5cdGR0ID0gbmV3IERhdGFUYWJsZS5BcGkoIGR0ICk7XHJcblxyXG5cdHRoaXMuYyA9ICQuZXh0ZW5kKCB0cnVlLCB7fSwgRml4ZWRIZWFkZXIuZGVmYXVsdHMsIGNvbmZpZyApO1xyXG5cclxuXHR0aGlzLnMgPSB7XHJcblx0XHRkdDogZHQsXHJcblx0XHRwb3NpdGlvbjoge1xyXG5cdFx0XHR0aGVhZFRvcDogMCxcclxuXHRcdFx0dGJvZHlUb3A6IDAsXHJcblx0XHRcdHRmb290VG9wOiAwLFxyXG5cdFx0XHR0Zm9vdEJvdHRvbTogMCxcclxuXHRcdFx0d2lkdGg6IDAsXHJcblx0XHRcdGxlZnQ6IDAsXHJcblx0XHRcdHRmb290SGVpZ2h0OiAwLFxyXG5cdFx0XHR0aGVhZEhlaWdodDogMCxcclxuXHRcdFx0d2luZG93SGVpZ2h0OiAkKHdpbmRvdykuaGVpZ2h0KCksXHJcblx0XHRcdHZpc2libGU6IHRydWVcclxuXHRcdH0sXHJcblx0XHRoZWFkZXJNb2RlOiBudWxsLFxyXG5cdFx0Zm9vdGVyTW9kZTogbnVsbCxcclxuXHRcdGF1dG9XaWR0aDogZHQuc2V0dGluZ3MoKVswXS5vRmVhdHVyZXMuYkF1dG9XaWR0aCxcclxuXHRcdG5hbWVzcGFjZTogJy5kdGZjJysoX2luc3RDb3VudGVyKyspLFxyXG5cdFx0c2Nyb2xsTGVmdDoge1xyXG5cdFx0XHRoZWFkZXI6IC0xLFxyXG5cdFx0XHRmb290ZXI6IC0xXHJcblx0XHR9LFxyXG5cdFx0ZW5hYmxlOiB0cnVlXHJcblx0fTtcclxuXHJcblx0dGhpcy5kb20gPSB7XHJcblx0XHRmbG9hdGluZ0hlYWRlcjogbnVsbCxcclxuXHRcdHRoZWFkOiAkKGR0LnRhYmxlKCkuaGVhZGVyKCkpLFxyXG5cdFx0dGJvZHk6ICQoZHQudGFibGUoKS5ib2R5KCkpLFxyXG5cdFx0dGZvb3Q6ICQoZHQudGFibGUoKS5mb290ZXIoKSksXHJcblx0XHRoZWFkZXI6IHtcclxuXHRcdFx0aG9zdDogbnVsbCxcclxuXHRcdFx0ZmxvYXRpbmc6IG51bGwsXHJcblx0XHRcdHBsYWNlaG9sZGVyOiBudWxsXHJcblx0XHR9LFxyXG5cdFx0Zm9vdGVyOiB7XHJcblx0XHRcdGhvc3Q6IG51bGwsXHJcblx0XHRcdGZsb2F0aW5nOiBudWxsLFxyXG5cdFx0XHRwbGFjZWhvbGRlcjogbnVsbFxyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdHRoaXMuZG9tLmhlYWRlci5ob3N0ID0gdGhpcy5kb20udGhlYWQucGFyZW50KCk7XHJcblx0dGhpcy5kb20uZm9vdGVyLmhvc3QgPSB0aGlzLmRvbS50Zm9vdC5wYXJlbnQoKTtcclxuXHJcblx0dmFyIGR0U2V0dGluZ3MgPSBkdC5zZXR0aW5ncygpWzBdO1xyXG5cdGlmICggZHRTZXR0aW5ncy5fZml4ZWRIZWFkZXIgKSB7XHJcblx0XHR0aHJvdyBcIkZpeGVkSGVhZGVyIGFscmVhZHkgaW5pdGlhbGlzZWQgb24gdGFibGUgXCIrZHRTZXR0aW5ncy5uVGFibGUuaWQ7XHJcblx0fVxyXG5cclxuXHRkdFNldHRpbmdzLl9maXhlZEhlYWRlciA9IHRoaXM7XHJcblxyXG5cdHRoaXMuX2NvbnN0cnVjdG9yKCk7XHJcbn07XHJcblxyXG5cclxuLypcclxuICogVmFyaWFibGU6IEZpeGVkSGVhZGVyXHJcbiAqIFB1cnBvc2U6ICBQcm90b3R5cGUgZm9yIEZpeGVkSGVhZGVyXHJcbiAqIFNjb3BlOiAgICBnbG9iYWxcclxuICovXHJcbiQuZXh0ZW5kKCBGaXhlZEhlYWRlci5wcm90b3R5cGUsIHtcclxuXHQvKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKlxyXG5cdCAqIEFQSSBtZXRob2RzXHJcblx0ICovXHJcblx0XHJcblx0LyoqXHJcblx0ICogRW5hYmxlIC8gZGlzYWJsZSB0aGUgZml4ZWQgZWxlbWVudHNcclxuXHQgKlxyXG5cdCAqIEBwYXJhbSAge2Jvb2xlYW59IGVuYWJsZSBgdHJ1ZWAgdG8gZW5hYmxlLCBgZmFsc2VgIHRvIGRpc2FibGVcclxuXHQgKi9cclxuXHRlbmFibGU6IGZ1bmN0aW9uICggZW5hYmxlIClcclxuXHR7XHJcblx0XHR0aGlzLnMuZW5hYmxlID0gZW5hYmxlO1xyXG5cclxuXHRcdGlmICggdGhpcy5jLmhlYWRlciApIHtcclxuXHRcdFx0dGhpcy5fbW9kZUNoYW5nZSggJ2luLXBsYWNlJywgJ2hlYWRlcicsIHRydWUgKTtcclxuXHRcdH1cclxuXHJcblx0XHRpZiAoIHRoaXMuYy5mb290ZXIgJiYgdGhpcy5kb20udGZvb3QubGVuZ3RoICkge1xyXG5cdFx0XHR0aGlzLl9tb2RlQ2hhbmdlKCAnaW4tcGxhY2UnLCAnZm9vdGVyJywgdHJ1ZSApO1xyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMudXBkYXRlKCk7XHJcblx0fSxcclxuXHRcclxuXHQvKipcclxuXHQgKiBTZXQgaGVhZGVyIG9mZnNldCBcclxuXHQgKlxyXG5cdCAqIEBwYXJhbSAge2ludH0gbmV3IHZhbHVlIGZvciBoZWFkZXJPZmZzZXRcclxuXHQgKi9cclxuXHRoZWFkZXJPZmZzZXQ6IGZ1bmN0aW9uICggb2Zmc2V0IClcclxuXHR7XHJcblx0XHRpZiAoIG9mZnNldCAhPT0gdW5kZWZpbmVkICkge1xyXG5cdFx0XHR0aGlzLmMuaGVhZGVyT2Zmc2V0ID0gb2Zmc2V0O1xyXG5cdFx0XHR0aGlzLnVwZGF0ZSgpO1xyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiB0aGlzLmMuaGVhZGVyT2Zmc2V0O1xyXG5cdH0sXHJcblx0XHJcblx0LyoqXHJcblx0ICogU2V0IGZvb3RlciBvZmZzZXRcclxuXHQgKlxyXG5cdCAqIEBwYXJhbSAge2ludH0gbmV3IHZhbHVlIGZvciBmb290ZXJPZmZzZXRcclxuXHQgKi9cclxuXHRmb290ZXJPZmZzZXQ6IGZ1bmN0aW9uICggb2Zmc2V0IClcclxuXHR7XHJcblx0XHRpZiAoIG9mZnNldCAhPT0gdW5kZWZpbmVkICkge1xyXG5cdFx0XHR0aGlzLmMuZm9vdGVyT2Zmc2V0ID0gb2Zmc2V0O1xyXG5cdFx0XHR0aGlzLnVwZGF0ZSgpO1xyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiB0aGlzLmMuZm9vdGVyT2Zmc2V0O1xyXG5cdH0sXHJcblxyXG5cdFxyXG5cdC8qKlxyXG5cdCAqIFJlY2FsY3VsYXRlIHRoZSBwb3NpdGlvbiBvZiB0aGUgZml4ZWQgZWxlbWVudHMgYW5kIGZvcmNlIHRoZW0gaW50byBwbGFjZVxyXG5cdCAqL1xyXG5cdHVwZGF0ZTogZnVuY3Rpb24gKClcclxuXHR7XHJcblx0XHR0aGlzLl9wb3NpdGlvbnMoKTtcclxuXHRcdHRoaXMuX3Njcm9sbCggdHJ1ZSApO1xyXG5cdH0sXHJcblxyXG5cclxuXHQvKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKlxyXG5cdCAqIENvbnN0cnVjdG9yXHJcblx0ICovXHJcblx0XHJcblx0LyoqXHJcblx0ICogRml4ZWRIZWFkZXIgY29uc3RydWN0b3IgLSBhZGRpbmcgdGhlIHJlcXVpcmVkIGV2ZW50IGxpc3RlbmVycyBhbmRcclxuXHQgKiBzaW1wbGUgaW5pdGlhbGlzYXRpb25cclxuXHQgKlxyXG5cdCAqIEBwcml2YXRlXHJcblx0ICovXHJcblx0X2NvbnN0cnVjdG9yOiBmdW5jdGlvbiAoKVxyXG5cdHtcclxuXHRcdHZhciB0aGF0ID0gdGhpcztcclxuXHRcdHZhciBkdCA9IHRoaXMucy5kdDtcclxuXHJcblx0XHQkKHdpbmRvdylcclxuXHRcdFx0Lm9uKCAnc2Nyb2xsJyt0aGlzLnMubmFtZXNwYWNlLCBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdFx0dGhhdC5fc2Nyb2xsKCk7XHJcblx0XHRcdH0gKVxyXG5cdFx0XHQub24oICdyZXNpemUnK3RoaXMucy5uYW1lc3BhY2UsIGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0XHR0aGF0LnMucG9zaXRpb24ud2luZG93SGVpZ2h0ID0gJCh3aW5kb3cpLmhlaWdodCgpO1xyXG5cdFx0XHRcdHRoYXQudXBkYXRlKCk7XHJcblx0XHRcdH0gKTtcclxuXHJcblx0XHR2YXIgYXV0b0hlYWRlciA9ICQoJy5maC1maXhlZEhlYWRlcicpO1xyXG5cdFx0aWYgKCAhIHRoaXMuYy5oZWFkZXJPZmZzZXQgJiYgYXV0b0hlYWRlci5sZW5ndGggKSB7XHJcblx0XHRcdHRoaXMuYy5oZWFkZXJPZmZzZXQgPSBhdXRvSGVhZGVyLm91dGVySGVpZ2h0KCk7XHJcblx0XHR9XHJcblxyXG5cdFx0dmFyIGF1dG9Gb290ZXIgPSAkKCcuZmgtZml4ZWRGb290ZXInKTtcclxuXHRcdGlmICggISB0aGlzLmMuZm9vdGVyT2Zmc2V0ICYmIGF1dG9Gb290ZXIubGVuZ3RoICkge1xyXG5cdFx0XHR0aGlzLmMuZm9vdGVyT2Zmc2V0ID0gYXV0b0Zvb3Rlci5vdXRlckhlaWdodCgpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGR0Lm9uKCAnY29sdW1uLXJlb3JkZXIuZHQuZHRmYyBjb2x1bW4tdmlzaWJpbGl0eS5kdC5kdGZjIGRyYXcuZHQuZHRmYyBjb2x1bW4tc2l6aW5nLmR0LmR0ZmMnLCBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdHRoYXQudXBkYXRlKCk7XHJcblx0XHR9ICk7XHJcblxyXG5cdFx0ZHQub24oICdkZXN0cm95LmR0ZmMnLCBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdGR0Lm9mZiggJy5kdGZjJyApO1xyXG5cdFx0XHQkKHdpbmRvdykub2ZmKCB0aGF0LnMubmFtZXNwYWNlICk7XHJcblx0XHR9ICk7XHJcblxyXG5cdFx0dGhpcy5fcG9zaXRpb25zKCk7XHJcblx0XHR0aGlzLl9zY3JvbGwoKTtcclxuXHR9LFxyXG5cclxuXHJcblx0LyogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICpcclxuXHQgKiBQcml2YXRlIG1ldGhvZHNcclxuXHQgKi9cclxuXHJcblx0LyoqXHJcblx0ICogQ2xvbmUgYSBmaXhlZCBpdGVtIHRvIGFjdCBhcyBhIHBsYWNlIGhvbGRlciBmb3IgdGhlIG9yaWdpbmFsIGVsZW1lbnRcclxuXHQgKiB3aGljaCBpcyBtb3ZlZCBpbnRvIGEgY2xvbmUgb2YgdGhlIHRhYmxlIGVsZW1lbnQsIGFuZCBtb3ZlZCBhcm91bmQgdGhlXHJcblx0ICogZG9jdW1lbnQgdG8gZ2l2ZSB0aGUgZml4ZWQgZWZmZWN0LlxyXG5cdCAqXHJcblx0ICogQHBhcmFtICB7c3RyaW5nfSAgaXRlbSAgJ2hlYWRlcicgb3IgJ2Zvb3RlcidcclxuXHQgKiBAcGFyYW0gIHtib29sZWFufSBmb3JjZSBGb3JjZSB0aGUgY2xvbmUgdG8gaGFwcGVuLCBvciBhbGxvdyBhdXRvbWF0aWNcclxuXHQgKiAgIGRlY2lzaW9uIChyZXVzZSBleGlzdGluZyBpZiBhdmFpbGFibGUpXHJcblx0ICogQHByaXZhdGVcclxuXHQgKi9cclxuXHRfY2xvbmU6IGZ1bmN0aW9uICggaXRlbSwgZm9yY2UgKVxyXG5cdHtcclxuXHRcdHZhciBkdCA9IHRoaXMucy5kdDtcclxuXHRcdHZhciBpdGVtRG9tID0gdGhpcy5kb21bIGl0ZW0gXTtcclxuXHRcdHZhciBpdGVtRWxlbWVudCA9IGl0ZW0gPT09ICdoZWFkZXInID9cclxuXHRcdFx0dGhpcy5kb20udGhlYWQgOlxyXG5cdFx0XHR0aGlzLmRvbS50Zm9vdDtcclxuXHJcblx0XHRpZiAoICEgZm9yY2UgJiYgaXRlbURvbS5mbG9hdGluZyApIHtcclxuXHRcdFx0Ly8gZXhpc3RpbmcgZmxvYXRpbmcgZWxlbWVudCAtIHJldXNlIGl0XHJcblx0XHRcdGl0ZW1Eb20uZmxvYXRpbmcucmVtb3ZlQ2xhc3MoICdmaXhlZEhlYWRlci1mbG9hdGluZyBmaXhlZEhlYWRlci1sb2NrZWQnICk7XHJcblx0XHR9XHJcblx0XHRlbHNlIHtcclxuXHRcdFx0aWYgKCBpdGVtRG9tLmZsb2F0aW5nICkge1xyXG5cdFx0XHRcdGl0ZW1Eb20ucGxhY2Vob2xkZXIucmVtb3ZlKCk7XHJcblx0XHRcdFx0dGhpcy5fdW5zaXplKCBpdGVtICk7XHJcblx0XHRcdFx0aXRlbURvbS5mbG9hdGluZy5jaGlsZHJlbigpLmRldGFjaCgpO1xyXG5cdFx0XHRcdGl0ZW1Eb20uZmxvYXRpbmcucmVtb3ZlKCk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGl0ZW1Eb20uZmxvYXRpbmcgPSAkKCBkdC50YWJsZSgpLm5vZGUoKS5jbG9uZU5vZGUoIGZhbHNlICkgKVxyXG5cdFx0XHRcdC5jc3MoICd0YWJsZS1sYXlvdXQnLCAnZml4ZWQnIClcclxuXHRcdFx0XHQucmVtb3ZlQXR0ciggJ2lkJyApXHJcblx0XHRcdFx0LmFwcGVuZCggaXRlbUVsZW1lbnQgKVxyXG5cdFx0XHRcdC5hcHBlbmRUbyggJ2JvZHknICk7XHJcblxyXG5cdFx0XHQvLyBJbnNlcnQgYSBmYWtlIHRoZWFkL3Rmb290IGludG8gdGhlIERhdGFUYWJsZSB0byBzdG9wIGl0IGp1bXBpbmcgYXJvdW5kXHJcblx0XHRcdGl0ZW1Eb20ucGxhY2Vob2xkZXIgPSBpdGVtRWxlbWVudC5jbG9uZSggZmFsc2UgKVxyXG5cdFx0XHRpdGVtRG9tLnBsYWNlaG9sZGVyXHJcblx0XHRcdFx0LmZpbmQoICcqW2lkXScgKVxyXG5cdFx0XHRcdC5yZW1vdmVBdHRyKCAnaWQnICk7XHJcblxyXG5cdFx0XHRpdGVtRG9tLmhvc3QucHJlcGVuZCggaXRlbURvbS5wbGFjZWhvbGRlciApO1xyXG5cclxuXHRcdFx0Ly8gQ2xvbmUgd2lkdGhzXHJcblx0XHRcdHRoaXMuX21hdGNoV2lkdGhzKCBpdGVtRG9tLnBsYWNlaG9sZGVyLCBpdGVtRG9tLmZsb2F0aW5nICk7XHJcblx0XHR9XHJcblx0fSxcclxuXHJcblx0LyoqXHJcblx0ICogQ29weSB3aWR0aHMgZnJvbSB0aGUgY2VsbHMgaW4gb25lIGVsZW1lbnQgdG8gYW5vdGhlci4gVGhpcyBpcyByZXF1aXJlZFxyXG5cdCAqIGZvciB0aGUgZm9vdGVyIGFzIHRoZSBmb290ZXIgaW4gdGhlIG1haW4gdGFibGUgdGFrZXMgaXRzIHNpemVzIGZyb20gdGhlXHJcblx0ICogaGVhZGVyIGNvbHVtbnMuIFRoYXQgaXNuJ3QgcHJlc2VudCBpbiB0aGUgZm9vdGVyIHNvIHRvIGhhdmUgaXQgc3RpbGxcclxuXHQgKiBhbGlnbiBjb3JyZWN0bHksIHRoZSBzaXplcyBuZWVkIHRvIGJlIGNvcGllZCBvdmVyLiBJdCBpcyBhbHNvIHJlcXVpcmVkXHJcblx0ICogZm9yIHRoZSBoZWFkZXIgd2hlbiBhdXRvIHdpZHRoIGlzIG5vdCBlbmFibGVkXHJcblx0ICpcclxuXHQgKiBAcGFyYW0gIHtqUXVlcnl9IGZyb20gQ29weSB3aWR0aHMgZnJvbVxyXG5cdCAqIEBwYXJhbSAge2pRdWVyeX0gdG8gICBDb3B5IHdpZHRocyB0b1xyXG5cdCAqIEBwcml2YXRlXHJcblx0ICovXHJcblx0X21hdGNoV2lkdGhzOiBmdW5jdGlvbiAoIGZyb20sIHRvICkge1xyXG5cdFx0dmFyIGdldCA9IGZ1bmN0aW9uICggbmFtZSApIHtcclxuXHRcdFx0cmV0dXJuICQobmFtZSwgZnJvbSlcclxuXHRcdFx0XHQubWFwKCBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gJCh0aGlzKS53aWR0aCgpO1xyXG5cdFx0XHRcdH0gKS50b0FycmF5KCk7XHJcblx0XHR9O1xyXG5cclxuXHRcdHZhciBzZXQgPSBmdW5jdGlvbiAoIG5hbWUsIHRvV2lkdGhzICkge1xyXG5cdFx0XHQkKG5hbWUsIHRvKS5lYWNoKCBmdW5jdGlvbiAoIGkgKSB7XHJcblx0XHRcdFx0JCh0aGlzKS5jc3MoIHtcclxuXHRcdFx0XHRcdHdpZHRoOiB0b1dpZHRoc1tpXSxcclxuXHRcdFx0XHRcdG1pbldpZHRoOiB0b1dpZHRoc1tpXVxyXG5cdFx0XHRcdH0gKTtcclxuXHRcdFx0fSApO1xyXG5cdFx0fTtcclxuXHJcblx0XHR2YXIgdGhXaWR0aHMgPSBnZXQoICd0aCcgKTtcclxuXHRcdHZhciB0ZFdpZHRocyA9IGdldCggJ3RkJyApO1xyXG5cclxuXHRcdHNldCggJ3RoJywgdGhXaWR0aHMgKTtcclxuXHRcdHNldCggJ3RkJywgdGRXaWR0aHMgKTtcclxuXHR9LFxyXG5cclxuXHQvKipcclxuXHQgKiBSZW1vdmUgYXNzaWduZWQgd2lkdGhzIGZyb20gdGhlIGNlbGxzIGluIGFuIGVsZW1lbnQuIFRoaXMgaXMgcmVxdWlyZWRcclxuXHQgKiB3aGVuIGluc2VydGluZyB0aGUgZm9vdGVyIGJhY2sgaW50byB0aGUgbWFpbiB0YWJsZSBzbyB0aGUgc2l6ZSBpcyBkZWZpbmVkXHJcblx0ICogYnkgdGhlIGhlYWRlciBjb2x1bW5zIGFuZCBhbHNvIHdoZW4gYXV0byB3aWR0aCBpcyBkaXNhYmxlZCBpbiB0aGVcclxuXHQgKiBEYXRhVGFibGUuXHJcblx0ICpcclxuXHQgKiBAcGFyYW0gIHtzdHJpbmd9IGl0ZW0gVGhlIGBoZWFkZXJgIG9yIGBmb290ZXJgXHJcblx0ICogQHByaXZhdGVcclxuXHQgKi9cclxuXHRfdW5zaXplOiBmdW5jdGlvbiAoIGl0ZW0gKSB7XHJcblx0XHR2YXIgZWwgPSB0aGlzLmRvbVsgaXRlbSBdLmZsb2F0aW5nO1xyXG5cclxuXHRcdGlmICggZWwgJiYgKGl0ZW0gPT09ICdmb290ZXInIHx8IChpdGVtID09PSAnaGVhZGVyJyAmJiAhIHRoaXMucy5hdXRvV2lkdGgpKSApIHtcclxuXHRcdFx0JCgndGgsIHRkJywgZWwpLmNzcygge1xyXG5cdFx0XHRcdHdpZHRoOiAnJyxcclxuXHRcdFx0XHRtaW5XaWR0aDogJydcclxuXHRcdFx0fSApO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZSBpZiAoIGVsICYmIGl0ZW0gPT09ICdoZWFkZXInICkge1xyXG5cdFx0XHQkKCd0aCwgdGQnLCBlbCkuY3NzKCAnbWluLXdpZHRoJywgJycgKTtcclxuXHRcdH1cclxuXHR9LFxyXG5cclxuXHQvKipcclxuXHQgKiBSZXBvc2l0aW9uIHRoZSBmbG9hdGluZyBlbGVtZW50cyB0byB0YWtlIGFjY291bnQgb2YgaG9yaXpvbnRhbCBwYWdlXHJcblx0ICogc2Nyb2xsXHJcblx0ICpcclxuXHQgKiBAcGFyYW0gIHtzdHJpbmd9IGl0ZW0gICAgICAgVGhlIGBoZWFkZXJgIG9yIGBmb290ZXJgXHJcblx0ICogQHBhcmFtICB7aW50fSAgICBzY3JvbGxMZWZ0IERvY3VtZW50IHNjcm9sbExlZnRcclxuXHQgKiBAcHJpdmF0ZVxyXG5cdCAqL1xyXG5cdF9ob3Jpem9udGFsOiBmdW5jdGlvbiAoIGl0ZW0sIHNjcm9sbExlZnQgKVxyXG5cdHtcclxuXHRcdHZhciBpdGVtRG9tID0gdGhpcy5kb21bIGl0ZW0gXTtcclxuXHRcdHZhciBwb3NpdGlvbiA9IHRoaXMucy5wb3NpdGlvbjtcclxuXHRcdHZhciBsYXN0U2Nyb2xsTGVmdCA9IHRoaXMucy5zY3JvbGxMZWZ0O1xyXG5cclxuXHRcdGlmICggaXRlbURvbS5mbG9hdGluZyAmJiBsYXN0U2Nyb2xsTGVmdFsgaXRlbSBdICE9PSBzY3JvbGxMZWZ0ICkge1xyXG5cdFx0XHRpdGVtRG9tLmZsb2F0aW5nLmNzcyggJ2xlZnQnLCBwb3NpdGlvbi5sZWZ0IC0gc2Nyb2xsTGVmdCApO1xyXG5cclxuXHRcdFx0bGFzdFNjcm9sbExlZnRbIGl0ZW0gXSA9IHNjcm9sbExlZnQ7XHJcblx0XHR9XHJcblx0fSxcclxuXHJcblx0LyoqXHJcblx0ICogQ2hhbmdlIGZyb20gb25lIGRpc3BsYXkgbW9kZSB0byBhbm90aGVyLiBFYWNoIGZpeGVkIGl0ZW0gY2FuIGJlIGluIG9uZVxyXG5cdCAqIG9mOlxyXG5cdCAqXHJcblx0ICogKiBgaW4tcGxhY2VgIC0gSW4gdGhlIG1haW4gRGF0YVRhYmxlXHJcblx0ICogKiBgaW5gIC0gRmxvYXRpbmcgb3ZlciB0aGUgRGF0YVRhYmxlXHJcblx0ICogKiBgYmVsb3dgIC0gKEhlYWRlciBvbmx5KSBGaXhlZCB0byB0aGUgYm90dG9tIG9mIHRoZSB0YWJsZSBib2R5XHJcblx0ICogKiBgYWJvdmVgIC0gKEZvb3RlciBvbmx5KSBGaXhlZCB0byB0aGUgdG9wIG9mIHRoZSB0YWJsZSBib2R5XHJcblx0ICogXHJcblx0ICogQHBhcmFtICB7c3RyaW5nfSAgbW9kZSAgICAgICAgTW9kZSB0aGF0IHRoZSBpdGVtIHNob3VsZCBiZSBzaG93biBpblxyXG5cdCAqIEBwYXJhbSAge3N0cmluZ30gIGl0ZW0gICAgICAgICdoZWFkZXInIG9yICdmb290ZXInXHJcblx0ICogQHBhcmFtICB7Ym9vbGVhbn0gZm9yY2VDaGFuZ2UgRm9yY2UgYSByZWRyYXcgb2YgdGhlIG1vZGUsIGV2ZW4gaWYgYWxyZWFkeVxyXG5cdCAqICAgICBpbiB0aGF0IG1vZGUuXHJcblx0ICogQHByaXZhdGVcclxuXHQgKi9cclxuXHRfbW9kZUNoYW5nZTogZnVuY3Rpb24gKCBtb2RlLCBpdGVtLCBmb3JjZUNoYW5nZSApXHJcblx0e1xyXG5cdFx0dmFyIGR0ID0gdGhpcy5zLmR0O1xyXG5cdFx0dmFyIGl0ZW1Eb20gPSB0aGlzLmRvbVsgaXRlbSBdO1xyXG5cdFx0dmFyIHBvc2l0aW9uID0gdGhpcy5zLnBvc2l0aW9uO1xyXG5cclxuXHRcdC8vIFJlY29yZCBmb2N1cy4gQnJvd3NlcidzIHdpbGwgY2F1c2UgaW5wdXQgZWxlbWVudHMgdG8gbG9vc2UgZm9jdXMgaWZcclxuXHRcdC8vIHRoZXkgYXJlIGluc2VydGVkIGVsc2Ugd2hlcmUgaW4gdGhlIGRvY1xyXG5cdFx0dmFyIHRhYmxlUGFydCA9IHRoaXMuZG9tWyBpdGVtPT09J2Zvb3RlcicgPyAndGZvb3QnIDogJ3RoZWFkJyBdO1xyXG5cdFx0dmFyIGZvY3VzID0gJC5jb250YWlucyggdGFibGVQYXJ0WzBdLCBkb2N1bWVudC5hY3RpdmVFbGVtZW50ICkgP1xyXG5cdFx0XHRkb2N1bWVudC5hY3RpdmVFbGVtZW50IDpcclxuXHRcdFx0bnVsbDtcclxuXHJcblx0XHRpZiAoIG1vZGUgPT09ICdpbi1wbGFjZScgKSB7XHJcblx0XHRcdC8vIEluc2VydCB0aGUgaGVhZGVyIGJhY2sgaW50byB0aGUgdGFibGUncyByZWFsIGhlYWRlclxyXG5cdFx0XHRpZiAoIGl0ZW1Eb20ucGxhY2Vob2xkZXIgKSB7XHJcblx0XHRcdFx0aXRlbURvbS5wbGFjZWhvbGRlci5yZW1vdmUoKTtcclxuXHRcdFx0XHRpdGVtRG9tLnBsYWNlaG9sZGVyID0gbnVsbDtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0dGhpcy5fdW5zaXplKCBpdGVtICk7XHJcblxyXG5cdFx0XHRpZiAoIGl0ZW0gPT09ICdoZWFkZXInICkge1xyXG5cdFx0XHRcdGl0ZW1Eb20uaG9zdC5wcmVwZW5kKCB0aGlzLmRvbS50aGVhZCApO1xyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2Uge1xyXG5cdFx0XHRcdGl0ZW1Eb20uaG9zdC5hcHBlbmQoIHRoaXMuZG9tLnRmb290ICk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmICggaXRlbURvbS5mbG9hdGluZyApIHtcclxuXHRcdFx0XHRpdGVtRG9tLmZsb2F0aW5nLnJlbW92ZSgpO1xyXG5cdFx0XHRcdGl0ZW1Eb20uZmxvYXRpbmcgPSBudWxsO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRlbHNlIGlmICggbW9kZSA9PT0gJ2luJyApIHtcclxuXHRcdFx0Ly8gUmVtb3ZlIHRoZSBoZWFkZXIgZnJvbSB0aGUgcmVhZCBoZWFkZXIgYW5kIGluc2VydCBpbnRvIGEgZml4ZWRcclxuXHRcdFx0Ly8gcG9zaXRpb25lZCBmbG9hdGluZyB0YWJsZSBjbG9uZVxyXG5cdFx0XHR0aGlzLl9jbG9uZSggaXRlbSwgZm9yY2VDaGFuZ2UgKTtcclxuXHJcblx0XHRcdGl0ZW1Eb20uZmxvYXRpbmdcclxuXHRcdFx0XHQuYWRkQ2xhc3MoICdmaXhlZEhlYWRlci1mbG9hdGluZycgKVxyXG5cdFx0XHRcdC5jc3MoIGl0ZW0gPT09ICdoZWFkZXInID8gJ3RvcCcgOiAnYm90dG9tJywgdGhpcy5jW2l0ZW0rJ09mZnNldCddIClcclxuXHRcdFx0XHQuY3NzKCAnbGVmdCcsIHBvc2l0aW9uLmxlZnQrJ3B4JyApXHJcblx0XHRcdFx0LmNzcyggJ3dpZHRoJywgcG9zaXRpb24ud2lkdGgrJ3B4JyApO1xyXG5cclxuXHRcdFx0aWYgKCBpdGVtID09PSAnZm9vdGVyJyApIHtcclxuXHRcdFx0XHRpdGVtRG9tLmZsb2F0aW5nLmNzcyggJ3RvcCcsICcnICk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdGVsc2UgaWYgKCBtb2RlID09PSAnYmVsb3cnICkgeyAvLyBvbmx5IHVzZWQgZm9yIHRoZSBoZWFkZXJcclxuXHRcdFx0Ly8gRml4IHRoZSBwb3NpdGlvbiBvZiB0aGUgZmxvYXRpbmcgaGVhZGVyIGF0IGJhc2Ugb2YgdGhlIHRhYmxlIGJvZHlcclxuXHRcdFx0dGhpcy5fY2xvbmUoIGl0ZW0sIGZvcmNlQ2hhbmdlICk7XHJcblxyXG5cdFx0XHRpdGVtRG9tLmZsb2F0aW5nXHJcblx0XHRcdFx0LmFkZENsYXNzKCAnZml4ZWRIZWFkZXItbG9ja2VkJyApXHJcblx0XHRcdFx0LmNzcyggJ3RvcCcsIHBvc2l0aW9uLnRmb290VG9wIC0gcG9zaXRpb24udGhlYWRIZWlnaHQgKVxyXG5cdFx0XHRcdC5jc3MoICdsZWZ0JywgcG9zaXRpb24ubGVmdCsncHgnIClcclxuXHRcdFx0XHQuY3NzKCAnd2lkdGgnLCBwb3NpdGlvbi53aWR0aCsncHgnICk7XHJcblx0XHR9XHJcblx0XHRlbHNlIGlmICggbW9kZSA9PT0gJ2Fib3ZlJyApIHsgLy8gb25seSB1c2VkIGZvciB0aGUgZm9vdGVyXHJcblx0XHRcdC8vIEZpeCB0aGUgcG9zaXRpb24gb2YgdGhlIGZsb2F0aW5nIGZvb3RlciBhdCB0b3Agb2YgdGhlIHRhYmxlIGJvZHlcclxuXHRcdFx0dGhpcy5fY2xvbmUoIGl0ZW0sIGZvcmNlQ2hhbmdlICk7XHJcblxyXG5cdFx0XHRpdGVtRG9tLmZsb2F0aW5nXHJcblx0XHRcdFx0LmFkZENsYXNzKCAnZml4ZWRIZWFkZXItbG9ja2VkJyApXHJcblx0XHRcdFx0LmNzcyggJ3RvcCcsIHBvc2l0aW9uLnRib2R5VG9wIClcclxuXHRcdFx0XHQuY3NzKCAnbGVmdCcsIHBvc2l0aW9uLmxlZnQrJ3B4JyApXHJcblx0XHRcdFx0LmNzcyggJ3dpZHRoJywgcG9zaXRpb24ud2lkdGgrJ3B4JyApO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8vIFJlc3RvcmUgZm9jdXMgaWYgaXQgd2FzIGxvc3RcclxuXHRcdGlmICggZm9jdXMgJiYgZm9jdXMgIT09IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgKSB7XHJcblx0XHRcdGZvY3VzLmZvY3VzKCk7XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5zLnNjcm9sbExlZnQuaGVhZGVyID0gLTE7XHJcblx0XHR0aGlzLnMuc2Nyb2xsTGVmdC5mb290ZXIgPSAtMTtcclxuXHRcdHRoaXMuc1tpdGVtKydNb2RlJ10gPSBtb2RlO1xyXG5cdH0sXHJcblxyXG5cdC8qKlxyXG5cdCAqIENhY2hlIHRoZSBwb3NpdGlvbmFsIGluZm9ybWF0aW9uIHRoYXQgaXMgcmVxdWlyZWQgZm9yIHRoZSBtb2RlXHJcblx0ICogY2FsY3VsYXRpb25zIHRoYXQgRml4ZWRIZWFkZXIgcGVyZm9ybXMuXHJcblx0ICpcclxuXHQgKiBAcHJpdmF0ZVxyXG5cdCAqL1xyXG5cdF9wb3NpdGlvbnM6IGZ1bmN0aW9uICgpXHJcblx0e1xyXG5cdFx0dmFyIGR0ID0gdGhpcy5zLmR0O1xyXG5cdFx0dmFyIHRhYmxlID0gZHQudGFibGUoKTtcclxuXHRcdHZhciBwb3NpdGlvbiA9IHRoaXMucy5wb3NpdGlvbjtcclxuXHRcdHZhciBkb20gPSB0aGlzLmRvbTtcclxuXHRcdHZhciB0YWJsZU5vZGUgPSAkKHRhYmxlLm5vZGUoKSk7XHJcblxyXG5cdFx0Ly8gTmVlZCB0byB1c2UgdGhlIGhlYWRlciBhbmQgZm9vdGVyIHRoYXQgYXJlIGluIHRoZSBtYWluIHRhYmxlLFxyXG5cdFx0Ly8gcmVnYXJkbGVzcyBvZiBpZiB0aGV5IGFyZSBjbG9uZXMsIHNpbmNlIHRoZXkgaG9sZCB0aGUgcG9zaXRpb25zIHdlXHJcblx0XHQvLyB3YW50IHRvIG1lYXN1cmUgZnJvbVxyXG5cdFx0dmFyIHRoZWFkID0gdGFibGVOb2RlLmNoaWxkcmVuKCd0aGVhZCcpO1xyXG5cdFx0dmFyIHRmb290ID0gdGFibGVOb2RlLmNoaWxkcmVuKCd0Zm9vdCcpO1xyXG5cdFx0dmFyIHRib2R5ID0gZG9tLnRib2R5O1xyXG5cclxuXHRcdHBvc2l0aW9uLnZpc2libGUgPSB0YWJsZU5vZGUuaXMoJzp2aXNpYmxlJyk7XHJcblx0XHRwb3NpdGlvbi53aWR0aCA9IHRhYmxlTm9kZS5vdXRlcldpZHRoKCk7XHJcblx0XHRwb3NpdGlvbi5sZWZ0ID0gdGFibGVOb2RlLm9mZnNldCgpLmxlZnQ7XHJcblx0XHRwb3NpdGlvbi50aGVhZFRvcCA9IHRoZWFkLm9mZnNldCgpLnRvcDtcclxuXHRcdHBvc2l0aW9uLnRib2R5VG9wID0gdGJvZHkub2Zmc2V0KCkudG9wO1xyXG5cdFx0cG9zaXRpb24udGhlYWRIZWlnaHQgPSBwb3NpdGlvbi50Ym9keVRvcCAtIHBvc2l0aW9uLnRoZWFkVG9wO1xyXG5cclxuXHRcdGlmICggdGZvb3QubGVuZ3RoICkge1xyXG5cdFx0XHRwb3NpdGlvbi50Zm9vdFRvcCA9IHRmb290Lm9mZnNldCgpLnRvcDtcclxuXHRcdFx0cG9zaXRpb24udGZvb3RCb3R0b20gPSBwb3NpdGlvbi50Zm9vdFRvcCArIHRmb290Lm91dGVySGVpZ2h0KCk7XHJcblx0XHRcdHBvc2l0aW9uLnRmb290SGVpZ2h0ID0gcG9zaXRpb24udGZvb3RCb3R0b20gLSBwb3NpdGlvbi50Zm9vdFRvcDtcclxuXHRcdH1cclxuXHRcdGVsc2Uge1xyXG5cdFx0XHRwb3NpdGlvbi50Zm9vdFRvcCA9IHBvc2l0aW9uLnRib2R5VG9wICsgdGJvZHkub3V0ZXJIZWlnaHQoKTtcclxuXHRcdFx0cG9zaXRpb24udGZvb3RCb3R0b20gPSBwb3NpdGlvbi50Zm9vdFRvcDtcclxuXHRcdFx0cG9zaXRpb24udGZvb3RIZWlnaHQgPSBwb3NpdGlvbi50Zm9vdFRvcDtcclxuXHRcdH1cclxuXHR9LFxyXG5cclxuXHJcblx0LyoqXHJcblx0ICogTW9kZSBjYWxjdWxhdGlvbiAtIGRldGVybWluZSB3aGF0IG1vZGUgdGhlIGZpeGVkIGl0ZW1zIHNob3VsZCBiZSBwbGFjZWRcclxuXHQgKiBpbnRvLlxyXG5cdCAqXHJcblx0ICogQHBhcmFtICB7Ym9vbGVhbn0gZm9yY2VDaGFuZ2UgRm9yY2UgYSByZWRyYXcgb2YgdGhlIG1vZGUsIGV2ZW4gaWYgYWxyZWFkeVxyXG5cdCAqICAgICBpbiB0aGF0IG1vZGUuXHJcblx0ICogQHByaXZhdGVcclxuXHQgKi9cclxuXHRfc2Nyb2xsOiBmdW5jdGlvbiAoIGZvcmNlQ2hhbmdlIClcclxuXHR7XHJcblx0XHR2YXIgd2luZG93VG9wID0gJChkb2N1bWVudCkuc2Nyb2xsVG9wKCk7XHJcblx0XHR2YXIgd2luZG93TGVmdCA9ICQoZG9jdW1lbnQpLnNjcm9sbExlZnQoKTtcclxuXHRcdHZhciBwb3NpdGlvbiA9IHRoaXMucy5wb3NpdGlvbjtcclxuXHRcdHZhciBoZWFkZXJNb2RlLCBmb290ZXJNb2RlO1xyXG5cclxuXHRcdGlmICggISB0aGlzLnMuZW5hYmxlICkge1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKCB0aGlzLmMuaGVhZGVyICkge1xyXG5cdFx0XHRpZiAoICEgcG9zaXRpb24udmlzaWJsZSB8fCB3aW5kb3dUb3AgPD0gcG9zaXRpb24udGhlYWRUb3AgLSB0aGlzLmMuaGVhZGVyT2Zmc2V0ICkge1xyXG5cdFx0XHRcdGhlYWRlck1vZGUgPSAnaW4tcGxhY2UnO1xyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2UgaWYgKCB3aW5kb3dUb3AgPD0gcG9zaXRpb24udGZvb3RUb3AgLSBwb3NpdGlvbi50aGVhZEhlaWdodCAtIHRoaXMuYy5oZWFkZXJPZmZzZXQgKSB7XHJcblx0XHRcdFx0aGVhZGVyTW9kZSA9ICdpbic7XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZSB7XHJcblx0XHRcdFx0aGVhZGVyTW9kZSA9ICdiZWxvdyc7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmICggZm9yY2VDaGFuZ2UgfHwgaGVhZGVyTW9kZSAhPT0gdGhpcy5zLmhlYWRlck1vZGUgKSB7XHJcblx0XHRcdFx0dGhpcy5fbW9kZUNoYW5nZSggaGVhZGVyTW9kZSwgJ2hlYWRlcicsIGZvcmNlQ2hhbmdlICk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHRoaXMuX2hvcml6b250YWwoICdoZWFkZXInLCB3aW5kb3dMZWZ0ICk7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKCB0aGlzLmMuZm9vdGVyICYmIHRoaXMuZG9tLnRmb290Lmxlbmd0aCApIHtcclxuXHRcdFx0aWYgKCAhIHBvc2l0aW9uLnZpc2libGUgfHwgd2luZG93VG9wICsgcG9zaXRpb24ud2luZG93SGVpZ2h0ID49IHBvc2l0aW9uLnRmb290Qm90dG9tICsgdGhpcy5jLmZvb3Rlck9mZnNldCApIHtcclxuXHRcdFx0XHRmb290ZXJNb2RlID0gJ2luLXBsYWNlJztcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlIGlmICggcG9zaXRpb24ud2luZG93SGVpZ2h0ICsgd2luZG93VG9wID4gcG9zaXRpb24udGJvZHlUb3AgKyBwb3NpdGlvbi50Zm9vdEhlaWdodCArIHRoaXMuYy5mb290ZXJPZmZzZXQgKSB7XHJcblx0XHRcdFx0Zm9vdGVyTW9kZSA9ICdpbic7XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZSB7XHJcblx0XHRcdFx0Zm9vdGVyTW9kZSA9ICdhYm92ZSc7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmICggZm9yY2VDaGFuZ2UgfHwgZm9vdGVyTW9kZSAhPT0gdGhpcy5zLmZvb3Rlck1vZGUgKSB7XHJcblx0XHRcdFx0dGhpcy5fbW9kZUNoYW5nZSggZm9vdGVyTW9kZSwgJ2Zvb3RlcicsIGZvcmNlQ2hhbmdlICk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHRoaXMuX2hvcml6b250YWwoICdmb290ZXInLCB3aW5kb3dMZWZ0ICk7XHJcblx0XHR9XHJcblx0fVxyXG59ICk7XHJcblxyXG5cclxuLyoqXHJcbiAqIFZlcnNpb25cclxuICogQHR5cGUge1N0cmluZ31cclxuICogQHN0YXRpY1xyXG4gKi9cclxuRml4ZWRIZWFkZXIudmVyc2lvbiA9IFwiMy4xLjNcIjtcclxuXHJcbi8qKlxyXG4gKiBEZWZhdWx0c1xyXG4gKiBAdHlwZSB7T2JqZWN0fVxyXG4gKiBAc3RhdGljXHJcbiAqL1xyXG5GaXhlZEhlYWRlci5kZWZhdWx0cyA9IHtcclxuXHRoZWFkZXI6IHRydWUsXHJcblx0Zm9vdGVyOiBmYWxzZSxcclxuXHRoZWFkZXJPZmZzZXQ6IDAsXHJcblx0Zm9vdGVyT2Zmc2V0OiAwXHJcbn07XHJcblxyXG5cclxuLyogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICpcclxuICogRGF0YVRhYmxlcyBpbnRlcmZhY2VzXHJcbiAqL1xyXG5cclxuLy8gQXR0YWNoIGZvciBjb25zdHJ1Y3RvciBhY2Nlc3NcclxuJC5mbi5kYXRhVGFibGUuRml4ZWRIZWFkZXIgPSBGaXhlZEhlYWRlcjtcclxuJC5mbi5EYXRhVGFibGUuRml4ZWRIZWFkZXIgPSBGaXhlZEhlYWRlcjtcclxuXHJcblxyXG4vLyBEYXRhVGFibGVzIGNyZWF0aW9uIC0gY2hlY2sgaWYgdGhlIEZpeGVkSGVhZGVyIG9wdGlvbiBoYXMgYmVlbiBkZWZpbmVkIG9uIHRoZVxyXG4vLyB0YWJsZSBhbmQgaWYgc28sIGluaXRpYWxpc2VcclxuJChkb2N1bWVudCkub24oICdpbml0LmR0LmR0ZmgnLCBmdW5jdGlvbiAoZSwgc2V0dGluZ3MsIGpzb24pIHtcclxuXHRpZiAoIGUubmFtZXNwYWNlICE9PSAnZHQnICkge1xyXG5cdFx0cmV0dXJuO1xyXG5cdH1cclxuXHJcblx0dmFyIGluaXQgPSBzZXR0aW5ncy5vSW5pdC5maXhlZEhlYWRlcjtcclxuXHR2YXIgZGVmYXVsdHMgPSBEYXRhVGFibGUuZGVmYXVsdHMuZml4ZWRIZWFkZXI7XHJcblxyXG5cdGlmICggKGluaXQgfHwgZGVmYXVsdHMpICYmICEgc2V0dGluZ3MuX2ZpeGVkSGVhZGVyICkge1xyXG5cdFx0dmFyIG9wdHMgPSAkLmV4dGVuZCgge30sIGRlZmF1bHRzLCBpbml0ICk7XHJcblxyXG5cdFx0aWYgKCBpbml0ICE9PSBmYWxzZSApIHtcclxuXHRcdFx0bmV3IEZpeGVkSGVhZGVyKCBzZXR0aW5ncywgb3B0cyApO1xyXG5cdFx0fVxyXG5cdH1cclxufSApO1xyXG5cclxuLy8gRGF0YVRhYmxlcyBBUEkgbWV0aG9kc1xyXG5EYXRhVGFibGUuQXBpLnJlZ2lzdGVyKCAnZml4ZWRIZWFkZXIoKScsIGZ1bmN0aW9uICgpIHt9ICk7XHJcblxyXG5EYXRhVGFibGUuQXBpLnJlZ2lzdGVyKCAnZml4ZWRIZWFkZXIuYWRqdXN0KCknLCBmdW5jdGlvbiAoKSB7XHJcblx0cmV0dXJuIHRoaXMuaXRlcmF0b3IoICd0YWJsZScsIGZ1bmN0aW9uICggY3R4ICkge1xyXG5cdFx0dmFyIGZoID0gY3R4Ll9maXhlZEhlYWRlcjtcclxuXHJcblx0XHRpZiAoIGZoICkge1xyXG5cdFx0XHRmaC51cGRhdGUoKTtcclxuXHRcdH1cclxuXHR9ICk7XHJcbn0gKTtcclxuXHJcbkRhdGFUYWJsZS5BcGkucmVnaXN0ZXIoICdmaXhlZEhlYWRlci5lbmFibGUoKScsIGZ1bmN0aW9uICggZmxhZyApIHtcclxuXHRyZXR1cm4gdGhpcy5pdGVyYXRvciggJ3RhYmxlJywgZnVuY3Rpb24gKCBjdHggKSB7XHJcblx0XHR2YXIgZmggPSBjdHguX2ZpeGVkSGVhZGVyO1xyXG5cclxuXHRcdGZsYWcgPSAoIGZsYWcgIT09IHVuZGVmaW5lZCA/IGZsYWcgOiB0cnVlICk7XHJcblx0XHRpZiAoIGZoICYmIGZsYWcgIT09IGZoLnMuZW5hYmxlICkge1xyXG5cdFx0XHRmaC5lbmFibGUoIGZsYWcgKTtcclxuXHRcdH1cclxuXHR9ICk7XHJcbn0gKTtcclxuXHJcbkRhdGFUYWJsZS5BcGkucmVnaXN0ZXIoICdmaXhlZEhlYWRlci5kaXNhYmxlKCknLCBmdW5jdGlvbiAoICkge1xyXG5cdHJldHVybiB0aGlzLml0ZXJhdG9yKCAndGFibGUnLCBmdW5jdGlvbiAoIGN0eCApIHtcclxuXHRcdHZhciBmaCA9IGN0eC5fZml4ZWRIZWFkZXI7XHJcblxyXG5cdFx0aWYgKCBmaCAmJiBmaC5zLmVuYWJsZSApIHtcclxuXHRcdFx0ZmguZW5hYmxlKCBmYWxzZSApO1xyXG5cdFx0fVxyXG5cdH0gKTtcclxufSApO1xyXG5cclxuJC5lYWNoKCBbJ2hlYWRlcicsICdmb290ZXInXSwgZnVuY3Rpb24gKCBpLCBlbCApIHtcclxuXHREYXRhVGFibGUuQXBpLnJlZ2lzdGVyKCAnZml4ZWRIZWFkZXIuJytlbCsnT2Zmc2V0KCknLCBmdW5jdGlvbiAoIG9mZnNldCApIHtcclxuXHRcdHZhciBjdHggPSB0aGlzLmNvbnRleHQ7XHJcblxyXG5cdFx0aWYgKCBvZmZzZXQgPT09IHVuZGVmaW5lZCApIHtcclxuXHRcdFx0cmV0dXJuIGN0eC5sZW5ndGggJiYgY3R4WzBdLl9maXhlZEhlYWRlciA/XHJcblx0XHRcdFx0Y3R4WzBdLl9maXhlZEhlYWRlcltlbCArJ09mZnNldCddKCkgOlxyXG5cdFx0XHRcdHVuZGVmaW5lZDtcclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gdGhpcy5pdGVyYXRvciggJ3RhYmxlJywgZnVuY3Rpb24gKCBjdHggKSB7XHJcblx0XHRcdHZhciBmaCA9IGN0eC5fZml4ZWRIZWFkZXI7XHJcblxyXG5cdFx0XHRpZiAoIGZoICkge1xyXG5cdFx0XHRcdGZoWyBlbCArJ09mZnNldCcgXSggb2Zmc2V0ICk7XHJcblx0XHRcdH1cclxuXHRcdH0gKTtcclxuXHR9ICk7XHJcbn0gKTtcclxuXHJcblxyXG5yZXR1cm4gRml4ZWRIZWFkZXI7XHJcbn0pKTtcclxuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGdldEJ1aWx0SW4gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2V0LWJ1aWx0LWluJyk7XG52YXIgZGVmaW5lQnVpbHRJbkFjY2Vzc29yID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RlZmluZS1idWlsdC1pbi1hY2Nlc3NvcicpO1xudmFyIHdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbCcpO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG5cbnZhciBTUEVDSUVTID0gd2VsbEtub3duU3ltYm9sKCdzcGVjaWVzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKENPTlNUUlVDVE9SX05BTUUpIHtcbiAgdmFyIENvbnN0cnVjdG9yID0gZ2V0QnVpbHRJbihDT05TVFJVQ1RPUl9OQU1FKTtcblxuICBpZiAoREVTQ1JJUFRPUlMgJiYgQ29uc3RydWN0b3IgJiYgIUNvbnN0cnVjdG9yW1NQRUNJRVNdKSB7XG4gICAgZGVmaW5lQnVpbHRJbkFjY2Vzc29yKENvbnN0cnVjdG9yLCBTUEVDSUVTLCB7XG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH1cbiAgICB9KTtcbiAgfVxufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyICRmaW5kID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LWl0ZXJhdGlvbicpLmZpbmQ7XG52YXIgYWRkVG9VbnNjb3BhYmxlcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hZGQtdG8tdW5zY29wYWJsZXMnKTtcblxudmFyIEZJTkQgPSAnZmluZCc7XG52YXIgU0tJUFNfSE9MRVMgPSB0cnVlO1xuXG4vLyBTaG91bGRuJ3Qgc2tpcCBob2xlc1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLWFycmF5LXByb3RvdHlwZS1maW5kIC0tIHRlc3RpbmdcbmlmIChGSU5EIGluIFtdKSBBcnJheSgxKVtGSU5EXShmdW5jdGlvbiAoKSB7IFNLSVBTX0hPTEVTID0gZmFsc2U7IH0pO1xuXG4vLyBgQXJyYXkucHJvdG90eXBlLmZpbmRgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuZmluZFxuJCh7IHRhcmdldDogJ0FycmF5JywgcHJvdG86IHRydWUsIGZvcmNlZDogU0tJUFNfSE9MRVMgfSwge1xuICBmaW5kOiBmdW5jdGlvbiBmaW5kKGNhbGxiYWNrZm4gLyogLCB0aGF0ID0gdW5kZWZpbmVkICovKSB7XG4gICAgcmV0dXJuICRmaW5kKHRoaXMsIGNhbGxiYWNrZm4sIGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkKTtcbiAgfVxufSk7XG5cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLUBAdW5zY29wYWJsZXNcbmFkZFRvVW5zY29wYWJsZXMoRklORCk7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciAkbWFwID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LWl0ZXJhdGlvbicpLm1hcDtcbnZhciBhcnJheU1ldGhvZEhhc1NwZWNpZXNTdXBwb3J0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LW1ldGhvZC1oYXMtc3BlY2llcy1zdXBwb3J0Jyk7XG5cbnZhciBIQVNfU1BFQ0lFU19TVVBQT1JUID0gYXJyYXlNZXRob2RIYXNTcGVjaWVzU3VwcG9ydCgnbWFwJyk7XG5cbi8vIGBBcnJheS5wcm90b3R5cGUubWFwYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLm1hcFxuLy8gd2l0aCBhZGRpbmcgc3VwcG9ydCBvZiBAQHNwZWNpZXNcbiQoeyB0YXJnZXQ6ICdBcnJheScsIHByb3RvOiB0cnVlLCBmb3JjZWQ6ICFIQVNfU1BFQ0lFU19TVVBQT1JUIH0sIHtcbiAgbWFwOiBmdW5jdGlvbiBtYXAoY2FsbGJhY2tmbiAvKiAsIHRoaXNBcmcgKi8pIHtcbiAgICByZXR1cm4gJG1hcCh0aGlzLCBjYWxsYmFja2ZuLCBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCk7XG4gIH1cbn0pO1xuIl0sIm5hbWVzIjpbImZhY3RvcnkiLCJkZWZpbmUiLCJhbWQiLCIkIiwid2luZG93IiwiZG9jdW1lbnQiLCJleHBvcnRzIiwiX3R5cGVvZiIsIm1vZHVsZSIsInJvb3QiLCJmbiIsImRhdGFUYWJsZSIsInJlcXVpcmUiLCJqUXVlcnkiLCJ1bmRlZmluZWQiLCJEYXRhVGFibGUiLCJfaW5zdENvdW50ZXIiLCJGaXhlZEhlYWRlciIsImR0IiwiY29uZmlnIiwiQXBpIiwiYyIsImV4dGVuZCIsImRlZmF1bHRzIiwicyIsInBvc2l0aW9uIiwidGhlYWRUb3AiLCJ0Ym9keVRvcCIsInRmb290VG9wIiwidGZvb3RCb3R0b20iLCJ3aWR0aCIsImxlZnQiLCJ0Zm9vdEhlaWdodCIsInRoZWFkSGVpZ2h0Iiwid2luZG93SGVpZ2h0IiwiaGVpZ2h0IiwidmlzaWJsZSIsImhlYWRlck1vZGUiLCJmb290ZXJNb2RlIiwiYXV0b1dpZHRoIiwic2V0dGluZ3MiLCJvRmVhdHVyZXMiLCJiQXV0b1dpZHRoIiwibmFtZXNwYWNlIiwic2Nyb2xsTGVmdCIsImhlYWRlciIsImZvb3RlciIsImVuYWJsZSIsImRvbSIsImZsb2F0aW5nSGVhZGVyIiwidGhlYWQiLCJ0YWJsZSIsInRib2R5IiwiYm9keSIsInRmb290IiwiaG9zdCIsImZsb2F0aW5nIiwicGxhY2Vob2xkZXIiLCJwYXJlbnQiLCJkdFNldHRpbmdzIiwiX2ZpeGVkSGVhZGVyIiwiblRhYmxlIiwiaWQiLCJfY29uc3RydWN0b3IiLCJwcm90b3R5cGUiLCJfbW9kZUNoYW5nZSIsImxlbmd0aCIsInVwZGF0ZSIsImhlYWRlck9mZnNldCIsIm9mZnNldCIsImZvb3Rlck9mZnNldCIsIl9wb3NpdGlvbnMiLCJfc2Nyb2xsIiwidGhhdCIsIm9uIiwiYXV0b0hlYWRlciIsIm91dGVySGVpZ2h0IiwiYXV0b0Zvb3RlciIsIm9mZiIsIl9jbG9uZSIsIml0ZW0iLCJmb3JjZSIsIml0ZW1Eb20iLCJpdGVtRWxlbWVudCIsInJlbW92ZUNsYXNzIiwicmVtb3ZlIiwiX3Vuc2l6ZSIsImNoaWxkcmVuIiwiZGV0YWNoIiwibm9kZSIsImNsb25lTm9kZSIsImNzcyIsInJlbW92ZUF0dHIiLCJhcHBlbmQiLCJhcHBlbmRUbyIsImNsb25lIiwiZmluZCIsInByZXBlbmQiLCJfbWF0Y2hXaWR0aHMiLCJmcm9tIiwidG8iLCJnZXQiLCJuYW1lIiwibWFwIiwidG9BcnJheSIsInNldCIsInRvV2lkdGhzIiwiZWFjaCIsImkiLCJtaW5XaWR0aCIsInRoV2lkdGhzIiwidGRXaWR0aHMiLCJlbCIsIl9ob3Jpem9udGFsIiwibGFzdFNjcm9sbExlZnQiLCJtb2RlIiwiZm9yY2VDaGFuZ2UiLCJ0YWJsZVBhcnQiLCJmb2N1cyIsImNvbnRhaW5zIiwiYWN0aXZlRWxlbWVudCIsImFkZENsYXNzIiwidGFibGVOb2RlIiwiaXMiLCJvdXRlcldpZHRoIiwidG9wIiwid2luZG93VG9wIiwic2Nyb2xsVG9wIiwid2luZG93TGVmdCIsInZlcnNpb24iLCJlIiwianNvbiIsImluaXQiLCJvSW5pdCIsImZpeGVkSGVhZGVyIiwib3B0cyIsInJlZ2lzdGVyIiwiaXRlcmF0b3IiLCJjdHgiLCJmaCIsImZsYWciLCJjb250ZXh0Il0sInNvdXJjZVJvb3QiOiIifQ==