import PropTypes from 'prop-types';

const propTypes = {
  children: PropTypes.func.isRequired
};

const ExampleLayout = ({ children }) => children;

ExampleLayout.propTypes = propTypes;

export default ExampleLayout;
