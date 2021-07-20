import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDBnJoi0ZzVOAa7hrE3QSiqvNtNWH36PWE",
  authDomain: "food-g-app.firebaseapp.com",
  projectId: "food-g-app",
  storageBucket: "food-g-app.appspot.com",
  messagingSenderId: "612023342323",
  appId: "1:612023342323:web:b415037e1bf07dbc591386",
  measurementId: "G-Q29BM70CC8",
};

!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();
firebase.analytics();

const auth = firebase.auth();
const db = firebase.firestore();
const googleProvider = new firebase.auth.GoogleAuthProvider();
const facebookProvider = new firebase.auth.FacebookAuthProvider();

auth.setPersistence("local");

export { googleProvider, facebookProvider, auth, db };
