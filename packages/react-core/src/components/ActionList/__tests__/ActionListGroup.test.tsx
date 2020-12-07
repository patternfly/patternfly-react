import * as React from 'react';
import { mount } from 'enzyme';
import { ActionListGroup } from '../ActionListGroup';

describe('action list group', () => {
  test('renders successfully', () => {
    const view = mount(<ActionListGroup>test</ActionListGroup>);
    expect(view).toMatchSnapshot();
  });
});
