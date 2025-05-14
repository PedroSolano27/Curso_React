// Calculadora de IMC
import { useState } from "react";
import Button from "./Button";
import "./Calc.css";

function Calc({calculator}) {
    const [height, setHeight] = useState("");                               // Hook de altura
    const [weight, setWeight] = useState("");                               // Hook de Peso

    function validDigits(text){                                             // Valida o Input
        return text.replace(/[^0-9,]/g, "");
    }
    function handleHeight(e){                                               // Input de Altura
        setHeight(validDigits(e.target.value));
    };
    function handleWeight(e){                                               // Input de Peso
        setWeight(validDigits(e.target.value));
    };
    function cleanForm(){                                                   // Limpar formulário
        setHeight("");
        setWeight("");
    };    

    return (                                                                //Inputs e Botões
        <section id="calc-container">
            <h2>Calculadora de IMC</h2>
            <form id="imc-form">

                <section className="form-inputs">
                    <section className="form-control">
                        <label htmlFor="height">Altura:</label> 
                        <input type="text" name="height" id="height" placeholder="Exemplo: 1,61" 
                        onChange={handleHeight} value={height}/>
                    </section>
                    <section className="form-control">
                        <label htmlFor="weight">Peso:</label> 
                        <input type="text" name="weight" id="weight" placeholder="Exemplo: 60,5kg" 
                        onChange={handleWeight} value={weight}/>
                    </section>
                </section>

                <section className="form-buttons">
                    <Button id="calc-btn" text="Calcular" 
                    action={function(e){calculator(e, height, weight)}}/>
                    <Button id="clean-btn" text="Limpar" action={cleanForm}/>
                </section>

            </form>
        </section>
    );
}

export default Calc;