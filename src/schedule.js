'use strict'
//
const fs = require('fs');
const path = require('path');
//
const jsonfile = require('jsonfile')
const serialize = require('serialize-javascript')
const hash = require('object-hash')

//
const getRootPath = require('./helpers').getRootPath


// DEFS
const __TASK_PATH = path.join(getRootPath(), 'tasks');

//module.exports.save
const getTaskFileList = function (verbose = false) {
  let fileList = []
  fs.readdir(__TASK_PATH, function (err, files) {
    //handling error
    if (err) {
      return console.log('Unable to scan directory: ' + err);
    }
    //listing all files using forEach
    files.forEach(function (file) {
      if (verbose) {
        console.log(file)
      }
      fileList.push(file)
      // Do whatever you want to do with the file
    });
  });
  return fileList
}

const ScheduleSchema = {
  title: '',
  link: '',
  hour: 0,
  minute: 0,
  seconds: 0,
  done: false,
  action: null,
}

const _add = function (schema = {}) {
  //
}

const _remove = function (schema = {}) {
  //
}

const _list = function () {
  //
}


module.exports = {
  getTaskFileList
}
module.exports.add = _add
module.exports.remove = _remove
module.exports.list = _list

module.exports.ScheduleSchema = ScheduleSchema
