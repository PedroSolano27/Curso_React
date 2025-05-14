// Testes com o Hook "useContext"
import "./HookUseContext.css";
import { useContext, useState } from "react";
import { TestContext } from "../../context/TestContext";

function HookUseContext() {
    const {testValue, setTestValue} = useContext(TestContext);
    const [temp, setTemp] = useState("");

    function handleSubmit(e){
        e.preventDefault();
        setTestValue(temp);
    }

    return (
    <section id="context-hook">
        <h3>Hook "useContext"</h3>
        <p>Valor do contexto: {testValue}</p>
        <form onSubmit={handleSubmit}>
            <label htmlFor="text">Escreva um texto</label>
            <input type="text" id="text"
                onChange={(e) => setTemp(e.target.value)}
            />
            <input type="submit" value="Salvar"/>
            </form>
    </section>
  );
}

export default HookUseContext;