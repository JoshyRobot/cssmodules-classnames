'use strict'

const test = require('tape')
const classnames = require('../')

const testCases = [
  {
    options: [],
    expected: ''
  },
  {
    options: [
      'class1',
      { class1: 'class1-style' }
    ],
    expected: 'class1 class1-style'
  },
  {
    options: [
      { class1: false, class2: true },
      {
        class1: 'class1-style',
        class2: 'class2-style'
      }
    ],
    expected: 'class2 class2-style'
  },
  {
    options: [
      { class1: 'truthy', class2: 0 },
      {
        class1: 'class1-style',
        class2: 'class2-style'
      }
    ],
    expected: 'class1 class1-style'
  },
  {
    options: [
      ['class1', 'class2'],
      {
        class1: 'class1-style',
        class2: 'class2-style'
      }
    ],
    expected: 'class1 class2 class1-style class2-style'
  }
]

test('expected values', (t) => {
  t.plan(testCases.length)

  testCases.forEach((testCase) => {
    const returned = classnames(...testCase.options)
    t.equal(returned, testCase.expected)
  })
})
