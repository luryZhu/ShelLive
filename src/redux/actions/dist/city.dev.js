"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initCity = initCity;
exports.changeCity = changeCity;

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