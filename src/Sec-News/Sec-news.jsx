import Footer from "../components/Footer/Footer";
import "./Sec-news.css";
import { newsData } from "../utils/data_sec-news";
import { carouselData } from "../utils/carouselData";
import { useRef, useState } from "react";

export default function SecNews() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    const newIndex = (currentIndex + 1) % carouselData.length;
    setCurrentIndex(newIndex);
  };

  const prevSlide = () => {
    const newIndex = (currentIndex - 1 + carouselData.length) % carouselData.length;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="sec-news">
      <header className="sec-news__header">
        <h1 className="sec-news__title">Noticias</h1>
        <h4 className="sec-news__subtitle">Últimas Noticias</h4>
      </header>

      {/* Sección de Cards */}
      <section className="news-grid">
        {newsData.map((news) => (
          <article key={news.id} className="news-card">
            <img src={news.image} alt={news.title} className="news-card__image" />
            <div className="news-card__content">
              <h3 className="news-card__title">{news.title}</h3>
              <p className="news-card__excerpt">{news.excerpt}</p>
              <footer className="news-card__footer">
                <div className="news-card__author">
                  <div className="news-card__avatar">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="8" r="4" fill="currentColor" />
                      <path d="M4 20c0-4 3.5-6 8-6s8 2 8 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </div>
                  <div className="news-card__author-info">
                    <span className="news-card__author-name">{news.author}</span>
                    <time className="news-card__date">{news.date}</time>
                  </div>
                </div>
              </footer>
            </div>
          </article>
        ))}
      </section>

      {/* Sección de Carrusel */}
      <section className="carousel-section">
        <div className="carousel-header">
          <h2 className="carousel-title">
            <span className="carousel-title-icon"></span>
            Publicaciones Realizadas
          </h2>
          <div className="carousel-controls">
            <button className="carousel-nav-btn" onClick={prevSlide}>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M12 16L6 10L12 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button className="carousel-nav-btn" onClick={nextSlide}>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M8 4L14 10L8 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>

        <div className="carousel-wrapper">
          <div
            className="carousel-track"
            style={{ transform: `translateX(-${currentIndex * (100 / carouselData.length)}%)` }}
          >
            {carouselData.map((item, index) => (
              <article key={index} className="carousel-card">
                <div className="carousel-card-image-wrapper">
                  <img src={item.image || "/placeholder.svg"} alt={item.title} className="carousel-card-image" />
                </div>
                <div className="carousel-card-content">
                  <h3 className="carousel-card-title">{item.title}</h3>
                  <p className="carousel-card-description">{item.description}</p>
                  <div className="carousel-card-footer">
                    <div className="carousel-card-avatar">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <circle cx="10" cy="7" r="3" fill="currentColor" />
                        <path d="M3 17c0-3 2.5-5 7-5s7 2 7 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                      </svg>
                    </div>
                    <div className="carousel-card-author-info">
                      <span className="carousel-card-author">{item.author}</span>
                      <time className="carousel-card-date">{item.date}</time>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

      </section>

    </div>
  
);

}
