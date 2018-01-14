'use strict'

const tap = require('tap')
const lib = require('./index.js')

const tenDays = lib({startDate: '2017-01-01', endDate: '2017-01-10'})
tap.ok(Array.isArray(tenDays))
tap.ok(tenDays.length === 10)
tap.ok(tenDays[0] === '2017-01-01')
tap.ok(tenDays[tenDays.length - 1] === '2017-01-10')

const singleDay = lib({startDate: '2017-01-01', endDate: '2017-01-01'})
tap.ok(Array.isArray(singleDay))
tap.ok(singleDay.length === 1)
tap.ok(singleDay[0] === '2017-01-01')
