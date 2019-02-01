import React, { Component } from 'react';
import styles from '@patternfly/patternfly-next/components/Select/select.css';
import { css } from '@patternfly/react-styles';
import PropTypes from 'prop-types';
import { CaretDownIcon } from '@patternfly/react-icons';

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
  /** The icon to display for the toggle. Defaults to CaretDownIcon. Set to null to not show an icon. */
  iconComponent: PropTypes.func,
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
  iconComponent: CaretDownIcon,
  onToggle: Function.prototype
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
    const { parentRef, isExpanded, onToggle, onClose } = this.props;
    if (
      isExpanded &&
      (event.key === 'Escape' || event.key === 'Tab') &&
      parentRef &&
      parentRef.contains(event.target)
    ) {
      onToggle && onToggle(false);
      onClose && onClose();
      this.toggle.focus();
    }
  };

  onKeyDown = event => {
    const { isExpanded, onToggle, onClose, onEnter } = this.props;
    if (event.key === 'Tab' && !isExpanded) return;
    event.preventDefault();
    if ((event.key === 'Tab' || event.key === 'Enter' || event.key === ' ') && isExpanded) {
      onToggle(!isExpanded);
      onClose && onClose();
    } else if ((event.key === 'Enter' || event.key === ' ') && !isExpanded) {
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
      onToggle,
      onEnter,
      parentRef,
      id,
      type,
      iconComponent: IconComponent,
      ...props
    } = this.props;
    return (
      <div
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
        tabIndex={0}
        type={type || 'button'}
        onClick={_event => onToggle && onToggle(!isExpanded)}
        aria-expanded={isExpanded}
        aria-haspopup="listbox"
        onKeyDown={this.onKeyDown}
      >
        <div className={css(styles.selectToggleWrapper)}>{children}</div>
        {IconComponent && <IconComponent className={css(styles.selectToggleArrow)} />}
      </div>
    );
  }
}

SelectToggle.propTypes = propTypes;
SelectToggle.defaultProps = defaultProps;

export default SelectToggle;
