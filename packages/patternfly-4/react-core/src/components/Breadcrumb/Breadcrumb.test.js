import React from 'react';
import Breadcrumb from './Breadcrumb';
import BreadcrumbItem from './BreadcrumbItem';
import { shallow } from 'enzyme';

describe('Breadcrumb component', () => {
  test('should render default breadcrumb', () => {
    const view = shallow(<Breadcrumb />);
    expect(view).toMatchSnapshot();
  });

  test('should render breadcrumb with className', () => {
    const view = shallow(<Breadcrumb className="className" />);
    expect(view).toMatchSnapshot();
  });

  test('should render breadcrumb with aria-label', () => {
    const view = shallow(<Breadcrumb aria-label="custom label" />);
    expect(view).toMatchSnapshot();
  });

  test('should render breadcrumb with children', () => {
    const view = shallow(
      <Breadcrumb>
        <BreadcrumbItem to="#">Item 1</BreadcrumbItem> <BreadcrumbItem to="#">Item 1</BreadcrumbItem>
      </Breadcrumb>
    );
    expect(view).toMatchSnapshot();
  });
});
