import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const config = {
  apiKey: "AIzaSyDV-nJ1vUJ4wiKvduwvJmVMrmMgN_HwgU8",
  authDomain: "crwn-database-92c9a.firebaseapp.com",
  projectId: "crwn-database-92c9a",
  storageBucket: "crwn-database-92c9a.appspot.com",
  messagingSenderId: "679250278298",
  appId: "1:679250278298:web:d048f0d82a3443227c2c23",
  measurementId: "G-XX7W0LGWMZ",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
