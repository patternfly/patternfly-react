import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/Panel/panel';
import { css } from '@patternfly/react-styles';
import cssMaxHeight from '@patternfly/react-tokens/dist/esm/c_panel__main_MaxHeight';

export interface PanelMainProps extends React.HTMLProps<HTMLDivElement> {
  /** Content rendered inside the panel main div */
  children?: React.ReactNode;
  /** Class to add to outer div */
  className?: string;
  /** Max height of the panel main div as a string with the value and unit */
  maxHeight?: string;
}

export const PanelMain: React.FunctionComponent<PanelMainProps> = ({
  className,
  children,
  maxHeight,
  ...props
}: PanelMainProps) => (
  <div
    className={css(styles.panelMain, className)}
    style={{ [cssMaxHeight.name]: maxHeight } as React.CSSProperties}
    {...props}
  >
    {children}
  </div>
);

PanelMain.displayName = 'PanelMain';
