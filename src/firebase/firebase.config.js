/**
 * firebase.config.js
 * --------------------------------------------------
 * 🔥 Purpose:
 * This file initializes and configures the Firebase app
 * using environment variables for secure and flexible setup.
 *
 * ✅ Handles:
 * - Firebase SDK initialization
 * - Reading environment variables (for different environments)
 *
 * 📦 Technologies:
 * - Firebase SDK (v9+)
 * - Vite environment variables (import.meta.env)
 */

import { initializeApp } from "firebase/app";


/**
 * ⚙️ Firebase Configuration Object
 * --------------------------------
 * All values are stored securely in Vite environment variables (.env.local file)
 * so no sensitive information (like API keys) is exposed in the source code.
 */
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

/**
 * 🚀 Initialize Firebase App
 * --------------------------
 * This function sets up the connection between your project
 * and Firebase services (Auth, FireStore, Storage, etc.)
 */
const app = initializeApp(firebaseConfig);

export default app;