import { css } from '@patternfly/react-styles';

interface CompassSectionProps extends React.HTMLProps<HTMLDivElement> {
  /** Additional classes added to the section. */
  className?: string;
  /** Content of the section. */
  children: React.ReactNode;
  /** Applies a pill border radius to the section. */
  isPill?: boolean;
  /** Applies a gradient border to the section. */
  isGradientBorder?: boolean;
  /** Applies a thinking style to the section. */
  isThinking?: boolean;
  /** Indicates the section should expand to fill the available height. */
  isFullHeight?: boolean;
  /** Removes the border of the section. */
  hasNoBorder?: boolean;
  /** Removes the padding of the section. */
  hasNoPadding?: boolean;
}

export const CompassSection: React.FunctionComponent<CompassSectionProps> = ({
  children,
  className,
  isPill,
  hasNoBorder,
  hasNoPadding,
  isGradientBorder,
  isThinking,
  isFullHeight,
  ...props
}) => (
  <div
    className={css(
      'pf-v6-c-compass__section',
      isPill && 'pf-m-pill',
      hasNoBorder && 'pf-m-no-border',
      hasNoPadding && 'pf-m-no-padding',
      isGradientBorder && 'pf-m-gradient-border',
      isThinking && 'pf-m-thinking',
      isFullHeight && 'pf-m-full-height',
      className
    )}
    {...props}
  >
    {children}
  </div>
);

CompassSection.displayName = 'CompassSection';
