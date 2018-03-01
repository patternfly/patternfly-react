import React from 'react';
import { mount } from 'enzyme';
import { DisposableLabel } from './index';
import { MockLabelRemove } from './__mocks__/mockLabelExamples';

test('Label renders properly', () => {
  const component = mount(
    <DisposableLabel type="default">Some text</DisposableLabel>
  );
  expect(component.render()).toMatchSnapshot();
});

test('Label is removed via function', () => {
  const component = mount(<MockLabelRemove />);
  expect(component.instance().state.types).toHaveLength(5);
  component.instance().removeMe(1);
  expect(component.instance().state.types).toHaveLength(4);
});
