import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { ListItem } from '../ListItem';

test('Renders children', () => {
  render(<ListItem>Test</ListItem>);
  expect(screen.getByRole('listitem')).toBeVisible();
});

test('Renders with no class pf-c-list by default', () => {
  render(<ListItem>Test</ListItem>);
  expect(screen.getByRole('listitem')).not.toHaveClass();
});

test('Renders with the class pf-c-list__item when icon prop is passed', () => {
  render(<ListItem icon={'icon'}>Test</ListItem>);
  expect(screen.getByRole('listitem')).toHaveClass('pf-c-list__item');
});

test('Renders with inherited element props spread to the component', () => {
  render(
    <>
      <ListItem aria-labelledby="labelling-id">Test</ListItem>
      <p id="labelling-id">Label</p>
    </>
  );
  expect(screen.getByRole('listitem')).toHaveAccessibleName('Label');
});

test('Matches the snapshot with span when icon prop is passed', () => {
  const { asFragment } = render(<ListItem icon={'icon'}>Test</ListItem>);
  expect(asFragment()).toMatchSnapshot();
});

test('Matches the snapshot without span by default', () => {
  const { asFragment } = render(<ListItem>Test</ListItem>);
  expect(asFragment()).toMatchSnapshot();
});
