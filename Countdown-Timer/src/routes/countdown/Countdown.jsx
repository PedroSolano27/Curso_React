/* eslint-disable react-hooks/rules-of-hooks */
// Página do Contador
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { CountContext } from "../../context/CountContext";
import Title from "../../components/title/Title";
import Counter from "../../components/counter/Counter";
import useCountdown from "../../hooks/useCountdown";

function Countdown() {
    const {event} = useContext(CountContext);
    if(!event) {return <Navigate to="/"/>};

    const eventTitle = event.title;
    const eventColor = event.color;
    const [day, hour, minute, second] = useCountdown(event.date);
    
    return (
        <>
            <header>
                <Title text={eventTitle} color={eventColor}/>
            </header>

                <main className="counter-container">
                <Counter number={day} color={eventColor} title="Dias"/>
                <Counter number={hour} color={eventColor} title="Horas"/>
                <Counter number={minute} color={eventColor} title="Minutos"/>
                <Counter number={second} color={eventColor} title="Segundos"/>
            </main>
        </>
    );
}

export default Countdown;