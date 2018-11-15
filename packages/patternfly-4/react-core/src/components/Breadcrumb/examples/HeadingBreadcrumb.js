import React from 'react';
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbItemDivider,
  BreadcrumbTitle
} from '@patternfly/react-core';

class HeadingBreadcrumb extends React.Component {
  render() {
    return (
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="#">Section Home</BreadcrumbLink>
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
            <BreadcrumbLink href="#" isCurrent>
              Section Title
            </BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    );
  }
}

export default HeadingBreadcrumb;
