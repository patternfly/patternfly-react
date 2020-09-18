import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/DataList/data-list';
import { WrapModifier } from './DataList';

export interface DataListItemRowProps extends Omit<React.HTMLProps<HTMLDivElement>, 'children'> {
  children: React.ReactNode;
  className?: string;
  rowid?: string;
  wrapModifier?: WrapModifier | 'nowrap' | 'truncate' | 'breakWord';
}

export const DataListItemRow: React.FunctionComponent<DataListItemRowProps> = ({
  children,
  className = '',
  rowid = '',
  wrapModifier = null,
  ...props
}: DataListItemRowProps) => (
  <div className={css(styles.dataListItemRow, className, wrapModifier && styles.modifiers[wrapModifier])} {...props}>
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
DataListItemRow.displayName = 'DataListItemRow';
