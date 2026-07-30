import { useState } from 'react';
import RhMicronsArrowUpIcon from '@patternfly/react-icons/dist/esm/icons/rh-microns-arrow-up-icon';
import RhMicronsArrowDownIcon from '@patternfly/react-icons/dist/esm/icons/rh-microns-arrow-down-icon';
import RhUiArrowUpDownIcon from '@patternfly/react-icons/dist/esm/icons/rh-ui-arrow-up-down-icon';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Table/table';
import { TableText } from './TableText';
import { ActionList, ActionListItem } from '@patternfly/react-core/dist/esm/components/ActionList';
import { Button } from '@patternfly/react-core/dist/esm/components/Button';
import { TooltipProps } from '@patternfly/react-core/dist/esm/components/Tooltip';
import { FavoriteButtonProps } from './base/types';

export enum SortByDirection {
  asc = 'asc',
  desc = 'desc'
}

export interface SortColumnProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  className?: string;
  isSortedBy?: boolean;
  onSort?: Function;
  sortDirection?: string;
  tooltip?: React.ReactNode;
  tooltipProps?: Omit<TooltipProps, 'content'>;
  tooltipHasDefaultBehavior?: boolean;
  favoriteButtonProps?: FavoriteButtonProps;
}

export const SortColumn: React.FunctionComponent<SortColumnProps> = ({
  children = null,
  className = '',
  isSortedBy = false,
  onSort = null,
  sortDirection = '',
  type = 'button',
  tooltip,
  tooltipProps,
  tooltipHasDefaultBehavior,
  favoriteButtonProps,
  ...props
}: SortColumnProps) => {
  let SortedByIcon;
  const [focused, setFocused] = useState(false);
  if (isSortedBy) {
    SortedByIcon = sortDirection === SortByDirection.asc ? RhMicronsArrowUpIcon : RhMicronsArrowDownIcon;
  } else {
    SortedByIcon = RhUiArrowUpDownIcon;
  }

  if (favoriteButtonProps) {
    const { favorited, ...rest } = favoriteButtonProps;
    return (
      <ActionList isIconList>
        <ActionListItem>
          <Button variant="plain" isFavorite isFavorited={favorited} {...rest} />
        </ActionListItem>
        <ActionListItem>
          <Button
            variant="plain"
            icon={
              <span className={css(styles.tableSortIndicator)}>
                <SortedByIcon />
              </span>
            }
            onClick={(event) => onSort && onSort(event)}
            {...props}
          />
        </ActionListItem>
      </ActionList>
    );
  }

  return (
    <button
      {...props}
      type={type}
      className={css(className, styles.tableButton)}
      onClick={(event) => onSort && onSort(event)}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
    >
      <div className={css(className, styles.tableButtonContent)}>
        <TableText
          tooltip={tooltip}
          tooltipProps={tooltipProps}
          tooltipHasDefaultBehavior={tooltipHasDefaultBehavior}
          focused={focused}
        >
          {children}
        </TableText>
        <span className={css(styles.tableSortIndicator)}>
          <SortedByIcon />
        </span>
      </div>
    </button>
  );
};
SortColumn.displayName = 'SortColumn';
