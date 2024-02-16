// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"
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

export const auth = getAuth();