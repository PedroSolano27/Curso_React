// Configuração do Axios
import axios from "axios";

const memoryFetch = axios.create({
    baseURL: "http://localhost:3000/",
    headers: {"Content-Type": "application/json"},
    timeout: 10000  // 10 Segundos
});

export default memoryFetch;