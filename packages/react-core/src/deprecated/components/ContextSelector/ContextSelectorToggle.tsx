import * as React from 'react';
import CaretDownIcon from '@patternfly/react-icons/dist/esm/icons/caret-down-icon';
import styles from '@patternfly/react-styles/css/components/ContextSelector/context-selector';
import { css } from '@patternfly/react-styles';
import { KeyTypes } from '../../../helpers/constants';
import { PickOptional } from '../../../helpers/typeUtils';

export interface ContextSelectorToggleProps {
  /** HTML ID of toggle */
  id: string;
  /** Classes applied to root element of toggle */
  className?: string;
  /** Component or string that will be used in the context selector.
   * This prop is placed in a button, and cannot contain any interactive elements
   */
  toggleText?: React.ReactNode;
  /** Flag to indicate if menu is opened */
  isOpen?: boolean;
  /** Callback called when toggle is clicked */
  onToggle?: (event: any, value: boolean) => void;
  /** Callback for toggle open on keyboard entry */
  onEnter?: () => void;
  /** Element which wraps toggle */
  parentRef?: any;
  /** Forces active state */
  isActive?: boolean;
  /** Flag to indicate the toggle has no border or background */
  isPlain?: boolean;
  /** Flag to indicate if toggle is textual toggle */
  isText?: boolean;
}

class ContextSelectorToggle extends React.Component<ContextSelectorToggleProps> {
  static displayName = 'ContextSelectorToggle';
  static defaultProps: PickOptional<ContextSelectorToggleProps> = {
    className: '',
    toggleText: '',
    isOpen: false,
    onEnter: () => undefined as any,
    parentRef: null as any,
    isActive: false,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
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
    if (isOpen && parentRef?.current && !parentRef.current.contains(event.target)) {
      onToggle(null, false);
      this.toggle.current.focus();
    }
  };

  onEscPress = (event: any) => {
    const { isOpen, onToggle } = this.props;
    if (isOpen && event.key === KeyTypes.Escape) {
      onToggle(null, false);
      this.toggle.current.focus();
    }
  };

  onKeyDown = (event: any) => {
    const { isOpen, onToggle, onEnter } = this.props;
    if ((event.key === KeyTypes.Tab && !isOpen) || event.key !== KeyTypes.Enter) {
      return;
    }
    event.preventDefault();
    if ((event.key === KeyTypes.Tab || event.key === KeyTypes.Enter || event.key !== KeyTypes.Space) && isOpen) {
      onToggle(null, !isOpen);
    } else if ((event.key === KeyTypes.Enter || event.key === ' ') && !isOpen) {
      onToggle(null, !isOpen);
      onEnter();
    }
  };

  render() {
    const {
      className,
      toggleText,
      isOpen,
      onToggle,
      id,
      isPlain,
      isText,
      /* eslint-disable @typescript-eslint/no-unused-vars */
      isActive,
      onEnter,
      parentRef,
      /* eslint-enable @typescript-eslint/no-unused-vars */
      ...props
    } = this.props;
    return (
      <button
        {...props}
        id={id}
        ref={this.toggle}
        className={css(
          styles.contextSelectorToggle,
          isActive && styles.modifiers.active,
          isPlain && styles.modifiers.plain,
          isText && styles.modifiers.text,
          className
        )}
        type="button"
        onClick={(event) => onToggle(event, !isOpen)}
        aria-expanded={isOpen}
        onKeyDown={this.onKeyDown}
      >
        <span className={css(styles.contextSelectorToggleText)}>{toggleText}</span>
        <span className={css(styles.contextSelectorToggleIcon)}>
          <CaretDownIcon aria-hidden />
        </span>
      </button>
    );
  }
}

export { ContextSelectorToggle };
