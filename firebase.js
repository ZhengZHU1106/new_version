// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";

// Your Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBXRrbJ1sHTxV-HpyuWuRwOXW3B8EuPFMY",
    authDomain: "overlay-adaa5.firebaseapp.com",
    projectId: "overlay-adaa5",
    storageBucket: "overlay-adaa5.appspot.com",
    messagingSenderId: "207321146426",
    appId: "1:207321146426:web:a43b1d99daa9e20dcd8103",
    measurementId: "G-10LL2P6GHL"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Email/Password Login Function
export const loginWithEmail = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const token = await userCredential.user.getIdToken();
    return token; // Return the token for authenticated requests
  } catch (error) {
    console.error("Login failed:", error.message);
    throw error;
  }
};

// Sign-Up Function (Optional)
export const signUpWithEmail = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const token = await userCredential.user.getIdToken();
    return token;
  } catch (error) {
    console.error("Sign-up failed:", error.message);
    throw error;
  }
};

export { auth, app };
