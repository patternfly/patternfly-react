import { css } from '@patternfly/react-styles';

interface CompassSectionProps extends React.HTMLProps<HTMLDivElement> {
  /** Additional classes added to the section. */
  className?: string;
  /** Content of the section. */
  children: React.ReactNode;
  /** Applies glass effect to the section. */
  isGlass?: boolean;
  /** Applies a pill border radius to the section. */
  isPill?: boolean;
  /** Removes the border of the section. */
  isBorderless?: boolean;
  /** Applies a gradient border to the section. */
  isGradientBorder?: boolean;
  /** Applies a thinking style to the section. */
  isThinking?: boolean;
  /** Indicates the section should expand to fill the available height. */
  isFullHeight?: boolean;
}

export const CompassSection: React.FunctionComponent<CompassSectionProps> = ({
  children,
  className,
  isGlass,
  isPill,
  isBorderless,
  isGradientBorder,
  isThinking,
  isFullHeight,
  ...props
}) => (
  <div
    className={css(
      'pf-v6-c-compass__section',
      isGlass && 'pf-m-glass',
      isPill && 'pf-m-pill',
      isBorderless && 'pf-m-no-border',
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
