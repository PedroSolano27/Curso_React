/* eslint-disable react-refresh/only-export-components */
// Contexto de Cor do Título
import { createContext, useReducer } from "react";

export const titleColorReducer = (state,action) => {
    switch(action.type){
        case "Red": {
            return {...state, color: "red"};
        }
        case "Blue": {
            return {...state, color: "blue"};
        }
        case "Purple": {
            return {...state, color: "purple"};
        }
        default: return state;
    }
}

export const TitleColorContext = createContext();
export const TitleColorProvider = ({children}) => {
    const [state, dispatch] = useReducer(titleColorReducer);
    return (
        <TitleColorContext.Provider value={{...state, dispatch}}>
            {children}
        </TitleColorContext.Provider>
    );
}