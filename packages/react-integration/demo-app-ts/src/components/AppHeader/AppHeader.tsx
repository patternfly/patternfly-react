import React from 'react';
import { Avatar, Brand, PageHeader } from '@patternfly/react-core';
import { AppToolbar } from '../AppToolbar/AppToolbar';
const imgBrand = require('../../assets/images/imgBrand.svg');
const imgAvatar = require('../../assets/images/imgAvatar.svg');

const showNavToogle: boolean = false;

export const AppHeader: React.FunctionComponent<any> = () => (
  <PageHeader
    logo={<Brand src={imgBrand} alt="Patternfly Logo" />}
    toolbar={AppToolbar}
    avatar={<Avatar src={imgAvatar} alt="Avatar image" />}
    showNavToggle={showNavToogle}
  />
);

export default AppHeader;
