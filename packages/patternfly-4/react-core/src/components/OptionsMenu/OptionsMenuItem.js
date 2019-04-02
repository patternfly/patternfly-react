import React from 'react';
import PropTypes from 'prop-types';
import { css, getModifier } from '@patternfly/react-styles';
import styles from '@patternfly/patternfly/components/OptionsMenu/options-menu.css';
import { CheckIcon } from '@patternfly/react-icons';
import { KEY_CODES } from '../../helpers';

const propTypes = {
  /** Anything which can be rendered as an Options menu item */
  children: PropTypes.node,
  /** Classes applied to root element of an Options menu item */
  className: PropTypes.string,
  /** Render Options menu item as selected */
  isSelected: PropTypes.bool,
  /** Render Options menu item as disabled option */
  isDisabled: PropTypes.bool,
  /** Callback for when this Options menu item is selected */
  onSelect: PropTypes.func,
  /** Unique id of this Options menu item */
  id: PropTypes.string,
};

const defaultProps = {
  children: null,
  className: '',
  isSelected: false,
  isDisabled: false,
  onSelect: Function.prototype,
  id: '',
};

class OptionsMenuItem extends React.Component {

  onKeyDown = event => {
    // Detected key press on this item, notify the menu parent so that the appropriate
    // item can be focused
    if (event.keyCode === KEY_CODES.TAB) return;
    event.preventDefault();
    if (event.keyCode === KEY_CODES.ENTER) {
      this.props.onSelect(event);
    }
  };

  render() {
    const { onSelect, isDisabled, isSelected, className, children, id, ...props } = this.props;
    return <li>
      <button
        className={css(styles.optionsMenuMenuItem, isDisabled && getModifier(styles, 'disabled'), className)}
        aria-disabled={isDisabled}
        onClick={onSelect}
        onKeyDown={this.onKeyDown}
        aria-selected={isSelected}
        id={id}
        {...props}>
        {children}
        <i className={css(styles.optionsMenuMenuItemIcon)} aria-hidden={true} hidden={!isSelected}><CheckIcon/></i>
      </button>
    </li>
  }
}

OptionsMenuItem.propTypes = propTypes;
OptionsMenuItem.defaultProps = defaultProps;

export default OptionsMenuItem;
