/* eslint-env jest */

import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import EmptyStatePattern from './EmptyStatePattern';

const renderer = new ShallowRenderer();

test('should renderer a minimal EmptyStatePattern', () => {
  const tree = renderer.render(<EmptyStatePattern />);

  expect(tree).toMatchSnapshot();
});

test('should renderer a full EmptyStatePattern', () => {
  const props = {
    title: 'some title',
    info: 'some info',
    help: 'some help',
    mainAction: {
      onClick: jest.fn(),
      title: 'Main Action Title',
      children: 'Main Action Children'
    },
    actions: [
      {
        onClick: jest.fn(),
        title: 'Secondary Action 1 Title',
        children: 'Secondary Action 1 Children'
      },
      {
        onClick: jest.fn(),
        title: 'Secondary Action 2 Title',
        children: 'Secondary Action 2 Children'
      },
      {
        onClick: jest.fn(),
        title: 'Secondary Action 3 Title',
        children: 'Secondary Action 3 Children'
      }
    ]
  };

  const tree = renderer.render(<EmptyStatePattern {...props} />);

  expect(tree).toMatchSnapshot();
});
