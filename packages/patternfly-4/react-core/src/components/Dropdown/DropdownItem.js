import React from 'react';
import PropTypes from 'prop-types';
import InternalDropdownItem from './InternalDropdownItem';
import { componentShape } from '../../helpers/componentShape';
import { DropdownArrowContext } from './dropdownConstants';

const DropdownItem = ({ ...props }) => (
  <DropdownArrowContext.Consumer>
    {context => <InternalDropdownItem context={context} role="menuitem" tabIndex={-1} {...props} />}
  </DropdownArrowContext.Consumer>
);

DropdownItem.propTypes = {
  /** Anything which can be rendered as dropdown item */
  children: PropTypes.node,
  /** Classes applied to root element of dropdown item */
  className: PropTypes.string,
  /** Indicates which component will be used as dropdown item */
  component: componentShape,
  /** Render dropdown item as disabled option */
  isDisabled: PropTypes.bool,
  /** Forces display of the hover state of the element */
  isHovered: PropTypes.bool,
  /** Default hyperlink location */
  href: PropTypes.string,
  /** Tooltip to display when hovered over the item */
  tooltip: PropTypes.node,
  /** Additional tooltip props forwarded to the Tooltip component */
  tooltipProps: PropTypes.any,
  /** Additional props are passed to the DropdownItem */
  '': PropTypes.any // eslint-disable-line react/require-default-props
};
DropdownItem.defaultProps = {
  children: null,
  className: '',
  isHovered: false,
  component: 'a',
  isDisabled: false,
  href: '',
  tooltip: null,
  tooltipProps: {}
};

export default DropdownItem;
