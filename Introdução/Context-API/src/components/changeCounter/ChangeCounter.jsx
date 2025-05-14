// Mudador de Contador
import "./ChangeConter.css";
import useCounterContext from "../../hooks/useCounterContext";

function ChangeCounter() {
    const {counter, setCounter} = useCounterContext();
    return (
        <section id="counter-btn">
            <button onClick={() => setCounter(counter + 1)}>Incrementar</button>
        </section>
    );
}

export default ChangeCounter;