import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/OverflowMenu/overflow-menu';

export interface OverflowMenuItemProps extends React.HTMLProps<HTMLDivElement> {
    children: any;
    className?: string;
}

export class OverflowMenuItem extends React.Component<OverflowMenuItemProps> {
  constructor(props: OverflowMenuItemProps) {
    super(props);
  }

  render() {
    const { className, children } = this.props;
    return (
      <div
        {...this.props}
        className={css(styles.overflowMenuItem, className)}
      >
        {children}
      </div>
    );
  }
}
