"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setUnitType = setUnitType;
exports.getUnitType = getUnitType;
exports.changeUnits = changeUnits;
var unitType = 'metric';

function setUnitType(type) {
  unitType = type;
}

function getUnitType() {
  return unitType;
}

function changeUnits(e) {
  if (e.target.id === 'cBtn') {
    unitType = 'metric';
  } else {
    unitType = 'imperial';
  }
}