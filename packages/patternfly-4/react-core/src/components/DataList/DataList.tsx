import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/DataList/data-list';

export interface DataListProps extends React.HTMLProps<HTMLUListElement> {
  /* Content rendered inside the DataList list */
  children?: React.ReactNode;
  /* Additional classes added to the DataList list */
  className?: string;
  /* Adds accessible text to the DataList list */
  'aria-label': string;
}

export const DataList: React.FunctionComponent<DataListProps> = ({
  children = null,
  className = '',
  'aria-label': ariaLabel,
  ...props
}: DataListProps) => (
  <ul className={css(styles.dataList, className)} aria-label={ariaLabel} {...props}>
    {children}
  </ul>
);
