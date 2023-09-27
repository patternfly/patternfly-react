import React from 'react';

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { ChipGroup } from '../index';
import { Chip } from '../../Chip';
import styles from '@patternfly/react-styles/css/components/Chip/chip-group';

test('chip group default', () => {
  render(
    <ChipGroup>
      <Chip>1.1</Chip>
    </ChipGroup>
  );

  expect(screen.getByRole('group')).toHaveClass(styles.chipGroup);
});

test('chip group with custom className', () => {
  render(
    <ChipGroup className="test">
      <Chip>1.1</Chip>
    </ChipGroup>
  );

  expect(screen.getByRole('group')).toHaveClass(`${styles.chipGroup} test`);
});

test('chip group has aria-label by default when categoryName is not passed', () => {
  render(
    <ChipGroup>
      <Chip>1.1</Chip>
    </ChipGroup>
  );

  expect(screen.getByRole('group')).toHaveAccessibleName('Chip group category');
});

test('chip group with custom aria-label', () => {
  render(
    <ChipGroup aria-label="test chip group">
      <Chip>1.1</Chip>
    </ChipGroup>
  );

  expect(screen.getByRole('group')).toHaveAccessibleName('test chip group');
});

test('chip group with category', () => {
  render(
    <ChipGroup categoryName="category">
      <Chip>1.1</Chip>
    </ChipGroup>
  );
  expect(screen.getByText('category')).toBeVisible();
});

test('chip group expands', async () => {
  const user = userEvent.setup();
  const chips = ['Chip one', 'Really long chip that goes on and on', 'Chip three', 'Chip four', 'Chip five'];

  render(
    <ChipGroup aria-label="test">
      {chips.map((currentChip) => (
        <Chip key={currentChip}>
          {currentChip}
        </Chip>
      ))}
    </ChipGroup>
  );

  await user.click(screen.getByText('2 more'));
  expect(screen.getByText('chip five')).toBeVisible();
});

test('chip group with closable category', () => {
  render(
    <ChipGroup categoryName="category" isClosable>
      <Chip>1.1</Chip>
    </ChipGroup>
  );
  expect(screen.getByLabelText('Close chip group').closest('div')).toHaveClass(styles.chipGroupClose);
});

test('chip group onClick', async () => {
  const onClose = jest.fn();
  const user = userEvent.setup();

  render(
    <ChipGroup categoryName="category" isClosable onClick={onClose}>
      <Chip>1.1</Chip>
    </ChipGroup>
  );

  await user.click(screen.getByLabelText('Close chip group'));
  expect(onClose).toHaveBeenCalled();
});

test('chip group onOverflowChipClick', async () => {
  const onOverflowChipClick = jest.fn();
  const user = userEvent.setup();

  render(
    <ChipGroup categoryName="category" onOverflowChipClick={onOverflowChipClick}>
      <Chip>1.1</Chip>
    </ChipGroup>
  );

  await user.click(screen.getByLabelText('Close chip group'));
  expect(onOverflowChipClick).toHaveBeenCalled();
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

test('chip group renders to match snapshot', () => {
  const { asFragment } = render(<ChipGroup aria-label="test chip group" />);
  expect(screen.getByLabelText('test chip group')).toBeInTheDocument();
  expect(asFragment()).toMatchSnapshot();
});
