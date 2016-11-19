import firebase = require('firebase')

const config = {
  apiKey: "AIzaSyCOrWLcvHXXtG4mdExRtwRNAQLoUSpyt6E",
  authDomain: "fire-graphql.firebaseapp.com",
  databaseURL: "https://fire-graphql.firebaseio.com",
  storageBucket: "fire-graphql.appspot.com",
  messagingSenderId: "758411964744"
}
firebase.initializeApp(config)

export default firebase
