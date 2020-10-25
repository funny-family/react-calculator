import PropTypes from 'prop-types';

function Input({
  className, type, value, onChange, readOnly
}) {
  return (
    <input
      className={className}
      type={type}
      value={value}
      onChange={onChange}
      readOnly={readOnly}
    />
  );
}

Input.defaultProps = {
  readOnly: false,
  type: 'text'
};

Input.prototype = {
  className: PropTypes.string,
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func,
  readOnly: PropTypes.bool
};

export default Input;
