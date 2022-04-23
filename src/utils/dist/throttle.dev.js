"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.jsThrottle = jsThrottle;
exports["default"] = void 0;

var _react = require("react");

function useThrottle(fn) {
  var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 300;
  var timer = (0, _react.useRef)();
  timer.current = null;

  function fnThrottle() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    if (!timer.current) {
      timer.current = setTimeout(function () {
        // console.log("throttle fn")
        fn.apply(void 0, args);
        timer.current = null;
      }, delay);
    }
  }

  return [fnThrottle];
}

function jsThrottle(fn) {
  var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 300;
  var timer = null;

  function fnThrottle() {
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    // console.log(timer)
    if (!timer) {
      timer = setTimeout(function () {
        // console.log("throttle fn")
        fn.apply(void 0, args);
        timer = null;
      }, delay);
    }
  }

  return fnThrottle;
}

var _default = useThrottle;
exports["default"] = _default;