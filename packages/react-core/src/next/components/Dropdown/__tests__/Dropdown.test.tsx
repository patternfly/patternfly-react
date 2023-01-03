import React from 'react';
import { Dropdown } from '../../Dropdown';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

jest.mock('../../../../components/Menu');

jest.mock('../../../../helpers/Popper/Popper');

const toggle = (ref: React.RefObject<any>) => <button ref={ref}>Dropdown</button>;

const dropdownChildren = <div>Dropdown children</div>;

test('renders dropdown', async () => {
  render(
    <div data-testid="dropdown">
      <Dropdown toggle={toggleRef => toggle(toggleRef)}>{dropdownChildren}</Dropdown>
    </div>
  );

  expect((await screen.findByTestId('dropdown')).children[0]).toBeVisible();
});

test('passes children', () => {
  render(<Dropdown toggle={toggleRef => toggle(toggleRef)}>{dropdownChildren}</Dropdown>);

  expect(screen.getByText('Dropdown children')).toBeVisible();
});

test('renders passed toggle element', async () => {
  render(<Dropdown toggle={toggleRef => toggle(toggleRef)}>{dropdownChildren}</Dropdown>);

  expect(await screen.findByRole('button')).toBeVisible();
});

test('passes no class name by default', async () => {
  render(
    <Dropdown isOpen={true} toggle={toggleRef => toggle(toggleRef)}>
      {dropdownChildren}
    </Dropdown>
  );

  expect(await screen.findByTestId('menu-mock')).not.toHaveClass();
});

test('passes custom class name', async () => {
  render(
    <Dropdown className="custom-class" isOpen={true} toggle={toggleRef => toggle(toggleRef)}>
      {dropdownChildren}
    </Dropdown>
  );

  expect(await screen.findByTestId('menu-mock')).toHaveClass('custom-class');
});

test('does not pass isPlain to Menu by default', async () => {
  render(
    <Dropdown isOpen={true} toggle={toggleRef => toggle(toggleRef)}>
      {dropdownChildren}
    </Dropdown>
  );

  expect(await screen.findByText('isPlain: undefined')).toBeVisible();
});

test('passes isPlain to Menu', async () => {
  render(
    <Dropdown isPlain isOpen={true} toggle={toggleRef => toggle(toggleRef)}>
      {dropdownChildren}
    </Dropdown>
  );

  expect(await screen.findByText('isPlain: true')).toBeVisible();
});

test('does not pass isScrollable to Menu by default', async () => {
  render(
    <Dropdown isOpen={true} toggle={toggleRef => toggle(toggleRef)}>
      {dropdownChildren}
    </Dropdown>
  );

  expect(await screen.findByText('isScrollable: undefined')).toBeVisible();
});

test('passes isScrollable to Menu', async () => {
  render(
    <Dropdown isScrollable isOpen={true} toggle={toggleRef => toggle(toggleRef)}>
      {dropdownChildren}
    </Dropdown>
  );

  expect(await screen.findByText('isScrollable: true')).toBeVisible();
});

test('does not pass minWidth to Menu by default', async () => {
  render(
    <Dropdown isOpen={true} toggle={toggleRef => toggle(toggleRef)}>
      {dropdownChildren}
    </Dropdown>
  );

  expect(await screen.findByText('minWidth: undefined')).toBeVisible();
});

test('passes minWidth to Menu', async () => {
  render(
    <Dropdown minWidth="100px" isOpen={true} toggle={toggleRef => toggle(toggleRef)}>
      {dropdownChildren}
    </Dropdown>
  );

  expect(await screen.findByText('minWidth: 100px')).toBeVisible();
});

test('passes zIndex to popper', async () => {
  render(
    <Dropdown zIndex={100} toggle={toggleRef => toggle(toggleRef)}>
      {dropdownChildren}
    </Dropdown>
  );

  expect(await screen.findByText('zIndex: 100')).toBeVisible();
});

test('passes isOpen to popper', async () => {
  render(
    <Dropdown isOpen toggle={toggleRef => toggle(toggleRef)}>
      {dropdownChildren}
    </Dropdown>
  );

  expect(await screen.findByText('isOpen: true')).toBeVisible();
});

test('passes onSelect callback', async () => {
  const user = userEvent.setup();

  const onSelect = jest.fn();
  render(
    <Dropdown onSelect={onSelect} toggle={toggleRef => toggle(toggleRef)}>
      {dropdownChildren}
    </Dropdown>
  );

  const trigger = await screen.findByText('Mock item');
  await user.click(trigger);

  expect(onSelect).toBeCalledTimes(1);
});

//throws error because of bug in dropdown
//should fail until issue gets resolved
test('onOpenChange is not called when not passed', async () => {
  const user = userEvent.setup();
  const onOpenChange = jest.fn();

  render(
    <Dropdown isOpen={true} toggle={toggleRef => toggle(toggleRef)}>
      {dropdownChildren}
    </Dropdown>
  );

  const dropdown = await screen.findByRole('button');
  await user.click(dropdown);
  await user.click(document.body);

  await user.click(dropdown);
  await user.keyboard('{Tab}');

  await user.click(dropdown);
  await user.keyboard('{Escape}');

  expect(onOpenChange).not.toBeCalled();
});

test('onOpenChange is not called without user interaction', async () => {
  const user = userEvent.setup();
  const onOpenChange = jest.fn();

  render(
    <Dropdown isOpen={true} onOpenChange={onOpenChange} toggle={toggleRef => toggle(toggleRef)}>
      {dropdownChildren}
    </Dropdown>
  );

  const dropdown = await screen.findByRole('button');
  await user.click(dropdown);

  expect(onOpenChange).not.toBeCalled();
});

test('onOpenChange is called when passed and user clicks outside of dropdown', async () => {
  const user = userEvent.setup();
  const onOpenChange = jest.fn();

  render(
    <Dropdown isOpen={true} onOpenChange={onOpenChange} toggle={toggleRef => toggle(toggleRef)}>
      {dropdownChildren}
    </Dropdown>
  );

  const dropdown = await screen.findByRole('button');
  await user.click(dropdown);
  await user.click(document.body);

  expect(onOpenChange).toBeCalledTimes(1);
});

test('onOpenChange is called when passed and user presses tab key', async () => {
  const user = userEvent.setup();
  const onOpenChange = jest.fn();

  render(
    <Dropdown isOpen={true} onOpenChange={onOpenChange} toggle={toggleRef => toggle(toggleRef)}>
      {dropdownChildren}
    </Dropdown>
  );

  //focus dropdown
  const dropdown = await screen.findByRole('button');
  await user.click(dropdown);
  await user.keyboard('{Tab}');

  expect(onOpenChange).toBeCalledTimes(1);
});

test('onOpenChange is called when passed and user presses esc key', async () => {
  const user = userEvent.setup();
  const onOpenChange = jest.fn();

  render(
    <Dropdown isOpen={true} onOpenChange={onOpenChange} toggle={toggleRef => toggle(toggleRef)}>
      {dropdownChildren}
    </Dropdown>
  );

  //focus dropdown
  const dropdown = await screen.findByRole('button');
  await user.click(dropdown);
  await user.keyboard('{Escape}');

  expect(onOpenChange).toBeCalledTimes(1);
});

test('match snapshot', async () => {
  const { asFragment } = render(
    <Dropdown
      ouiaId={'dropdown'}
      isOpen
      isScrollable
      isPlain
      className={'customClass'}
      toggle={toggleRef => toggle(toggleRef)}
    >
      {dropdownChildren}
    </Dropdown>
  );

  await waitFor(() => expect(asFragment()).toMatchSnapshot());
});
