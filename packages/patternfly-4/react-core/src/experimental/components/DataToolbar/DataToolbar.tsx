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
}

export class DataToolbar extends React.Component<DataToolbarProps, DataToolbarState> {
  private expandableContentRef = React.createRef<HTMLDivElement>();

  static defaultProps = {

  };

  constructor(props: DataToolbarProps) {
    super(props);

    this.state = {
      isExpanded: false,
    };
  }

  toggleIsExpanded = () => {
    this.setState((prevState) => ({
      isExpanded: !prevState.isExpanded
    }));
  }

  closeExpandableContent = () => {
    this.setState(() => ({
      isExpanded: false
    }));
  }

  componentDidMount() {
    window.addEventListener('resize', this.closeExpandableContent);
  }

  render() {

    const { className, children, id, ...props} = this.props;
    const { isExpanded } = this.state;

    const expandableContentId = `${id}-expandable-content`;

    return (
      <div className={css(styles.dataToolbar, className)} id={id} {...props}>
        <DataToolbarContext.Provider
          value={{
            isExpanded,
            toggleIsExpanded: this.toggleIsExpanded,
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
