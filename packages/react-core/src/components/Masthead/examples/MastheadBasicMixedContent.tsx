import {
  Masthead,
  MastheadMain,
  MastheadToggle,
  MastheadBrand,
  MastheadLogo,
  MastheadContent,
  Button,
  Flex,
  FlexItem
} from '@patternfly/react-core';

export const MastheadBasicMixedContent: React.FunctionComponent = () => (
  <Masthead id="basic-mixed">
    <MastheadMain>
      <MastheadToggle>
        <Button variant="plain" isHamburger onClick={() => {}} aria-label="Global navigation" />
      </MastheadToggle>
      <MastheadBrand>
        <MastheadLogo component="a">Logo</MastheadLogo>
      </MastheadBrand>
    </MastheadMain>
    <MastheadContent>
      <Flex>
        <span>Content</span>
        <Button>Primary</Button>
        <FlexItem alignSelf={{ default: 'alignSelfFlexEnd' }}>
          <Button variant="secondary">Secondary</Button>
        </FlexItem>
        <FlexItem alignSelf={{ default: 'alignSelfFlexEnd' }}>
          <Button variant="tertiary">Tertiary</Button>
        </FlexItem>
      </Flex>
    </MastheadContent>
  </Masthead>
);
