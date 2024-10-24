// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API,
  authDomain: "streammax-aa90f.firebaseapp.com",
  projectId: "streammax-aa90f",
  storageBucket: "streammax-aa90f.appspot.com",
  messagingSenderId: "32045106909",
  appId: "1:32045106909:web:be039e2d023e560e0abd34",
  measurementId: "G-RZQ9KCLSMH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

console.log(analytics);

export const auth = getAuth();