// Página de Contato
import useCounterContext from "../hooks/useCounterContext";
import useTitleContext from "../hooks/useTitleContext";
import ChangeTitle from "../components/changeTitle/ChangeTitleColor";

function Contact() {
  const {counter} = useCounterContext();
  const {color} = useTitleContext();

  return (
    <>
      <h2 style={{color: color}} >Página de Contato</h2>
      <h3>O valor do contador é: {counter}</h3>
      <ChangeTitle/>
    </>
  );
}

export default Contact;