import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyAe8v85vIIooyUzXd82ycuefZQLtPgvy5E",
    authDomain: "apprealb.firebaseapp.com",
    projectId: "apprealb",
    storageBucket: "apprealb.appspot.com",
    messagingSenderId: "736605583898",
    appId: "1:736605583898:web:201e2e69c10bb69df76fa3"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)