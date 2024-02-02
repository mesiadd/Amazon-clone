// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAteji6-i8E3Erm0pY5xgM8cXbvmuSIPDM",
  authDomain: "clone-d0a5f.firebaseapp.com",
  projectId: "clone-d0a5f",
  storageBucket: "clone-d0a5f.appspot.com",
  messagingSenderId: "715422132557",
  appId: "1:715422132557:web:4d0fe53b059d13b704af04",
  measurementId: "G-VZQ5HPBKBZ",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = app.firestore();
export { auth, db };


