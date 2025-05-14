// Página de Posts
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Post.css";
import blogFetch from "../../axios/config.js";

function Posts() {
  const { id } = useParams();
  const [post, setPost] = useState({});

  useEffect(()=>{                                         // Faz com que getPost ative uma só vez
    async function getPost(){                             // Exibe o Post por ID
      try {
  
        const response = await blogFetch.get(`/posts/${id}`);
        const data = response.data;
        setPost(data);
  
      } catch (error) {console.log(error);}
    }
    getPost();
  }, [id]);

  return (
    <section id="post-container">

      {!post.title ? <p>Carregando...</p> : 
        <section className="post">
          <h2 className="active">{post.title}</h2>
          <p>{post.body}</p>
        </section>
      }

    </section>
  );
}

export default Posts;