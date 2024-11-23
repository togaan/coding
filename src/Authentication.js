import { redirect } from "react-router-dom"
import React, { createContext, useContext, useState } from 'react';

export async function requireAuth(request) {
    const pathname = new URL(request.url).pathname
    const isLoggedIn = localStorage.getItem("loggedin")
    
    if (!isLoggedIn) {
        throw redirect(`/login?message=You must log in first.&redirectTo=${pathname}`)
    }
    return null
    
}



export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem("loggedin") === "true");

    const login = () => {
        setIsLoggedIn(true);
        localStorage.setItem("loggedin", true);
    };

    const logout = () => {
        setIsLoggedIn(false);
        localStorage.removeItem('loggedin');
    };

    return (
        <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);