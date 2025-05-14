// Página de Administração
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Admin.css";
import blogFetch from "../../axios/config";

function Admin() {
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

    async function deletePost(id) {                   // Faz a requisição para deletar um post
        await blogFetch.delete(`/posts/${id}`);
        alert("Post Excluído!");

        const filteredPosts = posts.filter((post)=> post.id !== id);
        setPosts(filteredPosts);
    }

    return (
        <section id="admin-area">
            <h2>Gerenciamento de Posts</h2>

            {posts.length === 0 ? <p>Carregando...</p> : (
                posts.map((post)=>(
                    <section className="post" key={post.id} >
                        <h3>{post.title}</h3>
                        <section className="actions">
                            <Link to={`/admin/edit/${post.id}`} className="btn edit-btn">Editar</Link>
                            <button onClick={()=>deletePost(post.id)} className="btn delete-btn">
                                Excluir
                            </button>
                        </section>
                    </section>
                ))
            )}

        </section>
    );
}

export default Admin;