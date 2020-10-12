const path = require('path')
const nmm = require('./src/main')

const _TASK_PATH = path.join(__dirname, 'tasks')

console.log('-> Never Miss a Meeting!')
console.log('')

var myArgs = process.argv.slice(2)
console.log('args: ', myArgs)

console.log(process.argv)

nmm.schedule.loadTasks(_TASK_PATH)
