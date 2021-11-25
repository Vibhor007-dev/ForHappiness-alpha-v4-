import { initializeApp } from 'firebase/app';
import { getFirestore, setDoc, doc } from 'firebase/firestore';



 const firebaseConfig = {
    apiKey: "AIzaSyCeizorTHz8YGIhY18BxEJ24wOoSpd4MIw",
    authDomain: "forhappiness-c2cd1.firebaseapp.com",
    projectId: "forhappiness-c2cd1",
    databaseURL:"https://console.firebase.google.com/project/forhappiness-c2cd1/firestore/data/~2FJokes",
    storageBucket: "forhappiness-c2cd1.appspot.com",
    messagingSenderId: "294941228808",
    appId: "1:294941228808:web:cda041514ebb7b42cb76bd"
  };
  initializeApp(firebaseConfig);
  const db = getFirestore();
   export default db;  