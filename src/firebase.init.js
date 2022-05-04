// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAM3Dtk48UZAnMAHw2Q8POjD-acRW-zVMo",
  authDomain: "books-zone-88973.firebaseapp.com",
  projectId: "books-zone-88973",
  storageBucket: "books-zone-88973.appspot.com",
  messagingSenderId: "263093384622",
  appId: "1:263093384622:web:e427c9b9fed72e644e443f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
