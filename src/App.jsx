import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header, { HeaderPhone } from "./components/Header";
import Form from "./components/Form";
import Hero from "./components/Hero";

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <HeaderPhone menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Hero />

      <Router>
        <Routes>
          <Route path="/form" element={<Form />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
