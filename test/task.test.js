const assert = require('assert')
const task = require('../src/task')
const hash = require('object-hash')

test('task factory return a valid task object', () => {
  // '109085beaaa80ac89858b283a64f7c75d7e5bb12'
  assert.strictEqual(typeof task.TaskFactory(), 'object')
  assert.strictEqual(
    task.TaskFactory().hash,
    '109085beaaa80ac89858b283a64f7c75d7e5bb12'
  )
})
