import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/DataToolbar/data-toolbar';
import { css } from '@patternfly/react-styles';
import { DataToolbarExpandableContent } from './DataToolbarExpandableContent';
import { DataToolbarContext } from './DataToolbarUtils';
import { DataToolbarChipGroupContent } from './DataToolbarChipGroupContent';

export interface DataToolbarProps extends React.HTMLProps<HTMLDivElement> {
  /** Classes applied to root element of the Data toolbar */
  className?: string;
  /** Content to be rendered as rows in the Data toolbar */
  children?: React.ReactNode;
  /** Flag indicating if a Data toolbar toggle group's expandable content is expanded */
  isExpanded?: boolean;
  /** A callback for setting the isExpanded flag */
  toggleIsExpanded?: () => void;
  /** optional callback for clearing all filters in the toolbar */
  clearAllFilters?: () => void;
  /** Id of the Data toolbar */
  id: string;
}

export interface DataToolbarState {
  /** Flag indicating the if the expandable content's expanded state is consumer managed or not */
  isConsumerManagedToggleGroup: boolean;
  /** Flag indicating if the component managed state has expanded content or not */
  componentManagedIsExpanded: boolean;
  /** Flag indicating that the Clear all filters button should be visible */
  showClearFiltersButton: boolean;
}

export class DataToolbar extends React.Component<DataToolbarProps, DataToolbarState> {
  private expandableContentRef = React.createRef<HTMLDivElement>();
  private chipGroupContentRef = React.createRef<HTMLDivElement>();

  static defaultProps = {
    isExpanded: false
  };

  constructor(props: DataToolbarProps) {
    super(props);

    this.state = {
      isConsumerManagedToggleGroup: props.isExpanded || !!props.toggleIsExpanded,
      componentManagedIsExpanded: false,
      showClearFiltersButton: false,
    };
  }

  toggleIsExpanded = () => {
    this.setState((prevState) => ({
      componentManagedIsExpanded: !prevState.componentManagedIsExpanded
    }));
  }

  closeExpandableContent = () => {
    this.setState(() => ({
      componentManagedIsExpanded: false
    }));
  }

  updateShowClearFiltersButton = (showClearFiltersButton: boolean) => {
    if (showClearFiltersButton !== this.state.showClearFiltersButton) {
      this.setState(() => ({ showClearFiltersButton }));
    }
  }

  componentDidMount() {
    const { isConsumerManagedToggleGroup } = this.state;

    if ( !isConsumerManagedToggleGroup ) {
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

    const { className, children, isExpanded, toggleIsExpanded, id, clearAllFilters, ...props} = this.props;
    const { isConsumerManagedToggleGroup, componentManagedIsExpanded, showClearFiltersButton } = this.state;

    const expandableContentId = `${id}-expandable-content`;

    return (
      <div className={css(styles.dataToolbar, className)} id={id} {...props}>
        <DataToolbarContext.Provider
          value={
            {
              isExpanded: isConsumerManagedToggleGroup ? isExpanded : componentManagedIsExpanded,
              toggleIsExpanded: isConsumerManagedToggleGroup ? toggleIsExpanded : this.toggleIsExpanded,
              expandableContentRef: this.expandableContentRef,
              expandableContentId,
              chipGroupContentRef: this.chipGroupContentRef,
              updateShowClearFiltersButton: this.updateShowClearFiltersButton,
            }
          }
        >
          {children}
          <DataToolbarChipGroupContent
            chipGroupContentRef={this.chipGroupContentRef}
            expandableContentIsExpanded={isConsumerManagedToggleGroup ? isExpanded : componentManagedIsExpanded}
            clearAllFilters={clearAllFilters}
            showClearFiltersButton={showClearFiltersButton}
          />
          <DataToolbarExpandableContent
            id={expandableContentId}
            isExpanded={isConsumerManagedToggleGroup ? isExpanded : componentManagedIsExpanded}
            expandableContentRef={this.expandableContentRef}
            clearAllFilters={clearAllFilters}
            showClearFiltersButton={showClearFiltersButton}
          />
        </DataToolbarContext.Provider>
      </div>
    );
  }

}
