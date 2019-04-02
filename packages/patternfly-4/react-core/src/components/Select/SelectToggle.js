import React, { Component } from 'react';
import styles from '@patternfly/patternfly/components/Select/select.css';
import { css } from '@patternfly/react-styles';
import PropTypes from 'prop-types';
import { CaretDownIcon } from '@patternfly/react-icons';
import { KeyTypes } from './selectConstants';

const propTypes = {
  /** HTML ID of dropdown toggle */
  id: PropTypes.string.isRequired,
  /** Anything which can be rendered as dropdown toggle */
  children: PropTypes.node,
  /** Classes applied to root element of dropdown toggle */
  className: PropTypes.string,
  /** Flag to indicate if select is expanded */
  isExpanded: PropTypes.bool,
  /** Callback called when toggle is clicked */
  onToggle: PropTypes.func,
  /** Callback for toggle open on keyboard entry */
  onEnter: PropTypes.func,
  /** Callback for toggle close */
  onClose: PropTypes.func,
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
  /** Type of the toggle button, defaults to 'button' */
  type: PropTypes.string,
  /** Flag for checkbox variant keyboard interaction */
  isCheckbox: PropTypes.bool,
  /** Additional props are spread to the container <button> */
  '': PropTypes.any
};

const defaultProps = {
  children: null,
  className: '',
  isExpanded: false,
  parentRef: null,
  isFocused: false,
  isHovered: false,
  isActive: false,
  isPlain: false,
  isCheckbox: false,
  type: 'button',
  onToggle: Function.prototype,
  onEnter: Function.prototype,
  onClose: Function.prototype
};

class SelectToggle extends Component {
  componentDidMount() {
    document.addEventListener('mousedown', this.onDocClick);
    document.addEventListener('touchstart', this.onDocClick);
    document.addEventListener('keydown', this.onEscPress);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.onDocClick);
    document.removeEventListener('touchstart', this.onDocClick);
    document.removeEventListener('keydown', this.onEscPress);
  }

  onDocClick = event => {
    const { parentRef, isExpanded, onToggle, onClose } = this.props;
    if (isExpanded && parentRef && !parentRef.contains(event.target)) {
      onToggle && onToggle(false);
      onClose && onClose();
      this.toggle.focus();
    }
  };

  onEscPress = event => {
    const { parentRef, isExpanded, isCheckbox, onToggle, onClose } = this.props;
    if (event.key === KeyTypes.Tab && isCheckbox) return;
    if (
      isExpanded &&
      (event.key === KeyTypes.Escape || event.key === KeyTypes.Tab) &&
      parentRef &&
      parentRef.contains(event.target)
    ) {
      onToggle && onToggle(false);
      onClose && onClose();
      this.toggle.focus();
    }
  };

  onKeyDown = event => {
    const { isExpanded, onToggle, isCheckbox, onClose, onEnter } = this.props;
    if (
      (event.key === KeyTypes.Tab && isCheckbox) ||
      (event.key === KeyTypes.Tab && !isExpanded) ||
      (event.key !== KeyTypes.Enter && event.key !== KeyTypes.Space)
    )
      return;
    event.preventDefault();
    if ((event.key === KeyTypes.Tab || event.key === KeyTypes.Enter || event.key === KeyTypes.Space) && isExpanded) {
      onToggle && onToggle(!isExpanded);
      onClose && onClose();
      this.toggle.focus();
    } else if ((event.key === KeyTypes.Enter || event.key === KeyTypes.Space) && !isExpanded) {
      onToggle(!isExpanded);
      onEnter();
    }
  };

  render() {
    const {
      className,
      children,
      isExpanded,
      isFocused,
      isActive,
      isHovered,
      isPlain,
      isCheckbox,
      onToggle,
      onEnter,
      onClose,
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
          styles.selectToggle,
          isFocused && styles.modifiers.focus,
          isHovered && styles.modifiers.hover,
          isActive && styles.modifiers.active,
          isPlain && styles.modifiers.plain,
          className
        )}
        type={type}
        onClick={_event => {
          onToggle && onToggle(!isExpanded);
          if (isExpanded) onClose && onClose();
        }}
        aria-expanded={isExpanded}
        aria-haspopup={(!isCheckbox && 'listbox') || null}
        onKeyDown={this.onKeyDown}
      >
        {children}
        <CaretDownIcon className={css(styles.selectToggleArrow)} />
      </button>
    );
  }
}

SelectToggle.propTypes = propTypes;
SelectToggle.defaultProps = defaultProps;

export default SelectToggle;
