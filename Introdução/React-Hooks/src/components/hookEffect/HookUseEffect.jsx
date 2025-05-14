/* eslint-disable react-hooks/exhaustive-deps */
// Testes com o Hook "useEffect"
import { useState, useEffect } from "react";
import "./HookUseEffect.css";

function HookUseEffect() {
  const [number, setNumber] = useState(1);
  const [otherNumber, setOtherNumber] = useState(1);
  const [emptyArray, setEmptyArray] = useState(0);
  const [withArray, setWithArray] = useState(0);

  useEffect(() =>{                  // Executado uma única vez
    setEmptyArray(emptyArray + 1);
  }, []);

  useEffect(() =>{                  // Executado toda vez que "otherNumber" for alterado
    setWithArray(withArray + 1);
  }, [number]);

  function increaseNumber(){        // Aumenta o número
    setNumber(number + 1);
    
  };
  function increaseOtherNumber(){   // Aumenta o número
    setOtherNumber(otherNumber + 1);
   
  };

  return (
    <section id="effect-hook">
        <h3>Hook "useEffect"</h3>
        <h4>Aperte um botão para ativar um hook</h4>
        <button onClick={() => increaseNumber()}>Botão</button>
        <button onClick={() => increaseOtherNumber()}>Outro Botão</button>

        <p>Executado com array vazio: {emptyArray}</p>
        <p>Executado monitorando Botão: {withArray}</p>
    </section>
  );
}

export default HookUseEffect;