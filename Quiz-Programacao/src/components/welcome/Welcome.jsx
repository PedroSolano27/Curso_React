// Página de início
import "./Welcome.css";
import { useContext } from "react";
import { QuizContext } from "../../context/Quiz";
import image from "../../assets/quiz.svg";

function Welcome() {
    const [quizState, dispatch] = useContext(QuizContext);             // Contexto do Quiz
    quizState;  //Para tirar aquele erro chato que o VS Code tem, isso não faz nada
    
    return (
        <section id="welcome">
            <h2>Seja bem-vindo</h2>
            <p>Clique no botão abaixo para começar:</p>
            <button onClick={() => dispatch({type: "Change_State"})}>Iniciar</button>
            <img src={image} alt="Imagem de Boas-Vindas"/>
        </section>
    );
}

export default Welcome;