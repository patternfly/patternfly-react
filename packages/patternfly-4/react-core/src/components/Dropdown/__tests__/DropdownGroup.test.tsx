import * as React from 'react';
import { shallow } from 'enzyme';
import { DropdownGroup } from '../DropdownGroup';
// any missing imports can usually be resolved by adding them here
import {  } from '..';

it('DropdownGroup should match snapshot (auto-generated)', () => {
  const view = shallow(
    <DropdownGroup
      children={<>ReactNode</>}
			className={"''"}
			label={''}
    />);
  expect(view).toMatchSnapshot();
});

describe('dropdown groups', () => {
  test('basic render', () => {
    const view = shallow(<DropdownGroup label="Group 1">Something</DropdownGroup>);
    expect(view).toMatchSnapshot();
  });
});