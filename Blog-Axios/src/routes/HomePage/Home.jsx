// Página de início
import blogFetch from "../../axios/config";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  const [posts, setPosts] = useState([]);

  async function getPosts() {                       // Função para Procurar os Posts na API
    try {

      const response = await blogFetch.get("/posts");
      const data = response.data;
      setPosts(data);

    } catch (error) { console.log(error); }
  }

  useEffect(()=>{                                   // Executa a função somente uma vez
    getPosts();
  },[]);

  return (
    <section id="home">
        <h2>Página de Início</h2>

        {posts.length === 0 ? <p>Carregando...</p> : (
          posts.map((post)=>(
            <section className="post" key={post.id} >
              <h3>{post.title}</h3>
              <p>{post.body}</p>
              <Link to={`/posts/${post.id}`} className="post-link">Ler Mais</Link>
            </section>
          ))
        )}

    </section>
  );
}

export default Home;