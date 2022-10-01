// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";


const firebaseConfig = {
  apiKey: "AIzaSyAUYkFuuWXgIuIPGctxpLeDib-CdPJAUJA",
  authDomain: "clone-18c26.firebaseapp.com",
  projectId: "clone-18c26",
  storageBucket: "clone-18c26.appspot.com",
  messagingSenderId: "511835995792",
  appId: "1:511835995792:web:4cef32866cb165e41fa215",
  measurementId: "G-8YXGMG1C0S"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth};