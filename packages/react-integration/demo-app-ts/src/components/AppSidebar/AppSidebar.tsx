import React from 'react';
import PropTypes from 'prop-types';
import { PageSidebar, PageSidebarProps } from '@patternfly/react-core';

export const AppSidebar: React.FunctionComponent<PageSidebarProps> = props => <PageSidebar nav={props.nav} />;

AppSidebar.propTypes = {
  nav: PropTypes.node
};

export default AppSidebar;
