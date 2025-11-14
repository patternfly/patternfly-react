import styles from '@patternfly/react-styles/css/components/Compass/compass';
import { css } from '@patternfly/react-styles';

export interface CompassHeaderProps {
  /** Content of the logo area */
  logo?: React.ReactNode;
  /** Content of the navigation area */
  nav?: React.ReactNode;
  /** Content of the profile area */
  profile?: React.ReactNode;
}

export const CompassHeader: React.FunctionComponent<CompassHeaderProps> = ({ logo, nav, profile }) => (
  <>
    <div className={css(`${styles.compass}__logo`)}>{logo}</div>
    <div className={css(styles.compassNav)}>{nav}</div>
    <div className={css(styles.compassProfile)}>{profile}</div>
  </>
);

CompassHeader.displayName = 'CompassHeader';
