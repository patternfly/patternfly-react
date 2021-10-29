import React from 'react';
import { shallow, mount } from 'enzyme';
import { Label } from '../../Label';
import { LabelGroup } from '../index';

describe('LabelGroup', () => {
  test('label group default', () => {
    const view = shallow(
      <LabelGroup>
        <Label>1.1</Label>
      </LabelGroup>
    );

    expect(view).toMatchSnapshot();
  });

  test('label group with category', () => {
    const view = shallow(
      <LabelGroup categoryName="category">
        <Label>1.1</Label>
      </LabelGroup>
    );
    expect(view).toMatchSnapshot();
  });

  test('label group with closable category', () => {
    const view = shallow(
      <LabelGroup categoryName="category" isClosable>
        <Label>1.1</Label>
      </LabelGroup>
    );
    expect(view).toMatchSnapshot();
  });

  test('label group expanded', () => {
    const view = mount(
      <LabelGroup>
        <Label>1</Label>
        <Label>2</Label>
        <Label>3</Label>
        <Label>4</Label>
      </LabelGroup>
    );
    const overflowButton = view.find('.pf-m-overflow .pf-c-label__content');
    expect(overflowButton.text()).toBe('1 more');
    overflowButton.simulate('click');
    expect(overflowButton.text()).toBe('Show Less');
  });

  test('label group will not render if no children passed', () => {
    const view = shallow(<LabelGroup />);
    expect(view.html()).toBeNull();
  });

  test('label group with category and tooltip', () => {
    const view = shallow(
      <LabelGroup categoryName="A very long category name">
        <Label>1.1</Label>
      </LabelGroup>
    );
    expect(view).toMatchSnapshot();
  });

  test('label group compact', () => {
    const view = shallow(
      <LabelGroup isCompact>
        <Label isCompact>1</Label>
        <Label isCompact>2</Label>
        <Label isCompact>3</Label>
        <Label isCompact>4</Label>
      </LabelGroup>
    );
    expect(view).toMatchSnapshot();
  });
});
