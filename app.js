const path = require('path')
const nmm = require('./src/main')

const __PID = nmm.getPID()
const __ROOTPATH = nmm.getRootPath()


console.log('-> Never Miss a Meeting!')
console.log('PID: ' + __PID)
console.log('ROOT: ' + __ROOTPATH)
