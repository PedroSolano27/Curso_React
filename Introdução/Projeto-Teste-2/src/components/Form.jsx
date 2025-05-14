// Formulário
import classes from "./Form.module.css";
import { useState } from "react";

export default function Form({userName, userEmail}) {
    const [name, setName] = useState(userName);
    const [email, setEmail] = useState(userEmail);
    const [message, setMessage] = useState("");
    const [option, setOption] = useState("great");

    function handleName(e){
        setName(e.target.value);
    }
    function handleEmail(e){
        setEmail(e.target.value);
    }
    function handleMessage(e){
        setMessage(e.target.value);
    }
    function handleOption(e){
        setOption(e.target.value);
    }
    function handleSubmit(e){
        e.preventDefault(); 
        console.log(name,email);
        console.log(message);
        console.log(option);

        setName("");
        setEmail("");
        setMessage("");
    }

    return (
        <>
            <form className={classes.form} onSubmit={handleSubmit}>
                <section>
                    <label htmlFor="name">Nome:</label>
                    <input type="text" name="name" placeholder="Digite seu Nome" onChange={handleName} value={name}/>
                </section>

                <section>
                    <label>
                        <span>Email:</span>
                        <input type="email" name="email" placeholder="Digite seu Email" onChange={handleEmail} value={email}/>
                    </label>    
                </section>

                <section>
                    <label htmlFor="message">Mensagem:</label>
                    <textarea name="message" placeholder="Escreva uma mensagem" onChange={handleMessage} value={message}/>
                </section>

                <section>
                    <label htmlFor="option">Selecione uma opção:</label>
                    <select name="option" onChange={handleOption} value={option}>
                        <option value="great">Ótimo</option>
                        <option value="good">Bom</option>
                        <option value="ok">Ok</option>
                        <option value="bad">Ruim</option>
                    </select>
                </section>

                <section>
                    <input type="submit" value="Enviar"/>
                </section>
            </form>
        </>
    );
}
