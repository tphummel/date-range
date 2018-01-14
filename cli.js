#!/usr/bin/env node

'use strict'

const lib = require('./index')
const argv = require('minimist')(process.argv, {
  boolean: ['help', 'version'],
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

const result = lib({startDate: argv._[2], endDate: argv._[3]})
console.log(JSON.stringify(result))

function printUsage () {
  const usage = `
  date-range.

  Usage:
    date-range <start> <end>
    date-range -h | --help
    date-range -v | --version

  Options:
    -h --help     Show this screen.
    -v --version  Show version.
  `
  console.log(usage)
}
