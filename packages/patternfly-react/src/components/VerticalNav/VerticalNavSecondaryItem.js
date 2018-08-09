import React from 'react';
import { getContext } from 'recompose';
import { wrongDepth, correctDepth, navContextTypes } from './VerticalNavConstants';
import VerticalNavItemHelper from './VerticalNavItemHelper';

/**
 * VerticalNav.SecondaryItem - a child component for secondary nav items under VerticalNav
 * This is a thin wrapper for VerticalNavItemHelper, to expose the warnings and the explicit-depth API.
 * In the future, we could lift some of the secondary-specific code from Helper into this file.
 */
const BaseVerticalNavSecondaryItem = props => {
  if (wrongDepth(props, 'secondary')) return correctDepth(props);

  return <VerticalNavItemHelper {...props} />;
};

BaseVerticalNavSecondaryItem.propTypes = {
  ...VerticalNavItemHelper.propTypes
};

const VerticalNavSecondaryItem = getContext(navContextTypes)(BaseVerticalNavSecondaryItem);

VerticalNavSecondaryItem.propTypes = {
  ...BaseVerticalNavSecondaryItem.propTypes
};
VerticalNavSecondaryItem.displayName = 'VerticalNav.SecondaryItem';

export default VerticalNavSecondaryItem;
