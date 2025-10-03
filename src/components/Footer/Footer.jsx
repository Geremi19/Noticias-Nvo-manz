import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Footer.css"

export default function Footer() {
  return (
    <div className="containerAllFooter">
        <div className="containerFooterUno">
            <h5>Nuevo <br /> Manzanillo</h5>
        </div>
        <div className="containerFooterDos">
           <div className="contacto">
            <p>cuyutlannoticias@gmail.com</p>
            <p>Terms of Service</p>
            <p>Copyright Policy</p>
            <p>Accessibility</p>
           </div>
           <div className="ContainerMedia">
            <div className="media">
                <i class="fa-brands fa-facebook"></i>
                <i class="fa-brands fa-instagram"></i>
                <i class="fa-brands fa-x-twitter"></i>
                <i class="fa-brands fa-youtube"></i>
            </div>
           </div>
        </div>
    </div>
  );
}