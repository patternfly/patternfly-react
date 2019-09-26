import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/DataToolbar/data-toolbar';
import { css, getModifier } from '@patternfly/react-styles';

import { RefObject } from 'react';
import { DataToolbarItem } from './DataToolbarItem';
import { Button } from '../../../components/Button';
import { DataToolbarGroup } from './DataToolbarGroup';

export interface DataToolbarExpandableContentProps extends React.HTMLProps<HTMLDivElement> {
  /** Classes added to the root element of the Data toolbar expandable content */
  className?: string;
  /** Flag indicating the expandable content is expanded */
  isExpanded?: boolean;
  /** Expandable content reference for passing to Data toolbar children */
  expandableContentRef?: RefObject<HTMLDivElement>;
  /** optional callback for clearing all filters in the toolbar */
  clearAllFilters?: () => void;
  /** Flag indicating that the Clear all filters button should be visible */
  showClearFiltersButton: boolean;
}

export class DataToolbarExpandableContent extends React.Component<DataToolbarExpandableContentProps> {

  static defaultProps = {
    isExpanded: false
  };

  render() {
    const {
      className,
      expandableContentRef,
      isExpanded,
      clearAllFilters,
      showClearFiltersButton,
      ...props
    } = this.props;

    const clearChipGroups = () => {
      clearAllFilters();
    };

    return (
      <div
        className={css(
          styles.dataToolbarExpandableContent,
          isExpanded && getModifier(styles, 'expanded'),
          className)}
        ref={expandableContentRef}
        {...props}
      >
        <DataToolbarGroup />
        {showClearFiltersButton &&
          <DataToolbarItem className={css(getModifier(styles, 'clear'))}>
            <Button variant="link" onClick={clearChipGroups}>Clear all filters</Button>
          </DataToolbarItem>
        }
      </div>
    );
}
}
