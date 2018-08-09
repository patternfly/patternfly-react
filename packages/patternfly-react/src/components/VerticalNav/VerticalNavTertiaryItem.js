import React from 'react';
import { getContext } from 'recompose';
import { wrongDepth, correctDepth, navContextTypes } from './VerticalNavConstants';
import VerticalNavItemHelper from './VerticalNavItemHelper';

/**
 * VerticalNav.TertiaryItem - a child component for tertiary nav items under VerticalNav
 * This is a thin wrapper for VerticalNavItemHelper, to expose the warnings and the explicit-depth API.
 * In the future, we could lift some of the tertiary-specific code from Helper into this file.
 */
const BaseVerticalNavTertiaryItem = props => {
  if (wrongDepth(props, 'tertiary')) return correctDepth(props);
  return <VerticalNavItemHelper {...props} />;
};

BaseVerticalNavTertiaryItem.propTypes = {
  ...VerticalNavItemHelper.propTypes
};

const VerticalNavTertiaryItem = getContext(navContextTypes)(BaseVerticalNavTertiaryItem);

VerticalNavTertiaryItem.propTypes = {
  ...BaseVerticalNavTertiaryItem.propTypes
};
VerticalNavTertiaryItem.displayName = 'VerticalNav.TertiaryItem';

export default VerticalNavTertiaryItem;
