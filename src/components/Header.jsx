import PropTypes from "prop-types";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import TriangularButton from "./TriangularButton";
const Header = ({ menuOpen, setMenuOpen }) => {
  return (
    <>
      {!menuOpen && (
        <nav>
          <NavContent setMenuOpen={setMenuOpen} />
        </nav>
      )}
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
const NavContent = ({ menuOpen, setMenuOpen }) => {
  const clickHandler = () => setMenuOpen(false);
  return (
    <>
      <h1>Insight Bridge KE</h1>
      <div>
        <a onClick={clickHandler} href="/">
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
        <a onClick={clickHandler} href="/blogs">
          Blog
        </a>
        <a onClick={clickHandler} href="#testimonials">
          Testimonials
        </a>
        <a onClick={clickHandler} href="/contact">
          Contact
        </a>
      </div>
      {/*  <a onClick={clickHandler} href="/form">
        <button>Get a Quote</button>
      </a> */}
      <div className="triBtn">
        <TriangularButton href={"/form"} />
      </div>
      <button className="navBtn" onClick={() => setMenuOpen(!menuOpen)}>
        {!menuOpen ? <AiOutlineMenu /> : <AiOutlineClose />}
      </button>
    </>
  );
};

Header.propTypes = {
  menuOpen: PropTypes.bool.isRequired,
  setMenuOpen: PropTypes.func,
};
HeaderPhone.propTypes = {
  menuOpen: PropTypes.bool.isRequired,
  setMenuOpen: PropTypes.func,
};
NavContent.propTypes = {
  menuOpen: PropTypes.bool.isRequired,
  setMenuOpen: PropTypes.func,
};

export default Header;
