import { HTMLProps, ReactNode, Ref, FunctionComponent, forwardRef } from 'react';
import styles from '@patternfly/react-styles/css/components/Panel/panel';
import { css } from '@patternfly/react-styles';

export interface PanelProps extends HTMLProps<HTMLDivElement> {
  /** Content rendered inside the panel */
  children?: ReactNode;
  /** Class to add to outer div */
  className?: string;
  /** Adds panel variant styles */
  variant?: 'raised' | 'bordered';
  /** Flag to add scrollable styling to the panel */
  isScrollable?: boolean;
  /** @hide Forwarded ref */
  innerRef?: Ref<any>;
}

const PanelBase: FunctionComponent<PanelProps> = ({
  className,
  children,
  variant,
  isScrollable,
  innerRef,
  ...props
}: PanelProps) => (
  <div
    className={css(
      styles.panel,
      variant === 'raised' && styles.modifiers.raised,
      variant === 'bordered' && styles.modifiers.bordered,
      isScrollable && styles.modifiers.scrollable,
      className
    )}
    ref={innerRef}
    {...props}
  >
    {children}
  </div>
);

export const Panel = forwardRef((props: PanelProps, ref: Ref<any>) => <PanelBase innerRef={ref} {...props} />);
Panel.displayName = 'Panel';
