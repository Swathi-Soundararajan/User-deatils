import firebase from 'firebase/app'
import 'firebase/database'
var firebaseConfig = {
    apiKey: "AIzaSyC868lBTNYUUlupTcA0auuA4-uPhO4JH0E",
    authDomain: "social-41fe4.firebaseapp.com",
    databaseURL: "https://social-41fe4.firebaseio.com",
    projectId: "social-41fe4",
    storageBucket: "social-41fe4.appspot.com",
    messagingSenderId: "869628230002",
    appId: "1:869628230002:web:6cb12cea9df41c2ae345eb"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//   firebase.firestore().settings({timestampsInSnapshots:true})

  export default firebase