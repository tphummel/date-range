#!/usr/bin/env node

'use strict'

const lib = require('./index')
const args = require('minimist')(process.argv)

const result = lib({startDate: args._[2], endDate: args._[3]})
console.log(JSON.stringify(result))

// function showUsage () {
//   var usage = `
// node range.js startDate endDate
//   startDate inclusive (required): YYYY-MM-DD
//   endDate exclusive (required): YYYY-MM-DD
//   `
//   console.log(usage)
// }

// if (!cliStartDate || !cliEndDate) {
//   console.error('ERROR: start and end date required')
//   showUsage()
//   process.exit(1)
// }
