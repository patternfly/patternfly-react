import { forwardRef } from 'react';

import styles from '@patternfly/react-styles/css/components/Panel/panel';
import { css } from '@patternfly/react-styles';

export interface PanelProps extends React.HTMLProps<HTMLDivElement> {
  /** Content rendered inside the panel */
  children?: React.ReactNode;
  /** Class to add to outer div */
  className?: string;
  /** Adds panel variant styles */
  variant?: 'raised' | 'bordered' | 'secondary';
  /** Flag to add scrollable styling to the panel */
  isScrollable?: boolean;
  /** @beta When used with a scrollable panel, sets the panel to auto height */
  isAutoHeight?: boolean;
  /** @beta Flag to remove the panel's border */
  hasNoBorder?: boolean;
  /** @beta Flag to make the panel fill the available height of its container */
  isFullHeight?: boolean;
  /** @beta Modifies the panel to use glass styling when the glass theme is enabled */
  isGlass?: boolean;
  /** @beta Uses pill (fully rounded) border radius for the panel */
  isPill?: boolean;
  /** @hide Forwarded ref */
  innerRef?: React.Ref<any>;
}

const PanelBase: React.FunctionComponent<PanelProps> = ({
  className,
  children,
  variant,
  isScrollable,
  isAutoHeight,
  hasNoBorder,
  isFullHeight,
  isGlass,
  isPill,
  innerRef,
  ...props
}: PanelProps) => (
  <div
    className={css(
      styles.panel,
      variant && styles.modifiers[variant],
      isScrollable && styles.modifiers.scrollable,
      isAutoHeight && styles.modifiers.scrollableAutoHeight,
      hasNoBorder && styles.modifiers.noBorder,
      isFullHeight && styles.modifiers.fullHeight,
      isGlass && styles.modifiers.glass,
      isPill && styles.modifiers.pill,
      className
    )}
    ref={innerRef}
    {...props}
  >
    {children}
  </div>
);

export const Panel = forwardRef((props: PanelProps, ref: React.Ref<any>) => <PanelBase innerRef={ref} {...props} />);
Panel.displayName = 'Panel';
