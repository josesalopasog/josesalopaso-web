import { MoonIcon, SunIcon } from "../../icons";
import { useEffect, useState } from "react";

const ThemeButton = () => {
    const [theme, setTheme] = useState("dark");

    useEffect(() => {
        if (theme === "dark") {
            document.querySelector("html").classList.add("dark")
        } else {
            document.querySelector("html").classList.remove("dark")
        }
    }, [theme])

    const toggleTheme = () => {
        setTheme(prev => prev === "light" ? "dark" : "light");
    };

    return (
        <button
            id="theme-toggle"
            className="transition-colors duration-300 ease-in-out"
            onClick={toggleTheme}
        >
            {theme === "dark" ? (
                <SunIcon className="w-5 h-5 cursor-pointer text-[#00e1ff] transition-transform duration-300 hover:scale-110" />
            ) : (
                <MoonIcon className="w-4 h-4 cursor-pointer text-[#BD34FE] transition-transform duration-300 hover:scale-110" />
            )}
        </button>
    );
};

export default ThemeButton;