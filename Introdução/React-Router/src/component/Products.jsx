import { useFetch } from "../hooks/useFetch";
import { useParams } from "react-router-dom";

function Products() {
    const { id } = useParams();
    const url = "http://localhost:3000/products/" + id;
    const {data: product} = useFetch(url);

    if(!product) {return <p>Carregando...</p>};

    return (
        <section>
            <h2>Esse é o produto</h2>
            <p>ID: {product.id}</p>
            <p>Nome: {product.name}</p>
            <p>Preço: R${product.price}</p>
        </section>
    );
}

export default Products;