import React from 'react';
import {
  Masthead,
  MastheadToggle,
  MastheadMain,
  MastheadBrand,
  MastheadContent,
  Button,
  Flex,
  FlexItem
} from '@patternfly/react-core';
import BarsIcon from '@patternfly/react-icons/dist/js/icons/bars-icon';

export const MastheadBasicMixedContent: React.FunctionComponent = () => (
  <Masthead id="basic-mixed">
    <MastheadToggle>
      <Button variant="plain" onClick={() => {}} aria-label="Global navigation" icon={<BarsIcon />} />
    </MastheadToggle>
    <MastheadMain>
      <MastheadBrand component="a">Logo</MastheadBrand>
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
