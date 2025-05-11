// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";  // Make sure this is correct

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDapSh9vTlAIlTafmZZFU-X9DPUvDs073o",
  authDomain: "kepongvillabooking.firebaseapp.com",
  projectId: "kepongvillabooking",
  storageBucket: "kepongvillabooking.firebasestorage.app",
  messagingSenderId: "194188034214",
  appId: "1:194188034214:web:3412aa390bb22f45b47467"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

// Export app and db for use in other parts of the app
export { app, db };
