import { getFirestore } from "firebase/firestore";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBI9OHzf6Hmwki8OB1rQ_uDXvv5pdaQ3T0",
  authDomain: "task-app-581d2.firebaseapp.com",
  projectId: "task-app-581d2",
  storageBucket: "task-app-581d2.appspot.com",
  messagingSenderId: "1037581267801",
  appId: "1:1037581267801:web:075b50290c449efc045248",
  measurementId: "G-6YP480S64M",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
