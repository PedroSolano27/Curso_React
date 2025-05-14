// Barra de Navegação
import "./Navbar.css";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <section id="navbar">
      <NavLink to="/" className={({isActive}) => (isActive ? "active": "")}>Home</NavLink>
      <NavLink to="/new">Novo Post</NavLink>
      <NavLink to="/admin">Gerenciar</NavLink>
    </section>
  );
}

export default Navbar;