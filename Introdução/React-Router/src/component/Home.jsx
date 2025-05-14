// Página de Home
import { Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

const url = "http://localhost:3000/products";

function Home() {
  const {data: itens} = useFetch(url);

  return (
    <>
      <h1>Home</h1>
      <ul className="products">
        {itens && itens.map((item) => (
          <li key={item.id }>
            <Link to={`/products/${item.id}`}><h2>{item.name}</h2></Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Home;