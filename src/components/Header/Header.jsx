import { Link } from "react-router-dom";
import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo-link">
          <img src="/pescado_logo.png" alt="logo" className="logo" />
        </Link>
        
        <nav className="nav">
          <Link to="/" className="nav-link">Inicio</Link>
          <Link to="/sec-news" className="nav-link">Noticias</Link>
          <Link to="/videos" className="nav-link">Videos</Link>
        </nav>
      </div>
    </header>
  );
}