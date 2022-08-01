// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database"
import "firebase/database";


const firebaseConfig = {
  apiKey: "AIzaSyCDueMQWkI0cHA6C0DTynn6nITQ42STF84",
  authDomain: "foods-lh.firebaseapp.com",
  databaseURL: "https://foods-lh-default-rtdb.firebaseio.com",
  projectId: "foods-lh",
  storageBucket: "foods-lh.appspot.com",
  messagingSenderId: "5256630631",
  appId: "1:5256630631:web:a2d04d1f0d6aed9ee29fc2"
};

const firebaseApp = initializeApp(firebaseConfig);

const FirebaseAuth = getAuth(firebaseApp)

const FirebaseDB = getDatabase(firebaseApp)

export { FirebaseAuth, FirebaseDB }

