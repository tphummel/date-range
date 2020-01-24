'use strict'

const { DateTime } = require('luxon')

function getDateSequence ({ startDate, endDate, withHours }) {
  // todo: throw if both args are not present
  // todo: throw if both args are not iso8601 date

  const start = DateTime.fromISO(startDate).startOf('day')
  const end = DateTime.fromISO(endDate).plus({ days: 1 }).startOf('day')

  const sequence = []
  let current = start
  while (current.diff(end).as('days') < 0) {
    let isoSubstringLength
    let increment

    if (withHours) {
      isoSubstringLength = 13
      increment = { hours: 1 }
    } else {
      isoSubstringLength = 10
      increment = { days: 1 }
    }

    sequence.push(current.toISO().substr(0, isoSubstringLength))
    current = current.plus(increment)
  }

  return sequence
}

module.exports = getDateSequence
