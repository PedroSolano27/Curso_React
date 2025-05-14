// Aplicativo principal
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
    <ToastContainer/>
    <header>
      <h1>Mural de Memórias</h1>
      <Navbar/>
    </header>
    
    <main>
      <Outlet/>
    </main>
    <Footer/>
    </>
  );
}

export default App;