(self["webpackChunk"] = self["webpackChunk"] || []).push([["js/buttons.colVis.min"],{

/***/ "./assets/css/portoadmin/vendor/datatables/extras/TableTools/Buttons-1.4.2/js/buttons.colVis.min.js":
/*!**********************************************************************************************************!*\
  !*** ./assets/css/portoadmin/vendor/datatables/extras/TableTools/Buttons-1.4.2/js/buttons.colVis.min.js ***!
  \**********************************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;__webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
__webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
__webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
__webpack_require__(/*! core-js/modules/es.array.every.js */ "./node_modules/core-js/modules/es.array.every.js");
__webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
__webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
__webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
__webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
__webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
__webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
__webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
(function (g) {
   true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js"), __webpack_require__(/*! datatables.net */ "./node_modules/datatables.net/js/jquery.dataTables.mjs"), __webpack_require__(/*! datatables.net-buttons */ "./node_modules/datatables.net-buttons/js/dataTables.buttons.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (d) {
    return g(d, window, document);
  }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : 0;
})(function (g, d, e, h) {
  d = g.fn.dataTable;
  g.extend(d.ext.buttons, {
    colvis: function colvis(b, a) {
      return {
        extend: "collection",
        text: function text(a) {
          return a.i18n("buttons.colvis", "Column visibility");
        },
        className: "buttons-colvis",
        buttons: [{
          extend: "columnsToggle",
          columns: a.columns,
          columnText: a.columnText
        }]
      };
    },
    columnsToggle: function columnsToggle(b, a) {
      return b.columns(a.columns).indexes().map(function (b) {
        return {
          extend: "columnToggle",
          columns: b,
          columnText: a.columnText
        };
      }).toArray();
    },
    columnToggle: function columnToggle(b, a) {
      return {
        extend: "columnVisibility",
        columns: a.columns,
        columnText: a.columnText
      };
    },
    columnsVisibility: function columnsVisibility(b, a) {
      return b.columns(a.columns).indexes().map(function (b) {
        return {
          extend: "columnVisibility",
          columns: b,
          visibility: a.visibility,
          columnText: a.columnText
        };
      }).toArray();
    },
    columnVisibility: {
      columns: h,
      text: function text(b, a, c) {
        return c._columnText(b, c);
      },
      className: "buttons-columnVisibility",
      action: function action(b, a, c, f) {
        b = a.columns(f.columns);
        a = b.visible();
        b.visible(f.visibility !== h ? f.visibility : !(a.length && a[0]));
      },
      init: function init(b, a, c) {
        var f = this;
        b.on("column-visibility.dt" + c.namespace, function (a, d) {
          !d.bDestroying && d.nTable == b.settings()[0].nTable && f.active(b.column(c.columns).visible());
        }).on("column-reorder.dt" + c.namespace, function (a, d, e) {
          1 === b.columns(c.columns).count() && ("number" === typeof c.columns && (c.columns = e.mapping[c.columns]), a = b.column(c.columns), f.text(c._columnText(b, c)), f.active(a.visible()));
        });
        this.active(b.column(c.columns).visible());
      },
      destroy: function destroy(b, a, c) {
        b.off("column-visibility.dt" + c.namespace).off("column-reorder.dt" + c.namespace);
      },
      _columnText: function _columnText(b, a) {
        var c = b.column(a.columns).index(),
          f = b.settings()[0].aoColumns[c].sTitle.replace(/\n/g, " ").replace(/<br\s*\/?>/gi, " ").replace(/<.*?>/g, "").replace(/^\s+|\s+$/g, "");
        return a.columnText ? a.columnText(b, c, f) : f;
      }
    },
    colvisRestore: {
      className: "buttons-colvisRestore",
      text: function text(b) {
        return b.i18n("buttons.colvisRestore", "Restore visibility");
      },
      init: function init(b, a, c) {
        c._visOriginal = b.columns().indexes().map(function (a) {
          return b.column(a).visible();
        }).toArray();
      },
      action: function action(b, a, c, d) {
        a.columns().every(function (b) {
          b = a.colReorder && a.colReorder.transpose ? a.colReorder.transpose(b, "toOriginal") : b;
          this.visible(d._visOriginal[b]);
        });
      }
    },
    colvisGroup: {
      className: "buttons-colvisGroup",
      action: function action(b, a, c, d) {
        a.columns(d.show).visible(!0, !1);
        a.columns(d.hide).visible(!1, !1);
        a.columns.adjust();
      },
      show: [],
      hide: []
    }
  });
  return d.Buttons;
});

/***/ }),

/***/ "./node_modules/core-js/internals/array-method-is-strict.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/internals/array-method-is-strict.js ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

module.exports = function (METHOD_NAME, argument) {
  var method = [][METHOD_NAME];
  return !!method && fails(function () {
    // eslint-disable-next-line no-useless-call -- required for testing
    method.call(null, argument || function () { return 1; }, 1);
  });
};


/***/ }),

/***/ "./node_modules/core-js/internals/get-substitution.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/internals/get-substitution.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");

var floor = Math.floor;
var charAt = uncurryThis(''.charAt);
var replace = uncurryThis(''.replace);
var stringSlice = uncurryThis(''.slice);
// eslint-disable-next-line redos/no-vulnerable -- safe
var SUBSTITUTION_SYMBOLS = /\$([$&'`]|\d{1,2}|<[^>]*>)/g;
var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&'`]|\d{1,2})/g;

// `GetSubstitution` abstract operation
// https://tc39.es/ecma262/#sec-getsubstitution
module.exports = function (matched, str, position, captures, namedCaptures, replacement) {
  var tailPos = position + matched.length;
  var m = captures.length;
  var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
  if (namedCaptures !== undefined) {
    namedCaptures = toObject(namedCaptures);
    symbols = SUBSTITUTION_SYMBOLS;
  }
  return replace(replacement, symbols, function (match, ch) {
    var capture;
    switch (charAt(ch, 0)) {
      case '$': return '$';
      case '&': return matched;
      case '`': return stringSlice(str, 0, position);
      case "'": return stringSlice(str, tailPos);
      case '<':
        capture = namedCaptures[stringSlice(ch, 1, -1)];
        break;
      default: // \d\d?
        var n = +ch;
        if (n === 0) return match;
        if (n > m) {
          var f = floor(n / 10);
          if (f === 0) return match;
          if (f <= m) return captures[f - 1] === undefined ? charAt(ch, 1) : captures[f - 1] + charAt(ch, 1);
          return match;
        }
        capture = captures[n - 1];
    }
    return capture === undefined ? '' : capture;
  });
};


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

/***/ "./node_modules/core-js/modules/es.array.every.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.every.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var $every = (__webpack_require__(/*! ../internals/array-iteration */ "./node_modules/core-js/internals/array-iteration.js").every);
var arrayMethodIsStrict = __webpack_require__(/*! ../internals/array-method-is-strict */ "./node_modules/core-js/internals/array-method-is-strict.js");

var STRICT_METHOD = arrayMethodIsStrict('every');

// `Array.prototype.every` method
// https://tc39.es/ecma262/#sec-array.prototype.every
$({ target: 'Array', proto: true, forced: !STRICT_METHOD }, {
  every: function every(callbackfn /* , thisArg */) {
    return $every(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});


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


/***/ }),

/***/ "./node_modules/core-js/modules/es.string.replace.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.replace.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var apply = __webpack_require__(/*! ../internals/function-apply */ "./node_modules/core-js/internals/function-apply.js");
var call = __webpack_require__(/*! ../internals/function-call */ "./node_modules/core-js/internals/function-call.js");
var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");
var fixRegExpWellKnownSymbolLogic = __webpack_require__(/*! ../internals/fix-regexp-well-known-symbol-logic */ "./node_modules/core-js/internals/fix-regexp-well-known-symbol-logic.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var isCallable = __webpack_require__(/*! ../internals/is-callable */ "./node_modules/core-js/internals/is-callable.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var toIntegerOrInfinity = __webpack_require__(/*! ../internals/to-integer-or-infinity */ "./node_modules/core-js/internals/to-integer-or-infinity.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");
var toString = __webpack_require__(/*! ../internals/to-string */ "./node_modules/core-js/internals/to-string.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");
var advanceStringIndex = __webpack_require__(/*! ../internals/advance-string-index */ "./node_modules/core-js/internals/advance-string-index.js");
var getMethod = __webpack_require__(/*! ../internals/get-method */ "./node_modules/core-js/internals/get-method.js");
var getSubstitution = __webpack_require__(/*! ../internals/get-substitution */ "./node_modules/core-js/internals/get-substitution.js");
var getRegExpFlags = __webpack_require__(/*! ../internals/regexp-get-flags */ "./node_modules/core-js/internals/regexp-get-flags.js");
var regExpExec = __webpack_require__(/*! ../internals/regexp-exec-abstract */ "./node_modules/core-js/internals/regexp-exec-abstract.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var REPLACE = wellKnownSymbol('replace');
var max = Math.max;
var min = Math.min;
var concat = uncurryThis([].concat);
var push = uncurryThis([].push);
var stringIndexOf = uncurryThis(''.indexOf);
var stringSlice = uncurryThis(''.slice);

var maybeToString = function (it) {
  return it === undefined ? it : String(it);
};

// IE <= 11 replaces $0 with the whole match, as if it was $&
// https://stackoverflow.com/questions/6024666/getting-ie-to-replace-a-regex-with-the-literal-string-0
var REPLACE_KEEPS_$0 = (function () {
  // eslint-disable-next-line regexp/prefer-escape-replacement-dollar-char -- required for testing
  return 'a'.replace(/./, '$0') === '$0';
})();

// Safari <= 13.0.3(?) substitutes nth capture where n>m with an empty string
var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = (function () {
  if (/./[REPLACE]) {
    return /./[REPLACE]('a', '$0') === '';
  }
  return false;
})();

var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {
  var re = /./;
  re.exec = function () {
    var result = [];
    result.groups = { a: '7' };
    return result;
  };
  // eslint-disable-next-line regexp/no-useless-dollar-replacements -- false positive
  return ''.replace(re, '$<a>') !== '7';
});

// @@replace logic
fixRegExpWellKnownSymbolLogic('replace', function (_, nativeReplace, maybeCallNative) {
  var UNSAFE_SUBSTITUTE = REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE ? '$' : '$0';

  return [
    // `String.prototype.replace` method
    // https://tc39.es/ecma262/#sec-string.prototype.replace
    function replace(searchValue, replaceValue) {
      var O = requireObjectCoercible(this);
      var replacer = isObject(searchValue) ? getMethod(searchValue, REPLACE) : undefined;
      return replacer
        ? call(replacer, searchValue, O, replaceValue)
        : call(nativeReplace, toString(O), searchValue, replaceValue);
    },
    // `RegExp.prototype[@@replace]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@replace
    function (string, replaceValue) {
      var rx = anObject(this);
      var S = toString(string);

      if (
        typeof replaceValue == 'string' &&
        stringIndexOf(replaceValue, UNSAFE_SUBSTITUTE) === -1 &&
        stringIndexOf(replaceValue, '$<') === -1
      ) {
        var res = maybeCallNative(nativeReplace, rx, S, replaceValue);
        if (res.done) return res.value;
      }

      var functionalReplace = isCallable(replaceValue);
      if (!functionalReplace) replaceValue = toString(replaceValue);

      var flags = toString(getRegExpFlags(rx));
      var global = stringIndexOf(flags, 'g') !== -1;
      var fullUnicode;
      if (global) {
        fullUnicode = stringIndexOf(flags, 'u') !== -1;
        rx.lastIndex = 0;
      }

      var results = [];
      var result;
      while (true) {
        result = regExpExec(rx, S);
        if (result === null) break;

        push(results, result);
        if (!global) break;

        var matchStr = toString(result[0]);
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
      }

      var accumulatedResult = '';
      var nextSourcePosition = 0;
      for (var i = 0; i < results.length; i++) {
        result = results[i];

        var matched = toString(result[0]);
        var position = max(min(toIntegerOrInfinity(result.index), S.length), 0);
        var captures = [];
        var replacement;
        // NOTE: This is equivalent to
        //   captures = result.slice(1).map(maybeToString)
        // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
        // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
        // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
        for (var j = 1; j < result.length; j++) push(captures, maybeToString(result[j]));
        var namedCaptures = result.groups;
        if (functionalReplace) {
          var replacerArgs = concat([matched], captures, position, S);
          if (namedCaptures !== undefined) push(replacerArgs, namedCaptures);
          replacement = toString(apply(replaceValue, undefined, replacerArgs));
        } else {
          replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
        }
        if (position >= nextSourcePosition) {
          accumulatedResult += stringSlice(S, nextSourcePosition, position) + replacement;
          nextSourcePosition = position + matched.length;
        }
      }

      return accumulatedResult + stringSlice(S, nextSourcePosition);
    }
  ];
}, !REPLACE_SUPPORTS_NAMED_GROUPS || !REPLACE_KEEPS_$0 || REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE);


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_internals_export_js","vendors-node_modules_core-js_internals_add-to-unscopables_js-node_modules_core-js_internals_a-09983a","vendors-node_modules_core-js_internals_array-slice_js-node_modules_core-js_internals_function-caeab8","vendors-node_modules_core-js_modules_es_string_iterator_js-node_modules_core-js_modules_es_sy-23bad7","vendors-node_modules_jquery_dist_jquery_js","vendors-node_modules_core-js_internals_advance-string-index_js-node_modules_core-js_internals-27e96d","vendors-node_modules_core-js_internals_array-method-has-species-support_js-node_modules_core--d0f16b","vendors-node_modules_datatables_net_js_jquery_dataTables_mjs","vendors-node_modules_datatables_net-buttons_js_dataTables_buttons_js"], () => (__webpack_exec__("./assets/css/portoadmin/vendor/datatables/extras/TableTools/Buttons-1.4.2/js/buttons.colVis.min.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFtQjtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY3NzL3BvcnRvYWRtaW4vdmVuZG9yL2RhdGF0YWJsZXMvZXh0cmFzL1RhYmxlVG9vbHMvQnV0dG9ucy0xLjQuMi9qcy9idXR0b25zLmNvbFZpcy5taW4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2FycmF5LW1ldGhvZC1pcy1zdHJpY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2dldC1zdWJzdGl0dXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3NldC1zcGVjaWVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuYXJyYXkuZXZlcnkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5tYXAuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5zdHJpbmcucmVwbGFjZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oZyl7XCJmdW5jdGlvblwiPT09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUoW1wianF1ZXJ5XCIsXCJkYXRhdGFibGVzLm5ldFwiLFwiZGF0YXRhYmxlcy5uZXQtYnV0dG9uc1wiXSxmdW5jdGlvbihkKXtyZXR1cm4gZyhkLHdpbmRvdyxkb2N1bWVudCl9KTpcIm9iamVjdFwiPT09dHlwZW9mIGV4cG9ydHM/bW9kdWxlLmV4cG9ydHM9ZnVuY3Rpb24oZCxlKXtkfHwoZD13aW5kb3cpO2lmKCFlfHwhZS5mbi5kYXRhVGFibGUpZT1yZXF1aXJlKFwiZGF0YXRhYmxlcy5uZXRcIikoZCxlKS4kO2UuZm4uZGF0YVRhYmxlLkJ1dHRvbnN8fHJlcXVpcmUoXCJkYXRhdGFibGVzLm5ldC1idXR0b25zXCIpKGQsZSk7cmV0dXJuIGcoZSxkLGQuZG9jdW1lbnQpfTpnKGpRdWVyeSx3aW5kb3csZG9jdW1lbnQpfSkoZnVuY3Rpb24oZyxkLGUsaCl7ZD1nLmZuLmRhdGFUYWJsZTtnLmV4dGVuZChkLmV4dC5idXR0b25zLHtjb2x2aXM6ZnVuY3Rpb24oYixhKXtyZXR1cm57ZXh0ZW5kOlwiY29sbGVjdGlvblwiLFxyXG50ZXh0OmZ1bmN0aW9uKGEpe3JldHVybiBhLmkxOG4oXCJidXR0b25zLmNvbHZpc1wiLFwiQ29sdW1uIHZpc2liaWxpdHlcIil9LGNsYXNzTmFtZTpcImJ1dHRvbnMtY29sdmlzXCIsYnV0dG9uczpbe2V4dGVuZDpcImNvbHVtbnNUb2dnbGVcIixjb2x1bW5zOmEuY29sdW1ucyxjb2x1bW5UZXh0OmEuY29sdW1uVGV4dH1dfX0sY29sdW1uc1RvZ2dsZTpmdW5jdGlvbihiLGEpe3JldHVybiBiLmNvbHVtbnMoYS5jb2x1bW5zKS5pbmRleGVzKCkubWFwKGZ1bmN0aW9uKGIpe3JldHVybntleHRlbmQ6XCJjb2x1bW5Ub2dnbGVcIixjb2x1bW5zOmIsY29sdW1uVGV4dDphLmNvbHVtblRleHR9fSkudG9BcnJheSgpfSxjb2x1bW5Ub2dnbGU6ZnVuY3Rpb24oYixhKXtyZXR1cm57ZXh0ZW5kOlwiY29sdW1uVmlzaWJpbGl0eVwiLGNvbHVtbnM6YS5jb2x1bW5zLGNvbHVtblRleHQ6YS5jb2x1bW5UZXh0fX0sY29sdW1uc1Zpc2liaWxpdHk6ZnVuY3Rpb24oYixhKXtyZXR1cm4gYi5jb2x1bW5zKGEuY29sdW1ucykuaW5kZXhlcygpLm1hcChmdW5jdGlvbihiKXtyZXR1cm57ZXh0ZW5kOlwiY29sdW1uVmlzaWJpbGl0eVwiLFxyXG5jb2x1bW5zOmIsdmlzaWJpbGl0eTphLnZpc2liaWxpdHksY29sdW1uVGV4dDphLmNvbHVtblRleHR9fSkudG9BcnJheSgpfSxjb2x1bW5WaXNpYmlsaXR5Ontjb2x1bW5zOmgsdGV4dDpmdW5jdGlvbihiLGEsYyl7cmV0dXJuIGMuX2NvbHVtblRleHQoYixjKX0sY2xhc3NOYW1lOlwiYnV0dG9ucy1jb2x1bW5WaXNpYmlsaXR5XCIsYWN0aW9uOmZ1bmN0aW9uKGIsYSxjLGYpe2I9YS5jb2x1bW5zKGYuY29sdW1ucyk7YT1iLnZpc2libGUoKTtiLnZpc2libGUoZi52aXNpYmlsaXR5IT09aD9mLnZpc2liaWxpdHk6IShhLmxlbmd0aCYmYVswXSkpfSxpbml0OmZ1bmN0aW9uKGIsYSxjKXt2YXIgZj10aGlzO2Iub24oXCJjb2x1bW4tdmlzaWJpbGl0eS5kdFwiK2MubmFtZXNwYWNlLGZ1bmN0aW9uKGEsZCl7IWQuYkRlc3Ryb3lpbmcmJmQublRhYmxlPT1iLnNldHRpbmdzKClbMF0ublRhYmxlJiZmLmFjdGl2ZShiLmNvbHVtbihjLmNvbHVtbnMpLnZpc2libGUoKSl9KS5vbihcImNvbHVtbi1yZW9yZGVyLmR0XCIrXHJcbmMubmFtZXNwYWNlLGZ1bmN0aW9uKGEsZCxlKXsxPT09Yi5jb2x1bW5zKGMuY29sdW1ucykuY291bnQoKSYmKFwibnVtYmVyXCI9PT10eXBlb2YgYy5jb2x1bW5zJiYoYy5jb2x1bW5zPWUubWFwcGluZ1tjLmNvbHVtbnNdKSxhPWIuY29sdW1uKGMuY29sdW1ucyksZi50ZXh0KGMuX2NvbHVtblRleHQoYixjKSksZi5hY3RpdmUoYS52aXNpYmxlKCkpKX0pO3RoaXMuYWN0aXZlKGIuY29sdW1uKGMuY29sdW1ucykudmlzaWJsZSgpKX0sZGVzdHJveTpmdW5jdGlvbihiLGEsYyl7Yi5vZmYoXCJjb2x1bW4tdmlzaWJpbGl0eS5kdFwiK2MubmFtZXNwYWNlKS5vZmYoXCJjb2x1bW4tcmVvcmRlci5kdFwiK2MubmFtZXNwYWNlKX0sX2NvbHVtblRleHQ6ZnVuY3Rpb24oYixhKXt2YXIgYz1iLmNvbHVtbihhLmNvbHVtbnMpLmluZGV4KCksZj1iLnNldHRpbmdzKClbMF0uYW9Db2x1bW5zW2NdLnNUaXRsZS5yZXBsYWNlKC9cXG4vZyxcIiBcIikucmVwbGFjZSgvPGJyXFxzKlxcLz8+L2dpLFwiIFwiKS5yZXBsYWNlKC88Lio/Pi9nLFxyXG5cIlwiKS5yZXBsYWNlKC9eXFxzK3xcXHMrJC9nLFwiXCIpO3JldHVybiBhLmNvbHVtblRleHQ/YS5jb2x1bW5UZXh0KGIsYyxmKTpmfX0sY29sdmlzUmVzdG9yZTp7Y2xhc3NOYW1lOlwiYnV0dG9ucy1jb2x2aXNSZXN0b3JlXCIsdGV4dDpmdW5jdGlvbihiKXtyZXR1cm4gYi5pMThuKFwiYnV0dG9ucy5jb2x2aXNSZXN0b3JlXCIsXCJSZXN0b3JlIHZpc2liaWxpdHlcIil9LGluaXQ6ZnVuY3Rpb24oYixhLGMpe2MuX3Zpc09yaWdpbmFsPWIuY29sdW1ucygpLmluZGV4ZXMoKS5tYXAoZnVuY3Rpb24oYSl7cmV0dXJuIGIuY29sdW1uKGEpLnZpc2libGUoKX0pLnRvQXJyYXkoKX0sYWN0aW9uOmZ1bmN0aW9uKGIsYSxjLGQpe2EuY29sdW1ucygpLmV2ZXJ5KGZ1bmN0aW9uKGIpe2I9YS5jb2xSZW9yZGVyJiZhLmNvbFJlb3JkZXIudHJhbnNwb3NlP2EuY29sUmVvcmRlci50cmFuc3Bvc2UoYixcInRvT3JpZ2luYWxcIik6Yjt0aGlzLnZpc2libGUoZC5fdmlzT3JpZ2luYWxbYl0pfSl9fSxjb2x2aXNHcm91cDp7Y2xhc3NOYW1lOlwiYnV0dG9ucy1jb2x2aXNHcm91cFwiLFxyXG5hY3Rpb246ZnVuY3Rpb24oYixhLGMsZCl7YS5jb2x1bW5zKGQuc2hvdykudmlzaWJsZSghMCwhMSk7YS5jb2x1bW5zKGQuaGlkZSkudmlzaWJsZSghMSwhMSk7YS5jb2x1bW5zLmFkanVzdCgpfSxzaG93OltdLGhpZGU6W119fSk7cmV0dXJuIGQuQnV0dG9uc30pO1xyXG4iLCIndXNlIHN0cmljdCc7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoTUVUSE9EX05BTUUsIGFyZ3VtZW50KSB7XG4gIHZhciBtZXRob2QgPSBbXVtNRVRIT0RfTkFNRV07XG4gIHJldHVybiAhIW1ldGhvZCAmJiBmYWlscyhmdW5jdGlvbiAoKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVzZWxlc3MtY2FsbCAtLSByZXF1aXJlZCBmb3IgdGVzdGluZ1xuICAgIG1ldGhvZC5jYWxsKG51bGwsIGFyZ3VtZW50IHx8IGZ1bmN0aW9uICgpIHsgcmV0dXJuIDE7IH0sIDEpO1xuICB9KTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tb2JqZWN0Jyk7XG5cbnZhciBmbG9vciA9IE1hdGguZmxvb3I7XG52YXIgY2hhckF0ID0gdW5jdXJyeVRoaXMoJycuY2hhckF0KTtcbnZhciByZXBsYWNlID0gdW5jdXJyeVRoaXMoJycucmVwbGFjZSk7XG52YXIgc3RyaW5nU2xpY2UgPSB1bmN1cnJ5VGhpcygnJy5zbGljZSk7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVkb3Mvbm8tdnVsbmVyYWJsZSAtLSBzYWZlXG52YXIgU1VCU1RJVFVUSU9OX1NZTUJPTFMgPSAvXFwkKFskJidgXXxcXGR7MSwyfXw8W14+XSo+KS9nO1xudmFyIFNVQlNUSVRVVElPTl9TWU1CT0xTX05PX05BTUVEID0gL1xcJChbJCYnYF18XFxkezEsMn0pL2c7XG5cbi8vIGBHZXRTdWJzdGl0dXRpb25gIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1nZXRzdWJzdGl0dXRpb25cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG1hdGNoZWQsIHN0ciwgcG9zaXRpb24sIGNhcHR1cmVzLCBuYW1lZENhcHR1cmVzLCByZXBsYWNlbWVudCkge1xuICB2YXIgdGFpbFBvcyA9IHBvc2l0aW9uICsgbWF0Y2hlZC5sZW5ndGg7XG4gIHZhciBtID0gY2FwdHVyZXMubGVuZ3RoO1xuICB2YXIgc3ltYm9scyA9IFNVQlNUSVRVVElPTl9TWU1CT0xTX05PX05BTUVEO1xuICBpZiAobmFtZWRDYXB0dXJlcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgbmFtZWRDYXB0dXJlcyA9IHRvT2JqZWN0KG5hbWVkQ2FwdHVyZXMpO1xuICAgIHN5bWJvbHMgPSBTVUJTVElUVVRJT05fU1lNQk9MUztcbiAgfVxuICByZXR1cm4gcmVwbGFjZShyZXBsYWNlbWVudCwgc3ltYm9scywgZnVuY3Rpb24gKG1hdGNoLCBjaCkge1xuICAgIHZhciBjYXB0dXJlO1xuICAgIHN3aXRjaCAoY2hhckF0KGNoLCAwKSkge1xuICAgICAgY2FzZSAnJCc6IHJldHVybiAnJCc7XG4gICAgICBjYXNlICcmJzogcmV0dXJuIG1hdGNoZWQ7XG4gICAgICBjYXNlICdgJzogcmV0dXJuIHN0cmluZ1NsaWNlKHN0ciwgMCwgcG9zaXRpb24pO1xuICAgICAgY2FzZSBcIidcIjogcmV0dXJuIHN0cmluZ1NsaWNlKHN0ciwgdGFpbFBvcyk7XG4gICAgICBjYXNlICc8JzpcbiAgICAgICAgY2FwdHVyZSA9IG5hbWVkQ2FwdHVyZXNbc3RyaW5nU2xpY2UoY2gsIDEsIC0xKV07XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDogLy8gXFxkXFxkP1xuICAgICAgICB2YXIgbiA9ICtjaDtcbiAgICAgICAgaWYgKG4gPT09IDApIHJldHVybiBtYXRjaDtcbiAgICAgICAgaWYgKG4gPiBtKSB7XG4gICAgICAgICAgdmFyIGYgPSBmbG9vcihuIC8gMTApO1xuICAgICAgICAgIGlmIChmID09PSAwKSByZXR1cm4gbWF0Y2g7XG4gICAgICAgICAgaWYgKGYgPD0gbSkgcmV0dXJuIGNhcHR1cmVzW2YgLSAxXSA9PT0gdW5kZWZpbmVkID8gY2hhckF0KGNoLCAxKSA6IGNhcHR1cmVzW2YgLSAxXSArIGNoYXJBdChjaCwgMSk7XG4gICAgICAgICAgcmV0dXJuIG1hdGNoO1xuICAgICAgICB9XG4gICAgICAgIGNhcHR1cmUgPSBjYXB0dXJlc1tuIC0gMV07XG4gICAgfVxuICAgIHJldHVybiBjYXB0dXJlID09PSB1bmRlZmluZWQgPyAnJyA6IGNhcHR1cmU7XG4gIH0pO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBnZXRCdWlsdEluID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dldC1idWlsdC1pbicpO1xudmFyIGRlZmluZUJ1aWx0SW5BY2Nlc3NvciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZWZpbmUtYnVpbHQtaW4tYWNjZXNzb3InKTtcbnZhciB3ZWxsS25vd25TeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wnKTtcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xuXG52YXIgU1BFQ0lFUyA9IHdlbGxLbm93blN5bWJvbCgnc3BlY2llcycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChDT05TVFJVQ1RPUl9OQU1FKSB7XG4gIHZhciBDb25zdHJ1Y3RvciA9IGdldEJ1aWx0SW4oQ09OU1RSVUNUT1JfTkFNRSk7XG5cbiAgaWYgKERFU0NSSVBUT1JTICYmIENvbnN0cnVjdG9yICYmICFDb25zdHJ1Y3RvcltTUEVDSUVTXSkge1xuICAgIGRlZmluZUJ1aWx0SW5BY2Nlc3NvcihDb25zdHJ1Y3RvciwgU1BFQ0lFUywge1xuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9XG4gICAgfSk7XG4gIH1cbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciAkZXZlcnkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktaXRlcmF0aW9uJykuZXZlcnk7XG52YXIgYXJyYXlNZXRob2RJc1N0cmljdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1tZXRob2QtaXMtc3RyaWN0Jyk7XG5cbnZhciBTVFJJQ1RfTUVUSE9EID0gYXJyYXlNZXRob2RJc1N0cmljdCgnZXZlcnknKTtcblxuLy8gYEFycmF5LnByb3RvdHlwZS5ldmVyeWAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5ldmVyeVxuJCh7IHRhcmdldDogJ0FycmF5JywgcHJvdG86IHRydWUsIGZvcmNlZDogIVNUUklDVF9NRVRIT0QgfSwge1xuICBldmVyeTogZnVuY3Rpb24gZXZlcnkoY2FsbGJhY2tmbiAvKiAsIHRoaXNBcmcgKi8pIHtcbiAgICByZXR1cm4gJGV2ZXJ5KHRoaXMsIGNhbGxiYWNrZm4sIGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkKTtcbiAgfVxufSk7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciAkbWFwID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LWl0ZXJhdGlvbicpLm1hcDtcbnZhciBhcnJheU1ldGhvZEhhc1NwZWNpZXNTdXBwb3J0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LW1ldGhvZC1oYXMtc3BlY2llcy1zdXBwb3J0Jyk7XG5cbnZhciBIQVNfU1BFQ0lFU19TVVBQT1JUID0gYXJyYXlNZXRob2RIYXNTcGVjaWVzU3VwcG9ydCgnbWFwJyk7XG5cbi8vIGBBcnJheS5wcm90b3R5cGUubWFwYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLm1hcFxuLy8gd2l0aCBhZGRpbmcgc3VwcG9ydCBvZiBAQHNwZWNpZXNcbiQoeyB0YXJnZXQ6ICdBcnJheScsIHByb3RvOiB0cnVlLCBmb3JjZWQ6ICFIQVNfU1BFQ0lFU19TVVBQT1JUIH0sIHtcbiAgbWFwOiBmdW5jdGlvbiBtYXAoY2FsbGJhY2tmbiAvKiAsIHRoaXNBcmcgKi8pIHtcbiAgICByZXR1cm4gJG1hcCh0aGlzLCBjYWxsYmFja2ZuLCBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCk7XG4gIH1cbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGFwcGx5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLWFwcGx5Jyk7XG52YXIgY2FsbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1jYWxsJyk7XG52YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG52YXIgZml4UmVnRXhwV2VsbEtub3duU3ltYm9sTG9naWMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZml4LXJlZ2V4cC13ZWxsLWtub3duLXN5bWJvbC1sb2dpYycpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYW4tb2JqZWN0Jyk7XG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1jYWxsYWJsZScpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW9iamVjdCcpO1xudmFyIHRvSW50ZWdlck9ySW5maW5pdHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8taW50ZWdlci1vci1pbmZpbml0eScpO1xudmFyIHRvTGVuZ3RoID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWxlbmd0aCcpO1xudmFyIHRvU3RyaW5nID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLXN0cmluZycpO1xudmFyIHJlcXVpcmVPYmplY3RDb2VyY2libGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVxdWlyZS1vYmplY3QtY29lcmNpYmxlJyk7XG52YXIgYWR2YW5jZVN0cmluZ0luZGV4ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FkdmFuY2Utc3RyaW5nLWluZGV4Jyk7XG52YXIgZ2V0TWV0aG9kID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dldC1tZXRob2QnKTtcbnZhciBnZXRTdWJzdGl0dXRpb24gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2V0LXN1YnN0aXR1dGlvbicpO1xudmFyIGdldFJlZ0V4cEZsYWdzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlZ2V4cC1nZXQtZmxhZ3MnKTtcbnZhciByZWdFeHBFeGVjID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlZ2V4cC1leGVjLWFic3RyYWN0Jyk7XG52YXIgd2VsbEtub3duU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sJyk7XG5cbnZhciBSRVBMQUNFID0gd2VsbEtub3duU3ltYm9sKCdyZXBsYWNlJyk7XG52YXIgbWF4ID0gTWF0aC5tYXg7XG52YXIgbWluID0gTWF0aC5taW47XG52YXIgY29uY2F0ID0gdW5jdXJyeVRoaXMoW10uY29uY2F0KTtcbnZhciBwdXNoID0gdW5jdXJyeVRoaXMoW10ucHVzaCk7XG52YXIgc3RyaW5nSW5kZXhPZiA9IHVuY3VycnlUaGlzKCcnLmluZGV4T2YpO1xudmFyIHN0cmluZ1NsaWNlID0gdW5jdXJyeVRoaXMoJycuc2xpY2UpO1xuXG52YXIgbWF5YmVUb1N0cmluZyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXQgPT09IHVuZGVmaW5lZCA/IGl0IDogU3RyaW5nKGl0KTtcbn07XG5cbi8vIElFIDw9IDExIHJlcGxhY2VzICQwIHdpdGggdGhlIHdob2xlIG1hdGNoLCBhcyBpZiBpdCB3YXMgJCZcbi8vIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzYwMjQ2NjYvZ2V0dGluZy1pZS10by1yZXBsYWNlLWEtcmVnZXgtd2l0aC10aGUtbGl0ZXJhbC1zdHJpbmctMFxudmFyIFJFUExBQ0VfS0VFUFNfJDAgPSAoZnVuY3Rpb24gKCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVnZXhwL3ByZWZlci1lc2NhcGUtcmVwbGFjZW1lbnQtZG9sbGFyLWNoYXIgLS0gcmVxdWlyZWQgZm9yIHRlc3RpbmdcbiAgcmV0dXJuICdhJy5yZXBsYWNlKC8uLywgJyQwJykgPT09ICckMCc7XG59KSgpO1xuXG4vLyBTYWZhcmkgPD0gMTMuMC4zKD8pIHN1YnN0aXR1dGVzIG50aCBjYXB0dXJlIHdoZXJlIG4+bSB3aXRoIGFuIGVtcHR5IHN0cmluZ1xudmFyIFJFR0VYUF9SRVBMQUNFX1NVQlNUSVRVVEVTX1VOREVGSU5FRF9DQVBUVVJFID0gKGZ1bmN0aW9uICgpIHtcbiAgaWYgKC8uL1tSRVBMQUNFXSkge1xuICAgIHJldHVybiAvLi9bUkVQTEFDRV0oJ2EnLCAnJDAnKSA9PT0gJyc7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufSkoKTtcblxudmFyIFJFUExBQ0VfU1VQUE9SVFNfTkFNRURfR1JPVVBTID0gIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgdmFyIHJlID0gLy4vO1xuICByZS5leGVjID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciByZXN1bHQgPSBbXTtcbiAgICByZXN1bHQuZ3JvdXBzID0geyBhOiAnNycgfTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVnZXhwL25vLXVzZWxlc3MtZG9sbGFyLXJlcGxhY2VtZW50cyAtLSBmYWxzZSBwb3NpdGl2ZVxuICByZXR1cm4gJycucmVwbGFjZShyZSwgJyQ8YT4nKSAhPT0gJzcnO1xufSk7XG5cbi8vIEBAcmVwbGFjZSBsb2dpY1xuZml4UmVnRXhwV2VsbEtub3duU3ltYm9sTG9naWMoJ3JlcGxhY2UnLCBmdW5jdGlvbiAoXywgbmF0aXZlUmVwbGFjZSwgbWF5YmVDYWxsTmF0aXZlKSB7XG4gIHZhciBVTlNBRkVfU1VCU1RJVFVURSA9IFJFR0VYUF9SRVBMQUNFX1NVQlNUSVRVVEVTX1VOREVGSU5FRF9DQVBUVVJFID8gJyQnIDogJyQwJztcblxuICByZXR1cm4gW1xuICAgIC8vIGBTdHJpbmcucHJvdG90eXBlLnJlcGxhY2VgIG1ldGhvZFxuICAgIC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtc3RyaW5nLnByb3RvdHlwZS5yZXBsYWNlXG4gICAgZnVuY3Rpb24gcmVwbGFjZShzZWFyY2hWYWx1ZSwgcmVwbGFjZVZhbHVlKSB7XG4gICAgICB2YXIgTyA9IHJlcXVpcmVPYmplY3RDb2VyY2libGUodGhpcyk7XG4gICAgICB2YXIgcmVwbGFjZXIgPSBpc09iamVjdChzZWFyY2hWYWx1ZSkgPyBnZXRNZXRob2Qoc2VhcmNoVmFsdWUsIFJFUExBQ0UpIDogdW5kZWZpbmVkO1xuICAgICAgcmV0dXJuIHJlcGxhY2VyXG4gICAgICAgID8gY2FsbChyZXBsYWNlciwgc2VhcmNoVmFsdWUsIE8sIHJlcGxhY2VWYWx1ZSlcbiAgICAgICAgOiBjYWxsKG5hdGl2ZVJlcGxhY2UsIHRvU3RyaW5nKE8pLCBzZWFyY2hWYWx1ZSwgcmVwbGFjZVZhbHVlKTtcbiAgICB9LFxuICAgIC8vIGBSZWdFeHAucHJvdG90eXBlW0BAcmVwbGFjZV1gIG1ldGhvZFxuICAgIC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtcmVnZXhwLnByb3RvdHlwZS1AQHJlcGxhY2VcbiAgICBmdW5jdGlvbiAoc3RyaW5nLCByZXBsYWNlVmFsdWUpIHtcbiAgICAgIHZhciByeCA9IGFuT2JqZWN0KHRoaXMpO1xuICAgICAgdmFyIFMgPSB0b1N0cmluZyhzdHJpbmcpO1xuXG4gICAgICBpZiAoXG4gICAgICAgIHR5cGVvZiByZXBsYWNlVmFsdWUgPT0gJ3N0cmluZycgJiZcbiAgICAgICAgc3RyaW5nSW5kZXhPZihyZXBsYWNlVmFsdWUsIFVOU0FGRV9TVUJTVElUVVRFKSA9PT0gLTEgJiZcbiAgICAgICAgc3RyaW5nSW5kZXhPZihyZXBsYWNlVmFsdWUsICckPCcpID09PSAtMVxuICAgICAgKSB7XG4gICAgICAgIHZhciByZXMgPSBtYXliZUNhbGxOYXRpdmUobmF0aXZlUmVwbGFjZSwgcngsIFMsIHJlcGxhY2VWYWx1ZSk7XG4gICAgICAgIGlmIChyZXMuZG9uZSkgcmV0dXJuIHJlcy52YWx1ZTtcbiAgICAgIH1cblxuICAgICAgdmFyIGZ1bmN0aW9uYWxSZXBsYWNlID0gaXNDYWxsYWJsZShyZXBsYWNlVmFsdWUpO1xuICAgICAgaWYgKCFmdW5jdGlvbmFsUmVwbGFjZSkgcmVwbGFjZVZhbHVlID0gdG9TdHJpbmcocmVwbGFjZVZhbHVlKTtcblxuICAgICAgdmFyIGZsYWdzID0gdG9TdHJpbmcoZ2V0UmVnRXhwRmxhZ3MocngpKTtcbiAgICAgIHZhciBnbG9iYWwgPSBzdHJpbmdJbmRleE9mKGZsYWdzLCAnZycpICE9PSAtMTtcbiAgICAgIHZhciBmdWxsVW5pY29kZTtcbiAgICAgIGlmIChnbG9iYWwpIHtcbiAgICAgICAgZnVsbFVuaWNvZGUgPSBzdHJpbmdJbmRleE9mKGZsYWdzLCAndScpICE9PSAtMTtcbiAgICAgICAgcngubGFzdEluZGV4ID0gMDtcbiAgICAgIH1cblxuICAgICAgdmFyIHJlc3VsdHMgPSBbXTtcbiAgICAgIHZhciByZXN1bHQ7XG4gICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICByZXN1bHQgPSByZWdFeHBFeGVjKHJ4LCBTKTtcbiAgICAgICAgaWYgKHJlc3VsdCA9PT0gbnVsbCkgYnJlYWs7XG5cbiAgICAgICAgcHVzaChyZXN1bHRzLCByZXN1bHQpO1xuICAgICAgICBpZiAoIWdsb2JhbCkgYnJlYWs7XG5cbiAgICAgICAgdmFyIG1hdGNoU3RyID0gdG9TdHJpbmcocmVzdWx0WzBdKTtcbiAgICAgICAgaWYgKG1hdGNoU3RyID09PSAnJykgcngubGFzdEluZGV4ID0gYWR2YW5jZVN0cmluZ0luZGV4KFMsIHRvTGVuZ3RoKHJ4Lmxhc3RJbmRleCksIGZ1bGxVbmljb2RlKTtcbiAgICAgIH1cblxuICAgICAgdmFyIGFjY3VtdWxhdGVkUmVzdWx0ID0gJyc7XG4gICAgICB2YXIgbmV4dFNvdXJjZVBvc2l0aW9uID0gMDtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcmVzdWx0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICByZXN1bHQgPSByZXN1bHRzW2ldO1xuXG4gICAgICAgIHZhciBtYXRjaGVkID0gdG9TdHJpbmcocmVzdWx0WzBdKTtcbiAgICAgICAgdmFyIHBvc2l0aW9uID0gbWF4KG1pbih0b0ludGVnZXJPckluZmluaXR5KHJlc3VsdC5pbmRleCksIFMubGVuZ3RoKSwgMCk7XG4gICAgICAgIHZhciBjYXB0dXJlcyA9IFtdO1xuICAgICAgICB2YXIgcmVwbGFjZW1lbnQ7XG4gICAgICAgIC8vIE5PVEU6IFRoaXMgaXMgZXF1aXZhbGVudCB0b1xuICAgICAgICAvLyAgIGNhcHR1cmVzID0gcmVzdWx0LnNsaWNlKDEpLm1hcChtYXliZVRvU3RyaW5nKVxuICAgICAgICAvLyBidXQgZm9yIHNvbWUgcmVhc29uIGBuYXRpdmVTbGljZS5jYWxsKHJlc3VsdCwgMSwgcmVzdWx0Lmxlbmd0aClgIChjYWxsZWQgaW5cbiAgICAgICAgLy8gdGhlIHNsaWNlIHBvbHlmaWxsIHdoZW4gc2xpY2luZyBuYXRpdmUgYXJyYXlzKSBcImRvZXNuJ3Qgd29ya1wiIGluIHNhZmFyaSA5IGFuZFxuICAgICAgICAvLyBjYXVzZXMgYSBjcmFzaCAoaHR0cHM6Ly9wYXN0ZWJpbi5jb20vTjIxUXplUUEpIHdoZW4gdHJ5aW5nIHRvIGRlYnVnIGl0LlxuICAgICAgICBmb3IgKHZhciBqID0gMTsgaiA8IHJlc3VsdC5sZW5ndGg7IGorKykgcHVzaChjYXB0dXJlcywgbWF5YmVUb1N0cmluZyhyZXN1bHRbal0pKTtcbiAgICAgICAgdmFyIG5hbWVkQ2FwdHVyZXMgPSByZXN1bHQuZ3JvdXBzO1xuICAgICAgICBpZiAoZnVuY3Rpb25hbFJlcGxhY2UpIHtcbiAgICAgICAgICB2YXIgcmVwbGFjZXJBcmdzID0gY29uY2F0KFttYXRjaGVkXSwgY2FwdHVyZXMsIHBvc2l0aW9uLCBTKTtcbiAgICAgICAgICBpZiAobmFtZWRDYXB0dXJlcyAhPT0gdW5kZWZpbmVkKSBwdXNoKHJlcGxhY2VyQXJncywgbmFtZWRDYXB0dXJlcyk7XG4gICAgICAgICAgcmVwbGFjZW1lbnQgPSB0b1N0cmluZyhhcHBseShyZXBsYWNlVmFsdWUsIHVuZGVmaW5lZCwgcmVwbGFjZXJBcmdzKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVwbGFjZW1lbnQgPSBnZXRTdWJzdGl0dXRpb24obWF0Y2hlZCwgUywgcG9zaXRpb24sIGNhcHR1cmVzLCBuYW1lZENhcHR1cmVzLCByZXBsYWNlVmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwb3NpdGlvbiA+PSBuZXh0U291cmNlUG9zaXRpb24pIHtcbiAgICAgICAgICBhY2N1bXVsYXRlZFJlc3VsdCArPSBzdHJpbmdTbGljZShTLCBuZXh0U291cmNlUG9zaXRpb24sIHBvc2l0aW9uKSArIHJlcGxhY2VtZW50O1xuICAgICAgICAgIG5leHRTb3VyY2VQb3NpdGlvbiA9IHBvc2l0aW9uICsgbWF0Y2hlZC5sZW5ndGg7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGFjY3VtdWxhdGVkUmVzdWx0ICsgc3RyaW5nU2xpY2UoUywgbmV4dFNvdXJjZVBvc2l0aW9uKTtcbiAgICB9XG4gIF07XG59LCAhUkVQTEFDRV9TVVBQT1JUU19OQU1FRF9HUk9VUFMgfHwgIVJFUExBQ0VfS0VFUFNfJDAgfHwgUkVHRVhQX1JFUExBQ0VfU1VCU1RJVFVURVNfVU5ERUZJTkVEX0NBUFRVUkUpO1xuIl0sIm5hbWVzIjpbImciLCJkZWZpbmUiLCJhbWQiLCJkIiwid2luZG93IiwiZG9jdW1lbnQiLCJleHBvcnRzIiwiX3R5cGVvZiIsIm1vZHVsZSIsImUiLCJmbiIsImRhdGFUYWJsZSIsInJlcXVpcmUiLCIkIiwiQnV0dG9ucyIsImpRdWVyeSIsImgiLCJleHRlbmQiLCJleHQiLCJidXR0b25zIiwiY29sdmlzIiwiYiIsImEiLCJ0ZXh0IiwiaTE4biIsImNsYXNzTmFtZSIsImNvbHVtbnMiLCJjb2x1bW5UZXh0IiwiY29sdW1uc1RvZ2dsZSIsImluZGV4ZXMiLCJtYXAiLCJ0b0FycmF5IiwiY29sdW1uVG9nZ2xlIiwiY29sdW1uc1Zpc2liaWxpdHkiLCJ2aXNpYmlsaXR5IiwiY29sdW1uVmlzaWJpbGl0eSIsImMiLCJfY29sdW1uVGV4dCIsImFjdGlvbiIsImYiLCJ2aXNpYmxlIiwibGVuZ3RoIiwiaW5pdCIsIm9uIiwibmFtZXNwYWNlIiwiYkRlc3Ryb3lpbmciLCJuVGFibGUiLCJzZXR0aW5ncyIsImFjdGl2ZSIsImNvbHVtbiIsImNvdW50IiwibWFwcGluZyIsImRlc3Ryb3kiLCJvZmYiLCJpbmRleCIsImFvQ29sdW1ucyIsInNUaXRsZSIsInJlcGxhY2UiLCJjb2x2aXNSZXN0b3JlIiwiX3Zpc09yaWdpbmFsIiwiZXZlcnkiLCJjb2xSZW9yZGVyIiwidHJhbnNwb3NlIiwiY29sdmlzR3JvdXAiLCJzaG93IiwiaGlkZSIsImFkanVzdCJdLCJzb3VyY2VSb290IjoiIn0=