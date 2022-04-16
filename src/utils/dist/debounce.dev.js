"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = require("react");

function useDebounce(fn) {
  var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 300;
  var timer = (0, _react.useRef)();
  var cancel = (0, _react.useCallback)(function () {
    // console.log("cancel");
    timer.current && clearTimeout(timer.current);
  }, []);

  function fnDebounce() {
    cancel();
    timer.current = setTimeout(function () {
      fn();
    }, delay);
  } // console.log(timer);
  // console.log(typeof fnDebounce);


  return fnDebounce;
}

var _default = useDebounce;
exports["default"] = _default;