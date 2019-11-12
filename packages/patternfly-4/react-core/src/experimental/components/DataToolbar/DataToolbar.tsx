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
  /** Flag indicating if a data toolbar toggle group's expandable content is expanded */
  isExpanded?: boolean;
  /** A callback for setting the isExpanded flag */
  toggleIsExpanded?: () => void;
  /** Classes applied to root element of the data toolbar */
  className?: string;
  /** Content to be rendered as rows in the data toolbar */
  children?: React.ReactNode;
  /** Id of the data toolbar */
  id: string;
}

export interface DataToolbarState {
  /** Flag used if the user has opted NOT to manage the 'isExpanded' state of the toggle group.
   *  Indicates whether or not the toggle group is expanded. */
  isManagedToggleExpanded: boolean;
  /** Object managing information about how many chips are in each chip group */
  filterInfo: FilterInfo;
}

interface FilterInfo {
  [key: string]: number;
}

export class DataToolbar extends React.Component<DataToolbarProps, DataToolbarState> {
  private chipGroupContentRef = React.createRef<HTMLDivElement>();

  constructor(props: DataToolbarProps) {
    super(props);

    this.state = {
      isManagedToggleExpanded: false,
      filterInfo: {}
    };
  }

  isToggleManaged = () => {
    return !(this.props.isExpanded || !!this.props.toggleIsExpanded);
  };

  toggleIsExpanded = () => {
    this.setState(prevState => ({
      isManagedToggleExpanded: !prevState.isManagedToggleExpanded
    }));
  };

  closeExpandableContent = () => {
    this.setState(() => ({
      isManagedToggleExpanded: false
    }));
  };

  componentDidMount() {
    if (this.isToggleManaged()) {
      window.addEventListener('resize', this.closeExpandableContent);
    }
  }

  componentWillUnmount() {
    if (this.isToggleManaged()) {
      window.removeEventListener('resize', this.closeExpandableContent);
    }
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
    const {
      clearAllFilters,
      collapseListedFiltersBreakpoint,
      isExpanded,
      toggleIsExpanded,
      className,
      children,
      id,
      ...props
    } = this.props;

    const { isManagedToggleExpanded } = this.state;

    const isToggleManaged = this.isToggleManaged();
    const numberOfFilters = this.getNumberOfFilters();
    const showClearFiltersButton = numberOfFilters > 0;

    return (
      <div className={css(styles.dataToolbar, className)} id={id} {...props}>
        <DataToolbarContext.Provider
          value={{
            isExpanded: this.isToggleManaged() ? isManagedToggleExpanded : isExpanded,
            toggleIsExpanded: isToggleManaged ? this.toggleIsExpanded : toggleIsExpanded,
            chipGroupContentRef: this.chipGroupContentRef,
            updateNumberFilters: this.updateNumberFilters
          }}
        >
          {React.Children.map(children, (child: any) =>
            React.cloneElement(child, {
              clearAllFilters,
              showClearFiltersButton,
              isExpanded: isToggleManaged ? isManagedToggleExpanded : isExpanded,
              toolbarId: id
            })
          )}
          <DataToolbarChipGroupContent
            isExpanded={isToggleManaged ? isManagedToggleExpanded : isExpanded}
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
