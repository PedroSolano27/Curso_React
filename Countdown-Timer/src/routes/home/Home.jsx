// Página Principal
import "./Home.css";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CountContext } from "../../context/CountContext";

function Home() {
    const [title, setTitle] = useState();
    const [date, setDate] = useState();
    const [image, setImage] = useState();
    const [color, setColor] = useState();
    const {event, setEvent} = useContext(CountContext);
    const navigate = useNavigate();


    function handleSubmit(e){                               // Cria o Objeto de Countdown
        e.preventDefault();
        const eventObject = {title, date, image, color,}

        setEvent(eventObject);
        event;  // Não faz nada
        navigate("/countdown");
    }

    return (
        <div id="home">
            <header>
                <h1>Monte sua Contagem Regressiva</h1>
            </header>

            <main>
                <form className="countdown-form"  onSubmit={handleSubmit}>

                    <section className="form-control">
                        <label htmlFor="title">Título:</label>
                        <input type="text" name="title" id="title" placeholder="Digite o Evento"
                            onChange={(e) =>{setTitle(e.target.value)}} required
                        />
                    </section>

                    <section className="form-control">
                        <label htmlFor="date">Data do Evento:</label>
                        <input type="date" name="date" id="date"
                            onChange={(e) =>{setDate(e.target.value)}} required
                        />
                    </section>

                    <section className="form-control">
                        <label htmlFor="image">Imagem:</label>
                        <input type="text" name="image" id="image" placeholder="Insira a URL da imagem"
                            onChange={(e) =>{setImage(e.target.value)}}
                        />
                    </section>

                    <section className="form-control">
                        <label htmlFor="color">Cor do Tema:</label>
                        <input type="color" name="color" id="color"
                            onChange={(e) =>{setColor(e.target.value)}}
                        />
                    </section>

                    <input type="submit" value="Enviar"/>
                </form>
            </main>
        </div>
    );
}

export default Home;