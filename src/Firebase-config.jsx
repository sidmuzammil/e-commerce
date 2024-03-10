// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD6HpjNPHRtY4Uf0ZYVX8dsZf_emeXGidM",
  authDomain: "orebi-shoping.firebaseapp.com",
  projectId: "orebi-shoping",
  storageBucket: "orebi-shoping.appspot.com",
  messagingSenderId: "785173116378",
  appId: "1:785173116378:web:ad91367e91559564e87ce3",
  measurementId: "G-FHZJ4SEJ13"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth =getAuth(app)
