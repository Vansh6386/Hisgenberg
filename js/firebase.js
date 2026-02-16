import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAxLh8DG5hCNQCFvep-i2Pj1MBzutntLRo",
  authDomain: "hisgenberg-e4716.firebaseapp.com",
  projectId: "hisgenberg-e4716",
  storageBucket: "hisgenberg-e4716.firebasestorage.app",
  messagingSenderId: "1059005042117",
  appId: "1:1059005042117:web:cf512f1d0a05e23523cfac"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);