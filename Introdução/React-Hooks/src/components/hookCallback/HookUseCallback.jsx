// Testes com o Hook "useCallback"
import "./HookUseCallback.css";
import { useCallback, useRef, useState } from "react";
import List from "./List.jsx";

function HookUseCallback() {
    const [counter, setCounter] = useState(0);
    const timesExe = useRef(0);
    const timesExeCallback = useRef(0);

    function getItems(){    // Essa função é reenviada toda vez que o botão é apertado
        timesExe.current = timesExe.current + 1;
        return ["Item 1", "Item 2", "Item 3"];
    }

    const getItemsCallback = useCallback(() => {    // Essa função é enviada somente uma vez
        timesExeCallback.current = timesExeCallback.current + 1;
        return ["Item 1", "Item 2", "Item 3"];
    },[]);

    return (
        <section id="callback-hook">
            <h3>Hook "useCallback"</h3>
            <p>Funções sem callback e com:</p>
            <div className="items">
                <List getItems={getItems}/>
                <List getItems={getItemsCallback}/>
            </div>
            <p>Executado sem Callback: {timesExe.current}</p>
            <p>Executado com Callback: {timesExeCallback.current}</p>
            <button onClick={()=>setCounter(counter + 1)}>Atualizar</button>
        </section>
    );
}

export default HookUseCallback;