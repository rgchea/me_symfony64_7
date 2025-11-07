(self["webpackChunk"] = self["webpackChunk"] || []).push([["js/select2"],{

/***/ "./assets/css/portoadmin/vendor/select2/js/select2.js":
/*!************************************************************!*\
  !*** ./assets/css/portoadmin/vendor/select2/js/select2.js ***!
  \************************************************************/
/***/ ((module, exports, __webpack_require__) => {

/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;__webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
__webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
__webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
__webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
__webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
__webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");
__webpack_require__(/*! core-js/modules/es.array.index-of.js */ "./node_modules/core-js/modules/es.array.index-of.js");
__webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
__webpack_require__(/*! core-js/modules/es.array.join.js */ "./node_modules/core-js/modules/es.array.join.js");
__webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
__webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
__webpack_require__(/*! core-js/modules/es.array.sort.js */ "./node_modules/core-js/modules/es.array.sort.js");
__webpack_require__(/*! core-js/modules/es.array.splice.js */ "./node_modules/core-js/modules/es.array.splice.js");
__webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
__webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
__webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
__webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
__webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
__webpack_require__(/*! core-js/modules/es.string.match.js */ "./node_modules/core-js/modules/es.string.match.js");
__webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
__webpack_require__(/*! core-js/modules/es.string.trim.js */ "./node_modules/core-js/modules/es.string.trim.js");
__webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
__webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
/*!
 * Select2 4.0.6-rc.1
 * https://select2.github.io
 *
 * Released under the MIT license
 * https://github.com/select2/select2/blob/master/LICENSE.md
 */
;
(function (factory) {
  if (true) {
    // AMD. Register as an anonymous module.
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else // removed by dead control flow
{}
})(function (jQuery) {
  // This is needed so we can catch the AMD loader configuration and use it
  // The inner file should be wrapped (by `banner.start.js`) in a function that
  // returns the AMD loader references.
  var S2 = function () {
    // Restore the Select2 AMD loader so it can be used
    // Needed mostly in the language files, where the loader is not inserted
    if (jQuery && jQuery.fn && jQuery.fn.select2 && jQuery.fn.select2.amd) {
      var S2 = jQuery.fn.select2.amd;
    }
    var S2;
    (function () {
      if (!S2 || !S2.requirejs) {
        if (!S2) {
          S2 = {};
        } else {
          require = S2;
        }
        /**
         * @license almond 0.3.3 Copyright jQuery Foundation and other contributors.
         * Released under MIT license, http://github.com/requirejs/almond/LICENSE
         */
        //Going sloppy to avoid 'use strict' string cost, but strict practices should
        //be followed.
        /*global setTimeout: false */

        var requirejs, require, define;
        (function (undef) {
          var main,
            _req,
            makeMap,
            handlers,
            defined = {},
            waiting = {},
            config = {},
            defining = {},
            hasOwn = Object.prototype.hasOwnProperty,
            aps = [].slice,
            jsSuffixRegExp = /\.js$/;
          function hasProp(obj, prop) {
            return hasOwn.call(obj, prop);
          }

          /**
           * Given a relative module name, like ./something, normalize it to
           * a real name that can be mapped to a path.
           * @param {String} name the relative name
           * @param {String} baseName a real name that the name arg is relative
           * to.
           * @returns {String} normalized name
           */
          function normalize(name, baseName) {
            var nameParts,
              nameSegment,
              mapValue,
              foundMap,
              lastIndex,
              foundI,
              foundStarMap,
              starI,
              i,
              j,
              part,
              normalizedBaseParts,
              baseParts = baseName && baseName.split("/"),
              map = config.map,
              starMap = map && map['*'] || {};

            //Adjust any relative paths.
            if (name) {
              name = name.split('/');
              lastIndex = name.length - 1;

              // If wanting node ID compatibility, strip .js from end
              // of IDs. Have to do this here, and not in nameToUrl
              // because node allows either .js or non .js to map
              // to same file.
              if (config.nodeIdCompat && jsSuffixRegExp.test(name[lastIndex])) {
                name[lastIndex] = name[lastIndex].replace(jsSuffixRegExp, '');
              }

              // Starts with a '.' so need the baseName
              if (name[0].charAt(0) === '.' && baseParts) {
                //Convert baseName to array, and lop off the last part,
                //so that . matches that 'directory' and not name of the baseName's
                //module. For instance, baseName of 'one/two/three', maps to
                //'one/two/three.js', but we want the directory, 'one/two' for
                //this normalization.
                normalizedBaseParts = baseParts.slice(0, baseParts.length - 1);
                name = normalizedBaseParts.concat(name);
              }

              //start trimDots
              for (i = 0; i < name.length; i++) {
                part = name[i];
                if (part === '.') {
                  name.splice(i, 1);
                  i -= 1;
                } else if (part === '..') {
                  // If at the start, or previous value is still ..,
                  // keep them so that when converted to a path it may
                  // still work when converted to a path, even though
                  // as an ID it is less than ideal. In larger point
                  // releases, may be better to just kick out an error.
                  if (i === 0 || i === 1 && name[2] === '..' || name[i - 1] === '..') {
                    continue;
                  } else if (i > 0) {
                    name.splice(i - 1, 2);
                    i -= 2;
                  }
                }
              }
              //end trimDots

              name = name.join('/');
            }

            //Apply map config if available.
            if ((baseParts || starMap) && map) {
              nameParts = name.split('/');
              for (i = nameParts.length; i > 0; i -= 1) {
                nameSegment = nameParts.slice(0, i).join("/");
                if (baseParts) {
                  //Find the longest baseName segment match in the config.
                  //So, do joins on the biggest to smallest lengths of baseParts.
                  for (j = baseParts.length; j > 0; j -= 1) {
                    mapValue = map[baseParts.slice(0, j).join('/')];

                    //baseName segment has  config, find if it has one for
                    //this name.
                    if (mapValue) {
                      mapValue = mapValue[nameSegment];
                      if (mapValue) {
                        //Match, update name to the new value.
                        foundMap = mapValue;
                        foundI = i;
                        break;
                      }
                    }
                  }
                }
                if (foundMap) {
                  break;
                }

                //Check for a star map match, but just hold on to it,
                //if there is a shorter segment match later in a matching
                //config, then favor over this star map.
                if (!foundStarMap && starMap && starMap[nameSegment]) {
                  foundStarMap = starMap[nameSegment];
                  starI = i;
                }
              }
              if (!foundMap && foundStarMap) {
                foundMap = foundStarMap;
                foundI = starI;
              }
              if (foundMap) {
                nameParts.splice(0, foundI, foundMap);
                name = nameParts.join('/');
              }
            }
            return name;
          }
          function makeRequire(relName, forceSync) {
            return function () {
              //A version of a require function that passes a moduleName
              //value for items that may need to
              //look up paths relative to the moduleName
              var args = aps.call(arguments, 0);

              //If first arg is not require('string'), and there is only
              //one arg, it is the array form without a callback. Insert
              //a null so that the following concat is correct.
              if (typeof args[0] !== 'string' && args.length === 1) {
                args.push(null);
              }
              return _req.apply(undef, args.concat([relName, forceSync]));
            };
          }
          function makeNormalize(relName) {
            return function (name) {
              return normalize(name, relName);
            };
          }
          function makeLoad(depName) {
            return function (value) {
              defined[depName] = value;
            };
          }
          function callDep(name) {
            if (hasProp(waiting, name)) {
              var args = waiting[name];
              delete waiting[name];
              defining[name] = true;
              main.apply(undef, args);
            }
            if (!hasProp(defined, name) && !hasProp(defining, name)) {
              throw new Error('No ' + name);
            }
            return defined[name];
          }

          //Turns a plugin!resource to [plugin, resource]
          //with the plugin being undefined if the name
          //did not have a plugin prefix.
          function splitPrefix(name) {
            var prefix,
              index = name ? name.indexOf('!') : -1;
            if (index > -1) {
              prefix = name.substring(0, index);
              name = name.substring(index + 1, name.length);
            }
            return [prefix, name];
          }

          //Creates a parts array for a relName where first part is plugin ID,
          //second part is resource ID. Assumes relName has already been normalized.
          function makeRelParts(relName) {
            return relName ? splitPrefix(relName) : [];
          }

          /**
           * Makes a name map, normalizing the name, and using a plugin
           * for normalization if necessary. Grabs a ref to plugin
           * too, as an optimization.
           */
          makeMap = function makeMap(name, relParts) {
            var plugin,
              parts = splitPrefix(name),
              prefix = parts[0],
              relResourceName = relParts[1];
            name = parts[1];
            if (prefix) {
              prefix = normalize(prefix, relResourceName);
              plugin = callDep(prefix);
            }

            //Normalize according
            if (prefix) {
              if (plugin && plugin.normalize) {
                name = plugin.normalize(name, makeNormalize(relResourceName));
              } else {
                name = normalize(name, relResourceName);
              }
            } else {
              name = normalize(name, relResourceName);
              parts = splitPrefix(name);
              prefix = parts[0];
              name = parts[1];
              if (prefix) {
                plugin = callDep(prefix);
              }
            }

            //Using ridiculous property names for space reasons
            return {
              f: prefix ? prefix + '!' + name : name,
              //fullName
              n: name,
              pr: prefix,
              p: plugin
            };
          };
          function makeConfig(name) {
            return function () {
              return config && config.config && config.config[name] || {};
            };
          }
          handlers = {
            require: function require(name) {
              return makeRequire(name);
            },
            exports: function exports(name) {
              var e = defined[name];
              if (typeof e !== 'undefined') {
                return e;
              } else {
                return defined[name] = {};
              }
            },
            module: function module(name) {
              return {
                id: name,
                uri: '',
                exports: defined[name],
                config: makeConfig(name)
              };
            }
          };
          main = function main(name, deps, callback, relName) {
            var cjsModule,
              depName,
              ret,
              map,
              i,
              relParts,
              args = [],
              callbackType = _typeof(callback),
              usingExports;

            //Use name if no relName
            relName = relName || name;
            relParts = makeRelParts(relName);

            //Call the callback to define the module, if necessary.
            if (callbackType === 'undefined' || callbackType === 'function') {
              //Pull out the defined dependencies and pass the ordered
              //values to the callback.
              //Default to [require, exports, module] if no deps
              deps = !deps.length && callback.length ? ['require', 'exports', 'module'] : deps;
              for (i = 0; i < deps.length; i += 1) {
                map = makeMap(deps[i], relParts);
                depName = map.f;

                //Fast path CommonJS standard dependencies.
                if (depName === "require") {
                  args[i] = handlers.require(name);
                } else if (depName === "exports") {
                  //CommonJS module spec 1.1
                  args[i] = handlers.exports(name);
                  usingExports = true;
                } else if (depName === "module") {
                  //CommonJS module spec 1.1
                  cjsModule = args[i] = handlers.module(name);
                } else if (hasProp(defined, depName) || hasProp(waiting, depName) || hasProp(defining, depName)) {
                  args[i] = callDep(depName);
                } else if (map.p) {
                  map.p.load(map.n, makeRequire(relName, true), makeLoad(depName), {});
                  args[i] = defined[depName];
                } else {
                  throw new Error(name + ' missing ' + depName);
                }
              }
              ret = callback ? callback.apply(defined[name], args) : undefined;
              if (name) {
                //If setting exports via "module" is in play,
                //favor that over return value and exports. After that,
                //favor a non-undefined return value over exports use.
                if (cjsModule && cjsModule.exports !== undef && cjsModule.exports !== defined[name]) {
                  defined[name] = cjsModule.exports;
                } else if (ret !== undef || !usingExports) {
                  //Use the return value from the function.
                  defined[name] = ret;
                }
              }
            } else if (name) {
              //May just be an object definition for the module. Only
              //worry about defining if have a module name.
              defined[name] = callback;
            }
          };
          requirejs = require = _req = function req(deps, callback, relName, forceSync, alt) {
            if (typeof deps === "string") {
              if (handlers[deps]) {
                //callback in this case is really relName
                return handlers[deps](callback);
              }
              //Just return the module wanted. In this scenario, the
              //deps arg is the module name, and second arg (if passed)
              //is just the relName.
              //Normalize module name, if it contains . or ..
              return callDep(makeMap(deps, makeRelParts(callback)).f);
            } else if (!deps.splice) {
              //deps is a config object, not an array.
              config = deps;
              if (config.deps) {
                _req(config.deps, config.callback);
              }
              if (!callback) {
                return;
              }
              if (callback.splice) {
                //callback is an array, which means it is a dependency list.
                //Adjust args if there are dependencies
                deps = callback;
                callback = relName;
                relName = null;
              } else {
                deps = undef;
              }
            }

            //Support require(['a'])
            callback = callback || function () {};

            //If relName is a function, it is an errback handler,
            //so remove it.
            if (typeof relName === 'function') {
              relName = forceSync;
              forceSync = alt;
            }

            //Simulate async callback;
            if (forceSync) {
              main(undef, deps, callback, relName);
            } else {
              //Using a non-zero value because of concern for what old browsers
              //do, and latest browsers "upgrade" to 4 if lower value is used:
              //http://www.whatwg.org/specs/web-apps/current-work/multipage/timers.html#dom-windowtimers-settimeout:
              //If want a value immediately, use require('id') instead -- something
              //that works in almond on the global level, but not guaranteed and
              //unlikely to work in other AMD implementations.
              setTimeout(function () {
                main(undef, deps, callback, relName);
              }, 4);
            }
            return _req;
          };

          /**
           * Just drops the config on the floor, but returns req in case
           * the config return value is used.
           */
          _req.config = function (cfg) {
            return _req(cfg);
          };

          /**
           * Expose module registry for debugging and tooling
           */
          requirejs._defined = defined;
          define = function define(name, deps, callback) {
            if (typeof name !== 'string') {
              throw new Error('See almond README: incorrect module build, no module name');
            }

            //This module may not have dependencies
            if (!deps.splice) {
              //deps is not an array, so probably means
              //an object literal or factory function for
              //the value. Adjust args.
              callback = deps;
              deps = [];
            }
            if (!hasProp(defined, name) && !hasProp(waiting, name)) {
              waiting[name] = [name, deps, callback];
            }
          };
          define.amd = {
            jQuery: true
          };
        })();
        S2.requirejs = requirejs;
        S2.require = require;
        S2.define = define;
      }
    })();
    S2.define("almond", function () {});

    /* global jQuery:false, $:false */
    S2.define('jquery', [], function () {
      var _$ = jQuery || $;
      if (_$ == null && console && console.error) {
        console.error('Select2: An instance of jQuery or a jQuery-compatible library was not ' + 'found. Make sure that you are including jQuery before Select2 on your ' + 'web page.');
      }
      return _$;
    });
    S2.define('select2/utils', ['jquery'], function ($) {
      var Utils = {};
      Utils.Extend = function (ChildClass, SuperClass) {
        var __hasProp = {}.hasOwnProperty;
        function BaseConstructor() {
          this.constructor = ChildClass;
        }
        for (var key in SuperClass) {
          if (__hasProp.call(SuperClass, key)) {
            ChildClass[key] = SuperClass[key];
          }
        }
        BaseConstructor.prototype = SuperClass.prototype;
        ChildClass.prototype = new BaseConstructor();
        ChildClass.__super__ = SuperClass.prototype;
        return ChildClass;
      };
      function getMethods(theClass) {
        var proto = theClass.prototype;
        var methods = [];
        for (var methodName in proto) {
          var m = proto[methodName];
          if (typeof m !== 'function') {
            continue;
          }
          if (methodName === 'constructor') {
            continue;
          }
          methods.push(methodName);
        }
        return methods;
      }
      Utils.Decorate = function (SuperClass, DecoratorClass) {
        var decoratedMethods = getMethods(DecoratorClass);
        var superMethods = getMethods(SuperClass);
        function DecoratedClass() {
          var unshift = Array.prototype.unshift;
          var argCount = DecoratorClass.prototype.constructor.length;
          var calledConstructor = SuperClass.prototype.constructor;
          if (argCount > 0) {
            unshift.call(arguments, SuperClass.prototype.constructor);
            calledConstructor = DecoratorClass.prototype.constructor;
          }
          calledConstructor.apply(this, arguments);
        }
        DecoratorClass.displayName = SuperClass.displayName;
        function ctr() {
          this.constructor = DecoratedClass;
        }
        DecoratedClass.prototype = new ctr();
        for (var m = 0; m < superMethods.length; m++) {
          var superMethod = superMethods[m];
          DecoratedClass.prototype[superMethod] = SuperClass.prototype[superMethod];
        }
        var calledMethod = function calledMethod(methodName) {
          // Stub out the original method if it's not decorating an actual method
          var originalMethod = function originalMethod() {};
          if (methodName in DecoratedClass.prototype) {
            originalMethod = DecoratedClass.prototype[methodName];
          }
          var decoratedMethod = DecoratorClass.prototype[methodName];
          return function () {
            var unshift = Array.prototype.unshift;
            unshift.call(arguments, originalMethod);
            return decoratedMethod.apply(this, arguments);
          };
        };
        for (var d = 0; d < decoratedMethods.length; d++) {
          var decoratedMethod = decoratedMethods[d];
          DecoratedClass.prototype[decoratedMethod] = calledMethod(decoratedMethod);
        }
        return DecoratedClass;
      };
      var Observable = function Observable() {
        this.listeners = {};
      };
      Observable.prototype.on = function (event, callback) {
        this.listeners = this.listeners || {};
        if (event in this.listeners) {
          this.listeners[event].push(callback);
        } else {
          this.listeners[event] = [callback];
        }
      };
      Observable.prototype.trigger = function (event) {
        var slice = Array.prototype.slice;
        var params = slice.call(arguments, 1);
        this.listeners = this.listeners || {};

        // Params should always come in as an array
        if (params == null) {
          params = [];
        }

        // If there are no arguments to the event, use a temporary object
        if (params.length === 0) {
          params.push({});
        }

        // Set the `_type` of the first object to the event
        params[0]._type = event;
        if (event in this.listeners) {
          this.invoke(this.listeners[event], slice.call(arguments, 1));
        }
        if ('*' in this.listeners) {
          this.invoke(this.listeners['*'], arguments);
        }
      };
      Observable.prototype.invoke = function (listeners, params) {
        for (var i = 0, len = listeners.length; i < len; i++) {
          listeners[i].apply(this, params);
        }
      };
      Utils.Observable = Observable;
      Utils.generateChars = function (length) {
        var chars = '';
        for (var i = 0; i < length; i++) {
          var randomChar = Math.floor(Math.random() * 36);
          chars += randomChar.toString(36);
        }
        return chars;
      };
      Utils.bind = function (func, context) {
        return function () {
          func.apply(context, arguments);
        };
      };
      Utils._convertData = function (data) {
        for (var originalKey in data) {
          var keys = originalKey.split('-');
          var dataLevel = data;
          if (keys.length === 1) {
            continue;
          }
          for (var k = 0; k < keys.length; k++) {
            var key = keys[k];

            // Lowercase the first letter
            // By default, dash-separated becomes camelCase
            key = key.substring(0, 1).toLowerCase() + key.substring(1);
            if (!(key in dataLevel)) {
              dataLevel[key] = {};
            }
            if (k == keys.length - 1) {
              dataLevel[key] = data[originalKey];
            }
            dataLevel = dataLevel[key];
          }
          delete data[originalKey];
        }
        return data;
      };
      Utils.hasScroll = function (index, el) {
        // Adapted from the function created by @ShadowScripter
        // and adapted by @BillBarry on the Stack Exchange Code Review website.
        // The original code can be found at
        // http://codereview.stackexchange.com/q/13338
        // and was designed to be used with the Sizzle selector engine.

        var $el = $(el);
        var overflowX = el.style.overflowX;
        var overflowY = el.style.overflowY;

        //Check both x and y declarations
        if (overflowX === overflowY && (overflowY === 'hidden' || overflowY === 'visible')) {
          return false;
        }
        if (overflowX === 'scroll' || overflowY === 'scroll') {
          return true;
        }
        return $el.innerHeight() < el.scrollHeight || $el.innerWidth() < el.scrollWidth;
      };
      Utils.escapeMarkup = function (markup) {
        var replaceMap = {
          '\\': '&#92;',
          '&': '&amp;',
          '<': '&lt;',
          '>': '&gt;',
          '"': '&quot;',
          '\'': '&#39;',
          '/': '&#47;'
        };

        // Do not try to escape the markup if it's not a string
        if (typeof markup !== 'string') {
          return markup;
        }
        return String(markup).replace(/[&<>"'\/\\]/g, function (match) {
          return replaceMap[match];
        });
      };

      // Append an array of jQuery nodes to a given element.
      Utils.appendMany = function ($element, $nodes) {
        // jQuery 1.7.x does not support $.fn.append() with an array
        // Fall back to a jQuery object collection using $.fn.add()
        if ($.fn.jquery.substr(0, 3) === '1.7') {
          var $jqNodes = $();
          $.map($nodes, function (node) {
            $jqNodes = $jqNodes.add(node);
          });
          $nodes = $jqNodes;
        }
        $element.append($nodes);
      };

      // Cache objects in Utils.__cache instead of $.data (see #4346)
      Utils.__cache = {};
      var id = 0;
      Utils.GetUniqueElementId = function (element) {
        // Get a unique element Id. If element has no id, 
        // creates a new unique number, stores it in the id 
        // attribute and returns the new id. 
        // If an id already exists, it simply returns it.

        var select2Id = element.getAttribute('data-select2-id');
        if (select2Id == null) {
          // If element has id, use it.
          if (element.id) {
            select2Id = element.id;
            element.setAttribute('data-select2-id', select2Id);
          } else {
            element.setAttribute('data-select2-id', ++id);
            select2Id = id.toString();
          }
        }
        return select2Id;
      };
      Utils.StoreData = function (element, name, value) {
        // Stores an item in the cache for a specified element.
        // name is the cache key.    
        var id = Utils.GetUniqueElementId(element);
        if (!Utils.__cache[id]) {
          Utils.__cache[id] = {};
        }
        Utils.__cache[id][name] = value;
      };
      Utils.GetData = function (element, name) {
        // Retrieves a value from the cache by its key (name)
        // name is optional. If no name specified, return 
        // all cache items for the specified element.
        // and for a specified element.
        var id = Utils.GetUniqueElementId(element);
        if (name) {
          if (Utils.__cache[id]) {
            return Utils.__cache[id][name] != null ? Utils.__cache[id][name] : $(element).data(name); // Fallback to HTML5 data attribs.
          }
          return $(element).data(name); // Fallback to HTML5 data attribs.
        } else {
          return Utils.__cache[id];
        }
      };
      Utils.RemoveData = function (element) {
        // Removes all cached items for a specified element.
        var id = Utils.GetUniqueElementId(element);
        if (Utils.__cache[id] != null) {
          delete Utils.__cache[id];
        }
      };
      return Utils;
    });
    S2.define('select2/results', ['jquery', './utils'], function ($, Utils) {
      function Results($element, options, dataAdapter) {
        this.$element = $element;
        this.data = dataAdapter;
        this.options = options;
        Results.__super__.constructor.call(this);
      }
      Utils.Extend(Results, Utils.Observable);
      Results.prototype.render = function () {
        var $results = $('<ul class="select2-results__options" role="tree"></ul>');
        if (this.options.get('multiple')) {
          $results.attr('aria-multiselectable', 'true');
        }
        this.$results = $results;
        return $results;
      };
      Results.prototype.clear = function () {
        this.$results.empty();
      };
      Results.prototype.displayMessage = function (params) {
        var escapeMarkup = this.options.get('escapeMarkup');
        this.clear();
        this.hideLoading();
        var $message = $('<li role="treeitem" aria-live="assertive"' + ' class="select2-results__option"></li>');
        var message = this.options.get('translations').get(params.message);
        $message.append(escapeMarkup(message(params.args)));
        $message[0].className += ' select2-results__message';
        this.$results.append($message);
      };
      Results.prototype.hideMessages = function () {
        this.$results.find('.select2-results__message').remove();
      };
      Results.prototype.append = function (data) {
        this.hideLoading();
        var $options = [];
        if (data.results == null || data.results.length === 0) {
          if (this.$results.children().length === 0) {
            this.trigger('results:message', {
              message: 'noResults'
            });
          }
          return;
        }
        data.results = this.sort(data.results);
        for (var d = 0; d < data.results.length; d++) {
          var item = data.results[d];
          var $option = this.option(item);
          $options.push($option);
        }
        this.$results.append($options);
      };
      Results.prototype.position = function ($results, $dropdown) {
        var $resultsContainer = $dropdown.find('.select2-results');
        $resultsContainer.append($results);
      };
      Results.prototype.sort = function (data) {
        var sorter = this.options.get('sorter');
        return sorter(data);
      };
      Results.prototype.highlightFirstItem = function () {
        var $options = this.$results.find('.select2-results__option[aria-selected]');
        var $selected = $options.filter('[aria-selected=true]');

        // Check if there are any selected options
        if ($selected.length > 0) {
          // If there are selected options, highlight the first
          $selected.first().trigger('mouseenter');
        } else {
          // If there are no selected options, highlight the first option
          // in the dropdown
          $options.first().trigger('mouseenter');
        }
        this.ensureHighlightVisible();
      };
      Results.prototype.setClasses = function () {
        var self = this;
        this.data.current(function (selected) {
          var selectedIds = $.map(selected, function (s) {
            return s.id.toString();
          });
          var $options = self.$results.find('.select2-results__option[aria-selected]');
          $options.each(function () {
            var $option = $(this);
            var item = Utils.GetData(this, 'data');

            // id needs to be converted to a string when comparing
            var id = '' + item.id;
            if (item.element != null && item.element.selected || item.element == null && $.inArray(id, selectedIds) > -1) {
              $option.attr('aria-selected', 'true');
            } else {
              $option.attr('aria-selected', 'false');
            }
          });
        });
      };
      Results.prototype.showLoading = function (params) {
        this.hideLoading();
        var loadingMore = this.options.get('translations').get('searching');
        var loading = {
          disabled: true,
          loading: true,
          text: loadingMore(params)
        };
        var $loading = this.option(loading);
        $loading.className += ' loading-results';
        this.$results.prepend($loading);
      };
      Results.prototype.hideLoading = function () {
        this.$results.find('.loading-results').remove();
      };
      Results.prototype.option = function (data) {
        var option = document.createElement('li');
        option.className = 'select2-results__option';
        var attrs = {
          'role': 'treeitem',
          'aria-selected': 'false'
        };
        if (data.disabled) {
          delete attrs['aria-selected'];
          attrs['aria-disabled'] = 'true';
        }
        if (data.id == null) {
          delete attrs['aria-selected'];
        }
        if (data._resultId != null) {
          option.id = data._resultId;
        }
        if (data.title) {
          option.title = data.title;
        }
        if (data.children) {
          attrs.role = 'group';
          attrs['aria-label'] = data.text;
          delete attrs['aria-selected'];
        }
        for (var attr in attrs) {
          var val = attrs[attr];
          option.setAttribute(attr, val);
        }
        if (data.children) {
          var $option = $(option);
          var label = document.createElement('strong');
          label.className = 'select2-results__group';
          var $label = $(label);
          this.template(data, label);
          var $children = [];
          for (var c = 0; c < data.children.length; c++) {
            var child = data.children[c];
            var $child = this.option(child);
            $children.push($child);
          }
          var $childrenContainer = $('<ul></ul>', {
            'class': 'select2-results__options select2-results__options--nested'
          });
          $childrenContainer.append($children);
          $option.append(label);
          $option.append($childrenContainer);
        } else {
          this.template(data, option);
        }
        Utils.StoreData(option, 'data', data);
        return option;
      };
      Results.prototype.bind = function (container, $container) {
        var self = this;
        var id = container.id + '-results';
        this.$results.attr('id', id);
        container.on('results:all', function (params) {
          self.clear();
          self.append(params.data);
          if (container.isOpen()) {
            self.setClasses();
            self.highlightFirstItem();
          }
        });
        container.on('results:append', function (params) {
          self.append(params.data);
          if (container.isOpen()) {
            self.setClasses();
          }
        });
        container.on('query', function (params) {
          self.hideMessages();
          self.showLoading(params);
        });
        container.on('select', function () {
          if (!container.isOpen()) {
            return;
          }
          self.setClasses();
          self.highlightFirstItem();
        });
        container.on('unselect', function () {
          if (!container.isOpen()) {
            return;
          }
          self.setClasses();
          self.highlightFirstItem();
        });
        container.on('open', function () {
          // When the dropdown is open, aria-expended="true"
          self.$results.attr('aria-expanded', 'true');
          self.$results.attr('aria-hidden', 'false');
          self.setClasses();
          self.ensureHighlightVisible();
        });
        container.on('close', function () {
          // When the dropdown is closed, aria-expended="false"
          self.$results.attr('aria-expanded', 'false');
          self.$results.attr('aria-hidden', 'true');
          self.$results.removeAttr('aria-activedescendant');
        });
        container.on('results:toggle', function () {
          var $highlighted = self.getHighlightedResults();
          if ($highlighted.length === 0) {
            return;
          }
          $highlighted.trigger('mouseup');
        });
        container.on('results:select', function () {
          var $highlighted = self.getHighlightedResults();
          if ($highlighted.length === 0) {
            return;
          }
          var data = Utils.GetData($highlighted[0], 'data');
          if ($highlighted.attr('aria-selected') == 'true') {
            self.trigger('close', {});
          } else {
            self.trigger('select', {
              data: data
            });
          }
        });
        container.on('results:previous', function () {
          var $highlighted = self.getHighlightedResults();
          var $options = self.$results.find('[aria-selected]');
          var currentIndex = $options.index($highlighted);

          // If we are already at te top, don't move further
          // If no options, currentIndex will be -1
          if (currentIndex <= 0) {
            return;
          }
          var nextIndex = currentIndex - 1;

          // If none are highlighted, highlight the first
          if ($highlighted.length === 0) {
            nextIndex = 0;
          }
          var $next = $options.eq(nextIndex);
          $next.trigger('mouseenter');
          var currentOffset = self.$results.offset().top;
          var nextTop = $next.offset().top;
          var nextOffset = self.$results.scrollTop() + (nextTop - currentOffset);
          if (nextIndex === 0) {
            self.$results.scrollTop(0);
          } else if (nextTop - currentOffset < 0) {
            self.$results.scrollTop(nextOffset);
          }
        });
        container.on('results:next', function () {
          var $highlighted = self.getHighlightedResults();
          var $options = self.$results.find('[aria-selected]');
          var currentIndex = $options.index($highlighted);
          var nextIndex = currentIndex + 1;

          // If we are at the last option, stay there
          if (nextIndex >= $options.length) {
            return;
          }
          var $next = $options.eq(nextIndex);
          $next.trigger('mouseenter');
          var currentOffset = self.$results.offset().top + self.$results.outerHeight(false);
          var nextBottom = $next.offset().top + $next.outerHeight(false);
          var nextOffset = self.$results.scrollTop() + nextBottom - currentOffset;
          if (nextIndex === 0) {
            self.$results.scrollTop(0);
          } else if (nextBottom > currentOffset) {
            self.$results.scrollTop(nextOffset);
          }
        });
        container.on('results:focus', function (params) {
          params.element.addClass('select2-results__option--highlighted');
        });
        container.on('results:message', function (params) {
          self.displayMessage(params);
        });
        if ($.fn.mousewheel) {
          this.$results.on('mousewheel', function (e) {
            var top = self.$results.scrollTop();
            var bottom = self.$results.get(0).scrollHeight - top + e.deltaY;
            var isAtTop = e.deltaY > 0 && top - e.deltaY <= 0;
            var isAtBottom = e.deltaY < 0 && bottom <= self.$results.height();
            if (isAtTop) {
              self.$results.scrollTop(0);
              e.preventDefault();
              e.stopPropagation();
            } else if (isAtBottom) {
              self.$results.scrollTop(self.$results.get(0).scrollHeight - self.$results.height());
              e.preventDefault();
              e.stopPropagation();
            }
          });
        }
        this.$results.on('mouseup', '.select2-results__option[aria-selected]', function (evt) {
          var $this = $(this);
          var data = Utils.GetData(this, 'data');
          if ($this.attr('aria-selected') === 'true') {
            if (self.options.get('multiple')) {
              self.trigger('unselect', {
                originalEvent: evt,
                data: data
              });
            } else {
              self.trigger('close', {});
            }
            return;
          }
          self.trigger('select', {
            originalEvent: evt,
            data: data
          });
        });
        this.$results.on('mouseenter', '.select2-results__option[aria-selected]', function (evt) {
          var data = Utils.GetData(this, 'data');
          self.getHighlightedResults().removeClass('select2-results__option--highlighted');
          self.trigger('results:focus', {
            data: data,
            element: $(this)
          });
        });
      };
      Results.prototype.getHighlightedResults = function () {
        var $highlighted = this.$results.find('.select2-results__option--highlighted');
        return $highlighted;
      };
      Results.prototype.destroy = function () {
        this.$results.remove();
      };
      Results.prototype.ensureHighlightVisible = function () {
        var $highlighted = this.getHighlightedResults();
        if ($highlighted.length === 0) {
          return;
        }
        var $options = this.$results.find('[aria-selected]');
        var currentIndex = $options.index($highlighted);
        var currentOffset = this.$results.offset().top;
        var nextTop = $highlighted.offset().top;
        var nextOffset = this.$results.scrollTop() + (nextTop - currentOffset);
        var offsetDelta = nextTop - currentOffset;
        nextOffset -= $highlighted.outerHeight(false) * 2;
        if (currentIndex <= 2) {
          this.$results.scrollTop(0);
        } else if (offsetDelta > this.$results.outerHeight() || offsetDelta < 0) {
          this.$results.scrollTop(nextOffset);
        }
      };
      Results.prototype.template = function (result, container) {
        var template = this.options.get('templateResult');
        var escapeMarkup = this.options.get('escapeMarkup');
        var content = template(result, container);
        if (content == null) {
          container.style.display = 'none';
        } else if (typeof content === 'string') {
          container.innerHTML = escapeMarkup(content);
        } else {
          $(container).append(content);
        }
      };
      return Results;
    });
    S2.define('select2/keys', [], function () {
      var KEYS = {
        BACKSPACE: 8,
        TAB: 9,
        ENTER: 13,
        SHIFT: 16,
        CTRL: 17,
        ALT: 18,
        ESC: 27,
        SPACE: 32,
        PAGE_UP: 33,
        PAGE_DOWN: 34,
        END: 35,
        HOME: 36,
        LEFT: 37,
        UP: 38,
        RIGHT: 39,
        DOWN: 40,
        DELETE: 46
      };
      return KEYS;
    });
    S2.define('select2/selection/base', ['jquery', '../utils', '../keys'], function ($, Utils, KEYS) {
      function BaseSelection($element, options) {
        this.$element = $element;
        this.options = options;
        BaseSelection.__super__.constructor.call(this);
      }
      Utils.Extend(BaseSelection, Utils.Observable);
      BaseSelection.prototype.render = function () {
        var $selection = $('<span class="select2-selection" role="combobox" ' + ' aria-haspopup="true" aria-expanded="false">' + '</span>');
        this._tabindex = 0;
        if (Utils.GetData(this.$element[0], 'old-tabindex') != null) {
          this._tabindex = Utils.GetData(this.$element[0], 'old-tabindex');
        } else if (this.$element.attr('tabindex') != null) {
          this._tabindex = this.$element.attr('tabindex');
        }
        $selection.attr('title', this.$element.attr('title'));
        $selection.attr('tabindex', this._tabindex);
        this.$selection = $selection;
        return $selection;
      };
      BaseSelection.prototype.bind = function (container, $container) {
        var self = this;
        var id = container.id + '-container';
        var resultsId = container.id + '-results';
        this.container = container;
        this.$selection.on('focus', function (evt) {
          self.trigger('focus', evt);
        });
        this.$selection.on('blur', function (evt) {
          self._handleBlur(evt);
        });
        this.$selection.on('keydown', function (evt) {
          self.trigger('keypress', evt);
          if (evt.which === KEYS.SPACE) {
            evt.preventDefault();
          }
        });
        container.on('results:focus', function (params) {
          self.$selection.attr('aria-activedescendant', params.data._resultId);
        });
        container.on('selection:update', function (params) {
          self.update(params.data);
        });
        container.on('open', function () {
          // When the dropdown is open, aria-expanded="true"
          self.$selection.attr('aria-expanded', 'true');
          self.$selection.attr('aria-owns', resultsId);
          self._attachCloseHandler(container);
        });
        container.on('close', function () {
          // When the dropdown is closed, aria-expanded="false"
          self.$selection.attr('aria-expanded', 'false');
          self.$selection.removeAttr('aria-activedescendant');
          self.$selection.removeAttr('aria-owns');
          self.$selection.focus();
          window.setTimeout(function () {
            self.$selection.focus();
          }, 0);
          self._detachCloseHandler(container);
        });
        container.on('enable', function () {
          self.$selection.attr('tabindex', self._tabindex);
        });
        container.on('disable', function () {
          self.$selection.attr('tabindex', '-1');
        });
      };
      BaseSelection.prototype._handleBlur = function (evt) {
        var self = this;

        // This needs to be delayed as the active element is the body when the tab
        // key is pressed, possibly along with others.
        window.setTimeout(function () {
          // Don't trigger `blur` if the focus is still in the selection
          if (document.activeElement == self.$selection[0] || $.contains(self.$selection[0], document.activeElement)) {
            return;
          }
          self.trigger('blur', evt);
        }, 1);
      };
      BaseSelection.prototype._attachCloseHandler = function (container) {
        var self = this;
        $(document.body).on('mousedown.select2.' + container.id, function (e) {
          var $target = $(e.target);
          var $select = $target.closest('.select2');
          var $all = $('.select2.select2-container--open');
          $all.each(function () {
            var $this = $(this);
            if (this == $select[0]) {
              return;
            }
            var $element = Utils.GetData(this, 'element');
            $element.select2('close');
          });
        });
      };
      BaseSelection.prototype._detachCloseHandler = function (container) {
        $(document.body).off('mousedown.select2.' + container.id);
      };
      BaseSelection.prototype.position = function ($selection, $container) {
        var $selectionContainer = $container.find('.selection');
        $selectionContainer.append($selection);
      };
      BaseSelection.prototype.destroy = function () {
        this._detachCloseHandler(this.container);
      };
      BaseSelection.prototype.update = function (data) {
        throw new Error('The `update` method must be defined in child classes.');
      };
      return BaseSelection;
    });
    S2.define('select2/selection/single', ['jquery', './base', '../utils', '../keys'], function ($, BaseSelection, Utils, KEYS) {
      function SingleSelection() {
        SingleSelection.__super__.constructor.apply(this, arguments);
      }
      Utils.Extend(SingleSelection, BaseSelection);
      SingleSelection.prototype.render = function () {
        var $selection = SingleSelection.__super__.render.call(this);
        $selection.addClass('select2-selection--single');
        $selection.html('<span class="select2-selection__rendered"></span>' + '<span class="select2-selection__arrow" role="presentation">' + '<b role="presentation"></b>' + '</span>');
        return $selection;
      };
      SingleSelection.prototype.bind = function (container, $container) {
        var self = this;
        SingleSelection.__super__.bind.apply(this, arguments);
        var id = container.id + '-container';
        this.$selection.find('.select2-selection__rendered').attr('id', id).attr('role', 'textbox').attr('aria-readonly', 'true');
        this.$selection.attr('aria-labelledby', id);
        this.$selection.on('mousedown', function (evt) {
          // Only respond to left clicks
          if (evt.which !== 1) {
            return;
          }
          self.trigger('toggle', {
            originalEvent: evt
          });
        });
        this.$selection.on('focus', function (evt) {
          // User focuses on the container
        });
        this.$selection.on('blur', function (evt) {
          // User exits the container
        });
        container.on('focus', function (evt) {
          if (!container.isOpen()) {
            self.$selection.focus();
          }
        });
      };
      SingleSelection.prototype.clear = function () {
        var $rendered = this.$selection.find('.select2-selection__rendered');
        $rendered.empty();
        $rendered.removeAttr('title'); // clear tooltip on empty
      };
      SingleSelection.prototype.display = function (data, container) {
        var template = this.options.get('templateSelection');
        var escapeMarkup = this.options.get('escapeMarkup');
        return escapeMarkup(template(data, container));
      };
      SingleSelection.prototype.selectionContainer = function () {
        return $('<span></span>');
      };
      SingleSelection.prototype.update = function (data) {
        if (data.length === 0) {
          this.clear();
          return;
        }
        var selection = data[0];
        var $rendered = this.$selection.find('.select2-selection__rendered');
        var formatted = this.display(selection, $rendered);
        $rendered.empty().append(formatted);
        $rendered.attr('title', selection.title || selection.text);
      };
      return SingleSelection;
    });
    S2.define('select2/selection/multiple', ['jquery', './base', '../utils'], function ($, BaseSelection, Utils) {
      function MultipleSelection($element, options) {
        MultipleSelection.__super__.constructor.apply(this, arguments);
      }
      Utils.Extend(MultipleSelection, BaseSelection);
      MultipleSelection.prototype.render = function () {
        var $selection = MultipleSelection.__super__.render.call(this);
        $selection.addClass('select2-selection--multiple');
        $selection.html('<ul class="select2-selection__rendered"></ul>');
        return $selection;
      };
      MultipleSelection.prototype.bind = function (container, $container) {
        var self = this;
        MultipleSelection.__super__.bind.apply(this, arguments);
        this.$selection.on('click', function (evt) {
          self.trigger('toggle', {
            originalEvent: evt
          });
        });
        this.$selection.on('click', '.select2-selection__choice__remove', function (evt) {
          // Ignore the event if it is disabled
          if (self.options.get('disabled')) {
            return;
          }
          var $remove = $(this);
          var $selection = $remove.parent();
          var data = Utils.GetData($selection[0], 'data');
          self.trigger('unselect', {
            originalEvent: evt,
            data: data
          });
        });
      };
      MultipleSelection.prototype.clear = function () {
        var $rendered = this.$selection.find('.select2-selection__rendered');
        $rendered.empty();
        $rendered.removeAttr('title');
      };
      MultipleSelection.prototype.display = function (data, container) {
        var template = this.options.get('templateSelection');
        var escapeMarkup = this.options.get('escapeMarkup');
        return escapeMarkup(template(data, container));
      };
      MultipleSelection.prototype.selectionContainer = function () {
        var $container = $('<li class="select2-selection__choice">' + '<span class="select2-selection__choice__remove" role="presentation">' + '&times;' + '</span>' + '</li>');
        return $container;
      };
      MultipleSelection.prototype.update = function (data) {
        this.clear();
        if (data.length === 0) {
          return;
        }
        var $selections = [];
        for (var d = 0; d < data.length; d++) {
          var selection = data[d];
          var $selection = this.selectionContainer();
          var formatted = this.display(selection, $selection);
          $selection.append(formatted);
          $selection.attr('title', selection.title || selection.text);
          Utils.StoreData($selection[0], 'data', selection);
          $selections.push($selection);
        }
        var $rendered = this.$selection.find('.select2-selection__rendered');
        Utils.appendMany($rendered, $selections);
      };
      return MultipleSelection;
    });
    S2.define('select2/selection/placeholder', ['../utils'], function (Utils) {
      function Placeholder(decorated, $element, options) {
        this.placeholder = this.normalizePlaceholder(options.get('placeholder'));
        decorated.call(this, $element, options);
      }
      Placeholder.prototype.normalizePlaceholder = function (_, placeholder) {
        if (typeof placeholder === 'string') {
          placeholder = {
            id: '',
            text: placeholder
          };
        }
        return placeholder;
      };
      Placeholder.prototype.createPlaceholder = function (decorated, placeholder) {
        var $placeholder = this.selectionContainer();
        $placeholder.html(this.display(placeholder));
        $placeholder.addClass('select2-selection__placeholder').removeClass('select2-selection__choice');
        return $placeholder;
      };
      Placeholder.prototype.update = function (decorated, data) {
        var singlePlaceholder = data.length == 1 && data[0].id != this.placeholder.id;
        var multipleSelections = data.length > 1;
        if (multipleSelections || singlePlaceholder) {
          return decorated.call(this, data);
        }
        this.clear();
        var $placeholder = this.createPlaceholder(this.placeholder);
        this.$selection.find('.select2-selection__rendered').append($placeholder);
      };
      return Placeholder;
    });
    S2.define('select2/selection/allowClear', ['jquery', '../keys', '../utils'], function ($, KEYS, Utils) {
      function AllowClear() {}
      AllowClear.prototype.bind = function (decorated, container, $container) {
        var self = this;
        decorated.call(this, container, $container);
        if (this.placeholder == null) {
          if (this.options.get('debug') && window.console && console.error) {
            console.error('Select2: The `allowClear` option should be used in combination ' + 'with the `placeholder` option.');
          }
        }
        this.$selection.on('mousedown', '.select2-selection__clear', function (evt) {
          self._handleClear(evt);
        });
        container.on('keypress', function (evt) {
          self._handleKeyboardClear(evt, container);
        });
      };
      AllowClear.prototype._handleClear = function (_, evt) {
        // Ignore the event if it is disabled
        if (this.options.get('disabled')) {
          return;
        }
        var $clear = this.$selection.find('.select2-selection__clear');

        // Ignore the event if nothing has been selected
        if ($clear.length === 0) {
          return;
        }
        evt.stopPropagation();
        var data = Utils.GetData($clear[0], 'data');
        var previousVal = this.$element.val();
        this.$element.val(this.placeholder.id);
        var unselectData = {
          data: data
        };
        this.trigger('clear', unselectData);
        if (unselectData.prevented) {
          this.$element.val(previousVal);
          return;
        }
        for (var d = 0; d < data.length; d++) {
          unselectData = {
            data: data[d]
          };

          // Trigger the `unselect` event, so people can prevent it from being
          // cleared.
          this.trigger('unselect', unselectData);

          // If the event was prevented, don't clear it out.
          if (unselectData.prevented) {
            this.$element.val(previousVal);
            return;
          }
        }
        this.$element.trigger('change');
        this.trigger('toggle', {});
      };
      AllowClear.prototype._handleKeyboardClear = function (_, evt, container) {
        if (container.isOpen()) {
          return;
        }
        if (evt.which == KEYS.DELETE || evt.which == KEYS.BACKSPACE) {
          this._handleClear(evt);
        }
      };
      AllowClear.prototype.update = function (decorated, data) {
        decorated.call(this, data);
        if (this.$selection.find('.select2-selection__placeholder').length > 0 || data.length === 0) {
          return;
        }
        var $remove = $('<span class="select2-selection__clear">' + '&times;' + '</span>');
        Utils.StoreData($remove[0], 'data', data);
        this.$selection.find('.select2-selection__rendered').prepend($remove);
      };
      return AllowClear;
    });
    S2.define('select2/selection/search', ['jquery', '../utils', '../keys'], function ($, Utils, KEYS) {
      function Search(decorated, $element, options) {
        decorated.call(this, $element, options);
      }
      Search.prototype.render = function (decorated) {
        var $search = $('<li class="select2-search select2-search--inline">' + '<input class="select2-search__field" type="search" tabindex="-1"' + ' autocomplete="off" autocorrect="off" autocapitalize="none"' + ' spellcheck="false" role="textbox" aria-autocomplete="list" />' + '</li>');
        this.$searchContainer = $search;
        this.$search = $search.find('input');
        var $rendered = decorated.call(this);
        this._transferTabIndex();
        return $rendered;
      };
      Search.prototype.bind = function (decorated, container, $container) {
        var self = this;
        decorated.call(this, container, $container);
        container.on('open', function () {
          self.$search.trigger('focus');
        });
        container.on('close', function () {
          self.$search.val('');
          self.$search.removeAttr('aria-activedescendant');
          self.$search.trigger('focus');
        });
        container.on('enable', function () {
          self.$search.prop('disabled', false);
          self._transferTabIndex();
        });
        container.on('disable', function () {
          self.$search.prop('disabled', true);
        });
        container.on('focus', function (evt) {
          self.$search.trigger('focus');
        });
        container.on('results:focus', function (params) {
          self.$search.attr('aria-activedescendant', params.id);
        });
        this.$selection.on('focusin', '.select2-search--inline', function (evt) {
          self.trigger('focus', evt);
        });
        this.$selection.on('focusout', '.select2-search--inline', function (evt) {
          self._handleBlur(evt);
        });
        this.$selection.on('keydown', '.select2-search--inline', function (evt) {
          evt.stopPropagation();
          self.trigger('keypress', evt);
          self._keyUpPrevented = evt.isDefaultPrevented();
          var key = evt.which;
          if (key === KEYS.BACKSPACE && self.$search.val() === '') {
            var $previousChoice = self.$searchContainer.prev('.select2-selection__choice');
            if ($previousChoice.length > 0) {
              var item = Utils.GetData($previousChoice[0], 'data');
              self.searchRemoveChoice(item);
              evt.preventDefault();
            }
          }
        });

        // Try to detect the IE version should the `documentMode` property that
        // is stored on the document. This is only implemented in IE and is
        // slightly cleaner than doing a user agent check.
        // This property is not available in Edge, but Edge also doesn't have
        // this bug.
        var msie = document.documentMode;
        var disableInputEvents = msie && msie <= 11;

        // Workaround for browsers which do not support the `input` event
        // This will prevent double-triggering of events for browsers which support
        // both the `keyup` and `input` events.
        this.$selection.on('input.searchcheck', '.select2-search--inline', function (evt) {
          // IE will trigger the `input` event when a placeholder is used on a
          // search box. To get around this issue, we are forced to ignore all
          // `input` events in IE and keep using `keyup`.
          if (disableInputEvents) {
            self.$selection.off('input.search input.searchcheck');
            return;
          }

          // Unbind the duplicated `keyup` event
          self.$selection.off('keyup.search');
        });
        this.$selection.on('keyup.search input.search', '.select2-search--inline', function (evt) {
          // IE will trigger the `input` event when a placeholder is used on a
          // search box. To get around this issue, we are forced to ignore all
          // `input` events in IE and keep using `keyup`.
          if (disableInputEvents && evt.type === 'input') {
            self.$selection.off('input.search input.searchcheck');
            return;
          }
          var key = evt.which;

          // We can freely ignore events from modifier keys
          if (key == KEYS.SHIFT || key == KEYS.CTRL || key == KEYS.ALT) {
            return;
          }

          // Tabbing will be handled during the `keydown` phase
          if (key == KEYS.TAB) {
            return;
          }
          self.handleSearch(evt);
        });
      };

      /**
       * This method will transfer the tabindex attribute from the rendered
       * selection to the search box. This allows for the search box to be used as
       * the primary focus instead of the selection container.
       *
       * @private
       */
      Search.prototype._transferTabIndex = function (decorated) {
        this.$search.attr('tabindex', this.$selection.attr('tabindex'));
        this.$selection.attr('tabindex', '-1');
      };
      Search.prototype.createPlaceholder = function (decorated, placeholder) {
        this.$search.attr('placeholder', placeholder.text);
      };
      Search.prototype.update = function (decorated, data) {
        var searchHadFocus = this.$search[0] == document.activeElement;
        this.$search.attr('placeholder', '');
        decorated.call(this, data);
        this.$selection.find('.select2-selection__rendered').append(this.$searchContainer);
        this.resizeSearch();
        if (searchHadFocus) {
          var isTagInput = this.$element.find('[data-select2-tag]').length;
          if (isTagInput) {
            // fix IE11 bug where tag input lost focus
            this.$element.focus();
          } else {
            this.$search.focus();
          }
        }
      };
      Search.prototype.handleSearch = function () {
        this.resizeSearch();
        if (!this._keyUpPrevented) {
          var input = this.$search.val();
          this.trigger('query', {
            term: input
          });
        }
        this._keyUpPrevented = false;
      };
      Search.prototype.searchRemoveChoice = function (decorated, item) {
        this.trigger('unselect', {
          data: item
        });
        this.$search.val(item.text);
        this.handleSearch();
      };
      Search.prototype.resizeSearch = function () {
        this.$search.css('width', '25px');
        var width = '';
        if (this.$search.attr('placeholder') !== '') {
          width = this.$selection.find('.select2-selection__rendered').innerWidth();
        } else {
          var minimumWidth = this.$search.val().length + 1;
          width = minimumWidth * 0.75 + 'em';
        }
        this.$search.css('width', width);
      };
      return Search;
    });
    S2.define('select2/selection/eventRelay', ['jquery'], function ($) {
      function EventRelay() {}
      EventRelay.prototype.bind = function (decorated, container, $container) {
        var self = this;
        var relayEvents = ['open', 'opening', 'close', 'closing', 'select', 'selecting', 'unselect', 'unselecting', 'clear', 'clearing'];
        var preventableEvents = ['opening', 'closing', 'selecting', 'unselecting', 'clearing'];
        decorated.call(this, container, $container);
        container.on('*', function (name, params) {
          // Ignore events that should not be relayed
          if ($.inArray(name, relayEvents) === -1) {
            return;
          }

          // The parameters should always be an object
          params = params || {};

          // Generate the jQuery event for the Select2 event
          var evt = $.Event('select2:' + name, {
            params: params
          });
          self.$element.trigger(evt);

          // Only handle preventable events if it was one
          if ($.inArray(name, preventableEvents) === -1) {
            return;
          }
          params.prevented = evt.isDefaultPrevented();
        });
      };
      return EventRelay;
    });
    S2.define('select2/translation', ['jquery', 'require'], function ($, require) {
      function Translation(dict) {
        this.dict = dict || {};
      }
      Translation.prototype.all = function () {
        return this.dict;
      };
      Translation.prototype.get = function (key) {
        return this.dict[key];
      };
      Translation.prototype.extend = function (translation) {
        this.dict = $.extend({}, translation.all(), this.dict);
      };

      // Static functions

      Translation._cache = {};
      Translation.loadPath = function (path) {
        if (!(path in Translation._cache)) {
          var translations = require(path);
          Translation._cache[path] = translations;
        }
        return new Translation(Translation._cache[path]);
      };
      return Translation;
    });
    S2.define('select2/diacritics', [], function () {
      var diacritics = {
        "\u24B6": 'A',
        "\uFF21": 'A',
        "\xC0": 'A',
        "\xC1": 'A',
        "\xC2": 'A',
        "\u1EA6": 'A',
        "\u1EA4": 'A',
        "\u1EAA": 'A',
        "\u1EA8": 'A',
        "\xC3": 'A',
        "\u0100": 'A',
        "\u0102": 'A',
        "\u1EB0": 'A',
        "\u1EAE": 'A',
        "\u1EB4": 'A',
        "\u1EB2": 'A',
        "\u0226": 'A',
        "\u01E0": 'A',
        "\xC4": 'A',
        "\u01DE": 'A',
        "\u1EA2": 'A',
        "\xC5": 'A',
        "\u01FA": 'A',
        "\u01CD": 'A',
        "\u0200": 'A',
        "\u0202": 'A',
        "\u1EA0": 'A',
        "\u1EAC": 'A',
        "\u1EB6": 'A',
        "\u1E00": 'A',
        "\u0104": 'A',
        "\u023A": 'A',
        "\u2C6F": 'A',
        "\uA732": 'AA',
        "\xC6": 'AE',
        "\u01FC": 'AE',
        "\u01E2": 'AE',
        "\uA734": 'AO',
        "\uA736": 'AU',
        "\uA738": 'AV',
        "\uA73A": 'AV',
        "\uA73C": 'AY',
        "\u24B7": 'B',
        "\uFF22": 'B',
        "\u1E02": 'B',
        "\u1E04": 'B',
        "\u1E06": 'B',
        "\u0243": 'B',
        "\u0182": 'B',
        "\u0181": 'B',
        "\u24B8": 'C',
        "\uFF23": 'C',
        "\u0106": 'C',
        "\u0108": 'C',
        "\u010A": 'C',
        "\u010C": 'C',
        "\xC7": 'C',
        "\u1E08": 'C',
        "\u0187": 'C',
        "\u023B": 'C',
        "\uA73E": 'C',
        "\u24B9": 'D',
        "\uFF24": 'D',
        "\u1E0A": 'D',
        "\u010E": 'D',
        "\u1E0C": 'D',
        "\u1E10": 'D',
        "\u1E12": 'D',
        "\u1E0E": 'D',
        "\u0110": 'D',
        "\u018B": 'D',
        "\u018A": 'D',
        "\u0189": 'D',
        "\uA779": 'D',
        "\u01F1": 'DZ',
        "\u01C4": 'DZ',
        "\u01F2": 'Dz',
        "\u01C5": 'Dz',
        "\u24BA": 'E',
        "\uFF25": 'E',
        "\xC8": 'E',
        "\xC9": 'E',
        "\xCA": 'E',
        "\u1EC0": 'E',
        "\u1EBE": 'E',
        "\u1EC4": 'E',
        "\u1EC2": 'E',
        "\u1EBC": 'E',
        "\u0112": 'E',
        "\u1E14": 'E',
        "\u1E16": 'E',
        "\u0114": 'E',
        "\u0116": 'E',
        "\xCB": 'E',
        "\u1EBA": 'E',
        "\u011A": 'E',
        "\u0204": 'E',
        "\u0206": 'E',
        "\u1EB8": 'E',
        "\u1EC6": 'E',
        "\u0228": 'E',
        "\u1E1C": 'E',
        "\u0118": 'E',
        "\u1E18": 'E',
        "\u1E1A": 'E',
        "\u0190": 'E',
        "\u018E": 'E',
        "\u24BB": 'F',
        "\uFF26": 'F',
        "\u1E1E": 'F',
        "\u0191": 'F',
        "\uA77B": 'F',
        "\u24BC": 'G',
        "\uFF27": 'G',
        "\u01F4": 'G',
        "\u011C": 'G',
        "\u1E20": 'G',
        "\u011E": 'G',
        "\u0120": 'G',
        "\u01E6": 'G',
        "\u0122": 'G',
        "\u01E4": 'G',
        "\u0193": 'G',
        "\uA7A0": 'G',
        "\uA77D": 'G',
        "\uA77E": 'G',
        "\u24BD": 'H',
        "\uFF28": 'H',
        "\u0124": 'H',
        "\u1E22": 'H',
        "\u1E26": 'H',
        "\u021E": 'H',
        "\u1E24": 'H',
        "\u1E28": 'H',
        "\u1E2A": 'H',
        "\u0126": 'H',
        "\u2C67": 'H',
        "\u2C75": 'H',
        "\uA78D": 'H',
        "\u24BE": 'I',
        "\uFF29": 'I',
        "\xCC": 'I',
        "\xCD": 'I',
        "\xCE": 'I',
        "\u0128": 'I',
        "\u012A": 'I',
        "\u012C": 'I',
        "\u0130": 'I',
        "\xCF": 'I',
        "\u1E2E": 'I',
        "\u1EC8": 'I',
        "\u01CF": 'I',
        "\u0208": 'I',
        "\u020A": 'I',
        "\u1ECA": 'I',
        "\u012E": 'I',
        "\u1E2C": 'I',
        "\u0197": 'I',
        "\u24BF": 'J',
        "\uFF2A": 'J',
        "\u0134": 'J',
        "\u0248": 'J',
        "\u24C0": 'K',
        "\uFF2B": 'K',
        "\u1E30": 'K',
        "\u01E8": 'K',
        "\u1E32": 'K',
        "\u0136": 'K',
        "\u1E34": 'K',
        "\u0198": 'K',
        "\u2C69": 'K',
        "\uA740": 'K',
        "\uA742": 'K',
        "\uA744": 'K',
        "\uA7A2": 'K',
        "\u24C1": 'L',
        "\uFF2C": 'L',
        "\u013F": 'L',
        "\u0139": 'L',
        "\u013D": 'L',
        "\u1E36": 'L',
        "\u1E38": 'L',
        "\u013B": 'L',
        "\u1E3C": 'L',
        "\u1E3A": 'L',
        "\u0141": 'L',
        "\u023D": 'L',
        "\u2C62": 'L',
        "\u2C60": 'L',
        "\uA748": 'L',
        "\uA746": 'L',
        "\uA780": 'L',
        "\u01C7": 'LJ',
        "\u01C8": 'Lj',
        "\u24C2": 'M',
        "\uFF2D": 'M',
        "\u1E3E": 'M',
        "\u1E40": 'M',
        "\u1E42": 'M',
        "\u2C6E": 'M',
        "\u019C": 'M',
        "\u24C3": 'N',
        "\uFF2E": 'N',
        "\u01F8": 'N',
        "\u0143": 'N',
        "\xD1": 'N',
        "\u1E44": 'N',
        "\u0147": 'N',
        "\u1E46": 'N',
        "\u0145": 'N',
        "\u1E4A": 'N',
        "\u1E48": 'N',
        "\u0220": 'N',
        "\u019D": 'N',
        "\uA790": 'N',
        "\uA7A4": 'N',
        "\u01CA": 'NJ',
        "\u01CB": 'Nj',
        "\u24C4": 'O',
        "\uFF2F": 'O',
        "\xD2": 'O',
        "\xD3": 'O',
        "\xD4": 'O',
        "\u1ED2": 'O',
        "\u1ED0": 'O',
        "\u1ED6": 'O',
        "\u1ED4": 'O',
        "\xD5": 'O',
        "\u1E4C": 'O',
        "\u022C": 'O',
        "\u1E4E": 'O',
        "\u014C": 'O',
        "\u1E50": 'O',
        "\u1E52": 'O',
        "\u014E": 'O',
        "\u022E": 'O',
        "\u0230": 'O',
        "\xD6": 'O',
        "\u022A": 'O',
        "\u1ECE": 'O',
        "\u0150": 'O',
        "\u01D1": 'O',
        "\u020C": 'O',
        "\u020E": 'O',
        "\u01A0": 'O',
        "\u1EDC": 'O',
        "\u1EDA": 'O',
        "\u1EE0": 'O',
        "\u1EDE": 'O',
        "\u1EE2": 'O',
        "\u1ECC": 'O',
        "\u1ED8": 'O',
        "\u01EA": 'O',
        "\u01EC": 'O',
        "\xD8": 'O',
        "\u01FE": 'O',
        "\u0186": 'O',
        "\u019F": 'O',
        "\uA74A": 'O',
        "\uA74C": 'O',
        "\u01A2": 'OI',
        "\uA74E": 'OO',
        "\u0222": 'OU',
        "\u24C5": 'P',
        "\uFF30": 'P',
        "\u1E54": 'P',
        "\u1E56": 'P',
        "\u01A4": 'P',
        "\u2C63": 'P',
        "\uA750": 'P',
        "\uA752": 'P',
        "\uA754": 'P',
        "\u24C6": 'Q',
        "\uFF31": 'Q',
        "\uA756": 'Q',
        "\uA758": 'Q',
        "\u024A": 'Q',
        "\u24C7": 'R',
        "\uFF32": 'R',
        "\u0154": 'R',
        "\u1E58": 'R',
        "\u0158": 'R',
        "\u0210": 'R',
        "\u0212": 'R',
        "\u1E5A": 'R',
        "\u1E5C": 'R',
        "\u0156": 'R',
        "\u1E5E": 'R',
        "\u024C": 'R',
        "\u2C64": 'R',
        "\uA75A": 'R',
        "\uA7A6": 'R',
        "\uA782": 'R',
        "\u24C8": 'S',
        "\uFF33": 'S',
        "\u1E9E": 'S',
        "\u015A": 'S',
        "\u1E64": 'S',
        "\u015C": 'S',
        "\u1E60": 'S',
        "\u0160": 'S',
        "\u1E66": 'S',
        "\u1E62": 'S',
        "\u1E68": 'S',
        "\u0218": 'S',
        "\u015E": 'S',
        "\u2C7E": 'S',
        "\uA7A8": 'S',
        "\uA784": 'S',
        "\u24C9": 'T',
        "\uFF34": 'T',
        "\u1E6A": 'T',
        "\u0164": 'T',
        "\u1E6C": 'T',
        "\u021A": 'T',
        "\u0162": 'T',
        "\u1E70": 'T',
        "\u1E6E": 'T',
        "\u0166": 'T',
        "\u01AC": 'T',
        "\u01AE": 'T',
        "\u023E": 'T',
        "\uA786": 'T',
        "\uA728": 'TZ',
        "\u24CA": 'U',
        "\uFF35": 'U',
        "\xD9": 'U',
        "\xDA": 'U',
        "\xDB": 'U',
        "\u0168": 'U',
        "\u1E78": 'U',
        "\u016A": 'U',
        "\u1E7A": 'U',
        "\u016C": 'U',
        "\xDC": 'U',
        "\u01DB": 'U',
        "\u01D7": 'U',
        "\u01D5": 'U',
        "\u01D9": 'U',
        "\u1EE6": 'U',
        "\u016E": 'U',
        "\u0170": 'U',
        "\u01D3": 'U',
        "\u0214": 'U',
        "\u0216": 'U',
        "\u01AF": 'U',
        "\u1EEA": 'U',
        "\u1EE8": 'U',
        "\u1EEE": 'U',
        "\u1EEC": 'U',
        "\u1EF0": 'U',
        "\u1EE4": 'U',
        "\u1E72": 'U',
        "\u0172": 'U',
        "\u1E76": 'U',
        "\u1E74": 'U',
        "\u0244": 'U',
        "\u24CB": 'V',
        "\uFF36": 'V',
        "\u1E7C": 'V',
        "\u1E7E": 'V',
        "\u01B2": 'V',
        "\uA75E": 'V',
        "\u0245": 'V',
        "\uA760": 'VY',
        "\u24CC": 'W',
        "\uFF37": 'W',
        "\u1E80": 'W',
        "\u1E82": 'W',
        "\u0174": 'W',
        "\u1E86": 'W',
        "\u1E84": 'W',
        "\u1E88": 'W',
        "\u2C72": 'W',
        "\u24CD": 'X',
        "\uFF38": 'X',
        "\u1E8A": 'X',
        "\u1E8C": 'X',
        "\u24CE": 'Y',
        "\uFF39": 'Y',
        "\u1EF2": 'Y',
        "\xDD": 'Y',
        "\u0176": 'Y',
        "\u1EF8": 'Y',
        "\u0232": 'Y',
        "\u1E8E": 'Y',
        "\u0178": 'Y',
        "\u1EF6": 'Y',
        "\u1EF4": 'Y',
        "\u01B3": 'Y',
        "\u024E": 'Y',
        "\u1EFE": 'Y',
        "\u24CF": 'Z',
        "\uFF3A": 'Z',
        "\u0179": 'Z',
        "\u1E90": 'Z',
        "\u017B": 'Z',
        "\u017D": 'Z',
        "\u1E92": 'Z',
        "\u1E94": 'Z',
        "\u01B5": 'Z',
        "\u0224": 'Z',
        "\u2C7F": 'Z',
        "\u2C6B": 'Z',
        "\uA762": 'Z',
        "\u24D0": 'a',
        "\uFF41": 'a',
        "\u1E9A": 'a',
        "\xE0": 'a',
        "\xE1": 'a',
        "\xE2": 'a',
        "\u1EA7": 'a',
        "\u1EA5": 'a',
        "\u1EAB": 'a',
        "\u1EA9": 'a',
        "\xE3": 'a',
        "\u0101": 'a',
        "\u0103": 'a',
        "\u1EB1": 'a',
        "\u1EAF": 'a',
        "\u1EB5": 'a',
        "\u1EB3": 'a',
        "\u0227": 'a',
        "\u01E1": 'a',
        "\xE4": 'a',
        "\u01DF": 'a',
        "\u1EA3": 'a',
        "\xE5": 'a',
        "\u01FB": 'a',
        "\u01CE": 'a',
        "\u0201": 'a',
        "\u0203": 'a',
        "\u1EA1": 'a',
        "\u1EAD": 'a',
        "\u1EB7": 'a',
        "\u1E01": 'a',
        "\u0105": 'a',
        "\u2C65": 'a',
        "\u0250": 'a',
        "\uA733": 'aa',
        "\xE6": 'ae',
        "\u01FD": 'ae',
        "\u01E3": 'ae',
        "\uA735": 'ao',
        "\uA737": 'au',
        "\uA739": 'av',
        "\uA73B": 'av',
        "\uA73D": 'ay',
        "\u24D1": 'b',
        "\uFF42": 'b',
        "\u1E03": 'b',
        "\u1E05": 'b',
        "\u1E07": 'b',
        "\u0180": 'b',
        "\u0183": 'b',
        "\u0253": 'b',
        "\u24D2": 'c',
        "\uFF43": 'c',
        "\u0107": 'c',
        "\u0109": 'c',
        "\u010B": 'c',
        "\u010D": 'c',
        "\xE7": 'c',
        "\u1E09": 'c',
        "\u0188": 'c',
        "\u023C": 'c',
        "\uA73F": 'c',
        "\u2184": 'c',
        "\u24D3": 'd',
        "\uFF44": 'd',
        "\u1E0B": 'd',
        "\u010F": 'd',
        "\u1E0D": 'd',
        "\u1E11": 'd',
        "\u1E13": 'd',
        "\u1E0F": 'd',
        "\u0111": 'd',
        "\u018C": 'd',
        "\u0256": 'd',
        "\u0257": 'd',
        "\uA77A": 'd',
        "\u01F3": 'dz',
        "\u01C6": 'dz',
        "\u24D4": 'e',
        "\uFF45": 'e',
        "\xE8": 'e',
        "\xE9": 'e',
        "\xEA": 'e',
        "\u1EC1": 'e',
        "\u1EBF": 'e',
        "\u1EC5": 'e',
        "\u1EC3": 'e',
        "\u1EBD": 'e',
        "\u0113": 'e',
        "\u1E15": 'e',
        "\u1E17": 'e',
        "\u0115": 'e',
        "\u0117": 'e',
        "\xEB": 'e',
        "\u1EBB": 'e',
        "\u011B": 'e',
        "\u0205": 'e',
        "\u0207": 'e',
        "\u1EB9": 'e',
        "\u1EC7": 'e',
        "\u0229": 'e',
        "\u1E1D": 'e',
        "\u0119": 'e',
        "\u1E19": 'e',
        "\u1E1B": 'e',
        "\u0247": 'e',
        "\u025B": 'e',
        "\u01DD": 'e',
        "\u24D5": 'f',
        "\uFF46": 'f',
        "\u1E1F": 'f',
        "\u0192": 'f',
        "\uA77C": 'f',
        "\u24D6": 'g',
        "\uFF47": 'g',
        "\u01F5": 'g',
        "\u011D": 'g',
        "\u1E21": 'g',
        "\u011F": 'g',
        "\u0121": 'g',
        "\u01E7": 'g',
        "\u0123": 'g',
        "\u01E5": 'g',
        "\u0260": 'g',
        "\uA7A1": 'g',
        "\u1D79": 'g',
        "\uA77F": 'g',
        "\u24D7": 'h',
        "\uFF48": 'h',
        "\u0125": 'h',
        "\u1E23": 'h',
        "\u1E27": 'h',
        "\u021F": 'h',
        "\u1E25": 'h',
        "\u1E29": 'h',
        "\u1E2B": 'h',
        "\u1E96": 'h',
        "\u0127": 'h',
        "\u2C68": 'h',
        "\u2C76": 'h',
        "\u0265": 'h',
        "\u0195": 'hv',
        "\u24D8": 'i',
        "\uFF49": 'i',
        "\xEC": 'i',
        "\xED": 'i',
        "\xEE": 'i',
        "\u0129": 'i',
        "\u012B": 'i',
        "\u012D": 'i',
        "\xEF": 'i',
        "\u1E2F": 'i',
        "\u1EC9": 'i',
        "\u01D0": 'i',
        "\u0209": 'i',
        "\u020B": 'i',
        "\u1ECB": 'i',
        "\u012F": 'i',
        "\u1E2D": 'i',
        "\u0268": 'i',
        "\u0131": 'i',
        "\u24D9": 'j',
        "\uFF4A": 'j',
        "\u0135": 'j',
        "\u01F0": 'j',
        "\u0249": 'j',
        "\u24DA": 'k',
        "\uFF4B": 'k',
        "\u1E31": 'k',
        "\u01E9": 'k',
        "\u1E33": 'k',
        "\u0137": 'k',
        "\u1E35": 'k',
        "\u0199": 'k',
        "\u2C6A": 'k',
        "\uA741": 'k',
        "\uA743": 'k',
        "\uA745": 'k',
        "\uA7A3": 'k',
        "\u24DB": 'l',
        "\uFF4C": 'l',
        "\u0140": 'l',
        "\u013A": 'l',
        "\u013E": 'l',
        "\u1E37": 'l',
        "\u1E39": 'l',
        "\u013C": 'l',
        "\u1E3D": 'l',
        "\u1E3B": 'l',
        "\u017F": 'l',
        "\u0142": 'l',
        "\u019A": 'l',
        "\u026B": 'l',
        "\u2C61": 'l',
        "\uA749": 'l',
        "\uA781": 'l',
        "\uA747": 'l',
        "\u01C9": 'lj',
        "\u24DC": 'm',
        "\uFF4D": 'm',
        "\u1E3F": 'm',
        "\u1E41": 'm',
        "\u1E43": 'm',
        "\u0271": 'm',
        "\u026F": 'm',
        "\u24DD": 'n',
        "\uFF4E": 'n',
        "\u01F9": 'n',
        "\u0144": 'n',
        "\xF1": 'n',
        "\u1E45": 'n',
        "\u0148": 'n',
        "\u1E47": 'n',
        "\u0146": 'n',
        "\u1E4B": 'n',
        "\u1E49": 'n',
        "\u019E": 'n',
        "\u0272": 'n',
        "\u0149": 'n',
        "\uA791": 'n',
        "\uA7A5": 'n',
        "\u01CC": 'nj',
        "\u24DE": 'o',
        "\uFF4F": 'o',
        "\xF2": 'o',
        "\xF3": 'o',
        "\xF4": 'o',
        "\u1ED3": 'o',
        "\u1ED1": 'o',
        "\u1ED7": 'o',
        "\u1ED5": 'o',
        "\xF5": 'o',
        "\u1E4D": 'o',
        "\u022D": 'o',
        "\u1E4F": 'o',
        "\u014D": 'o',
        "\u1E51": 'o',
        "\u1E53": 'o',
        "\u014F": 'o',
        "\u022F": 'o',
        "\u0231": 'o',
        "\xF6": 'o',
        "\u022B": 'o',
        "\u1ECF": 'o',
        "\u0151": 'o',
        "\u01D2": 'o',
        "\u020D": 'o',
        "\u020F": 'o',
        "\u01A1": 'o',
        "\u1EDD": 'o',
        "\u1EDB": 'o',
        "\u1EE1": 'o',
        "\u1EDF": 'o',
        "\u1EE3": 'o',
        "\u1ECD": 'o',
        "\u1ED9": 'o',
        "\u01EB": 'o',
        "\u01ED": 'o',
        "\xF8": 'o',
        "\u01FF": 'o',
        "\u0254": 'o',
        "\uA74B": 'o',
        "\uA74D": 'o',
        "\u0275": 'o',
        "\u01A3": 'oi',
        "\u0223": 'ou',
        "\uA74F": 'oo',
        "\u24DF": 'p',
        "\uFF50": 'p',
        "\u1E55": 'p',
        "\u1E57": 'p',
        "\u01A5": 'p',
        "\u1D7D": 'p',
        "\uA751": 'p',
        "\uA753": 'p',
        "\uA755": 'p',
        "\u24E0": 'q',
        "\uFF51": 'q',
        "\u024B": 'q',
        "\uA757": 'q',
        "\uA759": 'q',
        "\u24E1": 'r',
        "\uFF52": 'r',
        "\u0155": 'r',
        "\u1E59": 'r',
        "\u0159": 'r',
        "\u0211": 'r',
        "\u0213": 'r',
        "\u1E5B": 'r',
        "\u1E5D": 'r',
        "\u0157": 'r',
        "\u1E5F": 'r',
        "\u024D": 'r',
        "\u027D": 'r',
        "\uA75B": 'r',
        "\uA7A7": 'r',
        "\uA783": 'r',
        "\u24E2": 's',
        "\uFF53": 's',
        "\xDF": 's',
        "\u015B": 's',
        "\u1E65": 's',
        "\u015D": 's',
        "\u1E61": 's',
        "\u0161": 's',
        "\u1E67": 's',
        "\u1E63": 's',
        "\u1E69": 's',
        "\u0219": 's',
        "\u015F": 's',
        "\u023F": 's',
        "\uA7A9": 's',
        "\uA785": 's',
        "\u1E9B": 's',
        "\u24E3": 't',
        "\uFF54": 't',
        "\u1E6B": 't',
        "\u1E97": 't',
        "\u0165": 't',
        "\u1E6D": 't',
        "\u021B": 't',
        "\u0163": 't',
        "\u1E71": 't',
        "\u1E6F": 't',
        "\u0167": 't',
        "\u01AD": 't',
        "\u0288": 't',
        "\u2C66": 't',
        "\uA787": 't',
        "\uA729": 'tz',
        "\u24E4": 'u',
        "\uFF55": 'u',
        "\xF9": 'u',
        "\xFA": 'u',
        "\xFB": 'u',
        "\u0169": 'u',
        "\u1E79": 'u',
        "\u016B": 'u',
        "\u1E7B": 'u',
        "\u016D": 'u',
        "\xFC": 'u',
        "\u01DC": 'u',
        "\u01D8": 'u',
        "\u01D6": 'u',
        "\u01DA": 'u',
        "\u1EE7": 'u',
        "\u016F": 'u',
        "\u0171": 'u',
        "\u01D4": 'u',
        "\u0215": 'u',
        "\u0217": 'u',
        "\u01B0": 'u',
        "\u1EEB": 'u',
        "\u1EE9": 'u',
        "\u1EEF": 'u',
        "\u1EED": 'u',
        "\u1EF1": 'u',
        "\u1EE5": 'u',
        "\u1E73": 'u',
        "\u0173": 'u',
        "\u1E77": 'u',
        "\u1E75": 'u',
        "\u0289": 'u',
        "\u24E5": 'v',
        "\uFF56": 'v',
        "\u1E7D": 'v',
        "\u1E7F": 'v',
        "\u028B": 'v',
        "\uA75F": 'v',
        "\u028C": 'v',
        "\uA761": 'vy',
        "\u24E6": 'w',
        "\uFF57": 'w',
        "\u1E81": 'w',
        "\u1E83": 'w',
        "\u0175": 'w',
        "\u1E87": 'w',
        "\u1E85": 'w',
        "\u1E98": 'w',
        "\u1E89": 'w',
        "\u2C73": 'w',
        "\u24E7": 'x',
        "\uFF58": 'x',
        "\u1E8B": 'x',
        "\u1E8D": 'x',
        "\u24E8": 'y',
        "\uFF59": 'y',
        "\u1EF3": 'y',
        "\xFD": 'y',
        "\u0177": 'y',
        "\u1EF9": 'y',
        "\u0233": 'y',
        "\u1E8F": 'y',
        "\xFF": 'y',
        "\u1EF7": 'y',
        "\u1E99": 'y',
        "\u1EF5": 'y',
        "\u01B4": 'y',
        "\u024F": 'y',
        "\u1EFF": 'y',
        "\u24E9": 'z',
        "\uFF5A": 'z',
        "\u017A": 'z',
        "\u1E91": 'z',
        "\u017C": 'z',
        "\u017E": 'z',
        "\u1E93": 'z',
        "\u1E95": 'z',
        "\u01B6": 'z',
        "\u0225": 'z',
        "\u0240": 'z',
        "\u2C6C": 'z',
        "\uA763": 'z',
        "\u0386": "\u0391",
        "\u0388": "\u0395",
        "\u0389": "\u0397",
        "\u038A": "\u0399",
        "\u03AA": "\u0399",
        "\u038C": "\u039F",
        "\u038E": "\u03A5",
        "\u03AB": "\u03A5",
        "\u038F": "\u03A9",
        "\u03AC": "\u03B1",
        "\u03AD": "\u03B5",
        "\u03AE": "\u03B7",
        "\u03AF": "\u03B9",
        "\u03CA": "\u03B9",
        "\u0390": "\u03B9",
        "\u03CC": "\u03BF",
        "\u03CD": "\u03C5",
        "\u03CB": "\u03C5",
        "\u03B0": "\u03C5",
        "\u03C9": "\u03C9",
        "\u03C2": "\u03C3"
      };
      return diacritics;
    });
    S2.define('select2/data/base', ['../utils'], function (Utils) {
      function BaseAdapter($element, options) {
        BaseAdapter.__super__.constructor.call(this);
      }
      Utils.Extend(BaseAdapter, Utils.Observable);
      BaseAdapter.prototype.current = function (callback) {
        throw new Error('The `current` method must be defined in child classes.');
      };
      BaseAdapter.prototype.query = function (params, callback) {
        throw new Error('The `query` method must be defined in child classes.');
      };
      BaseAdapter.prototype.bind = function (container, $container) {
        // Can be implemented in subclasses
      };
      BaseAdapter.prototype.destroy = function () {
        // Can be implemented in subclasses
      };
      BaseAdapter.prototype.generateResultId = function (container, data) {
        var id = container.id + '-result-';
        id += Utils.generateChars(4);
        if (data.id != null) {
          id += '-' + data.id.toString();
        } else {
          id += '-' + Utils.generateChars(4);
        }
        return id;
      };
      return BaseAdapter;
    });
    S2.define('select2/data/select', ['./base', '../utils', 'jquery'], function (BaseAdapter, Utils, $) {
      function SelectAdapter($element, options) {
        this.$element = $element;
        this.options = options;
        SelectAdapter.__super__.constructor.call(this);
      }
      Utils.Extend(SelectAdapter, BaseAdapter);
      SelectAdapter.prototype.current = function (callback) {
        var data = [];
        var self = this;
        this.$element.find(':selected').each(function () {
          var $option = $(this);
          var option = self.item($option);
          data.push(option);
        });
        callback(data);
      };
      SelectAdapter.prototype.select = function (data) {
        var self = this;
        data.selected = true;

        // If data.element is a DOM node, use it instead
        if ($(data.element).is('option')) {
          data.element.selected = true;
          this.$element.trigger('change');
          return;
        }
        if (this.$element.prop('multiple')) {
          this.current(function (currentData) {
            var val = [];
            data = [data];
            data.push.apply(data, currentData);
            for (var d = 0; d < data.length; d++) {
              var id = data[d].id;
              if ($.inArray(id, val) === -1) {
                val.push(id);
              }
            }
            self.$element.val(val);
            self.$element.trigger('change');
          });
        } else {
          var val = data.id;
          this.$element.val(val);
          this.$element.trigger('change');
        }
      };
      SelectAdapter.prototype.unselect = function (data) {
        var self = this;
        if (!this.$element.prop('multiple')) {
          return;
        }
        data.selected = false;
        if ($(data.element).is('option')) {
          data.element.selected = false;
          this.$element.trigger('change');
          return;
        }
        this.current(function (currentData) {
          var val = [];
          for (var d = 0; d < currentData.length; d++) {
            var id = currentData[d].id;
            if (id !== data.id && $.inArray(id, val) === -1) {
              val.push(id);
            }
          }
          self.$element.val(val);
          self.$element.trigger('change');
        });
      };
      SelectAdapter.prototype.bind = function (container, $container) {
        var self = this;
        this.container = container;
        container.on('select', function (params) {
          self.select(params.data);
        });
        container.on('unselect', function (params) {
          self.unselect(params.data);
        });
      };
      SelectAdapter.prototype.destroy = function () {
        // Remove anything added to child elements
        this.$element.find('*').each(function () {
          // Remove any custom data set by Select2
          Utils.RemoveData(this);
        });
      };
      SelectAdapter.prototype.query = function (params, callback) {
        var data = [];
        var self = this;
        var $options = this.$element.children();
        $options.each(function () {
          var $option = $(this);
          if (!$option.is('option') && !$option.is('optgroup')) {
            return;
          }
          var option = self.item($option);
          var matches = self.matches(params, option);
          if (matches !== null) {
            data.push(matches);
          }
        });
        callback({
          results: data
        });
      };
      SelectAdapter.prototype.addOptions = function ($options) {
        Utils.appendMany(this.$element, $options);
      };
      SelectAdapter.prototype.option = function (data) {
        var option;
        if (data.children) {
          option = document.createElement('optgroup');
          option.label = data.text;
        } else {
          option = document.createElement('option');
          if (option.textContent !== undefined) {
            option.textContent = data.text;
          } else {
            option.innerText = data.text;
          }
        }
        if (data.id !== undefined) {
          option.value = data.id;
        }
        if (data.disabled) {
          option.disabled = true;
        }
        if (data.selected) {
          option.selected = true;
        }
        if (data.title) {
          option.title = data.title;
        }
        var $option = $(option);
        var normalizedData = this._normalizeItem(data);
        normalizedData.element = option;

        // Override the option's data with the combined data
        Utils.StoreData(option, 'data', normalizedData);
        return $option;
      };
      SelectAdapter.prototype.item = function ($option) {
        var data = {};
        data = Utils.GetData($option[0], 'data');
        if (data != null) {
          return data;
        }
        if ($option.is('option')) {
          data = {
            id: $option.val(),
            text: $option.text(),
            disabled: $option.prop('disabled'),
            selected: $option.prop('selected'),
            title: $option.prop('title')
          };
        } else if ($option.is('optgroup')) {
          data = {
            text: $option.prop('label'),
            children: [],
            title: $option.prop('title')
          };
          var $children = $option.children('option');
          var children = [];
          for (var c = 0; c < $children.length; c++) {
            var $child = $($children[c]);
            var child = this.item($child);
            children.push(child);
          }
          data.children = children;
        }
        data = this._normalizeItem(data);
        data.element = $option[0];
        Utils.StoreData($option[0], 'data', data);
        return data;
      };
      SelectAdapter.prototype._normalizeItem = function (item) {
        if (item !== Object(item)) {
          item = {
            id: item,
            text: item
          };
        }
        item = $.extend({}, {
          text: ''
        }, item);
        var defaults = {
          selected: false,
          disabled: false
        };
        if (item.id != null) {
          item.id = item.id.toString();
        }
        if (item.text != null) {
          item.text = item.text.toString();
        }
        if (item._resultId == null && item.id && this.container != null) {
          item._resultId = this.generateResultId(this.container, item);
        }
        return $.extend({}, defaults, item);
      };
      SelectAdapter.prototype.matches = function (params, data) {
        var matcher = this.options.get('matcher');
        return matcher(params, data);
      };
      return SelectAdapter;
    });
    S2.define('select2/data/array', ['./select', '../utils', 'jquery'], function (SelectAdapter, Utils, $) {
      function ArrayAdapter($element, options) {
        var data = options.get('data') || [];
        ArrayAdapter.__super__.constructor.call(this, $element, options);
        this.addOptions(this.convertToOptions(data));
      }
      Utils.Extend(ArrayAdapter, SelectAdapter);
      ArrayAdapter.prototype.select = function (data) {
        var $option = this.$element.find('option').filter(function (i, elm) {
          return elm.value == data.id.toString();
        });
        if ($option.length === 0) {
          $option = this.option(data);
          this.addOptions($option);
        }
        ArrayAdapter.__super__.select.call(this, data);
      };
      ArrayAdapter.prototype.convertToOptions = function (data) {
        var self = this;
        var $existing = this.$element.find('option');
        var existingIds = $existing.map(function () {
          return self.item($(this)).id;
        }).get();
        var $options = [];

        // Filter out all items except for the one passed in the argument
        function onlyItem(item) {
          return function () {
            return $(this).val() == item.id;
          };
        }
        for (var d = 0; d < data.length; d++) {
          var item = this._normalizeItem(data[d]);

          // Skip items which were pre-loaded, only merge the data
          if ($.inArray(item.id, existingIds) >= 0) {
            var $existingOption = $existing.filter(onlyItem(item));
            var existingData = this.item($existingOption);
            var newData = $.extend(true, {}, item, existingData);
            var $newOption = this.option(newData);
            $existingOption.replaceWith($newOption);
            continue;
          }
          var $option = this.option(item);
          if (item.children) {
            var $children = this.convertToOptions(item.children);
            Utils.appendMany($option, $children);
          }
          $options.push($option);
        }
        return $options;
      };
      return ArrayAdapter;
    });
    S2.define('select2/data/ajax', ['./array', '../utils', 'jquery'], function (ArrayAdapter, Utils, $) {
      function AjaxAdapter($element, options) {
        this.ajaxOptions = this._applyDefaults(options.get('ajax'));
        if (this.ajaxOptions.processResults != null) {
          this.processResults = this.ajaxOptions.processResults;
        }
        AjaxAdapter.__super__.constructor.call(this, $element, options);
      }
      Utils.Extend(AjaxAdapter, ArrayAdapter);
      AjaxAdapter.prototype._applyDefaults = function (options) {
        var defaults = {
          data: function data(params) {
            return $.extend({}, params, {
              q: params.term
            });
          },
          transport: function transport(params, success, failure) {
            var $request = $.ajax(params);
            $request.then(success);
            $request.fail(failure);
            return $request;
          }
        };
        return $.extend({}, defaults, options, true);
      };
      AjaxAdapter.prototype.processResults = function (results) {
        return results;
      };
      AjaxAdapter.prototype.query = function (params, callback) {
        var matches = [];
        var self = this;
        if (this._request != null) {
          // JSONP requests cannot always be aborted
          if ($.isFunction(this._request.abort)) {
            this._request.abort();
          }
          this._request = null;
        }
        var options = $.extend({
          type: 'GET'
        }, this.ajaxOptions);
        if (typeof options.url === 'function') {
          options.url = options.url.call(this.$element, params);
        }
        if (typeof options.data === 'function') {
          options.data = options.data.call(this.$element, params);
        }
        function request() {
          var $request = options.transport(options, function (data) {
            var results = self.processResults(data, params);
            if (self.options.get('debug') && window.console && console.error) {
              // Check to make sure that the response included a `results` key.
              if (!results || !results.results || !$.isArray(results.results)) {
                console.error('Select2: The AJAX results did not return an array in the ' + '`results` key of the response.');
              }
            }
            callback(results);
          }, function () {
            // Attempt to detect if a request was aborted
            // Only works if the transport exposes a status property
            if ('status' in $request && ($request.status === 0 || $request.status === '0')) {
              return;
            }
            self.trigger('results:message', {
              message: 'errorLoading'
            });
          });
          self._request = $request;
        }
        if (this.ajaxOptions.delay && params.term != null) {
          if (this._queryTimeout) {
            window.clearTimeout(this._queryTimeout);
          }
          this._queryTimeout = window.setTimeout(request, this.ajaxOptions.delay);
        } else {
          request();
        }
      };
      return AjaxAdapter;
    });
    S2.define('select2/data/tags', ['jquery'], function ($) {
      function Tags(decorated, $element, options) {
        var tags = options.get('tags');
        var createTag = options.get('createTag');
        if (createTag !== undefined) {
          this.createTag = createTag;
        }
        var insertTag = options.get('insertTag');
        if (insertTag !== undefined) {
          this.insertTag = insertTag;
        }
        decorated.call(this, $element, options);
        if ($.isArray(tags)) {
          for (var t = 0; t < tags.length; t++) {
            var tag = tags[t];
            var item = this._normalizeItem(tag);
            var $option = this.option(item);
            this.$element.append($option);
          }
        }
      }
      Tags.prototype.query = function (decorated, params, callback) {
        var self = this;
        this._removeOldTags();
        if (params.term == null || params.page != null) {
          decorated.call(this, params, callback);
          return;
        }
        function wrapper(obj, child) {
          var data = obj.results;
          for (var i = 0; i < data.length; i++) {
            var option = data[i];
            var checkChildren = option.children != null && !wrapper({
              results: option.children
            }, true);
            var optionText = (option.text || '').toUpperCase();
            var paramsTerm = (params.term || '').toUpperCase();
            var checkText = optionText === paramsTerm;
            if (checkText || checkChildren) {
              if (child) {
                return false;
              }
              obj.data = data;
              callback(obj);
              return;
            }
          }
          if (child) {
            return true;
          }
          var tag = self.createTag(params);
          if (tag != null) {
            var $option = self.option(tag);
            $option.attr('data-select2-tag', true);
            self.addOptions([$option]);
            self.insertTag(data, tag);
          }
          obj.results = data;
          callback(obj);
        }
        decorated.call(this, params, wrapper);
      };
      Tags.prototype.createTag = function (decorated, params) {
        var term = $.trim(params.term);
        if (term === '') {
          return null;
        }
        return {
          id: term,
          text: term
        };
      };
      Tags.prototype.insertTag = function (_, data, tag) {
        data.unshift(tag);
      };
      Tags.prototype._removeOldTags = function (_) {
        var tag = this._lastTag;
        var $options = this.$element.find('option[data-select2-tag]');
        $options.each(function () {
          if (this.selected) {
            return;
          }
          $(this).remove();
        });
      };
      return Tags;
    });
    S2.define('select2/data/tokenizer', ['jquery'], function ($) {
      function Tokenizer(decorated, $element, options) {
        var tokenizer = options.get('tokenizer');
        if (tokenizer !== undefined) {
          this.tokenizer = tokenizer;
        }
        decorated.call(this, $element, options);
      }
      Tokenizer.prototype.bind = function (decorated, container, $container) {
        decorated.call(this, container, $container);
        this.$search = container.dropdown.$search || container.selection.$search || $container.find('.select2-search__field');
      };
      Tokenizer.prototype.query = function (decorated, params, callback) {
        var self = this;
        function createAndSelect(data) {
          // Normalize the data object so we can use it for checks
          var item = self._normalizeItem(data);

          // Check if the data object already exists as a tag
          // Select it if it doesn't
          var $existingOptions = self.$element.find('option').filter(function () {
            return $(this).val() === item.id;
          });

          // If an existing option wasn't found for it, create the option
          if (!$existingOptions.length) {
            var $option = self.option(item);
            $option.attr('data-select2-tag', true);
            self._removeOldTags();
            self.addOptions([$option]);
          }

          // Select the item, now that we know there is an option for it
          select(item);
        }
        function select(data) {
          self.trigger('select', {
            data: data
          });
        }
        params.term = params.term || '';
        var tokenData = this.tokenizer(params, this.options, createAndSelect);
        if (tokenData.term !== params.term) {
          // Replace the search term if we have the search box
          if (this.$search.length) {
            this.$search.val(tokenData.term);
            this.$search.focus();
          }
          params.term = tokenData.term;
        }
        decorated.call(this, params, callback);
      };
      Tokenizer.prototype.tokenizer = function (_, params, options, callback) {
        var separators = options.get('tokenSeparators') || [];
        var term = params.term;
        var i = 0;
        var createTag = this.createTag || function (params) {
          return {
            id: params.term,
            text: params.term
          };
        };
        while (i < term.length) {
          var termChar = term[i];
          if ($.inArray(termChar, separators) === -1) {
            i++;
            continue;
          }
          var part = term.substr(0, i);
          var partParams = $.extend({}, params, {
            term: part
          });
          var data = createTag(partParams);
          if (data == null) {
            i++;
            continue;
          }
          callback(data);

          // Reset the term to not include the tokenized portion
          term = term.substr(i + 1) || '';
          i = 0;
        }
        return {
          term: term
        };
      };
      return Tokenizer;
    });
    S2.define('select2/data/minimumInputLength', [], function () {
      function MinimumInputLength(decorated, $e, options) {
        this.minimumInputLength = options.get('minimumInputLength');
        decorated.call(this, $e, options);
      }
      MinimumInputLength.prototype.query = function (decorated, params, callback) {
        params.term = params.term || '';
        if (params.term.length < this.minimumInputLength) {
          this.trigger('results:message', {
            message: 'inputTooShort',
            args: {
              minimum: this.minimumInputLength,
              input: params.term,
              params: params
            }
          });
          return;
        }
        decorated.call(this, params, callback);
      };
      return MinimumInputLength;
    });
    S2.define('select2/data/maximumInputLength', [], function () {
      function MaximumInputLength(decorated, $e, options) {
        this.maximumInputLength = options.get('maximumInputLength');
        decorated.call(this, $e, options);
      }
      MaximumInputLength.prototype.query = function (decorated, params, callback) {
        params.term = params.term || '';
        if (this.maximumInputLength > 0 && params.term.length > this.maximumInputLength) {
          this.trigger('results:message', {
            message: 'inputTooLong',
            args: {
              maximum: this.maximumInputLength,
              input: params.term,
              params: params
            }
          });
          return;
        }
        decorated.call(this, params, callback);
      };
      return MaximumInputLength;
    });
    S2.define('select2/data/maximumSelectionLength', [], function () {
      function MaximumSelectionLength(decorated, $e, options) {
        this.maximumSelectionLength = options.get('maximumSelectionLength');
        decorated.call(this, $e, options);
      }
      MaximumSelectionLength.prototype.query = function (decorated, params, callback) {
        var self = this;
        this.current(function (currentData) {
          var count = currentData != null ? currentData.length : 0;
          if (self.maximumSelectionLength > 0 && count >= self.maximumSelectionLength) {
            self.trigger('results:message', {
              message: 'maximumSelected',
              args: {
                maximum: self.maximumSelectionLength
              }
            });
            return;
          }
          decorated.call(self, params, callback);
        });
      };
      return MaximumSelectionLength;
    });
    S2.define('select2/dropdown', ['jquery', './utils'], function ($, Utils) {
      function Dropdown($element, options) {
        this.$element = $element;
        this.options = options;
        Dropdown.__super__.constructor.call(this);
      }
      Utils.Extend(Dropdown, Utils.Observable);
      Dropdown.prototype.render = function () {
        var $dropdown = $('<span class="select2-dropdown">' + '<span class="select2-results"></span>' + '</span>');
        $dropdown.attr('dir', this.options.get('dir'));
        this.$dropdown = $dropdown;
        return $dropdown;
      };
      Dropdown.prototype.bind = function () {
        // Should be implemented in subclasses
      };
      Dropdown.prototype.position = function ($dropdown, $container) {
        // Should be implmented in subclasses
      };
      Dropdown.prototype.destroy = function () {
        // Remove the dropdown from the DOM
        this.$dropdown.remove();
      };
      return Dropdown;
    });
    S2.define('select2/dropdown/search', ['jquery', '../utils'], function ($, Utils) {
      function Search() {}
      Search.prototype.render = function (decorated) {
        var $rendered = decorated.call(this);
        var $search = $('<span class="select2-search select2-search--dropdown">' + '<input class="select2-search__field" type="search" tabindex="-1"' + ' autocomplete="off" autocorrect="off" autocapitalize="none"' + ' spellcheck="false" role="textbox" />' + '</span>');
        this.$searchContainer = $search;
        this.$search = $search.find('input');
        $rendered.prepend($search);
        return $rendered;
      };
      Search.prototype.bind = function (decorated, container, $container) {
        var self = this;
        decorated.call(this, container, $container);
        this.$search.on('keydown', function (evt) {
          self.trigger('keypress', evt);
          self._keyUpPrevented = evt.isDefaultPrevented();
        });

        // Workaround for browsers which do not support the `input` event
        // This will prevent double-triggering of events for browsers which support
        // both the `keyup` and `input` events.
        this.$search.on('input', function (evt) {
          // Unbind the duplicated `keyup` event
          $(this).off('keyup');
        });
        this.$search.on('keyup input', function (evt) {
          self.handleSearch(evt);
        });
        container.on('open', function () {
          self.$search.attr('tabindex', 0);
          self.$search.focus();
          window.setTimeout(function () {
            self.$search.focus();
          }, 0);
        });
        container.on('close', function () {
          self.$search.attr('tabindex', -1);
          self.$search.val('');
          self.$search.blur();
        });
        container.on('focus', function () {
          if (!container.isOpen()) {
            self.$search.focus();
          }
        });
        container.on('results:all', function (params) {
          if (params.query.term == null || params.query.term === '') {
            var showSearch = self.showSearch(params);
            if (showSearch) {
              self.$searchContainer.removeClass('select2-search--hide');
            } else {
              self.$searchContainer.addClass('select2-search--hide');
            }
          }
        });
      };
      Search.prototype.handleSearch = function (evt) {
        if (!this._keyUpPrevented) {
          var input = this.$search.val();
          this.trigger('query', {
            term: input
          });
        }
        this._keyUpPrevented = false;
      };
      Search.prototype.showSearch = function (_, params) {
        return true;
      };
      return Search;
    });
    S2.define('select2/dropdown/hidePlaceholder', [], function () {
      function HidePlaceholder(decorated, $element, options, dataAdapter) {
        this.placeholder = this.normalizePlaceholder(options.get('placeholder'));
        decorated.call(this, $element, options, dataAdapter);
      }
      HidePlaceholder.prototype.append = function (decorated, data) {
        data.results = this.removePlaceholder(data.results);
        decorated.call(this, data);
      };
      HidePlaceholder.prototype.normalizePlaceholder = function (_, placeholder) {
        if (typeof placeholder === 'string') {
          placeholder = {
            id: '',
            text: placeholder
          };
        }
        return placeholder;
      };
      HidePlaceholder.prototype.removePlaceholder = function (_, data) {
        var modifiedData = data.slice(0);
        for (var d = data.length - 1; d >= 0; d--) {
          var item = data[d];
          if (this.placeholder.id === item.id) {
            modifiedData.splice(d, 1);
          }
        }
        return modifiedData;
      };
      return HidePlaceholder;
    });
    S2.define('select2/dropdown/infiniteScroll', ['jquery'], function ($) {
      function InfiniteScroll(decorated, $element, options, dataAdapter) {
        this.lastParams = {};
        decorated.call(this, $element, options, dataAdapter);
        this.$loadingMore = this.createLoadingMore();
        this.loading = false;
      }
      InfiniteScroll.prototype.append = function (decorated, data) {
        this.$loadingMore.remove();
        this.loading = false;
        decorated.call(this, data);
        if (this.showLoadingMore(data)) {
          this.$results.append(this.$loadingMore);
        }
      };
      InfiniteScroll.prototype.bind = function (decorated, container, $container) {
        var self = this;
        decorated.call(this, container, $container);
        container.on('query', function (params) {
          self.lastParams = params;
          self.loading = true;
        });
        container.on('query:append', function (params) {
          self.lastParams = params;
          self.loading = true;
        });
        this.$results.on('scroll', function () {
          var isLoadMoreVisible = $.contains(document.documentElement, self.$loadingMore[0]);
          if (self.loading || !isLoadMoreVisible) {
            return;
          }
          var currentOffset = self.$results.offset().top + self.$results.outerHeight(false);
          var loadingMoreOffset = self.$loadingMore.offset().top + self.$loadingMore.outerHeight(false);
          if (currentOffset + 50 >= loadingMoreOffset) {
            self.loadMore();
          }
        });
      };
      InfiniteScroll.prototype.loadMore = function () {
        this.loading = true;
        var params = $.extend({}, {
          page: 1
        }, this.lastParams);
        params.page++;
        this.trigger('query:append', params);
      };
      InfiniteScroll.prototype.showLoadingMore = function (_, data) {
        return data.pagination && data.pagination.more;
      };
      InfiniteScroll.prototype.createLoadingMore = function () {
        var $option = $('<li ' + 'class="select2-results__option select2-results__option--load-more"' + 'role="treeitem" aria-disabled="true"></li>');
        var message = this.options.get('translations').get('loadingMore');
        $option.html(message(this.lastParams));
        return $option;
      };
      return InfiniteScroll;
    });
    S2.define('select2/dropdown/attachBody', ['jquery', '../utils'], function ($, Utils) {
      function AttachBody(decorated, $element, options) {
        this.$dropdownParent = options.get('dropdownParent') || $(document.body);
        decorated.call(this, $element, options);
      }
      AttachBody.prototype.bind = function (decorated, container, $container) {
        var self = this;
        var setupResultsEvents = false;
        decorated.call(this, container, $container);
        container.on('open', function () {
          self._showDropdown();
          self._attachPositioningHandler(container);
          if (!setupResultsEvents) {
            setupResultsEvents = true;
            container.on('results:all', function () {
              self._positionDropdown();
              self._resizeDropdown();
            });
            container.on('results:append', function () {
              self._positionDropdown();
              self._resizeDropdown();
            });
          }
        });
        container.on('close', function () {
          self._hideDropdown();
          self._detachPositioningHandler(container);
        });
        this.$dropdownContainer.on('mousedown', function (evt) {
          evt.stopPropagation();
        });
      };
      AttachBody.prototype.destroy = function (decorated) {
        decorated.call(this);
        this.$dropdownContainer.remove();
      };
      AttachBody.prototype.position = function (decorated, $dropdown, $container) {
        // Clone all of the container classes
        $dropdown.attr('class', $container.attr('class'));
        $dropdown.removeClass('select2');
        $dropdown.addClass('select2-container--open');
        $dropdown.css({
          position: 'absolute',
          top: -999999
        });
        this.$container = $container;
      };
      AttachBody.prototype.render = function (decorated) {
        var $container = $('<span></span>');
        var $dropdown = decorated.call(this);
        $container.append($dropdown);
        this.$dropdownContainer = $container;
        return $container;
      };
      AttachBody.prototype._hideDropdown = function (decorated) {
        this.$dropdownContainer.detach();
      };
      AttachBody.prototype._attachPositioningHandler = function (decorated, container) {
        var self = this;
        var scrollEvent = 'scroll.select2.' + container.id;
        var resizeEvent = 'resize.select2.' + container.id;
        var orientationEvent = 'orientationchange.select2.' + container.id;
        var $watchers = this.$container.parents().filter(Utils.hasScroll);
        $watchers.each(function () {
          Utils.StoreData(this, 'select2-scroll-position', {
            x: $(this).scrollLeft(),
            y: $(this).scrollTop()
          });
        });
        $watchers.on(scrollEvent, function (ev) {
          var position = Utils.GetData(this, 'select2-scroll-position');
          $(this).scrollTop(position.y);
        });
        $(window).on(scrollEvent + ' ' + resizeEvent + ' ' + orientationEvent, function (e) {
          self._positionDropdown();
          self._resizeDropdown();
        });
      };
      AttachBody.prototype._detachPositioningHandler = function (decorated, container) {
        var scrollEvent = 'scroll.select2.' + container.id;
        var resizeEvent = 'resize.select2.' + container.id;
        var orientationEvent = 'orientationchange.select2.' + container.id;
        var $watchers = this.$container.parents().filter(Utils.hasScroll);
        $watchers.off(scrollEvent);
        $(window).off(scrollEvent + ' ' + resizeEvent + ' ' + orientationEvent);
      };
      AttachBody.prototype._positionDropdown = function () {
        var $window = $(window);
        var isCurrentlyAbove = this.$dropdown.hasClass('select2-dropdown--above');
        var isCurrentlyBelow = this.$dropdown.hasClass('select2-dropdown--below');
        var newDirection = null;
        var offset = this.$container.offset();
        offset.bottom = offset.top + this.$container.outerHeight(false);
        var container = {
          height: this.$container.outerHeight(false)
        };
        container.top = offset.top;
        container.bottom = offset.top + container.height;
        var dropdown = {
          height: this.$dropdown.outerHeight(false)
        };
        var viewport = {
          top: $window.scrollTop(),
          bottom: $window.scrollTop() + $window.height()
        };
        var enoughRoomAbove = viewport.top < offset.top - dropdown.height;
        var enoughRoomBelow = viewport.bottom > offset.bottom + dropdown.height;
        var css = {
          left: offset.left,
          top: container.bottom
        };

        // Determine what the parent element is to use for calciulating the offset
        var $offsetParent = this.$dropdownParent;

        // For statically positoned elements, we need to get the element
        // that is determining the offset
        if ($offsetParent.css('position') === 'static') {
          $offsetParent = $offsetParent.offsetParent();
        }
        var parentOffset = $offsetParent.offset();
        css.top -= parentOffset.top;
        css.left -= parentOffset.left;
        if (!isCurrentlyAbove && !isCurrentlyBelow) {
          newDirection = 'below';
        }
        if (!enoughRoomBelow && enoughRoomAbove && !isCurrentlyAbove) {
          newDirection = 'above';
        } else if (!enoughRoomAbove && enoughRoomBelow && isCurrentlyAbove) {
          newDirection = 'below';
        }
        if (newDirection == 'above' || isCurrentlyAbove && newDirection !== 'below') {
          css.top = container.top - parentOffset.top - dropdown.height;
        }
        if (newDirection != null) {
          this.$dropdown.removeClass('select2-dropdown--below select2-dropdown--above').addClass('select2-dropdown--' + newDirection);
          this.$container.removeClass('select2-container--below select2-container--above').addClass('select2-container--' + newDirection);
        }
        this.$dropdownContainer.css(css);
      };
      AttachBody.prototype._resizeDropdown = function () {
        var css = {
          width: this.$container.outerWidth(false) + 'px'
        };
        if (this.options.get('dropdownAutoWidth')) {
          css.minWidth = css.width;
          css.position = 'relative';
          css.width = 'auto';
        }
        this.$dropdown.css(css);
      };
      AttachBody.prototype._showDropdown = function (decorated) {
        this.$dropdownContainer.appendTo(this.$dropdownParent);
        this._positionDropdown();
        this._resizeDropdown();
      };
      return AttachBody;
    });
    S2.define('select2/dropdown/minimumResultsForSearch', [], function () {
      function countResults(data) {
        var count = 0;
        for (var d = 0; d < data.length; d++) {
          var item = data[d];
          if (item.children) {
            count += countResults(item.children);
          } else {
            count++;
          }
        }
        return count;
      }
      function MinimumResultsForSearch(decorated, $element, options, dataAdapter) {
        this.minimumResultsForSearch = options.get('minimumResultsForSearch');
        if (this.minimumResultsForSearch < 0) {
          this.minimumResultsForSearch = Infinity;
        }
        decorated.call(this, $element, options, dataAdapter);
      }
      MinimumResultsForSearch.prototype.showSearch = function (decorated, params) {
        if (countResults(params.data.results) < this.minimumResultsForSearch) {
          return false;
        }
        return decorated.call(this, params);
      };
      return MinimumResultsForSearch;
    });
    S2.define('select2/dropdown/selectOnClose', ['../utils'], function (Utils) {
      function SelectOnClose() {}
      SelectOnClose.prototype.bind = function (decorated, container, $container) {
        var self = this;
        decorated.call(this, container, $container);
        container.on('close', function (params) {
          self._handleSelectOnClose(params);
        });
      };
      SelectOnClose.prototype._handleSelectOnClose = function (_, params) {
        if (params && params.originalSelect2Event != null) {
          var event = params.originalSelect2Event;

          // Don't select an item if the close event was triggered from a select or
          // unselect event
          if (event._type === 'select' || event._type === 'unselect') {
            return;
          }
        }
        var $highlightedResults = this.getHighlightedResults();

        // Only select highlighted results
        if ($highlightedResults.length < 1) {
          return;
        }
        var data = Utils.GetData($highlightedResults[0], 'data');

        // Don't re-select already selected resulte
        if (data.element != null && data.element.selected || data.element == null && data.selected) {
          return;
        }
        this.trigger('select', {
          data: data
        });
      };
      return SelectOnClose;
    });
    S2.define('select2/dropdown/closeOnSelect', [], function () {
      function CloseOnSelect() {}
      CloseOnSelect.prototype.bind = function (decorated, container, $container) {
        var self = this;
        decorated.call(this, container, $container);
        container.on('select', function (evt) {
          self._selectTriggered(evt);
        });
        container.on('unselect', function (evt) {
          self._selectTriggered(evt);
        });
      };
      CloseOnSelect.prototype._selectTriggered = function (_, evt) {
        var originalEvent = evt.originalEvent;

        // Don't close if the control key is being held
        if (originalEvent && originalEvent.ctrlKey) {
          return;
        }
        this.trigger('close', {
          originalEvent: originalEvent,
          originalSelect2Event: evt
        });
      };
      return CloseOnSelect;
    });
    S2.define('select2/i18n/en', [], function () {
      // English
      return {
        errorLoading: function errorLoading() {
          return 'The results could not be loaded.';
        },
        inputTooLong: function inputTooLong(args) {
          var overChars = args.input.length - args.maximum;
          var message = 'Please delete ' + overChars + ' character';
          if (overChars != 1) {
            message += 's';
          }
          return message;
        },
        inputTooShort: function inputTooShort(args) {
          var remainingChars = args.minimum - args.input.length;
          var message = 'Please enter ' + remainingChars + ' or more characters';
          return message;
        },
        loadingMore: function loadingMore() {
          return 'Loading more results…';
        },
        maximumSelected: function maximumSelected(args) {
          var message = 'You can only select ' + args.maximum + ' item';
          if (args.maximum != 1) {
            message += 's';
          }
          return message;
        },
        noResults: function noResults() {
          return 'No results found';
        },
        searching: function searching() {
          return 'Searching…';
        }
      };
    });
    S2.define('select2/defaults', ['jquery', 'require', './results', './selection/single', './selection/multiple', './selection/placeholder', './selection/allowClear', './selection/search', './selection/eventRelay', './utils', './translation', './diacritics', './data/select', './data/array', './data/ajax', './data/tags', './data/tokenizer', './data/minimumInputLength', './data/maximumInputLength', './data/maximumSelectionLength', './dropdown', './dropdown/search', './dropdown/hidePlaceholder', './dropdown/infiniteScroll', './dropdown/attachBody', './dropdown/minimumResultsForSearch', './dropdown/selectOnClose', './dropdown/closeOnSelect', './i18n/en'], function ($, require, ResultsList, SingleSelection, MultipleSelection, Placeholder, AllowClear, SelectionSearch, EventRelay, Utils, Translation, DIACRITICS, SelectData, ArrayData, AjaxData, Tags, Tokenizer, MinimumInputLength, MaximumInputLength, MaximumSelectionLength, Dropdown, DropdownSearch, HidePlaceholder, InfiniteScroll, AttachBody, MinimumResultsForSearch, SelectOnClose, CloseOnSelect, EnglishTranslation) {
      function Defaults() {
        this.reset();
      }
      Defaults.prototype.apply = function (options) {
        options = $.extend(true, {}, this.defaults, options);
        if (options.dataAdapter == null) {
          if (options.ajax != null) {
            options.dataAdapter = AjaxData;
          } else if (options.data != null) {
            options.dataAdapter = ArrayData;
          } else {
            options.dataAdapter = SelectData;
          }
          if (options.minimumInputLength > 0) {
            options.dataAdapter = Utils.Decorate(options.dataAdapter, MinimumInputLength);
          }
          if (options.maximumInputLength > 0) {
            options.dataAdapter = Utils.Decorate(options.dataAdapter, MaximumInputLength);
          }
          if (options.maximumSelectionLength > 0) {
            options.dataAdapter = Utils.Decorate(options.dataAdapter, MaximumSelectionLength);
          }
          if (options.tags) {
            options.dataAdapter = Utils.Decorate(options.dataAdapter, Tags);
          }
          if (options.tokenSeparators != null || options.tokenizer != null) {
            options.dataAdapter = Utils.Decorate(options.dataAdapter, Tokenizer);
          }
          if (options.query != null) {
            var Query = require(options.amdBase + 'compat/query');
            options.dataAdapter = Utils.Decorate(options.dataAdapter, Query);
          }
          if (options.initSelection != null) {
            var InitSelection = require(options.amdBase + 'compat/initSelection');
            options.dataAdapter = Utils.Decorate(options.dataAdapter, InitSelection);
          }
        }
        if (options.resultsAdapter == null) {
          options.resultsAdapter = ResultsList;
          if (options.ajax != null) {
            options.resultsAdapter = Utils.Decorate(options.resultsAdapter, InfiniteScroll);
          }
          if (options.placeholder != null) {
            options.resultsAdapter = Utils.Decorate(options.resultsAdapter, HidePlaceholder);
          }
          if (options.selectOnClose) {
            options.resultsAdapter = Utils.Decorate(options.resultsAdapter, SelectOnClose);
          }
        }
        if (options.dropdownAdapter == null) {
          if (options.multiple) {
            options.dropdownAdapter = Dropdown;
          } else {
            var SearchableDropdown = Utils.Decorate(Dropdown, DropdownSearch);
            options.dropdownAdapter = SearchableDropdown;
          }
          if (options.minimumResultsForSearch !== 0) {
            options.dropdownAdapter = Utils.Decorate(options.dropdownAdapter, MinimumResultsForSearch);
          }
          if (options.closeOnSelect) {
            options.dropdownAdapter = Utils.Decorate(options.dropdownAdapter, CloseOnSelect);
          }
          if (options.dropdownCssClass != null || options.dropdownCss != null || options.adaptDropdownCssClass != null) {
            var DropdownCSS = require(options.amdBase + 'compat/dropdownCss');
            options.dropdownAdapter = Utils.Decorate(options.dropdownAdapter, DropdownCSS);
          }
          options.dropdownAdapter = Utils.Decorate(options.dropdownAdapter, AttachBody);
        }
        if (options.selectionAdapter == null) {
          if (options.multiple) {
            options.selectionAdapter = MultipleSelection;
          } else {
            options.selectionAdapter = SingleSelection;
          }

          // Add the placeholder mixin if a placeholder was specified
          if (options.placeholder != null) {
            options.selectionAdapter = Utils.Decorate(options.selectionAdapter, Placeholder);
          }
          if (options.allowClear) {
            options.selectionAdapter = Utils.Decorate(options.selectionAdapter, AllowClear);
          }
          if (options.multiple) {
            options.selectionAdapter = Utils.Decorate(options.selectionAdapter, SelectionSearch);
          }
          if (options.containerCssClass != null || options.containerCss != null || options.adaptContainerCssClass != null) {
            var ContainerCSS = require(options.amdBase + 'compat/containerCss');
            options.selectionAdapter = Utils.Decorate(options.selectionAdapter, ContainerCSS);
          }
          options.selectionAdapter = Utils.Decorate(options.selectionAdapter, EventRelay);
        }
        if (typeof options.language === 'string') {
          // Check if the language is specified with a region
          if (options.language.indexOf('-') > 0) {
            // Extract the region information if it is included
            var languageParts = options.language.split('-');
            var baseLanguage = languageParts[0];
            options.language = [options.language, baseLanguage];
          } else {
            options.language = [options.language];
          }
        }
        if ($.isArray(options.language)) {
          var languages = new Translation();
          options.language.push('en');
          var languageNames = options.language;
          for (var l = 0; l < languageNames.length; l++) {
            var name = languageNames[l];
            var language = {};
            try {
              // Try to load it with the original name
              language = Translation.loadPath(name);
            } catch (e) {
              try {
                // If we couldn't load it, check if it wasn't the full path
                name = this.defaults.amdLanguageBase + name;
                language = Translation.loadPath(name);
              } catch (ex) {
                // The translation could not be loaded at all. Sometimes this is
                // because of a configuration problem, other times this can be
                // because of how Select2 helps load all possible translation files.
                if (options.debug && window.console && console.warn) {
                  console.warn('Select2: The language file for "' + name + '" could not be ' + 'automatically loaded. A fallback will be used instead.');
                }
                continue;
              }
            }
            languages.extend(language);
          }
          options.translations = languages;
        } else {
          var baseTranslation = Translation.loadPath(this.defaults.amdLanguageBase + 'en');
          var customTranslation = new Translation(options.language);
          customTranslation.extend(baseTranslation);
          options.translations = customTranslation;
        }
        return options;
      };
      Defaults.prototype.reset = function () {
        function stripDiacritics(text) {
          // Used 'uni range + named function' from http://jsperf.com/diacritics/18
          function match(a) {
            return DIACRITICS[a] || a;
          }
          return text.replace(/[^\u0000-\u007E]/g, match);
        }
        function matcher(params, data) {
          // Always return the object if there is nothing to compare
          if ($.trim(params.term) === '') {
            return data;
          }

          // Do a recursive check for options with children
          if (data.children && data.children.length > 0) {
            // Clone the data object if there are children
            // This is required as we modify the object to remove any non-matches
            var match = $.extend(true, {}, data);

            // Check each child of the option
            for (var c = data.children.length - 1; c >= 0; c--) {
              var child = data.children[c];
              var matches = matcher(params, child);

              // If there wasn't a match, remove the object in the array
              if (matches == null) {
                match.children.splice(c, 1);
              }
            }

            // If any children matched, return the new object
            if (match.children.length > 0) {
              return match;
            }

            // If there were no matching children, check just the plain object
            return matcher(params, match);
          }
          var original = stripDiacritics(data.text).toUpperCase();
          var term = stripDiacritics(params.term).toUpperCase();

          // Check if the text contains the term
          if (original.indexOf(term) > -1) {
            return data;
          }

          // If it doesn't contain the term, don't return anything
          return null;
        }
        this.defaults = {
          amdBase: './',
          amdLanguageBase: './i18n/',
          closeOnSelect: true,
          debug: false,
          dropdownAutoWidth: false,
          escapeMarkup: Utils.escapeMarkup,
          language: EnglishTranslation,
          matcher: matcher,
          minimumInputLength: 0,
          maximumInputLength: 0,
          maximumSelectionLength: 0,
          minimumResultsForSearch: 0,
          selectOnClose: false,
          sorter: function sorter(data) {
            return data;
          },
          templateResult: function templateResult(result) {
            return result.text;
          },
          templateSelection: function templateSelection(selection) {
            return selection.text;
          },
          theme: 'default',
          width: 'resolve'
        };
      };
      Defaults.prototype.set = function (key, value) {
        var camelKey = $.camelCase(key);
        var data = {};
        data[camelKey] = value;
        var convertedData = Utils._convertData(data);
        $.extend(true, this.defaults, convertedData);
      };
      var defaults = new Defaults();
      return defaults;
    });
    S2.define('select2/options', ['require', 'jquery', './defaults', './utils'], function (require, $, Defaults, Utils) {
      function Options(options, $element) {
        this.options = options;
        if ($element != null) {
          this.fromElement($element);
        }
        this.options = Defaults.apply(this.options);
        if ($element && $element.is('input')) {
          var InputCompat = require(this.get('amdBase') + 'compat/inputData');
          this.options.dataAdapter = Utils.Decorate(this.options.dataAdapter, InputCompat);
        }
      }
      Options.prototype.fromElement = function ($e) {
        var excludedData = ['select2'];
        if (this.options.multiple == null) {
          this.options.multiple = $e.prop('multiple');
        }
        if (this.options.disabled == null) {
          this.options.disabled = $e.prop('disabled');
        }
        if (this.options.language == null) {
          if ($e.prop('lang')) {
            this.options.language = $e.prop('lang').toLowerCase();
          } else if ($e.closest('[lang]').prop('lang')) {
            this.options.language = $e.closest('[lang]').prop('lang');
          }
        }
        if (this.options.dir == null) {
          if ($e.prop('dir')) {
            this.options.dir = $e.prop('dir');
          } else if ($e.closest('[dir]').prop('dir')) {
            this.options.dir = $e.closest('[dir]').prop('dir');
          } else {
            this.options.dir = 'ltr';
          }
        }
        $e.prop('disabled', this.options.disabled);
        $e.prop('multiple', this.options.multiple);
        if (Utils.GetData($e[0], 'select2Tags')) {
          if (this.options.debug && window.console && console.warn) {
            console.warn('Select2: The `data-select2-tags` attribute has been changed to ' + 'use the `data-data` and `data-tags="true"` attributes and will be ' + 'removed in future versions of Select2.');
          }
          Utils.StoreData($e[0], 'data', Utils.GetData($e[0], 'select2Tags'));
          Utils.StoreData($e[0], 'tags', true);
        }
        if (Utils.GetData($e[0], 'ajaxUrl')) {
          if (this.options.debug && window.console && console.warn) {
            console.warn('Select2: The `data-ajax-url` attribute has been changed to ' + '`data-ajax--url` and support for the old attribute will be removed' + ' in future versions of Select2.');
          }
          $e.attr('ajax--url', Utils.GetData($e[0], 'ajaxUrl'));
          Utils.StoreData($e[0], 'ajax-Url', Utils.GetData($e[0], 'ajaxUrl'));
        }
        var dataset = {};

        // Prefer the element's `dataset` attribute if it exists
        // jQuery 1.x does not correctly handle data attributes with multiple dashes
        if ($.fn.jquery && $.fn.jquery.substr(0, 2) == '1.' && $e[0].dataset) {
          dataset = $.extend(true, {}, $e[0].dataset, Utils.GetData($e[0]));
        } else {
          dataset = Utils.GetData($e[0]);
        }
        var data = $.extend(true, {}, dataset);
        data = Utils._convertData(data);
        for (var key in data) {
          if ($.inArray(key, excludedData) > -1) {
            continue;
          }
          if ($.isPlainObject(this.options[key])) {
            $.extend(this.options[key], data[key]);
          } else {
            this.options[key] = data[key];
          }
        }
        return this;
      };
      Options.prototype.get = function (key) {
        return this.options[key];
      };
      Options.prototype.set = function (key, val) {
        this.options[key] = val;
      };
      return Options;
    });
    S2.define('select2/core', ['jquery', './options', './utils', './keys'], function ($, Options, Utils, KEYS) {
      var _Select = function Select2($element, options) {
        if (Utils.GetData($element[0], 'select2') != null) {
          Utils.GetData($element[0], 'select2').destroy();
        }
        this.$element = $element;
        this.id = this._generateId($element);
        options = options || {};
        this.options = new Options(options, $element);
        _Select.__super__.constructor.call(this);

        // Set up the tabindex

        var tabindex = $element.attr('tabindex') || 0;
        Utils.StoreData($element[0], 'old-tabindex', tabindex);
        $element.attr('tabindex', '-1');

        // Set up containers and adapters

        var DataAdapter = this.options.get('dataAdapter');
        this.dataAdapter = new DataAdapter($element, this.options);
        var $container = this.render();
        this._placeContainer($container);
        var SelectionAdapter = this.options.get('selectionAdapter');
        this.selection = new SelectionAdapter($element, this.options);
        this.$selection = this.selection.render();
        this.selection.position(this.$selection, $container);
        var DropdownAdapter = this.options.get('dropdownAdapter');
        this.dropdown = new DropdownAdapter($element, this.options);
        this.$dropdown = this.dropdown.render();
        this.dropdown.position(this.$dropdown, $container);
        var ResultsAdapter = this.options.get('resultsAdapter');
        this.results = new ResultsAdapter($element, this.options, this.dataAdapter);
        this.$results = this.results.render();
        this.results.position(this.$results, this.$dropdown);

        // Bind events

        var self = this;

        // Bind the container to all of the adapters
        this._bindAdapters();

        // Register any DOM event handlers
        this._registerDomEvents();

        // Register any internal event handlers
        this._registerDataEvents();
        this._registerSelectionEvents();
        this._registerDropdownEvents();
        this._registerResultsEvents();
        this._registerEvents();

        // Set the initial state
        this.dataAdapter.current(function (initialData) {
          self.trigger('selection:update', {
            data: initialData
          });
        });

        // Hide the original select
        $element.addClass('select2-hidden-accessible');
        $element.attr('aria-hidden', 'true');

        // Synchronize any monitored attributes
        this._syncAttributes();
        Utils.StoreData($element[0], 'select2', this);

        // Ensure backwards compatibility with $element.data('select2').
        $element.data('select2', this);
      };
      Utils.Extend(_Select, Utils.Observable);
      _Select.prototype._generateId = function ($element) {
        var id = '';
        if ($element.attr('id') != null) {
          id = $element.attr('id');
        } else if ($element.attr('name') != null) {
          id = $element.attr('name') + '-' + Utils.generateChars(2);
        } else {
          id = Utils.generateChars(4);
        }
        id = id.replace(/(:|\.|\[|\]|,)/g, '');
        id = 'select2-' + id;
        return id;
      };
      _Select.prototype._placeContainer = function ($container) {
        $container.insertAfter(this.$element);
        var width = this._resolveWidth(this.$element, this.options.get('width'));
        if (width != null) {
          $container.css('width', width);
        }
      };
      _Select.prototype._resolveWidth = function ($element, method) {
        var WIDTH = /^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i;
        if (method == 'resolve') {
          var styleWidth = this._resolveWidth($element, 'style');
          if (styleWidth != null) {
            return styleWidth;
          }
          return this._resolveWidth($element, 'element');
        }
        if (method == 'element') {
          var elementWidth = $element.outerWidth(false);
          if (elementWidth <= 0) {
            return 'auto';
          }
          return elementWidth + 'px';
        }
        if (method == 'style') {
          var style = $element.attr('style');
          if (typeof style !== 'string') {
            return null;
          }
          var attrs = style.split(';');
          for (var i = 0, l = attrs.length; i < l; i = i + 1) {
            var attr = attrs[i].replace(/\s/g, '');
            var matches = attr.match(WIDTH);
            if (matches !== null && matches.length >= 1) {
              return matches[1];
            }
          }
          return null;
        }
        return method;
      };
      _Select.prototype._bindAdapters = function () {
        this.dataAdapter.bind(this, this.$container);
        this.selection.bind(this, this.$container);
        this.dropdown.bind(this, this.$container);
        this.results.bind(this, this.$container);
      };
      _Select.prototype._registerDomEvents = function () {
        var self = this;
        this.$element.on('change.select2', function () {
          self.dataAdapter.current(function (data) {
            self.trigger('selection:update', {
              data: data
            });
          });
        });
        this.$element.on('focus.select2', function (evt) {
          self.trigger('focus', evt);
        });
        this._syncA = Utils.bind(this._syncAttributes, this);
        this._syncS = Utils.bind(this._syncSubtree, this);
        if (this.$element[0].attachEvent) {
          this.$element[0].attachEvent('onpropertychange', this._syncA);
        }
        var observer = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
        if (observer != null) {
          this._observer = new observer(function (mutations) {
            $.each(mutations, self._syncA);
            $.each(mutations, self._syncS);
          });
          this._observer.observe(this.$element[0], {
            attributes: true,
            childList: true,
            subtree: false
          });
        } else if (this.$element[0].addEventListener) {
          this.$element[0].addEventListener('DOMAttrModified', self._syncA, false);
          this.$element[0].addEventListener('DOMNodeInserted', self._syncS, false);
          this.$element[0].addEventListener('DOMNodeRemoved', self._syncS, false);
        }
      };
      _Select.prototype._registerDataEvents = function () {
        var self = this;
        this.dataAdapter.on('*', function (name, params) {
          self.trigger(name, params);
        });
      };
      _Select.prototype._registerSelectionEvents = function () {
        var self = this;
        var nonRelayEvents = ['toggle', 'focus'];
        this.selection.on('toggle', function () {
          self.toggleDropdown();
        });
        this.selection.on('focus', function (params) {
          self.focus(params);
        });
        this.selection.on('*', function (name, params) {
          if ($.inArray(name, nonRelayEvents) !== -1) {
            return;
          }
          self.trigger(name, params);
        });
      };
      _Select.prototype._registerDropdownEvents = function () {
        var self = this;
        this.dropdown.on('*', function (name, params) {
          self.trigger(name, params);
        });
      };
      _Select.prototype._registerResultsEvents = function () {
        var self = this;
        this.results.on('*', function (name, params) {
          self.trigger(name, params);
        });
      };
      _Select.prototype._registerEvents = function () {
        var self = this;
        this.on('open', function () {
          self.$container.addClass('select2-container--open');
        });
        this.on('close', function () {
          self.$container.removeClass('select2-container--open');
        });
        this.on('enable', function () {
          self.$container.removeClass('select2-container--disabled');
        });
        this.on('disable', function () {
          self.$container.addClass('select2-container--disabled');
        });
        this.on('blur', function () {
          self.$container.removeClass('select2-container--focus');
        });
        this.on('query', function (params) {
          if (!self.isOpen()) {
            self.trigger('open', {});
          }
          this.dataAdapter.query(params, function (data) {
            self.trigger('results:all', {
              data: data,
              query: params
            });
          });
        });
        this.on('query:append', function (params) {
          this.dataAdapter.query(params, function (data) {
            self.trigger('results:append', {
              data: data,
              query: params
            });
          });
        });
        this.on('keypress', function (evt) {
          var key = evt.which;
          if (self.isOpen()) {
            if (key === KEYS.ESC || key === KEYS.TAB || key === KEYS.UP && evt.altKey) {
              self.close();
              evt.preventDefault();
            } else if (key === KEYS.ENTER) {
              self.trigger('results:select', {});
              evt.preventDefault();
            } else if (key === KEYS.SPACE && evt.ctrlKey) {
              self.trigger('results:toggle', {});
              evt.preventDefault();
            } else if (key === KEYS.UP) {
              self.trigger('results:previous', {});
              evt.preventDefault();
            } else if (key === KEYS.DOWN) {
              self.trigger('results:next', {});
              evt.preventDefault();
            }
          } else {
            if (key === KEYS.ENTER || key === KEYS.SPACE || key === KEYS.DOWN && evt.altKey) {
              self.open();
              evt.preventDefault();
            }
          }
        });
      };
      _Select.prototype._syncAttributes = function () {
        this.options.set('disabled', this.$element.prop('disabled'));
        if (this.options.get('disabled')) {
          if (this.isOpen()) {
            this.close();
          }
          this.trigger('disable', {});
        } else {
          this.trigger('enable', {});
        }
      };
      _Select.prototype._syncSubtree = function (evt, mutations) {
        var changed = false;
        var self = this;

        // Ignore any mutation events raised for elements that aren't options or
        // optgroups. This handles the case when the select element is destroyed
        if (evt && evt.target && evt.target.nodeName !== 'OPTION' && evt.target.nodeName !== 'OPTGROUP') {
          return;
        }
        if (!mutations) {
          // If mutation events aren't supported, then we can only assume that the
          // change affected the selections
          changed = true;
        } else if (mutations.addedNodes && mutations.addedNodes.length > 0) {
          for (var n = 0; n < mutations.addedNodes.length; n++) {
            var node = mutations.addedNodes[n];
            if (node.selected) {
              changed = true;
            }
          }
        } else if (mutations.removedNodes && mutations.removedNodes.length > 0) {
          changed = true;
        }

        // Only re-pull the data if we think there is a change
        if (changed) {
          this.dataAdapter.current(function (currentData) {
            self.trigger('selection:update', {
              data: currentData
            });
          });
        }
      };

      /**
       * Override the trigger method to automatically trigger pre-events when
       * there are events that can be prevented.
       */
      _Select.prototype.trigger = function (name, args) {
        var actualTrigger = _Select.__super__.trigger;
        var preTriggerMap = {
          'open': 'opening',
          'close': 'closing',
          'select': 'selecting',
          'unselect': 'unselecting',
          'clear': 'clearing'
        };
        if (args === undefined) {
          args = {};
        }
        if (name in preTriggerMap) {
          var preTriggerName = preTriggerMap[name];
          var preTriggerArgs = {
            prevented: false,
            name: name,
            args: args
          };
          actualTrigger.call(this, preTriggerName, preTriggerArgs);
          if (preTriggerArgs.prevented) {
            args.prevented = true;
            return;
          }
        }
        actualTrigger.call(this, name, args);
      };
      _Select.prototype.toggleDropdown = function () {
        if (this.options.get('disabled')) {
          return;
        }
        if (this.isOpen()) {
          this.close();
        } else {
          this.open();
        }
      };
      _Select.prototype.open = function () {
        if (this.isOpen()) {
          return;
        }
        this.trigger('query', {});
      };
      _Select.prototype.close = function () {
        if (!this.isOpen()) {
          return;
        }
        this.trigger('close', {});
      };
      _Select.prototype.isOpen = function () {
        return this.$container.hasClass('select2-container--open');
      };
      _Select.prototype.hasFocus = function () {
        return this.$container.hasClass('select2-container--focus');
      };
      _Select.prototype.focus = function (data) {
        // No need to re-trigger focus events if we are already focused
        if (this.hasFocus()) {
          return;
        }
        this.$container.addClass('select2-container--focus');
        this.trigger('focus', {});
      };
      _Select.prototype.enable = function (args) {
        if (this.options.get('debug') && window.console && console.warn) {
          console.warn('Select2: The `select2("enable")` method has been deprecated and will' + ' be removed in later Select2 versions. Use $element.prop("disabled")' + ' instead.');
        }
        if (args == null || args.length === 0) {
          args = [true];
        }
        var disabled = !args[0];
        this.$element.prop('disabled', disabled);
      };
      _Select.prototype.data = function () {
        if (this.options.get('debug') && arguments.length > 0 && window.console && console.warn) {
          console.warn('Select2: Data can no longer be set using `select2("data")`. You ' + 'should consider setting the value instead using `$element.val()`.');
        }
        var data = [];
        this.dataAdapter.current(function (currentData) {
          data = currentData;
        });
        return data;
      };
      _Select.prototype.val = function (args) {
        if (this.options.get('debug') && window.console && console.warn) {
          console.warn('Select2: The `select2("val")` method has been deprecated and will be' + ' removed in later Select2 versions. Use $element.val() instead.');
        }
        if (args == null || args.length === 0) {
          return this.$element.val();
        }
        var newVal = args[0];
        if ($.isArray(newVal)) {
          newVal = $.map(newVal, function (obj) {
            return obj.toString();
          });
        }
        this.$element.val(newVal).trigger('change');
      };
      _Select.prototype.destroy = function () {
        this.$container.remove();
        if (this.$element[0].detachEvent) {
          this.$element[0].detachEvent('onpropertychange', this._syncA);
        }
        if (this._observer != null) {
          this._observer.disconnect();
          this._observer = null;
        } else if (this.$element[0].removeEventListener) {
          this.$element[0].removeEventListener('DOMAttrModified', this._syncA, false);
          this.$element[0].removeEventListener('DOMNodeInserted', this._syncS, false);
          this.$element[0].removeEventListener('DOMNodeRemoved', this._syncS, false);
        }
        this._syncA = null;
        this._syncS = null;
        this.$element.off('.select2');
        this.$element.attr('tabindex', Utils.GetData(this.$element[0], 'old-tabindex'));
        this.$element.removeClass('select2-hidden-accessible');
        this.$element.attr('aria-hidden', 'false');
        Utils.RemoveData(this.$element[0]);
        this.$element.removeData('select2');
        this.dataAdapter.destroy();
        this.selection.destroy();
        this.dropdown.destroy();
        this.results.destroy();
        this.dataAdapter = null;
        this.selection = null;
        this.dropdown = null;
        this.results = null;
      };
      _Select.prototype.render = function () {
        var $container = $('<span class="select2 select2-container">' + '<span class="selection"></span>' + '<span class="dropdown-wrapper" aria-hidden="true"></span>' + '</span>');
        $container.attr('dir', this.options.get('dir'));
        this.$container = $container;
        this.$container.addClass('select2-container--' + this.options.get('theme'));
        Utils.StoreData($container[0], 'element', this.$element);
        return $container;
      };
      return _Select;
    });
    S2.define('jquery-mousewheel', ['jquery'], function ($) {
      // Used to shim jQuery.mousewheel for non-full builds.
      return $;
    });
    S2.define('jquery.select2', ['jquery', 'jquery-mousewheel', './select2/core', './select2/defaults', './select2/utils'], function ($, _, Select2, Defaults, Utils) {
      if ($.fn.select2 == null) {
        // All methods that should return the element
        var thisMethods = ['open', 'close', 'destroy'];
        $.fn.select2 = function (options) {
          options = options || {};
          if (_typeof(options) === 'object') {
            this.each(function () {
              var instanceOptions = $.extend(true, {}, options);
              var instance = new Select2($(this), instanceOptions);
            });
            return this;
          } else if (typeof options === 'string') {
            var ret;
            var args = Array.prototype.slice.call(arguments, 1);
            this.each(function () {
              var instance = Utils.GetData(this, 'select2');
              if (instance == null && window.console && console.error) {
                console.error('The select2(\'' + options + '\') method was called on an ' + 'element that is not using Select2.');
              }
              ret = instance[options].apply(instance, args);
            });

            // Check if we should be returning `this`
            if ($.inArray(options, thisMethods) > -1) {
              return this;
            }
            return ret;
          } else {
            throw new Error('Invalid arguments for Select2: ' + options);
          }
        };
      }
      if ($.fn.select2.defaults == null) {
        $.fn.select2.defaults = Defaults;
      }
      return Select2;
    });

    // Return the AMD loader configuration so it can be used outside of this file
    return {
      define: S2.define,
      require: S2.require
    };
  }();

  // Autoload the jQuery bindings
  // We know that all of the modules exist above this, so we're safe
  var select2 = S2.require('jquery.select2');

  // Hold the AMD module references on the jQuery function that was just loaded
  // This allows Select2 to use the internal loader outside of this file, such
  // as in the language files.
  jQuery.fn.select2.amd = S2;

  // Return the Select2 instance for anyone who is importing it.
  return select2;
});

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_internals_export_js","vendors-node_modules_core-js_internals_add-to-unscopables_js-node_modules_core-js_internals_a-09983a","vendors-node_modules_core-js_internals_array-slice_js-node_modules_core-js_internals_function-caeab8","vendors-node_modules_core-js_modules_es_string_iterator_js-node_modules_core-js_modules_es_sy-23bad7","vendors-node_modules_jquery_dist_jquery_js","vendors-node_modules_core-js_internals_advance-string-index_js-node_modules_core-js_internals-27e96d","vendors-node_modules_core-js_modules_es_array_concat_js-node_modules_core-js_modules_es_array-9486d0"], () => (__webpack_exec__("./assets/css/portoadmin/vendor/select2/js/select2.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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USxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxJQUFJO1FBQ2QsTUFBUSxFQUFFLElBQUk7UUFDZCxRQUFRLEVBQUUsSUFBSTtRQUNkLFFBQVEsRUFBRSxJQUFJO1FBQ2QsUUFBUSxFQUFFLElBQUk7UUFDZCxRQUFRLEVBQUUsSUFBSTtRQUNkLFFBQVEsRUFBRSxJQUFJO1FBQ2QsUUFBUSxFQUFFLElBQUk7UUFDZCxRQUFRLEVBQUUsSUFBSTtRQUNkLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixNQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsSUFBSTtRQUNkLFFBQVEsRUFBRSxJQUFJO1FBQ2QsUUFBUSxFQUFFLElBQUk7UUFDZCxRQUFRLEVBQUUsSUFBSTtRQUNkLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixNQUFRLEVBQUUsR0FBRztRQUNiLE1BQVEsRUFBRSxHQUFHO1FBQ2IsTUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLE1BQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLE1BQVEsRUFBRSxHQUFHO1FBQ2IsTUFBUSxFQUFFLEdBQUc7UUFDYixNQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsTUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxJQUFJO1FBQ2QsUUFBUSxFQUFFLElBQUk7UUFDZCxRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsTUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxJQUFJO1FBQ2QsUUFBUSxFQUFFLElBQUk7UUFDZCxRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsTUFBUSxFQUFFLEdBQUc7UUFDYixNQUFRLEVBQUUsR0FBRztRQUNiLE1BQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixNQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLE1BQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixNQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsSUFBSTtRQUNkLFFBQVEsRUFBRSxJQUFJO1FBQ2QsUUFBUSxFQUFFLElBQUk7UUFDZCxRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsSUFBSTtRQUNkLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixNQUFRLEVBQUUsR0FBRztRQUNiLE1BQVEsRUFBRSxHQUFHO1FBQ2IsTUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsTUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLElBQUk7UUFDZCxRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLE1BQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLE1BQVEsRUFBRSxHQUFHO1FBQ2IsTUFBUSxFQUFFLEdBQUc7UUFDYixNQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsTUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsTUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsTUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLElBQUk7UUFDZCxNQUFRLEVBQUUsSUFBSTtRQUNkLFFBQVEsRUFBRSxJQUFJO1FBQ2QsUUFBUSxFQUFFLElBQUk7UUFDZCxRQUFRLEVBQUUsSUFBSTtRQUNkLFFBQVEsRUFBRSxJQUFJO1FBQ2QsUUFBUSxFQUFFLElBQUk7UUFDZCxRQUFRLEVBQUUsSUFBSTtRQUNkLFFBQVEsRUFBRSxJQUFJO1FBQ2QsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLE1BQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLElBQUk7UUFDZCxRQUFRLEVBQUUsSUFBSTtRQUNkLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixNQUFRLEVBQUUsR0FBRztRQUNiLE1BQVEsRUFBRSxHQUFHO1FBQ2IsTUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLE1BQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxJQUFJO1FBQ2QsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLE1BQVEsRUFBRSxHQUFHO1FBQ2IsTUFBUSxFQUFFLEdBQUc7UUFDYixNQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLE1BQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsSUFBSTtRQUNkLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixNQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsSUFBSTtRQUNkLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixNQUFRLEVBQUUsR0FBRztRQUNiLE1BQVEsRUFBRSxHQUFHO1FBQ2IsTUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLE1BQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsTUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLE1BQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxJQUFJO1FBQ2QsUUFBUSxFQUFFLElBQUk7UUFDZCxRQUFRLEVBQUUsSUFBSTtRQUNkLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixNQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsSUFBSTtRQUNkLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixNQUFRLEVBQUUsR0FBRztRQUNiLE1BQVEsRUFBRSxHQUFHO1FBQ2IsTUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsTUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLElBQUk7UUFDZCxRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsTUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLE1BQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsUUFBUTtRQUNsQixRQUFRLEVBQUUsUUFBUTtRQUNsQixRQUFRLEVBQUUsUUFBUTtRQUNsQixRQUFRLEVBQUUsUUFBUTtRQUNsQixRQUFRLEVBQUUsUUFBUTtRQUNsQixRQUFRLEVBQUUsUUFBUTtRQUNsQixRQUFRLEVBQUUsUUFBUTtRQUNsQixRQUFRLEVBQUUsUUFBUTtRQUNsQixRQUFRLEVBQUUsUUFBUTtRQUNsQixRQUFRLEVBQUUsUUFBUTtRQUNsQixRQUFRLEVBQUUsUUFBUTtRQUNsQixRQUFRLEVBQUUsUUFBUTtRQUNsQixRQUFRLEVBQUUsUUFBUTtRQUNsQixRQUFRLEVBQUUsUUFBUTtRQUNsQixRQUFRLEVBQUUsUUFBUTtRQUNsQixRQUFRLEVBQUUsUUFBUTtRQUNsQixRQUFRLEVBQUUsUUFBUTtRQUNsQixRQUFRLEVBQUUsUUFBUTtRQUNsQixRQUFRLEVBQUUsUUFBUTtRQUNsQixRQUFRLEVBQUUsUUFBUTtRQUNsQixRQUFRLEVBQUU7TUFDWixDQUFDO01BRUQsT0FBT0EsVUFBVTtJQUNuQixDQUFDLENBQUM7SUFFRmxZLEVBQUUsQ0FBQ1YsTUFBTSxDQUFDLG1CQUFtQixFQUFDLENBQzVCLFVBQVUsQ0FDWCxFQUFFLFVBQVUyRyxLQUFLLEVBQUU7TUFDbEIsU0FBU2tTLFdBQVdBLENBQUV6TixRQUFRLEVBQUVrQixPQUFPLEVBQUU7UUFDdkN1TSxXQUFXLENBQUMxUixTQUFTLENBQUNGLFdBQVcsQ0FBQ2hGLElBQUksQ0FBQyxJQUFJLENBQUM7TUFDOUM7TUFFQTBFLEtBQUssQ0FBQ0MsTUFBTSxDQUFDaVMsV0FBVyxFQUFFbFMsS0FBSyxDQUFDK0IsVUFBVSxDQUFDO01BRTNDbVEsV0FBVyxDQUFDcFgsU0FBUyxDQUFDK00sT0FBTyxHQUFHLFVBQVUzSSxRQUFRLEVBQUU7UUFDbEQsTUFBTSxJQUFJcEIsS0FBSyxDQUFDLHdEQUF3RCxDQUFDO01BQzNFLENBQUM7TUFFRG9VLFdBQVcsQ0FBQ3BYLFNBQVMsQ0FBQ3FYLEtBQUssR0FBRyxVQUFVL1AsTUFBTSxFQUFFbEQsUUFBUSxFQUFFO1FBQ3hELE1BQU0sSUFBSXBCLEtBQUssQ0FBQyxzREFBc0QsQ0FBQztNQUN6RSxDQUFDO01BRURvVSxXQUFXLENBQUNwWCxTQUFTLENBQUNpSSxJQUFJLEdBQUcsVUFBVTBHLFNBQVMsRUFBRUMsVUFBVSxFQUFFO1FBQzVEO01BQUEsQ0FDRDtNQUVEd0ksV0FBVyxDQUFDcFgsU0FBUyxDQUFDMFEsT0FBTyxHQUFHLFlBQVk7UUFDMUM7TUFBQSxDQUNEO01BRUQwRyxXQUFXLENBQUNwWCxTQUFTLENBQUNzWCxnQkFBZ0IsR0FBRyxVQUFVM0ksU0FBUyxFQUFFdEcsSUFBSSxFQUFFO1FBQ2xFLElBQUlwRSxFQUFFLEdBQUcwSyxTQUFTLENBQUMxSyxFQUFFLEdBQUcsVUFBVTtRQUVsQ0EsRUFBRSxJQUFJaUIsS0FBSyxDQUFDd0MsYUFBYSxDQUFDLENBQUMsQ0FBQztRQUU1QixJQUFJVyxJQUFJLENBQUNwRSxFQUFFLElBQUksSUFBSSxFQUFFO1VBQ25CQSxFQUFFLElBQUksR0FBRyxHQUFHb0UsSUFBSSxDQUFDcEUsRUFBRSxDQUFDK0QsUUFBUSxDQUFDLENBQUM7UUFDaEMsQ0FBQyxNQUFNO1VBQ0wvRCxFQUFFLElBQUksR0FBRyxHQUFHaUIsS0FBSyxDQUFDd0MsYUFBYSxDQUFDLENBQUMsQ0FBQztRQUNwQztRQUNBLE9BQU96RCxFQUFFO01BQ1gsQ0FBQztNQUVELE9BQU9tVCxXQUFXO0lBQ3BCLENBQUMsQ0FBQztJQUVGblksRUFBRSxDQUFDVixNQUFNLENBQUMscUJBQXFCLEVBQUMsQ0FDOUIsUUFBUSxFQUNSLFVBQVUsRUFDVixRQUFRLENBQ1QsRUFBRSxVQUFVNlksV0FBVyxFQUFFbFMsS0FBSyxFQUFFSCxDQUFDLEVBQUU7TUFDbEMsU0FBU3dTLGFBQWFBLENBQUU1TixRQUFRLEVBQUVrQixPQUFPLEVBQUU7UUFDekMsSUFBSSxDQUFDbEIsUUFBUSxHQUFHQSxRQUFRO1FBQ3hCLElBQUksQ0FBQ2tCLE9BQU8sR0FBR0EsT0FBTztRQUV0QjBNLGFBQWEsQ0FBQzdSLFNBQVMsQ0FBQ0YsV0FBVyxDQUFDaEYsSUFBSSxDQUFDLElBQUksQ0FBQztNQUNoRDtNQUVBMEUsS0FBSyxDQUFDQyxNQUFNLENBQUNvUyxhQUFhLEVBQUVILFdBQVcsQ0FBQztNQUV4Q0csYUFBYSxDQUFDdlgsU0FBUyxDQUFDK00sT0FBTyxHQUFHLFVBQVUzSSxRQUFRLEVBQUU7UUFDcEQsSUFBSWlFLElBQUksR0FBRyxFQUFFO1FBQ2IsSUFBSXlFLElBQUksR0FBRyxJQUFJO1FBRWYsSUFBSSxDQUFDbkQsUUFBUSxDQUFDZ0MsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDd0IsSUFBSSxDQUFDLFlBQVk7VUFDL0MsSUFBSWpCLE9BQU8sR0FBR25ILENBQUMsQ0FBQyxJQUFJLENBQUM7VUFFckIsSUFBSW9ILE1BQU0sR0FBR1csSUFBSSxDQUFDYixJQUFJLENBQUNDLE9BQU8sQ0FBQztVQUUvQjdELElBQUksQ0FBQzVGLElBQUksQ0FBQzBKLE1BQU0sQ0FBQztRQUNuQixDQUFDLENBQUM7UUFFRi9ILFFBQVEsQ0FBQ2lFLElBQUksQ0FBQztNQUNoQixDQUFDO01BRURrUCxhQUFhLENBQUN2WCxTQUFTLENBQUN3WCxNQUFNLEdBQUcsVUFBVW5QLElBQUksRUFBRTtRQUMvQyxJQUFJeUUsSUFBSSxHQUFHLElBQUk7UUFFZnpFLElBQUksQ0FBQzJFLFFBQVEsR0FBRyxJQUFJOztRQUVwQjtRQUNBLElBQUlqSSxDQUFDLENBQUNzRCxJQUFJLENBQUNnQyxPQUFPLENBQUMsQ0FBQ29OLEVBQUUsQ0FBQyxRQUFRLENBQUMsRUFBRTtVQUNoQ3BQLElBQUksQ0FBQ2dDLE9BQU8sQ0FBQzJDLFFBQVEsR0FBRyxJQUFJO1VBRTVCLElBQUksQ0FBQ3JELFFBQVEsQ0FBQ3RDLE9BQU8sQ0FBQyxRQUFRLENBQUM7VUFFL0I7UUFDRjtRQUVBLElBQUksSUFBSSxDQUFDc0MsUUFBUSxDQUFDcEosSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFO1VBQ2xDLElBQUksQ0FBQ3dNLE9BQU8sQ0FBQyxVQUFVMkssV0FBVyxFQUFFO1lBQ2xDLElBQUl4SixHQUFHLEdBQUcsRUFBRTtZQUVaN0YsSUFBSSxHQUFHLENBQUNBLElBQUksQ0FBQztZQUNiQSxJQUFJLENBQUM1RixJQUFJLENBQUNDLEtBQUssQ0FBQzJGLElBQUksRUFBRXFQLFdBQVcsQ0FBQztZQUVsQyxLQUFLLElBQUkxUSxDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEdBQUdxQixJQUFJLENBQUN6RyxNQUFNLEVBQUVvRixDQUFDLEVBQUUsRUFBRTtjQUNwQyxJQUFJL0MsRUFBRSxHQUFHb0UsSUFBSSxDQUFDckIsQ0FBQyxDQUFDLENBQUMvQyxFQUFFO2NBRW5CLElBQUljLENBQUMsQ0FBQ3FJLE9BQU8sQ0FBQ25KLEVBQUUsRUFBRWlLLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFO2dCQUM3QkEsR0FBRyxDQUFDekwsSUFBSSxDQUFDd0IsRUFBRSxDQUFDO2NBQ2Q7WUFDRjtZQUVBNkksSUFBSSxDQUFDbkQsUUFBUSxDQUFDdUUsR0FBRyxDQUFDQSxHQUFHLENBQUM7WUFDdEJwQixJQUFJLENBQUNuRCxRQUFRLENBQUN0QyxPQUFPLENBQUMsUUFBUSxDQUFDO1VBQ2pDLENBQUMsQ0FBQztRQUNKLENBQUMsTUFBTTtVQUNMLElBQUk2RyxHQUFHLEdBQUc3RixJQUFJLENBQUNwRSxFQUFFO1VBRWpCLElBQUksQ0FBQzBGLFFBQVEsQ0FBQ3VFLEdBQUcsQ0FBQ0EsR0FBRyxDQUFDO1VBQ3RCLElBQUksQ0FBQ3ZFLFFBQVEsQ0FBQ3RDLE9BQU8sQ0FBQyxRQUFRLENBQUM7UUFDakM7TUFDRixDQUFDO01BRURrUSxhQUFhLENBQUN2WCxTQUFTLENBQUMyWCxRQUFRLEdBQUcsVUFBVXRQLElBQUksRUFBRTtRQUNqRCxJQUFJeUUsSUFBSSxHQUFHLElBQUk7UUFFZixJQUFJLENBQUMsSUFBSSxDQUFDbkQsUUFBUSxDQUFDcEosSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFO1VBQ25DO1FBQ0Y7UUFFQThILElBQUksQ0FBQzJFLFFBQVEsR0FBRyxLQUFLO1FBRXJCLElBQUlqSSxDQUFDLENBQUNzRCxJQUFJLENBQUNnQyxPQUFPLENBQUMsQ0FBQ29OLEVBQUUsQ0FBQyxRQUFRLENBQUMsRUFBRTtVQUNoQ3BQLElBQUksQ0FBQ2dDLE9BQU8sQ0FBQzJDLFFBQVEsR0FBRyxLQUFLO1VBRTdCLElBQUksQ0FBQ3JELFFBQVEsQ0FBQ3RDLE9BQU8sQ0FBQyxRQUFRLENBQUM7VUFFL0I7UUFDRjtRQUVBLElBQUksQ0FBQzBGLE9BQU8sQ0FBQyxVQUFVMkssV0FBVyxFQUFFO1VBQ2xDLElBQUl4SixHQUFHLEdBQUcsRUFBRTtVQUVaLEtBQUssSUFBSWxILENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsR0FBRzBRLFdBQVcsQ0FBQzlWLE1BQU0sRUFBRW9GLENBQUMsRUFBRSxFQUFFO1lBQzNDLElBQUkvQyxFQUFFLEdBQUd5VCxXQUFXLENBQUMxUSxDQUFDLENBQUMsQ0FBQy9DLEVBQUU7WUFFMUIsSUFBSUEsRUFBRSxLQUFLb0UsSUFBSSxDQUFDcEUsRUFBRSxJQUFJYyxDQUFDLENBQUNxSSxPQUFPLENBQUNuSixFQUFFLEVBQUVpSyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRTtjQUMvQ0EsR0FBRyxDQUFDekwsSUFBSSxDQUFDd0IsRUFBRSxDQUFDO1lBQ2Q7VUFDRjtVQUVBNkksSUFBSSxDQUFDbkQsUUFBUSxDQUFDdUUsR0FBRyxDQUFDQSxHQUFHLENBQUM7VUFFdEJwQixJQUFJLENBQUNuRCxRQUFRLENBQUN0QyxPQUFPLENBQUMsUUFBUSxDQUFDO1FBQ2pDLENBQUMsQ0FBQztNQUNKLENBQUM7TUFFRGtRLGFBQWEsQ0FBQ3ZYLFNBQVMsQ0FBQ2lJLElBQUksR0FBRyxVQUFVMEcsU0FBUyxFQUFFQyxVQUFVLEVBQUU7UUFDOUQsSUFBSTlCLElBQUksR0FBRyxJQUFJO1FBRWYsSUFBSSxDQUFDNkIsU0FBUyxHQUFHQSxTQUFTO1FBRTFCQSxTQUFTLENBQUN4SCxFQUFFLENBQUMsUUFBUSxFQUFFLFVBQVVHLE1BQU0sRUFBRTtVQUN2Q3dGLElBQUksQ0FBQzBLLE1BQU0sQ0FBQ2xRLE1BQU0sQ0FBQ2UsSUFBSSxDQUFDO1FBQzFCLENBQUMsQ0FBQztRQUVGc0csU0FBUyxDQUFDeEgsRUFBRSxDQUFDLFVBQVUsRUFBRSxVQUFVRyxNQUFNLEVBQUU7VUFDekN3RixJQUFJLENBQUM2SyxRQUFRLENBQUNyUSxNQUFNLENBQUNlLElBQUksQ0FBQztRQUM1QixDQUFDLENBQUM7TUFDSixDQUFDO01BRURrUCxhQUFhLENBQUN2WCxTQUFTLENBQUMwUSxPQUFPLEdBQUcsWUFBWTtRQUM1QztRQUNBLElBQUksQ0FBQy9HLFFBQVEsQ0FBQ2dDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQ3dCLElBQUksQ0FBQyxZQUFZO1VBQ3ZDO1VBQ0FqSSxLQUFLLENBQUN5RixVQUFVLENBQUMsSUFBSSxDQUFDO1FBQ3hCLENBQUMsQ0FBQztNQUNKLENBQUM7TUFFRDRNLGFBQWEsQ0FBQ3ZYLFNBQVMsQ0FBQ3FYLEtBQUssR0FBRyxVQUFVL1AsTUFBTSxFQUFFbEQsUUFBUSxFQUFFO1FBQzFELElBQUlpRSxJQUFJLEdBQUcsRUFBRTtRQUNiLElBQUl5RSxJQUFJLEdBQUcsSUFBSTtRQUVmLElBQUlqQixRQUFRLEdBQUcsSUFBSSxDQUFDbEMsUUFBUSxDQUFDb0MsUUFBUSxDQUFDLENBQUM7UUFFdkNGLFFBQVEsQ0FBQ3NCLElBQUksQ0FBQyxZQUFZO1VBQ3hCLElBQUlqQixPQUFPLEdBQUduSCxDQUFDLENBQUMsSUFBSSxDQUFDO1VBRXJCLElBQUksQ0FBQ21ILE9BQU8sQ0FBQ3VMLEVBQUUsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDdkwsT0FBTyxDQUFDdUwsRUFBRSxDQUFDLFVBQVUsQ0FBQyxFQUFFO1lBQ3BEO1VBQ0Y7VUFFQSxJQUFJdEwsTUFBTSxHQUFHVyxJQUFJLENBQUNiLElBQUksQ0FBQ0MsT0FBTyxDQUFDO1VBRS9CLElBQUkwTCxPQUFPLEdBQUc5SyxJQUFJLENBQUM4SyxPQUFPLENBQUN0USxNQUFNLEVBQUU2RSxNQUFNLENBQUM7VUFFMUMsSUFBSXlMLE9BQU8sS0FBSyxJQUFJLEVBQUU7WUFDcEJ2UCxJQUFJLENBQUM1RixJQUFJLENBQUNtVixPQUFPLENBQUM7VUFDcEI7UUFDRixDQUFDLENBQUM7UUFFRnhULFFBQVEsQ0FBQztVQUNQMEgsT0FBTyxFQUFFekQ7UUFDWCxDQUFDLENBQUM7TUFDSixDQUFDO01BRURrUCxhQUFhLENBQUN2WCxTQUFTLENBQUM2WCxVQUFVLEdBQUcsVUFBVWhNLFFBQVEsRUFBRTtRQUN2RDNHLEtBQUssQ0FBQ3dFLFVBQVUsQ0FBQyxJQUFJLENBQUNDLFFBQVEsRUFBRWtDLFFBQVEsQ0FBQztNQUMzQyxDQUFDO01BRUQwTCxhQUFhLENBQUN2WCxTQUFTLENBQUNtTSxNQUFNLEdBQUcsVUFBVTlELElBQUksRUFBRTtRQUMvQyxJQUFJOEQsTUFBTTtRQUVWLElBQUk5RCxJQUFJLENBQUMwRCxRQUFRLEVBQUU7VUFDakJJLE1BQU0sR0FBR3lCLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLFVBQVUsQ0FBQztVQUMzQzFCLE1BQU0sQ0FBQ2dDLEtBQUssR0FBRzlGLElBQUksQ0FBQ29GLElBQUk7UUFDMUIsQ0FBQyxNQUFNO1VBQ0x0QixNQUFNLEdBQUd5QixRQUFRLENBQUNDLGFBQWEsQ0FBQyxRQUFRLENBQUM7VUFFekMsSUFBSTFCLE1BQU0sQ0FBQzJMLFdBQVcsS0FBS2haLFNBQVMsRUFBRTtZQUNwQ3FOLE1BQU0sQ0FBQzJMLFdBQVcsR0FBR3pQLElBQUksQ0FBQ29GLElBQUk7VUFDaEMsQ0FBQyxNQUFNO1lBQ0x0QixNQUFNLENBQUM0TCxTQUFTLEdBQUcxUCxJQUFJLENBQUNvRixJQUFJO1VBQzlCO1FBQ0Y7UUFFQSxJQUFJcEYsSUFBSSxDQUFDcEUsRUFBRSxLQUFLbkYsU0FBUyxFQUFFO1VBQ3pCcU4sTUFBTSxDQUFDckosS0FBSyxHQUFHdUYsSUFBSSxDQUFDcEUsRUFBRTtRQUN4QjtRQUVBLElBQUlvRSxJQUFJLENBQUNtRixRQUFRLEVBQUU7VUFDakJyQixNQUFNLENBQUNxQixRQUFRLEdBQUcsSUFBSTtRQUN4QjtRQUVBLElBQUluRixJQUFJLENBQUMyRSxRQUFRLEVBQUU7VUFDakJiLE1BQU0sQ0FBQ2EsUUFBUSxHQUFHLElBQUk7UUFDeEI7UUFFQSxJQUFJM0UsSUFBSSxDQUFDMkYsS0FBSyxFQUFFO1VBQ2Q3QixNQUFNLENBQUM2QixLQUFLLEdBQUczRixJQUFJLENBQUMyRixLQUFLO1FBQzNCO1FBRUEsSUFBSTlCLE9BQU8sR0FBR25ILENBQUMsQ0FBQ29ILE1BQU0sQ0FBQztRQUV2QixJQUFJNkwsY0FBYyxHQUFHLElBQUksQ0FBQ0MsY0FBYyxDQUFDNVAsSUFBSSxDQUFDO1FBQzlDMlAsY0FBYyxDQUFDM04sT0FBTyxHQUFHOEIsTUFBTTs7UUFFL0I7UUFDQWpILEtBQUssQ0FBQ3VGLFNBQVMsQ0FBQzBCLE1BQU0sRUFBRSxNQUFNLEVBQUU2TCxjQUFjLENBQUM7UUFFL0MsT0FBTzlMLE9BQU87TUFDaEIsQ0FBQztNQUVEcUwsYUFBYSxDQUFDdlgsU0FBUyxDQUFDaU0sSUFBSSxHQUFHLFVBQVVDLE9BQU8sRUFBRTtRQUNoRCxJQUFJN0QsSUFBSSxHQUFHLENBQUMsQ0FBQztRQUViQSxJQUFJLEdBQUduRCxLQUFLLENBQUN3RixPQUFPLENBQUN3QixPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsTUFBTSxDQUFDO1FBRXhDLElBQUk3RCxJQUFJLElBQUksSUFBSSxFQUFFO1VBQ2hCLE9BQU9BLElBQUk7UUFDYjtRQUVBLElBQUk2RCxPQUFPLENBQUN1TCxFQUFFLENBQUMsUUFBUSxDQUFDLEVBQUU7VUFDeEJwUCxJQUFJLEdBQUc7WUFDTHBFLEVBQUUsRUFBRWlJLE9BQU8sQ0FBQ2dDLEdBQUcsQ0FBQyxDQUFDO1lBQ2pCVCxJQUFJLEVBQUV2QixPQUFPLENBQUN1QixJQUFJLENBQUMsQ0FBQztZQUNwQkQsUUFBUSxFQUFFdEIsT0FBTyxDQUFDM0wsSUFBSSxDQUFDLFVBQVUsQ0FBQztZQUNsQ3lNLFFBQVEsRUFBRWQsT0FBTyxDQUFDM0wsSUFBSSxDQUFDLFVBQVUsQ0FBQztZQUNsQ3lOLEtBQUssRUFBRTlCLE9BQU8sQ0FBQzNMLElBQUksQ0FBQyxPQUFPO1VBQzdCLENBQUM7UUFDSCxDQUFDLE1BQU0sSUFBSTJMLE9BQU8sQ0FBQ3VMLEVBQUUsQ0FBQyxVQUFVLENBQUMsRUFBRTtVQUNqQ3BQLElBQUksR0FBRztZQUNMb0YsSUFBSSxFQUFFdkIsT0FBTyxDQUFDM0wsSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUMzQndMLFFBQVEsRUFBRSxFQUFFO1lBQ1ppQyxLQUFLLEVBQUU5QixPQUFPLENBQUMzTCxJQUFJLENBQUMsT0FBTztVQUM3QixDQUFDO1VBRUQsSUFBSStOLFNBQVMsR0FBR3BDLE9BQU8sQ0FBQ0gsUUFBUSxDQUFDLFFBQVEsQ0FBQztVQUMxQyxJQUFJQSxRQUFRLEdBQUcsRUFBRTtVQUVqQixLQUFLLElBQUl3QyxDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEdBQUdELFNBQVMsQ0FBQzFNLE1BQU0sRUFBRTJNLENBQUMsRUFBRSxFQUFFO1lBQ3pDLElBQUlFLE1BQU0sR0FBRzFKLENBQUMsQ0FBQ3VKLFNBQVMsQ0FBQ0MsQ0FBQyxDQUFDLENBQUM7WUFFNUIsSUFBSUMsS0FBSyxHQUFHLElBQUksQ0FBQ3ZDLElBQUksQ0FBQ3dDLE1BQU0sQ0FBQztZQUU3QjFDLFFBQVEsQ0FBQ3RKLElBQUksQ0FBQytMLEtBQUssQ0FBQztVQUN0QjtVQUVBbkcsSUFBSSxDQUFDMEQsUUFBUSxHQUFHQSxRQUFRO1FBQzFCO1FBRUExRCxJQUFJLEdBQUcsSUFBSSxDQUFDNFAsY0FBYyxDQUFDNVAsSUFBSSxDQUFDO1FBQ2hDQSxJQUFJLENBQUNnQyxPQUFPLEdBQUc2QixPQUFPLENBQUMsQ0FBQyxDQUFDO1FBRXpCaEgsS0FBSyxDQUFDdUYsU0FBUyxDQUFDeUIsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLE1BQU0sRUFBRTdELElBQUksQ0FBQztRQUV6QyxPQUFPQSxJQUFJO01BQ2IsQ0FBQztNQUVEa1AsYUFBYSxDQUFDdlgsU0FBUyxDQUFDaVksY0FBYyxHQUFHLFVBQVVoTSxJQUFJLEVBQUU7UUFDdkQsSUFBSUEsSUFBSSxLQUFLbE0sTUFBTSxDQUFDa00sSUFBSSxDQUFDLEVBQUU7VUFDekJBLElBQUksR0FBRztZQUNMaEksRUFBRSxFQUFFZ0ksSUFBSTtZQUNSd0IsSUFBSSxFQUFFeEI7VUFDUixDQUFDO1FBQ0g7UUFFQUEsSUFBSSxHQUFHbEgsQ0FBQyxDQUFDOFIsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFO1VBQ2xCcEosSUFBSSxFQUFFO1FBQ1IsQ0FBQyxFQUFFeEIsSUFBSSxDQUFDO1FBRVIsSUFBSWlNLFFBQVEsR0FBRztVQUNibEwsUUFBUSxFQUFFLEtBQUs7VUFDZlEsUUFBUSxFQUFFO1FBQ1osQ0FBQztRQUVELElBQUl2QixJQUFJLENBQUNoSSxFQUFFLElBQUksSUFBSSxFQUFFO1VBQ25CZ0ksSUFBSSxDQUFDaEksRUFBRSxHQUFHZ0ksSUFBSSxDQUFDaEksRUFBRSxDQUFDK0QsUUFBUSxDQUFDLENBQUM7UUFDOUI7UUFFQSxJQUFJaUUsSUFBSSxDQUFDd0IsSUFBSSxJQUFJLElBQUksRUFBRTtVQUNyQnhCLElBQUksQ0FBQ3dCLElBQUksR0FBR3hCLElBQUksQ0FBQ3dCLElBQUksQ0FBQ3pGLFFBQVEsQ0FBQyxDQUFDO1FBQ2xDO1FBRUEsSUFBSWlFLElBQUksQ0FBQzhCLFNBQVMsSUFBSSxJQUFJLElBQUk5QixJQUFJLENBQUNoSSxFQUFFLElBQUksSUFBSSxDQUFDMEssU0FBUyxJQUFJLElBQUksRUFBRTtVQUMvRDFDLElBQUksQ0FBQzhCLFNBQVMsR0FBRyxJQUFJLENBQUN1SixnQkFBZ0IsQ0FBQyxJQUFJLENBQUMzSSxTQUFTLEVBQUUxQyxJQUFJLENBQUM7UUFDOUQ7UUFFQSxPQUFPbEgsQ0FBQyxDQUFDOFIsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFcUIsUUFBUSxFQUFFak0sSUFBSSxDQUFDO01BQ3JDLENBQUM7TUFFRHNMLGFBQWEsQ0FBQ3ZYLFNBQVMsQ0FBQzRYLE9BQU8sR0FBRyxVQUFVdFEsTUFBTSxFQUFFZSxJQUFJLEVBQUU7UUFDeEQsSUFBSThQLE9BQU8sR0FBRyxJQUFJLENBQUN0TixPQUFPLENBQUNJLEdBQUcsQ0FBQyxTQUFTLENBQUM7UUFFekMsT0FBT2tOLE9BQU8sQ0FBQzdRLE1BQU0sRUFBRWUsSUFBSSxDQUFDO01BQzlCLENBQUM7TUFFRCxPQUFPa1AsYUFBYTtJQUN0QixDQUFDLENBQUM7SUFFRnRZLEVBQUUsQ0FBQ1YsTUFBTSxDQUFDLG9CQUFvQixFQUFDLENBQzdCLFVBQVUsRUFDVixVQUFVLEVBQ1YsUUFBUSxDQUNULEVBQUUsVUFBVWdaLGFBQWEsRUFBRXJTLEtBQUssRUFBRUgsQ0FBQyxFQUFFO01BQ3BDLFNBQVNxVCxZQUFZQSxDQUFFek8sUUFBUSxFQUFFa0IsT0FBTyxFQUFFO1FBQ3hDLElBQUl4QyxJQUFJLEdBQUd3QyxPQUFPLENBQUNJLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFO1FBRXBDbU4sWUFBWSxDQUFDMVMsU0FBUyxDQUFDRixXQUFXLENBQUNoRixJQUFJLENBQUMsSUFBSSxFQUFFbUosUUFBUSxFQUFFa0IsT0FBTyxDQUFDO1FBRWhFLElBQUksQ0FBQ2dOLFVBQVUsQ0FBQyxJQUFJLENBQUNRLGdCQUFnQixDQUFDaFEsSUFBSSxDQUFDLENBQUM7TUFDOUM7TUFFQW5ELEtBQUssQ0FBQ0MsTUFBTSxDQUFDaVQsWUFBWSxFQUFFYixhQUFhLENBQUM7TUFFekNhLFlBQVksQ0FBQ3BZLFNBQVMsQ0FBQ3dYLE1BQU0sR0FBRyxVQUFVblAsSUFBSSxFQUFFO1FBQzlDLElBQUk2RCxPQUFPLEdBQUcsSUFBSSxDQUFDdkMsUUFBUSxDQUFDZ0MsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDZSxNQUFNLENBQUMsVUFBVXRMLENBQUMsRUFBRWtYLEdBQUcsRUFBRTtVQUNsRSxPQUFPQSxHQUFHLENBQUN4VixLQUFLLElBQUl1RixJQUFJLENBQUNwRSxFQUFFLENBQUMrRCxRQUFRLENBQUMsQ0FBQztRQUN4QyxDQUFDLENBQUM7UUFFRixJQUFJa0UsT0FBTyxDQUFDdEssTUFBTSxLQUFLLENBQUMsRUFBRTtVQUN4QnNLLE9BQU8sR0FBRyxJQUFJLENBQUNDLE1BQU0sQ0FBQzlELElBQUksQ0FBQztVQUUzQixJQUFJLENBQUN3UCxVQUFVLENBQUMzTCxPQUFPLENBQUM7UUFDMUI7UUFFQWtNLFlBQVksQ0FBQzFTLFNBQVMsQ0FBQzhSLE1BQU0sQ0FBQ2hYLElBQUksQ0FBQyxJQUFJLEVBQUU2SCxJQUFJLENBQUM7TUFDaEQsQ0FBQztNQUVEK1AsWUFBWSxDQUFDcFksU0FBUyxDQUFDcVksZ0JBQWdCLEdBQUcsVUFBVWhRLElBQUksRUFBRTtRQUN4RCxJQUFJeUUsSUFBSSxHQUFHLElBQUk7UUFFZixJQUFJeUwsU0FBUyxHQUFHLElBQUksQ0FBQzVPLFFBQVEsQ0FBQ2dDLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDNUMsSUFBSTZNLFdBQVcsR0FBR0QsU0FBUyxDQUFDN1csR0FBRyxDQUFDLFlBQVk7VUFDMUMsT0FBT29MLElBQUksQ0FBQ2IsSUFBSSxDQUFDbEgsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUNkLEVBQUU7UUFDOUIsQ0FBQyxDQUFDLENBQUNnSCxHQUFHLENBQUMsQ0FBQztRQUVSLElBQUlZLFFBQVEsR0FBRyxFQUFFOztRQUVqQjtRQUNBLFNBQVM0TSxRQUFRQSxDQUFFeE0sSUFBSSxFQUFFO1VBQ3ZCLE9BQU8sWUFBWTtZQUNqQixPQUFPbEgsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDbUosR0FBRyxDQUFDLENBQUMsSUFBSWpDLElBQUksQ0FBQ2hJLEVBQUU7VUFDakMsQ0FBQztRQUNIO1FBRUEsS0FBSyxJQUFJK0MsQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFHcUIsSUFBSSxDQUFDekcsTUFBTSxFQUFFb0YsQ0FBQyxFQUFFLEVBQUU7VUFDcEMsSUFBSWlGLElBQUksR0FBRyxJQUFJLENBQUNnTSxjQUFjLENBQUM1UCxJQUFJLENBQUNyQixDQUFDLENBQUMsQ0FBQzs7VUFFdkM7VUFDQSxJQUFJakMsQ0FBQyxDQUFDcUksT0FBTyxDQUFDbkIsSUFBSSxDQUFDaEksRUFBRSxFQUFFdVUsV0FBVyxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ3hDLElBQUlFLGVBQWUsR0FBR0gsU0FBUyxDQUFDN0wsTUFBTSxDQUFDK0wsUUFBUSxDQUFDeE0sSUFBSSxDQUFDLENBQUM7WUFFdEQsSUFBSTBNLFlBQVksR0FBRyxJQUFJLENBQUMxTSxJQUFJLENBQUN5TSxlQUFlLENBQUM7WUFDN0MsSUFBSUUsT0FBTyxHQUFHN1QsQ0FBQyxDQUFDOFIsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsRUFBRTVLLElBQUksRUFBRTBNLFlBQVksQ0FBQztZQUVwRCxJQUFJRSxVQUFVLEdBQUcsSUFBSSxDQUFDMU0sTUFBTSxDQUFDeU0sT0FBTyxDQUFDO1lBRXJDRixlQUFlLENBQUNJLFdBQVcsQ0FBQ0QsVUFBVSxDQUFDO1lBRXZDO1VBQ0Y7VUFFQSxJQUFJM00sT0FBTyxHQUFHLElBQUksQ0FBQ0MsTUFBTSxDQUFDRixJQUFJLENBQUM7VUFFL0IsSUFBSUEsSUFBSSxDQUFDRixRQUFRLEVBQUU7WUFDakIsSUFBSXVDLFNBQVMsR0FBRyxJQUFJLENBQUMrSixnQkFBZ0IsQ0FBQ3BNLElBQUksQ0FBQ0YsUUFBUSxDQUFDO1lBRXBEN0csS0FBSyxDQUFDd0UsVUFBVSxDQUFDd0MsT0FBTyxFQUFFb0MsU0FBUyxDQUFDO1VBQ3RDO1VBRUF6QyxRQUFRLENBQUNwSixJQUFJLENBQUN5SixPQUFPLENBQUM7UUFDeEI7UUFFQSxPQUFPTCxRQUFRO01BQ2pCLENBQUM7TUFFRCxPQUFPdU0sWUFBWTtJQUNyQixDQUFDLENBQUM7SUFFRm5aLEVBQUUsQ0FBQ1YsTUFBTSxDQUFDLG1CQUFtQixFQUFDLENBQzVCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsUUFBUSxDQUNULEVBQUUsVUFBVTZaLFlBQVksRUFBRWxULEtBQUssRUFBRUgsQ0FBQyxFQUFFO01BQ25DLFNBQVNnVSxXQUFXQSxDQUFFcFAsUUFBUSxFQUFFa0IsT0FBTyxFQUFFO1FBQ3ZDLElBQUksQ0FBQ21PLFdBQVcsR0FBRyxJQUFJLENBQUNDLGNBQWMsQ0FBQ3BPLE9BQU8sQ0FBQ0ksR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRTNELElBQUksSUFBSSxDQUFDK04sV0FBVyxDQUFDRSxjQUFjLElBQUksSUFBSSxFQUFFO1VBQzNDLElBQUksQ0FBQ0EsY0FBYyxHQUFHLElBQUksQ0FBQ0YsV0FBVyxDQUFDRSxjQUFjO1FBQ3ZEO1FBRUFILFdBQVcsQ0FBQ3JULFNBQVMsQ0FBQ0YsV0FBVyxDQUFDaEYsSUFBSSxDQUFDLElBQUksRUFBRW1KLFFBQVEsRUFBRWtCLE9BQU8sQ0FBQztNQUNqRTtNQUVBM0YsS0FBSyxDQUFDQyxNQUFNLENBQUM0VCxXQUFXLEVBQUVYLFlBQVksQ0FBQztNQUV2Q1csV0FBVyxDQUFDL1ksU0FBUyxDQUFDaVosY0FBYyxHQUFHLFVBQVVwTyxPQUFPLEVBQUU7UUFDeEQsSUFBSXFOLFFBQVEsR0FBRztVQUNiN1AsSUFBSSxFQUFFLFNBQU5BLElBQUlBLENBQVlmLE1BQU0sRUFBRTtZQUN0QixPQUFPdkMsQ0FBQyxDQUFDOFIsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFdlAsTUFBTSxFQUFFO2NBQzFCNlIsQ0FBQyxFQUFFN1IsTUFBTSxDQUFDNE87WUFDWixDQUFDLENBQUM7VUFDSixDQUFDO1VBQ0RrRCxTQUFTLEVBQUUsU0FBWEEsU0FBU0EsQ0FBWTlSLE1BQU0sRUFBRStSLE9BQU8sRUFBRUMsT0FBTyxFQUFFO1lBQzdDLElBQUlDLFFBQVEsR0FBR3hVLENBQUMsQ0FBQ3lVLElBQUksQ0FBQ2xTLE1BQU0sQ0FBQztZQUU3QmlTLFFBQVEsQ0FBQ0UsSUFBSSxDQUFDSixPQUFPLENBQUM7WUFDdEJFLFFBQVEsQ0FBQ0csSUFBSSxDQUFDSixPQUFPLENBQUM7WUFFdEIsT0FBT0MsUUFBUTtVQUNqQjtRQUNGLENBQUM7UUFFRCxPQUFPeFUsQ0FBQyxDQUFDOFIsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFcUIsUUFBUSxFQUFFck4sT0FBTyxFQUFFLElBQUksQ0FBQztNQUM5QyxDQUFDO01BRURrTyxXQUFXLENBQUMvWSxTQUFTLENBQUNrWixjQUFjLEdBQUcsVUFBVXBOLE9BQU8sRUFBRTtRQUN4RCxPQUFPQSxPQUFPO01BQ2hCLENBQUM7TUFFRGlOLFdBQVcsQ0FBQy9ZLFNBQVMsQ0FBQ3FYLEtBQUssR0FBRyxVQUFVL1AsTUFBTSxFQUFFbEQsUUFBUSxFQUFFO1FBQ3hELElBQUl3VCxPQUFPLEdBQUcsRUFBRTtRQUNoQixJQUFJOUssSUFBSSxHQUFHLElBQUk7UUFFZixJQUFJLElBQUksQ0FBQzZNLFFBQVEsSUFBSSxJQUFJLEVBQUU7VUFDekI7VUFDQSxJQUFJNVUsQ0FBQyxDQUFDNlUsVUFBVSxDQUFDLElBQUksQ0FBQ0QsUUFBUSxDQUFDRSxLQUFLLENBQUMsRUFBRTtZQUNyQyxJQUFJLENBQUNGLFFBQVEsQ0FBQ0UsS0FBSyxDQUFDLENBQUM7VUFDdkI7VUFFQSxJQUFJLENBQUNGLFFBQVEsR0FBRyxJQUFJO1FBQ3RCO1FBRUEsSUFBSTlPLE9BQU8sR0FBRzlGLENBQUMsQ0FBQzhSLE1BQU0sQ0FBQztVQUNyQmpCLElBQUksRUFBRTtRQUNSLENBQUMsRUFBRSxJQUFJLENBQUNvRCxXQUFXLENBQUM7UUFFcEIsSUFBSSxPQUFPbk8sT0FBTyxDQUFDaVAsR0FBRyxLQUFLLFVBQVUsRUFBRTtVQUNyQ2pQLE9BQU8sQ0FBQ2lQLEdBQUcsR0FBR2pQLE9BQU8sQ0FBQ2lQLEdBQUcsQ0FBQ3RaLElBQUksQ0FBQyxJQUFJLENBQUNtSixRQUFRLEVBQUVyQyxNQUFNLENBQUM7UUFDdkQ7UUFFQSxJQUFJLE9BQU91RCxPQUFPLENBQUN4QyxJQUFJLEtBQUssVUFBVSxFQUFFO1VBQ3RDd0MsT0FBTyxDQUFDeEMsSUFBSSxHQUFHd0MsT0FBTyxDQUFDeEMsSUFBSSxDQUFDN0gsSUFBSSxDQUFDLElBQUksQ0FBQ21KLFFBQVEsRUFBRXJDLE1BQU0sQ0FBQztRQUN6RDtRQUVBLFNBQVN5UyxPQUFPQSxDQUFBLEVBQUk7VUFDbEIsSUFBSVIsUUFBUSxHQUFHMU8sT0FBTyxDQUFDdU8sU0FBUyxDQUFDdk8sT0FBTyxFQUFFLFVBQVV4QyxJQUFJLEVBQUU7WUFDeEQsSUFBSXlELE9BQU8sR0FBR2dCLElBQUksQ0FBQ29NLGNBQWMsQ0FBQzdRLElBQUksRUFBRWYsTUFBTSxDQUFDO1lBRS9DLElBQUl3RixJQUFJLENBQUNqQyxPQUFPLENBQUNJLEdBQUcsQ0FBQyxPQUFPLENBQUMsSUFBSWxNLE1BQU0sQ0FBQ2lHLE9BQU8sSUFBSUEsT0FBTyxDQUFDQyxLQUFLLEVBQUU7Y0FDaEU7Y0FDQSxJQUFJLENBQUM2RyxPQUFPLElBQUksQ0FBQ0EsT0FBTyxDQUFDQSxPQUFPLElBQUksQ0FBQy9HLENBQUMsQ0FBQ2lWLE9BQU8sQ0FBQ2xPLE9BQU8sQ0FBQ0EsT0FBTyxDQUFDLEVBQUU7Z0JBQy9EOUcsT0FBTyxDQUFDQyxLQUFLLENBQ1gsMkRBQTJELEdBQzNELGdDQUNGLENBQUM7Y0FDSDtZQUNGO1lBRUFiLFFBQVEsQ0FBQzBILE9BQU8sQ0FBQztVQUNuQixDQUFDLEVBQUUsWUFBWTtZQUNiO1lBQ0E7WUFDQSxJQUFJLFFBQVEsSUFBSXlOLFFBQVEsS0FDbkJBLFFBQVEsQ0FBQ1UsTUFBTSxLQUFLLENBQUMsSUFBSVYsUUFBUSxDQUFDVSxNQUFNLEtBQUssR0FBRyxDQUFDLEVBQUU7Y0FDdEQ7WUFDRjtZQUVBbk4sSUFBSSxDQUFDekYsT0FBTyxDQUFDLGlCQUFpQixFQUFFO2NBQzlCbUUsT0FBTyxFQUFFO1lBQ1gsQ0FBQyxDQUFDO1VBQ0osQ0FBQyxDQUFDO1VBRUZzQixJQUFJLENBQUM2TSxRQUFRLEdBQUdKLFFBQVE7UUFDMUI7UUFFQSxJQUFJLElBQUksQ0FBQ1AsV0FBVyxDQUFDa0IsS0FBSyxJQUFJNVMsTUFBTSxDQUFDNE8sSUFBSSxJQUFJLElBQUksRUFBRTtVQUNqRCxJQUFJLElBQUksQ0FBQ2lFLGFBQWEsRUFBRTtZQUN0QnBiLE1BQU0sQ0FBQ3FiLFlBQVksQ0FBQyxJQUFJLENBQUNELGFBQWEsQ0FBQztVQUN6QztVQUVBLElBQUksQ0FBQ0EsYUFBYSxHQUFHcGIsTUFBTSxDQUFDNEYsVUFBVSxDQUFDb1YsT0FBTyxFQUFFLElBQUksQ0FBQ2YsV0FBVyxDQUFDa0IsS0FBSyxDQUFDO1FBQ3pFLENBQUMsTUFBTTtVQUNMSCxPQUFPLENBQUMsQ0FBQztRQUNYO01BQ0YsQ0FBQztNQUVELE9BQU9oQixXQUFXO0lBQ3BCLENBQUMsQ0FBQztJQUVGOVosRUFBRSxDQUFDVixNQUFNLENBQUMsbUJBQW1CLEVBQUMsQ0FDNUIsUUFBUSxDQUNULEVBQUUsVUFBVXdHLENBQUMsRUFBRTtNQUNkLFNBQVNzVixJQUFJQSxDQUFFcEcsU0FBUyxFQUFFdEssUUFBUSxFQUFFa0IsT0FBTyxFQUFFO1FBQzNDLElBQUl5UCxJQUFJLEdBQUd6UCxPQUFPLENBQUNJLEdBQUcsQ0FBQyxNQUFNLENBQUM7UUFFOUIsSUFBSXNQLFNBQVMsR0FBRzFQLE9BQU8sQ0FBQ0ksR0FBRyxDQUFDLFdBQVcsQ0FBQztRQUV4QyxJQUFJc1AsU0FBUyxLQUFLemIsU0FBUyxFQUFFO1VBQzNCLElBQUksQ0FBQ3liLFNBQVMsR0FBR0EsU0FBUztRQUM1QjtRQUVBLElBQUlDLFNBQVMsR0FBRzNQLE9BQU8sQ0FBQ0ksR0FBRyxDQUFDLFdBQVcsQ0FBQztRQUV4QyxJQUFJdVAsU0FBUyxLQUFLMWIsU0FBUyxFQUFFO1VBQ3pCLElBQUksQ0FBQzBiLFNBQVMsR0FBR0EsU0FBUztRQUM5QjtRQUVBdkcsU0FBUyxDQUFDelQsSUFBSSxDQUFDLElBQUksRUFBRW1KLFFBQVEsRUFBRWtCLE9BQU8sQ0FBQztRQUV2QyxJQUFJOUYsQ0FBQyxDQUFDaVYsT0FBTyxDQUFDTSxJQUFJLENBQUMsRUFBRTtVQUNuQixLQUFLLElBQUlHLENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsR0FBR0gsSUFBSSxDQUFDMVksTUFBTSxFQUFFNlksQ0FBQyxFQUFFLEVBQUU7WUFDcEMsSUFBSUMsR0FBRyxHQUFHSixJQUFJLENBQUNHLENBQUMsQ0FBQztZQUNqQixJQUFJeE8sSUFBSSxHQUFHLElBQUksQ0FBQ2dNLGNBQWMsQ0FBQ3lDLEdBQUcsQ0FBQztZQUVuQyxJQUFJeE8sT0FBTyxHQUFHLElBQUksQ0FBQ0MsTUFBTSxDQUFDRixJQUFJLENBQUM7WUFFL0IsSUFBSSxDQUFDdEMsUUFBUSxDQUFDTyxNQUFNLENBQUNnQyxPQUFPLENBQUM7VUFDL0I7UUFDRjtNQUNGO01BRUFtTyxJQUFJLENBQUNyYSxTQUFTLENBQUNxWCxLQUFLLEdBQUcsVUFBVXBELFNBQVMsRUFBRTNNLE1BQU0sRUFBRWxELFFBQVEsRUFBRTtRQUM1RCxJQUFJMEksSUFBSSxHQUFHLElBQUk7UUFFZixJQUFJLENBQUM2TixjQUFjLENBQUMsQ0FBQztRQUVyQixJQUFJclQsTUFBTSxDQUFDNE8sSUFBSSxJQUFJLElBQUksSUFBSTVPLE1BQU0sQ0FBQ3NULElBQUksSUFBSSxJQUFJLEVBQUU7VUFDOUMzRyxTQUFTLENBQUN6VCxJQUFJLENBQUMsSUFBSSxFQUFFOEcsTUFBTSxFQUFFbEQsUUFBUSxDQUFDO1VBQ3RDO1FBQ0Y7UUFFQSxTQUFTeVcsT0FBT0EsQ0FBRXZhLEdBQUcsRUFBRWtPLEtBQUssRUFBRTtVQUM1QixJQUFJbkcsSUFBSSxHQUFHL0gsR0FBRyxDQUFDd0wsT0FBTztVQUV0QixLQUFLLElBQUkxSyxDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEdBQUdpSCxJQUFJLENBQUN6RyxNQUFNLEVBQUVSLENBQUMsRUFBRSxFQUFFO1lBQ3BDLElBQUkrSyxNQUFNLEdBQUc5RCxJQUFJLENBQUNqSCxDQUFDLENBQUM7WUFFcEIsSUFBSTBaLGFBQWEsR0FDZjNPLE1BQU0sQ0FBQ0osUUFBUSxJQUFJLElBQUksSUFDdkIsQ0FBQzhPLE9BQU8sQ0FBQztjQUNQL08sT0FBTyxFQUFFSyxNQUFNLENBQUNKO1lBQ2xCLENBQUMsRUFBRSxJQUFJLENBQ1I7WUFFRCxJQUFJZ1AsVUFBVSxHQUFHLENBQUM1TyxNQUFNLENBQUNzQixJQUFJLElBQUksRUFBRSxFQUFFdU4sV0FBVyxDQUFDLENBQUM7WUFDbEQsSUFBSUMsVUFBVSxHQUFHLENBQUMzVCxNQUFNLENBQUM0TyxJQUFJLElBQUksRUFBRSxFQUFFOEUsV0FBVyxDQUFDLENBQUM7WUFFbEQsSUFBSUUsU0FBUyxHQUFHSCxVQUFVLEtBQUtFLFVBQVU7WUFFekMsSUFBSUMsU0FBUyxJQUFJSixhQUFhLEVBQUU7Y0FDOUIsSUFBSXRNLEtBQUssRUFBRTtnQkFDVCxPQUFPLEtBQUs7Y0FDZDtjQUVBbE8sR0FBRyxDQUFDK0gsSUFBSSxHQUFHQSxJQUFJO2NBQ2ZqRSxRQUFRLENBQUM5RCxHQUFHLENBQUM7Y0FFYjtZQUNGO1VBQ0Y7VUFFQSxJQUFJa08sS0FBSyxFQUFFO1lBQ1QsT0FBTyxJQUFJO1VBQ2I7VUFFQSxJQUFJa00sR0FBRyxHQUFHNU4sSUFBSSxDQUFDeU4sU0FBUyxDQUFDalQsTUFBTSxDQUFDO1VBRWhDLElBQUlvVCxHQUFHLElBQUksSUFBSSxFQUFFO1lBQ2YsSUFBSXhPLE9BQU8sR0FBR1ksSUFBSSxDQUFDWCxNQUFNLENBQUN1TyxHQUFHLENBQUM7WUFDOUJ4TyxPQUFPLENBQUNoQixJQUFJLENBQUMsa0JBQWtCLEVBQUUsSUFBSSxDQUFDO1lBRXRDNEIsSUFBSSxDQUFDK0ssVUFBVSxDQUFDLENBQUMzTCxPQUFPLENBQUMsQ0FBQztZQUUxQlksSUFBSSxDQUFDME4sU0FBUyxDQUFDblMsSUFBSSxFQUFFcVMsR0FBRyxDQUFDO1VBQzNCO1VBRUFwYSxHQUFHLENBQUN3TCxPQUFPLEdBQUd6RCxJQUFJO1VBRWxCakUsUUFBUSxDQUFDOUQsR0FBRyxDQUFDO1FBQ2Y7UUFFQTJULFNBQVMsQ0FBQ3pULElBQUksQ0FBQyxJQUFJLEVBQUU4RyxNQUFNLEVBQUV1VCxPQUFPLENBQUM7TUFDdkMsQ0FBQztNQUVEUixJQUFJLENBQUNyYSxTQUFTLENBQUN1YSxTQUFTLEdBQUcsVUFBVXRHLFNBQVMsRUFBRTNNLE1BQU0sRUFBRTtRQUN0RCxJQUFJNE8sSUFBSSxHQUFHblIsQ0FBQyxDQUFDb1csSUFBSSxDQUFDN1QsTUFBTSxDQUFDNE8sSUFBSSxDQUFDO1FBRTlCLElBQUlBLElBQUksS0FBSyxFQUFFLEVBQUU7VUFDZixPQUFPLElBQUk7UUFDYjtRQUVBLE9BQU87VUFDTGpTLEVBQUUsRUFBRWlTLElBQUk7VUFDUnpJLElBQUksRUFBRXlJO1FBQ1IsQ0FBQztNQUNILENBQUM7TUFFRG1FLElBQUksQ0FBQ3JhLFNBQVMsQ0FBQ3dhLFNBQVMsR0FBRyxVQUFVcEcsQ0FBQyxFQUFFL0wsSUFBSSxFQUFFcVMsR0FBRyxFQUFFO1FBQ2pEclMsSUFBSSxDQUFDL0IsT0FBTyxDQUFDb1UsR0FBRyxDQUFDO01BQ25CLENBQUM7TUFFREwsSUFBSSxDQUFDcmEsU0FBUyxDQUFDMmEsY0FBYyxHQUFHLFVBQVV2RyxDQUFDLEVBQUU7UUFDM0MsSUFBSXNHLEdBQUcsR0FBRyxJQUFJLENBQUNVLFFBQVE7UUFFdkIsSUFBSXZQLFFBQVEsR0FBRyxJQUFJLENBQUNsQyxRQUFRLENBQUNnQyxJQUFJLENBQUMsMEJBQTBCLENBQUM7UUFFN0RFLFFBQVEsQ0FBQ3NCLElBQUksQ0FBQyxZQUFZO1VBQ3hCLElBQUksSUFBSSxDQUFDSCxRQUFRLEVBQUU7WUFDakI7VUFDRjtVQUVBakksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDNkcsTUFBTSxDQUFDLENBQUM7UUFDbEIsQ0FBQyxDQUFDO01BQ0osQ0FBQztNQUVELE9BQU95TyxJQUFJO0lBQ2IsQ0FBQyxDQUFDO0lBRUZwYixFQUFFLENBQUNWLE1BQU0sQ0FBQyx3QkFBd0IsRUFBQyxDQUNqQyxRQUFRLENBQ1QsRUFBRSxVQUFVd0csQ0FBQyxFQUFFO01BQ2QsU0FBU3NXLFNBQVNBLENBQUVwSCxTQUFTLEVBQUV0SyxRQUFRLEVBQUVrQixPQUFPLEVBQUU7UUFDaEQsSUFBSXlRLFNBQVMsR0FBR3pRLE9BQU8sQ0FBQ0ksR0FBRyxDQUFDLFdBQVcsQ0FBQztRQUV4QyxJQUFJcVEsU0FBUyxLQUFLeGMsU0FBUyxFQUFFO1VBQzNCLElBQUksQ0FBQ3djLFNBQVMsR0FBR0EsU0FBUztRQUM1QjtRQUVBckgsU0FBUyxDQUFDelQsSUFBSSxDQUFDLElBQUksRUFBRW1KLFFBQVEsRUFBRWtCLE9BQU8sQ0FBQztNQUN6QztNQUVBd1EsU0FBUyxDQUFDcmIsU0FBUyxDQUFDaUksSUFBSSxHQUFHLFVBQVVnTSxTQUFTLEVBQUV0RixTQUFTLEVBQUVDLFVBQVUsRUFBRTtRQUNyRXFGLFNBQVMsQ0FBQ3pULElBQUksQ0FBQyxJQUFJLEVBQUVtTyxTQUFTLEVBQUVDLFVBQVUsQ0FBQztRQUUzQyxJQUFJLENBQUNxRyxPQUFPLEdBQUl0RyxTQUFTLENBQUM0TSxRQUFRLENBQUN0RyxPQUFPLElBQUl0RyxTQUFTLENBQUMrRSxTQUFTLENBQUN1QixPQUFPLElBQ3ZFckcsVUFBVSxDQUFDakQsSUFBSSxDQUFDLHdCQUF3QixDQUFDO01BQzdDLENBQUM7TUFFRDBQLFNBQVMsQ0FBQ3JiLFNBQVMsQ0FBQ3FYLEtBQUssR0FBRyxVQUFVcEQsU0FBUyxFQUFFM00sTUFBTSxFQUFFbEQsUUFBUSxFQUFFO1FBQ2pFLElBQUkwSSxJQUFJLEdBQUcsSUFBSTtRQUVmLFNBQVMwTyxlQUFlQSxDQUFFblQsSUFBSSxFQUFFO1VBQzlCO1VBQ0EsSUFBSTRELElBQUksR0FBR2EsSUFBSSxDQUFDbUwsY0FBYyxDQUFDNVAsSUFBSSxDQUFDOztVQUVwQztVQUNBO1VBQ0EsSUFBSW9ULGdCQUFnQixHQUFHM08sSUFBSSxDQUFDbkQsUUFBUSxDQUFDZ0MsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDZSxNQUFNLENBQUMsWUFBWTtZQUNyRSxPQUFPM0gsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDbUosR0FBRyxDQUFDLENBQUMsS0FBS2pDLElBQUksQ0FBQ2hJLEVBQUU7VUFDbEMsQ0FBQyxDQUFDOztVQUVGO1VBQ0EsSUFBSSxDQUFDd1gsZ0JBQWdCLENBQUM3WixNQUFNLEVBQUU7WUFDNUIsSUFBSXNLLE9BQU8sR0FBR1ksSUFBSSxDQUFDWCxNQUFNLENBQUNGLElBQUksQ0FBQztZQUMvQkMsT0FBTyxDQUFDaEIsSUFBSSxDQUFDLGtCQUFrQixFQUFFLElBQUksQ0FBQztZQUV0QzRCLElBQUksQ0FBQzZOLGNBQWMsQ0FBQyxDQUFDO1lBQ3JCN04sSUFBSSxDQUFDK0ssVUFBVSxDQUFDLENBQUMzTCxPQUFPLENBQUMsQ0FBQztVQUM1Qjs7VUFFQTtVQUNBc0wsTUFBTSxDQUFDdkwsSUFBSSxDQUFDO1FBQ2Q7UUFFQSxTQUFTdUwsTUFBTUEsQ0FBRW5QLElBQUksRUFBRTtVQUNyQnlFLElBQUksQ0FBQ3pGLE9BQU8sQ0FBQyxRQUFRLEVBQUU7WUFDckJnQixJQUFJLEVBQUVBO1VBQ1IsQ0FBQyxDQUFDO1FBQ0o7UUFFQWYsTUFBTSxDQUFDNE8sSUFBSSxHQUFHNU8sTUFBTSxDQUFDNE8sSUFBSSxJQUFJLEVBQUU7UUFFL0IsSUFBSXdGLFNBQVMsR0FBRyxJQUFJLENBQUNKLFNBQVMsQ0FBQ2hVLE1BQU0sRUFBRSxJQUFJLENBQUN1RCxPQUFPLEVBQUUyUSxlQUFlLENBQUM7UUFFckUsSUFBSUUsU0FBUyxDQUFDeEYsSUFBSSxLQUFLNU8sTUFBTSxDQUFDNE8sSUFBSSxFQUFFO1VBQ2xDO1VBQ0EsSUFBSSxJQUFJLENBQUNqQixPQUFPLENBQUNyVCxNQUFNLEVBQUU7WUFDdkIsSUFBSSxDQUFDcVQsT0FBTyxDQUFDL0csR0FBRyxDQUFDd04sU0FBUyxDQUFDeEYsSUFBSSxDQUFDO1lBQ2hDLElBQUksQ0FBQ2pCLE9BQU8sQ0FBQ3ZDLEtBQUssQ0FBQyxDQUFDO1VBQ3RCO1VBRUFwTCxNQUFNLENBQUM0TyxJQUFJLEdBQUd3RixTQUFTLENBQUN4RixJQUFJO1FBQzlCO1FBRUFqQyxTQUFTLENBQUN6VCxJQUFJLENBQUMsSUFBSSxFQUFFOEcsTUFBTSxFQUFFbEQsUUFBUSxDQUFDO01BQ3hDLENBQUM7TUFFRGlYLFNBQVMsQ0FBQ3JiLFNBQVMsQ0FBQ3NiLFNBQVMsR0FBRyxVQUFVbEgsQ0FBQyxFQUFFOU0sTUFBTSxFQUFFdUQsT0FBTyxFQUFFekcsUUFBUSxFQUFFO1FBQ3RFLElBQUl1WCxVQUFVLEdBQUc5USxPQUFPLENBQUNJLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLEVBQUU7UUFDckQsSUFBSWlMLElBQUksR0FBRzVPLE1BQU0sQ0FBQzRPLElBQUk7UUFDdEIsSUFBSTlVLENBQUMsR0FBRyxDQUFDO1FBRVQsSUFBSW1aLFNBQVMsR0FBRyxJQUFJLENBQUNBLFNBQVMsSUFBSSxVQUFValQsTUFBTSxFQUFFO1VBQ2xELE9BQU87WUFDTHJELEVBQUUsRUFBRXFELE1BQU0sQ0FBQzRPLElBQUk7WUFDZnpJLElBQUksRUFBRW5HLE1BQU0sQ0FBQzRPO1VBQ2YsQ0FBQztRQUNILENBQUM7UUFFRCxPQUFPOVUsQ0FBQyxHQUFHOFUsSUFBSSxDQUFDdFUsTUFBTSxFQUFFO1VBQ3RCLElBQUlnYSxRQUFRLEdBQUcxRixJQUFJLENBQUM5VSxDQUFDLENBQUM7VUFFdEIsSUFBSTJELENBQUMsQ0FBQ3FJLE9BQU8sQ0FBQ3dPLFFBQVEsRUFBRUQsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUU7WUFDMUN2YSxDQUFDLEVBQUU7WUFFSDtVQUNGO1VBRUEsSUFBSUUsSUFBSSxHQUFHNFUsSUFBSSxDQUFDcE0sTUFBTSxDQUFDLENBQUMsRUFBRTFJLENBQUMsQ0FBQztVQUM1QixJQUFJeWEsVUFBVSxHQUFHOVcsQ0FBQyxDQUFDOFIsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFdlAsTUFBTSxFQUFFO1lBQ3BDNE8sSUFBSSxFQUFFNVU7VUFDUixDQUFDLENBQUM7VUFFRixJQUFJK0csSUFBSSxHQUFHa1MsU0FBUyxDQUFDc0IsVUFBVSxDQUFDO1VBRWhDLElBQUl4VCxJQUFJLElBQUksSUFBSSxFQUFFO1lBQ2hCakgsQ0FBQyxFQUFFO1lBQ0g7VUFDRjtVQUVBZ0QsUUFBUSxDQUFDaUUsSUFBSSxDQUFDOztVQUVkO1VBQ0E2TixJQUFJLEdBQUdBLElBQUksQ0FBQ3BNLE1BQU0sQ0FBQzFJLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFO1VBQy9CQSxDQUFDLEdBQUcsQ0FBQztRQUNQO1FBRUEsT0FBTztVQUNMOFUsSUFBSSxFQUFFQTtRQUNSLENBQUM7TUFDSCxDQUFDO01BRUQsT0FBT21GLFNBQVM7SUFDbEIsQ0FBQyxDQUFDO0lBRUZwYyxFQUFFLENBQUNWLE1BQU0sQ0FBQyxpQ0FBaUMsRUFBQyxFQUUzQyxFQUFFLFlBQVk7TUFDYixTQUFTdWQsa0JBQWtCQSxDQUFFN0gsU0FBUyxFQUFFOEgsRUFBRSxFQUFFbFIsT0FBTyxFQUFFO1FBQ25ELElBQUksQ0FBQ21SLGtCQUFrQixHQUFHblIsT0FBTyxDQUFDSSxHQUFHLENBQUMsb0JBQW9CLENBQUM7UUFFM0RnSixTQUFTLENBQUN6VCxJQUFJLENBQUMsSUFBSSxFQUFFdWIsRUFBRSxFQUFFbFIsT0FBTyxDQUFDO01BQ25DO01BRUFpUixrQkFBa0IsQ0FBQzliLFNBQVMsQ0FBQ3FYLEtBQUssR0FBRyxVQUFVcEQsU0FBUyxFQUFFM00sTUFBTSxFQUFFbEQsUUFBUSxFQUFFO1FBQzFFa0QsTUFBTSxDQUFDNE8sSUFBSSxHQUFHNU8sTUFBTSxDQUFDNE8sSUFBSSxJQUFJLEVBQUU7UUFFL0IsSUFBSTVPLE1BQU0sQ0FBQzRPLElBQUksQ0FBQ3RVLE1BQU0sR0FBRyxJQUFJLENBQUNvYSxrQkFBa0IsRUFBRTtVQUNoRCxJQUFJLENBQUMzVSxPQUFPLENBQUMsaUJBQWlCLEVBQUU7WUFDOUJtRSxPQUFPLEVBQUUsZUFBZTtZQUN4QmpKLElBQUksRUFBRTtjQUNKMFosT0FBTyxFQUFFLElBQUksQ0FBQ0Qsa0JBQWtCO2NBQ2hDL0YsS0FBSyxFQUFFM08sTUFBTSxDQUFDNE8sSUFBSTtjQUNsQjVPLE1BQU0sRUFBRUE7WUFDVjtVQUNGLENBQUMsQ0FBQztVQUVGO1FBQ0Y7UUFFQTJNLFNBQVMsQ0FBQ3pULElBQUksQ0FBQyxJQUFJLEVBQUU4RyxNQUFNLEVBQUVsRCxRQUFRLENBQUM7TUFDeEMsQ0FBQztNQUVELE9BQU8wWCxrQkFBa0I7SUFDM0IsQ0FBQyxDQUFDO0lBRUY3YyxFQUFFLENBQUNWLE1BQU0sQ0FBQyxpQ0FBaUMsRUFBQyxFQUUzQyxFQUFFLFlBQVk7TUFDYixTQUFTMmQsa0JBQWtCQSxDQUFFakksU0FBUyxFQUFFOEgsRUFBRSxFQUFFbFIsT0FBTyxFQUFFO1FBQ25ELElBQUksQ0FBQ3NSLGtCQUFrQixHQUFHdFIsT0FBTyxDQUFDSSxHQUFHLENBQUMsb0JBQW9CLENBQUM7UUFFM0RnSixTQUFTLENBQUN6VCxJQUFJLENBQUMsSUFBSSxFQUFFdWIsRUFBRSxFQUFFbFIsT0FBTyxDQUFDO01BQ25DO01BRUFxUixrQkFBa0IsQ0FBQ2xjLFNBQVMsQ0FBQ3FYLEtBQUssR0FBRyxVQUFVcEQsU0FBUyxFQUFFM00sTUFBTSxFQUFFbEQsUUFBUSxFQUFFO1FBQzFFa0QsTUFBTSxDQUFDNE8sSUFBSSxHQUFHNU8sTUFBTSxDQUFDNE8sSUFBSSxJQUFJLEVBQUU7UUFFL0IsSUFBSSxJQUFJLENBQUNpRyxrQkFBa0IsR0FBRyxDQUFDLElBQzNCN1UsTUFBTSxDQUFDNE8sSUFBSSxDQUFDdFUsTUFBTSxHQUFHLElBQUksQ0FBQ3VhLGtCQUFrQixFQUFFO1VBQ2hELElBQUksQ0FBQzlVLE9BQU8sQ0FBQyxpQkFBaUIsRUFBRTtZQUM5Qm1FLE9BQU8sRUFBRSxjQUFjO1lBQ3ZCakosSUFBSSxFQUFFO2NBQ0o2WixPQUFPLEVBQUUsSUFBSSxDQUFDRCxrQkFBa0I7Y0FDaENsRyxLQUFLLEVBQUUzTyxNQUFNLENBQUM0TyxJQUFJO2NBQ2xCNU8sTUFBTSxFQUFFQTtZQUNWO1VBQ0YsQ0FBQyxDQUFDO1VBRUY7UUFDRjtRQUVBMk0sU0FBUyxDQUFDelQsSUFBSSxDQUFDLElBQUksRUFBRThHLE1BQU0sRUFBRWxELFFBQVEsQ0FBQztNQUN4QyxDQUFDO01BRUQsT0FBTzhYLGtCQUFrQjtJQUMzQixDQUFDLENBQUM7SUFFRmpkLEVBQUUsQ0FBQ1YsTUFBTSxDQUFDLHFDQUFxQyxFQUFDLEVBRS9DLEVBQUUsWUFBVztNQUNaLFNBQVM4ZCxzQkFBc0JBLENBQUVwSSxTQUFTLEVBQUU4SCxFQUFFLEVBQUVsUixPQUFPLEVBQUU7UUFDdkQsSUFBSSxDQUFDeVIsc0JBQXNCLEdBQUd6UixPQUFPLENBQUNJLEdBQUcsQ0FBQyx3QkFBd0IsQ0FBQztRQUVuRWdKLFNBQVMsQ0FBQ3pULElBQUksQ0FBQyxJQUFJLEVBQUV1YixFQUFFLEVBQUVsUixPQUFPLENBQUM7TUFDbkM7TUFFQXdSLHNCQUFzQixDQUFDcmMsU0FBUyxDQUFDcVgsS0FBSyxHQUNwQyxVQUFVcEQsU0FBUyxFQUFFM00sTUFBTSxFQUFFbEQsUUFBUSxFQUFFO1FBQ3JDLElBQUkwSSxJQUFJLEdBQUcsSUFBSTtRQUVmLElBQUksQ0FBQ0MsT0FBTyxDQUFDLFVBQVUySyxXQUFXLEVBQUU7VUFDbEMsSUFBSTZFLEtBQUssR0FBRzdFLFdBQVcsSUFBSSxJQUFJLEdBQUdBLFdBQVcsQ0FBQzlWLE1BQU0sR0FBRyxDQUFDO1VBQ3hELElBQUlrTCxJQUFJLENBQUN3UCxzQkFBc0IsR0FBRyxDQUFDLElBQ2pDQyxLQUFLLElBQUl6UCxJQUFJLENBQUN3UCxzQkFBc0IsRUFBRTtZQUN0Q3hQLElBQUksQ0FBQ3pGLE9BQU8sQ0FBQyxpQkFBaUIsRUFBRTtjQUM5Qm1FLE9BQU8sRUFBRSxpQkFBaUI7Y0FDMUJqSixJQUFJLEVBQUU7Z0JBQ0o2WixPQUFPLEVBQUV0UCxJQUFJLENBQUN3UDtjQUNoQjtZQUNGLENBQUMsQ0FBQztZQUNGO1VBQ0Y7VUFDQXJJLFNBQVMsQ0FBQ3pULElBQUksQ0FBQ3NNLElBQUksRUFBRXhGLE1BQU0sRUFBRWxELFFBQVEsQ0FBQztRQUN4QyxDQUFDLENBQUM7TUFDTixDQUFDO01BRUQsT0FBT2lZLHNCQUFzQjtJQUMvQixDQUFDLENBQUM7SUFFRnBkLEVBQUUsQ0FBQ1YsTUFBTSxDQUFDLGtCQUFrQixFQUFDLENBQzNCLFFBQVEsRUFDUixTQUFTLENBQ1YsRUFBRSxVQUFVd0csQ0FBQyxFQUFFRyxLQUFLLEVBQUU7TUFDckIsU0FBU3NYLFFBQVFBLENBQUU3UyxRQUFRLEVBQUVrQixPQUFPLEVBQUU7UUFDcEMsSUFBSSxDQUFDbEIsUUFBUSxHQUFHQSxRQUFRO1FBQ3hCLElBQUksQ0FBQ2tCLE9BQU8sR0FBR0EsT0FBTztRQUV0QjJSLFFBQVEsQ0FBQzlXLFNBQVMsQ0FBQ0YsV0FBVyxDQUFDaEYsSUFBSSxDQUFDLElBQUksQ0FBQztNQUMzQztNQUVBMEUsS0FBSyxDQUFDQyxNQUFNLENBQUNxWCxRQUFRLEVBQUV0WCxLQUFLLENBQUMrQixVQUFVLENBQUM7TUFFeEN1VixRQUFRLENBQUN4YyxTQUFTLENBQUMrSyxNQUFNLEdBQUcsWUFBWTtRQUN0QyxJQUFJc0IsU0FBUyxHQUFHdEgsQ0FBQyxDQUNmLGlDQUFpQyxHQUMvQix1Q0FBdUMsR0FDekMsU0FDRixDQUFDO1FBRURzSCxTQUFTLENBQUNuQixJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQ0wsT0FBTyxDQUFDSSxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFOUMsSUFBSSxDQUFDb0IsU0FBUyxHQUFHQSxTQUFTO1FBRTFCLE9BQU9BLFNBQVM7TUFDbEIsQ0FBQztNQUVEbVEsUUFBUSxDQUFDeGMsU0FBUyxDQUFDaUksSUFBSSxHQUFHLFlBQVk7UUFDcEM7TUFBQSxDQUNEO01BRUR1VSxRQUFRLENBQUN4YyxTQUFTLENBQUNvTSxRQUFRLEdBQUcsVUFBVUMsU0FBUyxFQUFFdUMsVUFBVSxFQUFFO1FBQzdEO01BQUEsQ0FDRDtNQUVENE4sUUFBUSxDQUFDeGMsU0FBUyxDQUFDMFEsT0FBTyxHQUFHLFlBQVk7UUFDdkM7UUFDQSxJQUFJLENBQUNyRSxTQUFTLENBQUNULE1BQU0sQ0FBQyxDQUFDO01BQ3pCLENBQUM7TUFFRCxPQUFPNFEsUUFBUTtJQUNqQixDQUFDLENBQUM7SUFFRnZkLEVBQUUsQ0FBQ1YsTUFBTSxDQUFDLHlCQUF5QixFQUFDLENBQ2xDLFFBQVEsRUFDUixVQUFVLENBQ1gsRUFBRSxVQUFVd0csQ0FBQyxFQUFFRyxLQUFLLEVBQUU7TUFDckIsU0FBUzhQLE1BQU1BLENBQUEsRUFBSSxDQUFFO01BRXJCQSxNQUFNLENBQUNoVixTQUFTLENBQUMrSyxNQUFNLEdBQUcsVUFBVWtKLFNBQVMsRUFBRTtRQUM3QyxJQUFJVCxTQUFTLEdBQUdTLFNBQVMsQ0FBQ3pULElBQUksQ0FBQyxJQUFJLENBQUM7UUFFcEMsSUFBSXlVLE9BQU8sR0FBR2xRLENBQUMsQ0FDYix3REFBd0QsR0FDdEQsa0VBQWtFLEdBQ2xFLDZEQUE2RCxHQUM3RCx1Q0FBdUMsR0FDekMsU0FDRixDQUFDO1FBRUQsSUFBSSxDQUFDbVEsZ0JBQWdCLEdBQUdELE9BQU87UUFDL0IsSUFBSSxDQUFDQSxPQUFPLEdBQUdBLE9BQU8sQ0FBQ3RKLElBQUksQ0FBQyxPQUFPLENBQUM7UUFFcEM2SCxTQUFTLENBQUM3RixPQUFPLENBQUNzSCxPQUFPLENBQUM7UUFFMUIsT0FBT3pCLFNBQVM7TUFDbEIsQ0FBQztNQUVEd0IsTUFBTSxDQUFDaFYsU0FBUyxDQUFDaUksSUFBSSxHQUFHLFVBQVVnTSxTQUFTLEVBQUV0RixTQUFTLEVBQUVDLFVBQVUsRUFBRTtRQUNsRSxJQUFJOUIsSUFBSSxHQUFHLElBQUk7UUFFZm1ILFNBQVMsQ0FBQ3pULElBQUksQ0FBQyxJQUFJLEVBQUVtTyxTQUFTLEVBQUVDLFVBQVUsQ0FBQztRQUUzQyxJQUFJLENBQUNxRyxPQUFPLENBQUM5TixFQUFFLENBQUMsU0FBUyxFQUFFLFVBQVVtSixHQUFHLEVBQUU7VUFDeEN4RCxJQUFJLENBQUN6RixPQUFPLENBQUMsVUFBVSxFQUFFaUosR0FBRyxDQUFDO1VBRTdCeEQsSUFBSSxDQUFDc0ksZUFBZSxHQUFHOUUsR0FBRyxDQUFDK0Usa0JBQWtCLENBQUMsQ0FBQztRQUNqRCxDQUFDLENBQUM7O1FBRUY7UUFDQTtRQUNBO1FBQ0EsSUFBSSxDQUFDSixPQUFPLENBQUM5TixFQUFFLENBQUMsT0FBTyxFQUFFLFVBQVVtSixHQUFHLEVBQUU7VUFDdEM7VUFDQXZMLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQ3FPLEdBQUcsQ0FBQyxPQUFPLENBQUM7UUFDdEIsQ0FBQyxDQUFDO1FBRUYsSUFBSSxDQUFDNkIsT0FBTyxDQUFDOU4sRUFBRSxDQUFDLGFBQWEsRUFBRSxVQUFVbUosR0FBRyxFQUFFO1VBQzVDeEQsSUFBSSxDQUFDK0ksWUFBWSxDQUFDdkYsR0FBRyxDQUFDO1FBQ3hCLENBQUMsQ0FBQztRQUVGM0IsU0FBUyxDQUFDeEgsRUFBRSxDQUFDLE1BQU0sRUFBRSxZQUFZO1VBQy9CMkYsSUFBSSxDQUFDbUksT0FBTyxDQUFDL0osSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUM7VUFFaEM0QixJQUFJLENBQUNtSSxPQUFPLENBQUN2QyxLQUFLLENBQUMsQ0FBQztVQUVwQjNULE1BQU0sQ0FBQzRGLFVBQVUsQ0FBQyxZQUFZO1lBQzVCbUksSUFBSSxDQUFDbUksT0FBTyxDQUFDdkMsS0FBSyxDQUFDLENBQUM7VUFDdEIsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNQLENBQUMsQ0FBQztRQUVGL0QsU0FBUyxDQUFDeEgsRUFBRSxDQUFDLE9BQU8sRUFBRSxZQUFZO1VBQ2hDMkYsSUFBSSxDQUFDbUksT0FBTyxDQUFDL0osSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUMsQ0FBQztVQUVqQzRCLElBQUksQ0FBQ21JLE9BQU8sQ0FBQy9HLEdBQUcsQ0FBQyxFQUFFLENBQUM7VUFDcEJwQixJQUFJLENBQUNtSSxPQUFPLENBQUN3SCxJQUFJLENBQUMsQ0FBQztRQUNyQixDQUFDLENBQUM7UUFFRjlOLFNBQVMsQ0FBQ3hILEVBQUUsQ0FBQyxPQUFPLEVBQUUsWUFBWTtVQUNoQyxJQUFJLENBQUN3SCxTQUFTLENBQUNFLE1BQU0sQ0FBQyxDQUFDLEVBQUU7WUFDdkIvQixJQUFJLENBQUNtSSxPQUFPLENBQUN2QyxLQUFLLENBQUMsQ0FBQztVQUN0QjtRQUNGLENBQUMsQ0FBQztRQUVGL0QsU0FBUyxDQUFDeEgsRUFBRSxDQUFDLGFBQWEsRUFBRSxVQUFVRyxNQUFNLEVBQUU7VUFDNUMsSUFBSUEsTUFBTSxDQUFDK1AsS0FBSyxDQUFDbkIsSUFBSSxJQUFJLElBQUksSUFBSTVPLE1BQU0sQ0FBQytQLEtBQUssQ0FBQ25CLElBQUksS0FBSyxFQUFFLEVBQUU7WUFDekQsSUFBSXdHLFVBQVUsR0FBRzVQLElBQUksQ0FBQzRQLFVBQVUsQ0FBQ3BWLE1BQU0sQ0FBQztZQUV4QyxJQUFJb1YsVUFBVSxFQUFFO2NBQ2Q1UCxJQUFJLENBQUNvSSxnQkFBZ0IsQ0FBQ3pFLFdBQVcsQ0FBQyxzQkFBc0IsQ0FBQztZQUMzRCxDQUFDLE1BQU07Y0FDTDNELElBQUksQ0FBQ29JLGdCQUFnQixDQUFDckYsUUFBUSxDQUFDLHNCQUFzQixDQUFDO1lBQ3hEO1VBQ0Y7UUFDRixDQUFDLENBQUM7TUFDSixDQUFDO01BRURtRixNQUFNLENBQUNoVixTQUFTLENBQUM2VixZQUFZLEdBQUcsVUFBVXZGLEdBQUcsRUFBRTtRQUM3QyxJQUFJLENBQUMsSUFBSSxDQUFDOEUsZUFBZSxFQUFFO1VBQ3pCLElBQUlhLEtBQUssR0FBRyxJQUFJLENBQUNoQixPQUFPLENBQUMvRyxHQUFHLENBQUMsQ0FBQztVQUU5QixJQUFJLENBQUM3RyxPQUFPLENBQUMsT0FBTyxFQUFFO1lBQ3BCNk8sSUFBSSxFQUFFRDtVQUNSLENBQUMsQ0FBQztRQUNKO1FBRUEsSUFBSSxDQUFDYixlQUFlLEdBQUcsS0FBSztNQUM5QixDQUFDO01BRURKLE1BQU0sQ0FBQ2hWLFNBQVMsQ0FBQzBjLFVBQVUsR0FBRyxVQUFVdEksQ0FBQyxFQUFFOU0sTUFBTSxFQUFFO1FBQ2pELE9BQU8sSUFBSTtNQUNiLENBQUM7TUFFRCxPQUFPME4sTUFBTTtJQUNmLENBQUMsQ0FBQztJQUVGL1YsRUFBRSxDQUFDVixNQUFNLENBQUMsa0NBQWtDLEVBQUMsRUFFNUMsRUFBRSxZQUFZO01BQ2IsU0FBU29lLGVBQWVBLENBQUUxSSxTQUFTLEVBQUV0SyxRQUFRLEVBQUVrQixPQUFPLEVBQUVDLFdBQVcsRUFBRTtRQUNuRSxJQUFJLENBQUNvSixXQUFXLEdBQUcsSUFBSSxDQUFDQyxvQkFBb0IsQ0FBQ3RKLE9BQU8sQ0FBQ0ksR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBRXhFZ0osU0FBUyxDQUFDelQsSUFBSSxDQUFDLElBQUksRUFBRW1KLFFBQVEsRUFBRWtCLE9BQU8sRUFBRUMsV0FBVyxDQUFDO01BQ3REO01BRUE2UixlQUFlLENBQUMzYyxTQUFTLENBQUNrSyxNQUFNLEdBQUcsVUFBVStKLFNBQVMsRUFBRTVMLElBQUksRUFBRTtRQUM1REEsSUFBSSxDQUFDeUQsT0FBTyxHQUFHLElBQUksQ0FBQzhRLGlCQUFpQixDQUFDdlUsSUFBSSxDQUFDeUQsT0FBTyxDQUFDO1FBRW5EbUksU0FBUyxDQUFDelQsSUFBSSxDQUFDLElBQUksRUFBRTZILElBQUksQ0FBQztNQUM1QixDQUFDO01BRURzVSxlQUFlLENBQUMzYyxTQUFTLENBQUNtVSxvQkFBb0IsR0FBRyxVQUFVQyxDQUFDLEVBQUVGLFdBQVcsRUFBRTtRQUN6RSxJQUFJLE9BQU9BLFdBQVcsS0FBSyxRQUFRLEVBQUU7VUFDbkNBLFdBQVcsR0FBRztZQUNaalEsRUFBRSxFQUFFLEVBQUU7WUFDTndKLElBQUksRUFBRXlHO1VBQ1IsQ0FBQztRQUNIO1FBRUEsT0FBT0EsV0FBVztNQUNwQixDQUFDO01BRUR5SSxlQUFlLENBQUMzYyxTQUFTLENBQUM0YyxpQkFBaUIsR0FBRyxVQUFVeEksQ0FBQyxFQUFFL0wsSUFBSSxFQUFFO1FBQy9ELElBQUl3VSxZQUFZLEdBQUd4VSxJQUFJLENBQUNsSSxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBRWhDLEtBQUssSUFBSTZHLENBQUMsR0FBR3FCLElBQUksQ0FBQ3pHLE1BQU0sR0FBRyxDQUFDLEVBQUVvRixDQUFDLElBQUksQ0FBQyxFQUFFQSxDQUFDLEVBQUUsRUFBRTtVQUN6QyxJQUFJaUYsSUFBSSxHQUFHNUQsSUFBSSxDQUFDckIsQ0FBQyxDQUFDO1VBRWxCLElBQUksSUFBSSxDQUFDa04sV0FBVyxDQUFDalEsRUFBRSxLQUFLZ0ksSUFBSSxDQUFDaEksRUFBRSxFQUFFO1lBQ25DNFksWUFBWSxDQUFDM2EsTUFBTSxDQUFDOEUsQ0FBQyxFQUFFLENBQUMsQ0FBQztVQUMzQjtRQUNGO1FBRUEsT0FBTzZWLFlBQVk7TUFDckIsQ0FBQztNQUVELE9BQU9GLGVBQWU7SUFDeEIsQ0FBQyxDQUFDO0lBRUYxZCxFQUFFLENBQUNWLE1BQU0sQ0FBQyxpQ0FBaUMsRUFBQyxDQUMxQyxRQUFRLENBQ1QsRUFBRSxVQUFVd0csQ0FBQyxFQUFFO01BQ2QsU0FBUytYLGNBQWNBLENBQUU3SSxTQUFTLEVBQUV0SyxRQUFRLEVBQUVrQixPQUFPLEVBQUVDLFdBQVcsRUFBRTtRQUNsRSxJQUFJLENBQUNpUyxVQUFVLEdBQUcsQ0FBQyxDQUFDO1FBRXBCOUksU0FBUyxDQUFDelQsSUFBSSxDQUFDLElBQUksRUFBRW1KLFFBQVEsRUFBRWtCLE9BQU8sRUFBRUMsV0FBVyxDQUFDO1FBRXBELElBQUksQ0FBQ2tTLFlBQVksR0FBRyxJQUFJLENBQUNDLGlCQUFpQixDQUFDLENBQUM7UUFDNUMsSUFBSSxDQUFDMVAsT0FBTyxHQUFHLEtBQUs7TUFDdEI7TUFFQXVQLGNBQWMsQ0FBQzljLFNBQVMsQ0FBQ2tLLE1BQU0sR0FBRyxVQUFVK0osU0FBUyxFQUFFNUwsSUFBSSxFQUFFO1FBQzNELElBQUksQ0FBQzJVLFlBQVksQ0FBQ3BSLE1BQU0sQ0FBQyxDQUFDO1FBQzFCLElBQUksQ0FBQzJCLE9BQU8sR0FBRyxLQUFLO1FBRXBCMEcsU0FBUyxDQUFDelQsSUFBSSxDQUFDLElBQUksRUFBRTZILElBQUksQ0FBQztRQUUxQixJQUFJLElBQUksQ0FBQzZVLGVBQWUsQ0FBQzdVLElBQUksQ0FBQyxFQUFFO1VBQzlCLElBQUksQ0FBQzJDLFFBQVEsQ0FBQ2QsTUFBTSxDQUFDLElBQUksQ0FBQzhTLFlBQVksQ0FBQztRQUN6QztNQUNGLENBQUM7TUFFREYsY0FBYyxDQUFDOWMsU0FBUyxDQUFDaUksSUFBSSxHQUFHLFVBQVVnTSxTQUFTLEVBQUV0RixTQUFTLEVBQUVDLFVBQVUsRUFBRTtRQUMxRSxJQUFJOUIsSUFBSSxHQUFHLElBQUk7UUFFZm1ILFNBQVMsQ0FBQ3pULElBQUksQ0FBQyxJQUFJLEVBQUVtTyxTQUFTLEVBQUVDLFVBQVUsQ0FBQztRQUUzQ0QsU0FBUyxDQUFDeEgsRUFBRSxDQUFDLE9BQU8sRUFBRSxVQUFVRyxNQUFNLEVBQUU7VUFDdEN3RixJQUFJLENBQUNpUSxVQUFVLEdBQUd6VixNQUFNO1VBQ3hCd0YsSUFBSSxDQUFDUyxPQUFPLEdBQUcsSUFBSTtRQUNyQixDQUFDLENBQUM7UUFFRm9CLFNBQVMsQ0FBQ3hILEVBQUUsQ0FBQyxjQUFjLEVBQUUsVUFBVUcsTUFBTSxFQUFFO1VBQzdDd0YsSUFBSSxDQUFDaVEsVUFBVSxHQUFHelYsTUFBTTtVQUN4QndGLElBQUksQ0FBQ1MsT0FBTyxHQUFHLElBQUk7UUFDckIsQ0FBQyxDQUFDO1FBRUYsSUFBSSxDQUFDdkMsUUFBUSxDQUFDN0QsRUFBRSxDQUFDLFFBQVEsRUFBRSxZQUFZO1VBQ3JDLElBQUlnVyxpQkFBaUIsR0FBR3BZLENBQUMsQ0FBQzhOLFFBQVEsQ0FDaENqRixRQUFRLENBQUN3UCxlQUFlLEVBQ3hCdFEsSUFBSSxDQUFDa1EsWUFBWSxDQUFDLENBQUMsQ0FDckIsQ0FBQztVQUVELElBQUlsUSxJQUFJLENBQUNTLE9BQU8sSUFBSSxDQUFDNFAsaUJBQWlCLEVBQUU7WUFDdEM7VUFDRjtVQUVBLElBQUk5TixhQUFhLEdBQUd2QyxJQUFJLENBQUM5QixRQUFRLENBQUNzRSxNQUFNLENBQUMsQ0FBQyxDQUFDQyxHQUFHLEdBQzVDekMsSUFBSSxDQUFDOUIsUUFBUSxDQUFDMkUsV0FBVyxDQUFDLEtBQUssQ0FBQztVQUNsQyxJQUFJME4saUJBQWlCLEdBQUd2USxJQUFJLENBQUNrUSxZQUFZLENBQUMxTixNQUFNLENBQUMsQ0FBQyxDQUFDQyxHQUFHLEdBQ3BEekMsSUFBSSxDQUFDa1EsWUFBWSxDQUFDck4sV0FBVyxDQUFDLEtBQUssQ0FBQztVQUV0QyxJQUFJTixhQUFhLEdBQUcsRUFBRSxJQUFJZ08saUJBQWlCLEVBQUU7WUFDM0N2USxJQUFJLENBQUN3USxRQUFRLENBQUMsQ0FBQztVQUNqQjtRQUNGLENBQUMsQ0FBQztNQUNKLENBQUM7TUFFRFIsY0FBYyxDQUFDOWMsU0FBUyxDQUFDc2QsUUFBUSxHQUFHLFlBQVk7UUFDOUMsSUFBSSxDQUFDL1AsT0FBTyxHQUFHLElBQUk7UUFFbkIsSUFBSWpHLE1BQU0sR0FBR3ZDLENBQUMsQ0FBQzhSLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRTtVQUFDK0QsSUFBSSxFQUFFO1FBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQ21DLFVBQVUsQ0FBQztRQUVyRHpWLE1BQU0sQ0FBQ3NULElBQUksRUFBRTtRQUViLElBQUksQ0FBQ3ZULE9BQU8sQ0FBQyxjQUFjLEVBQUVDLE1BQU0sQ0FBQztNQUN0QyxDQUFDO01BRUR3VixjQUFjLENBQUM5YyxTQUFTLENBQUNrZCxlQUFlLEdBQUcsVUFBVTlJLENBQUMsRUFBRS9MLElBQUksRUFBRTtRQUM1RCxPQUFPQSxJQUFJLENBQUNrVixVQUFVLElBQUlsVixJQUFJLENBQUNrVixVQUFVLENBQUNDLElBQUk7TUFDaEQsQ0FBQztNQUVEVixjQUFjLENBQUM5YyxTQUFTLENBQUNpZCxpQkFBaUIsR0FBRyxZQUFZO1FBQ3ZELElBQUkvUSxPQUFPLEdBQUduSCxDQUFDLENBQ2IsTUFBTSxHQUNOLG9FQUFvRSxHQUNwRSw0Q0FDRixDQUFDO1FBRUQsSUFBSXlHLE9BQU8sR0FBRyxJQUFJLENBQUNYLE9BQU8sQ0FBQ0ksR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDQSxHQUFHLENBQUMsYUFBYSxDQUFDO1FBRWpFaUIsT0FBTyxDQUFDcUgsSUFBSSxDQUFDL0gsT0FBTyxDQUFDLElBQUksQ0FBQ3VSLFVBQVUsQ0FBQyxDQUFDO1FBRXRDLE9BQU83USxPQUFPO01BQ2hCLENBQUM7TUFFRCxPQUFPNFEsY0FBYztJQUN2QixDQUFDLENBQUM7SUFFRjdkLEVBQUUsQ0FBQ1YsTUFBTSxDQUFDLDZCQUE2QixFQUFDLENBQ3RDLFFBQVEsRUFDUixVQUFVLENBQ1gsRUFBRSxVQUFVd0csQ0FBQyxFQUFFRyxLQUFLLEVBQUU7TUFDckIsU0FBU3VZLFVBQVVBLENBQUV4SixTQUFTLEVBQUV0SyxRQUFRLEVBQUVrQixPQUFPLEVBQUU7UUFDakQsSUFBSSxDQUFDNlMsZUFBZSxHQUFHN1MsT0FBTyxDQUFDSSxHQUFHLENBQUMsZ0JBQWdCLENBQUMsSUFBSWxHLENBQUMsQ0FBQzZJLFFBQVEsQ0FBQ2tGLElBQUksQ0FBQztRQUV4RW1CLFNBQVMsQ0FBQ3pULElBQUksQ0FBQyxJQUFJLEVBQUVtSixRQUFRLEVBQUVrQixPQUFPLENBQUM7TUFDekM7TUFFQTRTLFVBQVUsQ0FBQ3pkLFNBQVMsQ0FBQ2lJLElBQUksR0FBRyxVQUFVZ00sU0FBUyxFQUFFdEYsU0FBUyxFQUFFQyxVQUFVLEVBQUU7UUFDdEUsSUFBSTlCLElBQUksR0FBRyxJQUFJO1FBRWYsSUFBSTZRLGtCQUFrQixHQUFHLEtBQUs7UUFFOUIxSixTQUFTLENBQUN6VCxJQUFJLENBQUMsSUFBSSxFQUFFbU8sU0FBUyxFQUFFQyxVQUFVLENBQUM7UUFFM0NELFNBQVMsQ0FBQ3hILEVBQUUsQ0FBQyxNQUFNLEVBQUUsWUFBWTtVQUMvQjJGLElBQUksQ0FBQzhRLGFBQWEsQ0FBQyxDQUFDO1VBQ3BCOVEsSUFBSSxDQUFDK1EseUJBQXlCLENBQUNsUCxTQUFTLENBQUM7VUFFekMsSUFBSSxDQUFDZ1Asa0JBQWtCLEVBQUU7WUFDdkJBLGtCQUFrQixHQUFHLElBQUk7WUFFekJoUCxTQUFTLENBQUN4SCxFQUFFLENBQUMsYUFBYSxFQUFFLFlBQVk7Y0FDdEMyRixJQUFJLENBQUNnUixpQkFBaUIsQ0FBQyxDQUFDO2NBQ3hCaFIsSUFBSSxDQUFDaVIsZUFBZSxDQUFDLENBQUM7WUFDeEIsQ0FBQyxDQUFDO1lBRUZwUCxTQUFTLENBQUN4SCxFQUFFLENBQUMsZ0JBQWdCLEVBQUUsWUFBWTtjQUN6QzJGLElBQUksQ0FBQ2dSLGlCQUFpQixDQUFDLENBQUM7Y0FDeEJoUixJQUFJLENBQUNpUixlQUFlLENBQUMsQ0FBQztZQUN4QixDQUFDLENBQUM7VUFDSjtRQUNGLENBQUMsQ0FBQztRQUVGcFAsU0FBUyxDQUFDeEgsRUFBRSxDQUFDLE9BQU8sRUFBRSxZQUFZO1VBQ2hDMkYsSUFBSSxDQUFDa1IsYUFBYSxDQUFDLENBQUM7VUFDcEJsUixJQUFJLENBQUNtUix5QkFBeUIsQ0FBQ3RQLFNBQVMsQ0FBQztRQUMzQyxDQUFDLENBQUM7UUFFRixJQUFJLENBQUN1UCxrQkFBa0IsQ0FBQy9XLEVBQUUsQ0FBQyxXQUFXLEVBQUUsVUFBVW1KLEdBQUcsRUFBRTtVQUNyREEsR0FBRyxDQUFDRCxlQUFlLENBQUMsQ0FBQztRQUN2QixDQUFDLENBQUM7TUFDSixDQUFDO01BRURvTixVQUFVLENBQUN6ZCxTQUFTLENBQUMwUSxPQUFPLEdBQUcsVUFBVXVELFNBQVMsRUFBRTtRQUNsREEsU0FBUyxDQUFDelQsSUFBSSxDQUFDLElBQUksQ0FBQztRQUVwQixJQUFJLENBQUMwZCxrQkFBa0IsQ0FBQ3RTLE1BQU0sQ0FBQyxDQUFDO01BQ2xDLENBQUM7TUFFRDZSLFVBQVUsQ0FBQ3pkLFNBQVMsQ0FBQ29NLFFBQVEsR0FBRyxVQUFVNkgsU0FBUyxFQUFFNUgsU0FBUyxFQUFFdUMsVUFBVSxFQUFFO1FBQzFFO1FBQ0F2QyxTQUFTLENBQUNuQixJQUFJLENBQUMsT0FBTyxFQUFFMEQsVUFBVSxDQUFDMUQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRWpEbUIsU0FBUyxDQUFDb0UsV0FBVyxDQUFDLFNBQVMsQ0FBQztRQUNoQ3BFLFNBQVMsQ0FBQ3dELFFBQVEsQ0FBQyx5QkFBeUIsQ0FBQztRQUU3Q3hELFNBQVMsQ0FBQzhKLEdBQUcsQ0FBQztVQUNaL0osUUFBUSxFQUFFLFVBQVU7VUFDcEJtRCxHQUFHLEVBQUUsQ0FBQztRQUNSLENBQUMsQ0FBQztRQUVGLElBQUksQ0FBQ1gsVUFBVSxHQUFHQSxVQUFVO01BQzlCLENBQUM7TUFFRDZPLFVBQVUsQ0FBQ3pkLFNBQVMsQ0FBQytLLE1BQU0sR0FBRyxVQUFVa0osU0FBUyxFQUFFO1FBQ2pELElBQUlyRixVQUFVLEdBQUc3SixDQUFDLENBQUMsZUFBZSxDQUFDO1FBRW5DLElBQUlzSCxTQUFTLEdBQUc0SCxTQUFTLENBQUN6VCxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ3BDb08sVUFBVSxDQUFDMUUsTUFBTSxDQUFDbUMsU0FBUyxDQUFDO1FBRTVCLElBQUksQ0FBQzZSLGtCQUFrQixHQUFHdFAsVUFBVTtRQUVwQyxPQUFPQSxVQUFVO01BQ25CLENBQUM7TUFFRDZPLFVBQVUsQ0FBQ3pkLFNBQVMsQ0FBQ2dlLGFBQWEsR0FBRyxVQUFVL0osU0FBUyxFQUFFO1FBQ3hELElBQUksQ0FBQ2lLLGtCQUFrQixDQUFDQyxNQUFNLENBQUMsQ0FBQztNQUNsQyxDQUFDO01BRURWLFVBQVUsQ0FBQ3pkLFNBQVMsQ0FBQzZkLHlCQUF5QixHQUMxQyxVQUFVNUosU0FBUyxFQUFFdEYsU0FBUyxFQUFFO1FBQ2xDLElBQUk3QixJQUFJLEdBQUcsSUFBSTtRQUVmLElBQUlzUixXQUFXLEdBQUcsaUJBQWlCLEdBQUd6UCxTQUFTLENBQUMxSyxFQUFFO1FBQ2xELElBQUlvYSxXQUFXLEdBQUcsaUJBQWlCLEdBQUcxUCxTQUFTLENBQUMxSyxFQUFFO1FBQ2xELElBQUlxYSxnQkFBZ0IsR0FBRyw0QkFBNEIsR0FBRzNQLFNBQVMsQ0FBQzFLLEVBQUU7UUFFbEUsSUFBSXNhLFNBQVMsR0FBRyxJQUFJLENBQUMzUCxVQUFVLENBQUM0UCxPQUFPLENBQUMsQ0FBQyxDQUFDOVIsTUFBTSxDQUFDeEgsS0FBSyxDQUFDeUQsU0FBUyxDQUFDO1FBQ2pFNFYsU0FBUyxDQUFDcFIsSUFBSSxDQUFDLFlBQVk7VUFDekJqSSxLQUFLLENBQUN1RixTQUFTLENBQUMsSUFBSSxFQUFFLHlCQUF5QixFQUFFO1lBQy9DZ1UsQ0FBQyxFQUFFMVosQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDMlosVUFBVSxDQUFDLENBQUM7WUFDdkJDLENBQUMsRUFBRTVaLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQzJLLFNBQVMsQ0FBQztVQUN2QixDQUFDLENBQUM7UUFDSixDQUFDLENBQUM7UUFFRjZPLFNBQVMsQ0FBQ3BYLEVBQUUsQ0FBQ2lYLFdBQVcsRUFBRSxVQUFVUSxFQUFFLEVBQUU7VUFDdEMsSUFBSXhTLFFBQVEsR0FBR2xILEtBQUssQ0FBQ3dGLE9BQU8sQ0FBQyxJQUFJLEVBQUUseUJBQXlCLENBQUM7VUFDN0QzRixDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMySyxTQUFTLENBQUN0RCxRQUFRLENBQUN1UyxDQUFDLENBQUM7UUFDL0IsQ0FBQyxDQUFDO1FBRUY1WixDQUFDLENBQUNoRyxNQUFNLENBQUMsQ0FBQ29JLEVBQUUsQ0FBQ2lYLFdBQVcsR0FBRyxHQUFHLEdBQUdDLFdBQVcsR0FBRyxHQUFHLEdBQUdDLGdCQUFnQixFQUNuRSxVQUFVdGEsQ0FBQyxFQUFFO1VBQ2I4SSxJQUFJLENBQUNnUixpQkFBaUIsQ0FBQyxDQUFDO1VBQ3hCaFIsSUFBSSxDQUFDaVIsZUFBZSxDQUFDLENBQUM7UUFDeEIsQ0FBQyxDQUFDO01BQ0osQ0FBQztNQUVETixVQUFVLENBQUN6ZCxTQUFTLENBQUNpZSx5QkFBeUIsR0FDMUMsVUFBVWhLLFNBQVMsRUFBRXRGLFNBQVMsRUFBRTtRQUNsQyxJQUFJeVAsV0FBVyxHQUFHLGlCQUFpQixHQUFHelAsU0FBUyxDQUFDMUssRUFBRTtRQUNsRCxJQUFJb2EsV0FBVyxHQUFHLGlCQUFpQixHQUFHMVAsU0FBUyxDQUFDMUssRUFBRTtRQUNsRCxJQUFJcWEsZ0JBQWdCLEdBQUcsNEJBQTRCLEdBQUczUCxTQUFTLENBQUMxSyxFQUFFO1FBRWxFLElBQUlzYSxTQUFTLEdBQUcsSUFBSSxDQUFDM1AsVUFBVSxDQUFDNFAsT0FBTyxDQUFDLENBQUMsQ0FBQzlSLE1BQU0sQ0FBQ3hILEtBQUssQ0FBQ3lELFNBQVMsQ0FBQztRQUNqRTRWLFNBQVMsQ0FBQ25MLEdBQUcsQ0FBQ2dMLFdBQVcsQ0FBQztRQUUxQnJaLENBQUMsQ0FBQ2hHLE1BQU0sQ0FBQyxDQUFDcVUsR0FBRyxDQUFDZ0wsV0FBVyxHQUFHLEdBQUcsR0FBR0MsV0FBVyxHQUFHLEdBQUcsR0FBR0MsZ0JBQWdCLENBQUM7TUFDekUsQ0FBQztNQUVEYixVQUFVLENBQUN6ZCxTQUFTLENBQUM4ZCxpQkFBaUIsR0FBRyxZQUFZO1FBQ25ELElBQUllLE9BQU8sR0FBRzlaLENBQUMsQ0FBQ2hHLE1BQU0sQ0FBQztRQUV2QixJQUFJK2YsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDelMsU0FBUyxDQUFDMFMsUUFBUSxDQUFDLHlCQUF5QixDQUFDO1FBQ3pFLElBQUlDLGdCQUFnQixHQUFHLElBQUksQ0FBQzNTLFNBQVMsQ0FBQzBTLFFBQVEsQ0FBQyx5QkFBeUIsQ0FBQztRQUV6RSxJQUFJRSxZQUFZLEdBQUcsSUFBSTtRQUV2QixJQUFJM1AsTUFBTSxHQUFHLElBQUksQ0FBQ1YsVUFBVSxDQUFDVSxNQUFNLENBQUMsQ0FBQztRQUVyQ0EsTUFBTSxDQUFDUyxNQUFNLEdBQUdULE1BQU0sQ0FBQ0MsR0FBRyxHQUFHLElBQUksQ0FBQ1gsVUFBVSxDQUFDZSxXQUFXLENBQUMsS0FBSyxDQUFDO1FBRS9ELElBQUloQixTQUFTLEdBQUc7VUFDZHdCLE1BQU0sRUFBRSxJQUFJLENBQUN2QixVQUFVLENBQUNlLFdBQVcsQ0FBQyxLQUFLO1FBQzNDLENBQUM7UUFFRGhCLFNBQVMsQ0FBQ1ksR0FBRyxHQUFHRCxNQUFNLENBQUNDLEdBQUc7UUFDMUJaLFNBQVMsQ0FBQ29CLE1BQU0sR0FBR1QsTUFBTSxDQUFDQyxHQUFHLEdBQUdaLFNBQVMsQ0FBQ3dCLE1BQU07UUFFaEQsSUFBSW9MLFFBQVEsR0FBRztVQUNicEwsTUFBTSxFQUFFLElBQUksQ0FBQzlELFNBQVMsQ0FBQ3NELFdBQVcsQ0FBQyxLQUFLO1FBQzFDLENBQUM7UUFFRCxJQUFJdVAsUUFBUSxHQUFHO1VBQ2IzUCxHQUFHLEVBQUVzUCxPQUFPLENBQUNuUCxTQUFTLENBQUMsQ0FBQztVQUN4QkssTUFBTSxFQUFFOE8sT0FBTyxDQUFDblAsU0FBUyxDQUFDLENBQUMsR0FBR21QLE9BQU8sQ0FBQzFPLE1BQU0sQ0FBQztRQUMvQyxDQUFDO1FBRUQsSUFBSWdQLGVBQWUsR0FBR0QsUUFBUSxDQUFDM1AsR0FBRyxHQUFJRCxNQUFNLENBQUNDLEdBQUcsR0FBR2dNLFFBQVEsQ0FBQ3BMLE1BQU87UUFDbkUsSUFBSWlQLGVBQWUsR0FBR0YsUUFBUSxDQUFDblAsTUFBTSxHQUFJVCxNQUFNLENBQUNTLE1BQU0sR0FBR3dMLFFBQVEsQ0FBQ3BMLE1BQU87UUFFekUsSUFBSWdHLEdBQUcsR0FBRztVQUNSa0osSUFBSSxFQUFFL1AsTUFBTSxDQUFDK1AsSUFBSTtVQUNqQjlQLEdBQUcsRUFBRVosU0FBUyxDQUFDb0I7UUFDakIsQ0FBQzs7UUFFRDtRQUNBLElBQUl1UCxhQUFhLEdBQUcsSUFBSSxDQUFDNUIsZUFBZTs7UUFFeEM7UUFDQTtRQUNBLElBQUk0QixhQUFhLENBQUNuSixHQUFHLENBQUMsVUFBVSxDQUFDLEtBQUssUUFBUSxFQUFFO1VBQzlDbUosYUFBYSxHQUFHQSxhQUFhLENBQUNDLFlBQVksQ0FBQyxDQUFDO1FBQzlDO1FBRUEsSUFBSUMsWUFBWSxHQUFHRixhQUFhLENBQUNoUSxNQUFNLENBQUMsQ0FBQztRQUV6QzZHLEdBQUcsQ0FBQzVHLEdBQUcsSUFBSWlRLFlBQVksQ0FBQ2pRLEdBQUc7UUFDM0I0RyxHQUFHLENBQUNrSixJQUFJLElBQUlHLFlBQVksQ0FBQ0gsSUFBSTtRQUU3QixJQUFJLENBQUNQLGdCQUFnQixJQUFJLENBQUNFLGdCQUFnQixFQUFFO1VBQzFDQyxZQUFZLEdBQUcsT0FBTztRQUN4QjtRQUVBLElBQUksQ0FBQ0csZUFBZSxJQUFJRCxlQUFlLElBQUksQ0FBQ0wsZ0JBQWdCLEVBQUU7VUFDNURHLFlBQVksR0FBRyxPQUFPO1FBQ3hCLENBQUMsTUFBTSxJQUFJLENBQUNFLGVBQWUsSUFBSUMsZUFBZSxJQUFJTixnQkFBZ0IsRUFBRTtVQUNsRUcsWUFBWSxHQUFHLE9BQU87UUFDeEI7UUFFQSxJQUFJQSxZQUFZLElBQUksT0FBTyxJQUN4QkgsZ0JBQWdCLElBQUlHLFlBQVksS0FBSyxPQUFRLEVBQUU7VUFDaEQ5SSxHQUFHLENBQUM1RyxHQUFHLEdBQUdaLFNBQVMsQ0FBQ1ksR0FBRyxHQUFHaVEsWUFBWSxDQUFDalEsR0FBRyxHQUFHZ00sUUFBUSxDQUFDcEwsTUFBTTtRQUM5RDtRQUVBLElBQUk4TyxZQUFZLElBQUksSUFBSSxFQUFFO1VBQ3hCLElBQUksQ0FBQzVTLFNBQVMsQ0FDWG9FLFdBQVcsQ0FBQyxpREFBaUQsQ0FBQyxDQUM5RFosUUFBUSxDQUFDLG9CQUFvQixHQUFHb1AsWUFBWSxDQUFDO1VBQ2hELElBQUksQ0FBQ3JRLFVBQVUsQ0FDWjZCLFdBQVcsQ0FBQyxtREFBbUQsQ0FBQyxDQUNoRVosUUFBUSxDQUFDLHFCQUFxQixHQUFHb1AsWUFBWSxDQUFDO1FBQ25EO1FBRUEsSUFBSSxDQUFDZixrQkFBa0IsQ0FBQy9ILEdBQUcsQ0FBQ0EsR0FBRyxDQUFDO01BQ2xDLENBQUM7TUFFRHNILFVBQVUsQ0FBQ3pkLFNBQVMsQ0FBQytkLGVBQWUsR0FBRyxZQUFZO1FBQ2pELElBQUk1SCxHQUFHLEdBQUc7VUFDUkMsS0FBSyxFQUFFLElBQUksQ0FBQ3hILFVBQVUsQ0FBQzZRLFVBQVUsQ0FBQyxLQUFLLENBQUMsR0FBRztRQUM3QyxDQUFDO1FBRUQsSUFBSSxJQUFJLENBQUM1VSxPQUFPLENBQUNJLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxFQUFFO1VBQ3pDa0wsR0FBRyxDQUFDdUosUUFBUSxHQUFHdkosR0FBRyxDQUFDQyxLQUFLO1VBQ3hCRCxHQUFHLENBQUMvSixRQUFRLEdBQUcsVUFBVTtVQUN6QitKLEdBQUcsQ0FBQ0MsS0FBSyxHQUFHLE1BQU07UUFDcEI7UUFFQSxJQUFJLENBQUMvSixTQUFTLENBQUM4SixHQUFHLENBQUNBLEdBQUcsQ0FBQztNQUN6QixDQUFDO01BRURzSCxVQUFVLENBQUN6ZCxTQUFTLENBQUM0ZCxhQUFhLEdBQUcsVUFBVTNKLFNBQVMsRUFBRTtRQUN4RCxJQUFJLENBQUNpSyxrQkFBa0IsQ0FBQ3lCLFFBQVEsQ0FBQyxJQUFJLENBQUNqQyxlQUFlLENBQUM7UUFFdEQsSUFBSSxDQUFDSSxpQkFBaUIsQ0FBQyxDQUFDO1FBQ3hCLElBQUksQ0FBQ0MsZUFBZSxDQUFDLENBQUM7TUFDeEIsQ0FBQztNQUVELE9BQU9OLFVBQVU7SUFDbkIsQ0FBQyxDQUFDO0lBRUZ4ZSxFQUFFLENBQUNWLE1BQU0sQ0FBQywwQ0FBMEMsRUFBQyxFQUVwRCxFQUFFLFlBQVk7TUFDYixTQUFTcWhCLFlBQVlBLENBQUV2WCxJQUFJLEVBQUU7UUFDM0IsSUFBSWtVLEtBQUssR0FBRyxDQUFDO1FBRWIsS0FBSyxJQUFJdlYsQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFHcUIsSUFBSSxDQUFDekcsTUFBTSxFQUFFb0YsQ0FBQyxFQUFFLEVBQUU7VUFDcEMsSUFBSWlGLElBQUksR0FBRzVELElBQUksQ0FBQ3JCLENBQUMsQ0FBQztVQUVsQixJQUFJaUYsSUFBSSxDQUFDRixRQUFRLEVBQUU7WUFDakJ3USxLQUFLLElBQUlxRCxZQUFZLENBQUMzVCxJQUFJLENBQUNGLFFBQVEsQ0FBQztVQUN0QyxDQUFDLE1BQU07WUFDTHdRLEtBQUssRUFBRTtVQUNUO1FBQ0Y7UUFFQSxPQUFPQSxLQUFLO01BQ2Q7TUFFQSxTQUFTc0QsdUJBQXVCQSxDQUFFNUwsU0FBUyxFQUFFdEssUUFBUSxFQUFFa0IsT0FBTyxFQUFFQyxXQUFXLEVBQUU7UUFDM0UsSUFBSSxDQUFDZ1YsdUJBQXVCLEdBQUdqVixPQUFPLENBQUNJLEdBQUcsQ0FBQyx5QkFBeUIsQ0FBQztRQUVyRSxJQUFJLElBQUksQ0FBQzZVLHVCQUF1QixHQUFHLENBQUMsRUFBRTtVQUNwQyxJQUFJLENBQUNBLHVCQUF1QixHQUFHQyxRQUFRO1FBQ3pDO1FBRUE5TCxTQUFTLENBQUN6VCxJQUFJLENBQUMsSUFBSSxFQUFFbUosUUFBUSxFQUFFa0IsT0FBTyxFQUFFQyxXQUFXLENBQUM7TUFDdEQ7TUFFQStVLHVCQUF1QixDQUFDN2YsU0FBUyxDQUFDMGMsVUFBVSxHQUFHLFVBQVV6SSxTQUFTLEVBQUUzTSxNQUFNLEVBQUU7UUFDMUUsSUFBSXNZLFlBQVksQ0FBQ3RZLE1BQU0sQ0FBQ2UsSUFBSSxDQUFDeUQsT0FBTyxDQUFDLEdBQUcsSUFBSSxDQUFDZ1UsdUJBQXVCLEVBQUU7VUFDcEUsT0FBTyxLQUFLO1FBQ2Q7UUFFQSxPQUFPN0wsU0FBUyxDQUFDelQsSUFBSSxDQUFDLElBQUksRUFBRThHLE1BQU0sQ0FBQztNQUNyQyxDQUFDO01BRUQsT0FBT3VZLHVCQUF1QjtJQUNoQyxDQUFDLENBQUM7SUFFRjVnQixFQUFFLENBQUNWLE1BQU0sQ0FBQyxnQ0FBZ0MsRUFBQyxDQUN6QyxVQUFVLENBQ1gsRUFBRSxVQUFVMkcsS0FBSyxFQUFFO01BQ2xCLFNBQVM4YSxhQUFhQSxDQUFBLEVBQUksQ0FBRTtNQUU1QkEsYUFBYSxDQUFDaGdCLFNBQVMsQ0FBQ2lJLElBQUksR0FBRyxVQUFVZ00sU0FBUyxFQUFFdEYsU0FBUyxFQUFFQyxVQUFVLEVBQUU7UUFDekUsSUFBSTlCLElBQUksR0FBRyxJQUFJO1FBRWZtSCxTQUFTLENBQUN6VCxJQUFJLENBQUMsSUFBSSxFQUFFbU8sU0FBUyxFQUFFQyxVQUFVLENBQUM7UUFFM0NELFNBQVMsQ0FBQ3hILEVBQUUsQ0FBQyxPQUFPLEVBQUUsVUFBVUcsTUFBTSxFQUFFO1VBQ3RDd0YsSUFBSSxDQUFDbVQsb0JBQW9CLENBQUMzWSxNQUFNLENBQUM7UUFDbkMsQ0FBQyxDQUFDO01BQ0osQ0FBQztNQUVEMFksYUFBYSxDQUFDaGdCLFNBQVMsQ0FBQ2lnQixvQkFBb0IsR0FBRyxVQUFVN0wsQ0FBQyxFQUFFOU0sTUFBTSxFQUFFO1FBQ2xFLElBQUlBLE1BQU0sSUFBSUEsTUFBTSxDQUFDNFksb0JBQW9CLElBQUksSUFBSSxFQUFFO1VBQ2pELElBQUk5WSxLQUFLLEdBQUdFLE1BQU0sQ0FBQzRZLG9CQUFvQjs7VUFFdkM7VUFDQTtVQUNBLElBQUk5WSxLQUFLLENBQUNHLEtBQUssS0FBSyxRQUFRLElBQUlILEtBQUssQ0FBQ0csS0FBSyxLQUFLLFVBQVUsRUFBRTtZQUMxRDtVQUNGO1FBQ0Y7UUFFQSxJQUFJNFksbUJBQW1CLEdBQUcsSUFBSSxDQUFDblIscUJBQXFCLENBQUMsQ0FBQzs7UUFFdEQ7UUFDQSxJQUFJbVIsbUJBQW1CLENBQUN2ZSxNQUFNLEdBQUcsQ0FBQyxFQUFFO1VBQ2xDO1FBQ0Y7UUFFQSxJQUFJeUcsSUFBSSxHQUFHbkQsS0FBSyxDQUFDd0YsT0FBTyxDQUFDeVYsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLEVBQUUsTUFBTSxDQUFDOztRQUV4RDtRQUNBLElBQ0c5WCxJQUFJLENBQUNnQyxPQUFPLElBQUksSUFBSSxJQUFJaEMsSUFBSSxDQUFDZ0MsT0FBTyxDQUFDMkMsUUFBUSxJQUM3QzNFLElBQUksQ0FBQ2dDLE9BQU8sSUFBSSxJQUFJLElBQUloQyxJQUFJLENBQUMyRSxRQUFTLEVBQ3ZDO1VBQ0E7UUFDRjtRQUVBLElBQUksQ0FBQzNGLE9BQU8sQ0FBQyxRQUFRLEVBQUU7VUFDbkJnQixJQUFJLEVBQUVBO1FBQ1YsQ0FBQyxDQUFDO01BQ0osQ0FBQztNQUVELE9BQU8yWCxhQUFhO0lBQ3RCLENBQUMsQ0FBQztJQUVGL2dCLEVBQUUsQ0FBQ1YsTUFBTSxDQUFDLGdDQUFnQyxFQUFDLEVBRTFDLEVBQUUsWUFBWTtNQUNiLFNBQVM2aEIsYUFBYUEsQ0FBQSxFQUFJLENBQUU7TUFFNUJBLGFBQWEsQ0FBQ3BnQixTQUFTLENBQUNpSSxJQUFJLEdBQUcsVUFBVWdNLFNBQVMsRUFBRXRGLFNBQVMsRUFBRUMsVUFBVSxFQUFFO1FBQ3pFLElBQUk5QixJQUFJLEdBQUcsSUFBSTtRQUVmbUgsU0FBUyxDQUFDelQsSUFBSSxDQUFDLElBQUksRUFBRW1PLFNBQVMsRUFBRUMsVUFBVSxDQUFDO1FBRTNDRCxTQUFTLENBQUN4SCxFQUFFLENBQUMsUUFBUSxFQUFFLFVBQVVtSixHQUFHLEVBQUU7VUFDcEN4RCxJQUFJLENBQUN1VCxnQkFBZ0IsQ0FBQy9QLEdBQUcsQ0FBQztRQUM1QixDQUFDLENBQUM7UUFFRjNCLFNBQVMsQ0FBQ3hILEVBQUUsQ0FBQyxVQUFVLEVBQUUsVUFBVW1KLEdBQUcsRUFBRTtVQUN0Q3hELElBQUksQ0FBQ3VULGdCQUFnQixDQUFDL1AsR0FBRyxDQUFDO1FBQzVCLENBQUMsQ0FBQztNQUNKLENBQUM7TUFFRDhQLGFBQWEsQ0FBQ3BnQixTQUFTLENBQUNxZ0IsZ0JBQWdCLEdBQUcsVUFBVWpNLENBQUMsRUFBRTlELEdBQUcsRUFBRTtRQUMzRCxJQUFJRSxhQUFhLEdBQUdGLEdBQUcsQ0FBQ0UsYUFBYTs7UUFFckM7UUFDQSxJQUFJQSxhQUFhLElBQUlBLGFBQWEsQ0FBQzhQLE9BQU8sRUFBRTtVQUMxQztRQUNGO1FBRUEsSUFBSSxDQUFDalosT0FBTyxDQUFDLE9BQU8sRUFBRTtVQUNwQm1KLGFBQWEsRUFBRUEsYUFBYTtVQUM1QjBQLG9CQUFvQixFQUFFNVA7UUFDeEIsQ0FBQyxDQUFDO01BQ0osQ0FBQztNQUVELE9BQU84UCxhQUFhO0lBQ3RCLENBQUMsQ0FBQztJQUVGbmhCLEVBQUUsQ0FBQ1YsTUFBTSxDQUFDLGlCQUFpQixFQUFDLEVBQUUsRUFBQyxZQUFZO01BQ3pDO01BQ0EsT0FBTztRQUNMZ2lCLFlBQVksRUFBRSxTQUFkQSxZQUFZQSxDQUFBLEVBQWM7VUFDeEIsT0FBTyxrQ0FBa0M7UUFDM0MsQ0FBQztRQUNEQyxZQUFZLEVBQUUsU0FBZEEsWUFBWUEsQ0FBWWplLElBQUksRUFBRTtVQUM1QixJQUFJa2UsU0FBUyxHQUFHbGUsSUFBSSxDQUFDMFQsS0FBSyxDQUFDclUsTUFBTSxHQUFHVyxJQUFJLENBQUM2WixPQUFPO1VBRWhELElBQUk1USxPQUFPLEdBQUcsZ0JBQWdCLEdBQUdpVixTQUFTLEdBQUcsWUFBWTtVQUV6RCxJQUFJQSxTQUFTLElBQUksQ0FBQyxFQUFFO1lBQ2xCalYsT0FBTyxJQUFJLEdBQUc7VUFDaEI7VUFFQSxPQUFPQSxPQUFPO1FBQ2hCLENBQUM7UUFDRGtWLGFBQWEsRUFBRSxTQUFmQSxhQUFhQSxDQUFZbmUsSUFBSSxFQUFFO1VBQzdCLElBQUlvZSxjQUFjLEdBQUdwZSxJQUFJLENBQUMwWixPQUFPLEdBQUcxWixJQUFJLENBQUMwVCxLQUFLLENBQUNyVSxNQUFNO1VBRXJELElBQUk0SixPQUFPLEdBQUcsZUFBZSxHQUFHbVYsY0FBYyxHQUFHLHFCQUFxQjtVQUV0RSxPQUFPblYsT0FBTztRQUNoQixDQUFDO1FBQ0Q4QixXQUFXLEVBQUUsU0FBYkEsV0FBV0EsQ0FBQSxFQUFjO1VBQ3ZCLE9BQU8sdUJBQXVCO1FBQ2hDLENBQUM7UUFDRHNULGVBQWUsRUFBRSxTQUFqQkEsZUFBZUEsQ0FBWXJlLElBQUksRUFBRTtVQUMvQixJQUFJaUosT0FBTyxHQUFHLHNCQUFzQixHQUFHakosSUFBSSxDQUFDNlosT0FBTyxHQUFHLE9BQU87VUFFN0QsSUFBSTdaLElBQUksQ0FBQzZaLE9BQU8sSUFBSSxDQUFDLEVBQUU7WUFDckI1USxPQUFPLElBQUksR0FBRztVQUNoQjtVQUVBLE9BQU9BLE9BQU87UUFDaEIsQ0FBQztRQUNEcVYsU0FBUyxFQUFFLFNBQVhBLFNBQVNBLENBQUEsRUFBYztVQUNyQixPQUFPLGtCQUFrQjtRQUMzQixDQUFDO1FBQ0RDLFNBQVMsRUFBRSxTQUFYQSxTQUFTQSxDQUFBLEVBQWM7VUFDckIsT0FBTyxZQUFZO1FBQ3JCO01BQ0YsQ0FBQztJQUNILENBQUMsQ0FBQztJQUVGN2hCLEVBQUUsQ0FBQ1YsTUFBTSxDQUFDLGtCQUFrQixFQUFDLENBQzNCLFFBQVEsRUFDUixTQUFTLEVBRVQsV0FBVyxFQUVYLG9CQUFvQixFQUNwQixzQkFBc0IsRUFDdEIseUJBQXlCLEVBQ3pCLHdCQUF3QixFQUN4QixvQkFBb0IsRUFDcEIsd0JBQXdCLEVBRXhCLFNBQVMsRUFDVCxlQUFlLEVBQ2YsY0FBYyxFQUVkLGVBQWUsRUFDZixjQUFjLEVBQ2QsYUFBYSxFQUNiLGFBQWEsRUFDYixrQkFBa0IsRUFDbEIsMkJBQTJCLEVBQzNCLDJCQUEyQixFQUMzQiwrQkFBK0IsRUFFL0IsWUFBWSxFQUNaLG1CQUFtQixFQUNuQiw0QkFBNEIsRUFDNUIsMkJBQTJCLEVBQzNCLHVCQUF1QixFQUN2QixvQ0FBb0MsRUFDcEMsMEJBQTBCLEVBQzFCLDBCQUEwQixFQUUxQixXQUFXLENBQ1osRUFBRSxVQUFVd0csQ0FBQyxFQUFFL0YsT0FBTyxFQUVWK2hCLFdBQVcsRUFFWHpOLGVBQWUsRUFBRU0saUJBQWlCLEVBQUVJLFdBQVcsRUFBRVMsVUFBVSxFQUMzRHVNLGVBQWUsRUFBRTFLLFVBQVUsRUFFM0JwUixLQUFLLEVBQUV3UixXQUFXLEVBQUV1SyxVQUFVLEVBRTlCQyxVQUFVLEVBQUVDLFNBQVMsRUFBRUMsUUFBUSxFQUFFL0csSUFBSSxFQUFFZ0IsU0FBUyxFQUNoRFMsa0JBQWtCLEVBQUVJLGtCQUFrQixFQUFFRyxzQkFBc0IsRUFFOURHLFFBQVEsRUFBRTZFLGNBQWMsRUFBRTFFLGVBQWUsRUFBRUcsY0FBYyxFQUN6RFcsVUFBVSxFQUFFb0MsdUJBQXVCLEVBQUVHLGFBQWEsRUFBRUksYUFBYSxFQUVqRWtCLGtCQUFrQixFQUFFO01BQy9CLFNBQVNDLFFBQVFBLENBQUEsRUFBSTtRQUNuQixJQUFJLENBQUNDLEtBQUssQ0FBQyxDQUFDO01BQ2Q7TUFFQUQsUUFBUSxDQUFDdmhCLFNBQVMsQ0FBQzBDLEtBQUssR0FBRyxVQUFVbUksT0FBTyxFQUFFO1FBQzVDQSxPQUFPLEdBQUc5RixDQUFDLENBQUM4UixNQUFNLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQ3FCLFFBQVEsRUFBRXJOLE9BQU8sQ0FBQztRQUVwRCxJQUFJQSxPQUFPLENBQUNDLFdBQVcsSUFBSSxJQUFJLEVBQUU7VUFDL0IsSUFBSUQsT0FBTyxDQUFDMk8sSUFBSSxJQUFJLElBQUksRUFBRTtZQUN4QjNPLE9BQU8sQ0FBQ0MsV0FBVyxHQUFHc1csUUFBUTtVQUNoQyxDQUFDLE1BQU0sSUFBSXZXLE9BQU8sQ0FBQ3hDLElBQUksSUFBSSxJQUFJLEVBQUU7WUFDL0J3QyxPQUFPLENBQUNDLFdBQVcsR0FBR3FXLFNBQVM7VUFDakMsQ0FBQyxNQUFNO1lBQ0x0VyxPQUFPLENBQUNDLFdBQVcsR0FBR29XLFVBQVU7VUFDbEM7VUFFQSxJQUFJclcsT0FBTyxDQUFDbVIsa0JBQWtCLEdBQUcsQ0FBQyxFQUFFO1lBQ2xDblIsT0FBTyxDQUFDQyxXQUFXLEdBQUc1RixLQUFLLENBQUNlLFFBQVEsQ0FDbEM0RSxPQUFPLENBQUNDLFdBQVcsRUFDbkJnUixrQkFDRixDQUFDO1VBQ0g7VUFFQSxJQUFJalIsT0FBTyxDQUFDc1Isa0JBQWtCLEdBQUcsQ0FBQyxFQUFFO1lBQ2xDdFIsT0FBTyxDQUFDQyxXQUFXLEdBQUc1RixLQUFLLENBQUNlLFFBQVEsQ0FDbEM0RSxPQUFPLENBQUNDLFdBQVcsRUFDbkJvUixrQkFDRixDQUFDO1VBQ0g7VUFFQSxJQUFJclIsT0FBTyxDQUFDeVIsc0JBQXNCLEdBQUcsQ0FBQyxFQUFFO1lBQ3RDelIsT0FBTyxDQUFDQyxXQUFXLEdBQUc1RixLQUFLLENBQUNlLFFBQVEsQ0FDbEM0RSxPQUFPLENBQUNDLFdBQVcsRUFDbkJ1UixzQkFDRixDQUFDO1VBQ0g7VUFFQSxJQUFJeFIsT0FBTyxDQUFDeVAsSUFBSSxFQUFFO1lBQ2hCelAsT0FBTyxDQUFDQyxXQUFXLEdBQUc1RixLQUFLLENBQUNlLFFBQVEsQ0FBQzRFLE9BQU8sQ0FBQ0MsV0FBVyxFQUFFdVAsSUFBSSxDQUFDO1VBQ2pFO1VBRUEsSUFBSXhQLE9BQU8sQ0FBQzRXLGVBQWUsSUFBSSxJQUFJLElBQUk1VyxPQUFPLENBQUN5USxTQUFTLElBQUksSUFBSSxFQUFFO1lBQ2hFelEsT0FBTyxDQUFDQyxXQUFXLEdBQUc1RixLQUFLLENBQUNlLFFBQVEsQ0FDbEM0RSxPQUFPLENBQUNDLFdBQVcsRUFDbkJ1USxTQUNGLENBQUM7VUFDSDtVQUVBLElBQUl4USxPQUFPLENBQUN3TSxLQUFLLElBQUksSUFBSSxFQUFFO1lBQ3pCLElBQUlxSyxLQUFLLEdBQUcxaUIsT0FBTyxDQUFDNkwsT0FBTyxDQUFDOFcsT0FBTyxHQUFHLGNBQWMsQ0FBQztZQUVyRDlXLE9BQU8sQ0FBQ0MsV0FBVyxHQUFHNUYsS0FBSyxDQUFDZSxRQUFRLENBQ2xDNEUsT0FBTyxDQUFDQyxXQUFXLEVBQ25CNFcsS0FDRixDQUFDO1VBQ0g7VUFFQSxJQUFJN1csT0FBTyxDQUFDK1csYUFBYSxJQUFJLElBQUksRUFBRTtZQUNqQyxJQUFJQyxhQUFhLEdBQUc3aUIsT0FBTyxDQUFDNkwsT0FBTyxDQUFDOFcsT0FBTyxHQUFHLHNCQUFzQixDQUFDO1lBRXJFOVcsT0FBTyxDQUFDQyxXQUFXLEdBQUc1RixLQUFLLENBQUNlLFFBQVEsQ0FDbEM0RSxPQUFPLENBQUNDLFdBQVcsRUFDbkIrVyxhQUNGLENBQUM7VUFDSDtRQUNGO1FBRUEsSUFBSWhYLE9BQU8sQ0FBQ2lYLGNBQWMsSUFBSSxJQUFJLEVBQUU7VUFDbENqWCxPQUFPLENBQUNpWCxjQUFjLEdBQUdmLFdBQVc7VUFFcEMsSUFBSWxXLE9BQU8sQ0FBQzJPLElBQUksSUFBSSxJQUFJLEVBQUU7WUFDeEIzTyxPQUFPLENBQUNpWCxjQUFjLEdBQUc1YyxLQUFLLENBQUNlLFFBQVEsQ0FDckM0RSxPQUFPLENBQUNpWCxjQUFjLEVBQ3RCaEYsY0FDRixDQUFDO1VBQ0g7VUFFQSxJQUFJalMsT0FBTyxDQUFDcUosV0FBVyxJQUFJLElBQUksRUFBRTtZQUMvQnJKLE9BQU8sQ0FBQ2lYLGNBQWMsR0FBRzVjLEtBQUssQ0FBQ2UsUUFBUSxDQUNyQzRFLE9BQU8sQ0FBQ2lYLGNBQWMsRUFDdEJuRixlQUNGLENBQUM7VUFDSDtVQUVBLElBQUk5UixPQUFPLENBQUNrWCxhQUFhLEVBQUU7WUFDekJsWCxPQUFPLENBQUNpWCxjQUFjLEdBQUc1YyxLQUFLLENBQUNlLFFBQVEsQ0FDckM0RSxPQUFPLENBQUNpWCxjQUFjLEVBQ3RCOUIsYUFDRixDQUFDO1VBQ0g7UUFDRjtRQUVBLElBQUluVixPQUFPLENBQUNtWCxlQUFlLElBQUksSUFBSSxFQUFFO1VBQ25DLElBQUluWCxPQUFPLENBQUNvWCxRQUFRLEVBQUU7WUFDcEJwWCxPQUFPLENBQUNtWCxlQUFlLEdBQUd4RixRQUFRO1VBQ3BDLENBQUMsTUFBTTtZQUNMLElBQUkwRixrQkFBa0IsR0FBR2hkLEtBQUssQ0FBQ2UsUUFBUSxDQUFDdVcsUUFBUSxFQUFFNkUsY0FBYyxDQUFDO1lBRWpFeFcsT0FBTyxDQUFDbVgsZUFBZSxHQUFHRSxrQkFBa0I7VUFDOUM7VUFFQSxJQUFJclgsT0FBTyxDQUFDaVYsdUJBQXVCLEtBQUssQ0FBQyxFQUFFO1lBQ3pDalYsT0FBTyxDQUFDbVgsZUFBZSxHQUFHOWMsS0FBSyxDQUFDZSxRQUFRLENBQ3RDNEUsT0FBTyxDQUFDbVgsZUFBZSxFQUN2Qm5DLHVCQUNGLENBQUM7VUFDSDtVQUVBLElBQUloVixPQUFPLENBQUNzWCxhQUFhLEVBQUU7WUFDekJ0WCxPQUFPLENBQUNtWCxlQUFlLEdBQUc5YyxLQUFLLENBQUNlLFFBQVEsQ0FDdEM0RSxPQUFPLENBQUNtWCxlQUFlLEVBQ3ZCNUIsYUFDRixDQUFDO1VBQ0g7VUFFQSxJQUNFdlYsT0FBTyxDQUFDdVgsZ0JBQWdCLElBQUksSUFBSSxJQUNoQ3ZYLE9BQU8sQ0FBQ3dYLFdBQVcsSUFBSSxJQUFJLElBQzNCeFgsT0FBTyxDQUFDeVgscUJBQXFCLElBQUksSUFBSSxFQUNyQztZQUNBLElBQUlDLFdBQVcsR0FBR3ZqQixPQUFPLENBQUM2TCxPQUFPLENBQUM4VyxPQUFPLEdBQUcsb0JBQW9CLENBQUM7WUFFakU5VyxPQUFPLENBQUNtWCxlQUFlLEdBQUc5YyxLQUFLLENBQUNlLFFBQVEsQ0FDdEM0RSxPQUFPLENBQUNtWCxlQUFlLEVBQ3ZCTyxXQUNGLENBQUM7VUFDSDtVQUVBMVgsT0FBTyxDQUFDbVgsZUFBZSxHQUFHOWMsS0FBSyxDQUFDZSxRQUFRLENBQ3RDNEUsT0FBTyxDQUFDbVgsZUFBZSxFQUN2QnZFLFVBQ0YsQ0FBQztRQUNIO1FBRUEsSUFBSTVTLE9BQU8sQ0FBQzJYLGdCQUFnQixJQUFJLElBQUksRUFBRTtVQUNwQyxJQUFJM1gsT0FBTyxDQUFDb1gsUUFBUSxFQUFFO1lBQ3BCcFgsT0FBTyxDQUFDMlgsZ0JBQWdCLEdBQUc1TyxpQkFBaUI7VUFDOUMsQ0FBQyxNQUFNO1lBQ0wvSSxPQUFPLENBQUMyWCxnQkFBZ0IsR0FBR2xQLGVBQWU7VUFDNUM7O1VBRUE7VUFDQSxJQUFJekksT0FBTyxDQUFDcUosV0FBVyxJQUFJLElBQUksRUFBRTtZQUMvQnJKLE9BQU8sQ0FBQzJYLGdCQUFnQixHQUFHdGQsS0FBSyxDQUFDZSxRQUFRLENBQ3ZDNEUsT0FBTyxDQUFDMlgsZ0JBQWdCLEVBQ3hCeE8sV0FDRixDQUFDO1VBQ0g7VUFFQSxJQUFJbkosT0FBTyxDQUFDNFgsVUFBVSxFQUFFO1lBQ3RCNVgsT0FBTyxDQUFDMlgsZ0JBQWdCLEdBQUd0ZCxLQUFLLENBQUNlLFFBQVEsQ0FDdkM0RSxPQUFPLENBQUMyWCxnQkFBZ0IsRUFDeEIvTixVQUNGLENBQUM7VUFDSDtVQUVBLElBQUk1SixPQUFPLENBQUNvWCxRQUFRLEVBQUU7WUFDcEJwWCxPQUFPLENBQUMyWCxnQkFBZ0IsR0FBR3RkLEtBQUssQ0FBQ2UsUUFBUSxDQUN2QzRFLE9BQU8sQ0FBQzJYLGdCQUFnQixFQUN4QnhCLGVBQ0YsQ0FBQztVQUNIO1VBRUEsSUFDRW5XLE9BQU8sQ0FBQzZYLGlCQUFpQixJQUFJLElBQUksSUFDakM3WCxPQUFPLENBQUM4WCxZQUFZLElBQUksSUFBSSxJQUM1QjlYLE9BQU8sQ0FBQytYLHNCQUFzQixJQUFJLElBQUksRUFDdEM7WUFDQSxJQUFJQyxZQUFZLEdBQUc3akIsT0FBTyxDQUFDNkwsT0FBTyxDQUFDOFcsT0FBTyxHQUFHLHFCQUFxQixDQUFDO1lBRW5FOVcsT0FBTyxDQUFDMlgsZ0JBQWdCLEdBQUd0ZCxLQUFLLENBQUNlLFFBQVEsQ0FDdkM0RSxPQUFPLENBQUMyWCxnQkFBZ0IsRUFDeEJLLFlBQ0YsQ0FBQztVQUNIO1VBRUFoWSxPQUFPLENBQUMyWCxnQkFBZ0IsR0FBR3RkLEtBQUssQ0FBQ2UsUUFBUSxDQUN2QzRFLE9BQU8sQ0FBQzJYLGdCQUFnQixFQUN4QmxNLFVBQ0YsQ0FBQztRQUNIO1FBRUEsSUFBSSxPQUFPekwsT0FBTyxDQUFDaVksUUFBUSxLQUFLLFFBQVEsRUFBRTtVQUN4QztVQUNBLElBQUlqWSxPQUFPLENBQUNpWSxRQUFRLENBQUMxZixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQ3JDO1lBQ0EsSUFBSTJmLGFBQWEsR0FBR2xZLE9BQU8sQ0FBQ2lZLFFBQVEsQ0FBQ3JoQixLQUFLLENBQUMsR0FBRyxDQUFDO1lBQy9DLElBQUl1aEIsWUFBWSxHQUFHRCxhQUFhLENBQUMsQ0FBQyxDQUFDO1lBRW5DbFksT0FBTyxDQUFDaVksUUFBUSxHQUFHLENBQUNqWSxPQUFPLENBQUNpWSxRQUFRLEVBQUVFLFlBQVksQ0FBQztVQUNyRCxDQUFDLE1BQU07WUFDTG5ZLE9BQU8sQ0FBQ2lZLFFBQVEsR0FBRyxDQUFDalksT0FBTyxDQUFDaVksUUFBUSxDQUFDO1VBQ3ZDO1FBQ0Y7UUFFQSxJQUFJL2QsQ0FBQyxDQUFDaVYsT0FBTyxDQUFDblAsT0FBTyxDQUFDaVksUUFBUSxDQUFDLEVBQUU7VUFDL0IsSUFBSUcsU0FBUyxHQUFHLElBQUl2TSxXQUFXLENBQUMsQ0FBQztVQUNqQzdMLE9BQU8sQ0FBQ2lZLFFBQVEsQ0FBQ3JnQixJQUFJLENBQUMsSUFBSSxDQUFDO1VBRTNCLElBQUl5Z0IsYUFBYSxHQUFHclksT0FBTyxDQUFDaVksUUFBUTtVQUVwQyxLQUFLLElBQUlLLENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsR0FBR0QsYUFBYSxDQUFDdGhCLE1BQU0sRUFBRXVoQixDQUFDLEVBQUUsRUFBRTtZQUM3QyxJQUFJemlCLElBQUksR0FBR3dpQixhQUFhLENBQUNDLENBQUMsQ0FBQztZQUMzQixJQUFJTCxRQUFRLEdBQUcsQ0FBQyxDQUFDO1lBRWpCLElBQUk7Y0FDRjtjQUNBQSxRQUFRLEdBQUdwTSxXQUFXLENBQUNNLFFBQVEsQ0FBQ3RXLElBQUksQ0FBQztZQUN2QyxDQUFDLENBQUMsT0FBT3NELENBQUMsRUFBRTtjQUNWLElBQUk7Z0JBQ0Y7Z0JBQ0F0RCxJQUFJLEdBQUcsSUFBSSxDQUFDd1gsUUFBUSxDQUFDa0wsZUFBZSxHQUFHMWlCLElBQUk7Z0JBQzNDb2lCLFFBQVEsR0FBR3BNLFdBQVcsQ0FBQ00sUUFBUSxDQUFDdFcsSUFBSSxDQUFDO2NBQ3ZDLENBQUMsQ0FBQyxPQUFPMmlCLEVBQUUsRUFBRTtnQkFDWDtnQkFDQTtnQkFDQTtnQkFDQSxJQUFJeFksT0FBTyxDQUFDeVksS0FBSyxJQUFJdmtCLE1BQU0sQ0FBQ2lHLE9BQU8sSUFBSUEsT0FBTyxDQUFDdWUsSUFBSSxFQUFFO2tCQUNuRHZlLE9BQU8sQ0FBQ3VlLElBQUksQ0FDVixrQ0FBa0MsR0FBRzdpQixJQUFJLEdBQUcsaUJBQWlCLEdBQzdELHdEQUNGLENBQUM7Z0JBQ0g7Z0JBRUE7Y0FDRjtZQUNGO1lBRUF1aUIsU0FBUyxDQUFDcE0sTUFBTSxDQUFDaU0sUUFBUSxDQUFDO1VBQzVCO1VBRUFqWSxPQUFPLENBQUNxTSxZQUFZLEdBQUcrTCxTQUFTO1FBQ2xDLENBQUMsTUFBTTtVQUNMLElBQUlPLGVBQWUsR0FBRzlNLFdBQVcsQ0FBQ00sUUFBUSxDQUN4QyxJQUFJLENBQUNrQixRQUFRLENBQUNrTCxlQUFlLEdBQUcsSUFDbEMsQ0FBQztVQUNELElBQUlLLGlCQUFpQixHQUFHLElBQUkvTSxXQUFXLENBQUM3TCxPQUFPLENBQUNpWSxRQUFRLENBQUM7VUFFekRXLGlCQUFpQixDQUFDNU0sTUFBTSxDQUFDMk0sZUFBZSxDQUFDO1VBRXpDM1ksT0FBTyxDQUFDcU0sWUFBWSxHQUFHdU0saUJBQWlCO1FBQzFDO1FBRUEsT0FBTzVZLE9BQU87TUFDaEIsQ0FBQztNQUVEMFcsUUFBUSxDQUFDdmhCLFNBQVMsQ0FBQ3doQixLQUFLLEdBQUcsWUFBWTtRQUNyQyxTQUFTa0MsZUFBZUEsQ0FBRWpXLElBQUksRUFBRTtVQUM5QjtVQUNBLFNBQVNoRSxLQUFLQSxDQUFDa2EsQ0FBQyxFQUFFO1lBQ2hCLE9BQU8xQyxVQUFVLENBQUMwQyxDQUFDLENBQUMsSUFBSUEsQ0FBQztVQUMzQjtVQUVBLE9BQU9sVyxJQUFJLENBQUMxTCxPQUFPLENBQUMsbUJBQW1CLEVBQUUwSCxLQUFLLENBQUM7UUFDakQ7UUFFQSxTQUFTME8sT0FBT0EsQ0FBRTdRLE1BQU0sRUFBRWUsSUFBSSxFQUFFO1VBQzlCO1VBQ0EsSUFBSXRELENBQUMsQ0FBQ29XLElBQUksQ0FBQzdULE1BQU0sQ0FBQzRPLElBQUksQ0FBQyxLQUFLLEVBQUUsRUFBRTtZQUM5QixPQUFPN04sSUFBSTtVQUNiOztVQUVBO1VBQ0EsSUFBSUEsSUFBSSxDQUFDMEQsUUFBUSxJQUFJMUQsSUFBSSxDQUFDMEQsUUFBUSxDQUFDbkssTUFBTSxHQUFHLENBQUMsRUFBRTtZQUM3QztZQUNBO1lBQ0EsSUFBSTZILEtBQUssR0FBRzFFLENBQUMsQ0FBQzhSLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLEVBQUV4TyxJQUFJLENBQUM7O1lBRXBDO1lBQ0EsS0FBSyxJQUFJa0csQ0FBQyxHQUFHbEcsSUFBSSxDQUFDMEQsUUFBUSxDQUFDbkssTUFBTSxHQUFHLENBQUMsRUFBRTJNLENBQUMsSUFBSSxDQUFDLEVBQUVBLENBQUMsRUFBRSxFQUFFO2NBQ2xELElBQUlDLEtBQUssR0FBR25HLElBQUksQ0FBQzBELFFBQVEsQ0FBQ3dDLENBQUMsQ0FBQztjQUU1QixJQUFJcUosT0FBTyxHQUFHTyxPQUFPLENBQUM3USxNQUFNLEVBQUVrSCxLQUFLLENBQUM7O2NBRXBDO2NBQ0EsSUFBSW9KLE9BQU8sSUFBSSxJQUFJLEVBQUU7Z0JBQ25Cbk8sS0FBSyxDQUFDc0MsUUFBUSxDQUFDN0osTUFBTSxDQUFDcU0sQ0FBQyxFQUFFLENBQUMsQ0FBQztjQUM3QjtZQUNGOztZQUVBO1lBQ0EsSUFBSTlFLEtBQUssQ0FBQ3NDLFFBQVEsQ0FBQ25LLE1BQU0sR0FBRyxDQUFDLEVBQUU7Y0FDN0IsT0FBTzZILEtBQUs7WUFDZDs7WUFFQTtZQUNBLE9BQU8wTyxPQUFPLENBQUM3USxNQUFNLEVBQUVtQyxLQUFLLENBQUM7VUFDL0I7VUFFQSxJQUFJbWEsUUFBUSxHQUFHRixlQUFlLENBQUNyYixJQUFJLENBQUNvRixJQUFJLENBQUMsQ0FBQ3VOLFdBQVcsQ0FBQyxDQUFDO1VBQ3ZELElBQUk5RSxJQUFJLEdBQUd3TixlQUFlLENBQUNwYyxNQUFNLENBQUM0TyxJQUFJLENBQUMsQ0FBQzhFLFdBQVcsQ0FBQyxDQUFDOztVQUVyRDtVQUNBLElBQUk0SSxRQUFRLENBQUN4Z0IsT0FBTyxDQUFDOFMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUU7WUFDL0IsT0FBTzdOLElBQUk7VUFDYjs7VUFFQTtVQUNBLE9BQU8sSUFBSTtRQUNiO1FBRUEsSUFBSSxDQUFDNlAsUUFBUSxHQUFHO1VBQ2R5SixPQUFPLEVBQUUsSUFBSTtVQUNieUIsZUFBZSxFQUFFLFNBQVM7VUFDMUJqQixhQUFhLEVBQUUsSUFBSTtVQUNuQm1CLEtBQUssRUFBRSxLQUFLO1VBQ1pPLGlCQUFpQixFQUFFLEtBQUs7VUFDeEJ4YSxZQUFZLEVBQUVuRSxLQUFLLENBQUNtRSxZQUFZO1VBQ2hDeVosUUFBUSxFQUFFeEIsa0JBQWtCO1VBQzVCbkosT0FBTyxFQUFFQSxPQUFPO1VBQ2hCNkQsa0JBQWtCLEVBQUUsQ0FBQztVQUNyQkcsa0JBQWtCLEVBQUUsQ0FBQztVQUNyQkcsc0JBQXNCLEVBQUUsQ0FBQztVQUN6QndELHVCQUF1QixFQUFFLENBQUM7VUFDMUJpQyxhQUFhLEVBQUUsS0FBSztVQUNwQnhWLE1BQU0sRUFBRSxTQUFSQSxNQUFNQSxDQUFZbEUsSUFBSSxFQUFFO1lBQ3RCLE9BQU9BLElBQUk7VUFDYixDQUFDO1VBQ0R5YixjQUFjLEVBQUUsU0FBaEJBLGNBQWNBLENBQVlsVCxNQUFNLEVBQUU7WUFDaEMsT0FBT0EsTUFBTSxDQUFDbkQsSUFBSTtVQUNwQixDQUFDO1VBQ0RzVyxpQkFBaUIsRUFBRSxTQUFuQkEsaUJBQWlCQSxDQUFZclEsU0FBUyxFQUFFO1lBQ3RDLE9BQU9BLFNBQVMsQ0FBQ2pHLElBQUk7VUFDdkIsQ0FBQztVQUNEdVcsS0FBSyxFQUFFLFNBQVM7VUFDaEI1TixLQUFLLEVBQUU7UUFDVCxDQUFDO01BQ0gsQ0FBQztNQUVEbUwsUUFBUSxDQUFDdmhCLFNBQVMsQ0FBQ2lrQixHQUFHLEdBQUcsVUFBVXhlLEdBQUcsRUFBRTNDLEtBQUssRUFBRTtRQUM3QyxJQUFJb2hCLFFBQVEsR0FBR25mLENBQUMsQ0FBQ29mLFNBQVMsQ0FBQzFlLEdBQUcsQ0FBQztRQUUvQixJQUFJNEMsSUFBSSxHQUFHLENBQUMsQ0FBQztRQUNiQSxJQUFJLENBQUM2YixRQUFRLENBQUMsR0FBR3BoQixLQUFLO1FBRXRCLElBQUlzaEIsYUFBYSxHQUFHbGYsS0FBSyxDQUFDa0QsWUFBWSxDQUFDQyxJQUFJLENBQUM7UUFFNUN0RCxDQUFDLENBQUM4UixNQUFNLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQ3FCLFFBQVEsRUFBRWtNLGFBQWEsQ0FBQztNQUM5QyxDQUFDO01BRUQsSUFBSWxNLFFBQVEsR0FBRyxJQUFJcUosUUFBUSxDQUFDLENBQUM7TUFFN0IsT0FBT3JKLFFBQVE7SUFDakIsQ0FBQyxDQUFDO0lBRUZqWixFQUFFLENBQUNWLE1BQU0sQ0FBQyxpQkFBaUIsRUFBQyxDQUMxQixTQUFTLEVBQ1QsUUFBUSxFQUNSLFlBQVksRUFDWixTQUFTLENBQ1YsRUFBRSxVQUFVUyxPQUFPLEVBQUUrRixDQUFDLEVBQUV3YyxRQUFRLEVBQUVyYyxLQUFLLEVBQUU7TUFDeEMsU0FBU21mLE9BQU9BLENBQUV4WixPQUFPLEVBQUVsQixRQUFRLEVBQUU7UUFDbkMsSUFBSSxDQUFDa0IsT0FBTyxHQUFHQSxPQUFPO1FBRXRCLElBQUlsQixRQUFRLElBQUksSUFBSSxFQUFFO1VBQ3BCLElBQUksQ0FBQzJhLFdBQVcsQ0FBQzNhLFFBQVEsQ0FBQztRQUM1QjtRQUVBLElBQUksQ0FBQ2tCLE9BQU8sR0FBRzBXLFFBQVEsQ0FBQzdlLEtBQUssQ0FBQyxJQUFJLENBQUNtSSxPQUFPLENBQUM7UUFFM0MsSUFBSWxCLFFBQVEsSUFBSUEsUUFBUSxDQUFDOE4sRUFBRSxDQUFDLE9BQU8sQ0FBQyxFQUFFO1VBQ3BDLElBQUk4TSxXQUFXLEdBQUd2bEIsT0FBTyxDQUFDLElBQUksQ0FBQ2lNLEdBQUcsQ0FBQyxTQUFTLENBQUMsR0FBRyxrQkFBa0IsQ0FBQztVQUVuRSxJQUFJLENBQUNKLE9BQU8sQ0FBQ0MsV0FBVyxHQUFHNUYsS0FBSyxDQUFDZSxRQUFRLENBQ3ZDLElBQUksQ0FBQzRFLE9BQU8sQ0FBQ0MsV0FBVyxFQUN4QnlaLFdBQ0YsQ0FBQztRQUNIO01BQ0Y7TUFFQUYsT0FBTyxDQUFDcmtCLFNBQVMsQ0FBQ3NrQixXQUFXLEdBQUcsVUFBVXZJLEVBQUUsRUFBRTtRQUM1QyxJQUFJeUksWUFBWSxHQUFHLENBQUMsU0FBUyxDQUFDO1FBRTlCLElBQUksSUFBSSxDQUFDM1osT0FBTyxDQUFDb1gsUUFBUSxJQUFJLElBQUksRUFBRTtVQUNqQyxJQUFJLENBQUNwWCxPQUFPLENBQUNvWCxRQUFRLEdBQUdsRyxFQUFFLENBQUN4YixJQUFJLENBQUMsVUFBVSxDQUFDO1FBQzdDO1FBRUEsSUFBSSxJQUFJLENBQUNzSyxPQUFPLENBQUMyQyxRQUFRLElBQUksSUFBSSxFQUFFO1VBQ2pDLElBQUksQ0FBQzNDLE9BQU8sQ0FBQzJDLFFBQVEsR0FBR3VPLEVBQUUsQ0FBQ3hiLElBQUksQ0FBQyxVQUFVLENBQUM7UUFDN0M7UUFFQSxJQUFJLElBQUksQ0FBQ3NLLE9BQU8sQ0FBQ2lZLFFBQVEsSUFBSSxJQUFJLEVBQUU7VUFDakMsSUFBSS9HLEVBQUUsQ0FBQ3hiLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUNuQixJQUFJLENBQUNzSyxPQUFPLENBQUNpWSxRQUFRLEdBQUcvRyxFQUFFLENBQUN4YixJQUFJLENBQUMsTUFBTSxDQUFDLENBQUNtSSxXQUFXLENBQUMsQ0FBQztVQUN2RCxDQUFDLE1BQU0sSUFBSXFULEVBQUUsQ0FBQzdJLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQzNTLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUM1QyxJQUFJLENBQUNzSyxPQUFPLENBQUNpWSxRQUFRLEdBQUcvRyxFQUFFLENBQUM3SSxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMzUyxJQUFJLENBQUMsTUFBTSxDQUFDO1VBQzNEO1FBQ0Y7UUFFQSxJQUFJLElBQUksQ0FBQ3NLLE9BQU8sQ0FBQzRaLEdBQUcsSUFBSSxJQUFJLEVBQUU7VUFDNUIsSUFBSTFJLEVBQUUsQ0FBQ3hiLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUNsQixJQUFJLENBQUNzSyxPQUFPLENBQUM0WixHQUFHLEdBQUcxSSxFQUFFLENBQUN4YixJQUFJLENBQUMsS0FBSyxDQUFDO1VBQ25DLENBQUMsTUFBTSxJQUFJd2IsRUFBRSxDQUFDN0ksT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDM1MsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQzFDLElBQUksQ0FBQ3NLLE9BQU8sQ0FBQzRaLEdBQUcsR0FBRzFJLEVBQUUsQ0FBQzdJLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQzNTLElBQUksQ0FBQyxLQUFLLENBQUM7VUFDcEQsQ0FBQyxNQUFNO1lBQ0wsSUFBSSxDQUFDc0ssT0FBTyxDQUFDNFosR0FBRyxHQUFHLEtBQUs7VUFDMUI7UUFDRjtRQUVBMUksRUFBRSxDQUFDeGIsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUNzSyxPQUFPLENBQUMyQyxRQUFRLENBQUM7UUFDMUN1TyxFQUFFLENBQUN4YixJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQ3NLLE9BQU8sQ0FBQ29YLFFBQVEsQ0FBQztRQUUxQyxJQUFJL2MsS0FBSyxDQUFDd0YsT0FBTyxDQUFDcVIsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLGFBQWEsQ0FBQyxFQUFFO1VBQ3ZDLElBQUksSUFBSSxDQUFDbFIsT0FBTyxDQUFDeVksS0FBSyxJQUFJdmtCLE1BQU0sQ0FBQ2lHLE9BQU8sSUFBSUEsT0FBTyxDQUFDdWUsSUFBSSxFQUFFO1lBQ3hEdmUsT0FBTyxDQUFDdWUsSUFBSSxDQUNWLGlFQUFpRSxHQUNqRSxvRUFBb0UsR0FDcEUsd0NBQ0YsQ0FBQztVQUNIO1VBRUFyZSxLQUFLLENBQUN1RixTQUFTLENBQUNzUixFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsTUFBTSxFQUFFN1csS0FBSyxDQUFDd0YsT0FBTyxDQUFDcVIsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLGFBQWEsQ0FBQyxDQUFDO1VBQ25FN1csS0FBSyxDQUFDdUYsU0FBUyxDQUFDc1IsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUM7UUFDdEM7UUFFQSxJQUFJN1csS0FBSyxDQUFDd0YsT0FBTyxDQUFDcVIsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxFQUFFO1VBQ25DLElBQUksSUFBSSxDQUFDbFIsT0FBTyxDQUFDeVksS0FBSyxJQUFJdmtCLE1BQU0sQ0FBQ2lHLE9BQU8sSUFBSUEsT0FBTyxDQUFDdWUsSUFBSSxFQUFFO1lBQ3hEdmUsT0FBTyxDQUFDdWUsSUFBSSxDQUNWLDZEQUE2RCxHQUM3RCxvRUFBb0UsR0FDcEUsaUNBQ0YsQ0FBQztVQUNIO1VBRUF4SCxFQUFFLENBQUM3USxJQUFJLENBQUMsV0FBVyxFQUFFaEcsS0FBSyxDQUFDd0YsT0FBTyxDQUFDcVIsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxDQUFDO1VBQ3JEN1csS0FBSyxDQUFDdUYsU0FBUyxDQUFDc1IsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLFVBQVUsRUFBRTdXLEtBQUssQ0FBQ3dGLE9BQU8sQ0FBQ3FSLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxTQUFTLENBQUMsQ0FBQztRQUVyRTtRQUVBLElBQUkySSxPQUFPLEdBQUcsQ0FBQyxDQUFDOztRQUVoQjtRQUNBO1FBQ0EsSUFBSTNmLENBQUMsQ0FBQzdGLEVBQUUsQ0FBQzJLLE1BQU0sSUFBSTlFLENBQUMsQ0FBQzdGLEVBQUUsQ0FBQzJLLE1BQU0sQ0FBQ0MsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxJQUFJLElBQUlpUyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMySSxPQUFPLEVBQUU7VUFDcEVBLE9BQU8sR0FBRzNmLENBQUMsQ0FBQzhSLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLEVBQUVrRixFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMySSxPQUFPLEVBQUV4ZixLQUFLLENBQUN3RixPQUFPLENBQUNxUixFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNuRSxDQUFDLE1BQU07VUFDTDJJLE9BQU8sR0FBR3hmLEtBQUssQ0FBQ3dGLE9BQU8sQ0FBQ3FSLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNoQztRQUVBLElBQUkxVCxJQUFJLEdBQUd0RCxDQUFDLENBQUM4UixNQUFNLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxFQUFFNk4sT0FBTyxDQUFDO1FBRXRDcmMsSUFBSSxHQUFHbkQsS0FBSyxDQUFDa0QsWUFBWSxDQUFDQyxJQUFJLENBQUM7UUFFL0IsS0FBSyxJQUFJNUMsR0FBRyxJQUFJNEMsSUFBSSxFQUFFO1VBQ3BCLElBQUl0RCxDQUFDLENBQUNxSSxPQUFPLENBQUMzSCxHQUFHLEVBQUUrZSxZQUFZLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRTtZQUNyQztVQUNGO1VBRUEsSUFBSXpmLENBQUMsQ0FBQzRmLGFBQWEsQ0FBQyxJQUFJLENBQUM5WixPQUFPLENBQUNwRixHQUFHLENBQUMsQ0FBQyxFQUFFO1lBQ3RDVixDQUFDLENBQUM4UixNQUFNLENBQUMsSUFBSSxDQUFDaE0sT0FBTyxDQUFDcEYsR0FBRyxDQUFDLEVBQUU0QyxJQUFJLENBQUM1QyxHQUFHLENBQUMsQ0FBQztVQUN4QyxDQUFDLE1BQU07WUFDTCxJQUFJLENBQUNvRixPQUFPLENBQUNwRixHQUFHLENBQUMsR0FBRzRDLElBQUksQ0FBQzVDLEdBQUcsQ0FBQztVQUMvQjtRQUNGO1FBRUEsT0FBTyxJQUFJO01BQ2IsQ0FBQztNQUVENGUsT0FBTyxDQUFDcmtCLFNBQVMsQ0FBQ2lMLEdBQUcsR0FBRyxVQUFVeEYsR0FBRyxFQUFFO1FBQ3JDLE9BQU8sSUFBSSxDQUFDb0YsT0FBTyxDQUFDcEYsR0FBRyxDQUFDO01BQzFCLENBQUM7TUFFRDRlLE9BQU8sQ0FBQ3JrQixTQUFTLENBQUNpa0IsR0FBRyxHQUFHLFVBQVV4ZSxHQUFHLEVBQUV5SSxHQUFHLEVBQUU7UUFDMUMsSUFBSSxDQUFDckQsT0FBTyxDQUFDcEYsR0FBRyxDQUFDLEdBQUd5SSxHQUFHO01BQ3pCLENBQUM7TUFFRCxPQUFPbVcsT0FBTztJQUNoQixDQUFDLENBQUM7SUFFRnBsQixFQUFFLENBQUNWLE1BQU0sQ0FBQyxjQUFjLEVBQUMsQ0FDdkIsUUFBUSxFQUNSLFdBQVcsRUFDWCxTQUFTLEVBQ1QsUUFBUSxDQUNULEVBQUUsVUFBVXdHLENBQUMsRUFBRXNmLE9BQU8sRUFBRW5mLEtBQUssRUFBRThMLElBQUksRUFBRTtNQUNwQyxJQUFJNFQsT0FBTyxHQUFHLFNBQVZBLE9BQU9BLENBQWFqYixRQUFRLEVBQUVrQixPQUFPLEVBQUU7UUFDekMsSUFBSTNGLEtBQUssQ0FBQ3dGLE9BQU8sQ0FBQ2YsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxJQUFJLElBQUksRUFBRTtVQUNqRHpFLEtBQUssQ0FBQ3dGLE9BQU8sQ0FBQ2YsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxDQUFDK0csT0FBTyxDQUFDLENBQUM7UUFDakQ7UUFFQSxJQUFJLENBQUMvRyxRQUFRLEdBQUdBLFFBQVE7UUFFeEIsSUFBSSxDQUFDMUYsRUFBRSxHQUFHLElBQUksQ0FBQzRnQixXQUFXLENBQUNsYixRQUFRLENBQUM7UUFFcENrQixPQUFPLEdBQUdBLE9BQU8sSUFBSSxDQUFDLENBQUM7UUFFdkIsSUFBSSxDQUFDQSxPQUFPLEdBQUcsSUFBSXdaLE9BQU8sQ0FBQ3haLE9BQU8sRUFBRWxCLFFBQVEsQ0FBQztRQUU3Q2liLE9BQU8sQ0FBQ2xmLFNBQVMsQ0FBQ0YsV0FBVyxDQUFDaEYsSUFBSSxDQUFDLElBQUksQ0FBQzs7UUFFeEM7O1FBRUEsSUFBSXNrQixRQUFRLEdBQUduYixRQUFRLENBQUN1QixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQztRQUM3Q2hHLEtBQUssQ0FBQ3VGLFNBQVMsQ0FBQ2QsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFLGNBQWMsRUFBRW1iLFFBQVEsQ0FBQztRQUN0RG5iLFFBQVEsQ0FBQ3VCLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDOztRQUUvQjs7UUFFQSxJQUFJNlosV0FBVyxHQUFHLElBQUksQ0FBQ2xhLE9BQU8sQ0FBQ0ksR0FBRyxDQUFDLGFBQWEsQ0FBQztRQUNqRCxJQUFJLENBQUNILFdBQVcsR0FBRyxJQUFJaWEsV0FBVyxDQUFDcGIsUUFBUSxFQUFFLElBQUksQ0FBQ2tCLE9BQU8sQ0FBQztRQUUxRCxJQUFJK0QsVUFBVSxHQUFHLElBQUksQ0FBQzdELE1BQU0sQ0FBQyxDQUFDO1FBRTlCLElBQUksQ0FBQ2lhLGVBQWUsQ0FBQ3BXLFVBQVUsQ0FBQztRQUVoQyxJQUFJcVcsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDcGEsT0FBTyxDQUFDSSxHQUFHLENBQUMsa0JBQWtCLENBQUM7UUFDM0QsSUFBSSxDQUFDeUksU0FBUyxHQUFHLElBQUl1UixnQkFBZ0IsQ0FBQ3RiLFFBQVEsRUFBRSxJQUFJLENBQUNrQixPQUFPLENBQUM7UUFDN0QsSUFBSSxDQUFDc0gsVUFBVSxHQUFHLElBQUksQ0FBQ3VCLFNBQVMsQ0FBQzNJLE1BQU0sQ0FBQyxDQUFDO1FBRXpDLElBQUksQ0FBQzJJLFNBQVMsQ0FBQ3RILFFBQVEsQ0FBQyxJQUFJLENBQUMrRixVQUFVLEVBQUV2RCxVQUFVLENBQUM7UUFFcEQsSUFBSXNXLGVBQWUsR0FBRyxJQUFJLENBQUNyYSxPQUFPLENBQUNJLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQztRQUN6RCxJQUFJLENBQUNzUSxRQUFRLEdBQUcsSUFBSTJKLGVBQWUsQ0FBQ3ZiLFFBQVEsRUFBRSxJQUFJLENBQUNrQixPQUFPLENBQUM7UUFDM0QsSUFBSSxDQUFDd0IsU0FBUyxHQUFHLElBQUksQ0FBQ2tQLFFBQVEsQ0FBQ3hRLE1BQU0sQ0FBQyxDQUFDO1FBRXZDLElBQUksQ0FBQ3dRLFFBQVEsQ0FBQ25QLFFBQVEsQ0FBQyxJQUFJLENBQUNDLFNBQVMsRUFBRXVDLFVBQVUsQ0FBQztRQUVsRCxJQUFJdVcsY0FBYyxHQUFHLElBQUksQ0FBQ3RhLE9BQU8sQ0FBQ0ksR0FBRyxDQUFDLGdCQUFnQixDQUFDO1FBQ3ZELElBQUksQ0FBQ2EsT0FBTyxHQUFHLElBQUlxWixjQUFjLENBQUN4YixRQUFRLEVBQUUsSUFBSSxDQUFDa0IsT0FBTyxFQUFFLElBQUksQ0FBQ0MsV0FBVyxDQUFDO1FBQzNFLElBQUksQ0FBQ0UsUUFBUSxHQUFHLElBQUksQ0FBQ2MsT0FBTyxDQUFDZixNQUFNLENBQUMsQ0FBQztRQUVyQyxJQUFJLENBQUNlLE9BQU8sQ0FBQ00sUUFBUSxDQUFDLElBQUksQ0FBQ3BCLFFBQVEsRUFBRSxJQUFJLENBQUNxQixTQUFTLENBQUM7O1FBRXBEOztRQUVBLElBQUlTLElBQUksR0FBRyxJQUFJOztRQUVmO1FBQ0EsSUFBSSxDQUFDc1ksYUFBYSxDQUFDLENBQUM7O1FBRXBCO1FBQ0EsSUFBSSxDQUFDQyxrQkFBa0IsQ0FBQyxDQUFDOztRQUV6QjtRQUNBLElBQUksQ0FBQ0MsbUJBQW1CLENBQUMsQ0FBQztRQUMxQixJQUFJLENBQUNDLHdCQUF3QixDQUFDLENBQUM7UUFDL0IsSUFBSSxDQUFDQyx1QkFBdUIsQ0FBQyxDQUFDO1FBQzlCLElBQUksQ0FBQ0Msc0JBQXNCLENBQUMsQ0FBQztRQUM3QixJQUFJLENBQUNDLGVBQWUsQ0FBQyxDQUFDOztRQUV0QjtRQUNBLElBQUksQ0FBQzVhLFdBQVcsQ0FBQ2lDLE9BQU8sQ0FBQyxVQUFVNFksV0FBVyxFQUFFO1VBQzlDN1ksSUFBSSxDQUFDekYsT0FBTyxDQUFDLGtCQUFrQixFQUFFO1lBQy9CZ0IsSUFBSSxFQUFFc2Q7VUFDUixDQUFDLENBQUM7UUFDSixDQUFDLENBQUM7O1FBRUY7UUFDQWhjLFFBQVEsQ0FBQ2tHLFFBQVEsQ0FBQywyQkFBMkIsQ0FBQztRQUM5Q2xHLFFBQVEsQ0FBQ3VCLElBQUksQ0FBQyxhQUFhLEVBQUUsTUFBTSxDQUFDOztRQUVwQztRQUNBLElBQUksQ0FBQzBhLGVBQWUsQ0FBQyxDQUFDO1FBRXRCMWdCLEtBQUssQ0FBQ3VGLFNBQVMsQ0FBQ2QsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFLFNBQVMsRUFBRSxJQUFJLENBQUM7O1FBRTdDO1FBQ0FBLFFBQVEsQ0FBQ3RCLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDO01BQ2hDLENBQUM7TUFFRG5ELEtBQUssQ0FBQ0MsTUFBTSxDQUFDeWYsT0FBTyxFQUFFMWYsS0FBSyxDQUFDK0IsVUFBVSxDQUFDO01BRXZDMmQsT0FBTyxDQUFDNWtCLFNBQVMsQ0FBQzZrQixXQUFXLEdBQUcsVUFBVWxiLFFBQVEsRUFBRTtRQUNsRCxJQUFJMUYsRUFBRSxHQUFHLEVBQUU7UUFFWCxJQUFJMEYsUUFBUSxDQUFDdUIsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksRUFBRTtVQUMvQmpILEVBQUUsR0FBRzBGLFFBQVEsQ0FBQ3VCLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDMUIsQ0FBQyxNQUFNLElBQUl2QixRQUFRLENBQUN1QixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksSUFBSSxFQUFFO1VBQ3hDakgsRUFBRSxHQUFHMEYsUUFBUSxDQUFDdUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEdBQUcsR0FBR2hHLEtBQUssQ0FBQ3dDLGFBQWEsQ0FBQyxDQUFDLENBQUM7UUFDM0QsQ0FBQyxNQUFNO1VBQ0x6RCxFQUFFLEdBQUdpQixLQUFLLENBQUN3QyxhQUFhLENBQUMsQ0FBQyxDQUFDO1FBQzdCO1FBRUF6RCxFQUFFLEdBQUdBLEVBQUUsQ0FBQ2xDLE9BQU8sQ0FBQyxpQkFBaUIsRUFBRSxFQUFFLENBQUM7UUFDdENrQyxFQUFFLEdBQUcsVUFBVSxHQUFHQSxFQUFFO1FBRXBCLE9BQU9BLEVBQUU7TUFDWCxDQUFDO01BRUQyZ0IsT0FBTyxDQUFDNWtCLFNBQVMsQ0FBQ2dsQixlQUFlLEdBQUcsVUFBVXBXLFVBQVUsRUFBRTtRQUN4REEsVUFBVSxDQUFDaVgsV0FBVyxDQUFDLElBQUksQ0FBQ2xjLFFBQVEsQ0FBQztRQUVyQyxJQUFJeU0sS0FBSyxHQUFHLElBQUksQ0FBQzBQLGFBQWEsQ0FBQyxJQUFJLENBQUNuYyxRQUFRLEVBQUUsSUFBSSxDQUFDa0IsT0FBTyxDQUFDSSxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7UUFFeEUsSUFBSW1MLEtBQUssSUFBSSxJQUFJLEVBQUU7VUFDakJ4SCxVQUFVLENBQUN1SCxHQUFHLENBQUMsT0FBTyxFQUFFQyxLQUFLLENBQUM7UUFDaEM7TUFDRixDQUFDO01BRUR3TyxPQUFPLENBQUM1a0IsU0FBUyxDQUFDOGxCLGFBQWEsR0FBRyxVQUFVbmMsUUFBUSxFQUFFb2MsTUFBTSxFQUFFO1FBQzVELElBQUlDLEtBQUssR0FBRywrREFBK0Q7UUFFM0UsSUFBSUQsTUFBTSxJQUFJLFNBQVMsRUFBRTtVQUN2QixJQUFJRSxVQUFVLEdBQUcsSUFBSSxDQUFDSCxhQUFhLENBQUNuYyxRQUFRLEVBQUUsT0FBTyxDQUFDO1VBRXRELElBQUlzYyxVQUFVLElBQUksSUFBSSxFQUFFO1lBQ3RCLE9BQU9BLFVBQVU7VUFDbkI7VUFFQSxPQUFPLElBQUksQ0FBQ0gsYUFBYSxDQUFDbmMsUUFBUSxFQUFFLFNBQVMsQ0FBQztRQUNoRDtRQUVBLElBQUlvYyxNQUFNLElBQUksU0FBUyxFQUFFO1VBQ3ZCLElBQUlHLFlBQVksR0FBR3ZjLFFBQVEsQ0FBQzhWLFVBQVUsQ0FBQyxLQUFLLENBQUM7VUFFN0MsSUFBSXlHLFlBQVksSUFBSSxDQUFDLEVBQUU7WUFDckIsT0FBTyxNQUFNO1VBQ2Y7VUFFQSxPQUFPQSxZQUFZLEdBQUcsSUFBSTtRQUM1QjtRQUVBLElBQUlILE1BQU0sSUFBSSxPQUFPLEVBQUU7VUFDckIsSUFBSWhkLEtBQUssR0FBR1ksUUFBUSxDQUFDdUIsSUFBSSxDQUFDLE9BQU8sQ0FBQztVQUVsQyxJQUFJLE9BQU9uQyxLQUFNLEtBQUssUUFBUSxFQUFFO1lBQzlCLE9BQU8sSUFBSTtVQUNiO1VBRUEsSUFBSStFLEtBQUssR0FBRy9FLEtBQUssQ0FBQ3RILEtBQUssQ0FBQyxHQUFHLENBQUM7VUFFNUIsS0FBSyxJQUFJTCxDQUFDLEdBQUcsQ0FBQyxFQUFFK2hCLENBQUMsR0FBR3JWLEtBQUssQ0FBQ2xNLE1BQU0sRUFBRVIsQ0FBQyxHQUFHK2hCLENBQUMsRUFBRS9oQixDQUFDLEdBQUdBLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDbEQsSUFBSThKLElBQUksR0FBRzRDLEtBQUssQ0FBQzFNLENBQUMsQ0FBQyxDQUFDVyxPQUFPLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQztZQUN0QyxJQUFJNlYsT0FBTyxHQUFHMU0sSUFBSSxDQUFDekIsS0FBSyxDQUFDdWMsS0FBSyxDQUFDO1lBRS9CLElBQUlwTyxPQUFPLEtBQUssSUFBSSxJQUFJQSxPQUFPLENBQUNoVyxNQUFNLElBQUksQ0FBQyxFQUFFO2NBQzNDLE9BQU9nVyxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBQ25CO1VBQ0Y7VUFFQSxPQUFPLElBQUk7UUFDYjtRQUVBLE9BQU9tTyxNQUFNO01BQ2YsQ0FBQztNQUVEbkIsT0FBTyxDQUFDNWtCLFNBQVMsQ0FBQ29sQixhQUFhLEdBQUcsWUFBWTtRQUM1QyxJQUFJLENBQUN0YSxXQUFXLENBQUM3QyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQzJHLFVBQVUsQ0FBQztRQUM1QyxJQUFJLENBQUM4RSxTQUFTLENBQUN6TCxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQzJHLFVBQVUsQ0FBQztRQUUxQyxJQUFJLENBQUMyTSxRQUFRLENBQUN0VCxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQzJHLFVBQVUsQ0FBQztRQUN6QyxJQUFJLENBQUM5QyxPQUFPLENBQUM3RCxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQzJHLFVBQVUsQ0FBQztNQUMxQyxDQUFDO01BRURnVyxPQUFPLENBQUM1a0IsU0FBUyxDQUFDcWxCLGtCQUFrQixHQUFHLFlBQVk7UUFDakQsSUFBSXZZLElBQUksR0FBRyxJQUFJO1FBRWYsSUFBSSxDQUFDbkQsUUFBUSxDQUFDeEMsRUFBRSxDQUFDLGdCQUFnQixFQUFFLFlBQVk7VUFDN0MyRixJQUFJLENBQUNoQyxXQUFXLENBQUNpQyxPQUFPLENBQUMsVUFBVTFFLElBQUksRUFBRTtZQUN2Q3lFLElBQUksQ0FBQ3pGLE9BQU8sQ0FBQyxrQkFBa0IsRUFBRTtjQUMvQmdCLElBQUksRUFBRUE7WUFDUixDQUFDLENBQUM7VUFDSixDQUFDLENBQUM7UUFDSixDQUFDLENBQUM7UUFFRixJQUFJLENBQUNzQixRQUFRLENBQUN4QyxFQUFFLENBQUMsZUFBZSxFQUFFLFVBQVVtSixHQUFHLEVBQUU7VUFDL0N4RCxJQUFJLENBQUN6RixPQUFPLENBQUMsT0FBTyxFQUFFaUosR0FBRyxDQUFDO1FBQzVCLENBQUMsQ0FBQztRQUVGLElBQUksQ0FBQzZWLE1BQU0sR0FBR2poQixLQUFLLENBQUMrQyxJQUFJLENBQUMsSUFBSSxDQUFDMmQsZUFBZSxFQUFFLElBQUksQ0FBQztRQUNwRCxJQUFJLENBQUNRLE1BQU0sR0FBR2xoQixLQUFLLENBQUMrQyxJQUFJLENBQUMsSUFBSSxDQUFDb2UsWUFBWSxFQUFFLElBQUksQ0FBQztRQUVqRCxJQUFJLElBQUksQ0FBQzFjLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQzJjLFdBQVcsRUFBRTtVQUNoQyxJQUFJLENBQUMzYyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMyYyxXQUFXLENBQUMsa0JBQWtCLEVBQUUsSUFBSSxDQUFDSCxNQUFNLENBQUM7UUFDL0Q7UUFFQSxJQUFJSSxRQUFRLEdBQUd4bkIsTUFBTSxDQUFDeW5CLGdCQUFnQixJQUNwQ3puQixNQUFNLENBQUMwbkIsc0JBQXNCLElBQzdCMW5CLE1BQU0sQ0FBQzJuQixtQkFBbUI7UUFHNUIsSUFBSUgsUUFBUSxJQUFJLElBQUksRUFBRTtVQUNwQixJQUFJLENBQUNJLFNBQVMsR0FBRyxJQUFJSixRQUFRLENBQUMsVUFBVUssU0FBUyxFQUFFO1lBQ2pEN2hCLENBQUMsQ0FBQ29JLElBQUksQ0FBQ3laLFNBQVMsRUFBRTlaLElBQUksQ0FBQ3FaLE1BQU0sQ0FBQztZQUM5QnBoQixDQUFDLENBQUNvSSxJQUFJLENBQUN5WixTQUFTLEVBQUU5WixJQUFJLENBQUNzWixNQUFNLENBQUM7VUFDaEMsQ0FBQyxDQUFDO1VBQ0YsSUFBSSxDQUFDTyxTQUFTLENBQUNFLE9BQU8sQ0FBQyxJQUFJLENBQUNsZCxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDdkNtZCxVQUFVLEVBQUUsSUFBSTtZQUNoQkMsU0FBUyxFQUFFLElBQUk7WUFDZkMsT0FBTyxFQUFFO1VBQ1gsQ0FBQyxDQUFDO1FBQ0osQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDcmQsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDc2QsZ0JBQWdCLEVBQUU7VUFDNUMsSUFBSSxDQUFDdGQsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDc2QsZ0JBQWdCLENBQy9CLGlCQUFpQixFQUNqQm5hLElBQUksQ0FBQ3FaLE1BQU0sRUFDWCxLQUNGLENBQUM7VUFDRCxJQUFJLENBQUN4YyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUNzZCxnQkFBZ0IsQ0FDL0IsaUJBQWlCLEVBQ2pCbmEsSUFBSSxDQUFDc1osTUFBTSxFQUNYLEtBQ0YsQ0FBQztVQUNELElBQUksQ0FBQ3pjLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQ3NkLGdCQUFnQixDQUMvQixnQkFBZ0IsRUFDaEJuYSxJQUFJLENBQUNzWixNQUFNLEVBQ1gsS0FDRixDQUFDO1FBQ0g7TUFDRixDQUFDO01BRUR4QixPQUFPLENBQUM1a0IsU0FBUyxDQUFDc2xCLG1CQUFtQixHQUFHLFlBQVk7UUFDbEQsSUFBSXhZLElBQUksR0FBRyxJQUFJO1FBRWYsSUFBSSxDQUFDaEMsV0FBVyxDQUFDM0QsRUFBRSxDQUFDLEdBQUcsRUFBRSxVQUFVekcsSUFBSSxFQUFFNEcsTUFBTSxFQUFFO1VBQy9Dd0YsSUFBSSxDQUFDekYsT0FBTyxDQUFDM0csSUFBSSxFQUFFNEcsTUFBTSxDQUFDO1FBQzVCLENBQUMsQ0FBQztNQUNKLENBQUM7TUFFRHNkLE9BQU8sQ0FBQzVrQixTQUFTLENBQUN1bEIsd0JBQXdCLEdBQUcsWUFBWTtRQUN2RCxJQUFJelksSUFBSSxHQUFHLElBQUk7UUFDZixJQUFJb2EsY0FBYyxHQUFHLENBQUMsUUFBUSxFQUFFLE9BQU8sQ0FBQztRQUV4QyxJQUFJLENBQUN4VCxTQUFTLENBQUN2TSxFQUFFLENBQUMsUUFBUSxFQUFFLFlBQVk7VUFDdEMyRixJQUFJLENBQUNxYSxjQUFjLENBQUMsQ0FBQztRQUN2QixDQUFDLENBQUM7UUFFRixJQUFJLENBQUN6VCxTQUFTLENBQUN2TSxFQUFFLENBQUMsT0FBTyxFQUFFLFVBQVVHLE1BQU0sRUFBRTtVQUMzQ3dGLElBQUksQ0FBQzRGLEtBQUssQ0FBQ3BMLE1BQU0sQ0FBQztRQUNwQixDQUFDLENBQUM7UUFFRixJQUFJLENBQUNvTSxTQUFTLENBQUN2TSxFQUFFLENBQUMsR0FBRyxFQUFFLFVBQVV6RyxJQUFJLEVBQUU0RyxNQUFNLEVBQUU7VUFDN0MsSUFBSXZDLENBQUMsQ0FBQ3FJLE9BQU8sQ0FBQzFNLElBQUksRUFBRXdtQixjQUFjLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRTtZQUMxQztVQUNGO1VBRUFwYSxJQUFJLENBQUN6RixPQUFPLENBQUMzRyxJQUFJLEVBQUU0RyxNQUFNLENBQUM7UUFDNUIsQ0FBQyxDQUFDO01BQ0osQ0FBQztNQUVEc2QsT0FBTyxDQUFDNWtCLFNBQVMsQ0FBQ3dsQix1QkFBdUIsR0FBRyxZQUFZO1FBQ3RELElBQUkxWSxJQUFJLEdBQUcsSUFBSTtRQUVmLElBQUksQ0FBQ3lPLFFBQVEsQ0FBQ3BVLEVBQUUsQ0FBQyxHQUFHLEVBQUUsVUFBVXpHLElBQUksRUFBRTRHLE1BQU0sRUFBRTtVQUM1Q3dGLElBQUksQ0FBQ3pGLE9BQU8sQ0FBQzNHLElBQUksRUFBRTRHLE1BQU0sQ0FBQztRQUM1QixDQUFDLENBQUM7TUFDSixDQUFDO01BRURzZCxPQUFPLENBQUM1a0IsU0FBUyxDQUFDeWxCLHNCQUFzQixHQUFHLFlBQVk7UUFDckQsSUFBSTNZLElBQUksR0FBRyxJQUFJO1FBRWYsSUFBSSxDQUFDaEIsT0FBTyxDQUFDM0UsRUFBRSxDQUFDLEdBQUcsRUFBRSxVQUFVekcsSUFBSSxFQUFFNEcsTUFBTSxFQUFFO1VBQzNDd0YsSUFBSSxDQUFDekYsT0FBTyxDQUFDM0csSUFBSSxFQUFFNEcsTUFBTSxDQUFDO1FBQzVCLENBQUMsQ0FBQztNQUNKLENBQUM7TUFFRHNkLE9BQU8sQ0FBQzVrQixTQUFTLENBQUMwbEIsZUFBZSxHQUFHLFlBQVk7UUFDOUMsSUFBSTVZLElBQUksR0FBRyxJQUFJO1FBRWYsSUFBSSxDQUFDM0YsRUFBRSxDQUFDLE1BQU0sRUFBRSxZQUFZO1VBQzFCMkYsSUFBSSxDQUFDOEIsVUFBVSxDQUFDaUIsUUFBUSxDQUFDLHlCQUF5QixDQUFDO1FBQ3JELENBQUMsQ0FBQztRQUVGLElBQUksQ0FBQzFJLEVBQUUsQ0FBQyxPQUFPLEVBQUUsWUFBWTtVQUMzQjJGLElBQUksQ0FBQzhCLFVBQVUsQ0FBQzZCLFdBQVcsQ0FBQyx5QkFBeUIsQ0FBQztRQUN4RCxDQUFDLENBQUM7UUFFRixJQUFJLENBQUN0SixFQUFFLENBQUMsUUFBUSxFQUFFLFlBQVk7VUFDNUIyRixJQUFJLENBQUM4QixVQUFVLENBQUM2QixXQUFXLENBQUMsNkJBQTZCLENBQUM7UUFDNUQsQ0FBQyxDQUFDO1FBRUYsSUFBSSxDQUFDdEosRUFBRSxDQUFDLFNBQVMsRUFBRSxZQUFZO1VBQzdCMkYsSUFBSSxDQUFDOEIsVUFBVSxDQUFDaUIsUUFBUSxDQUFDLDZCQUE2QixDQUFDO1FBQ3pELENBQUMsQ0FBQztRQUVGLElBQUksQ0FBQzFJLEVBQUUsQ0FBQyxNQUFNLEVBQUUsWUFBWTtVQUMxQjJGLElBQUksQ0FBQzhCLFVBQVUsQ0FBQzZCLFdBQVcsQ0FBQywwQkFBMEIsQ0FBQztRQUN6RCxDQUFDLENBQUM7UUFFRixJQUFJLENBQUN0SixFQUFFLENBQUMsT0FBTyxFQUFFLFVBQVVHLE1BQU0sRUFBRTtVQUNqQyxJQUFJLENBQUN3RixJQUFJLENBQUMrQixNQUFNLENBQUMsQ0FBQyxFQUFFO1lBQ2xCL0IsSUFBSSxDQUFDekYsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQztVQUMxQjtVQUVBLElBQUksQ0FBQ3lELFdBQVcsQ0FBQ3VNLEtBQUssQ0FBQy9QLE1BQU0sRUFBRSxVQUFVZSxJQUFJLEVBQUU7WUFDN0N5RSxJQUFJLENBQUN6RixPQUFPLENBQUMsYUFBYSxFQUFFO2NBQzFCZ0IsSUFBSSxFQUFFQSxJQUFJO2NBQ1ZnUCxLQUFLLEVBQUUvUDtZQUNULENBQUMsQ0FBQztVQUNKLENBQUMsQ0FBQztRQUNKLENBQUMsQ0FBQztRQUVGLElBQUksQ0FBQ0gsRUFBRSxDQUFDLGNBQWMsRUFBRSxVQUFVRyxNQUFNLEVBQUU7VUFDeEMsSUFBSSxDQUFDd0QsV0FBVyxDQUFDdU0sS0FBSyxDQUFDL1AsTUFBTSxFQUFFLFVBQVVlLElBQUksRUFBRTtZQUM3Q3lFLElBQUksQ0FBQ3pGLE9BQU8sQ0FBQyxnQkFBZ0IsRUFBRTtjQUM3QmdCLElBQUksRUFBRUEsSUFBSTtjQUNWZ1AsS0FBSyxFQUFFL1A7WUFDVCxDQUFDLENBQUM7VUFDSixDQUFDLENBQUM7UUFDSixDQUFDLENBQUM7UUFFRixJQUFJLENBQUNILEVBQUUsQ0FBQyxVQUFVLEVBQUUsVUFBVW1KLEdBQUcsRUFBRTtVQUNqQyxJQUFJN0ssR0FBRyxHQUFHNkssR0FBRyxDQUFDaUMsS0FBSztVQUVuQixJQUFJekYsSUFBSSxDQUFDK0IsTUFBTSxDQUFDLENBQUMsRUFBRTtZQUNqQixJQUFJcEosR0FBRyxLQUFLdUwsSUFBSSxDQUFDTyxHQUFHLElBQUk5TCxHQUFHLEtBQUt1TCxJQUFJLENBQUNFLEdBQUcsSUFDbkN6TCxHQUFHLEtBQUt1TCxJQUFJLENBQUNjLEVBQUUsSUFBSXhCLEdBQUcsQ0FBQzhXLE1BQU8sRUFBRTtjQUNuQ3RhLElBQUksQ0FBQ3VhLEtBQUssQ0FBQyxDQUFDO2NBRVovVyxHQUFHLENBQUNGLGNBQWMsQ0FBQyxDQUFDO1lBQ3RCLENBQUMsTUFBTSxJQUFJM0ssR0FBRyxLQUFLdUwsSUFBSSxDQUFDRyxLQUFLLEVBQUU7Y0FDN0JyRSxJQUFJLENBQUN6RixPQUFPLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxDQUFDLENBQUM7Y0FFbENpSixHQUFHLENBQUNGLGNBQWMsQ0FBQyxDQUFDO1lBQ3RCLENBQUMsTUFBTSxJQUFLM0ssR0FBRyxLQUFLdUwsSUFBSSxDQUFDUSxLQUFLLElBQUlsQixHQUFHLENBQUNnUSxPQUFPLEVBQUc7Y0FDOUN4VCxJQUFJLENBQUN6RixPQUFPLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxDQUFDLENBQUM7Y0FFbENpSixHQUFHLENBQUNGLGNBQWMsQ0FBQyxDQUFDO1lBQ3RCLENBQUMsTUFBTSxJQUFJM0ssR0FBRyxLQUFLdUwsSUFBSSxDQUFDYyxFQUFFLEVBQUU7Y0FDMUJoRixJQUFJLENBQUN6RixPQUFPLENBQUMsa0JBQWtCLEVBQUUsQ0FBQyxDQUFDLENBQUM7Y0FFcENpSixHQUFHLENBQUNGLGNBQWMsQ0FBQyxDQUFDO1lBQ3RCLENBQUMsTUFBTSxJQUFJM0ssR0FBRyxLQUFLdUwsSUFBSSxDQUFDZ0IsSUFBSSxFQUFFO2NBQzVCbEYsSUFBSSxDQUFDekYsT0FBTyxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUMsQ0FBQztjQUVoQ2lKLEdBQUcsQ0FBQ0YsY0FBYyxDQUFDLENBQUM7WUFDdEI7VUFDRixDQUFDLE1BQU07WUFDTCxJQUFJM0ssR0FBRyxLQUFLdUwsSUFBSSxDQUFDRyxLQUFLLElBQUkxTCxHQUFHLEtBQUt1TCxJQUFJLENBQUNRLEtBQUssSUFDdkMvTCxHQUFHLEtBQUt1TCxJQUFJLENBQUNnQixJQUFJLElBQUkxQixHQUFHLENBQUM4VyxNQUFPLEVBQUU7Y0FDckN0YSxJQUFJLENBQUN3YSxJQUFJLENBQUMsQ0FBQztjQUVYaFgsR0FBRyxDQUFDRixjQUFjLENBQUMsQ0FBQztZQUN0QjtVQUNGO1FBQ0YsQ0FBQyxDQUFDO01BQ0osQ0FBQztNQUVEd1UsT0FBTyxDQUFDNWtCLFNBQVMsQ0FBQzRsQixlQUFlLEdBQUcsWUFBWTtRQUM5QyxJQUFJLENBQUMvYSxPQUFPLENBQUNvWixHQUFHLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQ3RhLFFBQVEsQ0FBQ3BKLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUU1RCxJQUFJLElBQUksQ0FBQ3NLLE9BQU8sQ0FBQ0ksR0FBRyxDQUFDLFVBQVUsQ0FBQyxFQUFFO1VBQ2hDLElBQUksSUFBSSxDQUFDNEQsTUFBTSxDQUFDLENBQUMsRUFBRTtZQUNqQixJQUFJLENBQUN3WSxLQUFLLENBQUMsQ0FBQztVQUNkO1VBRUEsSUFBSSxDQUFDaGdCLE9BQU8sQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDN0IsQ0FBQyxNQUFNO1VBQ0wsSUFBSSxDQUFDQSxPQUFPLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQzVCO01BQ0YsQ0FBQztNQUVEdWQsT0FBTyxDQUFDNWtCLFNBQVMsQ0FBQ3FtQixZQUFZLEdBQUcsVUFBVS9WLEdBQUcsRUFBRXNXLFNBQVMsRUFBRTtRQUN6RCxJQUFJVyxPQUFPLEdBQUcsS0FBSztRQUNuQixJQUFJemEsSUFBSSxHQUFHLElBQUk7O1FBRWY7UUFDQTtRQUNBLElBQ0V3RCxHQUFHLElBQUlBLEdBQUcsQ0FBQzBDLE1BQU0sSUFDZjFDLEdBQUcsQ0FBQzBDLE1BQU0sQ0FBQ3dVLFFBQVEsS0FBSyxRQUFRLElBQUlsWCxHQUFHLENBQUMwQyxNQUFNLENBQUN3VSxRQUFRLEtBQUssVUFDN0QsRUFDRDtVQUNBO1FBQ0Y7UUFFQSxJQUFJLENBQUNaLFNBQVMsRUFBRTtVQUNkO1VBQ0E7VUFDQVcsT0FBTyxHQUFHLElBQUk7UUFDaEIsQ0FBQyxNQUFNLElBQUlYLFNBQVMsQ0FBQ2EsVUFBVSxJQUFJYixTQUFTLENBQUNhLFVBQVUsQ0FBQzdsQixNQUFNLEdBQUcsQ0FBQyxFQUFFO1VBQ2xFLEtBQUssSUFBSWdDLENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsR0FBR2dqQixTQUFTLENBQUNhLFVBQVUsQ0FBQzdsQixNQUFNLEVBQUVnQyxDQUFDLEVBQUUsRUFBRTtZQUNwRCxJQUFJb0csSUFBSSxHQUFHNGMsU0FBUyxDQUFDYSxVQUFVLENBQUM3akIsQ0FBQyxDQUFDO1lBRWxDLElBQUlvRyxJQUFJLENBQUNnRCxRQUFRLEVBQUU7Y0FDakJ1YSxPQUFPLEdBQUcsSUFBSTtZQUNoQjtVQUNGO1FBQ0YsQ0FBQyxNQUFNLElBQUlYLFNBQVMsQ0FBQ2MsWUFBWSxJQUFJZCxTQUFTLENBQUNjLFlBQVksQ0FBQzlsQixNQUFNLEdBQUcsQ0FBQyxFQUFFO1VBQ3RFMmxCLE9BQU8sR0FBRyxJQUFJO1FBQ2hCOztRQUVBO1FBQ0EsSUFBSUEsT0FBTyxFQUFFO1VBQ1gsSUFBSSxDQUFDemMsV0FBVyxDQUFDaUMsT0FBTyxDQUFDLFVBQVUySyxXQUFXLEVBQUU7WUFDOUM1SyxJQUFJLENBQUN6RixPQUFPLENBQUMsa0JBQWtCLEVBQUU7Y0FDL0JnQixJQUFJLEVBQUVxUDtZQUNSLENBQUMsQ0FBQztVQUNKLENBQUMsQ0FBQztRQUNKO01BQ0YsQ0FBQzs7TUFFRDtBQUNGO0FBQ0E7QUFDQTtNQUNFa04sT0FBTyxDQUFDNWtCLFNBQVMsQ0FBQ3FILE9BQU8sR0FBRyxVQUFVM0csSUFBSSxFQUFFNkIsSUFBSSxFQUFFO1FBQ2hELElBQUlvbEIsYUFBYSxHQUFHL0MsT0FBTyxDQUFDbGYsU0FBUyxDQUFDMkIsT0FBTztRQUM3QyxJQUFJdWdCLGFBQWEsR0FBRztVQUNsQixNQUFNLEVBQUUsU0FBUztVQUNqQixPQUFPLEVBQUUsU0FBUztVQUNsQixRQUFRLEVBQUUsV0FBVztVQUNyQixVQUFVLEVBQUUsYUFBYTtVQUN6QixPQUFPLEVBQUU7UUFDWCxDQUFDO1FBRUQsSUFBSXJsQixJQUFJLEtBQUt6RCxTQUFTLEVBQUU7VUFDdEJ5RCxJQUFJLEdBQUcsQ0FBQyxDQUFDO1FBQ1g7UUFFQSxJQUFJN0IsSUFBSSxJQUFJa25CLGFBQWEsRUFBRTtVQUN6QixJQUFJQyxjQUFjLEdBQUdELGFBQWEsQ0FBQ2xuQixJQUFJLENBQUM7VUFDeEMsSUFBSW9uQixjQUFjLEdBQUc7WUFDbkIvUyxTQUFTLEVBQUUsS0FBSztZQUNoQnJVLElBQUksRUFBRUEsSUFBSTtZQUNWNkIsSUFBSSxFQUFFQTtVQUNSLENBQUM7VUFFRG9sQixhQUFhLENBQUNubkIsSUFBSSxDQUFDLElBQUksRUFBRXFuQixjQUFjLEVBQUVDLGNBQWMsQ0FBQztVQUV4RCxJQUFJQSxjQUFjLENBQUMvUyxTQUFTLEVBQUU7WUFDNUJ4UyxJQUFJLENBQUN3UyxTQUFTLEdBQUcsSUFBSTtZQUVyQjtVQUNGO1FBQ0Y7UUFFQTRTLGFBQWEsQ0FBQ25uQixJQUFJLENBQUMsSUFBSSxFQUFFRSxJQUFJLEVBQUU2QixJQUFJLENBQUM7TUFDdEMsQ0FBQztNQUVEcWlCLE9BQU8sQ0FBQzVrQixTQUFTLENBQUNtbkIsY0FBYyxHQUFHLFlBQVk7UUFDN0MsSUFBSSxJQUFJLENBQUN0YyxPQUFPLENBQUNJLEdBQUcsQ0FBQyxVQUFVLENBQUMsRUFBRTtVQUNoQztRQUNGO1FBRUEsSUFBSSxJQUFJLENBQUM0RCxNQUFNLENBQUMsQ0FBQyxFQUFFO1VBQ2pCLElBQUksQ0FBQ3dZLEtBQUssQ0FBQyxDQUFDO1FBQ2QsQ0FBQyxNQUFNO1VBQ0wsSUFBSSxDQUFDQyxJQUFJLENBQUMsQ0FBQztRQUNiO01BQ0YsQ0FBQztNQUVEMUMsT0FBTyxDQUFDNWtCLFNBQVMsQ0FBQ3NuQixJQUFJLEdBQUcsWUFBWTtRQUNuQyxJQUFJLElBQUksQ0FBQ3pZLE1BQU0sQ0FBQyxDQUFDLEVBQUU7VUFDakI7UUFDRjtRQUVBLElBQUksQ0FBQ3hILE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUM7TUFDM0IsQ0FBQztNQUVEdWQsT0FBTyxDQUFDNWtCLFNBQVMsQ0FBQ3FuQixLQUFLLEdBQUcsWUFBWTtRQUNwQyxJQUFJLENBQUMsSUFBSSxDQUFDeFksTUFBTSxDQUFDLENBQUMsRUFBRTtVQUNsQjtRQUNGO1FBRUEsSUFBSSxDQUFDeEgsT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsQ0FBQztNQUMzQixDQUFDO01BRUR1ZCxPQUFPLENBQUM1a0IsU0FBUyxDQUFDNk8sTUFBTSxHQUFHLFlBQVk7UUFDckMsT0FBTyxJQUFJLENBQUNELFVBQVUsQ0FBQ21RLFFBQVEsQ0FBQyx5QkFBeUIsQ0FBQztNQUM1RCxDQUFDO01BRUQ2RixPQUFPLENBQUM1a0IsU0FBUyxDQUFDK25CLFFBQVEsR0FBRyxZQUFZO1FBQ3ZDLE9BQU8sSUFBSSxDQUFDblosVUFBVSxDQUFDbVEsUUFBUSxDQUFDLDBCQUEwQixDQUFDO01BQzdELENBQUM7TUFFRDZGLE9BQU8sQ0FBQzVrQixTQUFTLENBQUMwUyxLQUFLLEdBQUcsVUFBVXJLLElBQUksRUFBRTtRQUN4QztRQUNBLElBQUksSUFBSSxDQUFDMGYsUUFBUSxDQUFDLENBQUMsRUFBRTtVQUNuQjtRQUNGO1FBRUEsSUFBSSxDQUFDblosVUFBVSxDQUFDaUIsUUFBUSxDQUFDLDBCQUEwQixDQUFDO1FBQ3BELElBQUksQ0FBQ3hJLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUM7TUFDM0IsQ0FBQztNQUVEdWQsT0FBTyxDQUFDNWtCLFNBQVMsQ0FBQ2dvQixNQUFNLEdBQUcsVUFBVXpsQixJQUFJLEVBQUU7UUFDekMsSUFBSSxJQUFJLENBQUNzSSxPQUFPLENBQUNJLEdBQUcsQ0FBQyxPQUFPLENBQUMsSUFBSWxNLE1BQU0sQ0FBQ2lHLE9BQU8sSUFBSUEsT0FBTyxDQUFDdWUsSUFBSSxFQUFFO1VBQy9EdmUsT0FBTyxDQUFDdWUsSUFBSSxDQUNWLHNFQUFzRSxHQUN0RSxzRUFBc0UsR0FDdEUsV0FDRixDQUFDO1FBQ0g7UUFFQSxJQUFJaGhCLElBQUksSUFBSSxJQUFJLElBQUlBLElBQUksQ0FBQ1gsTUFBTSxLQUFLLENBQUMsRUFBRTtVQUNyQ1csSUFBSSxHQUFHLENBQUMsSUFBSSxDQUFDO1FBQ2Y7UUFFQSxJQUFJaUwsUUFBUSxHQUFHLENBQUNqTCxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBRXZCLElBQUksQ0FBQ29ILFFBQVEsQ0FBQ3BKLElBQUksQ0FBQyxVQUFVLEVBQUVpTixRQUFRLENBQUM7TUFDMUMsQ0FBQztNQUVEb1gsT0FBTyxDQUFDNWtCLFNBQVMsQ0FBQ3FJLElBQUksR0FBRyxZQUFZO1FBQ25DLElBQUksSUFBSSxDQUFDd0MsT0FBTyxDQUFDSSxHQUFHLENBQUMsT0FBTyxDQUFDLElBQ3pCekksU0FBUyxDQUFDWixNQUFNLEdBQUcsQ0FBQyxJQUFJN0MsTUFBTSxDQUFDaUcsT0FBTyxJQUFJQSxPQUFPLENBQUN1ZSxJQUFJLEVBQUU7VUFDMUR2ZSxPQUFPLENBQUN1ZSxJQUFJLENBQ1Ysa0VBQWtFLEdBQ2xFLG1FQUNGLENBQUM7UUFDSDtRQUVBLElBQUlsYixJQUFJLEdBQUcsRUFBRTtRQUViLElBQUksQ0FBQ3lDLFdBQVcsQ0FBQ2lDLE9BQU8sQ0FBQyxVQUFVMkssV0FBVyxFQUFFO1VBQzlDclAsSUFBSSxHQUFHcVAsV0FBVztRQUNwQixDQUFDLENBQUM7UUFFRixPQUFPclAsSUFBSTtNQUNiLENBQUM7TUFFRHVjLE9BQU8sQ0FBQzVrQixTQUFTLENBQUNrTyxHQUFHLEdBQUcsVUFBVTNMLElBQUksRUFBRTtRQUN0QyxJQUFJLElBQUksQ0FBQ3NJLE9BQU8sQ0FBQ0ksR0FBRyxDQUFDLE9BQU8sQ0FBQyxJQUFJbE0sTUFBTSxDQUFDaUcsT0FBTyxJQUFJQSxPQUFPLENBQUN1ZSxJQUFJLEVBQUU7VUFDL0R2ZSxPQUFPLENBQUN1ZSxJQUFJLENBQ1Ysc0VBQXNFLEdBQ3RFLGlFQUNGLENBQUM7UUFDSDtRQUVBLElBQUloaEIsSUFBSSxJQUFJLElBQUksSUFBSUEsSUFBSSxDQUFDWCxNQUFNLEtBQUssQ0FBQyxFQUFFO1VBQ3JDLE9BQU8sSUFBSSxDQUFDK0gsUUFBUSxDQUFDdUUsR0FBRyxDQUFDLENBQUM7UUFDNUI7UUFFQSxJQUFJK1osTUFBTSxHQUFHMWxCLElBQUksQ0FBQyxDQUFDLENBQUM7UUFFcEIsSUFBSXdDLENBQUMsQ0FBQ2lWLE9BQU8sQ0FBQ2lPLE1BQU0sQ0FBQyxFQUFFO1VBQ3JCQSxNQUFNLEdBQUdsakIsQ0FBQyxDQUFDckQsR0FBRyxDQUFDdW1CLE1BQU0sRUFBRSxVQUFVM25CLEdBQUcsRUFBRTtZQUNwQyxPQUFPQSxHQUFHLENBQUMwSCxRQUFRLENBQUMsQ0FBQztVQUN2QixDQUFDLENBQUM7UUFDSjtRQUVBLElBQUksQ0FBQzJCLFFBQVEsQ0FBQ3VFLEdBQUcsQ0FBQytaLE1BQU0sQ0FBQyxDQUFDNWdCLE9BQU8sQ0FBQyxRQUFRLENBQUM7TUFDN0MsQ0FBQztNQUVEdWQsT0FBTyxDQUFDNWtCLFNBQVMsQ0FBQzBRLE9BQU8sR0FBRyxZQUFZO1FBQ3RDLElBQUksQ0FBQzlCLFVBQVUsQ0FBQ2hELE1BQU0sQ0FBQyxDQUFDO1FBRXhCLElBQUksSUFBSSxDQUFDakMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDdWUsV0FBVyxFQUFFO1VBQ2hDLElBQUksQ0FBQ3ZlLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQ3VlLFdBQVcsQ0FBQyxrQkFBa0IsRUFBRSxJQUFJLENBQUMvQixNQUFNLENBQUM7UUFDL0Q7UUFFQSxJQUFJLElBQUksQ0FBQ1EsU0FBUyxJQUFJLElBQUksRUFBRTtVQUMxQixJQUFJLENBQUNBLFNBQVMsQ0FBQ3dCLFVBQVUsQ0FBQyxDQUFDO1VBQzNCLElBQUksQ0FBQ3hCLFNBQVMsR0FBRyxJQUFJO1FBQ3ZCLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQ2hkLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQ3llLG1CQUFtQixFQUFFO1VBQy9DLElBQUksQ0FBQ3plLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FDYnllLG1CQUFtQixDQUFDLGlCQUFpQixFQUFFLElBQUksQ0FBQ2pDLE1BQU0sRUFBRSxLQUFLLENBQUM7VUFDN0QsSUFBSSxDQUFDeGMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUNieWUsbUJBQW1CLENBQUMsaUJBQWlCLEVBQUUsSUFBSSxDQUFDaEMsTUFBTSxFQUFFLEtBQUssQ0FBQztVQUM3RCxJQUFJLENBQUN6YyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQ2J5ZSxtQkFBbUIsQ0FBQyxnQkFBZ0IsRUFBRSxJQUFJLENBQUNoQyxNQUFNLEVBQUUsS0FBSyxDQUFDO1FBQzlEO1FBRUEsSUFBSSxDQUFDRCxNQUFNLEdBQUcsSUFBSTtRQUNsQixJQUFJLENBQUNDLE1BQU0sR0FBRyxJQUFJO1FBRWxCLElBQUksQ0FBQ3pjLFFBQVEsQ0FBQ3lKLEdBQUcsQ0FBQyxVQUFVLENBQUM7UUFDN0IsSUFBSSxDQUFDekosUUFBUSxDQUFDdUIsSUFBSSxDQUFDLFVBQVUsRUFDN0JoRyxLQUFLLENBQUN3RixPQUFPLENBQUMsSUFBSSxDQUFDZixRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUUsY0FBYyxDQUFDLENBQUM7UUFFaEQsSUFBSSxDQUFDQSxRQUFRLENBQUM4RyxXQUFXLENBQUMsMkJBQTJCLENBQUM7UUFDdEQsSUFBSSxDQUFDOUcsUUFBUSxDQUFDdUIsSUFBSSxDQUFDLGFBQWEsRUFBRSxPQUFPLENBQUM7UUFDMUNoRyxLQUFLLENBQUN5RixVQUFVLENBQUMsSUFBSSxDQUFDaEIsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2xDLElBQUksQ0FBQ0EsUUFBUSxDQUFDMGUsVUFBVSxDQUFDLFNBQVMsQ0FBQztRQUVuQyxJQUFJLENBQUN2ZCxXQUFXLENBQUM0RixPQUFPLENBQUMsQ0FBQztRQUMxQixJQUFJLENBQUNnRCxTQUFTLENBQUNoRCxPQUFPLENBQUMsQ0FBQztRQUN4QixJQUFJLENBQUM2SyxRQUFRLENBQUM3SyxPQUFPLENBQUMsQ0FBQztRQUN2QixJQUFJLENBQUM1RSxPQUFPLENBQUM0RSxPQUFPLENBQUMsQ0FBQztRQUV0QixJQUFJLENBQUM1RixXQUFXLEdBQUcsSUFBSTtRQUN2QixJQUFJLENBQUM0SSxTQUFTLEdBQUcsSUFBSTtRQUNyQixJQUFJLENBQUM2SCxRQUFRLEdBQUcsSUFBSTtRQUNwQixJQUFJLENBQUN6UCxPQUFPLEdBQUcsSUFBSTtNQUNyQixDQUFDO01BRUQ4WSxPQUFPLENBQUM1a0IsU0FBUyxDQUFDK0ssTUFBTSxHQUFHLFlBQVk7UUFDckMsSUFBSTZELFVBQVUsR0FBRzdKLENBQUMsQ0FDaEIsMENBQTBDLEdBQ3hDLGlDQUFpQyxHQUNqQywyREFBMkQsR0FDN0QsU0FDRixDQUFDO1FBRUQ2SixVQUFVLENBQUMxRCxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQ0wsT0FBTyxDQUFDSSxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFL0MsSUFBSSxDQUFDMkQsVUFBVSxHQUFHQSxVQUFVO1FBRTVCLElBQUksQ0FBQ0EsVUFBVSxDQUFDaUIsUUFBUSxDQUFDLHFCQUFxQixHQUFHLElBQUksQ0FBQ2hGLE9BQU8sQ0FBQ0ksR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRTNFL0YsS0FBSyxDQUFDdUYsU0FBUyxDQUFDbUUsVUFBVSxDQUFDLENBQUMsQ0FBQyxFQUFFLFNBQVMsRUFBRSxJQUFJLENBQUNqRixRQUFRLENBQUM7UUFFeEQsT0FBT2lGLFVBQVU7TUFDbkIsQ0FBQztNQUVELE9BQU9nVyxPQUFPO0lBQ2hCLENBQUMsQ0FBQztJQUVGM2xCLEVBQUUsQ0FBQ1YsTUFBTSxDQUFDLG1CQUFtQixFQUFDLENBQzVCLFFBQVEsQ0FDVCxFQUFFLFVBQVV3RyxDQUFDLEVBQUU7TUFDZDtNQUNBLE9BQU9BLENBQUM7SUFDVixDQUFDLENBQUM7SUFFRjlGLEVBQUUsQ0FBQ1YsTUFBTSxDQUFDLGdCQUFnQixFQUFDLENBQ3pCLFFBQVEsRUFDUixtQkFBbUIsRUFFbkIsZ0JBQWdCLEVBQ2hCLG9CQUFvQixFQUNwQixpQkFBaUIsQ0FDbEIsRUFBRSxVQUFVd0csQ0FBQyxFQUFFcVAsQ0FBQyxFQUFFd1EsT0FBTyxFQUFFckQsUUFBUSxFQUFFcmMsS0FBSyxFQUFFO01BQzNDLElBQUlILENBQUMsQ0FBQzdGLEVBQUUsQ0FBQ0MsT0FBTyxJQUFJLElBQUksRUFBRTtRQUN4QjtRQUNBLElBQUltcEIsV0FBVyxHQUFHLENBQUMsTUFBTSxFQUFFLE9BQU8sRUFBRSxTQUFTLENBQUM7UUFFOUN2akIsQ0FBQyxDQUFDN0YsRUFBRSxDQUFDQyxPQUFPLEdBQUcsVUFBVTBMLE9BQU8sRUFBRTtVQUNoQ0EsT0FBTyxHQUFHQSxPQUFPLElBQUksQ0FBQyxDQUFDO1VBRXZCLElBQUluTSxPQUFBLENBQU9tTSxPQUFPLE1BQUssUUFBUSxFQUFFO1lBQy9CLElBQUksQ0FBQ3NDLElBQUksQ0FBQyxZQUFZO2NBQ3BCLElBQUlvYixlQUFlLEdBQUd4akIsQ0FBQyxDQUFDOFIsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsRUFBRWhNLE9BQU8sQ0FBQztjQUVqRCxJQUFJMmQsUUFBUSxHQUFHLElBQUk1RCxPQUFPLENBQUM3ZixDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUV3akIsZUFBZSxDQUFDO1lBQ3RELENBQUMsQ0FBQztZQUVGLE9BQU8sSUFBSTtVQUNiLENBQUMsTUFBTSxJQUFJLE9BQU8xZCxPQUFPLEtBQUssUUFBUSxFQUFFO1lBQ3RDLElBQUl2RyxHQUFHO1lBQ1AsSUFBSS9CLElBQUksR0FBR2dFLEtBQUssQ0FBQ3ZHLFNBQVMsQ0FBQ0csS0FBSyxDQUFDSyxJQUFJLENBQUNnQyxTQUFTLEVBQUUsQ0FBQyxDQUFDO1lBRW5ELElBQUksQ0FBQzJLLElBQUksQ0FBQyxZQUFZO2NBQ3BCLElBQUlxYixRQUFRLEdBQUd0akIsS0FBSyxDQUFDd0YsT0FBTyxDQUFDLElBQUksRUFBRSxTQUFTLENBQUM7Y0FFN0MsSUFBSThkLFFBQVEsSUFBSSxJQUFJLElBQUl6cEIsTUFBTSxDQUFDaUcsT0FBTyxJQUFJQSxPQUFPLENBQUNDLEtBQUssRUFBRTtnQkFDdkRELE9BQU8sQ0FBQ0MsS0FBSyxDQUNYLGdCQUFnQixHQUFHNEYsT0FBTyxHQUFHLDhCQUE4QixHQUMzRCxvQ0FDRixDQUFDO2NBQ0g7Y0FFQXZHLEdBQUcsR0FBR2trQixRQUFRLENBQUMzZCxPQUFPLENBQUMsQ0FBQ25JLEtBQUssQ0FBQzhsQixRQUFRLEVBQUVqbUIsSUFBSSxDQUFDO1lBQy9DLENBQUMsQ0FBQzs7WUFFRjtZQUNBLElBQUl3QyxDQUFDLENBQUNxSSxPQUFPLENBQUN2QyxPQUFPLEVBQUV5ZCxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRTtjQUN4QyxPQUFPLElBQUk7WUFDYjtZQUVBLE9BQU9oa0IsR0FBRztVQUNaLENBQUMsTUFBTTtZQUNMLE1BQU0sSUFBSXRCLEtBQUssQ0FBQyxpQ0FBaUMsR0FBRzZILE9BQU8sQ0FBQztVQUM5RDtRQUNGLENBQUM7TUFDSDtNQUVBLElBQUk5RixDQUFDLENBQUM3RixFQUFFLENBQUNDLE9BQU8sQ0FBQytZLFFBQVEsSUFBSSxJQUFJLEVBQUU7UUFDakNuVCxDQUFDLENBQUM3RixFQUFFLENBQUNDLE9BQU8sQ0FBQytZLFFBQVEsR0FBR3FKLFFBQVE7TUFDbEM7TUFFQSxPQUFPcUQsT0FBTztJQUNoQixDQUFDLENBQUM7O0lBRUE7SUFDQSxPQUFPO01BQ0xybUIsTUFBTSxFQUFFVSxFQUFFLENBQUNWLE1BQU07TUFDakJTLE9BQU8sRUFBRUMsRUFBRSxDQUFDRDtJQUNkLENBQUM7RUFDSCxDQUFDLENBQUMsQ0FBRTs7RUFFRjtFQUNBO0VBQ0EsSUFBSUcsT0FBTyxHQUFHRixFQUFFLENBQUNELE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQzs7RUFFMUM7RUFDQTtFQUNBO0VBQ0FILE1BQU0sQ0FBQ0ssRUFBRSxDQUFDQyxPQUFPLENBQUNYLEdBQUcsR0FBR1MsRUFBRTs7RUFFMUI7RUFDQSxPQUFPRSxPQUFPO0FBQ2hCLENBQUMsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2Nzcy9wb3J0b2FkbWluL3ZlbmRvci9zZWxlY3QyL2pzL3NlbGVjdDIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyohXG4gKiBTZWxlY3QyIDQuMC42LXJjLjFcbiAqIGh0dHBzOi8vc2VsZWN0Mi5naXRodWIuaW9cbiAqXG4gKiBSZWxlYXNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2VcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9zZWxlY3QyL3NlbGVjdDIvYmxvYi9tYXN0ZXIvTElDRU5TRS5tZFxuICovXG47KGZ1bmN0aW9uIChmYWN0b3J5KSB7XG4gIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpIHtcbiAgICAvLyBBTUQuIFJlZ2lzdGVyIGFzIGFuIGFub255bW91cyBtb2R1bGUuXG4gICAgZGVmaW5lKFsnanF1ZXJ5J10sIGZhY3RvcnkpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnICYmIG1vZHVsZS5leHBvcnRzKSB7XG4gICAgLy8gTm9kZS9Db21tb25KU1xuICAgIG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHJvb3QsIGpRdWVyeSkge1xuICAgICAgaWYgKGpRdWVyeSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIC8vIHJlcXVpcmUoJ2pRdWVyeScpIHJldHVybnMgYSBmYWN0b3J5IHRoYXQgcmVxdWlyZXMgd2luZG93IHRvXG4gICAgICAgIC8vIGJ1aWxkIGEgalF1ZXJ5IGluc3RhbmNlLCB3ZSBub3JtYWxpemUgaG93IHdlIHVzZSBtb2R1bGVzXG4gICAgICAgIC8vIHRoYXQgcmVxdWlyZSB0aGlzIHBhdHRlcm4gYnV0IHRoZSB3aW5kb3cgcHJvdmlkZWQgaXMgYSBub29wXG4gICAgICAgIC8vIGlmIGl0J3MgZGVmaW5lZCAoaG93IGpxdWVyeSB3b3JrcylcbiAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgalF1ZXJ5ID0gcmVxdWlyZSgnanF1ZXJ5Jyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgalF1ZXJ5ID0gcmVxdWlyZSgnanF1ZXJ5Jykocm9vdCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGZhY3RvcnkoalF1ZXJ5KTtcbiAgICAgIHJldHVybiBqUXVlcnk7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICAvLyBCcm93c2VyIGdsb2JhbHNcbiAgICBmYWN0b3J5KGpRdWVyeSk7XG4gIH1cbn0gKGZ1bmN0aW9uIChqUXVlcnkpIHtcbiAgLy8gVGhpcyBpcyBuZWVkZWQgc28gd2UgY2FuIGNhdGNoIHRoZSBBTUQgbG9hZGVyIGNvbmZpZ3VyYXRpb24gYW5kIHVzZSBpdFxuICAvLyBUaGUgaW5uZXIgZmlsZSBzaG91bGQgYmUgd3JhcHBlZCAoYnkgYGJhbm5lci5zdGFydC5qc2ApIGluIGEgZnVuY3Rpb24gdGhhdFxuICAvLyByZXR1cm5zIHRoZSBBTUQgbG9hZGVyIHJlZmVyZW5jZXMuXG4gIHZhciBTMiA9KGZ1bmN0aW9uICgpIHtcbiAgLy8gUmVzdG9yZSB0aGUgU2VsZWN0MiBBTUQgbG9hZGVyIHNvIGl0IGNhbiBiZSB1c2VkXG4gIC8vIE5lZWRlZCBtb3N0bHkgaW4gdGhlIGxhbmd1YWdlIGZpbGVzLCB3aGVyZSB0aGUgbG9hZGVyIGlzIG5vdCBpbnNlcnRlZFxuICBpZiAoalF1ZXJ5ICYmIGpRdWVyeS5mbiAmJiBqUXVlcnkuZm4uc2VsZWN0MiAmJiBqUXVlcnkuZm4uc2VsZWN0Mi5hbWQpIHtcbiAgICB2YXIgUzIgPSBqUXVlcnkuZm4uc2VsZWN0Mi5hbWQ7XG4gIH1cbnZhciBTMjsoZnVuY3Rpb24gKCkgeyBpZiAoIVMyIHx8ICFTMi5yZXF1aXJlanMpIHtcbmlmICghUzIpIHsgUzIgPSB7fTsgfSBlbHNlIHsgcmVxdWlyZSA9IFMyOyB9XG4vKipcbiAqIEBsaWNlbnNlIGFsbW9uZCAwLjMuMyBDb3B5cmlnaHQgalF1ZXJ5IEZvdW5kYXRpb24gYW5kIG90aGVyIGNvbnRyaWJ1dG9ycy5cbiAqIFJlbGVhc2VkIHVuZGVyIE1JVCBsaWNlbnNlLCBodHRwOi8vZ2l0aHViLmNvbS9yZXF1aXJlanMvYWxtb25kL0xJQ0VOU0VcbiAqL1xuLy9Hb2luZyBzbG9wcHkgdG8gYXZvaWQgJ3VzZSBzdHJpY3QnIHN0cmluZyBjb3N0LCBidXQgc3RyaWN0IHByYWN0aWNlcyBzaG91bGRcbi8vYmUgZm9sbG93ZWQuXG4vKmdsb2JhbCBzZXRUaW1lb3V0OiBmYWxzZSAqL1xuXG52YXIgcmVxdWlyZWpzLCByZXF1aXJlLCBkZWZpbmU7XG4oZnVuY3Rpb24gKHVuZGVmKSB7XG4gICAgdmFyIG1haW4sIHJlcSwgbWFrZU1hcCwgaGFuZGxlcnMsXG4gICAgICAgIGRlZmluZWQgPSB7fSxcbiAgICAgICAgd2FpdGluZyA9IHt9LFxuICAgICAgICBjb25maWcgPSB7fSxcbiAgICAgICAgZGVmaW5pbmcgPSB7fSxcbiAgICAgICAgaGFzT3duID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eSxcbiAgICAgICAgYXBzID0gW10uc2xpY2UsXG4gICAgICAgIGpzU3VmZml4UmVnRXhwID0gL1xcLmpzJC87XG5cbiAgICBmdW5jdGlvbiBoYXNQcm9wKG9iaiwgcHJvcCkge1xuICAgICAgICByZXR1cm4gaGFzT3duLmNhbGwob2JqLCBwcm9wKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHaXZlbiBhIHJlbGF0aXZlIG1vZHVsZSBuYW1lLCBsaWtlIC4vc29tZXRoaW5nLCBub3JtYWxpemUgaXQgdG9cbiAgICAgKiBhIHJlYWwgbmFtZSB0aGF0IGNhbiBiZSBtYXBwZWQgdG8gYSBwYXRoLlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIHRoZSByZWxhdGl2ZSBuYW1lXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGJhc2VOYW1lIGEgcmVhbCBuYW1lIHRoYXQgdGhlIG5hbWUgYXJnIGlzIHJlbGF0aXZlXG4gICAgICogdG8uXG4gICAgICogQHJldHVybnMge1N0cmluZ30gbm9ybWFsaXplZCBuYW1lXG4gICAgICovXG4gICAgZnVuY3Rpb24gbm9ybWFsaXplKG5hbWUsIGJhc2VOYW1lKSB7XG4gICAgICAgIHZhciBuYW1lUGFydHMsIG5hbWVTZWdtZW50LCBtYXBWYWx1ZSwgZm91bmRNYXAsIGxhc3RJbmRleCxcbiAgICAgICAgICAgIGZvdW5kSSwgZm91bmRTdGFyTWFwLCBzdGFySSwgaSwgaiwgcGFydCwgbm9ybWFsaXplZEJhc2VQYXJ0cyxcbiAgICAgICAgICAgIGJhc2VQYXJ0cyA9IGJhc2VOYW1lICYmIGJhc2VOYW1lLnNwbGl0KFwiL1wiKSxcbiAgICAgICAgICAgIG1hcCA9IGNvbmZpZy5tYXAsXG4gICAgICAgICAgICBzdGFyTWFwID0gKG1hcCAmJiBtYXBbJyonXSkgfHwge307XG5cbiAgICAgICAgLy9BZGp1c3QgYW55IHJlbGF0aXZlIHBhdGhzLlxuICAgICAgICBpZiAobmFtZSkge1xuICAgICAgICAgICAgbmFtZSA9IG5hbWUuc3BsaXQoJy8nKTtcbiAgICAgICAgICAgIGxhc3RJbmRleCA9IG5hbWUubGVuZ3RoIC0gMTtcblxuICAgICAgICAgICAgLy8gSWYgd2FudGluZyBub2RlIElEIGNvbXBhdGliaWxpdHksIHN0cmlwIC5qcyBmcm9tIGVuZFxuICAgICAgICAgICAgLy8gb2YgSURzLiBIYXZlIHRvIGRvIHRoaXMgaGVyZSwgYW5kIG5vdCBpbiBuYW1lVG9VcmxcbiAgICAgICAgICAgIC8vIGJlY2F1c2Ugbm9kZSBhbGxvd3MgZWl0aGVyIC5qcyBvciBub24gLmpzIHRvIG1hcFxuICAgICAgICAgICAgLy8gdG8gc2FtZSBmaWxlLlxuICAgICAgICAgICAgaWYgKGNvbmZpZy5ub2RlSWRDb21wYXQgJiYganNTdWZmaXhSZWdFeHAudGVzdChuYW1lW2xhc3RJbmRleF0pKSB7XG4gICAgICAgICAgICAgICAgbmFtZVtsYXN0SW5kZXhdID0gbmFtZVtsYXN0SW5kZXhdLnJlcGxhY2UoanNTdWZmaXhSZWdFeHAsICcnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gU3RhcnRzIHdpdGggYSAnLicgc28gbmVlZCB0aGUgYmFzZU5hbWVcbiAgICAgICAgICAgIGlmIChuYW1lWzBdLmNoYXJBdCgwKSA9PT0gJy4nICYmIGJhc2VQYXJ0cykge1xuICAgICAgICAgICAgICAgIC8vQ29udmVydCBiYXNlTmFtZSB0byBhcnJheSwgYW5kIGxvcCBvZmYgdGhlIGxhc3QgcGFydCxcbiAgICAgICAgICAgICAgICAvL3NvIHRoYXQgLiBtYXRjaGVzIHRoYXQgJ2RpcmVjdG9yeScgYW5kIG5vdCBuYW1lIG9mIHRoZSBiYXNlTmFtZSdzXG4gICAgICAgICAgICAgICAgLy9tb2R1bGUuIEZvciBpbnN0YW5jZSwgYmFzZU5hbWUgb2YgJ29uZS90d28vdGhyZWUnLCBtYXBzIHRvXG4gICAgICAgICAgICAgICAgLy8nb25lL3R3by90aHJlZS5qcycsIGJ1dCB3ZSB3YW50IHRoZSBkaXJlY3RvcnksICdvbmUvdHdvJyBmb3JcbiAgICAgICAgICAgICAgICAvL3RoaXMgbm9ybWFsaXphdGlvbi5cbiAgICAgICAgICAgICAgICBub3JtYWxpemVkQmFzZVBhcnRzID0gYmFzZVBhcnRzLnNsaWNlKDAsIGJhc2VQYXJ0cy5sZW5ndGggLSAxKTtcbiAgICAgICAgICAgICAgICBuYW1lID0gbm9ybWFsaXplZEJhc2VQYXJ0cy5jb25jYXQobmFtZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vc3RhcnQgdHJpbURvdHNcbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBuYW1lLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgcGFydCA9IG5hbWVbaV07XG4gICAgICAgICAgICAgICAgaWYgKHBhcnQgPT09ICcuJykge1xuICAgICAgICAgICAgICAgICAgICBuYW1lLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgaSAtPSAxO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocGFydCA9PT0gJy4uJykge1xuICAgICAgICAgICAgICAgICAgICAvLyBJZiBhdCB0aGUgc3RhcnQsIG9yIHByZXZpb3VzIHZhbHVlIGlzIHN0aWxsIC4uLFxuICAgICAgICAgICAgICAgICAgICAvLyBrZWVwIHRoZW0gc28gdGhhdCB3aGVuIGNvbnZlcnRlZCB0byBhIHBhdGggaXQgbWF5XG4gICAgICAgICAgICAgICAgICAgIC8vIHN0aWxsIHdvcmsgd2hlbiBjb252ZXJ0ZWQgdG8gYSBwYXRoLCBldmVuIHRob3VnaFxuICAgICAgICAgICAgICAgICAgICAvLyBhcyBhbiBJRCBpdCBpcyBsZXNzIHRoYW4gaWRlYWwuIEluIGxhcmdlciBwb2ludFxuICAgICAgICAgICAgICAgICAgICAvLyByZWxlYXNlcywgbWF5IGJlIGJldHRlciB0byBqdXN0IGtpY2sgb3V0IGFuIGVycm9yLlxuICAgICAgICAgICAgICAgICAgICBpZiAoaSA9PT0gMCB8fCAoaSA9PT0gMSAmJiBuYW1lWzJdID09PSAnLi4nKSB8fCBuYW1lW2kgLSAxXSA9PT0gJy4uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoaSA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWUuc3BsaWNlKGkgLSAxLCAyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGkgLT0gMjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vZW5kIHRyaW1Eb3RzXG5cbiAgICAgICAgICAgIG5hbWUgPSBuYW1lLmpvaW4oJy8nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vQXBwbHkgbWFwIGNvbmZpZyBpZiBhdmFpbGFibGUuXG4gICAgICAgIGlmICgoYmFzZVBhcnRzIHx8IHN0YXJNYXApICYmIG1hcCkge1xuICAgICAgICAgICAgbmFtZVBhcnRzID0gbmFtZS5zcGxpdCgnLycpO1xuXG4gICAgICAgICAgICBmb3IgKGkgPSBuYW1lUGFydHMubGVuZ3RoOyBpID4gMDsgaSAtPSAxKSB7XG4gICAgICAgICAgICAgICAgbmFtZVNlZ21lbnQgPSBuYW1lUGFydHMuc2xpY2UoMCwgaSkuam9pbihcIi9cIik7XG5cbiAgICAgICAgICAgICAgICBpZiAoYmFzZVBhcnRzKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vRmluZCB0aGUgbG9uZ2VzdCBiYXNlTmFtZSBzZWdtZW50IG1hdGNoIGluIHRoZSBjb25maWcuXG4gICAgICAgICAgICAgICAgICAgIC8vU28sIGRvIGpvaW5zIG9uIHRoZSBiaWdnZXN0IHRvIHNtYWxsZXN0IGxlbmd0aHMgb2YgYmFzZVBhcnRzLlxuICAgICAgICAgICAgICAgICAgICBmb3IgKGogPSBiYXNlUGFydHMubGVuZ3RoOyBqID4gMDsgaiAtPSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXBWYWx1ZSA9IG1hcFtiYXNlUGFydHMuc2xpY2UoMCwgaikuam9pbignLycpXTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy9iYXNlTmFtZSBzZWdtZW50IGhhcyAgY29uZmlnLCBmaW5kIGlmIGl0IGhhcyBvbmUgZm9yXG4gICAgICAgICAgICAgICAgICAgICAgICAvL3RoaXMgbmFtZS5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtYXBWYWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcFZhbHVlID0gbWFwVmFsdWVbbmFtZVNlZ21lbnRdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtYXBWYWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL01hdGNoLCB1cGRhdGUgbmFtZSB0byB0aGUgbmV3IHZhbHVlLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3VuZE1hcCA9IG1hcFZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3VuZEkgPSBpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoZm91bmRNYXApIHtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy9DaGVjayBmb3IgYSBzdGFyIG1hcCBtYXRjaCwgYnV0IGp1c3QgaG9sZCBvbiB0byBpdCxcbiAgICAgICAgICAgICAgICAvL2lmIHRoZXJlIGlzIGEgc2hvcnRlciBzZWdtZW50IG1hdGNoIGxhdGVyIGluIGEgbWF0Y2hpbmdcbiAgICAgICAgICAgICAgICAvL2NvbmZpZywgdGhlbiBmYXZvciBvdmVyIHRoaXMgc3RhciBtYXAuXG4gICAgICAgICAgICAgICAgaWYgKCFmb3VuZFN0YXJNYXAgJiYgc3Rhck1hcCAmJiBzdGFyTWFwW25hbWVTZWdtZW50XSkge1xuICAgICAgICAgICAgICAgICAgICBmb3VuZFN0YXJNYXAgPSBzdGFyTWFwW25hbWVTZWdtZW50XTtcbiAgICAgICAgICAgICAgICAgICAgc3RhckkgPSBpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCFmb3VuZE1hcCAmJiBmb3VuZFN0YXJNYXApIHtcbiAgICAgICAgICAgICAgICBmb3VuZE1hcCA9IGZvdW5kU3Rhck1hcDtcbiAgICAgICAgICAgICAgICBmb3VuZEkgPSBzdGFySTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGZvdW5kTWFwKSB7XG4gICAgICAgICAgICAgICAgbmFtZVBhcnRzLnNwbGljZSgwLCBmb3VuZEksIGZvdW5kTWFwKTtcbiAgICAgICAgICAgICAgICBuYW1lID0gbmFtZVBhcnRzLmpvaW4oJy8nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBuYW1lO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG1ha2VSZXF1aXJlKHJlbE5hbWUsIGZvcmNlU3luYykge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgLy9BIHZlcnNpb24gb2YgYSByZXF1aXJlIGZ1bmN0aW9uIHRoYXQgcGFzc2VzIGEgbW9kdWxlTmFtZVxuICAgICAgICAgICAgLy92YWx1ZSBmb3IgaXRlbXMgdGhhdCBtYXkgbmVlZCB0b1xuICAgICAgICAgICAgLy9sb29rIHVwIHBhdGhzIHJlbGF0aXZlIHRvIHRoZSBtb2R1bGVOYW1lXG4gICAgICAgICAgICB2YXIgYXJncyA9IGFwcy5jYWxsKGFyZ3VtZW50cywgMCk7XG5cbiAgICAgICAgICAgIC8vSWYgZmlyc3QgYXJnIGlzIG5vdCByZXF1aXJlKCdzdHJpbmcnKSwgYW5kIHRoZXJlIGlzIG9ubHlcbiAgICAgICAgICAgIC8vb25lIGFyZywgaXQgaXMgdGhlIGFycmF5IGZvcm0gd2l0aG91dCBhIGNhbGxiYWNrLiBJbnNlcnRcbiAgICAgICAgICAgIC8vYSBudWxsIHNvIHRoYXQgdGhlIGZvbGxvd2luZyBjb25jYXQgaXMgY29ycmVjdC5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgYXJnc1swXSAhPT0gJ3N0cmluZycgJiYgYXJncy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgICAgICBhcmdzLnB1c2gobnVsbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmVxLmFwcGx5KHVuZGVmLCBhcmdzLmNvbmNhdChbcmVsTmFtZSwgZm9yY2VTeW5jXSkpO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG1ha2VOb3JtYWxpemUocmVsTmFtZSkge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgICAgIHJldHVybiBub3JtYWxpemUobmFtZSwgcmVsTmFtZSk7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbWFrZUxvYWQoZGVwTmFtZSkge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICBkZWZpbmVkW2RlcE5hbWVdID0gdmFsdWU7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2FsbERlcChuYW1lKSB7XG4gICAgICAgIGlmIChoYXNQcm9wKHdhaXRpbmcsIG5hbWUpKSB7XG4gICAgICAgICAgICB2YXIgYXJncyA9IHdhaXRpbmdbbmFtZV07XG4gICAgICAgICAgICBkZWxldGUgd2FpdGluZ1tuYW1lXTtcbiAgICAgICAgICAgIGRlZmluaW5nW25hbWVdID0gdHJ1ZTtcbiAgICAgICAgICAgIG1haW4uYXBwbHkodW5kZWYsIGFyZ3MpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFoYXNQcm9wKGRlZmluZWQsIG5hbWUpICYmICFoYXNQcm9wKGRlZmluaW5nLCBuYW1lKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdObyAnICsgbmFtZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGRlZmluZWRbbmFtZV07XG4gICAgfVxuXG4gICAgLy9UdXJucyBhIHBsdWdpbiFyZXNvdXJjZSB0byBbcGx1Z2luLCByZXNvdXJjZV1cbiAgICAvL3dpdGggdGhlIHBsdWdpbiBiZWluZyB1bmRlZmluZWQgaWYgdGhlIG5hbWVcbiAgICAvL2RpZCBub3QgaGF2ZSBhIHBsdWdpbiBwcmVmaXguXG4gICAgZnVuY3Rpb24gc3BsaXRQcmVmaXgobmFtZSkge1xuICAgICAgICB2YXIgcHJlZml4LFxuICAgICAgICAgICAgaW5kZXggPSBuYW1lID8gbmFtZS5pbmRleE9mKCchJykgOiAtMTtcbiAgICAgICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgICAgICAgIHByZWZpeCA9IG5hbWUuc3Vic3RyaW5nKDAsIGluZGV4KTtcbiAgICAgICAgICAgIG5hbWUgPSBuYW1lLnN1YnN0cmluZyhpbmRleCArIDEsIG5hbWUubGVuZ3RoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gW3ByZWZpeCwgbmFtZV07XG4gICAgfVxuXG4gICAgLy9DcmVhdGVzIGEgcGFydHMgYXJyYXkgZm9yIGEgcmVsTmFtZSB3aGVyZSBmaXJzdCBwYXJ0IGlzIHBsdWdpbiBJRCxcbiAgICAvL3NlY29uZCBwYXJ0IGlzIHJlc291cmNlIElELiBBc3N1bWVzIHJlbE5hbWUgaGFzIGFscmVhZHkgYmVlbiBub3JtYWxpemVkLlxuICAgIGZ1bmN0aW9uIG1ha2VSZWxQYXJ0cyhyZWxOYW1lKSB7XG4gICAgICAgIHJldHVybiByZWxOYW1lID8gc3BsaXRQcmVmaXgocmVsTmFtZSkgOiBbXTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBNYWtlcyBhIG5hbWUgbWFwLCBub3JtYWxpemluZyB0aGUgbmFtZSwgYW5kIHVzaW5nIGEgcGx1Z2luXG4gICAgICogZm9yIG5vcm1hbGl6YXRpb24gaWYgbmVjZXNzYXJ5LiBHcmFicyBhIHJlZiB0byBwbHVnaW5cbiAgICAgKiB0b28sIGFzIGFuIG9wdGltaXphdGlvbi5cbiAgICAgKi9cbiAgICBtYWtlTWFwID0gZnVuY3Rpb24gKG5hbWUsIHJlbFBhcnRzKSB7XG4gICAgICAgIHZhciBwbHVnaW4sXG4gICAgICAgICAgICBwYXJ0cyA9IHNwbGl0UHJlZml4KG5hbWUpLFxuICAgICAgICAgICAgcHJlZml4ID0gcGFydHNbMF0sXG4gICAgICAgICAgICByZWxSZXNvdXJjZU5hbWUgPSByZWxQYXJ0c1sxXTtcblxuICAgICAgICBuYW1lID0gcGFydHNbMV07XG5cbiAgICAgICAgaWYgKHByZWZpeCkge1xuICAgICAgICAgICAgcHJlZml4ID0gbm9ybWFsaXplKHByZWZpeCwgcmVsUmVzb3VyY2VOYW1lKTtcbiAgICAgICAgICAgIHBsdWdpbiA9IGNhbGxEZXAocHJlZml4KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vTm9ybWFsaXplIGFjY29yZGluZ1xuICAgICAgICBpZiAocHJlZml4KSB7XG4gICAgICAgICAgICBpZiAocGx1Z2luICYmIHBsdWdpbi5ub3JtYWxpemUpIHtcbiAgICAgICAgICAgICAgICBuYW1lID0gcGx1Z2luLm5vcm1hbGl6ZShuYW1lLCBtYWtlTm9ybWFsaXplKHJlbFJlc291cmNlTmFtZSkpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBuYW1lID0gbm9ybWFsaXplKG5hbWUsIHJlbFJlc291cmNlTmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBuYW1lID0gbm9ybWFsaXplKG5hbWUsIHJlbFJlc291cmNlTmFtZSk7XG4gICAgICAgICAgICBwYXJ0cyA9IHNwbGl0UHJlZml4KG5hbWUpO1xuICAgICAgICAgICAgcHJlZml4ID0gcGFydHNbMF07XG4gICAgICAgICAgICBuYW1lID0gcGFydHNbMV07XG4gICAgICAgICAgICBpZiAocHJlZml4KSB7XG4gICAgICAgICAgICAgICAgcGx1Z2luID0gY2FsbERlcChwcmVmaXgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy9Vc2luZyByaWRpY3Vsb3VzIHByb3BlcnR5IG5hbWVzIGZvciBzcGFjZSByZWFzb25zXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBmOiBwcmVmaXggPyBwcmVmaXggKyAnIScgKyBuYW1lIDogbmFtZSwgLy9mdWxsTmFtZVxuICAgICAgICAgICAgbjogbmFtZSxcbiAgICAgICAgICAgIHByOiBwcmVmaXgsXG4gICAgICAgICAgICBwOiBwbHVnaW5cbiAgICAgICAgfTtcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gbWFrZUNvbmZpZyhuYW1lKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gKGNvbmZpZyAmJiBjb25maWcuY29uZmlnICYmIGNvbmZpZy5jb25maWdbbmFtZV0pIHx8IHt9O1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIGhhbmRsZXJzID0ge1xuICAgICAgICByZXF1aXJlOiBmdW5jdGlvbiAobmFtZSkge1xuICAgICAgICAgICAgcmV0dXJuIG1ha2VSZXF1aXJlKG5hbWUpO1xuICAgICAgICB9LFxuICAgICAgICBleHBvcnRzOiBmdW5jdGlvbiAobmFtZSkge1xuICAgICAgICAgICAgdmFyIGUgPSBkZWZpbmVkW25hbWVdO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIHJldHVybiBlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKGRlZmluZWRbbmFtZV0gPSB7fSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIG1vZHVsZTogZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgaWQ6IG5hbWUsXG4gICAgICAgICAgICAgICAgdXJpOiAnJyxcbiAgICAgICAgICAgICAgICBleHBvcnRzOiBkZWZpbmVkW25hbWVdLFxuICAgICAgICAgICAgICAgIGNvbmZpZzogbWFrZUNvbmZpZyhuYW1lKVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBtYWluID0gZnVuY3Rpb24gKG5hbWUsIGRlcHMsIGNhbGxiYWNrLCByZWxOYW1lKSB7XG4gICAgICAgIHZhciBjanNNb2R1bGUsIGRlcE5hbWUsIHJldCwgbWFwLCBpLCByZWxQYXJ0cyxcbiAgICAgICAgICAgIGFyZ3MgPSBbXSxcbiAgICAgICAgICAgIGNhbGxiYWNrVHlwZSA9IHR5cGVvZiBjYWxsYmFjayxcbiAgICAgICAgICAgIHVzaW5nRXhwb3J0cztcblxuICAgICAgICAvL1VzZSBuYW1lIGlmIG5vIHJlbE5hbWVcbiAgICAgICAgcmVsTmFtZSA9IHJlbE5hbWUgfHwgbmFtZTtcbiAgICAgICAgcmVsUGFydHMgPSBtYWtlUmVsUGFydHMocmVsTmFtZSk7XG5cbiAgICAgICAgLy9DYWxsIHRoZSBjYWxsYmFjayB0byBkZWZpbmUgdGhlIG1vZHVsZSwgaWYgbmVjZXNzYXJ5LlxuICAgICAgICBpZiAoY2FsbGJhY2tUeXBlID09PSAndW5kZWZpbmVkJyB8fCBjYWxsYmFja1R5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIC8vUHVsbCBvdXQgdGhlIGRlZmluZWQgZGVwZW5kZW5jaWVzIGFuZCBwYXNzIHRoZSBvcmRlcmVkXG4gICAgICAgICAgICAvL3ZhbHVlcyB0byB0aGUgY2FsbGJhY2suXG4gICAgICAgICAgICAvL0RlZmF1bHQgdG8gW3JlcXVpcmUsIGV4cG9ydHMsIG1vZHVsZV0gaWYgbm8gZGVwc1xuICAgICAgICAgICAgZGVwcyA9ICFkZXBzLmxlbmd0aCAmJiBjYWxsYmFjay5sZW5ndGggPyBbJ3JlcXVpcmUnLCAnZXhwb3J0cycsICdtb2R1bGUnXSA6IGRlcHM7XG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgZGVwcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgICAgIG1hcCA9IG1ha2VNYXAoZGVwc1tpXSwgcmVsUGFydHMpO1xuICAgICAgICAgICAgICAgIGRlcE5hbWUgPSBtYXAuZjtcblxuICAgICAgICAgICAgICAgIC8vRmFzdCBwYXRoIENvbW1vbkpTIHN0YW5kYXJkIGRlcGVuZGVuY2llcy5cbiAgICAgICAgICAgICAgICBpZiAoZGVwTmFtZSA9PT0gXCJyZXF1aXJlXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgYXJnc1tpXSA9IGhhbmRsZXJzLnJlcXVpcmUobmFtZSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChkZXBOYW1lID09PSBcImV4cG9ydHNcIikge1xuICAgICAgICAgICAgICAgICAgICAvL0NvbW1vbkpTIG1vZHVsZSBzcGVjIDEuMVxuICAgICAgICAgICAgICAgICAgICBhcmdzW2ldID0gaGFuZGxlcnMuZXhwb3J0cyhuYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgdXNpbmdFeHBvcnRzID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGRlcE5hbWUgPT09IFwibW9kdWxlXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgLy9Db21tb25KUyBtb2R1bGUgc3BlYyAxLjFcbiAgICAgICAgICAgICAgICAgICAgY2pzTW9kdWxlID0gYXJnc1tpXSA9IGhhbmRsZXJzLm1vZHVsZShuYW1lKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGhhc1Byb3AoZGVmaW5lZCwgZGVwTmFtZSkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhc1Byb3Aod2FpdGluZywgZGVwTmFtZSkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhc1Byb3AoZGVmaW5pbmcsIGRlcE5hbWUpKSB7XG4gICAgICAgICAgICAgICAgICAgIGFyZ3NbaV0gPSBjYWxsRGVwKGRlcE5hbWUpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAobWFwLnApIHtcbiAgICAgICAgICAgICAgICAgICAgbWFwLnAubG9hZChtYXAubiwgbWFrZVJlcXVpcmUocmVsTmFtZSwgdHJ1ZSksIG1ha2VMb2FkKGRlcE5hbWUpLCB7fSk7XG4gICAgICAgICAgICAgICAgICAgIGFyZ3NbaV0gPSBkZWZpbmVkW2RlcE5hbWVdO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihuYW1lICsgJyBtaXNzaW5nICcgKyBkZXBOYW1lKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldCA9IGNhbGxiYWNrID8gY2FsbGJhY2suYXBwbHkoZGVmaW5lZFtuYW1lXSwgYXJncykgOiB1bmRlZmluZWQ7XG5cbiAgICAgICAgICAgIGlmIChuYW1lKSB7XG4gICAgICAgICAgICAgICAgLy9JZiBzZXR0aW5nIGV4cG9ydHMgdmlhIFwibW9kdWxlXCIgaXMgaW4gcGxheSxcbiAgICAgICAgICAgICAgICAvL2Zhdm9yIHRoYXQgb3ZlciByZXR1cm4gdmFsdWUgYW5kIGV4cG9ydHMuIEFmdGVyIHRoYXQsXG4gICAgICAgICAgICAgICAgLy9mYXZvciBhIG5vbi11bmRlZmluZWQgcmV0dXJuIHZhbHVlIG92ZXIgZXhwb3J0cyB1c2UuXG4gICAgICAgICAgICAgICAgaWYgKGNqc01vZHVsZSAmJiBjanNNb2R1bGUuZXhwb3J0cyAhPT0gdW5kZWYgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIGNqc01vZHVsZS5leHBvcnRzICE9PSBkZWZpbmVkW25hbWVdKSB7XG4gICAgICAgICAgICAgICAgICAgIGRlZmluZWRbbmFtZV0gPSBjanNNb2R1bGUuZXhwb3J0cztcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHJldCAhPT0gdW5kZWYgfHwgIXVzaW5nRXhwb3J0cykge1xuICAgICAgICAgICAgICAgICAgICAvL1VzZSB0aGUgcmV0dXJuIHZhbHVlIGZyb20gdGhlIGZ1bmN0aW9uLlxuICAgICAgICAgICAgICAgICAgICBkZWZpbmVkW25hbWVdID0gcmV0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChuYW1lKSB7XG4gICAgICAgICAgICAvL01heSBqdXN0IGJlIGFuIG9iamVjdCBkZWZpbml0aW9uIGZvciB0aGUgbW9kdWxlLiBPbmx5XG4gICAgICAgICAgICAvL3dvcnJ5IGFib3V0IGRlZmluaW5nIGlmIGhhdmUgYSBtb2R1bGUgbmFtZS5cbiAgICAgICAgICAgIGRlZmluZWRbbmFtZV0gPSBjYWxsYmFjaztcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICByZXF1aXJlanMgPSByZXF1aXJlID0gcmVxID0gZnVuY3Rpb24gKGRlcHMsIGNhbGxiYWNrLCByZWxOYW1lLCBmb3JjZVN5bmMsIGFsdCkge1xuICAgICAgICBpZiAodHlwZW9mIGRlcHMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIGlmIChoYW5kbGVyc1tkZXBzXSkge1xuICAgICAgICAgICAgICAgIC8vY2FsbGJhY2sgaW4gdGhpcyBjYXNlIGlzIHJlYWxseSByZWxOYW1lXG4gICAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZXJzW2RlcHNdKGNhbGxiYWNrKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vSnVzdCByZXR1cm4gdGhlIG1vZHVsZSB3YW50ZWQuIEluIHRoaXMgc2NlbmFyaW8sIHRoZVxuICAgICAgICAgICAgLy9kZXBzIGFyZyBpcyB0aGUgbW9kdWxlIG5hbWUsIGFuZCBzZWNvbmQgYXJnIChpZiBwYXNzZWQpXG4gICAgICAgICAgICAvL2lzIGp1c3QgdGhlIHJlbE5hbWUuXG4gICAgICAgICAgICAvL05vcm1hbGl6ZSBtb2R1bGUgbmFtZSwgaWYgaXQgY29udGFpbnMgLiBvciAuLlxuICAgICAgICAgICAgcmV0dXJuIGNhbGxEZXAobWFrZU1hcChkZXBzLCBtYWtlUmVsUGFydHMoY2FsbGJhY2spKS5mKTtcbiAgICAgICAgfSBlbHNlIGlmICghZGVwcy5zcGxpY2UpIHtcbiAgICAgICAgICAgIC8vZGVwcyBpcyBhIGNvbmZpZyBvYmplY3QsIG5vdCBhbiBhcnJheS5cbiAgICAgICAgICAgIGNvbmZpZyA9IGRlcHM7XG4gICAgICAgICAgICBpZiAoY29uZmlnLmRlcHMpIHtcbiAgICAgICAgICAgICAgICByZXEoY29uZmlnLmRlcHMsIGNvbmZpZy5jYWxsYmFjayk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIWNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoY2FsbGJhY2suc3BsaWNlKSB7XG4gICAgICAgICAgICAgICAgLy9jYWxsYmFjayBpcyBhbiBhcnJheSwgd2hpY2ggbWVhbnMgaXQgaXMgYSBkZXBlbmRlbmN5IGxpc3QuXG4gICAgICAgICAgICAgICAgLy9BZGp1c3QgYXJncyBpZiB0aGVyZSBhcmUgZGVwZW5kZW5jaWVzXG4gICAgICAgICAgICAgICAgZGVwcyA9IGNhbGxiYWNrO1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrID0gcmVsTmFtZTtcbiAgICAgICAgICAgICAgICByZWxOYW1lID0gbnVsbDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZGVwcyA9IHVuZGVmO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy9TdXBwb3J0IHJlcXVpcmUoWydhJ10pXG4gICAgICAgIGNhbGxiYWNrID0gY2FsbGJhY2sgfHwgZnVuY3Rpb24gKCkge307XG5cbiAgICAgICAgLy9JZiByZWxOYW1lIGlzIGEgZnVuY3Rpb24sIGl0IGlzIGFuIGVycmJhY2sgaGFuZGxlcixcbiAgICAgICAgLy9zbyByZW1vdmUgaXQuXG4gICAgICAgIGlmICh0eXBlb2YgcmVsTmFtZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgcmVsTmFtZSA9IGZvcmNlU3luYztcbiAgICAgICAgICAgIGZvcmNlU3luYyA9IGFsdDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vU2ltdWxhdGUgYXN5bmMgY2FsbGJhY2s7XG4gICAgICAgIGlmIChmb3JjZVN5bmMpIHtcbiAgICAgICAgICAgIG1haW4odW5kZWYsIGRlcHMsIGNhbGxiYWNrLCByZWxOYW1lKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vVXNpbmcgYSBub24temVybyB2YWx1ZSBiZWNhdXNlIG9mIGNvbmNlcm4gZm9yIHdoYXQgb2xkIGJyb3dzZXJzXG4gICAgICAgICAgICAvL2RvLCBhbmQgbGF0ZXN0IGJyb3dzZXJzIFwidXBncmFkZVwiIHRvIDQgaWYgbG93ZXIgdmFsdWUgaXMgdXNlZDpcbiAgICAgICAgICAgIC8vaHR0cDovL3d3dy53aGF0d2cub3JnL3NwZWNzL3dlYi1hcHBzL2N1cnJlbnQtd29yay9tdWx0aXBhZ2UvdGltZXJzLmh0bWwjZG9tLXdpbmRvd3RpbWVycy1zZXR0aW1lb3V0OlxuICAgICAgICAgICAgLy9JZiB3YW50IGEgdmFsdWUgaW1tZWRpYXRlbHksIHVzZSByZXF1aXJlKCdpZCcpIGluc3RlYWQgLS0gc29tZXRoaW5nXG4gICAgICAgICAgICAvL3RoYXQgd29ya3MgaW4gYWxtb25kIG9uIHRoZSBnbG9iYWwgbGV2ZWwsIGJ1dCBub3QgZ3VhcmFudGVlZCBhbmRcbiAgICAgICAgICAgIC8vdW5saWtlbHkgdG8gd29yayBpbiBvdGhlciBBTUQgaW1wbGVtZW50YXRpb25zLlxuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgbWFpbih1bmRlZiwgZGVwcywgY2FsbGJhY2ssIHJlbE5hbWUpO1xuICAgICAgICAgICAgfSwgNCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVxO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBKdXN0IGRyb3BzIHRoZSBjb25maWcgb24gdGhlIGZsb29yLCBidXQgcmV0dXJucyByZXEgaW4gY2FzZVxuICAgICAqIHRoZSBjb25maWcgcmV0dXJuIHZhbHVlIGlzIHVzZWQuXG4gICAgICovXG4gICAgcmVxLmNvbmZpZyA9IGZ1bmN0aW9uIChjZmcpIHtcbiAgICAgICAgcmV0dXJuIHJlcShjZmcpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBFeHBvc2UgbW9kdWxlIHJlZ2lzdHJ5IGZvciBkZWJ1Z2dpbmcgYW5kIHRvb2xpbmdcbiAgICAgKi9cbiAgICByZXF1aXJlanMuX2RlZmluZWQgPSBkZWZpbmVkO1xuXG4gICAgZGVmaW5lID0gZnVuY3Rpb24gKG5hbWUsIGRlcHMsIGNhbGxiYWNrKSB7XG4gICAgICAgIGlmICh0eXBlb2YgbmFtZSAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignU2VlIGFsbW9uZCBSRUFETUU6IGluY29ycmVjdCBtb2R1bGUgYnVpbGQsIG5vIG1vZHVsZSBuYW1lJyk7XG4gICAgICAgIH1cblxuICAgICAgICAvL1RoaXMgbW9kdWxlIG1heSBub3QgaGF2ZSBkZXBlbmRlbmNpZXNcbiAgICAgICAgaWYgKCFkZXBzLnNwbGljZSkge1xuICAgICAgICAgICAgLy9kZXBzIGlzIG5vdCBhbiBhcnJheSwgc28gcHJvYmFibHkgbWVhbnNcbiAgICAgICAgICAgIC8vYW4gb2JqZWN0IGxpdGVyYWwgb3IgZmFjdG9yeSBmdW5jdGlvbiBmb3JcbiAgICAgICAgICAgIC8vdGhlIHZhbHVlLiBBZGp1c3QgYXJncy5cbiAgICAgICAgICAgIGNhbGxiYWNrID0gZGVwcztcbiAgICAgICAgICAgIGRlcHMgPSBbXTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghaGFzUHJvcChkZWZpbmVkLCBuYW1lKSAmJiAhaGFzUHJvcCh3YWl0aW5nLCBuYW1lKSkge1xuICAgICAgICAgICAgd2FpdGluZ1tuYW1lXSA9IFtuYW1lLCBkZXBzLCBjYWxsYmFja107XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgZGVmaW5lLmFtZCA9IHtcbiAgICAgICAgalF1ZXJ5OiB0cnVlXG4gICAgfTtcbn0oKSk7XG5cblMyLnJlcXVpcmVqcyA9IHJlcXVpcmVqcztTMi5yZXF1aXJlID0gcmVxdWlyZTtTMi5kZWZpbmUgPSBkZWZpbmU7XG59XG59KCkpO1xuUzIuZGVmaW5lKFwiYWxtb25kXCIsIGZ1bmN0aW9uKCl7fSk7XG5cbi8qIGdsb2JhbCBqUXVlcnk6ZmFsc2UsICQ6ZmFsc2UgKi9cblMyLmRlZmluZSgnanF1ZXJ5JyxbXSxmdW5jdGlvbiAoKSB7XG4gIHZhciBfJCA9IGpRdWVyeSB8fCAkO1xuXG4gIGlmIChfJCA9PSBudWxsICYmIGNvbnNvbGUgJiYgY29uc29sZS5lcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAnU2VsZWN0MjogQW4gaW5zdGFuY2Ugb2YgalF1ZXJ5IG9yIGEgalF1ZXJ5LWNvbXBhdGlibGUgbGlicmFyeSB3YXMgbm90ICcgK1xuICAgICAgJ2ZvdW5kLiBNYWtlIHN1cmUgdGhhdCB5b3UgYXJlIGluY2x1ZGluZyBqUXVlcnkgYmVmb3JlIFNlbGVjdDIgb24geW91ciAnICtcbiAgICAgICd3ZWIgcGFnZS4nXG4gICAgKTtcbiAgfVxuXG4gIHJldHVybiBfJDtcbn0pO1xuXG5TMi5kZWZpbmUoJ3NlbGVjdDIvdXRpbHMnLFtcbiAgJ2pxdWVyeSdcbl0sIGZ1bmN0aW9uICgkKSB7XG4gIHZhciBVdGlscyA9IHt9O1xuXG4gIFV0aWxzLkV4dGVuZCA9IGZ1bmN0aW9uIChDaGlsZENsYXNzLCBTdXBlckNsYXNzKSB7XG4gICAgdmFyIF9faGFzUHJvcCA9IHt9Lmhhc093blByb3BlcnR5O1xuXG4gICAgZnVuY3Rpb24gQmFzZUNvbnN0cnVjdG9yICgpIHtcbiAgICAgIHRoaXMuY29uc3RydWN0b3IgPSBDaGlsZENsYXNzO1xuICAgIH1cblxuICAgIGZvciAodmFyIGtleSBpbiBTdXBlckNsYXNzKSB7XG4gICAgICBpZiAoX19oYXNQcm9wLmNhbGwoU3VwZXJDbGFzcywga2V5KSkge1xuICAgICAgICBDaGlsZENsYXNzW2tleV0gPSBTdXBlckNsYXNzW2tleV07XG4gICAgICB9XG4gICAgfVxuXG4gICAgQmFzZUNvbnN0cnVjdG9yLnByb3RvdHlwZSA9IFN1cGVyQ2xhc3MucHJvdG90eXBlO1xuICAgIENoaWxkQ2xhc3MucHJvdG90eXBlID0gbmV3IEJhc2VDb25zdHJ1Y3RvcigpO1xuICAgIENoaWxkQ2xhc3MuX19zdXBlcl9fID0gU3VwZXJDbGFzcy5wcm90b3R5cGU7XG5cbiAgICByZXR1cm4gQ2hpbGRDbGFzcztcbiAgfTtcblxuICBmdW5jdGlvbiBnZXRNZXRob2RzICh0aGVDbGFzcykge1xuICAgIHZhciBwcm90byA9IHRoZUNsYXNzLnByb3RvdHlwZTtcblxuICAgIHZhciBtZXRob2RzID0gW107XG5cbiAgICBmb3IgKHZhciBtZXRob2ROYW1lIGluIHByb3RvKSB7XG4gICAgICB2YXIgbSA9IHByb3RvW21ldGhvZE5hbWVdO1xuXG4gICAgICBpZiAodHlwZW9mIG0gIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZXRob2ROYW1lID09PSAnY29uc3RydWN0b3InKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBtZXRob2RzLnB1c2gobWV0aG9kTmFtZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1ldGhvZHM7XG4gIH1cblxuICBVdGlscy5EZWNvcmF0ZSA9IGZ1bmN0aW9uIChTdXBlckNsYXNzLCBEZWNvcmF0b3JDbGFzcykge1xuICAgIHZhciBkZWNvcmF0ZWRNZXRob2RzID0gZ2V0TWV0aG9kcyhEZWNvcmF0b3JDbGFzcyk7XG4gICAgdmFyIHN1cGVyTWV0aG9kcyA9IGdldE1ldGhvZHMoU3VwZXJDbGFzcyk7XG5cbiAgICBmdW5jdGlvbiBEZWNvcmF0ZWRDbGFzcyAoKSB7XG4gICAgICB2YXIgdW5zaGlmdCA9IEFycmF5LnByb3RvdHlwZS51bnNoaWZ0O1xuXG4gICAgICB2YXIgYXJnQ291bnQgPSBEZWNvcmF0b3JDbGFzcy5wcm90b3R5cGUuY29uc3RydWN0b3IubGVuZ3RoO1xuXG4gICAgICB2YXIgY2FsbGVkQ29uc3RydWN0b3IgPSBTdXBlckNsYXNzLnByb3RvdHlwZS5jb25zdHJ1Y3RvcjtcblxuICAgICAgaWYgKGFyZ0NvdW50ID4gMCkge1xuICAgICAgICB1bnNoaWZ0LmNhbGwoYXJndW1lbnRzLCBTdXBlckNsYXNzLnByb3RvdHlwZS5jb25zdHJ1Y3Rvcik7XG5cbiAgICAgICAgY2FsbGVkQ29uc3RydWN0b3IgPSBEZWNvcmF0b3JDbGFzcy5wcm90b3R5cGUuY29uc3RydWN0b3I7XG4gICAgICB9XG5cbiAgICAgIGNhbGxlZENvbnN0cnVjdG9yLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfVxuXG4gICAgRGVjb3JhdG9yQ2xhc3MuZGlzcGxheU5hbWUgPSBTdXBlckNsYXNzLmRpc3BsYXlOYW1lO1xuXG4gICAgZnVuY3Rpb24gY3RyICgpIHtcbiAgICAgIHRoaXMuY29uc3RydWN0b3IgPSBEZWNvcmF0ZWRDbGFzcztcbiAgICB9XG5cbiAgICBEZWNvcmF0ZWRDbGFzcy5wcm90b3R5cGUgPSBuZXcgY3RyKCk7XG5cbiAgICBmb3IgKHZhciBtID0gMDsgbSA8IHN1cGVyTWV0aG9kcy5sZW5ndGg7IG0rKykge1xuICAgICAgdmFyIHN1cGVyTWV0aG9kID0gc3VwZXJNZXRob2RzW21dO1xuXG4gICAgICBEZWNvcmF0ZWRDbGFzcy5wcm90b3R5cGVbc3VwZXJNZXRob2RdID1cbiAgICAgICAgU3VwZXJDbGFzcy5wcm90b3R5cGVbc3VwZXJNZXRob2RdO1xuICAgIH1cblxuICAgIHZhciBjYWxsZWRNZXRob2QgPSBmdW5jdGlvbiAobWV0aG9kTmFtZSkge1xuICAgICAgLy8gU3R1YiBvdXQgdGhlIG9yaWdpbmFsIG1ldGhvZCBpZiBpdCdzIG5vdCBkZWNvcmF0aW5nIGFuIGFjdHVhbCBtZXRob2RcbiAgICAgIHZhciBvcmlnaW5hbE1ldGhvZCA9IGZ1bmN0aW9uICgpIHt9O1xuXG4gICAgICBpZiAobWV0aG9kTmFtZSBpbiBEZWNvcmF0ZWRDbGFzcy5wcm90b3R5cGUpIHtcbiAgICAgICAgb3JpZ2luYWxNZXRob2QgPSBEZWNvcmF0ZWRDbGFzcy5wcm90b3R5cGVbbWV0aG9kTmFtZV07XG4gICAgICB9XG5cbiAgICAgIHZhciBkZWNvcmF0ZWRNZXRob2QgPSBEZWNvcmF0b3JDbGFzcy5wcm90b3R5cGVbbWV0aG9kTmFtZV07XG5cbiAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciB1bnNoaWZ0ID0gQXJyYXkucHJvdG90eXBlLnVuc2hpZnQ7XG5cbiAgICAgICAgdW5zaGlmdC5jYWxsKGFyZ3VtZW50cywgb3JpZ2luYWxNZXRob2QpO1xuXG4gICAgICAgIHJldHVybiBkZWNvcmF0ZWRNZXRob2QuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgIH07XG4gICAgfTtcblxuICAgIGZvciAodmFyIGQgPSAwOyBkIDwgZGVjb3JhdGVkTWV0aG9kcy5sZW5ndGg7IGQrKykge1xuICAgICAgdmFyIGRlY29yYXRlZE1ldGhvZCA9IGRlY29yYXRlZE1ldGhvZHNbZF07XG5cbiAgICAgIERlY29yYXRlZENsYXNzLnByb3RvdHlwZVtkZWNvcmF0ZWRNZXRob2RdID0gY2FsbGVkTWV0aG9kKGRlY29yYXRlZE1ldGhvZCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIERlY29yYXRlZENsYXNzO1xuICB9O1xuXG4gIHZhciBPYnNlcnZhYmxlID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMubGlzdGVuZXJzID0ge307XG4gIH07XG5cbiAgT2JzZXJ2YWJsZS5wcm90b3R5cGUub24gPSBmdW5jdGlvbiAoZXZlbnQsIGNhbGxiYWNrKSB7XG4gICAgdGhpcy5saXN0ZW5lcnMgPSB0aGlzLmxpc3RlbmVycyB8fCB7fTtcblxuICAgIGlmIChldmVudCBpbiB0aGlzLmxpc3RlbmVycykge1xuICAgICAgdGhpcy5saXN0ZW5lcnNbZXZlbnRdLnB1c2goY2FsbGJhY2spO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmxpc3RlbmVyc1tldmVudF0gPSBbY2FsbGJhY2tdO1xuICAgIH1cbiAgfTtcblxuICBPYnNlcnZhYmxlLnByb3RvdHlwZS50cmlnZ2VyID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgdmFyIHNsaWNlID0gQXJyYXkucHJvdG90eXBlLnNsaWNlO1xuICAgIHZhciBwYXJhbXMgPSBzbGljZS5jYWxsKGFyZ3VtZW50cywgMSk7XG5cbiAgICB0aGlzLmxpc3RlbmVycyA9IHRoaXMubGlzdGVuZXJzIHx8IHt9O1xuXG4gICAgLy8gUGFyYW1zIHNob3VsZCBhbHdheXMgY29tZSBpbiBhcyBhbiBhcnJheVxuICAgIGlmIChwYXJhbXMgPT0gbnVsbCkge1xuICAgICAgcGFyYW1zID0gW107XG4gICAgfVxuXG4gICAgLy8gSWYgdGhlcmUgYXJlIG5vIGFyZ3VtZW50cyB0byB0aGUgZXZlbnQsIHVzZSBhIHRlbXBvcmFyeSBvYmplY3RcbiAgICBpZiAocGFyYW1zLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcGFyYW1zLnB1c2goe30pO1xuICAgIH1cblxuICAgIC8vIFNldCB0aGUgYF90eXBlYCBvZiB0aGUgZmlyc3Qgb2JqZWN0IHRvIHRoZSBldmVudFxuICAgIHBhcmFtc1swXS5fdHlwZSA9IGV2ZW50O1xuXG4gICAgaWYgKGV2ZW50IGluIHRoaXMubGlzdGVuZXJzKSB7XG4gICAgICB0aGlzLmludm9rZSh0aGlzLmxpc3RlbmVyc1tldmVudF0sIHNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKSk7XG4gICAgfVxuXG4gICAgaWYgKCcqJyBpbiB0aGlzLmxpc3RlbmVycykge1xuICAgICAgdGhpcy5pbnZva2UodGhpcy5saXN0ZW5lcnNbJyonXSwgYXJndW1lbnRzKTtcbiAgICB9XG4gIH07XG5cbiAgT2JzZXJ2YWJsZS5wcm90b3R5cGUuaW52b2tlID0gZnVuY3Rpb24gKGxpc3RlbmVycywgcGFyYW1zKSB7XG4gICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGxpc3RlbmVycy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgbGlzdGVuZXJzW2ldLmFwcGx5KHRoaXMsIHBhcmFtcyk7XG4gICAgfVxuICB9O1xuXG4gIFV0aWxzLk9ic2VydmFibGUgPSBPYnNlcnZhYmxlO1xuXG4gIFV0aWxzLmdlbmVyYXRlQ2hhcnMgPSBmdW5jdGlvbiAobGVuZ3RoKSB7XG4gICAgdmFyIGNoYXJzID0gJyc7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgcmFuZG9tQ2hhciA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDM2KTtcbiAgICAgIGNoYXJzICs9IHJhbmRvbUNoYXIudG9TdHJpbmcoMzYpO1xuICAgIH1cblxuICAgIHJldHVybiBjaGFycztcbiAgfTtcblxuICBVdGlscy5iaW5kID0gZnVuY3Rpb24gKGZ1bmMsIGNvbnRleHQpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgZnVuYy5hcHBseShjb250ZXh0LCBhcmd1bWVudHMpO1xuICAgIH07XG4gIH07XG5cbiAgVXRpbHMuX2NvbnZlcnREYXRhID0gZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBmb3IgKHZhciBvcmlnaW5hbEtleSBpbiBkYXRhKSB7XG4gICAgICB2YXIga2V5cyA9IG9yaWdpbmFsS2V5LnNwbGl0KCctJyk7XG5cbiAgICAgIHZhciBkYXRhTGV2ZWwgPSBkYXRhO1xuXG4gICAgICBpZiAoa2V5cy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwga2V5cy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIga2V5ID0ga2V5c1trXTtcblxuICAgICAgICAvLyBMb3dlcmNhc2UgdGhlIGZpcnN0IGxldHRlclxuICAgICAgICAvLyBCeSBkZWZhdWx0LCBkYXNoLXNlcGFyYXRlZCBiZWNvbWVzIGNhbWVsQ2FzZVxuICAgICAgICBrZXkgPSBrZXkuc3Vic3RyaW5nKDAsIDEpLnRvTG93ZXJDYXNlKCkgKyBrZXkuc3Vic3RyaW5nKDEpO1xuXG4gICAgICAgIGlmICghKGtleSBpbiBkYXRhTGV2ZWwpKSB7XG4gICAgICAgICAgZGF0YUxldmVsW2tleV0gPSB7fTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChrID09IGtleXMubGVuZ3RoIC0gMSkge1xuICAgICAgICAgIGRhdGFMZXZlbFtrZXldID0gZGF0YVtvcmlnaW5hbEtleV07XG4gICAgICAgIH1cblxuICAgICAgICBkYXRhTGV2ZWwgPSBkYXRhTGV2ZWxba2V5XTtcbiAgICAgIH1cblxuICAgICAgZGVsZXRlIGRhdGFbb3JpZ2luYWxLZXldO1xuICAgIH1cblxuICAgIHJldHVybiBkYXRhO1xuICB9O1xuXG4gIFV0aWxzLmhhc1Njcm9sbCA9IGZ1bmN0aW9uIChpbmRleCwgZWwpIHtcbiAgICAvLyBBZGFwdGVkIGZyb20gdGhlIGZ1bmN0aW9uIGNyZWF0ZWQgYnkgQFNoYWRvd1NjcmlwdGVyXG4gICAgLy8gYW5kIGFkYXB0ZWQgYnkgQEJpbGxCYXJyeSBvbiB0aGUgU3RhY2sgRXhjaGFuZ2UgQ29kZSBSZXZpZXcgd2Vic2l0ZS5cbiAgICAvLyBUaGUgb3JpZ2luYWwgY29kZSBjYW4gYmUgZm91bmQgYXRcbiAgICAvLyBodHRwOi8vY29kZXJldmlldy5zdGFja2V4Y2hhbmdlLmNvbS9xLzEzMzM4XG4gICAgLy8gYW5kIHdhcyBkZXNpZ25lZCB0byBiZSB1c2VkIHdpdGggdGhlIFNpenpsZSBzZWxlY3RvciBlbmdpbmUuXG5cbiAgICB2YXIgJGVsID0gJChlbCk7XG4gICAgdmFyIG92ZXJmbG93WCA9IGVsLnN0eWxlLm92ZXJmbG93WDtcbiAgICB2YXIgb3ZlcmZsb3dZID0gZWwuc3R5bGUub3ZlcmZsb3dZO1xuXG4gICAgLy9DaGVjayBib3RoIHggYW5kIHkgZGVjbGFyYXRpb25zXG4gICAgaWYgKG92ZXJmbG93WCA9PT0gb3ZlcmZsb3dZICYmXG4gICAgICAgIChvdmVyZmxvd1kgPT09ICdoaWRkZW4nIHx8IG92ZXJmbG93WSA9PT0gJ3Zpc2libGUnKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGlmIChvdmVyZmxvd1ggPT09ICdzY3JvbGwnIHx8IG92ZXJmbG93WSA9PT0gJ3Njcm9sbCcpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiAoJGVsLmlubmVySGVpZ2h0KCkgPCBlbC5zY3JvbGxIZWlnaHQgfHxcbiAgICAgICRlbC5pbm5lcldpZHRoKCkgPCBlbC5zY3JvbGxXaWR0aCk7XG4gIH07XG5cbiAgVXRpbHMuZXNjYXBlTWFya3VwID0gZnVuY3Rpb24gKG1hcmt1cCkge1xuICAgIHZhciByZXBsYWNlTWFwID0ge1xuICAgICAgJ1xcXFwnOiAnJiM5MjsnLFxuICAgICAgJyYnOiAnJmFtcDsnLFxuICAgICAgJzwnOiAnJmx0OycsXG4gICAgICAnPic6ICcmZ3Q7JyxcbiAgICAgICdcIic6ICcmcXVvdDsnLFxuICAgICAgJ1xcJyc6ICcmIzM5OycsXG4gICAgICAnLyc6ICcmIzQ3OydcbiAgICB9O1xuXG4gICAgLy8gRG8gbm90IHRyeSB0byBlc2NhcGUgdGhlIG1hcmt1cCBpZiBpdCdzIG5vdCBhIHN0cmluZ1xuICAgIGlmICh0eXBlb2YgbWFya3VwICE9PSAnc3RyaW5nJykge1xuICAgICAgcmV0dXJuIG1hcmt1cDtcbiAgICB9XG5cbiAgICByZXR1cm4gU3RyaW5nKG1hcmt1cCkucmVwbGFjZSgvWyY8PlwiJ1xcL1xcXFxdL2csIGZ1bmN0aW9uIChtYXRjaCkge1xuICAgICAgcmV0dXJuIHJlcGxhY2VNYXBbbWF0Y2hdO1xuICAgIH0pO1xuICB9O1xuXG4gIC8vIEFwcGVuZCBhbiBhcnJheSBvZiBqUXVlcnkgbm9kZXMgdG8gYSBnaXZlbiBlbGVtZW50LlxuICBVdGlscy5hcHBlbmRNYW55ID0gZnVuY3Rpb24gKCRlbGVtZW50LCAkbm9kZXMpIHtcbiAgICAvLyBqUXVlcnkgMS43LnggZG9lcyBub3Qgc3VwcG9ydCAkLmZuLmFwcGVuZCgpIHdpdGggYW4gYXJyYXlcbiAgICAvLyBGYWxsIGJhY2sgdG8gYSBqUXVlcnkgb2JqZWN0IGNvbGxlY3Rpb24gdXNpbmcgJC5mbi5hZGQoKVxuICAgIGlmICgkLmZuLmpxdWVyeS5zdWJzdHIoMCwgMykgPT09ICcxLjcnKSB7XG4gICAgICB2YXIgJGpxTm9kZXMgPSAkKCk7XG5cbiAgICAgICQubWFwKCRub2RlcywgZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgICAgJGpxTm9kZXMgPSAkanFOb2Rlcy5hZGQobm9kZSk7XG4gICAgICB9KTtcblxuICAgICAgJG5vZGVzID0gJGpxTm9kZXM7XG4gICAgfVxuXG4gICAgJGVsZW1lbnQuYXBwZW5kKCRub2Rlcyk7XG4gIH07XG5cbiAgLy8gQ2FjaGUgb2JqZWN0cyBpbiBVdGlscy5fX2NhY2hlIGluc3RlYWQgb2YgJC5kYXRhIChzZWUgIzQzNDYpXG4gIFV0aWxzLl9fY2FjaGUgPSB7fTtcblxuICB2YXIgaWQgPSAwO1xuICBVdGlscy5HZXRVbmlxdWVFbGVtZW50SWQgPSBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgIC8vIEdldCBhIHVuaXF1ZSBlbGVtZW50IElkLiBJZiBlbGVtZW50IGhhcyBubyBpZCwgXG4gICAgLy8gY3JlYXRlcyBhIG5ldyB1bmlxdWUgbnVtYmVyLCBzdG9yZXMgaXQgaW4gdGhlIGlkIFxuICAgIC8vIGF0dHJpYnV0ZSBhbmQgcmV0dXJucyB0aGUgbmV3IGlkLiBcbiAgICAvLyBJZiBhbiBpZCBhbHJlYWR5IGV4aXN0cywgaXQgc2ltcGx5IHJldHVybnMgaXQuXG5cbiAgICB2YXIgc2VsZWN0MklkID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtc2VsZWN0Mi1pZCcpO1xuICAgIGlmIChzZWxlY3QySWQgPT0gbnVsbCkge1xuICAgICAgLy8gSWYgZWxlbWVudCBoYXMgaWQsIHVzZSBpdC5cbiAgICAgIGlmIChlbGVtZW50LmlkKSB7XG4gICAgICAgIHNlbGVjdDJJZCA9IGVsZW1lbnQuaWQ7XG4gICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdkYXRhLXNlbGVjdDItaWQnLCBzZWxlY3QySWQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2RhdGEtc2VsZWN0Mi1pZCcsICsraWQpO1xuICAgICAgICBzZWxlY3QySWQgPSBpZC50b1N0cmluZygpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gc2VsZWN0MklkO1xuICB9O1xuXG4gIFV0aWxzLlN0b3JlRGF0YSA9IGZ1bmN0aW9uIChlbGVtZW50LCBuYW1lLCB2YWx1ZSkge1xuICAgIC8vIFN0b3JlcyBhbiBpdGVtIGluIHRoZSBjYWNoZSBmb3IgYSBzcGVjaWZpZWQgZWxlbWVudC5cbiAgICAvLyBuYW1lIGlzIHRoZSBjYWNoZSBrZXkuICAgIFxuICAgIHZhciBpZCA9IFV0aWxzLkdldFVuaXF1ZUVsZW1lbnRJZChlbGVtZW50KTtcbiAgICBpZiAoIVV0aWxzLl9fY2FjaGVbaWRdKSB7XG4gICAgICBVdGlscy5fX2NhY2hlW2lkXSA9IHt9O1xuICAgIH1cblxuICAgIFV0aWxzLl9fY2FjaGVbaWRdW25hbWVdID0gdmFsdWU7XG4gIH07XG5cbiAgVXRpbHMuR2V0RGF0YSA9IGZ1bmN0aW9uIChlbGVtZW50LCBuYW1lKSB7XG4gICAgLy8gUmV0cmlldmVzIGEgdmFsdWUgZnJvbSB0aGUgY2FjaGUgYnkgaXRzIGtleSAobmFtZSlcbiAgICAvLyBuYW1lIGlzIG9wdGlvbmFsLiBJZiBubyBuYW1lIHNwZWNpZmllZCwgcmV0dXJuIFxuICAgIC8vIGFsbCBjYWNoZSBpdGVtcyBmb3IgdGhlIHNwZWNpZmllZCBlbGVtZW50LlxuICAgIC8vIGFuZCBmb3IgYSBzcGVjaWZpZWQgZWxlbWVudC5cbiAgICB2YXIgaWQgPSBVdGlscy5HZXRVbmlxdWVFbGVtZW50SWQoZWxlbWVudCk7XG4gICAgaWYgKG5hbWUpIHtcbiAgICAgIGlmIChVdGlscy5fX2NhY2hlW2lkXSkge1xuICAgICAgICByZXR1cm4gVXRpbHMuX19jYWNoZVtpZF1bbmFtZV0gIT0gbnVsbCA/IFxuXHQgICAgICBVdGlscy5fX2NhY2hlW2lkXVtuYW1lXTpcblx0ICAgICAgJChlbGVtZW50KS5kYXRhKG5hbWUpOyAvLyBGYWxsYmFjayB0byBIVE1MNSBkYXRhIGF0dHJpYnMuXG4gICAgICB9XG4gICAgICByZXR1cm4gJChlbGVtZW50KS5kYXRhKG5hbWUpOyAvLyBGYWxsYmFjayB0byBIVE1MNSBkYXRhIGF0dHJpYnMuXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBVdGlscy5fX2NhY2hlW2lkXTtcdFx0XHQgICBcbiAgICB9XG4gIH07XG5cbiAgVXRpbHMuUmVtb3ZlRGF0YSA9IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgLy8gUmVtb3ZlcyBhbGwgY2FjaGVkIGl0ZW1zIGZvciBhIHNwZWNpZmllZCBlbGVtZW50LlxuICAgIHZhciBpZCA9IFV0aWxzLkdldFVuaXF1ZUVsZW1lbnRJZChlbGVtZW50KTtcbiAgICBpZiAoVXRpbHMuX19jYWNoZVtpZF0gIT0gbnVsbCkge1xuICAgICAgZGVsZXRlIFV0aWxzLl9fY2FjaGVbaWRdO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gVXRpbHM7XG59KTtcblxuUzIuZGVmaW5lKCdzZWxlY3QyL3Jlc3VsdHMnLFtcbiAgJ2pxdWVyeScsXG4gICcuL3V0aWxzJ1xuXSwgZnVuY3Rpb24gKCQsIFV0aWxzKSB7XG4gIGZ1bmN0aW9uIFJlc3VsdHMgKCRlbGVtZW50LCBvcHRpb25zLCBkYXRhQWRhcHRlcikge1xuICAgIHRoaXMuJGVsZW1lbnQgPSAkZWxlbWVudDtcbiAgICB0aGlzLmRhdGEgPSBkYXRhQWRhcHRlcjtcbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuXG4gICAgUmVzdWx0cy5fX3N1cGVyX18uY29uc3RydWN0b3IuY2FsbCh0aGlzKTtcbiAgfVxuXG4gIFV0aWxzLkV4dGVuZChSZXN1bHRzLCBVdGlscy5PYnNlcnZhYmxlKTtcblxuICBSZXN1bHRzLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyICRyZXN1bHRzID0gJChcbiAgICAgICc8dWwgY2xhc3M9XCJzZWxlY3QyLXJlc3VsdHNfX29wdGlvbnNcIiByb2xlPVwidHJlZVwiPjwvdWw+J1xuICAgICk7XG5cbiAgICBpZiAodGhpcy5vcHRpb25zLmdldCgnbXVsdGlwbGUnKSkge1xuICAgICAgJHJlc3VsdHMuYXR0cignYXJpYS1tdWx0aXNlbGVjdGFibGUnLCAndHJ1ZScpO1xuICAgIH1cblxuICAgIHRoaXMuJHJlc3VsdHMgPSAkcmVzdWx0cztcblxuICAgIHJldHVybiAkcmVzdWx0cztcbiAgfTtcblxuICBSZXN1bHRzLnByb3RvdHlwZS5jbGVhciA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLiRyZXN1bHRzLmVtcHR5KCk7XG4gIH07XG5cbiAgUmVzdWx0cy5wcm90b3R5cGUuZGlzcGxheU1lc3NhZ2UgPSBmdW5jdGlvbiAocGFyYW1zKSB7XG4gICAgdmFyIGVzY2FwZU1hcmt1cCA9IHRoaXMub3B0aW9ucy5nZXQoJ2VzY2FwZU1hcmt1cCcpO1xuXG4gICAgdGhpcy5jbGVhcigpO1xuICAgIHRoaXMuaGlkZUxvYWRpbmcoKTtcblxuICAgIHZhciAkbWVzc2FnZSA9ICQoXG4gICAgICAnPGxpIHJvbGU9XCJ0cmVlaXRlbVwiIGFyaWEtbGl2ZT1cImFzc2VydGl2ZVwiJyArXG4gICAgICAnIGNsYXNzPVwic2VsZWN0Mi1yZXN1bHRzX19vcHRpb25cIj48L2xpPidcbiAgICApO1xuXG4gICAgdmFyIG1lc3NhZ2UgPSB0aGlzLm9wdGlvbnMuZ2V0KCd0cmFuc2xhdGlvbnMnKS5nZXQocGFyYW1zLm1lc3NhZ2UpO1xuXG4gICAgJG1lc3NhZ2UuYXBwZW5kKFxuICAgICAgZXNjYXBlTWFya3VwKFxuICAgICAgICBtZXNzYWdlKHBhcmFtcy5hcmdzKVxuICAgICAgKVxuICAgICk7XG5cbiAgICAkbWVzc2FnZVswXS5jbGFzc05hbWUgKz0gJyBzZWxlY3QyLXJlc3VsdHNfX21lc3NhZ2UnO1xuXG4gICAgdGhpcy4kcmVzdWx0cy5hcHBlbmQoJG1lc3NhZ2UpO1xuICB9O1xuXG4gIFJlc3VsdHMucHJvdG90eXBlLmhpZGVNZXNzYWdlcyA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLiRyZXN1bHRzLmZpbmQoJy5zZWxlY3QyLXJlc3VsdHNfX21lc3NhZ2UnKS5yZW1vdmUoKTtcbiAgfTtcblxuICBSZXN1bHRzLnByb3RvdHlwZS5hcHBlbmQgPSBmdW5jdGlvbiAoZGF0YSkge1xuICAgIHRoaXMuaGlkZUxvYWRpbmcoKTtcblxuICAgIHZhciAkb3B0aW9ucyA9IFtdO1xuXG4gICAgaWYgKGRhdGEucmVzdWx0cyA9PSBudWxsIHx8IGRhdGEucmVzdWx0cy5sZW5ndGggPT09IDApIHtcbiAgICAgIGlmICh0aGlzLiRyZXN1bHRzLmNoaWxkcmVuKCkubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHRoaXMudHJpZ2dlcigncmVzdWx0czptZXNzYWdlJywge1xuICAgICAgICAgIG1lc3NhZ2U6ICdub1Jlc3VsdHMnXG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZGF0YS5yZXN1bHRzID0gdGhpcy5zb3J0KGRhdGEucmVzdWx0cyk7XG5cbiAgICBmb3IgKHZhciBkID0gMDsgZCA8IGRhdGEucmVzdWx0cy5sZW5ndGg7IGQrKykge1xuICAgICAgdmFyIGl0ZW0gPSBkYXRhLnJlc3VsdHNbZF07XG5cbiAgICAgIHZhciAkb3B0aW9uID0gdGhpcy5vcHRpb24oaXRlbSk7XG5cbiAgICAgICRvcHRpb25zLnB1c2goJG9wdGlvbik7XG4gICAgfVxuXG4gICAgdGhpcy4kcmVzdWx0cy5hcHBlbmQoJG9wdGlvbnMpO1xuICB9O1xuXG4gIFJlc3VsdHMucHJvdG90eXBlLnBvc2l0aW9uID0gZnVuY3Rpb24gKCRyZXN1bHRzLCAkZHJvcGRvd24pIHtcbiAgICB2YXIgJHJlc3VsdHNDb250YWluZXIgPSAkZHJvcGRvd24uZmluZCgnLnNlbGVjdDItcmVzdWx0cycpO1xuICAgICRyZXN1bHRzQ29udGFpbmVyLmFwcGVuZCgkcmVzdWx0cyk7XG4gIH07XG5cbiAgUmVzdWx0cy5wcm90b3R5cGUuc29ydCA9IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgdmFyIHNvcnRlciA9IHRoaXMub3B0aW9ucy5nZXQoJ3NvcnRlcicpO1xuXG4gICAgcmV0dXJuIHNvcnRlcihkYXRhKTtcbiAgfTtcblxuICBSZXN1bHRzLnByb3RvdHlwZS5oaWdobGlnaHRGaXJzdEl0ZW0gPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyICRvcHRpb25zID0gdGhpcy4kcmVzdWx0c1xuICAgICAgLmZpbmQoJy5zZWxlY3QyLXJlc3VsdHNfX29wdGlvblthcmlhLXNlbGVjdGVkXScpO1xuXG4gICAgdmFyICRzZWxlY3RlZCA9ICRvcHRpb25zLmZpbHRlcignW2FyaWEtc2VsZWN0ZWQ9dHJ1ZV0nKTtcblxuICAgIC8vIENoZWNrIGlmIHRoZXJlIGFyZSBhbnkgc2VsZWN0ZWQgb3B0aW9uc1xuICAgIGlmICgkc2VsZWN0ZWQubGVuZ3RoID4gMCkge1xuICAgICAgLy8gSWYgdGhlcmUgYXJlIHNlbGVjdGVkIG9wdGlvbnMsIGhpZ2hsaWdodCB0aGUgZmlyc3RcbiAgICAgICRzZWxlY3RlZC5maXJzdCgpLnRyaWdnZXIoJ21vdXNlZW50ZXInKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gSWYgdGhlcmUgYXJlIG5vIHNlbGVjdGVkIG9wdGlvbnMsIGhpZ2hsaWdodCB0aGUgZmlyc3Qgb3B0aW9uXG4gICAgICAvLyBpbiB0aGUgZHJvcGRvd25cbiAgICAgICRvcHRpb25zLmZpcnN0KCkudHJpZ2dlcignbW91c2VlbnRlcicpO1xuICAgIH1cblxuICAgIHRoaXMuZW5zdXJlSGlnaGxpZ2h0VmlzaWJsZSgpO1xuICB9O1xuXG4gIFJlc3VsdHMucHJvdG90eXBlLnNldENsYXNzZXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgdGhpcy5kYXRhLmN1cnJlbnQoZnVuY3Rpb24gKHNlbGVjdGVkKSB7XG4gICAgICB2YXIgc2VsZWN0ZWRJZHMgPSAkLm1hcChzZWxlY3RlZCwgZnVuY3Rpb24gKHMpIHtcbiAgICAgICAgcmV0dXJuIHMuaWQudG9TdHJpbmcoKTtcbiAgICAgIH0pO1xuXG4gICAgICB2YXIgJG9wdGlvbnMgPSBzZWxmLiRyZXN1bHRzXG4gICAgICAgIC5maW5kKCcuc2VsZWN0Mi1yZXN1bHRzX19vcHRpb25bYXJpYS1zZWxlY3RlZF0nKTtcblxuICAgICAgJG9wdGlvbnMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciAkb3B0aW9uID0gJCh0aGlzKTtcblxuICAgICAgICB2YXIgaXRlbSA9IFV0aWxzLkdldERhdGEodGhpcywgJ2RhdGEnKTtcblxuICAgICAgICAvLyBpZCBuZWVkcyB0byBiZSBjb252ZXJ0ZWQgdG8gYSBzdHJpbmcgd2hlbiBjb21wYXJpbmdcbiAgICAgICAgdmFyIGlkID0gJycgKyBpdGVtLmlkO1xuXG4gICAgICAgIGlmICgoaXRlbS5lbGVtZW50ICE9IG51bGwgJiYgaXRlbS5lbGVtZW50LnNlbGVjdGVkKSB8fFxuICAgICAgICAgICAgKGl0ZW0uZWxlbWVudCA9PSBudWxsICYmICQuaW5BcnJheShpZCwgc2VsZWN0ZWRJZHMpID4gLTEpKSB7XG4gICAgICAgICAgJG9wdGlvbi5hdHRyKCdhcmlhLXNlbGVjdGVkJywgJ3RydWUnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAkb3B0aW9uLmF0dHIoJ2FyaWEtc2VsZWN0ZWQnLCAnZmFsc2UnKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICB9KTtcbiAgfTtcblxuICBSZXN1bHRzLnByb3RvdHlwZS5zaG93TG9hZGluZyA9IGZ1bmN0aW9uIChwYXJhbXMpIHtcbiAgICB0aGlzLmhpZGVMb2FkaW5nKCk7XG5cbiAgICB2YXIgbG9hZGluZ01vcmUgPSB0aGlzLm9wdGlvbnMuZ2V0KCd0cmFuc2xhdGlvbnMnKS5nZXQoJ3NlYXJjaGluZycpO1xuXG4gICAgdmFyIGxvYWRpbmcgPSB7XG4gICAgICBkaXNhYmxlZDogdHJ1ZSxcbiAgICAgIGxvYWRpbmc6IHRydWUsXG4gICAgICB0ZXh0OiBsb2FkaW5nTW9yZShwYXJhbXMpXG4gICAgfTtcbiAgICB2YXIgJGxvYWRpbmcgPSB0aGlzLm9wdGlvbihsb2FkaW5nKTtcbiAgICAkbG9hZGluZy5jbGFzc05hbWUgKz0gJyBsb2FkaW5nLXJlc3VsdHMnO1xuXG4gICAgdGhpcy4kcmVzdWx0cy5wcmVwZW5kKCRsb2FkaW5nKTtcbiAgfTtcblxuICBSZXN1bHRzLnByb3RvdHlwZS5oaWRlTG9hZGluZyA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLiRyZXN1bHRzLmZpbmQoJy5sb2FkaW5nLXJlc3VsdHMnKS5yZW1vdmUoKTtcbiAgfTtcblxuICBSZXN1bHRzLnByb3RvdHlwZS5vcHRpb24gPSBmdW5jdGlvbiAoZGF0YSkge1xuICAgIHZhciBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIG9wdGlvbi5jbGFzc05hbWUgPSAnc2VsZWN0Mi1yZXN1bHRzX19vcHRpb24nO1xuXG4gICAgdmFyIGF0dHJzID0ge1xuICAgICAgJ3JvbGUnOiAndHJlZWl0ZW0nLFxuICAgICAgJ2FyaWEtc2VsZWN0ZWQnOiAnZmFsc2UnXG4gICAgfTtcblxuICAgIGlmIChkYXRhLmRpc2FibGVkKSB7XG4gICAgICBkZWxldGUgYXR0cnNbJ2FyaWEtc2VsZWN0ZWQnXTtcbiAgICAgIGF0dHJzWydhcmlhLWRpc2FibGVkJ10gPSAndHJ1ZSc7XG4gICAgfVxuXG4gICAgaWYgKGRhdGEuaWQgPT0gbnVsbCkge1xuICAgICAgZGVsZXRlIGF0dHJzWydhcmlhLXNlbGVjdGVkJ107XG4gICAgfVxuXG4gICAgaWYgKGRhdGEuX3Jlc3VsdElkICE9IG51bGwpIHtcbiAgICAgIG9wdGlvbi5pZCA9IGRhdGEuX3Jlc3VsdElkO1xuICAgIH1cblxuICAgIGlmIChkYXRhLnRpdGxlKSB7XG4gICAgICBvcHRpb24udGl0bGUgPSBkYXRhLnRpdGxlO1xuICAgIH1cblxuICAgIGlmIChkYXRhLmNoaWxkcmVuKSB7XG4gICAgICBhdHRycy5yb2xlID0gJ2dyb3VwJztcbiAgICAgIGF0dHJzWydhcmlhLWxhYmVsJ10gPSBkYXRhLnRleHQ7XG4gICAgICBkZWxldGUgYXR0cnNbJ2FyaWEtc2VsZWN0ZWQnXTtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBhdHRyIGluIGF0dHJzKSB7XG4gICAgICB2YXIgdmFsID0gYXR0cnNbYXR0cl07XG5cbiAgICAgIG9wdGlvbi5zZXRBdHRyaWJ1dGUoYXR0ciwgdmFsKTtcbiAgICB9XG5cbiAgICBpZiAoZGF0YS5jaGlsZHJlbikge1xuICAgICAgdmFyICRvcHRpb24gPSAkKG9wdGlvbik7XG5cbiAgICAgIHZhciBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0cm9uZycpO1xuICAgICAgbGFiZWwuY2xhc3NOYW1lID0gJ3NlbGVjdDItcmVzdWx0c19fZ3JvdXAnO1xuXG4gICAgICB2YXIgJGxhYmVsID0gJChsYWJlbCk7XG4gICAgICB0aGlzLnRlbXBsYXRlKGRhdGEsIGxhYmVsKTtcblxuICAgICAgdmFyICRjaGlsZHJlbiA9IFtdO1xuXG4gICAgICBmb3IgKHZhciBjID0gMDsgYyA8IGRhdGEuY2hpbGRyZW4ubGVuZ3RoOyBjKyspIHtcbiAgICAgICAgdmFyIGNoaWxkID0gZGF0YS5jaGlsZHJlbltjXTtcblxuICAgICAgICB2YXIgJGNoaWxkID0gdGhpcy5vcHRpb24oY2hpbGQpO1xuXG4gICAgICAgICRjaGlsZHJlbi5wdXNoKCRjaGlsZCk7XG4gICAgICB9XG5cbiAgICAgIHZhciAkY2hpbGRyZW5Db250YWluZXIgPSAkKCc8dWw+PC91bD4nLCB7XG4gICAgICAgICdjbGFzcyc6ICdzZWxlY3QyLXJlc3VsdHNfX29wdGlvbnMgc2VsZWN0Mi1yZXN1bHRzX19vcHRpb25zLS1uZXN0ZWQnXG4gICAgICB9KTtcblxuICAgICAgJGNoaWxkcmVuQ29udGFpbmVyLmFwcGVuZCgkY2hpbGRyZW4pO1xuXG4gICAgICAkb3B0aW9uLmFwcGVuZChsYWJlbCk7XG4gICAgICAkb3B0aW9uLmFwcGVuZCgkY2hpbGRyZW5Db250YWluZXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnRlbXBsYXRlKGRhdGEsIG9wdGlvbik7XG4gICAgfVxuXG4gICAgVXRpbHMuU3RvcmVEYXRhKG9wdGlvbiwgJ2RhdGEnLCBkYXRhKTtcblxuICAgIHJldHVybiBvcHRpb247XG4gIH07XG5cbiAgUmVzdWx0cy5wcm90b3R5cGUuYmluZCA9IGZ1bmN0aW9uIChjb250YWluZXIsICRjb250YWluZXIpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICB2YXIgaWQgPSBjb250YWluZXIuaWQgKyAnLXJlc3VsdHMnO1xuXG4gICAgdGhpcy4kcmVzdWx0cy5hdHRyKCdpZCcsIGlkKTtcblxuICAgIGNvbnRhaW5lci5vbigncmVzdWx0czphbGwnLCBmdW5jdGlvbiAocGFyYW1zKSB7XG4gICAgICBzZWxmLmNsZWFyKCk7XG4gICAgICBzZWxmLmFwcGVuZChwYXJhbXMuZGF0YSk7XG5cbiAgICAgIGlmIChjb250YWluZXIuaXNPcGVuKCkpIHtcbiAgICAgICAgc2VsZi5zZXRDbGFzc2VzKCk7XG4gICAgICAgIHNlbGYuaGlnaGxpZ2h0Rmlyc3RJdGVtKCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBjb250YWluZXIub24oJ3Jlc3VsdHM6YXBwZW5kJywgZnVuY3Rpb24gKHBhcmFtcykge1xuICAgICAgc2VsZi5hcHBlbmQocGFyYW1zLmRhdGEpO1xuXG4gICAgICBpZiAoY29udGFpbmVyLmlzT3BlbigpKSB7XG4gICAgICAgIHNlbGYuc2V0Q2xhc3NlcygpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29udGFpbmVyLm9uKCdxdWVyeScsIGZ1bmN0aW9uIChwYXJhbXMpIHtcbiAgICAgIHNlbGYuaGlkZU1lc3NhZ2VzKCk7XG4gICAgICBzZWxmLnNob3dMb2FkaW5nKHBhcmFtcyk7XG4gICAgfSk7XG5cbiAgICBjb250YWluZXIub24oJ3NlbGVjdCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICghY29udGFpbmVyLmlzT3BlbigpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgc2VsZi5zZXRDbGFzc2VzKCk7XG4gICAgICBzZWxmLmhpZ2hsaWdodEZpcnN0SXRlbSgpO1xuICAgIH0pO1xuXG4gICAgY29udGFpbmVyLm9uKCd1bnNlbGVjdCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICghY29udGFpbmVyLmlzT3BlbigpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgc2VsZi5zZXRDbGFzc2VzKCk7XG4gICAgICBzZWxmLmhpZ2hsaWdodEZpcnN0SXRlbSgpO1xuICAgIH0pO1xuXG4gICAgY29udGFpbmVyLm9uKCdvcGVuJywgZnVuY3Rpb24gKCkge1xuICAgICAgLy8gV2hlbiB0aGUgZHJvcGRvd24gaXMgb3BlbiwgYXJpYS1leHBlbmRlZD1cInRydWVcIlxuICAgICAgc2VsZi4kcmVzdWx0cy5hdHRyKCdhcmlhLWV4cGFuZGVkJywgJ3RydWUnKTtcbiAgICAgIHNlbGYuJHJlc3VsdHMuYXR0cignYXJpYS1oaWRkZW4nLCAnZmFsc2UnKTtcblxuICAgICAgc2VsZi5zZXRDbGFzc2VzKCk7XG4gICAgICBzZWxmLmVuc3VyZUhpZ2hsaWdodFZpc2libGUoKTtcbiAgICB9KTtcblxuICAgIGNvbnRhaW5lci5vbignY2xvc2UnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBXaGVuIHRoZSBkcm9wZG93biBpcyBjbG9zZWQsIGFyaWEtZXhwZW5kZWQ9XCJmYWxzZVwiXG4gICAgICBzZWxmLiRyZXN1bHRzLmF0dHIoJ2FyaWEtZXhwYW5kZWQnLCAnZmFsc2UnKTtcbiAgICAgIHNlbGYuJHJlc3VsdHMuYXR0cignYXJpYS1oaWRkZW4nLCAndHJ1ZScpO1xuICAgICAgc2VsZi4kcmVzdWx0cy5yZW1vdmVBdHRyKCdhcmlhLWFjdGl2ZWRlc2NlbmRhbnQnKTtcbiAgICB9KTtcblxuICAgIGNvbnRhaW5lci5vbigncmVzdWx0czp0b2dnbGUnLCBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgJGhpZ2hsaWdodGVkID0gc2VsZi5nZXRIaWdobGlnaHRlZFJlc3VsdHMoKTtcblxuICAgICAgaWYgKCRoaWdobGlnaHRlZC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAkaGlnaGxpZ2h0ZWQudHJpZ2dlcignbW91c2V1cCcpO1xuICAgIH0pO1xuXG4gICAgY29udGFpbmVyLm9uKCdyZXN1bHRzOnNlbGVjdCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciAkaGlnaGxpZ2h0ZWQgPSBzZWxmLmdldEhpZ2hsaWdodGVkUmVzdWx0cygpO1xuXG4gICAgICBpZiAoJGhpZ2hsaWdodGVkLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHZhciBkYXRhID0gVXRpbHMuR2V0RGF0YSgkaGlnaGxpZ2h0ZWRbMF0sICdkYXRhJyk7XG5cbiAgICAgIGlmICgkaGlnaGxpZ2h0ZWQuYXR0cignYXJpYS1zZWxlY3RlZCcpID09ICd0cnVlJykge1xuICAgICAgICBzZWxmLnRyaWdnZXIoJ2Nsb3NlJywge30pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2VsZi50cmlnZ2VyKCdzZWxlY3QnLCB7XG4gICAgICAgICAgZGF0YTogZGF0YVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnRhaW5lci5vbigncmVzdWx0czpwcmV2aW91cycsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciAkaGlnaGxpZ2h0ZWQgPSBzZWxmLmdldEhpZ2hsaWdodGVkUmVzdWx0cygpO1xuXG4gICAgICB2YXIgJG9wdGlvbnMgPSBzZWxmLiRyZXN1bHRzLmZpbmQoJ1thcmlhLXNlbGVjdGVkXScpO1xuXG4gICAgICB2YXIgY3VycmVudEluZGV4ID0gJG9wdGlvbnMuaW5kZXgoJGhpZ2hsaWdodGVkKTtcblxuICAgICAgLy8gSWYgd2UgYXJlIGFscmVhZHkgYXQgdGUgdG9wLCBkb24ndCBtb3ZlIGZ1cnRoZXJcbiAgICAgIC8vIElmIG5vIG9wdGlvbnMsIGN1cnJlbnRJbmRleCB3aWxsIGJlIC0xXG4gICAgICBpZiAoY3VycmVudEluZGV4IDw9IDApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB2YXIgbmV4dEluZGV4ID0gY3VycmVudEluZGV4IC0gMTtcblxuICAgICAgLy8gSWYgbm9uZSBhcmUgaGlnaGxpZ2h0ZWQsIGhpZ2hsaWdodCB0aGUgZmlyc3RcbiAgICAgIGlmICgkaGlnaGxpZ2h0ZWQubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIG5leHRJbmRleCA9IDA7XG4gICAgICB9XG5cbiAgICAgIHZhciAkbmV4dCA9ICRvcHRpb25zLmVxKG5leHRJbmRleCk7XG5cbiAgICAgICRuZXh0LnRyaWdnZXIoJ21vdXNlZW50ZXInKTtcblxuICAgICAgdmFyIGN1cnJlbnRPZmZzZXQgPSBzZWxmLiRyZXN1bHRzLm9mZnNldCgpLnRvcDtcbiAgICAgIHZhciBuZXh0VG9wID0gJG5leHQub2Zmc2V0KCkudG9wO1xuICAgICAgdmFyIG5leHRPZmZzZXQgPSBzZWxmLiRyZXN1bHRzLnNjcm9sbFRvcCgpICsgKG5leHRUb3AgLSBjdXJyZW50T2Zmc2V0KTtcblxuICAgICAgaWYgKG5leHRJbmRleCA9PT0gMCkge1xuICAgICAgICBzZWxmLiRyZXN1bHRzLnNjcm9sbFRvcCgwKTtcbiAgICAgIH0gZWxzZSBpZiAobmV4dFRvcCAtIGN1cnJlbnRPZmZzZXQgPCAwKSB7XG4gICAgICAgIHNlbGYuJHJlc3VsdHMuc2Nyb2xsVG9wKG5leHRPZmZzZXQpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29udGFpbmVyLm9uKCdyZXN1bHRzOm5leHQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgJGhpZ2hsaWdodGVkID0gc2VsZi5nZXRIaWdobGlnaHRlZFJlc3VsdHMoKTtcblxuICAgICAgdmFyICRvcHRpb25zID0gc2VsZi4kcmVzdWx0cy5maW5kKCdbYXJpYS1zZWxlY3RlZF0nKTtcblxuICAgICAgdmFyIGN1cnJlbnRJbmRleCA9ICRvcHRpb25zLmluZGV4KCRoaWdobGlnaHRlZCk7XG5cbiAgICAgIHZhciBuZXh0SW5kZXggPSBjdXJyZW50SW5kZXggKyAxO1xuXG4gICAgICAvLyBJZiB3ZSBhcmUgYXQgdGhlIGxhc3Qgb3B0aW9uLCBzdGF5IHRoZXJlXG4gICAgICBpZiAobmV4dEluZGV4ID49ICRvcHRpb25zLmxlbmd0aCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHZhciAkbmV4dCA9ICRvcHRpb25zLmVxKG5leHRJbmRleCk7XG5cbiAgICAgICRuZXh0LnRyaWdnZXIoJ21vdXNlZW50ZXInKTtcblxuICAgICAgdmFyIGN1cnJlbnRPZmZzZXQgPSBzZWxmLiRyZXN1bHRzLm9mZnNldCgpLnRvcCArXG4gICAgICAgIHNlbGYuJHJlc3VsdHMub3V0ZXJIZWlnaHQoZmFsc2UpO1xuICAgICAgdmFyIG5leHRCb3R0b20gPSAkbmV4dC5vZmZzZXQoKS50b3AgKyAkbmV4dC5vdXRlckhlaWdodChmYWxzZSk7XG4gICAgICB2YXIgbmV4dE9mZnNldCA9IHNlbGYuJHJlc3VsdHMuc2Nyb2xsVG9wKCkgKyBuZXh0Qm90dG9tIC0gY3VycmVudE9mZnNldDtcblxuICAgICAgaWYgKG5leHRJbmRleCA9PT0gMCkge1xuICAgICAgICBzZWxmLiRyZXN1bHRzLnNjcm9sbFRvcCgwKTtcbiAgICAgIH0gZWxzZSBpZiAobmV4dEJvdHRvbSA+IGN1cnJlbnRPZmZzZXQpIHtcbiAgICAgICAgc2VsZi4kcmVzdWx0cy5zY3JvbGxUb3AobmV4dE9mZnNldCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBjb250YWluZXIub24oJ3Jlc3VsdHM6Zm9jdXMnLCBmdW5jdGlvbiAocGFyYW1zKSB7XG4gICAgICBwYXJhbXMuZWxlbWVudC5hZGRDbGFzcygnc2VsZWN0Mi1yZXN1bHRzX19vcHRpb24tLWhpZ2hsaWdodGVkJyk7XG4gICAgfSk7XG5cbiAgICBjb250YWluZXIub24oJ3Jlc3VsdHM6bWVzc2FnZScsIGZ1bmN0aW9uIChwYXJhbXMpIHtcbiAgICAgIHNlbGYuZGlzcGxheU1lc3NhZ2UocGFyYW1zKTtcbiAgICB9KTtcblxuICAgIGlmICgkLmZuLm1vdXNld2hlZWwpIHtcbiAgICAgIHRoaXMuJHJlc3VsdHMub24oJ21vdXNld2hlZWwnLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICB2YXIgdG9wID0gc2VsZi4kcmVzdWx0cy5zY3JvbGxUb3AoKTtcblxuICAgICAgICB2YXIgYm90dG9tID0gc2VsZi4kcmVzdWx0cy5nZXQoMCkuc2Nyb2xsSGVpZ2h0IC0gdG9wICsgZS5kZWx0YVk7XG5cbiAgICAgICAgdmFyIGlzQXRUb3AgPSBlLmRlbHRhWSA+IDAgJiYgdG9wIC0gZS5kZWx0YVkgPD0gMDtcbiAgICAgICAgdmFyIGlzQXRCb3R0b20gPSBlLmRlbHRhWSA8IDAgJiYgYm90dG9tIDw9IHNlbGYuJHJlc3VsdHMuaGVpZ2h0KCk7XG5cbiAgICAgICAgaWYgKGlzQXRUb3ApIHtcbiAgICAgICAgICBzZWxmLiRyZXN1bHRzLnNjcm9sbFRvcCgwKTtcblxuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICB9IGVsc2UgaWYgKGlzQXRCb3R0b20pIHtcbiAgICAgICAgICBzZWxmLiRyZXN1bHRzLnNjcm9sbFRvcChcbiAgICAgICAgICAgIHNlbGYuJHJlc3VsdHMuZ2V0KDApLnNjcm9sbEhlaWdodCAtIHNlbGYuJHJlc3VsdHMuaGVpZ2h0KClcbiAgICAgICAgICApO1xuXG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHRoaXMuJHJlc3VsdHMub24oJ21vdXNldXAnLCAnLnNlbGVjdDItcmVzdWx0c19fb3B0aW9uW2FyaWEtc2VsZWN0ZWRdJyxcbiAgICAgIGZ1bmN0aW9uIChldnQpIHtcbiAgICAgIHZhciAkdGhpcyA9ICQodGhpcyk7XG5cbiAgICAgIHZhciBkYXRhID0gVXRpbHMuR2V0RGF0YSh0aGlzLCAnZGF0YScpO1xuXG4gICAgICBpZiAoJHRoaXMuYXR0cignYXJpYS1zZWxlY3RlZCcpID09PSAndHJ1ZScpIHtcbiAgICAgICAgaWYgKHNlbGYub3B0aW9ucy5nZXQoJ211bHRpcGxlJykpIHtcbiAgICAgICAgICBzZWxmLnRyaWdnZXIoJ3Vuc2VsZWN0Jywge1xuICAgICAgICAgICAgb3JpZ2luYWxFdmVudDogZXZ0LFxuICAgICAgICAgICAgZGF0YTogZGF0YVxuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNlbGYudHJpZ2dlcignY2xvc2UnLCB7fSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHNlbGYudHJpZ2dlcignc2VsZWN0Jywge1xuICAgICAgICBvcmlnaW5hbEV2ZW50OiBldnQsXG4gICAgICAgIGRhdGE6IGRhdGFcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgdGhpcy4kcmVzdWx0cy5vbignbW91c2VlbnRlcicsICcuc2VsZWN0Mi1yZXN1bHRzX19vcHRpb25bYXJpYS1zZWxlY3RlZF0nLFxuICAgICAgZnVuY3Rpb24gKGV2dCkge1xuICAgICAgdmFyIGRhdGEgPSBVdGlscy5HZXREYXRhKHRoaXMsICdkYXRhJyk7XG5cbiAgICAgIHNlbGYuZ2V0SGlnaGxpZ2h0ZWRSZXN1bHRzKClcbiAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ3NlbGVjdDItcmVzdWx0c19fb3B0aW9uLS1oaWdobGlnaHRlZCcpO1xuXG4gICAgICBzZWxmLnRyaWdnZXIoJ3Jlc3VsdHM6Zm9jdXMnLCB7XG4gICAgICAgIGRhdGE6IGRhdGEsXG4gICAgICAgIGVsZW1lbnQ6ICQodGhpcylcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xuXG4gIFJlc3VsdHMucHJvdG90eXBlLmdldEhpZ2hsaWdodGVkUmVzdWx0cyA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgJGhpZ2hsaWdodGVkID0gdGhpcy4kcmVzdWx0c1xuICAgIC5maW5kKCcuc2VsZWN0Mi1yZXN1bHRzX19vcHRpb24tLWhpZ2hsaWdodGVkJyk7XG5cbiAgICByZXR1cm4gJGhpZ2hsaWdodGVkO1xuICB9O1xuXG4gIFJlc3VsdHMucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy4kcmVzdWx0cy5yZW1vdmUoKTtcbiAgfTtcblxuICBSZXN1bHRzLnByb3RvdHlwZS5lbnN1cmVIaWdobGlnaHRWaXNpYmxlID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciAkaGlnaGxpZ2h0ZWQgPSB0aGlzLmdldEhpZ2hsaWdodGVkUmVzdWx0cygpO1xuXG4gICAgaWYgKCRoaWdobGlnaHRlZC5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgJG9wdGlvbnMgPSB0aGlzLiRyZXN1bHRzLmZpbmQoJ1thcmlhLXNlbGVjdGVkXScpO1xuXG4gICAgdmFyIGN1cnJlbnRJbmRleCA9ICRvcHRpb25zLmluZGV4KCRoaWdobGlnaHRlZCk7XG5cbiAgICB2YXIgY3VycmVudE9mZnNldCA9IHRoaXMuJHJlc3VsdHMub2Zmc2V0KCkudG9wO1xuICAgIHZhciBuZXh0VG9wID0gJGhpZ2hsaWdodGVkLm9mZnNldCgpLnRvcDtcbiAgICB2YXIgbmV4dE9mZnNldCA9IHRoaXMuJHJlc3VsdHMuc2Nyb2xsVG9wKCkgKyAobmV4dFRvcCAtIGN1cnJlbnRPZmZzZXQpO1xuXG4gICAgdmFyIG9mZnNldERlbHRhID0gbmV4dFRvcCAtIGN1cnJlbnRPZmZzZXQ7XG4gICAgbmV4dE9mZnNldCAtPSAkaGlnaGxpZ2h0ZWQub3V0ZXJIZWlnaHQoZmFsc2UpICogMjtcblxuICAgIGlmIChjdXJyZW50SW5kZXggPD0gMikge1xuICAgICAgdGhpcy4kcmVzdWx0cy5zY3JvbGxUb3AoMCk7XG4gICAgfSBlbHNlIGlmIChvZmZzZXREZWx0YSA+IHRoaXMuJHJlc3VsdHMub3V0ZXJIZWlnaHQoKSB8fCBvZmZzZXREZWx0YSA8IDApIHtcbiAgICAgIHRoaXMuJHJlc3VsdHMuc2Nyb2xsVG9wKG5leHRPZmZzZXQpO1xuICAgIH1cbiAgfTtcblxuICBSZXN1bHRzLnByb3RvdHlwZS50ZW1wbGF0ZSA9IGZ1bmN0aW9uIChyZXN1bHQsIGNvbnRhaW5lcikge1xuICAgIHZhciB0ZW1wbGF0ZSA9IHRoaXMub3B0aW9ucy5nZXQoJ3RlbXBsYXRlUmVzdWx0Jyk7XG4gICAgdmFyIGVzY2FwZU1hcmt1cCA9IHRoaXMub3B0aW9ucy5nZXQoJ2VzY2FwZU1hcmt1cCcpO1xuXG4gICAgdmFyIGNvbnRlbnQgPSB0ZW1wbGF0ZShyZXN1bHQsIGNvbnRhaW5lcik7XG5cbiAgICBpZiAoY29udGVudCA9PSBudWxsKSB7XG4gICAgICBjb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgY29udGFpbmVyLmlubmVySFRNTCA9IGVzY2FwZU1hcmt1cChjb250ZW50KTtcbiAgICB9IGVsc2Uge1xuICAgICAgJChjb250YWluZXIpLmFwcGVuZChjb250ZW50KTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIFJlc3VsdHM7XG59KTtcblxuUzIuZGVmaW5lKCdzZWxlY3QyL2tleXMnLFtcblxuXSwgZnVuY3Rpb24gKCkge1xuICB2YXIgS0VZUyA9IHtcbiAgICBCQUNLU1BBQ0U6IDgsXG4gICAgVEFCOiA5LFxuICAgIEVOVEVSOiAxMyxcbiAgICBTSElGVDogMTYsXG4gICAgQ1RSTDogMTcsXG4gICAgQUxUOiAxOCxcbiAgICBFU0M6IDI3LFxuICAgIFNQQUNFOiAzMixcbiAgICBQQUdFX1VQOiAzMyxcbiAgICBQQUdFX0RPV046IDM0LFxuICAgIEVORDogMzUsXG4gICAgSE9NRTogMzYsXG4gICAgTEVGVDogMzcsXG4gICAgVVA6IDM4LFxuICAgIFJJR0hUOiAzOSxcbiAgICBET1dOOiA0MCxcbiAgICBERUxFVEU6IDQ2XG4gIH07XG5cbiAgcmV0dXJuIEtFWVM7XG59KTtcblxuUzIuZGVmaW5lKCdzZWxlY3QyL3NlbGVjdGlvbi9iYXNlJyxbXG4gICdqcXVlcnknLFxuICAnLi4vdXRpbHMnLFxuICAnLi4va2V5cydcbl0sIGZ1bmN0aW9uICgkLCBVdGlscywgS0VZUykge1xuICBmdW5jdGlvbiBCYXNlU2VsZWN0aW9uICgkZWxlbWVudCwgb3B0aW9ucykge1xuICAgIHRoaXMuJGVsZW1lbnQgPSAkZWxlbWVudDtcbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuXG4gICAgQmFzZVNlbGVjdGlvbi5fX3N1cGVyX18uY29uc3RydWN0b3IuY2FsbCh0aGlzKTtcbiAgfVxuXG4gIFV0aWxzLkV4dGVuZChCYXNlU2VsZWN0aW9uLCBVdGlscy5PYnNlcnZhYmxlKTtcblxuICBCYXNlU2VsZWN0aW9uLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyICRzZWxlY3Rpb24gPSAkKFxuICAgICAgJzxzcGFuIGNsYXNzPVwic2VsZWN0Mi1zZWxlY3Rpb25cIiByb2xlPVwiY29tYm9ib3hcIiAnICtcbiAgICAgICcgYXJpYS1oYXNwb3B1cD1cInRydWVcIiBhcmlhLWV4cGFuZGVkPVwiZmFsc2VcIj4nICtcbiAgICAgICc8L3NwYW4+J1xuICAgICk7XG5cbiAgICB0aGlzLl90YWJpbmRleCA9IDA7XG5cbiAgICBpZiAoVXRpbHMuR2V0RGF0YSh0aGlzLiRlbGVtZW50WzBdLCAnb2xkLXRhYmluZGV4JykgIT0gbnVsbCkge1xuICAgICAgdGhpcy5fdGFiaW5kZXggPSBVdGlscy5HZXREYXRhKHRoaXMuJGVsZW1lbnRbMF0sICdvbGQtdGFiaW5kZXgnKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuJGVsZW1lbnQuYXR0cigndGFiaW5kZXgnKSAhPSBudWxsKSB7XG4gICAgICB0aGlzLl90YWJpbmRleCA9IHRoaXMuJGVsZW1lbnQuYXR0cigndGFiaW5kZXgnKTtcbiAgICB9XG5cbiAgICAkc2VsZWN0aW9uLmF0dHIoJ3RpdGxlJywgdGhpcy4kZWxlbWVudC5hdHRyKCd0aXRsZScpKTtcbiAgICAkc2VsZWN0aW9uLmF0dHIoJ3RhYmluZGV4JywgdGhpcy5fdGFiaW5kZXgpO1xuXG4gICAgdGhpcy4kc2VsZWN0aW9uID0gJHNlbGVjdGlvbjtcblxuICAgIHJldHVybiAkc2VsZWN0aW9uO1xuICB9O1xuXG4gIEJhc2VTZWxlY3Rpb24ucHJvdG90eXBlLmJpbmQgPSBmdW5jdGlvbiAoY29udGFpbmVyLCAkY29udGFpbmVyKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgdmFyIGlkID0gY29udGFpbmVyLmlkICsgJy1jb250YWluZXInO1xuICAgIHZhciByZXN1bHRzSWQgPSBjb250YWluZXIuaWQgKyAnLXJlc3VsdHMnO1xuXG4gICAgdGhpcy5jb250YWluZXIgPSBjb250YWluZXI7XG5cbiAgICB0aGlzLiRzZWxlY3Rpb24ub24oJ2ZvY3VzJywgZnVuY3Rpb24gKGV2dCkge1xuICAgICAgc2VsZi50cmlnZ2VyKCdmb2N1cycsIGV2dCk7XG4gICAgfSk7XG5cbiAgICB0aGlzLiRzZWxlY3Rpb24ub24oJ2JsdXInLCBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICBzZWxmLl9oYW5kbGVCbHVyKGV2dCk7XG4gICAgfSk7XG5cbiAgICB0aGlzLiRzZWxlY3Rpb24ub24oJ2tleWRvd24nLCBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICBzZWxmLnRyaWdnZXIoJ2tleXByZXNzJywgZXZ0KTtcblxuICAgICAgaWYgKGV2dC53aGljaCA9PT0gS0VZUy5TUEFDRSkge1xuICAgICAgICBldnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnRhaW5lci5vbigncmVzdWx0czpmb2N1cycsIGZ1bmN0aW9uIChwYXJhbXMpIHtcbiAgICAgIHNlbGYuJHNlbGVjdGlvbi5hdHRyKCdhcmlhLWFjdGl2ZWRlc2NlbmRhbnQnLCBwYXJhbXMuZGF0YS5fcmVzdWx0SWQpO1xuICAgIH0pO1xuXG4gICAgY29udGFpbmVyLm9uKCdzZWxlY3Rpb246dXBkYXRlJywgZnVuY3Rpb24gKHBhcmFtcykge1xuICAgICAgc2VsZi51cGRhdGUocGFyYW1zLmRhdGEpO1xuICAgIH0pO1xuXG4gICAgY29udGFpbmVyLm9uKCdvcGVuJywgZnVuY3Rpb24gKCkge1xuICAgICAgLy8gV2hlbiB0aGUgZHJvcGRvd24gaXMgb3BlbiwgYXJpYS1leHBhbmRlZD1cInRydWVcIlxuICAgICAgc2VsZi4kc2VsZWN0aW9uLmF0dHIoJ2FyaWEtZXhwYW5kZWQnLCAndHJ1ZScpO1xuICAgICAgc2VsZi4kc2VsZWN0aW9uLmF0dHIoJ2FyaWEtb3ducycsIHJlc3VsdHNJZCk7XG5cbiAgICAgIHNlbGYuX2F0dGFjaENsb3NlSGFuZGxlcihjb250YWluZXIpO1xuICAgIH0pO1xuXG4gICAgY29udGFpbmVyLm9uKCdjbG9zZScsIGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vIFdoZW4gdGhlIGRyb3Bkb3duIGlzIGNsb3NlZCwgYXJpYS1leHBhbmRlZD1cImZhbHNlXCJcbiAgICAgIHNlbGYuJHNlbGVjdGlvbi5hdHRyKCdhcmlhLWV4cGFuZGVkJywgJ2ZhbHNlJyk7XG4gICAgICBzZWxmLiRzZWxlY3Rpb24ucmVtb3ZlQXR0cignYXJpYS1hY3RpdmVkZXNjZW5kYW50Jyk7XG4gICAgICBzZWxmLiRzZWxlY3Rpb24ucmVtb3ZlQXR0cignYXJpYS1vd25zJyk7XG5cbiAgICAgIHNlbGYuJHNlbGVjdGlvbi5mb2N1cygpO1xuICAgICAgd2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICBzZWxmLiRzZWxlY3Rpb24uZm9jdXMoKTtcbiAgICAgIH0sIDApO1xuXG4gICAgICBzZWxmLl9kZXRhY2hDbG9zZUhhbmRsZXIoY29udGFpbmVyKTtcbiAgICB9KTtcblxuICAgIGNvbnRhaW5lci5vbignZW5hYmxlJywgZnVuY3Rpb24gKCkge1xuICAgICAgc2VsZi4kc2VsZWN0aW9uLmF0dHIoJ3RhYmluZGV4Jywgc2VsZi5fdGFiaW5kZXgpO1xuICAgIH0pO1xuXG4gICAgY29udGFpbmVyLm9uKCdkaXNhYmxlJywgZnVuY3Rpb24gKCkge1xuICAgICAgc2VsZi4kc2VsZWN0aW9uLmF0dHIoJ3RhYmluZGV4JywgJy0xJyk7XG4gICAgfSk7XG4gIH07XG5cbiAgQmFzZVNlbGVjdGlvbi5wcm90b3R5cGUuX2hhbmRsZUJsdXIgPSBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgLy8gVGhpcyBuZWVkcyB0byBiZSBkZWxheWVkIGFzIHRoZSBhY3RpdmUgZWxlbWVudCBpcyB0aGUgYm9keSB3aGVuIHRoZSB0YWJcbiAgICAvLyBrZXkgaXMgcHJlc3NlZCwgcG9zc2libHkgYWxvbmcgd2l0aCBvdGhlcnMuXG4gICAgd2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgLy8gRG9uJ3QgdHJpZ2dlciBgYmx1cmAgaWYgdGhlIGZvY3VzIGlzIHN0aWxsIGluIHRoZSBzZWxlY3Rpb25cbiAgICAgIGlmIChcbiAgICAgICAgKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgPT0gc2VsZi4kc2VsZWN0aW9uWzBdKSB8fFxuICAgICAgICAoJC5jb250YWlucyhzZWxmLiRzZWxlY3Rpb25bMF0sIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpKVxuICAgICAgKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgc2VsZi50cmlnZ2VyKCdibHVyJywgZXZ0KTtcbiAgICB9LCAxKTtcbiAgfTtcblxuICBCYXNlU2VsZWN0aW9uLnByb3RvdHlwZS5fYXR0YWNoQ2xvc2VIYW5kbGVyID0gZnVuY3Rpb24gKGNvbnRhaW5lcikge1xuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgICQoZG9jdW1lbnQuYm9keSkub24oJ21vdXNlZG93bi5zZWxlY3QyLicgKyBjb250YWluZXIuaWQsIGZ1bmN0aW9uIChlKSB7XG4gICAgICB2YXIgJHRhcmdldCA9ICQoZS50YXJnZXQpO1xuXG4gICAgICB2YXIgJHNlbGVjdCA9ICR0YXJnZXQuY2xvc2VzdCgnLnNlbGVjdDInKTtcblxuICAgICAgdmFyICRhbGwgPSAkKCcuc2VsZWN0Mi5zZWxlY3QyLWNvbnRhaW5lci0tb3BlbicpO1xuXG4gICAgICAkYWxsLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgJHRoaXMgPSAkKHRoaXMpO1xuXG4gICAgICAgIGlmICh0aGlzID09ICRzZWxlY3RbMF0pIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgJGVsZW1lbnQgPSBVdGlscy5HZXREYXRhKHRoaXMsICdlbGVtZW50Jyk7XG5cbiAgICAgICAgJGVsZW1lbnQuc2VsZWN0MignY2xvc2UnKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xuXG4gIEJhc2VTZWxlY3Rpb24ucHJvdG90eXBlLl9kZXRhY2hDbG9zZUhhbmRsZXIgPSBmdW5jdGlvbiAoY29udGFpbmVyKSB7XG4gICAgJChkb2N1bWVudC5ib2R5KS5vZmYoJ21vdXNlZG93bi5zZWxlY3QyLicgKyBjb250YWluZXIuaWQpO1xuICB9O1xuXG4gIEJhc2VTZWxlY3Rpb24ucHJvdG90eXBlLnBvc2l0aW9uID0gZnVuY3Rpb24gKCRzZWxlY3Rpb24sICRjb250YWluZXIpIHtcbiAgICB2YXIgJHNlbGVjdGlvbkNvbnRhaW5lciA9ICRjb250YWluZXIuZmluZCgnLnNlbGVjdGlvbicpO1xuICAgICRzZWxlY3Rpb25Db250YWluZXIuYXBwZW5kKCRzZWxlY3Rpb24pO1xuICB9O1xuXG4gIEJhc2VTZWxlY3Rpb24ucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5fZGV0YWNoQ2xvc2VIYW5kbGVyKHRoaXMuY29udGFpbmVyKTtcbiAgfTtcblxuICBCYXNlU2VsZWN0aW9uLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbiAoZGF0YSkge1xuICAgIHRocm93IG5ldyBFcnJvcignVGhlIGB1cGRhdGVgIG1ldGhvZCBtdXN0IGJlIGRlZmluZWQgaW4gY2hpbGQgY2xhc3Nlcy4nKTtcbiAgfTtcblxuICByZXR1cm4gQmFzZVNlbGVjdGlvbjtcbn0pO1xuXG5TMi5kZWZpbmUoJ3NlbGVjdDIvc2VsZWN0aW9uL3NpbmdsZScsW1xuICAnanF1ZXJ5JyxcbiAgJy4vYmFzZScsXG4gICcuLi91dGlscycsXG4gICcuLi9rZXlzJ1xuXSwgZnVuY3Rpb24gKCQsIEJhc2VTZWxlY3Rpb24sIFV0aWxzLCBLRVlTKSB7XG4gIGZ1bmN0aW9uIFNpbmdsZVNlbGVjdGlvbiAoKSB7XG4gICAgU2luZ2xlU2VsZWN0aW9uLl9fc3VwZXJfXy5jb25zdHJ1Y3Rvci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9XG5cbiAgVXRpbHMuRXh0ZW5kKFNpbmdsZVNlbGVjdGlvbiwgQmFzZVNlbGVjdGlvbik7XG5cbiAgU2luZ2xlU2VsZWN0aW9uLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyICRzZWxlY3Rpb24gPSBTaW5nbGVTZWxlY3Rpb24uX19zdXBlcl9fLnJlbmRlci5jYWxsKHRoaXMpO1xuXG4gICAgJHNlbGVjdGlvbi5hZGRDbGFzcygnc2VsZWN0Mi1zZWxlY3Rpb24tLXNpbmdsZScpO1xuXG4gICAgJHNlbGVjdGlvbi5odG1sKFxuICAgICAgJzxzcGFuIGNsYXNzPVwic2VsZWN0Mi1zZWxlY3Rpb25fX3JlbmRlcmVkXCI+PC9zcGFuPicgK1xuICAgICAgJzxzcGFuIGNsYXNzPVwic2VsZWN0Mi1zZWxlY3Rpb25fX2Fycm93XCIgcm9sZT1cInByZXNlbnRhdGlvblwiPicgK1xuICAgICAgICAnPGIgcm9sZT1cInByZXNlbnRhdGlvblwiPjwvYj4nICtcbiAgICAgICc8L3NwYW4+J1xuICAgICk7XG5cbiAgICByZXR1cm4gJHNlbGVjdGlvbjtcbiAgfTtcblxuICBTaW5nbGVTZWxlY3Rpb24ucHJvdG90eXBlLmJpbmQgPSBmdW5jdGlvbiAoY29udGFpbmVyLCAkY29udGFpbmVyKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgU2luZ2xlU2VsZWN0aW9uLl9fc3VwZXJfXy5iaW5kLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cbiAgICB2YXIgaWQgPSBjb250YWluZXIuaWQgKyAnLWNvbnRhaW5lcic7XG5cbiAgICB0aGlzLiRzZWxlY3Rpb24uZmluZCgnLnNlbGVjdDItc2VsZWN0aW9uX19yZW5kZXJlZCcpXG4gICAgICAuYXR0cignaWQnLCBpZClcbiAgICAgIC5hdHRyKCdyb2xlJywgJ3RleHRib3gnKVxuICAgICAgLmF0dHIoJ2FyaWEtcmVhZG9ubHknLCAndHJ1ZScpO1xuICAgIHRoaXMuJHNlbGVjdGlvbi5hdHRyKCdhcmlhLWxhYmVsbGVkYnknLCBpZCk7XG5cbiAgICB0aGlzLiRzZWxlY3Rpb24ub24oJ21vdXNlZG93bicsIGZ1bmN0aW9uIChldnQpIHtcbiAgICAgIC8vIE9ubHkgcmVzcG9uZCB0byBsZWZ0IGNsaWNrc1xuICAgICAgaWYgKGV2dC53aGljaCAhPT0gMSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHNlbGYudHJpZ2dlcigndG9nZ2xlJywge1xuICAgICAgICBvcmlnaW5hbEV2ZW50OiBldnRcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgdGhpcy4kc2VsZWN0aW9uLm9uKCdmb2N1cycsIGZ1bmN0aW9uIChldnQpIHtcbiAgICAgIC8vIFVzZXIgZm9jdXNlcyBvbiB0aGUgY29udGFpbmVyXG4gICAgfSk7XG5cbiAgICB0aGlzLiRzZWxlY3Rpb24ub24oJ2JsdXInLCBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICAvLyBVc2VyIGV4aXRzIHRoZSBjb250YWluZXJcbiAgICB9KTtcblxuICAgIGNvbnRhaW5lci5vbignZm9jdXMnLCBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICBpZiAoIWNvbnRhaW5lci5pc09wZW4oKSkge1xuICAgICAgICBzZWxmLiRzZWxlY3Rpb24uZm9jdXMoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICBTaW5nbGVTZWxlY3Rpb24ucHJvdG90eXBlLmNsZWFyID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciAkcmVuZGVyZWQgPSB0aGlzLiRzZWxlY3Rpb24uZmluZCgnLnNlbGVjdDItc2VsZWN0aW9uX19yZW5kZXJlZCcpO1xuICAgICRyZW5kZXJlZC5lbXB0eSgpO1xuICAgICRyZW5kZXJlZC5yZW1vdmVBdHRyKCd0aXRsZScpOyAvLyBjbGVhciB0b29sdGlwIG9uIGVtcHR5XG4gIH07XG5cbiAgU2luZ2xlU2VsZWN0aW9uLnByb3RvdHlwZS5kaXNwbGF5ID0gZnVuY3Rpb24gKGRhdGEsIGNvbnRhaW5lcikge1xuICAgIHZhciB0ZW1wbGF0ZSA9IHRoaXMub3B0aW9ucy5nZXQoJ3RlbXBsYXRlU2VsZWN0aW9uJyk7XG4gICAgdmFyIGVzY2FwZU1hcmt1cCA9IHRoaXMub3B0aW9ucy5nZXQoJ2VzY2FwZU1hcmt1cCcpO1xuXG4gICAgcmV0dXJuIGVzY2FwZU1hcmt1cCh0ZW1wbGF0ZShkYXRhLCBjb250YWluZXIpKTtcbiAgfTtcblxuICBTaW5nbGVTZWxlY3Rpb24ucHJvdG90eXBlLnNlbGVjdGlvbkNvbnRhaW5lciA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gJCgnPHNwYW4+PC9zcGFuPicpO1xuICB9O1xuXG4gIFNpbmdsZVNlbGVjdGlvbi5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBpZiAoZGF0YS5sZW5ndGggPT09IDApIHtcbiAgICAgIHRoaXMuY2xlYXIoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgc2VsZWN0aW9uID0gZGF0YVswXTtcblxuICAgIHZhciAkcmVuZGVyZWQgPSB0aGlzLiRzZWxlY3Rpb24uZmluZCgnLnNlbGVjdDItc2VsZWN0aW9uX19yZW5kZXJlZCcpO1xuICAgIHZhciBmb3JtYXR0ZWQgPSB0aGlzLmRpc3BsYXkoc2VsZWN0aW9uLCAkcmVuZGVyZWQpO1xuXG4gICAgJHJlbmRlcmVkLmVtcHR5KCkuYXBwZW5kKGZvcm1hdHRlZCk7XG4gICAgJHJlbmRlcmVkLmF0dHIoJ3RpdGxlJywgc2VsZWN0aW9uLnRpdGxlIHx8IHNlbGVjdGlvbi50ZXh0KTtcbiAgfTtcblxuICByZXR1cm4gU2luZ2xlU2VsZWN0aW9uO1xufSk7XG5cblMyLmRlZmluZSgnc2VsZWN0Mi9zZWxlY3Rpb24vbXVsdGlwbGUnLFtcbiAgJ2pxdWVyeScsXG4gICcuL2Jhc2UnLFxuICAnLi4vdXRpbHMnXG5dLCBmdW5jdGlvbiAoJCwgQmFzZVNlbGVjdGlvbiwgVXRpbHMpIHtcbiAgZnVuY3Rpb24gTXVsdGlwbGVTZWxlY3Rpb24gKCRlbGVtZW50LCBvcHRpb25zKSB7XG4gICAgTXVsdGlwbGVTZWxlY3Rpb24uX19zdXBlcl9fLmNvbnN0cnVjdG9yLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH1cblxuICBVdGlscy5FeHRlbmQoTXVsdGlwbGVTZWxlY3Rpb24sIEJhc2VTZWxlY3Rpb24pO1xuXG4gIE11bHRpcGxlU2VsZWN0aW9uLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyICRzZWxlY3Rpb24gPSBNdWx0aXBsZVNlbGVjdGlvbi5fX3N1cGVyX18ucmVuZGVyLmNhbGwodGhpcyk7XG5cbiAgICAkc2VsZWN0aW9uLmFkZENsYXNzKCdzZWxlY3QyLXNlbGVjdGlvbi0tbXVsdGlwbGUnKTtcblxuICAgICRzZWxlY3Rpb24uaHRtbChcbiAgICAgICc8dWwgY2xhc3M9XCJzZWxlY3QyLXNlbGVjdGlvbl9fcmVuZGVyZWRcIj48L3VsPidcbiAgICApO1xuXG4gICAgcmV0dXJuICRzZWxlY3Rpb247XG4gIH07XG5cbiAgTXVsdGlwbGVTZWxlY3Rpb24ucHJvdG90eXBlLmJpbmQgPSBmdW5jdGlvbiAoY29udGFpbmVyLCAkY29udGFpbmVyKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgTXVsdGlwbGVTZWxlY3Rpb24uX19zdXBlcl9fLmJpbmQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblxuICAgIHRoaXMuJHNlbGVjdGlvbi5vbignY2xpY2snLCBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICBzZWxmLnRyaWdnZXIoJ3RvZ2dsZScsIHtcbiAgICAgICAgb3JpZ2luYWxFdmVudDogZXZ0XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIHRoaXMuJHNlbGVjdGlvbi5vbihcbiAgICAgICdjbGljaycsXG4gICAgICAnLnNlbGVjdDItc2VsZWN0aW9uX19jaG9pY2VfX3JlbW92ZScsXG4gICAgICBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICAgIC8vIElnbm9yZSB0aGUgZXZlbnQgaWYgaXQgaXMgZGlzYWJsZWRcbiAgICAgICAgaWYgKHNlbGYub3B0aW9ucy5nZXQoJ2Rpc2FibGVkJykpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgJHJlbW92ZSA9ICQodGhpcyk7XG4gICAgICAgIHZhciAkc2VsZWN0aW9uID0gJHJlbW92ZS5wYXJlbnQoKTtcblxuICAgICAgICB2YXIgZGF0YSA9IFV0aWxzLkdldERhdGEoJHNlbGVjdGlvblswXSwgJ2RhdGEnKTtcblxuICAgICAgICBzZWxmLnRyaWdnZXIoJ3Vuc2VsZWN0Jywge1xuICAgICAgICAgIG9yaWdpbmFsRXZlbnQ6IGV2dCxcbiAgICAgICAgICBkYXRhOiBkYXRhXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICk7XG4gIH07XG5cbiAgTXVsdGlwbGVTZWxlY3Rpb24ucHJvdG90eXBlLmNsZWFyID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciAkcmVuZGVyZWQgPSB0aGlzLiRzZWxlY3Rpb24uZmluZCgnLnNlbGVjdDItc2VsZWN0aW9uX19yZW5kZXJlZCcpO1xuICAgICRyZW5kZXJlZC5lbXB0eSgpO1xuICAgICRyZW5kZXJlZC5yZW1vdmVBdHRyKCd0aXRsZScpO1xuICB9O1xuXG4gIE11bHRpcGxlU2VsZWN0aW9uLnByb3RvdHlwZS5kaXNwbGF5ID0gZnVuY3Rpb24gKGRhdGEsIGNvbnRhaW5lcikge1xuICAgIHZhciB0ZW1wbGF0ZSA9IHRoaXMub3B0aW9ucy5nZXQoJ3RlbXBsYXRlU2VsZWN0aW9uJyk7XG4gICAgdmFyIGVzY2FwZU1hcmt1cCA9IHRoaXMub3B0aW9ucy5nZXQoJ2VzY2FwZU1hcmt1cCcpO1xuXG4gICAgcmV0dXJuIGVzY2FwZU1hcmt1cCh0ZW1wbGF0ZShkYXRhLCBjb250YWluZXIpKTtcbiAgfTtcblxuICBNdWx0aXBsZVNlbGVjdGlvbi5wcm90b3R5cGUuc2VsZWN0aW9uQ29udGFpbmVyID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciAkY29udGFpbmVyID0gJChcbiAgICAgICc8bGkgY2xhc3M9XCJzZWxlY3QyLXNlbGVjdGlvbl9fY2hvaWNlXCI+JyArXG4gICAgICAgICc8c3BhbiBjbGFzcz1cInNlbGVjdDItc2VsZWN0aW9uX19jaG9pY2VfX3JlbW92ZVwiIHJvbGU9XCJwcmVzZW50YXRpb25cIj4nICtcbiAgICAgICAgICAnJnRpbWVzOycgK1xuICAgICAgICAnPC9zcGFuPicgK1xuICAgICAgJzwvbGk+J1xuICAgICk7XG5cbiAgICByZXR1cm4gJGNvbnRhaW5lcjtcbiAgfTtcblxuICBNdWx0aXBsZVNlbGVjdGlvbi5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24gKGRhdGEpIHtcbiAgICB0aGlzLmNsZWFyKCk7XG5cbiAgICBpZiAoZGF0YS5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgJHNlbGVjdGlvbnMgPSBbXTtcblxuICAgIGZvciAodmFyIGQgPSAwOyBkIDwgZGF0YS5sZW5ndGg7IGQrKykge1xuICAgICAgdmFyIHNlbGVjdGlvbiA9IGRhdGFbZF07XG5cbiAgICAgIHZhciAkc2VsZWN0aW9uID0gdGhpcy5zZWxlY3Rpb25Db250YWluZXIoKTtcbiAgICAgIHZhciBmb3JtYXR0ZWQgPSB0aGlzLmRpc3BsYXkoc2VsZWN0aW9uLCAkc2VsZWN0aW9uKTtcblxuICAgICAgJHNlbGVjdGlvbi5hcHBlbmQoZm9ybWF0dGVkKTtcbiAgICAgICRzZWxlY3Rpb24uYXR0cigndGl0bGUnLCBzZWxlY3Rpb24udGl0bGUgfHwgc2VsZWN0aW9uLnRleHQpO1xuXG4gICAgICBVdGlscy5TdG9yZURhdGEoJHNlbGVjdGlvblswXSwgJ2RhdGEnLCBzZWxlY3Rpb24pO1xuXG4gICAgICAkc2VsZWN0aW9ucy5wdXNoKCRzZWxlY3Rpb24pO1xuICAgIH1cblxuICAgIHZhciAkcmVuZGVyZWQgPSB0aGlzLiRzZWxlY3Rpb24uZmluZCgnLnNlbGVjdDItc2VsZWN0aW9uX19yZW5kZXJlZCcpO1xuXG4gICAgVXRpbHMuYXBwZW5kTWFueSgkcmVuZGVyZWQsICRzZWxlY3Rpb25zKTtcbiAgfTtcblxuICByZXR1cm4gTXVsdGlwbGVTZWxlY3Rpb247XG59KTtcblxuUzIuZGVmaW5lKCdzZWxlY3QyL3NlbGVjdGlvbi9wbGFjZWhvbGRlcicsW1xuICAnLi4vdXRpbHMnXG5dLCBmdW5jdGlvbiAoVXRpbHMpIHtcbiAgZnVuY3Rpb24gUGxhY2Vob2xkZXIgKGRlY29yYXRlZCwgJGVsZW1lbnQsIG9wdGlvbnMpIHtcbiAgICB0aGlzLnBsYWNlaG9sZGVyID0gdGhpcy5ub3JtYWxpemVQbGFjZWhvbGRlcihvcHRpb25zLmdldCgncGxhY2Vob2xkZXInKSk7XG5cbiAgICBkZWNvcmF0ZWQuY2FsbCh0aGlzLCAkZWxlbWVudCwgb3B0aW9ucyk7XG4gIH1cblxuICBQbGFjZWhvbGRlci5wcm90b3R5cGUubm9ybWFsaXplUGxhY2Vob2xkZXIgPSBmdW5jdGlvbiAoXywgcGxhY2Vob2xkZXIpIHtcbiAgICBpZiAodHlwZW9mIHBsYWNlaG9sZGVyID09PSAnc3RyaW5nJykge1xuICAgICAgcGxhY2Vob2xkZXIgPSB7XG4gICAgICAgIGlkOiAnJyxcbiAgICAgICAgdGV4dDogcGxhY2Vob2xkZXJcbiAgICAgIH07XG4gICAgfVxuXG4gICAgcmV0dXJuIHBsYWNlaG9sZGVyO1xuICB9O1xuXG4gIFBsYWNlaG9sZGVyLnByb3RvdHlwZS5jcmVhdGVQbGFjZWhvbGRlciA9IGZ1bmN0aW9uIChkZWNvcmF0ZWQsIHBsYWNlaG9sZGVyKSB7XG4gICAgdmFyICRwbGFjZWhvbGRlciA9IHRoaXMuc2VsZWN0aW9uQ29udGFpbmVyKCk7XG5cbiAgICAkcGxhY2Vob2xkZXIuaHRtbCh0aGlzLmRpc3BsYXkocGxhY2Vob2xkZXIpKTtcbiAgICAkcGxhY2Vob2xkZXIuYWRkQ2xhc3MoJ3NlbGVjdDItc2VsZWN0aW9uX19wbGFjZWhvbGRlcicpXG4gICAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCdzZWxlY3QyLXNlbGVjdGlvbl9fY2hvaWNlJyk7XG5cbiAgICByZXR1cm4gJHBsYWNlaG9sZGVyO1xuICB9O1xuXG4gIFBsYWNlaG9sZGVyLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbiAoZGVjb3JhdGVkLCBkYXRhKSB7XG4gICAgdmFyIHNpbmdsZVBsYWNlaG9sZGVyID0gKFxuICAgICAgZGF0YS5sZW5ndGggPT0gMSAmJiBkYXRhWzBdLmlkICE9IHRoaXMucGxhY2Vob2xkZXIuaWRcbiAgICApO1xuICAgIHZhciBtdWx0aXBsZVNlbGVjdGlvbnMgPSBkYXRhLmxlbmd0aCA+IDE7XG5cbiAgICBpZiAobXVsdGlwbGVTZWxlY3Rpb25zIHx8IHNpbmdsZVBsYWNlaG9sZGVyKSB7XG4gICAgICByZXR1cm4gZGVjb3JhdGVkLmNhbGwodGhpcywgZGF0YSk7XG4gICAgfVxuXG4gICAgdGhpcy5jbGVhcigpO1xuXG4gICAgdmFyICRwbGFjZWhvbGRlciA9IHRoaXMuY3JlYXRlUGxhY2Vob2xkZXIodGhpcy5wbGFjZWhvbGRlcik7XG5cbiAgICB0aGlzLiRzZWxlY3Rpb24uZmluZCgnLnNlbGVjdDItc2VsZWN0aW9uX19yZW5kZXJlZCcpLmFwcGVuZCgkcGxhY2Vob2xkZXIpO1xuICB9O1xuXG4gIHJldHVybiBQbGFjZWhvbGRlcjtcbn0pO1xuXG5TMi5kZWZpbmUoJ3NlbGVjdDIvc2VsZWN0aW9uL2FsbG93Q2xlYXInLFtcbiAgJ2pxdWVyeScsXG4gICcuLi9rZXlzJyxcbiAgJy4uL3V0aWxzJ1xuXSwgZnVuY3Rpb24gKCQsIEtFWVMsIFV0aWxzKSB7XG4gIGZ1bmN0aW9uIEFsbG93Q2xlYXIgKCkgeyB9XG5cbiAgQWxsb3dDbGVhci5wcm90b3R5cGUuYmluZCA9IGZ1bmN0aW9uIChkZWNvcmF0ZWQsIGNvbnRhaW5lciwgJGNvbnRhaW5lcikge1xuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgIGRlY29yYXRlZC5jYWxsKHRoaXMsIGNvbnRhaW5lciwgJGNvbnRhaW5lcik7XG5cbiAgICBpZiAodGhpcy5wbGFjZWhvbGRlciA9PSBudWxsKSB7XG4gICAgICBpZiAodGhpcy5vcHRpb25zLmdldCgnZGVidWcnKSAmJiB3aW5kb3cuY29uc29sZSAmJiBjb25zb2xlLmVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAgICAgJ1NlbGVjdDI6IFRoZSBgYWxsb3dDbGVhcmAgb3B0aW9uIHNob3VsZCBiZSB1c2VkIGluIGNvbWJpbmF0aW9uICcgK1xuICAgICAgICAgICd3aXRoIHRoZSBgcGxhY2Vob2xkZXJgIG9wdGlvbi4nXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy4kc2VsZWN0aW9uLm9uKCdtb3VzZWRvd24nLCAnLnNlbGVjdDItc2VsZWN0aW9uX19jbGVhcicsXG4gICAgICBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICAgIHNlbGYuX2hhbmRsZUNsZWFyKGV2dCk7XG4gICAgfSk7XG5cbiAgICBjb250YWluZXIub24oJ2tleXByZXNzJywgZnVuY3Rpb24gKGV2dCkge1xuICAgICAgc2VsZi5faGFuZGxlS2V5Ym9hcmRDbGVhcihldnQsIGNvbnRhaW5lcik7XG4gICAgfSk7XG4gIH07XG5cbiAgQWxsb3dDbGVhci5wcm90b3R5cGUuX2hhbmRsZUNsZWFyID0gZnVuY3Rpb24gKF8sIGV2dCkge1xuICAgIC8vIElnbm9yZSB0aGUgZXZlbnQgaWYgaXQgaXMgZGlzYWJsZWRcbiAgICBpZiAodGhpcy5vcHRpb25zLmdldCgnZGlzYWJsZWQnKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciAkY2xlYXIgPSB0aGlzLiRzZWxlY3Rpb24uZmluZCgnLnNlbGVjdDItc2VsZWN0aW9uX19jbGVhcicpO1xuXG4gICAgLy8gSWdub3JlIHRoZSBldmVudCBpZiBub3RoaW5nIGhhcyBiZWVuIHNlbGVjdGVkXG4gICAgaWYgKCRjbGVhci5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBldnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICB2YXIgZGF0YSA9IFV0aWxzLkdldERhdGEoJGNsZWFyWzBdLCAnZGF0YScpO1xuXG4gICAgdmFyIHByZXZpb3VzVmFsID0gdGhpcy4kZWxlbWVudC52YWwoKTtcbiAgICB0aGlzLiRlbGVtZW50LnZhbCh0aGlzLnBsYWNlaG9sZGVyLmlkKTtcblxuICAgIHZhciB1bnNlbGVjdERhdGEgPSB7XG4gICAgICBkYXRhOiBkYXRhXG4gICAgfTtcbiAgICB0aGlzLnRyaWdnZXIoJ2NsZWFyJywgdW5zZWxlY3REYXRhKTtcbiAgICBpZiAodW5zZWxlY3REYXRhLnByZXZlbnRlZCkge1xuICAgICAgdGhpcy4kZWxlbWVudC52YWwocHJldmlvdXNWYWwpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAodmFyIGQgPSAwOyBkIDwgZGF0YS5sZW5ndGg7IGQrKykge1xuICAgICAgdW5zZWxlY3REYXRhID0ge1xuICAgICAgICBkYXRhOiBkYXRhW2RdXG4gICAgICB9O1xuXG4gICAgICAvLyBUcmlnZ2VyIHRoZSBgdW5zZWxlY3RgIGV2ZW50LCBzbyBwZW9wbGUgY2FuIHByZXZlbnQgaXQgZnJvbSBiZWluZ1xuICAgICAgLy8gY2xlYXJlZC5cbiAgICAgIHRoaXMudHJpZ2dlcigndW5zZWxlY3QnLCB1bnNlbGVjdERhdGEpO1xuXG4gICAgICAvLyBJZiB0aGUgZXZlbnQgd2FzIHByZXZlbnRlZCwgZG9uJ3QgY2xlYXIgaXQgb3V0LlxuICAgICAgaWYgKHVuc2VsZWN0RGF0YS5wcmV2ZW50ZWQpIHtcbiAgICAgICAgdGhpcy4kZWxlbWVudC52YWwocHJldmlvdXNWYWwpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy4kZWxlbWVudC50cmlnZ2VyKCdjaGFuZ2UnKTtcblxuICAgIHRoaXMudHJpZ2dlcigndG9nZ2xlJywge30pO1xuICB9O1xuXG4gIEFsbG93Q2xlYXIucHJvdG90eXBlLl9oYW5kbGVLZXlib2FyZENsZWFyID0gZnVuY3Rpb24gKF8sIGV2dCwgY29udGFpbmVyKSB7XG4gICAgaWYgKGNvbnRhaW5lci5pc09wZW4oKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChldnQud2hpY2ggPT0gS0VZUy5ERUxFVEUgfHwgZXZ0LndoaWNoID09IEtFWVMuQkFDS1NQQUNFKSB7XG4gICAgICB0aGlzLl9oYW5kbGVDbGVhcihldnQpO1xuICAgIH1cbiAgfTtcblxuICBBbGxvd0NsZWFyLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbiAoZGVjb3JhdGVkLCBkYXRhKSB7XG4gICAgZGVjb3JhdGVkLmNhbGwodGhpcywgZGF0YSk7XG5cbiAgICBpZiAodGhpcy4kc2VsZWN0aW9uLmZpbmQoJy5zZWxlY3QyLXNlbGVjdGlvbl9fcGxhY2Vob2xkZXInKS5sZW5ndGggPiAwIHx8XG4gICAgICAgIGRhdGEubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyICRyZW1vdmUgPSAkKFxuICAgICAgJzxzcGFuIGNsYXNzPVwic2VsZWN0Mi1zZWxlY3Rpb25fX2NsZWFyXCI+JyArXG4gICAgICAgICcmdGltZXM7JyArXG4gICAgICAnPC9zcGFuPidcbiAgICApO1xuICAgIFV0aWxzLlN0b3JlRGF0YSgkcmVtb3ZlWzBdLCAnZGF0YScsIGRhdGEpO1xuXG4gICAgdGhpcy4kc2VsZWN0aW9uLmZpbmQoJy5zZWxlY3QyLXNlbGVjdGlvbl9fcmVuZGVyZWQnKS5wcmVwZW5kKCRyZW1vdmUpO1xuICB9O1xuXG4gIHJldHVybiBBbGxvd0NsZWFyO1xufSk7XG5cblMyLmRlZmluZSgnc2VsZWN0Mi9zZWxlY3Rpb24vc2VhcmNoJyxbXG4gICdqcXVlcnknLFxuICAnLi4vdXRpbHMnLFxuICAnLi4va2V5cydcbl0sIGZ1bmN0aW9uICgkLCBVdGlscywgS0VZUykge1xuICBmdW5jdGlvbiBTZWFyY2ggKGRlY29yYXRlZCwgJGVsZW1lbnQsIG9wdGlvbnMpIHtcbiAgICBkZWNvcmF0ZWQuY2FsbCh0aGlzLCAkZWxlbWVudCwgb3B0aW9ucyk7XG4gIH1cblxuICBTZWFyY2gucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uIChkZWNvcmF0ZWQpIHtcbiAgICB2YXIgJHNlYXJjaCA9ICQoXG4gICAgICAnPGxpIGNsYXNzPVwic2VsZWN0Mi1zZWFyY2ggc2VsZWN0Mi1zZWFyY2gtLWlubGluZVwiPicgK1xuICAgICAgICAnPGlucHV0IGNsYXNzPVwic2VsZWN0Mi1zZWFyY2hfX2ZpZWxkXCIgdHlwZT1cInNlYXJjaFwiIHRhYmluZGV4PVwiLTFcIicgK1xuICAgICAgICAnIGF1dG9jb21wbGV0ZT1cIm9mZlwiIGF1dG9jb3JyZWN0PVwib2ZmXCIgYXV0b2NhcGl0YWxpemU9XCJub25lXCInICtcbiAgICAgICAgJyBzcGVsbGNoZWNrPVwiZmFsc2VcIiByb2xlPVwidGV4dGJveFwiIGFyaWEtYXV0b2NvbXBsZXRlPVwibGlzdFwiIC8+JyArXG4gICAgICAnPC9saT4nXG4gICAgKTtcblxuICAgIHRoaXMuJHNlYXJjaENvbnRhaW5lciA9ICRzZWFyY2g7XG4gICAgdGhpcy4kc2VhcmNoID0gJHNlYXJjaC5maW5kKCdpbnB1dCcpO1xuXG4gICAgdmFyICRyZW5kZXJlZCA9IGRlY29yYXRlZC5jYWxsKHRoaXMpO1xuXG4gICAgdGhpcy5fdHJhbnNmZXJUYWJJbmRleCgpO1xuXG4gICAgcmV0dXJuICRyZW5kZXJlZDtcbiAgfTtcblxuICBTZWFyY2gucHJvdG90eXBlLmJpbmQgPSBmdW5jdGlvbiAoZGVjb3JhdGVkLCBjb250YWluZXIsICRjb250YWluZXIpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICBkZWNvcmF0ZWQuY2FsbCh0aGlzLCBjb250YWluZXIsICRjb250YWluZXIpO1xuXG4gICAgY29udGFpbmVyLm9uKCdvcGVuJywgZnVuY3Rpb24gKCkge1xuICAgICAgc2VsZi4kc2VhcmNoLnRyaWdnZXIoJ2ZvY3VzJyk7XG4gICAgfSk7XG5cbiAgICBjb250YWluZXIub24oJ2Nsb3NlJywgZnVuY3Rpb24gKCkge1xuICAgICAgc2VsZi4kc2VhcmNoLnZhbCgnJyk7XG4gICAgICBzZWxmLiRzZWFyY2gucmVtb3ZlQXR0cignYXJpYS1hY3RpdmVkZXNjZW5kYW50Jyk7XG4gICAgICBzZWxmLiRzZWFyY2gudHJpZ2dlcignZm9jdXMnKTtcbiAgICB9KTtcblxuICAgIGNvbnRhaW5lci5vbignZW5hYmxlJywgZnVuY3Rpb24gKCkge1xuICAgICAgc2VsZi4kc2VhcmNoLnByb3AoJ2Rpc2FibGVkJywgZmFsc2UpO1xuXG4gICAgICBzZWxmLl90cmFuc2ZlclRhYkluZGV4KCk7XG4gICAgfSk7XG5cbiAgICBjb250YWluZXIub24oJ2Rpc2FibGUnLCBmdW5jdGlvbiAoKSB7XG4gICAgICBzZWxmLiRzZWFyY2gucHJvcCgnZGlzYWJsZWQnLCB0cnVlKTtcbiAgICB9KTtcblxuICAgIGNvbnRhaW5lci5vbignZm9jdXMnLCBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICBzZWxmLiRzZWFyY2gudHJpZ2dlcignZm9jdXMnKTtcbiAgICB9KTtcblxuICAgIGNvbnRhaW5lci5vbigncmVzdWx0czpmb2N1cycsIGZ1bmN0aW9uIChwYXJhbXMpIHtcbiAgICAgIHNlbGYuJHNlYXJjaC5hdHRyKCdhcmlhLWFjdGl2ZWRlc2NlbmRhbnQnLCBwYXJhbXMuaWQpO1xuICAgIH0pO1xuXG4gICAgdGhpcy4kc2VsZWN0aW9uLm9uKCdmb2N1c2luJywgJy5zZWxlY3QyLXNlYXJjaC0taW5saW5lJywgZnVuY3Rpb24gKGV2dCkge1xuICAgICAgc2VsZi50cmlnZ2VyKCdmb2N1cycsIGV2dCk7XG4gICAgfSk7XG5cbiAgICB0aGlzLiRzZWxlY3Rpb24ub24oJ2ZvY3Vzb3V0JywgJy5zZWxlY3QyLXNlYXJjaC0taW5saW5lJywgZnVuY3Rpb24gKGV2dCkge1xuICAgICAgc2VsZi5faGFuZGxlQmx1cihldnQpO1xuICAgIH0pO1xuXG4gICAgdGhpcy4kc2VsZWN0aW9uLm9uKCdrZXlkb3duJywgJy5zZWxlY3QyLXNlYXJjaC0taW5saW5lJywgZnVuY3Rpb24gKGV2dCkge1xuICAgICAgZXZ0LnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgICBzZWxmLnRyaWdnZXIoJ2tleXByZXNzJywgZXZ0KTtcblxuICAgICAgc2VsZi5fa2V5VXBQcmV2ZW50ZWQgPSBldnQuaXNEZWZhdWx0UHJldmVudGVkKCk7XG5cbiAgICAgIHZhciBrZXkgPSBldnQud2hpY2g7XG5cbiAgICAgIGlmIChrZXkgPT09IEtFWVMuQkFDS1NQQUNFICYmIHNlbGYuJHNlYXJjaC52YWwoKSA9PT0gJycpIHtcbiAgICAgICAgdmFyICRwcmV2aW91c0Nob2ljZSA9IHNlbGYuJHNlYXJjaENvbnRhaW5lclxuICAgICAgICAgIC5wcmV2KCcuc2VsZWN0Mi1zZWxlY3Rpb25fX2Nob2ljZScpO1xuXG4gICAgICAgIGlmICgkcHJldmlvdXNDaG9pY2UubGVuZ3RoID4gMCkge1xuICAgICAgICAgIHZhciBpdGVtID0gVXRpbHMuR2V0RGF0YSgkcHJldmlvdXNDaG9pY2VbMF0sICdkYXRhJyk7XG5cbiAgICAgICAgICBzZWxmLnNlYXJjaFJlbW92ZUNob2ljZShpdGVtKTtcblxuICAgICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyBUcnkgdG8gZGV0ZWN0IHRoZSBJRSB2ZXJzaW9uIHNob3VsZCB0aGUgYGRvY3VtZW50TW9kZWAgcHJvcGVydHkgdGhhdFxuICAgIC8vIGlzIHN0b3JlZCBvbiB0aGUgZG9jdW1lbnQuIFRoaXMgaXMgb25seSBpbXBsZW1lbnRlZCBpbiBJRSBhbmQgaXNcbiAgICAvLyBzbGlnaHRseSBjbGVhbmVyIHRoYW4gZG9pbmcgYSB1c2VyIGFnZW50IGNoZWNrLlxuICAgIC8vIFRoaXMgcHJvcGVydHkgaXMgbm90IGF2YWlsYWJsZSBpbiBFZGdlLCBidXQgRWRnZSBhbHNvIGRvZXNuJ3QgaGF2ZVxuICAgIC8vIHRoaXMgYnVnLlxuICAgIHZhciBtc2llID0gZG9jdW1lbnQuZG9jdW1lbnRNb2RlO1xuICAgIHZhciBkaXNhYmxlSW5wdXRFdmVudHMgPSBtc2llICYmIG1zaWUgPD0gMTE7XG5cbiAgICAvLyBXb3JrYXJvdW5kIGZvciBicm93c2VycyB3aGljaCBkbyBub3Qgc3VwcG9ydCB0aGUgYGlucHV0YCBldmVudFxuICAgIC8vIFRoaXMgd2lsbCBwcmV2ZW50IGRvdWJsZS10cmlnZ2VyaW5nIG9mIGV2ZW50cyBmb3IgYnJvd3NlcnMgd2hpY2ggc3VwcG9ydFxuICAgIC8vIGJvdGggdGhlIGBrZXl1cGAgYW5kIGBpbnB1dGAgZXZlbnRzLlxuICAgIHRoaXMuJHNlbGVjdGlvbi5vbihcbiAgICAgICdpbnB1dC5zZWFyY2hjaGVjaycsXG4gICAgICAnLnNlbGVjdDItc2VhcmNoLS1pbmxpbmUnLFxuICAgICAgZnVuY3Rpb24gKGV2dCkge1xuICAgICAgICAvLyBJRSB3aWxsIHRyaWdnZXIgdGhlIGBpbnB1dGAgZXZlbnQgd2hlbiBhIHBsYWNlaG9sZGVyIGlzIHVzZWQgb24gYVxuICAgICAgICAvLyBzZWFyY2ggYm94LiBUbyBnZXQgYXJvdW5kIHRoaXMgaXNzdWUsIHdlIGFyZSBmb3JjZWQgdG8gaWdub3JlIGFsbFxuICAgICAgICAvLyBgaW5wdXRgIGV2ZW50cyBpbiBJRSBhbmQga2VlcCB1c2luZyBga2V5dXBgLlxuICAgICAgICBpZiAoZGlzYWJsZUlucHV0RXZlbnRzKSB7XG4gICAgICAgICAgc2VsZi4kc2VsZWN0aW9uLm9mZignaW5wdXQuc2VhcmNoIGlucHV0LnNlYXJjaGNoZWNrJyk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gVW5iaW5kIHRoZSBkdXBsaWNhdGVkIGBrZXl1cGAgZXZlbnRcbiAgICAgICAgc2VsZi4kc2VsZWN0aW9uLm9mZigna2V5dXAuc2VhcmNoJyk7XG4gICAgICB9XG4gICAgKTtcblxuICAgIHRoaXMuJHNlbGVjdGlvbi5vbihcbiAgICAgICdrZXl1cC5zZWFyY2ggaW5wdXQuc2VhcmNoJyxcbiAgICAgICcuc2VsZWN0Mi1zZWFyY2gtLWlubGluZScsXG4gICAgICBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICAgIC8vIElFIHdpbGwgdHJpZ2dlciB0aGUgYGlucHV0YCBldmVudCB3aGVuIGEgcGxhY2Vob2xkZXIgaXMgdXNlZCBvbiBhXG4gICAgICAgIC8vIHNlYXJjaCBib3guIFRvIGdldCBhcm91bmQgdGhpcyBpc3N1ZSwgd2UgYXJlIGZvcmNlZCB0byBpZ25vcmUgYWxsXG4gICAgICAgIC8vIGBpbnB1dGAgZXZlbnRzIGluIElFIGFuZCBrZWVwIHVzaW5nIGBrZXl1cGAuXG4gICAgICAgIGlmIChkaXNhYmxlSW5wdXRFdmVudHMgJiYgZXZ0LnR5cGUgPT09ICdpbnB1dCcpIHtcbiAgICAgICAgICBzZWxmLiRzZWxlY3Rpb24ub2ZmKCdpbnB1dC5zZWFyY2ggaW5wdXQuc2VhcmNoY2hlY2snKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB2YXIga2V5ID0gZXZ0LndoaWNoO1xuXG4gICAgICAgIC8vIFdlIGNhbiBmcmVlbHkgaWdub3JlIGV2ZW50cyBmcm9tIG1vZGlmaWVyIGtleXNcbiAgICAgICAgaWYgKGtleSA9PSBLRVlTLlNISUZUIHx8IGtleSA9PSBLRVlTLkNUUkwgfHwga2V5ID09IEtFWVMuQUxUKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gVGFiYmluZyB3aWxsIGJlIGhhbmRsZWQgZHVyaW5nIHRoZSBga2V5ZG93bmAgcGhhc2VcbiAgICAgICAgaWYgKGtleSA9PSBLRVlTLlRBQikge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHNlbGYuaGFuZGxlU2VhcmNoKGV2dCk7XG4gICAgICB9XG4gICAgKTtcbiAgfTtcblxuICAvKipcbiAgICogVGhpcyBtZXRob2Qgd2lsbCB0cmFuc2ZlciB0aGUgdGFiaW5kZXggYXR0cmlidXRlIGZyb20gdGhlIHJlbmRlcmVkXG4gICAqIHNlbGVjdGlvbiB0byB0aGUgc2VhcmNoIGJveC4gVGhpcyBhbGxvd3MgZm9yIHRoZSBzZWFyY2ggYm94IHRvIGJlIHVzZWQgYXNcbiAgICogdGhlIHByaW1hcnkgZm9jdXMgaW5zdGVhZCBvZiB0aGUgc2VsZWN0aW9uIGNvbnRhaW5lci5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICovXG4gIFNlYXJjaC5wcm90b3R5cGUuX3RyYW5zZmVyVGFiSW5kZXggPSBmdW5jdGlvbiAoZGVjb3JhdGVkKSB7XG4gICAgdGhpcy4kc2VhcmNoLmF0dHIoJ3RhYmluZGV4JywgdGhpcy4kc2VsZWN0aW9uLmF0dHIoJ3RhYmluZGV4JykpO1xuICAgIHRoaXMuJHNlbGVjdGlvbi5hdHRyKCd0YWJpbmRleCcsICctMScpO1xuICB9O1xuXG4gIFNlYXJjaC5wcm90b3R5cGUuY3JlYXRlUGxhY2Vob2xkZXIgPSBmdW5jdGlvbiAoZGVjb3JhdGVkLCBwbGFjZWhvbGRlcikge1xuICAgIHRoaXMuJHNlYXJjaC5hdHRyKCdwbGFjZWhvbGRlcicsIHBsYWNlaG9sZGVyLnRleHQpO1xuICB9O1xuXG4gIFNlYXJjaC5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24gKGRlY29yYXRlZCwgZGF0YSkge1xuICAgIHZhciBzZWFyY2hIYWRGb2N1cyA9IHRoaXMuJHNlYXJjaFswXSA9PSBkb2N1bWVudC5hY3RpdmVFbGVtZW50O1xuXG4gICAgdGhpcy4kc2VhcmNoLmF0dHIoJ3BsYWNlaG9sZGVyJywgJycpO1xuXG4gICAgZGVjb3JhdGVkLmNhbGwodGhpcywgZGF0YSk7XG5cbiAgICB0aGlzLiRzZWxlY3Rpb24uZmluZCgnLnNlbGVjdDItc2VsZWN0aW9uX19yZW5kZXJlZCcpXG4gICAgICAgICAgICAgICAgICAgLmFwcGVuZCh0aGlzLiRzZWFyY2hDb250YWluZXIpO1xuXG4gICAgdGhpcy5yZXNpemVTZWFyY2goKTtcbiAgICBpZiAoc2VhcmNoSGFkRm9jdXMpIHtcbiAgICAgIHZhciBpc1RhZ0lucHV0ID0gdGhpcy4kZWxlbWVudC5maW5kKCdbZGF0YS1zZWxlY3QyLXRhZ10nKS5sZW5ndGg7XG4gICAgICBpZiAoaXNUYWdJbnB1dCkge1xuICAgICAgICAvLyBmaXggSUUxMSBidWcgd2hlcmUgdGFnIGlucHV0IGxvc3QgZm9jdXNcbiAgICAgICAgdGhpcy4kZWxlbWVudC5mb2N1cygpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy4kc2VhcmNoLmZvY3VzKCk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIFNlYXJjaC5wcm90b3R5cGUuaGFuZGxlU2VhcmNoID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMucmVzaXplU2VhcmNoKCk7XG5cbiAgICBpZiAoIXRoaXMuX2tleVVwUHJldmVudGVkKSB7XG4gICAgICB2YXIgaW5wdXQgPSB0aGlzLiRzZWFyY2gudmFsKCk7XG5cbiAgICAgIHRoaXMudHJpZ2dlcigncXVlcnknLCB7XG4gICAgICAgIHRlcm06IGlucHV0XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICB0aGlzLl9rZXlVcFByZXZlbnRlZCA9IGZhbHNlO1xuICB9O1xuXG4gIFNlYXJjaC5wcm90b3R5cGUuc2VhcmNoUmVtb3ZlQ2hvaWNlID0gZnVuY3Rpb24gKGRlY29yYXRlZCwgaXRlbSkge1xuICAgIHRoaXMudHJpZ2dlcigndW5zZWxlY3QnLCB7XG4gICAgICBkYXRhOiBpdGVtXG4gICAgfSk7XG5cbiAgICB0aGlzLiRzZWFyY2gudmFsKGl0ZW0udGV4dCk7XG4gICAgdGhpcy5oYW5kbGVTZWFyY2goKTtcbiAgfTtcblxuICBTZWFyY2gucHJvdG90eXBlLnJlc2l6ZVNlYXJjaCA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLiRzZWFyY2guY3NzKCd3aWR0aCcsICcyNXB4Jyk7XG5cbiAgICB2YXIgd2lkdGggPSAnJztcblxuICAgIGlmICh0aGlzLiRzZWFyY2guYXR0cigncGxhY2Vob2xkZXInKSAhPT0gJycpIHtcbiAgICAgIHdpZHRoID0gdGhpcy4kc2VsZWN0aW9uLmZpbmQoJy5zZWxlY3QyLXNlbGVjdGlvbl9fcmVuZGVyZWQnKS5pbm5lcldpZHRoKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBtaW5pbXVtV2lkdGggPSB0aGlzLiRzZWFyY2gudmFsKCkubGVuZ3RoICsgMTtcblxuICAgICAgd2lkdGggPSAobWluaW11bVdpZHRoICogMC43NSkgKyAnZW0nO1xuICAgIH1cblxuICAgIHRoaXMuJHNlYXJjaC5jc3MoJ3dpZHRoJywgd2lkdGgpO1xuICB9O1xuXG4gIHJldHVybiBTZWFyY2g7XG59KTtcblxuUzIuZGVmaW5lKCdzZWxlY3QyL3NlbGVjdGlvbi9ldmVudFJlbGF5JyxbXG4gICdqcXVlcnknXG5dLCBmdW5jdGlvbiAoJCkge1xuICBmdW5jdGlvbiBFdmVudFJlbGF5ICgpIHsgfVxuXG4gIEV2ZW50UmVsYXkucHJvdG90eXBlLmJpbmQgPSBmdW5jdGlvbiAoZGVjb3JhdGVkLCBjb250YWluZXIsICRjb250YWluZXIpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgdmFyIHJlbGF5RXZlbnRzID0gW1xuICAgICAgJ29wZW4nLCAnb3BlbmluZycsXG4gICAgICAnY2xvc2UnLCAnY2xvc2luZycsXG4gICAgICAnc2VsZWN0JywgJ3NlbGVjdGluZycsXG4gICAgICAndW5zZWxlY3QnLCAndW5zZWxlY3RpbmcnLFxuICAgICAgJ2NsZWFyJywgJ2NsZWFyaW5nJ1xuICAgIF07XG5cbiAgICB2YXIgcHJldmVudGFibGVFdmVudHMgPSBbXG4gICAgICAnb3BlbmluZycsICdjbG9zaW5nJywgJ3NlbGVjdGluZycsICd1bnNlbGVjdGluZycsICdjbGVhcmluZydcbiAgICBdO1xuXG4gICAgZGVjb3JhdGVkLmNhbGwodGhpcywgY29udGFpbmVyLCAkY29udGFpbmVyKTtcblxuICAgIGNvbnRhaW5lci5vbignKicsIGZ1bmN0aW9uIChuYW1lLCBwYXJhbXMpIHtcbiAgICAgIC8vIElnbm9yZSBldmVudHMgdGhhdCBzaG91bGQgbm90IGJlIHJlbGF5ZWRcbiAgICAgIGlmICgkLmluQXJyYXkobmFtZSwgcmVsYXlFdmVudHMpID09PSAtMSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIFRoZSBwYXJhbWV0ZXJzIHNob3VsZCBhbHdheXMgYmUgYW4gb2JqZWN0XG4gICAgICBwYXJhbXMgPSBwYXJhbXMgfHwge307XG5cbiAgICAgIC8vIEdlbmVyYXRlIHRoZSBqUXVlcnkgZXZlbnQgZm9yIHRoZSBTZWxlY3QyIGV2ZW50XG4gICAgICB2YXIgZXZ0ID0gJC5FdmVudCgnc2VsZWN0MjonICsgbmFtZSwge1xuICAgICAgICBwYXJhbXM6IHBhcmFtc1xuICAgICAgfSk7XG5cbiAgICAgIHNlbGYuJGVsZW1lbnQudHJpZ2dlcihldnQpO1xuXG4gICAgICAvLyBPbmx5IGhhbmRsZSBwcmV2ZW50YWJsZSBldmVudHMgaWYgaXQgd2FzIG9uZVxuICAgICAgaWYgKCQuaW5BcnJheShuYW1lLCBwcmV2ZW50YWJsZUV2ZW50cykgPT09IC0xKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgcGFyYW1zLnByZXZlbnRlZCA9IGV2dC5pc0RlZmF1bHRQcmV2ZW50ZWQoKTtcbiAgICB9KTtcbiAgfTtcblxuICByZXR1cm4gRXZlbnRSZWxheTtcbn0pO1xuXG5TMi5kZWZpbmUoJ3NlbGVjdDIvdHJhbnNsYXRpb24nLFtcbiAgJ2pxdWVyeScsXG4gICdyZXF1aXJlJ1xuXSwgZnVuY3Rpb24gKCQsIHJlcXVpcmUpIHtcbiAgZnVuY3Rpb24gVHJhbnNsYXRpb24gKGRpY3QpIHtcbiAgICB0aGlzLmRpY3QgPSBkaWN0IHx8IHt9O1xuICB9XG5cbiAgVHJhbnNsYXRpb24ucHJvdG90eXBlLmFsbCA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcy5kaWN0O1xuICB9O1xuXG4gIFRyYW5zbGF0aW9uLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbiAoa2V5KSB7XG4gICAgcmV0dXJuIHRoaXMuZGljdFtrZXldO1xuICB9O1xuXG4gIFRyYW5zbGF0aW9uLnByb3RvdHlwZS5leHRlbmQgPSBmdW5jdGlvbiAodHJhbnNsYXRpb24pIHtcbiAgICB0aGlzLmRpY3QgPSAkLmV4dGVuZCh7fSwgdHJhbnNsYXRpb24uYWxsKCksIHRoaXMuZGljdCk7XG4gIH07XG5cbiAgLy8gU3RhdGljIGZ1bmN0aW9uc1xuXG4gIFRyYW5zbGF0aW9uLl9jYWNoZSA9IHt9O1xuXG4gIFRyYW5zbGF0aW9uLmxvYWRQYXRoID0gZnVuY3Rpb24gKHBhdGgpIHtcbiAgICBpZiAoIShwYXRoIGluIFRyYW5zbGF0aW9uLl9jYWNoZSkpIHtcbiAgICAgIHZhciB0cmFuc2xhdGlvbnMgPSByZXF1aXJlKHBhdGgpO1xuXG4gICAgICBUcmFuc2xhdGlvbi5fY2FjaGVbcGF0aF0gPSB0cmFuc2xhdGlvbnM7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBUcmFuc2xhdGlvbihUcmFuc2xhdGlvbi5fY2FjaGVbcGF0aF0pO1xuICB9O1xuXG4gIHJldHVybiBUcmFuc2xhdGlvbjtcbn0pO1xuXG5TMi5kZWZpbmUoJ3NlbGVjdDIvZGlhY3JpdGljcycsW1xuXG5dLCBmdW5jdGlvbiAoKSB7XG4gIHZhciBkaWFjcml0aWNzID0ge1xuICAgICdcXHUyNEI2JzogJ0EnLFxuICAgICdcXHVGRjIxJzogJ0EnLFxuICAgICdcXHUwMEMwJzogJ0EnLFxuICAgICdcXHUwMEMxJzogJ0EnLFxuICAgICdcXHUwMEMyJzogJ0EnLFxuICAgICdcXHUxRUE2JzogJ0EnLFxuICAgICdcXHUxRUE0JzogJ0EnLFxuICAgICdcXHUxRUFBJzogJ0EnLFxuICAgICdcXHUxRUE4JzogJ0EnLFxuICAgICdcXHUwMEMzJzogJ0EnLFxuICAgICdcXHUwMTAwJzogJ0EnLFxuICAgICdcXHUwMTAyJzogJ0EnLFxuICAgICdcXHUxRUIwJzogJ0EnLFxuICAgICdcXHUxRUFFJzogJ0EnLFxuICAgICdcXHUxRUI0JzogJ0EnLFxuICAgICdcXHUxRUIyJzogJ0EnLFxuICAgICdcXHUwMjI2JzogJ0EnLFxuICAgICdcXHUwMUUwJzogJ0EnLFxuICAgICdcXHUwMEM0JzogJ0EnLFxuICAgICdcXHUwMURFJzogJ0EnLFxuICAgICdcXHUxRUEyJzogJ0EnLFxuICAgICdcXHUwMEM1JzogJ0EnLFxuICAgICdcXHUwMUZBJzogJ0EnLFxuICAgICdcXHUwMUNEJzogJ0EnLFxuICAgICdcXHUwMjAwJzogJ0EnLFxuICAgICdcXHUwMjAyJzogJ0EnLFxuICAgICdcXHUxRUEwJzogJ0EnLFxuICAgICdcXHUxRUFDJzogJ0EnLFxuICAgICdcXHUxRUI2JzogJ0EnLFxuICAgICdcXHUxRTAwJzogJ0EnLFxuICAgICdcXHUwMTA0JzogJ0EnLFxuICAgICdcXHUwMjNBJzogJ0EnLFxuICAgICdcXHUyQzZGJzogJ0EnLFxuICAgICdcXHVBNzMyJzogJ0FBJyxcbiAgICAnXFx1MDBDNic6ICdBRScsXG4gICAgJ1xcdTAxRkMnOiAnQUUnLFxuICAgICdcXHUwMUUyJzogJ0FFJyxcbiAgICAnXFx1QTczNCc6ICdBTycsXG4gICAgJ1xcdUE3MzYnOiAnQVUnLFxuICAgICdcXHVBNzM4JzogJ0FWJyxcbiAgICAnXFx1QTczQSc6ICdBVicsXG4gICAgJ1xcdUE3M0MnOiAnQVknLFxuICAgICdcXHUyNEI3JzogJ0InLFxuICAgICdcXHVGRjIyJzogJ0InLFxuICAgICdcXHUxRTAyJzogJ0InLFxuICAgICdcXHUxRTA0JzogJ0InLFxuICAgICdcXHUxRTA2JzogJ0InLFxuICAgICdcXHUwMjQzJzogJ0InLFxuICAgICdcXHUwMTgyJzogJ0InLFxuICAgICdcXHUwMTgxJzogJ0InLFxuICAgICdcXHUyNEI4JzogJ0MnLFxuICAgICdcXHVGRjIzJzogJ0MnLFxuICAgICdcXHUwMTA2JzogJ0MnLFxuICAgICdcXHUwMTA4JzogJ0MnLFxuICAgICdcXHUwMTBBJzogJ0MnLFxuICAgICdcXHUwMTBDJzogJ0MnLFxuICAgICdcXHUwMEM3JzogJ0MnLFxuICAgICdcXHUxRTA4JzogJ0MnLFxuICAgICdcXHUwMTg3JzogJ0MnLFxuICAgICdcXHUwMjNCJzogJ0MnLFxuICAgICdcXHVBNzNFJzogJ0MnLFxuICAgICdcXHUyNEI5JzogJ0QnLFxuICAgICdcXHVGRjI0JzogJ0QnLFxuICAgICdcXHUxRTBBJzogJ0QnLFxuICAgICdcXHUwMTBFJzogJ0QnLFxuICAgICdcXHUxRTBDJzogJ0QnLFxuICAgICdcXHUxRTEwJzogJ0QnLFxuICAgICdcXHUxRTEyJzogJ0QnLFxuICAgICdcXHUxRTBFJzogJ0QnLFxuICAgICdcXHUwMTEwJzogJ0QnLFxuICAgICdcXHUwMThCJzogJ0QnLFxuICAgICdcXHUwMThBJzogJ0QnLFxuICAgICdcXHUwMTg5JzogJ0QnLFxuICAgICdcXHVBNzc5JzogJ0QnLFxuICAgICdcXHUwMUYxJzogJ0RaJyxcbiAgICAnXFx1MDFDNCc6ICdEWicsXG4gICAgJ1xcdTAxRjInOiAnRHonLFxuICAgICdcXHUwMUM1JzogJ0R6JyxcbiAgICAnXFx1MjRCQSc6ICdFJyxcbiAgICAnXFx1RkYyNSc6ICdFJyxcbiAgICAnXFx1MDBDOCc6ICdFJyxcbiAgICAnXFx1MDBDOSc6ICdFJyxcbiAgICAnXFx1MDBDQSc6ICdFJyxcbiAgICAnXFx1MUVDMCc6ICdFJyxcbiAgICAnXFx1MUVCRSc6ICdFJyxcbiAgICAnXFx1MUVDNCc6ICdFJyxcbiAgICAnXFx1MUVDMic6ICdFJyxcbiAgICAnXFx1MUVCQyc6ICdFJyxcbiAgICAnXFx1MDExMic6ICdFJyxcbiAgICAnXFx1MUUxNCc6ICdFJyxcbiAgICAnXFx1MUUxNic6ICdFJyxcbiAgICAnXFx1MDExNCc6ICdFJyxcbiAgICAnXFx1MDExNic6ICdFJyxcbiAgICAnXFx1MDBDQic6ICdFJyxcbiAgICAnXFx1MUVCQSc6ICdFJyxcbiAgICAnXFx1MDExQSc6ICdFJyxcbiAgICAnXFx1MDIwNCc6ICdFJyxcbiAgICAnXFx1MDIwNic6ICdFJyxcbiAgICAnXFx1MUVCOCc6ICdFJyxcbiAgICAnXFx1MUVDNic6ICdFJyxcbiAgICAnXFx1MDIyOCc6ICdFJyxcbiAgICAnXFx1MUUxQyc6ICdFJyxcbiAgICAnXFx1MDExOCc6ICdFJyxcbiAgICAnXFx1MUUxOCc6ICdFJyxcbiAgICAnXFx1MUUxQSc6ICdFJyxcbiAgICAnXFx1MDE5MCc6ICdFJyxcbiAgICAnXFx1MDE4RSc6ICdFJyxcbiAgICAnXFx1MjRCQic6ICdGJyxcbiAgICAnXFx1RkYyNic6ICdGJyxcbiAgICAnXFx1MUUxRSc6ICdGJyxcbiAgICAnXFx1MDE5MSc6ICdGJyxcbiAgICAnXFx1QTc3Qic6ICdGJyxcbiAgICAnXFx1MjRCQyc6ICdHJyxcbiAgICAnXFx1RkYyNyc6ICdHJyxcbiAgICAnXFx1MDFGNCc6ICdHJyxcbiAgICAnXFx1MDExQyc6ICdHJyxcbiAgICAnXFx1MUUyMCc6ICdHJyxcbiAgICAnXFx1MDExRSc6ICdHJyxcbiAgICAnXFx1MDEyMCc6ICdHJyxcbiAgICAnXFx1MDFFNic6ICdHJyxcbiAgICAnXFx1MDEyMic6ICdHJyxcbiAgICAnXFx1MDFFNCc6ICdHJyxcbiAgICAnXFx1MDE5Myc6ICdHJyxcbiAgICAnXFx1QTdBMCc6ICdHJyxcbiAgICAnXFx1QTc3RCc6ICdHJyxcbiAgICAnXFx1QTc3RSc6ICdHJyxcbiAgICAnXFx1MjRCRCc6ICdIJyxcbiAgICAnXFx1RkYyOCc6ICdIJyxcbiAgICAnXFx1MDEyNCc6ICdIJyxcbiAgICAnXFx1MUUyMic6ICdIJyxcbiAgICAnXFx1MUUyNic6ICdIJyxcbiAgICAnXFx1MDIxRSc6ICdIJyxcbiAgICAnXFx1MUUyNCc6ICdIJyxcbiAgICAnXFx1MUUyOCc6ICdIJyxcbiAgICAnXFx1MUUyQSc6ICdIJyxcbiAgICAnXFx1MDEyNic6ICdIJyxcbiAgICAnXFx1MkM2Nyc6ICdIJyxcbiAgICAnXFx1MkM3NSc6ICdIJyxcbiAgICAnXFx1QTc4RCc6ICdIJyxcbiAgICAnXFx1MjRCRSc6ICdJJyxcbiAgICAnXFx1RkYyOSc6ICdJJyxcbiAgICAnXFx1MDBDQyc6ICdJJyxcbiAgICAnXFx1MDBDRCc6ICdJJyxcbiAgICAnXFx1MDBDRSc6ICdJJyxcbiAgICAnXFx1MDEyOCc6ICdJJyxcbiAgICAnXFx1MDEyQSc6ICdJJyxcbiAgICAnXFx1MDEyQyc6ICdJJyxcbiAgICAnXFx1MDEzMCc6ICdJJyxcbiAgICAnXFx1MDBDRic6ICdJJyxcbiAgICAnXFx1MUUyRSc6ICdJJyxcbiAgICAnXFx1MUVDOCc6ICdJJyxcbiAgICAnXFx1MDFDRic6ICdJJyxcbiAgICAnXFx1MDIwOCc6ICdJJyxcbiAgICAnXFx1MDIwQSc6ICdJJyxcbiAgICAnXFx1MUVDQSc6ICdJJyxcbiAgICAnXFx1MDEyRSc6ICdJJyxcbiAgICAnXFx1MUUyQyc6ICdJJyxcbiAgICAnXFx1MDE5Nyc6ICdJJyxcbiAgICAnXFx1MjRCRic6ICdKJyxcbiAgICAnXFx1RkYyQSc6ICdKJyxcbiAgICAnXFx1MDEzNCc6ICdKJyxcbiAgICAnXFx1MDI0OCc6ICdKJyxcbiAgICAnXFx1MjRDMCc6ICdLJyxcbiAgICAnXFx1RkYyQic6ICdLJyxcbiAgICAnXFx1MUUzMCc6ICdLJyxcbiAgICAnXFx1MDFFOCc6ICdLJyxcbiAgICAnXFx1MUUzMic6ICdLJyxcbiAgICAnXFx1MDEzNic6ICdLJyxcbiAgICAnXFx1MUUzNCc6ICdLJyxcbiAgICAnXFx1MDE5OCc6ICdLJyxcbiAgICAnXFx1MkM2OSc6ICdLJyxcbiAgICAnXFx1QTc0MCc6ICdLJyxcbiAgICAnXFx1QTc0Mic6ICdLJyxcbiAgICAnXFx1QTc0NCc6ICdLJyxcbiAgICAnXFx1QTdBMic6ICdLJyxcbiAgICAnXFx1MjRDMSc6ICdMJyxcbiAgICAnXFx1RkYyQyc6ICdMJyxcbiAgICAnXFx1MDEzRic6ICdMJyxcbiAgICAnXFx1MDEzOSc6ICdMJyxcbiAgICAnXFx1MDEzRCc6ICdMJyxcbiAgICAnXFx1MUUzNic6ICdMJyxcbiAgICAnXFx1MUUzOCc6ICdMJyxcbiAgICAnXFx1MDEzQic6ICdMJyxcbiAgICAnXFx1MUUzQyc6ICdMJyxcbiAgICAnXFx1MUUzQSc6ICdMJyxcbiAgICAnXFx1MDE0MSc6ICdMJyxcbiAgICAnXFx1MDIzRCc6ICdMJyxcbiAgICAnXFx1MkM2Mic6ICdMJyxcbiAgICAnXFx1MkM2MCc6ICdMJyxcbiAgICAnXFx1QTc0OCc6ICdMJyxcbiAgICAnXFx1QTc0Nic6ICdMJyxcbiAgICAnXFx1QTc4MCc6ICdMJyxcbiAgICAnXFx1MDFDNyc6ICdMSicsXG4gICAgJ1xcdTAxQzgnOiAnTGonLFxuICAgICdcXHUyNEMyJzogJ00nLFxuICAgICdcXHVGRjJEJzogJ00nLFxuICAgICdcXHUxRTNFJzogJ00nLFxuICAgICdcXHUxRTQwJzogJ00nLFxuICAgICdcXHUxRTQyJzogJ00nLFxuICAgICdcXHUyQzZFJzogJ00nLFxuICAgICdcXHUwMTlDJzogJ00nLFxuICAgICdcXHUyNEMzJzogJ04nLFxuICAgICdcXHVGRjJFJzogJ04nLFxuICAgICdcXHUwMUY4JzogJ04nLFxuICAgICdcXHUwMTQzJzogJ04nLFxuICAgICdcXHUwMEQxJzogJ04nLFxuICAgICdcXHUxRTQ0JzogJ04nLFxuICAgICdcXHUwMTQ3JzogJ04nLFxuICAgICdcXHUxRTQ2JzogJ04nLFxuICAgICdcXHUwMTQ1JzogJ04nLFxuICAgICdcXHUxRTRBJzogJ04nLFxuICAgICdcXHUxRTQ4JzogJ04nLFxuICAgICdcXHUwMjIwJzogJ04nLFxuICAgICdcXHUwMTlEJzogJ04nLFxuICAgICdcXHVBNzkwJzogJ04nLFxuICAgICdcXHVBN0E0JzogJ04nLFxuICAgICdcXHUwMUNBJzogJ05KJyxcbiAgICAnXFx1MDFDQic6ICdOaicsXG4gICAgJ1xcdTI0QzQnOiAnTycsXG4gICAgJ1xcdUZGMkYnOiAnTycsXG4gICAgJ1xcdTAwRDInOiAnTycsXG4gICAgJ1xcdTAwRDMnOiAnTycsXG4gICAgJ1xcdTAwRDQnOiAnTycsXG4gICAgJ1xcdTFFRDInOiAnTycsXG4gICAgJ1xcdTFFRDAnOiAnTycsXG4gICAgJ1xcdTFFRDYnOiAnTycsXG4gICAgJ1xcdTFFRDQnOiAnTycsXG4gICAgJ1xcdTAwRDUnOiAnTycsXG4gICAgJ1xcdTFFNEMnOiAnTycsXG4gICAgJ1xcdTAyMkMnOiAnTycsXG4gICAgJ1xcdTFFNEUnOiAnTycsXG4gICAgJ1xcdTAxNEMnOiAnTycsXG4gICAgJ1xcdTFFNTAnOiAnTycsXG4gICAgJ1xcdTFFNTInOiAnTycsXG4gICAgJ1xcdTAxNEUnOiAnTycsXG4gICAgJ1xcdTAyMkUnOiAnTycsXG4gICAgJ1xcdTAyMzAnOiAnTycsXG4gICAgJ1xcdTAwRDYnOiAnTycsXG4gICAgJ1xcdTAyMkEnOiAnTycsXG4gICAgJ1xcdTFFQ0UnOiAnTycsXG4gICAgJ1xcdTAxNTAnOiAnTycsXG4gICAgJ1xcdTAxRDEnOiAnTycsXG4gICAgJ1xcdTAyMEMnOiAnTycsXG4gICAgJ1xcdTAyMEUnOiAnTycsXG4gICAgJ1xcdTAxQTAnOiAnTycsXG4gICAgJ1xcdTFFREMnOiAnTycsXG4gICAgJ1xcdTFFREEnOiAnTycsXG4gICAgJ1xcdTFFRTAnOiAnTycsXG4gICAgJ1xcdTFFREUnOiAnTycsXG4gICAgJ1xcdTFFRTInOiAnTycsXG4gICAgJ1xcdTFFQ0MnOiAnTycsXG4gICAgJ1xcdTFFRDgnOiAnTycsXG4gICAgJ1xcdTAxRUEnOiAnTycsXG4gICAgJ1xcdTAxRUMnOiAnTycsXG4gICAgJ1xcdTAwRDgnOiAnTycsXG4gICAgJ1xcdTAxRkUnOiAnTycsXG4gICAgJ1xcdTAxODYnOiAnTycsXG4gICAgJ1xcdTAxOUYnOiAnTycsXG4gICAgJ1xcdUE3NEEnOiAnTycsXG4gICAgJ1xcdUE3NEMnOiAnTycsXG4gICAgJ1xcdTAxQTInOiAnT0knLFxuICAgICdcXHVBNzRFJzogJ09PJyxcbiAgICAnXFx1MDIyMic6ICdPVScsXG4gICAgJ1xcdTI0QzUnOiAnUCcsXG4gICAgJ1xcdUZGMzAnOiAnUCcsXG4gICAgJ1xcdTFFNTQnOiAnUCcsXG4gICAgJ1xcdTFFNTYnOiAnUCcsXG4gICAgJ1xcdTAxQTQnOiAnUCcsXG4gICAgJ1xcdTJDNjMnOiAnUCcsXG4gICAgJ1xcdUE3NTAnOiAnUCcsXG4gICAgJ1xcdUE3NTInOiAnUCcsXG4gICAgJ1xcdUE3NTQnOiAnUCcsXG4gICAgJ1xcdTI0QzYnOiAnUScsXG4gICAgJ1xcdUZGMzEnOiAnUScsXG4gICAgJ1xcdUE3NTYnOiAnUScsXG4gICAgJ1xcdUE3NTgnOiAnUScsXG4gICAgJ1xcdTAyNEEnOiAnUScsXG4gICAgJ1xcdTI0QzcnOiAnUicsXG4gICAgJ1xcdUZGMzInOiAnUicsXG4gICAgJ1xcdTAxNTQnOiAnUicsXG4gICAgJ1xcdTFFNTgnOiAnUicsXG4gICAgJ1xcdTAxNTgnOiAnUicsXG4gICAgJ1xcdTAyMTAnOiAnUicsXG4gICAgJ1xcdTAyMTInOiAnUicsXG4gICAgJ1xcdTFFNUEnOiAnUicsXG4gICAgJ1xcdTFFNUMnOiAnUicsXG4gICAgJ1xcdTAxNTYnOiAnUicsXG4gICAgJ1xcdTFFNUUnOiAnUicsXG4gICAgJ1xcdTAyNEMnOiAnUicsXG4gICAgJ1xcdTJDNjQnOiAnUicsXG4gICAgJ1xcdUE3NUEnOiAnUicsXG4gICAgJ1xcdUE3QTYnOiAnUicsXG4gICAgJ1xcdUE3ODInOiAnUicsXG4gICAgJ1xcdTI0QzgnOiAnUycsXG4gICAgJ1xcdUZGMzMnOiAnUycsXG4gICAgJ1xcdTFFOUUnOiAnUycsXG4gICAgJ1xcdTAxNUEnOiAnUycsXG4gICAgJ1xcdTFFNjQnOiAnUycsXG4gICAgJ1xcdTAxNUMnOiAnUycsXG4gICAgJ1xcdTFFNjAnOiAnUycsXG4gICAgJ1xcdTAxNjAnOiAnUycsXG4gICAgJ1xcdTFFNjYnOiAnUycsXG4gICAgJ1xcdTFFNjInOiAnUycsXG4gICAgJ1xcdTFFNjgnOiAnUycsXG4gICAgJ1xcdTAyMTgnOiAnUycsXG4gICAgJ1xcdTAxNUUnOiAnUycsXG4gICAgJ1xcdTJDN0UnOiAnUycsXG4gICAgJ1xcdUE3QTgnOiAnUycsXG4gICAgJ1xcdUE3ODQnOiAnUycsXG4gICAgJ1xcdTI0QzknOiAnVCcsXG4gICAgJ1xcdUZGMzQnOiAnVCcsXG4gICAgJ1xcdTFFNkEnOiAnVCcsXG4gICAgJ1xcdTAxNjQnOiAnVCcsXG4gICAgJ1xcdTFFNkMnOiAnVCcsXG4gICAgJ1xcdTAyMUEnOiAnVCcsXG4gICAgJ1xcdTAxNjInOiAnVCcsXG4gICAgJ1xcdTFFNzAnOiAnVCcsXG4gICAgJ1xcdTFFNkUnOiAnVCcsXG4gICAgJ1xcdTAxNjYnOiAnVCcsXG4gICAgJ1xcdTAxQUMnOiAnVCcsXG4gICAgJ1xcdTAxQUUnOiAnVCcsXG4gICAgJ1xcdTAyM0UnOiAnVCcsXG4gICAgJ1xcdUE3ODYnOiAnVCcsXG4gICAgJ1xcdUE3MjgnOiAnVFonLFxuICAgICdcXHUyNENBJzogJ1UnLFxuICAgICdcXHVGRjM1JzogJ1UnLFxuICAgICdcXHUwMEQ5JzogJ1UnLFxuICAgICdcXHUwMERBJzogJ1UnLFxuICAgICdcXHUwMERCJzogJ1UnLFxuICAgICdcXHUwMTY4JzogJ1UnLFxuICAgICdcXHUxRTc4JzogJ1UnLFxuICAgICdcXHUwMTZBJzogJ1UnLFxuICAgICdcXHUxRTdBJzogJ1UnLFxuICAgICdcXHUwMTZDJzogJ1UnLFxuICAgICdcXHUwMERDJzogJ1UnLFxuICAgICdcXHUwMURCJzogJ1UnLFxuICAgICdcXHUwMUQ3JzogJ1UnLFxuICAgICdcXHUwMUQ1JzogJ1UnLFxuICAgICdcXHUwMUQ5JzogJ1UnLFxuICAgICdcXHUxRUU2JzogJ1UnLFxuICAgICdcXHUwMTZFJzogJ1UnLFxuICAgICdcXHUwMTcwJzogJ1UnLFxuICAgICdcXHUwMUQzJzogJ1UnLFxuICAgICdcXHUwMjE0JzogJ1UnLFxuICAgICdcXHUwMjE2JzogJ1UnLFxuICAgICdcXHUwMUFGJzogJ1UnLFxuICAgICdcXHUxRUVBJzogJ1UnLFxuICAgICdcXHUxRUU4JzogJ1UnLFxuICAgICdcXHUxRUVFJzogJ1UnLFxuICAgICdcXHUxRUVDJzogJ1UnLFxuICAgICdcXHUxRUYwJzogJ1UnLFxuICAgICdcXHUxRUU0JzogJ1UnLFxuICAgICdcXHUxRTcyJzogJ1UnLFxuICAgICdcXHUwMTcyJzogJ1UnLFxuICAgICdcXHUxRTc2JzogJ1UnLFxuICAgICdcXHUxRTc0JzogJ1UnLFxuICAgICdcXHUwMjQ0JzogJ1UnLFxuICAgICdcXHUyNENCJzogJ1YnLFxuICAgICdcXHVGRjM2JzogJ1YnLFxuICAgICdcXHUxRTdDJzogJ1YnLFxuICAgICdcXHUxRTdFJzogJ1YnLFxuICAgICdcXHUwMUIyJzogJ1YnLFxuICAgICdcXHVBNzVFJzogJ1YnLFxuICAgICdcXHUwMjQ1JzogJ1YnLFxuICAgICdcXHVBNzYwJzogJ1ZZJyxcbiAgICAnXFx1MjRDQyc6ICdXJyxcbiAgICAnXFx1RkYzNyc6ICdXJyxcbiAgICAnXFx1MUU4MCc6ICdXJyxcbiAgICAnXFx1MUU4Mic6ICdXJyxcbiAgICAnXFx1MDE3NCc6ICdXJyxcbiAgICAnXFx1MUU4Nic6ICdXJyxcbiAgICAnXFx1MUU4NCc6ICdXJyxcbiAgICAnXFx1MUU4OCc6ICdXJyxcbiAgICAnXFx1MkM3Mic6ICdXJyxcbiAgICAnXFx1MjRDRCc6ICdYJyxcbiAgICAnXFx1RkYzOCc6ICdYJyxcbiAgICAnXFx1MUU4QSc6ICdYJyxcbiAgICAnXFx1MUU4Qyc6ICdYJyxcbiAgICAnXFx1MjRDRSc6ICdZJyxcbiAgICAnXFx1RkYzOSc6ICdZJyxcbiAgICAnXFx1MUVGMic6ICdZJyxcbiAgICAnXFx1MDBERCc6ICdZJyxcbiAgICAnXFx1MDE3Nic6ICdZJyxcbiAgICAnXFx1MUVGOCc6ICdZJyxcbiAgICAnXFx1MDIzMic6ICdZJyxcbiAgICAnXFx1MUU4RSc6ICdZJyxcbiAgICAnXFx1MDE3OCc6ICdZJyxcbiAgICAnXFx1MUVGNic6ICdZJyxcbiAgICAnXFx1MUVGNCc6ICdZJyxcbiAgICAnXFx1MDFCMyc6ICdZJyxcbiAgICAnXFx1MDI0RSc6ICdZJyxcbiAgICAnXFx1MUVGRSc6ICdZJyxcbiAgICAnXFx1MjRDRic6ICdaJyxcbiAgICAnXFx1RkYzQSc6ICdaJyxcbiAgICAnXFx1MDE3OSc6ICdaJyxcbiAgICAnXFx1MUU5MCc6ICdaJyxcbiAgICAnXFx1MDE3Qic6ICdaJyxcbiAgICAnXFx1MDE3RCc6ICdaJyxcbiAgICAnXFx1MUU5Mic6ICdaJyxcbiAgICAnXFx1MUU5NCc6ICdaJyxcbiAgICAnXFx1MDFCNSc6ICdaJyxcbiAgICAnXFx1MDIyNCc6ICdaJyxcbiAgICAnXFx1MkM3Ric6ICdaJyxcbiAgICAnXFx1MkM2Qic6ICdaJyxcbiAgICAnXFx1QTc2Mic6ICdaJyxcbiAgICAnXFx1MjREMCc6ICdhJyxcbiAgICAnXFx1RkY0MSc6ICdhJyxcbiAgICAnXFx1MUU5QSc6ICdhJyxcbiAgICAnXFx1MDBFMCc6ICdhJyxcbiAgICAnXFx1MDBFMSc6ICdhJyxcbiAgICAnXFx1MDBFMic6ICdhJyxcbiAgICAnXFx1MUVBNyc6ICdhJyxcbiAgICAnXFx1MUVBNSc6ICdhJyxcbiAgICAnXFx1MUVBQic6ICdhJyxcbiAgICAnXFx1MUVBOSc6ICdhJyxcbiAgICAnXFx1MDBFMyc6ICdhJyxcbiAgICAnXFx1MDEwMSc6ICdhJyxcbiAgICAnXFx1MDEwMyc6ICdhJyxcbiAgICAnXFx1MUVCMSc6ICdhJyxcbiAgICAnXFx1MUVBRic6ICdhJyxcbiAgICAnXFx1MUVCNSc6ICdhJyxcbiAgICAnXFx1MUVCMyc6ICdhJyxcbiAgICAnXFx1MDIyNyc6ICdhJyxcbiAgICAnXFx1MDFFMSc6ICdhJyxcbiAgICAnXFx1MDBFNCc6ICdhJyxcbiAgICAnXFx1MDFERic6ICdhJyxcbiAgICAnXFx1MUVBMyc6ICdhJyxcbiAgICAnXFx1MDBFNSc6ICdhJyxcbiAgICAnXFx1MDFGQic6ICdhJyxcbiAgICAnXFx1MDFDRSc6ICdhJyxcbiAgICAnXFx1MDIwMSc6ICdhJyxcbiAgICAnXFx1MDIwMyc6ICdhJyxcbiAgICAnXFx1MUVBMSc6ICdhJyxcbiAgICAnXFx1MUVBRCc6ICdhJyxcbiAgICAnXFx1MUVCNyc6ICdhJyxcbiAgICAnXFx1MUUwMSc6ICdhJyxcbiAgICAnXFx1MDEwNSc6ICdhJyxcbiAgICAnXFx1MkM2NSc6ICdhJyxcbiAgICAnXFx1MDI1MCc6ICdhJyxcbiAgICAnXFx1QTczMyc6ICdhYScsXG4gICAgJ1xcdTAwRTYnOiAnYWUnLFxuICAgICdcXHUwMUZEJzogJ2FlJyxcbiAgICAnXFx1MDFFMyc6ICdhZScsXG4gICAgJ1xcdUE3MzUnOiAnYW8nLFxuICAgICdcXHVBNzM3JzogJ2F1JyxcbiAgICAnXFx1QTczOSc6ICdhdicsXG4gICAgJ1xcdUE3M0InOiAnYXYnLFxuICAgICdcXHVBNzNEJzogJ2F5JyxcbiAgICAnXFx1MjREMSc6ICdiJyxcbiAgICAnXFx1RkY0Mic6ICdiJyxcbiAgICAnXFx1MUUwMyc6ICdiJyxcbiAgICAnXFx1MUUwNSc6ICdiJyxcbiAgICAnXFx1MUUwNyc6ICdiJyxcbiAgICAnXFx1MDE4MCc6ICdiJyxcbiAgICAnXFx1MDE4Myc6ICdiJyxcbiAgICAnXFx1MDI1Myc6ICdiJyxcbiAgICAnXFx1MjREMic6ICdjJyxcbiAgICAnXFx1RkY0Myc6ICdjJyxcbiAgICAnXFx1MDEwNyc6ICdjJyxcbiAgICAnXFx1MDEwOSc6ICdjJyxcbiAgICAnXFx1MDEwQic6ICdjJyxcbiAgICAnXFx1MDEwRCc6ICdjJyxcbiAgICAnXFx1MDBFNyc6ICdjJyxcbiAgICAnXFx1MUUwOSc6ICdjJyxcbiAgICAnXFx1MDE4OCc6ICdjJyxcbiAgICAnXFx1MDIzQyc6ICdjJyxcbiAgICAnXFx1QTczRic6ICdjJyxcbiAgICAnXFx1MjE4NCc6ICdjJyxcbiAgICAnXFx1MjREMyc6ICdkJyxcbiAgICAnXFx1RkY0NCc6ICdkJyxcbiAgICAnXFx1MUUwQic6ICdkJyxcbiAgICAnXFx1MDEwRic6ICdkJyxcbiAgICAnXFx1MUUwRCc6ICdkJyxcbiAgICAnXFx1MUUxMSc6ICdkJyxcbiAgICAnXFx1MUUxMyc6ICdkJyxcbiAgICAnXFx1MUUwRic6ICdkJyxcbiAgICAnXFx1MDExMSc6ICdkJyxcbiAgICAnXFx1MDE4Qyc6ICdkJyxcbiAgICAnXFx1MDI1Nic6ICdkJyxcbiAgICAnXFx1MDI1Nyc6ICdkJyxcbiAgICAnXFx1QTc3QSc6ICdkJyxcbiAgICAnXFx1MDFGMyc6ICdkeicsXG4gICAgJ1xcdTAxQzYnOiAnZHonLFxuICAgICdcXHUyNEQ0JzogJ2UnLFxuICAgICdcXHVGRjQ1JzogJ2UnLFxuICAgICdcXHUwMEU4JzogJ2UnLFxuICAgICdcXHUwMEU5JzogJ2UnLFxuICAgICdcXHUwMEVBJzogJ2UnLFxuICAgICdcXHUxRUMxJzogJ2UnLFxuICAgICdcXHUxRUJGJzogJ2UnLFxuICAgICdcXHUxRUM1JzogJ2UnLFxuICAgICdcXHUxRUMzJzogJ2UnLFxuICAgICdcXHUxRUJEJzogJ2UnLFxuICAgICdcXHUwMTEzJzogJ2UnLFxuICAgICdcXHUxRTE1JzogJ2UnLFxuICAgICdcXHUxRTE3JzogJ2UnLFxuICAgICdcXHUwMTE1JzogJ2UnLFxuICAgICdcXHUwMTE3JzogJ2UnLFxuICAgICdcXHUwMEVCJzogJ2UnLFxuICAgICdcXHUxRUJCJzogJ2UnLFxuICAgICdcXHUwMTFCJzogJ2UnLFxuICAgICdcXHUwMjA1JzogJ2UnLFxuICAgICdcXHUwMjA3JzogJ2UnLFxuICAgICdcXHUxRUI5JzogJ2UnLFxuICAgICdcXHUxRUM3JzogJ2UnLFxuICAgICdcXHUwMjI5JzogJ2UnLFxuICAgICdcXHUxRTFEJzogJ2UnLFxuICAgICdcXHUwMTE5JzogJ2UnLFxuICAgICdcXHUxRTE5JzogJ2UnLFxuICAgICdcXHUxRTFCJzogJ2UnLFxuICAgICdcXHUwMjQ3JzogJ2UnLFxuICAgICdcXHUwMjVCJzogJ2UnLFxuICAgICdcXHUwMUREJzogJ2UnLFxuICAgICdcXHUyNEQ1JzogJ2YnLFxuICAgICdcXHVGRjQ2JzogJ2YnLFxuICAgICdcXHUxRTFGJzogJ2YnLFxuICAgICdcXHUwMTkyJzogJ2YnLFxuICAgICdcXHVBNzdDJzogJ2YnLFxuICAgICdcXHUyNEQ2JzogJ2cnLFxuICAgICdcXHVGRjQ3JzogJ2cnLFxuICAgICdcXHUwMUY1JzogJ2cnLFxuICAgICdcXHUwMTFEJzogJ2cnLFxuICAgICdcXHUxRTIxJzogJ2cnLFxuICAgICdcXHUwMTFGJzogJ2cnLFxuICAgICdcXHUwMTIxJzogJ2cnLFxuICAgICdcXHUwMUU3JzogJ2cnLFxuICAgICdcXHUwMTIzJzogJ2cnLFxuICAgICdcXHUwMUU1JzogJ2cnLFxuICAgICdcXHUwMjYwJzogJ2cnLFxuICAgICdcXHVBN0ExJzogJ2cnLFxuICAgICdcXHUxRDc5JzogJ2cnLFxuICAgICdcXHVBNzdGJzogJ2cnLFxuICAgICdcXHUyNEQ3JzogJ2gnLFxuICAgICdcXHVGRjQ4JzogJ2gnLFxuICAgICdcXHUwMTI1JzogJ2gnLFxuICAgICdcXHUxRTIzJzogJ2gnLFxuICAgICdcXHUxRTI3JzogJ2gnLFxuICAgICdcXHUwMjFGJzogJ2gnLFxuICAgICdcXHUxRTI1JzogJ2gnLFxuICAgICdcXHUxRTI5JzogJ2gnLFxuICAgICdcXHUxRTJCJzogJ2gnLFxuICAgICdcXHUxRTk2JzogJ2gnLFxuICAgICdcXHUwMTI3JzogJ2gnLFxuICAgICdcXHUyQzY4JzogJ2gnLFxuICAgICdcXHUyQzc2JzogJ2gnLFxuICAgICdcXHUwMjY1JzogJ2gnLFxuICAgICdcXHUwMTk1JzogJ2h2JyxcbiAgICAnXFx1MjREOCc6ICdpJyxcbiAgICAnXFx1RkY0OSc6ICdpJyxcbiAgICAnXFx1MDBFQyc6ICdpJyxcbiAgICAnXFx1MDBFRCc6ICdpJyxcbiAgICAnXFx1MDBFRSc6ICdpJyxcbiAgICAnXFx1MDEyOSc6ICdpJyxcbiAgICAnXFx1MDEyQic6ICdpJyxcbiAgICAnXFx1MDEyRCc6ICdpJyxcbiAgICAnXFx1MDBFRic6ICdpJyxcbiAgICAnXFx1MUUyRic6ICdpJyxcbiAgICAnXFx1MUVDOSc6ICdpJyxcbiAgICAnXFx1MDFEMCc6ICdpJyxcbiAgICAnXFx1MDIwOSc6ICdpJyxcbiAgICAnXFx1MDIwQic6ICdpJyxcbiAgICAnXFx1MUVDQic6ICdpJyxcbiAgICAnXFx1MDEyRic6ICdpJyxcbiAgICAnXFx1MUUyRCc6ICdpJyxcbiAgICAnXFx1MDI2OCc6ICdpJyxcbiAgICAnXFx1MDEzMSc6ICdpJyxcbiAgICAnXFx1MjREOSc6ICdqJyxcbiAgICAnXFx1RkY0QSc6ICdqJyxcbiAgICAnXFx1MDEzNSc6ICdqJyxcbiAgICAnXFx1MDFGMCc6ICdqJyxcbiAgICAnXFx1MDI0OSc6ICdqJyxcbiAgICAnXFx1MjREQSc6ICdrJyxcbiAgICAnXFx1RkY0Qic6ICdrJyxcbiAgICAnXFx1MUUzMSc6ICdrJyxcbiAgICAnXFx1MDFFOSc6ICdrJyxcbiAgICAnXFx1MUUzMyc6ICdrJyxcbiAgICAnXFx1MDEzNyc6ICdrJyxcbiAgICAnXFx1MUUzNSc6ICdrJyxcbiAgICAnXFx1MDE5OSc6ICdrJyxcbiAgICAnXFx1MkM2QSc6ICdrJyxcbiAgICAnXFx1QTc0MSc6ICdrJyxcbiAgICAnXFx1QTc0Myc6ICdrJyxcbiAgICAnXFx1QTc0NSc6ICdrJyxcbiAgICAnXFx1QTdBMyc6ICdrJyxcbiAgICAnXFx1MjREQic6ICdsJyxcbiAgICAnXFx1RkY0Qyc6ICdsJyxcbiAgICAnXFx1MDE0MCc6ICdsJyxcbiAgICAnXFx1MDEzQSc6ICdsJyxcbiAgICAnXFx1MDEzRSc6ICdsJyxcbiAgICAnXFx1MUUzNyc6ICdsJyxcbiAgICAnXFx1MUUzOSc6ICdsJyxcbiAgICAnXFx1MDEzQyc6ICdsJyxcbiAgICAnXFx1MUUzRCc6ICdsJyxcbiAgICAnXFx1MUUzQic6ICdsJyxcbiAgICAnXFx1MDE3Ric6ICdsJyxcbiAgICAnXFx1MDE0Mic6ICdsJyxcbiAgICAnXFx1MDE5QSc6ICdsJyxcbiAgICAnXFx1MDI2Qic6ICdsJyxcbiAgICAnXFx1MkM2MSc6ICdsJyxcbiAgICAnXFx1QTc0OSc6ICdsJyxcbiAgICAnXFx1QTc4MSc6ICdsJyxcbiAgICAnXFx1QTc0Nyc6ICdsJyxcbiAgICAnXFx1MDFDOSc6ICdsaicsXG4gICAgJ1xcdTI0REMnOiAnbScsXG4gICAgJ1xcdUZGNEQnOiAnbScsXG4gICAgJ1xcdTFFM0YnOiAnbScsXG4gICAgJ1xcdTFFNDEnOiAnbScsXG4gICAgJ1xcdTFFNDMnOiAnbScsXG4gICAgJ1xcdTAyNzEnOiAnbScsXG4gICAgJ1xcdTAyNkYnOiAnbScsXG4gICAgJ1xcdTI0REQnOiAnbicsXG4gICAgJ1xcdUZGNEUnOiAnbicsXG4gICAgJ1xcdTAxRjknOiAnbicsXG4gICAgJ1xcdTAxNDQnOiAnbicsXG4gICAgJ1xcdTAwRjEnOiAnbicsXG4gICAgJ1xcdTFFNDUnOiAnbicsXG4gICAgJ1xcdTAxNDgnOiAnbicsXG4gICAgJ1xcdTFFNDcnOiAnbicsXG4gICAgJ1xcdTAxNDYnOiAnbicsXG4gICAgJ1xcdTFFNEInOiAnbicsXG4gICAgJ1xcdTFFNDknOiAnbicsXG4gICAgJ1xcdTAxOUUnOiAnbicsXG4gICAgJ1xcdTAyNzInOiAnbicsXG4gICAgJ1xcdTAxNDknOiAnbicsXG4gICAgJ1xcdUE3OTEnOiAnbicsXG4gICAgJ1xcdUE3QTUnOiAnbicsXG4gICAgJ1xcdTAxQ0MnOiAnbmonLFxuICAgICdcXHUyNERFJzogJ28nLFxuICAgICdcXHVGRjRGJzogJ28nLFxuICAgICdcXHUwMEYyJzogJ28nLFxuICAgICdcXHUwMEYzJzogJ28nLFxuICAgICdcXHUwMEY0JzogJ28nLFxuICAgICdcXHUxRUQzJzogJ28nLFxuICAgICdcXHUxRUQxJzogJ28nLFxuICAgICdcXHUxRUQ3JzogJ28nLFxuICAgICdcXHUxRUQ1JzogJ28nLFxuICAgICdcXHUwMEY1JzogJ28nLFxuICAgICdcXHUxRTREJzogJ28nLFxuICAgICdcXHUwMjJEJzogJ28nLFxuICAgICdcXHUxRTRGJzogJ28nLFxuICAgICdcXHUwMTREJzogJ28nLFxuICAgICdcXHUxRTUxJzogJ28nLFxuICAgICdcXHUxRTUzJzogJ28nLFxuICAgICdcXHUwMTRGJzogJ28nLFxuICAgICdcXHUwMjJGJzogJ28nLFxuICAgICdcXHUwMjMxJzogJ28nLFxuICAgICdcXHUwMEY2JzogJ28nLFxuICAgICdcXHUwMjJCJzogJ28nLFxuICAgICdcXHUxRUNGJzogJ28nLFxuICAgICdcXHUwMTUxJzogJ28nLFxuICAgICdcXHUwMUQyJzogJ28nLFxuICAgICdcXHUwMjBEJzogJ28nLFxuICAgICdcXHUwMjBGJzogJ28nLFxuICAgICdcXHUwMUExJzogJ28nLFxuICAgICdcXHUxRUREJzogJ28nLFxuICAgICdcXHUxRURCJzogJ28nLFxuICAgICdcXHUxRUUxJzogJ28nLFxuICAgICdcXHUxRURGJzogJ28nLFxuICAgICdcXHUxRUUzJzogJ28nLFxuICAgICdcXHUxRUNEJzogJ28nLFxuICAgICdcXHUxRUQ5JzogJ28nLFxuICAgICdcXHUwMUVCJzogJ28nLFxuICAgICdcXHUwMUVEJzogJ28nLFxuICAgICdcXHUwMEY4JzogJ28nLFxuICAgICdcXHUwMUZGJzogJ28nLFxuICAgICdcXHUwMjU0JzogJ28nLFxuICAgICdcXHVBNzRCJzogJ28nLFxuICAgICdcXHVBNzREJzogJ28nLFxuICAgICdcXHUwMjc1JzogJ28nLFxuICAgICdcXHUwMUEzJzogJ29pJyxcbiAgICAnXFx1MDIyMyc6ICdvdScsXG4gICAgJ1xcdUE3NEYnOiAnb28nLFxuICAgICdcXHUyNERGJzogJ3AnLFxuICAgICdcXHVGRjUwJzogJ3AnLFxuICAgICdcXHUxRTU1JzogJ3AnLFxuICAgICdcXHUxRTU3JzogJ3AnLFxuICAgICdcXHUwMUE1JzogJ3AnLFxuICAgICdcXHUxRDdEJzogJ3AnLFxuICAgICdcXHVBNzUxJzogJ3AnLFxuICAgICdcXHVBNzUzJzogJ3AnLFxuICAgICdcXHVBNzU1JzogJ3AnLFxuICAgICdcXHUyNEUwJzogJ3EnLFxuICAgICdcXHVGRjUxJzogJ3EnLFxuICAgICdcXHUwMjRCJzogJ3EnLFxuICAgICdcXHVBNzU3JzogJ3EnLFxuICAgICdcXHVBNzU5JzogJ3EnLFxuICAgICdcXHUyNEUxJzogJ3InLFxuICAgICdcXHVGRjUyJzogJ3InLFxuICAgICdcXHUwMTU1JzogJ3InLFxuICAgICdcXHUxRTU5JzogJ3InLFxuICAgICdcXHUwMTU5JzogJ3InLFxuICAgICdcXHUwMjExJzogJ3InLFxuICAgICdcXHUwMjEzJzogJ3InLFxuICAgICdcXHUxRTVCJzogJ3InLFxuICAgICdcXHUxRTVEJzogJ3InLFxuICAgICdcXHUwMTU3JzogJ3InLFxuICAgICdcXHUxRTVGJzogJ3InLFxuICAgICdcXHUwMjREJzogJ3InLFxuICAgICdcXHUwMjdEJzogJ3InLFxuICAgICdcXHVBNzVCJzogJ3InLFxuICAgICdcXHVBN0E3JzogJ3InLFxuICAgICdcXHVBNzgzJzogJ3InLFxuICAgICdcXHUyNEUyJzogJ3MnLFxuICAgICdcXHVGRjUzJzogJ3MnLFxuICAgICdcXHUwMERGJzogJ3MnLFxuICAgICdcXHUwMTVCJzogJ3MnLFxuICAgICdcXHUxRTY1JzogJ3MnLFxuICAgICdcXHUwMTVEJzogJ3MnLFxuICAgICdcXHUxRTYxJzogJ3MnLFxuICAgICdcXHUwMTYxJzogJ3MnLFxuICAgICdcXHUxRTY3JzogJ3MnLFxuICAgICdcXHUxRTYzJzogJ3MnLFxuICAgICdcXHUxRTY5JzogJ3MnLFxuICAgICdcXHUwMjE5JzogJ3MnLFxuICAgICdcXHUwMTVGJzogJ3MnLFxuICAgICdcXHUwMjNGJzogJ3MnLFxuICAgICdcXHVBN0E5JzogJ3MnLFxuICAgICdcXHVBNzg1JzogJ3MnLFxuICAgICdcXHUxRTlCJzogJ3MnLFxuICAgICdcXHUyNEUzJzogJ3QnLFxuICAgICdcXHVGRjU0JzogJ3QnLFxuICAgICdcXHUxRTZCJzogJ3QnLFxuICAgICdcXHUxRTk3JzogJ3QnLFxuICAgICdcXHUwMTY1JzogJ3QnLFxuICAgICdcXHUxRTZEJzogJ3QnLFxuICAgICdcXHUwMjFCJzogJ3QnLFxuICAgICdcXHUwMTYzJzogJ3QnLFxuICAgICdcXHUxRTcxJzogJ3QnLFxuICAgICdcXHUxRTZGJzogJ3QnLFxuICAgICdcXHUwMTY3JzogJ3QnLFxuICAgICdcXHUwMUFEJzogJ3QnLFxuICAgICdcXHUwMjg4JzogJ3QnLFxuICAgICdcXHUyQzY2JzogJ3QnLFxuICAgICdcXHVBNzg3JzogJ3QnLFxuICAgICdcXHVBNzI5JzogJ3R6JyxcbiAgICAnXFx1MjRFNCc6ICd1JyxcbiAgICAnXFx1RkY1NSc6ICd1JyxcbiAgICAnXFx1MDBGOSc6ICd1JyxcbiAgICAnXFx1MDBGQSc6ICd1JyxcbiAgICAnXFx1MDBGQic6ICd1JyxcbiAgICAnXFx1MDE2OSc6ICd1JyxcbiAgICAnXFx1MUU3OSc6ICd1JyxcbiAgICAnXFx1MDE2Qic6ICd1JyxcbiAgICAnXFx1MUU3Qic6ICd1JyxcbiAgICAnXFx1MDE2RCc6ICd1JyxcbiAgICAnXFx1MDBGQyc6ICd1JyxcbiAgICAnXFx1MDFEQyc6ICd1JyxcbiAgICAnXFx1MDFEOCc6ICd1JyxcbiAgICAnXFx1MDFENic6ICd1JyxcbiAgICAnXFx1MDFEQSc6ICd1JyxcbiAgICAnXFx1MUVFNyc6ICd1JyxcbiAgICAnXFx1MDE2Ric6ICd1JyxcbiAgICAnXFx1MDE3MSc6ICd1JyxcbiAgICAnXFx1MDFENCc6ICd1JyxcbiAgICAnXFx1MDIxNSc6ICd1JyxcbiAgICAnXFx1MDIxNyc6ICd1JyxcbiAgICAnXFx1MDFCMCc6ICd1JyxcbiAgICAnXFx1MUVFQic6ICd1JyxcbiAgICAnXFx1MUVFOSc6ICd1JyxcbiAgICAnXFx1MUVFRic6ICd1JyxcbiAgICAnXFx1MUVFRCc6ICd1JyxcbiAgICAnXFx1MUVGMSc6ICd1JyxcbiAgICAnXFx1MUVFNSc6ICd1JyxcbiAgICAnXFx1MUU3Myc6ICd1JyxcbiAgICAnXFx1MDE3Myc6ICd1JyxcbiAgICAnXFx1MUU3Nyc6ICd1JyxcbiAgICAnXFx1MUU3NSc6ICd1JyxcbiAgICAnXFx1MDI4OSc6ICd1JyxcbiAgICAnXFx1MjRFNSc6ICd2JyxcbiAgICAnXFx1RkY1Nic6ICd2JyxcbiAgICAnXFx1MUU3RCc6ICd2JyxcbiAgICAnXFx1MUU3Ric6ICd2JyxcbiAgICAnXFx1MDI4Qic6ICd2JyxcbiAgICAnXFx1QTc1Ric6ICd2JyxcbiAgICAnXFx1MDI4Qyc6ICd2JyxcbiAgICAnXFx1QTc2MSc6ICd2eScsXG4gICAgJ1xcdTI0RTYnOiAndycsXG4gICAgJ1xcdUZGNTcnOiAndycsXG4gICAgJ1xcdTFFODEnOiAndycsXG4gICAgJ1xcdTFFODMnOiAndycsXG4gICAgJ1xcdTAxNzUnOiAndycsXG4gICAgJ1xcdTFFODcnOiAndycsXG4gICAgJ1xcdTFFODUnOiAndycsXG4gICAgJ1xcdTFFOTgnOiAndycsXG4gICAgJ1xcdTFFODknOiAndycsXG4gICAgJ1xcdTJDNzMnOiAndycsXG4gICAgJ1xcdTI0RTcnOiAneCcsXG4gICAgJ1xcdUZGNTgnOiAneCcsXG4gICAgJ1xcdTFFOEInOiAneCcsXG4gICAgJ1xcdTFFOEQnOiAneCcsXG4gICAgJ1xcdTI0RTgnOiAneScsXG4gICAgJ1xcdUZGNTknOiAneScsXG4gICAgJ1xcdTFFRjMnOiAneScsXG4gICAgJ1xcdTAwRkQnOiAneScsXG4gICAgJ1xcdTAxNzcnOiAneScsXG4gICAgJ1xcdTFFRjknOiAneScsXG4gICAgJ1xcdTAyMzMnOiAneScsXG4gICAgJ1xcdTFFOEYnOiAneScsXG4gICAgJ1xcdTAwRkYnOiAneScsXG4gICAgJ1xcdTFFRjcnOiAneScsXG4gICAgJ1xcdTFFOTknOiAneScsXG4gICAgJ1xcdTFFRjUnOiAneScsXG4gICAgJ1xcdTAxQjQnOiAneScsXG4gICAgJ1xcdTAyNEYnOiAneScsXG4gICAgJ1xcdTFFRkYnOiAneScsXG4gICAgJ1xcdTI0RTknOiAneicsXG4gICAgJ1xcdUZGNUEnOiAneicsXG4gICAgJ1xcdTAxN0EnOiAneicsXG4gICAgJ1xcdTFFOTEnOiAneicsXG4gICAgJ1xcdTAxN0MnOiAneicsXG4gICAgJ1xcdTAxN0UnOiAneicsXG4gICAgJ1xcdTFFOTMnOiAneicsXG4gICAgJ1xcdTFFOTUnOiAneicsXG4gICAgJ1xcdTAxQjYnOiAneicsXG4gICAgJ1xcdTAyMjUnOiAneicsXG4gICAgJ1xcdTAyNDAnOiAneicsXG4gICAgJ1xcdTJDNkMnOiAneicsXG4gICAgJ1xcdUE3NjMnOiAneicsXG4gICAgJ1xcdTAzODYnOiAnXFx1MDM5MScsXG4gICAgJ1xcdTAzODgnOiAnXFx1MDM5NScsXG4gICAgJ1xcdTAzODknOiAnXFx1MDM5NycsXG4gICAgJ1xcdTAzOEEnOiAnXFx1MDM5OScsXG4gICAgJ1xcdTAzQUEnOiAnXFx1MDM5OScsXG4gICAgJ1xcdTAzOEMnOiAnXFx1MDM5RicsXG4gICAgJ1xcdTAzOEUnOiAnXFx1MDNBNScsXG4gICAgJ1xcdTAzQUInOiAnXFx1MDNBNScsXG4gICAgJ1xcdTAzOEYnOiAnXFx1MDNBOScsXG4gICAgJ1xcdTAzQUMnOiAnXFx1MDNCMScsXG4gICAgJ1xcdTAzQUQnOiAnXFx1MDNCNScsXG4gICAgJ1xcdTAzQUUnOiAnXFx1MDNCNycsXG4gICAgJ1xcdTAzQUYnOiAnXFx1MDNCOScsXG4gICAgJ1xcdTAzQ0EnOiAnXFx1MDNCOScsXG4gICAgJ1xcdTAzOTAnOiAnXFx1MDNCOScsXG4gICAgJ1xcdTAzQ0MnOiAnXFx1MDNCRicsXG4gICAgJ1xcdTAzQ0QnOiAnXFx1MDNDNScsXG4gICAgJ1xcdTAzQ0InOiAnXFx1MDNDNScsXG4gICAgJ1xcdTAzQjAnOiAnXFx1MDNDNScsXG4gICAgJ1xcdTAzQzknOiAnXFx1MDNDOScsXG4gICAgJ1xcdTAzQzInOiAnXFx1MDNDMydcbiAgfTtcblxuICByZXR1cm4gZGlhY3JpdGljcztcbn0pO1xuXG5TMi5kZWZpbmUoJ3NlbGVjdDIvZGF0YS9iYXNlJyxbXG4gICcuLi91dGlscydcbl0sIGZ1bmN0aW9uIChVdGlscykge1xuICBmdW5jdGlvbiBCYXNlQWRhcHRlciAoJGVsZW1lbnQsIG9wdGlvbnMpIHtcbiAgICBCYXNlQWRhcHRlci5fX3N1cGVyX18uY29uc3RydWN0b3IuY2FsbCh0aGlzKTtcbiAgfVxuXG4gIFV0aWxzLkV4dGVuZChCYXNlQWRhcHRlciwgVXRpbHMuT2JzZXJ2YWJsZSk7XG5cbiAgQmFzZUFkYXB0ZXIucHJvdG90eXBlLmN1cnJlbnQgPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1RoZSBgY3VycmVudGAgbWV0aG9kIG11c3QgYmUgZGVmaW5lZCBpbiBjaGlsZCBjbGFzc2VzLicpO1xuICB9O1xuXG4gIEJhc2VBZGFwdGVyLnByb3RvdHlwZS5xdWVyeSA9IGZ1bmN0aW9uIChwYXJhbXMsIGNhbGxiYWNrKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdUaGUgYHF1ZXJ5YCBtZXRob2QgbXVzdCBiZSBkZWZpbmVkIGluIGNoaWxkIGNsYXNzZXMuJyk7XG4gIH07XG5cbiAgQmFzZUFkYXB0ZXIucHJvdG90eXBlLmJpbmQgPSBmdW5jdGlvbiAoY29udGFpbmVyLCAkY29udGFpbmVyKSB7XG4gICAgLy8gQ2FuIGJlIGltcGxlbWVudGVkIGluIHN1YmNsYXNzZXNcbiAgfTtcblxuICBCYXNlQWRhcHRlci5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uICgpIHtcbiAgICAvLyBDYW4gYmUgaW1wbGVtZW50ZWQgaW4gc3ViY2xhc3Nlc1xuICB9O1xuXG4gIEJhc2VBZGFwdGVyLnByb3RvdHlwZS5nZW5lcmF0ZVJlc3VsdElkID0gZnVuY3Rpb24gKGNvbnRhaW5lciwgZGF0YSkge1xuICAgIHZhciBpZCA9IGNvbnRhaW5lci5pZCArICctcmVzdWx0LSc7XG5cbiAgICBpZCArPSBVdGlscy5nZW5lcmF0ZUNoYXJzKDQpO1xuXG4gICAgaWYgKGRhdGEuaWQgIT0gbnVsbCkge1xuICAgICAgaWQgKz0gJy0nICsgZGF0YS5pZC50b1N0cmluZygpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZCArPSAnLScgKyBVdGlscy5nZW5lcmF0ZUNoYXJzKDQpO1xuICAgIH1cbiAgICByZXR1cm4gaWQ7XG4gIH07XG5cbiAgcmV0dXJuIEJhc2VBZGFwdGVyO1xufSk7XG5cblMyLmRlZmluZSgnc2VsZWN0Mi9kYXRhL3NlbGVjdCcsW1xuICAnLi9iYXNlJyxcbiAgJy4uL3V0aWxzJyxcbiAgJ2pxdWVyeSdcbl0sIGZ1bmN0aW9uIChCYXNlQWRhcHRlciwgVXRpbHMsICQpIHtcbiAgZnVuY3Rpb24gU2VsZWN0QWRhcHRlciAoJGVsZW1lbnQsIG9wdGlvbnMpIHtcbiAgICB0aGlzLiRlbGVtZW50ID0gJGVsZW1lbnQ7XG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcblxuICAgIFNlbGVjdEFkYXB0ZXIuX19zdXBlcl9fLmNvbnN0cnVjdG9yLmNhbGwodGhpcyk7XG4gIH1cblxuICBVdGlscy5FeHRlbmQoU2VsZWN0QWRhcHRlciwgQmFzZUFkYXB0ZXIpO1xuXG4gIFNlbGVjdEFkYXB0ZXIucHJvdG90eXBlLmN1cnJlbnQgPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICB2YXIgZGF0YSA9IFtdO1xuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgIHRoaXMuJGVsZW1lbnQuZmluZCgnOnNlbGVjdGVkJykuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgJG9wdGlvbiA9ICQodGhpcyk7XG5cbiAgICAgIHZhciBvcHRpb24gPSBzZWxmLml0ZW0oJG9wdGlvbik7XG5cbiAgICAgIGRhdGEucHVzaChvcHRpb24pO1xuICAgIH0pO1xuXG4gICAgY2FsbGJhY2soZGF0YSk7XG4gIH07XG5cbiAgU2VsZWN0QWRhcHRlci5wcm90b3R5cGUuc2VsZWN0ID0gZnVuY3Rpb24gKGRhdGEpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICBkYXRhLnNlbGVjdGVkID0gdHJ1ZTtcblxuICAgIC8vIElmIGRhdGEuZWxlbWVudCBpcyBhIERPTSBub2RlLCB1c2UgaXQgaW5zdGVhZFxuICAgIGlmICgkKGRhdGEuZWxlbWVudCkuaXMoJ29wdGlvbicpKSB7XG4gICAgICBkYXRhLmVsZW1lbnQuc2VsZWN0ZWQgPSB0cnVlO1xuXG4gICAgICB0aGlzLiRlbGVtZW50LnRyaWdnZXIoJ2NoYW5nZScpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuJGVsZW1lbnQucHJvcCgnbXVsdGlwbGUnKSkge1xuICAgICAgdGhpcy5jdXJyZW50KGZ1bmN0aW9uIChjdXJyZW50RGF0YSkge1xuICAgICAgICB2YXIgdmFsID0gW107XG5cbiAgICAgICAgZGF0YSA9IFtkYXRhXTtcbiAgICAgICAgZGF0YS5wdXNoLmFwcGx5KGRhdGEsIGN1cnJlbnREYXRhKTtcblxuICAgICAgICBmb3IgKHZhciBkID0gMDsgZCA8IGRhdGEubGVuZ3RoOyBkKyspIHtcbiAgICAgICAgICB2YXIgaWQgPSBkYXRhW2RdLmlkO1xuXG4gICAgICAgICAgaWYgKCQuaW5BcnJheShpZCwgdmFsKSA9PT0gLTEpIHtcbiAgICAgICAgICAgIHZhbC5wdXNoKGlkKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBzZWxmLiRlbGVtZW50LnZhbCh2YWwpO1xuICAgICAgICBzZWxmLiRlbGVtZW50LnRyaWdnZXIoJ2NoYW5nZScpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB2YWwgPSBkYXRhLmlkO1xuXG4gICAgICB0aGlzLiRlbGVtZW50LnZhbCh2YWwpO1xuICAgICAgdGhpcy4kZWxlbWVudC50cmlnZ2VyKCdjaGFuZ2UnKTtcbiAgICB9XG4gIH07XG5cbiAgU2VsZWN0QWRhcHRlci5wcm90b3R5cGUudW5zZWxlY3QgPSBmdW5jdGlvbiAoZGF0YSkge1xuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgIGlmICghdGhpcy4kZWxlbWVudC5wcm9wKCdtdWx0aXBsZScpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZGF0YS5zZWxlY3RlZCA9IGZhbHNlO1xuXG4gICAgaWYgKCQoZGF0YS5lbGVtZW50KS5pcygnb3B0aW9uJykpIHtcbiAgICAgIGRhdGEuZWxlbWVudC5zZWxlY3RlZCA9IGZhbHNlO1xuXG4gICAgICB0aGlzLiRlbGVtZW50LnRyaWdnZXIoJ2NoYW5nZScpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5jdXJyZW50KGZ1bmN0aW9uIChjdXJyZW50RGF0YSkge1xuICAgICAgdmFyIHZhbCA9IFtdO1xuXG4gICAgICBmb3IgKHZhciBkID0gMDsgZCA8IGN1cnJlbnREYXRhLmxlbmd0aDsgZCsrKSB7XG4gICAgICAgIHZhciBpZCA9IGN1cnJlbnREYXRhW2RdLmlkO1xuXG4gICAgICAgIGlmIChpZCAhPT0gZGF0YS5pZCAmJiAkLmluQXJyYXkoaWQsIHZhbCkgPT09IC0xKSB7XG4gICAgICAgICAgdmFsLnB1c2goaWQpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHNlbGYuJGVsZW1lbnQudmFsKHZhbCk7XG5cbiAgICAgIHNlbGYuJGVsZW1lbnQudHJpZ2dlcignY2hhbmdlJyk7XG4gICAgfSk7XG4gIH07XG5cbiAgU2VsZWN0QWRhcHRlci5wcm90b3R5cGUuYmluZCA9IGZ1bmN0aW9uIChjb250YWluZXIsICRjb250YWluZXIpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICB0aGlzLmNvbnRhaW5lciA9IGNvbnRhaW5lcjtcblxuICAgIGNvbnRhaW5lci5vbignc2VsZWN0JywgZnVuY3Rpb24gKHBhcmFtcykge1xuICAgICAgc2VsZi5zZWxlY3QocGFyYW1zLmRhdGEpO1xuICAgIH0pO1xuXG4gICAgY29udGFpbmVyLm9uKCd1bnNlbGVjdCcsIGZ1bmN0aW9uIChwYXJhbXMpIHtcbiAgICAgIHNlbGYudW5zZWxlY3QocGFyYW1zLmRhdGEpO1xuICAgIH0pO1xuICB9O1xuXG4gIFNlbGVjdEFkYXB0ZXIucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbiAoKSB7XG4gICAgLy8gUmVtb3ZlIGFueXRoaW5nIGFkZGVkIHRvIGNoaWxkIGVsZW1lbnRzXG4gICAgdGhpcy4kZWxlbWVudC5maW5kKCcqJykuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBSZW1vdmUgYW55IGN1c3RvbSBkYXRhIHNldCBieSBTZWxlY3QyXG4gICAgICBVdGlscy5SZW1vdmVEYXRhKHRoaXMpO1xuICAgIH0pO1xuICB9O1xuXG4gIFNlbGVjdEFkYXB0ZXIucHJvdG90eXBlLnF1ZXJ5ID0gZnVuY3Rpb24gKHBhcmFtcywgY2FsbGJhY2spIHtcbiAgICB2YXIgZGF0YSA9IFtdO1xuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgIHZhciAkb3B0aW9ucyA9IHRoaXMuJGVsZW1lbnQuY2hpbGRyZW4oKTtcblxuICAgICRvcHRpb25zLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgdmFyICRvcHRpb24gPSAkKHRoaXMpO1xuXG4gICAgICBpZiAoISRvcHRpb24uaXMoJ29wdGlvbicpICYmICEkb3B0aW9uLmlzKCdvcHRncm91cCcpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdmFyIG9wdGlvbiA9IHNlbGYuaXRlbSgkb3B0aW9uKTtcblxuICAgICAgdmFyIG1hdGNoZXMgPSBzZWxmLm1hdGNoZXMocGFyYW1zLCBvcHRpb24pO1xuXG4gICAgICBpZiAobWF0Y2hlcyAhPT0gbnVsbCkge1xuICAgICAgICBkYXRhLnB1c2gobWF0Y2hlcyk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBjYWxsYmFjayh7XG4gICAgICByZXN1bHRzOiBkYXRhXG4gICAgfSk7XG4gIH07XG5cbiAgU2VsZWN0QWRhcHRlci5wcm90b3R5cGUuYWRkT3B0aW9ucyA9IGZ1bmN0aW9uICgkb3B0aW9ucykge1xuICAgIFV0aWxzLmFwcGVuZE1hbnkodGhpcy4kZWxlbWVudCwgJG9wdGlvbnMpO1xuICB9O1xuXG4gIFNlbGVjdEFkYXB0ZXIucHJvdG90eXBlLm9wdGlvbiA9IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgdmFyIG9wdGlvbjtcblxuICAgIGlmIChkYXRhLmNoaWxkcmVuKSB7XG4gICAgICBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRncm91cCcpO1xuICAgICAgb3B0aW9uLmxhYmVsID0gZGF0YS50ZXh0O1xuICAgIH0gZWxzZSB7XG4gICAgICBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcblxuICAgICAgaWYgKG9wdGlvbi50ZXh0Q29udGVudCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIG9wdGlvbi50ZXh0Q29udGVudCA9IGRhdGEudGV4dDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG9wdGlvbi5pbm5lclRleHQgPSBkYXRhLnRleHQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGRhdGEuaWQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgb3B0aW9uLnZhbHVlID0gZGF0YS5pZDtcbiAgICB9XG5cbiAgICBpZiAoZGF0YS5kaXNhYmxlZCkge1xuICAgICAgb3B0aW9uLmRpc2FibGVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAoZGF0YS5zZWxlY3RlZCkge1xuICAgICAgb3B0aW9uLnNlbGVjdGVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAoZGF0YS50aXRsZSkge1xuICAgICAgb3B0aW9uLnRpdGxlID0gZGF0YS50aXRsZTtcbiAgICB9XG5cbiAgICB2YXIgJG9wdGlvbiA9ICQob3B0aW9uKTtcblxuICAgIHZhciBub3JtYWxpemVkRGF0YSA9IHRoaXMuX25vcm1hbGl6ZUl0ZW0oZGF0YSk7XG4gICAgbm9ybWFsaXplZERhdGEuZWxlbWVudCA9IG9wdGlvbjtcblxuICAgIC8vIE92ZXJyaWRlIHRoZSBvcHRpb24ncyBkYXRhIHdpdGggdGhlIGNvbWJpbmVkIGRhdGFcbiAgICBVdGlscy5TdG9yZURhdGEob3B0aW9uLCAnZGF0YScsIG5vcm1hbGl6ZWREYXRhKTtcblxuICAgIHJldHVybiAkb3B0aW9uO1xuICB9O1xuXG4gIFNlbGVjdEFkYXB0ZXIucHJvdG90eXBlLml0ZW0gPSBmdW5jdGlvbiAoJG9wdGlvbikge1xuICAgIHZhciBkYXRhID0ge307XG5cbiAgICBkYXRhID0gVXRpbHMuR2V0RGF0YSgkb3B0aW9uWzBdLCAnZGF0YScpO1xuXG4gICAgaWYgKGRhdGEgIT0gbnVsbCkge1xuICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfVxuXG4gICAgaWYgKCRvcHRpb24uaXMoJ29wdGlvbicpKSB7XG4gICAgICBkYXRhID0ge1xuICAgICAgICBpZDogJG9wdGlvbi52YWwoKSxcbiAgICAgICAgdGV4dDogJG9wdGlvbi50ZXh0KCksXG4gICAgICAgIGRpc2FibGVkOiAkb3B0aW9uLnByb3AoJ2Rpc2FibGVkJyksXG4gICAgICAgIHNlbGVjdGVkOiAkb3B0aW9uLnByb3AoJ3NlbGVjdGVkJyksXG4gICAgICAgIHRpdGxlOiAkb3B0aW9uLnByb3AoJ3RpdGxlJylcbiAgICAgIH07XG4gICAgfSBlbHNlIGlmICgkb3B0aW9uLmlzKCdvcHRncm91cCcpKSB7XG4gICAgICBkYXRhID0ge1xuICAgICAgICB0ZXh0OiAkb3B0aW9uLnByb3AoJ2xhYmVsJyksXG4gICAgICAgIGNoaWxkcmVuOiBbXSxcbiAgICAgICAgdGl0bGU6ICRvcHRpb24ucHJvcCgndGl0bGUnKVxuICAgICAgfTtcblxuICAgICAgdmFyICRjaGlsZHJlbiA9ICRvcHRpb24uY2hpbGRyZW4oJ29wdGlvbicpO1xuICAgICAgdmFyIGNoaWxkcmVuID0gW107XG5cbiAgICAgIGZvciAodmFyIGMgPSAwOyBjIDwgJGNoaWxkcmVuLmxlbmd0aDsgYysrKSB7XG4gICAgICAgIHZhciAkY2hpbGQgPSAkKCRjaGlsZHJlbltjXSk7XG5cbiAgICAgICAgdmFyIGNoaWxkID0gdGhpcy5pdGVtKCRjaGlsZCk7XG5cbiAgICAgICAgY2hpbGRyZW4ucHVzaChjaGlsZCk7XG4gICAgICB9XG5cbiAgICAgIGRhdGEuY2hpbGRyZW4gPSBjaGlsZHJlbjtcbiAgICB9XG5cbiAgICBkYXRhID0gdGhpcy5fbm9ybWFsaXplSXRlbShkYXRhKTtcbiAgICBkYXRhLmVsZW1lbnQgPSAkb3B0aW9uWzBdO1xuXG4gICAgVXRpbHMuU3RvcmVEYXRhKCRvcHRpb25bMF0sICdkYXRhJywgZGF0YSk7XG5cbiAgICByZXR1cm4gZGF0YTtcbiAgfTtcblxuICBTZWxlY3RBZGFwdGVyLnByb3RvdHlwZS5fbm9ybWFsaXplSXRlbSA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgaWYgKGl0ZW0gIT09IE9iamVjdChpdGVtKSkge1xuICAgICAgaXRlbSA9IHtcbiAgICAgICAgaWQ6IGl0ZW0sXG4gICAgICAgIHRleHQ6IGl0ZW1cbiAgICAgIH07XG4gICAgfVxuXG4gICAgaXRlbSA9ICQuZXh0ZW5kKHt9LCB7XG4gICAgICB0ZXh0OiAnJ1xuICAgIH0sIGl0ZW0pO1xuXG4gICAgdmFyIGRlZmF1bHRzID0ge1xuICAgICAgc2VsZWN0ZWQ6IGZhbHNlLFxuICAgICAgZGlzYWJsZWQ6IGZhbHNlXG4gICAgfTtcblxuICAgIGlmIChpdGVtLmlkICE9IG51bGwpIHtcbiAgICAgIGl0ZW0uaWQgPSBpdGVtLmlkLnRvU3RyaW5nKCk7XG4gICAgfVxuXG4gICAgaWYgKGl0ZW0udGV4dCAhPSBudWxsKSB7XG4gICAgICBpdGVtLnRleHQgPSBpdGVtLnRleHQudG9TdHJpbmcoKTtcbiAgICB9XG5cbiAgICBpZiAoaXRlbS5fcmVzdWx0SWQgPT0gbnVsbCAmJiBpdGVtLmlkICYmIHRoaXMuY29udGFpbmVyICE9IG51bGwpIHtcbiAgICAgIGl0ZW0uX3Jlc3VsdElkID0gdGhpcy5nZW5lcmF0ZVJlc3VsdElkKHRoaXMuY29udGFpbmVyLCBpdGVtKTtcbiAgICB9XG5cbiAgICByZXR1cm4gJC5leHRlbmQoe30sIGRlZmF1bHRzLCBpdGVtKTtcbiAgfTtcblxuICBTZWxlY3RBZGFwdGVyLnByb3RvdHlwZS5tYXRjaGVzID0gZnVuY3Rpb24gKHBhcmFtcywgZGF0YSkge1xuICAgIHZhciBtYXRjaGVyID0gdGhpcy5vcHRpb25zLmdldCgnbWF0Y2hlcicpO1xuXG4gICAgcmV0dXJuIG1hdGNoZXIocGFyYW1zLCBkYXRhKTtcbiAgfTtcblxuICByZXR1cm4gU2VsZWN0QWRhcHRlcjtcbn0pO1xuXG5TMi5kZWZpbmUoJ3NlbGVjdDIvZGF0YS9hcnJheScsW1xuICAnLi9zZWxlY3QnLFxuICAnLi4vdXRpbHMnLFxuICAnanF1ZXJ5J1xuXSwgZnVuY3Rpb24gKFNlbGVjdEFkYXB0ZXIsIFV0aWxzLCAkKSB7XG4gIGZ1bmN0aW9uIEFycmF5QWRhcHRlciAoJGVsZW1lbnQsIG9wdGlvbnMpIHtcbiAgICB2YXIgZGF0YSA9IG9wdGlvbnMuZ2V0KCdkYXRhJykgfHwgW107XG5cbiAgICBBcnJheUFkYXB0ZXIuX19zdXBlcl9fLmNvbnN0cnVjdG9yLmNhbGwodGhpcywgJGVsZW1lbnQsIG9wdGlvbnMpO1xuXG4gICAgdGhpcy5hZGRPcHRpb25zKHRoaXMuY29udmVydFRvT3B0aW9ucyhkYXRhKSk7XG4gIH1cblxuICBVdGlscy5FeHRlbmQoQXJyYXlBZGFwdGVyLCBTZWxlY3RBZGFwdGVyKTtcblxuICBBcnJheUFkYXB0ZXIucHJvdG90eXBlLnNlbGVjdCA9IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgdmFyICRvcHRpb24gPSB0aGlzLiRlbGVtZW50LmZpbmQoJ29wdGlvbicpLmZpbHRlcihmdW5jdGlvbiAoaSwgZWxtKSB7XG4gICAgICByZXR1cm4gZWxtLnZhbHVlID09IGRhdGEuaWQudG9TdHJpbmcoKTtcbiAgICB9KTtcblxuICAgIGlmICgkb3B0aW9uLmxlbmd0aCA9PT0gMCkge1xuICAgICAgJG9wdGlvbiA9IHRoaXMub3B0aW9uKGRhdGEpO1xuXG4gICAgICB0aGlzLmFkZE9wdGlvbnMoJG9wdGlvbik7XG4gICAgfVxuXG4gICAgQXJyYXlBZGFwdGVyLl9fc3VwZXJfXy5zZWxlY3QuY2FsbCh0aGlzLCBkYXRhKTtcbiAgfTtcblxuICBBcnJheUFkYXB0ZXIucHJvdG90eXBlLmNvbnZlcnRUb09wdGlvbnMgPSBmdW5jdGlvbiAoZGF0YSkge1xuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgIHZhciAkZXhpc3RpbmcgPSB0aGlzLiRlbGVtZW50LmZpbmQoJ29wdGlvbicpO1xuICAgIHZhciBleGlzdGluZ0lkcyA9ICRleGlzdGluZy5tYXAoZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHNlbGYuaXRlbSgkKHRoaXMpKS5pZDtcbiAgICB9KS5nZXQoKTtcblxuICAgIHZhciAkb3B0aW9ucyA9IFtdO1xuXG4gICAgLy8gRmlsdGVyIG91dCBhbGwgaXRlbXMgZXhjZXB0IGZvciB0aGUgb25lIHBhc3NlZCBpbiB0aGUgYXJndW1lbnRcbiAgICBmdW5jdGlvbiBvbmx5SXRlbSAoaXRlbSkge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuICQodGhpcykudmFsKCkgPT0gaXRlbS5pZDtcbiAgICAgIH07XG4gICAgfVxuXG4gICAgZm9yICh2YXIgZCA9IDA7IGQgPCBkYXRhLmxlbmd0aDsgZCsrKSB7XG4gICAgICB2YXIgaXRlbSA9IHRoaXMuX25vcm1hbGl6ZUl0ZW0oZGF0YVtkXSk7XG5cbiAgICAgIC8vIFNraXAgaXRlbXMgd2hpY2ggd2VyZSBwcmUtbG9hZGVkLCBvbmx5IG1lcmdlIHRoZSBkYXRhXG4gICAgICBpZiAoJC5pbkFycmF5KGl0ZW0uaWQsIGV4aXN0aW5nSWRzKSA+PSAwKSB7XG4gICAgICAgIHZhciAkZXhpc3RpbmdPcHRpb24gPSAkZXhpc3RpbmcuZmlsdGVyKG9ubHlJdGVtKGl0ZW0pKTtcblxuICAgICAgICB2YXIgZXhpc3RpbmdEYXRhID0gdGhpcy5pdGVtKCRleGlzdGluZ09wdGlvbik7XG4gICAgICAgIHZhciBuZXdEYXRhID0gJC5leHRlbmQodHJ1ZSwge30sIGl0ZW0sIGV4aXN0aW5nRGF0YSk7XG5cbiAgICAgICAgdmFyICRuZXdPcHRpb24gPSB0aGlzLm9wdGlvbihuZXdEYXRhKTtcblxuICAgICAgICAkZXhpc3RpbmdPcHRpb24ucmVwbGFjZVdpdGgoJG5ld09wdGlvbik7XG5cbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIHZhciAkb3B0aW9uID0gdGhpcy5vcHRpb24oaXRlbSk7XG5cbiAgICAgIGlmIChpdGVtLmNoaWxkcmVuKSB7XG4gICAgICAgIHZhciAkY2hpbGRyZW4gPSB0aGlzLmNvbnZlcnRUb09wdGlvbnMoaXRlbS5jaGlsZHJlbik7XG5cbiAgICAgICAgVXRpbHMuYXBwZW5kTWFueSgkb3B0aW9uLCAkY2hpbGRyZW4pO1xuICAgICAgfVxuXG4gICAgICAkb3B0aW9ucy5wdXNoKCRvcHRpb24pO1xuICAgIH1cblxuICAgIHJldHVybiAkb3B0aW9ucztcbiAgfTtcblxuICByZXR1cm4gQXJyYXlBZGFwdGVyO1xufSk7XG5cblMyLmRlZmluZSgnc2VsZWN0Mi9kYXRhL2FqYXgnLFtcbiAgJy4vYXJyYXknLFxuICAnLi4vdXRpbHMnLFxuICAnanF1ZXJ5J1xuXSwgZnVuY3Rpb24gKEFycmF5QWRhcHRlciwgVXRpbHMsICQpIHtcbiAgZnVuY3Rpb24gQWpheEFkYXB0ZXIgKCRlbGVtZW50LCBvcHRpb25zKSB7XG4gICAgdGhpcy5hamF4T3B0aW9ucyA9IHRoaXMuX2FwcGx5RGVmYXVsdHMob3B0aW9ucy5nZXQoJ2FqYXgnKSk7XG5cbiAgICBpZiAodGhpcy5hamF4T3B0aW9ucy5wcm9jZXNzUmVzdWx0cyAhPSBudWxsKSB7XG4gICAgICB0aGlzLnByb2Nlc3NSZXN1bHRzID0gdGhpcy5hamF4T3B0aW9ucy5wcm9jZXNzUmVzdWx0cztcbiAgICB9XG5cbiAgICBBamF4QWRhcHRlci5fX3N1cGVyX18uY29uc3RydWN0b3IuY2FsbCh0aGlzLCAkZWxlbWVudCwgb3B0aW9ucyk7XG4gIH1cblxuICBVdGlscy5FeHRlbmQoQWpheEFkYXB0ZXIsIEFycmF5QWRhcHRlcik7XG5cbiAgQWpheEFkYXB0ZXIucHJvdG90eXBlLl9hcHBseURlZmF1bHRzID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgICB2YXIgZGVmYXVsdHMgPSB7XG4gICAgICBkYXRhOiBmdW5jdGlvbiAocGFyYW1zKSB7XG4gICAgICAgIHJldHVybiAkLmV4dGVuZCh7fSwgcGFyYW1zLCB7XG4gICAgICAgICAgcTogcGFyYW1zLnRlcm1cbiAgICAgICAgfSk7XG4gICAgICB9LFxuICAgICAgdHJhbnNwb3J0OiBmdW5jdGlvbiAocGFyYW1zLCBzdWNjZXNzLCBmYWlsdXJlKSB7XG4gICAgICAgIHZhciAkcmVxdWVzdCA9ICQuYWpheChwYXJhbXMpO1xuXG4gICAgICAgICRyZXF1ZXN0LnRoZW4oc3VjY2Vzcyk7XG4gICAgICAgICRyZXF1ZXN0LmZhaWwoZmFpbHVyZSk7XG5cbiAgICAgICAgcmV0dXJuICRyZXF1ZXN0O1xuICAgICAgfVxuICAgIH07XG5cbiAgICByZXR1cm4gJC5leHRlbmQoe30sIGRlZmF1bHRzLCBvcHRpb25zLCB0cnVlKTtcbiAgfTtcblxuICBBamF4QWRhcHRlci5wcm90b3R5cGUucHJvY2Vzc1Jlc3VsdHMgPSBmdW5jdGlvbiAocmVzdWx0cykge1xuICAgIHJldHVybiByZXN1bHRzO1xuICB9O1xuXG4gIEFqYXhBZGFwdGVyLnByb3RvdHlwZS5xdWVyeSA9IGZ1bmN0aW9uIChwYXJhbXMsIGNhbGxiYWNrKSB7XG4gICAgdmFyIG1hdGNoZXMgPSBbXTtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICBpZiAodGhpcy5fcmVxdWVzdCAhPSBudWxsKSB7XG4gICAgICAvLyBKU09OUCByZXF1ZXN0cyBjYW5ub3QgYWx3YXlzIGJlIGFib3J0ZWRcbiAgICAgIGlmICgkLmlzRnVuY3Rpb24odGhpcy5fcmVxdWVzdC5hYm9ydCkpIHtcbiAgICAgICAgdGhpcy5fcmVxdWVzdC5hYm9ydCgpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLl9yZXF1ZXN0ID0gbnVsbDtcbiAgICB9XG5cbiAgICB2YXIgb3B0aW9ucyA9ICQuZXh0ZW5kKHtcbiAgICAgIHR5cGU6ICdHRVQnXG4gICAgfSwgdGhpcy5hamF4T3B0aW9ucyk7XG5cbiAgICBpZiAodHlwZW9mIG9wdGlvbnMudXJsID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBvcHRpb25zLnVybCA9IG9wdGlvbnMudXJsLmNhbGwodGhpcy4kZWxlbWVudCwgcGFyYW1zKTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIG9wdGlvbnMuZGF0YSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgb3B0aW9ucy5kYXRhID0gb3B0aW9ucy5kYXRhLmNhbGwodGhpcy4kZWxlbWVudCwgcGFyYW1zKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZXF1ZXN0ICgpIHtcbiAgICAgIHZhciAkcmVxdWVzdCA9IG9wdGlvbnMudHJhbnNwb3J0KG9wdGlvbnMsIGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgIHZhciByZXN1bHRzID0gc2VsZi5wcm9jZXNzUmVzdWx0cyhkYXRhLCBwYXJhbXMpO1xuXG4gICAgICAgIGlmIChzZWxmLm9wdGlvbnMuZ2V0KCdkZWJ1ZycpICYmIHdpbmRvdy5jb25zb2xlICYmIGNvbnNvbGUuZXJyb3IpIHtcbiAgICAgICAgICAvLyBDaGVjayB0byBtYWtlIHN1cmUgdGhhdCB0aGUgcmVzcG9uc2UgaW5jbHVkZWQgYSBgcmVzdWx0c2Aga2V5LlxuICAgICAgICAgIGlmICghcmVzdWx0cyB8fCAhcmVzdWx0cy5yZXN1bHRzIHx8ICEkLmlzQXJyYXkocmVzdWx0cy5yZXN1bHRzKSkge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcbiAgICAgICAgICAgICAgJ1NlbGVjdDI6IFRoZSBBSkFYIHJlc3VsdHMgZGlkIG5vdCByZXR1cm4gYW4gYXJyYXkgaW4gdGhlICcgK1xuICAgICAgICAgICAgICAnYHJlc3VsdHNgIGtleSBvZiB0aGUgcmVzcG9uc2UuJ1xuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjYWxsYmFjayhyZXN1bHRzKTtcbiAgICAgIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gQXR0ZW1wdCB0byBkZXRlY3QgaWYgYSByZXF1ZXN0IHdhcyBhYm9ydGVkXG4gICAgICAgIC8vIE9ubHkgd29ya3MgaWYgdGhlIHRyYW5zcG9ydCBleHBvc2VzIGEgc3RhdHVzIHByb3BlcnR5XG4gICAgICAgIGlmICgnc3RhdHVzJyBpbiAkcmVxdWVzdCAmJlxuICAgICAgICAgICAgKCRyZXF1ZXN0LnN0YXR1cyA9PT0gMCB8fCAkcmVxdWVzdC5zdGF0dXMgPT09ICcwJykpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBzZWxmLnRyaWdnZXIoJ3Jlc3VsdHM6bWVzc2FnZScsIHtcbiAgICAgICAgICBtZXNzYWdlOiAnZXJyb3JMb2FkaW5nJ1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuXG4gICAgICBzZWxmLl9yZXF1ZXN0ID0gJHJlcXVlc3Q7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuYWpheE9wdGlvbnMuZGVsYXkgJiYgcGFyYW1zLnRlcm0gIT0gbnVsbCkge1xuICAgICAgaWYgKHRoaXMuX3F1ZXJ5VGltZW91dCkge1xuICAgICAgICB3aW5kb3cuY2xlYXJUaW1lb3V0KHRoaXMuX3F1ZXJ5VGltZW91dCk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX3F1ZXJ5VGltZW91dCA9IHdpbmRvdy5zZXRUaW1lb3V0KHJlcXVlc3QsIHRoaXMuYWpheE9wdGlvbnMuZGVsYXkpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXF1ZXN0KCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBBamF4QWRhcHRlcjtcbn0pO1xuXG5TMi5kZWZpbmUoJ3NlbGVjdDIvZGF0YS90YWdzJyxbXG4gICdqcXVlcnknXG5dLCBmdW5jdGlvbiAoJCkge1xuICBmdW5jdGlvbiBUYWdzIChkZWNvcmF0ZWQsICRlbGVtZW50LCBvcHRpb25zKSB7XG4gICAgdmFyIHRhZ3MgPSBvcHRpb25zLmdldCgndGFncycpO1xuXG4gICAgdmFyIGNyZWF0ZVRhZyA9IG9wdGlvbnMuZ2V0KCdjcmVhdGVUYWcnKTtcblxuICAgIGlmIChjcmVhdGVUYWcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5jcmVhdGVUYWcgPSBjcmVhdGVUYWc7XG4gICAgfVxuXG4gICAgdmFyIGluc2VydFRhZyA9IG9wdGlvbnMuZ2V0KCdpbnNlcnRUYWcnKTtcblxuICAgIGlmIChpbnNlcnRUYWcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICB0aGlzLmluc2VydFRhZyA9IGluc2VydFRhZztcbiAgICB9XG5cbiAgICBkZWNvcmF0ZWQuY2FsbCh0aGlzLCAkZWxlbWVudCwgb3B0aW9ucyk7XG5cbiAgICBpZiAoJC5pc0FycmF5KHRhZ3MpKSB7XG4gICAgICBmb3IgKHZhciB0ID0gMDsgdCA8IHRhZ3MubGVuZ3RoOyB0KyspIHtcbiAgICAgICAgdmFyIHRhZyA9IHRhZ3NbdF07XG4gICAgICAgIHZhciBpdGVtID0gdGhpcy5fbm9ybWFsaXplSXRlbSh0YWcpO1xuXG4gICAgICAgIHZhciAkb3B0aW9uID0gdGhpcy5vcHRpb24oaXRlbSk7XG5cbiAgICAgICAgdGhpcy4kZWxlbWVudC5hcHBlbmQoJG9wdGlvbik7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgVGFncy5wcm90b3R5cGUucXVlcnkgPSBmdW5jdGlvbiAoZGVjb3JhdGVkLCBwYXJhbXMsIGNhbGxiYWNrKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgdGhpcy5fcmVtb3ZlT2xkVGFncygpO1xuXG4gICAgaWYgKHBhcmFtcy50ZXJtID09IG51bGwgfHwgcGFyYW1zLnBhZ2UgIT0gbnVsbCkge1xuICAgICAgZGVjb3JhdGVkLmNhbGwodGhpcywgcGFyYW1zLCBjYWxsYmFjayk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gd3JhcHBlciAob2JqLCBjaGlsZCkge1xuICAgICAgdmFyIGRhdGEgPSBvYmoucmVzdWx0cztcblxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBvcHRpb24gPSBkYXRhW2ldO1xuXG4gICAgICAgIHZhciBjaGVja0NoaWxkcmVuID0gKFxuICAgICAgICAgIG9wdGlvbi5jaGlsZHJlbiAhPSBudWxsICYmXG4gICAgICAgICAgIXdyYXBwZXIoe1xuICAgICAgICAgICAgcmVzdWx0czogb3B0aW9uLmNoaWxkcmVuXG4gICAgICAgICAgfSwgdHJ1ZSlcbiAgICAgICAgKTtcblxuICAgICAgICB2YXIgb3B0aW9uVGV4dCA9IChvcHRpb24udGV4dCB8fCAnJykudG9VcHBlckNhc2UoKTtcbiAgICAgICAgdmFyIHBhcmFtc1Rlcm0gPSAocGFyYW1zLnRlcm0gfHwgJycpLnRvVXBwZXJDYXNlKCk7XG5cbiAgICAgICAgdmFyIGNoZWNrVGV4dCA9IG9wdGlvblRleHQgPT09IHBhcmFtc1Rlcm07XG5cbiAgICAgICAgaWYgKGNoZWNrVGV4dCB8fCBjaGVja0NoaWxkcmVuKSB7XG4gICAgICAgICAgaWYgKGNoaWxkKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgb2JqLmRhdGEgPSBkYXRhO1xuICAgICAgICAgIGNhbGxiYWNrKG9iaik7XG5cbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGNoaWxkKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuXG4gICAgICB2YXIgdGFnID0gc2VsZi5jcmVhdGVUYWcocGFyYW1zKTtcblxuICAgICAgaWYgKHRhZyAhPSBudWxsKSB7XG4gICAgICAgIHZhciAkb3B0aW9uID0gc2VsZi5vcHRpb24odGFnKTtcbiAgICAgICAgJG9wdGlvbi5hdHRyKCdkYXRhLXNlbGVjdDItdGFnJywgdHJ1ZSk7XG5cbiAgICAgICAgc2VsZi5hZGRPcHRpb25zKFskb3B0aW9uXSk7XG5cbiAgICAgICAgc2VsZi5pbnNlcnRUYWcoZGF0YSwgdGFnKTtcbiAgICAgIH1cblxuICAgICAgb2JqLnJlc3VsdHMgPSBkYXRhO1xuXG4gICAgICBjYWxsYmFjayhvYmopO1xuICAgIH1cblxuICAgIGRlY29yYXRlZC5jYWxsKHRoaXMsIHBhcmFtcywgd3JhcHBlcik7XG4gIH07XG5cbiAgVGFncy5wcm90b3R5cGUuY3JlYXRlVGFnID0gZnVuY3Rpb24gKGRlY29yYXRlZCwgcGFyYW1zKSB7XG4gICAgdmFyIHRlcm0gPSAkLnRyaW0ocGFyYW1zLnRlcm0pO1xuXG4gICAgaWYgKHRlcm0gPT09ICcnKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgaWQ6IHRlcm0sXG4gICAgICB0ZXh0OiB0ZXJtXG4gICAgfTtcbiAgfTtcblxuICBUYWdzLnByb3RvdHlwZS5pbnNlcnRUYWcgPSBmdW5jdGlvbiAoXywgZGF0YSwgdGFnKSB7XG4gICAgZGF0YS51bnNoaWZ0KHRhZyk7XG4gIH07XG5cbiAgVGFncy5wcm90b3R5cGUuX3JlbW92ZU9sZFRhZ3MgPSBmdW5jdGlvbiAoXykge1xuICAgIHZhciB0YWcgPSB0aGlzLl9sYXN0VGFnO1xuXG4gICAgdmFyICRvcHRpb25zID0gdGhpcy4kZWxlbWVudC5maW5kKCdvcHRpb25bZGF0YS1zZWxlY3QyLXRhZ10nKTtcblxuICAgICRvcHRpb25zLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKHRoaXMuc2VsZWN0ZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAkKHRoaXMpLnJlbW92ZSgpO1xuICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiBUYWdzO1xufSk7XG5cblMyLmRlZmluZSgnc2VsZWN0Mi9kYXRhL3Rva2VuaXplcicsW1xuICAnanF1ZXJ5J1xuXSwgZnVuY3Rpb24gKCQpIHtcbiAgZnVuY3Rpb24gVG9rZW5pemVyIChkZWNvcmF0ZWQsICRlbGVtZW50LCBvcHRpb25zKSB7XG4gICAgdmFyIHRva2VuaXplciA9IG9wdGlvbnMuZ2V0KCd0b2tlbml6ZXInKTtcblxuICAgIGlmICh0b2tlbml6ZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy50b2tlbml6ZXIgPSB0b2tlbml6ZXI7XG4gICAgfVxuXG4gICAgZGVjb3JhdGVkLmNhbGwodGhpcywgJGVsZW1lbnQsIG9wdGlvbnMpO1xuICB9XG5cbiAgVG9rZW5pemVyLnByb3RvdHlwZS5iaW5kID0gZnVuY3Rpb24gKGRlY29yYXRlZCwgY29udGFpbmVyLCAkY29udGFpbmVyKSB7XG4gICAgZGVjb3JhdGVkLmNhbGwodGhpcywgY29udGFpbmVyLCAkY29udGFpbmVyKTtcblxuICAgIHRoaXMuJHNlYXJjaCA9ICBjb250YWluZXIuZHJvcGRvd24uJHNlYXJjaCB8fCBjb250YWluZXIuc2VsZWN0aW9uLiRzZWFyY2ggfHxcbiAgICAgICRjb250YWluZXIuZmluZCgnLnNlbGVjdDItc2VhcmNoX19maWVsZCcpO1xuICB9O1xuXG4gIFRva2VuaXplci5wcm90b3R5cGUucXVlcnkgPSBmdW5jdGlvbiAoZGVjb3JhdGVkLCBwYXJhbXMsIGNhbGxiYWNrKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgZnVuY3Rpb24gY3JlYXRlQW5kU2VsZWN0IChkYXRhKSB7XG4gICAgICAvLyBOb3JtYWxpemUgdGhlIGRhdGEgb2JqZWN0IHNvIHdlIGNhbiB1c2UgaXQgZm9yIGNoZWNrc1xuICAgICAgdmFyIGl0ZW0gPSBzZWxmLl9ub3JtYWxpemVJdGVtKGRhdGEpO1xuXG4gICAgICAvLyBDaGVjayBpZiB0aGUgZGF0YSBvYmplY3QgYWxyZWFkeSBleGlzdHMgYXMgYSB0YWdcbiAgICAgIC8vIFNlbGVjdCBpdCBpZiBpdCBkb2Vzbid0XG4gICAgICB2YXIgJGV4aXN0aW5nT3B0aW9ucyA9IHNlbGYuJGVsZW1lbnQuZmluZCgnb3B0aW9uJykuZmlsdGVyKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuICQodGhpcykudmFsKCkgPT09IGl0ZW0uaWQ7XG4gICAgICB9KTtcblxuICAgICAgLy8gSWYgYW4gZXhpc3Rpbmcgb3B0aW9uIHdhc24ndCBmb3VuZCBmb3IgaXQsIGNyZWF0ZSB0aGUgb3B0aW9uXG4gICAgICBpZiAoISRleGlzdGluZ09wdGlvbnMubGVuZ3RoKSB7XG4gICAgICAgIHZhciAkb3B0aW9uID0gc2VsZi5vcHRpb24oaXRlbSk7XG4gICAgICAgICRvcHRpb24uYXR0cignZGF0YS1zZWxlY3QyLXRhZycsIHRydWUpO1xuXG4gICAgICAgIHNlbGYuX3JlbW92ZU9sZFRhZ3MoKTtcbiAgICAgICAgc2VsZi5hZGRPcHRpb25zKFskb3B0aW9uXSk7XG4gICAgICB9XG5cbiAgICAgIC8vIFNlbGVjdCB0aGUgaXRlbSwgbm93IHRoYXQgd2Uga25vdyB0aGVyZSBpcyBhbiBvcHRpb24gZm9yIGl0XG4gICAgICBzZWxlY3QoaXRlbSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2VsZWN0IChkYXRhKSB7XG4gICAgICBzZWxmLnRyaWdnZXIoJ3NlbGVjdCcsIHtcbiAgICAgICAgZGF0YTogZGF0YVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcGFyYW1zLnRlcm0gPSBwYXJhbXMudGVybSB8fCAnJztcblxuICAgIHZhciB0b2tlbkRhdGEgPSB0aGlzLnRva2VuaXplcihwYXJhbXMsIHRoaXMub3B0aW9ucywgY3JlYXRlQW5kU2VsZWN0KTtcblxuICAgIGlmICh0b2tlbkRhdGEudGVybSAhPT0gcGFyYW1zLnRlcm0pIHtcbiAgICAgIC8vIFJlcGxhY2UgdGhlIHNlYXJjaCB0ZXJtIGlmIHdlIGhhdmUgdGhlIHNlYXJjaCBib3hcbiAgICAgIGlmICh0aGlzLiRzZWFyY2gubGVuZ3RoKSB7XG4gICAgICAgIHRoaXMuJHNlYXJjaC52YWwodG9rZW5EYXRhLnRlcm0pO1xuICAgICAgICB0aGlzLiRzZWFyY2guZm9jdXMoKTtcbiAgICAgIH1cblxuICAgICAgcGFyYW1zLnRlcm0gPSB0b2tlbkRhdGEudGVybTtcbiAgICB9XG5cbiAgICBkZWNvcmF0ZWQuY2FsbCh0aGlzLCBwYXJhbXMsIGNhbGxiYWNrKTtcbiAgfTtcblxuICBUb2tlbml6ZXIucHJvdG90eXBlLnRva2VuaXplciA9IGZ1bmN0aW9uIChfLCBwYXJhbXMsIG9wdGlvbnMsIGNhbGxiYWNrKSB7XG4gICAgdmFyIHNlcGFyYXRvcnMgPSBvcHRpb25zLmdldCgndG9rZW5TZXBhcmF0b3JzJykgfHwgW107XG4gICAgdmFyIHRlcm0gPSBwYXJhbXMudGVybTtcbiAgICB2YXIgaSA9IDA7XG5cbiAgICB2YXIgY3JlYXRlVGFnID0gdGhpcy5jcmVhdGVUYWcgfHwgZnVuY3Rpb24gKHBhcmFtcykge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgaWQ6IHBhcmFtcy50ZXJtLFxuICAgICAgICB0ZXh0OiBwYXJhbXMudGVybVxuICAgICAgfTtcbiAgICB9O1xuXG4gICAgd2hpbGUgKGkgPCB0ZXJtLmxlbmd0aCkge1xuICAgICAgdmFyIHRlcm1DaGFyID0gdGVybVtpXTtcblxuICAgICAgaWYgKCQuaW5BcnJheSh0ZXJtQ2hhciwgc2VwYXJhdG9ycykgPT09IC0xKSB7XG4gICAgICAgIGkrKztcblxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgdmFyIHBhcnQgPSB0ZXJtLnN1YnN0cigwLCBpKTtcbiAgICAgIHZhciBwYXJ0UGFyYW1zID0gJC5leHRlbmQoe30sIHBhcmFtcywge1xuICAgICAgICB0ZXJtOiBwYXJ0XG4gICAgICB9KTtcblxuICAgICAgdmFyIGRhdGEgPSBjcmVhdGVUYWcocGFydFBhcmFtcyk7XG5cbiAgICAgIGlmIChkYXRhID09IG51bGwpIHtcbiAgICAgICAgaSsrO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgY2FsbGJhY2soZGF0YSk7XG5cbiAgICAgIC8vIFJlc2V0IHRoZSB0ZXJtIHRvIG5vdCBpbmNsdWRlIHRoZSB0b2tlbml6ZWQgcG9ydGlvblxuICAgICAgdGVybSA9IHRlcm0uc3Vic3RyKGkgKyAxKSB8fCAnJztcbiAgICAgIGkgPSAwO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICB0ZXJtOiB0ZXJtXG4gICAgfTtcbiAgfTtcblxuICByZXR1cm4gVG9rZW5pemVyO1xufSk7XG5cblMyLmRlZmluZSgnc2VsZWN0Mi9kYXRhL21pbmltdW1JbnB1dExlbmd0aCcsW1xuXG5dLCBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIE1pbmltdW1JbnB1dExlbmd0aCAoZGVjb3JhdGVkLCAkZSwgb3B0aW9ucykge1xuICAgIHRoaXMubWluaW11bUlucHV0TGVuZ3RoID0gb3B0aW9ucy5nZXQoJ21pbmltdW1JbnB1dExlbmd0aCcpO1xuXG4gICAgZGVjb3JhdGVkLmNhbGwodGhpcywgJGUsIG9wdGlvbnMpO1xuICB9XG5cbiAgTWluaW11bUlucHV0TGVuZ3RoLnByb3RvdHlwZS5xdWVyeSA9IGZ1bmN0aW9uIChkZWNvcmF0ZWQsIHBhcmFtcywgY2FsbGJhY2spIHtcbiAgICBwYXJhbXMudGVybSA9IHBhcmFtcy50ZXJtIHx8ICcnO1xuXG4gICAgaWYgKHBhcmFtcy50ZXJtLmxlbmd0aCA8IHRoaXMubWluaW11bUlucHV0TGVuZ3RoKSB7XG4gICAgICB0aGlzLnRyaWdnZXIoJ3Jlc3VsdHM6bWVzc2FnZScsIHtcbiAgICAgICAgbWVzc2FnZTogJ2lucHV0VG9vU2hvcnQnLFxuICAgICAgICBhcmdzOiB7XG4gICAgICAgICAgbWluaW11bTogdGhpcy5taW5pbXVtSW5wdXRMZW5ndGgsXG4gICAgICAgICAgaW5wdXQ6IHBhcmFtcy50ZXJtLFxuICAgICAgICAgIHBhcmFtczogcGFyYW1zXG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZGVjb3JhdGVkLmNhbGwodGhpcywgcGFyYW1zLCBjYWxsYmFjayk7XG4gIH07XG5cbiAgcmV0dXJuIE1pbmltdW1JbnB1dExlbmd0aDtcbn0pO1xuXG5TMi5kZWZpbmUoJ3NlbGVjdDIvZGF0YS9tYXhpbXVtSW5wdXRMZW5ndGgnLFtcblxuXSwgZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBNYXhpbXVtSW5wdXRMZW5ndGggKGRlY29yYXRlZCwgJGUsIG9wdGlvbnMpIHtcbiAgICB0aGlzLm1heGltdW1JbnB1dExlbmd0aCA9IG9wdGlvbnMuZ2V0KCdtYXhpbXVtSW5wdXRMZW5ndGgnKTtcblxuICAgIGRlY29yYXRlZC5jYWxsKHRoaXMsICRlLCBvcHRpb25zKTtcbiAgfVxuXG4gIE1heGltdW1JbnB1dExlbmd0aC5wcm90b3R5cGUucXVlcnkgPSBmdW5jdGlvbiAoZGVjb3JhdGVkLCBwYXJhbXMsIGNhbGxiYWNrKSB7XG4gICAgcGFyYW1zLnRlcm0gPSBwYXJhbXMudGVybSB8fCAnJztcblxuICAgIGlmICh0aGlzLm1heGltdW1JbnB1dExlbmd0aCA+IDAgJiZcbiAgICAgICAgcGFyYW1zLnRlcm0ubGVuZ3RoID4gdGhpcy5tYXhpbXVtSW5wdXRMZW5ndGgpIHtcbiAgICAgIHRoaXMudHJpZ2dlcigncmVzdWx0czptZXNzYWdlJywge1xuICAgICAgICBtZXNzYWdlOiAnaW5wdXRUb29Mb25nJyxcbiAgICAgICAgYXJnczoge1xuICAgICAgICAgIG1heGltdW06IHRoaXMubWF4aW11bUlucHV0TGVuZ3RoLFxuICAgICAgICAgIGlucHV0OiBwYXJhbXMudGVybSxcbiAgICAgICAgICBwYXJhbXM6IHBhcmFtc1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGRlY29yYXRlZC5jYWxsKHRoaXMsIHBhcmFtcywgY2FsbGJhY2spO1xuICB9O1xuXG4gIHJldHVybiBNYXhpbXVtSW5wdXRMZW5ndGg7XG59KTtcblxuUzIuZGVmaW5lKCdzZWxlY3QyL2RhdGEvbWF4aW11bVNlbGVjdGlvbkxlbmd0aCcsW1xuXG5dLCBmdW5jdGlvbiAoKXtcbiAgZnVuY3Rpb24gTWF4aW11bVNlbGVjdGlvbkxlbmd0aCAoZGVjb3JhdGVkLCAkZSwgb3B0aW9ucykge1xuICAgIHRoaXMubWF4aW11bVNlbGVjdGlvbkxlbmd0aCA9IG9wdGlvbnMuZ2V0KCdtYXhpbXVtU2VsZWN0aW9uTGVuZ3RoJyk7XG5cbiAgICBkZWNvcmF0ZWQuY2FsbCh0aGlzLCAkZSwgb3B0aW9ucyk7XG4gIH1cblxuICBNYXhpbXVtU2VsZWN0aW9uTGVuZ3RoLnByb3RvdHlwZS5xdWVyeSA9XG4gICAgZnVuY3Rpb24gKGRlY29yYXRlZCwgcGFyYW1zLCBjYWxsYmFjaykge1xuICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgICB0aGlzLmN1cnJlbnQoZnVuY3Rpb24gKGN1cnJlbnREYXRhKSB7XG4gICAgICAgIHZhciBjb3VudCA9IGN1cnJlbnREYXRhICE9IG51bGwgPyBjdXJyZW50RGF0YS5sZW5ndGggOiAwO1xuICAgICAgICBpZiAoc2VsZi5tYXhpbXVtU2VsZWN0aW9uTGVuZ3RoID4gMCAmJlxuICAgICAgICAgIGNvdW50ID49IHNlbGYubWF4aW11bVNlbGVjdGlvbkxlbmd0aCkge1xuICAgICAgICAgIHNlbGYudHJpZ2dlcigncmVzdWx0czptZXNzYWdlJywge1xuICAgICAgICAgICAgbWVzc2FnZTogJ21heGltdW1TZWxlY3RlZCcsXG4gICAgICAgICAgICBhcmdzOiB7XG4gICAgICAgICAgICAgIG1heGltdW06IHNlbGYubWF4aW11bVNlbGVjdGlvbkxlbmd0aFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBkZWNvcmF0ZWQuY2FsbChzZWxmLCBwYXJhbXMsIGNhbGxiYWNrKTtcbiAgICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiBNYXhpbXVtU2VsZWN0aW9uTGVuZ3RoO1xufSk7XG5cblMyLmRlZmluZSgnc2VsZWN0Mi9kcm9wZG93bicsW1xuICAnanF1ZXJ5JyxcbiAgJy4vdXRpbHMnXG5dLCBmdW5jdGlvbiAoJCwgVXRpbHMpIHtcbiAgZnVuY3Rpb24gRHJvcGRvd24gKCRlbGVtZW50LCBvcHRpb25zKSB7XG4gICAgdGhpcy4kZWxlbWVudCA9ICRlbGVtZW50O1xuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG5cbiAgICBEcm9wZG93bi5fX3N1cGVyX18uY29uc3RydWN0b3IuY2FsbCh0aGlzKTtcbiAgfVxuXG4gIFV0aWxzLkV4dGVuZChEcm9wZG93biwgVXRpbHMuT2JzZXJ2YWJsZSk7XG5cbiAgRHJvcGRvd24ucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgJGRyb3Bkb3duID0gJChcbiAgICAgICc8c3BhbiBjbGFzcz1cInNlbGVjdDItZHJvcGRvd25cIj4nICtcbiAgICAgICAgJzxzcGFuIGNsYXNzPVwic2VsZWN0Mi1yZXN1bHRzXCI+PC9zcGFuPicgK1xuICAgICAgJzwvc3Bhbj4nXG4gICAgKTtcblxuICAgICRkcm9wZG93bi5hdHRyKCdkaXInLCB0aGlzLm9wdGlvbnMuZ2V0KCdkaXInKSk7XG5cbiAgICB0aGlzLiRkcm9wZG93biA9ICRkcm9wZG93bjtcblxuICAgIHJldHVybiAkZHJvcGRvd247XG4gIH07XG5cbiAgRHJvcGRvd24ucHJvdG90eXBlLmJpbmQgPSBmdW5jdGlvbiAoKSB7XG4gICAgLy8gU2hvdWxkIGJlIGltcGxlbWVudGVkIGluIHN1YmNsYXNzZXNcbiAgfTtcblxuICBEcm9wZG93bi5wcm90b3R5cGUucG9zaXRpb24gPSBmdW5jdGlvbiAoJGRyb3Bkb3duLCAkY29udGFpbmVyKSB7XG4gICAgLy8gU2hvdWxkIGJlIGltcGxtZW50ZWQgaW4gc3ViY2xhc3Nlc1xuICB9O1xuXG4gIERyb3Bkb3duLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24gKCkge1xuICAgIC8vIFJlbW92ZSB0aGUgZHJvcGRvd24gZnJvbSB0aGUgRE9NXG4gICAgdGhpcy4kZHJvcGRvd24ucmVtb3ZlKCk7XG4gIH07XG5cbiAgcmV0dXJuIERyb3Bkb3duO1xufSk7XG5cblMyLmRlZmluZSgnc2VsZWN0Mi9kcm9wZG93bi9zZWFyY2gnLFtcbiAgJ2pxdWVyeScsXG4gICcuLi91dGlscydcbl0sIGZ1bmN0aW9uICgkLCBVdGlscykge1xuICBmdW5jdGlvbiBTZWFyY2ggKCkgeyB9XG5cbiAgU2VhcmNoLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAoZGVjb3JhdGVkKSB7XG4gICAgdmFyICRyZW5kZXJlZCA9IGRlY29yYXRlZC5jYWxsKHRoaXMpO1xuXG4gICAgdmFyICRzZWFyY2ggPSAkKFxuICAgICAgJzxzcGFuIGNsYXNzPVwic2VsZWN0Mi1zZWFyY2ggc2VsZWN0Mi1zZWFyY2gtLWRyb3Bkb3duXCI+JyArXG4gICAgICAgICc8aW5wdXQgY2xhc3M9XCJzZWxlY3QyLXNlYXJjaF9fZmllbGRcIiB0eXBlPVwic2VhcmNoXCIgdGFiaW5kZXg9XCItMVwiJyArXG4gICAgICAgICcgYXV0b2NvbXBsZXRlPVwib2ZmXCIgYXV0b2NvcnJlY3Q9XCJvZmZcIiBhdXRvY2FwaXRhbGl6ZT1cIm5vbmVcIicgK1xuICAgICAgICAnIHNwZWxsY2hlY2s9XCJmYWxzZVwiIHJvbGU9XCJ0ZXh0Ym94XCIgLz4nICtcbiAgICAgICc8L3NwYW4+J1xuICAgICk7XG5cbiAgICB0aGlzLiRzZWFyY2hDb250YWluZXIgPSAkc2VhcmNoO1xuICAgIHRoaXMuJHNlYXJjaCA9ICRzZWFyY2guZmluZCgnaW5wdXQnKTtcblxuICAgICRyZW5kZXJlZC5wcmVwZW5kKCRzZWFyY2gpO1xuXG4gICAgcmV0dXJuICRyZW5kZXJlZDtcbiAgfTtcblxuICBTZWFyY2gucHJvdG90eXBlLmJpbmQgPSBmdW5jdGlvbiAoZGVjb3JhdGVkLCBjb250YWluZXIsICRjb250YWluZXIpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICBkZWNvcmF0ZWQuY2FsbCh0aGlzLCBjb250YWluZXIsICRjb250YWluZXIpO1xuXG4gICAgdGhpcy4kc2VhcmNoLm9uKCdrZXlkb3duJywgZnVuY3Rpb24gKGV2dCkge1xuICAgICAgc2VsZi50cmlnZ2VyKCdrZXlwcmVzcycsIGV2dCk7XG5cbiAgICAgIHNlbGYuX2tleVVwUHJldmVudGVkID0gZXZ0LmlzRGVmYXVsdFByZXZlbnRlZCgpO1xuICAgIH0pO1xuXG4gICAgLy8gV29ya2Fyb3VuZCBmb3IgYnJvd3NlcnMgd2hpY2ggZG8gbm90IHN1cHBvcnQgdGhlIGBpbnB1dGAgZXZlbnRcbiAgICAvLyBUaGlzIHdpbGwgcHJldmVudCBkb3VibGUtdHJpZ2dlcmluZyBvZiBldmVudHMgZm9yIGJyb3dzZXJzIHdoaWNoIHN1cHBvcnRcbiAgICAvLyBib3RoIHRoZSBga2V5dXBgIGFuZCBgaW5wdXRgIGV2ZW50cy5cbiAgICB0aGlzLiRzZWFyY2gub24oJ2lucHV0JywgZnVuY3Rpb24gKGV2dCkge1xuICAgICAgLy8gVW5iaW5kIHRoZSBkdXBsaWNhdGVkIGBrZXl1cGAgZXZlbnRcbiAgICAgICQodGhpcykub2ZmKCdrZXl1cCcpO1xuICAgIH0pO1xuXG4gICAgdGhpcy4kc2VhcmNoLm9uKCdrZXl1cCBpbnB1dCcsIGZ1bmN0aW9uIChldnQpIHtcbiAgICAgIHNlbGYuaGFuZGxlU2VhcmNoKGV2dCk7XG4gICAgfSk7XG5cbiAgICBjb250YWluZXIub24oJ29wZW4nLCBmdW5jdGlvbiAoKSB7XG4gICAgICBzZWxmLiRzZWFyY2guYXR0cigndGFiaW5kZXgnLCAwKTtcblxuICAgICAgc2VsZi4kc2VhcmNoLmZvY3VzKCk7XG5cbiAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgc2VsZi4kc2VhcmNoLmZvY3VzKCk7XG4gICAgICB9LCAwKTtcbiAgICB9KTtcblxuICAgIGNvbnRhaW5lci5vbignY2xvc2UnLCBmdW5jdGlvbiAoKSB7XG4gICAgICBzZWxmLiRzZWFyY2guYXR0cigndGFiaW5kZXgnLCAtMSk7XG5cbiAgICAgIHNlbGYuJHNlYXJjaC52YWwoJycpO1xuICAgICAgc2VsZi4kc2VhcmNoLmJsdXIoKTtcbiAgICB9KTtcblxuICAgIGNvbnRhaW5lci5vbignZm9jdXMnLCBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoIWNvbnRhaW5lci5pc09wZW4oKSkge1xuICAgICAgICBzZWxmLiRzZWFyY2guZm9jdXMoKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnRhaW5lci5vbigncmVzdWx0czphbGwnLCBmdW5jdGlvbiAocGFyYW1zKSB7XG4gICAgICBpZiAocGFyYW1zLnF1ZXJ5LnRlcm0gPT0gbnVsbCB8fCBwYXJhbXMucXVlcnkudGVybSA9PT0gJycpIHtcbiAgICAgICAgdmFyIHNob3dTZWFyY2ggPSBzZWxmLnNob3dTZWFyY2gocGFyYW1zKTtcblxuICAgICAgICBpZiAoc2hvd1NlYXJjaCkge1xuICAgICAgICAgIHNlbGYuJHNlYXJjaENvbnRhaW5lci5yZW1vdmVDbGFzcygnc2VsZWN0Mi1zZWFyY2gtLWhpZGUnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzZWxmLiRzZWFyY2hDb250YWluZXIuYWRkQ2xhc3MoJ3NlbGVjdDItc2VhcmNoLS1oaWRlJyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICBTZWFyY2gucHJvdG90eXBlLmhhbmRsZVNlYXJjaCA9IGZ1bmN0aW9uIChldnQpIHtcbiAgICBpZiAoIXRoaXMuX2tleVVwUHJldmVudGVkKSB7XG4gICAgICB2YXIgaW5wdXQgPSB0aGlzLiRzZWFyY2gudmFsKCk7XG5cbiAgICAgIHRoaXMudHJpZ2dlcigncXVlcnknLCB7XG4gICAgICAgIHRlcm06IGlucHV0XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICB0aGlzLl9rZXlVcFByZXZlbnRlZCA9IGZhbHNlO1xuICB9O1xuXG4gIFNlYXJjaC5wcm90b3R5cGUuc2hvd1NlYXJjaCA9IGZ1bmN0aW9uIChfLCBwYXJhbXMpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfTtcblxuICByZXR1cm4gU2VhcmNoO1xufSk7XG5cblMyLmRlZmluZSgnc2VsZWN0Mi9kcm9wZG93bi9oaWRlUGxhY2Vob2xkZXInLFtcblxuXSwgZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBIaWRlUGxhY2Vob2xkZXIgKGRlY29yYXRlZCwgJGVsZW1lbnQsIG9wdGlvbnMsIGRhdGFBZGFwdGVyKSB7XG4gICAgdGhpcy5wbGFjZWhvbGRlciA9IHRoaXMubm9ybWFsaXplUGxhY2Vob2xkZXIob3B0aW9ucy5nZXQoJ3BsYWNlaG9sZGVyJykpO1xuXG4gICAgZGVjb3JhdGVkLmNhbGwodGhpcywgJGVsZW1lbnQsIG9wdGlvbnMsIGRhdGFBZGFwdGVyKTtcbiAgfVxuXG4gIEhpZGVQbGFjZWhvbGRlci5wcm90b3R5cGUuYXBwZW5kID0gZnVuY3Rpb24gKGRlY29yYXRlZCwgZGF0YSkge1xuICAgIGRhdGEucmVzdWx0cyA9IHRoaXMucmVtb3ZlUGxhY2Vob2xkZXIoZGF0YS5yZXN1bHRzKTtcblxuICAgIGRlY29yYXRlZC5jYWxsKHRoaXMsIGRhdGEpO1xuICB9O1xuXG4gIEhpZGVQbGFjZWhvbGRlci5wcm90b3R5cGUubm9ybWFsaXplUGxhY2Vob2xkZXIgPSBmdW5jdGlvbiAoXywgcGxhY2Vob2xkZXIpIHtcbiAgICBpZiAodHlwZW9mIHBsYWNlaG9sZGVyID09PSAnc3RyaW5nJykge1xuICAgICAgcGxhY2Vob2xkZXIgPSB7XG4gICAgICAgIGlkOiAnJyxcbiAgICAgICAgdGV4dDogcGxhY2Vob2xkZXJcbiAgICAgIH07XG4gICAgfVxuXG4gICAgcmV0dXJuIHBsYWNlaG9sZGVyO1xuICB9O1xuXG4gIEhpZGVQbGFjZWhvbGRlci5wcm90b3R5cGUucmVtb3ZlUGxhY2Vob2xkZXIgPSBmdW5jdGlvbiAoXywgZGF0YSkge1xuICAgIHZhciBtb2RpZmllZERhdGEgPSBkYXRhLnNsaWNlKDApO1xuXG4gICAgZm9yICh2YXIgZCA9IGRhdGEubGVuZ3RoIC0gMTsgZCA+PSAwOyBkLS0pIHtcbiAgICAgIHZhciBpdGVtID0gZGF0YVtkXTtcblxuICAgICAgaWYgKHRoaXMucGxhY2Vob2xkZXIuaWQgPT09IGl0ZW0uaWQpIHtcbiAgICAgICAgbW9kaWZpZWREYXRhLnNwbGljZShkLCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbW9kaWZpZWREYXRhO1xuICB9O1xuXG4gIHJldHVybiBIaWRlUGxhY2Vob2xkZXI7XG59KTtcblxuUzIuZGVmaW5lKCdzZWxlY3QyL2Ryb3Bkb3duL2luZmluaXRlU2Nyb2xsJyxbXG4gICdqcXVlcnknXG5dLCBmdW5jdGlvbiAoJCkge1xuICBmdW5jdGlvbiBJbmZpbml0ZVNjcm9sbCAoZGVjb3JhdGVkLCAkZWxlbWVudCwgb3B0aW9ucywgZGF0YUFkYXB0ZXIpIHtcbiAgICB0aGlzLmxhc3RQYXJhbXMgPSB7fTtcblxuICAgIGRlY29yYXRlZC5jYWxsKHRoaXMsICRlbGVtZW50LCBvcHRpb25zLCBkYXRhQWRhcHRlcik7XG5cbiAgICB0aGlzLiRsb2FkaW5nTW9yZSA9IHRoaXMuY3JlYXRlTG9hZGluZ01vcmUoKTtcbiAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgfVxuXG4gIEluZmluaXRlU2Nyb2xsLnByb3RvdHlwZS5hcHBlbmQgPSBmdW5jdGlvbiAoZGVjb3JhdGVkLCBkYXRhKSB7XG4gICAgdGhpcy4kbG9hZGluZ01vcmUucmVtb3ZlKCk7XG4gICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG5cbiAgICBkZWNvcmF0ZWQuY2FsbCh0aGlzLCBkYXRhKTtcblxuICAgIGlmICh0aGlzLnNob3dMb2FkaW5nTW9yZShkYXRhKSkge1xuICAgICAgdGhpcy4kcmVzdWx0cy5hcHBlbmQodGhpcy4kbG9hZGluZ01vcmUpO1xuICAgIH1cbiAgfTtcblxuICBJbmZpbml0ZVNjcm9sbC5wcm90b3R5cGUuYmluZCA9IGZ1bmN0aW9uIChkZWNvcmF0ZWQsIGNvbnRhaW5lciwgJGNvbnRhaW5lcikge1xuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgIGRlY29yYXRlZC5jYWxsKHRoaXMsIGNvbnRhaW5lciwgJGNvbnRhaW5lcik7XG5cbiAgICBjb250YWluZXIub24oJ3F1ZXJ5JywgZnVuY3Rpb24gKHBhcmFtcykge1xuICAgICAgc2VsZi5sYXN0UGFyYW1zID0gcGFyYW1zO1xuICAgICAgc2VsZi5sb2FkaW5nID0gdHJ1ZTtcbiAgICB9KTtcblxuICAgIGNvbnRhaW5lci5vbigncXVlcnk6YXBwZW5kJywgZnVuY3Rpb24gKHBhcmFtcykge1xuICAgICAgc2VsZi5sYXN0UGFyYW1zID0gcGFyYW1zO1xuICAgICAgc2VsZi5sb2FkaW5nID0gdHJ1ZTtcbiAgICB9KTtcblxuICAgIHRoaXMuJHJlc3VsdHMub24oJ3Njcm9sbCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBpc0xvYWRNb3JlVmlzaWJsZSA9ICQuY29udGFpbnMoXG4gICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCxcbiAgICAgICAgc2VsZi4kbG9hZGluZ01vcmVbMF1cbiAgICAgICk7XG5cbiAgICAgIGlmIChzZWxmLmxvYWRpbmcgfHwgIWlzTG9hZE1vcmVWaXNpYmxlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdmFyIGN1cnJlbnRPZmZzZXQgPSBzZWxmLiRyZXN1bHRzLm9mZnNldCgpLnRvcCArXG4gICAgICAgIHNlbGYuJHJlc3VsdHMub3V0ZXJIZWlnaHQoZmFsc2UpO1xuICAgICAgdmFyIGxvYWRpbmdNb3JlT2Zmc2V0ID0gc2VsZi4kbG9hZGluZ01vcmUub2Zmc2V0KCkudG9wICtcbiAgICAgICAgc2VsZi4kbG9hZGluZ01vcmUub3V0ZXJIZWlnaHQoZmFsc2UpO1xuXG4gICAgICBpZiAoY3VycmVudE9mZnNldCArIDUwID49IGxvYWRpbmdNb3JlT2Zmc2V0KSB7XG4gICAgICAgIHNlbGYubG9hZE1vcmUoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICBJbmZpbml0ZVNjcm9sbC5wcm90b3R5cGUubG9hZE1vcmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcblxuICAgIHZhciBwYXJhbXMgPSAkLmV4dGVuZCh7fSwge3BhZ2U6IDF9LCB0aGlzLmxhc3RQYXJhbXMpO1xuXG4gICAgcGFyYW1zLnBhZ2UrKztcblxuICAgIHRoaXMudHJpZ2dlcigncXVlcnk6YXBwZW5kJywgcGFyYW1zKTtcbiAgfTtcblxuICBJbmZpbml0ZVNjcm9sbC5wcm90b3R5cGUuc2hvd0xvYWRpbmdNb3JlID0gZnVuY3Rpb24gKF8sIGRhdGEpIHtcbiAgICByZXR1cm4gZGF0YS5wYWdpbmF0aW9uICYmIGRhdGEucGFnaW5hdGlvbi5tb3JlO1xuICB9O1xuXG4gIEluZmluaXRlU2Nyb2xsLnByb3RvdHlwZS5jcmVhdGVMb2FkaW5nTW9yZSA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgJG9wdGlvbiA9ICQoXG4gICAgICAnPGxpICcgK1xuICAgICAgJ2NsYXNzPVwic2VsZWN0Mi1yZXN1bHRzX19vcHRpb24gc2VsZWN0Mi1yZXN1bHRzX19vcHRpb24tLWxvYWQtbW9yZVwiJyArXG4gICAgICAncm9sZT1cInRyZWVpdGVtXCIgYXJpYS1kaXNhYmxlZD1cInRydWVcIj48L2xpPidcbiAgICApO1xuXG4gICAgdmFyIG1lc3NhZ2UgPSB0aGlzLm9wdGlvbnMuZ2V0KCd0cmFuc2xhdGlvbnMnKS5nZXQoJ2xvYWRpbmdNb3JlJyk7XG5cbiAgICAkb3B0aW9uLmh0bWwobWVzc2FnZSh0aGlzLmxhc3RQYXJhbXMpKTtcblxuICAgIHJldHVybiAkb3B0aW9uO1xuICB9O1xuXG4gIHJldHVybiBJbmZpbml0ZVNjcm9sbDtcbn0pO1xuXG5TMi5kZWZpbmUoJ3NlbGVjdDIvZHJvcGRvd24vYXR0YWNoQm9keScsW1xuICAnanF1ZXJ5JyxcbiAgJy4uL3V0aWxzJ1xuXSwgZnVuY3Rpb24gKCQsIFV0aWxzKSB7XG4gIGZ1bmN0aW9uIEF0dGFjaEJvZHkgKGRlY29yYXRlZCwgJGVsZW1lbnQsIG9wdGlvbnMpIHtcbiAgICB0aGlzLiRkcm9wZG93blBhcmVudCA9IG9wdGlvbnMuZ2V0KCdkcm9wZG93blBhcmVudCcpIHx8ICQoZG9jdW1lbnQuYm9keSk7XG5cbiAgICBkZWNvcmF0ZWQuY2FsbCh0aGlzLCAkZWxlbWVudCwgb3B0aW9ucyk7XG4gIH1cblxuICBBdHRhY2hCb2R5LnByb3RvdHlwZS5iaW5kID0gZnVuY3Rpb24gKGRlY29yYXRlZCwgY29udGFpbmVyLCAkY29udGFpbmVyKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgdmFyIHNldHVwUmVzdWx0c0V2ZW50cyA9IGZhbHNlO1xuXG4gICAgZGVjb3JhdGVkLmNhbGwodGhpcywgY29udGFpbmVyLCAkY29udGFpbmVyKTtcblxuICAgIGNvbnRhaW5lci5vbignb3BlbicsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHNlbGYuX3Nob3dEcm9wZG93bigpO1xuICAgICAgc2VsZi5fYXR0YWNoUG9zaXRpb25pbmdIYW5kbGVyKGNvbnRhaW5lcik7XG5cbiAgICAgIGlmICghc2V0dXBSZXN1bHRzRXZlbnRzKSB7XG4gICAgICAgIHNldHVwUmVzdWx0c0V2ZW50cyA9IHRydWU7XG5cbiAgICAgICAgY29udGFpbmVyLm9uKCdyZXN1bHRzOmFsbCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBzZWxmLl9wb3NpdGlvbkRyb3Bkb3duKCk7XG4gICAgICAgICAgc2VsZi5fcmVzaXplRHJvcGRvd24oKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29udGFpbmVyLm9uKCdyZXN1bHRzOmFwcGVuZCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBzZWxmLl9wb3NpdGlvbkRyb3Bkb3duKCk7XG4gICAgICAgICAgc2VsZi5fcmVzaXplRHJvcGRvd24oKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBjb250YWluZXIub24oJ2Nsb3NlJywgZnVuY3Rpb24gKCkge1xuICAgICAgc2VsZi5faGlkZURyb3Bkb3duKCk7XG4gICAgICBzZWxmLl9kZXRhY2hQb3NpdGlvbmluZ0hhbmRsZXIoY29udGFpbmVyKTtcbiAgICB9KTtcblxuICAgIHRoaXMuJGRyb3Bkb3duQ29udGFpbmVyLm9uKCdtb3VzZWRvd24nLCBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICBldnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfSk7XG4gIH07XG5cbiAgQXR0YWNoQm9keS5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uIChkZWNvcmF0ZWQpIHtcbiAgICBkZWNvcmF0ZWQuY2FsbCh0aGlzKTtcblxuICAgIHRoaXMuJGRyb3Bkb3duQ29udGFpbmVyLnJlbW92ZSgpO1xuICB9O1xuXG4gIEF0dGFjaEJvZHkucHJvdG90eXBlLnBvc2l0aW9uID0gZnVuY3Rpb24gKGRlY29yYXRlZCwgJGRyb3Bkb3duLCAkY29udGFpbmVyKSB7XG4gICAgLy8gQ2xvbmUgYWxsIG9mIHRoZSBjb250YWluZXIgY2xhc3Nlc1xuICAgICRkcm9wZG93bi5hdHRyKCdjbGFzcycsICRjb250YWluZXIuYXR0cignY2xhc3MnKSk7XG5cbiAgICAkZHJvcGRvd24ucmVtb3ZlQ2xhc3MoJ3NlbGVjdDInKTtcbiAgICAkZHJvcGRvd24uYWRkQ2xhc3MoJ3NlbGVjdDItY29udGFpbmVyLS1vcGVuJyk7XG5cbiAgICAkZHJvcGRvd24uY3NzKHtcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgdG9wOiAtOTk5OTk5XG4gICAgfSk7XG5cbiAgICB0aGlzLiRjb250YWluZXIgPSAkY29udGFpbmVyO1xuICB9O1xuXG4gIEF0dGFjaEJvZHkucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uIChkZWNvcmF0ZWQpIHtcbiAgICB2YXIgJGNvbnRhaW5lciA9ICQoJzxzcGFuPjwvc3Bhbj4nKTtcblxuICAgIHZhciAkZHJvcGRvd24gPSBkZWNvcmF0ZWQuY2FsbCh0aGlzKTtcbiAgICAkY29udGFpbmVyLmFwcGVuZCgkZHJvcGRvd24pO1xuXG4gICAgdGhpcy4kZHJvcGRvd25Db250YWluZXIgPSAkY29udGFpbmVyO1xuXG4gICAgcmV0dXJuICRjb250YWluZXI7XG4gIH07XG5cbiAgQXR0YWNoQm9keS5wcm90b3R5cGUuX2hpZGVEcm9wZG93biA9IGZ1bmN0aW9uIChkZWNvcmF0ZWQpIHtcbiAgICB0aGlzLiRkcm9wZG93bkNvbnRhaW5lci5kZXRhY2goKTtcbiAgfTtcblxuICBBdHRhY2hCb2R5LnByb3RvdHlwZS5fYXR0YWNoUG9zaXRpb25pbmdIYW5kbGVyID1cbiAgICAgIGZ1bmN0aW9uIChkZWNvcmF0ZWQsIGNvbnRhaW5lcikge1xuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgIHZhciBzY3JvbGxFdmVudCA9ICdzY3JvbGwuc2VsZWN0Mi4nICsgY29udGFpbmVyLmlkO1xuICAgIHZhciByZXNpemVFdmVudCA9ICdyZXNpemUuc2VsZWN0Mi4nICsgY29udGFpbmVyLmlkO1xuICAgIHZhciBvcmllbnRhdGlvbkV2ZW50ID0gJ29yaWVudGF0aW9uY2hhbmdlLnNlbGVjdDIuJyArIGNvbnRhaW5lci5pZDtcblxuICAgIHZhciAkd2F0Y2hlcnMgPSB0aGlzLiRjb250YWluZXIucGFyZW50cygpLmZpbHRlcihVdGlscy5oYXNTY3JvbGwpO1xuICAgICR3YXRjaGVycy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIFV0aWxzLlN0b3JlRGF0YSh0aGlzLCAnc2VsZWN0Mi1zY3JvbGwtcG9zaXRpb24nLCB7XG4gICAgICAgIHg6ICQodGhpcykuc2Nyb2xsTGVmdCgpLFxuICAgICAgICB5OiAkKHRoaXMpLnNjcm9sbFRvcCgpXG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgICR3YXRjaGVycy5vbihzY3JvbGxFdmVudCwgZnVuY3Rpb24gKGV2KSB7XG4gICAgICB2YXIgcG9zaXRpb24gPSBVdGlscy5HZXREYXRhKHRoaXMsICdzZWxlY3QyLXNjcm9sbC1wb3NpdGlvbicpO1xuICAgICAgJCh0aGlzKS5zY3JvbGxUb3AocG9zaXRpb24ueSk7XG4gICAgfSk7XG5cbiAgICAkKHdpbmRvdykub24oc2Nyb2xsRXZlbnQgKyAnICcgKyByZXNpemVFdmVudCArICcgJyArIG9yaWVudGF0aW9uRXZlbnQsXG4gICAgICBmdW5jdGlvbiAoZSkge1xuICAgICAgc2VsZi5fcG9zaXRpb25Ecm9wZG93bigpO1xuICAgICAgc2VsZi5fcmVzaXplRHJvcGRvd24oKTtcbiAgICB9KTtcbiAgfTtcblxuICBBdHRhY2hCb2R5LnByb3RvdHlwZS5fZGV0YWNoUG9zaXRpb25pbmdIYW5kbGVyID1cbiAgICAgIGZ1bmN0aW9uIChkZWNvcmF0ZWQsIGNvbnRhaW5lcikge1xuICAgIHZhciBzY3JvbGxFdmVudCA9ICdzY3JvbGwuc2VsZWN0Mi4nICsgY29udGFpbmVyLmlkO1xuICAgIHZhciByZXNpemVFdmVudCA9ICdyZXNpemUuc2VsZWN0Mi4nICsgY29udGFpbmVyLmlkO1xuICAgIHZhciBvcmllbnRhdGlvbkV2ZW50ID0gJ29yaWVudGF0aW9uY2hhbmdlLnNlbGVjdDIuJyArIGNvbnRhaW5lci5pZDtcblxuICAgIHZhciAkd2F0Y2hlcnMgPSB0aGlzLiRjb250YWluZXIucGFyZW50cygpLmZpbHRlcihVdGlscy5oYXNTY3JvbGwpO1xuICAgICR3YXRjaGVycy5vZmYoc2Nyb2xsRXZlbnQpO1xuXG4gICAgJCh3aW5kb3cpLm9mZihzY3JvbGxFdmVudCArICcgJyArIHJlc2l6ZUV2ZW50ICsgJyAnICsgb3JpZW50YXRpb25FdmVudCk7XG4gIH07XG5cbiAgQXR0YWNoQm9keS5wcm90b3R5cGUuX3Bvc2l0aW9uRHJvcGRvd24gPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyICR3aW5kb3cgPSAkKHdpbmRvdyk7XG5cbiAgICB2YXIgaXNDdXJyZW50bHlBYm92ZSA9IHRoaXMuJGRyb3Bkb3duLmhhc0NsYXNzKCdzZWxlY3QyLWRyb3Bkb3duLS1hYm92ZScpO1xuICAgIHZhciBpc0N1cnJlbnRseUJlbG93ID0gdGhpcy4kZHJvcGRvd24uaGFzQ2xhc3MoJ3NlbGVjdDItZHJvcGRvd24tLWJlbG93Jyk7XG5cbiAgICB2YXIgbmV3RGlyZWN0aW9uID0gbnVsbDtcblxuICAgIHZhciBvZmZzZXQgPSB0aGlzLiRjb250YWluZXIub2Zmc2V0KCk7XG5cbiAgICBvZmZzZXQuYm90dG9tID0gb2Zmc2V0LnRvcCArIHRoaXMuJGNvbnRhaW5lci5vdXRlckhlaWdodChmYWxzZSk7XG5cbiAgICB2YXIgY29udGFpbmVyID0ge1xuICAgICAgaGVpZ2h0OiB0aGlzLiRjb250YWluZXIub3V0ZXJIZWlnaHQoZmFsc2UpXG4gICAgfTtcblxuICAgIGNvbnRhaW5lci50b3AgPSBvZmZzZXQudG9wO1xuICAgIGNvbnRhaW5lci5ib3R0b20gPSBvZmZzZXQudG9wICsgY29udGFpbmVyLmhlaWdodDtcblxuICAgIHZhciBkcm9wZG93biA9IHtcbiAgICAgIGhlaWdodDogdGhpcy4kZHJvcGRvd24ub3V0ZXJIZWlnaHQoZmFsc2UpXG4gICAgfTtcblxuICAgIHZhciB2aWV3cG9ydCA9IHtcbiAgICAgIHRvcDogJHdpbmRvdy5zY3JvbGxUb3AoKSxcbiAgICAgIGJvdHRvbTogJHdpbmRvdy5zY3JvbGxUb3AoKSArICR3aW5kb3cuaGVpZ2h0KClcbiAgICB9O1xuXG4gICAgdmFyIGVub3VnaFJvb21BYm92ZSA9IHZpZXdwb3J0LnRvcCA8IChvZmZzZXQudG9wIC0gZHJvcGRvd24uaGVpZ2h0KTtcbiAgICB2YXIgZW5vdWdoUm9vbUJlbG93ID0gdmlld3BvcnQuYm90dG9tID4gKG9mZnNldC5ib3R0b20gKyBkcm9wZG93bi5oZWlnaHQpO1xuXG4gICAgdmFyIGNzcyA9IHtcbiAgICAgIGxlZnQ6IG9mZnNldC5sZWZ0LFxuICAgICAgdG9wOiBjb250YWluZXIuYm90dG9tXG4gICAgfTtcblxuICAgIC8vIERldGVybWluZSB3aGF0IHRoZSBwYXJlbnQgZWxlbWVudCBpcyB0byB1c2UgZm9yIGNhbGNpdWxhdGluZyB0aGUgb2Zmc2V0XG4gICAgdmFyICRvZmZzZXRQYXJlbnQgPSB0aGlzLiRkcm9wZG93blBhcmVudDtcblxuICAgIC8vIEZvciBzdGF0aWNhbGx5IHBvc2l0b25lZCBlbGVtZW50cywgd2UgbmVlZCB0byBnZXQgdGhlIGVsZW1lbnRcbiAgICAvLyB0aGF0IGlzIGRldGVybWluaW5nIHRoZSBvZmZzZXRcbiAgICBpZiAoJG9mZnNldFBhcmVudC5jc3MoJ3Bvc2l0aW9uJykgPT09ICdzdGF0aWMnKSB7XG4gICAgICAkb2Zmc2V0UGFyZW50ID0gJG9mZnNldFBhcmVudC5vZmZzZXRQYXJlbnQoKTtcbiAgICB9XG5cbiAgICB2YXIgcGFyZW50T2Zmc2V0ID0gJG9mZnNldFBhcmVudC5vZmZzZXQoKTtcblxuICAgIGNzcy50b3AgLT0gcGFyZW50T2Zmc2V0LnRvcDtcbiAgICBjc3MubGVmdCAtPSBwYXJlbnRPZmZzZXQubGVmdDtcblxuICAgIGlmICghaXNDdXJyZW50bHlBYm92ZSAmJiAhaXNDdXJyZW50bHlCZWxvdykge1xuICAgICAgbmV3RGlyZWN0aW9uID0gJ2JlbG93JztcbiAgICB9XG5cbiAgICBpZiAoIWVub3VnaFJvb21CZWxvdyAmJiBlbm91Z2hSb29tQWJvdmUgJiYgIWlzQ3VycmVudGx5QWJvdmUpIHtcbiAgICAgIG5ld0RpcmVjdGlvbiA9ICdhYm92ZSc7XG4gICAgfSBlbHNlIGlmICghZW5vdWdoUm9vbUFib3ZlICYmIGVub3VnaFJvb21CZWxvdyAmJiBpc0N1cnJlbnRseUFib3ZlKSB7XG4gICAgICBuZXdEaXJlY3Rpb24gPSAnYmVsb3cnO1xuICAgIH1cblxuICAgIGlmIChuZXdEaXJlY3Rpb24gPT0gJ2Fib3ZlJyB8fFxuICAgICAgKGlzQ3VycmVudGx5QWJvdmUgJiYgbmV3RGlyZWN0aW9uICE9PSAnYmVsb3cnKSkge1xuICAgICAgY3NzLnRvcCA9IGNvbnRhaW5lci50b3AgLSBwYXJlbnRPZmZzZXQudG9wIC0gZHJvcGRvd24uaGVpZ2h0O1xuICAgIH1cblxuICAgIGlmIChuZXdEaXJlY3Rpb24gIT0gbnVsbCkge1xuICAgICAgdGhpcy4kZHJvcGRvd25cbiAgICAgICAgLnJlbW92ZUNsYXNzKCdzZWxlY3QyLWRyb3Bkb3duLS1iZWxvdyBzZWxlY3QyLWRyb3Bkb3duLS1hYm92ZScpXG4gICAgICAgIC5hZGRDbGFzcygnc2VsZWN0Mi1kcm9wZG93bi0tJyArIG5ld0RpcmVjdGlvbik7XG4gICAgICB0aGlzLiRjb250YWluZXJcbiAgICAgICAgLnJlbW92ZUNsYXNzKCdzZWxlY3QyLWNvbnRhaW5lci0tYmVsb3cgc2VsZWN0Mi1jb250YWluZXItLWFib3ZlJylcbiAgICAgICAgLmFkZENsYXNzKCdzZWxlY3QyLWNvbnRhaW5lci0tJyArIG5ld0RpcmVjdGlvbik7XG4gICAgfVxuXG4gICAgdGhpcy4kZHJvcGRvd25Db250YWluZXIuY3NzKGNzcyk7XG4gIH07XG5cbiAgQXR0YWNoQm9keS5wcm90b3R5cGUuX3Jlc2l6ZURyb3Bkb3duID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBjc3MgPSB7XG4gICAgICB3aWR0aDogdGhpcy4kY29udGFpbmVyLm91dGVyV2lkdGgoZmFsc2UpICsgJ3B4J1xuICAgIH07XG5cbiAgICBpZiAodGhpcy5vcHRpb25zLmdldCgnZHJvcGRvd25BdXRvV2lkdGgnKSkge1xuICAgICAgY3NzLm1pbldpZHRoID0gY3NzLndpZHRoO1xuICAgICAgY3NzLnBvc2l0aW9uID0gJ3JlbGF0aXZlJztcbiAgICAgIGNzcy53aWR0aCA9ICdhdXRvJztcbiAgICB9XG5cbiAgICB0aGlzLiRkcm9wZG93bi5jc3MoY3NzKTtcbiAgfTtcblxuICBBdHRhY2hCb2R5LnByb3RvdHlwZS5fc2hvd0Ryb3Bkb3duID0gZnVuY3Rpb24gKGRlY29yYXRlZCkge1xuICAgIHRoaXMuJGRyb3Bkb3duQ29udGFpbmVyLmFwcGVuZFRvKHRoaXMuJGRyb3Bkb3duUGFyZW50KTtcblxuICAgIHRoaXMuX3Bvc2l0aW9uRHJvcGRvd24oKTtcbiAgICB0aGlzLl9yZXNpemVEcm9wZG93bigpO1xuICB9O1xuXG4gIHJldHVybiBBdHRhY2hCb2R5O1xufSk7XG5cblMyLmRlZmluZSgnc2VsZWN0Mi9kcm9wZG93bi9taW5pbXVtUmVzdWx0c0ZvclNlYXJjaCcsW1xuXG5dLCBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIGNvdW50UmVzdWx0cyAoZGF0YSkge1xuICAgIHZhciBjb3VudCA9IDA7XG5cbiAgICBmb3IgKHZhciBkID0gMDsgZCA8IGRhdGEubGVuZ3RoOyBkKyspIHtcbiAgICAgIHZhciBpdGVtID0gZGF0YVtkXTtcblxuICAgICAgaWYgKGl0ZW0uY2hpbGRyZW4pIHtcbiAgICAgICAgY291bnQgKz0gY291bnRSZXN1bHRzKGl0ZW0uY2hpbGRyZW4pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY291bnQrKztcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gY291bnQ7XG4gIH1cblxuICBmdW5jdGlvbiBNaW5pbXVtUmVzdWx0c0ZvclNlYXJjaCAoZGVjb3JhdGVkLCAkZWxlbWVudCwgb3B0aW9ucywgZGF0YUFkYXB0ZXIpIHtcbiAgICB0aGlzLm1pbmltdW1SZXN1bHRzRm9yU2VhcmNoID0gb3B0aW9ucy5nZXQoJ21pbmltdW1SZXN1bHRzRm9yU2VhcmNoJyk7XG5cbiAgICBpZiAodGhpcy5taW5pbXVtUmVzdWx0c0ZvclNlYXJjaCA8IDApIHtcbiAgICAgIHRoaXMubWluaW11bVJlc3VsdHNGb3JTZWFyY2ggPSBJbmZpbml0eTtcbiAgICB9XG5cbiAgICBkZWNvcmF0ZWQuY2FsbCh0aGlzLCAkZWxlbWVudCwgb3B0aW9ucywgZGF0YUFkYXB0ZXIpO1xuICB9XG5cbiAgTWluaW11bVJlc3VsdHNGb3JTZWFyY2gucHJvdG90eXBlLnNob3dTZWFyY2ggPSBmdW5jdGlvbiAoZGVjb3JhdGVkLCBwYXJhbXMpIHtcbiAgICBpZiAoY291bnRSZXN1bHRzKHBhcmFtcy5kYXRhLnJlc3VsdHMpIDwgdGhpcy5taW5pbXVtUmVzdWx0c0ZvclNlYXJjaCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHJldHVybiBkZWNvcmF0ZWQuY2FsbCh0aGlzLCBwYXJhbXMpO1xuICB9O1xuXG4gIHJldHVybiBNaW5pbXVtUmVzdWx0c0ZvclNlYXJjaDtcbn0pO1xuXG5TMi5kZWZpbmUoJ3NlbGVjdDIvZHJvcGRvd24vc2VsZWN0T25DbG9zZScsW1xuICAnLi4vdXRpbHMnXG5dLCBmdW5jdGlvbiAoVXRpbHMpIHtcbiAgZnVuY3Rpb24gU2VsZWN0T25DbG9zZSAoKSB7IH1cblxuICBTZWxlY3RPbkNsb3NlLnByb3RvdHlwZS5iaW5kID0gZnVuY3Rpb24gKGRlY29yYXRlZCwgY29udGFpbmVyLCAkY29udGFpbmVyKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgZGVjb3JhdGVkLmNhbGwodGhpcywgY29udGFpbmVyLCAkY29udGFpbmVyKTtcblxuICAgIGNvbnRhaW5lci5vbignY2xvc2UnLCBmdW5jdGlvbiAocGFyYW1zKSB7XG4gICAgICBzZWxmLl9oYW5kbGVTZWxlY3RPbkNsb3NlKHBhcmFtcyk7XG4gICAgfSk7XG4gIH07XG5cbiAgU2VsZWN0T25DbG9zZS5wcm90b3R5cGUuX2hhbmRsZVNlbGVjdE9uQ2xvc2UgPSBmdW5jdGlvbiAoXywgcGFyYW1zKSB7XG4gICAgaWYgKHBhcmFtcyAmJiBwYXJhbXMub3JpZ2luYWxTZWxlY3QyRXZlbnQgIT0gbnVsbCkge1xuICAgICAgdmFyIGV2ZW50ID0gcGFyYW1zLm9yaWdpbmFsU2VsZWN0MkV2ZW50O1xuXG4gICAgICAvLyBEb24ndCBzZWxlY3QgYW4gaXRlbSBpZiB0aGUgY2xvc2UgZXZlbnQgd2FzIHRyaWdnZXJlZCBmcm9tIGEgc2VsZWN0IG9yXG4gICAgICAvLyB1bnNlbGVjdCBldmVudFxuICAgICAgaWYgKGV2ZW50Ll90eXBlID09PSAnc2VsZWN0JyB8fCBldmVudC5fdHlwZSA9PT0gJ3Vuc2VsZWN0Jykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyICRoaWdobGlnaHRlZFJlc3VsdHMgPSB0aGlzLmdldEhpZ2hsaWdodGVkUmVzdWx0cygpO1xuXG4gICAgLy8gT25seSBzZWxlY3QgaGlnaGxpZ2h0ZWQgcmVzdWx0c1xuICAgIGlmICgkaGlnaGxpZ2h0ZWRSZXN1bHRzLmxlbmd0aCA8IDEpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgZGF0YSA9IFV0aWxzLkdldERhdGEoJGhpZ2hsaWdodGVkUmVzdWx0c1swXSwgJ2RhdGEnKTtcblxuICAgIC8vIERvbid0IHJlLXNlbGVjdCBhbHJlYWR5IHNlbGVjdGVkIHJlc3VsdGVcbiAgICBpZiAoXG4gICAgICAoZGF0YS5lbGVtZW50ICE9IG51bGwgJiYgZGF0YS5lbGVtZW50LnNlbGVjdGVkKSB8fFxuICAgICAgKGRhdGEuZWxlbWVudCA9PSBudWxsICYmIGRhdGEuc2VsZWN0ZWQpXG4gICAgKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy50cmlnZ2VyKCdzZWxlY3QnLCB7XG4gICAgICAgIGRhdGE6IGRhdGFcbiAgICB9KTtcbiAgfTtcblxuICByZXR1cm4gU2VsZWN0T25DbG9zZTtcbn0pO1xuXG5TMi5kZWZpbmUoJ3NlbGVjdDIvZHJvcGRvd24vY2xvc2VPblNlbGVjdCcsW1xuXG5dLCBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIENsb3NlT25TZWxlY3QgKCkgeyB9XG5cbiAgQ2xvc2VPblNlbGVjdC5wcm90b3R5cGUuYmluZCA9IGZ1bmN0aW9uIChkZWNvcmF0ZWQsIGNvbnRhaW5lciwgJGNvbnRhaW5lcikge1xuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgIGRlY29yYXRlZC5jYWxsKHRoaXMsIGNvbnRhaW5lciwgJGNvbnRhaW5lcik7XG5cbiAgICBjb250YWluZXIub24oJ3NlbGVjdCcsIGZ1bmN0aW9uIChldnQpIHtcbiAgICAgIHNlbGYuX3NlbGVjdFRyaWdnZXJlZChldnQpO1xuICAgIH0pO1xuXG4gICAgY29udGFpbmVyLm9uKCd1bnNlbGVjdCcsIGZ1bmN0aW9uIChldnQpIHtcbiAgICAgIHNlbGYuX3NlbGVjdFRyaWdnZXJlZChldnQpO1xuICAgIH0pO1xuICB9O1xuXG4gIENsb3NlT25TZWxlY3QucHJvdG90eXBlLl9zZWxlY3RUcmlnZ2VyZWQgPSBmdW5jdGlvbiAoXywgZXZ0KSB7XG4gICAgdmFyIG9yaWdpbmFsRXZlbnQgPSBldnQub3JpZ2luYWxFdmVudDtcblxuICAgIC8vIERvbid0IGNsb3NlIGlmIHRoZSBjb250cm9sIGtleSBpcyBiZWluZyBoZWxkXG4gICAgaWYgKG9yaWdpbmFsRXZlbnQgJiYgb3JpZ2luYWxFdmVudC5jdHJsS2V5KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy50cmlnZ2VyKCdjbG9zZScsIHtcbiAgICAgIG9yaWdpbmFsRXZlbnQ6IG9yaWdpbmFsRXZlbnQsXG4gICAgICBvcmlnaW5hbFNlbGVjdDJFdmVudDogZXZ0XG4gICAgfSk7XG4gIH07XG5cbiAgcmV0dXJuIENsb3NlT25TZWxlY3Q7XG59KTtcblxuUzIuZGVmaW5lKCdzZWxlY3QyL2kxOG4vZW4nLFtdLGZ1bmN0aW9uICgpIHtcbiAgLy8gRW5nbGlzaFxuICByZXR1cm4ge1xuICAgIGVycm9yTG9hZGluZzogZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuICdUaGUgcmVzdWx0cyBjb3VsZCBub3QgYmUgbG9hZGVkLic7XG4gICAgfSxcbiAgICBpbnB1dFRvb0xvbmc6IGZ1bmN0aW9uIChhcmdzKSB7XG4gICAgICB2YXIgb3ZlckNoYXJzID0gYXJncy5pbnB1dC5sZW5ndGggLSBhcmdzLm1heGltdW07XG5cbiAgICAgIHZhciBtZXNzYWdlID0gJ1BsZWFzZSBkZWxldGUgJyArIG92ZXJDaGFycyArICcgY2hhcmFjdGVyJztcblxuICAgICAgaWYgKG92ZXJDaGFycyAhPSAxKSB7XG4gICAgICAgIG1lc3NhZ2UgKz0gJ3MnO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gbWVzc2FnZTtcbiAgICB9LFxuICAgIGlucHV0VG9vU2hvcnQ6IGZ1bmN0aW9uIChhcmdzKSB7XG4gICAgICB2YXIgcmVtYWluaW5nQ2hhcnMgPSBhcmdzLm1pbmltdW0gLSBhcmdzLmlucHV0Lmxlbmd0aDtcblxuICAgICAgdmFyIG1lc3NhZ2UgPSAnUGxlYXNlIGVudGVyICcgKyByZW1haW5pbmdDaGFycyArICcgb3IgbW9yZSBjaGFyYWN0ZXJzJztcblxuICAgICAgcmV0dXJuIG1lc3NhZ2U7XG4gICAgfSxcbiAgICBsb2FkaW5nTW9yZTogZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuICdMb2FkaW5nIG1vcmUgcmVzdWx0c+KApic7XG4gICAgfSxcbiAgICBtYXhpbXVtU2VsZWN0ZWQ6IGZ1bmN0aW9uIChhcmdzKSB7XG4gICAgICB2YXIgbWVzc2FnZSA9ICdZb3UgY2FuIG9ubHkgc2VsZWN0ICcgKyBhcmdzLm1heGltdW0gKyAnIGl0ZW0nO1xuXG4gICAgICBpZiAoYXJncy5tYXhpbXVtICE9IDEpIHtcbiAgICAgICAgbWVzc2FnZSArPSAncyc7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBtZXNzYWdlO1xuICAgIH0sXG4gICAgbm9SZXN1bHRzOiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gJ05vIHJlc3VsdHMgZm91bmQnO1xuICAgIH0sXG4gICAgc2VhcmNoaW5nOiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gJ1NlYXJjaGluZ+KApic7XG4gICAgfVxuICB9O1xufSk7XG5cblMyLmRlZmluZSgnc2VsZWN0Mi9kZWZhdWx0cycsW1xuICAnanF1ZXJ5JyxcbiAgJ3JlcXVpcmUnLFxuXG4gICcuL3Jlc3VsdHMnLFxuXG4gICcuL3NlbGVjdGlvbi9zaW5nbGUnLFxuICAnLi9zZWxlY3Rpb24vbXVsdGlwbGUnLFxuICAnLi9zZWxlY3Rpb24vcGxhY2Vob2xkZXInLFxuICAnLi9zZWxlY3Rpb24vYWxsb3dDbGVhcicsXG4gICcuL3NlbGVjdGlvbi9zZWFyY2gnLFxuICAnLi9zZWxlY3Rpb24vZXZlbnRSZWxheScsXG5cbiAgJy4vdXRpbHMnLFxuICAnLi90cmFuc2xhdGlvbicsXG4gICcuL2RpYWNyaXRpY3MnLFxuXG4gICcuL2RhdGEvc2VsZWN0JyxcbiAgJy4vZGF0YS9hcnJheScsXG4gICcuL2RhdGEvYWpheCcsXG4gICcuL2RhdGEvdGFncycsXG4gICcuL2RhdGEvdG9rZW5pemVyJyxcbiAgJy4vZGF0YS9taW5pbXVtSW5wdXRMZW5ndGgnLFxuICAnLi9kYXRhL21heGltdW1JbnB1dExlbmd0aCcsXG4gICcuL2RhdGEvbWF4aW11bVNlbGVjdGlvbkxlbmd0aCcsXG5cbiAgJy4vZHJvcGRvd24nLFxuICAnLi9kcm9wZG93bi9zZWFyY2gnLFxuICAnLi9kcm9wZG93bi9oaWRlUGxhY2Vob2xkZXInLFxuICAnLi9kcm9wZG93bi9pbmZpbml0ZVNjcm9sbCcsXG4gICcuL2Ryb3Bkb3duL2F0dGFjaEJvZHknLFxuICAnLi9kcm9wZG93bi9taW5pbXVtUmVzdWx0c0ZvclNlYXJjaCcsXG4gICcuL2Ryb3Bkb3duL3NlbGVjdE9uQ2xvc2UnLFxuICAnLi9kcm9wZG93bi9jbG9zZU9uU2VsZWN0JyxcblxuICAnLi9pMThuL2VuJ1xuXSwgZnVuY3Rpb24gKCQsIHJlcXVpcmUsXG5cbiAgICAgICAgICAgICBSZXN1bHRzTGlzdCxcblxuICAgICAgICAgICAgIFNpbmdsZVNlbGVjdGlvbiwgTXVsdGlwbGVTZWxlY3Rpb24sIFBsYWNlaG9sZGVyLCBBbGxvd0NsZWFyLFxuICAgICAgICAgICAgIFNlbGVjdGlvblNlYXJjaCwgRXZlbnRSZWxheSxcblxuICAgICAgICAgICAgIFV0aWxzLCBUcmFuc2xhdGlvbiwgRElBQ1JJVElDUyxcblxuICAgICAgICAgICAgIFNlbGVjdERhdGEsIEFycmF5RGF0YSwgQWpheERhdGEsIFRhZ3MsIFRva2VuaXplcixcbiAgICAgICAgICAgICBNaW5pbXVtSW5wdXRMZW5ndGgsIE1heGltdW1JbnB1dExlbmd0aCwgTWF4aW11bVNlbGVjdGlvbkxlbmd0aCxcblxuICAgICAgICAgICAgIERyb3Bkb3duLCBEcm9wZG93blNlYXJjaCwgSGlkZVBsYWNlaG9sZGVyLCBJbmZpbml0ZVNjcm9sbCxcbiAgICAgICAgICAgICBBdHRhY2hCb2R5LCBNaW5pbXVtUmVzdWx0c0ZvclNlYXJjaCwgU2VsZWN0T25DbG9zZSwgQ2xvc2VPblNlbGVjdCxcblxuICAgICAgICAgICAgIEVuZ2xpc2hUcmFuc2xhdGlvbikge1xuICBmdW5jdGlvbiBEZWZhdWx0cyAoKSB7XG4gICAgdGhpcy5yZXNldCgpO1xuICB9XG5cbiAgRGVmYXVsdHMucHJvdG90eXBlLmFwcGx5ID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0gJC5leHRlbmQodHJ1ZSwge30sIHRoaXMuZGVmYXVsdHMsIG9wdGlvbnMpO1xuXG4gICAgaWYgKG9wdGlvbnMuZGF0YUFkYXB0ZXIgPT0gbnVsbCkge1xuICAgICAgaWYgKG9wdGlvbnMuYWpheCAhPSBudWxsKSB7XG4gICAgICAgIG9wdGlvbnMuZGF0YUFkYXB0ZXIgPSBBamF4RGF0YTtcbiAgICAgIH0gZWxzZSBpZiAob3B0aW9ucy5kYXRhICE9IG51bGwpIHtcbiAgICAgICAgb3B0aW9ucy5kYXRhQWRhcHRlciA9IEFycmF5RGF0YTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG9wdGlvbnMuZGF0YUFkYXB0ZXIgPSBTZWxlY3REYXRhO1xuICAgICAgfVxuXG4gICAgICBpZiAob3B0aW9ucy5taW5pbXVtSW5wdXRMZW5ndGggPiAwKSB7XG4gICAgICAgIG9wdGlvbnMuZGF0YUFkYXB0ZXIgPSBVdGlscy5EZWNvcmF0ZShcbiAgICAgICAgICBvcHRpb25zLmRhdGFBZGFwdGVyLFxuICAgICAgICAgIE1pbmltdW1JbnB1dExlbmd0aFxuICAgICAgICApO1xuICAgICAgfVxuXG4gICAgICBpZiAob3B0aW9ucy5tYXhpbXVtSW5wdXRMZW5ndGggPiAwKSB7XG4gICAgICAgIG9wdGlvbnMuZGF0YUFkYXB0ZXIgPSBVdGlscy5EZWNvcmF0ZShcbiAgICAgICAgICBvcHRpb25zLmRhdGFBZGFwdGVyLFxuICAgICAgICAgIE1heGltdW1JbnB1dExlbmd0aFxuICAgICAgICApO1xuICAgICAgfVxuXG4gICAgICBpZiAob3B0aW9ucy5tYXhpbXVtU2VsZWN0aW9uTGVuZ3RoID4gMCkge1xuICAgICAgICBvcHRpb25zLmRhdGFBZGFwdGVyID0gVXRpbHMuRGVjb3JhdGUoXG4gICAgICAgICAgb3B0aW9ucy5kYXRhQWRhcHRlcixcbiAgICAgICAgICBNYXhpbXVtU2VsZWN0aW9uTGVuZ3RoXG4gICAgICAgICk7XG4gICAgICB9XG5cbiAgICAgIGlmIChvcHRpb25zLnRhZ3MpIHtcbiAgICAgICAgb3B0aW9ucy5kYXRhQWRhcHRlciA9IFV0aWxzLkRlY29yYXRlKG9wdGlvbnMuZGF0YUFkYXB0ZXIsIFRhZ3MpO1xuICAgICAgfVxuXG4gICAgICBpZiAob3B0aW9ucy50b2tlblNlcGFyYXRvcnMgIT0gbnVsbCB8fCBvcHRpb25zLnRva2VuaXplciAhPSBudWxsKSB7XG4gICAgICAgIG9wdGlvbnMuZGF0YUFkYXB0ZXIgPSBVdGlscy5EZWNvcmF0ZShcbiAgICAgICAgICBvcHRpb25zLmRhdGFBZGFwdGVyLFxuICAgICAgICAgIFRva2VuaXplclxuICAgICAgICApO1xuICAgICAgfVxuXG4gICAgICBpZiAob3B0aW9ucy5xdWVyeSAhPSBudWxsKSB7XG4gICAgICAgIHZhciBRdWVyeSA9IHJlcXVpcmUob3B0aW9ucy5hbWRCYXNlICsgJ2NvbXBhdC9xdWVyeScpO1xuXG4gICAgICAgIG9wdGlvbnMuZGF0YUFkYXB0ZXIgPSBVdGlscy5EZWNvcmF0ZShcbiAgICAgICAgICBvcHRpb25zLmRhdGFBZGFwdGVyLFxuICAgICAgICAgIFF1ZXJ5XG4gICAgICAgICk7XG4gICAgICB9XG5cbiAgICAgIGlmIChvcHRpb25zLmluaXRTZWxlY3Rpb24gIT0gbnVsbCkge1xuICAgICAgICB2YXIgSW5pdFNlbGVjdGlvbiA9IHJlcXVpcmUob3B0aW9ucy5hbWRCYXNlICsgJ2NvbXBhdC9pbml0U2VsZWN0aW9uJyk7XG5cbiAgICAgICAgb3B0aW9ucy5kYXRhQWRhcHRlciA9IFV0aWxzLkRlY29yYXRlKFxuICAgICAgICAgIG9wdGlvbnMuZGF0YUFkYXB0ZXIsXG4gICAgICAgICAgSW5pdFNlbGVjdGlvblxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChvcHRpb25zLnJlc3VsdHNBZGFwdGVyID09IG51bGwpIHtcbiAgICAgIG9wdGlvbnMucmVzdWx0c0FkYXB0ZXIgPSBSZXN1bHRzTGlzdDtcblxuICAgICAgaWYgKG9wdGlvbnMuYWpheCAhPSBudWxsKSB7XG4gICAgICAgIG9wdGlvbnMucmVzdWx0c0FkYXB0ZXIgPSBVdGlscy5EZWNvcmF0ZShcbiAgICAgICAgICBvcHRpb25zLnJlc3VsdHNBZGFwdGVyLFxuICAgICAgICAgIEluZmluaXRlU2Nyb2xsXG4gICAgICAgICk7XG4gICAgICB9XG5cbiAgICAgIGlmIChvcHRpb25zLnBsYWNlaG9sZGVyICE9IG51bGwpIHtcbiAgICAgICAgb3B0aW9ucy5yZXN1bHRzQWRhcHRlciA9IFV0aWxzLkRlY29yYXRlKFxuICAgICAgICAgIG9wdGlvbnMucmVzdWx0c0FkYXB0ZXIsXG4gICAgICAgICAgSGlkZVBsYWNlaG9sZGVyXG4gICAgICAgICk7XG4gICAgICB9XG5cbiAgICAgIGlmIChvcHRpb25zLnNlbGVjdE9uQ2xvc2UpIHtcbiAgICAgICAgb3B0aW9ucy5yZXN1bHRzQWRhcHRlciA9IFV0aWxzLkRlY29yYXRlKFxuICAgICAgICAgIG9wdGlvbnMucmVzdWx0c0FkYXB0ZXIsXG4gICAgICAgICAgU2VsZWN0T25DbG9zZVxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChvcHRpb25zLmRyb3Bkb3duQWRhcHRlciA9PSBudWxsKSB7XG4gICAgICBpZiAob3B0aW9ucy5tdWx0aXBsZSkge1xuICAgICAgICBvcHRpb25zLmRyb3Bkb3duQWRhcHRlciA9IERyb3Bkb3duO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIFNlYXJjaGFibGVEcm9wZG93biA9IFV0aWxzLkRlY29yYXRlKERyb3Bkb3duLCBEcm9wZG93blNlYXJjaCk7XG5cbiAgICAgICAgb3B0aW9ucy5kcm9wZG93bkFkYXB0ZXIgPSBTZWFyY2hhYmxlRHJvcGRvd247XG4gICAgICB9XG5cbiAgICAgIGlmIChvcHRpb25zLm1pbmltdW1SZXN1bHRzRm9yU2VhcmNoICE9PSAwKSB7XG4gICAgICAgIG9wdGlvbnMuZHJvcGRvd25BZGFwdGVyID0gVXRpbHMuRGVjb3JhdGUoXG4gICAgICAgICAgb3B0aW9ucy5kcm9wZG93bkFkYXB0ZXIsXG4gICAgICAgICAgTWluaW11bVJlc3VsdHNGb3JTZWFyY2hcbiAgICAgICAgKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG9wdGlvbnMuY2xvc2VPblNlbGVjdCkge1xuICAgICAgICBvcHRpb25zLmRyb3Bkb3duQWRhcHRlciA9IFV0aWxzLkRlY29yYXRlKFxuICAgICAgICAgIG9wdGlvbnMuZHJvcGRvd25BZGFwdGVyLFxuICAgICAgICAgIENsb3NlT25TZWxlY3RcbiAgICAgICAgKTtcbiAgICAgIH1cblxuICAgICAgaWYgKFxuICAgICAgICBvcHRpb25zLmRyb3Bkb3duQ3NzQ2xhc3MgIT0gbnVsbCB8fFxuICAgICAgICBvcHRpb25zLmRyb3Bkb3duQ3NzICE9IG51bGwgfHxcbiAgICAgICAgb3B0aW9ucy5hZGFwdERyb3Bkb3duQ3NzQ2xhc3MgIT0gbnVsbFxuICAgICAgKSB7XG4gICAgICAgIHZhciBEcm9wZG93bkNTUyA9IHJlcXVpcmUob3B0aW9ucy5hbWRCYXNlICsgJ2NvbXBhdC9kcm9wZG93bkNzcycpO1xuXG4gICAgICAgIG9wdGlvbnMuZHJvcGRvd25BZGFwdGVyID0gVXRpbHMuRGVjb3JhdGUoXG4gICAgICAgICAgb3B0aW9ucy5kcm9wZG93bkFkYXB0ZXIsXG4gICAgICAgICAgRHJvcGRvd25DU1NcbiAgICAgICAgKTtcbiAgICAgIH1cblxuICAgICAgb3B0aW9ucy5kcm9wZG93bkFkYXB0ZXIgPSBVdGlscy5EZWNvcmF0ZShcbiAgICAgICAgb3B0aW9ucy5kcm9wZG93bkFkYXB0ZXIsXG4gICAgICAgIEF0dGFjaEJvZHlcbiAgICAgICk7XG4gICAgfVxuXG4gICAgaWYgKG9wdGlvbnMuc2VsZWN0aW9uQWRhcHRlciA9PSBudWxsKSB7XG4gICAgICBpZiAob3B0aW9ucy5tdWx0aXBsZSkge1xuICAgICAgICBvcHRpb25zLnNlbGVjdGlvbkFkYXB0ZXIgPSBNdWx0aXBsZVNlbGVjdGlvbjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG9wdGlvbnMuc2VsZWN0aW9uQWRhcHRlciA9IFNpbmdsZVNlbGVjdGlvbjtcbiAgICAgIH1cblxuICAgICAgLy8gQWRkIHRoZSBwbGFjZWhvbGRlciBtaXhpbiBpZiBhIHBsYWNlaG9sZGVyIHdhcyBzcGVjaWZpZWRcbiAgICAgIGlmIChvcHRpb25zLnBsYWNlaG9sZGVyICE9IG51bGwpIHtcbiAgICAgICAgb3B0aW9ucy5zZWxlY3Rpb25BZGFwdGVyID0gVXRpbHMuRGVjb3JhdGUoXG4gICAgICAgICAgb3B0aW9ucy5zZWxlY3Rpb25BZGFwdGVyLFxuICAgICAgICAgIFBsYWNlaG9sZGVyXG4gICAgICAgICk7XG4gICAgICB9XG5cbiAgICAgIGlmIChvcHRpb25zLmFsbG93Q2xlYXIpIHtcbiAgICAgICAgb3B0aW9ucy5zZWxlY3Rpb25BZGFwdGVyID0gVXRpbHMuRGVjb3JhdGUoXG4gICAgICAgICAgb3B0aW9ucy5zZWxlY3Rpb25BZGFwdGVyLFxuICAgICAgICAgIEFsbG93Q2xlYXJcbiAgICAgICAgKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG9wdGlvbnMubXVsdGlwbGUpIHtcbiAgICAgICAgb3B0aW9ucy5zZWxlY3Rpb25BZGFwdGVyID0gVXRpbHMuRGVjb3JhdGUoXG4gICAgICAgICAgb3B0aW9ucy5zZWxlY3Rpb25BZGFwdGVyLFxuICAgICAgICAgIFNlbGVjdGlvblNlYXJjaFxuICAgICAgICApO1xuICAgICAgfVxuXG4gICAgICBpZiAoXG4gICAgICAgIG9wdGlvbnMuY29udGFpbmVyQ3NzQ2xhc3MgIT0gbnVsbCB8fFxuICAgICAgICBvcHRpb25zLmNvbnRhaW5lckNzcyAhPSBudWxsIHx8XG4gICAgICAgIG9wdGlvbnMuYWRhcHRDb250YWluZXJDc3NDbGFzcyAhPSBudWxsXG4gICAgICApIHtcbiAgICAgICAgdmFyIENvbnRhaW5lckNTUyA9IHJlcXVpcmUob3B0aW9ucy5hbWRCYXNlICsgJ2NvbXBhdC9jb250YWluZXJDc3MnKTtcblxuICAgICAgICBvcHRpb25zLnNlbGVjdGlvbkFkYXB0ZXIgPSBVdGlscy5EZWNvcmF0ZShcbiAgICAgICAgICBvcHRpb25zLnNlbGVjdGlvbkFkYXB0ZXIsXG4gICAgICAgICAgQ29udGFpbmVyQ1NTXG4gICAgICAgICk7XG4gICAgICB9XG5cbiAgICAgIG9wdGlvbnMuc2VsZWN0aW9uQWRhcHRlciA9IFV0aWxzLkRlY29yYXRlKFxuICAgICAgICBvcHRpb25zLnNlbGVjdGlvbkFkYXB0ZXIsXG4gICAgICAgIEV2ZW50UmVsYXlcbiAgICAgICk7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBvcHRpb25zLmxhbmd1YWdlID09PSAnc3RyaW5nJykge1xuICAgICAgLy8gQ2hlY2sgaWYgdGhlIGxhbmd1YWdlIGlzIHNwZWNpZmllZCB3aXRoIGEgcmVnaW9uXG4gICAgICBpZiAob3B0aW9ucy5sYW5ndWFnZS5pbmRleE9mKCctJykgPiAwKSB7XG4gICAgICAgIC8vIEV4dHJhY3QgdGhlIHJlZ2lvbiBpbmZvcm1hdGlvbiBpZiBpdCBpcyBpbmNsdWRlZFxuICAgICAgICB2YXIgbGFuZ3VhZ2VQYXJ0cyA9IG9wdGlvbnMubGFuZ3VhZ2Uuc3BsaXQoJy0nKTtcbiAgICAgICAgdmFyIGJhc2VMYW5ndWFnZSA9IGxhbmd1YWdlUGFydHNbMF07XG5cbiAgICAgICAgb3B0aW9ucy5sYW5ndWFnZSA9IFtvcHRpb25zLmxhbmd1YWdlLCBiYXNlTGFuZ3VhZ2VdO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgb3B0aW9ucy5sYW5ndWFnZSA9IFtvcHRpb25zLmxhbmd1YWdlXTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoJC5pc0FycmF5KG9wdGlvbnMubGFuZ3VhZ2UpKSB7XG4gICAgICB2YXIgbGFuZ3VhZ2VzID0gbmV3IFRyYW5zbGF0aW9uKCk7XG4gICAgICBvcHRpb25zLmxhbmd1YWdlLnB1c2goJ2VuJyk7XG5cbiAgICAgIHZhciBsYW5ndWFnZU5hbWVzID0gb3B0aW9ucy5sYW5ndWFnZTtcblxuICAgICAgZm9yICh2YXIgbCA9IDA7IGwgPCBsYW5ndWFnZU5hbWVzLmxlbmd0aDsgbCsrKSB7XG4gICAgICAgIHZhciBuYW1lID0gbGFuZ3VhZ2VOYW1lc1tsXTtcbiAgICAgICAgdmFyIGxhbmd1YWdlID0ge307XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUcnkgdG8gbG9hZCBpdCB3aXRoIHRoZSBvcmlnaW5hbCBuYW1lXG4gICAgICAgICAgbGFuZ3VhZ2UgPSBUcmFuc2xhdGlvbi5sb2FkUGF0aChuYW1lKTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBJZiB3ZSBjb3VsZG4ndCBsb2FkIGl0LCBjaGVjayBpZiBpdCB3YXNuJ3QgdGhlIGZ1bGwgcGF0aFxuICAgICAgICAgICAgbmFtZSA9IHRoaXMuZGVmYXVsdHMuYW1kTGFuZ3VhZ2VCYXNlICsgbmFtZTtcbiAgICAgICAgICAgIGxhbmd1YWdlID0gVHJhbnNsYXRpb24ubG9hZFBhdGgobmFtZSk7XG4gICAgICAgICAgfSBjYXRjaCAoZXgpIHtcbiAgICAgICAgICAgIC8vIFRoZSB0cmFuc2xhdGlvbiBjb3VsZCBub3QgYmUgbG9hZGVkIGF0IGFsbC4gU29tZXRpbWVzIHRoaXMgaXNcbiAgICAgICAgICAgIC8vIGJlY2F1c2Ugb2YgYSBjb25maWd1cmF0aW9uIHByb2JsZW0sIG90aGVyIHRpbWVzIHRoaXMgY2FuIGJlXG4gICAgICAgICAgICAvLyBiZWNhdXNlIG9mIGhvdyBTZWxlY3QyIGhlbHBzIGxvYWQgYWxsIHBvc3NpYmxlIHRyYW5zbGF0aW9uIGZpbGVzLlxuICAgICAgICAgICAgaWYgKG9wdGlvbnMuZGVidWcgJiYgd2luZG93LmNvbnNvbGUgJiYgY29uc29sZS53YXJuKSB7XG4gICAgICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgICAgICAnU2VsZWN0MjogVGhlIGxhbmd1YWdlIGZpbGUgZm9yIFwiJyArIG5hbWUgKyAnXCIgY291bGQgbm90IGJlICcgK1xuICAgICAgICAgICAgICAgICdhdXRvbWF0aWNhbGx5IGxvYWRlZC4gQSBmYWxsYmFjayB3aWxsIGJlIHVzZWQgaW5zdGVhZC4nXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGxhbmd1YWdlcy5leHRlbmQobGFuZ3VhZ2UpO1xuICAgICAgfVxuXG4gICAgICBvcHRpb25zLnRyYW5zbGF0aW9ucyA9IGxhbmd1YWdlcztcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIGJhc2VUcmFuc2xhdGlvbiA9IFRyYW5zbGF0aW9uLmxvYWRQYXRoKFxuICAgICAgICB0aGlzLmRlZmF1bHRzLmFtZExhbmd1YWdlQmFzZSArICdlbidcbiAgICAgICk7XG4gICAgICB2YXIgY3VzdG9tVHJhbnNsYXRpb24gPSBuZXcgVHJhbnNsYXRpb24ob3B0aW9ucy5sYW5ndWFnZSk7XG5cbiAgICAgIGN1c3RvbVRyYW5zbGF0aW9uLmV4dGVuZChiYXNlVHJhbnNsYXRpb24pO1xuXG4gICAgICBvcHRpb25zLnRyYW5zbGF0aW9ucyA9IGN1c3RvbVRyYW5zbGF0aW9uO1xuICAgIH1cblxuICAgIHJldHVybiBvcHRpb25zO1xuICB9O1xuXG4gIERlZmF1bHRzLnByb3RvdHlwZS5yZXNldCA9IGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBzdHJpcERpYWNyaXRpY3MgKHRleHQpIHtcbiAgICAgIC8vIFVzZWQgJ3VuaSByYW5nZSArIG5hbWVkIGZ1bmN0aW9uJyBmcm9tIGh0dHA6Ly9qc3BlcmYuY29tL2RpYWNyaXRpY3MvMThcbiAgICAgIGZ1bmN0aW9uIG1hdGNoKGEpIHtcbiAgICAgICAgcmV0dXJuIERJQUNSSVRJQ1NbYV0gfHwgYTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRleHQucmVwbGFjZSgvW15cXHUwMDAwLVxcdTAwN0VdL2csIG1hdGNoKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBtYXRjaGVyIChwYXJhbXMsIGRhdGEpIHtcbiAgICAgIC8vIEFsd2F5cyByZXR1cm4gdGhlIG9iamVjdCBpZiB0aGVyZSBpcyBub3RoaW5nIHRvIGNvbXBhcmVcbiAgICAgIGlmICgkLnRyaW0ocGFyYW1zLnRlcm0pID09PSAnJykge1xuICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgIH1cblxuICAgICAgLy8gRG8gYSByZWN1cnNpdmUgY2hlY2sgZm9yIG9wdGlvbnMgd2l0aCBjaGlsZHJlblxuICAgICAgaWYgKGRhdGEuY2hpbGRyZW4gJiYgZGF0YS5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XG4gICAgICAgIC8vIENsb25lIHRoZSBkYXRhIG9iamVjdCBpZiB0aGVyZSBhcmUgY2hpbGRyZW5cbiAgICAgICAgLy8gVGhpcyBpcyByZXF1aXJlZCBhcyB3ZSBtb2RpZnkgdGhlIG9iamVjdCB0byByZW1vdmUgYW55IG5vbi1tYXRjaGVzXG4gICAgICAgIHZhciBtYXRjaCA9ICQuZXh0ZW5kKHRydWUsIHt9LCBkYXRhKTtcblxuICAgICAgICAvLyBDaGVjayBlYWNoIGNoaWxkIG9mIHRoZSBvcHRpb25cbiAgICAgICAgZm9yICh2YXIgYyA9IGRhdGEuY2hpbGRyZW4ubGVuZ3RoIC0gMTsgYyA+PSAwOyBjLS0pIHtcbiAgICAgICAgICB2YXIgY2hpbGQgPSBkYXRhLmNoaWxkcmVuW2NdO1xuXG4gICAgICAgICAgdmFyIG1hdGNoZXMgPSBtYXRjaGVyKHBhcmFtcywgY2hpbGQpO1xuXG4gICAgICAgICAgLy8gSWYgdGhlcmUgd2Fzbid0IGEgbWF0Y2gsIHJlbW92ZSB0aGUgb2JqZWN0IGluIHRoZSBhcnJheVxuICAgICAgICAgIGlmIChtYXRjaGVzID09IG51bGwpIHtcbiAgICAgICAgICAgIG1hdGNoLmNoaWxkcmVuLnNwbGljZShjLCAxKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJZiBhbnkgY2hpbGRyZW4gbWF0Y2hlZCwgcmV0dXJuIHRoZSBuZXcgb2JqZWN0XG4gICAgICAgIGlmIChtYXRjaC5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgcmV0dXJuIG1hdGNoO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSWYgdGhlcmUgd2VyZSBubyBtYXRjaGluZyBjaGlsZHJlbiwgY2hlY2sganVzdCB0aGUgcGxhaW4gb2JqZWN0XG4gICAgICAgIHJldHVybiBtYXRjaGVyKHBhcmFtcywgbWF0Y2gpO1xuICAgICAgfVxuXG4gICAgICB2YXIgb3JpZ2luYWwgPSBzdHJpcERpYWNyaXRpY3MoZGF0YS50ZXh0KS50b1VwcGVyQ2FzZSgpO1xuICAgICAgdmFyIHRlcm0gPSBzdHJpcERpYWNyaXRpY3MocGFyYW1zLnRlcm0pLnRvVXBwZXJDYXNlKCk7XG5cbiAgICAgIC8vIENoZWNrIGlmIHRoZSB0ZXh0IGNvbnRhaW5zIHRoZSB0ZXJtXG4gICAgICBpZiAob3JpZ2luYWwuaW5kZXhPZih0ZXJtKSA+IC0xKSB7XG4gICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgfVxuXG4gICAgICAvLyBJZiBpdCBkb2Vzbid0IGNvbnRhaW4gdGhlIHRlcm0sIGRvbid0IHJldHVybiBhbnl0aGluZ1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgdGhpcy5kZWZhdWx0cyA9IHtcbiAgICAgIGFtZEJhc2U6ICcuLycsXG4gICAgICBhbWRMYW5ndWFnZUJhc2U6ICcuL2kxOG4vJyxcbiAgICAgIGNsb3NlT25TZWxlY3Q6IHRydWUsXG4gICAgICBkZWJ1ZzogZmFsc2UsXG4gICAgICBkcm9wZG93bkF1dG9XaWR0aDogZmFsc2UsXG4gICAgICBlc2NhcGVNYXJrdXA6IFV0aWxzLmVzY2FwZU1hcmt1cCxcbiAgICAgIGxhbmd1YWdlOiBFbmdsaXNoVHJhbnNsYXRpb24sXG4gICAgICBtYXRjaGVyOiBtYXRjaGVyLFxuICAgICAgbWluaW11bUlucHV0TGVuZ3RoOiAwLFxuICAgICAgbWF4aW11bUlucHV0TGVuZ3RoOiAwLFxuICAgICAgbWF4aW11bVNlbGVjdGlvbkxlbmd0aDogMCxcbiAgICAgIG1pbmltdW1SZXN1bHRzRm9yU2VhcmNoOiAwLFxuICAgICAgc2VsZWN0T25DbG9zZTogZmFsc2UsXG4gICAgICBzb3J0ZXI6IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgfSxcbiAgICAgIHRlbXBsYXRlUmVzdWx0OiBmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgIHJldHVybiByZXN1bHQudGV4dDtcbiAgICAgIH0sXG4gICAgICB0ZW1wbGF0ZVNlbGVjdGlvbjogZnVuY3Rpb24gKHNlbGVjdGlvbikge1xuICAgICAgICByZXR1cm4gc2VsZWN0aW9uLnRleHQ7XG4gICAgICB9LFxuICAgICAgdGhlbWU6ICdkZWZhdWx0JyxcbiAgICAgIHdpZHRoOiAncmVzb2x2ZSdcbiAgICB9O1xuICB9O1xuXG4gIERlZmF1bHRzLnByb3RvdHlwZS5zZXQgPSBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICAgIHZhciBjYW1lbEtleSA9ICQuY2FtZWxDYXNlKGtleSk7XG5cbiAgICB2YXIgZGF0YSA9IHt9O1xuICAgIGRhdGFbY2FtZWxLZXldID0gdmFsdWU7XG5cbiAgICB2YXIgY29udmVydGVkRGF0YSA9IFV0aWxzLl9jb252ZXJ0RGF0YShkYXRhKTtcblxuICAgICQuZXh0ZW5kKHRydWUsIHRoaXMuZGVmYXVsdHMsIGNvbnZlcnRlZERhdGEpO1xuICB9O1xuXG4gIHZhciBkZWZhdWx0cyA9IG5ldyBEZWZhdWx0cygpO1xuXG4gIHJldHVybiBkZWZhdWx0cztcbn0pO1xuXG5TMi5kZWZpbmUoJ3NlbGVjdDIvb3B0aW9ucycsW1xuICAncmVxdWlyZScsXG4gICdqcXVlcnknLFxuICAnLi9kZWZhdWx0cycsXG4gICcuL3V0aWxzJ1xuXSwgZnVuY3Rpb24gKHJlcXVpcmUsICQsIERlZmF1bHRzLCBVdGlscykge1xuICBmdW5jdGlvbiBPcHRpb25zIChvcHRpb25zLCAkZWxlbWVudCkge1xuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG5cbiAgICBpZiAoJGVsZW1lbnQgIT0gbnVsbCkge1xuICAgICAgdGhpcy5mcm9tRWxlbWVudCgkZWxlbWVudCk7XG4gICAgfVxuXG4gICAgdGhpcy5vcHRpb25zID0gRGVmYXVsdHMuYXBwbHkodGhpcy5vcHRpb25zKTtcblxuICAgIGlmICgkZWxlbWVudCAmJiAkZWxlbWVudC5pcygnaW5wdXQnKSkge1xuICAgICAgdmFyIElucHV0Q29tcGF0ID0gcmVxdWlyZSh0aGlzLmdldCgnYW1kQmFzZScpICsgJ2NvbXBhdC9pbnB1dERhdGEnKTtcblxuICAgICAgdGhpcy5vcHRpb25zLmRhdGFBZGFwdGVyID0gVXRpbHMuRGVjb3JhdGUoXG4gICAgICAgIHRoaXMub3B0aW9ucy5kYXRhQWRhcHRlcixcbiAgICAgICAgSW5wdXRDb21wYXRcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgT3B0aW9ucy5wcm90b3R5cGUuZnJvbUVsZW1lbnQgPSBmdW5jdGlvbiAoJGUpIHtcbiAgICB2YXIgZXhjbHVkZWREYXRhID0gWydzZWxlY3QyJ107XG5cbiAgICBpZiAodGhpcy5vcHRpb25zLm11bHRpcGxlID09IG51bGwpIHtcbiAgICAgIHRoaXMub3B0aW9ucy5tdWx0aXBsZSA9ICRlLnByb3AoJ211bHRpcGxlJyk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMub3B0aW9ucy5kaXNhYmxlZCA9PSBudWxsKSB7XG4gICAgICB0aGlzLm9wdGlvbnMuZGlzYWJsZWQgPSAkZS5wcm9wKCdkaXNhYmxlZCcpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLm9wdGlvbnMubGFuZ3VhZ2UgPT0gbnVsbCkge1xuICAgICAgaWYgKCRlLnByb3AoJ2xhbmcnKSkge1xuICAgICAgICB0aGlzLm9wdGlvbnMubGFuZ3VhZ2UgPSAkZS5wcm9wKCdsYW5nJykudG9Mb3dlckNhc2UoKTtcbiAgICAgIH0gZWxzZSBpZiAoJGUuY2xvc2VzdCgnW2xhbmddJykucHJvcCgnbGFuZycpKSB7XG4gICAgICAgIHRoaXMub3B0aW9ucy5sYW5ndWFnZSA9ICRlLmNsb3Nlc3QoJ1tsYW5nXScpLnByb3AoJ2xhbmcnKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodGhpcy5vcHRpb25zLmRpciA9PSBudWxsKSB7XG4gICAgICBpZiAoJGUucHJvcCgnZGlyJykpIHtcbiAgICAgICAgdGhpcy5vcHRpb25zLmRpciA9ICRlLnByb3AoJ2RpcicpO1xuICAgICAgfSBlbHNlIGlmICgkZS5jbG9zZXN0KCdbZGlyXScpLnByb3AoJ2RpcicpKSB7XG4gICAgICAgIHRoaXMub3B0aW9ucy5kaXIgPSAkZS5jbG9zZXN0KCdbZGlyXScpLnByb3AoJ2RpcicpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5vcHRpb25zLmRpciA9ICdsdHInO1xuICAgICAgfVxuICAgIH1cblxuICAgICRlLnByb3AoJ2Rpc2FibGVkJywgdGhpcy5vcHRpb25zLmRpc2FibGVkKTtcbiAgICAkZS5wcm9wKCdtdWx0aXBsZScsIHRoaXMub3B0aW9ucy5tdWx0aXBsZSk7XG5cbiAgICBpZiAoVXRpbHMuR2V0RGF0YSgkZVswXSwgJ3NlbGVjdDJUYWdzJykpIHtcbiAgICAgIGlmICh0aGlzLm9wdGlvbnMuZGVidWcgJiYgd2luZG93LmNvbnNvbGUgJiYgY29uc29sZS53YXJuKSB7XG4gICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAnU2VsZWN0MjogVGhlIGBkYXRhLXNlbGVjdDItdGFnc2AgYXR0cmlidXRlIGhhcyBiZWVuIGNoYW5nZWQgdG8gJyArXG4gICAgICAgICAgJ3VzZSB0aGUgYGRhdGEtZGF0YWAgYW5kIGBkYXRhLXRhZ3M9XCJ0cnVlXCJgIGF0dHJpYnV0ZXMgYW5kIHdpbGwgYmUgJyArXG4gICAgICAgICAgJ3JlbW92ZWQgaW4gZnV0dXJlIHZlcnNpb25zIG9mIFNlbGVjdDIuJ1xuICAgICAgICApO1xuICAgICAgfVxuXG4gICAgICBVdGlscy5TdG9yZURhdGEoJGVbMF0sICdkYXRhJywgVXRpbHMuR2V0RGF0YSgkZVswXSwgJ3NlbGVjdDJUYWdzJykpO1xuICAgICAgVXRpbHMuU3RvcmVEYXRhKCRlWzBdLCAndGFncycsIHRydWUpO1xuICAgIH1cblxuICAgIGlmIChVdGlscy5HZXREYXRhKCRlWzBdLCAnYWpheFVybCcpKSB7XG4gICAgICBpZiAodGhpcy5vcHRpb25zLmRlYnVnICYmIHdpbmRvdy5jb25zb2xlICYmIGNvbnNvbGUud2Fybikge1xuICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgJ1NlbGVjdDI6IFRoZSBgZGF0YS1hamF4LXVybGAgYXR0cmlidXRlIGhhcyBiZWVuIGNoYW5nZWQgdG8gJyArXG4gICAgICAgICAgJ2BkYXRhLWFqYXgtLXVybGAgYW5kIHN1cHBvcnQgZm9yIHRoZSBvbGQgYXR0cmlidXRlIHdpbGwgYmUgcmVtb3ZlZCcgK1xuICAgICAgICAgICcgaW4gZnV0dXJlIHZlcnNpb25zIG9mIFNlbGVjdDIuJ1xuICAgICAgICApO1xuICAgICAgfVxuXG4gICAgICAkZS5hdHRyKCdhamF4LS11cmwnLCBVdGlscy5HZXREYXRhKCRlWzBdLCAnYWpheFVybCcpKTtcbiAgICAgIFV0aWxzLlN0b3JlRGF0YSgkZVswXSwgJ2FqYXgtVXJsJywgVXRpbHMuR2V0RGF0YSgkZVswXSwgJ2FqYXhVcmwnKSk7XG5cdCAgXG4gICAgfVxuXG4gICAgdmFyIGRhdGFzZXQgPSB7fTtcblxuICAgIC8vIFByZWZlciB0aGUgZWxlbWVudCdzIGBkYXRhc2V0YCBhdHRyaWJ1dGUgaWYgaXQgZXhpc3RzXG4gICAgLy8galF1ZXJ5IDEueCBkb2VzIG5vdCBjb3JyZWN0bHkgaGFuZGxlIGRhdGEgYXR0cmlidXRlcyB3aXRoIG11bHRpcGxlIGRhc2hlc1xuICAgIGlmICgkLmZuLmpxdWVyeSAmJiAkLmZuLmpxdWVyeS5zdWJzdHIoMCwgMikgPT0gJzEuJyAmJiAkZVswXS5kYXRhc2V0KSB7XG4gICAgICBkYXRhc2V0ID0gJC5leHRlbmQodHJ1ZSwge30sICRlWzBdLmRhdGFzZXQsIFV0aWxzLkdldERhdGEoJGVbMF0pKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZGF0YXNldCA9IFV0aWxzLkdldERhdGEoJGVbMF0pO1xuICAgIH1cblxuICAgIHZhciBkYXRhID0gJC5leHRlbmQodHJ1ZSwge30sIGRhdGFzZXQpO1xuXG4gICAgZGF0YSA9IFV0aWxzLl9jb252ZXJ0RGF0YShkYXRhKTtcblxuICAgIGZvciAodmFyIGtleSBpbiBkYXRhKSB7XG4gICAgICBpZiAoJC5pbkFycmF5KGtleSwgZXhjbHVkZWREYXRhKSA+IC0xKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAoJC5pc1BsYWluT2JqZWN0KHRoaXMub3B0aW9uc1trZXldKSkge1xuICAgICAgICAkLmV4dGVuZCh0aGlzLm9wdGlvbnNba2V5XSwgZGF0YVtrZXldKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMub3B0aW9uc1trZXldID0gZGF0YVtrZXldO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIE9wdGlvbnMucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgICByZXR1cm4gdGhpcy5vcHRpb25zW2tleV07XG4gIH07XG5cbiAgT3B0aW9ucy5wcm90b3R5cGUuc2V0ID0gZnVuY3Rpb24gKGtleSwgdmFsKSB7XG4gICAgdGhpcy5vcHRpb25zW2tleV0gPSB2YWw7XG4gIH07XG5cbiAgcmV0dXJuIE9wdGlvbnM7XG59KTtcblxuUzIuZGVmaW5lKCdzZWxlY3QyL2NvcmUnLFtcbiAgJ2pxdWVyeScsXG4gICcuL29wdGlvbnMnLFxuICAnLi91dGlscycsXG4gICcuL2tleXMnXG5dLCBmdW5jdGlvbiAoJCwgT3B0aW9ucywgVXRpbHMsIEtFWVMpIHtcbiAgdmFyIFNlbGVjdDIgPSBmdW5jdGlvbiAoJGVsZW1lbnQsIG9wdGlvbnMpIHtcbiAgICBpZiAoVXRpbHMuR2V0RGF0YSgkZWxlbWVudFswXSwgJ3NlbGVjdDInKSAhPSBudWxsKSB7XG4gICAgICBVdGlscy5HZXREYXRhKCRlbGVtZW50WzBdLCAnc2VsZWN0MicpLmRlc3Ryb3koKTtcbiAgICB9XG5cbiAgICB0aGlzLiRlbGVtZW50ID0gJGVsZW1lbnQ7XG5cbiAgICB0aGlzLmlkID0gdGhpcy5fZ2VuZXJhdGVJZCgkZWxlbWVudCk7XG5cbiAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuICAgIHRoaXMub3B0aW9ucyA9IG5ldyBPcHRpb25zKG9wdGlvbnMsICRlbGVtZW50KTtcblxuICAgIFNlbGVjdDIuX19zdXBlcl9fLmNvbnN0cnVjdG9yLmNhbGwodGhpcyk7XG5cbiAgICAvLyBTZXQgdXAgdGhlIHRhYmluZGV4XG5cbiAgICB2YXIgdGFiaW5kZXggPSAkZWxlbWVudC5hdHRyKCd0YWJpbmRleCcpIHx8IDA7XG4gICAgVXRpbHMuU3RvcmVEYXRhKCRlbGVtZW50WzBdLCAnb2xkLXRhYmluZGV4JywgdGFiaW5kZXgpO1xuICAgICRlbGVtZW50LmF0dHIoJ3RhYmluZGV4JywgJy0xJyk7XG5cbiAgICAvLyBTZXQgdXAgY29udGFpbmVycyBhbmQgYWRhcHRlcnNcblxuICAgIHZhciBEYXRhQWRhcHRlciA9IHRoaXMub3B0aW9ucy5nZXQoJ2RhdGFBZGFwdGVyJyk7XG4gICAgdGhpcy5kYXRhQWRhcHRlciA9IG5ldyBEYXRhQWRhcHRlcigkZWxlbWVudCwgdGhpcy5vcHRpb25zKTtcblxuICAgIHZhciAkY29udGFpbmVyID0gdGhpcy5yZW5kZXIoKTtcblxuICAgIHRoaXMuX3BsYWNlQ29udGFpbmVyKCRjb250YWluZXIpO1xuXG4gICAgdmFyIFNlbGVjdGlvbkFkYXB0ZXIgPSB0aGlzLm9wdGlvbnMuZ2V0KCdzZWxlY3Rpb25BZGFwdGVyJyk7XG4gICAgdGhpcy5zZWxlY3Rpb24gPSBuZXcgU2VsZWN0aW9uQWRhcHRlcigkZWxlbWVudCwgdGhpcy5vcHRpb25zKTtcbiAgICB0aGlzLiRzZWxlY3Rpb24gPSB0aGlzLnNlbGVjdGlvbi5yZW5kZXIoKTtcblxuICAgIHRoaXMuc2VsZWN0aW9uLnBvc2l0aW9uKHRoaXMuJHNlbGVjdGlvbiwgJGNvbnRhaW5lcik7XG5cbiAgICB2YXIgRHJvcGRvd25BZGFwdGVyID0gdGhpcy5vcHRpb25zLmdldCgnZHJvcGRvd25BZGFwdGVyJyk7XG4gICAgdGhpcy5kcm9wZG93biA9IG5ldyBEcm9wZG93bkFkYXB0ZXIoJGVsZW1lbnQsIHRoaXMub3B0aW9ucyk7XG4gICAgdGhpcy4kZHJvcGRvd24gPSB0aGlzLmRyb3Bkb3duLnJlbmRlcigpO1xuXG4gICAgdGhpcy5kcm9wZG93bi5wb3NpdGlvbih0aGlzLiRkcm9wZG93biwgJGNvbnRhaW5lcik7XG5cbiAgICB2YXIgUmVzdWx0c0FkYXB0ZXIgPSB0aGlzLm9wdGlvbnMuZ2V0KCdyZXN1bHRzQWRhcHRlcicpO1xuICAgIHRoaXMucmVzdWx0cyA9IG5ldyBSZXN1bHRzQWRhcHRlcigkZWxlbWVudCwgdGhpcy5vcHRpb25zLCB0aGlzLmRhdGFBZGFwdGVyKTtcbiAgICB0aGlzLiRyZXN1bHRzID0gdGhpcy5yZXN1bHRzLnJlbmRlcigpO1xuXG4gICAgdGhpcy5yZXN1bHRzLnBvc2l0aW9uKHRoaXMuJHJlc3VsdHMsIHRoaXMuJGRyb3Bkb3duKTtcblxuICAgIC8vIEJpbmQgZXZlbnRzXG5cbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAvLyBCaW5kIHRoZSBjb250YWluZXIgdG8gYWxsIG9mIHRoZSBhZGFwdGVyc1xuICAgIHRoaXMuX2JpbmRBZGFwdGVycygpO1xuXG4gICAgLy8gUmVnaXN0ZXIgYW55IERPTSBldmVudCBoYW5kbGVyc1xuICAgIHRoaXMuX3JlZ2lzdGVyRG9tRXZlbnRzKCk7XG5cbiAgICAvLyBSZWdpc3RlciBhbnkgaW50ZXJuYWwgZXZlbnQgaGFuZGxlcnNcbiAgICB0aGlzLl9yZWdpc3RlckRhdGFFdmVudHMoKTtcbiAgICB0aGlzLl9yZWdpc3RlclNlbGVjdGlvbkV2ZW50cygpO1xuICAgIHRoaXMuX3JlZ2lzdGVyRHJvcGRvd25FdmVudHMoKTtcbiAgICB0aGlzLl9yZWdpc3RlclJlc3VsdHNFdmVudHMoKTtcbiAgICB0aGlzLl9yZWdpc3RlckV2ZW50cygpO1xuXG4gICAgLy8gU2V0IHRoZSBpbml0aWFsIHN0YXRlXG4gICAgdGhpcy5kYXRhQWRhcHRlci5jdXJyZW50KGZ1bmN0aW9uIChpbml0aWFsRGF0YSkge1xuICAgICAgc2VsZi50cmlnZ2VyKCdzZWxlY3Rpb246dXBkYXRlJywge1xuICAgICAgICBkYXRhOiBpbml0aWFsRGF0YVxuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICAvLyBIaWRlIHRoZSBvcmlnaW5hbCBzZWxlY3RcbiAgICAkZWxlbWVudC5hZGRDbGFzcygnc2VsZWN0Mi1oaWRkZW4tYWNjZXNzaWJsZScpO1xuICAgICRlbGVtZW50LmF0dHIoJ2FyaWEtaGlkZGVuJywgJ3RydWUnKTtcblxuICAgIC8vIFN5bmNocm9uaXplIGFueSBtb25pdG9yZWQgYXR0cmlidXRlc1xuICAgIHRoaXMuX3N5bmNBdHRyaWJ1dGVzKCk7XG5cbiAgICBVdGlscy5TdG9yZURhdGEoJGVsZW1lbnRbMF0sICdzZWxlY3QyJywgdGhpcyk7XG5cbiAgICAvLyBFbnN1cmUgYmFja3dhcmRzIGNvbXBhdGliaWxpdHkgd2l0aCAkZWxlbWVudC5kYXRhKCdzZWxlY3QyJykuXG4gICAgJGVsZW1lbnQuZGF0YSgnc2VsZWN0MicsIHRoaXMpO1xuICB9O1xuXG4gIFV0aWxzLkV4dGVuZChTZWxlY3QyLCBVdGlscy5PYnNlcnZhYmxlKTtcblxuICBTZWxlY3QyLnByb3RvdHlwZS5fZ2VuZXJhdGVJZCA9IGZ1bmN0aW9uICgkZWxlbWVudCkge1xuICAgIHZhciBpZCA9ICcnO1xuXG4gICAgaWYgKCRlbGVtZW50LmF0dHIoJ2lkJykgIT0gbnVsbCkge1xuICAgICAgaWQgPSAkZWxlbWVudC5hdHRyKCdpZCcpO1xuICAgIH0gZWxzZSBpZiAoJGVsZW1lbnQuYXR0cignbmFtZScpICE9IG51bGwpIHtcbiAgICAgIGlkID0gJGVsZW1lbnQuYXR0cignbmFtZScpICsgJy0nICsgVXRpbHMuZ2VuZXJhdGVDaGFycygyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWQgPSBVdGlscy5nZW5lcmF0ZUNoYXJzKDQpO1xuICAgIH1cblxuICAgIGlkID0gaWQucmVwbGFjZSgvKDp8XFwufFxcW3xcXF18LCkvZywgJycpO1xuICAgIGlkID0gJ3NlbGVjdDItJyArIGlkO1xuXG4gICAgcmV0dXJuIGlkO1xuICB9O1xuXG4gIFNlbGVjdDIucHJvdG90eXBlLl9wbGFjZUNvbnRhaW5lciA9IGZ1bmN0aW9uICgkY29udGFpbmVyKSB7XG4gICAgJGNvbnRhaW5lci5pbnNlcnRBZnRlcih0aGlzLiRlbGVtZW50KTtcblxuICAgIHZhciB3aWR0aCA9IHRoaXMuX3Jlc29sdmVXaWR0aCh0aGlzLiRlbGVtZW50LCB0aGlzLm9wdGlvbnMuZ2V0KCd3aWR0aCcpKTtcblxuICAgIGlmICh3aWR0aCAhPSBudWxsKSB7XG4gICAgICAkY29udGFpbmVyLmNzcygnd2lkdGgnLCB3aWR0aCk7XG4gICAgfVxuICB9O1xuXG4gIFNlbGVjdDIucHJvdG90eXBlLl9yZXNvbHZlV2lkdGggPSBmdW5jdGlvbiAoJGVsZW1lbnQsIG1ldGhvZCkge1xuICAgIHZhciBXSURUSCA9IC9ed2lkdGg6KChbLStdPyhbMC05XSpcXC4pP1swLTldKykocHh8ZW18ZXh8JXxpbnxjbXxtbXxwdHxwYykpL2k7XG5cbiAgICBpZiAobWV0aG9kID09ICdyZXNvbHZlJykge1xuICAgICAgdmFyIHN0eWxlV2lkdGggPSB0aGlzLl9yZXNvbHZlV2lkdGgoJGVsZW1lbnQsICdzdHlsZScpO1xuXG4gICAgICBpZiAoc3R5bGVXaWR0aCAhPSBudWxsKSB7XG4gICAgICAgIHJldHVybiBzdHlsZVdpZHRoO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5fcmVzb2x2ZVdpZHRoKCRlbGVtZW50LCAnZWxlbWVudCcpO1xuICAgIH1cblxuICAgIGlmIChtZXRob2QgPT0gJ2VsZW1lbnQnKSB7XG4gICAgICB2YXIgZWxlbWVudFdpZHRoID0gJGVsZW1lbnQub3V0ZXJXaWR0aChmYWxzZSk7XG5cbiAgICAgIGlmIChlbGVtZW50V2lkdGggPD0gMCkge1xuICAgICAgICByZXR1cm4gJ2F1dG8nO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZWxlbWVudFdpZHRoICsgJ3B4JztcbiAgICB9XG5cbiAgICBpZiAobWV0aG9kID09ICdzdHlsZScpIHtcbiAgICAgIHZhciBzdHlsZSA9ICRlbGVtZW50LmF0dHIoJ3N0eWxlJyk7XG5cbiAgICAgIGlmICh0eXBlb2Yoc3R5bGUpICE9PSAnc3RyaW5nJykge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cblxuICAgICAgdmFyIGF0dHJzID0gc3R5bGUuc3BsaXQoJzsnKTtcblxuICAgICAgZm9yICh2YXIgaSA9IDAsIGwgPSBhdHRycy5sZW5ndGg7IGkgPCBsOyBpID0gaSArIDEpIHtcbiAgICAgICAgdmFyIGF0dHIgPSBhdHRyc1tpXS5yZXBsYWNlKC9cXHMvZywgJycpO1xuICAgICAgICB2YXIgbWF0Y2hlcyA9IGF0dHIubWF0Y2goV0lEVEgpO1xuXG4gICAgICAgIGlmIChtYXRjaGVzICE9PSBudWxsICYmIG1hdGNoZXMubGVuZ3RoID49IDEpIHtcbiAgICAgICAgICByZXR1cm4gbWF0Y2hlc1sxXTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWV0aG9kO1xuICB9O1xuXG4gIFNlbGVjdDIucHJvdG90eXBlLl9iaW5kQWRhcHRlcnMgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5kYXRhQWRhcHRlci5iaW5kKHRoaXMsIHRoaXMuJGNvbnRhaW5lcik7XG4gICAgdGhpcy5zZWxlY3Rpb24uYmluZCh0aGlzLCB0aGlzLiRjb250YWluZXIpO1xuXG4gICAgdGhpcy5kcm9wZG93bi5iaW5kKHRoaXMsIHRoaXMuJGNvbnRhaW5lcik7XG4gICAgdGhpcy5yZXN1bHRzLmJpbmQodGhpcywgdGhpcy4kY29udGFpbmVyKTtcbiAgfTtcblxuICBTZWxlY3QyLnByb3RvdHlwZS5fcmVnaXN0ZXJEb21FdmVudHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgdGhpcy4kZWxlbWVudC5vbignY2hhbmdlLnNlbGVjdDInLCBmdW5jdGlvbiAoKSB7XG4gICAgICBzZWxmLmRhdGFBZGFwdGVyLmN1cnJlbnQoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgc2VsZi50cmlnZ2VyKCdzZWxlY3Rpb246dXBkYXRlJywge1xuICAgICAgICAgIGRhdGE6IGRhdGFcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIHRoaXMuJGVsZW1lbnQub24oJ2ZvY3VzLnNlbGVjdDInLCBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICBzZWxmLnRyaWdnZXIoJ2ZvY3VzJywgZXZ0KTtcbiAgICB9KTtcblxuICAgIHRoaXMuX3N5bmNBID0gVXRpbHMuYmluZCh0aGlzLl9zeW5jQXR0cmlidXRlcywgdGhpcyk7XG4gICAgdGhpcy5fc3luY1MgPSBVdGlscy5iaW5kKHRoaXMuX3N5bmNTdWJ0cmVlLCB0aGlzKTtcblxuICAgIGlmICh0aGlzLiRlbGVtZW50WzBdLmF0dGFjaEV2ZW50KSB7XG4gICAgICB0aGlzLiRlbGVtZW50WzBdLmF0dGFjaEV2ZW50KCdvbnByb3BlcnR5Y2hhbmdlJywgdGhpcy5fc3luY0EpO1xuICAgIH1cblxuICAgIHZhciBvYnNlcnZlciA9IHdpbmRvdy5NdXRhdGlvbk9ic2VydmVyIHx8XG4gICAgICB3aW5kb3cuV2ViS2l0TXV0YXRpb25PYnNlcnZlciB8fFxuICAgICAgd2luZG93Lk1vek11dGF0aW9uT2JzZXJ2ZXJcbiAgICA7XG5cbiAgICBpZiAob2JzZXJ2ZXIgIT0gbnVsbCkge1xuICAgICAgdGhpcy5fb2JzZXJ2ZXIgPSBuZXcgb2JzZXJ2ZXIoZnVuY3Rpb24gKG11dGF0aW9ucykge1xuICAgICAgICAkLmVhY2gobXV0YXRpb25zLCBzZWxmLl9zeW5jQSk7XG4gICAgICAgICQuZWFjaChtdXRhdGlvbnMsIHNlbGYuX3N5bmNTKTtcbiAgICAgIH0pO1xuICAgICAgdGhpcy5fb2JzZXJ2ZXIub2JzZXJ2ZSh0aGlzLiRlbGVtZW50WzBdLCB7XG4gICAgICAgIGF0dHJpYnV0ZXM6IHRydWUsXG4gICAgICAgIGNoaWxkTGlzdDogdHJ1ZSxcbiAgICAgICAgc3VidHJlZTogZmFsc2VcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAodGhpcy4kZWxlbWVudFswXS5hZGRFdmVudExpc3RlbmVyKSB7XG4gICAgICB0aGlzLiRlbGVtZW50WzBdLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgICdET01BdHRyTW9kaWZpZWQnLFxuICAgICAgICBzZWxmLl9zeW5jQSxcbiAgICAgICAgZmFsc2VcbiAgICAgICk7XG4gICAgICB0aGlzLiRlbGVtZW50WzBdLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgICdET01Ob2RlSW5zZXJ0ZWQnLFxuICAgICAgICBzZWxmLl9zeW5jUyxcbiAgICAgICAgZmFsc2VcbiAgICAgICk7XG4gICAgICB0aGlzLiRlbGVtZW50WzBdLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgICdET01Ob2RlUmVtb3ZlZCcsXG4gICAgICAgIHNlbGYuX3N5bmNTLFxuICAgICAgICBmYWxzZVxuICAgICAgKTtcbiAgICB9XG4gIH07XG5cbiAgU2VsZWN0Mi5wcm90b3R5cGUuX3JlZ2lzdGVyRGF0YUV2ZW50cyA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICB0aGlzLmRhdGFBZGFwdGVyLm9uKCcqJywgZnVuY3Rpb24gKG5hbWUsIHBhcmFtcykge1xuICAgICAgc2VsZi50cmlnZ2VyKG5hbWUsIHBhcmFtcyk7XG4gICAgfSk7XG4gIH07XG5cbiAgU2VsZWN0Mi5wcm90b3R5cGUuX3JlZ2lzdGVyU2VsZWN0aW9uRXZlbnRzID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICB2YXIgbm9uUmVsYXlFdmVudHMgPSBbJ3RvZ2dsZScsICdmb2N1cyddO1xuXG4gICAgdGhpcy5zZWxlY3Rpb24ub24oJ3RvZ2dsZScsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHNlbGYudG9nZ2xlRHJvcGRvd24oKTtcbiAgICB9KTtcblxuICAgIHRoaXMuc2VsZWN0aW9uLm9uKCdmb2N1cycsIGZ1bmN0aW9uIChwYXJhbXMpIHtcbiAgICAgIHNlbGYuZm9jdXMocGFyYW1zKTtcbiAgICB9KTtcblxuICAgIHRoaXMuc2VsZWN0aW9uLm9uKCcqJywgZnVuY3Rpb24gKG5hbWUsIHBhcmFtcykge1xuICAgICAgaWYgKCQuaW5BcnJheShuYW1lLCBub25SZWxheUV2ZW50cykgIT09IC0xKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgc2VsZi50cmlnZ2VyKG5hbWUsIHBhcmFtcyk7XG4gICAgfSk7XG4gIH07XG5cbiAgU2VsZWN0Mi5wcm90b3R5cGUuX3JlZ2lzdGVyRHJvcGRvd25FdmVudHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgdGhpcy5kcm9wZG93bi5vbignKicsIGZ1bmN0aW9uIChuYW1lLCBwYXJhbXMpIHtcbiAgICAgIHNlbGYudHJpZ2dlcihuYW1lLCBwYXJhbXMpO1xuICAgIH0pO1xuICB9O1xuXG4gIFNlbGVjdDIucHJvdG90eXBlLl9yZWdpc3RlclJlc3VsdHNFdmVudHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgdGhpcy5yZXN1bHRzLm9uKCcqJywgZnVuY3Rpb24gKG5hbWUsIHBhcmFtcykge1xuICAgICAgc2VsZi50cmlnZ2VyKG5hbWUsIHBhcmFtcyk7XG4gICAgfSk7XG4gIH07XG5cbiAgU2VsZWN0Mi5wcm90b3R5cGUuX3JlZ2lzdGVyRXZlbnRzID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgIHRoaXMub24oJ29wZW4nLCBmdW5jdGlvbiAoKSB7XG4gICAgICBzZWxmLiRjb250YWluZXIuYWRkQ2xhc3MoJ3NlbGVjdDItY29udGFpbmVyLS1vcGVuJyk7XG4gICAgfSk7XG5cbiAgICB0aGlzLm9uKCdjbG9zZScsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHNlbGYuJGNvbnRhaW5lci5yZW1vdmVDbGFzcygnc2VsZWN0Mi1jb250YWluZXItLW9wZW4nKTtcbiAgICB9KTtcblxuICAgIHRoaXMub24oJ2VuYWJsZScsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHNlbGYuJGNvbnRhaW5lci5yZW1vdmVDbGFzcygnc2VsZWN0Mi1jb250YWluZXItLWRpc2FibGVkJyk7XG4gICAgfSk7XG5cbiAgICB0aGlzLm9uKCdkaXNhYmxlJywgZnVuY3Rpb24gKCkge1xuICAgICAgc2VsZi4kY29udGFpbmVyLmFkZENsYXNzKCdzZWxlY3QyLWNvbnRhaW5lci0tZGlzYWJsZWQnKTtcbiAgICB9KTtcblxuICAgIHRoaXMub24oJ2JsdXInLCBmdW5jdGlvbiAoKSB7XG4gICAgICBzZWxmLiRjb250YWluZXIucmVtb3ZlQ2xhc3MoJ3NlbGVjdDItY29udGFpbmVyLS1mb2N1cycpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5vbigncXVlcnknLCBmdW5jdGlvbiAocGFyYW1zKSB7XG4gICAgICBpZiAoIXNlbGYuaXNPcGVuKCkpIHtcbiAgICAgICAgc2VsZi50cmlnZ2VyKCdvcGVuJywge30pO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmRhdGFBZGFwdGVyLnF1ZXJ5KHBhcmFtcywgZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgc2VsZi50cmlnZ2VyKCdyZXN1bHRzOmFsbCcsIHtcbiAgICAgICAgICBkYXRhOiBkYXRhLFxuICAgICAgICAgIHF1ZXJ5OiBwYXJhbXNcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIHRoaXMub24oJ3F1ZXJ5OmFwcGVuZCcsIGZ1bmN0aW9uIChwYXJhbXMpIHtcbiAgICAgIHRoaXMuZGF0YUFkYXB0ZXIucXVlcnkocGFyYW1zLCBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICBzZWxmLnRyaWdnZXIoJ3Jlc3VsdHM6YXBwZW5kJywge1xuICAgICAgICAgIGRhdGE6IGRhdGEsXG4gICAgICAgICAgcXVlcnk6IHBhcmFtc1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgdGhpcy5vbigna2V5cHJlc3MnLCBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICB2YXIga2V5ID0gZXZ0LndoaWNoO1xuXG4gICAgICBpZiAoc2VsZi5pc09wZW4oKSkge1xuICAgICAgICBpZiAoa2V5ID09PSBLRVlTLkVTQyB8fCBrZXkgPT09IEtFWVMuVEFCIHx8XG4gICAgICAgICAgICAoa2V5ID09PSBLRVlTLlVQICYmIGV2dC5hbHRLZXkpKSB7XG4gICAgICAgICAgc2VsZi5jbG9zZSgpO1xuXG4gICAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH0gZWxzZSBpZiAoa2V5ID09PSBLRVlTLkVOVEVSKSB7XG4gICAgICAgICAgc2VsZi50cmlnZ2VyKCdyZXN1bHRzOnNlbGVjdCcsIHt9KTtcblxuICAgICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9IGVsc2UgaWYgKChrZXkgPT09IEtFWVMuU1BBQ0UgJiYgZXZ0LmN0cmxLZXkpKSB7XG4gICAgICAgICAgc2VsZi50cmlnZ2VyKCdyZXN1bHRzOnRvZ2dsZScsIHt9KTtcblxuICAgICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9IGVsc2UgaWYgKGtleSA9PT0gS0VZUy5VUCkge1xuICAgICAgICAgIHNlbGYudHJpZ2dlcigncmVzdWx0czpwcmV2aW91cycsIHt9KTtcblxuICAgICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9IGVsc2UgaWYgKGtleSA9PT0gS0VZUy5ET1dOKSB7XG4gICAgICAgICAgc2VsZi50cmlnZ2VyKCdyZXN1bHRzOm5leHQnLCB7fSk7XG5cbiAgICAgICAgICBldnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKGtleSA9PT0gS0VZUy5FTlRFUiB8fCBrZXkgPT09IEtFWVMuU1BBQ0UgfHxcbiAgICAgICAgICAgIChrZXkgPT09IEtFWVMuRE9XTiAmJiBldnQuYWx0S2V5KSkge1xuICAgICAgICAgIHNlbGYub3BlbigpO1xuXG4gICAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICBTZWxlY3QyLnByb3RvdHlwZS5fc3luY0F0dHJpYnV0ZXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5vcHRpb25zLnNldCgnZGlzYWJsZWQnLCB0aGlzLiRlbGVtZW50LnByb3AoJ2Rpc2FibGVkJykpO1xuXG4gICAgaWYgKHRoaXMub3B0aW9ucy5nZXQoJ2Rpc2FibGVkJykpIHtcbiAgICAgIGlmICh0aGlzLmlzT3BlbigpKSB7XG4gICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy50cmlnZ2VyKCdkaXNhYmxlJywge30pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnRyaWdnZXIoJ2VuYWJsZScsIHt9KTtcbiAgICB9XG4gIH07XG5cbiAgU2VsZWN0Mi5wcm90b3R5cGUuX3N5bmNTdWJ0cmVlID0gZnVuY3Rpb24gKGV2dCwgbXV0YXRpb25zKSB7XG4gICAgdmFyIGNoYW5nZWQgPSBmYWxzZTtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAvLyBJZ25vcmUgYW55IG11dGF0aW9uIGV2ZW50cyByYWlzZWQgZm9yIGVsZW1lbnRzIHRoYXQgYXJlbid0IG9wdGlvbnMgb3JcbiAgICAvLyBvcHRncm91cHMuIFRoaXMgaGFuZGxlcyB0aGUgY2FzZSB3aGVuIHRoZSBzZWxlY3QgZWxlbWVudCBpcyBkZXN0cm95ZWRcbiAgICBpZiAoXG4gICAgICBldnQgJiYgZXZ0LnRhcmdldCAmJiAoXG4gICAgICAgIGV2dC50YXJnZXQubm9kZU5hbWUgIT09ICdPUFRJT04nICYmIGV2dC50YXJnZXQubm9kZU5hbWUgIT09ICdPUFRHUk9VUCdcbiAgICAgIClcbiAgICApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoIW11dGF0aW9ucykge1xuICAgICAgLy8gSWYgbXV0YXRpb24gZXZlbnRzIGFyZW4ndCBzdXBwb3J0ZWQsIHRoZW4gd2UgY2FuIG9ubHkgYXNzdW1lIHRoYXQgdGhlXG4gICAgICAvLyBjaGFuZ2UgYWZmZWN0ZWQgdGhlIHNlbGVjdGlvbnNcbiAgICAgIGNoYW5nZWQgPSB0cnVlO1xuICAgIH0gZWxzZSBpZiAobXV0YXRpb25zLmFkZGVkTm9kZXMgJiYgbXV0YXRpb25zLmFkZGVkTm9kZXMubGVuZ3RoID4gMCkge1xuICAgICAgZm9yICh2YXIgbiA9IDA7IG4gPCBtdXRhdGlvbnMuYWRkZWROb2Rlcy5sZW5ndGg7IG4rKykge1xuICAgICAgICB2YXIgbm9kZSA9IG11dGF0aW9ucy5hZGRlZE5vZGVzW25dO1xuXG4gICAgICAgIGlmIChub2RlLnNlbGVjdGVkKSB7XG4gICAgICAgICAgY2hhbmdlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKG11dGF0aW9ucy5yZW1vdmVkTm9kZXMgJiYgbXV0YXRpb25zLnJlbW92ZWROb2Rlcy5sZW5ndGggPiAwKSB7XG4gICAgICBjaGFuZ2VkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICAvLyBPbmx5IHJlLXB1bGwgdGhlIGRhdGEgaWYgd2UgdGhpbmsgdGhlcmUgaXMgYSBjaGFuZ2VcbiAgICBpZiAoY2hhbmdlZCkge1xuICAgICAgdGhpcy5kYXRhQWRhcHRlci5jdXJyZW50KGZ1bmN0aW9uIChjdXJyZW50RGF0YSkge1xuICAgICAgICBzZWxmLnRyaWdnZXIoJ3NlbGVjdGlvbjp1cGRhdGUnLCB7XG4gICAgICAgICAgZGF0YTogY3VycmVudERhdGFcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIE92ZXJyaWRlIHRoZSB0cmlnZ2VyIG1ldGhvZCB0byBhdXRvbWF0aWNhbGx5IHRyaWdnZXIgcHJlLWV2ZW50cyB3aGVuXG4gICAqIHRoZXJlIGFyZSBldmVudHMgdGhhdCBjYW4gYmUgcHJldmVudGVkLlxuICAgKi9cbiAgU2VsZWN0Mi5wcm90b3R5cGUudHJpZ2dlciA9IGZ1bmN0aW9uIChuYW1lLCBhcmdzKSB7XG4gICAgdmFyIGFjdHVhbFRyaWdnZXIgPSBTZWxlY3QyLl9fc3VwZXJfXy50cmlnZ2VyO1xuICAgIHZhciBwcmVUcmlnZ2VyTWFwID0ge1xuICAgICAgJ29wZW4nOiAnb3BlbmluZycsXG4gICAgICAnY2xvc2UnOiAnY2xvc2luZycsXG4gICAgICAnc2VsZWN0JzogJ3NlbGVjdGluZycsXG4gICAgICAndW5zZWxlY3QnOiAndW5zZWxlY3RpbmcnLFxuICAgICAgJ2NsZWFyJzogJ2NsZWFyaW5nJ1xuICAgIH07XG5cbiAgICBpZiAoYXJncyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBhcmdzID0ge307XG4gICAgfVxuXG4gICAgaWYgKG5hbWUgaW4gcHJlVHJpZ2dlck1hcCkge1xuICAgICAgdmFyIHByZVRyaWdnZXJOYW1lID0gcHJlVHJpZ2dlck1hcFtuYW1lXTtcbiAgICAgIHZhciBwcmVUcmlnZ2VyQXJncyA9IHtcbiAgICAgICAgcHJldmVudGVkOiBmYWxzZSxcbiAgICAgICAgbmFtZTogbmFtZSxcbiAgICAgICAgYXJnczogYXJnc1xuICAgICAgfTtcblxuICAgICAgYWN0dWFsVHJpZ2dlci5jYWxsKHRoaXMsIHByZVRyaWdnZXJOYW1lLCBwcmVUcmlnZ2VyQXJncyk7XG5cbiAgICAgIGlmIChwcmVUcmlnZ2VyQXJncy5wcmV2ZW50ZWQpIHtcbiAgICAgICAgYXJncy5wcmV2ZW50ZWQgPSB0cnVlO1xuXG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBhY3R1YWxUcmlnZ2VyLmNhbGwodGhpcywgbmFtZSwgYXJncyk7XG4gIH07XG5cbiAgU2VsZWN0Mi5wcm90b3R5cGUudG9nZ2xlRHJvcGRvd24gPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHRoaXMub3B0aW9ucy5nZXQoJ2Rpc2FibGVkJykpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5pc09wZW4oKSkge1xuICAgICAgdGhpcy5jbG9zZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm9wZW4oKTtcbiAgICB9XG4gIH07XG5cbiAgU2VsZWN0Mi5wcm90b3R5cGUub3BlbiA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodGhpcy5pc09wZW4oKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMudHJpZ2dlcigncXVlcnknLCB7fSk7XG4gIH07XG5cbiAgU2VsZWN0Mi5wcm90b3R5cGUuY2xvc2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCF0aGlzLmlzT3BlbigpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy50cmlnZ2VyKCdjbG9zZScsIHt9KTtcbiAgfTtcblxuICBTZWxlY3QyLnByb3RvdHlwZS5pc09wZW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXMuJGNvbnRhaW5lci5oYXNDbGFzcygnc2VsZWN0Mi1jb250YWluZXItLW9wZW4nKTtcbiAgfTtcblxuICBTZWxlY3QyLnByb3RvdHlwZS5oYXNGb2N1cyA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcy4kY29udGFpbmVyLmhhc0NsYXNzKCdzZWxlY3QyLWNvbnRhaW5lci0tZm9jdXMnKTtcbiAgfTtcblxuICBTZWxlY3QyLnByb3RvdHlwZS5mb2N1cyA9IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgLy8gTm8gbmVlZCB0byByZS10cmlnZ2VyIGZvY3VzIGV2ZW50cyBpZiB3ZSBhcmUgYWxyZWFkeSBmb2N1c2VkXG4gICAgaWYgKHRoaXMuaGFzRm9jdXMoKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuJGNvbnRhaW5lci5hZGRDbGFzcygnc2VsZWN0Mi1jb250YWluZXItLWZvY3VzJyk7XG4gICAgdGhpcy50cmlnZ2VyKCdmb2N1cycsIHt9KTtcbiAgfTtcblxuICBTZWxlY3QyLnByb3RvdHlwZS5lbmFibGUgPSBmdW5jdGlvbiAoYXJncykge1xuICAgIGlmICh0aGlzLm9wdGlvbnMuZ2V0KCdkZWJ1ZycpICYmIHdpbmRvdy5jb25zb2xlICYmIGNvbnNvbGUud2Fybikge1xuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAnU2VsZWN0MjogVGhlIGBzZWxlY3QyKFwiZW5hYmxlXCIpYCBtZXRob2QgaGFzIGJlZW4gZGVwcmVjYXRlZCBhbmQgd2lsbCcgK1xuICAgICAgICAnIGJlIHJlbW92ZWQgaW4gbGF0ZXIgU2VsZWN0MiB2ZXJzaW9ucy4gVXNlICRlbGVtZW50LnByb3AoXCJkaXNhYmxlZFwiKScgK1xuICAgICAgICAnIGluc3RlYWQuJ1xuICAgICAgKTtcbiAgICB9XG5cbiAgICBpZiAoYXJncyA9PSBudWxsIHx8IGFyZ3MubGVuZ3RoID09PSAwKSB7XG4gICAgICBhcmdzID0gW3RydWVdO1xuICAgIH1cblxuICAgIHZhciBkaXNhYmxlZCA9ICFhcmdzWzBdO1xuXG4gICAgdGhpcy4kZWxlbWVudC5wcm9wKCdkaXNhYmxlZCcsIGRpc2FibGVkKTtcbiAgfTtcblxuICBTZWxlY3QyLnByb3RvdHlwZS5kYXRhID0gZnVuY3Rpb24gKCkge1xuICAgIGlmICh0aGlzLm9wdGlvbnMuZ2V0KCdkZWJ1ZycpICYmXG4gICAgICAgIGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIHdpbmRvdy5jb25zb2xlICYmIGNvbnNvbGUud2Fybikge1xuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAnU2VsZWN0MjogRGF0YSBjYW4gbm8gbG9uZ2VyIGJlIHNldCB1c2luZyBgc2VsZWN0MihcImRhdGFcIilgLiBZb3UgJyArXG4gICAgICAgICdzaG91bGQgY29uc2lkZXIgc2V0dGluZyB0aGUgdmFsdWUgaW5zdGVhZCB1c2luZyBgJGVsZW1lbnQudmFsKClgLidcbiAgICAgICk7XG4gICAgfVxuXG4gICAgdmFyIGRhdGEgPSBbXTtcblxuICAgIHRoaXMuZGF0YUFkYXB0ZXIuY3VycmVudChmdW5jdGlvbiAoY3VycmVudERhdGEpIHtcbiAgICAgIGRhdGEgPSBjdXJyZW50RGF0YTtcbiAgICB9KTtcblxuICAgIHJldHVybiBkYXRhO1xuICB9O1xuXG4gIFNlbGVjdDIucHJvdG90eXBlLnZhbCA9IGZ1bmN0aW9uIChhcmdzKSB7XG4gICAgaWYgKHRoaXMub3B0aW9ucy5nZXQoJ2RlYnVnJykgJiYgd2luZG93LmNvbnNvbGUgJiYgY29uc29sZS53YXJuKSB7XG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICdTZWxlY3QyOiBUaGUgYHNlbGVjdDIoXCJ2YWxcIilgIG1ldGhvZCBoYXMgYmVlbiBkZXByZWNhdGVkIGFuZCB3aWxsIGJlJyArXG4gICAgICAgICcgcmVtb3ZlZCBpbiBsYXRlciBTZWxlY3QyIHZlcnNpb25zLiBVc2UgJGVsZW1lbnQudmFsKCkgaW5zdGVhZC4nXG4gICAgICApO1xuICAgIH1cblxuICAgIGlmIChhcmdzID09IG51bGwgfHwgYXJncy5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiB0aGlzLiRlbGVtZW50LnZhbCgpO1xuICAgIH1cblxuICAgIHZhciBuZXdWYWwgPSBhcmdzWzBdO1xuXG4gICAgaWYgKCQuaXNBcnJheShuZXdWYWwpKSB7XG4gICAgICBuZXdWYWwgPSAkLm1hcChuZXdWYWwsIGZ1bmN0aW9uIChvYmopIHtcbiAgICAgICAgcmV0dXJuIG9iai50b1N0cmluZygpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgdGhpcy4kZWxlbWVudC52YWwobmV3VmFsKS50cmlnZ2VyKCdjaGFuZ2UnKTtcbiAgfTtcblxuICBTZWxlY3QyLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuJGNvbnRhaW5lci5yZW1vdmUoKTtcblxuICAgIGlmICh0aGlzLiRlbGVtZW50WzBdLmRldGFjaEV2ZW50KSB7XG4gICAgICB0aGlzLiRlbGVtZW50WzBdLmRldGFjaEV2ZW50KCdvbnByb3BlcnR5Y2hhbmdlJywgdGhpcy5fc3luY0EpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLl9vYnNlcnZlciAhPSBudWxsKSB7XG4gICAgICB0aGlzLl9vYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gICAgICB0aGlzLl9vYnNlcnZlciA9IG51bGw7XG4gICAgfSBlbHNlIGlmICh0aGlzLiRlbGVtZW50WzBdLnJlbW92ZUV2ZW50TGlzdGVuZXIpIHtcbiAgICAgIHRoaXMuJGVsZW1lbnRbMF1cbiAgICAgICAgLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ0RPTUF0dHJNb2RpZmllZCcsIHRoaXMuX3N5bmNBLCBmYWxzZSk7XG4gICAgICB0aGlzLiRlbGVtZW50WzBdXG4gICAgICAgIC5yZW1vdmVFdmVudExpc3RlbmVyKCdET01Ob2RlSW5zZXJ0ZWQnLCB0aGlzLl9zeW5jUywgZmFsc2UpO1xuICAgICAgdGhpcy4kZWxlbWVudFswXVxuICAgICAgICAucmVtb3ZlRXZlbnRMaXN0ZW5lcignRE9NTm9kZVJlbW92ZWQnLCB0aGlzLl9zeW5jUywgZmFsc2UpO1xuICAgIH1cblxuICAgIHRoaXMuX3N5bmNBID0gbnVsbDtcbiAgICB0aGlzLl9zeW5jUyA9IG51bGw7XG5cbiAgICB0aGlzLiRlbGVtZW50Lm9mZignLnNlbGVjdDInKTtcbiAgICB0aGlzLiRlbGVtZW50LmF0dHIoJ3RhYmluZGV4JyxcbiAgICBVdGlscy5HZXREYXRhKHRoaXMuJGVsZW1lbnRbMF0sICdvbGQtdGFiaW5kZXgnKSk7XG5cbiAgICB0aGlzLiRlbGVtZW50LnJlbW92ZUNsYXNzKCdzZWxlY3QyLWhpZGRlbi1hY2Nlc3NpYmxlJyk7XG4gICAgdGhpcy4kZWxlbWVudC5hdHRyKCdhcmlhLWhpZGRlbicsICdmYWxzZScpO1xuICAgIFV0aWxzLlJlbW92ZURhdGEodGhpcy4kZWxlbWVudFswXSk7XG4gICAgdGhpcy4kZWxlbWVudC5yZW1vdmVEYXRhKCdzZWxlY3QyJyk7XG5cbiAgICB0aGlzLmRhdGFBZGFwdGVyLmRlc3Ryb3koKTtcbiAgICB0aGlzLnNlbGVjdGlvbi5kZXN0cm95KCk7XG4gICAgdGhpcy5kcm9wZG93bi5kZXN0cm95KCk7XG4gICAgdGhpcy5yZXN1bHRzLmRlc3Ryb3koKTtcblxuICAgIHRoaXMuZGF0YUFkYXB0ZXIgPSBudWxsO1xuICAgIHRoaXMuc2VsZWN0aW9uID0gbnVsbDtcbiAgICB0aGlzLmRyb3Bkb3duID0gbnVsbDtcbiAgICB0aGlzLnJlc3VsdHMgPSBudWxsO1xuICB9O1xuXG4gIFNlbGVjdDIucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgJGNvbnRhaW5lciA9ICQoXG4gICAgICAnPHNwYW4gY2xhc3M9XCJzZWxlY3QyIHNlbGVjdDItY29udGFpbmVyXCI+JyArXG4gICAgICAgICc8c3BhbiBjbGFzcz1cInNlbGVjdGlvblwiPjwvc3Bhbj4nICtcbiAgICAgICAgJzxzcGFuIGNsYXNzPVwiZHJvcGRvd24td3JhcHBlclwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvc3Bhbj4nICtcbiAgICAgICc8L3NwYW4+J1xuICAgICk7XG5cbiAgICAkY29udGFpbmVyLmF0dHIoJ2RpcicsIHRoaXMub3B0aW9ucy5nZXQoJ2RpcicpKTtcblxuICAgIHRoaXMuJGNvbnRhaW5lciA9ICRjb250YWluZXI7XG5cbiAgICB0aGlzLiRjb250YWluZXIuYWRkQ2xhc3MoJ3NlbGVjdDItY29udGFpbmVyLS0nICsgdGhpcy5vcHRpb25zLmdldCgndGhlbWUnKSk7XG5cbiAgICBVdGlscy5TdG9yZURhdGEoJGNvbnRhaW5lclswXSwgJ2VsZW1lbnQnLCB0aGlzLiRlbGVtZW50KTtcblxuICAgIHJldHVybiAkY29udGFpbmVyO1xuICB9O1xuXG4gIHJldHVybiBTZWxlY3QyO1xufSk7XG5cblMyLmRlZmluZSgnanF1ZXJ5LW1vdXNld2hlZWwnLFtcbiAgJ2pxdWVyeSdcbl0sIGZ1bmN0aW9uICgkKSB7XG4gIC8vIFVzZWQgdG8gc2hpbSBqUXVlcnkubW91c2V3aGVlbCBmb3Igbm9uLWZ1bGwgYnVpbGRzLlxuICByZXR1cm4gJDtcbn0pO1xuXG5TMi5kZWZpbmUoJ2pxdWVyeS5zZWxlY3QyJyxbXG4gICdqcXVlcnknLFxuICAnanF1ZXJ5LW1vdXNld2hlZWwnLFxuXG4gICcuL3NlbGVjdDIvY29yZScsXG4gICcuL3NlbGVjdDIvZGVmYXVsdHMnLFxuICAnLi9zZWxlY3QyL3V0aWxzJ1xuXSwgZnVuY3Rpb24gKCQsIF8sIFNlbGVjdDIsIERlZmF1bHRzLCBVdGlscykge1xuICBpZiAoJC5mbi5zZWxlY3QyID09IG51bGwpIHtcbiAgICAvLyBBbGwgbWV0aG9kcyB0aGF0IHNob3VsZCByZXR1cm4gdGhlIGVsZW1lbnRcbiAgICB2YXIgdGhpc01ldGhvZHMgPSBbJ29wZW4nLCAnY2xvc2UnLCAnZGVzdHJveSddO1xuXG4gICAgJC5mbi5zZWxlY3QyID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG4gICAgICBpZiAodHlwZW9mIG9wdGlvbnMgPT09ICdvYmplY3QnKSB7XG4gICAgICAgIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgdmFyIGluc3RhbmNlT3B0aW9ucyA9ICQuZXh0ZW5kKHRydWUsIHt9LCBvcHRpb25zKTtcblxuICAgICAgICAgIHZhciBpbnN0YW5jZSA9IG5ldyBTZWxlY3QyKCQodGhpcyksIGluc3RhbmNlT3B0aW9ucyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfSBlbHNlIGlmICh0eXBlb2Ygb3B0aW9ucyA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgdmFyIHJldDtcbiAgICAgICAgdmFyIGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpO1xuXG4gICAgICAgIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgdmFyIGluc3RhbmNlID0gVXRpbHMuR2V0RGF0YSh0aGlzLCAnc2VsZWN0MicpO1xuXG4gICAgICAgICAgaWYgKGluc3RhbmNlID09IG51bGwgJiYgd2luZG93LmNvbnNvbGUgJiYgY29uc29sZS5lcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcbiAgICAgICAgICAgICAgJ1RoZSBzZWxlY3QyKFxcJycgKyBvcHRpb25zICsgJ1xcJykgbWV0aG9kIHdhcyBjYWxsZWQgb24gYW4gJyArXG4gICAgICAgICAgICAgICdlbGVtZW50IHRoYXQgaXMgbm90IHVzaW5nIFNlbGVjdDIuJ1xuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXQgPSBpbnN0YW5jZVtvcHRpb25zXS5hcHBseShpbnN0YW5jZSwgYXJncyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIENoZWNrIGlmIHdlIHNob3VsZCBiZSByZXR1cm5pbmcgYHRoaXNgXG4gICAgICAgIGlmICgkLmluQXJyYXkob3B0aW9ucywgdGhpc01ldGhvZHMpID4gLTEpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgYXJndW1lbnRzIGZvciBTZWxlY3QyOiAnICsgb3B0aW9ucyk7XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIGlmICgkLmZuLnNlbGVjdDIuZGVmYXVsdHMgPT0gbnVsbCkge1xuICAgICQuZm4uc2VsZWN0Mi5kZWZhdWx0cyA9IERlZmF1bHRzO1xuICB9XG5cbiAgcmV0dXJuIFNlbGVjdDI7XG59KTtcblxuICAvLyBSZXR1cm4gdGhlIEFNRCBsb2FkZXIgY29uZmlndXJhdGlvbiBzbyBpdCBjYW4gYmUgdXNlZCBvdXRzaWRlIG9mIHRoaXMgZmlsZVxuICByZXR1cm4ge1xuICAgIGRlZmluZTogUzIuZGVmaW5lLFxuICAgIHJlcXVpcmU6IFMyLnJlcXVpcmVcbiAgfTtcbn0oKSk7XG5cbiAgLy8gQXV0b2xvYWQgdGhlIGpRdWVyeSBiaW5kaW5nc1xuICAvLyBXZSBrbm93IHRoYXQgYWxsIG9mIHRoZSBtb2R1bGVzIGV4aXN0IGFib3ZlIHRoaXMsIHNvIHdlJ3JlIHNhZmVcbiAgdmFyIHNlbGVjdDIgPSBTMi5yZXF1aXJlKCdqcXVlcnkuc2VsZWN0MicpO1xuXG4gIC8vIEhvbGQgdGhlIEFNRCBtb2R1bGUgcmVmZXJlbmNlcyBvbiB0aGUgalF1ZXJ5IGZ1bmN0aW9uIHRoYXQgd2FzIGp1c3QgbG9hZGVkXG4gIC8vIFRoaXMgYWxsb3dzIFNlbGVjdDIgdG8gdXNlIHRoZSBpbnRlcm5hbCBsb2FkZXIgb3V0c2lkZSBvZiB0aGlzIGZpbGUsIHN1Y2hcbiAgLy8gYXMgaW4gdGhlIGxhbmd1YWdlIGZpbGVzLlxuICBqUXVlcnkuZm4uc2VsZWN0Mi5hbWQgPSBTMjtcblxuICAvLyBSZXR1cm4gdGhlIFNlbGVjdDIgaW5zdGFuY2UgZm9yIGFueW9uZSB3aG8gaXMgaW1wb3J0aW5nIGl0LlxuICByZXR1cm4gc2VsZWN0Mjtcbn0pKTtcbiJdLCJuYW1lcyI6WyJmYWN0b3J5IiwiZGVmaW5lIiwiYW1kIiwibW9kdWxlIiwiX3R5cGVvZiIsImV4cG9ydHMiLCJyb290IiwialF1ZXJ5IiwidW5kZWZpbmVkIiwid2luZG93IiwicmVxdWlyZSIsIlMyIiwiZm4iLCJzZWxlY3QyIiwicmVxdWlyZWpzIiwidW5kZWYiLCJtYWluIiwicmVxIiwibWFrZU1hcCIsImhhbmRsZXJzIiwiZGVmaW5lZCIsIndhaXRpbmciLCJjb25maWciLCJkZWZpbmluZyIsImhhc093biIsIk9iamVjdCIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwiYXBzIiwic2xpY2UiLCJqc1N1ZmZpeFJlZ0V4cCIsImhhc1Byb3AiLCJvYmoiLCJwcm9wIiwiY2FsbCIsIm5vcm1hbGl6ZSIsIm5hbWUiLCJiYXNlTmFtZSIsIm5hbWVQYXJ0cyIsIm5hbWVTZWdtZW50IiwibWFwVmFsdWUiLCJmb3VuZE1hcCIsImxhc3RJbmRleCIsImZvdW5kSSIsImZvdW5kU3Rhck1hcCIsInN0YXJJIiwiaSIsImoiLCJwYXJ0Iiwibm9ybWFsaXplZEJhc2VQYXJ0cyIsImJhc2VQYXJ0cyIsInNwbGl0IiwibWFwIiwic3Rhck1hcCIsImxlbmd0aCIsIm5vZGVJZENvbXBhdCIsInRlc3QiLCJyZXBsYWNlIiwiY2hhckF0IiwiY29uY2F0Iiwic3BsaWNlIiwiam9pbiIsIm1ha2VSZXF1aXJlIiwicmVsTmFtZSIsImZvcmNlU3luYyIsImFyZ3MiLCJhcmd1bWVudHMiLCJwdXNoIiwiYXBwbHkiLCJtYWtlTm9ybWFsaXplIiwibWFrZUxvYWQiLCJkZXBOYW1lIiwidmFsdWUiLCJjYWxsRGVwIiwiRXJyb3IiLCJzcGxpdFByZWZpeCIsInByZWZpeCIsImluZGV4IiwiaW5kZXhPZiIsInN1YnN0cmluZyIsIm1ha2VSZWxQYXJ0cyIsInJlbFBhcnRzIiwicGx1Z2luIiwicGFydHMiLCJyZWxSZXNvdXJjZU5hbWUiLCJmIiwibiIsInByIiwicCIsIm1ha2VDb25maWciLCJlIiwiaWQiLCJ1cmkiLCJkZXBzIiwiY2FsbGJhY2siLCJjanNNb2R1bGUiLCJyZXQiLCJjYWxsYmFja1R5cGUiLCJ1c2luZ0V4cG9ydHMiLCJsb2FkIiwiYWx0Iiwic2V0VGltZW91dCIsImNmZyIsIl9kZWZpbmVkIiwiXyQiLCIkIiwiY29uc29sZSIsImVycm9yIiwiVXRpbHMiLCJFeHRlbmQiLCJDaGlsZENsYXNzIiwiU3VwZXJDbGFzcyIsIl9faGFzUHJvcCIsIkJhc2VDb25zdHJ1Y3RvciIsImNvbnN0cnVjdG9yIiwia2V5IiwiX19zdXBlcl9fIiwiZ2V0TWV0aG9kcyIsInRoZUNsYXNzIiwicHJvdG8iLCJtZXRob2RzIiwibWV0aG9kTmFtZSIsIm0iLCJEZWNvcmF0ZSIsIkRlY29yYXRvckNsYXNzIiwiZGVjb3JhdGVkTWV0aG9kcyIsInN1cGVyTWV0aG9kcyIsIkRlY29yYXRlZENsYXNzIiwidW5zaGlmdCIsIkFycmF5IiwiYXJnQ291bnQiLCJjYWxsZWRDb25zdHJ1Y3RvciIsImRpc3BsYXlOYW1lIiwiY3RyIiwic3VwZXJNZXRob2QiLCJjYWxsZWRNZXRob2QiLCJvcmlnaW5hbE1ldGhvZCIsImRlY29yYXRlZE1ldGhvZCIsImQiLCJPYnNlcnZhYmxlIiwibGlzdGVuZXJzIiwib24iLCJldmVudCIsInRyaWdnZXIiLCJwYXJhbXMiLCJfdHlwZSIsImludm9rZSIsImxlbiIsImdlbmVyYXRlQ2hhcnMiLCJjaGFycyIsInJhbmRvbUNoYXIiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJ0b1N0cmluZyIsImJpbmQiLCJmdW5jIiwiY29udGV4dCIsIl9jb252ZXJ0RGF0YSIsImRhdGEiLCJvcmlnaW5hbEtleSIsImtleXMiLCJkYXRhTGV2ZWwiLCJrIiwidG9Mb3dlckNhc2UiLCJoYXNTY3JvbGwiLCJlbCIsIiRlbCIsIm92ZXJmbG93WCIsInN0eWxlIiwib3ZlcmZsb3dZIiwiaW5uZXJIZWlnaHQiLCJzY3JvbGxIZWlnaHQiLCJpbm5lcldpZHRoIiwic2Nyb2xsV2lkdGgiLCJlc2NhcGVNYXJrdXAiLCJtYXJrdXAiLCJyZXBsYWNlTWFwIiwiU3RyaW5nIiwibWF0Y2giLCJhcHBlbmRNYW55IiwiJGVsZW1lbnQiLCIkbm9kZXMiLCJqcXVlcnkiLCJzdWJzdHIiLCIkanFOb2RlcyIsIm5vZGUiLCJhZGQiLCJhcHBlbmQiLCJfX2NhY2hlIiwiR2V0VW5pcXVlRWxlbWVudElkIiwiZWxlbWVudCIsInNlbGVjdDJJZCIsImdldEF0dHJpYnV0ZSIsInNldEF0dHJpYnV0ZSIsIlN0b3JlRGF0YSIsIkdldERhdGEiLCJSZW1vdmVEYXRhIiwiUmVzdWx0cyIsIm9wdGlvbnMiLCJkYXRhQWRhcHRlciIsInJlbmRlciIsIiRyZXN1bHRzIiwiZ2V0IiwiYXR0ciIsImNsZWFyIiwiZW1wdHkiLCJkaXNwbGF5TWVzc2FnZSIsImhpZGVMb2FkaW5nIiwiJG1lc3NhZ2UiLCJtZXNzYWdlIiwiY2xhc3NOYW1lIiwiaGlkZU1lc3NhZ2VzIiwiZmluZCIsInJlbW92ZSIsIiRvcHRpb25zIiwicmVzdWx0cyIsImNoaWxkcmVuIiwic29ydCIsIml0ZW0iLCIkb3B0aW9uIiwib3B0aW9uIiwicG9zaXRpb24iLCIkZHJvcGRvd24iLCIkcmVzdWx0c0NvbnRhaW5lciIsInNvcnRlciIsImhpZ2hsaWdodEZpcnN0SXRlbSIsIiRzZWxlY3RlZCIsImZpbHRlciIsImZpcnN0IiwiZW5zdXJlSGlnaGxpZ2h0VmlzaWJsZSIsInNldENsYXNzZXMiLCJzZWxmIiwiY3VycmVudCIsInNlbGVjdGVkIiwic2VsZWN0ZWRJZHMiLCJzIiwiZWFjaCIsImluQXJyYXkiLCJzaG93TG9hZGluZyIsImxvYWRpbmdNb3JlIiwibG9hZGluZyIsImRpc2FibGVkIiwidGV4dCIsIiRsb2FkaW5nIiwicHJlcGVuZCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImF0dHJzIiwiX3Jlc3VsdElkIiwidGl0bGUiLCJyb2xlIiwidmFsIiwibGFiZWwiLCIkbGFiZWwiLCJ0ZW1wbGF0ZSIsIiRjaGlsZHJlbiIsImMiLCJjaGlsZCIsIiRjaGlsZCIsIiRjaGlsZHJlbkNvbnRhaW5lciIsImNvbnRhaW5lciIsIiRjb250YWluZXIiLCJpc09wZW4iLCJyZW1vdmVBdHRyIiwiJGhpZ2hsaWdodGVkIiwiZ2V0SGlnaGxpZ2h0ZWRSZXN1bHRzIiwiY3VycmVudEluZGV4IiwibmV4dEluZGV4IiwiJG5leHQiLCJlcSIsImN1cnJlbnRPZmZzZXQiLCJvZmZzZXQiLCJ0b3AiLCJuZXh0VG9wIiwibmV4dE9mZnNldCIsInNjcm9sbFRvcCIsIm91dGVySGVpZ2h0IiwibmV4dEJvdHRvbSIsImFkZENsYXNzIiwibW91c2V3aGVlbCIsImJvdHRvbSIsImRlbHRhWSIsImlzQXRUb3AiLCJpc0F0Qm90dG9tIiwiaGVpZ2h0IiwicHJldmVudERlZmF1bHQiLCJzdG9wUHJvcGFnYXRpb24iLCJldnQiLCIkdGhpcyIsIm9yaWdpbmFsRXZlbnQiLCJyZW1vdmVDbGFzcyIsImRlc3Ryb3kiLCJvZmZzZXREZWx0YSIsInJlc3VsdCIsImNvbnRlbnQiLCJkaXNwbGF5IiwiaW5uZXJIVE1MIiwiS0VZUyIsIkJBQ0tTUEFDRSIsIlRBQiIsIkVOVEVSIiwiU0hJRlQiLCJDVFJMIiwiQUxUIiwiRVNDIiwiU1BBQ0UiLCJQQUdFX1VQIiwiUEFHRV9ET1dOIiwiRU5EIiwiSE9NRSIsIkxFRlQiLCJVUCIsIlJJR0hUIiwiRE9XTiIsIkRFTEVURSIsIkJhc2VTZWxlY3Rpb24iLCIkc2VsZWN0aW9uIiwiX3RhYmluZGV4IiwicmVzdWx0c0lkIiwiX2hhbmRsZUJsdXIiLCJ3aGljaCIsInVwZGF0ZSIsIl9hdHRhY2hDbG9zZUhhbmRsZXIiLCJmb2N1cyIsIl9kZXRhY2hDbG9zZUhhbmRsZXIiLCJhY3RpdmVFbGVtZW50IiwiY29udGFpbnMiLCJib2R5IiwiJHRhcmdldCIsInRhcmdldCIsIiRzZWxlY3QiLCJjbG9zZXN0IiwiJGFsbCIsIm9mZiIsIiRzZWxlY3Rpb25Db250YWluZXIiLCJTaW5nbGVTZWxlY3Rpb24iLCJodG1sIiwiJHJlbmRlcmVkIiwic2VsZWN0aW9uQ29udGFpbmVyIiwic2VsZWN0aW9uIiwiZm9ybWF0dGVkIiwiTXVsdGlwbGVTZWxlY3Rpb24iLCIkcmVtb3ZlIiwicGFyZW50IiwiJHNlbGVjdGlvbnMiLCJQbGFjZWhvbGRlciIsImRlY29yYXRlZCIsInBsYWNlaG9sZGVyIiwibm9ybWFsaXplUGxhY2Vob2xkZXIiLCJfIiwiY3JlYXRlUGxhY2Vob2xkZXIiLCIkcGxhY2Vob2xkZXIiLCJzaW5nbGVQbGFjZWhvbGRlciIsIm11bHRpcGxlU2VsZWN0aW9ucyIsIkFsbG93Q2xlYXIiLCJfaGFuZGxlQ2xlYXIiLCJfaGFuZGxlS2V5Ym9hcmRDbGVhciIsIiRjbGVhciIsInByZXZpb3VzVmFsIiwidW5zZWxlY3REYXRhIiwicHJldmVudGVkIiwiU2VhcmNoIiwiJHNlYXJjaCIsIiRzZWFyY2hDb250YWluZXIiLCJfdHJhbnNmZXJUYWJJbmRleCIsIl9rZXlVcFByZXZlbnRlZCIsImlzRGVmYXVsdFByZXZlbnRlZCIsIiRwcmV2aW91c0Nob2ljZSIsInByZXYiLCJzZWFyY2hSZW1vdmVDaG9pY2UiLCJtc2llIiwiZG9jdW1lbnRNb2RlIiwiZGlzYWJsZUlucHV0RXZlbnRzIiwidHlwZSIsImhhbmRsZVNlYXJjaCIsInNlYXJjaEhhZEZvY3VzIiwicmVzaXplU2VhcmNoIiwiaXNUYWdJbnB1dCIsImlucHV0IiwidGVybSIsImNzcyIsIndpZHRoIiwibWluaW11bVdpZHRoIiwiRXZlbnRSZWxheSIsInJlbGF5RXZlbnRzIiwicHJldmVudGFibGVFdmVudHMiLCJFdmVudCIsIlRyYW5zbGF0aW9uIiwiZGljdCIsImFsbCIsImV4dGVuZCIsInRyYW5zbGF0aW9uIiwiX2NhY2hlIiwibG9hZFBhdGgiLCJwYXRoIiwidHJhbnNsYXRpb25zIiwiZGlhY3JpdGljcyIsIkJhc2VBZGFwdGVyIiwicXVlcnkiLCJnZW5lcmF0ZVJlc3VsdElkIiwiU2VsZWN0QWRhcHRlciIsInNlbGVjdCIsImlzIiwiY3VycmVudERhdGEiLCJ1bnNlbGVjdCIsIm1hdGNoZXMiLCJhZGRPcHRpb25zIiwidGV4dENvbnRlbnQiLCJpbm5lclRleHQiLCJub3JtYWxpemVkRGF0YSIsIl9ub3JtYWxpemVJdGVtIiwiZGVmYXVsdHMiLCJtYXRjaGVyIiwiQXJyYXlBZGFwdGVyIiwiY29udmVydFRvT3B0aW9ucyIsImVsbSIsIiRleGlzdGluZyIsImV4aXN0aW5nSWRzIiwib25seUl0ZW0iLCIkZXhpc3RpbmdPcHRpb24iLCJleGlzdGluZ0RhdGEiLCJuZXdEYXRhIiwiJG5ld09wdGlvbiIsInJlcGxhY2VXaXRoIiwiQWpheEFkYXB0ZXIiLCJhamF4T3B0aW9ucyIsIl9hcHBseURlZmF1bHRzIiwicHJvY2Vzc1Jlc3VsdHMiLCJxIiwidHJhbnNwb3J0Iiwic3VjY2VzcyIsImZhaWx1cmUiLCIkcmVxdWVzdCIsImFqYXgiLCJ0aGVuIiwiZmFpbCIsIl9yZXF1ZXN0IiwiaXNGdW5jdGlvbiIsImFib3J0IiwidXJsIiwicmVxdWVzdCIsImlzQXJyYXkiLCJzdGF0dXMiLCJkZWxheSIsIl9xdWVyeVRpbWVvdXQiLCJjbGVhclRpbWVvdXQiLCJUYWdzIiwidGFncyIsImNyZWF0ZVRhZyIsImluc2VydFRhZyIsInQiLCJ0YWciLCJfcmVtb3ZlT2xkVGFncyIsInBhZ2UiLCJ3cmFwcGVyIiwiY2hlY2tDaGlsZHJlbiIsIm9wdGlvblRleHQiLCJ0b1VwcGVyQ2FzZSIsInBhcmFtc1Rlcm0iLCJjaGVja1RleHQiLCJ0cmltIiwiX2xhc3RUYWciLCJUb2tlbml6ZXIiLCJ0b2tlbml6ZXIiLCJkcm9wZG93biIsImNyZWF0ZUFuZFNlbGVjdCIsIiRleGlzdGluZ09wdGlvbnMiLCJ0b2tlbkRhdGEiLCJzZXBhcmF0b3JzIiwidGVybUNoYXIiLCJwYXJ0UGFyYW1zIiwiTWluaW11bUlucHV0TGVuZ3RoIiwiJGUiLCJtaW5pbXVtSW5wdXRMZW5ndGgiLCJtaW5pbXVtIiwiTWF4aW11bUlucHV0TGVuZ3RoIiwibWF4aW11bUlucHV0TGVuZ3RoIiwibWF4aW11bSIsIk1heGltdW1TZWxlY3Rpb25MZW5ndGgiLCJtYXhpbXVtU2VsZWN0aW9uTGVuZ3RoIiwiY291bnQiLCJEcm9wZG93biIsImJsdXIiLCJzaG93U2VhcmNoIiwiSGlkZVBsYWNlaG9sZGVyIiwicmVtb3ZlUGxhY2Vob2xkZXIiLCJtb2RpZmllZERhdGEiLCJJbmZpbml0ZVNjcm9sbCIsImxhc3RQYXJhbXMiLCIkbG9hZGluZ01vcmUiLCJjcmVhdGVMb2FkaW5nTW9yZSIsInNob3dMb2FkaW5nTW9yZSIsImlzTG9hZE1vcmVWaXNpYmxlIiwiZG9jdW1lbnRFbGVtZW50IiwibG9hZGluZ01vcmVPZmZzZXQiLCJsb2FkTW9yZSIsInBhZ2luYXRpb24iLCJtb3JlIiwiQXR0YWNoQm9keSIsIiRkcm9wZG93blBhcmVudCIsInNldHVwUmVzdWx0c0V2ZW50cyIsIl9zaG93RHJvcGRvd24iLCJfYXR0YWNoUG9zaXRpb25pbmdIYW5kbGVyIiwiX3Bvc2l0aW9uRHJvcGRvd24iLCJfcmVzaXplRHJvcGRvd24iLCJfaGlkZURyb3Bkb3duIiwiX2RldGFjaFBvc2l0aW9uaW5nSGFuZGxlciIsIiRkcm9wZG93bkNvbnRhaW5lciIsImRldGFjaCIsInNjcm9sbEV2ZW50IiwicmVzaXplRXZlbnQiLCJvcmllbnRhdGlvbkV2ZW50IiwiJHdhdGNoZXJzIiwicGFyZW50cyIsIngiLCJzY3JvbGxMZWZ0IiwieSIsImV2IiwiJHdpbmRvdyIsImlzQ3VycmVudGx5QWJvdmUiLCJoYXNDbGFzcyIsImlzQ3VycmVudGx5QmVsb3ciLCJuZXdEaXJlY3Rpb24iLCJ2aWV3cG9ydCIsImVub3VnaFJvb21BYm92ZSIsImVub3VnaFJvb21CZWxvdyIsImxlZnQiLCIkb2Zmc2V0UGFyZW50Iiwib2Zmc2V0UGFyZW50IiwicGFyZW50T2Zmc2V0Iiwib3V0ZXJXaWR0aCIsIm1pbldpZHRoIiwiYXBwZW5kVG8iLCJjb3VudFJlc3VsdHMiLCJNaW5pbXVtUmVzdWx0c0ZvclNlYXJjaCIsIm1pbmltdW1SZXN1bHRzRm9yU2VhcmNoIiwiSW5maW5pdHkiLCJTZWxlY3RPbkNsb3NlIiwiX2hhbmRsZVNlbGVjdE9uQ2xvc2UiLCJvcmlnaW5hbFNlbGVjdDJFdmVudCIsIiRoaWdobGlnaHRlZFJlc3VsdHMiLCJDbG9zZU9uU2VsZWN0IiwiX3NlbGVjdFRyaWdnZXJlZCIsImN0cmxLZXkiLCJlcnJvckxvYWRpbmciLCJpbnB1dFRvb0xvbmciLCJvdmVyQ2hhcnMiLCJpbnB1dFRvb1Nob3J0IiwicmVtYWluaW5nQ2hhcnMiLCJtYXhpbXVtU2VsZWN0ZWQiLCJub1Jlc3VsdHMiLCJzZWFyY2hpbmciLCJSZXN1bHRzTGlzdCIsIlNlbGVjdGlvblNlYXJjaCIsIkRJQUNSSVRJQ1MiLCJTZWxlY3REYXRhIiwiQXJyYXlEYXRhIiwiQWpheERhdGEiLCJEcm9wZG93blNlYXJjaCIsIkVuZ2xpc2hUcmFuc2xhdGlvbiIsIkRlZmF1bHRzIiwicmVzZXQiLCJ0b2tlblNlcGFyYXRvcnMiLCJRdWVyeSIsImFtZEJhc2UiLCJpbml0U2VsZWN0aW9uIiwiSW5pdFNlbGVjdGlvbiIsInJlc3VsdHNBZGFwdGVyIiwic2VsZWN0T25DbG9zZSIsImRyb3Bkb3duQWRhcHRlciIsIm11bHRpcGxlIiwiU2VhcmNoYWJsZURyb3Bkb3duIiwiY2xvc2VPblNlbGVjdCIsImRyb3Bkb3duQ3NzQ2xhc3MiLCJkcm9wZG93bkNzcyIsImFkYXB0RHJvcGRvd25Dc3NDbGFzcyIsIkRyb3Bkb3duQ1NTIiwic2VsZWN0aW9uQWRhcHRlciIsImFsbG93Q2xlYXIiLCJjb250YWluZXJDc3NDbGFzcyIsImNvbnRhaW5lckNzcyIsImFkYXB0Q29udGFpbmVyQ3NzQ2xhc3MiLCJDb250YWluZXJDU1MiLCJsYW5ndWFnZSIsImxhbmd1YWdlUGFydHMiLCJiYXNlTGFuZ3VhZ2UiLCJsYW5ndWFnZXMiLCJsYW5ndWFnZU5hbWVzIiwibCIsImFtZExhbmd1YWdlQmFzZSIsImV4IiwiZGVidWciLCJ3YXJuIiwiYmFzZVRyYW5zbGF0aW9uIiwiY3VzdG9tVHJhbnNsYXRpb24iLCJzdHJpcERpYWNyaXRpY3MiLCJhIiwib3JpZ2luYWwiLCJkcm9wZG93bkF1dG9XaWR0aCIsInRlbXBsYXRlUmVzdWx0IiwidGVtcGxhdGVTZWxlY3Rpb24iLCJ0aGVtZSIsInNldCIsImNhbWVsS2V5IiwiY2FtZWxDYXNlIiwiY29udmVydGVkRGF0YSIsIk9wdGlvbnMiLCJmcm9tRWxlbWVudCIsIklucHV0Q29tcGF0IiwiZXhjbHVkZWREYXRhIiwiZGlyIiwiZGF0YXNldCIsImlzUGxhaW5PYmplY3QiLCJTZWxlY3QyIiwiX2dlbmVyYXRlSWQiLCJ0YWJpbmRleCIsIkRhdGFBZGFwdGVyIiwiX3BsYWNlQ29udGFpbmVyIiwiU2VsZWN0aW9uQWRhcHRlciIsIkRyb3Bkb3duQWRhcHRlciIsIlJlc3VsdHNBZGFwdGVyIiwiX2JpbmRBZGFwdGVycyIsIl9yZWdpc3RlckRvbUV2ZW50cyIsIl9yZWdpc3RlckRhdGFFdmVudHMiLCJfcmVnaXN0ZXJTZWxlY3Rpb25FdmVudHMiLCJfcmVnaXN0ZXJEcm9wZG93bkV2ZW50cyIsIl9yZWdpc3RlclJlc3VsdHNFdmVudHMiLCJfcmVnaXN0ZXJFdmVudHMiLCJpbml0aWFsRGF0YSIsIl9zeW5jQXR0cmlidXRlcyIsImluc2VydEFmdGVyIiwiX3Jlc29sdmVXaWR0aCIsIm1ldGhvZCIsIldJRFRIIiwic3R5bGVXaWR0aCIsImVsZW1lbnRXaWR0aCIsIl9zeW5jQSIsIl9zeW5jUyIsIl9zeW5jU3VidHJlZSIsImF0dGFjaEV2ZW50Iiwib2JzZXJ2ZXIiLCJNdXRhdGlvbk9ic2VydmVyIiwiV2ViS2l0TXV0YXRpb25PYnNlcnZlciIsIk1vek11dGF0aW9uT2JzZXJ2ZXIiLCJfb2JzZXJ2ZXIiLCJtdXRhdGlvbnMiLCJvYnNlcnZlIiwiYXR0cmlidXRlcyIsImNoaWxkTGlzdCIsInN1YnRyZWUiLCJhZGRFdmVudExpc3RlbmVyIiwibm9uUmVsYXlFdmVudHMiLCJ0b2dnbGVEcm9wZG93biIsImFsdEtleSIsImNsb3NlIiwib3BlbiIsImNoYW5nZWQiLCJub2RlTmFtZSIsImFkZGVkTm9kZXMiLCJyZW1vdmVkTm9kZXMiLCJhY3R1YWxUcmlnZ2VyIiwicHJlVHJpZ2dlck1hcCIsInByZVRyaWdnZXJOYW1lIiwicHJlVHJpZ2dlckFyZ3MiLCJoYXNGb2N1cyIsImVuYWJsZSIsIm5ld1ZhbCIsImRldGFjaEV2ZW50IiwiZGlzY29ubmVjdCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJyZW1vdmVEYXRhIiwidGhpc01ldGhvZHMiLCJpbnN0YW5jZU9wdGlvbnMiLCJpbnN0YW5jZSJdLCJzb3VyY2VSb290IjoiIn0=