import React from 'react';
import { Avatar, Brand, PageHeader } from '@patternfly/react-core';
import { AppToolbar } from '../AppToolbar/AppToolbar';
const imgBrand = '../../assets/images/imgBrand.svg';
const imgAvatar = '../../assets/images/imgAvatar.svg';

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
