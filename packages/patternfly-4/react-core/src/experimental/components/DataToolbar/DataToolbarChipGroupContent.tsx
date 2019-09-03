import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/DataToolbar/data-toolbar';
import { css, getModifier } from '@patternfly/react-styles';

import { RefObject } from 'react';
import { DataToolbarItem } from './DataToolbarItem';
import { Button } from '../../../components/Button';
import { DataToolbarGroup } from './DataToolbarGroup';

export interface DataToolbarChipGroupContentProps extends React.HTMLProps<HTMLDivElement> {
  /** Classes applied to root element of the Data toolbar content row */
  className?: string;
  /** Chip group content reference for passing to Data toolbar children */
  chipGroupContentRef: RefObject<HTMLDivElement>;
  /** optional callback for clearing all filters in the toolbar */
  clearAllFilters?: () => void;
}

export const DataToolbarChipGroupContent: React.FunctionComponent<DataToolbarChipGroupContentProps> = ({
  className,
  chipGroupContentRef,
  clearAllFilters,
  ...props
}:DataToolbarChipGroupContentProps) => {

  return (
    <div
      className={css(
        styles.dataToolbarContent,
        className)}
      ref={chipGroupContentRef}
      {...props}
    >
      <DataToolbarGroup variant="filter-group"/>
      {!!clearAllFilters &&
      <DataToolbarItem className={css(getModifier(styles, 'clear'))}>
        <Button variant="link" onClick={clearAllFilters}>Clear all filters</Button>
      </DataToolbarItem>
      }
    </div>
  );
}
