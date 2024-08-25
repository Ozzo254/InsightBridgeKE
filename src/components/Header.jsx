import PropTypes from "prop-types";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import TriangularButton from "./TriangularButton";
const Header = ({ menuOpen, setMenuOpen }) => {
  return (
    <>
      <nav>
        <NavContent setMenuOpen={setMenuOpen} />
        <button className="navBtn" onClick={() => setMenuOpen(!menuOpen)}>
          {!menuOpen ? <AiOutlineMenu /> : <AiOutlineClose />}
        </button>
      </nav>
    </>
  );
};

export const HeaderPhone = ({ menuOpen, setMenuOpen }) => {
  return (
    <>
      <div className={`navPhone ${menuOpen ? "menuOpen" : ""}`}>
        <NavContent setMenuOpen={setMenuOpen} />
      </div>
    </>
  );
};
const NavContent = ({ setMenuOpen }) => {
  const clickHandler = () => setMenuOpen(false);
  return (
    <>
      <h1>Insight Bridge KE</h1>
      <div>
        <a onClick={clickHandler} href="#home">
          Home
        </a>
        <a onClick={clickHandler} href="#services">
          Services
        </a>
        <a onClick={clickHandler} href="#about">
          About
        </a>
        <a onClick={clickHandler} href="#team">
          Team
        </a>
        <a onClick={clickHandler} href="#blog">
          Blog
        </a>
        <a onClick={clickHandler} href="#testimonials">
          Testimonials
        </a>
        <a onClick={clickHandler} href="#contact">
          Contact
        </a>
      </div>
      {/*  <a onClick={clickHandler} href="/form">
        <button>Get a Quote</button>
      </a> */}
      <div className="triBtn">
        <TriangularButton href={"/form"} />
      </div>
    </>
  );
};

Header.propTypes = {
  menuOpen: PropTypes.bool,
  setMenuOpen: PropTypes.func,
};
HeaderPhone.propTypes = {
  menuOpen: PropTypes.bool,
  setMenuOpen: PropTypes.func,
};
NavContent.propTypes = {
  setMenuOpen: PropTypes.func,
};

export default Header;
