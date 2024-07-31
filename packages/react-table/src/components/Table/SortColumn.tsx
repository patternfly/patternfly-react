import * as React from 'react';
import LongArrowAltUpIcon from '@patternfly/react-icons/dist/esm/icons/long-arrow-alt-up-icon';
import LongArrowAltDownIcon from '@patternfly/react-icons/dist/esm/icons/long-arrow-alt-down-icon';
import ArrowsAltVIcon from '@patternfly/react-icons/dist/esm/icons/arrows-alt-v-icon';
import StarIcon from '@patternfly/react-icons/dist/esm/icons/star-icon';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Table/table';
import { TableText } from './TableText';
import { OnFavorite } from './TableTypes';
import { TooltipProps } from '@patternfly/react-core/dist/esm/components/Tooltip';
import { ActionList, ActionListItem, Button } from '@patternfly/react-core';

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
  onFavorite?: OnFavorite;
  favorited?: boolean;
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
  onFavorite,
  favorited,
  ...props
}: SortColumnProps) => {
  let SortedByIcon;
  const [focused, setFocused] = React.useState(false);
  if (isSortedBy) {
    SortedByIcon = sortDirection === SortByDirection.asc ? LongArrowAltUpIcon : LongArrowAltDownIcon;
  } else {
    SortedByIcon = ArrowsAltVIcon;
  }

  if (onFavorite) {
    return (
      <ActionList isIconList>
        <ActionListItem>
          <Button
            variant="plain"
            icon={<StarIcon />}
            aria-label={favorited ? 'Unfavorite all' : 'Favorite all'}
            onClick={(event) => onFavorite(event, !favorited)}
          />
        </ActionListItem>
        <ActionListItem>
          <Button
            variant="plain"
            icon={
              <span className={css(styles.tableSortIndicator)}>
                <SortedByIcon />
              </span>
            }
            aria-label="Sort favorites"
            onClick={(event) => onSort && onSort(event)}
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
