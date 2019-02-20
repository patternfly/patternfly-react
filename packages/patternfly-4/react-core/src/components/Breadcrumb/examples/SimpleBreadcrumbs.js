import React from 'react';
import { Breadcrumb, BreadcrumbItem } from '../index';

class SimpleBreadcrumbs extends React.Component {
  render() {
    return (
      <Breadcrumb>
        <BreadcrumbItem to="#">Section Home</BreadcrumbItem>
        <BreadcrumbItem to="#">Section Title</BreadcrumbItem>
        <BreadcrumbItem to="#">Section Title</BreadcrumbItem>
        <BreadcrumbItem to="#" isActive>
          Section Landing
        </BreadcrumbItem>
      </Breadcrumb>
    );
  }
}

export default SimpleBreadcrumbs;
