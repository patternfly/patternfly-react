import PropTypes from 'prop-types';

// This is a gatsby limitation will be fixed in newer version
const globalStyles = require(`!raw-loader!@patternfly/react-core/../dist/styles/base.css`);
import { injectGlobal } from 'emotion';

// eslint-disable-next-line
injectGlobal`${globalStyles}`;

// Load other styles after global styles
import './index.css';

const propTypes = {
  children: PropTypes.func.isRequired
};

const Layout = ({ children }) => children();

Layout.propTypes = propTypes;

export default Layout;
