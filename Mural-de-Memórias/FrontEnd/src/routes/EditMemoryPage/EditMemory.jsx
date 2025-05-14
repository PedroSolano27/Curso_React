// Página de edição
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./EditMemory.css";
import memoryFetch from "../../axios-config.js";
import useToast from "../../hook/useToast.jsx";

function EditMemory() {
  const [inputs, setInputs] = useState({});
  const [image, setImage] = useState(null);

  const { id } = useParams();
  const toast = useToast;
  const navigate = useNavigate();

  useEffect(()=>{                               // Carrega a memória apenas uma vez
    async function getMemory() {
      const response = await memoryFetch.get(`/memories/${id}`);
      setInputs(response.data);
    }

    getMemory();
  },[id]);
  
  async function saveMemory(e) {                // Salva a Memória Editada
    e.preventDefault();
    
    const formData = new FormData();
    formData.append("title", inputs.title);
    formData.append("description", inputs.description);
    formData.append("image", image);
    
    try {

      const response = await memoryFetch.patch(`/memories/${id}`, formData, {
        headers: {"Content-Type": "multipart/form-data"}
      })
      toast(response.data.msg);
      navigate(`/memory/${id}`);

    } catch (error) { toast(error.response.data.msg, "error"); }
  }

  function handleChange(e){                     // Gerencia as mudanças de valor
    if(e.target.id === "image") {
      setImage(e.target.files[0]);
      return;
    }

    setInputs({...inputs, [e.target.id]: e.target.value});
  }

  return (
    <section id="edit-memory-page">
        <h2>Edição da memória "{inputs.title}"</h2>
        <form onSubmit={(e)=> saveMemory(e)}>

          <section className="form-control">
            <label htmlFor="title">Título:</label>
            <input type="text" id="title" placeholder="Defina um título" required
              onChange={(e)=>handleChange(e)} value={inputs.title || ""}
            />
          </section>

          <section className="form-control">
            <label htmlFor="description">Descrição:</label>
            <textarea id="description" placeholder="Escreva o que aconteceu..." required
              onChange={(e)=>handleChange(e)} value={inputs.description || ""}
            />
          </section>

          <section className="form-control">
            <label htmlFor="image">Foto:</label>
            <input type="file" id="image"
              onChange={(e)=>handleChange(e)}
            />
          </section>

          <input type="submit" className="btn" value="Salvar"/>
        </form>
    </section>
  );
}

export default EditMemory;