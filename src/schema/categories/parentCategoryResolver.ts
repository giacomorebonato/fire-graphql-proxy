import firebase from '../../lib/firebase'

module.exports = (root, args: any, req) => {
  if (!root.parentCategory_uid) return null

  return firebase.database().ref(`categories/${root.parentCategory_uid}`)
    .once('value')
    .then((snap: firebase.database.DataSnapshot) => {
      const data = snap.val()
      data.uid = snap.key

      return data
    })
}
