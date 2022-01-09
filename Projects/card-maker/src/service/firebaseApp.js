// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";

import "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyATPrqY24tm5gBMXCJNYS2XjI4BqZ3iYIA",
  authDomain: "business-card-maker-3e068.firebaseapp.com",
  projectId: "business-card-maker-3e068",
  databseURL: "https://business-card-maker-3e068.firebaseio.com",
  //   storageBucket: "business-card-maker-3e068.appspot.com",
  //   messagingSenderId: "1089172561652",
  //   appId: "1:1089172561652:web:e23fabeb478236a8d888a1",
  //   measurementId: "G-PL6Z9EXSFV"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);


export default firebaseApp;
