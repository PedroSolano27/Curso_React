// Tablea de IMC
// import { useState } from "react";
import "./Table.css";
import Button from "./Button";

function Table({data, imc, info, infoClass, action}) {
  return (                                                          // Tabela
    <section id="table-container">
      <p id="imc-number">Seu IMC: <span className={infoClass} >{imc}</span></p>
      <p id="imc-info">Situação Atual: <span className={infoClass} >{info}</span></p>
      <h3>Confira as classificações:</h3>
      <section id="imc-table">
        
        <section className="table-header">
          <h4>IMC</h4>
          <h4>Classificação</h4>
          <h4>Obesidade</h4>
        </section>

        {data.map((item) => (
          <section className="table-data" key={item.info}>
            <p>{item.classification}</p>
            <p>{item.info}</p>
            <p>{item.obesity}</p>
          </section>
        ))}

        </section>
        <Button id="back-btn" text="Voltar" action={action}/>
    </section>
  );
}

export default Table;