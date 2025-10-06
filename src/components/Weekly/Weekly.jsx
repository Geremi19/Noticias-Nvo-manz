import { newsItems, socialMedia } from "../../utils/data_weekly";
import "./Weekly.css";

export default function Weekly() {
  return (
    <div className="noticias-page">
      <div className="noticias-content">
        {/* Sección de Noticias */}
        <div className="news-section">
          <div className="section-header">
            <h2 className="section-title">Mejores noticias semanales</h2>
            <div className="visual-bar">
              <div className="blue-indicator"></div>
            </div>
          </div>

          <div className="news-grid">
            {newsItems.map((item) => (
              <article key={item.id} className="news-card">
                <div className="news-image-wrapper">
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    className="news-image"
                  />
                </div>
                <div className="news-content">
                  <h3 className="news-title">{item.title}</h3>
                  <div className="news-meta">
                    <span className="news-date">
                      {item.date.icon} {item.date.date}
                    </span>
                    <span className="news-time">
                      {item.readTime.icon} {item.readTime.time}
                    </span>
                  </div>
                  <p className="news-description">{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Sección de Redes Sociales */}
        <div className="social-section">
          <div className="section-header">
            <h2 className="section-title">Follow Us On</h2>
            <div className="visual-bar">
              <div className="blue-indicator"></div>
            </div>
          </div>

          <div className="social-buttons">
            {socialMedia.map((social) => (
              <a
                key={social.name}
                href={social.url}
                className="social-button"
                style={{ backgroundColor: social.color }}
              >
                <span className="social-icon">{social.icon}</span>
                <span className="social-name">{social.name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}