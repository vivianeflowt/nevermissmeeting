'use strict'

const fs = require('fs')
const path = require('path')
const jsonfile = require('jsonfile')
const moment = require('moment')
const openLink = require('open')
const cron = require('node-cron')

var taskList = []

const TaskSchema = {
  filename: '',
  title: '',
  link: '',
  hour: 0,
  minute: 0,
  seconds: 0,
  done: false,
}
const taskCheck = (task = {}) => {
  let now = moment()
  let limit = moment()
  let _task = {}

  Object.assign(_task, TaskSchema)
  Object.assign(_task, task)

  if (_task.done == false) {
    return false
  }

  limit.hour(task.hour)
  limit.minute(task.minute)
  limit.seconds(task.seconds)

  const deltaTime = limit.diff(now)

  console.log('.' + deltaTime)

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
    _task.filename = file
    taskList.push(_task)
  })
  //console.log(taskList)
}

const start = function () {
  cron.schedule('1 * * * * *', () => {
    checkAllTasks()
    //console.log('.')
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
  loadTasks,
  start
}
