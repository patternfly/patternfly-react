import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Backdrop/backdrop';
import { useHasAnimations } from '../../helpers';

export interface BackdropProps extends React.HTMLProps<HTMLDivElement> {
  /** Content rendered inside the backdrop */
  children?: React.ReactNode;
  /** Additional classes added to the backdrop */
  className?: string;
  /** Flag indicating whether animations are enabled. */
  hasAnimations?: boolean;
  /** Flag to show the backdrop when animations are enabled. Set to false while the backdrop remains mounted to play its exit transition. */
  isVisible?: boolean;
}

export const Backdrop: React.FunctionComponent<BackdropProps> = ({
  children = null,
  className = '',
  hasAnimations: hasAnimationsProp,
  isVisible = true,
  ...props
}: BackdropProps) => {
  const hasAnimations = useHasAnimations(hasAnimationsProp);

  return (
    <div
      {...props}
      className={css(
        styles.backdrop,
        hasAnimations && styles.modifiers.animate,
        hasAnimations && isVisible && styles.modifiers.show,
        className
      )}
    >
      {children}
    </div>
  );
};
Backdrop.displayName = 'Backdrop';
