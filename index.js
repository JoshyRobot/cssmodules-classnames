'use strict'

var origClassnames = require('classnames')

function classnames () {
  var args = [].slice.call(arguments)
  var classes = args.slice(0, -1)
  var styles = args.slice(-1)[0]

  if (args.length <= 1) return ''

  var names = origClassnames.apply(classnames, classes).split(' ')

  var styleNames = []
  names.forEach(function (name) {
    styleNames.push(styles[name])
  })

  var combined = names.concat(styleNames)
  var className = combined.join(' ').trim()

  return className
}

module.exports = classnames
