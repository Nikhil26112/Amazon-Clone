import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA54dyus0Mp-rnBn1RdC1ripQRGfwgMsKM",
    authDomain: "challenge-be079.firebaseapp.com",
    projectId: "challenge-be079",
    storageBucket: "challenge-be079.appspot.com",
    messagingSenderId: "948965175529",
    appId: "1:948965175529:web:1eba81c1fc55d5964c4078",
    measurementId: "G-P83B1VKERY"
  };

 const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth }