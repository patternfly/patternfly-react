import React from 'react';
import { getContext } from 'recompose';
import { wrongDepth, correctDepth, navContextTypes } from './VerticalNavConstants';
import VerticalNavItemHelper from './VerticalNavItemHelper';

/**
 * VerticalNav.Item - a child component for primary nav items under VerticalNav
 * This is a thin wrapper for VerticalNavItemHelper, to expose the warnings and the explicit-depth API.
 * In the future, we could lift some of the primary-specific code from Helper into this file.
 */
const BaseVerticalNavItem = props => {
  if (wrongDepth(props, 'primary')) return correctDepth(props);
  return <VerticalNavItemHelper {...props} />;
};

BaseVerticalNavItem.propTypes = {
  ...VerticalNavItemHelper.propTypes
};

const VerticalNavItem = getContext(navContextTypes)(BaseVerticalNavItem);

VerticalNavItem.propTypes = {
  ...BaseVerticalNavItem.propTypes
};
VerticalNavItem.displayName = 'VerticalNav.Item';

export default VerticalNavItem;
