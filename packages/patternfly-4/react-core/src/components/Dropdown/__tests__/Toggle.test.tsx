import * as React from 'react';
import { shallow, mount } from 'enzyme';
import { Toggle } from '../Toggle';
import { KebabToggle } from '../KebabToggle';
import { DropdownToggle } from '../DropdownToggle';

it('Toggle should match snapshot (auto-generated)', () => {
  const view = shallow(
    <Toggle
      id={"string"}
			type={'button'}
			children={<div>ReactNode</div>}
			className={"''"}
			isOpen={false}
			onToggle={() => {}}
			onEnter={() => {}}
			parentRef={'any'}
			isFocused={false}
			isHovered={false}
			isActive={false}
			isDisabled={false}
			isPlain={false}
			isPrimary={false}
			isSplitButton={false}
			ariaHasPopup={true}
    />);
  expect(view).toMatchSnapshot();
});

test('Dropdown toggle', () => {
  const view = mount(<DropdownToggle id="Dropdown Toggle">Dropdown</DropdownToggle>);
  expect(view).toMatchSnapshot();
});
test('Kebab toggle', () => {
  const view = mount(<KebabToggle id="Dropdown Toggle" />);
  expect(view).toMatchSnapshot();
});
