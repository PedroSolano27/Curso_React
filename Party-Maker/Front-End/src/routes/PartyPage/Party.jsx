// Página de detalhes da Festa
import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import "./Party.css";
import partyFetch from "../../axios/config.js";
import useToast from "../../hook/useToast.jsx";

function Party() {
  const { id } = useParams();
  const [party, setParty] = useState(null);
  const navigate = useNavigate();
  const toast = useToast;

  useEffect(()=>{                                                 // Carrega a Festa apenas uma vez
    async function loadParty() {
      const response = await partyFetch.get(`/parties/${id}`);
      setParty(response.data);
    }
    loadParty();
  },[id]);

  async function deleteParty() {                                  // Deleta Festa por Id
    try {

      const response = await partyFetch.delete(`/parties/${id}`);
      if(response.status === 200){
        navigate("/");
        toast(response.data.msg);
      }

      } catch (error) { 
        toast(error.response.data.msg, "error");
    }
  }

  if(!party) { return <h2>Carregando...</h2> }
  return (
    <section id="party">
        <h2>Detalhes da Festa "{party.title}"</h2>
        
        <section id="info-container">
          <img src={party.image} alt={party.title}/>
          <ul>
            <li>
              <span>Anfitrião:</span> {party.author}
            </li>
            <li>
              <span>Orçamento:</span> R$ {party.budget}
            </li>
            <li>
              <span>Detalhes:</span> {party.description}
            </li>
          </ul>
        </section>

        <section id="actions">
          <Link to={`/party/edit/${id}`} className="btn">Editar</Link>
          <button className="btn" onClick={()=>deleteParty()}>Excluir</button>
        </section>

        <h3>Serviços contratados:</h3>
        <section className="services-container">

          {party.services.length === 0 && <h3>Nenhum serviço contratado</h3>}
          {party.services.map((service)=>(
            <section className="service" key={service._id}>
              <img src={service.image} alt={service.name}/>
              <p className="service-name">{service.name}</p>
              <p className="service-price">R$ {service.price}</p>
            </section>
          ))}

        </section>
    </section>
  );
}

export default Party;