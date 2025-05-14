// Testes do Hook "useRef"
import "./HookUseRef.css";
import { useEffect, useRef, useState } from "react";

function HookUseRef() {
    const numberRef = useRef(0);
    const inputRef = useRef();
    const [counter, setCounter] = useState(0);
    const [value, setValue] = useState("");

    useEffect(() =>{    // Se fosse com useState Geraria um loop infinito
        numberRef.current = numberRef.current + 1;
    });

    function focusOnInput(e){   // Modifica o input usando o inputRef
        e.preventDefault();
        inputRef.current.value = ""; 
        inputRef.current.focus();
    }

    return (
        <section id="ref-hook">
            <h3>Hook "useRef"</h3>
            <p>Renderizado: {numberRef.current}</p>
            
            <p>Contador: {counter}</p>
            <button onClick={()=>setCounter(counter +1)}>Contar</button>

            <form onSubmit={(e)=>focusOnInput(e)}>
                <input type="text" ref={inputRef} value={value} 
                    onChange={(e)=>setValue(e.target.value)}
                />
                <input type="submit" value="Focar no input"/>
            </form>
        </section>
    );
}

export default HookUseRef;