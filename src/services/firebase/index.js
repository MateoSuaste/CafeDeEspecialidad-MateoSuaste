// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCdulSz3XI2C_KgmYkpjjbAhoNBhjNY4Pc",
  authDomain: "cafe-de-especialidad.firebaseapp.com",
  projectId: "cafe-de-especialidad",
  storageBucket: "cafe-de-especialidad.appspot.com",
  messagingSenderId: "167666674339",
  appId: "1:167666674339:web:a337035e8350c78784ed16"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const ref = getFirestore(app)