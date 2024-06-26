import React from 'react';
import { Masthead, MastheadToggle, MastheadMain, MastheadBrand, MastheadContent, Button } from '@patternfly/react-core';
import BarsIcon from '@patternfly/react-icons/dist/js/icons/bars-icon';

export const MastheadDisplayStack: React.FunctionComponent = () => (
  <Masthead id="stack-masthead" display={{ default: 'stack' }}>
    <MastheadToggle>
      <Button variant="plain" onClick={() => {}} aria-label="Global navigation" icon={<BarsIcon />} />
    </MastheadToggle>
    <MastheadMain>
      <MastheadBrand component="a">Logo</MastheadBrand>
    </MastheadMain>
    <MastheadContent>
      <span>Content</span>
    </MastheadContent>
  </Masthead>
);
