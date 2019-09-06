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
  /** Flag indicating if a Data toolbar toggle group's expandable content is expanded */
  isExpanded?: boolean;
  /** A callback for setting the isExpanded flag */
  toggleIsExpanded?: () => void;
  /** Id of the Data toolbar */
  id: string;
}

export class DataToolbar extends React.Component<DataToolbarProps> {
  private expandableContentRef = React.createRef<HTMLDivElement>();

  static defaultProps = {
    isExpanded: false,
    toggleIsExpanded: () => null as any
  };

  constructor(props: DataToolbarProps) {
    super(props);
  }

  render() {

    const { className, children, isExpanded, toggleIsExpanded, id, ...props} = this.props;

    const expandableContentId = `${id}-expandable-content`;

    return (
      <div className={css(styles.dataToolbar, className)} id={id} {...props}>
        <DataToolbarContext.Provider
          value={{
            isExpanded,
            toggleIsExpanded: toggleIsExpanded,
            expandableContentRef: this.expandableContentRef,
            expandableContentId
          }}
        >
          {children}
        </DataToolbarContext.Provider>
        <DataToolbarExpandableContent
          id={expandableContentId}
          isExpanded={isExpanded}
          expandableContentRef={this.expandableContentRef}
        />
      </div>
    );
  }

}
