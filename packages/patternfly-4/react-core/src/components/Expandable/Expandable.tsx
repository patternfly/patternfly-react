import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/Expandable/expandable';
import { css } from '@patternfly/react-styles';
import { AngleRightIcon } from '@patternfly/react-icons';

export interface ExpandableProps {
  /** Content rendered inside the Expandable Component */
  children: React.ReactNode;
  /** Additional classes added to the Expandable Component */
  className?: string;
  /** Flag to indicate if the content is expanded */
  isExpanded?: boolean;
  /** Text that appears in the  toggle */
  toggleText?: string;
  /** Callback function to toggle the expandable content */
  onToggle?: () => void;
  /** Forces focus state */
  isFocused?: boolean;
  /** Forces hover state */
  isHovered?: boolean;
  /** Forces active state */
  isActive?: boolean;
}

interface ExpandableState {
  isExpanded: boolean;
}

export class Expandable extends React.Component<ExpandableProps, ExpandableState> {
  constructor(props: ExpandableProps) {
    super(props);

    this.state = {
      isExpanded: props.isExpanded
    };
  }

  static defaultProps = {
    className: '',
    toggleText: '',
    onToggle: (): any => undefined,
    isFocused: false,
    isActive: false,
    isHovered: false
  };

  render() {
    const {
      onToggle: onToggleProp,
      isFocused,
      isHovered,
      isActive,
      className,
      toggleText,
      children,
      isExpanded,
      ...props
    } = this.props;
    let onToggle = onToggleProp;
    let propOrStateIsExpanded = this.props.isExpanded;

    // uncontrolled
    if (isExpanded === undefined) {
      propOrStateIsExpanded = this.state.isExpanded;
      onToggle = () => {
        onToggleProp();
        this.setState({ isExpanded: !this.state.isExpanded });
      };
    }

    return (
      <div {...props} className={css(styles.expandable, propOrStateIsExpanded && styles.modifiers.expanded, className)}>
        <button
          className={css(
            styles.expandableToggle,
            isFocused && styles.modifiers.focus,
            isHovered && styles.modifiers.hover,
            isActive && styles.modifiers.active
          )}
          type="button"
          aria-expanded={propOrStateIsExpanded}
          onClick={onToggle}
        >
          <AngleRightIcon className={css(styles.expandableToggleIcon)} aria-hidden />
          <span>{toggleText}</span>
        </button>
        <div className={css(styles.expandableContent)} hidden={!propOrStateIsExpanded}>
          {children}
        </div>
      </div>
    );
  }
}
