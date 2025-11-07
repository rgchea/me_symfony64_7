(self["webpackChunk"] = self["webpackChunk"] || []).push([["js/dataTables.colReorder"],{

/***/ "./assets/css/portoadmin/vendor/datatables/extras/TableTools/ColReorder-1.4.1/js/dataTables.colReorder.js":
/*!****************************************************************************************************************!*\
  !*** ./assets/css/portoadmin/vendor/datatables/extras/TableTools/ColReorder-1.4.1/js/dataTables.colReorder.js ***!
  \****************************************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;__webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
__webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
__webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
__webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");
__webpack_require__(/*! core-js/modules/es.array.index-of.js */ "./node_modules/core-js/modules/es.array.index-of.js");
__webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
__webpack_require__(/*! core-js/modules/es.array.join.js */ "./node_modules/core-js/modules/es.array.join.js");
__webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
__webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
__webpack_require__(/*! core-js/modules/es.array.splice.js */ "./node_modules/core-js/modules/es.array.splice.js");
__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
__webpack_require__(/*! core-js/modules/es.parse-int.js */ "./node_modules/core-js/modules/es.parse-int.js");
__webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
__webpack_require__(/*! core-js/modules/es.string.fixed.js */ "./node_modules/core-js/modules/es.string.fixed.js");
__webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
/*! ColReorder 1.4.1
 * ©2010-2017 SpryMedia Ltd - datatables.net/license
 */

/**
 * @summary     ColReorder
 * @description Provide the ability to reorder columns in a DataTable
 * @version     1.4.1
 * @file        dataTables.colReorder.js
 * @author      SpryMedia Ltd (www.sprymedia.co.uk)
 * @contact     www.sprymedia.co.uk/contact
 * @copyright   Copyright 2010-2017 SpryMedia Ltd.
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

  /**
   * Switch the key value pairing of an index array to be value key (i.e. the old value is now the
   * key). For example consider [ 2, 0, 1 ] this would be returned as [ 1, 2, 0 ].
   *  @method  fnInvertKeyValues
   *  @param   array aIn Array to switch around
   *  @returns array
   */
  function fnInvertKeyValues(aIn) {
    var aRet = [];
    for (var i = 0, iLen = aIn.length; i < iLen; i++) {
      aRet[aIn[i]] = i;
    }
    return aRet;
  }

  /**
   * Modify an array by switching the position of two elements
   *  @method  fnArraySwitch
   *  @param   array aArray Array to consider, will be modified by reference (i.e. no return)
   *  @param   int iFrom From point
   *  @param   int iTo Insert point
   *  @returns void
   */
  function fnArraySwitch(aArray, iFrom, iTo) {
    var mStore = aArray.splice(iFrom, 1)[0];
    aArray.splice(iTo, 0, mStore);
  }

  /**
   * Switch the positions of nodes in a parent node (note this is specifically designed for
   * table rows). Note this function considers all element nodes under the parent!
   *  @method  fnDomSwitch
   *  @param   string sTag Tag to consider
   *  @param   int iFrom Element to move
   *  @param   int Point to element the element to (before this point), can be null for append
   *  @returns void
   */
  function fnDomSwitch(nParent, iFrom, iTo) {
    var anTags = [];
    for (var i = 0, iLen = nParent.childNodes.length; i < iLen; i++) {
      if (nParent.childNodes[i].nodeType == 1) {
        anTags.push(nParent.childNodes[i]);
      }
    }
    var nStore = anTags[iFrom];
    if (iTo !== null) {
      nParent.insertBefore(nStore, anTags[iTo]);
    } else {
      nParent.appendChild(nStore);
    }
  }

  /**
   * Plug-in for DataTables which will reorder the internal column structure by taking the column
   * from one position (iFrom) and insert it into a given point (iTo).
   *  @method  $.fn.dataTableExt.oApi.fnColReorder
   *  @param   object oSettings DataTables settings object - automatically added by DataTables!
   *  @param   int iFrom Take the column to be repositioned from this point
   *  @param   int iTo and insert it into this point
   *  @param   bool drop Indicate if the reorder is the final one (i.e. a drop)
   *    not a live reorder
   *  @param   bool invalidateRows speeds up processing if false passed
   *  @returns void
   */
  $.fn.dataTableExt.oApi.fnColReorder = function (oSettings, iFrom, iTo, drop, invalidateRows) {
    var i,
      iLen,
      j,
      jLen,
      jen,
      iCols = oSettings.aoColumns.length,
      nTrs,
      oCol;
    var attrMap = function attrMap(obj, prop, mapping) {
      if (!obj[prop] || typeof obj[prop] === 'function') {
        return;
      }
      var a = obj[prop].split('.');
      var num = a.shift();
      if (isNaN(num * 1)) {
        return;
      }
      obj[prop] = mapping[num * 1] + '.' + a.join('.');
    };

    /* Sanity check in the input */
    if (iFrom == iTo) {
      /* Pointless reorder */
      return;
    }
    if (iFrom < 0 || iFrom >= iCols) {
      this.oApi._fnLog(oSettings, 1, "ColReorder 'from' index is out of bounds: " + iFrom);
      return;
    }
    if (iTo < 0 || iTo >= iCols) {
      this.oApi._fnLog(oSettings, 1, "ColReorder 'to' index is out of bounds: " + iTo);
      return;
    }

    /*
     * Calculate the new column array index, so we have a mapping between the old and new
     */
    var aiMapping = [];
    for (i = 0, iLen = iCols; i < iLen; i++) {
      aiMapping[i] = i;
    }
    fnArraySwitch(aiMapping, iFrom, iTo);
    var aiInvertMapping = fnInvertKeyValues(aiMapping);

    /*
     * Convert all internal indexing to the new column order indexes
     */
    /* Sorting */
    for (i = 0, iLen = oSettings.aaSorting.length; i < iLen; i++) {
      oSettings.aaSorting[i][0] = aiInvertMapping[oSettings.aaSorting[i][0]];
    }

    /* Fixed sorting */
    if (oSettings.aaSortingFixed !== null) {
      for (i = 0, iLen = oSettings.aaSortingFixed.length; i < iLen; i++) {
        oSettings.aaSortingFixed[i][0] = aiInvertMapping[oSettings.aaSortingFixed[i][0]];
      }
    }

    /* Data column sorting (the column which the sort for a given column should take place on) */
    for (i = 0, iLen = iCols; i < iLen; i++) {
      oCol = oSettings.aoColumns[i];
      for (j = 0, jLen = oCol.aDataSort.length; j < jLen; j++) {
        oCol.aDataSort[j] = aiInvertMapping[oCol.aDataSort[j]];
      }

      // Update the column indexes
      oCol.idx = aiInvertMapping[oCol.idx];
    }

    // Update 1.10 optimised sort class removal variable
    $.each(oSettings.aLastSort, function (i, val) {
      oSettings.aLastSort[i].src = aiInvertMapping[val.src];
    });

    /* Update the Get and Set functions for each column */
    for (i = 0, iLen = iCols; i < iLen; i++) {
      oCol = oSettings.aoColumns[i];
      if (typeof oCol.mData == 'number') {
        oCol.mData = aiInvertMapping[oCol.mData];
      } else if ($.isPlainObject(oCol.mData)) {
        // HTML5 data sourced
        attrMap(oCol.mData, '_', aiInvertMapping);
        attrMap(oCol.mData, 'filter', aiInvertMapping);
        attrMap(oCol.mData, 'sort', aiInvertMapping);
        attrMap(oCol.mData, 'type', aiInvertMapping);
      }
    }

    /*
     * Move the DOM elements
     */
    if (oSettings.aoColumns[iFrom].bVisible) {
      /* Calculate the current visible index and the point to insert the node before. The insert
       * before needs to take into account that there might not be an element to insert before,
       * in which case it will be null, and an appendChild should be used
       */
      var iVisibleIndex = this.oApi._fnColumnIndexToVisible(oSettings, iFrom);
      var iInsertBeforeIndex = null;
      i = iTo < iFrom ? iTo : iTo + 1;
      while (iInsertBeforeIndex === null && i < iCols) {
        iInsertBeforeIndex = this.oApi._fnColumnIndexToVisible(oSettings, i);
        i++;
      }

      /* Header */
      nTrs = oSettings.nTHead.getElementsByTagName('tr');
      for (i = 0, iLen = nTrs.length; i < iLen; i++) {
        fnDomSwitch(nTrs[i], iVisibleIndex, iInsertBeforeIndex);
      }

      /* Footer */
      if (oSettings.nTFoot !== null) {
        nTrs = oSettings.nTFoot.getElementsByTagName('tr');
        for (i = 0, iLen = nTrs.length; i < iLen; i++) {
          fnDomSwitch(nTrs[i], iVisibleIndex, iInsertBeforeIndex);
        }
      }

      /* Body */
      for (i = 0, iLen = oSettings.aoData.length; i < iLen; i++) {
        if (oSettings.aoData[i].nTr !== null) {
          fnDomSwitch(oSettings.aoData[i].nTr, iVisibleIndex, iInsertBeforeIndex);
        }
      }
    }

    /*
     * Move the internal array elements
     */
    /* Columns */
    fnArraySwitch(oSettings.aoColumns, iFrom, iTo);

    // regenerate the get / set functions
    for (i = 0, iLen = iCols; i < iLen; i++) {
      oSettings.oApi._fnColumnOptions(oSettings, i, {});
    }

    /* Search columns */
    fnArraySwitch(oSettings.aoPreSearchCols, iFrom, iTo);

    /* Array array - internal data anodes cache */
    for (i = 0, iLen = oSettings.aoData.length; i < iLen; i++) {
      var data = oSettings.aoData[i];
      var cells = data.anCells;
      if (cells) {
        fnArraySwitch(cells, iFrom, iTo);

        // Longer term, should this be moved into the DataTables' invalidate
        // methods?
        for (j = 0, jen = cells.length; j < jen; j++) {
          if (cells[j] && cells[j]._DT_CellIndex) {
            cells[j]._DT_CellIndex.column = j;
          }
        }
      }

      // For DOM sourced data, the invalidate will reread the cell into
      // the data array, but for data sources as an array, they need to
      // be flipped
      if (data.src !== 'dom' && $.isArray(data._aData)) {
        fnArraySwitch(data._aData, iFrom, iTo);
      }
    }

    /* Reposition the header elements in the header layout array */
    for (i = 0, iLen = oSettings.aoHeader.length; i < iLen; i++) {
      fnArraySwitch(oSettings.aoHeader[i], iFrom, iTo);
    }
    if (oSettings.aoFooter !== null) {
      for (i = 0, iLen = oSettings.aoFooter.length; i < iLen; i++) {
        fnArraySwitch(oSettings.aoFooter[i], iFrom, iTo);
      }
    }
    if (invalidateRows || invalidateRows === undefined) {
      $.fn.dataTable.Api(oSettings).rows().invalidate();
    }

    /*
     * Update DataTables' event handlers
     */

    /* Sort listener */
    for (i = 0, iLen = iCols; i < iLen; i++) {
      $(oSettings.aoColumns[i].nTh).off('click.DT');
      this.oApi._fnSortAttachListener(oSettings, oSettings.aoColumns[i].nTh, i);
    }

    /* Fire an event so other plug-ins can update */
    $(oSettings.oInstance).trigger('column-reorder.dt', [oSettings, {
      from: iFrom,
      to: iTo,
      mapping: aiInvertMapping,
      drop: drop,
      // Old style parameters for compatibility
      iFrom: iFrom,
      iTo: iTo,
      aiInvertMapping: aiInvertMapping
    }]);
  };

  /**
   * ColReorder provides column visibility control for DataTables
   * @class ColReorder
   * @constructor
   * @param {object} dt DataTables settings object
   * @param {object} opts ColReorder options
   */
  var _ColReorder = function ColReorder(dt, opts) {
    var settings = new $.fn.dataTable.Api(dt).settings()[0];

    // Ensure that we can't initialise on the same table twice
    if (settings._colReorder) {
      return settings._colReorder;
    }

    // Allow the options to be a boolean for defaults
    if (opts === true) {
      opts = {};
    }

    // Convert from camelCase to Hungarian, just as DataTables does
    var camelToHungarian = $.fn.dataTable.camelToHungarian;
    if (camelToHungarian) {
      camelToHungarian(_ColReorder.defaults, _ColReorder.defaults, true);
      camelToHungarian(_ColReorder.defaults, opts || {});
    }

    /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
     * Public class variables
     * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

    /**
     * @namespace Settings object which contains customisable information for ColReorder instance
     */
    this.s = {
      /**
       * DataTables settings object
       *  @property dt
       *  @type     Object
       *  @default  null
       */
      "dt": null,
      /**
       * Initialisation object used for this instance
       *  @property init
       *  @type     object
       *  @default  {}
       */
      "init": $.extend(true, {}, _ColReorder.defaults, opts),
      /**
       * Number of columns to fix (not allow to be reordered)
       *  @property fixed
       *  @type     int
       *  @default  0
       */
      "fixed": 0,
      /**
       * Number of columns to fix counting from right (not allow to be reordered)
       *  @property fixedRight
       *  @type     int
       *  @default  0
       */
      "fixedRight": 0,
      /**
       * Callback function for once the reorder has been done
       *  @property reorderCallback
       *  @type     function
       *  @default  null
       */
      "reorderCallback": null,
      /**
       * @namespace Information used for the mouse drag
       */
      "mouse": {
        "startX": -1,
        "startY": -1,
        "offsetX": -1,
        "offsetY": -1,
        "target": -1,
        "targetIndex": -1,
        "fromIndex": -1
      },
      /**
       * Information which is used for positioning the insert cusor and knowing where to do the
       * insert. Array of objects with the properties:
       *   x: x-axis position
       *   to: insert point
       *  @property aoTargets
       *  @type     array
       *  @default  []
       */
      "aoTargets": []
    };

    /**
     * @namespace Common and useful DOM elements for the class instance
     */
    this.dom = {
      /**
       * Dragging element (the one the mouse is moving)
       *  @property drag
       *  @type     element
       *  @default  null
       */
      "drag": null,
      /**
       * The insert cursor
       *  @property pointer
       *  @type     element
       *  @default  null
       */
      "pointer": null
    };

    /* Constructor logic */
    this.s.dt = settings;
    this.s.dt._colReorder = this;
    this._fnConstruct();
    return this;
  };
  $.extend(_ColReorder.prototype, {
    /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
     * Public methods
     * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

    /**
     * Reset the column ordering to the original ordering that was detected on
     * start up.
     *  @return {this} Returns `this` for chaining.
     *
     *  @example
     *    // DataTables initialisation with ColReorder
     *    var table = $('#example').dataTable( {
     *        "sDom": 'Rlfrtip'
     *    } );
     *
     *    // Add click event to a button to reset the ordering
     *    $('#resetOrdering').click( function (e) {
     *        e.preventDefault();
     *        $.fn.dataTable.ColReorder( table ).fnReset();
     *    } );
     */
    "fnReset": function fnReset() {
      this._fnOrderColumns(this.fnOrder());
      return this;
    },
    /**
     * `Deprecated` - Get the current order of the columns, as an array.
     *  @return {array} Array of column identifiers
     *  @deprecated `fnOrder` should be used in preference to this method.
     *      `fnOrder` acts as a getter/setter.
     */
    "fnGetCurrentOrder": function fnGetCurrentOrder() {
      return this.fnOrder();
    },
    /**
     * Get the current order of the columns, as an array. Note that the values
     * given in the array are unique identifiers for each column. Currently
     * these are the original ordering of the columns that was detected on
     * start up, but this could potentially change in future.
     *  @return {array} Array of column identifiers
     *
     *  @example
     *    // Get column ordering for the table
     *    var order = $.fn.dataTable.ColReorder( dataTable ).fnOrder();
     */ /**
        * Set the order of the columns, from the positions identified in the
        * ordering array given. Note that ColReorder takes a brute force approach
        * to reordering, so it is possible multiple reordering events will occur
        * before the final order is settled upon.
        *  @param {array} [set] Array of column identifiers in the new order. Note
        *    that every column must be included, uniquely, in this array.
        *  @return {this} Returns `this` for chaining.
        *
        *  @example
        *    // Swap the first and second columns
        *    $.fn.dataTable.ColReorder( dataTable ).fnOrder( [1, 0, 2, 3, 4] );
        *
        *  @example
        *    // Move the first column to the end for the table `#example`
        *    var curr = $.fn.dataTable.ColReorder( '#example' ).fnOrder();
        *    var first = curr.shift();
        *    curr.push( first );
        *    $.fn.dataTable.ColReorder( '#example' ).fnOrder( curr );
        *
        *  @example
        *    // Reverse the table's order
        *    $.fn.dataTable.ColReorder( '#example' ).fnOrder(
        *      $.fn.dataTable.ColReorder( '#example' ).fnOrder().reverse()
        *    );
        */
    "fnOrder": function fnOrder(set, original) {
      var a = [],
        i,
        ien,
        j,
        jen;
      var columns = this.s.dt.aoColumns;
      if (set === undefined) {
        for (i = 0, ien = columns.length; i < ien; i++) {
          a.push(columns[i]._ColReorder_iOrigCol);
        }
        return a;
      }

      // The order given is based on the original indexes, rather than the
      // existing ones, so we need to translate from the original to current
      // before then doing the order
      if (original) {
        var order = this.fnOrder();
        for (i = 0, ien = set.length; i < ien; i++) {
          a.push($.inArray(set[i], order));
        }
        set = a;
      }
      this._fnOrderColumns(fnInvertKeyValues(set));
      return this;
    },
    /**
     * Convert from the original column index, to the original
     *
     * @param  {int|array} idx Index(es) to convert
     * @param  {string} dir Transpose direction - `fromOriginal` / `toCurrent`
     *   or `'toOriginal` / `fromCurrent`
     * @return {int|array}     Converted values
     */
    fnTranspose: function fnTranspose(idx, dir) {
      if (!dir) {
        dir = 'toCurrent';
      }
      var order = this.fnOrder();
      var columns = this.s.dt.aoColumns;
      if (dir === 'toCurrent') {
        // Given an original index, want the current
        return !$.isArray(idx) ? $.inArray(idx, order) : $.map(idx, function (index) {
          return $.inArray(index, order);
        });
      } else {
        // Given a current index, want the original
        return !$.isArray(idx) ? columns[idx]._ColReorder_iOrigCol : $.map(idx, function (index) {
          return columns[index]._ColReorder_iOrigCol;
        });
      }
    },
    /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
     * Private methods (they are of course public in JS, but recommended as private)
     * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

    /**
     * Constructor logic
     *  @method  _fnConstruct
     *  @returns void
     *  @private
     */
    "_fnConstruct": function _fnConstruct() {
      var that = this;
      var iLen = this.s.dt.aoColumns.length;
      var table = this.s.dt.nTable;
      var i;

      /* Columns discounted from reordering - counting left to right */
      if (this.s.init.iFixedColumns) {
        this.s.fixed = this.s.init.iFixedColumns;
      }
      if (this.s.init.iFixedColumnsLeft) {
        this.s.fixed = this.s.init.iFixedColumnsLeft;
      }

      /* Columns discounted from reordering - counting right to left */
      this.s.fixedRight = this.s.init.iFixedColumnsRight ? this.s.init.iFixedColumnsRight : 0;

      /* Drop callback initialisation option */
      if (this.s.init.fnReorderCallback) {
        this.s.reorderCallback = this.s.init.fnReorderCallback;
      }

      /* Add event handlers for the drag and drop, and also mark the original column order */
      for (i = 0; i < iLen; i++) {
        if (i > this.s.fixed - 1 && i < iLen - this.s.fixedRight) {
          this._fnMouseListener(i, this.s.dt.aoColumns[i].nTh);
        }

        /* Mark the original column order for later reference */
        this.s.dt.aoColumns[i]._ColReorder_iOrigCol = i;
      }

      /* State saving */
      this.s.dt.oApi._fnCallbackReg(this.s.dt, 'aoStateSaveParams', function (oS, oData) {
        that._fnStateSave.call(that, oData);
      }, "ColReorder_State");

      /* An initial column order has been specified */
      var aiOrder = null;
      if (this.s.init.aiOrder) {
        aiOrder = this.s.init.aiOrder.slice();
      }

      /* State loading, overrides the column order given */
      if (this.s.dt.oLoadedState && typeof this.s.dt.oLoadedState.ColReorder != 'undefined' && this.s.dt.oLoadedState.ColReorder.length == this.s.dt.aoColumns.length) {
        aiOrder = this.s.dt.oLoadedState.ColReorder;
      }

      /* If we have an order to apply - do so */
      if (aiOrder) {
        /* We might be called during or after the DataTables initialisation. If before, then we need
         * to wait until the draw is done, if after, then do what we need to do right away
         */
        if (!that.s.dt._bInitComplete) {
          var bDone = false;
          $(table).on('draw.dt.colReorder', function () {
            if (!that.s.dt._bInitComplete && !bDone) {
              bDone = true;
              var resort = fnInvertKeyValues(aiOrder);
              that._fnOrderColumns.call(that, resort);
            }
          });
        } else {
          var resort = fnInvertKeyValues(aiOrder);
          that._fnOrderColumns.call(that, resort);
        }
      } else {
        this._fnSetColumnIndexes();
      }

      // Destroy clean up
      $(table).on('destroy.dt.colReorder', function () {
        $(table).off('destroy.dt.colReorder draw.dt.colReorder');
        $(that.s.dt.nTHead).find('*').off('.ColReorder');
        $.each(that.s.dt.aoColumns, function (i, column) {
          $(column.nTh).removeAttr('data-column-index');
        });
        that.s.dt._colReorder = null;
        that.s = null;
      });
    },
    /**
     * Set the column order from an array
     *  @method  _fnOrderColumns
     *  @param   array a An array of integers which dictate the column order that should be applied
     *  @returns void
     *  @private
     */
    "_fnOrderColumns": function _fnOrderColumns(a) {
      var changed = false;
      if (a.length != this.s.dt.aoColumns.length) {
        this.s.dt.oInstance.oApi._fnLog(this.s.dt, 1, "ColReorder - array reorder does not " + "match known number of columns. Skipping.");
        return;
      }
      for (var i = 0, iLen = a.length; i < iLen; i++) {
        var currIndex = $.inArray(i, a);
        if (i != currIndex) {
          /* Reorder our switching array */
          fnArraySwitch(a, currIndex, i);

          /* Do the column reorder in the table */
          this.s.dt.oInstance.fnColReorder(currIndex, i, true, false);
          changed = true;
        }
      }
      $.fn.dataTable.Api(this.s.dt).rows().invalidate();
      this._fnSetColumnIndexes();

      // Has anything actually changed? If not, then nothing else to do
      if (!changed) {
        return;
      }

      /* When scrolling we need to recalculate the column sizes to allow for the shift */
      if (this.s.dt.oScroll.sX !== "" || this.s.dt.oScroll.sY !== "") {
        this.s.dt.oInstance.fnAdjustColumnSizing(false);
      }

      /* Save the state */
      this.s.dt.oInstance.oApi._fnSaveState(this.s.dt);
      if (this.s.reorderCallback !== null) {
        this.s.reorderCallback.call(this);
      }
    },
    /**
     * Because we change the indexes of columns in the table, relative to their starting point
     * we need to reorder the state columns to what they are at the starting point so we can
     * then rearrange them again on state load!
     *  @method  _fnStateSave
     *  @param   object oState DataTables state
     *  @returns string JSON encoded cookie string for DataTables
     *  @private
     */
    "_fnStateSave": function _fnStateSave(oState) {
      var i, iLen, aCopy, iOrigColumn;
      var oSettings = this.s.dt;
      var columns = oSettings.aoColumns;
      oState.ColReorder = [];

      /* Sorting */
      if (oState.aaSorting) {
        // 1.10.0-
        for (i = 0; i < oState.aaSorting.length; i++) {
          oState.aaSorting[i][0] = columns[oState.aaSorting[i][0]]._ColReorder_iOrigCol;
        }
        var aSearchCopy = $.extend(true, [], oState.aoSearchCols);
        for (i = 0, iLen = columns.length; i < iLen; i++) {
          iOrigColumn = columns[i]._ColReorder_iOrigCol;

          /* Column filter */
          oState.aoSearchCols[iOrigColumn] = aSearchCopy[i];

          /* Visibility */
          oState.abVisCols[iOrigColumn] = columns[i].bVisible;

          /* Column reordering */
          oState.ColReorder.push(iOrigColumn);
        }
      } else if (oState.order) {
        // 1.10.1+
        for (i = 0; i < oState.order.length; i++) {
          oState.order[i][0] = columns[oState.order[i][0]]._ColReorder_iOrigCol;
        }
        var stateColumnsCopy = $.extend(true, [], oState.columns);
        for (i = 0, iLen = columns.length; i < iLen; i++) {
          iOrigColumn = columns[i]._ColReorder_iOrigCol;

          /* Columns */
          oState.columns[iOrigColumn] = stateColumnsCopy[i];

          /* Column reordering */
          oState.ColReorder.push(iOrigColumn);
        }
      }
    },
    /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
     * Mouse drop and drag
     */

    /**
     * Add a mouse down listener to a particluar TH element
     *  @method  _fnMouseListener
     *  @param   int i Column index
     *  @param   element nTh TH element clicked on
     *  @returns void
     *  @private
     */
    "_fnMouseListener": function _fnMouseListener(i, nTh) {
      var that = this;
      $(nTh).on('mousedown.ColReorder', function (e) {
        that._fnMouseDown.call(that, e, nTh);
      }).on('touchstart.ColReorder', function (e) {
        that._fnMouseDown.call(that, e, nTh);
      });
    },
    /**
     * Mouse down on a TH element in the table header
     *  @method  _fnMouseDown
     *  @param   event e Mouse event
     *  @param   element nTh TH element to be dragged
     *  @returns void
     *  @private
     */
    "_fnMouseDown": function _fnMouseDown(e, nTh) {
      var that = this;

      /* Store information about the mouse position */
      var target = $(e.target).closest('th, td');
      var offset = target.offset();
      var idx = parseInt($(nTh).attr('data-column-index'), 10);
      if (idx === undefined) {
        return;
      }
      this.s.mouse.startX = this._fnCursorPosition(e, 'pageX');
      this.s.mouse.startY = this._fnCursorPosition(e, 'pageY');
      this.s.mouse.offsetX = this._fnCursorPosition(e, 'pageX') - offset.left;
      this.s.mouse.offsetY = this._fnCursorPosition(e, 'pageY') - offset.top;
      this.s.mouse.target = this.s.dt.aoColumns[idx].nTh; //target[0];
      this.s.mouse.targetIndex = idx;
      this.s.mouse.fromIndex = idx;
      this._fnRegions();

      /* Add event handlers to the document */
      $(document).on('mousemove.ColReorder touchmove.ColReorder', function (e) {
        that._fnMouseMove.call(that, e);
      }).on('mouseup.ColReorder touchend.ColReorder', function (e) {
        that._fnMouseUp.call(that, e);
      });
    },
    /**
     * Deal with a mouse move event while dragging a node
     *  @method  _fnMouseMove
     *  @param   event e Mouse event
     *  @returns void
     *  @private
     */
    "_fnMouseMove": function _fnMouseMove(e) {
      var that = this;
      if (this.dom.drag === null) {
        /* Only create the drag element if the mouse has moved a specific distance from the start
         * point - this allows the user to make small mouse movements when sorting and not have a
         * possibly confusing drag element showing up
         */
        if (Math.pow(Math.pow(this._fnCursorPosition(e, 'pageX') - this.s.mouse.startX, 2) + Math.pow(this._fnCursorPosition(e, 'pageY') - this.s.mouse.startY, 2), 0.5) < 5) {
          return;
        }
        this._fnCreateDragNode();
      }

      /* Position the element - we respect where in the element the click occured */
      this.dom.drag.css({
        left: this._fnCursorPosition(e, 'pageX') - this.s.mouse.offsetX,
        top: this._fnCursorPosition(e, 'pageY') - this.s.mouse.offsetY
      });

      /* Based on the current mouse position, calculate where the insert should go */
      var bSet = false;
      var lastToIndex = this.s.mouse.toIndex;
      for (var i = 1, iLen = this.s.aoTargets.length; i < iLen; i++) {
        if (this._fnCursorPosition(e, 'pageX') < this.s.aoTargets[i - 1].x + (this.s.aoTargets[i].x - this.s.aoTargets[i - 1].x) / 2) {
          this.dom.pointer.css('left', this.s.aoTargets[i - 1].x);
          this.s.mouse.toIndex = this.s.aoTargets[i - 1].to;
          bSet = true;
          break;
        }
      }

      // The insert element wasn't positioned in the array (less than
      // operator), so we put it at the end
      if (!bSet) {
        this.dom.pointer.css('left', this.s.aoTargets[this.s.aoTargets.length - 1].x);
        this.s.mouse.toIndex = this.s.aoTargets[this.s.aoTargets.length - 1].to;
      }

      // Perform reordering if realtime updating is on and the column has moved
      if (this.s.init.bRealtime && lastToIndex !== this.s.mouse.toIndex) {
        this.s.dt.oInstance.fnColReorder(this.s.mouse.fromIndex, this.s.mouse.toIndex, false);
        this.s.mouse.fromIndex = this.s.mouse.toIndex;
        this._fnRegions();
      }
    },
    /**
     * Finish off the mouse drag and insert the column where needed
     *  @method  _fnMouseUp
     *  @param   event e Mouse event
     *  @returns void
     *  @private
     */
    "_fnMouseUp": function _fnMouseUp(e) {
      var that = this;
      $(document).off('.ColReorder');
      if (this.dom.drag !== null) {
        /* Remove the guide elements */
        this.dom.drag.remove();
        this.dom.pointer.remove();
        this.dom.drag = null;
        this.dom.pointer = null;

        /* Actually do the reorder */
        this.s.dt.oInstance.fnColReorder(this.s.mouse.fromIndex, this.s.mouse.toIndex, true);
        this._fnSetColumnIndexes();

        /* When scrolling we need to recalculate the column sizes to allow for the shift */
        if (this.s.dt.oScroll.sX !== "" || this.s.dt.oScroll.sY !== "") {
          this.s.dt.oInstance.fnAdjustColumnSizing(false);
        }

        /* Save the state */
        this.s.dt.oInstance.oApi._fnSaveState(this.s.dt);
        if (this.s.reorderCallback !== null) {
          this.s.reorderCallback.call(this);
        }
      }
    },
    /**
     * Calculate a cached array with the points of the column inserts, and the
     * 'to' points
     *  @method  _fnRegions
     *  @returns void
     *  @private
     */
    "_fnRegions": function _fnRegions() {
      var aoColumns = this.s.dt.aoColumns;
      this.s.aoTargets.splice(0, this.s.aoTargets.length);
      this.s.aoTargets.push({
        "x": $(this.s.dt.nTable).offset().left,
        "to": 0
      });
      var iToPoint = 0;
      var total = this.s.aoTargets[0].x;
      for (var i = 0, iLen = aoColumns.length; i < iLen; i++) {
        /* For the column / header in question, we want it's position to remain the same if the
         * position is just to it's immediate left or right, so we only increment the counter for
         * other columns
         */
        if (i != this.s.mouse.fromIndex) {
          iToPoint++;
        }
        if (aoColumns[i].bVisible && aoColumns[i].nTh.style.display !== 'none') {
          total += $(aoColumns[i].nTh).outerWidth();
          this.s.aoTargets.push({
            "x": total,
            "to": iToPoint
          });
        }
      }

      /* Disallow columns for being reordered by drag and drop, counting right to left */
      if (this.s.fixedRight !== 0) {
        this.s.aoTargets.splice(this.s.aoTargets.length - this.s.fixedRight);
      }

      /* Disallow columns for being reordered by drag and drop, counting left to right */
      if (this.s.fixed !== 0) {
        this.s.aoTargets.splice(0, this.s.fixed);
      }
    },
    /**
     * Copy the TH element that is being drags so the user has the idea that they are actually
     * moving it around the page.
     *  @method  _fnCreateDragNode
     *  @returns void
     *  @private
     */
    "_fnCreateDragNode": function _fnCreateDragNode() {
      var scrolling = this.s.dt.oScroll.sX !== "" || this.s.dt.oScroll.sY !== "";
      var origCell = this.s.dt.aoColumns[this.s.mouse.targetIndex].nTh;
      var origTr = origCell.parentNode;
      var origThead = origTr.parentNode;
      var origTable = origThead.parentNode;
      var cloneCell = $(origCell).clone();

      // This is a slightly odd combination of jQuery and DOM, but it is the
      // fastest and least resource intensive way I could think of cloning
      // the table with just a single header cell in it.
      this.dom.drag = $(origTable.cloneNode(false)).addClass('DTCR_clonedTable').append($(origThead.cloneNode(false)).append($(origTr.cloneNode(false)).append(cloneCell[0]))).css({
        position: 'absolute',
        top: 0,
        left: 0,
        width: $(origCell).outerWidth(),
        height: $(origCell).outerHeight()
      }).appendTo('body');
      this.dom.pointer = $('<div></div>').addClass('DTCR_pointer').css({
        position: 'absolute',
        top: scrolling ? $('div.dataTables_scroll', this.s.dt.nTableWrapper).offset().top : $(this.s.dt.nTable).offset().top,
        height: scrolling ? $('div.dataTables_scroll', this.s.dt.nTableWrapper).height() : $(this.s.dt.nTable).height()
      }).appendTo('body');
    },
    /**
     * Add a data attribute to the column headers, so we know the index of
     * the row to be reordered. This allows fast detection of the index, and
     * for this plug-in to work with FixedHeader which clones the nodes.
     *  @private
     */
    "_fnSetColumnIndexes": function _fnSetColumnIndexes() {
      $.each(this.s.dt.aoColumns, function (i, column) {
        $(column.nTh).attr('data-column-index', i);
      });
    },
    /**
     * Get cursor position regardless of mouse or touch input
     * @param  {Event}  e    jQuery Event
     * @param  {string} prop Property to get
     * @return {number}      Value
     */
    _fnCursorPosition: function _fnCursorPosition(e, prop) {
      if (e.type.indexOf('touch') !== -1) {
        return e.originalEvent.touches[0][prop];
      }
      return e[prop];
    }
  });

  /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
   * Static parameters
   * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

  /**
   * ColReorder default settings for initialisation
   *  @namespace
   *  @static
   */
  _ColReorder.defaults = {
    /**
     * Predefined ordering for the columns that will be applied automatically
     * on initialisation. If not specified then the order that the columns are
     * found to be in the HTML is the order used.
     *  @type array
     *  @default null
     *  @static
     */
    aiOrder: null,
    /**
     * Redraw the table's column ordering as the end user draws the column
     * (`true`) or wait until the mouse is released (`false` - default). Note
     * that this will perform a redraw on each reordering, which involves an
     * Ajax request each time if you are using server-side processing in
     * DataTables.
     *  @type boolean
     *  @default false
     *  @static
     */
    bRealtime: true,
    /**
     * Indicate how many columns should be fixed in position (counting from the
     * left). This will typically be 1 if used, but can be as high as you like.
     *  @type int
     *  @default 0
     *  @static
     */
    iFixedColumnsLeft: 0,
    /**
     * As `iFixedColumnsRight` but counting from the right.
     *  @type int
     *  @default 0
     *  @static
     */
    iFixedColumnsRight: 0,
    /**
     * Callback function that is fired when columns are reordered. The `column-
     * reorder` event is preferred over this callback
     *  @type function():void
     *  @default null
     *  @static
     */
    fnReorderCallback: null
  };

  /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
   * Constants
   * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

  /**
   * ColReorder version
   *  @constant  version
   *  @type      String
   *  @default   As code
   */
  _ColReorder.version = "1.4.1";

  /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
   * DataTables interfaces
   * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

  // Expose
  $.fn.dataTable.ColReorder = _ColReorder;
  $.fn.DataTable.ColReorder = _ColReorder;

  // Register a new feature with DataTables
  if (typeof $.fn.dataTable == "function" && typeof $.fn.dataTableExt.fnVersionCheck == "function" && $.fn.dataTableExt.fnVersionCheck('1.10.8')) {
    $.fn.dataTableExt.aoFeatures.push({
      "fnInit": function fnInit(settings) {
        var table = settings.oInstance;
        if (!settings._colReorder) {
          var dtInit = settings.oInit;
          var opts = dtInit.colReorder || dtInit.oColReorder || {};
          new _ColReorder(settings, opts);
        } else {
          table.oApi._fnLog(settings, 1, "ColReorder attempted to initialise twice. Ignoring second");
        }
        return null; /* No node for DataTables to insert */
      },
      "cFeature": "R",
      "sFeature": "ColReorder"
    });
  } else {
    alert("Warning: ColReorder requires DataTables 1.10.8 or greater - www.datatables.net/download");
  }

  // Attach a listener to the document which listens for DataTables initialisation
  // events so we can automatically initialise
  $(document).on('preInit.dt.colReorder', function (e, settings) {
    if (e.namespace !== 'dt') {
      return;
    }
    var init = settings.oInit.colReorder;
    var defaults = DataTable.defaults.colReorder;
    if (init || defaults) {
      var opts = $.extend({}, init, defaults);
      if (init !== false) {
        new _ColReorder(settings, opts);
      }
    }
  });

  // API augmentation
  $.fn.dataTable.Api.register('colReorder.reset()', function () {
    return this.iterator('table', function (ctx) {
      ctx._colReorder.fnReset();
    });
  });
  $.fn.dataTable.Api.register('colReorder.order()', function (set, original) {
    if (set) {
      return this.iterator('table', function (ctx) {
        ctx._colReorder.fnOrder(set, original);
      });
    }
    return this.context.length ? this.context[0]._colReorder.fnOrder() : null;
  });
  $.fn.dataTable.Api.register('colReorder.transpose()', function (idx, dir) {
    return this.context.length && this.context[0]._colReorder ? this.context[0]._colReorder.fnTranspose(idx, dir) : idx;
  });
  $.fn.dataTable.Api.register('colReorder.move()', function (from, to, drop, invalidateRows) {
    if (this.context.length) {
      this.context[0]._colReorder.s.dt.oInstance.fnColReorder(from, to, drop, invalidateRows);
    }
    return this;
  });
  return _ColReorder;
});

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_internals_export_js","vendors-node_modules_core-js_internals_add-to-unscopables_js-node_modules_core-js_internals_a-09983a","vendors-node_modules_core-js_internals_array-slice_js-node_modules_core-js_internals_function-caeab8","vendors-node_modules_core-js_modules_es_string_iterator_js-node_modules_core-js_modules_es_sy-23bad7","vendors-node_modules_jquery_dist_jquery_js","vendors-node_modules_datatables_net_js_jquery_dataTables_mjs","vendors-node_modules_core-js_modules_es_array_find_js-node_modules_core-js_modules_es_array_i-3fb8d4"], () => (__webpack_exec__("./assets/css/portoadmin/vendor/datatables/extras/TableTools/ColReorder-1.4.1/js/dataTables.colReorder.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvanMvZGF0YVRhYmxlcy5jb2xSZW9yZGVyLjMzYjY3YjAyLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQyxXQUFVQSxPQUFPLEVBQUU7RUFDbkIsSUFBSyxJQUEwQyxFQUFHO0lBQ2pEO0lBQ0FDLGlDQUFRLENBQUMseUVBQVEsRUFBRSxtR0FBZ0IsQ0FBQyxtQ0FBRSxVQUFXRSxDQUFDLEVBQUc7TUFDcEQsT0FBT0gsT0FBTyxDQUFFRyxDQUFDLEVBQUVDLE1BQU0sRUFBRUMsUUFBUyxDQUFDO0lBQ3RDLENBQUU7QUFBQSxrR0FBQztFQUNKLENBQUMsTUFDSTtBQUFBLEVBaUJKO0FBQ0YsQ0FBQyxFQUFDLFVBQVVGLENBQUMsRUFBRUMsTUFBTSxFQUFFQyxRQUFRLEVBQUVTLFNBQVMsRUFBRztFQUM3QyxZQUFZOztFQUNaLElBQUlDLFNBQVMsR0FBR1osQ0FBQyxDQUFDTyxFQUFFLENBQUNDLFNBQVM7O0VBRzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0VBQ0EsU0FBU0ssaUJBQWlCQSxDQUFFQyxHQUFHLEVBQy9CO0lBQ0MsSUFBSUMsSUFBSSxHQUFDLEVBQUU7SUFDWCxLQUFNLElBQUlDLENBQUMsR0FBQyxDQUFDLEVBQUVDLElBQUksR0FBQ0gsR0FBRyxDQUFDSSxNQUFNLEVBQUdGLENBQUMsR0FBQ0MsSUFBSSxFQUFHRCxDQUFDLEVBQUUsRUFDN0M7TUFDQ0QsSUFBSSxDQUFFRCxHQUFHLENBQUNFLENBQUMsQ0FBQyxDQUFFLEdBQUdBLENBQUM7SUFDbkI7SUFDQSxPQUFPRCxJQUFJO0VBQ1o7O0VBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtFQUNBLFNBQVNJLGFBQWFBLENBQUVDLE1BQU0sRUFBRUMsS0FBSyxFQUFFQyxHQUFHLEVBQzFDO0lBQ0MsSUFBSUMsTUFBTSxHQUFHSCxNQUFNLENBQUNJLE1BQU0sQ0FBRUgsS0FBSyxFQUFFLENBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN6Q0QsTUFBTSxDQUFDSSxNQUFNLENBQUVGLEdBQUcsRUFBRSxDQUFDLEVBQUVDLE1BQU8sQ0FBQztFQUNoQzs7RUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7RUFDQSxTQUFTRSxXQUFXQSxDQUFFQyxPQUFPLEVBQUVMLEtBQUssRUFBRUMsR0FBRyxFQUN6QztJQUNDLElBQUlLLE1BQU0sR0FBRyxFQUFFO0lBQ2YsS0FBTSxJQUFJWCxDQUFDLEdBQUMsQ0FBQyxFQUFFQyxJQUFJLEdBQUNTLE9BQU8sQ0FBQ0UsVUFBVSxDQUFDVixNQUFNLEVBQUdGLENBQUMsR0FBQ0MsSUFBSSxFQUFHRCxDQUFDLEVBQUUsRUFDNUQ7TUFDQyxJQUFLVSxPQUFPLENBQUNFLFVBQVUsQ0FBQ1osQ0FBQyxDQUFDLENBQUNhLFFBQVEsSUFBSSxDQUFDLEVBQ3hDO1FBQ0NGLE1BQU0sQ0FBQ0csSUFBSSxDQUFFSixPQUFPLENBQUNFLFVBQVUsQ0FBQ1osQ0FBQyxDQUFFLENBQUM7TUFDckM7SUFDRDtJQUNBLElBQUllLE1BQU0sR0FBR0osTUFBTSxDQUFFTixLQUFLLENBQUU7SUFFNUIsSUFBS0MsR0FBRyxLQUFLLElBQUksRUFDakI7TUFDQ0ksT0FBTyxDQUFDTSxZQUFZLENBQUVELE1BQU0sRUFBRUosTUFBTSxDQUFDTCxHQUFHLENBQUUsQ0FBQztJQUM1QyxDQUFDLE1BRUQ7TUFDQ0ksT0FBTyxDQUFDTyxXQUFXLENBQUVGLE1BQU8sQ0FBQztJQUM5QjtFQUNEOztFQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtFQUNBL0IsQ0FBQyxDQUFDTyxFQUFFLENBQUMyQixZQUFZLENBQUNDLElBQUksQ0FBQ0MsWUFBWSxHQUFHLFVBQVdDLFNBQVMsRUFBRWhCLEtBQUssRUFBRUMsR0FBRyxFQUFFZ0IsSUFBSSxFQUFFQyxjQUFjLEVBQzVGO0lBQ0MsSUFBSXZCLENBQUM7TUFBRUMsSUFBSTtNQUFFdUIsQ0FBQztNQUFFQyxJQUFJO01BQUVDLEdBQUc7TUFBRUMsS0FBSyxHQUFDTixTQUFTLENBQUNPLFNBQVMsQ0FBQzFCLE1BQU07TUFBRTJCLElBQUk7TUFBRUMsSUFBSTtJQUN2RSxJQUFJQyxPQUFPLEdBQUcsU0FBVkEsT0FBT0EsQ0FBY0MsR0FBRyxFQUFFQyxJQUFJLEVBQUVDLE9BQU8sRUFBRztNQUM3QyxJQUFLLENBQUVGLEdBQUcsQ0FBRUMsSUFBSSxDQUFFLElBQUksT0FBT0QsR0FBRyxDQUFFQyxJQUFJLENBQUUsS0FBSyxVQUFVLEVBQUc7UUFDekQ7TUFDRDtNQUVBLElBQUlFLENBQUMsR0FBR0gsR0FBRyxDQUFFQyxJQUFJLENBQUUsQ0FBQ0csS0FBSyxDQUFDLEdBQUcsQ0FBQztNQUM5QixJQUFJQyxHQUFHLEdBQUdGLENBQUMsQ0FBQ0csS0FBSyxDQUFDLENBQUM7TUFFbkIsSUFBS0MsS0FBSyxDQUFFRixHQUFHLEdBQUMsQ0FBRSxDQUFDLEVBQUc7UUFDckI7TUFDRDtNQUVBTCxHQUFHLENBQUVDLElBQUksQ0FBRSxHQUFHQyxPQUFPLENBQUVHLEdBQUcsR0FBQyxDQUFDLENBQUUsR0FBQyxHQUFHLEdBQUNGLENBQUMsQ0FBQ0ssSUFBSSxDQUFDLEdBQUcsQ0FBQztJQUMvQyxDQUFDOztJQUVEO0lBQ0EsSUFBS25DLEtBQUssSUFBSUMsR0FBRyxFQUNqQjtNQUNDO01BQ0E7SUFDRDtJQUVBLElBQUtELEtBQUssR0FBRyxDQUFDLElBQUlBLEtBQUssSUFBSXNCLEtBQUssRUFDaEM7TUFDQyxJQUFJLENBQUNSLElBQUksQ0FBQ3NCLE1BQU0sQ0FBRXBCLFNBQVMsRUFBRSxDQUFDLEVBQUUsNENBQTRDLEdBQUNoQixLQUFNLENBQUM7TUFDcEY7SUFDRDtJQUVBLElBQUtDLEdBQUcsR0FBRyxDQUFDLElBQUlBLEdBQUcsSUFBSXFCLEtBQUssRUFDNUI7TUFDQyxJQUFJLENBQUNSLElBQUksQ0FBQ3NCLE1BQU0sQ0FBRXBCLFNBQVMsRUFBRSxDQUFDLEVBQUUsMENBQTBDLEdBQUNmLEdBQUksQ0FBQztNQUNoRjtJQUNEOztJQUVBO0FBQ0Q7QUFDQTtJQUNDLElBQUlvQyxTQUFTLEdBQUcsRUFBRTtJQUNsQixLQUFNMUMsQ0FBQyxHQUFDLENBQUMsRUFBRUMsSUFBSSxHQUFDMEIsS0FBSyxFQUFHM0IsQ0FBQyxHQUFDQyxJQUFJLEVBQUdELENBQUMsRUFBRSxFQUNwQztNQUNDMEMsU0FBUyxDQUFDMUMsQ0FBQyxDQUFDLEdBQUdBLENBQUM7SUFDakI7SUFDQUcsYUFBYSxDQUFFdUMsU0FBUyxFQUFFckMsS0FBSyxFQUFFQyxHQUFJLENBQUM7SUFDdEMsSUFBSXFDLGVBQWUsR0FBRzlDLGlCQUFpQixDQUFFNkMsU0FBVSxDQUFDOztJQUdwRDtBQUNEO0FBQ0E7SUFDQztJQUNBLEtBQU0xQyxDQUFDLEdBQUMsQ0FBQyxFQUFFQyxJQUFJLEdBQUNvQixTQUFTLENBQUN1QixTQUFTLENBQUMxQyxNQUFNLEVBQUdGLENBQUMsR0FBQ0MsSUFBSSxFQUFHRCxDQUFDLEVBQUUsRUFDekQ7TUFDQ3FCLFNBQVMsQ0FBQ3VCLFNBQVMsQ0FBQzVDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHMkMsZUFBZSxDQUFFdEIsU0FBUyxDQUFDdUIsU0FBUyxDQUFDNUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUU7SUFDekU7O0lBRUE7SUFDQSxJQUFLcUIsU0FBUyxDQUFDd0IsY0FBYyxLQUFLLElBQUksRUFDdEM7TUFDQyxLQUFNN0MsQ0FBQyxHQUFDLENBQUMsRUFBRUMsSUFBSSxHQUFDb0IsU0FBUyxDQUFDd0IsY0FBYyxDQUFDM0MsTUFBTSxFQUFHRixDQUFDLEdBQUNDLElBQUksRUFBR0QsQ0FBQyxFQUFFLEVBQzlEO1FBQ0NxQixTQUFTLENBQUN3QixjQUFjLENBQUM3QyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRzJDLGVBQWUsQ0FBRXRCLFNBQVMsQ0FBQ3dCLGNBQWMsQ0FBQzdDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFFO01BQ25GO0lBQ0Q7O0lBRUE7SUFDQSxLQUFNQSxDQUFDLEdBQUMsQ0FBQyxFQUFFQyxJQUFJLEdBQUMwQixLQUFLLEVBQUczQixDQUFDLEdBQUNDLElBQUksRUFBR0QsQ0FBQyxFQUFFLEVBQ3BDO01BQ0M4QixJQUFJLEdBQUdULFNBQVMsQ0FBQ08sU0FBUyxDQUFDNUIsQ0FBQyxDQUFDO01BQzdCLEtBQU13QixDQUFDLEdBQUMsQ0FBQyxFQUFFQyxJQUFJLEdBQUNLLElBQUksQ0FBQ2dCLFNBQVMsQ0FBQzVDLE1BQU0sRUFBR3NCLENBQUMsR0FBQ0MsSUFBSSxFQUFHRCxDQUFDLEVBQUUsRUFDcEQ7UUFDQ00sSUFBSSxDQUFDZ0IsU0FBUyxDQUFDdEIsQ0FBQyxDQUFDLEdBQUdtQixlQUFlLENBQUViLElBQUksQ0FBQ2dCLFNBQVMsQ0FBQ3RCLENBQUMsQ0FBQyxDQUFFO01BQ3pEOztNQUVBO01BQ0FNLElBQUksQ0FBQ2lCLEdBQUcsR0FBR0osZUFBZSxDQUFFYixJQUFJLENBQUNpQixHQUFHLENBQUU7SUFDdkM7O0lBRUE7SUFDQS9ELENBQUMsQ0FBQ2dFLElBQUksQ0FBRTNCLFNBQVMsQ0FBQzRCLFNBQVMsRUFBRSxVQUFVakQsQ0FBQyxFQUFFa0QsR0FBRyxFQUFFO01BQzlDN0IsU0FBUyxDQUFDNEIsU0FBUyxDQUFDakQsQ0FBQyxDQUFDLENBQUNtRCxHQUFHLEdBQUdSLGVBQWUsQ0FBRU8sR0FBRyxDQUFDQyxHQUFHLENBQUU7SUFDeEQsQ0FBRSxDQUFDOztJQUVIO0lBQ0EsS0FBTW5ELENBQUMsR0FBQyxDQUFDLEVBQUVDLElBQUksR0FBQzBCLEtBQUssRUFBRzNCLENBQUMsR0FBQ0MsSUFBSSxFQUFHRCxDQUFDLEVBQUUsRUFDcEM7TUFDQzhCLElBQUksR0FBR1QsU0FBUyxDQUFDTyxTQUFTLENBQUM1QixDQUFDLENBQUM7TUFFN0IsSUFBSyxPQUFPOEIsSUFBSSxDQUFDc0IsS0FBSyxJQUFJLFFBQVEsRUFBRztRQUNwQ3RCLElBQUksQ0FBQ3NCLEtBQUssR0FBR1QsZUFBZSxDQUFFYixJQUFJLENBQUNzQixLQUFLLENBQUU7TUFDM0MsQ0FBQyxNQUNJLElBQUtwRSxDQUFDLENBQUNxRSxhQUFhLENBQUV2QixJQUFJLENBQUNzQixLQUFNLENBQUMsRUFBRztRQUN6QztRQUNBckIsT0FBTyxDQUFFRCxJQUFJLENBQUNzQixLQUFLLEVBQUUsR0FBRyxFQUFPVCxlQUFnQixDQUFDO1FBQ2hEWixPQUFPLENBQUVELElBQUksQ0FBQ3NCLEtBQUssRUFBRSxRQUFRLEVBQUVULGVBQWdCLENBQUM7UUFDaERaLE9BQU8sQ0FBRUQsSUFBSSxDQUFDc0IsS0FBSyxFQUFFLE1BQU0sRUFBSVQsZUFBZ0IsQ0FBQztRQUNoRFosT0FBTyxDQUFFRCxJQUFJLENBQUNzQixLQUFLLEVBQUUsTUFBTSxFQUFJVCxlQUFnQixDQUFDO01BQ2pEO0lBQ0Q7O0lBRUE7QUFDRDtBQUNBO0lBQ0MsSUFBS3RCLFNBQVMsQ0FBQ08sU0FBUyxDQUFDdkIsS0FBSyxDQUFDLENBQUNpRCxRQUFRLEVBQ3hDO01BQ0M7QUFDRjtBQUNBO0FBQ0E7TUFDRSxJQUFJQyxhQUFhLEdBQUcsSUFBSSxDQUFDcEMsSUFBSSxDQUFDcUMsdUJBQXVCLENBQUVuQyxTQUFTLEVBQUVoQixLQUFNLENBQUM7TUFDekUsSUFBSW9ELGtCQUFrQixHQUFHLElBQUk7TUFFN0J6RCxDQUFDLEdBQUdNLEdBQUcsR0FBR0QsS0FBSyxHQUFHQyxHQUFHLEdBQUdBLEdBQUcsR0FBRyxDQUFDO01BQy9CLE9BQVFtRCxrQkFBa0IsS0FBSyxJQUFJLElBQUl6RCxDQUFDLEdBQUcyQixLQUFLLEVBQ2hEO1FBQ0M4QixrQkFBa0IsR0FBRyxJQUFJLENBQUN0QyxJQUFJLENBQUNxQyx1QkFBdUIsQ0FBRW5DLFNBQVMsRUFBRXJCLENBQUUsQ0FBQztRQUN0RUEsQ0FBQyxFQUFFO01BQ0o7O01BRUE7TUFDQTZCLElBQUksR0FBR1IsU0FBUyxDQUFDcUMsTUFBTSxDQUFDQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUM7TUFDbEQsS0FBTTNELENBQUMsR0FBQyxDQUFDLEVBQUVDLElBQUksR0FBQzRCLElBQUksQ0FBQzNCLE1BQU0sRUFBR0YsQ0FBQyxHQUFDQyxJQUFJLEVBQUdELENBQUMsRUFBRSxFQUMxQztRQUNDUyxXQUFXLENBQUVvQixJQUFJLENBQUM3QixDQUFDLENBQUMsRUFBRXVELGFBQWEsRUFBRUUsa0JBQW1CLENBQUM7TUFDMUQ7O01BRUE7TUFDQSxJQUFLcEMsU0FBUyxDQUFDdUMsTUFBTSxLQUFLLElBQUksRUFDOUI7UUFDQy9CLElBQUksR0FBR1IsU0FBUyxDQUFDdUMsTUFBTSxDQUFDRCxvQkFBb0IsQ0FBQyxJQUFJLENBQUM7UUFDbEQsS0FBTTNELENBQUMsR0FBQyxDQUFDLEVBQUVDLElBQUksR0FBQzRCLElBQUksQ0FBQzNCLE1BQU0sRUFBR0YsQ0FBQyxHQUFDQyxJQUFJLEVBQUdELENBQUMsRUFBRSxFQUMxQztVQUNDUyxXQUFXLENBQUVvQixJQUFJLENBQUM3QixDQUFDLENBQUMsRUFBRXVELGFBQWEsRUFBRUUsa0JBQW1CLENBQUM7UUFDMUQ7TUFDRDs7TUFFQTtNQUNBLEtBQU16RCxDQUFDLEdBQUMsQ0FBQyxFQUFFQyxJQUFJLEdBQUNvQixTQUFTLENBQUN3QyxNQUFNLENBQUMzRCxNQUFNLEVBQUdGLENBQUMsR0FBQ0MsSUFBSSxFQUFHRCxDQUFDLEVBQUUsRUFDdEQ7UUFDQyxJQUFLcUIsU0FBUyxDQUFDd0MsTUFBTSxDQUFDN0QsQ0FBQyxDQUFDLENBQUM4RCxHQUFHLEtBQUssSUFBSSxFQUNyQztVQUNDckQsV0FBVyxDQUFFWSxTQUFTLENBQUN3QyxNQUFNLENBQUM3RCxDQUFDLENBQUMsQ0FBQzhELEdBQUcsRUFBRVAsYUFBYSxFQUFFRSxrQkFBbUIsQ0FBQztRQUMxRTtNQUNEO0lBQ0Q7O0lBRUE7QUFDRDtBQUNBO0lBQ0M7SUFDQXRELGFBQWEsQ0FBRWtCLFNBQVMsQ0FBQ08sU0FBUyxFQUFFdkIsS0FBSyxFQUFFQyxHQUFJLENBQUM7O0lBRWhEO0lBQ0EsS0FBTU4sQ0FBQyxHQUFDLENBQUMsRUFBRUMsSUFBSSxHQUFDMEIsS0FBSyxFQUFHM0IsQ0FBQyxHQUFDQyxJQUFJLEVBQUdELENBQUMsRUFBRSxFQUFHO01BQ3RDcUIsU0FBUyxDQUFDRixJQUFJLENBQUM0QyxnQkFBZ0IsQ0FBRTFDLFNBQVMsRUFBRXJCLENBQUMsRUFBRSxDQUFDLENBQUUsQ0FBQztJQUNwRDs7SUFFQTtJQUNBRyxhQUFhLENBQUVrQixTQUFTLENBQUMyQyxlQUFlLEVBQUUzRCxLQUFLLEVBQUVDLEdBQUksQ0FBQzs7SUFFdEQ7SUFDQSxLQUFNTixDQUFDLEdBQUMsQ0FBQyxFQUFFQyxJQUFJLEdBQUNvQixTQUFTLENBQUN3QyxNQUFNLENBQUMzRCxNQUFNLEVBQUdGLENBQUMsR0FBQ0MsSUFBSSxFQUFHRCxDQUFDLEVBQUUsRUFDdEQ7TUFDQyxJQUFJaUUsSUFBSSxHQUFHNUMsU0FBUyxDQUFDd0MsTUFBTSxDQUFDN0QsQ0FBQyxDQUFDO01BQzlCLElBQUlrRSxLQUFLLEdBQUdELElBQUksQ0FBQ0UsT0FBTztNQUV4QixJQUFLRCxLQUFLLEVBQUc7UUFDWi9ELGFBQWEsQ0FBRStELEtBQUssRUFBRTdELEtBQUssRUFBRUMsR0FBSSxDQUFDOztRQUVsQztRQUNBO1FBQ0EsS0FBTWtCLENBQUMsR0FBQyxDQUFDLEVBQUVFLEdBQUcsR0FBQ3dDLEtBQUssQ0FBQ2hFLE1BQU0sRUFBR3NCLENBQUMsR0FBQ0UsR0FBRyxFQUFHRixDQUFDLEVBQUUsRUFBRztVQUMzQyxJQUFLMEMsS0FBSyxDQUFDMUMsQ0FBQyxDQUFDLElBQUkwQyxLQUFLLENBQUMxQyxDQUFDLENBQUMsQ0FBQzRDLGFBQWEsRUFBRztZQUN6Q0YsS0FBSyxDQUFDMUMsQ0FBQyxDQUFDLENBQUM0QyxhQUFhLENBQUNDLE1BQU0sR0FBRzdDLENBQUM7VUFDbEM7UUFDRDtNQUNEOztNQUVBO01BQ0E7TUFDQTtNQUNBLElBQUt5QyxJQUFJLENBQUNkLEdBQUcsS0FBSyxLQUFLLElBQUluRSxDQUFDLENBQUNzRixPQUFPLENBQUVMLElBQUksQ0FBQ00sTUFBTyxDQUFDLEVBQUc7UUFDckRwRSxhQUFhLENBQUU4RCxJQUFJLENBQUNNLE1BQU0sRUFBRWxFLEtBQUssRUFBRUMsR0FBSSxDQUFDO01BQ3pDO0lBQ0Q7O0lBRUE7SUFDQSxLQUFNTixDQUFDLEdBQUMsQ0FBQyxFQUFFQyxJQUFJLEdBQUNvQixTQUFTLENBQUNtRCxRQUFRLENBQUN0RSxNQUFNLEVBQUdGLENBQUMsR0FBQ0MsSUFBSSxFQUFHRCxDQUFDLEVBQUUsRUFDeEQ7TUFDQ0csYUFBYSxDQUFFa0IsU0FBUyxDQUFDbUQsUUFBUSxDQUFDeEUsQ0FBQyxDQUFDLEVBQUVLLEtBQUssRUFBRUMsR0FBSSxDQUFDO0lBQ25EO0lBRUEsSUFBS2UsU0FBUyxDQUFDb0QsUUFBUSxLQUFLLElBQUksRUFDaEM7TUFDQyxLQUFNekUsQ0FBQyxHQUFDLENBQUMsRUFBRUMsSUFBSSxHQUFDb0IsU0FBUyxDQUFDb0QsUUFBUSxDQUFDdkUsTUFBTSxFQUFHRixDQUFDLEdBQUNDLElBQUksRUFBR0QsQ0FBQyxFQUFFLEVBQ3hEO1FBQ0NHLGFBQWEsQ0FBRWtCLFNBQVMsQ0FBQ29ELFFBQVEsQ0FBQ3pFLENBQUMsQ0FBQyxFQUFFSyxLQUFLLEVBQUVDLEdBQUksQ0FBQztNQUNuRDtJQUNEO0lBRUEsSUFBS2lCLGNBQWMsSUFBSUEsY0FBYyxLQUFLNUIsU0FBUyxFQUNuRDtNQUNDWCxDQUFDLENBQUNPLEVBQUUsQ0FBQ0MsU0FBUyxDQUFDa0YsR0FBRyxDQUFFckQsU0FBVSxDQUFDLENBQUNzRCxJQUFJLENBQUMsQ0FBQyxDQUFDQyxVQUFVLENBQUMsQ0FBQztJQUNwRDs7SUFFQTtBQUNEO0FBQ0E7O0lBRUM7SUFDQSxLQUFNNUUsQ0FBQyxHQUFDLENBQUMsRUFBRUMsSUFBSSxHQUFDMEIsS0FBSyxFQUFHM0IsQ0FBQyxHQUFDQyxJQUFJLEVBQUdELENBQUMsRUFBRSxFQUNwQztNQUNDaEIsQ0FBQyxDQUFDcUMsU0FBUyxDQUFDTyxTQUFTLENBQUM1QixDQUFDLENBQUMsQ0FBQzZFLEdBQUcsQ0FBQyxDQUFDQyxHQUFHLENBQUMsVUFBVSxDQUFDO01BQzdDLElBQUksQ0FBQzNELElBQUksQ0FBQzRELHFCQUFxQixDQUFFMUQsU0FBUyxFQUFFQSxTQUFTLENBQUNPLFNBQVMsQ0FBQzVCLENBQUMsQ0FBQyxDQUFDNkUsR0FBRyxFQUFFN0UsQ0FBRSxDQUFDO0lBQzVFOztJQUdBO0lBQ0FoQixDQUFDLENBQUNxQyxTQUFTLENBQUMyRCxTQUFTLENBQUMsQ0FBQ0MsT0FBTyxDQUFFLG1CQUFtQixFQUFFLENBQUU1RCxTQUFTLEVBQUU7TUFDakU2RCxJQUFJLEVBQUU3RSxLQUFLO01BQ1g4RSxFQUFFLEVBQUU3RSxHQUFHO01BQ1A0QixPQUFPLEVBQUVTLGVBQWU7TUFDeEJyQixJQUFJLEVBQUVBLElBQUk7TUFFVjtNQUNBakIsS0FBSyxFQUFFQSxLQUFLO01BQ1pDLEdBQUcsRUFBRUEsR0FBRztNQUNScUMsZUFBZSxFQUFFQTtJQUNsQixDQUFDLENBQUcsQ0FBQztFQUNOLENBQUM7O0VBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7RUFDQSxJQUFJeUMsV0FBVSxHQUFHLFNBQWJBLFVBQVVBLENBQWFDLEVBQUUsRUFBRUMsSUFBSSxFQUNuQztJQUNDLElBQUlDLFFBQVEsR0FBRyxJQUFJdkcsQ0FBQyxDQUFDTyxFQUFFLENBQUNDLFNBQVMsQ0FBQ2tGLEdBQUcsQ0FBRVcsRUFBRyxDQUFDLENBQUNFLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDOztJQUV6RDtJQUNBLElBQUtBLFFBQVEsQ0FBQ0MsV0FBVyxFQUFHO01BQzNCLE9BQU9ELFFBQVEsQ0FBQ0MsV0FBVztJQUM1Qjs7SUFFQTtJQUNBLElBQUtGLElBQUksS0FBSyxJQUFJLEVBQUc7TUFDcEJBLElBQUksR0FBRyxDQUFDLENBQUM7SUFDVjs7SUFFQTtJQUNBLElBQUlHLGdCQUFnQixHQUFHekcsQ0FBQyxDQUFDTyxFQUFFLENBQUNDLFNBQVMsQ0FBQ2lHLGdCQUFnQjtJQUN0RCxJQUFLQSxnQkFBZ0IsRUFBRztNQUN2QkEsZ0JBQWdCLENBQUVMLFdBQVUsQ0FBQ00sUUFBUSxFQUFFTixXQUFVLENBQUNNLFFBQVEsRUFBRSxJQUFLLENBQUM7TUFDbEVELGdCQUFnQixDQUFFTCxXQUFVLENBQUNNLFFBQVEsRUFBRUosSUFBSSxJQUFJLENBQUMsQ0FBRSxDQUFDO0lBQ3BEOztJQUdBO0FBQ0Q7QUFDQTs7SUFFQztBQUNEO0FBQ0E7SUFDQyxJQUFJLENBQUNLLENBQUMsR0FBRztNQUNSO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtNQUNFLElBQUksRUFBRSxJQUFJO01BRVY7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO01BQ0UsTUFBTSxFQUFFM0csQ0FBQyxDQUFDNEcsTUFBTSxDQUFFLElBQUksRUFBRSxDQUFDLENBQUMsRUFBRVIsV0FBVSxDQUFDTSxRQUFRLEVBQUVKLElBQUssQ0FBQztNQUV2RDtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7TUFDRSxPQUFPLEVBQUUsQ0FBQztNQUVWO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtNQUNFLFlBQVksRUFBRSxDQUFDO01BRWY7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO01BQ0UsaUJBQWlCLEVBQUUsSUFBSTtNQUV2QjtBQUNGO0FBQ0E7TUFDRSxPQUFPLEVBQUU7UUFDUixRQUFRLEVBQUUsQ0FBQyxDQUFDO1FBQ1osUUFBUSxFQUFFLENBQUMsQ0FBQztRQUNaLFNBQVMsRUFBRSxDQUFDLENBQUM7UUFDYixTQUFTLEVBQUUsQ0FBQyxDQUFDO1FBQ2IsUUFBUSxFQUFFLENBQUMsQ0FBQztRQUNaLGFBQWEsRUFBRSxDQUFDLENBQUM7UUFDakIsV0FBVyxFQUFFLENBQUM7TUFDZixDQUFDO01BRUQ7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO01BQ0UsV0FBVyxFQUFFO0lBQ2QsQ0FBQzs7SUFHRDtBQUNEO0FBQ0E7SUFDQyxJQUFJLENBQUNPLEdBQUcsR0FBRztNQUNWO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtNQUNFLE1BQU0sRUFBRSxJQUFJO01BRVo7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO01BQ0UsU0FBUyxFQUFFO0lBQ1osQ0FBQzs7SUFHRDtJQUNBLElBQUksQ0FBQ0YsQ0FBQyxDQUFDTixFQUFFLEdBQUdFLFFBQVE7SUFDcEIsSUFBSSxDQUFDSSxDQUFDLENBQUNOLEVBQUUsQ0FBQ0csV0FBVyxHQUFHLElBQUk7SUFDNUIsSUFBSSxDQUFDTSxZQUFZLENBQUMsQ0FBQztJQUVuQixPQUFPLElBQUk7RUFDWixDQUFDO0VBSUQ5RyxDQUFDLENBQUM0RyxNQUFNLENBQUVSLFdBQVUsQ0FBQ1csU0FBUyxFQUFFO0lBQy9CO0FBQ0Q7QUFDQTs7SUFFQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0lBQ0MsU0FBUyxFQUFFLFNBQVhDLE9BQVNBLENBQUEsRUFDVDtNQUNDLElBQUksQ0FBQ0MsZUFBZSxDQUFFLElBQUksQ0FBQ0MsT0FBTyxDQUFDLENBQUUsQ0FBQztNQUV0QyxPQUFPLElBQUk7SUFDWixDQUFDO0lBRUQ7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0lBQ0MsbUJBQW1CLEVBQUUsU0FBckJDLGlCQUFtQkEsQ0FBQSxFQUNuQjtNQUNDLE9BQU8sSUFBSSxDQUFDRCxPQUFPLENBQUMsQ0FBQztJQUN0QixDQUFDO0lBRUQ7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQVZDLENBVUc7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtJQUNDLFNBQVMsRUFBRSxTQUFYQSxPQUFTQSxDQUFhRSxHQUFHLEVBQUVDLFFBQVEsRUFDbkM7TUFDQyxJQUFJbEUsQ0FBQyxHQUFHLEVBQUU7UUFBRW5DLENBQUM7UUFBRXNHLEdBQUc7UUFBRTlFLENBQUM7UUFBRUUsR0FBRztNQUMxQixJQUFJNkUsT0FBTyxHQUFHLElBQUksQ0FBQ1osQ0FBQyxDQUFDTixFQUFFLENBQUN6RCxTQUFTO01BRWpDLElBQUt3RSxHQUFHLEtBQUt6RyxTQUFTLEVBQUU7UUFDdkIsS0FBTUssQ0FBQyxHQUFDLENBQUMsRUFBRXNHLEdBQUcsR0FBQ0MsT0FBTyxDQUFDckcsTUFBTSxFQUFHRixDQUFDLEdBQUNzRyxHQUFHLEVBQUd0RyxDQUFDLEVBQUUsRUFBRztVQUM3Q21DLENBQUMsQ0FBQ3JCLElBQUksQ0FBRXlGLE9BQU8sQ0FBQ3ZHLENBQUMsQ0FBQyxDQUFDd0csb0JBQXFCLENBQUM7UUFDMUM7UUFFQSxPQUFPckUsQ0FBQztNQUNUOztNQUVBO01BQ0E7TUFDQTtNQUNBLElBQUtrRSxRQUFRLEVBQUc7UUFDZixJQUFJSSxLQUFLLEdBQUcsSUFBSSxDQUFDUCxPQUFPLENBQUMsQ0FBQztRQUUxQixLQUFNbEcsQ0FBQyxHQUFDLENBQUMsRUFBRXNHLEdBQUcsR0FBQ0YsR0FBRyxDQUFDbEcsTUFBTSxFQUFHRixDQUFDLEdBQUNzRyxHQUFHLEVBQUd0RyxDQUFDLEVBQUUsRUFBRztVQUN6Q21DLENBQUMsQ0FBQ3JCLElBQUksQ0FBRTlCLENBQUMsQ0FBQzBILE9BQU8sQ0FBRU4sR0FBRyxDQUFDcEcsQ0FBQyxDQUFDLEVBQUV5RyxLQUFNLENBQUUsQ0FBQztRQUNyQztRQUVBTCxHQUFHLEdBQUdqRSxDQUFDO01BQ1I7TUFFQSxJQUFJLENBQUM4RCxlQUFlLENBQUVwRyxpQkFBaUIsQ0FBRXVHLEdBQUksQ0FBRSxDQUFDO01BRWhELE9BQU8sSUFBSTtJQUNaLENBQUM7SUFHRDtBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0lBQ0NPLFdBQVcsRUFBRSxTQUFiQSxXQUFXQSxDQUFhNUQsR0FBRyxFQUFFNkQsR0FBRyxFQUNoQztNQUNDLElBQUssQ0FBRUEsR0FBRyxFQUFHO1FBQ1pBLEdBQUcsR0FBRyxXQUFXO01BQ2xCO01BRUEsSUFBSUgsS0FBSyxHQUFHLElBQUksQ0FBQ1AsT0FBTyxDQUFDLENBQUM7TUFDMUIsSUFBSUssT0FBTyxHQUFHLElBQUksQ0FBQ1osQ0FBQyxDQUFDTixFQUFFLENBQUN6RCxTQUFTO01BRWpDLElBQUtnRixHQUFHLEtBQUssV0FBVyxFQUFHO1FBQzFCO1FBQ0EsT0FBTyxDQUFFNUgsQ0FBQyxDQUFDc0YsT0FBTyxDQUFFdkIsR0FBSSxDQUFDLEdBQ3hCL0QsQ0FBQyxDQUFDMEgsT0FBTyxDQUFFM0QsR0FBRyxFQUFFMEQsS0FBTSxDQUFDLEdBQ3ZCekgsQ0FBQyxDQUFDNkgsR0FBRyxDQUFFOUQsR0FBRyxFQUFFLFVBQVcrRCxLQUFLLEVBQUc7VUFDOUIsT0FBTzlILENBQUMsQ0FBQzBILE9BQU8sQ0FBRUksS0FBSyxFQUFFTCxLQUFNLENBQUM7UUFDakMsQ0FBRSxDQUFDO01BQ0wsQ0FBQyxNQUNJO1FBQ0o7UUFDQSxPQUFPLENBQUV6SCxDQUFDLENBQUNzRixPQUFPLENBQUV2QixHQUFJLENBQUMsR0FDeEJ3RCxPQUFPLENBQUN4RCxHQUFHLENBQUMsQ0FBQ3lELG9CQUFvQixHQUNqQ3hILENBQUMsQ0FBQzZILEdBQUcsQ0FBRTlELEdBQUcsRUFBRSxVQUFXK0QsS0FBSyxFQUFHO1VBQzlCLE9BQU9QLE9BQU8sQ0FBQ08sS0FBSyxDQUFDLENBQUNOLG9CQUFvQjtRQUMzQyxDQUFFLENBQUM7TUFDTDtJQUNELENBQUM7SUFHRDtBQUNEO0FBQ0E7O0lBRUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0lBQ0MsY0FBYyxFQUFFLFNBQWhCVixZQUFjQSxDQUFBLEVBQ2Q7TUFDQyxJQUFJaUIsSUFBSSxHQUFHLElBQUk7TUFDZixJQUFJOUcsSUFBSSxHQUFHLElBQUksQ0FBQzBGLENBQUMsQ0FBQ04sRUFBRSxDQUFDekQsU0FBUyxDQUFDMUIsTUFBTTtNQUNyQyxJQUFJOEcsS0FBSyxHQUFHLElBQUksQ0FBQ3JCLENBQUMsQ0FBQ04sRUFBRSxDQUFDNEIsTUFBTTtNQUM1QixJQUFJakgsQ0FBQzs7TUFFTDtNQUNBLElBQUssSUFBSSxDQUFDMkYsQ0FBQyxDQUFDdUIsSUFBSSxDQUFDQyxhQUFhLEVBQzlCO1FBQ0MsSUFBSSxDQUFDeEIsQ0FBQyxDQUFDeUIsS0FBSyxHQUFHLElBQUksQ0FBQ3pCLENBQUMsQ0FBQ3VCLElBQUksQ0FBQ0MsYUFBYTtNQUN6QztNQUVBLElBQUssSUFBSSxDQUFDeEIsQ0FBQyxDQUFDdUIsSUFBSSxDQUFDRyxpQkFBaUIsRUFDbEM7UUFDQyxJQUFJLENBQUMxQixDQUFDLENBQUN5QixLQUFLLEdBQUcsSUFBSSxDQUFDekIsQ0FBQyxDQUFDdUIsSUFBSSxDQUFDRyxpQkFBaUI7TUFDN0M7O01BRUE7TUFDQSxJQUFJLENBQUMxQixDQUFDLENBQUMyQixVQUFVLEdBQUcsSUFBSSxDQUFDM0IsQ0FBQyxDQUFDdUIsSUFBSSxDQUFDSyxrQkFBa0IsR0FDakQsSUFBSSxDQUFDNUIsQ0FBQyxDQUFDdUIsSUFBSSxDQUFDSyxrQkFBa0IsR0FDOUIsQ0FBQzs7TUFFRjtNQUNBLElBQUssSUFBSSxDQUFDNUIsQ0FBQyxDQUFDdUIsSUFBSSxDQUFDTSxpQkFBaUIsRUFDbEM7UUFDQyxJQUFJLENBQUM3QixDQUFDLENBQUM4QixlQUFlLEdBQUcsSUFBSSxDQUFDOUIsQ0FBQyxDQUFDdUIsSUFBSSxDQUFDTSxpQkFBaUI7TUFDdkQ7O01BRUE7TUFDQSxLQUFNeEgsQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFHQyxJQUFJLEVBQUVELENBQUMsRUFBRSxFQUMxQjtRQUNDLElBQUtBLENBQUMsR0FBRyxJQUFJLENBQUMyRixDQUFDLENBQUN5QixLQUFLLEdBQUMsQ0FBQyxJQUFJcEgsQ0FBQyxHQUFHQyxJQUFJLEdBQUcsSUFBSSxDQUFDMEYsQ0FBQyxDQUFDMkIsVUFBVSxFQUN2RDtVQUNDLElBQUksQ0FBQ0ksZ0JBQWdCLENBQUUxSCxDQUFDLEVBQUUsSUFBSSxDQUFDMkYsQ0FBQyxDQUFDTixFQUFFLENBQUN6RCxTQUFTLENBQUM1QixDQUFDLENBQUMsQ0FBQzZFLEdBQUksQ0FBQztRQUN2RDs7UUFFQTtRQUNBLElBQUksQ0FBQ2MsQ0FBQyxDQUFDTixFQUFFLENBQUN6RCxTQUFTLENBQUM1QixDQUFDLENBQUMsQ0FBQ3dHLG9CQUFvQixHQUFHeEcsQ0FBQztNQUNoRDs7TUFFQTtNQUNBLElBQUksQ0FBQzJGLENBQUMsQ0FBQ04sRUFBRSxDQUFDbEUsSUFBSSxDQUFDd0csY0FBYyxDQUFFLElBQUksQ0FBQ2hDLENBQUMsQ0FBQ04sRUFBRSxFQUFFLG1CQUFtQixFQUFFLFVBQVV1QyxFQUFFLEVBQUVDLEtBQUssRUFBRTtRQUNuRmQsSUFBSSxDQUFDZSxZQUFZLENBQUNDLElBQUksQ0FBRWhCLElBQUksRUFBRWMsS0FBTSxDQUFDO01BQ3RDLENBQUMsRUFBRSxrQkFBbUIsQ0FBQzs7TUFFdkI7TUFDQSxJQUFJRyxPQUFPLEdBQUcsSUFBSTtNQUNsQixJQUFLLElBQUksQ0FBQ3JDLENBQUMsQ0FBQ3VCLElBQUksQ0FBQ2MsT0FBTyxFQUN4QjtRQUNDQSxPQUFPLEdBQUcsSUFBSSxDQUFDckMsQ0FBQyxDQUFDdUIsSUFBSSxDQUFDYyxPQUFPLENBQUNDLEtBQUssQ0FBQyxDQUFDO01BQ3RDOztNQUVBO01BQ0EsSUFBSyxJQUFJLENBQUN0QyxDQUFDLENBQUNOLEVBQUUsQ0FBQzZDLFlBQVksSUFBSSxPQUFPLElBQUksQ0FBQ3ZDLENBQUMsQ0FBQ04sRUFBRSxDQUFDNkMsWUFBWSxDQUFDOUMsVUFBVSxJQUFJLFdBQVcsSUFDcEYsSUFBSSxDQUFDTyxDQUFDLENBQUNOLEVBQUUsQ0FBQzZDLFlBQVksQ0FBQzlDLFVBQVUsQ0FBQ2xGLE1BQU0sSUFBSSxJQUFJLENBQUN5RixDQUFDLENBQUNOLEVBQUUsQ0FBQ3pELFNBQVMsQ0FBQzFCLE1BQU0sRUFDeEU7UUFDQzhILE9BQU8sR0FBRyxJQUFJLENBQUNyQyxDQUFDLENBQUNOLEVBQUUsQ0FBQzZDLFlBQVksQ0FBQzlDLFVBQVU7TUFDNUM7O01BRUE7TUFDQSxJQUFLNEMsT0FBTyxFQUNaO1FBQ0M7QUFDSDtBQUNBO1FBQ0csSUFBSyxDQUFDakIsSUFBSSxDQUFDcEIsQ0FBQyxDQUFDTixFQUFFLENBQUM4QyxjQUFjLEVBQzlCO1VBQ0MsSUFBSUMsS0FBSyxHQUFHLEtBQUs7VUFDakJwSixDQUFDLENBQUNnSSxLQUFLLENBQUMsQ0FBQ3FCLEVBQUUsQ0FBRSxvQkFBb0IsRUFBRSxZQUFZO1lBQzlDLElBQUssQ0FBQ3RCLElBQUksQ0FBQ3BCLENBQUMsQ0FBQ04sRUFBRSxDQUFDOEMsY0FBYyxJQUFJLENBQUNDLEtBQUssRUFDeEM7Y0FDQ0EsS0FBSyxHQUFHLElBQUk7Y0FDWixJQUFJRSxNQUFNLEdBQUd6SSxpQkFBaUIsQ0FBRW1JLE9BQVEsQ0FBQztjQUN6Q2pCLElBQUksQ0FBQ2QsZUFBZSxDQUFDOEIsSUFBSSxDQUFFaEIsSUFBSSxFQUFFdUIsTUFBTyxDQUFDO1lBQzFDO1VBQ0QsQ0FBRSxDQUFDO1FBQ0osQ0FBQyxNQUVEO1VBQ0MsSUFBSUEsTUFBTSxHQUFHekksaUJBQWlCLENBQUVtSSxPQUFRLENBQUM7VUFDekNqQixJQUFJLENBQUNkLGVBQWUsQ0FBQzhCLElBQUksQ0FBRWhCLElBQUksRUFBRXVCLE1BQU8sQ0FBQztRQUMxQztNQUNELENBQUMsTUFDSTtRQUNKLElBQUksQ0FBQ0MsbUJBQW1CLENBQUMsQ0FBQztNQUMzQjs7TUFFQTtNQUNBdkosQ0FBQyxDQUFDZ0ksS0FBSyxDQUFDLENBQUNxQixFQUFFLENBQUUsdUJBQXVCLEVBQUUsWUFBWTtRQUNqRHJKLENBQUMsQ0FBQ2dJLEtBQUssQ0FBQyxDQUFDbEMsR0FBRyxDQUFFLDBDQUEyQyxDQUFDO1FBQzFEOUYsQ0FBQyxDQUFDK0gsSUFBSSxDQUFDcEIsQ0FBQyxDQUFDTixFQUFFLENBQUMzQixNQUFNLENBQUMsQ0FBQzhFLElBQUksQ0FBRSxHQUFJLENBQUMsQ0FBQzFELEdBQUcsQ0FBRSxhQUFjLENBQUM7UUFFcEQ5RixDQUFDLENBQUNnRSxJQUFJLENBQUUrRCxJQUFJLENBQUNwQixDQUFDLENBQUNOLEVBQUUsQ0FBQ3pELFNBQVMsRUFBRSxVQUFVNUIsQ0FBQyxFQUFFcUUsTUFBTSxFQUFFO1VBQ2pEckYsQ0FBQyxDQUFDcUYsTUFBTSxDQUFDUSxHQUFHLENBQUMsQ0FBQzRELFVBQVUsQ0FBQyxtQkFBbUIsQ0FBQztRQUM5QyxDQUFFLENBQUM7UUFFSDFCLElBQUksQ0FBQ3BCLENBQUMsQ0FBQ04sRUFBRSxDQUFDRyxXQUFXLEdBQUcsSUFBSTtRQUM1QnVCLElBQUksQ0FBQ3BCLENBQUMsR0FBRyxJQUFJO01BQ2QsQ0FBRSxDQUFDO0lBQ0osQ0FBQztJQUdEO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0lBQ0MsaUJBQWlCLEVBQUUsU0FBbkJNLGVBQWlCQSxDQUFhOUQsQ0FBQyxFQUMvQjtNQUNDLElBQUl1RyxPQUFPLEdBQUcsS0FBSztNQUVuQixJQUFLdkcsQ0FBQyxDQUFDakMsTUFBTSxJQUFJLElBQUksQ0FBQ3lGLENBQUMsQ0FBQ04sRUFBRSxDQUFDekQsU0FBUyxDQUFDMUIsTUFBTSxFQUMzQztRQUNDLElBQUksQ0FBQ3lGLENBQUMsQ0FBQ04sRUFBRSxDQUFDTCxTQUFTLENBQUM3RCxJQUFJLENBQUNzQixNQUFNLENBQUUsSUFBSSxDQUFDa0QsQ0FBQyxDQUFDTixFQUFFLEVBQUUsQ0FBQyxFQUFFLHNDQUFzQyxHQUNwRiwwQ0FBMkMsQ0FBQztRQUM3QztNQUNEO01BRUEsS0FBTSxJQUFJckYsQ0FBQyxHQUFDLENBQUMsRUFBRUMsSUFBSSxHQUFDa0MsQ0FBQyxDQUFDakMsTUFBTSxFQUFHRixDQUFDLEdBQUNDLElBQUksRUFBR0QsQ0FBQyxFQUFFLEVBQzNDO1FBQ0MsSUFBSTJJLFNBQVMsR0FBRzNKLENBQUMsQ0FBQzBILE9BQU8sQ0FBRTFHLENBQUMsRUFBRW1DLENBQUUsQ0FBQztRQUNqQyxJQUFLbkMsQ0FBQyxJQUFJMkksU0FBUyxFQUNuQjtVQUNDO1VBQ0F4SSxhQUFhLENBQUVnQyxDQUFDLEVBQUV3RyxTQUFTLEVBQUUzSSxDQUFFLENBQUM7O1VBRWhDO1VBQ0EsSUFBSSxDQUFDMkYsQ0FBQyxDQUFDTixFQUFFLENBQUNMLFNBQVMsQ0FBQzVELFlBQVksQ0FBRXVILFNBQVMsRUFBRTNJLENBQUMsRUFBRSxJQUFJLEVBQUUsS0FBTSxDQUFDO1VBRTdEMEksT0FBTyxHQUFHLElBQUk7UUFDZjtNQUNEO01BRUExSixDQUFDLENBQUNPLEVBQUUsQ0FBQ0MsU0FBUyxDQUFDa0YsR0FBRyxDQUFFLElBQUksQ0FBQ2lCLENBQUMsQ0FBQ04sRUFBRyxDQUFDLENBQUNWLElBQUksQ0FBQyxDQUFDLENBQUNDLFVBQVUsQ0FBQyxDQUFDO01BRW5ELElBQUksQ0FBQzJELG1CQUFtQixDQUFDLENBQUM7O01BRTFCO01BQ0EsSUFBSyxDQUFFRyxPQUFPLEVBQUc7UUFDaEI7TUFDRDs7TUFFQTtNQUNBLElBQUssSUFBSSxDQUFDL0MsQ0FBQyxDQUFDTixFQUFFLENBQUN1RCxPQUFPLENBQUNDLEVBQUUsS0FBSyxFQUFFLElBQUksSUFBSSxDQUFDbEQsQ0FBQyxDQUFDTixFQUFFLENBQUN1RCxPQUFPLENBQUNFLEVBQUUsS0FBSyxFQUFFLEVBQy9EO1FBQ0MsSUFBSSxDQUFDbkQsQ0FBQyxDQUFDTixFQUFFLENBQUNMLFNBQVMsQ0FBQytELG9CQUFvQixDQUFFLEtBQU0sQ0FBQztNQUNsRDs7TUFFQTtNQUNBLElBQUksQ0FBQ3BELENBQUMsQ0FBQ04sRUFBRSxDQUFDTCxTQUFTLENBQUM3RCxJQUFJLENBQUM2SCxZQUFZLENBQUUsSUFBSSxDQUFDckQsQ0FBQyxDQUFDTixFQUFHLENBQUM7TUFFbEQsSUFBSyxJQUFJLENBQUNNLENBQUMsQ0FBQzhCLGVBQWUsS0FBSyxJQUFJLEVBQ3BDO1FBQ0MsSUFBSSxDQUFDOUIsQ0FBQyxDQUFDOEIsZUFBZSxDQUFDTSxJQUFJLENBQUUsSUFBSyxDQUFDO01BQ3BDO0lBQ0QsQ0FBQztJQUdEO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtJQUNDLGNBQWMsRUFBRSxTQUFoQkQsWUFBY0EsQ0FBYW1CLE1BQU0sRUFDakM7TUFDQyxJQUFJakosQ0FBQyxFQUFFQyxJQUFJLEVBQUVpSixLQUFLLEVBQUVDLFdBQVc7TUFDL0IsSUFBSTlILFNBQVMsR0FBRyxJQUFJLENBQUNzRSxDQUFDLENBQUNOLEVBQUU7TUFDekIsSUFBSWtCLE9BQU8sR0FBR2xGLFNBQVMsQ0FBQ08sU0FBUztNQUVqQ3FILE1BQU0sQ0FBQzdELFVBQVUsR0FBRyxFQUFFOztNQUV0QjtNQUNBLElBQUs2RCxNQUFNLENBQUNyRyxTQUFTLEVBQUc7UUFDdkI7UUFDQSxLQUFNNUMsQ0FBQyxHQUFDLENBQUMsRUFBR0EsQ0FBQyxHQUFDaUosTUFBTSxDQUFDckcsU0FBUyxDQUFDMUMsTUFBTSxFQUFHRixDQUFDLEVBQUUsRUFBRztVQUM3Q2lKLE1BQU0sQ0FBQ3JHLFNBQVMsQ0FBQzVDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHdUcsT0FBTyxDQUFFMEMsTUFBTSxDQUFDckcsU0FBUyxDQUFDNUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUUsQ0FBQ3dHLG9CQUFvQjtRQUNoRjtRQUVBLElBQUk0QyxXQUFXLEdBQUdwSyxDQUFDLENBQUM0RyxNQUFNLENBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRXFELE1BQU0sQ0FBQ0ksWUFBYSxDQUFDO1FBRTNELEtBQU1ySixDQUFDLEdBQUMsQ0FBQyxFQUFFQyxJQUFJLEdBQUNzRyxPQUFPLENBQUNyRyxNQUFNLEVBQUdGLENBQUMsR0FBQ0MsSUFBSSxFQUFHRCxDQUFDLEVBQUUsRUFDN0M7VUFDQ21KLFdBQVcsR0FBRzVDLE9BQU8sQ0FBQ3ZHLENBQUMsQ0FBQyxDQUFDd0csb0JBQW9COztVQUU3QztVQUNBeUMsTUFBTSxDQUFDSSxZQUFZLENBQUVGLFdBQVcsQ0FBRSxHQUFHQyxXQUFXLENBQUNwSixDQUFDLENBQUM7O1VBRW5EO1VBQ0FpSixNQUFNLENBQUNLLFNBQVMsQ0FBRUgsV0FBVyxDQUFFLEdBQUc1QyxPQUFPLENBQUN2RyxDQUFDLENBQUMsQ0FBQ3NELFFBQVE7O1VBRXJEO1VBQ0EyRixNQUFNLENBQUM3RCxVQUFVLENBQUN0RSxJQUFJLENBQUVxSSxXQUFZLENBQUM7UUFDdEM7TUFDRCxDQUFDLE1BQ0ksSUFBS0YsTUFBTSxDQUFDeEMsS0FBSyxFQUFHO1FBQ3hCO1FBQ0EsS0FBTXpHLENBQUMsR0FBQyxDQUFDLEVBQUdBLENBQUMsR0FBQ2lKLE1BQU0sQ0FBQ3hDLEtBQUssQ0FBQ3ZHLE1BQU0sRUFBR0YsQ0FBQyxFQUFFLEVBQUc7VUFDekNpSixNQUFNLENBQUN4QyxLQUFLLENBQUN6RyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBR3VHLE9BQU8sQ0FBRTBDLE1BQU0sQ0FBQ3hDLEtBQUssQ0FBQ3pHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFFLENBQUN3RyxvQkFBb0I7UUFDeEU7UUFFQSxJQUFJK0MsZ0JBQWdCLEdBQUd2SyxDQUFDLENBQUM0RyxNQUFNLENBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRXFELE1BQU0sQ0FBQzFDLE9BQVEsQ0FBQztRQUUzRCxLQUFNdkcsQ0FBQyxHQUFDLENBQUMsRUFBRUMsSUFBSSxHQUFDc0csT0FBTyxDQUFDckcsTUFBTSxFQUFHRixDQUFDLEdBQUNDLElBQUksRUFBR0QsQ0FBQyxFQUFFLEVBQzdDO1VBQ0NtSixXQUFXLEdBQUc1QyxPQUFPLENBQUN2RyxDQUFDLENBQUMsQ0FBQ3dHLG9CQUFvQjs7VUFFN0M7VUFDQXlDLE1BQU0sQ0FBQzFDLE9BQU8sQ0FBRTRDLFdBQVcsQ0FBRSxHQUFHSSxnQkFBZ0IsQ0FBQ3ZKLENBQUMsQ0FBQzs7VUFFbkQ7VUFDQWlKLE1BQU0sQ0FBQzdELFVBQVUsQ0FBQ3RFLElBQUksQ0FBRXFJLFdBQVksQ0FBQztRQUN0QztNQUNEO0lBQ0QsQ0FBQztJQUdEO0FBQ0Q7QUFDQTs7SUFFQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0lBQ0Msa0JBQWtCLEVBQUUsU0FBcEJ6QixnQkFBa0JBLENBQWExSCxDQUFDLEVBQUU2RSxHQUFHLEVBQ3JDO01BQ0MsSUFBSWtDLElBQUksR0FBRyxJQUFJO01BQ2YvSCxDQUFDLENBQUM2RixHQUFHLENBQUMsQ0FDSndELEVBQUUsQ0FBRSxzQkFBc0IsRUFBRSxVQUFVbUIsQ0FBQyxFQUFFO1FBQ3pDekMsSUFBSSxDQUFDMEMsWUFBWSxDQUFDMUIsSUFBSSxDQUFFaEIsSUFBSSxFQUFFeUMsQ0FBQyxFQUFFM0UsR0FBSSxDQUFDO01BQ3ZDLENBQUUsQ0FBQyxDQUNGd0QsRUFBRSxDQUFFLHVCQUF1QixFQUFFLFVBQVVtQixDQUFDLEVBQUU7UUFDMUN6QyxJQUFJLENBQUMwQyxZQUFZLENBQUMxQixJQUFJLENBQUVoQixJQUFJLEVBQUV5QyxDQUFDLEVBQUUzRSxHQUFJLENBQUM7TUFDdkMsQ0FBRSxDQUFDO0lBQ0wsQ0FBQztJQUdEO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7SUFDQyxjQUFjLEVBQUUsU0FBaEI0RSxZQUFjQSxDQUFhRCxDQUFDLEVBQUUzRSxHQUFHLEVBQ2pDO01BQ0MsSUFBSWtDLElBQUksR0FBRyxJQUFJOztNQUVmO01BQ0EsSUFBSTJDLE1BQU0sR0FBRzFLLENBQUMsQ0FBQ3dLLENBQUMsQ0FBQ0UsTUFBTSxDQUFDLENBQUNDLE9BQU8sQ0FBQyxRQUFRLENBQUM7TUFDMUMsSUFBSUMsTUFBTSxHQUFHRixNQUFNLENBQUNFLE1BQU0sQ0FBQyxDQUFDO01BQzVCLElBQUk3RyxHQUFHLEdBQUc4RyxRQUFRLENBQUU3SyxDQUFDLENBQUM2RixHQUFHLENBQUMsQ0FBQ2lGLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxFQUFFLEVBQUcsQ0FBQztNQUUxRCxJQUFLL0csR0FBRyxLQUFLcEQsU0FBUyxFQUFHO1FBQ3hCO01BQ0Q7TUFFQSxJQUFJLENBQUNnRyxDQUFDLENBQUNvRSxLQUFLLENBQUNDLE1BQU0sR0FBRyxJQUFJLENBQUNDLGlCQUFpQixDQUFFVCxDQUFDLEVBQUUsT0FBUSxDQUFDO01BQzFELElBQUksQ0FBQzdELENBQUMsQ0FBQ29FLEtBQUssQ0FBQ0csTUFBTSxHQUFHLElBQUksQ0FBQ0QsaUJBQWlCLENBQUVULENBQUMsRUFBRSxPQUFRLENBQUM7TUFDMUQsSUFBSSxDQUFDN0QsQ0FBQyxDQUFDb0UsS0FBSyxDQUFDSSxPQUFPLEdBQUcsSUFBSSxDQUFDRixpQkFBaUIsQ0FBRVQsQ0FBQyxFQUFFLE9BQVEsQ0FBQyxHQUFHSSxNQUFNLENBQUNRLElBQUk7TUFDekUsSUFBSSxDQUFDekUsQ0FBQyxDQUFDb0UsS0FBSyxDQUFDTSxPQUFPLEdBQUcsSUFBSSxDQUFDSixpQkFBaUIsQ0FBRVQsQ0FBQyxFQUFFLE9BQVEsQ0FBQyxHQUFHSSxNQUFNLENBQUNVLEdBQUc7TUFDeEUsSUFBSSxDQUFDM0UsQ0FBQyxDQUFDb0UsS0FBSyxDQUFDTCxNQUFNLEdBQUcsSUFBSSxDQUFDL0QsQ0FBQyxDQUFDTixFQUFFLENBQUN6RCxTQUFTLENBQUVtQixHQUFHLENBQUUsQ0FBQzhCLEdBQUcsQ0FBQztNQUNyRCxJQUFJLENBQUNjLENBQUMsQ0FBQ29FLEtBQUssQ0FBQ1EsV0FBVyxHQUFHeEgsR0FBRztNQUM5QixJQUFJLENBQUM0QyxDQUFDLENBQUNvRSxLQUFLLENBQUNTLFNBQVMsR0FBR3pILEdBQUc7TUFFNUIsSUFBSSxDQUFDMEgsVUFBVSxDQUFDLENBQUM7O01BRWpCO01BQ0F6TCxDQUFDLENBQUNFLFFBQVEsQ0FBQyxDQUNUbUosRUFBRSxDQUFFLDJDQUEyQyxFQUFFLFVBQVVtQixDQUFDLEVBQUU7UUFDOUR6QyxJQUFJLENBQUMyRCxZQUFZLENBQUMzQyxJQUFJLENBQUVoQixJQUFJLEVBQUV5QyxDQUFFLENBQUM7TUFDbEMsQ0FBRSxDQUFDLENBQ0ZuQixFQUFFLENBQUUsd0NBQXdDLEVBQUUsVUFBVW1CLENBQUMsRUFBRTtRQUMzRHpDLElBQUksQ0FBQzRELFVBQVUsQ0FBQzVDLElBQUksQ0FBRWhCLElBQUksRUFBRXlDLENBQUUsQ0FBQztNQUNoQyxDQUFFLENBQUM7SUFDTCxDQUFDO0lBR0Q7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7SUFDQyxjQUFjLEVBQUUsU0FBaEJrQixZQUFjQSxDQUFhbEIsQ0FBQyxFQUM1QjtNQUNDLElBQUl6QyxJQUFJLEdBQUcsSUFBSTtNQUVmLElBQUssSUFBSSxDQUFDbEIsR0FBRyxDQUFDK0UsSUFBSSxLQUFLLElBQUksRUFDM0I7UUFDQztBQUNIO0FBQ0E7QUFDQTtRQUNHLElBQUtDLElBQUksQ0FBQ0MsR0FBRyxDQUNaRCxJQUFJLENBQUNDLEdBQUcsQ0FBQyxJQUFJLENBQUNiLGlCQUFpQixDQUFFVCxDQUFDLEVBQUUsT0FBTyxDQUFDLEdBQUcsSUFBSSxDQUFDN0QsQ0FBQyxDQUFDb0UsS0FBSyxDQUFDQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLEdBQ3RFYSxJQUFJLENBQUNDLEdBQUcsQ0FBQyxJQUFJLENBQUNiLGlCQUFpQixDQUFFVCxDQUFDLEVBQUUsT0FBTyxDQUFDLEdBQUcsSUFBSSxDQUFDN0QsQ0FBQyxDQUFDb0UsS0FBSyxDQUFDRyxNQUFNLEVBQUUsQ0FBQyxDQUFDLEVBQUUsR0FBSSxDQUFDLEdBQUcsQ0FBQyxFQUNsRjtVQUNDO1FBQ0Q7UUFDQSxJQUFJLENBQUNhLGlCQUFpQixDQUFDLENBQUM7TUFDekI7O01BRUE7TUFDQSxJQUFJLENBQUNsRixHQUFHLENBQUMrRSxJQUFJLENBQUNJLEdBQUcsQ0FBRTtRQUNsQlosSUFBSSxFQUFFLElBQUksQ0FBQ0gsaUJBQWlCLENBQUVULENBQUMsRUFBRSxPQUFRLENBQUMsR0FBRyxJQUFJLENBQUM3RCxDQUFDLENBQUNvRSxLQUFLLENBQUNJLE9BQU87UUFDakVHLEdBQUcsRUFBRSxJQUFJLENBQUNMLGlCQUFpQixDQUFFVCxDQUFDLEVBQUUsT0FBUSxDQUFDLEdBQUcsSUFBSSxDQUFDN0QsQ0FBQyxDQUFDb0UsS0FBSyxDQUFDTTtNQUMxRCxDQUFFLENBQUM7O01BRUg7TUFDQSxJQUFJWSxJQUFJLEdBQUcsS0FBSztNQUNoQixJQUFJQyxXQUFXLEdBQUcsSUFBSSxDQUFDdkYsQ0FBQyxDQUFDb0UsS0FBSyxDQUFDb0IsT0FBTztNQUV0QyxLQUFNLElBQUluTCxDQUFDLEdBQUMsQ0FBQyxFQUFFQyxJQUFJLEdBQUMsSUFBSSxDQUFDMEYsQ0FBQyxDQUFDeUYsU0FBUyxDQUFDbEwsTUFBTSxFQUFHRixDQUFDLEdBQUNDLElBQUksRUFBR0QsQ0FBQyxFQUFFLEVBQzFEO1FBQ0MsSUFBSyxJQUFJLENBQUNpSyxpQkFBaUIsQ0FBQ1QsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxHQUFHLElBQUksQ0FBQzdELENBQUMsQ0FBQ3lGLFNBQVMsQ0FBQ3BMLENBQUMsR0FBQyxDQUFDLENBQUMsQ0FBQ3FMLENBQUMsR0FBSSxDQUFDLElBQUksQ0FBQzFGLENBQUMsQ0FBQ3lGLFNBQVMsQ0FBQ3BMLENBQUMsQ0FBQyxDQUFDcUwsQ0FBQyxHQUFDLElBQUksQ0FBQzFGLENBQUMsQ0FBQ3lGLFNBQVMsQ0FBQ3BMLENBQUMsR0FBQyxDQUFDLENBQUMsQ0FBQ3FMLENBQUMsSUFBRSxDQUFFLEVBQ3ZIO1VBQ0MsSUFBSSxDQUFDeEYsR0FBRyxDQUFDeUYsT0FBTyxDQUFDTixHQUFHLENBQUUsTUFBTSxFQUFFLElBQUksQ0FBQ3JGLENBQUMsQ0FBQ3lGLFNBQVMsQ0FBQ3BMLENBQUMsR0FBQyxDQUFDLENBQUMsQ0FBQ3FMLENBQUUsQ0FBQztVQUN2RCxJQUFJLENBQUMxRixDQUFDLENBQUNvRSxLQUFLLENBQUNvQixPQUFPLEdBQUcsSUFBSSxDQUFDeEYsQ0FBQyxDQUFDeUYsU0FBUyxDQUFDcEwsQ0FBQyxHQUFDLENBQUMsQ0FBQyxDQUFDbUYsRUFBRTtVQUMvQzhGLElBQUksR0FBRyxJQUFJO1VBQ1g7UUFDRDtNQUNEOztNQUVBO01BQ0E7TUFDQSxJQUFLLENBQUNBLElBQUksRUFDVjtRQUNDLElBQUksQ0FBQ3BGLEdBQUcsQ0FBQ3lGLE9BQU8sQ0FBQ04sR0FBRyxDQUFFLE1BQU0sRUFBRSxJQUFJLENBQUNyRixDQUFDLENBQUN5RixTQUFTLENBQUMsSUFBSSxDQUFDekYsQ0FBQyxDQUFDeUYsU0FBUyxDQUFDbEwsTUFBTSxHQUFDLENBQUMsQ0FBQyxDQUFDbUwsQ0FBRSxDQUFDO1FBQzdFLElBQUksQ0FBQzFGLENBQUMsQ0FBQ29FLEtBQUssQ0FBQ29CLE9BQU8sR0FBRyxJQUFJLENBQUN4RixDQUFDLENBQUN5RixTQUFTLENBQUMsSUFBSSxDQUFDekYsQ0FBQyxDQUFDeUYsU0FBUyxDQUFDbEwsTUFBTSxHQUFDLENBQUMsQ0FBQyxDQUFDaUYsRUFBRTtNQUN0RTs7TUFFQTtNQUNBLElBQUssSUFBSSxDQUFDUSxDQUFDLENBQUN1QixJQUFJLENBQUNxRSxTQUFTLElBQUlMLFdBQVcsS0FBSyxJQUFJLENBQUN2RixDQUFDLENBQUNvRSxLQUFLLENBQUNvQixPQUFPLEVBQUc7UUFDcEUsSUFBSSxDQUFDeEYsQ0FBQyxDQUFDTixFQUFFLENBQUNMLFNBQVMsQ0FBQzVELFlBQVksQ0FBRSxJQUFJLENBQUN1RSxDQUFDLENBQUNvRSxLQUFLLENBQUNTLFNBQVMsRUFBRSxJQUFJLENBQUM3RSxDQUFDLENBQUNvRSxLQUFLLENBQUNvQixPQUFPLEVBQUUsS0FBTSxDQUFDO1FBQ3ZGLElBQUksQ0FBQ3hGLENBQUMsQ0FBQ29FLEtBQUssQ0FBQ1MsU0FBUyxHQUFHLElBQUksQ0FBQzdFLENBQUMsQ0FBQ29FLEtBQUssQ0FBQ29CLE9BQU87UUFDN0MsSUFBSSxDQUFDVixVQUFVLENBQUMsQ0FBQztNQUNsQjtJQUNELENBQUM7SUFHRDtBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtJQUNDLFlBQVksRUFBRSxTQUFkRSxVQUFZQSxDQUFhbkIsQ0FBQyxFQUMxQjtNQUNDLElBQUl6QyxJQUFJLEdBQUcsSUFBSTtNQUVmL0gsQ0FBQyxDQUFDRSxRQUFRLENBQUMsQ0FBQzRGLEdBQUcsQ0FBRSxhQUFjLENBQUM7TUFFaEMsSUFBSyxJQUFJLENBQUNlLEdBQUcsQ0FBQytFLElBQUksS0FBSyxJQUFJLEVBQzNCO1FBQ0M7UUFDQSxJQUFJLENBQUMvRSxHQUFHLENBQUMrRSxJQUFJLENBQUNZLE1BQU0sQ0FBQyxDQUFDO1FBQ3RCLElBQUksQ0FBQzNGLEdBQUcsQ0FBQ3lGLE9BQU8sQ0FBQ0UsTUFBTSxDQUFDLENBQUM7UUFDekIsSUFBSSxDQUFDM0YsR0FBRyxDQUFDK0UsSUFBSSxHQUFHLElBQUk7UUFDcEIsSUFBSSxDQUFDL0UsR0FBRyxDQUFDeUYsT0FBTyxHQUFHLElBQUk7O1FBRXZCO1FBQ0EsSUFBSSxDQUFDM0YsQ0FBQyxDQUFDTixFQUFFLENBQUNMLFNBQVMsQ0FBQzVELFlBQVksQ0FBRSxJQUFJLENBQUN1RSxDQUFDLENBQUNvRSxLQUFLLENBQUNTLFNBQVMsRUFBRSxJQUFJLENBQUM3RSxDQUFDLENBQUNvRSxLQUFLLENBQUNvQixPQUFPLEVBQUUsSUFBSyxDQUFDO1FBQ3RGLElBQUksQ0FBQzVDLG1CQUFtQixDQUFDLENBQUM7O1FBRTFCO1FBQ0EsSUFBSyxJQUFJLENBQUM1QyxDQUFDLENBQUNOLEVBQUUsQ0FBQ3VELE9BQU8sQ0FBQ0MsRUFBRSxLQUFLLEVBQUUsSUFBSSxJQUFJLENBQUNsRCxDQUFDLENBQUNOLEVBQUUsQ0FBQ3VELE9BQU8sQ0FBQ0UsRUFBRSxLQUFLLEVBQUUsRUFDL0Q7VUFDQyxJQUFJLENBQUNuRCxDQUFDLENBQUNOLEVBQUUsQ0FBQ0wsU0FBUyxDQUFDK0Qsb0JBQW9CLENBQUUsS0FBTSxDQUFDO1FBQ2xEOztRQUVBO1FBQ0EsSUFBSSxDQUFDcEQsQ0FBQyxDQUFDTixFQUFFLENBQUNMLFNBQVMsQ0FBQzdELElBQUksQ0FBQzZILFlBQVksQ0FBRSxJQUFJLENBQUNyRCxDQUFDLENBQUNOLEVBQUcsQ0FBQztRQUVsRCxJQUFLLElBQUksQ0FBQ00sQ0FBQyxDQUFDOEIsZUFBZSxLQUFLLElBQUksRUFDcEM7VUFDQyxJQUFJLENBQUM5QixDQUFDLENBQUM4QixlQUFlLENBQUNNLElBQUksQ0FBRSxJQUFLLENBQUM7UUFDcEM7TUFDRDtJQUNELENBQUM7SUFHRDtBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtJQUNDLFlBQVksRUFBRSxTQUFkMEMsVUFBWUEsQ0FBQSxFQUNaO01BQ0MsSUFBSTdJLFNBQVMsR0FBRyxJQUFJLENBQUMrRCxDQUFDLENBQUNOLEVBQUUsQ0FBQ3pELFNBQVM7TUFFbkMsSUFBSSxDQUFDK0QsQ0FBQyxDQUFDeUYsU0FBUyxDQUFDNUssTUFBTSxDQUFFLENBQUMsRUFBRSxJQUFJLENBQUNtRixDQUFDLENBQUN5RixTQUFTLENBQUNsTCxNQUFPLENBQUM7TUFFckQsSUFBSSxDQUFDeUYsQ0FBQyxDQUFDeUYsU0FBUyxDQUFDdEssSUFBSSxDQUFFO1FBQ3RCLEdBQUcsRUFBRzlCLENBQUMsQ0FBQyxJQUFJLENBQUMyRyxDQUFDLENBQUNOLEVBQUUsQ0FBQzRCLE1BQU0sQ0FBQyxDQUFDMkMsTUFBTSxDQUFDLENBQUMsQ0FBQ1EsSUFBSTtRQUN2QyxJQUFJLEVBQUU7TUFDUCxDQUFFLENBQUM7TUFFSCxJQUFJcUIsUUFBUSxHQUFHLENBQUM7TUFDaEIsSUFBSUMsS0FBSyxHQUFHLElBQUksQ0FBQy9GLENBQUMsQ0FBQ3lGLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQ0MsQ0FBQztNQUVqQyxLQUFNLElBQUlyTCxDQUFDLEdBQUMsQ0FBQyxFQUFFQyxJQUFJLEdBQUMyQixTQUFTLENBQUMxQixNQUFNLEVBQUdGLENBQUMsR0FBQ0MsSUFBSSxFQUFHRCxDQUFDLEVBQUUsRUFDbkQ7UUFDQztBQUNIO0FBQ0E7QUFDQTtRQUNHLElBQUtBLENBQUMsSUFBSSxJQUFJLENBQUMyRixDQUFDLENBQUNvRSxLQUFLLENBQUNTLFNBQVMsRUFDaEM7VUFDQ2lCLFFBQVEsRUFBRTtRQUNYO1FBRUEsSUFBSzdKLFNBQVMsQ0FBQzVCLENBQUMsQ0FBQyxDQUFDc0QsUUFBUSxJQUFJMUIsU0FBUyxDQUFDNUIsQ0FBQyxDQUFDLENBQUM2RSxHQUFHLENBQUM4RyxLQUFLLENBQUNDLE9BQU8sS0FBSSxNQUFNLEVBQ3RFO1VBQ0NGLEtBQUssSUFBSTFNLENBQUMsQ0FBQzRDLFNBQVMsQ0FBQzVCLENBQUMsQ0FBQyxDQUFDNkUsR0FBRyxDQUFDLENBQUNnSCxVQUFVLENBQUMsQ0FBQztVQUV6QyxJQUFJLENBQUNsRyxDQUFDLENBQUN5RixTQUFTLENBQUN0SyxJQUFJLENBQUU7WUFDdEIsR0FBRyxFQUFHNEssS0FBSztZQUNYLElBQUksRUFBRUQ7VUFDUCxDQUFFLENBQUM7UUFDSjtNQUNEOztNQUVBO01BQ0EsSUFBSyxJQUFJLENBQUM5RixDQUFDLENBQUMyQixVQUFVLEtBQUssQ0FBQyxFQUM1QjtRQUNDLElBQUksQ0FBQzNCLENBQUMsQ0FBQ3lGLFNBQVMsQ0FBQzVLLE1BQU0sQ0FBRSxJQUFJLENBQUNtRixDQUFDLENBQUN5RixTQUFTLENBQUNsTCxNQUFNLEdBQUcsSUFBSSxDQUFDeUYsQ0FBQyxDQUFDMkIsVUFBVyxDQUFDO01BQ3ZFOztNQUVBO01BQ0EsSUFBSyxJQUFJLENBQUMzQixDQUFDLENBQUN5QixLQUFLLEtBQUssQ0FBQyxFQUN2QjtRQUNDLElBQUksQ0FBQ3pCLENBQUMsQ0FBQ3lGLFNBQVMsQ0FBQzVLLE1BQU0sQ0FBRSxDQUFDLEVBQUUsSUFBSSxDQUFDbUYsQ0FBQyxDQUFDeUIsS0FBTSxDQUFDO01BQzNDO0lBQ0QsQ0FBQztJQUdEO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0lBQ0MsbUJBQW1CLEVBQUUsU0FBckIyRCxpQkFBbUJBLENBQUEsRUFDbkI7TUFDQyxJQUFJZSxTQUFTLEdBQUcsSUFBSSxDQUFDbkcsQ0FBQyxDQUFDTixFQUFFLENBQUN1RCxPQUFPLENBQUNDLEVBQUUsS0FBSyxFQUFFLElBQUksSUFBSSxDQUFDbEQsQ0FBQyxDQUFDTixFQUFFLENBQUN1RCxPQUFPLENBQUNFLEVBQUUsS0FBSyxFQUFFO01BRTFFLElBQUlpRCxRQUFRLEdBQUcsSUFBSSxDQUFDcEcsQ0FBQyxDQUFDTixFQUFFLENBQUN6RCxTQUFTLENBQUUsSUFBSSxDQUFDK0QsQ0FBQyxDQUFDb0UsS0FBSyxDQUFDUSxXQUFXLENBQUUsQ0FBQzFGLEdBQUc7TUFDbEUsSUFBSW1ILE1BQU0sR0FBR0QsUUFBUSxDQUFDRSxVQUFVO01BQ2hDLElBQUlDLFNBQVMsR0FBR0YsTUFBTSxDQUFDQyxVQUFVO01BQ2pDLElBQUlFLFNBQVMsR0FBR0QsU0FBUyxDQUFDRCxVQUFVO01BQ3BDLElBQUlHLFNBQVMsR0FBR3BOLENBQUMsQ0FBQytNLFFBQVEsQ0FBQyxDQUFDTSxLQUFLLENBQUMsQ0FBQzs7TUFFbkM7TUFDQTtNQUNBO01BQ0EsSUFBSSxDQUFDeEcsR0FBRyxDQUFDK0UsSUFBSSxHQUFHNUwsQ0FBQyxDQUFDbU4sU0FBUyxDQUFDRyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FDM0NDLFFBQVEsQ0FBRSxrQkFBbUIsQ0FBQyxDQUM5QkMsTUFBTSxDQUNOeE4sQ0FBQyxDQUFDa04sU0FBUyxDQUFDSSxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQ0UsTUFBTSxDQUNuQ3hOLENBQUMsQ0FBQ2dOLE1BQU0sQ0FBQ00sU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUNFLE1BQU0sQ0FDaENKLFNBQVMsQ0FBQyxDQUFDLENBQ1osQ0FDRCxDQUNELENBQUMsQ0FDQXBCLEdBQUcsQ0FBRTtRQUNMeUIsUUFBUSxFQUFFLFVBQVU7UUFDcEJuQyxHQUFHLEVBQUUsQ0FBQztRQUNORixJQUFJLEVBQUUsQ0FBQztRQUNQc0MsS0FBSyxFQUFFMU4sQ0FBQyxDQUFDK00sUUFBUSxDQUFDLENBQUNGLFVBQVUsQ0FBQyxDQUFDO1FBQy9CYyxNQUFNLEVBQUUzTixDQUFDLENBQUMrTSxRQUFRLENBQUMsQ0FBQ2EsV0FBVyxDQUFDO01BQ2pDLENBQUUsQ0FBQyxDQUNGQyxRQUFRLENBQUUsTUFBTyxDQUFDO01BRXBCLElBQUksQ0FBQ2hILEdBQUcsQ0FBQ3lGLE9BQU8sR0FBR3RNLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FDakN1TixRQUFRLENBQUUsY0FBZSxDQUFDLENBQzFCdkIsR0FBRyxDQUFFO1FBQ0x5QixRQUFRLEVBQUUsVUFBVTtRQUNwQm5DLEdBQUcsRUFBRXdCLFNBQVMsR0FDYjlNLENBQUMsQ0FBQyx1QkFBdUIsRUFBRSxJQUFJLENBQUMyRyxDQUFDLENBQUNOLEVBQUUsQ0FBQ3lILGFBQWEsQ0FBQyxDQUFDbEQsTUFBTSxDQUFDLENBQUMsQ0FBQ1UsR0FBRyxHQUNoRXRMLENBQUMsQ0FBQyxJQUFJLENBQUMyRyxDQUFDLENBQUNOLEVBQUUsQ0FBQzRCLE1BQU0sQ0FBQyxDQUFDMkMsTUFBTSxDQUFDLENBQUMsQ0FBQ1UsR0FBRztRQUNqQ3FDLE1BQU0sRUFBR2IsU0FBUyxHQUNqQjlNLENBQUMsQ0FBQyx1QkFBdUIsRUFBRSxJQUFJLENBQUMyRyxDQUFDLENBQUNOLEVBQUUsQ0FBQ3lILGFBQWEsQ0FBQyxDQUFDSCxNQUFNLENBQUMsQ0FBQyxHQUM1RDNOLENBQUMsQ0FBQyxJQUFJLENBQUMyRyxDQUFDLENBQUNOLEVBQUUsQ0FBQzRCLE1BQU0sQ0FBQyxDQUFDMEYsTUFBTSxDQUFDO01BQzdCLENBQUUsQ0FBQyxDQUNGRSxRQUFRLENBQUUsTUFBTyxDQUFDO0lBQ3JCLENBQUM7SUFHRDtBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7SUFDQyxxQkFBcUIsRUFBRSxTQUF2QnRFLG1CQUFxQkEsQ0FBQSxFQUNyQjtNQUNDdkosQ0FBQyxDQUFDZ0UsSUFBSSxDQUFFLElBQUksQ0FBQzJDLENBQUMsQ0FBQ04sRUFBRSxDQUFDekQsU0FBUyxFQUFFLFVBQVU1QixDQUFDLEVBQUVxRSxNQUFNLEVBQUU7UUFDakRyRixDQUFDLENBQUNxRixNQUFNLENBQUNRLEdBQUcsQ0FBQyxDQUFDaUYsSUFBSSxDQUFDLG1CQUFtQixFQUFFOUosQ0FBQyxDQUFDO01BQzNDLENBQUUsQ0FBQztJQUNKLENBQUM7SUFHRDtBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7SUFDQ2lLLGlCQUFpQixFQUFFLFNBQW5CQSxpQkFBaUJBLENBQWFULENBQUMsRUFBRXZILElBQUksRUFBRztNQUN2QyxJQUFLdUgsQ0FBQyxDQUFDdUQsSUFBSSxDQUFDQyxPQUFPLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUc7UUFDckMsT0FBT3hELENBQUMsQ0FBQ3lELGFBQWEsQ0FBQ0MsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFFakwsSUFBSSxDQUFFO01BQzFDO01BQ0EsT0FBT3VILENBQUMsQ0FBRXZILElBQUksQ0FBRTtJQUNqQjtFQUNELENBQUUsQ0FBQzs7RUFNSDtBQUNBO0FBQ0E7O0VBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtFQUNBbUQsV0FBVSxDQUFDTSxRQUFRLEdBQUc7SUFDckI7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtJQUNDc0MsT0FBTyxFQUFFLElBQUk7SUFFYjtBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtJQUNDdUQsU0FBUyxFQUFFLElBQUk7SUFFZjtBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtJQUNDbEUsaUJBQWlCLEVBQUUsQ0FBQztJQUVwQjtBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7SUFDQ0Usa0JBQWtCLEVBQUUsQ0FBQztJQUVyQjtBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtJQUNDQyxpQkFBaUIsRUFBRTtFQUNwQixDQUFDOztFQUlEO0FBQ0E7QUFDQTs7RUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7RUFDQXBDLFdBQVUsQ0FBQytILE9BQU8sR0FBRyxPQUFPOztFQUk1QjtBQUNBO0FBQ0E7O0VBRUE7RUFDQW5PLENBQUMsQ0FBQ08sRUFBRSxDQUFDQyxTQUFTLENBQUM0RixVQUFVLEdBQUdBLFdBQVU7RUFDdENwRyxDQUFDLENBQUNPLEVBQUUsQ0FBQ0ssU0FBUyxDQUFDd0YsVUFBVSxHQUFHQSxXQUFVOztFQUd0QztFQUNBLElBQUssT0FBT3BHLENBQUMsQ0FBQ08sRUFBRSxDQUFDQyxTQUFTLElBQUksVUFBVSxJQUNuQyxPQUFPUixDQUFDLENBQUNPLEVBQUUsQ0FBQzJCLFlBQVksQ0FBQ2tNLGNBQWMsSUFBSSxVQUFVLElBQ3JEcE8sQ0FBQyxDQUFDTyxFQUFFLENBQUMyQixZQUFZLENBQUNrTSxjQUFjLENBQUMsUUFBUSxDQUFDLEVBQy9DO0lBQ0NwTyxDQUFDLENBQUNPLEVBQUUsQ0FBQzJCLFlBQVksQ0FBQ21NLFVBQVUsQ0FBQ3ZNLElBQUksQ0FBRTtNQUNsQyxRQUFRLEVBQUUsU0FBVndNLE1BQVFBLENBQVkvSCxRQUFRLEVBQUc7UUFDOUIsSUFBSXlCLEtBQUssR0FBR3pCLFFBQVEsQ0FBQ1AsU0FBUztRQUU5QixJQUFLLENBQUVPLFFBQVEsQ0FBQ0MsV0FBVyxFQUFHO1VBQzdCLElBQUkrSCxNQUFNLEdBQUdoSSxRQUFRLENBQUNpSSxLQUFLO1VBQzNCLElBQUlsSSxJQUFJLEdBQUdpSSxNQUFNLENBQUNFLFVBQVUsSUFBSUYsTUFBTSxDQUFDRyxXQUFXLElBQUksQ0FBQyxDQUFDO1VBRXhELElBQUl0SSxXQUFVLENBQUVHLFFBQVEsRUFBRUQsSUFBSyxDQUFDO1FBQ2pDLENBQUMsTUFDSTtVQUNKMEIsS0FBSyxDQUFDN0YsSUFBSSxDQUFDc0IsTUFBTSxDQUFFOEMsUUFBUSxFQUFFLENBQUMsRUFBRSwyREFBNEQsQ0FBQztRQUM5RjtRQUVBLE9BQU8sSUFBSSxDQUFDLENBQUM7TUFDZCxDQUFDO01BQ0QsVUFBVSxFQUFFLEdBQUc7TUFDZixVQUFVLEVBQUU7SUFDYixDQUFFLENBQUM7RUFDSixDQUFDLE1BQ0k7SUFDSm9JLEtBQUssQ0FBRSx5RkFBeUYsQ0FBQztFQUNsRzs7RUFHQTtFQUNBO0VBQ0EzTyxDQUFDLENBQUNFLFFBQVEsQ0FBQyxDQUFDbUosRUFBRSxDQUFFLHVCQUF1QixFQUFFLFVBQVVtQixDQUFDLEVBQUVqRSxRQUFRLEVBQUU7SUFDL0QsSUFBS2lFLENBQUMsQ0FBQ29FLFNBQVMsS0FBSyxJQUFJLEVBQUc7TUFDM0I7SUFDRDtJQUVBLElBQUkxRyxJQUFJLEdBQUczQixRQUFRLENBQUNpSSxLQUFLLENBQUNDLFVBQVU7SUFDcEMsSUFBSS9ILFFBQVEsR0FBRzlGLFNBQVMsQ0FBQzhGLFFBQVEsQ0FBQytILFVBQVU7SUFFNUMsSUFBS3ZHLElBQUksSUFBSXhCLFFBQVEsRUFBRztNQUN2QixJQUFJSixJQUFJLEdBQUd0RyxDQUFDLENBQUM0RyxNQUFNLENBQUUsQ0FBQyxDQUFDLEVBQUVzQixJQUFJLEVBQUV4QixRQUFTLENBQUM7TUFFekMsSUFBS3dCLElBQUksS0FBSyxLQUFLLEVBQUc7UUFDckIsSUFBSTlCLFdBQVUsQ0FBRUcsUUFBUSxFQUFFRCxJQUFNLENBQUM7TUFDbEM7SUFDRDtFQUNELENBQUUsQ0FBQzs7RUFHSDtFQUNBdEcsQ0FBQyxDQUFDTyxFQUFFLENBQUNDLFNBQVMsQ0FBQ2tGLEdBQUcsQ0FBQ21KLFFBQVEsQ0FBRSxvQkFBb0IsRUFBRSxZQUFZO0lBQzlELE9BQU8sSUFBSSxDQUFDQyxRQUFRLENBQUUsT0FBTyxFQUFFLFVBQVdDLEdBQUcsRUFBRztNQUMvQ0EsR0FBRyxDQUFDdkksV0FBVyxDQUFDUSxPQUFPLENBQUMsQ0FBQztJQUMxQixDQUFFLENBQUM7RUFDSixDQUFFLENBQUM7RUFFSGhILENBQUMsQ0FBQ08sRUFBRSxDQUFDQyxTQUFTLENBQUNrRixHQUFHLENBQUNtSixRQUFRLENBQUUsb0JBQW9CLEVBQUUsVUFBV3pILEdBQUcsRUFBRUMsUUFBUSxFQUFHO0lBQzdFLElBQUtELEdBQUcsRUFBRztNQUNWLE9BQU8sSUFBSSxDQUFDMEgsUUFBUSxDQUFFLE9BQU8sRUFBRSxVQUFXQyxHQUFHLEVBQUc7UUFDL0NBLEdBQUcsQ0FBQ3ZJLFdBQVcsQ0FBQ1UsT0FBTyxDQUFFRSxHQUFHLEVBQUVDLFFBQVMsQ0FBQztNQUN6QyxDQUFFLENBQUM7SUFDSjtJQUVBLE9BQU8sSUFBSSxDQUFDMkgsT0FBTyxDQUFDOU4sTUFBTSxHQUN6QixJQUFJLENBQUM4TixPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUN4SSxXQUFXLENBQUNVLE9BQU8sQ0FBQyxDQUFDLEdBQ3JDLElBQUk7RUFDTixDQUFFLENBQUM7RUFFSGxILENBQUMsQ0FBQ08sRUFBRSxDQUFDQyxTQUFTLENBQUNrRixHQUFHLENBQUNtSixRQUFRLENBQUUsd0JBQXdCLEVBQUUsVUFBVzlLLEdBQUcsRUFBRTZELEdBQUcsRUFBRztJQUM1RSxPQUFPLElBQUksQ0FBQ29ILE9BQU8sQ0FBQzlOLE1BQU0sSUFBSSxJQUFJLENBQUM4TixPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUN4SSxXQUFXLEdBQ3hELElBQUksQ0FBQ3dJLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQ3hJLFdBQVcsQ0FBQ21CLFdBQVcsQ0FBRTVELEdBQUcsRUFBRTZELEdBQUksQ0FBQyxHQUNuRDdELEdBQUc7RUFDTCxDQUFFLENBQUM7RUFFSC9ELENBQUMsQ0FBQ08sRUFBRSxDQUFDQyxTQUFTLENBQUNrRixHQUFHLENBQUNtSixRQUFRLENBQUUsbUJBQW1CLEVBQUUsVUFBVTNJLElBQUksRUFBRUMsRUFBRSxFQUFFN0QsSUFBSSxFQUFFQyxjQUFjLEVBQUc7SUFDNUYsSUFBSSxJQUFJLENBQUN5TSxPQUFPLENBQUM5TixNQUFNLEVBQUU7TUFDeEIsSUFBSSxDQUFDOE4sT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDeEksV0FBVyxDQUFDRyxDQUFDLENBQUNOLEVBQUUsQ0FBQ0wsU0FBUyxDQUFDNUQsWUFBWSxDQUFFOEQsSUFBSSxFQUFFQyxFQUFFLEVBQUU3RCxJQUFJLEVBQUVDLGNBQWUsQ0FBQztJQUMxRjtJQUNBLE9BQU8sSUFBSTtFQUNaLENBQUUsQ0FBQztFQUdILE9BQU82RCxXQUFVO0FBQ2pCLENBQUMsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2Nzcy9wb3J0b2FkbWluL3ZlbmRvci9kYXRhdGFibGVzL2V4dHJhcy9UYWJsZVRvb2xzL0NvbFJlb3JkZXItMS40LjEvanMvZGF0YVRhYmxlcy5jb2xSZW9yZGVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qISBDb2xSZW9yZGVyIDEuNC4xXHJcbiAqIMKpMjAxMC0yMDE3IFNwcnlNZWRpYSBMdGQgLSBkYXRhdGFibGVzLm5ldC9saWNlbnNlXHJcbiAqL1xyXG5cclxuLyoqXHJcbiAqIEBzdW1tYXJ5ICAgICBDb2xSZW9yZGVyXHJcbiAqIEBkZXNjcmlwdGlvbiBQcm92aWRlIHRoZSBhYmlsaXR5IHRvIHJlb3JkZXIgY29sdW1ucyBpbiBhIERhdGFUYWJsZVxyXG4gKiBAdmVyc2lvbiAgICAgMS40LjFcclxuICogQGZpbGUgICAgICAgIGRhdGFUYWJsZXMuY29sUmVvcmRlci5qc1xyXG4gKiBAYXV0aG9yICAgICAgU3ByeU1lZGlhIEx0ZCAod3d3LnNwcnltZWRpYS5jby51aylcclxuICogQGNvbnRhY3QgICAgIHd3dy5zcHJ5bWVkaWEuY28udWsvY29udGFjdFxyXG4gKiBAY29weXJpZ2h0ICAgQ29weXJpZ2h0IDIwMTAtMjAxNyBTcHJ5TWVkaWEgTHRkLlxyXG4gKlxyXG4gKiBUaGlzIHNvdXJjZSBmaWxlIGlzIGZyZWUgc29mdHdhcmUsIGF2YWlsYWJsZSB1bmRlciB0aGUgZm9sbG93aW5nIGxpY2Vuc2U6XHJcbiAqICAgTUlUIGxpY2Vuc2UgLSBodHRwOi8vZGF0YXRhYmxlcy5uZXQvbGljZW5zZS9taXRcclxuICpcclxuICogVGhpcyBzb3VyY2UgZmlsZSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXRcclxuICogV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFlcclxuICogb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFNlZSB0aGUgbGljZW5zZSBmaWxlcyBmb3IgZGV0YWlscy5cclxuICpcclxuICogRm9yIGRldGFpbHMgcGxlYXNlIHJlZmVyIHRvOiBodHRwOi8vd3d3LmRhdGF0YWJsZXMubmV0XHJcbiAqL1xyXG4oZnVuY3Rpb24oIGZhY3RvcnkgKXtcclxuXHRpZiAoIHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCApIHtcclxuXHRcdC8vIEFNRFxyXG5cdFx0ZGVmaW5lKCBbJ2pxdWVyeScsICdkYXRhdGFibGVzLm5ldCddLCBmdW5jdGlvbiAoICQgKSB7XHJcblx0XHRcdHJldHVybiBmYWN0b3J5KCAkLCB3aW5kb3csIGRvY3VtZW50ICk7XHJcblx0XHR9ICk7XHJcblx0fVxyXG5cdGVsc2UgaWYgKCB0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgKSB7XHJcblx0XHQvLyBDb21tb25KU1xyXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAocm9vdCwgJCkge1xyXG5cdFx0XHRpZiAoICEgcm9vdCApIHtcclxuXHRcdFx0XHRyb290ID0gd2luZG93O1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZiAoICEgJCB8fCAhICQuZm4uZGF0YVRhYmxlICkge1xyXG5cdFx0XHRcdCQgPSByZXF1aXJlKCdkYXRhdGFibGVzLm5ldCcpKHJvb3QsICQpLiQ7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHJldHVybiBmYWN0b3J5KCAkLCByb290LCByb290LmRvY3VtZW50ICk7XHJcblx0XHR9O1xyXG5cdH1cclxuXHRlbHNlIHtcclxuXHRcdC8vIEJyb3dzZXJcclxuXHRcdGZhY3RvcnkoIGpRdWVyeSwgd2luZG93LCBkb2N1bWVudCApO1xyXG5cdH1cclxufShmdW5jdGlvbiggJCwgd2luZG93LCBkb2N1bWVudCwgdW5kZWZpbmVkICkge1xyXG4ndXNlIHN0cmljdCc7XHJcbnZhciBEYXRhVGFibGUgPSAkLmZuLmRhdGFUYWJsZTtcclxuXHJcblxyXG4vKipcclxuICogU3dpdGNoIHRoZSBrZXkgdmFsdWUgcGFpcmluZyBvZiBhbiBpbmRleCBhcnJheSB0byBiZSB2YWx1ZSBrZXkgKGkuZS4gdGhlIG9sZCB2YWx1ZSBpcyBub3cgdGhlXHJcbiAqIGtleSkuIEZvciBleGFtcGxlIGNvbnNpZGVyIFsgMiwgMCwgMSBdIHRoaXMgd291bGQgYmUgcmV0dXJuZWQgYXMgWyAxLCAyLCAwIF0uXHJcbiAqICBAbWV0aG9kICBmbkludmVydEtleVZhbHVlc1xyXG4gKiAgQHBhcmFtICAgYXJyYXkgYUluIEFycmF5IHRvIHN3aXRjaCBhcm91bmRcclxuICogIEByZXR1cm5zIGFycmF5XHJcbiAqL1xyXG5mdW5jdGlvbiBmbkludmVydEtleVZhbHVlcyggYUluIClcclxue1xyXG5cdHZhciBhUmV0PVtdO1xyXG5cdGZvciAoIHZhciBpPTAsIGlMZW49YUluLmxlbmd0aCA7IGk8aUxlbiA7IGkrKyApXHJcblx0e1xyXG5cdFx0YVJldFsgYUluW2ldIF0gPSBpO1xyXG5cdH1cclxuXHRyZXR1cm4gYVJldDtcclxufVxyXG5cclxuXHJcbi8qKlxyXG4gKiBNb2RpZnkgYW4gYXJyYXkgYnkgc3dpdGNoaW5nIHRoZSBwb3NpdGlvbiBvZiB0d28gZWxlbWVudHNcclxuICogIEBtZXRob2QgIGZuQXJyYXlTd2l0Y2hcclxuICogIEBwYXJhbSAgIGFycmF5IGFBcnJheSBBcnJheSB0byBjb25zaWRlciwgd2lsbCBiZSBtb2RpZmllZCBieSByZWZlcmVuY2UgKGkuZS4gbm8gcmV0dXJuKVxyXG4gKiAgQHBhcmFtICAgaW50IGlGcm9tIEZyb20gcG9pbnRcclxuICogIEBwYXJhbSAgIGludCBpVG8gSW5zZXJ0IHBvaW50XHJcbiAqICBAcmV0dXJucyB2b2lkXHJcbiAqL1xyXG5mdW5jdGlvbiBmbkFycmF5U3dpdGNoKCBhQXJyYXksIGlGcm9tLCBpVG8gKVxyXG57XHJcblx0dmFyIG1TdG9yZSA9IGFBcnJheS5zcGxpY2UoIGlGcm9tLCAxIClbMF07XHJcblx0YUFycmF5LnNwbGljZSggaVRvLCAwLCBtU3RvcmUgKTtcclxufVxyXG5cclxuXHJcbi8qKlxyXG4gKiBTd2l0Y2ggdGhlIHBvc2l0aW9ucyBvZiBub2RlcyBpbiBhIHBhcmVudCBub2RlIChub3RlIHRoaXMgaXMgc3BlY2lmaWNhbGx5IGRlc2lnbmVkIGZvclxyXG4gKiB0YWJsZSByb3dzKS4gTm90ZSB0aGlzIGZ1bmN0aW9uIGNvbnNpZGVycyBhbGwgZWxlbWVudCBub2RlcyB1bmRlciB0aGUgcGFyZW50IVxyXG4gKiAgQG1ldGhvZCAgZm5Eb21Td2l0Y2hcclxuICogIEBwYXJhbSAgIHN0cmluZyBzVGFnIFRhZyB0byBjb25zaWRlclxyXG4gKiAgQHBhcmFtICAgaW50IGlGcm9tIEVsZW1lbnQgdG8gbW92ZVxyXG4gKiAgQHBhcmFtICAgaW50IFBvaW50IHRvIGVsZW1lbnQgdGhlIGVsZW1lbnQgdG8gKGJlZm9yZSB0aGlzIHBvaW50KSwgY2FuIGJlIG51bGwgZm9yIGFwcGVuZFxyXG4gKiAgQHJldHVybnMgdm9pZFxyXG4gKi9cclxuZnVuY3Rpb24gZm5Eb21Td2l0Y2goIG5QYXJlbnQsIGlGcm9tLCBpVG8gKVxyXG57XHJcblx0dmFyIGFuVGFncyA9IFtdO1xyXG5cdGZvciAoIHZhciBpPTAsIGlMZW49blBhcmVudC5jaGlsZE5vZGVzLmxlbmd0aCA7IGk8aUxlbiA7IGkrKyApXHJcblx0e1xyXG5cdFx0aWYgKCBuUGFyZW50LmNoaWxkTm9kZXNbaV0ubm9kZVR5cGUgPT0gMSApXHJcblx0XHR7XHJcblx0XHRcdGFuVGFncy5wdXNoKCBuUGFyZW50LmNoaWxkTm9kZXNbaV0gKTtcclxuXHRcdH1cclxuXHR9XHJcblx0dmFyIG5TdG9yZSA9IGFuVGFnc1sgaUZyb20gXTtcclxuXHJcblx0aWYgKCBpVG8gIT09IG51bGwgKVxyXG5cdHtcclxuXHRcdG5QYXJlbnQuaW5zZXJ0QmVmb3JlKCBuU3RvcmUsIGFuVGFnc1tpVG9dICk7XHJcblx0fVxyXG5cdGVsc2VcclxuXHR7XHJcblx0XHRuUGFyZW50LmFwcGVuZENoaWxkKCBuU3RvcmUgKTtcclxuXHR9XHJcbn1cclxuXHJcblxyXG4vKipcclxuICogUGx1Zy1pbiBmb3IgRGF0YVRhYmxlcyB3aGljaCB3aWxsIHJlb3JkZXIgdGhlIGludGVybmFsIGNvbHVtbiBzdHJ1Y3R1cmUgYnkgdGFraW5nIHRoZSBjb2x1bW5cclxuICogZnJvbSBvbmUgcG9zaXRpb24gKGlGcm9tKSBhbmQgaW5zZXJ0IGl0IGludG8gYSBnaXZlbiBwb2ludCAoaVRvKS5cclxuICogIEBtZXRob2QgICQuZm4uZGF0YVRhYmxlRXh0Lm9BcGkuZm5Db2xSZW9yZGVyXHJcbiAqICBAcGFyYW0gICBvYmplY3Qgb1NldHRpbmdzIERhdGFUYWJsZXMgc2V0dGluZ3Mgb2JqZWN0IC0gYXV0b21hdGljYWxseSBhZGRlZCBieSBEYXRhVGFibGVzIVxyXG4gKiAgQHBhcmFtICAgaW50IGlGcm9tIFRha2UgdGhlIGNvbHVtbiB0byBiZSByZXBvc2l0aW9uZWQgZnJvbSB0aGlzIHBvaW50XHJcbiAqICBAcGFyYW0gICBpbnQgaVRvIGFuZCBpbnNlcnQgaXQgaW50byB0aGlzIHBvaW50XHJcbiAqICBAcGFyYW0gICBib29sIGRyb3AgSW5kaWNhdGUgaWYgdGhlIHJlb3JkZXIgaXMgdGhlIGZpbmFsIG9uZSAoaS5lLiBhIGRyb3ApXHJcbiAqICAgIG5vdCBhIGxpdmUgcmVvcmRlclxyXG4gKiAgQHBhcmFtICAgYm9vbCBpbnZhbGlkYXRlUm93cyBzcGVlZHMgdXAgcHJvY2Vzc2luZyBpZiBmYWxzZSBwYXNzZWRcclxuICogIEByZXR1cm5zIHZvaWRcclxuICovXHJcbiQuZm4uZGF0YVRhYmxlRXh0Lm9BcGkuZm5Db2xSZW9yZGVyID0gZnVuY3Rpb24gKCBvU2V0dGluZ3MsIGlGcm9tLCBpVG8sIGRyb3AsIGludmFsaWRhdGVSb3dzIClcclxue1xyXG5cdHZhciBpLCBpTGVuLCBqLCBqTGVuLCBqZW4sIGlDb2xzPW9TZXR0aW5ncy5hb0NvbHVtbnMubGVuZ3RoLCBuVHJzLCBvQ29sO1xyXG5cdHZhciBhdHRyTWFwID0gZnVuY3Rpb24gKCBvYmosIHByb3AsIG1hcHBpbmcgKSB7XHJcblx0XHRpZiAoICEgb2JqWyBwcm9wIF0gfHwgdHlwZW9mIG9ialsgcHJvcCBdID09PSAnZnVuY3Rpb24nICkge1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblxyXG5cdFx0dmFyIGEgPSBvYmpbIHByb3AgXS5zcGxpdCgnLicpO1xyXG5cdFx0dmFyIG51bSA9IGEuc2hpZnQoKTtcclxuXHJcblx0XHRpZiAoIGlzTmFOKCBudW0qMSApICkge1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblxyXG5cdFx0b2JqWyBwcm9wIF0gPSBtYXBwaW5nWyBudW0qMSBdKycuJythLmpvaW4oJy4nKTtcclxuXHR9O1xyXG5cclxuXHQvKiBTYW5pdHkgY2hlY2sgaW4gdGhlIGlucHV0ICovXHJcblx0aWYgKCBpRnJvbSA9PSBpVG8gKVxyXG5cdHtcclxuXHRcdC8qIFBvaW50bGVzcyByZW9yZGVyICovXHJcblx0XHRyZXR1cm47XHJcblx0fVxyXG5cclxuXHRpZiAoIGlGcm9tIDwgMCB8fCBpRnJvbSA+PSBpQ29scyApXHJcblx0e1xyXG5cdFx0dGhpcy5vQXBpLl9mbkxvZyggb1NldHRpbmdzLCAxLCBcIkNvbFJlb3JkZXIgJ2Zyb20nIGluZGV4IGlzIG91dCBvZiBib3VuZHM6IFwiK2lGcm9tICk7XHJcblx0XHRyZXR1cm47XHJcblx0fVxyXG5cclxuXHRpZiAoIGlUbyA8IDAgfHwgaVRvID49IGlDb2xzIClcclxuXHR7XHJcblx0XHR0aGlzLm9BcGkuX2ZuTG9nKCBvU2V0dGluZ3MsIDEsIFwiQ29sUmVvcmRlciAndG8nIGluZGV4IGlzIG91dCBvZiBib3VuZHM6IFwiK2lUbyApO1xyXG5cdFx0cmV0dXJuO1xyXG5cdH1cclxuXHJcblx0LypcclxuXHQgKiBDYWxjdWxhdGUgdGhlIG5ldyBjb2x1bW4gYXJyYXkgaW5kZXgsIHNvIHdlIGhhdmUgYSBtYXBwaW5nIGJldHdlZW4gdGhlIG9sZCBhbmQgbmV3XHJcblx0ICovXHJcblx0dmFyIGFpTWFwcGluZyA9IFtdO1xyXG5cdGZvciAoIGk9MCwgaUxlbj1pQ29scyA7IGk8aUxlbiA7IGkrKyApXHJcblx0e1xyXG5cdFx0YWlNYXBwaW5nW2ldID0gaTtcclxuXHR9XHJcblx0Zm5BcnJheVN3aXRjaCggYWlNYXBwaW5nLCBpRnJvbSwgaVRvICk7XHJcblx0dmFyIGFpSW52ZXJ0TWFwcGluZyA9IGZuSW52ZXJ0S2V5VmFsdWVzKCBhaU1hcHBpbmcgKTtcclxuXHJcblxyXG5cdC8qXHJcblx0ICogQ29udmVydCBhbGwgaW50ZXJuYWwgaW5kZXhpbmcgdG8gdGhlIG5ldyBjb2x1bW4gb3JkZXIgaW5kZXhlc1xyXG5cdCAqL1xyXG5cdC8qIFNvcnRpbmcgKi9cclxuXHRmb3IgKCBpPTAsIGlMZW49b1NldHRpbmdzLmFhU29ydGluZy5sZW5ndGggOyBpPGlMZW4gOyBpKysgKVxyXG5cdHtcclxuXHRcdG9TZXR0aW5ncy5hYVNvcnRpbmdbaV1bMF0gPSBhaUludmVydE1hcHBpbmdbIG9TZXR0aW5ncy5hYVNvcnRpbmdbaV1bMF0gXTtcclxuXHR9XHJcblxyXG5cdC8qIEZpeGVkIHNvcnRpbmcgKi9cclxuXHRpZiAoIG9TZXR0aW5ncy5hYVNvcnRpbmdGaXhlZCAhPT0gbnVsbCApXHJcblx0e1xyXG5cdFx0Zm9yICggaT0wLCBpTGVuPW9TZXR0aW5ncy5hYVNvcnRpbmdGaXhlZC5sZW5ndGggOyBpPGlMZW4gOyBpKysgKVxyXG5cdFx0e1xyXG5cdFx0XHRvU2V0dGluZ3MuYWFTb3J0aW5nRml4ZWRbaV1bMF0gPSBhaUludmVydE1hcHBpbmdbIG9TZXR0aW5ncy5hYVNvcnRpbmdGaXhlZFtpXVswXSBdO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0LyogRGF0YSBjb2x1bW4gc29ydGluZyAodGhlIGNvbHVtbiB3aGljaCB0aGUgc29ydCBmb3IgYSBnaXZlbiBjb2x1bW4gc2hvdWxkIHRha2UgcGxhY2Ugb24pICovXHJcblx0Zm9yICggaT0wLCBpTGVuPWlDb2xzIDsgaTxpTGVuIDsgaSsrIClcclxuXHR7XHJcblx0XHRvQ29sID0gb1NldHRpbmdzLmFvQ29sdW1uc1tpXTtcclxuXHRcdGZvciAoIGo9MCwgakxlbj1vQ29sLmFEYXRhU29ydC5sZW5ndGggOyBqPGpMZW4gOyBqKysgKVxyXG5cdFx0e1xyXG5cdFx0XHRvQ29sLmFEYXRhU29ydFtqXSA9IGFpSW52ZXJ0TWFwcGluZ1sgb0NvbC5hRGF0YVNvcnRbal0gXTtcclxuXHRcdH1cclxuXHJcblx0XHQvLyBVcGRhdGUgdGhlIGNvbHVtbiBpbmRleGVzXHJcblx0XHRvQ29sLmlkeCA9IGFpSW52ZXJ0TWFwcGluZ1sgb0NvbC5pZHggXTtcclxuXHR9XHJcblxyXG5cdC8vIFVwZGF0ZSAxLjEwIG9wdGltaXNlZCBzb3J0IGNsYXNzIHJlbW92YWwgdmFyaWFibGVcclxuXHQkLmVhY2goIG9TZXR0aW5ncy5hTGFzdFNvcnQsIGZ1bmN0aW9uIChpLCB2YWwpIHtcclxuXHRcdG9TZXR0aW5ncy5hTGFzdFNvcnRbaV0uc3JjID0gYWlJbnZlcnRNYXBwaW5nWyB2YWwuc3JjIF07XHJcblx0fSApO1xyXG5cclxuXHQvKiBVcGRhdGUgdGhlIEdldCBhbmQgU2V0IGZ1bmN0aW9ucyBmb3IgZWFjaCBjb2x1bW4gKi9cclxuXHRmb3IgKCBpPTAsIGlMZW49aUNvbHMgOyBpPGlMZW4gOyBpKysgKVxyXG5cdHtcclxuXHRcdG9Db2wgPSBvU2V0dGluZ3MuYW9Db2x1bW5zW2ldO1xyXG5cclxuXHRcdGlmICggdHlwZW9mIG9Db2wubURhdGEgPT0gJ251bWJlcicgKSB7XHJcblx0XHRcdG9Db2wubURhdGEgPSBhaUludmVydE1hcHBpbmdbIG9Db2wubURhdGEgXTtcclxuXHRcdH1cclxuXHRcdGVsc2UgaWYgKCAkLmlzUGxhaW5PYmplY3QoIG9Db2wubURhdGEgKSApIHtcclxuXHRcdFx0Ly8gSFRNTDUgZGF0YSBzb3VyY2VkXHJcblx0XHRcdGF0dHJNYXAoIG9Db2wubURhdGEsICdfJywgICAgICBhaUludmVydE1hcHBpbmcgKTtcclxuXHRcdFx0YXR0ck1hcCggb0NvbC5tRGF0YSwgJ2ZpbHRlcicsIGFpSW52ZXJ0TWFwcGluZyApO1xyXG5cdFx0XHRhdHRyTWFwKCBvQ29sLm1EYXRhLCAnc29ydCcsICAgYWlJbnZlcnRNYXBwaW5nICk7XHJcblx0XHRcdGF0dHJNYXAoIG9Db2wubURhdGEsICd0eXBlJywgICBhaUludmVydE1hcHBpbmcgKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdC8qXHJcblx0ICogTW92ZSB0aGUgRE9NIGVsZW1lbnRzXHJcblx0ICovXHJcblx0aWYgKCBvU2V0dGluZ3MuYW9Db2x1bW5zW2lGcm9tXS5iVmlzaWJsZSApXHJcblx0e1xyXG5cdFx0LyogQ2FsY3VsYXRlIHRoZSBjdXJyZW50IHZpc2libGUgaW5kZXggYW5kIHRoZSBwb2ludCB0byBpbnNlcnQgdGhlIG5vZGUgYmVmb3JlLiBUaGUgaW5zZXJ0XHJcblx0XHQgKiBiZWZvcmUgbmVlZHMgdG8gdGFrZSBpbnRvIGFjY291bnQgdGhhdCB0aGVyZSBtaWdodCBub3QgYmUgYW4gZWxlbWVudCB0byBpbnNlcnQgYmVmb3JlLFxyXG5cdFx0ICogaW4gd2hpY2ggY2FzZSBpdCB3aWxsIGJlIG51bGwsIGFuZCBhbiBhcHBlbmRDaGlsZCBzaG91bGQgYmUgdXNlZFxyXG5cdFx0ICovXHJcblx0XHR2YXIgaVZpc2libGVJbmRleCA9IHRoaXMub0FwaS5fZm5Db2x1bW5JbmRleFRvVmlzaWJsZSggb1NldHRpbmdzLCBpRnJvbSApO1xyXG5cdFx0dmFyIGlJbnNlcnRCZWZvcmVJbmRleCA9IG51bGw7XHJcblxyXG5cdFx0aSA9IGlUbyA8IGlGcm9tID8gaVRvIDogaVRvICsgMTtcclxuXHRcdHdoaWxlICggaUluc2VydEJlZm9yZUluZGV4ID09PSBudWxsICYmIGkgPCBpQ29scyApXHJcblx0XHR7XHJcblx0XHRcdGlJbnNlcnRCZWZvcmVJbmRleCA9IHRoaXMub0FwaS5fZm5Db2x1bW5JbmRleFRvVmlzaWJsZSggb1NldHRpbmdzLCBpICk7XHJcblx0XHRcdGkrKztcclxuXHRcdH1cclxuXHJcblx0XHQvKiBIZWFkZXIgKi9cclxuXHRcdG5UcnMgPSBvU2V0dGluZ3MublRIZWFkLmdldEVsZW1lbnRzQnlUYWdOYW1lKCd0cicpO1xyXG5cdFx0Zm9yICggaT0wLCBpTGVuPW5UcnMubGVuZ3RoIDsgaTxpTGVuIDsgaSsrIClcclxuXHRcdHtcclxuXHRcdFx0Zm5Eb21Td2l0Y2goIG5UcnNbaV0sIGlWaXNpYmxlSW5kZXgsIGlJbnNlcnRCZWZvcmVJbmRleCApO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8qIEZvb3RlciAqL1xyXG5cdFx0aWYgKCBvU2V0dGluZ3MublRGb290ICE9PSBudWxsIClcclxuXHRcdHtcclxuXHRcdFx0blRycyA9IG9TZXR0aW5ncy5uVEZvb3QuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ3RyJyk7XHJcblx0XHRcdGZvciAoIGk9MCwgaUxlbj1uVHJzLmxlbmd0aCA7IGk8aUxlbiA7IGkrKyApXHJcblx0XHRcdHtcclxuXHRcdFx0XHRmbkRvbVN3aXRjaCggblRyc1tpXSwgaVZpc2libGVJbmRleCwgaUluc2VydEJlZm9yZUluZGV4ICk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHQvKiBCb2R5ICovXHJcblx0XHRmb3IgKCBpPTAsIGlMZW49b1NldHRpbmdzLmFvRGF0YS5sZW5ndGggOyBpPGlMZW4gOyBpKysgKVxyXG5cdFx0e1xyXG5cdFx0XHRpZiAoIG9TZXR0aW5ncy5hb0RhdGFbaV0ublRyICE9PSBudWxsIClcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGZuRG9tU3dpdGNoKCBvU2V0dGluZ3MuYW9EYXRhW2ldLm5UciwgaVZpc2libGVJbmRleCwgaUluc2VydEJlZm9yZUluZGV4ICk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdC8qXHJcblx0ICogTW92ZSB0aGUgaW50ZXJuYWwgYXJyYXkgZWxlbWVudHNcclxuXHQgKi9cclxuXHQvKiBDb2x1bW5zICovXHJcblx0Zm5BcnJheVN3aXRjaCggb1NldHRpbmdzLmFvQ29sdW1ucywgaUZyb20sIGlUbyApO1xyXG5cclxuXHQvLyByZWdlbmVyYXRlIHRoZSBnZXQgLyBzZXQgZnVuY3Rpb25zXHJcblx0Zm9yICggaT0wLCBpTGVuPWlDb2xzIDsgaTxpTGVuIDsgaSsrICkge1xyXG5cdFx0b1NldHRpbmdzLm9BcGkuX2ZuQ29sdW1uT3B0aW9ucyggb1NldHRpbmdzLCBpLCB7fSApO1xyXG5cdH1cclxuXHJcblx0LyogU2VhcmNoIGNvbHVtbnMgKi9cclxuXHRmbkFycmF5U3dpdGNoKCBvU2V0dGluZ3MuYW9QcmVTZWFyY2hDb2xzLCBpRnJvbSwgaVRvICk7XHJcblxyXG5cdC8qIEFycmF5IGFycmF5IC0gaW50ZXJuYWwgZGF0YSBhbm9kZXMgY2FjaGUgKi9cclxuXHRmb3IgKCBpPTAsIGlMZW49b1NldHRpbmdzLmFvRGF0YS5sZW5ndGggOyBpPGlMZW4gOyBpKysgKVxyXG5cdHtcclxuXHRcdHZhciBkYXRhID0gb1NldHRpbmdzLmFvRGF0YVtpXTtcclxuXHRcdHZhciBjZWxscyA9IGRhdGEuYW5DZWxscztcclxuXHJcblx0XHRpZiAoIGNlbGxzICkge1xyXG5cdFx0XHRmbkFycmF5U3dpdGNoKCBjZWxscywgaUZyb20sIGlUbyApO1xyXG5cclxuXHRcdFx0Ly8gTG9uZ2VyIHRlcm0sIHNob3VsZCB0aGlzIGJlIG1vdmVkIGludG8gdGhlIERhdGFUYWJsZXMnIGludmFsaWRhdGVcclxuXHRcdFx0Ly8gbWV0aG9kcz9cclxuXHRcdFx0Zm9yICggaj0wLCBqZW49Y2VsbHMubGVuZ3RoIDsgajxqZW4gOyBqKysgKSB7XHJcblx0XHRcdFx0aWYgKCBjZWxsc1tqXSAmJiBjZWxsc1tqXS5fRFRfQ2VsbEluZGV4ICkge1xyXG5cdFx0XHRcdFx0Y2VsbHNbal0uX0RUX0NlbGxJbmRleC5jb2x1bW4gPSBqO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdC8vIEZvciBET00gc291cmNlZCBkYXRhLCB0aGUgaW52YWxpZGF0ZSB3aWxsIHJlcmVhZCB0aGUgY2VsbCBpbnRvXHJcblx0XHQvLyB0aGUgZGF0YSBhcnJheSwgYnV0IGZvciBkYXRhIHNvdXJjZXMgYXMgYW4gYXJyYXksIHRoZXkgbmVlZCB0b1xyXG5cdFx0Ly8gYmUgZmxpcHBlZFxyXG5cdFx0aWYgKCBkYXRhLnNyYyAhPT0gJ2RvbScgJiYgJC5pc0FycmF5KCBkYXRhLl9hRGF0YSApICkge1xyXG5cdFx0XHRmbkFycmF5U3dpdGNoKCBkYXRhLl9hRGF0YSwgaUZyb20sIGlUbyApO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0LyogUmVwb3NpdGlvbiB0aGUgaGVhZGVyIGVsZW1lbnRzIGluIHRoZSBoZWFkZXIgbGF5b3V0IGFycmF5ICovXHJcblx0Zm9yICggaT0wLCBpTGVuPW9TZXR0aW5ncy5hb0hlYWRlci5sZW5ndGggOyBpPGlMZW4gOyBpKysgKVxyXG5cdHtcclxuXHRcdGZuQXJyYXlTd2l0Y2goIG9TZXR0aW5ncy5hb0hlYWRlcltpXSwgaUZyb20sIGlUbyApO1xyXG5cdH1cclxuXHJcblx0aWYgKCBvU2V0dGluZ3MuYW9Gb290ZXIgIT09IG51bGwgKVxyXG5cdHtcclxuXHRcdGZvciAoIGk9MCwgaUxlbj1vU2V0dGluZ3MuYW9Gb290ZXIubGVuZ3RoIDsgaTxpTGVuIDsgaSsrIClcclxuXHRcdHtcclxuXHRcdFx0Zm5BcnJheVN3aXRjaCggb1NldHRpbmdzLmFvRm9vdGVyW2ldLCBpRnJvbSwgaVRvICk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRpZiAoIGludmFsaWRhdGVSb3dzIHx8IGludmFsaWRhdGVSb3dzID09PSB1bmRlZmluZWQgKVxyXG5cdHtcclxuXHRcdCQuZm4uZGF0YVRhYmxlLkFwaSggb1NldHRpbmdzICkucm93cygpLmludmFsaWRhdGUoKTtcclxuXHR9XHJcblxyXG5cdC8qXHJcblx0ICogVXBkYXRlIERhdGFUYWJsZXMnIGV2ZW50IGhhbmRsZXJzXHJcblx0ICovXHJcblxyXG5cdC8qIFNvcnQgbGlzdGVuZXIgKi9cclxuXHRmb3IgKCBpPTAsIGlMZW49aUNvbHMgOyBpPGlMZW4gOyBpKysgKVxyXG5cdHtcclxuXHRcdCQob1NldHRpbmdzLmFvQ29sdW1uc1tpXS5uVGgpLm9mZignY2xpY2suRFQnKTtcclxuXHRcdHRoaXMub0FwaS5fZm5Tb3J0QXR0YWNoTGlzdGVuZXIoIG9TZXR0aW5ncywgb1NldHRpbmdzLmFvQ29sdW1uc1tpXS5uVGgsIGkgKTtcclxuXHR9XHJcblxyXG5cclxuXHQvKiBGaXJlIGFuIGV2ZW50IHNvIG90aGVyIHBsdWctaW5zIGNhbiB1cGRhdGUgKi9cclxuXHQkKG9TZXR0aW5ncy5vSW5zdGFuY2UpLnRyaWdnZXIoICdjb2x1bW4tcmVvcmRlci5kdCcsIFsgb1NldHRpbmdzLCB7XHJcblx0XHRmcm9tOiBpRnJvbSxcclxuXHRcdHRvOiBpVG8sXHJcblx0XHRtYXBwaW5nOiBhaUludmVydE1hcHBpbmcsXHJcblx0XHRkcm9wOiBkcm9wLFxyXG5cclxuXHRcdC8vIE9sZCBzdHlsZSBwYXJhbWV0ZXJzIGZvciBjb21wYXRpYmlsaXR5XHJcblx0XHRpRnJvbTogaUZyb20sXHJcblx0XHRpVG86IGlUbyxcclxuXHRcdGFpSW52ZXJ0TWFwcGluZzogYWlJbnZlcnRNYXBwaW5nXHJcblx0fSBdICk7XHJcbn07XHJcblxyXG4vKipcclxuICogQ29sUmVvcmRlciBwcm92aWRlcyBjb2x1bW4gdmlzaWJpbGl0eSBjb250cm9sIGZvciBEYXRhVGFibGVzXHJcbiAqIEBjbGFzcyBDb2xSZW9yZGVyXHJcbiAqIEBjb25zdHJ1Y3RvclxyXG4gKiBAcGFyYW0ge29iamVjdH0gZHQgRGF0YVRhYmxlcyBzZXR0aW5ncyBvYmplY3RcclxuICogQHBhcmFtIHtvYmplY3R9IG9wdHMgQ29sUmVvcmRlciBvcHRpb25zXHJcbiAqL1xyXG52YXIgQ29sUmVvcmRlciA9IGZ1bmN0aW9uKCBkdCwgb3B0cyApXHJcbntcclxuXHR2YXIgc2V0dGluZ3MgPSBuZXcgJC5mbi5kYXRhVGFibGUuQXBpKCBkdCApLnNldHRpbmdzKClbMF07XHJcblxyXG5cdC8vIEVuc3VyZSB0aGF0IHdlIGNhbid0IGluaXRpYWxpc2Ugb24gdGhlIHNhbWUgdGFibGUgdHdpY2VcclxuXHRpZiAoIHNldHRpbmdzLl9jb2xSZW9yZGVyICkge1xyXG5cdFx0cmV0dXJuIHNldHRpbmdzLl9jb2xSZW9yZGVyO1xyXG5cdH1cclxuXHJcblx0Ly8gQWxsb3cgdGhlIG9wdGlvbnMgdG8gYmUgYSBib29sZWFuIGZvciBkZWZhdWx0c1xyXG5cdGlmICggb3B0cyA9PT0gdHJ1ZSApIHtcclxuXHRcdG9wdHMgPSB7fTtcclxuXHR9XHJcblxyXG5cdC8vIENvbnZlcnQgZnJvbSBjYW1lbENhc2UgdG8gSHVuZ2FyaWFuLCBqdXN0IGFzIERhdGFUYWJsZXMgZG9lc1xyXG5cdHZhciBjYW1lbFRvSHVuZ2FyaWFuID0gJC5mbi5kYXRhVGFibGUuY2FtZWxUb0h1bmdhcmlhbjtcclxuXHRpZiAoIGNhbWVsVG9IdW5nYXJpYW4gKSB7XHJcblx0XHRjYW1lbFRvSHVuZ2FyaWFuKCBDb2xSZW9yZGVyLmRlZmF1bHRzLCBDb2xSZW9yZGVyLmRlZmF1bHRzLCB0cnVlICk7XHJcblx0XHRjYW1lbFRvSHVuZ2FyaWFuKCBDb2xSZW9yZGVyLmRlZmF1bHRzLCBvcHRzIHx8IHt9ICk7XHJcblx0fVxyXG5cclxuXHJcblx0LyogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKlxyXG5cdCAqIFB1YmxpYyBjbGFzcyB2YXJpYWJsZXNcclxuXHQgKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqL1xyXG5cclxuXHQvKipcclxuXHQgKiBAbmFtZXNwYWNlIFNldHRpbmdzIG9iamVjdCB3aGljaCBjb250YWlucyBjdXN0b21pc2FibGUgaW5mb3JtYXRpb24gZm9yIENvbFJlb3JkZXIgaW5zdGFuY2VcclxuXHQgKi9cclxuXHR0aGlzLnMgPSB7XHJcblx0XHQvKipcclxuXHRcdCAqIERhdGFUYWJsZXMgc2V0dGluZ3Mgb2JqZWN0XHJcblx0XHQgKiAgQHByb3BlcnR5IGR0XHJcblx0XHQgKiAgQHR5cGUgICAgIE9iamVjdFxyXG5cdFx0ICogIEBkZWZhdWx0ICBudWxsXHJcblx0XHQgKi9cclxuXHRcdFwiZHRcIjogbnVsbCxcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIEluaXRpYWxpc2F0aW9uIG9iamVjdCB1c2VkIGZvciB0aGlzIGluc3RhbmNlXHJcblx0XHQgKiAgQHByb3BlcnR5IGluaXRcclxuXHRcdCAqICBAdHlwZSAgICAgb2JqZWN0XHJcblx0XHQgKiAgQGRlZmF1bHQgIHt9XHJcblx0XHQgKi9cclxuXHRcdFwiaW5pdFwiOiAkLmV4dGVuZCggdHJ1ZSwge30sIENvbFJlb3JkZXIuZGVmYXVsdHMsIG9wdHMgKSxcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIE51bWJlciBvZiBjb2x1bW5zIHRvIGZpeCAobm90IGFsbG93IHRvIGJlIHJlb3JkZXJlZClcclxuXHRcdCAqICBAcHJvcGVydHkgZml4ZWRcclxuXHRcdCAqICBAdHlwZSAgICAgaW50XHJcblx0XHQgKiAgQGRlZmF1bHQgIDBcclxuXHRcdCAqL1xyXG5cdFx0XCJmaXhlZFwiOiAwLFxyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogTnVtYmVyIG9mIGNvbHVtbnMgdG8gZml4IGNvdW50aW5nIGZyb20gcmlnaHQgKG5vdCBhbGxvdyB0byBiZSByZW9yZGVyZWQpXHJcblx0XHQgKiAgQHByb3BlcnR5IGZpeGVkUmlnaHRcclxuXHRcdCAqICBAdHlwZSAgICAgaW50XHJcblx0XHQgKiAgQGRlZmF1bHQgIDBcclxuXHRcdCAqL1xyXG5cdFx0XCJmaXhlZFJpZ2h0XCI6IDAsXHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBDYWxsYmFjayBmdW5jdGlvbiBmb3Igb25jZSB0aGUgcmVvcmRlciBoYXMgYmVlbiBkb25lXHJcblx0XHQgKiAgQHByb3BlcnR5IHJlb3JkZXJDYWxsYmFja1xyXG5cdFx0ICogIEB0eXBlICAgICBmdW5jdGlvblxyXG5cdFx0ICogIEBkZWZhdWx0ICBudWxsXHJcblx0XHQgKi9cclxuXHRcdFwicmVvcmRlckNhbGxiYWNrXCI6IG51bGwsXHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBAbmFtZXNwYWNlIEluZm9ybWF0aW9uIHVzZWQgZm9yIHRoZSBtb3VzZSBkcmFnXHJcblx0XHQgKi9cclxuXHRcdFwibW91c2VcIjoge1xyXG5cdFx0XHRcInN0YXJ0WFwiOiAtMSxcclxuXHRcdFx0XCJzdGFydFlcIjogLTEsXHJcblx0XHRcdFwib2Zmc2V0WFwiOiAtMSxcclxuXHRcdFx0XCJvZmZzZXRZXCI6IC0xLFxyXG5cdFx0XHRcInRhcmdldFwiOiAtMSxcclxuXHRcdFx0XCJ0YXJnZXRJbmRleFwiOiAtMSxcclxuXHRcdFx0XCJmcm9tSW5kZXhcIjogLTFcclxuXHRcdH0sXHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBJbmZvcm1hdGlvbiB3aGljaCBpcyB1c2VkIGZvciBwb3NpdGlvbmluZyB0aGUgaW5zZXJ0IGN1c29yIGFuZCBrbm93aW5nIHdoZXJlIHRvIGRvIHRoZVxyXG5cdFx0ICogaW5zZXJ0LiBBcnJheSBvZiBvYmplY3RzIHdpdGggdGhlIHByb3BlcnRpZXM6XHJcblx0XHQgKiAgIHg6IHgtYXhpcyBwb3NpdGlvblxyXG5cdFx0ICogICB0bzogaW5zZXJ0IHBvaW50XHJcblx0XHQgKiAgQHByb3BlcnR5IGFvVGFyZ2V0c1xyXG5cdFx0ICogIEB0eXBlICAgICBhcnJheVxyXG5cdFx0ICogIEBkZWZhdWx0ICBbXVxyXG5cdFx0ICovXHJcblx0XHRcImFvVGFyZ2V0c1wiOiBbXVxyXG5cdH07XHJcblxyXG5cclxuXHQvKipcclxuXHQgKiBAbmFtZXNwYWNlIENvbW1vbiBhbmQgdXNlZnVsIERPTSBlbGVtZW50cyBmb3IgdGhlIGNsYXNzIGluc3RhbmNlXHJcblx0ICovXHJcblx0dGhpcy5kb20gPSB7XHJcblx0XHQvKipcclxuXHRcdCAqIERyYWdnaW5nIGVsZW1lbnQgKHRoZSBvbmUgdGhlIG1vdXNlIGlzIG1vdmluZylcclxuXHRcdCAqICBAcHJvcGVydHkgZHJhZ1xyXG5cdFx0ICogIEB0eXBlICAgICBlbGVtZW50XHJcblx0XHQgKiAgQGRlZmF1bHQgIG51bGxcclxuXHRcdCAqL1xyXG5cdFx0XCJkcmFnXCI6IG51bGwsXHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBUaGUgaW5zZXJ0IGN1cnNvclxyXG5cdFx0ICogIEBwcm9wZXJ0eSBwb2ludGVyXHJcblx0XHQgKiAgQHR5cGUgICAgIGVsZW1lbnRcclxuXHRcdCAqICBAZGVmYXVsdCAgbnVsbFxyXG5cdFx0ICovXHJcblx0XHRcInBvaW50ZXJcIjogbnVsbFxyXG5cdH07XHJcblxyXG5cclxuXHQvKiBDb25zdHJ1Y3RvciBsb2dpYyAqL1xyXG5cdHRoaXMucy5kdCA9IHNldHRpbmdzO1xyXG5cdHRoaXMucy5kdC5fY29sUmVvcmRlciA9IHRoaXM7XHJcblx0dGhpcy5fZm5Db25zdHJ1Y3QoKTtcclxuXHJcblx0cmV0dXJuIHRoaXM7XHJcbn07XHJcblxyXG5cclxuXHJcbiQuZXh0ZW5kKCBDb2xSZW9yZGVyLnByb3RvdHlwZSwge1xyXG5cdC8qICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICpcclxuXHQgKiBQdWJsaWMgbWV0aG9kc1xyXG5cdCAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICovXHJcblxyXG5cdC8qKlxyXG5cdCAqIFJlc2V0IHRoZSBjb2x1bW4gb3JkZXJpbmcgdG8gdGhlIG9yaWdpbmFsIG9yZGVyaW5nIHRoYXQgd2FzIGRldGVjdGVkIG9uXHJcblx0ICogc3RhcnQgdXAuXHJcblx0ICogIEByZXR1cm4ge3RoaXN9IFJldHVybnMgYHRoaXNgIGZvciBjaGFpbmluZy5cclxuXHQgKlxyXG5cdCAqICBAZXhhbXBsZVxyXG5cdCAqICAgIC8vIERhdGFUYWJsZXMgaW5pdGlhbGlzYXRpb24gd2l0aCBDb2xSZW9yZGVyXHJcblx0ICogICAgdmFyIHRhYmxlID0gJCgnI2V4YW1wbGUnKS5kYXRhVGFibGUoIHtcclxuXHQgKiAgICAgICAgXCJzRG9tXCI6ICdSbGZydGlwJ1xyXG5cdCAqICAgIH0gKTtcclxuXHQgKlxyXG5cdCAqICAgIC8vIEFkZCBjbGljayBldmVudCB0byBhIGJ1dHRvbiB0byByZXNldCB0aGUgb3JkZXJpbmdcclxuXHQgKiAgICAkKCcjcmVzZXRPcmRlcmluZycpLmNsaWNrKCBmdW5jdGlvbiAoZSkge1xyXG5cdCAqICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0ICogICAgICAgICQuZm4uZGF0YVRhYmxlLkNvbFJlb3JkZXIoIHRhYmxlICkuZm5SZXNldCgpO1xyXG5cdCAqICAgIH0gKTtcclxuXHQgKi9cclxuXHRcImZuUmVzZXRcIjogZnVuY3Rpb24gKClcclxuXHR7XHJcblx0XHR0aGlzLl9mbk9yZGVyQ29sdW1ucyggdGhpcy5mbk9yZGVyKCkgKTtcclxuXHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHR9LFxyXG5cclxuXHQvKipcclxuXHQgKiBgRGVwcmVjYXRlZGAgLSBHZXQgdGhlIGN1cnJlbnQgb3JkZXIgb2YgdGhlIGNvbHVtbnMsIGFzIGFuIGFycmF5LlxyXG5cdCAqICBAcmV0dXJuIHthcnJheX0gQXJyYXkgb2YgY29sdW1uIGlkZW50aWZpZXJzXHJcblx0ICogIEBkZXByZWNhdGVkIGBmbk9yZGVyYCBzaG91bGQgYmUgdXNlZCBpbiBwcmVmZXJlbmNlIHRvIHRoaXMgbWV0aG9kLlxyXG5cdCAqICAgICAgYGZuT3JkZXJgIGFjdHMgYXMgYSBnZXR0ZXIvc2V0dGVyLlxyXG5cdCAqL1xyXG5cdFwiZm5HZXRDdXJyZW50T3JkZXJcIjogZnVuY3Rpb24gKClcclxuXHR7XHJcblx0XHRyZXR1cm4gdGhpcy5mbk9yZGVyKCk7XHJcblx0fSxcclxuXHJcblx0LyoqXHJcblx0ICogR2V0IHRoZSBjdXJyZW50IG9yZGVyIG9mIHRoZSBjb2x1bW5zLCBhcyBhbiBhcnJheS4gTm90ZSB0aGF0IHRoZSB2YWx1ZXNcclxuXHQgKiBnaXZlbiBpbiB0aGUgYXJyYXkgYXJlIHVuaXF1ZSBpZGVudGlmaWVycyBmb3IgZWFjaCBjb2x1bW4uIEN1cnJlbnRseVxyXG5cdCAqIHRoZXNlIGFyZSB0aGUgb3JpZ2luYWwgb3JkZXJpbmcgb2YgdGhlIGNvbHVtbnMgdGhhdCB3YXMgZGV0ZWN0ZWQgb25cclxuXHQgKiBzdGFydCB1cCwgYnV0IHRoaXMgY291bGQgcG90ZW50aWFsbHkgY2hhbmdlIGluIGZ1dHVyZS5cclxuXHQgKiAgQHJldHVybiB7YXJyYXl9IEFycmF5IG9mIGNvbHVtbiBpZGVudGlmaWVyc1xyXG5cdCAqXHJcblx0ICogIEBleGFtcGxlXHJcblx0ICogICAgLy8gR2V0IGNvbHVtbiBvcmRlcmluZyBmb3IgdGhlIHRhYmxlXHJcblx0ICogICAgdmFyIG9yZGVyID0gJC5mbi5kYXRhVGFibGUuQ29sUmVvcmRlciggZGF0YVRhYmxlICkuZm5PcmRlcigpO1xyXG5cdCAqLy8qKlxyXG5cdCAqIFNldCB0aGUgb3JkZXIgb2YgdGhlIGNvbHVtbnMsIGZyb20gdGhlIHBvc2l0aW9ucyBpZGVudGlmaWVkIGluIHRoZVxyXG5cdCAqIG9yZGVyaW5nIGFycmF5IGdpdmVuLiBOb3RlIHRoYXQgQ29sUmVvcmRlciB0YWtlcyBhIGJydXRlIGZvcmNlIGFwcHJvYWNoXHJcblx0ICogdG8gcmVvcmRlcmluZywgc28gaXQgaXMgcG9zc2libGUgbXVsdGlwbGUgcmVvcmRlcmluZyBldmVudHMgd2lsbCBvY2N1clxyXG5cdCAqIGJlZm9yZSB0aGUgZmluYWwgb3JkZXIgaXMgc2V0dGxlZCB1cG9uLlxyXG5cdCAqICBAcGFyYW0ge2FycmF5fSBbc2V0XSBBcnJheSBvZiBjb2x1bW4gaWRlbnRpZmllcnMgaW4gdGhlIG5ldyBvcmRlci4gTm90ZVxyXG5cdCAqICAgIHRoYXQgZXZlcnkgY29sdW1uIG11c3QgYmUgaW5jbHVkZWQsIHVuaXF1ZWx5LCBpbiB0aGlzIGFycmF5LlxyXG5cdCAqICBAcmV0dXJuIHt0aGlzfSBSZXR1cm5zIGB0aGlzYCBmb3IgY2hhaW5pbmcuXHJcblx0ICpcclxuXHQgKiAgQGV4YW1wbGVcclxuXHQgKiAgICAvLyBTd2FwIHRoZSBmaXJzdCBhbmQgc2Vjb25kIGNvbHVtbnNcclxuXHQgKiAgICAkLmZuLmRhdGFUYWJsZS5Db2xSZW9yZGVyKCBkYXRhVGFibGUgKS5mbk9yZGVyKCBbMSwgMCwgMiwgMywgNF0gKTtcclxuXHQgKlxyXG5cdCAqICBAZXhhbXBsZVxyXG5cdCAqICAgIC8vIE1vdmUgdGhlIGZpcnN0IGNvbHVtbiB0byB0aGUgZW5kIGZvciB0aGUgdGFibGUgYCNleGFtcGxlYFxyXG5cdCAqICAgIHZhciBjdXJyID0gJC5mbi5kYXRhVGFibGUuQ29sUmVvcmRlciggJyNleGFtcGxlJyApLmZuT3JkZXIoKTtcclxuXHQgKiAgICB2YXIgZmlyc3QgPSBjdXJyLnNoaWZ0KCk7XHJcblx0ICogICAgY3Vyci5wdXNoKCBmaXJzdCApO1xyXG5cdCAqICAgICQuZm4uZGF0YVRhYmxlLkNvbFJlb3JkZXIoICcjZXhhbXBsZScgKS5mbk9yZGVyKCBjdXJyICk7XHJcblx0ICpcclxuXHQgKiAgQGV4YW1wbGVcclxuXHQgKiAgICAvLyBSZXZlcnNlIHRoZSB0YWJsZSdzIG9yZGVyXHJcblx0ICogICAgJC5mbi5kYXRhVGFibGUuQ29sUmVvcmRlciggJyNleGFtcGxlJyApLmZuT3JkZXIoXHJcblx0ICogICAgICAkLmZuLmRhdGFUYWJsZS5Db2xSZW9yZGVyKCAnI2V4YW1wbGUnICkuZm5PcmRlcigpLnJldmVyc2UoKVxyXG5cdCAqICAgICk7XHJcblx0ICovXHJcblx0XCJmbk9yZGVyXCI6IGZ1bmN0aW9uICggc2V0LCBvcmlnaW5hbCApXHJcblx0e1xyXG5cdFx0dmFyIGEgPSBbXSwgaSwgaWVuLCBqLCBqZW47XHJcblx0XHR2YXIgY29sdW1ucyA9IHRoaXMucy5kdC5hb0NvbHVtbnM7XHJcblxyXG5cdFx0aWYgKCBzZXQgPT09IHVuZGVmaW5lZCApe1xyXG5cdFx0XHRmb3IgKCBpPTAsIGllbj1jb2x1bW5zLmxlbmd0aCA7IGk8aWVuIDsgaSsrICkge1xyXG5cdFx0XHRcdGEucHVzaCggY29sdW1uc1tpXS5fQ29sUmVvcmRlcl9pT3JpZ0NvbCApO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRyZXR1cm4gYTtcclxuXHRcdH1cclxuXHJcblx0XHQvLyBUaGUgb3JkZXIgZ2l2ZW4gaXMgYmFzZWQgb24gdGhlIG9yaWdpbmFsIGluZGV4ZXMsIHJhdGhlciB0aGFuIHRoZVxyXG5cdFx0Ly8gZXhpc3Rpbmcgb25lcywgc28gd2UgbmVlZCB0byB0cmFuc2xhdGUgZnJvbSB0aGUgb3JpZ2luYWwgdG8gY3VycmVudFxyXG5cdFx0Ly8gYmVmb3JlIHRoZW4gZG9pbmcgdGhlIG9yZGVyXHJcblx0XHRpZiAoIG9yaWdpbmFsICkge1xyXG5cdFx0XHR2YXIgb3JkZXIgPSB0aGlzLmZuT3JkZXIoKTtcclxuXHJcblx0XHRcdGZvciAoIGk9MCwgaWVuPXNldC5sZW5ndGggOyBpPGllbiA7IGkrKyApIHtcclxuXHRcdFx0XHRhLnB1c2goICQuaW5BcnJheSggc2V0W2ldLCBvcmRlciApICk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHNldCA9IGE7XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5fZm5PcmRlckNvbHVtbnMoIGZuSW52ZXJ0S2V5VmFsdWVzKCBzZXQgKSApO1xyXG5cclxuXHRcdHJldHVybiB0aGlzO1xyXG5cdH0sXHJcblxyXG5cclxuXHQvKipcclxuXHQgKiBDb252ZXJ0IGZyb20gdGhlIG9yaWdpbmFsIGNvbHVtbiBpbmRleCwgdG8gdGhlIG9yaWdpbmFsXHJcblx0ICpcclxuXHQgKiBAcGFyYW0gIHtpbnR8YXJyYXl9IGlkeCBJbmRleChlcykgdG8gY29udmVydFxyXG5cdCAqIEBwYXJhbSAge3N0cmluZ30gZGlyIFRyYW5zcG9zZSBkaXJlY3Rpb24gLSBgZnJvbU9yaWdpbmFsYCAvIGB0b0N1cnJlbnRgXHJcblx0ICogICBvciBgJ3RvT3JpZ2luYWxgIC8gYGZyb21DdXJyZW50YFxyXG5cdCAqIEByZXR1cm4ge2ludHxhcnJheX0gICAgIENvbnZlcnRlZCB2YWx1ZXNcclxuXHQgKi9cclxuXHRmblRyYW5zcG9zZTogZnVuY3Rpb24gKCBpZHgsIGRpciApXHJcblx0e1xyXG5cdFx0aWYgKCAhIGRpciApIHtcclxuXHRcdFx0ZGlyID0gJ3RvQ3VycmVudCc7XHJcblx0XHR9XHJcblxyXG5cdFx0dmFyIG9yZGVyID0gdGhpcy5mbk9yZGVyKCk7XHJcblx0XHR2YXIgY29sdW1ucyA9IHRoaXMucy5kdC5hb0NvbHVtbnM7XHJcblxyXG5cdFx0aWYgKCBkaXIgPT09ICd0b0N1cnJlbnQnICkge1xyXG5cdFx0XHQvLyBHaXZlbiBhbiBvcmlnaW5hbCBpbmRleCwgd2FudCB0aGUgY3VycmVudFxyXG5cdFx0XHRyZXR1cm4gISAkLmlzQXJyYXkoIGlkeCApID9cclxuXHRcdFx0XHQkLmluQXJyYXkoIGlkeCwgb3JkZXIgKSA6XHJcblx0XHRcdFx0JC5tYXAoIGlkeCwgZnVuY3Rpb24gKCBpbmRleCApIHtcclxuXHRcdFx0XHRcdHJldHVybiAkLmluQXJyYXkoIGluZGV4LCBvcmRlciApO1xyXG5cdFx0XHRcdH0gKTtcclxuXHRcdH1cclxuXHRcdGVsc2Uge1xyXG5cdFx0XHQvLyBHaXZlbiBhIGN1cnJlbnQgaW5kZXgsIHdhbnQgdGhlIG9yaWdpbmFsXHJcblx0XHRcdHJldHVybiAhICQuaXNBcnJheSggaWR4ICkgP1xyXG5cdFx0XHRcdGNvbHVtbnNbaWR4XS5fQ29sUmVvcmRlcl9pT3JpZ0NvbCA6XHJcblx0XHRcdFx0JC5tYXAoIGlkeCwgZnVuY3Rpb24gKCBpbmRleCApIHtcclxuXHRcdFx0XHRcdHJldHVybiBjb2x1bW5zW2luZGV4XS5fQ29sUmVvcmRlcl9pT3JpZ0NvbDtcclxuXHRcdFx0XHR9ICk7XHJcblx0XHR9XHJcblx0fSxcclxuXHJcblxyXG5cdC8qICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICpcclxuXHQgKiBQcml2YXRlIG1ldGhvZHMgKHRoZXkgYXJlIG9mIGNvdXJzZSBwdWJsaWMgaW4gSlMsIGJ1dCByZWNvbW1lbmRlZCBhcyBwcml2YXRlKVxyXG5cdCAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICovXHJcblxyXG5cdC8qKlxyXG5cdCAqIENvbnN0cnVjdG9yIGxvZ2ljXHJcblx0ICogIEBtZXRob2QgIF9mbkNvbnN0cnVjdFxyXG5cdCAqICBAcmV0dXJucyB2b2lkXHJcblx0ICogIEBwcml2YXRlXHJcblx0ICovXHJcblx0XCJfZm5Db25zdHJ1Y3RcIjogZnVuY3Rpb24gKClcclxuXHR7XHJcblx0XHR2YXIgdGhhdCA9IHRoaXM7XHJcblx0XHR2YXIgaUxlbiA9IHRoaXMucy5kdC5hb0NvbHVtbnMubGVuZ3RoO1xyXG5cdFx0dmFyIHRhYmxlID0gdGhpcy5zLmR0Lm5UYWJsZTtcclxuXHRcdHZhciBpO1xyXG5cclxuXHRcdC8qIENvbHVtbnMgZGlzY291bnRlZCBmcm9tIHJlb3JkZXJpbmcgLSBjb3VudGluZyBsZWZ0IHRvIHJpZ2h0ICovXHJcblx0XHRpZiAoIHRoaXMucy5pbml0LmlGaXhlZENvbHVtbnMgKVxyXG5cdFx0e1xyXG5cdFx0XHR0aGlzLnMuZml4ZWQgPSB0aGlzLnMuaW5pdC5pRml4ZWRDb2x1bW5zO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmICggdGhpcy5zLmluaXQuaUZpeGVkQ29sdW1uc0xlZnQgKVxyXG5cdFx0e1xyXG5cdFx0XHR0aGlzLnMuZml4ZWQgPSB0aGlzLnMuaW5pdC5pRml4ZWRDb2x1bW5zTGVmdDtcclxuXHRcdH1cclxuXHJcblx0XHQvKiBDb2x1bW5zIGRpc2NvdW50ZWQgZnJvbSByZW9yZGVyaW5nIC0gY291bnRpbmcgcmlnaHQgdG8gbGVmdCAqL1xyXG5cdFx0dGhpcy5zLmZpeGVkUmlnaHQgPSB0aGlzLnMuaW5pdC5pRml4ZWRDb2x1bW5zUmlnaHQgP1xyXG5cdFx0XHR0aGlzLnMuaW5pdC5pRml4ZWRDb2x1bW5zUmlnaHQgOlxyXG5cdFx0XHQwO1xyXG5cclxuXHRcdC8qIERyb3AgY2FsbGJhY2sgaW5pdGlhbGlzYXRpb24gb3B0aW9uICovXHJcblx0XHRpZiAoIHRoaXMucy5pbml0LmZuUmVvcmRlckNhbGxiYWNrIClcclxuXHRcdHtcclxuXHRcdFx0dGhpcy5zLnJlb3JkZXJDYWxsYmFjayA9IHRoaXMucy5pbml0LmZuUmVvcmRlckNhbGxiYWNrO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8qIEFkZCBldmVudCBoYW5kbGVycyBmb3IgdGhlIGRyYWcgYW5kIGRyb3AsIGFuZCBhbHNvIG1hcmsgdGhlIG9yaWdpbmFsIGNvbHVtbiBvcmRlciAqL1xyXG5cdFx0Zm9yICggaSA9IDA7IGkgPCBpTGVuOyBpKysgKVxyXG5cdFx0e1xyXG5cdFx0XHRpZiAoIGkgPiB0aGlzLnMuZml4ZWQtMSAmJiBpIDwgaUxlbiAtIHRoaXMucy5maXhlZFJpZ2h0IClcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHRoaXMuX2ZuTW91c2VMaXN0ZW5lciggaSwgdGhpcy5zLmR0LmFvQ29sdW1uc1tpXS5uVGggKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0LyogTWFyayB0aGUgb3JpZ2luYWwgY29sdW1uIG9yZGVyIGZvciBsYXRlciByZWZlcmVuY2UgKi9cclxuXHRcdFx0dGhpcy5zLmR0LmFvQ29sdW1uc1tpXS5fQ29sUmVvcmRlcl9pT3JpZ0NvbCA9IGk7XHJcblx0XHR9XHJcblxyXG5cdFx0LyogU3RhdGUgc2F2aW5nICovXHJcblx0XHR0aGlzLnMuZHQub0FwaS5fZm5DYWxsYmFja1JlZyggdGhpcy5zLmR0LCAnYW9TdGF0ZVNhdmVQYXJhbXMnLCBmdW5jdGlvbiAob1MsIG9EYXRhKSB7XHJcblx0XHRcdHRoYXQuX2ZuU3RhdGVTYXZlLmNhbGwoIHRoYXQsIG9EYXRhICk7XHJcblx0XHR9LCBcIkNvbFJlb3JkZXJfU3RhdGVcIiApO1xyXG5cclxuXHRcdC8qIEFuIGluaXRpYWwgY29sdW1uIG9yZGVyIGhhcyBiZWVuIHNwZWNpZmllZCAqL1xyXG5cdFx0dmFyIGFpT3JkZXIgPSBudWxsO1xyXG5cdFx0aWYgKCB0aGlzLnMuaW5pdC5haU9yZGVyIClcclxuXHRcdHtcclxuXHRcdFx0YWlPcmRlciA9IHRoaXMucy5pbml0LmFpT3JkZXIuc2xpY2UoKTtcclxuXHRcdH1cclxuXHJcblx0XHQvKiBTdGF0ZSBsb2FkaW5nLCBvdmVycmlkZXMgdGhlIGNvbHVtbiBvcmRlciBnaXZlbiAqL1xyXG5cdFx0aWYgKCB0aGlzLnMuZHQub0xvYWRlZFN0YXRlICYmIHR5cGVvZiB0aGlzLnMuZHQub0xvYWRlZFN0YXRlLkNvbFJlb3JkZXIgIT0gJ3VuZGVmaW5lZCcgJiZcclxuXHRcdCAgdGhpcy5zLmR0Lm9Mb2FkZWRTdGF0ZS5Db2xSZW9yZGVyLmxlbmd0aCA9PSB0aGlzLnMuZHQuYW9Db2x1bW5zLmxlbmd0aCApXHJcblx0XHR7XHJcblx0XHRcdGFpT3JkZXIgPSB0aGlzLnMuZHQub0xvYWRlZFN0YXRlLkNvbFJlb3JkZXI7XHJcblx0XHR9XHJcblxyXG5cdFx0LyogSWYgd2UgaGF2ZSBhbiBvcmRlciB0byBhcHBseSAtIGRvIHNvICovXHJcblx0XHRpZiAoIGFpT3JkZXIgKVxyXG5cdFx0e1xyXG5cdFx0XHQvKiBXZSBtaWdodCBiZSBjYWxsZWQgZHVyaW5nIG9yIGFmdGVyIHRoZSBEYXRhVGFibGVzIGluaXRpYWxpc2F0aW9uLiBJZiBiZWZvcmUsIHRoZW4gd2UgbmVlZFxyXG5cdFx0XHQgKiB0byB3YWl0IHVudGlsIHRoZSBkcmF3IGlzIGRvbmUsIGlmIGFmdGVyLCB0aGVuIGRvIHdoYXQgd2UgbmVlZCB0byBkbyByaWdodCBhd2F5XHJcblx0XHRcdCAqL1xyXG5cdFx0XHRpZiAoICF0aGF0LnMuZHQuX2JJbml0Q29tcGxldGUgKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0dmFyIGJEb25lID0gZmFsc2U7XHJcblx0XHRcdFx0JCh0YWJsZSkub24oICdkcmF3LmR0LmNvbFJlb3JkZXInLCBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdFx0XHRpZiAoICF0aGF0LnMuZHQuX2JJbml0Q29tcGxldGUgJiYgIWJEb25lIClcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0YkRvbmUgPSB0cnVlO1xyXG5cdFx0XHRcdFx0XHR2YXIgcmVzb3J0ID0gZm5JbnZlcnRLZXlWYWx1ZXMoIGFpT3JkZXIgKTtcclxuXHRcdFx0XHRcdFx0dGhhdC5fZm5PcmRlckNvbHVtbnMuY2FsbCggdGhhdCwgcmVzb3J0ICk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSApO1xyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2VcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHZhciByZXNvcnQgPSBmbkludmVydEtleVZhbHVlcyggYWlPcmRlciApO1xyXG5cdFx0XHRcdHRoYXQuX2ZuT3JkZXJDb2x1bW5zLmNhbGwoIHRoYXQsIHJlc29ydCApO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRlbHNlIHtcclxuXHRcdFx0dGhpcy5fZm5TZXRDb2x1bW5JbmRleGVzKCk7XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gRGVzdHJveSBjbGVhbiB1cFxyXG5cdFx0JCh0YWJsZSkub24oICdkZXN0cm95LmR0LmNvbFJlb3JkZXInLCBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdCQodGFibGUpLm9mZiggJ2Rlc3Ryb3kuZHQuY29sUmVvcmRlciBkcmF3LmR0LmNvbFJlb3JkZXInICk7XHJcblx0XHRcdCQodGhhdC5zLmR0Lm5USGVhZCkuZmluZCggJyonICkub2ZmKCAnLkNvbFJlb3JkZXInICk7XHJcblxyXG5cdFx0XHQkLmVhY2goIHRoYXQucy5kdC5hb0NvbHVtbnMsIGZ1bmN0aW9uIChpLCBjb2x1bW4pIHtcclxuXHRcdFx0XHQkKGNvbHVtbi5uVGgpLnJlbW92ZUF0dHIoJ2RhdGEtY29sdW1uLWluZGV4Jyk7XHJcblx0XHRcdH0gKTtcclxuXHJcblx0XHRcdHRoYXQucy5kdC5fY29sUmVvcmRlciA9IG51bGw7XHJcblx0XHRcdHRoYXQucyA9IG51bGw7XHJcblx0XHR9ICk7XHJcblx0fSxcclxuXHJcblxyXG5cdC8qKlxyXG5cdCAqIFNldCB0aGUgY29sdW1uIG9yZGVyIGZyb20gYW4gYXJyYXlcclxuXHQgKiAgQG1ldGhvZCAgX2ZuT3JkZXJDb2x1bW5zXHJcblx0ICogIEBwYXJhbSAgIGFycmF5IGEgQW4gYXJyYXkgb2YgaW50ZWdlcnMgd2hpY2ggZGljdGF0ZSB0aGUgY29sdW1uIG9yZGVyIHRoYXQgc2hvdWxkIGJlIGFwcGxpZWRcclxuXHQgKiAgQHJldHVybnMgdm9pZFxyXG5cdCAqICBAcHJpdmF0ZVxyXG5cdCAqL1xyXG5cdFwiX2ZuT3JkZXJDb2x1bW5zXCI6IGZ1bmN0aW9uICggYSApXHJcblx0e1xyXG5cdFx0dmFyIGNoYW5nZWQgPSBmYWxzZTtcclxuXHJcblx0XHRpZiAoIGEubGVuZ3RoICE9IHRoaXMucy5kdC5hb0NvbHVtbnMubGVuZ3RoIClcclxuXHRcdHtcclxuXHRcdFx0dGhpcy5zLmR0Lm9JbnN0YW5jZS5vQXBpLl9mbkxvZyggdGhpcy5zLmR0LCAxLCBcIkNvbFJlb3JkZXIgLSBhcnJheSByZW9yZGVyIGRvZXMgbm90IFwiK1xyXG5cdFx0XHRcdFwibWF0Y2gga25vd24gbnVtYmVyIG9mIGNvbHVtbnMuIFNraXBwaW5nLlwiICk7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHJcblx0XHRmb3IgKCB2YXIgaT0wLCBpTGVuPWEubGVuZ3RoIDsgaTxpTGVuIDsgaSsrIClcclxuXHRcdHtcclxuXHRcdFx0dmFyIGN1cnJJbmRleCA9ICQuaW5BcnJheSggaSwgYSApO1xyXG5cdFx0XHRpZiAoIGkgIT0gY3VyckluZGV4IClcclxuXHRcdFx0e1xyXG5cdFx0XHRcdC8qIFJlb3JkZXIgb3VyIHN3aXRjaGluZyBhcnJheSAqL1xyXG5cdFx0XHRcdGZuQXJyYXlTd2l0Y2goIGEsIGN1cnJJbmRleCwgaSApO1xyXG5cclxuXHRcdFx0XHQvKiBEbyB0aGUgY29sdW1uIHJlb3JkZXIgaW4gdGhlIHRhYmxlICovXHJcblx0XHRcdFx0dGhpcy5zLmR0Lm9JbnN0YW5jZS5mbkNvbFJlb3JkZXIoIGN1cnJJbmRleCwgaSwgdHJ1ZSwgZmFsc2UgKTtcclxuXHJcblx0XHRcdFx0Y2hhbmdlZCA9IHRydWU7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHQkLmZuLmRhdGFUYWJsZS5BcGkoIHRoaXMucy5kdCApLnJvd3MoKS5pbnZhbGlkYXRlKCk7XHJcblxyXG5cdFx0dGhpcy5fZm5TZXRDb2x1bW5JbmRleGVzKCk7XHJcblxyXG5cdFx0Ly8gSGFzIGFueXRoaW5nIGFjdHVhbGx5IGNoYW5nZWQ/IElmIG5vdCwgdGhlbiBub3RoaW5nIGVsc2UgdG8gZG9cclxuXHRcdGlmICggISBjaGFuZ2VkICkge1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblxyXG5cdFx0LyogV2hlbiBzY3JvbGxpbmcgd2UgbmVlZCB0byByZWNhbGN1bGF0ZSB0aGUgY29sdW1uIHNpemVzIHRvIGFsbG93IGZvciB0aGUgc2hpZnQgKi9cclxuXHRcdGlmICggdGhpcy5zLmR0Lm9TY3JvbGwuc1ggIT09IFwiXCIgfHwgdGhpcy5zLmR0Lm9TY3JvbGwuc1kgIT09IFwiXCIgKVxyXG5cdFx0e1xyXG5cdFx0XHR0aGlzLnMuZHQub0luc3RhbmNlLmZuQWRqdXN0Q29sdW1uU2l6aW5nKCBmYWxzZSApO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8qIFNhdmUgdGhlIHN0YXRlICovXHJcblx0XHR0aGlzLnMuZHQub0luc3RhbmNlLm9BcGkuX2ZuU2F2ZVN0YXRlKCB0aGlzLnMuZHQgKTtcclxuXHJcblx0XHRpZiAoIHRoaXMucy5yZW9yZGVyQ2FsbGJhY2sgIT09IG51bGwgKVxyXG5cdFx0e1xyXG5cdFx0XHR0aGlzLnMucmVvcmRlckNhbGxiYWNrLmNhbGwoIHRoaXMgKTtcclxuXHRcdH1cclxuXHR9LFxyXG5cclxuXHJcblx0LyoqXHJcblx0ICogQmVjYXVzZSB3ZSBjaGFuZ2UgdGhlIGluZGV4ZXMgb2YgY29sdW1ucyBpbiB0aGUgdGFibGUsIHJlbGF0aXZlIHRvIHRoZWlyIHN0YXJ0aW5nIHBvaW50XHJcblx0ICogd2UgbmVlZCB0byByZW9yZGVyIHRoZSBzdGF0ZSBjb2x1bW5zIHRvIHdoYXQgdGhleSBhcmUgYXQgdGhlIHN0YXJ0aW5nIHBvaW50IHNvIHdlIGNhblxyXG5cdCAqIHRoZW4gcmVhcnJhbmdlIHRoZW0gYWdhaW4gb24gc3RhdGUgbG9hZCFcclxuXHQgKiAgQG1ldGhvZCAgX2ZuU3RhdGVTYXZlXHJcblx0ICogIEBwYXJhbSAgIG9iamVjdCBvU3RhdGUgRGF0YVRhYmxlcyBzdGF0ZVxyXG5cdCAqICBAcmV0dXJucyBzdHJpbmcgSlNPTiBlbmNvZGVkIGNvb2tpZSBzdHJpbmcgZm9yIERhdGFUYWJsZXNcclxuXHQgKiAgQHByaXZhdGVcclxuXHQgKi9cclxuXHRcIl9mblN0YXRlU2F2ZVwiOiBmdW5jdGlvbiAoIG9TdGF0ZSApXHJcblx0e1xyXG5cdFx0dmFyIGksIGlMZW4sIGFDb3B5LCBpT3JpZ0NvbHVtbjtcclxuXHRcdHZhciBvU2V0dGluZ3MgPSB0aGlzLnMuZHQ7XHJcblx0XHR2YXIgY29sdW1ucyA9IG9TZXR0aW5ncy5hb0NvbHVtbnM7XHJcblxyXG5cdFx0b1N0YXRlLkNvbFJlb3JkZXIgPSBbXTtcclxuXHJcblx0XHQvKiBTb3J0aW5nICovXHJcblx0XHRpZiAoIG9TdGF0ZS5hYVNvcnRpbmcgKSB7XHJcblx0XHRcdC8vIDEuMTAuMC1cclxuXHRcdFx0Zm9yICggaT0wIDsgaTxvU3RhdGUuYWFTb3J0aW5nLmxlbmd0aCA7IGkrKyApIHtcclxuXHRcdFx0XHRvU3RhdGUuYWFTb3J0aW5nW2ldWzBdID0gY29sdW1uc1sgb1N0YXRlLmFhU29ydGluZ1tpXVswXSBdLl9Db2xSZW9yZGVyX2lPcmlnQ29sO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHR2YXIgYVNlYXJjaENvcHkgPSAkLmV4dGVuZCggdHJ1ZSwgW10sIG9TdGF0ZS5hb1NlYXJjaENvbHMgKTtcclxuXHJcblx0XHRcdGZvciAoIGk9MCwgaUxlbj1jb2x1bW5zLmxlbmd0aCA7IGk8aUxlbiA7IGkrKyApXHJcblx0XHRcdHtcclxuXHRcdFx0XHRpT3JpZ0NvbHVtbiA9IGNvbHVtbnNbaV0uX0NvbFJlb3JkZXJfaU9yaWdDb2w7XHJcblxyXG5cdFx0XHRcdC8qIENvbHVtbiBmaWx0ZXIgKi9cclxuXHRcdFx0XHRvU3RhdGUuYW9TZWFyY2hDb2xzWyBpT3JpZ0NvbHVtbiBdID0gYVNlYXJjaENvcHlbaV07XHJcblxyXG5cdFx0XHRcdC8qIFZpc2liaWxpdHkgKi9cclxuXHRcdFx0XHRvU3RhdGUuYWJWaXNDb2xzWyBpT3JpZ0NvbHVtbiBdID0gY29sdW1uc1tpXS5iVmlzaWJsZTtcclxuXHJcblx0XHRcdFx0LyogQ29sdW1uIHJlb3JkZXJpbmcgKi9cclxuXHRcdFx0XHRvU3RhdGUuQ29sUmVvcmRlci5wdXNoKCBpT3JpZ0NvbHVtbiApO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRlbHNlIGlmICggb1N0YXRlLm9yZGVyICkge1xyXG5cdFx0XHQvLyAxLjEwLjErXHJcblx0XHRcdGZvciAoIGk9MCA7IGk8b1N0YXRlLm9yZGVyLmxlbmd0aCA7IGkrKyApIHtcclxuXHRcdFx0XHRvU3RhdGUub3JkZXJbaV1bMF0gPSBjb2x1bW5zWyBvU3RhdGUub3JkZXJbaV1bMF0gXS5fQ29sUmVvcmRlcl9pT3JpZ0NvbDtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0dmFyIHN0YXRlQ29sdW1uc0NvcHkgPSAkLmV4dGVuZCggdHJ1ZSwgW10sIG9TdGF0ZS5jb2x1bW5zICk7XHJcblxyXG5cdFx0XHRmb3IgKCBpPTAsIGlMZW49Y29sdW1ucy5sZW5ndGggOyBpPGlMZW4gOyBpKysgKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0aU9yaWdDb2x1bW4gPSBjb2x1bW5zW2ldLl9Db2xSZW9yZGVyX2lPcmlnQ29sO1xyXG5cclxuXHRcdFx0XHQvKiBDb2x1bW5zICovXHJcblx0XHRcdFx0b1N0YXRlLmNvbHVtbnNbIGlPcmlnQ29sdW1uIF0gPSBzdGF0ZUNvbHVtbnNDb3B5W2ldO1xyXG5cclxuXHRcdFx0XHQvKiBDb2x1bW4gcmVvcmRlcmluZyAqL1xyXG5cdFx0XHRcdG9TdGF0ZS5Db2xSZW9yZGVyLnB1c2goIGlPcmlnQ29sdW1uICk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9LFxyXG5cclxuXHJcblx0LyogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKlxyXG5cdCAqIE1vdXNlIGRyb3AgYW5kIGRyYWdcclxuXHQgKi9cclxuXHJcblx0LyoqXHJcblx0ICogQWRkIGEgbW91c2UgZG93biBsaXN0ZW5lciB0byBhIHBhcnRpY2x1YXIgVEggZWxlbWVudFxyXG5cdCAqICBAbWV0aG9kICBfZm5Nb3VzZUxpc3RlbmVyXHJcblx0ICogIEBwYXJhbSAgIGludCBpIENvbHVtbiBpbmRleFxyXG5cdCAqICBAcGFyYW0gICBlbGVtZW50IG5UaCBUSCBlbGVtZW50IGNsaWNrZWQgb25cclxuXHQgKiAgQHJldHVybnMgdm9pZFxyXG5cdCAqICBAcHJpdmF0ZVxyXG5cdCAqL1xyXG5cdFwiX2ZuTW91c2VMaXN0ZW5lclwiOiBmdW5jdGlvbiAoIGksIG5UaCApXHJcblx0e1xyXG5cdFx0dmFyIHRoYXQgPSB0aGlzO1xyXG5cdFx0JChuVGgpXHJcblx0XHRcdC5vbiggJ21vdXNlZG93bi5Db2xSZW9yZGVyJywgZnVuY3Rpb24gKGUpIHtcclxuXHRcdFx0XHR0aGF0Ll9mbk1vdXNlRG93bi5jYWxsKCB0aGF0LCBlLCBuVGggKTtcclxuXHRcdFx0fSApXHJcblx0XHRcdC5vbiggJ3RvdWNoc3RhcnQuQ29sUmVvcmRlcicsIGZ1bmN0aW9uIChlKSB7XHJcblx0XHRcdFx0dGhhdC5fZm5Nb3VzZURvd24uY2FsbCggdGhhdCwgZSwgblRoICk7XHJcblx0XHRcdH0gKTtcclxuXHR9LFxyXG5cclxuXHJcblx0LyoqXHJcblx0ICogTW91c2UgZG93biBvbiBhIFRIIGVsZW1lbnQgaW4gdGhlIHRhYmxlIGhlYWRlclxyXG5cdCAqICBAbWV0aG9kICBfZm5Nb3VzZURvd25cclxuXHQgKiAgQHBhcmFtICAgZXZlbnQgZSBNb3VzZSBldmVudFxyXG5cdCAqICBAcGFyYW0gICBlbGVtZW50IG5UaCBUSCBlbGVtZW50IHRvIGJlIGRyYWdnZWRcclxuXHQgKiAgQHJldHVybnMgdm9pZFxyXG5cdCAqICBAcHJpdmF0ZVxyXG5cdCAqL1xyXG5cdFwiX2ZuTW91c2VEb3duXCI6IGZ1bmN0aW9uICggZSwgblRoIClcclxuXHR7XHJcblx0XHR2YXIgdGhhdCA9IHRoaXM7XHJcblxyXG5cdFx0LyogU3RvcmUgaW5mb3JtYXRpb24gYWJvdXQgdGhlIG1vdXNlIHBvc2l0aW9uICovXHJcblx0XHR2YXIgdGFyZ2V0ID0gJChlLnRhcmdldCkuY2xvc2VzdCgndGgsIHRkJyk7XHJcblx0XHR2YXIgb2Zmc2V0ID0gdGFyZ2V0Lm9mZnNldCgpO1xyXG5cdFx0dmFyIGlkeCA9IHBhcnNlSW50KCAkKG5UaCkuYXR0cignZGF0YS1jb2x1bW4taW5kZXgnKSwgMTAgKTtcclxuXHJcblx0XHRpZiAoIGlkeCA9PT0gdW5kZWZpbmVkICkge1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5zLm1vdXNlLnN0YXJ0WCA9IHRoaXMuX2ZuQ3Vyc29yUG9zaXRpb24oIGUsICdwYWdlWCcgKTtcclxuXHRcdHRoaXMucy5tb3VzZS5zdGFydFkgPSB0aGlzLl9mbkN1cnNvclBvc2l0aW9uKCBlLCAncGFnZVknICk7XHJcblx0XHR0aGlzLnMubW91c2Uub2Zmc2V0WCA9IHRoaXMuX2ZuQ3Vyc29yUG9zaXRpb24oIGUsICdwYWdlWCcgKSAtIG9mZnNldC5sZWZ0O1xyXG5cdFx0dGhpcy5zLm1vdXNlLm9mZnNldFkgPSB0aGlzLl9mbkN1cnNvclBvc2l0aW9uKCBlLCAncGFnZVknICkgLSBvZmZzZXQudG9wO1xyXG5cdFx0dGhpcy5zLm1vdXNlLnRhcmdldCA9IHRoaXMucy5kdC5hb0NvbHVtbnNbIGlkeCBdLm5UaDsvL3RhcmdldFswXTtcclxuXHRcdHRoaXMucy5tb3VzZS50YXJnZXRJbmRleCA9IGlkeDtcclxuXHRcdHRoaXMucy5tb3VzZS5mcm9tSW5kZXggPSBpZHg7XHJcblxyXG5cdFx0dGhpcy5fZm5SZWdpb25zKCk7XHJcblxyXG5cdFx0LyogQWRkIGV2ZW50IGhhbmRsZXJzIHRvIHRoZSBkb2N1bWVudCAqL1xyXG5cdFx0JChkb2N1bWVudClcclxuXHRcdFx0Lm9uKCAnbW91c2Vtb3ZlLkNvbFJlb3JkZXIgdG91Y2htb3ZlLkNvbFJlb3JkZXInLCBmdW5jdGlvbiAoZSkge1xyXG5cdFx0XHRcdHRoYXQuX2ZuTW91c2VNb3ZlLmNhbGwoIHRoYXQsIGUgKTtcclxuXHRcdFx0fSApXHJcblx0XHRcdC5vbiggJ21vdXNldXAuQ29sUmVvcmRlciB0b3VjaGVuZC5Db2xSZW9yZGVyJywgZnVuY3Rpb24gKGUpIHtcclxuXHRcdFx0XHR0aGF0Ll9mbk1vdXNlVXAuY2FsbCggdGhhdCwgZSApO1xyXG5cdFx0XHR9ICk7XHJcblx0fSxcclxuXHJcblxyXG5cdC8qKlxyXG5cdCAqIERlYWwgd2l0aCBhIG1vdXNlIG1vdmUgZXZlbnQgd2hpbGUgZHJhZ2dpbmcgYSBub2RlXHJcblx0ICogIEBtZXRob2QgIF9mbk1vdXNlTW92ZVxyXG5cdCAqICBAcGFyYW0gICBldmVudCBlIE1vdXNlIGV2ZW50XHJcblx0ICogIEByZXR1cm5zIHZvaWRcclxuXHQgKiAgQHByaXZhdGVcclxuXHQgKi9cclxuXHRcIl9mbk1vdXNlTW92ZVwiOiBmdW5jdGlvbiAoIGUgKVxyXG5cdHtcclxuXHRcdHZhciB0aGF0ID0gdGhpcztcclxuXHJcblx0XHRpZiAoIHRoaXMuZG9tLmRyYWcgPT09IG51bGwgKVxyXG5cdFx0e1xyXG5cdFx0XHQvKiBPbmx5IGNyZWF0ZSB0aGUgZHJhZyBlbGVtZW50IGlmIHRoZSBtb3VzZSBoYXMgbW92ZWQgYSBzcGVjaWZpYyBkaXN0YW5jZSBmcm9tIHRoZSBzdGFydFxyXG5cdFx0XHQgKiBwb2ludCAtIHRoaXMgYWxsb3dzIHRoZSB1c2VyIHRvIG1ha2Ugc21hbGwgbW91c2UgbW92ZW1lbnRzIHdoZW4gc29ydGluZyBhbmQgbm90IGhhdmUgYVxyXG5cdFx0XHQgKiBwb3NzaWJseSBjb25mdXNpbmcgZHJhZyBlbGVtZW50IHNob3dpbmcgdXBcclxuXHRcdFx0ICovXHJcblx0XHRcdGlmICggTWF0aC5wb3coXHJcblx0XHRcdFx0TWF0aC5wb3codGhpcy5fZm5DdXJzb3JQb3NpdGlvbiggZSwgJ3BhZ2VYJykgLSB0aGlzLnMubW91c2Uuc3RhcnRYLCAyKSArXHJcblx0XHRcdFx0TWF0aC5wb3codGhpcy5fZm5DdXJzb3JQb3NpdGlvbiggZSwgJ3BhZ2VZJykgLSB0aGlzLnMubW91c2Uuc3RhcnRZLCAyKSwgMC41ICkgPCA1IClcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHJldHVybjtcclxuXHRcdFx0fVxyXG5cdFx0XHR0aGlzLl9mbkNyZWF0ZURyYWdOb2RlKCk7XHJcblx0XHR9XHJcblxyXG5cdFx0LyogUG9zaXRpb24gdGhlIGVsZW1lbnQgLSB3ZSByZXNwZWN0IHdoZXJlIGluIHRoZSBlbGVtZW50IHRoZSBjbGljayBvY2N1cmVkICovXHJcblx0XHR0aGlzLmRvbS5kcmFnLmNzcygge1xyXG5cdFx0XHRsZWZ0OiB0aGlzLl9mbkN1cnNvclBvc2l0aW9uKCBlLCAncGFnZVgnICkgLSB0aGlzLnMubW91c2Uub2Zmc2V0WCxcclxuXHRcdFx0dG9wOiB0aGlzLl9mbkN1cnNvclBvc2l0aW9uKCBlLCAncGFnZVknICkgLSB0aGlzLnMubW91c2Uub2Zmc2V0WVxyXG5cdFx0fSApO1xyXG5cclxuXHRcdC8qIEJhc2VkIG9uIHRoZSBjdXJyZW50IG1vdXNlIHBvc2l0aW9uLCBjYWxjdWxhdGUgd2hlcmUgdGhlIGluc2VydCBzaG91bGQgZ28gKi9cclxuXHRcdHZhciBiU2V0ID0gZmFsc2U7XHJcblx0XHR2YXIgbGFzdFRvSW5kZXggPSB0aGlzLnMubW91c2UudG9JbmRleDtcclxuXHJcblx0XHRmb3IgKCB2YXIgaT0xLCBpTGVuPXRoaXMucy5hb1RhcmdldHMubGVuZ3RoIDsgaTxpTGVuIDsgaSsrIClcclxuXHRcdHtcclxuXHRcdFx0aWYgKCB0aGlzLl9mbkN1cnNvclBvc2l0aW9uKGUsICdwYWdlWCcpIDwgdGhpcy5zLmFvVGFyZ2V0c1tpLTFdLnggKyAoKHRoaXMucy5hb1RhcmdldHNbaV0ueC10aGlzLnMuYW9UYXJnZXRzW2ktMV0ueCkvMikgKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0dGhpcy5kb20ucG9pbnRlci5jc3MoICdsZWZ0JywgdGhpcy5zLmFvVGFyZ2V0c1tpLTFdLnggKTtcclxuXHRcdFx0XHR0aGlzLnMubW91c2UudG9JbmRleCA9IHRoaXMucy5hb1RhcmdldHNbaS0xXS50bztcclxuXHRcdFx0XHRiU2V0ID0gdHJ1ZTtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdC8vIFRoZSBpbnNlcnQgZWxlbWVudCB3YXNuJ3QgcG9zaXRpb25lZCBpbiB0aGUgYXJyYXkgKGxlc3MgdGhhblxyXG5cdFx0Ly8gb3BlcmF0b3IpLCBzbyB3ZSBwdXQgaXQgYXQgdGhlIGVuZFxyXG5cdFx0aWYgKCAhYlNldCApXHJcblx0XHR7XHJcblx0XHRcdHRoaXMuZG9tLnBvaW50ZXIuY3NzKCAnbGVmdCcsIHRoaXMucy5hb1RhcmdldHNbdGhpcy5zLmFvVGFyZ2V0cy5sZW5ndGgtMV0ueCApO1xyXG5cdFx0XHR0aGlzLnMubW91c2UudG9JbmRleCA9IHRoaXMucy5hb1RhcmdldHNbdGhpcy5zLmFvVGFyZ2V0cy5sZW5ndGgtMV0udG87XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gUGVyZm9ybSByZW9yZGVyaW5nIGlmIHJlYWx0aW1lIHVwZGF0aW5nIGlzIG9uIGFuZCB0aGUgY29sdW1uIGhhcyBtb3ZlZFxyXG5cdFx0aWYgKCB0aGlzLnMuaW5pdC5iUmVhbHRpbWUgJiYgbGFzdFRvSW5kZXggIT09IHRoaXMucy5tb3VzZS50b0luZGV4ICkge1xyXG5cdFx0XHR0aGlzLnMuZHQub0luc3RhbmNlLmZuQ29sUmVvcmRlciggdGhpcy5zLm1vdXNlLmZyb21JbmRleCwgdGhpcy5zLm1vdXNlLnRvSW5kZXgsIGZhbHNlICk7XHJcblx0XHRcdHRoaXMucy5tb3VzZS5mcm9tSW5kZXggPSB0aGlzLnMubW91c2UudG9JbmRleDtcclxuXHRcdFx0dGhpcy5fZm5SZWdpb25zKCk7XHJcblx0XHR9XHJcblx0fSxcclxuXHJcblxyXG5cdC8qKlxyXG5cdCAqIEZpbmlzaCBvZmYgdGhlIG1vdXNlIGRyYWcgYW5kIGluc2VydCB0aGUgY29sdW1uIHdoZXJlIG5lZWRlZFxyXG5cdCAqICBAbWV0aG9kICBfZm5Nb3VzZVVwXHJcblx0ICogIEBwYXJhbSAgIGV2ZW50IGUgTW91c2UgZXZlbnRcclxuXHQgKiAgQHJldHVybnMgdm9pZFxyXG5cdCAqICBAcHJpdmF0ZVxyXG5cdCAqL1xyXG5cdFwiX2ZuTW91c2VVcFwiOiBmdW5jdGlvbiAoIGUgKVxyXG5cdHtcclxuXHRcdHZhciB0aGF0ID0gdGhpcztcclxuXHJcblx0XHQkKGRvY3VtZW50KS5vZmYoICcuQ29sUmVvcmRlcicgKTtcclxuXHJcblx0XHRpZiAoIHRoaXMuZG9tLmRyYWcgIT09IG51bGwgKVxyXG5cdFx0e1xyXG5cdFx0XHQvKiBSZW1vdmUgdGhlIGd1aWRlIGVsZW1lbnRzICovXHJcblx0XHRcdHRoaXMuZG9tLmRyYWcucmVtb3ZlKCk7XHJcblx0XHRcdHRoaXMuZG9tLnBvaW50ZXIucmVtb3ZlKCk7XHJcblx0XHRcdHRoaXMuZG9tLmRyYWcgPSBudWxsO1xyXG5cdFx0XHR0aGlzLmRvbS5wb2ludGVyID0gbnVsbDtcclxuXHJcblx0XHRcdC8qIEFjdHVhbGx5IGRvIHRoZSByZW9yZGVyICovXHJcblx0XHRcdHRoaXMucy5kdC5vSW5zdGFuY2UuZm5Db2xSZW9yZGVyKCB0aGlzLnMubW91c2UuZnJvbUluZGV4LCB0aGlzLnMubW91c2UudG9JbmRleCwgdHJ1ZSApO1xyXG5cdFx0XHR0aGlzLl9mblNldENvbHVtbkluZGV4ZXMoKTtcclxuXHJcblx0XHRcdC8qIFdoZW4gc2Nyb2xsaW5nIHdlIG5lZWQgdG8gcmVjYWxjdWxhdGUgdGhlIGNvbHVtbiBzaXplcyB0byBhbGxvdyBmb3IgdGhlIHNoaWZ0ICovXHJcblx0XHRcdGlmICggdGhpcy5zLmR0Lm9TY3JvbGwuc1ggIT09IFwiXCIgfHwgdGhpcy5zLmR0Lm9TY3JvbGwuc1kgIT09IFwiXCIgKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0dGhpcy5zLmR0Lm9JbnN0YW5jZS5mbkFkanVzdENvbHVtblNpemluZyggZmFsc2UgKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0LyogU2F2ZSB0aGUgc3RhdGUgKi9cclxuXHRcdFx0dGhpcy5zLmR0Lm9JbnN0YW5jZS5vQXBpLl9mblNhdmVTdGF0ZSggdGhpcy5zLmR0ICk7XHJcblxyXG5cdFx0XHRpZiAoIHRoaXMucy5yZW9yZGVyQ2FsbGJhY2sgIT09IG51bGwgKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0dGhpcy5zLnJlb3JkZXJDYWxsYmFjay5jYWxsKCB0aGlzICk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9LFxyXG5cclxuXHJcblx0LyoqXHJcblx0ICogQ2FsY3VsYXRlIGEgY2FjaGVkIGFycmF5IHdpdGggdGhlIHBvaW50cyBvZiB0aGUgY29sdW1uIGluc2VydHMsIGFuZCB0aGVcclxuXHQgKiAndG8nIHBvaW50c1xyXG5cdCAqICBAbWV0aG9kICBfZm5SZWdpb25zXHJcblx0ICogIEByZXR1cm5zIHZvaWRcclxuXHQgKiAgQHByaXZhdGVcclxuXHQgKi9cclxuXHRcIl9mblJlZ2lvbnNcIjogZnVuY3Rpb24gKClcclxuXHR7XHJcblx0XHR2YXIgYW9Db2x1bW5zID0gdGhpcy5zLmR0LmFvQ29sdW1ucztcclxuXHJcblx0XHR0aGlzLnMuYW9UYXJnZXRzLnNwbGljZSggMCwgdGhpcy5zLmFvVGFyZ2V0cy5sZW5ndGggKTtcclxuXHJcblx0XHR0aGlzLnMuYW9UYXJnZXRzLnB1c2goIHtcclxuXHRcdFx0XCJ4XCI6ICAkKHRoaXMucy5kdC5uVGFibGUpLm9mZnNldCgpLmxlZnQsXHJcblx0XHRcdFwidG9cIjogMFxyXG5cdFx0fSApO1xyXG5cclxuXHRcdHZhciBpVG9Qb2ludCA9IDA7XHJcblx0XHR2YXIgdG90YWwgPSB0aGlzLnMuYW9UYXJnZXRzWzBdLng7XHJcblxyXG5cdFx0Zm9yICggdmFyIGk9MCwgaUxlbj1hb0NvbHVtbnMubGVuZ3RoIDsgaTxpTGVuIDsgaSsrIClcclxuXHRcdHtcclxuXHRcdFx0LyogRm9yIHRoZSBjb2x1bW4gLyBoZWFkZXIgaW4gcXVlc3Rpb24sIHdlIHdhbnQgaXQncyBwb3NpdGlvbiB0byByZW1haW4gdGhlIHNhbWUgaWYgdGhlXHJcblx0XHRcdCAqIHBvc2l0aW9uIGlzIGp1c3QgdG8gaXQncyBpbW1lZGlhdGUgbGVmdCBvciByaWdodCwgc28gd2Ugb25seSBpbmNyZW1lbnQgdGhlIGNvdW50ZXIgZm9yXHJcblx0XHRcdCAqIG90aGVyIGNvbHVtbnNcclxuXHRcdFx0ICovXHJcblx0XHRcdGlmICggaSAhPSB0aGlzLnMubW91c2UuZnJvbUluZGV4IClcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGlUb1BvaW50Kys7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmICggYW9Db2x1bW5zW2ldLmJWaXNpYmxlICYmIGFvQ29sdW1uc1tpXS5uVGguc3R5bGUuZGlzcGxheSAhPT0nbm9uZScgKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0dG90YWwgKz0gJChhb0NvbHVtbnNbaV0ublRoKS5vdXRlcldpZHRoKCk7XHJcblxyXG5cdFx0XHRcdHRoaXMucy5hb1RhcmdldHMucHVzaCgge1xyXG5cdFx0XHRcdFx0XCJ4XCI6ICB0b3RhbCxcclxuXHRcdFx0XHRcdFwidG9cIjogaVRvUG9pbnRcclxuXHRcdFx0XHR9ICk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHQvKiBEaXNhbGxvdyBjb2x1bW5zIGZvciBiZWluZyByZW9yZGVyZWQgYnkgZHJhZyBhbmQgZHJvcCwgY291bnRpbmcgcmlnaHQgdG8gbGVmdCAqL1xyXG5cdFx0aWYgKCB0aGlzLnMuZml4ZWRSaWdodCAhPT0gMCApXHJcblx0XHR7XHJcblx0XHRcdHRoaXMucy5hb1RhcmdldHMuc3BsaWNlKCB0aGlzLnMuYW9UYXJnZXRzLmxlbmd0aCAtIHRoaXMucy5maXhlZFJpZ2h0ICk7XHJcblx0XHR9XHJcblxyXG5cdFx0LyogRGlzYWxsb3cgY29sdW1ucyBmb3IgYmVpbmcgcmVvcmRlcmVkIGJ5IGRyYWcgYW5kIGRyb3AsIGNvdW50aW5nIGxlZnQgdG8gcmlnaHQgKi9cclxuXHRcdGlmICggdGhpcy5zLmZpeGVkICE9PSAwIClcclxuXHRcdHtcclxuXHRcdFx0dGhpcy5zLmFvVGFyZ2V0cy5zcGxpY2UoIDAsIHRoaXMucy5maXhlZCApO1xyXG5cdFx0fVxyXG5cdH0sXHJcblxyXG5cclxuXHQvKipcclxuXHQgKiBDb3B5IHRoZSBUSCBlbGVtZW50IHRoYXQgaXMgYmVpbmcgZHJhZ3Mgc28gdGhlIHVzZXIgaGFzIHRoZSBpZGVhIHRoYXQgdGhleSBhcmUgYWN0dWFsbHlcclxuXHQgKiBtb3ZpbmcgaXQgYXJvdW5kIHRoZSBwYWdlLlxyXG5cdCAqICBAbWV0aG9kICBfZm5DcmVhdGVEcmFnTm9kZVxyXG5cdCAqICBAcmV0dXJucyB2b2lkXHJcblx0ICogIEBwcml2YXRlXHJcblx0ICovXHJcblx0XCJfZm5DcmVhdGVEcmFnTm9kZVwiOiBmdW5jdGlvbiAoKVxyXG5cdHtcclxuXHRcdHZhciBzY3JvbGxpbmcgPSB0aGlzLnMuZHQub1Njcm9sbC5zWCAhPT0gXCJcIiB8fCB0aGlzLnMuZHQub1Njcm9sbC5zWSAhPT0gXCJcIjtcclxuXHJcblx0XHR2YXIgb3JpZ0NlbGwgPSB0aGlzLnMuZHQuYW9Db2x1bW5zWyB0aGlzLnMubW91c2UudGFyZ2V0SW5kZXggXS5uVGg7XHJcblx0XHR2YXIgb3JpZ1RyID0gb3JpZ0NlbGwucGFyZW50Tm9kZTtcclxuXHRcdHZhciBvcmlnVGhlYWQgPSBvcmlnVHIucGFyZW50Tm9kZTtcclxuXHRcdHZhciBvcmlnVGFibGUgPSBvcmlnVGhlYWQucGFyZW50Tm9kZTtcclxuXHRcdHZhciBjbG9uZUNlbGwgPSAkKG9yaWdDZWxsKS5jbG9uZSgpO1xyXG5cclxuXHRcdC8vIFRoaXMgaXMgYSBzbGlnaHRseSBvZGQgY29tYmluYXRpb24gb2YgalF1ZXJ5IGFuZCBET00sIGJ1dCBpdCBpcyB0aGVcclxuXHRcdC8vIGZhc3Rlc3QgYW5kIGxlYXN0IHJlc291cmNlIGludGVuc2l2ZSB3YXkgSSBjb3VsZCB0aGluayBvZiBjbG9uaW5nXHJcblx0XHQvLyB0aGUgdGFibGUgd2l0aCBqdXN0IGEgc2luZ2xlIGhlYWRlciBjZWxsIGluIGl0LlxyXG5cdFx0dGhpcy5kb20uZHJhZyA9ICQob3JpZ1RhYmxlLmNsb25lTm9kZShmYWxzZSkpXHJcblx0XHRcdC5hZGRDbGFzcyggJ0RUQ1JfY2xvbmVkVGFibGUnIClcclxuXHRcdFx0LmFwcGVuZChcclxuXHRcdFx0XHQkKG9yaWdUaGVhZC5jbG9uZU5vZGUoZmFsc2UpKS5hcHBlbmQoXHJcblx0XHRcdFx0XHQkKG9yaWdUci5jbG9uZU5vZGUoZmFsc2UpKS5hcHBlbmQoXHJcblx0XHRcdFx0XHRcdGNsb25lQ2VsbFswXVxyXG5cdFx0XHRcdFx0KVxyXG5cdFx0XHRcdClcclxuXHRcdFx0KVxyXG5cdFx0XHQuY3NzKCB7XHJcblx0XHRcdFx0cG9zaXRpb246ICdhYnNvbHV0ZScsXHJcblx0XHRcdFx0dG9wOiAwLFxyXG5cdFx0XHRcdGxlZnQ6IDAsXHJcblx0XHRcdFx0d2lkdGg6ICQob3JpZ0NlbGwpLm91dGVyV2lkdGgoKSxcclxuXHRcdFx0XHRoZWlnaHQ6ICQob3JpZ0NlbGwpLm91dGVySGVpZ2h0KClcclxuXHRcdFx0fSApXHJcblx0XHRcdC5hcHBlbmRUbyggJ2JvZHknICk7XHJcblxyXG5cdFx0dGhpcy5kb20ucG9pbnRlciA9ICQoJzxkaXY+PC9kaXY+JylcclxuXHRcdFx0LmFkZENsYXNzKCAnRFRDUl9wb2ludGVyJyApXHJcblx0XHRcdC5jc3MoIHtcclxuXHRcdFx0XHRwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuXHRcdFx0XHR0b3A6IHNjcm9sbGluZyA/XHJcblx0XHRcdFx0XHQkKCdkaXYuZGF0YVRhYmxlc19zY3JvbGwnLCB0aGlzLnMuZHQublRhYmxlV3JhcHBlcikub2Zmc2V0KCkudG9wIDpcclxuXHRcdFx0XHRcdCQodGhpcy5zLmR0Lm5UYWJsZSkub2Zmc2V0KCkudG9wLFxyXG5cdFx0XHRcdGhlaWdodCA6IHNjcm9sbGluZyA/XHJcblx0XHRcdFx0XHQkKCdkaXYuZGF0YVRhYmxlc19zY3JvbGwnLCB0aGlzLnMuZHQublRhYmxlV3JhcHBlcikuaGVpZ2h0KCkgOlxyXG5cdFx0XHRcdFx0JCh0aGlzLnMuZHQublRhYmxlKS5oZWlnaHQoKVxyXG5cdFx0XHR9IClcclxuXHRcdFx0LmFwcGVuZFRvKCAnYm9keScgKTtcclxuXHR9LFxyXG5cclxuXHJcblx0LyoqXHJcblx0ICogQWRkIGEgZGF0YSBhdHRyaWJ1dGUgdG8gdGhlIGNvbHVtbiBoZWFkZXJzLCBzbyB3ZSBrbm93IHRoZSBpbmRleCBvZlxyXG5cdCAqIHRoZSByb3cgdG8gYmUgcmVvcmRlcmVkLiBUaGlzIGFsbG93cyBmYXN0IGRldGVjdGlvbiBvZiB0aGUgaW5kZXgsIGFuZFxyXG5cdCAqIGZvciB0aGlzIHBsdWctaW4gdG8gd29yayB3aXRoIEZpeGVkSGVhZGVyIHdoaWNoIGNsb25lcyB0aGUgbm9kZXMuXHJcblx0ICogIEBwcml2YXRlXHJcblx0ICovXHJcblx0XCJfZm5TZXRDb2x1bW5JbmRleGVzXCI6IGZ1bmN0aW9uICgpXHJcblx0e1xyXG5cdFx0JC5lYWNoKCB0aGlzLnMuZHQuYW9Db2x1bW5zLCBmdW5jdGlvbiAoaSwgY29sdW1uKSB7XHJcblx0XHRcdCQoY29sdW1uLm5UaCkuYXR0cignZGF0YS1jb2x1bW4taW5kZXgnLCBpKTtcclxuXHRcdH0gKTtcclxuXHR9LFxyXG5cclxuXHJcblx0LyoqXHJcblx0ICogR2V0IGN1cnNvciBwb3NpdGlvbiByZWdhcmRsZXNzIG9mIG1vdXNlIG9yIHRvdWNoIGlucHV0XHJcblx0ICogQHBhcmFtICB7RXZlbnR9ICBlICAgIGpRdWVyeSBFdmVudFxyXG5cdCAqIEBwYXJhbSAge3N0cmluZ30gcHJvcCBQcm9wZXJ0eSB0byBnZXRcclxuXHQgKiBAcmV0dXJuIHtudW1iZXJ9ICAgICAgVmFsdWVcclxuXHQgKi9cclxuXHRfZm5DdXJzb3JQb3NpdGlvbjogZnVuY3Rpb24gKCBlLCBwcm9wICkge1xyXG5cdFx0aWYgKCBlLnR5cGUuaW5kZXhPZigndG91Y2gnKSAhPT0gLTEgKSB7XHJcblx0XHRcdHJldHVybiBlLm9yaWdpbmFsRXZlbnQudG91Y2hlc1swXVsgcHJvcCBdO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIGVbIHByb3AgXTtcclxuXHR9XHJcbn0gKTtcclxuXHJcblxyXG5cclxuXHJcblxyXG4vKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICpcclxuICogU3RhdGljIHBhcmFtZXRlcnNcclxuICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqL1xyXG5cclxuXHJcbi8qKlxyXG4gKiBDb2xSZW9yZGVyIGRlZmF1bHQgc2V0dGluZ3MgZm9yIGluaXRpYWxpc2F0aW9uXHJcbiAqICBAbmFtZXNwYWNlXHJcbiAqICBAc3RhdGljXHJcbiAqL1xyXG5Db2xSZW9yZGVyLmRlZmF1bHRzID0ge1xyXG5cdC8qKlxyXG5cdCAqIFByZWRlZmluZWQgb3JkZXJpbmcgZm9yIHRoZSBjb2x1bW5zIHRoYXQgd2lsbCBiZSBhcHBsaWVkIGF1dG9tYXRpY2FsbHlcclxuXHQgKiBvbiBpbml0aWFsaXNhdGlvbi4gSWYgbm90IHNwZWNpZmllZCB0aGVuIHRoZSBvcmRlciB0aGF0IHRoZSBjb2x1bW5zIGFyZVxyXG5cdCAqIGZvdW5kIHRvIGJlIGluIHRoZSBIVE1MIGlzIHRoZSBvcmRlciB1c2VkLlxyXG5cdCAqICBAdHlwZSBhcnJheVxyXG5cdCAqICBAZGVmYXVsdCBudWxsXHJcblx0ICogIEBzdGF0aWNcclxuXHQgKi9cclxuXHRhaU9yZGVyOiBudWxsLFxyXG5cclxuXHQvKipcclxuXHQgKiBSZWRyYXcgdGhlIHRhYmxlJ3MgY29sdW1uIG9yZGVyaW5nIGFzIHRoZSBlbmQgdXNlciBkcmF3cyB0aGUgY29sdW1uXHJcblx0ICogKGB0cnVlYCkgb3Igd2FpdCB1bnRpbCB0aGUgbW91c2UgaXMgcmVsZWFzZWQgKGBmYWxzZWAgLSBkZWZhdWx0KS4gTm90ZVxyXG5cdCAqIHRoYXQgdGhpcyB3aWxsIHBlcmZvcm0gYSByZWRyYXcgb24gZWFjaCByZW9yZGVyaW5nLCB3aGljaCBpbnZvbHZlcyBhblxyXG5cdCAqIEFqYXggcmVxdWVzdCBlYWNoIHRpbWUgaWYgeW91IGFyZSB1c2luZyBzZXJ2ZXItc2lkZSBwcm9jZXNzaW5nIGluXHJcblx0ICogRGF0YVRhYmxlcy5cclxuXHQgKiAgQHR5cGUgYm9vbGVhblxyXG5cdCAqICBAZGVmYXVsdCBmYWxzZVxyXG5cdCAqICBAc3RhdGljXHJcblx0ICovXHJcblx0YlJlYWx0aW1lOiB0cnVlLFxyXG5cclxuXHQvKipcclxuXHQgKiBJbmRpY2F0ZSBob3cgbWFueSBjb2x1bW5zIHNob3VsZCBiZSBmaXhlZCBpbiBwb3NpdGlvbiAoY291bnRpbmcgZnJvbSB0aGVcclxuXHQgKiBsZWZ0KS4gVGhpcyB3aWxsIHR5cGljYWxseSBiZSAxIGlmIHVzZWQsIGJ1dCBjYW4gYmUgYXMgaGlnaCBhcyB5b3UgbGlrZS5cclxuXHQgKiAgQHR5cGUgaW50XHJcblx0ICogIEBkZWZhdWx0IDBcclxuXHQgKiAgQHN0YXRpY1xyXG5cdCAqL1xyXG5cdGlGaXhlZENvbHVtbnNMZWZ0OiAwLFxyXG5cclxuXHQvKipcclxuXHQgKiBBcyBgaUZpeGVkQ29sdW1uc1JpZ2h0YCBidXQgY291bnRpbmcgZnJvbSB0aGUgcmlnaHQuXHJcblx0ICogIEB0eXBlIGludFxyXG5cdCAqICBAZGVmYXVsdCAwXHJcblx0ICogIEBzdGF0aWNcclxuXHQgKi9cclxuXHRpRml4ZWRDb2x1bW5zUmlnaHQ6IDAsXHJcblxyXG5cdC8qKlxyXG5cdCAqIENhbGxiYWNrIGZ1bmN0aW9uIHRoYXQgaXMgZmlyZWQgd2hlbiBjb2x1bW5zIGFyZSByZW9yZGVyZWQuIFRoZSBgY29sdW1uLVxyXG5cdCAqIHJlb3JkZXJgIGV2ZW50IGlzIHByZWZlcnJlZCBvdmVyIHRoaXMgY2FsbGJhY2tcclxuXHQgKiAgQHR5cGUgZnVuY3Rpb24oKTp2b2lkXHJcblx0ICogIEBkZWZhdWx0IG51bGxcclxuXHQgKiAgQHN0YXRpY1xyXG5cdCAqL1xyXG5cdGZuUmVvcmRlckNhbGxiYWNrOiBudWxsXHJcbn07XHJcblxyXG5cclxuXHJcbi8qICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKlxyXG4gKiBDb25zdGFudHNcclxuICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqL1xyXG5cclxuLyoqXHJcbiAqIENvbFJlb3JkZXIgdmVyc2lvblxyXG4gKiAgQGNvbnN0YW50ICB2ZXJzaW9uXHJcbiAqICBAdHlwZSAgICAgIFN0cmluZ1xyXG4gKiAgQGRlZmF1bHQgICBBcyBjb2RlXHJcbiAqL1xyXG5Db2xSZW9yZGVyLnZlcnNpb24gPSBcIjEuNC4xXCI7XHJcblxyXG5cclxuXHJcbi8qICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKlxyXG4gKiBEYXRhVGFibGVzIGludGVyZmFjZXNcclxuICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqL1xyXG5cclxuLy8gRXhwb3NlXHJcbiQuZm4uZGF0YVRhYmxlLkNvbFJlb3JkZXIgPSBDb2xSZW9yZGVyO1xyXG4kLmZuLkRhdGFUYWJsZS5Db2xSZW9yZGVyID0gQ29sUmVvcmRlcjtcclxuXHJcblxyXG4vLyBSZWdpc3RlciBhIG5ldyBmZWF0dXJlIHdpdGggRGF0YVRhYmxlc1xyXG5pZiAoIHR5cGVvZiAkLmZuLmRhdGFUYWJsZSA9PSBcImZ1bmN0aW9uXCIgJiZcclxuICAgICB0eXBlb2YgJC5mbi5kYXRhVGFibGVFeHQuZm5WZXJzaW9uQ2hlY2sgPT0gXCJmdW5jdGlvblwiICYmXHJcbiAgICAgJC5mbi5kYXRhVGFibGVFeHQuZm5WZXJzaW9uQ2hlY2soJzEuMTAuOCcpIClcclxue1xyXG5cdCQuZm4uZGF0YVRhYmxlRXh0LmFvRmVhdHVyZXMucHVzaCgge1xyXG5cdFx0XCJmbkluaXRcIjogZnVuY3Rpb24oIHNldHRpbmdzICkge1xyXG5cdFx0XHR2YXIgdGFibGUgPSBzZXR0aW5ncy5vSW5zdGFuY2U7XHJcblxyXG5cdFx0XHRpZiAoICEgc2V0dGluZ3MuX2NvbFJlb3JkZXIgKSB7XHJcblx0XHRcdFx0dmFyIGR0SW5pdCA9IHNldHRpbmdzLm9Jbml0O1xyXG5cdFx0XHRcdHZhciBvcHRzID0gZHRJbml0LmNvbFJlb3JkZXIgfHwgZHRJbml0Lm9Db2xSZW9yZGVyIHx8IHt9O1xyXG5cclxuXHRcdFx0XHRuZXcgQ29sUmVvcmRlciggc2V0dGluZ3MsIG9wdHMgKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlIHtcclxuXHRcdFx0XHR0YWJsZS5vQXBpLl9mbkxvZyggc2V0dGluZ3MsIDEsIFwiQ29sUmVvcmRlciBhdHRlbXB0ZWQgdG8gaW5pdGlhbGlzZSB0d2ljZS4gSWdub3Jpbmcgc2Vjb25kXCIgKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0cmV0dXJuIG51bGw7IC8qIE5vIG5vZGUgZm9yIERhdGFUYWJsZXMgdG8gaW5zZXJ0ICovXHJcblx0XHR9LFxyXG5cdFx0XCJjRmVhdHVyZVwiOiBcIlJcIixcclxuXHRcdFwic0ZlYXR1cmVcIjogXCJDb2xSZW9yZGVyXCJcclxuXHR9ICk7XHJcbn1cclxuZWxzZSB7XHJcblx0YWxlcnQoIFwiV2FybmluZzogQ29sUmVvcmRlciByZXF1aXJlcyBEYXRhVGFibGVzIDEuMTAuOCBvciBncmVhdGVyIC0gd3d3LmRhdGF0YWJsZXMubmV0L2Rvd25sb2FkXCIpO1xyXG59XHJcblxyXG5cclxuLy8gQXR0YWNoIGEgbGlzdGVuZXIgdG8gdGhlIGRvY3VtZW50IHdoaWNoIGxpc3RlbnMgZm9yIERhdGFUYWJsZXMgaW5pdGlhbGlzYXRpb25cclxuLy8gZXZlbnRzIHNvIHdlIGNhbiBhdXRvbWF0aWNhbGx5IGluaXRpYWxpc2VcclxuJChkb2N1bWVudCkub24oICdwcmVJbml0LmR0LmNvbFJlb3JkZXInLCBmdW5jdGlvbiAoZSwgc2V0dGluZ3MpIHtcclxuXHRpZiAoIGUubmFtZXNwYWNlICE9PSAnZHQnICkge1xyXG5cdFx0cmV0dXJuO1xyXG5cdH1cclxuXHJcblx0dmFyIGluaXQgPSBzZXR0aW5ncy5vSW5pdC5jb2xSZW9yZGVyO1xyXG5cdHZhciBkZWZhdWx0cyA9IERhdGFUYWJsZS5kZWZhdWx0cy5jb2xSZW9yZGVyO1xyXG5cclxuXHRpZiAoIGluaXQgfHwgZGVmYXVsdHMgKSB7XHJcblx0XHR2YXIgb3B0cyA9ICQuZXh0ZW5kKCB7fSwgaW5pdCwgZGVmYXVsdHMgKTtcclxuXHJcblx0XHRpZiAoIGluaXQgIT09IGZhbHNlICkge1xyXG5cdFx0XHRuZXcgQ29sUmVvcmRlciggc2V0dGluZ3MsIG9wdHMgICk7XHJcblx0XHR9XHJcblx0fVxyXG59ICk7XHJcblxyXG5cclxuLy8gQVBJIGF1Z21lbnRhdGlvblxyXG4kLmZuLmRhdGFUYWJsZS5BcGkucmVnaXN0ZXIoICdjb2xSZW9yZGVyLnJlc2V0KCknLCBmdW5jdGlvbiAoKSB7XHJcblx0cmV0dXJuIHRoaXMuaXRlcmF0b3IoICd0YWJsZScsIGZ1bmN0aW9uICggY3R4ICkge1xyXG5cdFx0Y3R4Ll9jb2xSZW9yZGVyLmZuUmVzZXQoKTtcclxuXHR9ICk7XHJcbn0gKTtcclxuXHJcbiQuZm4uZGF0YVRhYmxlLkFwaS5yZWdpc3RlciggJ2NvbFJlb3JkZXIub3JkZXIoKScsIGZ1bmN0aW9uICggc2V0LCBvcmlnaW5hbCApIHtcclxuXHRpZiAoIHNldCApIHtcclxuXHRcdHJldHVybiB0aGlzLml0ZXJhdG9yKCAndGFibGUnLCBmdW5jdGlvbiAoIGN0eCApIHtcclxuXHRcdFx0Y3R4Ll9jb2xSZW9yZGVyLmZuT3JkZXIoIHNldCwgb3JpZ2luYWwgKTtcclxuXHRcdH0gKTtcclxuXHR9XHJcblxyXG5cdHJldHVybiB0aGlzLmNvbnRleHQubGVuZ3RoID9cclxuXHRcdHRoaXMuY29udGV4dFswXS5fY29sUmVvcmRlci5mbk9yZGVyKCkgOlxyXG5cdFx0bnVsbDtcclxufSApO1xyXG5cclxuJC5mbi5kYXRhVGFibGUuQXBpLnJlZ2lzdGVyKCAnY29sUmVvcmRlci50cmFuc3Bvc2UoKScsIGZ1bmN0aW9uICggaWR4LCBkaXIgKSB7XHJcblx0cmV0dXJuIHRoaXMuY29udGV4dC5sZW5ndGggJiYgdGhpcy5jb250ZXh0WzBdLl9jb2xSZW9yZGVyID9cclxuXHRcdHRoaXMuY29udGV4dFswXS5fY29sUmVvcmRlci5mblRyYW5zcG9zZSggaWR4LCBkaXIgKSA6XHJcblx0XHRpZHg7XHJcbn0gKTtcclxuXHJcbiQuZm4uZGF0YVRhYmxlLkFwaS5yZWdpc3RlciggJ2NvbFJlb3JkZXIubW92ZSgpJywgZnVuY3Rpb24oIGZyb20sIHRvLCBkcm9wLCBpbnZhbGlkYXRlUm93cyApIHtcclxuXHRpZiAodGhpcy5jb250ZXh0Lmxlbmd0aCkge1xyXG5cdFx0dGhpcy5jb250ZXh0WzBdLl9jb2xSZW9yZGVyLnMuZHQub0luc3RhbmNlLmZuQ29sUmVvcmRlciggZnJvbSwgdG8sIGRyb3AsIGludmFsaWRhdGVSb3dzICk7XHJcblx0fVxyXG5cdHJldHVybiB0aGlzO1xyXG59ICk7XHJcblxyXG5cclxucmV0dXJuIENvbFJlb3JkZXI7XHJcbn0pKTtcclxuIl0sIm5hbWVzIjpbImZhY3RvcnkiLCJkZWZpbmUiLCJhbWQiLCIkIiwid2luZG93IiwiZG9jdW1lbnQiLCJleHBvcnRzIiwiX3R5cGVvZiIsIm1vZHVsZSIsInJvb3QiLCJmbiIsImRhdGFUYWJsZSIsInJlcXVpcmUiLCJqUXVlcnkiLCJ1bmRlZmluZWQiLCJEYXRhVGFibGUiLCJmbkludmVydEtleVZhbHVlcyIsImFJbiIsImFSZXQiLCJpIiwiaUxlbiIsImxlbmd0aCIsImZuQXJyYXlTd2l0Y2giLCJhQXJyYXkiLCJpRnJvbSIsImlUbyIsIm1TdG9yZSIsInNwbGljZSIsImZuRG9tU3dpdGNoIiwiblBhcmVudCIsImFuVGFncyIsImNoaWxkTm9kZXMiLCJub2RlVHlwZSIsInB1c2giLCJuU3RvcmUiLCJpbnNlcnRCZWZvcmUiLCJhcHBlbmRDaGlsZCIsImRhdGFUYWJsZUV4dCIsIm9BcGkiLCJmbkNvbFJlb3JkZXIiLCJvU2V0dGluZ3MiLCJkcm9wIiwiaW52YWxpZGF0ZVJvd3MiLCJqIiwiakxlbiIsImplbiIsImlDb2xzIiwiYW9Db2x1bW5zIiwiblRycyIsIm9Db2wiLCJhdHRyTWFwIiwib2JqIiwicHJvcCIsIm1hcHBpbmciLCJhIiwic3BsaXQiLCJudW0iLCJzaGlmdCIsImlzTmFOIiwiam9pbiIsIl9mbkxvZyIsImFpTWFwcGluZyIsImFpSW52ZXJ0TWFwcGluZyIsImFhU29ydGluZyIsImFhU29ydGluZ0ZpeGVkIiwiYURhdGFTb3J0IiwiaWR4IiwiZWFjaCIsImFMYXN0U29ydCIsInZhbCIsInNyYyIsIm1EYXRhIiwiaXNQbGFpbk9iamVjdCIsImJWaXNpYmxlIiwiaVZpc2libGVJbmRleCIsIl9mbkNvbHVtbkluZGV4VG9WaXNpYmxlIiwiaUluc2VydEJlZm9yZUluZGV4IiwiblRIZWFkIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJuVEZvb3QiLCJhb0RhdGEiLCJuVHIiLCJfZm5Db2x1bW5PcHRpb25zIiwiYW9QcmVTZWFyY2hDb2xzIiwiZGF0YSIsImNlbGxzIiwiYW5DZWxscyIsIl9EVF9DZWxsSW5kZXgiLCJjb2x1bW4iLCJpc0FycmF5IiwiX2FEYXRhIiwiYW9IZWFkZXIiLCJhb0Zvb3RlciIsIkFwaSIsInJvd3MiLCJpbnZhbGlkYXRlIiwiblRoIiwib2ZmIiwiX2ZuU29ydEF0dGFjaExpc3RlbmVyIiwib0luc3RhbmNlIiwidHJpZ2dlciIsImZyb20iLCJ0byIsIkNvbFJlb3JkZXIiLCJkdCIsIm9wdHMiLCJzZXR0aW5ncyIsIl9jb2xSZW9yZGVyIiwiY2FtZWxUb0h1bmdhcmlhbiIsImRlZmF1bHRzIiwicyIsImV4dGVuZCIsImRvbSIsIl9mbkNvbnN0cnVjdCIsInByb3RvdHlwZSIsImZuUmVzZXQiLCJfZm5PcmRlckNvbHVtbnMiLCJmbk9yZGVyIiwiZm5HZXRDdXJyZW50T3JkZXIiLCJzZXQiLCJvcmlnaW5hbCIsImllbiIsImNvbHVtbnMiLCJfQ29sUmVvcmRlcl9pT3JpZ0NvbCIsIm9yZGVyIiwiaW5BcnJheSIsImZuVHJhbnNwb3NlIiwiZGlyIiwibWFwIiwiaW5kZXgiLCJ0aGF0IiwidGFibGUiLCJuVGFibGUiLCJpbml0IiwiaUZpeGVkQ29sdW1ucyIsImZpeGVkIiwiaUZpeGVkQ29sdW1uc0xlZnQiLCJmaXhlZFJpZ2h0IiwiaUZpeGVkQ29sdW1uc1JpZ2h0IiwiZm5SZW9yZGVyQ2FsbGJhY2siLCJyZW9yZGVyQ2FsbGJhY2siLCJfZm5Nb3VzZUxpc3RlbmVyIiwiX2ZuQ2FsbGJhY2tSZWciLCJvUyIsIm9EYXRhIiwiX2ZuU3RhdGVTYXZlIiwiY2FsbCIsImFpT3JkZXIiLCJzbGljZSIsIm9Mb2FkZWRTdGF0ZSIsIl9iSW5pdENvbXBsZXRlIiwiYkRvbmUiLCJvbiIsInJlc29ydCIsIl9mblNldENvbHVtbkluZGV4ZXMiLCJmaW5kIiwicmVtb3ZlQXR0ciIsImNoYW5nZWQiLCJjdXJySW5kZXgiLCJvU2Nyb2xsIiwic1giLCJzWSIsImZuQWRqdXN0Q29sdW1uU2l6aW5nIiwiX2ZuU2F2ZVN0YXRlIiwib1N0YXRlIiwiYUNvcHkiLCJpT3JpZ0NvbHVtbiIsImFTZWFyY2hDb3B5IiwiYW9TZWFyY2hDb2xzIiwiYWJWaXNDb2xzIiwic3RhdGVDb2x1bW5zQ29weSIsImUiLCJfZm5Nb3VzZURvd24iLCJ0YXJnZXQiLCJjbG9zZXN0Iiwib2Zmc2V0IiwicGFyc2VJbnQiLCJhdHRyIiwibW91c2UiLCJzdGFydFgiLCJfZm5DdXJzb3JQb3NpdGlvbiIsInN0YXJ0WSIsIm9mZnNldFgiLCJsZWZ0Iiwib2Zmc2V0WSIsInRvcCIsInRhcmdldEluZGV4IiwiZnJvbUluZGV4IiwiX2ZuUmVnaW9ucyIsIl9mbk1vdXNlTW92ZSIsIl9mbk1vdXNlVXAiLCJkcmFnIiwiTWF0aCIsInBvdyIsIl9mbkNyZWF0ZURyYWdOb2RlIiwiY3NzIiwiYlNldCIsImxhc3RUb0luZGV4IiwidG9JbmRleCIsImFvVGFyZ2V0cyIsIngiLCJwb2ludGVyIiwiYlJlYWx0aW1lIiwicmVtb3ZlIiwiaVRvUG9pbnQiLCJ0b3RhbCIsInN0eWxlIiwiZGlzcGxheSIsIm91dGVyV2lkdGgiLCJzY3JvbGxpbmciLCJvcmlnQ2VsbCIsIm9yaWdUciIsInBhcmVudE5vZGUiLCJvcmlnVGhlYWQiLCJvcmlnVGFibGUiLCJjbG9uZUNlbGwiLCJjbG9uZSIsImNsb25lTm9kZSIsImFkZENsYXNzIiwiYXBwZW5kIiwicG9zaXRpb24iLCJ3aWR0aCIsImhlaWdodCIsIm91dGVySGVpZ2h0IiwiYXBwZW5kVG8iLCJuVGFibGVXcmFwcGVyIiwidHlwZSIsImluZGV4T2YiLCJvcmlnaW5hbEV2ZW50IiwidG91Y2hlcyIsInZlcnNpb24iLCJmblZlcnNpb25DaGVjayIsImFvRmVhdHVyZXMiLCJmbkluaXQiLCJkdEluaXQiLCJvSW5pdCIsImNvbFJlb3JkZXIiLCJvQ29sUmVvcmRlciIsImFsZXJ0IiwibmFtZXNwYWNlIiwicmVnaXN0ZXIiLCJpdGVyYXRvciIsImN0eCIsImNvbnRleHQiXSwic291cmNlUm9vdCI6IiJ9