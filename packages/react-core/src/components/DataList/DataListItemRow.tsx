import { HTMLProps, ReactNode, FunctionComponent, ReactElement, Children, isValidElement, cloneElement } from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/DataList/data-list';
import { DataListWrapModifier } from './DataList';

export interface DataListItemRowProps extends Omit<HTMLProps<HTMLDivElement>, 'children'> {
  /** Content rendered inside the DataListItemRow  */
  children: ReactNode;
  /** Additional classes added to the DataListItemRow */
  className?: string;
  /** Id for the row item */
  rowid?: string;
  /** Determines which wrapping modifier to apply to the DataListItemRow */
  wrapModifier?: DataListWrapModifier | 'nowrap' | 'truncate' | 'breakWord';
}

export const DataListItemRow: FunctionComponent<DataListItemRowProps> = ({
  children,
  className = '',
  rowid = '',
  wrapModifier = null,
  ...props
}: DataListItemRowProps) => (
  <div className={css(styles.dataListItemRow, className, wrapModifier && styles.modifiers[wrapModifier])} {...props}>
    {Children.map(
      children,
      (child) =>
        isValidElement(child) &&
        cloneElement(child as ReactElement<any>, {
          rowid
        })
    )}
  </div>
);
DataListItemRow.displayName = 'DataListItemRow';
