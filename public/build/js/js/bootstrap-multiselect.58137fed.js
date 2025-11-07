(self["webpackChunk"] = self["webpackChunk"] || []).push([["js/bootstrap-multiselect"],{

/***/ "./assets/css/portoadmin/vendor/bootstrap-multiselect/js/bootstrap-multiselect.js":
/*!****************************************************************************************!*\
  !*** ./assets/css/portoadmin/vendor/bootstrap-multiselect/js/bootstrap-multiselect.js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

/* provided dependency */ var __webpack_provided_window_dot_jQuery = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
__webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
__webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
__webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
__webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
__webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");
__webpack_require__(/*! core-js/modules/es.array.index-of.js */ "./node_modules/core-js/modules/es.array.index-of.js");
__webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
__webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
__webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
__webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
__webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
__webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
__webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
__webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
/**
 * Bootstrap Multiselect (https://github.com/davidstutz/bootstrap-multiselect)
 * 
 * Apache License, Version 2.0:
 * Copyright (c) 2012 - 2015 David Stutz
 * 
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not
 * use this file except in compliance with the License. You may obtain a
 * copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations
 * under the License.
 * 
 * BSD 3-Clause License:
 * Copyright (c) 2012 - 2015 David Stutz
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *    - Redistributions of source code must retain the above copyright notice,
 *      this list of conditions and the following disclaimer.
 *    - Redistributions in binary form must reproduce the above copyright notice,
 *      this list of conditions and the following disclaimer in the documentation
 *      and/or other materials provided with the distribution.
 *    - Neither the name of David Stutz nor the names of its contributors may be
 *      used to endorse or promote products derived from this software without
 *      specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO,
 * THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR
 * PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR
 * CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 * EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
 * PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS;
 * OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY,
 * WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR
 * OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF
 * ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */
!function ($) {
  "use strict";

  // jshint ;_;
  if (typeof ko !== 'undefined' && ko.bindingHandlers && !ko.bindingHandlers.multiselect) {
    ko.bindingHandlers.multiselect = {
      after: ['options', 'value', 'selectedOptions'],
      init: function init(element, valueAccessor, allBindings, viewModel, bindingContext) {
        var $element = $(element);
        var config = ko.toJS(valueAccessor());
        $element.multiselect(config);
        if (allBindings.has('options')) {
          var options = allBindings.get('options');
          if (ko.isObservable(options)) {
            ko.computed({
              read: function read() {
                options();
                setTimeout(function () {
                  var ms = $element.data('multiselect');
                  if (ms) ms.updateOriginalOptions(); //Not sure how beneficial this is.
                  $element.multiselect('rebuild');
                }, 1);
              },
              disposeWhenNodeIsRemoved: element
            });
          }
        }

        //value and selectedOptions are two-way, so these will be triggered even by our own actions.
        //It needs some way to tell if they are triggered because of us or because of outside change.
        //It doesn't loop but it's a waste of processing.
        if (allBindings.has('value')) {
          var value = allBindings.get('value');
          if (ko.isObservable(value)) {
            ko.computed({
              read: function read() {
                value();
                setTimeout(function () {
                  $element.multiselect('refresh');
                }, 1);
              },
              disposeWhenNodeIsRemoved: element
            }).extend({
              rateLimit: 100,
              notifyWhenChangesStop: true
            });
          }
        }

        //Switched from arrayChange subscription to general subscription using 'refresh'.
        //Not sure performance is any better using 'select' and 'deselect'.
        if (allBindings.has('selectedOptions')) {
          var selectedOptions = allBindings.get('selectedOptions');
          if (ko.isObservable(selectedOptions)) {
            ko.computed({
              read: function read() {
                selectedOptions();
                setTimeout(function () {
                  $element.multiselect('refresh');
                }, 1);
              },
              disposeWhenNodeIsRemoved: element
            }).extend({
              rateLimit: 100,
              notifyWhenChangesStop: true
            });
          }
        }
        ko.utils.domNodeDisposal.addDisposeCallback(element, function () {
          $element.multiselect('destroy');
        });
      },
      update: function update(element, valueAccessor, allBindings, viewModel, bindingContext) {
        var $element = $(element);
        var config = ko.toJS(valueAccessor());
        $element.multiselect('setOptions', config);
        $element.multiselect('rebuild');
      }
    };
  }
  function forEach(array, callback) {
    for (var index = 0; index < array.length; ++index) {
      callback(array[index], index);
    }
  }

  /**
   * Constructor to create a new multiselect using the given select.
   *
   * @param {jQuery} select
   * @param {Object} options
   * @returns {Multiselect}
   */
  function Multiselect(select, options) {
    this.$select = $(select);

    // Placeholder via data attributes
    if (this.$select.attr("data-placeholder")) {
      options.nonSelectedText = this.$select.data("placeholder");
    }
    this.options = this.mergeOptions($.extend({}, options, this.$select.data()));

    // Initialization.
    // We have to clone to create a new reference.
    this.originalOptions = this.$select.clone()[0].options;
    this.query = '';
    this.searchTimeout = null;
    this.lastToggledInput = null;
    this.options.multiple = this.$select.attr('multiple') === "multiple";
    this.options.onChange = $.proxy(this.options.onChange, this);
    this.options.onDropdownShow = $.proxy(this.options.onDropdownShow, this);
    this.options.onDropdownHide = $.proxy(this.options.onDropdownHide, this);
    this.options.onDropdownShown = $.proxy(this.options.onDropdownShown, this);
    this.options.onDropdownHidden = $.proxy(this.options.onDropdownHidden, this);

    // Build select all if enabled.
    this.buildContainer();
    this.buildButton();
    this.buildDropdown();
    this.buildSelectAll();
    this.buildDropdownOptions();
    this.buildFilter();
    this.updateButtonText();
    this.updateSelectAll();
    if (this.options.disableIfEmpty && $('option', this.$select).length <= 0) {
      this.disable();
    }
    this.$select.hide().after(this.$container);
  }
  ;
  Multiselect.prototype = {
    defaults: {
      /**
       * Default text function will either print 'None selected' in case no
       * option is selected or a list of the selected options up to a length
       * of 3 selected options.
       * 
       * @param {jQuery} options
       * @param {jQuery} select
       * @returns {String}
       */
      buttonText: function buttonText(options, select) {
        if (options.length === 0) {
          return this.nonSelectedText;
        } else if (this.allSelectedText && options.length === $('option', $(select)).length && $('option', $(select)).length !== 1 && this.multiple) {
          if (this.selectAllNumber) {
            return this.allSelectedText + ' (' + options.length + ')';
          } else {
            return this.allSelectedText;
          }
        } else if (options.length > this.numberDisplayed) {
          return options.length + ' ' + this.nSelectedText;
        } else {
          var selected = '';
          var delimiter = this.delimiterText;
          options.each(function () {
            var label = $(this).attr('label') !== undefined ? $(this).attr('label') : $(this).text();
            selected += label + delimiter;
          });
          return selected.substr(0, selected.length - 2);
        }
      },
      /**
       * Updates the title of the button similar to the buttonText function.
       * 
       * @param {jQuery} options
       * @param {jQuery} select
       * @returns {@exp;selected@call;substr}
       */
      buttonTitle: function buttonTitle(options, select) {
        if (options.length === 0) {
          return this.nonSelectedText;
        } else {
          var selected = '';
          var delimiter = this.delimiterText;
          options.each(function () {
            var label = $(this).attr('label') !== undefined ? $(this).attr('label') : $(this).text();
            selected += label + delimiter;
          });
          return selected.substr(0, selected.length - 2);
        }
      },
      /**
       * Create a label.
       *
       * @param {jQuery} element
       * @returns {String}
       */
      optionLabel: function optionLabel(element) {
        return $(element).attr('label') || $(element).text();
      },
      /**
       * Triggered on change of the multiselect.
       * 
       * Not triggered when selecting/deselecting options manually.
       * 
       * @param {jQuery} option
       * @param {Boolean} checked
       */
      onChange: function onChange(option, checked) {},
      /**
       * Triggered when the dropdown is shown.
       *
       * @param {jQuery} event
       */
      onDropdownShow: function onDropdownShow(event) {},
      /**
       * Triggered when the dropdown is hidden.
       *
       * @param {jQuery} event
       */
      onDropdownHide: function onDropdownHide(event) {},
      /**
       * Triggered after the dropdown is shown.
       * 
       * @param {jQuery} event
       */
      onDropdownShown: function onDropdownShown(event) {},
      /**
       * Triggered after the dropdown is hidden.
       * 
       * @param {jQuery} event
       */
      onDropdownHidden: function onDropdownHidden(event) {},
      /**
       * Triggered on select all.
       */
      onSelectAll: function onSelectAll() {},
      enableHTML: false,
      buttonClass: 'btn btn-default',
      inheritClass: false,
      buttonWidth: 'auto',
      buttonContainer: '<div class="btn-group" />',
      dropRight: false,
      selectedClass: 'active',
      // Maximum height of the dropdown menu.
      // If maximum height is exceeded a scrollbar will be displayed.
      maxHeight: false,
      checkboxName: false,
      includeSelectAllOption: false,
      includeSelectAllIfMoreThan: 0,
      selectAllText: ' Select all',
      selectAllValue: 'multiselect-all',
      selectAllName: false,
      selectAllNumber: true,
      enableFiltering: false,
      enableCaseInsensitiveFiltering: false,
      enableClickableOptGroups: false,
      filterPlaceholder: 'Search',
      // possible options: 'text', 'value', 'both'
      filterBehavior: 'text',
      includeFilterClearBtn: true,
      preventInputChangeEvent: false,
      nonSelectedText: 'None selected',
      nSelectedText: 'selected',
      allSelectedText: 'All selected',
      numberDisplayed: 3,
      disableIfEmpty: false,
      delimiterText: ', ',
      templates: {
        button: '<button type="button" class="multiselect dropdown-toggle" data-toggle="dropdown"><span class="multiselect-selected-text"></span> <b class="caret"></b></button>',
        ul: '<ul class="multiselect-container dropdown-menu"></ul>',
        filter: '<li class="multiselect-item filter"><div class="input-group"><span class="input-group-addon"><i class="glyphicon glyphicon-search"></i></span><input class="form-control multiselect-search" type="text"></div></li>',
        filterClearBtn: '<span class="input-group-btn"><button class="btn btn-default multiselect-clear-filter" type="button"><i class="glyphicon glyphicon-remove-circle"></i></button></span>',
        li: '<li><a tabindex="0"><label></label></a></li>',
        divider: '<li class="multiselect-item divider"></li>',
        liGroup: '<li class="multiselect-item multiselect-group"><label></label></li>'
      }
    },
    constructor: Multiselect,
    /**
     * Builds the container of the multiselect.
     */
    buildContainer: function buildContainer() {
      this.$container = $(this.options.buttonContainer);
      this.$container.on('show.bs.dropdown', this.options.onDropdownShow);
      this.$container.on('hide.bs.dropdown', this.options.onDropdownHide);
      this.$container.on('shown.bs.dropdown', this.options.onDropdownShown);
      this.$container.on('hidden.bs.dropdown', this.options.onDropdownHidden);
    },
    /**
     * Builds the button of the multiselect.
     */
    buildButton: function buildButton() {
      this.$button = $(this.options.templates.button).addClass(this.options.buttonClass);
      if (this.$select.attr('class') && this.options.inheritClass) {
        this.$button.addClass(this.$select.attr('class'));
      }
      // Adopt active state.
      if (this.$select.prop('disabled')) {
        this.disable();
      } else {
        this.enable();
      }

      // Manually add button width if set.
      if (this.options.buttonWidth && this.options.buttonWidth !== 'auto') {
        this.$button.css({
          'width': this.options.buttonWidth,
          'overflow': 'hidden',
          'text-overflow': 'ellipsis'
        });
        this.$container.css({
          'width': this.options.buttonWidth
        });
      }

      // Keep the tab index from the select.
      var tabindex = this.$select.attr('tabindex');
      if (tabindex) {
        this.$button.attr('tabindex', tabindex);
      }
      this.$container.prepend(this.$button);
    },
    /**
     * Builds the ul representing the dropdown menu.
     */
    buildDropdown: function buildDropdown() {
      // Build ul.
      this.$ul = $(this.options.templates.ul);
      if (this.options.dropRight) {
        this.$ul.addClass('pull-right');
      }

      // Set max height of dropdown menu to activate auto scrollbar.
      if (this.options.maxHeight) {
        // TODO: Add a class for this option to move the css declarations.
        this.$ul.css({
          'max-height': this.options.maxHeight + 'px',
          'overflow-y': 'auto',
          'overflow-x': 'hidden'
        });
      }
      this.$container.append(this.$ul);
    },
    /**
     * Build the dropdown options and binds all nessecary events.
     * 
     * Uses createDivider and createOptionValue to create the necessary options.
     */
    buildDropdownOptions: function buildDropdownOptions() {
      this.$select.children().each($.proxy(function (index, element) {
        var $element = $(element);
        // Support optgroups and options without a group simultaneously.
        var tag = $element.prop('tagName').toLowerCase();
        if ($element.prop('value') === this.options.selectAllValue) {
          return;
        }
        if (tag === 'optgroup') {
          this.createOptgroup(element);
        } else if (tag === 'option') {
          if ($element.data('role') === 'divider') {
            this.createDivider();
          } else {
            this.createOptionValue(element);
          }
        }

        // Other illegal tags will be ignored.
      }, this));

      // Bind the change event on the dropdown elements.
      $('li input', this.$ul).on('change', $.proxy(function (event) {
        var $target = $(event.target);
        var checked = $target.prop('checked') || false;
        var isSelectAllOption = $target.val() === this.options.selectAllValue;

        // Apply or unapply the configured selected class.
        if (this.options.selectedClass) {
          if (checked) {
            $target.closest('li').addClass(this.options.selectedClass);
          } else {
            $target.closest('li').removeClass(this.options.selectedClass);
          }
        }

        // Get the corresponding option.
        var value = $target.val();
        var $option = this.getOptionByValue(value);
        var $optionsNotThis = $('option', this.$select).not($option);
        var $checkboxesNotThis = $('input', this.$container).not($target);
        if (isSelectAllOption) {
          if (checked) {
            this.selectAll();
          } else {
            this.deselectAll();
          }
        }
        if (!isSelectAllOption) {
          if (checked) {
            $option.prop('selected', true);
            if (this.options.multiple) {
              // Simply select additional option.
              $option.prop('selected', true);
            } else {
              // Unselect all other options and corresponding checkboxes.
              if (this.options.selectedClass) {
                $($checkboxesNotThis).closest('li').removeClass(this.options.selectedClass);
              }
              $($checkboxesNotThis).prop('checked', false);
              $optionsNotThis.prop('selected', false);

              // It's a single selection, so close.
              this.$button.click();
            }
            if (this.options.selectedClass === "active") {
              $optionsNotThis.closest("a").css("outline", "");
            }
          } else {
            // Unselect option.
            $option.prop('selected', false);
          }
        }
        this.$select.change();
        this.updateButtonText();
        this.updateSelectAll();
        this.options.onChange($option, checked);
        if (this.options.preventInputChangeEvent) {
          return false;
        }
      }, this));
      $('li a', this.$ul).on('mousedown', function (e) {
        if (e.shiftKey) {
          // Prevent selecting text by Shift+click
          return false;
        }
      });
      $('li a', this.$ul).on('touchstart click', $.proxy(function (event) {
        event.stopPropagation();
        var $target = $(event.target);
        if (event.shiftKey && this.options.multiple) {
          if ($target.is("label")) {
            // Handles checkbox selection manually (see https://github.com/davidstutz/bootstrap-multiselect/issues/431)
            event.preventDefault();
            $target = $target.find("input");
            $target.prop("checked", !$target.prop("checked"));
          }
          var checked = $target.prop('checked') || false;
          if (this.lastToggledInput !== null && this.lastToggledInput !== $target) {
            // Make sure we actually have a range
            var from = $target.closest("li").index();
            var to = this.lastToggledInput.closest("li").index();
            if (from > to) {
              // Swap the indices
              var tmp = to;
              to = from;
              from = tmp;
            }

            // Make sure we grab all elements since slice excludes the last index
            ++to;

            // Change the checkboxes and underlying options
            var range = this.$ul.find("li").slice(from, to).find("input");
            range.prop('checked', checked);
            if (this.options.selectedClass) {
              range.closest('li').toggleClass(this.options.selectedClass, checked);
            }
            for (var i = 0, j = range.length; i < j; i++) {
              var $checkbox = $(range[i]);
              var $option = this.getOptionByValue($checkbox.val());
              $option.prop('selected', checked);
            }
          }

          // Trigger the select "change" event
          $target.trigger("change");
        }

        // Remembers last clicked option
        if ($target.is("input") && !$target.closest("li").is(".multiselect-item")) {
          this.lastToggledInput = $target;
        }
        $target.blur();
      }, this));

      // Keyboard support.
      this.$container.off('keydown.multiselect').on('keydown.multiselect', $.proxy(function (event) {
        if ($('input[type="text"]', this.$container).is(':focus')) {
          return;
        }
        if (event.keyCode === 9 && this.$container.hasClass('open')) {
          this.$button.click();
        } else {
          var $items = $(this.$container).find("li:not(.divider):not(.disabled) a").filter(":visible");
          if (!$items.length) {
            return;
          }
          var index = $items.index($items.filter(':focus'));

          // Navigation up.
          if (event.keyCode === 38 && index > 0) {
            index--;
          }
          // Navigate down.
          else if (event.keyCode === 40 && index < $items.length - 1) {
            index++;
          } else if (!~index) {
            index = 0;
          }
          var $current = $items.eq(index);
          $current.focus();
          if (event.keyCode === 32 || event.keyCode === 13) {
            var $checkbox = $current.find('input');
            $checkbox.prop("checked", !$checkbox.prop("checked"));
            $checkbox.change();
          }
          event.stopPropagation();
          event.preventDefault();
        }
      }, this));
      if (this.options.enableClickableOptGroups && this.options.multiple) {
        $('li.multiselect-group', this.$ul).on('click', $.proxy(function (event) {
          event.stopPropagation();
          var group = $(event.target).parent();

          // Search all option in optgroup
          var $options = group.nextUntil('li.multiselect-group');
          var $visibleOptions = $options.filter(":visible:not(.disabled)");

          // check or uncheck items
          var allChecked = true;
          var optionInputs = $visibleOptions.find('input');
          optionInputs.each(function () {
            allChecked = allChecked && $(this).prop('checked');
          });
          optionInputs.prop('checked', !allChecked).trigger('change');
        }, this));
      }
    },
    /**
     * Create an option using the given select option.
     *
     * @param {jQuery} element
     */
    createOptionValue: function createOptionValue(element) {
      var $element = $(element);
      if ($element.is(':selected')) {
        $element.prop('selected', true);
      }

      // Support the label attribute on options.
      var label = this.options.optionLabel(element);
      var value = $element.val();
      var inputType = this.options.multiple ? "checkbox" : "radio";
      var $li = $(this.options.templates.li);
      var $label = $('label', $li);
      $label.addClass(inputType);
      if (this.options.enableHTML) {
        $label.html(" " + label);
      } else {
        $label.text(" " + label);
      }
      var $checkbox = $('<input/>').attr('type', inputType);
      if (this.options.checkboxName) {
        $checkbox.attr('name', this.options.checkboxName);
      }
      $label.prepend($checkbox);
      var selected = $element.prop('selected') || false;
      $checkbox.val(value);
      if (value === this.options.selectAllValue) {
        $li.addClass("multiselect-item multiselect-all");
        $checkbox.parent().parent().addClass('multiselect-all');
      }
      $label.attr('title', $element.attr('title'));
      this.$ul.append($li);
      if ($element.is(':disabled')) {
        $checkbox.attr('disabled', 'disabled').prop('disabled', true).closest('a').attr("tabindex", "-1").closest('li').addClass('disabled');
      }
      $checkbox.prop('checked', selected);
      if (selected && this.options.selectedClass) {
        $checkbox.closest('li').addClass(this.options.selectedClass);
      }
    },
    /**
     * Creates a divider using the given select option.
     *
     * @param {jQuery} element
     */
    createDivider: function createDivider(element) {
      var $divider = $(this.options.templates.divider);
      this.$ul.append($divider);
    },
    /**
     * Creates an optgroup.
     *
     * @param {jQuery} group
     */
    createOptgroup: function createOptgroup(group) {
      var groupName = $(group).prop('label');

      // Add a header for the group.
      var $li = $(this.options.templates.liGroup);
      if (this.options.enableHTML) {
        $('label', $li).html(groupName);
      } else {
        $('label', $li).text(groupName);
      }
      if (this.options.enableClickableOptGroups) {
        $li.addClass('multiselect-group-clickable');
      }
      this.$ul.append($li);
      if ($(group).is(':disabled')) {
        $li.addClass('disabled');
      }

      // Add the options of the group.
      $('option', group).each($.proxy(function (index, element) {
        this.createOptionValue(element);
      }, this));
    },
    /**
     * Build the selct all.
     * 
     * Checks if a select all has already been created.
     */
    buildSelectAll: function buildSelectAll() {
      if (typeof this.options.selectAllValue === 'number') {
        this.options.selectAllValue = this.options.selectAllValue.toString();
      }
      var alreadyHasSelectAll = this.hasSelectAll();
      if (!alreadyHasSelectAll && this.options.includeSelectAllOption && this.options.multiple && $('option', this.$select).length > this.options.includeSelectAllIfMoreThan) {
        // Check whether to add a divider after the select all.
        if (this.options.includeSelectAllDivider) {
          this.$ul.prepend($(this.options.templates.divider));
        }
        var $li = $(this.options.templates.li);
        $('label', $li).addClass("checkbox");
        if (this.options.enableHTML) {
          $('label', $li).html(" " + this.options.selectAllText);
        } else {
          $('label', $li).text(" " + this.options.selectAllText);
        }
        if (this.options.selectAllName) {
          $('label', $li).prepend('<input type="checkbox" name="' + this.options.selectAllName + '" />');
        } else {
          $('label', $li).prepend('<input type="checkbox" />');
        }
        var $checkbox = $('input', $li);
        $checkbox.val(this.options.selectAllValue);
        $li.addClass("multiselect-item multiselect-all");
        $checkbox.parent().parent().addClass('multiselect-all');
        this.$ul.prepend($li);
        $checkbox.prop('checked', false);
      }
    },
    /**
     * Builds the filter.
     */
    buildFilter: function buildFilter() {
      // Build filter if filtering OR case insensitive filtering is enabled and the number of options exceeds (or equals) enableFilterLength.
      if (this.options.enableFiltering || this.options.enableCaseInsensitiveFiltering) {
        var enableFilterLength = Math.max(this.options.enableFiltering, this.options.enableCaseInsensitiveFiltering);
        if (this.$select.find('option').length >= enableFilterLength) {
          this.$filter = $(this.options.templates.filter);
          $('input', this.$filter).attr('placeholder', this.options.filterPlaceholder);

          // Adds optional filter clear button
          if (this.options.includeFilterClearBtn) {
            var clearBtn = $(this.options.templates.filterClearBtn);
            clearBtn.on('click', $.proxy(function (event) {
              clearTimeout(this.searchTimeout);
              this.$filter.find('.multiselect-search').val('');
              $('li', this.$ul).show().removeClass("filter-hidden");
              this.updateSelectAll();
            }, this));
            this.$filter.find('.input-group').append(clearBtn);
          }
          this.$ul.prepend(this.$filter);
          this.$filter.val(this.query).on('click', function (event) {
            event.stopPropagation();
          }).on('input keydown', $.proxy(function (event) {
            // Cancel enter key default behaviour
            if (event.which === 13) {
              event.preventDefault();
            }

            // This is useful to catch "keydown" events after the browser has updated the control.
            clearTimeout(this.searchTimeout);
            this.searchTimeout = this.asyncFunction($.proxy(function () {
              if (this.query !== event.target.value) {
                this.query = event.target.value;
                var currentGroup, currentGroupVisible;
                $.each($('li', this.$ul), $.proxy(function (index, element) {
                  var value = $('input', element).length > 0 ? $('input', element).val() : "";
                  var text = $('label', element).text();
                  var filterCandidate = '';
                  if (this.options.filterBehavior === 'text') {
                    filterCandidate = text;
                  } else if (this.options.filterBehavior === 'value') {
                    filterCandidate = value;
                  } else if (this.options.filterBehavior === 'both') {
                    filterCandidate = text + '\n' + value;
                  }
                  if (value !== this.options.selectAllValue && text) {
                    // By default lets assume that element is not
                    // interesting for this search.
                    var showElement = false;
                    if (this.options.enableCaseInsensitiveFiltering && filterCandidate.toLowerCase().indexOf(this.query.toLowerCase()) > -1) {
                      showElement = true;
                    } else if (filterCandidate.indexOf(this.query) > -1) {
                      showElement = true;
                    }

                    // Toggle current element (group or group item) according to showElement boolean.
                    $(element).toggle(showElement).toggleClass('filter-hidden', !showElement);

                    // Differentiate groups and group items.
                    if ($(element).hasClass('multiselect-group')) {
                      // Remember group status.
                      currentGroup = element;
                      currentGroupVisible = showElement;
                    } else {
                      // Show group name when at least one of its items is visible.
                      if (showElement) {
                        $(currentGroup).show().removeClass('filter-hidden');
                      }

                      // Show all group items when group name satisfies filter.
                      if (!showElement && currentGroupVisible) {
                        $(element).show().removeClass('filter-hidden');
                      }
                    }
                  }
                }, this));
              }
              this.updateSelectAll();
            }, this), 300, this);
          }, this));
        }
      }
    },
    /**
     * Unbinds the whole plugin.
     */
    destroy: function destroy() {
      this.$container.remove();
      this.$select.show();
      this.$select.data('multiselect', null);
    },
    /**
     * Refreshs the multiselect based on the selected options of the select.
     */
    refresh: function refresh() {
      $('option', this.$select).each($.proxy(function (index, element) {
        var $input = $('li input', this.$ul).filter(function () {
          return $(this).val() === $(element).val();
        });
        if ($(element).is(':selected')) {
          $input.prop('checked', true);
          if (this.options.selectedClass) {
            $input.closest('li').addClass(this.options.selectedClass);
          }
        } else {
          $input.prop('checked', false);
          if (this.options.selectedClass) {
            $input.closest('li').removeClass(this.options.selectedClass);
          }
        }
        if ($(element).is(":disabled")) {
          $input.attr('disabled', 'disabled').prop('disabled', true).closest('li').addClass('disabled');
        } else {
          $input.prop('disabled', false).closest('li').removeClass('disabled');
        }
      }, this));
      this.updateButtonText();
      this.updateSelectAll();
    },
    /**
     * Select all options of the given values.
     * 
     * If triggerOnChange is set to true, the on change event is triggered if
     * and only if one value is passed.
     * 
     * @param {Array} selectValues
     * @param {Boolean} triggerOnChange
     */
    select: function select(selectValues, triggerOnChange) {
      if (!$.isArray(selectValues)) {
        selectValues = [selectValues];
      }
      for (var i = 0; i < selectValues.length; i++) {
        var value = selectValues[i];
        if (value === null || value === undefined) {
          continue;
        }
        var $option = this.getOptionByValue(value);
        var $checkbox = this.getInputByValue(value);
        if ($option === undefined || $checkbox === undefined) {
          continue;
        }
        if (!this.options.multiple) {
          this.deselectAll(false);
        }
        if (this.options.selectedClass) {
          $checkbox.closest('li').addClass(this.options.selectedClass);
        }
        $checkbox.prop('checked', true);
        $option.prop('selected', true);
        if (triggerOnChange) {
          this.options.onChange($option, true);
        }
      }
      this.updateButtonText();
      this.updateSelectAll();
    },
    /**
     * Clears all selected items.
     */
    clearSelection: function clearSelection() {
      this.deselectAll(false);
      this.updateButtonText();
      this.updateSelectAll();
    },
    /**
     * Deselects all options of the given values.
     * 
     * If triggerOnChange is set to true, the on change event is triggered, if
     * and only if one value is passed.
     * 
     * @param {Array} deselectValues
     * @param {Boolean} triggerOnChange
     */
    deselect: function deselect(deselectValues, triggerOnChange) {
      if (!$.isArray(deselectValues)) {
        deselectValues = [deselectValues];
      }
      for (var i = 0; i < deselectValues.length; i++) {
        var value = deselectValues[i];
        if (value === null || value === undefined) {
          continue;
        }
        var $option = this.getOptionByValue(value);
        var $checkbox = this.getInputByValue(value);
        if ($option === undefined || $checkbox === undefined) {
          continue;
        }
        if (this.options.selectedClass) {
          $checkbox.closest('li').removeClass(this.options.selectedClass);
        }
        $checkbox.prop('checked', false);
        $option.prop('selected', false);
        if (triggerOnChange) {
          this.options.onChange($option, false);
        }
      }
      this.updateButtonText();
      this.updateSelectAll();
    },
    /**
     * Selects all enabled & visible options.
     *
     * If justVisible is true or not specified, only visible options are selected.
     *
     * @param {Boolean} justVisible
     * @param {Boolean} triggerOnSelectAll
     */
    selectAll: function selectAll(justVisible, triggerOnSelectAll) {
      var justVisible = typeof justVisible === 'undefined' ? true : justVisible;
      var allCheckboxes = $("li input[type='checkbox']:enabled", this.$ul);
      var visibleCheckboxes = allCheckboxes.filter(":visible");
      var allCheckboxesCount = allCheckboxes.length;
      var visibleCheckboxesCount = visibleCheckboxes.length;
      if (justVisible) {
        visibleCheckboxes.prop('checked', true);
        $("li:not(.divider):not(.disabled)", this.$ul).filter(":visible").addClass(this.options.selectedClass);
      } else {
        allCheckboxes.prop('checked', true);
        $("li:not(.divider):not(.disabled)", this.$ul).addClass(this.options.selectedClass);
      }
      if (allCheckboxesCount === visibleCheckboxesCount || justVisible === false) {
        $("option:enabled", this.$select).prop('selected', true);
      } else {
        var values = visibleCheckboxes.map(function () {
          return $(this).val();
        }).get();
        $("option:enabled", this.$select).filter(function (index) {
          return $.inArray($(this).val(), values) !== -1;
        }).prop('selected', true);
      }
      if (triggerOnSelectAll) {
        this.options.onSelectAll();
      }
    },
    /**
     * Deselects all options.
     * 
     * If justVisible is true or not specified, only visible options are deselected.
     * 
     * @param {Boolean} justVisible
     */
    deselectAll: function deselectAll(justVisible) {
      var justVisible = typeof justVisible === 'undefined' ? true : justVisible;
      if (justVisible) {
        var visibleCheckboxes = $("li input[type='checkbox']:not(:disabled)", this.$ul).filter(":visible");
        visibleCheckboxes.prop('checked', false);
        var values = visibleCheckboxes.map(function () {
          return $(this).val();
        }).get();
        $("option:enabled", this.$select).filter(function (index) {
          return $.inArray($(this).val(), values) !== -1;
        }).prop('selected', false);
        if (this.options.selectedClass) {
          $("li:not(.divider):not(.disabled)", this.$ul).filter(":visible").removeClass(this.options.selectedClass);
        }
      } else {
        $("li input[type='checkbox']:enabled", this.$ul).prop('checked', false);
        $("option:enabled", this.$select).prop('selected', false);
        if (this.options.selectedClass) {
          $("li:not(.divider):not(.disabled)", this.$ul).removeClass(this.options.selectedClass);
        }
      }
    },
    /**
     * Rebuild the plugin.
     * 
     * Rebuilds the dropdown, the filter and the select all option.
     */
    rebuild: function rebuild() {
      this.$ul.html('');

      // Important to distinguish between radios and checkboxes.
      this.options.multiple = this.$select.attr('multiple') === "multiple";
      this.buildSelectAll();
      this.buildDropdownOptions();
      this.buildFilter();
      this.updateButtonText();
      this.updateSelectAll();
      if (this.options.disableIfEmpty && $('option', this.$select).length <= 0) {
        this.disable();
      } else {
        this.enable();
      }
      if (this.options.dropRight) {
        this.$ul.addClass('pull-right');
      }
    },
    /**
     * The provided data will be used to build the dropdown.
     */
    dataprovider: function dataprovider(_dataprovider) {
      var groupCounter = 0;
      var $select = this.$select.empty();
      $.each(_dataprovider, function (index, option) {
        var $tag;
        if ($.isArray(option.children)) {
          // create optiongroup tag
          groupCounter++;
          $tag = $('<optgroup/>').attr({
            label: option.label || 'Group ' + groupCounter,
            disabled: !!option.disabled
          });
          forEach(option.children, function (subOption) {
            // add children option tags
            $tag.append($('<option/>').attr({
              value: subOption.value,
              label: subOption.label || subOption.value,
              title: subOption.title,
              selected: !!subOption.selected,
              disabled: !!subOption.disabled
            }));
          });
        } else {
          $tag = $('<option/>').attr({
            value: option.value,
            label: option.label || option.value,
            title: option.title,
            selected: !!option.selected,
            disabled: !!option.disabled
          });
        }
        $select.append($tag);
      });
      this.rebuild();
    },
    /**
     * Enable the multiselect.
     */
    enable: function enable() {
      this.$select.prop('disabled', false);
      this.$button.prop('disabled', false).removeClass('disabled');
    },
    /**
     * Disable the multiselect.
     */
    disable: function disable() {
      this.$select.prop('disabled', true);
      this.$button.prop('disabled', true).addClass('disabled');
    },
    /**
     * Set the options.
     *
     * @param {Array} options
     */
    setOptions: function setOptions(options) {
      this.options = this.mergeOptions(options);
    },
    /**
     * Merges the given options with the default options.
     *
     * @param {Array} options
     * @returns {Array}
     */
    mergeOptions: function mergeOptions(options) {
      return $.extend(true, {}, this.defaults, this.options, options);
    },
    /**
     * Checks whether a select all checkbox is present.
     *
     * @returns {Boolean}
     */
    hasSelectAll: function hasSelectAll() {
      return $('li.multiselect-all', this.$ul).length > 0;
    },
    /**
     * Updates the select all checkbox based on the currently displayed and selected checkboxes.
     */
    updateSelectAll: function updateSelectAll() {
      if (this.hasSelectAll()) {
        var allBoxes = $("li:not(.multiselect-item):not(.filter-hidden) input:enabled", this.$ul);
        var allBoxesLength = allBoxes.length;
        var checkedBoxesLength = allBoxes.filter(":checked").length;
        var selectAllLi = $("li.multiselect-all", this.$ul);
        var selectAllInput = selectAllLi.find("input");
        if (checkedBoxesLength > 0 && checkedBoxesLength === allBoxesLength) {
          selectAllInput.prop("checked", true);
          selectAllLi.addClass(this.options.selectedClass);
          this.options.onSelectAll();
        } else {
          selectAllInput.prop("checked", false);
          selectAllLi.removeClass(this.options.selectedClass);
        }
      }
    },
    /**
     * Update the button text and its title based on the currently selected options.
     */
    updateButtonText: function updateButtonText() {
      var options = this.getSelected();

      // First update the displayed button text.
      if (this.options.enableHTML) {
        $('.multiselect .multiselect-selected-text', this.$container).html(this.options.buttonText(options, this.$select));
      } else {
        $('.multiselect .multiselect-selected-text', this.$container).text(this.options.buttonText(options, this.$select));
      }

      // Now update the title attribute of the button.
      $('.multiselect', this.$container).attr('title', this.options.buttonTitle(options, this.$select));
    },
    /**
     * Get all selected options.
     *
     * @returns {jQUery}
     */
    getSelected: function getSelected() {
      return $('option', this.$select).filter(":selected");
    },
    /**
     * Gets a select option by its value.
     *
     * @param {String} value
     * @returns {jQuery}
     */
    getOptionByValue: function getOptionByValue(value) {
      var options = $('option', this.$select);
      var valueToCompare = value.toString();
      for (var i = 0; i < options.length; i = i + 1) {
        var option = options[i];
        if (option.value === valueToCompare) {
          return $(option);
        }
      }
    },
    /**
     * Get the input (radio/checkbox) by its value.
     *
     * @param {String} value
     * @returns {jQuery}
     */
    getInputByValue: function getInputByValue(value) {
      var checkboxes = $('li input', this.$ul);
      var valueToCompare = value.toString();
      for (var i = 0; i < checkboxes.length; i = i + 1) {
        var checkbox = checkboxes[i];
        if (checkbox.value === valueToCompare) {
          return $(checkbox);
        }
      }
    },
    /**
     * Used for knockout integration.
     */
    updateOriginalOptions: function updateOriginalOptions() {
      this.originalOptions = this.$select.clone()[0].options;
    },
    asyncFunction: function asyncFunction(callback, timeout, self) {
      var args = Array.prototype.slice.call(arguments, 3);
      return setTimeout(function () {
        callback.apply(self || window, args);
      }, timeout);
    },
    setAllSelectedText: function setAllSelectedText(allSelectedText) {
      this.options.allSelectedText = allSelectedText;
      this.updateButtonText();
    }
  };
  $.fn.multiselect = function (option, parameter, extraOptions) {
    return this.each(function () {
      var data = $(this).data('multiselect');
      var options = _typeof(option) === 'object' && option;

      // Initialize the multiselect.
      if (!data) {
        data = new Multiselect(this, options);
        $(this).data('multiselect', data);
      }

      // Call multiselect method.
      if (typeof option === 'string') {
        data[option](parameter, extraOptions);
        if (option === 'destroy') {
          $(this).data('multiselect', false);
        }
      }
    });
  };
  $.fn.multiselect.Constructor = Multiselect;
  $(function () {
    $("select[data-role=multiselect]").multiselect();
  });
}(__webpack_provided_window_dot_jQuery);

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_internals_export_js","vendors-node_modules_core-js_internals_add-to-unscopables_js-node_modules_core-js_internals_a-09983a","vendors-node_modules_core-js_internals_array-slice_js-node_modules_core-js_internals_function-caeab8","vendors-node_modules_core-js_modules_es_string_iterator_js-node_modules_core-js_modules_es_sy-23bad7","vendors-node_modules_jquery_dist_jquery_js","vendors-node_modules_core-js_modules_es_array_filter_js-node_modules_core-js_modules_es_array-e4a735"], () => (__webpack_exec__("./assets/css/portoadmin/vendor/bootstrap-multiselect/js/bootstrap-multiselect.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QixJQUFJekQsSUFBSSxHQUFHdEIsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDc0IsSUFBSSxDQUFDLGFBQWEsQ0FBQztNQUN0QyxJQUFJUCxPQUFPLEdBQUdrUCxPQUFBLENBQU8zSyxNQUFNLE1BQUssUUFBUSxJQUFJQSxNQUFNOztNQUVsRDtNQUNBLElBQUksQ0FBQ2hFLElBQUksRUFBRTtRQUNQQSxJQUFJLEdBQUcsSUFBSWlCLFdBQVcsQ0FBQyxJQUFJLEVBQUV4QixPQUFPLENBQUM7UUFDckNmLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQ3NCLElBQUksQ0FBQyxhQUFhLEVBQUVBLElBQUksQ0FBQztNQUNyQzs7TUFFQTtNQUNBLElBQUksT0FBT2dFLE1BQU0sS0FBSyxRQUFRLEVBQUU7UUFDNUJoRSxJQUFJLENBQUNnRSxNQUFNLENBQUMsQ0FBQ3lLLFNBQVMsRUFBRUMsWUFBWSxDQUFDO1FBRXJDLElBQUkxSyxNQUFNLEtBQUssU0FBUyxFQUFFO1VBQ3RCdEYsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDc0IsSUFBSSxDQUFDLGFBQWEsRUFBRSxLQUFLLENBQUM7UUFDdEM7TUFDSjtJQUNKLENBQUMsQ0FBQztFQUNOLENBQUM7RUFFRHRCLENBQUMsQ0FBQzhQLEVBQUUsQ0FBQzNQLFdBQVcsQ0FBQytQLFdBQVcsR0FBRzNOLFdBQVc7RUFFMUN2QyxDQUFDLENBQUMsWUFBVztJQUNUQSxDQUFDLENBQUMsK0JBQStCLENBQUMsQ0FBQ0csV0FBVyxDQUFDLENBQUM7RUFDcEQsQ0FBQyxDQUFDO0FBRU4sQ0FBQyxDQUFDeVAsb0NBQWEsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2Nzcy9wb3J0b2FkbWluL3ZlbmRvci9ib290c3RyYXAtbXVsdGlzZWxlY3QvanMvYm9vdHN0cmFwLW11bHRpc2VsZWN0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQm9vdHN0cmFwIE11bHRpc2VsZWN0IChodHRwczovL2dpdGh1Yi5jb20vZGF2aWRzdHV0ei9ib290c3RyYXAtbXVsdGlzZWxlY3QpXG4gKiBcbiAqIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMDpcbiAqIENvcHlyaWdodCAoYykgMjAxMiAtIDIwMTUgRGF2aWQgU3R1dHpcbiAqIFxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3RcbiAqIHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYVxuICogY29weSBvZiB0aGUgTGljZW5zZSBhdCBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqIFxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUXG4gKiBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFNlZSB0aGVcbiAqIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zXG4gKiB1bmRlciB0aGUgTGljZW5zZS5cbiAqIFxuICogQlNEIDMtQ2xhdXNlIExpY2Vuc2U6XG4gKiBDb3B5cmlnaHQgKGMpIDIwMTIgLSAyMDE1IERhdmlkIFN0dXR6XG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogXG4gKiBSZWRpc3RyaWJ1dGlvbiBhbmQgdXNlIGluIHNvdXJjZSBhbmQgYmluYXJ5IGZvcm1zLCB3aXRoIG9yIHdpdGhvdXRcbiAqIG1vZGlmaWNhdGlvbiwgYXJlIHBlcm1pdHRlZCBwcm92aWRlZCB0aGF0IHRoZSBmb2xsb3dpbmcgY29uZGl0aW9ucyBhcmUgbWV0OlxuICogICAgLSBSZWRpc3RyaWJ1dGlvbnMgb2Ygc291cmNlIGNvZGUgbXVzdCByZXRhaW4gdGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UsXG4gKiAgICAgIHRoaXMgbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXIuXG4gKiAgICAtIFJlZGlzdHJpYnV0aW9ucyBpbiBiaW5hcnkgZm9ybSBtdXN0IHJlcHJvZHVjZSB0aGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSxcbiAqICAgICAgdGhpcyBsaXN0IG9mIGNvbmRpdGlvbnMgYW5kIHRoZSBmb2xsb3dpbmcgZGlzY2xhaW1lciBpbiB0aGUgZG9jdW1lbnRhdGlvblxuICogICAgICBhbmQvb3Igb3RoZXIgbWF0ZXJpYWxzIHByb3ZpZGVkIHdpdGggdGhlIGRpc3RyaWJ1dGlvbi5cbiAqICAgIC0gTmVpdGhlciB0aGUgbmFtZSBvZiBEYXZpZCBTdHV0eiBub3IgdGhlIG5hbWVzIG9mIGl0cyBjb250cmlidXRvcnMgbWF5IGJlXG4gKiAgICAgIHVzZWQgdG8gZW5kb3JzZSBvciBwcm9tb3RlIHByb2R1Y3RzIGRlcml2ZWQgZnJvbSB0aGlzIHNvZnR3YXJlIHdpdGhvdXRcbiAqICAgICAgc3BlY2lmaWMgcHJpb3Igd3JpdHRlbiBwZXJtaXNzaW9uLlxuICogXG4gKiBUSElTIFNPRlRXQVJFIElTIFBST1ZJREVEIEJZIFRIRSBDT1BZUklHSFQgSE9MREVSUyBBTkQgQ09OVFJJQlVUT1JTIFwiQVMgSVNcIlxuICogQU5EIEFOWSBFWFBSRVNTIE9SIElNUExJRUQgV0FSUkFOVElFUywgSU5DTFVESU5HLCBCVVQgTk9UIExJTUlURUQgVE8sXG4gKiBUSEUgSU1QTElFRCBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSBBTkQgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSXG4gKiBQVVJQT1NFIEFSRSBESVNDTEFJTUVELiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQ09QWVJJR0hUIEhPTERFUiBPUlxuICogQ09OVFJJQlVUT1JTIEJFIExJQUJMRSBGT1IgQU5ZIERJUkVDVCwgSU5ESVJFQ1QsIElOQ0lERU5UQUwsIFNQRUNJQUwsXG4gKiBFWEVNUExBUlksIE9SIENPTlNFUVVFTlRJQUwgREFNQUdFUyAoSU5DTFVESU5HLCBCVVQgTk9UIExJTUlURUQgVE8sXG4gKiBQUk9DVVJFTUVOVCBPRiBTVUJTVElUVVRFIEdPT0RTIE9SIFNFUlZJQ0VTOyBMT1NTIE9GIFVTRSwgREFUQSwgT1IgUFJPRklUUztcbiAqIE9SIEJVU0lORVNTIElOVEVSUlVQVElPTikgSE9XRVZFUiBDQVVTRUQgQU5EIE9OIEFOWSBUSEVPUlkgT0YgTElBQklMSVRZLFxuICogV0hFVEhFUiBJTiBDT05UUkFDVCwgU1RSSUNUIExJQUJJTElUWSwgT1IgVE9SVCAoSU5DTFVESU5HIE5FR0xJR0VOQ0UgT1JcbiAqIE9USEVSV0lTRSkgQVJJU0lORyBJTiBBTlkgV0FZIE9VVCBPRiBUSEUgVVNFIE9GIFRISVMgU09GVFdBUkUsIEVWRU4gSUZcbiAqIEFEVklTRUQgT0YgVEhFIFBPU1NJQklMSVRZIE9GIFNVQ0ggREFNQUdFLlxuICovXG4hZnVuY3Rpb24gKCQpIHtcbiAgICBcInVzZSBzdHJpY3RcIjsvLyBqc2hpbnQgO187XG5cbiAgICBpZiAodHlwZW9mIGtvICE9PSAndW5kZWZpbmVkJyAmJiBrby5iaW5kaW5nSGFuZGxlcnMgJiYgIWtvLmJpbmRpbmdIYW5kbGVycy5tdWx0aXNlbGVjdCkge1xuICAgICAgICBrby5iaW5kaW5nSGFuZGxlcnMubXVsdGlzZWxlY3QgPSB7XG4gICAgICAgICAgICBhZnRlcjogWydvcHRpb25zJywgJ3ZhbHVlJywgJ3NlbGVjdGVkT3B0aW9ucyddLFxuXG4gICAgICAgICAgICBpbml0OiBmdW5jdGlvbihlbGVtZW50LCB2YWx1ZUFjY2Vzc29yLCBhbGxCaW5kaW5ncywgdmlld01vZGVsLCBiaW5kaW5nQ29udGV4dCkge1xuICAgICAgICAgICAgICAgIHZhciAkZWxlbWVudCA9ICQoZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgdmFyIGNvbmZpZyA9IGtvLnRvSlModmFsdWVBY2Nlc3NvcigpKTtcblxuICAgICAgICAgICAgICAgICRlbGVtZW50Lm11bHRpc2VsZWN0KGNvbmZpZyk7XG5cbiAgICAgICAgICAgICAgICBpZiAoYWxsQmluZGluZ3MuaGFzKCdvcHRpb25zJykpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG9wdGlvbnMgPSBhbGxCaW5kaW5ncy5nZXQoJ29wdGlvbnMnKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGtvLmlzT2JzZXJ2YWJsZShvcHRpb25zKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAga28uY29tcHV0ZWQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbXMgPSAkZWxlbWVudC5kYXRhKCdtdWx0aXNlbGVjdCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1zKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1zLnVwZGF0ZU9yaWdpbmFsT3B0aW9ucygpOy8vTm90IHN1cmUgaG93IGJlbmVmaWNpYWwgdGhpcyBpcy5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRlbGVtZW50Lm11bHRpc2VsZWN0KCdyZWJ1aWxkJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcG9zZVdoZW5Ob2RlSXNSZW1vdmVkOiBlbGVtZW50XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vdmFsdWUgYW5kIHNlbGVjdGVkT3B0aW9ucyBhcmUgdHdvLXdheSwgc28gdGhlc2Ugd2lsbCBiZSB0cmlnZ2VyZWQgZXZlbiBieSBvdXIgb3duIGFjdGlvbnMuXG4gICAgICAgICAgICAgICAgLy9JdCBuZWVkcyBzb21lIHdheSB0byB0ZWxsIGlmIHRoZXkgYXJlIHRyaWdnZXJlZCBiZWNhdXNlIG9mIHVzIG9yIGJlY2F1c2Ugb2Ygb3V0c2lkZSBjaGFuZ2UuXG4gICAgICAgICAgICAgICAgLy9JdCBkb2Vzbid0IGxvb3AgYnV0IGl0J3MgYSB3YXN0ZSBvZiBwcm9jZXNzaW5nLlxuICAgICAgICAgICAgICAgIGlmIChhbGxCaW5kaW5ncy5oYXMoJ3ZhbHVlJykpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHZhbHVlID0gYWxsQmluZGluZ3MuZ2V0KCd2YWx1ZScpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoa28uaXNPYnNlcnZhYmxlKHZhbHVlKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAga28uY29tcHV0ZWQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGVsZW1lbnQubXVsdGlzZWxlY3QoJ3JlZnJlc2gnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwb3NlV2hlbk5vZGVJc1JlbW92ZWQ6IGVsZW1lbnRcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLmV4dGVuZCh7IHJhdGVMaW1pdDogMTAwLCBub3RpZnlXaGVuQ2hhbmdlc1N0b3A6IHRydWUgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvL1N3aXRjaGVkIGZyb20gYXJyYXlDaGFuZ2Ugc3Vic2NyaXB0aW9uIHRvIGdlbmVyYWwgc3Vic2NyaXB0aW9uIHVzaW5nICdyZWZyZXNoJy5cbiAgICAgICAgICAgICAgICAvL05vdCBzdXJlIHBlcmZvcm1hbmNlIGlzIGFueSBiZXR0ZXIgdXNpbmcgJ3NlbGVjdCcgYW5kICdkZXNlbGVjdCcuXG4gICAgICAgICAgICAgICAgaWYgKGFsbEJpbmRpbmdzLmhhcygnc2VsZWN0ZWRPcHRpb25zJykpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHNlbGVjdGVkT3B0aW9ucyA9IGFsbEJpbmRpbmdzLmdldCgnc2VsZWN0ZWRPcHRpb25zJyk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChrby5pc09ic2VydmFibGUoc2VsZWN0ZWRPcHRpb25zKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAga28uY29tcHV0ZWQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZE9wdGlvbnMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRlbGVtZW50Lm11bHRpc2VsZWN0KCdyZWZyZXNoJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcG9zZVdoZW5Ob2RlSXNSZW1vdmVkOiBlbGVtZW50XG4gICAgICAgICAgICAgICAgICAgICAgICB9KS5leHRlbmQoeyByYXRlTGltaXQ6IDEwMCwgbm90aWZ5V2hlbkNoYW5nZXNTdG9wOiB0cnVlIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAga28udXRpbHMuZG9tTm9kZURpc3Bvc2FsLmFkZERpc3Bvc2VDYWxsYmFjayhlbGVtZW50LCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgJGVsZW1lbnQubXVsdGlzZWxlY3QoJ2Rlc3Ryb3knKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIHVwZGF0ZTogZnVuY3Rpb24oZWxlbWVudCwgdmFsdWVBY2Nlc3NvciwgYWxsQmluZGluZ3MsIHZpZXdNb2RlbCwgYmluZGluZ0NvbnRleHQpIHtcbiAgICAgICAgICAgICAgICB2YXIgJGVsZW1lbnQgPSAkKGVsZW1lbnQpO1xuICAgICAgICAgICAgICAgIHZhciBjb25maWcgPSBrby50b0pTKHZhbHVlQWNjZXNzb3IoKSk7XG5cbiAgICAgICAgICAgICAgICAkZWxlbWVudC5tdWx0aXNlbGVjdCgnc2V0T3B0aW9ucycsIGNvbmZpZyk7XG4gICAgICAgICAgICAgICAgJGVsZW1lbnQubXVsdGlzZWxlY3QoJ3JlYnVpbGQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBmb3JFYWNoKGFycmF5LCBjYWxsYmFjaykge1xuICAgICAgICBmb3IgKHZhciBpbmRleCA9IDA7IGluZGV4IDwgYXJyYXkubGVuZ3RoOyArK2luZGV4KSB7XG4gICAgICAgICAgICBjYWxsYmFjayhhcnJheVtpbmRleF0sIGluZGV4KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENvbnN0cnVjdG9yIHRvIGNyZWF0ZSBhIG5ldyBtdWx0aXNlbGVjdCB1c2luZyB0aGUgZ2l2ZW4gc2VsZWN0LlxuICAgICAqXG4gICAgICogQHBhcmFtIHtqUXVlcnl9IHNlbGVjdFxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gICAgICogQHJldHVybnMge011bHRpc2VsZWN0fVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIE11bHRpc2VsZWN0KHNlbGVjdCwgb3B0aW9ucykge1xuXG4gICAgICAgIHRoaXMuJHNlbGVjdCA9ICQoc2VsZWN0KTtcbiAgICAgICAgXG4gICAgICAgIC8vIFBsYWNlaG9sZGVyIHZpYSBkYXRhIGF0dHJpYnV0ZXNcbiAgICAgICAgaWYgKHRoaXMuJHNlbGVjdC5hdHRyKFwiZGF0YS1wbGFjZWhvbGRlclwiKSkge1xuICAgICAgICAgICAgb3B0aW9ucy5ub25TZWxlY3RlZFRleHQgPSB0aGlzLiRzZWxlY3QuZGF0YShcInBsYWNlaG9sZGVyXCIpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICB0aGlzLm9wdGlvbnMgPSB0aGlzLm1lcmdlT3B0aW9ucygkLmV4dGVuZCh7fSwgb3B0aW9ucywgdGhpcy4kc2VsZWN0LmRhdGEoKSkpO1xuXG4gICAgICAgIC8vIEluaXRpYWxpemF0aW9uLlxuICAgICAgICAvLyBXZSBoYXZlIHRvIGNsb25lIHRvIGNyZWF0ZSBhIG5ldyByZWZlcmVuY2UuXG4gICAgICAgIHRoaXMub3JpZ2luYWxPcHRpb25zID0gdGhpcy4kc2VsZWN0LmNsb25lKClbMF0ub3B0aW9ucztcbiAgICAgICAgdGhpcy5xdWVyeSA9ICcnO1xuICAgICAgICB0aGlzLnNlYXJjaFRpbWVvdXQgPSBudWxsO1xuICAgICAgICB0aGlzLmxhc3RUb2dnbGVkSW5wdXQgPSBudWxsXG5cbiAgICAgICAgdGhpcy5vcHRpb25zLm11bHRpcGxlID0gdGhpcy4kc2VsZWN0LmF0dHIoJ211bHRpcGxlJykgPT09IFwibXVsdGlwbGVcIjtcbiAgICAgICAgdGhpcy5vcHRpb25zLm9uQ2hhbmdlID0gJC5wcm94eSh0aGlzLm9wdGlvbnMub25DaGFuZ2UsIHRoaXMpO1xuICAgICAgICB0aGlzLm9wdGlvbnMub25Ecm9wZG93blNob3cgPSAkLnByb3h5KHRoaXMub3B0aW9ucy5vbkRyb3Bkb3duU2hvdywgdGhpcyk7XG4gICAgICAgIHRoaXMub3B0aW9ucy5vbkRyb3Bkb3duSGlkZSA9ICQucHJveHkodGhpcy5vcHRpb25zLm9uRHJvcGRvd25IaWRlLCB0aGlzKTtcbiAgICAgICAgdGhpcy5vcHRpb25zLm9uRHJvcGRvd25TaG93biA9ICQucHJveHkodGhpcy5vcHRpb25zLm9uRHJvcGRvd25TaG93biwgdGhpcyk7XG4gICAgICAgIHRoaXMub3B0aW9ucy5vbkRyb3Bkb3duSGlkZGVuID0gJC5wcm94eSh0aGlzLm9wdGlvbnMub25Ecm9wZG93bkhpZGRlbiwgdGhpcyk7XG4gICAgICAgIFxuICAgICAgICAvLyBCdWlsZCBzZWxlY3QgYWxsIGlmIGVuYWJsZWQuXG4gICAgICAgIHRoaXMuYnVpbGRDb250YWluZXIoKTtcbiAgICAgICAgdGhpcy5idWlsZEJ1dHRvbigpO1xuICAgICAgICB0aGlzLmJ1aWxkRHJvcGRvd24oKTtcbiAgICAgICAgdGhpcy5idWlsZFNlbGVjdEFsbCgpO1xuICAgICAgICB0aGlzLmJ1aWxkRHJvcGRvd25PcHRpb25zKCk7XG4gICAgICAgIHRoaXMuYnVpbGRGaWx0ZXIoKTtcblxuICAgICAgICB0aGlzLnVwZGF0ZUJ1dHRvblRleHQoKTtcbiAgICAgICAgdGhpcy51cGRhdGVTZWxlY3RBbGwoKTtcblxuICAgICAgICBpZiAodGhpcy5vcHRpb25zLmRpc2FibGVJZkVtcHR5ICYmICQoJ29wdGlvbicsIHRoaXMuJHNlbGVjdCkubGVuZ3RoIDw9IDApIHtcbiAgICAgICAgICAgIHRoaXMuZGlzYWJsZSgpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICB0aGlzLiRzZWxlY3QuaGlkZSgpLmFmdGVyKHRoaXMuJGNvbnRhaW5lcik7XG4gICAgfTtcblxuICAgIE11bHRpc2VsZWN0LnByb3RvdHlwZSA9IHtcblxuICAgICAgICBkZWZhdWx0czoge1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBEZWZhdWx0IHRleHQgZnVuY3Rpb24gd2lsbCBlaXRoZXIgcHJpbnQgJ05vbmUgc2VsZWN0ZWQnIGluIGNhc2Ugbm9cbiAgICAgICAgICAgICAqIG9wdGlvbiBpcyBzZWxlY3RlZCBvciBhIGxpc3Qgb2YgdGhlIHNlbGVjdGVkIG9wdGlvbnMgdXAgdG8gYSBsZW5ndGhcbiAgICAgICAgICAgICAqIG9mIDMgc2VsZWN0ZWQgb3B0aW9ucy5cbiAgICAgICAgICAgICAqIFxuICAgICAgICAgICAgICogQHBhcmFtIHtqUXVlcnl9IG9wdGlvbnNcbiAgICAgICAgICAgICAqIEBwYXJhbSB7alF1ZXJ5fSBzZWxlY3RcbiAgICAgICAgICAgICAqIEByZXR1cm5zIHtTdHJpbmd9XG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGJ1dHRvblRleHQ6IGZ1bmN0aW9uKG9wdGlvbnMsIHNlbGVjdCkge1xuICAgICAgICAgICAgICAgIGlmIChvcHRpb25zLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5ub25TZWxlY3RlZFRleHQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuYWxsU2VsZWN0ZWRUZXh0IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICYmIG9wdGlvbnMubGVuZ3RoID09PSAkKCdvcHRpb24nLCAkKHNlbGVjdCkpLmxlbmd0aCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAmJiAkKCdvcHRpb24nLCAkKHNlbGVjdCkpLmxlbmd0aCAhPT0gMSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAmJiB0aGlzLm11bHRpcGxlKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuc2VsZWN0QWxsTnVtYmVyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5hbGxTZWxlY3RlZFRleHQgKyAnICgnICsgb3B0aW9ucy5sZW5ndGggKyAnKSc7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5hbGxTZWxlY3RlZFRleHQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAob3B0aW9ucy5sZW5ndGggPiB0aGlzLm51bWJlckRpc3BsYXllZCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gb3B0aW9ucy5sZW5ndGggKyAnICcgKyB0aGlzLm5TZWxlY3RlZFRleHQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB2YXIgc2VsZWN0ZWQgPSAnJztcbiAgICAgICAgICAgICAgICAgICAgdmFyIGRlbGltaXRlciA9IHRoaXMuZGVsaW1pdGVyVGV4dDtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnMuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBsYWJlbCA9ICgkKHRoaXMpLmF0dHIoJ2xhYmVsJykgIT09IHVuZGVmaW5lZCkgPyAkKHRoaXMpLmF0dHIoJ2xhYmVsJykgOiAkKHRoaXMpLnRleHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkICs9IGxhYmVsICsgZGVsaW1pdGVyO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzZWxlY3RlZC5zdWJzdHIoMCwgc2VsZWN0ZWQubGVuZ3RoIC0gMik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogVXBkYXRlcyB0aGUgdGl0bGUgb2YgdGhlIGJ1dHRvbiBzaW1pbGFyIHRvIHRoZSBidXR0b25UZXh0IGZ1bmN0aW9uLlxuICAgICAgICAgICAgICogXG4gICAgICAgICAgICAgKiBAcGFyYW0ge2pRdWVyeX0gb3B0aW9uc1xuICAgICAgICAgICAgICogQHBhcmFtIHtqUXVlcnl9IHNlbGVjdFxuICAgICAgICAgICAgICogQHJldHVybnMge0BleHA7c2VsZWN0ZWRAY2FsbDtzdWJzdHJ9XG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGJ1dHRvblRpdGxlOiBmdW5jdGlvbihvcHRpb25zLCBzZWxlY3QpIHtcbiAgICAgICAgICAgICAgICBpZiAob3B0aW9ucy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubm9uU2VsZWN0ZWRUZXh0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHNlbGVjdGVkID0gJyc7XG4gICAgICAgICAgICAgICAgICAgIHZhciBkZWxpbWl0ZXIgPSB0aGlzLmRlbGltaXRlclRleHQ7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBvcHRpb25zLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGxhYmVsID0gKCQodGhpcykuYXR0cignbGFiZWwnKSAhPT0gdW5kZWZpbmVkKSA/ICQodGhpcykuYXR0cignbGFiZWwnKSA6ICQodGhpcykudGV4dCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQgKz0gbGFiZWwgKyBkZWxpbWl0ZXI7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc2VsZWN0ZWQuc3Vic3RyKDAsIHNlbGVjdGVkLmxlbmd0aCAtIDIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIENyZWF0ZSBhIGxhYmVsLlxuICAgICAgICAgICAgICpcbiAgICAgICAgICAgICAqIEBwYXJhbSB7alF1ZXJ5fSBlbGVtZW50XG4gICAgICAgICAgICAgKiBAcmV0dXJucyB7U3RyaW5nfVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBvcHRpb25MYWJlbDogZnVuY3Rpb24oZWxlbWVudCl7XG4gICAgICAgICAgICAgICAgcmV0dXJuICQoZWxlbWVudCkuYXR0cignbGFiZWwnKSB8fCAkKGVsZW1lbnQpLnRleHQoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIFRyaWdnZXJlZCBvbiBjaGFuZ2Ugb2YgdGhlIG11bHRpc2VsZWN0LlxuICAgICAgICAgICAgICogXG4gICAgICAgICAgICAgKiBOb3QgdHJpZ2dlcmVkIHdoZW4gc2VsZWN0aW5nL2Rlc2VsZWN0aW5nIG9wdGlvbnMgbWFudWFsbHkuXG4gICAgICAgICAgICAgKiBcbiAgICAgICAgICAgICAqIEBwYXJhbSB7alF1ZXJ5fSBvcHRpb25cbiAgICAgICAgICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gY2hlY2tlZFxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBvbkNoYW5nZSA6IGZ1bmN0aW9uKG9wdGlvbiwgY2hlY2tlZCkge1xuXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBUcmlnZ2VyZWQgd2hlbiB0aGUgZHJvcGRvd24gaXMgc2hvd24uXG4gICAgICAgICAgICAgKlxuICAgICAgICAgICAgICogQHBhcmFtIHtqUXVlcnl9IGV2ZW50XG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIG9uRHJvcGRvd25TaG93OiBmdW5jdGlvbihldmVudCkge1xuXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBUcmlnZ2VyZWQgd2hlbiB0aGUgZHJvcGRvd24gaXMgaGlkZGVuLlxuICAgICAgICAgICAgICpcbiAgICAgICAgICAgICAqIEBwYXJhbSB7alF1ZXJ5fSBldmVudFxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBvbkRyb3Bkb3duSGlkZTogZnVuY3Rpb24oZXZlbnQpIHtcblxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogVHJpZ2dlcmVkIGFmdGVyIHRoZSBkcm9wZG93biBpcyBzaG93bi5cbiAgICAgICAgICAgICAqIFxuICAgICAgICAgICAgICogQHBhcmFtIHtqUXVlcnl9IGV2ZW50XG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIG9uRHJvcGRvd25TaG93bjogZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIFRyaWdnZXJlZCBhZnRlciB0aGUgZHJvcGRvd24gaXMgaGlkZGVuLlxuICAgICAgICAgICAgICogXG4gICAgICAgICAgICAgKiBAcGFyYW0ge2pRdWVyeX0gZXZlbnRcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgb25Ecm9wZG93bkhpZGRlbjogZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIFRyaWdnZXJlZCBvbiBzZWxlY3QgYWxsLlxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBvblNlbGVjdEFsbDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZW5hYmxlSFRNTDogZmFsc2UsXG4gICAgICAgICAgICBidXR0b25DbGFzczogJ2J0biBidG4tZGVmYXVsdCcsXG4gICAgICAgICAgICBpbmhlcml0Q2xhc3M6IGZhbHNlLFxuICAgICAgICAgICAgYnV0dG9uV2lkdGg6ICdhdXRvJyxcbiAgICAgICAgICAgIGJ1dHRvbkNvbnRhaW5lcjogJzxkaXYgY2xhc3M9XCJidG4tZ3JvdXBcIiAvPicsXG4gICAgICAgICAgICBkcm9wUmlnaHQ6IGZhbHNlLFxuICAgICAgICAgICAgc2VsZWN0ZWRDbGFzczogJ2FjdGl2ZScsXG4gICAgICAgICAgICAvLyBNYXhpbXVtIGhlaWdodCBvZiB0aGUgZHJvcGRvd24gbWVudS5cbiAgICAgICAgICAgIC8vIElmIG1heGltdW0gaGVpZ2h0IGlzIGV4Y2VlZGVkIGEgc2Nyb2xsYmFyIHdpbGwgYmUgZGlzcGxheWVkLlxuICAgICAgICAgICAgbWF4SGVpZ2h0OiBmYWxzZSxcbiAgICAgICAgICAgIGNoZWNrYm94TmFtZTogZmFsc2UsXG4gICAgICAgICAgICBpbmNsdWRlU2VsZWN0QWxsT3B0aW9uOiBmYWxzZSxcbiAgICAgICAgICAgIGluY2x1ZGVTZWxlY3RBbGxJZk1vcmVUaGFuOiAwLFxuICAgICAgICAgICAgc2VsZWN0QWxsVGV4dDogJyBTZWxlY3QgYWxsJyxcbiAgICAgICAgICAgIHNlbGVjdEFsbFZhbHVlOiAnbXVsdGlzZWxlY3QtYWxsJyxcbiAgICAgICAgICAgIHNlbGVjdEFsbE5hbWU6IGZhbHNlLFxuICAgICAgICAgICAgc2VsZWN0QWxsTnVtYmVyOiB0cnVlLFxuICAgICAgICAgICAgZW5hYmxlRmlsdGVyaW5nOiBmYWxzZSxcbiAgICAgICAgICAgIGVuYWJsZUNhc2VJbnNlbnNpdGl2ZUZpbHRlcmluZzogZmFsc2UsXG4gICAgICAgICAgICBlbmFibGVDbGlja2FibGVPcHRHcm91cHM6IGZhbHNlLFxuICAgICAgICAgICAgZmlsdGVyUGxhY2Vob2xkZXI6ICdTZWFyY2gnLFxuICAgICAgICAgICAgLy8gcG9zc2libGUgb3B0aW9uczogJ3RleHQnLCAndmFsdWUnLCAnYm90aCdcbiAgICAgICAgICAgIGZpbHRlckJlaGF2aW9yOiAndGV4dCcsXG4gICAgICAgICAgICBpbmNsdWRlRmlsdGVyQ2xlYXJCdG46IHRydWUsXG4gICAgICAgICAgICBwcmV2ZW50SW5wdXRDaGFuZ2VFdmVudDogZmFsc2UsXG4gICAgICAgICAgICBub25TZWxlY3RlZFRleHQ6ICdOb25lIHNlbGVjdGVkJyxcbiAgICAgICAgICAgIG5TZWxlY3RlZFRleHQ6ICdzZWxlY3RlZCcsXG4gICAgICAgICAgICBhbGxTZWxlY3RlZFRleHQ6ICdBbGwgc2VsZWN0ZWQnLFxuICAgICAgICAgICAgbnVtYmVyRGlzcGxheWVkOiAzLFxuICAgICAgICAgICAgZGlzYWJsZUlmRW1wdHk6IGZhbHNlLFxuICAgICAgICAgICAgZGVsaW1pdGVyVGV4dDogJywgJyxcbiAgICAgICAgICAgIHRlbXBsYXRlczoge1xuICAgICAgICAgICAgICAgIGJ1dHRvbjogJzxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwibXVsdGlzZWxlY3QgZHJvcGRvd24tdG9nZ2xlXCIgZGF0YS10b2dnbGU9XCJkcm9wZG93blwiPjxzcGFuIGNsYXNzPVwibXVsdGlzZWxlY3Qtc2VsZWN0ZWQtdGV4dFwiPjwvc3Bhbj4gPGIgY2xhc3M9XCJjYXJldFwiPjwvYj48L2J1dHRvbj4nLFxuICAgICAgICAgICAgICAgIHVsOiAnPHVsIGNsYXNzPVwibXVsdGlzZWxlY3QtY29udGFpbmVyIGRyb3Bkb3duLW1lbnVcIj48L3VsPicsXG4gICAgICAgICAgICAgICAgZmlsdGVyOiAnPGxpIGNsYXNzPVwibXVsdGlzZWxlY3QtaXRlbSBmaWx0ZXJcIj48ZGl2IGNsYXNzPVwiaW5wdXQtZ3JvdXBcIj48c3BhbiBjbGFzcz1cImlucHV0LWdyb3VwLWFkZG9uXCI+PGkgY2xhc3M9XCJnbHlwaGljb24gZ2x5cGhpY29uLXNlYXJjaFwiPjwvaT48L3NwYW4+PGlucHV0IGNsYXNzPVwiZm9ybS1jb250cm9sIG11bHRpc2VsZWN0LXNlYXJjaFwiIHR5cGU9XCJ0ZXh0XCI+PC9kaXY+PC9saT4nLFxuICAgICAgICAgICAgICAgIGZpbHRlckNsZWFyQnRuOiAnPHNwYW4gY2xhc3M9XCJpbnB1dC1ncm91cC1idG5cIj48YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0IG11bHRpc2VsZWN0LWNsZWFyLWZpbHRlclwiIHR5cGU9XCJidXR0b25cIj48aSBjbGFzcz1cImdseXBoaWNvbiBnbHlwaGljb24tcmVtb3ZlLWNpcmNsZVwiPjwvaT48L2J1dHRvbj48L3NwYW4+JyxcbiAgICAgICAgICAgICAgICBsaTogJzxsaT48YSB0YWJpbmRleD1cIjBcIj48bGFiZWw+PC9sYWJlbD48L2E+PC9saT4nLFxuICAgICAgICAgICAgICAgIGRpdmlkZXI6ICc8bGkgY2xhc3M9XCJtdWx0aXNlbGVjdC1pdGVtIGRpdmlkZXJcIj48L2xpPicsXG4gICAgICAgICAgICAgICAgbGlHcm91cDogJzxsaSBjbGFzcz1cIm11bHRpc2VsZWN0LWl0ZW0gbXVsdGlzZWxlY3QtZ3JvdXBcIj48bGFiZWw+PC9sYWJlbD48L2xpPidcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBjb25zdHJ1Y3RvcjogTXVsdGlzZWxlY3QsXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEJ1aWxkcyB0aGUgY29udGFpbmVyIG9mIHRoZSBtdWx0aXNlbGVjdC5cbiAgICAgICAgICovXG4gICAgICAgIGJ1aWxkQ29udGFpbmVyOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHRoaXMuJGNvbnRhaW5lciA9ICQodGhpcy5vcHRpb25zLmJ1dHRvbkNvbnRhaW5lcik7XG4gICAgICAgICAgICB0aGlzLiRjb250YWluZXIub24oJ3Nob3cuYnMuZHJvcGRvd24nLCB0aGlzLm9wdGlvbnMub25Ecm9wZG93blNob3cpO1xuICAgICAgICAgICAgdGhpcy4kY29udGFpbmVyLm9uKCdoaWRlLmJzLmRyb3Bkb3duJywgdGhpcy5vcHRpb25zLm9uRHJvcGRvd25IaWRlKTtcbiAgICAgICAgICAgIHRoaXMuJGNvbnRhaW5lci5vbignc2hvd24uYnMuZHJvcGRvd24nLCB0aGlzLm9wdGlvbnMub25Ecm9wZG93blNob3duKTtcbiAgICAgICAgICAgIHRoaXMuJGNvbnRhaW5lci5vbignaGlkZGVuLmJzLmRyb3Bkb3duJywgdGhpcy5vcHRpb25zLm9uRHJvcGRvd25IaWRkZW4pO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBCdWlsZHMgdGhlIGJ1dHRvbiBvZiB0aGUgbXVsdGlzZWxlY3QuXG4gICAgICAgICAqL1xuICAgICAgICBidWlsZEJ1dHRvbjogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB0aGlzLiRidXR0b24gPSAkKHRoaXMub3B0aW9ucy50ZW1wbGF0ZXMuYnV0dG9uKS5hZGRDbGFzcyh0aGlzLm9wdGlvbnMuYnV0dG9uQ2xhc3MpO1xuICAgICAgICAgICAgaWYgKHRoaXMuJHNlbGVjdC5hdHRyKCdjbGFzcycpICYmIHRoaXMub3B0aW9ucy5pbmhlcml0Q2xhc3MpIHtcbiAgICAgICAgICAgICAgICB0aGlzLiRidXR0b24uYWRkQ2xhc3ModGhpcy4kc2VsZWN0LmF0dHIoJ2NsYXNzJykpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gQWRvcHQgYWN0aXZlIHN0YXRlLlxuICAgICAgICAgICAgaWYgKHRoaXMuJHNlbGVjdC5wcm9wKCdkaXNhYmxlZCcpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kaXNhYmxlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVuYWJsZSgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBNYW51YWxseSBhZGQgYnV0dG9uIHdpZHRoIGlmIHNldC5cbiAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMuYnV0dG9uV2lkdGggJiYgdGhpcy5vcHRpb25zLmJ1dHRvbldpZHRoICE9PSAnYXV0bycpIHtcbiAgICAgICAgICAgICAgICB0aGlzLiRidXR0b24uY3NzKHtcbiAgICAgICAgICAgICAgICAgICAgJ3dpZHRoJyA6IHRoaXMub3B0aW9ucy5idXR0b25XaWR0aCxcbiAgICAgICAgICAgICAgICAgICAgJ292ZXJmbG93JyA6ICdoaWRkZW4nLFxuICAgICAgICAgICAgICAgICAgICAndGV4dC1vdmVyZmxvdycgOiAnZWxsaXBzaXMnXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgdGhpcy4kY29udGFpbmVyLmNzcyh7XG4gICAgICAgICAgICAgICAgICAgICd3aWR0aCc6IHRoaXMub3B0aW9ucy5idXR0b25XaWR0aFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBLZWVwIHRoZSB0YWIgaW5kZXggZnJvbSB0aGUgc2VsZWN0LlxuICAgICAgICAgICAgdmFyIHRhYmluZGV4ID0gdGhpcy4kc2VsZWN0LmF0dHIoJ3RhYmluZGV4Jyk7XG4gICAgICAgICAgICBpZiAodGFiaW5kZXgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLiRidXR0b24uYXR0cigndGFiaW5kZXgnLCB0YWJpbmRleCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuJGNvbnRhaW5lci5wcmVwZW5kKHRoaXMuJGJ1dHRvbik7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEJ1aWxkcyB0aGUgdWwgcmVwcmVzZW50aW5nIHRoZSBkcm9wZG93biBtZW51LlxuICAgICAgICAgKi9cbiAgICAgICAgYnVpbGREcm9wZG93bjogZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgICAgIC8vIEJ1aWxkIHVsLlxuICAgICAgICAgICAgdGhpcy4kdWwgPSAkKHRoaXMub3B0aW9ucy50ZW1wbGF0ZXMudWwpO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLmRyb3BSaWdodCkge1xuICAgICAgICAgICAgICAgIHRoaXMuJHVsLmFkZENsYXNzKCdwdWxsLXJpZ2h0Jyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFNldCBtYXggaGVpZ2h0IG9mIGRyb3Bkb3duIG1lbnUgdG8gYWN0aXZhdGUgYXV0byBzY3JvbGxiYXIuXG4gICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLm1heEhlaWdodCkge1xuICAgICAgICAgICAgICAgIC8vIFRPRE86IEFkZCBhIGNsYXNzIGZvciB0aGlzIG9wdGlvbiB0byBtb3ZlIHRoZSBjc3MgZGVjbGFyYXRpb25zLlxuICAgICAgICAgICAgICAgIHRoaXMuJHVsLmNzcyh7XG4gICAgICAgICAgICAgICAgICAgICdtYXgtaGVpZ2h0JzogdGhpcy5vcHRpb25zLm1heEhlaWdodCArICdweCcsXG4gICAgICAgICAgICAgICAgICAgICdvdmVyZmxvdy15JzogJ2F1dG8nLFxuICAgICAgICAgICAgICAgICAgICAnb3ZlcmZsb3cteCc6ICdoaWRkZW4nXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuJGNvbnRhaW5lci5hcHBlbmQodGhpcy4kdWwpO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBCdWlsZCB0aGUgZHJvcGRvd24gb3B0aW9ucyBhbmQgYmluZHMgYWxsIG5lc3NlY2FyeSBldmVudHMuXG4gICAgICAgICAqIFxuICAgICAgICAgKiBVc2VzIGNyZWF0ZURpdmlkZXIgYW5kIGNyZWF0ZU9wdGlvblZhbHVlIHRvIGNyZWF0ZSB0aGUgbmVjZXNzYXJ5IG9wdGlvbnMuXG4gICAgICAgICAqL1xuICAgICAgICBidWlsZERyb3Bkb3duT3B0aW9uczogZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgICAgIHRoaXMuJHNlbGVjdC5jaGlsZHJlbigpLmVhY2goJC5wcm94eShmdW5jdGlvbihpbmRleCwgZWxlbWVudCkge1xuXG4gICAgICAgICAgICAgICAgdmFyICRlbGVtZW50ID0gJChlbGVtZW50KTtcbiAgICAgICAgICAgICAgICAvLyBTdXBwb3J0IG9wdGdyb3VwcyBhbmQgb3B0aW9ucyB3aXRob3V0IGEgZ3JvdXAgc2ltdWx0YW5lb3VzbHkuXG4gICAgICAgICAgICAgICAgdmFyIHRhZyA9ICRlbGVtZW50LnByb3AoJ3RhZ05hbWUnKVxuICAgICAgICAgICAgICAgICAgICAudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGlmICgkZWxlbWVudC5wcm9wKCd2YWx1ZScpID09PSB0aGlzLm9wdGlvbnMuc2VsZWN0QWxsVmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICh0YWcgPT09ICdvcHRncm91cCcpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVPcHRncm91cChlbGVtZW50KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAodGFnID09PSAnb3B0aW9uJykge1xuXG4gICAgICAgICAgICAgICAgICAgIGlmICgkZWxlbWVudC5kYXRhKCdyb2xlJykgPT09ICdkaXZpZGVyJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVEaXZpZGVyKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZU9wdGlvblZhbHVlKGVsZW1lbnQpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBPdGhlciBpbGxlZ2FsIHRhZ3Mgd2lsbCBiZSBpZ25vcmVkLlxuICAgICAgICAgICAgfSwgdGhpcykpO1xuXG4gICAgICAgICAgICAvLyBCaW5kIHRoZSBjaGFuZ2UgZXZlbnQgb24gdGhlIGRyb3Bkb3duIGVsZW1lbnRzLlxuICAgICAgICAgICAgJCgnbGkgaW5wdXQnLCB0aGlzLiR1bCkub24oJ2NoYW5nZScsICQucHJveHkoZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICAgICAgICB2YXIgJHRhcmdldCA9ICQoZXZlbnQudGFyZ2V0KTtcblxuICAgICAgICAgICAgICAgIHZhciBjaGVja2VkID0gJHRhcmdldC5wcm9wKCdjaGVja2VkJykgfHwgZmFsc2U7XG4gICAgICAgICAgICAgICAgdmFyIGlzU2VsZWN0QWxsT3B0aW9uID0gJHRhcmdldC52YWwoKSA9PT0gdGhpcy5vcHRpb25zLnNlbGVjdEFsbFZhbHVlO1xuXG4gICAgICAgICAgICAgICAgLy8gQXBwbHkgb3IgdW5hcHBseSB0aGUgY29uZmlndXJlZCBzZWxlY3RlZCBjbGFzcy5cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLnNlbGVjdGVkQ2xhc3MpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNoZWNrZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICR0YXJnZXQuY2xvc2VzdCgnbGknKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hZGRDbGFzcyh0aGlzLm9wdGlvbnMuc2VsZWN0ZWRDbGFzcyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkdGFyZ2V0LmNsb3Nlc3QoJ2xpJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3ModGhpcy5vcHRpb25zLnNlbGVjdGVkQ2xhc3MpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gR2V0IHRoZSBjb3JyZXNwb25kaW5nIG9wdGlvbi5cbiAgICAgICAgICAgICAgICB2YXIgdmFsdWUgPSAkdGFyZ2V0LnZhbCgpO1xuICAgICAgICAgICAgICAgIHZhciAkb3B0aW9uID0gdGhpcy5nZXRPcHRpb25CeVZhbHVlKHZhbHVlKTtcblxuICAgICAgICAgICAgICAgIHZhciAkb3B0aW9uc05vdFRoaXMgPSAkKCdvcHRpb24nLCB0aGlzLiRzZWxlY3QpLm5vdCgkb3B0aW9uKTtcbiAgICAgICAgICAgICAgICB2YXIgJGNoZWNrYm94ZXNOb3RUaGlzID0gJCgnaW5wdXQnLCB0aGlzLiRjb250YWluZXIpLm5vdCgkdGFyZ2V0KTtcblxuICAgICAgICAgICAgICAgIGlmIChpc1NlbGVjdEFsbE9wdGlvbikge1xuICAgICAgICAgICAgICAgICAgICBpZiAoY2hlY2tlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RBbGwoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGVzZWxlY3RBbGwoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmKCFpc1NlbGVjdEFsbE9wdGlvbil7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjaGVja2VkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkb3B0aW9uLnByb3AoJ3NlbGVjdGVkJywgdHJ1ZSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMubXVsdGlwbGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBTaW1wbHkgc2VsZWN0IGFkZGl0aW9uYWwgb3B0aW9uLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRvcHRpb24ucHJvcCgnc2VsZWN0ZWQnLCB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFVuc2VsZWN0IGFsbCBvdGhlciBvcHRpb25zIGFuZCBjb3JyZXNwb25kaW5nIGNoZWNrYm94ZXMuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5zZWxlY3RlZENsYXNzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoJGNoZWNrYm94ZXNOb3RUaGlzKS5jbG9zZXN0KCdsaScpLnJlbW92ZUNsYXNzKHRoaXMub3B0aW9ucy5zZWxlY3RlZENsYXNzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKCRjaGVja2JveGVzTm90VGhpcykucHJvcCgnY2hlY2tlZCcsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkb3B0aW9uc05vdFRoaXMucHJvcCgnc2VsZWN0ZWQnLCBmYWxzZSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBJdCdzIGEgc2luZ2xlIHNlbGVjdGlvbiwgc28gY2xvc2UuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kYnV0dG9uLmNsaWNrKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMuc2VsZWN0ZWRDbGFzcyA9PT0gXCJhY3RpdmVcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRvcHRpb25zTm90VGhpcy5jbG9zZXN0KFwiYVwiKS5jc3MoXCJvdXRsaW5lXCIsIFwiXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gVW5zZWxlY3Qgb3B0aW9uLlxuICAgICAgICAgICAgICAgICAgICAgICAgJG9wdGlvbi5wcm9wKCdzZWxlY3RlZCcsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRoaXMuJHNlbGVjdC5jaGFuZ2UoKTtcblxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlQnV0dG9uVGV4dCgpO1xuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlU2VsZWN0QWxsKCk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnMub25DaGFuZ2UoJG9wdGlvbiwgY2hlY2tlZCk7XG5cbiAgICAgICAgICAgICAgICBpZih0aGlzLm9wdGlvbnMucHJldmVudElucHV0Q2hhbmdlRXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIHRoaXMpKTtcblxuICAgICAgICAgICAgJCgnbGkgYScsIHRoaXMuJHVsKS5vbignbW91c2Vkb3duJywgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgIGlmIChlLnNoaWZ0S2V5KSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFByZXZlbnQgc2VsZWN0aW5nIHRleHQgYnkgU2hpZnQrY2xpY2tcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICBcbiAgICAgICAgICAgICQoJ2xpIGEnLCB0aGlzLiR1bCkub24oJ3RvdWNoc3RhcnQgY2xpY2snLCAkLnByb3h5KGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICAgICAgICAgICAgICB2YXIgJHRhcmdldCA9ICQoZXZlbnQudGFyZ2V0KTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBpZiAoZXZlbnQuc2hpZnRLZXkgJiYgdGhpcy5vcHRpb25zLm11bHRpcGxlKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmKCR0YXJnZXQuaXMoXCJsYWJlbFwiKSl7IC8vIEhhbmRsZXMgY2hlY2tib3ggc2VsZWN0aW9uIG1hbnVhbGx5IChzZWUgaHR0cHM6Ly9naXRodWIuY29tL2Rhdmlkc3R1dHovYm9vdHN0cmFwLW11bHRpc2VsZWN0L2lzc3Vlcy80MzEpXG4gICAgICAgICAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgJHRhcmdldCA9ICR0YXJnZXQuZmluZChcImlucHV0XCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgJHRhcmdldC5wcm9wKFwiY2hlY2tlZFwiLCAhJHRhcmdldC5wcm9wKFwiY2hlY2tlZFwiKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdmFyIGNoZWNrZWQgPSAkdGFyZ2V0LnByb3AoJ2NoZWNrZWQnKSB8fCBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5sYXN0VG9nZ2xlZElucHV0ICE9PSBudWxsICYmIHRoaXMubGFzdFRvZ2dsZWRJbnB1dCAhPT0gJHRhcmdldCkgeyAvLyBNYWtlIHN1cmUgd2UgYWN0dWFsbHkgaGF2ZSBhIHJhbmdlXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZnJvbSA9ICR0YXJnZXQuY2xvc2VzdChcImxpXCIpLmluZGV4KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdG8gPSB0aGlzLmxhc3RUb2dnbGVkSW5wdXQuY2xvc2VzdChcImxpXCIpLmluZGV4KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmcm9tID4gdG8pIHsgLy8gU3dhcCB0aGUgaW5kaWNlc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0bXAgPSB0bztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0byA9IGZyb207XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJvbSA9IHRtcDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gTWFrZSBzdXJlIHdlIGdyYWIgYWxsIGVsZW1lbnRzIHNpbmNlIHNsaWNlIGV4Y2x1ZGVzIHRoZSBsYXN0IGluZGV4XG4gICAgICAgICAgICAgICAgICAgICAgICArK3RvO1xuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBDaGFuZ2UgdGhlIGNoZWNrYm94ZXMgYW5kIHVuZGVybHlpbmcgb3B0aW9uc1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJhbmdlID0gdGhpcy4kdWwuZmluZChcImxpXCIpLnNsaWNlKGZyb20sIHRvKS5maW5kKFwiaW5wdXRcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIHJhbmdlLnByb3AoJ2NoZWNrZWQnLCBjaGVja2VkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5zZWxlY3RlZENsYXNzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmFuZ2UuY2xvc2VzdCgnbGknKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAudG9nZ2xlQ2xhc3ModGhpcy5vcHRpb25zLnNlbGVjdGVkQ2xhc3MsIGNoZWNrZWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMCwgaiA9IHJhbmdlLmxlbmd0aDsgaSA8IGo7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciAkY2hlY2tib3ggPSAkKHJhbmdlW2ldKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciAkb3B0aW9uID0gdGhpcy5nZXRPcHRpb25CeVZhbHVlKCRjaGVja2JveC52YWwoKSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkb3B0aW9uLnByb3AoJ3NlbGVjdGVkJywgY2hlY2tlZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9ICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAvLyBUcmlnZ2VyIHRoZSBzZWxlY3QgXCJjaGFuZ2VcIiBldmVudFxuICAgICAgICAgICAgICAgICAgICAkdGFyZ2V0LnRyaWdnZXIoXCJjaGFuZ2VcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC8vIFJlbWVtYmVycyBsYXN0IGNsaWNrZWQgb3B0aW9uXG4gICAgICAgICAgICAgICAgaWYoJHRhcmdldC5pcyhcImlucHV0XCIpICYmICEkdGFyZ2V0LmNsb3Nlc3QoXCJsaVwiKS5pcyhcIi5tdWx0aXNlbGVjdC1pdGVtXCIpKXtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0VG9nZ2xlZElucHV0ID0gJHRhcmdldDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAkdGFyZ2V0LmJsdXIoKTtcbiAgICAgICAgICAgIH0sIHRoaXMpKTtcblxuICAgICAgICAgICAgLy8gS2V5Ym9hcmQgc3VwcG9ydC5cbiAgICAgICAgICAgIHRoaXMuJGNvbnRhaW5lci5vZmYoJ2tleWRvd24ubXVsdGlzZWxlY3QnKS5vbigna2V5ZG93bi5tdWx0aXNlbGVjdCcsICQucHJveHkoZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICAgICAgICBpZiAoJCgnaW5wdXRbdHlwZT1cInRleHRcIl0nLCB0aGlzLiRjb250YWluZXIpLmlzKCc6Zm9jdXMnKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IDkgJiYgdGhpcy4kY29udGFpbmVyLmhhc0NsYXNzKCdvcGVuJykpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kYnV0dG9uLmNsaWNrKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB2YXIgJGl0ZW1zID0gJCh0aGlzLiRjb250YWluZXIpLmZpbmQoXCJsaTpub3QoLmRpdmlkZXIpOm5vdCguZGlzYWJsZWQpIGFcIikuZmlsdGVyKFwiOnZpc2libGVcIik7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKCEkaXRlbXMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICB2YXIgaW5kZXggPSAkaXRlbXMuaW5kZXgoJGl0ZW1zLmZpbHRlcignOmZvY3VzJykpO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIE5hdmlnYXRpb24gdXAuXG4gICAgICAgICAgICAgICAgICAgIGlmIChldmVudC5rZXlDb2RlID09PSAzOCAmJiBpbmRleCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4LS07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy8gTmF2aWdhdGUgZG93bi5cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoZXZlbnQua2V5Q29kZSA9PT0gNDAgJiYgaW5kZXggPCAkaXRlbXMubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXgrKztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICghfmluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbmRleCA9IDA7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICB2YXIgJGN1cnJlbnQgPSAkaXRlbXMuZXEoaW5kZXgpO1xuICAgICAgICAgICAgICAgICAgICAkY3VycmVudC5mb2N1cygpO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChldmVudC5rZXlDb2RlID09PSAzMiB8fCBldmVudC5rZXlDb2RlID09PSAxMykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyICRjaGVja2JveCA9ICRjdXJyZW50LmZpbmQoJ2lucHV0Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICRjaGVja2JveC5wcm9wKFwiY2hlY2tlZFwiLCAhJGNoZWNrYm94LnByb3AoXCJjaGVja2VkXCIpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICRjaGVja2JveC5jaGFuZ2UoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIHRoaXMpKTtcblxuICAgICAgICAgICAgaWYodGhpcy5vcHRpb25zLmVuYWJsZUNsaWNrYWJsZU9wdEdyb3VwcyAmJiB0aGlzLm9wdGlvbnMubXVsdGlwbGUpIHtcbiAgICAgICAgICAgICAgICAkKCdsaS5tdWx0aXNlbGVjdC1ncm91cCcsIHRoaXMuJHVsKS5vbignY2xpY2snLCAkLnByb3h5KGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgICAgICAgICAgICAgICAgIHZhciBncm91cCA9ICQoZXZlbnQudGFyZ2V0KS5wYXJlbnQoKTtcblxuICAgICAgICAgICAgICAgICAgICAvLyBTZWFyY2ggYWxsIG9wdGlvbiBpbiBvcHRncm91cFxuICAgICAgICAgICAgICAgICAgICB2YXIgJG9wdGlvbnMgPSBncm91cC5uZXh0VW50aWwoJ2xpLm11bHRpc2VsZWN0LWdyb3VwJyk7XG4gICAgICAgICAgICAgICAgICAgIHZhciAkdmlzaWJsZU9wdGlvbnMgPSAkb3B0aW9ucy5maWx0ZXIoXCI6dmlzaWJsZTpub3QoLmRpc2FibGVkKVwiKTtcblxuICAgICAgICAgICAgICAgICAgICAvLyBjaGVjayBvciB1bmNoZWNrIGl0ZW1zXG4gICAgICAgICAgICAgICAgICAgIHZhciBhbGxDaGVja2VkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG9wdGlvbklucHV0cyA9ICR2aXNpYmxlT3B0aW9ucy5maW5kKCdpbnB1dCcpO1xuICAgICAgICAgICAgICAgICAgICBvcHRpb25JbnB1dHMuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsbENoZWNrZWQgPSBhbGxDaGVja2VkICYmICQodGhpcykucHJvcCgnY2hlY2tlZCcpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICBvcHRpb25JbnB1dHMucHJvcCgnY2hlY2tlZCcsICFhbGxDaGVja2VkKS50cmlnZ2VyKCdjaGFuZ2UnKTtcbiAgICAgICAgICAgICAgIH0sIHRoaXMpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogQ3JlYXRlIGFuIG9wdGlvbiB1c2luZyB0aGUgZ2l2ZW4gc2VsZWN0IG9wdGlvbi5cbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIHtqUXVlcnl9IGVsZW1lbnRcbiAgICAgICAgICovXG4gICAgICAgIGNyZWF0ZU9wdGlvblZhbHVlOiBmdW5jdGlvbihlbGVtZW50KSB7XG4gICAgICAgICAgICB2YXIgJGVsZW1lbnQgPSAkKGVsZW1lbnQpO1xuICAgICAgICAgICAgaWYgKCRlbGVtZW50LmlzKCc6c2VsZWN0ZWQnKSkge1xuICAgICAgICAgICAgICAgICRlbGVtZW50LnByb3AoJ3NlbGVjdGVkJywgdHJ1ZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFN1cHBvcnQgdGhlIGxhYmVsIGF0dHJpYnV0ZSBvbiBvcHRpb25zLlxuICAgICAgICAgICAgdmFyIGxhYmVsID0gdGhpcy5vcHRpb25zLm9wdGlvbkxhYmVsKGVsZW1lbnQpO1xuICAgICAgICAgICAgdmFyIHZhbHVlID0gJGVsZW1lbnQudmFsKCk7XG4gICAgICAgICAgICB2YXIgaW5wdXRUeXBlID0gdGhpcy5vcHRpb25zLm11bHRpcGxlID8gXCJjaGVja2JveFwiIDogXCJyYWRpb1wiO1xuXG4gICAgICAgICAgICB2YXIgJGxpID0gJCh0aGlzLm9wdGlvbnMudGVtcGxhdGVzLmxpKTtcbiAgICAgICAgICAgIHZhciAkbGFiZWwgPSAkKCdsYWJlbCcsICRsaSk7XG4gICAgICAgICAgICAkbGFiZWwuYWRkQ2xhc3MoaW5wdXRUeXBlKTtcblxuICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5lbmFibGVIVE1MKSB7XG4gICAgICAgICAgICAgICAgJGxhYmVsLmh0bWwoXCIgXCIgKyBsYWJlbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAkbGFiZWwudGV4dChcIiBcIiArIGxhYmVsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICAgICB2YXIgJGNoZWNrYm94ID0gJCgnPGlucHV0Lz4nKS5hdHRyKCd0eXBlJywgaW5wdXRUeXBlKTtcblxuICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5jaGVja2JveE5hbWUpIHtcbiAgICAgICAgICAgICAgICAkY2hlY2tib3guYXR0cignbmFtZScsIHRoaXMub3B0aW9ucy5jaGVja2JveE5hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgJGxhYmVsLnByZXBlbmQoJGNoZWNrYm94KTtcblxuICAgICAgICAgICAgdmFyIHNlbGVjdGVkID0gJGVsZW1lbnQucHJvcCgnc2VsZWN0ZWQnKSB8fCBmYWxzZTtcbiAgICAgICAgICAgICRjaGVja2JveC52YWwodmFsdWUpO1xuXG4gICAgICAgICAgICBpZiAodmFsdWUgPT09IHRoaXMub3B0aW9ucy5zZWxlY3RBbGxWYWx1ZSkge1xuICAgICAgICAgICAgICAgICRsaS5hZGRDbGFzcyhcIm11bHRpc2VsZWN0LWl0ZW0gbXVsdGlzZWxlY3QtYWxsXCIpO1xuICAgICAgICAgICAgICAgICRjaGVja2JveC5wYXJlbnQoKS5wYXJlbnQoKVxuICAgICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ211bHRpc2VsZWN0LWFsbCcpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAkbGFiZWwuYXR0cigndGl0bGUnLCAkZWxlbWVudC5hdHRyKCd0aXRsZScpKTtcblxuICAgICAgICAgICAgdGhpcy4kdWwuYXBwZW5kKCRsaSk7XG5cbiAgICAgICAgICAgIGlmICgkZWxlbWVudC5pcygnOmRpc2FibGVkJykpIHtcbiAgICAgICAgICAgICAgICAkY2hlY2tib3guYXR0cignZGlzYWJsZWQnLCAnZGlzYWJsZWQnKVxuICAgICAgICAgICAgICAgICAgICAucHJvcCgnZGlzYWJsZWQnLCB0cnVlKVxuICAgICAgICAgICAgICAgICAgICAuY2xvc2VzdCgnYScpXG4gICAgICAgICAgICAgICAgICAgIC5hdHRyKFwidGFiaW5kZXhcIiwgXCItMVwiKVxuICAgICAgICAgICAgICAgICAgICAuY2xvc2VzdCgnbGknKVxuICAgICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ2Rpc2FibGVkJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICRjaGVja2JveC5wcm9wKCdjaGVja2VkJywgc2VsZWN0ZWQpO1xuXG4gICAgICAgICAgICBpZiAoc2VsZWN0ZWQgJiYgdGhpcy5vcHRpb25zLnNlbGVjdGVkQ2xhc3MpIHtcbiAgICAgICAgICAgICAgICAkY2hlY2tib3guY2xvc2VzdCgnbGknKVxuICAgICAgICAgICAgICAgICAgICAuYWRkQ2xhc3ModGhpcy5vcHRpb25zLnNlbGVjdGVkQ2xhc3MpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDcmVhdGVzIGEgZGl2aWRlciB1c2luZyB0aGUgZ2l2ZW4gc2VsZWN0IG9wdGlvbi5cbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIHtqUXVlcnl9IGVsZW1lbnRcbiAgICAgICAgICovXG4gICAgICAgIGNyZWF0ZURpdmlkZXI6IGZ1bmN0aW9uKGVsZW1lbnQpIHtcbiAgICAgICAgICAgIHZhciAkZGl2aWRlciA9ICQodGhpcy5vcHRpb25zLnRlbXBsYXRlcy5kaXZpZGVyKTtcbiAgICAgICAgICAgIHRoaXMuJHVsLmFwcGVuZCgkZGl2aWRlcik7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIENyZWF0ZXMgYW4gb3B0Z3JvdXAuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSB7alF1ZXJ5fSBncm91cFxuICAgICAgICAgKi9cbiAgICAgICAgY3JlYXRlT3B0Z3JvdXA6IGZ1bmN0aW9uKGdyb3VwKSB7XG4gICAgICAgICAgICB2YXIgZ3JvdXBOYW1lID0gJChncm91cCkucHJvcCgnbGFiZWwnKTtcblxuICAgICAgICAgICAgLy8gQWRkIGEgaGVhZGVyIGZvciB0aGUgZ3JvdXAuXG4gICAgICAgICAgICB2YXIgJGxpID0gJCh0aGlzLm9wdGlvbnMudGVtcGxhdGVzLmxpR3JvdXApO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLmVuYWJsZUhUTUwpIHtcbiAgICAgICAgICAgICAgICAkKCdsYWJlbCcsICRsaSkuaHRtbChncm91cE5hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgJCgnbGFiZWwnLCAkbGkpLnRleHQoZ3JvdXBOYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5lbmFibGVDbGlja2FibGVPcHRHcm91cHMpIHtcbiAgICAgICAgICAgICAgICAkbGkuYWRkQ2xhc3MoJ211bHRpc2VsZWN0LWdyb3VwLWNsaWNrYWJsZScpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLiR1bC5hcHBlbmQoJGxpKTtcblxuICAgICAgICAgICAgaWYgKCQoZ3JvdXApLmlzKCc6ZGlzYWJsZWQnKSkge1xuICAgICAgICAgICAgICAgICRsaS5hZGRDbGFzcygnZGlzYWJsZWQnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gQWRkIHRoZSBvcHRpb25zIG9mIHRoZSBncm91cC5cbiAgICAgICAgICAgICQoJ29wdGlvbicsIGdyb3VwKS5lYWNoKCQucHJveHkoZnVuY3Rpb24oaW5kZXgsIGVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZU9wdGlvblZhbHVlKGVsZW1lbnQpO1xuICAgICAgICAgICAgfSwgdGhpcykpO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBCdWlsZCB0aGUgc2VsY3QgYWxsLlxuICAgICAgICAgKiBcbiAgICAgICAgICogQ2hlY2tzIGlmIGEgc2VsZWN0IGFsbCBoYXMgYWxyZWFkeSBiZWVuIGNyZWF0ZWQuXG4gICAgICAgICAqL1xuICAgICAgICBidWlsZFNlbGVjdEFsbDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHRoaXMub3B0aW9ucy5zZWxlY3RBbGxWYWx1ZSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnMuc2VsZWN0QWxsVmFsdWUgPSB0aGlzLm9wdGlvbnMuc2VsZWN0QWxsVmFsdWUudG9TdHJpbmcoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdmFyIGFscmVhZHlIYXNTZWxlY3RBbGwgPSB0aGlzLmhhc1NlbGVjdEFsbCgpO1xuXG4gICAgICAgICAgICBpZiAoIWFscmVhZHlIYXNTZWxlY3RBbGwgJiYgdGhpcy5vcHRpb25zLmluY2x1ZGVTZWxlY3RBbGxPcHRpb24gJiYgdGhpcy5vcHRpb25zLm11bHRpcGxlXG4gICAgICAgICAgICAgICAgICAgICYmICQoJ29wdGlvbicsIHRoaXMuJHNlbGVjdCkubGVuZ3RoID4gdGhpcy5vcHRpb25zLmluY2x1ZGVTZWxlY3RBbGxJZk1vcmVUaGFuKSB7XG5cbiAgICAgICAgICAgICAgICAvLyBDaGVjayB3aGV0aGVyIHRvIGFkZCBhIGRpdmlkZXIgYWZ0ZXIgdGhlIHNlbGVjdCBhbGwuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5pbmNsdWRlU2VsZWN0QWxsRGl2aWRlcikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiR1bC5wcmVwZW5kKCQodGhpcy5vcHRpb25zLnRlbXBsYXRlcy5kaXZpZGVyKSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdmFyICRsaSA9ICQodGhpcy5vcHRpb25zLnRlbXBsYXRlcy5saSk7XG4gICAgICAgICAgICAgICAgJCgnbGFiZWwnLCAkbGkpLmFkZENsYXNzKFwiY2hlY2tib3hcIik7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5lbmFibGVIVE1MKSB7XG4gICAgICAgICAgICAgICAgICAgICQoJ2xhYmVsJywgJGxpKS5odG1sKFwiIFwiICsgdGhpcy5vcHRpb25zLnNlbGVjdEFsbFRleHQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgJCgnbGFiZWwnLCAkbGkpLnRleHQoXCIgXCIgKyB0aGlzLm9wdGlvbnMuc2VsZWN0QWxsVGV4dCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMuc2VsZWN0QWxsTmFtZSkge1xuICAgICAgICAgICAgICAgICAgICAkKCdsYWJlbCcsICRsaSkucHJlcGVuZCgnPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCInICsgdGhpcy5vcHRpb25zLnNlbGVjdEFsbE5hbWUgKyAnXCIgLz4nKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICQoJ2xhYmVsJywgJGxpKS5wcmVwZW5kKCc8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgLz4nKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgdmFyICRjaGVja2JveCA9ICQoJ2lucHV0JywgJGxpKTtcbiAgICAgICAgICAgICAgICAkY2hlY2tib3gudmFsKHRoaXMub3B0aW9ucy5zZWxlY3RBbGxWYWx1ZSk7XG5cbiAgICAgICAgICAgICAgICAkbGkuYWRkQ2xhc3MoXCJtdWx0aXNlbGVjdC1pdGVtIG11bHRpc2VsZWN0LWFsbFwiKTtcbiAgICAgICAgICAgICAgICAkY2hlY2tib3gucGFyZW50KCkucGFyZW50KClcbiAgICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKCdtdWx0aXNlbGVjdC1hbGwnKTtcblxuICAgICAgICAgICAgICAgIHRoaXMuJHVsLnByZXBlbmQoJGxpKTtcblxuICAgICAgICAgICAgICAgICRjaGVja2JveC5wcm9wKCdjaGVja2VkJywgZmFsc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBCdWlsZHMgdGhlIGZpbHRlci5cbiAgICAgICAgICovXG4gICAgICAgIGJ1aWxkRmlsdGVyOiBmdW5jdGlvbigpIHtcblxuICAgICAgICAgICAgLy8gQnVpbGQgZmlsdGVyIGlmIGZpbHRlcmluZyBPUiBjYXNlIGluc2Vuc2l0aXZlIGZpbHRlcmluZyBpcyBlbmFibGVkIGFuZCB0aGUgbnVtYmVyIG9mIG9wdGlvbnMgZXhjZWVkcyAob3IgZXF1YWxzKSBlbmFibGVGaWx0ZXJMZW5ndGguXG4gICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLmVuYWJsZUZpbHRlcmluZyB8fCB0aGlzLm9wdGlvbnMuZW5hYmxlQ2FzZUluc2Vuc2l0aXZlRmlsdGVyaW5nKSB7XG4gICAgICAgICAgICAgICAgdmFyIGVuYWJsZUZpbHRlckxlbmd0aCA9IE1hdGgubWF4KHRoaXMub3B0aW9ucy5lbmFibGVGaWx0ZXJpbmcsIHRoaXMub3B0aW9ucy5lbmFibGVDYXNlSW5zZW5zaXRpdmVGaWx0ZXJpbmcpO1xuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuJHNlbGVjdC5maW5kKCdvcHRpb24nKS5sZW5ndGggPj0gZW5hYmxlRmlsdGVyTGVuZ3RoKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kZmlsdGVyID0gJCh0aGlzLm9wdGlvbnMudGVtcGxhdGVzLmZpbHRlcik7XG4gICAgICAgICAgICAgICAgICAgICQoJ2lucHV0JywgdGhpcy4kZmlsdGVyKS5hdHRyKCdwbGFjZWhvbGRlcicsIHRoaXMub3B0aW9ucy5maWx0ZXJQbGFjZWhvbGRlcik7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAvLyBBZGRzIG9wdGlvbmFsIGZpbHRlciBjbGVhciBidXR0b25cbiAgICAgICAgICAgICAgICAgICAgaWYodGhpcy5vcHRpb25zLmluY2x1ZGVGaWx0ZXJDbGVhckJ0bil7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgY2xlYXJCdG4gPSAkKHRoaXMub3B0aW9ucy50ZW1wbGF0ZXMuZmlsdGVyQ2xlYXJCdG4pO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xlYXJCdG4ub24oJ2NsaWNrJywgJC5wcm94eShmdW5jdGlvbihldmVudCl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuc2VhcmNoVGltZW91dCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kZmlsdGVyLmZpbmQoJy5tdWx0aXNlbGVjdC1zZWFyY2gnKS52YWwoJycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoJ2xpJywgdGhpcy4kdWwpLnNob3coKS5yZW1vdmVDbGFzcyhcImZpbHRlci1oaWRkZW5cIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVTZWxlY3RBbGwoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIHRoaXMpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJGZpbHRlci5maW5kKCcuaW5wdXQtZ3JvdXAnKS5hcHBlbmQoY2xlYXJCdG4pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB0aGlzLiR1bC5wcmVwZW5kKHRoaXMuJGZpbHRlcik7XG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kZmlsdGVyLnZhbCh0aGlzLnF1ZXJ5KS5vbignY2xpY2snLCBmdW5jdGlvbihldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgIH0pLm9uKCdpbnB1dCBrZXlkb3duJywgJC5wcm94eShmdW5jdGlvbihldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gQ2FuY2VsIGVudGVyIGtleSBkZWZhdWx0IGJlaGF2aW91clxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGV2ZW50LndoaWNoID09PSAxMykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBUaGlzIGlzIHVzZWZ1bCB0byBjYXRjaCBcImtleWRvd25cIiBldmVudHMgYWZ0ZXIgdGhlIGJyb3dzZXIgaGFzIHVwZGF0ZWQgdGhlIGNvbnRyb2wuXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5zZWFyY2hUaW1lb3V0KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWFyY2hUaW1lb3V0ID0gdGhpcy5hc3luY0Z1bmN0aW9uKCQucHJveHkoZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5xdWVyeSAhPT0gZXZlbnQudGFyZ2V0LnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucXVlcnkgPSBldmVudC50YXJnZXQudmFsdWU7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGN1cnJlbnRHcm91cCwgY3VycmVudEdyb3VwVmlzaWJsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJC5lYWNoKCQoJ2xpJywgdGhpcy4kdWwpLCAkLnByb3h5KGZ1bmN0aW9uKGluZGV4LCBlbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdmFsdWUgPSAkKCdpbnB1dCcsIGVsZW1lbnQpLmxlbmd0aCA+IDAgPyAkKCdpbnB1dCcsIGVsZW1lbnQpLnZhbCgpIDogXCJcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0ZXh0ID0gJCgnbGFiZWwnLCBlbGVtZW50KS50ZXh0KCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBmaWx0ZXJDYW5kaWRhdGUgPSAnJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgodGhpcy5vcHRpb25zLmZpbHRlckJlaGF2aW9yID09PSAndGV4dCcpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyQ2FuZGlkYXRlID0gdGV4dDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKCh0aGlzLm9wdGlvbnMuZmlsdGVyQmVoYXZpb3IgPT09ICd2YWx1ZScpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyQ2FuZGlkYXRlID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICh0aGlzLm9wdGlvbnMuZmlsdGVyQmVoYXZpb3IgPT09ICdib3RoJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlckNhbmRpZGF0ZSA9IHRleHQgKyAnXFxuJyArIHZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWUgIT09IHRoaXMub3B0aW9ucy5zZWxlY3RBbGxWYWx1ZSAmJiB0ZXh0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gQnkgZGVmYXVsdCBsZXRzIGFzc3VtZSB0aGF0IGVsZW1lbnQgaXMgbm90XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gaW50ZXJlc3RpbmcgZm9yIHRoaXMgc2VhcmNoLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzaG93RWxlbWVudCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5lbmFibGVDYXNlSW5zZW5zaXRpdmVGaWx0ZXJpbmcgJiYgZmlsdGVyQ2FuZGlkYXRlLnRvTG93ZXJDYXNlKCkuaW5kZXhPZih0aGlzLnF1ZXJ5LnRvTG93ZXJDYXNlKCkpID4gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvd0VsZW1lbnQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChmaWx0ZXJDYW5kaWRhdGUuaW5kZXhPZih0aGlzLnF1ZXJ5KSA+IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3dFbGVtZW50ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBUb2dnbGUgY3VycmVudCBlbGVtZW50IChncm91cCBvciBncm91cCBpdGVtKSBhY2NvcmRpbmcgdG8gc2hvd0VsZW1lbnQgYm9vbGVhbi5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKGVsZW1lbnQpLnRvZ2dsZShzaG93RWxlbWVudCkudG9nZ2xlQ2xhc3MoJ2ZpbHRlci1oaWRkZW4nLCAhc2hvd0VsZW1lbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIERpZmZlcmVudGlhdGUgZ3JvdXBzIGFuZCBncm91cCBpdGVtcy5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoJChlbGVtZW50KS5oYXNDbGFzcygnbXVsdGlzZWxlY3QtZ3JvdXAnKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBSZW1lbWJlciBncm91cCBzdGF0dXMuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRHcm91cCA9IGVsZW1lbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRHcm91cFZpc2libGUgPSBzaG93RWxlbWVudDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFNob3cgZ3JvdXAgbmFtZSB3aGVuIGF0IGxlYXN0IG9uZSBvZiBpdHMgaXRlbXMgaXMgdmlzaWJsZS5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNob3dFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKGN1cnJlbnRHcm91cCkuc2hvdygpLnJlbW92ZUNsYXNzKCdmaWx0ZXItaGlkZGVuJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFNob3cgYWxsIGdyb3VwIGl0ZW1zIHdoZW4gZ3JvdXAgbmFtZSBzYXRpc2ZpZXMgZmlsdGVyLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXNob3dFbGVtZW50ICYmIGN1cnJlbnRHcm91cFZpc2libGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoZWxlbWVudCkuc2hvdygpLnJlbW92ZUNsYXNzKCdmaWx0ZXItaGlkZGVuJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIHRoaXMpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVNlbGVjdEFsbCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSwgdGhpcyksIDMwMCwgdGhpcyk7XG4gICAgICAgICAgICAgICAgICAgIH0sIHRoaXMpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFVuYmluZHMgdGhlIHdob2xlIHBsdWdpbi5cbiAgICAgICAgICovXG4gICAgICAgIGRlc3Ryb3k6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdGhpcy4kY29udGFpbmVyLnJlbW92ZSgpO1xuICAgICAgICAgICAgdGhpcy4kc2VsZWN0LnNob3coKTtcbiAgICAgICAgICAgIHRoaXMuJHNlbGVjdC5kYXRhKCdtdWx0aXNlbGVjdCcsIG51bGwpO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZWZyZXNocyB0aGUgbXVsdGlzZWxlY3QgYmFzZWQgb24gdGhlIHNlbGVjdGVkIG9wdGlvbnMgb2YgdGhlIHNlbGVjdC5cbiAgICAgICAgICovXG4gICAgICAgIHJlZnJlc2g6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgJCgnb3B0aW9uJywgdGhpcy4kc2VsZWN0KS5lYWNoKCQucHJveHkoZnVuY3Rpb24oaW5kZXgsIGVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICB2YXIgJGlucHV0ID0gJCgnbGkgaW5wdXQnLCB0aGlzLiR1bCkuZmlsdGVyKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJCh0aGlzKS52YWwoKSA9PT0gJChlbGVtZW50KS52YWwoKTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIGlmICgkKGVsZW1lbnQpLmlzKCc6c2VsZWN0ZWQnKSkge1xuICAgICAgICAgICAgICAgICAgICAkaW5wdXQucHJvcCgnY2hlY2tlZCcsIHRydWUpO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMuc2VsZWN0ZWRDbGFzcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgJGlucHV0LmNsb3Nlc3QoJ2xpJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYWRkQ2xhc3ModGhpcy5vcHRpb25zLnNlbGVjdGVkQ2xhc3MpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAkaW5wdXQucHJvcCgnY2hlY2tlZCcsIGZhbHNlKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLnNlbGVjdGVkQ2xhc3MpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICRpbnB1dC5jbG9zZXN0KCdsaScpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKHRoaXMub3B0aW9ucy5zZWxlY3RlZENsYXNzKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICgkKGVsZW1lbnQpLmlzKFwiOmRpc2FibGVkXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgICRpbnB1dC5hdHRyKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpXG4gICAgICAgICAgICAgICAgICAgICAgICAucHJvcCgnZGlzYWJsZWQnLCB0cnVlKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmNsb3Nlc3QoJ2xpJylcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hZGRDbGFzcygnZGlzYWJsZWQnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICRpbnB1dC5wcm9wKCdkaXNhYmxlZCcsIGZhbHNlKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmNsb3Nlc3QoJ2xpJylcbiAgICAgICAgICAgICAgICAgICAgICAgIC5yZW1vdmVDbGFzcygnZGlzYWJsZWQnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCB0aGlzKSk7XG5cbiAgICAgICAgICAgIHRoaXMudXBkYXRlQnV0dG9uVGV4dCgpO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVTZWxlY3RBbGwoKTtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogU2VsZWN0IGFsbCBvcHRpb25zIG9mIHRoZSBnaXZlbiB2YWx1ZXMuXG4gICAgICAgICAqIFxuICAgICAgICAgKiBJZiB0cmlnZ2VyT25DaGFuZ2UgaXMgc2V0IHRvIHRydWUsIHRoZSBvbiBjaGFuZ2UgZXZlbnQgaXMgdHJpZ2dlcmVkIGlmXG4gICAgICAgICAqIGFuZCBvbmx5IGlmIG9uZSB2YWx1ZSBpcyBwYXNzZWQuXG4gICAgICAgICAqIFxuICAgICAgICAgKiBAcGFyYW0ge0FycmF5fSBzZWxlY3RWYWx1ZXNcbiAgICAgICAgICogQHBhcmFtIHtCb29sZWFufSB0cmlnZ2VyT25DaGFuZ2VcbiAgICAgICAgICovXG4gICAgICAgIHNlbGVjdDogZnVuY3Rpb24oc2VsZWN0VmFsdWVzLCB0cmlnZ2VyT25DaGFuZ2UpIHtcbiAgICAgICAgICAgIGlmKCEkLmlzQXJyYXkoc2VsZWN0VmFsdWVzKSkge1xuICAgICAgICAgICAgICAgIHNlbGVjdFZhbHVlcyA9IFtzZWxlY3RWYWx1ZXNdO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNlbGVjdFZhbHVlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHZhciB2YWx1ZSA9IHNlbGVjdFZhbHVlc1tpXTtcblxuICAgICAgICAgICAgICAgIGlmICh2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHZhciAkb3B0aW9uID0gdGhpcy5nZXRPcHRpb25CeVZhbHVlKHZhbHVlKTtcbiAgICAgICAgICAgICAgICB2YXIgJGNoZWNrYm94ID0gdGhpcy5nZXRJbnB1dEJ5VmFsdWUodmFsdWUpO1xuXG4gICAgICAgICAgICAgICAgaWYoJG9wdGlvbiA9PT0gdW5kZWZpbmVkIHx8ICRjaGVja2JveCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMub3B0aW9ucy5tdWx0aXBsZSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmRlc2VsZWN0QWxsKGZhbHNlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5zZWxlY3RlZENsYXNzKSB7XG4gICAgICAgICAgICAgICAgICAgICRjaGVja2JveC5jbG9zZXN0KCdsaScpXG4gICAgICAgICAgICAgICAgICAgICAgICAuYWRkQ2xhc3ModGhpcy5vcHRpb25zLnNlbGVjdGVkQ2xhc3MpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICRjaGVja2JveC5wcm9wKCdjaGVja2VkJywgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgJG9wdGlvbi5wcm9wKCdzZWxlY3RlZCcsIHRydWUpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGlmICh0cmlnZ2VyT25DaGFuZ2UpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vcHRpb25zLm9uQ2hhbmdlKCRvcHRpb24sIHRydWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy51cGRhdGVCdXR0b25UZXh0KCk7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVNlbGVjdEFsbCgpO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDbGVhcnMgYWxsIHNlbGVjdGVkIGl0ZW1zLlxuICAgICAgICAgKi9cbiAgICAgICAgY2xlYXJTZWxlY3Rpb246IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRoaXMuZGVzZWxlY3RBbGwoZmFsc2UpO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVCdXR0b25UZXh0KCk7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVNlbGVjdEFsbCgpO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBEZXNlbGVjdHMgYWxsIG9wdGlvbnMgb2YgdGhlIGdpdmVuIHZhbHVlcy5cbiAgICAgICAgICogXG4gICAgICAgICAqIElmIHRyaWdnZXJPbkNoYW5nZSBpcyBzZXQgdG8gdHJ1ZSwgdGhlIG9uIGNoYW5nZSBldmVudCBpcyB0cmlnZ2VyZWQsIGlmXG4gICAgICAgICAqIGFuZCBvbmx5IGlmIG9uZSB2YWx1ZSBpcyBwYXNzZWQuXG4gICAgICAgICAqIFxuICAgICAgICAgKiBAcGFyYW0ge0FycmF5fSBkZXNlbGVjdFZhbHVlc1xuICAgICAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IHRyaWdnZXJPbkNoYW5nZVxuICAgICAgICAgKi9cbiAgICAgICAgZGVzZWxlY3Q6IGZ1bmN0aW9uKGRlc2VsZWN0VmFsdWVzLCB0cmlnZ2VyT25DaGFuZ2UpIHtcbiAgICAgICAgICAgIGlmKCEkLmlzQXJyYXkoZGVzZWxlY3RWYWx1ZXMpKSB7XG4gICAgICAgICAgICAgICAgZGVzZWxlY3RWYWx1ZXMgPSBbZGVzZWxlY3RWYWx1ZXNdO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGRlc2VsZWN0VmFsdWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIHZhbHVlID0gZGVzZWxlY3RWYWx1ZXNbaV07XG5cbiAgICAgICAgICAgICAgICBpZiAodmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB2YXIgJG9wdGlvbiA9IHRoaXMuZ2V0T3B0aW9uQnlWYWx1ZSh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgdmFyICRjaGVja2JveCA9IHRoaXMuZ2V0SW5wdXRCeVZhbHVlKHZhbHVlKTtcblxuICAgICAgICAgICAgICAgIGlmKCRvcHRpb24gPT09IHVuZGVmaW5lZCB8fCAkY2hlY2tib3ggPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLnNlbGVjdGVkQ2xhc3MpIHtcbiAgICAgICAgICAgICAgICAgICAgJGNoZWNrYm94LmNsb3Nlc3QoJ2xpJylcbiAgICAgICAgICAgICAgICAgICAgICAgIC5yZW1vdmVDbGFzcyh0aGlzLm9wdGlvbnMuc2VsZWN0ZWRDbGFzcyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgJGNoZWNrYm94LnByb3AoJ2NoZWNrZWQnLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgJG9wdGlvbi5wcm9wKCdzZWxlY3RlZCcsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBpZiAodHJpZ2dlck9uQ2hhbmdlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMub3B0aW9ucy5vbkNoYW5nZSgkb3B0aW9uLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUJ1dHRvblRleHQoKTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlU2VsZWN0QWxsKCk7XG4gICAgICAgIH0sXG4gICAgICAgIFxuICAgICAgICAvKipcbiAgICAgICAgICogU2VsZWN0cyBhbGwgZW5hYmxlZCAmIHZpc2libGUgb3B0aW9ucy5cbiAgICAgICAgICpcbiAgICAgICAgICogSWYganVzdFZpc2libGUgaXMgdHJ1ZSBvciBub3Qgc3BlY2lmaWVkLCBvbmx5IHZpc2libGUgb3B0aW9ucyBhcmUgc2VsZWN0ZWQuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0ganVzdFZpc2libGVcbiAgICAgICAgICogQHBhcmFtIHtCb29sZWFufSB0cmlnZ2VyT25TZWxlY3RBbGxcbiAgICAgICAgICovXG4gICAgICAgIHNlbGVjdEFsbDogZnVuY3Rpb24gKGp1c3RWaXNpYmxlLCB0cmlnZ2VyT25TZWxlY3RBbGwpIHtcbiAgICAgICAgICAgIHZhciBqdXN0VmlzaWJsZSA9IHR5cGVvZiBqdXN0VmlzaWJsZSA9PT0gJ3VuZGVmaW5lZCcgPyB0cnVlIDoganVzdFZpc2libGU7XG4gICAgICAgICAgICB2YXIgYWxsQ2hlY2tib3hlcyA9ICQoXCJsaSBpbnB1dFt0eXBlPSdjaGVja2JveCddOmVuYWJsZWRcIiwgdGhpcy4kdWwpO1xuICAgICAgICAgICAgdmFyIHZpc2libGVDaGVja2JveGVzID0gYWxsQ2hlY2tib3hlcy5maWx0ZXIoXCI6dmlzaWJsZVwiKTtcbiAgICAgICAgICAgIHZhciBhbGxDaGVja2JveGVzQ291bnQgPSBhbGxDaGVja2JveGVzLmxlbmd0aDtcbiAgICAgICAgICAgIHZhciB2aXNpYmxlQ2hlY2tib3hlc0NvdW50ID0gdmlzaWJsZUNoZWNrYm94ZXMubGVuZ3RoO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZihqdXN0VmlzaWJsZSkge1xuICAgICAgICAgICAgICAgIHZpc2libGVDaGVja2JveGVzLnByb3AoJ2NoZWNrZWQnLCB0cnVlKTtcbiAgICAgICAgICAgICAgICAkKFwibGk6bm90KC5kaXZpZGVyKTpub3QoLmRpc2FibGVkKVwiLCB0aGlzLiR1bCkuZmlsdGVyKFwiOnZpc2libGVcIikuYWRkQ2xhc3ModGhpcy5vcHRpb25zLnNlbGVjdGVkQ2xhc3MpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgYWxsQ2hlY2tib3hlcy5wcm9wKCdjaGVja2VkJywgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgJChcImxpOm5vdCguZGl2aWRlcik6bm90KC5kaXNhYmxlZClcIiwgdGhpcy4kdWwpLmFkZENsYXNzKHRoaXMub3B0aW9ucy5zZWxlY3RlZENsYXNzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIGlmIChhbGxDaGVja2JveGVzQ291bnQgPT09IHZpc2libGVDaGVja2JveGVzQ291bnQgfHwganVzdFZpc2libGUgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgJChcIm9wdGlvbjplbmFibGVkXCIsIHRoaXMuJHNlbGVjdCkucHJvcCgnc2VsZWN0ZWQnLCB0cnVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHZhciB2YWx1ZXMgPSB2aXNpYmxlQ2hlY2tib3hlcy5tYXAoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAkKHRoaXMpLnZhbCgpO1xuICAgICAgICAgICAgICAgIH0pLmdldCgpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICQoXCJvcHRpb246ZW5hYmxlZFwiLCB0aGlzLiRzZWxlY3QpLmZpbHRlcihmdW5jdGlvbihpbmRleCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJC5pbkFycmF5KCQodGhpcykudmFsKCksIHZhbHVlcykgIT09IC0xO1xuICAgICAgICAgICAgICAgIH0pLnByb3AoJ3NlbGVjdGVkJywgdHJ1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmICh0cmlnZ2VyT25TZWxlY3RBbGwpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnMub25TZWxlY3RBbGwoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogRGVzZWxlY3RzIGFsbCBvcHRpb25zLlxuICAgICAgICAgKiBcbiAgICAgICAgICogSWYganVzdFZpc2libGUgaXMgdHJ1ZSBvciBub3Qgc3BlY2lmaWVkLCBvbmx5IHZpc2libGUgb3B0aW9ucyBhcmUgZGVzZWxlY3RlZC5cbiAgICAgICAgICogXG4gICAgICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0ganVzdFZpc2libGVcbiAgICAgICAgICovXG4gICAgICAgIGRlc2VsZWN0QWxsOiBmdW5jdGlvbiAoanVzdFZpc2libGUpIHtcbiAgICAgICAgICAgIHZhciBqdXN0VmlzaWJsZSA9IHR5cGVvZiBqdXN0VmlzaWJsZSA9PT0gJ3VuZGVmaW5lZCcgPyB0cnVlIDoganVzdFZpc2libGU7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmKGp1c3RWaXNpYmxlKSB7ICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB2YXIgdmlzaWJsZUNoZWNrYm94ZXMgPSAkKFwibGkgaW5wdXRbdHlwZT0nY2hlY2tib3gnXTpub3QoOmRpc2FibGVkKVwiLCB0aGlzLiR1bCkuZmlsdGVyKFwiOnZpc2libGVcIik7XG4gICAgICAgICAgICAgICAgdmlzaWJsZUNoZWNrYm94ZXMucHJvcCgnY2hlY2tlZCcsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB2YXIgdmFsdWVzID0gdmlzaWJsZUNoZWNrYm94ZXMubWFwKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJCh0aGlzKS52YWwoKTtcbiAgICAgICAgICAgICAgICB9KS5nZXQoKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAkKFwib3B0aW9uOmVuYWJsZWRcIiwgdGhpcy4kc2VsZWN0KS5maWx0ZXIoZnVuY3Rpb24oaW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICQuaW5BcnJheSgkKHRoaXMpLnZhbCgpLCB2YWx1ZXMpICE9PSAtMTtcbiAgICAgICAgICAgICAgICB9KS5wcm9wKCdzZWxlY3RlZCcsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLnNlbGVjdGVkQ2xhc3MpIHtcbiAgICAgICAgICAgICAgICAgICAgJChcImxpOm5vdCguZGl2aWRlcik6bm90KC5kaXNhYmxlZClcIiwgdGhpcy4kdWwpLmZpbHRlcihcIjp2aXNpYmxlXCIpLnJlbW92ZUNsYXNzKHRoaXMub3B0aW9ucy5zZWxlY3RlZENsYXNzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAkKFwibGkgaW5wdXRbdHlwZT0nY2hlY2tib3gnXTplbmFibGVkXCIsIHRoaXMuJHVsKS5wcm9wKCdjaGVja2VkJywgZmFsc2UpO1xuICAgICAgICAgICAgICAgICQoXCJvcHRpb246ZW5hYmxlZFwiLCB0aGlzLiRzZWxlY3QpLnByb3AoJ3NlbGVjdGVkJywgZmFsc2UpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMuc2VsZWN0ZWRDbGFzcykge1xuICAgICAgICAgICAgICAgICAgICAkKFwibGk6bm90KC5kaXZpZGVyKTpub3QoLmRpc2FibGVkKVwiLCB0aGlzLiR1bCkucmVtb3ZlQ2xhc3ModGhpcy5vcHRpb25zLnNlbGVjdGVkQ2xhc3MpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogUmVidWlsZCB0aGUgcGx1Z2luLlxuICAgICAgICAgKiBcbiAgICAgICAgICogUmVidWlsZHMgdGhlIGRyb3Bkb3duLCB0aGUgZmlsdGVyIGFuZCB0aGUgc2VsZWN0IGFsbCBvcHRpb24uXG4gICAgICAgICAqL1xuICAgICAgICByZWJ1aWxkOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHRoaXMuJHVsLmh0bWwoJycpO1xuXG4gICAgICAgICAgICAvLyBJbXBvcnRhbnQgdG8gZGlzdGluZ3Vpc2ggYmV0d2VlbiByYWRpb3MgYW5kIGNoZWNrYm94ZXMuXG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMubXVsdGlwbGUgPSB0aGlzLiRzZWxlY3QuYXR0cignbXVsdGlwbGUnKSA9PT0gXCJtdWx0aXBsZVwiO1xuXG4gICAgICAgICAgICB0aGlzLmJ1aWxkU2VsZWN0QWxsKCk7XG4gICAgICAgICAgICB0aGlzLmJ1aWxkRHJvcGRvd25PcHRpb25zKCk7XG4gICAgICAgICAgICB0aGlzLmJ1aWxkRmlsdGVyKCk7XG5cbiAgICAgICAgICAgIHRoaXMudXBkYXRlQnV0dG9uVGV4dCgpO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVTZWxlY3RBbGwoKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5kaXNhYmxlSWZFbXB0eSAmJiAkKCdvcHRpb24nLCB0aGlzLiRzZWxlY3QpLmxlbmd0aCA8PSAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kaXNhYmxlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVuYWJsZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLmRyb3BSaWdodCkge1xuICAgICAgICAgICAgICAgIHRoaXMuJHVsLmFkZENsYXNzKCdwdWxsLXJpZ2h0Jyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBwcm92aWRlZCBkYXRhIHdpbGwgYmUgdXNlZCB0byBidWlsZCB0aGUgZHJvcGRvd24uXG4gICAgICAgICAqL1xuICAgICAgICBkYXRhcHJvdmlkZXI6IGZ1bmN0aW9uKGRhdGFwcm92aWRlcikge1xuICAgICAgICAgICAgXG4gICAgICAgICAgICB2YXIgZ3JvdXBDb3VudGVyID0gMDtcbiAgICAgICAgICAgIHZhciAkc2VsZWN0ID0gdGhpcy4kc2VsZWN0LmVtcHR5KCk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgICQuZWFjaChkYXRhcHJvdmlkZXIsIGZ1bmN0aW9uIChpbmRleCwgb3B0aW9uKSB7XG4gICAgICAgICAgICAgICAgdmFyICR0YWc7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgaWYgKCQuaXNBcnJheShvcHRpb24uY2hpbGRyZW4pKSB7IC8vIGNyZWF0ZSBvcHRpb25ncm91cCB0YWdcbiAgICAgICAgICAgICAgICAgICAgZ3JvdXBDb3VudGVyKys7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAkdGFnID0gJCgnPG9wdGdyb3VwLz4nKS5hdHRyKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBvcHRpb24ubGFiZWwgfHwgJ0dyb3VwICcgKyBncm91cENvdW50ZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZDogISFvcHRpb24uZGlzYWJsZWRcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBmb3JFYWNoKG9wdGlvbi5jaGlsZHJlbiwgZnVuY3Rpb24oc3ViT3B0aW9uKSB7IC8vIGFkZCBjaGlsZHJlbiBvcHRpb24gdGFnc1xuICAgICAgICAgICAgICAgICAgICAgICAgJHRhZy5hcHBlbmQoJCgnPG9wdGlvbi8+JykuYXR0cih7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHN1Yk9wdGlvbi52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogc3ViT3B0aW9uLmxhYmVsIHx8IHN1Yk9wdGlvbi52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogc3ViT3B0aW9uLnRpdGxlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkOiAhIXN1Yk9wdGlvbi5zZWxlY3RlZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZDogISFzdWJPcHRpb24uZGlzYWJsZWRcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAkdGFnID0gJCgnPG9wdGlvbi8+JykuYXR0cih7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogb3B0aW9uLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IG9wdGlvbi5sYWJlbCB8fCBvcHRpb24udmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogb3B0aW9uLnRpdGxlLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQ6ICEhb3B0aW9uLnNlbGVjdGVkLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ6ICEhb3B0aW9uLmRpc2FibGVkXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAkc2VsZWN0LmFwcGVuZCgkdGFnKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICB0aGlzLnJlYnVpbGQoKTtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogRW5hYmxlIHRoZSBtdWx0aXNlbGVjdC5cbiAgICAgICAgICovXG4gICAgICAgIGVuYWJsZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB0aGlzLiRzZWxlY3QucHJvcCgnZGlzYWJsZWQnLCBmYWxzZSk7XG4gICAgICAgICAgICB0aGlzLiRidXR0b24ucHJvcCgnZGlzYWJsZWQnLCBmYWxzZSlcbiAgICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ2Rpc2FibGVkJyk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIERpc2FibGUgdGhlIG11bHRpc2VsZWN0LlxuICAgICAgICAgKi9cbiAgICAgICAgZGlzYWJsZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB0aGlzLiRzZWxlY3QucHJvcCgnZGlzYWJsZWQnLCB0cnVlKTtcbiAgICAgICAgICAgIHRoaXMuJGJ1dHRvbi5wcm9wKCdkaXNhYmxlZCcsIHRydWUpXG4gICAgICAgICAgICAgICAgLmFkZENsYXNzKCdkaXNhYmxlZCcpO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBTZXQgdGhlIG9wdGlvbnMuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSB7QXJyYXl9IG9wdGlvbnNcbiAgICAgICAgICovXG4gICAgICAgIHNldE9wdGlvbnM6IGZ1bmN0aW9uKG9wdGlvbnMpIHtcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucyA9IHRoaXMubWVyZ2VPcHRpb25zKG9wdGlvbnMpO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBNZXJnZXMgdGhlIGdpdmVuIG9wdGlvbnMgd2l0aCB0aGUgZGVmYXVsdCBvcHRpb25zLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0ge0FycmF5fSBvcHRpb25zXG4gICAgICAgICAqIEByZXR1cm5zIHtBcnJheX1cbiAgICAgICAgICovXG4gICAgICAgIG1lcmdlT3B0aW9uczogZnVuY3Rpb24ob3B0aW9ucykge1xuICAgICAgICAgICAgcmV0dXJuICQuZXh0ZW5kKHRydWUsIHt9LCB0aGlzLmRlZmF1bHRzLCB0aGlzLm9wdGlvbnMsIG9wdGlvbnMpO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDaGVja3Mgd2hldGhlciBhIHNlbGVjdCBhbGwgY2hlY2tib3ggaXMgcHJlc2VudC5cbiAgICAgICAgICpcbiAgICAgICAgICogQHJldHVybnMge0Jvb2xlYW59XG4gICAgICAgICAqL1xuICAgICAgICBoYXNTZWxlY3RBbGw6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcmV0dXJuICQoJ2xpLm11bHRpc2VsZWN0LWFsbCcsIHRoaXMuJHVsKS5sZW5ndGggPiAwO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBVcGRhdGVzIHRoZSBzZWxlY3QgYWxsIGNoZWNrYm94IGJhc2VkIG9uIHRoZSBjdXJyZW50bHkgZGlzcGxheWVkIGFuZCBzZWxlY3RlZCBjaGVja2JveGVzLlxuICAgICAgICAgKi9cbiAgICAgICAgdXBkYXRlU2VsZWN0QWxsOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmhhc1NlbGVjdEFsbCgpKSB7XG4gICAgICAgICAgICAgICAgdmFyIGFsbEJveGVzID0gJChcImxpOm5vdCgubXVsdGlzZWxlY3QtaXRlbSk6bm90KC5maWx0ZXItaGlkZGVuKSBpbnB1dDplbmFibGVkXCIsIHRoaXMuJHVsKTtcbiAgICAgICAgICAgICAgICB2YXIgYWxsQm94ZXNMZW5ndGggPSBhbGxCb3hlcy5sZW5ndGg7XG4gICAgICAgICAgICAgICAgdmFyIGNoZWNrZWRCb3hlc0xlbmd0aCA9IGFsbEJveGVzLmZpbHRlcihcIjpjaGVja2VkXCIpLmxlbmd0aDtcbiAgICAgICAgICAgICAgICB2YXIgc2VsZWN0QWxsTGkgID0gJChcImxpLm11bHRpc2VsZWN0LWFsbFwiLCB0aGlzLiR1bCk7XG4gICAgICAgICAgICAgICAgdmFyIHNlbGVjdEFsbElucHV0ID0gc2VsZWN0QWxsTGkuZmluZChcImlucHV0XCIpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGlmIChjaGVja2VkQm94ZXNMZW5ndGggPiAwICYmIGNoZWNrZWRCb3hlc0xlbmd0aCA9PT0gYWxsQm94ZXNMZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0QWxsSW5wdXQucHJvcChcImNoZWNrZWRcIiwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdEFsbExpLmFkZENsYXNzKHRoaXMub3B0aW9ucy5zZWxlY3RlZENsYXNzKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vcHRpb25zLm9uU2VsZWN0QWxsKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RBbGxJbnB1dC5wcm9wKFwiY2hlY2tlZFwiLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdEFsbExpLnJlbW92ZUNsYXNzKHRoaXMub3B0aW9ucy5zZWxlY3RlZENsYXNzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFVwZGF0ZSB0aGUgYnV0dG9uIHRleHQgYW5kIGl0cyB0aXRsZSBiYXNlZCBvbiB0aGUgY3VycmVudGx5IHNlbGVjdGVkIG9wdGlvbnMuXG4gICAgICAgICAqL1xuICAgICAgICB1cGRhdGVCdXR0b25UZXh0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHZhciBvcHRpb25zID0gdGhpcy5nZXRTZWxlY3RlZCgpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyBGaXJzdCB1cGRhdGUgdGhlIGRpc3BsYXllZCBidXR0b24gdGV4dC5cbiAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMuZW5hYmxlSFRNTCkge1xuICAgICAgICAgICAgICAgICQoJy5tdWx0aXNlbGVjdCAubXVsdGlzZWxlY3Qtc2VsZWN0ZWQtdGV4dCcsIHRoaXMuJGNvbnRhaW5lcikuaHRtbCh0aGlzLm9wdGlvbnMuYnV0dG9uVGV4dChvcHRpb25zLCB0aGlzLiRzZWxlY3QpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICQoJy5tdWx0aXNlbGVjdCAubXVsdGlzZWxlY3Qtc2VsZWN0ZWQtdGV4dCcsIHRoaXMuJGNvbnRhaW5lcikudGV4dCh0aGlzLm9wdGlvbnMuYnV0dG9uVGV4dChvcHRpb25zLCB0aGlzLiRzZWxlY3QpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8gTm93IHVwZGF0ZSB0aGUgdGl0bGUgYXR0cmlidXRlIG9mIHRoZSBidXR0b24uXG4gICAgICAgICAgICAkKCcubXVsdGlzZWxlY3QnLCB0aGlzLiRjb250YWluZXIpLmF0dHIoJ3RpdGxlJywgdGhpcy5vcHRpb25zLmJ1dHRvblRpdGxlKG9wdGlvbnMsIHRoaXMuJHNlbGVjdCkpO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBHZXQgYWxsIHNlbGVjdGVkIG9wdGlvbnMuXG4gICAgICAgICAqXG4gICAgICAgICAqIEByZXR1cm5zIHtqUVVlcnl9XG4gICAgICAgICAqL1xuICAgICAgICBnZXRTZWxlY3RlZDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICByZXR1cm4gJCgnb3B0aW9uJywgdGhpcy4kc2VsZWN0KS5maWx0ZXIoXCI6c2VsZWN0ZWRcIik7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEdldHMgYSBzZWxlY3Qgb3B0aW9uIGJ5IGl0cyB2YWx1ZS5cbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlXG4gICAgICAgICAqIEByZXR1cm5zIHtqUXVlcnl9XG4gICAgICAgICAqL1xuICAgICAgICBnZXRPcHRpb25CeVZhbHVlOiBmdW5jdGlvbiAodmFsdWUpIHtcblxuICAgICAgICAgICAgdmFyIG9wdGlvbnMgPSAkKCdvcHRpb24nLCB0aGlzLiRzZWxlY3QpO1xuICAgICAgICAgICAgdmFyIHZhbHVlVG9Db21wYXJlID0gdmFsdWUudG9TdHJpbmcoKTtcblxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBvcHRpb25zLmxlbmd0aDsgaSA9IGkgKyAxKSB7XG4gICAgICAgICAgICAgICAgdmFyIG9wdGlvbiA9IG9wdGlvbnNbaV07XG4gICAgICAgICAgICAgICAgaWYgKG9wdGlvbi52YWx1ZSA9PT0gdmFsdWVUb0NvbXBhcmUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICQob3B0aW9uKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEdldCB0aGUgaW5wdXQgKHJhZGlvL2NoZWNrYm94KSBieSBpdHMgdmFsdWUuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZVxuICAgICAgICAgKiBAcmV0dXJucyB7alF1ZXJ5fVxuICAgICAgICAgKi9cbiAgICAgICAgZ2V0SW5wdXRCeVZhbHVlOiBmdW5jdGlvbiAodmFsdWUpIHtcblxuICAgICAgICAgICAgdmFyIGNoZWNrYm94ZXMgPSAkKCdsaSBpbnB1dCcsIHRoaXMuJHVsKTtcbiAgICAgICAgICAgIHZhciB2YWx1ZVRvQ29tcGFyZSA9IHZhbHVlLnRvU3RyaW5nKCk7XG5cbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2hlY2tib3hlcy5sZW5ndGg7IGkgPSBpICsgMSkge1xuICAgICAgICAgICAgICAgIHZhciBjaGVja2JveCA9IGNoZWNrYm94ZXNbaV07XG4gICAgICAgICAgICAgICAgaWYgKGNoZWNrYm94LnZhbHVlID09PSB2YWx1ZVRvQ29tcGFyZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJChjaGVja2JveCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBVc2VkIGZvciBrbm9ja291dCBpbnRlZ3JhdGlvbi5cbiAgICAgICAgICovXG4gICAgICAgIHVwZGF0ZU9yaWdpbmFsT3B0aW9uczogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB0aGlzLm9yaWdpbmFsT3B0aW9ucyA9IHRoaXMuJHNlbGVjdC5jbG9uZSgpWzBdLm9wdGlvbnM7XG4gICAgICAgIH0sXG5cbiAgICAgICAgYXN5bmNGdW5jdGlvbjogZnVuY3Rpb24oY2FsbGJhY2ssIHRpbWVvdXQsIHNlbGYpIHtcbiAgICAgICAgICAgIHZhciBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAzKTtcbiAgICAgICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrLmFwcGx5KHNlbGYgfHwgd2luZG93LCBhcmdzKTtcbiAgICAgICAgICAgIH0sIHRpbWVvdXQpO1xuICAgICAgICB9LFxuXG4gICAgICAgIHNldEFsbFNlbGVjdGVkVGV4dDogZnVuY3Rpb24oYWxsU2VsZWN0ZWRUZXh0KSB7XG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMuYWxsU2VsZWN0ZWRUZXh0ID0gYWxsU2VsZWN0ZWRUZXh0O1xuICAgICAgICAgICAgdGhpcy51cGRhdGVCdXR0b25UZXh0KCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgJC5mbi5tdWx0aXNlbGVjdCA9IGZ1bmN0aW9uKG9wdGlvbiwgcGFyYW1ldGVyLCBleHRyYU9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHZhciBkYXRhID0gJCh0aGlzKS5kYXRhKCdtdWx0aXNlbGVjdCcpO1xuICAgICAgICAgICAgdmFyIG9wdGlvbnMgPSB0eXBlb2Ygb3B0aW9uID09PSAnb2JqZWN0JyAmJiBvcHRpb247XG5cbiAgICAgICAgICAgIC8vIEluaXRpYWxpemUgdGhlIG11bHRpc2VsZWN0LlxuICAgICAgICAgICAgaWYgKCFkYXRhKSB7XG4gICAgICAgICAgICAgICAgZGF0YSA9IG5ldyBNdWx0aXNlbGVjdCh0aGlzLCBvcHRpb25zKTtcbiAgICAgICAgICAgICAgICAkKHRoaXMpLmRhdGEoJ211bHRpc2VsZWN0JywgZGF0YSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIENhbGwgbXVsdGlzZWxlY3QgbWV0aG9kLlxuICAgICAgICAgICAgaWYgKHR5cGVvZiBvcHRpb24gPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgZGF0YVtvcHRpb25dKHBhcmFtZXRlciwgZXh0cmFPcHRpb25zKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBpZiAob3B0aW9uID09PSAnZGVzdHJveScpIHtcbiAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5kYXRhKCdtdWx0aXNlbGVjdCcsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICAkLmZuLm11bHRpc2VsZWN0LkNvbnN0cnVjdG9yID0gTXVsdGlzZWxlY3Q7XG5cbiAgICAkKGZ1bmN0aW9uKCkge1xuICAgICAgICAkKFwic2VsZWN0W2RhdGEtcm9sZT1tdWx0aXNlbGVjdF1cIikubXVsdGlzZWxlY3QoKTtcbiAgICB9KTtcblxufSh3aW5kb3cualF1ZXJ5KTtcbiJdLCJuYW1lcyI6WyIkIiwia28iLCJiaW5kaW5nSGFuZGxlcnMiLCJtdWx0aXNlbGVjdCIsImFmdGVyIiwiaW5pdCIsImVsZW1lbnQiLCJ2YWx1ZUFjY2Vzc29yIiwiYWxsQmluZGluZ3MiLCJ2aWV3TW9kZWwiLCJiaW5kaW5nQ29udGV4dCIsIiRlbGVtZW50IiwiY29uZmlnIiwidG9KUyIsImhhcyIsIm9wdGlvbnMiLCJnZXQiLCJpc09ic2VydmFibGUiLCJjb21wdXRlZCIsInJlYWQiLCJzZXRUaW1lb3V0IiwibXMiLCJkYXRhIiwidXBkYXRlT3JpZ2luYWxPcHRpb25zIiwiZGlzcG9zZVdoZW5Ob2RlSXNSZW1vdmVkIiwidmFsdWUiLCJleHRlbmQiLCJyYXRlTGltaXQiLCJub3RpZnlXaGVuQ2hhbmdlc1N0b3AiLCJzZWxlY3RlZE9wdGlvbnMiLCJ1dGlscyIsImRvbU5vZGVEaXNwb3NhbCIsImFkZERpc3Bvc2VDYWxsYmFjayIsInVwZGF0ZSIsImZvckVhY2giLCJhcnJheSIsImNhbGxiYWNrIiwiaW5kZXgiLCJsZW5ndGgiLCJNdWx0aXNlbGVjdCIsInNlbGVjdCIsIiRzZWxlY3QiLCJhdHRyIiwibm9uU2VsZWN0ZWRUZXh0IiwibWVyZ2VPcHRpb25zIiwib3JpZ2luYWxPcHRpb25zIiwiY2xvbmUiLCJxdWVyeSIsInNlYXJjaFRpbWVvdXQiLCJsYXN0VG9nZ2xlZElucHV0IiwibXVsdGlwbGUiLCJvbkNoYW5nZSIsInByb3h5Iiwib25Ecm9wZG93blNob3ciLCJvbkRyb3Bkb3duSGlkZSIsIm9uRHJvcGRvd25TaG93biIsIm9uRHJvcGRvd25IaWRkZW4iLCJidWlsZENvbnRhaW5lciIsImJ1aWxkQnV0dG9uIiwiYnVpbGREcm9wZG93biIsImJ1aWxkU2VsZWN0QWxsIiwiYnVpbGREcm9wZG93bk9wdGlvbnMiLCJidWlsZEZpbHRlciIsInVwZGF0ZUJ1dHRvblRleHQiLCJ1cGRhdGVTZWxlY3RBbGwiLCJkaXNhYmxlSWZFbXB0eSIsImRpc2FibGUiLCJoaWRlIiwiJGNvbnRhaW5lciIsInByb3RvdHlwZSIsImRlZmF1bHRzIiwiYnV0dG9uVGV4dCIsImFsbFNlbGVjdGVkVGV4dCIsInNlbGVjdEFsbE51bWJlciIsIm51bWJlckRpc3BsYXllZCIsIm5TZWxlY3RlZFRleHQiLCJzZWxlY3RlZCIsImRlbGltaXRlciIsImRlbGltaXRlclRleHQiLCJlYWNoIiwibGFiZWwiLCJ1bmRlZmluZWQiLCJ0ZXh0Iiwic3Vic3RyIiwiYnV0dG9uVGl0bGUiLCJvcHRpb25MYWJlbCIsIm9wdGlvbiIsImNoZWNrZWQiLCJldmVudCIsIm9uU2VsZWN0QWxsIiwiZW5hYmxlSFRNTCIsImJ1dHRvbkNsYXNzIiwiaW5oZXJpdENsYXNzIiwiYnV0dG9uV2lkdGgiLCJidXR0b25Db250YWluZXIiLCJkcm9wUmlnaHQiLCJzZWxlY3RlZENsYXNzIiwibWF4SGVpZ2h0IiwiY2hlY2tib3hOYW1lIiwiaW5jbHVkZVNlbGVjdEFsbE9wdGlvbiIsImluY2x1ZGVTZWxlY3RBbGxJZk1vcmVUaGFuIiwic2VsZWN0QWxsVGV4dCIsInNlbGVjdEFsbFZhbHVlIiwic2VsZWN0QWxsTmFtZSIsImVuYWJsZUZpbHRlcmluZyIsImVuYWJsZUNhc2VJbnNlbnNpdGl2ZUZpbHRlcmluZyIsImVuYWJsZUNsaWNrYWJsZU9wdEdyb3VwcyIsImZpbHRlclBsYWNlaG9sZGVyIiwiZmlsdGVyQmVoYXZpb3IiLCJpbmNsdWRlRmlsdGVyQ2xlYXJCdG4iLCJwcmV2ZW50SW5wdXRDaGFuZ2VFdmVudCIsInRlbXBsYXRlcyIsImJ1dHRvbiIsInVsIiwiZmlsdGVyIiwiZmlsdGVyQ2xlYXJCdG4iLCJsaSIsImRpdmlkZXIiLCJsaUdyb3VwIiwiY29uc3RydWN0b3IiLCJvbiIsIiRidXR0b24iLCJhZGRDbGFzcyIsInByb3AiLCJlbmFibGUiLCJjc3MiLCJ0YWJpbmRleCIsInByZXBlbmQiLCIkdWwiLCJhcHBlbmQiLCJjaGlsZHJlbiIsInRhZyIsInRvTG93ZXJDYXNlIiwiY3JlYXRlT3B0Z3JvdXAiLCJjcmVhdGVEaXZpZGVyIiwiY3JlYXRlT3B0aW9uVmFsdWUiLCIkdGFyZ2V0IiwidGFyZ2V0IiwiaXNTZWxlY3RBbGxPcHRpb24iLCJ2YWwiLCJjbG9zZXN0IiwicmVtb3ZlQ2xhc3MiLCIkb3B0aW9uIiwiZ2V0T3B0aW9uQnlWYWx1ZSIsIiRvcHRpb25zTm90VGhpcyIsIm5vdCIsIiRjaGVja2JveGVzTm90VGhpcyIsInNlbGVjdEFsbCIsImRlc2VsZWN0QWxsIiwiY2xpY2siLCJjaGFuZ2UiLCJlIiwic2hpZnRLZXkiLCJzdG9wUHJvcGFnYXRpb24iLCJpcyIsInByZXZlbnREZWZhdWx0IiwiZmluZCIsImZyb20iLCJ0byIsInRtcCIsInJhbmdlIiwic2xpY2UiLCJ0b2dnbGVDbGFzcyIsImkiLCJqIiwiJGNoZWNrYm94IiwidHJpZ2dlciIsImJsdXIiLCJvZmYiLCJrZXlDb2RlIiwiaGFzQ2xhc3MiLCIkaXRlbXMiLCIkY3VycmVudCIsImVxIiwiZm9jdXMiLCJncm91cCIsInBhcmVudCIsIiRvcHRpb25zIiwibmV4dFVudGlsIiwiJHZpc2libGVPcHRpb25zIiwiYWxsQ2hlY2tlZCIsIm9wdGlvbklucHV0cyIsImlucHV0VHlwZSIsIiRsaSIsIiRsYWJlbCIsImh0bWwiLCIkZGl2aWRlciIsImdyb3VwTmFtZSIsInRvU3RyaW5nIiwiYWxyZWFkeUhhc1NlbGVjdEFsbCIsImhhc1NlbGVjdEFsbCIsImluY2x1ZGVTZWxlY3RBbGxEaXZpZGVyIiwiZW5hYmxlRmlsdGVyTGVuZ3RoIiwiTWF0aCIsIm1heCIsIiRmaWx0ZXIiLCJjbGVhckJ0biIsImNsZWFyVGltZW91dCIsInNob3ciLCJ3aGljaCIsImFzeW5jRnVuY3Rpb24iLCJjdXJyZW50R3JvdXAiLCJjdXJyZW50R3JvdXBWaXNpYmxlIiwiZmlsdGVyQ2FuZGlkYXRlIiwic2hvd0VsZW1lbnQiLCJpbmRleE9mIiwidG9nZ2xlIiwiZGVzdHJveSIsInJlbW92ZSIsInJlZnJlc2giLCIkaW5wdXQiLCJzZWxlY3RWYWx1ZXMiLCJ0cmlnZ2VyT25DaGFuZ2UiLCJpc0FycmF5IiwiZ2V0SW5wdXRCeVZhbHVlIiwiY2xlYXJTZWxlY3Rpb24iLCJkZXNlbGVjdCIsImRlc2VsZWN0VmFsdWVzIiwianVzdFZpc2libGUiLCJ0cmlnZ2VyT25TZWxlY3RBbGwiLCJhbGxDaGVja2JveGVzIiwidmlzaWJsZUNoZWNrYm94ZXMiLCJhbGxDaGVja2JveGVzQ291bnQiLCJ2aXNpYmxlQ2hlY2tib3hlc0NvdW50IiwidmFsdWVzIiwibWFwIiwiaW5BcnJheSIsInJlYnVpbGQiLCJkYXRhcHJvdmlkZXIiLCJncm91cENvdW50ZXIiLCJlbXB0eSIsIiR0YWciLCJkaXNhYmxlZCIsInN1Yk9wdGlvbiIsInRpdGxlIiwic2V0T3B0aW9ucyIsImFsbEJveGVzIiwiYWxsQm94ZXNMZW5ndGgiLCJjaGVja2VkQm94ZXNMZW5ndGgiLCJzZWxlY3RBbGxMaSIsInNlbGVjdEFsbElucHV0IiwiZ2V0U2VsZWN0ZWQiLCJ2YWx1ZVRvQ29tcGFyZSIsImNoZWNrYm94ZXMiLCJjaGVja2JveCIsInRpbWVvdXQiLCJzZWxmIiwiYXJncyIsIkFycmF5IiwiY2FsbCIsImFyZ3VtZW50cyIsImFwcGx5Iiwid2luZG93Iiwic2V0QWxsU2VsZWN0ZWRUZXh0IiwiZm4iLCJwYXJhbWV0ZXIiLCJleHRyYU9wdGlvbnMiLCJfdHlwZW9mIiwiQ29uc3RydWN0b3IiLCJqUXVlcnkiXSwic291cmNlUm9vdCI6IiJ9