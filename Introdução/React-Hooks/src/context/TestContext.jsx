/* eslint-disable react-refresh/only-export-components */
// Contexto de Teste
import { useState } from "react";
import { createContext } from "react";

export const TestContext = createContext();

const TestProvider = ({children}) => {
    const [testValue, setTestValue] = useState("Teste de Contexto");

    return (
        <TestContext.Provider value={{testValue, setTestValue}}>
            {children}
        </TestContext.Provider>
    );
}

export default TestProvider;