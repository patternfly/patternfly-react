import * as React from 'react';
import { Breadcrumb } from '../Breadcrumb';
import { BreadcrumbItem } from '../BreadcrumbItem';
import { render } from '@testing-library/react';

describe('Breadcrumb component', () => {
  test('should render default breadcrumb', () => {
    const view = render(<Breadcrumb />);
    expect(view.container.outerHTML).toMatchSnapshot();
  });

  test('should render breadcrumb with className', () => {
    const view = render(<Breadcrumb className="className" />);
    expect(view.container.outerHTML).toMatchSnapshot();
  });

  test('should render breadcrumb with aria-label', () => {
    const view = render(<Breadcrumb aria-label="custom label" />);
    expect(view.container.outerHTML).toMatchSnapshot();
  });

  test('should render breadcrumb with children', () => {
    const view = render(
      <Breadcrumb>
        <BreadcrumbItem to="#">Item 1</BreadcrumbItem> <BreadcrumbItem to="#">Item 1</BreadcrumbItem>
      </Breadcrumb>
    );
    expect(view.container.outerHTML).toMatchSnapshot();
  });
});
