import React from 'react';
import { render, screen } from '@testing-library/react';
import { TreeViewRoot } from '../TreeViewRoot';
import styles from '@patternfly/react-styles/css/components/TreeView/tree-view';

test('Renders children', () => {
  render(
    <TreeViewRoot>
      <div className={styles.treeViewNode}>Content</div>
    </TreeViewRoot>
  );

  expect(screen.getByText('Content')).toBeVisible();
});

test(`Renders with class ${styles.treeView} by default`, () => {
  render(
    <TreeViewRoot>
      <div className={styles.treeViewNode}>Content</div>
    </TreeViewRoot>
  );

  expect(screen.getByText('Content').parentElement).toHaveClass(styles.treeView, { exact: true });
});

test(`Renders with custom class when className is passed`, () => {
  render(
    <TreeViewRoot className="test-class">
      <div className={styles.treeViewNode}>Content</div>
    </TreeViewRoot>
  );

  expect(screen.getByText('Content').parentElement).toHaveClass('test-class');
});

test(`Renders with class ${styles.modifiers.guides} when hasGuides is passed`, () => {
  render(
    <TreeViewRoot hasGuides>
      <div className={styles.treeViewNode}>Content</div>
    </TreeViewRoot>
  );

  expect(screen.getByText('Content').parentElement).toHaveClass(styles.modifiers.guides);
});

test(`Does not render with additional classes when variant="default"`, () => {
  render(
    <TreeViewRoot variant="default">
      <div className={styles.treeViewNode}>Content</div>
    </TreeViewRoot>
  );

  expect(screen.getByText('Content').parentElement).toHaveClass(styles.treeView, { exact: true });
});

test(`Renders with class ${styles.modifiers.compact} when variant="compact"`, () => {
  render(
    <TreeViewRoot variant="compact">
      <div className={styles.treeViewNode}>Content</div>
    </TreeViewRoot>
  );

  expect(screen.getByText('Content').parentElement).toHaveClass(styles.modifiers.compact);
});

test(`Renders with classes ${styles.modifiers.compact} and ${styles.modifiers.noBackground} when variant="compactNoBackground"`, () => {
  render(
    <TreeViewRoot variant="compactNoBackground">
      <div className={styles.treeViewNode}>Content</div>
    </TreeViewRoot>
  );

  expect(screen.getByText('Content').parentElement).toHaveClass(
    styles.modifiers.compact,
    styles.modifiers.noBackground
  );
});

test('Matches snapshot', () => {
  const { asFragment } = render(
    <TreeViewRoot>
      <div className={styles.treeViewNode}>Content</div>
    </TreeViewRoot>
  );

  expect(asFragment()).toMatchSnapshot();
});
