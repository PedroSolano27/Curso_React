// Botões
import "./Button.css";

function Button({id, text, action}) {
    function handleAction(e){e.preventDefault(); action(e); };
    return (
        <button id={id} onClick={handleAction}>{text}</button>
    );
}

export default Button;