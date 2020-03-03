import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/Drawer/drawer';
import { css } from '@patternfly/react-styles';

export interface DrawerProps extends React.HTMLProps<HTMLDivElement> {
  /** Additional classes added to the Drawer. */
  className?: string;
  /** Content rendered in the left hand panel */
  children?: React.ReactNode;
  /** Indicate if the drawer is expanded */
  isExpanded?: boolean;
  /** Indicates if the content element and panel element are displayed side by side. */
  isInline?: boolean;
}

export class Drawer extends React.Component<DrawerProps> {
  static hasWarnBeta = false;
  constructor(props: DrawerProps) {
    super(props);
  }

  componentDidMount() {
    if (!Drawer.hasWarnBeta && process.env.NODE_ENV !== 'production') {
      // eslint-disable-next-line no-console
      console.warn('This component is in beta and subject to change.');
      Drawer.hasWarnBeta = true;
    }
  }

  render() {
    const { className = '', children, isExpanded = false, isInline = false, ...props } = this.props;

    return (
      <div
        {...props}
        className={css(
          styles.drawer,
          isExpanded && styles.modifiers.expanded,
          isInline && styles.modifiers.inline,
          className
        )}
      >
        {children}
      </div>
    );
  }
}
