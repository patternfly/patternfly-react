import * as React from 'react';
import { mount } from 'enzyme';
import { ActionListItem } from '../ActionListItem';

describe('action list item', () => {
  test('renders successfully', () => {
    const view = mount(<ActionListItem>test</ActionListItem>);
    expect(view).toMatchSnapshot();
  });
});
