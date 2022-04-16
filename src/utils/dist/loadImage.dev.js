"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = loadImageAsync;

function loadImageAsync(url) {
  return new Promise(function (resolve, reject) {
    var img = new Image();
    img.src = url;

    img.onload = function () {
      return resolve(url);
    };

    img.onerror = function () {
      return reject("加载失败");
    };
  });
}