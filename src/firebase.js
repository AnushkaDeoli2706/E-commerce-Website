// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDqZ0h_kpSdyCcgomCXF5wJ9_c3sUcnmpo",
  authDomain: "clone-56b61.firebaseapp.com",
  projectId: "clone-56b61",
  storageBucket: "clone-56b61.appspot.com",
  messagingSenderId: "958727683946",
  appId: "1:958727683946:web:35a486e2d558418e2bef13",
  measurementId: "G-5L7X9WBNKB"
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };