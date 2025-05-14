// Página de Home
import HookUseCallback from "../components/hookCallback/HookUseCallback";
import HookUseContext from "../components/hookContext/HookUseContext";
import HookUseEffect from "../components/hookEffect/HookUseEffect";
import HookUseImperativeHandle from "../components/hookHandle/HookUseImperativeHandle";
import HookUseLayoutEffect from "../components/hookLayout/HookUseLayoutEffect";
import HookUseMemo from "../components/hookMemo/HookUseMemo";
import HookUseReducer from "../components/hookReducer/HookUseReducer";
import HookUseRef from "../components/hookRef/HookUseRef";
import HookUseState from "../components/hookState/HookUseState";

function Home() {  
  return (
    <>
      <h2>Teste com Hooks</h2>
      <section id="hook-tests">
        <HookUseState/>
        <HookUseReducer/>
        <HookUseEffect/>
        <HookUseContext/>
        <HookUseRef/>
        <HookUseCallback/>
        <HookUseMemo/>
        <HookUseLayoutEffect/>
        <HookUseImperativeHandle/>
      </section>
    </>
  );
}

export default Home;