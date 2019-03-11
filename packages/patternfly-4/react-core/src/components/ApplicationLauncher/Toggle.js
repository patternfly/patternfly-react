import React, { Component } from 'react';
import styles from '@patternfly/patternfly/components/Button/button.css';
import { css } from '@patternfly/react-styles';
import PropTypes from 'prop-types';
import { KEY_CODES } from '../../helpers/constants';

const propTypes = {
  /** HTML ID of toggle */
  id: PropTypes.string.isRequired,
  /** Anything which can be rendered as toggle */
  children: PropTypes.node,
  /** Classes applied to root element of toggle */
  className: PropTypes.string,
  /** Flag to indicate if menu is opened */
  isOpen: PropTypes.bool,
  /** Callback called when toggle is clicked */
  onToggle: PropTypes.func,
  /** Element which wraps toggle */
  parentRef: PropTypes.any,
  /** Forces focus state */
  isFocused: PropTypes.bool,
  /** Forces hover state */
  isHovered: PropTypes.bool,
  /** Forces active state */
  isActive: PropTypes.bool,
  /** Display the toggle with no border or background */
  isPlain: PropTypes.bool,
  /** Additional props are spread to the container <button> */
  '': PropTypes.any
};

const defaultProps = {
  children: null,
  className: '',
  isOpen: false,
  parentRef: null,
  isFocused: false,
  isHovered: false,
  isActive: false,
  isPlain: false,
  onToggle: Function.prototype
};

class ApplicationLauncherToggle extends Component {
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
      this.props.onToggle && this.props.onToggle(false);
      this.toggle.focus();
    }
  };

  onEscPress = event => {
    const { parentRef } = this.props;
    const keyCode = event.keyCode || event.which;
    if (
      this.props.isOpen &&
      (keyCode === KEY_CODES.ESCAPE_KEY || event.keyCode === KEY_CODES.TAB) &&
      parentRef &&
      parentRef.contains(event.target)
    ) {
      this.props.onToggle && this.props.onToggle(false);
      this.toggle.focus();
    }
  };

  onKeyDown = event => {
    if (event.keyCode === KEY_CODES.TAB && !this.props.isOpen) return;
    event.preventDefault();
    if (
      (event.keyCode === KEY_CODES.TAB || event.keyCode === KEY_CODES.ENTER || event.key === ' ') &&
      this.props.isOpen
    ) {
      this.props.onToggle(!this.props.isOpen);
    } else if ((event.keyCode === KEY_CODES.ENTER || event.key === ' ') && !this.props.isOpen) {
      this.props.onToggle(!this.props.isOpen);
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
      isPlain,
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
          styles.button,
          isFocused && styles.modifiers.focus,
          isHovered && styles.modifiers.hover,
          isActive && styles.modifiers.active,
          isPlain && styles.modifiers.plain,
          className
        )}
        type={type || 'button'}
        onClick={_event => onToggle && onToggle(!isOpen)}
        aria-expanded={isOpen}
        onKeyDown={this.onKeyDown}
      >
        {children}
      </button>
    );
  }
}

ApplicationLauncherToggle.propTypes = propTypes;
ApplicationLauncherToggle.defaultProps = defaultProps;

export default ApplicationLauncherToggle;
