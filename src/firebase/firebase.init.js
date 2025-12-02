// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBk6R9MhS9Q-8h3sCWV8lNOhxRfSJ6N8GQ",
  authDomain: "b12-a10-environmental-issue.firebaseapp.com",
  projectId: "b12-a10-environmental-issue",
  storageBucket: "b12-a10-environmental-issue.firebasestorage.app",
  messagingSenderId: "788651435662",
  appId: "1:788651435662:web:06a3da9639ca0b23dd4bdf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
