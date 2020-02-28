import PropTypes from 'prop-types';

export default PropTypes.shape({
  address: PropTypes.string.isRequired,

  port: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  tlsPort: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
});
