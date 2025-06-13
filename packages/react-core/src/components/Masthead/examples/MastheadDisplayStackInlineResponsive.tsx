import {
  Masthead,
  MastheadMain,
  MastheadToggle,
  MastheadBrand,
  MastheadLogo,
  MastheadContent,
  Button
} from '@patternfly/react-core';

export const MastheadDisplayStackInlineResponsive: React.FunctionComponent = () => (
  <Masthead id="stack-inline-masthead" display={{ default: 'inline', lg: 'stack', '2xl': 'inline' }}>
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
