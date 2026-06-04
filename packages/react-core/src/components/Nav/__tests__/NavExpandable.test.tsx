import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { NavExpandable } from '../NavExpandable';

test('Renders with the inert attribute by default', () => {
  render(<NavExpandable id="grp-1" title="NavExpandable"></NavExpandable>);

  expect(screen.getByLabelText('NavExpandable')).toHaveAttribute('inert', '');
});

test('Does not render with the inert attribute when isExpanded is true', () => {
  render(<NavExpandable id="grp-1" title="NavExpandable" isExpanded={true}></NavExpandable>);

  expect(screen.getByLabelText('NavExpandable')).not.toHaveAttribute('inert', '');
});

test('Renders icon wrapped in nav link icon class when icon prop is provided', () => {
  render(
    <NavExpandable id="grp-1" title="NavExpandable" icon={<span data-testid="test-icon">Icon</span>}></NavExpandable>
  );

  const icon = screen.getByTestId('test-icon');
  expect(icon).toBeInTheDocument();
  expect(icon.parentElement).toHaveClass('pf-v6-c-nav__link-icon');
});

test('Does not render nav link icon wrapper when icon prop is not provided', () => {
  render(<NavExpandable id="grp-1" title="NavExpandable"></NavExpandable>);

  const button = screen.getByRole('button', { name: 'NavExpandable' });
  expect(button.querySelector('.pf-v6-c-nav__link-icon')).not.toBeInTheDocument();
});
