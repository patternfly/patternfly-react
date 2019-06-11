import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/Button/button';
import { css } from '@patternfly/react-styles';
import { KEY_CODES } from '../../helpers/constants';

export interface ApplicationLauncherToggleProps extends React.HTMLProps<HTMLButtonElement> {
   /** HTML ID of toggle */
   id: string; 
   /** Type to put on the button */
   type?: string; 
   /** Anything which can be rendered as toggle */
   children?: React.ReactNode; 
   /** Classes applied to root element of toggle */
   className?: string; 
   /** Flag to indicate if menu is opened */
   isOpen?: boolean; 
   /** Callback called when toggle is clicked */
   onToggle?: (value: boolean) => void; 
   /** Callback for toggle open on keyboard entry */
   onEnter?: () => void; 
   /** Element which wraps toggle */
   parentRef?: any; 
   /** Forces focus state */
   isFocused?: boolean; 
   /** Forces hover state */
   isHovered?: boolean; 
   /** Forces active state */
   isActive?: boolean; 
   /** Display the toggle with no border or background */
   isPlain?: boolean; 
}

export class ApplicationLauncherToggle extends React.Component<ApplicationLauncherToggleProps> {

  static defaultProps = {
    children: null as React.ReactNode,
    type: '',
    className: '',
    isOpen: false,
    parentRef: null as any,
    isFocused: false,
    isHovered: false,
    isActive: false,
    isPlain: false,
    onToggle: Function.prototype,
    onEnter: Function.prototype
  };

  toggle = React.createRef<HTMLButtonElement>();

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

  onDocClick = (event: TouchEvent | MouseEvent) => {
    if (this.props.isOpen && this.props.parentRef.current && !this.props.parentRef.current.contains(event.target)) {
      this.props.onToggle(false);
      this.toggle.current.focus();
      }
  };

  onEscPress = (event: KeyboardEvent) => {
    const { parentRef } = this.props;
    const keyCode = event.keyCode || event.which;
    if (
      this.props.isOpen &&
      (keyCode === KEY_CODES.ESCAPE_KEY || event.keyCode === KEY_CODES.TAB) &&
      parentRef &&
      parentRef.contains(event.target)
    ) {
      this.props.onToggle(false);
      this.toggle.current.focus();
    }
  };

  onKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    if (event.keyCode === KEY_CODES.TAB && !this.props.isOpen) {return};
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
        ref={this.toggle}
        className={css(
          styles.button,
          isFocused && styles.modifiers.focus,
          isHovered && styles.modifiers.hover,
          isActive && styles.modifiers.active,
          isPlain && styles.modifiers.plain,
          className
        )}
        type={(type || 'button') as 'button' | 'submit'}
        onClick={_event => onToggle && onToggle(!isOpen)}
        aria-expanded={isOpen}
        onKeyDown={this.onKeyDown}
      >
        {children}
      </button>
    );
  }
}