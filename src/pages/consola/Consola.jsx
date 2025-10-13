import React, { useState } from "react";
import "./Consola.css";
import { db } from "../../Firebase/client"; // ajusta la ruta
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

export default function Consola() {
  const [titulo, setTitulo] = useState("");
  const [nombre, setNombre] = useState("");
  const [fecha, setFecha] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [imagen, setImagen] = useState(null);
  const [loading, setLoading] = useState(false);
  const [mensaje, setMensaje] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!titulo || !nombre || !fecha || !descripcion) {
      setMensaje("Por favor llena todos los campos.");
      return;
    }

    setLoading(true);
    try {
      let imageUrl = "";
      if (imagen) {
        const storage = getStorage();
        const storageRef = ref(storage, `noticias/${imagen.name}`);
        await uploadBytes(storageRef, imagen);
        imageUrl = await getDownloadURL(storageRef);
      }

      await addDoc(collection(db, "noticias"), {
        titulo,
        nombre,
        fecha,
        cuerpo: descripcion,
        imagen: imageUrl,
        creadoEn: Timestamp.now(),
      });

      setMensaje("✅ Noticia publicada correctamente!");
      setTitulo("");
      setNombre("");
      setFecha("");
      setDescripcion("");
      setImagen(null);
    } catch (error) {
      console.error("Error al subir noticia:", error);
      setMensaje("❌ Error al subir noticia.");
    }
    setLoading(false);
  };

  return (
    <div className="container-all">
      <div className="tabs-container">
        <h3 className="tab active">Añadir Publicación</h3>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="form-grid">
          <div className="form-field">
            <label>Título</label>
            <input
              type="text"
              className="input-field"
              value={titulo}
              onChange={(e) => setTitulo(e.target.value)}
            />
          </div>

          <div className="form-field">
            <label>Creador</label>
            <input
              type="text"
              className="input-field"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
          </div>

          <div className="form-field">
            <label>Fecha</label>
            <input
              type="date"
              className="input-field"
              value={fecha}
              onChange={(e) => setFecha(e.target.value)}
            />
          </div>

          <div className="form-field">
            <label>Añade imagen</label>
            <div className="image-upload-zone">
              <input
                type="file"
                accept="image/*"
                onChange={(e) => setImagen(e.target.files[0])}
              />
            </div>
          </div>
        </div>

        <div className="explanation-section">
          <label>Descripción</label>
          <textarea
            className="editor-textarea"
            placeholder="Escribe el contenido..."
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
          ></textarea>
        </div>

        <div className="actions-container">
          <button className="btn-primary" type="submit" disabled={loading}>
            {loading ? "Publicando..." : "Publicar"}
          </button>
        </div>
      </form>

      {mensaje && <p style={{ textAlign: "center", marginTop: "10px" }}>{mensaje}</p>}
    </div>
  );
}
