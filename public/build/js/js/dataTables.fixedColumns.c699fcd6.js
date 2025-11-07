(self["webpackChunk"] = self["webpackChunk"] || []).push([["js/dataTables.fixedColumns"],{

/***/ "./assets/css/portoadmin/vendor/datatables/extras/TableTools/FixedColumns-3.2.3/js/dataTables.fixedColumns.js":
/*!********************************************************************************************************************!*\
  !*** ./assets/css/portoadmin/vendor/datatables/extras/TableTools/FixedColumns-3.2.3/js/dataTables.fixedColumns.js ***!
  \********************************************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;__webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
__webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
__webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
__webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
__webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
__webpack_require__(/*! core-js/modules/es.parse-int.js */ "./node_modules/core-js/modules/es.parse-int.js");
__webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
__webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
/*! FixedColumns 3.2.3
 * ©2010-2016 SpryMedia Ltd - datatables.net/license
 */

/**
 * @summary     FixedColumns
 * @description Freeze columns in place on a scrolling DataTable
 * @version     3.2.3
 * @file        dataTables.fixedColumns.js
 * @author      SpryMedia Ltd (www.sprymedia.co.uk)
 * @contact     www.sprymedia.co.uk/contact
 * @copyright   Copyright 2010-2016 SpryMedia Ltd.
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
  var _firefoxScroll;

  /**
   * When making use of DataTables' x-axis scrolling feature, you may wish to
   * fix the left most column in place. This plug-in for DataTables provides
   * exactly this option (note for non-scrolling tables, please use the
   * FixedHeader plug-in, which can fix headers and footers). Key
   * features include:
   *
   * * Freezes the left or right most columns to the side of the table
   * * Option to freeze two or more columns
   * * Full integration with DataTables' scrolling options
   * * Speed - FixedColumns is fast in its operation
   *
   *  @class
   *  @constructor
   *  @global
   *  @param {object} dt DataTables instance. With DataTables 1.10 this can also
   *    be a jQuery collection, a jQuery selector, DataTables API instance or
   *    settings object.
   *  @param {object} [init={}] Configuration object for FixedColumns. Options are
   *    defined by {@link FixedColumns.defaults}
   *
   *  @requires jQuery 1.7+
   *  @requires DataTables 1.8.0+
   *
   *  @example
   *      var table = $('#example').dataTable( {
   *        "scrollX": "100%"
   *      } );
   *      new $.fn.dataTable.fixedColumns( table );
   */
  var _FixedColumns = function FixedColumns(dt, init) {
    var that = this;

    /* Sanity check - you just know it will happen */
    if (!(this instanceof _FixedColumns)) {
      alert("FixedColumns warning: FixedColumns must be initialised with the 'new' keyword.");
      return;
    }
    if (init === undefined || init === true) {
      init = {};
    }

    // Use the DataTables Hungarian notation mapping method, if it exists to
    // provide forwards compatibility for camel case variables
    var camelToHungarian = $.fn.dataTable.camelToHungarian;
    if (camelToHungarian) {
      camelToHungarian(_FixedColumns.defaults, _FixedColumns.defaults, true);
      camelToHungarian(_FixedColumns.defaults, init);
    }

    // v1.10 allows the settings object to be got form a number of sources
    var dtSettings = new $.fn.dataTable.Api(dt).settings()[0];

    /**
     * Settings object which contains customisable information for FixedColumns instance
     * @namespace
     * @extends FixedColumns.defaults
     * @private
     */
    this.s = {
      /**
       * DataTables settings objects
       *  @type     object
       *  @default  Obtained from DataTables instance
       */
      "dt": dtSettings,
      /**
       * Number of columns in the DataTable - stored for quick access
       *  @type     int
       *  @default  Obtained from DataTables instance
       */
      "iTableColumns": dtSettings.aoColumns.length,
      /**
       * Original outer widths of the columns as rendered by DataTables - used to calculate
       * the FixedColumns grid bounding box
       *  @type     array.<int>
       *  @default  []
       */
      "aiOuterWidths": [],
      /**
       * Original inner widths of the columns as rendered by DataTables - used to apply widths
       * to the columns
       *  @type     array.<int>
       *  @default  []
       */
      "aiInnerWidths": [],
      /**
       * Is the document layout right-to-left
       * @type boolean
       */
      rtl: $(dtSettings.nTable).css('direction') === 'rtl'
    };

    /**
     * DOM elements used by the class instance
     * @namespace
     * @private
     *
     */
    this.dom = {
      /**
       * DataTables scrolling element
       *  @type     node
       *  @default  null
       */
      "scroller": null,
      /**
       * DataTables header table
       *  @type     node
       *  @default  null
       */
      "header": null,
      /**
       * DataTables body table
       *  @type     node
       *  @default  null
       */
      "body": null,
      /**
       * DataTables footer table
       *  @type     node
       *  @default  null
       */
      "footer": null,
      /**
       * Display grid elements
       * @namespace
       */
      "grid": {
        /**
         * Grid wrapper. This is the container element for the 3x3 grid
         *  @type     node
         *  @default  null
         */
        "wrapper": null,
        /**
         * DataTables scrolling element. This element is the DataTables
         * component in the display grid (making up the main table - i.e.
         * not the fixed columns).
         *  @type     node
         *  @default  null
         */
        "dt": null,
        /**
         * Left fixed column grid components
         * @namespace
         */
        "left": {
          "wrapper": null,
          "head": null,
          "body": null,
          "foot": null
        },
        /**
         * Right fixed column grid components
         * @namespace
         */
        "right": {
          "wrapper": null,
          "head": null,
          "body": null,
          "foot": null
        }
      },
      /**
       * Cloned table nodes
       * @namespace
       */
      "clone": {
        /**
         * Left column cloned table nodes
         * @namespace
         */
        "left": {
          /**
           * Cloned header table
           *  @type     node
           *  @default  null
           */
          "header": null,
          /**
           * Cloned body table
           *  @type     node
           *  @default  null
           */
          "body": null,
          /**
           * Cloned footer table
           *  @type     node
           *  @default  null
           */
          "footer": null
        },
        /**
         * Right column cloned table nodes
         * @namespace
         */
        "right": {
          /**
           * Cloned header table
           *  @type     node
           *  @default  null
           */
          "header": null,
          /**
           * Cloned body table
           *  @type     node
           *  @default  null
           */
          "body": null,
          /**
           * Cloned footer table
           *  @type     node
           *  @default  null
           */
          "footer": null
        }
      }
    };
    if (dtSettings._oFixedColumns) {
      throw 'FixedColumns already initialised on this table';
    }

    /* Attach the instance to the DataTables instance so it can be accessed easily */
    dtSettings._oFixedColumns = this;

    /* Let's do it */
    if (!dtSettings._bInitComplete) {
      dtSettings.oApi._fnCallbackReg(dtSettings, 'aoInitComplete', function () {
        that._fnConstruct(init);
      }, 'FixedColumns');
    } else {
      this._fnConstruct(init);
    }
  };
  $.extend(_FixedColumns.prototype, {
    /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
     * Public methods
     * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

    /**
     * Update the fixed columns - including headers and footers. Note that FixedColumns will
     * automatically update the display whenever the host DataTable redraws.
     *  @returns {void}
     *  @example
     *      var table = $('#example').dataTable( {
     *          "scrollX": "100%"
     *      } );
     *      var fc = new $.fn.dataTable.fixedColumns( table );
     *
     *      // at some later point when the table has been manipulated....
     *      fc.fnUpdate();
     */
    "fnUpdate": function fnUpdate() {
      this._fnDraw(true);
    },
    /**
     * Recalculate the resizes of the 3x3 grid that FixedColumns uses for display of the table.
     * This is useful if you update the width of the table container. Note that FixedColumns will
     * perform this function automatically when the window.resize event is fired.
     *  @returns {void}
     *  @example
     *      var table = $('#example').dataTable( {
     *          "scrollX": "100%"
     *      } );
     *      var fc = new $.fn.dataTable.fixedColumns( table );
     *
     *      // Resize the table container and then have FixedColumns adjust its layout....
     *      $('#content').width( 1200 );
     *      fc.fnRedrawLayout();
     */
    "fnRedrawLayout": function fnRedrawLayout() {
      this._fnColCalc();
      this._fnGridLayout();
      this.fnUpdate();
    },
    /**
     * Mark a row such that it's height should be recalculated when using 'semiauto' row
     * height matching. This function will have no effect when 'none' or 'auto' row height
     * matching is used.
     *  @param   {Node} nTr TR element that should have it's height recalculated
     *  @returns {void}
     *  @example
     *      var table = $('#example').dataTable( {
     *          "scrollX": "100%"
     *      } );
     *      var fc = new $.fn.dataTable.fixedColumns( table );
     *
     *      // manipulate the table - mark the row as needing an update then update the table
     *      // this allows the redraw performed by DataTables fnUpdate to recalculate the row
     *      // height
     *      fc.fnRecalculateHeight();
     *      table.fnUpdate( $('#example tbody tr:eq(0)')[0], ["insert date", 1, 2, 3 ... ]);
     */
    "fnRecalculateHeight": function fnRecalculateHeight(nTr) {
      delete nTr._DTTC_iHeight;
      nTr.style.height = 'auto';
    },
    /**
     * Set the height of a given row - provides cross browser compatibility
     *  @param   {Node} nTarget TR element that should have it's height recalculated
     *  @param   {int} iHeight Height in pixels to set
     *  @returns {void}
     *  @example
     *      var table = $('#example').dataTable( {
     *          "scrollX": "100%"
     *      } );
     *      var fc = new $.fn.dataTable.fixedColumns( table );
     *
     *      // You may want to do this after manipulating a row in the fixed column
     *      fc.fnSetRowHeight( $('#example tbody tr:eq(0)')[0], 50 );
     */
    "fnSetRowHeight": function fnSetRowHeight(nTarget, iHeight) {
      nTarget.style.height = iHeight + "px";
    },
    /**
     * Get data index information about a row or cell in the table body.
     * This function is functionally identical to fnGetPosition in DataTables,
     * taking the same parameter (TH, TD or TR node) and returning exactly the
     * the same information (data index information). THe difference between
     * the two is that this method takes into account the fixed columns in the
     * table, so you can pass in nodes from the master table, or the cloned
     * tables and get the index position for the data in the main table.
     *  @param {node} node TR, TH or TD element to get the information about
     *  @returns {int} If nNode is given as a TR, then a single index is 
     *    returned, or if given as a cell, an array of [row index, column index
     *    (visible), column index (all)] is given.
     */
    "fnGetPosition": function fnGetPosition(node) {
      var idx;
      var inst = this.s.dt.oInstance;
      if (!$(node).parents('.DTFC_Cloned').length) {
        // Not in a cloned table
        return inst.fnGetPosition(node);
      } else {
        // Its in the cloned table, so need to look up position
        if (node.nodeName.toLowerCase() === 'tr') {
          idx = $(node).index();
          return inst.fnGetPosition($('tr', this.s.dt.nTBody)[idx]);
        } else {
          var colIdx = $(node).index();
          idx = $(node.parentNode).index();
          var row = inst.fnGetPosition($('tr', this.s.dt.nTBody)[idx]);
          return [row, colIdx, inst.oApi._fnVisibleToColumnIndex(this.s.dt, colIdx)];
        }
      }
    },
    /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
     * Private methods (they are of course public in JS, but recommended as private)
     * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

    /**
     * Initialisation for FixedColumns
     *  @param   {Object} oInit User settings for initialisation
     *  @returns {void}
     *  @private
     */
    "_fnConstruct": function _fnConstruct(oInit) {
      var i,
        iLen,
        iWidth,
        that = this;

      /* Sanity checking */
      if (typeof this.s.dt.oInstance.fnVersionCheck != 'function' || this.s.dt.oInstance.fnVersionCheck('1.8.0') !== true) {
        alert("FixedColumns " + _FixedColumns.VERSION + " required DataTables 1.8.0 or later. " + "Please upgrade your DataTables installation");
        return;
      }
      if (this.s.dt.oScroll.sX === "") {
        this.s.dt.oInstance.oApi._fnLog(this.s.dt, 1, "FixedColumns is not needed (no " + "x-scrolling in DataTables enabled), so no action will be taken. Use 'FixedHeader' for " + "column fixing when scrolling is not enabled");
        return;
      }

      /* Apply the settings from the user / defaults */
      this.s = $.extend(true, this.s, _FixedColumns.defaults, oInit);

      /* Set up the DOM as we need it and cache nodes */
      var classes = this.s.dt.oClasses;
      this.dom.grid.dt = $(this.s.dt.nTable).parents('div.' + classes.sScrollWrapper)[0];
      this.dom.scroller = $('div.' + classes.sScrollBody, this.dom.grid.dt)[0];

      /* Set up the DOM that we want for the fixed column layout grid */
      this._fnColCalc();
      this._fnGridSetup();

      /* Event handlers */
      var mouseController;
      var mouseDown = false;

      // When the mouse is down (drag scroll) the mouse controller cannot
      // change, as the browser keeps the original element as the scrolling one
      $(this.s.dt.nTableWrapper).on('mousedown.DTFC', function () {
        mouseDown = true;
        $(document).one('mouseup', function () {
          mouseDown = false;
        });
      });

      // When the body is scrolled - scroll the left and right columns
      $(this.dom.scroller).on('mouseover.DTFC touchstart.DTFC', function () {
        if (!mouseDown) {
          mouseController = 'main';
        }
      }).on('scroll.DTFC', function (e) {
        if (!mouseController && e.originalEvent) {
          mouseController = 'main';
        }
        if (mouseController === 'main') {
          if (that.s.iLeftColumns > 0) {
            that.dom.grid.left.liner.scrollTop = that.dom.scroller.scrollTop;
          }
          if (that.s.iRightColumns > 0) {
            that.dom.grid.right.liner.scrollTop = that.dom.scroller.scrollTop;
          }
        }
      });
      var wheelType = 'onwheel' in document.createElement('div') ? 'wheel.DTFC' : 'mousewheel.DTFC';
      if (that.s.iLeftColumns > 0) {
        // When scrolling the left column, scroll the body and right column
        $(that.dom.grid.left.liner).on('mouseover.DTFC touchstart.DTFC', function () {
          if (!mouseDown) {
            mouseController = 'left';
          }
        }).on('scroll.DTFC', function (e) {
          if (!mouseController && e.originalEvent) {
            mouseController = 'left';
          }
          if (mouseController === 'left') {
            that.dom.scroller.scrollTop = that.dom.grid.left.liner.scrollTop;
            if (that.s.iRightColumns > 0) {
              that.dom.grid.right.liner.scrollTop = that.dom.grid.left.liner.scrollTop;
            }
          }
        }).on(wheelType, function (e) {
          // Pass horizontal scrolling through
          var xDelta = e.type === 'wheel' ? -e.originalEvent.deltaX : e.originalEvent.wheelDeltaX;
          that.dom.scroller.scrollLeft -= xDelta;
        });
      }
      if (that.s.iRightColumns > 0) {
        // When scrolling the right column, scroll the body and the left column
        $(that.dom.grid.right.liner).on('mouseover.DTFC touchstart.DTFC', function () {
          if (!mouseDown) {
            mouseController = 'right';
          }
        }).on('scroll.DTFC', function (e) {
          if (!mouseController && e.originalEvent) {
            mouseController = 'right';
          }
          if (mouseController === 'right') {
            that.dom.scroller.scrollTop = that.dom.grid.right.liner.scrollTop;
            if (that.s.iLeftColumns > 0) {
              that.dom.grid.left.liner.scrollTop = that.dom.grid.right.liner.scrollTop;
            }
          }
        }).on(wheelType, function (e) {
          // Pass horizontal scrolling through
          var xDelta = e.type === 'wheel' ? -e.originalEvent.deltaX : e.originalEvent.wheelDeltaX;
          that.dom.scroller.scrollLeft -= xDelta;
        });
      }
      $(window).on('resize.DTFC', function () {
        that._fnGridLayout.call(that);
      });
      var bFirstDraw = true;
      var jqTable = $(this.s.dt.nTable);
      jqTable.on('draw.dt.DTFC', function () {
        that._fnColCalc();
        that._fnDraw.call(that, bFirstDraw);
        bFirstDraw = false;
      }).on('column-sizing.dt.DTFC', function () {
        that._fnColCalc();
        that._fnGridLayout(that);
      }).on('column-visibility.dt.DTFC', function (e, settings, column, vis, recalc) {
        if (recalc === undefined || recalc) {
          that._fnColCalc();
          that._fnGridLayout(that);
          that._fnDraw(true);
        }
      }).on('select.dt.DTFC deselect.dt.DTFC', function (e, dt, type, indexes) {
        if (e.namespace === 'dt') {
          that._fnDraw(false);
        }
      }).on('destroy.dt.DTFC', function () {
        jqTable.off('.DTFC');
        $(that.dom.scroller).off('.DTFC');
        $(window).off('.DTFC');
        $(that.s.dt.nTableWrapper).off('.DTFC');
        $(that.dom.grid.left.liner).off('.DTFC ' + wheelType);
        $(that.dom.grid.left.wrapper).remove();
        $(that.dom.grid.right.liner).off('.DTFC ' + wheelType);
        $(that.dom.grid.right.wrapper).remove();
      });

      /* Get things right to start with - note that due to adjusting the columns, there must be
       * another redraw of the main table. It doesn't need to be a full redraw however.
       */
      this._fnGridLayout();
      this.s.dt.oInstance.fnDraw(false);
    },
    /**
     * Calculate the column widths for the grid layout
     *  @returns {void}
     *  @private
     */
    "_fnColCalc": function _fnColCalc() {
      var that = this;
      var iLeftWidth = 0;
      var iRightWidth = 0;
      this.s.aiInnerWidths = [];
      this.s.aiOuterWidths = [];
      $.each(this.s.dt.aoColumns, function (i, col) {
        var th = $(col.nTh);
        var border;
        if (!th.filter(':visible').length) {
          that.s.aiInnerWidths.push(0);
          that.s.aiOuterWidths.push(0);
        } else {
          // Inner width is used to assign widths to cells
          // Outer width is used to calculate the container
          var iWidth = th.outerWidth();

          // When working with the left most-cell, need to add on the
          // table's border to the outerWidth, since we need to take
          // account of it, but it isn't in any cell
          if (that.s.aiOuterWidths.length === 0) {
            border = $(that.s.dt.nTable).css('border-left-width');
            iWidth += typeof border === 'string' ? 1 : parseInt(border, 10);
          }

          // Likewise with the final column on the right
          if (that.s.aiOuterWidths.length === that.s.dt.aoColumns.length - 1) {
            border = $(that.s.dt.nTable).css('border-right-width');
            iWidth += typeof border === 'string' ? 1 : parseInt(border, 10);
          }
          that.s.aiOuterWidths.push(iWidth);
          that.s.aiInnerWidths.push(th.width());
          if (i < that.s.iLeftColumns) {
            iLeftWidth += iWidth;
          }
          if (that.s.iTableColumns - that.s.iRightColumns <= i) {
            iRightWidth += iWidth;
          }
        }
      });
      this.s.iLeftWidth = iLeftWidth;
      this.s.iRightWidth = iRightWidth;
    },
    /**
     * Set up the DOM for the fixed column. The way the layout works is to create a 1x3 grid
     * for the left column, the DataTable (for which we just reuse the scrolling element DataTable
     * puts into the DOM) and the right column. In each of he two fixed column elements there is a
     * grouping wrapper element and then a head, body and footer wrapper. In each of these we then
     * place the cloned header, body or footer tables. This effectively gives as 3x3 grid structure.
     *  @returns {void}
     *  @private
     */
    "_fnGridSetup": function _fnGridSetup() {
      var that = this;
      var oOverflow = this._fnDTOverflow();
      var block;
      this.dom.body = this.s.dt.nTable;
      this.dom.header = this.s.dt.nTHead.parentNode;
      this.dom.header.parentNode.parentNode.style.position = "relative";
      var nSWrapper = $('<div class="DTFC_ScrollWrapper" style="position:relative; clear:both;">' + '<div class="DTFC_LeftWrapper" style="position:absolute; top:0; left:0;">' + '<div class="DTFC_LeftHeadWrapper" style="position:relative; top:0; left:0; overflow:hidden;"></div>' + '<div class="DTFC_LeftBodyWrapper" style="position:relative; top:0; left:0; overflow:hidden;">' + '<div class="DTFC_LeftBodyLiner" style="position:relative; top:0; left:0; overflow-y:scroll;"></div>' + '</div>' + '<div class="DTFC_LeftFootWrapper" style="position:relative; top:0; left:0; overflow:hidden;"></div>' + '</div>' + '<div class="DTFC_RightWrapper" style="position:absolute; top:0; right:0;">' + '<div class="DTFC_RightHeadWrapper" style="position:relative; top:0; left:0;">' + '<div class="DTFC_RightHeadBlocker DTFC_Blocker" style="position:absolute; top:0; bottom:0;"></div>' + '</div>' + '<div class="DTFC_RightBodyWrapper" style="position:relative; top:0; left:0; overflow:hidden;">' + '<div class="DTFC_RightBodyLiner" style="position:relative; top:0; left:0; overflow-y:scroll;"></div>' + '</div>' + '<div class="DTFC_RightFootWrapper" style="position:relative; top:0; left:0;">' + '<div class="DTFC_RightFootBlocker DTFC_Blocker" style="position:absolute; top:0; bottom:0;"></div>' + '</div>' + '</div>' + '</div>')[0];
      var nLeft = nSWrapper.childNodes[0];
      var nRight = nSWrapper.childNodes[1];
      this.dom.grid.dt.parentNode.insertBefore(nSWrapper, this.dom.grid.dt);
      nSWrapper.appendChild(this.dom.grid.dt);
      this.dom.grid.wrapper = nSWrapper;
      if (this.s.iLeftColumns > 0) {
        this.dom.grid.left.wrapper = nLeft;
        this.dom.grid.left.head = nLeft.childNodes[0];
        this.dom.grid.left.body = nLeft.childNodes[1];
        this.dom.grid.left.liner = $('div.DTFC_LeftBodyLiner', nSWrapper)[0];
        nSWrapper.appendChild(nLeft);
      }
      if (this.s.iRightColumns > 0) {
        this.dom.grid.right.wrapper = nRight;
        this.dom.grid.right.head = nRight.childNodes[0];
        this.dom.grid.right.body = nRight.childNodes[1];
        this.dom.grid.right.liner = $('div.DTFC_RightBodyLiner', nSWrapper)[0];
        nRight.style.right = oOverflow.bar + "px";
        block = $('div.DTFC_RightHeadBlocker', nSWrapper)[0];
        block.style.width = oOverflow.bar + "px";
        block.style.right = -oOverflow.bar + "px";
        this.dom.grid.right.headBlock = block;
        block = $('div.DTFC_RightFootBlocker', nSWrapper)[0];
        block.style.width = oOverflow.bar + "px";
        block.style.right = -oOverflow.bar + "px";
        this.dom.grid.right.footBlock = block;
        nSWrapper.appendChild(nRight);
      }
      if (this.s.dt.nTFoot) {
        this.dom.footer = this.s.dt.nTFoot.parentNode;
        if (this.s.iLeftColumns > 0) {
          this.dom.grid.left.foot = nLeft.childNodes[2];
        }
        if (this.s.iRightColumns > 0) {
          this.dom.grid.right.foot = nRight.childNodes[2];
        }
      }

      // RTL support - swap the position of the left and right columns (#48)
      if (this.s.rtl) {
        $('div.DTFC_RightHeadBlocker', nSWrapper).css({
          left: -oOverflow.bar + 'px',
          right: ''
        });
      }
    },
    /**
     * Style and position the grid used for the FixedColumns layout
     *  @returns {void}
     *  @private
     */
    "_fnGridLayout": function _fnGridLayout() {
      var that = this;
      var oGrid = this.dom.grid;
      var iWidth = $(oGrid.wrapper).width();
      var iBodyHeight = $(this.s.dt.nTable.parentNode).outerHeight();
      var iFullHeight = $(this.s.dt.nTable.parentNode.parentNode).outerHeight();
      var oOverflow = this._fnDTOverflow();
      var iLeftWidth = this.s.iLeftWidth;
      var iRightWidth = this.s.iRightWidth;
      var rtl = $(this.dom.body).css('direction') === 'rtl';
      var wrapper;
      var scrollbarAdjust = function scrollbarAdjust(node, width) {
        if (!oOverflow.bar) {
          // If there is no scrollbar (Macs) we need to hide the auto scrollbar
          node.style.width = width + 20 + "px";
          node.style.paddingRight = "20px";
          node.style.boxSizing = "border-box";
        } else if (that._firefoxScrollError()) {
          // See the above function for why this is required
          if ($(node).height() > 34) {
            node.style.width = width + oOverflow.bar + "px";
          }
        } else {
          // Otherwise just overflow by the scrollbar
          node.style.width = width + oOverflow.bar + "px";
        }
      };

      // When x scrolling - don't paint the fixed columns over the x scrollbar
      if (oOverflow.x) {
        iBodyHeight -= oOverflow.bar;
      }
      oGrid.wrapper.style.height = iFullHeight + "px";
      if (this.s.iLeftColumns > 0) {
        wrapper = oGrid.left.wrapper;
        wrapper.style.width = iLeftWidth + 'px';
        wrapper.style.height = '1px';

        // Swap the position of the left and right columns for rtl (#48)
        // This is always up against the edge, scrollbar on the far side
        if (rtl) {
          wrapper.style.left = '';
          wrapper.style.right = 0;
        } else {
          wrapper.style.left = 0;
          wrapper.style.right = '';
        }
        oGrid.left.body.style.height = iBodyHeight + "px";
        if (oGrid.left.foot) {
          oGrid.left.foot.style.top = (oOverflow.x ? oOverflow.bar : 0) + "px"; // shift footer for scrollbar
        }
        scrollbarAdjust(oGrid.left.liner, iLeftWidth);
        oGrid.left.liner.style.height = iBodyHeight + "px";
        oGrid.left.liner.style.maxHeight = iBodyHeight + "px";
      }
      if (this.s.iRightColumns > 0) {
        wrapper = oGrid.right.wrapper;
        wrapper.style.width = iRightWidth + 'px';
        wrapper.style.height = '1px';

        // Need to take account of the vertical scrollbar
        if (this.s.rtl) {
          wrapper.style.left = oOverflow.y ? oOverflow.bar + 'px' : 0;
          wrapper.style.right = '';
        } else {
          wrapper.style.left = '';
          wrapper.style.right = oOverflow.y ? oOverflow.bar + 'px' : 0;
        }
        oGrid.right.body.style.height = iBodyHeight + "px";
        if (oGrid.right.foot) {
          oGrid.right.foot.style.top = (oOverflow.x ? oOverflow.bar : 0) + "px";
        }
        scrollbarAdjust(oGrid.right.liner, iRightWidth);
        oGrid.right.liner.style.height = iBodyHeight + "px";
        oGrid.right.liner.style.maxHeight = iBodyHeight + "px";
        oGrid.right.headBlock.style.display = oOverflow.y ? 'block' : 'none';
        oGrid.right.footBlock.style.display = oOverflow.y ? 'block' : 'none';
      }
    },
    /**
     * Get information about the DataTable's scrolling state - specifically if the table is scrolling
     * on either the x or y axis, and also the scrollbar width.
     *  @returns {object} Information about the DataTables scrolling state with the properties:
     *    'x', 'y' and 'bar'
     *  @private
     */
    "_fnDTOverflow": function _fnDTOverflow() {
      var nTable = this.s.dt.nTable;
      var nTableScrollBody = nTable.parentNode;
      var out = {
        "x": false,
        "y": false,
        "bar": this.s.dt.oScroll.iBarWidth
      };
      if (nTable.offsetWidth > nTableScrollBody.clientWidth) {
        out.x = true;
      }
      if (nTable.offsetHeight > nTableScrollBody.clientHeight) {
        out.y = true;
      }
      return out;
    },
    /**
     * Clone and position the fixed columns
     *  @returns {void}
     *  @param   {Boolean} bAll Indicate if the header and footer should be updated as well (true)
     *  @private
     */
    "_fnDraw": function _fnDraw(bAll) {
      this._fnGridLayout();
      this._fnCloneLeft(bAll);
      this._fnCloneRight(bAll);

      /* Draw callback function */
      if (this.s.fnDrawCallback !== null) {
        this.s.fnDrawCallback.call(this, this.dom.clone.left, this.dom.clone.right);
      }

      /* Event triggering */
      $(this).trigger('draw.dtfc', {
        "leftClone": this.dom.clone.left,
        "rightClone": this.dom.clone.right
      });
    },
    /**
     * Clone the right columns
     *  @returns {void}
     *  @param   {Boolean} bAll Indicate if the header and footer should be updated as well (true)
     *  @private
     */
    "_fnCloneRight": function _fnCloneRight(bAll) {
      if (this.s.iRightColumns <= 0) {
        return;
      }
      var that = this,
        i,
        jq,
        aiColumns = [];
      for (i = this.s.iTableColumns - this.s.iRightColumns; i < this.s.iTableColumns; i++) {
        if (this.s.dt.aoColumns[i].bVisible) {
          aiColumns.push(i);
        }
      }
      this._fnClone(this.dom.clone.right, this.dom.grid.right, aiColumns, bAll);
    },
    /**
     * Clone the left columns
     *  @returns {void}
     *  @param   {Boolean} bAll Indicate if the header and footer should be updated as well (true)
     *  @private
     */
    "_fnCloneLeft": function _fnCloneLeft(bAll) {
      if (this.s.iLeftColumns <= 0) {
        return;
      }
      var that = this,
        i,
        jq,
        aiColumns = [];
      for (i = 0; i < this.s.iLeftColumns; i++) {
        if (this.s.dt.aoColumns[i].bVisible) {
          aiColumns.push(i);
        }
      }
      this._fnClone(this.dom.clone.left, this.dom.grid.left, aiColumns, bAll);
    },
    /**
     * Make a copy of the layout object for a header or footer element from DataTables. Note that
     * this method will clone the nodes in the layout object.
     *  @returns {Array} Copy of the layout array
     *  @param   {Object} aoOriginal Layout array from DataTables (aoHeader or aoFooter)
     *  @param   {Object} aiColumns Columns to copy
     *  @param   {boolean} events Copy cell events or not
     *  @private
     */
    "_fnCopyLayout": function _fnCopyLayout(aoOriginal, aiColumns, events) {
      var aReturn = [];
      var aClones = [];
      var aCloned = [];
      for (var i = 0, iLen = aoOriginal.length; i < iLen; i++) {
        var aRow = [];
        aRow.nTr = $(aoOriginal[i].nTr).clone(events, false)[0];
        for (var j = 0, jLen = this.s.iTableColumns; j < jLen; j++) {
          if ($.inArray(j, aiColumns) === -1) {
            continue;
          }
          var iCloned = $.inArray(aoOriginal[i][j].cell, aCloned);
          if (iCloned === -1) {
            var nClone = $(aoOriginal[i][j].cell).clone(events, false)[0];
            aClones.push(nClone);
            aCloned.push(aoOriginal[i][j].cell);
            aRow.push({
              "cell": nClone,
              "unique": aoOriginal[i][j].unique
            });
          } else {
            aRow.push({
              "cell": aClones[iCloned],
              "unique": aoOriginal[i][j].unique
            });
          }
        }
        aReturn.push(aRow);
      }
      return aReturn;
    },
    /**
     * Clone the DataTable nodes and place them in the DOM (sized correctly)
     *  @returns {void}
     *  @param   {Object} oClone Object containing the header, footer and body cloned DOM elements
     *  @param   {Object} oGrid Grid object containing the display grid elements for the cloned
     *                    column (left or right)
     *  @param   {Array} aiColumns Column indexes which should be operated on from the DataTable
     *  @param   {Boolean} bAll Indicate if the header and footer should be updated as well (true)
     *  @private
     */
    "_fnClone": function _fnClone(oClone, oGrid, aiColumns, bAll) {
      var that = this,
        i,
        iLen,
        j,
        jLen,
        jq,
        nTarget,
        iColumn,
        nClone,
        iIndex,
        aoCloneLayout,
        jqCloneThead,
        aoFixedHeader,
        dt = this.s.dt;

      /*
       * Header
       */
      if (bAll) {
        $(oClone.header).remove();
        oClone.header = $(this.dom.header).clone(true, false)[0];
        oClone.header.className += " DTFC_Cloned";
        oClone.header.style.width = "100%";
        oGrid.head.appendChild(oClone.header);

        /* Copy the DataTables layout cache for the header for our floating column */
        aoCloneLayout = this._fnCopyLayout(dt.aoHeader, aiColumns, true);
        jqCloneThead = $('>thead', oClone.header);
        jqCloneThead.empty();

        /* Add the created cloned TR elements to the table */
        for (i = 0, iLen = aoCloneLayout.length; i < iLen; i++) {
          jqCloneThead[0].appendChild(aoCloneLayout[i].nTr);
        }

        /* Use the handy _fnDrawHead function in DataTables to do the rowspan/colspan
         * calculations for us
         */
        dt.oApi._fnDrawHead(dt, aoCloneLayout, true);
      } else {
        /* To ensure that we copy cell classes exactly, regardless of colspan, multiple rows
         * etc, we make a copy of the header from the DataTable again, but don't insert the
         * cloned cells, just copy the classes across. To get the matching layout for the
         * fixed component, we use the DataTables _fnDetectHeader method, allowing 1:1 mapping
         */
        aoCloneLayout = this._fnCopyLayout(dt.aoHeader, aiColumns, false);
        aoFixedHeader = [];
        dt.oApi._fnDetectHeader(aoFixedHeader, $('>thead', oClone.header)[0]);
        for (i = 0, iLen = aoCloneLayout.length; i < iLen; i++) {
          for (j = 0, jLen = aoCloneLayout[i].length; j < jLen; j++) {
            aoFixedHeader[i][j].cell.className = aoCloneLayout[i][j].cell.className;

            // If jQuery UI theming is used we need to copy those elements as well
            $('span.DataTables_sort_icon', aoFixedHeader[i][j].cell).each(function () {
              this.className = $('span.DataTables_sort_icon', aoCloneLayout[i][j].cell)[0].className;
            });
          }
        }
      }
      this._fnEqualiseHeights('thead', this.dom.header, oClone.header);

      /*
       * Body
       */
      if (this.s.sHeightMatch == 'auto') {
        /* Remove any heights which have been applied already and let the browser figure it out */
        $('>tbody>tr', that.dom.body).css('height', 'auto');
      }
      if (oClone.body !== null) {
        $(oClone.body).remove();
        oClone.body = null;
      }
      oClone.body = $(this.dom.body).clone(true)[0];
      oClone.body.className += " DTFC_Cloned";
      oClone.body.style.paddingBottom = dt.oScroll.iBarWidth + "px";
      oClone.body.style.marginBottom = dt.oScroll.iBarWidth * 2 + "px"; /* For IE */
      if (oClone.body.getAttribute('id') !== null) {
        oClone.body.removeAttribute('id');
      }
      $('>thead>tr', oClone.body).empty();
      $('>tfoot', oClone.body).remove();
      var nBody = $('tbody', oClone.body)[0];
      $(nBody).empty();
      if (dt.aiDisplay.length > 0) {
        /* Copy the DataTables' header elements to force the column width in exactly the
         * same way that DataTables does it - have the header element, apply the width and
         * colapse it down
         */
        var nInnerThead = $('>thead>tr', oClone.body)[0];
        for (iIndex = 0; iIndex < aiColumns.length; iIndex++) {
          iColumn = aiColumns[iIndex];
          nClone = $(dt.aoColumns[iColumn].nTh).clone(true)[0];
          nClone.innerHTML = "";
          var oStyle = nClone.style;
          oStyle.paddingTop = "0";
          oStyle.paddingBottom = "0";
          oStyle.borderTopWidth = "0";
          oStyle.borderBottomWidth = "0";
          oStyle.height = 0;
          oStyle.width = that.s.aiInnerWidths[iColumn] + "px";
          nInnerThead.appendChild(nClone);
        }

        /* Add in the tbody elements, cloning form the master table */
        $('>tbody>tr', that.dom.body).each(function (z) {
          var i = that.s.dt.oFeatures.bServerSide === false ? that.s.dt.aiDisplay[that.s.dt._iDisplayStart + z] : z;
          var aTds = that.s.dt.aoData[i].anCells || $(this).children('td, th');
          var n = this.cloneNode(false);
          n.removeAttribute('id');
          n.setAttribute('data-dt-row', i);
          for (iIndex = 0; iIndex < aiColumns.length; iIndex++) {
            iColumn = aiColumns[iIndex];
            if (aTds.length > 0) {
              nClone = $(aTds[iColumn]).clone(true, true)[0];
              nClone.removeAttribute('id');
              nClone.setAttribute('data-dt-row', i);
              nClone.setAttribute('data-dt-column', dt.oApi._fnVisibleToColumnIndex(dt, iColumn));
              n.appendChild(nClone);
            }
          }
          nBody.appendChild(n);
        });
      } else {
        $('>tbody>tr', that.dom.body).each(function (z) {
          nClone = this.cloneNode(true);
          nClone.className += ' DTFC_NoData';
          $('td', nClone).html('');
          nBody.appendChild(nClone);
        });
      }
      oClone.body.style.width = "100%";
      oClone.body.style.margin = "0";
      oClone.body.style.padding = "0";

      // Interop with Scroller - need to use a height forcing element in the
      // scrolling area in the same way that Scroller does in the body scroll.
      if (dt.oScroller !== undefined) {
        var scrollerForcer = dt.oScroller.dom.force;
        if (!oGrid.forcer) {
          oGrid.forcer = scrollerForcer.cloneNode(true);
          oGrid.liner.appendChild(oGrid.forcer);
        } else {
          oGrid.forcer.style.height = scrollerForcer.style.height;
        }
      }
      oGrid.liner.appendChild(oClone.body);
      this._fnEqualiseHeights('tbody', that.dom.body, oClone.body);

      /*
       * Footer
       */
      if (dt.nTFoot !== null) {
        if (bAll) {
          if (oClone.footer !== null) {
            oClone.footer.parentNode.removeChild(oClone.footer);
          }
          oClone.footer = $(this.dom.footer).clone(true, true)[0];
          oClone.footer.className += " DTFC_Cloned";
          oClone.footer.style.width = "100%";
          oGrid.foot.appendChild(oClone.footer);

          /* Copy the footer just like we do for the header */
          aoCloneLayout = this._fnCopyLayout(dt.aoFooter, aiColumns, true);
          var jqCloneTfoot = $('>tfoot', oClone.footer);
          jqCloneTfoot.empty();
          for (i = 0, iLen = aoCloneLayout.length; i < iLen; i++) {
            jqCloneTfoot[0].appendChild(aoCloneLayout[i].nTr);
          }
          dt.oApi._fnDrawHead(dt, aoCloneLayout, true);
        } else {
          aoCloneLayout = this._fnCopyLayout(dt.aoFooter, aiColumns, false);
          var aoCurrFooter = [];
          dt.oApi._fnDetectHeader(aoCurrFooter, $('>tfoot', oClone.footer)[0]);
          for (i = 0, iLen = aoCloneLayout.length; i < iLen; i++) {
            for (j = 0, jLen = aoCloneLayout[i].length; j < jLen; j++) {
              aoCurrFooter[i][j].cell.className = aoCloneLayout[i][j].cell.className;
            }
          }
        }
        this._fnEqualiseHeights('tfoot', this.dom.footer, oClone.footer);
      }

      /* Equalise the column widths between the header footer and body - body get's priority */
      var anUnique = dt.oApi._fnGetUniqueThs(dt, $('>thead', oClone.header)[0]);
      $(anUnique).each(function (i) {
        iColumn = aiColumns[i];
        this.style.width = that.s.aiInnerWidths[iColumn] + "px";
      });
      if (that.s.dt.nTFoot !== null) {
        anUnique = dt.oApi._fnGetUniqueThs(dt, $('>tfoot', oClone.footer)[0]);
        $(anUnique).each(function (i) {
          iColumn = aiColumns[i];
          this.style.width = that.s.aiInnerWidths[iColumn] + "px";
        });
      }
    },
    /**
     * From a given table node (THEAD etc), get a list of TR direct child elements
     *  @param   {Node} nIn Table element to search for TR elements (THEAD, TBODY or TFOOT element)
     *  @returns {Array} List of TR elements found
     *  @private
     */
    "_fnGetTrNodes": function _fnGetTrNodes(nIn) {
      var aOut = [];
      for (var i = 0, iLen = nIn.childNodes.length; i < iLen; i++) {
        if (nIn.childNodes[i].nodeName.toUpperCase() == "TR") {
          aOut.push(nIn.childNodes[i]);
        }
      }
      return aOut;
    },
    /**
     * Equalise the heights of the rows in a given table node in a cross browser way
     *  @returns {void}
     *  @param   {String} nodeName Node type - thead, tbody or tfoot
     *  @param   {Node} original Original node to take the heights from
     *  @param   {Node} clone Copy the heights to
     *  @private
     */
    "_fnEqualiseHeights": function _fnEqualiseHeights(nodeName, original, clone) {
      if (this.s.sHeightMatch == 'none' && nodeName !== 'thead' && nodeName !== 'tfoot') {
        return;
      }
      var that = this,
        i,
        iLen,
        iHeight,
        iHeight2,
        iHeightOriginal,
        iHeightClone,
        rootOriginal = original.getElementsByTagName(nodeName)[0],
        rootClone = clone.getElementsByTagName(nodeName)[0],
        jqBoxHack = $('>' + nodeName + '>tr:eq(0)', original).children(':first'),
        iBoxHack = jqBoxHack.outerHeight() - jqBoxHack.height(),
        anOriginal = this._fnGetTrNodes(rootOriginal),
        anClone = this._fnGetTrNodes(rootClone),
        heights = [];
      for (i = 0, iLen = anClone.length; i < iLen; i++) {
        iHeightOriginal = anOriginal[i].offsetHeight;
        iHeightClone = anClone[i].offsetHeight;
        iHeight = iHeightClone > iHeightOriginal ? iHeightClone : iHeightOriginal;
        if (this.s.sHeightMatch == 'semiauto') {
          anOriginal[i]._DTTC_iHeight = iHeight;
        }
        heights.push(iHeight);
      }
      for (i = 0, iLen = anClone.length; i < iLen; i++) {
        anClone[i].style.height = heights[i] + "px";
        anOriginal[i].style.height = heights[i] + "px";
      }
    },
    /**
     * Determine if the UA suffers from Firefox's overflow:scroll scrollbars
     * not being shown bug.
     *
     * Firefox doesn't draw scrollbars, even if it is told to using
     * overflow:scroll, if the div is less than 34px height. See bugs 292284 and
     * 781885. Using UA detection here since this is particularly hard to detect
     * using objects - its a straight up rendering error in Firefox.
     *
     * @return {boolean} True if Firefox error is present, false otherwise
     */
    _firefoxScrollError: function _firefoxScrollError() {
      if (_firefoxScroll === undefined) {
        var test = $('<div/>').css({
          position: 'absolute',
          top: 0,
          left: 0,
          height: 10,
          width: 50,
          overflow: 'scroll'
        }).appendTo('body');

        // Make sure this doesn't apply on Macs with 0 width scrollbars
        _firefoxScroll = test[0].clientWidth === test[0].offsetWidth && this._fnDTOverflow().bar !== 0;
        test.remove();
      }
      return _firefoxScroll;
    }
  });

  /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
   * Statics
   * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

  /**
   * FixedColumns default settings for initialisation
   *  @name FixedColumns.defaults
   *  @namespace
   *  @static
   */
  _FixedColumns.defaults = /** @lends FixedColumns.defaults */{
    /**
     * Number of left hand columns to fix in position
     *  @type     int
     *  @default  1
     *  @static
     *  @example
     *      var  = $('#example').dataTable( {
     *          "scrollX": "100%"
     *      } );
     *      new $.fn.dataTable.fixedColumns( table, {
     *          "leftColumns": 2
     *      } );
     */
    "iLeftColumns": 1,
    /**
     * Number of right hand columns to fix in position
     *  @type     int
     *  @default  0
     *  @static
     *  @example
     *      var table = $('#example').dataTable( {
     *          "scrollX": "100%"
     *      } );
     *      new $.fn.dataTable.fixedColumns( table, {
     *          "rightColumns": 1
     *      } );
     */
    "iRightColumns": 0,
    /**
     * Draw callback function which is called when FixedColumns has redrawn the fixed assets
     *  @type     function(object, object):void
     *  @default  null
     *  @static
     *  @example
     *      var table = $('#example').dataTable( {
     *          "scrollX": "100%"
     *      } );
     *      new $.fn.dataTable.fixedColumns( table, {
     *          "drawCallback": function () {
     *	            alert( "FixedColumns redraw" );
     *	        }
     *      } );
     */
    "fnDrawCallback": null,
    /**
     * Height matching algorthim to use. This can be "none" which will result in no height
     * matching being applied by FixedColumns (height matching could be forced by CSS in this
     * case), "semiauto" whereby the height calculation will be performed once, and the result
     * cached to be used again (fnRecalculateHeight can be used to force recalculation), or
     * "auto" when height matching is performed on every draw (slowest but must accurate)
     *  @type     string
     *  @default  semiauto
     *  @static
     *  @example
     *      var table = $('#example').dataTable( {
     *          "scrollX": "100%"
     *      } );
     *      new $.fn.dataTable.fixedColumns( table, {
     *          "heightMatch": "auto"
     *      } );
     */
    "sHeightMatch": "semiauto"
  };

  /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
   * Constants
   * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

  /**
   * FixedColumns version
   *  @name      FixedColumns.version
   *  @type      String
   *  @default   See code
   *  @static
   */
  _FixedColumns.version = "3.2.3";

  /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
   * DataTables API integration
   * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

  DataTable.Api.register('fixedColumns()', function () {
    return this;
  });
  DataTable.Api.register('fixedColumns().update()', function () {
    return this.iterator('table', function (ctx) {
      if (ctx._oFixedColumns) {
        ctx._oFixedColumns.fnUpdate();
      }
    });
  });
  DataTable.Api.register('fixedColumns().relayout()', function () {
    return this.iterator('table', function (ctx) {
      if (ctx._oFixedColumns) {
        ctx._oFixedColumns.fnRedrawLayout();
      }
    });
  });
  DataTable.Api.register('rows().recalcHeight()', function () {
    return this.iterator('row', function (ctx, idx) {
      if (ctx._oFixedColumns) {
        ctx._oFixedColumns.fnRecalculateHeight(this.row(idx).node());
      }
    });
  });
  DataTable.Api.register('fixedColumns().rowIndex()', function (row) {
    row = $(row);
    return row.parents('.DTFC_Cloned').length ? this.rows({
      page: 'current'
    }).indexes()[row.index()] : this.row(row).index();
  });
  DataTable.Api.register('fixedColumns().cellIndex()', function (cell) {
    cell = $(cell);
    if (cell.parents('.DTFC_Cloned').length) {
      var rowClonedIdx = cell.parent().index();
      var rowIdx = this.rows({
        page: 'current'
      }).indexes()[rowClonedIdx];
      var columnIdx;
      if (cell.parents('.DTFC_LeftWrapper').length) {
        columnIdx = cell.index();
      } else {
        var columns = this.columns().flatten().length;
        columnIdx = columns - this.context[0]._oFixedColumns.s.iRightColumns + cell.index();
      }
      return {
        row: rowIdx,
        column: this.column.index('toData', columnIdx),
        columnVisible: columnIdx
      };
    } else {
      return this.cell(cell).index();
    }
  });

  /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
   * Initialisation
   * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

  // Attach a listener to the document which listens for DataTables initialisation
  // events so we can automatically initialise
  $(document).on('init.dt.fixedColumns', function (e, settings) {
    if (e.namespace !== 'dt') {
      return;
    }
    var init = settings.oInit.fixedColumns;
    var defaults = DataTable.defaults.fixedColumns;
    if (init || defaults) {
      var opts = $.extend({}, init, defaults);
      if (init !== false) {
        new _FixedColumns(settings, opts);
      }
    }
  });

  // Make FixedColumns accessible from the DataTables instance
  $.fn.dataTable.FixedColumns = _FixedColumns;
  $.fn.DataTable.FixedColumns = _FixedColumns;
  return _FixedColumns;
});

/***/ }),

/***/ "./node_modules/core-js/internals/array-method-has-species-support.js":
/*!****************************************************************************!*\
  !*** ./node_modules/core-js/internals/array-method-has-species-support.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
var V8_VERSION = __webpack_require__(/*! ../internals/environment-v8-version */ "./node_modules/core-js/internals/environment-v8-version.js");

var SPECIES = wellKnownSymbol('species');

module.exports = function (METHOD_NAME) {
  // We can't use this feature detection in V8 since it causes
  // deoptimization and serious performance degradation
  // https://github.com/zloirock/core-js/issues/677
  return V8_VERSION >= 51 || !fails(function () {
    var array = [];
    var constructor = array.constructor = {};
    constructor[SPECIES] = function () {
      return { foo: 1 };
    };
    return array[METHOD_NAME](Boolean).foo !== 1;
  });
};


/***/ }),

/***/ "./node_modules/core-js/internals/number-parse-int.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/internals/number-parse-int.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var globalThis = __webpack_require__(/*! ../internals/global-this */ "./node_modules/core-js/internals/global-this.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");
var toString = __webpack_require__(/*! ../internals/to-string */ "./node_modules/core-js/internals/to-string.js");
var trim = (__webpack_require__(/*! ../internals/string-trim */ "./node_modules/core-js/internals/string-trim.js").trim);
var whitespaces = __webpack_require__(/*! ../internals/whitespaces */ "./node_modules/core-js/internals/whitespaces.js");

var $parseInt = globalThis.parseInt;
var Symbol = globalThis.Symbol;
var ITERATOR = Symbol && Symbol.iterator;
var hex = /^[+-]?0x/i;
var exec = uncurryThis(hex.exec);
var FORCED = $parseInt(whitespaces + '08') !== 8 || $parseInt(whitespaces + '0x16') !== 22
  // MS Edge 18- broken with boxed symbols
  || (ITERATOR && !fails(function () { $parseInt(Object(ITERATOR)); }));

// `parseInt` method
// https://tc39.es/ecma262/#sec-parseint-string-radix
module.exports = FORCED ? function parseInt(string, radix) {
  var S = trim(toString(string));
  return $parseInt(S, (radix >>> 0) || (exec(hex, S) ? 16 : 10));
} : $parseInt;


/***/ }),

/***/ "./node_modules/core-js/internals/string-trim.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/string-trim.js ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");
var toString = __webpack_require__(/*! ../internals/to-string */ "./node_modules/core-js/internals/to-string.js");
var whitespaces = __webpack_require__(/*! ../internals/whitespaces */ "./node_modules/core-js/internals/whitespaces.js");

var replace = uncurryThis(''.replace);
var ltrim = RegExp('^[' + whitespaces + ']+');
var rtrim = RegExp('(^|[^' + whitespaces + '])[' + whitespaces + ']+$');

// `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation
var createMethod = function (TYPE) {
  return function ($this) {
    var string = toString(requireObjectCoercible($this));
    if (TYPE & 1) string = replace(string, ltrim, '');
    if (TYPE & 2) string = replace(string, rtrim, '$1');
    return string;
  };
};

module.exports = {
  // `String.prototype.{ trimLeft, trimStart }` methods
  // https://tc39.es/ecma262/#sec-string.prototype.trimstart
  start: createMethod(1),
  // `String.prototype.{ trimRight, trimEnd }` methods
  // https://tc39.es/ecma262/#sec-string.prototype.trimend
  end: createMethod(2),
  // `String.prototype.trim` method
  // https://tc39.es/ecma262/#sec-string.prototype.trim
  trim: createMethod(3)
};


/***/ }),

/***/ "./node_modules/core-js/internals/whitespaces.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/whitespaces.js ***!
  \*******************************************************/
/***/ ((module) => {

"use strict";

// a string of all valid unicode whitespaces
module.exports = '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u2000\u2001\u2002' +
  '\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.filter.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.filter.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var $filter = (__webpack_require__(/*! ../internals/array-iteration */ "./node_modules/core-js/internals/array-iteration.js").filter);
var arrayMethodHasSpeciesSupport = __webpack_require__(/*! ../internals/array-method-has-species-support */ "./node_modules/core-js/internals/array-method-has-species-support.js");

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('filter');

// `Array.prototype.filter` method
// https://tc39.es/ecma262/#sec-array.prototype.filter
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT }, {
  filter: function filter(callbackfn /* , thisArg */) {
    return $filter(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.parse-int.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/es.parse-int.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var $parseInt = __webpack_require__(/*! ../internals/number-parse-int */ "./node_modules/core-js/internals/number-parse-int.js");

// `parseInt` method
// https://tc39.es/ecma262/#sec-parseint-string-radix
$({ global: true, forced: parseInt !== $parseInt }, {
  parseInt: $parseInt
});


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_internals_export_js","vendors-node_modules_core-js_internals_add-to-unscopables_js-node_modules_core-js_internals_a-09983a","vendors-node_modules_core-js_internals_array-slice_js-node_modules_core-js_internals_function-caeab8","vendors-node_modules_core-js_modules_es_string_iterator_js-node_modules_core-js_modules_es_sy-23bad7","vendors-node_modules_jquery_dist_jquery_js","vendors-node_modules_datatables_net_js_jquery_dataTables_mjs"], () => (__webpack_exec__("./assets/css/portoadmin/vendor/datatables/extras/TableTools/FixedColumns-3.2.3/js/dataTables.fixedColumns.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvanMvZGF0YVRhYmxlcy5maXhlZENvbHVtbnMuYzY5OWZjZDYuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNDLFdBQVVBLE9BQU8sRUFBRTtFQUNuQixJQUFLLElBQTBDLEVBQUc7SUFDakQ7SUFDQUMsaUNBQVEsQ0FBQyx5RUFBUSxFQUFFLG1HQUFnQixDQUFDLG1DQUFFLFVBQVdFLENBQUMsRUFBRztNQUNwRCxPQUFPSCxPQUFPLENBQUVHLENBQUMsRUFBRUMsTUFBTSxFQUFFQyxRQUFTLENBQUM7SUFDdEMsQ0FBRTtBQUFBLGtHQUFDO0VBQ0osQ0FBQyxNQUNJO0FBQUEsRUFpQko7QUFDRixDQUFDLEVBQUMsVUFBVUYsQ0FBQyxFQUFFQyxNQUFNLEVBQUVDLFFBQVEsRUFBRVMsU0FBUyxFQUFHO0VBQzdDLFlBQVk7O0VBQ1osSUFBSUMsU0FBUyxHQUFHWixDQUFDLENBQUNPLEVBQUUsQ0FBQ0MsU0FBUztFQUM5QixJQUFJSyxjQUFjOztFQUVsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7RUFDQSxJQUFJQyxhQUFZLEdBQUcsU0FBZkEsWUFBWUEsQ0FBY0MsRUFBRSxFQUFFQyxJQUFJLEVBQUc7SUFDeEMsSUFBSUMsSUFBSSxHQUFHLElBQUk7O0lBRWY7SUFDQSxJQUFLLEVBQUksSUFBSSxZQUFZSCxhQUFZLENBQUUsRUFBRztNQUN6Q0ksS0FBSyxDQUFFLGdGQUFpRixDQUFDO01BQ3pGO0lBQ0Q7SUFFQSxJQUFLRixJQUFJLEtB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Iiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2Nzcy9wb3J0b2FkbWluL3ZlbmRvci9kYXRhdGFibGVzL2V4dHJhcy9UYWJsZVRvb2xzL0ZpeGVkQ29sdW1ucy0zLjIuMy9qcy9kYXRhVGFibGVzLmZpeGVkQ29sdW1ucy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvYXJyYXktbWV0aG9kLWhhcy1zcGVjaWVzLXN1cHBvcnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL251bWJlci1wYXJzZS1pbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3N0cmluZy10cmltLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy93aGl0ZXNwYWNlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLmFycmF5LmZpbHRlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLnBhcnNlLWludC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiEgRml4ZWRDb2x1bW5zIDMuMi4zXHJcbiAqIMKpMjAxMC0yMDE2IFNwcnlNZWRpYSBMdGQgLSBkYXRhdGFibGVzLm5ldC9saWNlbnNlXHJcbiAqL1xyXG5cclxuLyoqXHJcbiAqIEBzdW1tYXJ5ICAgICBGaXhlZENvbHVtbnNcclxuICogQGRlc2NyaXB0aW9uIEZyZWV6ZSBjb2x1bW5zIGluIHBsYWNlIG9uIGEgc2Nyb2xsaW5nIERhdGFUYWJsZVxyXG4gKiBAdmVyc2lvbiAgICAgMy4yLjNcclxuICogQGZpbGUgICAgICAgIGRhdGFUYWJsZXMuZml4ZWRDb2x1bW5zLmpzXHJcbiAqIEBhdXRob3IgICAgICBTcHJ5TWVkaWEgTHRkICh3d3cuc3ByeW1lZGlhLmNvLnVrKVxyXG4gKiBAY29udGFjdCAgICAgd3d3LnNwcnltZWRpYS5jby51ay9jb250YWN0XHJcbiAqIEBjb3B5cmlnaHQgICBDb3B5cmlnaHQgMjAxMC0yMDE2IFNwcnlNZWRpYSBMdGQuXHJcbiAqXHJcbiAqIFRoaXMgc291cmNlIGZpbGUgaXMgZnJlZSBzb2Z0d2FyZSwgYXZhaWxhYmxlIHVuZGVyIHRoZSBmb2xsb3dpbmcgbGljZW5zZTpcclxuICogICBNSVQgbGljZW5zZSAtIGh0dHA6Ly9kYXRhdGFibGVzLm5ldC9saWNlbnNlL21pdFxyXG4gKlxyXG4gKiBUaGlzIHNvdXJjZSBmaWxlIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dFxyXG4gKiBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWVxyXG4gKiBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBsaWNlbnNlIGZpbGVzIGZvciBkZXRhaWxzLlxyXG4gKlxyXG4gKiBGb3IgZGV0YWlscyBwbGVhc2UgcmVmZXIgdG86IGh0dHA6Ly93d3cuZGF0YXRhYmxlcy5uZXRcclxuICovXHJcbihmdW5jdGlvbiggZmFjdG9yeSApe1xyXG5cdGlmICggdHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kICkge1xyXG5cdFx0Ly8gQU1EXHJcblx0XHRkZWZpbmUoIFsnanF1ZXJ5JywgJ2RhdGF0YWJsZXMubmV0J10sIGZ1bmN0aW9uICggJCApIHtcclxuXHRcdFx0cmV0dXJuIGZhY3RvcnkoICQsIHdpbmRvdywgZG9jdW1lbnQgKTtcclxuXHRcdH0gKTtcclxuXHR9XHJcblx0ZWxzZSBpZiAoIHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyApIHtcclxuXHRcdC8vIENvbW1vbkpTXHJcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChyb290LCAkKSB7XHJcblx0XHRcdGlmICggISByb290ICkge1xyXG5cdFx0XHRcdHJvb3QgPSB3aW5kb3c7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmICggISAkIHx8ICEgJC5mbi5kYXRhVGFibGUgKSB7XHJcblx0XHRcdFx0JCA9IHJlcXVpcmUoJ2RhdGF0YWJsZXMubmV0Jykocm9vdCwgJCkuJDtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0cmV0dXJuIGZhY3RvcnkoICQsIHJvb3QsIHJvb3QuZG9jdW1lbnQgKTtcclxuXHRcdH07XHJcblx0fVxyXG5cdGVsc2Uge1xyXG5cdFx0Ly8gQnJvd3NlclxyXG5cdFx0ZmFjdG9yeSggalF1ZXJ5LCB3aW5kb3csIGRvY3VtZW50ICk7XHJcblx0fVxyXG59KGZ1bmN0aW9uKCAkLCB3aW5kb3csIGRvY3VtZW50LCB1bmRlZmluZWQgKSB7XHJcbid1c2Ugc3RyaWN0JztcclxudmFyIERhdGFUYWJsZSA9ICQuZm4uZGF0YVRhYmxlO1xyXG52YXIgX2ZpcmVmb3hTY3JvbGw7XHJcblxyXG4vKipcclxuICogV2hlbiBtYWtpbmcgdXNlIG9mIERhdGFUYWJsZXMnIHgtYXhpcyBzY3JvbGxpbmcgZmVhdHVyZSwgeW91IG1heSB3aXNoIHRvXHJcbiAqIGZpeCB0aGUgbGVmdCBtb3N0IGNvbHVtbiBpbiBwbGFjZS4gVGhpcyBwbHVnLWluIGZvciBEYXRhVGFibGVzIHByb3ZpZGVzXHJcbiAqIGV4YWN0bHkgdGhpcyBvcHRpb24gKG5vdGUgZm9yIG5vbi1zY3JvbGxpbmcgdGFibGVzLCBwbGVhc2UgdXNlIHRoZVxyXG4gKiBGaXhlZEhlYWRlciBwbHVnLWluLCB3aGljaCBjYW4gZml4IGhlYWRlcnMgYW5kIGZvb3RlcnMpLiBLZXlcclxuICogZmVhdHVyZXMgaW5jbHVkZTpcclxuICpcclxuICogKiBGcmVlemVzIHRoZSBsZWZ0IG9yIHJpZ2h0IG1vc3QgY29sdW1ucyB0byB0aGUgc2lkZSBvZiB0aGUgdGFibGVcclxuICogKiBPcHRpb24gdG8gZnJlZXplIHR3byBvciBtb3JlIGNvbHVtbnNcclxuICogKiBGdWxsIGludGVncmF0aW9uIHdpdGggRGF0YVRhYmxlcycgc2Nyb2xsaW5nIG9wdGlvbnNcclxuICogKiBTcGVlZCAtIEZpeGVkQ29sdW1ucyBpcyBmYXN0IGluIGl0cyBvcGVyYXRpb25cclxuICpcclxuICogIEBjbGFzc1xyXG4gKiAgQGNvbnN0cnVjdG9yXHJcbiAqICBAZ2xvYmFsXHJcbiAqICBAcGFyYW0ge29iamVjdH0gZHQgRGF0YVRhYmxlcyBpbnN0YW5jZS4gV2l0aCBEYXRhVGFibGVzIDEuMTAgdGhpcyBjYW4gYWxzb1xyXG4gKiAgICBiZSBhIGpRdWVyeSBjb2xsZWN0aW9uLCBhIGpRdWVyeSBzZWxlY3RvciwgRGF0YVRhYmxlcyBBUEkgaW5zdGFuY2Ugb3JcclxuICogICAgc2V0dGluZ3Mgb2JqZWN0LlxyXG4gKiAgQHBhcmFtIHtvYmplY3R9IFtpbml0PXt9XSBDb25maWd1cmF0aW9uIG9iamVjdCBmb3IgRml4ZWRDb2x1bW5zLiBPcHRpb25zIGFyZVxyXG4gKiAgICBkZWZpbmVkIGJ5IHtAbGluayBGaXhlZENvbHVtbnMuZGVmYXVsdHN9XHJcbiAqXHJcbiAqICBAcmVxdWlyZXMgalF1ZXJ5IDEuNytcclxuICogIEByZXF1aXJlcyBEYXRhVGFibGVzIDEuOC4wK1xyXG4gKlxyXG4gKiAgQGV4YW1wbGVcclxuICogICAgICB2YXIgdGFibGUgPSAkKCcjZXhhbXBsZScpLmRhdGFUYWJsZSgge1xyXG4gKiAgICAgICAgXCJzY3JvbGxYXCI6IFwiMTAwJVwiXHJcbiAqICAgICAgfSApO1xyXG4gKiAgICAgIG5ldyAkLmZuLmRhdGFUYWJsZS5maXhlZENvbHVtbnMoIHRhYmxlICk7XHJcbiAqL1xyXG52YXIgRml4ZWRDb2x1bW5zID0gZnVuY3Rpb24gKCBkdCwgaW5pdCApIHtcclxuXHR2YXIgdGhhdCA9IHRoaXM7XHJcblxyXG5cdC8qIFNhbml0eSBjaGVjayAtIHlvdSBqdXN0IGtub3cgaXQgd2lsbCBoYXBwZW4gKi9cclxuXHRpZiAoICEgKCB0aGlzIGluc3RhbmNlb2YgRml4ZWRDb2x1bW5zICkgKSB7XHJcblx0XHRhbGVydCggXCJGaXhlZENvbHVtbnMgd2FybmluZzogRml4ZWRDb2x1bW5zIG11c3QgYmUgaW5pdGlhbGlzZWQgd2l0aCB0aGUgJ25ldycga2V5d29yZC5cIiApO1xyXG5cdFx0cmV0dXJuO1xyXG5cdH1cclxuXHJcblx0aWYgKCBpbml0ID09PSB1bmRlZmluZWQgfHwgaW5pdCA9PT0gdHJ1ZSApIHtcclxuXHRcdGluaXQgPSB7fTtcclxuXHR9XHJcblxyXG5cdC8vIFVzZSB0aGUgRGF0YVRhYmxlcyBIdW5nYXJpYW4gbm90YXRpb24gbWFwcGluZyBtZXRob2QsIGlmIGl0IGV4aXN0cyB0b1xyXG5cdC8vIHByb3ZpZGUgZm9yd2FyZHMgY29tcGF0aWJpbGl0eSBmb3IgY2FtZWwgY2FzZSB2YXJpYWJsZXNcclxuXHR2YXIgY2FtZWxUb0h1bmdhcmlhbiA9ICQuZm4uZGF0YVRhYmxlLmNhbWVsVG9IdW5nYXJpYW47XHJcblx0aWYgKCBjYW1lbFRvSHVuZ2FyaWFuICkge1xyXG5cdFx0Y2FtZWxUb0h1bmdhcmlhbiggRml4ZWRDb2x1bW5zLmRlZmF1bHRzLCBGaXhlZENvbHVtbnMuZGVmYXVsdHMsIHRydWUgKTtcclxuXHRcdGNhbWVsVG9IdW5nYXJpYW4oIEZpeGVkQ29sdW1ucy5kZWZhdWx0cywgaW5pdCApO1xyXG5cdH1cclxuXHJcblx0Ly8gdjEuMTAgYWxsb3dzIHRoZSBzZXR0aW5ncyBvYmplY3QgdG8gYmUgZ290IGZvcm0gYSBudW1iZXIgb2Ygc291cmNlc1xyXG5cdHZhciBkdFNldHRpbmdzID0gbmV3ICQuZm4uZGF0YVRhYmxlLkFwaSggZHQgKS5zZXR0aW5ncygpWzBdO1xyXG5cclxuXHQvKipcclxuXHQgKiBTZXR0aW5ncyBvYmplY3Qgd2hpY2ggY29udGFpbnMgY3VzdG9taXNhYmxlIGluZm9ybWF0aW9uIGZvciBGaXhlZENvbHVtbnMgaW5zdGFuY2VcclxuXHQgKiBAbmFtZXNwYWNlXHJcblx0ICogQGV4dGVuZHMgRml4ZWRDb2x1bW5zLmRlZmF1bHRzXHJcblx0ICogQHByaXZhdGVcclxuXHQgKi9cclxuXHR0aGlzLnMgPSB7XHJcblx0XHQvKipcclxuXHRcdCAqIERhdGFUYWJsZXMgc2V0dGluZ3Mgb2JqZWN0c1xyXG5cdFx0ICogIEB0eXBlICAgICBvYmplY3RcclxuXHRcdCAqICBAZGVmYXVsdCAgT2J0YWluZWQgZnJvbSBEYXRhVGFibGVzIGluc3RhbmNlXHJcblx0XHQgKi9cclxuXHRcdFwiZHRcIjogZHRTZXR0aW5ncyxcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIE51bWJlciBvZiBjb2x1bW5zIGluIHRoZSBEYXRhVGFibGUgLSBzdG9yZWQgZm9yIHF1aWNrIGFjY2Vzc1xyXG5cdFx0ICogIEB0eXBlICAgICBpbnRcclxuXHRcdCAqICBAZGVmYXVsdCAgT2J0YWluZWQgZnJvbSBEYXRhVGFibGVzIGluc3RhbmNlXHJcblx0XHQgKi9cclxuXHRcdFwiaVRhYmxlQ29sdW1uc1wiOiBkdFNldHRpbmdzLmFvQ29sdW1ucy5sZW5ndGgsXHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBPcmlnaW5hbCBvdXRlciB3aWR0aHMgb2YgdGhlIGNvbHVtbnMgYXMgcmVuZGVyZWQgYnkgRGF0YVRhYmxlcyAtIHVzZWQgdG8gY2FsY3VsYXRlXHJcblx0XHQgKiB0aGUgRml4ZWRDb2x1bW5zIGdyaWQgYm91bmRpbmcgYm94XHJcblx0XHQgKiAgQHR5cGUgICAgIGFycmF5LjxpbnQ+XHJcblx0XHQgKiAgQGRlZmF1bHQgIFtdXHJcblx0XHQgKi9cclxuXHRcdFwiYWlPdXRlcldpZHRoc1wiOiBbXSxcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIE9yaWdpbmFsIGlubmVyIHdpZHRocyBvZiB0aGUgY29sdW1ucyBhcyByZW5kZXJlZCBieSBEYXRhVGFibGVzIC0gdXNlZCB0byBhcHBseSB3aWR0aHNcclxuXHRcdCAqIHRvIHRoZSBjb2x1bW5zXHJcblx0XHQgKiAgQHR5cGUgICAgIGFycmF5LjxpbnQ+XHJcblx0XHQgKiAgQGRlZmF1bHQgIFtdXHJcblx0XHQgKi9cclxuXHRcdFwiYWlJbm5lcldpZHRoc1wiOiBbXSxcclxuXHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBJcyB0aGUgZG9jdW1lbnQgbGF5b3V0IHJpZ2h0LXRvLWxlZnRcclxuXHRcdCAqIEB0eXBlIGJvb2xlYW5cclxuXHRcdCAqL1xyXG5cdFx0cnRsOiAkKGR0U2V0dGluZ3MublRhYmxlKS5jc3MoJ2RpcmVjdGlvbicpID09PSAncnRsJ1xyXG5cdH07XHJcblxyXG5cclxuXHQvKipcclxuXHQgKiBET00gZWxlbWVudHMgdXNlZCBieSB0aGUgY2xhc3MgaW5zdGFuY2VcclxuXHQgKiBAbmFtZXNwYWNlXHJcblx0ICogQHByaXZhdGVcclxuXHQgKlxyXG5cdCAqL1xyXG5cdHRoaXMuZG9tID0ge1xyXG5cdFx0LyoqXHJcblx0XHQgKiBEYXRhVGFibGVzIHNjcm9sbGluZyBlbGVtZW50XHJcblx0XHQgKiAgQHR5cGUgICAgIG5vZGVcclxuXHRcdCAqICBAZGVmYXVsdCAgbnVsbFxyXG5cdFx0ICovXHJcblx0XHRcInNjcm9sbGVyXCI6IG51bGwsXHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBEYXRhVGFibGVzIGhlYWRlciB0YWJsZVxyXG5cdFx0ICogIEB0eXBlICAgICBub2RlXHJcblx0XHQgKiAgQGRlZmF1bHQgIG51bGxcclxuXHRcdCAqL1xyXG5cdFx0XCJoZWFkZXJcIjogbnVsbCxcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIERhdGFUYWJsZXMgYm9keSB0YWJsZVxyXG5cdFx0ICogIEB0eXBlICAgICBub2RlXHJcblx0XHQgKiAgQGRlZmF1bHQgIG51bGxcclxuXHRcdCAqL1xyXG5cdFx0XCJib2R5XCI6IG51bGwsXHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBEYXRhVGFibGVzIGZvb3RlciB0YWJsZVxyXG5cdFx0ICogIEB0eXBlICAgICBub2RlXHJcblx0XHQgKiAgQGRlZmF1bHQgIG51bGxcclxuXHRcdCAqL1xyXG5cdFx0XCJmb290ZXJcIjogbnVsbCxcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIERpc3BsYXkgZ3JpZCBlbGVtZW50c1xyXG5cdFx0ICogQG5hbWVzcGFjZVxyXG5cdFx0ICovXHJcblx0XHRcImdyaWRcIjoge1xyXG5cdFx0XHQvKipcclxuXHRcdFx0ICogR3JpZCB3cmFwcGVyLiBUaGlzIGlzIHRoZSBjb250YWluZXIgZWxlbWVudCBmb3IgdGhlIDN4MyBncmlkXHJcblx0XHRcdCAqICBAdHlwZSAgICAgbm9kZVxyXG5cdFx0XHQgKiAgQGRlZmF1bHQgIG51bGxcclxuXHRcdFx0ICovXHJcblx0XHRcdFwid3JhcHBlclwiOiBudWxsLFxyXG5cclxuXHRcdFx0LyoqXHJcblx0XHRcdCAqIERhdGFUYWJsZXMgc2Nyb2xsaW5nIGVsZW1lbnQuIFRoaXMgZWxlbWVudCBpcyB0aGUgRGF0YVRhYmxlc1xyXG5cdFx0XHQgKiBjb21wb25lbnQgaW4gdGhlIGRpc3BsYXkgZ3JpZCAobWFraW5nIHVwIHRoZSBtYWluIHRhYmxlIC0gaS5lLlxyXG5cdFx0XHQgKiBub3QgdGhlIGZpeGVkIGNvbHVtbnMpLlxyXG5cdFx0XHQgKiAgQHR5cGUgICAgIG5vZGVcclxuXHRcdFx0ICogIEBkZWZhdWx0ICBudWxsXHJcblx0XHRcdCAqL1xyXG5cdFx0XHRcImR0XCI6IG51bGwsXHJcblxyXG5cdFx0XHQvKipcclxuXHRcdFx0ICogTGVmdCBmaXhlZCBjb2x1bW4gZ3JpZCBjb21wb25lbnRzXHJcblx0XHRcdCAqIEBuYW1lc3BhY2VcclxuXHRcdFx0ICovXHJcblx0XHRcdFwibGVmdFwiOiB7XHJcblx0XHRcdFx0XCJ3cmFwcGVyXCI6IG51bGwsXHJcblx0XHRcdFx0XCJoZWFkXCI6IG51bGwsXHJcblx0XHRcdFx0XCJib2R5XCI6IG51bGwsXHJcblx0XHRcdFx0XCJmb290XCI6IG51bGxcclxuXHRcdFx0fSxcclxuXHJcblx0XHRcdC8qKlxyXG5cdFx0XHQgKiBSaWdodCBmaXhlZCBjb2x1bW4gZ3JpZCBjb21wb25lbnRzXHJcblx0XHRcdCAqIEBuYW1lc3BhY2VcclxuXHRcdFx0ICovXHJcblx0XHRcdFwicmlnaHRcIjoge1xyXG5cdFx0XHRcdFwid3JhcHBlclwiOiBudWxsLFxyXG5cdFx0XHRcdFwiaGVhZFwiOiBudWxsLFxyXG5cdFx0XHRcdFwiYm9keVwiOiBudWxsLFxyXG5cdFx0XHRcdFwiZm9vdFwiOiBudWxsXHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBDbG9uZWQgdGFibGUgbm9kZXNcclxuXHRcdCAqIEBuYW1lc3BhY2VcclxuXHRcdCAqL1xyXG5cdFx0XCJjbG9uZVwiOiB7XHJcblx0XHRcdC8qKlxyXG5cdFx0XHQgKiBMZWZ0IGNvbHVtbiBjbG9uZWQgdGFibGUgbm9kZXNcclxuXHRcdFx0ICogQG5hbWVzcGFjZVxyXG5cdFx0XHQgKi9cclxuXHRcdFx0XCJsZWZ0XCI6IHtcclxuXHRcdFx0XHQvKipcclxuXHRcdFx0XHQgKiBDbG9uZWQgaGVhZGVyIHRhYmxlXHJcblx0XHRcdFx0ICogIEB0eXBlICAgICBub2RlXHJcblx0XHRcdFx0ICogIEBkZWZhdWx0ICBudWxsXHJcblx0XHRcdFx0ICovXHJcblx0XHRcdFx0XCJoZWFkZXJcIjogbnVsbCxcclxuXHJcblx0XHRcdFx0LyoqXHJcblx0XHRcdFx0ICogQ2xvbmVkIGJvZHkgdGFibGVcclxuXHRcdFx0XHQgKiAgQHR5cGUgICAgIG5vZGVcclxuXHRcdFx0XHQgKiAgQGRlZmF1bHQgIG51bGxcclxuXHRcdFx0XHQgKi9cclxuXHRcdFx0XHRcImJvZHlcIjogbnVsbCxcclxuXHJcblx0XHRcdFx0LyoqXHJcblx0XHRcdFx0ICogQ2xvbmVkIGZvb3RlciB0YWJsZVxyXG5cdFx0XHRcdCAqICBAdHlwZSAgICAgbm9kZVxyXG5cdFx0XHRcdCAqICBAZGVmYXVsdCAgbnVsbFxyXG5cdFx0XHRcdCAqL1xyXG5cdFx0XHRcdFwiZm9vdGVyXCI6IG51bGxcclxuXHRcdFx0fSxcclxuXHJcblx0XHRcdC8qKlxyXG5cdFx0XHQgKiBSaWdodCBjb2x1bW4gY2xvbmVkIHRhYmxlIG5vZGVzXHJcblx0XHRcdCAqIEBuYW1lc3BhY2VcclxuXHRcdFx0ICovXHJcblx0XHRcdFwicmlnaHRcIjoge1xyXG5cdFx0XHRcdC8qKlxyXG5cdFx0XHRcdCAqIENsb25lZCBoZWFkZXIgdGFibGVcclxuXHRcdFx0XHQgKiAgQHR5cGUgICAgIG5vZGVcclxuXHRcdFx0XHQgKiAgQGRlZmF1bHQgIG51bGxcclxuXHRcdFx0XHQgKi9cclxuXHRcdFx0XHRcImhlYWRlclwiOiBudWxsLFxyXG5cclxuXHRcdFx0XHQvKipcclxuXHRcdFx0XHQgKiBDbG9uZWQgYm9keSB0YWJsZVxyXG5cdFx0XHRcdCAqICBAdHlwZSAgICAgbm9kZVxyXG5cdFx0XHRcdCAqICBAZGVmYXVsdCAgbnVsbFxyXG5cdFx0XHRcdCAqL1xyXG5cdFx0XHRcdFwiYm9keVwiOiBudWxsLFxyXG5cclxuXHRcdFx0XHQvKipcclxuXHRcdFx0XHQgKiBDbG9uZWQgZm9vdGVyIHRhYmxlXHJcblx0XHRcdFx0ICogIEB0eXBlICAgICBub2RlXHJcblx0XHRcdFx0ICogIEBkZWZhdWx0ICBudWxsXHJcblx0XHRcdFx0ICovXHJcblx0XHRcdFx0XCJmb290ZXJcIjogbnVsbFxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblx0aWYgKCBkdFNldHRpbmdzLl9vRml4ZWRDb2x1bW5zICkge1xyXG5cdFx0dGhyb3cgJ0ZpeGVkQ29sdW1ucyBhbHJlYWR5IGluaXRpYWxpc2VkIG9uIHRoaXMgdGFibGUnO1xyXG5cdH1cclxuXHJcblx0LyogQXR0YWNoIHRoZSBpbnN0YW5jZSB0byB0aGUgRGF0YVRhYmxlcyBpbnN0YW5jZSBzbyBpdCBjYW4gYmUgYWNjZXNzZWQgZWFzaWx5ICovXHJcblx0ZHRTZXR0aW5ncy5fb0ZpeGVkQ29sdW1ucyA9IHRoaXM7XHJcblxyXG5cdC8qIExldCdzIGRvIGl0ICovXHJcblx0aWYgKCAhIGR0U2V0dGluZ3MuX2JJbml0Q29tcGxldGUgKVxyXG5cdHtcclxuXHRcdGR0U2V0dGluZ3Mub0FwaS5fZm5DYWxsYmFja1JlZyggZHRTZXR0aW5ncywgJ2FvSW5pdENvbXBsZXRlJywgZnVuY3Rpb24gKCkge1xyXG5cdFx0XHR0aGF0Ll9mbkNvbnN0cnVjdCggaW5pdCApO1xyXG5cdFx0fSwgJ0ZpeGVkQ29sdW1ucycgKTtcclxuXHR9XHJcblx0ZWxzZVxyXG5cdHtcclxuXHRcdHRoaXMuX2ZuQ29uc3RydWN0KCBpbml0ICk7XHJcblx0fVxyXG59O1xyXG5cclxuXHJcblxyXG4kLmV4dGVuZCggRml4ZWRDb2x1bW5zLnByb3RvdHlwZSAsIHtcclxuXHQvKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqXHJcblx0ICogUHVibGljIG1ldGhvZHNcclxuXHQgKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqL1xyXG5cclxuXHQvKipcclxuXHQgKiBVcGRhdGUgdGhlIGZpeGVkIGNvbHVtbnMgLSBpbmNsdWRpbmcgaGVhZGVycyBhbmQgZm9vdGVycy4gTm90ZSB0aGF0IEZpeGVkQ29sdW1ucyB3aWxsXHJcblx0ICogYXV0b21hdGljYWxseSB1cGRhdGUgdGhlIGRpc3BsYXkgd2hlbmV2ZXIgdGhlIGhvc3QgRGF0YVRhYmxlIHJlZHJhd3MuXHJcblx0ICogIEByZXR1cm5zIHt2b2lkfVxyXG5cdCAqICBAZXhhbXBsZVxyXG5cdCAqICAgICAgdmFyIHRhYmxlID0gJCgnI2V4YW1wbGUnKS5kYXRhVGFibGUoIHtcclxuXHQgKiAgICAgICAgICBcInNjcm9sbFhcIjogXCIxMDAlXCJcclxuXHQgKiAgICAgIH0gKTtcclxuXHQgKiAgICAgIHZhciBmYyA9IG5ldyAkLmZuLmRhdGFUYWJsZS5maXhlZENvbHVtbnMoIHRhYmxlICk7XHJcblx0ICpcclxuXHQgKiAgICAgIC8vIGF0IHNvbWUgbGF0ZXIgcG9pbnQgd2hlbiB0aGUgdGFibGUgaGFzIGJlZW4gbWFuaXB1bGF0ZWQuLi4uXHJcblx0ICogICAgICBmYy5mblVwZGF0ZSgpO1xyXG5cdCAqL1xyXG5cdFwiZm5VcGRhdGVcIjogZnVuY3Rpb24gKClcclxuXHR7XHJcblx0XHR0aGlzLl9mbkRyYXcoIHRydWUgKTtcclxuXHR9LFxyXG5cclxuXHJcblx0LyoqXHJcblx0ICogUmVjYWxjdWxhdGUgdGhlIHJlc2l6ZXMgb2YgdGhlIDN4MyBncmlkIHRoYXQgRml4ZWRDb2x1bW5zIHVzZXMgZm9yIGRpc3BsYXkgb2YgdGhlIHRhYmxlLlxyXG5cdCAqIFRoaXMgaXMgdXNlZnVsIGlmIHlvdSB1cGRhdGUgdGhlIHdpZHRoIG9mIHRoZSB0YWJsZSBjb250YWluZXIuIE5vdGUgdGhhdCBGaXhlZENvbHVtbnMgd2lsbFxyXG5cdCAqIHBlcmZvcm0gdGhpcyBmdW5jdGlvbiBhdXRvbWF0aWNhbGx5IHdoZW4gdGhlIHdpbmRvdy5yZXNpemUgZXZlbnQgaXMgZmlyZWQuXHJcblx0ICogIEByZXR1cm5zIHt2b2lkfVxyXG5cdCAqICBAZXhhbXBsZVxyXG5cdCAqICAgICAgdmFyIHRhYmxlID0gJCgnI2V4YW1wbGUnKS5kYXRhVGFibGUoIHtcclxuXHQgKiAgICAgICAgICBcInNjcm9sbFhcIjogXCIxMDAlXCJcclxuXHQgKiAgICAgIH0gKTtcclxuXHQgKiAgICAgIHZhciBmYyA9IG5ldyAkLmZuLmRhdGFUYWJsZS5maXhlZENvbHVtbnMoIHRhYmxlICk7XHJcblx0ICpcclxuXHQgKiAgICAgIC8vIFJlc2l6ZSB0aGUgdGFibGUgY29udGFpbmVyIGFuZCB0aGVuIGhhdmUgRml4ZWRDb2x1bW5zIGFkanVzdCBpdHMgbGF5b3V0Li4uLlxyXG5cdCAqICAgICAgJCgnI2NvbnRlbnQnKS53aWR0aCggMTIwMCApO1xyXG5cdCAqICAgICAgZmMuZm5SZWRyYXdMYXlvdXQoKTtcclxuXHQgKi9cclxuXHRcImZuUmVkcmF3TGF5b3V0XCI6IGZ1bmN0aW9uICgpXHJcblx0e1xyXG5cdFx0dGhpcy5fZm5Db2xDYWxjKCk7XHJcblx0XHR0aGlzLl9mbkdyaWRMYXlvdXQoKTtcclxuXHRcdHRoaXMuZm5VcGRhdGUoKTtcclxuXHR9LFxyXG5cclxuXHJcblx0LyoqXHJcblx0ICogTWFyayBhIHJvdyBzdWNoIHRoYXQgaXQncyBoZWlnaHQgc2hvdWxkIGJlIHJlY2FsY3VsYXRlZCB3aGVuIHVzaW5nICdzZW1pYXV0bycgcm93XHJcblx0ICogaGVpZ2h0IG1hdGNoaW5nLiBUaGlzIGZ1bmN0aW9uIHdpbGwgaGF2ZSBubyBlZmZlY3Qgd2hlbiAnbm9uZScgb3IgJ2F1dG8nIHJvdyBoZWlnaHRcclxuXHQgKiBtYXRjaGluZyBpcyB1c2VkLlxyXG5cdCAqICBAcGFyYW0gICB7Tm9kZX0gblRyIFRSIGVsZW1lbnQgdGhhdCBzaG91bGQgaGF2ZSBpdCdzIGhlaWdodCByZWNhbGN1bGF0ZWRcclxuXHQgKiAgQHJldHVybnMge3ZvaWR9XHJcblx0ICogIEBleGFtcGxlXHJcblx0ICogICAgICB2YXIgdGFibGUgPSAkKCcjZXhhbXBsZScpLmRhdGFUYWJsZSgge1xyXG5cdCAqICAgICAgICAgIFwic2Nyb2xsWFwiOiBcIjEwMCVcIlxyXG5cdCAqICAgICAgfSApO1xyXG5cdCAqICAgICAgdmFyIGZjID0gbmV3ICQuZm4uZGF0YVRhYmxlLmZpeGVkQ29sdW1ucyggdGFibGUgKTtcclxuXHQgKlxyXG5cdCAqICAgICAgLy8gbWFuaXB1bGF0ZSB0aGUgdGFibGUgLSBtYXJrIHRoZSByb3cgYXMgbmVlZGluZyBhbiB1cGRhdGUgdGhlbiB1cGRhdGUgdGhlIHRhYmxlXHJcblx0ICogICAgICAvLyB0aGlzIGFsbG93cyB0aGUgcmVkcmF3IHBlcmZvcm1lZCBieSBEYXRhVGFibGVzIGZuVXBkYXRlIHRvIHJlY2FsY3VsYXRlIHRoZSByb3dcclxuXHQgKiAgICAgIC8vIGhlaWdodFxyXG5cdCAqICAgICAgZmMuZm5SZWNhbGN1bGF0ZUhlaWdodCgpO1xyXG5cdCAqICAgICAgdGFibGUuZm5VcGRhdGUoICQoJyNleGFtcGxlIHRib2R5IHRyOmVxKDApJylbMF0sIFtcImluc2VydCBkYXRlXCIsIDEsIDIsIDMgLi4uIF0pO1xyXG5cdCAqL1xyXG5cdFwiZm5SZWNhbGN1bGF0ZUhlaWdodFwiOiBmdW5jdGlvbiAoIG5UciApXHJcblx0e1xyXG5cdFx0ZGVsZXRlIG5Uci5fRFRUQ19pSGVpZ2h0O1xyXG5cdFx0blRyLnN0eWxlLmhlaWdodCA9ICdhdXRvJztcclxuXHR9LFxyXG5cclxuXHJcblx0LyoqXHJcblx0ICogU2V0IHRoZSBoZWlnaHQgb2YgYSBnaXZlbiByb3cgLSBwcm92aWRlcyBjcm9zcyBicm93c2VyIGNvbXBhdGliaWxpdHlcclxuXHQgKiAgQHBhcmFtICAge05vZGV9IG5UYXJnZXQgVFIgZWxlbWVudCB0aGF0IHNob3VsZCBoYXZlIGl0J3MgaGVpZ2h0IHJlY2FsY3VsYXRlZFxyXG5cdCAqICBAcGFyYW0gICB7aW50fSBpSGVpZ2h0IEhlaWdodCBpbiBwaXhlbHMgdG8gc2V0XHJcblx0ICogIEByZXR1cm5zIHt2b2lkfVxyXG5cdCAqICBAZXhhbXBsZVxyXG5cdCAqICAgICAgdmFyIHRhYmxlID0gJCgnI2V4YW1wbGUnKS5kYXRhVGFibGUoIHtcclxuXHQgKiAgICAgICAgICBcInNjcm9sbFhcIjogXCIxMDAlXCJcclxuXHQgKiAgICAgIH0gKTtcclxuXHQgKiAgICAgIHZhciBmYyA9IG5ldyAkLmZuLmRhdGFUYWJsZS5maXhlZENvbHVtbnMoIHRhYmxlICk7XHJcblx0ICpcclxuXHQgKiAgICAgIC8vIFlvdSBtYXkgd2FudCB0byBkbyB0aGlzIGFmdGVyIG1hbmlwdWxhdGluZyBhIHJvdyBpbiB0aGUgZml4ZWQgY29sdW1uXHJcblx0ICogICAgICBmYy5mblNldFJvd0hlaWdodCggJCgnI2V4YW1wbGUgdGJvZHkgdHI6ZXEoMCknKVswXSwgNTAgKTtcclxuXHQgKi9cclxuXHRcImZuU2V0Um93SGVpZ2h0XCI6IGZ1bmN0aW9uICggblRhcmdldCwgaUhlaWdodCApXHJcblx0e1xyXG5cdFx0blRhcmdldC5zdHlsZS5oZWlnaHQgPSBpSGVpZ2h0K1wicHhcIjtcclxuXHR9LFxyXG5cclxuXHJcblx0LyoqXHJcblx0ICogR2V0IGRhdGEgaW5kZXggaW5mb3JtYXRpb24gYWJvdXQgYSByb3cgb3IgY2VsbCBpbiB0aGUgdGFibGUgYm9keS5cclxuXHQgKiBUaGlzIGZ1bmN0aW9uIGlzIGZ1bmN0aW9uYWxseSBpZGVudGljYWwgdG8gZm5HZXRQb3NpdGlvbiBpbiBEYXRhVGFibGVzLFxyXG5cdCAqIHRha2luZyB0aGUgc2FtZSBwYXJhbWV0ZXIgKFRILCBURCBvciBUUiBub2RlKSBhbmQgcmV0dXJuaW5nIGV4YWN0bHkgdGhlXHJcblx0ICogdGhlIHNhbWUgaW5mb3JtYXRpb24gKGRhdGEgaW5kZXggaW5mb3JtYXRpb24pLiBUSGUgZGlmZmVyZW5jZSBiZXR3ZWVuXHJcblx0ICogdGhlIHR3byBpcyB0aGF0IHRoaXMgbWV0aG9kIHRha2VzIGludG8gYWNjb3VudCB0aGUgZml4ZWQgY29sdW1ucyBpbiB0aGVcclxuXHQgKiB0YWJsZSwgc28geW91IGNhbiBwYXNzIGluIG5vZGVzIGZyb20gdGhlIG1hc3RlciB0YWJsZSwgb3IgdGhlIGNsb25lZFxyXG5cdCAqIHRhYmxlcyBhbmQgZ2V0IHRoZSBpbmRleCBwb3NpdGlvbiBmb3IgdGhlIGRhdGEgaW4gdGhlIG1haW4gdGFibGUuXHJcblx0ICogIEBwYXJhbSB7bm9kZX0gbm9kZSBUUiwgVEggb3IgVEQgZWxlbWVudCB0byBnZXQgdGhlIGluZm9ybWF0aW9uIGFib3V0XHJcblx0ICogIEByZXR1cm5zIHtpbnR9IElmIG5Ob2RlIGlzIGdpdmVuIGFzIGEgVFIsIHRoZW4gYSBzaW5nbGUgaW5kZXggaXMgXHJcblx0ICogICAgcmV0dXJuZWQsIG9yIGlmIGdpdmVuIGFzIGEgY2VsbCwgYW4gYXJyYXkgb2YgW3JvdyBpbmRleCwgY29sdW1uIGluZGV4XHJcblx0ICogICAgKHZpc2libGUpLCBjb2x1bW4gaW5kZXggKGFsbCldIGlzIGdpdmVuLlxyXG5cdCAqL1xyXG5cdFwiZm5HZXRQb3NpdGlvblwiOiBmdW5jdGlvbiAoIG5vZGUgKVxyXG5cdHtcclxuXHRcdHZhciBpZHg7XHJcblx0XHR2YXIgaW5zdCA9IHRoaXMucy5kdC5vSW5zdGFuY2U7XHJcblxyXG5cdFx0aWYgKCAhICQobm9kZSkucGFyZW50cygnLkRURkNfQ2xvbmVkJykubGVuZ3RoIClcclxuXHRcdHtcclxuXHRcdFx0Ly8gTm90IGluIGEgY2xvbmVkIHRhYmxlXHJcblx0XHRcdHJldHVybiBpbnN0LmZuR2V0UG9zaXRpb24oIG5vZGUgKTtcclxuXHRcdH1cclxuXHRcdGVsc2VcclxuXHRcdHtcclxuXHRcdFx0Ly8gSXRzIGluIHRoZSBjbG9uZWQgdGFibGUsIHNvIG5lZWQgdG8gbG9vayB1cCBwb3NpdGlvblxyXG5cdFx0XHRpZiAoIG5vZGUubm9kZU5hbWUudG9Mb3dlckNhc2UoKSA9PT0gJ3RyJyApIHtcclxuXHRcdFx0XHRpZHggPSAkKG5vZGUpLmluZGV4KCk7XHJcblx0XHRcdFx0cmV0dXJuIGluc3QuZm5HZXRQb3NpdGlvbiggJCgndHInLCB0aGlzLnMuZHQublRCb2R5KVsgaWR4IF0gKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlXHJcblx0XHRcdHtcclxuXHRcdFx0XHR2YXIgY29sSWR4ID0gJChub2RlKS5pbmRleCgpO1xyXG5cdFx0XHRcdGlkeCA9ICQobm9kZS5wYXJlbnROb2RlKS5pbmRleCgpO1xyXG5cdFx0XHRcdHZhciByb3cgPSBpbnN0LmZuR2V0UG9zaXRpb24oICQoJ3RyJywgdGhpcy5zLmR0Lm5UQm9keSlbIGlkeCBdICk7XHJcblxyXG5cdFx0XHRcdHJldHVybiBbXHJcblx0XHRcdFx0XHRyb3csXHJcblx0XHRcdFx0XHRjb2xJZHgsXHJcblx0XHRcdFx0XHRpbnN0Lm9BcGkuX2ZuVmlzaWJsZVRvQ29sdW1uSW5kZXgoIHRoaXMucy5kdCwgY29sSWR4IClcclxuXHRcdFx0XHRdO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fSxcclxuXHJcblxyXG5cclxuXHQvKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqXHJcblx0ICogUHJpdmF0ZSBtZXRob2RzICh0aGV5IGFyZSBvZiBjb3Vyc2UgcHVibGljIGluIEpTLCBidXQgcmVjb21tZW5kZWQgYXMgcHJpdmF0ZSlcclxuXHQgKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqL1xyXG5cclxuXHQvKipcclxuXHQgKiBJbml0aWFsaXNhdGlvbiBmb3IgRml4ZWRDb2x1bW5zXHJcblx0ICogIEBwYXJhbSAgIHtPYmplY3R9IG9Jbml0IFVzZXIgc2V0dGluZ3MgZm9yIGluaXRpYWxpc2F0aW9uXHJcblx0ICogIEByZXR1cm5zIHt2b2lkfVxyXG5cdCAqICBAcHJpdmF0ZVxyXG5cdCAqL1xyXG5cdFwiX2ZuQ29uc3RydWN0XCI6IGZ1bmN0aW9uICggb0luaXQgKVxyXG5cdHtcclxuXHRcdHZhciBpLCBpTGVuLCBpV2lkdGgsXHJcblx0XHRcdHRoYXQgPSB0aGlzO1xyXG5cclxuXHRcdC8qIFNhbml0eSBjaGVja2luZyAqL1xyXG5cdFx0aWYgKCB0eXBlb2YgdGhpcy5zLmR0Lm9JbnN0YW5jZS5mblZlcnNpb25DaGVjayAhPSAnZnVuY3Rpb24nIHx8XHJcblx0XHQgICAgIHRoaXMucy5kdC5vSW5zdGFuY2UuZm5WZXJzaW9uQ2hlY2soICcxLjguMCcgKSAhPT0gdHJ1ZSApXHJcblx0XHR7XHJcblx0XHRcdGFsZXJ0KCBcIkZpeGVkQ29sdW1ucyBcIitGaXhlZENvbHVtbnMuVkVSU0lPTitcIiByZXF1aXJlZCBEYXRhVGFibGVzIDEuOC4wIG9yIGxhdGVyLiBcIitcclxuXHRcdFx0XHRcIlBsZWFzZSB1cGdyYWRlIHlvdXIgRGF0YVRhYmxlcyBpbnN0YWxsYXRpb25cIiApO1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKCB0aGlzLnMuZHQub1Njcm9sbC5zWCA9PT0gXCJcIiApXHJcblx0XHR7XHJcblx0XHRcdHRoaXMucy5kdC5vSW5zdGFuY2Uub0FwaS5fZm5Mb2coIHRoaXMucy5kdCwgMSwgXCJGaXhlZENvbHVtbnMgaXMgbm90IG5lZWRlZCAobm8gXCIrXHJcblx0XHRcdFx0XCJ4LXNjcm9sbGluZyBpbiBEYXRhVGFibGVzIGVuYWJsZWQpLCBzbyBubyBhY3Rpb24gd2lsbCBiZSB0YWtlbi4gVXNlICdGaXhlZEhlYWRlcicgZm9yIFwiK1xyXG5cdFx0XHRcdFwiY29sdW1uIGZpeGluZyB3aGVuIHNjcm9sbGluZyBpcyBub3QgZW5hYmxlZFwiICk7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHJcblx0XHQvKiBBcHBseSB0aGUgc2V0dGluZ3MgZnJvbSB0aGUgdXNlciAvIGRlZmF1bHRzICovXHJcblx0XHR0aGlzLnMgPSAkLmV4dGVuZCggdHJ1ZSwgdGhpcy5zLCBGaXhlZENvbHVtbnMuZGVmYXVsdHMsIG9Jbml0ICk7XHJcblxyXG5cdFx0LyogU2V0IHVwIHRoZSBET00gYXMgd2UgbmVlZCBpdCBhbmQgY2FjaGUgbm9kZXMgKi9cclxuXHRcdHZhciBjbGFzc2VzID0gdGhpcy5zLmR0Lm9DbGFzc2VzO1xyXG5cdFx0dGhpcy5kb20uZ3JpZC5kdCA9ICQodGhpcy5zLmR0Lm5UYWJsZSkucGFyZW50cygnZGl2LicrY2xhc3Nlcy5zU2Nyb2xsV3JhcHBlcilbMF07XHJcblx0XHR0aGlzLmRvbS5zY3JvbGxlciA9ICQoJ2Rpdi4nK2NsYXNzZXMuc1Njcm9sbEJvZHksIHRoaXMuZG9tLmdyaWQuZHQgKVswXTtcclxuXHJcblx0XHQvKiBTZXQgdXAgdGhlIERPTSB0aGF0IHdlIHdhbnQgZm9yIHRoZSBmaXhlZCBjb2x1bW4gbGF5b3V0IGdyaWQgKi9cclxuXHRcdHRoaXMuX2ZuQ29sQ2FsYygpO1xyXG5cdFx0dGhpcy5fZm5HcmlkU2V0dXAoKTtcclxuXHJcblx0XHQvKiBFdmVudCBoYW5kbGVycyAqL1xyXG5cdFx0dmFyIG1vdXNlQ29udHJvbGxlcjtcclxuXHRcdHZhciBtb3VzZURvd24gPSBmYWxzZTtcclxuXHJcblx0XHQvLyBXaGVuIHRoZSBtb3VzZSBpcyBkb3duIChkcmFnIHNjcm9sbCkgdGhlIG1vdXNlIGNvbnRyb2xsZXIgY2Fubm90XHJcblx0XHQvLyBjaGFuZ2UsIGFzIHRoZSBicm93c2VyIGtlZXBzIHRoZSBvcmlnaW5hbCBlbGVtZW50IGFzIHRoZSBzY3JvbGxpbmcgb25lXHJcblx0XHQkKHRoaXMucy5kdC5uVGFibGVXcmFwcGVyKS5vbiggJ21vdXNlZG93bi5EVEZDJywgZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRtb3VzZURvd24gPSB0cnVlO1xyXG5cclxuXHRcdFx0JChkb2N1bWVudCkub25lKCAnbW91c2V1cCcsIGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0XHRtb3VzZURvd24gPSBmYWxzZTtcclxuXHRcdFx0fSApO1xyXG5cdFx0fSApO1xyXG5cclxuXHRcdC8vIFdoZW4gdGhlIGJvZHkgaXMgc2Nyb2xsZWQgLSBzY3JvbGwgdGhlIGxlZnQgYW5kIHJpZ2h0IGNvbHVtbnNcclxuXHRcdCQodGhpcy5kb20uc2Nyb2xsZXIpXHJcblx0XHRcdC5vbiggJ21vdXNlb3Zlci5EVEZDIHRvdWNoc3RhcnQuRFRGQycsIGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0XHRpZiAoICEgbW91c2VEb3duICkge1xyXG5cdFx0XHRcdFx0bW91c2VDb250cm9sbGVyID0gJ21haW4nO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSApXHJcblx0XHRcdC5vbiggJ3Njcm9sbC5EVEZDJywgZnVuY3Rpb24gKGUpIHtcclxuXHRcdFx0XHRpZiAoICEgbW91c2VDb250cm9sbGVyICYmIGUub3JpZ2luYWxFdmVudCApIHtcclxuXHRcdFx0XHRcdG1vdXNlQ29udHJvbGxlciA9ICdtYWluJztcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdGlmICggbW91c2VDb250cm9sbGVyID09PSAnbWFpbicgKSB7XHJcblx0XHRcdFx0XHRpZiAoIHRoYXQucy5pTGVmdENvbHVtbnMgPiAwICkge1xyXG5cdFx0XHRcdFx0XHR0aGF0LmRvbS5ncmlkLmxlZnQubGluZXIuc2Nyb2xsVG9wID0gdGhhdC5kb20uc2Nyb2xsZXIuc2Nyb2xsVG9wO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0aWYgKCB0aGF0LnMuaVJpZ2h0Q29sdW1ucyA+IDAgKSB7XHJcblx0XHRcdFx0XHRcdHRoYXQuZG9tLmdyaWQucmlnaHQubGluZXIuc2Nyb2xsVG9wID0gdGhhdC5kb20uc2Nyb2xsZXIuc2Nyb2xsVG9wO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSApO1xyXG5cclxuXHRcdHZhciB3aGVlbFR5cGUgPSAnb253aGVlbCcgaW4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JykgP1xyXG5cdFx0XHQnd2hlZWwuRFRGQycgOlxyXG5cdFx0XHQnbW91c2V3aGVlbC5EVEZDJztcclxuXHJcblx0XHRpZiAoIHRoYXQucy5pTGVmdENvbHVtbnMgPiAwICkge1xyXG5cdFx0XHQvLyBXaGVuIHNjcm9sbGluZyB0aGUgbGVmdCBjb2x1bW4sIHNjcm9sbCB0aGUgYm9keSBhbmQgcmlnaHQgY29sdW1uXHJcblx0XHRcdCQodGhhdC5kb20uZ3JpZC5sZWZ0LmxpbmVyKVxyXG5cdFx0XHRcdC5vbiggJ21vdXNlb3Zlci5EVEZDIHRvdWNoc3RhcnQuRFRGQycsIGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0XHRcdGlmICggISBtb3VzZURvd24gKSB7XHJcblx0XHRcdFx0XHRcdG1vdXNlQ29udHJvbGxlciA9ICdsZWZ0JztcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9IClcclxuXHRcdFx0XHQub24oICdzY3JvbGwuRFRGQycsIGZ1bmN0aW9uICggZSApIHtcclxuXHRcdFx0XHRcdGlmICggISBtb3VzZUNvbnRyb2xsZXIgJiYgZS5vcmlnaW5hbEV2ZW50ICkge1xyXG5cdFx0XHRcdFx0XHRtb3VzZUNvbnRyb2xsZXIgPSAnbGVmdCc7XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0aWYgKCBtb3VzZUNvbnRyb2xsZXIgPT09ICdsZWZ0JyApIHtcclxuXHRcdFx0XHRcdFx0dGhhdC5kb20uc2Nyb2xsZXIuc2Nyb2xsVG9wID0gdGhhdC5kb20uZ3JpZC5sZWZ0LmxpbmVyLnNjcm9sbFRvcDtcclxuXHRcdFx0XHRcdFx0aWYgKCB0aGF0LnMuaVJpZ2h0Q29sdW1ucyA+IDAgKSB7XHJcblx0XHRcdFx0XHRcdFx0dGhhdC5kb20uZ3JpZC5yaWdodC5saW5lci5zY3JvbGxUb3AgPSB0aGF0LmRvbS5ncmlkLmxlZnQubGluZXIuc2Nyb2xsVG9wO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSApXHJcblx0XHRcdFx0Lm9uKCB3aGVlbFR5cGUsIGZ1bmN0aW9uKGUpIHtcclxuXHRcdFx0XHRcdC8vIFBhc3MgaG9yaXpvbnRhbCBzY3JvbGxpbmcgdGhyb3VnaFxyXG5cdFx0XHRcdFx0dmFyIHhEZWx0YSA9IGUudHlwZSA9PT0gJ3doZWVsJyA/XHJcblx0XHRcdFx0XHRcdC1lLm9yaWdpbmFsRXZlbnQuZGVsdGFYIDpcclxuXHRcdFx0XHRcdFx0ZS5vcmlnaW5hbEV2ZW50LndoZWVsRGVsdGFYO1xyXG5cdFx0XHRcdFx0dGhhdC5kb20uc2Nyb2xsZXIuc2Nyb2xsTGVmdCAtPSB4RGVsdGE7XHJcblx0XHRcdFx0fSApO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmICggdGhhdC5zLmlSaWdodENvbHVtbnMgPiAwICkge1xyXG5cdFx0XHQvLyBXaGVuIHNjcm9sbGluZyB0aGUgcmlnaHQgY29sdW1uLCBzY3JvbGwgdGhlIGJvZHkgYW5kIHRoZSBsZWZ0IGNvbHVtblxyXG5cdFx0XHQkKHRoYXQuZG9tLmdyaWQucmlnaHQubGluZXIpXHJcblx0XHRcdFx0Lm9uKCAnbW91c2VvdmVyLkRURkMgdG91Y2hzdGFydC5EVEZDJywgZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRcdFx0aWYgKCAhIG1vdXNlRG93biApIHtcclxuXHRcdFx0XHRcdFx0bW91c2VDb250cm9sbGVyID0gJ3JpZ2h0JztcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9IClcclxuXHRcdFx0XHQub24oICdzY3JvbGwuRFRGQycsIGZ1bmN0aW9uICggZSApIHtcclxuXHRcdFx0XHRcdGlmICggISBtb3VzZUNvbnRyb2xsZXIgJiYgZS5vcmlnaW5hbEV2ZW50ICkge1xyXG5cdFx0XHRcdFx0XHRtb3VzZUNvbnRyb2xsZXIgPSAncmlnaHQnO1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdGlmICggbW91c2VDb250cm9sbGVyID09PSAncmlnaHQnICkge1xyXG5cdFx0XHRcdFx0XHR0aGF0LmRvbS5zY3JvbGxlci5zY3JvbGxUb3AgPSB0aGF0LmRvbS5ncmlkLnJpZ2h0LmxpbmVyLnNjcm9sbFRvcDtcclxuXHRcdFx0XHRcdFx0aWYgKCB0aGF0LnMuaUxlZnRDb2x1bW5zID4gMCApIHtcclxuXHRcdFx0XHRcdFx0XHR0aGF0LmRvbS5ncmlkLmxlZnQubGluZXIuc2Nyb2xsVG9wID0gdGhhdC5kb20uZ3JpZC5yaWdodC5saW5lci5zY3JvbGxUb3A7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9IClcclxuXHRcdFx0XHQub24oIHdoZWVsVHlwZSwgZnVuY3Rpb24oZSkge1xyXG5cdFx0XHRcdFx0Ly8gUGFzcyBob3Jpem9udGFsIHNjcm9sbGluZyB0aHJvdWdoXHJcblx0XHRcdFx0XHR2YXIgeERlbHRhID0gZS50eXBlID09PSAnd2hlZWwnID9cclxuXHRcdFx0XHRcdFx0LWUub3JpZ2luYWxFdmVudC5kZWx0YVggOlxyXG5cdFx0XHRcdFx0XHRlLm9yaWdpbmFsRXZlbnQud2hlZWxEZWx0YVg7XHJcblx0XHRcdFx0XHR0aGF0LmRvbS5zY3JvbGxlci5zY3JvbGxMZWZ0IC09IHhEZWx0YTtcclxuXHRcdFx0XHR9ICk7XHJcblx0XHR9XHJcblxyXG5cdFx0JCh3aW5kb3cpLm9uKCAncmVzaXplLkRURkMnLCBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdHRoYXQuX2ZuR3JpZExheW91dC5jYWxsKCB0aGF0ICk7XHJcblx0XHR9ICk7XHJcblxyXG5cdFx0dmFyIGJGaXJzdERyYXcgPSB0cnVlO1xyXG5cdFx0dmFyIGpxVGFibGUgPSAkKHRoaXMucy5kdC5uVGFibGUpO1xyXG5cclxuXHRcdGpxVGFibGVcclxuXHRcdFx0Lm9uKCAnZHJhdy5kdC5EVEZDJywgZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRcdHRoYXQuX2ZuQ29sQ2FsYygpO1xyXG5cdFx0XHRcdHRoYXQuX2ZuRHJhdy5jYWxsKCB0aGF0LCBiRmlyc3REcmF3ICk7XHJcblx0XHRcdFx0YkZpcnN0RHJhdyA9IGZhbHNlO1xyXG5cdFx0XHR9IClcclxuXHRcdFx0Lm9uKCAnY29sdW1uLXNpemluZy5kdC5EVEZDJywgZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRcdHRoYXQuX2ZuQ29sQ2FsYygpO1xyXG5cdFx0XHRcdHRoYXQuX2ZuR3JpZExheW91dCggdGhhdCApO1xyXG5cdFx0XHR9IClcclxuXHRcdFx0Lm9uKCAnY29sdW1uLXZpc2liaWxpdHkuZHQuRFRGQycsIGZ1bmN0aW9uICggZSwgc2V0dGluZ3MsIGNvbHVtbiwgdmlzLCByZWNhbGMgKSB7XHJcblx0XHRcdFx0aWYgKCByZWNhbGMgPT09IHVuZGVmaW5lZCB8fCByZWNhbGMgKSB7XHJcblx0XHRcdFx0XHR0aGF0Ll9mbkNvbENhbGMoKTtcclxuXHRcdFx0XHRcdHRoYXQuX2ZuR3JpZExheW91dCggdGhhdCApO1xyXG5cdFx0XHRcdFx0dGhhdC5fZm5EcmF3KCB0cnVlICk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9IClcclxuXHRcdFx0Lm9uKCAnc2VsZWN0LmR0LkRURkMgZGVzZWxlY3QuZHQuRFRGQycsIGZ1bmN0aW9uICggZSwgZHQsIHR5cGUsIGluZGV4ZXMgKSB7XHJcblx0XHRcdFx0aWYgKCBlLm5hbWVzcGFjZSA9PT0gJ2R0JyApIHtcclxuXHRcdFx0XHRcdHRoYXQuX2ZuRHJhdyggZmFsc2UgKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0gKVxyXG5cdFx0XHQub24oICdkZXN0cm95LmR0LkRURkMnLCBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdFx0anFUYWJsZS5vZmYoICcuRFRGQycgKTtcclxuXHJcblx0XHRcdFx0JCh0aGF0LmRvbS5zY3JvbGxlcikub2ZmKCAnLkRURkMnICk7XHJcblx0XHRcdFx0JCh3aW5kb3cpLm9mZiggJy5EVEZDJyApO1xyXG5cdFx0XHRcdCQodGhhdC5zLmR0Lm5UYWJsZVdyYXBwZXIpLm9mZiggJy5EVEZDJyApO1xyXG5cclxuXHRcdFx0XHQkKHRoYXQuZG9tLmdyaWQubGVmdC5saW5lcikub2ZmKCAnLkRURkMgJyt3aGVlbFR5cGUgKTtcclxuXHRcdFx0XHQkKHRoYXQuZG9tLmdyaWQubGVmdC53cmFwcGVyKS5yZW1vdmUoKTtcclxuXHJcblx0XHRcdFx0JCh0aGF0LmRvbS5ncmlkLnJpZ2h0LmxpbmVyKS5vZmYoICcuRFRGQyAnK3doZWVsVHlwZSApO1xyXG5cdFx0XHRcdCQodGhhdC5kb20uZ3JpZC5yaWdodC53cmFwcGVyKS5yZW1vdmUoKTtcclxuXHRcdFx0fSApO1xyXG5cclxuXHRcdC8qIEdldCB0aGluZ3MgcmlnaHQgdG8gc3RhcnQgd2l0aCAtIG5vdGUgdGhhdCBkdWUgdG8gYWRqdXN0aW5nIHRoZSBjb2x1bW5zLCB0aGVyZSBtdXN0IGJlXHJcblx0XHQgKiBhbm90aGVyIHJlZHJhdyBvZiB0aGUgbWFpbiB0YWJsZS4gSXQgZG9lc24ndCBuZWVkIHRvIGJlIGEgZnVsbCByZWRyYXcgaG93ZXZlci5cclxuXHRcdCAqL1xyXG5cdFx0dGhpcy5fZm5HcmlkTGF5b3V0KCk7XHJcblx0XHR0aGlzLnMuZHQub0luc3RhbmNlLmZuRHJhdyhmYWxzZSk7XHJcblx0fSxcclxuXHJcblxyXG5cdC8qKlxyXG5cdCAqIENhbGN1bGF0ZSB0aGUgY29sdW1uIHdpZHRocyBmb3IgdGhlIGdyaWQgbGF5b3V0XHJcblx0ICogIEByZXR1cm5zIHt2b2lkfVxyXG5cdCAqICBAcHJpdmF0ZVxyXG5cdCAqL1xyXG5cdFwiX2ZuQ29sQ2FsY1wiOiBmdW5jdGlvbiAoKVxyXG5cdHtcclxuXHRcdHZhciB0aGF0ID0gdGhpcztcclxuXHRcdHZhciBpTGVmdFdpZHRoID0gMDtcclxuXHRcdHZhciBpUmlnaHRXaWR0aCA9IDA7XHJcblxyXG5cdFx0dGhpcy5zLmFpSW5uZXJXaWR0aHMgPSBbXTtcclxuXHRcdHRoaXMucy5haU91dGVyV2lkdGhzID0gW107XHJcblxyXG5cdFx0JC5lYWNoKCB0aGlzLnMuZHQuYW9Db2x1bW5zLCBmdW5jdGlvbiAoaSwgY29sKSB7XHJcblx0XHRcdHZhciB0aCA9ICQoY29sLm5UaCk7XHJcblx0XHRcdHZhciBib3JkZXI7XHJcblxyXG5cdFx0XHRpZiAoICEgdGguZmlsdGVyKCc6dmlzaWJsZScpLmxlbmd0aCApIHtcclxuXHRcdFx0XHR0aGF0LnMuYWlJbm5lcldpZHRocy5wdXNoKCAwICk7XHJcblx0XHRcdFx0dGhhdC5zLmFpT3V0ZXJXaWR0aHMucHVzaCggMCApO1xyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2VcclxuXHRcdFx0e1xyXG5cdFx0XHRcdC8vIElubmVyIHdpZHRoIGlzIHVzZWQgdG8gYXNzaWduIHdpZHRocyB0byBjZWxsc1xyXG5cdFx0XHRcdC8vIE91dGVyIHdpZHRoIGlzIHVzZWQgdG8gY2FsY3VsYXRlIHRoZSBjb250YWluZXJcclxuXHRcdFx0XHR2YXIgaVdpZHRoID0gdGgub3V0ZXJXaWR0aCgpO1xyXG5cclxuXHRcdFx0XHQvLyBXaGVuIHdvcmtpbmcgd2l0aCB0aGUgbGVmdCBtb3N0LWNlbGwsIG5lZWQgdG8gYWRkIG9uIHRoZVxyXG5cdFx0XHRcdC8vIHRhYmxlJ3MgYm9yZGVyIHRvIHRoZSBvdXRlcldpZHRoLCBzaW5jZSB3ZSBuZWVkIHRvIHRha2VcclxuXHRcdFx0XHQvLyBhY2NvdW50IG9mIGl0LCBidXQgaXQgaXNuJ3QgaW4gYW55IGNlbGxcclxuXHRcdFx0XHRpZiAoIHRoYXQucy5haU91dGVyV2lkdGhzLmxlbmd0aCA9PT0gMCApIHtcclxuXHRcdFx0XHRcdGJvcmRlciA9ICQodGhhdC5zLmR0Lm5UYWJsZSkuY3NzKCdib3JkZXItbGVmdC13aWR0aCcpO1xyXG5cdFx0XHRcdFx0aVdpZHRoICs9IHR5cGVvZiBib3JkZXIgPT09ICdzdHJpbmcnID8gMSA6IHBhcnNlSW50KCBib3JkZXIsIDEwICk7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQvLyBMaWtld2lzZSB3aXRoIHRoZSBmaW5hbCBjb2x1bW4gb24gdGhlIHJpZ2h0XHJcblx0XHRcdFx0aWYgKCB0aGF0LnMuYWlPdXRlcldpZHRocy5sZW5ndGggPT09IHRoYXQucy5kdC5hb0NvbHVtbnMubGVuZ3RoLTEgKSB7XHJcblx0XHRcdFx0XHRib3JkZXIgPSAkKHRoYXQucy5kdC5uVGFibGUpLmNzcygnYm9yZGVyLXJpZ2h0LXdpZHRoJyk7XHJcblx0XHRcdFx0XHRpV2lkdGggKz0gdHlwZW9mIGJvcmRlciA9PT0gJ3N0cmluZycgPyAxIDogcGFyc2VJbnQoIGJvcmRlciwgMTAgKTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdHRoYXQucy5haU91dGVyV2lkdGhzLnB1c2goIGlXaWR0aCApO1xyXG5cdFx0XHRcdHRoYXQucy5haUlubmVyV2lkdGhzLnB1c2goIHRoLndpZHRoKCkgKTtcclxuXHJcblx0XHRcdFx0aWYgKCBpIDwgdGhhdC5zLmlMZWZ0Q29sdW1ucyApXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0aUxlZnRXaWR0aCArPSBpV2lkdGg7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRpZiAoIHRoYXQucy5pVGFibGVDb2x1bW5zLXRoYXQucy5pUmlnaHRDb2x1bW5zIDw9IGkgKVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGlSaWdodFdpZHRoICs9IGlXaWR0aDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH0gKTtcclxuXHJcblx0XHR0aGlzLnMuaUxlZnRXaWR0aCA9IGlMZWZ0V2lkdGg7XHJcblx0XHR0aGlzLnMuaVJpZ2h0V2lkdGggPSBpUmlnaHRXaWR0aDtcclxuXHR9LFxyXG5cclxuXHJcblx0LyoqXHJcblx0ICogU2V0IHVwIHRoZSBET00gZm9yIHRoZSBmaXhlZCBjb2x1bW4uIFRoZSB3YXkgdGhlIGxheW91dCB3b3JrcyBpcyB0byBjcmVhdGUgYSAxeDMgZ3JpZFxyXG5cdCAqIGZvciB0aGUgbGVmdCBjb2x1bW4sIHRoZSBEYXRhVGFibGUgKGZvciB3aGljaCB3ZSBqdXN0IHJldXNlIHRoZSBzY3JvbGxpbmcgZWxlbWVudCBEYXRhVGFibGVcclxuXHQgKiBwdXRzIGludG8gdGhlIERPTSkgYW5kIHRoZSByaWdodCBjb2x1bW4uIEluIGVhY2ggb2YgaGUgdHdvIGZpeGVkIGNvbHVtbiBlbGVtZW50cyB0aGVyZSBpcyBhXHJcblx0ICogZ3JvdXBpbmcgd3JhcHBlciBlbGVtZW50IGFuZCB0aGVuIGEgaGVhZCwgYm9keSBhbmQgZm9vdGVyIHdyYXBwZXIuIEluIGVhY2ggb2YgdGhlc2Ugd2UgdGhlblxyXG5cdCAqIHBsYWNlIHRoZSBjbG9uZWQgaGVhZGVyLCBib2R5IG9yIGZvb3RlciB0YWJsZXMuIFRoaXMgZWZmZWN0aXZlbHkgZ2l2ZXMgYXMgM3gzIGdyaWQgc3RydWN0dXJlLlxyXG5cdCAqICBAcmV0dXJucyB7dm9pZH1cclxuXHQgKiAgQHByaXZhdGVcclxuXHQgKi9cclxuXHRcIl9mbkdyaWRTZXR1cFwiOiBmdW5jdGlvbiAoKVxyXG5cdHtcclxuXHRcdHZhciB0aGF0ID0gdGhpcztcclxuXHRcdHZhciBvT3ZlcmZsb3cgPSB0aGlzLl9mbkRUT3ZlcmZsb3coKTtcclxuXHRcdHZhciBibG9jaztcclxuXHJcblx0XHR0aGlzLmRvbS5ib2R5ID0gdGhpcy5zLmR0Lm5UYWJsZTtcclxuXHRcdHRoaXMuZG9tLmhlYWRlciA9IHRoaXMucy5kdC5uVEhlYWQucGFyZW50Tm9kZTtcclxuXHRcdHRoaXMuZG9tLmhlYWRlci5wYXJlbnROb2RlLnBhcmVudE5vZGUuc3R5bGUucG9zaXRpb24gPSBcInJlbGF0aXZlXCI7XHJcblxyXG5cdFx0dmFyIG5TV3JhcHBlciA9XHJcblx0XHRcdCQoJzxkaXYgY2xhc3M9XCJEVEZDX1Njcm9sbFdyYXBwZXJcIiBzdHlsZT1cInBvc2l0aW9uOnJlbGF0aXZlOyBjbGVhcjpib3RoO1wiPicrXHJcblx0XHRcdFx0JzxkaXYgY2xhc3M9XCJEVEZDX0xlZnRXcmFwcGVyXCIgc3R5bGU9XCJwb3NpdGlvbjphYnNvbHV0ZTsgdG9wOjA7IGxlZnQ6MDtcIj4nK1xyXG5cdFx0XHRcdFx0JzxkaXYgY2xhc3M9XCJEVEZDX0xlZnRIZWFkV3JhcHBlclwiIHN0eWxlPVwicG9zaXRpb246cmVsYXRpdmU7IHRvcDowOyBsZWZ0OjA7IG92ZXJmbG93OmhpZGRlbjtcIj48L2Rpdj4nK1xyXG5cdFx0XHRcdFx0JzxkaXYgY2xhc3M9XCJEVEZDX0xlZnRCb2R5V3JhcHBlclwiIHN0eWxlPVwicG9zaXRpb246cmVsYXRpdmU7IHRvcDowOyBsZWZ0OjA7IG92ZXJmbG93OmhpZGRlbjtcIj4nK1xyXG5cdFx0XHRcdFx0XHQnPGRpdiBjbGFzcz1cIkRURkNfTGVmdEJvZHlMaW5lclwiIHN0eWxlPVwicG9zaXRpb246cmVsYXRpdmU7IHRvcDowOyBsZWZ0OjA7IG92ZXJmbG93LXk6c2Nyb2xsO1wiPjwvZGl2PicrXHJcblx0XHRcdFx0XHQnPC9kaXY+JytcclxuXHRcdFx0XHRcdCc8ZGl2IGNsYXNzPVwiRFRGQ19MZWZ0Rm9vdFdyYXBwZXJcIiBzdHlsZT1cInBvc2l0aW9uOnJlbGF0aXZlOyB0b3A6MDsgbGVmdDowOyBvdmVyZmxvdzpoaWRkZW47XCI+PC9kaXY+JytcclxuXHRcdFx0XHQnPC9kaXY+JytcclxuXHRcdFx0XHQnPGRpdiBjbGFzcz1cIkRURkNfUmlnaHRXcmFwcGVyXCIgc3R5bGU9XCJwb3NpdGlvbjphYnNvbHV0ZTsgdG9wOjA7IHJpZ2h0OjA7XCI+JytcclxuXHRcdFx0XHRcdCc8ZGl2IGNsYXNzPVwiRFRGQ19SaWdodEhlYWRXcmFwcGVyXCIgc3R5bGU9XCJwb3NpdGlvbjpyZWxhdGl2ZTsgdG9wOjA7IGxlZnQ6MDtcIj4nK1xyXG5cdFx0XHRcdFx0XHQnPGRpdiBjbGFzcz1cIkRURkNfUmlnaHRIZWFkQmxvY2tlciBEVEZDX0Jsb2NrZXJcIiBzdHlsZT1cInBvc2l0aW9uOmFic29sdXRlOyB0b3A6MDsgYm90dG9tOjA7XCI+PC9kaXY+JytcclxuXHRcdFx0XHRcdCc8L2Rpdj4nK1xyXG5cdFx0XHRcdFx0JzxkaXYgY2xhc3M9XCJEVEZDX1JpZ2h0Qm9keVdyYXBwZXJcIiBzdHlsZT1cInBvc2l0aW9uOnJlbGF0aXZlOyB0b3A6MDsgbGVmdDowOyBvdmVyZmxvdzpoaWRkZW47XCI+JytcclxuXHRcdFx0XHRcdFx0JzxkaXYgY2xhc3M9XCJEVEZDX1JpZ2h0Qm9keUxpbmVyXCIgc3R5bGU9XCJwb3NpdGlvbjpyZWxhdGl2ZTsgdG9wOjA7IGxlZnQ6MDsgb3ZlcmZsb3cteTpzY3JvbGw7XCI+PC9kaXY+JytcclxuXHRcdFx0XHRcdCc8L2Rpdj4nK1xyXG5cdFx0XHRcdFx0JzxkaXYgY2xhc3M9XCJEVEZDX1JpZ2h0Rm9vdFdyYXBwZXJcIiBzdHlsZT1cInBvc2l0aW9uOnJlbGF0aXZlOyB0b3A6MDsgbGVmdDowO1wiPicrXHJcblx0XHRcdFx0XHRcdCc8ZGl2IGNsYXNzPVwiRFRGQ19SaWdodEZvb3RCbG9ja2VyIERURkNfQmxvY2tlclwiIHN0eWxlPVwicG9zaXRpb246YWJzb2x1dGU7IHRvcDowOyBib3R0b206MDtcIj48L2Rpdj4nK1xyXG5cdFx0XHRcdFx0JzwvZGl2PicrXHJcblx0XHRcdFx0JzwvZGl2PicrXHJcblx0XHRcdCc8L2Rpdj4nKVswXTtcclxuXHRcdHZhciBuTGVmdCA9IG5TV3JhcHBlci5jaGlsZE5vZGVzWzBdO1xyXG5cdFx0dmFyIG5SaWdodCA9IG5TV3JhcHBlci5jaGlsZE5vZGVzWzFdO1xyXG5cclxuXHRcdHRoaXMuZG9tLmdyaWQuZHQucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoIG5TV3JhcHBlciwgdGhpcy5kb20uZ3JpZC5kdCApO1xyXG5cdFx0blNXcmFwcGVyLmFwcGVuZENoaWxkKCB0aGlzLmRvbS5ncmlkLmR0ICk7XHJcblxyXG5cdFx0dGhpcy5kb20uZ3JpZC53cmFwcGVyID0gblNXcmFwcGVyO1xyXG5cclxuXHRcdGlmICggdGhpcy5zLmlMZWZ0Q29sdW1ucyA+IDAgKVxyXG5cdFx0e1xyXG5cdFx0XHR0aGlzLmRvbS5ncmlkLmxlZnQud3JhcHBlciA9IG5MZWZ0O1xyXG5cdFx0XHR0aGlzLmRvbS5ncmlkLmxlZnQuaGVhZCA9IG5MZWZ0LmNoaWxkTm9kZXNbMF07XHJcblx0XHRcdHRoaXMuZG9tLmdyaWQubGVmdC5ib2R5ID0gbkxlZnQuY2hpbGROb2Rlc1sxXTtcclxuXHRcdFx0dGhpcy5kb20uZ3JpZC5sZWZ0LmxpbmVyID0gJCgnZGl2LkRURkNfTGVmdEJvZHlMaW5lcicsIG5TV3JhcHBlcilbMF07XHJcblxyXG5cdFx0XHRuU1dyYXBwZXIuYXBwZW5kQ2hpbGQoIG5MZWZ0ICk7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKCB0aGlzLnMuaVJpZ2h0Q29sdW1ucyA+IDAgKVxyXG5cdFx0e1xyXG5cdFx0XHR0aGlzLmRvbS5ncmlkLnJpZ2h0LndyYXBwZXIgPSBuUmlnaHQ7XHJcblx0XHRcdHRoaXMuZG9tLmdyaWQucmlnaHQuaGVhZCA9IG5SaWdodC5jaGlsZE5vZGVzWzBdO1xyXG5cdFx0XHR0aGlzLmRvbS5ncmlkLnJpZ2h0LmJvZHkgPSBuUmlnaHQuY2hpbGROb2Rlc1sxXTtcclxuXHRcdFx0dGhpcy5kb20uZ3JpZC5yaWdodC5saW5lciA9ICQoJ2Rpdi5EVEZDX1JpZ2h0Qm9keUxpbmVyJywgblNXcmFwcGVyKVswXTtcclxuXHJcblx0XHRcdG5SaWdodC5zdHlsZS5yaWdodCA9IG9PdmVyZmxvdy5iYXIrXCJweFwiO1xyXG5cclxuXHRcdFx0YmxvY2sgPSAkKCdkaXYuRFRGQ19SaWdodEhlYWRCbG9ja2VyJywgblNXcmFwcGVyKVswXTtcclxuXHRcdFx0YmxvY2suc3R5bGUud2lkdGggPSBvT3ZlcmZsb3cuYmFyK1wicHhcIjtcclxuXHRcdFx0YmxvY2suc3R5bGUucmlnaHQgPSAtb092ZXJmbG93LmJhcitcInB4XCI7XHJcblx0XHRcdHRoaXMuZG9tLmdyaWQucmlnaHQuaGVhZEJsb2NrID0gYmxvY2s7XHJcblxyXG5cdFx0XHRibG9jayA9ICQoJ2Rpdi5EVEZDX1JpZ2h0Rm9vdEJsb2NrZXInLCBuU1dyYXBwZXIpWzBdO1xyXG5cdFx0XHRibG9jay5zdHlsZS53aWR0aCA9IG9PdmVyZmxvdy5iYXIrXCJweFwiO1xyXG5cdFx0XHRibG9jay5zdHlsZS5yaWdodCA9IC1vT3ZlcmZsb3cuYmFyK1wicHhcIjtcclxuXHRcdFx0dGhpcy5kb20uZ3JpZC5yaWdodC5mb290QmxvY2sgPSBibG9jaztcclxuXHJcblx0XHRcdG5TV3JhcHBlci5hcHBlbmRDaGlsZCggblJpZ2h0ICk7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKCB0aGlzLnMuZHQublRGb290IClcclxuXHRcdHtcclxuXHRcdFx0dGhpcy5kb20uZm9vdGVyID0gdGhpcy5zLmR0Lm5URm9vdC5wYXJlbnROb2RlO1xyXG5cdFx0XHRpZiAoIHRoaXMucy5pTGVmdENvbHVtbnMgPiAwIClcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHRoaXMuZG9tLmdyaWQubGVmdC5mb290ID0gbkxlZnQuY2hpbGROb2Rlc1syXTtcclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAoIHRoaXMucy5pUmlnaHRDb2x1bW5zID4gMCApXHJcblx0XHRcdHtcclxuXHRcdFx0XHR0aGlzLmRvbS5ncmlkLnJpZ2h0LmZvb3QgPSBuUmlnaHQuY2hpbGROb2Rlc1syXTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdC8vIFJUTCBzdXBwb3J0IC0gc3dhcCB0aGUgcG9zaXRpb24gb2YgdGhlIGxlZnQgYW5kIHJpZ2h0IGNvbHVtbnMgKCM0OClcclxuXHRcdGlmICggdGhpcy5zLnJ0bCApIHtcclxuXHRcdFx0JCgnZGl2LkRURkNfUmlnaHRIZWFkQmxvY2tlcicsIG5TV3JhcHBlcikuY3NzKCB7XHJcblx0XHRcdFx0bGVmdDogLW9PdmVyZmxvdy5iYXIrJ3B4JyxcclxuXHRcdFx0XHRyaWdodDogJydcclxuXHRcdFx0fSApO1xyXG5cdFx0fVxyXG5cdH0sXHJcblxyXG5cclxuXHQvKipcclxuXHQgKiBTdHlsZSBhbmQgcG9zaXRpb24gdGhlIGdyaWQgdXNlZCBmb3IgdGhlIEZpeGVkQ29sdW1ucyBsYXlvdXRcclxuXHQgKiAgQHJldHVybnMge3ZvaWR9XHJcblx0ICogIEBwcml2YXRlXHJcblx0ICovXHJcblx0XCJfZm5HcmlkTGF5b3V0XCI6IGZ1bmN0aW9uICgpXHJcblx0e1xyXG5cdFx0dmFyIHRoYXQgPSB0aGlzO1xyXG5cdFx0dmFyIG9HcmlkID0gdGhpcy5kb20uZ3JpZDtcclxuXHRcdHZhciBpV2lkdGggPSAkKG9HcmlkLndyYXBwZXIpLndpZHRoKCk7XHJcblx0XHR2YXIgaUJvZHlIZWlnaHQgPSAkKHRoaXMucy5kdC5uVGFibGUucGFyZW50Tm9kZSkub3V0ZXJIZWlnaHQoKTtcclxuXHRcdHZhciBpRnVsbEhlaWdodCA9ICQodGhpcy5zLmR0Lm5UYWJsZS5wYXJlbnROb2RlLnBhcmVudE5vZGUpLm91dGVySGVpZ2h0KCk7XHJcblx0XHR2YXIgb092ZXJmbG93ID0gdGhpcy5fZm5EVE92ZXJmbG93KCk7XHJcblx0XHR2YXIgaUxlZnRXaWR0aCA9IHRoaXMucy5pTGVmdFdpZHRoO1xyXG5cdFx0dmFyIGlSaWdodFdpZHRoID0gdGhpcy5zLmlSaWdodFdpZHRoO1xyXG5cdFx0dmFyIHJ0bCA9ICQodGhpcy5kb20uYm9keSkuY3NzKCdkaXJlY3Rpb24nKSA9PT0gJ3J0bCc7XHJcblx0XHR2YXIgd3JhcHBlcjtcclxuXHRcdHZhciBzY3JvbGxiYXJBZGp1c3QgPSBmdW5jdGlvbiAoIG5vZGUsIHdpZHRoICkge1xyXG5cdFx0XHRpZiAoICEgb092ZXJmbG93LmJhciApIHtcclxuXHRcdFx0XHQvLyBJZiB0aGVyZSBpcyBubyBzY3JvbGxiYXIgKE1hY3MpIHdlIG5lZWQgdG8gaGlkZSB0aGUgYXV0byBzY3JvbGxiYXJcclxuXHRcdFx0XHRub2RlLnN0eWxlLndpZHRoID0gKHdpZHRoKzIwKStcInB4XCI7XHJcblx0XHRcdFx0bm9kZS5zdHlsZS5wYWRkaW5nUmlnaHQgPSBcIjIwcHhcIjtcclxuXHRcdFx0XHRub2RlLnN0eWxlLmJveFNpemluZyA9IFwiYm9yZGVyLWJveFwiO1xyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2UgaWYgKCB0aGF0Ll9maXJlZm94U2Nyb2xsRXJyb3IoKSApIHtcclxuXHRcdFx0XHQvLyBTZWUgdGhlIGFib3ZlIGZ1bmN0aW9uIGZvciB3aHkgdGhpcyBpcyByZXF1aXJlZFxyXG5cdFx0XHRcdGlmICggJChub2RlKS5oZWlnaHQoKSA+IDM0ICkge1xyXG5cdFx0XHRcdFx0bm9kZS5zdHlsZS53aWR0aCA9ICh3aWR0aCtvT3ZlcmZsb3cuYmFyKStcInB4XCI7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2Uge1xyXG5cdFx0XHRcdC8vIE90aGVyd2lzZSBqdXN0IG92ZXJmbG93IGJ5IHRoZSBzY3JvbGxiYXJcclxuXHRcdFx0XHRub2RlLnN0eWxlLndpZHRoID0gKHdpZHRoK29PdmVyZmxvdy5iYXIpK1wicHhcIjtcclxuXHRcdFx0fVxyXG5cdFx0fTtcclxuXHJcblx0XHQvLyBXaGVuIHggc2Nyb2xsaW5nIC0gZG9uJ3QgcGFpbnQgdGhlIGZpeGVkIGNvbHVtbnMgb3ZlciB0aGUgeCBzY3JvbGxiYXJcclxuXHRcdGlmICggb092ZXJmbG93LnggKVxyXG5cdFx0e1xyXG5cdFx0XHRpQm9keUhlaWdodCAtPSBvT3ZlcmZsb3cuYmFyO1xyXG5cdFx0fVxyXG5cclxuXHRcdG9HcmlkLndyYXBwZXIuc3R5bGUuaGVpZ2h0ID0gaUZ1bGxIZWlnaHQrXCJweFwiO1xyXG5cclxuXHRcdGlmICggdGhpcy5zLmlMZWZ0Q29sdW1ucyA+IDAgKVxyXG5cdFx0e1xyXG5cdFx0XHR3cmFwcGVyID0gb0dyaWQubGVmdC53cmFwcGVyO1xyXG5cdFx0XHR3cmFwcGVyLnN0eWxlLndpZHRoID0gaUxlZnRXaWR0aCsncHgnO1xyXG5cdFx0XHR3cmFwcGVyLnN0eWxlLmhlaWdodCA9ICcxcHgnO1xyXG5cclxuXHRcdFx0Ly8gU3dhcCB0aGUgcG9zaXRpb24gb2YgdGhlIGxlZnQgYW5kIHJpZ2h0IGNvbHVtbnMgZm9yIHJ0bCAoIzQ4KVxyXG5cdFx0XHQvLyBUaGlzIGlzIGFsd2F5cyB1cCBhZ2FpbnN0IHRoZSBlZGdlLCBzY3JvbGxiYXIgb24gdGhlIGZhciBzaWRlXHJcblx0XHRcdGlmICggcnRsICkge1xyXG5cdFx0XHRcdHdyYXBwZXIuc3R5bGUubGVmdCA9ICcnO1xyXG5cdFx0XHRcdHdyYXBwZXIuc3R5bGUucmlnaHQgPSAwO1xyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2Uge1xyXG5cdFx0XHRcdHdyYXBwZXIuc3R5bGUubGVmdCA9IDA7XHJcblx0XHRcdFx0d3JhcHBlci5zdHlsZS5yaWdodCA9ICcnO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRvR3JpZC5sZWZ0LmJvZHkuc3R5bGUuaGVpZ2h0ID0gaUJvZHlIZWlnaHQrXCJweFwiO1xyXG5cdFx0XHRpZiAoIG9HcmlkLmxlZnQuZm9vdCApIHtcclxuXHRcdFx0XHRvR3JpZC5sZWZ0LmZvb3Quc3R5bGUudG9wID0gKG9PdmVyZmxvdy54ID8gb092ZXJmbG93LmJhciA6IDApK1wicHhcIjsgLy8gc2hpZnQgZm9vdGVyIGZvciBzY3JvbGxiYXJcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0c2Nyb2xsYmFyQWRqdXN0KCBvR3JpZC5sZWZ0LmxpbmVyLCBpTGVmdFdpZHRoICk7XHJcblx0XHRcdG9HcmlkLmxlZnQubGluZXIuc3R5bGUuaGVpZ2h0ID0gaUJvZHlIZWlnaHQrXCJweFwiO1xyXG5cdFx0XHRvR3JpZC5sZWZ0LmxpbmVyLnN0eWxlLm1heEhlaWdodCA9IGlCb2R5SGVpZ2h0K1wicHhcIjtcclxuXHRcdH1cclxuXHJcblx0XHRpZiAoIHRoaXMucy5pUmlnaHRDb2x1bW5zID4gMCApXHJcblx0XHR7XHJcblx0XHRcdHdyYXBwZXIgPSBvR3JpZC5yaWdodC53cmFwcGVyO1xyXG5cdFx0XHR3cmFwcGVyLnN0eWxlLndpZHRoID0gaVJpZ2h0V2lkdGgrJ3B4JztcclxuXHRcdFx0d3JhcHBlci5zdHlsZS5oZWlnaHQgPSAnMXB4JztcclxuXHJcblx0XHRcdC8vIE5lZWQgdG8gdGFrZSBhY2NvdW50IG9mIHRoZSB2ZXJ0aWNhbCBzY3JvbGxiYXJcclxuXHRcdFx0aWYgKCB0aGlzLnMucnRsICkge1xyXG5cdFx0XHRcdHdyYXBwZXIuc3R5bGUubGVmdCA9IG9PdmVyZmxvdy55ID8gb092ZXJmbG93LmJhcisncHgnIDogMDtcclxuXHRcdFx0XHR3cmFwcGVyLnN0eWxlLnJpZ2h0ID0gJyc7XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZSB7XHJcblx0XHRcdFx0d3JhcHBlci5zdHlsZS5sZWZ0ID0gJyc7XHJcblx0XHRcdFx0d3JhcHBlci5zdHlsZS5yaWdodCA9IG9PdmVyZmxvdy55ID8gb092ZXJmbG93LmJhcisncHgnIDogMDtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0b0dyaWQucmlnaHQuYm9keS5zdHlsZS5oZWlnaHQgPSBpQm9keUhlaWdodCtcInB4XCI7XHJcblx0XHRcdGlmICggb0dyaWQucmlnaHQuZm9vdCApIHtcclxuXHRcdFx0XHRvR3JpZC5yaWdodC5mb290LnN0eWxlLnRvcCA9IChvT3ZlcmZsb3cueCA/IG9PdmVyZmxvdy5iYXIgOiAwKStcInB4XCI7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHNjcm9sbGJhckFkanVzdCggb0dyaWQucmlnaHQubGluZXIsIGlSaWdodFdpZHRoICk7XHJcblx0XHRcdG9HcmlkLnJpZ2h0LmxpbmVyLnN0eWxlLmhlaWdodCA9IGlCb2R5SGVpZ2h0K1wicHhcIjtcclxuXHRcdFx0b0dyaWQucmlnaHQubGluZXIuc3R5bGUubWF4SGVpZ2h0ID0gaUJvZHlIZWlnaHQrXCJweFwiO1xyXG5cclxuXHRcdFx0b0dyaWQucmlnaHQuaGVhZEJsb2NrLnN0eWxlLmRpc3BsYXkgPSBvT3ZlcmZsb3cueSA/ICdibG9jaycgOiAnbm9uZSc7XHJcblx0XHRcdG9HcmlkLnJpZ2h0LmZvb3RCbG9jay5zdHlsZS5kaXNwbGF5ID0gb092ZXJmbG93LnkgPyAnYmxvY2snIDogJ25vbmUnO1xyXG5cdFx0fVxyXG5cdH0sXHJcblxyXG5cclxuXHQvKipcclxuXHQgKiBHZXQgaW5mb3JtYXRpb24gYWJvdXQgdGhlIERhdGFUYWJsZSdzIHNjcm9sbGluZyBzdGF0ZSAtIHNwZWNpZmljYWxseSBpZiB0aGUgdGFibGUgaXMgc2Nyb2xsaW5nXHJcblx0ICogb24gZWl0aGVyIHRoZSB4IG9yIHkgYXhpcywgYW5kIGFsc28gdGhlIHNjcm9sbGJhciB3aWR0aC5cclxuXHQgKiAgQHJldHVybnMge29iamVjdH0gSW5mb3JtYXRpb24gYWJvdXQgdGhlIERhdGFUYWJsZXMgc2Nyb2xsaW5nIHN0YXRlIHdpdGggdGhlIHByb3BlcnRpZXM6XHJcblx0ICogICAgJ3gnLCAneScgYW5kICdiYXInXHJcblx0ICogIEBwcml2YXRlXHJcblx0ICovXHJcblx0XCJfZm5EVE92ZXJmbG93XCI6IGZ1bmN0aW9uICgpXHJcblx0e1xyXG5cdFx0dmFyIG5UYWJsZSA9IHRoaXMucy5kdC5uVGFibGU7XHJcblx0XHR2YXIgblRhYmxlU2Nyb2xsQm9keSA9IG5UYWJsZS5wYXJlbnROb2RlO1xyXG5cdFx0dmFyIG91dCA9IHtcclxuXHRcdFx0XCJ4XCI6IGZhbHNlLFxyXG5cdFx0XHRcInlcIjogZmFsc2UsXHJcblx0XHRcdFwiYmFyXCI6IHRoaXMucy5kdC5vU2Nyb2xsLmlCYXJXaWR0aFxyXG5cdFx0fTtcclxuXHJcblx0XHRpZiAoIG5UYWJsZS5vZmZzZXRXaWR0aCA+IG5UYWJsZVNjcm9sbEJvZHkuY2xpZW50V2lkdGggKVxyXG5cdFx0e1xyXG5cdFx0XHRvdXQueCA9IHRydWU7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKCBuVGFibGUub2Zmc2V0SGVpZ2h0ID4gblRhYmxlU2Nyb2xsQm9keS5jbGllbnRIZWlnaHQgKVxyXG5cdFx0e1xyXG5cdFx0XHRvdXQueSA9IHRydWU7XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIG91dDtcclxuXHR9LFxyXG5cclxuXHJcblx0LyoqXHJcblx0ICogQ2xvbmUgYW5kIHBvc2l0aW9uIHRoZSBmaXhlZCBjb2x1bW5zXHJcblx0ICogIEByZXR1cm5zIHt2b2lkfVxyXG5cdCAqICBAcGFyYW0gICB7Qm9vbGVhbn0gYkFsbCBJbmRpY2F0ZSBpZiB0aGUgaGVhZGVyIGFuZCBmb290ZXIgc2hvdWxkIGJlIHVwZGF0ZWQgYXMgd2VsbCAodHJ1ZSlcclxuXHQgKiAgQHByaXZhdGVcclxuXHQgKi9cclxuXHRcIl9mbkRyYXdcIjogZnVuY3Rpb24gKCBiQWxsIClcclxuXHR7XHJcblx0XHR0aGlzLl9mbkdyaWRMYXlvdXQoKTtcclxuXHRcdHRoaXMuX2ZuQ2xvbmVMZWZ0KCBiQWxsICk7XHJcblx0XHR0aGlzLl9mbkNsb25lUmlnaHQoIGJBbGwgKTtcclxuXHJcblx0XHQvKiBEcmF3IGNhbGxiYWNrIGZ1bmN0aW9uICovXHJcblx0XHRpZiAoIHRoaXMucy5mbkRyYXdDYWxsYmFjayAhPT0gbnVsbCApXHJcblx0XHR7XHJcblx0XHRcdHRoaXMucy5mbkRyYXdDYWxsYmFjay5jYWxsKCB0aGlzLCB0aGlzLmRvbS5jbG9uZS5sZWZ0LCB0aGlzLmRvbS5jbG9uZS5yaWdodCApO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8qIEV2ZW50IHRyaWdnZXJpbmcgKi9cclxuXHRcdCQodGhpcykudHJpZ2dlciggJ2RyYXcuZHRmYycsIHtcclxuXHRcdFx0XCJsZWZ0Q2xvbmVcIjogdGhpcy5kb20uY2xvbmUubGVmdCxcclxuXHRcdFx0XCJyaWdodENsb25lXCI6IHRoaXMuZG9tLmNsb25lLnJpZ2h0XHJcblx0XHR9ICk7XHJcblx0fSxcclxuXHJcblxyXG5cdC8qKlxyXG5cdCAqIENsb25lIHRoZSByaWdodCBjb2x1bW5zXHJcblx0ICogIEByZXR1cm5zIHt2b2lkfVxyXG5cdCAqICBAcGFyYW0gICB7Qm9vbGVhbn0gYkFsbCBJbmRpY2F0ZSBpZiB0aGUgaGVhZGVyIGFuZCBmb290ZXIgc2hvdWxkIGJlIHVwZGF0ZWQgYXMgd2VsbCAodHJ1ZSlcclxuXHQgKiAgQHByaXZhdGVcclxuXHQgKi9cclxuXHRcIl9mbkNsb25lUmlnaHRcIjogZnVuY3Rpb24gKCBiQWxsIClcclxuXHR7XHJcblx0XHRpZiAoIHRoaXMucy5pUmlnaHRDb2x1bW5zIDw9IDAgKSB7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHJcblx0XHR2YXIgdGhhdCA9IHRoaXMsXHJcblx0XHRcdGksIGpxLFxyXG5cdFx0XHRhaUNvbHVtbnMgPSBbXTtcclxuXHJcblx0XHRmb3IgKCBpPXRoaXMucy5pVGFibGVDb2x1bW5zLXRoaXMucy5pUmlnaHRDb2x1bW5zIDsgaTx0aGlzLnMuaVRhYmxlQ29sdW1ucyA7IGkrKyApIHtcclxuXHRcdFx0aWYgKCB0aGlzLnMuZHQuYW9Db2x1bW5zW2ldLmJWaXNpYmxlICkge1xyXG5cdFx0XHRcdGFpQ29sdW1ucy5wdXNoKCBpICk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLl9mbkNsb25lKCB0aGlzLmRvbS5jbG9uZS5yaWdodCwgdGhpcy5kb20uZ3JpZC5yaWdodCwgYWlDb2x1bW5zLCBiQWxsICk7XHJcblx0fSxcclxuXHJcblxyXG5cdC8qKlxyXG5cdCAqIENsb25lIHRoZSBsZWZ0IGNvbHVtbnNcclxuXHQgKiAgQHJldHVybnMge3ZvaWR9XHJcblx0ICogIEBwYXJhbSAgIHtCb29sZWFufSBiQWxsIEluZGljYXRlIGlmIHRoZSBoZWFkZXIgYW5kIGZvb3RlciBzaG91bGQgYmUgdXBkYXRlZCBhcyB3ZWxsICh0cnVlKVxyXG5cdCAqICBAcHJpdmF0ZVxyXG5cdCAqL1xyXG5cdFwiX2ZuQ2xvbmVMZWZ0XCI6IGZ1bmN0aW9uICggYkFsbCApXHJcblx0e1xyXG5cdFx0aWYgKCB0aGlzLnMuaUxlZnRDb2x1bW5zIDw9IDAgKSB7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHJcblx0XHR2YXIgdGhhdCA9IHRoaXMsXHJcblx0XHRcdGksIGpxLFxyXG5cdFx0XHRhaUNvbHVtbnMgPSBbXTtcclxuXHJcblx0XHRmb3IgKCBpPTAgOyBpPHRoaXMucy5pTGVmdENvbHVtbnMgOyBpKysgKSB7XHJcblx0XHRcdGlmICggdGhpcy5zLmR0LmFvQ29sdW1uc1tpXS5iVmlzaWJsZSApIHtcclxuXHRcdFx0XHRhaUNvbHVtbnMucHVzaCggaSApO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5fZm5DbG9uZSggdGhpcy5kb20uY2xvbmUubGVmdCwgdGhpcy5kb20uZ3JpZC5sZWZ0LCBhaUNvbHVtbnMsIGJBbGwgKTtcclxuXHR9LFxyXG5cclxuXHJcblx0LyoqXHJcblx0ICogTWFrZSBhIGNvcHkgb2YgdGhlIGxheW91dCBvYmplY3QgZm9yIGEgaGVhZGVyIG9yIGZvb3RlciBlbGVtZW50IGZyb20gRGF0YVRhYmxlcy4gTm90ZSB0aGF0XHJcblx0ICogdGhpcyBtZXRob2Qgd2lsbCBjbG9uZSB0aGUgbm9kZXMgaW4gdGhlIGxheW91dCBvYmplY3QuXHJcblx0ICogIEByZXR1cm5zIHtBcnJheX0gQ29weSBvZiB0aGUgbGF5b3V0IGFycmF5XHJcblx0ICogIEBwYXJhbSAgIHtPYmplY3R9IGFvT3JpZ2luYWwgTGF5b3V0IGFycmF5IGZyb20gRGF0YVRhYmxlcyAoYW9IZWFkZXIgb3IgYW9Gb290ZXIpXHJcblx0ICogIEBwYXJhbSAgIHtPYmplY3R9IGFpQ29sdW1ucyBDb2x1bW5zIHRvIGNvcHlcclxuXHQgKiAgQHBhcmFtICAge2Jvb2xlYW59IGV2ZW50cyBDb3B5IGNlbGwgZXZlbnRzIG9yIG5vdFxyXG5cdCAqICBAcHJpdmF0ZVxyXG5cdCAqL1xyXG5cdFwiX2ZuQ29weUxheW91dFwiOiBmdW5jdGlvbiAoIGFvT3JpZ2luYWwsIGFpQ29sdW1ucywgZXZlbnRzIClcclxuXHR7XHJcblx0XHR2YXIgYVJldHVybiA9IFtdO1xyXG5cdFx0dmFyIGFDbG9uZXMgPSBbXTtcclxuXHRcdHZhciBhQ2xvbmVkID0gW107XHJcblxyXG5cdFx0Zm9yICggdmFyIGk9MCwgaUxlbj1hb09yaWdpbmFsLmxlbmd0aCA7IGk8aUxlbiA7IGkrKyApXHJcblx0XHR7XHJcblx0XHRcdHZhciBhUm93ID0gW107XHJcblx0XHRcdGFSb3cublRyID0gJChhb09yaWdpbmFsW2ldLm5UcikuY2xvbmUoZXZlbnRzLCBmYWxzZSlbMF07XHJcblxyXG5cdFx0XHRmb3IgKCB2YXIgaj0wLCBqTGVuPXRoaXMucy5pVGFibGVDb2x1bW5zIDsgajxqTGVuIDsgaisrIClcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGlmICggJC5pbkFycmF5KCBqLCBhaUNvbHVtbnMgKSA9PT0gLTEgKVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGNvbnRpbnVlO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0dmFyIGlDbG9uZWQgPSAkLmluQXJyYXkoIGFvT3JpZ2luYWxbaV1bal0uY2VsbCwgYUNsb25lZCApO1xyXG5cdFx0XHRcdGlmICggaUNsb25lZCA9PT0gLTEgKVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdHZhciBuQ2xvbmUgPSAkKGFvT3JpZ2luYWxbaV1bal0uY2VsbCkuY2xvbmUoZXZlbnRzLCBmYWxzZSlbMF07XHJcblx0XHRcdFx0XHRhQ2xvbmVzLnB1c2goIG5DbG9uZSApO1xyXG5cdFx0XHRcdFx0YUNsb25lZC5wdXNoKCBhb09yaWdpbmFsW2ldW2pdLmNlbGwgKTtcclxuXHJcblx0XHRcdFx0XHRhUm93LnB1c2goIHtcclxuXHRcdFx0XHRcdFx0XCJjZWxsXCI6IG5DbG9uZSxcclxuXHRcdFx0XHRcdFx0XCJ1bmlxdWVcIjogYW9PcmlnaW5hbFtpXVtqXS51bmlxdWVcclxuXHRcdFx0XHRcdH0gKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0ZWxzZVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGFSb3cucHVzaCgge1xyXG5cdFx0XHRcdFx0XHRcImNlbGxcIjogYUNsb25lc1sgaUNsb25lZCBdLFxyXG5cdFx0XHRcdFx0XHRcInVuaXF1ZVwiOiBhb09yaWdpbmFsW2ldW2pdLnVuaXF1ZVxyXG5cdFx0XHRcdFx0fSApO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0YVJldHVybi5wdXNoKCBhUm93ICk7XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIGFSZXR1cm47XHJcblx0fSxcclxuXHJcblxyXG5cdC8qKlxyXG5cdCAqIENsb25lIHRoZSBEYXRhVGFibGUgbm9kZXMgYW5kIHBsYWNlIHRoZW0gaW4gdGhlIERPTSAoc2l6ZWQgY29ycmVjdGx5KVxyXG5cdCAqICBAcmV0dXJucyB7dm9pZH1cclxuXHQgKiAgQHBhcmFtICAge09iamVjdH0gb0Nsb25lIE9iamVjdCBjb250YWluaW5nIHRoZSBoZWFkZXIsIGZvb3RlciBhbmQgYm9keSBjbG9uZWQgRE9NIGVsZW1lbnRzXHJcblx0ICogIEBwYXJhbSAgIHtPYmplY3R9IG9HcmlkIEdyaWQgb2JqZWN0IGNvbnRhaW5pbmcgdGhlIGRpc3BsYXkgZ3JpZCBlbGVtZW50cyBmb3IgdGhlIGNsb25lZFxyXG5cdCAqICAgICAgICAgICAgICAgICAgICBjb2x1bW4gKGxlZnQgb3IgcmlnaHQpXHJcblx0ICogIEBwYXJhbSAgIHtBcnJheX0gYWlDb2x1bW5zIENvbHVtbiBpbmRleGVzIHdoaWNoIHNob3VsZCBiZSBvcGVyYXRlZCBvbiBmcm9tIHRoZSBEYXRhVGFibGVcclxuXHQgKiAgQHBhcmFtICAge0Jvb2xlYW59IGJBbGwgSW5kaWNhdGUgaWYgdGhlIGhlYWRlciBhbmQgZm9vdGVyIHNob3VsZCBiZSB1cGRhdGVkIGFzIHdlbGwgKHRydWUpXHJcblx0ICogIEBwcml2YXRlXHJcblx0ICovXHJcblx0XCJfZm5DbG9uZVwiOiBmdW5jdGlvbiAoIG9DbG9uZSwgb0dyaWQsIGFpQ29sdW1ucywgYkFsbCApXHJcblx0e1xyXG5cdFx0dmFyIHRoYXQgPSB0aGlzLFxyXG5cdFx0XHRpLCBpTGVuLCBqLCBqTGVuLCBqcSwgblRhcmdldCwgaUNvbHVtbiwgbkNsb25lLCBpSW5kZXgsIGFvQ2xvbmVMYXlvdXQsXHJcblx0XHRcdGpxQ2xvbmVUaGVhZCwgYW9GaXhlZEhlYWRlcixcclxuXHRcdFx0ZHQgPSB0aGlzLnMuZHQ7XHJcblxyXG5cdFx0LypcclxuXHRcdCAqIEhlYWRlclxyXG5cdFx0ICovXHJcblx0XHRpZiAoIGJBbGwgKVxyXG5cdFx0e1xyXG5cdFx0XHQkKG9DbG9uZS5oZWFkZXIpLnJlbW92ZSgpO1xyXG5cclxuXHRcdFx0b0Nsb25lLmhlYWRlciA9ICQodGhpcy5kb20uaGVhZGVyKS5jbG9uZSh0cnVlLCBmYWxzZSlbMF07XHJcblx0XHRcdG9DbG9uZS5oZWFkZXIuY2xhc3NOYW1lICs9IFwiIERURkNfQ2xvbmVkXCI7XHJcblx0XHRcdG9DbG9uZS5oZWFkZXIuc3R5bGUud2lkdGggPSBcIjEwMCVcIjtcclxuXHRcdFx0b0dyaWQuaGVhZC5hcHBlbmRDaGlsZCggb0Nsb25lLmhlYWRlciApO1xyXG5cclxuXHRcdFx0LyogQ29weSB0aGUgRGF0YVRhYmxlcyBsYXlvdXQgY2FjaGUgZm9yIHRoZSBoZWFkZXIgZm9yIG91ciBmbG9hdGluZyBjb2x1bW4gKi9cclxuXHRcdFx0YW9DbG9uZUxheW91dCA9IHRoaXMuX2ZuQ29weUxheW91dCggZHQuYW9IZWFkZXIsIGFpQ29sdW1ucywgdHJ1ZSApO1xyXG5cdFx0XHRqcUNsb25lVGhlYWQgPSAkKCc+dGhlYWQnLCBvQ2xvbmUuaGVhZGVyKTtcclxuXHRcdFx0anFDbG9uZVRoZWFkLmVtcHR5KCk7XHJcblxyXG5cdFx0XHQvKiBBZGQgdGhlIGNyZWF0ZWQgY2xvbmVkIFRSIGVsZW1lbnRzIHRvIHRoZSB0YWJsZSAqL1xyXG5cdFx0XHRmb3IgKCBpPTAsIGlMZW49YW9DbG9uZUxheW91dC5sZW5ndGggOyBpPGlMZW4gOyBpKysgKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0anFDbG9uZVRoZWFkWzBdLmFwcGVuZENoaWxkKCBhb0Nsb25lTGF5b3V0W2ldLm5UciApO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQvKiBVc2UgdGhlIGhhbmR5IF9mbkRyYXdIZWFkIGZ1bmN0aW9uIGluIERhdGFUYWJsZXMgdG8gZG8gdGhlIHJvd3NwYW4vY29sc3BhblxyXG5cdFx0XHQgKiBjYWxjdWxhdGlvbnMgZm9yIHVzXHJcblx0XHRcdCAqL1xyXG5cdFx0XHRkdC5vQXBpLl9mbkRyYXdIZWFkKCBkdCwgYW9DbG9uZUxheW91dCwgdHJ1ZSApO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZVxyXG5cdFx0e1xyXG5cdFx0XHQvKiBUbyBlbnN1cmUgdGhhdCB3ZSBjb3B5IGNlbGwgY2xhc3NlcyBleGFjdGx5LCByZWdhcmRsZXNzIG9mIGNvbHNwYW4sIG11bHRpcGxlIHJvd3NcclxuXHRcdFx0ICogZXRjLCB3ZSBtYWtlIGEgY29weSBvZiB0aGUgaGVhZGVyIGZyb20gdGhlIERhdGFUYWJsZSBhZ2FpbiwgYnV0IGRvbid0IGluc2VydCB0aGVcclxuXHRcdFx0ICogY2xvbmVkIGNlbGxzLCBqdXN0IGNvcHkgdGhlIGNsYXNzZXMgYWNyb3NzLiBUbyBnZXQgdGhlIG1hdGNoaW5nIGxheW91dCBmb3IgdGhlXHJcblx0XHRcdCAqIGZpeGVkIGNvbXBvbmVudCwgd2UgdXNlIHRoZSBEYXRhVGFibGVzIF9mbkRldGVjdEhlYWRlciBtZXRob2QsIGFsbG93aW5nIDE6MSBtYXBwaW5nXHJcblx0XHRcdCAqL1xyXG5cdFx0XHRhb0Nsb25lTGF5b3V0ID0gdGhpcy5fZm5Db3B5TGF5b3V0KCBkdC5hb0hlYWRlciwgYWlDb2x1bW5zLCBmYWxzZSApO1xyXG5cdFx0XHRhb0ZpeGVkSGVhZGVyPVtdO1xyXG5cclxuXHRcdFx0ZHQub0FwaS5fZm5EZXRlY3RIZWFkZXIoIGFvRml4ZWRIZWFkZXIsICQoJz50aGVhZCcsIG9DbG9uZS5oZWFkZXIpWzBdICk7XHJcblxyXG5cdFx0XHRmb3IgKCBpPTAsIGlMZW49YW9DbG9uZUxheW91dC5sZW5ndGggOyBpPGlMZW4gOyBpKysgKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0Zm9yICggaj0wLCBqTGVuPWFvQ2xvbmVMYXlvdXRbaV0ubGVuZ3RoIDsgajxqTGVuIDsgaisrIClcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRhb0ZpeGVkSGVhZGVyW2ldW2pdLmNlbGwuY2xhc3NOYW1lID0gYW9DbG9uZUxheW91dFtpXVtqXS5jZWxsLmNsYXNzTmFtZTtcclxuXHJcblx0XHRcdFx0XHQvLyBJZiBqUXVlcnkgVUkgdGhlbWluZyBpcyB1c2VkIHdlIG5lZWQgdG8gY29weSB0aG9zZSBlbGVtZW50cyBhcyB3ZWxsXHJcblx0XHRcdFx0XHQkKCdzcGFuLkRhdGFUYWJsZXNfc29ydF9pY29uJywgYW9GaXhlZEhlYWRlcltpXVtqXS5jZWxsKS5lYWNoKCBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdFx0XHRcdHRoaXMuY2xhc3NOYW1lID0gJCgnc3Bhbi5EYXRhVGFibGVzX3NvcnRfaWNvbicsIGFvQ2xvbmVMYXlvdXRbaV1bal0uY2VsbClbMF0uY2xhc3NOYW1lO1xyXG5cdFx0XHRcdFx0fSApO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0dGhpcy5fZm5FcXVhbGlzZUhlaWdodHMoICd0aGVhZCcsIHRoaXMuZG9tLmhlYWRlciwgb0Nsb25lLmhlYWRlciApO1xyXG5cclxuXHRcdC8qXHJcblx0XHQgKiBCb2R5XHJcblx0XHQgKi9cclxuXHRcdGlmICggdGhpcy5zLnNIZWlnaHRNYXRjaCA9PSAnYXV0bycgKVxyXG5cdFx0e1xyXG5cdFx0XHQvKiBSZW1vdmUgYW55IGhlaWdodHMgd2hpY2ggaGF2ZSBiZWVuIGFwcGxpZWQgYWxyZWFkeSBhbmQgbGV0IHRoZSBicm93c2VyIGZpZ3VyZSBpdCBvdXQgKi9cclxuXHRcdFx0JCgnPnRib2R5PnRyJywgdGhhdC5kb20uYm9keSkuY3NzKCdoZWlnaHQnLCAnYXV0bycpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmICggb0Nsb25lLmJvZHkgIT09IG51bGwgKVxyXG5cdFx0e1xyXG5cdFx0XHQkKG9DbG9uZS5ib2R5KS5yZW1vdmUoKTtcclxuXHRcdFx0b0Nsb25lLmJvZHkgPSBudWxsO1xyXG5cdFx0fVxyXG5cclxuXHRcdG9DbG9uZS5ib2R5ID0gJCh0aGlzLmRvbS5ib2R5KS5jbG9uZSh0cnVlKVswXTtcclxuXHRcdG9DbG9uZS5ib2R5LmNsYXNzTmFtZSArPSBcIiBEVEZDX0Nsb25lZFwiO1xyXG5cdFx0b0Nsb25lLmJvZHkuc3R5bGUucGFkZGluZ0JvdHRvbSA9IGR0Lm9TY3JvbGwuaUJhcldpZHRoK1wicHhcIjtcclxuXHRcdG9DbG9uZS5ib2R5LnN0eWxlLm1hcmdpbkJvdHRvbSA9IChkdC5vU2Nyb2xsLmlCYXJXaWR0aCoyKStcInB4XCI7IC8qIEZvciBJRSAqL1xyXG5cdFx0aWYgKCBvQ2xvbmUuYm9keS5nZXRBdHRyaWJ1dGUoJ2lkJykgIT09IG51bGwgKVxyXG5cdFx0e1xyXG5cdFx0XHRvQ2xvbmUuYm9keS5yZW1vdmVBdHRyaWJ1dGUoJ2lkJyk7XHJcblx0XHR9XHJcblxyXG5cdFx0JCgnPnRoZWFkPnRyJywgb0Nsb25lLmJvZHkpLmVtcHR5KCk7XHJcblx0XHQkKCc+dGZvb3QnLCBvQ2xvbmUuYm9keSkucmVtb3ZlKCk7XHJcblxyXG5cdFx0dmFyIG5Cb2R5ID0gJCgndGJvZHknLCBvQ2xvbmUuYm9keSlbMF07XHJcblx0XHQkKG5Cb2R5KS5lbXB0eSgpO1xyXG5cdFx0aWYgKCBkdC5haURpc3BsYXkubGVuZ3RoID4gMCApXHJcblx0XHR7XHJcblx0XHRcdC8qIENvcHkgdGhlIERhdGFUYWJsZXMnIGhlYWRlciBlbGVtZW50cyB0byBmb3JjZSB0aGUgY29sdW1uIHdpZHRoIGluIGV4YWN0bHkgdGhlXHJcblx0XHRcdCAqIHNhbWUgd2F5IHRoYXQgRGF0YVRhYmxlcyBkb2VzIGl0IC0gaGF2ZSB0aGUgaGVhZGVyIGVsZW1lbnQsIGFwcGx5IHRoZSB3aWR0aCBhbmRcclxuXHRcdFx0ICogY29sYXBzZSBpdCBkb3duXHJcblx0XHRcdCAqL1xyXG5cdFx0XHR2YXIgbklubmVyVGhlYWQgPSAkKCc+dGhlYWQ+dHInLCBvQ2xvbmUuYm9keSlbMF07XHJcblx0XHRcdGZvciAoIGlJbmRleD0wIDsgaUluZGV4PGFpQ29sdW1ucy5sZW5ndGggOyBpSW5kZXgrKyApXHJcblx0XHRcdHtcclxuXHRcdFx0XHRpQ29sdW1uID0gYWlDb2x1bW5zW2lJbmRleF07XHJcblxyXG5cdFx0XHRcdG5DbG9uZSA9ICQoZHQuYW9Db2x1bW5zW2lDb2x1bW5dLm5UaCkuY2xvbmUodHJ1ZSlbMF07XHJcblx0XHRcdFx0bkNsb25lLmlubmVySFRNTCA9IFwiXCI7XHJcblxyXG5cdFx0XHRcdHZhciBvU3R5bGUgPSBuQ2xvbmUuc3R5bGU7XHJcblx0XHRcdFx0b1N0eWxlLnBhZGRpbmdUb3AgPSBcIjBcIjtcclxuXHRcdFx0XHRvU3R5bGUucGFkZGluZ0JvdHRvbSA9IFwiMFwiO1xyXG5cdFx0XHRcdG9TdHlsZS5ib3JkZXJUb3BXaWR0aCA9IFwiMFwiO1xyXG5cdFx0XHRcdG9TdHlsZS5ib3JkZXJCb3R0b21XaWR0aCA9IFwiMFwiO1xyXG5cdFx0XHRcdG9TdHlsZS5oZWlnaHQgPSAwO1xyXG5cdFx0XHRcdG9TdHlsZS53aWR0aCA9IHRoYXQucy5haUlubmVyV2lkdGhzW2lDb2x1bW5dK1wicHhcIjtcclxuXHJcblx0XHRcdFx0bklubmVyVGhlYWQuYXBwZW5kQ2hpbGQoIG5DbG9uZSApO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQvKiBBZGQgaW4gdGhlIHRib2R5IGVsZW1lbnRzLCBjbG9uaW5nIGZvcm0gdGhlIG1hc3RlciB0YWJsZSAqL1xyXG5cdFx0XHQkKCc+dGJvZHk+dHInLCB0aGF0LmRvbS5ib2R5KS5lYWNoKCBmdW5jdGlvbiAoeikge1xyXG5cdFx0XHRcdHZhciBpID0gdGhhdC5zLmR0Lm9GZWF0dXJlcy5iU2VydmVyU2lkZT09PWZhbHNlID9cclxuXHRcdFx0XHRcdHRoYXQucy5kdC5haURpc3BsYXlbIHRoYXQucy5kdC5faURpc3BsYXlTdGFydCt6IF0gOiB6O1xyXG5cdFx0XHRcdHZhciBhVGRzID0gdGhhdC5zLmR0LmFvRGF0YVsgaSBdLmFuQ2VsbHMgfHwgJCh0aGlzKS5jaGlsZHJlbigndGQsIHRoJyk7XHJcblxyXG5cdFx0XHRcdHZhciBuID0gdGhpcy5jbG9uZU5vZGUoZmFsc2UpO1xyXG5cdFx0XHRcdG4ucmVtb3ZlQXR0cmlidXRlKCdpZCcpO1xyXG5cdFx0XHRcdG4uc2V0QXR0cmlidXRlKCAnZGF0YS1kdC1yb3cnLCBpICk7XHJcblxyXG5cdFx0XHRcdGZvciAoIGlJbmRleD0wIDsgaUluZGV4PGFpQ29sdW1ucy5sZW5ndGggOyBpSW5kZXgrKyApXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0aUNvbHVtbiA9IGFpQ29sdW1uc1tpSW5kZXhdO1xyXG5cclxuXHRcdFx0XHRcdGlmICggYVRkcy5sZW5ndGggPiAwIClcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0bkNsb25lID0gJCggYVRkc1tpQ29sdW1uXSApLmNsb25lKHRydWUsIHRydWUpWzBdO1xyXG5cdFx0XHRcdFx0XHRuQ2xvbmUucmVtb3ZlQXR0cmlidXRlKCAnaWQnICk7XHJcblx0XHRcdFx0XHRcdG5DbG9uZS5zZXRBdHRyaWJ1dGUoICdkYXRhLWR0LXJvdycsIGkgKTtcclxuXHRcdFx0XHRcdFx0bkNsb25lLnNldEF0dHJpYnV0ZSggJ2RhdGEtZHQtY29sdW1uJywgZHQub0FwaS5fZm5WaXNpYmxlVG9Db2x1bW5JbmRleCggZHQsIGlDb2x1bW4gKSApO1xyXG5cdFx0XHRcdFx0XHRuLmFwcGVuZENoaWxkKCBuQ2xvbmUgKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0bkJvZHkuYXBwZW5kQ2hpbGQoIG4gKTtcclxuXHRcdFx0fSApO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZVxyXG5cdFx0e1xyXG5cdFx0XHQkKCc+dGJvZHk+dHInLCB0aGF0LmRvbS5ib2R5KS5lYWNoKCBmdW5jdGlvbiAoeikge1xyXG5cdFx0XHRcdG5DbG9uZSA9IHRoaXMuY2xvbmVOb2RlKHRydWUpO1xyXG5cdFx0XHRcdG5DbG9uZS5jbGFzc05hbWUgKz0gJyBEVEZDX05vRGF0YSc7XHJcblx0XHRcdFx0JCgndGQnLCBuQ2xvbmUpLmh0bWwoJycpO1xyXG5cdFx0XHRcdG5Cb2R5LmFwcGVuZENoaWxkKCBuQ2xvbmUgKTtcclxuXHRcdFx0fSApO1xyXG5cdFx0fVxyXG5cclxuXHRcdG9DbG9uZS5ib2R5LnN0eWxlLndpZHRoID0gXCIxMDAlXCI7XHJcblx0XHRvQ2xvbmUuYm9keS5zdHlsZS5tYXJnaW4gPSBcIjBcIjtcclxuXHRcdG9DbG9uZS5ib2R5LnN0eWxlLnBhZGRpbmcgPSBcIjBcIjtcclxuXHJcblx0XHQvLyBJbnRlcm9wIHdpdGggU2Nyb2xsZXIgLSBuZWVkIHRvIHVzZSBhIGhlaWdodCBmb3JjaW5nIGVsZW1lbnQgaW4gdGhlXHJcblx0XHQvLyBzY3JvbGxpbmcgYXJlYSBpbiB0aGUgc2FtZSB3YXkgdGhhdCBTY3JvbGxlciBkb2VzIGluIHRoZSBib2R5IHNjcm9sbC5cclxuXHRcdGlmICggZHQub1Njcm9sbGVyICE9PSB1bmRlZmluZWQgKVxyXG5cdFx0e1xyXG5cdFx0XHR2YXIgc2Nyb2xsZXJGb3JjZXIgPSBkdC5vU2Nyb2xsZXIuZG9tLmZvcmNlO1xyXG5cclxuXHRcdFx0aWYgKCAhIG9HcmlkLmZvcmNlciApIHtcclxuXHRcdFx0XHRvR3JpZC5mb3JjZXIgPSBzY3JvbGxlckZvcmNlci5jbG9uZU5vZGUoIHRydWUgKTtcclxuXHRcdFx0XHRvR3JpZC5saW5lci5hcHBlbmRDaGlsZCggb0dyaWQuZm9yY2VyICk7XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZSB7XHJcblx0XHRcdFx0b0dyaWQuZm9yY2VyLnN0eWxlLmhlaWdodCA9IHNjcm9sbGVyRm9yY2VyLnN0eWxlLmhlaWdodDtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdG9HcmlkLmxpbmVyLmFwcGVuZENoaWxkKCBvQ2xvbmUuYm9keSApO1xyXG5cclxuXHRcdHRoaXMuX2ZuRXF1YWxpc2VIZWlnaHRzKCAndGJvZHknLCB0aGF0LmRvbS5ib2R5LCBvQ2xvbmUuYm9keSApO1xyXG5cclxuXHRcdC8qXHJcblx0XHQgKiBGb290ZXJcclxuXHRcdCAqL1xyXG5cdFx0aWYgKCBkdC5uVEZvb3QgIT09IG51bGwgKVxyXG5cdFx0e1xyXG5cdFx0XHRpZiAoIGJBbGwgKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0aWYgKCBvQ2xvbmUuZm9vdGVyICE9PSBudWxsIClcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRvQ2xvbmUuZm9vdGVyLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoIG9DbG9uZS5mb290ZXIgKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0b0Nsb25lLmZvb3RlciA9ICQodGhpcy5kb20uZm9vdGVyKS5jbG9uZSh0cnVlLCB0cnVlKVswXTtcclxuXHRcdFx0XHRvQ2xvbmUuZm9vdGVyLmNsYXNzTmFtZSArPSBcIiBEVEZDX0Nsb25lZFwiO1xyXG5cdFx0XHRcdG9DbG9uZS5mb290ZXIuc3R5bGUud2lkdGggPSBcIjEwMCVcIjtcclxuXHRcdFx0XHRvR3JpZC5mb290LmFwcGVuZENoaWxkKCBvQ2xvbmUuZm9vdGVyICk7XHJcblxyXG5cdFx0XHRcdC8qIENvcHkgdGhlIGZvb3RlciBqdXN0IGxpa2Ugd2UgZG8gZm9yIHRoZSBoZWFkZXIgKi9cclxuXHRcdFx0XHRhb0Nsb25lTGF5b3V0ID0gdGhpcy5fZm5Db3B5TGF5b3V0KCBkdC5hb0Zvb3RlciwgYWlDb2x1bW5zLCB0cnVlICk7XHJcblx0XHRcdFx0dmFyIGpxQ2xvbmVUZm9vdCA9ICQoJz50Zm9vdCcsIG9DbG9uZS5mb290ZXIpO1xyXG5cdFx0XHRcdGpxQ2xvbmVUZm9vdC5lbXB0eSgpO1xyXG5cclxuXHRcdFx0XHRmb3IgKCBpPTAsIGlMZW49YW9DbG9uZUxheW91dC5sZW5ndGggOyBpPGlMZW4gOyBpKysgKVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGpxQ2xvbmVUZm9vdFswXS5hcHBlbmRDaGlsZCggYW9DbG9uZUxheW91dFtpXS5uVHIgKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0ZHQub0FwaS5fZm5EcmF3SGVhZCggZHQsIGFvQ2xvbmVMYXlvdXQsIHRydWUgKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlXHJcblx0XHRcdHtcclxuXHRcdFx0XHRhb0Nsb25lTGF5b3V0ID0gdGhpcy5fZm5Db3B5TGF5b3V0KCBkdC5hb0Zvb3RlciwgYWlDb2x1bW5zLCBmYWxzZSApO1xyXG5cdFx0XHRcdHZhciBhb0N1cnJGb290ZXI9W107XHJcblxyXG5cdFx0XHRcdGR0Lm9BcGkuX2ZuRGV0ZWN0SGVhZGVyKCBhb0N1cnJGb290ZXIsICQoJz50Zm9vdCcsIG9DbG9uZS5mb290ZXIpWzBdICk7XHJcblxyXG5cdFx0XHRcdGZvciAoIGk9MCwgaUxlbj1hb0Nsb25lTGF5b3V0Lmxlbmd0aCA7IGk8aUxlbiA7IGkrKyApXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0Zm9yICggaj0wLCBqTGVuPWFvQ2xvbmVMYXlvdXRbaV0ubGVuZ3RoIDsgajxqTGVuIDsgaisrIClcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0YW9DdXJyRm9vdGVyW2ldW2pdLmNlbGwuY2xhc3NOYW1lID0gYW9DbG9uZUxheW91dFtpXVtqXS5jZWxsLmNsYXNzTmFtZTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0dGhpcy5fZm5FcXVhbGlzZUhlaWdodHMoICd0Zm9vdCcsIHRoaXMuZG9tLmZvb3Rlciwgb0Nsb25lLmZvb3RlciApO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8qIEVxdWFsaXNlIHRoZSBjb2x1bW4gd2lkdGhzIGJldHdlZW4gdGhlIGhlYWRlciBmb290ZXIgYW5kIGJvZHkgLSBib2R5IGdldCdzIHByaW9yaXR5ICovXHJcblx0XHR2YXIgYW5VbmlxdWUgPSBkdC5vQXBpLl9mbkdldFVuaXF1ZVRocyggZHQsICQoJz50aGVhZCcsIG9DbG9uZS5oZWFkZXIpWzBdICk7XHJcblx0XHQkKGFuVW5pcXVlKS5lYWNoKCBmdW5jdGlvbiAoaSkge1xyXG5cdFx0XHRpQ29sdW1uID0gYWlDb2x1bW5zW2ldO1xyXG5cdFx0XHR0aGlzLnN0eWxlLndpZHRoID0gdGhhdC5zLmFpSW5uZXJXaWR0aHNbaUNvbHVtbl0rXCJweFwiO1xyXG5cdFx0fSApO1xyXG5cclxuXHRcdGlmICggdGhhdC5zLmR0Lm5URm9vdCAhPT0gbnVsbCApXHJcblx0XHR7XHJcblx0XHRcdGFuVW5pcXVlID0gZHQub0FwaS5fZm5HZXRVbmlxdWVUaHMoIGR0LCAkKCc+dGZvb3QnLCBvQ2xvbmUuZm9vdGVyKVswXSApO1xyXG5cdFx0XHQkKGFuVW5pcXVlKS5lYWNoKCBmdW5jdGlvbiAoaSkge1xyXG5cdFx0XHRcdGlDb2x1bW4gPSBhaUNvbHVtbnNbaV07XHJcblx0XHRcdFx0dGhpcy5zdHlsZS53aWR0aCA9IHRoYXQucy5haUlubmVyV2lkdGhzW2lDb2x1bW5dK1wicHhcIjtcclxuXHRcdFx0fSApO1xyXG5cdFx0fVxyXG5cdH0sXHJcblxyXG5cclxuXHQvKipcclxuXHQgKiBGcm9tIGEgZ2l2ZW4gdGFibGUgbm9kZSAoVEhFQUQgZXRjKSwgZ2V0IGEgbGlzdCBvZiBUUiBkaXJlY3QgY2hpbGQgZWxlbWVudHNcclxuXHQgKiAgQHBhcmFtICAge05vZGV9IG5JbiBUYWJsZSBlbGVtZW50IHRvIHNlYXJjaCBmb3IgVFIgZWxlbWVudHMgKFRIRUFELCBUQk9EWSBvciBURk9PVCBlbGVtZW50KVxyXG5cdCAqICBAcmV0dXJucyB7QXJyYXl9IExpc3Qgb2YgVFIgZWxlbWVudHMgZm91bmRcclxuXHQgKiAgQHByaXZhdGVcclxuXHQgKi9cclxuXHRcIl9mbkdldFRyTm9kZXNcIjogZnVuY3Rpb24gKCBuSW4gKVxyXG5cdHtcclxuXHRcdHZhciBhT3V0ID0gW107XHJcblx0XHRmb3IgKCB2YXIgaT0wLCBpTGVuPW5Jbi5jaGlsZE5vZGVzLmxlbmd0aCA7IGk8aUxlbiA7IGkrKyApXHJcblx0XHR7XHJcblx0XHRcdGlmICggbkluLmNoaWxkTm9kZXNbaV0ubm9kZU5hbWUudG9VcHBlckNhc2UoKSA9PSBcIlRSXCIgKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0YU91dC5wdXNoKCBuSW4uY2hpbGROb2Rlc1tpXSApO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gYU91dDtcclxuXHR9LFxyXG5cclxuXHJcblx0LyoqXHJcblx0ICogRXF1YWxpc2UgdGhlIGhlaWdodHMgb2YgdGhlIHJvd3MgaW4gYSBnaXZlbiB0YWJsZSBub2RlIGluIGEgY3Jvc3MgYnJvd3NlciB3YXlcclxuXHQgKiAgQHJldHVybnMge3ZvaWR9XHJcblx0ICogIEBwYXJhbSAgIHtTdHJpbmd9IG5vZGVOYW1lIE5vZGUgdHlwZSAtIHRoZWFkLCB0Ym9keSBvciB0Zm9vdFxyXG5cdCAqICBAcGFyYW0gICB7Tm9kZX0gb3JpZ2luYWwgT3JpZ2luYWwgbm9kZSB0byB0YWtlIHRoZSBoZWlnaHRzIGZyb21cclxuXHQgKiAgQHBhcmFtICAge05vZGV9IGNsb25lIENvcHkgdGhlIGhlaWdodHMgdG9cclxuXHQgKiAgQHByaXZhdGVcclxuXHQgKi9cclxuXHRcIl9mbkVxdWFsaXNlSGVpZ2h0c1wiOiBmdW5jdGlvbiAoIG5vZGVOYW1lLCBvcmlnaW5hbCwgY2xvbmUgKVxyXG5cdHtcclxuXHRcdGlmICggdGhpcy5zLnNIZWlnaHRNYXRjaCA9PSAnbm9uZScgJiYgbm9kZU5hbWUgIT09ICd0aGVhZCcgJiYgbm9kZU5hbWUgIT09ICd0Zm9vdCcgKVxyXG5cdFx0e1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblxyXG5cdFx0dmFyIHRoYXQgPSB0aGlzLFxyXG5cdFx0XHRpLCBpTGVuLCBpSGVpZ2h0LCBpSGVpZ2h0MiwgaUhlaWdodE9yaWdpbmFsLCBpSGVpZ2h0Q2xvbmUsXHJcblx0XHRcdHJvb3RPcmlnaW5hbCA9IG9yaWdpbmFsLmdldEVsZW1lbnRzQnlUYWdOYW1lKG5vZGVOYW1lKVswXSxcclxuXHRcdFx0cm9vdENsb25lICAgID0gY2xvbmUuZ2V0RWxlbWVudHNCeVRhZ05hbWUobm9kZU5hbWUpWzBdLFxyXG5cdFx0XHRqcUJveEhhY2sgICAgPSAkKCc+Jytub2RlTmFtZSsnPnRyOmVxKDApJywgb3JpZ2luYWwpLmNoaWxkcmVuKCc6Zmlyc3QnKSxcclxuXHRcdFx0aUJveEhhY2sgICAgID0ganFCb3hIYWNrLm91dGVySGVpZ2h0KCkgLSBqcUJveEhhY2suaGVpZ2h0KCksXHJcblx0XHRcdGFuT3JpZ2luYWwgICA9IHRoaXMuX2ZuR2V0VHJOb2Rlcyggcm9vdE9yaWdpbmFsICksXHJcblx0XHRcdGFuQ2xvbmUgICAgICA9IHRoaXMuX2ZuR2V0VHJOb2Rlcyggcm9vdENsb25lICksXHJcblx0XHRcdGhlaWdodHMgICAgICA9IFtdO1xyXG5cclxuXHRcdGZvciAoIGk9MCwgaUxlbj1hbkNsb25lLmxlbmd0aCA7IGk8aUxlbiA7IGkrKyApXHJcblx0XHR7XHJcblx0XHRcdGlIZWlnaHRPcmlnaW5hbCA9IGFuT3JpZ2luYWxbaV0ub2Zmc2V0SGVpZ2h0O1xyXG5cdFx0XHRpSGVpZ2h0Q2xvbmUgPSBhbkNsb25lW2ldLm9mZnNldEhlaWdodDtcclxuXHRcdFx0aUhlaWdodCA9IGlIZWlnaHRDbG9uZSA+IGlIZWlnaHRPcmlnaW5hbCA/IGlIZWlnaHRDbG9uZSA6IGlIZWlnaHRPcmlnaW5hbDtcclxuXHJcblx0XHRcdGlmICggdGhpcy5zLnNIZWlnaHRNYXRjaCA9PSAnc2VtaWF1dG8nIClcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGFuT3JpZ2luYWxbaV0uX0RUVENfaUhlaWdodCA9IGlIZWlnaHQ7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGhlaWdodHMucHVzaCggaUhlaWdodCApO1xyXG5cdFx0fVxyXG5cclxuXHRcdGZvciAoIGk9MCwgaUxlbj1hbkNsb25lLmxlbmd0aCA7IGk8aUxlbiA7IGkrKyApXHJcblx0XHR7XHJcblx0XHRcdGFuQ2xvbmVbaV0uc3R5bGUuaGVpZ2h0ID0gaGVpZ2h0c1tpXStcInB4XCI7XHJcblx0XHRcdGFuT3JpZ2luYWxbaV0uc3R5bGUuaGVpZ2h0ID0gaGVpZ2h0c1tpXStcInB4XCI7XHJcblx0XHR9XHJcblx0fSxcclxuXHJcblx0LyoqXHJcblx0ICogRGV0ZXJtaW5lIGlmIHRoZSBVQSBzdWZmZXJzIGZyb20gRmlyZWZveCdzIG92ZXJmbG93OnNjcm9sbCBzY3JvbGxiYXJzXHJcblx0ICogbm90IGJlaW5nIHNob3duIGJ1Zy5cclxuXHQgKlxyXG5cdCAqIEZpcmVmb3ggZG9lc24ndCBkcmF3IHNjcm9sbGJhcnMsIGV2ZW4gaWYgaXQgaXMgdG9sZCB0byB1c2luZ1xyXG5cdCAqIG92ZXJmbG93OnNjcm9sbCwgaWYgdGhlIGRpdiBpcyBsZXNzIHRoYW4gMzRweCBoZWlnaHQuIFNlZSBidWdzIDI5MjI4NCBhbmRcclxuXHQgKiA3ODE4ODUuIFVzaW5nIFVBIGRldGVjdGlvbiBoZXJlIHNpbmNlIHRoaXMgaXMgcGFydGljdWxhcmx5IGhhcmQgdG8gZGV0ZWN0XHJcblx0ICogdXNpbmcgb2JqZWN0cyAtIGl0cyBhIHN0cmFpZ2h0IHVwIHJlbmRlcmluZyBlcnJvciBpbiBGaXJlZm94LlxyXG5cdCAqXHJcblx0ICogQHJldHVybiB7Ym9vbGVhbn0gVHJ1ZSBpZiBGaXJlZm94IGVycm9yIGlzIHByZXNlbnQsIGZhbHNlIG90aGVyd2lzZVxyXG5cdCAqL1xyXG5cdF9maXJlZm94U2Nyb2xsRXJyb3I6IGZ1bmN0aW9uICgpIHtcclxuXHRcdGlmICggX2ZpcmVmb3hTY3JvbGwgPT09IHVuZGVmaW5lZCApIHtcclxuXHRcdFx0dmFyIHRlc3QgPSAkKCc8ZGl2Lz4nKVxyXG5cdFx0XHRcdC5jc3MoIHtcclxuXHRcdFx0XHRcdHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG5cdFx0XHRcdFx0dG9wOiAwLFxyXG5cdFx0XHRcdFx0bGVmdDogMCxcclxuXHRcdFx0XHRcdGhlaWdodDogMTAsXHJcblx0XHRcdFx0XHR3aWR0aDogNTAsXHJcblx0XHRcdFx0XHRvdmVyZmxvdzogJ3Njcm9sbCdcclxuXHRcdFx0XHR9IClcclxuXHRcdFx0XHQuYXBwZW5kVG8oICdib2R5JyApO1xyXG5cclxuXHRcdFx0Ly8gTWFrZSBzdXJlIHRoaXMgZG9lc24ndCBhcHBseSBvbiBNYWNzIHdpdGggMCB3aWR0aCBzY3JvbGxiYXJzXHJcblx0XHRcdF9maXJlZm94U2Nyb2xsID0gKFxyXG5cdFx0XHRcdHRlc3RbMF0uY2xpZW50V2lkdGggPT09IHRlc3RbMF0ub2Zmc2V0V2lkdGggJiYgdGhpcy5fZm5EVE92ZXJmbG93KCkuYmFyICE9PSAwXHJcblx0XHRcdCk7XHJcblxyXG5cdFx0XHR0ZXN0LnJlbW92ZSgpO1xyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiBfZmlyZWZveFNjcm9sbDtcclxuXHR9XHJcbn0gKTtcclxuXHJcblxyXG5cclxuLyogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqXHJcbiAqIFN0YXRpY3NcclxuICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqL1xyXG5cclxuLyoqXHJcbiAqIEZpeGVkQ29sdW1ucyBkZWZhdWx0IHNldHRpbmdzIGZvciBpbml0aWFsaXNhdGlvblxyXG4gKiAgQG5hbWUgRml4ZWRDb2x1bW5zLmRlZmF1bHRzXHJcbiAqICBAbmFtZXNwYWNlXHJcbiAqICBAc3RhdGljXHJcbiAqL1xyXG5GaXhlZENvbHVtbnMuZGVmYXVsdHMgPSAvKiogQGxlbmRzIEZpeGVkQ29sdW1ucy5kZWZhdWx0cyAqL3tcclxuXHQvKipcclxuXHQgKiBOdW1iZXIgb2YgbGVmdCBoYW5kIGNvbHVtbnMgdG8gZml4IGluIHBvc2l0aW9uXHJcblx0ICogIEB0eXBlICAgICBpbnRcclxuXHQgKiAgQGRlZmF1bHQgIDFcclxuXHQgKiAgQHN0YXRpY1xyXG5cdCAqICBAZXhhbXBsZVxyXG5cdCAqICAgICAgdmFyICA9ICQoJyNleGFtcGxlJykuZGF0YVRhYmxlKCB7XHJcblx0ICogICAgICAgICAgXCJzY3JvbGxYXCI6IFwiMTAwJVwiXHJcblx0ICogICAgICB9ICk7XHJcblx0ICogICAgICBuZXcgJC5mbi5kYXRhVGFibGUuZml4ZWRDb2x1bW5zKCB0YWJsZSwge1xyXG5cdCAqICAgICAgICAgIFwibGVmdENvbHVtbnNcIjogMlxyXG5cdCAqICAgICAgfSApO1xyXG5cdCAqL1xyXG5cdFwiaUxlZnRDb2x1bW5zXCI6IDEsXHJcblxyXG5cdC8qKlxyXG5cdCAqIE51bWJlciBvZiByaWdodCBoYW5kIGNvbHVtbnMgdG8gZml4IGluIHBvc2l0aW9uXHJcblx0ICogIEB0eXBlICAgICBpbnRcclxuXHQgKiAgQGRlZmF1bHQgIDBcclxuXHQgKiAgQHN0YXRpY1xyXG5cdCAqICBAZXhhbXBsZVxyXG5cdCAqICAgICAgdmFyIHRhYmxlID0gJCgnI2V4YW1wbGUnKS5kYXRhVGFibGUoIHtcclxuXHQgKiAgICAgICAgICBcInNjcm9sbFhcIjogXCIxMDAlXCJcclxuXHQgKiAgICAgIH0gKTtcclxuXHQgKiAgICAgIG5ldyAkLmZuLmRhdGFUYWJsZS5maXhlZENvbHVtbnMoIHRhYmxlLCB7XHJcblx0ICogICAgICAgICAgXCJyaWdodENvbHVtbnNcIjogMVxyXG5cdCAqICAgICAgfSApO1xyXG5cdCAqL1xyXG5cdFwiaVJpZ2h0Q29sdW1uc1wiOiAwLFxyXG5cclxuXHQvKipcclxuXHQgKiBEcmF3IGNhbGxiYWNrIGZ1bmN0aW9uIHdoaWNoIGlzIGNhbGxlZCB3aGVuIEZpeGVkQ29sdW1ucyBoYXMgcmVkcmF3biB0aGUgZml4ZWQgYXNzZXRzXHJcblx0ICogIEB0eXBlICAgICBmdW5jdGlvbihvYmplY3QsIG9iamVjdCk6dm9pZFxyXG5cdCAqICBAZGVmYXVsdCAgbnVsbFxyXG5cdCAqICBAc3RhdGljXHJcblx0ICogIEBleGFtcGxlXHJcblx0ICogICAgICB2YXIgdGFibGUgPSAkKCcjZXhhbXBsZScpLmRhdGFUYWJsZSgge1xyXG5cdCAqICAgICAgICAgIFwic2Nyb2xsWFwiOiBcIjEwMCVcIlxyXG5cdCAqICAgICAgfSApO1xyXG5cdCAqICAgICAgbmV3ICQuZm4uZGF0YVRhYmxlLmZpeGVkQ29sdW1ucyggdGFibGUsIHtcclxuXHQgKiAgICAgICAgICBcImRyYXdDYWxsYmFja1wiOiBmdW5jdGlvbiAoKSB7XHJcblx0ICpcdCAgICAgICAgICAgIGFsZXJ0KCBcIkZpeGVkQ29sdW1ucyByZWRyYXdcIiApO1xyXG5cdCAqXHQgICAgICAgIH1cclxuXHQgKiAgICAgIH0gKTtcclxuXHQgKi9cclxuXHRcImZuRHJhd0NhbGxiYWNrXCI6IG51bGwsXHJcblxyXG5cdC8qKlxyXG5cdCAqIEhlaWdodCBtYXRjaGluZyBhbGdvcnRoaW0gdG8gdXNlLiBUaGlzIGNhbiBiZSBcIm5vbmVcIiB3aGljaCB3aWxsIHJlc3VsdCBpbiBubyBoZWlnaHRcclxuXHQgKiBtYXRjaGluZyBiZWluZyBhcHBsaWVkIGJ5IEZpeGVkQ29sdW1ucyAoaGVpZ2h0IG1hdGNoaW5nIGNvdWxkIGJlIGZvcmNlZCBieSBDU1MgaW4gdGhpc1xyXG5cdCAqIGNhc2UpLCBcInNlbWlhdXRvXCIgd2hlcmVieSB0aGUgaGVpZ2h0IGNhbGN1bGF0aW9uIHdpbGwgYmUgcGVyZm9ybWVkIG9uY2UsIGFuZCB0aGUgcmVzdWx0XHJcblx0ICogY2FjaGVkIHRvIGJlIHVzZWQgYWdhaW4gKGZuUmVjYWxjdWxhdGVIZWlnaHQgY2FuIGJlIHVzZWQgdG8gZm9yY2UgcmVjYWxjdWxhdGlvbiksIG9yXHJcblx0ICogXCJhdXRvXCIgd2hlbiBoZWlnaHQgbWF0Y2hpbmcgaXMgcGVyZm9ybWVkIG9uIGV2ZXJ5IGRyYXcgKHNsb3dlc3QgYnV0IG11c3QgYWNjdXJhdGUpXHJcblx0ICogIEB0eXBlICAgICBzdHJpbmdcclxuXHQgKiAgQGRlZmF1bHQgIHNlbWlhdXRvXHJcblx0ICogIEBzdGF0aWNcclxuXHQgKiAgQGV4YW1wbGVcclxuXHQgKiAgICAgIHZhciB0YWJsZSA9ICQoJyNleGFtcGxlJykuZGF0YVRhYmxlKCB7XHJcblx0ICogICAgICAgICAgXCJzY3JvbGxYXCI6IFwiMTAwJVwiXHJcblx0ICogICAgICB9ICk7XHJcblx0ICogICAgICBuZXcgJC5mbi5kYXRhVGFibGUuZml4ZWRDb2x1bW5zKCB0YWJsZSwge1xyXG5cdCAqICAgICAgICAgIFwiaGVpZ2h0TWF0Y2hcIjogXCJhdXRvXCJcclxuXHQgKiAgICAgIH0gKTtcclxuXHQgKi9cclxuXHRcInNIZWlnaHRNYXRjaFwiOiBcInNlbWlhdXRvXCJcclxufTtcclxuXHJcblxyXG5cclxuXHJcbi8qICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKlxyXG4gKiBDb25zdGFudHNcclxuICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqL1xyXG5cclxuLyoqXHJcbiAqIEZpeGVkQ29sdW1ucyB2ZXJzaW9uXHJcbiAqICBAbmFtZSAgICAgIEZpeGVkQ29sdW1ucy52ZXJzaW9uXHJcbiAqICBAdHlwZSAgICAgIFN0cmluZ1xyXG4gKiAgQGRlZmF1bHQgICBTZWUgY29kZVxyXG4gKiAgQHN0YXRpY1xyXG4gKi9cclxuRml4ZWRDb2x1bW5zLnZlcnNpb24gPSBcIjMuMi4zXCI7XHJcblxyXG5cclxuXHJcbi8qICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKlxyXG4gKiBEYXRhVGFibGVzIEFQSSBpbnRlZ3JhdGlvblxyXG4gKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICovXHJcblxyXG5EYXRhVGFibGUuQXBpLnJlZ2lzdGVyKCAnZml4ZWRDb2x1bW5zKCknLCBmdW5jdGlvbiAoKSB7XHJcblx0cmV0dXJuIHRoaXM7XHJcbn0gKTtcclxuXHJcbkRhdGFUYWJsZS5BcGkucmVnaXN0ZXIoICdmaXhlZENvbHVtbnMoKS51cGRhdGUoKScsIGZ1bmN0aW9uICgpIHtcclxuXHRyZXR1cm4gdGhpcy5pdGVyYXRvciggJ3RhYmxlJywgZnVuY3Rpb24gKCBjdHggKSB7XHJcblx0XHRpZiAoIGN0eC5fb0ZpeGVkQ29sdW1ucyApIHtcclxuXHRcdFx0Y3R4Ll9vRml4ZWRDb2x1bW5zLmZuVXBkYXRlKCk7XHJcblx0XHR9XHJcblx0fSApO1xyXG59ICk7XHJcblxyXG5EYXRhVGFibGUuQXBpLnJlZ2lzdGVyKCAnZml4ZWRDb2x1bW5zKCkucmVsYXlvdXQoKScsIGZ1bmN0aW9uICgpIHtcclxuXHRyZXR1cm4gdGhpcy5pdGVyYXRvciggJ3RhYmxlJywgZnVuY3Rpb24gKCBjdHggKSB7XHJcblx0XHRpZiAoIGN0eC5fb0ZpeGVkQ29sdW1ucyApIHtcclxuXHRcdFx0Y3R4Ll9vRml4ZWRDb2x1bW5zLmZuUmVkcmF3TGF5b3V0KCk7XHJcblx0XHR9XHJcblx0fSApO1xyXG59ICk7XHJcblxyXG5EYXRhVGFibGUuQXBpLnJlZ2lzdGVyKCAncm93cygpLnJlY2FsY0hlaWdodCgpJywgZnVuY3Rpb24gKCkge1xyXG5cdHJldHVybiB0aGlzLml0ZXJhdG9yKCAncm93JywgZnVuY3Rpb24gKCBjdHgsIGlkeCApIHtcclxuXHRcdGlmICggY3R4Ll9vRml4ZWRDb2x1bW5zICkge1xyXG5cdFx0XHRjdHguX29GaXhlZENvbHVtbnMuZm5SZWNhbGN1bGF0ZUhlaWdodCggdGhpcy5yb3coaWR4KS5ub2RlKCkgKTtcclxuXHRcdH1cclxuXHR9ICk7XHJcbn0gKTtcclxuXHJcbkRhdGFUYWJsZS5BcGkucmVnaXN0ZXIoICdmaXhlZENvbHVtbnMoKS5yb3dJbmRleCgpJywgZnVuY3Rpb24gKCByb3cgKSB7XHJcblx0cm93ID0gJChyb3cpO1xyXG5cclxuXHRyZXR1cm4gcm93LnBhcmVudHMoJy5EVEZDX0Nsb25lZCcpLmxlbmd0aCA/XHJcblx0XHR0aGlzLnJvd3MoIHsgcGFnZTogJ2N1cnJlbnQnIH0gKS5pbmRleGVzKClbIHJvdy5pbmRleCgpIF0gOlxyXG5cdFx0dGhpcy5yb3coIHJvdyApLmluZGV4KCk7XHJcbn0gKTtcclxuXHJcbkRhdGFUYWJsZS5BcGkucmVnaXN0ZXIoICdmaXhlZENvbHVtbnMoKS5jZWxsSW5kZXgoKScsIGZ1bmN0aW9uICggY2VsbCApIHtcclxuXHRjZWxsID0gJChjZWxsKTtcclxuXHJcblx0aWYgKCBjZWxsLnBhcmVudHMoJy5EVEZDX0Nsb25lZCcpLmxlbmd0aCApIHtcclxuXHRcdHZhciByb3dDbG9uZWRJZHggPSBjZWxsLnBhcmVudCgpLmluZGV4KCk7XHJcblx0XHR2YXIgcm93SWR4ID0gdGhpcy5yb3dzKCB7IHBhZ2U6ICdjdXJyZW50JyB9ICkuaW5kZXhlcygpWyByb3dDbG9uZWRJZHggXTtcclxuXHRcdHZhciBjb2x1bW5JZHg7XHJcblxyXG5cdFx0aWYgKCBjZWxsLnBhcmVudHMoJy5EVEZDX0xlZnRXcmFwcGVyJykubGVuZ3RoICkge1xyXG5cdFx0XHRjb2x1bW5JZHggPSBjZWxsLmluZGV4KCk7XHJcblx0XHR9XHJcblx0XHRlbHNlIHtcclxuXHRcdFx0dmFyIGNvbHVtbnMgPSB0aGlzLmNvbHVtbnMoKS5mbGF0dGVuKCkubGVuZ3RoO1xyXG5cdFx0XHRjb2x1bW5JZHggPSBjb2x1bW5zIC0gdGhpcy5jb250ZXh0WzBdLl9vRml4ZWRDb2x1bW5zLnMuaVJpZ2h0Q29sdW1ucyArIGNlbGwuaW5kZXgoKTtcclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4ge1xyXG5cdFx0XHRyb3c6IHJvd0lkeCxcclxuXHRcdFx0Y29sdW1uOiB0aGlzLmNvbHVtbi5pbmRleCggJ3RvRGF0YScsIGNvbHVtbklkeCApLFxyXG5cdFx0XHRjb2x1bW5WaXNpYmxlOiBjb2x1bW5JZHhcclxuXHRcdH07XHJcblx0fVxyXG5cdGVsc2Uge1xyXG5cdFx0cmV0dXJuIHRoaXMuY2VsbCggY2VsbCApLmluZGV4KCk7XHJcblx0fVxyXG59ICk7XHJcblxyXG5cclxuXHJcblxyXG4vKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICpcclxuICogSW5pdGlhbGlzYXRpb25cclxuICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqL1xyXG5cclxuLy8gQXR0YWNoIGEgbGlzdGVuZXIgdG8gdGhlIGRvY3VtZW50IHdoaWNoIGxpc3RlbnMgZm9yIERhdGFUYWJsZXMgaW5pdGlhbGlzYXRpb25cclxuLy8gZXZlbnRzIHNvIHdlIGNhbiBhdXRvbWF0aWNhbGx5IGluaXRpYWxpc2VcclxuJChkb2N1bWVudCkub24oICdpbml0LmR0LmZpeGVkQ29sdW1ucycsIGZ1bmN0aW9uIChlLCBzZXR0aW5ncykge1xyXG5cdGlmICggZS5uYW1lc3BhY2UgIT09ICdkdCcgKSB7XHJcblx0XHRyZXR1cm47XHJcblx0fVxyXG5cclxuXHR2YXIgaW5pdCA9IHNldHRpbmdzLm9Jbml0LmZpeGVkQ29sdW1ucztcclxuXHR2YXIgZGVmYXVsdHMgPSBEYXRhVGFibGUuZGVmYXVsdHMuZml4ZWRDb2x1bW5zO1xyXG5cclxuXHRpZiAoIGluaXQgfHwgZGVmYXVsdHMgKSB7XHJcblx0XHR2YXIgb3B0cyA9ICQuZXh0ZW5kKCB7fSwgaW5pdCwgZGVmYXVsdHMgKTtcclxuXHJcblx0XHRpZiAoIGluaXQgIT09IGZhbHNlICkge1xyXG5cdFx0XHRuZXcgRml4ZWRDb2x1bW5zKCBzZXR0aW5ncywgb3B0cyApO1xyXG5cdFx0fVxyXG5cdH1cclxufSApO1xyXG5cclxuXHJcblxyXG4vLyBNYWtlIEZpeGVkQ29sdW1ucyBhY2Nlc3NpYmxlIGZyb20gdGhlIERhdGFUYWJsZXMgaW5zdGFuY2VcclxuJC5mbi5kYXRhVGFibGUuRml4ZWRDb2x1bW5zID0gRml4ZWRDb2x1bW5zO1xyXG4kLmZuLkRhdGFUYWJsZS5GaXhlZENvbHVtbnMgPSBGaXhlZENvbHVtbnM7XHJcblxyXG5yZXR1cm4gRml4ZWRDb2x1bW5zO1xyXG59KSk7XHJcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIHdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbCcpO1xudmFyIFY4X1ZFUlNJT04gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZW52aXJvbm1lbnQtdjgtdmVyc2lvbicpO1xuXG52YXIgU1BFQ0lFUyA9IHdlbGxLbm93blN5bWJvbCgnc3BlY2llcycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChNRVRIT0RfTkFNRSkge1xuICAvLyBXZSBjYW4ndCB1c2UgdGhpcyBmZWF0dXJlIGRldGVjdGlvbiBpbiBWOCBzaW5jZSBpdCBjYXVzZXNcbiAgLy8gZGVvcHRpbWl6YXRpb24gYW5kIHNlcmlvdXMgcGVyZm9ybWFuY2UgZGVncmFkYXRpb25cbiAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzY3N1xuICByZXR1cm4gVjhfVkVSU0lPTiA+PSA1MSB8fCAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICAgIHZhciBhcnJheSA9IFtdO1xuICAgIHZhciBjb25zdHJ1Y3RvciA9IGFycmF5LmNvbnN0cnVjdG9yID0ge307XG4gICAgY29uc3RydWN0b3JbU1BFQ0lFU10gPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4geyBmb286IDEgfTtcbiAgICB9O1xuICAgIHJldHVybiBhcnJheVtNRVRIT0RfTkFNRV0oQm9vbGVhbikuZm9vICE9PSAxO1xuICB9KTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsVGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwtdGhpcycpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG52YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG52YXIgdG9TdHJpbmcgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tc3RyaW5nJyk7XG52YXIgdHJpbSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zdHJpbmctdHJpbScpLnRyaW07XG52YXIgd2hpdGVzcGFjZXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2hpdGVzcGFjZXMnKTtcblxudmFyICRwYXJzZUludCA9IGdsb2JhbFRoaXMucGFyc2VJbnQ7XG52YXIgU3ltYm9sID0gZ2xvYmFsVGhpcy5TeW1ib2w7XG52YXIgSVRFUkFUT1IgPSBTeW1ib2wgJiYgU3ltYm9sLml0ZXJhdG9yO1xudmFyIGhleCA9IC9eWystXT8weC9pO1xudmFyIGV4ZWMgPSB1bmN1cnJ5VGhpcyhoZXguZXhlYyk7XG52YXIgRk9SQ0VEID0gJHBhcnNlSW50KHdoaXRlc3BhY2VzICsgJzA4JykgIT09IDggfHwgJHBhcnNlSW50KHdoaXRlc3BhY2VzICsgJzB4MTYnKSAhPT0gMjJcbiAgLy8gTVMgRWRnZSAxOC0gYnJva2VuIHdpdGggYm94ZWQgc3ltYm9sc1xuICB8fCAoSVRFUkFUT1IgJiYgIWZhaWxzKGZ1bmN0aW9uICgpIHsgJHBhcnNlSW50KE9iamVjdChJVEVSQVRPUikpOyB9KSk7XG5cbi8vIGBwYXJzZUludGAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXBhcnNlaW50LXN0cmluZy1yYWRpeFxubW9kdWxlLmV4cG9ydHMgPSBGT1JDRUQgPyBmdW5jdGlvbiBwYXJzZUludChzdHJpbmcsIHJhZGl4KSB7XG4gIHZhciBTID0gdHJpbSh0b1N0cmluZyhzdHJpbmcpKTtcbiAgcmV0dXJuICRwYXJzZUludChTLCAocmFkaXggPj4+IDApIHx8IChleGVjKGhleCwgUykgPyAxNiA6IDEwKSk7XG59IDogJHBhcnNlSW50O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xudmFyIHJlcXVpcmVPYmplY3RDb2VyY2libGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVxdWlyZS1vYmplY3QtY29lcmNpYmxlJyk7XG52YXIgdG9TdHJpbmcgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tc3RyaW5nJyk7XG52YXIgd2hpdGVzcGFjZXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2hpdGVzcGFjZXMnKTtcblxudmFyIHJlcGxhY2UgPSB1bmN1cnJ5VGhpcygnJy5yZXBsYWNlKTtcbnZhciBsdHJpbSA9IFJlZ0V4cCgnXlsnICsgd2hpdGVzcGFjZXMgKyAnXSsnKTtcbnZhciBydHJpbSA9IFJlZ0V4cCgnKF58W14nICsgd2hpdGVzcGFjZXMgKyAnXSlbJyArIHdoaXRlc3BhY2VzICsgJ10rJCcpO1xuXG4vLyBgU3RyaW5nLnByb3RvdHlwZS57IHRyaW0sIHRyaW1TdGFydCwgdHJpbUVuZCwgdHJpbUxlZnQsIHRyaW1SaWdodCB9YCBtZXRob2RzIGltcGxlbWVudGF0aW9uXG52YXIgY3JlYXRlTWV0aG9kID0gZnVuY3Rpb24gKFRZUEUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgkdGhpcykge1xuICAgIHZhciBzdHJpbmcgPSB0b1N0cmluZyhyZXF1aXJlT2JqZWN0Q29lcmNpYmxlKCR0aGlzKSk7XG4gICAgaWYgKFRZUEUgJiAxKSBzdHJpbmcgPSByZXBsYWNlKHN0cmluZywgbHRyaW0sICcnKTtcbiAgICBpZiAoVFlQRSAmIDIpIHN0cmluZyA9IHJlcGxhY2Uoc3RyaW5nLCBydHJpbSwgJyQxJyk7XG4gICAgcmV0dXJuIHN0cmluZztcbiAgfTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAvLyBgU3RyaW5nLnByb3RvdHlwZS57IHRyaW1MZWZ0LCB0cmltU3RhcnQgfWAgbWV0aG9kc1xuICAvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXN0cmluZy5wcm90b3R5cGUudHJpbXN0YXJ0XG4gIHN0YXJ0OiBjcmVhdGVNZXRob2QoMSksXG4gIC8vIGBTdHJpbmcucHJvdG90eXBlLnsgdHJpbVJpZ2h0LCB0cmltRW5kIH1gIG1ldGhvZHNcbiAgLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1zdHJpbmcucHJvdG90eXBlLnRyaW1lbmRcbiAgZW5kOiBjcmVhdGVNZXRob2QoMiksXG4gIC8vIGBTdHJpbmcucHJvdG90eXBlLnRyaW1gIG1ldGhvZFxuICAvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXN0cmluZy5wcm90b3R5cGUudHJpbVxuICB0cmltOiBjcmVhdGVNZXRob2QoMylcbn07XG4iLCIndXNlIHN0cmljdCc7XG4vLyBhIHN0cmluZyBvZiBhbGwgdmFsaWQgdW5pY29kZSB3aGl0ZXNwYWNlc1xubW9kdWxlLmV4cG9ydHMgPSAnXFx1MDAwOVxcdTAwMEFcXHUwMDBCXFx1MDAwQ1xcdTAwMERcXHUwMDIwXFx1MDBBMFxcdTE2ODBcXHUyMDAwXFx1MjAwMVxcdTIwMDInICtcbiAgJ1xcdTIwMDNcXHUyMDA0XFx1MjAwNVxcdTIwMDZcXHUyMDA3XFx1MjAwOFxcdTIwMDlcXHUyMDBBXFx1MjAyRlxcdTIwNUZcXHUzMDAwXFx1MjAyOFxcdTIwMjlcXHVGRUZGJztcbiIsIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyICRmaWx0ZXIgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktaXRlcmF0aW9uJykuZmlsdGVyO1xudmFyIGFycmF5TWV0aG9kSGFzU3BlY2llc1N1cHBvcnQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktbWV0aG9kLWhhcy1zcGVjaWVzLXN1cHBvcnQnKTtcblxudmFyIEhBU19TUEVDSUVTX1NVUFBPUlQgPSBhcnJheU1ldGhvZEhhc1NwZWNpZXNTdXBwb3J0KCdmaWx0ZXInKTtcblxuLy8gYEFycmF5LnByb3RvdHlwZS5maWx0ZXJgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuZmlsdGVyXG4vLyB3aXRoIGFkZGluZyBzdXBwb3J0IG9mIEBAc3BlY2llc1xuJCh7IHRhcmdldDogJ0FycmF5JywgcHJvdG86IHRydWUsIGZvcmNlZDogIUhBU19TUEVDSUVTX1NVUFBPUlQgfSwge1xuICBmaWx0ZXI6IGZ1bmN0aW9uIGZpbHRlcihjYWxsYmFja2ZuIC8qICwgdGhpc0FyZyAqLykge1xuICAgIHJldHVybiAkZmlsdGVyKHRoaXMsIGNhbGxiYWNrZm4sIGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkKTtcbiAgfVxufSk7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciAkcGFyc2VJbnQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvbnVtYmVyLXBhcnNlLWludCcpO1xuXG4vLyBgcGFyc2VJbnRgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1wYXJzZWludC1zdHJpbmctcmFkaXhcbiQoeyBnbG9iYWw6IHRydWUsIGZvcmNlZDogcGFyc2VJbnQgIT09ICRwYXJzZUludCB9LCB7XG4gIHBhcnNlSW50OiAkcGFyc2VJbnRcbn0pO1xuIl0sIm5hbWVzIjpbImZhY3RvcnkiLCJkZWZpbmUiLCJhbWQiLCIkIiwid2luZG93IiwiZG9jdW1lbnQiLCJleHBvcnRzIiwiX3R5cGVvZiIsIm1vZHVsZSIsInJvb3QiLCJmbiIsImRhdGFUYWJsZSIsInJlcXVpcmUiLCJqUXVlcnkiLCJ1bmRlZmluZWQiLCJEYXRhVGFibGUiLCJfZmlyZWZveFNjcm9sbCIsIkZpeGVkQ29sdW1ucyIsImR0IiwiaW5pdCIsInRoYXQiLCJhbGVydCIsImNhbWVsVG9IdW5nYXJpYW4iLCJkZWZhdWx0cyIsImR0U2V0dGluZ3MiLCJBcGkiLCJzZXR0aW5ncyIsInMiLCJhb0NvbHVtbnMiLCJsZW5ndGgiLCJydGwiLCJuVGFibGUiLCJjc3MiLCJkb20iLCJfb0ZpeGVkQ29sdW1ucyIsIl9iSW5pdENvbXBsZXRlIiwib0FwaSIsIl9mbkNhbGxiYWNrUmVnIiwiX2ZuQ29uc3RydWN0IiwiZXh0ZW5kIiwicHJvdG90eXBlIiwiZm5VcGRhdGUiLCJfZm5EcmF3IiwiZm5SZWRyYXdMYXlvdXQiLCJfZm5Db2xDYWxjIiwiX2ZuR3JpZExheW91dCIsImZuUmVjYWxjdWxhdGVIZWlnaHQiLCJuVHIiLCJfRFRUQ19pSGVpZ2h0Iiwic3R5bGUiLCJoZWlnaHQiLCJmblNldFJvd0hlaWdodCIsIm5UYXJnZXQiLCJpSGVpZ2h0IiwiZm5HZXRQb3NpdGlvbiIsIm5vZGUiLCJpZHgiLCJpbnN0Iiwib0luc3RhbmNlIiwicGFyZW50cyIsIm5vZGVOYW1lIiwidG9Mb3dlckNhc2UiLCJpbmRleCIsIm5UQm9keSIsImNvbElkeCIsInBhcmVudE5vZGUiLCJyb3ciLCJfZm5WaXNpYmxlVG9Db2x1bW5JbmRleCIsIm9Jbml0IiwiaSIsImlMZW4iLCJpV2lkdGgiLCJmblZlcnNpb25DaGVjayIsIlZFUlNJT04iLCJvU2Nyb2xsIiwic1giLCJfZm5Mb2ciLCJjbGFzc2VzIiwib0NsYXNzZXMiLCJncmlkIiwic1Njcm9sbFdyYXBwZXIiLCJzY3JvbGxlciIsInNTY3JvbGxCb2R5IiwiX2ZuR3JpZFNldHVwIiwibW91c2VDb250cm9sbGVyIiwibW91c2VEb3duIiwiblRhYmxlV3JhcHBlciIsIm9uIiwib25lIiwiZSIsIm9yaWdpbmFsRXZlbnQiLCJpTGVmdENvbHVtbnMiLCJsZWZ0IiwibGluZXIiLCJzY3JvbGxUb3AiLCJpUmlnaHRDb2x1bW5zIiwicmlnaHQiLCJ3aGVlbFR5cGUiLCJjcmVhdGVFbGVtZW50IiwieERlbHRhIiwidHlwZSIsImRlbHRhWCIsIndoZWVsRGVsdGFYIiwic2Nyb2xsTGVmdCIsImNhbGwiLCJiRmlyc3REcmF3IiwianFUYWJsZSIsImNvbHVtbiIsInZpcyIsInJlY2FsYyIsImluZGV4ZXMiLCJuYW1lc3BhY2UiLCJvZmYiLCJ3cmFwcGVyIiwicmVtb3ZlIiwiZm5EcmF3IiwiaUxlZnRXaWR0aCIsImlSaWdodFdpZHRoIiwiYWlJbm5lcldpZHRocyIsImFpT3V0ZXJXaWR0aHMiLCJlYWNoIiwiY29sIiwidGgiLCJuVGgiLCJib3JkZXIiLCJmaWx0ZXIiLCJwdXNoIiwib3V0ZXJXaWR0aCIsInBhcnNlSW50Iiwid2lkdGgiLCJpVGFibGVDb2x1bW5zIiwib092ZXJmbG93IiwiX2ZuRFRPdmVyZmxvdyIsImJsb2NrIiwiYm9keSIsImhlYWRlciIsIm5USGVhZCIsInBvc2l0aW9uIiwiblNXcmFwcGVyIiwibkxlZnQiLCJjaGlsZE5vZGVzIiwiblJpZ2h0IiwiaW5zZXJ0QmVmb3JlIiwiYXBwZW5kQ2hpbGQiLCJoZWFkIiwiYmFyIiwiaGVhZEJsb2NrIiwiZm9vdEJsb2NrIiwiblRGb290IiwiZm9vdGVyIiwiZm9vdCIsIm9HcmlkIiwiaUJvZHlIZWlnaHQiLCJvdXRlckhlaWdodCIsImlGdWxsSGVpZ2h0Iiwic2Nyb2xsYmFyQWRqdXN0IiwicGFkZGluZ1JpZ2h0IiwiYm94U2l6aW5nIiwiX2ZpcmVmb3hTY3JvbGxFcnJvciIsIngiLCJ0b3AiLCJtYXhIZWlnaHQiLCJ5IiwiZGlzcGxheSIsIm5UYWJsZVNjcm9sbEJvZHkiLCJvdXQiLCJpQmFyV2lkdGgiLCJvZmZzZXRXaWR0aCIsImNsaWVudFdpZHRoIiwib2Zmc2V0SGVpZ2h0IiwiY2xpZW50SGVpZ2h0IiwiYkFsbCIsIl9mbkNsb25lTGVmdCIsIl9mbkNsb25lUmlnaHQiLCJmbkRyYXdDYWxsYmFjayIsImNsb25lIiwidHJpZ2dlciIsImpxIiwiYWlDb2x1bW5zIiwiYlZpc2libGUiLCJfZm5DbG9uZSIsIl9mbkNvcHlMYXlvdXQiLCJhb09yaWdpbmFsIiwiZXZlbnRzIiwiYVJldHVybiIsImFDbG9uZXMiLCJhQ2xvbmVkIiwiYVJvdyIsImoiLCJqTGVuIiwiaW5BcnJheSIsImlDbG9uZWQiLCJjZWxsIiwibkNsb25lIiwidW5pcXVlIiwib0Nsb25lIiwiaUNvbHVtbiIsImlJbmRleCIsImFvQ2xvbmVMYXlvdXQiLCJqcUNsb25lVGhlYWQiLCJhb0ZpeGVkSGVhZGVyIiwiY2xhc3NOYW1lIiwiYW9IZWFkZXIiLCJlbXB0eSIsIl9mbkRyYXdIZWFkIiwiX2ZuRGV0ZWN0SGVhZGVyIiwiX2ZuRXF1YWxpc2VIZWlnaHRzIiwic0hlaWdodE1hdGNoIiwicGFkZGluZ0JvdHRvbSIsIm1hcmdpbkJvdHRvbSIsImdldEF0dHJpYnV0ZSIsInJlbW92ZUF0dHJpYnV0ZSIsIm5Cb2R5IiwiYWlEaXNwbGF5IiwibklubmVyVGhlYWQiLCJpbm5lckhUTUwiLCJvU3R5bGUiLCJwYWRkaW5nVG9wIiwiYm9yZGVyVG9wV2lkdGgiLCJib3JkZXJCb3R0b21XaWR0aCIsInoiLCJvRmVhdHVyZXMiLCJiU2VydmVyU2lkZSIsIl9pRGlzcGxheVN0YXJ0IiwiYVRkcyIsImFvRGF0YSIsImFuQ2VsbHMiLCJjaGlsZHJlbiIsIm4iLCJjbG9uZU5vZGUiLCJzZXRBdHRyaWJ1dGUiLCJodG1sIiwibWFyZ2luIiwicGFkZGluZyIsIm9TY3JvbGxlciIsInNjcm9sbGVyRm9yY2VyIiwiZm9yY2UiLCJmb3JjZXIiLCJyZW1vdmVDaGlsZCIsImFvRm9vdGVyIiwianFDbG9uZVRmb290IiwiYW9DdXJyRm9vdGVyIiwiYW5VbmlxdWUiLCJfZm5HZXRVbmlxdWVUaHMiLCJfZm5HZXRUck5vZGVzIiwibkluIiwiYU91dCIsInRvVXBwZXJDYXNlIiwib3JpZ2luYWwiLCJpSGVpZ2h0MiIsImlIZWlnaHRPcmlnaW5hbCIsImlIZWlnaHRDbG9uZSIsInJvb3RPcmlnaW5hbCIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwicm9vdENsb25lIiwianFCb3hIYWNrIiwiaUJveEhhY2siLCJhbk9yaWdpbmFsIiwiYW5DbG9uZSIsImhlaWdodHMiLCJ0ZXN0Iiwib3ZlcmZsb3ciLCJhcHBlbmRUbyIsInZlcnNpb24iLCJyZWdpc3RlciIsIml0ZXJhdG9yIiwiY3R4Iiwicm93cyIsInBhZ2UiLCJyb3dDbG9uZWRJZHgiLCJwYXJlbnQiLCJyb3dJZHgiLCJjb2x1bW5JZHgiLCJjb2x1bW5zIiwiZmxhdHRlbiIsImNvbnRleHQiLCJjb2x1bW5WaXNpYmxlIiwiZml4ZWRDb2x1bW5zIiwib3B0cyJdLCJzb3VyY2VSb290IjoiIn0=