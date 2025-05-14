// Página home
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import memoryFetch from "../../axios-config";

function Home() {
  const [memories, setMemories] = useState([]);

  useEffect(()=>{                               // Carrega as memórias apenas uma vez
    async function getMemories() {
      const response = await memoryFetch.get("/memories");
      setMemories(response.data);
    }

    getMemories();
  },[]);

  return (
    <section id="home">
      <h2>Suas memórias</h2>
      
      <section id="memories-container">
        {memories.length === 0 && <h3>Nenhuma memória salva</h3>}
        {memories.length > 0 && memories.map((memory)=>(
          <section className="memory" key={memory._id} >
            <img src={`${memoryFetch.defaults.baseURL}${memory.src}`} alt={memory.title} />
            <h3>{memory.title}</h3>
            <Link to={`/memory/${memory._id}`} className="btn">Ver mais</Link>
          </section>
        ))}
      </section>
      
    </section>
  );
}

export default Home;