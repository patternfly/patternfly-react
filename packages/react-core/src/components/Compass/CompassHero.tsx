import styles from '@patternfly/react-styles/css/components/Compass/compass';
import { css } from '@patternfly/react-styles';

/** A wrapper component to pass a PatternFly Hero component into. */
export interface CompassHeroProps extends Omit<React.HTMLProps<HTMLDivElement>, 'content'> {
  /** Content of the hero */
  children?: React.ReactNode;
  /** Additional classes added to the hero */
  className?: string;
}

export const CompassHero: React.FunctionComponent<CompassHeroProps> = ({
  className,
  children,
  ...props
}: CompassHeroProps) => (
  <div className={css(`${styles.compass}__hero`, className)} {...props}>
    {children}
  </div>
);

CompassHero.displayName = 'CompassHero';
