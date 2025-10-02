import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header style={{ padding: "20px", backgroundColor: "#183C6F", color: "white" }}>
      <h1>Mi Portal</h1>
      <nav>
        <Link to="/" style={{ marginRight: "15px", color: "white", textDecoration: "none" }}>
          Inicio
        </Link>
        <Link to="/noticias" style={{ color: "white", textDecoration: "none" }}>
          Noticias
        </Link>
      </nav>
    </header>
  );
}
