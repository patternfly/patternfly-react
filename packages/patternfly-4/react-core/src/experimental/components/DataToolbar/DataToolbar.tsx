import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/DataToolbar/data-toolbar';
import { css } from '@patternfly/react-styles';

export interface DataToolbarProps extends React.HTMLProps<HTMLDivElement> {
  /** TODO */
  className?: string;
  /** TODO */
  children: React.ReactNode;
}

export const DataToolbar: React.FunctionComponent<DataToolbarProps> = ({
  className,
  children,
  ...props
}: DataToolbarProps) => {
  return (
    <div className={css(styles.dataToolbar, className,)} {...props}>
      {children}
    </div>
  );
};
