// Lista de itens
import "./HookUseCallback.css";
import { useEffect, useState } from "react"

function List({ getItems }) {
    const[items, setItems] = useState([]);
    
    useEffect(()=>{
        setItems(getItems);
    }, [getItems]);

    return (
        <div>
        {items && items.map((item) => <p key={item} >{item}</p>)}
        </div>
    );
}

export default List;