import React, { Component } from 'react';
import styles from '@patternfly/patternfly/components/Select/select.css';
import buttonStyles from '@patternfly/patternfly/components/Button/button.css';
import { css } from '@patternfly/react-styles';
import PropTypes from 'prop-types';
import { CaretDownIcon } from '@patternfly/react-icons';
import { KeyTypes, SelectVariant } from './selectConstants';

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
  /** Id of label for the Select aria-labelledby */
  ariaLabelledBy: PropTypes.string,
  /** Label for toggle of select variants */
  ariaLabelToggle: PropTypes.string,
  /** Flag for variant, determines toggle rules and interaction */
  variant: PropTypes.oneOf(['single', 'checkbox', 'typeahead', 'typeaheadmulti']),
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
  variant: false,
  ariaLabelledBy: null,
  ariaLabelToggle: null,
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
    const { parentRef, isExpanded, variant, onToggle, onClose } = this.props;
    if (event.key === KeyTypes.Tab && variant === SelectVariant.checkbox) return;
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
    const { isExpanded, onToggle, variant, onClose, onEnter } = this.props;
    if (
      (event.key === KeyTypes.Tab && variant === SelectVariant.checkbox) ||
      (event.key === KeyTypes.Tab && !isExpanded) ||
      (event.key !== KeyTypes.Enter && event.key !== KeyTypes.Space) ||
      ((event.key === KeyTypes.Space || event.key === KeyTypes.Enter) &&
        (variant === SelectVariant.typeahead || variant === SelectVariant.typeaheadMulti))
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
      variant,
      onToggle,
      onEnter,
      onClose,
      parentRef,
      id,
      type,
      ariaLabelledBy,
      ariaLabelToggle,
      ...props
    } = this.props;
    const isTypeahead = variant === SelectVariant.typeahead || variant === SelectVariant.typeaheadMulti;
    const ToggleComponent = isTypeahead ? 'div' : 'button';
    const toggleProps = {
      id,
      'aria-labelledby': ariaLabelledBy,
      'aria-expanded': isExpanded,
      'aria-haspopup': (variant !== SelectVariant.checkbox && 'listbox') || null
    };
    return (
      <ToggleComponent
        {...props}
        ref={toggle => {
          this.toggle = toggle;
        }}
        className={css(
          styles.selectToggle,
          isFocused && styles.modifiers.focus,
          isHovered && styles.modifiers.hover,
          isActive && styles.modifiers.active,
          isPlain && styles.modifiers.plain,
          isTypeahead && styles.modifiers.typeahead,
          className
        )}
        type={!isTypeahead ? type : null}
        onClick={_event => {
          if (isTypeahead) onToggle && onToggle(true);
          else {
            onToggle && onToggle(!isExpanded);
            if (isExpanded) onClose && onClose();
          }
        }}
        onKeyDown={this.onKeyDown}
        {...!isTypeahead && toggleProps}
      >
        {children}
        {isTypeahead && (
          <button
            className={css(buttonStyles.button, styles.selectToggleButton)}
            {...isTypeahead && toggleProps}
            aria-label={ariaLabelToggle}
            onClick={_event => {
              _event.stopPropagation();
              onToggle && onToggle(!isExpanded);
              if (isExpanded) onClose && onClose();
            }}
          >
            <CaretDownIcon className={css(styles.selectToggleArrow)} />
          </button>
        )}
        {!isTypeahead && <CaretDownIcon className={css(styles.selectToggleArrow)} />}
      </ToggleComponent>
    );
  }
}

SelectToggle.propTypes = propTypes;
SelectToggle.defaultProps = defaultProps;

export default SelectToggle;
