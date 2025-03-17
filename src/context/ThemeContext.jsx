"use client";

import { createContext, useEffect, useState } from "react";


export const ThemeContext = createContext();

const getFromLocalStorage = () => {
    if (typeof window !== "undefined") {
        const value = localStorage.getItem("theme");
        return value || "light";
    }
};

export const ThemeContextProvider = ({ children }) => {
    const [theme, setTheme] = useState(() => {
        return getFromLocalStorage();
    });


    // a function to toggle the theme 
    const toggle = () => {
        setTheme(theme === "light" ? "dark" : "light")
    };

    // Expline below:
    // The useEffect here is to check weather the theme in local storage is change or not.
    // it does not care about the toggle function, 
    // moreover, the [theme] dependency arra, is to ensure that the callbacks only runs the theme state chagne
    useEffect(() => {
        localStorage.setItem("theme", theme);   
    }, [theme]);


    
    return  (
        <ThemeContext.Provider value={{theme, toggle}}>
            {children}
        </ThemeContext.Provider>
    )
}