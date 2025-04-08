import PropTypes from "prop-types";
import "./styles.css";

const GradientText = ({ children, className = "" }) => {
  return (
    <span className={`gradient-text ${className}`}>
      {children}
    </span>
  );
};

GradientText.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default GradientText;