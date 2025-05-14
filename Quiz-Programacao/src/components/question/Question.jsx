// Página de Questões
import "./Question.css";
import { useContext } from "react";
import { QuizContext } from "../../context/Quiz";
import Options from "../options/Options";

function Question() {
    const [quizState, dispatch] = useContext(QuizContext);
    const currentQuestion = quizState.questions[quizState.currentQuestion];

    return (
        <section id="question">
            <p id="cont-pergunta">
                Pergunta {quizState.currentQuestion + 1} de {quizState.questions.length}
            </p>
            <h2>{currentQuestion.question}</h2>
            <Options/>
            
            {!quizState.answered &&
                <button onClick={() => dispatch({type: "Show_Tip"})} >Dica</button>
            }

            {!quizState.answered &&
                <button onClick={() => dispatch({type: "Remove_Option"})} >Remover uma Opção</button>
            }

            {!quizState.answered && quizState.help === "tip" &&
                <p>{currentQuestion.tip}</p>
            }

            {quizState.answered &&  
                <button onClick={() => dispatch({type: "Change_Question"})} >Continuar</button>
            }
        </section>
    );
}

export default Question;