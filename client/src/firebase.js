// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "captsone-82aa6.firebaseapp.com",
  projectId: "captsone-82aa6",
  storageBucket: "captsone-82aa6.appspot.com",
  messagingSenderId: "198035003079",
  appId: "1:198035003079:web:4067b0cb5d65b9ce0650e2"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);