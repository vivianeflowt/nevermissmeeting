'use strict'

const fs = require('fs')
const path = require('path')
const jsonfile = require('jsonfile')
const getRootPath = require('./helpers').getRootPath

// DEFS
const __TASK_PATH = path.join(getRootPath(), 'tasks')

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

const loadTasks = function () {
    taskList = []
    fs.readdirSync(__TASK_PATH).forEach(function (file) {
        let _task = {}
        let _obj = jsonfile.readFileSync(__TASK_PATH + '/' + file)
        Object.assign(_task, TaskSchema)
        Object.assign(_task, _obj)
        _task.filename = file
        taskList.push(_task)
    })
    console.log(taskList)
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
    loadTasks,
}

module.exports.add = _add
module.exports.remove = _remove
module.exports.list = _list
