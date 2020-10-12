'use strict'

const fs = require('fs')
const path = require('path')
const jsonfile = require('jsonfile')
const getRootPath = require('./helpers').getRootPath

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
    console.log(taskList)
}

module.exports = {
    loadTasks,
}
