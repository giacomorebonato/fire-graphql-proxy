import firebase from '../../lib/firebase'
import snapshotToArray from '../../lib/snapshotToArray'

function categoryResolver (root, args: any, req) {
  let categoryId

  if (root && root.category_uid) {
    categoryId = root.category_uid
  } else {
    return null
  }

  return firebase.database().ref(`categories/${categoryId}`).once('value').then((snap) => {
    const data = snap.val()
    data.uid = categoryId

    return data
  })
}

export default categoryResolver
