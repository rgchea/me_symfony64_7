(self["webpackChunk"] = self["webpackChunk"] || []).push([["js/jquery.ui.touch-punch"],{

/***/ "./assets/css/portoadmin/vendor/jqueryui-touch-punch/jquery.ui.touch-punch.js":
/*!************************************************************************************!*\
  !*** ./assets/css/portoadmin/vendor/jqueryui-touch-punch/jquery.ui.touch-punch.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

/* provided dependency */ var jQuery = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
__webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/*!
 * jQuery UI Touch Punch 0.2.3
 *
 * Copyright 2011–2014, Dave Furfero
 * Dual licensed under the MIT or GPL Version 2 licenses.
 *
 * Depends:
 *  jquery.ui.widget.js
 *  jquery.ui.mouse.js
 */
(function ($) {
  // Detect touch support
  $.support.touch = 'ontouchend' in document;

  // Ignore browsers without touch support
  if (!$.support.touch) {
    return;
  }
  var mouseProto = $.ui.mouse.prototype,
    _mouseInit = mouseProto._mouseInit,
    _mouseDestroy = mouseProto._mouseDestroy,
    touchHandled;

  /**
   * Simulate a mouse event based on a corresponding touch event
   * @param {Object} event A touch event
   * @param {String} simulatedType The corresponding mouse event
   */
  function simulateMouseEvent(event, simulatedType) {
    // Ignore multi-touch events
    if (event.originalEvent.touches.length > 1) {
      return;
    }
    event.preventDefault();
    var touch = event.originalEvent.changedTouches[0],
      simulatedEvent = document.createEvent('MouseEvents');

    // Initialize the simulated mouse event using the touch event's coordinates
    simulatedEvent.initMouseEvent(simulatedType,
    // type
    true,
    // bubbles                    
    true,
    // cancelable                 
    window,
    // view                       
    1,
    // detail                     
    touch.screenX,
    // screenX                    
    touch.screenY,
    // screenY                    
    touch.clientX,
    // clientX                    
    touch.clientY,
    // clientY                    
    false,
    // ctrlKey                    
    false,
    // altKey                     
    false,
    // shiftKey                   
    false,
    // metaKey                    
    0,
    // button                     
    null // relatedTarget              
    );

    // Dispatch the simulated event to the target element
    event.target.dispatchEvent(simulatedEvent);
  }

  /**
   * Handle the jQuery UI widget's touchstart events
   * @param {Object} event The widget element's touchstart event
   */
  mouseProto._touchStart = function (event) {
    var self = this;

    // Ignore the event if another widget is already being handled
    if (touchHandled || !self._mouseCapture(event.originalEvent.changedTouches[0])) {
      return;
    }

    // Set the flag to prevent other widgets from inheriting the touch event
    touchHandled = true;

    // Track movement to determine if interaction was a click
    self._touchMoved = false;

    // Simulate the mouseover event
    simulateMouseEvent(event, 'mouseover');

    // Simulate the mousemove event
    simulateMouseEvent(event, 'mousemove');

    // Simulate the mousedown event
    simulateMouseEvent(event, 'mousedown');
  };

  /**
   * Handle the jQuery UI widget's touchmove events
   * @param {Object} event The document's touchmove event
   */
  mouseProto._touchMove = function (event) {
    // Ignore event if not handled
    if (!touchHandled) {
      return;
    }

    // Interaction was not a click
    this._touchMoved = true;

    // Simulate the mousemove event
    simulateMouseEvent(event, 'mousemove');
  };

  /**
   * Handle the jQuery UI widget's touchend events
   * @param {Object} event The document's touchend event
   */
  mouseProto._touchEnd = function (event) {
    // Ignore event if not handled
    if (!touchHandled) {
      return;
    }

    // Simulate the mouseup event
    simulateMouseEvent(event, 'mouseup');

    // Simulate the mouseout event
    simulateMouseEvent(event, 'mouseout');

    // If the touch interaction did not move, it should trigger a click
    if (!this._touchMoved) {
      // Simulate the click event
      simulateMouseEvent(event, 'click');
    }

    // Unset the flag to allow other widgets to inherit the touch event
    touchHandled = false;
  };

  /**
   * A duck punch of the $.ui.mouse _mouseInit method to support touch events.
   * This method extends the widget with bound touch event handlers that
   * translate touch events to mouse events and pass them to the widget's
   * original mouse event handling methods.
   */
  mouseProto._mouseInit = function () {
    var self = this;

    // Delegate the touch handlers to the widget's element
    self.element.bind({
      touchstart: $.proxy(self, '_touchStart'),
      touchmove: $.proxy(self, '_touchMove'),
      touchend: $.proxy(self, '_touchEnd')
    });

    // Call the original $.ui.mouse init method
    _mouseInit.call(self);
  };

  /**
   * Remove the touch event handlers
   */
  mouseProto._mouseDestroy = function () {
    var self = this;

    // Delegate the touch handlers to the widget's element
    self.element.unbind({
      touchstart: $.proxy(self, '_touchStart'),
      touchmove: $.proxy(self, '_touchMove'),
      touchend: $.proxy(self, '_touchEnd')
    });

    // Call the original $.ui.mouse destroy method
    _mouseDestroy.call(self);
  };
})(jQuery);

/***/ }),

/***/ "./node_modules/core-js/internals/array-slice.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/array-slice.js ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");

module.exports = uncurryThis([].slice);


/***/ }),

/***/ "./node_modules/core-js/internals/function-bind.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/function-bind.js ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");
var aCallable = __webpack_require__(/*! ../internals/a-callable */ "./node_modules/core-js/internals/a-callable.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var hasOwn = __webpack_require__(/*! ../internals/has-own-property */ "./node_modules/core-js/internals/has-own-property.js");
var arraySlice = __webpack_require__(/*! ../internals/array-slice */ "./node_modules/core-js/internals/array-slice.js");
var NATIVE_BIND = __webpack_require__(/*! ../internals/function-bind-native */ "./node_modules/core-js/internals/function-bind-native.js");

var $Function = Function;
var concat = uncurryThis([].concat);
var join = uncurryThis([].join);
var factories = {};

var construct = function (C, argsLength, args) {
  if (!hasOwn(factories, argsLength)) {
    var list = [];
    var i = 0;
    for (; i < argsLength; i++) list[i] = 'a[' + i + ']';
    factories[argsLength] = $Function('C,a', 'return new C(' + join(list, ',') + ')');
  } return factories[argsLength](C, args);
};

// `Function.prototype.bind` method implementation
// https://tc39.es/ecma262/#sec-function.prototype.bind
// eslint-disable-next-line es/no-function-prototype-bind -- detection
module.exports = NATIVE_BIND ? $Function.bind : function bind(that /* , ...args */) {
  var F = aCallable(this);
  var Prototype = F.prototype;
  var partArgs = arraySlice(arguments, 1);
  var boundFunction = function bound(/* args... */) {
    var args = concat(partArgs, arraySlice(arguments));
    return this instanceof boundFunction ? construct(F, args.length, args) : F.apply(that, args);
  };
  if (isObject(Prototype)) boundFunction.prototype = Prototype;
  return boundFunction;
};


/***/ }),

/***/ "./node_modules/core-js/modules/es.function.bind.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es.function.bind.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// TODO: Remove from `core-js@4`
var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var bind = __webpack_require__(/*! ../internals/function-bind */ "./node_modules/core-js/internals/function-bind.js");

// `Function.prototype.bind` method
// https://tc39.es/ecma262/#sec-function.prototype.bind
// eslint-disable-next-line es/no-function-prototype-bind -- detection
$({ target: 'Function', proto: true, forced: Function.bind !== bind }, {
  bind: bind
});


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_internals_export_js","vendors-node_modules_jquery_dist_jquery_js"], () => (__webpack_exec__("./assets/css/portoadmin/vendor/jqueryui-touch-punch/jquery.ui.touch-punch.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxLQUFLLENBQUNSLElBQUksRUFBRSxZQUFZLENBQUM7TUFDdENVLFFBQVEsRUFBRXhDLENBQUMsQ0FBQ3NDLEtBQUssQ0FBQ1IsSUFBSSxFQUFFLFdBQVc7SUFDckMsQ0FBQyxDQUFDOztJQUVGO0lBQ0FyQixhQUFhLENBQUNnQyxJQUFJLENBQUNYLElBQUksQ0FBQztFQUMxQixDQUFDO0FBRUgsQ0FBQyxFQUFFYSxNQUFNLENBQUMsQzs7Ozs7Ozs7Ozs7QUNuTEc7QUFDYixrQkFBa0IsbUJBQU8sQ0FBQyxxR0FBb0M7O0FBRTlEOzs7Ozs7Ozs7Ozs7QUNIYTtBQUNiLGtCQUFrQixtQkFBTyxDQUFDLHFHQUFvQztBQUM5RCxnQkFBZ0IsbUJBQU8sQ0FBQywrRUFBeUI7QUFDakQsZUFBZSxtQkFBTyxDQUFDLDZFQUF3QjtBQUMvQyxhQUFhLG1CQUFPLENBQUMsMkZBQStCO0FBQ3BELGlCQUFpQixtQkFBTyxDQUFDLGlGQUEwQjtBQUNuRCxrQkFBa0IsbUJBQU8sQ0FBQyxtR0FBbUM7O0FBRTdEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxnQkFBZ0I7QUFDM0I7QUFDQSxJQUFJO0FBQ0o7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDbkNhO0FBQ2I7QUFDQSxRQUFRLG1CQUFPLENBQUMsdUVBQXFCO0FBQ3JDLFdBQVcsbUJBQU8sQ0FBQyxxRkFBNEI7O0FBRS9DO0FBQ0E7QUFDQTtBQUNBLElBQUksaUVBQWlFO0FBQ3JFO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Fzc2V0cy9jc3MvcG9ydG9hZG1pbi92ZW5kb3IvanF1ZXJ5dWktdG91Y2gtcHVuY2gvanF1ZXJ5LnVpLnRvdWNoLXB1bmNoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hcnJheS1zbGljZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZnVuY3Rpb24tYmluZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLmZ1bmN0aW9uLmJpbmQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyohXG4gKiBqUXVlcnkgVUkgVG91Y2ggUHVuY2ggMC4yLjNcbiAqXG4gKiBDb3B5cmlnaHQgMjAxMeKAkzIwMTQsIERhdmUgRnVyZmVyb1xuICogRHVhbCBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIG9yIEdQTCBWZXJzaW9uIDIgbGljZW5zZXMuXG4gKlxuICogRGVwZW5kczpcbiAqICBqcXVlcnkudWkud2lkZ2V0LmpzXG4gKiAganF1ZXJ5LnVpLm1vdXNlLmpzXG4gKi9cbihmdW5jdGlvbiAoJCkge1xuXG4gIC8vIERldGVjdCB0b3VjaCBzdXBwb3J0XG4gICQuc3VwcG9ydC50b3VjaCA9ICdvbnRvdWNoZW5kJyBpbiBkb2N1bWVudDtcblxuICAvLyBJZ25vcmUgYnJvd3NlcnMgd2l0aG91dCB0b3VjaCBzdXBwb3J0XG4gIGlmICghJC5zdXBwb3J0LnRvdWNoKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdmFyIG1vdXNlUHJvdG8gPSAkLnVpLm1vdXNlLnByb3RvdHlwZSxcbiAgICAgIF9tb3VzZUluaXQgPSBtb3VzZVByb3RvLl9tb3VzZUluaXQsXG4gICAgICBfbW91c2VEZXN0cm95ID0gbW91c2VQcm90by5fbW91c2VEZXN0cm95LFxuICAgICAgdG91Y2hIYW5kbGVkO1xuXG4gIC8qKlxuICAgKiBTaW11bGF0ZSBhIG1vdXNlIGV2ZW50IGJhc2VkIG9uIGEgY29ycmVzcG9uZGluZyB0b3VjaCBldmVudFxuICAgKiBAcGFyYW0ge09iamVjdH0gZXZlbnQgQSB0b3VjaCBldmVudFxuICAgKiBAcGFyYW0ge1N0cmluZ30gc2ltdWxhdGVkVHlwZSBUaGUgY29ycmVzcG9uZGluZyBtb3VzZSBldmVudFxuICAgKi9cbiAgZnVuY3Rpb24gc2ltdWxhdGVNb3VzZUV2ZW50IChldmVudCwgc2ltdWxhdGVkVHlwZSkge1xuXG4gICAgLy8gSWdub3JlIG11bHRpLXRvdWNoIGV2ZW50c1xuICAgIGlmIChldmVudC5vcmlnaW5hbEV2ZW50LnRvdWNoZXMubGVuZ3RoID4gMSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICB2YXIgdG91Y2ggPSBldmVudC5vcmlnaW5hbEV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdLFxuICAgICAgICBzaW11bGF0ZWRFdmVudCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdNb3VzZUV2ZW50cycpO1xuICAgIFxuICAgIC8vIEluaXRpYWxpemUgdGhlIHNpbXVsYXRlZCBtb3VzZSBldmVudCB1c2luZyB0aGUgdG91Y2ggZXZlbnQncyBjb29yZGluYXRlc1xuICAgIHNpbXVsYXRlZEV2ZW50LmluaXRNb3VzZUV2ZW50KFxuICAgICAgc2ltdWxhdGVkVHlwZSwgICAgLy8gdHlwZVxuICAgICAgdHJ1ZSwgICAgICAgICAgICAgLy8gYnViYmxlcyAgICAgICAgICAgICAgICAgICAgXG4gICAgICB0cnVlLCAgICAgICAgICAgICAvLyBjYW5jZWxhYmxlICAgICAgICAgICAgICAgICBcbiAgICAgIHdpbmRvdywgICAgICAgICAgIC8vIHZpZXcgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgMSwgICAgICAgICAgICAgICAgLy8gZGV0YWlsICAgICAgICAgICAgICAgICAgICAgXG4gICAgICB0b3VjaC5zY3JlZW5YLCAgICAvLyBzY3JlZW5YICAgICAgICAgICAgICAgICAgICBcbiAgICAgIHRvdWNoLnNjcmVlblksICAgIC8vIHNjcmVlblkgICAgICAgICAgICAgICAgICAgIFxuICAgICAgdG91Y2guY2xpZW50WCwgICAgLy8gY2xpZW50WCAgICAgICAgICAgICAgICAgICAgXG4gICAgICB0b3VjaC5jbGllbnRZLCAgICAvLyBjbGllbnRZICAgICAgICAgICAgICAgICAgICBcbiAgICAgIGZhbHNlLCAgICAgICAgICAgIC8vIGN0cmxLZXkgICAgICAgICAgICAgICAgICAgIFxuICAgICAgZmFsc2UsICAgICAgICAgICAgLy8gYWx0S2V5ICAgICAgICAgICAgICAgICAgICAgXG4gICAgICBmYWxzZSwgICAgICAgICAgICAvLyBzaGlmdEtleSAgICAgICAgICAgICAgICAgICBcbiAgICAgIGZhbHNlLCAgICAgICAgICAgIC8vIG1ldGFLZXkgICAgICAgICAgICAgICAgICAgIFxuICAgICAgMCwgICAgICAgICAgICAgICAgLy8gYnV0dG9uICAgICAgICAgICAgICAgICAgICAgXG4gICAgICBudWxsICAgICAgICAgICAgICAvLyByZWxhdGVkVGFyZ2V0ICAgICAgICAgICAgICBcbiAgICApO1xuXG4gICAgLy8gRGlzcGF0Y2ggdGhlIHNpbXVsYXRlZCBldmVudCB0byB0aGUgdGFyZ2V0IGVsZW1lbnRcbiAgICBldmVudC50YXJnZXQuZGlzcGF0Y2hFdmVudChzaW11bGF0ZWRFdmVudCk7XG4gIH1cblxuICAvKipcbiAgICogSGFuZGxlIHRoZSBqUXVlcnkgVUkgd2lkZ2V0J3MgdG91Y2hzdGFydCBldmVudHNcbiAgICogQHBhcmFtIHtPYmplY3R9IGV2ZW50IFRoZSB3aWRnZXQgZWxlbWVudCdzIHRvdWNoc3RhcnQgZXZlbnRcbiAgICovXG4gIG1vdXNlUHJvdG8uX3RvdWNoU3RhcnQgPSBmdW5jdGlvbiAoZXZlbnQpIHtcblxuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgIC8vIElnbm9yZSB0aGUgZXZlbnQgaWYgYW5vdGhlciB3aWRnZXQgaXMgYWxyZWFkeSBiZWluZyBoYW5kbGVkXG4gICAgaWYgKHRvdWNoSGFuZGxlZCB8fCAhc2VsZi5fbW91c2VDYXB0dXJlKGV2ZW50Lm9yaWdpbmFsRXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0pKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gU2V0IHRoZSBmbGFnIHRvIHByZXZlbnQgb3RoZXIgd2lkZ2V0cyBmcm9tIGluaGVyaXRpbmcgdGhlIHRvdWNoIGV2ZW50XG4gICAgdG91Y2hIYW5kbGVkID0gdHJ1ZTtcblxuICAgIC8vIFRyYWNrIG1vdmVtZW50IHRvIGRldGVybWluZSBpZiBpbnRlcmFjdGlvbiB3YXMgYSBjbGlja1xuICAgIHNlbGYuX3RvdWNoTW92ZWQgPSBmYWxzZTtcblxuICAgIC8vIFNpbXVsYXRlIHRoZSBtb3VzZW92ZXIgZXZlbnRcbiAgICBzaW11bGF0ZU1vdXNlRXZlbnQoZXZlbnQsICdtb3VzZW92ZXInKTtcblxuICAgIC8vIFNpbXVsYXRlIHRoZSBtb3VzZW1vdmUgZXZlbnRcbiAgICBzaW11bGF0ZU1vdXNlRXZlbnQoZXZlbnQsICdtb3VzZW1vdmUnKTtcblxuICAgIC8vIFNpbXVsYXRlIHRoZSBtb3VzZWRvd24gZXZlbnRcbiAgICBzaW11bGF0ZU1vdXNlRXZlbnQoZXZlbnQsICdtb3VzZWRvd24nKTtcbiAgfTtcblxuICAvKipcbiAgICogSGFuZGxlIHRoZSBqUXVlcnkgVUkgd2lkZ2V0J3MgdG91Y2htb3ZlIGV2ZW50c1xuICAgKiBAcGFyYW0ge09iamVjdH0gZXZlbnQgVGhlIGRvY3VtZW50J3MgdG91Y2htb3ZlIGV2ZW50XG4gICAqL1xuICBtb3VzZVByb3RvLl90b3VjaE1vdmUgPSBmdW5jdGlvbiAoZXZlbnQpIHtcblxuICAgIC8vIElnbm9yZSBldmVudCBpZiBub3QgaGFuZGxlZFxuICAgIGlmICghdG91Y2hIYW5kbGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gSW50ZXJhY3Rpb24gd2FzIG5vdCBhIGNsaWNrXG4gICAgdGhpcy5fdG91Y2hNb3ZlZCA9IHRydWU7XG5cbiAgICAvLyBTaW11bGF0ZSB0aGUgbW91c2Vtb3ZlIGV2ZW50XG4gICAgc2ltdWxhdGVNb3VzZUV2ZW50KGV2ZW50LCAnbW91c2Vtb3ZlJyk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEhhbmRsZSB0aGUgalF1ZXJ5IFVJIHdpZGdldCdzIHRvdWNoZW5kIGV2ZW50c1xuICAgKiBAcGFyYW0ge09iamVjdH0gZXZlbnQgVGhlIGRvY3VtZW50J3MgdG91Y2hlbmQgZXZlbnRcbiAgICovXG4gIG1vdXNlUHJvdG8uX3RvdWNoRW5kID0gZnVuY3Rpb24gKGV2ZW50KSB7XG5cbiAgICAvLyBJZ25vcmUgZXZlbnQgaWYgbm90IGhhbmRsZWRcbiAgICBpZiAoIXRvdWNoSGFuZGxlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIFNpbXVsYXRlIHRoZSBtb3VzZXVwIGV2ZW50XG4gICAgc2ltdWxhdGVNb3VzZUV2ZW50KGV2ZW50LCAnbW91c2V1cCcpO1xuXG4gICAgLy8gU2ltdWxhdGUgdGhlIG1vdXNlb3V0IGV2ZW50XG4gICAgc2ltdWxhdGVNb3VzZUV2ZW50KGV2ZW50LCAnbW91c2VvdXQnKTtcblxuICAgIC8vIElmIHRoZSB0b3VjaCBpbnRlcmFjdGlvbiBkaWQgbm90IG1vdmUsIGl0IHNob3VsZCB0cmlnZ2VyIGEgY2xpY2tcbiAgICBpZiAoIXRoaXMuX3RvdWNoTW92ZWQpIHtcblxuICAgICAgLy8gU2ltdWxhdGUgdGhlIGNsaWNrIGV2ZW50XG4gICAgICBzaW11bGF0ZU1vdXNlRXZlbnQoZXZlbnQsICdjbGljaycpO1xuICAgIH1cblxuICAgIC8vIFVuc2V0IHRoZSBmbGFnIHRvIGFsbG93IG90aGVyIHdpZGdldHMgdG8gaW5oZXJpdCB0aGUgdG91Y2ggZXZlbnRcbiAgICB0b3VjaEhhbmRsZWQgPSBmYWxzZTtcbiAgfTtcblxuICAvKipcbiAgICogQSBkdWNrIHB1bmNoIG9mIHRoZSAkLnVpLm1vdXNlIF9tb3VzZUluaXQgbWV0aG9kIHRvIHN1cHBvcnQgdG91Y2ggZXZlbnRzLlxuICAgKiBUaGlzIG1ldGhvZCBleHRlbmRzIHRoZSB3aWRnZXQgd2l0aCBib3VuZCB0b3VjaCBldmVudCBoYW5kbGVycyB0aGF0XG4gICAqIHRyYW5zbGF0ZSB0b3VjaCBldmVudHMgdG8gbW91c2UgZXZlbnRzIGFuZCBwYXNzIHRoZW0gdG8gdGhlIHdpZGdldCdzXG4gICAqIG9yaWdpbmFsIG1vdXNlIGV2ZW50IGhhbmRsaW5nIG1ldGhvZHMuXG4gICAqL1xuICBtb3VzZVByb3RvLl9tb3VzZUluaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgXG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgLy8gRGVsZWdhdGUgdGhlIHRvdWNoIGhhbmRsZXJzIHRvIHRoZSB3aWRnZXQncyBlbGVtZW50XG4gICAgc2VsZi5lbGVtZW50LmJpbmQoe1xuICAgICAgdG91Y2hzdGFydDogJC5wcm94eShzZWxmLCAnX3RvdWNoU3RhcnQnKSxcbiAgICAgIHRvdWNobW92ZTogJC5wcm94eShzZWxmLCAnX3RvdWNoTW92ZScpLFxuICAgICAgdG91Y2hlbmQ6ICQucHJveHkoc2VsZiwgJ190b3VjaEVuZCcpXG4gICAgfSk7XG5cbiAgICAvLyBDYWxsIHRoZSBvcmlnaW5hbCAkLnVpLm1vdXNlIGluaXQgbWV0aG9kXG4gICAgX21vdXNlSW5pdC5jYWxsKHNlbGYpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBSZW1vdmUgdGhlIHRvdWNoIGV2ZW50IGhhbmRsZXJzXG4gICAqL1xuICBtb3VzZVByb3RvLl9tb3VzZURlc3Ryb3kgPSBmdW5jdGlvbiAoKSB7XG4gICAgXG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgLy8gRGVsZWdhdGUgdGhlIHRvdWNoIGhhbmRsZXJzIHRvIHRoZSB3aWRnZXQncyBlbGVtZW50XG4gICAgc2VsZi5lbGVtZW50LnVuYmluZCh7XG4gICAgICB0b3VjaHN0YXJ0OiAkLnByb3h5KHNlbGYsICdfdG91Y2hTdGFydCcpLFxuICAgICAgdG91Y2htb3ZlOiAkLnByb3h5KHNlbGYsICdfdG91Y2hNb3ZlJyksXG4gICAgICB0b3VjaGVuZDogJC5wcm94eShzZWxmLCAnX3RvdWNoRW5kJylcbiAgICB9KTtcblxuICAgIC8vIENhbGwgdGhlIG9yaWdpbmFsICQudWkubW91c2UgZGVzdHJveSBtZXRob2RcbiAgICBfbW91c2VEZXN0cm95LmNhbGwoc2VsZik7XG4gIH07XG5cbn0pKGpRdWVyeSk7IiwiJ3VzZSBzdHJpY3QnO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHVuY3VycnlUaGlzKFtdLnNsaWNlKTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMnKTtcbnZhciBhQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYS1jYWxsYWJsZScpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW9iamVjdCcpO1xudmFyIGhhc093biA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oYXMtb3duLXByb3BlcnR5Jyk7XG52YXIgYXJyYXlTbGljZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1zbGljZScpO1xudmFyIE5BVElWRV9CSU5EID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLWJpbmQtbmF0aXZlJyk7XG5cbnZhciAkRnVuY3Rpb24gPSBGdW5jdGlvbjtcbnZhciBjb25jYXQgPSB1bmN1cnJ5VGhpcyhbXS5jb25jYXQpO1xudmFyIGpvaW4gPSB1bmN1cnJ5VGhpcyhbXS5qb2luKTtcbnZhciBmYWN0b3JpZXMgPSB7fTtcblxudmFyIGNvbnN0cnVjdCA9IGZ1bmN0aW9uIChDLCBhcmdzTGVuZ3RoLCBhcmdzKSB7XG4gIGlmICghaGFzT3duKGZhY3RvcmllcywgYXJnc0xlbmd0aCkpIHtcbiAgICB2YXIgbGlzdCA9IFtdO1xuICAgIHZhciBpID0gMDtcbiAgICBmb3IgKDsgaSA8IGFyZ3NMZW5ndGg7IGkrKykgbGlzdFtpXSA9ICdhWycgKyBpICsgJ10nO1xuICAgIGZhY3Rvcmllc1thcmdzTGVuZ3RoXSA9ICRGdW5jdGlvbignQyxhJywgJ3JldHVybiBuZXcgQygnICsgam9pbihsaXN0LCAnLCcpICsgJyknKTtcbiAgfSByZXR1cm4gZmFjdG9yaWVzW2FyZ3NMZW5ndGhdKEMsIGFyZ3MpO1xufTtcblxuLy8gYEZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kYCBtZXRob2QgaW1wbGVtZW50YXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtZnVuY3Rpb24ucHJvdG90eXBlLmJpbmRcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1mdW5jdGlvbi1wcm90b3R5cGUtYmluZCAtLSBkZXRlY3Rpb25cbm1vZHVsZS5leHBvcnRzID0gTkFUSVZFX0JJTkQgPyAkRnVuY3Rpb24uYmluZCA6IGZ1bmN0aW9uIGJpbmQodGhhdCAvKiAsIC4uLmFyZ3MgKi8pIHtcbiAgdmFyIEYgPSBhQ2FsbGFibGUodGhpcyk7XG4gIHZhciBQcm90b3R5cGUgPSBGLnByb3RvdHlwZTtcbiAgdmFyIHBhcnRBcmdzID0gYXJyYXlTbGljZShhcmd1bWVudHMsIDEpO1xuICB2YXIgYm91bmRGdW5jdGlvbiA9IGZ1bmN0aW9uIGJvdW5kKC8qIGFyZ3MuLi4gKi8pIHtcbiAgICB2YXIgYXJncyA9IGNvbmNhdChwYXJ0QXJncywgYXJyYXlTbGljZShhcmd1bWVudHMpKTtcbiAgICByZXR1cm4gdGhpcyBpbnN0YW5jZW9mIGJvdW5kRnVuY3Rpb24gPyBjb25zdHJ1Y3QoRiwgYXJncy5sZW5ndGgsIGFyZ3MpIDogRi5hcHBseSh0aGF0LCBhcmdzKTtcbiAgfTtcbiAgaWYgKGlzT2JqZWN0KFByb3RvdHlwZSkpIGJvdW5kRnVuY3Rpb24ucHJvdG90eXBlID0gUHJvdG90eXBlO1xuICByZXR1cm4gYm91bmRGdW5jdGlvbjtcbn07XG4iLCIndXNlIHN0cmljdCc7XG4vLyBUT0RPOiBSZW1vdmUgZnJvbSBgY29yZS1qc0A0YFxudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgYmluZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1iaW5kJyk7XG5cbi8vIGBGdW5jdGlvbi5wcm90b3R5cGUuYmluZGAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tZnVuY3Rpb24tcHJvdG90eXBlLWJpbmQgLS0gZGV0ZWN0aW9uXG4kKHsgdGFyZ2V0OiAnRnVuY3Rpb24nLCBwcm90bzogdHJ1ZSwgZm9yY2VkOiBGdW5jdGlvbi5iaW5kICE9PSBiaW5kIH0sIHtcbiAgYmluZDogYmluZFxufSk7XG4iXSwibmFtZXMiOlsiJCIsInN1cHBvcnQiLCJ0b3VjaCIsImRvY3VtZW50IiwibW91c2VQcm90byIsInVpIiwibW91c2UiLCJwcm90b3R5cGUiLCJfbW91c2VJbml0IiwiX21vdXNlRGVzdHJveSIsInRvdWNoSGFuZGxlZCIsInNpbXVsYXRlTW91c2VFdmVudCIsImV2ZW50Iiwic2ltdWxhdGVkVHlwZSIsIm9yaWdpbmFsRXZlbnQiLCJ0b3VjaGVzIiwibGVuZ3RoIiwicHJldmVudERlZmF1bHQiLCJjaGFuZ2VkVG91Y2hlcyIsInNpbXVsYXRlZEV2ZW50IiwiY3JlYXRlRXZlbnQiLCJpbml0TW91c2VFdmVudCIsIndpbmRvdyIsInNjcmVlblgiLCJzY3JlZW5ZIiwiY2xpZW50WCIsImNsaWVudFkiLCJ0YXJnZXQiLCJkaXNwYXRjaEV2ZW50IiwiX3RvdWNoU3RhcnQiLCJzZWxmIiwiX21vdXNlQ2FwdHVyZSIsIl90b3VjaE1vdmVkIiwiX3RvdWNoTW92ZSIsIl90b3VjaEVuZCIsImVsZW1lbnQiLCJiaW5kIiwidG91Y2hzdGFydCIsInByb3h5IiwidG91Y2htb3ZlIiwidG91Y2hlbmQiLCJjYWxsIiwidW5iaW5kIiwialF1ZXJ5Il0sInNvdXJjZVJvb3QiOiIifQ==