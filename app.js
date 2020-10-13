const path = require('path')
const nmm = require('./src/main')
const fs = require('fs')

const _TASK_PATH = path.join(__dirname, 'tasks')

const errorLog = function (text = '') {
  console.clear()
  console.log('[error] Never Miss a Meeting!')
  console.log(' ')
  console.log(text)
}

console.clear()
//var myArgs = process.argv.slice(2)
//console.log('args: ', myArgs)
//console.log(process.argv)

if (!fs.existsSync(_TASK_PATH)) {
  errorLog('task folder not found!')
} else {
  nmm.task.loadTasks(_TASK_PATH)
  nmm.task.start()
  nmm.task.log()
}
