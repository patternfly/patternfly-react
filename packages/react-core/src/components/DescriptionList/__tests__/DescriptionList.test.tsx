import React from 'react';
import { render } from '@testing-library/react';
import { DescriptionList } from '../DescriptionList';
import { DescriptionListGroup } from '../DescriptionListGroup';
import { DescriptionListTerm } from '../DescriptionListTerm';
import { DescriptionListDescription } from '../DescriptionListDescription';
import { DescriptionListTermHelpText } from '../DescriptionListTermHelpText';
import { DescriptionListTermHelpTextButton } from '../DescriptionListTermHelpTextButton';

describe('Description List', () => {
  test('default', () => {
    const view = render(<DescriptionList />);
    expect(view.container).toMatchSnapshot();
  });

  test('1 col on all breakpoints', () => {
    const view = render(
      <DescriptionList columnModifier={{ default: '1Col', md: '1Col', lg: '1Col', xl: '1Col', '2xl': '1Col' }} />
    );
    expect(view.container).toMatchSnapshot();
  });

  test('2 col on all breakpoints', () => {
    const view = render(
      <DescriptionList columnModifier={{ default: '2Col', md: '2Col', lg: '2Col', xl: '2Col', '2xl': '2Col' }} />
    );
    expect(view.container).toMatchSnapshot();
  });

  test('3 col on all breakpoints', () => {
    const view = render(
      <DescriptionList columnModifier={{ default: '3Col', md: '3Col', lg: '3Col', xl: '3Col', '2xl': '3Col' }} />
    );
    expect(view.container).toMatchSnapshot();
  });

  test('Horizontal Description List', () => {
    const view = render(<DescriptionList isHorizontal />);
    expect(view.container).toMatchSnapshot();
  });

  test('Compact Description List', () => {
    const view = render(<DescriptionList isCompact />);
    expect(view.container).toMatchSnapshot();
  });

  test('Compact Horizontal Description List', () => {
    const view = render(<DescriptionList isCompact isHorizontal />);
    expect(view.container).toMatchSnapshot();
  });

  test('Fluid Horizontal Description List', () => {
    const view = render(<DescriptionList isFluid isHorizontal />);
    expect(view.container).toMatchSnapshot();
  });

  test('alignment breakpoints', () => {
    const view = render(
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
    expect(view.container).toMatchSnapshot();
  });

  test('Auto Column Widths Description List', () => {
    const view = render(<DescriptionList isAutoColumnWidths />);
    expect(view.container).toMatchSnapshot();
  });

  test('Inline Grid Description List', () => {
    const view = render(<DescriptionList isInlineGrid />);
    expect(view.container).toMatchSnapshot();
  });

  test('Auto fit Description List', () => {
    const view = render(<DescriptionList isAutoFit />);
    expect(view.container).toMatchSnapshot();
  });

  test('Auto fit with responsive grid Description List', () => {
    const view = render(
      <DescriptionList isAutoFit autoFitMinModifier={{ md: '100px', lg: '150px', xl: '200px', '2xl': '300px' }} />
    );
    expect(view.container).toMatchSnapshot();
  });

  test('Term default', () => {
    const view = render(
      <DescriptionListTerm key="term-id-1" aria-labelledby="term-1">
        test
      </DescriptionListTerm>
    );
    expect(view.container).toMatchSnapshot();
  });

  test('Term helper text', () => {
    const view = render(
      <DescriptionListTermHelpText key="term-id-1" aria-labelledby="term-1">
        <DescriptionListTermHelpTextButton>test</DescriptionListTermHelpTextButton>
      </DescriptionListTermHelpText>
    );
    expect(view.container).toMatchSnapshot();
  });

  test('Group', () => {
    const view = render(
      <DescriptionListGroup className="custom-description-list-group" aria-labelledby="group-1">
        test
      </DescriptionListGroup>
    );
    expect(view.container).toMatchSnapshot();
  });

  test('Description', () => {
    const view = render(
      <DescriptionListDescription className="custom-description-list-description" aria-labelledby="description-1">
        test
      </DescriptionListDescription>
    );
    expect(view.container).toMatchSnapshot();
  });
});
