'use strict'

const tap = require('tap')
const lib = require('./index.js')
const cp = require('child_process')

tap.test('ten days', (t) => {
  const tenDays = lib({startDate: '2017-01-01', endDate: '2017-01-10'})
  t.ok(Array.isArray(tenDays))
  t.ok(tenDays.length === 10)
  t.ok(tenDays[0] === '2017-01-01')
  t.ok(tenDays[tenDays.length - 1] === '2017-01-10')
  t.end()
})

tap.test('single day', (t) => {
  const singleDay = lib({startDate: '2017-01-01', endDate: '2017-01-01'})
  t.ok(Array.isArray(singleDay))
  t.ok(singleDay.length === 1)
  t.ok(singleDay[0] === '2017-01-01')
  t.end()
})

tap.test(function cliTwoDays (t) {
  const cmd = `./cli.js 2018-01-01 2018-01-02`

  cp.exec(cmd, {
    shell: 'bash'
  }, (err, stdout, stderr) => {
    t.ifErr(err)

    let outputData
    try {
      outputData = JSON.parse(stdout)
    } catch (e) {
      t.fail(e)
    }

    t.equal(outputData.length, 2)
    t.end()
  })
})

tap.test(function cliHelp (t) {
  const cmd = `./cli.js --help`

  cp.exec(cmd, {
    shell: 'bash'
  }, (err, stdout, stderr) => {
    t.ifErr(err)
    t.ok(stdout.length > 0)
    t.end()
  })
})

tap.test(function cliVersion (t) {
  const cmd = `./cli.js --version`

  cp.exec(cmd, {
    shell: 'bash'
  }, (err, stdout, stderr) => {
    t.ifErr(err)
    t.ok(stdout.length > 0)
    t.end()
  })
})
