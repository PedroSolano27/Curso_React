// Barra de Navegação
import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <section id="navbar">
        <NavLink to="/" className={({isActive}) => (isActive ? "active": "")}>Minhas Festas</NavLink>
        <NavLink to="/party/new">Criar Festa</NavLink>
    </section>
  );
}

export default Navbar;