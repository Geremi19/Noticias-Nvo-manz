import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Noticias from "./components/News/News";
import Noticia1 from "./Noticias/Noticia1";
// 🔹 Componente que controla si se muestra o no el Header
function Layout({ children }) {
  const location = useLocation();
  
  // lista de rutas donde NO quieres mostrar el header
  const rutasSinHeader = ["/noticias"];

  return (
    <>
      {!rutasSinHeader.includes(location.pathname) && <Header />}
      <main >{children}</main>
    </>
  );
}

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/noticias" element={<Noticia1 />} />
        </Routes>
      </Layout>
    </Router>
  );
}
