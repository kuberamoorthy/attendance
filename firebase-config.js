const firebaseConfig = {
  apiKey: "YOUR_API_KEY", // IMPORTANT: You MUST paste your Firebase API key here!
  authDomain: "attendance-a1a8d.firebaseapp.com",
  projectId: "attendance-a1a8d",
  storageBucket: "attendance-a1a8d.appspot.com",
  messagingSenderId: "697722308252",
  appId: "1:697722308252:web:your_app_id", // IMPORTANT: You MUST paste your App ID here!
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
