import React from 'react';
import { Breadcrumb, BreadcrumbItem, BreadcrumbHeading } from '@patternfly/react-core';

export class BreadcrumbDemo extends React.Component {

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {
    return (
      <Breadcrumb>
          <BreadcrumbItem to="/">Section Home</BreadcrumbItem>
          <BreadcrumbItem to="#">Section Title</BreadcrumbItem>
          <BreadcrumbItem to="#">Section Title</BreadcrumbItem>
          <BreadcrumbItem to="#">Section Title</BreadcrumbItem>
          <BreadcrumbHeading to="#">Section Title</BreadcrumbHeading>
      </Breadcrumb>
      )   
  }
}
