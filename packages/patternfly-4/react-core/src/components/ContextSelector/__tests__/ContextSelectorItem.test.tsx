import * as React from 'react';
import { shallow, mount } from 'enzyme';
import { ContextSelectorItem } from '../ContextSelectorItem';
// any missing imports can usually be resolved by adding them here
import {  } from '..';

it('ContextSelectorItem should match snapshot (auto-generated)', () => {
  const view = shallow(
    <ContextSelectorItem
      children={<>ReactNode</>}
			className={"''"}
			isDisabled={false}
			isHovered={false}
			onClick={(): any => undefined}
			index={42}
			sendRef={() => {}}
    />);
  expect(view).toMatchSnapshot();
});

test('Renders ContextSelectorItem', () => {
  const view = shallow(
    <ContextSelectorItem sendRef={jest.fn()} index={0}>
      My Project
    </ContextSelectorItem>
  );
  expect(view).toMatchSnapshot();
});

test('Renders ContextSelectorItem disabled and hovered', () => {
  const view = shallow(
    <ContextSelectorItem isDisabled isHovered sendRef={jest.fn()} index={0}>
      My Project
    </ContextSelectorItem>
  );
  expect(view).toMatchSnapshot();
});

test('Verify onClick is called ', () => {
  const mockfn = jest.fn();
  const view = mount(
    <ContextSelectorItem isHovered onClick={mockfn} sendRef={jest.fn()} index={0}>
      My Project
    </ContextSelectorItem>
  );
  view
    .find('button')
    .at(0)
    .simulate('click');
  expect(mockfn.mock.calls).toHaveLength(1);
});
