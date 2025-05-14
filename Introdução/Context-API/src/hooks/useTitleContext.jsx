// Hook para usar o Counter Context
import { useContext } from "react";
import { TitleColorContext } from "../context/TitleColorContext";

export default function useCounterContext (){
    const context = useContext(TitleColorContext);
    if(!context){ console.log("Contexto não encontrado"); return; }

    return context;
}