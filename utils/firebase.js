import firebase from "firebase/compat/app";
import "firebase/compat/database";
import "firebase/compat/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAHm_4HO64cS9ROl9dB9WVCufRiUywwiRI",
  authDomain: "scheduler-22103.firebaseapp.com",
  databaseURL: "https://scheduler-22103-default-rtdb.firebaseio.com",
  projectId: "scheduler-22103",
  storageBucket: "scheduler-22103.appspot.com",
  messagingSenderId: "974616755619",
  appId: "1:974616755619:web:41d6d784c69a9b7f2eee16",
  measurementId: "G-HMMYPX42L1",
};

firebase.initializeApp(firebaseConfig);

export { firebase };
