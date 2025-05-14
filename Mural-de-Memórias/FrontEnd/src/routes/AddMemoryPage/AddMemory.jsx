// Página de adicionar memórias
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AddMemory.css";
import memoryFetch from "../../axios-config";
import useToast from "../../hook/useToast.jsx";

function AddMemory() {
  const [inputs, setInputs] = useState({});
  const [image, setImage] = useState(null);
  const toast = useToast;
  const navigate = useNavigate();
  
  async function addMemory(e) {             // Salva a Memória
    e.preventDefault();
    
    const formData = new FormData();
    formData.append("title", inputs.title);
    formData.append("description", inputs.description);
    formData.append("image", image);
    
    try {

      const response = await memoryFetch.post("/memories", formData, {
        headers: {"Content-Type": "multipart/form-data"}
      })
      toast(response.data.msg);
      navigate("/");

    } catch (error) { toast(error.response.data.msg, "error"); }
  }

  function handleChange(e){                 // Gerencia as mudanças de valor
    if(e.target.id === "image") {
      setImage(e.target.files[0]);
      return;
    }

    setInputs({...inputs, [e.target.id]: e.target.value});
  }

  return (
    <section id="new-memory-page">
        <h2>Crie uma nova memória</h2>
        <form onSubmit={(e)=> addMemory(e)}>

          <section className="form-control">
            <label htmlFor="title">Título:</label>
            <input type="text" id="title" placeholder="Defina um título" required
              onChange={(e)=>handleChange(e)}
            />
          </section>

          <section className="form-control">
            <label htmlFor="description">Descrição:</label>
            <textarea id="description" placeholder="Escreva o que aconteceu..." required
              onChange={(e)=>handleChange(e)}
            />
          </section>

          <section className="form-control">
            <label htmlFor="image">Foto:</label>
            <input type="file" id="image"
              onChange={(e)=>handleChange(e)}
            />
          </section>

          <input type="submit" className="btn" value="Adicionar"/>
        </form>
    </section>
  );
}

export default AddMemory;