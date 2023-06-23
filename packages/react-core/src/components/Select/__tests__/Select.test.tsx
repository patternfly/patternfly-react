import React from 'react';

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Select } from '../Select';
import { SelectOption } from '../SelectOption';
import { SelectList } from '../SelectList';
import { MenuToggle, MenuToggleElement } from '../../MenuToggle';

it('shows all select options when isOpen is true', () => {
  render(
    <Select isOpen>
      <SelectOption value="Option 1">Option 1</SelectOption>
      <SelectOption value="Option 2">Option 2</SelectOption>
      <SelectOption value="Option 3">Option 3</SelectOption>
    </Select>
  );

  expect(screen.getAllByRole('option')).toHaveLength(3);
  ['Option 1', 'Option 2', 'Option 3'].map((value) =>
    expect(screen.getByRole('option', { name: value })).toBeVisible()
  );
});

it('does not show select options by default', () => {
  render(
    <Select>
      <SelectOption value="Option 1">Option 1</SelectOption>
    </Select>
  );

  expect(screen.queryByRole('option')).not.toBeInTheDocument();
});

it('shows placeholder text when specified', () => {
  render(
    <Select placeholder="Select a value">
      <SelectOption value="Option 1">Option 1</SelectOption>
    </Select>
  );

  expect(screen.getByRole('button', { name: 'Select a value' })).toBeVisible();
});

it('has disabled attributes when isDisabled is true', () => {
  render(
    <Select isDisabled>
      <SelectOption value="Option 1">Option 1</SelectOption>
    </Select>
  );

  const selectButton = screen.getByRole('button');

  expect(selectButton).toHaveClass('pf-m-disabled');
  expect(selectButton).toHaveAttribute('disabled');
});

it('has full width modifier class by default', () => {
  render(
    <Select>
      <SelectOption value="Option 1">Option 1</SelectOption>
    </Select>
  );

  expect(screen.getByRole('button')).toHaveClass('pf-m-full-width');
});

it('does not have a full width modifier class when isFullWidth is set to false', () => {
  render(
    <Select isFullWidth={false}>
      <SelectOption value="Option 1">Option 1</SelectOption>
    </Select>
  );

  expect(screen.getByRole('button')).not.toHaveClass('pf-m-full-width');
});

it('can select option with internal isOpen and selected state', async () => {
  const user = userEvent.setup();

  render(
    <Select>
      <SelectOption value="Option 1">Option 1</SelectOption>
    </Select>
  );

  await user.click(screen.getByRole('button'));

  const selectOption = screen.getByRole('option', { name: 'Option 1' });
  expect(selectOption).toBeVisible();

  await user.click(selectOption);
  expect(screen.queryByRole('option')).not.toBeInTheDocument();
  expect(screen.getByRole('button', { name: 'Option 1' })).toBeVisible();
});

it('can select option with internal selected state and a custom toggle', async () => {
  const user = userEvent.setup();

  const toggle = (toggleRef: React.RefObject<any>, selected: any, isOpen: boolean, toggleOpen: () => void) => (
    <MenuToggle ref={toggleRef} onClick={toggleOpen} isExpanded={isOpen} isFullWidth>
      {selected}
    </MenuToggle>
  );

  render(
    <Select toggle={toggle}>
      <SelectOption value="Option 1">Option 1</SelectOption>
    </Select>
  );

  await user.click(screen.getByRole('button'));

  const selectOption = screen.getByRole('option', { name: 'Option 1' });
  expect(selectOption).toBeVisible();

  await user.click(selectOption);

  expect(screen.queryByRole('option')).not.toBeInTheDocument();
  expect(screen.getByRole('button', { name: 'Option 1' })).toBeVisible();
});

it('can select option with all custom handlers', async () => {
  const user = userEvent.setup();

  const CustomSelect = ({ children }) => {
    const [isOpen, setIsOpen] = React.useState(false);
    const [selected, setSelected] = React.useState<string>('Select a value');

    const onToggleClick = () => {
      setIsOpen(!isOpen);
    };

    const onSelect = (
      _event: React.MouseEvent<Element, MouseEvent> | undefined,
      value: string | number | undefined
    ) => {
      setSelected(value as string);
      setIsOpen(false);
    };

    const toggle = (toggleRef: React.Ref<MenuToggleElement>) => (
      <MenuToggle ref={toggleRef} onClick={onToggleClick} isExpanded={isOpen}>
        {selected}
      </MenuToggle>
    );

    return (
      <Select
        id="single-select"
        isOpen={isOpen}
        selected={selected}
        onSelect={onSelect}
        onOpenChange={(isOpen) => setIsOpen(isOpen)}
        toggle={toggle}
      >
        {children}
      </Select>
    );
  };

  render(
    <CustomSelect>
      <SelectOption value="Option 1">Option 1</SelectOption>
    </CustomSelect>
  );

  await user.click(screen.getByRole('button'));

  const selectOption = screen.getByRole('option', { name: 'Option 1' });
  expect(selectOption).toBeVisible();

  await user.click(selectOption);

  expect(screen.queryByRole('option')).not.toBeInTheDocument();
  expect(screen.getByRole('button', { name: 'Option 1' })).toBeVisible();
});

it('shows selected value instead of placeholder when one is specified', () => {
  render(
    <Select selected="Option 2" placeholder="Select a value">
      <SelectOption value="Option 1">Option 1</SelectOption>
      <SelectOption value="Option 2">Option 2</SelectOption>
    </Select>
  );

  expect(screen.getByRole('button', { name: 'Option 2' })).toBeVisible();
});

it('calls onSelect when an option is clicked', async () => {
  const user = userEvent.setup();
  const onSelect = jest.fn();

  render(
    <Select isOpen onSelect={onSelect}>
      <SelectOption value="Option 1">Option 1</SelectOption>
    </Select>
  );

  await user.click(screen.getByRole('option', { name: 'Option 1' }));
  expect(onSelect).toHaveBeenCalled();
});
