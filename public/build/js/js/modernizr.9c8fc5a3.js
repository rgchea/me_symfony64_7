(self["webpackChunk"] = self["webpackChunk"] || []).push([["js/modernizr"],{

/***/ "./assets/css/portoadmin/vendor/modernizr/modernizr-custom.js":
/*!********************************************************************!*\
  !*** ./assets/css/portoadmin/vendor/modernizr/modernizr-custom.js ***!
  \********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* module decorator */ module = __webpack_require__.nmd(module);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
__webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
__webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
__webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
__webpack_require__(/*! core-js/modules/es.array.index-of.js */ "./node_modules/core-js/modules/es.array.index-of.js");
__webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
__webpack_require__(/*! core-js/modules/es.array.join.js */ "./node_modules/core-js/modules/es.array.join.js");
__webpack_require__(/*! core-js/modules/es.array.reverse.js */ "./node_modules/core-js/modules/es.array.reverse.js");
__webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
__webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
__webpack_require__(/*! core-js/modules/es.parse-int.js */ "./node_modules/core-js/modules/es.parse-int.js");
__webpack_require__(/*! core-js/modules/es.regexp.constructor.js */ "./node_modules/core-js/modules/es.regexp.constructor.js");
__webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
__webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
__webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
__webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
__webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
__webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
/*!
 * modernizr v3.6.0
 * Build https://modernizr.com/download?-csstransforms-csstransforms3d-flexbox-flexboxlegacy-forcetouch-overflowscrolling-touchevents-domprefixes-prefixes-printshiv-setclasses-testallprops-testprop-teststyles-dontmin
 *
 * Copyright (c)
 *  Faruk Ates
 *  Paul Irish
 *  Alex Sexton
 *  Ryan Seddon
 *  Patrick Kettner
 *  Stu Cox
 *  Richard Herrera

 * MIT License
 */

/*
 * Modernizr tests which native CSS3 and HTML5 features are available in the
 * current UA and makes the results available to you in two ways: as properties on
 * a global `Modernizr` object, and as classes on the `<html>` element. This
 * information allows you to progressively enhance your pages with a granular level
 * of control over the experience.
*/

;
(function (window, document, undefined) {
  var classes = [];
  var tests = [];

  /**
   *
   * ModernizrProto is the constructor for Modernizr
   *
   * @class
   * @access public
   */

  var ModernizrProto = {
    // The current version, dummy
    _version: '3.6.0',
    // Any settings that don't work as separate modules
    // can go in here as configuration.
    _config: {
      'classPrefix': '',
      'enableClasses': true,
      'enableJSClass': true,
      'usePrefixes': true
    },
    // Queue of tests
    _q: [],
    // Stub these for people who are listening
    on: function on(test, cb) {
      // I don't really think people should do this, but we can
      // safe guard it a bit.
      // -- NOTE:: this gets WAY overridden in src/addTest for actual async tests.
      // This is in case people listen to synchronous tests. I would leave it out,
      // but the code to *disallow* sync tests in the real version of this
      // function is actually larger than this.
      var self = this;
      setTimeout(function () {
        cb(self[test]);
      }, 0);
    },
    addTest: function addTest(name, fn, options) {
      tests.push({
        name: name,
        fn: fn,
        options: options
      });
    },
    addAsyncTest: function addAsyncTest(fn) {
      tests.push({
        name: null,
        fn: fn
      });
    }
  };

  // Fake some of Object.create so we can force non test results to be non "own" properties.
  var Modernizr = function Modernizr() {};
  Modernizr.prototype = ModernizrProto;

  // Leak modernizr globally when you `require` it rather than force it here.
  // Overwrite name so constructor name is nicer :D
  Modernizr = new Modernizr();

  /**
   * List of property values to set for css tests. See ticket #21
   * http://git.io/vUGl4
   *
   * @memberof Modernizr
   * @name Modernizr._prefixes
   * @optionName Modernizr._prefixes
   * @optionProp prefixes
   * @access public
   * @example
   *
   * Modernizr._prefixes is the internal list of prefixes that we test against
   * inside of things like [prefixed](#modernizr-prefixed) and [prefixedCSS](#-code-modernizr-prefixedcss). It is simply
   * an array of kebab-case vendor prefixes you can use within your code.
   *
   * Some common use cases include
   *
   * Generating all possible prefixed version of a CSS property
   * ```js
   * var rule = Modernizr._prefixes.join('transform: rotate(20deg); ');
   *
   * rule === 'transform: rotate(20deg); webkit-transform: rotate(20deg); moz-transform: rotate(20deg); o-transform: rotate(20deg); ms-transform: rotate(20deg);'
   * ```
   *
   * Generating all possible prefixed version of a CSS value
   * ```js
   * rule = 'display:' +  Modernizr._prefixes.join('flex; display:') + 'flex';
   *
   * rule === 'display:flex; display:-webkit-flex; display:-moz-flex; display:-o-flex; display:-ms-flex; display:flex'
   * ```
   */

  // we use ['',''] rather than an empty array in order to allow a pattern of .`join()`ing prefixes to test
  // values in feature detects to continue to work
  var prefixes = ModernizrProto._config.usePrefixes ? ' -webkit- -moz- -o- -ms- '.split(' ') : ['', ''];

  // expose these for the plugin API. Look in the source for how to join() them against your input
  ModernizrProto._prefixes = prefixes;

  /**
   * is returns a boolean if the typeof an obj is exactly type.
   *
   * @access private
   * @function is
   * @param {*} obj - A thing we want to check the type of
   * @param {string} type - A string to compare the typeof against
   * @returns {boolean}
   */

  function is(obj, type) {
    return _typeof(obj) === type;
  }
  ;

  /**
   * Run through all tests and detect their support in the current UA.
   *
   * @access private
   */

  function testRunner() {
    var featureNames;
    var feature;
    var aliasIdx;
    var result;
    var nameIdx;
    var featureName;
    var featureNameSplit;
    for (var featureIdx in tests) {
      if (tests.hasOwnProperty(featureIdx)) {
        featureNames = [];
        feature = tests[featureIdx];
        // run the test, throw the return value into the Modernizr,
        // then based on that boolean, define an appropriate className
        // and push it into an array of classes we'll join later.
        //
        // If there is no name, it's an 'async' test that is run,
        // but not directly added to the object. That should
        // be done with a post-run addTest call.
        if (feature.name) {
          featureNames.push(feature.name.toLowerCase());
          if (feature.options && feature.options.aliases && feature.options.aliases.length) {
            // Add all the aliases into the names list
            for (aliasIdx = 0; aliasIdx < feature.options.aliases.length; aliasIdx++) {
              featureNames.push(feature.options.aliases[aliasIdx].toLowerCase());
            }
          }
        }

        // Run the test, or use the raw value if it's not a function
        result = is(feature.fn, 'function') ? feature.fn() : feature.fn;

        // Set each of the names on the Modernizr object
        for (nameIdx = 0; nameIdx < featureNames.length; nameIdx++) {
          featureName = featureNames[nameIdx];
          // Support dot properties as sub tests. We don't do checking to make sure
          // that the implied parent tests have been added. You must call them in
          // order (either in the test, or make the parent test a dependency).
          //
          // Cap it to TWO to make the logic simple and because who needs that kind of subtesting
          // hashtag famous last words
          featureNameSplit = featureName.split('.');
          if (featureNameSplit.length === 1) {
            Modernizr[featureNameSplit[0]] = result;
          } else {
            // cast to a Boolean, if not one already
            if (Modernizr[featureNameSplit[0]] && !(Modernizr[featureNameSplit[0]] instanceof Boolean)) {
              Modernizr[featureNameSplit[0]] = new Boolean(Modernizr[featureNameSplit[0]]);
            }
            Modernizr[featureNameSplit[0]][featureNameSplit[1]] = result;
          }
          classes.push((result ? '' : 'no-') + featureNameSplit.join('-'));
        }
      }
    }
  }
  ;

  /**
   * docElement is a convenience wrapper to grab the root element of the document
   *
   * @access private
   * @returns {HTMLElement|SVGElement} The root element of the document
   */

  var docElement = document.documentElement;

  /**
   * A convenience helper to check if the document we are running in is an SVG document
   *
   * @access private
   * @returns {boolean}
   */

  var isSVG = docElement.nodeName.toLowerCase() === 'svg';

  /**
   * setClasses takes an array of class names and adds them to the root element
   *
   * @access private
   * @function setClasses
   * @param {string[]} classes - Array of class names
   */

  // Pass in an and array of class names, e.g.:
  //  ['no-webp', 'borderradius', ...]
  function setClasses(classes) {
    var className = docElement.className;
    var classPrefix = Modernizr._config.classPrefix || '';
    if (isSVG) {
      className = className.baseVal;
    }

    // Change `no-js` to `js` (independently of the `enableClasses` option)
    // Handle classPrefix on this too
    if (Modernizr._config.enableJSClass) {
      var reJS = new RegExp('(^|\\s)' + classPrefix + 'no-js(\\s|$)');
      className = className.replace(reJS, '$1' + classPrefix + 'js$2');
    }
    if (Modernizr._config.enableClasses) {
      // Add the new classes
      className += ' ' + classPrefix + classes.join(' ' + classPrefix);
      if (isSVG) {
        docElement.className.baseVal = className;
      } else {
        docElement.className = className;
      }
    }
  }
  ;

  /**
    * @optionName html5printshiv
    * @optionProp html5printshiv
    */

  // Take the html5 variable out of the html5shiv scope so we can return it.
  var html5;
  if (!isSVG) {
    /**
     * @preserve HTML5 Shiv 3.7.3 | @afarkas @jdalton @jon_neal @rem | MIT/GPL2 Licensed
     */
    ;
    (function (window, document) {
      /** version */
      var version = '3.7.3';

      /** Preset options */
      var options = window.html5 || {};

      /** Used to skip problem elements */
      var reSkip = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i;

      /** Not all elements can be cloned in IE **/
      var saveClones = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i;

      /** Detect whether the browser supports default html5 styles */
      var supportsHtml5Styles;

      /** Name of the expando, to work with multiple documents or to re-shiv one document */
      var expando = '_html5shiv';

      /** The id for the the documents expando */
      var expanID = 0;

      /** Cached data for each document */
      var expandoData = {};

      /** Detect whether the browser supports unknown elements */
      var supportsUnknownElements;
      (function () {
        try {
          var a = document.createElement('a');
          a.innerHTML = '<xyz></xyz>';
          //if the hidden property is implemented we can assume, that the browser supports basic HTML5 Styles
          supportsHtml5Styles = 'hidden' in a;
          supportsUnknownElements = a.childNodes.length == 1 || function () {
            // assign a false positive if unable to shiv
            document.createElement('a');
            var frag = document.createDocumentFragment();
            return typeof frag.cloneNode == 'undefined' || typeof frag.createDocumentFragment == 'undefined' || typeof frag.createElement == 'undefined';
          }();
        } catch (e) {
          // assign a false positive if detection fails => unable to shiv
          supportsHtml5Styles = true;
          supportsUnknownElements = true;
        }
      })();

      /*--------------------------------------------------------------------------*/

      /**
       * Creates a style sheet with the given CSS text and adds it to the document.
       * @private
       * @param {Document} ownerDocument The document.
       * @param {String} cssText The CSS text.
       * @returns {StyleSheet} The style element.
       */
      function addStyleSheet(ownerDocument, cssText) {
        var p = ownerDocument.createElement('p'),
          parent = ownerDocument.getElementsByTagName('head')[0] || ownerDocument.documentElement;
        p.innerHTML = 'x<style>' + cssText + '</style>';
        return parent.insertBefore(p.lastChild, parent.firstChild);
      }

      /**
       * Returns the value of `html5.elements` as an array.
       * @private
       * @returns {Array} An array of shived element node names.
       */
      function getElements() {
        var elements = html5.elements;
        return typeof elements == 'string' ? elements.split(' ') : elements;
      }

      /**
       * Extends the built-in list of html5 elements
       * @memberOf html5
       * @param {String|Array} newElements whitespace separated list or array of new element names to shiv
       * @param {Document} ownerDocument The context document.
       */
      function addElements(newElements, ownerDocument) {
        var elements = html5.elements;
        if (typeof elements != 'string') {
          elements = elements.join(' ');
        }
        if (typeof newElements != 'string') {
          newElements = newElements.join(' ');
        }
        html5.elements = elements + ' ' + newElements;
        shivDocument(ownerDocument);
      }

      /**
       * Returns the data associated to the given document
       * @private
       * @param {Document} ownerDocument The document.
       * @returns {Object} An object of data.
       */
      function getExpandoData(ownerDocument) {
        var data = expandoData[ownerDocument[expando]];
        if (!data) {
          data = {};
          expanID++;
          ownerDocument[expando] = expanID;
          expandoData[expanID] = data;
        }
        return data;
      }

      /**
       * returns a shived element for the given nodeName and document
       * @memberOf html5
       * @param {String} nodeName name of the element
       * @param {Document} ownerDocument The context document.
       * @returns {Object} The shived element.
       */
      function createElement(nodeName, ownerDocument, data) {
        if (!ownerDocument) {
          ownerDocument = document;
        }
        if (supportsUnknownElements) {
          return ownerDocument.createElement(nodeName);
        }
        if (!data) {
          data = getExpandoData(ownerDocument);
        }
        var node;
        if (data.cache[nodeName]) {
          node = data.cache[nodeName].cloneNode();
        } else if (saveClones.test(nodeName)) {
          node = (data.cache[nodeName] = data.createElem(nodeName)).cloneNode();
        } else {
          node = data.createElem(nodeName);
        }

        // Avoid adding some elements to fragments in IE < 9 because
        // * Attributes like `name` or `type` cannot be set/changed once an element
        //   is inserted into a document/fragment
        // * Link elements with `src` attributes that are inaccessible, as with
        //   a 403 response, will cause the tab/window to crash
        // * Script elements appended to fragments will execute when their `src`
        //   or `text` property is set
        return node.canHaveChildren && !reSkip.test(nodeName) && !node.tagUrn ? data.frag.appendChild(node) : node;
      }

      /**
       * returns a shived DocumentFragment for the given document
       * @memberOf html5
       * @param {Document} ownerDocument The context document.
       * @returns {Object} The shived DocumentFragment.
       */
      function createDocumentFragment(ownerDocument, data) {
        if (!ownerDocument) {
          ownerDocument = document;
        }
        if (supportsUnknownElements) {
          return ownerDocument.createDocumentFragment();
        }
        data = data || getExpandoData(ownerDocument);
        var clone = data.frag.cloneNode(),
          i = 0,
          elems = getElements(),
          l = elems.length;
        for (; i < l; i++) {
          clone.createElement(elems[i]);
        }
        return clone;
      }

      /**
       * Shivs the `createElement` and `createDocumentFragment` methods of the document.
       * @private
       * @param {Document|DocumentFragment} ownerDocument The document.
       * @param {Object} data of the document.
       */
      function shivMethods(ownerDocument, data) {
        if (!data.cache) {
          data.cache = {};
          data.createElem = ownerDocument.createElement;
          data.createFrag = ownerDocument.createDocumentFragment;
          data.frag = data.createFrag();
        }
        ownerDocument.createElement = function (nodeName) {
          //abort shiv
          if (!html5.shivMethods) {
            return data.createElem(nodeName);
          }
          return createElement(nodeName, ownerDocument, data);
        };
        ownerDocument.createDocumentFragment = Function('h,f', 'return function(){' + 'var n=f.cloneNode(),c=n.createElement;' + 'h.shivMethods&&(' +
        // unroll the `createElement` calls
        getElements().join().replace(/[\w\-:]+/g, function (nodeName) {
          data.createElem(nodeName);
          data.frag.createElement(nodeName);
          return 'c("' + nodeName + '")';
        }) + ');return n}')(html5, data.frag);
      }

      /*--------------------------------------------------------------------------*/

      /**
       * Shivs the given document.
       * @memberOf html5
       * @param {Document} ownerDocument The document to shiv.
       * @returns {Document} The shived document.
       */
      function shivDocument(ownerDocument) {
        if (!ownerDocument) {
          ownerDocument = document;
        }
        var data = getExpandoData(ownerDocument);
        if (html5.shivCSS && !supportsHtml5Styles && !data.hasCSS) {
          data.hasCSS = !!addStyleSheet(ownerDocument,
          // corrects block display not defined in IE6/7/8/9
          'article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}' +
          // adds styling not present in IE6/7/8/9
          'mark{background:#FF0;color:#000}' +
          // hides non-rendered elements
          'template{display:none}');
        }
        if (!supportsUnknownElements) {
          shivMethods(ownerDocument, data);
        }
        return ownerDocument;
      }

      /*--------------------------------------------------------------------------*/

      /**
       * The `html5` object is exposed so that more elements can be shived and
       * existing shiving can be detected on iframes.
       * @type Object
       * @example
       *
       * // options can be changed before the script is included
       * html5 = { 'elements': 'mark section', 'shivCSS': false, 'shivMethods': false };
       */
      var html5 = {
        /**
         * An array or space separated string of node names of the elements to shiv.
         * @memberOf html5
         * @type Array|String
         */
        'elements': options.elements || 'abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video',
        /**
         * current version of html5shiv
         */
        'version': version,
        /**
         * A flag to indicate that the HTML5 style sheet should be inserted.
         * @memberOf html5
         * @type Boolean
         */
        'shivCSS': options.shivCSS !== false,
        /**
         * Is equal to true if a browser supports creating unknown/HTML5 elements
         * @memberOf html5
         * @type boolean
         */
        'supportsUnknownElements': supportsUnknownElements,
        /**
         * A flag to indicate that the document's `createElement` and `createDocumentFragment`
         * methods should be overwritten.
         * @memberOf html5
         * @type Boolean
         */
        'shivMethods': options.shivMethods !== false,
        /**
         * A string to describe the type of `html5` object ("default" or "default print").
         * @memberOf html5
         * @type String
         */
        'type': 'default',
        // shivs the document according to the specified `html5` object options
        'shivDocument': shivDocument,
        //creates a shived element
        createElement: createElement,
        //creates a shived documentFragment
        createDocumentFragment: createDocumentFragment,
        //extends list of elements
        addElements: addElements
      };

      /*--------------------------------------------------------------------------*/

      // expose html5
      window.html5 = html5;

      // shiv the document
      shivDocument(document);

      /*------------------------------- Print Shiv -------------------------------*/

      /** Used to filter media types */
      var reMedia = /^$|\b(?:all|print)\b/;

      /** Used to namespace printable elements */
      var shivNamespace = 'html5shiv';

      /** Detect whether the browser supports shivable style sheets */
      var supportsShivableSheets = !supportsUnknownElements && function () {
        // assign a false negative if unable to shiv
        var docEl = document.documentElement;
        return !(typeof document.namespaces == 'undefined' || typeof document.parentWindow == 'undefined' || typeof docEl.applyElement == 'undefined' || typeof docEl.removeNode == 'undefined' || typeof window.attachEvent == 'undefined');
      }();

      /*--------------------------------------------------------------------------*/

      /**
       * Wraps all HTML5 elements in the given document with printable elements.
       * (eg. the "header" element is wrapped with the "html5shiv:header" element)
       * @private
       * @param {Document} ownerDocument The document.
       * @returns {Array} An array wrappers added.
       */
      function addWrappers(ownerDocument) {
        var node,
          nodes = ownerDocument.getElementsByTagName('*'),
          index = nodes.length,
          reElements = RegExp('^(?:' + getElements().join('|') + ')$', 'i'),
          result = [];
        while (index--) {
          node = nodes[index];
          if (reElements.test(node.nodeName)) {
            result.push(node.applyElement(createWrapper(node)));
          }
        }
        return result;
      }

      /**
       * Creates a printable wrapper for the given element.
       * @private
       * @param {Element} element The element.
       * @returns {Element} The wrapper.
       */
      function createWrapper(element) {
        var node,
          nodes = element.attributes,
          index = nodes.length,
          wrapper = element.ownerDocument.createElement(shivNamespace + ':' + element.nodeName);

        // copy element attributes to the wrapper
        while (index--) {
          node = nodes[index];
          node.specified && wrapper.setAttribute(node.nodeName, node.nodeValue);
        }
        // copy element styles to the wrapper
        wrapper.style.cssText = element.style.cssText;
        return wrapper;
      }

      /**
       * Shivs the given CSS text.
       * (eg. header{} becomes html5shiv\:header{})
       * @private
       * @param {String} cssText The CSS text to shiv.
       * @returns {String} The shived CSS text.
       */
      function shivCssText(cssText) {
        var pair,
          parts = cssText.split('{'),
          index = parts.length,
          reElements = RegExp('(^|[\\s,>+~])(' + getElements().join('|') + ')(?=[[\\s,>+~#.:]|$)', 'gi'),
          replacement = '$1' + shivNamespace + '\\:$2';
        while (index--) {
          pair = parts[index] = parts[index].split('}');
          pair[pair.length - 1] = pair[pair.length - 1].replace(reElements, replacement);
          parts[index] = pair.join('}');
        }
        return parts.join('{');
      }

      /**
       * Removes the given wrappers, leaving the original elements.
       * @private
       * @params {Array} wrappers An array of printable wrappers.
       */
      function removeWrappers(wrappers) {
        var index = wrappers.length;
        while (index--) {
          wrappers[index].removeNode();
        }
      }

      /*--------------------------------------------------------------------------*/

      /**
       * Shivs the given document for print.
       * @memberOf html5
       * @param {Document} ownerDocument The document to shiv.
       * @returns {Document} The shived document.
       */
      function shivPrint(ownerDocument) {
        var shivedSheet,
          wrappers,
          data = getExpandoData(ownerDocument),
          namespaces = ownerDocument.namespaces,
          ownerWindow = ownerDocument.parentWindow;
        if (!supportsShivableSheets || ownerDocument.printShived) {
          return ownerDocument;
        }
        if (typeof namespaces[shivNamespace] == 'undefined') {
          namespaces.add(shivNamespace);
        }
        function removeSheet() {
          clearTimeout(data._removeSheetTimer);
          if (shivedSheet) {
            shivedSheet.removeNode(true);
          }
          shivedSheet = null;
        }
        ownerWindow.attachEvent('onbeforeprint', function () {
          removeSheet();
          var imports,
            length,
            sheet,
            collection = ownerDocument.styleSheets,
            cssText = [],
            index = collection.length,
            sheets = Array(index);

          // convert styleSheets collection to an array
          while (index--) {
            sheets[index] = collection[index];
          }
          // concat all style sheet CSS text
          while (sheet = sheets.pop()) {
            // IE does not enforce a same origin policy for external style sheets...
            // but has trouble with some dynamically created stylesheets
            if (!sheet.disabled && reMedia.test(sheet.media)) {
              try {
                imports = sheet.imports;
                length = imports.length;
              } catch (er) {
                length = 0;
              }
              for (index = 0; index < length; index++) {
                sheets.push(imports[index]);
              }
              try {
                cssText.push(sheet.cssText);
              } catch (er) {}
            }
          }

          // wrap all HTML5 elements with printable elements and add the shived style sheet
          cssText = shivCssText(cssText.reverse().join(''));
          wrappers = addWrappers(ownerDocument);
          shivedSheet = addStyleSheet(ownerDocument, cssText);
        });
        ownerWindow.attachEvent('onafterprint', function () {
          // remove wrappers, leaving the original elements, and remove the shived style sheet
          removeWrappers(wrappers);
          clearTimeout(data._removeSheetTimer);
          data._removeSheetTimer = setTimeout(removeSheet, 500);
        });
        ownerDocument.printShived = true;
        return ownerDocument;
      }

      /*--------------------------------------------------------------------------*/

      // expose API
      html5.type += ' print';
      html5.shivPrint = shivPrint;

      // shiv for print
      shivPrint(document);
      if (( false ? 0 : _typeof(module)) == 'object' && module.exports) {
        module.exports = html5;
      }
    })(typeof window !== 'undefined' ? window : this, document);
  }
  ;

  /**
   * If the browsers follow the spec, then they would expose vendor-specific styles as:
   *   elem.style.WebkitBorderRadius
   * instead of something like the following (which is technically incorrect):
   *   elem.style.webkitBorderRadius
    * WebKit ghosts their properties in lowercase but Opera & Moz do not.
   * Microsoft uses a lowercase `ms` instead of the correct `Ms` in IE8+
   *   erik.eae.net/archives/2008/03/10/21.48.10/
    * More here: github.com/Modernizr/Modernizr/issues/issue/21
   *
   * @access private
   * @returns {string} The string representing the vendor-specific style properties
   */

  var omPrefixes = 'Moz O ms Webkit';

  /**
   * List of JavaScript DOM values used for tests
   *
   * @memberof Modernizr
   * @name Modernizr._domPrefixes
   * @optionName Modernizr._domPrefixes
   * @optionProp domPrefixes
   * @access public
   * @example
   *
   * Modernizr._domPrefixes is exactly the same as [_prefixes](#modernizr-_prefixes), but rather
   * than kebab-case properties, all properties are their Capitalized variant
   *
   * ```js
   * Modernizr._domPrefixes === [ "Moz", "O", "ms", "Webkit" ];
   * ```
   */

  var domPrefixes = ModernizrProto._config.usePrefixes ? omPrefixes.toLowerCase().split(' ') : [];
  ModernizrProto._domPrefixes = domPrefixes;

  /*!
  {
    "name": "CSS Supports",
    "property": "supports",
    "caniuse": "css-featurequeries",
    "tags": ["css"],
    "builderAliases": ["css_supports"],
    "notes": [{
      "name": "W3 Spec",
      "href": "http://dev.w3.org/csswg/css3-conditional/#at-supports"
    },{
      "name": "Related Github Issue",
      "href": "https://github.com/Modernizr/Modernizr/issues/648"
    },{
      "name": "W3 Info",
      "href": "http://dev.w3.org/csswg/css3-conditional/#the-csssupportsrule-interface"
    }]
  }
  !*/

  var newSyntax = 'CSS' in window && 'supports' in window.CSS;
  var oldSyntax = 'supportsCSS' in window;
  Modernizr.addTest('supports', newSyntax || oldSyntax);
  var cssomPrefixes = ModernizrProto._config.usePrefixes ? omPrefixes.split(' ') : [];
  ModernizrProto._cssomPrefixes = cssomPrefixes;

  /**
   * contains checks to see if a string contains another string
   *
   * @access private
   * @function contains
   * @param {string} str - The string we want to check for substrings
   * @param {string} substr - The substring we want to search the first string for
   * @returns {boolean}
   */

  function contains(str, substr) {
    return !!~('' + str).indexOf(substr);
  }
  ;

  /**
   * createElement is a convenience wrapper around document.createElement. Since we
   * use createElement all over the place, this allows for (slightly) smaller code
   * as well as abstracting away issues with creating elements in contexts other than
   * HTML documents (e.g. SVG documents).
   *
   * @access private
   * @function createElement
   * @returns {HTMLElement|SVGElement} An HTML or SVG element
   */

  function createElement() {
    if (typeof document.createElement !== 'function') {
      // This is the case in IE7, where the type of createElement is "object".
      // For this reason, we cannot call apply() as Object is not a Function.
      return document.createElement(arguments[0]);
    } else if (isSVG) {
      return document.createElementNS.call(document, 'http://www.w3.org/2000/svg', arguments[0]);
    } else {
      return document.createElement.apply(document, arguments);
    }
  }
  ;

  /**
   * Modernizr.hasEvent() detects support for a given event
   *
   * @memberof Modernizr
   * @name Modernizr.hasEvent
   * @optionName Modernizr.hasEvent()
   * @optionProp hasEvent
   * @access public
   * @function hasEvent
   * @param  {string|*} eventName - the name of an event to test for (e.g. "resize")
   * @param  {Element|string} [element=HTMLDivElement] - is the element|document|window|tagName to test on
   * @returns {boolean}
   * @example
   *  `Modernizr.hasEvent` lets you determine if the browser supports a supplied event.
   *  By default, it does this detection on a div element
   *
   * ```js
   *  hasEvent('blur') // true;
   * ```
   *
   * However, you are able to give an object as a second argument to hasEvent to
   * detect an event on something other than a div.
   *
   * ```js
   *  hasEvent('devicelight', window) // true;
   * ```
   *
   */

  var hasEvent = function () {
    // Detect whether event support can be detected via `in`. Test on a DOM element
    // using the "blur" event b/c it should always exist. bit.ly/event-detection
    var needsFallback = !('onblur' in document.documentElement);
    function inner(eventName, element) {
      var isSupported;
      if (!eventName) {
        return false;
      }
      if (!element || typeof element === 'string') {
        element = createElement(element || 'div');
      }

      // Testing via the `in` operator is sufficient for modern browsers and IE.
      // When using `setAttribute`, IE skips "unload", WebKit skips "unload" and
      // "resize", whereas `in` "catches" those.
      eventName = 'on' + eventName;
      isSupported = eventName in element;

      // Fallback technique for old Firefox - bit.ly/event-detection
      if (!isSupported && needsFallback) {
        if (!element.setAttribute) {
          // Switch to generic element if it lacks `setAttribute`.
          // It could be the `document`, `window`, or something else.
          element = createElement('div');
        }
        element.setAttribute(eventName, '');
        isSupported = typeof element[eventName] === 'function';
        if (element[eventName] !== undefined) {
          // If property was created, "remove it" by setting value to `undefined`.
          element[eventName] = undefined;
        }
        element.removeAttribute(eventName);
      }
      return isSupported;
    }
    return inner;
  }();
  ModernizrProto.hasEvent = hasEvent;

  /**
   * getBody returns the body of a document, or an element that can stand in for
   * the body if a real body does not exist
   *
   * @access private
   * @function getBody
   * @returns {HTMLElement|SVGElement} Returns the real body of a document, or an
   * artificially created element that stands in for the body
   */

  function getBody() {
    // After page load injecting a fake body doesn't work so check if body exists
    var body = document.body;
    if (!body) {
      // Can't use the real body create a fake one.
      body = createElement(isSVG ? 'svg' : 'body');
      body.fake = true;
    }
    return body;
  }
  ;

  /**
   * injectElementWithStyles injects an element with style element and some CSS rules
   *
   * @access private
   * @function injectElementWithStyles
   * @param {string} rule - String representing a css rule
   * @param {function} callback - A function that is used to test the injected element
   * @param {number} [nodes] - An integer representing the number of additional nodes you want injected
   * @param {string[]} [testnames] - An array of strings that are used as ids for the additional nodes
   * @returns {boolean}
   */

  function injectElementWithStyles(rule, callback, nodes, testnames) {
    var mod = 'modernizr';
    var style;
    var ret;
    var node;
    var docOverflow;
    var div = createElement('div');
    var body = getBody();
    if (parseInt(nodes, 10)) {
      // In order not to give false positives we create a node for each test
      // This also allows the method to scale for unspecified uses
      while (nodes--) {
        node = createElement('div');
        node.id = testnames ? testnames[nodes] : mod + (nodes + 1);
        div.appendChild(node);
      }
    }
    style = createElement('style');
    style.type = 'text/css';
    style.id = 's' + mod;

    // IE6 will false positive on some tests due to the style element inside the test div somehow interfering offsetHeight, so insert it into body or fakebody.
    // Opera will act all quirky when injecting elements in documentElement when page is served as xml, needs fakebody too. #270
    (!body.fake ? div : body).appendChild(style);
    body.appendChild(div);
    if (style.styleSheet) {
      style.styleSheet.cssText = rule;
    } else {
      style.appendChild(document.createTextNode(rule));
    }
    div.id = mod;
    if (body.fake) {
      //avoid crashing IE8, if background image is used
      body.style.background = '';
      //Safari 5.13/5.1.4 OSX stops loading if ::-webkit-scrollbar is used and scrollbars are visible
      body.style.overflow = 'hidden';
      docOverflow = docElement.style.overflow;
      docElement.style.overflow = 'hidden';
      docElement.appendChild(body);
    }
    ret = callback(div, rule);
    // If this is done after page load we don't want to remove the body so check if body exists
    if (body.fake) {
      body.parentNode.removeChild(body);
      docElement.style.overflow = docOverflow;
      // Trigger layout so kinetic scrolling isn't disabled in iOS6+
      // eslint-disable-next-line
      docElement.offsetHeight;
    } else {
      div.parentNode.removeChild(div);
    }
    return !!ret;
  }
  ;

  /**
   * testStyles injects an element with style element and some CSS rules
   *
   * @memberof Modernizr
   * @name Modernizr.testStyles
   * @optionName Modernizr.testStyles()
   * @optionProp testStyles
   * @access public
   * @function testStyles
   * @param {string} rule - String representing a css rule
   * @param {function} callback - A function that is used to test the injected element
   * @param {number} [nodes] - An integer representing the number of additional nodes you want injected
   * @param {string[]} [testnames] - An array of strings that are used as ids for the additional nodes
   * @returns {boolean}
   * @example
   *
   * `Modernizr.testStyles` takes a CSS rule and injects it onto the current page
   * along with (possibly multiple) DOM elements. This lets you check for features
   * that can not be detected by simply checking the [IDL](https://developer.mozilla.org/en-US/docs/Mozilla/Developer_guide/Interface_development_guide/IDL_interface_rules).
   *
   * ```js
   * Modernizr.testStyles('#modernizr { width: 9px; color: papayawhip; }', function(elem, rule) {
   *   // elem is the first DOM node in the page (by default #modernizr)
   *   // rule is the first argument you supplied - the CSS rule in string form
   *
   *   addTest('widthworks', elem.style.width === '9px')
   * });
   * ```
   *
   * If your test requires multiple nodes, you can include a third argument
   * indicating how many additional div elements to include on the page. The
   * additional nodes are injected as children of the `elem` that is returned as
   * the first argument to the callback.
   *
   * ```js
   * Modernizr.testStyles('#modernizr {width: 1px}; #modernizr2 {width: 2px}', function(elem) {
   *   document.getElementById('modernizr').style.width === '1px'; // true
   *   document.getElementById('modernizr2').style.width === '2px'; // true
   *   elem.firstChild === document.getElementById('modernizr2'); // true
   * }, 1);
   * ```
   *
   * By default, all of the additional elements have an ID of `modernizr[n]`, where
   * `n` is its index (e.g. the first additional, second overall is `#modernizr2`,
   * the second additional is `#modernizr3`, etc.).
   * If you want to have more meaningful IDs for your function, you can provide
   * them as the fourth argument, as an array of strings
   *
   * ```js
   * Modernizr.testStyles('#foo {width: 10px}; #bar {height: 20px}', function(elem) {
   *   elem.firstChild === document.getElementById('foo'); // true
   *   elem.lastChild === document.getElementById('bar'); // true
   * }, 2, ['foo', 'bar']);
   * ```
   *
   */

  var testStyles = ModernizrProto.testStyles = injectElementWithStyles;

  /*!
  {
    "name": "Touch Events",
    "property": "touchevents",
    "caniuse" : "touch",
    "tags": ["media", "attribute"],
    "notes": [{
      "name": "Touch Events spec",
      "href": "https://www.w3.org/TR/2013/WD-touch-events-20130124/"
    }],
    "warnings": [
      "Indicates if the browser supports the Touch Events spec, and does not necessarily reflect a touchscreen device"
    ],
    "knownBugs": [
      "False-positive on some configurations of Nokia N900",
      "False-positive on some BlackBerry 6.0 builds – https://github.com/Modernizr/Modernizr/issues/372#issuecomment-3112695"
    ]
  }
  !*/
  /* DOC
  Indicates if the browser supports the W3C Touch Events API.
  
  This *does not* necessarily reflect a touchscreen device:
  
  * Older touchscreen devices only emulate mouse events
  * Modern IE touch devices implement the Pointer Events API instead: use `Modernizr.pointerevents` to detect support for that
  * Some browsers & OS setups may enable touch APIs when no touchscreen is connected
  * Future browsers may implement other event models for touch interactions
  
  See this article: [You Can't Detect A Touchscreen](http://www.stucox.com/blog/you-cant-detect-a-touchscreen/).
  
  It's recommended to bind both mouse and touch/pointer events simultaneously – see [this HTML5 Rocks tutorial](http://www.html5rocks.com/en/mobile/touchandmouse/).
  
  This test will also return `true` for Firefox 4 Multitouch support.
  */

  // Chrome (desktop) used to lie about its support on this, but that has since been rectified: http://crbug.com/36415
  Modernizr.addTest('touchevents', function () {
    var bool;
    if ('ontouchstart' in window || window.DocumentTouch && document instanceof DocumentTouch) {
      bool = true;
    } else {
      // include the 'heartz' as a way to have a non matching MQ to help terminate the join
      // https://git.io/vznFH
      var query = ['@media (', prefixes.join('touch-enabled),('), 'heartz', ')', '{#modernizr{top:9px;position:absolute}}'].join('');
      testStyles(query, function (node) {
        bool = node.offsetTop === 9;
      });
    }
    return bool;
  });

  /**
   * fnBind is a super small [bind](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind) polyfill.
   *
   * @access private
   * @function fnBind
   * @param {function} fn - a function you want to change `this` reference to
   * @param {object} that - the `this` you want to call the function with
   * @returns {function} The wrapped version of the supplied function
   */

  function fnBind(fn, that) {
    return function () {
      return fn.apply(that, arguments);
    };
  }
  ;

  /**
   * testDOMProps is a generic DOM property test; if a browser supports
   *   a certain property, it won't return undefined for it.
   *
   * @access private
   * @function testDOMProps
   * @param {array.<string>} props - An array of properties to test for
   * @param {object} obj - An object or Element you want to use to test the parameters again
   * @param {boolean|object} elem - An Element to bind the property lookup again. Use `false` to prevent the check
   * @returns {false|*} returns false if the prop is unsupported, otherwise the value that is supported
   */
  function testDOMProps(props, obj, elem) {
    var item;
    for (var i in props) {
      if (props[i] in obj) {
        // return the property name as a string
        if (elem === false) {
          return props[i];
        }
        item = obj[props[i]];

        // let's bind a function
        if (is(item, 'function')) {
          // bind to obj unless overriden
          return fnBind(item, elem || obj);
        }

        // return the unbound function or obj or value
        return item;
      }
    }
    return false;
  }
  ;

  /**
   * cssToDOM takes a kebab-case string and converts it to camelCase
   * e.g. box-sizing -> boxSizing
   *
   * @access private
   * @function cssToDOM
   * @param {string} name - String name of kebab-case prop we want to convert
   * @returns {string} The camelCase version of the supplied name
   */

  function cssToDOM(name) {
    return name.replace(/([a-z])-([a-z])/g, function (str, m1, m2) {
      return m1 + m2.toUpperCase();
    }).replace(/^-/, '');
  }
  ;

  /**
   * atRule returns a given CSS property at-rule (eg @keyframes), possibly in
   * some prefixed form, or false, in the case of an unsupported rule
   *
   * @memberof Modernizr
   * @name Modernizr.atRule
   * @optionName Modernizr.atRule()
   * @optionProp atRule
   * @access public
   * @function atRule
   * @param {string} prop - String name of the @-rule to test for
   * @returns {string|boolean} The string representing the (possibly prefixed)
   * valid version of the @-rule, or `false` when it is unsupported.
   * @example
   * ```js
   *  var keyframes = Modernizr.atRule('@keyframes');
   *
   *  if (keyframes) {
   *    // keyframes are supported
   *    // could be `@-webkit-keyframes` or `@keyframes`
   *  } else {
   *    // keyframes === `false`
   *  }
   * ```
   *
   */

  var atRule = function atRule(prop) {
    var length = prefixes.length;
    var cssrule = window.CSSRule;
    var rule;
    if (typeof cssrule === 'undefined') {
      return undefined;
    }
    if (!prop) {
      return false;
    }

    // remove literal @ from beginning of provided property
    prop = prop.replace(/^@/, '');

    // CSSRules use underscores instead of dashes
    rule = prop.replace(/-/g, '_').toUpperCase() + '_RULE';
    if (rule in cssrule) {
      return '@' + prop;
    }
    for (var i = 0; i < length; i++) {
      // prefixes gives us something like -o-, and we want O_
      var prefix = prefixes[i];
      var thisRule = prefix.toUpperCase() + '_' + rule;
      if (thisRule in cssrule) {
        return '@-' + prefix.toLowerCase() + '-' + prop;
      }
    }
    return false;
  };
  ModernizrProto.atRule = atRule;

  /**
   * Create our "modernizr" element that we do most feature tests on.
   *
   * @access private
   */

  var modElem = {
    elem: createElement('modernizr')
  };

  // Clean up this element
  Modernizr._q.push(function () {
    delete modElem.elem;
  });
  var mStyle = {
    style: modElem.elem.style
  };

  // kill ref for gc, must happen before mod.elem is removed, so we unshift on to
  // the front of the queue.
  Modernizr._q.unshift(function () {
    delete mStyle.style;
  });

  /**
   * domToCSS takes a camelCase string and converts it to kebab-case
   * e.g. boxSizing -> box-sizing
   *
   * @access private
   * @function domToCSS
   * @param {string} name - String name of camelCase prop we want to convert
   * @returns {string} The kebab-case version of the supplied name
   */

  function domToCSS(name) {
    return name.replace(/([A-Z])/g, function (str, m1) {
      return '-' + m1.toLowerCase();
    }).replace(/^ms-/, '-ms-');
  }
  ;

  /**
   * wrapper around getComputedStyle, to fix issues with Firefox returning null when
   * called inside of a hidden iframe
   *
   * @access private
   * @function computedStyle
   * @param {HTMLElement|SVGElement} - The element we want to find the computed styles of
   * @param {string|null} [pseudoSelector]- An optional pseudo element selector (e.g. :before), of null if none
   * @returns {CSSStyleDeclaration}
   */

  function computedStyle(elem, pseudo, prop) {
    var result;
    if ('getComputedStyle' in window) {
      result = getComputedStyle.call(window, elem, pseudo);
      var console = window.console;
      if (result !== null) {
        if (prop) {
          result = result.getPropertyValue(prop);
        }
      } else {
        if (console) {
          var method = console.error ? 'error' : 'log';
          console[method].call(console, 'getComputedStyle returning null, its possible modernizr test results are inaccurate');
        }
      }
    } else {
      result = !pseudo && elem.currentStyle && elem.currentStyle[prop];
    }
    return result;
  }
  ;

  /**
   * nativeTestProps allows for us to use native feature detection functionality if available.
   * some prefixed form, or false, in the case of an unsupported rule
   *
   * @access private
   * @function nativeTestProps
   * @param {array} props - An array of property names
   * @param {string} value - A string representing the value we want to check via @supports
   * @returns {boolean|undefined} A boolean when @supports exists, undefined otherwise
   */

  // Accepts a list of property names and a single value
  // Returns `undefined` if native detection not available
  function nativeTestProps(props, value) {
    var i = props.length;
    // Start with the JS API: http://www.w3.org/TR/css3-conditional/#the-css-interface
    if ('CSS' in window && 'supports' in window.CSS) {
      // Try every prefixed variant of the property
      while (i--) {
        if (window.CSS.supports(domToCSS(props[i]), value)) {
          return true;
        }
      }
      return false;
    }
    // Otherwise fall back to at-rule (for Opera 12.x)
    else if ('CSSSupportsRule' in window) {
      // Build a condition string for every prefixed variant
      var conditionText = [];
      while (i--) {
        conditionText.push('(' + domToCSS(props[i]) + ':' + value + ')');
      }
      conditionText = conditionText.join(' or ');
      return injectElementWithStyles('@supports (' + conditionText + ') { #modernizr { position: absolute; } }', function (node) {
        return computedStyle(node, null, 'position') == 'absolute';
      });
    }
    return undefined;
  }
  ;

  // testProps is a generic CSS / DOM property test.

  // In testing support for a given CSS property, it's legit to test:
  //    `elem.style[styleName] !== undefined`
  // If the property is supported it will return an empty string,
  // if unsupported it will return undefined.

  // We'll take advantage of this quick test and skip setting a style
  // on our modernizr element, but instead just testing undefined vs
  // empty string.

  // Property names can be provided in either camelCase or kebab-case.

  function testProps(props, prefixed, value, skipValueTest) {
    skipValueTest = is(skipValueTest, 'undefined') ? false : skipValueTest;

    // Try native detect first
    if (!is(value, 'undefined')) {
      var result = nativeTestProps(props, value);
      if (!is(result, 'undefined')) {
        return result;
      }
    }

    // Otherwise do it properly
    var afterInit, i, propsLength, prop, before;

    // If we don't have a style element, that means we're running async or after
    // the core tests, so we'll need to create our own elements to use

    // inside of an SVG element, in certain browsers, the `style` element is only
    // defined for valid tags. Therefore, if `modernizr` does not have one, we
    // fall back to a less used element and hope for the best.
    // for strict XHTML browsers the hardly used samp element is used
    var elems = ['modernizr', 'tspan', 'samp'];
    while (!mStyle.style && elems.length) {
      afterInit = true;
      mStyle.modElem = createElement(elems.shift());
      mStyle.style = mStyle.modElem.style;
    }

    // Delete the objects if we created them.
    function cleanElems() {
      if (afterInit) {
        delete mStyle.style;
        delete mStyle.modElem;
      }
    }
    propsLength = props.length;
    for (i = 0; i < propsLength; i++) {
      prop = props[i];
      before = mStyle.style[prop];
      if (contains(prop, '-')) {
        prop = cssToDOM(prop);
      }
      if (mStyle.style[prop] !== undefined) {
        // If value to test has been passed in, do a set-and-check test.
        // 0 (integer) is a valid property value, so check that `value` isn't
        // undefined, rather than just checking it's truthy.
        if (!skipValueTest && !is(value, 'undefined')) {
          // Needs a try catch block because of old IE. This is slow, but will
          // be avoided in most cases because `skipValueTest` will be used.
          try {
            mStyle.style[prop] = value;
          } catch (e) {}

          // If the property value has changed, we assume the value used is
          // supported. If `value` is empty string, it'll fail here (because
          // it hasn't changed), which matches how browsers have implemented
          // CSS.supports()
          if (mStyle.style[prop] != before) {
            cleanElems();
            return prefixed == 'pfx' ? prop : true;
          }
        }
        // Otherwise just return true, or the property name if this is a
        // `prefixed()` call
        else {
          cleanElems();
          return prefixed == 'pfx' ? prop : true;
        }
      }
    }
    cleanElems();
    return false;
  }
  ;

  /**
   * testProp() investigates whether a given style property is recognized
   * Property names can be provided in either camelCase or kebab-case.
   *
   * @memberof Modernizr
   * @name Modernizr.testProp
   * @access public
   * @optionName Modernizr.testProp()
   * @optionProp testProp
   * @function testProp
   * @param {string} prop - Name of the CSS property to check
   * @param {string} [value] - Name of the CSS value to check
   * @param {boolean} [useValue] - Whether or not to check the value if @supports isn't supported
   * @returns {boolean}
   * @example
   *
   * Just like [testAllProps](#modernizr-testallprops), only it does not check any vendor prefixed
   * version of the string.
   *
   * Note that the property name must be provided in camelCase (e.g. boxSizing not box-sizing)
   *
   * ```js
   * Modernizr.testProp('pointerEvents')  // true
   * ```
   *
   * You can also provide a value as an optional second argument to check if a
   * specific value is supported
   *
   * ```js
   * Modernizr.testProp('pointerEvents', 'none') // true
   * Modernizr.testProp('pointerEvents', 'penguin') // false
   * ```
   */

  var testProp = ModernizrProto.testProp = function (prop, value, useValue) {
    return testProps([prop], undefined, value, useValue);
  };

  /**
   * testPropsAll tests a list of DOM properties we want to check against.
   * We specify literally ALL possible (known and/or likely) properties on
   * the element including the non-vendor prefixed one, for forward-
   * compatibility.
   *
   * @access private
   * @function testPropsAll
   * @param {string} prop - A string of the property to test for
   * @param {string|object} [prefixed] - An object to check the prefixed properties on. Use a string to skip
   * @param {HTMLElement|SVGElement} [elem] - An element used to test the property and value against
   * @param {string} [value] - A string of a css value
   * @param {boolean} [skipValueTest] - An boolean representing if you want to test if value sticks when set
   * @returns {false|string} returns the string version of the property, or false if it is unsupported
   */
  function testPropsAll(prop, prefixed, elem, value, skipValueTest) {
    var ucProp = prop.charAt(0).toUpperCase() + prop.slice(1),
      props = (prop + ' ' + cssomPrefixes.join(ucProp + ' ') + ucProp).split(' ');

    // did they call .prefixed('boxSizing') or are we just testing a prop?
    if (is(prefixed, 'string') || is(prefixed, 'undefined')) {
      return testProps(props, prefixed, value, skipValueTest);

      // otherwise, they called .prefixed('requestAnimationFrame', window[, elem])
    } else {
      props = (prop + ' ' + domPrefixes.join(ucProp + ' ') + ucProp).split(' ');
      return testDOMProps(props, prefixed, elem);
    }
  }

  // Modernizr.testAllProps() investigates whether a given style property,
  // or any of its vendor-prefixed variants, is recognized
  //
  // Note that the property names must be provided in the camelCase variant.
  // Modernizr.testAllProps('boxSizing')
  ModernizrProto.testAllProps = testPropsAll;

  /**
   * testAllProps determines whether a given CSS property is supported in the browser
   *
   * @memberof Modernizr
   * @name Modernizr.testAllProps
   * @optionName Modernizr.testAllProps()
   * @optionProp testAllProps
   * @access public
   * @function testAllProps
   * @param {string} prop - String naming the property to test (either camelCase or kebab-case)
   * @param {string} [value] - String of the value to test
   * @param {boolean} [skipValueTest=false] - Whether to skip testing that the value is supported when using non-native detection
   * @example
   *
   * testAllProps determines whether a given CSS property, in some prefixed form,
   * is supported by the browser.
   *
   * ```js
   * testAllProps('boxSizing')  // true
   * ```
   *
   * It can optionally be given a CSS value in string form to test if a property
   * value is valid
   *
   * ```js
   * testAllProps('display', 'block') // true
   * testAllProps('display', 'penguin') // false
   * ```
   *
   * A boolean can be passed as a third parameter to skip the value check when
   * native detection (@supports) isn't available.
   *
   * ```js
   * testAllProps('shapeOutside', 'content-box', true);
   * ```
   */

  function testAllProps(prop, value, skipValueTest) {
    return testPropsAll(prop, undefined, undefined, value, skipValueTest);
  }
  ModernizrProto.testAllProps = testAllProps;

  /*!
  {
    "name": "CSS Transforms",
    "property": "csstransforms",
    "caniuse": "transforms2d",
    "tags": ["css"]
  }
  !*/

  Modernizr.addTest('csstransforms', function () {
    // Android < 3.0 is buggy, so we sniff and blacklist
    // http://git.io/hHzL7w
    return navigator.userAgent.indexOf('Android 2.') === -1 && testAllProps('transform', 'scale(1)', true);
  });

  /*!
  {
    "name": "Flexbox",
    "property": "flexbox",
    "caniuse": "flexbox",
    "tags": ["css"],
    "notes": [{
      "name": "The _new_ flexbox",
      "href": "http://dev.w3.org/csswg/css3-flexbox"
    }],
    "warnings": [
      "A `true` result for this detect does not imply that the `flex-wrap` property is supported; see the `flexwrap` detect."
    ]
  }
  !*/
  /* DOC
  Detects support for the Flexible Box Layout model, a.k.a. Flexbox, which allows easy manipulation of layout order and sizing within a container.
  */

  Modernizr.addTest('flexbox', testAllProps('flexBasis', '1px', true));

  /*!
  {
    "name": "Flexbox (legacy)",
    "property": "flexboxlegacy",
    "tags": ["css"],
    "polyfills": ["flexie"],
    "notes": [{
      "name": "The _old_ flexbox",
      "href": "https://www.w3.org/TR/2009/WD-css3-flexbox-20090723/"
    }]
  }
  !*/

  Modernizr.addTest('flexboxlegacy', testAllProps('boxDirection', 'reverse', true));

  /*!
  {
    "name": "CSS Overflow Scrolling",
    "property": "overflowscrolling",
    "tags": ["css"],
    "builderAliases": ["css_overflow_scrolling"],
    "warnings": ["Introduced in iOS5b2. API is subject to change."],
    "notes": [{
      "name": "Article on iOS overflow scrolling",
      "href": "https://css-tricks.com/snippets/css/momentum-scrolling-on-ios-overflow-elements/"
    }]
  }
  !*/

  Modernizr.addTest('overflowscrolling', testAllProps('overflowScrolling', 'touch', true));

  /*!
  {
    "name": "CSS Transforms 3D",
    "property": "csstransforms3d",
    "caniuse": "transforms3d",
    "tags": ["css"],
    "warnings": [
      "Chrome may occassionally fail this test on some systems; more info: https://code.google.com/p/chromium/issues/detail?id=129004"
    ]
  }
  !*/

  Modernizr.addTest('csstransforms3d', function () {
    return !!testAllProps('perspective', '1px', true);
  });

  /**
   * prefixed returns the prefixed or nonprefixed property name variant of your input
   *
   * @memberof Modernizr
   * @name Modernizr.prefixed
   * @optionName Modernizr.prefixed()
   * @optionProp prefixed
   * @access public
   * @function prefixed
   * @param {string} prop - String name of the property to test for
   * @param {object} [obj] - An object to test for the prefixed properties on
   * @param {HTMLElement} [elem] - An element used to test specific properties against
   * @returns {string|false} The string representing the (possibly prefixed) valid
   * version of the property, or `false` when it is unsupported.
   * @example
   *
   * Modernizr.prefixed takes a string css value in the DOM style camelCase (as
   * opposed to the css style kebab-case) form and returns the (possibly prefixed)
   * version of that property that the browser actually supports.
   *
   * For example, in older Firefox...
   * ```js
   * prefixed('boxSizing')
   * ```
   * returns 'MozBoxSizing'
   *
   * In newer Firefox, as well as any other browser that support the unprefixed
   * version would simply return `boxSizing`. Any browser that does not support
   * the property at all, it will return `false`.
   *
   * By default, prefixed is checked against a DOM element. If you want to check
   * for a property on another object, just pass it as a second argument
   *
   * ```js
   * var rAF = prefixed('requestAnimationFrame', window);
   *
   * raf(function() {
   *  renderFunction();
   * })
   * ```
   *
   * Note that this will return _the actual function_ - not the name of the function.
   * If you need the actual name of the property, pass in `false` as a third argument
   *
   * ```js
   * var rAFProp = prefixed('requestAnimationFrame', window, false);
   *
   * rafProp === 'WebkitRequestAnimationFrame' // in older webkit
   * ```
   *
   * One common use case for prefixed is if you're trying to determine which transition
   * end event to bind to, you might do something like...
   * ```js
   * var transEndEventNames = {
   *     'WebkitTransition' : 'webkitTransitionEnd', * Saf 6, Android Browser
   *     'MozTransition'    : 'transitionend',       * only for FF < 15
   *     'transition'       : 'transitionend'        * IE10, Opera, Chrome, FF 15+, Saf 7+
   * };
   *
   * var transEndEventName = transEndEventNames[ Modernizr.prefixed('transition') ];
   * ```
   *
   * If you want a similar lookup, but in kebab-case, you can use [prefixedCSS](#modernizr-prefixedcss).
   */

  var prefixed = ModernizrProto.prefixed = function (prop, obj, elem) {
    if (prop.indexOf('@') === 0) {
      return atRule(prop);
    }
    if (prop.indexOf('-') != -1) {
      // Convert kebab-case to camelCase
      prop = cssToDOM(prop);
    }
    if (!obj) {
      return testPropsAll(prop, 'pfx');
    } else {
      // Testing DOM property e.g. Modernizr.prefixed('requestAnimationFrame', window) // 'mozRequestAnimationFrame'
      return testPropsAll(prop, obj, elem);
    }
  };

  /*!
  {
    "name": "Force Touch Events",
    "property": "forcetouch",
    "authors": ["Kraig Walker"],
    "notes": [{
      "name": "Responding to Force Touch Events from JavaScript",
      "href": "https://developer.apple.com/library/prerelease/mac/documentation/AppleApplications/Conceptual/SafariJSProgTopics/Articles/RespondingtoForceTouchEventsfromJavaScript.html"
    }]
  }
  !*/
  /* DOC
  Tests whether the browser supports the detection of Force Touch Events.
  Force Touch Events allow custom behaviours and interactions to take place based on the given pressure or change in pressure from a compatible trackpad.
  
  Force Touch events are available in OS X 10.11 and later on devices equipped with Force Touch trackpads.
  */

  Modernizr.addTest('forcetouch', function () {
    // github.com/Modernizr/Modernizr/issues/1613
    // Test if the browser supports the force touch event progression (see notes link)
    if (!hasEvent(prefixed('mouseforcewillbegin', window, false), window)) {
      return false;
    }

    // Test if the browser provides thresholds defining a "force touch" from a normal touch/click event
    return MouseEvent.WEBKIT_FORCE_AT_MOUSE_DOWN && MouseEvent.WEBKIT_FORCE_AT_FORCE_MOUSE_DOWN;
  });

  // Run each test
  testRunner();

  // Remove the "no-js" class if it exists
  setClasses(classes);
  delete ModernizrProto.addTest;
  delete ModernizrProto.addAsyncTest;

  // Run the things that are supposed to run after the tests
  for (var i = 0; i < Modernizr._q.length; i++) {
    Modernizr._q[i]();
  }

  // Leak Modernizr namespace
  window.Modernizr = Modernizr;
  ;
})(window, document);

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_internals_export_js","vendors-node_modules_core-js_internals_add-to-unscopables_js-node_modules_core-js_internals_a-09983a","vendors-node_modules_core-js_internals_array-slice_js-node_modules_core-js_internals_function-caeab8","vendors-node_modules_core-js_modules_es_string_iterator_js-node_modules_core-js_modules_es_sy-23bad7","vendors-node_modules_core-js_internals_advance-string-index_js-node_modules_core-js_internals-27e96d","vendors-node_modules_core-js_modules_es_regexp_constructor_js-node_modules_core-js_modules_es-de7eec","vendors-node_modules_core-js_modules_es_array_index-of_js-node_modules_core-js_modules_es_arr-cb4c35"], () => (__webpack_exec__("./assets/css/portoadmin/vendor/modernizr/modernizr-custom.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q1osRUFBRSxDQUFDa0MsTUFBTSxFQUFFd0QsQ0FBQyxFQUFFLEVBQUU7SUFDNUM5RSxTQUFTLENBQUNaLEVBQUUsQ0FBQzBGLENBQUMsQ0FBQyxDQUFDLENBQUM7RUFDbkI7O0VBRUE7RUFDQWxHLE1BQU0sQ0FBQ29CLFNBQVMsR0FBR0EsU0FBUztFQUc5QjtBQUVBLENBQUMsRUFBRXBCLE1BQU0sRUFBRUMsUUFBUSxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY3NzL3BvcnRvYWRtaW4vdmVuZG9yL21vZGVybml6ci9tb2Rlcm5penItY3VzdG9tLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIVxuICogbW9kZXJuaXpyIHYzLjYuMFxuICogQnVpbGQgaHR0cHM6Ly9tb2Rlcm5penIuY29tL2Rvd25sb2FkPy1jc3N0cmFuc2Zvcm1zLWNzc3RyYW5zZm9ybXMzZC1mbGV4Ym94LWZsZXhib3hsZWdhY3ktZm9yY2V0b3VjaC1vdmVyZmxvd3Njcm9sbGluZy10b3VjaGV2ZW50cy1kb21wcmVmaXhlcy1wcmVmaXhlcy1wcmludHNoaXYtc2V0Y2xhc3Nlcy10ZXN0YWxscHJvcHMtdGVzdHByb3AtdGVzdHN0eWxlcy1kb250bWluXG4gKlxuICogQ29weXJpZ2h0IChjKVxuICogIEZhcnVrIEF0ZXNcbiAqICBQYXVsIElyaXNoXG4gKiAgQWxleCBTZXh0b25cbiAqICBSeWFuIFNlZGRvblxuICogIFBhdHJpY2sgS2V0dG5lclxuICogIFN0dSBDb3hcbiAqICBSaWNoYXJkIEhlcnJlcmFcblxuICogTUlUIExpY2Vuc2VcbiAqL1xuXG4vKlxuICogTW9kZXJuaXpyIHRlc3RzIHdoaWNoIG5hdGl2ZSBDU1MzIGFuZCBIVE1MNSBmZWF0dXJlcyBhcmUgYXZhaWxhYmxlIGluIHRoZVxuICogY3VycmVudCBVQSBhbmQgbWFrZXMgdGhlIHJlc3VsdHMgYXZhaWxhYmxlIHRvIHlvdSBpbiB0d28gd2F5czogYXMgcHJvcGVydGllcyBvblxuICogYSBnbG9iYWwgYE1vZGVybml6cmAgb2JqZWN0LCBhbmQgYXMgY2xhc3NlcyBvbiB0aGUgYDxodG1sPmAgZWxlbWVudC4gVGhpc1xuICogaW5mb3JtYXRpb24gYWxsb3dzIHlvdSB0byBwcm9ncmVzc2l2ZWx5IGVuaGFuY2UgeW91ciBwYWdlcyB3aXRoIGEgZ3JhbnVsYXIgbGV2ZWxcbiAqIG9mIGNvbnRyb2wgb3ZlciB0aGUgZXhwZXJpZW5jZS5cbiovXG5cbjsoZnVuY3Rpb24od2luZG93LCBkb2N1bWVudCwgdW5kZWZpbmVkKXtcbiAgdmFyIGNsYXNzZXMgPSBbXTtcbiAgXG5cbiAgdmFyIHRlc3RzID0gW107XG4gIFxuXG4gIC8qKlxuICAgKlxuICAgKiBNb2Rlcm5penJQcm90byBpcyB0aGUgY29uc3RydWN0b3IgZm9yIE1vZGVybml6clxuICAgKlxuICAgKiBAY2xhc3NcbiAgICogQGFjY2VzcyBwdWJsaWNcbiAgICovXG5cbiAgdmFyIE1vZGVybml6clByb3RvID0ge1xuICAgIC8vIFRoZSBjdXJyZW50IHZlcnNpb24sIGR1bW15XG4gICAgX3ZlcnNpb246ICczLjYuMCcsXG5cbiAgICAvLyBBbnkgc2V0dGluZ3MgdGhhdCBkb24ndCB3b3JrIGFzIHNlcGFyYXRlIG1vZHVsZXNcbiAgICAvLyBjYW4gZ28gaW4gaGVyZSBhcyBjb25maWd1cmF0aW9uLlxuICAgIF9jb25maWc6IHtcbiAgICAgICdjbGFzc1ByZWZpeCc6ICcnLFxuICAgICAgJ2VuYWJsZUNsYXNzZXMnOiB0cnVlLFxuICAgICAgJ2VuYWJsZUpTQ2xhc3MnOiB0cnVlLFxuICAgICAgJ3VzZVByZWZpeGVzJzogdHJ1ZVxuICAgIH0sXG5cbiAgICAvLyBRdWV1ZSBvZiB0ZXN0c1xuICAgIF9xOiBbXSxcblxuICAgIC8vIFN0dWIgdGhlc2UgZm9yIHBlb3BsZSB3aG8gYXJlIGxpc3RlbmluZ1xuICAgIG9uOiBmdW5jdGlvbih0ZXN0LCBjYikge1xuICAgICAgLy8gSSBkb24ndCByZWFsbHkgdGhpbmsgcGVvcGxlIHNob3VsZCBkbyB0aGlzLCBidXQgd2UgY2FuXG4gICAgICAvLyBzYWZlIGd1YXJkIGl0IGEgYml0LlxuICAgICAgLy8gLS0gTk9URTo6IHRoaXMgZ2V0cyBXQVkgb3ZlcnJpZGRlbiBpbiBzcmMvYWRkVGVzdCBmb3IgYWN0dWFsIGFzeW5jIHRlc3RzLlxuICAgICAgLy8gVGhpcyBpcyBpbiBjYXNlIHBlb3BsZSBsaXN0ZW4gdG8gc3luY2hyb25vdXMgdGVzdHMuIEkgd291bGQgbGVhdmUgaXQgb3V0LFxuICAgICAgLy8gYnV0IHRoZSBjb2RlIHRvICpkaXNhbGxvdyogc3luYyB0ZXN0cyBpbiB0aGUgcmVhbCB2ZXJzaW9uIG9mIHRoaXNcbiAgICAgIC8vIGZ1bmN0aW9uIGlzIGFjdHVhbGx5IGxhcmdlciB0aGFuIHRoaXMuXG4gICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICBjYihzZWxmW3Rlc3RdKTtcbiAgICAgIH0sIDApO1xuICAgIH0sXG5cbiAgICBhZGRUZXN0OiBmdW5jdGlvbihuYW1lLCBmbiwgb3B0aW9ucykge1xuICAgICAgdGVzdHMucHVzaCh7bmFtZTogbmFtZSwgZm46IGZuLCBvcHRpb25zOiBvcHRpb25zfSk7XG4gICAgfSxcblxuICAgIGFkZEFzeW5jVGVzdDogZnVuY3Rpb24oZm4pIHtcbiAgICAgIHRlc3RzLnB1c2goe25hbWU6IG51bGwsIGZuOiBmbn0pO1xuICAgIH1cbiAgfTtcblxuICBcblxuICAvLyBGYWtlIHNvbWUgb2YgT2JqZWN0LmNyZWF0ZSBzbyB3ZSBjYW4gZm9yY2Ugbm9uIHRlc3QgcmVzdWx0cyB0byBiZSBub24gXCJvd25cIiBwcm9wZXJ0aWVzLlxuICB2YXIgTW9kZXJuaXpyID0gZnVuY3Rpb24oKSB7fTtcbiAgTW9kZXJuaXpyLnByb3RvdHlwZSA9IE1vZGVybml6clByb3RvO1xuXG4gIC8vIExlYWsgbW9kZXJuaXpyIGdsb2JhbGx5IHdoZW4geW91IGByZXF1aXJlYCBpdCByYXRoZXIgdGhhbiBmb3JjZSBpdCBoZXJlLlxuICAvLyBPdmVyd3JpdGUgbmFtZSBzbyBjb25zdHJ1Y3RvciBuYW1lIGlzIG5pY2VyIDpEXG4gIE1vZGVybml6ciA9IG5ldyBNb2Rlcm5penIoKTtcblxuICBcblxuICAvKipcbiAgICogTGlzdCBvZiBwcm9wZXJ0eSB2YWx1ZXMgdG8gc2V0IGZvciBjc3MgdGVzdHMuIFNlZSB0aWNrZXQgIzIxXG4gICAqIGh0dHA6Ly9naXQuaW8vdlVHbDRcbiAgICpcbiAgICogQG1lbWJlcm9mIE1vZGVybml6clxuICAgKiBAbmFtZSBNb2Rlcm5penIuX3ByZWZpeGVzXG4gICAqIEBvcHRpb25OYW1lIE1vZGVybml6ci5fcHJlZml4ZXNcbiAgICogQG9wdGlvblByb3AgcHJlZml4ZXNcbiAgICogQGFjY2VzcyBwdWJsaWNcbiAgICogQGV4YW1wbGVcbiAgICpcbiAgICogTW9kZXJuaXpyLl9wcmVmaXhlcyBpcyB0aGUgaW50ZXJuYWwgbGlzdCBvZiBwcmVmaXhlcyB0aGF0IHdlIHRlc3QgYWdhaW5zdFxuICAgKiBpbnNpZGUgb2YgdGhpbmdzIGxpa2UgW3ByZWZpeGVkXSgjbW9kZXJuaXpyLXByZWZpeGVkKSBhbmQgW3ByZWZpeGVkQ1NTXSgjLWNvZGUtbW9kZXJuaXpyLXByZWZpeGVkY3NzKS4gSXQgaXMgc2ltcGx5XG4gICAqIGFuIGFycmF5IG9mIGtlYmFiLWNhc2UgdmVuZG9yIHByZWZpeGVzIHlvdSBjYW4gdXNlIHdpdGhpbiB5b3VyIGNvZGUuXG4gICAqXG4gICAqIFNvbWUgY29tbW9uIHVzZSBjYXNlcyBpbmNsdWRlXG4gICAqXG4gICAqIEdlbmVyYXRpbmcgYWxsIHBvc3NpYmxlIHByZWZpeGVkIHZlcnNpb24gb2YgYSBDU1MgcHJvcGVydHlcbiAgICogYGBganNcbiAgICogdmFyIHJ1bGUgPSBNb2Rlcm5penIuX3ByZWZpeGVzLmpvaW4oJ3RyYW5zZm9ybTogcm90YXRlKDIwZGVnKTsgJyk7XG4gICAqXG4gICAqIHJ1bGUgPT09ICd0cmFuc2Zvcm06IHJvdGF0ZSgyMGRlZyk7IHdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgyMGRlZyk7IG1vei10cmFuc2Zvcm06IHJvdGF0ZSgyMGRlZyk7IG8tdHJhbnNmb3JtOiByb3RhdGUoMjBkZWcpOyBtcy10cmFuc2Zvcm06IHJvdGF0ZSgyMGRlZyk7J1xuICAgKiBgYGBcbiAgICpcbiAgICogR2VuZXJhdGluZyBhbGwgcG9zc2libGUgcHJlZml4ZWQgdmVyc2lvbiBvZiBhIENTUyB2YWx1ZVxuICAgKiBgYGBqc1xuICAgKiBydWxlID0gJ2Rpc3BsYXk6JyArICBNb2Rlcm5penIuX3ByZWZpeGVzLmpvaW4oJ2ZsZXg7IGRpc3BsYXk6JykgKyAnZmxleCc7XG4gICAqXG4gICAqIHJ1bGUgPT09ICdkaXNwbGF5OmZsZXg7IGRpc3BsYXk6LXdlYmtpdC1mbGV4OyBkaXNwbGF5Oi1tb3otZmxleDsgZGlzcGxheTotby1mbGV4OyBkaXNwbGF5Oi1tcy1mbGV4OyBkaXNwbGF5OmZsZXgnXG4gICAqIGBgYFxuICAgKi9cblxuICAvLyB3ZSB1c2UgWycnLCcnXSByYXRoZXIgdGhhbiBhbiBlbXB0eSBhcnJheSBpbiBvcmRlciB0byBhbGxvdyBhIHBhdHRlcm4gb2YgLmBqb2luKClgaW5nIHByZWZpeGVzIHRvIHRlc3RcbiAgLy8gdmFsdWVzIGluIGZlYXR1cmUgZGV0ZWN0cyB0byBjb250aW51ZSB0byB3b3JrXG4gIHZhciBwcmVmaXhlcyA9IChNb2Rlcm5penJQcm90by5fY29uZmlnLnVzZVByZWZpeGVzID8gJyAtd2Via2l0LSAtbW96LSAtby0gLW1zLSAnLnNwbGl0KCcgJykgOiBbJycsJyddKTtcblxuICAvLyBleHBvc2UgdGhlc2UgZm9yIHRoZSBwbHVnaW4gQVBJLiBMb29rIGluIHRoZSBzb3VyY2UgZm9yIGhvdyB0byBqb2luKCkgdGhlbSBhZ2FpbnN0IHlvdXIgaW5wdXRcbiAgTW9kZXJuaXpyUHJvdG8uX3ByZWZpeGVzID0gcHJlZml4ZXM7XG5cbiAgXG5cbiAgLyoqXG4gICAqIGlzIHJldHVybnMgYSBib29sZWFuIGlmIHRoZSB0eXBlb2YgYW4gb2JqIGlzIGV4YWN0bHkgdHlwZS5cbiAgICpcbiAgICogQGFjY2VzcyBwcml2YXRlXG4gICAqIEBmdW5jdGlvbiBpc1xuICAgKiBAcGFyYW0geyp9IG9iaiAtIEEgdGhpbmcgd2Ugd2FudCB0byBjaGVjayB0aGUgdHlwZSBvZlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdHlwZSAtIEEgc3RyaW5nIHRvIGNvbXBhcmUgdGhlIHR5cGVvZiBhZ2FpbnN0XG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKi9cblxuICBmdW5jdGlvbiBpcyhvYmosIHR5cGUpIHtcbiAgICByZXR1cm4gdHlwZW9mIG9iaiA9PT0gdHlwZTtcbiAgfVxuICA7XG5cbiAgLyoqXG4gICAqIFJ1biB0aHJvdWdoIGFsbCB0ZXN0cyBhbmQgZGV0ZWN0IHRoZWlyIHN1cHBvcnQgaW4gdGhlIGN1cnJlbnQgVUEuXG4gICAqXG4gICAqIEBhY2Nlc3MgcHJpdmF0ZVxuICAgKi9cblxuICBmdW5jdGlvbiB0ZXN0UnVubmVyKCkge1xuICAgIHZhciBmZWF0dXJlTmFtZXM7XG4gICAgdmFyIGZlYXR1cmU7XG4gICAgdmFyIGFsaWFzSWR4O1xuICAgIHZhciByZXN1bHQ7XG4gICAgdmFyIG5hbWVJZHg7XG4gICAgdmFyIGZlYXR1cmVOYW1lO1xuICAgIHZhciBmZWF0dXJlTmFtZVNwbGl0O1xuXG4gICAgZm9yICh2YXIgZmVhdHVyZUlkeCBpbiB0ZXN0cykge1xuICAgICAgaWYgKHRlc3RzLmhhc093blByb3BlcnR5KGZlYXR1cmVJZHgpKSB7XG4gICAgICAgIGZlYXR1cmVOYW1lcyA9IFtdO1xuICAgICAgICBmZWF0dXJlID0gdGVzdHNbZmVhdHVyZUlkeF07XG4gICAgICAgIC8vIHJ1biB0aGUgdGVzdCwgdGhyb3cgdGhlIHJldHVybiB2YWx1ZSBpbnRvIHRoZSBNb2Rlcm5penIsXG4gICAgICAgIC8vIHRoZW4gYmFzZWQgb24gdGhhdCBib29sZWFuLCBkZWZpbmUgYW4gYXBwcm9wcmlhdGUgY2xhc3NOYW1lXG4gICAgICAgIC8vIGFuZCBwdXNoIGl0IGludG8gYW4gYXJyYXkgb2YgY2xhc3NlcyB3ZSdsbCBqb2luIGxhdGVyLlxuICAgICAgICAvL1xuICAgICAgICAvLyBJZiB0aGVyZSBpcyBubyBuYW1lLCBpdCdzIGFuICdhc3luYycgdGVzdCB0aGF0IGlzIHJ1bixcbiAgICAgICAgLy8gYnV0IG5vdCBkaXJlY3RseSBhZGRlZCB0byB0aGUgb2JqZWN0LiBUaGF0IHNob3VsZFxuICAgICAgICAvLyBiZSBkb25lIHdpdGggYSBwb3N0LXJ1biBhZGRUZXN0IGNhbGwuXG4gICAgICAgIGlmIChmZWF0dXJlLm5hbWUpIHtcbiAgICAgICAgICBmZWF0dXJlTmFtZXMucHVzaChmZWF0dXJlLm5hbWUudG9Mb3dlckNhc2UoKSk7XG5cbiAgICAgICAgICBpZiAoZmVhdHVyZS5vcHRpb25zICYmIGZlYXR1cmUub3B0aW9ucy5hbGlhc2VzICYmIGZlYXR1cmUub3B0aW9ucy5hbGlhc2VzLmxlbmd0aCkge1xuICAgICAgICAgICAgLy8gQWRkIGFsbCB0aGUgYWxpYXNlcyBpbnRvIHRoZSBuYW1lcyBsaXN0XG4gICAgICAgICAgICBmb3IgKGFsaWFzSWR4ID0gMDsgYWxpYXNJZHggPCBmZWF0dXJlLm9wdGlvbnMuYWxpYXNlcy5sZW5ndGg7IGFsaWFzSWR4KyspIHtcbiAgICAgICAgICAgICAgZmVhdHVyZU5hbWVzLnB1c2goZmVhdHVyZS5vcHRpb25zLmFsaWFzZXNbYWxpYXNJZHhdLnRvTG93ZXJDYXNlKCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFJ1biB0aGUgdGVzdCwgb3IgdXNlIHRoZSByYXcgdmFsdWUgaWYgaXQncyBub3QgYSBmdW5jdGlvblxuICAgICAgICByZXN1bHQgPSBpcyhmZWF0dXJlLmZuLCAnZnVuY3Rpb24nKSA/IGZlYXR1cmUuZm4oKSA6IGZlYXR1cmUuZm47XG5cblxuICAgICAgICAvLyBTZXQgZWFjaCBvZiB0aGUgbmFtZXMgb24gdGhlIE1vZGVybml6ciBvYmplY3RcbiAgICAgICAgZm9yIChuYW1lSWR4ID0gMDsgbmFtZUlkeCA8IGZlYXR1cmVOYW1lcy5sZW5ndGg7IG5hbWVJZHgrKykge1xuICAgICAgICAgIGZlYXR1cmVOYW1lID0gZmVhdHVyZU5hbWVzW25hbWVJZHhdO1xuICAgICAgICAgIC8vIFN1cHBvcnQgZG90IHByb3BlcnRpZXMgYXMgc3ViIHRlc3RzLiBXZSBkb24ndCBkbyBjaGVja2luZyB0byBtYWtlIHN1cmVcbiAgICAgICAgICAvLyB0aGF0IHRoZSBpbXBsaWVkIHBhcmVudCB0ZXN0cyBoYXZlIGJlZW4gYWRkZWQuIFlvdSBtdXN0IGNhbGwgdGhlbSBpblxuICAgICAgICAgIC8vIG9yZGVyIChlaXRoZXIgaW4gdGhlIHRlc3QsIG9yIG1ha2UgdGhlIHBhcmVudCB0ZXN0IGEgZGVwZW5kZW5jeSkuXG4gICAgICAgICAgLy9cbiAgICAgICAgICAvLyBDYXAgaXQgdG8gVFdPIHRvIG1ha2UgdGhlIGxvZ2ljIHNpbXBsZSBhbmQgYmVjYXVzZSB3aG8gbmVlZHMgdGhhdCBraW5kIG9mIHN1YnRlc3RpbmdcbiAgICAgICAgICAvLyBoYXNodGFnIGZhbW91cyBsYXN0IHdvcmRzXG4gICAgICAgICAgZmVhdHVyZU5hbWVTcGxpdCA9IGZlYXR1cmVOYW1lLnNwbGl0KCcuJyk7XG5cbiAgICAgICAgICBpZiAoZmVhdHVyZU5hbWVTcGxpdC5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgIE1vZGVybml6cltmZWF0dXJlTmFtZVNwbGl0WzBdXSA9IHJlc3VsdDtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gY2FzdCB0byBhIEJvb2xlYW4sIGlmIG5vdCBvbmUgYWxyZWFkeVxuICAgICAgICAgICAgaWYgKE1vZGVybml6cltmZWF0dXJlTmFtZVNwbGl0WzBdXSAmJiAhKE1vZGVybml6cltmZWF0dXJlTmFtZVNwbGl0WzBdXSBpbnN0YW5jZW9mIEJvb2xlYW4pKSB7XG4gICAgICAgICAgICAgIE1vZGVybml6cltmZWF0dXJlTmFtZVNwbGl0WzBdXSA9IG5ldyBCb29sZWFuKE1vZGVybml6cltmZWF0dXJlTmFtZVNwbGl0WzBdXSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIE1vZGVybml6cltmZWF0dXJlTmFtZVNwbGl0WzBdXVtmZWF0dXJlTmFtZVNwbGl0WzFdXSA9IHJlc3VsdDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjbGFzc2VzLnB1c2goKHJlc3VsdCA/ICcnIDogJ25vLScpICsgZmVhdHVyZU5hbWVTcGxpdC5qb2luKCctJykpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIDtcblxuICAvKipcbiAgICogZG9jRWxlbWVudCBpcyBhIGNvbnZlbmllbmNlIHdyYXBwZXIgdG8gZ3JhYiB0aGUgcm9vdCBlbGVtZW50IG9mIHRoZSBkb2N1bWVudFxuICAgKlxuICAgKiBAYWNjZXNzIHByaXZhdGVcbiAgICogQHJldHVybnMge0hUTUxFbGVtZW50fFNWR0VsZW1lbnR9IFRoZSByb290IGVsZW1lbnQgb2YgdGhlIGRvY3VtZW50XG4gICAqL1xuXG4gIHZhciBkb2NFbGVtZW50ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuICBcblxuICAvKipcbiAgICogQSBjb252ZW5pZW5jZSBoZWxwZXIgdG8gY2hlY2sgaWYgdGhlIGRvY3VtZW50IHdlIGFyZSBydW5uaW5nIGluIGlzIGFuIFNWRyBkb2N1bWVudFxuICAgKlxuICAgKiBAYWNjZXNzIHByaXZhdGVcbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqL1xuXG4gIHZhciBpc1NWRyA9IGRvY0VsZW1lbnQubm9kZU5hbWUudG9Mb3dlckNhc2UoKSA9PT0gJ3N2Zyc7XG4gIFxuXG4gIC8qKlxuICAgKiBzZXRDbGFzc2VzIHRha2VzIGFuIGFycmF5IG9mIGNsYXNzIG5hbWVzIGFuZCBhZGRzIHRoZW0gdG8gdGhlIHJvb3QgZWxlbWVudFxuICAgKlxuICAgKiBAYWNjZXNzIHByaXZhdGVcbiAgICogQGZ1bmN0aW9uIHNldENsYXNzZXNcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0gY2xhc3NlcyAtIEFycmF5IG9mIGNsYXNzIG5hbWVzXG4gICAqL1xuXG4gIC8vIFBhc3MgaW4gYW4gYW5kIGFycmF5IG9mIGNsYXNzIG5hbWVzLCBlLmcuOlxuICAvLyAgWyduby13ZWJwJywgJ2JvcmRlcnJhZGl1cycsIC4uLl1cbiAgZnVuY3Rpb24gc2V0Q2xhc3NlcyhjbGFzc2VzKSB7XG4gICAgdmFyIGNsYXNzTmFtZSA9IGRvY0VsZW1lbnQuY2xhc3NOYW1lO1xuICAgIHZhciBjbGFzc1ByZWZpeCA9IE1vZGVybml6ci5fY29uZmlnLmNsYXNzUHJlZml4IHx8ICcnO1xuXG4gICAgaWYgKGlzU1ZHKSB7XG4gICAgICBjbGFzc05hbWUgPSBjbGFzc05hbWUuYmFzZVZhbDtcbiAgICB9XG5cbiAgICAvLyBDaGFuZ2UgYG5vLWpzYCB0byBganNgIChpbmRlcGVuZGVudGx5IG9mIHRoZSBgZW5hYmxlQ2xhc3Nlc2Agb3B0aW9uKVxuICAgIC8vIEhhbmRsZSBjbGFzc1ByZWZpeCBvbiB0aGlzIHRvb1xuICAgIGlmIChNb2Rlcm5penIuX2NvbmZpZy5lbmFibGVKU0NsYXNzKSB7XG4gICAgICB2YXIgcmVKUyA9IG5ldyBSZWdFeHAoJyhefFxcXFxzKScgKyBjbGFzc1ByZWZpeCArICduby1qcyhcXFxcc3wkKScpO1xuICAgICAgY2xhc3NOYW1lID0gY2xhc3NOYW1lLnJlcGxhY2UocmVKUywgJyQxJyArIGNsYXNzUHJlZml4ICsgJ2pzJDInKTtcbiAgICB9XG5cbiAgICBpZiAoTW9kZXJuaXpyLl9jb25maWcuZW5hYmxlQ2xhc3Nlcykge1xuICAgICAgLy8gQWRkIHRoZSBuZXcgY2xhc3Nlc1xuICAgICAgY2xhc3NOYW1lICs9ICcgJyArIGNsYXNzUHJlZml4ICsgY2xhc3Nlcy5qb2luKCcgJyArIGNsYXNzUHJlZml4KTtcbiAgICAgIGlmIChpc1NWRykge1xuICAgICAgICBkb2NFbGVtZW50LmNsYXNzTmFtZS5iYXNlVmFsID0gY2xhc3NOYW1lO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZG9jRWxlbWVudC5jbGFzc05hbWUgPSBjbGFzc05hbWU7XG4gICAgICB9XG4gICAgfVxuXG4gIH1cblxuICA7XG5cbi8qKlxuICAqIEBvcHRpb25OYW1lIGh0bWw1cHJpbnRzaGl2XG4gICogQG9wdGlvblByb3AgaHRtbDVwcmludHNoaXZcbiAgKi9cblxuICAvLyBUYWtlIHRoZSBodG1sNSB2YXJpYWJsZSBvdXQgb2YgdGhlIGh0bWw1c2hpdiBzY29wZSBzbyB3ZSBjYW4gcmV0dXJuIGl0LlxuICB2YXIgaHRtbDU7XG4gIGlmICghaXNTVkcpIHtcblxuICAgIC8qKlxuICAgICAqIEBwcmVzZXJ2ZSBIVE1MNSBTaGl2IDMuNy4zIHwgQGFmYXJrYXMgQGpkYWx0b24gQGpvbl9uZWFsIEByZW0gfCBNSVQvR1BMMiBMaWNlbnNlZFxuICAgICAqL1xuICAgIDsoZnVuY3Rpb24od2luZG93LCBkb2N1bWVudCkge1xuICAgICAgLyoqIHZlcnNpb24gKi9cbiAgICAgIHZhciB2ZXJzaW9uID0gJzMuNy4zJztcblxuICAgICAgLyoqIFByZXNldCBvcHRpb25zICovXG4gICAgICB2YXIgb3B0aW9ucyA9IHdpbmRvdy5odG1sNSB8fCB7fTtcblxuICAgICAgLyoqIFVzZWQgdG8gc2tpcCBwcm9ibGVtIGVsZW1lbnRzICovXG4gICAgICB2YXIgcmVTa2lwID0gL148fF4oPzpidXR0b258bWFwfHNlbGVjdHx0ZXh0YXJlYXxvYmplY3R8aWZyYW1lfG9wdGlvbnxvcHRncm91cCkkL2k7XG5cbiAgICAgIC8qKiBOb3QgYWxsIGVsZW1lbnRzIGNhbiBiZSBjbG9uZWQgaW4gSUUgKiovXG4gICAgICB2YXIgc2F2ZUNsb25lcyA9IC9eKD86YXxifGNvZGV8ZGl2fGZpZWxkc2V0fGgxfGgyfGgzfGg0fGg1fGg2fGl8bGFiZWx8bGl8b2x8cHxxfHNwYW58c3Ryb25nfHN0eWxlfHRhYmxlfHRib2R5fHRkfHRofHRyfHVsKSQvaTtcblxuICAgICAgLyoqIERldGVjdCB3aGV0aGVyIHRoZSBicm93c2VyIHN1cHBvcnRzIGRlZmF1bHQgaHRtbDUgc3R5bGVzICovXG4gICAgICB2YXIgc3VwcG9ydHNIdG1sNVN0eWxlcztcblxuICAgICAgLyoqIE5hbWUgb2YgdGhlIGV4cGFuZG8sIHRvIHdvcmsgd2l0aCBtdWx0aXBsZSBkb2N1bWVudHMgb3IgdG8gcmUtc2hpdiBvbmUgZG9jdW1lbnQgKi9cbiAgICAgIHZhciBleHBhbmRvID0gJ19odG1sNXNoaXYnO1xuXG4gICAgICAvKiogVGhlIGlkIGZvciB0aGUgdGhlIGRvY3VtZW50cyBleHBhbmRvICovXG4gICAgICB2YXIgZXhwYW5JRCA9IDA7XG5cbiAgICAgIC8qKiBDYWNoZWQgZGF0YSBmb3IgZWFjaCBkb2N1bWVudCAqL1xuICAgICAgdmFyIGV4cGFuZG9EYXRhID0ge307XG5cbiAgICAgIC8qKiBEZXRlY3Qgd2hldGhlciB0aGUgYnJvd3NlciBzdXBwb3J0cyB1bmtub3duIGVsZW1lbnRzICovXG4gICAgICB2YXIgc3VwcG9ydHNVbmtub3duRWxlbWVudHM7XG5cbiAgICAgIChmdW5jdGlvbigpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICB2YXIgYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICAgICAgICBhLmlubmVySFRNTCA9ICc8eHl6PjwveHl6Pic7XG4gICAgICAgICAgLy9pZiB0aGUgaGlkZGVuIHByb3BlcnR5IGlzIGltcGxlbWVudGVkIHdlIGNhbiBhc3N1bWUsIHRoYXQgdGhlIGJyb3dzZXIgc3VwcG9ydHMgYmFzaWMgSFRNTDUgU3R5bGVzXG4gICAgICAgICAgc3VwcG9ydHNIdG1sNVN0eWxlcyA9ICgnaGlkZGVuJyBpbiBhKTtcblxuICAgICAgICAgIHN1cHBvcnRzVW5rbm93bkVsZW1lbnRzID0gYS5jaGlsZE5vZGVzLmxlbmd0aCA9PSAxIHx8IChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIC8vIGFzc2lnbiBhIGZhbHNlIHBvc2l0aXZlIGlmIHVuYWJsZSB0byBzaGl2XG4gICAgICAgICAgICAoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCkoJ2EnKTtcbiAgICAgICAgICAgIHZhciBmcmFnID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgdHlwZW9mIGZyYWcuY2xvbmVOb2RlID09ICd1bmRlZmluZWQnIHx8XG4gICAgICAgICAgICAgICAgdHlwZW9mIGZyYWcuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCA9PSAndW5kZWZpbmVkJyB8fFxuICAgICAgICAgICAgICAgIHR5cGVvZiBmcmFnLmNyZWF0ZUVsZW1lbnQgPT0gJ3VuZGVmaW5lZCdcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSgpKTtcbiAgICAgICAgfSBjYXRjaChlKSB7XG4gICAgICAgICAgLy8gYXNzaWduIGEgZmFsc2UgcG9zaXRpdmUgaWYgZGV0ZWN0aW9uIGZhaWxzID0+IHVuYWJsZSB0byBzaGl2XG4gICAgICAgICAgc3VwcG9ydHNIdG1sNVN0eWxlcyA9IHRydWU7XG4gICAgICAgICAgc3VwcG9ydHNVbmtub3duRWxlbWVudHMgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgIH0oKSk7XG5cbiAgICAgIC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG4gICAgICAvKipcbiAgICAgICAqIENyZWF0ZXMgYSBzdHlsZSBzaGVldCB3aXRoIHRoZSBnaXZlbiBDU1MgdGV4dCBhbmQgYWRkcyBpdCB0byB0aGUgZG9jdW1lbnQuXG4gICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICogQHBhcmFtIHtEb2N1bWVudH0gb3duZXJEb2N1bWVudCBUaGUgZG9jdW1lbnQuXG4gICAgICAgKiBAcGFyYW0ge1N0cmluZ30gY3NzVGV4dCBUaGUgQ1NTIHRleHQuXG4gICAgICAgKiBAcmV0dXJucyB7U3R5bGVTaGVldH0gVGhlIHN0eWxlIGVsZW1lbnQuXG4gICAgICAgKi9cbiAgICAgIGZ1bmN0aW9uIGFkZFN0eWxlU2hlZXQob3duZXJEb2N1bWVudCwgY3NzVGV4dCkge1xuICAgICAgICB2YXIgcCA9IG93bmVyRG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpLFxuICAgICAgICAgIHBhcmVudCA9IG93bmVyRG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2hlYWQnKVswXSB8fCBvd25lckRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcblxuICAgICAgICBwLmlubmVySFRNTCA9ICd4PHN0eWxlPicgKyBjc3NUZXh0ICsgJzwvc3R5bGU+JztcbiAgICAgICAgcmV0dXJuIHBhcmVudC5pbnNlcnRCZWZvcmUocC5sYXN0Q2hpbGQsIHBhcmVudC5maXJzdENoaWxkKTtcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBSZXR1cm5zIHRoZSB2YWx1ZSBvZiBgaHRtbDUuZWxlbWVudHNgIGFzIGFuIGFycmF5LlxuICAgICAgICogQHByaXZhdGVcbiAgICAgICAqIEByZXR1cm5zIHtBcnJheX0gQW4gYXJyYXkgb2Ygc2hpdmVkIGVsZW1lbnQgbm9kZSBuYW1lcy5cbiAgICAgICAqL1xuICAgICAgZnVuY3Rpb24gZ2V0RWxlbWVudHMoKSB7XG4gICAgICAgIHZhciBlbGVtZW50cyA9IGh0bWw1LmVsZW1lbnRzO1xuICAgICAgICByZXR1cm4gdHlwZW9mIGVsZW1lbnRzID09ICdzdHJpbmcnID8gZWxlbWVudHMuc3BsaXQoJyAnKSA6IGVsZW1lbnRzO1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIEV4dGVuZHMgdGhlIGJ1aWx0LWluIGxpc3Qgb2YgaHRtbDUgZWxlbWVudHNcbiAgICAgICAqIEBtZW1iZXJPZiBodG1sNVxuICAgICAgICogQHBhcmFtIHtTdHJpbmd8QXJyYXl9IG5ld0VsZW1lbnRzIHdoaXRlc3BhY2Ugc2VwYXJhdGVkIGxpc3Qgb3IgYXJyYXkgb2YgbmV3IGVsZW1lbnQgbmFtZXMgdG8gc2hpdlxuICAgICAgICogQHBhcmFtIHtEb2N1bWVudH0gb3duZXJEb2N1bWVudCBUaGUgY29udGV4dCBkb2N1bWVudC5cbiAgICAgICAqL1xuICAgICAgZnVuY3Rpb24gYWRkRWxlbWVudHMobmV3RWxlbWVudHMsIG93bmVyRG9jdW1lbnQpIHtcbiAgICAgICAgdmFyIGVsZW1lbnRzID0gaHRtbDUuZWxlbWVudHM7XG4gICAgICAgIGlmKHR5cGVvZiBlbGVtZW50cyAhPSAnc3RyaW5nJyl7XG4gICAgICAgICAgZWxlbWVudHMgPSBlbGVtZW50cy5qb2luKCcgJyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYodHlwZW9mIG5ld0VsZW1lbnRzICE9ICdzdHJpbmcnKXtcbiAgICAgICAgICBuZXdFbGVtZW50cyA9IG5ld0VsZW1lbnRzLmpvaW4oJyAnKTtcbiAgICAgICAgfVxuICAgICAgICBodG1sNS5lbGVtZW50cyA9IGVsZW1lbnRzICsnICcrIG5ld0VsZW1lbnRzO1xuICAgICAgICBzaGl2RG9jdW1lbnQob3duZXJEb2N1bWVudCk7XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogUmV0dXJucyB0aGUgZGF0YSBhc3NvY2lhdGVkIHRvIHRoZSBnaXZlbiBkb2N1bWVudFxuICAgICAgICogQHByaXZhdGVcbiAgICAgICAqIEBwYXJhbSB7RG9jdW1lbnR9IG93bmVyRG9jdW1lbnQgVGhlIGRvY3VtZW50LlxuICAgICAgICogQHJldHVybnMge09iamVjdH0gQW4gb2JqZWN0IG9mIGRhdGEuXG4gICAgICAgKi9cbiAgICAgIGZ1bmN0aW9uIGdldEV4cGFuZG9EYXRhKG93bmVyRG9jdW1lbnQpIHtcbiAgICAgICAgdmFyIGRhdGEgPSBleHBhbmRvRGF0YVtvd25lckRvY3VtZW50W2V4cGFuZG9dXTtcbiAgICAgICAgaWYgKCFkYXRhKSB7XG4gICAgICAgICAgZGF0YSA9IHt9O1xuICAgICAgICAgIGV4cGFuSUQrKztcbiAgICAgICAgICBvd25lckRvY3VtZW50W2V4cGFuZG9dID0gZXhwYW5JRDtcbiAgICAgICAgICBleHBhbmRvRGF0YVtleHBhbklEXSA9IGRhdGE7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogcmV0dXJucyBhIHNoaXZlZCBlbGVtZW50IGZvciB0aGUgZ2l2ZW4gbm9kZU5hbWUgYW5kIGRvY3VtZW50XG4gICAgICAgKiBAbWVtYmVyT2YgaHRtbDVcbiAgICAgICAqIEBwYXJhbSB7U3RyaW5nfSBub2RlTmFtZSBuYW1lIG9mIHRoZSBlbGVtZW50XG4gICAgICAgKiBAcGFyYW0ge0RvY3VtZW50fSBvd25lckRvY3VtZW50IFRoZSBjb250ZXh0IGRvY3VtZW50LlxuICAgICAgICogQHJldHVybnMge09iamVjdH0gVGhlIHNoaXZlZCBlbGVtZW50LlxuICAgICAgICovXG4gICAgICBmdW5jdGlvbiBjcmVhdGVFbGVtZW50KG5vZGVOYW1lLCBvd25lckRvY3VtZW50LCBkYXRhKXtcbiAgICAgICAgaWYgKCFvd25lckRvY3VtZW50KSB7XG4gICAgICAgICAgb3duZXJEb2N1bWVudCA9IGRvY3VtZW50O1xuICAgICAgICB9XG4gICAgICAgIGlmKHN1cHBvcnRzVW5rbm93bkVsZW1lbnRzKXtcbiAgICAgICAgICByZXR1cm4gb3duZXJEb2N1bWVudC5jcmVhdGVFbGVtZW50KG5vZGVOYW1lKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWRhdGEpIHtcbiAgICAgICAgICBkYXRhID0gZ2V0RXhwYW5kb0RhdGEob3duZXJEb2N1bWVudCk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIG5vZGU7XG5cbiAgICAgICAgaWYgKGRhdGEuY2FjaGVbbm9kZU5hbWVdKSB7XG4gICAgICAgICAgbm9kZSA9IGRhdGEuY2FjaGVbbm9kZU5hbWVdLmNsb25lTm9kZSgpO1xuICAgICAgICB9IGVsc2UgaWYgKHNhdmVDbG9uZXMudGVzdChub2RlTmFtZSkpIHtcbiAgICAgICAgICBub2RlID0gKGRhdGEuY2FjaGVbbm9kZU5hbWVdID0gZGF0YS5jcmVhdGVFbGVtKG5vZGVOYW1lKSkuY2xvbmVOb2RlKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbm9kZSA9IGRhdGEuY3JlYXRlRWxlbShub2RlTmFtZSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBBdm9pZCBhZGRpbmcgc29tZSBlbGVtZW50cyB0byBmcmFnbWVudHMgaW4gSUUgPCA5IGJlY2F1c2VcbiAgICAgICAgLy8gKiBBdHRyaWJ1dGVzIGxpa2UgYG5hbWVgIG9yIGB0eXBlYCBjYW5ub3QgYmUgc2V0L2NoYW5nZWQgb25jZSBhbiBlbGVtZW50XG4gICAgICAgIC8vICAgaXMgaW5zZXJ0ZWQgaW50byBhIGRvY3VtZW50L2ZyYWdtZW50XG4gICAgICAgIC8vICogTGluayBlbGVtZW50cyB3aXRoIGBzcmNgIGF0dHJpYnV0ZXMgdGhhdCBhcmUgaW5hY2Nlc3NpYmxlLCBhcyB3aXRoXG4gICAgICAgIC8vICAgYSA0MDMgcmVzcG9uc2UsIHdpbGwgY2F1c2UgdGhlIHRhYi93aW5kb3cgdG8gY3Jhc2hcbiAgICAgICAgLy8gKiBTY3JpcHQgZWxlbWVudHMgYXBwZW5kZWQgdG8gZnJhZ21lbnRzIHdpbGwgZXhlY3V0ZSB3aGVuIHRoZWlyIGBzcmNgXG4gICAgICAgIC8vICAgb3IgYHRleHRgIHByb3BlcnR5IGlzIHNldFxuICAgICAgICByZXR1cm4gbm9kZS5jYW5IYXZlQ2hpbGRyZW4gJiYgIXJlU2tpcC50ZXN0KG5vZGVOYW1lKSAmJiAhbm9kZS50YWdVcm4gPyBkYXRhLmZyYWcuYXBwZW5kQ2hpbGQobm9kZSkgOiBub2RlO1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIHJldHVybnMgYSBzaGl2ZWQgRG9jdW1lbnRGcmFnbWVudCBmb3IgdGhlIGdpdmVuIGRvY3VtZW50XG4gICAgICAgKiBAbWVtYmVyT2YgaHRtbDVcbiAgICAgICAqIEBwYXJhbSB7RG9jdW1lbnR9IG93bmVyRG9jdW1lbnQgVGhlIGNvbnRleHQgZG9jdW1lbnQuXG4gICAgICAgKiBAcmV0dXJucyB7T2JqZWN0fSBUaGUgc2hpdmVkIERvY3VtZW50RnJhZ21lbnQuXG4gICAgICAgKi9cbiAgICAgIGZ1bmN0aW9uIGNyZWF0ZURvY3VtZW50RnJhZ21lbnQob3duZXJEb2N1bWVudCwgZGF0YSl7XG4gICAgICAgIGlmICghb3duZXJEb2N1bWVudCkge1xuICAgICAgICAgIG93bmVyRG9jdW1lbnQgPSBkb2N1bWVudDtcbiAgICAgICAgfVxuICAgICAgICBpZihzdXBwb3J0c1Vua25vd25FbGVtZW50cyl7XG4gICAgICAgICAgcmV0dXJuIG93bmVyRG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xuICAgICAgICB9XG4gICAgICAgIGRhdGEgPSBkYXRhIHx8IGdldEV4cGFuZG9EYXRhKG93bmVyRG9jdW1lbnQpO1xuICAgICAgICB2YXIgY2xvbmUgPSBkYXRhLmZyYWcuY2xvbmVOb2RlKCksXG4gICAgICAgICAgaSA9IDAsXG4gICAgICAgICAgZWxlbXMgPSBnZXRFbGVtZW50cygpLFxuICAgICAgICAgIGwgPSBlbGVtcy5sZW5ndGg7XG4gICAgICAgIGZvcig7aTxsO2krKyl7XG4gICAgICAgICAgY2xvbmUuY3JlYXRlRWxlbWVudChlbGVtc1tpXSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNsb25lO1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIFNoaXZzIHRoZSBgY3JlYXRlRWxlbWVudGAgYW5kIGBjcmVhdGVEb2N1bWVudEZyYWdtZW50YCBtZXRob2RzIG9mIHRoZSBkb2N1bWVudC5cbiAgICAgICAqIEBwcml2YXRlXG4gICAgICAgKiBAcGFyYW0ge0RvY3VtZW50fERvY3VtZW50RnJhZ21lbnR9IG93bmVyRG9jdW1lbnQgVGhlIGRvY3VtZW50LlxuICAgICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGEgb2YgdGhlIGRvY3VtZW50LlxuICAgICAgICovXG4gICAgICBmdW5jdGlvbiBzaGl2TWV0aG9kcyhvd25lckRvY3VtZW50LCBkYXRhKSB7XG4gICAgICAgIGlmICghZGF0YS5jYWNoZSkge1xuICAgICAgICAgIGRhdGEuY2FjaGUgPSB7fTtcbiAgICAgICAgICBkYXRhLmNyZWF0ZUVsZW0gPSBvd25lckRvY3VtZW50LmNyZWF0ZUVsZW1lbnQ7XG4gICAgICAgICAgZGF0YS5jcmVhdGVGcmFnID0gb3duZXJEb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50O1xuICAgICAgICAgIGRhdGEuZnJhZyA9IGRhdGEuY3JlYXRlRnJhZygpO1xuICAgICAgICB9XG5cblxuICAgICAgICBvd25lckRvY3VtZW50LmNyZWF0ZUVsZW1lbnQgPSBmdW5jdGlvbihub2RlTmFtZSkge1xuICAgICAgICAgIC8vYWJvcnQgc2hpdlxuICAgICAgICAgIGlmICghaHRtbDUuc2hpdk1ldGhvZHMpIHtcbiAgICAgICAgICAgIHJldHVybiBkYXRhLmNyZWF0ZUVsZW0obm9kZU5hbWUpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gY3JlYXRlRWxlbWVudChub2RlTmFtZSwgb3duZXJEb2N1bWVudCwgZGF0YSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgb3duZXJEb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50ID0gRnVuY3Rpb24oJ2gsZicsICdyZXR1cm4gZnVuY3Rpb24oKXsnICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3ZhciBuPWYuY2xvbmVOb2RlKCksYz1uLmNyZWF0ZUVsZW1lbnQ7JyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdoLnNoaXZNZXRob2RzJiYoJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHVucm9sbCB0aGUgYGNyZWF0ZUVsZW1lbnRgIGNhbGxzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdldEVsZW1lbnRzKCkuam9pbigpLnJlcGxhY2UoL1tcXHdcXC06XSsvZywgZnVuY3Rpb24obm9kZU5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLmNyZWF0ZUVsZW0obm9kZU5hbWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEuZnJhZy5jcmVhdGVFbGVtZW50KG5vZGVOYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJ2MoXCInICsgbm9kZU5hbWUgKyAnXCIpJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkgK1xuICAgICAgICAgICcpO3JldHVybiBufSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKGh0bWw1LCBkYXRhLmZyYWcpO1xuICAgICAgfVxuXG4gICAgICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cblxuICAgICAgLyoqXG4gICAgICAgKiBTaGl2cyB0aGUgZ2l2ZW4gZG9jdW1lbnQuXG4gICAgICAgKiBAbWVtYmVyT2YgaHRtbDVcbiAgICAgICAqIEBwYXJhbSB7RG9jdW1lbnR9IG93bmVyRG9jdW1lbnQgVGhlIGRvY3VtZW50IHRvIHNoaXYuXG4gICAgICAgKiBAcmV0dXJucyB7RG9jdW1lbnR9IFRoZSBzaGl2ZWQgZG9jdW1lbnQuXG4gICAgICAgKi9cbiAgICAgIGZ1bmN0aW9uIHNoaXZEb2N1bWVudChvd25lckRvY3VtZW50KSB7XG4gICAgICAgIGlmICghb3duZXJEb2N1bWVudCkge1xuICAgICAgICAgIG93bmVyRG9jdW1lbnQgPSBkb2N1bWVudDtcbiAgICAgICAgfVxuICAgICAgICB2YXIgZGF0YSA9IGdldEV4cGFuZG9EYXRhKG93bmVyRG9jdW1lbnQpO1xuXG4gICAgICAgIGlmIChodG1sNS5zaGl2Q1NTICYmICFzdXBwb3J0c0h0bWw1U3R5bGVzICYmICFkYXRhLmhhc0NTUykge1xuICAgICAgICAgIGRhdGEuaGFzQ1NTID0gISFhZGRTdHlsZVNoZWV0KG93bmVyRG9jdW1lbnQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29ycmVjdHMgYmxvY2sgZGlzcGxheSBub3QgZGVmaW5lZCBpbiBJRTYvNy84LzlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnYXJ0aWNsZSxhc2lkZSxkaWFsb2csZmlnY2FwdGlvbixmaWd1cmUsZm9vdGVyLGhlYWRlcixoZ3JvdXAsbWFpbixuYXYsc2VjdGlvbntkaXNwbGF5OmJsb2NrfScgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGFkZHMgc3R5bGluZyBub3QgcHJlc2VudCBpbiBJRTYvNy84LzlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnbWFya3tiYWNrZ3JvdW5kOiNGRjA7Y29sb3I6IzAwMH0nICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBoaWRlcyBub24tcmVuZGVyZWQgZWxlbWVudHNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAndGVtcGxhdGV7ZGlzcGxheTpub25lfSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFzdXBwb3J0c1Vua25vd25FbGVtZW50cykge1xuICAgICAgICAgIHNoaXZNZXRob2RzKG93bmVyRG9jdW1lbnQsIGRhdGEpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBvd25lckRvY3VtZW50O1xuICAgICAgfVxuXG4gICAgICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cblxuICAgICAgLyoqXG4gICAgICAgKiBUaGUgYGh0bWw1YCBvYmplY3QgaXMgZXhwb3NlZCBzbyB0aGF0IG1vcmUgZWxlbWVudHMgY2FuIGJlIHNoaXZlZCBhbmRcbiAgICAgICAqIGV4aXN0aW5nIHNoaXZpbmcgY2FuIGJlIGRldGVjdGVkIG9uIGlmcmFtZXMuXG4gICAgICAgKiBAdHlwZSBPYmplY3RcbiAgICAgICAqIEBleGFtcGxlXG4gICAgICAgKlxuICAgICAgICogLy8gb3B0aW9ucyBjYW4gYmUgY2hhbmdlZCBiZWZvcmUgdGhlIHNjcmlwdCBpcyBpbmNsdWRlZFxuICAgICAgICogaHRtbDUgPSB7ICdlbGVtZW50cyc6ICdtYXJrIHNlY3Rpb24nLCAnc2hpdkNTUyc6IGZhbHNlLCAnc2hpdk1ldGhvZHMnOiBmYWxzZSB9O1xuICAgICAgICovXG4gICAgICB2YXIgaHRtbDUgPSB7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEFuIGFycmF5IG9yIHNwYWNlIHNlcGFyYXRlZCBzdHJpbmcgb2Ygbm9kZSBuYW1lcyBvZiB0aGUgZWxlbWVudHMgdG8gc2hpdi5cbiAgICAgICAgICogQG1lbWJlck9mIGh0bWw1XG4gICAgICAgICAqIEB0eXBlIEFycmF5fFN0cmluZ1xuICAgICAgICAgKi9cbiAgICAgICAgJ2VsZW1lbnRzJzogb3B0aW9ucy5lbGVtZW50cyB8fCAnYWJiciBhcnRpY2xlIGFzaWRlIGF1ZGlvIGJkaSBjYW52YXMgZGF0YSBkYXRhbGlzdCBkZXRhaWxzIGRpYWxvZyBmaWdjYXB0aW9uIGZpZ3VyZSBmb290ZXIgaGVhZGVyIGhncm91cCBtYWluIG1hcmsgbWV0ZXIgbmF2IG91dHB1dCBwaWN0dXJlIHByb2dyZXNzIHNlY3Rpb24gc3VtbWFyeSB0ZW1wbGF0ZSB0aW1lIHZpZGVvJyxcblxuICAgICAgICAvKipcbiAgICAgICAgICogY3VycmVudCB2ZXJzaW9uIG9mIGh0bWw1c2hpdlxuICAgICAgICAgKi9cbiAgICAgICAgJ3ZlcnNpb24nOiB2ZXJzaW9uLFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBIGZsYWcgdG8gaW5kaWNhdGUgdGhhdCB0aGUgSFRNTDUgc3R5bGUgc2hlZXQgc2hvdWxkIGJlIGluc2VydGVkLlxuICAgICAgICAgKiBAbWVtYmVyT2YgaHRtbDVcbiAgICAgICAgICogQHR5cGUgQm9vbGVhblxuICAgICAgICAgKi9cbiAgICAgICAgJ3NoaXZDU1MnOiAob3B0aW9ucy5zaGl2Q1NTICE9PSBmYWxzZSksXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIElzIGVxdWFsIHRvIHRydWUgaWYgYSBicm93c2VyIHN1cHBvcnRzIGNyZWF0aW5nIHVua25vd24vSFRNTDUgZWxlbWVudHNcbiAgICAgICAgICogQG1lbWJlck9mIGh0bWw1XG4gICAgICAgICAqIEB0eXBlIGJvb2xlYW5cbiAgICAgICAgICovXG4gICAgICAgICdzdXBwb3J0c1Vua25vd25FbGVtZW50cyc6IHN1cHBvcnRzVW5rbm93bkVsZW1lbnRzLFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBIGZsYWcgdG8gaW5kaWNhdGUgdGhhdCB0aGUgZG9jdW1lbnQncyBgY3JlYXRlRWxlbWVudGAgYW5kIGBjcmVhdGVEb2N1bWVudEZyYWdtZW50YFxuICAgICAgICAgKiBtZXRob2RzIHNob3VsZCBiZSBvdmVyd3JpdHRlbi5cbiAgICAgICAgICogQG1lbWJlck9mIGh0bWw1XG4gICAgICAgICAqIEB0eXBlIEJvb2xlYW5cbiAgICAgICAgICovXG4gICAgICAgICdzaGl2TWV0aG9kcyc6IChvcHRpb25zLnNoaXZNZXRob2RzICE9PSBmYWxzZSksXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEEgc3RyaW5nIHRvIGRlc2NyaWJlIHRoZSB0eXBlIG9mIGBodG1sNWAgb2JqZWN0IChcImRlZmF1bHRcIiBvciBcImRlZmF1bHQgcHJpbnRcIikuXG4gICAgICAgICAqIEBtZW1iZXJPZiBodG1sNVxuICAgICAgICAgKiBAdHlwZSBTdHJpbmdcbiAgICAgICAgICovXG4gICAgICAgICd0eXBlJzogJ2RlZmF1bHQnLFxuXG4gICAgICAgIC8vIHNoaXZzIHRoZSBkb2N1bWVudCBhY2NvcmRpbmcgdG8gdGhlIHNwZWNpZmllZCBgaHRtbDVgIG9iamVjdCBvcHRpb25zXG4gICAgICAgICdzaGl2RG9jdW1lbnQnOiBzaGl2RG9jdW1lbnQsXG5cbiAgICAgICAgLy9jcmVhdGVzIGEgc2hpdmVkIGVsZW1lbnRcbiAgICAgICAgY3JlYXRlRWxlbWVudDogY3JlYXRlRWxlbWVudCxcblxuICAgICAgICAvL2NyZWF0ZXMgYSBzaGl2ZWQgZG9jdW1lbnRGcmFnbWVudFxuICAgICAgICBjcmVhdGVEb2N1bWVudEZyYWdtZW50OiBjcmVhdGVEb2N1bWVudEZyYWdtZW50LFxuXG4gICAgICAgIC8vZXh0ZW5kcyBsaXN0IG9mIGVsZW1lbnRzXG4gICAgICAgIGFkZEVsZW1lbnRzOiBhZGRFbGVtZW50c1xuICAgICAgfTtcblxuICAgICAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cbiAgICAgIC8vIGV4cG9zZSBodG1sNVxuICAgICAgd2luZG93Lmh0bWw1ID0gaHRtbDU7XG5cbiAgICAgIC8vIHNoaXYgdGhlIGRvY3VtZW50XG4gICAgICBzaGl2RG9jdW1lbnQoZG9jdW1lbnQpO1xuXG4gICAgICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gUHJpbnQgU2hpdiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cblxuICAgICAgLyoqIFVzZWQgdG8gZmlsdGVyIG1lZGlhIHR5cGVzICovXG4gICAgICB2YXIgcmVNZWRpYSA9IC9eJHxcXGIoPzphbGx8cHJpbnQpXFxiLztcblxuICAgICAgLyoqIFVzZWQgdG8gbmFtZXNwYWNlIHByaW50YWJsZSBlbGVtZW50cyAqL1xuICAgICAgdmFyIHNoaXZOYW1lc3BhY2UgPSAnaHRtbDVzaGl2JztcblxuICAgICAgLyoqIERldGVjdCB3aGV0aGVyIHRoZSBicm93c2VyIHN1cHBvcnRzIHNoaXZhYmxlIHN0eWxlIHNoZWV0cyAqL1xuICAgICAgdmFyIHN1cHBvcnRzU2hpdmFibGVTaGVldHMgPSAhc3VwcG9ydHNVbmtub3duRWxlbWVudHMgJiYgKGZ1bmN0aW9uKCkge1xuICAgICAgICAvLyBhc3NpZ24gYSBmYWxzZSBuZWdhdGl2ZSBpZiB1bmFibGUgdG8gc2hpdlxuICAgICAgICB2YXIgZG9jRWwgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG4gICAgICAgIHJldHVybiAhKFxuICAgICAgICAgIHR5cGVvZiBkb2N1bWVudC5uYW1lc3BhY2VzID09ICd1bmRlZmluZWQnIHx8XG4gICAgICAgICAgICB0eXBlb2YgZG9jdW1lbnQucGFyZW50V2luZG93ID09ICd1bmRlZmluZWQnIHx8XG4gICAgICAgICAgICB0eXBlb2YgZG9jRWwuYXBwbHlFbGVtZW50ID09ICd1bmRlZmluZWQnIHx8XG4gICAgICAgICAgICB0eXBlb2YgZG9jRWwucmVtb3ZlTm9kZSA9PSAndW5kZWZpbmVkJyB8fFxuICAgICAgICAgICAgdHlwZW9mIHdpbmRvdy5hdHRhY2hFdmVudCA9PSAndW5kZWZpbmVkJ1xuICAgICAgICApO1xuICAgICAgfSgpKTtcblxuICAgICAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cbiAgICAgIC8qKlxuICAgICAgICogV3JhcHMgYWxsIEhUTUw1IGVsZW1lbnRzIGluIHRoZSBnaXZlbiBkb2N1bWVudCB3aXRoIHByaW50YWJsZSBlbGVtZW50cy5cbiAgICAgICAqIChlZy4gdGhlIFwiaGVhZGVyXCIgZWxlbWVudCBpcyB3cmFwcGVkIHdpdGggdGhlIFwiaHRtbDVzaGl2OmhlYWRlclwiIGVsZW1lbnQpXG4gICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICogQHBhcmFtIHtEb2N1bWVudH0gb3duZXJEb2N1bWVudCBUaGUgZG9jdW1lbnQuXG4gICAgICAgKiBAcmV0dXJucyB7QXJyYXl9IEFuIGFycmF5IHdyYXBwZXJzIGFkZGVkLlxuICAgICAgICovXG4gICAgICBmdW5jdGlvbiBhZGRXcmFwcGVycyhvd25lckRvY3VtZW50KSB7XG4gICAgICAgIHZhciBub2RlLFxuICAgICAgICAgIG5vZGVzID0gb3duZXJEb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnKicpLFxuICAgICAgICAgIGluZGV4ID0gbm9kZXMubGVuZ3RoLFxuICAgICAgICAgIHJlRWxlbWVudHMgPSBSZWdFeHAoJ14oPzonICsgZ2V0RWxlbWVudHMoKS5qb2luKCd8JykgKyAnKSQnLCAnaScpLFxuICAgICAgICAgIHJlc3VsdCA9IFtdO1xuXG4gICAgICAgIHdoaWxlIChpbmRleC0tKSB7XG4gICAgICAgICAgbm9kZSA9IG5vZGVzW2luZGV4XTtcbiAgICAgICAgICBpZiAocmVFbGVtZW50cy50ZXN0KG5vZGUubm9kZU5hbWUpKSB7XG4gICAgICAgICAgICByZXN1bHQucHVzaChub2RlLmFwcGx5RWxlbWVudChjcmVhdGVXcmFwcGVyKG5vZGUpKSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogQ3JlYXRlcyBhIHByaW50YWJsZSB3cmFwcGVyIGZvciB0aGUgZ2l2ZW4gZWxlbWVudC5cbiAgICAgICAqIEBwcml2YXRlXG4gICAgICAgKiBAcGFyYW0ge0VsZW1lbnR9IGVsZW1lbnQgVGhlIGVsZW1lbnQuXG4gICAgICAgKiBAcmV0dXJucyB7RWxlbWVudH0gVGhlIHdyYXBwZXIuXG4gICAgICAgKi9cbiAgICAgIGZ1bmN0aW9uIGNyZWF0ZVdyYXBwZXIoZWxlbWVudCkge1xuICAgICAgICB2YXIgbm9kZSxcbiAgICAgICAgICBub2RlcyA9IGVsZW1lbnQuYXR0cmlidXRlcyxcbiAgICAgICAgICBpbmRleCA9IG5vZGVzLmxlbmd0aCxcbiAgICAgICAgICB3cmFwcGVyID0gZWxlbWVudC5vd25lckRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoc2hpdk5hbWVzcGFjZSArICc6JyArIGVsZW1lbnQubm9kZU5hbWUpO1xuXG4gICAgICAgIC8vIGNvcHkgZWxlbWVudCBhdHRyaWJ1dGVzIHRvIHRoZSB3cmFwcGVyXG4gICAgICAgIHdoaWxlIChpbmRleC0tKSB7XG4gICAgICAgICAgbm9kZSA9IG5vZGVzW2luZGV4XTtcbiAgICAgICAgICBub2RlLnNwZWNpZmllZCAmJiB3cmFwcGVyLnNldEF0dHJpYnV0ZShub2RlLm5vZGVOYW1lLCBub2RlLm5vZGVWYWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gY29weSBlbGVtZW50IHN0eWxlcyB0byB0aGUgd3JhcHBlclxuICAgICAgICB3cmFwcGVyLnN0eWxlLmNzc1RleHQgPSBlbGVtZW50LnN0eWxlLmNzc1RleHQ7XG4gICAgICAgIHJldHVybiB3cmFwcGVyO1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIFNoaXZzIHRoZSBnaXZlbiBDU1MgdGV4dC5cbiAgICAgICAqIChlZy4gaGVhZGVye30gYmVjb21lcyBodG1sNXNoaXZcXDpoZWFkZXJ7fSlcbiAgICAgICAqIEBwcml2YXRlXG4gICAgICAgKiBAcGFyYW0ge1N0cmluZ30gY3NzVGV4dCBUaGUgQ1NTIHRleHQgdG8gc2hpdi5cbiAgICAgICAqIEByZXR1cm5zIHtTdHJpbmd9IFRoZSBzaGl2ZWQgQ1NTIHRleHQuXG4gICAgICAgKi9cbiAgICAgIGZ1bmN0aW9uIHNoaXZDc3NUZXh0KGNzc1RleHQpIHtcbiAgICAgICAgdmFyIHBhaXIsXG4gICAgICAgICAgcGFydHMgPSBjc3NUZXh0LnNwbGl0KCd7JyksXG4gICAgICAgICAgaW5kZXggPSBwYXJ0cy5sZW5ndGgsXG4gICAgICAgICAgcmVFbGVtZW50cyA9IFJlZ0V4cCgnKF58W1xcXFxzLD4rfl0pKCcgKyBnZXRFbGVtZW50cygpLmpvaW4oJ3wnKSArICcpKD89W1tcXFxccyw+K34jLjpdfCQpJywgJ2dpJyksXG4gICAgICAgICAgcmVwbGFjZW1lbnQgPSAnJDEnICsgc2hpdk5hbWVzcGFjZSArICdcXFxcOiQyJztcblxuICAgICAgICB3aGlsZSAoaW5kZXgtLSkge1xuICAgICAgICAgIHBhaXIgPSBwYXJ0c1tpbmRleF0gPSBwYXJ0c1tpbmRleF0uc3BsaXQoJ30nKTtcbiAgICAgICAgICBwYWlyW3BhaXIubGVuZ3RoIC0gMV0gPSBwYWlyW3BhaXIubGVuZ3RoIC0gMV0ucmVwbGFjZShyZUVsZW1lbnRzLCByZXBsYWNlbWVudCk7XG4gICAgICAgICAgcGFydHNbaW5kZXhdID0gcGFpci5qb2luKCd9Jyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHBhcnRzLmpvaW4oJ3snKTtcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBSZW1vdmVzIHRoZSBnaXZlbiB3cmFwcGVycywgbGVhdmluZyB0aGUgb3JpZ2luYWwgZWxlbWVudHMuXG4gICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICogQHBhcmFtcyB7QXJyYXl9IHdyYXBwZXJzIEFuIGFycmF5IG9mIHByaW50YWJsZSB3cmFwcGVycy5cbiAgICAgICAqL1xuICAgICAgZnVuY3Rpb24gcmVtb3ZlV3JhcHBlcnMod3JhcHBlcnMpIHtcbiAgICAgICAgdmFyIGluZGV4ID0gd3JhcHBlcnMubGVuZ3RoO1xuICAgICAgICB3aGlsZSAoaW5kZXgtLSkge1xuICAgICAgICAgIHdyYXBwZXJzW2luZGV4XS5yZW1vdmVOb2RlKCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cbiAgICAgIC8qKlxuICAgICAgICogU2hpdnMgdGhlIGdpdmVuIGRvY3VtZW50IGZvciBwcmludC5cbiAgICAgICAqIEBtZW1iZXJPZiBodG1sNVxuICAgICAgICogQHBhcmFtIHtEb2N1bWVudH0gb3duZXJEb2N1bWVudCBUaGUgZG9jdW1lbnQgdG8gc2hpdi5cbiAgICAgICAqIEByZXR1cm5zIHtEb2N1bWVudH0gVGhlIHNoaXZlZCBkb2N1bWVudC5cbiAgICAgICAqL1xuICAgICAgZnVuY3Rpb24gc2hpdlByaW50KG93bmVyRG9jdW1lbnQpIHtcbiAgICAgICAgdmFyIHNoaXZlZFNoZWV0LFxuICAgICAgICAgIHdyYXBwZXJzLFxuICAgICAgICAgIGRhdGEgPSBnZXRFeHBhbmRvRGF0YShvd25lckRvY3VtZW50KSxcbiAgICAgICAgICBuYW1lc3BhY2VzID0gb3duZXJEb2N1bWVudC5uYW1lc3BhY2VzLFxuICAgICAgICAgIG93bmVyV2luZG93ID0gb3duZXJEb2N1bWVudC5wYXJlbnRXaW5kb3c7XG5cbiAgICAgICAgaWYgKCFzdXBwb3J0c1NoaXZhYmxlU2hlZXRzIHx8IG93bmVyRG9jdW1lbnQucHJpbnRTaGl2ZWQpIHtcbiAgICAgICAgICByZXR1cm4gb3duZXJEb2N1bWVudDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIG5hbWVzcGFjZXNbc2hpdk5hbWVzcGFjZV0gPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICBuYW1lc3BhY2VzLmFkZChzaGl2TmFtZXNwYWNlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIHJlbW92ZVNoZWV0KCkge1xuICAgICAgICAgIGNsZWFyVGltZW91dChkYXRhLl9yZW1vdmVTaGVldFRpbWVyKTtcbiAgICAgICAgICBpZiAoc2hpdmVkU2hlZXQpIHtcbiAgICAgICAgICAgIHNoaXZlZFNoZWV0LnJlbW92ZU5vZGUodHJ1ZSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHNoaXZlZFNoZWV0PSBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgb3duZXJXaW5kb3cuYXR0YWNoRXZlbnQoJ29uYmVmb3JlcHJpbnQnLCBmdW5jdGlvbigpIHtcblxuICAgICAgICAgIHJlbW92ZVNoZWV0KCk7XG5cbiAgICAgICAgICB2YXIgaW1wb3J0cyxcbiAgICAgICAgICAgIGxlbmd0aCxcbiAgICAgICAgICAgIHNoZWV0LFxuICAgICAgICAgICAgY29sbGVjdGlvbiA9IG93bmVyRG9jdW1lbnQuc3R5bGVTaGVldHMsXG4gICAgICAgICAgICBjc3NUZXh0ID0gW10sXG4gICAgICAgICAgICBpbmRleCA9IGNvbGxlY3Rpb24ubGVuZ3RoLFxuICAgICAgICAgICAgc2hlZXRzID0gQXJyYXkoaW5kZXgpO1xuXG4gICAgICAgICAgLy8gY29udmVydCBzdHlsZVNoZWV0cyBjb2xsZWN0aW9uIHRvIGFuIGFycmF5XG4gICAgICAgICAgd2hpbGUgKGluZGV4LS0pIHtcbiAgICAgICAgICAgIHNoZWV0c1tpbmRleF0gPSBjb2xsZWN0aW9uW2luZGV4XTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLy8gY29uY2F0IGFsbCBzdHlsZSBzaGVldCBDU1MgdGV4dFxuICAgICAgICAgIHdoaWxlICgoc2hlZXQgPSBzaGVldHMucG9wKCkpKSB7XG4gICAgICAgICAgICAvLyBJRSBkb2VzIG5vdCBlbmZvcmNlIGEgc2FtZSBvcmlnaW4gcG9saWN5IGZvciBleHRlcm5hbCBzdHlsZSBzaGVldHMuLi5cbiAgICAgICAgICAgIC8vIGJ1dCBoYXMgdHJvdWJsZSB3aXRoIHNvbWUgZHluYW1pY2FsbHkgY3JlYXRlZCBzdHlsZXNoZWV0c1xuICAgICAgICAgICAgaWYgKCFzaGVldC5kaXNhYmxlZCAmJiByZU1lZGlhLnRlc3Qoc2hlZXQubWVkaWEpKSB7XG5cbiAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBpbXBvcnRzID0gc2hlZXQuaW1wb3J0cztcbiAgICAgICAgICAgICAgICBsZW5ndGggPSBpbXBvcnRzLmxlbmd0aDtcbiAgICAgICAgICAgICAgfSBjYXRjaChlcil7XG4gICAgICAgICAgICAgICAgbGVuZ3RoID0gMDtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGZvciAoaW5kZXggPSAwOyBpbmRleCA8IGxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgICAgICAgIHNoZWV0cy5wdXNoKGltcG9ydHNbaW5kZXhdKTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY3NzVGV4dC5wdXNoKHNoZWV0LmNzc1RleHQpO1xuICAgICAgICAgICAgICB9IGNhdGNoKGVyKXt9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gd3JhcCBhbGwgSFRNTDUgZWxlbWVudHMgd2l0aCBwcmludGFibGUgZWxlbWVudHMgYW5kIGFkZCB0aGUgc2hpdmVkIHN0eWxlIHNoZWV0XG4gICAgICAgICAgY3NzVGV4dCA9IHNoaXZDc3NUZXh0KGNzc1RleHQucmV2ZXJzZSgpLmpvaW4oJycpKTtcbiAgICAgICAgICB3cmFwcGVycyA9IGFkZFdyYXBwZXJzKG93bmVyRG9jdW1lbnQpO1xuICAgICAgICAgIHNoaXZlZFNoZWV0ID0gYWRkU3R5bGVTaGVldChvd25lckRvY3VtZW50LCBjc3NUZXh0KTtcblxuICAgICAgICB9KTtcblxuICAgICAgICBvd25lcldpbmRvdy5hdHRhY2hFdmVudCgnb25hZnRlcnByaW50JywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgLy8gcmVtb3ZlIHdyYXBwZXJzLCBsZWF2aW5nIHRoZSBvcmlnaW5hbCBlbGVtZW50cywgYW5kIHJlbW92ZSB0aGUgc2hpdmVkIHN0eWxlIHNoZWV0XG4gICAgICAgICAgcmVtb3ZlV3JhcHBlcnMod3JhcHBlcnMpO1xuICAgICAgICAgIGNsZWFyVGltZW91dChkYXRhLl9yZW1vdmVTaGVldFRpbWVyKTtcbiAgICAgICAgICBkYXRhLl9yZW1vdmVTaGVldFRpbWVyID0gc2V0VGltZW91dChyZW1vdmVTaGVldCwgNTAwKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgb3duZXJEb2N1bWVudC5wcmludFNoaXZlZCA9IHRydWU7XG4gICAgICAgIHJldHVybiBvd25lckRvY3VtZW50O1xuICAgICAgfVxuXG4gICAgICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cblxuICAgICAgLy8gZXhwb3NlIEFQSVxuICAgICAgaHRtbDUudHlwZSArPSAnIHByaW50JztcbiAgICAgIGh0bWw1LnNoaXZQcmludCA9IHNoaXZQcmludDtcblxuICAgICAgLy8gc2hpdiBmb3IgcHJpbnRcbiAgICAgIHNoaXZQcmludChkb2N1bWVudCk7XG5cbiAgICAgIGlmKHR5cGVvZiBtb2R1bGUgPT0gJ29iamVjdCcgJiYgbW9kdWxlLmV4cG9ydHMpe1xuICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IGh0bWw1O1xuICAgICAgfVxuXG4gICAgfSh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IHdpbmRvdyA6IHRoaXMsIGRvY3VtZW50KSk7XG4gIH1cblxuICA7XG5cbiAgLyoqXG4gICAqIElmIHRoZSBicm93c2VycyBmb2xsb3cgdGhlIHNwZWMsIHRoZW4gdGhleSB3b3VsZCBleHBvc2UgdmVuZG9yLXNwZWNpZmljIHN0eWxlcyBhczpcbiAgICogICBlbGVtLnN0eWxlLldlYmtpdEJvcmRlclJhZGl1c1xuICAgKiBpbnN0ZWFkIG9mIHNvbWV0aGluZyBsaWtlIHRoZSBmb2xsb3dpbmcgKHdoaWNoIGlzIHRlY2huaWNhbGx5IGluY29ycmVjdCk6XG4gICAqICAgZWxlbS5zdHlsZS53ZWJraXRCb3JkZXJSYWRpdXNcblxuICAgKiBXZWJLaXQgZ2hvc3RzIHRoZWlyIHByb3BlcnRpZXMgaW4gbG93ZXJjYXNlIGJ1dCBPcGVyYSAmIE1veiBkbyBub3QuXG4gICAqIE1pY3Jvc29mdCB1c2VzIGEgbG93ZXJjYXNlIGBtc2AgaW5zdGVhZCBvZiB0aGUgY29ycmVjdCBgTXNgIGluIElFOCtcbiAgICogICBlcmlrLmVhZS5uZXQvYXJjaGl2ZXMvMjAwOC8wMy8xMC8yMS40OC4xMC9cblxuICAgKiBNb3JlIGhlcmU6IGdpdGh1Yi5jb20vTW9kZXJuaXpyL01vZGVybml6ci9pc3N1ZXMvaXNzdWUvMjFcbiAgICpcbiAgICogQGFjY2VzcyBwcml2YXRlXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSBzdHJpbmcgcmVwcmVzZW50aW5nIHRoZSB2ZW5kb3Itc3BlY2lmaWMgc3R5bGUgcHJvcGVydGllc1xuICAgKi9cblxuICB2YXIgb21QcmVmaXhlcyA9ICdNb3ogTyBtcyBXZWJraXQnO1xuICBcblxuICAvKipcbiAgICogTGlzdCBvZiBKYXZhU2NyaXB0IERPTSB2YWx1ZXMgdXNlZCBmb3IgdGVzdHNcbiAgICpcbiAgICogQG1lbWJlcm9mIE1vZGVybml6clxuICAgKiBAbmFtZSBNb2Rlcm5penIuX2RvbVByZWZpeGVzXG4gICAqIEBvcHRpb25OYW1lIE1vZGVybml6ci5fZG9tUHJlZml4ZXNcbiAgICogQG9wdGlvblByb3AgZG9tUHJlZml4ZXNcbiAgICogQGFjY2VzcyBwdWJsaWNcbiAgICogQGV4YW1wbGVcbiAgICpcbiAgICogTW9kZXJuaXpyLl9kb21QcmVmaXhlcyBpcyBleGFjdGx5IHRoZSBzYW1lIGFzIFtfcHJlZml4ZXNdKCNtb2Rlcm5penItX3ByZWZpeGVzKSwgYnV0IHJhdGhlclxuICAgKiB0aGFuIGtlYmFiLWNhc2UgcHJvcGVydGllcywgYWxsIHByb3BlcnRpZXMgYXJlIHRoZWlyIENhcGl0YWxpemVkIHZhcmlhbnRcbiAgICpcbiAgICogYGBganNcbiAgICogTW9kZXJuaXpyLl9kb21QcmVmaXhlcyA9PT0gWyBcIk1velwiLCBcIk9cIiwgXCJtc1wiLCBcIldlYmtpdFwiIF07XG4gICAqIGBgYFxuICAgKi9cblxuICB2YXIgZG9tUHJlZml4ZXMgPSAoTW9kZXJuaXpyUHJvdG8uX2NvbmZpZy51c2VQcmVmaXhlcyA/IG9tUHJlZml4ZXMudG9Mb3dlckNhc2UoKS5zcGxpdCgnICcpIDogW10pO1xuICBNb2Rlcm5penJQcm90by5fZG9tUHJlZml4ZXMgPSBkb21QcmVmaXhlcztcbiAgXG4vKiFcbntcbiAgXCJuYW1lXCI6IFwiQ1NTIFN1cHBvcnRzXCIsXG4gIFwicHJvcGVydHlcIjogXCJzdXBwb3J0c1wiLFxuICBcImNhbml1c2VcIjogXCJjc3MtZmVhdHVyZXF1ZXJpZXNcIixcbiAgXCJ0YWdzXCI6IFtcImNzc1wiXSxcbiAgXCJidWlsZGVyQWxpYXNlc1wiOiBbXCJjc3Nfc3VwcG9ydHNcIl0sXG4gIFwibm90ZXNcIjogW3tcbiAgICBcIm5hbWVcIjogXCJXMyBTcGVjXCIsXG4gICAgXCJocmVmXCI6IFwiaHR0cDovL2Rldi53My5vcmcvY3Nzd2cvY3NzMy1jb25kaXRpb25hbC8jYXQtc3VwcG9ydHNcIlxuICB9LHtcbiAgICBcIm5hbWVcIjogXCJSZWxhdGVkIEdpdGh1YiBJc3N1ZVwiLFxuICAgIFwiaHJlZlwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9Nb2Rlcm5penIvTW9kZXJuaXpyL2lzc3Vlcy82NDhcIlxuICB9LHtcbiAgICBcIm5hbWVcIjogXCJXMyBJbmZvXCIsXG4gICAgXCJocmVmXCI6IFwiaHR0cDovL2Rldi53My5vcmcvY3Nzd2cvY3NzMy1jb25kaXRpb25hbC8jdGhlLWNzc3N1cHBvcnRzcnVsZS1pbnRlcmZhY2VcIlxuICB9XVxufVxuISovXG5cbiAgdmFyIG5ld1N5bnRheCA9ICdDU1MnIGluIHdpbmRvdyAmJiAnc3VwcG9ydHMnIGluIHdpbmRvdy5DU1M7XG4gIHZhciBvbGRTeW50YXggPSAnc3VwcG9ydHNDU1MnIGluIHdpbmRvdztcbiAgTW9kZXJuaXpyLmFkZFRlc3QoJ3N1cHBvcnRzJywgbmV3U3ludGF4IHx8IG9sZFN5bnRheCk7XG5cblxuICB2YXIgY3Nzb21QcmVmaXhlcyA9IChNb2Rlcm5penJQcm90by5fY29uZmlnLnVzZVByZWZpeGVzID8gb21QcmVmaXhlcy5zcGxpdCgnICcpIDogW10pO1xuICBNb2Rlcm5penJQcm90by5fY3Nzb21QcmVmaXhlcyA9IGNzc29tUHJlZml4ZXM7XG4gIFxuXG5cbiAgLyoqXG4gICAqIGNvbnRhaW5zIGNoZWNrcyB0byBzZWUgaWYgYSBzdHJpbmcgY29udGFpbnMgYW5vdGhlciBzdHJpbmdcbiAgICpcbiAgICogQGFjY2VzcyBwcml2YXRlXG4gICAqIEBmdW5jdGlvbiBjb250YWluc1xuICAgKiBAcGFyYW0ge3N0cmluZ30gc3RyIC0gVGhlIHN0cmluZyB3ZSB3YW50IHRvIGNoZWNrIGZvciBzdWJzdHJpbmdzXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBzdWJzdHIgLSBUaGUgc3Vic3RyaW5nIHdlIHdhbnQgdG8gc2VhcmNoIHRoZSBmaXJzdCBzdHJpbmcgZm9yXG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKi9cblxuICBmdW5jdGlvbiBjb250YWlucyhzdHIsIHN1YnN0cikge1xuICAgIHJldHVybiAhIX4oJycgKyBzdHIpLmluZGV4T2Yoc3Vic3RyKTtcbiAgfVxuXG4gIDtcblxuICAvKipcbiAgICogY3JlYXRlRWxlbWVudCBpcyBhIGNvbnZlbmllbmNlIHdyYXBwZXIgYXJvdW5kIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQuIFNpbmNlIHdlXG4gICAqIHVzZSBjcmVhdGVFbGVtZW50IGFsbCBvdmVyIHRoZSBwbGFjZSwgdGhpcyBhbGxvd3MgZm9yIChzbGlnaHRseSkgc21hbGxlciBjb2RlXG4gICAqIGFzIHdlbGwgYXMgYWJzdHJhY3RpbmcgYXdheSBpc3N1ZXMgd2l0aCBjcmVhdGluZyBlbGVtZW50cyBpbiBjb250ZXh0cyBvdGhlciB0aGFuXG4gICAqIEhUTUwgZG9jdW1lbnRzIChlLmcuIFNWRyBkb2N1bWVudHMpLlxuICAgKlxuICAgKiBAYWNjZXNzIHByaXZhdGVcbiAgICogQGZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnRcbiAgICogQHJldHVybnMge0hUTUxFbGVtZW50fFNWR0VsZW1lbnR9IEFuIEhUTUwgb3IgU1ZHIGVsZW1lbnRcbiAgICovXG5cbiAgZnVuY3Rpb24gY3JlYXRlRWxlbWVudCgpIHtcbiAgICBpZiAodHlwZW9mIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIC8vIFRoaXMgaXMgdGhlIGNhc2UgaW4gSUU3LCB3aGVyZSB0aGUgdHlwZSBvZiBjcmVhdGVFbGVtZW50IGlzIFwib2JqZWN0XCIuXG4gICAgICAvLyBGb3IgdGhpcyByZWFzb24sIHdlIGNhbm5vdCBjYWxsIGFwcGx5KCkgYXMgT2JqZWN0IGlzIG5vdCBhIEZ1bmN0aW9uLlxuICAgICAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYXJndW1lbnRzWzBdKTtcbiAgICB9IGVsc2UgaWYgKGlzU1ZHKSB7XG4gICAgICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TLmNhbGwoZG9jdW1lbnQsICdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsIGFyZ3VtZW50c1swXSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50LmFwcGx5KGRvY3VtZW50LCBhcmd1bWVudHMpO1xuICAgIH1cbiAgfVxuXG4gIDtcblxuICAvKipcbiAgICogTW9kZXJuaXpyLmhhc0V2ZW50KCkgZGV0ZWN0cyBzdXBwb3J0IGZvciBhIGdpdmVuIGV2ZW50XG4gICAqXG4gICAqIEBtZW1iZXJvZiBNb2Rlcm5penJcbiAgICogQG5hbWUgTW9kZXJuaXpyLmhhc0V2ZW50XG4gICAqIEBvcHRpb25OYW1lIE1vZGVybml6ci5oYXNFdmVudCgpXG4gICAqIEBvcHRpb25Qcm9wIGhhc0V2ZW50XG4gICAqIEBhY2Nlc3MgcHVibGljXG4gICAqIEBmdW5jdGlvbiBoYXNFdmVudFxuICAgKiBAcGFyYW0gIHtzdHJpbmd8Kn0gZXZlbnROYW1lIC0gdGhlIG5hbWUgb2YgYW4gZXZlbnQgdG8gdGVzdCBmb3IgKGUuZy4gXCJyZXNpemVcIilcbiAgICogQHBhcmFtICB7RWxlbWVudHxzdHJpbmd9IFtlbGVtZW50PUhUTUxEaXZFbGVtZW50XSAtIGlzIHRoZSBlbGVtZW50fGRvY3VtZW50fHdpbmRvd3x0YWdOYW1lIHRvIHRlc3Qgb25cbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqIEBleGFtcGxlXG4gICAqICBgTW9kZXJuaXpyLmhhc0V2ZW50YCBsZXRzIHlvdSBkZXRlcm1pbmUgaWYgdGhlIGJyb3dzZXIgc3VwcG9ydHMgYSBzdXBwbGllZCBldmVudC5cbiAgICogIEJ5IGRlZmF1bHQsIGl0IGRvZXMgdGhpcyBkZXRlY3Rpb24gb24gYSBkaXYgZWxlbWVudFxuICAgKlxuICAgKiBgYGBqc1xuICAgKiAgaGFzRXZlbnQoJ2JsdXInKSAvLyB0cnVlO1xuICAgKiBgYGBcbiAgICpcbiAgICogSG93ZXZlciwgeW91IGFyZSBhYmxlIHRvIGdpdmUgYW4gb2JqZWN0IGFzIGEgc2Vjb25kIGFyZ3VtZW50IHRvIGhhc0V2ZW50IHRvXG4gICAqIGRldGVjdCBhbiBldmVudCBvbiBzb21ldGhpbmcgb3RoZXIgdGhhbiBhIGRpdi5cbiAgICpcbiAgICogYGBganNcbiAgICogIGhhc0V2ZW50KCdkZXZpY2VsaWdodCcsIHdpbmRvdykgLy8gdHJ1ZTtcbiAgICogYGBgXG4gICAqXG4gICAqL1xuXG4gIHZhciBoYXNFdmVudCA9IChmdW5jdGlvbigpIHtcblxuICAgIC8vIERldGVjdCB3aGV0aGVyIGV2ZW50IHN1cHBvcnQgY2FuIGJlIGRldGVjdGVkIHZpYSBgaW5gLiBUZXN0IG9uIGEgRE9NIGVsZW1lbnRcbiAgICAvLyB1c2luZyB0aGUgXCJibHVyXCIgZXZlbnQgYi9jIGl0IHNob3VsZCBhbHdheXMgZXhpc3QuIGJpdC5seS9ldmVudC1kZXRlY3Rpb25cbiAgICB2YXIgbmVlZHNGYWxsYmFjayA9ICEoJ29uYmx1cicgaW4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KTtcblxuICAgIGZ1bmN0aW9uIGlubmVyKGV2ZW50TmFtZSwgZWxlbWVudCkge1xuXG4gICAgICB2YXIgaXNTdXBwb3J0ZWQ7XG4gICAgICBpZiAoIWV2ZW50TmFtZSkgeyByZXR1cm4gZmFsc2U7IH1cbiAgICAgIGlmICghZWxlbWVudCB8fCB0eXBlb2YgZWxlbWVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgZWxlbWVudCA9IGNyZWF0ZUVsZW1lbnQoZWxlbWVudCB8fCAnZGl2Jyk7XG4gICAgICB9XG5cbiAgICAgIC8vIFRlc3RpbmcgdmlhIHRoZSBgaW5gIG9wZXJhdG9yIGlzIHN1ZmZpY2llbnQgZm9yIG1vZGVybiBicm93c2VycyBhbmQgSUUuXG4gICAgICAvLyBXaGVuIHVzaW5nIGBzZXRBdHRyaWJ1dGVgLCBJRSBza2lwcyBcInVubG9hZFwiLCBXZWJLaXQgc2tpcHMgXCJ1bmxvYWRcIiBhbmRcbiAgICAgIC8vIFwicmVzaXplXCIsIHdoZXJlYXMgYGluYCBcImNhdGNoZXNcIiB0aG9zZS5cbiAgICAgIGV2ZW50TmFtZSA9ICdvbicgKyBldmVudE5hbWU7XG4gICAgICBpc1N1cHBvcnRlZCA9IGV2ZW50TmFtZSBpbiBlbGVtZW50O1xuXG4gICAgICAvLyBGYWxsYmFjayB0ZWNobmlxdWUgZm9yIG9sZCBGaXJlZm94IC0gYml0Lmx5L2V2ZW50LWRldGVjdGlvblxuICAgICAgaWYgKCFpc1N1cHBvcnRlZCAmJiBuZWVkc0ZhbGxiYWNrKSB7XG4gICAgICAgIGlmICghZWxlbWVudC5zZXRBdHRyaWJ1dGUpIHtcbiAgICAgICAgICAvLyBTd2l0Y2ggdG8gZ2VuZXJpYyBlbGVtZW50IGlmIGl0IGxhY2tzIGBzZXRBdHRyaWJ1dGVgLlxuICAgICAgICAgIC8vIEl0IGNvdWxkIGJlIHRoZSBgZG9jdW1lbnRgLCBgd2luZG93YCwgb3Igc29tZXRoaW5nIGVsc2UuXG4gICAgICAgICAgZWxlbWVudCA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB9XG5cbiAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoZXZlbnROYW1lLCAnJyk7XG4gICAgICAgIGlzU3VwcG9ydGVkID0gdHlwZW9mIGVsZW1lbnRbZXZlbnROYW1lXSA9PT0gJ2Z1bmN0aW9uJztcblxuICAgICAgICBpZiAoZWxlbWVudFtldmVudE5hbWVdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAvLyBJZiBwcm9wZXJ0eSB3YXMgY3JlYXRlZCwgXCJyZW1vdmUgaXRcIiBieSBzZXR0aW5nIHZhbHVlIHRvIGB1bmRlZmluZWRgLlxuICAgICAgICAgIGVsZW1lbnRbZXZlbnROYW1lXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICBlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShldmVudE5hbWUpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gaXNTdXBwb3J0ZWQ7XG4gICAgfVxuICAgIHJldHVybiBpbm5lcjtcbiAgfSkoKTtcblxuXG4gIE1vZGVybml6clByb3RvLmhhc0V2ZW50ID0gaGFzRXZlbnQ7XG4gIFxuXG4gIC8qKlxuICAgKiBnZXRCb2R5IHJldHVybnMgdGhlIGJvZHkgb2YgYSBkb2N1bWVudCwgb3IgYW4gZWxlbWVudCB0aGF0IGNhbiBzdGFuZCBpbiBmb3JcbiAgICogdGhlIGJvZHkgaWYgYSByZWFsIGJvZHkgZG9lcyBub3QgZXhpc3RcbiAgICpcbiAgICogQGFjY2VzcyBwcml2YXRlXG4gICAqIEBmdW5jdGlvbiBnZXRCb2R5XG4gICAqIEByZXR1cm5zIHtIVE1MRWxlbWVudHxTVkdFbGVtZW50fSBSZXR1cm5zIHRoZSByZWFsIGJvZHkgb2YgYSBkb2N1bWVudCwgb3IgYW5cbiAgICogYXJ0aWZpY2lhbGx5IGNyZWF0ZWQgZWxlbWVudCB0aGF0IHN0YW5kcyBpbiBmb3IgdGhlIGJvZHlcbiAgICovXG5cbiAgZnVuY3Rpb24gZ2V0Qm9keSgpIHtcbiAgICAvLyBBZnRlciBwYWdlIGxvYWQgaW5qZWN0aW5nIGEgZmFrZSBib2R5IGRvZXNuJ3Qgd29yayBzbyBjaGVjayBpZiBib2R5IGV4aXN0c1xuICAgIHZhciBib2R5ID0gZG9jdW1lbnQuYm9keTtcblxuICAgIGlmICghYm9keSkge1xuICAgICAgLy8gQ2FuJ3QgdXNlIHRoZSByZWFsIGJvZHkgY3JlYXRlIGEgZmFrZSBvbmUuXG4gICAgICBib2R5ID0gY3JlYXRlRWxlbWVudChpc1NWRyA/ICdzdmcnIDogJ2JvZHknKTtcbiAgICAgIGJvZHkuZmFrZSA9IHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGJvZHk7XG4gIH1cblxuICA7XG5cbiAgLyoqXG4gICAqIGluamVjdEVsZW1lbnRXaXRoU3R5bGVzIGluamVjdHMgYW4gZWxlbWVudCB3aXRoIHN0eWxlIGVsZW1lbnQgYW5kIHNvbWUgQ1NTIHJ1bGVzXG4gICAqXG4gICAqIEBhY2Nlc3MgcHJpdmF0ZVxuICAgKiBAZnVuY3Rpb24gaW5qZWN0RWxlbWVudFdpdGhTdHlsZXNcbiAgICogQHBhcmFtIHtzdHJpbmd9IHJ1bGUgLSBTdHJpbmcgcmVwcmVzZW50aW5nIGEgY3NzIHJ1bGVcbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gY2FsbGJhY2sgLSBBIGZ1bmN0aW9uIHRoYXQgaXMgdXNlZCB0byB0ZXN0IHRoZSBpbmplY3RlZCBlbGVtZW50XG4gICAqIEBwYXJhbSB7bnVtYmVyfSBbbm9kZXNdIC0gQW4gaW50ZWdlciByZXByZXNlbnRpbmcgdGhlIG51bWJlciBvZiBhZGRpdGlvbmFsIG5vZGVzIHlvdSB3YW50IGluamVjdGVkXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IFt0ZXN0bmFtZXNdIC0gQW4gYXJyYXkgb2Ygc3RyaW5ncyB0aGF0IGFyZSB1c2VkIGFzIGlkcyBmb3IgdGhlIGFkZGl0aW9uYWwgbm9kZXNcbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqL1xuXG4gIGZ1bmN0aW9uIGluamVjdEVsZW1lbnRXaXRoU3R5bGVzKHJ1bGUsIGNhbGxiYWNrLCBub2RlcywgdGVzdG5hbWVzKSB7XG4gICAgdmFyIG1vZCA9ICdtb2Rlcm5penInO1xuICAgIHZhciBzdHlsZTtcbiAgICB2YXIgcmV0O1xuICAgIHZhciBub2RlO1xuICAgIHZhciBkb2NPdmVyZmxvdztcbiAgICB2YXIgZGl2ID0gY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdmFyIGJvZHkgPSBnZXRCb2R5KCk7XG5cbiAgICBpZiAocGFyc2VJbnQobm9kZXMsIDEwKSkge1xuICAgICAgLy8gSW4gb3JkZXIgbm90IHRvIGdpdmUgZmFsc2UgcG9zaXRpdmVzIHdlIGNyZWF0ZSBhIG5vZGUgZm9yIGVhY2ggdGVzdFxuICAgICAgLy8gVGhpcyBhbHNvIGFsbG93cyB0aGUgbWV0aG9kIHRvIHNjYWxlIGZvciB1bnNwZWNpZmllZCB1c2VzXG4gICAgICB3aGlsZSAobm9kZXMtLSkge1xuICAgICAgICBub2RlID0gY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIG5vZGUuaWQgPSB0ZXN0bmFtZXMgPyB0ZXN0bmFtZXNbbm9kZXNdIDogbW9kICsgKG5vZGVzICsgMSk7XG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZChub2RlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBzdHlsZSA9IGNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gICAgc3R5bGUudHlwZSA9ICd0ZXh0L2Nzcyc7XG4gICAgc3R5bGUuaWQgPSAncycgKyBtb2Q7XG5cbiAgICAvLyBJRTYgd2lsbCBmYWxzZSBwb3NpdGl2ZSBvbiBzb21lIHRlc3RzIGR1ZSB0byB0aGUgc3R5bGUgZWxlbWVudCBpbnNpZGUgdGhlIHRlc3QgZGl2IHNvbWVob3cgaW50ZXJmZXJpbmcgb2Zmc2V0SGVpZ2h0LCBzbyBpbnNlcnQgaXQgaW50byBib2R5IG9yIGZha2Vib2R5LlxuICAgIC8vIE9wZXJhIHdpbGwgYWN0IGFsbCBxdWlya3kgd2hlbiBpbmplY3RpbmcgZWxlbWVudHMgaW4gZG9jdW1lbnRFbGVtZW50IHdoZW4gcGFnZSBpcyBzZXJ2ZWQgYXMgeG1sLCBuZWVkcyBmYWtlYm9keSB0b28uICMyNzBcbiAgICAoIWJvZHkuZmFrZSA/IGRpdiA6IGJvZHkpLmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgICBib2R5LmFwcGVuZENoaWxkKGRpdik7XG5cbiAgICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcnVsZTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUocnVsZSkpO1xuICAgIH1cbiAgICBkaXYuaWQgPSBtb2Q7XG5cbiAgICBpZiAoYm9keS5mYWtlKSB7XG4gICAgICAvL2F2b2lkIGNyYXNoaW5nIElFOCwgaWYgYmFja2dyb3VuZCBpbWFnZSBpcyB1c2VkXG4gICAgICBib2R5LnN0eWxlLmJhY2tncm91bmQgPSAnJztcbiAgICAgIC8vU2FmYXJpIDUuMTMvNS4xLjQgT1NYIHN0b3BzIGxvYWRpbmcgaWYgOjotd2Via2l0LXNjcm9sbGJhciBpcyB1c2VkIGFuZCBzY3JvbGxiYXJzIGFyZSB2aXNpYmxlXG4gICAgICBib2R5LnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XG4gICAgICBkb2NPdmVyZmxvdyA9IGRvY0VsZW1lbnQuc3R5bGUub3ZlcmZsb3c7XG4gICAgICBkb2NFbGVtZW50LnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XG4gICAgICBkb2NFbGVtZW50LmFwcGVuZENoaWxkKGJvZHkpO1xuICAgIH1cblxuICAgIHJldCA9IGNhbGxiYWNrKGRpdiwgcnVsZSk7XG4gICAgLy8gSWYgdGhpcyBpcyBkb25lIGFmdGVyIHBhZ2UgbG9hZCB3ZSBkb24ndCB3YW50IHRvIHJlbW92ZSB0aGUgYm9keSBzbyBjaGVjayBpZiBib2R5IGV4aXN0c1xuICAgIGlmIChib2R5LmZha2UpIHtcbiAgICAgIGJvZHkucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChib2R5KTtcbiAgICAgIGRvY0VsZW1lbnQuc3R5bGUub3ZlcmZsb3cgPSBkb2NPdmVyZmxvdztcbiAgICAgIC8vIFRyaWdnZXIgbGF5b3V0IHNvIGtpbmV0aWMgc2Nyb2xsaW5nIGlzbid0IGRpc2FibGVkIGluIGlPUzYrXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgIGRvY0VsZW1lbnQub2Zmc2V0SGVpZ2h0O1xuICAgIH0gZWxzZSB7XG4gICAgICBkaXYucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChkaXYpO1xuICAgIH1cblxuICAgIHJldHVybiAhIXJldDtcblxuICB9XG5cbiAgO1xuXG4gIC8qKlxuICAgKiB0ZXN0U3R5bGVzIGluamVjdHMgYW4gZWxlbWVudCB3aXRoIHN0eWxlIGVsZW1lbnQgYW5kIHNvbWUgQ1NTIHJ1bGVzXG4gICAqXG4gICAqIEBtZW1iZXJvZiBNb2Rlcm5penJcbiAgICogQG5hbWUgTW9kZXJuaXpyLnRlc3RTdHlsZXNcbiAgICogQG9wdGlvbk5hbWUgTW9kZXJuaXpyLnRlc3RTdHlsZXMoKVxuICAgKiBAb3B0aW9uUHJvcCB0ZXN0U3R5bGVzXG4gICAqIEBhY2Nlc3MgcHVibGljXG4gICAqIEBmdW5jdGlvbiB0ZXN0U3R5bGVzXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBydWxlIC0gU3RyaW5nIHJlcHJlc2VudGluZyBhIGNzcyBydWxlXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IGNhbGxiYWNrIC0gQSBmdW5jdGlvbiB0aGF0IGlzIHVzZWQgdG8gdGVzdCB0aGUgaW5qZWN0ZWQgZWxlbWVudFxuICAgKiBAcGFyYW0ge251bWJlcn0gW25vZGVzXSAtIEFuIGludGVnZXIgcmVwcmVzZW50aW5nIHRoZSBudW1iZXIgb2YgYWRkaXRpb25hbCBub2RlcyB5b3Ugd2FudCBpbmplY3RlZFxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBbdGVzdG5hbWVzXSAtIEFuIGFycmF5IG9mIHN0cmluZ3MgdGhhdCBhcmUgdXNlZCBhcyBpZHMgZm9yIHRoZSBhZGRpdGlvbmFsIG5vZGVzXG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKiBAZXhhbXBsZVxuICAgKlxuICAgKiBgTW9kZXJuaXpyLnRlc3RTdHlsZXNgIHRha2VzIGEgQ1NTIHJ1bGUgYW5kIGluamVjdHMgaXQgb250byB0aGUgY3VycmVudCBwYWdlXG4gICAqIGFsb25nIHdpdGggKHBvc3NpYmx5IG11bHRpcGxlKSBET00gZWxlbWVudHMuIFRoaXMgbGV0cyB5b3UgY2hlY2sgZm9yIGZlYXR1cmVzXG4gICAqIHRoYXQgY2FuIG5vdCBiZSBkZXRlY3RlZCBieSBzaW1wbHkgY2hlY2tpbmcgdGhlIFtJRExdKGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvTW96aWxsYS9EZXZlbG9wZXJfZ3VpZGUvSW50ZXJmYWNlX2RldmVsb3BtZW50X2d1aWRlL0lETF9pbnRlcmZhY2VfcnVsZXMpLlxuICAgKlxuICAgKiBgYGBqc1xuICAgKiBNb2Rlcm5penIudGVzdFN0eWxlcygnI21vZGVybml6ciB7IHdpZHRoOiA5cHg7IGNvbG9yOiBwYXBheWF3aGlwOyB9JywgZnVuY3Rpb24oZWxlbSwgcnVsZSkge1xuICAgKiAgIC8vIGVsZW0gaXMgdGhlIGZpcnN0IERPTSBub2RlIGluIHRoZSBwYWdlIChieSBkZWZhdWx0ICNtb2Rlcm5penIpXG4gICAqICAgLy8gcnVsZSBpcyB0aGUgZmlyc3QgYXJndW1lbnQgeW91IHN1cHBsaWVkIC0gdGhlIENTUyBydWxlIGluIHN0cmluZyBmb3JtXG4gICAqXG4gICAqICAgYWRkVGVzdCgnd2lkdGh3b3JrcycsIGVsZW0uc3R5bGUud2lkdGggPT09ICc5cHgnKVxuICAgKiB9KTtcbiAgICogYGBgXG4gICAqXG4gICAqIElmIHlvdXIgdGVzdCByZXF1aXJlcyBtdWx0aXBsZSBub2RlcywgeW91IGNhbiBpbmNsdWRlIGEgdGhpcmQgYXJndW1lbnRcbiAgICogaW5kaWNhdGluZyBob3cgbWFueSBhZGRpdGlvbmFsIGRpdiBlbGVtZW50cyB0byBpbmNsdWRlIG9uIHRoZSBwYWdlLiBUaGVcbiAgICogYWRkaXRpb25hbCBub2RlcyBhcmUgaW5qZWN0ZWQgYXMgY2hpbGRyZW4gb2YgdGhlIGBlbGVtYCB0aGF0IGlzIHJldHVybmVkIGFzXG4gICAqIHRoZSBmaXJzdCBhcmd1bWVudCB0byB0aGUgY2FsbGJhY2suXG4gICAqXG4gICAqIGBgYGpzXG4gICAqIE1vZGVybml6ci50ZXN0U3R5bGVzKCcjbW9kZXJuaXpyIHt3aWR0aDogMXB4fTsgI21vZGVybml6cjIge3dpZHRoOiAycHh9JywgZnVuY3Rpb24oZWxlbSkge1xuICAgKiAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtb2Rlcm5penInKS5zdHlsZS53aWR0aCA9PT0gJzFweCc7IC8vIHRydWVcbiAgICogICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbW9kZXJuaXpyMicpLnN0eWxlLndpZHRoID09PSAnMnB4JzsgLy8gdHJ1ZVxuICAgKiAgIGVsZW0uZmlyc3RDaGlsZCA9PT0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21vZGVybml6cjInKTsgLy8gdHJ1ZVxuICAgKiB9LCAxKTtcbiAgICogYGBgXG4gICAqXG4gICAqIEJ5IGRlZmF1bHQsIGFsbCBvZiB0aGUgYWRkaXRpb25hbCBlbGVtZW50cyBoYXZlIGFuIElEIG9mIGBtb2Rlcm5penJbbl1gLCB3aGVyZVxuICAgKiBgbmAgaXMgaXRzIGluZGV4IChlLmcuIHRoZSBmaXJzdCBhZGRpdGlvbmFsLCBzZWNvbmQgb3ZlcmFsbCBpcyBgI21vZGVybml6cjJgLFxuICAgKiB0aGUgc2Vjb25kIGFkZGl0aW9uYWwgaXMgYCNtb2Rlcm5penIzYCwgZXRjLikuXG4gICAqIElmIHlvdSB3YW50IHRvIGhhdmUgbW9yZSBtZWFuaW5nZnVsIElEcyBmb3IgeW91ciBmdW5jdGlvbiwgeW91IGNhbiBwcm92aWRlXG4gICAqIHRoZW0gYXMgdGhlIGZvdXJ0aCBhcmd1bWVudCwgYXMgYW4gYXJyYXkgb2Ygc3RyaW5nc1xuICAgKlxuICAgKiBgYGBqc1xuICAgKiBNb2Rlcm5penIudGVzdFN0eWxlcygnI2ZvbyB7d2lkdGg6IDEwcHh9OyAjYmFyIHtoZWlnaHQ6IDIwcHh9JywgZnVuY3Rpb24oZWxlbSkge1xuICAgKiAgIGVsZW0uZmlyc3RDaGlsZCA9PT0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZvbycpOyAvLyB0cnVlXG4gICAqICAgZWxlbS5sYXN0Q2hpbGQgPT09IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdiYXInKTsgLy8gdHJ1ZVxuICAgKiB9LCAyLCBbJ2ZvbycsICdiYXInXSk7XG4gICAqIGBgYFxuICAgKlxuICAgKi9cblxuICB2YXIgdGVzdFN0eWxlcyA9IE1vZGVybml6clByb3RvLnRlc3RTdHlsZXMgPSBpbmplY3RFbGVtZW50V2l0aFN0eWxlcztcbiAgXG4vKiFcbntcbiAgXCJuYW1lXCI6IFwiVG91Y2ggRXZlbnRzXCIsXG4gIFwicHJvcGVydHlcIjogXCJ0b3VjaGV2ZW50c1wiLFxuICBcImNhbml1c2VcIiA6IFwidG91Y2hcIixcbiAgXCJ0YWdzXCI6IFtcIm1lZGlhXCIsIFwiYXR0cmlidXRlXCJdLFxuICBcIm5vdGVzXCI6IFt7XG4gICAgXCJuYW1lXCI6IFwiVG91Y2ggRXZlbnRzIHNwZWNcIixcbiAgICBcImhyZWZcIjogXCJodHRwczovL3d3dy53My5vcmcvVFIvMjAxMy9XRC10b3VjaC1ldmVudHMtMjAxMzAxMjQvXCJcbiAgfV0sXG4gIFwid2FybmluZ3NcIjogW1xuICAgIFwiSW5kaWNhdGVzIGlmIHRoZSBicm93c2VyIHN1cHBvcnRzIHRoZSBUb3VjaCBFdmVudHMgc3BlYywgYW5kIGRvZXMgbm90IG5lY2Vzc2FyaWx5IHJlZmxlY3QgYSB0b3VjaHNjcmVlbiBkZXZpY2VcIlxuICBdLFxuICBcImtub3duQnVnc1wiOiBbXG4gICAgXCJGYWxzZS1wb3NpdGl2ZSBvbiBzb21lIGNvbmZpZ3VyYXRpb25zIG9mIE5va2lhIE45MDBcIixcbiAgICBcIkZhbHNlLXBvc2l0aXZlIG9uIHNvbWUgQmxhY2tCZXJyeSA2LjAgYnVpbGRzIOKAkyBodHRwczovL2dpdGh1Yi5jb20vTW9kZXJuaXpyL01vZGVybml6ci9pc3N1ZXMvMzcyI2lzc3VlY29tbWVudC0zMTEyNjk1XCJcbiAgXVxufVxuISovXG4vKiBET0NcbkluZGljYXRlcyBpZiB0aGUgYnJvd3NlciBzdXBwb3J0cyB0aGUgVzNDIFRvdWNoIEV2ZW50cyBBUEkuXG5cblRoaXMgKmRvZXMgbm90KiBuZWNlc3NhcmlseSByZWZsZWN0IGEgdG91Y2hzY3JlZW4gZGV2aWNlOlxuXG4qIE9sZGVyIHRvdWNoc2NyZWVuIGRldmljZXMgb25seSBlbXVsYXRlIG1vdXNlIGV2ZW50c1xuKiBNb2Rlcm4gSUUgdG91Y2ggZGV2aWNlcyBpbXBsZW1lbnQgdGhlIFBvaW50ZXIgRXZlbnRzIEFQSSBpbnN0ZWFkOiB1c2UgYE1vZGVybml6ci5wb2ludGVyZXZlbnRzYCB0byBkZXRlY3Qgc3VwcG9ydCBmb3IgdGhhdFxuKiBTb21lIGJyb3dzZXJzICYgT1Mgc2V0dXBzIG1heSBlbmFibGUgdG91Y2ggQVBJcyB3aGVuIG5vIHRvdWNoc2NyZWVuIGlzIGNvbm5lY3RlZFxuKiBGdXR1cmUgYnJvd3NlcnMgbWF5IGltcGxlbWVudCBvdGhlciBldmVudCBtb2RlbHMgZm9yIHRvdWNoIGludGVyYWN0aW9uc1xuXG5TZWUgdGhpcyBhcnRpY2xlOiBbWW91IENhbid0IERldGVjdCBBIFRvdWNoc2NyZWVuXShodHRwOi8vd3d3LnN0dWNveC5jb20vYmxvZy95b3UtY2FudC1kZXRlY3QtYS10b3VjaHNjcmVlbi8pLlxuXG5JdCdzIHJlY29tbWVuZGVkIHRvIGJpbmQgYm90aCBtb3VzZSBhbmQgdG91Y2gvcG9pbnRlciBldmVudHMgc2ltdWx0YW5lb3VzbHkg4oCTIHNlZSBbdGhpcyBIVE1MNSBSb2NrcyB0dXRvcmlhbF0oaHR0cDovL3d3dy5odG1sNXJvY2tzLmNvbS9lbi9tb2JpbGUvdG91Y2hhbmRtb3VzZS8pLlxuXG5UaGlzIHRlc3Qgd2lsbCBhbHNvIHJldHVybiBgdHJ1ZWAgZm9yIEZpcmVmb3ggNCBNdWx0aXRvdWNoIHN1cHBvcnQuXG4qL1xuXG4gIC8vIENocm9tZSAoZGVza3RvcCkgdXNlZCB0byBsaWUgYWJvdXQgaXRzIHN1cHBvcnQgb24gdGhpcywgYnV0IHRoYXQgaGFzIHNpbmNlIGJlZW4gcmVjdGlmaWVkOiBodHRwOi8vY3JidWcuY29tLzM2NDE1XG4gIE1vZGVybml6ci5hZGRUZXN0KCd0b3VjaGV2ZW50cycsIGZ1bmN0aW9uKCkge1xuICAgIHZhciBib29sO1xuICAgIGlmICgoJ29udG91Y2hzdGFydCcgaW4gd2luZG93KSB8fCB3aW5kb3cuRG9jdW1lbnRUb3VjaCAmJiBkb2N1bWVudCBpbnN0YW5jZW9mIERvY3VtZW50VG91Y2gpIHtcbiAgICAgIGJvb2wgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBpbmNsdWRlIHRoZSAnaGVhcnR6JyBhcyBhIHdheSB0byBoYXZlIGEgbm9uIG1hdGNoaW5nIE1RIHRvIGhlbHAgdGVybWluYXRlIHRoZSBqb2luXG4gICAgICAvLyBodHRwczovL2dpdC5pby92em5GSFxuICAgICAgdmFyIHF1ZXJ5ID0gWydAbWVkaWEgKCcsIHByZWZpeGVzLmpvaW4oJ3RvdWNoLWVuYWJsZWQpLCgnKSwgJ2hlYXJ0eicsICcpJywgJ3sjbW9kZXJuaXpye3RvcDo5cHg7cG9zaXRpb246YWJzb2x1dGV9fSddLmpvaW4oJycpO1xuICAgICAgdGVzdFN0eWxlcyhxdWVyeSwgZnVuY3Rpb24obm9kZSkge1xuICAgICAgICBib29sID0gbm9kZS5vZmZzZXRUb3AgPT09IDk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGJvb2w7XG4gIH0pO1xuXG5cbiAgLyoqXG4gICAqIGZuQmluZCBpcyBhIHN1cGVyIHNtYWxsIFtiaW5kXShodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9GdW5jdGlvbi9iaW5kKSBwb2x5ZmlsbC5cbiAgICpcbiAgICogQGFjY2VzcyBwcml2YXRlXG4gICAqIEBmdW5jdGlvbiBmbkJpbmRcbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gZm4gLSBhIGZ1bmN0aW9uIHlvdSB3YW50IHRvIGNoYW5nZSBgdGhpc2AgcmVmZXJlbmNlIHRvXG4gICAqIEBwYXJhbSB7b2JqZWN0fSB0aGF0IC0gdGhlIGB0aGlzYCB5b3Ugd2FudCB0byBjYWxsIHRoZSBmdW5jdGlvbiB3aXRoXG4gICAqIEByZXR1cm5zIHtmdW5jdGlvbn0gVGhlIHdyYXBwZWQgdmVyc2lvbiBvZiB0aGUgc3VwcGxpZWQgZnVuY3Rpb25cbiAgICovXG5cbiAgZnVuY3Rpb24gZm5CaW5kKGZuLCB0aGF0KSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIGZuLmFwcGx5KHRoYXQsIGFyZ3VtZW50cyk7XG4gICAgfTtcbiAgfVxuXG4gIDtcblxuICAvKipcbiAgICogdGVzdERPTVByb3BzIGlzIGEgZ2VuZXJpYyBET00gcHJvcGVydHkgdGVzdDsgaWYgYSBicm93c2VyIHN1cHBvcnRzXG4gICAqICAgYSBjZXJ0YWluIHByb3BlcnR5LCBpdCB3b24ndCByZXR1cm4gdW5kZWZpbmVkIGZvciBpdC5cbiAgICpcbiAgICogQGFjY2VzcyBwcml2YXRlXG4gICAqIEBmdW5jdGlvbiB0ZXN0RE9NUHJvcHNcbiAgICogQHBhcmFtIHthcnJheS48c3RyaW5nPn0gcHJvcHMgLSBBbiBhcnJheSBvZiBwcm9wZXJ0aWVzIHRvIHRlc3QgZm9yXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBvYmogLSBBbiBvYmplY3Qgb3IgRWxlbWVudCB5b3Ugd2FudCB0byB1c2UgdG8gdGVzdCB0aGUgcGFyYW1ldGVycyBhZ2FpblxuICAgKiBAcGFyYW0ge2Jvb2xlYW58b2JqZWN0fSBlbGVtIC0gQW4gRWxlbWVudCB0byBiaW5kIHRoZSBwcm9wZXJ0eSBsb29rdXAgYWdhaW4uIFVzZSBgZmFsc2VgIHRvIHByZXZlbnQgdGhlIGNoZWNrXG4gICAqIEByZXR1cm5zIHtmYWxzZXwqfSByZXR1cm5zIGZhbHNlIGlmIHRoZSBwcm9wIGlzIHVuc3VwcG9ydGVkLCBvdGhlcndpc2UgdGhlIHZhbHVlIHRoYXQgaXMgc3VwcG9ydGVkXG4gICAqL1xuICBmdW5jdGlvbiB0ZXN0RE9NUHJvcHMocHJvcHMsIG9iaiwgZWxlbSkge1xuICAgIHZhciBpdGVtO1xuXG4gICAgZm9yICh2YXIgaSBpbiBwcm9wcykge1xuICAgICAgaWYgKHByb3BzW2ldIGluIG9iaikge1xuXG4gICAgICAgIC8vIHJldHVybiB0aGUgcHJvcGVydHkgbmFtZSBhcyBhIHN0cmluZ1xuICAgICAgICBpZiAoZWxlbSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICByZXR1cm4gcHJvcHNbaV07XG4gICAgICAgIH1cblxuICAgICAgICBpdGVtID0gb2JqW3Byb3BzW2ldXTtcblxuICAgICAgICAvLyBsZXQncyBiaW5kIGEgZnVuY3Rpb25cbiAgICAgICAgaWYgKGlzKGl0ZW0sICdmdW5jdGlvbicpKSB7XG4gICAgICAgICAgLy8gYmluZCB0byBvYmogdW5sZXNzIG92ZXJyaWRlblxuICAgICAgICAgIHJldHVybiBmbkJpbmQoaXRlbSwgZWxlbSB8fCBvYmopO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gcmV0dXJuIHRoZSB1bmJvdW5kIGZ1bmN0aW9uIG9yIG9iaiBvciB2YWx1ZVxuICAgICAgICByZXR1cm4gaXRlbTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgO1xuXG4gIC8qKlxuICAgKiBjc3NUb0RPTSB0YWtlcyBhIGtlYmFiLWNhc2Ugc3RyaW5nIGFuZCBjb252ZXJ0cyBpdCB0byBjYW1lbENhc2VcbiAgICogZS5nLiBib3gtc2l6aW5nIC0+IGJveFNpemluZ1xuICAgKlxuICAgKiBAYWNjZXNzIHByaXZhdGVcbiAgICogQGZ1bmN0aW9uIGNzc1RvRE9NXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIC0gU3RyaW5nIG5hbWUgb2Yga2ViYWItY2FzZSBwcm9wIHdlIHdhbnQgdG8gY29udmVydFxuICAgKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgY2FtZWxDYXNlIHZlcnNpb24gb2YgdGhlIHN1cHBsaWVkIG5hbWVcbiAgICovXG5cbiAgZnVuY3Rpb24gY3NzVG9ET00obmFtZSkge1xuICAgIHJldHVybiBuYW1lLnJlcGxhY2UoLyhbYS16XSktKFthLXpdKS9nLCBmdW5jdGlvbihzdHIsIG0xLCBtMikge1xuICAgICAgcmV0dXJuIG0xICsgbTIudG9VcHBlckNhc2UoKTtcbiAgICB9KS5yZXBsYWNlKC9eLS8sICcnKTtcbiAgfVxuICA7XG5cbiAgLyoqXG4gICAqIGF0UnVsZSByZXR1cm5zIGEgZ2l2ZW4gQ1NTIHByb3BlcnR5IGF0LXJ1bGUgKGVnIEBrZXlmcmFtZXMpLCBwb3NzaWJseSBpblxuICAgKiBzb21lIHByZWZpeGVkIGZvcm0sIG9yIGZhbHNlLCBpbiB0aGUgY2FzZSBvZiBhbiB1bnN1cHBvcnRlZCBydWxlXG4gICAqXG4gICAqIEBtZW1iZXJvZiBNb2Rlcm5penJcbiAgICogQG5hbWUgTW9kZXJuaXpyLmF0UnVsZVxuICAgKiBAb3B0aW9uTmFtZSBNb2Rlcm5penIuYXRSdWxlKClcbiAgICogQG9wdGlvblByb3AgYXRSdWxlXG4gICAqIEBhY2Nlc3MgcHVibGljXG4gICAqIEBmdW5jdGlvbiBhdFJ1bGVcbiAgICogQHBhcmFtIHtzdHJpbmd9IHByb3AgLSBTdHJpbmcgbmFtZSBvZiB0aGUgQC1ydWxlIHRvIHRlc3QgZm9yXG4gICAqIEByZXR1cm5zIHtzdHJpbmd8Ym9vbGVhbn0gVGhlIHN0cmluZyByZXByZXNlbnRpbmcgdGhlIChwb3NzaWJseSBwcmVmaXhlZClcbiAgICogdmFsaWQgdmVyc2lvbiBvZiB0aGUgQC1ydWxlLCBvciBgZmFsc2VgIHdoZW4gaXQgaXMgdW5zdXBwb3J0ZWQuXG4gICAqIEBleGFtcGxlXG4gICAqIGBgYGpzXG4gICAqICB2YXIga2V5ZnJhbWVzID0gTW9kZXJuaXpyLmF0UnVsZSgnQGtleWZyYW1lcycpO1xuICAgKlxuICAgKiAgaWYgKGtleWZyYW1lcykge1xuICAgKiAgICAvLyBrZXlmcmFtZXMgYXJlIHN1cHBvcnRlZFxuICAgKiAgICAvLyBjb3VsZCBiZSBgQC13ZWJraXQta2V5ZnJhbWVzYCBvciBgQGtleWZyYW1lc2BcbiAgICogIH0gZWxzZSB7XG4gICAqICAgIC8vIGtleWZyYW1lcyA9PT0gYGZhbHNlYFxuICAgKiAgfVxuICAgKiBgYGBcbiAgICpcbiAgICovXG5cbiAgdmFyIGF0UnVsZSA9IGZ1bmN0aW9uKHByb3ApIHtcbiAgICB2YXIgbGVuZ3RoID0gcHJlZml4ZXMubGVuZ3RoO1xuICAgIHZhciBjc3NydWxlID0gd2luZG93LkNTU1J1bGU7XG4gICAgdmFyIHJ1bGU7XG5cbiAgICBpZiAodHlwZW9mIGNzc3J1bGUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIGlmICghcHJvcCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIC8vIHJlbW92ZSBsaXRlcmFsIEAgZnJvbSBiZWdpbm5pbmcgb2YgcHJvdmlkZWQgcHJvcGVydHlcbiAgICBwcm9wID0gcHJvcC5yZXBsYWNlKC9eQC8sICcnKTtcblxuICAgIC8vIENTU1J1bGVzIHVzZSB1bmRlcnNjb3JlcyBpbnN0ZWFkIG9mIGRhc2hlc1xuICAgIHJ1bGUgPSBwcm9wLnJlcGxhY2UoLy0vZywgJ18nKS50b1VwcGVyQ2FzZSgpICsgJ19SVUxFJztcblxuICAgIGlmIChydWxlIGluIGNzc3J1bGUpIHtcbiAgICAgIHJldHVybiAnQCcgKyBwcm9wO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIC8vIHByZWZpeGVzIGdpdmVzIHVzIHNvbWV0aGluZyBsaWtlIC1vLSwgYW5kIHdlIHdhbnQgT19cbiAgICAgIHZhciBwcmVmaXggPSBwcmVmaXhlc1tpXTtcbiAgICAgIHZhciB0aGlzUnVsZSA9IHByZWZpeC50b1VwcGVyQ2FzZSgpICsgJ18nICsgcnVsZTtcblxuICAgICAgaWYgKHRoaXNSdWxlIGluIGNzc3J1bGUpIHtcbiAgICAgICAgcmV0dXJuICdALScgKyBwcmVmaXgudG9Mb3dlckNhc2UoKSArICctJyArIHByb3A7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9O1xuXG4gIE1vZGVybml6clByb3RvLmF0UnVsZSA9IGF0UnVsZTtcblxuICBcblxuICAvKipcbiAgICogQ3JlYXRlIG91ciBcIm1vZGVybml6clwiIGVsZW1lbnQgdGhhdCB3ZSBkbyBtb3N0IGZlYXR1cmUgdGVzdHMgb24uXG4gICAqXG4gICAqIEBhY2Nlc3MgcHJpdmF0ZVxuICAgKi9cblxuICB2YXIgbW9kRWxlbSA9IHtcbiAgICBlbGVtOiBjcmVhdGVFbGVtZW50KCdtb2Rlcm5penInKVxuICB9O1xuXG4gIC8vIENsZWFuIHVwIHRoaXMgZWxlbWVudFxuICBNb2Rlcm5penIuX3EucHVzaChmdW5jdGlvbigpIHtcbiAgICBkZWxldGUgbW9kRWxlbS5lbGVtO1xuICB9KTtcblxuICBcblxuICB2YXIgbVN0eWxlID0ge1xuICAgIHN0eWxlOiBtb2RFbGVtLmVsZW0uc3R5bGVcbiAgfTtcblxuICAvLyBraWxsIHJlZiBmb3IgZ2MsIG11c3QgaGFwcGVuIGJlZm9yZSBtb2QuZWxlbSBpcyByZW1vdmVkLCBzbyB3ZSB1bnNoaWZ0IG9uIHRvXG4gIC8vIHRoZSBmcm9udCBvZiB0aGUgcXVldWUuXG4gIE1vZGVybml6ci5fcS51bnNoaWZ0KGZ1bmN0aW9uKCkge1xuICAgIGRlbGV0ZSBtU3R5bGUuc3R5bGU7XG4gIH0pO1xuXG4gIFxuXG4gIC8qKlxuICAgKiBkb21Ub0NTUyB0YWtlcyBhIGNhbWVsQ2FzZSBzdHJpbmcgYW5kIGNvbnZlcnRzIGl0IHRvIGtlYmFiLWNhc2VcbiAgICogZS5nLiBib3hTaXppbmcgLT4gYm94LXNpemluZ1xuICAgKlxuICAgKiBAYWNjZXNzIHByaXZhdGVcbiAgICogQGZ1bmN0aW9uIGRvbVRvQ1NTXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIC0gU3RyaW5nIG5hbWUgb2YgY2FtZWxDYXNlIHByb3Agd2Ugd2FudCB0byBjb252ZXJ0XG4gICAqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSBrZWJhYi1jYXNlIHZlcnNpb24gb2YgdGhlIHN1cHBsaWVkIG5hbWVcbiAgICovXG5cbiAgZnVuY3Rpb24gZG9tVG9DU1MobmFtZSkge1xuICAgIHJldHVybiBuYW1lLnJlcGxhY2UoLyhbQS1aXSkvZywgZnVuY3Rpb24oc3RyLCBtMSkge1xuICAgICAgcmV0dXJuICctJyArIG0xLnRvTG93ZXJDYXNlKCk7XG4gICAgfSkucmVwbGFjZSgvXm1zLS8sICctbXMtJyk7XG4gIH1cbiAgO1xuXG5cbiAgLyoqXG4gICAqIHdyYXBwZXIgYXJvdW5kIGdldENvbXB1dGVkU3R5bGUsIHRvIGZpeCBpc3N1ZXMgd2l0aCBGaXJlZm94IHJldHVybmluZyBudWxsIHdoZW5cbiAgICogY2FsbGVkIGluc2lkZSBvZiBhIGhpZGRlbiBpZnJhbWVcbiAgICpcbiAgICogQGFjY2VzcyBwcml2YXRlXG4gICAqIEBmdW5jdGlvbiBjb21wdXRlZFN0eWxlXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR8U1ZHRWxlbWVudH0gLSBUaGUgZWxlbWVudCB3ZSB3YW50IHRvIGZpbmQgdGhlIGNvbXB1dGVkIHN0eWxlcyBvZlxuICAgKiBAcGFyYW0ge3N0cmluZ3xudWxsfSBbcHNldWRvU2VsZWN0b3JdLSBBbiBvcHRpb25hbCBwc2V1ZG8gZWxlbWVudCBzZWxlY3RvciAoZS5nLiA6YmVmb3JlKSwgb2YgbnVsbCBpZiBub25lXG4gICAqIEByZXR1cm5zIHtDU1NTdHlsZURlY2xhcmF0aW9ufVxuICAgKi9cblxuICBmdW5jdGlvbiBjb21wdXRlZFN0eWxlKGVsZW0sIHBzZXVkbywgcHJvcCkge1xuICAgIHZhciByZXN1bHQ7XG5cbiAgICBpZiAoJ2dldENvbXB1dGVkU3R5bGUnIGluIHdpbmRvdykge1xuICAgICAgcmVzdWx0ID0gZ2V0Q29tcHV0ZWRTdHlsZS5jYWxsKHdpbmRvdywgZWxlbSwgcHNldWRvKTtcbiAgICAgIHZhciBjb25zb2xlID0gd2luZG93LmNvbnNvbGU7XG5cbiAgICAgIGlmIChyZXN1bHQgIT09IG51bGwpIHtcbiAgICAgICAgaWYgKHByb3ApIHtcbiAgICAgICAgICByZXN1bHQgPSByZXN1bHQuZ2V0UHJvcGVydHlWYWx1ZShwcm9wKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKGNvbnNvbGUpIHtcbiAgICAgICAgICB2YXIgbWV0aG9kID0gY29uc29sZS5lcnJvciA/ICdlcnJvcicgOiAnbG9nJztcbiAgICAgICAgICBjb25zb2xlW21ldGhvZF0uY2FsbChjb25zb2xlLCAnZ2V0Q29tcHV0ZWRTdHlsZSByZXR1cm5pbmcgbnVsbCwgaXRzIHBvc3NpYmxlIG1vZGVybml6ciB0ZXN0IHJlc3VsdHMgYXJlIGluYWNjdXJhdGUnKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHQgPSAhcHNldWRvICYmIGVsZW0uY3VycmVudFN0eWxlICYmIGVsZW0uY3VycmVudFN0eWxlW3Byb3BdO1xuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICA7XG5cbiAgLyoqXG4gICAqIG5hdGl2ZVRlc3RQcm9wcyBhbGxvd3MgZm9yIHVzIHRvIHVzZSBuYXRpdmUgZmVhdHVyZSBkZXRlY3Rpb24gZnVuY3Rpb25hbGl0eSBpZiBhdmFpbGFibGUuXG4gICAqIHNvbWUgcHJlZml4ZWQgZm9ybSwgb3IgZmFsc2UsIGluIHRoZSBjYXNlIG9mIGFuIHVuc3VwcG9ydGVkIHJ1bGVcbiAgICpcbiAgICogQGFjY2VzcyBwcml2YXRlXG4gICAqIEBmdW5jdGlvbiBuYXRpdmVUZXN0UHJvcHNcbiAgICogQHBhcmFtIHthcnJheX0gcHJvcHMgLSBBbiBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lc1xuICAgKiBAcGFyYW0ge3N0cmluZ30gdmFsdWUgLSBBIHN0cmluZyByZXByZXNlbnRpbmcgdGhlIHZhbHVlIHdlIHdhbnQgdG8gY2hlY2sgdmlhIEBzdXBwb3J0c1xuICAgKiBAcmV0dXJucyB7Ym9vbGVhbnx1bmRlZmluZWR9IEEgYm9vbGVhbiB3aGVuIEBzdXBwb3J0cyBleGlzdHMsIHVuZGVmaW5lZCBvdGhlcndpc2VcbiAgICovXG5cbiAgLy8gQWNjZXB0cyBhIGxpc3Qgb2YgcHJvcGVydHkgbmFtZXMgYW5kIGEgc2luZ2xlIHZhbHVlXG4gIC8vIFJldHVybnMgYHVuZGVmaW5lZGAgaWYgbmF0aXZlIGRldGVjdGlvbiBub3QgYXZhaWxhYmxlXG4gIGZ1bmN0aW9uIG5hdGl2ZVRlc3RQcm9wcyhwcm9wcywgdmFsdWUpIHtcbiAgICB2YXIgaSA9IHByb3BzLmxlbmd0aDtcbiAgICAvLyBTdGFydCB3aXRoIHRoZSBKUyBBUEk6IGh0dHA6Ly93d3cudzMub3JnL1RSL2NzczMtY29uZGl0aW9uYWwvI3RoZS1jc3MtaW50ZXJmYWNlXG4gICAgaWYgKCdDU1MnIGluIHdpbmRvdyAmJiAnc3VwcG9ydHMnIGluIHdpbmRvdy5DU1MpIHtcbiAgICAgIC8vIFRyeSBldmVyeSBwcmVmaXhlZCB2YXJpYW50IG9mIHRoZSBwcm9wZXJ0eVxuICAgICAgd2hpbGUgKGktLSkge1xuICAgICAgICBpZiAod2luZG93LkNTUy5zdXBwb3J0cyhkb21Ub0NTUyhwcm9wc1tpXSksIHZhbHVlKSkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIC8vIE90aGVyd2lzZSBmYWxsIGJhY2sgdG8gYXQtcnVsZSAoZm9yIE9wZXJhIDEyLngpXG4gICAgZWxzZSBpZiAoJ0NTU1N1cHBvcnRzUnVsZScgaW4gd2luZG93KSB7XG4gICAgICAvLyBCdWlsZCBhIGNvbmRpdGlvbiBzdHJpbmcgZm9yIGV2ZXJ5IHByZWZpeGVkIHZhcmlhbnRcbiAgICAgIHZhciBjb25kaXRpb25UZXh0ID0gW107XG4gICAgICB3aGlsZSAoaS0tKSB7XG4gICAgICAgIGNvbmRpdGlvblRleHQucHVzaCgnKCcgKyBkb21Ub0NTUyhwcm9wc1tpXSkgKyAnOicgKyB2YWx1ZSArICcpJyk7XG4gICAgICB9XG4gICAgICBjb25kaXRpb25UZXh0ID0gY29uZGl0aW9uVGV4dC5qb2luKCcgb3IgJyk7XG4gICAgICByZXR1cm4gaW5qZWN0RWxlbWVudFdpdGhTdHlsZXMoJ0BzdXBwb3J0cyAoJyArIGNvbmRpdGlvblRleHQgKyAnKSB7ICNtb2Rlcm5penIgeyBwb3NpdGlvbjogYWJzb2x1dGU7IH0gfScsIGZ1bmN0aW9uKG5vZGUpIHtcbiAgICAgICAgcmV0dXJuIGNvbXB1dGVkU3R5bGUobm9kZSwgbnVsbCwgJ3Bvc2l0aW9uJykgPT0gJ2Fic29sdXRlJztcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG4gIDtcblxuICAvLyB0ZXN0UHJvcHMgaXMgYSBnZW5lcmljIENTUyAvIERPTSBwcm9wZXJ0eSB0ZXN0LlxuXG4gIC8vIEluIHRlc3Rpbmcgc3VwcG9ydCBmb3IgYSBnaXZlbiBDU1MgcHJvcGVydHksIGl0J3MgbGVnaXQgdG8gdGVzdDpcbiAgLy8gICAgYGVsZW0uc3R5bGVbc3R5bGVOYW1lXSAhPT0gdW5kZWZpbmVkYFxuICAvLyBJZiB0aGUgcHJvcGVydHkgaXMgc3VwcG9ydGVkIGl0IHdpbGwgcmV0dXJuIGFuIGVtcHR5IHN0cmluZyxcbiAgLy8gaWYgdW5zdXBwb3J0ZWQgaXQgd2lsbCByZXR1cm4gdW5kZWZpbmVkLlxuXG4gIC8vIFdlJ2xsIHRha2UgYWR2YW50YWdlIG9mIHRoaXMgcXVpY2sgdGVzdCBhbmQgc2tpcCBzZXR0aW5nIGEgc3R5bGVcbiAgLy8gb24gb3VyIG1vZGVybml6ciBlbGVtZW50LCBidXQgaW5zdGVhZCBqdXN0IHRlc3RpbmcgdW5kZWZpbmVkIHZzXG4gIC8vIGVtcHR5IHN0cmluZy5cblxuICAvLyBQcm9wZXJ0eSBuYW1lcyBjYW4gYmUgcHJvdmlkZWQgaW4gZWl0aGVyIGNhbWVsQ2FzZSBvciBrZWJhYi1jYXNlLlxuXG4gIGZ1bmN0aW9uIHRlc3RQcm9wcyhwcm9wcywgcHJlZml4ZWQsIHZhbHVlLCBza2lwVmFsdWVUZXN0KSB7XG4gICAgc2tpcFZhbHVlVGVzdCA9IGlzKHNraXBWYWx1ZVRlc3QsICd1bmRlZmluZWQnKSA/IGZhbHNlIDogc2tpcFZhbHVlVGVzdDtcblxuICAgIC8vIFRyeSBuYXRpdmUgZGV0ZWN0IGZpcnN0XG4gICAgaWYgKCFpcyh2YWx1ZSwgJ3VuZGVmaW5lZCcpKSB7XG4gICAgICB2YXIgcmVzdWx0ID0gbmF0aXZlVGVzdFByb3BzKHByb3BzLCB2YWx1ZSk7XG4gICAgICBpZiAoIWlzKHJlc3VsdCwgJ3VuZGVmaW5lZCcpKSB7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gT3RoZXJ3aXNlIGRvIGl0IHByb3Blcmx5XG4gICAgdmFyIGFmdGVySW5pdCwgaSwgcHJvcHNMZW5ndGgsIHByb3AsIGJlZm9yZTtcblxuICAgIC8vIElmIHdlIGRvbid0IGhhdmUgYSBzdHlsZSBlbGVtZW50LCB0aGF0IG1lYW5zIHdlJ3JlIHJ1bm5pbmcgYXN5bmMgb3IgYWZ0ZXJcbiAgICAvLyB0aGUgY29yZSB0ZXN0cywgc28gd2UnbGwgbmVlZCB0byBjcmVhdGUgb3VyIG93biBlbGVtZW50cyB0byB1c2VcblxuICAgIC8vIGluc2lkZSBvZiBhbiBTVkcgZWxlbWVudCwgaW4gY2VydGFpbiBicm93c2VycywgdGhlIGBzdHlsZWAgZWxlbWVudCBpcyBvbmx5XG4gICAgLy8gZGVmaW5lZCBmb3IgdmFsaWQgdGFncy4gVGhlcmVmb3JlLCBpZiBgbW9kZXJuaXpyYCBkb2VzIG5vdCBoYXZlIG9uZSwgd2VcbiAgICAvLyBmYWxsIGJhY2sgdG8gYSBsZXNzIHVzZWQgZWxlbWVudCBhbmQgaG9wZSBmb3IgdGhlIGJlc3QuXG4gICAgLy8gZm9yIHN0cmljdCBYSFRNTCBicm93c2VycyB0aGUgaGFyZGx5IHVzZWQgc2FtcCBlbGVtZW50IGlzIHVzZWRcbiAgICB2YXIgZWxlbXMgPSBbJ21vZGVybml6cicsICd0c3BhbicsICdzYW1wJ107XG4gICAgd2hpbGUgKCFtU3R5bGUuc3R5bGUgJiYgZWxlbXMubGVuZ3RoKSB7XG4gICAgICBhZnRlckluaXQgPSB0cnVlO1xuICAgICAgbVN0eWxlLm1vZEVsZW0gPSBjcmVhdGVFbGVtZW50KGVsZW1zLnNoaWZ0KCkpO1xuICAgICAgbVN0eWxlLnN0eWxlID0gbVN0eWxlLm1vZEVsZW0uc3R5bGU7XG4gICAgfVxuXG4gICAgLy8gRGVsZXRlIHRoZSBvYmplY3RzIGlmIHdlIGNyZWF0ZWQgdGhlbS5cbiAgICBmdW5jdGlvbiBjbGVhbkVsZW1zKCkge1xuICAgICAgaWYgKGFmdGVySW5pdCkge1xuICAgICAgICBkZWxldGUgbVN0eWxlLnN0eWxlO1xuICAgICAgICBkZWxldGUgbVN0eWxlLm1vZEVsZW07XG4gICAgICB9XG4gICAgfVxuXG4gICAgcHJvcHNMZW5ndGggPSBwcm9wcy5sZW5ndGg7XG4gICAgZm9yIChpID0gMDsgaSA8IHByb3BzTGVuZ3RoOyBpKyspIHtcbiAgICAgIHByb3AgPSBwcm9wc1tpXTtcbiAgICAgIGJlZm9yZSA9IG1TdHlsZS5zdHlsZVtwcm9wXTtcblxuICAgICAgaWYgKGNvbnRhaW5zKHByb3AsICctJykpIHtcbiAgICAgICAgcHJvcCA9IGNzc1RvRE9NKHByb3ApO1xuICAgICAgfVxuXG4gICAgICBpZiAobVN0eWxlLnN0eWxlW3Byb3BdICE9PSB1bmRlZmluZWQpIHtcblxuICAgICAgICAvLyBJZiB2YWx1ZSB0byB0ZXN0IGhhcyBiZWVuIHBhc3NlZCBpbiwgZG8gYSBzZXQtYW5kLWNoZWNrIHRlc3QuXG4gICAgICAgIC8vIDAgKGludGVnZXIpIGlzIGEgdmFsaWQgcHJvcGVydHkgdmFsdWUsIHNvIGNoZWNrIHRoYXQgYHZhbHVlYCBpc24ndFxuICAgICAgICAvLyB1bmRlZmluZWQsIHJhdGhlciB0aGFuIGp1c3QgY2hlY2tpbmcgaXQncyB0cnV0aHkuXG4gICAgICAgIGlmICghc2tpcFZhbHVlVGVzdCAmJiAhaXModmFsdWUsICd1bmRlZmluZWQnKSkge1xuXG4gICAgICAgICAgLy8gTmVlZHMgYSB0cnkgY2F0Y2ggYmxvY2sgYmVjYXVzZSBvZiBvbGQgSUUuIFRoaXMgaXMgc2xvdywgYnV0IHdpbGxcbiAgICAgICAgICAvLyBiZSBhdm9pZGVkIGluIG1vc3QgY2FzZXMgYmVjYXVzZSBgc2tpcFZhbHVlVGVzdGAgd2lsbCBiZSB1c2VkLlxuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBtU3R5bGUuc3R5bGVbcHJvcF0gPSB2YWx1ZTtcbiAgICAgICAgICB9IGNhdGNoIChlKSB7fVxuXG4gICAgICAgICAgLy8gSWYgdGhlIHByb3BlcnR5IHZhbHVlIGhhcyBjaGFuZ2VkLCB3ZSBhc3N1bWUgdGhlIHZhbHVlIHVzZWQgaXNcbiAgICAgICAgICAvLyBzdXBwb3J0ZWQuIElmIGB2YWx1ZWAgaXMgZW1wdHkgc3RyaW5nLCBpdCdsbCBmYWlsIGhlcmUgKGJlY2F1c2VcbiAgICAgICAgICAvLyBpdCBoYXNuJ3QgY2hhbmdlZCksIHdoaWNoIG1hdGNoZXMgaG93IGJyb3dzZXJzIGhhdmUgaW1wbGVtZW50ZWRcbiAgICAgICAgICAvLyBDU1Muc3VwcG9ydHMoKVxuICAgICAgICAgIGlmIChtU3R5bGUuc3R5bGVbcHJvcF0gIT0gYmVmb3JlKSB7XG4gICAgICAgICAgICBjbGVhbkVsZW1zKCk7XG4gICAgICAgICAgICByZXR1cm4gcHJlZml4ZWQgPT0gJ3BmeCcgPyBwcm9wIDogdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gT3RoZXJ3aXNlIGp1c3QgcmV0dXJuIHRydWUsIG9yIHRoZSBwcm9wZXJ0eSBuYW1lIGlmIHRoaXMgaXMgYVxuICAgICAgICAvLyBgcHJlZml4ZWQoKWAgY2FsbFxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBjbGVhbkVsZW1zKCk7XG4gICAgICAgICAgcmV0dXJuIHByZWZpeGVkID09ICdwZngnID8gcHJvcCA6IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgY2xlYW5FbGVtcygpO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIDtcblxuICAvKipcbiAgICogdGVzdFByb3AoKSBpbnZlc3RpZ2F0ZXMgd2hldGhlciBhIGdpdmVuIHN0eWxlIHByb3BlcnR5IGlzIHJlY29nbml6ZWRcbiAgICogUHJvcGVydHkgbmFtZXMgY2FuIGJlIHByb3ZpZGVkIGluIGVpdGhlciBjYW1lbENhc2Ugb3Iga2ViYWItY2FzZS5cbiAgICpcbiAgICogQG1lbWJlcm9mIE1vZGVybml6clxuICAgKiBAbmFtZSBNb2Rlcm5penIudGVzdFByb3BcbiAgICogQGFjY2VzcyBwdWJsaWNcbiAgICogQG9wdGlvbk5hbWUgTW9kZXJuaXpyLnRlc3RQcm9wKClcbiAgICogQG9wdGlvblByb3AgdGVzdFByb3BcbiAgICogQGZ1bmN0aW9uIHRlc3RQcm9wXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwcm9wIC0gTmFtZSBvZiB0aGUgQ1NTIHByb3BlcnR5IHRvIGNoZWNrXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbdmFsdWVdIC0gTmFtZSBvZiB0aGUgQ1NTIHZhbHVlIHRvIGNoZWNrXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW3VzZVZhbHVlXSAtIFdoZXRoZXIgb3Igbm90IHRvIGNoZWNrIHRoZSB2YWx1ZSBpZiBAc3VwcG9ydHMgaXNuJ3Qgc3VwcG9ydGVkXG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKiBAZXhhbXBsZVxuICAgKlxuICAgKiBKdXN0IGxpa2UgW3Rlc3RBbGxQcm9wc10oI21vZGVybml6ci10ZXN0YWxscHJvcHMpLCBvbmx5IGl0IGRvZXMgbm90IGNoZWNrIGFueSB2ZW5kb3IgcHJlZml4ZWRcbiAgICogdmVyc2lvbiBvZiB0aGUgc3RyaW5nLlxuICAgKlxuICAgKiBOb3RlIHRoYXQgdGhlIHByb3BlcnR5IG5hbWUgbXVzdCBiZSBwcm92aWRlZCBpbiBjYW1lbENhc2UgKGUuZy4gYm94U2l6aW5nIG5vdCBib3gtc2l6aW5nKVxuICAgKlxuICAgKiBgYGBqc1xuICAgKiBNb2Rlcm5penIudGVzdFByb3AoJ3BvaW50ZXJFdmVudHMnKSAgLy8gdHJ1ZVxuICAgKiBgYGBcbiAgICpcbiAgICogWW91IGNhbiBhbHNvIHByb3ZpZGUgYSB2YWx1ZSBhcyBhbiBvcHRpb25hbCBzZWNvbmQgYXJndW1lbnQgdG8gY2hlY2sgaWYgYVxuICAgKiBzcGVjaWZpYyB2YWx1ZSBpcyBzdXBwb3J0ZWRcbiAgICpcbiAgICogYGBganNcbiAgICogTW9kZXJuaXpyLnRlc3RQcm9wKCdwb2ludGVyRXZlbnRzJywgJ25vbmUnKSAvLyB0cnVlXG4gICAqIE1vZGVybml6ci50ZXN0UHJvcCgncG9pbnRlckV2ZW50cycsICdwZW5ndWluJykgLy8gZmFsc2VcbiAgICogYGBgXG4gICAqL1xuXG4gIHZhciB0ZXN0UHJvcCA9IE1vZGVybml6clByb3RvLnRlc3RQcm9wID0gZnVuY3Rpb24ocHJvcCwgdmFsdWUsIHVzZVZhbHVlKSB7XG4gICAgcmV0dXJuIHRlc3RQcm9wcyhbcHJvcF0sIHVuZGVmaW5lZCwgdmFsdWUsIHVzZVZhbHVlKTtcbiAgfTtcbiAgXG5cbiAgLyoqXG4gICAqIHRlc3RQcm9wc0FsbCB0ZXN0cyBhIGxpc3Qgb2YgRE9NIHByb3BlcnRpZXMgd2Ugd2FudCB0byBjaGVjayBhZ2FpbnN0LlxuICAgKiBXZSBzcGVjaWZ5IGxpdGVyYWxseSBBTEwgcG9zc2libGUgKGtub3duIGFuZC9vciBsaWtlbHkpIHByb3BlcnRpZXMgb25cbiAgICogdGhlIGVsZW1lbnQgaW5jbHVkaW5nIHRoZSBub24tdmVuZG9yIHByZWZpeGVkIG9uZSwgZm9yIGZvcndhcmQtXG4gICAqIGNvbXBhdGliaWxpdHkuXG4gICAqXG4gICAqIEBhY2Nlc3MgcHJpdmF0ZVxuICAgKiBAZnVuY3Rpb24gdGVzdFByb3BzQWxsXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwcm9wIC0gQSBzdHJpbmcgb2YgdGhlIHByb3BlcnR5IHRvIHRlc3QgZm9yXG4gICAqIEBwYXJhbSB7c3RyaW5nfG9iamVjdH0gW3ByZWZpeGVkXSAtIEFuIG9iamVjdCB0byBjaGVjayB0aGUgcHJlZml4ZWQgcHJvcGVydGllcyBvbi4gVXNlIGEgc3RyaW5nIHRvIHNraXBcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudHxTVkdFbGVtZW50fSBbZWxlbV0gLSBBbiBlbGVtZW50IHVzZWQgdG8gdGVzdCB0aGUgcHJvcGVydHkgYW5kIHZhbHVlIGFnYWluc3RcbiAgICogQHBhcmFtIHtzdHJpbmd9IFt2YWx1ZV0gLSBBIHN0cmluZyBvZiBhIGNzcyB2YWx1ZVxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtza2lwVmFsdWVUZXN0XSAtIEFuIGJvb2xlYW4gcmVwcmVzZW50aW5nIGlmIHlvdSB3YW50IHRvIHRlc3QgaWYgdmFsdWUgc3RpY2tzIHdoZW4gc2V0XG4gICAqIEByZXR1cm5zIHtmYWxzZXxzdHJpbmd9IHJldHVybnMgdGhlIHN0cmluZyB2ZXJzaW9uIG9mIHRoZSBwcm9wZXJ0eSwgb3IgZmFsc2UgaWYgaXQgaXMgdW5zdXBwb3J0ZWRcbiAgICovXG4gIGZ1bmN0aW9uIHRlc3RQcm9wc0FsbChwcm9wLCBwcmVmaXhlZCwgZWxlbSwgdmFsdWUsIHNraXBWYWx1ZVRlc3QpIHtcblxuICAgIHZhciB1Y1Byb3AgPSBwcm9wLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgcHJvcC5zbGljZSgxKSxcbiAgICAgIHByb3BzID0gKHByb3AgKyAnICcgKyBjc3NvbVByZWZpeGVzLmpvaW4odWNQcm9wICsgJyAnKSArIHVjUHJvcCkuc3BsaXQoJyAnKTtcblxuICAgIC8vIGRpZCB0aGV5IGNhbGwgLnByZWZpeGVkKCdib3hTaXppbmcnKSBvciBhcmUgd2UganVzdCB0ZXN0aW5nIGEgcHJvcD9cbiAgICBpZiAoaXMocHJlZml4ZWQsICdzdHJpbmcnKSB8fCBpcyhwcmVmaXhlZCwgJ3VuZGVmaW5lZCcpKSB7XG4gICAgICByZXR1cm4gdGVzdFByb3BzKHByb3BzLCBwcmVmaXhlZCwgdmFsdWUsIHNraXBWYWx1ZVRlc3QpO1xuXG4gICAgICAvLyBvdGhlcndpc2UsIHRoZXkgY2FsbGVkIC5wcmVmaXhlZCgncmVxdWVzdEFuaW1hdGlvbkZyYW1lJywgd2luZG93WywgZWxlbV0pXG4gICAgfSBlbHNlIHtcbiAgICAgIHByb3BzID0gKHByb3AgKyAnICcgKyAoZG9tUHJlZml4ZXMpLmpvaW4odWNQcm9wICsgJyAnKSArIHVjUHJvcCkuc3BsaXQoJyAnKTtcbiAgICAgIHJldHVybiB0ZXN0RE9NUHJvcHMocHJvcHMsIHByZWZpeGVkLCBlbGVtKTtcbiAgICB9XG4gIH1cblxuICAvLyBNb2Rlcm5penIudGVzdEFsbFByb3BzKCkgaW52ZXN0aWdhdGVzIHdoZXRoZXIgYSBnaXZlbiBzdHlsZSBwcm9wZXJ0eSxcbiAgLy8gb3IgYW55IG9mIGl0cyB2ZW5kb3ItcHJlZml4ZWQgdmFyaWFudHMsIGlzIHJlY29nbml6ZWRcbiAgLy9cbiAgLy8gTm90ZSB0aGF0IHRoZSBwcm9wZXJ0eSBuYW1lcyBtdXN0IGJlIHByb3ZpZGVkIGluIHRoZSBjYW1lbENhc2UgdmFyaWFudC5cbiAgLy8gTW9kZXJuaXpyLnRlc3RBbGxQcm9wcygnYm94U2l6aW5nJylcbiAgTW9kZXJuaXpyUHJvdG8udGVzdEFsbFByb3BzID0gdGVzdFByb3BzQWxsO1xuXG4gIFxuXG4gIC8qKlxuICAgKiB0ZXN0QWxsUHJvcHMgZGV0ZXJtaW5lcyB3aGV0aGVyIGEgZ2l2ZW4gQ1NTIHByb3BlcnR5IGlzIHN1cHBvcnRlZCBpbiB0aGUgYnJvd3NlclxuICAgKlxuICAgKiBAbWVtYmVyb2YgTW9kZXJuaXpyXG4gICAqIEBuYW1lIE1vZGVybml6ci50ZXN0QWxsUHJvcHNcbiAgICogQG9wdGlvbk5hbWUgTW9kZXJuaXpyLnRlc3RBbGxQcm9wcygpXG4gICAqIEBvcHRpb25Qcm9wIHRlc3RBbGxQcm9wc1xuICAgKiBAYWNjZXNzIHB1YmxpY1xuICAgKiBAZnVuY3Rpb24gdGVzdEFsbFByb3BzXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwcm9wIC0gU3RyaW5nIG5hbWluZyB0aGUgcHJvcGVydHkgdG8gdGVzdCAoZWl0aGVyIGNhbWVsQ2FzZSBvciBrZWJhYi1jYXNlKVxuICAgKiBAcGFyYW0ge3N0cmluZ30gW3ZhbHVlXSAtIFN0cmluZyBvZiB0aGUgdmFsdWUgdG8gdGVzdFxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtza2lwVmFsdWVUZXN0PWZhbHNlXSAtIFdoZXRoZXIgdG8gc2tpcCB0ZXN0aW5nIHRoYXQgdGhlIHZhbHVlIGlzIHN1cHBvcnRlZCB3aGVuIHVzaW5nIG5vbi1uYXRpdmUgZGV0ZWN0aW9uXG4gICAqIEBleGFtcGxlXG4gICAqXG4gICAqIHRlc3RBbGxQcm9wcyBkZXRlcm1pbmVzIHdoZXRoZXIgYSBnaXZlbiBDU1MgcHJvcGVydHksIGluIHNvbWUgcHJlZml4ZWQgZm9ybSxcbiAgICogaXMgc3VwcG9ydGVkIGJ5IHRoZSBicm93c2VyLlxuICAgKlxuICAgKiBgYGBqc1xuICAgKiB0ZXN0QWxsUHJvcHMoJ2JveFNpemluZycpICAvLyB0cnVlXG4gICAqIGBgYFxuICAgKlxuICAgKiBJdCBjYW4gb3B0aW9uYWxseSBiZSBnaXZlbiBhIENTUyB2YWx1ZSBpbiBzdHJpbmcgZm9ybSB0byB0ZXN0IGlmIGEgcHJvcGVydHlcbiAgICogdmFsdWUgaXMgdmFsaWRcbiAgICpcbiAgICogYGBganNcbiAgICogdGVzdEFsbFByb3BzKCdkaXNwbGF5JywgJ2Jsb2NrJykgLy8gdHJ1ZVxuICAgKiB0ZXN0QWxsUHJvcHMoJ2Rpc3BsYXknLCAncGVuZ3VpbicpIC8vIGZhbHNlXG4gICAqIGBgYFxuICAgKlxuICAgKiBBIGJvb2xlYW4gY2FuIGJlIHBhc3NlZCBhcyBhIHRoaXJkIHBhcmFtZXRlciB0byBza2lwIHRoZSB2YWx1ZSBjaGVjayB3aGVuXG4gICAqIG5hdGl2ZSBkZXRlY3Rpb24gKEBzdXBwb3J0cykgaXNuJ3QgYXZhaWxhYmxlLlxuICAgKlxuICAgKiBgYGBqc1xuICAgKiB0ZXN0QWxsUHJvcHMoJ3NoYXBlT3V0c2lkZScsICdjb250ZW50LWJveCcsIHRydWUpO1xuICAgKiBgYGBcbiAgICovXG5cbiAgZnVuY3Rpb24gdGVzdEFsbFByb3BzKHByb3AsIHZhbHVlLCBza2lwVmFsdWVUZXN0KSB7XG4gICAgcmV0dXJuIHRlc3RQcm9wc0FsbChwcm9wLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgdmFsdWUsIHNraXBWYWx1ZVRlc3QpO1xuICB9XG4gIE1vZGVybml6clByb3RvLnRlc3RBbGxQcm9wcyA9IHRlc3RBbGxQcm9wcztcbiAgXG4vKiFcbntcbiAgXCJuYW1lXCI6IFwiQ1NTIFRyYW5zZm9ybXNcIixcbiAgXCJwcm9wZXJ0eVwiOiBcImNzc3RyYW5zZm9ybXNcIixcbiAgXCJjYW5pdXNlXCI6IFwidHJhbnNmb3JtczJkXCIsXG4gIFwidGFnc1wiOiBbXCJjc3NcIl1cbn1cbiEqL1xuXG4gIE1vZGVybml6ci5hZGRUZXN0KCdjc3N0cmFuc2Zvcm1zJywgZnVuY3Rpb24oKSB7XG4gICAgLy8gQW5kcm9pZCA8IDMuMCBpcyBidWdneSwgc28gd2Ugc25pZmYgYW5kIGJsYWNrbGlzdFxuICAgIC8vIGh0dHA6Ly9naXQuaW8vaEh6TDd3XG4gICAgcmV0dXJuIG5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZignQW5kcm9pZCAyLicpID09PSAtMSAmJlxuICAgICAgICAgICB0ZXN0QWxsUHJvcHMoJ3RyYW5zZm9ybScsICdzY2FsZSgxKScsIHRydWUpO1xuICB9KTtcblxuLyohXG57XG4gIFwibmFtZVwiOiBcIkZsZXhib3hcIixcbiAgXCJwcm9wZXJ0eVwiOiBcImZsZXhib3hcIixcbiAgXCJjYW5pdXNlXCI6IFwiZmxleGJveFwiLFxuICBcInRhZ3NcIjogW1wiY3NzXCJdLFxuICBcIm5vdGVzXCI6IFt7XG4gICAgXCJuYW1lXCI6IFwiVGhlIF9uZXdfIGZsZXhib3hcIixcbiAgICBcImhyZWZcIjogXCJodHRwOi8vZGV2LnczLm9yZy9jc3N3Zy9jc3MzLWZsZXhib3hcIlxuICB9XSxcbiAgXCJ3YXJuaW5nc1wiOiBbXG4gICAgXCJBIGB0cnVlYCByZXN1bHQgZm9yIHRoaXMgZGV0ZWN0IGRvZXMgbm90IGltcGx5IHRoYXQgdGhlIGBmbGV4LXdyYXBgIHByb3BlcnR5IGlzIHN1cHBvcnRlZDsgc2VlIHRoZSBgZmxleHdyYXBgIGRldGVjdC5cIlxuICBdXG59XG4hKi9cbi8qIERPQ1xuRGV0ZWN0cyBzdXBwb3J0IGZvciB0aGUgRmxleGlibGUgQm94IExheW91dCBtb2RlbCwgYS5rLmEuIEZsZXhib3gsIHdoaWNoIGFsbG93cyBlYXN5IG1hbmlwdWxhdGlvbiBvZiBsYXlvdXQgb3JkZXIgYW5kIHNpemluZyB3aXRoaW4gYSBjb250YWluZXIuXG4qL1xuXG4gIE1vZGVybml6ci5hZGRUZXN0KCdmbGV4Ym94JywgdGVzdEFsbFByb3BzKCdmbGV4QmFzaXMnLCAnMXB4JywgdHJ1ZSkpO1xuXG4vKiFcbntcbiAgXCJuYW1lXCI6IFwiRmxleGJveCAobGVnYWN5KVwiLFxuICBcInByb3BlcnR5XCI6IFwiZmxleGJveGxlZ2FjeVwiLFxuICBcInRhZ3NcIjogW1wiY3NzXCJdLFxuICBcInBvbHlmaWxsc1wiOiBbXCJmbGV4aWVcIl0sXG4gIFwibm90ZXNcIjogW3tcbiAgICBcIm5hbWVcIjogXCJUaGUgX29sZF8gZmxleGJveFwiLFxuICAgIFwiaHJlZlwiOiBcImh0dHBzOi8vd3d3LnczLm9yZy9UUi8yMDA5L1dELWNzczMtZmxleGJveC0yMDA5MDcyMy9cIlxuICB9XVxufVxuISovXG5cbiAgTW9kZXJuaXpyLmFkZFRlc3QoJ2ZsZXhib3hsZWdhY3knLCB0ZXN0QWxsUHJvcHMoJ2JveERpcmVjdGlvbicsICdyZXZlcnNlJywgdHJ1ZSkpO1xuXG4vKiFcbntcbiAgXCJuYW1lXCI6IFwiQ1NTIE92ZXJmbG93IFNjcm9sbGluZ1wiLFxuICBcInByb3BlcnR5XCI6IFwib3ZlcmZsb3dzY3JvbGxpbmdcIixcbiAgXCJ0YWdzXCI6IFtcImNzc1wiXSxcbiAgXCJidWlsZGVyQWxpYXNlc1wiOiBbXCJjc3Nfb3ZlcmZsb3dfc2Nyb2xsaW5nXCJdLFxuICBcIndhcm5pbmdzXCI6IFtcIkludHJvZHVjZWQgaW4gaU9TNWIyLiBBUEkgaXMgc3ViamVjdCB0byBjaGFuZ2UuXCJdLFxuICBcIm5vdGVzXCI6IFt7XG4gICAgXCJuYW1lXCI6IFwiQXJ0aWNsZSBvbiBpT1Mgb3ZlcmZsb3cgc2Nyb2xsaW5nXCIsXG4gICAgXCJocmVmXCI6IFwiaHR0cHM6Ly9jc3MtdHJpY2tzLmNvbS9zbmlwcGV0cy9jc3MvbW9tZW50dW0tc2Nyb2xsaW5nLW9uLWlvcy1vdmVyZmxvdy1lbGVtZW50cy9cIlxuICB9XVxufVxuISovXG5cbiAgTW9kZXJuaXpyLmFkZFRlc3QoJ292ZXJmbG93c2Nyb2xsaW5nJywgdGVzdEFsbFByb3BzKCdvdmVyZmxvd1Njcm9sbGluZycsICd0b3VjaCcsIHRydWUpKTtcblxuLyohXG57XG4gIFwibmFtZVwiOiBcIkNTUyBUcmFuc2Zvcm1zIDNEXCIsXG4gIFwicHJvcGVydHlcIjogXCJjc3N0cmFuc2Zvcm1zM2RcIixcbiAgXCJjYW5pdXNlXCI6IFwidHJhbnNmb3JtczNkXCIsXG4gIFwidGFnc1wiOiBbXCJjc3NcIl0sXG4gIFwid2FybmluZ3NcIjogW1xuICAgIFwiQ2hyb21lIG1heSBvY2Nhc3Npb25hbGx5IGZhaWwgdGhpcyB0ZXN0IG9uIHNvbWUgc3lzdGVtczsgbW9yZSBpbmZvOiBodHRwczovL2NvZGUuZ29vZ2xlLmNvbS9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9MTI5MDA0XCJcbiAgXVxufVxuISovXG5cbiAgTW9kZXJuaXpyLmFkZFRlc3QoJ2Nzc3RyYW5zZm9ybXMzZCcsIGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiAhIXRlc3RBbGxQcm9wcygncGVyc3BlY3RpdmUnLCAnMXB4JywgdHJ1ZSk7XG4gIH0pO1xuXG5cbiAgLyoqXG4gICAqIHByZWZpeGVkIHJldHVybnMgdGhlIHByZWZpeGVkIG9yIG5vbnByZWZpeGVkIHByb3BlcnR5IG5hbWUgdmFyaWFudCBvZiB5b3VyIGlucHV0XG4gICAqXG4gICAqIEBtZW1iZXJvZiBNb2Rlcm5penJcbiAgICogQG5hbWUgTW9kZXJuaXpyLnByZWZpeGVkXG4gICAqIEBvcHRpb25OYW1lIE1vZGVybml6ci5wcmVmaXhlZCgpXG4gICAqIEBvcHRpb25Qcm9wIHByZWZpeGVkXG4gICAqIEBhY2Nlc3MgcHVibGljXG4gICAqIEBmdW5jdGlvbiBwcmVmaXhlZFxuICAgKiBAcGFyYW0ge3N0cmluZ30gcHJvcCAtIFN0cmluZyBuYW1lIG9mIHRoZSBwcm9wZXJ0eSB0byB0ZXN0IGZvclxuICAgKiBAcGFyYW0ge29iamVjdH0gW29ial0gLSBBbiBvYmplY3QgdG8gdGVzdCBmb3IgdGhlIHByZWZpeGVkIHByb3BlcnRpZXMgb25cbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gW2VsZW1dIC0gQW4gZWxlbWVudCB1c2VkIHRvIHRlc3Qgc3BlY2lmaWMgcHJvcGVydGllcyBhZ2FpbnN0XG4gICAqIEByZXR1cm5zIHtzdHJpbmd8ZmFsc2V9IFRoZSBzdHJpbmcgcmVwcmVzZW50aW5nIHRoZSAocG9zc2libHkgcHJlZml4ZWQpIHZhbGlkXG4gICAqIHZlcnNpb24gb2YgdGhlIHByb3BlcnR5LCBvciBgZmFsc2VgIHdoZW4gaXQgaXMgdW5zdXBwb3J0ZWQuXG4gICAqIEBleGFtcGxlXG4gICAqXG4gICAqIE1vZGVybml6ci5wcmVmaXhlZCB0YWtlcyBhIHN0cmluZyBjc3MgdmFsdWUgaW4gdGhlIERPTSBzdHlsZSBjYW1lbENhc2UgKGFzXG4gICAqIG9wcG9zZWQgdG8gdGhlIGNzcyBzdHlsZSBrZWJhYi1jYXNlKSBmb3JtIGFuZCByZXR1cm5zIHRoZSAocG9zc2libHkgcHJlZml4ZWQpXG4gICAqIHZlcnNpb24gb2YgdGhhdCBwcm9wZXJ0eSB0aGF0IHRoZSBicm93c2VyIGFjdHVhbGx5IHN1cHBvcnRzLlxuICAgKlxuICAgKiBGb3IgZXhhbXBsZSwgaW4gb2xkZXIgRmlyZWZveC4uLlxuICAgKiBgYGBqc1xuICAgKiBwcmVmaXhlZCgnYm94U2l6aW5nJylcbiAgICogYGBgXG4gICAqIHJldHVybnMgJ01vekJveFNpemluZydcbiAgICpcbiAgICogSW4gbmV3ZXIgRmlyZWZveCwgYXMgd2VsbCBhcyBhbnkgb3RoZXIgYnJvd3NlciB0aGF0IHN1cHBvcnQgdGhlIHVucHJlZml4ZWRcbiAgICogdmVyc2lvbiB3b3VsZCBzaW1wbHkgcmV0dXJuIGBib3hTaXppbmdgLiBBbnkgYnJvd3NlciB0aGF0IGRvZXMgbm90IHN1cHBvcnRcbiAgICogdGhlIHByb3BlcnR5IGF0IGFsbCwgaXQgd2lsbCByZXR1cm4gYGZhbHNlYC5cbiAgICpcbiAgICogQnkgZGVmYXVsdCwgcHJlZml4ZWQgaXMgY2hlY2tlZCBhZ2FpbnN0IGEgRE9NIGVsZW1lbnQuIElmIHlvdSB3YW50IHRvIGNoZWNrXG4gICAqIGZvciBhIHByb3BlcnR5IG9uIGFub3RoZXIgb2JqZWN0LCBqdXN0IHBhc3MgaXQgYXMgYSBzZWNvbmQgYXJndW1lbnRcbiAgICpcbiAgICogYGBganNcbiAgICogdmFyIHJBRiA9IHByZWZpeGVkKCdyZXF1ZXN0QW5pbWF0aW9uRnJhbWUnLCB3aW5kb3cpO1xuICAgKlxuICAgKiByYWYoZnVuY3Rpb24oKSB7XG4gICAqICByZW5kZXJGdW5jdGlvbigpO1xuICAgKiB9KVxuICAgKiBgYGBcbiAgICpcbiAgICogTm90ZSB0aGF0IHRoaXMgd2lsbCByZXR1cm4gX3RoZSBhY3R1YWwgZnVuY3Rpb25fIC0gbm90IHRoZSBuYW1lIG9mIHRoZSBmdW5jdGlvbi5cbiAgICogSWYgeW91IG5lZWQgdGhlIGFjdHVhbCBuYW1lIG9mIHRoZSBwcm9wZXJ0eSwgcGFzcyBpbiBgZmFsc2VgIGFzIGEgdGhpcmQgYXJndW1lbnRcbiAgICpcbiAgICogYGBganNcbiAgICogdmFyIHJBRlByb3AgPSBwcmVmaXhlZCgncmVxdWVzdEFuaW1hdGlvbkZyYW1lJywgd2luZG93LCBmYWxzZSk7XG4gICAqXG4gICAqIHJhZlByb3AgPT09ICdXZWJraXRSZXF1ZXN0QW5pbWF0aW9uRnJhbWUnIC8vIGluIG9sZGVyIHdlYmtpdFxuICAgKiBgYGBcbiAgICpcbiAgICogT25lIGNvbW1vbiB1c2UgY2FzZSBmb3IgcHJlZml4ZWQgaXMgaWYgeW91J3JlIHRyeWluZyB0byBkZXRlcm1pbmUgd2hpY2ggdHJhbnNpdGlvblxuICAgKiBlbmQgZXZlbnQgdG8gYmluZCB0bywgeW91IG1pZ2h0IGRvIHNvbWV0aGluZyBsaWtlLi4uXG4gICAqIGBgYGpzXG4gICAqIHZhciB0cmFuc0VuZEV2ZW50TmFtZXMgPSB7XG4gICAqICAgICAnV2Via2l0VHJhbnNpdGlvbicgOiAnd2Via2l0VHJhbnNpdGlvbkVuZCcsICogU2FmIDYsIEFuZHJvaWQgQnJvd3NlclxuICAgKiAgICAgJ01velRyYW5zaXRpb24nICAgIDogJ3RyYW5zaXRpb25lbmQnLCAgICAgICAqIG9ubHkgZm9yIEZGIDwgMTVcbiAgICogICAgICd0cmFuc2l0aW9uJyAgICAgICA6ICd0cmFuc2l0aW9uZW5kJyAgICAgICAgKiBJRTEwLCBPcGVyYSwgQ2hyb21lLCBGRiAxNSssIFNhZiA3K1xuICAgKiB9O1xuICAgKlxuICAgKiB2YXIgdHJhbnNFbmRFdmVudE5hbWUgPSB0cmFuc0VuZEV2ZW50TmFtZXNbIE1vZGVybml6ci5wcmVmaXhlZCgndHJhbnNpdGlvbicpIF07XG4gICAqIGBgYFxuICAgKlxuICAgKiBJZiB5b3Ugd2FudCBhIHNpbWlsYXIgbG9va3VwLCBidXQgaW4ga2ViYWItY2FzZSwgeW91IGNhbiB1c2UgW3ByZWZpeGVkQ1NTXSgjbW9kZXJuaXpyLXByZWZpeGVkY3NzKS5cbiAgICovXG5cbiAgdmFyIHByZWZpeGVkID0gTW9kZXJuaXpyUHJvdG8ucHJlZml4ZWQgPSBmdW5jdGlvbihwcm9wLCBvYmosIGVsZW0pIHtcbiAgICBpZiAocHJvcC5pbmRleE9mKCdAJykgPT09IDApIHtcbiAgICAgIHJldHVybiBhdFJ1bGUocHJvcCk7XG4gICAgfVxuXG4gICAgaWYgKHByb3AuaW5kZXhPZignLScpICE9IC0xKSB7XG4gICAgICAvLyBDb252ZXJ0IGtlYmFiLWNhc2UgdG8gY2FtZWxDYXNlXG4gICAgICBwcm9wID0gY3NzVG9ET00ocHJvcCk7XG4gICAgfVxuICAgIGlmICghb2JqKSB7XG4gICAgICByZXR1cm4gdGVzdFByb3BzQWxsKHByb3AsICdwZngnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gVGVzdGluZyBET00gcHJvcGVydHkgZS5nLiBNb2Rlcm5penIucHJlZml4ZWQoJ3JlcXVlc3RBbmltYXRpb25GcmFtZScsIHdpbmRvdykgLy8gJ21velJlcXVlc3RBbmltYXRpb25GcmFtZSdcbiAgICAgIHJldHVybiB0ZXN0UHJvcHNBbGwocHJvcCwgb2JqLCBlbGVtKTtcbiAgICB9XG4gIH07XG5cbiAgXG4vKiFcbntcbiAgXCJuYW1lXCI6IFwiRm9yY2UgVG91Y2ggRXZlbnRzXCIsXG4gIFwicHJvcGVydHlcIjogXCJmb3JjZXRvdWNoXCIsXG4gIFwiYXV0aG9yc1wiOiBbXCJLcmFpZyBXYWxrZXJcIl0sXG4gIFwibm90ZXNcIjogW3tcbiAgICBcIm5hbWVcIjogXCJSZXNwb25kaW5nIHRvIEZvcmNlIFRvdWNoIEV2ZW50cyBmcm9tIEphdmFTY3JpcHRcIixcbiAgICBcImhyZWZcIjogXCJodHRwczovL2RldmVsb3Blci5hcHBsZS5jb20vbGlicmFyeS9wcmVyZWxlYXNlL21hYy9kb2N1bWVudGF0aW9uL0FwcGxlQXBwbGljYXRpb25zL0NvbmNlcHR1YWwvU2FmYXJpSlNQcm9nVG9waWNzL0FydGljbGVzL1Jlc3BvbmRpbmd0b0ZvcmNlVG91Y2hFdmVudHNmcm9tSmF2YVNjcmlwdC5odG1sXCJcbiAgfV1cbn1cbiEqL1xuLyogRE9DXG5UZXN0cyB3aGV0aGVyIHRoZSBicm93c2VyIHN1cHBvcnRzIHRoZSBkZXRlY3Rpb24gb2YgRm9yY2UgVG91Y2ggRXZlbnRzLlxuRm9yY2UgVG91Y2ggRXZlbnRzIGFsbG93IGN1c3RvbSBiZWhhdmlvdXJzIGFuZCBpbnRlcmFjdGlvbnMgdG8gdGFrZSBwbGFjZSBiYXNlZCBvbiB0aGUgZ2l2ZW4gcHJlc3N1cmUgb3IgY2hhbmdlIGluIHByZXNzdXJlIGZyb20gYSBjb21wYXRpYmxlIHRyYWNrcGFkLlxuXG5Gb3JjZSBUb3VjaCBldmVudHMgYXJlIGF2YWlsYWJsZSBpbiBPUyBYIDEwLjExIGFuZCBsYXRlciBvbiBkZXZpY2VzIGVxdWlwcGVkIHdpdGggRm9yY2UgVG91Y2ggdHJhY2twYWRzLlxuKi9cblxuICBNb2Rlcm5penIuYWRkVGVzdCgnZm9yY2V0b3VjaCcsIGZ1bmN0aW9uKCkge1xuXHRcdC8vIGdpdGh1Yi5jb20vTW9kZXJuaXpyL01vZGVybml6ci9pc3N1ZXMvMTYxM1xuICAgIC8vIFRlc3QgaWYgdGhlIGJyb3dzZXIgc3VwcG9ydHMgdGhlIGZvcmNlIHRvdWNoIGV2ZW50IHByb2dyZXNzaW9uIChzZWUgbm90ZXMgbGluaylcbiAgICBpZiAoIWhhc0V2ZW50KHByZWZpeGVkKCdtb3VzZWZvcmNld2lsbGJlZ2luJywgd2luZG93LCBmYWxzZSksIHdpbmRvdykpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvLyBUZXN0IGlmIHRoZSBicm93c2VyIHByb3ZpZGVzIHRocmVzaG9sZHMgZGVmaW5pbmcgYSBcImZvcmNlIHRvdWNoXCIgZnJvbSBhIG5vcm1hbCB0b3VjaC9jbGljayBldmVudFxuICAgIHJldHVybiBNb3VzZUV2ZW50LldFQktJVF9GT1JDRV9BVF9NT1VTRV9ET1dOICYmIE1vdXNlRXZlbnQuV0VCS0lUX0ZPUkNFX0FUX0ZPUkNFX01PVVNFX0RPV047XG4gIH0pO1xuXG5cbiAgLy8gUnVuIGVhY2ggdGVzdFxuICB0ZXN0UnVubmVyKCk7XG5cbiAgLy8gUmVtb3ZlIHRoZSBcIm5vLWpzXCIgY2xhc3MgaWYgaXQgZXhpc3RzXG4gIHNldENsYXNzZXMoY2xhc3Nlcyk7XG5cbiAgZGVsZXRlIE1vZGVybml6clByb3RvLmFkZFRlc3Q7XG4gIGRlbGV0ZSBNb2Rlcm5penJQcm90by5hZGRBc3luY1Rlc3Q7XG5cbiAgLy8gUnVuIHRoZSB0aGluZ3MgdGhhdCBhcmUgc3VwcG9zZWQgdG8gcnVuIGFmdGVyIHRoZSB0ZXN0c1xuICBmb3IgKHZhciBpID0gMDsgaSA8IE1vZGVybml6ci5fcS5sZW5ndGg7IGkrKykge1xuICAgIE1vZGVybml6ci5fcVtpXSgpO1xuICB9XG5cbiAgLy8gTGVhayBNb2Rlcm5penIgbmFtZXNwYWNlXG4gIHdpbmRvdy5Nb2Rlcm5penIgPSBNb2Rlcm5penI7XG5cblxuO1xuXG59KSh3aW5kb3csIGRvY3VtZW50KTsiXSwibmFtZXMiOlsid2luZG93IiwiZG9jdW1lbnQiLCJ1bmRlZmluZWQiLCJjbGFzc2VzIiwidGVzdHMiLCJNb2Rlcm5penJQcm90byIsIl92ZXJzaW9uIiwiX2NvbmZpZyIsIl9xIiwib24iLCJ0ZXN0IiwiY2IiLCJzZWxmIiwic2V0VGltZW91dCIsImFkZFRlc3QiLCJuYW1lIiwiZm4iLCJvcHRpb25zIiwicHVzaCIsImFkZEFzeW5jVGVzdCIsIk1vZGVybml6ciIsInByb3RvdHlwZSIsInByZWZpeGVzIiwidXNlUHJlZml4ZXMiLCJzcGxpdCIsIl9wcmVmaXhlcyIsImlzIiwib2JqIiwidHlwZSIsIl90eXBlb2YiLCJ0ZXN0UnVubmVyIiwiZmVhdHVyZU5hbWVzIiwiZmVhdHVyZSIsImFsaWFzSWR4IiwicmVzdWx0IiwibmFtZUlkeCIsImZlYXR1cmVOYW1lIiwiZmVhdHVyZU5hbWVTcGxpdCIsImZlYXR1cmVJZHgiLCJoYXNPd25Qcm9wZXJ0eSIsInRvTG93ZXJDYXNlIiwiYWxpYXNlcyIsImxlbmd0aCIsIkJvb2xlYW4iLCJqb2luIiwiZG9jRWxlbWVudCIsImRvY3VtZW50RWxlbWVudCIsImlzU1ZHIiwibm9kZU5hbWUiLCJzZXRDbGFzc2VzIiwiY2xhc3NOYW1lIiwiY2xhc3NQcmVmaXgiLCJiYXNlVmFsIiwiZW5hYmxlSlNDbGFzcyIsInJlSlMiLCJSZWdFeHAiLCJyZXBsYWNlIiwiZW5hYmxlQ2xhc3NlcyIsImh0bWw1IiwidmVyc2lvbiIsInJlU2tpcCIsInNhdmVDbG9uZXMiLCJzdXBwb3J0c0h0bWw1U3R5bGVzIiwiZXhwYW5kbyIsImV4cGFuSUQiLCJleHBhbmRvRGF0YSIsInN1cHBvcnRzVW5rbm93bkVsZW1lbnRzIiwiYSIsImNyZWF0ZUVsZW1lbnQiLCJpbm5lckhUTUwiLCJjaGlsZE5vZGVzIiwiZnJhZyIsImNyZWF0ZURvY3VtZW50RnJhZ21lbnQiLCJjbG9uZU5vZGUiLCJlIiwiYWRkU3R5bGVTaGVldCIsIm93bmVyRG9jdW1lbnQiLCJjc3NUZXh0IiwicCIsInBhcmVudCIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwiaW5zZXJ0QmVmb3JlIiwibGFzdENoaWxkIiwiZmlyc3RDaGlsZCIsImdldEVsZW1lbnRzIiwiZWxlbWVudHMiLCJhZGRFbGVtZW50cyIsIm5ld0VsZW1lbnRzIiwic2hpdkRvY3VtZW50IiwiZ2V0RXhwYW5kb0RhdGEiLCJkYXRhIiwibm9kZSIsImNhY2hlIiwiY3JlYXRlRWxlbSIsImNhbkhhdmVDaGlsZHJlbiIsInRhZ1VybiIsImFwcGVuZENoaWxkIiwiY2xvbmUiLCJpIiwiZWxlbXMiLCJsIiwic2hpdk1ldGhvZHMiLCJjcmVhdGVGcmFnIiwiRnVuY3Rpb24iLCJzaGl2Q1NTIiwiaGFzQ1NTIiwicmVNZWRpYSIsInNoaXZOYW1lc3BhY2UiLCJzdXBwb3J0c1NoaXZhYmxlU2hlZXRzIiwiZG9jRWwiLCJuYW1lc3BhY2VzIiwicGFyZW50V2luZG93IiwiYXBwbHlFbGVtZW50IiwicmVtb3ZlTm9kZSIsImF0dGFjaEV2ZW50IiwiYWRkV3JhcHBlcnMiLCJub2RlcyIsImluZGV4IiwicmVFbGVtZW50cyIsImNyZWF0ZVdyYXBwZXIiLCJlbGVtZW50IiwiYXR0cmlidXRlcyIsIndyYXBwZXIiLCJzcGVjaWZpZWQiLCJzZXRBdHRyaWJ1dGUiLCJub2RlVmFsdWUiLCJzdHlsZSIsInNoaXZDc3NUZXh0IiwicGFpciIsInBhcnRzIiwicmVwbGFjZW1lbnQiLCJyZW1vdmVXcmFwcGVycyIsIndyYXBwZXJzIiwic2hpdlByaW50Iiwic2hpdmVkU2hlZXQiLCJvd25lcldpbmRvdyIsInByaW50U2hpdmVkIiwiYWRkIiwicmVtb3ZlU2hlZXQiLCJjbGVhclRpbWVvdXQiLCJfcmVtb3ZlU2hlZXRUaW1lciIsImltcG9ydHMiLCJzaGVldCIsImNvbGxlY3Rpb24iLCJzdHlsZVNoZWV0cyIsInNoZWV0cyIsIkFycmF5IiwicG9wIiwiZGlzYWJsZWQiLCJtZWRpYSIsImVyIiwicmV2ZXJzZSIsIm1vZHVsZSIsImV4cG9ydHMiLCJvbVByZWZpeGVzIiwiZG9tUHJlZml4ZXMiLCJfZG9tUHJlZml4ZXMiLCJuZXdTeW50YXgiLCJDU1MiLCJvbGRTeW50YXgiLCJjc3NvbVByZWZpeGVzIiwiX2Nzc29tUHJlZml4ZXMiLCJjb250YWlucyIsInN0ciIsInN1YnN0ciIsImluZGV4T2YiLCJhcmd1bWVudHMiLCJjcmVhdGVFbGVtZW50TlMiLCJjYWxsIiwiYXBwbHkiLCJoYXNFdmVudCIsIm5lZWRzRmFsbGJhY2siLCJpbm5lciIsImV2ZW50TmFtZSIsImlzU3VwcG9ydGVkIiwicmVtb3ZlQXR0cmlidXRlIiwiZ2V0Qm9keSIsImJvZHkiLCJmYWtlIiwiaW5qZWN0RWxlbWVudFdpdGhTdHlsZXMiLCJydWxlIiwiY2FsbGJhY2siLCJ0ZXN0bmFtZXMiLCJtb2QiLCJyZXQiLCJkb2NPdmVyZmxvdyIsImRpdiIsInBhcnNlSW50IiwiaWQiLCJzdHlsZVNoZWV0IiwiY3JlYXRlVGV4dE5vZGUiLCJiYWNrZ3JvdW5kIiwib3ZlcmZsb3ciLCJwYXJlbnROb2RlIiwicmVtb3ZlQ2hpbGQiLCJvZmZzZXRIZWlnaHQiLCJ0ZXN0U3R5bGVzIiwiYm9vbCIsIkRvY3VtZW50VG91Y2giLCJxdWVyeSIsIm9mZnNldFRvcCIsImZuQmluZCIsInRoYXQiLCJ0ZXN0RE9NUHJvcHMiLCJwcm9wcyIsImVsZW0iLCJpdGVtIiwiY3NzVG9ET00iLCJtMSIsIm0yIiwidG9VcHBlckNhc2UiLCJhdFJ1bGUiLCJwcm9wIiwiY3NzcnVsZSIsIkNTU1J1bGUiLCJwcmVmaXgiLCJ0aGlzUnVsZSIsIm1vZEVsZW0iLCJtU3R5bGUiLCJ1bnNoaWZ0IiwiZG9tVG9DU1MiLCJjb21wdXRlZFN0eWxlIiwicHNldWRvIiwiZ2V0Q29tcHV0ZWRTdHlsZSIsImNvbnNvbGUiLCJnZXRQcm9wZXJ0eVZhbHVlIiwibWV0aG9kIiwiZXJyb3IiLCJjdXJyZW50U3R5bGUiLCJuYXRpdmVUZXN0UHJvcHMiLCJ2YWx1ZSIsInN1cHBvcnRzIiwiY29uZGl0aW9uVGV4dCIsInRlc3RQcm9wcyIsInByZWZpeGVkIiwic2tpcFZhbHVlVGVzdCIsImFmdGVySW5pdCIsInByb3BzTGVuZ3RoIiwiYmVmb3JlIiwic2hpZnQiLCJjbGVhbkVsZW1zIiwidGVzdFByb3AiLCJ1c2VWYWx1ZSIsInRlc3RQcm9wc0FsbCIsInVjUHJvcCIsImNoYXJBdCIsInNsaWNlIiwidGVzdEFsbFByb3BzIiwibmF2aWdhdG9yIiwidXNlckFnZW50IiwiTW91c2VFdmVudCIsIldFQktJVF9GT1JDRV9BVF9NT1VTRV9ET1dOIiwiV0VCS0lUX0ZPUkNFX0FUX0ZPUkNFX01PVVNFX0RPV04iXSwic291cmNlUm9vdCI6IiJ9