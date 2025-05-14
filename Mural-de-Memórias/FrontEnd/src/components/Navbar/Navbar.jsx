// Barra de Navegação
import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav id="navbar">
      <NavLink to="/" className={({isActive}) => (isActive ? "active": "")}>Minhas Memórias</NavLink>
      <NavLink to="/memory/new">Adicionar Memória</NavLink>
    </nav>
  );
}

export default Navbar;