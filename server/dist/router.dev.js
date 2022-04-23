"use strict";

var express = require('express');

var router = express.Router();

var homehot = require('./data/home/homehot'); // const searchResult=require('./data/search/index')


var datails = require('./data/details/index');

var url = require("url");

var Mock = require('mockjs');

var details = require('./data/details/index');

var Random = Mock.Random;
router.get('/home/hot1', function (req, res) {
  var cityName = url.parse(req.url, true).query.cityName;
  var dataHot1 = new Array(4).fill(0).map(function () {
    return Mock.mock({
      "id": '@integer(0, 100)',
      "title": cityName + Random.ctitle(1, 2),
      "img": Random.image('71x71', Random.color(), '#FFF', "ShelLive"),
      "link": "https://luryzhu.github.io/"
    });
  });
  res.send({
    status: 200,
    // result: homehot["北京"].hot1
    result: dataHot1
  });
});
router.get('/home/hot2', function (req, res) {
  var cityName = url.parse(req.url, true).query.cityName;
  var dataHot2 = new Array(4).fill(0).map(function () {
    return Mock.mock({
      "id": '@integer(0, 100)',
      "title": cityName + Random.ctitle(1, 2),
      "img": Random.image('71x71', Random.color(), '#FFF', "ShelLive"),
      "link": "https://luryzhu.github.io/"
    });
  });
  res.send({
    status: 200,
    // result: homehot["北京"].hot2
    result: dataHot2 // result: []

  });
});
router.get('/home/hot3', function (req, res) {
  var cityName = url.parse(req.url, true).query.cityName;
  var dataHot3 = new Array(10).fill(0).map(function () {
    return Mock.mock({
      "id": Random.id(),
      "title": cityName + Random.ctitle(6, 12),
      "houseType": "17/19层| 4室1厅 - 273.97 ㎡",
      "price": Random.integer(10, 30) * 100,
      "rentType": "整租",
      "img": Random.image("200x".concat(Random.integer(150, 200)), Random.color(), '#FFF', 'ShelLive')
    });
  });
  res.send({
    status: 200,
    // result: homehot["北京"].hot2
    result: dataHot3 // result: []

  });
});
router.get('/search', function (req, res) {
  var keywords = url.parse(req.url, true).query.keywords; // console.log(req.url);

  console.log(keywords);
  var data = new Array(5).fill(0).map(function () {
    return Mock.mock({
      "id": Random.id(),
      "title": Random.ctitle(3, 5) + keywords,
      "houseType": "17/19层| 4室1厅 - 273.97 ㎡",
      "price": "<h3>130000</h3>",
      "rentType": "整租",
      "img": Random.image('800x600', Random.color(), '#FFF', 'ShelLive')
    });
  });
  var dataSearch = Mock.mock({
    // "hasMore": Random.boolean(),
    "hasMore": true,
    "data": data
  });
  res.send({
    status: 200,
    result: dataSearch
  });
});
router.get('/details', function (req, res) {
  var id = url.parse(req.url, true).query.id;
  console.log(id);
  res.send({
    status: 200,
    result: details
  });
});
router.post('/login', function (req, res) {
  // console.log(req.body);
  var _req$body = req.body,
      username = _req$body.username,
      password = _req$body.password;
  console.log(username, password);

  if (username && password) {
    res.send({
      status: 200,
      token: "kjhklsfaugdfigdbds.sfhdksfldgsigfydgshdb",
      nickname: username + "nick"
    });
  } else {
    res.send({
      status: 400,
      msg: "用户名或密码错误"
    });
  }
});
router.get('/mock', function (req, res) {
  res.send(Random.image('70x70', '#ccc', '#FFF', 'ShelLive'));
});
module.exports = router;