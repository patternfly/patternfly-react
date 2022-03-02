import React from 'react';
import { render } from '@testing-library/react';
import { mount } from 'enzyme';
import { ChipGroup } from '../index';
import { Chip } from '../../Chip';

describe('ChipGroup', () => {
  test('chip group default', () => {
    const view = render(
      <ChipGroup>
        <Chip>1.1</Chip>
      </ChipGroup>
    );

    expect(view.container).toMatchSnapshot();
  });

  test('chip group with category', () => {
    const view = render(
      <ChipGroup categoryName="category">
        <Chip>1.1</Chip>
      </ChipGroup>
    );
    expect(view.container).toMatchSnapshot();
  });

  test('chip group with closable category', () => {
    const view = render(
      <ChipGroup categoryName="category" isClosable>
        <Chip>1.1</Chip>
      </ChipGroup>
    );
    expect(view.container).toMatchSnapshot();
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
    const view = mount(<ChipGroup />);
    expect(view.html()).toBeNull();
  });

  test('chip group with category and tooltip', () => {
    const view = render(
      <ChipGroup categoryName="A very long category name">
        <Chip>1.1</Chip>
      </ChipGroup>
    );
    expect(view.container).toMatchSnapshot();
  });
});
