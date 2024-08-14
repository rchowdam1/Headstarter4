// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCuev8FAqhsq7IrNi9UsRszeETw6mJ0gJE",
  authDomain: "flashcardsa-564e2.firebaseapp.com",
  projectId: "flashcardsa-564e2",
  storageBucket: "flashcardsa-564e2.appspot.com",
  messagingSenderId: "682879637354",
  appId: "1:682879637354:web:7e06e71b00993d89ceb713",
  measurementId: "G-Y7370R6KQE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
export default db;