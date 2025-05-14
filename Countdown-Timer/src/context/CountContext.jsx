// Contexto De Countdown
import React, { useState } from "react";

const CountContext = React.createContext(null);
const CountProvider = ({children}) => {
    const [event, setEvent] = useState(null);

    return (
        <CountContext.Provider value={{event, setEvent}} >
            {children}
        </CountContext.Provider>
    );
}
export {CountContext, CountProvider};