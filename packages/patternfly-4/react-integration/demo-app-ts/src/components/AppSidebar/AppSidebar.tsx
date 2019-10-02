import React from 'react';
import { PageSidebar, PageSidebarProps } from '@patternfly/react-core';

export const AppSidebar: React.FunctionComponent<PageSidebarProps> = props => {
  return <PageSidebar nav={props.nav} />;
};

export default AppSidebar;
