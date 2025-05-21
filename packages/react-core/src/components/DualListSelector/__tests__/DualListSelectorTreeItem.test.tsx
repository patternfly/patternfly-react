import { render, screen } from '@testing-library/react';
import styles from '@patternfly/react-styles/css/components/DualListSelector/dual-list-selector';
import { DualListSelectorTreeItem } from '../DualListSelectorTreeItem';

// The following tests checking for children to not be/to be rendered will need to be refactored
// as part of https://github.com/patternfly/patternfly-react/issues/11838
test('Does not render children by default', () => {
  render(
    <DualListSelectorTreeItem id="item-id" text="Test text">
      Children content
    </DualListSelectorTreeItem>
  );

  expect(screen.queryByText('Children content')).not.toBeInTheDocument();
});

test('Renders children when defaultExpanded is true', () => {
  render(
    <DualListSelectorTreeItem defaultExpanded id="item-id" text="Test text">
      Children content
    </DualListSelectorTreeItem>
  );

  expect(screen.getByText('Children content')).toBeVisible();
});

test('Renders children when hasAnimations is true', () => {
  render(
    <DualListSelectorTreeItem hasAnimations id="item-id" text="Test text">
      Children content
    </DualListSelectorTreeItem>
  );

  expect(screen.getByText('Children content')).toBeVisible();
});
