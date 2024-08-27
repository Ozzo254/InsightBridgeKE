import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Lenis from "lenis";

import Header, { HeaderPhone } from "./components/Header";
import Hero from "./components/Hero";

import Form from "./pages/Form";
import Services from "./components/Services";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";

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

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="form" element={<Form />} />
        <Route path="blogs" element={<Blogs />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};
function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Blogs />
      <Contact />
    </>
  );
}

export default App;
