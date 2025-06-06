import { render, screen } from '@testing-library/react';
import { Button, ButtonState, ButtonVariant } from '../Button';
import styles from '@patternfly/react-styles/css/components/Button/button';

const { primary, secondary, tertiary, danger, warning, link, plain, control, stateful } = ButtonVariant;
const validDangerVariants = [secondary, link];
const invalidDangerVariants = [primary, tertiary, warning, plain, control, stateful];
const invalidInlineVariants = [primary, secondary, tertiary, danger, warning, plain, control, stateful];

Object.values(ButtonVariant).forEach((variant) => {
  if (variant !== 'primary') {
    test(`Does not render with class ${styles.modifiers[variant]} by default`, () => {
      render(<Button>Not {variant} Button</Button>);
      expect(screen.getByRole('button')).not.toHaveClass(styles.modifiers[variant]);
    });
  }

  test(`Renders with class ${styles.modifiers[variant]} when variant=${variant}`, () => {
    render(<Button variant={variant}>{variant} Button</Button>);
    expect(screen.getByRole('button')).toHaveClass(styles.modifiers[variant]);
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

test(`Renders with class ${styles.button} by default`, () => {
  render(<Button>Button</Button>);
  expect(screen.getByRole('button')).toHaveClass(styles.button);
});

test(`Renders with class ${styles.modifiers.primary} by default`, () => {
  render(<Button>Button</Button>);
  expect(screen.getByText('Button').parentElement).toHaveClass(styles.modifiers.primary);
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

test(`Renders with class ${styles.modifiers.block} when isBlock = true`, () => {
  render(<Button isBlock>Block Button</Button>);
  expect(screen.getByRole('button')).toHaveClass(styles.modifiers.block);
});

test(`Renders with class ${styles.modifiers.clicked} when isClicked = true`, () => {
  render(<Button isClicked>Clicked Button</Button>);
  expect(screen.getByRole('button')).toHaveClass(styles.modifiers.clicked);
});

test(`Does not render with class ${styles.modifiers.disabled} by default when isDisabled = true`, () => {
  render(<Button isDisabled>Disabled Button</Button>);
  expect(screen.getByRole('button')).not.toHaveClass(styles.modifiers.disabled);
});

test(`Renders with class ${styles.modifiers.disabled} when isDisabled = true and component is not a button`, () => {
  render(
    <Button isDisabled component="a">
      Disabled Anchor Button
    </Button>
  );
  expect(screen.getByText('Disabled Anchor Button').parentElement).toHaveClass(styles.modifiers.disabled);
});

test(`aria-disabled and class ${styles.modifiers.ariaDisabled} are not rendered when isAriaDisabled is not passed by default`, () => {
  render(<Button>Button</Button>);

  const button = screen.getByRole('button');
  expect(button).not.toHaveAttribute('aria-disabled');
  expect(button).not.toHaveClass(styles.modifiers.ariaDisabled);
});

test(`aria-disabled and class ${styles.modifiers.ariaDisabled} are not rendered when isDisabled is true, but isAriaDisabled is not passed`, () => {
  render(<Button isDisabled>Disabled Button</Button>);

  const button = screen.getByRole('button');
  expect(button).not.toHaveAttribute('aria-disabled');
  expect(button).not.toHaveClass(styles.modifiers.ariaDisabled);
});

test(`Renders with class ${styles.modifiers.ariaDisabled} and aria-disabled attribute when isAriaDisabled = true`, () => {
  render(<Button isAriaDisabled>Disabled yet focusable button</Button>);
  const button = screen.getByRole('button');

  expect(button).toHaveAttribute('aria-disabled', 'true');
  expect(button).toHaveClass(styles.modifiers.ariaDisabled);
});

test('Does not disable button when isDisabled = true and component = a', () => {
  render(
    <Button isDisabled component="a">
      Disabled yet focusable button
    </Button>
  );
  expect(screen.getByText('Disabled yet focusable button')).not.toHaveProperty('disabled');
});

test(`Renders with class ${styles.modifiers.unread} by default when variant = stateful`, () => {
  render(<Button variant="stateful">Stateful Button</Button>);
  expect(screen.getByRole('button')).toHaveClass(styles.modifiers.unread);
});

Object.values(ButtonState).forEach((state) => {
  test(`Renders with class ${styles.modifiers[state]} when state = ${state} and variant = stateful`, () => {
    render(
      <Button variant="stateful" state={state}>
        Stateful Button - {state}
      </Button>
    );
    expect(screen.getByRole('button')).toHaveClass(styles.modifiers[state]);
  });
});

Object.values(validDangerVariants).forEach((validDangerVariant) => {
  test(`Renders with class ${styles.modifiers.danger} when isDanger is true and variant = ${validDangerVariant}`, () => {
    render(
      <Button variant={validDangerVariant} isDanger>
        Danger Button
      </Button>
    );
    expect(screen.getByRole('button')).toHaveClass(styles.modifiers.danger);
  });
});

Object.values(invalidDangerVariants).forEach((invalidDangerVariant) => {
  test(`Does not render with class ${styles.modifiers.danger} when isDanger is true and variant = ${invalidDangerVariant}`, () => {
    render(
      <Button variant={invalidDangerVariant} isDanger>
        Danger Button
      </Button>
    );
    expect(screen.getByRole('button')).not.toHaveClass(styles.modifiers.danger);
  });
});

test(`Renders with class ${styles.modifiers.inline} when isInline = true and variant = link`, () => {
  render(
    <Button variant={ButtonVariant.link} isInline>
      Inline Button
    </Button>
  );
  expect(screen.getByRole('button')).toHaveClass(styles.modifiers.inline);
});

Object.values(invalidInlineVariants).forEach((invalidInlineVariant) => {
  test(`Does not render with class ${styles.modifiers.inline} when isInline is true and variant = ${invalidInlineVariants}`, () => {
    render(
      <Button variant={invalidInlineVariants} isInline>
        Inline Button
      </Button>
    );
    expect(screen.getByRole('button')).not.toHaveClass(styles.modifiers.inline);
  });
});

test(`Renders with class ${styles.modifiers.small} when size = sm`, () => {
  render(<Button size="sm">Small Button</Button>);
  expect(screen.getByRole('button')).toHaveClass(styles.modifiers.small);
});

test(`Renders with class ${styles.modifiers.displayLg} when size = lg`, () => {
  render(<Button size="lg">Large Button</Button>);
  expect(screen.getByRole('button')).toHaveClass(styles.modifiers.displayLg);
});

test(`Renders with classes ${styles.modifiers.inProgress} when isLoading = true`, () => {
  render(
    <Button isLoading spinnerAriaValueText="Loading">
      Loading Button
    </Button>
  );
  expect(screen.getByRole('button')).toHaveClass(styles.modifiers.inProgress);
});

test(`Renders with class ${styles.modifiers.progress} when isLoading is true`, () => {
  render(
    <Button isLoading spinnerAriaValueText="Loading">
      Loading Button
    </Button>
  );
  expect(screen.getByRole('button')).toHaveClass(styles.modifiers.progress);
});

test(`Renders with class ${styles.modifiers.progress} when isLoading is defined and isLoading = false`, () => {
  render(
    <Button isLoading={false} spinnerAriaValueText="Loading">
      Loading Button
    </Button>
  );
  expect(screen.getByRole('button')).toHaveClass(styles.modifiers.progress);
});

test(`Renders without class ${styles.modifiers.progress} when isLoading = false and variant = plain`, () => {
  render(
    <Button variant="plain" isInline isLoading={false} aria-label="Loading" spinnerAriaValueText="Loading">
      Loading Button
    </Button>
  );
  expect(screen.getByRole('button')).not.toHaveClass(styles.modifiers.progress);
});

test(`Renders custom icon with class ${styles.modifiers.inProgress} when isLoading = true and icon is present`, () => {
  render(
    <Button variant="plain" isLoading aria-label="Upload" spinnerAriaValueText="Loading" icon={<div>ICON</div>} />
  );

  expect(screen.getByText('ICON')).toBeVisible();
  expect(screen.getByText('ICON').parentElement?.parentElement).toHaveClass(styles.modifiers.inProgress);
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

test(`Renders with class ${styles.modifiers.favorite} when isFavorite is true`, () => {
  render(<Button isFavorite />);
  expect(screen.getByRole('button')).toHaveClass(styles.modifiers.favorite);
});

test(`Renders with class ${styles.modifiers.favorited} when isFavorite is true and isFavorited is true`, () => {
  render(<Button isFavorite isFavorited />);
  expect(screen.getByRole('button')).toHaveClass(styles.modifiers.favorited);
});

test(`Does not render with class ${styles.modifiers.favorite} when isFavorite is false`, () => {
  render(<Button />);
  expect(screen.getByRole('button')).not.toHaveClass(styles.modifiers.favorite);
});

test(`Does not render with class ${styles.modifiers.favorited} when isFavorite is true and isFavorited is false`, () => {
  render(<Button isFavorite />);
  expect(screen.getByRole('button')).not.toHaveClass(styles.modifiers.favorited);
});

test('Overrides icon prop when isFavorite is true', () => {
  render(<Button isFavorite icon={<div>Icon content</div>} />);
  expect(screen.queryByText('Icon content')).not.toBeInTheDocument();
});
