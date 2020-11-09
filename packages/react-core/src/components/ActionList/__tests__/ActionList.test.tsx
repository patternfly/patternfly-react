import * as React from 'react';
import { mount } from 'enzyme';
import { ActionList } from '../ActionList';

describe('action list', () => {
  test('renders successfully', () => {
    const view = mount(<ActionList>test</ActionList>);
    expect(view).toMatchSnapshot();
  });
  test('hasIcons flag adds modifier', () => {
    const view = mount(<ActionList hasIcons>test</ActionList>);
    expect(view).toMatchSnapshot();
  });
});
