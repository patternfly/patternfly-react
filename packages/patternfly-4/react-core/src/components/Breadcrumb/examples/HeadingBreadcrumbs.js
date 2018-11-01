import React from 'react';
import { Breadcrumb, BreadcrumbItem, BreadcrumbHeading } from '@patternfly/react-core';

class HeadingBreadcrumbs extends React.Component {
  render() {
    return (
      <Breadcrumb>
        <BreadcrumbItem to="#">Section Home</BreadcrumbItem>
        <BreadcrumbItem to="#">Section Title</BreadcrumbItem>
        <BreadcrumbItem to="#">Section Title</BreadcrumbItem>
        <BreadcrumbItem to="#">Section Title</BreadcrumbItem>
        <BreadcrumbHeading to="#">Section Title</BreadcrumbHeading>
      </Breadcrumb>
    );
  }
}

export default HeadingBreadcrumbs;
