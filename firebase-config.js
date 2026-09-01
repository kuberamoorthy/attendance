const firebaseConfig = {
  apiKey: "AIzaSyCpCqZ9Tr0pJOeife66YLaV2jjM6La132E",
  authDomain: "attendance-a1a8d.firebaseapp.com",
  projectId: "attendance-a1a8d",
  storageBucket: "attendance-a1a8d.firebasestorage.app",
  messagingSenderId: "697722308252",
  appId: "1:697722308252:web:464cda5d2c410f3ac04f59",
  measurementId: "G-RY9V6V498H"
};

let app, db;

try {
    // Initialize Firebase using the compat libraries which don't require ES Modules
    app = firebase.initializeApp(firebaseConfig);
    db = firebase.firestore();
    console.log("Firebase Initialized Successfully in Compat Mode");
} catch (error) {
    console.error("Firebase initialization error:", error);
}
