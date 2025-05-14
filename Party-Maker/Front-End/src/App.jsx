// Aplicativo Principal
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <ToastContainer/>
      <header>
        <h1>Party Maker</h1>
        <Navbar/>
      </header>

      <main>
        <Outlet/>
      </main>
    </>
  );
}

export default App;