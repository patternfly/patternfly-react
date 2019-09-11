import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/OverflowMenu/overflow-menu';

export interface OverflowMenuContentProps extends React.HTMLProps<HTMLDivElement> {
    children: any;
}

export class OverflowMenuContent extends React.Component<OverflowMenuContentProps> {
  constructor(props: OverflowMenuContentProps) {
    super(props);
    this.state = {};
  }

  render() {
    const { className, children } = this.props;
    return (
      <div
        {...this.props}
        className={css(styles.overflowMenuContent, className)}
      >
        {children}
      </div>
    );
  }
}
