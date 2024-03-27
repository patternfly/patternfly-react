import { HTMLProps, ReactNode, FunctionComponent } from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/DataList/data-list';

export interface DataListControlProps extends HTMLProps<HTMLDivElement> {
  /** Children of the data list control */
  children?: ReactNode;
  /** Additional classes added to the DataList item control */
  className?: string;
}

export const DataListControl: FunctionComponent<DataListControlProps> = ({
  children,
  className = '',
  ...props
}: DataListControlProps) => (
  <div className={css(styles.dataListItemControl, className)} {...props}>
    {children}
  </div>
);
DataListControl.displayName = 'DataListControl';
