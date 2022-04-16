"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initCity = initCity;
exports.changeCity = changeCity;
exports.searchKeywords = searchKeywords;
exports.userLogin = userLogin;
exports.userLogout = userLogout;

var _constants = require("../constants");

function initCity(cityName) {
  return {
    type: _constants.INIT_CITY,
    cityName: cityName
  };
}

function changeCity(cityName) {
  return {
    type: _constants.CHANGE_CITY,
    cityName: cityName
  };
}

function searchKeywords(keywords) {
  return {
    type: _constants.SEARCH_KEYWORDS,
    keywords: keywords
  };
}

function userLogin(user) {
  return {
    type: _constants.USER_LOGIN,
    user: user
  };
}

function userLogout() {
  return {
    type: _constants.USER_LOGOUT
  };
}