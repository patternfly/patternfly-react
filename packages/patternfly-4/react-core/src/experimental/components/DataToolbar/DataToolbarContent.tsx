import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/DataToolbar/data-toolbar';
import { css } from '@patternfly/react-styles';

import { DataToolbarBreakpointMod, DataToolbarContentContext } from './DataToolbarUtils';
import { formatBreakpointMods } from '../../../helpers/util';
import { DataToolbarExpandableContent } from './DataToolbarExpandableContent';

export interface DataToolbarContentProps extends React.HTMLProps<HTMLDivElement> {
  /** Classes applied to root element of the data toolbar content row */
  className?: string;
  /** An array of objects representing the various modifiers to apply to the content row at various breakpoints */
  breakpointMods?: DataToolbarBreakpointMod[];
  /** Content to be rendered as children of the content row */
  children?: React.ReactNode;
  /** Flag indicating if a data toolbar toggle group's expandable content is expanded */
  isExpanded?: boolean;
  /** A callback for setting the isExpanded flag */
  toggleIsExpanded?: () => void;
  /** Optional callback for clearing all filters in the toolbar */
  clearAllFilters?: () => void;
  /** Flag indicating that the clear all filters button should be visible */
  showClearFiltersButton?: boolean;
}

export interface DataToolbarContentState {
  /** True if the component is managing the expanded state of the toggle group.
   *  False if the user has opted to manage the 'isExpanded' state themself. */
  isToggleManaged: boolean;
  /** Flag used if the user has opted NOT to manage the 'isExpanded' state of the toggle group.
   *  Indicates whether or not the toggle group is expanded. */
  isManagedToggleExpanded: boolean;
}

export class DataToolbarContent extends React.Component<DataToolbarContentProps, DataToolbarContentState> {
  private expandableContentRef = React.createRef<HTMLDivElement>();

  static defaultProps = {
    isExpanded: false,
    breakpointMods: [] as DataToolbarBreakpointMod[],
    showClearFiltersButton: false
  };

  constructor(props: DataToolbarContentProps) {
    super(props);

    this.state = {
      isToggleManaged: !(props.isExpanded || !!props.toggleIsExpanded),
      isManagedToggleExpanded: false
    };
  }

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
    const { isToggleManaged } = this.state;
    if (isToggleManaged) {
      window.addEventListener('resize', this.closeExpandableContent);
    }
  }

  componentWillUnmount() {
    const { isToggleManaged } = this.state;
    if (isToggleManaged) {
      window.removeEventListener('resize', this.closeExpandableContent);
    }
  }

  render() {
    const {
      className,
      children,
      isExpanded,
      toggleIsExpanded,
      id,
      breakpointMods,
      clearAllFilters,
      showClearFiltersButton,
      ...props
    } = this.props;
    const { isToggleManaged, isManagedToggleExpanded } = this.state;

    const expandableContentId = `${id}-expandable-content`;

    return (
      <div
        className={css(styles.dataToolbarContent, formatBreakpointMods(breakpointMods, styles), className)}
        {...props}
      >
        <DataToolbarContentContext.Provider
          value={{
            isExpanded: isToggleManaged ? isManagedToggleExpanded : isExpanded,
            toggleIsExpanded: isToggleManaged ? this.toggleIsExpanded : toggleIsExpanded,
            expandableContentRef: this.expandableContentRef,
            expandableContentId
          }}
        >
          {children}
          <DataToolbarExpandableContent
            id={expandableContentId}
            isExpanded={isToggleManaged ? isManagedToggleExpanded : isExpanded}
            expandableContentRef={this.expandableContentRef}
            clearAllFilters={clearAllFilters}
            showClearFiltersButton={showClearFiltersButton}
          />
        </DataToolbarContentContext.Provider>
      </div>
    );
  }
}
