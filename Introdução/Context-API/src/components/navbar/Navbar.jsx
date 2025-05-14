// Barra de Navegação
import "./Navbar.css";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <section id="navbar">
      <NavLink to="/" className={({isActive}) => (isActive ? "active": "")}>Home</NavLink>
      <NavLink to="/contact">Contato</NavLink>
    </section>
  );
}

export default Navbar;