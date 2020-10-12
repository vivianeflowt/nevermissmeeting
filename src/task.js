'use strict'

const fs = require('fs')
const path = require('path')
const jsonfile = require('jsonfile')
const moment = require('moment')
const openLink = require('open')
const cron = require('node-cron')

var taskList = []

var checkCount = 0

const TaskSchema = {
  filename: '',
  title: '',
  link: '',
  hour: 0,
  minute: 0,
  seconds: 0,
  done: false,
}

const log = function () {
  checkCount++
  console.clear()
  console.log('[' + checkCount + '] Never Miss a Meeting!')
  console.log(' ')
  taskList.forEach((task) => {
    var _taskdt = task.hour.toString().padStart(2, '0') + ':' + task.minute.toString().padStart(2, '0') + ':' + task.seconds.toString().padStart(2, '0')
    var _taskstats = '[WAIT]'
    if (task.done) {
      var _taskstats = '[DONE]'
    }
    console.log(' ' + _taskdt + ' ' + task.title + ' ' + _taskstats)
  })
}
const taskCheck = (task = {}) => {
  let now = moment()
  let limit = moment()
  if (task.done == true) {
    return false
  }
  limit.hour(task.hour)
  limit.minute(task.minute)
  limit.seconds(task.seconds)

  const deltaTime = limit.diff(now)

  if (deltaTime <= 0) {
    return true
  }
  return false
}

const loadTasks = function (directory) {
  taskList = []
  if (directory == undefined || directory == null || directory == '') {
    throw error('needs a task path')
  }
  fs.readdirSync(directory).forEach(function (file) {
    let _task = {}
    let _obj = jsonfile.readFileSync(directory + '/' + file)
    Object.assign(_task, TaskSchema)
    Object.assign(_task, _obj)
    if (_task.title.trim() == '') {
      _task.title = 'Task'
    }
    _task.filename = file
    taskList.push(_task)
  })
  //console.log(taskList)
}

const start = function () {
  if (taskList.length == 0) {
    console.log('no tasks')
  }
  cron.schedule('1 * * * * *', () => {
    checkAllTasks()
    log()
  });
}

const checkAllTasks = function () {
  taskList.forEach((task) => {
    if (task.done == false) {
      if (taskCheck(task)) {
        task.done = true
        openLink(task.link)
      }
    }
  })
}


module.exports = {
  log,
  loadTasks,
  start
}
