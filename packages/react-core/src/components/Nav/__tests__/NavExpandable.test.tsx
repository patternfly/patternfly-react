import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import styles from '@patternfly/react-styles/css/components/Nav/nav';
import { NavExpandable } from '../NavExpandable';

test('Renders with the inert attribute by default', () => {
  render(<NavExpandable id="grp-1" title="NavExpandable"></NavExpandable>);

  expect(screen.getByLabelText('NavExpandable')).toHaveAttribute('inert', '');
});

test('Does not render with the inert attribute when isExpanded is true', () => {
  render(<NavExpandable id="grp-1" title="NavExpandable" isExpanded={true}></NavExpandable>);

  expect(screen.getByLabelText('NavExpandable')).not.toHaveAttribute('inert', '');
});

test('Renders icon with navLinkIcon class', () => {
  render(
    <NavExpandable id="grp-1" title="NavExpandable" icon={<div data-testid="nav-expandable-icon">Icon content</div>} />
  );

  expect(screen.getByTestId('nav-expandable-icon').parentElement).toHaveClass(styles.navLinkIcon);
});

test('Does not render icon wrapper when icon is not provided', () => {
  render(<NavExpandable id="grp-1" title="NavExpandable" />);

  const button = screen.getByRole('button', { name: 'NavExpandable' });
  expect(button.querySelector(`.${styles.navLinkIcon}`)).toBeNull();
});
