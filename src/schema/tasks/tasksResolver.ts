import got = require('got')
import snapshotToArray from '../../lib/snapshotToArray'

function tasksResolver (root, args: any, req) {
  return got(process.env['FIREBASE_URL'] + 'tasks.json', { json: true })
    .then(res => snapshotToArray(res.body))
}

module.exports = tasksResolver
