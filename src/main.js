/*
 * never miss a meeting :
 * Authors: Viviane Florido / Hugo Braga
 * Licensed under the MIT license.
 */

'use strict'

const TaskFactory = require('./task').TaskFactory
const helpers = require('./helpers')

const getPID = function () {
  return process.pid
}


//  Dev-Tools
module.exports.dev = {
  TaskFactory,
}

module.exports.getPID = helpers.getPID
