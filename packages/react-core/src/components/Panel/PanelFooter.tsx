import { HTMLProps, ReactNode, FunctionComponent } from 'react';
import styles from '@patternfly/react-styles/css/components/Panel/panel';
import { css } from '@patternfly/react-styles';

export interface PanelFooterProps extends HTMLProps<HTMLDivElement> {
  /** Content rendered inside the panel footer */
  children?: ReactNode;
  /** Class to add to outer div */
  className?: string;
}

export const PanelFooter: FunctionComponent<PanelFooterProps> = ({
  className,
  children,
  ...props
}: PanelFooterProps) => (
  <div className={css(styles.panelFooter, className)} {...props}>
    {children}
  </div>
);

PanelFooter.displayName = 'PanelFooter';
