import React from 'react';

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { ChipGroup } from '../index';
import { Chip } from '..';
import styles from '@patternfly/react-styles/css/components/Label/label-group';

jest.mock('../../../../helpers/GenerateId/GenerateId');

test('chip group default', () => {
  render(
    <ChipGroup>
      <Chip>1.1</Chip>
    </ChipGroup>
  );

  expect(screen.getByRole('list').parentElement?.parentElement).toHaveClass(styles.labelGroup);
});

test('chip group with custom className', () => {
  render(
    <ChipGroup className="test">
      <Chip>1.1</Chip>
    </ChipGroup>
  );

  expect(screen.getByRole('list').parentElement?.parentElement).toHaveClass(`${styles.labelGroup} test`);
});

test('chip group has aria-label by default when categoryName is not passed', () => {
  render(
    <ChipGroup>
      <Chip>1.1</Chip>
    </ChipGroup>
  );

  expect(screen.getByRole('list')).toHaveAccessibleName('Chip group category');
});

test('chip group with custom aria-label', () => {
  render(
    <ChipGroup aria-label="test chip group">
      <Chip>1.1</Chip>
    </ChipGroup>
  );

  expect(screen.getByRole('list')).toHaveAccessibleName('test chip group');
});

test('chip group with category', () => {
  render(
    <ChipGroup categoryName="category">
      <Chip>1.1</Chip>
    </ChipGroup>
  );
  expect(screen.getByText('category')).toBeVisible();
});

test('chip group with category renders with class pf-m-category', () => {
  render(
    <ChipGroup categoryName="category">
      <Chip>1.1</Chip>
    </ChipGroup>
  );
  expect(screen.getByRole('list').parentElement?.parentElement).toHaveClass(`${styles.modifiers.category}`);
});

test('chip group has aria-labelledby attribute', () => {
  render(
    <ChipGroup categoryName="category">
      <Chip>1.1</Chip>
    </ChipGroup>
  );
  expect(screen.getByRole('list')).toHaveAttribute('aria-labelledby', expect.stringContaining(`generated-id`));
});

test('chip group has aria-labelledby attribute set to ID value', () => {
  render(
    <ChipGroup categoryName="category" id="chip-group-id">
      <Chip>1.1</Chip>
    </ChipGroup>
  );
  expect(screen.getByRole('list')).toHaveAttribute('aria-labelledby', 'chip-group-id');
});

test('chip group expands', async () => {
  const user = userEvent.setup();
  const chips = ['Chip one', 'Really long chip that goes on and on', 'Chip three', 'Chip four', 'Chip five'];

  render(
    <ChipGroup aria-label="test">
      {chips.map((currentChip) => (
        <Chip key={currentChip}>{currentChip}</Chip>
      ))}
    </ChipGroup>
  );

  await user.click(screen.getByText('2 more'));
  expect(screen.getByText('Chip five')).toBeVisible();
});

test('chip group with closable category', () => {
  render(
    <ChipGroup categoryName="category" isClosable>
      <Chip>1.1</Chip>
    </ChipGroup>
  );
  expect(screen.getByRole('list').parentElement?.parentElement?.lastChild).toHaveClass(styles.labelGroupClose);
});

test('chip group with closeBtnAriaLabel', () => {
  render(
    <ChipGroup closeBtnAriaLabel="close button aria label" isClosable categoryName="category">
      <Chip>1.1</Chip>
    </ChipGroup>
  );
  expect(screen.getByLabelText('close button aria label')).toBeInTheDocument();
  expect(screen.getByLabelText('close button aria label')).toHaveAccessibleName('close button aria label category');
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
  expect(onClose).toHaveBeenCalledTimes(1);
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

test('overflow chip does not render by default when < 4 children are passed', async () => {
  render(
    <ChipGroup>
      <Chip>1</Chip>
      <Chip>2</Chip>
      <Chip>3</Chip>
    </ChipGroup>
  );

  expect(screen.queryByText('1 more')).not.toBeInTheDocument();
});

test('overflow chip collapsed by default', async () => {
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
});

test('overflow chip renders with the default numChips prop value of 3', async () => {
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

test('overflow chip renders with numChips prop value of 2', async () => {
  const user = userEvent.setup();

  render(
    <ChipGroup numChips={2}>
      <Chip>1</Chip>
      <Chip>2</Chip>
      <Chip>3</Chip>
    </ChipGroup>
  );

  const moreText = screen.getByText('1 more');
  expect(moreText).toBeInTheDocument();

  await user.click(moreText);
  expect(screen.getByText('Show Less')).toBeInTheDocument();
});

test('clicking the overflow chip causes the text to update with the default props', async () => {
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

  await user.click(moreText);
  expect(screen.getByText('Show Less')).toBeInTheDocument();
});

test('passing in the expandedText and collapsedText props work', async () => {
  const user = userEvent.setup();

  render(
    <ChipGroup expandedText="Collapse" collapsedText="Expand">
      <Chip>1</Chip>
      <Chip>2</Chip>
      <Chip>3</Chip>
      <Chip>4</Chip>
    </ChipGroup>
  );

  const moreText = screen.getByText('Expand');
  expect(moreText).toBeInTheDocument();

  await user.click(moreText);
  expect(screen.getByText('Collapse')).toBeInTheDocument();
});

test('passing defaultIsOpen of true causes the chip group to be expanded by default', async () => {
  render(
    <ChipGroup defaultIsOpen>
      <Chip>1</Chip>
      <Chip>2</Chip>
      <Chip>3</Chip>
      <Chip>4</Chip>
    </ChipGroup>
  );

  expect(screen.getByText('Show Less')).toBeInTheDocument();
});

test('chip group will not render if no children passed', () => {
  render(<ChipGroup />);
  expect(screen.queryByRole('list')).toBeNull();
});

test('chip group renders to match snapshot', () => {
  const { asFragment } = render(<ChipGroup>chips</ChipGroup>);
  expect(screen.getByRole('list')).toBeInTheDocument();
  expect(asFragment()).toMatchSnapshot();
});
