import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { ListItem } from '../ListItem';
import BookOpenIcon from '@patternfly/react-icons/dist/esm/icons/book-open-icon';

test('Renders children', () => {
  render(<ListItem>Test</ListItem>);
  expect(screen.getByText('Test')).toBeVisible();
});

test('Renders with the class pf-c-list__item when icon prop is passed', () => {
  render(<ListItem icon={<BookOpenIcon />}>Test</ListItem>);
  expect(screen.getByText('Test')).toHaveClass('pf-c-list__item');
});

test('Matches the snapshot with span when icon prop is passed', () => {
  const { asFragment } = render(<ListItem icon={<BookOpenIcon />}>Test</ListItem>);
  expect(asFragment()).toMatchSnapshot();
});

test('Matches the snapshot without span by default', () => {
  const { asFragment } = render(<ListItem>Test</ListItem>);
  expect(asFragment()).toMatchSnapshot();
});
