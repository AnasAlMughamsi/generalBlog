// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.FIREBASE,
    authDomain: "blog-5b0e4.firebaseapp.com",
    projectId: "blog-5b0e4",
    storageBucket: "blog-5b0e4.firebasestorage.app",
    messagingSenderId: "502318628436",
    appId: "1:502318628436:web:57a12e5eb5548dd35df7c1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);