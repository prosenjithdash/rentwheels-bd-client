/**
 * AuthProvider.jsx
 * --------------------------------------------------
 * 🔐 Purpose:
 * This file creates and provides authentication context
 * for the entire React app using Firebase Authentication.
 *
 * ✅ Handles:
 * - User registration (Email/Password)
 * - User login (Email/Password)
 * - Google sign-in
 * - Password reset
 * - Logout
 * - Auto user state tracking (onAuthStateChanged)
 *
 * 📦 Technologies:
 * - React Context API
 * - Firebase Auth SDK
 */

import { createContext, useEffect, useState } from 'react'
import {
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    getAuth,
    onAuthStateChanged,
    sendPasswordResetEmail,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    updateProfile,
} from 'firebase/auth'
import app from '../firebase/firebase.config'

// 🔑 Create Firebase Auth instance and Google provider
const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider()

// 🌍 Create Context (so other components can access Auth data)
export const AuthContext = createContext(null)

/**
 * 🧠 AuthProvider Component
 * This component wraps the entire app and provides all authentication-related
 * states and functions via React Context.
 */
const AuthProvider = ({ children }) => {

    // 👤 State to store currently logged-in user
    const [user, setUser] = useState(null)

    // ⏳ State to handle loading status (used for spinners/loaders)
    const [loading, setLoading] = useState(true)

    // 🆕 Register user with email and password
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    };

    // 🔑 Login existing user with email and password
    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    };

    // 🌐 Sign in using Google popup
    const signInWithGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    };

    // 🔄 Reset password using registered email
    const resetPassword = email => {
        setLoading(true)
        return sendPasswordResetEmail(auth, email)
    };

    // 🚪 Log out the current user
    const logOut = async () => {
        setLoading(true)
        // 💬 If using JWT in future:
        // await axios.get(`${import.meta.env.VITE_API_URL}/logout`, {
        //   withCredentials: true,
        // });
        return signOut(auth)
    };

    // 🧾 Update user display name and profile photo
    const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo,
        })
    };

    /**
  * 🔍 Track user authentication state:
  * Runs once when the app starts and keeps watching Firebase Auth.
  * Automatically updates `user` when login/logout occurs.
  */
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {

            console.log(' User in the state auth changed', currentUser)
            setUser(currentUser)
            //loading
            setLoading(false)

        });

        // 🧹 Cleanup when component unmounts
        return () => {
            unSubscribe();
        }
    }, []);

    // 📤 All authentication data & functions shared through Context
    const authInfo = {
        user,
        loading,
        setLoading,
        createUser,
        signIn,
        signInWithGoogle,
        resetPassword,
        logOut,
        updateUserProfile,
    };

    // 🌈 Provide Auth Context to all children components
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;