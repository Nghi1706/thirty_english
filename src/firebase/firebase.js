// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDN0zf4GtAvLRh04qHxP-68b6sa0AW2JSM",
    authDomain: "thirty-english.firebaseapp.com",
    projectId: "thirty-english",
    storageBucket: "thirty-english.appspot.com",
    messagingSenderId: "35831854249",
    appId: "1:35831854249:web:ac9c9dd5c3122a02d6a5b8",
    measurementId: "G-3XNHJL3BF8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
export default storage;