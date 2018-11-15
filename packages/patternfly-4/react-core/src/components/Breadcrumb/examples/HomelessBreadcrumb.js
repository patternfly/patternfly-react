import React from 'react';
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbItemDivider
} from '@patternfly/react-core';

class HomelessBreadcrumb extends React.Component {
  render() {
    return (
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            Section Home
            <BreadcrumbItemDivider />
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink href="#">Section Title</BreadcrumbLink>
            <BreadcrumbItemDivider />
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink href="#">Section Title</BreadcrumbLink>
            <BreadcrumbItemDivider />
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink href="#">Section Title</BreadcrumbLink>
            <BreadcrumbItemDivider />
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink href="#">Section Title</BreadcrumbLink>
            <BreadcrumbItemDivider />
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink href="#" isCurrent>Section Landing</BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    );
  }
}

export default HomelessBreadcrumb;
