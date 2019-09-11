import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/OverflowMenu/overflow-menu';

export interface OverflowMenuGroupProps extends React.HTMLProps<HTMLDivElement> {
    children: any;
    className?: string;
}

export class OverflowMenuGroup extends React.Component<OverflowMenuGroupProps> {
  constructor(props: OverflowMenuGroupProps) {
    super(props);
    this.state = {};
  }

  render() {
    const { className, children } = this.props;
    return (
      <div
        {...this.props}
        className={css(styles.overflowMenuGroup, className)}
      >
        {children}
      </div>
    );
  }
}
