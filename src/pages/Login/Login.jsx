import React, { useState, useEffect } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import "./Login.css";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [mail, setMail] = useState("");
  const [psw, setPsw] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    // obtener altura del viewport
    const altura = window.innerHeight;

    // aplicarla directamente al contenedor
    const contenedor = document.querySelector(".containerAllLogin");
    if (contenedor) {
      contenedor.style.height = `${altura}px`;
    }
  }, []);

  const irLogin = () => {
    setMail("");
    setPsw("");
    Swal.fire({
      icon: "success",
      title: "Exito",
      text: "Ingresaste correctamente",
    });
    setTimeout(() => {
      navigate("/home");
    }, [500]);
  };

  const VerificarLogin = () => {
    if (!mail || !psw) {
      Swal.fire({
        icon: "warning",
        title: "Advertencia",
        text: "Llena ambos campos para continuar",
      });
      return;
    } else {
      const auth = getAuth();
      signInWithEmailAndPassword(auth, mail, psw)
        .then(() => {
          setMail("");
          setPsw("");
          Swal.fire({
            icon: "success",
            title: "Exito",
            text: "Ingresaste correctamente",
          });
          setTimeout(() => {
            navigate("/consola");
          }, [500]);
        })
        .catch(() => {
          Swal.fire({
            icon: "error",
            title: "Error",
            text: "Credenciales no válidas",
          });
        });
    }
  };

  return (
    <div className="containerAllLogin">
      <div className="containerMedio">
        <div className="containerFormulario">
          <h2>Login</h2>
          <h4>Ingresa tus credenciales para ir a la consola </h4>
          <div className="containerLogin">
            <h5>Correo</h5>
            <input
              type="text"
              value={mail}
              onChange={(e) => setMail(e.target.value)}
              className="inputLogin"
            />
            <h5>Contraseña</h5>
            <input
              type="password"
              value={psw}
              onChange={(e) => setPsw(e.target.value)}
              className="inputLogin"
            />
            <div className="containerBtn" onClick={VerificarLogin}>
              Iniciar Sesión
            </div>
          </div>
        </div>
        <div className="containerImgLogin">
          <img
            src="../../../public/Login/WhatsApp Image 2025-10-09 at 5.36.33 PM.jpeg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
