// Testes do Hook "useLayoutEffect"
import "./HookUseLayoutEffect.css";
import { useEffect, useState, useLayoutEffect } from "react";

function HookUseLayoutEffect() {
    const [time, setTime] = useState(0);
    const [time2, setTime2] = useState(0);

    useEffect(()=>{     // Seria executado antes por estar em cima
        const exe = new Date().getTime();
        console.log("Effect executado!");
        setTime(exe);
    },[])

    useLayoutEffect(()=>{   // Seria executado depois por estar embaixo
        console.log("LayoutEffect executado!");
        const exe = new Date().getTime();
        setTime2(exe);
    },[])

    return (
        <section id="layout-hook">
            <h3>Hook "useLayoutEffect"</h3>

            <p>Hook useEffect executado em:</p>
            <h4>{time}</h4>

            <p>Hook useLayoutEffect executado em:</p>
            <h4>{time2}</h4>

            <p>Olhe o console para ver quem foi primerio</p>
        </section>
    );
}

export default HookUseLayoutEffect;