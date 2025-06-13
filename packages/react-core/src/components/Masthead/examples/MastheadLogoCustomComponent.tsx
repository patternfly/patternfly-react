import {
  Masthead,
  MastheadMain,
  MastheadToggle,
  MastheadBrand,
  MastheadLogo,
  MastheadContent,
  Button,
  Brand
} from '@patternfly/react-core';
import pfIcon from '../../assets/PF-HorizontalLogo-Color.svg';

export const MastheadLogoCustomComponent: React.FunctionComponent = () => (
  <Masthead id="icon-router-link">
    <MastheadMain>
      <MastheadToggle>
        <Button variant="plain" isHamburger onClick={() => {}} aria-label="Global navigation" />
      </MastheadToggle>
      <MastheadBrand>
        <MastheadLogo component={(props) => <a {...props} href="#" />}>
          <Brand src={pfIcon} alt="PatternFly" heights={{ default: '36px' }} />
        </MastheadLogo>
      </MastheadBrand>
    </MastheadMain>
    <MastheadContent>
      <span>Content</span>
    </MastheadContent>
  </Masthead>
);
