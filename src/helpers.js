'use strict'

const arrflatten = require('arr-flatten')
const datefns = require('date-fns')
const flatargs = require('flat-arguments')
const pkgdir = require('pkg-dir')
const serialize = require('serialize-javascript')
const typeDetect = require('type-detect')
const loadJson = require('load-json-file')
const saveJson = require('write-json-file')
const jsonFile = require('jsonfile')

const getPID = function () {
  return process.pid
}

const getRootPath = function () {
  //return pkgdir.sync
}

module.exports = {
  getRootPath,
  getPID
}
