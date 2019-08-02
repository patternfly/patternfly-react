import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/Dropdown/dropdown';
import { DropdownContext } from './dropdownConstants';
import { css } from '@patternfly/react-styles';
import { KEY_CODES } from '../../helpers/constants';

export interface ToggleProps {
  /** HTML ID of dropdown toggle */
  id: string;
  /** Type to put on the button */
  type?: 'button' | 'submit' | 'reset';
  /** Anything which can be rendered as dropdown toggle */
  children?: React.ReactNode;
  /** Classes applied to root element of dropdown toggle */
  className?: string;
  /** Flag to indicate if menu is opened */
  isOpen?: boolean;
  /** Callback called when toggle is clicked */
  onToggle?: (isOpen: boolean, event: MouseEvent | TouchEvent | KeyboardEvent | React.KeyboardEvent<any> | React.MouseEvent<HTMLButtonElement>) => void;
  /** Callback called when the Enter key is pressed */
  onEnter?: () => void;
  /** Element which wraps toggle */
  parentRef?: any;
  /** Forces focus state */
  isFocused?: boolean;
  /** Forces hover state */
  isHovered?: boolean;
  /** Forces active state */
  isActive?: boolean;
  /** Disables the dropdown toggle */
  isDisabled?: boolean;
  /** Display the toggle with no border or background */
  isPlain?: boolean;
  /** Style the toggle as a child of a split button */
  isSplitButton?: boolean;
  /** Flag for aria popup */
  ariaHasPopup?: boolean;
} 

export class Toggle extends React.Component<ToggleProps> {
  private buttonRef = React.createRef<HTMLButtonElement>();

  static defaultProps = {
    className: '',
    isOpen: false,
    isFocused: false,
    isHovered: false,
    isActive: false,
    isDisabled: false,
    isPlain: false,
    isSplitButton: false,
    onToggle: Function.prototype,
    onEnter: Function.prototype
  };

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

  onDocClick = (event: MouseEvent | TouchEvent) => {
    if (this.props.isOpen && this.props.parentRef && !this.props.parentRef.current.contains(event.target)) {
      this.props.onToggle(false, event);
      this.buttonRef.current.focus();
    }
  };

  onEscPress = (event: KeyboardEvent) => {
    const { parentRef } = this.props;
    const keyCode = event.keyCode || event.which;
    if (
      this.props.isOpen &&
      (keyCode === KEY_CODES.ESCAPE_KEY || event.key === 'Tab') &&
      parentRef &&
      parentRef.contains(event.target)
    ) {
      this.props.onToggle(false, event);
      this.buttonRef.current.focus();
    }
  };

  onKeyDown = (event: React.KeyboardEvent<any>) => {
    if (event.key === 'Tab' && !this.props.isOpen) { return };
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
      <DropdownContext.Consumer>
        {({ toggleClass }) => (
          <button
            {...props}
            id={id}
            ref={this.buttonRef}
            className={css(
              isSplitButton ? styles.dropdownToggleButton : toggleClass || styles.dropdownToggle,
              isFocused && styles.modifiers.focus,
              isHovered && styles.modifiers.hover,
              isActive && styles.modifiers.active,
              isPlain && styles.modifiers.plain,
              isDisabled && styles.modifiers.disabled,
              className
            )}
            type={type || 'button'}
            onClick={event => onToggle(!isOpen, event)}
            aria-expanded={isOpen}
            aria-haspopup={ariaHasPopup}
            onKeyDown={this.onKeyDown}
            disabled={isDisabled}
          >
            {children}
          </button>
        )}
      </DropdownContext.Consumer>
    );
  }
}
