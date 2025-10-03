import { Link } from "react-router-dom";//Permite navegar entre páginas de React sin recargar la página
import { useState, useEffect } from "react";
import "./News.css";

export default function Noticias() {
  //estado para el carrusel de noticias
  const [currentSlide, setCurrentSlide] = useState(0);//inicia en la primer imagen
  //añade noticias al array
  const slides = [
    {
      image: "./News_image/puerto1.jpg",
      title: "Puerto de Manzanillo: ¿por qué es el más importante de México?",
      subtitle: "Puerto de Manzanillo: ¿por qué es el más importante de México?"
    },
    {
      image: "./News_image/puerto2.jpg",
      title: "Título de la segunda noticia",
      subtitle: "Descripción de la segunda noticia"
    },
    {
      image: "./News_image/puerto3.jpg",
      title: "Título de la tercera noticia",
      subtitle: "Descripción de la tercera noticia"
    },
    {
      image: "./News_image/puerto4.jpg",
      title: "Título de la cuarta noticia",
      subtitle: "Descripción de la cuarta noticia"
    }
  ];

  useEffect(() => {
    //funcion para que el carrusel se mueva automaticamente
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);//Incrementa el índice del slide, y vuelve al inicio si llega al final
    }, 5000);//cada 5 segundos

    return () => clearInterval(timer);//limpia el intervalo al desmontar el componente
  }, [slides.length]);

//funcion para cambiar el slide manualmente con los botones
  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="noticias-container">
      <div className="carousel">
        <div className="carousel-inner">
          {/* Muestra las imagenes del carrusel y su contenido */}
          {slides.map((slide, index) => (
            <div
              key={index}//llave unica para cada slide
              className={`carousel-slide ${index === currentSlide ? 'active' : ''}`}//si el slide es el actual, se le agrega la clase active para que se muestre en pantalla el slide actual y se oculte el resto
            >
              <img src={slide.image || "/placeholder.svg"} alt={slide.title} className="carousel-image" />
              <div className="carousel-overlay">
                <div className="carousel-content">
                  <h1 className="carousel-title">{slide.title}</h1>
                  <p className="carousel-subtitle">{slide.subtitle}</p>
                </div>
              </div>
            </div>
          ))}
        </div>


        <div className="carousel-dots">
          {slides.map((_, index) => (//recorre el array de slides y crea un botón para cada slide
            <button
              key={index}
              className={`dot ${index === currentSlide ? 'active' : ''}`}//si el slide es el actual, se le agrega la clase active para que se muestre en pantalla el slide actual y se oculte el resto
              onClick={() => goToSlide(index)}//al hacer click en el botón, se cambia el slide actual
            />
          ))}
        </div>
      </div>
    </div>
  );
}