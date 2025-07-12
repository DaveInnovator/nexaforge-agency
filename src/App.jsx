import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Footer from "./components/Footer";
import TawkToChat from "./components/TawkToChat";
export default function App() {
  return (
    <div className="bg-dark text-white font-sans">
      <TawkToChat />
      <Routes>
        {/* Assuming Home is a hero/landing page needing no padding */}
        <Route
          path="/"
          element={
            <Layout noPaddingTop>
              <Home />
            </Layout>
          }
        />

        {/* Other pages get padding to avoid navbar overlap */}
        <Route
          path="/about"
          element={
            <Layout>
              <About />
            </Layout>
          }
        />
        <Route
          path="/portfolio"
          element={
            <Layout>
              <Portfolio />
            </Layout>
          }
        />
        <Route
          path="/contact"
          element={
            <Layout>
              <Contact />
            </Layout>
          }
        />
        <Route
          path="/services"
          element={
            <Layout>
              <Services />
            </Layout>
          }
        />
      </Routes>

      {/* Footer stays outside layout since it’s always visible below */}
      
    </div>
  );
}