import { createContext, useContext, useEffect, useState } from "react";
const ThemeContext=createContext(null);
export function ThemeProvider({children}){const [theme,setTheme]=useState(()=>localStorage.getItem('theme')||'dark');useEffect(()=>{document.documentElement.classList.toggle('dark',theme==='dark');localStorage.setItem('theme',theme)},[theme]);const toggleTheme=()=>setTheme(x=>x==='dark'?'light':'dark');return <ThemeContext.Provider value={{theme,toggleTheme}}>{children}</ThemeContext.Provider>}
export function useTheme(){return useContext(ThemeContext)}
