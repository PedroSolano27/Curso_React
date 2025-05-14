// Página Principal
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import partyFetch from "../../axios/config.js";

function Home() {
  const [parties, setParties] = useState(null);
  
  useEffect(()=>{                                                 // Carrega as Festas apenas uma vez
    async function loadParties() {
      const response = await partyFetch.get("/parties");
      setParties(response.data);
    }
    loadParties();
  });

  if(!parties){ return <h2>Carregando...</h2> }
  return (
    <section id="home">
      <h2>Suas Festas</h2>
      <section id="parties-container">

        {parties.length === 0 && <h2>Não há festas cadastradas...</h2>}
        {parties.map((party)=>(
          <section className="party" key={party._id}>
            <img src={party.image} alt={party.title}/>
            <h3>{party.title}</h3>
            <Link to={`/party/${party._id}`} className="party-btn btn">Detalhes</Link>
          </section>
        ))}
        
      </section>
    </section>
  );
}

export default Home;