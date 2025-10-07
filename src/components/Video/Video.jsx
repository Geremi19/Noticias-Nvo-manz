import { Link } from "react-router-dom";
import { useState } from "react";
import "./Video.css";
import Footer from "../Footer/Footer";

export default function Video() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentVideoUrl, setCurrentVideoUrl] = useState("");
  // <CHANGE> Added state to track hovered video
  const [hoveredVideo, setHoveredVideo] = useState(null);

  const handleVideoClick = (videoId) => {
    setCurrentVideoUrl(`https://www.youtube.com/embed/${videoId}`);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentVideoUrl("");
  };

  return (
    <div className="containerAll">
      <div className="containerTitulo">
        <h2>Video</h2>
        <div className="containerAddC">
          <div className="puntoAzul"></div>
          <h5>Últimos Videos</h5>
        </div>
      </div>

      <div className="ContainerSecciones">
        {/* Sección Izquierda - Últimos Videos */}
        <div className="containerSecVideos">
          {/* <CHANGE> Added hover handlers to play video on hover */}
          <div
            className="video"
            onClick={() => handleVideoClick("5W0FVeOYAnQ")}
            onMouseEnter={() => setHoveredVideo("video1")}
            onMouseLeave={() => setHoveredVideo(null)}
          >
            <div className="videoImg">
              {hoveredVideo === "video1" ? (
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/5W0FVeOYAnQ?autoplay=1&mute=1"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              ) : (
                <>
                  <img
                    src="../../../public/Videos/Video1.jpg"
                    alt="Puerto de Manzanillo"
                  />
                  <span className="videoDuration">0:36</span>
                </>
              )}
            </div>
            <div className="videoTitulo">
              <h3>
                Puerto de Manzanillo: ¿por qué es el más importante de México?
              </h3>
            </div>
          </div>

          <div
            className="video"
            onMouseEnter={() => setHoveredVideo("video2")}
            onMouseLeave={() => setHoveredVideo(null)}
          >
            <div className="videoImg">
              {hoveredVideo === "video2" ? (
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/5W0FVeOYAnQ?autoplay=1&mute=1"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              ) : (
                <>
                  <img
                    src="../../../public/Videos/Video2.jpg"
                    alt="Museo de la Sal"
                  />
                  <span className="videoDuration">1:20</span>
                </>
              )}
            </div>
            <div className="videoTitulo">
              <h3>Qué ver en Cuyutlán, Colima Museo de la Sal</h3>
            </div>
          </div>

          <div
            className="video"
            onMouseEnter={() => setHoveredVideo("video3")}
            onMouseLeave={() => setHoveredVideo(null)}
          >
            <div className="videoImg">
              {hoveredVideo === "video3" ? (
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/5W0FVeOYAnQ?autoplay=1&mute=1"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              ) : (
                <>
                  <img
                    src="../../../public/Weekly/buque-1.jpg"
                    alt="Video adicional"
                  />
                  <span className="videoDuration">1:20</span>
                </>
              )}
            </div>
            <div className="videoTitulo">
              <h3>Turismo en Manzanillo continúa creciendo.</h3>
            </div>
          </div>
        </div>

        {/* Sección Derecha - Videos Destacados */}
        <div className="containerSecImp">
          <div className="containerAddC">
            <div className="puntoAzul"></div>
            <h5>Videos Destacados</h5>
          </div>

          <div
            className="video"
            onClick={() => handleVideoClick("5W0FVeOYAnQ")}
            onMouseEnter={() => setHoveredVideo("video4")}
            onMouseLeave={() => setHoveredVideo(null)}
          >
            <div className="videoImg">
              {hoveredVideo === "video4" ? (
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/5W0FVeOYAnQ?autoplay=1&mute=1"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              ) : (
                <>
                  <img
                    src="../../../public/Videos/Video1.jpg"
                    alt="Video destacado"
                  />
                  <span className="videoDuration">1:29</span>
                </>
              )}
            </div>
            <div className="videoTitulo">
              <p>Puerto de Manzanillo: ¿por qué es el más importante..</p>
            </div>
          </div>

          <div
            className="video"
            onMouseEnter={() => setHoveredVideo("video5")}
            onMouseLeave={() => setHoveredVideo(null)}
          >
            <div className="videoImg">
              {hoveredVideo === "video5" ? (
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/5W0FVeOYAnQ?autoplay=1&mute=1"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              ) : (
                <>
                  <img src="../../../public/Videos/Video2.jpg" alt="Alcaldía" />
                  <span className="videoDuration">1:29</span>
                </>
              )}
            </div>
            <div className="videoTitulo">
              <p>Alcaldía de Manzanillo. Desfalco sin castigo.</p>
            </div>
          </div>

          <div
            className="video"
            onMouseEnter={() => setHoveredVideo("video6")}
            onMouseLeave={() => setHoveredVideo(null)}
          >
            <div className="videoImg">
              {hoveredVideo === "video6" ? (
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/5W0FVeOYAnQ?autoplay=1&mute=1"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              ) : (
                <>
                  <img src="./../../public/Weekly/buque-noche.jpg" alt="Turismo" />
                  <span className="videoDuration">1:20</span>
                </>
              )}
            </div>
            <div className="videoTitulo">
              <p>Turismo en Manzanillo continúa creciendo.</p>
            </div>
          </div>

          <div
            className="video"
            onMouseEnter={() => setHoveredVideo("video7")}
            onMouseLeave={() => setHoveredVideo(null)}
          >
            <div className="videoImg">
              {hoveredVideo === "video7" ? (
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/5W0FVeOYAnQ?autoplay=1&mute=1"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              ) : (
                <>
                  <img
                    src="./../../public/News_image/puerto1.jpg"
                    alt="Video nocturno"
                  />
                  <span className="videoDuration">1:20</span>
                </>
              )}
            </div>
            <div className="videoTitulo">
              <p>Manzanillo de noche: Una experiencia única.</p>
            </div>
          </div>
        </div>
      </div>

      {/* ... existing code ... */}
      {isModalOpen && (
        <div className="videoModal" onClick={closeModal}>
          <div
            className="videoModalContent"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="closeButton" onClick={closeModal}>
              ×
            </button>
            <iframe
              width="100%"
              height="100%"
              src={currentVideoUrl}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}

      <Footer></Footer>
    </div>
  );
}