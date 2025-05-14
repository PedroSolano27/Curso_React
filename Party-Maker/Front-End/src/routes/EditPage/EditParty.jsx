// Página de Edição de Festas
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../Form.css";
import partyFetch from "../../axios/config";
import useToast from "../../hook/useToast.jsx";

function EditParty() {
    const { id } = useParams();
    const [party, setParty] = useState(null);
    const [services, setServices] = useState([]);
    const toast = useToast;
    const navigate = useNavigate();

    useEffect(()=>{                                                 // Carrega a Festa apenas uma vez
        async function loadParty() {
            const response = await partyFetch.get(`/parties/${id}`);
            setParty(response.data);
        }
        loadParty();
    },[id]);

    useEffect(()=>{                                                 // Carrega os serviços só uma vez
        async function loadServices() {
            const response = await partyFetch.get("/services");
            setServices(response.data);
        }
        loadServices();
    },[]);

    function handleServices(e) {                                    // Adiciona ou Remove serviços
        const checked = e.target.checked;
        const value = e.target.value;

        let partyServices = party.services;

        const filteredService = services.filter((service)=>service._id === value);
        if(checked){
            partyServices = [...partyServices, filteredService[0]];
        } else {
            partyServices = partyServices.filter((service)=>service._id !== value);
        }

        setParty({...party, services: partyServices});
    }

    async function createParty(e) {                                 // Salva a Festa atualizada
        e.preventDefault();
        
        try {
            
            const response = await partyFetch.put(`/parties/${party._id}`, party);
            if(response.status === 200){
                navigate(`/party/${party._id}`);
                toast(response.data.msg);    
            }

        } catch (error) { toast(error.response.data.msg, "error"); }
    }

    if(!party) { return <h2>Carregando...</h2> }
    return (
        <section className="form-page">
            <h2>Edição da Festa "{party.title}"</h2>
            <p>Altere o que deseja abaixo</p>
            <form onSubmit={(e)=>createParty(e)}>

                <section className="form-control">
                    <label htmlFor="title">Nome da Festa:</label>
                    <input type="text" id="title" placeholder={"Seja criativo..."} required 
                        value={party.title || ""} 
                        onChange={(e)=>setParty({...party, title: e.target.value})}
                    />
                </section>

                <section className="form-control">
                    <label htmlFor="author">Anfitrião:</label>
                    <input type="text" id="author" placeholder="Quem será o anfitrião?" required 
                        value={party.author || ""} 
                        onChange={(e)=>setParty({...party, author: e.target.value})}
                    />
                </section>

                <section className="form-control">
                    <label htmlFor="description">Descrição:</label>
                    <textarea id="description" placeholder="Descreva os detalhes da festa" required 
                        value={party.description || ""} 
                        onChange={(e)=>setParty({...party, description: e.target.value})}
                    />
                </section>

                <section className="form-control">
                    <label htmlFor="budget">Orçamento:</label>
                    <input type="number" id="budget" placeholder="Quanto pretende investir?" required 
                        value={party.budget || ""} 
                        onChange={(e)=>setParty({...party, budget: e.target.value})}
                    />
                </section>

                <section className="form-control">
                    <label htmlFor="image">Imagem:</label>
                    <input type="text" id="image" placeholder="Coloque uma imagem bacana" required 
                        value={party.image || ""} 
                        onChange={(e)=>setParty({...party, image: e.target.value})}
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
                                checked={party.services.find(
                                    (partyService)=> partyService._id === service._id
                                ) || ""}
                            />
                            <p>Marque para adicionar</p>
                            </section>

                        </section>
                    ))}
                </section>

                <input type="submit" value="Salvar Festa" className="btn"/>
            </form>
        </section>
    );
} 

export default EditParty;