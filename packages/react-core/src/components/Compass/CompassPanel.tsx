import styles from '@patternfly/react-styles/css/components/Compass/compass';
import { css } from '@patternfly/react-styles';

interface CompassPanelProps extends React.HTMLProps<HTMLDivElement> {
  /** Content of the panel. */
  children: React.ReactNode;
  /** Additional classes added to the panel. */
  className?: string;
  /** Indicates the panel should have a pill border radius */
  isPill?: boolean;
  /** Indicates the panel should expand to fill the available height */
  isFullHeight?: boolean;
  /** Indicates the panel should scroll its overflow */
  isScrollable?: boolean;
  /** Indicates the panel should have no border */
  hasNoBorder?: boolean;
  /** Indicates the panel should have no padding */
  hasNoPadding?: boolean;
  /** Indicates the panel should have a gradient border */
  hasGradientBorder?: boolean;
  /** Indicates the panel should have a thinking style */
  isThinking?: boolean;
}

export const CompassPanel: React.FunctionComponent<CompassPanelProps> = ({
  children,
  className,
  isPill,
  hasNoBorder,
  hasNoPadding,
  hasGradientBorder,
  isThinking,
  isFullHeight,
  isScrollable,
  ...props
}) => (
  <div
    className={css(
      styles.compassPanel,
      isPill && 'pf-m-pill',
      hasNoBorder && styles.modifiers.noBorder,
      hasNoPadding && styles.modifiers.noPadding,
      hasGradientBorder && 'pf-m-gradient-border',
      isThinking && 'pf-m-thinking',
      isFullHeight && styles.modifiers.fullHeight,
      isScrollable && styles.modifiers.scrollable,
      className
    )}
    {...props}
  >
    {children}
  </div>
);

CompassPanel.displayName = 'CompassPanel';
