// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBN05bWYegUMDLYb5qYjHucxpsSnHJiXLw",
  authDomain: "challenge-37b51.firebaseapp.com",
  databaseURL: "https://challenge-37b51.firebaseio.com",
  projectId: "challenge-37b51",
  storageBucket: "challenge-37b51.appspot.com",
  messagingSenderId: "492176848410",
  appId: "1:492176848410:web:6bb86567d6177d2c7b83a3",
  measurementId: "G-JCE59NDWMC",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };
