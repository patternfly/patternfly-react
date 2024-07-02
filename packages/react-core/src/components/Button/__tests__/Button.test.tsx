import React from 'react';

import { render, screen } from '@testing-library/react';

import { Button, ButtonState, ButtonVariant } from '../Button';

Object.values(ButtonVariant).forEach((variant) => {
  if (variant !== 'primary') {
    test(`Does not render with class pf-m-${variant} by default`, () => {
      render(<Button>Not {variant} Button</Button>);
      expect(screen.getByRole('button')).not.toHaveClass(`pf-m-${variant}`);
    });
  }

  test(`Renders with class pf-m-${variant} when variant=${variant}`, () => {
    render(<Button variant={variant}>{variant} Button</Button>);
    expect(screen.getByRole('button')).toHaveClass(`pf-m-${variant}`);
  });
});

test('Renders without children', () => {
  render(
    <div data-testid="container">
      <Button />
    </div>
  );

  expect(screen.getByTestId('container').firstChild).toBeVisible();
});

test('Renders with class pf-v6-c-button by default', () => {
  render(<Button>Button</Button>);
  expect(screen.getByRole('button')).toHaveClass('pf-v6-c-button');
});

test('Renders with class pf-m-primary by default', () => {
  render(<Button>Button</Button>);
  expect(screen.getByText('Button').parentElement).toHaveClass('pf-m-primary');
});

test('Renders with custom class', () => {
  render(<Button className="custom-class">CSS Button</Button>);
  expect(screen.getByRole('button')).toHaveClass('custom-class');
});

test('Renders with an aria-label', () => {
  const label = 'aria-label test';
  render(<Button aria-label={label} />);

  expect(screen.getByLabelText(label)).toHaveAccessibleName('aria-label test');
});

test('Renders with class pf-m-block when isBlock = true', () => {
  render(<Button isBlock>Block Button</Button>);
  expect(screen.getByRole('button')).toHaveClass('pf-m-block');
});

test('Renders with class pf-m-clicked when isClicked = true', () => {
  render(<Button isClicked>Clicked Button</Button>);
  expect(screen.getByRole('button')).toHaveClass('pf-m-clicked');
});

test('Does not render with class pf-m-disabled by default when isDisabled = true', () => {
  render(<Button isDisabled>Disabled Button</Button>);
  expect(screen.getByRole('button')).not.toHaveClass('pf-m-disabled');
});

test('aria-disabled is set to false when isDisabled = true', () => {
  render(<Button isDisabled>Disabled Button</Button>);
  expect(screen.getByRole('button')).toHaveAttribute('aria-disabled', 'false');
});

test('Renders with class pf-m-disabled when isDisabled = true and component is not a button', () => {
  render(
    <Button isDisabled component="a">
      Disabled Anchor Button
    </Button>
  );
  expect(screen.getByText('Disabled Anchor Button').parentElement).toHaveClass('pf-m-disabled');
});

test('Renders with class pf-m-aria-disabled when isAriaDisabled = true', () => {
  render(<Button isAriaDisabled>Disabled yet focusable button</Button>);
  expect(screen.getByRole('button')).toHaveClass('pf-m-aria-disabled');
});

test('Does not disable button when isDisabled = true and component = a', () => {
  render(
    <Button isDisabled component="a">
      Disabled yet focusable button
    </Button>
  );
  expect(screen.getByText('Disabled yet focusable button')).not.toHaveProperty('disabled');
});

test('Renders with class pf-m-unread by default when variant = stateful', () => {
  render(<Button variant="stateful">Stateful Button</Button>);
  expect(screen.getByRole('button')).toHaveClass('pf-m-stateful', 'pf-m-unread');
});

Object.values(ButtonState).forEach((state) => {
  test(`Renders with class pf-m-${state} when state = ${state} and variant = stateful`, () => {
    render(
      <Button variant="stateful" state={state}>
        Stateful Button - {state}
      </Button>
    );
    expect(screen.getByRole('button')).toHaveClass('pf-m-stateful', `pf-m-${state}`);
  });
});

test('Renders with class pf-m-danger when isDanger = true and variant = secondary', () => {
  render(
    <Button variant="secondary" isDanger>
      Danger Button
    </Button>
  );
  expect(screen.getByRole('button')).toHaveClass('pf-m-danger', 'pf-m-secondary');
});

test('Renders with class pf-m-danger when isDanger = true and variant = link', () => {
  render(
    <Button variant="link" isDanger>
      Danger Button
    </Button>
  );
  expect(screen.getByRole('button')).toHaveClass('pf-m-danger', 'pf-m-link');
});

test('Does not render with class pf-m-danger when isDanger = true and variant != secondary or link', () => {
  render(
    <Button variant="primary" isDanger>
      Danger Button
    </Button>
  );
  expect(screen.getByRole('button')).not.toHaveClass('pf-m-danger');
});

test('Does not render with class pf-m-danger when isDanger = true and variant = tertiary', () => {
  render(
    <Button variant="tertiary" isDanger>
      Danger Button
    </Button>
  );
  expect(screen.getByRole('button')).not.toHaveClass('pf-m-danger');
});

test('Does not render with class pf-m-danger when isDanger = true and variant = control', () => {
  render(
    <Button variant="control" isDanger>
      Danger Button
    </Button>
  );
  expect(screen.getByRole('button')).not.toHaveClass('pf-m-danger');
});

test('Renders with class pf-m-inline when isInline = true and variant = link', () => {
  render(
    <Button variant={ButtonVariant.link} isInline>
      Hovered Button
    </Button>
  );
  expect(screen.getByRole('button')).toHaveClass('pf-m-inline');
});

test('Renders with class pf-m-small when size = sm', () => {
  render(<Button size="sm">Small Button</Button>);
  expect(screen.getByRole('button')).toHaveClass('pf-m-small');
});

test('Renders with class pf-m-display-lg when size = lg', () => {
  render(<Button size="lg">Large Button</Button>);
  expect(screen.getByRole('button')).toHaveClass('pf-m-display-lg');
});

test('Renders with class pf-m-in-progress when isLoading = true', () => {
  render(
    <Button isLoading spinnerAriaValueText="Loading">
      Loading Button
    </Button>
  );
  expect(screen.getByRole('button')).toHaveClass('pf-m-in-progress');
});

test('Renders with class pf-m-progress when isLoading is defined and isLoading = false', () => {
  render(
    <Button isLoading={false} spinnerAriaValueText="Loading">
      Loading Button
    </Button>
  );
  expect(screen.getByRole('button')).toHaveClass('pf-m-progress');
});

test('Renders without class pf-m-progress when isLoading = false and variant = plain', () => {
  render(
    <Button variant="plain" isInline isLoading={false} aria-label="Loading" spinnerAriaValueText="Loading">
      Loading Button
    </Button>
  );
  expect(screen.getByRole('button')).not.toHaveClass('pf-m-progress');
});

test('Renders custom icon with class pf-m-in-progress when isLoading = true and icon is present', () => {
  render(
    <Button variant="plain" isLoading aria-label="Upload" spinnerAriaValueText="Loading" icon={<div>ICON</div>} />
  );

  expect(screen.getByText('ICON')).toBeVisible();
  expect(screen.getByText('ICON').parentElement?.parentElement).toHaveClass('pf-m-in-progress');
});

test('Renders as custom component when component is passed', () => {
  const component = 'a';
  render(<Button component={component}>anchor button</Button>);

  expect(screen.getByText('anchor button').parentElement?.tagName).toBe('A');
});

test('aria-disabled is set to true and tabIndex to -1 if component is not a button and is disabled', () => {
  render(
    <Button component="a" isDisabled>
      Disabled Anchor Button
    </Button>
  );
  const anchor = screen.getByText('Disabled Anchor Button').parentElement;
  expect(anchor).toHaveAttribute('tabindex', '-1');
  expect(anchor).toHaveAttribute('aria-disabled', 'true');
});

test('setting tab index through props', () => {
  render(<Button tabIndex={0}>TabIndex 0 Button</Button>);
  expect(screen.getByRole('button')).toHaveAttribute('tabindex', '0');
});

test(`Renders basic button`, () => {
  const { asFragment } = render(<Button aria-label="basic button">Basic Button</Button>);
  expect(asFragment()).toMatchSnapshot();
});
