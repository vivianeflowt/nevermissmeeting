'use strict'

const hash = require('object-hash')

const TaskFactory = function (callback) {
    let _task = {
        hash: '',
        action: null,
    }
    if (
        callback !== undefined &&
        callback !== null &&
        typeof callback == 'function'
    ) {
        console.log(callback)
        _task.action = callback
    }
    _task.hash = hash(_task.action)
    return _task
}

module.exports = {
    TaskFactory,
}
