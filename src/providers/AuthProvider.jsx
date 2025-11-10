
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
import axios from 'axios'
import app from '../firebase/firebase.config'

export const AuthContext = createContext(null)
const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider()

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const signInWithGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    const resetPassword = email => {
        setLoading(true)
        return sendPasswordResetEmail(auth, email)
    }

    const logOut = async () => {
        setLoading(true)
        // ⚡ clear token from cookie in backend
        await axios.get(`${import.meta.env.VITE_API_URL}/logout`, {
            withCredentials: true,
        })
        return signOut(auth)
    }

    const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo,
        })
    }

    // ⚡ Create token & send as cookie
    const getToken = async email => {
        try {
            await axios.post(
                `${import.meta.env.VITE_API_URL}/jwt`,
                { email },
                { withCredentials: true } // 🔥 crucial
            )
        } catch (error) {
            console.error('Failed to set JWT cookie:', error)
        }
    }

    // ⚡ Save or update user in DB
    const saveUser = async user => {
        try {
            const currentUser = {
                email: user?.email,
                role: 'guest',
                status: 'Verified',
            }
            await axios.put(`${import.meta.env.VITE_API_URL}/user`, currentUser, {
                withCredentials: true, // 🔥 important
            })
        } catch (error) {
            console.error('Failed to save user:', error)
        }
    }

    // 🔄 Firebase Auth State Change Listener
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async currentUser => {
            setUser(currentUser)

            if (currentUser) {
                // ⚡ Order matters:
                // 1️⃣ Create/refresh token first
                // 2️⃣ Then save user
                await getToken(currentUser.email)
                await saveUser(currentUser)
            }

            setLoading(false)
        })

        return () => unsubscribe()
    }, [])

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
    }

    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    )
}

export default AuthProvider






// import { createContext, useEffect, useState } from 'react'
// import {
//     GoogleAuthProvider,
//     createUserWithEmailAndPassword,
//     getAuth,
//     onAuthStateChanged,
//     sendPasswordResetEmail,
//     signInWithEmailAndPassword,
//     signInWithPopup,
//     signOut,
//     updateProfile,
// } from 'firebase/auth'
// import axios from 'axios'
// import app from '../firebase/firebase.config'

// export const AuthContext = createContext(null)
// const auth = getAuth(app)
// const googleProvider = new GoogleAuthProvider()

// const AuthProvider = ({ children }) => {
//     const [user, setUser] = useState(null)
//     const [loading, setLoading] = useState(true)

//     const createUser = (email, password) => {
//         setLoading(true)
//         return createUserWithEmailAndPassword(auth, email, password)
//     }

//     const signIn = (email, password) => {
//         setLoading(true)
//         return signInWithEmailAndPassword(auth, email, password)
//     }

//     const signInWithGoogle = () => {
//         setLoading(true)
//         return signInWithPopup(auth, googleProvider)
//     }

//     const resetPassword = email => {
//         setLoading(true)
//         return sendPasswordResetEmail(auth, email)
//     }

//     const logOut = async () => {
//         setLoading(true)
//         await axios.get(`${import.meta.env.VITE_API_URL}/logout`, {
//             withCredentials: true,
//         })
//         return signOut(auth)
//     }

//     const updateUserProfile = (name, photo) => {
//         return updateProfile(auth.currentUser, {
//             displayName: name,
//             photoURL: photo,
//         })
//     }

//     // Get token from server
//     const getToken = async email => {
//         const { data } = await axios.post(
//             `${import.meta.env.VITE_API_URL}/jwt`,
//             { email },
//             { withCredentials: true }
//         )
//         return data
//     }

//     // Save user (use plain axios, not useAxiosSecure)
//     const saveUser = async (user) => {
//         const currentUser = {
//             email: user?.email,
//             role: 'guest',
//             status: 'Verified',
//         }
//         const { data } = await axios.put(
//             `${import.meta.env.VITE_API_URL}/user`,
//             currentUser,
//             { withCredentials: true }
//         )
//         return data
//     }

//     // onAuthStateChange
//     useEffect(() => {
//         const unsubscribe = onAuthStateChanged(auth, async currentUser => {
//             setUser(currentUser)
//             if (currentUser) {
//                 await getToken(currentUser.email)
//                 await saveUser(currentUser)
//             }
//             setLoading(false)
//         })
//         return () => unsubscribe()
//     }, [])

//     const authInfo = {
//         user,
//         loading,
//         setLoading,
//         createUser,
//         signIn,
//         signInWithGoogle,
//         resetPassword,
//         logOut,
//         updateUserProfile,
//     }

//     return (
//         <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
//     )
// }

// export default AuthProvider
