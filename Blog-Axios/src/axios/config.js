// Configuração do fetch() do Axios
import axios from "axios";

const blogFetch = axios.create({                // Padroniza a Requisição
    baseURL: "https://jsonplaceholder.typicode.com",
    headers: { "Content-Type": "aplication/json", },
});

export default blogFetch;