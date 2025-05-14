// Contador
import "./Counter.css";

function Counter({title, number, color}) {
    return (
        <section className="counter">
            <p className="counter-number" style={{backgroundColor: color}}>
                {number}
            </p>
            <h3 className="counter-text" style={{color: color}}>
                {title}
            </h3>
        </section>
    );
}

export default Counter;