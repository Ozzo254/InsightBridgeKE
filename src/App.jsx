import { useEffect, /* useRef, */ useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header, { HeaderPhone } from "./components/Header";
import Form from "./components/Form";
import Hero from "./components/Hero";

import Lenis from "lenis";
// import { useScroll } from "framer-motion";

const App = () => {
  // const container = useRef();
  /*   const scrollYPogress = useScroll({
    target: container,
    offset: ["start start", "end end"],
  }); */

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
    <>
      {/* <main  ref={container} > */}
      <HeaderPhone menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Hero /* scrollYPogress={scrollYPogress} */ />
      {/* </main> */}
      <Router>
        <Routes>
          <Route path="/form" element={<Form />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
