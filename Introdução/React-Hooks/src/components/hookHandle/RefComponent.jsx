// Componente de referência
import "./HookUseImperativeHandle.css";
import { forwardRef, useImperativeHandle, useRef } from "react";

const RefComponent = forwardRef((props, ref)=> { 
    const inputRef = useRef();

    useImperativeHandle(ref, ()=>{      // Função a ser usada no Ref
        function validate() {
            if(inputRef.current.value.length > 3){
                inputRef.current.value = "";
                console.log("Input corrigido");
            }
        } 
        return {validate};
    });

    return (
        <>
            <p>Operações vindas de outro componente:</p>
            <h4>Insira até 3 caracteres</h4>
            <input type="text" ref={inputRef}/>
        </>
    );
});

export default RefComponent