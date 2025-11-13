import styles from '@patternfly/react-styles/css/components/Compass/compass';
import { css } from '@patternfly/react-styles';

interface CompassNavMainProps extends React.HTMLProps<HTMLDivElement> {
  /** Content of the nav main section (typically tabs). */
  children: React.ReactNode;
  /** Additional classes added to the nav main section. */
  className?: string;
}

export const CompassNavMain: React.FunctionComponent<CompassNavMainProps> = ({ children, className, ...props }) => (
  <div className={css(styles.compassNavMain, className)} {...props}>
    {children}
  </div>
);

CompassNavMain.displayName = 'CompassNavMain';
