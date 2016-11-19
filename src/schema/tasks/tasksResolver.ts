import firebase from '../../lib/firebase'
import snapshotToArray from '../../lib/snapshotToArray'

function tasksResolver (root, args: any, req) {
  return firebase.database().ref('tasks').once('value').then((snap) => {
    return snapshotToArray(snap.val())
  })
}

module.exports = tasksResolver
