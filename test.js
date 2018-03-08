'use strict'

const tap = require('tap')
const lib = require('./index.js')

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
