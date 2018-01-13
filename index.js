'use strict'

const {DateTime} = require('luxon')

function getDateSequence ({startDate, endDate}) {
  // todo: throw if both args are not present
  // todo: throw if both args are not iso8601 date

  const start = DateTime.fromISO(startDate).startOf('day')
  const end = DateTime.fromISO(endDate).startOf('day')

  let sequence = []
  let current = start
  while (current.diff(end).as('days') <= 0) {
    sequence.push(current.toISODate())
    current = current.plus({days: 1})
  }

  return sequence
}

module.exports = getDateSequence
