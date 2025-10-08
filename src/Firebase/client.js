import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBBcPbHjBEHjHdiKcismwy7k0sakTnnwkU",
  authDomain: "nvo-mzo.firebaseapp.com",
  projectId: "nvo-mzo",
  storageBucket: "nvo-mzo.firebasestorage.app",
  messagingSenderId: "999259597291",
  appId: "1:999259597291:web:2f44e18f0e7137bd8bd1ae",
  measurementId: "G-H4NXZ0GTGN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

console.log(app);