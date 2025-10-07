import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header/Header";
import News from "./components/News/News";
import Noticia1 from "./Noticias/Noticia1";
import Weekly from "./components/Weekly/Weekly";
import Instagram from "./components/Instagram/Instagram";
import Footer from "./components/Footer/Footer";
import SecNews from "./Sec-News/Sec-news";
function Layout({ children }) {
  const location = useLocation();
  const rutasSinHeader = ["/noticias,/sec-news"];

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
            //aqui se colocan cada componente
            element={
              <>
                <News />
                <Weekly />
                <Instagram />
                <Footer />
              </>
            } 
          />
          <Route path="/noticias" element={<Noticia1 />} />
          <Route path="/sec-news" element={<SecNews />} />
        </Routes>
      </Layout>
    </Router>
  );
}
