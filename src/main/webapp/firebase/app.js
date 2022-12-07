// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBbMoK9YIJd_ZxqrmuDR23mSwpWeTt3rAs",
  authDomain: "kpn-firebase-ryan.firebaseapp.com",
  projectId: "kpn-firebase-ryan",
  storageBucket: "kpn-firebase-ryan.appspot.com",
  messagingSenderId: "975444792548",
  appId: "1:975444792548:web:d043001c90f8a4520b08f1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

console.log(app.name);  // "[app.name]"

// Option 1: Access Firebase services via the defaultProject variable
let defaultStorage = getStorage(defaultProject);
let defaultFirestore = getFirestore(defaultProject);

// Option 2: Access Firebase services using shorthand notation
defaultStorage = getStorage();
defaultFirestore = getFirestore();