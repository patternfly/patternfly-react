import React from 'react';
import { mount } from 'enzyme';

import { Button } from '../Button';
import { EmptyState } from './index';

test('Empty state icon renders properly', () => {
  const component = mount(
    <EmptyState>
      <EmptyState.Icon />
    </EmptyState>
  );

  expect(component.render()).toMatchSnapshot();
});

test('Empty state title renders properly', () => {
  const component = mount(
    <EmptyState>
      <EmptyState.Title>Empty State Title</EmptyState.Title>
    </EmptyState>
  );

  expect(component.render()).toMatchSnapshot();
});

test('Empty state info renders properly', () => {
  const component = mount(
    <EmptyState>
      <EmptyState.Info>This is the Empty State component.</EmptyState.Info>
    </EmptyState>
  );

  expect(component.render()).toMatchSnapshot();
});

test('Empty state help renders properly', () => {
  const component = mount(
    <EmptyState>
      <EmptyState.Help>
        For more information please see <a href="#">pfExample</a>
      </EmptyState.Help>
    </EmptyState>
  );

  expect(component.render()).toMatchSnapshot();
});

test('Empty state main action renders properly', () => {
  const component = mount(
    <EmptyState>
      <EmptyState.Action>
        <Button className="btn-primary btn-lg">Main Action</Button>
      </EmptyState.Action>
    </EmptyState>
  );

  expect(component.render()).toMatchSnapshot();
});

test('Empty state secondary action renders properly', () => {
  const component = mount(
    <EmptyState>
      <EmptyState.Action secondary>
        <Button title="Perform an action">Secondary Action 1</Button>
        <Button title="Perform an action">Secondary Action 2</Button>
        <Button title="Perform an action">Secondary Action 3</Button>
      </EmptyState.Action>
    </EmptyState>
  );

  expect(component.render()).toMatchSnapshot();
});
