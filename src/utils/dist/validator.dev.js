"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _validator = _interopRequireDefault(require("validator"));

var _isEmpty = _interopRequireDefault(require("lodash/isEmpty"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var validatorInput = function validatorInput(data) {
  /**
   * validator.isEmpty方法验证是否为空
   */
  var errors = {};

  if (_validator["default"].isEmpty(data.username)) {
    errors.username = "用户名不能为空";
  }

  if (_validator["default"].isEmpty(data.password)) {
    errors.password = "密码不能为空";
  }

  return {
    // 如果 value 为空，那么返回 true，否则返回 false。
    isValid: (0, _isEmpty["default"])(errors),
    errors: errors
  };
};

var _default = validatorInput;
exports["default"] = _default;