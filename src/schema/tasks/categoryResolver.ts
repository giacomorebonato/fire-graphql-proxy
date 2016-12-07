import got = require('got')
import snapshotToArray from '../../lib/snapshotToArray'

function categoryResolver (root, args: any, req) {
  let categoryId

  if (root && root.category_uid) {
    categoryId = root.category_uid
  } else {
    return null
  }

  return got(process.env['FIREBASE_URL'] + `categories/${categoryId}.json`, { json: true })
    .then(res => {
      res.body.uid = categoryId

      return res.body
    })
}

export default categoryResolver
