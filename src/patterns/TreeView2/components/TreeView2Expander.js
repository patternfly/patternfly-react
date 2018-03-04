import React from 'react';
import PropTypes from 'prop-types';

import { Icon } from '../../../components/Icon';

const TreeView2Expander = ({ expanded, ...props }) => (
  <Icon
    type="fa"
    name={expanded ? 'angle-down' : 'angle-right'}
    className="icon expand-icon"
    {...props}
  />
);

TreeView2Expander.propTypes = {
  /** is expanded?  */
  expanded: PropTypes.bool
};

TreeView2Expander.defaultProps = {
  expanded: false
};

export default TreeView2Expander;
