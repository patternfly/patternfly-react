/* eslint-env jest */

import React from 'react';
import renderer from 'react-test-renderer';
import { Button } from '../Button';
import { EmptyState } from './index';

test('Empty state icon renders properly', () => {
  const component = renderer.create(
    <EmptyState>
      <EmptyState.Icon />
    </EmptyState>
  );

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Empty state title renders properly', () => {
  const component = renderer.create(
    <EmptyState>
      <EmptyState.Title>Empty State Title</EmptyState.Title>
    </EmptyState>
  );

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Empty state info renders properly', () => {
  const component = renderer.create(
    <EmptyState>
      <EmptyState.Info>This is the Empty State component.</EmptyState.Info>
    </EmptyState>
  );

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Empty state help renders properly', () => {
  const component = renderer.create(
    <EmptyState>
      <EmptyState.Help>
        For more information please see <a href="#">pfExample</a>
      </EmptyState.Help>
    </EmptyState>
  );

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Empty state main action renders properly', () => {
  const component = renderer.create(
    <EmptyState>
      <EmptyState.Action>
        <Button className="btn-primary btn-lg">Main Action</Button>
      </EmptyState.Action>
    </EmptyState>
  );

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Empty state secondary action renders properly', () => {
  const component = renderer.create(
    <EmptyState>
      <EmptyState.Action secondary>
        <Button title="Perform an action">Secondary Action 1</Button>
        <Button title="Perform an action">Secondary Action 2</Button>
        <Button title="Perform an action">Secondary Action 3</Button>
      </EmptyState.Action>
    </EmptyState>
  );

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
