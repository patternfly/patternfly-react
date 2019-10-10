import * as React from 'react';
import { sum, values } from 'lodash';
import styles from '@patternfly/react-styles/css/components/DataToolbar/data-toolbar';
import { css } from '@patternfly/react-styles';
import { DataToolbarContext } from './DataToolbarUtils';
import { DataToolbarChipGroupContent } from './DataToolbarChipGroupContent';

export interface DataToolbarProps extends React.HTMLProps<HTMLDivElement> {
  /** Optional callback for clearing all filters in the toolbar */
  clearAllFilters?: () => void;
  /** The breakpoint at which the listed fitlers in chip groups are collapsed down to a summary */
  collapseListedFiltersBreakpoint?: 'md' | 'lg' | 'xl' | '2xl';
  /** Classes applied to root element of the Data toolbar */
  className?: string;
  /** Content to be rendered as rows in the Data toolbar */
  children?: React.ReactNode;
  /** Id of the Data toolbar */
  id: string;
}

interface FilterInfo {
  [key: string]: number;
}

export interface DataToolbarState {
  /** Object managing information about how many chips are in each chip group */
  filterInfo: FilterInfo;
}

export class DataToolbar extends React.Component<DataToolbarProps, DataToolbarState> {
  private chipGroupContentRef = React.createRef<HTMLDivElement>();

  constructor(props: DataToolbarProps) {
    super(props);

    this.state = {
      filterInfo: {}
    };
  }

  updateNumberFilters = (categoryName: string, numberOfFilters: number) => {
    const filterInfoToUpdate: FilterInfo = { ...this.state.filterInfo };

    if (!filterInfoToUpdate.hasOwnProperty(categoryName) || filterInfoToUpdate[categoryName] !== numberOfFilters) {
      filterInfoToUpdate[categoryName] = numberOfFilters;
      this.setState({filterInfo: filterInfoToUpdate});
    }
  };

  getNumberOfFilters = () => {
    return sum(values(this.state.filterInfo));
  };

  render() {
    const { clearAllFilters, collapseListedFiltersBreakpoint, className, children, id, ...props } = this.props;

    const numberOfFilters = this.getNumberOfFilters();
    const showClearFiltersButton = numberOfFilters > 0;

    return (
      <div className={css(styles.dataToolbar, className)} id={id} {...props}>
        <DataToolbarContext.Provider
          value={{
            chipGroupContentRef: this.chipGroupContentRef,
            updateNumberFilters: this.updateNumberFilters
          }}
        >
          {React.Children.map(children, (child: any) =>
            React.cloneElement(child, {
              clearAllFilters,
              showClearFiltersButton
            })
          )}
          <DataToolbarChipGroupContent
            chipGroupContentRef={this.chipGroupContentRef}
            clearAllFilters={clearAllFilters}
            showClearFiltersButton={showClearFiltersButton}
            numberOfFilters={numberOfFilters}
            collapseListedFiltersBreakpoint={collapseListedFiltersBreakpoint}
          />
        </DataToolbarContext.Provider>
      </div>
    );
  }
}
