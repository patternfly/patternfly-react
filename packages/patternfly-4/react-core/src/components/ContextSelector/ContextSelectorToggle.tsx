import * as React from 'react';
import { CaretDownIcon } from '@patternfly/react-icons';
import styles from '@patternfly/react-styles/css/components/ContextSelector/context-selector';
import { css } from '@patternfly/react-styles';
import { KEY_CODES } from '../../helpers/constants';

export interface ContextSelectorToggleProps {
  /** HTML ID of toggle */
  id: string;
  /** Classes applied to root element of toggle */
  className?: string;
  /** Text that appears in the Context Selector Toggle */
  toggleText?: string;
  /** Flag to indicate if menu is opened */
  isOpen?: boolean;
  /** Callback called when toggle is clicked */
  onToggle?: (event: any, value: boolean) => void;
  /** Callback for toggle open on keyboard entry */
  onEnter: () => void;
  /** Element which wraps toggle */
  parentRef?: any;
  /** Forces focus state */
  isFocused?: boolean;
  /** Forces hover state */
  isHovered?: boolean;
  /** Forces active state */
  isActive?: boolean;
}

export class ContextSelectorToggle extends React.Component<ContextSelectorToggleProps> {
  static defaultProps = {
    className: '',
    toggleText: '',
    isOpen: false,
    onEnter: () => undefined as any,
    parentRef: null as any,
    isFocused: false,
    isHovered: false,
    isActive: false,
    onToggle: (event: any, value: boolean) => undefined as any
  };

  toggle: React.RefObject<HTMLButtonElement> = React.createRef();

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

  onDocClick = (event: any) => {
    const { isOpen, parentRef, onToggle } = this.props;
    if (isOpen && parentRef && !parentRef.contains(event.target)) {
      onToggle(null, false);
      this.toggle.current.focus();
    }
  };

  onEscPress = (event: any) => {
    const { isOpen, parentRef, onToggle } = this.props;
    const keyCode = event.keyCode || event.which;
    if (isOpen && keyCode === KEY_CODES.ESCAPE_KEY && parentRef && parentRef.contains(event.target)) {
      onToggle(null, false);
      this.toggle.current.focus();
    }
  };

  onKeyDown = (event: any) => {
    const { isOpen, onToggle, onEnter } = this.props;
    if ((event.keyCode === KEY_CODES.TAB && !isOpen) || event.key !== KEY_CODES.ENTER) {
      return;
    }
    event.preventDefault();
    if (
      (event.keyCode === KEY_CODES.TAB || event.keyCode === KEY_CODES.ENTER || event.key !== KEY_CODES.SPACE) &&
      isOpen
    ) {
      onToggle(null, !isOpen);
    } else if ((event.keyCode === KEY_CODES.ENTER || event.key === ' ') && !isOpen) {
      onToggle(null, !isOpen);
      onEnter();
    }
  };

  render() {
    const {
      className,
      toggleText,
      isOpen,
      isFocused,
      isActive,
      isHovered,
      onToggle,
      onEnter,
      parentRef,
      id,
      ...props
    } = this.props;
    return (
      <button
        {...props}
        id={id}
        ref={this.toggle}
        className={css(
          styles.contextSelectorToggle,
          isFocused && styles.modifiers.focus,
          isHovered && styles.modifiers.hover,
          isActive && styles.modifiers.active,
          className
        )}
        type="button"
        onClick={event => onToggle(event, !isOpen)}
        aria-expanded={isOpen}
        onKeyDown={this.onKeyDown}
      >
        <span className={css(styles.contextSelectorToggleText)}>{toggleText}</span>
        <CaretDownIcon className={css(styles.contextSelectorToggleIcon)} aria-hidden />
      </button>
    );
  }
}
