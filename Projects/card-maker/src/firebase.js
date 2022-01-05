// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyATPrqY24tm5gBMXCJNYS2XjI4BqZ3iYIA",
  authDomain: "business-card-maker-3e068.firebaseapp.com",
  projectId: "business-card-maker-3e068",
  storageBucket: "business-card-maker-3e068.appspot.com",
  messagingSenderId: "1089172561652",
  appId: "1:1089172561652:web:e23fabeb478236a8d888a1",
  measurementId: "G-PL6Z9EXSFV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestor(app);
const analytics = getAnalytics(app);