// Título
import "./Title.css";

function Title({text, color}) {
    return (
        <h1 className="title" style={{color: color}} >
            {text}
        </h1>
    );
}

export default Title;