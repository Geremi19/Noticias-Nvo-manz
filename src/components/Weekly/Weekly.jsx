import { newsItems, socialMedia } from "../../utils/data_weekly";
import "./Weekly.css";
import { useEffect, useState } from "react";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { db } from "../../Firebase/client";
import { CiTimer, CiCalendar} from "react-icons/ci";
import { useNavigate } from "react-router-dom";

export default function Weekly() {
  const navigate = useNavigate();
  const [noticias, setNoticias] = useState([]);
  const [loading, setLoading] = useState(true);


  const fetchNoticias = async () => {
    try {
      const q = query(collection(db, "noticias"));
      const querySnapshot = await getDocs(q);
      const noticiasArray = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setNoticias(noticiasArray);
      setLoading(false);
      console.log(noticiasArray);
    }catch (error) {
      console.error("Error fetching noticias: ", error);
      setLoading(false);
    }
  };


  useEffect(() => {
    fetchNoticias();
  }, []);

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
            {noticias.slice(0,6).map((item) => (
              <article key={item.id} className="news-card" onClick={()=> navigate("/noticia1",{state : {noticia: item}})}> 
                <div className="news-image-wrapper">
                  <img
                    src="../Weekly/club-yates.jpg"
                    alt="imagen prueba"
                    className="news-image"
                  />
                </div>
                <div className="news-content">
                  <h3 className="news-title">{item.titulo}</h3>
                  <div className="news-meta">
                    <span className="news-date">
                      {item.fecha} <CiTimer /> 15 MINS
                    </span>
                    <span className="news-time">
                      {} {}
                    </span>
                  </div>
                  <p className="news-description">{item.cuerpo}</p>
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