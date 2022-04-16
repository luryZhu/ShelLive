"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = search;

var _constants = require("../constants");

var defaultState = {
  keywords: ""
};

function search() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _constants.SEARCH_KEYWORDS:
      return {
        keywords: action.keywords
      };

    default:
      return state;
  }
}