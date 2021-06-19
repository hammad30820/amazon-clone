import firebase from "firebase";


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBotdcNw-Mp4b-nDX2zLUr7OJICcXGrjEs",
    authDomain: "clone-16bc5.firebaseapp.com",
    projectId: "clone-16bc5",
    storageBucket: "clone-16bc5.appspot.com",
    messagingSenderId: "438721319140",
    appId: "1:438721319140:web:f230433ec8f962e675dcf1",
    measurementId: "G-Y4KSEF5JZT"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth, firebaseApp};