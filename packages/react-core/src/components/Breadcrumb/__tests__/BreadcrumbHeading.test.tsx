import * as React from 'react';
import { BreadcrumbHeading } from '../BreadcrumbHeading';
import { render } from '@testing-library/react';

describe('BreadcrumbHeading component', () => {
  test('should render default breadcrumbHeading', () => {
    const view = render(<BreadcrumbHeading>Item</BreadcrumbHeading>);
    expect(view.container).toMatchSnapshot();
  });

  test('should pass classname', () => {
    const view = render(<BreadcrumbHeading className="Class">Item</BreadcrumbHeading>);
    expect(view.container).toMatchSnapshot();
  });

  test('should pass custom id', () => {
    const view = render(<BreadcrumbHeading id="Id">Item</BreadcrumbHeading>);
    expect(view.container).toMatchSnapshot();
  });

  test('should render link breadcrumbTitle', () => {
    const view = render(<BreadcrumbHeading to="/somewhere">Item</BreadcrumbHeading>);
    expect(view.container).toMatchSnapshot();
  });

  test('should render breadcrumbHeading with target', () => {
    const view = render(
      <BreadcrumbHeading to="#here" target="_blank">
        Item
      </BreadcrumbHeading>
    );
    expect(view.container).toMatchSnapshot();
  });
});
