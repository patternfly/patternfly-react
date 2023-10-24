import React from 'react';

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { DataList } from '../DataList';
import { DataListItem } from '../DataListItem';
import { DataListItemRow } from '../DataListItemRow';

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

test(`Renders default class ${styles.dataList}`, () => {
  render(<DataList key="list-id-1" aria-label="list" />);
  expect(screen.getByLabelText('list')).toHaveClass(styles.dataList);
});

test('Renders custom class when passed', () => {
  render(<DataList key="list-id-1" className="data-list-custom" aria-label="list" />);
  expect(screen.getByLabelText('list')).toHaveClass('data-list-custom');
});

test('Renders with a hidden input to improve a11y when onSelectableRowChange is passed', () => {
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

test('Does not render with a hidden input to improve a11y when onSelectableRowChange is not passed', () => {
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

test('Calls onSelectableRowChange.onChange when the selectable input changes', async () => {
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

test('Does not call onSelectableRowChange.onChange when the selectable input is not changed', () => {
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

test('Applies selectableInputAriaLabel to the hidden input', () => {
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

test('Defaults to labelling its input using its aria-labelledby prop', () => {
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

test('Prioritizes selectableInputAriaLabel over aria-labelledby prop', () => {
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
