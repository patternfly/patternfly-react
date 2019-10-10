import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/DataToolbar/data-toolbar';
import { css } from '@patternfly/react-styles';

import { DataToolbarBreakpointMod, DataToolbarContentContext } from './DataToolbarUtils';
import { formatBreakpointMods } from '../../../helpers/util';
import { DataToolbarExpandableContent } from './DataToolbarExpandableContent';

export interface DataToolbarContentProps extends React.HTMLProps<HTMLDivElement> {
  /** Classes applied to root element of the Data toolbar content row */
  className?: string;
  /** An array of objects representing the various modifiers to apply to the content row at various breakpoints */
  breakpointMods?: DataToolbarBreakpointMod[];
  /** Content to be rendered as children of the content row */
  children?: React.ReactNode;
  /** Flag indicating if a Data toolbar toggle group's expandable content is expanded */
  isExpanded?: boolean;
  /** A callback for setting the isExpanded flag */
  toggleIsExpanded?: () => void;
  /** Optional callback for clearing all filters in the toolbar */
  clearAllFilters?: () => void;
  /** Flag indicating that the Clear all filters button should be visible */
  showClearFiltersButton?: boolean;
}

export interface DataToolbarContentState {
  /** Flag indicating the if the expandable content's expanded state is consumer managed or not */
  isConsumerManagedToggleGroup: boolean;
  /** Flag indicating if the component managed state has expanded content or not */
  componentManagedIsExpanded: boolean;
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
      isConsumerManagedToggleGroup: props.isExpanded || !!props.toggleIsExpanded,
      componentManagedIsExpanded: false
    };
  }

  toggleIsExpanded = () => {
    this.setState(prevState => ({
      componentManagedIsExpanded: !prevState.componentManagedIsExpanded
    }));
  };

  closeExpandableContent = () => {
    this.setState(() => ({
      componentManagedIsExpanded: false
    }));
  };

  componentDidMount() {
    const { isConsumerManagedToggleGroup } = this.state;

    if (!isConsumerManagedToggleGroup) {
      window.addEventListener('resize', this.closeExpandableContent);
    }
  }

  componentWillUnmount() {
    const { isConsumerManagedToggleGroup } = this.state;
    if (isConsumerManagedToggleGroup) {
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
    const { isConsumerManagedToggleGroup, componentManagedIsExpanded } = this.state;

    const expandableContentId = `${id}-expandable-content`;

    return (
      <div
        className={css(styles.dataToolbarContent, formatBreakpointMods(breakpointMods, styles), className)}
        {...props}
      >
        <DataToolbarContentContext.Provider
          value={{
            isExpanded: isConsumerManagedToggleGroup ? isExpanded : componentManagedIsExpanded,
            toggleIsExpanded: isConsumerManagedToggleGroup ? toggleIsExpanded : this.toggleIsExpanded,
            expandableContentRef: this.expandableContentRef,
            expandableContentId
          }}
        >
          {children}
          <DataToolbarExpandableContent
            id={expandableContentId}
            isExpanded={isConsumerManagedToggleGroup ? isExpanded : componentManagedIsExpanded}
            expandableContentRef={this.expandableContentRef}
            clearAllFilters={clearAllFilters}
            showClearFiltersButton={showClearFiltersButton}
          />
        </DataToolbarContentContext.Provider>
      </div>
    );
  }
}
