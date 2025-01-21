import { MoonIcon } from "@heroicons/react/24/outline"
import { useContext } from "react"
import { GlobalContext } from "../../context/context"

import "../../styles/ThemeButton.css"


const ThemeButton = () => {
    const context = useContext(GlobalContext);

    const toggleColor = () => {
        context.setColor("color");
        console.log(context.color);
    };

    return(
        <div className="flex justify-center align-middle">
            <MoonIcon 
                className="moon-icon w-4 cursor-pointer" strokeWidth={"2px"}
                onClick={toggleColor}
            />
        </div>
    )
}

export default ThemeButton