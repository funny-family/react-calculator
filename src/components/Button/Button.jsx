import PropTypes from 'prop-types';

function Button({
  className, type, calctype, onClick
}) {
  return (
    <button
      className={className}
      type={type ? 'submit' : 'button'}
      onClick={onClick(calctype)}
    >
      { calctype }
    </button>
  );
}

Button.defaultProps = {
  type: 'button',
  calctype: '',
  onClick: () => {}
};

Button.prototype = {
  className: PropTypes.string,
  type: PropTypes.string.isRequired,
  calctype: PropTypes.string,
  onClick: PropTypes.func
  // children: PropTypes.node
};

export default Button;
