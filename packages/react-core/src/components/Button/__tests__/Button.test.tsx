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

test('Does not render aria-expanded by default', () => {
  render(<Button>Test</Button>);

  expect(screen.getByRole('button')).not.toHaveAttribute('aria-expanded');
});

test('Renders with aria-expanded when isExpanded is true', () => {
  render(<Button isExpanded>Test</Button>);

  expect(screen.getByRole('button')).toHaveAttribute('aria-expanded', 'true');
});

test('Renders with aria-expanded when isExpanded is false', () => {
  render(<Button isExpanded={false}>Test</Button>);

  expect(screen.getByRole('button')).toHaveAttribute('aria-expanded', 'false');
});

// Remove this test when isExpanded prop in Button code is moved to after the spread props
test('Passing aria-expanded overrides isExpanded', () => {
  render(
    <Button aria-expanded={false} isExpanded>
      Test
    </Button>
  );

  expect(screen.getByRole('button')).toHaveAttribute('aria-expanded', 'false');
});

describe('Hamburger button', () => {
  test('Throws console error when isHamburger is true and isExpanded is not passed', () => {
    const consoleError = jest.spyOn(console, 'error').mockImplementation();

    render(<Button isHamburger aria-label="Test" />);

    expect(consoleError).toHaveBeenCalledWith(
      'Button: when the isHamburger property is passed in, you must also pass in a boolean value to the isExpanded property. It is expected that a hamburger button controls the expansion of other content.'
    );
  });

  test('Does not throw console error when isHamburger is true and isExpanded is false', () => {
    const consoleError = jest.spyOn(console, 'error').mockImplementation();

    render(<Button isExpanded={false} isHamburger aria-label="Test" />);

    expect(consoleError).not.toHaveBeenCalledWith(
      'Button: when the isHamburger property is passed in, you must also pass in a boolean value to the isExpanded property. It is expected that a hamburger button controls the expansion of other content..'
    );
  });

  test('Does not throw console error when isHamburger is true and isExpanded is true', () => {
    const consoleError = jest.spyOn(console, 'error').mockImplementation();

    render(<Button isExpanded isHamburger aria-label="Test" />);

    expect(consoleError).not.toHaveBeenCalledWith(
      'Button: when the isHamburger property is passed in, you must also pass in a boolean value to the isExpanded property. It is expected that a hamburger button controls the expansion of other content..'
    );
  });

  // TODO: Remove isHamburger in breaking change to throw error for any button that does not have children or aria name
  test('Throws console error when isHamburger is true and neither children, aria-label nor aria-lablledby are passed', () => {
    const consoleError = jest.spyOn(console, 'error').mockImplementation();

    render(<Button isHamburger isExpanded />);

    expect(consoleError).toHaveBeenCalledWith(
      'Button: you must provide either visible text content or an accessible name via the aria-label or aria-labelledby properties.'
    );
  });
  // TODO: Remove isHamburger in breaking change to throw error for any button that does not have children or aria name
  test('Does not throw console error when isHamburger is true and children is passed', () => {
    const consoleError = jest.spyOn(console, 'error').mockImplementation();

    render(
      <Button isHamburger isExpanded>
        Test
      </Button>
    );

    expect(consoleError).not.toHaveBeenCalledWith(
      'Button: you must provide either visible text content or an accessible name via the aria-label or aria-labelledby properties.'
    );
  });

  // TODO: Remove isHamburger in breaking change to throw error for any button that does not have children or aria name
  test('Does not throw console error when isHamburger is true and aria-label is passed', () => {
    const consoleError = jest.spyOn(console, 'error').mockImplementation();

    render(<Button isHamburger isExpanded aria-label="Test" />);

    expect(consoleError).not.toHaveBeenCalledWith(
      'Button: you must provide either visible text content or an accessible name via the aria-label or aria-labelledby properties.'
    );
  });

  // TODO: Remove isHamburger in breaking change to throw error for any button that does not have children or aria name
  test('Does not throw console error when isHamburger is true and aria-labelledby is passed', () => {
    const consoleError = jest.spyOn(console, 'error').mockImplementation();

    render(
      <>
        <div id="label">Test</div>
        <Button isHamburger isExpanded aria-labelledby="label" />
      </>
    );

    expect(consoleError).not.toHaveBeenCalledWith(
      'Button: you must provide either visible text content or an accessible name via the aria-label or aria-labelledby properties.'
    );
  });

  test(`Does not render with class ${styles.modifiers.hamburger} by default`, () => {
    render(<Button aria-label="test" />);

    expect(screen.getByRole('button')).not.toHaveClass(styles.modifiers.hamburger);
  });

  test(`Renders with class ${styles.modifiers.hamburger} when isHamburger is true`, () => {
    render(<Button isHamburger isExpanded aria-label="test" />);

    expect(screen.getByRole('button')).toHaveClass(styles.modifiers.hamburger);
  });

  test('Does not render with hamburgerVariant class when isHamburger is true and hamburgerVariant is not passed', () => {
    render(<Button isHamburger isExpanded aria-label="test" />);

    expect(screen.getByRole('button')).not.toHaveClass(styles.modifiers.expand);
    expect(screen.getByRole('button')).not.toHaveClass(styles.modifiers.collapse);
  });

  test('Does not render with hamburgerVariant class when isHamburger is false and hamburgerVariant is passed', () => {
    render(<Button hamburgerVariant="expand" isExpanded aria-label="test" />);

    expect(screen.getByRole('button')).not.toHaveClass(styles.modifiers.expand);
    expect(screen.getByRole('button')).not.toHaveClass(styles.modifiers.collapse);
  });

  test(`Renders with class ${styles.modifiers.expand} when isHamburger is true and hamburgerVariant = expand`, () => {
    render(<Button isHamburger hamburgerVariant="expand" isExpanded aria-label="test" />);

    expect(screen.getByRole('button')).toHaveClass(styles.modifiers.expand);
    expect(screen.getByRole('button')).not.toHaveClass(styles.modifiers.collapse);
  });

  test(`Renders with class ${styles.modifiers.collapse} when isHamburger is true and hamburgerVariant = collapse`, () => {
    render(<Button isHamburger hamburgerVariant="collapse" isExpanded aria-label="test" />);

    expect(screen.getByRole('button')).not.toHaveClass(styles.modifiers.expand);
    expect(screen.getByRole('button')).toHaveClass(styles.modifiers.collapse);
  });

  test('Does not render custom icon when icon prop and isHamburger are passed', () => {
    render(<Button isHamburger isExpanded aria-label="test" icon={<div>Custom icon</div>} />);

    expect(screen.queryByText('Custom icon')).not.toBeInTheDocument();
  });
});

describe('Settings button', () => {
  // TODO: Remove isSettings in breaking change to throw error for any button that does not have children or aria name
  test('Throws console error when isSettings is true and neither children, aria-label nor aria-lablledby are passed', () => {
    const consoleError = jest.spyOn(console, 'error').mockImplementation();

    render(<Button isSettings />);

    expect(consoleError).toHaveBeenCalledWith(
      'Button: you must provide either visible text content or an accessible name via the aria-label or aria-labelledby properties.'
    );
  });

  // TODO: Remove isSettings in breaking change to throw error for any button that does not have children or aria name
  test('Does not throw console error when isSettings is true and children is passed', () => {
    const consoleError = jest.spyOn(console, 'error').mockImplementation();

    render(<Button isSettings>Settings</Button>);

    expect(consoleError).not.toHaveBeenCalledWith(
      'Button: you must provide either visible text content or an accessible name via the aria-label or aria-labelledby properties.'
    );
  });

  // TODO: Remove isSettings in breaking change to throw error for any button that does not have children or aria name
  test('Does not throw console error when isSettings is true and aria-label is passed', () => {
    const consoleError = jest.spyOn(console, 'error').mockImplementation();

    render(<Button isSettings aria-label="Test" />);

    expect(consoleError).not.toHaveBeenCalledWith(
      'Button: you must provide either visible text content or an accessible name via the aria-label or aria-labelledby properties.'
    );
  });

  // TODO: Remove isSettings in breaking change to throw error for any button that does not have children or aria name
  test('Does not throw console error when isSettings is true and aria-labelledby is passed', () => {
    const consoleError = jest.spyOn(console, 'error').mockImplementation();

    render(
      <>
        <div id="label">Test</div>
        <Button isSettings aria-labelledby="label" />
      </>
    );

    expect(consoleError).not.toHaveBeenCalledWith(
      'Button: you must provide either visible text content or an accessible name via the aria-label or aria-labelledby properties.'
    );
  });

  test(`Does not render with class ${styles.modifiers.settings} by default`, () => {
    render(<Button aria-label="test" />);

    expect(screen.getByRole('button')).not.toHaveClass(styles.modifiers.settings);
  });

  test(`Renders with class ${styles.modifiers.settings} when isSettings is true`, () => {
    render(<Button isSettings aria-label="test" />);

    expect(screen.getByRole('button')).toHaveClass(styles.modifiers.settings);
  });

  test('Does not render custom icon when icon prop and isSettings are passed', () => {
    render(<Button isSettings aria-label="test" icon={<div>Custom icon</div>} />);

    expect(screen.queryByText('Custom icon')).not.toBeInTheDocument();
  });
});

describe('Favorite button', () => {
  // TODO: Remove isFavorite in breaking change to throw error for any button that does not have children or aria name
  test('Throws console error when isFavorite is true and neither children, aria-label nor aria-lablledby are passed', () => {
    const consoleError = jest.spyOn(console, 'error').mockImplementation();

    render(<Button isFavorite />);

    expect(consoleError).toHaveBeenCalledWith(
      'Button: you must provide either visible text content or an accessible name via the aria-label or aria-labelledby properties.'
    );
  });

  // TODO: Remove isFavorite in breaking change to throw error for any button that does not have children or aria name
  test('Does not throw console error when isFavorite is true and children is passed', () => {
    const consoleError = jest.spyOn(console, 'error').mockImplementation();

    render(<Button isFavorite>Settings</Button>);

    expect(consoleError).not.toHaveBeenCalledWith(
      'Button: you must provide either visible text content or an accessible name via the aria-label or aria-labelledby properties.'
    );
  });

  // TODO: Remove isFavorite in breaking change to throw error for any button that does not have children or aria name
  test('Does not throw console error when isFavorite is true and aria-label is passed', () => {
    const consoleError = jest.spyOn(console, 'error').mockImplementation();

    render(<Button isFavorite aria-label="Test" />);

    expect(consoleError).not.toHaveBeenCalledWith(
      'Button: you must provide either visible text content or an accessible name via the aria-label or aria-labelledby properties.'
    );
  });

  // TODO: Remove isFavorite in breaking change to throw error for any button that does not have children or aria name
  test('Does not throw console error when isFavorite is true and aria-labelledby is passed', () => {
    const consoleError = jest.spyOn(console, 'error').mockImplementation();

    render(
      <>
        <div id="label">Test</div>
        <Button isFavorite aria-labelledby="label" />
      </>
    );

    expect(consoleError).not.toHaveBeenCalledWith(
      'Button: you must provide either visible text content or an accessible name via the aria-label or aria-labelledby properties.'
    );
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
});

test(`Renders basic button`, () => {
  const { asFragment } = render(<Button aria-label="basic button">Basic Button</Button>);
  expect(asFragment()).toMatchSnapshot();
});
