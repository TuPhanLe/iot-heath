import firebase from 'firebase'

const firebaseConfig = {
  apiKey: 'AIzaSyDdzwfKxxGZjfmz98z37DAO5ijjxExJGD4',
  authDomain: 'iotheath-b8ccc.firebaseapp.com',
  databaseURL: 'https://iotheath-b8ccc-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'iotheath-b8ccc',
  storageBucket: 'iotheath-b8ccc.appspot.com',
  messagingSenderId: '105326368648',
  appId: '1:105326368648:web:34dde41b68e9d6a903cc3d'
}

export const app = firebase.initializeApp(firebaseConfig)
export const db = app.database()
export const ref = db.ref('measure')
