import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDhKl8T_jF2MxLr5A7jh2F8bLY8Az3z0bI",
  authDomain: "temo-learn-application.firebaseapp.com",
  projectId: "temo-learn-application",
  storageBucket: "temo-learn-application.firebasestorage.app",
  messagingSenderId: "632102481748",
  appId: "1:632102481748:web:45a2dc76c7c8b6cb08e2c1"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

export {
  onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword,
  signOut, updateProfile, sendPasswordResetEmail
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

export {
  doc, getDoc, setDoc, updateDoc, deleteDoc, collection, addDoc, getDocs,
  query, where, orderBy, serverTimestamp, arrayUnion
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";