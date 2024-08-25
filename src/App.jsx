import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Lenis from "lenis";

import Header, { HeaderPhone } from "./components/Header";
import Hero from "./components/Hero";

import Form from "./pages/Form";
import Services from "./components/Services";

const App = () => {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Router>
      <HeaderPhone menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Hero />
      <Services />

      <Routes>
        <Route path="form" element={<Form />} />
      </Routes>
    </Router>
  );
};

export default App;
