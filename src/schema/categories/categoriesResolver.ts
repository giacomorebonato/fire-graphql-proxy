import firebase from '../../lib/firebase'
import snapshotToArray from '../../lib/snapshotToArray'

function categoryResolver (root, args: any, req) {
  return firebase.database().ref(`categories`).once('value').then((snap) => {
    return snapshotToArray(snap.val())
  })
}

module.exports = categoryResolver
