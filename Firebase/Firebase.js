// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCbN48sqUuxUjDnAlURd7IGAtKs_mk94YE",
  authDomain: "btgk-efa88.firebaseapp.com",
  projectId: "btgk-efa88",
  storageBucket: "btgk-efa88.appspot.com",
  messagingSenderId: "509810771912",
  appId: "1:509810771912:web:ffb02ae80e756cd004a2fd",
  measurementId: "G-S8T3CV3Z1N"
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase };