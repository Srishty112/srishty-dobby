import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/storage'
import 'firebase/auth'


// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyASRFBWQFw5l35A8cE9mC0aYyaEIZ6HNHY",
  authDomain: "image-search-b30d5.firebaseapp.com",
  projectId: "image-search-b30d5",
  storageBucket: "image-search-b30d5.appspot.com",
  messagingSenderId: "52522531596",
  appId: "1:52522531596:web:7273c53eacecdd25d06729",
  measurementId: "G-4BF6GPJFL9"
};
// Initialize Firebase

  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({timestampsInSnapshots : true})
  const storage= firebase.storage()


  export {storage, firebase as default};