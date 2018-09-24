import PropTypes from 'prop-types';
import { withPrefix } from 'gatsby-link';

// This is a gatsby limitation will be fixed in newer version
let globalStyles = require(`!raw-loader!@patternfly/react-core/../dist/styles/base.css`);
globalStyles = globalStyles.replace(/\.\/assets\//g, withPrefix('/assets/'));
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
