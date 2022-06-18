import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyADTj3e_-nQxkTkqg1Qhf6I-STAmgAAhKA",  
    authDomain: "clows-home.firebaseapp.com",  
    projectId: "clows-home",  
    storageBucket: "clows-home.appspot.com",  
    messagingSenderId: "428536052086",  
    appId: "1:428536052086:web:766c3315ca8084b2fc6257"  
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);