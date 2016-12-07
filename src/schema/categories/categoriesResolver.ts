import got = require('got')
import snapshotToArray from '../../lib/snapshotToArray'

function categoriesResolver (root, args: any, req) {
  return got(process.env['FIREBASE_URL'] + `categories.json`, { json: true })
      .then(res => snapshotToArray(res.body))
}

module.exports = categoriesResolver
