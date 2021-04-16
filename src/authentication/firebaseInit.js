import firebase from 'firebase/app';
import 'firebase/auth';
export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const app = firebase.initializeApp({
  apiKey: "AIzaSyBM2U1oyO85fg8ldZTBPFEmWx-zUUAq1Yw",
  authDomain: "computer-doctor-ad288.firebaseapp.com",
  projectId: "computer-doctor-ad288",
  storageBucket: "computer-doctor-ad288.appspot.com",
  messagingSenderId: "154460093799",
  appId: "1:154460093799:web:991d2510ce52d6270343c2"
  });
export const auth = app.auth();
