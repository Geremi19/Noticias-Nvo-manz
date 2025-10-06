import { Link } from "react-router-dom";
import "./Video.css"
import Footer from "../Footer/Footer"
import "../Weekly/Weekly"
export default function Video() {
  return (
    <div className="containerAll">
      <div className="containerTitulo">
        <h2>Video</h2>
          <div className="containerAddC">
            <div className="puntoAzul"></div>
            <h5>Ultimos Videos</h5>
          </div>
      </div>
      <div className="ContainerSecciones">
        <div className="containerSecVideos">
          <div className="containerWrap">
            <div className="video">
              <div className="videoImg">
                <img src="../../../public/Videos/Video1.jpg" alt="" />
              </div>
              <div className="videoTitulo">
                <h3 className="news-tittle">Puerto de Manzanillo: ¿por qué es el más importante de México?</h3>
              </div>
            </div>
            <div className="video">
                <div className="videoImg">
                  <img src="../../../public/Videos/Video2.jpg" alt="" />
                </div>
                <div className="videoTitulo">
                  <h3 className="news-tittle">Que Ver en el Museo de la Sal?</h3>
                </div>
            </div>
          </div>
        </div>
        <div className="containerSecImp">
          <div className="video">
            <div className="videoImg"></div>
            <div className="videoTitulo">
              Qué ver en Cuyutlán, Colima 
              Museo de la Sal
            </div>
          </div>
          <div className="video">
            <div className="videoImg"></div>
            <div className="videoTitulo">
              Alcaldía de Manzanillo. Desfalco sin castigo.
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}