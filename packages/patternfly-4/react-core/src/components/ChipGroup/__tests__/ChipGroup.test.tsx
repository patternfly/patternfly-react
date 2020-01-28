import * as React from 'react';
import { shallow, mount } from 'enzyme';
import { ChipGroup, Chip, ChipGroupToolbarItem } from '..';

it('ChipGroup should match snapshot (auto-generated)', () => {
  const view = shallow(
    <ChipGroup
      children={<div>ReactNode</div>}
			className={"''"}
			defaultIsOpen={false}
			expandedText={"'Show Less'"}
			collapsedText={"'${remaining} more'"}
			withToolbar={false}
			headingLevel={'h1'}
			numChips={3}
    />);
  expect(view).toMatchSnapshot();
});

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

  test('chip group with closable toolbar', () => {
    const view = shallow(
      <ChipGroup withToolbar>
        <ChipGroupToolbarItem isClosable>
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
});
