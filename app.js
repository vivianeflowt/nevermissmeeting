const path = require('path')
const nmm = require('./src/main')


console.log('-> Never Miss a Meeting!')
console.log('')

var myArgs = process.argv.slice(2);
console.log('args: ', myArgs);

console.log(process.argv)

nmm.schedule.loadTasks()
