import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Select/select';

export interface TimeOptionProps extends Omit<React.HTMLProps<HTMLLIElement>, 'onSelect' | 'value'> {
  /** Additional classes added to the time option. */
  className?: string;
  /** Optional alternate display for the option */
  children?: React.ReactNode;
  /** Internal index of the option */
  index?: number;
  /** The value for the option */
  value: string;
  /** Flag forcing the focused state */
  isFocused?: boolean;
  /** Optional callback for click event */
  onSelect?: (value: string, event: React.MouseEvent) => void;
  /** ID of the item. Required for tracking favorites */
  id?: string;
}

export const TimeOption: React.FunctionComponent<TimeOptionProps> = ({
  className = '',
  value = '',
  onSelect = () => {},
  children,
  id,
  isFocused,
  ...props
}: TimeOptionProps) => (
  <li
    role="presentation"
    className={css(styles.selectMenuWrapper, isFocused && styles.modifiers.focus, className)}
    {...props}
  >
    <button
      className={css(styles.selectMenuItem)}
      onClick={event => {
        onSelect(value, event);
      }}
      role="option"
      type="button"
      id={id}
    >
      {children || value.toString()}
    </button>
  </li>
);
TimeOption.displayName = 'TimeOption';
