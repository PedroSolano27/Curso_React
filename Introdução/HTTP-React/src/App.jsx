// Aplicativo Principal
import { useState } from 'react';
import './App.css';
import { useFetch } from './hooks/useFetch';

const api = "http://localhost:3000/products";               // Url do JSON Server

function App() {
  const [name, setName] = useState([]);
  const [price, setPrice] = useState([]);

  const {data, httpConfig, loading, error} = useFetch(api); // Hook que pega dados do JSON Server

  async function handleSubmit(e){                           // Insere dados no JSON Server
    e.preventDefault();

    const product = { name, price };

    httpConfig(product, "POST");
    setName("");
    setPrice("");
  }

  return (                                                  // Aplicativo Principal
  <>
    <h1>Requisições HTTP</h1>
    <ul>
      <h3>Lista de Itens</h3>
      {loading && <h3>Carregando...</h3>}
      {error && <h3>{error}</h3>}
      {data && data.map((product) => (
        <li key={product.id} >{product.name} - R${product.price}</li>
      ))}
    </ul>

    <section className="add-product">
          <form onSubmit={handleSubmit}>
              <h3>Formulário de Cadastro de Item</h3>

              <label htmlFor="nome">Nome:</label>
              <input type="text" id="nome"  value={name} onChange={(e) => {setName(e.target.value)}}/>

              <label htmlFor="price">Preço:</label>
              <input type="number" id="price" value={price} onChange={(e) => {setPrice(e.target.value)}}/>

              {loading && <input type="submit" disabled={true} value="Aguarde um Momento"/>}
              {!loading && <input type="submit" value="Cadastrar Produto"/>}
          </form>
    </section>
  </>
  );
}

export default App;