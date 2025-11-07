(self["webpackChunk"] = self["webpackChunk"] || []).push([["assets_css_portoadmin_vendor_jquery-validation_jquery_validate_js"],{

/***/ "./assets/css/portoadmin/vendor/jquery-validation/jquery.validate.js":
/*!***************************************************************************!*\
  !*** ./assets/css/portoadmin/vendor/jquery-validation/jquery.validate.js ***!
  \***************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;__webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
__webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
__webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
__webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
__webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
__webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");
__webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
__webpack_require__(/*! core-js/modules/es.array.join.js */ "./node_modules/core-js/modules/es.array.join.js");
__webpack_require__(/*! core-js/modules/es.array.last-index-of.js */ "./node_modules/core-js/modules/es.array.last-index-of.js");
__webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
__webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
__webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
__webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
__webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
__webpack_require__(/*! core-js/modules/es.regexp.constructor.js */ "./node_modules/core-js/modules/es.regexp.constructor.js");
__webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
__webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
__webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
__webpack_require__(/*! core-js/modules/es.string.match.js */ "./node_modules/core-js/modules/es.string.match.js");
__webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
__webpack_require__(/*! core-js/modules/es.string.split.js */ "./node_modules/core-js/modules/es.string.split.js");
__webpack_require__(/*! core-js/modules/es.string.trim.js */ "./node_modules/core-js/modules/es.string.trim.js");
__webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
/*!
 * jQuery Validation Plugin v1.19.0
 *
 * https://jqueryvalidation.org/
 *
 * Copyright (c) 2018 Jörn Zaefferer
 * Released under the MIT license
 */
(function (factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else // removed by dead control flow
{}
})(function ($) {
  $.extend($.fn, {
    // https://jqueryvalidation.org/validate/
    validate: function validate(options) {
      // If nothing is selected, return nothing; can't chain anyway
      if (!this.length) {
        if (options && options.debug && window.console) {
          console.warn("Nothing selected, can't validate, returning nothing.");
        }
        return;
      }

      // Check if a validator for this form was already created
      var validator = $.data(this[0], "validator");
      if (validator) {
        return validator;
      }

      // Add novalidate tag if HTML5.
      this.attr("novalidate", "novalidate");
      validator = new $.validator(options, this[0]);
      $.data(this[0], "validator", validator);
      if (validator.settings.onsubmit) {
        this.on("click.validate", ":submit", function (event) {
          // Track the used submit button to properly handle scripted
          // submits later.
          validator.submitButton = event.currentTarget;

          // Allow suppressing validation by adding a cancel class to the submit button
          if ($(this).hasClass("cancel")) {
            validator.cancelSubmit = true;
          }

          // Allow suppressing validation by adding the html5 formnovalidate attribute to the submit button
          if ($(this).attr("formnovalidate") !== undefined) {
            validator.cancelSubmit = true;
          }
        });

        // Validate the form on submit
        this.on("submit.validate", function (event) {
          if (validator.settings.debug) {
            // Prevent form submit to be able to see console output
            event.preventDefault();
          }
          function handle() {
            var hidden, result;

            // Insert a hidden input as a replacement for the missing submit button
            // The hidden input is inserted in two cases:
            //   - A user defined a `submitHandler`
            //   - There was a pending request due to `remote` method and `stopRequest()`
            //     was called to submit the form in case it's valid
            if (validator.submitButton && (validator.settings.submitHandler || validator.formSubmitted)) {
              hidden = $("<input type='hidden'/>").attr("name", validator.submitButton.name).val($(validator.submitButton).val()).appendTo(validator.currentForm);
            }
            if (validator.settings.submitHandler && !validator.settings.debug) {
              result = validator.settings.submitHandler.call(validator, validator.currentForm, event);
              if (hidden) {
                // And clean up afterwards; thanks to no-block-scope, hidden can be referenced
                hidden.remove();
              }
              if (result !== undefined) {
                return result;
              }
              return false;
            }
            return true;
          }

          // Prevent submit for invalid forms or custom submit handlers
          if (validator.cancelSubmit) {
            validator.cancelSubmit = false;
            return handle();
          }
          if (validator.form()) {
            if (validator.pendingRequest) {
              validator.formSubmitted = true;
              return false;
            }
            return handle();
          } else {
            validator.focusInvalid();
            return false;
          }
        });
      }
      return validator;
    },
    // https://jqueryvalidation.org/valid/
    valid: function valid() {
      var valid, validator, errorList;
      if ($(this[0]).is("form")) {
        valid = this.validate().form();
      } else {
        errorList = [];
        valid = true;
        validator = $(this[0].form).validate();
        this.each(function () {
          valid = validator.element(this) && valid;
          if (!valid) {
            errorList = errorList.concat(validator.errorList);
          }
        });
        validator.errorList = errorList;
      }
      return valid;
    },
    // https://jqueryvalidation.org/rules/
    rules: function rules(command, argument) {
      var element = this[0],
        isContentEditable = typeof this.attr("contenteditable") !== "undefined" && this.attr("contenteditable") !== "false",
        settings,
        staticRules,
        existingRules,
        data,
        param,
        filtered;

      // If nothing is selected, return empty object; can't chain anyway
      if (element == null) {
        return;
      }
      if (!element.form && isContentEditable) {
        element.form = this.closest("form")[0];
        element.name = this.attr("name");
      }
      if (element.form == null) {
        return;
      }
      if (command) {
        settings = $.data(element.form, "validator").settings;
        staticRules = settings.rules;
        existingRules = $.validator.staticRules(element);
        switch (command) {
          case "add":
            $.extend(existingRules, $.validator.normalizeRule(argument));

            // Remove messages from rules, but allow them to be set separately
            delete existingRules.messages;
            staticRules[element.name] = existingRules;
            if (argument.messages) {
              settings.messages[element.name] = $.extend(settings.messages[element.name], argument.messages);
            }
            break;
          case "remove":
            if (!argument) {
              delete staticRules[element.name];
              return existingRules;
            }
            filtered = {};
            $.each(argument.split(/\s/), function (index, method) {
              filtered[method] = existingRules[method];
              delete existingRules[method];
            });
            return filtered;
        }
      }
      data = $.validator.normalizeRules($.extend({}, $.validator.classRules(element), $.validator.attributeRules(element), $.validator.dataRules(element), $.validator.staticRules(element)), element);

      // Make sure required is at front
      if (data.required) {
        param = data.required;
        delete data.required;
        data = $.extend({
          required: param
        }, data);
      }

      // Make sure remote is at back
      if (data.remote) {
        param = data.remote;
        delete data.remote;
        data = $.extend(data, {
          remote: param
        });
      }
      return data;
    }
  });

  // Custom selectors
  $.extend($.expr.pseudos || $.expr[":"], {
    // '|| $.expr[ ":" ]' here enables backwards compatibility to jQuery 1.7. Can be removed when dropping jQ 1.7.x support

    // https://jqueryvalidation.org/blank-selector/
    blank: function blank(a) {
      return !$.trim("" + $(a).val());
    },
    // https://jqueryvalidation.org/filled-selector/
    filled: function filled(a) {
      var val = $(a).val();
      return val !== null && !!$.trim("" + val);
    },
    // https://jqueryvalidation.org/unchecked-selector/
    unchecked: function unchecked(a) {
      return !$(a).prop("checked");
    }
  });

  // Constructor for validator
  $.validator = function (options, form) {
    this.settings = $.extend(true, {}, $.validator.defaults, options);
    this.currentForm = form;
    this.init();
  };

  // https://jqueryvalidation.org/jQuery.validator.format/
  $.validator.format = function (source, params) {
    if (arguments.length === 1) {
      return function () {
        var args = $.makeArray(arguments);
        args.unshift(source);
        return $.validator.format.apply(this, args);
      };
    }
    if (params === undefined) {
      return source;
    }
    if (arguments.length > 2 && params.constructor !== Array) {
      params = $.makeArray(arguments).slice(1);
    }
    if (params.constructor !== Array) {
      params = [params];
    }
    $.each(params, function (i, n) {
      source = source.replace(new RegExp("\\{" + i + "\\}", "g"), function () {
        return n;
      });
    });
    return source;
  };
  $.extend($.validator, {
    defaults: {
      messages: {},
      groups: {},
      rules: {},
      errorClass: "error",
      pendingClass: "pending",
      validClass: "valid",
      errorElement: "label",
      focusCleanup: false,
      focusInvalid: true,
      errorContainer: $([]),
      errorLabelContainer: $([]),
      onsubmit: true,
      ignore: ":hidden",
      ignoreTitle: false,
      onfocusin: function onfocusin(element) {
        this.lastActive = element;

        // Hide error label and remove error class on focus if enabled
        if (this.settings.focusCleanup) {
          if (this.settings.unhighlight) {
            this.settings.unhighlight.call(this, element, this.settings.errorClass, this.settings.validClass);
          }
          this.hideThese(this.errorsFor(element));
        }
      },
      onfocusout: function onfocusout(element) {
        if (!this.checkable(element) && (element.name in this.submitted || !this.optional(element))) {
          this.element(element);
        }
      },
      onkeyup: function onkeyup(element, event) {
        // Avoid revalidate the field when pressing one of the following keys
        // Shift       => 16
        // Ctrl        => 17
        // Alt         => 18
        // Caps lock   => 20
        // End         => 35
        // Home        => 36
        // Left arrow  => 37
        // Up arrow    => 38
        // Right arrow => 39
        // Down arrow  => 40
        // Insert      => 45
        // Num lock    => 144
        // AltGr key   => 225
        var excludedKeys = [16, 17, 18, 20, 35, 36, 37, 38, 39, 40, 45, 144, 225];
        if (event.which === 9 && this.elementValue(element) === "" || $.inArray(event.keyCode, excludedKeys) !== -1) {
          return;
        } else if (element.name in this.submitted || element.name in this.invalid) {
          this.element(element);
        }
      },
      onclick: function onclick(element) {
        // Click on selects, radiobuttons and checkboxes
        if (element.name in this.submitted) {
          this.element(element);

          // Or option elements, check parent select in that case
        } else if (element.parentNode.name in this.submitted) {
          this.element(element.parentNode);
        }
      },
      highlight: function highlight(element, errorClass, validClass) {
        if (element.type === "radio") {
          this.findByName(element.name).addClass(errorClass).removeClass(validClass);
        } else {
          $(element).addClass(errorClass).removeClass(validClass);
        }
      },
      unhighlight: function unhighlight(element, errorClass, validClass) {
        if (element.type === "radio") {
          this.findByName(element.name).removeClass(errorClass).addClass(validClass);
        } else {
          $(element).removeClass(errorClass).addClass(validClass);
        }
      }
    },
    // https://jqueryvalidation.org/jQuery.validator.setDefaults/
    setDefaults: function setDefaults(settings) {
      $.extend($.validator.defaults, settings);
    },
    messages: {
      required: "This field is required.",
      remote: "Please fix this field.",
      email: "Please enter a valid email address.",
      url: "Please enter a valid URL.",
      date: "Please enter a valid date.",
      dateISO: "Please enter a valid date (ISO).",
      number: "Please enter a valid number.",
      digits: "Please enter only digits.",
      equalTo: "Please enter the same value again.",
      maxlength: $.validator.format("Please enter no more than {0} characters."),
      minlength: $.validator.format("Please enter at least {0} characters."),
      rangelength: $.validator.format("Please enter a value between {0} and {1} characters long."),
      range: $.validator.format("Please enter a value between {0} and {1}."),
      max: $.validator.format("Please enter a value less than or equal to {0}."),
      min: $.validator.format("Please enter a value greater than or equal to {0}."),
      step: $.validator.format("Please enter a multiple of {0}.")
    },
    autoCreateRanges: false,
    prototype: {
      init: function init() {
        this.labelContainer = $(this.settings.errorLabelContainer);
        this.errorContext = this.labelContainer.length && this.labelContainer || $(this.currentForm);
        this.containers = $(this.settings.errorContainer).add(this.settings.errorLabelContainer);
        this.submitted = {};
        this.valueCache = {};
        this.pendingRequest = 0;
        this.pending = {};
        this.invalid = {};
        this.reset();
        var currentForm = this.currentForm,
          groups = this.groups = {},
          rules;
        $.each(this.settings.groups, function (key, value) {
          if (typeof value === "string") {
            value = value.split(/\s/);
          }
          $.each(value, function (index, name) {
            groups[name] = key;
          });
        });
        rules = this.settings.rules;
        $.each(rules, function (key, value) {
          rules[key] = $.validator.normalizeRule(value);
        });
        function delegate(event) {
          var isContentEditable = typeof $(this).attr("contenteditable") !== "undefined" && $(this).attr("contenteditable") !== "false";

          // Set form expando on contenteditable
          if (!this.form && isContentEditable) {
            this.form = $(this).closest("form")[0];
            this.name = $(this).attr("name");
          }

          // Ignore the element if it belongs to another form. This will happen mainly
          // when setting the `form` attribute of an input to the id of another form.
          if (currentForm !== this.form) {
            return;
          }
          var validator = $.data(this.form, "validator"),
            eventType = "on" + event.type.replace(/^validate/, ""),
            settings = validator.settings;
          if (settings[eventType] && !$(this).is(settings.ignore)) {
            settings[eventType].call(validator, this, event);
          }
        }
        $(this.currentForm).on("focusin.validate focusout.validate keyup.validate", ":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'], " + "[type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], " + "[type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], " + "[type='radio'], [type='checkbox'], [contenteditable], [type='button']", delegate)

        // Support: Chrome, oldIE
        // "select" is provided as event.target when clicking a option
        .on("click.validate", "select, option, [type='radio'], [type='checkbox']", delegate);
        if (this.settings.invalidHandler) {
          $(this.currentForm).on("invalid-form.validate", this.settings.invalidHandler);
        }
      },
      // https://jqueryvalidation.org/Validator.form/
      form: function form() {
        this.checkForm();
        $.extend(this.submitted, this.errorMap);
        this.invalid = $.extend({}, this.errorMap);
        if (!this.valid()) {
          $(this.currentForm).triggerHandler("invalid-form", [this]);
        }
        this.showErrors();
        return this.valid();
      },
      checkForm: function checkForm() {
        this.prepareForm();
        for (var i = 0, elements = this.currentElements = this.elements(); elements[i]; i++) {
          this.check(elements[i]);
        }
        return this.valid();
      },
      // https://jqueryvalidation.org/Validator.element/
      element: function element(_element) {
        var cleanElement = this.clean(_element),
          checkElement = this.validationTargetFor(cleanElement),
          v = this,
          result = true,
          rs,
          group;
        if (checkElement === undefined) {
          delete this.invalid[cleanElement.name];
        } else {
          this.prepareElement(checkElement);
          this.currentElements = $(checkElement);

          // If this element is grouped, then validate all group elements already
          // containing a value
          group = this.groups[checkElement.name];
          if (group) {
            $.each(this.groups, function (name, testgroup) {
              if (testgroup === group && name !== checkElement.name) {
                cleanElement = v.validationTargetFor(v.clean(v.findByName(name)));
                if (cleanElement && cleanElement.name in v.invalid) {
                  v.currentElements.push(cleanElement);
                  result = v.check(cleanElement) && result;
                }
              }
            });
          }
          rs = this.check(checkElement) !== false;
          result = result && rs;
          if (rs) {
            this.invalid[checkElement.name] = false;
          } else {
            this.invalid[checkElement.name] = true;
          }
          if (!this.numberOfInvalids()) {
            // Hide error containers on last error
            this.toHide = this.toHide.add(this.containers);
          }
          this.showErrors();

          // Add aria-invalid status for screen readers
          $(_element).attr("aria-invalid", !rs);
        }
        return result;
      },
      // https://jqueryvalidation.org/Validator.showErrors/
      showErrors: function showErrors(errors) {
        if (errors) {
          var validator = this;

          // Add items to error list and map
          $.extend(this.errorMap, errors);
          this.errorList = $.map(this.errorMap, function (message, name) {
            return {
              message: message,
              element: validator.findByName(name)[0]
            };
          });

          // Remove items from success list
          this.successList = $.grep(this.successList, function (element) {
            return !(element.name in errors);
          });
        }
        if (this.settings.showErrors) {
          this.settings.showErrors.call(this, this.errorMap, this.errorList);
        } else {
          this.defaultShowErrors();
        }
      },
      // https://jqueryvalidation.org/Validator.resetForm/
      resetForm: function resetForm() {
        if ($.fn.resetForm) {
          $(this.currentForm).resetForm();
        }
        this.invalid = {};
        this.submitted = {};
        this.prepareForm();
        this.hideErrors();
        var elements = this.elements().removeData("previousValue").removeAttr("aria-invalid");
        this.resetElements(elements);
      },
      resetElements: function resetElements(elements) {
        var i;
        if (this.settings.unhighlight) {
          for (i = 0; elements[i]; i++) {
            this.settings.unhighlight.call(this, elements[i], this.settings.errorClass, "");
            this.findByName(elements[i].name).removeClass(this.settings.validClass);
          }
        } else {
          elements.removeClass(this.settings.errorClass).removeClass(this.settings.validClass);
        }
      },
      numberOfInvalids: function numberOfInvalids() {
        return this.objectLength(this.invalid);
      },
      objectLength: function objectLength(obj) {
        /* jshint unused: false */
        var count = 0,
          i;
        for (i in obj) {
          // This check allows counting elements with empty error
          // message as invalid elements
          if (obj[i] !== undefined && obj[i] !== null && obj[i] !== false) {
            count++;
          }
        }
        return count;
      },
      hideErrors: function hideErrors() {
        this.hideThese(this.toHide);
      },
      hideThese: function hideThese(errors) {
        errors.not(this.containers).text("");
        this.addWrapper(errors).hide();
      },
      valid: function valid() {
        return this.size() === 0;
      },
      size: function size() {
        return this.errorList.length;
      },
      focusInvalid: function focusInvalid() {
        if (this.settings.focusInvalid) {
          try {
            $(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").focus()

            // Manually trigger focusin event; without it, focusin handler isn't called, findLastActive won't have anything to find
            .trigger("focusin");
          } catch (e) {

            // Ignore IE throwing errors when focusing hidden elements
          }
        }
      },
      findLastActive: function findLastActive() {
        var lastActive = this.lastActive;
        return lastActive && $.grep(this.errorList, function (n) {
          return n.element.name === lastActive.name;
        }).length === 1 && lastActive;
      },
      elements: function elements() {
        var validator = this,
          rulesCache = {};

        // Select all valid inputs inside the form (no submit or reset buttons)
        return $(this.currentForm).find("input, select, textarea, [contenteditable]").not(":submit, :reset, :image, :disabled").not(this.settings.ignore).filter(function () {
          var name = this.name || $(this).attr("name"); // For contenteditable
          var isContentEditable = typeof $(this).attr("contenteditable") !== "undefined" && $(this).attr("contenteditable") !== "false";
          if (!name && validator.settings.debug && window.console) {
            console.error("%o has no name assigned", this);
          }

          // Set form expando on contenteditable
          if (isContentEditable) {
            this.form = $(this).closest("form")[0];
            this.name = name;
          }

          // Ignore elements that belong to other/nested forms
          if (this.form !== validator.currentForm) {
            return false;
          }

          // Select only the first element for each name, and only those with rules specified
          if (name in rulesCache || !validator.objectLength($(this).rules())) {
            return false;
          }
          rulesCache[name] = true;
          return true;
        });
      },
      clean: function clean(selector) {
        return $(selector)[0];
      },
      errors: function errors() {
        var errorClass = this.settings.errorClass.split(" ").join(".");
        return $(this.settings.errorElement + "." + errorClass, this.errorContext);
      },
      resetInternals: function resetInternals() {
        this.successList = [];
        this.errorList = [];
        this.errorMap = {};
        this.toShow = $([]);
        this.toHide = $([]);
      },
      reset: function reset() {
        this.resetInternals();
        this.currentElements = $([]);
      },
      prepareForm: function prepareForm() {
        this.reset();
        this.toHide = this.errors().add(this.containers);
      },
      prepareElement: function prepareElement(element) {
        this.reset();
        this.toHide = this.errorsFor(element);
      },
      elementValue: function elementValue(element) {
        var $element = $(element),
          type = element.type,
          isContentEditable = typeof $element.attr("contenteditable") !== "undefined" && $element.attr("contenteditable") !== "false",
          val,
          idx;
        if (type === "radio" || type === "checkbox") {
          return this.findByName(element.name).filter(":checked").val();
        } else if (type === "number" && typeof element.validity !== "undefined") {
          return element.validity.badInput ? "NaN" : $element.val();
        }
        if (isContentEditable) {
          val = $element.text();
        } else {
          val = $element.val();
        }
        if (type === "file") {
          // Modern browser (chrome & safari)
          if (val.substr(0, 12) === "C:\\fakepath\\") {
            return val.substr(12);
          }

          // Legacy browsers
          // Unix-based path
          idx = val.lastIndexOf("/");
          if (idx >= 0) {
            return val.substr(idx + 1);
          }

          // Windows-based path
          idx = val.lastIndexOf("\\");
          if (idx >= 0) {
            return val.substr(idx + 1);
          }

          // Just the file name
          return val;
        }
        if (typeof val === "string") {
          return val.replace(/\r/g, "");
        }
        return val;
      },
      check: function check(element) {
        element = this.validationTargetFor(this.clean(element));
        var rules = $(element).rules(),
          rulesCount = $.map(rules, function (n, i) {
            return i;
          }).length,
          dependencyMismatch = false,
          val = this.elementValue(element),
          result,
          method,
          rule,
          normalizer;

        // Prioritize the local normalizer defined for this element over the global one
        // if the former exists, otherwise user the global one in case it exists.
        if (typeof rules.normalizer === "function") {
          normalizer = rules.normalizer;
        } else if (typeof this.settings.normalizer === "function") {
          normalizer = this.settings.normalizer;
        }

        // If normalizer is defined, then call it to retreive the changed value instead
        // of using the real one.
        // Note that `this` in the normalizer is `element`.
        if (normalizer) {
          val = normalizer.call(element, val);

          // Delete the normalizer from rules to avoid treating it as a pre-defined method.
          delete rules.normalizer;
        }
        for (method in rules) {
          rule = {
            method: method,
            parameters: rules[method]
          };
          try {
            result = $.validator.methods[method].call(this, val, element, rule.parameters);

            // If a method indicates that the field is optional and therefore valid,
            // don't mark it as valid when there are no other rules
            if (result === "dependency-mismatch" && rulesCount === 1) {
              dependencyMismatch = true;
              continue;
            }
            dependencyMismatch = false;
            if (result === "pending") {
              this.toHide = this.toHide.not(this.errorsFor(element));
              return;
            }
            if (!result) {
              this.formatAndAdd(element, rule);
              return false;
            }
          } catch (e) {
            if (this.settings.debug && window.console) {
              console.log("Exception occurred when checking element " + element.id + ", check the '" + rule.method + "' method.", e);
            }
            if (e instanceof TypeError) {
              e.message += ".  Exception occurred when checking element " + element.id + ", check the '" + rule.method + "' method.";
            }
            throw e;
          }
        }
        if (dependencyMismatch) {
          return;
        }
        if (this.objectLength(rules)) {
          this.successList.push(element);
        }
        return true;
      },
      // Return the custom message for the given element and validation method
      // specified in the element's HTML5 data attribute
      // return the generic message if present and no method specific message is present
      customDataMessage: function customDataMessage(element, method) {
        return $(element).data("msg" + method.charAt(0).toUpperCase() + method.substring(1).toLowerCase()) || $(element).data("msg");
      },
      // Return the custom message for the given element name and validation method
      customMessage: function customMessage(name, method) {
        var m = this.settings.messages[name];
        return m && (m.constructor === String ? m : m[method]);
      },
      // Return the first defined argument, allowing empty strings
      findDefined: function findDefined() {
        for (var i = 0; i < arguments.length; i++) {
          if (arguments[i] !== undefined) {
            return arguments[i];
          }
        }
        return undefined;
      },
      // The second parameter 'rule' used to be a string, and extended to an object literal
      // of the following form:
      // rule = {
      //     method: "method name",
      //     parameters: "the given method parameters"
      // }
      //
      // The old behavior still supported, kept to maintain backward compatibility with
      // old code, and will be removed in the next major release.
      defaultMessage: function defaultMessage(element, rule) {
        if (typeof rule === "string") {
          rule = {
            method: rule
          };
        }
        var message = this.findDefined(this.customMessage(element.name, rule.method), this.customDataMessage(element, rule.method),
          // 'title' is never undefined, so handle empty string as undefined
          !this.settings.ignoreTitle && element.title || undefined, $.validator.messages[rule.method], "<strong>Warning: No message defined for " + element.name + "</strong>"),
          theregex = /\$?\{(\d+)\}/g;
        if (typeof message === "function") {
          message = message.call(this, rule.parameters, element);
        } else if (theregex.test(message)) {
          message = $.validator.format(message.replace(theregex, "{$1}"), rule.parameters);
        }
        return message;
      },
      formatAndAdd: function formatAndAdd(element, rule) {
        var message = this.defaultMessage(element, rule);
        this.errorList.push({
          message: message,
          element: element,
          method: rule.method
        });
        this.errorMap[element.name] = message;
        this.submitted[element.name] = message;
      },
      addWrapper: function addWrapper(toToggle) {
        if (this.settings.wrapper) {
          toToggle = toToggle.add(toToggle.parent(this.settings.wrapper));
        }
        return toToggle;
      },
      defaultShowErrors: function defaultShowErrors() {
        var i, elements, error;
        for (i = 0; this.errorList[i]; i++) {
          error = this.errorList[i];
          if (this.settings.highlight) {
            this.settings.highlight.call(this, error.element, this.settings.errorClass, this.settings.validClass);
          }
          this.showLabel(error.element, error.message);
        }
        if (this.errorList.length) {
          this.toShow = this.toShow.add(this.containers);
        }
        if (this.settings.success) {
          for (i = 0; this.successList[i]; i++) {
            this.showLabel(this.successList[i]);
          }
        }
        if (this.settings.unhighlight) {
          for (i = 0, elements = this.validElements(); elements[i]; i++) {
            this.settings.unhighlight.call(this, elements[i], this.settings.errorClass, this.settings.validClass);
          }
        }
        this.toHide = this.toHide.not(this.toShow);
        this.hideErrors();
        this.addWrapper(this.toShow).show();
      },
      validElements: function validElements() {
        return this.currentElements.not(this.invalidElements());
      },
      invalidElements: function invalidElements() {
        return $(this.errorList).map(function () {
          return this.element;
        });
      },
      showLabel: function showLabel(element, message) {
        var place,
          group,
          errorID,
          v,
          error = this.errorsFor(element),
          elementID = this.idOrName(element),
          describedBy = $(element).attr("aria-describedby");
        if (error.length) {
          // Refresh error/success class
          error.removeClass(this.settings.validClass).addClass(this.settings.errorClass);

          // Replace message on existing label
          error.html(message);
        } else {
          // Create error element
          error = $("<" + this.settings.errorElement + ">").attr("id", elementID + "-error").addClass(this.settings.errorClass).html(message || "");

          // Maintain reference to the element to be placed into the DOM
          place = error;
          if (this.settings.wrapper) {
            // Make sure the element is visible, even in IE
            // actually showing the wrapped element is handled elsewhere
            place = error.hide().show().wrap("<" + this.settings.wrapper + "/>").parent();
          }
          if (this.labelContainer.length) {
            this.labelContainer.append(place);
          } else if (this.settings.errorPlacement) {
            this.settings.errorPlacement.call(this, place, $(element));
          } else {
            place.insertAfter(element);
          }

          // Link error back to the element
          if (error.is("label")) {
            // If the error is a label, then associate using 'for'
            error.attr("for", elementID);

            // If the element is not a child of an associated label, then it's necessary
            // to explicitly apply aria-describedby
          } else if (error.parents("label[for='" + this.escapeCssMeta(elementID) + "']").length === 0) {
            errorID = error.attr("id");

            // Respect existing non-error aria-describedby
            if (!describedBy) {
              describedBy = errorID;
            } else if (!describedBy.match(new RegExp("\\b" + this.escapeCssMeta(errorID) + "\\b"))) {
              // Add to end of list if not already present
              describedBy += " " + errorID;
            }
            $(element).attr("aria-describedby", describedBy);

            // If this element is grouped, then assign to all elements in the same group
            group = this.groups[element.name];
            if (group) {
              v = this;
              $.each(v.groups, function (name, testgroup) {
                if (testgroup === group) {
                  $("[name='" + v.escapeCssMeta(name) + "']", v.currentForm).attr("aria-describedby", error.attr("id"));
                }
              });
            }
          }
        }
        if (!message && this.settings.success) {
          error.text("");
          if (typeof this.settings.success === "string") {
            error.addClass(this.settings.success);
          } else {
            this.settings.success(error, element);
          }
        }
        this.toShow = this.toShow.add(error);
      },
      errorsFor: function errorsFor(element) {
        var name = this.escapeCssMeta(this.idOrName(element)),
          describer = $(element).attr("aria-describedby"),
          selector = "label[for='" + name + "'], label[for='" + name + "'] *";

        // 'aria-describedby' should directly reference the error element
        if (describer) {
          selector = selector + ", #" + this.escapeCssMeta(describer).replace(/\s+/g, ", #");
        }
        return this.errors().filter(selector);
      },
      // See https://api.jquery.com/category/selectors/, for CSS
      // meta-characters that should be escaped in order to be used with JQuery
      // as a literal part of a name/id or any selector.
      escapeCssMeta: function escapeCssMeta(string) {
        return string.replace(/([\\!"#$%&'()*+,./:;<=>?@\[\]^`{|}~])/g, "\\$1");
      },
      idOrName: function idOrName(element) {
        return this.groups[element.name] || (this.checkable(element) ? element.name : element.id || element.name);
      },
      validationTargetFor: function validationTargetFor(element) {
        // If radio/checkbox, validate first element in group instead
        if (this.checkable(element)) {
          element = this.findByName(element.name);
        }

        // Always apply ignore filter
        return $(element).not(this.settings.ignore)[0];
      },
      checkable: function checkable(element) {
        return /radio|checkbox/i.test(element.type);
      },
      findByName: function findByName(name) {
        return $(this.currentForm).find("[name='" + this.escapeCssMeta(name) + "']");
      },
      getLength: function getLength(value, element) {
        switch (element.nodeName.toLowerCase()) {
          case "select":
            return $("option:selected", element).length;
          case "input":
            if (this.checkable(element)) {
              return this.findByName(element.name).filter(":checked").length;
            }
        }
        return value.length;
      },
      depend: function depend(param, element) {
        return this.dependTypes[_typeof(param)] ? this.dependTypes[_typeof(param)](param, element) : true;
      },
      dependTypes: {
        "boolean": function boolean(param) {
          return param;
        },
        "string": function string(param, element) {
          return !!$(param, element.form).length;
        },
        "function": function _function(param, element) {
          return param(element);
        }
      },
      optional: function optional(element) {
        var val = this.elementValue(element);
        return !$.validator.methods.required.call(this, val, element) && "dependency-mismatch";
      },
      startRequest: function startRequest(element) {
        if (!this.pending[element.name]) {
          this.pendingRequest++;
          $(element).addClass(this.settings.pendingClass);
          this.pending[element.name] = true;
        }
      },
      stopRequest: function stopRequest(element, valid) {
        this.pendingRequest--;

        // Sometimes synchronization fails, make sure pendingRequest is never < 0
        if (this.pendingRequest < 0) {
          this.pendingRequest = 0;
        }
        delete this.pending[element.name];
        $(element).removeClass(this.settings.pendingClass);
        if (valid && this.pendingRequest === 0 && this.formSubmitted && this.form()) {
          $(this.currentForm).submit();

          // Remove the hidden input that was used as a replacement for the
          // missing submit button. The hidden input is added by `handle()`
          // to ensure that the value of the used submit button is passed on
          // for scripted submits triggered by this method
          if (this.submitButton) {
            $("input:hidden[name='" + this.submitButton.name + "']", this.currentForm).remove();
          }
          this.formSubmitted = false;
        } else if (!valid && this.pendingRequest === 0 && this.formSubmitted) {
          $(this.currentForm).triggerHandler("invalid-form", [this]);
          this.formSubmitted = false;
        }
      },
      previousValue: function previousValue(element, method) {
        method = typeof method === "string" && method || "remote";
        return $.data(element, "previousValue") || $.data(element, "previousValue", {
          old: null,
          valid: true,
          message: this.defaultMessage(element, {
            method: method
          })
        });
      },
      // Cleans up all forms and elements, removes validator-specific events
      destroy: function destroy() {
        this.resetForm();
        $(this.currentForm).off(".validate").removeData("validator").find(".validate-equalTo-blur").off(".validate-equalTo").removeClass("validate-equalTo-blur").find(".validate-lessThan-blur").off(".validate-lessThan").removeClass("validate-lessThan-blur").find(".validate-lessThanEqual-blur").off(".validate-lessThanEqual").removeClass("validate-lessThanEqual-blur").find(".validate-greaterThanEqual-blur").off(".validate-greaterThanEqual").removeClass("validate-greaterThanEqual-blur").find(".validate-greaterThan-blur").off(".validate-greaterThan").removeClass("validate-greaterThan-blur");
      }
    },
    classRuleSettings: {
      required: {
        required: true
      },
      email: {
        email: true
      },
      url: {
        url: true
      },
      date: {
        date: true
      },
      dateISO: {
        dateISO: true
      },
      number: {
        number: true
      },
      digits: {
        digits: true
      },
      creditcard: {
        creditcard: true
      }
    },
    addClassRules: function addClassRules(className, rules) {
      if (className.constructor === String) {
        this.classRuleSettings[className] = rules;
      } else {
        $.extend(this.classRuleSettings, className);
      }
    },
    classRules: function classRules(element) {
      var rules = {},
        classes = $(element).attr("class");
      if (classes) {
        $.each(classes.split(" "), function () {
          if (this in $.validator.classRuleSettings) {
            $.extend(rules, $.validator.classRuleSettings[this]);
          }
        });
      }
      return rules;
    },
    normalizeAttributeRule: function normalizeAttributeRule(rules, type, method, value) {
      // Convert the value to a number for number inputs, and for text for backwards compability
      // allows type="date" and others to be compared as strings
      if (/min|max|step/.test(method) && (type === null || /number|range|text/.test(type))) {
        value = Number(value);

        // Support Opera Mini, which returns NaN for undefined minlength
        if (isNaN(value)) {
          value = undefined;
        }
      }
      if (value || value === 0) {
        rules[method] = value;
      } else if (type === method && type !== "range") {
        // Exception: the jquery validate 'range' method
        // does not test for the html5 'range' type
        rules[method] = true;
      }
    },
    attributeRules: function attributeRules(element) {
      var rules = {},
        $element = $(element),
        type = element.getAttribute("type"),
        method,
        value;
      for (method in $.validator.methods) {
        // Support for <input required> in both html5 and older browsers
        if (method === "required") {
          value = element.getAttribute(method);

          // Some browsers return an empty string for the required attribute
          // and non-HTML5 browsers might have required="" markup
          if (value === "") {
            value = true;
          }

          // Force non-HTML5 browsers to return bool
          value = !!value;
        } else {
          value = $element.attr(method);
        }
        this.normalizeAttributeRule(rules, type, method, value);
      }

      // 'maxlength' may be returned as -1, 2147483647 ( IE ) and 524288 ( safari ) for text inputs
      if (rules.maxlength && /-1|2147483647|524288/.test(rules.maxlength)) {
        delete rules.maxlength;
      }
      return rules;
    },
    dataRules: function dataRules(element) {
      var rules = {},
        $element = $(element),
        type = element.getAttribute("type"),
        method,
        value;
      for (method in $.validator.methods) {
        value = $element.data("rule" + method.charAt(0).toUpperCase() + method.substring(1).toLowerCase());

        // Cast empty attributes like `data-rule-required` to `true`
        if (value === "") {
          value = true;
        }
        this.normalizeAttributeRule(rules, type, method, value);
      }
      return rules;
    },
    staticRules: function staticRules(element) {
      var rules = {},
        validator = $.data(element.form, "validator");
      if (validator.settings.rules) {
        rules = $.validator.normalizeRule(validator.settings.rules[element.name]) || {};
      }
      return rules;
    },
    normalizeRules: function normalizeRules(rules, element) {
      // Handle dependency check
      $.each(rules, function (prop, val) {
        // Ignore rule when param is explicitly false, eg. required:false
        if (val === false) {
          delete rules[prop];
          return;
        }
        if (val.param || val.depends) {
          var keepRule = true;
          switch (_typeof(val.depends)) {
            case "string":
              keepRule = !!$(val.depends, element.form).length;
              break;
            case "function":
              keepRule = val.depends.call(element, element);
              break;
          }
          if (keepRule) {
            rules[prop] = val.param !== undefined ? val.param : true;
          } else {
            $.data(element.form, "validator").resetElements($(element));
            delete rules[prop];
          }
        }
      });

      // Evaluate parameters
      $.each(rules, function (rule, parameter) {
        rules[rule] = $.isFunction(parameter) && rule !== "normalizer" ? parameter(element) : parameter;
      });

      // Clean number parameters
      $.each(["minlength", "maxlength"], function () {
        if (rules[this]) {
          rules[this] = Number(rules[this]);
        }
      });
      $.each(["rangelength", "range"], function () {
        var parts;
        if (rules[this]) {
          if ($.isArray(rules[this])) {
            rules[this] = [Number(rules[this][0]), Number(rules[this][1])];
          } else if (typeof rules[this] === "string") {
            parts = rules[this].replace(/[\[\]]/g, "").split(/[\s,]+/);
            rules[this] = [Number(parts[0]), Number(parts[1])];
          }
        }
      });
      if ($.validator.autoCreateRanges) {
        // Auto-create ranges
        if (rules.min != null && rules.max != null) {
          rules.range = [rules.min, rules.max];
          delete rules.min;
          delete rules.max;
        }
        if (rules.minlength != null && rules.maxlength != null) {
          rules.rangelength = [rules.minlength, rules.maxlength];
          delete rules.minlength;
          delete rules.maxlength;
        }
      }
      return rules;
    },
    // Converts a simple string to a {string: true} rule, e.g., "required" to {required:true}
    normalizeRule: function normalizeRule(data) {
      if (typeof data === "string") {
        var transformed = {};
        $.each(data.split(/\s/), function () {
          transformed[this] = true;
        });
        data = transformed;
      }
      return data;
    },
    // https://jqueryvalidation.org/jQuery.validator.addMethod/
    addMethod: function addMethod(name, method, message) {
      $.validator.methods[name] = method;
      $.validator.messages[name] = message !== undefined ? message : $.validator.messages[name];
      if (method.length < 3) {
        $.validator.addClassRules(name, $.validator.normalizeRule(name));
      }
    },
    // https://jqueryvalidation.org/jQuery.validator.methods/
    methods: {
      // https://jqueryvalidation.org/required-method/
      required: function required(value, element, param) {
        // Check if dependency is met
        if (!this.depend(param, element)) {
          return "dependency-mismatch";
        }
        if (element.nodeName.toLowerCase() === "select") {
          // Could be an array for select-multiple or a string, both are fine this way
          var val = $(element).val();
          return val && val.length > 0;
        }
        if (this.checkable(element)) {
          return this.getLength(value, element) > 0;
        }
        return value !== undefined && value !== null && value.length > 0;
      },
      // https://jqueryvalidation.org/email-method/
      email: function email(value, element) {
        // From https://html.spec.whatwg.org/multipage/forms.html#valid-e-mail-address
        // Retrieved 2014-01-14
        // If you have a problem with this implementation, report a bug against the above spec
        // Or use custom methods to implement your own email validation
        return this.optional(element) || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(value);
      },
      // https://jqueryvalidation.org/url-method/
      url: function url(value, element) {
        // Copyright (c) 2010-2013 Diego Perini, MIT licensed
        // https://gist.github.com/dperini/729294
        // see also https://mathiasbynens.be/demo/url-regex
        // modified to allow protocol-relative URLs
        return this.optional(element) || /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(value);
      },
      // https://jqueryvalidation.org/date-method/
      date: function () {
        var called = false;
        return function (value, element) {
          if (!called) {
            called = true;
            if (this.settings.debug && window.console) {
              console.warn("The `date` method is deprecated and will be removed in version '2.0.0'.\n" + "Please don't use it, since it relies on the Date constructor, which\n" + "behaves very differently across browsers and locales. Use `dateISO`\n" + "instead or one of the locale specific methods in `localizations/`\n" + "and `additional-methods.js`.");
            }
          }
          return this.optional(element) || !/Invalid|NaN/.test(new Date(value).toString());
        };
      }(),
      // https://jqueryvalidation.org/dateISO-method/
      dateISO: function dateISO(value, element) {
        return this.optional(element) || /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(value);
      },
      // https://jqueryvalidation.org/number-method/
      number: function number(value, element) {
        return this.optional(element) || /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(value);
      },
      // https://jqueryvalidation.org/digits-method/
      digits: function digits(value, element) {
        return this.optional(element) || /^\d+$/.test(value);
      },
      // https://jqueryvalidation.org/minlength-method/
      minlength: function minlength(value, element, param) {
        var length = $.isArray(value) ? value.length : this.getLength(value, element);
        return this.optional(element) || length >= param;
      },
      // https://jqueryvalidation.org/maxlength-method/
      maxlength: function maxlength(value, element, param) {
        var length = $.isArray(value) ? value.length : this.getLength(value, element);
        return this.optional(element) || length <= param;
      },
      // https://jqueryvalidation.org/rangelength-method/
      rangelength: function rangelength(value, element, param) {
        var length = $.isArray(value) ? value.length : this.getLength(value, element);
        return this.optional(element) || length >= param[0] && length <= param[1];
      },
      // https://jqueryvalidation.org/min-method/
      min: function min(value, element, param) {
        return this.optional(element) || value >= param;
      },
      // https://jqueryvalidation.org/max-method/
      max: function max(value, element, param) {
        return this.optional(element) || value <= param;
      },
      // https://jqueryvalidation.org/range-method/
      range: function range(value, element, param) {
        return this.optional(element) || value >= param[0] && value <= param[1];
      },
      // https://jqueryvalidation.org/step-method/
      step: function step(value, element, param) {
        var type = $(element).attr("type"),
          errorMessage = "Step attribute on input type " + type + " is not supported.",
          supportedTypes = ["text", "number", "range"],
          re = new RegExp("\\b" + type + "\\b"),
          notSupported = type && !re.test(supportedTypes.join()),
          decimalPlaces = function decimalPlaces(num) {
            var match = ("" + num).match(/(?:\.(\d+))?$/);
            if (!match) {
              return 0;
            }

            // Number of digits right of decimal point.
            return match[1] ? match[1].length : 0;
          },
          toInt = function toInt(num) {
            return Math.round(num * Math.pow(10, decimals));
          },
          valid = true,
          decimals;

        // Works only for text, number and range input types
        // TODO find a way to support input types date, datetime, datetime-local, month, time and week
        if (notSupported) {
          throw new Error(errorMessage);
        }
        decimals = decimalPlaces(param);

        // Value can't have too many decimals
        if (decimalPlaces(value) > decimals || toInt(value) % toInt(param) !== 0) {
          valid = false;
        }
        return this.optional(element) || valid;
      },
      // https://jqueryvalidation.org/equalTo-method/
      equalTo: function equalTo(value, element, param) {
        // Bind to the blur event of the target in order to revalidate whenever the target field is updated
        var target = $(param);
        if (this.settings.onfocusout && target.not(".validate-equalTo-blur").length) {
          target.addClass("validate-equalTo-blur").on("blur.validate-equalTo", function () {
            $(element).valid();
          });
        }
        return value === target.val();
      },
      // https://jqueryvalidation.org/remote-method/
      remote: function remote(value, element, param, method) {
        if (this.optional(element)) {
          return "dependency-mismatch";
        }
        method = typeof method === "string" && method || "remote";
        var previous = this.previousValue(element, method),
          validator,
          data,
          optionDataString;
        if (!this.settings.messages[element.name]) {
          this.settings.messages[element.name] = {};
        }
        previous.originalMessage = previous.originalMessage || this.settings.messages[element.name][method];
        this.settings.messages[element.name][method] = previous.message;
        param = typeof param === "string" && {
          url: param
        } || param;
        optionDataString = $.param($.extend({
          data: value
        }, param.data));
        if (previous.old === optionDataString) {
          return previous.valid;
        }
        previous.old = optionDataString;
        validator = this;
        this.startRequest(element);
        data = {};
        data[element.name] = value;
        $.ajax($.extend(true, {
          mode: "abort",
          port: "validate" + element.name,
          dataType: "json",
          data: data,
          context: validator.currentForm,
          success: function success(response) {
            var valid = response === true || response === "true",
              errors,
              message,
              submitted;
            validator.settings.messages[element.name][method] = previous.originalMessage;
            if (valid) {
              submitted = validator.formSubmitted;
              validator.resetInternals();
              validator.toHide = validator.errorsFor(element);
              validator.formSubmitted = submitted;
              validator.successList.push(element);
              validator.invalid[element.name] = false;
              validator.showErrors();
            } else {
              errors = {};
              message = response || validator.defaultMessage(element, {
                method: method,
                parameters: value
              });
              errors[element.name] = previous.message = message;
              validator.invalid[element.name] = true;
              validator.showErrors(errors);
            }
            previous.valid = valid;
            validator.stopRequest(element, valid);
          }
        }, param));
        return "pending";
      }
    }
  });

  // Ajax mode: abort
  // usage: $.ajax({ mode: "abort"[, port: "uniqueport"]});
  // if mode:"abort" is used, the previous request on that port (port can be undefined) is aborted via XMLHttpRequest.abort()

  var pendingRequests = {},
    ajax;

  // Use a prefilter if available (1.5+)
  if ($.ajaxPrefilter) {
    $.ajaxPrefilter(function (settings, _, xhr) {
      var port = settings.port;
      if (settings.mode === "abort") {
        if (pendingRequests[port]) {
          pendingRequests[port].abort();
        }
        pendingRequests[port] = xhr;
      }
    });
  } else {
    // Proxy ajax
    ajax = $.ajax;
    $.ajax = function (settings) {
      var mode = ("mode" in settings ? settings : $.ajaxSettings).mode,
        port = ("port" in settings ? settings : $.ajaxSettings).port;
      if (mode === "abort") {
        if (pendingRequests[port]) {
          pendingRequests[port].abort();
        }
        pendingRequests[port] = ajax.apply(this, arguments);
        return pendingRequests[port];
      }
      return ajax.apply(this, arguments);
    };
  }
  return $;
});

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvYXNzZXRzX2Nzc19wb3J0b2FkbWluX3ZlbmRvcl9qcXVlcnktdmFsaWRhdGlvbl9qcXVlcnlfdmFsaWRhdGVfanMuNThjNjRlZDEuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNDLFdBQVVBLE9BQU8sRUFBRztFQUNwQixJQUFLLElBQTBDLEVBQUc7SUFDakRDLGlDQUFRLENBQUMseUVBQVEsQ0FBQyxvQ0FBRUQsT0FBUTtBQUFBO0FBQUE7QUFBQSxrR0FBQztFQUM5QixDQUFDLE1BQU07QUFBQSxFQUlOO0FBQ0YsQ0FBQyxFQUFDLFVBQVVRLENBQUMsRUFBRztFQUVoQkEsQ0FBQyxDQUFDQyxNQUFNLENBQUVELENBQUMsQ0FBQ0UsRUFBRSxFQUFFO0lBRWY7SUFDQUMsUUFBUSxFQUFFLFNBQVZBLFFBQVFBLENBQVlDLE9BQU8sRUFBRztNQUU3QjtNQUNBLElBQUssQ0FBQyxJQUFJLENBQUNDLE1BQU0sRUFBRztRQUNuQixJQUFLRCxPQUFPLElBQUlBLE9BQU8sQ0FBQ0UsS0FBSyxJQUFJQyxNQUFNLENBQUNDLE9BQU8sRUFBRztVQUNqREEsT0FBTyxDQUFDQyxJQUFJLENBQUUsc0RBQXVELENBQUM7UUFDdkU7UUFDQTtNQUNEOztNQUVBO01BQ0EsSUFBSUMsU0FBUyxHQUFHVixDQUFDLENBQUNXLElBQUksQ0FBRSxJQUFJLENBQUUsQ0FBQyxDQUFFLEVBQUUsV0FBWSxDQUFDO01BQ2hELElBQUtELFNBQVMsRUFBRztRQUNoQixPQUFPQSxTQUFTO01BQ2pCOztNQUVBO01BQ0EsSUFBSSxDQUFDRSxJQUFJLENBQUUsWUFBWSxFQUFFLFlBQWEsQ0FBQztNQUV2Q0YsU0FBUyxHQUFHLElBQUlWLENBQUMsQ0FBQ1UsU0FBUyxDQUFFTixPQUFPLEVBQUUsSUFBSSxDQUFFLENBQUMsQ0FBRyxDQUFDO01BQ2pESixDQUFDLENBQUNXLElBQUksQ0FB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RUFDQSxPQUFPNUUsQ0FBQztBQUNSLENBQUMsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2Nzcy9wb3J0b2FkbWluL3ZlbmRvci9qcXVlcnktdmFsaWRhdGlvbi9qcXVlcnkudmFsaWRhdGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyohXHJcbiAqIGpRdWVyeSBWYWxpZGF0aW9uIFBsdWdpbiB2MS4xOS4wXHJcbiAqXHJcbiAqIGh0dHBzOi8vanF1ZXJ5dmFsaWRhdGlvbi5vcmcvXHJcbiAqXHJcbiAqIENvcHlyaWdodCAoYykgMjAxOCBKw7ZybiBaYWVmZmVyZXJcclxuICogUmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlXHJcbiAqL1xyXG4oZnVuY3Rpb24oIGZhY3RvcnkgKSB7XHJcblx0aWYgKCB0eXBlb2YgZGVmaW5lID09PSBcImZ1bmN0aW9uXCIgJiYgZGVmaW5lLmFtZCApIHtcclxuXHRcdGRlZmluZSggW1wianF1ZXJ5XCJdLCBmYWN0b3J5ICk7XHJcblx0fSBlbHNlIGlmICh0eXBlb2YgbW9kdWxlID09PSBcIm9iamVjdFwiICYmIG1vZHVsZS5leHBvcnRzKSB7XHJcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoIHJlcXVpcmUoIFwianF1ZXJ5XCIgKSApO1xyXG5cdH0gZWxzZSB7XHJcblx0XHRmYWN0b3J5KCBqUXVlcnkgKTtcclxuXHR9XHJcbn0oZnVuY3Rpb24oICQgKSB7XHJcblxyXG4kLmV4dGVuZCggJC5mbiwge1xuXG5cdC8vIGh0dHBzOi8vanF1ZXJ5dmFsaWRhdGlvbi5vcmcvdmFsaWRhdGUvXG5cdHZhbGlkYXRlOiBmdW5jdGlvbiggb3B0aW9ucyApIHtcblxuXHRcdC8vIElmIG5vdGhpbmcgaXMgc2VsZWN0ZWQsIHJldHVybiBub3RoaW5nOyBjYW4ndCBjaGFpbiBhbnl3YXlcblx0XHRpZiAoICF0aGlzLmxlbmd0aCApIHtcblx0XHRcdGlmICggb3B0aW9ucyAmJiBvcHRpb25zLmRlYnVnICYmIHdpbmRvdy5jb25zb2xlICkge1xuXHRcdFx0XHRjb25zb2xlLndhcm4oIFwiTm90aGluZyBzZWxlY3RlZCwgY2FuJ3QgdmFsaWRhdGUsIHJldHVybmluZyBub3RoaW5nLlwiICk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Ly8gQ2hlY2sgaWYgYSB2YWxpZGF0b3IgZm9yIHRoaXMgZm9ybSB3YXMgYWxyZWFkeSBjcmVhdGVkXG5cdFx0dmFyIHZhbGlkYXRvciA9ICQuZGF0YSggdGhpc1sgMCBdLCBcInZhbGlkYXRvclwiICk7XG5cdFx0aWYgKCB2YWxpZGF0b3IgKSB7XG5cdFx0XHRyZXR1cm4gdmFsaWRhdG9yO1xuXHRcdH1cblxuXHRcdC8vIEFkZCBub3ZhbGlkYXRlIHRhZyBpZiBIVE1MNS5cblx0XHR0aGlzLmF0dHIoIFwibm92YWxpZGF0ZVwiLCBcIm5vdmFsaWRhdGVcIiApO1xuXG5cdFx0dmFsaWRhdG9yID0gbmV3ICQudmFsaWRhdG9yKCBvcHRpb25zLCB0aGlzWyAwIF0gKTtcblx0XHQkLmRhdGEoIHRoaXNbIDAgXSwgXCJ2YWxpZGF0b3JcIiwgdmFsaWRhdG9yICk7XG5cblx0XHRpZiAoIHZhbGlkYXRvci5zZXR0aW5ncy5vbnN1Ym1pdCApIHtcblxuXHRcdFx0dGhpcy5vbiggXCJjbGljay52YWxpZGF0ZVwiLCBcIjpzdWJtaXRcIiwgZnVuY3Rpb24oIGV2ZW50ICkge1xuXG5cdFx0XHRcdC8vIFRyYWNrIHRoZSB1c2VkIHN1Ym1pdCBidXR0b24gdG8gcHJvcGVybHkgaGFuZGxlIHNjcmlwdGVkXG5cdFx0XHRcdC8vIHN1Ym1pdHMgbGF0ZXIuXG5cdFx0XHRcdHZhbGlkYXRvci5zdWJtaXRCdXR0b24gPSBldmVudC5jdXJyZW50VGFyZ2V0O1xuXG5cdFx0XHRcdC8vIEFsbG93IHN1cHByZXNzaW5nIHZhbGlkYXRpb24gYnkgYWRkaW5nIGEgY2FuY2VsIGNsYXNzIHRvIHRoZSBzdWJtaXQgYnV0dG9uXG5cdFx0XHRcdGlmICggJCggdGhpcyApLmhhc0NsYXNzKCBcImNhbmNlbFwiICkgKSB7XG5cdFx0XHRcdFx0dmFsaWRhdG9yLmNhbmNlbFN1Ym1pdCA9IHRydWU7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBBbGxvdyBzdXBwcmVzc2luZyB2YWxpZGF0aW9uIGJ5IGFkZGluZyB0aGUgaHRtbDUgZm9ybW5vdmFsaWRhdGUgYXR0cmlidXRlIHRvIHRoZSBzdWJtaXQgYnV0dG9uXG5cdFx0XHRcdGlmICggJCggdGhpcyApLmF0dHIoIFwiZm9ybW5vdmFsaWRhdGVcIiApICE9PSB1bmRlZmluZWQgKSB7XG5cdFx0XHRcdFx0dmFsaWRhdG9yLmNhbmNlbFN1Ym1pdCA9IHRydWU7XG5cdFx0XHRcdH1cblx0XHRcdH0gKTtcblxuXHRcdFx0Ly8gVmFsaWRhdGUgdGhlIGZvcm0gb24gc3VibWl0XG5cdFx0XHR0aGlzLm9uKCBcInN1Ym1pdC52YWxpZGF0ZVwiLCBmdW5jdGlvbiggZXZlbnQgKSB7XG5cdFx0XHRcdGlmICggdmFsaWRhdG9yLnNldHRpbmdzLmRlYnVnICkge1xuXG5cdFx0XHRcdFx0Ly8gUHJldmVudCBmb3JtIHN1Ym1pdCB0byBiZSBhYmxlIHRvIHNlZSBjb25zb2xlIG91dHB1dFxuXHRcdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRmdW5jdGlvbiBoYW5kbGUoKSB7XG5cdFx0XHRcdFx0dmFyIGhpZGRlbiwgcmVzdWx0O1xuXG5cdFx0XHRcdFx0Ly8gSW5zZXJ0IGEgaGlkZGVuIGlucHV0IGFzIGEgcmVwbGFjZW1lbnQgZm9yIHRoZSBtaXNzaW5nIHN1Ym1pdCBidXR0b25cblx0XHRcdFx0XHQvLyBUaGUgaGlkZGVuIGlucHV0IGlzIGluc2VydGVkIGluIHR3byBjYXNlczpcblx0XHRcdFx0XHQvLyAgIC0gQSB1c2VyIGRlZmluZWQgYSBgc3VibWl0SGFuZGxlcmBcblx0XHRcdFx0XHQvLyAgIC0gVGhlcmUgd2FzIGEgcGVuZGluZyByZXF1ZXN0IGR1ZSB0byBgcmVtb3RlYCBtZXRob2QgYW5kIGBzdG9wUmVxdWVzdCgpYFxuXHRcdFx0XHRcdC8vICAgICB3YXMgY2FsbGVkIHRvIHN1Ym1pdCB0aGUgZm9ybSBpbiBjYXNlIGl0J3MgdmFsaWRcblx0XHRcdFx0XHRpZiAoIHZhbGlkYXRvci5zdWJtaXRCdXR0b24gJiYgKCB2YWxpZGF0b3Iuc2V0dGluZ3Muc3VibWl0SGFuZGxlciB8fCB2YWxpZGF0b3IuZm9ybVN1Ym1pdHRlZCApICkge1xuXHRcdFx0XHRcdFx0aGlkZGVuID0gJCggXCI8aW5wdXQgdHlwZT0naGlkZGVuJy8+XCIgKVxuXHRcdFx0XHRcdFx0XHQuYXR0ciggXCJuYW1lXCIsIHZhbGlkYXRvci5zdWJtaXRCdXR0b24ubmFtZSApXG5cdFx0XHRcdFx0XHRcdC52YWwoICQoIHZhbGlkYXRvci5zdWJtaXRCdXR0b24gKS52YWwoKSApXG5cdFx0XHRcdFx0XHRcdC5hcHBlbmRUbyggdmFsaWRhdG9yLmN1cnJlbnRGb3JtICk7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0aWYgKCB2YWxpZGF0b3Iuc2V0dGluZ3Muc3VibWl0SGFuZGxlciAmJiAhdmFsaWRhdG9yLnNldHRpbmdzLmRlYnVnICkge1xuXHRcdFx0XHRcdFx0cmVzdWx0ID0gdmFsaWRhdG9yLnNldHRpbmdzLnN1Ym1pdEhhbmRsZXIuY2FsbCggdmFsaWRhdG9yLCB2YWxpZGF0b3IuY3VycmVudEZvcm0sIGV2ZW50ICk7XG5cdFx0XHRcdFx0XHRpZiAoIGhpZGRlbiApIHtcblxuXHRcdFx0XHRcdFx0XHQvLyBBbmQgY2xlYW4gdXAgYWZ0ZXJ3YXJkczsgdGhhbmtzIHRvIG5vLWJsb2NrLXNjb3BlLCBoaWRkZW4gY2FuIGJlIHJlZmVyZW5jZWRcblx0XHRcdFx0XHRcdFx0aGlkZGVuLnJlbW92ZSgpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0aWYgKCByZXN1bHQgIT09IHVuZGVmaW5lZCApIHtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIHJlc3VsdDtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBQcmV2ZW50IHN1Ym1pdCBmb3IgaW52YWxpZCBmb3JtcyBvciBjdXN0b20gc3VibWl0IGhhbmRsZXJzXG5cdFx0XHRcdGlmICggdmFsaWRhdG9yLmNhbmNlbFN1Ym1pdCApIHtcblx0XHRcdFx0XHR2YWxpZGF0b3IuY2FuY2VsU3VibWl0ID0gZmFsc2U7XG5cdFx0XHRcdFx0cmV0dXJuIGhhbmRsZSgpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmICggdmFsaWRhdG9yLmZvcm0oKSApIHtcblx0XHRcdFx0XHRpZiAoIHZhbGlkYXRvci5wZW5kaW5nUmVxdWVzdCApIHtcblx0XHRcdFx0XHRcdHZhbGlkYXRvci5mb3JtU3VibWl0dGVkID0gdHJ1ZTtcblx0XHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0cmV0dXJuIGhhbmRsZSgpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHZhbGlkYXRvci5mb2N1c0ludmFsaWQoKTtcblx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdH1cblx0XHRcdH0gKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdmFsaWRhdG9yO1xuXHR9LFxuXG5cdC8vIGh0dHBzOi8vanF1ZXJ5dmFsaWRhdGlvbi5vcmcvdmFsaWQvXG5cdHZhbGlkOiBmdW5jdGlvbigpIHtcblx0XHR2YXIgdmFsaWQsIHZhbGlkYXRvciwgZXJyb3JMaXN0O1xuXG5cdFx0aWYgKCAkKCB0aGlzWyAwIF0gKS5pcyggXCJmb3JtXCIgKSApIHtcblx0XHRcdHZhbGlkID0gdGhpcy52YWxpZGF0ZSgpLmZvcm0oKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0ZXJyb3JMaXN0ID0gW107XG5cdFx0XHR2YWxpZCA9IHRydWU7XG5cdFx0XHR2YWxpZGF0b3IgPSAkKCB0aGlzWyAwIF0uZm9ybSApLnZhbGlkYXRlKCk7XG5cdFx0XHR0aGlzLmVhY2goIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHR2YWxpZCA9IHZhbGlkYXRvci5lbGVtZW50KCB0aGlzICkgJiYgdmFsaWQ7XG5cdFx0XHRcdGlmICggIXZhbGlkICkge1xuXHRcdFx0XHRcdGVycm9yTGlzdCA9IGVycm9yTGlzdC5jb25jYXQoIHZhbGlkYXRvci5lcnJvckxpc3QgKTtcblx0XHRcdFx0fVxuXHRcdFx0fSApO1xuXHRcdFx0dmFsaWRhdG9yLmVycm9yTGlzdCA9IGVycm9yTGlzdDtcblx0XHR9XG5cdFx0cmV0dXJuIHZhbGlkO1xuXHR9LFxuXG5cdC8vIGh0dHBzOi8vanF1ZXJ5dmFsaWRhdGlvbi5vcmcvcnVsZXMvXG5cdHJ1bGVzOiBmdW5jdGlvbiggY29tbWFuZCwgYXJndW1lbnQgKSB7XG5cdFx0dmFyIGVsZW1lbnQgPSB0aGlzWyAwIF0sXG5cdFx0XHRpc0NvbnRlbnRFZGl0YWJsZSA9IHR5cGVvZiB0aGlzLmF0dHIoIFwiY29udGVudGVkaXRhYmxlXCIgKSAhPT0gXCJ1bmRlZmluZWRcIiAmJiB0aGlzLmF0dHIoIFwiY29udGVudGVkaXRhYmxlXCIgKSAhPT0gXCJmYWxzZVwiLFxuXHRcdFx0c2V0dGluZ3MsIHN0YXRpY1J1bGVzLCBleGlzdGluZ1J1bGVzLCBkYXRhLCBwYXJhbSwgZmlsdGVyZWQ7XG5cblx0XHQvLyBJZiBub3RoaW5nIGlzIHNlbGVjdGVkLCByZXR1cm4gZW1wdHkgb2JqZWN0OyBjYW4ndCBjaGFpbiBhbnl3YXlcblx0XHRpZiAoIGVsZW1lbnQgPT0gbnVsbCApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRpZiAoICFlbGVtZW50LmZvcm0gJiYgaXNDb250ZW50RWRpdGFibGUgKSB7XG5cdFx0XHRlbGVtZW50LmZvcm0gPSB0aGlzLmNsb3Nlc3QoIFwiZm9ybVwiIClbIDAgXTtcblx0XHRcdGVsZW1lbnQubmFtZSA9IHRoaXMuYXR0ciggXCJuYW1lXCIgKTtcblx0XHR9XG5cblx0XHRpZiAoIGVsZW1lbnQuZm9ybSA9PSBudWxsICkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGlmICggY29tbWFuZCApIHtcblx0XHRcdHNldHRpbmdzID0gJC5kYXRhKCBlbGVtZW50LmZvcm0sIFwidmFsaWRhdG9yXCIgKS5zZXR0aW5ncztcblx0XHRcdHN0YXRpY1J1bGVzID0gc2V0dGluZ3MucnVsZXM7XG5cdFx0XHRleGlzdGluZ1J1bGVzID0gJC52YWxpZGF0b3Iuc3RhdGljUnVsZXMoIGVsZW1lbnQgKTtcblx0XHRcdHN3aXRjaCAoIGNvbW1hbmQgKSB7XG5cdFx0XHRjYXNlIFwiYWRkXCI6XG5cdFx0XHRcdCQuZXh0ZW5kKCBleGlzdGluZ1J1bGVzLCAkLnZhbGlkYXRvci5ub3JtYWxpemVSdWxlKCBhcmd1bWVudCApICk7XG5cblx0XHRcdFx0Ly8gUmVtb3ZlIG1lc3NhZ2VzIGZyb20gcnVsZXMsIGJ1dCBhbGxvdyB0aGVtIHRvIGJlIHNldCBzZXBhcmF0ZWx5XG5cdFx0XHRcdGRlbGV0ZSBleGlzdGluZ1J1bGVzLm1lc3NhZ2VzO1xuXHRcdFx0XHRzdGF0aWNSdWxlc1sgZWxlbWVudC5uYW1lIF0gPSBleGlzdGluZ1J1bGVzO1xuXHRcdFx0XHRpZiAoIGFyZ3VtZW50Lm1lc3NhZ2VzICkge1xuXHRcdFx0XHRcdHNldHRpbmdzLm1lc3NhZ2VzWyBlbGVtZW50Lm5hbWUgXSA9ICQuZXh0ZW5kKCBzZXR0aW5ncy5tZXNzYWdlc1sgZWxlbWVudC5uYW1lIF0sIGFyZ3VtZW50Lm1lc3NhZ2VzICk7XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIFwicmVtb3ZlXCI6XG5cdFx0XHRcdGlmICggIWFyZ3VtZW50ICkge1xuXHRcdFx0XHRcdGRlbGV0ZSBzdGF0aWNSdWxlc1sgZWxlbWVudC5uYW1lIF07XG5cdFx0XHRcdFx0cmV0dXJuIGV4aXN0aW5nUnVsZXM7XG5cdFx0XHRcdH1cblx0XHRcdFx0ZmlsdGVyZWQgPSB7fTtcblx0XHRcdFx0JC5lYWNoKCBhcmd1bWVudC5zcGxpdCggL1xccy8gKSwgZnVuY3Rpb24oIGluZGV4LCBtZXRob2QgKSB7XG5cdFx0XHRcdFx0ZmlsdGVyZWRbIG1ldGhvZCBdID0gZXhpc3RpbmdSdWxlc1sgbWV0aG9kIF07XG5cdFx0XHRcdFx0ZGVsZXRlIGV4aXN0aW5nUnVsZXNbIG1ldGhvZCBdO1xuXHRcdFx0XHR9ICk7XG5cdFx0XHRcdHJldHVybiBmaWx0ZXJlZDtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRkYXRhID0gJC52YWxpZGF0b3Iubm9ybWFsaXplUnVsZXMoXG5cdFx0JC5leHRlbmQoXG5cdFx0XHR7fSxcblx0XHRcdCQudmFsaWRhdG9yLmNsYXNzUnVsZXMoIGVsZW1lbnQgKSxcblx0XHRcdCQudmFsaWRhdG9yLmF0dHJpYnV0ZVJ1bGVzKCBlbGVtZW50ICksXG5cdFx0XHQkLnZhbGlkYXRvci5kYXRhUnVsZXMoIGVsZW1lbnQgKSxcblx0XHRcdCQudmFsaWRhdG9yLnN0YXRpY1J1bGVzKCBlbGVtZW50IClcblx0XHQpLCBlbGVtZW50ICk7XG5cblx0XHQvLyBNYWtlIHN1cmUgcmVxdWlyZWQgaXMgYXQgZnJvbnRcblx0XHRpZiAoIGRhdGEucmVxdWlyZWQgKSB7XG5cdFx0XHRwYXJhbSA9IGRhdGEucmVxdWlyZWQ7XG5cdFx0XHRkZWxldGUgZGF0YS5yZXF1aXJlZDtcblx0XHRcdGRhdGEgPSAkLmV4dGVuZCggeyByZXF1aXJlZDogcGFyYW0gfSwgZGF0YSApO1xuXHRcdH1cblxuXHRcdC8vIE1ha2Ugc3VyZSByZW1vdGUgaXMgYXQgYmFja1xuXHRcdGlmICggZGF0YS5yZW1vdGUgKSB7XG5cdFx0XHRwYXJhbSA9IGRhdGEucmVtb3RlO1xuXHRcdFx0ZGVsZXRlIGRhdGEucmVtb3RlO1xuXHRcdFx0ZGF0YSA9ICQuZXh0ZW5kKCBkYXRhLCB7IHJlbW90ZTogcGFyYW0gfSApO1xuXHRcdH1cblxuXHRcdHJldHVybiBkYXRhO1xuXHR9XG59ICk7XG5cbi8vIEN1c3RvbSBzZWxlY3RvcnNcbiQuZXh0ZW5kKCAkLmV4cHIucHNldWRvcyB8fCAkLmV4cHJbIFwiOlwiIF0sIHtcdFx0Ly8gJ3x8ICQuZXhwclsgXCI6XCIgXScgaGVyZSBlbmFibGVzIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5IHRvIGpRdWVyeSAxLjcuIENhbiBiZSByZW1vdmVkIHdoZW4gZHJvcHBpbmcgalEgMS43Lnggc3VwcG9ydFxuXG5cdC8vIGh0dHBzOi8vanF1ZXJ5dmFsaWRhdGlvbi5vcmcvYmxhbmstc2VsZWN0b3IvXG5cdGJsYW5rOiBmdW5jdGlvbiggYSApIHtcblx0XHRyZXR1cm4gISQudHJpbSggXCJcIiArICQoIGEgKS52YWwoKSApO1xuXHR9LFxuXG5cdC8vIGh0dHBzOi8vanF1ZXJ5dmFsaWRhdGlvbi5vcmcvZmlsbGVkLXNlbGVjdG9yL1xuXHRmaWxsZWQ6IGZ1bmN0aW9uKCBhICkge1xuXHRcdHZhciB2YWwgPSAkKCBhICkudmFsKCk7XG5cdFx0cmV0dXJuIHZhbCAhPT0gbnVsbCAmJiAhISQudHJpbSggXCJcIiArIHZhbCApO1xuXHR9LFxuXG5cdC8vIGh0dHBzOi8vanF1ZXJ5dmFsaWRhdGlvbi5vcmcvdW5jaGVja2VkLXNlbGVjdG9yL1xuXHR1bmNoZWNrZWQ6IGZ1bmN0aW9uKCBhICkge1xuXHRcdHJldHVybiAhJCggYSApLnByb3AoIFwiY2hlY2tlZFwiICk7XG5cdH1cbn0gKTtcblxuLy8gQ29uc3RydWN0b3IgZm9yIHZhbGlkYXRvclxuJC52YWxpZGF0b3IgPSBmdW5jdGlvbiggb3B0aW9ucywgZm9ybSApIHtcblx0dGhpcy5zZXR0aW5ncyA9ICQuZXh0ZW5kKCB0cnVlLCB7fSwgJC52YWxpZGF0b3IuZGVmYXVsdHMsIG9wdGlvbnMgKTtcblx0dGhpcy5jdXJyZW50Rm9ybSA9IGZvcm07XG5cdHRoaXMuaW5pdCgpO1xufTtcblxuLy8gaHR0cHM6Ly9qcXVlcnl2YWxpZGF0aW9uLm9yZy9qUXVlcnkudmFsaWRhdG9yLmZvcm1hdC9cbiQudmFsaWRhdG9yLmZvcm1hdCA9IGZ1bmN0aW9uKCBzb3VyY2UsIHBhcmFtcyApIHtcblx0aWYgKCBhcmd1bWVudHMubGVuZ3RoID09PSAxICkge1xuXHRcdHJldHVybiBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBhcmdzID0gJC5tYWtlQXJyYXkoIGFyZ3VtZW50cyApO1xuXHRcdFx0YXJncy51bnNoaWZ0KCBzb3VyY2UgKTtcblx0XHRcdHJldHVybiAkLnZhbGlkYXRvci5mb3JtYXQuYXBwbHkoIHRoaXMsIGFyZ3MgKTtcblx0XHR9O1xuXHR9XG5cdGlmICggcGFyYW1zID09PSB1bmRlZmluZWQgKSB7XG5cdFx0cmV0dXJuIHNvdXJjZTtcblx0fVxuXHRpZiAoIGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIHBhcmFtcy5jb25zdHJ1Y3RvciAhPT0gQXJyYXkgICkge1xuXHRcdHBhcmFtcyA9ICQubWFrZUFycmF5KCBhcmd1bWVudHMgKS5zbGljZSggMSApO1xuXHR9XG5cdGlmICggcGFyYW1zLmNvbnN0cnVjdG9yICE9PSBBcnJheSApIHtcblx0XHRwYXJhbXMgPSBbIHBhcmFtcyBdO1xuXHR9XG5cdCQuZWFjaCggcGFyYW1zLCBmdW5jdGlvbiggaSwgbiApIHtcblx0XHRzb3VyY2UgPSBzb3VyY2UucmVwbGFjZSggbmV3IFJlZ0V4cCggXCJcXFxce1wiICsgaSArIFwiXFxcXH1cIiwgXCJnXCIgKSwgZnVuY3Rpb24oKSB7XG5cdFx0XHRyZXR1cm4gbjtcblx0XHR9ICk7XG5cdH0gKTtcblx0cmV0dXJuIHNvdXJjZTtcbn07XG5cbiQuZXh0ZW5kKCAkLnZhbGlkYXRvciwge1xuXG5cdGRlZmF1bHRzOiB7XG5cdFx0bWVzc2FnZXM6IHt9LFxuXHRcdGdyb3Vwczoge30sXG5cdFx0cnVsZXM6IHt9LFxuXHRcdGVycm9yQ2xhc3M6IFwiZXJyb3JcIixcblx0XHRwZW5kaW5nQ2xhc3M6IFwicGVuZGluZ1wiLFxuXHRcdHZhbGlkQ2xhc3M6IFwidmFsaWRcIixcblx0XHRlcnJvckVsZW1lbnQ6IFwibGFiZWxcIixcblx0XHRmb2N1c0NsZWFudXA6IGZhbHNlLFxuXHRcdGZvY3VzSW52YWxpZDogdHJ1ZSxcblx0XHRlcnJvckNvbnRhaW5lcjogJCggW10gKSxcblx0XHRlcnJvckxhYmVsQ29udGFpbmVyOiAkKCBbXSApLFxuXHRcdG9uc3VibWl0OiB0cnVlLFxuXHRcdGlnbm9yZTogXCI6aGlkZGVuXCIsXG5cdFx0aWdub3JlVGl0bGU6IGZhbHNlLFxuXHRcdG9uZm9jdXNpbjogZnVuY3Rpb24oIGVsZW1lbnQgKSB7XG5cdFx0XHR0aGlzLmxhc3RBY3RpdmUgPSBlbGVtZW50O1xuXG5cdFx0XHQvLyBIaWRlIGVycm9yIGxhYmVsIGFuZCByZW1vdmUgZXJyb3IgY2xhc3Mgb24gZm9jdXMgaWYgZW5hYmxlZFxuXHRcdFx0aWYgKCB0aGlzLnNldHRpbmdzLmZvY3VzQ2xlYW51cCApIHtcblx0XHRcdFx0aWYgKCB0aGlzLnNldHRpbmdzLnVuaGlnaGxpZ2h0ICkge1xuXHRcdFx0XHRcdHRoaXMuc2V0dGluZ3MudW5oaWdobGlnaHQuY2FsbCggdGhpcywgZWxlbWVudCwgdGhpcy5zZXR0aW5ncy5lcnJvckNsYXNzLCB0aGlzLnNldHRpbmdzLnZhbGlkQ2xhc3MgKTtcblx0XHRcdFx0fVxuXHRcdFx0XHR0aGlzLmhpZGVUaGVzZSggdGhpcy5lcnJvcnNGb3IoIGVsZW1lbnQgKSApO1xuXHRcdFx0fVxuXHRcdH0sXG5cdFx0b25mb2N1c291dDogZnVuY3Rpb24oIGVsZW1lbnQgKSB7XG5cdFx0XHRpZiAoICF0aGlzLmNoZWNrYWJsZSggZWxlbWVudCApICYmICggZWxlbWVudC5uYW1lIGluIHRoaXMuc3VibWl0dGVkIHx8ICF0aGlzLm9wdGlvbmFsKCBlbGVtZW50ICkgKSApIHtcblx0XHRcdFx0dGhpcy5lbGVtZW50KCBlbGVtZW50ICk7XG5cdFx0XHR9XG5cdFx0fSxcblx0XHRvbmtleXVwOiBmdW5jdGlvbiggZWxlbWVudCwgZXZlbnQgKSB7XG5cblx0XHRcdC8vIEF2b2lkIHJldmFsaWRhdGUgdGhlIGZpZWxkIHdoZW4gcHJlc3Npbmcgb25lIG9mIHRoZSBmb2xsb3dpbmcga2V5c1xuXHRcdFx0Ly8gU2hpZnQgICAgICAgPT4gMTZcblx0XHRcdC8vIEN0cmwgICAgICAgID0+IDE3XG5cdFx0XHQvLyBBbHQgICAgICAgICA9PiAxOFxuXHRcdFx0Ly8gQ2FwcyBsb2NrICAgPT4gMjBcblx0XHRcdC8vIEVuZCAgICAgICAgID0+IDM1XG5cdFx0XHQvLyBIb21lICAgICAgICA9PiAzNlxuXHRcdFx0Ly8gTGVmdCBhcnJvdyAgPT4gMzdcblx0XHRcdC8vIFVwIGFycm93ICAgID0+IDM4XG5cdFx0XHQvLyBSaWdodCBhcnJvdyA9PiAzOVxuXHRcdFx0Ly8gRG93biBhcnJvdyAgPT4gNDBcblx0XHRcdC8vIEluc2VydCAgICAgID0+IDQ1XG5cdFx0XHQvLyBOdW0gbG9jayAgICA9PiAxNDRcblx0XHRcdC8vIEFsdEdyIGtleSAgID0+IDIyNVxuXHRcdFx0dmFyIGV4Y2x1ZGVkS2V5cyA9IFtcblx0XHRcdFx0MTYsIDE3LCAxOCwgMjAsIDM1LCAzNiwgMzcsXG5cdFx0XHRcdDM4LCAzOSwgNDAsIDQ1LCAxNDQsIDIyNVxuXHRcdFx0XTtcblxuXHRcdFx0aWYgKCBldmVudC53aGljaCA9PT0gOSAmJiB0aGlzLmVsZW1lbnRWYWx1ZSggZWxlbWVudCApID09PSBcIlwiIHx8ICQuaW5BcnJheSggZXZlbnQua2V5Q29kZSwgZXhjbHVkZWRLZXlzICkgIT09IC0xICkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9IGVsc2UgaWYgKCBlbGVtZW50Lm5hbWUgaW4gdGhpcy5zdWJtaXR0ZWQgfHwgZWxlbWVudC5uYW1lIGluIHRoaXMuaW52YWxpZCApIHtcblx0XHRcdFx0dGhpcy5lbGVtZW50KCBlbGVtZW50ICk7XG5cdFx0XHR9XG5cdFx0fSxcblx0XHRvbmNsaWNrOiBmdW5jdGlvbiggZWxlbWVudCApIHtcblxuXHRcdFx0Ly8gQ2xpY2sgb24gc2VsZWN0cywgcmFkaW9idXR0b25zIGFuZCBjaGVja2JveGVzXG5cdFx0XHRpZiAoIGVsZW1lbnQubmFtZSBpbiB0aGlzLnN1Ym1pdHRlZCApIHtcblx0XHRcdFx0dGhpcy5lbGVtZW50KCBlbGVtZW50ICk7XG5cblx0XHRcdC8vIE9yIG9wdGlvbiBlbGVtZW50cywgY2hlY2sgcGFyZW50IHNlbGVjdCBpbiB0aGF0IGNhc2Vcblx0XHRcdH0gZWxzZSBpZiAoIGVsZW1lbnQucGFyZW50Tm9kZS5uYW1lIGluIHRoaXMuc3VibWl0dGVkICkge1xuXHRcdFx0XHR0aGlzLmVsZW1lbnQoIGVsZW1lbnQucGFyZW50Tm9kZSApO1xuXHRcdFx0fVxuXHRcdH0sXG5cdFx0aGlnaGxpZ2h0OiBmdW5jdGlvbiggZWxlbWVudCwgZXJyb3JDbGFzcywgdmFsaWRDbGFzcyApIHtcblx0XHRcdGlmICggZWxlbWVudC50eXBlID09PSBcInJhZGlvXCIgKSB7XG5cdFx0XHRcdHRoaXMuZmluZEJ5TmFtZSggZWxlbWVudC5uYW1lICkuYWRkQ2xhc3MoIGVycm9yQ2xhc3MgKS5yZW1vdmVDbGFzcyggdmFsaWRDbGFzcyApO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0JCggZWxlbWVudCApLmFkZENsYXNzKCBlcnJvckNsYXNzICkucmVtb3ZlQ2xhc3MoIHZhbGlkQ2xhc3MgKTtcblx0XHRcdH1cblx0XHR9LFxuXHRcdHVuaGlnaGxpZ2h0OiBmdW5jdGlvbiggZWxlbWVudCwgZXJyb3JDbGFzcywgdmFsaWRDbGFzcyApIHtcblx0XHRcdGlmICggZWxlbWVudC50eXBlID09PSBcInJhZGlvXCIgKSB7XG5cdFx0XHRcdHRoaXMuZmluZEJ5TmFtZSggZWxlbWVudC5uYW1lICkucmVtb3ZlQ2xhc3MoIGVycm9yQ2xhc3MgKS5hZGRDbGFzcyggdmFsaWRDbGFzcyApO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0JCggZWxlbWVudCApLnJlbW92ZUNsYXNzKCBlcnJvckNsYXNzICkuYWRkQ2xhc3MoIHZhbGlkQ2xhc3MgKTtcblx0XHRcdH1cblx0XHR9XG5cdH0sXG5cblx0Ly8gaHR0cHM6Ly9qcXVlcnl2YWxpZGF0aW9uLm9yZy9qUXVlcnkudmFsaWRhdG9yLnNldERlZmF1bHRzL1xuXHRzZXREZWZhdWx0czogZnVuY3Rpb24oIHNldHRpbmdzICkge1xuXHRcdCQuZXh0ZW5kKCAkLnZhbGlkYXRvci5kZWZhdWx0cywgc2V0dGluZ3MgKTtcblx0fSxcblxuXHRtZXNzYWdlczoge1xuXHRcdHJlcXVpcmVkOiBcIlRoaXMgZmllbGQgaXMgcmVxdWlyZWQuXCIsXG5cdFx0cmVtb3RlOiBcIlBsZWFzZSBmaXggdGhpcyBmaWVsZC5cIixcblx0XHRlbWFpbDogXCJQbGVhc2UgZW50ZXIgYSB2YWxpZCBlbWFpbCBhZGRyZXNzLlwiLFxuXHRcdHVybDogXCJQbGVhc2UgZW50ZXIgYSB2YWxpZCBVUkwuXCIsXG5cdFx0ZGF0ZTogXCJQbGVhc2UgZW50ZXIgYSB2YWxpZCBkYXRlLlwiLFxuXHRcdGRhdGVJU086IFwiUGxlYXNlIGVudGVyIGEgdmFsaWQgZGF0ZSAoSVNPKS5cIixcblx0XHRudW1iZXI6IFwiUGxlYXNlIGVudGVyIGEgdmFsaWQgbnVtYmVyLlwiLFxuXHRcdGRpZ2l0czogXCJQbGVhc2UgZW50ZXIgb25seSBkaWdpdHMuXCIsXG5cdFx0ZXF1YWxUbzogXCJQbGVhc2UgZW50ZXIgdGhlIHNhbWUgdmFsdWUgYWdhaW4uXCIsXG5cdFx0bWF4bGVuZ3RoOiAkLnZhbGlkYXRvci5mb3JtYXQoIFwiUGxlYXNlIGVudGVyIG5vIG1vcmUgdGhhbiB7MH0gY2hhcmFjdGVycy5cIiApLFxuXHRcdG1pbmxlbmd0aDogJC52YWxpZGF0b3IuZm9ybWF0KCBcIlBsZWFzZSBlbnRlciBhdCBsZWFzdCB7MH0gY2hhcmFjdGVycy5cIiApLFxuXHRcdHJhbmdlbGVuZ3RoOiAkLnZhbGlkYXRvci5mb3JtYXQoIFwiUGxlYXNlIGVudGVyIGEgdmFsdWUgYmV0d2VlbiB7MH0gYW5kIHsxfSBjaGFyYWN0ZXJzIGxvbmcuXCIgKSxcblx0XHRyYW5nZTogJC52YWxpZGF0b3IuZm9ybWF0KCBcIlBsZWFzZSBlbnRlciBhIHZhbHVlIGJldHdlZW4gezB9IGFuZCB7MX0uXCIgKSxcblx0XHRtYXg6ICQudmFsaWRhdG9yLmZvcm1hdCggXCJQbGVhc2UgZW50ZXIgYSB2YWx1ZSBsZXNzIHRoYW4gb3IgZXF1YWwgdG8gezB9LlwiICksXG5cdFx0bWluOiAkLnZhbGlkYXRvci5mb3JtYXQoIFwiUGxlYXNlIGVudGVyIGEgdmFsdWUgZ3JlYXRlciB0aGFuIG9yIGVxdWFsIHRvIHswfS5cIiApLFxuXHRcdHN0ZXA6ICQudmFsaWRhdG9yLmZvcm1hdCggXCJQbGVhc2UgZW50ZXIgYSBtdWx0aXBsZSBvZiB7MH0uXCIgKVxuXHR9LFxuXG5cdGF1dG9DcmVhdGVSYW5nZXM6IGZhbHNlLFxuXG5cdHByb3RvdHlwZToge1xuXG5cdFx0aW5pdDogZnVuY3Rpb24oKSB7XG5cdFx0XHR0aGlzLmxhYmVsQ29udGFpbmVyID0gJCggdGhpcy5zZXR0aW5ncy5lcnJvckxhYmVsQ29udGFpbmVyICk7XG5cdFx0XHR0aGlzLmVycm9yQ29udGV4dCA9IHRoaXMubGFiZWxDb250YWluZXIubGVuZ3RoICYmIHRoaXMubGFiZWxDb250YWluZXIgfHwgJCggdGhpcy5jdXJyZW50Rm9ybSApO1xuXHRcdFx0dGhpcy5jb250YWluZXJzID0gJCggdGhpcy5zZXR0aW5ncy5lcnJvckNvbnRhaW5lciApLmFkZCggdGhpcy5zZXR0aW5ncy5lcnJvckxhYmVsQ29udGFpbmVyICk7XG5cdFx0XHR0aGlzLnN1Ym1pdHRlZCA9IHt9O1xuXHRcdFx0dGhpcy52YWx1ZUNhY2hlID0ge307XG5cdFx0XHR0aGlzLnBlbmRpbmdSZXF1ZXN0ID0gMDtcblx0XHRcdHRoaXMucGVuZGluZyA9IHt9O1xuXHRcdFx0dGhpcy5pbnZhbGlkID0ge307XG5cdFx0XHR0aGlzLnJlc2V0KCk7XG5cblx0XHRcdHZhciBjdXJyZW50Rm9ybSA9IHRoaXMuY3VycmVudEZvcm0sXG5cdFx0XHRcdGdyb3VwcyA9ICggdGhpcy5ncm91cHMgPSB7fSApLFxuXHRcdFx0XHRydWxlcztcblx0XHRcdCQuZWFjaCggdGhpcy5zZXR0aW5ncy5ncm91cHMsIGZ1bmN0aW9uKCBrZXksIHZhbHVlICkge1xuXHRcdFx0XHRpZiAoIHR5cGVvZiB2YWx1ZSA9PT0gXCJzdHJpbmdcIiApIHtcblx0XHRcdFx0XHR2YWx1ZSA9IHZhbHVlLnNwbGl0KCAvXFxzLyApO1xuXHRcdFx0XHR9XG5cdFx0XHRcdCQuZWFjaCggdmFsdWUsIGZ1bmN0aW9uKCBpbmRleCwgbmFtZSApIHtcblx0XHRcdFx0XHRncm91cHNbIG5hbWUgXSA9IGtleTtcblx0XHRcdFx0fSApO1xuXHRcdFx0fSApO1xuXHRcdFx0cnVsZXMgPSB0aGlzLnNldHRpbmdzLnJ1bGVzO1xuXHRcdFx0JC5lYWNoKCBydWxlcywgZnVuY3Rpb24oIGtleSwgdmFsdWUgKSB7XG5cdFx0XHRcdHJ1bGVzWyBrZXkgXSA9ICQudmFsaWRhdG9yLm5vcm1hbGl6ZVJ1bGUoIHZhbHVlICk7XG5cdFx0XHR9ICk7XG5cblx0XHRcdGZ1bmN0aW9uIGRlbGVnYXRlKCBldmVudCApIHtcblx0XHRcdFx0dmFyIGlzQ29udGVudEVkaXRhYmxlID0gdHlwZW9mICQoIHRoaXMgKS5hdHRyKCBcImNvbnRlbnRlZGl0YWJsZVwiICkgIT09IFwidW5kZWZpbmVkXCIgJiYgJCggdGhpcyApLmF0dHIoIFwiY29udGVudGVkaXRhYmxlXCIgKSAhPT0gXCJmYWxzZVwiO1xuXG5cdFx0XHRcdC8vIFNldCBmb3JtIGV4cGFuZG8gb24gY29udGVudGVkaXRhYmxlXG5cdFx0XHRcdGlmICggIXRoaXMuZm9ybSAmJiBpc0NvbnRlbnRFZGl0YWJsZSApIHtcblx0XHRcdFx0XHR0aGlzLmZvcm0gPSAkKCB0aGlzICkuY2xvc2VzdCggXCJmb3JtXCIgKVsgMCBdO1xuXHRcdFx0XHRcdHRoaXMubmFtZSA9ICQoIHRoaXMgKS5hdHRyKCBcIm5hbWVcIiApO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gSWdub3JlIHRoZSBlbGVtZW50IGlmIGl0IGJlbG9uZ3MgdG8gYW5vdGhlciBmb3JtLiBUaGlzIHdpbGwgaGFwcGVuIG1haW5seVxuXHRcdFx0XHQvLyB3aGVuIHNldHRpbmcgdGhlIGBmb3JtYCBhdHRyaWJ1dGUgb2YgYW4gaW5wdXQgdG8gdGhlIGlkIG9mIGFub3RoZXIgZm9ybS5cblx0XHRcdFx0aWYgKCBjdXJyZW50Rm9ybSAhPT0gdGhpcy5mb3JtICkge1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHZhciB2YWxpZGF0b3IgPSAkLmRhdGEoIHRoaXMuZm9ybSwgXCJ2YWxpZGF0b3JcIiApLFxuXHRcdFx0XHRcdGV2ZW50VHlwZSA9IFwib25cIiArIGV2ZW50LnR5cGUucmVwbGFjZSggL152YWxpZGF0ZS8sIFwiXCIgKSxcblx0XHRcdFx0XHRzZXR0aW5ncyA9IHZhbGlkYXRvci5zZXR0aW5ncztcblx0XHRcdFx0aWYgKCBzZXR0aW5nc1sgZXZlbnRUeXBlIF0gJiYgISQoIHRoaXMgKS5pcyggc2V0dGluZ3MuaWdub3JlICkgKSB7XG5cdFx0XHRcdFx0c2V0dGluZ3NbIGV2ZW50VHlwZSBdLmNhbGwoIHZhbGlkYXRvciwgdGhpcywgZXZlbnQgKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHQkKCB0aGlzLmN1cnJlbnRGb3JtIClcblx0XHRcdFx0Lm9uKCBcImZvY3VzaW4udmFsaWRhdGUgZm9jdXNvdXQudmFsaWRhdGUga2V5dXAudmFsaWRhdGVcIixcblx0XHRcdFx0XHRcIjp0ZXh0LCBbdHlwZT0ncGFzc3dvcmQnXSwgW3R5cGU9J2ZpbGUnXSwgc2VsZWN0LCB0ZXh0YXJlYSwgW3R5cGU9J251bWJlciddLCBbdHlwZT0nc2VhcmNoJ10sIFwiICtcblx0XHRcdFx0XHRcIlt0eXBlPSd0ZWwnXSwgW3R5cGU9J3VybCddLCBbdHlwZT0nZW1haWwnXSwgW3R5cGU9J2RhdGV0aW1lJ10sIFt0eXBlPSdkYXRlJ10sIFt0eXBlPSdtb250aCddLCBcIiArXG5cdFx0XHRcdFx0XCJbdHlwZT0nd2VlayddLCBbdHlwZT0ndGltZSddLCBbdHlwZT0nZGF0ZXRpbWUtbG9jYWwnXSwgW3R5cGU9J3JhbmdlJ10sIFt0eXBlPSdjb2xvciddLCBcIiArXG5cdFx0XHRcdFx0XCJbdHlwZT0ncmFkaW8nXSwgW3R5cGU9J2NoZWNrYm94J10sIFtjb250ZW50ZWRpdGFibGVdLCBbdHlwZT0nYnV0dG9uJ11cIiwgZGVsZWdhdGUgKVxuXG5cdFx0XHRcdC8vIFN1cHBvcnQ6IENocm9tZSwgb2xkSUVcblx0XHRcdFx0Ly8gXCJzZWxlY3RcIiBpcyBwcm92aWRlZCBhcyBldmVudC50YXJnZXQgd2hlbiBjbGlja2luZyBhIG9wdGlvblxuXHRcdFx0XHQub24oIFwiY2xpY2sudmFsaWRhdGVcIiwgXCJzZWxlY3QsIG9wdGlvbiwgW3R5cGU9J3JhZGlvJ10sIFt0eXBlPSdjaGVja2JveCddXCIsIGRlbGVnYXRlICk7XG5cblx0XHRcdGlmICggdGhpcy5zZXR0aW5ncy5pbnZhbGlkSGFuZGxlciApIHtcblx0XHRcdFx0JCggdGhpcy5jdXJyZW50Rm9ybSApLm9uKCBcImludmFsaWQtZm9ybS52YWxpZGF0ZVwiLCB0aGlzLnNldHRpbmdzLmludmFsaWRIYW5kbGVyICk7XG5cdFx0XHR9XG5cdFx0fSxcblxuXHRcdC8vIGh0dHBzOi8vanF1ZXJ5dmFsaWRhdGlvbi5vcmcvVmFsaWRhdG9yLmZvcm0vXG5cdFx0Zm9ybTogZnVuY3Rpb24oKSB7XG5cdFx0XHR0aGlzLmNoZWNrRm9ybSgpO1xuXHRcdFx0JC5leHRlbmQoIHRoaXMuc3VibWl0dGVkLCB0aGlzLmVycm9yTWFwICk7XG5cdFx0XHR0aGlzLmludmFsaWQgPSAkLmV4dGVuZCgge30sIHRoaXMuZXJyb3JNYXAgKTtcblx0XHRcdGlmICggIXRoaXMudmFsaWQoKSApIHtcblx0XHRcdFx0JCggdGhpcy5jdXJyZW50Rm9ybSApLnRyaWdnZXJIYW5kbGVyKCBcImludmFsaWQtZm9ybVwiLCBbIHRoaXMgXSApO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5zaG93RXJyb3JzKCk7XG5cdFx0XHRyZXR1cm4gdGhpcy52YWxpZCgpO1xuXHRcdH0sXG5cblx0XHRjaGVja0Zvcm06IGZ1bmN0aW9uKCkge1xuXHRcdFx0dGhpcy5wcmVwYXJlRm9ybSgpO1xuXHRcdFx0Zm9yICggdmFyIGkgPSAwLCBlbGVtZW50cyA9ICggdGhpcy5jdXJyZW50RWxlbWVudHMgPSB0aGlzLmVsZW1lbnRzKCkgKTsgZWxlbWVudHNbIGkgXTsgaSsrICkge1xuXHRcdFx0XHR0aGlzLmNoZWNrKCBlbGVtZW50c1sgaSBdICk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gdGhpcy52YWxpZCgpO1xuXHRcdH0sXG5cblx0XHQvLyBodHRwczovL2pxdWVyeXZhbGlkYXRpb24ub3JnL1ZhbGlkYXRvci5lbGVtZW50L1xuXHRcdGVsZW1lbnQ6IGZ1bmN0aW9uKCBlbGVtZW50ICkge1xuXHRcdFx0dmFyIGNsZWFuRWxlbWVudCA9IHRoaXMuY2xlYW4oIGVsZW1lbnQgKSxcblx0XHRcdFx0Y2hlY2tFbGVtZW50ID0gdGhpcy52YWxpZGF0aW9uVGFyZ2V0Rm9yKCBjbGVhbkVsZW1lbnQgKSxcblx0XHRcdFx0diA9IHRoaXMsXG5cdFx0XHRcdHJlc3VsdCA9IHRydWUsXG5cdFx0XHRcdHJzLCBncm91cDtcblxuXHRcdFx0aWYgKCBjaGVja0VsZW1lbnQgPT09IHVuZGVmaW5lZCApIHtcblx0XHRcdFx0ZGVsZXRlIHRoaXMuaW52YWxpZFsgY2xlYW5FbGVtZW50Lm5hbWUgXTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRoaXMucHJlcGFyZUVsZW1lbnQoIGNoZWNrRWxlbWVudCApO1xuXHRcdFx0XHR0aGlzLmN1cnJlbnRFbGVtZW50cyA9ICQoIGNoZWNrRWxlbWVudCApO1xuXG5cdFx0XHRcdC8vIElmIHRoaXMgZWxlbWVudCBpcyBncm91cGVkLCB0aGVuIHZhbGlkYXRlIGFsbCBncm91cCBlbGVtZW50cyBhbHJlYWR5XG5cdFx0XHRcdC8vIGNvbnRhaW5pbmcgYSB2YWx1ZVxuXHRcdFx0XHRncm91cCA9IHRoaXMuZ3JvdXBzWyBjaGVja0VsZW1lbnQubmFtZSBdO1xuXHRcdFx0XHRpZiAoIGdyb3VwICkge1xuXHRcdFx0XHRcdCQuZWFjaCggdGhpcy5ncm91cHMsIGZ1bmN0aW9uKCBuYW1lLCB0ZXN0Z3JvdXAgKSB7XG5cdFx0XHRcdFx0XHRpZiAoIHRlc3Rncm91cCA9PT0gZ3JvdXAgJiYgbmFtZSAhPT0gY2hlY2tFbGVtZW50Lm5hbWUgKSB7XG5cdFx0XHRcdFx0XHRcdGNsZWFuRWxlbWVudCA9IHYudmFsaWRhdGlvblRhcmdldEZvciggdi5jbGVhbiggdi5maW5kQnlOYW1lKCBuYW1lICkgKSApO1xuXHRcdFx0XHRcdFx0XHRpZiAoIGNsZWFuRWxlbWVudCAmJiBjbGVhbkVsZW1lbnQubmFtZSBpbiB2LmludmFsaWQgKSB7XG5cdFx0XHRcdFx0XHRcdFx0di5jdXJyZW50RWxlbWVudHMucHVzaCggY2xlYW5FbGVtZW50ICk7XG5cdFx0XHRcdFx0XHRcdFx0cmVzdWx0ID0gdi5jaGVjayggY2xlYW5FbGVtZW50ICkgJiYgcmVzdWx0O1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSApO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0cnMgPSB0aGlzLmNoZWNrKCBjaGVja0VsZW1lbnQgKSAhPT0gZmFsc2U7XG5cdFx0XHRcdHJlc3VsdCA9IHJlc3VsdCAmJiBycztcblx0XHRcdFx0aWYgKCBycyApIHtcblx0XHRcdFx0XHR0aGlzLmludmFsaWRbIGNoZWNrRWxlbWVudC5uYW1lIF0gPSBmYWxzZTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR0aGlzLmludmFsaWRbIGNoZWNrRWxlbWVudC5uYW1lIF0gPSB0cnVlO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKCAhdGhpcy5udW1iZXJPZkludmFsaWRzKCkgKSB7XG5cblx0XHRcdFx0XHQvLyBIaWRlIGVycm9yIGNvbnRhaW5lcnMgb24gbGFzdCBlcnJvclxuXHRcdFx0XHRcdHRoaXMudG9IaWRlID0gdGhpcy50b0hpZGUuYWRkKCB0aGlzLmNvbnRhaW5lcnMgKTtcblx0XHRcdFx0fVxuXHRcdFx0XHR0aGlzLnNob3dFcnJvcnMoKTtcblxuXHRcdFx0XHQvLyBBZGQgYXJpYS1pbnZhbGlkIHN0YXR1cyBmb3Igc2NyZWVuIHJlYWRlcnNcblx0XHRcdFx0JCggZWxlbWVudCApLmF0dHIoIFwiYXJpYS1pbnZhbGlkXCIsICFycyApO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gcmVzdWx0O1xuXHRcdH0sXG5cblx0XHQvLyBodHRwczovL2pxdWVyeXZhbGlkYXRpb24ub3JnL1ZhbGlkYXRvci5zaG93RXJyb3JzL1xuXHRcdHNob3dFcnJvcnM6IGZ1bmN0aW9uKCBlcnJvcnMgKSB7XG5cdFx0XHRpZiAoIGVycm9ycyApIHtcblx0XHRcdFx0dmFyIHZhbGlkYXRvciA9IHRoaXM7XG5cblx0XHRcdFx0Ly8gQWRkIGl0ZW1zIHRvIGVycm9yIGxpc3QgYW5kIG1hcFxuXHRcdFx0XHQkLmV4dGVuZCggdGhpcy5lcnJvck1hcCwgZXJyb3JzICk7XG5cdFx0XHRcdHRoaXMuZXJyb3JMaXN0ID0gJC5tYXAoIHRoaXMuZXJyb3JNYXAsIGZ1bmN0aW9uKCBtZXNzYWdlLCBuYW1lICkge1xuXHRcdFx0XHRcdHJldHVybiB7XG5cdFx0XHRcdFx0XHRtZXNzYWdlOiBtZXNzYWdlLFxuXHRcdFx0XHRcdFx0ZWxlbWVudDogdmFsaWRhdG9yLmZpbmRCeU5hbWUoIG5hbWUgKVsgMCBdXG5cdFx0XHRcdFx0fTtcblx0XHRcdFx0fSApO1xuXG5cdFx0XHRcdC8vIFJlbW92ZSBpdGVtcyBmcm9tIHN1Y2Nlc3MgbGlzdFxuXHRcdFx0XHR0aGlzLnN1Y2Nlc3NMaXN0ID0gJC5ncmVwKCB0aGlzLnN1Y2Nlc3NMaXN0LCBmdW5jdGlvbiggZWxlbWVudCApIHtcblx0XHRcdFx0XHRyZXR1cm4gISggZWxlbWVudC5uYW1lIGluIGVycm9ycyApO1xuXHRcdFx0XHR9ICk7XG5cdFx0XHR9XG5cdFx0XHRpZiAoIHRoaXMuc2V0dGluZ3Muc2hvd0Vycm9ycyApIHtcblx0XHRcdFx0dGhpcy5zZXR0aW5ncy5zaG93RXJyb3JzLmNhbGwoIHRoaXMsIHRoaXMuZXJyb3JNYXAsIHRoaXMuZXJyb3JMaXN0ICk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aGlzLmRlZmF1bHRTaG93RXJyb3JzKCk7XG5cdFx0XHR9XG5cdFx0fSxcblxuXHRcdC8vIGh0dHBzOi8vanF1ZXJ5dmFsaWRhdGlvbi5vcmcvVmFsaWRhdG9yLnJlc2V0Rm9ybS9cblx0XHRyZXNldEZvcm06IGZ1bmN0aW9uKCkge1xuXHRcdFx0aWYgKCAkLmZuLnJlc2V0Rm9ybSApIHtcblx0XHRcdFx0JCggdGhpcy5jdXJyZW50Rm9ybSApLnJlc2V0Rm9ybSgpO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5pbnZhbGlkID0ge307XG5cdFx0XHR0aGlzLnN1Ym1pdHRlZCA9IHt9O1xuXHRcdFx0dGhpcy5wcmVwYXJlRm9ybSgpO1xuXHRcdFx0dGhpcy5oaWRlRXJyb3JzKCk7XG5cdFx0XHR2YXIgZWxlbWVudHMgPSB0aGlzLmVsZW1lbnRzKClcblx0XHRcdFx0LnJlbW92ZURhdGEoIFwicHJldmlvdXNWYWx1ZVwiIClcblx0XHRcdFx0LnJlbW92ZUF0dHIoIFwiYXJpYS1pbnZhbGlkXCIgKTtcblxuXHRcdFx0dGhpcy5yZXNldEVsZW1lbnRzKCBlbGVtZW50cyApO1xuXHRcdH0sXG5cblx0XHRyZXNldEVsZW1lbnRzOiBmdW5jdGlvbiggZWxlbWVudHMgKSB7XG5cdFx0XHR2YXIgaTtcblxuXHRcdFx0aWYgKCB0aGlzLnNldHRpbmdzLnVuaGlnaGxpZ2h0ICkge1xuXHRcdFx0XHRmb3IgKCBpID0gMDsgZWxlbWVudHNbIGkgXTsgaSsrICkge1xuXHRcdFx0XHRcdHRoaXMuc2V0dGluZ3MudW5oaWdobGlnaHQuY2FsbCggdGhpcywgZWxlbWVudHNbIGkgXSxcblx0XHRcdFx0XHRcdHRoaXMuc2V0dGluZ3MuZXJyb3JDbGFzcywgXCJcIiApO1xuXHRcdFx0XHRcdHRoaXMuZmluZEJ5TmFtZSggZWxlbWVudHNbIGkgXS5uYW1lICkucmVtb3ZlQ2xhc3MoIHRoaXMuc2V0dGluZ3MudmFsaWRDbGFzcyApO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRlbGVtZW50c1xuXHRcdFx0XHRcdC5yZW1vdmVDbGFzcyggdGhpcy5zZXR0aW5ncy5lcnJvckNsYXNzIClcblx0XHRcdFx0XHQucmVtb3ZlQ2xhc3MoIHRoaXMuc2V0dGluZ3MudmFsaWRDbGFzcyApO1xuXHRcdFx0fVxuXHRcdH0sXG5cblx0XHRudW1iZXJPZkludmFsaWRzOiBmdW5jdGlvbigpIHtcblx0XHRcdHJldHVybiB0aGlzLm9iamVjdExlbmd0aCggdGhpcy5pbnZhbGlkICk7XG5cdFx0fSxcblxuXHRcdG9iamVjdExlbmd0aDogZnVuY3Rpb24oIG9iaiApIHtcblx0XHRcdC8qIGpzaGludCB1bnVzZWQ6IGZhbHNlICovXG5cdFx0XHR2YXIgY291bnQgPSAwLFxuXHRcdFx0XHRpO1xuXHRcdFx0Zm9yICggaSBpbiBvYmogKSB7XG5cblx0XHRcdFx0Ly8gVGhpcyBjaGVjayBhbGxvd3MgY291bnRpbmcgZWxlbWVudHMgd2l0aCBlbXB0eSBlcnJvclxuXHRcdFx0XHQvLyBtZXNzYWdlIGFzIGludmFsaWQgZWxlbWVudHNcblx0XHRcdFx0aWYgKCBvYmpbIGkgXSAhPT0gdW5kZWZpbmVkICYmIG9ialsgaSBdICE9PSBudWxsICYmIG9ialsgaSBdICE9PSBmYWxzZSApIHtcblx0XHRcdFx0XHRjb3VudCsrO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gY291bnQ7XG5cdFx0fSxcblxuXHRcdGhpZGVFcnJvcnM6IGZ1bmN0aW9uKCkge1xuXHRcdFx0dGhpcy5oaWRlVGhlc2UoIHRoaXMudG9IaWRlICk7XG5cdFx0fSxcblxuXHRcdGhpZGVUaGVzZTogZnVuY3Rpb24oIGVycm9ycyApIHtcblx0XHRcdGVycm9ycy5ub3QoIHRoaXMuY29udGFpbmVycyApLnRleHQoIFwiXCIgKTtcblx0XHRcdHRoaXMuYWRkV3JhcHBlciggZXJyb3JzICkuaGlkZSgpO1xuXHRcdH0sXG5cblx0XHR2YWxpZDogZnVuY3Rpb24oKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5zaXplKCkgPT09IDA7XG5cdFx0fSxcblxuXHRcdHNpemU6IGZ1bmN0aW9uKCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuZXJyb3JMaXN0Lmxlbmd0aDtcblx0XHR9LFxuXG5cdFx0Zm9jdXNJbnZhbGlkOiBmdW5jdGlvbigpIHtcblx0XHRcdGlmICggdGhpcy5zZXR0aW5ncy5mb2N1c0ludmFsaWQgKSB7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0JCggdGhpcy5maW5kTGFzdEFjdGl2ZSgpIHx8IHRoaXMuZXJyb3JMaXN0Lmxlbmd0aCAmJiB0aGlzLmVycm9yTGlzdFsgMCBdLmVsZW1lbnQgfHwgW10gKVxuXHRcdFx0XHRcdC5maWx0ZXIoIFwiOnZpc2libGVcIiApXG5cdFx0XHRcdFx0LmZvY3VzKClcblxuXHRcdFx0XHRcdC8vIE1hbnVhbGx5IHRyaWdnZXIgZm9jdXNpbiBldmVudDsgd2l0aG91dCBpdCwgZm9jdXNpbiBoYW5kbGVyIGlzbid0IGNhbGxlZCwgZmluZExhc3RBY3RpdmUgd29uJ3QgaGF2ZSBhbnl0aGluZyB0byBmaW5kXG5cdFx0XHRcdFx0LnRyaWdnZXIoIFwiZm9jdXNpblwiICk7XG5cdFx0XHRcdH0gY2F0Y2ggKCBlICkge1xuXG5cdFx0XHRcdFx0Ly8gSWdub3JlIElFIHRocm93aW5nIGVycm9ycyB3aGVuIGZvY3VzaW5nIGhpZGRlbiBlbGVtZW50c1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSxcblxuXHRcdGZpbmRMYXN0QWN0aXZlOiBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBsYXN0QWN0aXZlID0gdGhpcy5sYXN0QWN0aXZlO1xuXHRcdFx0cmV0dXJuIGxhc3RBY3RpdmUgJiYgJC5ncmVwKCB0aGlzLmVycm9yTGlzdCwgZnVuY3Rpb24oIG4gKSB7XG5cdFx0XHRcdHJldHVybiBuLmVsZW1lbnQubmFtZSA9PT0gbGFzdEFjdGl2ZS5uYW1lO1xuXHRcdFx0fSApLmxlbmd0aCA9PT0gMSAmJiBsYXN0QWN0aXZlO1xuXHRcdH0sXG5cblx0XHRlbGVtZW50czogZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgdmFsaWRhdG9yID0gdGhpcyxcblx0XHRcdFx0cnVsZXNDYWNoZSA9IHt9O1xuXG5cdFx0XHQvLyBTZWxlY3QgYWxsIHZhbGlkIGlucHV0cyBpbnNpZGUgdGhlIGZvcm0gKG5vIHN1Ym1pdCBvciByZXNldCBidXR0b25zKVxuXHRcdFx0cmV0dXJuICQoIHRoaXMuY3VycmVudEZvcm0gKVxuXHRcdFx0LmZpbmQoIFwiaW5wdXQsIHNlbGVjdCwgdGV4dGFyZWEsIFtjb250ZW50ZWRpdGFibGVdXCIgKVxuXHRcdFx0Lm5vdCggXCI6c3VibWl0LCA6cmVzZXQsIDppbWFnZSwgOmRpc2FibGVkXCIgKVxuXHRcdFx0Lm5vdCggdGhpcy5zZXR0aW5ncy5pZ25vcmUgKVxuXHRcdFx0LmZpbHRlciggZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHZhciBuYW1lID0gdGhpcy5uYW1lIHx8ICQoIHRoaXMgKS5hdHRyKCBcIm5hbWVcIiApOyAvLyBGb3IgY29udGVudGVkaXRhYmxlXG5cdFx0XHRcdHZhciBpc0NvbnRlbnRFZGl0YWJsZSA9IHR5cGVvZiAkKCB0aGlzICkuYXR0ciggXCJjb250ZW50ZWRpdGFibGVcIiApICE9PSBcInVuZGVmaW5lZFwiICYmICQoIHRoaXMgKS5hdHRyKCBcImNvbnRlbnRlZGl0YWJsZVwiICkgIT09IFwiZmFsc2VcIjtcblxuXHRcdFx0XHRpZiAoICFuYW1lICYmIHZhbGlkYXRvci5zZXR0aW5ncy5kZWJ1ZyAmJiB3aW5kb3cuY29uc29sZSApIHtcblx0XHRcdFx0XHRjb25zb2xlLmVycm9yKCBcIiVvIGhhcyBubyBuYW1lIGFzc2lnbmVkXCIsIHRoaXMgKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIFNldCBmb3JtIGV4cGFuZG8gb24gY29udGVudGVkaXRhYmxlXG5cdFx0XHRcdGlmICggaXNDb250ZW50RWRpdGFibGUgKSB7XG5cdFx0XHRcdFx0dGhpcy5mb3JtID0gJCggdGhpcyApLmNsb3Nlc3QoIFwiZm9ybVwiIClbIDAgXTtcblx0XHRcdFx0XHR0aGlzLm5hbWUgPSBuYW1lO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gSWdub3JlIGVsZW1lbnRzIHRoYXQgYmVsb25nIHRvIG90aGVyL25lc3RlZCBmb3Jtc1xuXHRcdFx0XHRpZiAoIHRoaXMuZm9ybSAhPT0gdmFsaWRhdG9yLmN1cnJlbnRGb3JtICkge1xuXHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIFNlbGVjdCBvbmx5IHRoZSBmaXJzdCBlbGVtZW50IGZvciBlYWNoIG5hbWUsIGFuZCBvbmx5IHRob3NlIHdpdGggcnVsZXMgc3BlY2lmaWVkXG5cdFx0XHRcdGlmICggbmFtZSBpbiBydWxlc0NhY2hlIHx8ICF2YWxpZGF0b3Iub2JqZWN0TGVuZ3RoKCAkKCB0aGlzICkucnVsZXMoKSApICkge1xuXHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHJ1bGVzQ2FjaGVbIG5hbWUgXSA9IHRydWU7XG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fSApO1xuXHRcdH0sXG5cblx0XHRjbGVhbjogZnVuY3Rpb24oIHNlbGVjdG9yICkge1xuXHRcdFx0cmV0dXJuICQoIHNlbGVjdG9yIClbIDAgXTtcblx0XHR9LFxuXG5cdFx0ZXJyb3JzOiBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBlcnJvckNsYXNzID0gdGhpcy5zZXR0aW5ncy5lcnJvckNsYXNzLnNwbGl0KCBcIiBcIiApLmpvaW4oIFwiLlwiICk7XG5cdFx0XHRyZXR1cm4gJCggdGhpcy5zZXR0aW5ncy5lcnJvckVsZW1lbnQgKyBcIi5cIiArIGVycm9yQ2xhc3MsIHRoaXMuZXJyb3JDb250ZXh0ICk7XG5cdFx0fSxcblxuXHRcdHJlc2V0SW50ZXJuYWxzOiBmdW5jdGlvbigpIHtcblx0XHRcdHRoaXMuc3VjY2Vzc0xpc3QgPSBbXTtcblx0XHRcdHRoaXMuZXJyb3JMaXN0ID0gW107XG5cdFx0XHR0aGlzLmVycm9yTWFwID0ge307XG5cdFx0XHR0aGlzLnRvU2hvdyA9ICQoIFtdICk7XG5cdFx0XHR0aGlzLnRvSGlkZSA9ICQoIFtdICk7XG5cdFx0fSxcblxuXHRcdHJlc2V0OiBmdW5jdGlvbigpIHtcblx0XHRcdHRoaXMucmVzZXRJbnRlcm5hbHMoKTtcblx0XHRcdHRoaXMuY3VycmVudEVsZW1lbnRzID0gJCggW10gKTtcblx0XHR9LFxuXG5cdFx0cHJlcGFyZUZvcm06IGZ1bmN0aW9uKCkge1xuXHRcdFx0dGhpcy5yZXNldCgpO1xuXHRcdFx0dGhpcy50b0hpZGUgPSB0aGlzLmVycm9ycygpLmFkZCggdGhpcy5jb250YWluZXJzICk7XG5cdFx0fSxcblxuXHRcdHByZXBhcmVFbGVtZW50OiBmdW5jdGlvbiggZWxlbWVudCApIHtcblx0XHRcdHRoaXMucmVzZXQoKTtcblx0XHRcdHRoaXMudG9IaWRlID0gdGhpcy5lcnJvcnNGb3IoIGVsZW1lbnQgKTtcblx0XHR9LFxuXG5cdFx0ZWxlbWVudFZhbHVlOiBmdW5jdGlvbiggZWxlbWVudCApIHtcblx0XHRcdHZhciAkZWxlbWVudCA9ICQoIGVsZW1lbnQgKSxcblx0XHRcdFx0dHlwZSA9IGVsZW1lbnQudHlwZSxcblx0XHRcdFx0aXNDb250ZW50RWRpdGFibGUgPSB0eXBlb2YgJGVsZW1lbnQuYXR0ciggXCJjb250ZW50ZWRpdGFibGVcIiApICE9PSBcInVuZGVmaW5lZFwiICYmICRlbGVtZW50LmF0dHIoIFwiY29udGVudGVkaXRhYmxlXCIgKSAhPT0gXCJmYWxzZVwiLFxuXHRcdFx0XHR2YWwsIGlkeDtcblxuXHRcdFx0aWYgKCB0eXBlID09PSBcInJhZGlvXCIgfHwgdHlwZSA9PT0gXCJjaGVja2JveFwiICkge1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5maW5kQnlOYW1lKCBlbGVtZW50Lm5hbWUgKS5maWx0ZXIoIFwiOmNoZWNrZWRcIiApLnZhbCgpO1xuXHRcdFx0fSBlbHNlIGlmICggdHlwZSA9PT0gXCJudW1iZXJcIiAmJiB0eXBlb2YgZWxlbWVudC52YWxpZGl0eSAhPT0gXCJ1bmRlZmluZWRcIiApIHtcblx0XHRcdFx0cmV0dXJuIGVsZW1lbnQudmFsaWRpdHkuYmFkSW5wdXQgPyBcIk5hTlwiIDogJGVsZW1lbnQudmFsKCk7XG5cdFx0XHR9XG5cblx0XHRcdGlmICggaXNDb250ZW50RWRpdGFibGUgKSB7XG5cdFx0XHRcdHZhbCA9ICRlbGVtZW50LnRleHQoKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHZhbCA9ICRlbGVtZW50LnZhbCgpO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoIHR5cGUgPT09IFwiZmlsZVwiICkge1xuXG5cdFx0XHRcdC8vIE1vZGVybiBicm93c2VyIChjaHJvbWUgJiBzYWZhcmkpXG5cdFx0XHRcdGlmICggdmFsLnN1YnN0ciggMCwgMTIgKSA9PT0gXCJDOlxcXFxmYWtlcGF0aFxcXFxcIiApIHtcblx0XHRcdFx0XHRyZXR1cm4gdmFsLnN1YnN0ciggMTIgKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIExlZ2FjeSBicm93c2Vyc1xuXHRcdFx0XHQvLyBVbml4LWJhc2VkIHBhdGhcblx0XHRcdFx0aWR4ID0gdmFsLmxhc3RJbmRleE9mKCBcIi9cIiApO1xuXHRcdFx0XHRpZiAoIGlkeCA+PSAwICkge1xuXHRcdFx0XHRcdHJldHVybiB2YWwuc3Vic3RyKCBpZHggKyAxICk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBXaW5kb3dzLWJhc2VkIHBhdGhcblx0XHRcdFx0aWR4ID0gdmFsLmxhc3RJbmRleE9mKCBcIlxcXFxcIiApO1xuXHRcdFx0XHRpZiAoIGlkeCA+PSAwICkge1xuXHRcdFx0XHRcdHJldHVybiB2YWwuc3Vic3RyKCBpZHggKyAxICk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBKdXN0IHRoZSBmaWxlIG5hbWVcblx0XHRcdFx0cmV0dXJuIHZhbDtcblx0XHRcdH1cblxuXHRcdFx0aWYgKCB0eXBlb2YgdmFsID09PSBcInN0cmluZ1wiICkge1xuXHRcdFx0XHRyZXR1cm4gdmFsLnJlcGxhY2UoIC9cXHIvZywgXCJcIiApO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHZhbDtcblx0XHR9LFxuXG5cdFx0Y2hlY2s6IGZ1bmN0aW9uKCBlbGVtZW50ICkge1xuXHRcdFx0ZWxlbWVudCA9IHRoaXMudmFsaWRhdGlvblRhcmdldEZvciggdGhpcy5jbGVhbiggZWxlbWVudCApICk7XG5cblx0XHRcdHZhciBydWxlcyA9ICQoIGVsZW1lbnQgKS5ydWxlcygpLFxuXHRcdFx0XHRydWxlc0NvdW50ID0gJC5tYXAoIHJ1bGVzLCBmdW5jdGlvbiggbiwgaSApIHtcblx0XHRcdFx0XHRyZXR1cm4gaTtcblx0XHRcdFx0fSApLmxlbmd0aCxcblx0XHRcdFx0ZGVwZW5kZW5jeU1pc21hdGNoID0gZmFsc2UsXG5cdFx0XHRcdHZhbCA9IHRoaXMuZWxlbWVudFZhbHVlKCBlbGVtZW50ICksXG5cdFx0XHRcdHJlc3VsdCwgbWV0aG9kLCBydWxlLCBub3JtYWxpemVyO1xuXG5cdFx0XHQvLyBQcmlvcml0aXplIHRoZSBsb2NhbCBub3JtYWxpemVyIGRlZmluZWQgZm9yIHRoaXMgZWxlbWVudCBvdmVyIHRoZSBnbG9iYWwgb25lXG5cdFx0XHQvLyBpZiB0aGUgZm9ybWVyIGV4aXN0cywgb3RoZXJ3aXNlIHVzZXIgdGhlIGdsb2JhbCBvbmUgaW4gY2FzZSBpdCBleGlzdHMuXG5cdFx0XHRpZiAoIHR5cGVvZiBydWxlcy5ub3JtYWxpemVyID09PSBcImZ1bmN0aW9uXCIgKSB7XG5cdFx0XHRcdG5vcm1hbGl6ZXIgPSBydWxlcy5ub3JtYWxpemVyO1xuXHRcdFx0fSBlbHNlIGlmIChcdHR5cGVvZiB0aGlzLnNldHRpbmdzLm5vcm1hbGl6ZXIgPT09IFwiZnVuY3Rpb25cIiApIHtcblx0XHRcdFx0bm9ybWFsaXplciA9IHRoaXMuc2V0dGluZ3Mubm9ybWFsaXplcjtcblx0XHRcdH1cblxuXHRcdFx0Ly8gSWYgbm9ybWFsaXplciBpcyBkZWZpbmVkLCB0aGVuIGNhbGwgaXQgdG8gcmV0cmVpdmUgdGhlIGNoYW5nZWQgdmFsdWUgaW5zdGVhZFxuXHRcdFx0Ly8gb2YgdXNpbmcgdGhlIHJlYWwgb25lLlxuXHRcdFx0Ly8gTm90ZSB0aGF0IGB0aGlzYCBpbiB0aGUgbm9ybWFsaXplciBpcyBgZWxlbWVudGAuXG5cdFx0XHRpZiAoIG5vcm1hbGl6ZXIgKSB7XG5cdFx0XHRcdHZhbCA9IG5vcm1hbGl6ZXIuY2FsbCggZWxlbWVudCwgdmFsICk7XG5cblx0XHRcdFx0Ly8gRGVsZXRlIHRoZSBub3JtYWxpemVyIGZyb20gcnVsZXMgdG8gYXZvaWQgdHJlYXRpbmcgaXQgYXMgYSBwcmUtZGVmaW5lZCBtZXRob2QuXG5cdFx0XHRcdGRlbGV0ZSBydWxlcy5ub3JtYWxpemVyO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3IgKCBtZXRob2QgaW4gcnVsZXMgKSB7XG5cdFx0XHRcdHJ1bGUgPSB7IG1ldGhvZDogbWV0aG9kLCBwYXJhbWV0ZXJzOiBydWxlc1sgbWV0aG9kIF0gfTtcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRyZXN1bHQgPSAkLnZhbGlkYXRvci5tZXRob2RzWyBtZXRob2QgXS5jYWxsKCB0aGlzLCB2YWwsIGVsZW1lbnQsIHJ1bGUucGFyYW1ldGVycyApO1xuXG5cdFx0XHRcdFx0Ly8gSWYgYSBtZXRob2QgaW5kaWNhdGVzIHRoYXQgdGhlIGZpZWxkIGlzIG9wdGlvbmFsIGFuZCB0aGVyZWZvcmUgdmFsaWQsXG5cdFx0XHRcdFx0Ly8gZG9uJ3QgbWFyayBpdCBhcyB2YWxpZCB3aGVuIHRoZXJlIGFyZSBubyBvdGhlciBydWxlc1xuXHRcdFx0XHRcdGlmICggcmVzdWx0ID09PSBcImRlcGVuZGVuY3ktbWlzbWF0Y2hcIiAmJiBydWxlc0NvdW50ID09PSAxICkge1xuXHRcdFx0XHRcdFx0ZGVwZW5kZW5jeU1pc21hdGNoID0gdHJ1ZTtcblx0XHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRkZXBlbmRlbmN5TWlzbWF0Y2ggPSBmYWxzZTtcblxuXHRcdFx0XHRcdGlmICggcmVzdWx0ID09PSBcInBlbmRpbmdcIiApIHtcblx0XHRcdFx0XHRcdHRoaXMudG9IaWRlID0gdGhpcy50b0hpZGUubm90KCB0aGlzLmVycm9yc0ZvciggZWxlbWVudCApICk7XG5cdFx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0aWYgKCAhcmVzdWx0ICkge1xuXHRcdFx0XHRcdFx0dGhpcy5mb3JtYXRBbmRBZGQoIGVsZW1lbnQsIHJ1bGUgKTtcblx0XHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0gY2F0Y2ggKCBlICkge1xuXHRcdFx0XHRcdGlmICggdGhpcy5zZXR0aW5ncy5kZWJ1ZyAmJiB3aW5kb3cuY29uc29sZSApIHtcblx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKCBcIkV4Y2VwdGlvbiBvY2N1cnJlZCB3aGVuIGNoZWNraW5nIGVsZW1lbnQgXCIgKyBlbGVtZW50LmlkICsgXCIsIGNoZWNrIHRoZSAnXCIgKyBydWxlLm1ldGhvZCArIFwiJyBtZXRob2QuXCIsIGUgKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYgKCBlIGluc3RhbmNlb2YgVHlwZUVycm9yICkge1xuXHRcdFx0XHRcdFx0ZS5tZXNzYWdlICs9IFwiLiAgRXhjZXB0aW9uIG9jY3VycmVkIHdoZW4gY2hlY2tpbmcgZWxlbWVudCBcIiArIGVsZW1lbnQuaWQgKyBcIiwgY2hlY2sgdGhlICdcIiArIHJ1bGUubWV0aG9kICsgXCInIG1ldGhvZC5cIjtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHR0aHJvdyBlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRpZiAoIGRlcGVuZGVuY3lNaXNtYXRjaCApIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0aWYgKCB0aGlzLm9iamVjdExlbmd0aCggcnVsZXMgKSApIHtcblx0XHRcdFx0dGhpcy5zdWNjZXNzTGlzdC5wdXNoKCBlbGVtZW50ICk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9LFxuXG5cdFx0Ly8gUmV0dXJuIHRoZSBjdXN0b20gbWVzc2FnZSBmb3IgdGhlIGdpdmVuIGVsZW1lbnQgYW5kIHZhbGlkYXRpb24gbWV0aG9kXG5cdFx0Ly8gc3BlY2lmaWVkIGluIHRoZSBlbGVtZW50J3MgSFRNTDUgZGF0YSBhdHRyaWJ1dGVcblx0XHQvLyByZXR1cm4gdGhlIGdlbmVyaWMgbWVzc2FnZSBpZiBwcmVzZW50IGFuZCBubyBtZXRob2Qgc3BlY2lmaWMgbWVzc2FnZSBpcyBwcmVzZW50XG5cdFx0Y3VzdG9tRGF0YU1lc3NhZ2U6IGZ1bmN0aW9uKCBlbGVtZW50LCBtZXRob2QgKSB7XG5cdFx0XHRyZXR1cm4gJCggZWxlbWVudCApLmRhdGEoIFwibXNnXCIgKyBtZXRob2QuY2hhckF0KCAwICkudG9VcHBlckNhc2UoKSArXG5cdFx0XHRcdG1ldGhvZC5zdWJzdHJpbmcoIDEgKS50b0xvd2VyQ2FzZSgpICkgfHwgJCggZWxlbWVudCApLmRhdGEoIFwibXNnXCIgKTtcblx0XHR9LFxuXG5cdFx0Ly8gUmV0dXJuIHRoZSBjdXN0b20gbWVzc2FnZSBmb3IgdGhlIGdpdmVuIGVsZW1lbnQgbmFtZSBhbmQgdmFsaWRhdGlvbiBtZXRob2Rcblx0XHRjdXN0b21NZXNzYWdlOiBmdW5jdGlvbiggbmFtZSwgbWV0aG9kICkge1xuXHRcdFx0dmFyIG0gPSB0aGlzLnNldHRpbmdzLm1lc3NhZ2VzWyBuYW1lIF07XG5cdFx0XHRyZXR1cm4gbSAmJiAoIG0uY29uc3RydWN0b3IgPT09IFN0cmluZyA/IG0gOiBtWyBtZXRob2QgXSApO1xuXHRcdH0sXG5cblx0XHQvLyBSZXR1cm4gdGhlIGZpcnN0IGRlZmluZWQgYXJndW1lbnQsIGFsbG93aW5nIGVtcHR5IHN0cmluZ3Ncblx0XHRmaW5kRGVmaW5lZDogZnVuY3Rpb24oKSB7XG5cdFx0XHRmb3IgKCB2YXIgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKysgKSB7XG5cdFx0XHRcdGlmICggYXJndW1lbnRzWyBpIF0gIT09IHVuZGVmaW5lZCApIHtcblx0XHRcdFx0XHRyZXR1cm4gYXJndW1lbnRzWyBpIF07XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHJldHVybiB1bmRlZmluZWQ7XG5cdFx0fSxcblxuXHRcdC8vIFRoZSBzZWNvbmQgcGFyYW1ldGVyICdydWxlJyB1c2VkIHRvIGJlIGEgc3RyaW5nLCBhbmQgZXh0ZW5kZWQgdG8gYW4gb2JqZWN0IGxpdGVyYWxcblx0XHQvLyBvZiB0aGUgZm9sbG93aW5nIGZvcm06XG5cdFx0Ly8gcnVsZSA9IHtcblx0XHQvLyAgICAgbWV0aG9kOiBcIm1ldGhvZCBuYW1lXCIsXG5cdFx0Ly8gICAgIHBhcmFtZXRlcnM6IFwidGhlIGdpdmVuIG1ldGhvZCBwYXJhbWV0ZXJzXCJcblx0XHQvLyB9XG5cdFx0Ly9cblx0XHQvLyBUaGUgb2xkIGJlaGF2aW9yIHN0aWxsIHN1cHBvcnRlZCwga2VwdCB0byBtYWludGFpbiBiYWNrd2FyZCBjb21wYXRpYmlsaXR5IHdpdGhcblx0XHQvLyBvbGQgY29kZSwgYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiB0aGUgbmV4dCBtYWpvciByZWxlYXNlLlxuXHRcdGRlZmF1bHRNZXNzYWdlOiBmdW5jdGlvbiggZWxlbWVudCwgcnVsZSApIHtcblx0XHRcdGlmICggdHlwZW9mIHJ1bGUgPT09IFwic3RyaW5nXCIgKSB7XG5cdFx0XHRcdHJ1bGUgPSB7IG1ldGhvZDogcnVsZSB9O1xuXHRcdFx0fVxuXG5cdFx0XHR2YXIgbWVzc2FnZSA9IHRoaXMuZmluZERlZmluZWQoXG5cdFx0XHRcdFx0dGhpcy5jdXN0b21NZXNzYWdlKCBlbGVtZW50Lm5hbWUsIHJ1bGUubWV0aG9kICksXG5cdFx0XHRcdFx0dGhpcy5jdXN0b21EYXRhTWVzc2FnZSggZWxlbWVudCwgcnVsZS5tZXRob2QgKSxcblxuXHRcdFx0XHRcdC8vICd0aXRsZScgaXMgbmV2ZXIgdW5kZWZpbmVkLCBzbyBoYW5kbGUgZW1wdHkgc3RyaW5nIGFzIHVuZGVmaW5lZFxuXHRcdFx0XHRcdCF0aGlzLnNldHRpbmdzLmlnbm9yZVRpdGxlICYmIGVsZW1lbnQudGl0bGUgfHwgdW5kZWZpbmVkLFxuXHRcdFx0XHRcdCQudmFsaWRhdG9yLm1lc3NhZ2VzWyBydWxlLm1ldGhvZCBdLFxuXHRcdFx0XHRcdFwiPHN0cm9uZz5XYXJuaW5nOiBObyBtZXNzYWdlIGRlZmluZWQgZm9yIFwiICsgZWxlbWVudC5uYW1lICsgXCI8L3N0cm9uZz5cIlxuXHRcdFx0XHQpLFxuXHRcdFx0XHR0aGVyZWdleCA9IC9cXCQ/XFx7KFxcZCspXFx9L2c7XG5cdFx0XHRpZiAoIHR5cGVvZiBtZXNzYWdlID09PSBcImZ1bmN0aW9uXCIgKSB7XG5cdFx0XHRcdG1lc3NhZ2UgPSBtZXNzYWdlLmNhbGwoIHRoaXMsIHJ1bGUucGFyYW1ldGVycywgZWxlbWVudCApO1xuXHRcdFx0fSBlbHNlIGlmICggdGhlcmVnZXgudGVzdCggbWVzc2FnZSApICkge1xuXHRcdFx0XHRtZXNzYWdlID0gJC52YWxpZGF0b3IuZm9ybWF0KCBtZXNzYWdlLnJlcGxhY2UoIHRoZXJlZ2V4LCBcInskMX1cIiApLCBydWxlLnBhcmFtZXRlcnMgKTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIG1lc3NhZ2U7XG5cdFx0fSxcblxuXHRcdGZvcm1hdEFuZEFkZDogZnVuY3Rpb24oIGVsZW1lbnQsIHJ1bGUgKSB7XG5cdFx0XHR2YXIgbWVzc2FnZSA9IHRoaXMuZGVmYXVsdE1lc3NhZ2UoIGVsZW1lbnQsIHJ1bGUgKTtcblxuXHRcdFx0dGhpcy5lcnJvckxpc3QucHVzaCgge1xuXHRcdFx0XHRtZXNzYWdlOiBtZXNzYWdlLFxuXHRcdFx0XHRlbGVtZW50OiBlbGVtZW50LFxuXHRcdFx0XHRtZXRob2Q6IHJ1bGUubWV0aG9kXG5cdFx0XHR9ICk7XG5cblx0XHRcdHRoaXMuZXJyb3JNYXBbIGVsZW1lbnQubmFtZSBdID0gbWVzc2FnZTtcblx0XHRcdHRoaXMuc3VibWl0dGVkWyBlbGVtZW50Lm5hbWUgXSA9IG1lc3NhZ2U7XG5cdFx0fSxcblxuXHRcdGFkZFdyYXBwZXI6IGZ1bmN0aW9uKCB0b1RvZ2dsZSApIHtcblx0XHRcdGlmICggdGhpcy5zZXR0aW5ncy53cmFwcGVyICkge1xuXHRcdFx0XHR0b1RvZ2dsZSA9IHRvVG9nZ2xlLmFkZCggdG9Ub2dnbGUucGFyZW50KCB0aGlzLnNldHRpbmdzLndyYXBwZXIgKSApO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHRvVG9nZ2xlO1xuXHRcdH0sXG5cblx0XHRkZWZhdWx0U2hvd0Vycm9yczogZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgaSwgZWxlbWVudHMsIGVycm9yO1xuXHRcdFx0Zm9yICggaSA9IDA7IHRoaXMuZXJyb3JMaXN0WyBpIF07IGkrKyApIHtcblx0XHRcdFx0ZXJyb3IgPSB0aGlzLmVycm9yTGlzdFsgaSBdO1xuXHRcdFx0XHRpZiAoIHRoaXMuc2V0dGluZ3MuaGlnaGxpZ2h0ICkge1xuXHRcdFx0XHRcdHRoaXMuc2V0dGluZ3MuaGlnaGxpZ2h0LmNhbGwoIHRoaXMsIGVycm9yLmVsZW1lbnQsIHRoaXMuc2V0dGluZ3MuZXJyb3JDbGFzcywgdGhpcy5zZXR0aW5ncy52YWxpZENsYXNzICk7XG5cdFx0XHRcdH1cblx0XHRcdFx0dGhpcy5zaG93TGFiZWwoIGVycm9yLmVsZW1lbnQsIGVycm9yLm1lc3NhZ2UgKTtcblx0XHRcdH1cblx0XHRcdGlmICggdGhpcy5lcnJvckxpc3QubGVuZ3RoICkge1xuXHRcdFx0XHR0aGlzLnRvU2hvdyA9IHRoaXMudG9TaG93LmFkZCggdGhpcy5jb250YWluZXJzICk7XG5cdFx0XHR9XG5cdFx0XHRpZiAoIHRoaXMuc2V0dGluZ3Muc3VjY2VzcyApIHtcblx0XHRcdFx0Zm9yICggaSA9IDA7IHRoaXMuc3VjY2Vzc0xpc3RbIGkgXTsgaSsrICkge1xuXHRcdFx0XHRcdHRoaXMuc2hvd0xhYmVsKCB0aGlzLnN1Y2Nlc3NMaXN0WyBpIF0gKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0aWYgKCB0aGlzLnNldHRpbmdzLnVuaGlnaGxpZ2h0ICkge1xuXHRcdFx0XHRmb3IgKCBpID0gMCwgZWxlbWVudHMgPSB0aGlzLnZhbGlkRWxlbWVudHMoKTsgZWxlbWVudHNbIGkgXTsgaSsrICkge1xuXHRcdFx0XHRcdHRoaXMuc2V0dGluZ3MudW5oaWdobGlnaHQuY2FsbCggdGhpcywgZWxlbWVudHNbIGkgXSwgdGhpcy5zZXR0aW5ncy5lcnJvckNsYXNzLCB0aGlzLnNldHRpbmdzLnZhbGlkQ2xhc3MgKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0dGhpcy50b0hpZGUgPSB0aGlzLnRvSGlkZS5ub3QoIHRoaXMudG9TaG93ICk7XG5cdFx0XHR0aGlzLmhpZGVFcnJvcnMoKTtcblx0XHRcdHRoaXMuYWRkV3JhcHBlciggdGhpcy50b1Nob3cgKS5zaG93KCk7XG5cdFx0fSxcblxuXHRcdHZhbGlkRWxlbWVudHM6IGZ1bmN0aW9uKCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuY3VycmVudEVsZW1lbnRzLm5vdCggdGhpcy5pbnZhbGlkRWxlbWVudHMoKSApO1xuXHRcdH0sXG5cblx0XHRpbnZhbGlkRWxlbWVudHM6IGZ1bmN0aW9uKCkge1xuXHRcdFx0cmV0dXJuICQoIHRoaXMuZXJyb3JMaXN0ICkubWFwKCBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuIHRoaXMuZWxlbWVudDtcblx0XHRcdH0gKTtcblx0XHR9LFxuXG5cdFx0c2hvd0xhYmVsOiBmdW5jdGlvbiggZWxlbWVudCwgbWVzc2FnZSApIHtcblx0XHRcdHZhciBwbGFjZSwgZ3JvdXAsIGVycm9ySUQsIHYsXG5cdFx0XHRcdGVycm9yID0gdGhpcy5lcnJvcnNGb3IoIGVsZW1lbnQgKSxcblx0XHRcdFx0ZWxlbWVudElEID0gdGhpcy5pZE9yTmFtZSggZWxlbWVudCApLFxuXHRcdFx0XHRkZXNjcmliZWRCeSA9ICQoIGVsZW1lbnQgKS5hdHRyKCBcImFyaWEtZGVzY3JpYmVkYnlcIiApO1xuXG5cdFx0XHRpZiAoIGVycm9yLmxlbmd0aCApIHtcblxuXHRcdFx0XHQvLyBSZWZyZXNoIGVycm9yL3N1Y2Nlc3MgY2xhc3Ncblx0XHRcdFx0ZXJyb3IucmVtb3ZlQ2xhc3MoIHRoaXMuc2V0dGluZ3MudmFsaWRDbGFzcyApLmFkZENsYXNzKCB0aGlzLnNldHRpbmdzLmVycm9yQ2xhc3MgKTtcblxuXHRcdFx0XHQvLyBSZXBsYWNlIG1lc3NhZ2Ugb24gZXhpc3RpbmcgbGFiZWxcblx0XHRcdFx0ZXJyb3IuaHRtbCggbWVzc2FnZSApO1xuXHRcdFx0fSBlbHNlIHtcblxuXHRcdFx0XHQvLyBDcmVhdGUgZXJyb3IgZWxlbWVudFxuXHRcdFx0XHRlcnJvciA9ICQoIFwiPFwiICsgdGhpcy5zZXR0aW5ncy5lcnJvckVsZW1lbnQgKyBcIj5cIiApXG5cdFx0XHRcdFx0LmF0dHIoIFwiaWRcIiwgZWxlbWVudElEICsgXCItZXJyb3JcIiApXG5cdFx0XHRcdFx0LmFkZENsYXNzKCB0aGlzLnNldHRpbmdzLmVycm9yQ2xhc3MgKVxuXHRcdFx0XHRcdC5odG1sKCBtZXNzYWdlIHx8IFwiXCIgKTtcblxuXHRcdFx0XHQvLyBNYWludGFpbiByZWZlcmVuY2UgdG8gdGhlIGVsZW1lbnQgdG8gYmUgcGxhY2VkIGludG8gdGhlIERPTVxuXHRcdFx0XHRwbGFjZSA9IGVycm9yO1xuXHRcdFx0XHRpZiAoIHRoaXMuc2V0dGluZ3Mud3JhcHBlciApIHtcblxuXHRcdFx0XHRcdC8vIE1ha2Ugc3VyZSB0aGUgZWxlbWVudCBpcyB2aXNpYmxlLCBldmVuIGluIElFXG5cdFx0XHRcdFx0Ly8gYWN0dWFsbHkgc2hvd2luZyB0aGUgd3JhcHBlZCBlbGVtZW50IGlzIGhhbmRsZWQgZWxzZXdoZXJlXG5cdFx0XHRcdFx0cGxhY2UgPSBlcnJvci5oaWRlKCkuc2hvdygpLndyYXAoIFwiPFwiICsgdGhpcy5zZXR0aW5ncy53cmFwcGVyICsgXCIvPlwiICkucGFyZW50KCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKCB0aGlzLmxhYmVsQ29udGFpbmVyLmxlbmd0aCApIHtcblx0XHRcdFx0XHR0aGlzLmxhYmVsQ29udGFpbmVyLmFwcGVuZCggcGxhY2UgKTtcblx0XHRcdFx0fSBlbHNlIGlmICggdGhpcy5zZXR0aW5ncy5lcnJvclBsYWNlbWVudCApIHtcblx0XHRcdFx0XHR0aGlzLnNldHRpbmdzLmVycm9yUGxhY2VtZW50LmNhbGwoIHRoaXMsIHBsYWNlLCAkKCBlbGVtZW50ICkgKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRwbGFjZS5pbnNlcnRBZnRlciggZWxlbWVudCApO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gTGluayBlcnJvciBiYWNrIHRvIHRoZSBlbGVtZW50XG5cdFx0XHRcdGlmICggZXJyb3IuaXMoIFwibGFiZWxcIiApICkge1xuXG5cdFx0XHRcdFx0Ly8gSWYgdGhlIGVycm9yIGlzIGEgbGFiZWwsIHRoZW4gYXNzb2NpYXRlIHVzaW5nICdmb3InXG5cdFx0XHRcdFx0ZXJyb3IuYXR0ciggXCJmb3JcIiwgZWxlbWVudElEICk7XG5cblx0XHRcdFx0XHQvLyBJZiB0aGUgZWxlbWVudCBpcyBub3QgYSBjaGlsZCBvZiBhbiBhc3NvY2lhdGVkIGxhYmVsLCB0aGVuIGl0J3MgbmVjZXNzYXJ5XG5cdFx0XHRcdFx0Ly8gdG8gZXhwbGljaXRseSBhcHBseSBhcmlhLWRlc2NyaWJlZGJ5XG5cdFx0XHRcdH0gZWxzZSBpZiAoIGVycm9yLnBhcmVudHMoIFwibGFiZWxbZm9yPSdcIiArIHRoaXMuZXNjYXBlQ3NzTWV0YSggZWxlbWVudElEICkgKyBcIiddXCIgKS5sZW5ndGggPT09IDAgKSB7XG5cdFx0XHRcdFx0ZXJyb3JJRCA9IGVycm9yLmF0dHIoIFwiaWRcIiApO1xuXG5cdFx0XHRcdFx0Ly8gUmVzcGVjdCBleGlzdGluZyBub24tZXJyb3IgYXJpYS1kZXNjcmliZWRieVxuXHRcdFx0XHRcdGlmICggIWRlc2NyaWJlZEJ5ICkge1xuXHRcdFx0XHRcdFx0ZGVzY3JpYmVkQnkgPSBlcnJvcklEO1xuXHRcdFx0XHRcdH0gZWxzZSBpZiAoICFkZXNjcmliZWRCeS5tYXRjaCggbmV3IFJlZ0V4cCggXCJcXFxcYlwiICsgdGhpcy5lc2NhcGVDc3NNZXRhKCBlcnJvcklEICkgKyBcIlxcXFxiXCIgKSApICkge1xuXG5cdFx0XHRcdFx0XHQvLyBBZGQgdG8gZW5kIG9mIGxpc3QgaWYgbm90IGFscmVhZHkgcHJlc2VudFxuXHRcdFx0XHRcdFx0ZGVzY3JpYmVkQnkgKz0gXCIgXCIgKyBlcnJvcklEO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQkKCBlbGVtZW50ICkuYXR0ciggXCJhcmlhLWRlc2NyaWJlZGJ5XCIsIGRlc2NyaWJlZEJ5ICk7XG5cblx0XHRcdFx0XHQvLyBJZiB0aGlzIGVsZW1lbnQgaXMgZ3JvdXBlZCwgdGhlbiBhc3NpZ24gdG8gYWxsIGVsZW1lbnRzIGluIHRoZSBzYW1lIGdyb3VwXG5cdFx0XHRcdFx0Z3JvdXAgPSB0aGlzLmdyb3Vwc1sgZWxlbWVudC5uYW1lIF07XG5cdFx0XHRcdFx0aWYgKCBncm91cCApIHtcblx0XHRcdFx0XHRcdHYgPSB0aGlzO1xuXHRcdFx0XHRcdFx0JC5lYWNoKCB2Lmdyb3VwcywgZnVuY3Rpb24oIG5hbWUsIHRlc3Rncm91cCApIHtcblx0XHRcdFx0XHRcdFx0aWYgKCB0ZXN0Z3JvdXAgPT09IGdyb3VwICkge1xuXHRcdFx0XHRcdFx0XHRcdCQoIFwiW25hbWU9J1wiICsgdi5lc2NhcGVDc3NNZXRhKCBuYW1lICkgKyBcIiddXCIsIHYuY3VycmVudEZvcm0gKVxuXHRcdFx0XHRcdFx0XHRcdFx0LmF0dHIoIFwiYXJpYS1kZXNjcmliZWRieVwiLCBlcnJvci5hdHRyKCBcImlkXCIgKSApO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9ICk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRpZiAoICFtZXNzYWdlICYmIHRoaXMuc2V0dGluZ3Muc3VjY2VzcyApIHtcblx0XHRcdFx0ZXJyb3IudGV4dCggXCJcIiApO1xuXHRcdFx0XHRpZiAoIHR5cGVvZiB0aGlzLnNldHRpbmdzLnN1Y2Nlc3MgPT09IFwic3RyaW5nXCIgKSB7XG5cdFx0XHRcdFx0ZXJyb3IuYWRkQ2xhc3MoIHRoaXMuc2V0dGluZ3Muc3VjY2VzcyApO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHRoaXMuc2V0dGluZ3Muc3VjY2VzcyggZXJyb3IsIGVsZW1lbnQgKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0dGhpcy50b1Nob3cgPSB0aGlzLnRvU2hvdy5hZGQoIGVycm9yICk7XG5cdFx0fSxcblxuXHRcdGVycm9yc0ZvcjogZnVuY3Rpb24oIGVsZW1lbnQgKSB7XG5cdFx0XHR2YXIgbmFtZSA9IHRoaXMuZXNjYXBlQ3NzTWV0YSggdGhpcy5pZE9yTmFtZSggZWxlbWVudCApICksXG5cdFx0XHRcdGRlc2NyaWJlciA9ICQoIGVsZW1lbnQgKS5hdHRyKCBcImFyaWEtZGVzY3JpYmVkYnlcIiApLFxuXHRcdFx0XHRzZWxlY3RvciA9IFwibGFiZWxbZm9yPSdcIiArIG5hbWUgKyBcIiddLCBsYWJlbFtmb3I9J1wiICsgbmFtZSArIFwiJ10gKlwiO1xuXG5cdFx0XHQvLyAnYXJpYS1kZXNjcmliZWRieScgc2hvdWxkIGRpcmVjdGx5IHJlZmVyZW5jZSB0aGUgZXJyb3IgZWxlbWVudFxuXHRcdFx0aWYgKCBkZXNjcmliZXIgKSB7XG5cdFx0XHRcdHNlbGVjdG9yID0gc2VsZWN0b3IgKyBcIiwgI1wiICsgdGhpcy5lc2NhcGVDc3NNZXRhKCBkZXNjcmliZXIgKVxuXHRcdFx0XHRcdC5yZXBsYWNlKCAvXFxzKy9nLCBcIiwgI1wiICk7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiB0aGlzXG5cdFx0XHRcdC5lcnJvcnMoKVxuXHRcdFx0XHQuZmlsdGVyKCBzZWxlY3RvciApO1xuXHRcdH0sXG5cblx0XHQvLyBTZWUgaHR0cHM6Ly9hcGkuanF1ZXJ5LmNvbS9jYXRlZ29yeS9zZWxlY3RvcnMvLCBmb3IgQ1NTXG5cdFx0Ly8gbWV0YS1jaGFyYWN0ZXJzIHRoYXQgc2hvdWxkIGJlIGVzY2FwZWQgaW4gb3JkZXIgdG8gYmUgdXNlZCB3aXRoIEpRdWVyeVxuXHRcdC8vIGFzIGEgbGl0ZXJhbCBwYXJ0IG9mIGEgbmFtZS9pZCBvciBhbnkgc2VsZWN0b3IuXG5cdFx0ZXNjYXBlQ3NzTWV0YTogZnVuY3Rpb24oIHN0cmluZyApIHtcblx0XHRcdHJldHVybiBzdHJpbmcucmVwbGFjZSggLyhbXFxcXCFcIiMkJSYnKCkqKywuLzo7PD0+P0BcXFtcXF1eYHt8fX5dKS9nLCBcIlxcXFwkMVwiICk7XG5cdFx0fSxcblxuXHRcdGlkT3JOYW1lOiBmdW5jdGlvbiggZWxlbWVudCApIHtcblx0XHRcdHJldHVybiB0aGlzLmdyb3Vwc1sgZWxlbWVudC5uYW1lIF0gfHwgKCB0aGlzLmNoZWNrYWJsZSggZWxlbWVudCApID8gZWxlbWVudC5uYW1lIDogZWxlbWVudC5pZCB8fCBlbGVtZW50Lm5hbWUgKTtcblx0XHR9LFxuXG5cdFx0dmFsaWRhdGlvblRhcmdldEZvcjogZnVuY3Rpb24oIGVsZW1lbnQgKSB7XG5cblx0XHRcdC8vIElmIHJhZGlvL2NoZWNrYm94LCB2YWxpZGF0ZSBmaXJzdCBlbGVtZW50IGluIGdyb3VwIGluc3RlYWRcblx0XHRcdGlmICggdGhpcy5jaGVja2FibGUoIGVsZW1lbnQgKSApIHtcblx0XHRcdFx0ZWxlbWVudCA9IHRoaXMuZmluZEJ5TmFtZSggZWxlbWVudC5uYW1lICk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIEFsd2F5cyBhcHBseSBpZ25vcmUgZmlsdGVyXG5cdFx0XHRyZXR1cm4gJCggZWxlbWVudCApLm5vdCggdGhpcy5zZXR0aW5ncy5pZ25vcmUgKVsgMCBdO1xuXHRcdH0sXG5cblx0XHRjaGVja2FibGU6IGZ1bmN0aW9uKCBlbGVtZW50ICkge1xuXHRcdFx0cmV0dXJuICggL3JhZGlvfGNoZWNrYm94L2kgKS50ZXN0KCBlbGVtZW50LnR5cGUgKTtcblx0XHR9LFxuXG5cdFx0ZmluZEJ5TmFtZTogZnVuY3Rpb24oIG5hbWUgKSB7XG5cdFx0XHRyZXR1cm4gJCggdGhpcy5jdXJyZW50Rm9ybSApLmZpbmQoIFwiW25hbWU9J1wiICsgdGhpcy5lc2NhcGVDc3NNZXRhKCBuYW1lICkgKyBcIiddXCIgKTtcblx0XHR9LFxuXG5cdFx0Z2V0TGVuZ3RoOiBmdW5jdGlvbiggdmFsdWUsIGVsZW1lbnQgKSB7XG5cdFx0XHRzd2l0Y2ggKCBlbGVtZW50Lm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkgKSB7XG5cdFx0XHRjYXNlIFwic2VsZWN0XCI6XG5cdFx0XHRcdHJldHVybiAkKCBcIm9wdGlvbjpzZWxlY3RlZFwiLCBlbGVtZW50ICkubGVuZ3RoO1xuXHRcdFx0Y2FzZSBcImlucHV0XCI6XG5cdFx0XHRcdGlmICggdGhpcy5jaGVja2FibGUoIGVsZW1lbnQgKSApIHtcblx0XHRcdFx0XHRyZXR1cm4gdGhpcy5maW5kQnlOYW1lKCBlbGVtZW50Lm5hbWUgKS5maWx0ZXIoIFwiOmNoZWNrZWRcIiApLmxlbmd0aDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHZhbHVlLmxlbmd0aDtcblx0XHR9LFxuXG5cdFx0ZGVwZW5kOiBmdW5jdGlvbiggcGFyYW0sIGVsZW1lbnQgKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5kZXBlbmRUeXBlc1sgdHlwZW9mIHBhcmFtIF0gPyB0aGlzLmRlcGVuZFR5cGVzWyB0eXBlb2YgcGFyYW0gXSggcGFyYW0sIGVsZW1lbnQgKSA6IHRydWU7XG5cdFx0fSxcblxuXHRcdGRlcGVuZFR5cGVzOiB7XG5cdFx0XHRcImJvb2xlYW5cIjogZnVuY3Rpb24oIHBhcmFtICkge1xuXHRcdFx0XHRyZXR1cm4gcGFyYW07XG5cdFx0XHR9LFxuXHRcdFx0XCJzdHJpbmdcIjogZnVuY3Rpb24oIHBhcmFtLCBlbGVtZW50ICkge1xuXHRcdFx0XHRyZXR1cm4gISEkKCBwYXJhbSwgZWxlbWVudC5mb3JtICkubGVuZ3RoO1xuXHRcdFx0fSxcblx0XHRcdFwiZnVuY3Rpb25cIjogZnVuY3Rpb24oIHBhcmFtLCBlbGVtZW50ICkge1xuXHRcdFx0XHRyZXR1cm4gcGFyYW0oIGVsZW1lbnQgKTtcblx0XHRcdH1cblx0XHR9LFxuXG5cdFx0b3B0aW9uYWw6IGZ1bmN0aW9uKCBlbGVtZW50ICkge1xuXHRcdFx0dmFyIHZhbCA9IHRoaXMuZWxlbWVudFZhbHVlKCBlbGVtZW50ICk7XG5cdFx0XHRyZXR1cm4gISQudmFsaWRhdG9yLm1ldGhvZHMucmVxdWlyZWQuY2FsbCggdGhpcywgdmFsLCBlbGVtZW50ICkgJiYgXCJkZXBlbmRlbmN5LW1pc21hdGNoXCI7XG5cdFx0fSxcblxuXHRcdHN0YXJ0UmVxdWVzdDogZnVuY3Rpb24oIGVsZW1lbnQgKSB7XG5cdFx0XHRpZiAoICF0aGlzLnBlbmRpbmdbIGVsZW1lbnQubmFtZSBdICkge1xuXHRcdFx0XHR0aGlzLnBlbmRpbmdSZXF1ZXN0Kys7XG5cdFx0XHRcdCQoIGVsZW1lbnQgKS5hZGRDbGFzcyggdGhpcy5zZXR0aW5ncy5wZW5kaW5nQ2xhc3MgKTtcblx0XHRcdFx0dGhpcy5wZW5kaW5nWyBlbGVtZW50Lm5hbWUgXSA9IHRydWU7XG5cdFx0XHR9XG5cdFx0fSxcblxuXHRcdHN0b3BSZXF1ZXN0OiBmdW5jdGlvbiggZWxlbWVudCwgdmFsaWQgKSB7XG5cdFx0XHR0aGlzLnBlbmRpbmdSZXF1ZXN0LS07XG5cblx0XHRcdC8vIFNvbWV0aW1lcyBzeW5jaHJvbml6YXRpb24gZmFpbHMsIG1ha2Ugc3VyZSBwZW5kaW5nUmVxdWVzdCBpcyBuZXZlciA8IDBcblx0XHRcdGlmICggdGhpcy5wZW5kaW5nUmVxdWVzdCA8IDAgKSB7XG5cdFx0XHRcdHRoaXMucGVuZGluZ1JlcXVlc3QgPSAwO1xuXHRcdFx0fVxuXHRcdFx0ZGVsZXRlIHRoaXMucGVuZGluZ1sgZWxlbWVudC5uYW1lIF07XG5cdFx0XHQkKCBlbGVtZW50ICkucmVtb3ZlQ2xhc3MoIHRoaXMuc2V0dGluZ3MucGVuZGluZ0NsYXNzICk7XG5cdFx0XHRpZiAoIHZhbGlkICYmIHRoaXMucGVuZGluZ1JlcXVlc3QgPT09IDAgJiYgdGhpcy5mb3JtU3VibWl0dGVkICYmIHRoaXMuZm9ybSgpICkge1xuXHRcdFx0XHQkKCB0aGlzLmN1cnJlbnRGb3JtICkuc3VibWl0KCk7XG5cblx0XHRcdFx0Ly8gUmVtb3ZlIHRoZSBoaWRkZW4gaW5wdXQgdGhhdCB3YXMgdXNlZCBhcyBhIHJlcGxhY2VtZW50IGZvciB0aGVcblx0XHRcdFx0Ly8gbWlzc2luZyBzdWJtaXQgYnV0dG9uLiBUaGUgaGlkZGVuIGlucHV0IGlzIGFkZGVkIGJ5IGBoYW5kbGUoKWBcblx0XHRcdFx0Ly8gdG8gZW5zdXJlIHRoYXQgdGhlIHZhbHVlIG9mIHRoZSB1c2VkIHN1Ym1pdCBidXR0b24gaXMgcGFzc2VkIG9uXG5cdFx0XHRcdC8vIGZvciBzY3JpcHRlZCBzdWJtaXRzIHRyaWdnZXJlZCBieSB0aGlzIG1ldGhvZFxuXHRcdFx0XHRpZiAoIHRoaXMuc3VibWl0QnV0dG9uICkge1xuXHRcdFx0XHRcdCQoIFwiaW5wdXQ6aGlkZGVuW25hbWU9J1wiICsgdGhpcy5zdWJtaXRCdXR0b24ubmFtZSArIFwiJ11cIiwgdGhpcy5jdXJyZW50Rm9ybSApLnJlbW92ZSgpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0dGhpcy5mb3JtU3VibWl0dGVkID0gZmFsc2U7XG5cdFx0XHR9IGVsc2UgaWYgKCAhdmFsaWQgJiYgdGhpcy5wZW5kaW5nUmVxdWVzdCA9PT0gMCAmJiB0aGlzLmZvcm1TdWJtaXR0ZWQgKSB7XG5cdFx0XHRcdCQoIHRoaXMuY3VycmVudEZvcm0gKS50cmlnZ2VySGFuZGxlciggXCJpbnZhbGlkLWZvcm1cIiwgWyB0aGlzIF0gKTtcblx0XHRcdFx0dGhpcy5mb3JtU3VibWl0dGVkID0gZmFsc2U7XG5cdFx0XHR9XG5cdFx0fSxcblxuXHRcdHByZXZpb3VzVmFsdWU6IGZ1bmN0aW9uKCBlbGVtZW50LCBtZXRob2QgKSB7XG5cdFx0XHRtZXRob2QgPSB0eXBlb2YgbWV0aG9kID09PSBcInN0cmluZ1wiICYmIG1ldGhvZCB8fCBcInJlbW90ZVwiO1xuXG5cdFx0XHRyZXR1cm4gJC5kYXRhKCBlbGVtZW50LCBcInByZXZpb3VzVmFsdWVcIiApIHx8ICQuZGF0YSggZWxlbWVudCwgXCJwcmV2aW91c1ZhbHVlXCIsIHtcblx0XHRcdFx0b2xkOiBudWxsLFxuXHRcdFx0XHR2YWxpZDogdHJ1ZSxcblx0XHRcdFx0bWVzc2FnZTogdGhpcy5kZWZhdWx0TWVzc2FnZSggZWxlbWVudCwgeyBtZXRob2Q6IG1ldGhvZCB9IClcblx0XHRcdH0gKTtcblx0XHR9LFxuXG5cdFx0Ly8gQ2xlYW5zIHVwIGFsbCBmb3JtcyBhbmQgZWxlbWVudHMsIHJlbW92ZXMgdmFsaWRhdG9yLXNwZWNpZmljIGV2ZW50c1xuXHRcdGRlc3Ryb3k6IGZ1bmN0aW9uKCkge1xuXHRcdFx0dGhpcy5yZXNldEZvcm0oKTtcblxuXHRcdFx0JCggdGhpcy5jdXJyZW50Rm9ybSApXG5cdFx0XHRcdC5vZmYoIFwiLnZhbGlkYXRlXCIgKVxuXHRcdFx0XHQucmVtb3ZlRGF0YSggXCJ2YWxpZGF0b3JcIiApXG5cdFx0XHRcdC5maW5kKCBcIi52YWxpZGF0ZS1lcXVhbFRvLWJsdXJcIiApXG5cdFx0XHRcdFx0Lm9mZiggXCIudmFsaWRhdGUtZXF1YWxUb1wiIClcblx0XHRcdFx0XHQucmVtb3ZlQ2xhc3MoIFwidmFsaWRhdGUtZXF1YWxUby1ibHVyXCIgKVxuXHRcdFx0XHQuZmluZCggXCIudmFsaWRhdGUtbGVzc1RoYW4tYmx1clwiIClcblx0XHRcdFx0XHQub2ZmKCBcIi52YWxpZGF0ZS1sZXNzVGhhblwiIClcblx0XHRcdFx0XHQucmVtb3ZlQ2xhc3MoIFwidmFsaWRhdGUtbGVzc1RoYW4tYmx1clwiIClcblx0XHRcdFx0LmZpbmQoIFwiLnZhbGlkYXRlLWxlc3NUaGFuRXF1YWwtYmx1clwiIClcblx0XHRcdFx0XHQub2ZmKCBcIi52YWxpZGF0ZS1sZXNzVGhhbkVxdWFsXCIgKVxuXHRcdFx0XHRcdC5yZW1vdmVDbGFzcyggXCJ2YWxpZGF0ZS1sZXNzVGhhbkVxdWFsLWJsdXJcIiApXG5cdFx0XHRcdC5maW5kKCBcIi52YWxpZGF0ZS1ncmVhdGVyVGhhbkVxdWFsLWJsdXJcIiApXG5cdFx0XHRcdFx0Lm9mZiggXCIudmFsaWRhdGUtZ3JlYXRlclRoYW5FcXVhbFwiIClcblx0XHRcdFx0XHQucmVtb3ZlQ2xhc3MoIFwidmFsaWRhdGUtZ3JlYXRlclRoYW5FcXVhbC1ibHVyXCIgKVxuXHRcdFx0XHQuZmluZCggXCIudmFsaWRhdGUtZ3JlYXRlclRoYW4tYmx1clwiIClcblx0XHRcdFx0XHQub2ZmKCBcIi52YWxpZGF0ZS1ncmVhdGVyVGhhblwiIClcblx0XHRcdFx0XHQucmVtb3ZlQ2xhc3MoIFwidmFsaWRhdGUtZ3JlYXRlclRoYW4tYmx1clwiICk7XG5cdFx0fVxuXG5cdH0sXG5cblx0Y2xhc3NSdWxlU2V0dGluZ3M6IHtcblx0XHRyZXF1aXJlZDogeyByZXF1aXJlZDogdHJ1ZSB9LFxuXHRcdGVtYWlsOiB7IGVtYWlsOiB0cnVlIH0sXG5cdFx0dXJsOiB7IHVybDogdHJ1ZSB9LFxuXHRcdGRhdGU6IHsgZGF0ZTogdHJ1ZSB9LFxuXHRcdGRhdGVJU086IHsgZGF0ZUlTTzogdHJ1ZSB9LFxuXHRcdG51bWJlcjogeyBudW1iZXI6IHRydWUgfSxcblx0XHRkaWdpdHM6IHsgZGlnaXRzOiB0cnVlIH0sXG5cdFx0Y3JlZGl0Y2FyZDogeyBjcmVkaXRjYXJkOiB0cnVlIH1cblx0fSxcblxuXHRhZGRDbGFzc1J1bGVzOiBmdW5jdGlvbiggY2xhc3NOYW1lLCBydWxlcyApIHtcblx0XHRpZiAoIGNsYXNzTmFtZS5jb25zdHJ1Y3RvciA9PT0gU3RyaW5nICkge1xuXHRcdFx0dGhpcy5jbGFzc1J1bGVTZXR0aW5nc1sgY2xhc3NOYW1lIF0gPSBydWxlcztcblx0XHR9IGVsc2Uge1xuXHRcdFx0JC5leHRlbmQoIHRoaXMuY2xhc3NSdWxlU2V0dGluZ3MsIGNsYXNzTmFtZSApO1xuXHRcdH1cblx0fSxcblxuXHRjbGFzc1J1bGVzOiBmdW5jdGlvbiggZWxlbWVudCApIHtcblx0XHR2YXIgcnVsZXMgPSB7fSxcblx0XHRcdGNsYXNzZXMgPSAkKCBlbGVtZW50ICkuYXR0ciggXCJjbGFzc1wiICk7XG5cblx0XHRpZiAoIGNsYXNzZXMgKSB7XG5cdFx0XHQkLmVhY2goIGNsYXNzZXMuc3BsaXQoIFwiIFwiICksIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRpZiAoIHRoaXMgaW4gJC52YWxpZGF0b3IuY2xhc3NSdWxlU2V0dGluZ3MgKSB7XG5cdFx0XHRcdFx0JC5leHRlbmQoIHJ1bGVzLCAkLnZhbGlkYXRvci5jbGFzc1J1bGVTZXR0aW5nc1sgdGhpcyBdICk7XG5cdFx0XHRcdH1cblx0XHRcdH0gKTtcblx0XHR9XG5cdFx0cmV0dXJuIHJ1bGVzO1xuXHR9LFxuXG5cdG5vcm1hbGl6ZUF0dHJpYnV0ZVJ1bGU6IGZ1bmN0aW9uKCBydWxlcywgdHlwZSwgbWV0aG9kLCB2YWx1ZSApIHtcblxuXHRcdC8vIENvbnZlcnQgdGhlIHZhbHVlIHRvIGEgbnVtYmVyIGZvciBudW1iZXIgaW5wdXRzLCBhbmQgZm9yIHRleHQgZm9yIGJhY2t3YXJkcyBjb21wYWJpbGl0eVxuXHRcdC8vIGFsbG93cyB0eXBlPVwiZGF0ZVwiIGFuZCBvdGhlcnMgdG8gYmUgY29tcGFyZWQgYXMgc3RyaW5nc1xuXHRcdGlmICggL21pbnxtYXh8c3RlcC8udGVzdCggbWV0aG9kICkgJiYgKCB0eXBlID09PSBudWxsIHx8IC9udW1iZXJ8cmFuZ2V8dGV4dC8udGVzdCggdHlwZSApICkgKSB7XG5cdFx0XHR2YWx1ZSA9IE51bWJlciggdmFsdWUgKTtcblxuXHRcdFx0Ly8gU3VwcG9ydCBPcGVyYSBNaW5pLCB3aGljaCByZXR1cm5zIE5hTiBmb3IgdW5kZWZpbmVkIG1pbmxlbmd0aFxuXHRcdFx0aWYgKCBpc05hTiggdmFsdWUgKSApIHtcblx0XHRcdFx0dmFsdWUgPSB1bmRlZmluZWQ7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKCB2YWx1ZSB8fCB2YWx1ZSA9PT0gMCApIHtcblx0XHRcdHJ1bGVzWyBtZXRob2QgXSA9IHZhbHVlO1xuXHRcdH0gZWxzZSBpZiAoIHR5cGUgPT09IG1ldGhvZCAmJiB0eXBlICE9PSBcInJhbmdlXCIgKSB7XG5cblx0XHRcdC8vIEV4Y2VwdGlvbjogdGhlIGpxdWVyeSB2YWxpZGF0ZSAncmFuZ2UnIG1ldGhvZFxuXHRcdFx0Ly8gZG9lcyBub3QgdGVzdCBmb3IgdGhlIGh0bWw1ICdyYW5nZScgdHlwZVxuXHRcdFx0cnVsZXNbIG1ldGhvZCBdID0gdHJ1ZTtcblx0XHR9XG5cdH0sXG5cblx0YXR0cmlidXRlUnVsZXM6IGZ1bmN0aW9uKCBlbGVtZW50ICkge1xuXHRcdHZhciBydWxlcyA9IHt9LFxuXHRcdFx0JGVsZW1lbnQgPSAkKCBlbGVtZW50ICksXG5cdFx0XHR0eXBlID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoIFwidHlwZVwiICksXG5cdFx0XHRtZXRob2QsIHZhbHVlO1xuXG5cdFx0Zm9yICggbWV0aG9kIGluICQudmFsaWRhdG9yLm1ldGhvZHMgKSB7XG5cblx0XHRcdC8vIFN1cHBvcnQgZm9yIDxpbnB1dCByZXF1aXJlZD4gaW4gYm90aCBodG1sNSBhbmQgb2xkZXIgYnJvd3NlcnNcblx0XHRcdGlmICggbWV0aG9kID09PSBcInJlcXVpcmVkXCIgKSB7XG5cdFx0XHRcdHZhbHVlID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoIG1ldGhvZCApO1xuXG5cdFx0XHRcdC8vIFNvbWUgYnJvd3NlcnMgcmV0dXJuIGFuIGVtcHR5IHN0cmluZyBmb3IgdGhlIHJlcXVpcmVkIGF0dHJpYnV0ZVxuXHRcdFx0XHQvLyBhbmQgbm9uLUhUTUw1IGJyb3dzZXJzIG1pZ2h0IGhhdmUgcmVxdWlyZWQ9XCJcIiBtYXJrdXBcblx0XHRcdFx0aWYgKCB2YWx1ZSA9PT0gXCJcIiApIHtcblx0XHRcdFx0XHR2YWx1ZSA9IHRydWU7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBGb3JjZSBub24tSFRNTDUgYnJvd3NlcnMgdG8gcmV0dXJuIGJvb2xcblx0XHRcdFx0dmFsdWUgPSAhIXZhbHVlO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dmFsdWUgPSAkZWxlbWVudC5hdHRyKCBtZXRob2QgKTtcblx0XHRcdH1cblxuXHRcdFx0dGhpcy5ub3JtYWxpemVBdHRyaWJ1dGVSdWxlKCBydWxlcywgdHlwZSwgbWV0aG9kLCB2YWx1ZSApO1xuXHRcdH1cblxuXHRcdC8vICdtYXhsZW5ndGgnIG1heSBiZSByZXR1cm5lZCBhcyAtMSwgMjE0NzQ4MzY0NyAoIElFICkgYW5kIDUyNDI4OCAoIHNhZmFyaSApIGZvciB0ZXh0IGlucHV0c1xuXHRcdGlmICggcnVsZXMubWF4bGVuZ3RoICYmIC8tMXwyMTQ3NDgzNjQ3fDUyNDI4OC8udGVzdCggcnVsZXMubWF4bGVuZ3RoICkgKSB7XG5cdFx0XHRkZWxldGUgcnVsZXMubWF4bGVuZ3RoO1xuXHRcdH1cblxuXHRcdHJldHVybiBydWxlcztcblx0fSxcblxuXHRkYXRhUnVsZXM6IGZ1bmN0aW9uKCBlbGVtZW50ICkge1xuXHRcdHZhciBydWxlcyA9IHt9LFxuXHRcdFx0JGVsZW1lbnQgPSAkKCBlbGVtZW50ICksXG5cdFx0XHR0eXBlID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoIFwidHlwZVwiICksXG5cdFx0XHRtZXRob2QsIHZhbHVlO1xuXG5cdFx0Zm9yICggbWV0aG9kIGluICQudmFsaWRhdG9yLm1ldGhvZHMgKSB7XG5cdFx0XHR2YWx1ZSA9ICRlbGVtZW50LmRhdGEoIFwicnVsZVwiICsgbWV0aG9kLmNoYXJBdCggMCApLnRvVXBwZXJDYXNlKCkgKyBtZXRob2Quc3Vic3RyaW5nKCAxICkudG9Mb3dlckNhc2UoKSApO1xuXG5cdFx0XHQvLyBDYXN0IGVtcHR5IGF0dHJpYnV0ZXMgbGlrZSBgZGF0YS1ydWxlLXJlcXVpcmVkYCB0byBgdHJ1ZWBcblx0XHRcdGlmICggdmFsdWUgPT09IFwiXCIgKSB7XG5cdFx0XHRcdHZhbHVlID0gdHJ1ZTtcblx0XHRcdH1cblxuXHRcdFx0dGhpcy5ub3JtYWxpemVBdHRyaWJ1dGVSdWxlKCBydWxlcywgdHlwZSwgbWV0aG9kLCB2YWx1ZSApO1xuXHRcdH1cblx0XHRyZXR1cm4gcnVsZXM7XG5cdH0sXG5cblx0c3RhdGljUnVsZXM6IGZ1bmN0aW9uKCBlbGVtZW50ICkge1xuXHRcdHZhciBydWxlcyA9IHt9LFxuXHRcdFx0dmFsaWRhdG9yID0gJC5kYXRhKCBlbGVtZW50LmZvcm0sIFwidmFsaWRhdG9yXCIgKTtcblxuXHRcdGlmICggdmFsaWRhdG9yLnNldHRpbmdzLnJ1bGVzICkge1xuXHRcdFx0cnVsZXMgPSAkLnZhbGlkYXRvci5ub3JtYWxpemVSdWxlKCB2YWxpZGF0b3Iuc2V0dGluZ3MucnVsZXNbIGVsZW1lbnQubmFtZSBdICkgfHwge307XG5cdFx0fVxuXHRcdHJldHVybiBydWxlcztcblx0fSxcblxuXHRub3JtYWxpemVSdWxlczogZnVuY3Rpb24oIHJ1bGVzLCBlbGVtZW50ICkge1xuXG5cdFx0Ly8gSGFuZGxlIGRlcGVuZGVuY3kgY2hlY2tcblx0XHQkLmVhY2goIHJ1bGVzLCBmdW5jdGlvbiggcHJvcCwgdmFsICkge1xuXG5cdFx0XHQvLyBJZ25vcmUgcnVsZSB3aGVuIHBhcmFtIGlzIGV4cGxpY2l0bHkgZmFsc2UsIGVnLiByZXF1aXJlZDpmYWxzZVxuXHRcdFx0aWYgKCB2YWwgPT09IGZhbHNlICkge1xuXHRcdFx0XHRkZWxldGUgcnVsZXNbIHByb3AgXTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0aWYgKCB2YWwucGFyYW0gfHwgdmFsLmRlcGVuZHMgKSB7XG5cdFx0XHRcdHZhciBrZWVwUnVsZSA9IHRydWU7XG5cdFx0XHRcdHN3aXRjaCAoIHR5cGVvZiB2YWwuZGVwZW5kcyApIHtcblx0XHRcdFx0Y2FzZSBcInN0cmluZ1wiOlxuXHRcdFx0XHRcdGtlZXBSdWxlID0gISEkKCB2YWwuZGVwZW5kcywgZWxlbWVudC5mb3JtICkubGVuZ3RoO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIFwiZnVuY3Rpb25cIjpcblx0XHRcdFx0XHRrZWVwUnVsZSA9IHZhbC5kZXBlbmRzLmNhbGwoIGVsZW1lbnQsIGVsZW1lbnQgKTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoIGtlZXBSdWxlICkge1xuXHRcdFx0XHRcdHJ1bGVzWyBwcm9wIF0gPSB2YWwucGFyYW0gIT09IHVuZGVmaW5lZCA/IHZhbC5wYXJhbSA6IHRydWU7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0JC5kYXRhKCBlbGVtZW50LmZvcm0sIFwidmFsaWRhdG9yXCIgKS5yZXNldEVsZW1lbnRzKCAkKCBlbGVtZW50ICkgKTtcblx0XHRcdFx0XHRkZWxldGUgcnVsZXNbIHByb3AgXTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0gKTtcblxuXHRcdC8vIEV2YWx1YXRlIHBhcmFtZXRlcnNcblx0XHQkLmVhY2goIHJ1bGVzLCBmdW5jdGlvbiggcnVsZSwgcGFyYW1ldGVyICkge1xuXHRcdFx0cnVsZXNbIHJ1bGUgXSA9ICQuaXNGdW5jdGlvbiggcGFyYW1ldGVyICkgJiYgcnVsZSAhPT0gXCJub3JtYWxpemVyXCIgPyBwYXJhbWV0ZXIoIGVsZW1lbnQgKSA6IHBhcmFtZXRlcjtcblx0XHR9ICk7XG5cblx0XHQvLyBDbGVhbiBudW1iZXIgcGFyYW1ldGVyc1xuXHRcdCQuZWFjaCggWyBcIm1pbmxlbmd0aFwiLCBcIm1heGxlbmd0aFwiIF0sIGZ1bmN0aW9uKCkge1xuXHRcdFx0aWYgKCBydWxlc1sgdGhpcyBdICkge1xuXHRcdFx0XHRydWxlc1sgdGhpcyBdID0gTnVtYmVyKCBydWxlc1sgdGhpcyBdICk7XG5cdFx0XHR9XG5cdFx0fSApO1xuXHRcdCQuZWFjaCggWyBcInJhbmdlbGVuZ3RoXCIsIFwicmFuZ2VcIiBdLCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBwYXJ0cztcblx0XHRcdGlmICggcnVsZXNbIHRoaXMgXSApIHtcblx0XHRcdFx0aWYgKCAkLmlzQXJyYXkoIHJ1bGVzWyB0aGlzIF0gKSApIHtcblx0XHRcdFx0XHRydWxlc1sgdGhpcyBdID0gWyBOdW1iZXIoIHJ1bGVzWyB0aGlzIF1bIDAgXSApLCBOdW1iZXIoIHJ1bGVzWyB0aGlzIF1bIDEgXSApIF07XG5cdFx0XHRcdH0gZWxzZSBpZiAoIHR5cGVvZiBydWxlc1sgdGhpcyBdID09PSBcInN0cmluZ1wiICkge1xuXHRcdFx0XHRcdHBhcnRzID0gcnVsZXNbIHRoaXMgXS5yZXBsYWNlKCAvW1xcW1xcXV0vZywgXCJcIiApLnNwbGl0KCAvW1xccyxdKy8gKTtcblx0XHRcdFx0XHRydWxlc1sgdGhpcyBdID0gWyBOdW1iZXIoIHBhcnRzWyAwIF0gKSwgTnVtYmVyKCBwYXJ0c1sgMSBdICkgXTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0gKTtcblxuXHRcdGlmICggJC52YWxpZGF0b3IuYXV0b0NyZWF0ZVJhbmdlcyApIHtcblxuXHRcdFx0Ly8gQXV0by1jcmVhdGUgcmFuZ2VzXG5cdFx0XHRpZiAoIHJ1bGVzLm1pbiAhPSBudWxsICYmIHJ1bGVzLm1heCAhPSBudWxsICkge1xuXHRcdFx0XHRydWxlcy5yYW5nZSA9IFsgcnVsZXMubWluLCBydWxlcy5tYXggXTtcblx0XHRcdFx0ZGVsZXRlIHJ1bGVzLm1pbjtcblx0XHRcdFx0ZGVsZXRlIHJ1bGVzLm1heDtcblx0XHRcdH1cblx0XHRcdGlmICggcnVsZXMubWlubGVuZ3RoICE9IG51bGwgJiYgcnVsZXMubWF4bGVuZ3RoICE9IG51bGwgKSB7XG5cdFx0XHRcdHJ1bGVzLnJhbmdlbGVuZ3RoID0gWyBydWxlcy5taW5sZW5ndGgsIHJ1bGVzLm1heGxlbmd0aCBdO1xuXHRcdFx0XHRkZWxldGUgcnVsZXMubWlubGVuZ3RoO1xuXHRcdFx0XHRkZWxldGUgcnVsZXMubWF4bGVuZ3RoO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBydWxlcztcblx0fSxcblxuXHQvLyBDb252ZXJ0cyBhIHNpbXBsZSBzdHJpbmcgdG8gYSB7c3RyaW5nOiB0cnVlfSBydWxlLCBlLmcuLCBcInJlcXVpcmVkXCIgdG8ge3JlcXVpcmVkOnRydWV9XG5cdG5vcm1hbGl6ZVJ1bGU6IGZ1bmN0aW9uKCBkYXRhICkge1xuXHRcdGlmICggdHlwZW9mIGRhdGEgPT09IFwic3RyaW5nXCIgKSB7XG5cdFx0XHR2YXIgdHJhbnNmb3JtZWQgPSB7fTtcblx0XHRcdCQuZWFjaCggZGF0YS5zcGxpdCggL1xccy8gKSwgZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHRyYW5zZm9ybWVkWyB0aGlzIF0gPSB0cnVlO1xuXHRcdFx0fSApO1xuXHRcdFx0ZGF0YSA9IHRyYW5zZm9ybWVkO1xuXHRcdH1cblx0XHRyZXR1cm4gZGF0YTtcblx0fSxcblxuXHQvLyBodHRwczovL2pxdWVyeXZhbGlkYXRpb24ub3JnL2pRdWVyeS52YWxpZGF0b3IuYWRkTWV0aG9kL1xuXHRhZGRNZXRob2Q6IGZ1bmN0aW9uKCBuYW1lLCBtZXRob2QsIG1lc3NhZ2UgKSB7XG5cdFx0JC52YWxpZGF0b3IubWV0aG9kc1sgbmFtZSBdID0gbWV0aG9kO1xuXHRcdCQudmFsaWRhdG9yLm1lc3NhZ2VzWyBuYW1lIF0gPSBtZXNzYWdlICE9PSB1bmRlZmluZWQgPyBtZXNzYWdlIDogJC52YWxpZGF0b3IubWVzc2FnZXNbIG5hbWUgXTtcblx0XHRpZiAoIG1ldGhvZC5sZW5ndGggPCAzICkge1xuXHRcdFx0JC52YWxpZGF0b3IuYWRkQ2xhc3NSdWxlcyggbmFtZSwgJC52YWxpZGF0b3Iubm9ybWFsaXplUnVsZSggbmFtZSApICk7XG5cdFx0fVxuXHR9LFxuXG5cdC8vIGh0dHBzOi8vanF1ZXJ5dmFsaWRhdGlvbi5vcmcvalF1ZXJ5LnZhbGlkYXRvci5tZXRob2RzL1xuXHRtZXRob2RzOiB7XG5cblx0XHQvLyBodHRwczovL2pxdWVyeXZhbGlkYXRpb24ub3JnL3JlcXVpcmVkLW1ldGhvZC9cblx0XHRyZXF1aXJlZDogZnVuY3Rpb24oIHZhbHVlLCBlbGVtZW50LCBwYXJhbSApIHtcblxuXHRcdFx0Ly8gQ2hlY2sgaWYgZGVwZW5kZW5jeSBpcyBtZXRcblx0XHRcdGlmICggIXRoaXMuZGVwZW5kKCBwYXJhbSwgZWxlbWVudCApICkge1xuXHRcdFx0XHRyZXR1cm4gXCJkZXBlbmRlbmN5LW1pc21hdGNoXCI7XG5cdFx0XHR9XG5cdFx0XHRpZiAoIGVsZW1lbnQubm9kZU5hbWUudG9Mb3dlckNhc2UoKSA9PT0gXCJzZWxlY3RcIiApIHtcblxuXHRcdFx0XHQvLyBDb3VsZCBiZSBhbiBhcnJheSBmb3Igc2VsZWN0LW11bHRpcGxlIG9yIGEgc3RyaW5nLCBib3RoIGFyZSBmaW5lIHRoaXMgd2F5XG5cdFx0XHRcdHZhciB2YWwgPSAkKCBlbGVtZW50ICkudmFsKCk7XG5cdFx0XHRcdHJldHVybiB2YWwgJiYgdmFsLmxlbmd0aCA+IDA7XG5cdFx0XHR9XG5cdFx0XHRpZiAoIHRoaXMuY2hlY2thYmxlKCBlbGVtZW50ICkgKSB7XG5cdFx0XHRcdHJldHVybiB0aGlzLmdldExlbmd0aCggdmFsdWUsIGVsZW1lbnQgKSA+IDA7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gdmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSAhPT0gbnVsbCAmJiB2YWx1ZS5sZW5ndGggPiAwO1xuXHRcdH0sXG5cblx0XHQvLyBodHRwczovL2pxdWVyeXZhbGlkYXRpb24ub3JnL2VtYWlsLW1ldGhvZC9cblx0XHRlbWFpbDogZnVuY3Rpb24oIHZhbHVlLCBlbGVtZW50ICkge1xuXG5cdFx0XHQvLyBGcm9tIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL2Zvcm1zLmh0bWwjdmFsaWQtZS1tYWlsLWFkZHJlc3Ncblx0XHRcdC8vIFJldHJpZXZlZCAyMDE0LTAxLTE0XG5cdFx0XHQvLyBJZiB5b3UgaGF2ZSBhIHByb2JsZW0gd2l0aCB0aGlzIGltcGxlbWVudGF0aW9uLCByZXBvcnQgYSBidWcgYWdhaW5zdCB0aGUgYWJvdmUgc3BlY1xuXHRcdFx0Ly8gT3IgdXNlIGN1c3RvbSBtZXRob2RzIHRvIGltcGxlbWVudCB5b3VyIG93biBlbWFpbCB2YWxpZGF0aW9uXG5cdFx0XHRyZXR1cm4gdGhpcy5vcHRpb25hbCggZWxlbWVudCApIHx8IC9eW2EtekEtWjAtOS4hIyQlJicqK1xcLz0/Xl9ge3x9fi1dK0BbYS16QS1aMC05XSg/OlthLXpBLVowLTktXXswLDYxfVthLXpBLVowLTldKT8oPzpcXC5bYS16QS1aMC05XSg/OlthLXpBLVowLTktXXswLDYxfVthLXpBLVowLTldKT8pKiQvLnRlc3QoIHZhbHVlICk7XG5cdFx0fSxcblxuXHRcdC8vIGh0dHBzOi8vanF1ZXJ5dmFsaWRhdGlvbi5vcmcvdXJsLW1ldGhvZC9cblx0XHR1cmw6IGZ1bmN0aW9uKCB2YWx1ZSwgZWxlbWVudCApIHtcblxuXHRcdFx0Ly8gQ29weXJpZ2h0IChjKSAyMDEwLTIwMTMgRGllZ28gUGVyaW5pLCBNSVQgbGljZW5zZWRcblx0XHRcdC8vIGh0dHBzOi8vZ2lzdC5naXRodWIuY29tL2RwZXJpbmkvNzI5Mjk0XG5cdFx0XHQvLyBzZWUgYWxzbyBodHRwczovL21hdGhpYXNieW5lbnMuYmUvZGVtby91cmwtcmVnZXhcblx0XHRcdC8vIG1vZGlmaWVkIHRvIGFsbG93IHByb3RvY29sLXJlbGF0aXZlIFVSTHNcblx0XHRcdHJldHVybiB0aGlzLm9wdGlvbmFsKCBlbGVtZW50ICkgfHwgL14oPzooPzooPzpodHRwcz98ZnRwKTopP1xcL1xcLykoPzpcXFMrKD86OlxcUyopP0ApPyg/Oig/ISg/OjEwfDEyNykoPzpcXC5cXGR7MSwzfSl7M30pKD8hKD86MTY5XFwuMjU0fDE5MlxcLjE2OCkoPzpcXC5cXGR7MSwzfSl7Mn0pKD8hMTcyXFwuKD86MVs2LTldfDJcXGR8M1swLTFdKSg/OlxcLlxcZHsxLDN9KXsyfSkoPzpbMS05XVxcZD98MVxcZFxcZHwyWzAxXVxcZHwyMlswLTNdKSg/OlxcLig/OjE/XFxkezEsMn18MlswLTRdXFxkfDI1WzAtNV0pKXsyfSg/OlxcLig/OlsxLTldXFxkP3wxXFxkXFxkfDJbMC00XVxcZHwyNVswLTRdKSl8KD86KD86W2EtelxcdTAwYTEtXFx1ZmZmZjAtOV0tKikqW2EtelxcdTAwYTEtXFx1ZmZmZjAtOV0rKSg/OlxcLig/OlthLXpcXHUwMGExLVxcdWZmZmYwLTldLSopKlthLXpcXHUwMGExLVxcdWZmZmYwLTldKykqKD86XFwuKD86W2EtelxcdTAwYTEtXFx1ZmZmZl17Mix9KSkuPykoPzo6XFxkezIsNX0pPyg/OlsvPyNdXFxTKik/JC9pLnRlc3QoIHZhbHVlICk7XG5cdFx0fSxcblxuXHRcdC8vIGh0dHBzOi8vanF1ZXJ5dmFsaWRhdGlvbi5vcmcvZGF0ZS1tZXRob2QvXG5cdFx0ZGF0ZTogKCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBjYWxsZWQgPSBmYWxzZTtcblxuXHRcdFx0cmV0dXJuIGZ1bmN0aW9uKCB2YWx1ZSwgZWxlbWVudCApIHtcblx0XHRcdFx0aWYgKCAhY2FsbGVkICkge1xuXHRcdFx0XHRcdGNhbGxlZCA9IHRydWU7XG5cdFx0XHRcdFx0aWYgKCB0aGlzLnNldHRpbmdzLmRlYnVnICYmIHdpbmRvdy5jb25zb2xlICkge1xuXHRcdFx0XHRcdFx0Y29uc29sZS53YXJuKFxuXHRcdFx0XHRcdFx0XHRcIlRoZSBgZGF0ZWAgbWV0aG9kIGlzIGRlcHJlY2F0ZWQgYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiB2ZXJzaW9uICcyLjAuMCcuXFxuXCIgK1xuXHRcdFx0XHRcdFx0XHRcIlBsZWFzZSBkb24ndCB1c2UgaXQsIHNpbmNlIGl0IHJlbGllcyBvbiB0aGUgRGF0ZSBjb25zdHJ1Y3Rvciwgd2hpY2hcXG5cIiArXG5cdFx0XHRcdFx0XHRcdFwiYmVoYXZlcyB2ZXJ5IGRpZmZlcmVudGx5IGFjcm9zcyBicm93c2VycyBhbmQgbG9jYWxlcy4gVXNlIGBkYXRlSVNPYFxcblwiICtcblx0XHRcdFx0XHRcdFx0XCJpbnN0ZWFkIG9yIG9uZSBvZiB0aGUgbG9jYWxlIHNwZWNpZmljIG1ldGhvZHMgaW4gYGxvY2FsaXphdGlvbnMvYFxcblwiICtcblx0XHRcdFx0XHRcdFx0XCJhbmQgYGFkZGl0aW9uYWwtbWV0aG9kcy5qc2AuXCJcblx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0cmV0dXJuIHRoaXMub3B0aW9uYWwoIGVsZW1lbnQgKSB8fCAhL0ludmFsaWR8TmFOLy50ZXN0KCBuZXcgRGF0ZSggdmFsdWUgKS50b1N0cmluZygpICk7XG5cdFx0XHR9O1xuXHRcdH0oKSApLFxuXG5cdFx0Ly8gaHR0cHM6Ly9qcXVlcnl2YWxpZGF0aW9uLm9yZy9kYXRlSVNPLW1ldGhvZC9cblx0XHRkYXRlSVNPOiBmdW5jdGlvbiggdmFsdWUsIGVsZW1lbnQgKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5vcHRpb25hbCggZWxlbWVudCApIHx8IC9eXFxkezR9W1xcL1xcLV0oMD9bMS05XXwxWzAxMl0pW1xcL1xcLV0oMD9bMS05XXxbMTJdWzAtOV18M1swMV0pJC8udGVzdCggdmFsdWUgKTtcblx0XHR9LFxuXG5cdFx0Ly8gaHR0cHM6Ly9qcXVlcnl2YWxpZGF0aW9uLm9yZy9udW1iZXItbWV0aG9kL1xuXHRcdG51bWJlcjogZnVuY3Rpb24oIHZhbHVlLCBlbGVtZW50ICkge1xuXHRcdFx0cmV0dXJuIHRoaXMub3B0aW9uYWwoIGVsZW1lbnQgKSB8fCAvXig/Oi0/XFxkK3wtP1xcZHsxLDN9KD86LFxcZHszfSkrKT8oPzpcXC5cXGQrKT8kLy50ZXN0KCB2YWx1ZSApO1xuXHRcdH0sXG5cblx0XHQvLyBodHRwczovL2pxdWVyeXZhbGlkYXRpb24ub3JnL2RpZ2l0cy1tZXRob2QvXG5cdFx0ZGlnaXRzOiBmdW5jdGlvbiggdmFsdWUsIGVsZW1lbnQgKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5vcHRpb25hbCggZWxlbWVudCApIHx8IC9eXFxkKyQvLnRlc3QoIHZhbHVlICk7XG5cdFx0fSxcblxuXHRcdC8vIGh0dHBzOi8vanF1ZXJ5dmFsaWRhdGlvbi5vcmcvbWlubGVuZ3RoLW1ldGhvZC9cblx0XHRtaW5sZW5ndGg6IGZ1bmN0aW9uKCB2YWx1ZSwgZWxlbWVudCwgcGFyYW0gKSB7XG5cdFx0XHR2YXIgbGVuZ3RoID0gJC5pc0FycmF5KCB2YWx1ZSApID8gdmFsdWUubGVuZ3RoIDogdGhpcy5nZXRMZW5ndGgoIHZhbHVlLCBlbGVtZW50ICk7XG5cdFx0XHRyZXR1cm4gdGhpcy5vcHRpb25hbCggZWxlbWVudCApIHx8IGxlbmd0aCA+PSBwYXJhbTtcblx0XHR9LFxuXG5cdFx0Ly8gaHR0cHM6Ly9qcXVlcnl2YWxpZGF0aW9uLm9yZy9tYXhsZW5ndGgtbWV0aG9kL1xuXHRcdG1heGxlbmd0aDogZnVuY3Rpb24oIHZhbHVlLCBlbGVtZW50LCBwYXJhbSApIHtcblx0XHRcdHZhciBsZW5ndGggPSAkLmlzQXJyYXkoIHZhbHVlICkgPyB2YWx1ZS5sZW5ndGggOiB0aGlzLmdldExlbmd0aCggdmFsdWUsIGVsZW1lbnQgKTtcblx0XHRcdHJldHVybiB0aGlzLm9wdGlvbmFsKCBlbGVtZW50ICkgfHwgbGVuZ3RoIDw9IHBhcmFtO1xuXHRcdH0sXG5cblx0XHQvLyBodHRwczovL2pxdWVyeXZhbGlkYXRpb24ub3JnL3JhbmdlbGVuZ3RoLW1ldGhvZC9cblx0XHRyYW5nZWxlbmd0aDogZnVuY3Rpb24oIHZhbHVlLCBlbGVtZW50LCBwYXJhbSApIHtcblx0XHRcdHZhciBsZW5ndGggPSAkLmlzQXJyYXkoIHZhbHVlICkgPyB2YWx1ZS5sZW5ndGggOiB0aGlzLmdldExlbmd0aCggdmFsdWUsIGVsZW1lbnQgKTtcblx0XHRcdHJldHVybiB0aGlzLm9wdGlvbmFsKCBlbGVtZW50ICkgfHwgKCBsZW5ndGggPj0gcGFyYW1bIDAgXSAmJiBsZW5ndGggPD0gcGFyYW1bIDEgXSApO1xuXHRcdH0sXG5cblx0XHQvLyBodHRwczovL2pxdWVyeXZhbGlkYXRpb24ub3JnL21pbi1tZXRob2QvXG5cdFx0bWluOiBmdW5jdGlvbiggdmFsdWUsIGVsZW1lbnQsIHBhcmFtICkge1xuXHRcdFx0cmV0dXJuIHRoaXMub3B0aW9uYWwoIGVsZW1lbnQgKSB8fCB2YWx1ZSA+PSBwYXJhbTtcblx0XHR9LFxuXG5cdFx0Ly8gaHR0cHM6Ly9qcXVlcnl2YWxpZGF0aW9uLm9yZy9tYXgtbWV0aG9kL1xuXHRcdG1heDogZnVuY3Rpb24oIHZhbHVlLCBlbGVtZW50LCBwYXJhbSApIHtcblx0XHRcdHJldHVybiB0aGlzLm9wdGlvbmFsKCBlbGVtZW50ICkgfHwgdmFsdWUgPD0gcGFyYW07XG5cdFx0fSxcblxuXHRcdC8vIGh0dHBzOi8vanF1ZXJ5dmFsaWRhdGlvbi5vcmcvcmFuZ2UtbWV0aG9kL1xuXHRcdHJhbmdlOiBmdW5jdGlvbiggdmFsdWUsIGVsZW1lbnQsIHBhcmFtICkge1xuXHRcdFx0cmV0dXJuIHRoaXMub3B0aW9uYWwoIGVsZW1lbnQgKSB8fCAoIHZhbHVlID49IHBhcmFtWyAwIF0gJiYgdmFsdWUgPD0gcGFyYW1bIDEgXSApO1xuXHRcdH0sXG5cblx0XHQvLyBodHRwczovL2pxdWVyeXZhbGlkYXRpb24ub3JnL3N0ZXAtbWV0aG9kL1xuXHRcdHN0ZXA6IGZ1bmN0aW9uKCB2YWx1ZSwgZWxlbWVudCwgcGFyYW0gKSB7XG5cdFx0XHR2YXIgdHlwZSA9ICQoIGVsZW1lbnQgKS5hdHRyKCBcInR5cGVcIiApLFxuXHRcdFx0XHRlcnJvck1lc3NhZ2UgPSBcIlN0ZXAgYXR0cmlidXRlIG9uIGlucHV0IHR5cGUgXCIgKyB0eXBlICsgXCIgaXMgbm90IHN1cHBvcnRlZC5cIixcblx0XHRcdFx0c3VwcG9ydGVkVHlwZXMgPSBbIFwidGV4dFwiLCBcIm51bWJlclwiLCBcInJhbmdlXCIgXSxcblx0XHRcdFx0cmUgPSBuZXcgUmVnRXhwKCBcIlxcXFxiXCIgKyB0eXBlICsgXCJcXFxcYlwiICksXG5cdFx0XHRcdG5vdFN1cHBvcnRlZCA9IHR5cGUgJiYgIXJlLnRlc3QoIHN1cHBvcnRlZFR5cGVzLmpvaW4oKSApLFxuXHRcdFx0XHRkZWNpbWFsUGxhY2VzID0gZnVuY3Rpb24oIG51bSApIHtcblx0XHRcdFx0XHR2YXIgbWF0Y2ggPSAoIFwiXCIgKyBudW0gKS5tYXRjaCggLyg/OlxcLihcXGQrKSk/JC8gKTtcblx0XHRcdFx0XHRpZiAoICFtYXRjaCApIHtcblx0XHRcdFx0XHRcdHJldHVybiAwO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC8vIE51bWJlciBvZiBkaWdpdHMgcmlnaHQgb2YgZGVjaW1hbCBwb2ludC5cblx0XHRcdFx0XHRyZXR1cm4gbWF0Y2hbIDEgXSA/IG1hdGNoWyAxIF0ubGVuZ3RoIDogMDtcblx0XHRcdFx0fSxcblx0XHRcdFx0dG9JbnQgPSBmdW5jdGlvbiggbnVtICkge1xuXHRcdFx0XHRcdHJldHVybiBNYXRoLnJvdW5kKCBudW0gKiBNYXRoLnBvdyggMTAsIGRlY2ltYWxzICkgKTtcblx0XHRcdFx0fSxcblx0XHRcdFx0dmFsaWQgPSB0cnVlLFxuXHRcdFx0XHRkZWNpbWFscztcblxuXHRcdFx0Ly8gV29ya3Mgb25seSBmb3IgdGV4dCwgbnVtYmVyIGFuZCByYW5nZSBpbnB1dCB0eXBlc1xuXHRcdFx0Ly8gVE9ETyBmaW5kIGEgd2F5IHRvIHN1cHBvcnQgaW5wdXQgdHlwZXMgZGF0ZSwgZGF0ZXRpbWUsIGRhdGV0aW1lLWxvY2FsLCBtb250aCwgdGltZSBhbmQgd2Vla1xuXHRcdFx0aWYgKCBub3RTdXBwb3J0ZWQgKSB7XG5cdFx0XHRcdHRocm93IG5ldyBFcnJvciggZXJyb3JNZXNzYWdlICk7XG5cdFx0XHR9XG5cblx0XHRcdGRlY2ltYWxzID0gZGVjaW1hbFBsYWNlcyggcGFyYW0gKTtcblxuXHRcdFx0Ly8gVmFsdWUgY2FuJ3QgaGF2ZSB0b28gbWFueSBkZWNpbWFsc1xuXHRcdFx0aWYgKCBkZWNpbWFsUGxhY2VzKCB2YWx1ZSApID4gZGVjaW1hbHMgfHwgdG9JbnQoIHZhbHVlICkgJSB0b0ludCggcGFyYW0gKSAhPT0gMCApIHtcblx0XHRcdFx0dmFsaWQgPSBmYWxzZTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIHRoaXMub3B0aW9uYWwoIGVsZW1lbnQgKSB8fCB2YWxpZDtcblx0XHR9LFxuXG5cdFx0Ly8gaHR0cHM6Ly9qcXVlcnl2YWxpZGF0aW9uLm9yZy9lcXVhbFRvLW1ldGhvZC9cblx0XHRlcXVhbFRvOiBmdW5jdGlvbiggdmFsdWUsIGVsZW1lbnQsIHBhcmFtICkge1xuXG5cdFx0XHQvLyBCaW5kIHRvIHRoZSBibHVyIGV2ZW50IG9mIHRoZSB0YXJnZXQgaW4gb3JkZXIgdG8gcmV2YWxpZGF0ZSB3aGVuZXZlciB0aGUgdGFyZ2V0IGZpZWxkIGlzIHVwZGF0ZWRcblx0XHRcdHZhciB0YXJnZXQgPSAkKCBwYXJhbSApO1xuXHRcdFx0aWYgKCB0aGlzLnNldHRpbmdzLm9uZm9jdXNvdXQgJiYgdGFyZ2V0Lm5vdCggXCIudmFsaWRhdGUtZXF1YWxUby1ibHVyXCIgKS5sZW5ndGggKSB7XG5cdFx0XHRcdHRhcmdldC5hZGRDbGFzcyggXCJ2YWxpZGF0ZS1lcXVhbFRvLWJsdXJcIiApLm9uKCBcImJsdXIudmFsaWRhdGUtZXF1YWxUb1wiLCBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHQkKCBlbGVtZW50ICkudmFsaWQoKTtcblx0XHRcdFx0fSApO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHZhbHVlID09PSB0YXJnZXQudmFsKCk7XG5cdFx0fSxcblxuXHRcdC8vIGh0dHBzOi8vanF1ZXJ5dmFsaWRhdGlvbi5vcmcvcmVtb3RlLW1ldGhvZC9cblx0XHRyZW1vdGU6IGZ1bmN0aW9uKCB2YWx1ZSwgZWxlbWVudCwgcGFyYW0sIG1ldGhvZCApIHtcblx0XHRcdGlmICggdGhpcy5vcHRpb25hbCggZWxlbWVudCApICkge1xuXHRcdFx0XHRyZXR1cm4gXCJkZXBlbmRlbmN5LW1pc21hdGNoXCI7XG5cdFx0XHR9XG5cblx0XHRcdG1ldGhvZCA9IHR5cGVvZiBtZXRob2QgPT09IFwic3RyaW5nXCIgJiYgbWV0aG9kIHx8IFwicmVtb3RlXCI7XG5cblx0XHRcdHZhciBwcmV2aW91cyA9IHRoaXMucHJldmlvdXNWYWx1ZSggZWxlbWVudCwgbWV0aG9kICksXG5cdFx0XHRcdHZhbGlkYXRvciwgZGF0YSwgb3B0aW9uRGF0YVN0cmluZztcblxuXHRcdFx0aWYgKCAhdGhpcy5zZXR0aW5ncy5tZXNzYWdlc1sgZWxlbWVudC5uYW1lIF0gKSB7XG5cdFx0XHRcdHRoaXMuc2V0dGluZ3MubWVzc2FnZXNbIGVsZW1lbnQubmFtZSBdID0ge307XG5cdFx0XHR9XG5cdFx0XHRwcmV2aW91cy5vcmlnaW5hbE1lc3NhZ2UgPSBwcmV2aW91cy5vcmlnaW5hbE1lc3NhZ2UgfHwgdGhpcy5zZXR0aW5ncy5tZXNzYWdlc1sgZWxlbWVudC5uYW1lIF1bIG1ldGhvZCBdO1xuXHRcdFx0dGhpcy5zZXR0aW5ncy5tZXNzYWdlc1sgZWxlbWVudC5uYW1lIF1bIG1ldGhvZCBdID0gcHJldmlvdXMubWVzc2FnZTtcblxuXHRcdFx0cGFyYW0gPSB0eXBlb2YgcGFyYW0gPT09IFwic3RyaW5nXCIgJiYgeyB1cmw6IHBhcmFtIH0gfHwgcGFyYW07XG5cdFx0XHRvcHRpb25EYXRhU3RyaW5nID0gJC5wYXJhbSggJC5leHRlbmQoIHsgZGF0YTogdmFsdWUgfSwgcGFyYW0uZGF0YSApICk7XG5cdFx0XHRpZiAoIHByZXZpb3VzLm9sZCA9PT0gb3B0aW9uRGF0YVN0cmluZyApIHtcblx0XHRcdFx0cmV0dXJuIHByZXZpb3VzLnZhbGlkO1xuXHRcdFx0fVxuXG5cdFx0XHRwcmV2aW91cy5vbGQgPSBvcHRpb25EYXRhU3RyaW5nO1xuXHRcdFx0dmFsaWRhdG9yID0gdGhpcztcblx0XHRcdHRoaXMuc3RhcnRSZXF1ZXN0KCBlbGVtZW50ICk7XG5cdFx0XHRkYXRhID0ge307XG5cdFx0XHRkYXRhWyBlbGVtZW50Lm5hbWUgXSA9IHZhbHVlO1xuXHRcdFx0JC5hamF4KCAkLmV4dGVuZCggdHJ1ZSwge1xuXHRcdFx0XHRtb2RlOiBcImFib3J0XCIsXG5cdFx0XHRcdHBvcnQ6IFwidmFsaWRhdGVcIiArIGVsZW1lbnQubmFtZSxcblx0XHRcdFx0ZGF0YVR5cGU6IFwianNvblwiLFxuXHRcdFx0XHRkYXRhOiBkYXRhLFxuXHRcdFx0XHRjb250ZXh0OiB2YWxpZGF0b3IuY3VycmVudEZvcm0sXG5cdFx0XHRcdHN1Y2Nlc3M6IGZ1bmN0aW9uKCByZXNwb25zZSApIHtcblx0XHRcdFx0XHR2YXIgdmFsaWQgPSByZXNwb25zZSA9PT0gdHJ1ZSB8fCByZXNwb25zZSA9PT0gXCJ0cnVlXCIsXG5cdFx0XHRcdFx0XHRlcnJvcnMsIG1lc3NhZ2UsIHN1Ym1pdHRlZDtcblxuXHRcdFx0XHRcdHZhbGlkYXRvci5zZXR0aW5ncy5tZXNzYWdlc1sgZWxlbWVudC5uYW1lIF1bIG1ldGhvZCBdID0gcHJldmlvdXMub3JpZ2luYWxNZXNzYWdlO1xuXHRcdFx0XHRcdGlmICggdmFsaWQgKSB7XG5cdFx0XHRcdFx0XHRzdWJtaXR0ZWQgPSB2YWxpZGF0b3IuZm9ybVN1Ym1pdHRlZDtcblx0XHRcdFx0XHRcdHZhbGlkYXRvci5yZXNldEludGVybmFscygpO1xuXHRcdFx0XHRcdFx0dmFsaWRhdG9yLnRvSGlkZSA9IHZhbGlkYXRvci5lcnJvcnNGb3IoIGVsZW1lbnQgKTtcblx0XHRcdFx0XHRcdHZhbGlkYXRvci5mb3JtU3VibWl0dGVkID0gc3VibWl0dGVkO1xuXHRcdFx0XHRcdFx0dmFsaWRhdG9yLnN1Y2Nlc3NMaXN0LnB1c2goIGVsZW1lbnQgKTtcblx0XHRcdFx0XHRcdHZhbGlkYXRvci5pbnZhbGlkWyBlbGVtZW50Lm5hbWUgXSA9IGZhbHNlO1xuXHRcdFx0XHRcdFx0dmFsaWRhdG9yLnNob3dFcnJvcnMoKTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0ZXJyb3JzID0ge307XG5cdFx0XHRcdFx0XHRtZXNzYWdlID0gcmVzcG9uc2UgfHwgdmFsaWRhdG9yLmRlZmF1bHRNZXNzYWdlKCBlbGVtZW50LCB7IG1ldGhvZDogbWV0aG9kLCBwYXJhbWV0ZXJzOiB2YWx1ZSB9ICk7XG5cdFx0XHRcdFx0XHRlcnJvcnNbIGVsZW1lbnQubmFtZSBdID0gcHJldmlvdXMubWVzc2FnZSA9IG1lc3NhZ2U7XG5cdFx0XHRcdFx0XHR2YWxpZGF0b3IuaW52YWxpZFsgZWxlbWVudC5uYW1lIF0gPSB0cnVlO1xuXHRcdFx0XHRcdFx0dmFsaWRhdG9yLnNob3dFcnJvcnMoIGVycm9ycyApO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRwcmV2aW91cy52YWxpZCA9IHZhbGlkO1xuXHRcdFx0XHRcdHZhbGlkYXRvci5zdG9wUmVxdWVzdCggZWxlbWVudCwgdmFsaWQgKTtcblx0XHRcdFx0fVxuXHRcdFx0fSwgcGFyYW0gKSApO1xuXHRcdFx0cmV0dXJuIFwicGVuZGluZ1wiO1xuXHRcdH1cblx0fVxuXG59ICk7XG5cclxuLy8gQWpheCBtb2RlOiBhYm9ydFxuLy8gdXNhZ2U6ICQuYWpheCh7IG1vZGU6IFwiYWJvcnRcIlssIHBvcnQ6IFwidW5pcXVlcG9ydFwiXX0pO1xuLy8gaWYgbW9kZTpcImFib3J0XCIgaXMgdXNlZCwgdGhlIHByZXZpb3VzIHJlcXVlc3Qgb24gdGhhdCBwb3J0IChwb3J0IGNhbiBiZSB1bmRlZmluZWQpIGlzIGFib3J0ZWQgdmlhIFhNTEh0dHBSZXF1ZXN0LmFib3J0KClcblxudmFyIHBlbmRpbmdSZXF1ZXN0cyA9IHt9LFxuXHRhamF4O1xuXG4vLyBVc2UgYSBwcmVmaWx0ZXIgaWYgYXZhaWxhYmxlICgxLjUrKVxuaWYgKCAkLmFqYXhQcmVmaWx0ZXIgKSB7XG5cdCQuYWpheFByZWZpbHRlciggZnVuY3Rpb24oIHNldHRpbmdzLCBfLCB4aHIgKSB7XG5cdFx0dmFyIHBvcnQgPSBzZXR0aW5ncy5wb3J0O1xuXHRcdGlmICggc2V0dGluZ3MubW9kZSA9PT0gXCJhYm9ydFwiICkge1xuXHRcdFx0aWYgKCBwZW5kaW5nUmVxdWVzdHNbIHBvcnQgXSApIHtcblx0XHRcdFx0cGVuZGluZ1JlcXVlc3RzWyBwb3J0IF0uYWJvcnQoKTtcblx0XHRcdH1cblx0XHRcdHBlbmRpbmdSZXF1ZXN0c1sgcG9ydCBdID0geGhyO1xuXHRcdH1cblx0fSApO1xufSBlbHNlIHtcblxuXHQvLyBQcm94eSBhamF4XG5cdGFqYXggPSAkLmFqYXg7XG5cdCQuYWpheCA9IGZ1bmN0aW9uKCBzZXR0aW5ncyApIHtcblx0XHR2YXIgbW9kZSA9ICggXCJtb2RlXCIgaW4gc2V0dGluZ3MgPyBzZXR0aW5ncyA6ICQuYWpheFNldHRpbmdzICkubW9kZSxcblx0XHRcdHBvcnQgPSAoIFwicG9ydFwiIGluIHNldHRpbmdzID8gc2V0dGluZ3MgOiAkLmFqYXhTZXR0aW5ncyApLnBvcnQ7XG5cdFx0aWYgKCBtb2RlID09PSBcImFib3J0XCIgKSB7XG5cdFx0XHRpZiAoIHBlbmRpbmdSZXF1ZXN0c1sgcG9ydCBdICkge1xuXHRcdFx0XHRwZW5kaW5nUmVxdWVzdHNbIHBvcnQgXS5hYm9ydCgpO1xuXHRcdFx0fVxuXHRcdFx0cGVuZGluZ1JlcXVlc3RzWyBwb3J0IF0gPSBhamF4LmFwcGx5KCB0aGlzLCBhcmd1bWVudHMgKTtcblx0XHRcdHJldHVybiBwZW5kaW5nUmVxdWVzdHNbIHBvcnQgXTtcblx0XHR9XG5cdFx0cmV0dXJuIGFqYXguYXBwbHkoIHRoaXMsIGFyZ3VtZW50cyApO1xuXHR9O1xufVxucmV0dXJuICQ7XHJcbn0pKTsiXSwibmFtZXMiOlsiZmFjdG9yeSIsImRlZmluZSIsImFtZCIsIm1vZHVsZSIsIl90eXBlb2YiLCJleHBvcnRzIiwicmVxdWlyZSIsImpRdWVyeSIsIiQiLCJleHRlbmQiLCJmbiIsInZhbGlkYXRlIiwib3B0aW9ucyIsImxlbmd0aCIsImRlYnVnIiwid2luZG93IiwiY29uc29sZSIsIndhcm4iLCJ2YWxpZGF0b3IiLCJkYXRhIiwiYXR0ciIsInNldHRpbmdzIiwib25zdWJtaXQiLCJvbiIsImV2ZW50Iiwic3VibWl0QnV0dG9uIiwiY3VycmVudFRhcmdldCIsImhhc0NsYXNzIiwiY2FuY2VsU3VibWl0IiwidW5kZWZpbmVkIiwicHJldmVudERlZmF1bHQiLCJoYW5kbGUiLCJoaWRkZW4iLCJyZXN1bHQiLCJzdWJtaXRIYW5kbGVyIiwiZm9ybVN1Ym1pdHRlZCIsIm5hbWUiLCJ2YWwiLCJhcHBlbmRUbyIsImN1cnJlbnRGb3JtIiwiY2FsbCIsInJlbW92ZSIsImZvcm0iLCJwZW5kaW5nUmVxdWVzdCIsImZvY3VzSW52YWxpZCIsInZhbGlkIiwiZXJyb3JMaXN0IiwiaXMiLCJlYWNoIiwiZWxlbWVudCIsImNvbmNhdCIsInJ1bGVzIiwiY29tbWFuZCIsImFyZ3VtZW50IiwiaXNDb250ZW50RWRpdGFibGUiLCJzdGF0aWNSdWxlcyIsImV4aXN0aW5nUnVsZXMiLCJwYXJhbSIsImZpbHRlcmVkIiwiY2xvc2VzdCIsIm5vcm1hbGl6ZVJ1bGUiLCJtZXNzYWdlcyIsInNwbGl0IiwiaW5kZXgiLCJtZXRob2QiLCJub3JtYWxpemVSdWxlcyIsImNsYXNzUnVsZXMiLCJhdHRyaWJ1dGVSdWxlcyIsImRhdGFSdWxlcyIsInJlcXVpcmVkIiwicmVtb3RlIiwiZXhwciIsInBzZXVkb3MiLCJibGFuayIsImEiLCJ0cmltIiwiZmlsbGVkIiwidW5jaGVja2VkIiwicHJvcCIsImRlZmF1bHRzIiwiaW5pdCIsImZvcm1hdCIsInNvdXJjZSIsInBhcmFtcyIsImFyZ3VtZW50cyIsImFyZ3MiLCJtYWtlQXJyYXkiLCJ1bnNoaWZ0IiwiYXBwbHkiLCJjb25zdHJ1Y3RvciIsIkFycmF5Iiwic2xpY2UiLCJpIiwibiIsInJlcGxhY2UiLCJSZWdFeHAiLCJncm91cHMiLCJlcnJvckNsYXNzIiwicGVuZGluZ0NsYXNzIiwidmFsaWRDbGFzcyIsImVycm9yRWxlbWVudCIsImZvY3VzQ2xlYW51cCIsImVycm9yQ29udGFpbmVyIiwiZXJyb3JMYWJlbENvbnRhaW5lciIsImlnbm9yZSIsImlnbm9yZVRpdGxlIiwib25mb2N1c2luIiwibGFzdEFjdGl2ZSIsInVuaGlnaGxpZ2h0IiwiaGlkZVRoZXNlIiwiZXJyb3JzRm9yIiwib25mb2N1c291dCIsImNoZWNrYWJsZSIsInN1Ym1pdHRlZCIsIm9wdGlvbmFsIiwib25rZXl1cCIsImV4Y2x1ZGVkS2V5cyIsIndoaWNoIiwiZWxlbWVudFZhbHVlIiwiaW5BcnJheSIsImtleUNvZGUiLCJpbnZhbGlkIiwib25jbGljayIsInBhcmVudE5vZGUiLCJoaWdobGlnaHQiLCJ0eXBlIiwiZmluZEJ5TmFtZSIsImFkZENsYXNzIiwicmVtb3ZlQ2xhc3MiLCJzZXREZWZhdWx0cyIsImVtYWlsIiwidXJsIiwiZGF0ZSIsImRhdGVJU08iLCJudW1iZXIiLCJkaWdpdHMiLCJlcXVhbFRvIiwibWF4bGVuZ3RoIiwibWlubGVuZ3RoIiwicmFuZ2VsZW5ndGgiLCJyYW5nZSIsIm1heCIsIm1pbiIsInN0ZXAiLCJhdXRvQ3JlYXRlUmFuZ2VzIiwicHJvdG90eXBlIiwibGFiZWxDb250YWluZXIiLCJlcnJvckNvbnRleHQiLCJjb250YWluZXJzIiwiYWRkIiwidmFsdWVDYWNoZSIsInBlbmRpbmciLCJyZXNldCIsImtleSIsInZhbHVlIiwiZGVsZWdhdGUiLCJldmVudFR5cGUiLCJpbnZhbGlkSGFuZGxlciIsImNoZWNrRm9ybSIsImVycm9yTWFwIiwidHJpZ2dlckhhbmRsZXIiLCJzaG93RXJyb3JzIiwicHJlcGFyZUZvcm0iLCJlbGVtZW50cyIsImN1cnJlbnRFbGVtZW50cyIsImNoZWNrIiwiY2xlYW5FbGVtZW50IiwiY2xlYW4iLCJjaGVja0VsZW1lbnQiLCJ2YWxpZGF0aW9uVGFyZ2V0Rm9yIiwidiIsInJzIiwiZ3JvdXAiLCJwcmVwYXJlRWxlbWVudCIsInRlc3Rncm91cCIsInB1c2giLCJudW1iZXJPZkludmFsaWRzIiwidG9IaWRlIiwiZXJyb3JzIiwibWFwIiwibWVzc2FnZSIsInN1Y2Nlc3NMaXN0IiwiZ3JlcCIsImRlZmF1bHRTaG93RXJyb3JzIiwicmVzZXRGb3JtIiwiaGlkZUVycm9ycyIsInJlbW92ZURhdGEiLCJyZW1vdmVBdHRyIiwicmVzZXRFbGVtZW50cyIsIm9iamVjdExlbmd0aCIsIm9iaiIsImNvdW50Iiwibm90IiwidGV4dCIsImFkZFdyYXBwZXIiLCJoaWRlIiwic2l6ZSIsImZpbmRMYXN0QWN0aXZlIiwiZmlsdGVyIiwiZm9jdXMiLCJ0cmlnZ2VyIiwiZSIsInJ1bGVzQ2FjaGUiLCJmaW5kIiwiZXJyb3IiLCJzZWxlY3RvciIsImpvaW4iLCJyZXNldEludGVybmFscyIsInRvU2hvdyIsIiRlbGVtZW50IiwiaWR4IiwidmFsaWRpdHkiLCJiYWRJbnB1dCIsInN1YnN0ciIsImxhc3RJbmRleE9mIiwicnVsZXNDb3VudCIsImRlcGVuZGVuY3lNaXNtYXRjaCIsInJ1bGUiLCJub3JtYWxpemVyIiwicGFyYW1ldGVycyIsIm1ldGhvZHMiLCJmb3JtYXRBbmRBZGQiLCJsb2ciLCJpZCIsIlR5cGVFcnJvciIsImN1c3RvbURhdGFNZXNzYWdlIiwiY2hhckF0IiwidG9VcHBlckNhc2UiLCJzdWJzdHJpbmciLCJ0b0xvd2VyQ2FzZSIsImN1c3RvbU1lc3NhZ2UiLCJtIiwiU3RyaW5nIiwiZmluZERlZmluZWQiLCJkZWZhdWx0TWVzc2FnZSIsInRpdGxlIiwidGhlcmVnZXgiLCJ0ZXN0IiwidG9Ub2dnbGUiLCJ3cmFwcGVyIiwicGFyZW50Iiwic2hvd0xhYmVsIiwic3VjY2VzcyIsInZhbGlkRWxlbWVudHMiLCJzaG93IiwiaW52YWxpZEVsZW1lbnRzIiwicGxhY2UiLCJlcnJvcklEIiwiZWxlbWVudElEIiwiaWRPck5hbWUiLCJkZXNjcmliZWRCeSIsImh0bWwiLCJ3cmFwIiwiYXBwZW5kIiwiZXJyb3JQbGFjZW1lbnQiLCJpbnNlcnRBZnRlciIsInBhcmVudHMiLCJlc2NhcGVDc3NNZXRhIiwibWF0Y2giLCJkZXNjcmliZXIiLCJzdHJpbmciLCJnZXRMZW5ndGgiLCJub2RlTmFtZSIsImRlcGVuZCIsImRlcGVuZFR5cGVzIiwiYm9vbGVhbiIsIl9mdW5jdGlvbiIsInN0YXJ0UmVxdWVzdCIsInN0b3BSZXF1ZXN0Iiwic3VibWl0IiwicHJldmlvdXNWYWx1ZSIsIm9sZCIsImRlc3Ryb3kiLCJvZmYiLCJjbGFzc1J1bGVTZXR0aW5ncyIsImNyZWRpdGNhcmQiLCJhZGRDbGFzc1J1bGVzIiwiY2xhc3NOYW1lIiwiY2xhc3NlcyIsIm5vcm1hbGl6ZUF0dHJpYnV0ZVJ1bGUiLCJOdW1iZXIiLCJpc05hTiIsImdldEF0dHJpYnV0ZSIsImRlcGVuZHMiLCJrZWVwUnVsZSIsInBhcmFtZXRlciIsImlzRnVuY3Rpb24iLCJwYXJ0cyIsImlzQXJyYXkiLCJ0cmFuc2Zvcm1lZCIsImFkZE1ldGhvZCIsImNhbGxlZCIsIkRhdGUiLCJ0b1N0cmluZyIsImVycm9yTWVzc2FnZSIsInN1cHBvcnRlZFR5cGVzIiwicmUiLCJub3RTdXBwb3J0ZWQiLCJkZWNpbWFsUGxhY2VzIiwibnVtIiwidG9JbnQiLCJNYXRoIiwicm91bmQiLCJwb3ciLCJkZWNpbWFscyIsIkVycm9yIiwidGFyZ2V0IiwicHJldmlvdXMiLCJvcHRpb25EYXRhU3RyaW5nIiwib3JpZ2luYWxNZXNzYWdlIiwiYWpheCIsIm1vZGUiLCJwb3J0IiwiZGF0YVR5cGUiLCJjb250ZXh0IiwicmVzcG9uc2UiLCJwZW5kaW5nUmVxdWVzdHMiLCJhamF4UHJlZmlsdGVyIiwiXyIsInhociIsImFib3J0IiwiYWpheFNldHRpbmdzIl0sInNvdXJjZVJvb3QiOiIifQ==