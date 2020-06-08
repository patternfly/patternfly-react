import * as React from 'react';
import LongArrowAltUpIcon from '@patternfly/react-icons/dist/js/icons/long-arrow-alt-up-icon';
import LongArrowAltDownIcon from '@patternfly/react-icons/dist/js/icons/long-arrow-alt-down-icon';
import ArrowsAltVIcon from '@patternfly/react-icons/dist/js/icons/arrows-alt-v-icon';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Table/table';
import { SortByDirection } from './Table';
import { TableText } from './TableText';

export interface SortColumnProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  className?: string;
  isSortedBy?: boolean;
  onSort?: Function;
  sortDirection?: string;
}

export const SortColumn: React.FunctionComponent<SortColumnProps> = ({
  children = null,
  className = '',
  isSortedBy = false,
  onSort = null,
  sortDirection = '',
  type = 'button',
  ...props
}: SortColumnProps) => {
  let SortedByIcon;
  if (isSortedBy) {
    SortedByIcon = sortDirection === SortByDirection.asc ? LongArrowAltUpIcon : LongArrowAltDownIcon;
  } else {
    SortedByIcon = ArrowsAltVIcon;
  }
  return (
    <button
      {...props}
      type={type}
      className={css(className, styles.tableButton)}
      onClick={event => onSort && onSort(event)}
    >
      <div className={css(className, styles.tableButtonContent)}>
        <TableText>{children}</TableText>
        <span className={css(styles.tableSortIndicator)}>
          <SortedByIcon />
        </span>
      </div>
    </button>
  );
};
