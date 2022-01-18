import React from 'react';
import { useContext, useState, useEffect } from 'react';
import {auth} from "../firebase";


const AuthContext = React.createContext()


export function useAuth() {
    return useContext(AuthContext)

}

export const AuthProvider = (props) => {
    const { children } = props;
    const [currentUser, setCurrentUser] = useState()
    const [loading, setLoading] = useState(true)
    
    function login  (email, password) {
        return auth.signInWithEmailAndPassword(email, password)
    } 

    useEffect(() => {
        const unsubsribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user)
            setLoading(false)
        })
        return unsubsribe
    }, [])


    const value = {
        currentUser, login
    }

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}
