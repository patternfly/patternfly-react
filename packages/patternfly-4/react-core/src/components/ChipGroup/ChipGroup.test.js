import React from 'react';
import { shallow, mount } from 'enzyme';
import { Chip, ChipGroup, ChipGroupToolbarItem } from './index';

describe('ChipGroup', () => {
  test('chip group default', () => {
    const view = shallow(
      <ChipGroup>
        <Chip>1.1</Chip>
      </ChipGroup>
    );

    expect(view).toMatchSnapshot();
  });

  test('chip group with toolbar', () => {
    const view = shallow(
      <ChipGroup withToolbar>
        <ChipGroupToolbarItem>
          <Chip>1.1</Chip>
        </ChipGroupToolbarItem>
      </ChipGroup>
    );
    expect(view).toMatchSnapshot();
  });

  test('chip group expanded', () => {
    const view = mount(
      <ChipGroup>
        <Chip>1</Chip>
        <Chip>2</Chip>
      </ChipGroup>
    );
    const overflowButton = view.find('.pf-m-overflow .pf-c-chip__text');
    expect(overflowButton.text()).toBe('1 more');
    overflowButton.simulate('click');
    expect(overflowButton.text()).toBe('Show Less');
  });

  test('chip group will not render if no children passed', () => {
    const view = shallow(<ChipGroup />);
    expect(view.equals(null)).toBe(true);
  });
});
