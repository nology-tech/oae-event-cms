// import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";



// const app = initializeApp({
 
//   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//   databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_FIREBASE_APP_ID
// })

const  firebaseConfig = {
    apiKey: "AIzaSyApdv5AauG5Wk5J0ymmKlKsaqYoOB4KNHE",
    authDomain: "auth-development-59278.firebaseapp.com",
    projectId: "auth-development-59278",
    storageBucket: "auth-development-59278.appspot.com",
    messagingSenderId: "160503494324",
    appId: "1:160503494324:web:7cb341380c7fd50a1cc9e1"
  }


  const app = initializeApp(firebaseConfig);
export const auth = app.auth
export default app

