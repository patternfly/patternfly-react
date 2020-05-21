import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/Toolbar/toolbar';
import { GenerateId } from '../../helpers/GenerateId/GenerateId';
import { css } from '@patternfly/react-styles';
import { ToolbarContext } from './ToolbarUtils';
import { ToolbarChipGroupContent } from './ToolbarChipGroupContent';

export interface ToolbarProps extends React.HTMLProps<HTMLDivElement> {
  /** Optional callback for clearing all filters in the toolbar */
  clearAllFilters?: () => void;
  /** Text to display in the clear all filters button */
  clearFiltersButtonText?: string;
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
  id?: string;
}

export interface ToolbarState {
  /** Flag used if the user has opted NOT to manage the 'isExpanded' state of the toggle group.
   *  Indicates whether or not the toggle group is expanded. */
  isManagedToggleExpanded: boolean;
  /** Object managing information about how many chips are in each chip group */
  filterInfo: FilterInfo;
}

interface FilterInfo {
  [key: string]: number;
}

export class Toolbar extends React.Component<ToolbarProps, ToolbarState> {
  chipGroupContentRef = React.createRef<HTMLDivElement>();
  staticFilterInfo = {};
  state = {
    isManagedToggleExpanded: false,
    filterInfo: {}
  };

  isToggleManaged = () => !(this.props.isExpanded || !!this.props.toggleIsExpanded);

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
    const filterInfoToUpdate: FilterInfo = { ...this.staticFilterInfo };
    if (!filterInfoToUpdate.hasOwnProperty(categoryName) || filterInfoToUpdate[categoryName] !== numberOfFilters) {
      filterInfoToUpdate[categoryName] = numberOfFilters;
      this.staticFilterInfo = filterInfoToUpdate;
      this.setState({ filterInfo: filterInfoToUpdate });
    }
  };

  getNumberOfFilters = () =>
    Object.values(this.state.filterInfo).reduce((acc: any, cur: any) => acc + cur, 0) as number;

  renderToolbar = (randomId: string) => {
    const {
      clearAllFilters,
      clearFiltersButtonText,
      collapseListedFiltersBreakpoint,
      isExpanded: isExpandedProp,
      toggleIsExpanded,
      className,
      children,
      ...props
    } = this.props;

    const { isManagedToggleExpanded } = this.state;

    const isToggleManaged = this.isToggleManaged();
    const isExpanded = isToggleManaged ? isManagedToggleExpanded : isExpandedProp;
    const numberOfFilters = this.getNumberOfFilters();
    const showClearFiltersButton = numberOfFilters > 0;

    return (
      <div className={css(styles.toolbar, className)} id={randomId} {...props}>
        <ToolbarContext.Provider
          value={{
            isExpanded,
            toggleIsExpanded: isToggleManaged ? this.toggleIsExpanded : toggleIsExpanded,
            chipGroupContentRef: this.chipGroupContentRef,
            updateNumberFilters: this.updateNumberFilters,
            numberOfFilters,
            clearAllFilters,
            clearFiltersButtonText,
            showClearFiltersButton,
            toolbarId: randomId
          }}
        >
          {children}
          <ToolbarChipGroupContent
            isExpanded={isExpanded}
            chipGroupContentRef={this.chipGroupContentRef}
            clearAllFilters={clearAllFilters}
            showClearFiltersButton={showClearFiltersButton}
            clearFiltersButtonText={clearFiltersButtonText}
            numberOfFilters={numberOfFilters}
            collapseListedFiltersBreakpoint={collapseListedFiltersBreakpoint}
          />
        </ToolbarContext.Provider>
      </div>
    );
  };

  render() {
    return this.props.id ? (
      this.renderToolbar(this.props.id)
    ) : (
      <GenerateId>{randomId => this.renderToolbar(randomId)}</GenerateId>
    );
  }
}
