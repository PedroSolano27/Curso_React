// Programa Principal
import "./App.css";
import { useContext } from "react";
import { QuizContext } from "./context/Quiz";
import Welcome from "./components/welcome/Welcome";
import Category from "./components/category/Category";
import Question from "./components/question/Question";
import Finish from "./components/finish/Finish";

function App() {
  const [quizState] = useContext(QuizContext);          // Contexto do Quiz

  return (
    <div className="container">
      <header>
        <h1>Questionário sobre Linguagens de Programação</h1>
      </header>

      <main>
        {quizState.gameStage === "Start" && <Welcome/>}
        {quizState.gameStage === "Category" && <Category/>}
        {quizState.gameStage === "Playing" && <Question/>}
        {quizState.gameStage === "Finish" && <Finish/>}
      </main>
    </div>
  );
}

export default App;