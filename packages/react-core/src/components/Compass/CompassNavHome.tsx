import styles from '@patternfly/react-styles/css/components/Compass/compass';
import { css } from '@patternfly/react-styles';

interface CompassNavHomeProps extends React.HTMLProps<HTMLDivElement> {
  /** Content of the nav home section (typically a home button/icon). */
  children: React.ReactNode;
  /** Additional classes added to the nav home section. */
  className?: string;
}

export const CompassNavHome: React.FunctionComponent<CompassNavHomeProps> = ({ children, className, ...props }) => (
  <div className={css(styles.compassNavHome, className)} {...props}>
    {children}
  </div>
);

CompassNavHome.displayName = 'CompassNavHome';
