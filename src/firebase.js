// import * as firebase from 'firebase';
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { functions } from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyABBj-zC2CFc_20NxTtbg61RG-Tq1xM6co",
  authDomain: "finclus-react-phone-auth.firebaseapp.com",
  databaseURL: "https://finclus-react-phone-auth.firebaseio.com",
  projectId: "finclus-react-phone-auth",
  storageBucket: "finclus-react-phone-auth.appspot.com",
  messagingSenderId: "694946360867",
  appId: "1:694946360867:web:b0745f75396b5507664b96",
};

export const signInWithGoogle = () => {
    debugger
  auth.signInWithPopup(provider);
};

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();

export default firebaseConfig;
