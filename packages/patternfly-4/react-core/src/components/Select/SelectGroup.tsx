import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/Select/select';
import { css } from '@patternfly/react-styles';

export interface SelectGroupProps {
  /** Checkboxes within group */
  children?: React.ReactNode[] | React.ReactNode;
  /** Additional classes added to the CheckboxSelectGroup control */
  className?: string;
  /** Group label */
  label?: string;
  /** ID for title label */
  titleId?: string;
}

export const SelectGroup: React.FunctionComponent<SelectGroupProps> = ({
  children = [] as React.ReactNode[],
  className = '',
  label = '',
  titleId = '',
  ...props
}) => (
  <React.Fragment>
    <div {...props} className={css(styles.selectMenuGroup, className)}>
      <div className={css(styles.selectMenuGroupTitle)} id={titleId} aria-hidden>
        {label}
      </div>
      {children}
    </div>
  </React.Fragment>
);

export default SelectGroup;
