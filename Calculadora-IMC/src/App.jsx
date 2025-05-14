// Arquivo principal do App
import data from "./data/data.js";
import { useState } from "react";
import "./App.css"
import Calc from "./components/Calc";
import Table from "./components/Table";

function App() {
  const [imc, setImc] = useState("");
  const [info, setInfo] = useState("");
  const [infoClass, setInfoClass] = useState("");

  function calcImc(e, height, weight){                                // Cálculo de IMC
    if (!weight || !height){return;};
    
    const weightNum = +weight.replace(",", ".");
    const heightNum = +height.replace(",", ".");
    const imcResult = (weightNum / (heightNum * heightNum)).toFixed(1);

    setImc(imcResult);
    data.forEach(item => {
      if(imcResult >= item.min && imcResult <= item.max){
        setInfo(item.info);
        setInfoClass(item.infoClass);
      }
    });

    if (!info) return;
  }
  function cleanCalc (){                                              // Limpa a Calculadora
    setImc("");
    setInfo("");
    setInfoClass("");
  }

  return (                                                            // Aplicativo
    <div className="container">
      {
        !imc ? <Calc calculator={calcImc}/> :
        <Table data={data} imc={imc} info={info} infoClass={infoClass} action={cleanCalc}/>
      }
    </div>
  );
}

export default App; 