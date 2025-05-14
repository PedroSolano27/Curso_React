// Página de memória
import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import "./Memory.css";
import memoryFetch from "../../axios-config";
import useToast from "../../hook/useToast.jsx";

function Memory() {
  const [memory, setMemory] = useState([]);
  const [comments, setComments] = useState([]);
  const [inputs, setInputs] = useState({});

  const { id } = useParams();
  const toast = useToast;
  const navigate = useNavigate();

  useEffect(()=>{                               // Carrega a memória apenas uma vez
    async function getMemory() {
      const response = await memoryFetch.get(`/memories/${id}`);
      setMemory(response.data);
      setComments(response.data.comments);
    }

    getMemory();
  },[id]);

  function handleChange(e){                     // Gerencia as mudanças de valor
    setInputs({...inputs, [e.target.id]: e.target.value});
  }

  async function deleteMemory() {               // Deleta a Memória
    try {

      const response = await memoryFetch.delete(`/memories/${id}`);
      toast(response.data.msg);
      navigate("/");

    } catch (error) { toast(error.response.data.msg, "error"); }
  }

  async function addComment(e) {                // Adiciona um comentário
    e.preventDefault();
    
    try {

      const response = await memoryFetch.patch(`/memories/${id}/comment/`, inputs);
      const lastComment = response.data.memory.comments.pop()
      setComments((comments)=> [...comments, lastComment]);
      
      setInputs({name: "", text: ""});

      toast(response.data.msg);

    } catch (error) { toast(error.response.data.msg, "error"); }
  }

  async function deleteComment(commentId) {     // Deleta comentário
    try {
      
      const response = await memoryFetch.delete(`/memories/${id}/comment/${commentId}`);
      const filteredComments = comments.filter((comment)=> comment._id !== commentId);
      setComments(filteredComments);

      toast(response.data.msg);

    } catch (error) { toast(error.response.data.msg, "error"); }
  }

  return (
    <section id="memory-page">
      <h2>Detalhes da memória "{memory.title}"</h2>

      <section id="memory-container">
        <img src={`${memoryFetch.defaults.baseURL}${memory.src}`} alt={memory.title} />
        <h3>{memory.title}</h3>
        <p>{memory.description}</p>
        <section id="actions">
          <Link to={`/memory/${id}/edit`} className="btn">Editar</Link>
          <Link className="btn delete-btn" onClick={()=>deleteMemory()}>Excluir</Link>
        </section>
      </section>

      <section id="comment-form">
        <h3>Envie seu comentário:</h3>
        <form onSubmit={(e)=>addComment(e)}>

          <section className="form-control">
            <label htmlFor="name">Nome:</label>
            <input type="text" id="name" placeholder="Escreva seu nome"
              onChange={(e)=>handleChange(e)} value={inputs.name || ""}
            />
          </section>

          <section className="form-control">
            <label htmlFor="text">Comentário:</label>
            <textarea id="text" placeholder="Escreva seu comentário..."
              onChange={(e)=>handleChange(e)} value={inputs.text || ""}
            />
          </section>

          <input type="submit" className="btn" value="Adicionar"/>
        </form>
      </section>

      <section id="comments-container">
        <h3>Comentários ({comments.length})</h3>
        {comments.length === 0 && <p>Nenhum comentário...</p>}
        {comments.length > 0 && comments.map((comment)=>(
          <section className="comment" key={comment._id} >
            <section>
              <p className="comment-name" >{comment.name}</p>
              <p className="comment-text">{comment.text}</p>
            </section>
            <button className="btn delete-btn" onClick={()=>deleteComment(comment._id)}>Excluir</button>
          </section>
        ))}
      </section>

    </section>
  );
}

export default Memory;