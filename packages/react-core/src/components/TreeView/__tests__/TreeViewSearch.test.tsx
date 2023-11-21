import React from 'react';
import { render, screen } from '@testing-library/react';
import { TreeViewSearch } from '../TreeViewSearch';
import userEvent from '@testing-library/user-event';
import styles from '@patternfly/react-styles/css/components/TreeView/tree-view';

test(`Renders with ${styles.treeViewSearch} by default`, () => {
  render(<TreeViewSearch />);

  expect(screen.getByRole('searchbox').parentElement?.parentElement).toHaveClass(styles.treeViewSearch, {
    exact: true
  });
});

test(`Renders with custom class when className is passed`, () => {
  render(<TreeViewSearch className="test-class" />);

  expect(screen.getByRole('searchbox').parentElement?.parentElement).toHaveClass('test-class');
});

test(`Renders with id when passed`, () => {
  render(<TreeViewSearch id="test-id" />);

  expect(screen.getByRole('searchbox')).toHaveAttribute('id', 'test-id');
});

test(`Does not render with id when it is not passed`, () => {
  render(<TreeViewSearch />);

  expect(screen.getByRole('searchbox')).not.toHaveAttribute('id');
});

test(`Renders with name when passed`, () => {
  render(<TreeViewSearch name="testName" />);

  expect(screen.getByRole('searchbox')).toHaveAttribute('name', 'testName');
});

test(`Does not render with name when it is not passed`, () => {
  render(<TreeViewSearch />);

  expect(screen.getByRole('searchbox')).not.toHaveAttribute('name');
});

test(`Renders with aria-label when passed`, () => {
  render(<TreeViewSearch aria-label="test label" />);

  expect(screen.getByRole('searchbox')).toHaveAccessibleName('test label');
});

test(`Does not render with aria-label when it is not passed`, () => {
  render(<TreeViewSearch />);

  expect(screen.getByRole('searchbox')).not.toHaveAccessibleName();
});

test(`Spreads additional props`, () => {
  render(<TreeViewSearch data-testprop="test-value" />);

  expect(screen.getByRole('searchbox')).toHaveAttribute('data-testprop', 'test-value');
});

test(`Calls onSearch when input is typed into`, async () => {
  const user = userEvent.setup();
  const onSearchMock = jest.fn();
  render(<TreeViewSearch onSearch={onSearchMock} />);

  await user.type(screen.getByRole('searchbox'), 'a');

  expect(onSearchMock).toHaveBeenCalledTimes(1);
});

test(`Does not call onSearch when input is not typed into`, async () => {
  const user = userEvent.setup();
  const onSearchMock = jest.fn();

  render(
    <>
      <TreeViewSearch />
      <input aria-label="native input" />
    </>
  );

  await user.type(screen.getByRole('textbox'), 'a');

  expect(onSearchMock).not.toHaveBeenCalled();
});

test('Matches snapshot', () => {
  const { asFragment } = render(<TreeViewSearch />);

  expect(asFragment()).toMatchSnapshot();
});
