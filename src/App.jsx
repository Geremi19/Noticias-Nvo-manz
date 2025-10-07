import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header/Header";
import News from "./components/News/News";
import Video from "./components/Video/video";
import Noticia1 from "./Noticias/Noticia1";
import Weekly from "./components/Weekly/Weekly";
import Instagram from "./components/Instagram/Instagram";
import Footer from "./components/Footer/Footer";
import SecNews from "./Sec-News/Sec-news";

function Layout({ children }) {
  const location = useLocation();
  // Array separado correctamente para que funcione la ocultación del Header
  const rutasSinHeader = ["/noticia1"];

  return (
    <>
      {!rutasSinHeader.includes(location.pathname) && <Header />}
      <main>{children}</main>
    </>
  );
}

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route 
            path="/" 
            element={
              <>
                <News />
                <Weekly />
                <Instagram />
                <Footer />
              </>
            } 
          />
          {/* Rutas individuales para cada noticia */}
          <Route path="/noticia1" element={<Noticia1 />} />
        
          
          <Route path="/sec-news" element={<SecNews />} />
          <Route path="/videos" element={<Video />} />
        </Routes>
      </Layout>
    </Router>
  );
}
