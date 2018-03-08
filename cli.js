#!/usr/bin/env node

'use strict'

const lib = require('./index')
const argv = require('minimist')(process.argv, {
  boolean: ['help', 'version', 'hours'],
  alias: {
    h: 'help',
    v: 'version'
  }
})

if (argv.help) {
  printUsage()
  process.exit(0)
}

if (argv.version) {
  console.log(require('./package.json').version)
  process.exit(0)
}

const result = lib({
  startDate: argv._[2],
  endDate: argv._[3],
  withHours: argv.hours
})
console.log(JSON.stringify(result))

function printUsage () {
  const usage = `
  date-range.

  Usage:
    date-range <start> <end>
    date-range --hours <start> <end>
    date-range -h | --help
    date-range -v | --version

  Options:
    --hours  Print an item for each day-hour combination (24 per day)
    -h --help     Show this screen.
    -v --version  Show version.

  Examples:
    date-range 2017-01-01 2017-12-31
    date-range 2018-03-01 2018-03-15
  `
  console.log(usage)
}
