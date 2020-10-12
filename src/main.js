/*
 * never miss a meeting :
 * Authors: Viviane Florido / Hugo Braga
 * Licensed under the MIT license.
 */

'use strict'

const helper = require('./helpers')
const schedule = require('./schedule')

const getPID = function () {
  return process.pid
}


module.exports.schedule = schedule

module.exports.getPID = helper.getPID
module.exports.getRootPath = helper.getRootPath
