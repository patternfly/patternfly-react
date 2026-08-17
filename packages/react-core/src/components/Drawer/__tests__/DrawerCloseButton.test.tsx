import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ButtonProps } from '../../Button';
import { DrawerCloseButton } from '../DrawerCloseButton';

test('Renders with spread buttonProps', () => {
  render(<DrawerCloseButton buttonProps={{ isDisabled: true }} />);
  expect(screen.getByRole('button')).toBeDisabled();
});

test('Calls onClose when clicked', async () => {
  const onClose = jest.fn();
  const user = userEvent.setup();

  render(<DrawerCloseButton onClose={onClose} buttonProps={{ isDisabled: false }} />);
  await user.click(screen.getByRole('button'));
  expect(onClose).toHaveBeenCalledTimes(1);
});

test('Does not spread onClick from buttonProps but spreads other props', async () => {
  const onClose = jest.fn();
  const buttonOnClick = jest.fn();
  const user = userEvent.setup();

  render(
    <DrawerCloseButton
      onClose={onClose}
      buttonProps={{ id: 'drawer-close-button', onClick: buttonOnClick } as ButtonProps}
    />
  );

  const button = screen.getByRole('button');
  expect(button).toHaveAttribute('id', 'drawer-close-button');

  await user.click(button);

  expect(onClose).toHaveBeenCalledTimes(1);
  expect(buttonOnClick).not.toHaveBeenCalled();
});
