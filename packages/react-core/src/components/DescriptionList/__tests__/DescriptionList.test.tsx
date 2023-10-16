import React from 'react';
import { render, screen } from '@testing-library/react';
import { DescriptionList } from '../DescriptionList';
import { DescriptionListGroup } from '../DescriptionListGroup';
import { DescriptionListTerm } from '../DescriptionListTerm';
import { DescriptionListDescription } from '../DescriptionListDescription';
import { DescriptionListTermHelpText } from '../DescriptionListTermHelpText';
import { DescriptionListTermHelpTextButton } from '../DescriptionListTermHelpTextButton';

import styles from '@patternfly/react-styles/css/components/DescriptionList/description-list';

test('renders to match snapshot', () => {
  const { asFragment } = render(<DescriptionList aria-label="list" />);
  expect(screen.getByLabelText('list')).toBeInTheDocument();
  expect(asFragment()).toMatchSnapshot();
});

test('renders custom className', () => {
  render(<DescriptionList aria-label="list" className="custom" />);
  expect(screen.getByLabelText('list')).toHaveClass('custom');
});

test('renders 1Col on all breakpoints', () => {
  render(
    <DescriptionList
      aria-label="list"
      columnModifier={{ default: '1Col', sm: '1Col', md: '1Col', lg: '1Col', xl: '1Col', '2xl': '1Col' }}
    />
  );
  expect(screen.getByLabelText('list')).toHaveClass(
    styles.modifiers['1Col'],
    styles.modifiers['1ColOnSm'],
    styles.modifiers['1ColOnMd'],
    styles.modifiers['1ColOnLg'],
    styles.modifiers['1ColOnXl'],
    styles.modifiers['1ColOn_2xl']
  );
});

test('renders 2Col on all breakpoints', () => {
  render(
    <DescriptionList
      aria-label="list"
      columnModifier={{ default: '2Col', sm: '2Col', md: '2Col', lg: '2Col', xl: '2Col', '2xl': '2Col' }}
    />
  );
  expect(screen.getByLabelText('list')).toHaveClass(
    styles.modifiers['2Col'],
    styles.modifiers['2ColOnSm'],
    styles.modifiers['2ColOnMd'],
    styles.modifiers['2ColOnLg'],
    styles.modifiers['2ColOnXl'],
    styles.modifiers['2ColOn_2xl']
  );
});

test('renders 3Col on all breakpoints', () => {
  render(
    <DescriptionList
      aria-label="list"
      columnModifier={{ default: '3Col', sm: '3Col', md: '3Col', lg: '3Col', xl: '3Col', '2xl': '3Col' }}
    />
  );
  expect(screen.getByLabelText('list')).toHaveClass(
    styles.modifiers['3Col'],
    styles.modifiers['3ColOnSm'],
    styles.modifiers['3ColOnMd'],
    styles.modifiers['3ColOnLg'],
    styles.modifiers['3ColOnXl'],
    styles.modifiers['3ColOn_2xl']
  );
});

test(`renders ${styles.modifiers.horizontal} when isHorizontal = true`, () => {
  render(<DescriptionList aria-label="list" isHorizontal />);
  expect(screen.getByLabelText('list')).toHaveClass(styles.modifiers.horizontal);
});

test(`renders ${styles.modifiers.compact} when isCompact = true`, () => {
  render(<DescriptionList aria-label="list" isCompact />);
  expect(screen.getByLabelText('list')).toHaveClass(styles.modifiers.compact);
});

test(`renders ${styles.modifiers.horizontal} and ${styles.modifiers.fluid} when isFluid = true`, () => {
  render(<DescriptionList aria-label="list" isFluid />);
  expect(screen.getByLabelText('list')).toHaveClass(styles.modifiers.fluid, styles.modifiers.horizontal);
});

test('renders alignment breakpoints', () => {
  render(
    <DescriptionList
      aria-label="list"
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
  expect(screen.getByLabelText('list')).toHaveClass(
    styles.modifiers.horizontal,
    styles.modifiers.horizontalOnSm,
    styles.modifiers.verticalOnMd,
    styles.modifiers.horizontalOnLg,
    styles.modifiers.verticalOnXl,
    styles.modifiers.horizontalOn_2xl
  );
});

test(`renders ${styles.modifiers.autoColumnWidths} when isAutoColumnWidths = true`, () => {
  render(<DescriptionList aria-label="list" isAutoColumnWidths />);
  expect(screen.getByLabelText('list')).toHaveClass(styles.modifiers.autoColumnWidths);
});

test(`renders ${styles.modifiers.inlineGrid} when isInlineGrid = true`, () => {
  render(<DescriptionList aria-label="list" isInlineGrid />);
  expect(screen.getByLabelText('list')).toHaveClass(styles.modifiers.inlineGrid);
});

test(`renders ${styles.modifiers.autoFit} when isAutoFit = true`, () => {
  render(<DescriptionList aria-label="list" isAutoFit />);
  expect(screen.getByLabelText('list')).toHaveClass(styles.modifiers.autoFit);
});

test(`renders ${styles.modifiers.fillColumns} when isFillColumns = true`, () => {
  render(<DescriptionList aria-label="list" isFillColumns />);
  expect(screen.getByLabelText('list')).toHaveClass(styles.modifiers.fillColumns);
});

test(`renders ${styles.modifiers.displayLg} when displaySize = lg`, () => {
  render(<DescriptionList aria-label="list" displaySize="lg" />);
  expect(screen.getByLabelText('list')).toHaveClass(styles.modifiers.displayLg);
});

test(`renders ${styles.modifiers.display_2xl} when displaySize = 2xl`, () => {
  render(<DescriptionList aria-label="list" displaySize="2xl" />);
  expect(screen.getByLabelText('list')).toHaveClass(styles.modifiers.display_2xl);
});

test('DescriptionListTerm renders to match snapshot', () => {
  const { asFragment } = render(
    <DescriptionListTerm key="term-id-1" aria-labelledby="term-1">
      test
    </DescriptionListTerm>
  );
  expect(asFragment()).toMatchSnapshot();
});

test('DescriptionListTerm renders custom className', () => {
  render(<DescriptionListTerm className="custom">test</DescriptionListTerm>);
  expect(screen.getByText('test').parentElement).toHaveClass('custom');
});

test('DescriptionListTerm renders icon', () => {
  render(<DescriptionListTerm icon={<div>icon</div>}>test</DescriptionListTerm>);
  expect(screen.getByText('icon').parentElement).toHaveClass(styles.descriptionListTermIcon);
});

test('DescriptioinListTermHelpText renders to match snapshot', () => {
  const { asFragment } = render(
    <DescriptionListTermHelpText>
      <DescriptionListTermHelpTextButton>test</DescriptionListTermHelpTextButton>
    </DescriptionListTermHelpText>
  );
  expect(asFragment()).toMatchSnapshot();
});

test('DescriptioinListTermHelpText renders custom className', () => {
  render(
    <DescriptionListTermHelpText className="custom" aria-label="help-text">
      <DescriptionListTermHelpTextButton>test</DescriptionListTermHelpTextButton>
    </DescriptionListTermHelpText>
  );
  expect(screen.getByLabelText('help-text')).toHaveClass('custom');
});

test('DescriptioinListTermHelpTextButton renders custom className', () => {
  render(
    <DescriptionListTermHelpText>
      <DescriptionListTermHelpTextButton className="custom">test</DescriptionListTermHelpTextButton>
    </DescriptionListTermHelpText>
  );
  expect(screen.getByText('test')).toHaveClass('custom');
});

test('DescriptionListGroup renders to match snapshot', () => {
  const { asFragment } = render(<DescriptionListGroup>test</DescriptionListGroup>);
  expect(asFragment()).toMatchSnapshot();
});

test('DescriptionListGroup renders custom className', () => {
  render(<DescriptionListGroup className="custom">test</DescriptionListGroup>);
  expect(screen.getByText('test')).toHaveClass('custom');
});

test('DescriptionListDescription renders to match snapshot', () => {
  const { asFragment } = render(<DescriptionListDescription>test</DescriptionListDescription>);
  expect(asFragment()).toMatchSnapshot();
});

test('DescriptionListDescription renders custom className', () => {
  render(<DescriptionListDescription className="custom">test</DescriptionListDescription>);
  expect(screen.getByText('test').parentElement).toHaveClass('custom');
});
