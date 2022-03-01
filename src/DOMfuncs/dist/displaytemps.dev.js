"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.showF = showF;
exports.showC = showC;

var _index = require("../index");

function showF(temp, name) {
  var rounded = Math.round(temp * 10) / 10;
  _index.displayTemp.textContent = "".concat(rounded, "F");
  _index.cityName.textContent = name;
}

function showC(temp, name) {
  var rounded = Math.round(temp * 10) / 10;
  _index.displayTemp.textContent = "".concat(rounded, "C");
  _index.cityName.textContent = name;
}