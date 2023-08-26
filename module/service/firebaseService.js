// path: ./module/service/firebaseService.js
// Path: ./module/service/firebaseService.js

import { initializeApp } from "@firebase/app";
import { getFirestore, collection, getDocs } from "@firebase/firestore";

import { getAuth, signInWithPopup, GoogleAuthProvider } from "@firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyALvAUk5EmuSfj1taj1iuBPFGGRVHXKeUM",
  authDomain: "litpress202.firebaseapp.com",
  projectId: "litpress202",
  storageBucket: "litpress202.appspot.com",
  messagingSenderId: "667266045725",
  appId: "1:667266045725:web:b42d3fc29f330fb296f3f4",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const firestore = getFirestore(firebaseApp);

const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();

// Sign in with Google
const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;
    return user;
  } catch (error) {
    if (error.code === "auth/popup-closed-by-user") {
      console.log("User closed the sign-in popup.");
      return null; // Handle this case gracefully
    }
    console.error("Error signing in:", error);
    throw error;
  }
};

// Sign out
const signOut = async () => {
  try {
    await auth.signOut();
  } catch (error) {
    console.error("Error signing out:", error);
    throw error;
  }
};

// Fetch data from a specified Firestore collection
const fetchDataFromFirestore = async (collectionName) => {
  try {
    if (!collectionName) {
      throw new Error("Collection name is required");
    }

    const currentCollection = collection(firestore, collectionName);
    const querySnapshot = await getDocs(currentCollection);
    const data = querySnapshot.docs.map((doc) => doc.data());
    return data;
  } catch (error) {
    console.error("Error fetching data from Firestore:", error);
    throw error;
  }
};

export default fetchDataFromFirestore;

export { auth, signInWithGoogle, signOut };
