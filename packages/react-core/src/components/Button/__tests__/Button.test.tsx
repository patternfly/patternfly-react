import React from 'react';

import { render, screen } from '@testing-library/react';

import CartArrowDownIcon from '@patternfly/react-icons/dist/esm/icons/cart-arrow-down-icon';
import { Button, ButtonVariant } from '../Button';

Object.values(ButtonVariant).forEach((variant) => {
  if (variant !== 'primary') {
    test(`Does not render with class pf-m-${variant} by default`, () => {
      render(<Button>Not {variant} Button</Button>);
      expect(screen.getByText(`Not ${variant} Button`)).not.toHaveClass(`pf-m-${variant}`);
    });
  }

  test(`Renders with class pf-m-${variant} when variant=${variant}`, () => {
    render(
      <Button variant={variant} aria-label={variant}>
        {variant} Button
      </Button>
    );
    expect(screen.getByText(`${variant} Button`)).toHaveClass(`pf-m-${variant}`);
  });
});

test('Renders with an aria-label with plain button', () => {
  const label = 'aria-label test';
  render(<Button aria-label={label} />);

  expect(screen.getByLabelText(label)).toHaveAccessibleName('aria-label test');
});

test('Renders with class pf-m-link when variant = link', () => {
  render(
    <Button variant={ButtonVariant.link} icon={<CartArrowDownIcon />}>
      Block Button
    </Button>
  );
  expect(screen.getByText('Block Button')).toHaveClass('pf-m-link');
});

test('Renders with class pf-m-block when isBlock = true', () => {
  render(<Button isBlock>Block Button</Button>);
  expect(screen.getByText('Block Button')).toHaveClass('pf-m-block');
});

test('Renders with class pf-m-disabled when isDisabled = true', () => {
  render(<Button isDisabled>Disabled Button</Button>);
  expect(screen.getByText('Disabled Button')).toHaveClass('pf-m-disabled');
});

test('Renders with class pf-m-aria-disabled when isAriaDisabled = true', () => {
  render(<Button isAriaDisabled>Disabled yet focusable button</Button>);
  expect(screen.getByText('Disabled yet focusable button')).toHaveClass('pf-m-aria-disabled');
});

test('Renders with class pf-m-aria-disabled when isAriaDisabled = true and component = a', () => {
  render(
    <Button isAriaDisabled component="a">
      Disabled yet focusable button
    </Button>
  );
  expect(screen.getByText('Disabled yet focusable button')).toHaveClass('pf-m-aria-disabled');
});

test('Renders with class pf-m-danger when isDanger = true and variant = secondary', () => {
  render(
    <Button variant="secondary" isDanger>
      Danger Button
    </Button>
  );
  expect(screen.getByText('Danger Button')).toHaveClass('pf-m-danger', 'pf-m-secondary');
});

test('Renders with class pf-m-danger when isDanger = true and variant = link', () => {
  render(
    <Button variant="link" isDanger>
      Danger Button
    </Button>
  );
  expect(screen.getByText('Danger Button')).toHaveClass('pf-m-danger', 'pf-m-link');
});

test('Does not render with class pf-m-danger when isDanger = true and variant != secondary or link', () => {
  render(
    <Button variant="primary" isDanger>
      Danger Button
    </Button>
  );
  expect(screen.getByText('Danger Button')).not.toHaveClass('pf-m-danger');
});

test('Renders with class pf-m-inline when isInline = true', () => {
  render(
    <Button variant={ButtonVariant.link} isInline>
      Hovered Button
    </Button>
  );
  expect(screen.getByText('Hovered Button')).toHaveClass('pf-m-inline');
});

test('Renders with class pf-m-small when size = sm', () => {
  render(<Button size="sm">Small Button</Button>);
  expect(screen.getByText('Small Button')).toHaveClass('pf-m-small');
});

test('Renders with class pf-m-large when size = lg', () => {
  render(<Button size="lg">Large Button</Button>);
  expect(screen.getByText('Large Button')).toHaveClass('pf-m-display-lg');
});

test('Renders with class pf-m-in-progress when isLoading = true', () => {
  render(
    <Button isLoading spinnerAriaValueText="Loading">
      Loading Button
    </Button>
  );
  expect(screen.getByText('Loading Button')).toHaveClass('pf-m-in-progress');
});

test('Renders with class pf-m-in-progress when isLoading = true and variant = link', () => {
  render(
    <Button variant="link" isInline isLoading aria-label="Loading" spinnerAriaValueText="Loading">
      Loading Button
    </Button>
  );
  expect(screen.getByText('Loading Button')).toHaveClass('pf-m-in-progress');
});

test('Renders custom icon with class pf-m-in-progress when isLoading = true and icon is present', () => {
  render(
    <Button variant="plain" isLoading aria-label="Upload" spinnerAriaValueText="Loading" icon={<div>ICON</div>} />
  );

  expect(screen.getByText('ICON')).toBeVisible();
  expect(screen.getByText('ICON').parentElement).toHaveClass('pf-m-in-progress');
});

test('Renders as anchor when component = a', () => {
  const component = 'a';
  render(<Button component={component}>anchor button</Button>);

  expect(screen.getByText('anchor button').tagName).toBe('A');
});

test('Renders as div when component = div', () => {
  const Component = () => <div>im a div</div>;
  render(<Button component={Component} />);

  expect(screen.getByText('im a div').tagName).toBe('DIV');
});

test('aria-disabled is set to true and tabIndex to -1 if component is not a button and is disabled', () => {
  render(
    <Button component="a" isDisabled>
      Disabled Anchor Button
    </Button>
  );
  expect(screen.getByText('Disabled Anchor Button')).toHaveAttribute('tabindex', '-1');
});

test('setting tab index through props', () => {
  render(<Button tabIndex={0}>TabIndex 0 Button</Button>);
  expect(screen.getByRole('button')).toHaveAttribute('tabindex', '0');
});
