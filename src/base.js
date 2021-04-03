import Rebase from 're-base'
import firebase from 'firebase/app'
import 'firebase/database'

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyDLsDHDR5MjjOF7MnhG9YOfEOkA7RwIiM4',
  authDomain: 'my-chat-box-fae4a.firebaseapp.com',
  databaseURL: 'https://my-chat-box-fae4a-default-rtdb.europe-west1.firebasedatabase.app'
}
)

const base = Rebase.createClass(firebase.database())

export { firebaseApp }

export default base
