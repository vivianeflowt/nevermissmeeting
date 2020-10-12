const moment = require('moment')
const sleep = require('system-sleep')
const openLink = require('open')

// Lista de Tarefas
var taskList = []

//Tarefa
// const task1 = {
//   link: "https://trybe.zoom.us/j/5355209477",
//   job: {
//     hour: 17,
//     minute: 35,
//     seconds: 0,
//   },
//   done: false,
// };

const task2 = {
  link: 'https://trybe.zoom.us/j/5355209477',
  job: {
    hour: 01,
    minute: 33,
    seconds: 0,
  },
  done: false,
}

// Adiciona Tarefa na Lista
taskList.push(task2)

// testa se já passou do horário
const taskCheck = (task = {}) => {
  let now = moment()
  let taskTime = moment()
  taskTime.hour(task.job.hour)
  taskTime.minute(task.job.minute)
  taskTime.seconds(task.job.seconds)
  const deltaTime = taskTime.diff(now)
  console.log('.' + deltaTime)
  if (deltaTime <= 0) {
    return true
  }
  return false
}

// Serviço
const start = (tickDelay = 5000) => {
  console.log('PID:' + process.pid)
  while (true) {
    taskList.forEach((task) => {
      if (task.done == false) {
        if (taskCheck(task)) {
          task.done = true
          openLink(task.link)
        }
      }
    })
    sleep(tickDelay)
  }
}

//Inicia os Serviço
start()
