// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyA3e6D95foW5R9mZ7MEyFwcVKjEdEbLEYM",
    authDomain: "exatas-consultoria-digital.firebaseapp.com",
    projectId: "exatas-consultoria-digital",
    storageBucket: "exatas-consultoria-digital.appspot.com",
    messagingSenderId: "636775193427",
    appId: "1:636775193427:web:4786b5881f87ceeb0a1fa6",
    measurementId: "G-MT3M7CFLJD"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default getFirestore();