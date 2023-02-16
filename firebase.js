import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCmp8DxyNSbYX9N_jt9pUwqYY1qXPBFFJw",
    authDomain: "e5-firebase.firebaseapp.com",
    projectId: "e5-firebase",
    storageBucket: "e5-firebase.appspot.com",
    messagingSenderId: "397779353882",
    appId: "1:397779353882:web:8ac8c65b4e153887df2ca3"
  };

const app =  firebase.initializeApp(firebaseConfig);
const fireDB = app.firestore();
const auth = app.auth();
export  {app, fireDB, auth};