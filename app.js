const path = require('path')
const nmm = require('./src/main')

const __PID = nmm.getPID()
const __ROOTPATH = nmm.getRootPath()

console.log('-> Never Miss a Meeting!')
console.log('')
//console.log('PID: ' + __PID)
//console.log('ROOT: ' + __ROOTPATH)

var myArgs = process.argv.slice(2);
console.log('args: ', myArgs);

console.log(process.argv)

nmm.schedule.getTaskFileList(true)
