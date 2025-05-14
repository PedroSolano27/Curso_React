// Página de criação de Eventos
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Form.css";
import useToast from "../../hook/useToast.jsx";
import partyFetch from "../../axios/config.js";

function NewParty() {
  const [services, setServices] = useState([]);
  const [title, setTitle] = useState();
  const [author, setAuthor] = useState();
  const [description, setDescription] = useState();
  const [budget, setBudget] = useState(0);
  const [image, setImage] = useState();
  const [partyServices, setPartyServices] = useState([]);
  const toast = useToast;
  const navigate = useNavigate();

  useEffect(()=>{                                           // Carrega os serviços só uma vez
    async function loadServices() {
      const response = await partyFetch.get("/services");
      setServices(response.data);
    }
    loadServices();
  },[]);

  function handleServices(e) {                              // Adiciona ou Remove serviços
    const checked = e.target.checked;
    const value = e.target.value;

    const filteredService = services.filter((service)=>service._id === value);
    if(checked){
      setPartyServices((services)=>[...services, filteredService[0]]);
    } else {
      setPartyServices((services)=> services.filter((service)=>service._id !== value));
    }
  }

  async function createParty(e) {                           // Cria a Festa
    e.preventDefault();

    const party = {
      title,
      author,
      description,
      budget,
      image,
      services: partyServices,
    };
    
    try {

      const res = await partyFetch.post("/parties", party);
      if(res.status === 201){
        navigate("/");
        toast(res.data.msg);
      }

    } catch (error) { 
      toast(error.response.data.msg, "error");
    }
  }

  return (
    <section className="form-page">
      <h2>Crie uma Festa</h2>
      <p>Defina o orçamento e escolha os serviços</p>
      <form onSubmit={(e)=>createParty(e)}>

        <section className="form-control">
          <label htmlFor="title">Nome da Festa:</label>
          <input type="text" id="title" placeholder="Seja criativo..." required 
            value={title || ""} onChange={(e)=>setTitle(e.target.value)}
          />
        </section>

        <section className="form-control">
          <label htmlFor="author">Anfitrião:</label>
          <input type="text" id="author" placeholder="Quem será o anfitrião?" required 
          value={author || ""} onChange={(e)=>setAuthor(e.target.value)}
          />
        </section>

        <section className="form-control">
          <label htmlFor="description">Descrição:</label>
          <textarea id="description" placeholder="Descreva os detalhes da festa" required 
            value={description || ""} onChange={(e)=>setDescription(e.target.value)}
          />
        </section>

        <section className="form-control">
          <label htmlFor="budget">Orçamento:</label>
          <input type="number" id="budget" placeholder="Quanto pretende investir?" required 
            value={budget || ""} onChange={(e)=>setBudget(e.target.value)}
          />
        </section>

        <section className="form-control">
          <label htmlFor="image">Imagem:</label>
          <input type="text" id="image" placeholder="Coloque uma imagem bacana" required 
            value={image || ""} onChange={(e)=>setImage(e.target.value)}
          />
        </section>
        
        <h2>Escolha os serviços:</h2>
        <section className="services-container">
          {services.length === 0 && <p>Carregando...</p>}
          {services.map((service)=>(
            <section className="service" key={service._id}>
              
              <img src={service.image} alt={service.name}/>
              <p className="service-name">{service.name}</p>
              <p className="service-price">R$ {service.price}</p>

              <section className="check-container">
                <input type="checkbox" value={service._id}
                  onChange={(e)=>handleServices(e)}
                />
                <p>Marque para adicionar</p>
              </section>

            </section>
          ))}
        </section>

        <input type="submit" value="Criar Festa" className="btn"/>
      </form>
    </section>
  );
}
  
export default NewParty;