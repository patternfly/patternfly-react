import React from 'react';

import { render, screen } from '@testing-library/react';

import BookOpen from '@patternfly/react-icons/dist/esm/icons/book-open-icon';
import Key from '@patternfly/react-icons/dist/esm/icons/key-icon';
import Desktop from '@patternfly/react-icons/dist/esm/icons/desktop-icon';
import { List, ListVariant, ListComponent, OrderType } from '../List';
import { ListItem } from '../ListItem';

const ListItems = () => (
  <React.Fragment>
    <List>
      <ListItem>First</ListItem>
      <ListItem>Second</ListItem>
      <ListItem>Third</ListItem>
    </List>
  </React.Fragment>
);

describe('List', () => {
  test('simple list', () => {
    render(
      <List data-testid="list-test-id">
        <ListItems />
      </List>
    );
    expect(screen.getByTestId('list-test-id').outerHTML).toMatchSnapshot();
  });

  test('inline list', () => {
    render(
      <List variant={ListVariant.inline} data-testid="list-test-id">
        <ListItems />
      </List>
    );
    expect(screen.getByTestId('list-test-id').outerHTML).toMatchSnapshot();
  });

  test('ordered list', () => {
    render(
      <List component={ListComponent.ol}>
        <ListItem>Apple</ListItem>
        <ListItem>Banana</ListItem>
        <ListItem>Orange</ListItem>
      </List>
    );
    expect(screen.getByRole('list').outerHTML).toMatchSnapshot();
  });

  test('inlined ordered list', () => {
    render(
      <List variant={ListVariant.inline} component={ListComponent.ol}>
        <ListItem>Apple</ListItem>
        <ListItem>Banana</ListItem>
        <ListItem>Orange</ListItem>
      </List>
    );
    expect(screen.getByRole('list').className).toContain('pf-m-inline');
  });

  test('bordered list', () => {
    render(
      <List isBordered data-testid="list-test-id">
        <ListItems />
      </List>
    );
    expect(screen.getByTestId('list-test-id').className).toContain('pf-m-bordered');
  });

  test('plain list', () => {
    render(
      <List isPlain data-testid="list-test-id">
        <ListItems />
      </List>
    );
    expect(screen.getByTestId('list-test-id').className).toContain('pf-m-plain');
  });

  test('icon list', () => {
    render(
      <List isPlain data-testid="list-test-id">
        <ListItem icon={<BookOpen />}>Apple</ListItem>
        <ListItem icon={<Key />}>Banana</ListItem>
        <ListItem icon={<Desktop />}>Orange</ListItem>
      </List>
    );
    expect(screen.getByTestId('list-test-id').outerHTML).toMatchSnapshot();
  });

  test('icon large list', () => {
    render(
      <List iconSize="large" data-testid="list-test-id">
        <ListItem icon={<BookOpen />}>Apple</ListItem>
        <ListItem icon={<Key />}>Banana</ListItem>
        <ListItem icon={<Desktop />}>Orange</ListItem>
      </List>
    );
    expect(screen.getByTestId('list-test-id').outerHTML).toMatchSnapshot();
  });
});
