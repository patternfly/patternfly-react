import React from 'react';
import { mount } from 'enzyme';
import List from './List';
import ListItem from './ListItem';

const ListItems = () => (
  <React.Fragment>
    <List>
      <ListItem>First</ListItem>
      <ListItem>Second</ListItem>
      <ListItem>Third</ListItem>
    </List>
  </React.Fragment>
);

describe('list', () => {
  test('simple list', () => {
    const view = mount(
      <List>
        <ListItems />
      </List>
    );
    expect(view).toMatchSnapshot();
  });

  test('inline list', () => {
    const view = mount(
      <List variant="inline">
        <ListItems />
      </List>
    );
    expect(view).toMatchSnapshot();
  });

  test('grid list', () => {
    const view = mount(
      <List variant="grid">
        <ListItems />
      </List>
    );
    expect(view).toMatchSnapshot();
  });
});
