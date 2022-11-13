import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { AlertActionCloseButton } from '../AlertActionCloseButton';
import { AlertContext } from '../AlertContext';

jest.mock('../../Button');

test('Renders without children', () => {
  render(
    <AlertContext.Provider value={{ title: 'title', variantLabel: 'variantLabel' }}>
      <AlertActionCloseButton />
    </AlertContext.Provider>
  );

  expect(screen.getByRole('button')).toBeVisible();
});

test('Renders with custom class names provided via prop', () => {
  render(
    <AlertContext.Provider value={{ title: 'title', variantLabel: 'variantLabel' }}>
      <AlertActionCloseButton className="custom-class" />
    </AlertContext.Provider>
  );

  expect(screen.getByRole('button')).toHaveClass('custom-class');
});

test('Renders with inherited element props spread to the component', () => {
  render(
    <AlertContext.Provider value={{ title: 'title', variantLabel: 'variantLabel' }}>
      <AlertActionCloseButton aria-labelledby="labelling-id" />
    </AlertContext.Provider>
  );

  expect(screen.getByRole('button')).toHaveAccessibleName('Test label');
});

test('Renders a Button with variant: ButtonVariant.plain', () => {
  render(
    <AlertContext.Provider value={{ title: 'title', variantLabel: 'variantLabel' }}>
      <AlertActionCloseButton />
    </AlertContext.Provider>
  );

  expect(screen.getByText('variant: plain')).toBeVisible();
});

test('Does not call the callback provided via onClose when it is not clicked', () => {
  const onCloseMock = jest.fn();

  render(
    <AlertContext.Provider value={{ title: 'title', variantLabel: 'variantLabel' }}>
      <AlertActionCloseButton onClose={onCloseMock} />
    </AlertContext.Provider>
  );

  expect(onCloseMock).not.toHaveBeenCalled();
});

test('Calls the callback provided via onClose when clicked', async () => {
  const onCloseMock = jest.fn();
  const user = userEvent.setup();

  render(
    <AlertContext.Provider value={{ title: 'title', variantLabel: 'variantLabel' }}>
      <AlertActionCloseButton onClose={onCloseMock} />
    </AlertContext.Provider>
  );

  await user.click(screen.getByRole('button'));

  expect(onCloseMock).toHaveBeenCalledTimes(1);
});

test('Renders with an aria label composed with the title and variantLabel provided via a context by default', () => {
  render(
    <AlertContext.Provider value={{ title: 'title', variantLabel: 'variantLabel' }}>
      <AlertActionCloseButton />
    </AlertContext.Provider>
  );

  expect(screen.getByRole('button')).toHaveAccessibleName('Close variantLabel alert: title');
});

test('Renders with an aria label composed with the title provided via a context and variantLabel provided via prop', () => {
  render(
    <AlertContext.Provider value={{ title: 'title', variantLabel: 'variantLabel' }}>
      <AlertActionCloseButton variantLabel="variant label prop" />
    </AlertContext.Provider>
  );

  expect(screen.getByRole('button')).toHaveAccessibleName('Close variant label prop alert: title');
});

test('Renders with the aria label provided via prop when one is provided', () => {
  render(
    <AlertContext.Provider value={{ title: 'title', variantLabel: 'variantLabel' }}>
      <AlertActionCloseButton aria-label="Aria label prop" />
    </AlertContext.Provider>
  );

  expect(screen.getByRole('button')).toHaveAccessibleName('Aria label prop');
});

test('Matches the snapshot', () => {
  const { asFragment } = render(
    <AlertContext.Provider value={{ title: 'title', variantLabel: 'variantLabel' }}>
      <AlertActionCloseButton />
    </AlertContext.Provider>
  );
  expect(asFragment()).toMatchSnapshot();
});
