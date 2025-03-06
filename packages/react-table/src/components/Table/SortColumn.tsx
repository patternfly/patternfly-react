import { useState } from 'react';
import LongArrowAltUpIcon from '@patternfly/react-icons/dist/esm/icons/long-arrow-alt-up-icon';
import LongArrowAltDownIcon from '@patternfly/react-icons/dist/esm/icons/long-arrow-alt-down-icon';
import ArrowsAltVIcon from '@patternfly/react-icons/dist/esm/icons/arrows-alt-v-icon';
import StarIcon from '@patternfly/react-icons/dist/esm/icons/star-icon';
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
    SortedByIcon = sortDirection === SortByDirection.asc ? LongArrowAltUpIcon : LongArrowAltDownIcon;
  } else {
    SortedByIcon = ArrowsAltVIcon;
  }

  if (favoriteButtonProps) {
    return (
      <ActionList isIconList>
        <ActionListItem>
          <Button variant="plain" icon={<StarIcon />} {...favoriteButtonProps} />
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
