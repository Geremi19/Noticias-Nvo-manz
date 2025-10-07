import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <div className="footer-logo">
            <img src="/pescado_logo.png" alt="Logo" />
          </div>
        </div>

        <div className="footer-center">
          <nav className="footer-links">
            <a href="mailto:cuyutlannoticias@gmail.com" className="footer-link">
              cuyutlannoticias@gmail.com
            </a>
            <a href="#" className="footer-link">
              Terms of Service
            </a>
            <a href="#" className="footer-link">
              Copyright Policy
            </a>
            <a href="#" className="footer-link">
              Accessibility
            </a>
          </nav>
          <p className="footer-copyright">
            © 2023 Newsletter, All rights reserved
          </p>
        </div>

        <div className="footer-social">
          <a
            href="https://www.facebook.com/profile.php?id=61581423340910"
            className="social-icon"
            aria-label="Facebook"
          >
            <i className="fa-brands fa-facebook"></i>
          </a>
          <a
            href="https://www.instagram.com/noticiascuyutlan/"
            className="social-icon"
            aria-label="Instagram"
          >
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a
            href="https://x.com/NotiCuyutlan"
            className="social-icon"
            aria-label="Twitter"
          >
            <i className="fa-brands fa-x-twitter"></i>
          </a>
          <a
            href="https://www.youtube.com/@Cuyutl%C3%A1nNoticias"
            className="social-icon"
            aria-label="YouTube"
          >
            <i className="fa-brands fa-youtube"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}
