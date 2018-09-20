import PropTypes from 'prop-types';

// This is a gatsby limitation will be fixed in newer version
const globalStyles = require(`!raw-loader!@patternfly/react-core/../dist/styles/base.css`);
const localStyles = require(`!raw-loader!./index.css`);
import { injectGlobal } from 'emotion';

injectGlobal(globalStyles);
injectGlobal(localStyles);

const propTypes = {
  children: PropTypes.func.isRequired
};

const Layout = ({ children }) => children();

Layout.propTypes = propTypes;

export default Layout;
