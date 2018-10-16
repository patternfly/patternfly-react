import React, { Component } from 'react';
import styles from '@patternfly/patternfly-next/components/Dropdown/dropdown.css';
import { css } from '@patternfly/react-styles';
import PropTypes from 'prop-types';
import { KEY_CODES } from '../../internal/constants';

const propTypes = {
  /** HTML ID of dropdown toggle */
  id: PropTypes.string.isRequired,
  /** Anything which can be rendered as dropdown toggle */
  children: PropTypes.node,
  /** Classes applied to root element of dropdown toggle */
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
  isActive: PropTypes.bool
};

const defaultProps = {
  children: null,
  className: '',
  isOpen: false,
  parentRef: null,
  isFocused: false,
  isHovered: false,
  isActive: false,
  onToggle: Function.prototype
};

class DropdownToggle extends Component {
  componentDidMount = () => {
    document.addEventListener('mousedown', this.onDocClick);
    document.addEventListener('keydown', this.onEscPress);
  };

  componentWillUnmount = () => {
    document.removeEventListener('mousedown', this.onDocClick);
    document.removeEventListener('keydown', this.onEscPress);
  };

  onDocClick = event => {
    if (this.props.parentRef && !this.props.parentRef.contains(event.target)) {
      this.props.onToggle && this.props.onToggle(false);
    }
  };

  onEscPress = event => {
    const { parentRef } = this.props;
    const keyCode = event.keyCode || event.which;
    if (keyCode === KEY_CODES.ESCAPE_KEY && parentRef && parentRef.contains(event.target)) {
      this.props.onToggle && this.props.onToggle(false);
      this.toggle.focus();
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
      onToggle,
      parentRef,
      id,
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
          styles.dropdownToggle,
          isFocused && styles.modifiers.focus,
          isHovered && styles.modifiers.hover,
          isActive && styles.modifiers.active,
          className
        )}
        onClick={_event => onToggle && onToggle(!isOpen)}
        aria-expanded={isOpen}
      >
        {children}
      </button>
    );
  }
}

DropdownToggle.propTypes = propTypes;
DropdownToggle.defaultProps = defaultProps;

export default DropdownToggle;
