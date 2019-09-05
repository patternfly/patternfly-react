import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/DataToolbar/data-toolbar';
import { css } from '@patternfly/react-styles';
import { DataToolbarExpandableContent } from './DataToolbarExpandableContent';
import { DataToolbarContext } from './DataToolbarUtils';

export interface DataToolbarProps extends React.HTMLProps<HTMLDivElement> {
  /** Classes applied to root element of the Data toolbar */
  className?: string;
  /** Content to be rendered as rows in the Data toolbar */
  children?: React.ReactNode;
  /** Id of the Data toolbar */
  id: string;
}

export interface DataToolbarState {
  /** Flag indicating the if the expandable content is expanded */
  isExpanded: boolean;
  /** TODO */
  expandableContentItems: React.ReactNode;
}

export class DataToolbar extends React.Component<DataToolbarProps, DataToolbarState> {

  static defaultProps = {

  };

  constructor(props: DataToolbarProps) {
    super(props);

    this.state = {
      isExpanded: false,
      expandableContentItems: undefined
    }
  }

  updateExpandableContent = (expandableContentItems: React.ReactNode) => {
    this.setState((prevState) => ({
      isExpanded: !prevState.isExpanded,
      expandableContentItems: expandableContentItems,
    }));
  };

  render() {

    const { className, children, id, ...props} = this.props;
    const { isExpanded, expandableContentItems } = this.state;

    return (
      <div className={css(styles.dataToolbar, className)} id={id} {...props}>
        <DataToolbarContext.Provider value={{isExpanded: isExpanded, updateExpandableContent: this.updateExpandableContent}}>
          {children}
        </DataToolbarContext.Provider>
        <DataToolbarExpandableContent isExpanded={isExpanded}>{expandableContentItems}</DataToolbarExpandableContent>
      </div>
    );
  }

};
