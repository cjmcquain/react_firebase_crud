import * as firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyAUUFuCjspbu5PyUChMvbu_2x2DzCLSj7g",
    authDomain: "react-firebase-crud-e3133.firebaseapp.com",
    databaseURL: "https://react-firebase-crud-e3133.firebaseio.com",
    projectId: "react-firebase-crud-e3133",
    storageBucket: "react-firebase-crud-e3133.appspot.com",
    messagingSenderId: "500056499762",
    appId: "1:500056499762:web:5981c3b8338cd2d8277e2b"
  };
  // Initialize Firebase
  let fireDb = firebase.initializeApp(firebaseConfig);

  export default fireDb.database().ref();