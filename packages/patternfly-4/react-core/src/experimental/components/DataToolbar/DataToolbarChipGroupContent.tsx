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
  /** Flag indicating that the Clear all filters button should be visible */
  showClearFiltersButton: boolean;
  /** Flag indicating if a Data toolbar toggle group's expandable content is expanded */
  expandableContentIsExpanded: boolean;
}

export class DataToolbarChipGroupContent extends React.Component<DataToolbarChipGroupContentProps> {
  render() {
    const {
      className,
      chipGroupContentRef,
      clearAllFilters,
      showClearFiltersButton,
      expandableContentIsExpanded,
      ...props
    } = this.props;

    const clearChipGroups = () => {
      clearAllFilters();
    };

    return (
      <div
        className={css(styles.dataToolbarContent, getModifier(styles, 'hidden'), className)}
        hidden
        ref={chipGroupContentRef}
        {...props}
      >
        <DataToolbarGroup variant="filter-group" />
        {showClearFiltersButton && !expandableContentIsExpanded && (
          <DataToolbarItem className={css(getModifier(styles, 'clear'))}>
            <Button variant="link" onClick={clearChipGroups}>
              Clear all filters
            </Button>
          </DataToolbarItem>
        )}
      </div>
    );
  }
}
