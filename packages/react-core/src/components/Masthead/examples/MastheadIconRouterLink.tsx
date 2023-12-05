import React from 'react';
import {
  Masthead,
  MastheadToggle,
  MastheadMain,
  MastheadBrand,
  MastheadContent,
  Button,
  Brand
} from '@patternfly/react-core';
import BarsIcon from '@patternfly/react-icons/dist/js/icons/bars-icon';
import { Link } from '@reach/router';
import pfIcon from '../../assets/PF-HorizontalLogo-Color.svg';

export const MastheadIconRouterLink: React.FunctionComponent = () => (
  <Masthead id="icon-router-link">
    <MastheadToggle>
      <Button variant="plain" onClick={() => {}} aria-label="Global navigation">
        <BarsIcon />
      </Button>
    </MastheadToggle>
    <MastheadMain>
      <MastheadBrand component={(props) => <Link {...props} to="#" />}>
        <Brand src={pfIcon} alt="PatternFly" heights={{ default: '36px' }} />
      </MastheadBrand>
    </MastheadMain>
    <MastheadContent>
      <span>Content</span>
    </MastheadContent>
  </Masthead>
);
