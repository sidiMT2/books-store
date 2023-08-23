// Import the functions you need from the SDKs you need
import { initializeApp, } from "firebase/app";

import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration



const firebaseConfig = {
    apiKey: "AIzaSyCflDRoTaEfrA0g6tqWEyVePdL1fIH1mpE",
    authDomain: "books-store-aae80.firebaseapp.com",
    projectId: "books-store-aae80",
    storageBucket: "books-store-aae80.appspot.com",
    messagingSenderId: "352156523048",
    appId: "1:352156523048:web:425e554ec2f3feb384331d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const firestore = getFirestore(app)