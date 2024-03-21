import { HTMLProps, ReactNode, FunctionComponent } from 'react';
import styles from '@patternfly/react-styles/css/components/Panel/panel';
import { css } from '@patternfly/react-styles';

export interface PanelHeaderProps extends HTMLProps<HTMLDivElement> {
  /** Content rendered inside the panel header */
  children?: ReactNode;
  /** Class to add to outer div */
  className?: string;
}

export const PanelHeader: FunctionComponent<PanelHeaderProps> = ({
  className,
  children,
  ...props
}: PanelHeaderProps) => (
  <div className={css(styles.panelHeader, className)} {...props}>
    {children}
  </div>
);

PanelHeader.displayName = 'PanelHeader';
