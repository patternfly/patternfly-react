import React from 'react';
import PropTypes from 'prop-types';
import DropdownItem from './DropdownItem';
import styles from '@patternfly/patternfly/components/Dropdown/dropdown.css';
import { css } from '@patternfly/react-styles';
import { componentShape } from '../../internal/componentShape';
import { DropdownArrowContext } from './dropdownConstants';

const Item = ({ className, ...props }) => (
  <DropdownArrowContext.Consumer>
    {context => (
      <DropdownItem
        {...props}
        context={context}
        role="menuitem"
        tabIndex={-1}
        className={css(styles.dropdownMenuItem, className)}
      />
    )}
  </DropdownArrowContext.Consumer>
);

Item.propTypes = {
  /** Anything which can be rendered as dropdown item */
  children: PropTypes.node,
  /** Classess applied to root element of dropdown item */
  className: PropTypes.string,
  /** Indicates which component will be used as dropdown item */
  component: componentShape,
  /** Render dropdown item as disabled option */
  isDisabled: PropTypes.bool,
  /** Forces display of the hover state of the element */
  isHovered: PropTypes.bool,
  /** Default hyperlink location */
  href: PropTypes.string,
  /** Additional props are passed to the DropdownItem */
  '': PropTypes.any
};
Item.defaultProps = {
  children: null,
  className: '',
  isHovered: false,
  component: 'a',
  isDisabled: false,
  href: '#'
};

export default Item;
