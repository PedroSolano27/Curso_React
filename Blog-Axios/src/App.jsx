// App Principal
import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <>
      <header>
        <h1>Blog</h1>
        <Navbar/>
      </header>

      <main>
        <Outlet/>
      </main>
    </>
  );
}

export default App; 