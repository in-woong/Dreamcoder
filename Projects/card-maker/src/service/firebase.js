// Import the functions you need from the SDKs you need
import firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  databseURL: process.env.REACT_APP_FIREBASE_DB_URL,
  //   storageBucket: "business-card-maker-3e068.appspot.com",
  //   messagingSenderId: "1089172561652",
  //   appId: "1:1089172561652:web:e23fabeb478236a8d888a1",
  //   measurementId: "G-PL6Z9EXSFV"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  