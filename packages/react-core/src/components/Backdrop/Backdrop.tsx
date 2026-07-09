import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Backdrop/backdrop';
import stylesAnimated from '@patternfly/react-styles/css/components/BackdropAnimations/backdrop-animations';

export interface BackdropProps extends React.HTMLProps<HTMLDivElement> {
  /** Content rendered inside the backdrop */
  children?: React.ReactNode;
  /** Additional classes added to the backdrop */
  className?: string;
  /** Whether the Backdrop should open/close with animations. (BETA) */
  animated?: boolean;
  /** Flag to show the backdrop. Used in conjunction with `animated` (BETA) */
  isVisible?: boolean;
}

export const Backdrop: React.FunctionComponent<BackdropProps> = ({
  children = null,
  className = '',
  animated,
  isVisible,
  ...props
}: BackdropProps) => (
  <div
    {...props}
    className={css(
      styles.backdrop,
      animated && stylesAnimated.backdropAnimated,
      animated && isVisible === true && stylesAnimated.backdropAnimatedVisible,
      animated && isVisible !== true && stylesAnimated.backdropAnimatedHidden,
      className
    )}
  >
    {children}
  </div>
);
Backdrop.displayName = 'Backdrop';
