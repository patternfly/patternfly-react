import {
  Masthead,
  MastheadMain,
  MastheadToggle,
  MastheadBrand,
  MastheadLogo,
  MastheadContent,
  Button
} from '@patternfly/react-core';

export const MastheadDisplayStack: React.FunctionComponent = () => (
  <Masthead id="stack-masthead" display={{ default: 'stack' }}>
    <MastheadMain>
      <MastheadToggle>
        <Button variant="plain" isHamburger onClick={() => {}} aria-label="Global navigation" />
      </MastheadToggle>
      <MastheadBrand>
        <MastheadLogo component="a">Logo</MastheadLogo>
      </MastheadBrand>
    </MastheadMain>
    <MastheadContent>
      <span>Content</span>
    </MastheadContent>
  </Masthead>
);
