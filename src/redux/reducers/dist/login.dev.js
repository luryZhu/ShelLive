"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = login;

var _constants = require("../constants");

var defaultState = {
  user: {
    nickname: "",
    token: ""
  }
};

function login() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _constants.USER_LOGIN:
      return {
        user: action.user
      };

    case _constants.USER_LOGOUT:
      return {
        token: "",
        nickname: ""
      };

    default:
      // return defaultState
      return state;
  }
}