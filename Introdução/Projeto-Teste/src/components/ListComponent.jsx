// Renderizar Listas
import { useState } from "react";

function ListComponent() {
    const [list, setList] = useState([
        {id: 1, value: "Item 1"}, 
        {id: 2, value: "Item 2"}, 
        {id: 3, value: "Item 3"}
    ]);

    function deleteItem(){
        const random = Math.floor(Math.random() * 4)
        setList((prevItens) => prevItens.filter((item) => random !== item.id));
    }
    
    return (
        <section>
            <ul>
                {list.map((item) => (<li key={item.id}> {item.value} </li>))}
            </ul>
            <button onClick={deleteItem}>Delete Item</button>    
        </section>
    );
}

export default ListComponent; 