// Testes com o hook "useState"
import "./HookUseState.css";
import { useState } from "react";

function HookUseState() {
    let userName = "Pedro";
    const [name, setName] = useState(userName);
    const [age, setAge] = useState(19);

    function changeName(){
        setName("Pedro Solano");
    }

    return (
        <section id="state-hook">
            <h3>Hook "useState"</h3>
            <p>Variáveis: {userName}, {age}</p>
            <p>Nome: {name}</p>
            <p>Idade: {age}</p>
            <button onClick={() => changeName()}>Mudar Nome</button>
            <form>
                <input type="text" value={age}
                    onChange={(e) => setAge(e.target.value)}
                />
            </form>
        </section>
    );
}

export default HookUseState;