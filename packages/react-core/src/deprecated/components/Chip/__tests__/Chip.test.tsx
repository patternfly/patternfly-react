import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Chip } from '../Chip';
import styles from '@patternfly/react-styles/css/components/Label/label';

jest.mock('../../../../components/Tooltip', () => ({
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

  test(`Renders with class ${styles.label} on the ${chipType} container element`, () => {
    render(
      <Chip isOverflowChip={isOverflowChip} data-testid="container">
        Chip text
      </Chip>
    );

    // Only a non-overflow chip will have exactly the class "pf-v6-c-chip", we test for
    // additional classes on overflow chips elsewhere in the suite
    expect(screen.getByTestId('container')).toHaveClass(
      isOverflowChip ? `${styles.label} ${styles.modifiers.overflow}` : `${styles.label} ${styles.modifiers.outline}`,
      {
        exact: !isOverflowChip
      }
    );
  });

  test(`Renders with class ${styles.labelContent} around the ${chipType} content`, () => {
    render(
      <Chip isOverflowChip={isOverflowChip} data-testid="container">
        Chip text
      </Chip>
    );

    expect(screen.getByTestId('container').firstChild).toHaveClass(styles.labelContent, { exact: true });
  });

  test(`Renders ${chipType} children with class ${styles.labelText}`, () => {
    render(<Chip isOverflowChip={isOverflowChip}>Chip text</Chip>);

    expect(screen.getByText('Chip text')).toHaveClass(styles.labelText, { exact: true });
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

  test(`Renders maxWidth css var in style attribute when textMaxWidth is passed for ${chipType}`, () => {
    render(
      <Chip isOverflowChip={isOverflowChip} textMaxWidth="10px">
        Chip text
      </Chip>
    );

    expect(screen.getByText('Chip text')).toHaveAttribute('style', '--pf-v6-c-label__text--MaxWidth: 10px;');
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

test(`Renders id prop on ${styles.labelText} container for default chip`, () => {
  render(<Chip id="custom-id">Chip text</Chip>);

  expect(screen.getByText('Chip text').parentElement?.parentElement).toHaveAttribute('id', 'custom-id');
});

test(`Does not render id prop on ${styles.labelText} container for overflow chip`, () => {
  render(
    <Chip isOverflowChip id="custom-id">
      Chip text
    </Chip>
  );

  expect(screen.getByText('Chip text')).not.toHaveAttribute('id');
});

test(`Renders actions container with class ${styles.labelActions} when isReadOnly is false`, () => {
  render(<Chip>Chip text</Chip>);

  expect(screen.getByRole('button').parentElement).toHaveClass(styles.labelActions);
});

test(`Renders concatenated aria-label on action close button by default`, () => {
  render(<Chip>Chip text</Chip>);

  expect(screen.getByRole('button')).toHaveAccessibleName('Close Chip text');
});

test(`Renders custom aria-label on action close button when closeBtnAriaLabel is passed`, () => {
  render(<Chip closeBtnAriaLabel="custom label">Chip text</Chip>);

  expect(screen.getByRole('button')).toHaveAccessibleName('custom label');
});

test(`Does not render close button action when isOverflowChip is true`, () => {
  render(<Chip isOverflowChip>Chip text</Chip>);

  // Because overflow chip renders as a button, we need to add the accessible name to the query
  expect(screen.queryByRole('button', { name: 'Close Chip text' })).not.toBeInTheDocument();
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

  await user.click(screen.getByRole('button', { name: 'Close Chip text' }));

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

  await user.click(screen.getByRole('button'));

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

test('Matches snapshot', () => {
  const { asFragment } = render(
    <Chip id="snapshot-test" ouiaId="snapshot-test">
      Chip text
    </Chip>
  );
  expect(asFragment()).toMatchSnapshot();
});
