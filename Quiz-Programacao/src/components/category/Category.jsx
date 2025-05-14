// Página de Categorias
import "./Category.css";
import { useContext } from "react";
import { QuizContext } from "../../context/Quiz";
import CategoryImage from "../../assets/category.svg";

function Category() {
    const [quizState, dispatch] = useContext(QuizContext);

    function chooseCategory(category){                      // Carrega a Categoria e Reordena as Questões
        dispatch({type: "Start_Quiz", payload: category});
        dispatch({type: "Reorder"});
    }

    return (
    <section id="category">
        <h2>Escolha o Conteúdo do Questionário</h2>
        <p>As perguntas serão referentes a uma das linguagens abaixo</p>

        {quizState.questions.map((question) =>(
            <button key={question.category} onClick={() => chooseCategory(question.category)} >
                {question.category}
            </button>
        ))}

        <img src={CategoryImage} alt="Imagem de Categoria"/>
    </section>
    );
}

export default Category;