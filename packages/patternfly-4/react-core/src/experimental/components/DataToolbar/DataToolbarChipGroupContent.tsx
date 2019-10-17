import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/DataToolbar/data-toolbar';
import { css, getModifier } from '@patternfly/react-styles';

import { RefObject } from 'react';
import { DataToolbarItem } from './DataToolbarItem';
import { Button } from '../../../components/Button';
import { DataToolbarGroup } from './DataToolbarGroup';
import { globalBreakpoints } from './DataToolbarUtils';

export interface DataToolbarChipGroupContentProps extends React.HTMLProps<HTMLDivElement> {
  /** Classes applied to root element of the data toolbar content row */
  className?: string;
  /** Chip group content reference for passing to data toolbar children */
  chipGroupContentRef: RefObject<HTMLDivElement>;
  /** optional callback for clearing all filters in the toolbar */
  clearAllFilters?: () => void;
  /** Flag indicating that the clear all filters button should be visible */
  showClearFiltersButton: boolean;
  /** Text to display in the clear all filters button */
  clearFiltersButtonText?: string;
  /** Total number of filters currently being applied across all DataToolbarFilter components */
  numberOfFilters: number;
  /** The breakpoint at which the listed filters in chip groups are collapsed down to a summary */
  collapseListedFiltersBreakpoint?: 'md' | 'lg' | 'xl' | '2xl';
}

export class DataToolbarChipGroupContent extends React.Component<DataToolbarChipGroupContentProps> {
  static defaultProps = {
    clearFiltersButtonText: 'Clear all filters',
    collapseListedFiltersBreakpoint: 'lg'
  };

  render() {
    const {
      className,
      chipGroupContentRef,
      clearAllFilters,
      showClearFiltersButton,
      clearFiltersButtonText,
      collapseListedFiltersBreakpoint,
      numberOfFilters,
      ...props
    } = this.props;

    const clearChipGroups = () => {
      clearAllFilters();
    };

    const collapseListedFilters = typeof window !== 'undefined' ?
      window.innerWidth < globalBreakpoints(collapseListedFiltersBreakpoint) :
      false;

    return (
      <div
        className={css(
          styles.dataToolbarContent,
          getModifier(styles, 'chip-container'),
          getModifier(styles, 'hidden'),
          className
        )}
        hidden
        ref={chipGroupContentRef}
        {...props}
      >
        <DataToolbarGroup
          variant="filter-group"
          className={css(collapseListedFilters && getModifier(styles, 'hidden'))}
          {...(collapseListedFilters && { hidden: true })}
          {...(collapseListedFilters && { 'aria-hidden': true })}
        />
        {
          collapseListedFilters && numberOfFilters > 0 && (
            <DataToolbarGroup className={css(getModifier(styles, 'toggle-group-summary'))}>
              <DataToolbarItem>{numberOfFilters} filters applied</DataToolbarItem>
            </DataToolbarGroup>
          )
        }
        {
          showClearFiltersButton &&
          <DataToolbarItem className={css(getModifier(styles, 'clear'))}>
            <Button variant="link" onClick={clearChipGroups}>
              {clearFiltersButtonText}
            </Button>
          </DataToolbarItem>
        }
      </div>
    );
  }
}
