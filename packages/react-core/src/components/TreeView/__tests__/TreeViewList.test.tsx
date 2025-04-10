import { render, screen } from '@testing-library/react';
import { TreeViewList } from '../TreeViewList';
import styles from '@patternfly/react-styles/css/components/TreeView/tree-view';

test(`Renders with class ${styles.treeView}__list by default`, () => {
  render(<TreeViewList>Content</TreeViewList>);

  expect(screen.getByRole('tree')).toHaveClass(`${styles.treeView}__list`, { exact: true });
});

test(`Renders with role="tree" by default`, () => {
  render(<TreeViewList>Content</TreeViewList>);

  expect(screen.getByRole('tree')).toHaveTextContent('Content');
});

test(`Renders with role="group" when isNested is true`, () => {
  render(<TreeViewList isNested>Content</TreeViewList>);

  expect(screen.getByRole('group')).toHaveTextContent('Content');
});

test(`Spreads additional props`, () => {
  render(<TreeViewList id="test-id">Content</TreeViewList>);

  expect(screen.getByRole('tree')).toHaveAttribute('id', 'test-id');
});

test(`Renders toolbar content when toolbar prop is passed`, () => {
  render(<TreeViewList toolbar="Toolbar content">Content</TreeViewList>);

  expect(screen.getByText('Toolbar content')).toBeInTheDocument();
});

test(`Renders Divider when toolbar prop is passed`, () => {
  render(<TreeViewList toolbar="Toolbar content">Content</TreeViewList>);

  expect(screen.getByRole('separator')).toBeInTheDocument();
});

test('Renders with aria-label when passed', () => {
  render(<TreeViewList aria-label="Test aria-label">Content</TreeViewList>);

  expect(screen.getByRole('tree')).toHaveAccessibleName('Test aria-label');
});

test('Renders with aria-labelledby when passed', () => {
  render(
    <>
      <div id="label">Labeling content</div>
      <TreeViewList aria-labelledby="label">Content</TreeViewList>
    </>
  );

  expect(screen.getByRole('tree')).toHaveAccessibleName('Labeling content');
});

test('Renders with aria-multiselectable of false by default', () => {
  render(<TreeViewList>Content</TreeViewList>);

  expect(screen.getByRole('tree')).toHaveAttribute('aria-multiselectable', 'false');
});

test('Renders with aria-multiselectable of true when isMultiSelectable is true', () => {
  render(<TreeViewList isMultiSelectable>Content</TreeViewList>);

  expect(screen.getByRole('tree')).toHaveAttribute('aria-multiselectable', 'true');
});

test('Does not render with aria-multiselectable when isNested is true', () => {
  render(
    <TreeViewList isMultiSelectable isNested>
      Content
    </TreeViewList>
  );

  expect(screen.getByRole('group')).not.toHaveAttribute('aria-multiselectable');
});

test(`Does not render toolbar content when toolbar prop is not passed`, () => {
  render(<TreeViewList>Content</TreeViewList>);

  expect(screen.queryByRole('tree')?.previousElementSibling).not.toBeInTheDocument();
  expect(screen.queryByRole('separator')).not.toBeInTheDocument();
});

test('Matches snapshot by default', () => {
  const { asFragment } = render(<TreeViewList>Content</TreeViewList>);

  expect(asFragment()).toMatchSnapshot();
});

test('Matches snapshot when toolbar is passed', () => {
  const { asFragment } = render(<TreeViewList toolbar={<div>Toolbar content</div>}>Content</TreeViewList>);

  expect(asFragment()).toMatchSnapshot();
});
