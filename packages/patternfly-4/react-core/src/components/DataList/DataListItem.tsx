import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/DataList/data-list';
import { Omit } from '../../helpers/typeUtils';

export interface DataListItemProps extends Omit<React.HTMLProps<HTMLLIElement>, 'children'> {
  /** Flag to show if the expanded content of the DataList item is visible */
  isExpanded?: boolean;
  /** Content rendered inside the DataList item */
  children: React.ReactNode;
  /** Additional classes added to the DataList item should be either <DataListItemRow> or <DataListContent> */
  className?: string;
  /** Adds accessible text to the DataList item */
  'aria-labelledby': string;
}

export interface DataListItemChildProps {
  /** Id for the row */
  rowid: string;
}

export const DataListItem: React.FunctionComponent<DataListItemProps> = ({
  children,
  className = '',
  isExpanded = false,
  'aria-labelledby': ariaLabelledBy,
  ...props
}: DataListItemProps) => (
  <li
    className={css(styles.dataListItem, isExpanded && styles.modifiers.expanded, className)}
    aria-labelledby={ariaLabelledBy}
    {...props}
  >
    {React.Children.map(
      children,
      child =>
        React.isValidElement(child) &&
        React.cloneElement(child as React.ReactElement<any>, {
          rowid: ariaLabelledBy
        })
    )}
  </li>
);
