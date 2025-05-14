//Aplicativo Principal
import './App.css'
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { FiSend } from "react-icons/fi";
import { useForm } from './hooks/useForm';
import { useState } from 'react';
import UserForm from './components/UserForm';
import ReviewForm from './components/ReviewForm';
import FinalForm from './components/FinalForm';
import Steps from './components/Steps';

const formTemplate ={
  name: "",
  email: "",
  review: "",
  comment: "",
};

function App() {
  const [data, setData] = useState(formTemplate);
  const formComponents = [
    <UserForm data={data} update={updateField} />,
    <ReviewForm data={data} update={updateField} />,
    <FinalForm data={data} />
  ];

  const {currentStep, currentComponent, changeStep, isFirstStep, isLastStep} = useForm(formComponents);

  function updateField(key, value){
    setData((prev) => {
      return {...prev, [key]: value };
    });
  }

  return (
    <>
      <header>
        <h1>Formulário MultiStep</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci sunt inventore numquam, illo mollitia excepturi quod molestias.</p>
      </header>

      <main className="form-container">
      <Steps currentStep={currentStep} />
      <form onSubmit={(e) => {changeStep(currentStep + 1, e)}}>

        <section className="inputs">
         {currentComponent}
        </section>

        <section className="actions">
          {!isFirstStep() && (
              <button type="button" onClick={(e) => {changeStep(currentStep - 1, e)}}><GrFormPrevious/><span>Voltar</span></button>
            )}

          {!isLastStep() ? ( 
              <button type="submit"><span>Avançar</span><GrFormNext/></button>
            ) : (
              <button type="button"><span>Enviar</span><FiSend/></button>
            )}
        </section>

      </form>
      </main>
    </>
  );
}

export default App;