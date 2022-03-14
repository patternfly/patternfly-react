import * as React from 'react';
import { BreadcrumbItem } from '../BreadcrumbItem';
import { render } from '@testing-library/react';

describe('BreadcrumbItem component', () => {
  test('should render default breadcrumbItem', () => {
    const view = render(<BreadcrumbItem>Item</BreadcrumbItem>);
    expect(view.container.outerHTML).toMatchSnapshot();
  });

  test('should render breadcrumbItem with className', () => {
    const view = render(<BreadcrumbItem className="Class">Item</BreadcrumbItem>);
    expect(view.container.outerHTML).toMatchSnapshot();
  });

  test('should render breadcrumbItem with id', () => {
    const view = render(<BreadcrumbItem id="Item 1">Item</BreadcrumbItem>);
    expect(view.container.outerHTML).toMatchSnapshot();
  });

  test('should render active breadcrumbItem', () => {
    const view = render(<BreadcrumbItem isActive>Item</BreadcrumbItem>);
    expect(view.container.outerHTML).toMatchSnapshot();
  });

  test('should render link breadcrumbItem', () => {
    const view = render(<BreadcrumbItem to="/somewhere">Item</BreadcrumbItem>);
    expect(view.container.outerHTML).toMatchSnapshot();
  });

  test('should render breadcrumbItem with target', () => {
    const view = render(<BreadcrumbItem target="/somewhere">Item</BreadcrumbItem>);
    expect(view.container.outerHTML).toMatchSnapshot();
  });

  test('should render breadcrumbItem with custom element', () => {
    const view = render(
      <BreadcrumbItem>
        <h1>Header</h1>
      </BreadcrumbItem>
    );
    expect(view.container.outerHTML).toMatchSnapshot();
  });

  test('should render breadcrumbItem with component', () => {
    const MyComponent = () => <div>My component contents</div>;
    const consoleError = jest.spyOn(console, 'error').mockImplementation();
    const view = render(<BreadcrumbItem component={MyComponent}>Stuff</BreadcrumbItem>);
    expect(view.container.outerHTML).toMatchSnapshot();
    expect(consoleError).not.toHaveBeenCalled();
  });
});
