'use strict'

const fs = require('fs');
const path = require('path');
const pkgDir = require('pkg-dir')
const typeDetect = require('type-detect')
const arrflatten = require('arr-flatten')


const getPID = function () {
  return process.pid
}

const getRootPath = function () {
  return pkgDir.sync(__dirname)
}

const getType = function (value) {
  return typeDetect(value).toLowerCase
}


module.exports = {
  getType,
  getRootPath,
  getPID,
}
