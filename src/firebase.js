// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCPMVx3SOrimFkgkNveaEWmnDF99KnuKhY",
  authDomain: "mangan-da-kita.firebaseapp.com",
  projectId: "mangan-da-kita",
  storageBucket: "mangan-da-kita.appspot.com",
  messagingSenderId: "66899785079",
  appId: "1:66899785079:web:fbc712cd832d5b39ce1d72",
  measurementId: "G-Z9KBL0LH5C",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };
