import * as React from 'react';
import styles from '@patternfly/patternfly/components/Expandable/expandable.css';
import { css } from '@patternfly/react-styles';
import { AngleRightIcon } from '@patternfly/react-icons';

const defaultProps = {
  className: '',
  isExpanded: false,
  toggleText: '',
  onToggle: () => {},
  isFocused: false,
  isHovered: false,
  isActive: false
};

export interface ExpandableProps {
  /** Content rendered inside the Expandable Component */
  children: any;
  /** Additional classes added to the Expandable Component */
  className?: string;
  /** Flag to indicate if the content is expanded */
  isExpanded?: boolean;
  /** Text that appears in the  toggle */
  toggleText?: string;
  /** Callback function to toggle the expandable content */
  onToggle?(): void;
  /** Forces focus state */
  isFocused?: boolean;
  /** Forces hover state */
  isHovered?: boolean;
  /** Forces active state */
  isActive?: boolean;
}

export const Expandable: React.SFC<ExpandableProps> = ({
  className,
  children,
  isExpanded,
  toggleText,
  onToggle,
  isFocused,
  isActive,
  isHovered,
  ...props
}) => (
  <div {...props} className={css(styles.expandable, isExpanded && styles.modifiers.expanded, className)}>
    <button
      className={css(
        styles.expandableToggle,
        isFocused && styles.modifiers.focus,
        isHovered && styles.modifiers.hover,
        isActive && styles.modifiers.active
      )}
      aria-expanded={isExpanded}
      onClick={onToggle}
    >
      <AngleRightIcon className={css(styles.expandableToggleIcon)} aria-hidden />
      <span>{toggleText}</span>
    </button>
    <div className={css(styles.expandableContent)} hidden={!isExpanded}>
      {children}
    </div>
  </div>
);

Expandable.defaultProps = defaultProps;

export default Expandable;
