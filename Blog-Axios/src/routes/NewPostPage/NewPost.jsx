// Página de Criação de Posts
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./NewPost.css";
import blogFetch from "../../axios/config";

function NewPost() {
  const navigate = useNavigate();
  const [title, setTitle] = useState();
  const [body, setBody] = useState();

  async function createPost(e){                             // Faz a requisição para criar um Post
    e.preventDefault();
    if(!title || !body){return;}

    const post = {title, body, userId: 1};                  // "userId" necessário pelo JSON placeholder
    await blogFetch.post("/posts", {body: post});

    alert("Post Criado!");
    navigate("/");
  }

  return (
    <section id="new-post">
      <h2>Página de Criação de Posts</h2>
      <form onSubmit={(e)=>createPost(e)}>

        <section className="form-control">
          <label htmlFor="title">Título</label>
          <input type="text" id="title" placeholder="Digite o título"
            onChange={(e)=>setTitle(e.target.value)}
          />
        </section>

        <section className="form-control">
          <label htmlFor="body">Conteúdo</label>
          <textarea id="body" placeholder="Digite o conteúdo"
            onChange={(e)=>setBody(e.target.value)}
          />
        </section>

        <input type="submit" value="Criar Post" className="create-btn"/>
      </form>
    </section>
  );
}

export default NewPost;