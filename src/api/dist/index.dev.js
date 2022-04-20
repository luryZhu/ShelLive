"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _request = _interopRequireDefault(require("../utils/request"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * 路径地址
 */
var base = {
  baseUrl: "http://127.0.0.1:3001",
  homehot1: "/api/home/hot1",
  homehot2: "/api/home/hot2",
  homehot3: "/api/home/hot3",
  cityUrl: "/api/aj/getcitycode",
  search: "/api/search",
  details: "/api/details",
  login: "/api/login"
};
/**
 * 请求方法
 */

var api = {
  getHomeHot1: function getHomeHot1(params) {
    return _request["default"].get(base.baseUrl + base.homehot1, {
      params: params
    });
  },
  getHomeHot2: function getHomeHot2(params) {
    return _request["default"].get(base.baseUrl + base.homehot2, {
      params: params
    });
  },
  getHomeHot3: function getHomeHot3(params) {
    return _request["default"].get(base.baseUrl + base.homehot3, {
      params: params
    });
  },
  getCity: function getCity() {
    return _request["default"].get(base.cityUrl);
  },
  getSearchResult: function getSearchResult(params) {
    return _request["default"].get(base.baseUrl + base.search, {
      params: params
    });
  },
  getDetails: function getDetails(params) {
    return _request["default"].get(base.baseUrl + base.details, {
      params: params
    });
  },
  postLogin: function postLogin(params) {
    // console.log(params);
    return _request["default"].post(base.baseUrl + base.login, params);
  }
};
var _default = api;
exports["default"] = _default;