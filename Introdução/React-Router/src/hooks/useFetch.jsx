// Hook Personalizado para Fetch
import { useState, useEffect } from "react";

export function useFetch(url) {
    const [data, setData] = useState(null);
    const [config, setConfig] = useState(null);
    const [method, setMethod] = useState(null);
    const [callFetch, setCallFetch] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    function httpConfig(data, method){                          // Configura a requisição
        if(method === "POST"){
            setConfig({
                method,
                headers: {"Content-type": "application/json"},
                body: JSON.stringify(data)
            });
            setMethod(method);
        }
    }

    useEffect(() =>{                                            // Pega os dados de uma Api "url"
        const fetchData = async function () {
            try {
                setLoading(true);

                const res = await fetch(url);
                const data = await res.json();

                setData(data);
               
            } catch (error) {
                console.log(error.message);
                setError("Houve algum erro ao carregar os dados");
            }
            setLoading(false);
        };
        fetchData(); 
    }, [url, callFetch]);
    
    useEffect(()=>{                                             // Envia dados para uma Api "url"
        async function httpRequest() {
            let json;
            try {
                if(method === "POST"){
                    setLoading(true);
    
                    let fetchOptions = [url, config];
                    const res =await fetch(...fetchOptions);
                    json = await res.json();
                }
            } catch (error) {
                console.log(error.message);
                setError("Houve algum erro ao enviar os dados");
            }
            setLoading(false);
            setCallFetch(json);
        };
        httpRequest();
    }, [config, method, url]);

    return {data, httpConfig, loading, error};
}