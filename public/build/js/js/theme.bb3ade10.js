(self["webpackChunk"] = self["webpackChunk"] || []).push([["js/theme"],{

/***/ "./assets/js/portoadmin/theme.js":
/*!***************************************!*\
  !*** ./assets/js/portoadmin/theme.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

/* provided dependency */ var jQuery = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
__webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
__webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
__webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
__webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
__webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");
__webpack_require__(/*! core-js/modules/es.array.index-of.js */ "./node_modules/core-js/modules/es.array.index-of.js");
__webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
__webpack_require__(/*! core-js/modules/es.array.join.js */ "./node_modules/core-js/modules/es.array.join.js");
__webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
__webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
__webpack_require__(/*! core-js/modules/es.array.splice.js */ "./node_modules/core-js/modules/es.array.splice.js");
__webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
__webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
__webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
__webpack_require__(/*! core-js/modules/es.parse-float.js */ "./node_modules/core-js/modules/es.parse-float.js");
__webpack_require__(/*! core-js/modules/es.parse-int.js */ "./node_modules/core-js/modules/es.parse-int.js");
__webpack_require__(/*! core-js/modules/es.regexp.constructor.js */ "./node_modules/core-js/modules/es.regexp.constructor.js");
__webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
__webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
__webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
__webpack_require__(/*! core-js/modules/es.string.match.js */ "./node_modules/core-js/modules/es.string.match.js");
__webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
__webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
__webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
/*
Name: 			Theme Base
Written by: 	Okler Themes - (http://www.okler.net)
Theme Version: 	2.2.0
*/

window.theme = {};

// Theme Common Functions
window.theme.fn = {
  getOptions: function getOptions(opts) {
    if (_typeof(opts) == 'object') {
      return opts;
    } else if (typeof opts == 'string') {
      try {
        return JSON.parse(opts.replace(/'/g, '"').replace(';', ''));
      } catch (e) {
        return {};
      }
    } else {
      return {};
    }
  }
};

// Animate
(function (theme, $) {
  theme = theme || {};
  var instanceName = '__animate';
  var PluginAnimate = function PluginAnimate($el, opts) {
    return this.initialize($el, opts);
  };
  PluginAnimate.defaults = {
    accX: 0,
    accY: -150,
    delay: 1,
    duration: '1s'
  };
  PluginAnimate.prototype = {
    initialize: function initialize($el, opts) {
      if ($el.data(instanceName)) {
        return this;
      }
      this.$el = $el;
      this.setData().setOptions(opts).build();
      return this;
    },
    setData: function setData() {
      this.$el.data(instanceName, this);
      return this;
    },
    setOptions: function setOptions(opts) {
      this.options = $.extend(true, {}, PluginAnimate.defaults, opts, {
        wrapper: this.$el
      });
      return this;
    },
    build: function build() {
      var self = this,
        $el = this.options.wrapper,
        delay = 0,
        duration = '1s',
        elTopDistance = $el.offset().top,
        windowTopDistance = $(window).scrollTop();
      $(document).ready(function () {
        $el.addClass('appear-animation animated');
        if (!$('html').hasClass('no-csstransitions') && $(window).width() > 767 && elTopDistance > windowTopDistance) {
          $el.appear(function () {
            $el.one('animation:show', function (ev) {
              delay = $el.attr('data-appear-animation-delay') ? $el.attr('data-appear-animation-delay') : self.options.delay;
              duration = $el.attr('data-appear-animation-duration') ? $el.attr('data-appear-animation-duration') : self.options.duration;
              if (duration != '1s') {
                $el.css('animation-duration', duration);
              }
              setTimeout(function () {
                $el.addClass($el.attr('data-appear-animation') + ' appear-animation-visible');
              }, delay);
            });
            $el.trigger('animation:show');
          }, {
            accX: self.options.accX,
            accY: self.options.accY
          });
        } else {
          $el.addClass('appear-animation-visible');
        }
      });
      return this;
    }
  };

  // expose to scope
  $.extend(theme, {
    PluginAnimate: PluginAnimate
  });

  // jquery plugin
  $.fn.themePluginAnimate = function (opts) {
    return this.map(function () {
      var $this = $(this);
      if ($this.data(instanceName)) {
        return $this.data(instanceName);
      } else {
        return new PluginAnimate($this, opts);
      }
    });
  };
}).apply(this, [window.theme, jQuery]);

// Bootstrap Toggle
(function ($) {
  'use strict';

  var $window = $(window);
  var toggleClass = function toggleClass($el) {
    if (!!$el.data('toggleClassBinded')) {
      return false;
    }
    var $target, className, eventName;
    $target = $($el.attr('data-target'));
    className = $el.attr('data-toggle-class');
    eventName = $el.attr('data-fire-event');
    $el.on('click.toggleClass', function (e) {
      e.preventDefault();
      $target.toggleClass(className);
      var hasClass = $target.hasClass(className);
      if (!!eventName) {
        $window.trigger(eventName, {
          added: hasClass,
          removed: !hasClass
        });
      }
    });
    $el.data('toggleClassBinded', true);
    return true;
  };
  $(function () {
    $('[data-toggle-class][data-target]').each(function () {
      toggleClass($(this));
    });
  });
}).apply(this, [jQuery]);

// Cards
(function ($) {
  $(function () {
    $('.card').on('card:toggle', function () {
      var $this, direction;
      $this = $(this);
      direction = $this.hasClass('card-collapsed') ? 'Down' : 'Up';
      $this.find('.card-body, .card-footer')['slide' + direction](200, function () {
        $this[(direction === 'Up' ? 'add' : 'remove') + 'Class']('card-collapsed');
      });
    }).on('card:dismiss', function () {
      var $this = $(this);
      if (!!($this.parent('div').attr('class') || '').match(/col-(xs|sm|md|lg)/g) && $this.siblings().length === 0) {
        $row = $this.closest('.row');
        $this.parent('div').remove();
        if ($row.children().length === 0) {
          $row.remove();
        }
      } else {
        $this.remove();
      }
    }).on('click', '[data-card-toggle]', function (e) {
      e.preventDefault();
      $(this).closest('.card').trigger('card:toggle');
    }).on('click', '[data-card-dismiss]', function (e) {
      e.preventDefault();
      $(this).closest('.card').trigger('card:dismiss');
    })
    /* Deprecated */.on('click', '.card-actions a.fa-caret-up', function (e) {
      e.preventDefault();
      var $this = $(this);
      $this.removeClass('fa-caret-up').addClass('fa-caret-down');
      $this.closest('.card').trigger('card:toggle');
    }).on('click', '.card-actions a.fa-caret-down', function (e) {
      e.preventDefault();
      var $this = $(this);
      $this.removeClass('fa-caret-down').addClass('fa-caret-up');
      $this.closest('.card').trigger('card:toggle');
    }).on('click', '.card-actions a.fa-times', function (e) {
      e.preventDefault();
      var $this = $(this);
      $this.closest('.card').trigger('card:dismiss');
    });
  });
})(jQuery);

// Carousel
(function (theme, $) {
  theme = theme || {};
  var initialized = false;
  var instanceName = '__carousel';
  var PluginCarousel = function PluginCarousel($el, opts) {
    return this.initialize($el, opts);
  };
  PluginCarousel.defaults = {
    navText: []
  };
  PluginCarousel.prototype = {
    initialize: function initialize($el, opts) {
      if ($el.data(instanceName)) {
        return this;
      }
      this.$el = $el;
      this.setData().setOptions(opts).build();
      return this;
    },
    setData: function setData() {
      this.$el.data(instanceName, this);
      return this;
    },
    setOptions: function setOptions(opts) {
      this.options = $.extend(true, {}, PluginCarousel.defaults, opts, {
        wrapper: this.$el
      });
      return this;
    },
    build: function build() {
      this.options.wrapper.owlCarousel(this.options).addClass("owl-carousel-init");
      return this;
    }
  };

  // expose to scope
  $.extend(theme, {
    PluginCarousel: PluginCarousel
  });

  // jquery plugin
  $.fn.themePluginCarousel = function (opts) {
    return this.map(function () {
      var $this = $(this);
      if ($this.data(instanceName)) {
        return $this.data(instanceName);
      } else {
        return new PluginCarousel($this, opts);
      }
    });
  };
}).apply(this, [window.theme, jQuery]);

// Chart Circular
(function (theme, $) {
  theme = theme || {};
  var instanceName = '__chartCircular';
  var PluginChartCircular = function PluginChartCircular($el, opts) {
    return this.initialize($el, opts);
  };
  PluginChartCircular.defaults = {
    accX: 0,
    accY: -150,
    delay: 1,
    barColor: '#0088CC',
    trackColor: '#f2f2f2',
    scaleColor: false,
    scaleLength: 5,
    lineCap: 'round',
    lineWidth: 13,
    size: 175,
    rotate: 0,
    animate: {
      duration: 2500,
      enabled: true
    }
  };
  PluginChartCircular.prototype = {
    initialize: function initialize($el, opts) {
      if ($el.data(instanceName)) {
        return this;
      }
      this.$el = $el;
      this.setData().setOptions(opts).build();
      return this;
    },
    setData: function setData() {
      this.$el.data(instanceName, this);
      return this;
    },
    setOptions: function setOptions(opts) {
      this.options = $.extend(true, {}, PluginChartCircular.defaults, opts, {
        wrapper: this.$el
      });
      return this;
    },
    build: function build() {
      var self = this,
        $el = this.options.wrapper,
        value = $el.attr('data-percent') ? $el.attr('data-percent') : 0,
        percentEl = $el.find('.percent'),
        shouldAnimate,
        data;
      shouldAnimate = $.isFunction($.fn['appear']) && typeof $.browser !== 'undefined' && !$.browser.mobile;
      data = {
        accX: self.options.accX,
        accY: self.options.accY
      };
      $.extend(true, self.options, {
        onStep: function onStep(from, to, currentValue) {
          percentEl.html(parseInt(currentValue));
        }
      });
      $el.attr('data-percent', shouldAnimate ? 0 : value);
      $el.easyPieChart(this.options);
      if (shouldAnimate) {
        $el.appear(function () {
          setTimeout(function () {
            $el.data('easyPieChart').update(value);
            $el.attr('data-percent', value);
          }, self.options.delay);
        }, data);
      } else {
        $el.data('easyPieChart').update(value);
        $el.attr('data-percent', value);
      }
      return this;
    }
  };

  // expose to scope
  $.extend(true, theme, {
    Chart: {
      PluginChartCircular: PluginChartCircular
    }
  });

  // jquery plugin
  $.fn.themePluginChartCircular = function (opts) {
    return this.map(function () {
      var $this = $(this);
      if ($this.data(instanceName)) {
        return $this.data(instanceName);
      } else {
        return new PluginChartCircular($this, opts);
      }
    });
  };
}).apply(this, [window.theme, jQuery]);

// Codemirror
(function (theme, $) {
  theme = theme || {};
  var instanceName = '__codemirror';
  var PluginCodeMirror = function PluginCodeMirror($el, opts) {
    return this.initialize($el, opts);
  };
  PluginCodeMirror.defaults = {
    lineNumbers: true,
    styleActiveLine: true,
    matchBrackets: true,
    theme: 'monokai'
  };
  PluginCodeMirror.prototype = {
    initialize: function initialize($el, opts) {
      if ($el.data(instanceName)) {
        return this;
      }
      this.$el = $el;
      this.setData().setOptions(opts).build();
      return this;
    },
    setData: function setData() {
      this.$el.data(instanceName, this);
      return this;
    },
    setOptions: function setOptions(opts) {
      this.options = $.extend(true, {}, PluginCodeMirror.defaults, opts);
      return this;
    },
    build: function build() {
      CodeMirror.fromTextArea(this.$el.get(0), this.options);
      return this;
    }
  };

  // expose to scope
  $.extend(theme, {
    PluginCodeMirror: PluginCodeMirror
  });

  // jquery plugin
  $.fn.themePluginCodeMirror = function (opts) {
    return this.each(function () {
      var $this = $(this);
      if ($this.data(instanceName)) {
        return $this.data(instanceName);
      } else {
        return new PluginCodeMirror($this, opts);
      }
    });
  };
}).apply(this, [window.theme, jQuery]);

// Colorpicker
(function (theme, $) {
  theme = theme || {};
  var instanceName = '__colorpicker';
  var PluginColorPicker = function PluginColorPicker($el, opts) {
    return this.initialize($el, opts);
  };
  PluginColorPicker.defaults = {};
  PluginColorPicker.prototype = {
    initialize: function initialize($el, opts) {
      if ($el.data(instanceName)) {
        return this;
      }
      this.$el = $el;
      this.setData().setOptions(opts).build();
      return this;
    },
    setData: function setData() {
      this.$el.data(instanceName, this);
      return this;
    },
    setOptions: function setOptions(opts) {
      this.options = $.extend(true, {}, PluginColorPicker.defaults, opts);
      return this;
    },
    build: function build() {
      this.$el.colorpicker(this.options);
      return this;
    }
  };

  // expose to scope
  $.extend(theme, {
    PluginColorPicker: PluginColorPicker
  });

  // jquery plugin
  $.fn.themePluginColorPicker = function (opts) {
    return this.each(function () {
      var $this = $(this);
      if ($this.data(instanceName)) {
        return $this.data(instanceName);
      } else {
        return new PluginColorPicker($this, opts);
      }
    });
  };
}).apply(this, [window.theme, jQuery]);

// Data Tables - Config
(function ($) {
  'use strict';

  // we overwrite initialize of all datatables here
  // because we want to use select2, give search input a bootstrap look
  // keep in mind if you overwrite this fnInitComplete somewhere,
  // you should run the code inside this function to keep functionality.
  //
  // there's no better way to do this at this time :(
  if ($.isFunction($.fn['dataTable'])) {
    $.extend(true, $.fn.dataTable.defaults, {
      oLanguage: {
        sLengthMenu: '_MENU_ records per page',
        sProcessing: '<i class="fas fa-spinner fa-spin"></i> Loading',
        sSearch: ''
      },
      fnInitComplete: function fnInitComplete(settings, json) {
        // select 2
        if ($.isFunction($.fn['select2'])) {
          $('.dataTables_length select', settings.nTableWrapper).select2({
            theme: 'bootstrap',
            minimumResultsForSearch: -1
          });
        }
        var options = $('table', settings.nTableWrapper).data('plugin-options') || {};

        // search
        var $search = $('.dataTables_filter input', settings.nTableWrapper);
        $search.attr({
          placeholder: typeof options.searchPlaceholder !== 'undefined' ? options.searchPlaceholder : 'Search...'
        }).removeClass('form-control-sm').addClass('form-control pull-right');
        if ($.isFunction($.fn.placeholder)) {
          $search.placeholder();
        }
      }
    });
  }
}).apply(this, [jQuery]);

// Datepicker
(function (theme, $) {
  theme = theme || {};
  var instanceName = '__datepicker';
  var PluginDatePicker = function PluginDatePicker($el, opts) {
    return this.initialize($el, opts);
  };
  PluginDatePicker.defaults = {};
  PluginDatePicker.prototype = {
    initialize: function initialize($el, opts) {
      if ($el.data(instanceName)) {
        return this;
      }
      this.$el = $el;
      this.setVars().setData().setOptions(opts).build();
      return this;
    },
    setVars: function setVars() {
      this.skin = this.$el.data('plugin-skin');
      return this;
    },
    setData: function setData() {
      this.$el.data(instanceName, this);
      return this;
    },
    setOptions: function setOptions(opts) {
      this.options = $.extend(true, {}, PluginDatePicker.defaults, opts);
      return this;
    },
    build: function build() {
      this.$el.bootstrapDP(this.options);
      if (!!this.skin && typeof this.$el.data('datepicker').picker != 'undefined') {
        this.$el.data('datepicker').picker.addClass('datepicker-' + this.skin);
      }
      return this;
    }
  };

  // expose to scope
  $.extend(theme, {
    PluginDatePicker: PluginDatePicker
  });

  // jquery plugin
  $.fn.themePluginDatePicker = function (opts) {
    return this.each(function () {
      var $this = $(this);
      if ($this.data(instanceName)) {
        return $this.data(instanceName);
      } else {
        return new PluginDatePicker($this, opts);
      }
    });
  };
}).apply(this, [window.theme, jQuery]);

// Header Menu Nav
(function (theme, $) {
  'use strict';

  theme = theme || {};
  var initialized = false;
  $.extend(theme, {
    Nav: {
      defaults: {
        wrapper: $('#mainNav'),
        scrollDelay: 600,
        scrollAnimation: 'easeOutQuad'
      },
      initialize: function initialize($wrapper, opts) {
        if (initialized) {
          return this;
        }
        initialized = true;
        this.$wrapper = $wrapper || this.defaults.wrapper;
        this.setOptions(opts).build().events();
        return this;
      },
      setOptions: function setOptions(opts) {
        // this.options = $.extend(true, {}, this.defaults, opts, theme.fn.getOptions(this.$wrapper.data('plugin-options')));

        return this;
      },
      build: function build() {
        var self = this,
          $html = $('html'),
          $header = $('.header'),
          thumbInfoPreview;

        // Add Arrows
        $header.find('.dropdown-toggle:not(.notification-icon), .dropdown-submenu > a').append($('<i />').addClass('fas fa-caret-down'));

        // Preview Thumbs
        self.$wrapper.find('a[data-thumb-preview]').each(function () {
          thumbInfoPreview = $('<span />').addClass('thumb-info thumb-info-preview').append($('<span />').addClass('thumb-info-wrapper').append($('<span />').addClass('thumb-info-image').css('background-image', 'url(' + $(this).data('thumb-preview') + ')')));
          $(this).append(thumbInfoPreview);
        });

        // Side Header Right (Reverse Dropdown)
        if ($html.hasClass('side-header-right')) {
          $header.find('.dropdown').addClass('dropdown-reverse');
        }
        return this;
      },
      events: function events() {
        var self = this,
          $header = $('.header'),
          $window = $(window);
        $header.find('a[href="#"]').on('click', function (e) {
          e.preventDefault();
        });

        // Mobile Arrows
        $header.find('.dropdown-toggle[href="#"], .dropdown-submenu a[href="#"], .dropdown-toggle[href!="#"] .fa-caret-down, .dropdown-submenu a[href!="#"] .fa-caret-down').on('click', function (e) {
          e.preventDefault();
          if ($window.width() < 992) {
            $(this).closest('li').toggleClass('showed');
          }
        });

        // Touch Devices with normal resolutions
        if ('ontouchstart' in document.documentElement) {
          $header.find('.dropdown-toggle:not([href="#"]), .dropdown-submenu > a:not([href="#"])').on('touchstart click', function (e) {
            if ($window.width() > 991) {
              e.stopPropagation();
              e.preventDefault();
              if (e.handled !== true) {
                var li = $(this).closest('li');
                if (li.hasClass('tapped')) {
                  location.href = $(this).attr('href');
                }
                li.addClass('tapped');
                e.handled = true;
              } else {
                return false;
              }
              return false;
            }
          }).on('blur', function (e) {
            $(this).closest('li').removeClass('tapped');
          });
        }

        // Collapse Nav
        $header.find('[data-collapse-nav]').on('click', function (e) {
          $(this).parents('.collapse').removeClass('in');
        });

        // Anchors Position
        $('[data-hash]').each(function () {
          var target = $(this).attr('href'),
            offset = $(this).is("[data-hash-offset]") ? $(this).data('hash-offset') : 0;
          if ($(target).get(0)) {
            $(this).on('click', function (e) {
              e.preventDefault();

              // Close Collapse if Opened
              $(this).parents('.collapse.in').removeClass('in');
              self.scrollToTarget(target, offset);
              return;
            });
          }
        });
        return this;
      },
      scrollToTarget: function scrollToTarget(target, offset) {
        var self = this;
        $('body').addClass('scrolling');
        $('html, body').animate({
          scrollTop: $(target).offset().top - offset
        }, self.options.scrollDelay, self.options.scrollAnimation, function () {
          $('body').removeClass('scrolling');
        });
        return this;
      }
    }
  });
}).apply(this, [window.theme, jQuery]);

// iosSwitcher
(function (theme, $) {
  theme = theme || {};
  var instanceName = '__IOS7Switch';
  var PluginIOS7Switch = function PluginIOS7Switch($el) {
    return this.initialize($el);
  };
  PluginIOS7Switch.prototype = {
    initialize: function initialize($el) {
      if ($el.data(instanceName)) {
        return this;
      }
      this.$el = $el;
      this.setData().build();
      return this;
    },
    setData: function setData() {
      this.$el.data(instanceName, this);
      return this;
    },
    build: function build() {
      var switcher = new Switch(this.$el.get(0));
      $(switcher.el).on('click', function (e) {
        e.preventDefault();
        switcher.toggle();
      });
      return this;
    }
  };

  // expose to scope
  $.extend(theme, {
    PluginIOS7Switch: PluginIOS7Switch
  });

  // jquery plugin
  $.fn.themePluginIOS7Switch = function (opts) {
    return this.each(function () {
      var $this = $(this);
      if ($this.data(instanceName)) {
        return $this.data(instanceName);
      } else {
        return new PluginIOS7Switch($this);
      }
    });
  };
}).apply(this, [window.theme, jQuery]);

// Form to Object
(function ($) {
  'use strict';

  $.fn.formToObject = function () {
    var arrayData, objectData;
    arrayData = this.serializeArray();
    objectData = {};
    $.each(arrayData, function () {
      var value;
      if (this.value != null) {
        value = this.value;
      } else {
        value = '';
      }
      if (objectData[this.name] != null) {
        if (!objectData[this.name].push) {
          objectData[this.name] = [objectData[this.name]];
        }
        objectData[this.name].push(value);
      } else {
        objectData[this.name] = value;
      }
    });
    return objectData;
  };
})(jQuery);

// Lightbox
(function (theme, $) {
  theme = theme || {};
  var instanceName = '__lightbox';
  var PluginLightbox = function PluginLightbox($el, opts) {
    return this.initialize($el, opts);
  };
  PluginLightbox.defaults = {
    tClose: 'Close (Esc)',
    // Alt text on close button
    tLoading: 'Loading...',
    // Text that is displayed during loading. Can contain %curr% and %total% keys
    gallery: {
      tPrev: 'Previous (Left arrow key)',
      // Alt text on left arrow
      tNext: 'Next (Right arrow key)',
      // Alt text on right arrow
      tCounter: '%curr% of %total%' // Markup for "1 of 7" counter
    },
    image: {
      tError: '<a href="%url%">The image</a> could not be loaded.' // Error message when image could not be loaded
    },
    ajax: {
      tError: '<a href="%url%">The content</a> could not be loaded.' // Error message when ajax request failed
    }
  };
  PluginLightbox.prototype = {
    initialize: function initialize($el, opts) {
      if ($el.data(instanceName)) {
        return this;
      }
      this.$el = $el;
      this.setData().setOptions(opts).build();
      return this;
    },
    setData: function setData() {
      this.$el.data(instanceName, this);
      return this;
    },
    setOptions: function setOptions(opts) {
      this.options = $.extend(true, {}, PluginLightbox.defaults, opts, {
        wrapper: this.$el
      });
      return this;
    },
    build: function build() {
      this.options.wrapper.magnificPopup(this.options);
      return this;
    }
  };

  // expose to scope
  $.extend(theme, {
    PluginLightbox: PluginLightbox
  });

  // jquery plugin
  $.fn.themePluginLightbox = function (opts) {
    return this.each(function () {
      var $this = $(this);
      if ($this.data(instanceName)) {
        return $this.data(instanceName);
      } else {
        return new PluginLightbox($this, opts);
      }
    });
  };
}).apply(this, [window.theme, jQuery]);

// Loading Overlay
(function (theme, $) {
  'use strict';

  theme = theme || {};
  var loadingOverlayTemplate = ['<div class="loading-overlay">', '<div class="bounce-loader"><div class="bounce1"></div><div class="bounce2"></div><div class="bounce3"></div></div>', '</div>'].join('');
  var LoadingOverlay = function LoadingOverlay($wrapper, options) {
    return this.initialize($wrapper, options);
  };
  LoadingOverlay.prototype = {
    options: {
      css: {}
    },
    initialize: function initialize($wrapper, options) {
      this.$wrapper = $wrapper;
      this.setVars().setOptions(options).build().events();
      this.$wrapper.data('loadingOverlay', this);
    },
    setVars: function setVars() {
      this.$overlay = this.$wrapper.find('.loading-overlay');
      return this;
    },
    setOptions: function setOptions(options) {
      if (!this.$overlay.get(0)) {
        this.matchProperties();
      }
      this.options = $.extend(true, {}, this.options, options);
      this.loaderClass = this.getLoaderClass(this.options.css.backgroundColor);
      return this;
    },
    build: function build() {
      if (!this.$overlay.closest(document.documentElement).get(0)) {
        if (!this.$cachedOverlay) {
          this.$overlay = $(loadingOverlayTemplate).clone();
          if (this.options.css) {
            this.$overlay.css(this.options.css);
            this.$overlay.find('.loader').addClass(this.loaderClass);
          }
        } else {
          this.$overlay = this.$cachedOverlay.clone();
        }
        this.$wrapper.append(this.$overlay);
      }
      if (!this.$cachedOverlay) {
        this.$cachedOverlay = this.$overlay.clone();
      }
      return this;
    },
    events: function events() {
      var _self = this;
      if (this.options.startShowing) {
        _self.show();
      }
      if (this.$wrapper.is('body') || this.options.hideOnWindowLoad) {
        $(window).on('load error', function () {
          _self.hide();
        });
      }
      if (this.options.listenOn) {
        $(this.options.listenOn).on('loading-overlay:show beforeSend.ic', function (e) {
          e.stopPropagation();
          _self.show();
        }).on('loading-overlay:hide complete.ic', function (e) {
          e.stopPropagation();
          _self.hide();
        });
      }
      this.$wrapper.on('loading-overlay:show beforeSend.ic', function (e) {
        if (e.target === _self.$wrapper.get(0)) {
          e.stopPropagation();
          _self.show();
          return true;
        }
        return false;
      }).on('loading-overlay:hide complete.ic', function (e) {
        if (e.target === _self.$wrapper.get(0)) {
          e.stopPropagation();
          _self.hide();
          return true;
        }
        return false;
      });
      return this;
    },
    show: function show() {
      this.build();
      this.position = this.$wrapper.css('position').toLowerCase();
      if (this.position != 'relative' || this.position != 'absolute' || this.position != 'fixed') {
        this.$wrapper.css({
          position: 'relative'
        });
      }
      this.$wrapper.addClass('loading-overlay-showing');
    },
    hide: function hide() {
      var _self = this;
      this.$wrapper.removeClass('loading-overlay-showing');
      setTimeout(function () {
        if (this.position != 'relative' || this.position != 'absolute' || this.position != 'fixed') {
          _self.$wrapper.css({
            position: ''
          });
        }
      }, 500);
    },
    matchProperties: function matchProperties() {
      var i, l, properties;
      properties = ['backgroundColor', 'borderRadius'];
      l = properties.length;
      for (i = 0; i < l; i++) {
        var obj = {};
        obj[properties[i]] = this.$wrapper.css(properties[i]);
        $.extend(this.options.css, obj);
      }
    },
    getLoaderClass: function getLoaderClass(backgroundColor) {
      if (!backgroundColor || backgroundColor === 'transparent' || backgroundColor === 'inherit') {
        return 'black';
      }
      var hexColor, r, g, b, yiq;
      var colorToHex = function colorToHex(color) {
        var hex, rgb;
        if (color.indexOf('#') > -1) {
          hex = color.replace('#', '');
        } else {
          rgb = color.match(/\d+/g);
          hex = ('0' + parseInt(rgb[0], 10).toString(16)).slice(-2) + ('0' + parseInt(rgb[1], 10).toString(16)).slice(-2) + ('0' + parseInt(rgb[2], 10).toString(16)).slice(-2);
        }
        if (hex.length === 3) {
          hex = hex + hex;
        }
        return hex;
      };
      hexColor = colorToHex(backgroundColor);
      r = parseInt(hexColor.substr(0, 2), 16);
      g = parseInt(hexColor.substr(2, 2), 16);
      b = parseInt(hexColor.substr(4, 2), 16);
      yiq = (r * 299 + g * 587 + b * 114) / 1000;
      return yiq >= 128 ? 'black' : 'white';
    }
  };

  // expose to scope
  $.extend(theme, {
    LoadingOverlay: LoadingOverlay
  });

  // expose as a jquery plugin
  $.fn.loadingOverlay = function (opts) {
    return this.each(function () {
      var $this = $(this);
      var loadingOverlay = $this.data('loadingOverlay');
      if (loadingOverlay) {
        return loadingOverlay;
      } else {
        var options = opts || $this.data('loading-overlay-options') || {};
        return new LoadingOverlay($this, options);
      }
    });
  };

  // auto init
  $('[data-loading-overlay]').loadingOverlay();
}).apply(this, [window.theme, jQuery]);

// Lock Screen
(function ($) {
  'use strict';

  var LockScreen = {
    initialize: function initialize() {
      this.$body = $('body');
      this.build().events();
    },
    build: function build() {
      var lockHTML, userinfo;
      userinfo = this.getUserInfo();
      this.lockHTML = this.buildTemplate(userinfo);
      this.$lock = this.$body.children('#LockScreenInline');
      this.$userPicture = this.$lock.find('#LockUserPicture');
      this.$userName = this.$lock.find('#LockUserName');
      this.$userEmail = this.$lock.find('#LockUserEmail');
      return this;
    },
    events: function events() {
      var _self = this;
      this.$body.find('[data-lock-screen="true"]').on('click', function (e) {
        e.preventDefault();
        _self.show();
      });
      return this;
    },
    formEvents: function formEvents($form) {
      var _self = this;
      $form.on('submit', function (e) {
        e.preventDefault();
        _self.hide();
      });
    },
    show: function show() {
      var _self = this,
        userinfo = this.getUserInfo();
      this.$userPicture.attr('src', userinfo.picture);
      this.$userName.text(userinfo.username);
      this.$userEmail.text(userinfo.email);
      this.$body.addClass('show-lock-screen');
      $.magnificPopup.open({
        items: {
          src: this.lockHTML,
          type: 'inline'
        },
        modal: true,
        mainClass: 'mfp-lock-screen',
        callbacks: {
          change: function change() {
            _self.formEvents(this.content.find('form'));
          }
        }
      });
    },
    hide: function hide() {
      $.magnificPopup.close();
    },
    getUserInfo: function getUserInfo() {
      var $info, picture, name, email;

      // always search in case something is changed through ajax
      $info = $('#userbox');
      picture = $info.find('.profile-picture img').attr('data-lock-picture');
      name = $info.find('.profile-info').attr('data-lock-name');
      email = $info.find('.profile-info').attr('data-lock-email');
      return {
        picture: picture,
        username: name,
        email: email
      };
    },
    buildTemplate: function buildTemplate(userinfo) {
      return ['<section id="LockScreenInline" class="body-sign body-locked body-locked-inline">', '<div class="center-sign">', '<div class="panel card-sign">', '<div class="card-body">', '<form>', '<div class="current-user text-center">', '<img id="LockUserPicture" src="{{picture}}" alt="John Doe" class="rounded-circle user-image" />', '<h2 id="LockUserName" class="user-name text-dark m-0">{{username}}</h2>', '<p  id="LockUserEmail" class="user-email m-0">{{email}}</p>', '</div>', '<div class="form-group mb-lg">', '<div class="input-group">', '<input id="pwd" name="pwd" type="password" class="form-control form-control-lg" placeholder="Password" />', '<span class="input-group-append">', '<span class="input-group-text">', '<i class="fas fa-lock"></i>', '</span>', '</span>', '</div>', '</div>', '<div class="row">', '<div class="col-6">', '<p class="mt-xs mb-0">', '<a href="#">Not John Doe?</a>', '</p>', '</div>', '<div class="col-6">', '<button type="submit" class="btn btn-primary pull-right">Unlock</button>', '</div>', '</div>', '</form>', '</div>', '</div>', '</div>', '</section>'].join('').replace(/\{\{picture\}\}/, userinfo.picture).replace(/\{\{username\}\}/, userinfo.username).replace(/\{\{email\}\}/, userinfo.email);
    }
  };
  this.LockScreen = LockScreen;
  $(function () {
    LockScreen.initialize();
  });
}).apply(this, [jQuery]);

// Map Builder
(function (theme, $) {
  'use strict';

  // prevent undefined var
  theme = theme || {};

  // internal var to check if reached limit
  var timeouts = 0;

  // instance
  var instanceName = '__gmapbuilder';

  // private
  var roundNumber = function roundNumber(number, precision) {
    if (precision < 0) {
      precision = 0;
    } else if (precision > 10) {
      precision = 10;
    }
    var a = [1, 10, 100, 1000, 10000, 100000, 1000000, 10000000, 100000000, 1000000000, 10000000000];
    return Math.round(number * a[precision]) / a[precision];
  };

  // definition
  var GMapBuilder = function GMapBuilder($wrapper, opts) {
    return this.initialize($wrapper, opts);
  };
  GMapBuilder.defaults = {
    mapSelector: '#gmap',
    markers: {
      modal: '#MarkerModal',
      list: '#MarkersList',
      removeAll: '#MarkerRemoveAll'
    },
    previewModal: '#ModalPreview',
    getCodeModal: '#ModalGetCode',
    mapOptions: {
      center: {
        lat: -38.908133,
        lng: -13.692628
      },
      panControl: true,
      zoom: 3
    }
  };
  GMapBuilder.prototype = {
    markers: [],
    initialize: function initialize($wrapper, opts) {
      this.$wrapper = $wrapper;
      this.setData().setOptions(opts).setVars().build().events();
      return this;
    },
    setData: function setData() {
      this.$wrapper.data(instanceName, this);
      return this;
    },
    setOptions: function setOptions(opts) {
      this.options = $.extend(true, {}, GMapBuilder.defaults, opts);
      return this;
    },
    setVars: function setVars() {
      this.$mapContainer = this.$wrapper.find(this.options.mapSelector);
      this.$previewModal = $(this.options.previewModal);
      this.$getCodeModal = $(this.options.getCodeModal);
      this.marker = {};
      this.marker.$modal = $(this.options.markers.modal);
      this.marker.$form = this.marker.$modal.find('form');
      this.marker.$list = $(this.options.markers.list);
      this.marker.$removeAll = $(this.options.markers.removeAll);
      return this;
    },
    build: function build() {
      var _self = this;
      if (!!window.SnazzyThemes) {
        var themeOpts = [];
        $.each(window.SnazzyThemes, function (i, theme) {
          themeOpts.push($('<option value="' + theme.id + '">' + theme.name + '</option>').data('json', theme.json));
        });
        this.$wrapper.find('[data-builder-field="maptheme"]').append(themeOpts);
      }
      this.geocoder = new google.maps.Geocoder();
      google.maps.event.addDomListener(window, 'load', function () {
        _self.options.mapOptions.center = new google.maps.LatLng(_self.options.mapOptions.center.lat, _self.options.mapOptions.center.lng);
        _self.map = new google.maps.Map(_self.$mapContainer.get(0), _self.options.mapOptions);
        _self.updateControl('latlng').updateControl('zoomlevel');
        _self.mapEvents();
      });
      return this;
    },
    events: function events() {
      var _self = this;
      this.$wrapper.find('[data-builder-field]').each(function () {
        var $this = $(this),
          field,
          value;
        field = $this.data('builder-field');
        $this.on('change', function () {
          if ($this.is('select')) {
            value = $this.children('option:selected').val().toLowerCase();
          } else {
            value = $this.val().toLowerCase();
          }
          _self.updateMap(field, value);
        });
      });
      this.marker.$form.on('submit', function (e) {
        e.preventDefault();
        _self.saveMarker(_self.marker.$form.formToObject());
      });
      this.marker.$removeAll.on('click', function (e) {
        e.preventDefault();
        _self.removeAllMarkers();
      });

      // preview events
      this.$previewModal.on('shown.bs.modal', function () {
        _self.preview();
      });
      this.$previewModal.on('hidden.bs.modal', function () {
        _self.$previewModal.find('iframe').get(0).contentWindow.document.body.innerHTML = '';
      });

      // get code events
      this.$getCodeModal.on('shown.bs.modal', function () {
        _self.getCode();
      });
      return this;
    },
    // MAP FUNCTIONS
    // -----------------------------------------------------------------------------
    mapEvents: function mapEvents() {
      var _self = this;
      google.maps.event.addDomListener(_self.map, 'resize', function () {
        google.maps.event.trigger(_self.map, 'resize');
      });
      google.maps.event.addListener(this.map, 'center_changed', function () {
        var coords = _self.map.getCenter();
        _self.updateControl('latlng', {
          lat: roundNumber(coords.lat(), 6),
          lng: roundNumber(coords.lng(), 6)
        });
      });
      google.maps.event.addListener(this.map, 'zoom_changed', function () {
        _self.updateControl('zoomlevel', _self.map.getZoom());
      });
      google.maps.event.addListener(this.map, 'maptypeid_changed', function () {
        _self.updateControl('maptype', _self.map.getMapTypeId());
      });
      return this;
    },
    updateMap: function updateMap(prop, value) {
      var updateFn;
      updateFn = this.updateMapProperty[prop];
      if ($.isFunction(updateFn)) {
        updateFn.apply(this, [value]);
      } else {
        console.info('missing update function for', prop);
      }
      return this;
    },
    updateMapProperty: {
      latlng: function latlng() {
        var lat, lng;
        lat = this.$wrapper.find('[data-builder-field][name="latitude"]').val();
        lng = this.$wrapper.find('[data-builder-field][name="longitude"]').val();
        if (lat.length > 0 && lng.length > 0) {
          this.map.setCenter(new google.maps.LatLng(lat, lng));
        }
        return this;
      },
      zoomlevel: function zoomlevel(value) {
        var value = arguments[0];
        this.map.setZoom(parseInt(value, 10));
        return this;
      },
      maptypecontrol: function maptypecontrol(value) {
        var options;
        options = {};
        if (value === 'false') {
          options.mapTypeControl = false;
        } else {
          options = {
            mapTypeControl: true,
            mapTypeControlOptions: {
              style: google.maps.MapTypeControlStyle[value.toUpperCase()]
            }
          };
        }
        this.map.setOptions(options);
        return this;
      },
      zoomcontrol: function zoomcontrol(value) {
        var options;
        options = {};
        if (value === 'false') {
          options.zoomControl = false;
        } else {
          options = {
            zoomControl: true,
            zoomControlOptions: {
              style: google.maps.ZoomControlStyle[value.toUpperCase()]
            }
          };
        }
        this.map.setOptions(options);
        return this;
      },
      scalecontrol: function scalecontrol(value) {
        var options;
        options = {};
        options.scaleControl = value !== 'false';
        this.map.setOptions(options);
        return this;
      },
      streetviewcontrol: function streetviewcontrol(value) {
        var options;
        options = {};
        options.streetViewControl = value !== 'false';
        this.map.setOptions(options);
        return this;
      },
      pancontrol: function pancontrol(value) {
        var options;
        options = {};
        options.panControl = value !== 'false';
        this.map.setOptions(options);
        return this;
      },
      overviewcontrol: function overviewcontrol(value) {
        var options;
        options = {};
        if (value === 'false') {
          options.overviewMapControl = false;
        } else {
          options = {
            overviewMapControl: true,
            overviewMapControlOptions: {
              opened: value === 'opened'
            }
          };
        }
        this.map.setOptions(options);
        return this;
      },
      draggablecontrol: function draggablecontrol(value) {
        var options;
        options = {};
        options.draggable = value !== 'false';
        this.map.setOptions(options);
        return this;
      },
      clicktozoomcontrol: function clicktozoomcontrol(value) {
        var options;
        options = {};
        options.disableDoubleClickZoom = value === 'false';
        this.map.setOptions(options);
        return this;
      },
      scrollwheelcontrol: function scrollwheelcontrol(value) {
        var options;
        options = {};
        options.scrollwheel = value !== 'false';
        this.map.setOptions(options);
        return this;
      },
      maptype: function maptype(value) {
        var options, mapStyles, mapType;
        mapStyles = this.$wrapper.find('[data-builder-field="maptheme"]').children('option').filter(':selected').data('json');
        mapType = google.maps.MapTypeId[value.toUpperCase()];
        options = {
          mapTypeId: mapType
        };
        if ($.inArray(google.maps.MapTypeId[value.toUpperCase()], ['terrain', 'roadmap']) > -1 && !!mapStyles) {
          options.styles = eval(mapStyles);
        } else {
          options.styles = false;
          this.updateControl('maptheme');
        }
        this.map.setOptions(options);
      },
      maptheme: function maptheme(value) {
        var json, mapType, options;
        mapType = google.maps.MapTypeId[this.map.getMapTypeId() === 'terrain' ? 'TERRAIN' : 'ROADMAP'];
        options = {};
        json = this.$wrapper.find('[data-builder-field="maptheme"]').children('option').filter(':selected').data('json');
        if (!json) {
          options = {
            mapTypeId: mapType,
            styles: false
          };
        } else {
          options = {
            mapTypeId: mapType,
            styles: eval(json)
          };
        }
        this.map.setOptions(options);
      }
    },
    // CONTROLS FUNCTIONS
    // -----------------------------------------------------------------------------
    updateControl: function updateControl(prop) {
      var updateFn;
      updateFn = this.updateControlValue[prop];
      if ($.isFunction(updateFn)) {
        updateFn.apply(this);
      } else {
        console.info('missing update function for', prop);
      }
      return this;
    },
    updateControlValue: {
      latlng: function latlng() {
        var center = this.map.getCenter();
        this.$wrapper.find('[data-builder-field][name="latitude"]').val(roundNumber(center.lat(), 6));
        this.$wrapper.find('[data-builder-field][name="longitude"]').val(roundNumber(center.lng(), 6));
      },
      zoomlevel: function zoomlevel() {
        var $control, level;
        level = this.map.getZoom();
        $control = this.$wrapper.find('[data-builder-field="zoomlevel"]');
        $control.children('option[value="' + level + '"]').prop('selected', true);
        if ($control.hasClass('select2-offscreen')) {
          $control.select2('val', level);
        }
      },
      maptype: function maptype() {
        var $control, mapType;
        mapType = this.map.getMapTypeId();
        $control = this.$wrapper.find('[data-builder-field="maptype"]');
        $control.children('option[value="' + mapType + '"]').prop('selected', true);
        if ($control.hasClass('select2-offscreen')) {
          $control.select2('val', mapType);
        }
      },
      maptheme: function maptheme() {
        var $control;
        $control = this.$wrapper.find('[data-builder-field="maptheme"]');
        $control.children('option[value="false"]').prop('selected', true);
        if ($control.hasClass('select2-offscreen')) {
          $control.select2('val', 'false');
        }
      }
    },
    // MARKERS FUNCTIONS
    // -----------------------------------------------------------------------------
    editMarker: function editMarker(marker) {
      this.currentMarker = marker;
      this.marker.$form.find('#MarkerLocation').val(marker.location);
      this.marker.$form.find('#MarkerTitle').val(marker.title);
      this.marker.$form.find('#MarkerDescription').val(marker.description);
      this.marker.$modal.modal('show');
    },
    removeMarker: function removeMarker(marker) {
      var i;
      marker._instance.setMap(null);
      marker._$html.remove();
      for (i = 0; i < this.markers.length; i++) {
        if (marker === this.markers[i]) {
          this.markers.splice(i, 1);
          break;
        }
      }
      if (this.markers.length === 0) {
        this.marker.$list.addClass('hidden');
      }
    },
    saveMarker: function saveMarker(marker) {
      this._geocode(marker);
    },
    removeAllMarkers: function removeAllMarkers() {
      var i = 0,
        l,
        marker;
      l = this.markers.length;
      for (; i < l; i++) {
        marker = this.markers[i];
        marker._instance.setMap(null);
        marker._$html.remove();
      }
      this.markers = [];
      this.marker.$list.addClass('hidden');
    },
    _geocode: function _geocode(marker) {
      var _self = this,
        status;
      this.geocoder.geocode({
        address: marker.location
      }, function (response, status) {
        _self._onGeocodeResult(marker, response, status);
      });
    },
    _onGeocodeResult: function _onGeocodeResult(marker, response, status) {
      var result;
      if (!response || status !== google.maps.GeocoderStatus.OK) {
        if (status == google.maps.GeocoderStatus.ZERO_RESULTS) {
          // show notification
        } else {
          timeouts++;
          if (timeouts > 3) {
            // show notification reached limit of requests
          }
        }
      } else {
        timeouts = 0;
        if (this.currentMarker) {
          this.removeMarker(this.currentMarker);
          this.currentMarker = null;
        }

        // grab first result of the list
        result = response[0];

        // get lat & lng and set to marker
        marker.lat = Math.round(result.geometry.location.lat() * 1000000) / 1000000;
        marker.lng = Math.round(result.geometry.location.lng() * 1000000) / 1000000;
        var opts = {
          position: new google.maps.LatLng(marker.lat, marker.lng),
          map: this.map
        };
        if (marker.title.length > 0) {
          opts.title = marker.title;
        }
        if (marker.description.length > 0) {
          opts.desc = marker.description;
        }
        marker.position = opts.position;
        marker._instance = new google.maps.Marker(opts);
        if (!!marker.title || !!marker.description) {
          this._bindMarkerClick(marker);
        }
        this.markers.push(marker);

        // append to markers list
        this._appendMarkerToList(marker);

        // hide modal and reset form
        this.marker.$form.get(0).reset();
        this.marker.$modal.modal('hide');
      }
    },
    _appendMarkerToList: function _appendMarkerToList(marker) {
      var _self = this,
        html;
      html = ['<li>', '<p>{location}</p>', '<a href="#" class="location-action location-center"><i class="fas fa-map-marker-alt"></i></a>', '<a href="#" class="location-action location-edit"><i class="fas fa-edit"></i></a>', '<a href="#" class="location-action location-remove text-danger"><i class="fas fa-times"></i></a>', '</li>'].join('');
      html = html.replace(/\{location\}/, !!marker.title ? marker.title : marker.location);
      marker._$html = $(html);

      // events
      marker._$html.find('.location-center').on('click', function (e) {
        _self.map.setCenter(marker.position);
      });
      marker._$html.find('.location-remove').on('click', function (e) {
        e.preventDefault();
        _self.removeMarker(marker);
      });
      marker._$html.find('.location-edit').on('click', function (e) {
        e.preventDefault();
        _self.editMarker(marker);
      });
      this.marker.$list.append(marker._$html).removeClass('hidden');
    },
    _bindMarkerClick: function _bindMarkerClick(marker) {
      var _self = this,
        html;
      html = ['<div style="background-color: #FFF; color: #000; padding: 5px; width: 150px;">', '{title}', '{description}', '</div>'].join('');
      html = html.replace(/\{title\}/, !!marker.title ? "<h4>" + marker.title + "</h4>" : "");
      html = html.replace(/\{description\}/, !!marker.description ? "<p>" + marker.description + "</p>" : "");
      marker._infoWindow = new google.maps.InfoWindow({
        content: html
      });
      google.maps.event.addListener(marker._instance, 'click', function () {
        if (marker._infoWindow.isOpened) {
          marker._infoWindow.close();
          marker._infoWindow.isOpened = false;
        } else {
          marker._infoWindow.open(_self.map, this);
          marker._infoWindow.isOpened = true;
        }
      });
    },
    preview: function preview() {
      var customScript, googleScript, iframe, previewHtml;
      previewHtml = ['<style>', 'html, body { margin: 0; padding: 0; }', '</style>', '<div id="' + this.$wrapper.find('[data-builder-field="mapid"]').val() + '" style="width: 100%; height: 100%;"></div>'];
      iframe = this.$previewModal.find('iframe').get(0).contentWindow.document;
      iframe.body.innerHTML = previewHtml.join('');
      customScript = iframe.createElement('script');
      customScript.type = 'text/javascript';
      customScript.text = "window.initialize = function() { " + this.generate() + " init(); }; ";
      iframe.body.appendChild(customScript);
      googleScript = iframe.createElement('script');
      googleScript.type = 'text/javascript';
      googleScript.text = 'function loadScript() { var script = document.createElement("script"); script.type = "text/javascript"; script.src = "//maps.googleapis.com/maps/api/js?key=&sensor=&callback=initialize"; document.body.appendChild(script); } loadScript()';
      iframe.body.appendChild(googleScript);
    },
    getCode: function getCode() {
      this.$getCodeModal.find('.modal-body pre').html(this.generate().replace(/</g, '&lt;').replace(/>/g, '&gt;'));
    },
    // GENERATE CODE
    // -----------------------------------------------------------------------------
    generate: function generate() {
      var i, work;
      var output = ['    google.maps.event.addDomListener(window, "load", init);', '    var map;', '    function init() {', '        var mapOptions = {', '            center: new google.maps.LatLng({lat}, {lng}),', '            zoom: {zoom},', '            zoomControl: {zoomControl},', '            {zoomControlOptions}', '            disableDoubleClickZoom: {disableDoubleClickZoom},', '            mapTypeControl: {mapTypeControl},', '            {mapTypeControlOptions}', '            scaleControl: {scaleControl},', '            scrollwheel: {scrollwheel},', '            panControl: {panControl},', '            streetViewControl: {streetViewControl},', '            draggable : {draggable},', '            overviewMapControl: {overviewMapControl},', '            {overviewMapControlOptions}', '            mapTypeId: google.maps.MapTypeId.{mapTypeId}{styles}', '        };', '', '        var mapElement = document.getElementById("{mapid}");', '        var map = new google.maps.Map(mapElement, mapOptions);', '        {locations}', '    }'];
      output = output.join("\r\n");
      var zoomControl = this.$wrapper.find('[data-builder-field="zoomcontrol"] option:selected').val() !== 'false';
      var mapTypeControl = this.$wrapper.find('[data-builder-field="maptypecontrol"] option:selected').val() !== 'false';
      var overviewMapControl = this.$wrapper.find('[data-builder-field="overviewcontrol"] option:selected').val().toLowerCase();
      var $themeControl = this.$wrapper.find('[data-builder-field="maptheme"] option:selected').filter(':selected');
      output = output.replace(/\{mapid\}/, this.$wrapper.find('[data-builder-field="mapid"]').val()).replace(/\{lat\}/, this.$wrapper.find('[data-builder-field][name="latitude"]').val()).replace(/\{lng\}/, this.$wrapper.find('[data-builder-field][name="longitude"]').val()).replace(/\{zoom\}/, this.$wrapper.find('[data-builder-field="zoomlevel"] option:selected').val()).replace(/\{zoomControl\}/, zoomControl).replace(/\{disableDoubleClickZoom\}/, this.$wrapper.find('[data-builder-field="clicktozoomcontrol"] option:selected').val() === 'false').replace(/\{mapTypeControl\}/, mapTypeControl).replace(/\{scaleControl\}/, this.$wrapper.find('[data-builder-field="scalecontrol"] option:selected').val() !== 'false').replace(/\{scrollwheel\}/, this.$wrapper.find('[data-builder-field="scrollwheelcontrol"] option:selected').val() !== 'false').replace(/\{panControl\}/, this.$wrapper.find('[data-builder-field="pancontrol"] option:selected').val() !== 'false').replace(/\{streetViewControl\}/, this.$wrapper.find('[data-builder-field="streetviewcontrol"] option:selected').val() !== 'false').replace(/\{draggable\}/, this.$wrapper.find('[data-builder-field="draggablecontrol"] option:selected').val() !== 'false').replace(/\{overviewMapControl\}/, overviewMapControl !== 'false').replace(/\{mapTypeId\}/, this.$wrapper.find('[data-builder-field="maptype"] option:selected').val().toUpperCase());
      if (zoomControl) {
        work = {
          zoomControlOptions: {
            style: this.$wrapper.find('[data-builder-field="maptypecontrol"] option:selected').val().toUpperCase()
          }
        };
        output = output.replace(/\{zoomControlOptions\}/, "zoomControlOptions: {\r\n                style: google.maps.ZoomControlStyle." + this.$wrapper.find('[data-builder-field="zoomcontrol"] option:selected').val().toUpperCase() + "\r\n\            },");
      } else {
        output = output.replace(/\{zoomControlOptions\}/, '');
      }
      if (mapTypeControl) {
        work = {
          zoomControlOptions: {
            style: this.$wrapper.find('[data-builder-field="maptypecontrol"] option:selected').val().toUpperCase()
          }
        };
        output = output.replace(/\{mapTypeControlOptions\}/, "mapTypeControlOptions: {\r\n                style: google.maps.MapTypeControlStyle." + this.$wrapper.find('[data-builder-field="maptypecontrol"] option:selected').val().toUpperCase() + "\r\n\            },");
      } else {
        output = output.replace(/\{mapTypeControlOptions\}/, '');
      }
      if (overviewMapControl !== 'false') {
        output = output.replace(/\{overviewMapControlOptions\}/, "overviewMapControlOptions: {\r\n                opened: " + (overviewMapControl === 'opened') + "\r\n\            },");
      } else {
        output = output.replace(/\{overviewMapControlOptions\}/, '');
      }
      if ($themeControl.val() !== 'false') {
        output = output.replace(/\{styles\}/, ',\r\n            styles: ' + $themeControl.data('json').replace(/\r\n/g, ''));
      } else {
        output = output.replace(/\{styles\}/, '');
      }
      if (this.markers.length > 0) {
        var work = ['var locations = ['];
        var m, object;
        for (i = 0; i < this.markers.length; i++) {
          m = this.markers[i];
          object = '';
          object += '            { lat: ' + m.lat + ', lng: ' + m.lng;
          if (!!m.title) {
            object += ', title: "' + m.title + '"';
          }
          if (!!m.description) {
            object += ', description: "' + m.description + '"';
          }
          object += ' }';
          if (i + 1 < this.markers.length) {
            object += ',';
          }
          work.push(object);
        }
        work.push('        ];\r\n');
        work.push('        var opts = {};');
        work.push('        for (var i = 0; i < locations.length; i++) {');
        work.push('            opts.position = new google.maps.LatLng( locations[ i ].lat, locations[ i ].lng );');
        work.push('            opts.map = map;');
        work.push('            if ( !!locations[ i ] .title ) { opts.title = locations[ i ].title; }');
        work.push('            if ( !!locations[ i ] .description ) { opts.description = locations[ i ].description; }');
        work.push('            marker = new google.maps.Marker( opts );');
        work.push('');
        work.push('            (function() {');
        work.push('                var html = [');
        work.push('                	\'<div style="background-color: #FFF; color: #000; padding: 5px; width: 150px;">\',');
        work.push('                		\'{title}\',');
        work.push('                		\'{description}\',');
        work.push('                	\'</div>\'');
        work.push('                ].join(\'\');');
        work.push('');
        work.push('                html = html.replace(/\{title\}/, !!opts.title ?  ("<h4>" + opts.title + "</h4>") : "" );');
        work.push('                html = html.replace(/\{description\}/, !!opts.description ?  ("<p>" + opts.description + "</p>") : "" );');
        work.push('                var infoWindow = new google.maps.InfoWindow({ content: html });');
        work.push('                google.maps.event.addListener( marker, \'click\', function() {');
        work.push('                	if ( infoWindow.isOpened ) {');
        work.push('                		infoWindow.close();');
        work.push('                		infoWindow.isOpened = false;');
        work.push('                	} else {');
        work.push('                		infoWindow.open( map, this );');
        work.push('                		infoWindow.isOpened = true;');
        work.push('                	}');
        work.push('                });');
        work.push('            })();');
        work.push('        }');
        output = output.replace(/\{locations\}/, work.join('\r\n'));
      } else {
        output = output.replace(/\{locations\}/, '');
      }
      console.log(output);
      return output;
    }
  };

  // expose
  $.extend(true, theme, {
    Maps: {
      GMapBuilder: GMapBuilder
    }
  });

  // jQuery plugin
  $.fn.themeGMapBuilder = function (opts) {
    return this.map(function () {
      var $this = $(this),
        instance;
      instance = $this.data(instanceName);
      if (instance) {
        return instance;
      } else {
        return new GMapBuilder($this, opts);
      }
    });
  };

  // auto initialize
  $(function () {
    $('[data-theme-gmap-builder]').each(function () {
      var $this = $(this);
      window.builder = $this.themeGMapBuilder();
    });
  });
}).apply(this, [window.theme, jQuery]);

// Markdown
(function (theme, $) {
  theme = theme || {};
  var instanceName = '__markdownEditor';
  var PluginMarkdownEditor = function PluginMarkdownEditor($el, opts) {
    return this.initialize($el, opts);
  };
  PluginMarkdownEditor.defaults = {
    iconlibrary: 'fa',
    buttons: [[{
      data: [{
        icon: {
          fa: 'fa fa-bold'
        }
      }, {
        icon: {
          fa: 'fa fa-italic'
        }
      }, {
        icon: {
          fa: 'fa fa-heading'
        }
      }]
    }, {
      data: [{
        icon: {
          fa: 'fa fa-link'
        }
      }, {
        icon: {
          fa: 'fa fa-image'
        }
      }]
    }, {
      data: [{
        icon: {
          fa: 'fa fa-list'
        }
      }, {
        icon: {
          fa: 'fa fa-list-ol'
        }
      }, {
        icon: {
          fa: 'fa fa-code'
        }
      }, {
        icon: {
          fa: 'fa fa-quote-left'
        }
      }]
    }, {
      data: [{
        icon: {
          fa: 'fa fa-search'
        }
      }]
    }]]
  };
  PluginMarkdownEditor.prototype = {
    initialize: function initialize($el, opts) {
      if ($el.data(instanceName)) {
        return this;
      }
      this.$el = $el;
      this.setData().setOptions(opts).build();
      return this;
    },
    setData: function setData() {
      this.$el.data(instanceName, this);
      return this;
    },
    setOptions: function setOptions(opts) {
      this.options = $.extend(true, {}, PluginMarkdownEditor.defaults, opts);
      return this;
    },
    build: function build() {
      this.$el.markdown(this.options);
      return this;
    }
  };

  // expose to scope
  $.extend(theme, {
    PluginMarkdownEditor: PluginMarkdownEditor
  });

  // jquery plugin
  $.fn.themePluginMarkdownEditor = function (opts) {
    return this.each(function () {
      var $this = $(this);
      if ($this.data(instanceName)) {
        return $this.data(instanceName);
      } else {
        return new PluginMarkdownEditor($this, opts);
      }
    });
  };
}).apply(this, [window.theme, jQuery]);

// Masked Input
(function (theme, $) {
  theme = theme || {};
  var instanceName = '__maskedInput';
  var PluginMaskedInput = function PluginMaskedInput($el, opts) {
    return this.initialize($el, opts);
  };
  PluginMaskedInput.defaults = {};
  PluginMaskedInput.prototype = {
    initialize: function initialize($el, opts) {
      if ($el.data(instanceName)) {
        return this;
      }
      this.$el = $el;
      this.setData().setOptions(opts).build();
      return this;
    },
    setData: function setData() {
      this.$el.data(instanceName, this);
      return this;
    },
    setOptions: function setOptions(opts) {
      this.options = $.extend(true, {}, PluginMaskedInput.defaults, opts);
      return this;
    },
    build: function build() {
      this.$el.mask(this.$el.data('input-mask'), this.options);
      return this;
    }
  };

  // expose to scope
  $.extend(theme, {
    PluginMaskedInput: PluginMaskedInput
  });

  // jquery plugin
  $.fn.themePluginMaskedInput = function (opts) {
    return this.each(function () {
      var $this = $(this);
      if ($this.data(instanceName)) {
        return $this.data(instanceName);
      } else {
        return new PluginMaskedInput($this, opts);
      }
    });
  };
}).apply(this, [window.theme, jQuery]);

// MaxLength
(function (theme, $) {
  theme = theme || {};
  var instanceName = '__maxlength';
  var PluginMaxLength = function PluginMaxLength($el, opts) {
    return this.initialize($el, opts);
  };
  PluginMaxLength.defaults = {
    alwaysShow: true,
    placement: 'bottom-left',
    warningClass: 'badge badge-success bottom-left',
    limitReachedClass: 'badge badge-danger bottom-left'
  };
  PluginMaxLength.prototype = {
    initialize: function initialize($el, opts) {
      if ($el.data(instanceName)) {
        return this;
      }
      this.$el = $el;
      this.setData().setOptions(opts).build();
      return this;
    },
    setData: function setData() {
      this.$el.data(instanceName, this);
      return this;
    },
    setOptions: function setOptions(opts) {
      this.options = $.extend(true, {}, PluginMaxLength.defaults, opts);
      return this;
    },
    build: function build() {
      this.$el.maxlength(this.options);
      this.$el.on('blur', function () {
        $('.bootstrap-maxlength').remove();
      });
      return this;
    }
  };

  // expose to scope
  $.extend(theme, {
    PluginMaxLength: PluginMaxLength
  });

  // jquery plugin
  $.fn.themePluginMaxLength = function (opts) {
    return this.each(function () {
      var $this = $(this);
      if ($this.data(instanceName)) {
        return $this.data(instanceName);
      } else {
        return new PluginMaxLength($this, opts);
      }
    });
  };
}).apply(this, [window.theme, jQuery]);

// MultiSelect
(function (theme, $) {
  theme = theme || {};
  var instanceName = '__multiselect';
  var PluginMultiSelect = function PluginMultiSelect($el, opts) {
    return this.initialize($el, opts);
  };
  PluginMultiSelect.defaults = {
    templates: {
      li: '<li><a class="dropdown-item" tabindex="0"><label style="display: block;"></label></a></li>',
      filter: '<div class="input-group"><span class="input-group-prepend"><span class="input-group-text"><i class="fas fa-search"></i></span></span><input class="form-control multiselect-search" type="text"></div>'
    }
  };
  PluginMultiSelect.prototype = {
    initialize: function initialize($el, opts) {
      if ($el.data(instanceName)) {
        return this;
      }
      this.$el = $el;
      this.setData().setOptions(opts).build();
      return this;
    },
    setData: function setData() {
      this.$el.data(instanceName, this);
      return this;
    },
    setOptions: function setOptions(opts) {
      this.options = $.extend(true, {}, PluginMultiSelect.defaults, opts);
      return this;
    },
    build: function build() {
      this.$el.multiselect(this.options);
      return this;
    }
  };

  // expose to scope
  $.extend(theme, {
    PluginMultiSelect: PluginMultiSelect
  });

  // jquery plugin
  $.fn.themePluginMultiSelect = function (opts) {
    return this.each(function () {
      var $this = $(this);
      if ($this.data(instanceName)) {
        return $this.data(instanceName);
      } else {
        return new PluginMultiSelect($this, opts);
      }
    });
  };
}).apply(this, [window.theme, jQuery]);

// Notifications - Config
(function ($) {
  'use strict';

  // use font awesome icons if available
  if (typeof PNotify != 'undefined') {
    PNotify.prototype.options.styling = "fontawesome";
    $.extend(true, PNotify.prototype.options, {
      shadow: false,
      stack: {
        spacing1: 15,
        spacing2: 15
      }
    });
    $.extend(PNotify.styling.fontawesome, {
      // classes
      container: "notification",
      notice: "notification-warning",
      info: "notification-info",
      success: "notification-success",
      error: "notification-danger",
      // icons
      notice_icon: "fas fa-exclamation",
      info_icon: "fas fa-info",
      success_icon: "fas fa-check",
      error_icon: "fas fa-times"
    });
  }
}).apply(this, [jQuery]);

// Portlets
(function (theme, $) {
  theme = theme || {};
  var instanceName = '__portlet',
    storageOrderKey = '__portletOrder',
    storageStateKey = '__portletState';
  var PluginPortlet = function PluginPortlet($el, opts) {
    return this.initialize($el, opts);
  };
  PluginPortlet.defaults = {
    connectWith: '[data-plugin-portlet]',
    items: '[data-portlet-item]',
    handle: '.portlet-handler',
    opacity: 0.7,
    placeholder: 'portlet-placeholder',
    cancel: 'portlet-cancel',
    forcePlaceholderSize: true,
    forceHelperSize: true,
    tolerance: 'pointer',
    helper: 'original',
    revert: 200
  };
  PluginPortlet.prototype = {
    initialize: function initialize($el, opts) {
      if ($el.data(instanceName)) {
        return this;
      }
      this.$el = $el;
      this.setData().setOptions(opts).build();
      return this;
    },
    setData: function setData() {
      this.$el.data(instanceName, this);
      return this;
    },
    setOptions: function setOptions(opts) {
      var _self = this;
      this.options = $.extend(true, {}, PluginPortlet.defaults, opts, {
        wrapper: this.$el,
        update: _self.onUpdate,
        create: _self.onLoad
      });
      return this;
    },
    onUpdate: function onUpdate(event, ui) {
      var key = storageOrderKey,
        data = store.get(key),
        $this = $(this),
        porletId = $this.prop('id');
      if (!data) {
        data = {};
      }
      if (!!porletId) {
        data[porletId] = $this.sortable('toArray');
        store.set(key, data);
      }
    },
    onLoad: function onLoad(event, ui) {
      var key = storageOrderKey,
        data = store.get(key),
        $this = $(this),
        porletId = $this.prop('id'),
        portlet = $('#' + porletId);
      if (!!data) {
        var cards = data[porletId];
        if (!!cards) {
          $.each(cards, function (index, panelId) {
            $('#' + panelId).appendTo(portlet);
          });
        }
      }
    },
    saveState: function saveState(panel) {
      var key = storageStateKey,
        data = store.get(key),
        panelId = panel.prop('id');
      if (!data) {
        data = {};
      }
      if (!panelId) {
        return this;
      }
      var collapse = panel.find('.card-actions').children('a.fa-caret-up, a.fa-caret-down'),
        isCollapsed = !!collapse.hasClass('fa-caret-up'),
        isRemoved = !panel.closest('body').get(0);
      if (isRemoved) {
        data[panelId] = 'removed';
      } else if (isCollapsed) {
        data[panelId] = 'collapsed';
      } else {
        delete data[panelId];
      }
      store.set(key, data);
      return this;
    },
    loadState: function loadState() {
      var key = storageStateKey,
        data = store.get(key);
      if (!!data) {
        $.each(data, function (panelId, state) {
          var panel = $('#' + panelId);
          if (!panel.data('portlet-state-loaded')) {
            if (state == 'collapsed') {
              panel.find('.card-actions a.fa-caret-down').trigger('click');
            } else if (state == 'removed') {
              panel.find('.card-actions a.fa-times').trigger('click');
            }
            panel.data('portlet-state-loaded', true);
          }
        });
      }
      return this;
    },
    build: function build() {
      var _self = this;
      if ($.isFunction($.fn.sortable)) {
        this.$el.sortable(this.options);
        this.$el.find('[data-portlet-item]').each(function () {
          _self.events($(this));
        });
      }
      var portlet = this.$el;
      portlet.css('min-height', 150);
      return this;
    },
    events: function events($el) {
      var _self = this,
        portlet = $el.closest('[data-plugin-portlet]');
      this.loadState();
      $el.find('.card-actions').on('click', 'a.fa-caret-up, a.fa-caret-down, a.fa-times', function (e) {
        setTimeout(function () {
          _self.saveState($el);
        }, 250);
      });
      return this;
    }
  };

  // expose to scope
  $.extend(theme, {
    PluginPortlet: PluginPortlet
  });

  // jquery plugin
  $.fn.themePluginPortlet = function (opts) {
    return this.map(function () {
      var $this = $(this);
      if ($this.data(instanceName)) {
        return $this.data(instanceName);
      } else {
        return new PluginPortlet($this, opts);
      }
    });
  };
}).apply(this, [window.theme, jQuery]);

// Scroll to Top
(function (theme, $) {
  theme = theme || {};
  $.extend(theme, {
    PluginScrollToTop: {
      defaults: {
        wrapper: $('body'),
        offset: 150,
        buttonClass: 'scroll-to-top',
        iconClass: 'fas fa-chevron-up',
        delay: 500,
        visibleMobile: false,
        label: false
      },
      initialize: function initialize(opts) {
        initialized = true;
        this.setOptions(opts).build().events();
        return this;
      },
      setOptions: function setOptions(opts) {
        this.options = $.extend(true, {}, this.defaults, opts);
        return this;
      },
      build: function build() {
        var self = this,
          $el;

        // Base HTML Markup
        $el = $('<a />').addClass(self.options.buttonClass).attr({
          'href': '#'
        }).append($('<i />').addClass(self.options.iconClass));

        // Visible Mobile
        if (!self.options.visibleMobile) {
          $el.addClass('hidden-mobile');
        }

        // Label
        if (self.options.label) {
          $el.append($('<span />').html(self.options.label));
        }
        this.options.wrapper.append($el);
        this.$el = $el;
        return this;
      },
      events: function events() {
        var self = this,
          _isScrolling = false;

        // Click Element Action
        self.$el.on('click', function (e) {
          e.preventDefault();
          $('body, html').animate({
            scrollTop: 0
          }, self.options.delay);
          return false;
        });

        // Show/Hide Button on Window Scroll event.
        $(window).scroll(function () {
          if (!_isScrolling) {
            _isScrolling = true;
            if ($(window).scrollTop() > self.options.offset) {
              self.$el.stop(true, true).addClass('visible');
              _isScrolling = false;
            } else {
              self.$el.stop(true, true).removeClass('visible');
              _isScrolling = false;
            }
          }
        });
        return this;
      }
    }
  });
}).apply(this, [window.theme, jQuery]);

// Scrollable
(function (theme, $) {
  theme = theme || {};
  var instanceName = '__scrollable';
  var PluginScrollable = function PluginScrollable($el, opts) {
    return this.initialize($el, opts);
  };
  PluginScrollable.updateModals = function () {
    PluginScrollable.updateBootstrapModal();
  };
  PluginScrollable.updateBootstrapModal = function () {
    var updateBoostrapModal;
    updateBoostrapModal = typeof $.fn.modal !== 'undefined';
    updateBoostrapModal = updateBoostrapModal && typeof $.fn.modal.Constructor !== 'undefined';
    updateBoostrapModal = updateBoostrapModal && typeof $.fn.modal.Constructor.prototype !== 'undefined';
    updateBoostrapModal = updateBoostrapModal && typeof $.fn.modal.Constructor.prototype.enforceFocus !== 'undefined';
    if (!updateBoostrapModal) {
      return false;
    }
    var originalFocus = $.fn.modal.Constructor.prototype.enforceFocus;
    $.fn.modal.Constructor.prototype.enforceFocus = function () {
      originalFocus.apply(this);
      var $scrollable = this.$element.find('.scrollable');
      if ($scrollable) {
        if ($.isFunction($.fn['themePluginScrollable'])) {
          $scrollable.themePluginScrollable();
        }
        if ($.isFunction($.fn['nanoScroller'])) {
          $scrollable.nanoScroller();
        }
      }
    };
  };
  PluginScrollable.defaults = {
    contentClass: 'scrollable-content',
    paneClass: 'scrollable-pane',
    sliderClass: 'scrollable-slider',
    alwaysVisible: true,
    preventPageScrolling: true
  };
  PluginScrollable.prototype = {
    initialize: function initialize($el, opts) {
      if ($el.data(instanceName)) {
        return this;
      }
      this.$el = $el;
      this.setData().setOptions(opts).build();
      return this;
    },
    setData: function setData() {
      this.$el.data(instanceName, this);
      return this;
    },
    setOptions: function setOptions(opts) {
      this.options = $.extend(true, {}, PluginScrollable.defaults, opts, {
        wrapper: this.$el
      });
      return this;
    },
    build: function build() {
      this.options.wrapper.nanoScroller(this.options);
      return this;
    }
  };

  // expose to scope
  $.extend(theme, {
    PluginScrollable: PluginScrollable
  });

  // jquery plugin
  $.fn.themePluginScrollable = function (opts) {
    return this.each(function () {
      var $this = $(this);
      if ($this.data(instanceName)) {
        return $this.data(instanceName);
      } else {
        return new PluginScrollable($this, opts);
      }
    });
  };
  $(function () {
    PluginScrollable.updateModals();
  });
}).apply(this, [window.theme, jQuery]);

// Select2
(function (theme, $) {
  theme = theme || {};
  var instanceName = '__select2';
  var PluginSelect2 = function PluginSelect2($el, opts) {
    return this.initialize($el, opts);
  };
  PluginSelect2.defaults = {
    theme: 'bootstrap'
  };
  PluginSelect2.prototype = {
    initialize: function initialize($el, opts) {
      if ($el.data(instanceName)) {
        return this;
      }
      this.$el = $el;
      this.setData().setOptions(opts).build();
      return this;
    },
    setData: function setData() {
      this.$el.data(instanceName, this);
      return this;
    },
    setOptions: function setOptions(opts) {
      this.options = $.extend(true, {}, PluginSelect2.defaults, opts);
      return this;
    },
    build: function build() {
      this.$el.select2(this.options);
      return this;
    }
  };

  // expose to scope
  $.extend(theme, {
    PluginSelect2: PluginSelect2
  });

  // jquery plugin
  $.fn.themePluginSelect2 = function (opts) {
    return this.each(function () {
      var $this = $(this);
      if ($this.data(instanceName)) {
        return $this.data(instanceName);
      } else {
        return new PluginSelect2($this, opts);
      }
    });
  };
}).apply(this, [window.theme, jQuery]);

// Slider
(function (theme, $) {
  theme = theme || {};
  var instanceName = '__slider';
  var PluginSlider = function PluginSlider($el, opts) {
    return this.initialize($el, opts);
  };
  PluginSlider.defaults = {};
  PluginSlider.prototype = {
    initialize: function initialize($el, opts) {
      if ($el.data(instanceName)) {
        return this;
      }
      this.$el = $el;
      this.setVars().setData().setOptions(opts).build();
      return this;
    },
    setVars: function setVars() {
      var $output = $(this.$el.data('plugin-slider-output'));
      this.$output = $output.get(0) ? $output : null;
      return this;
    },
    setData: function setData() {
      this.$el.data(instanceName, this);
      return this;
    },
    setOptions: function setOptions(opts) {
      var _self = this;
      this.options = $.extend(true, {}, PluginSlider.defaults, opts);
      if (this.$output) {
        $.extend(this.options, {
          slide: function slide(event, ui) {
            _self.onSlide(event, ui);
          }
        });
      }
      return this;
    },
    build: function build() {
      this.$el.slider(this.options);
      return this;
    },
    onSlide: function onSlide(event, ui) {
      if (!ui.values) {
        this.$output.val(ui.value);
      } else {
        this.$output.val(ui.values[0] + '/' + ui.values[1]);
      }
      this.$output.trigger('change');
    }
  };

  // expose to scope
  $.extend(theme, {
    PluginSlider: PluginSlider
  });

  // jquery plugin
  $.fn.themePluginSlider = function (opts) {
    return this.each(function () {
      var $this = $(this);
      if ($this.data(instanceName)) {
        return $this.data(instanceName);
      } else {
        return new PluginSlider($this, opts);
      }
    });
  };
}).apply(this, [window.theme, jQuery]);

// Spinner
(function (theme, $) {
  theme = theme || {};
  var instanceName = '__spinner';
  var PluginSpinner = function PluginSpinner($el, opts) {
    return this.initialize($el, opts);
  };
  PluginSpinner.defaults = {};
  PluginSpinner.prototype = {
    initialize: function initialize($el, opts) {
      if ($el.data(instanceName)) {
        return this;
      }
      this.$el = $el;
      this.setData().setOptions(opts).build();
      return this;
    },
    setData: function setData() {
      this.$el.data(instanceName, this);
      return this;
    },
    setOptions: function setOptions(opts) {
      this.options = $.extend(true, {}, PluginSpinner.defaults, opts);
      return this;
    },
    build: function build() {
      this.$el.spinner(this.options);
      return this;
    }
  };

  // expose to scope
  $.extend(theme, {
    PluginSpinner: PluginSpinner
  });

  // jquery plugin
  $.fn.themePluginSpinner = function (opts) {
    return this.each(function () {
      var $this = $(this);
      if ($this.data(instanceName)) {
        return $this.data(instanceName);
      } else {
        return new PluginSpinner($this, opts);
      }
    });
  };
}).apply(this, [window.theme, jQuery]);

// SummerNote
(function (theme, $) {
  theme = theme || {};
  var instanceName = '__summernote';
  var PluginSummerNote = function PluginSummerNote($el, opts) {
    return this.initialize($el, opts);
  };
  PluginSummerNote.defaults = {
    onfocus: function onfocus() {
      $(this).closest('.note-editor').addClass('active');
    },
    onblur: function onblur() {
      $(this).closest('.note-editor').removeClass('active');
    }
  };
  PluginSummerNote.prototype = {
    initialize: function initialize($el, opts) {
      if ($el.data(instanceName)) {
        return this;
      }
      this.$el = $el;
      this.setData().setOptions(opts).build();
      return this;
    },
    setData: function setData() {
      this.$el.data(instanceName, this);
      return this;
    },
    setOptions: function setOptions(opts) {
      this.options = $.extend(true, {}, PluginSummerNote.defaults, opts);
      return this;
    },
    build: function build() {
      this.$el.summernote(this.options);
      return this;
    }
  };

  // expose to scope
  $.extend(theme, {
    PluginSummerNote: PluginSummerNote
  });

  // jquery plugin
  $.fn.themePluginSummerNote = function (opts) {
    return this.each(function () {
      var $this = $(this);
      if ($this.data(instanceName)) {
        return $this.data(instanceName);
      } else {
        return new PluginSummerNote($this, opts);
      }
    });
  };
}).apply(this, [window.theme, jQuery]);

// TextArea AutoSize
(function (theme, $) {
  theme = theme || {};
  var initialized = false;
  var instanceName = '__textareaAutosize';
  var PluginTextAreaAutoSize = function PluginTextAreaAutoSize($el, opts) {
    return this.initialize($el, opts);
  };
  PluginTextAreaAutoSize.defaults = {};
  PluginTextAreaAutoSize.prototype = {
    initialize: function initialize($el, opts) {
      if (initialized) {
        return this;
      }
      this.$el = $el;
      this.setData().setOptions(opts).build();
      return this;
    },
    setData: function setData() {
      this.$el.data(instanceName, this);
      return this;
    },
    setOptions: function setOptions(opts) {
      this.options = $.extend(true, {}, PluginTextAreaAutoSize.defaults, opts);
      return this;
    },
    build: function build() {
      autosize($(this.$el));
      return this;
    }
  };

  // expose to scope
  $.extend(theme, {
    PluginTextAreaAutoSize: PluginTextAreaAutoSize
  });

  // jquery plugin
  $.fn.themePluginTextAreaAutoSize = function (opts) {
    return this.each(function () {
      var $this = $(this);
      if ($this.data(instanceName)) {
        return $this.data(instanceName);
      } else {
        return new PluginTextAreaAutoSize($this, opts);
      }
    });
  };
}).apply(this, [window.theme, jQuery]);

// TimePicker
(function (theme, $) {
  theme = theme || {};
  var instanceName = '__timepicker';
  var PluginTimePicker = function PluginTimePicker($el, opts) {
    return this.initialize($el, opts);
  };
  PluginTimePicker.defaults = {
    disableMousewheel: true,
    icons: {
      up: 'fas fa-chevron-up',
      down: 'fas fa-chevron-down'
    }
  };
  PluginTimePicker.prototype = {
    initialize: function initialize($el, opts) {
      if ($el.data(instanceName)) {
        return this;
      }
      this.$el = $el;
      this.setData().setOptions(opts).build();
      return this;
    },
    setData: function setData() {
      this.$el.data(instanceName, this);
      return this;
    },
    setOptions: function setOptions(opts) {
      this.options = $.extend(true, {}, PluginTimePicker.defaults, opts);
      return this;
    },
    build: function build() {
      this.$el.timepicker(this.options);
      return this;
    }
  };

  // expose to scope
  $.extend(theme, {
    PluginTimePicker: PluginTimePicker
  });

  // jquery plugin
  $.fn.themePluginTimePicker = function (opts) {
    return this.each(function () {
      var $this = $(this);
      if ($this.data(instanceName)) {
        return $this.data(instanceName);
      } else {
        return new PluginTimePicker($this, opts);
      }
    });
  };
}).apply(this, [window.theme, jQuery]);

// Toggle
(function (theme, $) {
  theme = theme || {};
  var instanceName = '__toggle';
  var PluginToggle = function PluginToggle($el, opts) {
    return this.initialize($el, opts);
  };
  PluginToggle.defaults = {
    duration: 350,
    isAccordion: false,
    addIcons: true
  };
  PluginToggle.prototype = {
    initialize: function initialize($el, opts) {
      if ($el.data(instanceName)) {
        return this;
      }
      this.$el = $el;
      this.setData().setOptions(opts).build();
      return this;
    },
    setData: function setData() {
      this.$el.data(instanceName, this);
      return this;
    },
    setOptions: function setOptions(opts) {
      this.options = $.extend(true, {}, PluginToggle.defaults, opts, {
        wrapper: this.$el
      });
      return this;
    },
    build: function build() {
      var self = this,
        $wrapper = this.options.wrapper,
        $items = $wrapper.find('.toggle'),
        $el = null;
      $items.each(function () {
        $el = $(this);
        if (self.options.addIcons) {
          $el.find('> label').prepend($('<i />').addClass('fas fa-plus'), $('<i />').addClass('fas fa-minus'));
        }
        if ($el.hasClass('active')) {
          $el.find('> p').addClass('preview-active');
          $el.find('> .toggle-content').slideDown(self.options.duration);
        }
        self.events($el);
      });
      if (self.options.isAccordion) {
        self.options.duration = self.options.duration / 2;
      }
      return this;
    },
    events: function events($el) {
      var self = this,
        previewParCurrentHeight = 0,
        previewParAnimateHeight = 0,
        toggleContent = null;
      $el.find('> label').click(function (e) {
        var $this = $(this),
          parentSection = $this.parent(),
          parentWrapper = $this.parents('.toggle'),
          previewPar = null,
          closeElement = null;
        if (self.options.isAccordion && typeof e.originalEvent != 'undefined') {
          closeElement = parentWrapper.find('.toggle.active > label');
          if (closeElement[0] == $this[0]) {
            return;
          }
        }
        parentSection.toggleClass('active');

        // Preview Paragraph
        if (parentSection.find('> p').get(0)) {
          previewPar = parentSection.find('> p');
          previewParCurrentHeight = previewPar.css('height');
          previewPar.css('height', 'auto');
          previewParAnimateHeight = previewPar.css('height');
          previewPar.css('height', previewParCurrentHeight);
        }

        // Content
        toggleContent = parentSection.find('> .toggle-content');
        if (parentSection.hasClass('active')) {
          $(previewPar).animate({
            height: previewParAnimateHeight
          }, self.options.duration, function () {
            $(this).addClass('preview-active');
          });
          toggleContent.slideDown(self.options.duration, function () {
            if (closeElement) {
              closeElement.trigger('click');
            }
          });
        } else {
          $(previewPar).animate({
            height: 0
          }, self.options.duration, function () {
            $(this).removeClass('preview-active');
          });
          toggleContent.slideUp(self.options.duration);
        }
      });
    }
  };

  // expose to scope
  $.extend(theme, {
    PluginToggle: PluginToggle
  });

  // jquery plugin
  $.fn.themePluginToggle = function (opts) {
    return this.map(function () {
      var $this = $(this);
      if ($this.data(instanceName)) {
        return $this.data(instanceName);
      } else {
        return new PluginToggle($this, opts);
      }
    });
  };
}).apply(this, [window.theme, jQuery]);

// Widget - Todo
(function (theme, $) {
  theme = theme || {};
  var instanceName = '__widgetTodoList';
  var WidgetTodoList = function WidgetTodoList($el, opts) {
    return this.initialize($el, opts);
  };
  WidgetTodoList.defaults = {};
  WidgetTodoList.prototype = {
    initialize: function initialize($el, opts) {
      if ($el.data(instanceName)) {
        return this;
      }
      this.$el = $el;
      this.setData().setOptions(opts).build().events();
      return this;
    },
    setData: function setData() {
      this.$el.data(instanceName, this);
      return this;
    },
    setOptions: function setOptions(opts) {
      this.options = $.extend(true, {}, WidgetTodoList.defaults, opts);
      return this;
    },
    check: function check(input, label) {
      if (input.is(':checked')) {
        label.addClass('line-through');
      } else {
        label.removeClass('line-through');
      }
    },
    build: function build() {
      var _self = this,
        $check = this.$el.find('.todo-check');
      $check.each(function () {
        var label = $(this).closest('li').find('.todo-label');
        _self.check($(this), label);
      });
      return this;
    },
    events: function events() {
      var _self = this,
        $remove = this.$el.find('.todo-remove'),
        $check = this.$el.find('.todo-check'),
        $window = $(window);
      $remove.on('click.widget-todo-list', function (ev) {
        ev.preventDefault();
        $(this).closest("li").remove();
      });
      $check.on('change', function () {
        var label = $(this).closest('li').find('.todo-label');
        _self.check($(this), label);
      });
      if ($.isFunction($.fn.sortable)) {
        this.$el.sortable({
          sort: function sort(event, ui) {
            var top = event.pageY - _self.$el.offset().top - ui.helper.outerHeight(true) / 2;
            ui.helper.css({
              'top': top + 'px'
            });
          }
        });
      }
      return this;
    }
  };

  // expose to scope
  $.extend(theme, {
    WidgetTodoList: WidgetTodoList
  });

  // jquery plugin
  $.fn.themePluginWidgetTodoList = function (opts) {
    return this.each(function () {
      var $this = $(this);
      if ($this.data(instanceName)) {
        return $this.data(instanceName);
      } else {
        return new WidgetTodoList($this, opts);
      }
    });
  };
}).apply(this, [window.theme, jQuery]);

// Widget - Toggle
(function (theme, $) {
  theme = theme || {};
  var instanceName = '__widgetToggleExpand';
  var WidgetToggleExpand = function WidgetToggleExpand($el, opts) {
    return this.initialize($el, opts);
  };
  WidgetToggleExpand.defaults = {};
  WidgetToggleExpand.prototype = {
    initialize: function initialize($el, opts) {
      if ($el.data(instanceName)) {
        return this;
      }
      this.$el = $el;
      this.setData().setOptions(opts).build().events();
      return this;
    },
    setData: function setData() {
      this.$el.data(instanceName, this);
      return this;
    },
    setOptions: function setOptions(opts) {
      this.options = $.extend(true, {}, WidgetToggleExpand.defaults, opts);
      return this;
    },
    build: function build() {
      return this;
    },
    events: function events() {
      var _self = this,
        $toggler = this.$el.find('.widget-toggle');
      $toggler.on('click.widget-toggler', function () {
        _self.$el.hasClass('widget-collapsed') ? _self.expand(_self.$el) : _self.collapse(_self.$el);
      });
      return this;
    },
    expand: function expand(content) {
      content.children('.widget-content-expanded').slideDown('fast', function () {
        $(this).css('display', '');
        content.removeClass('widget-collapsed');
      });
    },
    collapse: function collapse(content) {
      content.children('.widget-content-expanded').slideUp('fast', function () {
        content.addClass('widget-collapsed');
        $(this).css('display', '');
      });
    }
  };

  // expose to scope
  $.extend(theme, {
    WidgetToggleExpand: WidgetToggleExpand
  });

  // jquery plugin
  $.fn.themePluginWidgetToggleExpand = function (opts) {
    return this.each(function () {
      var $this = $(this);
      if ($this.data(instanceName)) {
        return $this.data(instanceName);
      } else {
        return new WidgetToggleExpand($this, opts);
      }
    });
  };
}).apply(this, [window.theme, jQuery]);

// Word Rotator
(function (theme, $) {
  theme = theme || {};
  var instanceName = '__wordRotator';
  var PluginWordRotator = function PluginWordRotator($el, opts) {
    return this.initialize($el, opts);
  };
  PluginWordRotator.defaults = {
    delay: 2000
  };
  PluginWordRotator.prototype = {
    initialize: function initialize($el, opts) {
      if ($el.data(instanceName)) {
        return this;
      }
      this.$el = $el;
      this.setData().setOptions(opts).build();
      return this;
    },
    setData: function setData() {
      this.$el.data(instanceName, this);
      return this;
    },
    setOptions: function setOptions(opts) {
      this.options = $.extend(true, {}, PluginWordRotator.defaults, opts, {
        wrapper: this.$el
      });
      return this;
    },
    build: function build() {
      var $el = this.options.wrapper,
        itemsWrapper = $el.find(".wort-rotator-items"),
        items = itemsWrapper.find("> span"),
        firstItem = items.eq(0),
        firstItemClone = firstItem.clone(),
        itemHeight = firstItem.height(),
        currentItem = 1,
        currentTop = 0;
      itemsWrapper.append(firstItemClone);
      $el.height(itemHeight).addClass("active");
      setInterval(function () {
        currentTop = currentItem * itemHeight;
        itemsWrapper.animate({
          top: -currentTop + "px"
        }, 300, function () {
          currentItem++;
          if (currentItem > items.length) {
            itemsWrapper.css("top", 0);
            currentItem = 1;
          }
        });
      }, this.options.delay);
      return this;
    }
  };

  // expose to scope
  $.extend(theme, {
    PluginWordRotator: PluginWordRotator
  });

  // jquery plugin
  $.fn.themePluginWordRotator = function (opts) {
    return this.each(function () {
      var $this = $(this);
      if ($this.data(instanceName)) {
        return $this.data(instanceName);
      } else {
        return new PluginWordRotator($this, opts);
      }
    });
  };
}).apply(this, [window.theme, jQuery]);

// Navigation
(function ($) {
  'use strict';

  var $items = $('.nav-main li.nav-parent');
  function expand($li) {
    $li.children('ul.nav-children').slideDown('fast', function () {
      $li.addClass('nav-expanded');
      $(this).css('display', '');
      ensureVisible($li);
    });
  }
  function collapse($li) {
    $li.children('ul.nav-children').slideUp('fast', function () {
      $(this).css('display', '');
      $li.removeClass('nav-expanded');
    });
  }
  function ensureVisible($li) {
    var scroller = $li.offsetParent();
    if (!scroller.get(0)) {
      return false;
    }
    var top = $li.position().top;
    if (top < 0) {
      scroller.animate({
        scrollTop: scroller.scrollTop() + top
      }, 'fast');
    }
  }
  function buildSidebarNav(anchor, prev, next, ev) {
    if (anchor.prop('href')) {
      var arrowWidth = parseInt(window.getComputedStyle(anchor.get(0), ':after').width, 10) || 0;
      if (ev.offsetX > anchor.get(0).offsetWidth - arrowWidth) {
        ev.preventDefault();
      }
    }
    if (prev.get(0) !== next.get(0)) {
      collapse(prev);
      expand(next);
    } else {
      collapse(prev);
    }
  }
  $items.find('> a').on('click', function (ev) {
    var $html = $('html'),
      $window = $(window),
      $anchor = $(this),
      $prev = $anchor.closest('ul.nav').find('> li.nav-expanded'),
      $next = $anchor.closest('li'),
      $ev = ev;
    if ($anchor.attr('href') == '#') {
      ev.preventDefault();
    }
    if (!$html.hasClass('sidebar-left-big-icons')) {
      buildSidebarNav($anchor, $prev, $next, $ev);
    } else if ($html.hasClass('sidebar-left-big-icons') && $window.width() < 768) {
      buildSidebarNav($anchor, $prev, $next, $ev);
    }
  });

  // Chrome Fix
  $.browser.chrome = /chrom(e|ium)/.test(navigator.userAgent.toLowerCase());
  if ($.browser.chrome && !$.browser.mobile) {
    var flag = true;
    $('.sidebar-left .nav-main li a').on('click', function () {
      flag = false;
      setTimeout(function () {
        flag = true;
      }, 200);
    });
    $('.nano').on('mouseenter', function (e) {
      $(this).addClass('hovered');
    });
    $('.nano').on('mouseleave', function (e) {
      if (flag) {
        $(this).removeClass('hovered');
      }
    });
  }
  $('.nav-main a').filter(':not([href])').attr('href', '#');
}).apply(this, [jQuery]);

// Skeleton
(function (theme, $) {
  'use strict';

  theme = theme || {};
  var $body = $('body'),
    $html = $('html'),
    $window = $(window),
    isAndroid = navigator.userAgent.toLowerCase().indexOf('android') > -1,
    isIpad = navigator.userAgent.match(/iPad/i) != null,
    updatingNanoScroll = false;

  // mobile devices with fixed has a lot of issues when focus inputs and others...
  if (typeof $.browser !== 'undefined' && $.browser.mobile && $html.hasClass('fixed')) {
    $html.removeClass('fixed').addClass('scroll');
  }
  var Skeleton = {
    options: {
      sidebars: {
        menu: '#content-menu',
        left: '#sidebar-left',
        right: '#sidebar-right'
      }
    },
    customScroll: !Modernizr.overflowscrolling && !isAndroid && $.fn.nanoScroller !== 'undefined',
    initialize: function initialize() {
      this.setVars().build().events();
    },
    setVars: function setVars() {
      this.sidebars = {};
      this.sidebars.left = {
        $el: $(this.options.sidebars.left)
      };
      this.sidebars.right = {
        $el: $(this.options.sidebars.right),
        isOpened: $html.hasClass('sidebar-right-opened')
      };
      this.sidebars.menu = {
        $el: $(this.options.sidebars.menu),
        isOpened: $html.hasClass('inner-menu-opened')
      };
      return this;
    },
    build: function build() {
      if (typeof $.browser !== 'undefined' && $.browser.mobile) {
        $html.addClass('mobile-device');
      } else {
        $html.addClass('no-mobile-device');
      }
      $html.addClass('custom-scroll');
      if (this.customScroll) {
        this.buildSidebarLeft();
        this.buildContentMenu();
      }
      if (isIpad) {
        this.fixIpad();
      }
      this.buildSidebarRight();
      return this;
    },
    events: function events() {
      if (this.customScroll) {
        this.eventsSidebarLeft();
      }
      this.eventsSidebarRight();
      this.eventsContentMenu();
      if (typeof $.browser !== 'undefined' && !this.customScroll && isAndroid) {
        this.fixScroll();
      }
      return this;
    },
    fixScroll: function fixScroll() {
      var _self = this;
      $window.on('sidebar-left-opened sidebar-right-toggle', function (e, data) {
        _self.preventBodyScrollToggle(data.added);
      });
    },
    fixIpad: function fixIpad() {
      var _self = this;
      $('.header, .page-header, .content-body').on('click', function () {
        $html.removeClass('sidebar-left-opened');
      });
    },
    buildSidebarLeft: function buildSidebarLeft() {
      var initialPosition = 0;
      this.sidebars.left.isOpened = !$html.hasClass('sidebar-left-collapsed') || $html.hasClass('sidebar-left-opened');
      this.sidebars.left.$nano = this.sidebars.left.$el.find('.nano');
      if (typeof localStorage !== 'undefined') {
        this.sidebars.left.$nano.on('update', function (e, values) {
          localStorage.setItem('sidebar-left-position', values.position);
        });
        if (localStorage.getItem('sidebar-left-position') !== null) {
          initialPosition = localStorage.getItem('sidebar-left-position');
          this.sidebars.left.$el.find('.nano-content').scrollTop(initialPosition);
        }
      }
      this.sidebars.left.$nano.nanoScroller({
        scrollTop: initialPosition,
        alwaysVisible: true,
        preventPageScrolling: $html.hasClass('fixed')
      });
      return this;
    },
    eventsSidebarLeft: function eventsSidebarLeft() {
      var _self = this,
        $nano = this.sidebars.left.$nano;
      var open = function open() {
        if (_self.sidebars.left.isOpened) {
          return close();
        }
        _self.sidebars.left.isOpened = true;
        $html.addClass('sidebar-left-opened');
        $window.trigger('sidebar-left-toggle', {
          added: true,
          removed: false
        });
        $html.on('click.close-left-sidebar', function (e) {
          e.stopPropagation();
          close(e);
        });
      };
      var close = function close(e) {
        if (!!e && !!e.target && ($(e.target).closest('.sidebar-left').get(0) || !$(e.target).closest('html').get(0))) {
          e.preventDefault();
          return false;
        } else {
          $html.removeClass('sidebar-left-opened');
          $html.off('click.close-left-sidebar');
          $window.trigger('sidebar-left-toggle', {
            added: false,
            removed: true
          });
          _self.sidebars.left.isOpened = !$html.hasClass('sidebar-left-collapsed');
        }
      };
      var _updateNanoScroll = function updateNanoScroll() {
        if (updatingNanoScroll) {
          if ($.support.transition) {
            $nano.nanoScroller();
            $nano.one('bsTransitionEnd', _updateNanoScroll).emulateTransitionEnd(150);
          } else {
            _updateNanoScroll();
          }
          updatingNanoScroll = true;
          setTimeout(function () {
            updatingNanoScroll = false;
          }, 200);
        }
      };
      var isToggler = function isToggler(element) {
        return $(element).data('fire-event') === 'sidebar-left-toggle' || $(element).parents().data('fire-event') === 'sidebar-left-toggle';
      };
      this.sidebars.left.$el.on('click', function () {
        _updateNanoScroll();
      }).on('touchend', function (e) {
        _self.sidebars.left.isOpened = !$html.hasClass('sidebar-left-collapsed') || $html.hasClass('sidebar-left-opened');
        if (!_self.sidebars.left.isOpened && !isToggler(e.target)) {
          e.stopPropagation();
          e.preventDefault();
          open();
        }
      });
      $nano.on('mouseenter', function () {
        if ($html.hasClass('sidebar-left-collapsed')) {
          $nano.nanoScroller();
        }
      }).on('mouseleave', function () {
        if ($html.hasClass('sidebar-left-collapsed')) {
          $nano.nanoScroller();
        }
      });
      $window.on('sidebar-left-toggle', function (e, toggle) {
        if (toggle.removed) {
          $html.removeClass('sidebar-left-opened');
          $html.off('click.close-left-sidebar');
        }

        // Recalculate Owl Carousel sizes
        $('.owl-carousel').trigger('refresh.owl.carousel');
      });
      return this;
    },
    buildSidebarRight: function buildSidebarRight() {
      this.sidebars.right.isOpened = $html.hasClass('sidebar-right-opened');
      if (this.customScroll) {
        this.sidebars.right.$nano = this.sidebars.right.$el.find('.nano');
        this.sidebars.right.$nano.nanoScroller({
          alwaysVisible: true,
          preventPageScrolling: true
        });
      }
      return this;
    },
    eventsSidebarRight: function eventsSidebarRight() {
      var _self = this;
      var open = function open() {
        if (_self.sidebars.right.isOpened) {
          return close();
        }
        _self.sidebars.right.isOpened = true;
        $html.addClass('sidebar-right-opened');
        $window.trigger('sidebar-right-toggle', {
          added: true,
          removed: false
        });
        $html.on('click.close-right-sidebar', function (e) {
          e.stopPropagation();
          close(e);
        });
      };
      var close = function close(e) {
        if (!!e && !!e.target && ($(e.target).closest('.sidebar-right').get(0) || !$(e.target).closest('html').get(0))) {
          return false;
        }
        $html.removeClass('sidebar-right-opened');
        $html.off('click.close-right-sidebar');
        $window.trigger('sidebar-right-toggle', {
          added: false,
          removed: true
        });
        _self.sidebars.right.isOpened = false;
      };
      var bind = function bind() {
        $('[data-open="sidebar-right"]').on('click', function (e) {
          var $el = $(this);
          e.stopPropagation();
          if ($el.is('a')) e.preventDefault();
          open();
        });
      };
      this.sidebars.right.$el.find('.mobile-close').on('click', function (e) {
        e.preventDefault();
        $html.trigger('click.close-right-sidebar');
      });
      bind();
      return this;
    },
    buildContentMenu: function buildContentMenu() {
      if (!$html.hasClass('fixed')) {
        return false;
      }
      this.sidebars.menu.$nano = this.sidebars.menu.$el.find('.nano');
      this.sidebars.menu.$nano.nanoScroller({
        alwaysVisible: true,
        preventPageScrolling: true
      });
      return this;
    },
    eventsContentMenu: function eventsContentMenu() {
      var _self = this;
      var open = function open() {
        if (_self.sidebars.menu.isOpened) {
          return close();
        }
        _self.sidebars.menu.isOpened = true;
        $html.addClass('inner-menu-opened');
        $window.trigger('inner-menu-toggle', {
          added: true,
          removed: false
        });
        $html.on('click.close-inner-menu', function (e) {
          close(e);
        });
      };
      var close = function close(e) {
        var hasEvent, hasTarget, isCollapseButton, isInsideModal, isInsideInnerMenu, isInsideHTML, $target;
        hasEvent = !!e;
        hasTarget = hasEvent && !!e.target;
        if (hasTarget) {
          $target = $(e.target);
        }
        isCollapseButton = hasTarget && !!$target.closest('.inner-menu-collapse').get(0);
        isInsideModal = hasTarget && !!$target.closest('.mfp-wrap').get(0);
        isInsideInnerMenu = hasTarget && !!$target.closest('.inner-menu').get(0);
        isInsideHTML = hasTarget && !!$target.closest('html').get(0);
        if (!isCollapseButton && (isInsideInnerMenu || !isInsideHTML) || isInsideModal) {
          return false;
        }
        e.stopPropagation();
        $html.removeClass('inner-menu-opened');
        $html.off('click.close-inner-menu');
        $window.trigger('inner-menu-toggle', {
          added: false,
          removed: true
        });
        _self.sidebars.menu.isOpened = false;
      };
      var bind = function bind() {
        $('[data-open="inner-menu"]').on('click', function (e) {
          var $el = $(this);
          e.stopPropagation();
          if ($el.is('a')) e.preventDefault();
          open();
        });
      };
      bind();

      /* Nano Scroll */
      if ($html.hasClass('fixed')) {
        var $nano = this.sidebars.menu.$nano;
        var _updateNanoScroll2 = function updateNanoScroll() {
          if ($.support.transition) {
            $nano.nanoScroller();
            $nano.one('bsTransitionEnd', _updateNanoScroll2).emulateTransitionEnd(150);
          } else {
            _updateNanoScroll2();
          }
        };
        this.sidebars.menu.$el.on('click', function () {
          _updateNanoScroll2();
        });
      }
      return this;
    },
    preventBodyScrollToggle: function preventBodyScrollToggle(shouldPrevent, $el) {
      setTimeout(function () {
        if (shouldPrevent) {
          $body.data('scrollTop', $body.get(0).scrollTop).css({
            position: 'fixed',
            top: $body.get(0).scrollTop * -1
          });
        } else {
          $body.css({
            position: '',
            top: ''
          }).scrollTop($body.data('scrollTop'));
        }
      }, 150);
    }
  };

  // expose to scope
  $.extend(theme, {
    Skeleton: Skeleton
  });
}).apply(this, [window.theme, jQuery]);

// Tab Navigation
(function ($) {
  'use strict';

  if ($('html.has-tab-navigation').get(0)) {
    var $window = $(window),
      $toggleMenuButton = $('.toggle-menu'),
      $navActive = $('.tab-navigation nav > ul .nav-active'),
      $tabNav = $('.tab-navigation'),
      $tabItem = $('.tab-navigation nav > ul > li a'),
      $contentBody = $('.content-body');
    $tabItem.on('click', function (e) {
      if ($(this).parent().hasClass('dropdown') || $(this).parent().hasClass('dropdown-submenu')) {
        if ($window.width() < 992) {
          if ($(this).parent().hasClass('nav-expanded')) {
            $(this).closest('li').find('> ul').slideUp('fast', function () {
              $(this).css('display', '');
              $(this).closest('li').removeClass('nav-expanded');
            });
          } else {
            if ($(this).parent().hasClass('dropdown')) {
              $tabItem.parent().removeClass('nav-expanded');
            }
            $(this).parent().addClass('expanding');
            $(this).closest('li').find('> ul').slideDown('fast', function () {
              $tabItem.parent().removeClass('expanding');
              $(this).closest('li').addClass('nav-expanded');
              $(this).css('display', '');
              if ($(this).position().top + $(this).height() < $window.scrollTop()) {
                $('html,body').animate({
                  scrollTop: $(this).offset().top - 100
                }, 300);
              }
            });
          }
        } else {
          if (!$(this).parent().hasClass('dropdown')) {
            e.preventDefault();
            return false;
          }
          if ($(this).parent().hasClass('nav-expanded')) {
            $tabItem.parent().removeClass('nav-expanded');
            $contentBody.removeClass('tab-menu-opened');
            return;
          }
          $tabItem.parent().removeClass('nav-expanded');
          $contentBody.addClass('tab-menu-opened');
          $(this).parent().addClass('nav-expanded');
        }
      }
    });
    $window.on('scroll', function () {
      if ($window.width() < 992) {
        var tabNavOffset = $tabNav.position().top + $tabNav.height() + 100,
          windowOffset = $window.scrollTop();
        if (windowOffset > tabNavOffset) {
          $tabNav.removeClass('show');
        }
      }
    });
    $toggleMenuButton.on('click', function () {
      if (!$tabNav.hasClass('show')) {
        $('html,body').animate({
          scrollTop: $tabNav.offset().top - 50
        }, 300);
      }
    });
  }
}).apply(this, [jQuery]);

/* Browser Selector */
(function ($) {
  $.extend({
    browserSelector: function browserSelector() {
      // jQuery.browser.mobile (http://detectmobilebrowser.com/)
      (function (a) {
        (jQuery.browser = jQuery.browser || {}).mobile = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4));
      })(navigator.userAgent || navigator.vendor || window.opera);

      // Touch
      var hasTouch = 'ontouchstart' in window || navigator.msMaxTouchPoints;
      var u = navigator.userAgent,
        ua = u.toLowerCase(),
        is = function is(t) {
          return ua.indexOf(t) > -1;
        },
        g = 'gecko',
        w = 'webkit',
        s = 'safari',
        o = 'opera',
        h = document.documentElement,
        b = [!/opera|webtv/i.test(ua) && /msie\s(\d)/.test(ua) ? 'ie ie' + parseFloat(navigator.appVersion.split("MSIE")[1]) : is('firefox/2') ? g + ' ff2' : is('firefox/3.5') ? g + ' ff3 ff3_5' : is('firefox/3') ? g + ' ff3' : is('gecko/') ? g : is('opera') ? o + (/version\/(\d+)/.test(ua) ? ' ' + o + RegExp.jQuery1 : /opera(\s|\/)(\d+)/.test(ua) ? ' ' + o + RegExp.jQuery2 : '') : is('konqueror') ? 'konqueror' : is('chrome') ? w + ' chrome' : is('iron') ? w + ' iron' : is('applewebkit/') ? w + ' ' + s + (/version\/(\d+)/.test(ua) ? ' ' + s + RegExp.jQuery1 : '') : is('mozilla/') ? g : '', is('j2me') ? 'mobile' : is('iphone') ? 'iphone' : is('ipod') ? 'ipod' : is('mac') ? 'mac' : is('darwin') ? 'mac' : is('webtv') ? 'webtv' : is('win') ? 'win' : is('freebsd') ? 'freebsd' : is('x11') || is('linux') ? 'linux' : '', 'js'];
      c = b.join(' ');
      if ($.browser.mobile) {
        c += ' mobile';
      }
      if (hasTouch) {
        c += ' touch';
      }
      h.className += ' ' + c;

      // IE11 Detect
      var isIE11 = !window.ActiveXObject && "ActiveXObject" in window;
      if (isIE11) {
        $('html').removeClass('gecko').addClass('ie ie11');
        return;
      }

      // Dark and Boxed Compatibility
      if ($('body').hasClass('dark')) {
        $('html').addClass('dark');
      }
      if ($('body').hasClass('boxed')) {
        $('html').addClass('boxed');
      }
    }
  });
  $.browserSelector();
})(jQuery);

// Mailbox
(function (theme, $) {
  theme = theme || {};
  var instanceName = '__mailbox';
  var capitalizeString = function capitalizeString(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };
  var Mailbox = function Mailbox($wrapper) {
    return this.initialize($wrapper);
  };
  Mailbox.prototype = {
    initialize: function initialize($wrapper) {
      if ($wrapper.data(instanceName)) {
        return this;
      }
      this.$wrapper = $wrapper;
      this.setVars().setData().build().events();
      return this;
    },
    setVars: function setVars() {
      this.view = capitalizeString(this.$wrapper.data('mailbox-view') || "");
      return this;
    },
    setData: function setData() {
      this.$wrapper.data(instanceName, this);
      return this;
    },
    build: function build() {
      if (typeof this['build' + this.view] === 'function') {
        this['build' + this.view].call(this);
      }
      return this;
    },
    events: function events() {
      if (typeof this['events' + this.view] === 'function') {
        this['events' + this.view].call(this);
      }
      return this;
    },
    buildFolder: function buildFolder() {
      this.$wrapper.find('.mailbox-email-list .nano').nanoScroller({
        alwaysVisible: true,
        preventPageScrolling: true
      });
    },
    buildEmail: function buildEmail() {
      this.buildComposer();
    },
    buildCompose: function buildCompose() {
      this.buildComposer();
    },
    buildComposer: function buildComposer() {
      this.$wrapper.find('#compose-field').summernote({
        height: 250,
        toolbar: [['style', ['style']], ['font', ['bold', 'italic', 'underline', 'clear']], ['fontname', ['fontname']], ['color', ['color']], ['para', ['ul', 'ol', 'paragraph']], ['height', ['height']], ['table', ['table']], ['insert', ['link', 'picture', 'video']], ['view', ['fullscreen']], ['help', ['help']]]
      });
    },
    eventsCompose: function eventsCompose() {
      var $composer, $contentBody, $html, $innerBody;
      $composer = $('.note-editable');
      $contentBody = $('.content-body');
      $html = $('html');
      $innerBody = $('.inner-body');
      var adjustComposeSize = function adjustComposeSize() {
        var composerHeight, composerTop, contentBodyPaddingBottom, innerBodyHeight, viewportHeight, viewportWidth;
        contentBodyPaddingBottom = parseInt($contentBody.css('paddingBottom'), 10) || 0;
        viewportHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
        viewportWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
        $composer.css('height', '');
        if (viewportWidth < 767 || $html.hasClass('mobile-device')) {
          composerTop = $composer.offset().top;
          composerHeight = viewportHeight - composerTop;
        } else {
          if ($html.hasClass('fixed')) {
            composerTop = $composer.offset().top;
          } else {
            composerTop = $composer.position().top;
          }
          composerHeight = $innerBody.outerHeight() - composerTop;
        }
        composerHeight -= contentBodyPaddingBottom;
        $composer.css({
          height: composerHeight
        });
      };
      var timer;
      $(window).on('resize orientationchange sidebar-left-toggle mailbox-recalc', function () {
        clearTimeout(timer);
        timer = setTimeout(function () {
          adjustComposeSize();
        }, 100);
      });
      adjustComposeSize();
    }
  };

  // expose to scope
  $.extend(theme, {
    Mailbox: Mailbox
  });

  // jquery plugin
  $.fn.themeMailbox = function (opts) {
    return this.each(function () {
      var $this = $(this);
      if ($this.data(instanceName)) {
        return $this.data(instanceName);
      } else {
        return new Mailbox($this);
      }
    });
  };
}).apply(this, [window.theme, jQuery]);

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_internals_export_js","vendors-node_modules_core-js_internals_add-to-unscopables_js-node_modules_core-js_internals_a-09983a","vendors-node_modules_core-js_internals_array-slice_js-node_modules_core-js_internals_function-caeab8","vendors-node_modules_core-js_modules_es_string_iterator_js-node_modules_core-js_modules_es_sy-23bad7","vendors-node_modules_jquery_dist_jquery_js","vendors-node_modules_core-js_internals_advance-string-index_js-node_modules_core-js_internals-27e96d","vendors-node_modules_core-js_modules_es_regexp_constructor_js-node_modules_core-js_modules_es-de7eec","vendors-node_modules_core-js_modules_es_array_filter_js-node_modules_core-js_modules_es_array-c02795"], () => (__webpack_exec__("./assets/js/portoadmin/theme.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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d0I7UUFFMUNMLFNBQVMsQ0FBQ2ptQixHQUFHLENBQUM7VUFDYmtlLE1BQU0sRUFBRWtJO1FBQ1QsQ0FBQyxDQUFDO01BQ0gsQ0FBQztNQUVELElBQUlXLEtBQUs7TUFDVGhwQixDQUFDLENBQUNWLE1BQU0sQ0FBQyxDQUNQd0QsRUFBRSxDQUFFLDZEQUE2RCxFQUFFLFlBQVc7UUFDOUVtbUIsWUFBWSxDQUFFRCxLQUFNLENBQUM7UUFDckJBLEtBQUssR0FBRzltQixVQUFVLENBQUMsWUFBVztVQUM3QmttQixpQkFBaUIsQ0FBQyxDQUFDO1FBQ3BCLENBQUMsRUFBRSxHQUFHLENBQUM7TUFDUixDQUFDLENBQUM7TUFFSEEsaUJBQWlCLENBQUMsQ0FBQztJQUNwQjtFQUNELENBQUM7O0VBRUQ7RUFDQXBvQixDQUFDLENBQUNnQixNQUFNLENBQUN6QixLQUFLLEVBQUU7SUFDZmtvQixPQUFPLEVBQUVBO0VBQ1YsQ0FBQyxDQUFDOztFQUVGO0VBQ0F6bkIsQ0FBQyxDQUFDUixFQUFFLENBQUMwcEIsWUFBWSxHQUFHLFVBQVN4cEIsSUFBSSxFQUFFO0lBQ2xDLE9BQU8sSUFBSSxDQUFDd0QsSUFBSSxDQUFDLFlBQVc7TUFDM0IsSUFBSVosS0FBSyxHQUFHdEMsQ0FBQyxDQUFDLElBQUksQ0FBQztNQUVuQixJQUFJc0MsS0FBSyxDQUFDM0IsSUFBSSxDQUFDVixZQUFZLENBQUMsRUFBRTtRQUM3QixPQUFPcUMsS0FBSyxDQUFDM0IsSUFBSSxDQUFDVixZQUFZLENBQUM7TUFDaEMsQ0FBQyxNQUFNO1FBQ04sT0FBTyxJQUFJd25CLE9BQU8sQ0FBQ25sQixLQUFLLENBQUM7TUFDMUI7SUFFRCxDQUFDLENBQUM7RUFDSCxDQUFDO0FBRUYsQ0FBQyxFQUFFQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUNqRCxNQUFNLENBQUNDLEtBQUssRUFBRWlELE1BQU0sQ0FBQyxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcG9ydG9hZG1pbi90aGVtZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG5OYW1lOiBcdFx0XHRUaGVtZSBCYXNlXHJcbldyaXR0ZW4gYnk6IFx0T2tsZXIgVGhlbWVzIC0gKGh0dHA6Ly93d3cub2tsZXIubmV0KVxyXG5UaGVtZSBWZXJzaW9uOiBcdDIuMi4wXHJcbiovXHJcblxyXG53aW5kb3cudGhlbWUgPSB7fTtcclxuXHJcbi8vIFRoZW1lIENvbW1vbiBGdW5jdGlvbnNcclxud2luZG93LnRoZW1lLmZuID0ge1xyXG5cclxuXHRnZXRPcHRpb25zOiBmdW5jdGlvbihvcHRzKSB7XHJcblxyXG5cdFx0aWYgKHR5cGVvZihvcHRzKSA9PSAnb2JqZWN0Jykge1xyXG5cclxuXHRcdFx0cmV0dXJuIG9wdHM7XHJcblxyXG5cdFx0fSBlbHNlIGlmICh0eXBlb2Yob3B0cykgPT0gJ3N0cmluZycpIHtcclxuXHJcblx0XHRcdHRyeSB7XHJcblx0XHRcdFx0cmV0dXJuIEpTT04ucGFyc2Uob3B0cy5yZXBsYWNlKC8nL2csJ1wiJykucmVwbGFjZSgnOycsJycpKTtcclxuXHRcdFx0fSBjYXRjaChlKSB7XHJcblx0XHRcdFx0cmV0dXJuIHt9O1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0fSBlbHNlIHtcclxuXHJcblx0XHRcdHJldHVybiB7fTtcclxuXHJcblx0XHR9XHJcblxyXG5cdH1cclxuXHJcbn07XHJcblxyXG4vLyBBbmltYXRlXHJcbihmdW5jdGlvbih0aGVtZSwgJCkge1xyXG5cclxuXHR0aGVtZSA9IHRoZW1lIHx8IHt9O1xyXG5cclxuXHR2YXIgaW5zdGFuY2VOYW1lID0gJ19fYW5pbWF0ZSc7XHJcblxyXG5cdHZhciBQbHVnaW5BbmltYXRlID0gZnVuY3Rpb24oJGVsLCBvcHRzKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5pbml0aWFsaXplKCRlbCwgb3B0cyk7XHJcblx0fTtcclxuXHJcblx0UGx1Z2luQW5pbWF0ZS5kZWZhdWx0cyA9IHtcclxuXHRcdGFjY1g6IDAsXHJcblx0XHRhY2NZOiAtMTUwLFxyXG5cdFx0ZGVsYXk6IDEsXHJcblx0XHRkdXJhdGlvbjogJzFzJ1xyXG5cdH07XHJcblxyXG5cdFBsdWdpbkFuaW1hdGUucHJvdG90eXBlID0ge1xyXG5cdFx0aW5pdGlhbGl6ZTogZnVuY3Rpb24oJGVsLCBvcHRzKSB7XHJcblx0XHRcdGlmICgkZWwuZGF0YShpbnN0YW5jZU5hbWUpKSB7XHJcblx0XHRcdFx0cmV0dXJuIHRoaXM7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHRoaXMuJGVsID0gJGVsO1xyXG5cclxuXHRcdFx0dGhpc1xyXG5cdFx0XHRcdC5zZXREYXRhKClcclxuXHRcdFx0XHQuc2V0T3B0aW9ucyhvcHRzKVxyXG5cdFx0XHRcdC5idWlsZCgpO1xyXG5cclxuXHRcdFx0cmV0dXJuIHRoaXM7XHJcblx0XHR9LFxyXG5cclxuXHRcdHNldERhdGE6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHR0aGlzLiRlbC5kYXRhKGluc3RhbmNlTmFtZSwgdGhpcyk7XHJcblxyXG5cdFx0XHRyZXR1cm4gdGhpcztcclxuXHRcdH0sXHJcblxyXG5cdFx0c2V0T3B0aW9uczogZnVuY3Rpb24ob3B0cykge1xyXG5cdFx0XHR0aGlzLm9wdGlvbnMgPSAkLmV4dGVuZCh0cnVlLCB7fSwgUGx1Z2luQW5pbWF0ZS5kZWZhdWx0cywgb3B0cywge1xyXG5cdFx0XHRcdHdyYXBwZXI6IHRoaXMuJGVsXHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0cmV0dXJuIHRoaXM7XHJcblx0XHR9LFxyXG5cclxuXHRcdGJ1aWxkOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0dmFyIHNlbGYgPSB0aGlzLFxyXG5cdFx0XHRcdCRlbCA9IHRoaXMub3B0aW9ucy53cmFwcGVyLFxyXG5cdFx0XHRcdGRlbGF5ID0gMCxcclxuXHRcdFx0XHRkdXJhdGlvbiA9ICcxcycsXHJcblx0XHRcdFx0ZWxUb3BEaXN0YW5jZSA9ICRlbC5vZmZzZXQoKS50b3AsXHJcblx0XHRcdFx0d2luZG93VG9wRGlzdGFuY2UgPSAkKHdpbmRvdykuc2Nyb2xsVG9wKCk7XHJcblxyXG5cdFx0XHQkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpe1xyXG5cclxuXHRcdFx0XHQkZWwuYWRkQ2xhc3MoJ2FwcGVhci1hbmltYXRpb24gYW5pbWF0ZWQnKTtcclxuXHJcblx0XHRcdFx0aWYgKCEkKCdodG1sJykuaGFzQ2xhc3MoJ25vLWNzc3RyYW5zaXRpb25zJykgJiYgJCh3aW5kb3cpLndpZHRoKCkgPiA3NjcgJiYgZWxUb3BEaXN0YW5jZSA+IHdpbmRvd1RvcERpc3RhbmNlKSB7XHJcblxyXG5cdFx0XHRcdFx0JGVsLmFwcGVhcihmdW5jdGlvbigpIHtcclxuXHJcblx0XHRcdFx0XHRcdCRlbC5vbmUoJ2FuaW1hdGlvbjpzaG93JywgZnVuY3Rpb24oZXYpIHtcclxuXHRcdFx0XHRcdFx0XHRkZWxheSA9ICgkZWwuYXR0cignZGF0YS1hcHBlYXItYW5pbWF0aW9uLWRlbGF5JykgPyAkZWwuYXR0cignZGF0YS1hcHBlYXItYW5pbWF0aW9uLWRlbGF5JykgOiBzZWxmLm9wdGlvbnMuZGVsYXkpO1xyXG5cdFx0XHRcdFx0XHRcdGR1cmF0aW9uID0gKCRlbC5hdHRyKCdkYXRhLWFwcGVhci1hbmltYXRpb24tZHVyYXRpb24nKSA/ICRlbC5hdHRyKCdkYXRhLWFwcGVhci1hbmltYXRpb24tZHVyYXRpb24nKSA6IHNlbGYub3B0aW9ucy5kdXJhdGlvbik7XHJcblxyXG5cdFx0XHRcdFx0XHRcdGlmIChkdXJhdGlvbiAhPSAnMXMnKSB7XHJcblx0XHRcdFx0XHRcdFx0XHQkZWwuY3NzKCdhbmltYXRpb24tZHVyYXRpb24nLCBkdXJhdGlvbik7XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0XHRcdFx0JGVsLmFkZENsYXNzKCRlbC5hdHRyKCdkYXRhLWFwcGVhci1hbmltYXRpb24nKSArICcgYXBwZWFyLWFuaW1hdGlvbi12aXNpYmxlJyk7XHJcblx0XHRcdFx0XHRcdFx0fSwgZGVsYXkpO1xyXG5cdFx0XHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdFx0XHRcdCRlbC50cmlnZ2VyKCdhbmltYXRpb246c2hvdycpO1xyXG5cclxuXHRcdFx0XHRcdH0sIHtcclxuXHRcdFx0XHRcdFx0YWNjWDogc2VsZi5vcHRpb25zLmFjY1gsXHJcblx0XHRcdFx0XHRcdGFjY1k6IHNlbGYub3B0aW9ucy5hY2NZXHJcblx0XHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHJcblx0XHRcdFx0XHQkZWwuYWRkQ2xhc3MoJ2FwcGVhci1hbmltYXRpb24tdmlzaWJsZScpO1xyXG5cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdHJldHVybiB0aGlzO1xyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdC8vIGV4cG9zZSB0byBzY29wZVxyXG5cdCQuZXh0ZW5kKHRoZW1lLCB7XHJcblx0XHRQbHVnaW5BbmltYXRlOiBQbHVnaW5BbmltYXRlXHJcblx0fSk7XHJcblxyXG5cdC8vIGpxdWVyeSBwbHVnaW5cclxuXHQkLmZuLnRoZW1lUGx1Z2luQW5pbWF0ZSA9IGZ1bmN0aW9uKG9wdHMpIHtcclxuXHRcdHJldHVybiB0aGlzLm1hcChmdW5jdGlvbigpIHtcclxuXHRcdFx0dmFyICR0aGlzID0gJCh0aGlzKTtcclxuXHJcblx0XHRcdGlmICgkdGhpcy5kYXRhKGluc3RhbmNlTmFtZSkpIHtcclxuXHRcdFx0XHRyZXR1cm4gJHRoaXMuZGF0YShpbnN0YW5jZU5hbWUpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHJldHVybiBuZXcgUGx1Z2luQW5pbWF0ZSgkdGhpcywgb3B0cyk7XHJcblx0XHRcdH1cclxuXHJcblx0XHR9KTtcclxuXHR9O1xyXG5cclxufSkuYXBwbHkodGhpcywgW3dpbmRvdy50aGVtZSwgalF1ZXJ5XSk7XHJcblxyXG4vLyBCb290c3RyYXAgVG9nZ2xlXHJcbihmdW5jdGlvbigkKSB7XHJcblxyXG5cdCd1c2Ugc3RyaWN0JztcclxuXHJcblx0dmFyICR3aW5kb3cgPSAkKCB3aW5kb3cgKTtcclxuXHJcblx0dmFyIHRvZ2dsZUNsYXNzID0gZnVuY3Rpb24oICRlbCApIHtcclxuXHRcdGlmICggISEkZWwuZGF0YSgndG9nZ2xlQ2xhc3NCaW5kZWQnKSApIHtcclxuXHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0fVxyXG5cclxuXHRcdHZhciAkdGFyZ2V0LFxyXG5cdFx0XHRjbGFzc05hbWUsXHJcblx0XHRcdGV2ZW50TmFtZTtcclxuXHJcblx0XHQkdGFyZ2V0ID0gJCggJGVsLmF0dHIoJ2RhdGEtdGFyZ2V0JykgKTtcclxuXHRcdGNsYXNzTmFtZSA9ICRlbC5hdHRyKCdkYXRhLXRvZ2dsZS1jbGFzcycpO1xyXG5cdFx0ZXZlbnROYW1lID0gJGVsLmF0dHIoJ2RhdGEtZmlyZS1ldmVudCcpO1xyXG5cclxuXHJcblx0XHQkZWwub24oJ2NsaWNrLnRvZ2dsZUNsYXNzJywgZnVuY3Rpb24oZSkge1xyXG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRcdCR0YXJnZXQudG9nZ2xlQ2xhc3MoIGNsYXNzTmFtZSApO1xyXG5cclxuXHRcdFx0dmFyIGhhc0NsYXNzID0gJHRhcmdldC5oYXNDbGFzcyggY2xhc3NOYW1lICk7XHJcblxyXG5cdFx0XHRpZiAoICEhZXZlbnROYW1lICkge1xyXG5cdFx0XHRcdCR3aW5kb3cudHJpZ2dlciggZXZlbnROYW1lLCB7XHJcblx0XHRcdFx0XHRhZGRlZDogaGFzQ2xhc3MsXHJcblx0XHRcdFx0XHRyZW1vdmVkOiAhaGFzQ2xhc3NcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblxyXG5cdFx0JGVsLmRhdGEoJ3RvZ2dsZUNsYXNzQmluZGVkJywgdHJ1ZSk7XHJcblxyXG5cdFx0cmV0dXJuIHRydWU7XHJcblx0fTtcclxuXHJcblx0JChmdW5jdGlvbigpIHtcclxuXHRcdCQoJ1tkYXRhLXRvZ2dsZS1jbGFzc11bZGF0YS10YXJnZXRdJykuZWFjaChmdW5jdGlvbigpIHtcclxuXHRcdFx0dG9nZ2xlQ2xhc3MoICQodGhpcykgKTtcclxuXHRcdH0pO1xyXG5cdH0pO1xyXG5cclxufSkuYXBwbHkodGhpcywgW2pRdWVyeV0pO1xyXG5cclxuLy8gQ2FyZHNcclxuKGZ1bmN0aW9uKCQpIHtcclxuXHJcblx0JChmdW5jdGlvbigpIHtcclxuXHRcdCQoJy5jYXJkJylcclxuXHRcdFx0Lm9uKCAnY2FyZDp0b2dnbGUnLCBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHR2YXIgJHRoaXMsXHJcblx0XHRcdFx0XHRkaXJlY3Rpb247XHJcblxyXG5cdFx0XHRcdCR0aGlzID0gJCh0aGlzKTtcclxuXHRcdFx0XHRkaXJlY3Rpb24gPSAkdGhpcy5oYXNDbGFzcyggJ2NhcmQtY29sbGFwc2VkJyApID8gJ0Rvd24nIDogJ1VwJztcclxuXHJcblx0XHRcdFx0JHRoaXMuZmluZCgnLmNhcmQtYm9keSwgLmNhcmQtZm9vdGVyJylbICdzbGlkZScgKyBkaXJlY3Rpb24gXSggMjAwLCBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdCR0aGlzWyAoZGlyZWN0aW9uID09PSAnVXAnID8gJ2FkZCcgOiAncmVtb3ZlJykgKyAnQ2xhc3MnIF0oICdjYXJkLWNvbGxhcHNlZCcgKVxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9KVxyXG5cdFx0XHQub24oICdjYXJkOmRpc21pc3MnLCBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHR2YXIgJHRoaXMgPSAkKHRoaXMpO1xyXG5cclxuXHRcdFx0XHRpZiAoICEhKCAkdGhpcy5wYXJlbnQoJ2RpdicpLmF0dHIoJ2NsYXNzJykgfHwgJycgKS5tYXRjaCggL2NvbC0oeHN8c218bWR8bGcpL2cgKSAmJiAkdGhpcy5zaWJsaW5ncygpLmxlbmd0aCA9PT0gMCApIHtcclxuXHRcdFx0XHRcdCRyb3cgPSAkdGhpcy5jbG9zZXN0KCcucm93Jyk7XHJcblx0XHRcdFx0XHQkdGhpcy5wYXJlbnQoJ2RpdicpLnJlbW92ZSgpO1xyXG5cdFx0XHRcdFx0aWYgKCAkcm93LmNoaWxkcmVuKCkubGVuZ3RoID09PSAwICkge1xyXG5cdFx0XHRcdFx0XHQkcm93LnJlbW92ZSgpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHQkdGhpcy5yZW1vdmUoKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pXHJcblx0XHRcdC5vbiggJ2NsaWNrJywgJ1tkYXRhLWNhcmQtdG9nZ2xlXScsIGZ1bmN0aW9uKCBlICkge1xyXG5cdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRcdFx0XHQkKHRoaXMpLmNsb3Nlc3QoJy5jYXJkJykudHJpZ2dlciggJ2NhcmQ6dG9nZ2xlJyApO1xyXG5cdFx0XHR9KVxyXG5cdFx0XHQub24oICdjbGljaycsICdbZGF0YS1jYXJkLWRpc21pc3NdJywgZnVuY3Rpb24oIGUgKSB7XHJcblx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0XHRcdCQodGhpcykuY2xvc2VzdCgnLmNhcmQnKS50cmlnZ2VyKCAnY2FyZDpkaXNtaXNzJyApO1xyXG5cdFx0XHR9KVxyXG5cdFx0XHQvKiBEZXByZWNhdGVkICovXHJcblx0XHRcdC5vbiggJ2NsaWNrJywgJy5jYXJkLWFjdGlvbnMgYS5mYS1jYXJldC11cCcsIGZ1bmN0aW9uKCBlICkge1xyXG5cdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRcdFx0XHR2YXIgJHRoaXMgPSAkKCB0aGlzICk7XHJcblxyXG5cdFx0XHRcdCR0aGlzXHJcblx0XHRcdFx0XHQucmVtb3ZlQ2xhc3MoICdmYS1jYXJldC11cCcgKVxyXG5cdFx0XHRcdFx0LmFkZENsYXNzKCAnZmEtY2FyZXQtZG93bicgKTtcclxuXHJcblx0XHRcdFx0JHRoaXMuY2xvc2VzdCgnLmNhcmQnKS50cmlnZ2VyKCAnY2FyZDp0b2dnbGUnICk7XHJcblx0XHRcdH0pXHJcblx0XHRcdC5vbiggJ2NsaWNrJywgJy5jYXJkLWFjdGlvbnMgYS5mYS1jYXJldC1kb3duJywgZnVuY3Rpb24oIGUgKSB7XHJcblx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0XHRcdHZhciAkdGhpcyA9ICQoIHRoaXMgKTtcclxuXHJcblx0XHRcdFx0JHRoaXNcclxuXHRcdFx0XHRcdC5yZW1vdmVDbGFzcyggJ2ZhLWNhcmV0LWRvd24nIClcclxuXHRcdFx0XHRcdC5hZGRDbGFzcyggJ2ZhLWNhcmV0LXVwJyApO1xyXG5cclxuXHRcdFx0XHQkdGhpcy5jbG9zZXN0KCcuY2FyZCcpLnRyaWdnZXIoICdjYXJkOnRvZ2dsZScgKTtcclxuXHRcdFx0fSlcclxuXHRcdFx0Lm9uKCAnY2xpY2snLCAnLmNhcmQtYWN0aW9ucyBhLmZhLXRpbWVzJywgZnVuY3Rpb24oIGUgKSB7XHJcblx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0XHRcdHZhciAkdGhpcyA9ICQoIHRoaXMgKTtcclxuXHJcblx0XHRcdFx0JHRoaXMuY2xvc2VzdCgnLmNhcmQnKS50cmlnZ2VyKCAnY2FyZDpkaXNtaXNzJyApO1xyXG5cdFx0XHR9KTtcclxuXHR9KTtcclxuXHJcbn0pKGpRdWVyeSk7XHJcblxyXG4vLyBDYXJvdXNlbFxyXG4oZnVuY3Rpb24odGhlbWUsICQpIHtcclxuXHJcblx0dGhlbWUgPSB0aGVtZSB8fCB7fTtcclxuXHJcblx0dmFyIGluaXRpYWxpemVkID0gZmFsc2U7XHJcblx0dmFyIGluc3RhbmNlTmFtZSA9ICdfX2Nhcm91c2VsJztcclxuXHJcblx0dmFyIFBsdWdpbkNhcm91c2VsID0gZnVuY3Rpb24oJGVsLCBvcHRzKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5pbml0aWFsaXplKCRlbCwgb3B0cyk7XHJcblx0fTtcclxuXHJcblx0UGx1Z2luQ2Fyb3VzZWwuZGVmYXVsdHMgPSB7XHJcblx0XHRuYXZUZXh0OiBbXVxyXG5cdH07XHJcblxyXG5cdFBsdWdpbkNhcm91c2VsLnByb3RvdHlwZSA9IHtcclxuXHRcdGluaXRpYWxpemU6IGZ1bmN0aW9uKCRlbCwgb3B0cykge1xyXG5cdFx0XHRpZiAoICRlbC5kYXRhKCBpbnN0YW5jZU5hbWUgKSApIHtcclxuXHRcdFx0XHRyZXR1cm4gdGhpcztcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0dGhpcy4kZWwgPSAkZWw7XHJcblxyXG5cdFx0XHR0aGlzXHJcblx0XHRcdFx0LnNldERhdGEoKVxyXG5cdFx0XHRcdC5zZXRPcHRpb25zKG9wdHMpXHJcblx0XHRcdFx0LmJ1aWxkKCk7XHJcblxyXG5cdFx0XHRyZXR1cm4gdGhpcztcclxuXHRcdH0sXHJcblxyXG5cdFx0c2V0RGF0YTogZnVuY3Rpb24oKSB7XHJcblx0XHRcdHRoaXMuJGVsLmRhdGEoaW5zdGFuY2VOYW1lLCB0aGlzKTtcclxuXHJcblx0XHRcdHJldHVybiB0aGlzO1xyXG5cdFx0fSxcclxuXHJcblx0XHRzZXRPcHRpb25zOiBmdW5jdGlvbihvcHRzKSB7XHJcblx0XHRcdHRoaXMub3B0aW9ucyA9ICQuZXh0ZW5kKHRydWUsIHt9LCBQbHVnaW5DYXJvdXNlbC5kZWZhdWx0cywgb3B0cywge1xyXG5cdFx0XHRcdHdyYXBwZXI6IHRoaXMuJGVsXHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0cmV0dXJuIHRoaXM7XHJcblx0XHR9LFxyXG5cclxuXHRcdGJ1aWxkOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0dGhpcy5vcHRpb25zLndyYXBwZXIub3dsQ2Fyb3VzZWwodGhpcy5vcHRpb25zKS5hZGRDbGFzcyhcIm93bC1jYXJvdXNlbC1pbml0XCIpO1xyXG5cclxuXHRcdFx0cmV0dXJuIHRoaXM7XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblx0Ly8gZXhwb3NlIHRvIHNjb3BlXHJcblx0JC5leHRlbmQodGhlbWUsIHtcclxuXHRcdFBsdWdpbkNhcm91c2VsOiBQbHVnaW5DYXJvdXNlbFxyXG5cdH0pO1xyXG5cclxuXHQvLyBqcXVlcnkgcGx1Z2luXHJcblx0JC5mbi50aGVtZVBsdWdpbkNhcm91c2VsID0gZnVuY3Rpb24ob3B0cykge1xyXG5cdFx0cmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHR2YXIgJHRoaXMgPSAkKHRoaXMpO1xyXG5cclxuXHRcdFx0aWYgKCR0aGlzLmRhdGEoaW5zdGFuY2VOYW1lKSkge1xyXG5cdFx0XHRcdHJldHVybiAkdGhpcy5kYXRhKGluc3RhbmNlTmFtZSk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0cmV0dXJuIG5ldyBQbHVnaW5DYXJvdXNlbCgkdGhpcywgb3B0cyk7XHJcblx0XHRcdH1cclxuXHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG59KS5hcHBseSh0aGlzLCBbd2luZG93LnRoZW1lLCBqUXVlcnldKTtcclxuXHJcbi8vIENoYXJ0IENpcmN1bGFyXHJcbihmdW5jdGlvbih0aGVtZSwgJCkge1xyXG5cclxuXHR0aGVtZSA9IHRoZW1lIHx8IHt9O1xyXG5cclxuXHR2YXIgaW5zdGFuY2VOYW1lID0gJ19fY2hhcnRDaXJjdWxhcic7XHJcblxyXG5cdHZhciBQbHVnaW5DaGFydENpcmN1bGFyID0gZnVuY3Rpb24oJGVsLCBvcHRzKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5pbml0aWFsaXplKCRlbCwgb3B0cyk7XHJcblx0fTtcclxuXHJcblx0UGx1Z2luQ2hhcnRDaXJjdWxhci5kZWZhdWx0cyA9IHtcclxuXHRcdGFjY1g6IDAsXHJcblx0XHRhY2NZOiAtMTUwLFxyXG5cdFx0ZGVsYXk6IDEsXHJcblx0XHRiYXJDb2xvcjogJyMwMDg4Q0MnLFxyXG5cdFx0dHJhY2tDb2xvcjogJyNmMmYyZjInLFxyXG5cdFx0c2NhbGVDb2xvcjogZmFsc2UsXHJcblx0XHRzY2FsZUxlbmd0aDogNSxcclxuXHRcdGxpbmVDYXA6ICdyb3VuZCcsXHJcblx0XHRsaW5lV2lkdGg6IDEzLFxyXG5cdFx0c2l6ZTogMTc1LFxyXG5cdFx0cm90YXRlOiAwLFxyXG5cdFx0YW5pbWF0ZTogKHtcclxuXHRcdFx0ZHVyYXRpb246IDI1MDAsXHJcblx0XHRcdGVuYWJsZWQ6IHRydWVcclxuXHRcdH0pXHJcblx0fTtcclxuXHJcblx0UGx1Z2luQ2hhcnRDaXJjdWxhci5wcm90b3R5cGUgPSB7XHJcblx0XHRpbml0aWFsaXplOiBmdW5jdGlvbigkZWwsIG9wdHMpIHtcclxuXHRcdFx0aWYgKCAkZWwuZGF0YSggaW5zdGFuY2VOYW1lICkgKSB7XHJcblx0XHRcdFx0cmV0dXJuIHRoaXM7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHRoaXMuJGVsID0gJGVsO1xyXG5cclxuXHRcdFx0dGhpc1xyXG5cdFx0XHRcdC5zZXREYXRhKClcclxuXHRcdFx0XHQuc2V0T3B0aW9ucyhvcHRzKVxyXG5cdFx0XHRcdC5idWlsZCgpO1xyXG5cclxuXHRcdFx0cmV0dXJuIHRoaXM7XHJcblx0XHR9LFxyXG5cclxuXHRcdHNldERhdGE6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHR0aGlzLiRlbC5kYXRhKGluc3RhbmNlTmFtZSwgdGhpcyk7XHJcblxyXG5cdFx0XHRyZXR1cm4gdGhpcztcclxuXHRcdH0sXHJcblxyXG5cdFx0c2V0T3B0aW9uczogZnVuY3Rpb24ob3B0cykge1xyXG5cdFx0XHR0aGlzLm9wdGlvbnMgPSAkLmV4dGVuZCh0cnVlLCB7fSwgUGx1Z2luQ2hhcnRDaXJjdWxhci5kZWZhdWx0cywgb3B0cywge1xyXG5cdFx0XHRcdHdyYXBwZXI6IHRoaXMuJGVsXHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0cmV0dXJuIHRoaXM7XHJcblx0XHR9LFxyXG5cclxuXHRcdGJ1aWxkOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0dmFyIHNlbGYgPSB0aGlzLFxyXG5cdFx0XHRcdCRlbCA9IHRoaXMub3B0aW9ucy53cmFwcGVyLFxyXG5cdFx0XHRcdHZhbHVlID0gKCRlbC5hdHRyKCdkYXRhLXBlcmNlbnQnKSA/ICRlbC5hdHRyKCdkYXRhLXBlcmNlbnQnKSA6IDApLFxyXG5cdFx0XHRcdHBlcmNlbnRFbCA9ICRlbC5maW5kKCcucGVyY2VudCcpLFxyXG5cdFx0XHRcdHNob3VsZEFuaW1hdGUsXHJcblx0XHRcdFx0ZGF0YTtcclxuXHJcblx0XHRcdHNob3VsZEFuaW1hdGUgPSAkLmlzRnVuY3Rpb24oJC5mblsgJ2FwcGVhcicgXSkgJiYgKCB0eXBlb2YgJC5icm93c2VyICE9PSAndW5kZWZpbmVkJyAmJiAhJC5icm93c2VyLm1vYmlsZSApO1xyXG5cdFx0XHRkYXRhID0geyBhY2NYOiBzZWxmLm9wdGlvbnMuYWNjWCwgYWNjWTogc2VsZi5vcHRpb25zLmFjY1kgfTtcclxuXHJcblx0XHRcdCQuZXh0ZW5kKHRydWUsIHNlbGYub3B0aW9ucywge1xyXG5cdFx0XHRcdG9uU3RlcDogZnVuY3Rpb24oZnJvbSwgdG8sIGN1cnJlbnRWYWx1ZSkge1xyXG5cdFx0XHRcdFx0cGVyY2VudEVsLmh0bWwocGFyc2VJbnQoY3VycmVudFZhbHVlKSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdCRlbC5hdHRyKCdkYXRhLXBlcmNlbnQnLCAoc2hvdWxkQW5pbWF0ZSA/IDAgOiB2YWx1ZSkgKTtcclxuXHJcblx0XHRcdCRlbC5lYXN5UGllQ2hhcnQoIHRoaXMub3B0aW9ucyApO1xyXG5cclxuXHRcdFx0aWYgKCBzaG91bGRBbmltYXRlICkge1xyXG5cdFx0XHRcdCRlbC5hcHBlYXIoZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0XHQkZWwuZGF0YSgnZWFzeVBpZUNoYXJ0JykudXBkYXRlKHZhbHVlKTtcclxuXHRcdFx0XHRcdFx0JGVsLmF0dHIoJ2RhdGEtcGVyY2VudCcsIHZhbHVlKTtcclxuXHJcblx0XHRcdFx0XHR9LCBzZWxmLm9wdGlvbnMuZGVsYXkpO1xyXG5cdFx0XHRcdH0sIGRhdGEpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdCRlbC5kYXRhKCdlYXN5UGllQ2hhcnQnKS51cGRhdGUodmFsdWUpO1xyXG5cdFx0XHRcdCRlbC5hdHRyKCdkYXRhLXBlcmNlbnQnLCB2YWx1ZSk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHJldHVybiB0aGlzO1xyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdC8vIGV4cG9zZSB0byBzY29wZVxyXG5cdCQuZXh0ZW5kKHRydWUsIHRoZW1lLCB7XHJcblx0XHRDaGFydDoge1xyXG5cdFx0XHRQbHVnaW5DaGFydENpcmN1bGFyOiBQbHVnaW5DaGFydENpcmN1bGFyXHJcblx0XHR9XHJcblx0fSk7XHJcblxyXG5cdC8vIGpxdWVyeSBwbHVnaW5cclxuXHQkLmZuLnRoZW1lUGx1Z2luQ2hhcnRDaXJjdWxhciA9IGZ1bmN0aW9uKG9wdHMpIHtcclxuXHRcdHJldHVybiB0aGlzLm1hcChmdW5jdGlvbigpIHtcclxuXHRcdFx0dmFyICR0aGlzID0gJCh0aGlzKTtcclxuXHJcblx0XHRcdGlmICgkdGhpcy5kYXRhKGluc3RhbmNlTmFtZSkpIHtcclxuXHRcdFx0XHRyZXR1cm4gJHRoaXMuZGF0YShpbnN0YW5jZU5hbWUpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHJldHVybiBuZXcgUGx1Z2luQ2hhcnRDaXJjdWxhcigkdGhpcywgb3B0cyk7XHJcblx0XHRcdH1cclxuXHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG59KS5hcHBseSh0aGlzLCBbd2luZG93LnRoZW1lLCBqUXVlcnldKTtcclxuXHJcbi8vIENvZGVtaXJyb3JcclxuKGZ1bmN0aW9uKHRoZW1lLCAkKSB7XHJcblxyXG5cdHRoZW1lID0gdGhlbWUgfHwge307XHJcblxyXG5cdHZhciBpbnN0YW5jZU5hbWUgPSAnX19jb2RlbWlycm9yJztcclxuXHJcblx0dmFyIFBsdWdpbkNvZGVNaXJyb3IgPSBmdW5jdGlvbigkZWwsIG9wdHMpIHtcclxuXHRcdHJldHVybiB0aGlzLmluaXRpYWxpemUoJGVsLCBvcHRzKTtcclxuXHR9O1xyXG5cclxuXHRQbHVnaW5Db2RlTWlycm9yLmRlZmF1bHRzID0ge1xyXG5cdFx0bGluZU51bWJlcnM6IHRydWUsXHJcblx0XHRzdHlsZUFjdGl2ZUxpbmU6IHRydWUsXHJcblx0XHRtYXRjaEJyYWNrZXRzOiB0cnVlLFxyXG5cdFx0dGhlbWU6ICdtb25va2FpJ1xyXG5cdH07XHJcblxyXG5cdFBsdWdpbkNvZGVNaXJyb3IucHJvdG90eXBlID0ge1xyXG5cdFx0aW5pdGlhbGl6ZTogZnVuY3Rpb24oJGVsLCBvcHRzKSB7XHJcblx0XHRcdGlmICggJGVsLmRhdGEoIGluc3RhbmNlTmFtZSApICkge1xyXG5cdFx0XHRcdHJldHVybiB0aGlzO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHR0aGlzLiRlbCA9ICRlbDtcclxuXHJcblx0XHRcdHRoaXNcclxuXHRcdFx0XHQuc2V0RGF0YSgpXHJcblx0XHRcdFx0LnNldE9wdGlvbnMob3B0cylcclxuXHRcdFx0XHQuYnVpbGQoKTtcclxuXHJcblx0XHRcdHJldHVybiB0aGlzO1xyXG5cdFx0fSxcclxuXHJcblx0XHRzZXREYXRhOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0dGhpcy4kZWwuZGF0YShpbnN0YW5jZU5hbWUsIHRoaXMpO1xyXG5cclxuXHRcdFx0cmV0dXJuIHRoaXM7XHJcblx0XHR9LFxyXG5cclxuXHRcdHNldE9wdGlvbnM6IGZ1bmN0aW9uKG9wdHMpIHtcclxuXHRcdFx0dGhpcy5vcHRpb25zID0gJC5leHRlbmQoIHRydWUsIHt9LCBQbHVnaW5Db2RlTWlycm9yLmRlZmF1bHRzLCBvcHRzICk7XHJcblxyXG5cdFx0XHRyZXR1cm4gdGhpcztcclxuXHRcdH0sXHJcblxyXG5cdFx0YnVpbGQ6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRDb2RlTWlycm9yLmZyb21UZXh0QXJlYSggdGhpcy4kZWwuZ2V0KDApLCB0aGlzLm9wdGlvbnMgKTtcclxuXHJcblx0XHRcdHJldHVybiB0aGlzO1xyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdC8vIGV4cG9zZSB0byBzY29wZVxyXG5cdCQuZXh0ZW5kKHRoZW1lLCB7XHJcblx0XHRQbHVnaW5Db2RlTWlycm9yOiBQbHVnaW5Db2RlTWlycm9yXHJcblx0fSk7XHJcblxyXG5cdC8vIGpxdWVyeSBwbHVnaW5cclxuXHQkLmZuLnRoZW1lUGx1Z2luQ29kZU1pcnJvciA9IGZ1bmN0aW9uKG9wdHMpIHtcclxuXHRcdHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKSB7XHJcblx0XHRcdHZhciAkdGhpcyA9ICQodGhpcyk7XHJcblxyXG5cdFx0XHRpZiAoJHRoaXMuZGF0YShpbnN0YW5jZU5hbWUpKSB7XHJcblx0XHRcdFx0cmV0dXJuICR0aGlzLmRhdGEoaW5zdGFuY2VOYW1lKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRyZXR1cm4gbmV3IFBsdWdpbkNvZGVNaXJyb3IoJHRoaXMsIG9wdHMpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxufSkuYXBwbHkodGhpcywgW3dpbmRvdy50aGVtZSwgalF1ZXJ5XSk7XHJcblxyXG4vLyBDb2xvcnBpY2tlclxyXG4oZnVuY3Rpb24odGhlbWUsICQpIHtcclxuXHJcblx0dGhlbWUgPSB0aGVtZSB8fCB7fTtcclxuXHJcblx0dmFyIGluc3RhbmNlTmFtZSA9ICdfX2NvbG9ycGlja2VyJztcclxuXHJcblx0dmFyIFBsdWdpbkNvbG9yUGlja2VyID0gZnVuY3Rpb24oJGVsLCBvcHRzKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5pbml0aWFsaXplKCRlbCwgb3B0cyk7XHJcblx0fTtcclxuXHJcblx0UGx1Z2luQ29sb3JQaWNrZXIuZGVmYXVsdHMgPSB7XHJcblx0fTtcclxuXHJcblx0UGx1Z2luQ29sb3JQaWNrZXIucHJvdG90eXBlID0ge1xyXG5cdFx0aW5pdGlhbGl6ZTogZnVuY3Rpb24oJGVsLCBvcHRzKSB7XHJcblx0XHRcdGlmICggJGVsLmRhdGEoIGluc3RhbmNlTmFtZSApICkge1xyXG5cdFx0XHRcdHJldHVybiB0aGlzO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHR0aGlzLiRlbCA9ICRlbDtcclxuXHJcblx0XHRcdHRoaXNcclxuXHRcdFx0XHQuc2V0RGF0YSgpXHJcblx0XHRcdFx0LnNldE9wdGlvbnMob3B0cylcclxuXHRcdFx0XHQuYnVpbGQoKTtcclxuXHJcblx0XHRcdHJldHVybiB0aGlzO1xyXG5cdFx0fSxcclxuXHJcblx0XHRzZXREYXRhOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0dGhpcy4kZWwuZGF0YShpbnN0YW5jZU5hbWUsIHRoaXMpO1xyXG5cclxuXHRcdFx0cmV0dXJuIHRoaXM7XHJcblx0XHR9LFxyXG5cclxuXHRcdHNldE9wdGlvbnM6IGZ1bmN0aW9uKG9wdHMpIHtcclxuXHRcdFx0dGhpcy5vcHRpb25zID0gJC5leHRlbmQoIHRydWUsIHt9LCBQbHVnaW5Db2xvclBpY2tlci5kZWZhdWx0cywgb3B0cyApO1xyXG5cclxuXHRcdFx0cmV0dXJuIHRoaXM7XHJcblx0XHR9LFxyXG5cclxuXHRcdGJ1aWxkOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0dGhpcy4kZWwuY29sb3JwaWNrZXIoIHRoaXMub3B0aW9ucyApO1xyXG5cclxuXHRcdFx0cmV0dXJuIHRoaXM7XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblx0Ly8gZXhwb3NlIHRvIHNjb3BlXHJcblx0JC5leHRlbmQodGhlbWUsIHtcclxuXHRcdFBsdWdpbkNvbG9yUGlja2VyOiBQbHVnaW5Db2xvclBpY2tlclxyXG5cdH0pO1xyXG5cclxuXHQvLyBqcXVlcnkgcGx1Z2luXHJcblx0JC5mbi50aGVtZVBsdWdpbkNvbG9yUGlja2VyID0gZnVuY3Rpb24ob3B0cykge1xyXG5cdFx0cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpIHtcclxuXHRcdFx0dmFyICR0aGlzID0gJCh0aGlzKTtcclxuXHJcblx0XHRcdGlmICgkdGhpcy5kYXRhKGluc3RhbmNlTmFtZSkpIHtcclxuXHRcdFx0XHRyZXR1cm4gJHRoaXMuZGF0YShpbnN0YW5jZU5hbWUpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHJldHVybiBuZXcgUGx1Z2luQ29sb3JQaWNrZXIoJHRoaXMsIG9wdHMpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxufSkuYXBwbHkodGhpcywgW3dpbmRvdy50aGVtZSwgalF1ZXJ5XSk7XHJcblxyXG4vLyBEYXRhIFRhYmxlcyAtIENvbmZpZ1xyXG4oZnVuY3Rpb24oJCkge1xyXG5cclxuXHQndXNlIHN0cmljdCc7XHJcblxyXG5cdC8vIHdlIG92ZXJ3cml0ZSBpbml0aWFsaXplIG9mIGFsbCBkYXRhdGFibGVzIGhlcmVcclxuXHQvLyBiZWNhdXNlIHdlIHdhbnQgdG8gdXNlIHNlbGVjdDIsIGdpdmUgc2VhcmNoIGlucHV0IGEgYm9vdHN0cmFwIGxvb2tcclxuXHQvLyBrZWVwIGluIG1pbmQgaWYgeW91IG92ZXJ3cml0ZSB0aGlzIGZuSW5pdENvbXBsZXRlIHNvbWV3aGVyZSxcclxuXHQvLyB5b3Ugc2hvdWxkIHJ1biB0aGUgY29kZSBpbnNpZGUgdGhpcyBmdW5jdGlvbiB0byBrZWVwIGZ1bmN0aW9uYWxpdHkuXHJcblx0Ly9cclxuXHQvLyB0aGVyZSdzIG5vIGJldHRlciB3YXkgdG8gZG8gdGhpcyBhdCB0aGlzIHRpbWUgOihcclxuXHRpZiAoICQuaXNGdW5jdGlvbiggJC5mblsgJ2RhdGFUYWJsZScgXSApICkge1xyXG5cclxuXHRcdCQuZXh0ZW5kKHRydWUsICQuZm4uZGF0YVRhYmxlLmRlZmF1bHRzLCB7XHJcblx0XHRcdG9MYW5ndWFnZToge1xyXG5cdFx0XHRcdHNMZW5ndGhNZW51OiAnX01FTlVfIHJlY29yZHMgcGVyIHBhZ2UnLFxyXG5cdFx0XHRcdHNQcm9jZXNzaW5nOiAnPGkgY2xhc3M9XCJmYXMgZmEtc3Bpbm5lciBmYS1zcGluXCI+PC9pPiBMb2FkaW5nJyxcclxuXHRcdFx0XHRzU2VhcmNoOiAnJ1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRmbkluaXRDb21wbGV0ZTogZnVuY3Rpb24oIHNldHRpbmdzLCBqc29uICkge1xyXG5cdFx0XHRcdC8vIHNlbGVjdCAyXHJcblx0XHRcdFx0aWYgKCAkLmlzRnVuY3Rpb24oICQuZm5bICdzZWxlY3QyJyBdICkgKSB7XHJcblx0XHRcdFx0XHQkKCcuZGF0YVRhYmxlc19sZW5ndGggc2VsZWN0Jywgc2V0dGluZ3MublRhYmxlV3JhcHBlcikuc2VsZWN0Mih7XHJcblx0XHRcdFx0XHRcdHRoZW1lOiAnYm9vdHN0cmFwJyxcclxuXHRcdFx0XHRcdFx0bWluaW11bVJlc3VsdHNGb3JTZWFyY2g6IC0xXHJcblx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdHZhciBvcHRpb25zID0gJCggJ3RhYmxlJywgc2V0dGluZ3MublRhYmxlV3JhcHBlciApLmRhdGEoICdwbHVnaW4tb3B0aW9ucycgKSB8fCB7fTtcclxuXHJcblx0XHRcdFx0Ly8gc2VhcmNoXHJcblx0XHRcdFx0dmFyICRzZWFyY2ggPSAkKCcuZGF0YVRhYmxlc19maWx0ZXIgaW5wdXQnLCBzZXR0aW5ncy5uVGFibGVXcmFwcGVyKTtcclxuXHJcblx0XHRcdFx0JHNlYXJjaFxyXG5cdFx0XHRcdFx0LmF0dHIoe1xyXG5cdFx0XHRcdFx0XHRwbGFjZWhvbGRlcjogdHlwZW9mIG9wdGlvbnMuc2VhcmNoUGxhY2Vob2xkZXIgIT09ICd1bmRlZmluZWQnID8gb3B0aW9ucy5zZWFyY2hQbGFjZWhvbGRlciA6ICdTZWFyY2guLi4nXHJcblx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0LnJlbW92ZUNsYXNzKCdmb3JtLWNvbnRyb2wtc20nKS5hZGRDbGFzcygnZm9ybS1jb250cm9sIHB1bGwtcmlnaHQnKTtcclxuXHJcblx0XHRcdFx0aWYgKCAkLmlzRnVuY3Rpb24oICQuZm4ucGxhY2Vob2xkZXIgKSApIHtcclxuXHRcdFx0XHRcdCRzZWFyY2gucGxhY2Vob2xkZXIoKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cclxuXHR9XHJcblxyXG59KS5hcHBseSh0aGlzLCBbalF1ZXJ5XSk7XHJcblxyXG4vLyBEYXRlcGlja2VyXHJcbihmdW5jdGlvbih0aGVtZSwgJCkge1xyXG5cclxuXHR0aGVtZSA9IHRoZW1lIHx8IHt9O1xyXG5cclxuXHR2YXIgaW5zdGFuY2VOYW1lID0gJ19fZGF0ZXBpY2tlcic7XHJcblxyXG5cdHZhciBQbHVnaW5EYXRlUGlja2VyID0gZnVuY3Rpb24oJGVsLCBvcHRzKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5pbml0aWFsaXplKCRlbCwgb3B0cyk7XHJcblx0fTtcclxuXHJcblx0UGx1Z2luRGF0ZVBpY2tlci5kZWZhdWx0cyA9IHtcclxuXHR9O1xyXG5cclxuXHRQbHVnaW5EYXRlUGlja2VyLnByb3RvdHlwZSA9IHtcclxuXHRcdGluaXRpYWxpemU6IGZ1bmN0aW9uKCRlbCwgb3B0cykge1xyXG5cdFx0XHRpZiAoICRlbC5kYXRhKCBpbnN0YW5jZU5hbWUgKSApIHtcclxuXHRcdFx0XHRyZXR1cm4gdGhpcztcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0dGhpcy4kZWwgPSAkZWw7XHJcblxyXG5cdFx0XHR0aGlzXHJcblx0XHRcdFx0LnNldFZhcnMoKVxyXG5cdFx0XHRcdC5zZXREYXRhKClcclxuXHRcdFx0XHQuc2V0T3B0aW9ucyhvcHRzKVxyXG5cdFx0XHRcdC5idWlsZCgpO1xyXG5cclxuXHRcdFx0cmV0dXJuIHRoaXM7XHJcblx0XHR9LFxyXG5cclxuXHRcdHNldFZhcnM6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHR0aGlzLnNraW4gPSB0aGlzLiRlbC5kYXRhKCAncGx1Z2luLXNraW4nICk7XHJcblxyXG5cdFx0XHRyZXR1cm4gdGhpcztcclxuXHRcdH0sXHJcblxyXG5cdFx0c2V0RGF0YTogZnVuY3Rpb24oKSB7XHJcblx0XHRcdHRoaXMuJGVsLmRhdGEoaW5zdGFuY2VOYW1lLCB0aGlzKTtcclxuXHJcblx0XHRcdHJldHVybiB0aGlzO1xyXG5cdFx0fSxcclxuXHJcblx0XHRzZXRPcHRpb25zOiBmdW5jdGlvbihvcHRzKSB7XHJcblx0XHRcdHRoaXMub3B0aW9ucyA9ICQuZXh0ZW5kKCB0cnVlLCB7fSwgUGx1Z2luRGF0ZVBpY2tlci5kZWZhdWx0cywgb3B0cyApO1xyXG5cclxuXHRcdFx0cmV0dXJuIHRoaXM7XHJcblx0XHR9LFxyXG5cclxuXHRcdGJ1aWxkOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0dGhpcy4kZWwuYm9vdHN0cmFwRFAoIHRoaXMub3B0aW9ucyApO1xyXG5cclxuXHRcdFx0aWYgKCAhIXRoaXMuc2tpbiAmJiB0eXBlb2YodGhpcy4kZWwuZGF0YSgnZGF0ZXBpY2tlcicpLnBpY2tlcikgIT0gJ3VuZGVmaW5lZCcpIHtcclxuXHRcdFx0XHR0aGlzLiRlbC5kYXRhKCdkYXRlcGlja2VyJykucGlja2VyLmFkZENsYXNzKCAnZGF0ZXBpY2tlci0nICsgdGhpcy5za2luICk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHJldHVybiB0aGlzO1xyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdC8vIGV4cG9zZSB0byBzY29wZVxyXG5cdCQuZXh0ZW5kKHRoZW1lLCB7XHJcblx0XHRQbHVnaW5EYXRlUGlja2VyOiBQbHVnaW5EYXRlUGlja2VyXHJcblx0fSk7XHJcblxyXG5cdC8vIGpxdWVyeSBwbHVnaW5cclxuXHQkLmZuLnRoZW1lUGx1Z2luRGF0ZVBpY2tlciA9IGZ1bmN0aW9uKG9wdHMpIHtcclxuXHRcdHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKSB7XHJcblx0XHRcdHZhciAkdGhpcyA9ICQodGhpcyk7XHJcblxyXG5cdFx0XHRpZiAoJHRoaXMuZGF0YShpbnN0YW5jZU5hbWUpKSB7XHJcblx0XHRcdFx0cmV0dXJuICR0aGlzLmRhdGEoaW5zdGFuY2VOYW1lKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRyZXR1cm4gbmV3IFBsdWdpbkRhdGVQaWNrZXIoJHRoaXMsIG9wdHMpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxufSkuYXBwbHkodGhpcywgW3dpbmRvdy50aGVtZSwgalF1ZXJ5XSk7XHJcblxyXG4vLyBIZWFkZXIgTWVudSBOYXZcclxuKGZ1bmN0aW9uKHRoZW1lLCAkKSB7XHJcblxyXG5cdCd1c2Ugc3RyaWN0JztcclxuXHJcblx0dGhlbWUgPSB0aGVtZSB8fCB7fTtcclxuXHJcblx0dmFyIGluaXRpYWxpemVkID0gZmFsc2U7XHJcblxyXG5cdCQuZXh0ZW5kKHRoZW1lLCB7XHJcblxyXG5cdFx0TmF2OiB7XHJcblxyXG5cdFx0XHRkZWZhdWx0czoge1xyXG5cdFx0XHRcdHdyYXBwZXI6ICQoJyNtYWluTmF2JyksXHJcblx0XHRcdFx0c2Nyb2xsRGVsYXk6IDYwMCxcclxuXHRcdFx0XHRzY3JvbGxBbmltYXRpb246ICdlYXNlT3V0UXVhZCdcclxuXHRcdFx0fSxcclxuXHJcblx0XHRcdGluaXRpYWxpemU6IGZ1bmN0aW9uKCR3cmFwcGVyLCBvcHRzKSB7XHJcblx0XHRcdFx0aWYgKGluaXRpYWxpemVkKSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gdGhpcztcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdGluaXRpYWxpemVkID0gdHJ1ZTtcclxuXHRcdFx0XHR0aGlzLiR3cmFwcGVyID0gKCR3cmFwcGVyIHx8IHRoaXMuZGVmYXVsdHMud3JhcHBlcik7XHJcblxyXG5cdFx0XHRcdHRoaXNcclxuXHRcdFx0XHRcdC5zZXRPcHRpb25zKG9wdHMpXHJcblx0XHRcdFx0XHQuYnVpbGQoKVxyXG5cdFx0XHRcdFx0LmV2ZW50cygpO1xyXG5cclxuXHRcdFx0XHRyZXR1cm4gdGhpcztcclxuXHRcdFx0fSxcclxuXHJcblx0XHRcdHNldE9wdGlvbnM6IGZ1bmN0aW9uKG9wdHMpIHtcclxuXHRcdFx0XHQvLyB0aGlzLm9wdGlvbnMgPSAkLmV4dGVuZCh0cnVlLCB7fSwgdGhpcy5kZWZhdWx0cywgb3B0cywgdGhlbWUuZm4uZ2V0T3B0aW9ucyh0aGlzLiR3cmFwcGVyLmRhdGEoJ3BsdWdpbi1vcHRpb25zJykpKTtcclxuXHJcblx0XHRcdFx0cmV0dXJuIHRoaXM7XHJcblx0XHRcdH0sXHJcblxyXG5cdFx0XHRidWlsZDogZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0dmFyIHNlbGYgPSB0aGlzLFxyXG5cdFx0XHRcdFx0JGh0bWwgPSAkKCdodG1sJyksXHJcblx0XHRcdFx0XHQkaGVhZGVyID0gJCgnLmhlYWRlcicpLFxyXG5cdFx0XHRcdFx0dGh1bWJJbmZvUHJldmlldztcclxuXHJcblx0XHRcdFx0Ly8gQWRkIEFycm93c1xyXG5cdFx0XHRcdCRoZWFkZXIuZmluZCgnLmRyb3Bkb3duLXRvZ2dsZTpub3QoLm5vdGlmaWNhdGlvbi1pY29uKSwgLmRyb3Bkb3duLXN1Ym1lbnUgPiBhJykuYXBwZW5kKCQoJzxpIC8+JykuYWRkQ2xhc3MoJ2ZhcyBmYS1jYXJldC1kb3duJykpO1xyXG5cclxuXHRcdFx0XHQvLyBQcmV2aWV3IFRodW1ic1xyXG5cdFx0XHRcdHNlbGYuJHdyYXBwZXIuZmluZCgnYVtkYXRhLXRodW1iLXByZXZpZXddJykuZWFjaChmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdHRodW1iSW5mb1ByZXZpZXcgPSAkKCc8c3BhbiAvPicpLmFkZENsYXNzKCd0aHVtYi1pbmZvIHRodW1iLWluZm8tcHJldmlldycpXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQuYXBwZW5kKCQoJzxzcGFuIC8+JykuYWRkQ2xhc3MoJ3RodW1iLWluZm8td3JhcHBlcicpXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC5hcHBlbmQoJCgnPHNwYW4gLz4nKS5hZGRDbGFzcygndGh1bWItaW5mby1pbWFnZScpLmNzcygnYmFja2dyb3VuZC1pbWFnZScsICd1cmwoJyArICQodGhpcykuZGF0YSgndGh1bWItcHJldmlldycpICsgJyknKVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCAgIClcclxuXHRcdFx0XHRcdFx0XHRcdFx0ICAgKTtcclxuXHJcblx0XHRcdFx0XHQkKHRoaXMpLmFwcGVuZCh0aHVtYkluZm9QcmV2aWV3KTtcclxuXHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdFx0Ly8gU2lkZSBIZWFkZXIgUmlnaHQgKFJldmVyc2UgRHJvcGRvd24pXHJcblx0XHRcdFx0aWYoJGh0bWwuaGFzQ2xhc3MoJ3NpZGUtaGVhZGVyLXJpZ2h0JykpIHtcclxuXHRcdFx0XHRcdCRoZWFkZXIuZmluZCgnLmRyb3Bkb3duJykuYWRkQ2xhc3MoJ2Ryb3Bkb3duLXJldmVyc2UnKTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdHJldHVybiB0aGlzO1xyXG5cdFx0XHR9LFxyXG5cclxuXHRcdFx0ZXZlbnRzOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHR2YXIgc2VsZiA9IHRoaXMsXHJcblx0XHRcdFx0XHQkaGVhZGVyID0gJCgnLmhlYWRlcicpLFxyXG5cdFx0XHRcdFx0JHdpbmRvdyA9ICQod2luZG93KTtcclxuXHJcblx0XHRcdFx0JGhlYWRlci5maW5kKCdhW2hyZWY9XCIjXCJdJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xyXG5cdFx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0XHQvLyBNb2JpbGUgQXJyb3dzXHJcblx0XHRcdFx0JGhlYWRlci5maW5kKCcuZHJvcGRvd24tdG9nZ2xlW2hyZWY9XCIjXCJdLCAuZHJvcGRvd24tc3VibWVudSBhW2hyZWY9XCIjXCJdLCAuZHJvcGRvd24tdG9nZ2xlW2hyZWYhPVwiI1wiXSAuZmEtY2FyZXQtZG93biwgLmRyb3Bkb3duLXN1Ym1lbnUgYVtocmVmIT1cIiNcIl0gLmZhLWNhcmV0LWRvd24nKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XHJcblx0XHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRcdFx0XHRpZiAoJHdpbmRvdy53aWR0aCgpIDwgOTkyKSB7XHJcblx0XHRcdFx0XHRcdCQodGhpcykuY2xvc2VzdCgnbGknKS50b2dnbGVDbGFzcygnc2hvd2VkJyk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHRcdC8vIFRvdWNoIERldmljZXMgd2l0aCBub3JtYWwgcmVzb2x1dGlvbnNcclxuXHRcdFx0XHRpZignb250b3VjaHN0YXJ0JyBpbiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpIHtcclxuXHRcdFx0XHRcdCRoZWFkZXIuZmluZCgnLmRyb3Bkb3duLXRvZ2dsZTpub3QoW2hyZWY9XCIjXCJdKSwgLmRyb3Bkb3duLXN1Ym1lbnUgPiBhOm5vdChbaHJlZj1cIiNcIl0pJylcclxuXHRcdFx0XHRcdFx0Lm9uKCd0b3VjaHN0YXJ0IGNsaWNrJywgZnVuY3Rpb24oZSkge1xyXG5cdFx0XHRcdFx0XHRcdGlmKCR3aW5kb3cud2lkdGgoKSA+IDk5MSkge1xyXG5cclxuXHRcdFx0XHRcdFx0XHRcdGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblx0XHRcdFx0XHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0aWYoZS5oYW5kbGVkICE9PSB0cnVlKSB7XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0XHR2YXIgbGkgPSAkKHRoaXMpLmNsb3Nlc3QoJ2xpJyk7XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRpZihsaS5oYXNDbGFzcygndGFwcGVkJykpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRsb2NhdGlvbi5ocmVmID0gJCh0aGlzKS5hdHRyKCdocmVmJyk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRcdFx0XHRcdGxpLmFkZENsYXNzKCd0YXBwZWQnKTtcclxuXHJcblx0XHRcdFx0XHRcdFx0XHRcdGUuaGFuZGxlZCA9IHRydWU7XHJcblx0XHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHRcdC5vbignYmx1cicsIGZ1bmN0aW9uKGUpIHtcclxuXHRcdFx0XHRcdFx0XHQkKHRoaXMpLmNsb3Nlc3QoJ2xpJykucmVtb3ZlQ2xhc3MoJ3RhcHBlZCcpO1xyXG5cdFx0XHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQvLyBDb2xsYXBzZSBOYXZcclxuXHRcdFx0XHQkaGVhZGVyLmZpbmQoJ1tkYXRhLWNvbGxhcHNlLW5hdl0nKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XHJcblx0XHRcdFx0XHQkKHRoaXMpLnBhcmVudHMoJy5jb2xsYXBzZScpLnJlbW92ZUNsYXNzKCdpbicpO1xyXG5cdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0XHQvLyBBbmNob3JzIFBvc2l0aW9uXHJcblx0XHRcdFx0JCgnW2RhdGEtaGFzaF0nKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG5cclxuXHRcdFx0XHRcdHZhciB0YXJnZXQgPSAkKHRoaXMpLmF0dHIoJ2hyZWYnKSxcclxuXHRcdFx0XHRcdFx0b2Zmc2V0ID0gKCQodGhpcykuaXMoXCJbZGF0YS1oYXNoLW9mZnNldF1cIikgPyAkKHRoaXMpLmRhdGEoJ2hhc2gtb2Zmc2V0JykgOiAwKTtcclxuXHJcblx0XHRcdFx0XHRpZigkKHRhcmdldCkuZ2V0KDApKSB7XHJcblx0XHRcdFx0XHRcdCQodGhpcykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xyXG5cdFx0XHRcdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcblx0XHRcdFx0XHRcdFx0Ly8gQ2xvc2UgQ29sbGFwc2UgaWYgT3BlbmVkXHJcblx0XHRcdFx0XHRcdFx0JCh0aGlzKS5wYXJlbnRzKCcuY29sbGFwc2UuaW4nKS5yZW1vdmVDbGFzcygnaW4nKTtcclxuXHJcblx0XHRcdFx0XHRcdFx0c2VsZi5zY3JvbGxUb1RhcmdldCh0YXJnZXQsIG9mZnNldCk7XHJcblxyXG5cdFx0XHRcdFx0XHRcdHJldHVybjtcclxuXHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0XHRyZXR1cm4gdGhpcztcclxuXHRcdFx0fSxcclxuXHJcblx0XHRcdHNjcm9sbFRvVGFyZ2V0OiBmdW5jdGlvbih0YXJnZXQsIG9mZnNldCkge1xyXG5cdFx0XHRcdHZhciBzZWxmID0gdGhpcztcclxuXHJcblx0XHRcdFx0JCgnYm9keScpLmFkZENsYXNzKCdzY3JvbGxpbmcnKTtcclxuXHJcblx0XHRcdFx0JCgnaHRtbCwgYm9keScpLmFuaW1hdGUoe1xyXG5cdFx0XHRcdFx0c2Nyb2xsVG9wOiAkKHRhcmdldCkub2Zmc2V0KCkudG9wIC0gb2Zmc2V0XHJcblx0XHRcdFx0fSwgc2VsZi5vcHRpb25zLnNjcm9sbERlbGF5LCBzZWxmLm9wdGlvbnMuc2Nyb2xsQW5pbWF0aW9uLCBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdCQoJ2JvZHknKS5yZW1vdmVDbGFzcygnc2Nyb2xsaW5nJyk7XHJcblx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHRcdHJldHVybiB0aGlzO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdH1cclxuXHJcblx0fSk7XHJcblxyXG59KS5hcHBseSh0aGlzLCBbd2luZG93LnRoZW1lLCBqUXVlcnldKTtcclxuXHJcbi8vIGlvc1N3aXRjaGVyXHJcbihmdW5jdGlvbih0aGVtZSwgJCkge1xyXG5cclxuXHR0aGVtZSA9IHRoZW1lIHx8IHt9O1xyXG5cclxuXHR2YXIgaW5zdGFuY2VOYW1lID0gJ19fSU9TN1N3aXRjaCc7XHJcblxyXG5cdHZhciBQbHVnaW5JT1M3U3dpdGNoID0gZnVuY3Rpb24oJGVsKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5pbml0aWFsaXplKCRlbCk7XHJcblx0fTtcclxuXHJcblx0UGx1Z2luSU9TN1N3aXRjaC5wcm90b3R5cGUgPSB7XHJcblx0XHRpbml0aWFsaXplOiBmdW5jdGlvbigkZWwpIHtcclxuXHRcdFx0aWYgKCAkZWwuZGF0YSggaW5zdGFuY2VOYW1lICkgKSB7XHJcblx0XHRcdFx0cmV0dXJuIHRoaXM7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHRoaXMuJGVsID0gJGVsO1xyXG5cclxuXHRcdFx0dGhpc1xyXG5cdFx0XHRcdC5zZXREYXRhKClcclxuXHRcdFx0XHQuYnVpbGQoKTtcclxuXHJcblx0XHRcdHJldHVybiB0aGlzO1xyXG5cdFx0fSxcclxuXHJcblx0XHRzZXREYXRhOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0dGhpcy4kZWwuZGF0YShpbnN0YW5jZU5hbWUsIHRoaXMpO1xyXG5cclxuXHRcdFx0cmV0dXJuIHRoaXM7XHJcblx0XHR9LFxyXG5cclxuXHRcdGJ1aWxkOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0dmFyIHN3aXRjaGVyID0gbmV3IFN3aXRjaCggdGhpcy4kZWwuZ2V0KDApICk7XHJcblxyXG5cdFx0XHQkKCBzd2l0Y2hlci5lbCApLm9uKCAnY2xpY2snLCBmdW5jdGlvbiggZSApIHtcclxuXHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRcdFx0c3dpdGNoZXIudG9nZ2xlKCk7XHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0cmV0dXJuIHRoaXM7XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblx0Ly8gZXhwb3NlIHRvIHNjb3BlXHJcblx0JC5leHRlbmQodGhlbWUsIHtcclxuXHRcdFBsdWdpbklPUzdTd2l0Y2g6IFBsdWdpbklPUzdTd2l0Y2hcclxuXHR9KTtcclxuXHJcblx0Ly8ganF1ZXJ5IHBsdWdpblxyXG5cdCQuZm4udGhlbWVQbHVnaW5JT1M3U3dpdGNoID0gZnVuY3Rpb24ob3B0cykge1xyXG5cdFx0cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpIHtcclxuXHRcdFx0dmFyICR0aGlzID0gJCh0aGlzKTtcclxuXHJcblx0XHRcdGlmICgkdGhpcy5kYXRhKGluc3RhbmNlTmFtZSkpIHtcclxuXHRcdFx0XHRyZXR1cm4gJHRoaXMuZGF0YShpbnN0YW5jZU5hbWUpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHJldHVybiBuZXcgUGx1Z2luSU9TN1N3aXRjaCgkdGhpcyk7XHJcblx0XHRcdH1cclxuXHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG59KS5hcHBseSh0aGlzLCBbd2luZG93LnRoZW1lLCBqUXVlcnldKTtcclxuXHJcbi8vIEZvcm0gdG8gT2JqZWN0XHJcbihmdW5jdGlvbigkKSB7XHJcblxyXG5cdCd1c2Ugc3RyaWN0JztcclxuXHJcblx0JC5mbi5mb3JtVG9PYmplY3QgPSBmdW5jdGlvbigpIHtcclxuXHRcdHZhciBhcnJheURhdGEsXHJcblx0XHRcdG9iamVjdERhdGE7XHJcblxyXG5cdFx0YXJyYXlEYXRhXHQ9IHRoaXMuc2VyaWFsaXplQXJyYXkoKTtcclxuXHRcdG9iamVjdERhdGFcdD0ge307XHJcblxyXG5cdFx0JC5lYWNoKCBhcnJheURhdGEsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHR2YXIgdmFsdWU7XHJcblxyXG5cdFx0XHRpZiAodGhpcy52YWx1ZSAhPSBudWxsKSB7XHJcblx0XHRcdFx0dmFsdWUgPSB0aGlzLnZhbHVlO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHZhbHVlID0gJyc7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmIChvYmplY3REYXRhW3RoaXMubmFtZV0gIT0gbnVsbCkge1xyXG5cdFx0XHRcdGlmICghb2JqZWN0RGF0YVt0aGlzLm5hbWVdLnB1c2gpIHtcclxuXHRcdFx0XHRcdG9iamVjdERhdGFbdGhpcy5uYW1lXSA9IFtvYmplY3REYXRhW3RoaXMubmFtZV1dO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0b2JqZWN0RGF0YVt0aGlzLm5hbWVdLnB1c2godmFsdWUpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdG9iamVjdERhdGFbdGhpcy5uYW1lXSA9IHZhbHVlO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHJcblx0XHRyZXR1cm4gb2JqZWN0RGF0YTtcclxuXHR9O1xyXG5cclxufSkoalF1ZXJ5KTtcclxuXHJcbi8vIExpZ2h0Ym94XHJcbihmdW5jdGlvbih0aGVtZSwgJCkge1xyXG5cclxuXHR0aGVtZSA9IHRoZW1lIHx8IHt9O1xyXG5cclxuXHR2YXIgaW5zdGFuY2VOYW1lID0gJ19fbGlnaHRib3gnO1xyXG5cclxuXHR2YXIgUGx1Z2luTGlnaHRib3ggPSBmdW5jdGlvbigkZWwsIG9wdHMpIHtcclxuXHRcdHJldHVybiB0aGlzLmluaXRpYWxpemUoJGVsLCBvcHRzKTtcclxuXHR9O1xyXG5cclxuXHRQbHVnaW5MaWdodGJveC5kZWZhdWx0cyA9IHtcclxuXHRcdHRDbG9zZTogJ0Nsb3NlIChFc2MpJywgLy8gQWx0IHRleHQgb24gY2xvc2UgYnV0dG9uXHJcblx0XHR0TG9hZGluZzogJ0xvYWRpbmcuLi4nLCAvLyBUZXh0IHRoYXQgaXMgZGlzcGxheWVkIGR1cmluZyBsb2FkaW5nLiBDYW4gY29udGFpbiAlY3VyciUgYW5kICV0b3RhbCUga2V5c1xyXG5cdFx0Z2FsbGVyeToge1xyXG5cdFx0XHR0UHJldjogJ1ByZXZpb3VzIChMZWZ0IGFycm93IGtleSknLCAvLyBBbHQgdGV4dCBvbiBsZWZ0IGFycm93XHJcblx0XHRcdHROZXh0OiAnTmV4dCAoUmlnaHQgYXJyb3cga2V5KScsIC8vIEFsdCB0ZXh0IG9uIHJpZ2h0IGFycm93XHJcblx0XHRcdHRDb3VudGVyOiAnJWN1cnIlIG9mICV0b3RhbCUnIC8vIE1hcmt1cCBmb3IgXCIxIG9mIDdcIiBjb3VudGVyXHJcblx0XHR9LFxyXG5cdFx0aW1hZ2U6IHtcclxuXHRcdFx0dEVycm9yOiAnPGEgaHJlZj1cIiV1cmwlXCI+VGhlIGltYWdlPC9hPiBjb3VsZCBub3QgYmUgbG9hZGVkLicgLy8gRXJyb3IgbWVzc2FnZSB3aGVuIGltYWdlIGNvdWxkIG5vdCBiZSBsb2FkZWRcclxuXHRcdH0sXHJcblx0XHRhamF4OiB7XHJcblx0XHRcdHRFcnJvcjogJzxhIGhyZWY9XCIldXJsJVwiPlRoZSBjb250ZW50PC9hPiBjb3VsZCBub3QgYmUgbG9hZGVkLicgLy8gRXJyb3IgbWVzc2FnZSB3aGVuIGFqYXggcmVxdWVzdCBmYWlsZWRcclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHRQbHVnaW5MaWdodGJveC5wcm90b3R5cGUgPSB7XHJcblx0XHRpbml0aWFsaXplOiBmdW5jdGlvbigkZWwsIG9wdHMpIHtcclxuXHRcdFx0aWYgKCAkZWwuZGF0YSggaW5zdGFuY2VOYW1lICkgKSB7XHJcblx0XHRcdFx0cmV0dXJuIHRoaXM7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHRoaXMuJGVsID0gJGVsO1xyXG5cclxuXHRcdFx0dGhpc1xyXG5cdFx0XHRcdC5zZXREYXRhKClcclxuXHRcdFx0XHQuc2V0T3B0aW9ucyhvcHRzKVxyXG5cdFx0XHRcdC5idWlsZCgpO1xyXG5cclxuXHRcdFx0cmV0dXJuIHRoaXM7XHJcblx0XHR9LFxyXG5cclxuXHRcdHNldERhdGE6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHR0aGlzLiRlbC5kYXRhKGluc3RhbmNlTmFtZSwgdGhpcyk7XHJcblxyXG5cdFx0XHRyZXR1cm4gdGhpcztcclxuXHRcdH0sXHJcblxyXG5cdFx0c2V0T3B0aW9uczogZnVuY3Rpb24ob3B0cykge1xyXG5cdFx0XHR0aGlzLm9wdGlvbnMgPSAkLmV4dGVuZCh0cnVlLCB7fSwgUGx1Z2luTGlnaHRib3guZGVmYXVsdHMsIG9wdHMsIHtcclxuXHRcdFx0XHR3cmFwcGVyOiB0aGlzLiRlbFxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdHJldHVybiB0aGlzO1xyXG5cdFx0fSxcclxuXHJcblx0XHRidWlsZDogZnVuY3Rpb24oKSB7XHJcblx0XHRcdHRoaXMub3B0aW9ucy53cmFwcGVyLm1hZ25pZmljUG9wdXAodGhpcy5vcHRpb25zKTtcclxuXHJcblx0XHRcdHJldHVybiB0aGlzO1xyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdC8vIGV4cG9zZSB0byBzY29wZVxyXG5cdCQuZXh0ZW5kKHRoZW1lLCB7XHJcblx0XHRQbHVnaW5MaWdodGJveDogUGx1Z2luTGlnaHRib3hcclxuXHR9KTtcclxuXHJcblx0Ly8ganF1ZXJ5IHBsdWdpblxyXG5cdCQuZm4udGhlbWVQbHVnaW5MaWdodGJveCA9IGZ1bmN0aW9uKG9wdHMpIHtcclxuXHRcdHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKSB7XHJcblx0XHRcdHZhciAkdGhpcyA9ICQodGhpcyk7XHJcblxyXG5cdFx0XHRpZiAoJHRoaXMuZGF0YShpbnN0YW5jZU5hbWUpKSB7XHJcblx0XHRcdFx0cmV0dXJuICR0aGlzLmRhdGEoaW5zdGFuY2VOYW1lKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRyZXR1cm4gbmV3IFBsdWdpbkxpZ2h0Ym94KCR0aGlzLCBvcHRzKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcbn0pLmFwcGx5KHRoaXMsIFt3aW5kb3cudGhlbWUsIGpRdWVyeV0pO1xyXG5cclxuLy8gTG9hZGluZyBPdmVybGF5XHJcbihmdW5jdGlvbih0aGVtZSwgJCkge1xyXG5cclxuXHQndXNlIHN0cmljdCc7XHJcblxyXG5cdHRoZW1lID0gdGhlbWUgfHwge307XHJcblxyXG5cdHZhciBsb2FkaW5nT3ZlcmxheVRlbXBsYXRlID0gW1xyXG5cdFx0JzxkaXYgY2xhc3M9XCJsb2FkaW5nLW92ZXJsYXlcIj4nLFxyXG5cdFx0XHQnPGRpdiBjbGFzcz1cImJvdW5jZS1sb2FkZXJcIj48ZGl2IGNsYXNzPVwiYm91bmNlMVwiPjwvZGl2PjxkaXYgY2xhc3M9XCJib3VuY2UyXCI+PC9kaXY+PGRpdiBjbGFzcz1cImJvdW5jZTNcIj48L2Rpdj48L2Rpdj4nLFxyXG5cdFx0JzwvZGl2PidcclxuXHRdLmpvaW4oJycpO1xyXG5cclxuXHR2YXIgTG9hZGluZ092ZXJsYXkgPSBmdW5jdGlvbiggJHdyYXBwZXIsIG9wdGlvbnMgKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5pbml0aWFsaXplKCAkd3JhcHBlciwgb3B0aW9ucyApO1xyXG5cdH07XHJcblxyXG5cdExvYWRpbmdPdmVybGF5LnByb3RvdHlwZSA9IHtcclxuXHJcblx0XHRvcHRpb25zOiB7XHJcblx0XHRcdGNzczoge31cclxuXHRcdH0sXHJcblxyXG5cdFx0aW5pdGlhbGl6ZTogZnVuY3Rpb24oICR3cmFwcGVyLCBvcHRpb25zICkge1xyXG5cdFx0XHR0aGlzLiR3cmFwcGVyID0gJHdyYXBwZXI7XHJcblxyXG5cdFx0XHR0aGlzXHJcblx0XHRcdFx0LnNldFZhcnMoKVxyXG5cdFx0XHRcdC5zZXRPcHRpb25zKCBvcHRpb25zIClcclxuXHRcdFx0XHQuYnVpbGQoKVxyXG5cdFx0XHRcdC5ldmVudHMoKTtcclxuXHJcblx0XHRcdHRoaXMuJHdyYXBwZXIuZGF0YSggJ2xvYWRpbmdPdmVybGF5JywgdGhpcyApO1xyXG5cdFx0fSxcclxuXHJcblx0XHRzZXRWYXJzOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0dGhpcy4kb3ZlcmxheSA9IHRoaXMuJHdyYXBwZXIuZmluZCgnLmxvYWRpbmctb3ZlcmxheScpO1xyXG5cclxuXHRcdFx0cmV0dXJuIHRoaXM7XHJcblx0XHR9LFxyXG5cclxuXHRcdHNldE9wdGlvbnM6IGZ1bmN0aW9uKCBvcHRpb25zICkge1xyXG5cdFx0XHRpZiAoICF0aGlzLiRvdmVybGF5LmdldCgwKSApIHtcclxuXHRcdFx0XHR0aGlzLm1hdGNoUHJvcGVydGllcygpO1xyXG5cdFx0XHR9XHJcblx0XHRcdHRoaXMub3B0aW9ucyAgICAgPSAkLmV4dGVuZCggdHJ1ZSwge30sIHRoaXMub3B0aW9ucywgb3B0aW9ucyApO1xyXG5cdFx0XHR0aGlzLmxvYWRlckNsYXNzID0gdGhpcy5nZXRMb2FkZXJDbGFzcyggdGhpcy5vcHRpb25zLmNzcy5iYWNrZ3JvdW5kQ29sb3IgKTtcclxuXHJcblx0XHRcdHJldHVybiB0aGlzO1xyXG5cdFx0fSxcclxuXHJcblx0XHRidWlsZDogZnVuY3Rpb24oKSB7XHJcblx0XHRcdGlmICggIXRoaXMuJG92ZXJsYXkuY2xvc2VzdChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpLmdldCgwKSApIHtcclxuXHRcdFx0XHRpZiAoICF0aGlzLiRjYWNoZWRPdmVybGF5ICkge1xyXG5cdFx0XHRcdFx0dGhpcy4kb3ZlcmxheSA9ICQoIGxvYWRpbmdPdmVybGF5VGVtcGxhdGUgKS5jbG9uZSgpO1xyXG5cclxuXHRcdFx0XHRcdGlmICggdGhpcy5vcHRpb25zLmNzcyApIHtcclxuXHRcdFx0XHRcdFx0dGhpcy4kb3ZlcmxheS5jc3MoIHRoaXMub3B0aW9ucy5jc3MgKTtcclxuXHRcdFx0XHRcdFx0dGhpcy4kb3ZlcmxheS5maW5kKCAnLmxvYWRlcicgKS5hZGRDbGFzcyggdGhpcy5sb2FkZXJDbGFzcyApO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHR0aGlzLiRvdmVybGF5ID0gdGhpcy4kY2FjaGVkT3ZlcmxheS5jbG9uZSgpO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0dGhpcy4kd3JhcHBlci5hcHBlbmQoIHRoaXMuJG92ZXJsYXkgKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYgKCAhdGhpcy4kY2FjaGVkT3ZlcmxheSApIHtcclxuXHRcdFx0XHR0aGlzLiRjYWNoZWRPdmVybGF5ID0gdGhpcy4kb3ZlcmxheS5jbG9uZSgpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRyZXR1cm4gdGhpcztcclxuXHRcdH0sXHJcblxyXG5cdFx0ZXZlbnRzOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0dmFyIF9zZWxmID0gdGhpcztcclxuXHJcblx0XHRcdGlmICggdGhpcy5vcHRpb25zLnN0YXJ0U2hvd2luZyApIHtcclxuXHRcdFx0XHRfc2VsZi5zaG93KCk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmICggdGhpcy4kd3JhcHBlci5pcygnYm9keScpIHx8IHRoaXMub3B0aW9ucy5oaWRlT25XaW5kb3dMb2FkICkge1xyXG5cdFx0XHRcdCQoIHdpbmRvdyApLm9uKCAnbG9hZCBlcnJvcicsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0X3NlbGYuaGlkZSgpO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZiAoIHRoaXMub3B0aW9ucy5saXN0ZW5PbiApIHtcclxuXHRcdFx0XHQkKCB0aGlzLm9wdGlvbnMubGlzdGVuT24gKVxyXG5cdFx0XHRcdFx0Lm9uKCAnbG9hZGluZy1vdmVybGF5OnNob3cgYmVmb3JlU2VuZC5pYycsIGZ1bmN0aW9uKCBlICkge1xyXG5cdFx0XHRcdFx0XHRlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cdFx0XHRcdFx0XHRfc2VsZi5zaG93KCk7XHJcblx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0Lm9uKCAnbG9hZGluZy1vdmVybGF5OmhpZGUgY29tcGxldGUuaWMnLCBmdW5jdGlvbiggZSApIHtcclxuXHRcdFx0XHRcdFx0ZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHRcdFx0XHRcdFx0X3NlbGYuaGlkZSgpO1xyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHRoaXMuJHdyYXBwZXJcclxuXHRcdFx0XHQub24oICdsb2FkaW5nLW92ZXJsYXk6c2hvdyBiZWZvcmVTZW5kLmljJywgZnVuY3Rpb24oIGUgKSB7XHJcblx0XHRcdFx0XHRpZiAoIGUudGFyZ2V0ID09PSBfc2VsZi4kd3JhcHBlci5nZXQoMCkgKSB7XHJcblx0XHRcdFx0XHRcdGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblx0XHRcdFx0XHRcdF9zZWxmLnNob3coKTtcclxuXHRcdFx0XHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHRcdFx0fSlcclxuXHRcdFx0XHQub24oICdsb2FkaW5nLW92ZXJsYXk6aGlkZSBjb21wbGV0ZS5pYycsIGZ1bmN0aW9uKCBlICkge1xyXG5cdFx0XHRcdFx0aWYgKCBlLnRhcmdldCA9PT0gX3NlbGYuJHdyYXBwZXIuZ2V0KDApICkge1xyXG5cdFx0XHRcdFx0XHRlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cdFx0XHRcdFx0XHRfc2VsZi5oaWRlKCk7XHJcblx0XHRcdFx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0cmV0dXJuIHRoaXM7XHJcblx0XHR9LFxyXG5cclxuXHRcdHNob3c6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHR0aGlzLmJ1aWxkKCk7XHJcblxyXG5cdFx0XHR0aGlzLnBvc2l0aW9uID0gdGhpcy4kd3JhcHBlci5jc3MoICdwb3NpdGlvbicgKS50b0xvd2VyQ2FzZSgpO1xyXG5cdFx0XHRpZiAoIHRoaXMucG9zaXRpb24gIT0gJ3JlbGF0aXZlJyB8fCB0aGlzLnBvc2l0aW9uICE9ICdhYnNvbHV0ZScgfHwgdGhpcy5wb3NpdGlvbiAhPSAnZml4ZWQnICkge1xyXG5cdFx0XHRcdHRoaXMuJHdyYXBwZXIuY3NzKHtcclxuXHRcdFx0XHRcdHBvc2l0aW9uOiAncmVsYXRpdmUnXHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH1cclxuXHRcdFx0dGhpcy4kd3JhcHBlci5hZGRDbGFzcyggJ2xvYWRpbmctb3ZlcmxheS1zaG93aW5nJyApO1xyXG5cdFx0fSxcclxuXHJcblx0XHRoaWRlOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0dmFyIF9zZWxmID0gdGhpcztcclxuXHJcblx0XHRcdHRoaXMuJHdyYXBwZXIucmVtb3ZlQ2xhc3MoICdsb2FkaW5nLW92ZXJsYXktc2hvd2luZycgKTtcclxuXHRcdFx0c2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRpZiAoIHRoaXMucG9zaXRpb24gIT0gJ3JlbGF0aXZlJyB8fCB0aGlzLnBvc2l0aW9uICE9ICdhYnNvbHV0ZScgfHwgdGhpcy5wb3NpdGlvbiAhPSAnZml4ZWQnICkge1xyXG5cdFx0XHRcdFx0X3NlbGYuJHdyYXBwZXIuY3NzKHsgcG9zaXRpb246ICcnIH0pO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSwgNTAwKTtcclxuXHRcdH0sXHJcblxyXG5cdFx0bWF0Y2hQcm9wZXJ0aWVzOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0dmFyIGksXHJcblx0XHRcdFx0bCxcclxuXHRcdFx0XHRwcm9wZXJ0aWVzO1xyXG5cclxuXHRcdFx0cHJvcGVydGllcyA9IFtcclxuXHRcdFx0XHQnYmFja2dyb3VuZENvbG9yJyxcclxuXHRcdFx0XHQnYm9yZGVyUmFkaXVzJ1xyXG5cdFx0XHRdO1xyXG5cclxuXHRcdFx0bCA9IHByb3BlcnRpZXMubGVuZ3RoO1xyXG5cclxuXHRcdFx0Zm9yKCBpID0gMDsgaSA8IGw7IGkrKyApIHtcclxuXHRcdFx0XHR2YXIgb2JqID0ge307XHJcblx0XHRcdFx0b2JqWyBwcm9wZXJ0aWVzWyBpIF0gXSA9IHRoaXMuJHdyYXBwZXIuY3NzKCBwcm9wZXJ0aWVzWyBpIF0gKTtcclxuXHJcblx0XHRcdFx0JC5leHRlbmQoIHRoaXMub3B0aW9ucy5jc3MsIG9iaiApO1xyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cclxuXHRcdGdldExvYWRlckNsYXNzOiBmdW5jdGlvbiggYmFja2dyb3VuZENvbG9yICkge1xyXG5cdFx0XHRpZiAoICFiYWNrZ3JvdW5kQ29sb3IgfHwgYmFja2dyb3VuZENvbG9yID09PSAndHJhbnNwYXJlbnQnIHx8IGJhY2tncm91bmRDb2xvciA9PT0gJ2luaGVyaXQnICkge1xyXG5cdFx0XHRcdHJldHVybiAnYmxhY2snO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHR2YXIgaGV4Q29sb3IsXHJcblx0XHRcdFx0cixcclxuXHRcdFx0XHRnLFxyXG5cdFx0XHRcdGIsXHJcblx0XHRcdFx0eWlxO1xyXG5cclxuXHRcdFx0dmFyIGNvbG9yVG9IZXggPSBmdW5jdGlvbiggY29sb3IgKXtcclxuXHRcdFx0XHR2YXIgaGV4LFxyXG5cdFx0XHRcdFx0cmdiO1xyXG5cclxuXHRcdFx0XHRpZiggY29sb3IuaW5kZXhPZignIycpID4tIDEgKXtcclxuXHRcdFx0XHRcdGhleCA9IGNvbG9yLnJlcGxhY2UoJyMnLCAnJyk7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdHJnYiA9IGNvbG9yLm1hdGNoKC9cXGQrL2cpO1xyXG5cdFx0XHRcdFx0aGV4ID0gKCcwJyArIHBhcnNlSW50KHJnYlswXSwgMTApLnRvU3RyaW5nKDE2KSkuc2xpY2UoLTIpICsgKCcwJyArIHBhcnNlSW50KHJnYlsxXSwgMTApLnRvU3RyaW5nKDE2KSkuc2xpY2UoLTIpICsgKCcwJyArIHBhcnNlSW50KHJnYlsyXSwgMTApLnRvU3RyaW5nKDE2KSkuc2xpY2UoLTIpO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0aWYgKCBoZXgubGVuZ3RoID09PSAzICkge1xyXG5cdFx0XHRcdFx0aGV4ID0gaGV4ICsgaGV4O1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0cmV0dXJuIGhleDtcclxuXHRcdFx0fTtcclxuXHJcblx0XHRcdGhleENvbG9yID0gY29sb3JUb0hleCggYmFja2dyb3VuZENvbG9yICk7XHJcblxyXG5cdFx0XHRyID0gcGFyc2VJbnQoIGhleENvbG9yLnN1YnN0ciggMCwgMiksIDE2ICk7XHJcblx0XHRcdGcgPSBwYXJzZUludCggaGV4Q29sb3Iuc3Vic3RyKCAyLCAyKSwgMTYgKTtcclxuXHRcdFx0YiA9IHBhcnNlSW50KCBoZXhDb2xvci5zdWJzdHIoIDQsIDIpLCAxNiApO1xyXG5cdFx0XHR5aXEgPSAoKHIgKiAyOTkpICsgKGcgKiA1ODcpICsgKGIgKiAxMTQpKSAvIDEwMDA7XHJcblxyXG5cdFx0XHRyZXR1cm4gKCB5aXEgPj0gMTI4ICkgPyAnYmxhY2snIDogJ3doaXRlJztcclxuXHRcdH1cclxuXHJcblx0fTtcclxuXHJcblx0Ly8gZXhwb3NlIHRvIHNjb3BlXHJcblx0JC5leHRlbmQodGhlbWUsIHtcclxuXHRcdExvYWRpbmdPdmVybGF5OiBMb2FkaW5nT3ZlcmxheVxyXG5cdH0pO1xyXG5cclxuXHQvLyBleHBvc2UgYXMgYSBqcXVlcnkgcGx1Z2luXHJcblx0JC5mbi5sb2FkaW5nT3ZlcmxheSA9IGZ1bmN0aW9uKCBvcHRzICkge1xyXG5cdFx0cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpIHtcclxuXHRcdFx0dmFyICR0aGlzID0gJCggdGhpcyApO1xyXG5cclxuXHRcdFx0dmFyIGxvYWRpbmdPdmVybGF5ID0gJHRoaXMuZGF0YSggJ2xvYWRpbmdPdmVybGF5JyApO1xyXG5cdFx0XHRpZiAoIGxvYWRpbmdPdmVybGF5ICkge1xyXG5cdFx0XHRcdHJldHVybiBsb2FkaW5nT3ZlcmxheTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHR2YXIgb3B0aW9ucyA9IG9wdHMgfHwgJHRoaXMuZGF0YSggJ2xvYWRpbmctb3ZlcmxheS1vcHRpb25zJyApIHx8IHt9O1xyXG5cdFx0XHRcdHJldHVybiBuZXcgTG9hZGluZ092ZXJsYXkoICR0aGlzLCBvcHRpb25zICk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0Ly8gYXV0byBpbml0XHJcblx0JCgnW2RhdGEtbG9hZGluZy1vdmVybGF5XScpLmxvYWRpbmdPdmVybGF5KCk7XHJcblxyXG59KS5hcHBseSh0aGlzLCBbd2luZG93LnRoZW1lLCBqUXVlcnldKTtcclxuXHJcbi8vIExvY2sgU2NyZWVuXHJcbihmdW5jdGlvbigkKSB7XHJcblxyXG5cdCd1c2Ugc3RyaWN0JztcclxuXHJcblx0dmFyIExvY2tTY3JlZW4gPSB7XHJcblxyXG5cdFx0aW5pdGlhbGl6ZTogZnVuY3Rpb24oKSB7XHJcblx0XHRcdHRoaXMuJGJvZHkgPSAkKCAnYm9keScgKTtcclxuXHJcblx0XHRcdHRoaXNcclxuXHRcdFx0XHQuYnVpbGQoKVxyXG5cdFx0XHRcdC5ldmVudHMoKTtcclxuXHRcdH0sXHJcblxyXG5cdFx0YnVpbGQ6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHR2YXIgbG9ja0hUTUwsXHJcblx0XHRcdFx0dXNlcmluZm87XHJcblxyXG5cdFx0XHR1c2VyaW5mbyA9IHRoaXMuZ2V0VXNlckluZm8oKTtcclxuXHRcdFx0dGhpcy5sb2NrSFRNTCA9IHRoaXMuYnVpbGRUZW1wbGF0ZSggdXNlcmluZm8gKTtcclxuXHJcblx0XHRcdHRoaXMuJGxvY2sgICAgICAgID0gdGhpcy4kYm9keS5jaGlsZHJlbiggJyNMb2NrU2NyZWVuSW5saW5lJyApO1xyXG5cdFx0XHR0aGlzLiR1c2VyUGljdHVyZSA9IHRoaXMuJGxvY2suZmluZCggJyNMb2NrVXNlclBpY3R1cmUnICk7XHJcblx0XHRcdHRoaXMuJHVzZXJOYW1lICAgID0gdGhpcy4kbG9jay5maW5kKCAnI0xvY2tVc2VyTmFtZScgKTtcclxuXHRcdFx0dGhpcy4kdXNlckVtYWlsICAgPSB0aGlzLiRsb2NrLmZpbmQoICcjTG9ja1VzZXJFbWFpbCcgKTtcclxuXHJcblx0XHRcdHJldHVybiB0aGlzO1xyXG5cdFx0fSxcclxuXHJcblx0XHRldmVudHM6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHR2YXIgX3NlbGYgPSB0aGlzO1xyXG5cclxuXHRcdFx0dGhpcy4kYm9keS5maW5kKCAnW2RhdGEtbG9jay1zY3JlZW49XCJ0cnVlXCJdJyApLm9uKCAnY2xpY2snLCBmdW5jdGlvbiggZSApIHtcclxuXHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG5cdFx0XHRcdF9zZWxmLnNob3coKTtcclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0XHRyZXR1cm4gdGhpcztcclxuXHRcdH0sXHJcblxyXG5cdFx0Zm9ybUV2ZW50czogZnVuY3Rpb24oICRmb3JtICkge1xyXG5cdFx0XHR2YXIgX3NlbGYgPSB0aGlzO1xyXG5cclxuXHRcdFx0JGZvcm0ub24oICdzdWJtaXQnLCBmdW5jdGlvbiggZSApIHtcclxuXHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG5cdFx0XHRcdF9zZWxmLmhpZGUoKTtcclxuXHRcdFx0fSk7XHJcblx0XHR9LFxyXG5cclxuXHRcdHNob3c6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHR2YXIgX3NlbGYgPSB0aGlzLFxyXG5cdFx0XHRcdHVzZXJpbmZvID0gdGhpcy5nZXRVc2VySW5mbygpO1xyXG5cclxuXHRcdFx0dGhpcy4kdXNlclBpY3R1cmUuYXR0ciggJ3NyYycsIHVzZXJpbmZvLnBpY3R1cmUgKTtcclxuXHRcdFx0dGhpcy4kdXNlck5hbWUudGV4dCggdXNlcmluZm8udXNlcm5hbWUgKTtcclxuXHRcdFx0dGhpcy4kdXNlckVtYWlsLnRleHQoIHVzZXJpbmZvLmVtYWlsICk7XHJcblxyXG5cdFx0XHR0aGlzLiRib2R5LmFkZENsYXNzKCAnc2hvdy1sb2NrLXNjcmVlbicgKTtcclxuXHJcblx0XHRcdCQubWFnbmlmaWNQb3B1cC5vcGVuKHtcclxuXHRcdFx0XHRpdGVtczoge1xyXG5cdFx0XHRcdFx0c3JjOiB0aGlzLmxvY2tIVE1MLFxyXG5cdFx0XHRcdFx0dHlwZTogJ2lubGluZSdcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdG1vZGFsOiB0cnVlLFxyXG5cdFx0XHRcdG1haW5DbGFzczogJ21mcC1sb2NrLXNjcmVlbicsXHJcblx0XHRcdFx0Y2FsbGJhY2tzOiB7XHJcblx0XHRcdFx0XHRjaGFuZ2U6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0XHRfc2VsZi5mb3JtRXZlbnRzKCB0aGlzLmNvbnRlbnQuZmluZCggJ2Zvcm0nICkgKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cdFx0fSxcclxuXHJcblx0XHRoaWRlOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0JC5tYWduaWZpY1BvcHVwLmNsb3NlKCk7XHJcblx0XHR9LFxyXG5cclxuXHRcdGdldFVzZXJJbmZvOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0dmFyICRpbmZvLFxyXG5cdFx0XHRcdHBpY3R1cmUsXHJcblx0XHRcdFx0bmFtZSxcclxuXHRcdFx0XHRlbWFpbDtcclxuXHJcblx0XHRcdC8vIGFsd2F5cyBzZWFyY2ggaW4gY2FzZSBzb21ldGhpbmcgaXMgY2hhbmdlZCB0aHJvdWdoIGFqYXhcclxuXHRcdFx0JGluZm8gICAgPSAkKCAnI3VzZXJib3gnICk7XHJcblx0XHRcdHBpY3R1cmUgID0gJGluZm8uZmluZCggJy5wcm9maWxlLXBpY3R1cmUgaW1nJyApLmF0dHIoICdkYXRhLWxvY2stcGljdHVyZScgKTtcclxuXHRcdFx0bmFtZSAgICAgPSAkaW5mby5maW5kKCAnLnByb2ZpbGUtaW5mbycgKS5hdHRyKCAnZGF0YS1sb2NrLW5hbWUnICk7XHJcblx0XHRcdGVtYWlsICAgID0gJGluZm8uZmluZCggJy5wcm9maWxlLWluZm8nICkuYXR0ciggJ2RhdGEtbG9jay1lbWFpbCcgKTtcclxuXHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0cGljdHVyZTogcGljdHVyZSxcclxuXHRcdFx0XHR1c2VybmFtZTogbmFtZSxcclxuXHRcdFx0XHRlbWFpbDogZW1haWxcclxuXHRcdFx0fTtcclxuXHRcdH0sXHJcblxyXG5cdFx0YnVpbGRUZW1wbGF0ZTogZnVuY3Rpb24oIHVzZXJpbmZvICkge1xyXG5cdFx0XHRyZXR1cm4gW1xyXG5cdFx0XHRcdFx0JzxzZWN0aW9uIGlkPVwiTG9ja1NjcmVlbklubGluZVwiIGNsYXNzPVwiYm9keS1zaWduIGJvZHktbG9ja2VkIGJvZHktbG9ja2VkLWlubGluZVwiPicsXHJcblx0XHRcdFx0XHRcdCc8ZGl2IGNsYXNzPVwiY2VudGVyLXNpZ25cIj4nLFxyXG5cdFx0XHRcdFx0XHRcdCc8ZGl2IGNsYXNzPVwicGFuZWwgY2FyZC1zaWduXCI+JyxcclxuXHRcdFx0XHRcdFx0XHRcdCc8ZGl2IGNsYXNzPVwiY2FyZC1ib2R5XCI+JyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0Jzxmb3JtPicsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0JzxkaXYgY2xhc3M9XCJjdXJyZW50LXVzZXIgdGV4dC1jZW50ZXJcIj4nLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0JzxpbWcgaWQ9XCJMb2NrVXNlclBpY3R1cmVcIiBzcmM9XCJ7e3BpY3R1cmV9fVwiIGFsdD1cIkpvaG4gRG9lXCIgY2xhc3M9XCJyb3VuZGVkLWNpcmNsZSB1c2VyLWltYWdlXCIgLz4nLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0JzxoMiBpZD1cIkxvY2tVc2VyTmFtZVwiIGNsYXNzPVwidXNlci1uYW1lIHRleHQtZGFyayBtLTBcIj57e3VzZXJuYW1lfX08L2gyPicsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQnPHAgIGlkPVwiTG9ja1VzZXJFbWFpbFwiIGNsYXNzPVwidXNlci1lbWFpbCBtLTBcIj57e2VtYWlsfX08L3A+JyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQnPC9kaXY+JyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQnPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAgbWItbGdcIj4nLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0JzxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cFwiPicsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCc8aW5wdXQgaWQ9XCJwd2RcIiBuYW1lPVwicHdkXCIgdHlwZT1cInBhc3N3b3JkXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2wgZm9ybS1jb250cm9sLWxnXCIgcGxhY2Vob2xkZXI9XCJQYXNzd29yZFwiIC8+JyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0JzxzcGFuIGNsYXNzPVwiaW5wdXQtZ3JvdXAtYXBwZW5kXCI+JyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQnPHNwYW4gY2xhc3M9XCJpbnB1dC1ncm91cC10ZXh0XCI+JyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCc8aSBjbGFzcz1cImZhcyBmYS1sb2NrXCI+PC9pPicsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Jzwvc3Bhbj4nLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQnPC9zcGFuPicsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQnPC9kaXY+JyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQnPC9kaXY+JyxcclxuXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0JzxkaXYgY2xhc3M9XCJyb3dcIj4nLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0JzxkaXYgY2xhc3M9XCJjb2wtNlwiPicsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCc8cCBjbGFzcz1cIm10LXhzIG1iLTBcIj4nLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCc8YSBocmVmPVwiI1wiPk5vdCBKb2huIERvZT88L2E+JyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0JzwvcD4nLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0JzwvZGl2PicsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQnPGRpdiBjbGFzcz1cImNvbC02XCI+JyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0JzxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5IHB1bGwtcmlnaHRcIj5VbmxvY2s8L2J1dHRvbj4nLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0JzwvZGl2PicsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0JzwvZGl2PicsXHJcblx0XHRcdFx0XHRcdFx0XHRcdCc8L2Zvcm0+JyxcclxuXHRcdFx0XHRcdFx0XHRcdCc8L2Rpdj4nLFxyXG5cdFx0XHRcdFx0XHRcdCc8L2Rpdj4nLFxyXG5cdFx0XHRcdFx0XHQnPC9kaXY+JyxcclxuXHRcdFx0XHRcdCc8L3NlY3Rpb24+J1xyXG5cdFx0XHRcdF1cclxuXHRcdFx0XHQuam9pbiggJycgKVxyXG5cdFx0XHRcdC5yZXBsYWNlKCAvXFx7XFx7cGljdHVyZVxcfVxcfS8sIHVzZXJpbmZvLnBpY3R1cmUgKVxyXG5cdFx0XHRcdC5yZXBsYWNlKCAvXFx7XFx7dXNlcm5hbWVcXH1cXH0vLCB1c2VyaW5mby51c2VybmFtZSApXHJcblx0XHRcdFx0LnJlcGxhY2UoIC9cXHtcXHtlbWFpbFxcfVxcfS8sIHVzZXJpbmZvLmVtYWlsICk7XHJcblx0XHR9XHJcblxyXG5cdH07XHJcblxyXG5cdHRoaXMuTG9ja1NjcmVlbiA9IExvY2tTY3JlZW47XHJcblxyXG5cdCQoZnVuY3Rpb24oKSB7XHJcblx0XHRMb2NrU2NyZWVuLmluaXRpYWxpemUoKTtcclxuXHR9KTtcclxuXHJcbn0pLmFwcGx5KHRoaXMsIFtqUXVlcnldKTtcclxuXHJcbi8vIE1hcCBCdWlsZGVyXHJcbihmdW5jdGlvbiggdGhlbWUsICQgKSB7XHJcblxyXG5cdCd1c2Ugc3RyaWN0JztcclxuXHJcblx0Ly8gcHJldmVudCB1bmRlZmluZWQgdmFyXHJcblx0dGhlbWUgPSB0aGVtZSB8fCB7fTtcclxuXHJcblx0Ly8gaW50ZXJuYWwgdmFyIHRvIGNoZWNrIGlmIHJlYWNoZWQgbGltaXRcclxuXHR2YXIgdGltZW91dHMgPSAwO1xyXG5cclxuXHQvLyBpbnN0YW5jZVxyXG5cdHZhciBpbnN0YW5jZU5hbWUgPSAnX19nbWFwYnVpbGRlcic7XHJcblxyXG5cdC8vIHByaXZhdGVcclxuXHR2YXIgcm91bmROdW1iZXIgPSBmdW5jdGlvbiggbnVtYmVyLCBwcmVjaXNpb24gKSB7XHJcblx0XHRpZiggcHJlY2lzaW9uIDwgMCApIHtcclxuXHRcdFx0cHJlY2lzaW9uID0gMDtcclxuXHRcdH0gZWxzZSBpZiggcHJlY2lzaW9uID4gMTAgKSB7XHJcblx0XHRcdHByZWNpc2lvbiA9IDEwO1xyXG5cdFx0fVxyXG5cdFx0dmFyIGEgPSBbIDEsIDEwLCAxMDAsIDEwMDAsIDEwMDAwLCAxMDAwMDAsIDEwMDAwMDAsIDEwMDAwMDAwLCAxMDAwMDAwMDAsIDEwMDAwMDAwMDAsIDEwMDAwMDAwMDAwIF07XHJcblxyXG5cdFx0cmV0dXJuIE1hdGgucm91bmQoIG51bWJlciAqIGFbIHByZWNpc2lvbiBdICkgLyBhWyBwcmVjaXNpb24gXTtcclxuXHR9O1xyXG5cclxuXHQvLyBkZWZpbml0aW9uXHJcblx0dmFyIEdNYXBCdWlsZGVyID0gZnVuY3Rpb24oICR3cmFwcGVyLCBvcHRzICkge1xyXG5cdFx0cmV0dXJuIHRoaXMuaW5pdGlhbGl6ZSggJHdyYXBwZXIsIG9wdHMgKTtcclxuXHR9O1xyXG5cclxuXHRHTWFwQnVpbGRlci5kZWZhdWx0cyA9IHtcclxuXHRcdG1hcFNlbGVjdG9yOiAnI2dtYXAnLFxyXG5cclxuXHRcdG1hcmtlcnM6IHtcclxuXHRcdFx0bW9kYWw6ICcjTWFya2VyTW9kYWwnLFxyXG5cdFx0XHRsaXN0OiAnI01hcmtlcnNMaXN0JyxcclxuXHRcdFx0cmVtb3ZlQWxsOiAnI01hcmtlclJlbW92ZUFsbCdcclxuXHRcdH0sXHJcblxyXG5cdFx0cHJldmlld01vZGFsOiAnI01vZGFsUHJldmlldycsXHJcblx0XHRnZXRDb2RlTW9kYWw6ICcjTW9kYWxHZXRDb2RlJyxcclxuXHJcblx0XHRtYXBPcHRpb25zOiB7XHJcblx0XHRcdGNlbnRlcjoge1xyXG5cdFx0XHRcdGxhdDogLTM4LjkwODEzMyxcclxuXHRcdFx0XHRsbmc6IC0xMy42OTI2MjhcclxuXHRcdFx0fSxcclxuXHRcdFx0cGFuQ29udHJvbDogdHJ1ZSxcclxuXHRcdFx0em9vbTogM1xyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdEdNYXBCdWlsZGVyLnByb3RvdHlwZSA9IHtcclxuXHJcblx0XHRtYXJrZXJzOiBbXSxcclxuXHJcblx0XHRpbml0aWFsaXplOiBmdW5jdGlvbiggJHdyYXBwZXIsIG9wdHMgKSB7XHJcblx0XHRcdHRoaXMuJHdyYXBwZXIgPSAkd3JhcHBlcjtcclxuXHJcblx0XHRcdHRoaXNcclxuXHRcdFx0XHQuc2V0RGF0YSgpXHJcblx0XHRcdFx0LnNldE9wdGlvbnMoIG9wdHMgKVxyXG5cdFx0XHRcdC5zZXRWYXJzKClcclxuXHRcdFx0XHQuYnVpbGQoKVxyXG5cdFx0XHRcdC5ldmVudHMoKTtcclxuXHJcblx0XHRcdHJldHVybiB0aGlzO1xyXG5cdFx0fSxcclxuXHJcblx0XHRzZXREYXRhOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0dGhpcy4kd3JhcHBlci5kYXRhKCBpbnN0YW5jZU5hbWUsIHRoaXMgKTtcclxuXHJcblx0XHRcdHJldHVybiB0aGlzO1xyXG5cdFx0fSxcclxuXHJcblx0XHRzZXRPcHRpb25zOiBmdW5jdGlvbiggb3B0cyApIHtcclxuXHRcdFx0dGhpcy5vcHRpb25zID0gJC5leHRlbmQoIHRydWUsIHt9LCBHTWFwQnVpbGRlci5kZWZhdWx0cywgb3B0cyApO1xyXG5cclxuXHRcdFx0cmV0dXJuIHRoaXM7XHJcblx0XHR9LFxyXG5cclxuXHRcdHNldFZhcnM6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHR0aGlzLiRtYXBDb250YWluZXJcdFx0PSB0aGlzLiR3cmFwcGVyLmZpbmQoIHRoaXMub3B0aW9ucy5tYXBTZWxlY3RvciApO1xyXG5cclxuXHRcdFx0dGhpcy4kcHJldmlld01vZGFsXHRcdD0gJCggdGhpcy5vcHRpb25zLnByZXZpZXdNb2RhbCApO1xyXG5cdFx0XHR0aGlzLiRnZXRDb2RlTW9kYWxcdFx0PSAkKCB0aGlzLm9wdGlvbnMuZ2V0Q29kZU1vZGFsICk7XHJcblxyXG5cdFx0XHR0aGlzLm1hcmtlclx0XHRcdFx0PSB7fTtcclxuXHRcdFx0dGhpcy5tYXJrZXIuJG1vZGFsICBcdD0gJCggdGhpcy5vcHRpb25zLm1hcmtlcnMubW9kYWwgKTtcclxuXHRcdFx0dGhpcy5tYXJrZXIuJGZvcm1cdFx0PSB0aGlzLm1hcmtlci4kbW9kYWwuZmluZCggJ2Zvcm0nICk7XHJcblx0XHRcdHRoaXMubWFya2VyLiRsaXN0XHRcdD0gJCggdGhpcy5vcHRpb25zLm1hcmtlcnMubGlzdCApO1xyXG5cdFx0XHR0aGlzLm1hcmtlci4kcmVtb3ZlQWxsXHQ9ICQoIHRoaXMub3B0aW9ucy5tYXJrZXJzLnJlbW92ZUFsbCApO1xyXG5cclxuXHRcdFx0cmV0dXJuIHRoaXM7XHJcblx0XHR9LFxyXG5cclxuXHRcdGJ1aWxkOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0dmFyIF9zZWxmID0gdGhpcztcclxuXHJcblx0XHRcdGlmICggISF3aW5kb3cuU25henp5VGhlbWVzICkge1xyXG5cdFx0XHRcdHZhciB0aGVtZU9wdHMgPSBbXTtcclxuXHJcblx0XHRcdFx0JC5lYWNoKCB3aW5kb3cuU25henp5VGhlbWVzLCBmdW5jdGlvbiggaSwgdGhlbWUgKSB7XHJcblx0XHRcdFx0XHR0aGVtZU9wdHMucHVzaCggJCgnPG9wdGlvbiB2YWx1ZT1cIicgKyB0aGVtZS5pZCArICdcIj4nICsgdGhlbWUubmFtZSArICc8L29wdGlvbj4nKS5kYXRhKCAnanNvbicsIHRoZW1lLmpzb24gKSApO1xyXG5cdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0XHR0aGlzLiR3cmFwcGVyLmZpbmQoICdbZGF0YS1idWlsZGVyLWZpZWxkPVwibWFwdGhlbWVcIl0nICkuYXBwZW5kKCB0aGVtZU9wdHMgKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0dGhpcy5nZW9jb2RlciA9IG5ldyBnb29nbGUubWFwcy5HZW9jb2RlcigpO1xyXG5cclxuXHRcdFx0Z29vZ2xlLm1hcHMuZXZlbnQuYWRkRG9tTGlzdGVuZXIoIHdpbmRvdywgJ2xvYWQnLCBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRfc2VsZi5vcHRpb25zLm1hcE9wdGlvbnMuY2VudGVyID0gbmV3IGdvb2dsZS5tYXBzLkxhdExuZyggX3NlbGYub3B0aW9ucy5tYXBPcHRpb25zLmNlbnRlci5sYXQsIF9zZWxmLm9wdGlvbnMubWFwT3B0aW9ucy5jZW50ZXIubG5nICk7XHJcblxyXG5cdFx0XHRcdF9zZWxmLm1hcCA9IG5ldyBnb29nbGUubWFwcy5NYXAoIF9zZWxmLiRtYXBDb250YWluZXIuZ2V0KDApLCBfc2VsZi5vcHRpb25zLm1hcE9wdGlvbnMgKTtcclxuXHJcblx0XHRcdFx0X3NlbGZcclxuXHRcdFx0XHRcdC51cGRhdGVDb250cm9sKCAnbGF0bG5nJyApXHJcblx0XHRcdFx0XHQudXBkYXRlQ29udHJvbCggJ3pvb21sZXZlbCcgKTtcclxuXHJcblx0XHRcdFx0X3NlbGYubWFwRXZlbnRzKCk7XHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0cmV0dXJuIHRoaXM7XHJcblx0XHR9LFxyXG5cclxuXHRcdGV2ZW50czogZnVuY3Rpb24oKSB7XHJcblx0XHRcdHZhciBfc2VsZiA9IHRoaXM7XHJcblxyXG5cdFx0XHR0aGlzLiR3cmFwcGVyLmZpbmQoICdbZGF0YS1idWlsZGVyLWZpZWxkXScgKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdHZhciAkdGhpcyA9ICQoIHRoaXMgKSxcclxuXHRcdFx0XHRcdGZpZWxkLFxyXG5cdFx0XHRcdFx0dmFsdWU7XHJcblxyXG5cdFx0XHRcdGZpZWxkID0gJHRoaXMuZGF0YSggJ2J1aWxkZXItZmllbGQnICk7XHJcblxyXG5cdFx0XHRcdCR0aGlzLm9uKCAnY2hhbmdlJywgZnVuY3Rpb24oKSB7XHJcblxyXG5cdFx0XHRcdFx0aWYgKCAkdGhpcy5pcyggJ3NlbGVjdCcgKSApIHtcclxuXHRcdFx0XHRcdFx0dmFsdWUgPSAkdGhpcy5jaGlsZHJlbiggJ29wdGlvbjpzZWxlY3RlZCcgKS52YWwoKS50b0xvd2VyQ2FzZSgpO1xyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0dmFsdWUgPSAkdGhpcy52YWwoKS50b0xvd2VyQ2FzZSgpO1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdF9zZWxmLnVwZGF0ZU1hcCggZmllbGQsIHZhbHVlICk7XHJcblx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdHRoaXMubWFya2VyLiRmb3JtLm9uKCAnc3VibWl0JywgZnVuY3Rpb24oIGUgKSB7XHJcblx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuXHRcdFx0XHRfc2VsZi5zYXZlTWFya2VyKCBfc2VsZi5tYXJrZXIuJGZvcm0uZm9ybVRvT2JqZWN0KCkgKTtcclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0XHR0aGlzLm1hcmtlci4kcmVtb3ZlQWxsLm9uKCAnY2xpY2snLCBmdW5jdGlvbiggZSApIHtcclxuXHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRcdFx0X3NlbGYucmVtb3ZlQWxsTWFya2VycygpO1xyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdC8vIHByZXZpZXcgZXZlbnRzXHJcblx0XHRcdHRoaXMuJHByZXZpZXdNb2RhbC5vbiggJ3Nob3duLmJzLm1vZGFsJywgZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0X3NlbGYucHJldmlldygpO1xyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdHRoaXMuJHByZXZpZXdNb2RhbC5vbiggJ2hpZGRlbi5icy5tb2RhbCcsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdF9zZWxmLiRwcmV2aWV3TW9kYWwuZmluZCggJ2lmcmFtZScgKS5nZXQoMCkuY29udGVudFdpbmRvdy5kb2N1bWVudC5ib2R5LmlubmVySFRNTCA9ICcnO1xyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdC8vIGdldCBjb2RlIGV2ZW50c1xyXG5cdFx0XHR0aGlzLiRnZXRDb2RlTW9kYWwub24oICdzaG93bi5icy5tb2RhbCcsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdF9zZWxmLmdldENvZGUoKTtcclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0XHRyZXR1cm4gdGhpcztcclxuXHRcdH0sXHJcblxyXG5cdFx0Ly8gTUFQIEZVTkNUSU9OU1xyXG5cdFx0Ly8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHRcdG1hcEV2ZW50czogZnVuY3Rpb24oKSB7XHJcblx0XHRcdHZhciBfc2VsZiA9IHRoaXM7XHJcblxyXG5cdFx0XHRnb29nbGUubWFwcy5ldmVudC5hZGREb21MaXN0ZW5lciggX3NlbGYubWFwLCAncmVzaXplJywgZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0Z29vZ2xlLm1hcHMuZXZlbnQudHJpZ2dlciggX3NlbGYubWFwLCAncmVzaXplJyApO1xyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdGdvb2dsZS5tYXBzLmV2ZW50LmFkZExpc3RlbmVyKCB0aGlzLm1hcCwgJ2NlbnRlcl9jaGFuZ2VkJywgZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0dmFyIGNvb3JkcyA9IF9zZWxmLm1hcC5nZXRDZW50ZXIoKTtcclxuXHRcdFx0XHRfc2VsZi51cGRhdGVDb250cm9sKCAnbGF0bG5nJywge1xyXG5cdFx0XHRcdFx0bGF0OiByb3VuZE51bWJlciggY29vcmRzLmxhdCgpLCA2ICksXHJcblx0XHRcdFx0XHRsbmc6IHJvdW5kTnVtYmVyKCBjb29yZHMubG5nKCksIDYgKVxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdGdvb2dsZS5tYXBzLmV2ZW50LmFkZExpc3RlbmVyKCB0aGlzLm1hcCwgJ3pvb21fY2hhbmdlZCcsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdF9zZWxmLnVwZGF0ZUNvbnRyb2woICd6b29tbGV2ZWwnLCBfc2VsZi5tYXAuZ2V0Wm9vbSgpICk7XHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0Z29vZ2xlLm1hcHMuZXZlbnQuYWRkTGlzdGVuZXIoIHRoaXMubWFwLCAnbWFwdHlwZWlkX2NoYW5nZWQnLCBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRfc2VsZi51cGRhdGVDb250cm9sKCAnbWFwdHlwZScsIF9zZWxmLm1hcC5nZXRNYXBUeXBlSWQoKSApO1xyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdHJldHVybiB0aGlzO1xyXG5cdFx0fSxcclxuXHJcblx0XHR1cGRhdGVNYXA6IGZ1bmN0aW9uKCBwcm9wLCB2YWx1ZSApIHtcclxuXHRcdFx0dmFyIHVwZGF0ZUZuO1xyXG5cclxuXHRcdFx0dXBkYXRlRm4gPSB0aGlzLnVwZGF0ZU1hcFByb3BlcnR5WyBwcm9wIF07XHJcblxyXG5cdFx0XHRpZiAoICQuaXNGdW5jdGlvbiggdXBkYXRlRm4gKSApIHtcclxuXHRcdFx0XHR1cGRhdGVGbi5hcHBseSggdGhpcywgWyB2YWx1ZSBdICk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0Y29uc29sZS5pbmZvKCAnbWlzc2luZyB1cGRhdGUgZnVuY3Rpb24gZm9yJywgcHJvcCApO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRyZXR1cm4gdGhpcztcclxuXHRcdH0sXHJcblxyXG5cdFx0dXBkYXRlTWFwUHJvcGVydHk6IHtcclxuXHJcblx0XHRcdGxhdGxuZzogZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0dmFyIGxhdCxcclxuXHRcdFx0XHRcdGxuZztcclxuXHJcblx0XHRcdFx0bGF0ID0gdGhpcy4kd3JhcHBlci5maW5kKCdbZGF0YS1idWlsZGVyLWZpZWxkXVtuYW1lPVwibGF0aXR1ZGVcIl0nKS52YWwoKTtcclxuXHRcdFx0XHRsbmcgPSB0aGlzLiR3cmFwcGVyLmZpbmQoJ1tkYXRhLWJ1aWxkZXItZmllbGRdW25hbWU9XCJsb25naXR1ZGVcIl0nKS52YWwoKTtcclxuXHJcblx0XHRcdFx0aWYgKCBsYXQubGVuZ3RoID4gMCAmJiBsbmcubGVuZ3RoID4gMCApIHtcclxuXHRcdFx0XHRcdHRoaXMubWFwLnNldENlbnRlciggbmV3IGdvb2dsZS5tYXBzLkxhdExuZyggbGF0LCBsbmcgKSApO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0cmV0dXJuIHRoaXM7XHJcblx0XHRcdH0sXHJcblxyXG5cdFx0XHR6b29tbGV2ZWw6IGZ1bmN0aW9uKCB2YWx1ZSApIHtcclxuXHRcdFx0XHR2YXIgdmFsdWUgPSBhcmd1bWVudHNbIDAgXTtcclxuXHJcblx0XHRcdFx0dGhpcy5tYXAuc2V0Wm9vbSggcGFyc2VJbnQoIHZhbHVlLCAxMCApICk7XHJcblxyXG5cdFx0XHRcdHJldHVybiB0aGlzO1xyXG5cdFx0XHR9LFxyXG5cclxuXHRcdFx0bWFwdHlwZWNvbnRyb2w6IGZ1bmN0aW9uKCB2YWx1ZSApIHtcclxuXHRcdFx0XHR2YXIgb3B0aW9ucztcclxuXHJcblx0XHRcdFx0b3B0aW9uc1x0PSB7fTtcclxuXHJcblx0XHRcdFx0aWYgKCB2YWx1ZSA9PT0gJ2ZhbHNlJyApe1xyXG5cdFx0XHRcdFx0b3B0aW9ucy5tYXBUeXBlQ29udHJvbCA9IGZhbHNlO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRvcHRpb25zID0ge1xyXG5cdFx0XHRcdFx0XHRtYXBUeXBlQ29udHJvbDogdHJ1ZSxcclxuXHRcdFx0XHRcdFx0bWFwVHlwZUNvbnRyb2xPcHRpb25zOiB7XHJcblx0XHRcdFx0XHRcdFx0c3R5bGU6IGdvb2dsZS5tYXBzLk1hcFR5cGVDb250cm9sU3R5bGVbIHZhbHVlLnRvVXBwZXJDYXNlKCkgXVxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9O1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0dGhpcy5tYXAuc2V0T3B0aW9ucyggb3B0aW9ucyApO1xyXG5cclxuXHRcdFx0XHRyZXR1cm4gdGhpcztcclxuXHRcdFx0fSxcclxuXHJcblx0XHRcdHpvb21jb250cm9sOiBmdW5jdGlvbiggdmFsdWUgKSB7XHJcblx0XHRcdFx0dmFyIG9wdGlvbnM7XHJcblxyXG5cdFx0XHRcdG9wdGlvbnNcdD0ge307XHJcblxyXG5cdFx0XHRcdGlmICggdmFsdWUgPT09ICdmYWxzZScgKXtcclxuXHRcdFx0XHRcdG9wdGlvbnMuem9vbUNvbnRyb2wgPSBmYWxzZTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0b3B0aW9ucyA9IHtcclxuXHRcdFx0XHRcdFx0em9vbUNvbnRyb2w6IHRydWUsXHJcblx0XHRcdFx0XHRcdHpvb21Db250cm9sT3B0aW9uczoge1xyXG5cdFx0XHRcdFx0XHRcdHN0eWxlOiBnb29nbGUubWFwcy5ab29tQ29udHJvbFN0eWxlWyB2YWx1ZS50b1VwcGVyQ2FzZSgpIF1cclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdHRoaXMubWFwLnNldE9wdGlvbnMoIG9wdGlvbnMgKTtcclxuXHJcblx0XHRcdFx0cmV0dXJuIHRoaXM7XHJcblx0XHRcdH0sXHJcblxyXG5cdFx0XHRzY2FsZWNvbnRyb2w6IGZ1bmN0aW9uKCB2YWx1ZSApIHtcclxuXHRcdFx0XHR2YXIgb3B0aW9ucztcclxuXHJcblx0XHRcdFx0b3B0aW9uc1x0PSB7fTtcclxuXHJcblx0XHRcdFx0b3B0aW9ucy5zY2FsZUNvbnRyb2wgPSB2YWx1ZSAhPT0gJ2ZhbHNlJztcclxuXHJcblx0XHRcdFx0dGhpcy5tYXAuc2V0T3B0aW9ucyggb3B0aW9ucyApO1xyXG5cclxuXHRcdFx0XHRyZXR1cm4gdGhpcztcclxuXHRcdFx0fSxcclxuXHJcblx0XHRcdHN0cmVldHZpZXdjb250cm9sOiBmdW5jdGlvbiggdmFsdWUgKSB7XHJcblx0XHRcdFx0dmFyIG9wdGlvbnM7XHJcblxyXG5cdFx0XHRcdG9wdGlvbnNcdD0ge307XHJcblxyXG5cdFx0XHRcdG9wdGlvbnMuc3RyZWV0Vmlld0NvbnRyb2wgPSB2YWx1ZSAhPT0gJ2ZhbHNlJztcclxuXHJcblx0XHRcdFx0dGhpcy5tYXAuc2V0T3B0aW9ucyggb3B0aW9ucyApO1xyXG5cclxuXHRcdFx0XHRyZXR1cm4gdGhpcztcclxuXHRcdFx0fSxcclxuXHJcblx0XHRcdHBhbmNvbnRyb2w6IGZ1bmN0aW9uKCB2YWx1ZSApIHtcclxuXHRcdFx0XHR2YXIgb3B0aW9ucztcclxuXHJcblx0XHRcdFx0b3B0aW9uc1x0PSB7fTtcclxuXHJcblx0XHRcdFx0b3B0aW9ucy5wYW5Db250cm9sID0gdmFsdWUgIT09ICdmYWxzZSc7XHJcblxyXG5cdFx0XHRcdHRoaXMubWFwLnNldE9wdGlvbnMoIG9wdGlvbnMgKTtcclxuXHJcblx0XHRcdFx0cmV0dXJuIHRoaXM7XHJcblx0XHRcdH0sXHJcblxyXG5cdFx0XHRvdmVydmlld2NvbnRyb2w6IGZ1bmN0aW9uKCB2YWx1ZSApIHtcclxuXHRcdFx0XHR2YXIgb3B0aW9ucztcclxuXHJcblx0XHRcdFx0b3B0aW9uc1x0PSB7fTtcclxuXHJcblx0XHRcdFx0aWYgKCB2YWx1ZSA9PT0gJ2ZhbHNlJyApe1xyXG5cdFx0XHRcdFx0b3B0aW9ucy5vdmVydmlld01hcENvbnRyb2wgPSBmYWxzZTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0b3B0aW9ucyA9IHtcclxuXHRcdFx0XHRcdFx0b3ZlcnZpZXdNYXBDb250cm9sOiB0cnVlLFxyXG5cdFx0XHRcdFx0XHRvdmVydmlld01hcENvbnRyb2xPcHRpb25zOiB7XHJcblx0XHRcdFx0XHRcdFx0b3BlbmVkOiB2YWx1ZSA9PT0gJ29wZW5lZCdcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdHRoaXMubWFwLnNldE9wdGlvbnMoIG9wdGlvbnMgKTtcclxuXHJcblx0XHRcdFx0cmV0dXJuIHRoaXM7XHJcblx0XHRcdH0sXHJcblxyXG5cdFx0XHRkcmFnZ2FibGVjb250cm9sOiBmdW5jdGlvbiggdmFsdWUgKSB7XHJcblx0XHRcdFx0dmFyIG9wdGlvbnM7XHJcblxyXG5cdFx0XHRcdG9wdGlvbnNcdD0ge307XHJcblxyXG5cdFx0XHRcdG9wdGlvbnMuZHJhZ2dhYmxlID0gdmFsdWUgIT09ICdmYWxzZSc7XHJcblxyXG5cdFx0XHRcdHRoaXMubWFwLnNldE9wdGlvbnMoIG9wdGlvbnMgKTtcclxuXHJcblx0XHRcdFx0cmV0dXJuIHRoaXM7XHJcblx0XHRcdH0sXHJcblxyXG5cdFx0XHRjbGlja3Rvem9vbWNvbnRyb2w6IGZ1bmN0aW9uKCB2YWx1ZSApIHtcclxuXHRcdFx0XHR2YXIgb3B0aW9ucztcclxuXHJcblx0XHRcdFx0b3B0aW9uc1x0PSB7fTtcclxuXHJcblx0XHRcdFx0b3B0aW9ucy5kaXNhYmxlRG91YmxlQ2xpY2tab29tID0gdmFsdWUgPT09ICdmYWxzZSc7XHJcblxyXG5cdFx0XHRcdHRoaXMubWFwLnNldE9wdGlvbnMoIG9wdGlvbnMgKTtcclxuXHJcblx0XHRcdFx0cmV0dXJuIHRoaXM7XHJcblx0XHRcdH0sXHJcblxyXG5cdFx0XHRzY3JvbGx3aGVlbGNvbnRyb2w6IGZ1bmN0aW9uKCB2YWx1ZSApIHtcclxuXHRcdFx0XHR2YXIgb3B0aW9ucztcclxuXHJcblx0XHRcdFx0b3B0aW9uc1x0PSB7fTtcclxuXHJcblx0XHRcdFx0b3B0aW9ucy5zY3JvbGx3aGVlbCA9IHZhbHVlICE9PSAnZmFsc2UnO1xyXG5cclxuXHRcdFx0XHR0aGlzLm1hcC5zZXRPcHRpb25zKCBvcHRpb25zICk7XHJcblxyXG5cdFx0XHRcdHJldHVybiB0aGlzO1xyXG5cdFx0XHR9LFxyXG5cclxuXHRcdFx0bWFwdHlwZTogZnVuY3Rpb24oIHZhbHVlICkge1xyXG5cdFx0XHRcdHZhciBvcHRpb25zLFxyXG5cdFx0XHRcdFx0bWFwU3R5bGVzLFxyXG5cdFx0XHRcdFx0bWFwVHlwZTtcclxuXHJcblx0XHRcdFx0bWFwU3R5bGVzID0gdGhpcy4kd3JhcHBlci5maW5kKCAnW2RhdGEtYnVpbGRlci1maWVsZD1cIm1hcHRoZW1lXCJdJyApLmNoaWxkcmVuKCAnb3B0aW9uJyApLmZpbHRlciggJzpzZWxlY3RlZCcgKS5kYXRhKCAnanNvbicgKTtcclxuXHRcdFx0XHRtYXBUeXBlID0gIGdvb2dsZS5tYXBzLk1hcFR5cGVJZFsgdmFsdWUudG9VcHBlckNhc2UoKSBdO1xyXG5cclxuXHRcdFx0XHRvcHRpb25zXHQ9IHtcclxuXHRcdFx0XHRcdG1hcFR5cGVJZDogbWFwVHlwZVxyXG5cdFx0XHRcdH07XHJcblxyXG5cdFx0XHRcdGlmICggJC5pbkFycmF5KCBnb29nbGUubWFwcy5NYXBUeXBlSWRbIHZhbHVlLnRvVXBwZXJDYXNlKCkgXSwgWyAndGVycmFpbicsICdyb2FkbWFwJyBdKSA+IC0xICYmICEhbWFwU3R5bGVzICkge1xyXG5cdFx0XHRcdFx0b3B0aW9ucy5zdHlsZXMgPSBldmFsKCBtYXBTdHlsZXMgKTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0b3B0aW9ucy5zdHlsZXMgPSBmYWxzZTtcclxuXHRcdFx0XHRcdHRoaXMudXBkYXRlQ29udHJvbCggJ21hcHRoZW1lJyApO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0dGhpcy5tYXAuc2V0T3B0aW9ucyggb3B0aW9ucyApO1xyXG5cdFx0XHR9LFxyXG5cclxuXHRcdFx0bWFwdGhlbWU6IGZ1bmN0aW9uKCB2YWx1ZSApIHtcclxuXHRcdFx0XHR2YXIganNvbixcclxuXHRcdFx0XHRcdG1hcFR5cGUsXHJcblx0XHRcdFx0XHRvcHRpb25zO1xyXG5cclxuXHRcdFx0XHRtYXBUeXBlID0gZ29vZ2xlLm1hcHMuTWFwVHlwZUlkWyB0aGlzLm1hcC5nZXRNYXBUeXBlSWQoKSA9PT0gJ3RlcnJhaW4nID8gJ1RFUlJBSU4nIDogJ1JPQURNQVAnIF07XHJcblx0XHRcdFx0b3B0aW9ucyA9IHt9O1xyXG5cdFx0XHRcdGpzb24gPSB0aGlzLiR3cmFwcGVyLmZpbmQoICdbZGF0YS1idWlsZGVyLWZpZWxkPVwibWFwdGhlbWVcIl0nICkuY2hpbGRyZW4oICdvcHRpb24nICkuZmlsdGVyKCAnOnNlbGVjdGVkJyApLmRhdGEoICdqc29uJyApO1xyXG5cclxuXHRcdFx0XHRpZiAoICFqc29uICkge1xyXG5cdFx0XHRcdFx0b3B0aW9ucyA9IHtcclxuXHRcdFx0XHRcdFx0bWFwVHlwZUlkOiBtYXBUeXBlLFxyXG5cdFx0XHRcdFx0XHRzdHlsZXM6IGZhbHNlXHJcblx0XHRcdFx0XHR9O1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRvcHRpb25zID0ge1xyXG5cdFx0XHRcdFx0XHRtYXBUeXBlSWQ6IG1hcFR5cGUsXHJcblx0XHRcdFx0XHRcdHN0eWxlczogZXZhbCgganNvbiApXHJcblx0XHRcdFx0XHR9O1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0dGhpcy5tYXAuc2V0T3B0aW9ucyggb3B0aW9ucyApO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0fSxcclxuXHJcblx0XHQvLyBDT05UUk9MUyBGVU5DVElPTlNcclxuXHRcdC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblx0XHR1cGRhdGVDb250cm9sOiBmdW5jdGlvbiggcHJvcCApIHtcclxuXHRcdFx0dmFyIHVwZGF0ZUZuO1xyXG5cclxuXHRcdFx0dXBkYXRlRm4gPSB0aGlzLnVwZGF0ZUNvbnRyb2xWYWx1ZVsgcHJvcCBdO1xyXG5cclxuXHRcdFx0aWYgKCAkLmlzRnVuY3Rpb24oIHVwZGF0ZUZuICkgKSB7XHJcblx0XHRcdFx0dXBkYXRlRm4uYXBwbHkoIHRoaXMgKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRjb25zb2xlLmluZm8oICdtaXNzaW5nIHVwZGF0ZSBmdW5jdGlvbiBmb3InLCBwcm9wICk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHJldHVybiB0aGlzO1xyXG5cdFx0fSxcclxuXHJcblx0XHR1cGRhdGVDb250cm9sVmFsdWU6IHtcclxuXHJcblx0XHRcdGxhdGxuZzogZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0dmFyIGNlbnRlciA9IHRoaXMubWFwLmdldENlbnRlcigpO1xyXG5cclxuXHRcdFx0XHR0aGlzLiR3cmFwcGVyLmZpbmQoJ1tkYXRhLWJ1aWxkZXItZmllbGRdW25hbWU9XCJsYXRpdHVkZVwiXScpLnZhbCggcm91bmROdW1iZXIoIGNlbnRlci5sYXQoKSAsIDYgKSApO1xyXG5cdFx0XHRcdHRoaXMuJHdyYXBwZXIuZmluZCgnW2RhdGEtYnVpbGRlci1maWVsZF1bbmFtZT1cImxvbmdpdHVkZVwiXScpLnZhbCggcm91bmROdW1iZXIoIGNlbnRlci5sbmcoKSAsIDYgKSApO1xyXG5cdFx0XHR9LFxyXG5cclxuXHRcdFx0em9vbWxldmVsOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHR2YXIgJGNvbnRyb2wsXHJcblx0XHRcdFx0XHRsZXZlbDtcclxuXHJcblx0XHRcdFx0bGV2ZWwgPSB0aGlzLm1hcC5nZXRab29tKCk7XHJcblxyXG5cdFx0XHRcdCRjb250cm9sID0gdGhpcy4kd3JhcHBlci5maW5kKCdbZGF0YS1idWlsZGVyLWZpZWxkPVwiem9vbWxldmVsXCJdJyk7XHJcblxyXG5cdFx0XHRcdCRjb250cm9sXHJcblx0XHRcdFx0XHQuY2hpbGRyZW4oICdvcHRpb25bdmFsdWU9XCInICsgbGV2ZWwgKyAnXCJdJyApXHJcblx0XHRcdFx0XHQucHJvcCggJ3NlbGVjdGVkJywgdHJ1ZSApO1xyXG5cclxuXHRcdFx0XHRpZiAoICRjb250cm9sLmhhc0NsYXNzKCAnc2VsZWN0Mi1vZmZzY3JlZW4nICkgKSB7XHJcblx0XHRcdFx0XHQkY29udHJvbC5zZWxlY3QyKCAndmFsJywgbGV2ZWwgKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblxyXG5cdFx0XHRtYXB0eXBlOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHR2YXIgJGNvbnRyb2wsXHJcblx0XHRcdFx0XHRtYXBUeXBlO1xyXG5cclxuXHRcdFx0XHRtYXBUeXBlID0gdGhpcy5tYXAuZ2V0TWFwVHlwZUlkKCk7XHJcblx0XHRcdFx0JGNvbnRyb2wgPSB0aGlzLiR3cmFwcGVyLmZpbmQoJ1tkYXRhLWJ1aWxkZXItZmllbGQ9XCJtYXB0eXBlXCJdJyk7XHJcblxyXG5cdFx0XHRcdCRjb250cm9sXHJcblx0XHRcdFx0XHQuY2hpbGRyZW4oICdvcHRpb25bdmFsdWU9XCInICsgbWFwVHlwZSArICdcIl0nIClcclxuXHRcdFx0XHRcdC5wcm9wKCAnc2VsZWN0ZWQnLCB0cnVlICk7XHJcblxyXG5cdFx0XHRcdGlmICggJGNvbnRyb2wuaGFzQ2xhc3MoICdzZWxlY3QyLW9mZnNjcmVlbicgKSApIHtcclxuXHRcdFx0XHRcdCRjb250cm9sLnNlbGVjdDIoICd2YWwnLCBtYXBUeXBlICk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LFxyXG5cclxuXHRcdFx0bWFwdGhlbWU6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdHZhciAkY29udHJvbDtcclxuXHJcblx0XHRcdFx0JGNvbnRyb2wgPSB0aGlzLiR3cmFwcGVyLmZpbmQoJ1tkYXRhLWJ1aWxkZXItZmllbGQ9XCJtYXB0aGVtZVwiXScpO1xyXG5cclxuXHRcdFx0XHQkY29udHJvbFxyXG5cdFx0XHRcdFx0LmNoaWxkcmVuKCAnb3B0aW9uW3ZhbHVlPVwiZmFsc2VcIl0nIClcclxuXHRcdFx0XHRcdC5wcm9wKCAnc2VsZWN0ZWQnLCB0cnVlICk7XHJcblxyXG5cdFx0XHRcdGlmICggJGNvbnRyb2wuaGFzQ2xhc3MoICdzZWxlY3QyLW9mZnNjcmVlbicgKSApIHtcclxuXHRcdFx0XHRcdCRjb250cm9sLnNlbGVjdDIoICd2YWwnLCAnZmFsc2UnICk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblxyXG5cdFx0fSxcclxuXHJcblx0XHQvLyBNQVJLRVJTIEZVTkNUSU9OU1xyXG5cdFx0Ly8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHRcdGVkaXRNYXJrZXI6IGZ1bmN0aW9uKCBtYXJrZXIgKSB7XHJcblx0XHRcdHRoaXMuY3VycmVudE1hcmtlciA9IG1hcmtlcjtcclxuXHJcblx0XHRcdHRoaXMubWFya2VyLiRmb3JtXHJcblx0XHRcdFx0LmZpbmQoICcjTWFya2VyTG9jYXRpb24nICkudmFsKCBtYXJrZXIubG9jYXRpb24gKTtcclxuXHJcblx0XHRcdHRoaXMubWFya2VyLiRmb3JtXHJcblx0XHRcdFx0LmZpbmQoICcjTWFya2VyVGl0bGUnICkudmFsKCBtYXJrZXIudGl0bGUgKTtcclxuXHJcblx0XHRcdHRoaXMubWFya2VyLiRmb3JtXHJcblx0XHRcdFx0LmZpbmQoICcjTWFya2VyRGVzY3JpcHRpb24nICkudmFsKCBtYXJrZXIuZGVzY3JpcHRpb24gKTtcclxuXHJcblx0XHRcdHRoaXMubWFya2VyLiRtb2RhbC5tb2RhbCggJ3Nob3cnICk7XHJcblx0XHR9LFxyXG5cclxuXHRcdHJlbW92ZU1hcmtlcjogZnVuY3Rpb24oIG1hcmtlciApIHtcclxuXHRcdFx0dmFyIGk7XHJcblxyXG5cdFx0XHRtYXJrZXIuX2luc3RhbmNlLnNldE1hcCggbnVsbCApO1xyXG5cdFx0XHRtYXJrZXIuXyRodG1sLnJlbW92ZSgpO1xyXG5cclxuXHRcdFx0Zm9yKCBpID0gMDsgaSA8IHRoaXMubWFya2Vycy5sZW5ndGg7IGkrKyApIHtcclxuXHRcdFx0XHRpZiAoIG1hcmtlciA9PT0gdGhpcy5tYXJrZXJzWyBpIF0gKSB7XHJcblx0XHRcdFx0XHR0aGlzLm1hcmtlcnMuc3BsaWNlKCBpLCAxICk7XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmICggdGhpcy5tYXJrZXJzLmxlbmd0aCA9PT0gMCApIHtcclxuXHRcdFx0XHR0aGlzLm1hcmtlci4kbGlzdC5hZGRDbGFzcyggJ2hpZGRlbicgKTtcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHJcblx0XHRzYXZlTWFya2VyOiBmdW5jdGlvbiggbWFya2VyICkge1xyXG5cdFx0XHR0aGlzLl9nZW9jb2RlKCBtYXJrZXIgKTtcclxuXHRcdH0sXHJcblxyXG5cdFx0cmVtb3ZlQWxsTWFya2VyczogZnVuY3Rpb24oKSB7XHJcblx0XHRcdHZhciBpID0gMCxcclxuXHRcdFx0XHRsLFxyXG5cdFx0XHRcdG1hcmtlcjtcclxuXHJcblx0XHRcdGwgPSB0aGlzLm1hcmtlcnMubGVuZ3RoO1xyXG5cclxuXHRcdFx0Zm9yKCA7IGkgPCBsOyBpKysgKSB7XHJcblx0XHRcdFx0bWFya2VyID0gdGhpcy5tYXJrZXJzWyBpIF07XHJcblxyXG5cdFx0XHRcdG1hcmtlci5faW5zdGFuY2Uuc2V0TWFwKCBudWxsICk7XHJcblx0XHRcdFx0bWFya2VyLl8kaHRtbC5yZW1vdmUoKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0dGhpcy5tYXJrZXJzID0gW107XHJcblx0XHRcdHRoaXMubWFya2VyLiRsaXN0LmFkZENsYXNzKCAnaGlkZGVuJyApO1xyXG5cdFx0fSxcclxuXHJcblx0XHRfZ2VvY29kZTogZnVuY3Rpb24oIG1hcmtlciApIHtcclxuXHRcdFx0dmFyIF9zZWxmID0gdGhpcyxcclxuXHRcdFx0XHRzdGF0dXM7XHJcblxyXG5cdFx0XHR0aGlzLmdlb2NvZGVyLmdlb2NvZGUoeyBhZGRyZXNzOiBtYXJrZXIubG9jYXRpb24gfSwgZnVuY3Rpb24oIHJlc3BvbnNlLCBzdGF0dXMgKSB7XHJcblx0XHRcdFx0X3NlbGYuX29uR2VvY29kZVJlc3VsdCggbWFya2VyLCByZXNwb25zZSwgc3RhdHVzICk7XHJcblx0XHRcdH0pO1xyXG5cdFx0fSxcclxuXHJcblx0XHRfb25HZW9jb2RlUmVzdWx0OiBmdW5jdGlvbiggbWFya2VyLCByZXNwb25zZSwgc3RhdHVzICkge1xyXG5cdFx0XHR2YXIgcmVzdWx0O1xyXG5cclxuXHRcdFx0aWYgKCAhcmVzcG9uc2UgfHwgc3RhdHVzICE9PSBnb29nbGUubWFwcy5HZW9jb2RlclN0YXR1cy5PSyApIHtcclxuXHRcdFx0XHRpZiAoIHN0YXR1cyA9PSBnb29nbGUubWFwcy5HZW9jb2RlclN0YXR1cy5aRVJPX1JFU1VMVFMgKSB7XHJcblx0XHRcdFx0XHQvLyBzaG93IG5vdGlmaWNhdGlvblxyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHR0aW1lb3V0cysrO1xyXG5cdFx0XHRcdFx0aWYgKCB0aW1lb3V0cyA+IDMgKSB7XHJcblx0XHRcdFx0XHRcdC8vIHNob3cgbm90aWZpY2F0aW9uIHJlYWNoZWQgbGltaXQgb2YgcmVxdWVzdHNcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0dGltZW91dHMgPSAwO1xyXG5cclxuXHRcdFx0XHRpZiAoIHRoaXMuY3VycmVudE1hcmtlciApIHtcclxuXHRcdFx0XHRcdHRoaXMucmVtb3ZlTWFya2VyKCB0aGlzLmN1cnJlbnRNYXJrZXIgKTtcclxuXHRcdFx0XHRcdHRoaXMuY3VycmVudE1hcmtlciA9IG51bGw7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQvLyBncmFiIGZpcnN0IHJlc3VsdCBvZiB0aGUgbGlzdFxyXG5cdFx0XHRcdHJlc3VsdCA9IHJlc3BvbnNlWyAwIF07XHJcblxyXG5cdFx0XHRcdC8vIGdldCBsYXQgJiBsbmcgYW5kIHNldCB0byBtYXJrZXJcclxuXHRcdFx0XHRtYXJrZXIubGF0ID0gTWF0aC5yb3VuZCggcmVzdWx0Lmdlb21ldHJ5LmxvY2F0aW9uLmxhdCgpICogMTAwMDAwMCApIC8gMTAwMDAwMDtcclxuXHRcdFx0XHRtYXJrZXIubG5nID0gTWF0aC5yb3VuZCggcmVzdWx0Lmdlb21ldHJ5LmxvY2F0aW9uLmxuZygpICogMTAwMDAwMCApIC8gMTAwMDAwMDtcclxuXHJcblx0XHRcdFx0dmFyIG9wdHMgPSB7XHJcblx0XHRcdFx0XHRwb3NpdGlvbjogbmV3IGdvb2dsZS5tYXBzLkxhdExuZyggbWFya2VyLmxhdCwgbWFya2VyLmxuZyApLFxyXG5cdFx0XHRcdFx0bWFwOiB0aGlzLm1hcFxyXG5cdFx0XHRcdH07XHJcblxyXG5cdFx0XHRcdGlmICggbWFya2VyLnRpdGxlLmxlbmd0aCA+IDAgKSB7XHJcblx0XHRcdFx0XHRvcHRzLnRpdGxlID0gbWFya2VyLnRpdGxlO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0aWYgKCBtYXJrZXIuZGVzY3JpcHRpb24ubGVuZ3RoID4gMCApIHtcclxuXHRcdFx0XHRcdG9wdHMuZGVzYyA9IG1hcmtlci5kZXNjcmlwdGlvbjtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdG1hcmtlci5wb3NpdGlvbiA9IG9wdHMucG9zaXRpb247XHJcblx0XHRcdFx0bWFya2VyLl9pbnN0YW5jZSA9IG5ldyBnb29nbGUubWFwcy5NYXJrZXIoIG9wdHMgKTtcclxuXHJcblx0XHRcdFx0aWYgKCAhIW1hcmtlci50aXRsZSB8fCAhIW1hcmtlci5kZXNjcmlwdGlvbiAgKSB7XHJcblx0XHRcdFx0XHR0aGlzLl9iaW5kTWFya2VyQ2xpY2soIG1hcmtlciApO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0dGhpcy5tYXJrZXJzLnB1c2goIG1hcmtlciApO1xyXG5cclxuXHRcdFx0XHQvLyBhcHBlbmQgdG8gbWFya2VycyBsaXN0XHJcblx0XHRcdFx0dGhpcy5fYXBwZW5kTWFya2VyVG9MaXN0KCBtYXJrZXIgKTtcclxuXHJcblx0XHRcdFx0Ly8gaGlkZSBtb2RhbCBhbmQgcmVzZXQgZm9ybVxyXG5cdFx0XHRcdHRoaXMubWFya2VyLiRmb3JtLmdldCgwKS5yZXNldCgpO1xyXG5cdFx0XHRcdHRoaXMubWFya2VyLiRtb2RhbC5tb2RhbCggJ2hpZGUnICk7XHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblxyXG5cdFx0X2FwcGVuZE1hcmtlclRvTGlzdDogZnVuY3Rpb24oIG1hcmtlciApIHtcclxuXHRcdFx0dmFyIF9zZWxmID0gdGhpcyxcclxuXHRcdFx0XHRodG1sO1xyXG5cclxuXHRcdFx0aHRtbCA9IFtcclxuXHRcdFx0XHQnPGxpPicsXHJcblx0XHRcdFx0XHQnPHA+e2xvY2F0aW9ufTwvcD4nLFxyXG5cdFx0XHRcdFx0JzxhIGhyZWY9XCIjXCIgY2xhc3M9XCJsb2NhdGlvbi1hY3Rpb24gbG9jYXRpb24tY2VudGVyXCI+PGkgY2xhc3M9XCJmYXMgZmEtbWFwLW1hcmtlci1hbHRcIj48L2k+PC9hPicsXHJcblx0XHRcdFx0XHQnPGEgaHJlZj1cIiNcIiBjbGFzcz1cImxvY2F0aW9uLWFjdGlvbiBsb2NhdGlvbi1lZGl0XCI+PGkgY2xhc3M9XCJmYXMgZmEtZWRpdFwiPjwvaT48L2E+JyxcclxuXHRcdFx0XHRcdCc8YSBocmVmPVwiI1wiIGNsYXNzPVwibG9jYXRpb24tYWN0aW9uIGxvY2F0aW9uLXJlbW92ZSB0ZXh0LWRhbmdlclwiPjxpIGNsYXNzPVwiZmFzIGZhLXRpbWVzXCI+PC9pPjwvYT4nLFxyXG5cdFx0XHRcdCc8L2xpPidcclxuXHRcdFx0XS5qb2luKCcnKTtcclxuXHJcblx0XHRcdGh0bWwgPSBodG1sLnJlcGxhY2UoIC9cXHtsb2NhdGlvblxcfS8sICEhbWFya2VyLnRpdGxlID8gbWFya2VyLnRpdGxlIDogbWFya2VyLmxvY2F0aW9uICk7XHJcblxyXG5cdFx0XHRtYXJrZXIuXyRodG1sID0gJCggaHRtbCApO1xyXG5cclxuXHRcdFx0Ly8gZXZlbnRzXHJcblx0XHRcdG1hcmtlci5fJGh0bWwuZmluZCggJy5sb2NhdGlvbi1jZW50ZXInIClcclxuXHRcdFx0XHQub24oICdjbGljaycsIGZ1bmN0aW9uKCBlICkge1xyXG5cdFx0XHRcdFx0X3NlbGYubWFwLnNldENlbnRlciggbWFya2VyLnBvc2l0aW9uICk7XHJcblx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHRtYXJrZXIuXyRodG1sLmZpbmQoICcubG9jYXRpb24tcmVtb3ZlJyApXHJcblx0XHRcdFx0Lm9uKCAnY2xpY2snLCBmdW5jdGlvbiggZSApIHtcclxuXHRcdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRcdFx0XHRcdF9zZWxmLnJlbW92ZU1hcmtlciggbWFya2VyICk7XHJcblx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHRtYXJrZXIuXyRodG1sLmZpbmQoICcubG9jYXRpb24tZWRpdCcgKVxyXG5cdFx0XHRcdC5vbiggJ2NsaWNrJywgZnVuY3Rpb24oIGUgKSB7XHJcblx0XHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRcdFx0XHRfc2VsZi5lZGl0TWFya2VyKCBtYXJrZXIgKTtcclxuXHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdHRoaXMubWFya2VyLiRsaXN0XHJcblx0XHRcdFx0LmFwcGVuZCggbWFya2VyLl8kaHRtbCApXHJcblx0XHRcdFx0LnJlbW92ZUNsYXNzKCAnaGlkZGVuJyApO1xyXG5cdFx0fSxcclxuXHJcblx0XHRfYmluZE1hcmtlckNsaWNrOiBmdW5jdGlvbiggbWFya2VyICkge1xyXG5cdFx0XHR2YXIgX3NlbGYgPSB0aGlzLFxyXG5cdFx0XHRcdGh0bWw7XHJcblxyXG5cdFx0XHRodG1sID0gW1xyXG5cdFx0XHRcdCc8ZGl2IHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjogI0ZGRjsgY29sb3I6ICMwMDA7IHBhZGRpbmc6IDVweDsgd2lkdGg6IDE1MHB4O1wiPicsXHJcblx0XHRcdFx0XHQne3RpdGxlfScsXHJcblx0XHRcdFx0XHQne2Rlc2NyaXB0aW9ufScsXHJcblx0XHRcdFx0JzwvZGl2PidcclxuXHRcdFx0XS5qb2luKCcnKTtcclxuXHJcblx0XHRcdGh0bWwgPSBodG1sLnJlcGxhY2UoL1xce3RpdGxlXFx9LywgISFtYXJrZXIudGl0bGUgPyAgKFwiPGg0PlwiICsgbWFya2VyLnRpdGxlICsgXCI8L2g0PlwiKSA6IFwiXCIgKTtcclxuXHRcdFx0aHRtbCA9IGh0bWwucmVwbGFjZSgvXFx7ZGVzY3JpcHRpb25cXH0vLCAhIW1hcmtlci5kZXNjcmlwdGlvbiA/ICAoXCI8cD5cIiArIG1hcmtlci5kZXNjcmlwdGlvbiArIFwiPC9wPlwiKSA6IFwiXCIgKTtcclxuXHJcblx0XHRcdG1hcmtlci5faW5mb1dpbmRvdyA9IG5ldyBnb29nbGUubWFwcy5JbmZvV2luZG93KHsgY29udGVudDogaHRtbCB9KTtcclxuXHJcblx0XHRcdGdvb2dsZS5tYXBzLmV2ZW50LmFkZExpc3RlbmVyKCBtYXJrZXIuX2luc3RhbmNlLCAnY2xpY2snLCBmdW5jdGlvbigpIHtcclxuXHJcblx0XHRcdFx0aWYgKCBtYXJrZXIuX2luZm9XaW5kb3cuaXNPcGVuZWQgKSB7XHJcblx0XHRcdFx0XHRtYXJrZXIuX2luZm9XaW5kb3cuY2xvc2UoKTtcclxuXHRcdFx0XHRcdG1hcmtlci5faW5mb1dpbmRvdy5pc09wZW5lZCA9IGZhbHNlO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRtYXJrZXIuX2luZm9XaW5kb3cub3BlbiggX3NlbGYubWFwLCB0aGlzICk7XHJcblx0XHRcdFx0XHRtYXJrZXIuX2luZm9XaW5kb3cuaXNPcGVuZWQgPSB0cnVlO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdH0pO1xyXG5cdFx0fSxcclxuXHJcblx0XHRwcmV2aWV3OiBmdW5jdGlvbigpIHtcclxuXHRcdFx0dmFyIGN1c3RvbVNjcmlwdCxcclxuXHRcdFx0XHRnb29nbGVTY3JpcHQsXHJcblx0XHRcdFx0aWZyYW1lLFxyXG5cdFx0XHRcdHByZXZpZXdIdG1sO1xyXG5cclxuXHRcdFx0cHJldmlld0h0bWwgPSBbXHJcblx0XHRcdFx0JzxzdHlsZT4nLFxyXG5cdFx0XHRcdFx0J2h0bWwsIGJvZHkgeyBtYXJnaW46IDA7IHBhZGRpbmc6IDA7IH0nLFxyXG5cdFx0XHRcdCc8L3N0eWxlPicsXHJcblx0XHRcdFx0JzxkaXYgaWQ9XCInICsgdGhpcy4kd3JhcHBlci5maW5kKCdbZGF0YS1idWlsZGVyLWZpZWxkPVwibWFwaWRcIl0nKS52YWwoKSArICdcIiBzdHlsZT1cIndpZHRoOiAxMDAlOyBoZWlnaHQ6IDEwMCU7XCI+PC9kaXY+J1xyXG5cdFx0XHRdO1xyXG5cclxuXHRcdFx0aWZyYW1lID0gdGhpcy4kcHJldmlld01vZGFsLmZpbmQoICdpZnJhbWUnICkuZ2V0KDApLmNvbnRlbnRXaW5kb3cuZG9jdW1lbnQ7XHJcblxyXG5cdFx0XHRpZnJhbWUuYm9keS5pbm5lckhUTUwgPSBwcmV2aWV3SHRtbC5qb2luKCcnKTtcclxuXHJcblx0XHRcdGN1c3RvbVNjcmlwdCA9IGlmcmFtZS5jcmVhdGVFbGVtZW50KCAnc2NyaXB0JyApO1xyXG5cdFx0XHRjdXN0b21TY3JpcHQudHlwZSA9ICd0ZXh0L2phdmFzY3JpcHQnO1xyXG5cdFx0XHRjdXN0b21TY3JpcHQudGV4dCA9IFwid2luZG93LmluaXRpYWxpemUgPSBmdW5jdGlvbigpIHsgXCIgKyB0aGlzLmdlbmVyYXRlKCkgKyBcIiBpbml0KCk7IH07IFwiO1xyXG5cdFx0XHRpZnJhbWUuYm9keS5hcHBlbmRDaGlsZCggY3VzdG9tU2NyaXB0ICk7XHJcblxyXG5cdFx0XHRnb29nbGVTY3JpcHQgPSBpZnJhbWUuY3JlYXRlRWxlbWVudCggJ3NjcmlwdCcgKTtcclxuXHRcdFx0Z29vZ2xlU2NyaXB0LnR5cGUgPSAndGV4dC9qYXZhc2NyaXB0JztcclxuXHRcdFx0Z29vZ2xlU2NyaXB0LnRleHQgPSAnZnVuY3Rpb24gbG9hZFNjcmlwdCgpIHsgdmFyIHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7IHNjcmlwdC50eXBlID0gXCJ0ZXh0L2phdmFzY3JpcHRcIjsgc2NyaXB0LnNyYyA9IFwiLy9tYXBzLmdvb2dsZWFwaXMuY29tL21hcHMvYXBpL2pzP2tleT0mc2Vuc29yPSZjYWxsYmFjaz1pbml0aWFsaXplXCI7IGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc2NyaXB0KTsgfSBsb2FkU2NyaXB0KCknO1xyXG5cdFx0XHRpZnJhbWUuYm9keS5hcHBlbmRDaGlsZCggZ29vZ2xlU2NyaXB0ICk7XHJcblx0XHR9LFxyXG5cclxuXHRcdGdldENvZGU6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHR0aGlzLiRnZXRDb2RlTW9kYWwuZmluZCgnLm1vZGFsLWJvZHkgcHJlJykuaHRtbCggdGhpcy5nZW5lcmF0ZSgpLnJlcGxhY2UoIC88L2csICcmbHQ7JyApLnJlcGxhY2UoIC8+L2csICcmZ3Q7JyApICk7XHJcblx0XHR9LFxyXG5cclxuXHRcdC8vIEdFTkVSQVRFIENPREVcclxuXHRcdC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblx0XHRnZW5lcmF0ZTogZnVuY3Rpb24oKSB7XHJcblx0XHRcdHZhciBpLFxyXG5cdFx0XHRcdHdvcms7XHJcblxyXG5cdFx0XHR2YXIgb3V0cHV0ID0gW1xyXG5cdFx0XHRcdCcgICAgZ29vZ2xlLm1hcHMuZXZlbnQuYWRkRG9tTGlzdGVuZXIod2luZG93LCBcImxvYWRcIiwgaW5pdCk7JyxcclxuXHRcdFx0XHQnICAgIHZhciBtYXA7JyxcclxuXHRcdFx0XHQnICAgIGZ1bmN0aW9uIGluaXQoKSB7JyxcclxuXHRcdFx0XHQnICAgICAgICB2YXIgbWFwT3B0aW9ucyA9IHsnLFxyXG5cdFx0XHRcdCcgICAgICAgICAgICBjZW50ZXI6IG5ldyBnb29nbGUubWFwcy5MYXRMbmcoe2xhdH0sIHtsbmd9KSwnLFxyXG5cdFx0XHRcdCcgICAgICAgICAgICB6b29tOiB7em9vbX0sJyxcclxuXHRcdFx0XHQnICAgICAgICAgICAgem9vbUNvbnRyb2w6IHt6b29tQ29udHJvbH0sJyxcclxuXHRcdFx0XHQnICAgICAgICAgICAge3pvb21Db250cm9sT3B0aW9uc30nLFxyXG5cdFx0XHRcdCcgICAgICAgICAgICBkaXNhYmxlRG91YmxlQ2xpY2tab29tOiB7ZGlzYWJsZURvdWJsZUNsaWNrWm9vbX0sJyxcclxuXHRcdFx0XHQnICAgICAgICAgICAgbWFwVHlwZUNvbnRyb2w6IHttYXBUeXBlQ29udHJvbH0sJyxcclxuXHRcdFx0XHQnICAgICAgICAgICAge21hcFR5cGVDb250cm9sT3B0aW9uc30nLFxyXG5cdFx0XHRcdCcgICAgICAgICAgICBzY2FsZUNvbnRyb2w6IHtzY2FsZUNvbnRyb2x9LCcsXHJcblx0XHRcdFx0JyAgICAgICAgICAgIHNjcm9sbHdoZWVsOiB7c2Nyb2xsd2hlZWx9LCcsXHJcblx0XHRcdFx0JyAgICAgICAgICAgIHBhbkNvbnRyb2w6IHtwYW5Db250cm9sfSwnLFxyXG5cdFx0XHRcdCcgICAgICAgICAgICBzdHJlZXRWaWV3Q29udHJvbDoge3N0cmVldFZpZXdDb250cm9sfSwnLFxyXG5cdFx0XHRcdCcgICAgICAgICAgICBkcmFnZ2FibGUgOiB7ZHJhZ2dhYmxlfSwnLFxyXG5cdFx0XHRcdCcgICAgICAgICAgICBvdmVydmlld01hcENvbnRyb2w6IHtvdmVydmlld01hcENvbnRyb2x9LCcsXHJcblx0XHRcdFx0JyAgICAgICAgICAgIHtvdmVydmlld01hcENvbnRyb2xPcHRpb25zfScsXHJcblx0XHRcdFx0JyAgICAgICAgICAgIG1hcFR5cGVJZDogZ29vZ2xlLm1hcHMuTWFwVHlwZUlkLnttYXBUeXBlSWR9e3N0eWxlc30nLFxyXG5cdFx0XHRcdCcgICAgICAgIH07JyxcclxuXHRcdFx0XHQnJyxcclxuXHRcdFx0XHQnICAgICAgICB2YXIgbWFwRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwie21hcGlkfVwiKTsnLFxyXG5cdFx0XHRcdCcgICAgICAgIHZhciBtYXAgPSBuZXcgZ29vZ2xlLm1hcHMuTWFwKG1hcEVsZW1lbnQsIG1hcE9wdGlvbnMpOycsXHJcblx0XHRcdFx0JyAgICAgICAge2xvY2F0aW9uc30nLFxyXG5cdFx0XHRcdCcgICAgfSdcclxuXHRcdFx0XTtcclxuXHJcblx0XHRcdG91dHB1dCA9IG91dHB1dC5qb2luKFwiXFxyXFxuXCIpO1xyXG5cclxuXHRcdFx0dmFyIHpvb21Db250cm9sXHRcdFx0PSB0aGlzLiR3cmFwcGVyLmZpbmQoJ1tkYXRhLWJ1aWxkZXItZmllbGQ9XCJ6b29tY29udHJvbFwiXSBvcHRpb246c2VsZWN0ZWQnKS52YWwoKSAhPT0gJ2ZhbHNlJztcclxuXHRcdFx0dmFyIG1hcFR5cGVDb250cm9sXHRcdD0gdGhpcy4kd3JhcHBlci5maW5kKCdbZGF0YS1idWlsZGVyLWZpZWxkPVwibWFwdHlwZWNvbnRyb2xcIl0gb3B0aW9uOnNlbGVjdGVkJykudmFsKCkgIT09ICdmYWxzZSc7XHJcblx0XHRcdHZhciBvdmVydmlld01hcENvbnRyb2xcdD0gdGhpcy4kd3JhcHBlci5maW5kKCdbZGF0YS1idWlsZGVyLWZpZWxkPVwib3ZlcnZpZXdjb250cm9sXCJdIG9wdGlvbjpzZWxlY3RlZCcpLnZhbCgpLnRvTG93ZXJDYXNlKCk7XHJcblx0XHRcdHZhciAkdGhlbWVDb250cm9sXHRcdD0gdGhpcy4kd3JhcHBlci5maW5kKCdbZGF0YS1idWlsZGVyLWZpZWxkPVwibWFwdGhlbWVcIl0gb3B0aW9uOnNlbGVjdGVkJykuZmlsdGVyKCAnOnNlbGVjdGVkJyApO1xyXG5cclxuXHRcdFx0b3V0cHV0ID0gb3V0cHV0XHJcblx0XHRcdFx0XHRcdC5yZXBsYWNlKCAvXFx7bWFwaWRcXH0vLCB0aGlzLiR3cmFwcGVyLmZpbmQoJ1tkYXRhLWJ1aWxkZXItZmllbGQ9XCJtYXBpZFwiXScpLnZhbCgpIClcclxuXHRcdFx0XHRcdFx0LnJlcGxhY2UoIC9cXHtsYXRcXH0vLCB0aGlzLiR3cmFwcGVyLmZpbmQoJ1tkYXRhLWJ1aWxkZXItZmllbGRdW25hbWU9XCJsYXRpdHVkZVwiXScpLnZhbCgpIClcclxuXHRcdFx0XHRcdFx0LnJlcGxhY2UoIC9cXHtsbmdcXH0vLCB0aGlzLiR3cmFwcGVyLmZpbmQoJ1tkYXRhLWJ1aWxkZXItZmllbGRdW25hbWU9XCJsb25naXR1ZGVcIl0nKS52YWwoKSApXHJcblx0XHRcdFx0XHRcdC5yZXBsYWNlKCAvXFx7em9vbVxcfS8sIHRoaXMuJHdyYXBwZXIuZmluZCgnW2RhdGEtYnVpbGRlci1maWVsZD1cInpvb21sZXZlbFwiXSBvcHRpb246c2VsZWN0ZWQnKS52YWwoKSApXHJcblx0XHRcdFx0XHRcdC5yZXBsYWNlKCAvXFx7em9vbUNvbnRyb2xcXH0vLCB6b29tQ29udHJvbCApXHJcblx0XHRcdFx0XHRcdC5yZXBsYWNlKCAvXFx7ZGlzYWJsZURvdWJsZUNsaWNrWm9vbVxcfS8sIHRoaXMuJHdyYXBwZXIuZmluZCgnW2RhdGEtYnVpbGRlci1maWVsZD1cImNsaWNrdG96b29tY29udHJvbFwiXSBvcHRpb246c2VsZWN0ZWQnKS52YWwoKSA9PT0gJ2ZhbHNlJyApXHJcblx0XHRcdFx0XHRcdC5yZXBsYWNlKCAvXFx7bWFwVHlwZUNvbnRyb2xcXH0vLCBtYXBUeXBlQ29udHJvbCApXHJcblx0XHRcdFx0XHRcdC5yZXBsYWNlKCAvXFx7c2NhbGVDb250cm9sXFx9LywgdGhpcy4kd3JhcHBlci5maW5kKCdbZGF0YS1idWlsZGVyLWZpZWxkPVwic2NhbGVjb250cm9sXCJdIG9wdGlvbjpzZWxlY3RlZCcpLnZhbCgpICE9PSAnZmFsc2UnIClcclxuXHRcdFx0XHRcdFx0LnJlcGxhY2UoIC9cXHtzY3JvbGx3aGVlbFxcfS8sIHRoaXMuJHdyYXBwZXIuZmluZCgnW2RhdGEtYnVpbGRlci1maWVsZD1cInNjcm9sbHdoZWVsY29udHJvbFwiXSBvcHRpb246c2VsZWN0ZWQnKS52YWwoKSAhPT0gJ2ZhbHNlJyApXHJcblx0XHRcdFx0XHRcdC5yZXBsYWNlKCAvXFx7cGFuQ29udHJvbFxcfS8sIHRoaXMuJHdyYXBwZXIuZmluZCgnW2RhdGEtYnVpbGRlci1maWVsZD1cInBhbmNvbnRyb2xcIl0gb3B0aW9uOnNlbGVjdGVkJykudmFsKCkgIT09ICdmYWxzZScgKVxyXG5cdFx0XHRcdFx0XHQucmVwbGFjZSggL1xce3N0cmVldFZpZXdDb250cm9sXFx9LywgdGhpcy4kd3JhcHBlci5maW5kKCdbZGF0YS1idWlsZGVyLWZpZWxkPVwic3RyZWV0dmlld2NvbnRyb2xcIl0gb3B0aW9uOnNlbGVjdGVkJykudmFsKCkgIT09ICdmYWxzZScgKVxyXG5cdFx0XHRcdFx0XHQucmVwbGFjZSggL1xce2RyYWdnYWJsZVxcfS8sIHRoaXMuJHdyYXBwZXIuZmluZCgnW2RhdGEtYnVpbGRlci1maWVsZD1cImRyYWdnYWJsZWNvbnRyb2xcIl0gb3B0aW9uOnNlbGVjdGVkJykudmFsKCkgIT09ICdmYWxzZScgKVxyXG5cdFx0XHRcdFx0XHQucmVwbGFjZSggL1xce292ZXJ2aWV3TWFwQ29udHJvbFxcfS8sIG92ZXJ2aWV3TWFwQ29udHJvbCAhPT0gJ2ZhbHNlJyApXHJcblx0XHRcdFx0XHRcdC5yZXBsYWNlKCAvXFx7bWFwVHlwZUlkXFx9LywgdGhpcy4kd3JhcHBlci5maW5kKCdbZGF0YS1idWlsZGVyLWZpZWxkPVwibWFwdHlwZVwiXSBvcHRpb246c2VsZWN0ZWQnKS52YWwoKS50b1VwcGVyQ2FzZSgpICk7XHJcblxyXG5cdFx0XHRpZiAoIHpvb21Db250cm9sICkge1xyXG5cdFx0XHRcdHdvcmsgPSB7XHJcblx0XHRcdFx0XHR6b29tQ29udHJvbE9wdGlvbnM6IHtcclxuXHRcdFx0XHRcdFx0c3R5bGU6IHRoaXMuJHdyYXBwZXIuZmluZCgnW2RhdGEtYnVpbGRlci1maWVsZD1cIm1hcHR5cGVjb250cm9sXCJdIG9wdGlvbjpzZWxlY3RlZCcpLnZhbCgpLnRvVXBwZXJDYXNlKClcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9O1xyXG5cdFx0XHRcdG91dHB1dCA9IG91dHB1dC5yZXBsYWNlKCAvXFx7em9vbUNvbnRyb2xPcHRpb25zXFx9LywgXCJ6b29tQ29udHJvbE9wdGlvbnM6IHtcXHJcXG4gICAgICAgICAgICAgICAgc3R5bGU6IGdvb2dsZS5tYXBzLlpvb21Db250cm9sU3R5bGUuXCIgKyB0aGlzLiR3cmFwcGVyLmZpbmQoJ1tkYXRhLWJ1aWxkZXItZmllbGQ9XCJ6b29tY29udHJvbFwiXSBvcHRpb246c2VsZWN0ZWQnKS52YWwoKS50b1VwcGVyQ2FzZSgpICsgXCJcXHJcXG5cXCAgICAgICAgICAgIH0sXCIpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdG91dHB1dCA9IG91dHB1dC5yZXBsYWNlKCAvXFx7em9vbUNvbnRyb2xPcHRpb25zXFx9LywgJycgKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYgKCBtYXBUeXBlQ29udHJvbCApIHtcclxuXHRcdFx0XHR3b3JrID0ge1xyXG5cdFx0XHRcdFx0em9vbUNvbnRyb2xPcHRpb25zOiB7XHJcblx0XHRcdFx0XHRcdHN0eWxlOiB0aGlzLiR3cmFwcGVyLmZpbmQoJ1tkYXRhLWJ1aWxkZXItZmllbGQ9XCJtYXB0eXBlY29udHJvbFwiXSBvcHRpb246c2VsZWN0ZWQnKS52YWwoKS50b1VwcGVyQ2FzZSgpXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fTtcclxuXHRcdFx0XHRvdXRwdXQgPSBvdXRwdXQucmVwbGFjZSggL1xce21hcFR5cGVDb250cm9sT3B0aW9uc1xcfS8sIFwibWFwVHlwZUNvbnRyb2xPcHRpb25zOiB7XFxyXFxuICAgICAgICAgICAgICAgIHN0eWxlOiBnb29nbGUubWFwcy5NYXBUeXBlQ29udHJvbFN0eWxlLlwiICsgdGhpcy4kd3JhcHBlci5maW5kKCdbZGF0YS1idWlsZGVyLWZpZWxkPVwibWFwdHlwZWNvbnRyb2xcIl0gb3B0aW9uOnNlbGVjdGVkJykudmFsKCkudG9VcHBlckNhc2UoKSArIFwiXFxyXFxuXFwgICAgICAgICAgICB9LFwiKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRvdXRwdXQgPSBvdXRwdXQucmVwbGFjZSggL1xce21hcFR5cGVDb250cm9sT3B0aW9uc1xcfS8sICcnICk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmICggb3ZlcnZpZXdNYXBDb250cm9sICE9PSAnZmFsc2UnICkge1xyXG5cdFx0XHRcdG91dHB1dCA9IG91dHB1dC5yZXBsYWNlKCAvXFx7b3ZlcnZpZXdNYXBDb250cm9sT3B0aW9uc1xcfS8sIFwib3ZlcnZpZXdNYXBDb250cm9sT3B0aW9uczoge1xcclxcbiAgICAgICAgICAgICAgICBvcGVuZWQ6IFwiICsgKG92ZXJ2aWV3TWFwQ29udHJvbCA9PT0gJ29wZW5lZCcpICsgXCJcXHJcXG5cXCAgICAgICAgICAgIH0sXCIpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdG91dHB1dCA9IG91dHB1dC5yZXBsYWNlKCAvXFx7b3ZlcnZpZXdNYXBDb250cm9sT3B0aW9uc1xcfS8sICcnICk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmICggJHRoZW1lQ29udHJvbC52YWwoKSAhPT0gJ2ZhbHNlJyApIHtcclxuXHRcdFx0XHRvdXRwdXQgPSBvdXRwdXQucmVwbGFjZSggL1xce3N0eWxlc1xcfS8sICcsXFxyXFxuICAgICAgICAgICAgc3R5bGVzOiAnICsgJHRoZW1lQ29udHJvbC5kYXRhKCAnanNvbicgKS5yZXBsYWNlKC9cXHJcXG4vZywgJycpICk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0b3V0cHV0ID0gb3V0cHV0LnJlcGxhY2UoIC9cXHtzdHlsZXNcXH0vLCAnJyApO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZiAoIHRoaXMubWFya2Vycy5sZW5ndGggPiAwICkge1xyXG5cdFx0XHRcdHZhciB3b3JrID0gWyAndmFyIGxvY2F0aW9ucyA9IFsnIF07XHJcblx0XHRcdFx0dmFyIG0sXHJcblx0XHRcdFx0XHRvYmplY3Q7XHJcblxyXG5cdFx0XHRcdGZvciggaSA9IDA7IGkgPCB0aGlzLm1hcmtlcnMubGVuZ3RoOyBpKysgKSB7XHJcblx0XHRcdFx0XHRtID0gdGhpcy5tYXJrZXJzWyBpIF07XHJcblx0XHRcdFx0XHRvYmplY3QgPSAnJztcclxuXHJcblx0XHRcdFx0XHRvYmplY3QgKz0gJyAgICAgICAgICAgIHsgbGF0OiAnICsgbS5sYXQgKyAnLCBsbmc6ICcgKyBtLmxuZztcclxuXHJcblx0XHRcdFx0XHRpZiAoICEhbS50aXRsZSApIHtcclxuXHRcdFx0XHRcdFx0b2JqZWN0ICs9ICcsIHRpdGxlOiBcIicgKyBtLnRpdGxlICsgJ1wiJztcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRpZiAoICEhbS5kZXNjcmlwdGlvbiApIHtcclxuXHRcdFx0XHRcdFx0b2JqZWN0ICs9ICcsIGRlc2NyaXB0aW9uOiBcIicgKyBtLmRlc2NyaXB0aW9uICsgJ1wiJztcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRvYmplY3QgKz0gJyB9JztcclxuXHJcblx0XHRcdFx0XHRpZiAoIGkgKyAxIDwgdGhpcy5tYXJrZXJzLmxlbmd0aCApIHtcclxuXHRcdFx0XHRcdFx0b2JqZWN0ICs9ICcsJztcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHR3b3JrLnB1c2goIG9iamVjdCApO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0d29yay5wdXNoKCAnICAgICAgICBdO1xcclxcbicgKVxyXG5cclxuXHRcdFx0XHR3b3JrLnB1c2goICcgICAgICAgIHZhciBvcHRzID0ge307JyApXHJcblx0XHRcdFx0d29yay5wdXNoKCAnICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxvY2F0aW9ucy5sZW5ndGg7IGkrKykgeycgKTtcclxuXHRcdFx0XHR3b3JrLnB1c2goICcgICAgICAgICAgICBvcHRzLnBvc2l0aW9uID0gbmV3IGdvb2dsZS5tYXBzLkxhdExuZyggbG9jYXRpb25zWyBpIF0ubGF0LCBsb2NhdGlvbnNbIGkgXS5sbmcgKTsnICk7XHJcblx0XHRcdFx0d29yay5wdXNoKCAnICAgICAgICAgICAgb3B0cy5tYXAgPSBtYXA7JyApO1xyXG5cdFx0XHRcdHdvcmsucHVzaCggJyAgICAgICAgICAgIGlmICggISFsb2NhdGlvbnNbIGkgXSAudGl0bGUgKSB7IG9wdHMudGl0bGUgPSBsb2NhdGlvbnNbIGkgXS50aXRsZTsgfScpO1xyXG5cdFx0XHRcdHdvcmsucHVzaCggJyAgICAgICAgICAgIGlmICggISFsb2NhdGlvbnNbIGkgXSAuZGVzY3JpcHRpb24gKSB7IG9wdHMuZGVzY3JpcHRpb24gPSBsb2NhdGlvbnNbIGkgXS5kZXNjcmlwdGlvbjsgfScpO1xyXG5cdFx0XHRcdHdvcmsucHVzaCggJyAgICAgICAgICAgIG1hcmtlciA9IG5ldyBnb29nbGUubWFwcy5NYXJrZXIoIG9wdHMgKTsnICk7XHJcblx0XHRcdFx0d29yay5wdXNoKCAnJyApO1xyXG5cdFx0XHRcdHdvcmsucHVzaCggJyAgICAgICAgICAgIChmdW5jdGlvbigpIHsnICk7XHJcblx0XHRcdFx0d29yay5wdXNoKCAnICAgICAgICAgICAgICAgIHZhciBodG1sID0gWycgKTtcclxuXHRcdFx0XHR3b3JrLnB1c2goICcgICAgICAgICAgICAgICAgXHRcXCc8ZGl2IHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjogI0ZGRjsgY29sb3I6ICMwMDA7IHBhZGRpbmc6IDVweDsgd2lkdGg6IDE1MHB4O1wiPlxcJywnICk7XHJcblx0XHRcdFx0d29yay5wdXNoKCAnICAgICAgICAgICAgICAgIFx0XHRcXCd7dGl0bGV9XFwnLCcgKTtcclxuXHRcdFx0XHR3b3JrLnB1c2goICcgICAgICAgICAgICAgICAgXHRcdFxcJ3tkZXNjcmlwdGlvbn1cXCcsJyApO1xyXG5cdFx0XHRcdHdvcmsucHVzaCggJyAgICAgICAgICAgICAgICBcdFxcJzwvZGl2PlxcJycgKTtcclxuXHRcdFx0XHR3b3JrLnB1c2goICcgICAgICAgICAgICAgICAgXS5qb2luKFxcJ1xcJyk7JyApO1xyXG5cclxuXHRcdFx0XHR3b3JrLnB1c2goICcnICk7XHJcblx0XHRcdFx0d29yay5wdXNoKCAnICAgICAgICAgICAgICAgIGh0bWwgPSBodG1sLnJlcGxhY2UoL1xce3RpdGxlXFx9LywgISFvcHRzLnRpdGxlID8gIChcIjxoND5cIiArIG9wdHMudGl0bGUgKyBcIjwvaDQ+XCIpIDogXCJcIiApOycgKTtcclxuXHRcdFx0XHR3b3JrLnB1c2goICcgICAgICAgICAgICAgICAgaHRtbCA9IGh0bWwucmVwbGFjZSgvXFx7ZGVzY3JpcHRpb25cXH0vLCAhIW9wdHMuZGVzY3JpcHRpb24gPyAgKFwiPHA+XCIgKyBvcHRzLmRlc2NyaXB0aW9uICsgXCI8L3A+XCIpIDogXCJcIiApOycgKTtcclxuXHJcblx0XHRcdFx0d29yay5wdXNoKCAnICAgICAgICAgICAgICAgIHZhciBpbmZvV2luZG93ID0gbmV3IGdvb2dsZS5tYXBzLkluZm9XaW5kb3coeyBjb250ZW50OiBodG1sIH0pOycgKTtcclxuXHJcblx0XHRcdFx0d29yay5wdXNoKCAnICAgICAgICAgICAgICAgIGdvb2dsZS5tYXBzLmV2ZW50LmFkZExpc3RlbmVyKCBtYXJrZXIsIFxcJ2NsaWNrXFwnLCBmdW5jdGlvbigpIHsnICk7XHJcblx0XHRcdFx0d29yay5wdXNoKCAnICAgICAgICAgICAgICAgIFx0aWYgKCBpbmZvV2luZG93LmlzT3BlbmVkICkgeycgKTtcclxuXHRcdFx0XHR3b3JrLnB1c2goICcgICAgICAgICAgICAgICAgXHRcdGluZm9XaW5kb3cuY2xvc2UoKTsnICk7XHJcblx0XHRcdFx0d29yay5wdXNoKCAnICAgICAgICAgICAgICAgIFx0XHRpbmZvV2luZG93LmlzT3BlbmVkID0gZmFsc2U7JyApO1xyXG5cdFx0XHRcdHdvcmsucHVzaCggJyAgICAgICAgICAgICAgICBcdH0gZWxzZSB7JyApO1xyXG5cdFx0XHRcdHdvcmsucHVzaCggJyAgICAgICAgICAgICAgICBcdFx0aW5mb1dpbmRvdy5vcGVuKCBtYXAsIHRoaXMgKTsnICk7XHJcblx0XHRcdFx0d29yay5wdXNoKCAnICAgICAgICAgICAgICAgIFx0XHRpbmZvV2luZG93LmlzT3BlbmVkID0gdHJ1ZTsnICk7XHJcblx0XHRcdFx0d29yay5wdXNoKCAnICAgICAgICAgICAgICAgIFx0fScgKTtcclxuXHRcdFx0XHR3b3JrLnB1c2goICcgICAgICAgICAgICAgICAgfSk7JyApO1xyXG5cdFx0XHRcdHdvcmsucHVzaCggJyAgICAgICAgICAgIH0pKCk7JyApXHJcblx0XHRcdFx0d29yay5wdXNoKCAnICAgICAgICB9Jyk7XHJcblxyXG5cdFx0XHRcdG91dHB1dCA9IG91dHB1dC5yZXBsYWNlKCAvXFx7bG9jYXRpb25zXFx9Lywgd29yay5qb2luKCdcXHJcXG4nKSApO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdG91dHB1dCA9IG91dHB1dC5yZXBsYWNlKCAvXFx7bG9jYXRpb25zXFx9LywgJycgKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Y29uc29sZS5sb2coIG91dHB1dCApO1xyXG5cclxuXHRcdFx0cmV0dXJuIG91dHB1dDtcclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHQvLyBleHBvc2VcclxuXHQkLmV4dGVuZCggdHJ1ZSwgdGhlbWUsIHtcclxuXHRcdE1hcHM6IHtcclxuXHRcdFx0R01hcEJ1aWxkZXI6IEdNYXBCdWlsZGVyXHJcblx0XHR9XHJcblx0fSk7XHJcblxyXG5cdC8vIGpRdWVyeSBwbHVnaW5cclxuXHQkLmZuLnRoZW1lR01hcEJ1aWxkZXIgPSBmdW5jdGlvbiggb3B0cyApIHtcclxuXHRcdHJldHVybiB0aGlzLm1hcChmdW5jdGlvbigpIHtcclxuXHRcdFx0dmFyICR0aGlzID0gJCggdGhpcyApLFxyXG5cdFx0XHRcdGluc3RhbmNlO1xyXG5cclxuXHRcdFx0aW5zdGFuY2UgPSAkdGhpcy5kYXRhKCBpbnN0YW5jZU5hbWUgKTtcclxuXHJcblx0XHRcdGlmICggaW5zdGFuY2UgKSB7XHJcblx0XHRcdFx0cmV0dXJuIGluc3RhbmNlO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHJldHVybiAobmV3IEdNYXBCdWlsZGVyKCAkdGhpcywgb3B0cyApKTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0fTtcclxuXHJcblx0Ly8gYXV0byBpbml0aWFsaXplXHJcblx0JChmdW5jdGlvbigpIHtcclxuXHRcdCQoJ1tkYXRhLXRoZW1lLWdtYXAtYnVpbGRlcl0nKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHR2YXIgJHRoaXMgPSAkKCB0aGlzICk7XHJcblxyXG5cdFx0XHR3aW5kb3cuYnVpbGRlciA9ICR0aGlzLnRoZW1lR01hcEJ1aWxkZXIoKTtcclxuXHRcdH0pO1xyXG5cdH0pO1xyXG5cclxufSkuYXBwbHkodGhpcywgW3dpbmRvdy50aGVtZSwgalF1ZXJ5XSk7XHJcblxyXG4vLyBNYXJrZG93blxyXG4oZnVuY3Rpb24odGhlbWUsICQpIHtcclxuXHJcblx0dGhlbWUgPSB0aGVtZSB8fCB7fTtcclxuXHJcblx0dmFyIGluc3RhbmNlTmFtZSA9ICdfX21hcmtkb3duRWRpdG9yJztcclxuXHJcblx0dmFyIFBsdWdpbk1hcmtkb3duRWRpdG9yID0gZnVuY3Rpb24oJGVsLCBvcHRzKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5pbml0aWFsaXplKCRlbCwgb3B0cyk7XHJcblx0fTtcclxuXHJcblx0UGx1Z2luTWFya2Rvd25FZGl0b3IuZGVmYXVsdHMgPSB7XHJcblx0XHRpY29ubGlicmFyeTogJ2ZhJyxcclxuXHRcdGJ1dHRvbnM6IFtcclxuXHRcdFx0W3tcclxuXHRcdFx0XHRkYXRhOiBbe1xyXG5cdFx0XHRcdFx0aWNvbjoge1xyXG5cdFx0XHRcdFx0XHRmYTogJ2ZhIGZhLWJvbGQnXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSwge1xyXG5cdFx0XHRcdFx0aWNvbjoge1xyXG5cdFx0XHRcdFx0XHRmYTogJ2ZhIGZhLWl0YWxpYydcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9LCB7XHJcblx0XHRcdFx0XHRpY29uOiB7XHJcblx0XHRcdFx0XHRcdGZhOiAnZmEgZmEtaGVhZGluZydcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XVxyXG5cdFx0XHR9LCB7XHJcblx0XHRcdFx0ZGF0YTogW3tcclxuXHRcdFx0XHRcdGljb246IHtcclxuXHRcdFx0XHRcdFx0ZmE6ICdmYSBmYS1saW5rJ1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0sIHtcclxuXHRcdFx0XHRcdGljb246IHtcclxuXHRcdFx0XHRcdFx0ZmE6ICdmYSBmYS1pbWFnZSdcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XVxyXG5cdFx0XHR9LCB7XHJcblx0XHRcdFx0ZGF0YTogW3tcclxuXHRcdFx0XHRcdFx0aWNvbjoge1xyXG5cdFx0XHRcdFx0XHRcdGZhOiAnZmEgZmEtbGlzdCdcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0aWNvbjoge1xyXG5cdFx0XHRcdFx0XHRcdGZhOiAnZmEgZmEtbGlzdC1vbCdcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0aWNvbjoge1xyXG5cdFx0XHRcdFx0XHRcdGZhOiAnZmEgZmEtY29kZSdcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0aWNvbjoge1xyXG5cdFx0XHRcdFx0XHRcdGZhOiAnZmEgZmEtcXVvdGUtbGVmdCdcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdF1cclxuXHRcdFx0fSwge1xyXG5cdFx0XHRcdGRhdGE6IFt7XHJcblx0XHRcdFx0XHRpY29uOiB7XHJcblx0XHRcdFx0XHRcdGZhOiAnZmEgZmEtc2VhcmNoJ1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1dXHJcblx0XHRcdH1dXHJcblx0XHRdXHJcblx0fTtcclxuXHJcblx0UGx1Z2luTWFya2Rvd25FZGl0b3IucHJvdG90eXBlID0ge1xyXG5cdFx0aW5pdGlhbGl6ZTogZnVuY3Rpb24oJGVsLCBvcHRzKSB7XHJcblx0XHRcdGlmICggJGVsLmRhdGEoIGluc3RhbmNlTmFtZSApICkge1xyXG5cdFx0XHRcdHJldHVybiB0aGlzO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHR0aGlzLiRlbCA9ICRlbDtcclxuXHJcblx0XHRcdHRoaXNcclxuXHRcdFx0XHQuc2V0RGF0YSgpXHJcblx0XHRcdFx0LnNldE9wdGlvbnMob3B0cylcclxuXHRcdFx0XHQuYnVpbGQoKTtcclxuXHJcblx0XHRcdHJldHVybiB0aGlzO1xyXG5cdFx0fSxcclxuXHJcblx0XHRzZXREYXRhOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0dGhpcy4kZWwuZGF0YShpbnN0YW5jZU5hbWUsIHRoaXMpO1xyXG5cclxuXHRcdFx0cmV0dXJuIHRoaXM7XHJcblx0XHR9LFxyXG5cclxuXHRcdHNldE9wdGlvbnM6IGZ1bmN0aW9uKG9wdHMpIHtcclxuXHRcdFx0dGhpcy5vcHRpb25zID0gJC5leHRlbmQoIHRydWUsIHt9LCBQbHVnaW5NYXJrZG93bkVkaXRvci5kZWZhdWx0cywgb3B0cyApO1xyXG5cclxuXHRcdFx0cmV0dXJuIHRoaXM7XHJcblx0XHR9LFxyXG5cclxuXHRcdGJ1aWxkOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0dGhpcy4kZWwubWFya2Rvd24oIHRoaXMub3B0aW9ucyApO1xyXG5cclxuXHRcdFx0cmV0dXJuIHRoaXM7XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblx0Ly8gZXhwb3NlIHRvIHNjb3BlXHJcblx0JC5leHRlbmQodGhlbWUsIHtcclxuXHRcdFBsdWdpbk1hcmtkb3duRWRpdG9yOiBQbHVnaW5NYXJrZG93bkVkaXRvclxyXG5cdH0pO1xyXG5cclxuXHQvLyBqcXVlcnkgcGx1Z2luXHJcblx0JC5mbi50aGVtZVBsdWdpbk1hcmtkb3duRWRpdG9yID0gZnVuY3Rpb24ob3B0cykge1xyXG5cdFx0cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpIHtcclxuXHRcdFx0dmFyICR0aGlzID0gJCh0aGlzKTtcclxuXHJcblx0XHRcdGlmICgkdGhpcy5kYXRhKGluc3RhbmNlTmFtZSkpIHtcclxuXHRcdFx0XHRyZXR1cm4gJHRoaXMuZGF0YShpbnN0YW5jZU5hbWUpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHJldHVybiBuZXcgUGx1Z2luTWFya2Rvd25FZGl0b3IoJHRoaXMsIG9wdHMpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxufSkuYXBwbHkodGhpcywgW3dpbmRvdy50aGVtZSwgalF1ZXJ5XSk7XHJcblxyXG4vLyBNYXNrZWQgSW5wdXRcclxuKGZ1bmN0aW9uKHRoZW1lLCAkKSB7XHJcblxyXG5cdHRoZW1lID0gdGhlbWUgfHwge307XHJcblxyXG5cdHZhciBpbnN0YW5jZU5hbWUgPSAnX19tYXNrZWRJbnB1dCc7XHJcblxyXG5cdHZhciBQbHVnaW5NYXNrZWRJbnB1dCA9IGZ1bmN0aW9uKCRlbCwgb3B0cykge1xyXG5cdFx0cmV0dXJuIHRoaXMuaW5pdGlhbGl6ZSgkZWwsIG9wdHMpO1xyXG5cdH07XHJcblxyXG5cdFBsdWdpbk1hc2tlZElucHV0LmRlZmF1bHRzID0ge1xyXG5cdH07XHJcblxyXG5cdFBsdWdpbk1hc2tlZElucHV0LnByb3RvdHlwZSA9IHtcclxuXHRcdGluaXRpYWxpemU6IGZ1bmN0aW9uKCRlbCwgb3B0cykge1xyXG5cdFx0XHRpZiAoICRlbC5kYXRhKCBpbnN0YW5jZU5hbWUgKSApIHtcclxuXHRcdFx0XHRyZXR1cm4gdGhpcztcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0dGhpcy4kZWwgPSAkZWw7XHJcblxyXG5cdFx0XHR0aGlzXHJcblx0XHRcdFx0LnNldERhdGEoKVxyXG5cdFx0XHRcdC5zZXRPcHRpb25zKG9wdHMpXHJcblx0XHRcdFx0LmJ1aWxkKCk7XHJcblxyXG5cdFx0XHRyZXR1cm4gdGhpcztcclxuXHRcdH0sXHJcblxyXG5cdFx0c2V0RGF0YTogZnVuY3Rpb24oKSB7XHJcblx0XHRcdHRoaXMuJGVsLmRhdGEoaW5zdGFuY2VOYW1lLCB0aGlzKTtcclxuXHJcblx0XHRcdHJldHVybiB0aGlzO1xyXG5cdFx0fSxcclxuXHJcblx0XHRzZXRPcHRpb25zOiBmdW5jdGlvbihvcHRzKSB7XHJcblx0XHRcdHRoaXMub3B0aW9ucyA9ICQuZXh0ZW5kKCB0cnVlLCB7fSwgUGx1Z2luTWFza2VkSW5wdXQuZGVmYXVsdHMsIG9wdHMgKTtcclxuXHJcblx0XHRcdHJldHVybiB0aGlzO1xyXG5cdFx0fSxcclxuXHJcblx0XHRidWlsZDogZnVuY3Rpb24oKSB7XHJcblx0XHRcdHRoaXMuJGVsLm1hc2soIHRoaXMuJGVsLmRhdGEoJ2lucHV0LW1hc2snKSwgdGhpcy5vcHRpb25zICk7XHJcblxyXG5cdFx0XHRyZXR1cm4gdGhpcztcclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHQvLyBleHBvc2UgdG8gc2NvcGVcclxuXHQkLmV4dGVuZCh0aGVtZSwge1xyXG5cdFx0UGx1Z2luTWFza2VkSW5wdXQ6IFBsdWdpbk1hc2tlZElucHV0XHJcblx0fSk7XHJcblxyXG5cdC8vIGpxdWVyeSBwbHVnaW5cclxuXHQkLmZuLnRoZW1lUGx1Z2luTWFza2VkSW5wdXQgPSBmdW5jdGlvbihvcHRzKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHR2YXIgJHRoaXMgPSAkKHRoaXMpO1xyXG5cclxuXHRcdFx0aWYgKCR0aGlzLmRhdGEoaW5zdGFuY2VOYW1lKSkge1xyXG5cdFx0XHRcdHJldHVybiAkdGhpcy5kYXRhKGluc3RhbmNlTmFtZSk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0cmV0dXJuIG5ldyBQbHVnaW5NYXNrZWRJbnB1dCgkdGhpcywgb3B0cyk7XHJcblx0XHRcdH1cclxuXHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG59KS5hcHBseSh0aGlzLCBbd2luZG93LnRoZW1lLCBqUXVlcnldKTtcclxuXHJcbi8vIE1heExlbmd0aFxyXG4oZnVuY3Rpb24odGhlbWUsICQpIHtcclxuXHJcblx0dGhlbWUgPSB0aGVtZSB8fCB7fTtcclxuXHJcblx0dmFyIGluc3RhbmNlTmFtZSA9ICdfX21heGxlbmd0aCc7XHJcblxyXG5cdHZhciBQbHVnaW5NYXhMZW5ndGggPSBmdW5jdGlvbigkZWwsIG9wdHMpIHtcclxuXHRcdHJldHVybiB0aGlzLmluaXRpYWxpemUoJGVsLCBvcHRzKTtcclxuXHR9O1xyXG5cclxuXHRQbHVnaW5NYXhMZW5ndGguZGVmYXVsdHMgPSB7XHJcblx0XHRhbHdheXNTaG93OiB0cnVlLFxyXG5cdFx0cGxhY2VtZW50OiAnYm90dG9tLWxlZnQnLFxyXG5cdFx0d2FybmluZ0NsYXNzOiAnYmFkZ2UgYmFkZ2Utc3VjY2VzcyBib3R0b20tbGVmdCcsXHJcblx0XHRsaW1pdFJlYWNoZWRDbGFzczogJ2JhZGdlIGJhZGdlLWRhbmdlciBib3R0b20tbGVmdCdcclxuXHR9O1xyXG5cclxuXHRQbHVnaW5NYXhMZW5ndGgucHJvdG90eXBlID0ge1xyXG5cdFx0aW5pdGlhbGl6ZTogZnVuY3Rpb24oJGVsLCBvcHRzKSB7XHJcblx0XHRcdGlmICggJGVsLmRhdGEoIGluc3RhbmNlTmFtZSApICkge1xyXG5cdFx0XHRcdHJldHVybiB0aGlzO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHR0aGlzLiRlbCA9ICRlbDtcclxuXHJcblx0XHRcdHRoaXNcclxuXHRcdFx0XHQuc2V0RGF0YSgpXHJcblx0XHRcdFx0LnNldE9wdGlvbnMob3B0cylcclxuXHRcdFx0XHQuYnVpbGQoKTtcclxuXHJcblx0XHRcdHJldHVybiB0aGlzO1xyXG5cdFx0fSxcclxuXHJcblx0XHRzZXREYXRhOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0dGhpcy4kZWwuZGF0YShpbnN0YW5jZU5hbWUsIHRoaXMpO1xyXG5cclxuXHRcdFx0cmV0dXJuIHRoaXM7XHJcblx0XHR9LFxyXG5cclxuXHRcdHNldE9wdGlvbnM6IGZ1bmN0aW9uKG9wdHMpIHtcclxuXHRcdFx0dGhpcy5vcHRpb25zID0gJC5leHRlbmQoIHRydWUsIHt9LCBQbHVnaW5NYXhMZW5ndGguZGVmYXVsdHMsIG9wdHMgKTtcclxuXHJcblx0XHRcdHJldHVybiB0aGlzO1xyXG5cdFx0fSxcclxuXHJcblx0XHRidWlsZDogZnVuY3Rpb24oKSB7XHJcblx0XHRcdHRoaXMuJGVsLm1heGxlbmd0aCggdGhpcy5vcHRpb25zICk7XHJcblxyXG5cdFx0XHR0aGlzLiRlbC5vbignYmx1cicsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdCQoJy5ib290c3RyYXAtbWF4bGVuZ3RoJykucmVtb3ZlKCk7XHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0cmV0dXJuIHRoaXM7XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblx0Ly8gZXhwb3NlIHRvIHNjb3BlXHJcblx0JC5leHRlbmQodGhlbWUsIHtcclxuXHRcdFBsdWdpbk1heExlbmd0aDogUGx1Z2luTWF4TGVuZ3RoXHJcblx0fSk7XHJcblxyXG5cdC8vIGpxdWVyeSBwbHVnaW5cclxuXHQkLmZuLnRoZW1lUGx1Z2luTWF4TGVuZ3RoID0gZnVuY3Rpb24ob3B0cykge1xyXG5cdFx0cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpIHtcclxuXHRcdFx0dmFyICR0aGlzID0gJCh0aGlzKTtcclxuXHJcblx0XHRcdGlmICgkdGhpcy5kYXRhKGluc3RhbmNlTmFtZSkpIHtcclxuXHRcdFx0XHRyZXR1cm4gJHRoaXMuZGF0YShpbnN0YW5jZU5hbWUpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHJldHVybiBuZXcgUGx1Z2luTWF4TGVuZ3RoKCR0aGlzLCBvcHRzKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcbn0pLmFwcGx5KHRoaXMsIFt3aW5kb3cudGhlbWUsIGpRdWVyeV0pO1xyXG5cclxuLy8gTXVsdGlTZWxlY3RcclxuKGZ1bmN0aW9uKHRoZW1lLCAkKSB7XHJcblxyXG5cdHRoZW1lID0gdGhlbWUgfHwge307XHJcblxyXG5cdHZhciBpbnN0YW5jZU5hbWUgPSAnX19tdWx0aXNlbGVjdCc7XHJcblxyXG5cdHZhciBQbHVnaW5NdWx0aVNlbGVjdCA9IGZ1bmN0aW9uKCRlbCwgb3B0cykge1xyXG5cdFx0cmV0dXJuIHRoaXMuaW5pdGlhbGl6ZSgkZWwsIG9wdHMpO1xyXG5cdH07XHJcblxyXG5cdFBsdWdpbk11bHRpU2VsZWN0LmRlZmF1bHRzID0ge1xyXG5cdFx0dGVtcGxhdGVzOiB7XHJcblx0XHRcdGxpOiAnPGxpPjxhIGNsYXNzPVwiZHJvcGRvd24taXRlbVwiIHRhYmluZGV4PVwiMFwiPjxsYWJlbCBzdHlsZT1cImRpc3BsYXk6IGJsb2NrO1wiPjwvbGFiZWw+PC9hPjwvbGk+JyxcclxuXHRcdFx0ZmlsdGVyOiAnPGRpdiBjbGFzcz1cImlucHV0LWdyb3VwXCI+PHNwYW4gY2xhc3M9XCJpbnB1dC1ncm91cC1wcmVwZW5kXCI+PHNwYW4gY2xhc3M9XCJpbnB1dC1ncm91cC10ZXh0XCI+PGkgY2xhc3M9XCJmYXMgZmEtc2VhcmNoXCI+PC9pPjwvc3Bhbj48L3NwYW4+PGlucHV0IGNsYXNzPVwiZm9ybS1jb250cm9sIG11bHRpc2VsZWN0LXNlYXJjaFwiIHR5cGU9XCJ0ZXh0XCI+PC9kaXY+J1xyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdFBsdWdpbk11bHRpU2VsZWN0LnByb3RvdHlwZSA9IHtcclxuXHRcdGluaXRpYWxpemU6IGZ1bmN0aW9uKCRlbCwgb3B0cykge1xyXG5cdFx0XHRpZiAoICRlbC5kYXRhKCBpbnN0YW5jZU5hbWUgKSApIHtcclxuXHRcdFx0XHRyZXR1cm4gdGhpcztcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0dGhpcy4kZWwgPSAkZWw7XHJcblxyXG5cdFx0XHR0aGlzXHJcblx0XHRcdFx0LnNldERhdGEoKVxyXG5cdFx0XHRcdC5zZXRPcHRpb25zKG9wdHMpXHJcblx0XHRcdFx0LmJ1aWxkKCk7XHJcblxyXG5cdFx0XHRyZXR1cm4gdGhpcztcclxuXHRcdH0sXHJcblxyXG5cdFx0c2V0RGF0YTogZnVuY3Rpb24oKSB7XHJcblx0XHRcdHRoaXMuJGVsLmRhdGEoaW5zdGFuY2VOYW1lLCB0aGlzKTtcclxuXHJcblx0XHRcdHJldHVybiB0aGlzO1xyXG5cdFx0fSxcclxuXHJcblx0XHRzZXRPcHRpb25zOiBmdW5jdGlvbihvcHRzKSB7XHJcblx0XHRcdHRoaXMub3B0aW9ucyA9ICQuZXh0ZW5kKCB0cnVlLCB7fSwgUGx1Z2luTXVsdGlTZWxlY3QuZGVmYXVsdHMsIG9wdHMgKTtcclxuXHJcblx0XHRcdHJldHVybiB0aGlzO1xyXG5cdFx0fSxcclxuXHJcblx0XHRidWlsZDogZnVuY3Rpb24oKSB7XHJcblx0XHRcdHRoaXMuJGVsLm11bHRpc2VsZWN0KCB0aGlzLm9wdGlvbnMgKTtcclxuXHJcblx0XHRcdHJldHVybiB0aGlzO1xyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdC8vIGV4cG9zZSB0byBzY29wZVxyXG5cdCQuZXh0ZW5kKHRoZW1lLCB7XHJcblx0XHRQbHVnaW5NdWx0aVNlbGVjdDogUGx1Z2luTXVsdGlTZWxlY3RcclxuXHR9KTtcclxuXHJcblx0Ly8ganF1ZXJ5IHBsdWdpblxyXG5cdCQuZm4udGhlbWVQbHVnaW5NdWx0aVNlbGVjdCA9IGZ1bmN0aW9uKG9wdHMpIHtcclxuXHRcdHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKSB7XHJcblx0XHRcdHZhciAkdGhpcyA9ICQodGhpcyk7XHJcblxyXG5cdFx0XHRpZiAoJHRoaXMuZGF0YShpbnN0YW5jZU5hbWUpKSB7XHJcblx0XHRcdFx0cmV0dXJuICR0aGlzLmRhdGEoaW5zdGFuY2VOYW1lKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRyZXR1cm4gbmV3IFBsdWdpbk11bHRpU2VsZWN0KCR0aGlzLCBvcHRzKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcbn0pLmFwcGx5KHRoaXMsIFt3aW5kb3cudGhlbWUsIGpRdWVyeV0pO1xyXG5cclxuLy8gTm90aWZpY2F0aW9ucyAtIENvbmZpZ1xyXG4oZnVuY3Rpb24oJCkge1xyXG5cclxuXHQndXNlIHN0cmljdCc7XHJcblxyXG5cdC8vIHVzZSBmb250IGF3ZXNvbWUgaWNvbnMgaWYgYXZhaWxhYmxlXHJcblx0aWYgKCB0eXBlb2YgUE5vdGlmeSAhPSAndW5kZWZpbmVkJyApIHtcclxuXHRcdFBOb3RpZnkucHJvdG90eXBlLm9wdGlvbnMuc3R5bGluZyA9IFwiZm9udGF3ZXNvbWVcIjtcclxuXHJcblx0XHQkLmV4dGVuZCh0cnVlLCBQTm90aWZ5LnByb3RvdHlwZS5vcHRpb25zLCB7XHJcblx0XHRcdHNoYWRvdzogZmFsc2UsXHJcblx0XHRcdHN0YWNrOiB7XHJcblx0XHRcdFx0c3BhY2luZzE6IDE1LFxyXG5cdCAgICAgICAgXHRzcGFjaW5nMjogMTVcclxuICAgICAgICBcdH1cclxuXHRcdH0pO1xyXG5cclxuXHRcdCQuZXh0ZW5kKFBOb3RpZnkuc3R5bGluZy5mb250YXdlc29tZSwge1xyXG5cdFx0XHQvLyBjbGFzc2VzXHJcblx0XHRcdGNvbnRhaW5lcjogXCJub3RpZmljYXRpb25cIixcclxuXHRcdFx0bm90aWNlOiBcIm5vdGlmaWNhdGlvbi13YXJuaW5nXCIsXHJcblx0XHRcdGluZm86IFwibm90aWZpY2F0aW9uLWluZm9cIixcclxuXHRcdFx0c3VjY2VzczogXCJub3RpZmljYXRpb24tc3VjY2Vzc1wiLFxyXG5cdFx0XHRlcnJvcjogXCJub3RpZmljYXRpb24tZGFuZ2VyXCIsXHJcblxyXG5cdFx0XHQvLyBpY29uc1xyXG5cdFx0XHRub3RpY2VfaWNvbjogXCJmYXMgZmEtZXhjbGFtYXRpb25cIixcclxuXHRcdFx0aW5mb19pY29uOiBcImZhcyBmYS1pbmZvXCIsXHJcblx0XHRcdHN1Y2Nlc3NfaWNvbjogXCJmYXMgZmEtY2hlY2tcIixcclxuXHRcdFx0ZXJyb3JfaWNvbjogXCJmYXMgZmEtdGltZXNcIlxyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxufSkuYXBwbHkodGhpcywgW2pRdWVyeV0pO1xyXG5cclxuLy8gUG9ydGxldHNcclxuKGZ1bmN0aW9uKHRoZW1lLCAkKSB7XHJcblxyXG5cdHRoZW1lID0gdGhlbWUgfHwge307XHJcblxyXG5cdHZhciBpbnN0YW5jZU5hbWUgPSAnX19wb3J0bGV0JyxcclxuXHRcdHN0b3JhZ2VPcmRlcktleSA9ICdfX3BvcnRsZXRPcmRlcicsXHJcblx0XHRzdG9yYWdlU3RhdGVLZXkgPSAnX19wb3J0bGV0U3RhdGUnO1xyXG5cclxuXHR2YXIgUGx1Z2luUG9ydGxldCA9IGZ1bmN0aW9uKCRlbCwgb3B0cykge1xyXG5cdFx0cmV0dXJuIHRoaXMuaW5pdGlhbGl6ZSgkZWwsIG9wdHMpO1xyXG5cdH07XHJcblxyXG5cdFBsdWdpblBvcnRsZXQuZGVmYXVsdHMgPSB7XHJcblx0XHRjb25uZWN0V2l0aDogJ1tkYXRhLXBsdWdpbi1wb3J0bGV0XScsXHJcblx0XHRpdGVtczogJ1tkYXRhLXBvcnRsZXQtaXRlbV0nLFxyXG5cdFx0aGFuZGxlOiAnLnBvcnRsZXQtaGFuZGxlcicsXHJcblx0XHRvcGFjaXR5OiAwLjcsXHJcblx0XHRwbGFjZWhvbGRlcjogJ3BvcnRsZXQtcGxhY2Vob2xkZXInLFxyXG5cdFx0Y2FuY2VsOiAncG9ydGxldC1jYW5jZWwnLFxyXG5cdFx0Zm9yY2VQbGFjZWhvbGRlclNpemU6IHRydWUsXHJcblx0XHRmb3JjZUhlbHBlclNpemU6IHRydWUsXHJcblx0XHR0b2xlcmFuY2U6ICdwb2ludGVyJyxcclxuXHRcdGhlbHBlcjogJ29yaWdpbmFsJyxcclxuXHRcdHJldmVydDogMjAwXHJcblx0fTtcclxuXHJcblx0UGx1Z2luUG9ydGxldC5wcm90b3R5cGUgPSB7XHJcblx0XHRpbml0aWFsaXplOiBmdW5jdGlvbigkZWwsIG9wdHMpIHtcclxuXHRcdFx0aWYgKCAkZWwuZGF0YSggaW5zdGFuY2VOYW1lICkgKSB7XHJcblx0XHRcdFx0cmV0dXJuIHRoaXM7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHRoaXMuJGVsID0gJGVsO1xyXG5cclxuXHRcdFx0dGhpc1xyXG5cdFx0XHRcdC5zZXREYXRhKClcclxuXHRcdFx0XHQuc2V0T3B0aW9ucyhvcHRzKVxyXG5cdFx0XHRcdC5idWlsZCgpO1xyXG5cclxuXHRcdFx0cmV0dXJuIHRoaXM7XHJcblx0XHR9LFxyXG5cclxuXHRcdHNldERhdGE6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHR0aGlzLiRlbC5kYXRhKGluc3RhbmNlTmFtZSwgdGhpcyk7XHJcblxyXG5cdFx0XHRyZXR1cm4gdGhpcztcclxuXHRcdH0sXHJcblxyXG5cdFx0c2V0T3B0aW9uczogZnVuY3Rpb24ob3B0cykge1xyXG5cdFx0XHR2YXIgX3NlbGYgPSB0aGlzO1xyXG5cclxuXHRcdFx0dGhpcy5vcHRpb25zID0gJC5leHRlbmQodHJ1ZSwge30sIFBsdWdpblBvcnRsZXQuZGVmYXVsdHMsIG9wdHMsIHtcclxuXHRcdFx0XHR3cmFwcGVyOiB0aGlzLiRlbCxcclxuXHRcdFx0XHR1cGRhdGU6IF9zZWxmLm9uVXBkYXRlLFxyXG5cdFx0XHRcdGNyZWF0ZTogX3NlbGYub25Mb2FkXHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0cmV0dXJuIHRoaXM7XHJcblx0XHR9LFxyXG5cclxuXHRcdG9uVXBkYXRlOiBmdW5jdGlvbihldmVudCwgdWkpIHtcclxuXHRcdFx0dmFyIGtleSA9IHN0b3JhZ2VPcmRlcktleSxcclxuXHRcdFx0XHRkYXRhID0gc3RvcmUuZ2V0KGtleSksXHJcblx0XHRcdFx0JHRoaXMgPSAkKHRoaXMpLFxyXG5cdFx0XHRcdHBvcmxldElkID0gJHRoaXMucHJvcCgnaWQnKTtcclxuXHJcblx0XHRcdGlmICghZGF0YSkge1xyXG5cdFx0XHRcdGRhdGEgPSB7fTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYgKCEhcG9ybGV0SWQpIHtcclxuXHRcdFx0XHRkYXRhW3BvcmxldElkXSA9ICR0aGlzLnNvcnRhYmxlKCd0b0FycmF5Jyk7XHJcblx0XHRcdFx0c3RvcmUuc2V0KGtleSwgZGF0YSk7XHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblxyXG5cdFx0b25Mb2FkOiBmdW5jdGlvbihldmVudCwgdWkpIHtcclxuXHRcdFx0dmFyIGtleSA9IHN0b3JhZ2VPcmRlcktleSxcclxuXHRcdFx0XHRkYXRhID0gc3RvcmUuZ2V0KGtleSksXHJcblx0XHRcdFx0JHRoaXMgPSAkKHRoaXMpLFxyXG5cdFx0XHRcdHBvcmxldElkID0gJHRoaXMucHJvcCgnaWQnKSxcclxuXHRcdFx0XHRwb3J0bGV0ID0gJCgnIycgKyBwb3JsZXRJZCk7XHJcblxyXG5cdFx0XHRpZiAoISFkYXRhKSB7XHJcblx0XHRcdFx0dmFyIGNhcmRzID0gZGF0YVtwb3JsZXRJZF07XHJcblxyXG5cdFx0XHRcdGlmICghIWNhcmRzKSB7XHJcblx0XHRcdFx0XHQkLmVhY2goY2FyZHMsIGZ1bmN0aW9uKGluZGV4LCBwYW5lbElkKSB7XHJcblx0XHRcdFx0XHRcdCQoJyMnICsgcGFuZWxJZCkuYXBwZW5kVG8ocG9ydGxldCk7XHJcblx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblxyXG5cdFx0c2F2ZVN0YXRlOiBmdW5jdGlvbiggcGFuZWwgKSB7XHJcblx0XHRcdHZhciBrZXkgPSBzdG9yYWdlU3RhdGVLZXksXHJcblx0XHRcdFx0ZGF0YSA9IHN0b3JlLmdldChrZXkpLFxyXG5cdFx0XHRcdHBhbmVsSWQgPSBwYW5lbC5wcm9wKCdpZCcpO1xyXG5cclxuXHRcdFx0aWYgKCFkYXRhKSB7XHJcblx0XHRcdFx0ZGF0YSA9IHt9O1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZiAoIXBhbmVsSWQpIHtcclxuXHRcdFx0XHRyZXR1cm4gdGhpcztcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0dmFyIGNvbGxhcHNlID0gcGFuZWwuZmluZCgnLmNhcmQtYWN0aW9ucycpLmNoaWxkcmVuKCdhLmZhLWNhcmV0LXVwLCBhLmZhLWNhcmV0LWRvd24nKSxcclxuXHRcdFx0XHRpc0NvbGxhcHNlZCA9ICEhY29sbGFwc2UuaGFzQ2xhc3MoJ2ZhLWNhcmV0LXVwJyksXHJcblx0XHRcdFx0aXNSZW1vdmVkID0gIXBhbmVsLmNsb3Nlc3QoJ2JvZHknKS5nZXQoMCk7XHJcblxyXG5cdFx0XHRpZiAoaXNSZW1vdmVkKSB7XHJcblx0XHRcdFx0ZGF0YVtwYW5lbElkXSA9ICdyZW1vdmVkJztcclxuXHRcdFx0fSBlbHNlIGlmIChpc0NvbGxhcHNlZCkge1xyXG5cdFx0XHRcdGRhdGFbcGFuZWxJZF0gPSAnY29sbGFwc2VkJztcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRkZWxldGUgZGF0YVtwYW5lbElkXTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0c3RvcmUuc2V0KGtleSwgZGF0YSk7XHJcblx0XHRcdHJldHVybiB0aGlzO1xyXG5cdFx0fSxcclxuXHJcblx0XHRsb2FkU3RhdGU6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHR2YXIga2V5ID0gc3RvcmFnZVN0YXRlS2V5LFxyXG5cdFx0XHRcdGRhdGEgPSBzdG9yZS5nZXQoa2V5KTtcclxuXHJcblx0XHRcdGlmICghIWRhdGEpIHtcclxuXHRcdFx0XHQkLmVhY2goZGF0YSwgZnVuY3Rpb24ocGFuZWxJZCwgc3RhdGUpIHtcclxuXHRcdFx0XHRcdHZhciBwYW5lbCA9ICQoJyMnICsgcGFuZWxJZCk7XHJcblx0XHRcdFx0XHRpZiAoIXBhbmVsLmRhdGEoJ3BvcnRsZXQtc3RhdGUtbG9hZGVkJykpIHtcclxuXHRcdFx0XHRcdFx0aWYgKHN0YXRlID09ICdjb2xsYXBzZWQnKSB7XHJcblx0XHRcdFx0XHRcdFx0cGFuZWwuZmluZCgnLmNhcmQtYWN0aW9ucyBhLmZhLWNhcmV0LWRvd24nKS50cmlnZ2VyKCdjbGljaycpO1xyXG5cdFx0XHRcdFx0XHR9IGVsc2UgaWYgKHN0YXRlID09ICdyZW1vdmVkJykge1xyXG5cdFx0XHRcdFx0XHRcdHBhbmVsLmZpbmQoJy5jYXJkLWFjdGlvbnMgYS5mYS10aW1lcycpLnRyaWdnZXIoJ2NsaWNrJyk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0cGFuZWwuZGF0YSgncG9ydGxldC1zdGF0ZS1sb2FkZWQnLCB0cnVlKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0cmV0dXJuIHRoaXM7XHJcblx0XHR9LFxyXG5cclxuXHRcdGJ1aWxkOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0dmFyIF9zZWxmID0gdGhpcztcclxuXHJcblx0XHRcdGlmICggJC5pc0Z1bmN0aW9uKCAkLmZuLnNvcnRhYmxlICkgKSB7XHJcblx0XHRcdFx0dGhpcy4kZWwuc29ydGFibGUoIHRoaXMub3B0aW9ucyApO1xyXG5cdFx0XHRcdHRoaXMuJGVsLmZpbmQoJ1tkYXRhLXBvcnRsZXQtaXRlbV0nKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0X3NlbGYuZXZlbnRzKCAkKHRoaXMpICk7XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHZhciBwb3J0bGV0ID0gdGhpcy4kZWw7XHJcblx0XHRcdHBvcnRsZXQuY3NzKCdtaW4taGVpZ2h0JywgMTUwKTtcclxuXHJcblx0XHRcdHJldHVybiB0aGlzO1xyXG5cdFx0fSxcclxuXHJcblx0XHRldmVudHM6IGZ1bmN0aW9uKCRlbCkge1xyXG5cdFx0XHR2YXIgX3NlbGYgPSB0aGlzLFxyXG5cdFx0XHRcdHBvcnRsZXQgPSAkZWwuY2xvc2VzdCgnW2RhdGEtcGx1Z2luLXBvcnRsZXRdJyk7XHJcblxyXG5cdFx0XHR0aGlzLmxvYWRTdGF0ZSgpO1xyXG5cclxuXHRcdFx0JGVsLmZpbmQoJy5jYXJkLWFjdGlvbnMnKS5vbiggJ2NsaWNrJywgJ2EuZmEtY2FyZXQtdXAsIGEuZmEtY2FyZXQtZG93biwgYS5mYS10aW1lcycsIGZ1bmN0aW9uKCBlICkge1xyXG5cdFx0XHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHRfc2VsZi5zYXZlU3RhdGUoICRlbCApO1xyXG5cdFx0XHRcdH0sIDI1MCk7XHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0cmV0dXJuIHRoaXM7XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblx0Ly8gZXhwb3NlIHRvIHNjb3BlXHJcblx0JC5leHRlbmQodGhlbWUsIHtcclxuXHRcdFBsdWdpblBvcnRsZXQ6IFBsdWdpblBvcnRsZXRcclxuXHR9KTtcclxuXHJcblx0Ly8ganF1ZXJ5IHBsdWdpblxyXG5cdCQuZm4udGhlbWVQbHVnaW5Qb3J0bGV0ID0gZnVuY3Rpb24ob3B0cykge1xyXG5cdFx0cmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHR2YXIgJHRoaXMgPSAkKHRoaXMpO1xyXG5cclxuXHRcdFx0aWYgKCR0aGlzLmRhdGEoaW5zdGFuY2VOYW1lKSkge1xyXG5cdFx0XHRcdHJldHVybiAkdGhpcy5kYXRhKGluc3RhbmNlTmFtZSk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0cmV0dXJuIG5ldyBQbHVnaW5Qb3J0bGV0KCR0aGlzLCBvcHRzKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcbn0pLmFwcGx5KHRoaXMsIFt3aW5kb3cudGhlbWUsIGpRdWVyeV0pO1xyXG5cclxuLy8gU2Nyb2xsIHRvIFRvcFxyXG4oZnVuY3Rpb24odGhlbWUsICQpIHtcclxuXHJcblx0dGhlbWUgPSB0aGVtZSB8fCB7fTtcclxuXHJcblx0JC5leHRlbmQodGhlbWUsIHtcclxuXHJcblx0XHRQbHVnaW5TY3JvbGxUb1RvcDoge1xyXG5cclxuXHRcdFx0ZGVmYXVsdHM6IHtcclxuXHRcdFx0XHR3cmFwcGVyOiAkKCdib2R5JyksXHJcblx0XHRcdFx0b2Zmc2V0OiAxNTAsXHJcblx0XHRcdFx0YnV0dG9uQ2xhc3M6ICdzY3JvbGwtdG8tdG9wJyxcclxuXHRcdFx0XHRpY29uQ2xhc3M6ICdmYXMgZmEtY2hldnJvbi11cCcsXHJcblx0XHRcdFx0ZGVsYXk6IDUwMCxcclxuXHRcdFx0XHR2aXNpYmxlTW9iaWxlOiBmYWxzZSxcclxuXHRcdFx0XHRsYWJlbDogZmFsc2VcclxuXHRcdFx0fSxcclxuXHJcblx0XHRcdGluaXRpYWxpemU6IGZ1bmN0aW9uKG9wdHMpIHtcclxuXHRcdFx0XHRpbml0aWFsaXplZCA9IHRydWU7XHJcblxyXG5cdFx0XHRcdHRoaXNcclxuXHRcdFx0XHRcdC5zZXRPcHRpb25zKG9wdHMpXHJcblx0XHRcdFx0XHQuYnVpbGQoKVxyXG5cdFx0XHRcdFx0LmV2ZW50cygpO1xyXG5cclxuXHRcdFx0XHRyZXR1cm4gdGhpcztcclxuXHRcdFx0fSxcclxuXHJcblx0XHRcdHNldE9wdGlvbnM6IGZ1bmN0aW9uKG9wdHMpIHtcclxuXHRcdFx0XHR0aGlzLm9wdGlvbnMgPSAkLmV4dGVuZCh0cnVlLCB7fSwgdGhpcy5kZWZhdWx0cywgb3B0cyk7XHJcblxyXG5cdFx0XHRcdHJldHVybiB0aGlzO1xyXG5cdFx0XHR9LFxyXG5cclxuXHRcdFx0YnVpbGQ6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdHZhciBzZWxmID0gdGhpcyxcclxuXHRcdFx0XHRcdCRlbDtcclxuXHJcblx0XHRcdFx0Ly8gQmFzZSBIVE1MIE1hcmt1cFxyXG5cdFx0XHRcdCRlbCA9ICQoJzxhIC8+JylcclxuXHRcdFx0XHRcdC5hZGRDbGFzcyhzZWxmLm9wdGlvbnMuYnV0dG9uQ2xhc3MpXHJcblx0XHRcdFx0XHQuYXR0cih7XHJcblx0XHRcdFx0XHRcdCdocmVmJzogJyMnLFxyXG5cdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdC5hcHBlbmQoXHJcblx0XHRcdFx0XHRcdCQoJzxpIC8+JylcclxuXHRcdFx0XHRcdFx0LmFkZENsYXNzKHNlbGYub3B0aW9ucy5pY29uQ2xhc3MpXHJcblx0XHRcdFx0KTtcclxuXHJcblx0XHRcdFx0Ly8gVmlzaWJsZSBNb2JpbGVcclxuXHRcdFx0XHRpZiAoIXNlbGYub3B0aW9ucy52aXNpYmxlTW9iaWxlKSB7XHJcblx0XHRcdFx0XHQkZWwuYWRkQ2xhc3MoJ2hpZGRlbi1tb2JpbGUnKTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdC8vIExhYmVsXHJcblx0XHRcdFx0aWYgKHNlbGYub3B0aW9ucy5sYWJlbCkge1xyXG5cdFx0XHRcdFx0JGVsLmFwcGVuZChcclxuXHRcdFx0XHRcdFx0JCgnPHNwYW4gLz4nKS5odG1sKHNlbGYub3B0aW9ucy5sYWJlbClcclxuXHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHR0aGlzLm9wdGlvbnMud3JhcHBlci5hcHBlbmQoJGVsKTtcclxuXHJcblx0XHRcdFx0dGhpcy4kZWwgPSAkZWw7XHJcblxyXG5cdFx0XHRcdHJldHVybiB0aGlzO1xyXG5cdFx0XHR9LFxyXG5cclxuXHRcdFx0ZXZlbnRzOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHR2YXIgc2VsZiA9IHRoaXMsXHJcblx0XHRcdFx0XHRfaXNTY3JvbGxpbmcgPSBmYWxzZTtcclxuXHJcblx0XHRcdFx0Ly8gQ2xpY2sgRWxlbWVudCBBY3Rpb25cclxuXHRcdFx0XHRzZWxmLiRlbC5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XHJcblx0XHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRcdFx0XHQkKCdib2R5LCBodG1sJykuYW5pbWF0ZSh7XHJcblx0XHRcdFx0XHRcdHNjcm9sbFRvcDogMFxyXG5cdFx0XHRcdFx0fSwgc2VsZi5vcHRpb25zLmRlbGF5KTtcclxuXHRcdFx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdFx0Ly8gU2hvdy9IaWRlIEJ1dHRvbiBvbiBXaW5kb3cgU2Nyb2xsIGV2ZW50LlxyXG5cdFx0XHRcdCQod2luZG93KS5zY3JvbGwoZnVuY3Rpb24oKSB7XHJcblxyXG5cdFx0XHRcdFx0aWYgKCFfaXNTY3JvbGxpbmcpIHtcclxuXHJcblx0XHRcdFx0XHRcdF9pc1Njcm9sbGluZyA9IHRydWU7XHJcblxyXG5cdFx0XHRcdFx0XHRpZiAoJCh3aW5kb3cpLnNjcm9sbFRvcCgpID4gc2VsZi5vcHRpb25zLm9mZnNldCkge1xyXG5cclxuXHRcdFx0XHRcdFx0XHRzZWxmLiRlbC5zdG9wKHRydWUsIHRydWUpLmFkZENsYXNzKCd2aXNpYmxlJyk7XHJcblx0XHRcdFx0XHRcdFx0X2lzU2Nyb2xsaW5nID0gZmFsc2U7XHJcblxyXG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cclxuXHRcdFx0XHRcdFx0XHRzZWxmLiRlbC5zdG9wKHRydWUsIHRydWUpLnJlbW92ZUNsYXNzKCd2aXNpYmxlJyk7XHJcblx0XHRcdFx0XHRcdFx0X2lzU2Nyb2xsaW5nID0gZmFsc2U7XHJcblxyXG5cdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdFx0cmV0dXJuIHRoaXM7XHJcblx0XHRcdH1cclxuXHJcblx0XHR9XHJcblxyXG5cdH0pO1xyXG5cclxufSkuYXBwbHkodGhpcywgW3dpbmRvdy50aGVtZSwgalF1ZXJ5XSk7XHJcblxyXG4vLyBTY3JvbGxhYmxlXHJcbihmdW5jdGlvbih0aGVtZSwgJCkge1xyXG5cclxuXHR0aGVtZSA9IHRoZW1lIHx8IHt9O1xyXG5cclxuXHR2YXIgaW5zdGFuY2VOYW1lID0gJ19fc2Nyb2xsYWJsZSc7XHJcblxyXG5cdHZhciBQbHVnaW5TY3JvbGxhYmxlID0gZnVuY3Rpb24oJGVsLCBvcHRzKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5pbml0aWFsaXplKCRlbCwgb3B0cyk7XHJcblx0fTtcclxuXHJcblx0UGx1Z2luU2Nyb2xsYWJsZS51cGRhdGVNb2RhbHMgPSBmdW5jdGlvbigpIHtcclxuXHRcdFBsdWdpblNjcm9sbGFibGUudXBkYXRlQm9vdHN0cmFwTW9kYWwoKTtcclxuXHR9O1xyXG5cclxuXHRQbHVnaW5TY3JvbGxhYmxlLnVwZGF0ZUJvb3RzdHJhcE1vZGFsID0gZnVuY3Rpb24oKSB7XHJcblx0XHR2YXIgdXBkYXRlQm9vc3RyYXBNb2RhbDtcclxuXHJcblx0XHR1cGRhdGVCb29zdHJhcE1vZGFsID0gdHlwZW9mICQuZm4ubW9kYWwgIT09ICd1bmRlZmluZWQnO1xyXG5cdFx0dXBkYXRlQm9vc3RyYXBNb2RhbCA9IHVwZGF0ZUJvb3N0cmFwTW9kYWwgJiYgdHlwZW9mICQuZm4ubW9kYWwuQ29uc3RydWN0b3IgIT09ICd1bmRlZmluZWQnO1xyXG5cdFx0dXBkYXRlQm9vc3RyYXBNb2RhbCA9IHVwZGF0ZUJvb3N0cmFwTW9kYWwgJiYgdHlwZW9mICQuZm4ubW9kYWwuQ29uc3RydWN0b3IucHJvdG90eXBlICE9PSAndW5kZWZpbmVkJztcclxuXHRcdHVwZGF0ZUJvb3N0cmFwTW9kYWwgPSB1cGRhdGVCb29zdHJhcE1vZGFsICYmIHR5cGVvZiAkLmZuLm1vZGFsLkNvbnN0cnVjdG9yLnByb3RvdHlwZS5lbmZvcmNlRm9jdXMgIT09ICd1bmRlZmluZWQnO1xyXG5cclxuXHRcdGlmICggIXVwZGF0ZUJvb3N0cmFwTW9kYWwgKSB7XHJcblx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdH1cclxuXHJcblx0XHR2YXIgb3JpZ2luYWxGb2N1cyA9ICQuZm4ubW9kYWwuQ29uc3RydWN0b3IucHJvdG90eXBlLmVuZm9yY2VGb2N1cztcclxuXHRcdCQuZm4ubW9kYWwuQ29uc3RydWN0b3IucHJvdG90eXBlLmVuZm9yY2VGb2N1cyA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRvcmlnaW5hbEZvY3VzLmFwcGx5KCB0aGlzICk7XHJcblxyXG5cdFx0XHR2YXIgJHNjcm9sbGFibGUgPSB0aGlzLiRlbGVtZW50LmZpbmQoJy5zY3JvbGxhYmxlJyk7XHJcblx0XHRcdGlmICggJHNjcm9sbGFibGUgKSB7XHJcblx0XHRcdFx0aWYgKCAkLmlzRnVuY3Rpb24oJC5mblsndGhlbWVQbHVnaW5TY3JvbGxhYmxlJ10pICApIHtcclxuXHRcdFx0XHRcdCRzY3JvbGxhYmxlLnRoZW1lUGx1Z2luU2Nyb2xsYWJsZSgpO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0aWYgKCAkLmlzRnVuY3Rpb24oJC5mblsnbmFub1Njcm9sbGVyJ10pICkge1xyXG5cdFx0XHRcdFx0JHNjcm9sbGFibGUubmFub1Njcm9sbGVyKCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9O1xyXG5cdH07XHJcblxyXG5cdFBsdWdpblNjcm9sbGFibGUuZGVmYXVsdHMgPSB7XHJcblx0XHRjb250ZW50Q2xhc3M6ICdzY3JvbGxhYmxlLWNvbnRlbnQnLFxyXG5cdFx0cGFuZUNsYXNzOiAnc2Nyb2xsYWJsZS1wYW5lJyxcclxuXHRcdHNsaWRlckNsYXNzOiAnc2Nyb2xsYWJsZS1zbGlkZXInLFxyXG5cdFx0YWx3YXlzVmlzaWJsZTogdHJ1ZSxcclxuXHRcdHByZXZlbnRQYWdlU2Nyb2xsaW5nOiB0cnVlXHJcblx0fTtcclxuXHJcblx0UGx1Z2luU2Nyb2xsYWJsZS5wcm90b3R5cGUgPSB7XHJcblx0XHRpbml0aWFsaXplOiBmdW5jdGlvbigkZWwsIG9wdHMpIHtcclxuXHRcdFx0aWYgKCAkZWwuZGF0YSggaW5zdGFuY2VOYW1lICkgKSB7XHJcblx0XHRcdFx0cmV0dXJuIHRoaXM7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHRoaXMuJGVsID0gJGVsO1xyXG5cclxuXHRcdFx0dGhpc1xyXG5cdFx0XHRcdC5zZXREYXRhKClcclxuXHRcdFx0XHQuc2V0T3B0aW9ucyhvcHRzKVxyXG5cdFx0XHRcdC5idWlsZCgpO1xyXG5cclxuXHRcdFx0cmV0dXJuIHRoaXM7XHJcblx0XHR9LFxyXG5cclxuXHRcdHNldERhdGE6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHR0aGlzLiRlbC5kYXRhKGluc3RhbmNlTmFtZSwgdGhpcyk7XHJcblxyXG5cdFx0XHRyZXR1cm4gdGhpcztcclxuXHRcdH0sXHJcblxyXG5cdFx0c2V0T3B0aW9uczogZnVuY3Rpb24ob3B0cykge1xyXG5cdFx0XHR0aGlzLm9wdGlvbnMgPSAkLmV4dGVuZCh0cnVlLCB7fSwgUGx1Z2luU2Nyb2xsYWJsZS5kZWZhdWx0cywgb3B0cywge1xyXG5cdFx0XHRcdHdyYXBwZXI6IHRoaXMuJGVsXHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0cmV0dXJuIHRoaXM7XHJcblx0XHR9LFxyXG5cclxuXHRcdGJ1aWxkOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0dGhpcy5vcHRpb25zLndyYXBwZXIubmFub1Njcm9sbGVyKHRoaXMub3B0aW9ucyk7XHJcblxyXG5cdFx0XHRyZXR1cm4gdGhpcztcclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHQvLyBleHBvc2UgdG8gc2NvcGVcclxuXHQkLmV4dGVuZCh0aGVtZSwge1xyXG5cdFx0UGx1Z2luU2Nyb2xsYWJsZTogUGx1Z2luU2Nyb2xsYWJsZVxyXG5cdH0pO1xyXG5cclxuXHQvLyBqcXVlcnkgcGx1Z2luXHJcblx0JC5mbi50aGVtZVBsdWdpblNjcm9sbGFibGUgPSBmdW5jdGlvbihvcHRzKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHR2YXIgJHRoaXMgPSAkKHRoaXMpO1xyXG5cclxuXHRcdFx0aWYgKCR0aGlzLmRhdGEoaW5zdGFuY2VOYW1lKSkge1xyXG5cdFx0XHRcdHJldHVybiAkdGhpcy5kYXRhKGluc3RhbmNlTmFtZSk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0cmV0dXJuIG5ldyBQbHVnaW5TY3JvbGxhYmxlKCR0aGlzLCBvcHRzKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdH0pO1xyXG5cdH07XHJcblxyXG5cdCQoZnVuY3Rpb24oKSB7XHJcblx0XHRQbHVnaW5TY3JvbGxhYmxlLnVwZGF0ZU1vZGFscygpO1xyXG5cdH0pO1xyXG5cclxufSkuYXBwbHkodGhpcywgW3dpbmRvdy50aGVtZSwgalF1ZXJ5XSk7XHJcblxyXG4vLyBTZWxlY3QyXHJcbihmdW5jdGlvbih0aGVtZSwgJCkge1xyXG5cclxuXHR0aGVtZSA9IHRoZW1lIHx8IHt9O1xyXG5cclxuXHR2YXIgaW5zdGFuY2VOYW1lID0gJ19fc2VsZWN0Mic7XHJcblxyXG5cdHZhciBQbHVnaW5TZWxlY3QyID0gZnVuY3Rpb24oJGVsLCBvcHRzKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5pbml0aWFsaXplKCRlbCwgb3B0cyk7XHJcblx0fTtcclxuXHJcblx0UGx1Z2luU2VsZWN0Mi5kZWZhdWx0cyA9IHtcclxuXHRcdHRoZW1lOiAnYm9vdHN0cmFwJ1xyXG5cdH07XHJcblxyXG5cdFBsdWdpblNlbGVjdDIucHJvdG90eXBlID0ge1xyXG5cdFx0aW5pdGlhbGl6ZTogZnVuY3Rpb24oJGVsLCBvcHRzKSB7XHJcblx0XHRcdGlmICggJGVsLmRhdGEoIGluc3RhbmNlTmFtZSApICkge1xyXG5cdFx0XHRcdHJldHVybiB0aGlzO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHR0aGlzLiRlbCA9ICRlbDtcclxuXHJcblx0XHRcdHRoaXNcclxuXHRcdFx0XHQuc2V0RGF0YSgpXHJcblx0XHRcdFx0LnNldE9wdGlvbnMob3B0cylcclxuXHRcdFx0XHQuYnVpbGQoKTtcclxuXHJcblx0XHRcdHJldHVybiB0aGlzO1xyXG5cdFx0fSxcclxuXHJcblx0XHRzZXREYXRhOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0dGhpcy4kZWwuZGF0YShpbnN0YW5jZU5hbWUsIHRoaXMpO1xyXG5cclxuXHRcdFx0cmV0dXJuIHRoaXM7XHJcblx0XHR9LFxyXG5cclxuXHRcdHNldE9wdGlvbnM6IGZ1bmN0aW9uKG9wdHMpIHtcclxuXHRcdFx0dGhpcy5vcHRpb25zID0gJC5leHRlbmQoIHRydWUsIHt9LCBQbHVnaW5TZWxlY3QyLmRlZmF1bHRzLCBvcHRzICk7XHJcblxyXG5cdFx0XHRyZXR1cm4gdGhpcztcclxuXHRcdH0sXHJcblxyXG5cdFx0YnVpbGQ6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHR0aGlzLiRlbC5zZWxlY3QyKCB0aGlzLm9wdGlvbnMgKTtcclxuXHJcblx0XHRcdHJldHVybiB0aGlzO1xyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdC8vIGV4cG9zZSB0byBzY29wZVxyXG5cdCQuZXh0ZW5kKHRoZW1lLCB7XHJcblx0XHRQbHVnaW5TZWxlY3QyOiBQbHVnaW5TZWxlY3QyXHJcblx0fSk7XHJcblxyXG5cdC8vIGpxdWVyeSBwbHVnaW5cclxuXHQkLmZuLnRoZW1lUGx1Z2luU2VsZWN0MiA9IGZ1bmN0aW9uKG9wdHMpIHtcclxuXHRcdHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKSB7XHJcblx0XHRcdHZhciAkdGhpcyA9ICQodGhpcyk7XHJcblxyXG5cdFx0XHRpZiAoJHRoaXMuZGF0YShpbnN0YW5jZU5hbWUpKSB7XHJcblx0XHRcdFx0cmV0dXJuICR0aGlzLmRhdGEoaW5zdGFuY2VOYW1lKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRyZXR1cm4gbmV3IFBsdWdpblNlbGVjdDIoJHRoaXMsIG9wdHMpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxufSkuYXBwbHkodGhpcywgW3dpbmRvdy50aGVtZSwgalF1ZXJ5XSk7XHJcblxyXG4vLyBTbGlkZXJcclxuKGZ1bmN0aW9uKHRoZW1lLCAkKSB7XHJcblxyXG5cdHRoZW1lID0gdGhlbWUgfHwge307XHJcblxyXG5cdHZhciBpbnN0YW5jZU5hbWUgPSAnX19zbGlkZXInO1xyXG5cclxuXHR2YXIgUGx1Z2luU2xpZGVyID0gZnVuY3Rpb24oJGVsLCBvcHRzKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5pbml0aWFsaXplKCRlbCwgb3B0cyk7XHJcblx0fTtcclxuXHJcblx0UGx1Z2luU2xpZGVyLmRlZmF1bHRzID0ge1xyXG5cclxuXHR9O1xyXG5cclxuXHRQbHVnaW5TbGlkZXIucHJvdG90eXBlID0ge1xyXG5cdFx0aW5pdGlhbGl6ZTogZnVuY3Rpb24oJGVsLCBvcHRzKSB7XHJcblx0XHRcdGlmICggJGVsLmRhdGEoIGluc3RhbmNlTmFtZSApICkge1xyXG5cdFx0XHRcdHJldHVybiB0aGlzO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHR0aGlzLiRlbCA9ICRlbDtcclxuXHJcblx0XHRcdHRoaXNcclxuXHRcdFx0XHQuc2V0VmFycygpXHJcblx0XHRcdFx0LnNldERhdGEoKVxyXG5cdFx0XHRcdC5zZXRPcHRpb25zKG9wdHMpXHJcblx0XHRcdFx0LmJ1aWxkKCk7XHJcblxyXG5cdFx0XHRyZXR1cm4gdGhpcztcclxuXHRcdH0sXHJcblxyXG5cdFx0c2V0VmFyczogZnVuY3Rpb24oKSB7XHJcblx0XHRcdHZhciAkb3V0cHV0ID0gJCggdGhpcy4kZWwuZGF0YSgncGx1Z2luLXNsaWRlci1vdXRwdXQnKSApO1xyXG5cdFx0XHR0aGlzLiRvdXRwdXQgPSAkb3V0cHV0LmdldCgwKSA/ICRvdXRwdXQgOiBudWxsO1xyXG5cclxuXHRcdFx0cmV0dXJuIHRoaXM7XHJcblx0XHR9LFxyXG5cclxuXHRcdHNldERhdGE6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHR0aGlzLiRlbC5kYXRhKGluc3RhbmNlTmFtZSwgdGhpcyk7XHJcblxyXG5cdFx0XHRyZXR1cm4gdGhpcztcclxuXHRcdH0sXHJcblxyXG5cdFx0c2V0T3B0aW9uczogZnVuY3Rpb24ob3B0cykge1xyXG5cdFx0XHR2YXIgX3NlbGYgPSB0aGlzO1xyXG5cdFx0XHR0aGlzLm9wdGlvbnMgPSAkLmV4dGVuZCggdHJ1ZSwge30sIFBsdWdpblNsaWRlci5kZWZhdWx0cywgb3B0cyApO1xyXG5cclxuXHRcdFx0aWYgKCB0aGlzLiRvdXRwdXQgKSB7XHJcblx0XHRcdFx0JC5leHRlbmQoIHRoaXMub3B0aW9ucywge1xyXG5cdFx0XHRcdFx0c2xpZGU6IGZ1bmN0aW9uKCBldmVudCwgdWkgKSB7XHJcblx0XHRcdFx0XHRcdF9zZWxmLm9uU2xpZGUoIGV2ZW50LCB1aSApO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRyZXR1cm4gdGhpcztcclxuXHRcdH0sXHJcblxyXG5cdFx0YnVpbGQ6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHR0aGlzLiRlbC5zbGlkZXIoIHRoaXMub3B0aW9ucyApO1xyXG5cclxuXHRcdFx0cmV0dXJuIHRoaXM7XHJcblx0XHR9LFxyXG5cclxuXHRcdG9uU2xpZGU6IGZ1bmN0aW9uKCBldmVudCwgdWkgKSB7XHJcblx0XHRcdGlmICggIXVpLnZhbHVlcyApIHtcclxuXHRcdFx0XHR0aGlzLiRvdXRwdXQudmFsKCB1aS52YWx1ZSApO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHRoaXMuJG91dHB1dC52YWwoIHVpLnZhbHVlc1sgMCBdICsgJy8nICsgdWkudmFsdWVzWyAxIF0gKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0dGhpcy4kb3V0cHV0LnRyaWdnZXIoJ2NoYW5nZScpO1xyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdC8vIGV4cG9zZSB0byBzY29wZVxyXG5cdCQuZXh0ZW5kKHRoZW1lLCB7XHJcblx0XHRQbHVnaW5TbGlkZXI6IFBsdWdpblNsaWRlclxyXG5cdH0pO1xyXG5cclxuXHQvLyBqcXVlcnkgcGx1Z2luXHJcblx0JC5mbi50aGVtZVBsdWdpblNsaWRlciA9IGZ1bmN0aW9uKG9wdHMpIHtcclxuXHRcdHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKSB7XHJcblx0XHRcdHZhciAkdGhpcyA9ICQodGhpcyk7XHJcblxyXG5cdFx0XHRpZiAoJHRoaXMuZGF0YShpbnN0YW5jZU5hbWUpKSB7XHJcblx0XHRcdFx0cmV0dXJuICR0aGlzLmRhdGEoaW5zdGFuY2VOYW1lKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRyZXR1cm4gbmV3IFBsdWdpblNsaWRlcigkdGhpcywgb3B0cyk7XHJcblx0XHRcdH1cclxuXHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG59KS5hcHBseSh0aGlzLCBbd2luZG93LnRoZW1lLCBqUXVlcnldKTtcclxuXHJcbi8vIFNwaW5uZXJcclxuKGZ1bmN0aW9uKHRoZW1lLCAkKSB7XHJcblxyXG5cdHRoZW1lID0gdGhlbWUgfHwge307XHJcblxyXG5cdHZhciBpbnN0YW5jZU5hbWUgPSAnX19zcGlubmVyJztcclxuXHJcblx0dmFyIFBsdWdpblNwaW5uZXIgPSBmdW5jdGlvbigkZWwsIG9wdHMpIHtcclxuXHRcdHJldHVybiB0aGlzLmluaXRpYWxpemUoJGVsLCBvcHRzKTtcclxuXHR9O1xyXG5cclxuXHRQbHVnaW5TcGlubmVyLmRlZmF1bHRzID0ge1xyXG5cdH07XHJcblxyXG5cdFBsdWdpblNwaW5uZXIucHJvdG90eXBlID0ge1xyXG5cdFx0aW5pdGlhbGl6ZTogZnVuY3Rpb24oJGVsLCBvcHRzKSB7XHJcblx0XHRcdGlmICggJGVsLmRhdGEoIGluc3RhbmNlTmFtZSApICkge1xyXG5cdFx0XHRcdHJldHVybiB0aGlzO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHR0aGlzLiRlbCA9ICRlbDtcclxuXHJcblx0XHRcdHRoaXNcclxuXHRcdFx0XHQuc2V0RGF0YSgpXHJcblx0XHRcdFx0LnNldE9wdGlvbnMob3B0cylcclxuXHRcdFx0XHQuYnVpbGQoKTtcclxuXHJcblx0XHRcdHJldHVybiB0aGlzO1xyXG5cdFx0fSxcclxuXHJcblx0XHRzZXREYXRhOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0dGhpcy4kZWwuZGF0YShpbnN0YW5jZU5hbWUsIHRoaXMpO1xyXG5cclxuXHRcdFx0cmV0dXJuIHRoaXM7XHJcblx0XHR9LFxyXG5cclxuXHRcdHNldE9wdGlvbnM6IGZ1bmN0aW9uKG9wdHMpIHtcclxuXHRcdFx0dGhpcy5vcHRpb25zID0gJC5leHRlbmQoIHRydWUsIHt9LCBQbHVnaW5TcGlubmVyLmRlZmF1bHRzLCBvcHRzICk7XHJcblxyXG5cdFx0XHRyZXR1cm4gdGhpcztcclxuXHRcdH0sXHJcblxyXG5cdFx0YnVpbGQ6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHR0aGlzLiRlbC5zcGlubmVyKCB0aGlzLm9wdGlvbnMgKTtcclxuXHJcblx0XHRcdHJldHVybiB0aGlzO1xyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdC8vIGV4cG9zZSB0byBzY29wZVxyXG5cdCQuZXh0ZW5kKHRoZW1lLCB7XHJcblx0XHRQbHVnaW5TcGlubmVyOiBQbHVnaW5TcGlubmVyXHJcblx0fSk7XHJcblxyXG5cdC8vIGpxdWVyeSBwbHVnaW5cclxuXHQkLmZuLnRoZW1lUGx1Z2luU3Bpbm5lciA9IGZ1bmN0aW9uKG9wdHMpIHtcclxuXHRcdHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKSB7XHJcblx0XHRcdHZhciAkdGhpcyA9ICQodGhpcyk7XHJcblxyXG5cdFx0XHRpZiAoJHRoaXMuZGF0YShpbnN0YW5jZU5hbWUpKSB7XHJcblx0XHRcdFx0cmV0dXJuICR0aGlzLmRhdGEoaW5zdGFuY2VOYW1lKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRyZXR1cm4gbmV3IFBsdWdpblNwaW5uZXIoJHRoaXMsIG9wdHMpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxufSkuYXBwbHkodGhpcywgW3dpbmRvdy50aGVtZSwgalF1ZXJ5XSk7XHJcblxyXG4vLyBTdW1tZXJOb3RlXHJcbihmdW5jdGlvbih0aGVtZSwgJCkge1xyXG5cclxuXHR0aGVtZSA9IHRoZW1lIHx8IHt9O1xyXG5cclxuXHR2YXIgaW5zdGFuY2VOYW1lID0gJ19fc3VtbWVybm90ZSc7XHJcblxyXG5cdHZhciBQbHVnaW5TdW1tZXJOb3RlID0gZnVuY3Rpb24oJGVsLCBvcHRzKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5pbml0aWFsaXplKCRlbCwgb3B0cyk7XHJcblx0fTtcclxuXHJcblx0UGx1Z2luU3VtbWVyTm90ZS5kZWZhdWx0cyA9IHtcclxuXHRcdG9uZm9jdXM6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHQkKCB0aGlzICkuY2xvc2VzdCggJy5ub3RlLWVkaXRvcicgKS5hZGRDbGFzcyggJ2FjdGl2ZScgKTtcclxuXHRcdH0sXHJcblx0XHRvbmJsdXI6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHQkKCB0aGlzICkuY2xvc2VzdCggJy5ub3RlLWVkaXRvcicgKS5yZW1vdmVDbGFzcyggJ2FjdGl2ZScgKTtcclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHRQbHVnaW5TdW1tZXJOb3RlLnByb3RvdHlwZSA9IHtcclxuXHRcdGluaXRpYWxpemU6IGZ1bmN0aW9uKCRlbCwgb3B0cykge1xyXG5cdFx0XHRpZiAoICRlbC5kYXRhKCBpbnN0YW5jZU5hbWUgKSApIHtcclxuXHRcdFx0XHRyZXR1cm4gdGhpcztcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0dGhpcy4kZWwgPSAkZWw7XHJcblxyXG5cdFx0XHR0aGlzXHJcblx0XHRcdFx0LnNldERhdGEoKVxyXG5cdFx0XHRcdC5zZXRPcHRpb25zKG9wdHMpXHJcblx0XHRcdFx0LmJ1aWxkKCk7XHJcblxyXG5cdFx0XHRyZXR1cm4gdGhpcztcclxuXHRcdH0sXHJcblxyXG5cdFx0c2V0RGF0YTogZnVuY3Rpb24oKSB7XHJcblx0XHRcdHRoaXMuJGVsLmRhdGEoaW5zdGFuY2VOYW1lLCB0aGlzKTtcclxuXHJcblx0XHRcdHJldHVybiB0aGlzO1xyXG5cdFx0fSxcclxuXHJcblx0XHRzZXRPcHRpb25zOiBmdW5jdGlvbihvcHRzKSB7XHJcblx0XHRcdHRoaXMub3B0aW9ucyA9ICQuZXh0ZW5kKCB0cnVlLCB7fSwgUGx1Z2luU3VtbWVyTm90ZS5kZWZhdWx0cywgb3B0cyApO1xyXG5cclxuXHRcdFx0cmV0dXJuIHRoaXM7XHJcblx0XHR9LFxyXG5cclxuXHRcdGJ1aWxkOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0dGhpcy4kZWwuc3VtbWVybm90ZSggdGhpcy5vcHRpb25zICk7XHJcblxyXG5cdFx0XHRyZXR1cm4gdGhpcztcclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHQvLyBleHBvc2UgdG8gc2NvcGVcclxuXHQkLmV4dGVuZCh0aGVtZSwge1xyXG5cdFx0UGx1Z2luU3VtbWVyTm90ZTogUGx1Z2luU3VtbWVyTm90ZVxyXG5cdH0pO1xyXG5cclxuXHQvLyBqcXVlcnkgcGx1Z2luXHJcblx0JC5mbi50aGVtZVBsdWdpblN1bW1lck5vdGUgPSBmdW5jdGlvbihvcHRzKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHR2YXIgJHRoaXMgPSAkKHRoaXMpO1xyXG5cclxuXHRcdFx0aWYgKCR0aGlzLmRhdGEoaW5zdGFuY2VOYW1lKSkge1xyXG5cdFx0XHRcdHJldHVybiAkdGhpcy5kYXRhKGluc3RhbmNlTmFtZSk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0cmV0dXJuIG5ldyBQbHVnaW5TdW1tZXJOb3RlKCR0aGlzLCBvcHRzKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcbn0pLmFwcGx5KHRoaXMsIFt3aW5kb3cudGhlbWUsIGpRdWVyeV0pO1xyXG5cclxuLy8gVGV4dEFyZWEgQXV0b1NpemVcclxuKGZ1bmN0aW9uKHRoZW1lLCAkKSB7XHJcblxyXG5cdHRoZW1lID0gdGhlbWUgfHwge307XHJcblxyXG5cdHZhciBpbml0aWFsaXplZCA9IGZhbHNlO1xyXG5cdHZhciBpbnN0YW5jZU5hbWUgPSAnX190ZXh0YXJlYUF1dG9zaXplJztcclxuXHJcblx0dmFyIFBsdWdpblRleHRBcmVhQXV0b1NpemUgPSBmdW5jdGlvbigkZWwsIG9wdHMpIHtcclxuXHRcdHJldHVybiB0aGlzLmluaXRpYWxpemUoJGVsLCBvcHRzKTtcclxuXHR9O1xyXG5cclxuXHRQbHVnaW5UZXh0QXJlYUF1dG9TaXplLmRlZmF1bHRzID0ge1xyXG5cdH07XHJcblxyXG5cdFBsdWdpblRleHRBcmVhQXV0b1NpemUucHJvdG90eXBlID0ge1xyXG5cdFx0aW5pdGlhbGl6ZTogZnVuY3Rpb24oJGVsLCBvcHRzKSB7XHJcblx0XHRcdGlmIChpbml0aWFsaXplZCkge1xyXG5cdFx0XHRcdHJldHVybiB0aGlzO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHR0aGlzLiRlbCA9ICRlbDtcclxuXHJcblx0XHRcdHRoaXNcclxuXHRcdFx0XHQuc2V0RGF0YSgpXHJcblx0XHRcdFx0LnNldE9wdGlvbnMob3B0cylcclxuXHRcdFx0XHQuYnVpbGQoKTtcclxuXHJcblx0XHRcdHJldHVybiB0aGlzO1xyXG5cdFx0fSxcclxuXHJcblx0XHRzZXREYXRhOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0dGhpcy4kZWwuZGF0YShpbnN0YW5jZU5hbWUsIHRoaXMpO1xyXG5cclxuXHRcdFx0cmV0dXJuIHRoaXM7XHJcblx0XHR9LFxyXG5cclxuXHRcdHNldE9wdGlvbnM6IGZ1bmN0aW9uKG9wdHMpIHtcclxuXHRcdFx0dGhpcy5vcHRpb25zID0gJC5leHRlbmQoIHRydWUsIHt9LCBQbHVnaW5UZXh0QXJlYUF1dG9TaXplLmRlZmF1bHRzLCBvcHRzICk7XHJcblxyXG5cdFx0XHRyZXR1cm4gdGhpcztcclxuXHRcdH0sXHJcblxyXG5cdFx0YnVpbGQ6IGZ1bmN0aW9uKCkge1xyXG5cclxuXHRcdFx0YXV0b3NpemUoJCh0aGlzLiRlbCkpO1xyXG5cclxuXHRcdFx0cmV0dXJuIHRoaXM7XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblx0Ly8gZXhwb3NlIHRvIHNjb3BlXHJcblx0JC5leHRlbmQodGhlbWUsIHtcclxuXHRcdFBsdWdpblRleHRBcmVhQXV0b1NpemU6IFBsdWdpblRleHRBcmVhQXV0b1NpemVcclxuXHR9KTtcclxuXHJcblx0Ly8ganF1ZXJ5IHBsdWdpblxyXG5cdCQuZm4udGhlbWVQbHVnaW5UZXh0QXJlYUF1dG9TaXplID0gZnVuY3Rpb24ob3B0cykge1xyXG5cdFx0cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpIHtcclxuXHRcdFx0dmFyICR0aGlzID0gJCh0aGlzKTtcclxuXHJcblx0XHRcdGlmICgkdGhpcy5kYXRhKGluc3RhbmNlTmFtZSkpIHtcclxuXHRcdFx0XHRyZXR1cm4gJHRoaXMuZGF0YShpbnN0YW5jZU5hbWUpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHJldHVybiBuZXcgUGx1Z2luVGV4dEFyZWFBdXRvU2l6ZSgkdGhpcywgb3B0cyk7XHJcblx0XHRcdH1cclxuXHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG59KS5hcHBseSh0aGlzLCBbd2luZG93LnRoZW1lLCBqUXVlcnldKTtcclxuXHJcbi8vIFRpbWVQaWNrZXJcclxuKGZ1bmN0aW9uKHRoZW1lLCAkKSB7XHJcblxyXG5cdHRoZW1lID0gdGhlbWUgfHwge307XHJcblxyXG5cdHZhciBpbnN0YW5jZU5hbWUgPSAnX190aW1lcGlja2VyJztcclxuXHJcblx0dmFyIFBsdWdpblRpbWVQaWNrZXIgPSBmdW5jdGlvbigkZWwsIG9wdHMpIHtcclxuXHRcdHJldHVybiB0aGlzLmluaXRpYWxpemUoJGVsLCBvcHRzKTtcclxuXHR9O1xyXG5cclxuXHRQbHVnaW5UaW1lUGlja2VyLmRlZmF1bHRzID0ge1xyXG5cdFx0ZGlzYWJsZU1vdXNld2hlZWw6IHRydWUsXHJcblx0XHRpY29uczoge1xyXG5cdFx0XHR1cDogJ2ZhcyBmYS1jaGV2cm9uLXVwJyxcclxuXHRcdFx0ZG93bjogJ2ZhcyBmYS1jaGV2cm9uLWRvd24nXHJcblx0XHR9XHJcblx0fTtcclxuXHJcblx0UGx1Z2luVGltZVBpY2tlci5wcm90b3R5cGUgPSB7XHJcblx0XHRpbml0aWFsaXplOiBmdW5jdGlvbigkZWwsIG9wdHMpIHtcclxuXHRcdFx0aWYgKCAkZWwuZGF0YSggaW5zdGFuY2VOYW1lICkgKSB7XHJcblx0XHRcdFx0cmV0dXJuIHRoaXM7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHRoaXMuJGVsID0gJGVsO1xyXG5cclxuXHRcdFx0dGhpc1xyXG5cdFx0XHRcdC5zZXREYXRhKClcclxuXHRcdFx0XHQuc2V0T3B0aW9ucyhvcHRzKVxyXG5cdFx0XHRcdC5idWlsZCgpO1xyXG5cclxuXHRcdFx0cmV0dXJuIHRoaXM7XHJcblx0XHR9LFxyXG5cclxuXHRcdHNldERhdGE6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHR0aGlzLiRlbC5kYXRhKGluc3RhbmNlTmFtZSwgdGhpcyk7XHJcblxyXG5cdFx0XHRyZXR1cm4gdGhpcztcclxuXHRcdH0sXHJcblxyXG5cdFx0c2V0T3B0aW9uczogZnVuY3Rpb24ob3B0cykge1xyXG5cdFx0XHR0aGlzLm9wdGlvbnMgPSAkLmV4dGVuZCggdHJ1ZSwge30sIFBsdWdpblRpbWVQaWNrZXIuZGVmYXVsdHMsIG9wdHMgKTtcclxuXHJcblx0XHRcdHJldHVybiB0aGlzO1xyXG5cdFx0fSxcclxuXHJcblx0XHRidWlsZDogZnVuY3Rpb24oKSB7XHJcblx0XHRcdHRoaXMuJGVsLnRpbWVwaWNrZXIoIHRoaXMub3B0aW9ucyApO1xyXG5cclxuXHRcdFx0cmV0dXJuIHRoaXM7XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblx0Ly8gZXhwb3NlIHRvIHNjb3BlXHJcblx0JC5leHRlbmQodGhlbWUsIHtcclxuXHRcdFBsdWdpblRpbWVQaWNrZXI6IFBsdWdpblRpbWVQaWNrZXJcclxuXHR9KTtcclxuXHJcblx0Ly8ganF1ZXJ5IHBsdWdpblxyXG5cdCQuZm4udGhlbWVQbHVnaW5UaW1lUGlja2VyID0gZnVuY3Rpb24ob3B0cykge1xyXG5cdFx0cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpIHtcclxuXHRcdFx0dmFyICR0aGlzID0gJCh0aGlzKTtcclxuXHJcblx0XHRcdGlmICgkdGhpcy5kYXRhKGluc3RhbmNlTmFtZSkpIHtcclxuXHRcdFx0XHRyZXR1cm4gJHRoaXMuZGF0YShpbnN0YW5jZU5hbWUpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHJldHVybiBuZXcgUGx1Z2luVGltZVBpY2tlcigkdGhpcywgb3B0cyk7XHJcblx0XHRcdH1cclxuXHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG59KS5hcHBseSh0aGlzLCBbd2luZG93LnRoZW1lLCBqUXVlcnldKTtcclxuXHJcbi8vIFRvZ2dsZVxyXG4oZnVuY3Rpb24odGhlbWUsICQpIHtcclxuXHJcblx0dGhlbWUgPSB0aGVtZSB8fCB7fTtcclxuXHJcblx0dmFyIGluc3RhbmNlTmFtZSA9ICdfX3RvZ2dsZSc7XHJcblxyXG5cdHZhciBQbHVnaW5Ub2dnbGUgPSBmdW5jdGlvbigkZWwsIG9wdHMpIHtcclxuXHRcdHJldHVybiB0aGlzLmluaXRpYWxpemUoJGVsLCBvcHRzKTtcclxuXHR9O1xyXG5cclxuXHRQbHVnaW5Ub2dnbGUuZGVmYXVsdHMgPSB7XHJcblx0XHRkdXJhdGlvbjogMzUwLFxyXG5cdFx0aXNBY2NvcmRpb246IGZhbHNlLFxyXG5cdFx0YWRkSWNvbnM6IHRydWVcclxuXHR9O1xyXG5cclxuXHRQbHVnaW5Ub2dnbGUucHJvdG90eXBlID0ge1xyXG5cdFx0aW5pdGlhbGl6ZTogZnVuY3Rpb24oJGVsLCBvcHRzKSB7XHJcblx0XHRcdGlmICggJGVsLmRhdGEoIGluc3RhbmNlTmFtZSApICkge1xyXG5cdFx0XHRcdHJldHVybiB0aGlzO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHR0aGlzLiRlbCA9ICRlbDtcclxuXHJcblx0XHRcdHRoaXNcclxuXHRcdFx0XHQuc2V0RGF0YSgpXHJcblx0XHRcdFx0LnNldE9wdGlvbnMob3B0cylcclxuXHRcdFx0XHQuYnVpbGQoKTtcclxuXHJcblx0XHRcdHJldHVybiB0aGlzO1xyXG5cdFx0fSxcclxuXHJcblx0XHRzZXREYXRhOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0dGhpcy4kZWwuZGF0YShpbnN0YW5jZU5hbWUsIHRoaXMpO1xyXG5cclxuXHRcdFx0cmV0dXJuIHRoaXM7XHJcblx0XHR9LFxyXG5cclxuXHRcdHNldE9wdGlvbnM6IGZ1bmN0aW9uKG9wdHMpIHtcclxuXHRcdFx0dGhpcy5vcHRpb25zID0gJC5leHRlbmQodHJ1ZSwge30sIFBsdWdpblRvZ2dsZS5kZWZhdWx0cywgb3B0cywge1xyXG5cdFx0XHRcdHdyYXBwZXI6IHRoaXMuJGVsXHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0cmV0dXJuIHRoaXM7XHJcblx0XHR9LFxyXG5cclxuXHRcdGJ1aWxkOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0dmFyIHNlbGYgPSB0aGlzLFxyXG5cdFx0XHRcdCR3cmFwcGVyID0gdGhpcy5vcHRpb25zLndyYXBwZXIsXHJcblx0XHRcdFx0JGl0ZW1zID0gJHdyYXBwZXIuZmluZCgnLnRvZ2dsZScpLFxyXG5cdFx0XHRcdCRlbCA9IG51bGw7XHJcblxyXG5cdFx0XHQkaXRlbXMuZWFjaChmdW5jdGlvbigpIHtcclxuXHRcdFx0XHQkZWwgPSAkKHRoaXMpO1xyXG5cclxuXHRcdFx0XHRpZihzZWxmLm9wdGlvbnMuYWRkSWNvbnMpIHtcclxuXHRcdFx0XHRcdCRlbC5maW5kKCc+IGxhYmVsJykucHJlcGVuZChcclxuXHRcdFx0XHRcdFx0JCgnPGkgLz4nKS5hZGRDbGFzcygnZmFzIGZhLXBsdXMnKSxcclxuXHRcdFx0XHRcdFx0JCgnPGkgLz4nKS5hZGRDbGFzcygnZmFzIGZhLW1pbnVzJylcclxuXHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRpZigkZWwuaGFzQ2xhc3MoJ2FjdGl2ZScpKSB7XHJcblx0XHRcdFx0XHQkZWwuZmluZCgnPiBwJykuYWRkQ2xhc3MoJ3ByZXZpZXctYWN0aXZlJyk7XHJcblx0XHRcdFx0XHQkZWwuZmluZCgnPiAudG9nZ2xlLWNvbnRlbnQnKS5zbGlkZURvd24oc2VsZi5vcHRpb25zLmR1cmF0aW9uKTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdHNlbGYuZXZlbnRzKCRlbCk7XHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0aWYoc2VsZi5vcHRpb25zLmlzQWNjb3JkaW9uKSB7XHJcblx0XHRcdFx0c2VsZi5vcHRpb25zLmR1cmF0aW9uID0gc2VsZi5vcHRpb25zLmR1cmF0aW9uLzI7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHJldHVybiB0aGlzO1xyXG5cdFx0fSxcclxuXHJcblx0XHRldmVudHM6IGZ1bmN0aW9uKCRlbCkge1xyXG5cdFx0XHR2YXIgc2VsZiA9IHRoaXMsXHJcblx0XHRcdFx0cHJldmlld1BhckN1cnJlbnRIZWlnaHQgPSAwLFxyXG5cdFx0XHRcdHByZXZpZXdQYXJBbmltYXRlSGVpZ2h0ID0gMCxcclxuXHRcdFx0XHR0b2dnbGVDb250ZW50ID0gbnVsbDtcclxuXHJcblx0XHRcdCRlbC5maW5kKCc+IGxhYmVsJykuY2xpY2soZnVuY3Rpb24oZSkge1xyXG5cclxuXHRcdFx0XHR2YXIgJHRoaXMgPSAkKHRoaXMpLFxyXG5cdFx0XHRcdFx0cGFyZW50U2VjdGlvbiA9ICR0aGlzLnBhcmVudCgpLFxyXG5cdFx0XHRcdFx0cGFyZW50V3JhcHBlciA9ICR0aGlzLnBhcmVudHMoJy50b2dnbGUnKSxcclxuXHRcdFx0XHRcdHByZXZpZXdQYXIgPSBudWxsLFxyXG5cdFx0XHRcdFx0Y2xvc2VFbGVtZW50ID0gbnVsbDtcclxuXHJcblx0XHRcdFx0aWYoc2VsZi5vcHRpb25zLmlzQWNjb3JkaW9uICYmIHR5cGVvZihlLm9yaWdpbmFsRXZlbnQpICE9ICd1bmRlZmluZWQnKSB7XHJcblx0XHRcdFx0XHRjbG9zZUVsZW1lbnQgPSBwYXJlbnRXcmFwcGVyLmZpbmQoJy50b2dnbGUuYWN0aXZlID4gbGFiZWwnKTtcclxuXHJcblx0XHRcdFx0XHRpZihjbG9zZUVsZW1lbnRbMF0gPT0gJHRoaXNbMF0pIHtcclxuXHRcdFx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0cGFyZW50U2VjdGlvbi50b2dnbGVDbGFzcygnYWN0aXZlJyk7XHJcblxyXG5cdFx0XHRcdC8vIFByZXZpZXcgUGFyYWdyYXBoXHJcblx0XHRcdFx0aWYocGFyZW50U2VjdGlvbi5maW5kKCc+IHAnKS5nZXQoMCkpIHtcclxuXHJcblx0XHRcdFx0XHRwcmV2aWV3UGFyID0gcGFyZW50U2VjdGlvbi5maW5kKCc+IHAnKTtcclxuXHRcdFx0XHRcdHByZXZpZXdQYXJDdXJyZW50SGVpZ2h0ID0gcHJldmlld1Bhci5jc3MoJ2hlaWdodCcpO1xyXG5cdFx0XHRcdFx0cHJldmlld1Bhci5jc3MoJ2hlaWdodCcsICdhdXRvJyk7XHJcblx0XHRcdFx0XHRwcmV2aWV3UGFyQW5pbWF0ZUhlaWdodCA9IHByZXZpZXdQYXIuY3NzKCdoZWlnaHQnKTtcclxuXHRcdFx0XHRcdHByZXZpZXdQYXIuY3NzKCdoZWlnaHQnLCBwcmV2aWV3UGFyQ3VycmVudEhlaWdodCk7XHJcblxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0Ly8gQ29udGVudFxyXG5cdFx0XHRcdHRvZ2dsZUNvbnRlbnQgPSBwYXJlbnRTZWN0aW9uLmZpbmQoJz4gLnRvZ2dsZS1jb250ZW50Jyk7XHJcblxyXG5cdFx0XHRcdGlmKHBhcmVudFNlY3Rpb24uaGFzQ2xhc3MoJ2FjdGl2ZScpKSB7XHJcblxyXG5cdFx0XHRcdFx0JChwcmV2aWV3UGFyKS5hbmltYXRlKHtcclxuXHRcdFx0XHRcdFx0aGVpZ2h0OiBwcmV2aWV3UGFyQW5pbWF0ZUhlaWdodFxyXG5cdFx0XHRcdFx0fSwgc2VsZi5vcHRpb25zLmR1cmF0aW9uLCBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdFx0JCh0aGlzKS5hZGRDbGFzcygncHJldmlldy1hY3RpdmUnKTtcclxuXHRcdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0XHRcdHRvZ2dsZUNvbnRlbnQuc2xpZGVEb3duKHNlbGYub3B0aW9ucy5kdXJhdGlvbiwgZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHRcdGlmKGNsb3NlRWxlbWVudCkge1xyXG5cdFx0XHRcdFx0XHRcdGNsb3NlRWxlbWVudC50cmlnZ2VyKCdjbGljaycpO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHJcblx0XHRcdFx0XHQkKHByZXZpZXdQYXIpLmFuaW1hdGUoe1xyXG5cdFx0XHRcdFx0XHRoZWlnaHQ6IDBcclxuXHRcdFx0XHRcdH0sIHNlbGYub3B0aW9ucy5kdXJhdGlvbiwgZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHRcdCQodGhpcykucmVtb3ZlQ2xhc3MoJ3ByZXZpZXctYWN0aXZlJyk7XHJcblx0XHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdFx0XHR0b2dnbGVDb250ZW50LnNsaWRlVXAoc2VsZi5vcHRpb25zLmR1cmF0aW9uKTtcclxuXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblx0Ly8gZXhwb3NlIHRvIHNjb3BlXHJcblx0JC5leHRlbmQodGhlbWUsIHtcclxuXHRcdFBsdWdpblRvZ2dsZTogUGx1Z2luVG9nZ2xlXHJcblx0fSk7XHJcblxyXG5cdC8vIGpxdWVyeSBwbHVnaW5cclxuXHQkLmZuLnRoZW1lUGx1Z2luVG9nZ2xlID0gZnVuY3Rpb24ob3B0cykge1xyXG5cdFx0cmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHR2YXIgJHRoaXMgPSAkKHRoaXMpO1xyXG5cclxuXHRcdFx0aWYgKCR0aGlzLmRhdGEoaW5zdGFuY2VOYW1lKSkge1xyXG5cdFx0XHRcdHJldHVybiAkdGhpcy5kYXRhKGluc3RhbmNlTmFtZSk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0cmV0dXJuIG5ldyBQbHVnaW5Ub2dnbGUoJHRoaXMsIG9wdHMpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxufSkuYXBwbHkodGhpcywgW3dpbmRvdy50aGVtZSwgalF1ZXJ5XSk7XHJcblxyXG4vLyBXaWRnZXQgLSBUb2RvXHJcbihmdW5jdGlvbih0aGVtZSwgJCkge1xyXG5cclxuXHR0aGVtZSA9IHRoZW1lIHx8IHt9O1xyXG5cclxuXHR2YXIgaW5zdGFuY2VOYW1lID0gJ19fd2lkZ2V0VG9kb0xpc3QnO1xyXG5cclxuXHR2YXIgV2lkZ2V0VG9kb0xpc3QgPSBmdW5jdGlvbigkZWwsIG9wdHMpIHtcclxuXHRcdHJldHVybiB0aGlzLmluaXRpYWxpemUoJGVsLCBvcHRzKTtcclxuXHR9O1xyXG5cclxuXHRXaWRnZXRUb2RvTGlzdC5kZWZhdWx0cyA9IHtcclxuXHR9O1xyXG5cclxuXHRXaWRnZXRUb2RvTGlzdC5wcm90b3R5cGUgPSB7XHJcblx0XHRpbml0aWFsaXplOiBmdW5jdGlvbigkZWwsIG9wdHMpIHtcclxuXHRcdFx0aWYgKCAkZWwuZGF0YSggaW5zdGFuY2VOYW1lICkgKSB7XHJcblx0XHRcdFx0cmV0dXJuIHRoaXM7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHRoaXMuJGVsID0gJGVsO1xyXG5cclxuXHRcdFx0dGhpc1xyXG5cdFx0XHRcdC5zZXREYXRhKClcclxuXHRcdFx0XHQuc2V0T3B0aW9ucyhvcHRzKVxyXG5cdFx0XHRcdC5idWlsZCgpXHJcblx0XHRcdFx0LmV2ZW50cygpO1xyXG5cclxuXHRcdFx0cmV0dXJuIHRoaXM7XHJcblx0XHR9LFxyXG5cclxuXHRcdHNldERhdGE6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHR0aGlzLiRlbC5kYXRhKGluc3RhbmNlTmFtZSwgdGhpcyk7XHJcblxyXG5cdFx0XHRyZXR1cm4gdGhpcztcclxuXHRcdH0sXHJcblxyXG5cdFx0c2V0T3B0aW9uczogZnVuY3Rpb24ob3B0cykge1xyXG5cdFx0XHR0aGlzLm9wdGlvbnMgPSAkLmV4dGVuZCggdHJ1ZSwge30sIFdpZGdldFRvZG9MaXN0LmRlZmF1bHRzLCBvcHRzICk7XHJcblxyXG5cdFx0XHRyZXR1cm4gdGhpcztcclxuXHRcdH0sXHJcblxyXG5cdFx0Y2hlY2s6IGZ1bmN0aW9uKCBpbnB1dCwgbGFiZWwgKSB7XHJcblx0XHRcdGlmICggaW5wdXQuaXMoJzpjaGVja2VkJykgKSB7XHJcblx0XHRcdFx0bGFiZWwuYWRkQ2xhc3MoJ2xpbmUtdGhyb3VnaCcpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdGxhYmVsLnJlbW92ZUNsYXNzKCdsaW5lLXRocm91Z2gnKTtcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHJcblx0XHRidWlsZDogZnVuY3Rpb24oKSB7XHJcblx0XHRcdHZhciBfc2VsZiA9IHRoaXMsXHJcblx0XHRcdFx0JGNoZWNrID0gdGhpcy4kZWwuZmluZCgnLnRvZG8tY2hlY2snKTtcclxuXHJcblx0XHRcdCRjaGVjay5lYWNoKGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0XHR2YXIgbGFiZWwgPSAkKHRoaXMpLmNsb3Nlc3QoJ2xpJykuZmluZCgnLnRvZG8tbGFiZWwnKTtcclxuXHRcdFx0XHRfc2VsZi5jaGVjayggJCh0aGlzKSwgbGFiZWwgKTtcclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0XHRyZXR1cm4gdGhpcztcclxuXHRcdH0sXHJcblxyXG5cdFx0ZXZlbnRzOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0dmFyIF9zZWxmID0gdGhpcyxcclxuXHRcdFx0XHQkcmVtb3ZlID0gdGhpcy4kZWwuZmluZCggJy50b2RvLXJlbW92ZScgKSxcclxuXHRcdFx0XHQkY2hlY2sgPSB0aGlzLiRlbC5maW5kKCcudG9kby1jaGVjaycpLFxyXG5cdFx0XHRcdCR3aW5kb3cgPSAkKCB3aW5kb3cgKTtcclxuXHJcblx0XHRcdCRyZW1vdmUub24oJ2NsaWNrLndpZGdldC10b2RvLWxpc3QnLCBmdW5jdGlvbiggZXYgKSB7XHJcblx0XHRcdFx0ZXYucHJldmVudERlZmF1bHQoKTtcclxuXHRcdFx0XHQkKHRoaXMpLmNsb3Nlc3QoXCJsaVwiKS5yZW1vdmUoKTtcclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0XHQkY2hlY2sub24oJ2NoYW5nZScsIGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0XHR2YXIgbGFiZWwgPSAkKHRoaXMpLmNsb3Nlc3QoJ2xpJykuZmluZCgnLnRvZG8tbGFiZWwnKTtcclxuXHRcdFx0XHRfc2VsZi5jaGVjayggJCh0aGlzKSwgbGFiZWwgKTtcclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0XHRpZiAoICQuaXNGdW5jdGlvbiggJC5mbi5zb3J0YWJsZSApICkge1xyXG5cdFx0XHRcdHRoaXMuJGVsLnNvcnRhYmxlKHtcclxuXHRcdFx0XHRcdHNvcnQ6IGZ1bmN0aW9uKGV2ZW50LCB1aSkge1xyXG5cdFx0XHRcdFx0XHR2YXIgdG9wID0gZXZlbnQucGFnZVkgLSBfc2VsZi4kZWwub2Zmc2V0KCkudG9wIC0gKHVpLmhlbHBlci5vdXRlckhlaWdodCh0cnVlKSAvIDIpO1xyXG5cdFx0XHRcdFx0XHR1aS5oZWxwZXIuY3NzKHsndG9wJyA6IHRvcCArICdweCd9KTtcclxuXHRcdFx0XHQgICAgfVxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRyZXR1cm4gdGhpcztcclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHQvLyBleHBvc2UgdG8gc2NvcGVcclxuXHQkLmV4dGVuZCh0aGVtZSwge1xyXG5cdFx0V2lkZ2V0VG9kb0xpc3Q6IFdpZGdldFRvZG9MaXN0XHJcblx0fSk7XHJcblxyXG5cdC8vIGpxdWVyeSBwbHVnaW5cclxuXHQkLmZuLnRoZW1lUGx1Z2luV2lkZ2V0VG9kb0xpc3QgPSBmdW5jdGlvbihvcHRzKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHR2YXIgJHRoaXMgPSAkKHRoaXMpO1xyXG5cclxuXHRcdFx0aWYgKCR0aGlzLmRhdGEoaW5zdGFuY2VOYW1lKSkge1xyXG5cdFx0XHRcdHJldHVybiAkdGhpcy5kYXRhKGluc3RhbmNlTmFtZSk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0cmV0dXJuIG5ldyBXaWRnZXRUb2RvTGlzdCgkdGhpcywgb3B0cyk7XHJcblx0XHRcdH1cclxuXHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG59KS5hcHBseSh0aGlzLCBbd2luZG93LnRoZW1lLCBqUXVlcnldKTtcclxuXHJcbi8vIFdpZGdldCAtIFRvZ2dsZVxyXG4oZnVuY3Rpb24odGhlbWUsICQpIHtcclxuXHJcblx0dGhlbWUgPSB0aGVtZSB8fCB7fTtcclxuXHJcblx0dmFyIGluc3RhbmNlTmFtZSA9ICdfX3dpZGdldFRvZ2dsZUV4cGFuZCc7XHJcblxyXG5cdHZhciBXaWRnZXRUb2dnbGVFeHBhbmQgPSBmdW5jdGlvbigkZWwsIG9wdHMpIHtcclxuXHRcdHJldHVybiB0aGlzLmluaXRpYWxpemUoJGVsLCBvcHRzKTtcclxuXHR9O1xyXG5cclxuXHRXaWRnZXRUb2dnbGVFeHBhbmQuZGVmYXVsdHMgPSB7XHJcblx0fTtcclxuXHJcblx0V2lkZ2V0VG9nZ2xlRXhwYW5kLnByb3RvdHlwZSA9IHtcclxuXHRcdGluaXRpYWxpemU6IGZ1bmN0aW9uKCRlbCwgb3B0cykge1xyXG5cdFx0XHRpZiAoICRlbC5kYXRhKCBpbnN0YW5jZU5hbWUgKSApIHtcclxuXHRcdFx0XHRyZXR1cm4gdGhpcztcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0dGhpcy4kZWwgPSAkZWw7XHJcblxyXG5cdFx0XHR0aGlzXHJcblx0XHRcdFx0LnNldERhdGEoKVxyXG5cdFx0XHRcdC5zZXRPcHRpb25zKG9wdHMpXHJcblx0XHRcdFx0LmJ1aWxkKClcclxuXHRcdFx0XHQuZXZlbnRzKCk7XHJcblxyXG5cdFx0XHRyZXR1cm4gdGhpcztcclxuXHRcdH0sXHJcblxyXG5cdFx0c2V0RGF0YTogZnVuY3Rpb24oKSB7XHJcblx0XHRcdHRoaXMuJGVsLmRhdGEoaW5zdGFuY2VOYW1lLCB0aGlzKTtcclxuXHJcblx0XHRcdHJldHVybiB0aGlzO1xyXG5cdFx0fSxcclxuXHJcblx0XHRzZXRPcHRpb25zOiBmdW5jdGlvbihvcHRzKSB7XHJcblx0XHRcdHRoaXMub3B0aW9ucyA9ICQuZXh0ZW5kKCB0cnVlLCB7fSwgV2lkZ2V0VG9nZ2xlRXhwYW5kLmRlZmF1bHRzLCBvcHRzICk7XHJcblxyXG5cdFx0XHRyZXR1cm4gdGhpcztcclxuXHRcdH0sXHJcblxyXG5cdFx0YnVpbGQ6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRyZXR1cm4gdGhpcztcclxuXHRcdH0sXHJcblxyXG5cdFx0ZXZlbnRzOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0dmFyIF9zZWxmID0gdGhpcyxcclxuXHRcdFx0XHQkdG9nZ2xlciA9IHRoaXMuJGVsLmZpbmQoICcud2lkZ2V0LXRvZ2dsZScgKTtcclxuXHJcblx0XHRcdCR0b2dnbGVyLm9uKCdjbGljay53aWRnZXQtdG9nZ2xlcicsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdF9zZWxmLiRlbC5oYXNDbGFzcygnd2lkZ2V0LWNvbGxhcHNlZCcpID8gX3NlbGYuZXhwYW5kKCBfc2VsZi4kZWwgKSA6IF9zZWxmLmNvbGxhcHNlKCBfc2VsZi4kZWwgKTtcclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0XHRyZXR1cm4gdGhpcztcclxuXHRcdH0sXHJcblxyXG5cdFx0ZXhwYW5kOiBmdW5jdGlvbiggY29udGVudCApIHtcclxuXHRcdFx0Y29udGVudC5jaGlsZHJlbiggJy53aWRnZXQtY29udGVudC1leHBhbmRlZCcgKS5zbGlkZURvd24oICdmYXN0JywgZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0JCh0aGlzKS5jc3MoICdkaXNwbGF5JywgJycgKTtcclxuXHRcdFx0XHRjb250ZW50LnJlbW92ZUNsYXNzKCAnd2lkZ2V0LWNvbGxhcHNlZCcgKTtcclxuXHRcdFx0fSk7XHJcblx0XHR9LFxyXG5cclxuXHRcdGNvbGxhcHNlOiBmdW5jdGlvbiggY29udGVudCApIHtcclxuXHRcdFx0Y29udGVudC5jaGlsZHJlbignLndpZGdldC1jb250ZW50LWV4cGFuZGVkJyApLnNsaWRlVXAoICdmYXN0JywgZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0Y29udGVudC5hZGRDbGFzcyggJ3dpZGdldC1jb2xsYXBzZWQnICk7XHJcblx0XHRcdFx0JCh0aGlzKS5jc3MoICdkaXNwbGF5JywgJycgKTtcclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblx0Ly8gZXhwb3NlIHRvIHNjb3BlXHJcblx0JC5leHRlbmQodGhlbWUsIHtcclxuXHRcdFdpZGdldFRvZ2dsZUV4cGFuZDogV2lkZ2V0VG9nZ2xlRXhwYW5kXHJcblx0fSk7XHJcblxyXG5cdC8vIGpxdWVyeSBwbHVnaW5cclxuXHQkLmZuLnRoZW1lUGx1Z2luV2lkZ2V0VG9nZ2xlRXhwYW5kID0gZnVuY3Rpb24ob3B0cykge1xyXG5cdFx0cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpIHtcclxuXHRcdFx0dmFyICR0aGlzID0gJCh0aGlzKTtcclxuXHJcblx0XHRcdGlmICgkdGhpcy5kYXRhKGluc3RhbmNlTmFtZSkpIHtcclxuXHRcdFx0XHRyZXR1cm4gJHRoaXMuZGF0YShpbnN0YW5jZU5hbWUpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHJldHVybiBuZXcgV2lkZ2V0VG9nZ2xlRXhwYW5kKCR0aGlzLCBvcHRzKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcbn0pLmFwcGx5KHRoaXMsIFt3aW5kb3cudGhlbWUsIGpRdWVyeV0pO1xyXG5cclxuLy8gV29yZCBSb3RhdG9yXHJcbihmdW5jdGlvbih0aGVtZSwgJCkge1xyXG5cclxuXHR0aGVtZSA9IHRoZW1lIHx8IHt9O1xyXG5cclxuXHR2YXIgaW5zdGFuY2VOYW1lID0gJ19fd29yZFJvdGF0b3InO1xyXG5cclxuXHR2YXIgUGx1Z2luV29yZFJvdGF0b3IgPSBmdW5jdGlvbigkZWwsIG9wdHMpIHtcclxuXHRcdHJldHVybiB0aGlzLmluaXRpYWxpemUoJGVsLCBvcHRzKTtcclxuXHR9O1xyXG5cclxuXHRQbHVnaW5Xb3JkUm90YXRvci5kZWZhdWx0cyA9IHtcclxuXHRcdGRlbGF5OiAyMDAwXHJcblx0fTtcclxuXHJcblx0UGx1Z2luV29yZFJvdGF0b3IucHJvdG90eXBlID0ge1xyXG5cdFx0aW5pdGlhbGl6ZTogZnVuY3Rpb24oJGVsLCBvcHRzKSB7XHJcblx0XHRcdGlmICggJGVsLmRhdGEoIGluc3RhbmNlTmFtZSApICkge1xyXG5cdFx0XHRcdHJldHVybiB0aGlzO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHR0aGlzLiRlbCA9ICRlbDtcclxuXHJcblx0XHRcdHRoaXNcclxuXHRcdFx0XHQuc2V0RGF0YSgpXHJcblx0XHRcdFx0LnNldE9wdGlvbnMob3B0cylcclxuXHRcdFx0XHQuYnVpbGQoKTtcclxuXHJcblx0XHRcdHJldHVybiB0aGlzO1xyXG5cdFx0fSxcclxuXHJcblx0XHRzZXREYXRhOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0dGhpcy4kZWwuZGF0YShpbnN0YW5jZU5hbWUsIHRoaXMpO1xyXG5cclxuXHRcdFx0cmV0dXJuIHRoaXM7XHJcblx0XHR9LFxyXG5cclxuXHRcdHNldE9wdGlvbnM6IGZ1bmN0aW9uKG9wdHMpIHtcclxuXHRcdFx0dGhpcy5vcHRpb25zID0gJC5leHRlbmQodHJ1ZSwge30sIFBsdWdpbldvcmRSb3RhdG9yLmRlZmF1bHRzLCBvcHRzLCB7XHJcblx0XHRcdFx0d3JhcHBlcjogdGhpcy4kZWxcclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0XHRyZXR1cm4gdGhpcztcclxuXHRcdH0sXHJcblxyXG5cdFx0YnVpbGQ6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHR2YXIgJGVsID0gdGhpcy5vcHRpb25zLndyYXBwZXIsXHJcblx0XHRcdFx0aXRlbXNXcmFwcGVyID0gJGVsLmZpbmQoXCIud29ydC1yb3RhdG9yLWl0ZW1zXCIpLFxyXG5cdFx0XHRcdGl0ZW1zID0gaXRlbXNXcmFwcGVyLmZpbmQoXCI+IHNwYW5cIiksXHJcblx0XHRcdFx0Zmlyc3RJdGVtID0gaXRlbXMuZXEoMCksXHJcblx0XHRcdFx0Zmlyc3RJdGVtQ2xvbmUgPSBmaXJzdEl0ZW0uY2xvbmUoKSxcclxuXHRcdFx0XHRpdGVtSGVpZ2h0ID0gZmlyc3RJdGVtLmhlaWdodCgpLFxyXG5cdFx0XHRcdGN1cnJlbnRJdGVtID0gMSxcclxuXHRcdFx0XHRjdXJyZW50VG9wID0gMDtcclxuXHJcblx0XHRcdGl0ZW1zV3JhcHBlci5hcHBlbmQoZmlyc3RJdGVtQ2xvbmUpO1xyXG5cclxuXHRcdFx0JGVsXHJcblx0XHRcdFx0LmhlaWdodChpdGVtSGVpZ2h0KVxyXG5cdFx0XHRcdC5hZGRDbGFzcyhcImFjdGl2ZVwiKTtcclxuXHJcblx0XHRcdHNldEludGVydmFsKGZ1bmN0aW9uKCkge1xyXG5cclxuXHRcdFx0XHRjdXJyZW50VG9wID0gKGN1cnJlbnRJdGVtICogaXRlbUhlaWdodCk7XHJcblxyXG5cdFx0XHRcdGl0ZW1zV3JhcHBlci5hbmltYXRlKHtcclxuXHRcdFx0XHRcdHRvcDogLShjdXJyZW50VG9wKSArIFwicHhcIlxyXG5cdFx0XHRcdH0sIDMwMCwgZnVuY3Rpb24oKSB7XHJcblxyXG5cdFx0XHRcdFx0Y3VycmVudEl0ZW0rKztcclxuXHJcblx0XHRcdFx0XHRpZihjdXJyZW50SXRlbSA+IGl0ZW1zLmxlbmd0aCkge1xyXG5cclxuXHRcdFx0XHRcdFx0aXRlbXNXcmFwcGVyLmNzcyhcInRvcFwiLCAwKTtcclxuXHRcdFx0XHRcdFx0Y3VycmVudEl0ZW0gPSAxO1xyXG5cclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHR9LCB0aGlzLm9wdGlvbnMuZGVsYXkpO1xyXG5cclxuXHRcdFx0cmV0dXJuIHRoaXM7XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblx0Ly8gZXhwb3NlIHRvIHNjb3BlXHJcblx0JC5leHRlbmQodGhlbWUsIHtcclxuXHRcdFBsdWdpbldvcmRSb3RhdG9yOiBQbHVnaW5Xb3JkUm90YXRvclxyXG5cdH0pO1xyXG5cclxuXHQvLyBqcXVlcnkgcGx1Z2luXHJcblx0JC5mbi50aGVtZVBsdWdpbldvcmRSb3RhdG9yID0gZnVuY3Rpb24ob3B0cykge1xyXG5cdFx0cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpIHtcclxuXHRcdFx0dmFyICR0aGlzID0gJCh0aGlzKTtcclxuXHJcblx0XHRcdGlmICgkdGhpcy5kYXRhKGluc3RhbmNlTmFtZSkpIHtcclxuXHRcdFx0XHRyZXR1cm4gJHRoaXMuZGF0YShpbnN0YW5jZU5hbWUpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHJldHVybiBuZXcgUGx1Z2luV29yZFJvdGF0b3IoJHRoaXMsIG9wdHMpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxufSkuYXBwbHkodGhpcywgW3dpbmRvdy50aGVtZSwgalF1ZXJ5XSk7XHJcblxyXG4vLyBOYXZpZ2F0aW9uXHJcbihmdW5jdGlvbigkKSB7XHJcblxyXG5cdCd1c2Ugc3RyaWN0JztcclxuXHJcblx0dmFyICRpdGVtcyA9ICQoICcubmF2LW1haW4gbGkubmF2LXBhcmVudCcgKTtcclxuXHJcblx0ZnVuY3Rpb24gZXhwYW5kKCAkbGkgKSB7XHJcblx0XHQkbGkuY2hpbGRyZW4oICd1bC5uYXYtY2hpbGRyZW4nICkuc2xpZGVEb3duKCAnZmFzdCcsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHQkbGkuYWRkQ2xhc3MoICduYXYtZXhwYW5kZWQnICk7XHJcblx0XHRcdCQodGhpcykuY3NzKCAnZGlzcGxheScsICcnICk7XHJcblx0XHRcdGVuc3VyZVZpc2libGUoICRsaSApO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBjb2xsYXBzZSggJGxpICkge1xyXG5cdFx0JGxpLmNoaWxkcmVuKCd1bC5uYXYtY2hpbGRyZW4nICkuc2xpZGVVcCggJ2Zhc3QnLCBmdW5jdGlvbigpIHtcclxuXHRcdFx0JCh0aGlzKS5jc3MoICdkaXNwbGF5JywgJycgKTtcclxuXHRcdFx0JGxpLnJlbW92ZUNsYXNzKCAnbmF2LWV4cGFuZGVkJyApO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBlbnN1cmVWaXNpYmxlKCAkbGkgKSB7XHJcblx0XHR2YXIgc2Nyb2xsZXIgPSAkbGkub2Zmc2V0UGFyZW50KCk7XHJcblx0XHRpZiAoICFzY3JvbGxlci5nZXQoMCkgKSB7XHJcblx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdH1cclxuXHJcblx0XHR2YXIgdG9wID0gJGxpLnBvc2l0aW9uKCkudG9wO1xyXG5cdFx0aWYgKCB0b3AgPCAwICkge1xyXG5cdFx0XHRzY3JvbGxlci5hbmltYXRlKHtcclxuXHRcdFx0XHRzY3JvbGxUb3A6IHNjcm9sbGVyLnNjcm9sbFRvcCgpICsgdG9wXHJcblx0XHRcdH0sICdmYXN0Jyk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBidWlsZFNpZGViYXJOYXYoIGFuY2hvciwgcHJldiwgbmV4dCwgZXYgKSB7XHJcblx0XHRpZiAoIGFuY2hvci5wcm9wKCdocmVmJykgKSB7XHJcblx0XHRcdHZhciBhcnJvd1dpZHRoID0gcGFyc2VJbnQod2luZG93LmdldENvbXB1dGVkU3R5bGUoYW5jaG9yLmdldCgwKSwgJzphZnRlcicpLndpZHRoLCAxMCkgfHwgMDtcclxuXHRcdFx0aWYgKGV2Lm9mZnNldFggPiBhbmNob3IuZ2V0KDApLm9mZnNldFdpZHRoIC0gYXJyb3dXaWR0aCkge1xyXG5cdFx0XHRcdGV2LnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHRpZiAoIHByZXYuZ2V0KCAwICkgIT09IG5leHQuZ2V0KCAwICkgKSB7XHJcblx0XHRcdGNvbGxhcHNlKCBwcmV2ICk7XHJcblx0XHRcdGV4cGFuZCggbmV4dCApO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0Y29sbGFwc2UoIHByZXYgKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdCRpdGVtcy5maW5kKCc+IGEnKS5vbignY2xpY2snLCBmdW5jdGlvbiggZXYgKSB7XHJcblxyXG5cdFx0dmFyICRodG1sICAgPSAkKCdodG1sJyksXHJcblx0XHRcdCR3aW5kb3cgPSAkKHdpbmRvdyksXHJcblx0XHQgICAgJGFuY2hvciA9ICQoIHRoaXMgKSxcclxuXHRcdFx0JHByZXYgICA9ICRhbmNob3IuY2xvc2VzdCgndWwubmF2JykuZmluZCgnPiBsaS5uYXYtZXhwYW5kZWQnICksXHJcblx0XHRcdCRuZXh0ICAgPSAkYW5jaG9yLmNsb3Nlc3QoJ2xpJyksXHJcblx0XHRcdCRldiAgICAgPSBldjtcclxuXHJcblx0XHRpZiggJGFuY2hvci5hdHRyKCdocmVmJykgPT0gJyMnICkge1xyXG5cdFx0XHRldi5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmKCAhJGh0bWwuaGFzQ2xhc3MoJ3NpZGViYXItbGVmdC1iaWctaWNvbnMnKSApIHtcclxuXHRcdFx0YnVpbGRTaWRlYmFyTmF2KCAkYW5jaG9yLCAkcHJldiwgJG5leHQsICRldiApO1xyXG5cdFx0fSBlbHNlIGlmKCAkaHRtbC5oYXNDbGFzcygnc2lkZWJhci1sZWZ0LWJpZy1pY29ucycpICYmICR3aW5kb3cud2lkdGgoKSA8IDc2OCApIHtcclxuXHRcdFx0YnVpbGRTaWRlYmFyTmF2KCAkYW5jaG9yLCAkcHJldiwgJG5leHQsICRldiApO1xyXG5cdFx0fVxyXG5cclxuXHR9KTtcclxuXHJcblx0Ly8gQ2hyb21lIEZpeFxyXG5cdCQuYnJvd3Nlci5jaHJvbWUgPSAvY2hyb20oZXxpdW0pLy50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKSk7XHJcblx0aWYoICQuYnJvd3Nlci5jaHJvbWUgJiYgISQuYnJvd3Nlci5tb2JpbGUgKSB7XHJcblx0XHR2YXIgZmxhZyA9IHRydWU7XHJcblx0XHQkKCcuc2lkZWJhci1sZWZ0IC5uYXYtbWFpbiBsaSBhJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuXHRcdFx0ZmxhZyA9IGZhbHNlO1xyXG5cdFx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XHJcblx0XHRcdFx0ZmxhZyA9IHRydWU7XHJcblx0XHRcdH0sIDIwMCk7XHJcblx0XHR9KTtcclxuXHJcblx0XHQkKCcubmFubycpLm9uKCdtb3VzZWVudGVyJywgZnVuY3Rpb24oZSl7XHJcblx0XHRcdCQodGhpcykuYWRkQ2xhc3MoJ2hvdmVyZWQnKTtcclxuXHRcdH0pO1xyXG5cclxuXHRcdCQoJy5uYW5vJykub24oJ21vdXNlbGVhdmUnLCBmdW5jdGlvbihlKXtcclxuXHRcdFx0aWYoIGZsYWcgKSB7XHJcblx0XHRcdFx0JCh0aGlzKS5yZW1vdmVDbGFzcygnaG92ZXJlZCcpO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcdFxyXG5cdH1cclxuXHJcblx0JCgnLm5hdi1tYWluIGEnKS5maWx0ZXIoJzpub3QoW2hyZWZdKScpLmF0dHIoJ2hyZWYnLCAnIycpO1xyXG5cclxufSkuYXBwbHkodGhpcywgW2pRdWVyeV0pO1xyXG5cclxuLy8gU2tlbGV0b25cclxuKGZ1bmN0aW9uKHRoZW1lLCAkKSB7XHJcblxyXG5cdCd1c2Ugc3RyaWN0JztcclxuXHJcblx0dGhlbWUgPSB0aGVtZSB8fCB7fTtcclxuXHJcblx0dmFyICRib2R5XHRcdFx0XHQ9ICQoICdib2R5JyApLFxyXG5cdFx0JGh0bWxcdFx0XHRcdD0gJCggJ2h0bWwnICksXHJcblx0XHQkd2luZG93XHRcdFx0XHQ9ICQoIHdpbmRvdyApLFxyXG5cdFx0aXNBbmRyb2lkXHRcdFx0PSBuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkuaW5kZXhPZignYW5kcm9pZCcpID4gLTEsXHJcblx0XHRpc0lwYWQgICAgICBcdFx0PSBuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC9pUGFkL2kpICE9IG51bGwsXHJcblx0XHR1cGRhdGluZ05hbm9TY3JvbGwgID0gZmFsc2U7XHJcblxyXG5cdC8vIG1vYmlsZSBkZXZpY2VzIHdpdGggZml4ZWQgaGFzIGEgbG90IG9mIGlzc3VlcyB3aGVuIGZvY3VzIGlucHV0cyBhbmQgb3RoZXJzLi4uXHJcblx0aWYgKCB0eXBlb2YgJC5icm93c2VyICE9PSAndW5kZWZpbmVkJyAmJiAkLmJyb3dzZXIubW9iaWxlICYmICRodG1sLmhhc0NsYXNzKCdmaXhlZCcpICkge1xyXG5cdFx0JGh0bWwucmVtb3ZlQ2xhc3MoICdmaXhlZCcgKS5hZGRDbGFzcyggJ3Njcm9sbCcgKTtcclxuXHR9XHJcblxyXG5cdHZhciBTa2VsZXRvbiA9IHtcclxuXHJcblx0XHRvcHRpb25zOiB7XHJcblx0XHRcdHNpZGViYXJzOiB7XHJcblx0XHRcdFx0bWVudTogJyNjb250ZW50LW1lbnUnLFxyXG5cdFx0XHRcdGxlZnQ6ICcjc2lkZWJhci1sZWZ0JyxcclxuXHRcdFx0XHRyaWdodDogJyNzaWRlYmFyLXJpZ2h0J1xyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cclxuXHRcdGN1c3RvbVNjcm9sbDogKCAhTW9kZXJuaXpyLm92ZXJmbG93c2Nyb2xsaW5nICYmICFpc0FuZHJvaWQgJiYgJC5mbi5uYW5vU2Nyb2xsZXIgIT09ICd1bmRlZmluZWQnKSxcclxuXHJcblx0XHRpbml0aWFsaXplOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0dGhpc1xyXG5cdFx0XHRcdC5zZXRWYXJzKClcclxuXHRcdFx0XHQuYnVpbGQoKVxyXG5cdFx0XHRcdC5ldmVudHMoKTtcclxuXHRcdH0sXHJcblxyXG5cdFx0c2V0VmFyczogZnVuY3Rpb24oKSB7XHJcblx0XHRcdHRoaXMuc2lkZWJhcnMgPSB7fTtcclxuXHJcblx0XHRcdHRoaXMuc2lkZWJhcnMubGVmdCA9IHtcclxuXHRcdFx0XHQkZWw6ICQoIHRoaXMub3B0aW9ucy5zaWRlYmFycy5sZWZ0IClcclxuXHRcdFx0fTtcclxuXHJcblx0XHRcdHRoaXMuc2lkZWJhcnMucmlnaHQgPSB7XHJcblx0XHRcdFx0JGVsOiAkKCB0aGlzLm9wdGlvbnMuc2lkZWJhcnMucmlnaHQgKSxcclxuXHRcdFx0XHRpc09wZW5lZDogJGh0bWwuaGFzQ2xhc3MoICdzaWRlYmFyLXJpZ2h0LW9wZW5lZCcgKVxyXG5cdFx0XHR9O1xyXG5cclxuXHRcdFx0dGhpcy5zaWRlYmFycy5tZW51ID0ge1xyXG5cdFx0XHRcdCRlbDogJCggdGhpcy5vcHRpb25zLnNpZGViYXJzLm1lbnUgKSxcclxuXHRcdFx0XHRpc09wZW5lZDogJGh0bWwuaGFzQ2xhc3MoICdpbm5lci1tZW51LW9wZW5lZCcgKVxyXG5cdFx0XHR9O1xyXG5cclxuXHRcdFx0cmV0dXJuIHRoaXM7XHJcblx0XHR9LFxyXG5cclxuXHRcdGJ1aWxkOiBmdW5jdGlvbigpIHtcclxuXHJcblx0XHRcdGlmICggdHlwZW9mICQuYnJvd3NlciAhPT0gJ3VuZGVmaW5lZCcgJiYgJC5icm93c2VyLm1vYmlsZSApIHtcclxuXHRcdFx0XHQkaHRtbC5hZGRDbGFzcyggJ21vYmlsZS1kZXZpY2UnICk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0JGh0bWwuYWRkQ2xhc3MoICduby1tb2JpbGUtZGV2aWNlJyApO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQkaHRtbC5hZGRDbGFzcyggJ2N1c3RvbS1zY3JvbGwnICk7XHJcblx0XHRcdGlmICggdGhpcy5jdXN0b21TY3JvbGwgKSB7XHJcblx0XHRcdFx0dGhpcy5idWlsZFNpZGViYXJMZWZ0KCk7XHJcblx0XHRcdFx0dGhpcy5idWlsZENvbnRlbnRNZW51KCk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmKCBpc0lwYWQgKSB7XHJcblx0XHRcdFx0dGhpcy5maXhJcGFkKCk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHRoaXMuYnVpbGRTaWRlYmFyUmlnaHQoKTtcclxuXHJcblx0XHRcdHJldHVybiB0aGlzO1xyXG5cdFx0fSxcclxuXHJcblx0XHRldmVudHM6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRpZiAoIHRoaXMuY3VzdG9tU2Nyb2xsICkge1xyXG5cdFx0XHRcdHRoaXMuZXZlbnRzU2lkZWJhckxlZnQoKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0dGhpcy5ldmVudHNTaWRlYmFyUmlnaHQoKTtcclxuXHRcdFx0dGhpcy5ldmVudHNDb250ZW50TWVudSgpO1xyXG5cclxuXHRcdFx0aWYgKCB0eXBlb2YgJC5icm93c2VyICE9PSAndW5kZWZpbmVkJyAmJiAhdGhpcy5jdXN0b21TY3JvbGwgJiYgaXNBbmRyb2lkICkge1xyXG5cdFx0XHRcdHRoaXMuZml4U2Nyb2xsKCk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHJldHVybiB0aGlzO1xyXG5cdFx0fSxcclxuXHJcblx0XHRmaXhTY3JvbGw6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHR2YXIgX3NlbGYgPSB0aGlzO1xyXG5cclxuXHRcdFx0JHdpbmRvd1xyXG5cdFx0XHRcdC5vbiggJ3NpZGViYXItbGVmdC1vcGVuZWQgc2lkZWJhci1yaWdodC10b2dnbGUnLCBmdW5jdGlvbiggZSwgZGF0YSApIHtcclxuXHRcdFx0XHRcdF9zZWxmLnByZXZlbnRCb2R5U2Nyb2xsVG9nZ2xlKCBkYXRhLmFkZGVkICk7XHJcblx0XHRcdFx0fSk7XHJcblxyXG5cdFx0fSxcclxuXHJcblx0XHRmaXhJcGFkOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0dmFyIF9zZWxmID0gdGhpcztcclxuXHJcblx0XHRcdCQoJy5oZWFkZXIsIC5wYWdlLWhlYWRlciwgLmNvbnRlbnQtYm9keScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcblx0XHRcdFx0JGh0bWwucmVtb3ZlQ2xhc3MoJ3NpZGViYXItbGVmdC1vcGVuZWQnKTtcclxuXHRcdFx0fSk7XHJcblx0XHR9LFxyXG5cclxuXHRcdGJ1aWxkU2lkZWJhckxlZnQ6IGZ1bmN0aW9uKCkge1xyXG5cclxuXHRcdFx0dmFyIGluaXRpYWxQb3NpdGlvbiA9IDA7XHJcblxyXG5cdFx0XHR0aGlzLnNpZGViYXJzLmxlZnQuaXNPcGVuZWQgPSAhJGh0bWwuaGFzQ2xhc3MoICdzaWRlYmFyLWxlZnQtY29sbGFwc2VkJyApIHx8ICRodG1sLmhhc0NsYXNzKCAnc2lkZWJhci1sZWZ0LW9wZW5lZCcgKTtcclxuXHJcblx0XHRcdHRoaXMuc2lkZWJhcnMubGVmdC4kbmFubyA9IHRoaXMuc2lkZWJhcnMubGVmdC4kZWwuZmluZCggJy5uYW5vJyApO1xyXG5cclxuXHRcdFx0aWYgKHR5cGVvZiBsb2NhbFN0b3JhZ2UgIT09ICd1bmRlZmluZWQnKSB7XHJcblx0XHRcdFx0dGhpcy5zaWRlYmFycy5sZWZ0LiRuYW5vLm9uKCd1cGRhdGUnLCBmdW5jdGlvbihlLCB2YWx1ZXMpIHtcclxuXHRcdFx0XHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdzaWRlYmFyLWxlZnQtcG9zaXRpb24nLCB2YWx1ZXMucG9zaXRpb24pO1xyXG5cdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0XHRpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3NpZGViYXItbGVmdC1wb3NpdGlvbicpICE9PSBudWxsKSB7XHJcblx0XHRcdFx0XHRpbml0aWFsUG9zaXRpb24gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnc2lkZWJhci1sZWZ0LXBvc2l0aW9uJyk7XHJcblx0XHRcdFx0XHR0aGlzLnNpZGViYXJzLmxlZnQuJGVsLmZpbmQoICcubmFuby1jb250ZW50Jykuc2Nyb2xsVG9wKGluaXRpYWxQb3NpdGlvbik7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHR0aGlzLnNpZGViYXJzLmxlZnQuJG5hbm8ubmFub1Njcm9sbGVyKHtcclxuXHRcdFx0XHRzY3JvbGxUb3A6IGluaXRpYWxQb3NpdGlvbixcclxuXHRcdFx0XHRhbHdheXNWaXNpYmxlOiB0cnVlLFxyXG5cdFx0XHRcdHByZXZlbnRQYWdlU2Nyb2xsaW5nOiAkaHRtbC5oYXNDbGFzcyggJ2ZpeGVkJyApXHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0cmV0dXJuIHRoaXM7XHJcblx0XHR9LFxyXG5cclxuXHRcdGV2ZW50c1NpZGViYXJMZWZ0OiBmdW5jdGlvbigpIHtcclxuXHJcblx0XHRcdHZhciBfc2VsZiA9IHRoaXMsXHJcblx0XHRcdFx0JG5hbm8gPSB0aGlzLnNpZGViYXJzLmxlZnQuJG5hbm87XHJcblxyXG5cdFx0XHR2YXIgb3BlbiA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdGlmICggX3NlbGYuc2lkZWJhcnMubGVmdC5pc09wZW5lZCApIHtcclxuXHRcdFx0XHRcdHJldHVybiBjbG9zZSgpO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0X3NlbGYuc2lkZWJhcnMubGVmdC5pc09wZW5lZCA9IHRydWU7XHJcblxyXG5cdFx0XHRcdCRodG1sLmFkZENsYXNzKCAnc2lkZWJhci1sZWZ0LW9wZW5lZCcgKTtcclxuXHJcblx0XHRcdFx0JHdpbmRvdy50cmlnZ2VyKCAnc2lkZWJhci1sZWZ0LXRvZ2dsZScsIHtcclxuXHRcdFx0XHRcdGFkZGVkOiB0cnVlLFxyXG5cdFx0XHRcdFx0cmVtb3ZlZDogZmFsc2VcclxuXHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdFx0JGh0bWwub24oICdjbGljay5jbG9zZS1sZWZ0LXNpZGViYXInLCBmdW5jdGlvbihlKSB7XHJcblx0XHRcdFx0XHRlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cdFx0XHRcdFx0Y2xvc2UoZSk7XHJcblx0XHRcdFx0fSk7XHJcblxyXG5cclxuXHRcdFx0fTtcclxuXHJcblx0XHRcdHZhciBjbG9zZSA9IGZ1bmN0aW9uKGUpIHtcclxuXHRcdFx0XHRpZiAoICEhZSAmJiAhIWUudGFyZ2V0ICYmICgkKGUudGFyZ2V0KS5jbG9zZXN0KCAnLnNpZGViYXItbGVmdCcgKS5nZXQoMCkgfHwgISQoZS50YXJnZXQpLmNsb3Nlc3QoICdodG1sJyApLmdldCgwKSkgKSB7XHJcblx0XHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHJcblx0XHRcdFx0XHQkaHRtbC5yZW1vdmVDbGFzcyggJ3NpZGViYXItbGVmdC1vcGVuZWQnICk7XHJcblx0XHRcdFx0XHQkaHRtbC5vZmYoICdjbGljay5jbG9zZS1sZWZ0LXNpZGViYXInICk7XHJcblxyXG5cdFx0XHRcdFx0JHdpbmRvdy50cmlnZ2VyKCAnc2lkZWJhci1sZWZ0LXRvZ2dsZScsIHtcclxuXHRcdFx0XHRcdFx0YWRkZWQ6IGZhbHNlLFxyXG5cdFx0XHRcdFx0XHRyZW1vdmVkOiB0cnVlXHJcblx0XHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdFx0XHRfc2VsZi5zaWRlYmFycy5sZWZ0LmlzT3BlbmVkID0gISRodG1sLmhhc0NsYXNzKCAnc2lkZWJhci1sZWZ0LWNvbGxhcHNlZCcgKTtcclxuXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9O1xyXG5cclxuXHRcdFx0dmFyIHVwZGF0ZU5hbm9TY3JvbGwgPSBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRpZiAodXBkYXRpbmdOYW5vU2Nyb2xsKSB7XHJcblx0XHRcdFx0XHRpZiAoICQuc3VwcG9ydC50cmFuc2l0aW9uICkge1xyXG5cdFx0XHRcdFx0XHQkbmFuby5uYW5vU2Nyb2xsZXIoKTtcclxuXHRcdFx0XHRcdFx0JG5hbm9cclxuXHRcdFx0XHRcdFx0XHQub25lKCdic1RyYW5zaXRpb25FbmQnLCB1cGRhdGVOYW5vU2Nyb2xsKVxyXG5cdFx0XHRcdFx0XHRcdC5lbXVsYXRlVHJhbnNpdGlvbkVuZCgxNTApXHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHR1cGRhdGVOYW5vU2Nyb2xsKCk7XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0dXBkYXRpbmdOYW5vU2Nyb2xsID0gdHJ1ZTtcclxuXHJcblx0XHRcdFx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0XHR1cGRhdGluZ05hbm9TY3JvbGwgPSBmYWxzZTtcclxuXHRcdFx0XHRcdH0sIDIwMCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9O1xyXG5cclxuXHRcdFx0dmFyIGlzVG9nZ2xlciA9IGZ1bmN0aW9uKCBlbGVtZW50ICkge1xyXG5cdFx0XHRcdHJldHVybiAkKGVsZW1lbnQpLmRhdGEoJ2ZpcmUtZXZlbnQnKSA9PT0gJ3NpZGViYXItbGVmdC10b2dnbGUnIHx8ICQoZWxlbWVudCkucGFyZW50cygpLmRhdGEoJ2ZpcmUtZXZlbnQnKSA9PT0gJ3NpZGViYXItbGVmdC10b2dnbGUnO1xyXG5cdFx0XHR9O1xyXG5cclxuXHRcdFx0dGhpcy5zaWRlYmFycy5sZWZ0LiRlbFxyXG5cdFx0XHRcdC5vbiggJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHR1cGRhdGVOYW5vU2Nyb2xsKCk7XHJcblx0XHRcdFx0fSlcclxuXHRcdFx0XHQub24oJ3RvdWNoZW5kJywgZnVuY3Rpb24oZSkge1xyXG5cdFx0XHRcdFx0X3NlbGYuc2lkZWJhcnMubGVmdC5pc09wZW5lZCA9ICEkaHRtbC5oYXNDbGFzcyggJ3NpZGViYXItbGVmdC1jb2xsYXBzZWQnICkgfHwgJGh0bWwuaGFzQ2xhc3MoICdzaWRlYmFyLWxlZnQtb3BlbmVkJyApO1xyXG5cdFx0XHRcdFx0aWYgKCAhX3NlbGYuc2lkZWJhcnMubGVmdC5pc09wZW5lZCAmJiAhaXNUb2dnbGVyKGUudGFyZ2V0KSApIHtcclxuXHRcdFx0XHRcdFx0ZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHRcdFx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0XHRcdFx0XHRvcGVuKCk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHQkbmFub1xyXG5cdFx0XHRcdC5vbiggJ21vdXNlZW50ZXInLCBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdGlmICggJGh0bWwuaGFzQ2xhc3MoICdzaWRlYmFyLWxlZnQtY29sbGFwc2VkJyApICkge1xyXG5cdFx0XHRcdFx0XHQkbmFuby5uYW5vU2Nyb2xsZXIoKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KVxyXG5cdFx0XHRcdC5vbiggJ21vdXNlbGVhdmUnLCBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdGlmICggJGh0bWwuaGFzQ2xhc3MoICdzaWRlYmFyLWxlZnQtY29sbGFwc2VkJyApICkge1xyXG5cdFx0XHRcdFx0XHQkbmFuby5uYW5vU2Nyb2xsZXIoKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdCR3aW5kb3cub24oICdzaWRlYmFyLWxlZnQtdG9nZ2xlJywgZnVuY3Rpb24oZSwgdG9nZ2xlKSB7XHJcblx0XHRcdFx0aWYgKCB0b2dnbGUucmVtb3ZlZCApIHtcclxuXHRcdFx0XHRcdCRodG1sLnJlbW92ZUNsYXNzKCAnc2lkZWJhci1sZWZ0LW9wZW5lZCcgKTtcclxuXHRcdFx0XHRcdCRodG1sLm9mZiggJ2NsaWNrLmNsb3NlLWxlZnQtc2lkZWJhcicgKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0Ly8gUmVjYWxjdWxhdGUgT3dsIENhcm91c2VsIHNpemVzXHJcblx0XHRcdFx0JCgnLm93bC1jYXJvdXNlbCcpLnRyaWdnZXIoJ3JlZnJlc2gub3dsLmNhcm91c2VsJyk7XHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0cmV0dXJuIHRoaXM7XHJcblx0XHR9LFxyXG5cclxuXHRcdGJ1aWxkU2lkZWJhclJpZ2h0OiBmdW5jdGlvbigpIHtcclxuXHRcdFx0dGhpcy5zaWRlYmFycy5yaWdodC5pc09wZW5lZCA9ICRodG1sLmhhc0NsYXNzKCAnc2lkZWJhci1yaWdodC1vcGVuZWQnICk7XHJcblxyXG5cdFx0XHRpZiAoIHRoaXMuY3VzdG9tU2Nyb2xsICkge1xyXG5cdFx0XHRcdHRoaXMuc2lkZWJhcnMucmlnaHQuJG5hbm8gPSB0aGlzLnNpZGViYXJzLnJpZ2h0LiRlbC5maW5kKCAnLm5hbm8nICk7XHJcblxyXG5cdFx0XHRcdHRoaXMuc2lkZWJhcnMucmlnaHQuJG5hbm8ubmFub1Njcm9sbGVyKHtcclxuXHRcdFx0XHRcdGFsd2F5c1Zpc2libGU6IHRydWUsXHJcblx0XHRcdFx0XHRwcmV2ZW50UGFnZVNjcm9sbGluZzogdHJ1ZVxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRyZXR1cm4gdGhpcztcclxuXHRcdH0sXHJcblxyXG5cdFx0ZXZlbnRzU2lkZWJhclJpZ2h0OiBmdW5jdGlvbigpIHtcclxuXHRcdFx0dmFyIF9zZWxmID0gdGhpcztcclxuXHJcblx0XHRcdHZhciBvcGVuID0gZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0aWYgKCBfc2VsZi5zaWRlYmFycy5yaWdodC5pc09wZW5lZCApIHtcclxuXHRcdFx0XHRcdHJldHVybiBjbG9zZSgpO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0X3NlbGYuc2lkZWJhcnMucmlnaHQuaXNPcGVuZWQgPSB0cnVlO1xyXG5cclxuXHRcdFx0XHQkaHRtbC5hZGRDbGFzcyggJ3NpZGViYXItcmlnaHQtb3BlbmVkJyApO1xyXG5cclxuXHRcdFx0XHQkd2luZG93LnRyaWdnZXIoICdzaWRlYmFyLXJpZ2h0LXRvZ2dsZScsIHtcclxuXHRcdFx0XHRcdGFkZGVkOiB0cnVlLFxyXG5cdFx0XHRcdFx0cmVtb3ZlZDogZmFsc2VcclxuXHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdFx0JGh0bWwub24oICdjbGljay5jbG9zZS1yaWdodC1zaWRlYmFyJywgZnVuY3Rpb24oZSkge1xyXG5cdFx0XHRcdFx0ZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHRcdFx0XHRcdGNsb3NlKGUpO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9O1xyXG5cclxuXHRcdFx0dmFyIGNsb3NlID0gZnVuY3Rpb24oZSkge1xyXG5cdFx0XHRcdGlmICggISFlICYmICEhZS50YXJnZXQgJiYgKCQoZS50YXJnZXQpLmNsb3Nlc3QoICcuc2lkZWJhci1yaWdodCcgKS5nZXQoMCkgfHwgISQoZS50YXJnZXQpLmNsb3Nlc3QoICdodG1sJyApLmdldCgwKSkgKSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQkaHRtbC5yZW1vdmVDbGFzcyggJ3NpZGViYXItcmlnaHQtb3BlbmVkJyApO1xyXG5cdFx0XHRcdCRodG1sLm9mZiggJ2NsaWNrLmNsb3NlLXJpZ2h0LXNpZGViYXInICk7XHJcblxyXG5cdFx0XHRcdCR3aW5kb3cudHJpZ2dlciggJ3NpZGViYXItcmlnaHQtdG9nZ2xlJywge1xyXG5cdFx0XHRcdFx0YWRkZWQ6IGZhbHNlLFxyXG5cdFx0XHRcdFx0cmVtb3ZlZDogdHJ1ZVxyXG5cdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0XHRfc2VsZi5zaWRlYmFycy5yaWdodC5pc09wZW5lZCA9IGZhbHNlO1xyXG5cdFx0XHR9O1xyXG5cclxuXHRcdFx0dmFyIGJpbmQgPSBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHQkKCdbZGF0YS1vcGVuPVwic2lkZWJhci1yaWdodFwiXScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcclxuXHRcdFx0XHRcdHZhciAkZWwgPSAkKHRoaXMpO1xyXG5cdFx0XHRcdFx0ZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHJcblx0XHRcdFx0XHRpZiAoICRlbC5pcygnYScpIClcclxuXHRcdFx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuXHRcdFx0XHRcdG9wZW4oKTtcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fTtcclxuXHJcblx0XHRcdHRoaXMuc2lkZWJhcnMucmlnaHQuJGVsLmZpbmQoICcubW9iaWxlLWNsb3NlJyApXHJcblx0XHRcdFx0Lm9uKCAnY2xpY2snLCBmdW5jdGlvbiggZSApIHtcclxuXHRcdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRcdFx0XHRcdCRodG1sLnRyaWdnZXIoICdjbGljay5jbG9zZS1yaWdodC1zaWRlYmFyJyApO1xyXG5cdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0YmluZCgpO1xyXG5cclxuXHRcdFx0cmV0dXJuIHRoaXM7XHJcblx0XHR9LFxyXG5cclxuXHRcdGJ1aWxkQ29udGVudE1lbnU6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRpZiAoICEkaHRtbC5oYXNDbGFzcyggJ2ZpeGVkJyApICkge1xyXG5cdFx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0dGhpcy5zaWRlYmFycy5tZW51LiRuYW5vID0gdGhpcy5zaWRlYmFycy5tZW51LiRlbC5maW5kKCAnLm5hbm8nICk7XHJcblxyXG5cdFx0XHR0aGlzLnNpZGViYXJzLm1lbnUuJG5hbm8ubmFub1Njcm9sbGVyKHtcclxuXHRcdFx0XHRhbHdheXNWaXNpYmxlOiB0cnVlLFxyXG5cdFx0XHRcdHByZXZlbnRQYWdlU2Nyb2xsaW5nOiB0cnVlXHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0cmV0dXJuIHRoaXM7XHJcblx0XHR9LFxyXG5cclxuXHRcdGV2ZW50c0NvbnRlbnRNZW51OiBmdW5jdGlvbigpIHtcclxuXHRcdFx0dmFyIF9zZWxmID0gdGhpcztcclxuXHJcblx0XHRcdHZhciBvcGVuID0gZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0aWYgKCBfc2VsZi5zaWRlYmFycy5tZW51LmlzT3BlbmVkICkge1xyXG5cdFx0XHRcdFx0cmV0dXJuIGNsb3NlKCk7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRfc2VsZi5zaWRlYmFycy5tZW51LmlzT3BlbmVkID0gdHJ1ZTtcclxuXHJcblx0XHRcdFx0JGh0bWwuYWRkQ2xhc3MoICdpbm5lci1tZW51LW9wZW5lZCcgKTtcclxuXHJcblx0XHRcdFx0JHdpbmRvdy50cmlnZ2VyKCAnaW5uZXItbWVudS10b2dnbGUnLCB7XHJcblx0XHRcdFx0XHRhZGRlZDogdHJ1ZSxcclxuXHRcdFx0XHRcdHJlbW92ZWQ6IGZhbHNlXHJcblx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHRcdCRodG1sLm9uKCAnY2xpY2suY2xvc2UtaW5uZXItbWVudScsIGZ1bmN0aW9uKGUpIHtcclxuXHJcblx0XHRcdFx0XHRjbG9zZShlKTtcclxuXHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdH07XHJcblxyXG5cdFx0XHR2YXIgY2xvc2UgPSBmdW5jdGlvbihlKSB7XHJcblx0XHRcdFx0dmFyIGhhc0V2ZW50LFxyXG5cdFx0XHRcdFx0aGFzVGFyZ2V0LFxyXG5cdFx0XHRcdFx0aXNDb2xsYXBzZUJ1dHRvbixcclxuXHRcdFx0XHRcdGlzSW5zaWRlTW9kYWwsXHJcblx0XHRcdFx0XHRpc0luc2lkZUlubmVyTWVudSxcclxuXHRcdFx0XHRcdGlzSW5zaWRlSFRNTCxcclxuXHRcdFx0XHRcdCR0YXJnZXQ7XHJcblxyXG5cdFx0XHRcdGhhc0V2ZW50ID0gISFlO1xyXG5cdFx0XHRcdGhhc1RhcmdldCA9IGhhc0V2ZW50ICYmICEhZS50YXJnZXQ7XHJcblxyXG5cdFx0XHRcdGlmICggaGFzVGFyZ2V0ICkge1xyXG5cdFx0XHRcdFx0JHRhcmdldCA9ICQoZS50YXJnZXQpO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0aXNDb2xsYXBzZUJ1dHRvbiA9IGhhc1RhcmdldCAmJiAhISR0YXJnZXQuY2xvc2VzdCggJy5pbm5lci1tZW51LWNvbGxhcHNlJyApLmdldCgwKTtcclxuXHRcdFx0XHRpc0luc2lkZU1vZGFsID0gaGFzVGFyZ2V0ICYmICEhJHRhcmdldC5jbG9zZXN0KCAnLm1mcC13cmFwJyApLmdldCgwKTtcclxuXHRcdFx0XHRpc0luc2lkZUlubmVyTWVudSA9IGhhc1RhcmdldCAmJiAhISR0YXJnZXQuY2xvc2VzdCggJy5pbm5lci1tZW51JyApLmdldCgwKTtcclxuXHRcdFx0XHRpc0luc2lkZUhUTUwgPSBoYXNUYXJnZXQgJiYgISEkdGFyZ2V0LmNsb3Nlc3QoICdodG1sJyApLmdldCgwKTtcclxuXHJcblx0XHRcdFx0aWYgKCAoIWlzQ29sbGFwc2VCdXR0b24gJiYgKGlzSW5zaWRlSW5uZXJNZW51IHx8ICFpc0luc2lkZUhUTUwpKSB8fCBpc0luc2lkZU1vZGFsICkge1xyXG5cdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0ZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHJcblx0XHRcdFx0JGh0bWwucmVtb3ZlQ2xhc3MoICdpbm5lci1tZW51LW9wZW5lZCcgKTtcclxuXHRcdFx0XHQkaHRtbC5vZmYoICdjbGljay5jbG9zZS1pbm5lci1tZW51JyApO1xyXG5cclxuXHRcdFx0XHQkd2luZG93LnRyaWdnZXIoICdpbm5lci1tZW51LXRvZ2dsZScsIHtcclxuXHRcdFx0XHRcdGFkZGVkOiBmYWxzZSxcclxuXHRcdFx0XHRcdHJlbW92ZWQ6IHRydWVcclxuXHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdFx0X3NlbGYuc2lkZWJhcnMubWVudS5pc09wZW5lZCA9IGZhbHNlO1xyXG5cdFx0XHR9O1xyXG5cclxuXHRcdFx0dmFyIGJpbmQgPSBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHQkKCdbZGF0YS1vcGVuPVwiaW5uZXItbWVudVwiXScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcclxuXHRcdFx0XHRcdHZhciAkZWwgPSAkKHRoaXMpO1xyXG5cdFx0XHRcdFx0ZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHJcblx0XHRcdFx0XHRpZiAoICRlbC5pcygnYScpIClcclxuXHRcdFx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuXHRcdFx0XHRcdG9wZW4oKTtcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fTtcclxuXHJcblx0XHRcdGJpbmQoKTtcclxuXHJcblx0XHRcdC8qIE5hbm8gU2Nyb2xsICovXHJcblx0XHRcdGlmICggJGh0bWwuaGFzQ2xhc3MoICdmaXhlZCcgKSApIHtcclxuXHRcdFx0XHR2YXIgJG5hbm8gPSB0aGlzLnNpZGViYXJzLm1lbnUuJG5hbm87XHJcblxyXG5cdFx0XHRcdHZhciB1cGRhdGVOYW5vU2Nyb2xsID0gZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHRpZiAoICQuc3VwcG9ydC50cmFuc2l0aW9uICkge1xyXG5cdFx0XHRcdFx0XHQkbmFuby5uYW5vU2Nyb2xsZXIoKTtcclxuXHRcdFx0XHRcdFx0JG5hbm9cclxuXHRcdFx0XHRcdFx0XHQub25lKCdic1RyYW5zaXRpb25FbmQnLCB1cGRhdGVOYW5vU2Nyb2xsKVxyXG5cdFx0XHRcdFx0XHRcdC5lbXVsYXRlVHJhbnNpdGlvbkVuZCgxNTApXHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHR1cGRhdGVOYW5vU2Nyb2xsKCk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fTtcclxuXHJcblx0XHRcdFx0dGhpcy5zaWRlYmFycy5tZW51LiRlbFxyXG5cdFx0XHRcdFx0Lm9uKCAnY2xpY2snLCBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdFx0dXBkYXRlTmFub1Njcm9sbCgpO1xyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHJldHVybiB0aGlzO1xyXG5cdFx0fSxcclxuXHJcblx0XHRwcmV2ZW50Qm9keVNjcm9sbFRvZ2dsZTogZnVuY3Rpb24oIHNob3VsZFByZXZlbnQsICRlbCApIHtcclxuXHRcdFx0c2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRpZiAoIHNob3VsZFByZXZlbnQgKSB7XHJcblx0XHRcdFx0XHQkYm9keVxyXG5cdFx0XHRcdFx0XHQuZGF0YSggJ3Njcm9sbFRvcCcsICRib2R5LmdldCgwKS5zY3JvbGxUb3AgKVxyXG5cdFx0XHRcdFx0XHQuY3NzKHtcclxuXHRcdFx0XHRcdFx0XHRwb3NpdGlvbjogJ2ZpeGVkJyxcclxuXHRcdFx0XHRcdFx0XHR0b3A6ICRib2R5LmdldCgwKS5zY3JvbGxUb3AgKiAtMVxyXG5cdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHQkYm9keVxyXG5cdFx0XHRcdFx0XHQuY3NzKHtcclxuXHRcdFx0XHRcdFx0XHRwb3NpdGlvbjogJycsXHJcblx0XHRcdFx0XHRcdFx0dG9wOiAnJ1xyXG5cdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0XHQuc2Nyb2xsVG9wKCAkYm9keS5kYXRhKCAnc2Nyb2xsVG9wJyApICk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LCAxNTApO1xyXG5cdFx0fVxyXG5cclxuXHR9O1xyXG5cclxuXHQvLyBleHBvc2UgdG8gc2NvcGVcclxuXHQkLmV4dGVuZCh0aGVtZSwge1xyXG5cdFx0U2tlbGV0b246IFNrZWxldG9uXHJcblx0fSk7XHJcblxyXG59KS5hcHBseSh0aGlzLCBbd2luZG93LnRoZW1lLCBqUXVlcnldKTtcclxuXHJcbi8vIFRhYiBOYXZpZ2F0aW9uXHJcbihmdW5jdGlvbigkKSB7XHJcblxyXG5cdCd1c2Ugc3RyaWN0JztcclxuXHJcblx0aWYoICQoJ2h0bWwuaGFzLXRhYi1uYXZpZ2F0aW9uJykuZ2V0KDApICkge1xyXG5cclxuXHRcdHZhciAkd2luZG93IFx0IFx0ICA9ICQoIHdpbmRvdyApLFxyXG5cdFx0XHQkdG9nZ2xlTWVudUJ1dHRvbiA9ICQoJy50b2dnbGUtbWVudScpLFxyXG5cdFx0XHQkbmF2QWN0aXZlICAgXHQgID0gJCgnLnRhYi1uYXZpZ2F0aW9uIG5hdiA+IHVsIC5uYXYtYWN0aXZlJyksXHJcblx0XHRcdCR0YWJOYXYgICAgICBcdCAgPSAkKCcudGFiLW5hdmlnYXRpb24nKSxcclxuXHRcdFx0JHRhYkl0ZW0gXHQgXHQgID0gJCgnLnRhYi1uYXZpZ2F0aW9uIG5hdiA+IHVsID4gbGkgYScpLFxyXG5cdFx0XHQkY29udGVudEJvZHkgXHQgID0gJCgnLmNvbnRlbnQtYm9keScpO1xyXG5cclxuXHRcdCR0YWJJdGVtLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpe1xyXG5cdFx0XHRpZiggJCh0aGlzKS5wYXJlbnQoKS5oYXNDbGFzcygnZHJvcGRvd24nKSB8fCAkKHRoaXMpLnBhcmVudCgpLmhhc0NsYXNzKCdkcm9wZG93bi1zdWJtZW51JykgKSB7XHJcblx0XHRcdFx0aWYoICR3aW5kb3cud2lkdGgoKSA8IDk5MiApIHtcclxuXHRcdFx0XHRcdGlmKCAkKHRoaXMpLnBhcmVudCgpLmhhc0NsYXNzKCduYXYtZXhwYW5kZWQnKSApIHtcclxuXHRcdFx0XHRcdFx0JCh0aGlzKS5jbG9zZXN0KCdsaScpLmZpbmQoICc+IHVsJyApLnNsaWRlVXAoICdmYXN0JywgZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHRcdFx0JCh0aGlzKS5jc3MoICdkaXNwbGF5JywgJycgKTtcclxuXHRcdFx0XHRcdFx0XHQkKHRoaXMpLmNsb3Nlc3QoJ2xpJykucmVtb3ZlQ2xhc3MoICduYXYtZXhwYW5kZWQnICk7XHJcblx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0aWYoICQodGhpcykucGFyZW50KCkuaGFzQ2xhc3MoJ2Ryb3Bkb3duJykgKSB7XHJcblx0XHRcdFx0XHRcdFx0JHRhYkl0ZW0ucGFyZW50KCkucmVtb3ZlQ2xhc3MoJ25hdi1leHBhbmRlZCcpO1xyXG5cdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHQkKHRoaXMpLnBhcmVudCgpLmFkZENsYXNzKCdleHBhbmRpbmcnKTtcclxuXHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdCQodGhpcykuY2xvc2VzdCgnbGknKS5maW5kKCAnPiB1bCcgKS5zbGlkZURvd24oICdmYXN0JywgZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHRcdFx0JHRhYkl0ZW0ucGFyZW50KCkucmVtb3ZlQ2xhc3MoJ2V4cGFuZGluZycpO1xyXG5cdFx0XHRcdFx0XHRcdCQodGhpcykuY2xvc2VzdCgnbGknKS5hZGRDbGFzcyggJ25hdi1leHBhbmRlZCcgKTtcclxuXHRcdFx0XHRcdFx0XHQkKHRoaXMpLmNzcyggJ2Rpc3BsYXknLCAnJyApO1xyXG5cclxuXHRcdFx0XHRcdFx0XHRpZiggKCQodGhpcykucG9zaXRpb24oKS50b3AgKyAkKHRoaXMpLmhlaWdodCgpKSA8ICR3aW5kb3cuc2Nyb2xsVG9wKCkgKSB7XHJcblx0XHRcdFx0XHRcdFx0XHQkKCdodG1sLGJvZHknKS5hbmltYXRlKHsgc2Nyb2xsVG9wOiAkKHRoaXMpLm9mZnNldCgpLnRvcCAtIDEwMCB9LCAzMDApO1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdGlmKCAhJCh0aGlzKS5wYXJlbnQoKS5oYXNDbGFzcygnZHJvcGRvd24nKSApIHtcclxuXHRcdFx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdGlmKCAkKHRoaXMpLnBhcmVudCgpLmhhc0NsYXNzKCduYXYtZXhwYW5kZWQnKSApIHtcclxuXHRcdFx0XHRcdFx0JHRhYkl0ZW0ucGFyZW50KCkucmVtb3ZlQ2xhc3MoJ25hdi1leHBhbmRlZCcpO1xyXG5cdFx0XHRcdFx0XHQkY29udGVudEJvZHkucmVtb3ZlQ2xhc3MoJ3RhYi1tZW51LW9wZW5lZCcpO1xyXG5cdFx0XHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdCR0YWJJdGVtLnBhcmVudCgpLnJlbW92ZUNsYXNzKCduYXYtZXhwYW5kZWQnKTtcclxuXHRcdFx0XHRcdCRjb250ZW50Qm9keS5hZGRDbGFzcygndGFiLW1lbnUtb3BlbmVkJyk7XHJcblx0XHRcdFx0XHQkKHRoaXMpLnBhcmVudCgpLmFkZENsYXNzKCduYXYtZXhwYW5kZWQnKTtcdFxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblxyXG5cdFx0JHdpbmRvdy5vbignc2Nyb2xsJywgZnVuY3Rpb24oKXtcclxuXHRcdFx0aWYoICR3aW5kb3cud2lkdGgoKSA8IDk5MiApIHtcclxuXHRcdFx0XHR2YXIgdGFiTmF2T2Zmc2V0ID0gKCAkdGFiTmF2LnBvc2l0aW9uKCkudG9wICsgJHRhYk5hdi5oZWlnaHQoKSApICsgMTAwLFxyXG5cdFx0XHRcdFx0d2luZG93T2Zmc2V0ID0gJHdpbmRvdy5zY3JvbGxUb3AoKTtcclxuXHJcblx0XHRcdFx0aWYoIHdpbmRvd09mZnNldCA+IHRhYk5hdk9mZnNldCApIHtcclxuXHRcdFx0XHRcdCR0YWJOYXYucmVtb3ZlQ2xhc3MoJ3Nob3cnKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cclxuXHRcdCR0b2dnbGVNZW51QnV0dG9uLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcblx0XHRcdGlmKCAhJHRhYk5hdi5oYXNDbGFzcygnc2hvdycpICkge1xyXG5cdFx0XHRcdCQoJ2h0bWwsYm9keScpLmFuaW1hdGUoeyBzY3JvbGxUb3A6ICR0YWJOYXYub2Zmc2V0KCkudG9wIC0gNTAgfSwgMzAwKTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0XHRcclxuXHR9XHJcblxyXG59KS5hcHBseSh0aGlzLCBbalF1ZXJ5XSk7XHJcblxyXG4vKiBCcm93c2VyIFNlbGVjdG9yICovXHJcbihmdW5jdGlvbigkKSB7XHJcblx0JC5leHRlbmQoe1xyXG5cclxuXHRcdGJyb3dzZXJTZWxlY3RvcjogZnVuY3Rpb24oKSB7XHJcblxyXG5cdFx0XHQvLyBqUXVlcnkuYnJvd3Nlci5tb2JpbGUgKGh0dHA6Ly9kZXRlY3Rtb2JpbGVicm93c2VyLmNvbS8pXHJcblx0XHRcdChmdW5jdGlvbihhKXsoalF1ZXJ5LmJyb3dzZXI9alF1ZXJ5LmJyb3dzZXJ8fHt9KS5tb2JpbGU9LyhhbmRyb2lkfGJiXFxkK3xtZWVnbykuK21vYmlsZXxhdmFudGdvfGJhZGFcXC98YmxhY2tiZXJyeXxibGF6ZXJ8Y29tcGFsfGVsYWluZXxmZW5uZWN8aGlwdG9wfGllbW9iaWxlfGlwKGhvbmV8b2QpfGlyaXN8a2luZGxlfGxnZSB8bWFlbW98bWlkcHxtbXB8bW9iaWxlLitmaXJlZm94fG5ldGZyb250fG9wZXJhIG0ob2J8aW4paXxwYWxtKCBvcyk/fHBob25lfHAoaXhpfHJlKVxcL3xwbHVja2VyfHBvY2tldHxwc3B8c2VyaWVzKDR8NikwfHN5bWJpYW58dHJlb3x1cFxcLihicm93c2VyfGxpbmspfHZvZGFmb25lfHdhcHx3aW5kb3dzIChjZXxwaG9uZSl8eGRhfHhpaW5vL2kudGVzdChhKXx8LzEyMDd8NjMxMHw2NTkwfDNnc298NHRocHw1MFsxLTZdaXw3NzBzfDgwMnN8YSB3YXxhYmFjfGFjKGVyfG9vfHNcXC0pfGFpKGtvfHJuKXxhbChhdnxjYXxjbyl8YW1vaXxhbihleHxueXx5dyl8YXB0dXxhcihjaHxnbyl8YXModGV8dXMpfGF0dHd8YXUoZGl8XFwtbXxyIHxzICl8YXZhbnxiZShja3xsbHxucSl8YmkobGJ8cmQpfGJsKGFjfGF6KXxicihlfHYpd3xidW1ifGJ3XFwtKG58dSl8YzU1XFwvfGNhcGl8Y2N3YXxjZG1cXC18Y2VsbHxjaHRtfGNsZGN8Y21kXFwtfGNvKG1wfG5kKXxjcmF3fGRhKGl0fGxsfG5nKXxkYnRlfGRjXFwtc3xkZXZpfGRpY2F8ZG1vYnxkbyhjfHApb3xkcygxMnxcXC1kKXxlbCg0OXxhaSl8ZW0obDJ8dWwpfGVyKGljfGswKXxlc2w4fGV6KFs0LTddMHxvc3x3YXx6ZSl8ZmV0Y3xmbHkoXFwtfF8pfGcxIHV8ZzU2MHxnZW5lfGdmXFwtNXxnXFwtbW98Z28oXFwud3xvZCl8Z3IoYWR8dW4pfGhhaWV8aGNpdHxoZFxcLShtfHB8dCl8aGVpXFwtfGhpKHB0fHRhKXxocCggaXxpcCl8aHNcXC1jfGh0KGMoXFwtfCB8X3xhfGd8cHxzfHQpfHRwKXxodShhd3x0Yyl8aVxcLSgyMHxnb3xtYSl8aTIzMHxpYWMoIHxcXC18XFwvKXxpYnJvfGlkZWF8aWcwMXxpa29tfGltMWt8aW5ub3xpcGFxfGlyaXN8amEodHx2KWF8amJyb3xqZW11fGppZ3N8a2RkaXxrZWppfGtndCggfFxcLyl8a2xvbnxrcHQgfGt3Y1xcLXxreW8oY3xrKXxsZShub3x4aSl8bGcoIGd8XFwvKGt8bHx1KXw1MHw1NHxcXC1bYS13XSl8bGlid3xseW54fG0xXFwtd3xtM2dhfG01MFxcL3xtYSh0ZXx1aXx4byl8bWMoMDF8MjF8Y2EpfG1cXC1jcnxtZShyY3xyaSl8bWkobzh8b2F8dHMpfG1tZWZ8bW8oMDF8MDJ8Yml8ZGV8ZG98dChcXC18IHxvfHYpfHp6KXxtdCg1MHxwMXx2ICl8bXdicHxteXdhfG4xMFswLTJdfG4yMFsyLTNdfG4zMCgwfDIpfG41MCgwfDJ8NSl8bjcoMCgwfDEpfDEwKXxuZSgoY3xtKVxcLXxvbnx0Znx3Znx3Z3x3dCl8bm9rKDZ8aSl8bnpwaHxvMmltfG9wKHRpfHd2KXxvcmFufG93ZzF8cDgwMHxwYW4oYXxkfHQpfHBkeGd8cGcoMTN8XFwtKFsxLThdfGMpKXxwaGlsfHBpcmV8cGwoYXl8dWMpfHBuXFwtMnxwbyhja3xydHxzZSl8cHJveHxwc2lvfHB0XFwtZ3xxYVxcLWF8cWMoMDd8MTJ8MjF8MzJ8NjB8XFwtWzItN118aVxcLSl8cXRla3xyMzgwfHI2MDB8cmFrc3xyaW05fHJvKHZlfHpvKXxzNTVcXC98c2EoZ2V8bWF8bW18bXN8bnl8dmEpfHNjKDAxfGhcXC18b298cFxcLSl8c2RrXFwvfHNlKGMoXFwtfDB8MSl8NDd8bWN8bmR8cmkpfHNnaFxcLXxzaGFyfHNpZShcXC18bSl8c2tcXC0wfHNsKDQ1fGlkKXxzbShhbHxhcnxiM3xpdHx0NSl8c28oZnR8bnkpfHNwKDAxfGhcXC18dlxcLXx2ICl8c3koMDF8bWIpfHQyKDE4fDUwKXx0NigwMHwxMHwxOCl8dGEoZ3R8bGspfHRjbFxcLXx0ZGdcXC18dGVsKGl8bSl8dGltXFwtfHRcXC1tb3x0byhwbHxzaCl8dHMoNzB8bVxcLXxtM3xtNSl8dHhcXC05fHVwKFxcLmJ8ZzF8c2kpfHV0c3R8djQwMHx2NzUwfHZlcml8dmkocmd8dGUpfHZrKDQwfDVbMC0zXXxcXC12KXx2bTQwfHZvZGF8dnVsY3x2eCg1Mnw1M3w2MHw2MXw3MHw4MHw4MXw4M3w4NXw5OCl8dzNjKFxcLXwgKXx3ZWJjfHdoaXR8d2koZyB8bmN8bncpfHdtbGJ8d29udXx4NzAwfHlhc1xcLXx5b3VyfHpldG98enRlXFwtL2kudGVzdChhLnN1YnN0cigwLDQpKX0pKG5hdmlnYXRvci51c2VyQWdlbnR8fG5hdmlnYXRvci52ZW5kb3J8fHdpbmRvdy5vcGVyYSk7XHJcblxyXG5cdFx0XHQvLyBUb3VjaFxyXG5cdFx0XHR2YXIgaGFzVG91Y2ggPSAnb250b3VjaHN0YXJ0JyBpbiB3aW5kb3cgfHwgbmF2aWdhdG9yLm1zTWF4VG91Y2hQb2ludHM7XHJcblxyXG5cdFx0XHR2YXIgdSA9IG5hdmlnYXRvci51c2VyQWdlbnQsXHJcblx0XHRcdFx0dWEgPSB1LnRvTG93ZXJDYXNlKCksXHJcblx0XHRcdFx0aXMgPSBmdW5jdGlvbiAodCkge1xyXG5cdFx0XHRcdFx0cmV0dXJuIHVhLmluZGV4T2YodCkgPiAtMTtcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdGcgPSAnZ2Vja28nLFxyXG5cdFx0XHRcdHcgPSAnd2Via2l0JyxcclxuXHRcdFx0XHRzID0gJ3NhZmFyaScsXHJcblx0XHRcdFx0byA9ICdvcGVyYScsXHJcblx0XHRcdFx0aCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCxcclxuXHRcdFx0XHRiID0gWyghKC9vcGVyYXx3ZWJ0di9pLnRlc3QodWEpKSAmJiAvbXNpZVxccyhcXGQpLy50ZXN0KHVhKSkgPyAoJ2llIGllJyArIHBhcnNlRmxvYXQobmF2aWdhdG9yLmFwcFZlcnNpb24uc3BsaXQoXCJNU0lFXCIpWzFdKSkgOiBpcygnZmlyZWZveC8yJykgPyBnICsgJyBmZjInIDogaXMoJ2ZpcmVmb3gvMy41JykgPyBnICsgJyBmZjMgZmYzXzUnIDogaXMoJ2ZpcmVmb3gvMycpID8gZyArICcgZmYzJyA6IGlzKCdnZWNrby8nKSA/IGcgOiBpcygnb3BlcmEnKSA/IG8gKyAoL3ZlcnNpb25cXC8oXFxkKykvLnRlc3QodWEpID8gJyAnICsgbyArIFJlZ0V4cC5qUXVlcnkxIDogKC9vcGVyYShcXHN8XFwvKShcXGQrKS8udGVzdCh1YSkgPyAnICcgKyBvICsgUmVnRXhwLmpRdWVyeTIgOiAnJykpIDogaXMoJ2tvbnF1ZXJvcicpID8gJ2tvbnF1ZXJvcicgOiBpcygnY2hyb21lJykgPyB3ICsgJyBjaHJvbWUnIDogaXMoJ2lyb24nKSA/IHcgKyAnIGlyb24nIDogaXMoJ2FwcGxld2Via2l0LycpID8gdyArICcgJyArIHMgKyAoL3ZlcnNpb25cXC8oXFxkKykvLnRlc3QodWEpID8gJyAnICsgcyArIFJlZ0V4cC5qUXVlcnkxIDogJycpIDogaXMoJ21vemlsbGEvJykgPyBnIDogJycsIGlzKCdqMm1lJykgPyAnbW9iaWxlJyA6IGlzKCdpcGhvbmUnKSA/ICdpcGhvbmUnIDogaXMoJ2lwb2QnKSA/ICdpcG9kJyA6IGlzKCdtYWMnKSA/ICdtYWMnIDogaXMoJ2RhcndpbicpID8gJ21hYycgOiBpcygnd2VidHYnKSA/ICd3ZWJ0dicgOiBpcygnd2luJykgPyAnd2luJyA6IGlzKCdmcmVlYnNkJykgPyAnZnJlZWJzZCcgOiAoaXMoJ3gxMScpIHx8IGlzKCdsaW51eCcpKSA/ICdsaW51eCcgOiAnJywgJ2pzJ107XHJcblxyXG5cdFx0XHRjID0gYi5qb2luKCcgJyk7XHJcblxyXG5cdFx0XHRpZiAoJC5icm93c2VyLm1vYmlsZSkge1xyXG5cdFx0XHRcdGMgKz0gJyBtb2JpbGUnO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZiAoaGFzVG91Y2gpIHtcclxuXHRcdFx0XHRjICs9ICcgdG91Y2gnO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRoLmNsYXNzTmFtZSArPSAnICcgKyBjO1xyXG5cclxuXHRcdFx0Ly8gSUUxMSBEZXRlY3RcclxuXHRcdFx0dmFyIGlzSUUxMSA9ICEod2luZG93LkFjdGl2ZVhPYmplY3QpICYmIFwiQWN0aXZlWE9iamVjdFwiIGluIHdpbmRvdztcclxuXHJcblx0XHRcdGlmIChpc0lFMTEpIHtcclxuXHRcdFx0XHQkKCdodG1sJykucmVtb3ZlQ2xhc3MoJ2dlY2tvJykuYWRkQ2xhc3MoJ2llIGllMTEnKTtcclxuXHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdC8vIERhcmsgYW5kIEJveGVkIENvbXBhdGliaWxpdHlcclxuXHRcdFx0aWYoJCgnYm9keScpLmhhc0NsYXNzKCdkYXJrJykpIHtcclxuXHRcdFx0XHQkKCdodG1sJykuYWRkQ2xhc3MoJ2RhcmsnKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYoJCgnYm9keScpLmhhc0NsYXNzKCdib3hlZCcpKSB7XHJcblx0XHRcdFx0JCgnaHRtbCcpLmFkZENsYXNzKCdib3hlZCcpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0fVxyXG5cclxuXHR9KTtcclxuXHJcblx0JC5icm93c2VyU2VsZWN0b3IoKTtcclxuXHJcbn0pKGpRdWVyeSk7XHJcblxyXG4vLyBNYWlsYm94XHJcbihmdW5jdGlvbih0aGVtZSwgJCkge1xyXG5cclxuXHR0aGVtZSA9IHRoZW1lIHx8IHt9O1xyXG5cclxuXHR2YXIgaW5zdGFuY2VOYW1lID0gJ19fbWFpbGJveCc7XHJcblxyXG5cdHZhciBjYXBpdGFsaXplU3RyaW5nID0gZnVuY3Rpb24oIHN0ciApIHtcclxuICAgIFx0cmV0dXJuIHN0ci5jaGFyQXQoIDAgKS50b1VwcGVyQ2FzZSgpICsgc3RyLnNsaWNlKCAxICk7XHJcblx0fVxyXG5cclxuXHR2YXIgTWFpbGJveCA9IGZ1bmN0aW9uKCR3cmFwcGVyKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5pbml0aWFsaXplKCR3cmFwcGVyKTtcclxuXHR9O1xyXG5cclxuXHRNYWlsYm94LnByb3RvdHlwZSA9IHtcclxuXHRcdGluaXRpYWxpemU6IGZ1bmN0aW9uKCR3cmFwcGVyKSB7XHJcblx0XHRcdGlmICggJHdyYXBwZXIuZGF0YSggaW5zdGFuY2VOYW1lICkgKSB7XHJcblx0XHRcdFx0cmV0dXJuIHRoaXM7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHRoaXMuJHdyYXBwZXIgPSAkd3JhcHBlcjtcclxuXHJcblx0XHRcdHRoaXNcclxuXHRcdFx0XHQuc2V0VmFycygpXHJcblx0XHRcdFx0LnNldERhdGEoKVxyXG5cdFx0XHRcdC5idWlsZCgpXHJcblx0XHRcdFx0LmV2ZW50cygpO1xyXG5cclxuXHRcdFx0cmV0dXJuIHRoaXM7XHJcblx0XHR9LFxyXG5cclxuXHRcdHNldFZhcnM6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHR0aGlzLnZpZXcgPSBjYXBpdGFsaXplU3RyaW5nKCB0aGlzLiR3cmFwcGVyLmRhdGEoICdtYWlsYm94LXZpZXcnICkgfHwgXCJcIiApO1xyXG5cclxuXHRcdFx0cmV0dXJuIHRoaXM7XHJcblx0XHR9LFxyXG5cclxuXHRcdHNldERhdGE6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHR0aGlzLiR3cmFwcGVyLmRhdGEoaW5zdGFuY2VOYW1lLCB0aGlzKTtcclxuXHJcblx0XHRcdHJldHVybiB0aGlzO1xyXG5cdFx0fSxcclxuXHJcblx0XHRidWlsZDogZnVuY3Rpb24oKSB7XHJcblxyXG5cdFx0XHRpZiAoIHR5cGVvZiB0aGlzWyAnYnVpbGQnICsgdGhpcy52aWV3IF0gPT09ICdmdW5jdGlvbicgKSB7XHJcblx0XHRcdFx0dGhpc1sgJ2J1aWxkJyArIHRoaXMudmlldyBdLmNhbGwoIHRoaXMgKTtcclxuXHRcdFx0fVxyXG5cclxuXHJcblx0XHRcdHJldHVybiB0aGlzO1xyXG5cdFx0fSxcclxuXHJcblx0XHRldmVudHM6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRpZiAoIHR5cGVvZiB0aGlzWyAnZXZlbnRzJyArIHRoaXMudmlldyBdID09PSAnZnVuY3Rpb24nICkge1xyXG5cdFx0XHRcdHRoaXNbICdldmVudHMnICsgdGhpcy52aWV3IF0uY2FsbCggdGhpcyApO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRyZXR1cm4gdGhpcztcclxuXHRcdH0sXHJcblxyXG5cdFx0YnVpbGRGb2xkZXI6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHR0aGlzLiR3cmFwcGVyLmZpbmQoJy5tYWlsYm94LWVtYWlsLWxpc3QgLm5hbm8nKS5uYW5vU2Nyb2xsZXIoe1xyXG5cdFx0XHRcdGFsd2F5c1Zpc2libGU6IHRydWUsXHJcblx0XHRcdFx0cHJldmVudFBhZ2VTY3JvbGxpbmc6IHRydWVcclxuXHRcdFx0fSk7XHJcblx0XHR9LFxyXG5cclxuXHRcdGJ1aWxkRW1haWw6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHR0aGlzLmJ1aWxkQ29tcG9zZXIoKTtcclxuXHRcdH0sXHJcblxyXG5cdFx0YnVpbGRDb21wb3NlOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0dGhpcy5idWlsZENvbXBvc2VyKCk7XHJcblx0XHR9LFxyXG5cclxuXHRcdGJ1aWxkQ29tcG9zZXI6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHR0aGlzLiR3cmFwcGVyLmZpbmQoICcjY29tcG9zZS1maWVsZCcgKS5zdW1tZXJub3RlKHtcclxuXHRcdFx0XHRoZWlnaHQ6IDI1MCxcclxuXHRcdFx0XHR0b29sYmFyOiBbXHJcblx0XHRcdFx0XHRbJ3N0eWxlJywgWydzdHlsZSddXSxcclxuXHRcdFx0XHRcdFsnZm9udCcsIFsnYm9sZCcsICdpdGFsaWMnLCAndW5kZXJsaW5lJywgJ2NsZWFyJ11dLFxyXG5cdFx0XHRcdFx0Wydmb250bmFtZScsIFsnZm9udG5hbWUnXV0sXHJcblx0XHRcdFx0XHRbJ2NvbG9yJywgWydjb2xvciddXSxcclxuXHRcdFx0XHRcdFsncGFyYScsIFsndWwnLCAnb2wnLCAncGFyYWdyYXBoJ11dLFxyXG5cdFx0XHRcdFx0WydoZWlnaHQnLCBbJ2hlaWdodCddXSxcclxuXHRcdFx0XHRcdFsndGFibGUnLCBbJ3RhYmxlJ11dLFxyXG5cdFx0XHRcdFx0WydpbnNlcnQnLCBbJ2xpbmsnLCAncGljdHVyZScsICd2aWRlbyddXSxcclxuXHRcdFx0XHRcdFsndmlldycsIFsnZnVsbHNjcmVlbiddXSxcclxuXHRcdFx0XHRcdFsnaGVscCcsIFsnaGVscCddXVxyXG5cdFx0XHRcdF1cclxuXHRcdFx0fSk7XHJcblx0XHR9LFxyXG5cclxuXHRcdGV2ZW50c0NvbXBvc2U6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHR2YXIgJGNvbXBvc2VyLFxyXG5cdFx0XHRcdCRjb250ZW50Qm9keSxcclxuXHRcdFx0XHQkaHRtbCxcclxuXHRcdFx0XHQkaW5uZXJCb2R5O1xyXG5cclxuXHRcdFx0JGNvbXBvc2VyXHRcdD0gJCggJy5ub3RlLWVkaXRhYmxlJyApO1xyXG5cdFx0XHQkY29udGVudEJvZHlcdD0gJCggJy5jb250ZW50LWJvZHknICk7XHJcblx0XHRcdCRodG1sXHRcdFx0PSAkKCAnaHRtbCcgKTtcclxuXHRcdFx0JGlubmVyQm9keVx0XHQ9ICQoICcuaW5uZXItYm9keScgKTtcclxuXHJcblx0XHRcdHZhciBhZGp1c3RDb21wb3NlU2l6ZSA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdHZhciBjb21wb3NlckhlaWdodCxcclxuXHRcdFx0XHRcdGNvbXBvc2VyVG9wLFxyXG5cdFx0XHRcdFx0Y29udGVudEJvZHlQYWRkaW5nQm90dG9tLFxyXG5cdFx0XHRcdFx0aW5uZXJCb2R5SGVpZ2h0LFxyXG5cdFx0XHRcdFx0dmlld3BvcnRIZWlnaHQsXHJcblx0XHRcdFx0XHR2aWV3cG9ydFdpZHRoO1xyXG5cclxuXHJcblx0XHRcdFx0Y29udGVudEJvZHlQYWRkaW5nQm90dG9tXHQ9IHBhcnNlSW50KCAkY29udGVudEJvZHkuY3NzKCdwYWRkaW5nQm90dG9tJyksIDEwICkgfHwgMDtcclxuXHRcdFx0XHR2aWV3cG9ydEhlaWdodFx0XHRcdFx0PSBNYXRoLm1heCggZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCwgd2luZG93LmlubmVySGVpZ2h0IHx8IDAgKTtcclxuXHRcdFx0XHR2aWV3cG9ydFdpZHRoXHRcdFx0XHQ9IE1hdGgubWF4KCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGgsIHdpbmRvdy5pbm5lcldpZHRoIHx8IDAgKTtcclxuXHJcblx0XHRcdFx0JGNvbXBvc2VyLmNzcyggJ2hlaWdodCcsICcnICk7XHJcblxyXG5cdFx0XHRcdGlmICggdmlld3BvcnRXaWR0aCA8IDc2NyB8fCAkaHRtbC5oYXNDbGFzcygnbW9iaWxlLWRldmljZScpICkge1xyXG5cdFx0XHRcdFx0Y29tcG9zZXJUb3BcdCAgID0gJGNvbXBvc2VyLm9mZnNldCgpLnRvcDtcclxuXHRcdFx0XHRcdGNvbXBvc2VySGVpZ2h0ID0gdmlld3BvcnRIZWlnaHQgLSBjb21wb3NlclRvcDtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0aWYgKCAkaHRtbC5oYXNDbGFzcyggJ2ZpeGVkJyApICkge1xyXG5cdFx0XHRcdFx0XHRjb21wb3NlclRvcFx0PSAkY29tcG9zZXIub2Zmc2V0KCkudG9wO1xyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0Y29tcG9zZXJUb3BcdD0gJGNvbXBvc2VyLnBvc2l0aW9uKCkudG9wO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0Y29tcG9zZXJIZWlnaHQgPSAkaW5uZXJCb2R5Lm91dGVySGVpZ2h0KCkgLSBjb21wb3NlclRvcDtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdGNvbXBvc2VySGVpZ2h0IC09IGNvbnRlbnRCb2R5UGFkZGluZ0JvdHRvbTtcclxuXHJcblx0XHRcdFx0JGNvbXBvc2VyLmNzcyh7XHJcblx0XHRcdFx0XHRoZWlnaHQ6IGNvbXBvc2VySGVpZ2h0XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH07XHJcblxyXG5cdFx0XHR2YXIgdGltZXI7XHJcblx0XHRcdCQod2luZG93KVxyXG5cdFx0XHRcdC5vbiggJ3Jlc2l6ZSBvcmllbnRhdGlvbmNoYW5nZSBzaWRlYmFyLWxlZnQtdG9nZ2xlIG1haWxib3gtcmVjYWxjJywgZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHRjbGVhclRpbWVvdXQoIHRpbWVyICk7XHJcblx0XHRcdFx0XHR0aW1lciA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHRcdGFkanVzdENvbXBvc2VTaXplKCk7XHJcblx0XHRcdFx0XHR9LCAxMDApO1xyXG5cdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0YWRqdXN0Q29tcG9zZVNpemUoKTtcclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHQvLyBleHBvc2UgdG8gc2NvcGVcclxuXHQkLmV4dGVuZCh0aGVtZSwge1xyXG5cdFx0TWFpbGJveDogTWFpbGJveFxyXG5cdH0pO1xyXG5cclxuXHQvLyBqcXVlcnkgcGx1Z2luXHJcblx0JC5mbi50aGVtZU1haWxib3ggPSBmdW5jdGlvbihvcHRzKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHR2YXIgJHRoaXMgPSAkKHRoaXMpO1xyXG5cclxuXHRcdFx0aWYgKCR0aGlzLmRhdGEoaW5zdGFuY2VOYW1lKSkge1xyXG5cdFx0XHRcdHJldHVybiAkdGhpcy5kYXRhKGluc3RhbmNlTmFtZSk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0cmV0dXJuIG5ldyBNYWlsYm94KCR0aGlzKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcbn0pLmFwcGx5KHRoaXMsIFt3aW5kb3cudGhlbWUsIGpRdWVyeV0pOyJdLCJuYW1lcyI6WyJ3aW5kb3ciLCJ0aGVtZSIsImZuIiwiZ2V0T3B0aW9ucyIsIm9wdHMiLCJfdHlwZW9mIiwiSlNPTiIsInBhcnNlIiwicmVwbGFjZSIsImUiLCIkIiwiaW5zdGFuY2VOYW1lIiwiUGx1Z2luQW5pbWF0ZSIsIiRlbCIsImluaXRpYWxpemUiLCJkZWZhdWx0cyIsImFjY1giLCJhY2NZIiwiZGVsYXkiLCJkdXJhdGlvbiIsInByb3RvdHlwZSIsImRhdGEiLCJzZXREYXRhIiwic2V0T3B0aW9ucyIsImJ1aWxkIiwib3B0aW9ucyIsImV4dGVuZCIsIndyYXBwZXIiLCJzZWxmIiwiZWxUb3BEaXN0YW5jZSIsIm9mZnNldCIsInRvcCIsIndpbmRvd1RvcERpc3RhbmNlIiwic2Nyb2xsVG9wIiwiZG9jdW1lbnQiLCJyZWFkeSIsImFkZENsYXNzIiwiaGFzQ2xhc3MiLCJ3aWR0aCIsImFwcGVhciIsIm9uZSIsImV2IiwiYXR0ciIsImNzcyIsInNldFRpbWVvdXQiLCJ0cmlnZ2VyIiwidGhlbWVQbHVnaW5BbmltYXRlIiwibWFwIiwiJHRoaXMiLCJhcHBseSIsImpRdWVyeSIsIiR3aW5kb3ciLCJ0b2dnbGVDbGFzcyIsIiR0YXJnZXQiLCJjbGFzc05hbWUiLCJldmVudE5hbWUiLCJvbiIsInByZXZlbnREZWZhdWx0IiwiYWRkZWQiLCJyZW1vdmVkIiwiZWFjaCIsImRpcmVjdGlvbiIsImZpbmQiLCJwYXJlbnQiLCJtYXRjaCIsInNpYmxpbmdzIiwibGVuZ3RoIiwiJHJvdyIsImNsb3Nlc3QiLCJyZW1vdmUiLCJjaGlsZHJlbiIsInJlbW92ZUNsYXNzIiwiaW5pdGlhbGl6ZWQiLCJQbHVnaW5DYXJvdXNlbCIsIm5hdlRleHQiLCJvd2xDYXJvdXNlbCIsInRoZW1lUGx1Z2luQ2Fyb3VzZWwiLCJQbHVnaW5DaGFydENpcmN1bGFyIiwiYmFyQ29sb3IiLCJ0cmFja0NvbG9yIiwic2NhbGVDb2xvciIsInNjYWxlTGVuZ3RoIiwibGluZUNhcCIsImxpbmVXaWR0aCIsInNpemUiLCJyb3RhdGUiLCJhbmltYXRlIiwiZW5hYmxlZCIsInZhbHVlIiwicGVyY2VudEVsIiwic2hvdWxkQW5pbWF0ZSIsImlzRnVuY3Rpb24iLCJicm93c2VyIiwibW9iaWxlIiwib25TdGVwIiwiZnJvbSIsInRvIiwiY3VycmVudFZhbHVlIiwiaHRtbCIsInBhcnNlSW50IiwiZWFzeVBpZUNoYXJ0IiwidXBkYXRlIiwiQ2hhcnQiLCJ0aGVtZVBsdWdpbkNoYXJ0Q2lyY3VsYXIiLCJQbHVnaW5Db2RlTWlycm9yIiwibGluZU51bWJlcnMiLCJzdHlsZUFjdGl2ZUxpbmUiLCJtYXRjaEJyYWNrZXRzIiwiQ29kZU1pcnJvciIsImZyb21UZXh0QXJlYSIsImdldCIsInRoZW1lUGx1Z2luQ29kZU1pcnJvciIsIlBsdWdpbkNvbG9yUGlja2VyIiwiY29sb3JwaWNrZXIiLCJ0aGVtZVBsdWdpbkNvbG9yUGlja2VyIiwiZGF0YVRhYmxlIiwib0xhbmd1YWdlIiwic0xlbmd0aE1lbnUiLCJzUHJvY2Vzc2luZyIsInNTZWFyY2giLCJmbkluaXRDb21wbGV0ZSIsInNldHRpbmdzIiwianNvbiIsIm5UYWJsZVdyYXBwZXIiLCJzZWxlY3QyIiwibWluaW11bVJlc3VsdHNGb3JTZWFyY2giLCIkc2VhcmNoIiwicGxhY2Vob2xkZXIiLCJzZWFyY2hQbGFjZWhvbGRlciIsIlBsdWdpbkRhdGVQaWNrZXIiLCJzZXRWYXJzIiwic2tpbiIsImJvb3RzdHJhcERQIiwicGlja2VyIiwidGhlbWVQbHVnaW5EYXRlUGlja2VyIiwiTmF2Iiwic2Nyb2xsRGVsYXkiLCJzY3JvbGxBbmltYXRpb24iLCIkd3JhcHBlciIsImV2ZW50cyIsIiRodG1sIiwiJGhlYWRlciIsInRodW1iSW5mb1ByZXZpZXciLCJhcHBlbmQiLCJkb2N1bWVudEVsZW1lbnQiLCJzdG9wUHJvcGFnYXRpb24iLCJoYW5kbGVkIiwibGkiLCJsb2NhdGlvbiIsImhyZWYiLCJwYXJlbnRzIiwidGFyZ2V0IiwiaXMiLCJzY3JvbGxUb1RhcmdldCIsIlBsdWdpbklPUzdTd2l0Y2giLCJzd2l0Y2hlciIsIlN3aXRjaCIsImVsIiwidG9nZ2xlIiwidGhlbWVQbHVnaW5JT1M3U3dpdGNoIiwiZm9ybVRvT2JqZWN0IiwiYXJyYXlEYXRhIiwib2JqZWN0RGF0YSIsInNlcmlhbGl6ZUFycmF5IiwibmFtZSIsInB1c2giLCJQbHVnaW5MaWdodGJveCIsInRDbG9zZSIsInRMb2FkaW5nIiwiZ2FsbGVyeSIsInRQcmV2IiwidE5leHQiLCJ0Q291bnRlciIsImltYWdlIiwidEVycm9yIiwiYWpheCIsIm1hZ25pZmljUG9wdXAiLCJ0aGVtZVBsdWdpbkxpZ2h0Ym94IiwibG9hZGluZ092ZXJsYXlUZW1wbGF0ZSIsImpvaW4iLCJMb2FkaW5nT3ZlcmxheSIsIiRvdmVybGF5IiwibWF0Y2hQcm9wZXJ0aWVzIiwibG9hZGVyQ2xhc3MiLCJnZXRMb2FkZXJDbGFzcyIsImJhY2tncm91bmRDb2xvciIsIiRjYWNoZWRPdmVybGF5IiwiY2xvbmUiLCJfc2VsZiIsInN0YXJ0U2hvd2luZyIsInNob3ciLCJoaWRlT25XaW5kb3dMb2FkIiwiaGlkZSIsImxpc3Rlbk9uIiwicG9zaXRpb24iLCJ0b0xvd2VyQ2FzZSIsImkiLCJsIiwicHJvcGVydGllcyIsIm9iaiIsImhleENvbG9yIiwiciIsImciLCJiIiwieWlxIiwiY29sb3JUb0hleCIsImNvbG9yIiwiaGV4IiwicmdiIiwiaW5kZXhPZiIsInRvU3RyaW5nIiwic2xpY2UiLCJzdWJzdHIiLCJsb2FkaW5nT3ZlcmxheSIsIkxvY2tTY3JlZW4iLCIkYm9keSIsImxvY2tIVE1MIiwidXNlcmluZm8iLCJnZXRVc2VySW5mbyIsImJ1aWxkVGVtcGxhdGUiLCIkbG9jayIsIiR1c2VyUGljdHVyZSIsIiR1c2VyTmFtZSIsIiR1c2VyRW1haWwiLCJmb3JtRXZlbnRzIiwiJGZvcm0iLCJwaWN0dXJlIiwidGV4dCIsInVzZXJuYW1lIiwiZW1haWwiLCJvcGVuIiwiaXRlbXMiLCJzcmMiLCJ0eXBlIiwibW9kYWwiLCJtYWluQ2xhc3MiLCJjYWxsYmFja3MiLCJjaGFuZ2UiLCJjb250ZW50IiwiY2xvc2UiLCIkaW5mbyIsInRpbWVvdXRzIiwicm91bmROdW1iZXIiLCJudW1iZXIiLCJwcmVjaXNpb24iLCJhIiwiTWF0aCIsInJvdW5kIiwiR01hcEJ1aWxkZXIiLCJtYXBTZWxlY3RvciIsIm1hcmtlcnMiLCJsaXN0IiwicmVtb3ZlQWxsIiwicHJldmlld01vZGFsIiwiZ2V0Q29kZU1vZGFsIiwibWFwT3B0aW9ucyIsImNlbnRlciIsImxhdCIsImxuZyIsInBhbkNvbnRyb2wiLCJ6b29tIiwiJG1hcENvbnRhaW5lciIsIiRwcmV2aWV3TW9kYWwiLCIkZ2V0Q29kZU1vZGFsIiwibWFya2VyIiwiJG1vZGFsIiwiJGxpc3QiLCIkcmVtb3ZlQWxsIiwiU25henp5VGhlbWVzIiwidGhlbWVPcHRzIiwiaWQiLCJnZW9jb2RlciIsImdvb2dsZSIsIm1hcHMiLCJHZW9jb2RlciIsImV2ZW50IiwiYWRkRG9tTGlzdGVuZXIiLCJMYXRMbmciLCJNYXAiLCJ1cGRhdGVDb250cm9sIiwibWFwRXZlbnRzIiwiZmllbGQiLCJ2YWwiLCJ1cGRhdGVNYXAiLCJzYXZlTWFya2VyIiwicmVtb3ZlQWxsTWFya2VycyIsInByZXZpZXciLCJjb250ZW50V2luZG93IiwiYm9keSIsImlubmVySFRNTCIsImdldENvZGUiLCJhZGRMaXN0ZW5lciIsImNvb3JkcyIsImdldENlbnRlciIsImdldFpvb20iLCJnZXRNYXBUeXBlSWQiLCJwcm9wIiwidXBkYXRlRm4iLCJ1cGRhdGVNYXBQcm9wZXJ0eSIsImNvbnNvbGUiLCJpbmZvIiwibGF0bG5nIiwic2V0Q2VudGVyIiwiem9vbWxldmVsIiwiYXJndW1lbnRzIiwic2V0Wm9vbSIsIm1hcHR5cGVjb250cm9sIiwibWFwVHlwZUNvbnRyb2wiLCJtYXBUeXBlQ29udHJvbE9wdGlvbnMiLCJzdHlsZSIsIk1hcFR5cGVDb250cm9sU3R5bGUiLCJ0b1VwcGVyQ2FzZSIsInpvb21jb250cm9sIiwiem9vbUNvbnRyb2wiLCJ6b29tQ29udHJvbE9wdGlvbnMiLCJab29tQ29udHJvbFN0eWxlIiwic2NhbGVjb250cm9sIiwic2NhbGVDb250cm9sIiwic3RyZWV0dmlld2NvbnRyb2wiLCJzdHJlZXRWaWV3Q29udHJvbCIsInBhbmNvbnRyb2wiLCJvdmVydmlld2NvbnRyb2wiLCJvdmVydmlld01hcENvbnRyb2wiLCJvdmVydmlld01hcENvbnRyb2xPcHRpb25zIiwib3BlbmVkIiwiZHJhZ2dhYmxlY29udHJvbCIsImRyYWdnYWJsZSIsImNsaWNrdG96b29tY29udHJvbCIsImRpc2FibGVEb3VibGVDbGlja1pvb20iLCJzY3JvbGx3aGVlbGNvbnRyb2wiLCJzY3JvbGx3aGVlbCIsIm1hcHR5cGUiLCJtYXBTdHlsZXMiLCJtYXBUeXBlIiwiZmlsdGVyIiwiTWFwVHlwZUlkIiwibWFwVHlwZUlkIiwiaW5BcnJheSIsInN0eWxlcyIsImV2YWwiLCJtYXB0aGVtZSIsInVwZGF0ZUNvbnRyb2xWYWx1ZSIsIiRjb250cm9sIiwibGV2ZWwiLCJlZGl0TWFya2VyIiwiY3VycmVudE1hcmtlciIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJyZW1vdmVNYXJrZXIiLCJfaW5zdGFuY2UiLCJzZXRNYXAiLCJfJGh0bWwiLCJzcGxpY2UiLCJfZ2VvY29kZSIsInN0YXR1cyIsImdlb2NvZGUiLCJhZGRyZXNzIiwicmVzcG9uc2UiLCJfb25HZW9jb2RlUmVzdWx0IiwicmVzdWx0IiwiR2VvY29kZXJTdGF0dXMiLCJPSyIsIlpFUk9fUkVTVUxUUyIsImdlb21ldHJ5IiwiZGVzYyIsIk1hcmtlciIsIl9iaW5kTWFya2VyQ2xpY2siLCJfYXBwZW5kTWFya2VyVG9MaXN0IiwicmVzZXQiLCJfaW5mb1dpbmRvdyIsIkluZm9XaW5kb3ciLCJpc09wZW5lZCIsImN1c3RvbVNjcmlwdCIsImdvb2dsZVNjcmlwdCIsImlmcmFtZSIsInByZXZpZXdIdG1sIiwiY3JlYXRlRWxlbWVudCIsImdlbmVyYXRlIiwiYXBwZW5kQ2hpbGQiLCJ3b3JrIiwib3V0cHV0IiwiJHRoZW1lQ29udHJvbCIsIm0iLCJvYmplY3QiLCJsb2ciLCJNYXBzIiwidGhlbWVHTWFwQnVpbGRlciIsImluc3RhbmNlIiwiYnVpbGRlciIsIlBsdWdpbk1hcmtkb3duRWRpdG9yIiwiaWNvbmxpYnJhcnkiLCJidXR0b25zIiwiaWNvbiIsImZhIiwibWFya2Rvd24iLCJ0aGVtZVBsdWdpbk1hcmtkb3duRWRpdG9yIiwiUGx1Z2luTWFza2VkSW5wdXQiLCJtYXNrIiwidGhlbWVQbHVnaW5NYXNrZWRJbnB1dCIsIlBsdWdpbk1heExlbmd0aCIsImFsd2F5c1Nob3ciLCJwbGFjZW1lbnQiLCJ3YXJuaW5nQ2xhc3MiLCJsaW1pdFJlYWNoZWRDbGFzcyIsIm1heGxlbmd0aCIsInRoZW1lUGx1Z2luTWF4TGVuZ3RoIiwiUGx1Z2luTXVsdGlTZWxlY3QiLCJ0ZW1wbGF0ZXMiLCJtdWx0aXNlbGVjdCIsInRoZW1lUGx1Z2luTXVsdGlTZWxlY3QiLCJQTm90aWZ5Iiwic3R5bGluZyIsInNoYWRvdyIsInN0YWNrIiwic3BhY2luZzEiLCJzcGFjaW5nMiIsImZvbnRhd2Vzb21lIiwiY29udGFpbmVyIiwibm90aWNlIiwic3VjY2VzcyIsImVycm9yIiwibm90aWNlX2ljb24iLCJpbmZvX2ljb24iLCJzdWNjZXNzX2ljb24iLCJlcnJvcl9pY29uIiwic3RvcmFnZU9yZGVyS2V5Iiwic3RvcmFnZVN0YXRlS2V5IiwiUGx1Z2luUG9ydGxldCIsImNvbm5lY3RXaXRoIiwiaGFuZGxlIiwib3BhY2l0eSIsImNhbmNlbCIsImZvcmNlUGxhY2Vob2xkZXJTaXplIiwiZm9yY2VIZWxwZXJTaXplIiwidG9sZXJhbmNlIiwiaGVscGVyIiwicmV2ZXJ0Iiwib25VcGRhdGUiLCJjcmVhdGUiLCJvbkxvYWQiLCJ1aSIsImtleSIsInN0b3JlIiwicG9ybGV0SWQiLCJzb3J0YWJsZSIsInNldCIsInBvcnRsZXQiLCJjYXJkcyIsImluZGV4IiwicGFuZWxJZCIsImFwcGVuZFRvIiwic2F2ZVN0YXRlIiwicGFuZWwiLCJjb2xsYXBzZSIsImlzQ29sbGFwc2VkIiwiaXNSZW1vdmVkIiwibG9hZFN0YXRlIiwic3RhdGUiLCJ0aGVtZVBsdWdpblBvcnRsZXQiLCJQbHVnaW5TY3JvbGxUb1RvcCIsImJ1dHRvbkNsYXNzIiwiaWNvbkNsYXNzIiwidmlzaWJsZU1vYmlsZSIsImxhYmVsIiwiX2lzU2Nyb2xsaW5nIiwic2Nyb2xsIiwic3RvcCIsIlBsdWdpblNjcm9sbGFibGUiLCJ1cGRhdGVNb2RhbHMiLCJ1cGRhdGVCb290c3RyYXBNb2RhbCIsInVwZGF0ZUJvb3N0cmFwTW9kYWwiLCJDb25zdHJ1Y3RvciIsImVuZm9yY2VGb2N1cyIsIm9yaWdpbmFsRm9jdXMiLCIkc2Nyb2xsYWJsZSIsIiRlbGVtZW50IiwidGhlbWVQbHVnaW5TY3JvbGxhYmxlIiwibmFub1Njcm9sbGVyIiwiY29udGVudENsYXNzIiwicGFuZUNsYXNzIiwic2xpZGVyQ2xhc3MiLCJhbHdheXNWaXNpYmxlIiwicHJldmVudFBhZ2VTY3JvbGxpbmciLCJQbHVnaW5TZWxlY3QyIiwidGhlbWVQbHVnaW5TZWxlY3QyIiwiUGx1Z2luU2xpZGVyIiwiJG91dHB1dCIsInNsaWRlIiwib25TbGlkZSIsInNsaWRlciIsInZhbHVlcyIsInRoZW1lUGx1Z2luU2xpZGVyIiwiUGx1Z2luU3Bpbm5lciIsInNwaW5uZXIiLCJ0aGVtZVBsdWdpblNwaW5uZXIiLCJQbHVnaW5TdW1tZXJOb3RlIiwib25mb2N1cyIsIm9uYmx1ciIsInN1bW1lcm5vdGUiLCJ0aGVtZVBsdWdpblN1bW1lck5vdGUiLCJQbHVnaW5UZXh0QXJlYUF1dG9TaXplIiwiYXV0b3NpemUiLCJ0aGVtZVBsdWdpblRleHRBcmVhQXV0b1NpemUiLCJQbHVnaW5UaW1lUGlja2VyIiwiZGlzYWJsZU1vdXNld2hlZWwiLCJpY29ucyIsInVwIiwiZG93biIsInRpbWVwaWNrZXIiLCJ0aGVtZVBsdWdpblRpbWVQaWNrZXIiLCJQbHVnaW5Ub2dnbGUiLCJpc0FjY29yZGlvbiIsImFkZEljb25zIiwiJGl0ZW1zIiwicHJlcGVuZCIsInNsaWRlRG93biIsInByZXZpZXdQYXJDdXJyZW50SGVpZ2h0IiwicHJldmlld1BhckFuaW1hdGVIZWlnaHQiLCJ0b2dnbGVDb250ZW50IiwiY2xpY2siLCJwYXJlbnRTZWN0aW9uIiwicGFyZW50V3JhcHBlciIsInByZXZpZXdQYXIiLCJjbG9zZUVsZW1lbnQiLCJvcmlnaW5hbEV2ZW50IiwiaGVpZ2h0Iiwic2xpZGVVcCIsInRoZW1lUGx1Z2luVG9nZ2xlIiwiV2lkZ2V0VG9kb0xpc3QiLCJjaGVjayIsImlucHV0IiwiJGNoZWNrIiwiJHJlbW92ZSIsInNvcnQiLCJwYWdlWSIsIm91dGVySGVpZ2h0IiwidGhlbWVQbHVnaW5XaWRnZXRUb2RvTGlzdCIsIldpZGdldFRvZ2dsZUV4cGFuZCIsIiR0b2dnbGVyIiwiZXhwYW5kIiwidGhlbWVQbHVnaW5XaWRnZXRUb2dnbGVFeHBhbmQiLCJQbHVnaW5Xb3JkUm90YXRvciIsIml0ZW1zV3JhcHBlciIsImZpcnN0SXRlbSIsImVxIiwiZmlyc3RJdGVtQ2xvbmUiLCJpdGVtSGVpZ2h0IiwiY3VycmVudEl0ZW0iLCJjdXJyZW50VG9wIiwic2V0SW50ZXJ2YWwiLCJ0aGVtZVBsdWdpbldvcmRSb3RhdG9yIiwiJGxpIiwiZW5zdXJlVmlzaWJsZSIsInNjcm9sbGVyIiwib2Zmc2V0UGFyZW50IiwiYnVpbGRTaWRlYmFyTmF2IiwiYW5jaG9yIiwicHJldiIsIm5leHQiLCJhcnJvd1dpZHRoIiwiZ2V0Q29tcHV0ZWRTdHlsZSIsIm9mZnNldFgiLCJvZmZzZXRXaWR0aCIsIiRhbmNob3IiLCIkcHJldiIsIiRuZXh0IiwiJGV2IiwiY2hyb21lIiwidGVzdCIsIm5hdmlnYXRvciIsInVzZXJBZ2VudCIsImZsYWciLCJpc0FuZHJvaWQiLCJpc0lwYWQiLCJ1cGRhdGluZ05hbm9TY3JvbGwiLCJTa2VsZXRvbiIsInNpZGViYXJzIiwibWVudSIsImxlZnQiLCJyaWdodCIsImN1c3RvbVNjcm9sbCIsIk1vZGVybml6ciIsIm92ZXJmbG93c2Nyb2xsaW5nIiwiYnVpbGRTaWRlYmFyTGVmdCIsImJ1aWxkQ29udGVudE1lbnUiLCJmaXhJcGFkIiwiYnVpbGRTaWRlYmFyUmlnaHQiLCJldmVudHNTaWRlYmFyTGVmdCIsImV2ZW50c1NpZGViYXJSaWdodCIsImV2ZW50c0NvbnRlbnRNZW51IiwiZml4U2Nyb2xsIiwicHJldmVudEJvZHlTY3JvbGxUb2dnbGUiLCJpbml0aWFsUG9zaXRpb24iLCIkbmFubyIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJnZXRJdGVtIiwib2ZmIiwidXBkYXRlTmFub1Njcm9sbCIsInN1cHBvcnQiLCJ0cmFuc2l0aW9uIiwiZW11bGF0ZVRyYW5zaXRpb25FbmQiLCJpc1RvZ2dsZXIiLCJlbGVtZW50IiwiYmluZCIsImhhc0V2ZW50IiwiaGFzVGFyZ2V0IiwiaXNDb2xsYXBzZUJ1dHRvbiIsImlzSW5zaWRlTW9kYWwiLCJpc0luc2lkZUlubmVyTWVudSIsImlzSW5zaWRlSFRNTCIsInNob3VsZFByZXZlbnQiLCIkdG9nZ2xlTWVudUJ1dHRvbiIsIiRuYXZBY3RpdmUiLCIkdGFiTmF2IiwiJHRhYkl0ZW0iLCIkY29udGVudEJvZHkiLCJ0YWJOYXZPZmZzZXQiLCJ3aW5kb3dPZmZzZXQiLCJicm93c2VyU2VsZWN0b3IiLCJ2ZW5kb3IiLCJvcGVyYSIsImhhc1RvdWNoIiwibXNNYXhUb3VjaFBvaW50cyIsInUiLCJ1YSIsInQiLCJ3IiwicyIsIm8iLCJoIiwicGFyc2VGbG9hdCIsImFwcFZlcnNpb24iLCJzcGxpdCIsIlJlZ0V4cCIsImpRdWVyeTEiLCJqUXVlcnkyIiwiYyIsImlzSUUxMSIsIkFjdGl2ZVhPYmplY3QiLCJjYXBpdGFsaXplU3RyaW5nIiwic3RyIiwiY2hhckF0IiwiTWFpbGJveCIsInZpZXciLCJjYWxsIiwiYnVpbGRGb2xkZXIiLCJidWlsZEVtYWlsIiwiYnVpbGRDb21wb3NlciIsImJ1aWxkQ29tcG9zZSIsInRvb2xiYXIiLCJldmVudHNDb21wb3NlIiwiJGNvbXBvc2VyIiwiJGlubmVyQm9keSIsImFkanVzdENvbXBvc2VTaXplIiwiY29tcG9zZXJIZWlnaHQiLCJjb21wb3NlclRvcCIsImNvbnRlbnRCb2R5UGFkZGluZ0JvdHRvbSIsImlubmVyQm9keUhlaWdodCIsInZpZXdwb3J0SGVpZ2h0Iiwidmlld3BvcnRXaWR0aCIsIm1heCIsImNsaWVudEhlaWdodCIsImlubmVySGVpZ2h0IiwiY2xpZW50V2lkdGgiLCJpbm5lcldpZHRoIiwidGltZXIiLCJjbGVhclRpbWVvdXQiLCJ0aGVtZU1haWxib3giXSwic291cmNlUm9vdCI6IiJ9