import { FunctionComponent } from 'react';
import { Breadcrumb, BreadcrumbItem } from '@patternfly/react-core';

export const BreadcrumbHomeLink: FunctionComponent = () => (
  <Breadcrumb>
    <BreadcrumbItem>Section Home</BreadcrumbItem>
    <BreadcrumbItem to="#">Section title</BreadcrumbItem>
    <BreadcrumbItem to="#">Section title</BreadcrumbItem>
    <BreadcrumbItem to="#">Section title</BreadcrumbItem>
    <BreadcrumbItem to="#">Section title</BreadcrumbItem>
    <BreadcrumbItem to="#" isActive>
      Section landing
    </BreadcrumbItem>
  </Breadcrumb>
);
