import { HTMLProps, ReactNode, FunctionComponent } from 'react';
import styles from '@patternfly/react-styles/css/components/Panel/panel';
import { css } from '@patternfly/react-styles';

export interface PanelMainBodyProps extends HTMLProps<HTMLDivElement> {
  /** Content rendered inside the panel main body div */
  children?: ReactNode;
  /** Class to add to outer div */
  className?: string;
}

export const PanelMainBody: FunctionComponent<PanelMainBodyProps> = ({
  className,
  children,
  ...props
}: PanelMainBodyProps) => (
  <div className={css(styles.panelMainBody, className)} {...props}>
    {children}
  </div>
);

PanelMainBody.displayName = 'PanelMainBody';
