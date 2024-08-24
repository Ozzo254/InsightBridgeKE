import PropTypes from "prop-types";

const TriangularButton = ({ href }) => {
  return (
    <div id="triBtn">
      <a href={href}>
        <span>Get a Quote</span>
        <span>Get a Quote</span>
      </a>
    </div>
  );
};

TriangularButton.propTypes = {
  href: PropTypes.string.isRequired,
};

export default TriangularButton;
