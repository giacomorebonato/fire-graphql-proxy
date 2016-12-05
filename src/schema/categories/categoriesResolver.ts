import firebase from '../../lib/firebase'
import snapshotToArray from '../../lib/snapshotToArray'

function categoriesResolver (root, args: any, req) {
  return firebase.database().ref(`categories`).once('value').then((snap) => {
    return snapshotToArray(snap.val())
  })
}

module.exports = categoriesResolver
