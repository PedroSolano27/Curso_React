// Aplicativo Principal
import "./App.css";
import { Outlet } from "react-router-dom";
import Navbar from "./components/navbar/Navbar.jsx";

function App() {
  return (
    <>
      <header>
        <Navbar/>
        <h1>Hooks do React</h1>
      </header>

      <main>
        <Outlet/>
      </main>
    </>
  );
}

export default App;