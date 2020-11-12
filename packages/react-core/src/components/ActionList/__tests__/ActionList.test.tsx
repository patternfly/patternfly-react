import * as React from 'react';
import { mount } from 'enzyme';
import { ActionList } from '../ActionList';

describe('action list', () => {
  test('renders successfully', () => {
    const view = mount(<ActionList>test</ActionList>);
    expect(view).toMatchSnapshot();
  });
  test('isIconList flag adds modifier', () => {
    const view = mount(<ActionList isIconList>test</ActionList>);
    expect(view).toMatchSnapshot();
  });
});
