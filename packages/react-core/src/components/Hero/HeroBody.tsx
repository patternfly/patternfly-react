import styles from '@patternfly/react-styles/css/components/Hero/hero';
import { css } from '@patternfly/react-styles';

/** An optional wrapper component for the body content of a Hero that can be used to help control any text content from overlapping a Hero background image. */

export interface HeroBodyProps extends Omit<React.HTMLProps<HTMLDivElement>, 'content'> {
  /** Content of the hero */
  children?: React.ReactNode;
  /** Additional classes added to the hero */
  className?: string;
}

export const HeroBody: React.FunctionComponent<HeroBodyProps> = ({ className, children, ...props }) => (
  <div className={css(styles.heroBody, className)} {...props}>
    {children}
  </div>
);

HeroBody.displayName = 'HeroBody';
