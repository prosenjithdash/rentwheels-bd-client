import { initializeApp } from "firebase/app";

const firebaseConfig = {

  // 🔐 Firebase API key
  apiKey: import.meta.env.VITE_apiKey, 

   // 🌍 Domain for Firebase Auth
  authDomain: import.meta.env.VITE_authDomain,

  // 🏗️ Firebase project ID
  projectId: import.meta.env.VITE_projectId,  

  // 📦 Storage bucket for files/images
  storageBucket: import.meta.env.VITE_storageBucket, 

  // 📩 Cloud Messaging sender ID
  messagingSenderId: import.meta.env.VITE_messagingSenderId, 

  // 🪪 Unique Firebase app ID
  appId: import.meta.env.VITE_appId 
};

const app = initializeApp(firebaseConfig);

export default app;