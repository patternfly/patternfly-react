import * as React from 'react';
import { shallow } from 'enzyme';
import { SelectGroup } from '../SelectGroup';
// any missing imports can usually be resolved by adding them here
import {  } from '..';

it('SelectGroup should match snapshot (auto-generated)', () => {
  const view = shallow(
    <SelectGroup
      children={[]}
			className={"''"}
			label={"''"}
			titleId={"''"}
    />);
  expect(view).toMatchSnapshot();
});

describe('select group', () => {
  test('renders with children successfully', () => {
    const view = shallow(
      <SelectGroup label="test">
        <div>child</div>
      </SelectGroup>
    );
    expect(view).toMatchSnapshot();
  });
});