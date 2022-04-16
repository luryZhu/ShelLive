"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _redux = require("redux");

var _city = _interopRequireDefault(require("./city"));

var _search = _interopRequireDefault(require("./search"));

var _login = _interopRequireDefault(require("./login"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var rootReducer = (0, _redux.combineReducers)({
  city: _city["default"],
  search: _search["default"],
  login: _login["default"]
});
var _default = rootReducer;
exports["default"] = _default;