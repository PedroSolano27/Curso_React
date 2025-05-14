/* eslint-disable react-refresh/only-export-components */
// Contexto do Counter
import { createContext, useState } from "react";

export const CounterContext = createContext();
export const CounterProvider = ({children}) => {
    const [counter, setCounter] = useState(5);
    return (
        <CounterContext.Provider value={{counter, setCounter}}>
            {children}
        </CounterContext.Provider>
    );
}