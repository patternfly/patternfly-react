import * as React from 'react';
import { shallow } from 'enzyme';
import { CheckboxSelectGroup } from '../CheckboxSelectGroup';
// any missing imports can usually be resolved by adding them here
import {  } from '..';

it('CheckboxSelectGroup should match snapshot (auto-generated)', () => {
  const view = shallow(
    <CheckboxSelectGroup
      children={[]}
			className={"''"}
			label={"''"}
			titleId={"''"}
    />);
  expect(view).toMatchSnapshot();
});

describe('checkbox select options', () => {
  test('renders with children successfully', () => {
    const view = shallow(
      <CheckboxSelectGroup label="test">
        <div>child</div>
      </CheckboxSelectGroup>
    );
    expect(view).toMatchSnapshot();
  });
});
