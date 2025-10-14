import { use, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { db } from "../Firebase/client"; // Ajusta ruta si es necesario
import { doc, collection, addDoc, Timestamp, updateDoc, arrayUnion } from "firebase/firestore";
import "./Noticias.css";
import { useLocation } from "react-router-dom";
import Swal from "sweetalert2";

export default function Noticia1() {
  const location = useLocation();
  const {noticia} = location.state
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [comentario, setComentario] = useState("");
  const [altura, setAltura] = useState(window.innerHeight);
  const [creado, setCreador] = useState(new Date());
  const handleEnviar = async () => {
    if (!nombre || !correo || !comentario) {
      Swal.fire({
        icon: "warning",
        title: "Advertencia",
        text: "Llena todos los campos para continuar",
      });
      return;
    }

    try {
      const noticiaRef = doc(db, "noticias", noticia.id); // Asegúrate de que noticia.id esté definido

      const nuevoComentario = {
      nombre,
      correo,
      comentario // opcional para fecha
      };

      await updateDoc(noticiaRef, {
      comentarios: arrayUnion(nuevoComentario)
      });

      Swal.fire({
        icon: "success",
        title: "Exito",
        text: "Tu comentario ha sido enviado",
      });
      setNombre("");
      setCorreo("");
      setComentario("");
    }catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Credenciales no válidas",
      });
    }
  };

  console.log(noticia)

  return (
    <div className="containerAll"  >
      <Link to="/">
        <div className="containerBtnVolver">
          <i className="fa-solid fa-arrow-left"></i>
        </div>
      </Link>

      <div className="containerImg">
        <img className="imgNoticia"  src="/buque.jpg" alt="Noticia" />
      </div>

      <div className="containerText">
        <h1>{noticia.titulo}</h1>
        <div className="containerCreador">
          <div className="creator">
            <FontAwesomeIcon icon={faUser} />
            <p>{noticia.nombre}</p>
          </div>
          <p style={{fontWeight:"bold"}}>{noticia.fecha} </p>
        </div>

        <div className="containerTxt">
          <p style={{ whiteSpace: "pre-line" }}>
            {noticia.cuerpo}
          </p>
        </div>
      </div>

      <div className="containerAdd">
        <div className="containerAddC">
          <div className="puntoAzul"></div>
          <h5>Añadir Comentario</h5>
        </div>

        <div className="containerForm">
          <div className="formUno">
            <div className="name">
              <p className="label">Nombre</p>
              <input
                className="input"
                placeholder="Nombre Usuario"
                type="text"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
              />
            </div>
            <div className="mail">
              <p className="label">Correo</p>
              <input
                className="input"
                placeholder="Correo Electrónico"
                type="email"
                value={correo}
                onChange={(e) => setCorreo(e.target.value)}
              />
            </div>
          </div>

          <div className="formDos">
            <p className="label">Comentario</p>
            <input
              type="text"
              placeholder="Comentario"
              className="inputComent"
              value={comentario}
              onChange={(e) => setComentario(e.target.value)}
            />
          </div>

          <div className="containerBtnAdd" onClick={handleEnviar}>
            <div className="btnAdd">
              <i className="fa-solid fa-comment-dots"></i>
              <p>Enviar comentario</p>
            </div>
          </div>
        </div>

        
      </div>

    </div>
  );
}
