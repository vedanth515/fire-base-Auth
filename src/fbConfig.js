// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import {getDatabase} from "firebase/database"
const firebaseConfig = {
  apiKey: "AIzaSyC9hJWHLCUYtMAOK7QfL5Rz8bvFUQvWWSI",
  authDomain: "fbproject-4a007.firebaseapp.com",
  projectId: "fbproject-4a007",
  storageBucket: "fbproject-4a007.firebasestorage.app",
  messagingSenderId: "398511611674",
  appId: "1:398511611674:web:1812e8720f5bb15ea216a3",
  measurementId: "G-B8CTRPWKRL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const author=getAuth(app)
export const db=getDatabase(app)