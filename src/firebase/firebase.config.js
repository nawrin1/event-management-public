// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBbjcmJlsidd5qDPXNKetvyzzNc0rDuFg0",
  authDomain: "social-event-assignment.firebaseapp.com",
  projectId: "social-event-assignment",
  storageBucket: "social-event-assignment.appspot.com",
  messagingSenderId: "162403340656",
  appId: "1:162403340656:web:6a99a488945ab84955ffb5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
