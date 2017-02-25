'use strict'

const standard = require('standard')
const test = require('tape')

function prettifyErrors (t, lint) {
  lint.results.forEach((info) => {
    if (info.errorCount === 0) return

    info.messages.forEach((message) => {
      let errMessage = ''
      errMessage += info.filePath.replace(process.cwd(), '')
      errMessage += ':' + message.line + ':' + message.column
      errMessage += ': ' + message.message

      console.log(errMessage)
    })
  })
}

test('standard', (t) => {
  standard.lintFiles('**/*.js', (err, lint) => {
    if (err) return t.fail(err)

    prettifyErrors(t, lint)

    if (lint.errorCount === 0) {
      t.pass('passed standard')
    } else {
      t.fail('failed standard')
    }

    t.end()
  })
})
