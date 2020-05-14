import React from 'react';
import { shallow, mount } from 'enzyme';
import { Chip, ChipGroup } from '../index';

describe('ChipGroup', () => {
  test('chip group default', () => {
    const view = shallow(
      <ChipGroup>
        <Chip>1.1</Chip>
      </ChipGroup>
    );

    expect(view).toMatchSnapshot();
  });

  test('chip group with category', () => {
    const view = shallow(
      <ChipGroup categoryName="category">
        <Chip>1.1</Chip>
      </ChipGroup>
    );
    expect(view).toMatchSnapshot();
  });

  test('chip group with closable category', () => {
    const view = shallow(
      <ChipGroup categoryName="category" isClosable>
        <Chip>1.1</Chip>
      </ChipGroup>
    );
    expect(view).toMatchSnapshot();
  });

  test('chip group expanded', () => {
    const view = mount(
      <ChipGroup>
        <Chip>1</Chip>
        <Chip>2</Chip>
        <Chip>3</Chip>
        <Chip>4</Chip>
      </ChipGroup>
    );
    const overflowButton = view.find('.pf-m-overflow .pf-c-chip__text');
    expect(overflowButton.text()).toBe('1 more');
    overflowButton.simulate('click');
    expect(overflowButton.text()).toBe('Show Less');
  });

  test('chip group will not render if no children passed', () => {
    const view = shallow(<ChipGroup />);
    expect(view.html()).toBeNull();
  });

  test('chip group with category and tooltip', () => {
    const view = shallow(
      <ChipGroup categoryName="A very long category name">
        <Chip>1.1</Chip>
      </ChipGroup>
    );
    expect(view).toMatchSnapshot();
  });
});
