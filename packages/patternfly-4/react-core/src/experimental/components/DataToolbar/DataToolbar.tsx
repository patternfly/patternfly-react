import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/DataToolbar/data-toolbar';
import { css } from '@patternfly/react-styles';

export interface DataToolbarProps extends React.HTMLProps<HTMLDivElement> {
  /** TODO */
  className?: string;
  /** TODO */
  contentRows: React.ReactNode[];
}

export interface DataToolbarState {
  /** TODO */
  isExpanded: boolean;
}

export class DataToolbar extends React.Component<DataToolbarProps, DataToolbarState> {

  static defaultProps = {

  };

  constructor(props: DataToolbarProps) {
    super(props);

    this.state = {
      isExpanded: false
    }
  }

  render() {

    const { className, contentRows, ...props} = this.props;
    // const { isExpanded } = this.state;

    // loop over content rows to look
    // for a toggle group - if I find one, add an expandable content row to the end
    // for an item with chip group - if I find one, build expandable row to display chips

    return (
      <div className={css(styles.dataToolbar, className)} {...props}>
        {contentRows}
      </div>
    );
  }

};
