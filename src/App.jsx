import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header/Header";
import News from "./components/News/News";
import Noticia1 from "./Noticias/Noticia1";
import Weekly from "./components/Weekly/Weekly";
function Layout({ children }) {
  const location = useLocation();
  const rutasSinHeader = ["/noticias"];

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
              </>
            } 
          />
          <Route path="/noticias" element={<Noticia1 />} />
        </Routes>
      </Layout>
    </Router>
  );
}
