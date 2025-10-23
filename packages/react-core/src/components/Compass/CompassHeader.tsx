import { css } from '@patternfly/react-styles';

interface CompassHeaderProps {
  /** Content for the logo area */
  logo?: React.ReactNode;
  /** Content for the navigation area */
  nav?: React.ReactNode;
  /** Content for the profile area */
  profile?: React.ReactNode;
}

export const CompassHeader: React.FunctionComponent<CompassHeaderProps> = ({ logo, nav, profile }) => (
  <>
    <div className={css('pf-v6-c-compass__logo')}>{logo}</div>
    <div className={css('pf-v6-c-compass__nav')}>{nav}</div>
    <div className={css('pf-v6-c-compass__profile')}>{profile}</div>
  </>
);

CompassHeader.displayName = 'CompassHeader';
