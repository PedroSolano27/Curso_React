// Página de Home
import useCounterContext from "../hooks/useCounterContext";
import useTitleContext from "../hooks/useTitleContext";
import ChangeCounter from "../components/changeCounter/ChangeCounter";

function Home() {
  const {counter} = useCounterContext();
  const {color} = useTitleContext();
  
  return (
    <>
      <h2 style={{color: color}} >Home</h2>
      <h3>Valor do contador {counter}</h3>
      <ChangeCounter/>
    </>
  );
}

export default Home;