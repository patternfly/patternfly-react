import * as React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { DropdownSimple } from '../DropdownSimple';
import styles from '@patternfly/react-styles/css/components/MenuToggle/menu-toggle';

describe('Dropdown toggle', () => {
  test('Renders dropdown toggle as not disabled when isDisabled is not true', () => {
    render(<DropdownSimple toggleContent="Dropdown" />);

    expect(screen.getByRole('button', { name: 'Dropdown' })).not.toBeDisabled();
  });

  test('Renders dropdown toggle as disabled when isDisabled is true', () => {
    render(<DropdownSimple toggleContent="Dropdown" isDisabled />);

    expect(screen.getByRole('button', { name: 'Dropdown' })).toBeDisabled();
  });

  test('Passes toggleVariant', () => {
    render(<DropdownSimple toggleContent="Dropdown" toggleVariant="plain" />);

    expect(screen.getByRole('button', { name: 'Dropdown' })).toHaveClass(styles.modifiers.plain);
  });

  test('Passes toggleAriaLabel', () => {
    render(<DropdownSimple toggleContent="Dropdown" toggleAriaLabel="Aria label content" />);

    expect(screen.getByRole('button')).toHaveAccessibleName('Aria label content');
  });

  test('Calls onToggle with next isOpen state when dropdown toggle is clicked', async () => {
    const onToggle = jest.fn();
    const user = userEvent.setup();
    render(<DropdownSimple onToggle={onToggle} toggleContent="Dropdown" />);

    const toggle = screen.getByRole('button', { name: 'Dropdown' });
    await user.click(toggle);
    expect(onToggle).toHaveBeenCalledWith(true);
  });

  test('Does not call onToggle when dropdown toggle is not clicked', async () => {
    const onToggle = jest.fn();
    const items = [{ content: 'Action', value: 1 }];
    const user = userEvent.setup();
    render(
      <div>
        <button>Actual</button>
        <DropdownSimple initialItems={items} onToggle={onToggle} toggleContent="Dropdown" />
      </div>
    );

    const btn = screen.getByRole('button', { name: 'Actual' });
    await user.click(btn);
    expect(onToggle).not.toHaveBeenCalled();
  });

  test('Calls toggle onSelect when item is clicked', async () => {
    const onSelect = jest.fn();
    const items = [{ content: 'Action', value: 1 }];
    const user = userEvent.setup();
    render(<DropdownSimple initialItems={items} toggleContent="Dropdown" onSelect={onSelect} />);

    const toggle = screen.getByRole('button', { name: 'Dropdown' });
    await user.click(toggle);

    const actionItem = screen.getByRole('menuitem', { name: 'Action' });
    await user.click(actionItem);
    expect(onSelect).toHaveBeenCalledTimes(1);
  });

  test('Does not call toggle onSelect when item is not clicked', async () => {
    const onSelect = jest.fn();
    const items = [{ content: 'Action', value: 1 }];
    const user = userEvent.setup();
    render(<DropdownSimple initialItems={items} toggleContent="Dropdown" onSelect={onSelect} />);

    const toggle = screen.getByRole('button', { name: 'Dropdown' });
    await user.click(toggle);
    await user.click(toggle);
    expect(onSelect).not.toHaveBeenCalled();
  });

  test('Does not pass isToggleFullWidth to menu toggle by default', () => {
    render(<DropdownSimple toggleContent="Dropdown" />);

    expect(screen.getByRole('button', { name: 'Dropdown' })).not.toHaveClass(styles.modifiers.fullWidth);
  });

  test('Passes isToggleFullWidth to menu toggle when passed in', () => {
    render(<DropdownSimple isToggleFullWidth toggleContent="Dropdown" />);

    expect(screen.getByRole('button', { name: 'Dropdown' })).toHaveClass(styles.modifiers.fullWidth);
  });

  test('Does not focus toggle on item select by default', async () => {
    const items = [{ content: 'Action', value: 1 }];
    const user = userEvent.setup();
    render(<DropdownSimple initialItems={items} toggleContent="Dropdown" />);

    const toggle = screen.getByRole('button', { name: 'Dropdown' });
    await user.click(toggle);
    const actionItem = screen.getByRole('menuitem', { name: 'Action' });
    await user.click(actionItem);

    expect(toggle).not.toHaveFocus();
  });

  test('Focuses toggle on item select when shouldFocusToggleOnSelect is true', async () => {
    const items = [{ content: 'Action', value: 1 }];
    const user = userEvent.setup();
    render(<DropdownSimple shouldFocusToggleOnSelect initialItems={items} toggleContent="Dropdown" />);

    const toggle = screen.getByRole('button', { name: 'Dropdown' });
    await user.click(toggle);
    const actionItem = screen.getByRole('menuitem', { name: 'Action' });
    await user.click(actionItem);

    expect(toggle).toHaveFocus();
  });

  test('Matches snapshot', () => {
    const { asFragment } = render(<DropdownSimple toggleContent="Dropdown" />);

    expect(asFragment()).toMatchSnapshot();
  });
});

describe('Dropdown items', () => {
  test('Renders with items', async () => {
    const items = [
      { content: 'Action', value: 1 },
      { value: 'separator', isDivider: true }
    ];
    const user = userEvent.setup();
    render(<DropdownSimple initialItems={items} toggleContent="Dropdown" />);

    const toggle = screen.getByRole('button', { name: 'Dropdown' });
    await user.click(toggle);

    const actionItem = screen.getByRole('menuitem', { name: 'Action' });
    const dividerItem = screen.getByRole('separator');
    expect(actionItem).toBeInTheDocument();
    expect(dividerItem).toBeInTheDocument();
  });

  test('Renders with a link item', async () => {
    const items = [{ content: 'Link', value: 1, to: '#' }];
    const user = userEvent.setup();
    render(<DropdownSimple initialItems={items} toggleContent="Dropdown" />);

    const toggle = screen.getByRole('button', { name: 'Dropdown' });
    await user.click(toggle);

    const linkItem = screen.getByRole('menuitem', { name: 'Link' });
    expect(linkItem.getAttribute('href')).toBe('#');
  });

  test('Renders with items not disabled by default', async () => {
    const items = [{ content: 'Action', value: 1 }];
    const user = userEvent.setup();
    render(<DropdownSimple initialItems={items} toggleContent="Dropdown" />);

    const toggle = screen.getByRole('button', { name: 'Dropdown' });
    await user.click(toggle);

    const actionItem = screen.getByRole('menuitem', { name: 'Action' });
    expect(actionItem).not.toBeDisabled();
  });

  test('Renders with a disabled item', async () => {
    const items = [{ content: 'Action', value: 1, isDisabled: true }];
    const user = userEvent.setup();
    render(<DropdownSimple initialItems={items} toggleContent="Dropdown" />);

    const toggle = screen.getByRole('button', { name: 'Dropdown' });
    await user.click(toggle);

    const actionItem = screen.getByRole('menuitem', { name: 'Action' });
    expect(actionItem).toBeDisabled();
  });

  test('Spreads props on item', async () => {
    const items = [{ content: 'Action', value: 1, id: 'Test' }];
    const user = userEvent.setup();
    render(<DropdownSimple initialItems={items} toggleContent="Dropdown" />);

    const toggle = screen.getByRole('button', { name: 'Dropdown' });
    await user.click(toggle);

    const actionItem = screen.getByRole('menuitem', { name: 'Action' });
    expect(actionItem.getAttribute('id')).toBe('Test');
  });

  test('Calls item onClick when clicked', async () => {
    const onClick = jest.fn();
    const items = [{ content: 'Action', value: 1, onClick }];
    const user = userEvent.setup();
    render(<DropdownSimple initialItems={items} toggleContent="Dropdown" />);

    const toggle = screen.getByRole('button', { name: 'Dropdown' });
    await user.click(toggle);

    const actionItem = screen.getByRole('menuitem', { name: 'Action' });
    await user.click(actionItem);
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  test('Does not call item onClick when not clicked', async () => {
    const onClick = jest.fn();
    const items = [
      { content: 'Action', value: 1, onClick },
      { content: 'Action 2', value: 2 }
    ];
    const user = userEvent.setup();
    render(<DropdownSimple initialItems={items} toggleContent="Dropdown" />);

    const toggle = screen.getByRole('button', { name: 'Dropdown' });
    await user.click(toggle);

    const actionItem = screen.getByRole('menuitem', { name: 'Action 2' });
    await user.click(actionItem);
    expect(onClick).not.toHaveBeenCalled();
  });

  test('Does not call item onClick when clicked and item is disabled', async () => {
    const onClick = jest.fn();
    const items = [{ content: 'Action', value: 1, onClick, isDisabled: true }];
    const user = userEvent.setup();
    render(<DropdownSimple initialItems={items} toggleContent="Dropdown" />);

    const toggle = screen.getByRole('button', { name: 'Dropdown' });
    await user.click(toggle);

    const actionItem = screen.getByRole('menuitem', { name: 'Action' });
    await user.click(actionItem);
    expect(onClick).not.toHaveBeenCalled();
  });

  test('Matches snapshot', async () => {
    const items = [
      { content: 'Action', value: 1, ouiaId: '1' },
      { value: 'separator', isDivider: true, ouiaId: '2' },
      { content: 'Link', value: 'separator', to: '#', ouiaId: '3' }
    ];
    const user = userEvent.setup();
    const { asFragment } = render(<DropdownSimple ouiaId={4} initialItems={items} toggleContent="Dropdown" />);

    const toggle = screen.getByRole('button', { name: 'Dropdown' });
    await user.click(toggle);

    expect(asFragment()).toMatchSnapshot();
  });
});
