'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./react-table-skeleton.cjs.production.js')
} else {
  module.exports = require('./react-table-skeleton.cjs.development.js')
}
