import * as React from 'react';
import { shallow } from 'enzyme';
import { StackItem } from '../StackItem';
// any missing imports can usually be resolved by adding them here
import {  } from '..';

it('StackItem should match snapshot (auto-generated)', () => {
  const view = shallow(
    <StackItem
      isFilled={false}
			children={<>ReactNode</>}
			className={"''"}
    />);
  expect(view).toMatchSnapshot();
});
