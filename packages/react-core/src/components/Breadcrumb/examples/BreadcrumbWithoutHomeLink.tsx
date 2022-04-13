import React from 'react';
import { Breadcrumb, BreadcrumbItem } from '@patternfly/react-core';

export const BreadcrumbHomeLink: React.FunctionComponent<React.PropsWithChildren<unknown>> = () => (
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
