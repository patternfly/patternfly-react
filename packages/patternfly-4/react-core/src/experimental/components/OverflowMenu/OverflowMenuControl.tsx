import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/OverflowMenu/overflow-menu';

export interface OverflowMenuControlProps extends React.HTMLProps<HTMLDivElement> {
    children: any;
    className?: string;
}

export class OverflowMenuControl extends React.Component<OverflowMenuControlProps> {
  constructor(props: OverflowMenuControlProps) {
    super(props);
    this.state = {};
  }

  render() {
    const { className, children } = this.props;
    return (
      <div
        {...this.props}
        className={css(styles.overflowMenuControl, className)}
      >
        {children}
      </div>
    );
  }
}
