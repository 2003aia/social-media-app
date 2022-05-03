import { initializeApp } from 'firebase/app'
import { getDatabase } from 'firebase/database'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore } from 'firebase/firestore'
import {getStorage} from 'firebase/storage'
// Your web app's Firebase configuration
/* const firebaseConfig = {
    apiKey: "AIzaSyAHGFiDFkpHNI-8ysTIKGohN0yCmxQPRk4",
    authDomain: "todo-7ac24.firebaseapp.com",
    projectId: "todo-7ac24",
    storageBucket: "todo-7ac24.appspot.com",
    messagingSenderId: "998281377900",
    appId: "1:998281377900:web:07ed4643d2435a50180049"
  }; */
// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBHvp0BBGhc2vYgJx52cgs2MsUHNYjxRvM",
  authDomain: "test-10282.firebaseapp.com",
  databaseURL: "https://test-10282-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "test-10282",
  storageBucket: "test-10282.appspot.com",
  messagingSenderId: "382090774299",
  appId: "1:382090774299:web:d297d0a0780ec20ede35be"
};

const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)
export const db = getDatabase(app)
export const firestore = getFirestore(app)
export const storage = getStorage(app)

// Your web app's Firebase configuration
