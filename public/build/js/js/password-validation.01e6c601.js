(self["webpackChunk"] = self["webpackChunk"] || []).push([["js/password-validation"],{

/***/ "./assets/js/PasswordValidation/password-validation.js":
/*!*************************************************************!*\
  !*** ./assets/js/PasswordValidation/password-validation.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

/* provided dependency */ var jQuery = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
__webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
__webpack_require__(/*! core-js/modules/es.regexp.constructor.js */ "./node_modules/core-js/modules/es.regexp.constructor.js");
__webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
__webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
__webpack_require__(/*! core-js/modules/es.string.repeat.js */ "./node_modules/core-js/modules/es.string.repeat.js");
__webpack_require__(/*! core-js/modules/es.string.search.js */ "./node_modules/core-js/modules/es.string.search.js");
(function ($) {
  $.fn.extend({
    passwordValidation: function passwordValidation(_options, _callback, _confirmcallback) {
      //var _unicodeSpecialSet = "^\\x00-\\x1F\\x7F\\x80-\\x9F0-9A-Za-z"; //All chars other than above (and C0/C1)
      var CHARSETS = {
        upperCaseSet: "A-Z",
        //All UpperCase (Acii/Unicode)
        lowerCaseSet: "a-z",
        //All LowerCase (Acii/Unicode)
        digitSet: "0-9",
        //All digits (Acii/Unicode)
        specialSet: "\\x20-\\x2F\\x3A-\\x40\\x5B-\\x60\\x7B-\\x7E\\x80-\\xFF" //All Other printable Ascii
      };
      var _defaults = {
        minLength: 10,
        //Minimum Length of password
        minUpperCase: 1,
        //Minimum number of Upper Case Letters characters in password
        minLowerCase: 2,
        //Minimum number of Lower Case Letters characters in password
        minDigits: 2,
        //Minimum number of digits characters in password
        minSpecial: 1,
        //Minimum number of special characters in password
        maxRepeats: 5,
        //Maximum number of repeated alphanumeric characters in password dhgurAAAfjewd <- 3 A's
        maxConsecutive: 3,
        //Maximum number of alphanumeric characters from one set back to back
        noUpper: false,
        //Disallow Upper Case Lettera
        noLower: false,
        //Disallow Lower Case Letters
        noDigit: false,
        //Disallow Digits
        noSpecial: false,
        //Disallow Special Characters
        //NOT IMPLEMENTED YET allowUnicode: false,  //Switches Ascii Special Set out for Unicode Special Set 
        failRepeats: true,
        //Disallow user to have x number of repeated alphanumeric characters ex.. ..A..a..A.. <- fails if maxRepeats <= 3 CASE INSENSITIVE
        failConsecutive: true,
        //Disallow user to have x number of consecutive alphanumeric characters from any set ex.. abc <- fails if maxConsecutive <= 3
        confirmField: undefined
      };

      //Ensure parameters are correctly defined
      if ($.isFunction(_options)) {
        if ($.isFunction(_callback)) {
          if ($.isFunction(_confirmcallback)) {
            console.log("Warning in passValidate: 3 or more callbacks were defined... First two will be used.");
          }
          _confirmcallback = _callback;
        }
        _callback = _options;
        _options = {};
      }

      //concatenate user options with _defaults
      _options = $.extend(_defaults, _options);
      if (_options.maxRepeats < 2) _options.maxRepeats = 2;
      function charsetToString() {
        return CHARSETS.upperCaseSet + CHARSETS.lowerCaseSet + CHARSETS.digitSet + CHARSETS.specialSet;
      }

      //GENERATE ALL REGEXs FOR EVERY CASE
      function buildPasswordRegex() {
        var cases = [];

        //if(_options.allowUnicode) CHARSETS.specialSet = _unicodeSpecialSet;
        if (_options.noUpper) cases.push({
          "regex": "(?=" + CHARSETS.upperCaseSet + ")",
          "message": "Password no puede contener mayúsculas"
        });else cases.push({
          "regex": "(?=" + ("[" + CHARSETS.upperCaseSet + "][^" + CHARSETS.upperCaseSet + "]*").repeat(_options.minUpperCase) + ")",
          "message": "El password por lo menos debe contener " + _options.minUpperCase + " Letras mayúsculas."
        });
        if (_options.noLower) cases.push({
          "regex": "(?=" + CHARSETS.lowerCaseSet + ")",
          "message": "El password no puede contener letras minusculas"
        });else cases.push({
          "regex": "(?=" + ("[" + CHARSETS.lowerCaseSet + "][^" + CHARSETS.lowerCaseSet + "]*").repeat(_options.minLowerCase) + ")",
          "message": "El password por lo menos debe contener " + _options.minLowerCase + " Letras minusculas."
        });
        if (_options.noDigit) cases.push({
          "regex": "(?=" + CHARSETS.digitSet + ")",
          "message": "El password no puede contener números"
        });else cases.push({
          "regex": "(?=" + ("[" + CHARSETS.digitSet + "][^" + CHARSETS.digitSet + "]*").repeat(_options.minDigits) + ")",
          "message": "El password por lo menos debe contener " + _options.minDigits + " Digitos."
        });
        if (_options.noSpecial) cases.push({
          "regex": "(?=" + CHARSETS.specialSet + ")",
          "message": "El password no puede contener caracteres especiales"
        });else cases.push({
          "regex": "(?=" + ("[" + CHARSETS.specialSet + "][^" + CHARSETS.specialSet + "]*").repeat(_options.minSpecial) + ")",
          "message": "El password debe contener al menos " + _options.minSpecial + " Caracteres especiales (! $ + - * , .)"
        });
        cases.push({
          "regex": "[" + charsetToString() + "]{" + _options.minLength + ",}",
          "message": "El password por lo menos debe contener " + _options.minLength + " caracteres."
        });
        return cases;
      }
      var _cases = buildPasswordRegex();
      var _element = this;
      var $confirmField = _options.confirmField != undefined ? $(_options.confirmField) : undefined;

      //Field validation on every captured event
      function validateField() {
        var failedCases = [];

        //Evaluate all verbose cases
        $.each(_cases, function (i, _case) {
          if ($(_element).val().search(new RegExp(_case.regex, "g")) == -1) {
            failedCases.push(_case.message);
          }
        });
        if (_options.failRepeats && $(_element).val().search(new RegExp("(.)" + ".*\\1".repeat(_options.maxRepeats - 1), "gi")) != -1) {
          failedCases.push("El password no puede contener " + _options.maxRepeats + " veces el mismo caracter.");
        }
        if (_options.failConsecutive && $(_element).val().search(new RegExp("(?=(.)" + "\\1".repeat(_options.maxConsecutive) + ")", "g")) != -1) {
          failedCases.push("El Password no puede contener el mismo caracter más de  " + _options.maxConsecutive + " veces.");
        }

        //Determine if valid
        var validPassword = failedCases.length == 0 && $(_element).val().length >= _options.minLength;
        var fieldsMatch = true;
        if ($confirmField != undefined) {
          fieldsMatch = $confirmField.val() == $(_element).val();
        }
        _callback(_element, validPassword, validPassword && fieldsMatch, failedCases);
      }

      //Add custom classes to fields
      this.each(function () {
        //Validate field if it is already filled
        if ($(this).val()) {
          validateField().apply(this);
        }
        $(this).toggleClass("jqPassField", true);
        if ($confirmField != undefined) {
          $confirmField.toggleClass("jqPassConfirmField", true);
        }
      });

      //Add event bindings to the password fields
      return this.each(function () {
        $(this).bind('keyup focus input proprtychange mouseup', validateField);
        if ($confirmField != undefined) {
          $confirmField.bind('keyup focus input proprtychange mouseup', validateField);
        }
      });
    }
  });
})(jQuery);

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_internals_export_js","vendors-node_modules_jquery_dist_jquery_js","vendors-node_modules_core-js_modules_es_regexp_constructor_js-node_modules_core-js_modules_es-de7eec","vendors-node_modules_core-js_internals_define-built-in-accessor_js-node_modules_core-js_inter-7c082e"], () => (__webpack_exec__("./assets/js/PasswordValidation/password-validation.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvanMvcGFzc3dvcmQtdmFsaWRhdGlvbi4wMWU2YzYwMS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQSxDQUFDLFVBQVNBLENBQUMsRUFBRTtFQUNaQSxDQUFDLENBQUNDLEVBQUUsQ0FBQ0MsTUFBTSxDQUFDO0lBQ1hDLGtCQUFrQixFQUFFLFNBQXBCQSxrQkFBa0JBLENBQVdDLFFBQVEsRUFBRUMsU0FBUyxFQUFFQyxnQkFBZ0IsRUFBRTtNQUNuRTtNQUNBLElBQUlDLFFBQVEsR0FBRztRQUNkQyxZQUFZLEVBQUUsS0FBSztRQUFHO1FBQ3RCQyxZQUFZLEVBQUUsS0FBSztRQUFHO1FBQ3RCQyxRQUFRLEVBQUUsS0FBSztRQUFJO1FBQ25CQyxVQUFVLEVBQUUseURBQXlELENBQUU7TUFDeEUsQ0FBQztNQUNELElBQUlDLFNBQVMsR0FBRztRQUNmQyxTQUFTLEVBQUUsRUFBRTtRQUFLO1FBQ2xCQyxZQUFZLEVBQUUsQ0FBQztRQUFJO1FBQ25CQyxZQUFZLEVBQUUsQ0FBQztRQUFJO1FBQ25CQyxTQUFTLEVBQUUsQ0FBQztRQUFLO1FBQ2pCQyxVQUFVLEVBQUUsQ0FBQztRQUFLO1FBQ2xCQyxVQUFVLEVBQUUsQ0FBQztRQUFLO1FBQ2xCQyxjQUFjLEVBQUUsQ0FBQztRQUFJO1FBQ3JCQyxPQUFPLEVBQUUsS0FBSztRQUFLO1FBQ25CQyxPQUFPLEVBQUUsS0FBSztRQUFLO1FBQ25CQyxPQUFPLEVBQUUsS0FBSztRQUFLO1FBQ25CQyxTQUFTLEVBQUUsS0FBSztRQUFJO1FBQ3BCO1FBQ0FDLFdBQVcsRUFBRSxJQUFJO1FBQUs7UUFDdEJDLGVBQWUsRUFBRSxJQUFJO1FBQUM7UUFDdEJDLFlBQVksRUFBRUM7TUFDZixDQUFDOztNQUVEO01BQ0EsSUFBRzNCLENBQUMsQ0FBQzRCLFVBQVUsQ0FBQ3hCLFFBQVEsQ0FBQyxFQUFFO1FBQzFCLElBQUdKLENBQUMsQ0FBQzRCLFVBQVUsQ0FBQ3ZCLFNBQVMsQ0FBQyxFQUFFO1VBQzNCLElBQUdMLENBQUMsQ0FBQzRCLFVBQVUsQ0FBQ3RCLGdCQUFnQixDQUFDLEVBQUU7WUFDbEN1QixPQUFPLENBQUNDLEdBQUcsQ0FBQyxzRkFBc0YsQ0FBQztVQUNwRztVQUNBeEIsZ0JBQWdCLEdBQUdELFNBQVM7UUFDN0I7UUFDQUEsU0FBUyxHQUFHRCxRQUFRO1FBQ3BCQSxRQUFRLEdBQUcsQ0FBQyxDQUFDO01BQ2Q7O01BRUE7TUFDQUEsUUFBUSxHQUFHSixDQUFDLENBQUNFLE1BQU0sQ0FBQ1UsU0FBUyxFQUFFUixRQUFRLENBQUM7TUFDeEMsSUFBR0EsUUFBUSxDQUFDYyxVQUFVLEdBQUcsQ0FBQyxFQUFFZCxRQUFRLENBQUNjLFVBQVUsR0FBRyxDQUFDO01BRW5ELFNBQVNhLGVBQWVBLENBQUEsRUFBRztRQUMxQixPQUFPeEIsUUFBUSxDQUFDQyxZQUFZLEdBQUdELFFBQVEsQ0FBQ0UsWUFBWSxHQUFHRixRQUFRLENBQUNHLFFBQVEsR0FBR0gsUUFBUSxDQUFDSSxVQUFVO01BQy9GOztNQUVBO01BQ0EsU0FBU3FCLGtCQUFrQkEsQ0FBQSxFQUFHO1FBQzdCLElBQUlDLEtBQUssR0FBRyxFQUFFOztRQUVkO1FBQ0EsSUFBRzdCLFFBQVEsQ0FBQ2dCLE9BQU8sRUFBR2EsS0FBSyxDQUFDQyxJQUFJLENBQUM7VUFBQyxPQUFPLEVBQUUsS0FBSyxHQUFHM0IsUUFBUSxDQUFDQyxZQUFZLEdBQUcsR0FBRztVQUF1QixTQUFTLEVBQUU7UUFBdUMsQ0FBQyxDQUFDLENBQUMsS0FDaEp5QixLQUFLLENBQUNDLElBQUksQ0FBQztVQUFDLE9BQU8sRUFBRSxLQUFLLEdBQUcsQ0FBQyxHQUFHLEdBQUczQixRQUFRLENBQUNDLFlBQVksR0FBRyxLQUFLLEdBQUdELFFBQVEsQ0FBQ0MsWUFBWSxHQUFHLElBQUksRUFBRTJCLE1BQU0sQ0FBQy9CLFFBQVEsQ0FBQ1UsWUFBWSxDQUFDLEdBQUcsR0FBRztVQUFHLFNBQVMsRUFBRSx5Q0FBeUMsR0FBR1YsUUFBUSxDQUFDVSxZQUFZLEdBQUc7UUFBcUIsQ0FBQyxDQUFDO1FBQ3hQLElBQUdWLFFBQVEsQ0FBQ2lCLE9BQU8sRUFBR1ksS0FBSyxDQUFDQyxJQUFJLENBQUM7VUFBQyxPQUFPLEVBQUUsS0FBSyxHQUFHM0IsUUFBUSxDQUFDRSxZQUFZLEdBQUcsR0FBRztVQUF1QixTQUFTLEVBQUU7UUFBaUQsQ0FBQyxDQUFDLENBQUMsS0FDMUp3QixLQUFLLENBQUNDLElBQUksQ0FBQztVQUFDLE9BQU8sRUFBRSxLQUFLLEdBQUcsQ0FBQyxHQUFHLEdBQUczQixRQUFRLENBQUNFLFlBQVksR0FBRyxLQUFLLEdBQUdGLFFBQVEsQ0FBQ0UsWUFBWSxHQUFHLElBQUksRUFBRTBCLE1BQU0sQ0FBQy9CLFFBQVEsQ0FBQ1csWUFBWSxDQUFDLEdBQUcsR0FBRztVQUFHLFNBQVMsRUFBRSx5Q0FBeUMsR0FBR1gsUUFBUSxDQUFDVyxZQUFZLEdBQUc7UUFBcUIsQ0FBQyxDQUFDO1FBQ3hQLElBQUdYLFFBQVEsQ0FBQ2tCLE9BQU8sRUFBR1csS0FBSyxDQUFDQyxJQUFJLENBQUM7VUFBQyxPQUFPLEVBQUUsS0FBSyxHQUFHM0IsUUFBUSxDQUFDRyxRQUFRLEdBQUcsR0FBRztVQUF1QixTQUFTLEVBQUU7UUFBdUMsQ0FBQyxDQUFDLENBQUMsS0FDNUl1QixLQUFLLENBQUNDLElBQUksQ0FBQztVQUFDLE9BQU8sRUFBRSxLQUFLLEdBQUcsQ0FBQyxHQUFHLEdBQUczQixRQUFRLENBQUNHLFFBQVEsR0FBRyxLQUFLLEdBQUdILFFBQVEsQ0FBQ0csUUFBUSxHQUFHLElBQUksRUFBRXlCLE1BQU0sQ0FBQy9CLFFBQVEsQ0FBQ1ksU0FBUyxDQUFDLEdBQUcsR0FBRztVQUFLLFNBQVMsRUFBRSx5Q0FBeUMsR0FBR1osUUFBUSxDQUFDWSxTQUFTLEdBQUc7UUFBVyxDQUFDLENBQUM7UUFDbE8sSUFBR1osUUFBUSxDQUFDbUIsU0FBUyxFQUFHVSxLQUFLLENBQUNDLElBQUksQ0FBQztVQUFDLE9BQU8sRUFBRSxLQUFLLEdBQUczQixRQUFRLENBQUNJLFVBQVUsR0FBRyxHQUFHO1VBQXNCLFNBQVMsRUFBRTtRQUFxRCxDQUFDLENBQUMsQ0FBQyxLQUM3SnNCLEtBQUssQ0FBQ0MsSUFBSSxDQUFDO1VBQUMsT0FBTyxFQUFFLEtBQUssR0FBRyxDQUFDLEdBQUcsR0FBRzNCLFFBQVEsQ0FBQ0ksVUFBVSxHQUFHLEtBQUssR0FBR0osUUFBUSxDQUFDSSxVQUFVLEdBQUcsSUFBSSxFQUFFd0IsTUFBTSxDQUFDL0IsUUFBUSxDQUFDYSxVQUFVLENBQUMsR0FBRyxHQUFHO1VBQUksU0FBUyxFQUFFLHFDQUFxQyxHQUFHYixRQUFRLENBQUNhLFVBQVUsR0FBRztRQUF3QyxDQUFDLENBQUM7UUFFaFFnQixLQUFLLENBQUNDLElBQUksQ0FBQztVQUFDLE9BQU8sRUFBQyxHQUFHLEdBQUdILGVBQWUsQ0FBQyxDQUFDLEdBQUcsSUFBSSxHQUFHM0IsUUFBUSxDQUFDUyxTQUFTLEdBQUcsSUFBSTtVQUFFLFNBQVMsRUFBQyx5Q0FBeUMsR0FBR1QsUUFBUSxDQUFDUyxTQUFTLEdBQUc7UUFBYyxDQUFDLENBQUM7UUFFM0ssT0FBT29CLEtBQUs7TUFDYjtNQUNBLElBQUlHLE1BQU0sR0FBR0osa0JBQWtCLENBQUMsQ0FBQztNQUVqQyxJQUFJSyxRQUFRLEdBQUcsSUFBSTtNQUNuQixJQUFJQyxhQUFhLEdBQUlsQyxRQUFRLENBQUNzQixZQUFZLElBQUlDLFNBQVMsR0FBRzNCLENBQUMsQ0FBQ0ksUUFBUSxDQUFDc0IsWUFBWSxDQUFDLEdBQUVDLFNBQVM7O01BRTdGO01BQ0EsU0FBU1ksYUFBYUEsQ0FBQSxFQUFHO1FBQ3hCLElBQUlDLFdBQVcsR0FBRyxFQUFFOztRQUVwQjtRQUNBeEMsQ0FBQyxDQUFDeUMsSUFBSSxDQUFDTCxNQUFNLEVBQUUsVUFBU00sQ0FBQyxFQUFFQyxLQUFLLEVBQUU7VUFDakMsSUFBRzNDLENBQUMsQ0FBQ3FDLFFBQVEsQ0FBQyxDQUFDTyxHQUFHLENBQUMsQ0FBQyxDQUFDQyxNQUFNLENBQUMsSUFBSUMsTUFBTSxDQUFDSCxLQUFLLENBQUNJLEtBQUssRUFBRSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFO1lBQ2hFUCxXQUFXLENBQUNOLElBQUksQ0FBQ1MsS0FBSyxDQUFDSyxPQUFPLENBQUM7VUFDaEM7UUFDRCxDQUFDLENBQUM7UUFDRixJQUFHNUMsUUFBUSxDQUFDb0IsV0FBVyxJQUFJeEIsQ0FBQyxDQUFDcUMsUUFBUSxDQUFDLENBQUNPLEdBQUcsQ0FBQyxDQUFDLENBQUNDLE1BQU0sQ0FBQyxJQUFJQyxNQUFNLENBQUMsS0FBSyxHQUFJLE9BQU8sQ0FBRVgsTUFBTSxDQUFDL0IsUUFBUSxDQUFDYyxVQUFVLEdBQUcsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRTtVQUMvSHNCLFdBQVcsQ0FBQ04sSUFBSSxDQUFDLGdDQUFnQyxHQUFHOUIsUUFBUSxDQUFDYyxVQUFVLEdBQUcsMkJBQTJCLENBQUM7UUFDdkc7UUFDQSxJQUFHZCxRQUFRLENBQUNxQixlQUFlLElBQUl6QixDQUFDLENBQUNxQyxRQUFRLENBQUMsQ0FBQ08sR0FBRyxDQUFDLENBQUMsQ0FBQ0MsTUFBTSxDQUFDLElBQUlDLE1BQU0sQ0FBQyxRQUFRLEdBQUksS0FBSyxDQUFFWCxNQUFNLENBQUMvQixRQUFRLENBQUNlLGNBQWMsQ0FBQyxHQUFHLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFO1VBQ3pJcUIsV0FBVyxDQUFDTixJQUFJLENBQUMsMERBQTBELEdBQUc5QixRQUFRLENBQUNlLGNBQWMsR0FBRyxTQUFTLENBQUM7UUFDbkg7O1FBRUE7UUFDQSxJQUFJOEIsYUFBYSxHQUFJVCxXQUFXLENBQUNVLE1BQU0sSUFBSSxDQUFDLElBQU1sRCxDQUFDLENBQUNxQyxRQUFRLENBQUMsQ0FBQ08sR0FBRyxDQUFDLENBQUMsQ0FBQ00sTUFBTSxJQUFJOUMsUUFBUSxDQUFDUyxTQUFVO1FBQ2pHLElBQUlzQyxXQUFXLEdBQUcsSUFBSTtRQUN0QixJQUFHYixhQUFhLElBQUlYLFNBQVMsRUFBRTtVQUM5QndCLFdBQVcsR0FBSWIsYUFBYSxDQUFDTSxHQUFHLENBQUMsQ0FBQyxJQUFJNUMsQ0FBQyxDQUFDcUMsUUFBUSxDQUFDLENBQUNPLEdBQUcsQ0FBQyxDQUFFO1FBQ3pEO1FBRUF2QyxTQUFTLENBQUNnQyxRQUFRLEVBQUVZLGFBQWEsRUFBRUEsYUFBYSxJQUFJRSxXQUFXLEVBQUVYLFdBQVcsQ0FBQztNQUM5RTs7TUFFQTtNQUNBLElBQUksQ0FBQ0MsSUFBSSxDQUFDLFlBQVc7UUFDcEI7UUFDQSxJQUFHekMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDNEMsR0FBRyxDQUFDLENBQUMsRUFBRTtVQUNqQkwsYUFBYSxDQUFDLENBQUMsQ0FBQ2EsS0FBSyxDQUFDLElBQUksQ0FBQztRQUM1QjtRQUVBcEQsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDcUQsV0FBVyxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUM7UUFDeEMsSUFBR2YsYUFBYSxJQUFJWCxTQUFTLEVBQUU7VUFDOUJXLGFBQWEsQ0FBQ2UsV0FBVyxDQUFDLG9CQUFvQixFQUFFLElBQUksQ0FBQztRQUN0RDtNQUNELENBQUMsQ0FBQzs7TUFFRjtNQUNBLE9BQU8sSUFBSSxDQUFDWixJQUFJLENBQUMsWUFBVztRQUMzQnpDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQ3NELElBQUksQ0FBQyx5Q0FBeUMsRUFBRWYsYUFBYSxDQUFDO1FBQ3RFLElBQUdELGFBQWEsSUFBSVgsU0FBUyxFQUFFO1VBQzlCVyxhQUFhLENBQUNnQixJQUFJLENBQUMseUNBQXlDLEVBQUVmLGFBQWEsQ0FBQztRQUM3RTtNQUNELENBQUMsQ0FBQztJQUNIO0VBQ0QsQ0FBQyxDQUFDO0FBQ0gsQ0FBQyxFQUFFZ0IsTUFBTSxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvUGFzc3dvcmRWYWxpZGF0aW9uL3Bhc3N3b3JkLXZhbGlkYXRpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCQpIHtcblx0JC5mbi5leHRlbmQoe1xuXHRcdHBhc3N3b3JkVmFsaWRhdGlvbjogZnVuY3Rpb24oX29wdGlvbnMsIF9jYWxsYmFjaywgX2NvbmZpcm1jYWxsYmFjaykge1xuXHRcdFx0Ly92YXIgX3VuaWNvZGVTcGVjaWFsU2V0ID0gXCJeXFxcXHgwMC1cXFxceDFGXFxcXHg3RlxcXFx4ODAtXFxcXHg5RjAtOUEtWmEtelwiOyAvL0FsbCBjaGFycyBvdGhlciB0aGFuIGFib3ZlIChhbmQgQzAvQzEpXG5cdFx0XHR2YXIgQ0hBUlNFVFMgPSB7XG5cdFx0XHRcdHVwcGVyQ2FzZVNldDogXCJBLVpcIiwgXHQvL0FsbCBVcHBlckNhc2UgKEFjaWkvVW5pY29kZSlcblx0XHRcdFx0bG93ZXJDYXNlU2V0OiBcImEtelwiLCBcdC8vQWxsIExvd2VyQ2FzZSAoQWNpaS9Vbmljb2RlKVxuXHRcdFx0XHRkaWdpdFNldDogXCIwLTlcIiwgXHRcdC8vQWxsIGRpZ2l0cyAoQWNpaS9Vbmljb2RlKVxuXHRcdFx0XHRzcGVjaWFsU2V0OiBcIlxcXFx4MjAtXFxcXHgyRlxcXFx4M0EtXFxcXHg0MFxcXFx4NUItXFxcXHg2MFxcXFx4N0ItXFxcXHg3RVxcXFx4ODAtXFxcXHhGRlwiLCAvL0FsbCBPdGhlciBwcmludGFibGUgQXNjaWlcblx0XHRcdH1cblx0XHRcdHZhciBfZGVmYXVsdHMgPSB7XG5cdFx0XHRcdG1pbkxlbmd0aDogMTAsXHRcdCAgLy9NaW5pbXVtIExlbmd0aCBvZiBwYXNzd29yZFxuXHRcdFx0XHRtaW5VcHBlckNhc2U6IDEsXHQgIC8vTWluaW11bSBudW1iZXIgb2YgVXBwZXIgQ2FzZSBMZXR0ZXJzIGNoYXJhY3RlcnMgaW4gcGFzc3dvcmRcblx0XHRcdFx0bWluTG93ZXJDYXNlOiAyLFx0ICAvL01pbmltdW0gbnVtYmVyIG9mIExvd2VyIENhc2UgTGV0dGVycyBjaGFyYWN0ZXJzIGluIHBhc3N3b3JkXG5cdFx0XHRcdG1pbkRpZ2l0czogMixcdFx0ICAvL01pbmltdW0gbnVtYmVyIG9mIGRpZ2l0cyBjaGFyYWN0ZXJzIGluIHBhc3N3b3JkXG5cdFx0XHRcdG1pblNwZWNpYWw6IDEsXHRcdCAgLy9NaW5pbXVtIG51bWJlciBvZiBzcGVjaWFsIGNoYXJhY3RlcnMgaW4gcGFzc3dvcmRcblx0XHRcdFx0bWF4UmVwZWF0czogNSxcdFx0ICAvL01heGltdW0gbnVtYmVyIG9mIHJlcGVhdGVkIGFscGhhbnVtZXJpYyBjaGFyYWN0ZXJzIGluIHBhc3N3b3JkIGRoZ3VyQUFBZmpld2QgPC0gMyBBJ3Ncblx0XHRcdFx0bWF4Q29uc2VjdXRpdmU6IDMsXHQgIC8vTWF4aW11bSBudW1iZXIgb2YgYWxwaGFudW1lcmljIGNoYXJhY3RlcnMgZnJvbSBvbmUgc2V0IGJhY2sgdG8gYmFja1xuXHRcdFx0XHRub1VwcGVyOiBmYWxzZSxcdFx0ICAvL0Rpc2FsbG93IFVwcGVyIENhc2UgTGV0dGVyYVxuXHRcdFx0XHRub0xvd2VyOiBmYWxzZSxcdFx0ICAvL0Rpc2FsbG93IExvd2VyIENhc2UgTGV0dGVyc1xuXHRcdFx0XHRub0RpZ2l0OiBmYWxzZSxcdFx0ICAvL0Rpc2FsbG93IERpZ2l0c1xuXHRcdFx0XHRub1NwZWNpYWw6IGZhbHNlLFx0ICAvL0Rpc2FsbG93IFNwZWNpYWwgQ2hhcmFjdGVyc1xuXHRcdFx0XHQvL05PVCBJTVBMRU1FTlRFRCBZRVQgYWxsb3dVbmljb2RlOiBmYWxzZSwgIC8vU3dpdGNoZXMgQXNjaWkgU3BlY2lhbCBTZXQgb3V0IGZvciBVbmljb2RlIFNwZWNpYWwgU2V0IFxuXHRcdFx0XHRmYWlsUmVwZWF0czogdHJ1ZSwgICAgLy9EaXNhbGxvdyB1c2VyIHRvIGhhdmUgeCBudW1iZXIgb2YgcmVwZWF0ZWQgYWxwaGFudW1lcmljIGNoYXJhY3RlcnMgZXguLiAuLkEuLmEuLkEuLiA8LSBmYWlscyBpZiBtYXhSZXBlYXRzIDw9IDMgQ0FTRSBJTlNFTlNJVElWRVxuXHRcdFx0XHRmYWlsQ29uc2VjdXRpdmU6IHRydWUsLy9EaXNhbGxvdyB1c2VyIHRvIGhhdmUgeCBudW1iZXIgb2YgY29uc2VjdXRpdmUgYWxwaGFudW1lcmljIGNoYXJhY3RlcnMgZnJvbSBhbnkgc2V0IGV4Li4gYWJjIDwtIGZhaWxzIGlmIG1heENvbnNlY3V0aXZlIDw9IDNcblx0XHRcdFx0Y29uZmlybUZpZWxkOiB1bmRlZmluZWRcblx0XHRcdH07XG5cblx0XHRcdC8vRW5zdXJlIHBhcmFtZXRlcnMgYXJlIGNvcnJlY3RseSBkZWZpbmVkXG5cdFx0XHRpZigkLmlzRnVuY3Rpb24oX29wdGlvbnMpKSB7XG5cdFx0XHRcdGlmKCQuaXNGdW5jdGlvbihfY2FsbGJhY2spKSB7XG5cdFx0XHRcdFx0aWYoJC5pc0Z1bmN0aW9uKF9jb25maXJtY2FsbGJhY2spKSB7XG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhcIldhcm5pbmcgaW4gcGFzc1ZhbGlkYXRlOiAzIG9yIG1vcmUgY2FsbGJhY2tzIHdlcmUgZGVmaW5lZC4uLiBGaXJzdCB0d28gd2lsbCBiZSB1c2VkLlwiKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0X2NvbmZpcm1jYWxsYmFjayA9IF9jYWxsYmFjaztcblx0XHRcdFx0fVxuXHRcdFx0XHRfY2FsbGJhY2sgPSBfb3B0aW9ucztcblx0XHRcdFx0X29wdGlvbnMgPSB7fTtcblx0XHRcdH1cblxuXHRcdFx0Ly9jb25jYXRlbmF0ZSB1c2VyIG9wdGlvbnMgd2l0aCBfZGVmYXVsdHNcblx0XHRcdF9vcHRpb25zID0gJC5leHRlbmQoX2RlZmF1bHRzLCBfb3B0aW9ucyk7XG5cdFx0XHRpZihfb3B0aW9ucy5tYXhSZXBlYXRzIDwgMikgX29wdGlvbnMubWF4UmVwZWF0cyA9IDI7XG5cblx0XHRcdGZ1bmN0aW9uIGNoYXJzZXRUb1N0cmluZygpIHtcblx0XHRcdFx0cmV0dXJuIENIQVJTRVRTLnVwcGVyQ2FzZVNldCArIENIQVJTRVRTLmxvd2VyQ2FzZVNldCArIENIQVJTRVRTLmRpZ2l0U2V0ICsgQ0hBUlNFVFMuc3BlY2lhbFNldDsgXG5cdFx0XHR9XG5cblx0XHRcdC8vR0VORVJBVEUgQUxMIFJFR0VYcyBGT1IgRVZFUlkgQ0FTRVxuXHRcdFx0ZnVuY3Rpb24gYnVpbGRQYXNzd29yZFJlZ2V4KCkge1xuXHRcdFx0XHR2YXIgY2FzZXMgPSBbXTtcblxuXHRcdFx0XHQvL2lmKF9vcHRpb25zLmFsbG93VW5pY29kZSkgQ0hBUlNFVFMuc3BlY2lhbFNldCA9IF91bmljb2RlU3BlY2lhbFNldDtcblx0XHRcdFx0aWYoX29wdGlvbnMubm9VcHBlcikgXHRjYXNlcy5wdXNoKHtcInJlZ2V4XCI6IFwiKD89XCIgKyBDSEFSU0VUUy51cHBlckNhc2VTZXQgKyBcIilcIiwgIFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcIm1lc3NhZ2VcIjogXCJQYXNzd29yZCBubyBwdWVkZSBjb250ZW5lciBtYXnDunNjdWxhc1wifSk7XG5cdFx0XHRcdGVsc2UgXHRcdFx0XHRcdGNhc2VzLnB1c2goe1wicmVnZXhcIjogXCIoPz1cIiArIChcIltcIiArIENIQVJTRVRTLnVwcGVyQ2FzZVNldCArIFwiXVteXCIgKyBDSEFSU0VUUy51cHBlckNhc2VTZXQgKyBcIl0qXCIpLnJlcGVhdChfb3B0aW9ucy5taW5VcHBlckNhc2UpICsgXCIpXCIsIFx0XCJtZXNzYWdlXCI6IFwiRWwgcGFzc3dvcmQgcG9yIGxvIG1lbm9zIGRlYmUgY29udGVuZXIgXCIgKyBfb3B0aW9ucy5taW5VcHBlckNhc2UgKyBcIiBMZXRyYXMgbWF5w7pzY3VsYXMuXCJ9KTtcblx0XHRcdFx0aWYoX29wdGlvbnMubm9Mb3dlcikgXHRjYXNlcy5wdXNoKHtcInJlZ2V4XCI6IFwiKD89XCIgKyBDSEFSU0VUUy5sb3dlckNhc2VTZXQgKyBcIilcIiwgIFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcIm1lc3NhZ2VcIjogXCJFbCBwYXNzd29yZCBubyBwdWVkZSBjb250ZW5lciBsZXRyYXMgbWludXNjdWxhc1wifSk7XG5cdFx0XHRcdGVsc2UgXHRcdFx0XHRcdGNhc2VzLnB1c2goe1wicmVnZXhcIjogXCIoPz1cIiArIChcIltcIiArIENIQVJTRVRTLmxvd2VyQ2FzZVNldCArIFwiXVteXCIgKyBDSEFSU0VUUy5sb3dlckNhc2VTZXQgKyBcIl0qXCIpLnJlcGVhdChfb3B0aW9ucy5taW5Mb3dlckNhc2UpICsgXCIpXCIsIFx0XCJtZXNzYWdlXCI6IFwiRWwgcGFzc3dvcmQgcG9yIGxvIG1lbm9zIGRlYmUgY29udGVuZXIgXCIgKyBfb3B0aW9ucy5taW5Mb3dlckNhc2UgKyBcIiBMZXRyYXMgbWludXNjdWxhcy5cIn0pO1xuXHRcdFx0XHRpZihfb3B0aW9ucy5ub0RpZ2l0KSBcdGNhc2VzLnB1c2goe1wicmVnZXhcIjogXCIoPz1cIiArIENIQVJTRVRTLmRpZ2l0U2V0ICsgXCIpXCIsIFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFwibWVzc2FnZVwiOiBcIkVsIHBhc3N3b3JkIG5vIHB1ZWRlIGNvbnRlbmVyIG7Dum1lcm9zXCJ9KTtcblx0XHRcdFx0ZWxzZSBcdFx0XHRcdFx0Y2FzZXMucHVzaCh7XCJyZWdleFwiOiBcIig/PVwiICsgKFwiW1wiICsgQ0hBUlNFVFMuZGlnaXRTZXQgKyBcIl1bXlwiICsgQ0hBUlNFVFMuZGlnaXRTZXQgKyBcIl0qXCIpLnJlcGVhdChfb3B0aW9ucy5taW5EaWdpdHMpICsgXCIpXCIsIFx0XHRcdFwibWVzc2FnZVwiOiBcIkVsIHBhc3N3b3JkIHBvciBsbyBtZW5vcyBkZWJlIGNvbnRlbmVyIFwiICsgX29wdGlvbnMubWluRGlnaXRzICsgXCIgRGlnaXRvcy5cIn0pO1xuXHRcdFx0XHRpZihfb3B0aW9ucy5ub1NwZWNpYWwpIFx0Y2FzZXMucHVzaCh7XCJyZWdleFwiOiBcIig/PVwiICsgQ0hBUlNFVFMuc3BlY2lhbFNldCArIFwiKVwiLCBcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XCJtZXNzYWdlXCI6IFwiRWwgcGFzc3dvcmQgbm8gcHVlZGUgY29udGVuZXIgY2FyYWN0ZXJlcyBlc3BlY2lhbGVzXCJ9KTtcblx0XHRcdFx0ZWxzZSBcdFx0XHRcdFx0Y2FzZXMucHVzaCh7XCJyZWdleFwiOiBcIig/PVwiICsgKFwiW1wiICsgQ0hBUlNFVFMuc3BlY2lhbFNldCArIFwiXVteXCIgKyBDSEFSU0VUUy5zcGVjaWFsU2V0ICsgXCJdKlwiKS5yZXBlYXQoX29wdGlvbnMubWluU3BlY2lhbCkgKyBcIilcIiwgXHRcdFwibWVzc2FnZVwiOiBcIkVsIHBhc3N3b3JkIGRlYmUgY29udGVuZXIgYWwgbWVub3MgXCIgKyBfb3B0aW9ucy5taW5TcGVjaWFsICsgXCIgQ2FyYWN0ZXJlcyBlc3BlY2lhbGVzICghICQgKyAtICogLCAuKVwifSk7XG5cblx0XHRcdFx0Y2FzZXMucHVzaCh7XCJyZWdleFwiOlwiW1wiICsgY2hhcnNldFRvU3RyaW5nKCkgKyBcIl17XCIgKyBfb3B0aW9ucy5taW5MZW5ndGggKyBcIix9XCIsIFwibWVzc2FnZVwiOlwiRWwgcGFzc3dvcmQgcG9yIGxvIG1lbm9zIGRlYmUgY29udGVuZXIgXCIgKyBfb3B0aW9ucy5taW5MZW5ndGggKyBcIiBjYXJhY3RlcmVzLlwifSk7XG5cblx0XHRcdFx0cmV0dXJuIGNhc2VzO1xuXHRcdFx0fVxuXHRcdFx0dmFyIF9jYXNlcyA9IGJ1aWxkUGFzc3dvcmRSZWdleCgpO1xuXG5cdFx0XHR2YXIgX2VsZW1lbnQgPSB0aGlzO1xuXHRcdFx0dmFyICRjb25maXJtRmllbGQgPSAoX29wdGlvbnMuY29uZmlybUZpZWxkICE9IHVuZGVmaW5lZCk/ICQoX29wdGlvbnMuY29uZmlybUZpZWxkKTogdW5kZWZpbmVkO1xuXG5cdFx0XHQvL0ZpZWxkIHZhbGlkYXRpb24gb24gZXZlcnkgY2FwdHVyZWQgZXZlbnRcblx0XHRcdGZ1bmN0aW9uIHZhbGlkYXRlRmllbGQoKSB7XG5cdFx0XHRcdHZhciBmYWlsZWRDYXNlcyA9IFtdO1xuXHRcdFxuXHRcdFx0XHQvL0V2YWx1YXRlIGFsbCB2ZXJib3NlIGNhc2VzXG5cdFx0XHRcdCQuZWFjaChfY2FzZXMsIGZ1bmN0aW9uKGksIF9jYXNlKSB7XG5cdFx0XHRcdFx0aWYoJChfZWxlbWVudCkudmFsKCkuc2VhcmNoKG5ldyBSZWdFeHAoX2Nhc2UucmVnZXgsIFwiZ1wiKSkgPT0gLTEpIHtcblx0XHRcdFx0XHRcdGZhaWxlZENhc2VzLnB1c2goX2Nhc2UubWVzc2FnZSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblx0XHRcdFx0aWYoX29wdGlvbnMuZmFpbFJlcGVhdHMgJiYgJChfZWxlbWVudCkudmFsKCkuc2VhcmNoKG5ldyBSZWdFeHAoXCIoLilcIiArIChcIi4qXFxcXDFcIikucmVwZWF0KF9vcHRpb25zLm1heFJlcGVhdHMgLSAxKSwgXCJnaVwiKSkgIT0gLTEpIHtcblx0XHRcdFx0XHRmYWlsZWRDYXNlcy5wdXNoKFwiRWwgcGFzc3dvcmQgbm8gcHVlZGUgY29udGVuZXIgXCIgKyBfb3B0aW9ucy5tYXhSZXBlYXRzICsgXCIgdmVjZXMgZWwgbWlzbW8gY2FyYWN0ZXIuXCIpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmKF9vcHRpb25zLmZhaWxDb25zZWN1dGl2ZSAmJiAkKF9lbGVtZW50KS52YWwoKS5zZWFyY2gobmV3IFJlZ0V4cChcIig/PSguKVwiICsgKFwiXFxcXDFcIikucmVwZWF0KF9vcHRpb25zLm1heENvbnNlY3V0aXZlKSArIFwiKVwiLCBcImdcIikpICE9IC0xKSB7XG5cdFx0XHRcdFx0ZmFpbGVkQ2FzZXMucHVzaChcIkVsIFBhc3N3b3JkIG5vIHB1ZWRlIGNvbnRlbmVyIGVsIG1pc21vIGNhcmFjdGVyIG3DoXMgZGUgIFwiICsgX29wdGlvbnMubWF4Q29uc2VjdXRpdmUgKyBcIiB2ZWNlcy5cIik7XG5cdFx0XHRcdH1cblx0XHRcdFx0XG5cdFx0XHRcdC8vRGV0ZXJtaW5lIGlmIHZhbGlkXG5cdFx0XHRcdHZhciB2YWxpZFBhc3N3b3JkID0gKGZhaWxlZENhc2VzLmxlbmd0aCA9PSAwKSAmJiAoJChfZWxlbWVudCkudmFsKCkubGVuZ3RoID49IF9vcHRpb25zLm1pbkxlbmd0aCk7XG5cdFx0XHRcdHZhciBmaWVsZHNNYXRjaCA9IHRydWU7XG5cdFx0XHRcdGlmKCRjb25maXJtRmllbGQgIT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdFx0ZmllbGRzTWF0Y2ggPSAoJGNvbmZpcm1GaWVsZC52YWwoKSA9PSAkKF9lbGVtZW50KS52YWwoKSk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRfY2FsbGJhY2soX2VsZW1lbnQsIHZhbGlkUGFzc3dvcmQsIHZhbGlkUGFzc3dvcmQgJiYgZmllbGRzTWF0Y2gsIGZhaWxlZENhc2VzKTtcblx0XHRcdH1cblxuXHRcdFx0Ly9BZGQgY3VzdG9tIGNsYXNzZXMgdG8gZmllbGRzXG5cdFx0XHR0aGlzLmVhY2goZnVuY3Rpb24oKSB7XG5cdFx0XHRcdC8vVmFsaWRhdGUgZmllbGQgaWYgaXQgaXMgYWxyZWFkeSBmaWxsZWRcblx0XHRcdFx0aWYoJCh0aGlzKS52YWwoKSkge1xuXHRcdFx0XHRcdHZhbGlkYXRlRmllbGQoKS5hcHBseSh0aGlzKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdCQodGhpcykudG9nZ2xlQ2xhc3MoXCJqcVBhc3NGaWVsZFwiLCB0cnVlKTtcblx0XHRcdFx0aWYoJGNvbmZpcm1GaWVsZCAhPSB1bmRlZmluZWQpIHtcblx0XHRcdFx0XHQkY29uZmlybUZpZWxkLnRvZ2dsZUNsYXNzKFwianFQYXNzQ29uZmlybUZpZWxkXCIsIHRydWUpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblxuXHRcdFx0Ly9BZGQgZXZlbnQgYmluZGluZ3MgdG8gdGhlIHBhc3N3b3JkIGZpZWxkc1xuXHRcdFx0cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpIHtcblx0XHRcdFx0JCh0aGlzKS5iaW5kKCdrZXl1cCBmb2N1cyBpbnB1dCBwcm9wcnR5Y2hhbmdlIG1vdXNldXAnLCB2YWxpZGF0ZUZpZWxkKTtcblx0XHRcdFx0aWYoJGNvbmZpcm1GaWVsZCAhPSB1bmRlZmluZWQpIHtcblx0XHRcdFx0XHQkY29uZmlybUZpZWxkLmJpbmQoJ2tleXVwIGZvY3VzIGlucHV0IHByb3BydHljaGFuZ2UgbW91c2V1cCcsIHZhbGlkYXRlRmllbGQpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHR9XG5cdH0pO1xufSkoalF1ZXJ5KTsiXSwibmFtZXMiOlsiJCIsImZuIiwiZXh0ZW5kIiwicGFzc3dvcmRWYWxpZGF0aW9uIiwiX29wdGlvbnMiLCJfY2FsbGJhY2siLCJfY29uZmlybWNhbGxiYWNrIiwiQ0hBUlNFVFMiLCJ1cHBlckNhc2VTZXQiLCJsb3dlckNhc2VTZXQiLCJkaWdpdFNldCIsInNwZWNpYWxTZXQiLCJfZGVmYXVsdHMiLCJtaW5MZW5ndGgiLCJtaW5VcHBlckNhc2UiLCJtaW5Mb3dlckNhc2UiLCJtaW5EaWdpdHMiLCJtaW5TcGVjaWFsIiwibWF4UmVwZWF0cyIsIm1heENvbnNlY3V0aXZlIiwibm9VcHBlciIsIm5vTG93ZXIiLCJub0RpZ2l0Iiwibm9TcGVjaWFsIiwiZmFpbFJlcGVhdHMiLCJmYWlsQ29uc2VjdXRpdmUiLCJjb25maXJtRmllbGQiLCJ1bmRlZmluZWQiLCJpc0Z1bmN0aW9uIiwiY29uc29sZSIsImxvZyIsImNoYXJzZXRUb1N0cmluZyIsImJ1aWxkUGFzc3dvcmRSZWdleCIsImNhc2VzIiwicHVzaCIsInJlcGVhdCIsIl9jYXNlcyIsIl9lbGVtZW50IiwiJGNvbmZpcm1GaWVsZCIsInZhbGlkYXRlRmllbGQiLCJmYWlsZWRDYXNlcyIsImVhY2giLCJpIiwiX2Nhc2UiLCJ2YWwiLCJzZWFyY2giLCJSZWdFeHAiLCJyZWdleCIsIm1lc3NhZ2UiLCJ2YWxpZFBhc3N3b3JkIiwibGVuZ3RoIiwiZmllbGRzTWF0Y2giLCJhcHBseSIsInRvZ2dsZUNsYXNzIiwiYmluZCIsImpRdWVyeSJdLCJzb3VyY2VSb290IjoiIn0=