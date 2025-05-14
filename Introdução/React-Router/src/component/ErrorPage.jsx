// Página de erro
import { useRouteError } from "react-router-dom";

function ErrorPage() {
    const error = useRouteError();
    console.error("O erro é: ", error);

    return (
        <section>
            <h1>Houve um erro inesperado!</h1>
            <h2>Erro: {error.statusText}</h2>
            <h3>{error.error.message}</h3>
        </section>
    );
}

export default ErrorPage;