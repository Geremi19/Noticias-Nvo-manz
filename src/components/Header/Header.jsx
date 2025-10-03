import { Link } from "react-router-dom";
import React from "react";

import "./Header.css";

export default function Header() {
  return (
    <section className="h-wrapper">
      <div className="flexCenter paddings innerWidth h-container">
        <img src="/logouni.png" alt="logo" className="image-logo" />

        <div className="flexCenter h-menu">
          <Link to="/noticias" className="menu-link">Noticias</Link>
          <Link to="/videos" className="menu-link">Videos</Link>
        </div>
      </div>
    </section>
  );
}
