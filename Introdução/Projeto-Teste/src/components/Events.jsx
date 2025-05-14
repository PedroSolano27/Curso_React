// Eventos em React
function Events() {
    function click(){
        console.log("Disparou evento de função");
    }
    function render(x){
        if(x){
            return <h3>Renderizado {x}</h3>
        } else {
            return <h3>Renderização não concluída</h3>
        }
    }

    return (
    <section>
        <section>
            <button onClick={() => console.log("Disparou evento")}>Clique Aqui</button>
            <button onClick={click}>Clique aqui Também</button>
        </section>
        {render(true)}
        {render(false)}
    </section>
    );
}

export default Events;