const hash = require('object-hash')

const ScheduleSchema = {
  title: '',
  link: '',
  hour: 0,
  minute: 0,
  seconds: 0,
  done: false,
  action: null
}

const _add = function () {
  //
}

const _remove = function () {
  //
}

const _list = function () {
  //
}

module.exports.add = _add
module.exports.remove = _remove
module.exports.list = _list

module.exports.ScheduleSchema = ScheduleSchema
