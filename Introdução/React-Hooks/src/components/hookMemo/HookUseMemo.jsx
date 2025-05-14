/* eslint-disable react-hooks/exhaustive-deps */
// Testes de Hook "useMemo"
import "./HookUseMemo.css";
import { useEffect, useMemo, useRef, useState } from "react";

function HookUseMemo() {
    const [number, setNumber] = useState(0);
    const [number2, setNumber2] = useState(0);

    const timesExe = useRef(0);
    const premiumNumbers = ["0", "50", "100", "200"];   // Declaração sem useMemo
    useEffect(()=>{     // Ativa toda vez que o valor de premiumNubers é checado pelo html
        timesExe.current = timesExe.current + 1;
    }, [premiumNumbers]);

    const timesExeMemo = useRef(0);
    const premiumNumbersMemo = useMemo(()=>{    // Declaração com useMemo
        return ["0", "50", "100", "200"];
    },[]);
    useEffect(()=>{     // Ativa na primeira vez que o valor de premiumNubers é checado pelo html
        timesExeMemo.current = timesExeMemo.current + 1;
    }, [premiumNumbersMemo]);
   

    return (
        <section id="memo-hook">
            <h3>Hook "useMemo"</h3>
           
            <div>
                <h4>Números verificados {timesExe.current}</h4>
                <p>Tente acertar os números premiados</p>
                <input type="number" onChange={(e)=>setNumber(e.target.value)}/>
                {premiumNumbers.includes(number) ? 
                    <p>Acertou, o número {number}</p> : ""
                }
            </div>

            <div>
                <h4>Números verificados usando Memo: {timesExeMemo.current}</h4>
                <p>Tente acertar os números premiados</p>
                <input type="number" onChange={(e)=>setNumber2(e.target.value)}/>
                {premiumNumbersMemo.includes(number2) ? 
                    <p>Acertou, o número {number2}</p> : ""
                }
            </div>

        </section>
    );
}

export default HookUseMemo;