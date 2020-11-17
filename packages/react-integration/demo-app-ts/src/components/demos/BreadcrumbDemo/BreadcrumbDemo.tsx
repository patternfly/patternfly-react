import React from 'react';
import { Breadcrumb, BreadcrumbItem, BreadcrumbHeading, BreadcrumbItemRenderArgs } from '@patternfly/react-core';

export class BreadcrumbDemo extends React.Component {
  static displayName = 'BreadcrumbDemo';
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <Breadcrumb>
        <BreadcrumbItem to="/">Section Home</BreadcrumbItem>
        <BreadcrumbItem
          render={({ ariaCurrent, className }: BreadcrumbItemRenderArgs) => (
            <span
              aria-current={ariaCurrent}
              role="link"
              data-href="/hello"
              className={className}
              style={{ cursor: 'pointer' }}
            >
              Fake Section Title
            </span>
          )}
        />
        <BreadcrumbItem to="#">Section Title</BreadcrumbItem>
        <BreadcrumbItem to="#">Section Title</BreadcrumbItem>
        <BreadcrumbItem to="#">Section Title</BreadcrumbItem>
        <BreadcrumbHeading to="#">Section Title</BreadcrumbHeading>
      </Breadcrumb>
    );
  }
}
