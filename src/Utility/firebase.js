// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDoVPdQqUZ59V_yc_j2xNlXYXVMAdifdQQ",
  authDomain: "netflex-gpt-d0d87.firebaseapp.com",
  projectId: "netflex-gpt-d0d87",
  storageBucket: "netflex-gpt-d0d87.appspot.com",
  messagingSenderId: "1056989828751",
  appId: "1:1056989828751:web:3a97672f9904450c1542fa",
  measurementId: "G-5STYRGCSQG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);