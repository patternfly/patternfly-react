import styles from '@patternfly/react-styles/css/components/Compass/compass';
import { css } from '@patternfly/react-styles';

interface CompassPanelProps extends React.HTMLProps<HTMLDivElement> {
  /** Additional classes added to the panel. */
  className?: string;
  /** Content of the panel. */
  children: React.ReactNode;
  /** Applies a pill border radius to the panel. */
  isPill?: boolean;
  /** Applies a gradient border to the panel. */
  hasGradientBorder?: boolean;
  /** Applies a thinking style to the panel. */
  isThinking?: boolean;
  /** Indicates the panel should expand to fill the available height. */
  isFullHeight?: boolean;
  /** Indicates the panel should scroll its overflow. */
  isScrollable?: boolean;
  /** Removes the border of the panel. */
  hasNoBorder?: boolean;
  /** Removes the padding of the panel. */
  hasNoPadding?: boolean;
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
