import got = require('got')
import snapshotToArray from '../../lib/snapshotToArray'

function categoriesResolver (root, args: any, req) {
  // req.header headers of original request
  // you can forward here the Authorization to the new request
  return got(process.env['FIREBASE_URL'] + `categories.json`, { json: true })
      .then(res => snapshotToArray(res.body))
}

module.exports = categoriesResolver
