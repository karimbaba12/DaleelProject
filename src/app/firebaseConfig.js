// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCtXJnU6U8qCV791UiMGQi7lqnYSLnDhjk",
  authDomain: "daleelagency.firebaseapp.com",
  databaseURL:
    "https://daleelagency-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "daleelagency",
  storageBucket: "daleelagency.appspot.com",
  messagingSenderId: "298942454081",
  appId: "1:298942454081:web:3b22a1ec21c5b8ba68a9c0",
  measurementId: "G-WEBD4092PD",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
export { database };
