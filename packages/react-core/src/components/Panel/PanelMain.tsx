import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/Panel/panel';
import { css } from '@patternfly/react-styles';

export interface PanelMainProps extends React.HTMLProps<HTMLDivElement> {
  /** Content rendered inside PanelMain */
  children?: React.ReactNode;
  /** Class to add to outer div */
  className?: string;
}

export const PanelMain: React.FunctionComponent<PanelMainProps> = ({
  className,
  children,
  ...props
}: PanelMainProps) => (
  <div className={css(styles.panelMain, className)} {...props}>
    {children}
  </div>
);

PanelMain.displayName = 'PanelMain';
