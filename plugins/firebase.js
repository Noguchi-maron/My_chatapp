import Firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firestore'

if(!Firebase.apps.length) {
  Firebase.initializeApp({
    apiKey: "AIzaSyDGm1FZ4xO_Afs63a-6sidmFMTgZfzJtXs",
    authDomain: "my-chatapp-3cac7.firebaseapp.com",
    projectId: "my-chatapp-3cac7",
    storageBucket: "my-chatapp-3cac7.appspot.com",
    messagingSenderId: "413956571755",
    appId: "1:413956571755:web:b8ae49b2ffe004d3ff672e",
    measurementId: "G-ZM2B1N2749"
  })
}

export default (context, inject) => {
  const $fb = {
    app: Firebase.app,
    auth: Firebase.auth,
    firestore: Firebase.firestore
  }
  inject('fb', $fb)
}
