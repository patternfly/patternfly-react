import React from 'react';
import { Masthead, MastheadToggle, MastheadMain, MastheadBrand, MastheadContent, Button } from '@patternfly/react-core';
import BarsIcon from '@patternfly/react-icons/dist/js/icons/bars-icon';

export const MastheadBasic: React.FunctionComponent = () => (
  <Masthead id="basic-example">
    <MastheadToggle>
      <Button variant="plain" onClick={() => {}} aria-label="Global navigation">
        <BarsIcon />
      </Button>
    </MastheadToggle>
    <MastheadMain>
      <MastheadBrand component="a">Logo</MastheadBrand>
    </MastheadMain>
    <MastheadContent>
      <span>Content</span>
    </MastheadContent>
  </Masthead>
);
