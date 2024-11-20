import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ToolbarItem, ToolbarItemProps } from './ToolbarItem';
import { ToolbarContentContext, ToolbarContext } from './ToolbarUtils';
import { PickOptional } from '../../helpers/typeUtils';
import { Label, LabelGroup } from '../Label';

export interface ToolbarLabelGroup {
  /** A unique key to identify this label group category */
  key: string;
  /** The category name to display for the label group */
  name: string;
}

export interface ToolbarLabel {
  /** A unique key to identify this label */
  key: string;
  /** The ReactNode to display in the label */
  node: React.ReactNode;
}

export interface ToolbarFilterProps extends ToolbarItemProps {
  /** Flag indicating when toolbar toggle group is expanded for non-managed toolbar toggle groups. */
  isExpanded?: boolean;
  /** An array of strings to be displayed as labels in the expandable content */
  labels?: (string | ToolbarLabel)[];
  /** Callback passed by consumer used to close the entire label group */
  deleteLabelGroup?: (category: string | ToolbarLabelGroup) => void;
  /** Callback passed by consumer used to delete a label from the labels[] */
  deleteLabel?: (category: string | ToolbarLabelGroup, label: ToolbarLabel | string) => void;
  /** Customizable "Show Less" text string for the label group */
  labelGroupExpandedText?: string;
  /** Customizeable template string for the label group. Use variable "${remaining}" for the overflow label count. */
  labelGroupCollapsedText?: string;
  /** Content to be rendered inside the data toolbar item associated with the label group */
  children: React.ReactNode;
  /** Unique category name to be used as a label for the label group */
  categoryName: string | ToolbarLabelGroup;
  /** Flag to show the toolbar item */
  showToolbarItem?: boolean;
  /** Reference to a label container created with a custom expandable content group, for non-managed multiple toolbar toggle groups. */
  expandableLabelContainerRef?: React.RefObject<HTMLDivElement>;
}

interface ToolbarFilterState {
  isMounted: boolean;
}

class ToolbarFilter extends React.Component<ToolbarFilterProps, ToolbarFilterState> {
  static displayName = 'ToolbarFilter';
  static contextType = ToolbarContext;
  context!: React.ContextType<typeof ToolbarContext>;
  static defaultProps: PickOptional<ToolbarFilterProps> = {
    labels: [] as (string | ToolbarLabel)[],
    showToolbarItem: true
  };

  constructor(props: ToolbarFilterProps) {
    super(props);
    this.state = {
      isMounted: false
    };
  }

  componentDidMount() {
    const { categoryName, labels } = this.props;
    this.context.updateNumberFilters(
      typeof categoryName !== 'string' && categoryName.hasOwnProperty('key')
        ? categoryName.key
        : categoryName.toString(),
      labels.length
    );
    this.setState({ isMounted: true });
  }

  componentDidUpdate() {
    const { categoryName, labels } = this.props;
    this.context.updateNumberFilters(
      typeof categoryName !== 'string' && categoryName.hasOwnProperty('key')
        ? categoryName.key
        : categoryName.toString(),
      labels.length
    );
  }

  render() {
    const {
      children,
      labels,
      deleteLabelGroup,
      deleteLabel,
      labelGroupExpandedText,
      labelGroupCollapsedText,
      categoryName,
      showToolbarItem,
      isExpanded,
      expandableLabelContainerRef,
      ...props
    } = this.props;
    const { isExpanded: managedIsExpanded, labelGroupContentRef } = this.context;
    const _isExpanded = isExpanded !== undefined ? isExpanded : managedIsExpanded;
    const categoryKey =
      typeof categoryName !== 'string' && categoryName.hasOwnProperty('key')
        ? categoryName.key
        : categoryName.toString();

    const labelGroup = labels.length ? (
      <ToolbarItem variant="label-group">
        <LabelGroup
          key={categoryKey}
          categoryName={typeof categoryName === 'string' ? categoryName : categoryName.name}
          isClosable={deleteLabelGroup !== undefined}
          onClick={() => deleteLabelGroup(categoryName)}
          collapsedText={labelGroupCollapsedText}
          expandedText={labelGroupExpandedText}
        >
          {labels.map((label) =>
            typeof label === 'string' ? (
              <Label variant="outline" key={label} onClose={() => deleteLabel(categoryKey, label)}>
                {label}
              </Label>
            ) : (
              <Label key={label.key} onClose={() => deleteLabel(categoryKey, label)}>
                {label.node}
              </Label>
            )
          )}
        </LabelGroup>
      </ToolbarItem>
    ) : null;

    if (!_isExpanded && this.state.isMounted) {
      return (
        <React.Fragment>
          {showToolbarItem && <ToolbarItem {...props}>{children}</ToolbarItem>}
          {labelGroupContentRef?.current?.firstElementChild !== null &&
            ReactDOM.createPortal(labelGroup, labelGroupContentRef.current.firstElementChild)}
        </React.Fragment>
      );
    }

    return (
      <ToolbarContentContext.Consumer>
        {({ labelContainerRef }) => (
          <React.Fragment>
            {showToolbarItem && <ToolbarItem {...props}>{children}</ToolbarItem>}
            {labelContainerRef.current && ReactDOM.createPortal(labelGroup, labelContainerRef.current)}
            {expandableLabelContainerRef &&
              expandableLabelContainerRef.current &&
              ReactDOM.createPortal(labelGroup, expandableLabelContainerRef.current)}
          </React.Fragment>
        )}
      </ToolbarContentContext.Consumer>
    );
  }
}

export { ToolbarFilter };
