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
                <SunIcon className="w-[38px] h-[38px] cursor-pointer text-[#00e1ff] transition-transform duration-300 hover:scale-110 hover:text-[#BD34FE]" />
            ) : (
                <MoonIcon className="w-[34px] h-[34px] cursor-pointer text-[#BD34FE] transition-transform duration-300 hover:scale-110 hover:text-[#00e1ff]" />
            )}
        </button>
    );
};

export default ThemeButton;