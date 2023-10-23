import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Chip } from '../Chip';
import styles from '@patternfly/react-styles/css/components/Chip/chip';

jest.mock('../../Tooltip', () => ({
  Tooltip: ({ content, position }) => (
    <div data-testid="tooltip-mock">
      <p>{`content: ${content}`}</p>
      <p>{`position: ${position}`}</p>
    </div>
  )
}));

['default chip', 'overflow chip'].forEach((chipType) => {
  const isOverflowChip = chipType === 'overflow chip';

  test(`Renders without children for ${chipType}`, () => {
    render(
      <div data-testid="container">
        <Chip isOverflowChip={isOverflowChip} />
      </div>
    );

    expect(screen.getByTestId('container').firstChild).toBeVisible();
  });

  test(`Renders with class ${styles.chip} on the ${chipType} container element`, () => {
    render(
      <Chip isOverflowChip={isOverflowChip} data-testid="container">
        Chip text
      </Chip>
    );

    // Only a non-overflow chip will have exactly the class "pf-v5-c-chip", we test for
    // additional classes on overflow chips elsewhere in the suite
    expect(screen.getByTestId('container')).toHaveClass(styles.chip, { exact: !isOverflowChip });
  });

  test(`Renders with class ${styles.chipContent} around the ${chipType} content`, () => {
    render(
      <Chip isOverflowChip={isOverflowChip} data-testid="container">
        Chip text
      </Chip>
    );

    expect(screen.getByTestId('container').firstChild).toHaveClass(styles.chipContent, { exact: true });
  });

  test(`Renders ${chipType} children with class ${styles.chipText}`, () => {
    render(<Chip isOverflowChip={isOverflowChip}>Chip text</Chip>);

    expect(screen.getByText('Chip text')).toHaveClass(styles.chipText, { exact: true });
  });

  test(`Renders with custom class on the ${chipType} container element`, () => {
    render(
      <Chip isOverflowChip={isOverflowChip} data-testid="container" className="custom-class">
        Chip text
      </Chip>
    );

    expect(screen.getByTestId('container')).toHaveClass('custom-class');
  });

  test(`Renders a badge when badge prop is passed to ${chipType}`, () => {
    render(
      <Chip isOverflowChip={isOverflowChip} badge={<div>Badge content</div>}>
        Chip text
      </Chip>
    );

    expect(screen.getByText('Badge content')).toBeVisible();
  });

  test(`Renders with div container on ${chipType} by default`, () => {
    render(
      <Chip isOverflowChip={isOverflowChip} data-testid="container">
        Chip text
      </Chip>
    );

    expect(screen.getByTestId('container').tagName).toBe('DIV');
  });

  test(`Renders with custom container on ${chipType} when component prop is passed`, () => {
    render(
      <Chip component="li" isOverflowChip={isOverflowChip}>
        Chip text
      </Chip>
    );

    expect(screen.getByRole('listitem')).toBeVisible();
  });

  test(`Renders maxWidth css var in style attribute when textMaxWidth is passed for ${chipType}`, () => {
    render(
      <Chip isOverflowChip={isOverflowChip} data-testid="container" textMaxWidth="10px">
        Chip text
      </Chip>
    );

    expect(screen.getByTestId('container')).toHaveAttribute('style', '--pf-v5-c-chip__text--MaxWidth: 10px;');
  });

  test(`Spreads additional props to container for ${chipType}`, () => {
    render(
      <Chip isOverflowChip={isOverflowChip} data-testid="container" role="button">
        Chip text
      </Chip>
    );

    expect(screen.getByTestId('container')).toHaveAttribute('role', 'button');
  });
});

test(`Renders id prop on ${styles.chipText} container for default chip`, () => {
  render(<Chip id="custom-id">Chip text</Chip>);

  expect(screen.getByText('Chip text')).toHaveAttribute('id', 'custom-id');
});

test(`Does not render id prop on ${styles.chipText} container for overflow chip`, () => {
  render(
    <Chip isOverflowChip id="custom-id">
      Chip text
    </Chip>
  );

  expect(screen.getByText('Chip text')).not.toHaveAttribute('id');
});

test(`Renders actions container with class ${styles.chipActions} when isReadOnly is false`, () => {
  render(<Chip>Chip text</Chip>);

  expect(screen.getByRole('button').parentElement).toHaveClass(styles.chipActions);
});

test(`Renders aria-labelledby on action close button by default`, () => {
  render(<Chip>Chip text</Chip>);

  expect(screen.getByRole('button')).toHaveAccessibleName('close Chip text');
});

test(`Renders aria-labelledby on action close button with custom id passed`, () => {
  render(<Chip id="custom-id">Chip text</Chip>);

  expect(screen.getByRole('button')).toHaveAccessibleName('close Chip text');
});

test(`Renders concatenated aria-label on action close button by default`, () => {
  render(<Chip>Chip text</Chip>);

  expect(screen.getByRole('button')).toHaveAccessibleName('close Chip text');
});

test(`Renders custom aria-label on action close button when closeBtnAriaLabel is passed`, () => {
  render(<Chip closeBtnAriaLabel="custom label">Chip text</Chip>);

  expect(screen.getByRole('button')).toHaveAccessibleName('custom label Chip text');
});

test(`Does not render close button action when isOverflowChip is true`, () => {
  render(<Chip isOverflowChip>Chip text</Chip>);

  // Because overflow chip renders as a button, we need to add the accessible name to the query
  expect(screen.queryByRole('button', { name: 'close Chip text' })).not.toBeInTheDocument();
});

test(`Does not render close button action when isReadOnly is true`, () => {
  render(<Chip isReadOnly>Chip text</Chip>);

  expect(screen.queryByRole('button')).not.toBeInTheDocument();
});

test(`Does not render with class ${styles.modifiers.overflow} when isOverflowChip is not passed`, () => {
  render(<Chip data-testid="container">Chip text</Chip>);

  expect(screen.getByTestId('container')).not.toHaveClass(styles.modifiers.overflow);
});

test(`Renders with class ${styles.modifiers.overflow} when isOverflowChip is true`, () => {
  render(
    <Chip isOverflowChip data-testid="container">
      Chip text
    </Chip>
  );

  expect(screen.getByTestId('container')).toHaveClass(styles.modifiers.overflow);
});

test(`Calls onClick when close button action is clicked for default chip`, async () => {
  const user = userEvent.setup();
  const onClickMock = jest.fn();

  render(<Chip onClick={onClickMock}>Chip text</Chip>);

  await user.click(screen.getByRole('button', { name: 'close Chip text' }));

  expect(onClickMock).toHaveBeenCalledTimes(1);
});

test(`Does not call onClick when close button action is not clicked for default chip`, async () => {
  const user = userEvent.setup();
  const onClickMock = jest.fn();

  render(
    <>
      <Chip onClick={onClickMock}>Chip text</Chip>
      <button>Test clicker</button>
    </>
  );

  await user.click(screen.getByRole('button', { name: 'Test clicker' }));

  expect(onClickMock).not.toHaveBeenCalled();
});

test(`Calls onClick when chip is clicked for overflow chip`, async () => {
  const user = userEvent.setup();
  const onClickMock = jest.fn();

  render(
    <Chip isOverflowChip component="button" onClick={onClickMock}>
      Chip text
    </Chip>
  );

  await user.click(screen.getByRole('button', { name: 'Chip text' }));

  expect(onClickMock).toHaveBeenCalledTimes(1);
});

test(`Does not call onClick when chip is not clicked for overflow chip`, async () => {
  const user = userEvent.setup();
  const onClickMock = jest.fn();

  render(
    <>
      <Chip isOverflowChip component="button" onClick={onClickMock}>
        Chip text
      </Chip>
      <button>Test clicker</button>
    </>
  );

  await user.click(screen.getByRole('button', { name: 'Test clicker' }));

  expect(onClickMock).not.toHaveBeenCalled();
});

test('Passes position to Tooltip', () => {
  Object.defineProperty(HTMLElement.prototype, 'scrollWidth', { configurable: true, value: 500 });
  render(<Chip tooltipPosition="bottom">Test chip text</Chip>);

  expect(screen.getByText('position: bottom')).toBeVisible();
  Object.defineProperty(HTMLElement.prototype, 'scrollWidth', { configurable: true, value: 0 });
});

test('Passes content to Tooltip', () => {
  Object.defineProperty(HTMLElement.prototype, 'scrollWidth', { configurable: true, value: 500 });
  render(<Chip>Test chip text</Chip>);

  expect(screen.getByText(`content: Test chip text`)).toBeVisible();
  Object.defineProperty(HTMLElement.prototype, 'scrollWidth', { configurable: true, value: 0 });
});

test('Matches snapshot', () => {
  const { asFragment } = render(
    <Chip id="snapshot-test" ouiaId="snapshot-test">
      Chip text
    </Chip>
  );
  expect(asFragment()).toMatchSnapshot();
});
