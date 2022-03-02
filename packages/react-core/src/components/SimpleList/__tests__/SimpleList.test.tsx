import * as React from 'react';
import { render } from '@testing-library/react';
import { mount } from 'enzyme';
import { SimpleList } from '../SimpleList';
import { SimpleListGroup } from '../SimpleListGroup';
import { SimpleListItem } from '../SimpleListItem';

const items = [
  <SimpleListItem key="i1">Item 1</SimpleListItem>,
  <SimpleListItem key="i2">Item 2</SimpleListItem>,
  <SimpleListItem key="i3">Item 3</SimpleListItem>
];

const anchors = [
  <SimpleListItem key="i1" component="a">
    Item 1
  </SimpleListItem>,
  <SimpleListItem key="i2" component="a">
    Item 2
  </SimpleListItem>,
  <SimpleListItem key="i3" component="a">
    Item 3
  </SimpleListItem>
];

describe('SimpleList', () => {
  test('renders content', () => {
    const view = render(<SimpleList>{items}</SimpleList>);
    expect(view.container).toMatchSnapshot();
  });

  test('renders grouped content', () => {
    const view = render(
      <SimpleList>
        <SimpleListGroup title="Group 1">{items}</SimpleListGroup>
      </SimpleList>
    );
    expect(view.container).toMatchSnapshot();
  });

  test('onSelect is called when item is selected', () => {
    const selectSpy = jest.fn();
    const view = mount(<SimpleList onSelect={selectSpy}>{items}</SimpleList>);
    view
      .find('button')
      .first()
      .simulate('click', { target: { value: 'r' } });
    view.update();
    expect(selectSpy).toBeCalled();
    expect(view).toMatchSnapshot();
  });

  test('renders anchor content', () => {
    const view = render(<SimpleList>{anchors}</SimpleList>);
    expect(view.container).toMatchSnapshot();
  });

  test('onSelect is called when anchor item is selected', () => {
    const selectSpy = jest.fn();
    const view = mount(<SimpleList onSelect={selectSpy}>{anchors}</SimpleList>);
    view
      .find('a')
      .first()
      .simulate('click', { target: { value: 'r' } });
    view.update();
    expect(selectSpy).toBeCalled();
    expect(view).toMatchSnapshot();
  });
});

describe('SimpleListGroup', () => {
  test('renders content', () => {
    const view = render(<SimpleListGroup title="Group 1">{items}</SimpleListGroup>);
    expect(view.container).toMatchSnapshot();
  });
});

describe('SimpleListItem', () => {
  test('renders content', () => {
    const view = render(<SimpleListItem>Item 1</SimpleListItem>);
    expect(view.container).toMatchSnapshot();
  });

  test('renders anchor', () => {
    const view = render(<SimpleListItem component="a">Item 1</SimpleListItem>);
    expect(view.container).toMatchSnapshot();
  });
});
