
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Consola.css"
import { faImage, faCirclePlus, faPaperPlane   } from "@fortawesome/free-solid-svg-icons";

export default function Consola() {
  return (
    <div className="ContainerAll">
      <div className="titleConsola">
        <h4 >Añadir Publicación</h4>
      </div>
        <div className="containerFormAdd">
          <div className="containerInformacion">
            <div className="containerTituloN">
              <h5>Titulo</h5>
              <input type="text" className="text"/>
            </div>
            <div className="containerTituloN">
              <h5>Creador</h5>
              <input type="text" className="text" id="text"/>
            </div>
            <div className="containerTituloN">
              <h5>Fecha</h5>
              <input type="date" className="text" id="tex"/>
            </div>
            <div className="containerDescN">
              <h5>Descripción</h5>
              <div className="containerSombraImg">
                <textarea type="tex" className="InputDesc" placeholder="Escribe..." />
              </div>
            </div>
          </div>
          <div className="containerImgN">
            <h5>Añadir Image</h5>
            <div className="imgSelect">
              <FontAwesomeIcon icon={faImage} />
              <h5>Escoge una img para la noticia</h5>
              <div className="btnSubir">
                <FontAwesomeIcon icon={faCirclePlus} />
                <h5>Seleccionar</h5>
              </div>
            </div>
            <div className="btnPublicar">
              <FontAwesomeIcon icon={faPaperPlane} />
              <h5>Publicar</h5>
            </div>
          </div>
        </div>
    </div>
  );
}