// Página de Edição
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import "./Edit.css";
import blogFetch from "../../axios/config";

function Edit() {
    const navigate = useNavigate();
    const [title, setTitle] = useState();
    const [body, setBody] = useState();
    const { id } = useParams();

    useEffect(()=>{                                             // Faz com que getPost ative uma só vez
        async function getPost(){                               // Pega o Post por ID
          try {
      
            const response = await blogFetch.get(`/posts/${id}`);
            const data = response.data;
            setTitle(data.title);
            setBody(data.body);
      
          } catch (error) {console.log(error);}
        }
        getPost();
    }, [id]);

    async function editPost(e) {
        e.preventDefault();

        const post = {title, body, userId: 1}
        await blogFetch.put(`/posts/${id}`, {body: post});
        navigate("/admin");
    }

    return (
        <section id="edit-post">
            <h2>Página de Edição de Posts</h2>
            <form onSubmit={(e)=>{editPost(e)}} >

                <section className="form-control">
                <label htmlFor="title">Título</label>
                <input type="text" id="title" value={title || ""}
                    onChange={(e)=>setTitle(e.target.value)}
                />
                </section>

                <section className="form-control">
                <label htmlFor="body">Conteúdo</label>
                <textarea id="body" value={body || ""}
                    onChange={(e)=>setBody(e.target.value)}  
                />
                </section>

                <input type="submit" value="Salvar Post" className="create-btn"/>
            </form>
        </section>
    );
}

export default Edit;