import React, { Children, cloneElement, Component } from 'react';
import PropTypes from 'prop-types';
import styles from '@patternfly/patternfly/components/OptionsMenu/options-menu.css';
import { css, getModifier } from '@patternfly/react-styles';
import { OptionsMenuDirection, OptionsMenuPosition } from './optionsMenuConstants';

const propTypes = {
  /** Classes applied to root element of the Options menu */
  className: PropTypes.string,
  /** Id of the root element of the Options menu */
  id: PropTypes.string.isRequired,
  /** Array of OptionsMenuItem and/or OptionMenuItemGroup nodes that will be rendered in the Options menu list */
  menuItems: PropTypes.arrayOf(PropTypes.node).isRequired,
  /** Either an OptionsMenuToggle or an OptionsMenuToggleWithText to use to toggle the Options menu */
  toggle: PropTypes.node.isRequired,
  /** Flag to indicate if menu is open */
  isOpen: PropTypes.bool,
  /** Flag to indicate the toggle has no border or background */
  isPlain: PropTypes.bool,
  /** Provides an accessible name for the Options menu */
  ariaLabelMenu: PropTypes.string,
  /** Display menu above or below Options menu toggle */
  direction: PropTypes.oneOf(Object.values(OptionsMenuDirection)),
  /** Indicates where menu will be aligned horizontally */
  position: PropTypes.oneOf(Object.values(OptionsMenuPosition)),
};

const defaultProps = {
  className: '',
  isOpen: false,
  isPlain: false,
  ariaLabelMenu: '',
  direction: OptionsMenuDirection.down,
  position: OptionsMenuPosition.left,
};

class OptionsMenu extends Component {

  render() {
    const {
      className,
      direction,
      position,
      id,
      isOpen,
      isPlain,
      ariaLabelMenu,
      menuItems,
      toggle } = this.props;
    return (
      <div id={id}
        className={
          css(styles.optionsMenu,
            direction === OptionsMenuDirection.up && getModifier(styles, 'top'),
            position === OptionsMenuPosition.right && getModifier(styles, 'align-right'),
            isOpen && getModifier(styles, 'expanded'),
            className)}>
        {Children.map(toggle, oneToggle =>
          cloneElement(oneToggle, {
            parentId: id,
            isOpen,
            isPlain,
          }))}
        {isOpen &&
        <ul className={css(styles.optionsMenuMenu,
          position === OptionsMenuPosition.right && getModifier(styles, 'align-right'))}
          {...ariaLabelMenu ? {'aria-label': ariaLabelMenu} : {'aria-labelledby': `${id}-toggle`}}>
          {menuItems.map((item) => {
            return item;
          })}
        </ul>}
      </div>
    )
  }
}

OptionsMenu.propTypes = propTypes;
OptionsMenu.defaultProps = defaultProps;

export default OptionsMenu;
