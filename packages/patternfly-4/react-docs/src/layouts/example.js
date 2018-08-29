// This is a gatsby limitation will be fixed in newer version
// eslint-disable-next-line
import '@patternfly/react-core/../dist/styles/base.css';
import './index.css';
import PropTypes from 'prop-types';

const propTypes = {
  children: PropTypes.func.isRequired
};

const Layout = ({ children }) => children();

Layout.propTypes = propTypes;

export default Layout;
