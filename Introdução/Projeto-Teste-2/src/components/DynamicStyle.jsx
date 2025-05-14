// CSS Dinâmico
import classes from "./DynamicStyle.module.css";

export default function DynamicStyle() {
    const n = 15;
    return (
        <>
            <h2 className={n > 10 ? classes.blue : classes.red} >CSS Dinâmico</h2>
            <h2 className={n > 10 ? classes.red : classes.blue} >CSS Dinâmico 2</h2>
        </>
    );
}
