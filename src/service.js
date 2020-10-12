const moment = require('moment')
const openLink = require('open')
const helper = require('./helpers')
const cron = require('node-cron');

var scheduleList = []

//taskList.push(task2)

const scheduleCheck = (schedule = {}) => {
  let now = moment()
  let limit = moment()
  limit.hour(schedule.hour)
  limit.minute(schedule.minute)
  limit.seconds(schedule.seconds)
  const deltaTime = limit.diff(now)
  console.log('.' + deltaTime)
  if (deltaTime <= 0) {
    return true
  }
  return false
}

// Serviço
// const start = (tickDelay = 5000) => {
//   console.log('PID:' + process.pid)
//   while (true) {
//     taskList.forEach((task) => {
//       if (task.done == false) {
//         if (taskCheck(task)) {
//           task.done = true
//           openLink(task.link)
//         }
//       }
//     })
//     sleep(tickDelay)
//   }
// }


module.exports.ScheduleSchema = ScheduleSchema
