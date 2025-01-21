import { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { GlobalContext } from "./context";

export const GlobalProvider = ({children}) => {
    GlobalProvider.PropTypes = {
        children: PropTypes.node.isRequired,
    }

    const [color, setColor] = useState('cyan');

    return( 
        <GlobalContext.Provider value={{
            color,
            setColor,
        }}> 
            {children}
        </GlobalContext.Provider>
    )
}