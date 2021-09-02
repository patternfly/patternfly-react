import React from 'react';
import { shallow, mount } from 'enzyme';
import { DescriptionList } from '../DescriptionList';
import { DescriptionListGroup } from '../DescriptionListGroup';
import { DescriptionListTerm } from '../DescriptionListTerm';
import { DescriptionListDescription } from '../DescriptionListDescription';
import { DescriptionListTermHelpText } from '../DescriptionListTermHelpText';
import { DescriptionListTermHelpTextButton } from '../DescriptionListTermHelpTextButton';

describe('Description List', () => {
  test('default', () => {
    const view = shallow(<DescriptionList />);
    expect(view).toMatchSnapshot();
  });

  test('1 col on all breakpoints', () => {
    const view = shallow(
      <DescriptionList columnModifier={{ default: '1Col', md: '1Col', lg: '1Col', xl: '1Col', '2xl': '1Col' }} />
    );
    expect(view).toMatchSnapshot();
  });

  test('2 col on all breakpoints', () => {
    const view = shallow(
      <DescriptionList columnModifier={{ default: '2Col', md: '2Col', lg: '2Col', xl: '2Col', '2xl': '2Col' }} />
    );
    expect(view).toMatchSnapshot();
  });

  test('3 col on all breakpoints', () => {
    const view = shallow(
      <DescriptionList columnModifier={{ default: '3Col', md: '3Col', lg: '3Col', xl: '3Col', '2xl': '3Col' }} />
    );
    expect(view).toMatchSnapshot();
  });

  test('Horizontal Description List', () => {
    const view = shallow(<DescriptionList isHorizontal />);
    expect(view).toMatchSnapshot();
  });

  test('Compact Description List', () => {
    const view = shallow(<DescriptionList isCompact />);
    expect(view).toMatchSnapshot();
  });

  test('Compact Horizontal Description List', () => {
    const view = shallow(<DescriptionList isCompact isHorizontal />);
    expect(view).toMatchSnapshot();
  });

  test('Fluid Horizontal Description List', () => {
    const view = shallow(<DescriptionList isFluid isHorizontal />);
    expect(view).toMatchSnapshot();
  });

  test('alignment breakpoints', () => {
    const view = mount(
      <DescriptionList
        isHorizontal
        orientation={{
          sm: 'horizontal',
          md: 'vertical',
          lg: 'horizontal',
          xl: 'vertical',
          '2xl': 'horizontal'
        }}
      />
    );
    expect(view).toMatchSnapshot();
  });

  test('Auto Column Widths Description List', () => {
    const view = shallow(<DescriptionList isAutoColumnWidths />);
    expect(view).toMatchSnapshot();
  });

  test('Inline Grid Description List', () => {
    const view = shallow(<DescriptionList isInlineGrid />);
    expect(view).toMatchSnapshot();
  });

  test('Auto fit Description List', () => {
    const view = shallow(<DescriptionList isAutoFit />);
    expect(view).toMatchSnapshot();
  });

  test('Auto fit with responsive grid Description List', () => {
    const view = shallow(
      <DescriptionList isAutoFit autoFitMinModifier={{ md: '100px', lg: '150px', xl: '200px', '2xl': '300px' }} />
    );
    expect(view).toMatchSnapshot();
  });

  test('Term default', () => {
    const view = shallow(
      <DescriptionListTerm key="term-id-1" aria-labelledby="term-1">
        test
      </DescriptionListTerm>
    );
    expect(view).toMatchSnapshot();
  });

  test('Term helper text', () => {
    const view = shallow(
      <DescriptionListTermHelpText key="term-id-1" aria-labelledby="term-1">
        <DescriptionListTermHelpTextButton>test</DescriptionListTermHelpTextButton>
      </DescriptionListTermHelpText>
    );
    expect(view).toMatchSnapshot();
  });

  test('Group', () => {
    const view = shallow(
      <DescriptionListGroup className="custom-description-list-group" aria-labelledby="group-1">
        test
      </DescriptionListGroup>
    );
    expect(view).toMatchSnapshot();
  });

  test('Description', () => {
    const view = shallow(
      <DescriptionListDescription className="custom-description-list-description" aria-labelledby="description-1">
        test
      </DescriptionListDescription>
    );
    expect(view).toMatchSnapshot();
  });
});
