// Testes com o hook "useReducer"
import "./HookUseReducer.css";
import { useState, useReducer } from "react";

function HookUseReducer() {
    const initialTasks = [
        { id: 1, text: "Fazer algo" },
        { id: 2, text: "Fazer outra coisa" },
        { id: 3, text: "Fazer aquilo lá" },
    ];
    const [taskText, setTaskText] = useState("");

    function taskReducer(state, action){
        switch(action.type){
            case "Add": {
                const newTask = {id: Math.random(), text: taskText};
                setTaskText("");
                return [...state, newTask];
            }
            case "Delete": {
                return state.filter((task) => task.id !== action.id);
            }
            default: return state;
        }
    }

    const [tasks, dispatchTasks] = useReducer(taskReducer, initialTasks);

    function handleSubmit(e){
        e.preventDefault();
        dispatchTasks({type: "Add"});
    }
    
    function removeTask(id) {
        dispatchTasks({type: "Delete", id});
    }

    return (
        <section id="reducer-hook">
            <h3>Hook "useReducer"</h3>
            <form onSubmit={handleSubmit}>
                <input type="text" value={taskText}
                    onChange={(e) => setTaskText(e.target.value)}
                />
                <input type="submit" value="Salvar"/>
            </form>
            <p>Tarefas:</p>
            <ul>
                {tasks.map((task) => (
                    <li key={task.id} onDoubleClick={() => removeTask(task.id)}>
                        {task.text}
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default HookUseReducer;