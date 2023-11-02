import {GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword,signInWithPopup,signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebase";

export const AuthContext = createContext(null)

const googleProvider = new GoogleAuthProvider()

const AuthProviders = ({children}) => {
    const [user,setUser]= useState(null)
    
   

    const createUser = (email,password) =>{
     return createUserWithEmailAndPassword(auth,email,password);
    }

    const login = (email,password) =>{
        return signInWithEmailAndPassword(auth,email,password)
    }

     useEffect(()=>{
      const unSubscript =  onAuthStateChanged(auth, currentUser =>{
            console.log(currentUser)
           setUser(currentUser)
        })
        return () =>{
         unSubscript()
        }
     },[])

     const logout = () =>{
       return signOut(auth)
    }

      const googleLogin =()=>{
        signInWithPopup(auth,googleProvider)
      }

    

    
    const authInfo = {
        user,
        createUser,
        login,
        logout,
        googleLogin

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;