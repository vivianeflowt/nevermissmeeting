'use strict'

const fs = require('fs')
const path = require('path')
const typeDetect = require('type-detect')
const arrflatten = require('arr-flatten')

const getPID = function () {
    return process.pid
}

const getType = function (value) {
    return typeDetect(value).toLowerCase
}

module.exports = {
    getType,
    getPID,
}
