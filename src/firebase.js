// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore"; // <- needed for DB

import { getAuth } from "firebase/auth"; // <- needed for auth (later)

import { getStorage } from "firebase/storage"; // <- firebase storage for img

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDaeuH_QjuKXW5qR5jHIvR5h5BY63sXhow",
  authDomain: "portfolio-update-advjs.firebaseapp.com",
  projectId: "portfolio-update-advjs",
  storageBucket: "portfolio-update-advjs.appspot.com",
  messagingSenderId: "699765360589",
  appId: "1:699765360589:web:a60e47dcceaba4b292e684"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);



 const auth = getAuth(app); // <- needed for auth (later)
 export { auth }

export const db = getFirestore(app); // <- needed for DB so we can use it in our application components

export const storage = getStorage(app);


