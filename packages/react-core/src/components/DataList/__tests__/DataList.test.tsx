import React from 'react';

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { DataList } from '../DataList';
import { DataListItem } from '../DataListItem';
import { DataListAction } from '../DataListAction';
import { DataListCell } from '../DataListCell';
import { DataListToggle } from '../DataListToggle';
import { DataListItemCells } from '../DataListItemCells';
import { DataListItemRow } from '../DataListItemRow';
import { DataListContent } from '../DataListContent';
import { Button } from '../../Button';

import styles from '@patternfly/react-styles/css/components/DataList/data-list';

test('Renders to match snapshot', () => {
  const { asFragment } = render(<DataList aria-label="list" />);
  expect(screen.getByLabelText('list')).toBeInTheDocument();
  expect(asFragment()).toMatchSnapshot();
});

test(`Renders ${styles.modifiers.compact} when isCompact = true`, () => {
  render(<DataList aria-label="list" isCompact />);
  expect(screen.getByLabelText('list')).toHaveClass(styles.modifiers.compact);
});

const gridBreakpointClasses = {
  none: styles.modifiers.gridNone,
  always: 'pf-m-grid',
  sm: styles.modifiers.gridSm,
  md: styles.modifiers.gridMd,
  lg: styles.modifiers.gridLg,
  xl: styles.modifiers.gridXl,
  '2xl': styles.modifiers.grid_2xl
};

['none', 'always', 'sm', 'md', 'lg', 'xl', '2xl'].forEach((oneBreakpoint) => {
  test(`Has breakpoint - ${oneBreakpoint} when gridBreakpoint is pased`, () => {
    render(<DataList aria-label="list" gridBreakpoint={oneBreakpoint as any} />);
    expect(screen.getByLabelText('list')).toHaveClass(gridBreakpointClasses[oneBreakpoint]);
  });
});

test(`Has breakpoint - 2xl when gridBreakpoint is pased`, () => {
  render(<DataList aria-label="list" gridBreakpoint="2xl" />);
  expect(screen.getByLabelText('list')).toHaveClass(styles.modifiers['grid_2xl']);
});

test('Renders custom class when passed', () => {
  render(<DataList key="list-id-1" className="data-list-custom" aria-label="list" />);
  expect(screen.getByLabelText('list')).toHaveClass('data-list-custom');
});

test('List renders with a hidden input to improve a11y when selectableRow is passed', () => {
  render(
    <DataList aria-label="this is a simple list" onSelectableRowChange={() => {}}>
      <DataListItem>
        <DataListItemRow aria-labelledby="test-id">
          <p id="test-id">Test</p>
        </DataListItemRow>
      </DataListItem>
    </DataList>
  );

  const selectableInput = screen.getByRole('radio', { hidden: true });

  expect(selectableInput).toBeInTheDocument();
});

test('List does not render with a hidden input to improve a11y when selectableRow is not passed', () => {
  render(
    <DataList aria-label="this is a simple list">
      <DataListItem>
        <DataListItemRow aria-labelledby="test-id">
          <p id="test-id">Test</p>
        </DataListItemRow>
      </DataListItem>
    </DataList>
  );

  const selectableInput = screen.queryByRole('radio', { hidden: true });

  expect(selectableInput).not.toBeInTheDocument();
});

test('List calls selectableRow.onChange when the selectable input changes', async () => {
  const mock = jest.fn();
  const user = userEvent.setup();

  render(
    <DataList aria-label="this is a simple list" onSelectableRowChange={mock} selectedDataListItemId="">
      <DataListItem id="item-test-id">
        <DataListItemRow aria-labelledby="test-id">
          <p id="test-id">Test</p>
        </DataListItemRow>
      </DataListItem>
    </DataList>
  );

  const selectableInput = screen.getByRole('radio', { hidden: true });
  await user.click(selectableInput);

  expect(mock).toHaveBeenCalled();
});

test('List does not call selectableRow.onChange when the selectable input is not changed', () => {
  const mock = jest.fn();

  render(
    <DataList aria-label="this is a simple list" onSelectableRowChange={mock} selectedDataListItemId="">
      <DataListItem id="item-test-id">
        <DataListItemRow aria-labelledby="test-id">
          <p id="test-id">Test</p>
        </DataListItemRow>
      </DataListItem>
    </DataList>
  );

  expect(mock).not.toHaveBeenCalled();
});

test('Item applies selectableInputAriaLabel to the hidden input', () => {
  render(
    <DataList aria-label="this is a simple list" onSelectableRowChange={() => {}}>
      <DataListItem selectableInputAriaLabel="Data list item label test">
        <DataListItemRow aria-labelledby="test-id">
          <p id="test-id">Test</p>
        </DataListItemRow>
      </DataListItem>
    </DataList>
  );

  const selectableInput = screen.getByRole('radio', { hidden: true });

  expect(selectableInput).toHaveAccessibleName('Data list item label test');
});

test('Item defaults to labelling its input using its aria-labelledby prop', () => {
  render(
    <DataList aria-label="this is a simple list" onSelectableRowChange={() => {}}>
      <DataListItem aria-labelledby="test-id">
        <p id="test-id">Test cell content</p>
      </DataListItem>
    </DataList>
  );

  const selectableInput = screen.getByRole('radio', { hidden: true });

  expect(selectableInput).toHaveAccessibleName('Test cell content');
});

test('Item prioritizes selectableInputAriaLabel over aria-labelledby prop', () => {
  render(
    <DataList aria-label="this is a simple list" onSelectableRowChange={() => {}}>
      <DataListItem aria-labelledby="test-id" selectableInputAriaLabel="Data list item label test">
        <p id="test-id">Test cell content</p>
      </DataListItem>
    </DataList>
  );

  const selectableInput = screen.getByRole('radio', { hidden: true });

  expect(selectableInput).toHaveAccessibleName('Data list item label test');
});

test('Item renders to match snapshot', () => {
  const { asFragment } = render(
    <DataListItem key="item-id-1" aria-labelledby="item-1">
      test
    </DataListItem>
  );
  expect(asFragment()).toMatchSnapshot();
});

test(`Item has ${styles.modifiers.expanded} when isExpanded is passed`, () => {
  render(
    <DataListItem aria-labelledby="item-1" isExpanded>
      test
    </DataListItem>
  );
  expect(screen.getByRole('listitem')).toHaveClass(styles.modifiers.expanded);
});

test('Item renders with custom class name', () => {
  render(
    <DataListItem className="data-list-item-custom" aria-labelledby="item-1">
      test
    </DataListItem>
  );
  expect(screen.getByRole('listitem')).toHaveClass('data-list-item-custom');
});

test('Item row renders to match snapshot', () => {
  const { asFragment } = render(<DataListItemRow>test</DataListItemRow>);
  expect(asFragment()).toMatchSnapshot();
});

test('Cell renders to match snapshot', () => {
  const { asFragment } = render(<DataListCell>Secondary</DataListCell>);
  expect(asFragment()).toMatchSnapshot();
});

test('Cells renders to match snapshot', () => {
  const { asFragment } = render(
    <DataListItemCells
      dataListCells={[
        <DataListCell key="list-id-1" id="primary-item" className="data-list-custom">
          Primary Id
        </DataListCell>,
        <DataListCell key="list-id-2" id="primary-item" className="data-list-custom">
          Primary Id 2
        </DataListCell>
      ]}
    />
  );
  expect(asFragment()).toMatchSnapshot();
});

test('Cell has width modifier when width is passed', () => {
  [
    { width: 1, class: '' },
    { width: 2, class: 'pf-m-flex-2' },
    { width: 3, class: 'pf-m-flex-3' },
    { width: 4, class: 'pf-m-flex-4' },
    { width: 5, class: 'pf-m-flex-5' }
  ].forEach((testCase, index) => {
    const testId = `cell-test-id-${index}`;

    render(
      <DataListCell data-testid={testId} width={testCase.width as any} key={index}>
        Primary Id
      </DataListCell>
    );

    const dataListCell = screen.getByTestId(testId);

    testCase.class === ''
      ? expect(dataListCell).toHaveClass('pf-v5-c-data-list__cell')
      : expect(dataListCell).toHaveClass(`pf-v5-c-data-list__cell ${testCase.class}`);
  });
});

test('Cell has text wrap modifiers when wrapModifier is passed', () => {
  [
    { wrapModifier: null as any, class: '' },
    { wrapModifier: 'breakWord', class: 'pf-m-break-word' },
    { wrapModifier: 'nowrap', class: 'pf-m-nowrap' },
    { wrapModifier: 'truncate', class: 'pf-m-truncate' }
  ].forEach((testCase, index) => {
    const testId = `cell-test-id-${index}`;

    render(
      <DataListCell data-testid={testId} wrapModifier={testCase.wrapModifier} key={index}>
        Primary Id
      </DataListCell>
    );

    const dataListCell = screen.getByTestId(testId);

    testCase.class === ''
      ? expect(dataListCell).toHaveClass('pf-v5-c-data-list__cell')
      : expect(dataListCell).toHaveClass(`pf-v5-c-data-list__cell ${testCase.class}`);
  });
});

test(`Cell has custom class when className is passed`, () => {
  render(
    <DataListCell data-testid="test" key={0} className="test-class">
      Primary Id
    </DataListCell>
  );
  expect(screen.getByTestId('test')).toHaveClass('test-class');
});

test(`Cell has ${styles.modifiers.alignRight} when alignRight is passed`, () => {
  render(
    <DataListCell data-testid="test" key={0} alignRight>
      Primary Id
    </DataListCell>
  );
  expect(screen.getByTestId('test')).toHaveClass(styles.modifiers.alignRight);
});

test(`Cell has ${styles.modifiers.icon} when isIcon is passed`, () => {
  render(
    <DataListCell data-testid="test" key={0} isIcon>
      Primary Id
    </DataListCell>
  );
  expect(screen.getByTestId('test')).toHaveClass(styles.modifiers.icon);
});

test(`Cell has ${styles.modifiers.noFill} when isFilled = false`, () => {
  render(
    <DataListCell data-testid="test" key={0} isFilled={false}>
      Primary Id
    </DataListCell>
  );
  expect(screen.getByTestId('test')).toHaveClass(styles.modifiers.noFill);
});

test('Toggle has aria label', () => {
  render(<DataListToggle aria-label="Toggle details for" id="ex-toggle2" />);

  expect(screen.getByRole('button')).not.toHaveAttribute('aria-labelledby');
  expect(screen.getByRole('button')).toHaveAttribute('aria-label', 'Toggle details for');
  expect(screen.getByRole('button')).toHaveAttribute('aria-expanded', 'false');
});

test('Toggle has aria-expanded set when isExpanded is passed', () => {
  render(<DataListToggle aria-label="Toggle details for" id="ex-toggle2" isExpanded />);
  expect(screen.getByRole('button')).toHaveAttribute('aria-expanded', 'true');
});

test('DataListAction renders to match snapshot', () => {
  const { asFragment } = render(
    <DataListAction aria-label="Actions" aria-labelledby="ex-action" id="ex-action">
      <Button id="delete-item-1">Delete</Button>
    </DataListAction>
  );
  expect(asFragment()).toMatchSnapshot();
});

test(`DataListAction has custom class when className is passed`, () => {
  render(
    <DataListAction aria-label="Actions" aria-labelledby="ex-action" id="ex-action" className="test-class">
      <Button id="delete-item-1">Delete</Button>
    </DataListAction>
  );
  expect(screen.getByRole('button').parentElement).toHaveClass('test-class');
});

test('DataListAction shows button with visibliity breakpoint set', () => {
  render(
    <DataListAction
      visibility={{ default: 'hidden', lg: 'visible' }}
      aria-labelledby="check-action-item2 check-action-action2"
      id="check-action-action2"
      aria-label="Actions"
    >
      <Button variant="primary">Primary</Button>
    </DataListAction>
  );

  expect(screen.getByRole('button').parentElement).toHaveClass('pf-m-hidden');
  expect(screen.getByRole('button').parentElement).toHaveClass('pf-m-visible-on-lg');
});

test('DataListAction hides button with visibility breakpoint set', () => {
  render(
    <DataListAction
      visibility={{ '2xl': 'hidden' }}
      aria-labelledby="check-action-item2 check-action-action2"
      id="check-action-action2"
      aria-label="Actions"
    >
      <Button variant="primary">Primary</Button>
    </DataListAction>
  );

  expect(screen.getByRole('button').parentElement).toHaveClass('pf-m-hidden-on-2xl');
});

test('DataListContent renders to match snapshot', () => {
  const { asFragment } = render(<DataListContent aria-label="Primary Content Details"> test</DataListContent>);
  expect(asFragment()).toMatchSnapshot();
});

test(`DataListContent has ${styles.modifiers.noPadding} when hasNoPadding is passed`, () => {
  render(
    <DataListContent aria-label="Primary Content Details" hidden hasNoPadding>
      test
    </DataListContent>
  );
  expect(screen.getByText('test')).toHaveClass(styles.modifiers.noPadding);
});

test(`DataListContent has hidden property when isHidden is passed`, () => {
  render(
    <DataListContent data-testid="test-id" aria-label="Primary Content Details" isHidden>
      test
    </DataListContent>
  );
  expect(screen.getByTestId('test-id')).toHaveAttribute('hidden');
});

test(`DataListContent has custom class when className is passed`, () => {
  render(
    <DataListContent data-testid="test-id" aria-label="Primary Content Details" className="test-class">
      test
    </DataListContent>
  );
  expect(screen.getByTestId('test-id')).toHaveClass('test-class');
});
