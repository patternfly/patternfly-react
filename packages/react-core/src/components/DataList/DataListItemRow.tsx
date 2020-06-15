import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/DataList/data-list';

export interface DataListItemRowProps extends Omit<React.HTMLProps<HTMLDivElement>, 'children'> {
  children: React.ReactNode;
  className?: string;
  rowid?: string;
}

/**
 *
 */
export function DataListItemRow({ children, className = '', rowid = '', ...props }: DataListItemRowProps) {
  return (
    <div className={css(styles.dataListItemRow, className)} {...props}>
      {React.Children.map(
        children,
        child =>
          React.isValidElement(child) &&
          React.cloneElement(child as React.ReactElement<any>, {
            rowid
          })
      )}
    </div>
  );
}
