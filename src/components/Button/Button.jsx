import PropTypes from 'prop-types';

function Button({
  className, type, onClick, children
}) {
  return (
    <button
      className={className}
      type={type ? 'submit' : 'button'}
      onClick={onClick}
    >
      { children }
    </button>
  );
}

Button.defaultProps = {
  type: 'button'
};

Button.prototype = {
  className: PropTypes.string,
  type: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  children: PropTypes.node
};

export default Button;
