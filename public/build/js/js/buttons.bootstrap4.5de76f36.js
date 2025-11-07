(self["webpackChunk"] = self["webpackChunk"] || []).push([["js/buttons.bootstrap4"],{

/***/ "./assets/css/portoadmin/vendor/datatables/extras/TableTools/Buttons-1.4.2/js/buttons.bootstrap4.min.js":
/*!**************************************************************************************************************!*\
  !*** ./assets/css/portoadmin/vendor/datatables/extras/TableTools/Buttons-1.4.2/js/buttons.bootstrap4.min.js ***!
  \**************************************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;__webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
__webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
__webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
__webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
__webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
__webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
/*!
 Bootstrap integration for DataTables' Buttons
 ©2016 SpryMedia Ltd - datatables.net/license
*/
(function (c) {
   true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js"), __webpack_require__(/*! datatables.net-bs4 */ "./node_modules/datatables.net-bs4/js/dataTables.bootstrap4.mjs"), __webpack_require__(/*! datatables.net-buttons */ "./node_modules/datatables.net-buttons/js/dataTables.buttons.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (a) {
    return c(a, window, document);
  }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : 0;
})(function (c) {
  var a = c.fn.dataTable;
  c.extend(!0, a.Buttons.defaults, {
    dom: {
      container: {
        className: "dt-buttons btn-group"
      },
      button: {
        className: "btn btn-secondary"
      },
      collection: {
        tag: "div",
        className: "dt-button-collection dropdown-menu",
        button: {
          tag: "a",
          className: "dt-button dropdown-item",
          active: "active",
          disabled: "disabled"
        }
      }
    }
  });
  a.ext.buttons.collection.className += " dropdown-toggle";
  return a.Buttons;
});

/***/ }),

/***/ "./node_modules/datatables.net-bs4/js/dataTables.bootstrap4.mjs":
/*!**********************************************************************!*\
  !*** ./node_modules/datatables.net-bs4/js/dataTables.bootstrap4.mjs ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var datatables_net__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! datatables.net */ "./node_modules/datatables.net/js/jquery.dataTables.mjs");
/*! DataTables Bootstrap 4 integration
 * ©2011-2017 SpryMedia Ltd - datatables.net/license
 */




// Allow reassignment of the $ variable
let $ = jquery__WEBPACK_IMPORTED_MODULE_0__;


/**
 * DataTables integration for Bootstrap 4. This requires Bootstrap 4 and
 * DataTables 1.10 or newer.
 *
 * This file sets the defaults and adds options to DataTables to style its
 * controls using Bootstrap. See https://datatables.net/manual/styling/bootstrap
 * for further information.
 */

/* Set the defaults for DataTables initialisation */
$.extend( true, datatables_net__WEBPACK_IMPORTED_MODULE_1__["default"].defaults, {
	dom:
		"<'row'<'col-sm-12 col-md-6'l><'col-sm-12 col-md-6'f>>" +
		"<'row'<'col-sm-12'tr>>" +
		"<'row'<'col-sm-12 col-md-5'i><'col-sm-12 col-md-7'p>>",
	renderer: 'bootstrap'
} );


/* Default class modification */
$.extend( datatables_net__WEBPACK_IMPORTED_MODULE_1__["default"].ext.classes, {
	sWrapper:      "dataTables_wrapper dt-bootstrap4",
	sFilterInput:  "form-control form-control-sm",
	sLengthSelect: "custom-select custom-select-sm form-control form-control-sm",
	sProcessing:   "dataTables_processing card",
	sPageButton:   "paginate_button page-item"
} );


/* Bootstrap paging button renderer */
datatables_net__WEBPACK_IMPORTED_MODULE_1__["default"].ext.renderer.pageButton.bootstrap = function ( settings, host, idx, buttons, page, pages ) {
	var api     = new datatables_net__WEBPACK_IMPORTED_MODULE_1__["default"].Api( settings );
	var classes = settings.oClasses;
	var lang    = settings.oLanguage.oPaginate;
	var aria = settings.oLanguage.oAria.paginate || {};
	var btnDisplay, btnClass;

	var attach = function( container, buttons ) {
		var i, ien, node, button;
		var clickHandler = function ( e ) {
			e.preventDefault();
			if ( !$(e.currentTarget).hasClass('disabled') && api.page() != e.data.action ) {
				api.page( e.data.action ).draw( 'page' );
			}
		};

		for ( i=0, ien=buttons.length ; i<ien ; i++ ) {
			button = buttons[i];

			if ( Array.isArray( button ) ) {
				attach( container, button );
			}
			else {
				btnDisplay = '';
				btnClass = '';

				switch ( button ) {
					case 'ellipsis':
						btnDisplay = '&#x2026;';
						btnClass = 'disabled';
						break;

					case 'first':
						btnDisplay = lang.sFirst;
						btnClass = button + (page > 0 ?
							'' : ' disabled');
						break;

					case 'previous':
						btnDisplay = lang.sPrevious;
						btnClass = button + (page > 0 ?
							'' : ' disabled');
						break;

					case 'next':
						btnDisplay = lang.sNext;
						btnClass = button + (page < pages-1 ?
							'' : ' disabled');
						break;

					case 'last':
						btnDisplay = lang.sLast;
						btnClass = button + (page < pages-1 ?
							'' : ' disabled');
						break;

					default:
						btnDisplay = button + 1;
						btnClass = page === button ?
							'active' : '';
						break;
				}

				if ( btnDisplay ) {
					var disabled = btnClass.indexOf('disabled') !== -1;

					node = $('<li>', {
							'class': classes.sPageButton+' '+btnClass,
							'id': idx === 0 && typeof button === 'string' ?
								settings.sTableId +'_'+ button :
								null
						} )
						.append( $('<a>', {
								'href': disabled ? null : '#',
								'aria-controls': settings.sTableId,
								'aria-disabled': disabled ? 'true' : null,
								'aria-label': aria[ button ],
								'role': 'link',
								'aria-current': btnClass === 'active' ? 'page' : null,
								'data-dt-idx': button,
								'tabindex': disabled ? -1 : settings.iTabIndex,
								'class': 'page-link'
							} )
							.html( btnDisplay )
						)
						.appendTo( container );

					settings.oApi._fnBindAction(
						node, {action: button}, clickHandler
					);
				}
			}
		}
	};

	// IE9 throws an 'unknown error' if document.activeElement is used
	// inside an iframe or frame. 
	var activeEl;

	try {
		// Because this approach is destroying and recreating the paging
		// elements, focus is lost on the select button which is bad for
		// accessibility. So we want to restore focus once the draw has
		// completed
		activeEl = $(host).find(document.activeElement).data('dt-idx');
	}
	catch (e) {}

	attach(
		$(host).empty().html('<ul class="pagination"/>').children('ul'),
		buttons
	);

	if ( activeEl !== undefined ) {
		$(host).find( '[data-dt-idx='+activeEl+']' ).trigger('focus');
	}
};


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (datatables_net__WEBPACK_IMPORTED_MODULE_1__["default"]);


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_internals_export_js","vendors-node_modules_core-js_internals_add-to-unscopables_js-node_modules_core-js_internals_a-09983a","vendors-node_modules_core-js_internals_array-slice_js-node_modules_core-js_internals_function-caeab8","vendors-node_modules_core-js_modules_es_string_iterator_js-node_modules_core-js_modules_es_sy-23bad7","vendors-node_modules_jquery_dist_jquery_js","vendors-node_modules_datatables_net_js_jquery_dataTables_mjs","vendors-node_modules_datatables_net-buttons_js_dataTables_buttons_js"], () => (__webpack_exec__("./assets/css/portoadmin/vendor/datatables/extras/TableTools/Buttons-1.4.2/js/buttons.bootstrap4.min.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvanMvYnV0dG9ucy5ib290c3RyYXA0LjVkZTc2ZjM2LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsVUFBU0EsQ0FBQyxFQUFDO0VBQUMsS0FBc0MsR0FBQ0MsaUNBQU8sQ0FBQyx5RUFBUSxFQUFDLCtHQUFvQixFQUFDLG1IQUF3QixDQUFDLG1DQUFDLFVBQVNFLENBQUMsRUFBQztJQUFDLE9BQU9ILENBQUMsQ0FBQ0csQ0FBQyxFQUFDQyxNQUFNLEVBQUNDLFFBQVEsQ0FBQztFQUFBLENBQUM7QUFBQSxrR0FBQyxHQUFDLENBQXFQO0FBQUEsQ0FBQyxFQUFFLFVBQVNMLENBQUMsRUFBQztFQUFDLElBQUlHLENBQUMsR0FBQ0gsQ0FBQyxDQUFDVSxFQUFFLENBQUNDLFNBQVM7RUFBQ1gsQ0FBQyxDQUFDZ0IsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFDYixDQUFDLENBQUNXLE9BQU8sQ0FBQ0csUUFBUSxFQUFDO0lBQUNDLEdBQUcsRUFBQztNQUFDQyxTQUFTLEVBQUM7UUFBQ0MsU0FBUyxFQUFDO01BQXNCLENBQUM7TUFDeGdCQyxNQUFNLEVBQUM7UUFBQ0QsU0FBUyxFQUFDO01BQW1CLENBQUM7TUFBQ0UsVUFBVSxFQUFDO1FBQUNDLEdBQUcsRUFBQyxLQUFLO1FBQUNILFNBQVMsRUFBQyxvQ0FBb0M7UUFBQ0MsTUFBTSxFQUFDO1VBQUNFLEdBQUcsRUFBQyxHQUFHO1VBQUNILFNBQVMsRUFBQyx5QkFBeUI7VUFBQ0ksTUFBTSxFQUFDLFFBQVE7VUFBQ0MsUUFBUSxFQUFDO1FBQVU7TUFBQztJQUFDO0VBQUMsQ0FBQyxDQUFDO0VBQUN0QixDQUFDLENBQUN1QixHQUFHLENBQUNDLE9BQU8sQ0FBQ0wsVUFBVSxDQUFDRixTQUFTLElBQUUsa0JBQWtCO0VBQUMsT0FBT2pCLENBQUMsQ0FBQ1csT0FBTztBQUFBLENBQUMsQ0FBQyxDOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0xsUjtBQUNBO0FBQ0E7O0FBRTRCO0FBQ1c7O0FBRXZDO0FBQ0EsUUFBUSxtQ0FBTTs7O0FBR2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGdCQUFnQixzREFBUztBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7O0FBR0Y7QUFDQSxVQUFVLHNEQUFTO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOzs7QUFHRjtBQUNBLHNEQUFTO0FBQ1QsbUJBQW1CLHNEQUFTO0FBQzVCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsa0NBQWtDLFFBQVE7QUFDMUM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw0QkFBNEI7QUFDNUI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0EsYUFBYSxlQUFlO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBLGlFQUFlLHNEQUFTLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY3NzL3BvcnRvYWRtaW4vdmVuZG9yL2RhdGF0YWJsZXMvZXh0cmFzL1RhYmxlVG9vbHMvQnV0dG9ucy0xLjQuMi9qcy9idXR0b25zLmJvb3RzdHJhcDQubWluLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kYXRhdGFibGVzLm5ldC1iczQvanMvZGF0YVRhYmxlcy5ib290c3RyYXA0Lm1qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiFcclxuIEJvb3RzdHJhcCBpbnRlZ3JhdGlvbiBmb3IgRGF0YVRhYmxlcycgQnV0dG9uc1xyXG4gwqkyMDE2IFNwcnlNZWRpYSBMdGQgLSBkYXRhdGFibGVzLm5ldC9saWNlbnNlXHJcbiovXHJcbihmdW5jdGlvbihjKXtcImZ1bmN0aW9uXCI9PT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShbXCJqcXVlcnlcIixcImRhdGF0YWJsZXMubmV0LWJzNFwiLFwiZGF0YXRhYmxlcy5uZXQtYnV0dG9uc1wiXSxmdW5jdGlvbihhKXtyZXR1cm4gYyhhLHdpbmRvdyxkb2N1bWVudCl9KTpcIm9iamVjdFwiPT09dHlwZW9mIGV4cG9ydHM/bW9kdWxlLmV4cG9ydHM9ZnVuY3Rpb24oYSxiKXthfHwoYT13aW5kb3cpO2lmKCFifHwhYi5mbi5kYXRhVGFibGUpYj1yZXF1aXJlKFwiZGF0YXRhYmxlcy5uZXQtYnM0XCIpKGEsYikuJDtiLmZuLmRhdGFUYWJsZS5CdXR0b25zfHxyZXF1aXJlKFwiZGF0YXRhYmxlcy5uZXQtYnV0dG9uc1wiKShhLGIpO3JldHVybiBjKGIsYSxhLmRvY3VtZW50KX06YyhqUXVlcnksd2luZG93LGRvY3VtZW50KX0pKGZ1bmN0aW9uKGMpe3ZhciBhPWMuZm4uZGF0YVRhYmxlO2MuZXh0ZW5kKCEwLGEuQnV0dG9ucy5kZWZhdWx0cyx7ZG9tOntjb250YWluZXI6e2NsYXNzTmFtZTpcImR0LWJ1dHRvbnMgYnRuLWdyb3VwXCJ9LFxyXG5idXR0b246e2NsYXNzTmFtZTpcImJ0biBidG4tc2Vjb25kYXJ5XCJ9LGNvbGxlY3Rpb246e3RhZzpcImRpdlwiLGNsYXNzTmFtZTpcImR0LWJ1dHRvbi1jb2xsZWN0aW9uIGRyb3Bkb3duLW1lbnVcIixidXR0b246e3RhZzpcImFcIixjbGFzc05hbWU6XCJkdC1idXR0b24gZHJvcGRvd24taXRlbVwiLGFjdGl2ZTpcImFjdGl2ZVwiLGRpc2FibGVkOlwiZGlzYWJsZWRcIn19fX0pO2EuZXh0LmJ1dHRvbnMuY29sbGVjdGlvbi5jbGFzc05hbWUrPVwiIGRyb3Bkb3duLXRvZ2dsZVwiO3JldHVybiBhLkJ1dHRvbnN9KTtcclxuIiwiLyohIERhdGFUYWJsZXMgQm9vdHN0cmFwIDQgaW50ZWdyYXRpb25cbiAqIMKpMjAxMS0yMDE3IFNwcnlNZWRpYSBMdGQgLSBkYXRhdGFibGVzLm5ldC9saWNlbnNlXG4gKi9cblxuaW1wb3J0IGpRdWVyeSBmcm9tICdqcXVlcnknO1xuaW1wb3J0IERhdGFUYWJsZSBmcm9tICdkYXRhdGFibGVzLm5ldCc7XG5cbi8vIEFsbG93IHJlYXNzaWdubWVudCBvZiB0aGUgJCB2YXJpYWJsZVxubGV0ICQgPSBqUXVlcnk7XG5cblxuLyoqXG4gKiBEYXRhVGFibGVzIGludGVncmF0aW9uIGZvciBCb290c3RyYXAgNC4gVGhpcyByZXF1aXJlcyBCb290c3RyYXAgNCBhbmRcbiAqIERhdGFUYWJsZXMgMS4xMCBvciBuZXdlci5cbiAqXG4gKiBUaGlzIGZpbGUgc2V0cyB0aGUgZGVmYXVsdHMgYW5kIGFkZHMgb3B0aW9ucyB0byBEYXRhVGFibGVzIHRvIHN0eWxlIGl0c1xuICogY29udHJvbHMgdXNpbmcgQm9vdHN0cmFwLiBTZWUgaHR0cHM6Ly9kYXRhdGFibGVzLm5ldC9tYW51YWwvc3R5bGluZy9ib290c3RyYXBcbiAqIGZvciBmdXJ0aGVyIGluZm9ybWF0aW9uLlxuICovXG5cbi8qIFNldCB0aGUgZGVmYXVsdHMgZm9yIERhdGFUYWJsZXMgaW5pdGlhbGlzYXRpb24gKi9cbiQuZXh0ZW5kKCB0cnVlLCBEYXRhVGFibGUuZGVmYXVsdHMsIHtcblx0ZG9tOlxuXHRcdFwiPCdyb3cnPCdjb2wtc20tMTIgY29sLW1kLTYnbD48J2NvbC1zbS0xMiBjb2wtbWQtNidmPj5cIiArXG5cdFx0XCI8J3Jvdyc8J2NvbC1zbS0xMid0cj4+XCIgK1xuXHRcdFwiPCdyb3cnPCdjb2wtc20tMTIgY29sLW1kLTUnaT48J2NvbC1zbS0xMiBjb2wtbWQtNydwPj5cIixcblx0cmVuZGVyZXI6ICdib290c3RyYXAnXG59ICk7XG5cblxuLyogRGVmYXVsdCBjbGFzcyBtb2RpZmljYXRpb24gKi9cbiQuZXh0ZW5kKCBEYXRhVGFibGUuZXh0LmNsYXNzZXMsIHtcblx0c1dyYXBwZXI6ICAgICAgXCJkYXRhVGFibGVzX3dyYXBwZXIgZHQtYm9vdHN0cmFwNFwiLFxuXHRzRmlsdGVySW5wdXQ6ICBcImZvcm0tY29udHJvbCBmb3JtLWNvbnRyb2wtc21cIixcblx0c0xlbmd0aFNlbGVjdDogXCJjdXN0b20tc2VsZWN0IGN1c3RvbS1zZWxlY3Qtc20gZm9ybS1jb250cm9sIGZvcm0tY29udHJvbC1zbVwiLFxuXHRzUHJvY2Vzc2luZzogICBcImRhdGFUYWJsZXNfcHJvY2Vzc2luZyBjYXJkXCIsXG5cdHNQYWdlQnV0dG9uOiAgIFwicGFnaW5hdGVfYnV0dG9uIHBhZ2UtaXRlbVwiXG59ICk7XG5cblxuLyogQm9vdHN0cmFwIHBhZ2luZyBidXR0b24gcmVuZGVyZXIgKi9cbkRhdGFUYWJsZS5leHQucmVuZGVyZXIucGFnZUJ1dHRvbi5ib290c3RyYXAgPSBmdW5jdGlvbiAoIHNldHRpbmdzLCBob3N0LCBpZHgsIGJ1dHRvbnMsIHBhZ2UsIHBhZ2VzICkge1xuXHR2YXIgYXBpICAgICA9IG5ldyBEYXRhVGFibGUuQXBpKCBzZXR0aW5ncyApO1xuXHR2YXIgY2xhc3NlcyA9IHNldHRpbmdzLm9DbGFzc2VzO1xuXHR2YXIgbGFuZyAgICA9IHNldHRpbmdzLm9MYW5ndWFnZS5vUGFnaW5hdGU7XG5cdHZhciBhcmlhID0gc2V0dGluZ3Mub0xhbmd1YWdlLm9BcmlhLnBhZ2luYXRlIHx8IHt9O1xuXHR2YXIgYnRuRGlzcGxheSwgYnRuQ2xhc3M7XG5cblx0dmFyIGF0dGFjaCA9IGZ1bmN0aW9uKCBjb250YWluZXIsIGJ1dHRvbnMgKSB7XG5cdFx0dmFyIGksIGllbiwgbm9kZSwgYnV0dG9uO1xuXHRcdHZhciBjbGlja0hhbmRsZXIgPSBmdW5jdGlvbiAoIGUgKSB7XG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRpZiAoICEkKGUuY3VycmVudFRhcmdldCkuaGFzQ2xhc3MoJ2Rpc2FibGVkJykgJiYgYXBpLnBhZ2UoKSAhPSBlLmRhdGEuYWN0aW9uICkge1xuXHRcdFx0XHRhcGkucGFnZSggZS5kYXRhLmFjdGlvbiApLmRyYXcoICdwYWdlJyApO1xuXHRcdFx0fVxuXHRcdH07XG5cblx0XHRmb3IgKCBpPTAsIGllbj1idXR0b25zLmxlbmd0aCA7IGk8aWVuIDsgaSsrICkge1xuXHRcdFx0YnV0dG9uID0gYnV0dG9uc1tpXTtcblxuXHRcdFx0aWYgKCBBcnJheS5pc0FycmF5KCBidXR0b24gKSApIHtcblx0XHRcdFx0YXR0YWNoKCBjb250YWluZXIsIGJ1dHRvbiApO1xuXHRcdFx0fVxuXHRcdFx0ZWxzZSB7XG5cdFx0XHRcdGJ0bkRpc3BsYXkgPSAnJztcblx0XHRcdFx0YnRuQ2xhc3MgPSAnJztcblxuXHRcdFx0XHRzd2l0Y2ggKCBidXR0b24gKSB7XG5cdFx0XHRcdFx0Y2FzZSAnZWxsaXBzaXMnOlxuXHRcdFx0XHRcdFx0YnRuRGlzcGxheSA9ICcmI3gyMDI2Oyc7XG5cdFx0XHRcdFx0XHRidG5DbGFzcyA9ICdkaXNhYmxlZCc7XG5cdFx0XHRcdFx0XHRicmVhaztcblxuXHRcdFx0XHRcdGNhc2UgJ2ZpcnN0Jzpcblx0XHRcdFx0XHRcdGJ0bkRpc3BsYXkgPSBsYW5nLnNGaXJzdDtcblx0XHRcdFx0XHRcdGJ0bkNsYXNzID0gYnV0dG9uICsgKHBhZ2UgPiAwID9cblx0XHRcdFx0XHRcdFx0JycgOiAnIGRpc2FibGVkJyk7XG5cdFx0XHRcdFx0XHRicmVhaztcblxuXHRcdFx0XHRcdGNhc2UgJ3ByZXZpb3VzJzpcblx0XHRcdFx0XHRcdGJ0bkRpc3BsYXkgPSBsYW5nLnNQcmV2aW91cztcblx0XHRcdFx0XHRcdGJ0bkNsYXNzID0gYnV0dG9uICsgKHBhZ2UgPiAwID9cblx0XHRcdFx0XHRcdFx0JycgOiAnIGRpc2FibGVkJyk7XG5cdFx0XHRcdFx0XHRicmVhaztcblxuXHRcdFx0XHRcdGNhc2UgJ25leHQnOlxuXHRcdFx0XHRcdFx0YnRuRGlzcGxheSA9IGxhbmcuc05leHQ7XG5cdFx0XHRcdFx0XHRidG5DbGFzcyA9IGJ1dHRvbiArIChwYWdlIDwgcGFnZXMtMSA/XG5cdFx0XHRcdFx0XHRcdCcnIDogJyBkaXNhYmxlZCcpO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdFx0XHRjYXNlICdsYXN0Jzpcblx0XHRcdFx0XHRcdGJ0bkRpc3BsYXkgPSBsYW5nLnNMYXN0O1xuXHRcdFx0XHRcdFx0YnRuQ2xhc3MgPSBidXR0b24gKyAocGFnZSA8IHBhZ2VzLTEgP1xuXHRcdFx0XHRcdFx0XHQnJyA6ICcgZGlzYWJsZWQnKTtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0XHRcdGJ0bkRpc3BsYXkgPSBidXR0b24gKyAxO1xuXHRcdFx0XHRcdFx0YnRuQ2xhc3MgPSBwYWdlID09PSBidXR0b24gP1xuXHRcdFx0XHRcdFx0XHQnYWN0aXZlJyA6ICcnO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAoIGJ0bkRpc3BsYXkgKSB7XG5cdFx0XHRcdFx0dmFyIGRpc2FibGVkID0gYnRuQ2xhc3MuaW5kZXhPZignZGlzYWJsZWQnKSAhPT0gLTE7XG5cblx0XHRcdFx0XHRub2RlID0gJCgnPGxpPicsIHtcblx0XHRcdFx0XHRcdFx0J2NsYXNzJzogY2xhc3Nlcy5zUGFnZUJ1dHRvbisnICcrYnRuQ2xhc3MsXG5cdFx0XHRcdFx0XHRcdCdpZCc6IGlkeCA9PT0gMCAmJiB0eXBlb2YgYnV0dG9uID09PSAnc3RyaW5nJyA/XG5cdFx0XHRcdFx0XHRcdFx0c2V0dGluZ3Muc1RhYmxlSWQgKydfJysgYnV0dG9uIDpcblx0XHRcdFx0XHRcdFx0XHRudWxsXG5cdFx0XHRcdFx0XHR9IClcblx0XHRcdFx0XHRcdC5hcHBlbmQoICQoJzxhPicsIHtcblx0XHRcdFx0XHRcdFx0XHQnaHJlZic6IGRpc2FibGVkID8gbnVsbCA6ICcjJyxcblx0XHRcdFx0XHRcdFx0XHQnYXJpYS1jb250cm9scyc6IHNldHRpbmdzLnNUYWJsZUlkLFxuXHRcdFx0XHRcdFx0XHRcdCdhcmlhLWRpc2FibGVkJzogZGlzYWJsZWQgPyAndHJ1ZScgOiBudWxsLFxuXHRcdFx0XHRcdFx0XHRcdCdhcmlhLWxhYmVsJzogYXJpYVsgYnV0dG9uIF0sXG5cdFx0XHRcdFx0XHRcdFx0J3JvbGUnOiAnbGluaycsXG5cdFx0XHRcdFx0XHRcdFx0J2FyaWEtY3VycmVudCc6IGJ0bkNsYXNzID09PSAnYWN0aXZlJyA/ICdwYWdlJyA6IG51bGwsXG5cdFx0XHRcdFx0XHRcdFx0J2RhdGEtZHQtaWR4JzogYnV0dG9uLFxuXHRcdFx0XHRcdFx0XHRcdCd0YWJpbmRleCc6IGRpc2FibGVkID8gLTEgOiBzZXR0aW5ncy5pVGFiSW5kZXgsXG5cdFx0XHRcdFx0XHRcdFx0J2NsYXNzJzogJ3BhZ2UtbGluaydcblx0XHRcdFx0XHRcdFx0fSApXG5cdFx0XHRcdFx0XHRcdC5odG1sKCBidG5EaXNwbGF5IClcblx0XHRcdFx0XHRcdClcblx0XHRcdFx0XHRcdC5hcHBlbmRUbyggY29udGFpbmVyICk7XG5cblx0XHRcdFx0XHRzZXR0aW5ncy5vQXBpLl9mbkJpbmRBY3Rpb24oXG5cdFx0XHRcdFx0XHRub2RlLCB7YWN0aW9uOiBidXR0b259LCBjbGlja0hhbmRsZXJcblx0XHRcdFx0XHQpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xuXG5cdC8vIElFOSB0aHJvd3MgYW4gJ3Vua25vd24gZXJyb3InIGlmIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgaXMgdXNlZFxuXHQvLyBpbnNpZGUgYW4gaWZyYW1lIG9yIGZyYW1lLiBcblx0dmFyIGFjdGl2ZUVsO1xuXG5cdHRyeSB7XG5cdFx0Ly8gQmVjYXVzZSB0aGlzIGFwcHJvYWNoIGlzIGRlc3Ryb3lpbmcgYW5kIHJlY3JlYXRpbmcgdGhlIHBhZ2luZ1xuXHRcdC8vIGVsZW1lbnRzLCBmb2N1cyBpcyBsb3N0IG9uIHRoZSBzZWxlY3QgYnV0dG9uIHdoaWNoIGlzIGJhZCBmb3Jcblx0XHQvLyBhY2Nlc3NpYmlsaXR5LiBTbyB3ZSB3YW50IHRvIHJlc3RvcmUgZm9jdXMgb25jZSB0aGUgZHJhdyBoYXNcblx0XHQvLyBjb21wbGV0ZWRcblx0XHRhY3RpdmVFbCA9ICQoaG9zdCkuZmluZChkb2N1bWVudC5hY3RpdmVFbGVtZW50KS5kYXRhKCdkdC1pZHgnKTtcblx0fVxuXHRjYXRjaCAoZSkge31cblxuXHRhdHRhY2goXG5cdFx0JChob3N0KS5lbXB0eSgpLmh0bWwoJzx1bCBjbGFzcz1cInBhZ2luYXRpb25cIi8+JykuY2hpbGRyZW4oJ3VsJyksXG5cdFx0YnV0dG9uc1xuXHQpO1xuXG5cdGlmICggYWN0aXZlRWwgIT09IHVuZGVmaW5lZCApIHtcblx0XHQkKGhvc3QpLmZpbmQoICdbZGF0YS1kdC1pZHg9JythY3RpdmVFbCsnXScgKS50cmlnZ2VyKCdmb2N1cycpO1xuXHR9XG59O1xuXG5cbmV4cG9ydCBkZWZhdWx0IERhdGFUYWJsZTtcbiJdLCJuYW1lcyI6WyJjIiwiZGVmaW5lIiwiYW1kIiwiYSIsIndpbmRvdyIsImRvY3VtZW50IiwiZXhwb3J0cyIsIl90eXBlb2YiLCJtb2R1bGUiLCJiIiwiZm4iLCJkYXRhVGFibGUiLCJyZXF1aXJlIiwiJCIsIkJ1dHRvbnMiLCJqUXVlcnkiLCJleHRlbmQiLCJkZWZhdWx0cyIsImRvbSIsImNvbnRhaW5lciIsImNsYXNzTmFtZSIsImJ1dHRvbiIsImNvbGxlY3Rpb24iLCJ0YWciLCJhY3RpdmUiLCJkaXNhYmxlZCIsImV4dCIsImJ1dHRvbnMiXSwic291cmNlUm9vdCI6IiJ9