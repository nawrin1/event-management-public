import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import auth from "../firebase/firebase.config";
import { GoogleAuthProvider,signInWithPopup, } from "firebase/auth";

export const AuthContext=createContext(null)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const provider=new GoogleAuthProvider()
    const createAccount=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
        
    }
    const login=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    const logout = () => {
        setLoading(true);
        return signOut(auth);
    }
    const google=()=>{
        setLoading(true)
        return signInWithPopup(auth,provider)

    }
    useEffect(()=>{
        const unSubscribe=onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser)
            console.log('current users',currentUser)
            setLoading(false)

        })
        return () => {
            unSubscribe();
        }
    },[])
    const authInfo = {createAccount,login,user,loading,logout,google}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}

        </AuthContext.Provider>
            
        
    );
};

export default AuthProvider;