import * as React from 'react';
import { SelectOptionProps } from './SelectOption';
import styles from '@patternfly/react-styles/css/components/Select/select';
import { css } from '@patternfly/react-styles';

export interface SelectGroupProps extends React.HTMLProps<HTMLDivElement> {
  /** Checkboxes within group */
  children?: React.ReactElement<SelectOptionProps>[];
  /** Additional classes added to the CheckboxSelectGroup control */
  className?: string;
  /** Group label */
  label?: string;
  /** ID for title label */
  titleId?: string;
}

export const SelectGroup: React.FunctionComponent<SelectGroupProps> = ({
  children = [],
  className = '',
  label = '',
  titleId = '',
  ...props
}: SelectGroupProps) => (
  <div {...props} className={css(styles.selectMenuGroup, className)}>
    <div className={css(styles.selectMenuGroupTitle)} id={titleId} aria-hidden>
      {label}
    </div>
    {children}
  </div>
);
SelectGroup.displayName = 'SelectGroup';
