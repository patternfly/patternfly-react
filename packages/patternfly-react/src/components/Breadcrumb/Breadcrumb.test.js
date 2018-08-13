import React from 'react';
import { mount } from 'enzyme';
import { Breadcrumb } from './index';

test('Breadcrumb icon renders properly', () => {
  const component = mount(
    <Breadcrumb>
      <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
      <Breadcrumb.Item href="http://getbootstrap.com/components/#breadcrumbs">Library</Breadcrumb.Item>
      <Breadcrumb.Item active>Data</Breadcrumb.Item>
    </Breadcrumb>
  );

  expect(component).toMatchSnapshot();
});

test('Breadcrum combined with page title', () => {
  const component = mount(
    <Breadcrumb title>
      <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
      <Breadcrumb.Item href="http://getbootstrap.com/components/#breadcrumbs">Library</Breadcrumb.Item>
      <Breadcrumb.Item active>Data</Breadcrumb.Item>
    </Breadcrumb>
  );

  expect(component).toMatchSnapshot();
});
