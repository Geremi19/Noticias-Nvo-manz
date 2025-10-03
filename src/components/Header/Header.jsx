import { Link } from "react-router-dom";
import "./Header.css"
export default function Header() {
  return (
    <header className="header">
      <h1 className="titulo">Mi Portal</h1>
      <nav className="nav">
        <Link to="/" className="txtNav" >
          Inicio
        </Link>
        <Link to="/noticias" className="txtNav">
          Noticias
        </Link>
      </nav>
    </header>
  );
}
