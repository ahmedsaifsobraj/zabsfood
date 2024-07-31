// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBwmzZfhB1TImKzlMv1XCkA48UylLvnzcU",
  authDomain: "zabsfood.firebaseapp.com",
  projectId: "zabsfood",
  storageBucket: "zabsfood.appspot.com",
  messagingSenderId: "284903117397",
  appId: "1:284903117397:web:2ab102a8724dc394f83adc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
export default auth;