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
