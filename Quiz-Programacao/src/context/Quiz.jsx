/* eslint-disable react-refresh/only-export-components */
// Contexto do Quiz para a Aplicação
import { createContext } from "react";
import { useReducer } from "react";
import questions from "../data/questions_complete";

const Stages = ["Start", "Category", "Playing", "Finish"];          // Array com os estágios do Quiz
const initialState = {                                              // Estágio inicial do Quiz
    gameStage: Stages[0],   // Página Atual
    questions,              // Questões do Quiz
    currentQuestion: 0,     // Questão Atual
    removedOption: null,    // Opção Removida
    score: 0,               // Número de Respostas Corretas
    canTip: 2,              // Número de Dicas Disponíveis
    canRemove: 2,           // Número de Remoções Disponíveis
    help: false,            // Se Ajuda está em Efeito
    answered: false         // Se a Questão foi Respondida
}

function quizReducer(state, action){                                // Reducer do Quiz
    switch(action.type){
        case "Change_State": {                                      // Muda o Estado
            return {
                ...state, 
                gameStage: Stages [1]
            };
        }    
        
        case "Start_Quiz": {                                        // Inicia o questionário
            let quizQuestions = null;
            state.questions.forEach((question) =>{
                if(question.category === action.payload){
                    quizQuestions = question.questions;
                }
            });

            return {
                ...state,
                gameStage: Stages[2],
                questions: quizQuestions,
            };
        }

        case "Reorder":  {                                          // Embaralha as questões
            const reorderedQuestions = state.questions.sort(()=> {
                return Math.random() - 0.5;
            });

            return {...state, questions: reorderedQuestions}; 
        }

        case "Change_Question": {                                   // Muda a Questão ou Finaliza o Jogo
            const nextQuestion = state.currentQuestion + 1;
            let endGame = false;
            
            if(!state.questions[nextQuestion]){ endGame = true }
            return {
                ...state, 
                gameStage: endGame ? Stages[3]: state.gameStage,
                currentQuestion: nextQuestion, 
                help: false,
                answered: false,
            };
        }

        case "Show_Tip": {                                          // Mostra Dicas
            if(state.canTip <= 0 || state.help === true){
                return state;
            }
           
            return {
                ...state,
                canTip: state.canTip -1,
                help: "tip",
            };
        }

        case "Remove_Option": {                                     // Remove uma Opção Incorreta
            if(state.canRemove <= 0 || state.help === true){
                return state;
            }

            const question = state.questions[state.currentQuestion];
            let optionToRemove;
            let remove = true;

            question.options.forEach((option) =>{
                if(option !== question.answer && remove){
                    optionToRemove = option;
                    remove = false;
                }
            });
            
            return {
                ...state,
                removedOption: optionToRemove,
                canRemove: state.canRemove -1,
                help: "remove",
            };
        }

        case "Check_Answer": {                                      // Verifica a Resposta
            if(state.answered){return state;};

            const answer = action.payload.answer;
            const option = action.payload.option;
            let correctAnswer = 0;

            if(answer === option) {correctAnswer = 1;}
            return {
                ...state,
                score: state.score + correctAnswer,
                answered: true
            };
        }

        case "Restart": {                                           // Reinicia o Jogo
            return initialState;                                    // Não Embaralha as Questões
        }
            
        default: return state;
    }
}

export const QuizContext = createContext();                         // Cria o contexto do Quiz
export const QuizProvider = ({children}) => {                       // Exporta o Contexto do Quiz
    const value = useReducer(quizReducer, initialState);

    return <QuizContext.Provider value={value} >{children}</QuizContext.Provider>
}