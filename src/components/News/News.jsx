import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./News.css";

export default function Noticias() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "./News_image/puerto1.jpg",
      title: "Puerto de Manzanillo: ¿por qué es el más importante de México?",
      subtitle: "Puerto de Manzanillo: ¿por qué es el más importante de México?",
      link: "/noticia1" 
    },
    {
      image: "./News_image/puerto2.jpg",
      title: "Título de la segunda noticia",
      subtitle: "Descripción de la segunda noticia",
      link: "/noticia1"
    },
    {
      image: "./News_image/puerto3.jpg",
      title: "Título de la tercera noticia",
      subtitle: "Descripción de la tercera noticia",
      link: "/noticia1"
    },
    {
      image: "./News_image/puerto4.jpg",
      title: "Título de la cuarta noticia",
      subtitle: "Descripción de la cuarta noticia",
      link: "/noticia1"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="noticias-container">
      <div className="carousel">
        <div className="carousel-inner">
          {slides.map((slide, index) => (
            <Link to={slide.link} key={index} className={`carousel-slide ${index === currentSlide ? 'active' : ''}`}>
              <img src={slide.image || "/placeholder.svg"} alt={slide.title} className="carousel-image" />
              <div className="carousel-overlay">
                <div className="carousel-content">
                  <h1 className="news-carousel-title">{slide.title}</h1>
                  <p className="carousel-subtitle">{slide.subtitle}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="carousel-dots">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
