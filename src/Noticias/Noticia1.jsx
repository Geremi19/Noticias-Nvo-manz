import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { db } from "../Firebase/client"; // Ajusta ruta si es necesario
import { collection, addDoc, Timestamp } from "firebase/firestore";
import "./Noticias.css";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

export default function Noticia1() {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [comentario, setComentario] = useState("");

  const handleEnviar = async () => {
    if (!nombre || !correo || !comentario) {
      alert("Por favor completa todos los campos");
      return;
    }

    try {
      const docRef = await addDoc(collection(db, "noticias"), {
        nombre,
        correo,
        comentario,
        fecha: Timestamp.now(),
        titulo: "Titulo de ejemplo desde React",
        cuerpo: comentario,
        imagen: "/buque.jpg"
      });

      console.log("✅ Noticia publicada con ID:", docRef.id);
      alert("Noticia publicada correctamente");

      // Limpia los campos
      setNombre("");
      setCorreo("");
      setComentario("");
    } catch (error) {
      console.error("❌ Error al publicar noticia:", error);
    }
  };

  return (
    <div className="containerAll">
      <Link to="/">
        <div className="containerBtnVolver">
          <i className="fa-solid fa-arrow-left"></i>
        </div>
      </Link>

      <div className="containerImg">
        <img className="imgNoticia" src="/buque.jpg" alt="Noticia" />
      </div>

      <div className="containerText">
        <h1>Titulo de Noticia</h1>
        <div className="containerCreador">
          <div className="creator">
            <FontAwesomeIcon icon={faUser} />
            <p>Autor</p>
          </div>
          <p>30/12/2024</p>
        </div>

        <div className="containerTxt">
          <p>
            Este es el cuerpo de la noticia de ejemplo. Aquí podrías mostrar una noticia publicada previamente.
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
        </div>

        <div className="containerBtnAdd" onClick={handleEnviar}>
          <div className="btnAdd">
            <i className="fa-solid fa-comment-dots"></i>
            <p>Enviar comentario</p>
          </div>
        </div>
      </div>

    </div>
  );
}
