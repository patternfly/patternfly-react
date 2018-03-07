/* eslint-env jest */

import React from 'react';
import renderer from 'react-test-renderer';
import { Breadcrumb } from './index';

test('Breadcrumb icon renders properly', () => {
  const component = renderer.create(
    <Breadcrumb>
      <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
      <Breadcrumb.Item href="http://getbootstrap.com/components/#breadcrumbs">
        Library
      </Breadcrumb.Item>
      <Breadcrumb.Item active>Data</Breadcrumb.Item>
    </Breadcrumb>
  );

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Breadcrum combined with page title', () => {
  const component = renderer.create(
    <Breadcrumb title>
      <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
      <Breadcrumb.Item href="http://getbootstrap.com/components/#breadcrumbs">
        Library
      </Breadcrumb.Item>
      <Breadcrumb.Item active>Data</Breadcrumb.Item>
    </Breadcrumb>
  );

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
