import { Link, useSearchParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

function Search() {
    const [searchParams] = useSearchParams();
    const url = `http://localhost:3000/products?` + searchParams;
    const {data: itens} = useFetch(url);

    return (
        <section>
            <h1>Resultados da Pesquisa</h1>
            <h2>{url}</h2>
            <ul>
                {itens && itens.map((item) => (
                    <li key={item.id }>
                        <Link to={`/products/${item.id}`}><h2>{item.name}</h2></Link>
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default Search;