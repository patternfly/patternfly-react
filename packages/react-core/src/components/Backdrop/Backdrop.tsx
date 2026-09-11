import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Backdrop/backdrop';
import stylesAnimated from '@patternfly/react-styles/css/components/BackdropAnimations/backdrop-animations';
import { useHasAnimations } from '../../helpers';

export interface BackdropProps extends React.HTMLProps<HTMLDivElement> {
  /** Content rendered inside the backdrop */
  children?: React.ReactNode;
  /** Additional classes added to the backdrop */
  className?: string;
  /** Flag indicating whether animations are enabled. */
  hasAnimations?: boolean;
  /** Flag to show the backdrop. Used in conjunction with `hasAnimations`. */
  isVisible?: boolean;
}

export const Backdrop: React.FunctionComponent<BackdropProps> = ({
  children = null,
  className = '',
  hasAnimations: hasAnimationsProp,
  isVisible,
  ...props
}: BackdropProps) => {
  const hasAnimations = useHasAnimations(hasAnimationsProp);

  return (
    <div
      {...props}
      className={css(
        styles.backdrop,
        hasAnimations && stylesAnimated.backdropAnimated,
        hasAnimations && isVisible === true && stylesAnimated.backdropAnimatedVisible,
        hasAnimations && isVisible !== true && stylesAnimated.backdropAnimatedHidden,
        className
      )}
    >
      {children}
    </div>
  );
};
Backdrop.displayName = 'Backdrop';
