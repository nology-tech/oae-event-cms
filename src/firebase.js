
import { initializeApp } from "firebase/app";
import 'firebase/compat/auth';
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

