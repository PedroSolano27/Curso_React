// Componente das Opções
import "./Options.css";
import { useContext } from "react";
import { QuizContext } from "../../context/Quiz";

function Options() {
    const [quizState, dispatch] = useContext(QuizContext);
    const currentQuestion = quizState.questions[quizState.currentQuestion];

    function selectOption(option){                                     //Verifica a Resposta
        dispatch({
            type: "Check_Answer",
            payload: {answer: currentQuestion.answer, option}
        });
    }

    return (
        <section id="options-container">
            {currentQuestion.options.map((option) => (
                <p  className={`option
                    ${quizState.removedOption === option ? "removed" : ""} 
                    ${quizState.answered && option === currentQuestion.answer ? "correct" : ""}
                    ${quizState.answered && option !== currentQuestion.answer ? "incorrect" : ""}
                    `} 
                    key={option} onClick={() => selectOption(option)} >
                    {option}
                </p>
            ))}
        </section>
    );
}

export default Options;