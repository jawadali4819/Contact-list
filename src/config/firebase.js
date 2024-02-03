// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyAh0IR91vQx10iawhmW0AQ0KF89irDyI1A",
  authDomain: "contact-list-app-6fbd9.firebaseapp.com",
  projectId: "contact-list-app-6fbd9",
  storageBucket: "contact-list-app-6fbd9.appspot.com",
  messagingSenderId: "537410723187",
  appId: "1:537410723187:web:c6d89dc23017360028b906"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
