import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCKp8cR7GFq1UX0qNqNPxIqR68gU2aFTiY",
  authDomain: "linkedin-add-on.firebaseapp.com",
  projectId: "linkedin-add-on",
  storageBucket: "linkedin-add-on.firebasestorage.app",
  messagingSenderId: "959089706018",
  appId: "1:959089706018:web:3c412e43804b3cb07c767b",
  measurementId: "G-7QV0NCKJQB",
};

// Initialize app only once
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
// Initialize Firebase
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, getAuth, signInWithEmailAndPassword, app, db };
