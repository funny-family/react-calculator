import PropTypes from 'prop-types';

function Input({
  className, type
}) {
  return (
    <input
      className={`form-control ${className}`}
      type={type}
    />
  );
}

Input.defaultProps = {
  type: 'text'
};

Input.prototype = {
  className: PropTypes.string,
  type: PropTypes.string.isRequired
};

export default Input;
