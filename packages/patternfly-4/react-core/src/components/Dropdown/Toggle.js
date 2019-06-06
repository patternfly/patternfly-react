import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from '@patternfly/react-styles/css/components/Dropdown/dropdown';
import { css } from '@patternfly/react-styles';
import { KEY_CODES } from '../../helpers/constants';

const propTypes = {
  /** HTML ID of dropdown toggle */
  id: PropTypes.string.isRequired,
  /** Type to put on the button */
  type: PropTypes.string,
  /** Anything which can be rendered as dropdown toggle */
  children: PropTypes.node,
  /** Classes applied to root element of dropdown toggle */
  className: PropTypes.string,
  /** Flag to indicate if menu is opened */
  isOpen: PropTypes.bool,
  /** Callback called when toggle is clicked */
  onToggle: PropTypes.func,
  /** Callback called when the Enter key is pressed */
  onEnter: PropTypes.func,
  /** Element which wraps toggle */
  parentRef: PropTypes.any,
  /** Forces focus state */
  isFocused: PropTypes.bool,
  /** Forces hover state */
  isHovered: PropTypes.bool,
  /** Forces active state */
  isActive: PropTypes.bool,
  /** Disables the dropdown toggle */
  isDisabled: PropTypes.bool,
  /** Display the toggle with no border or background */
  isPlain: PropTypes.bool,
  /** Style the toggle as a child of a split button */
  isSplitButton: PropTypes.bool,
  /** Flag for aria popup */
  ariaHasPopup: PropTypes.bool,
  /** Additional props are spread to the container <button> */
  '': PropTypes.any // eslint-disable-line react/require-default-props
};

const defaultProps = {
  children: null,
  className: '',
  type: null,
  isOpen: false,
  parentRef: null,
  isFocused: false,
  isHovered: false,
  isActive: false,
  isDisabled: false,
  isPlain: false,
  isSplitButton: false,
  ariaHasPopup: undefined,
  onToggle: Function.prototype,
  onEnter: Function.prototype
};

class Toggle extends Component {
  componentDidMount = () => {
    document.addEventListener('mousedown', this.onDocClick);
    document.addEventListener('touchstart', this.onDocClick);
    document.addEventListener('keydown', this.onEscPress);
  };

  componentWillUnmount = () => {
    document.removeEventListener('mousedown', this.onDocClick);
    document.removeEventListener('touchstart', this.onDocClick);
    document.removeEventListener('keydown', this.onEscPress);
  };

  onDocClick = event => {
    if (this.props.isOpen && this.props.parentRef && !this.props.parentRef.contains(event.target)) {
      this.props.onToggle && this.props.onToggle(false, event);
      this.toggle.focus();
    }
  };

  onEscPress = event => {
    const { parentRef } = this.props;
    const keyCode = event.keyCode || event.which;
    if (
      this.props.isOpen &&
      (keyCode === KEY_CODES.ESCAPE_KEY || event.key === 'Tab') &&
      parentRef &&
      parentRef.contains(event.target)
    ) {
      this.props.onToggle && this.props.onToggle(false, event);
      this.toggle.focus();
    }
  };

  onKeyDown = event => {
    if (event.key === 'Tab' && !this.props.isOpen) return;
    event.preventDefault();
    if ((event.key === 'Tab' || event.key === 'Enter' || event.key === ' ') && this.props.isOpen) {
      this.props.onToggle(!this.props.isOpen, event);
    } else if ((event.key === 'Enter' || event.key === ' ') && !this.props.isOpen) {
      this.props.onToggle(!this.props.isOpen, event);
      this.props.onEnter();
    }
  };

  render() {
    const {
      className,
      children,
      isOpen,
      isFocused,
      isActive,
      isHovered,
      isDisabled,
      isPlain,
      isSplitButton,
      ariaHasPopup,
      onToggle,
      onEnter,
      parentRef,
      id,
      type,
      ...props
    } = this.props;
    return (
      <button
        {...props}
        id={id}
        ref={toggle => {
          this.toggle = toggle;
        }}
        className={css(
          isSplitButton ? styles.dropdownToggleButton : styles.dropdownToggle,
          isFocused && styles.modifiers.focus,
          isHovered && styles.modifiers.hover,
          isActive && styles.modifiers.active,
          isPlain && styles.modifiers.plain,
          isDisabled && styles.modifiers.disabled,
          className
        )}
        type={type || 'button'}
        onClick={event => onToggle && onToggle(!isOpen, event)}
        aria-expanded={isOpen}
        aria-haspopup={ariaHasPopup}
        onKeyDown={this.onKeyDown}
        disabled={isDisabled}
      >
        {children}
      </button>
    );
  }
}

Toggle.propTypes = propTypes;
Toggle.defaultProps = defaultProps;

export default Toggle;
