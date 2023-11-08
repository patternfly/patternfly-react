import React from 'react';
import { Dropdown } from '../../Dropdown';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

jest.mock('../../Menu');

jest.mock('../../../helpers/Popper/Popper');

const toggle = (ref: React.RefObject<any>) => <button ref={ref}>Dropdown</button>;

const dropdownChildren = <div>Dropdown children</div>;

test('renders dropdown', () => {
  render(
    <div data-testid="dropdown">
      <Dropdown toggle={(toggleRef) => toggle(toggleRef)}>{dropdownChildren}</Dropdown>
    </div>
  );

  expect(screen.getByTestId('dropdown').children[0]).toBeVisible();
});

test('passes children', () => {
  render(
    <Dropdown isOpen toggle={(toggleRef) => toggle(toggleRef)}>
      {dropdownChildren}
    </Dropdown>
  );

  expect(screen.getByText('Dropdown children')).toBeVisible();
});

test('renders passed toggle element', () => {
  render(<Dropdown toggle={(toggleRef) => toggle(toggleRef)}>{dropdownChildren}</Dropdown>);

  expect(screen.getByRole('button', { name: 'Dropdown' })).toBeVisible();
});

test('passes no class name by default', () => {
  render(
    <Dropdown isOpen={true} toggle={(toggleRef) => toggle(toggleRef)}>
      {dropdownChildren}
    </Dropdown>
  );

  expect(screen.getByTestId('menu-mock')).not.toHaveClass();
});

test('passes custom class name', () => {
  render(
    <Dropdown className="custom-class" isOpen={true} toggle={(toggleRef) => toggle(toggleRef)}>
      {dropdownChildren}
    </Dropdown>
  );

  expect(screen.getByTestId('menu-mock')).toHaveClass('custom-class');
});

test('does not pass isPlain to Menu by default', () => {
  render(
    <Dropdown isOpen={true} toggle={(toggleRef) => toggle(toggleRef)}>
      {dropdownChildren}
    </Dropdown>
  );

  expect(screen.getByText('isPlain: undefined')).toBeVisible();
});

test('passes isPlain to Menu', () => {
  render(
    <Dropdown isPlain isOpen={true} toggle={(toggleRef) => toggle(toggleRef)}>
      {dropdownChildren}
    </Dropdown>
  );

  expect(screen.getByText('isPlain: true')).toBeVisible();
});

test('does not pass isScrollable to Menu by default', () => {
  render(
    <Dropdown isOpen={true} toggle={(toggleRef) => toggle(toggleRef)}>
      {dropdownChildren}
    </Dropdown>
  );

  expect(screen.getByText('isScrollable: undefined')).toBeVisible();
});

test('passes isScrollable to Menu', () => {
  render(
    <Dropdown isScrollable isOpen={true} toggle={(toggleRef) => toggle(toggleRef)}>
      {dropdownChildren}
    </Dropdown>
  );

  expect(screen.getByText('isScrollable: true')).toBeVisible();
});

test('passes default zIndex to popper', () => {
  render(<Dropdown toggle={(toggleRef) => toggle(toggleRef)}>{dropdownChildren}</Dropdown>);

  expect(screen.getByText('zIndex: 9999')).toBeVisible();
});

test('passes zIndex to popper', () => {
  render(
    <Dropdown zIndex={100} toggle={(toggleRef) => toggle(toggleRef)}>
      {dropdownChildren}
    </Dropdown>
  );

  expect(screen.getByText('zIndex: 100')).toBeVisible();
});

test('does not pass isOpen to popper by default', () => {
  render(<Dropdown toggle={(toggleRef) => toggle(toggleRef)}>{dropdownChildren}</Dropdown>);

  expect(screen.getByText('isVisible: undefined')).toBeVisible();
});

test('passes isOpen to popper', () => {
  render(
    <Dropdown isOpen toggle={(toggleRef) => toggle(toggleRef)}>
      {dropdownChildren}
    </Dropdown>
  );

  expect(screen.getByText('isVisible: true')).toBeVisible();
});

/* no default tests for callback props
since there is no way to test that the 
function doesn`t get passed */

test('passes onSelect callback', async () => {
  const user = userEvent.setup();

  const onSelect = jest.fn();
  render(
    <Dropdown isOpen onSelect={onSelect} toggle={(toggleRef) => toggle(toggleRef)}>
      {dropdownChildren}
    </Dropdown>
  );

  const trigger = await screen.findByText('Mock item');
  await user.click(trigger);

  expect(onSelect).toBeCalledTimes(1);
});

test('onOpenChange is called when passed and user clicks outside of dropdown', async () => {
  const user = userEvent.setup();
  const onOpenChange = jest.fn();

  render(
    <Dropdown isOpen={true} onOpenChange={onOpenChange} toggle={(toggleRef) => toggle(toggleRef)}>
      {dropdownChildren}
    </Dropdown>
  );

  const dropdown = screen.getByRole('button', { name: 'Dropdown' });
  await user.click(dropdown);
  await user.click(document.body);

  expect(onOpenChange).toBeCalledTimes(1);
});

test('onOpenChange is called when passed and user presses tab key', async () => {
  const user = userEvent.setup();
  const onOpenChange = jest.fn();

  render(
    <Dropdown isOpen={true} onOpenChange={onOpenChange} toggle={(toggleRef) => toggle(toggleRef)}>
      {dropdownChildren}
    </Dropdown>
  );

  // focus dropdown
  const dropdown = screen.getByRole('button', { name: 'Dropdown' });
  await user.click(dropdown);
  await user.keyboard('{Tab}');

  expect(onOpenChange).toBeCalledTimes(1);
});

test('onOpenChange is called when passed and user presses esc key', async () => {
  const user = userEvent.setup();
  const onOpenChange = jest.fn();

  render(
    <Dropdown isOpen={true} onOpenChange={onOpenChange} toggle={(toggleRef) => toggle(toggleRef)}>
      {dropdownChildren}
    </Dropdown>
  );

  // focus dropdown
  const dropdown = screen.getByRole('button', { name: 'Dropdown' });
  await user.click(dropdown);
  await user.keyboard('{Escape}');

  expect(onOpenChange).toBeCalledTimes(1);
});

test('match snapshot', () => {
  const { asFragment } = render(
    <Dropdown
      ouiaId={'dropdown'}
      isOpen
      isScrollable
      isPlain
      className={'customClass'}
      toggle={(toggleRef) => toggle(toggleRef)}
    >
      {dropdownChildren}
    </Dropdown>
  );

  expect(asFragment()).toMatchSnapshot();
});
