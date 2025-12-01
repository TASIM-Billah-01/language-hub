// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCgylEiFFCwTdvis-jgAr-HBoUk7eAArsU",
  authDomain: "language-hub-2eb0b.firebaseapp.com",
  projectId: "language-hub-2eb0b",
  storageBucket: "language-hub-2eb0b.firebasestorage.app",
  messagingSenderId: "1030436190766",
  appId: "1:1030436190766:web:aa580e9a838728cf843dbf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)