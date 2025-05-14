// Página de Fim de Jogo
import "./Finish.css";
import { useContext } from "react";
import WellDone from "../../assets/welldone.svg";
import { QuizContext } from "../../context/Quiz";

function Finish() {
    const [quizState, dispatch] = useContext(QuizContext);

    return (
        <section id="game-over">
            {quizState.score <= 2 && <h2>Fim de jogo! Mais sorte na próxima vez...</h2>}
            {quizState.score > 2 && 
             quizState.score <= 4 && <h2>Fim de jogo! Tente alcançar uma nota ainda maior!</h2>}
            {quizState.score === 5 && <h2>Parabéns! Você concluiu o questionário!</h2>}
            <p>Pontuação: {quizState.score}</p>
            <p>Você acertou {quizState.score} de {quizState.questions.length} perguntas</p>
            <img src={WellDone} alt="Imagem de Parabéns"/>
            <button onClick={() => dispatch({type: "Restart"})} >Começar de Novo</button>
        </section>
    );
}

export default Finish;