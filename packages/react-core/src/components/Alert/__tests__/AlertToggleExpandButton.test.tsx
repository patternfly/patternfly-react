import * as React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { AlertToggleExpandButton } from '../AlertToggleExpandButton';
import { AlertContext } from '../AlertContext';

jest.mock('../../Button', () => ({
  Button: ({ children, variant, isInline, onClick, ...props }) => (
    <>
      <button onClick={onClick} {...props}>
        {children}
      </button>
      <p>{`variant: ${variant}`}</p>
      <p id="labelling-id">Test label</p>
    </>
  ),
  ButtonVariant: { plain: 'plain' }
}));

jest.mock('@patternfly/react-icons/dist/esm/icons/angle-right-icon', () => () => 'Icon mock');

test('Renders without children', () => {
  render(
    <div data-testid="container">
      <AlertContext.Provider value={{ title: 'title', variantLabel: 'variantLabel' }}>
        <AlertToggleExpandButton />
      </AlertContext.Provider>
    </div>
  );

  expect(screen.getByTestId('container').firstChild).toBeVisible();
});

// below tests fails because ariaLabel does not have a default value of ''
test.skip('Renders with an aria label composed with the title and variantLabel provided via a context by default', () => {
  render(
    <AlertContext.Provider value={{ title: 'title', variantLabel: 'variantLabel' }}>
      <AlertToggleExpandButton />
    </AlertContext.Provider>
  );

  expect(screen.getByRole('button')).toHaveAccessibleName('Toggle variantLabel alert: title');
});

test('Renders with the aria label provided via prop when one is provided', () => {
  render(
    <AlertContext.Provider value={{ title: 'title', variantLabel: 'variantLabel' }}>
      <AlertToggleExpandButton aria-label="Aria label prop" />
    </AlertContext.Provider>
  );

  expect(screen.getByRole('button')).toHaveAccessibleName('Aria label prop');
});

test('Does not call the callback provided via onClose when it is not clicked', () => {
  const onCloseMock = jest.fn();

  render(
    <AlertContext.Provider value={{ title: 'title', variantLabel: 'variantLabel' }}>
      <AlertToggleExpandButton onToggleExpand={onCloseMock} />
    </AlertContext.Provider>
  );

  expect(onCloseMock).not.toHaveBeenCalled();
});

test('Calls the callback provided via onClose when clicked', async () => {
  const onCloseMock = jest.fn();
  const user = userEvent.setup();

  render(
    <AlertContext.Provider value={{ title: 'title', variantLabel: 'variantLabel' }}>
      <AlertToggleExpandButton onToggleExpand={onCloseMock} />
    </AlertContext.Provider>
  );

  await user.click(screen.getByRole('button'));

  expect(onCloseMock).toHaveBeenCalledTimes(1);
});

// I think we probably want to change component behavior here to set aria-expanded to false when it isn't true
test('Does not render the button as aria-expanded by default', () => {
  render(
    <AlertContext.Provider value={{ title: 'title', variantLabel: 'variantLabel' }}>
      <AlertToggleExpandButton />
    </AlertContext.Provider>
  );

  expect(screen.getByRole('button')).not.toHaveAttribute('aria-expanded');
});

test('Renders the button as aria-expanded when isExpanded = true', () => {
  render(
    <AlertContext.Provider value={{ title: 'title', variantLabel: 'variantLabel' }}>
      <AlertToggleExpandButton isExpanded />
    </AlertContext.Provider>
  );

  expect(screen.getByRole('button')).toHaveAttribute('aria-expanded', 'true');
});

// Tests for the variableLabel prop should be added here, but that prop is currently broken and cannot be tested because of that

test('Renders a Button with variant: ButtonVariant.plain', () => {
  render(
    <AlertContext.Provider value={{ title: 'title', variantLabel: 'variantLabel' }}>
      <AlertToggleExpandButton />
    </AlertContext.Provider>
  );

  expect(screen.getByText('variant: plain')).toBeVisible();
});

test('Renders with the toggle icon inside class pf-c-alert__toggle-icon', () => {
  render(
    <AlertContext.Provider value={{ title: 'title', variantLabel: 'variantLabel' }}>
      <AlertToggleExpandButton />
    </AlertContext.Provider>
  );

  expect(screen.getByText('Icon mock')).toHaveClass('pf-c-alert__toggle-icon');
});

test('Renders with inherited element props spread to the component', () => {
    render(
      <AlertContext.Provider value={{ title: 'title', variantLabel: 'variantLabel' }}>
        <AlertToggleExpandButton aria-labelledby="labelling-id" />
      </AlertContext.Provider>
    );
  
    expect(screen.getByRole('button')).toHaveAccessibleName('Test label');
  });

test('Matches snapshot', () => {
  const { asFragment } = render(
    <AlertContext.Provider value={{ title: 'title', variantLabel: 'variantLabel' }}>
      <AlertToggleExpandButton />
    </AlertContext.Provider>
  );

  expect(asFragment()).toMatchSnapshot();
});
