import got = require('got')

module.exports = (root, args: any, req) => {
  if (!root.parentCategory_uid) return null

  return got(process.env['FIREBASE_URL'] + `categories/${root.parentCategory_uid}.json`, { json: true })
    .then(res => {
      res.body.uid = root.parentCategory_uid

      return res.body
    })
}
