import React from 'react';

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { ChipGroup } from '../index';
import { Chip } from '../../Chip';

test('chip group default', () => {
  render(
    <ChipGroup>
      <Chip>1.1</Chip>
    </ChipGroup>
  );

  expect(screen.getByRole('group')).toHaveClass('');
});

test('chip group with category', () => {
  render(
    <ChipGroup categoryName="category">
      <Chip>1.1</Chip>
    </ChipGroup>
  );
  expect(screen.getByText('category')).toBeVisible();
});

test('chip group with closable category', () => {
  render(
    <ChipGroup categoryName="category" isClosable>
      <Chip>1.1</Chip>
    </ChipGroup>
  );
  expect(screen.getByLabelText('Close chip group').closest('div')).toHaveClass('pf-v5-c-chip-group__close');
});

test('chip group expanded', async () => {
  const user = userEvent.setup();

  render(
    <ChipGroup>
      <Chip>1</Chip>
      <Chip>2</Chip>
      <Chip>3</Chip>
      <Chip>4</Chip>
    </ChipGroup>
  );

  const moreText = screen.getByText('1 more');
  expect(moreText).toBeInTheDocument();

  await user.click(moreText);
  expect(screen.getByText('Show Less')).toBeInTheDocument();
});

test('chip group will not render if no children passed', () => {
  render(<ChipGroup />);
  expect(screen.queryByRole('group')).toBeNull();
});

test('chip group with category and tooltip', () => {
  render(
    <ChipGroup categoryName="A very long category name">
      <Chip>1.1</Chip>
    </ChipGroup>
  );
  expect(screen.getByText('A very long category name')).toBeVisible();
});
