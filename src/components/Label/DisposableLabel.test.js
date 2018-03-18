import React from 'react';
import renderer from 'react-test-renderer';
import { DisposableLabel } from './index';
import { MockLabelRemove } from './__mocks__/mockLabelExamples';

test('Label renders properly', () => {
  const component = renderer.create(
    <DisposableLabel type="default">Some text</DisposableLabel>
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Label is removed via function', () => {
  const component = renderer.create(<MockLabelRemove />);
  expect(component.getInstance().state.types).toHaveLength(5);
  component.getInstance().removeMe(1);
  expect(component.getInstance().state.types).toHaveLength(4);
});
