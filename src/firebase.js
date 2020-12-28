import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCMF27b-9Pd_kRAw5JmNM9qb1_74SGS9Co",
  authDomain: "instagram-clone-react-e5500.firebaseapp.com",
  databaseURL:
    "https://instagram-clone-react-e5500-default-rtdb.firebaseio.com",
  projectId: "instagram-clone-react-e5500",
  storageBucket: "instagram-clone-react-e5500.appspot.com",
  messagingSenderId: "892328308755",
  appId: "1:892328308755:web:19f8b0a075263dccb28fe6",
  measurementId: "G-E93LX3YM1E",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };

// export default firebaseConfig;
