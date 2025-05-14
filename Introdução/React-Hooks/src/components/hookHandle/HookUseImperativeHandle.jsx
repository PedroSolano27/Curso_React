// Testes com o Hook  "useImperativeHandle"
import "./HookUseImperativeHandle.css";
import { useRef } from "react";
import RefComponent from "./RefComponent";

function HookUseImperativeHandle() {
    const componentRef = useRef();

    return (
        <section id="handle-hook">
            <h3>Hook "useImperativeHandle"</h3>
            <RefComponent ref={componentRef} />
            <button onClick={()=>componentRef.current.validate() // Função vinda de RefComponent
            }> 
                Validar
            </button>
        </section>
    );
}

export default HookUseImperativeHandle;