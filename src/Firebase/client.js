import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyBBcPbHjBEHjHdiKcismwy7k0sakTnnwkU",
  authDomain: "nvo-mzo.firebaseapp.com",
  projectId: "nvo-mzo",
  storageBucket: "nvo-mzo.firebasestorage.app", // 🔧 corregido
  messagingSenderId: "999259597291",
  appId: "1:999259597291:web:2f44e18f0e7137bd8bd1ae",
  measurementId: "G-H4NXZ0GTGN"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);

const storage = getStorage(app); 
// Analytics solo si está en navegador
let analytics;
if (typeof window !== "undefined") {
  analytics = getAnalytics(app);
}

// Firestore
const db = getFirestore(app);

export { app, db, analytics };

// console.log(app);

