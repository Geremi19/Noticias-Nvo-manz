import { Link } from "react-router-dom";
import Header from "../components/Header/Header";
import "./Noticias.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Footer from "../components/Footer/Footer";
import { faUser } from "@fortawesome/free-solid-svg-icons";

export default function Noticia1() {
  return (
    <div className="containerAll">
        <div className="containerBtnVolver">
          <i className="fa-solid fa-arrow-left"></i> 
        </div>
        <div className="containerImg">
            <img className="imgNoticia" src="../../public/buque.jpg"/>
        </div>
        <div className="containerText">
          <h1>Puerto de Manzanillo: ¿por qué es el más importante de México?</h1>
          <div className="containerCreador">
            <div className="creator">
              <FontAwesomeIcon icon={faUser}/>
              <p>Bruce</p> 
            </div>
            <p>30/12/2024</p> 
          </div>
          <div className="containerTxt">
              <p>
                Con más de 437 hectáreas y un calado de 16 metros, el Puerto de Manzanillo se ha ganado el primer puesto entre los puertos de México. Además, está situado en Colima, lo que lo vuelve un lugar operativo estratégico para el comercio del Pacífico.
                Si analizamos sus números, encontraremos que cuenta con capacidad estática de 49,069 Teu’s y dinámica de 2,132,667 Teu’s. Logrando así movilizar más de 14 millones de toneladas anualmente durante 2019 y 2020.
                Para ponerlo en contexto, el segundo puerto más importante de México es el de Lázaro Cárdenas en Michoacán y moviliza 1,1 millones de Teu´s. El tercer puerto es el de Veracruz y tiene una capacidad de movilizar 965 mil Teu´s. 
                Es decir, el Puerto de Manzanillo podría absorber la capacidad de movimiento de ambos puertos mencionados.
                <br /> <br />
                Te invitamos a seguir leyendo este artículo si quieres saber más sobre la historia y la operación del Puerto de Manzanillo.
                Importancia del Puerto de Manzanillo para el comercio en México El Puerto del Manzanillo ocupa un lugar estratégico para el comercio exterior, ya que su zona de influencia internacional está orientada hacia la costa oeste del Continente Americano y la Cuenca del Pacífico.
                <br /> <br />
                Por lo tanto, se destaca el intercambio con países como Estados Unidos, Canadá, Guatemala, Colombia, Ecuador o Chile; pero esto no es todo, el Puerto de Manzanillo también tiene un gran intercambio comercial con países de Europa, Oceanía y Asia.              A su vez, su zona de influencia dentro de México es en los estados del centro y Bajío de la república. Entre ellos están Aguascalientes, Coahuila, Colima, Distrito Federal, Durango, Estado de México, Guanajuato, Hidalgo, Jalisco, Michoacán, Morelos, Nayarit, Nuevo León; también Querétaro, San Luis Potosí, Tamaulipas y Zacatecas.
                Los estados que no tienen acceso al mar deben trasladar sus cargas hasta el puerto más cercano para poder embarcarla rumbo al país de destino. Por ello, el Puerto de Manzanillo es utilizado por los Estados limítrofes a Colima. Además, por la capacidad que tiene y que comentamos anteriormente, es que incluso estados lejanos a Colima mueven sus mercancías a través de este. 
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
                <input className="input" value="" placeholder="Nombre Usuario" type="text" name="nombre" id="" />
              </div>
              <div className="mail">
                <p className="label">correo</p>
                <input className="input" value="" placeholder="Correo Electrónico"  type="text" name="mail" id="" />
              </div>
            </div>
            <div className="formDos">
              <p className="label">Comentario</p>
              <input type="text" value="" placeholder="Comentario" name="coment" id="" className="inputComent" />
            </div>
          </div>
          <div className="containerBtnAdd">
              <div className="btnAdd">
                <i class="fa-solid fa-comment-dots"></i>
                <p>Enviar comentario</p>  
              </div>
            </div>
        </div>
      <Footer/>
    </div>
  );
}