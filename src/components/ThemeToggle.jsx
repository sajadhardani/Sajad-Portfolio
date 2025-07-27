import { useEffect, useState } from "react"
import {Sun , Moon} from "lucide-react"
import { cn } from "../lib/utills";


export const ThemeToggle = () =>{
const [isDarkMode, setIsDarkMode] = useState (false);

    useEffect(() => {
        const storedTheme= localStorage.getItem("theme")
        if (storedTheme === "dark") {
            setIsDarkMode(true)
            document.documentElement.classList.add("dark");
        
        } else {
            // v1
            //  localStorage.setItem("theme", "light")
            // setIsDarkMode(false)
            // v2
        //     document.documentElement.classList.remove("dark");
        // localStorage.setItem("theme", "light");

         document.documentElement.classList.add("dark");
  localStorage.setItem("theme", "dark");
  setIsDarkMode(true);
        }
    }, []);

    const toggoleTheme = () => {
        if (isDarkMode) {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light")
            setIsDarkMode(false)

        } else {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark")
            setIsDarkMode(true);
             
        }
    };

    return (
         <button onClick={toggoleTheme} className={cn(
            // "fixed max-sm:hidden  top-5 right-5 z-50 p-2 rounded-full transition-colors duration-300  ",
            // "focus:outline-none"گ

             "fixed top-16 right-8 z-50 p-2 rounded-full transition-colors duration-300",
    "focus:outline-none ",
      "sm:top-4 sm:right-5",
  "sm:left-auto sm:bottom-auto",
  "focus:outline-none"
         )}>
        
         {isDarkMode ? ( <Sun className="h-6 w-6 text-yellow-300 "/>
         ): (
         <Moon className="h-6 w-6 text-blue-900" />
 )}
 </button>
    );
};