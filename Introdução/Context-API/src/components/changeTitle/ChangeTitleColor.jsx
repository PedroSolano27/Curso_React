// Alterar Cor de Título
import "./ChangeTitleColor.css";
import useTitleContext from "../../hooks/useTitleContext";

function ChangeTitle() {
    const {dispatch} = useTitleContext();
    return (
        <section id="color-select">
            <button id="blue" onClick={() => dispatch({type: "Blue"})}>Azul</button>
            <button id="red" onClick={() => dispatch({type: "Red"})}>Vermelho</button>
            <button id="purple" onClick={() => dispatch({type: "Purple"})}>Roxo</button>
        </section>
    );
}

export default ChangeTitle;