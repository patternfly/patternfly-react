import { screen, render } from '@testing-library/react';
import { ClipboardCopy, ClipboardCopyVariant } from '../ClipboardCopy';
import styles from '@patternfly/react-styles/css/components/ClipboardCopy/clipboard-copy';
import truncateStyles from '@patternfly/react-styles/css/components/Truncate/truncate';
import userEvent from '@testing-library/user-event';

jest.mock('../../../helpers/GenerateId/GenerateId');

jest.mock('../ClipboardCopyButton', () => ({
  ClipboardCopyButton: ({ 'aria-label': ariaLabel, children, entryDelay, exitDelay, maxWidth, position, onClick }) => (
    <div data-testid="clipboardCopyButton-mock">
      <p>{`exitDelay: ${exitDelay}`}</p>
      <p>{`entryDelay: ${entryDelay}`}</p>
      <p>{`maxWidth: ${maxWidth}`}</p>
      <p>{`position: ${position}`}</p>
      <p>{`button-ariaLabel: ${ariaLabel}`}</p>
      <div>{`children: ${children}`}</div>
      <button onClick={onClick}>Test CCB clicker</button>
    </div>
  )
}));

jest.mock('../ClipboardCopyToggle', () => ({
  ClipboardCopyToggle: ({ 'aria-label': ariaLabel }) => (
    <div data-testid="clipboardCopyToggle-mock">
      <p>{`toggle-ariaLabel: ${ariaLabel}`}</p>
    </div>
  )
}));

jest.mock('../../Truncate', () => ({
  Truncate: ({ className, trailingNumChars, content, position, tooltipPosition, ...props }) => (
    <div data-testid="Truncate-mock" {...props}>
      <p>{`Truncate content: ${content}`}</p>
      <p>{`Truncate className: ${className}`}</p>
      <p>{`Truncate position: ${position}`}</p>
      <p>{`Truncate trailingNumChars: ${trailingNumChars}`}</p>
      <p>{`Truncate tooltipPosition: ${tooltipPosition}`}</p>
      {children}
    </div>
  )
}));

const children = 'Copyable text';
const testId = 'clipboard-copy';

test(`Renders with class ${styles.clipboardCopy} by default`, () => {
  render(<ClipboardCopy data-testid={testId}>{children}</ClipboardCopy>);

  expect(screen.getByTestId(testId)).toHaveClass(styles.clipboardCopy, { exact: true });
});

test(`Renders with custom class when className is passed`, () => {
  render(
    <ClipboardCopy className="test-class" data-testid={testId}>
      {children}
    </ClipboardCopy>
  );

  expect(screen.getByTestId(testId)).toHaveClass('test-class');
});

test(`Does not render with class ${styles.modifiers.inline} by default`, () => {
  render(<ClipboardCopy data-testid={testId}>{children}</ClipboardCopy>);

  expect(screen.getByTestId(testId)).not.toHaveClass(styles.modifiers.inline);
});

test(`Does not render with class ${styles.modifiers.inline} if variant is not inline-compact`, () => {
  render(
    <ClipboardCopy variant="expansion" data-testid={testId}>
      {children}
    </ClipboardCopy>
  );

  expect(screen.getByTestId(testId)).not.toHaveClass(styles.modifiers.inline);
});

test(`Renders with class ${styles.modifiers.inline} when variant is inline-compact`, () => {
  render(
    <ClipboardCopy variant="inline-compact" data-testid={testId}>
      {children}
    </ClipboardCopy>
  );

  expect(screen.getByTestId(testId)).toHaveClass(styles.modifiers.inline);
});

test(`Does not render with class ${styles.modifiers.expanded} by default`, () => {
  render(<ClipboardCopy data-testid={testId}>{children}</ClipboardCopy>);

  expect(screen.getByTestId(testId)).not.toHaveClass(styles.modifiers.expanded);
});

test(`Renders with class ${styles.modifiers.expanded} when isExpanded is passed`, () => {
  render(
    <ClipboardCopy isExpanded data-testid={testId}>
      {children}
    </ClipboardCopy>
  );

  expect(screen.getByTestId(testId)).toHaveClass(styles.modifiers.expanded);
});

test(`Does not render with class ${styles.modifiers.block} by default`, () => {
  render(<ClipboardCopy data-testid={testId}>{children}</ClipboardCopy>);

  expect(screen.getByTestId(testId)).not.toHaveClass(styles.modifiers.block);
});

test(`Renders with class ${styles.modifiers.block} when isBlock is passed`, () => {
  render(
    <ClipboardCopy isBlock data-testid={testId}>
      {children}
    </ClipboardCopy>
  );

  expect(screen.getByTestId(testId)).toHaveClass(styles.modifiers.block);
});

test('Spreads additional props to container div', () => {
  render(
    <ClipboardCopy data-testid={testId} role="group">
      {children}
    </ClipboardCopy>
  );

  expect(screen.getByTestId(testId)).toHaveAttribute('role', 'group');
});

test(`Renders children without class ${styles.modifiers.code} when variant is inline-compact and isCode is not passed`, () => {
  render(
    <ClipboardCopy variant="inline-compact" data-testid={testId}>
      {children}
    </ClipboardCopy>
  );

  expect(screen.getByText(children)).not.toHaveClass(styles.modifiers.code);
});

test(`Renders children with class ${styles.modifiers.code} when variant is inline-compact and isCode is passed`, () => {
  render(
    <ClipboardCopy isCode variant="inline-compact" data-testid={testId}>
      {children}
    </ClipboardCopy>
  );

  expect(screen.getByText(children)).toHaveClass(styles.modifiers.code);
});

test('Does not render content passed to additionalActions by default', () => {
  render(<ClipboardCopy additionalActions="Additional action">{children}</ClipboardCopy>);

  expect(screen.queryByText('Additional action')).toBeNull();
});

test('Does not render content passed to additionalActions when variant is not inline-compact', () => {
  render(
    <ClipboardCopy variant="expansion" additionalActions="Additional action">
      {children}
    </ClipboardCopy>
  );

  expect(screen.queryByText('Additional action')).toBeNull();
});

test('Renders content passed to additionalActions when variant is inline-compact', () => {
  render(
    <ClipboardCopy variant="inline-compact" additionalActions="Additional action">
      {children}
    </ClipboardCopy>
  );

  expect(screen.getByText('Additional action')).toBeVisible();
});

test('Passes hoverTip to ClipboardCopyButton by default', () => {
  render(<ClipboardCopy hoverTip="hover tip">{children}</ClipboardCopy>);

  expect(screen.getByText('button-ariaLabel: hover tip')).toBeVisible();
  expect(screen.getByText('children: hover tip')).toBeVisible();
});

test('Passes hoverTip to ClipboardCopyButton when variant is inline-compact', () => {
  render(
    <ClipboardCopy variant="inline-compact" hoverTip="hover tip">
      {children}
    </ClipboardCopy>
  );

  expect(screen.getByText('button-ariaLabel: hover tip')).toBeVisible();
  expect(screen.getByText('children: hover tip')).toBeVisible();
});

test('Passes clickTip when ClipboardCopyButton clicked', async () => {
  const user = userEvent.setup();
  render(<ClipboardCopy clickTip="click tip">{children}</ClipboardCopy>);

  await user.click(screen.getByRole('button', { name: 'Test CCB clicker' }));

  expect(screen.getByText('children: click tip')).toBeVisible();
});

test('Passes entryDelay to ClipboardCopyButton by default', () => {
  render(<ClipboardCopy entryDelay={100}>{children}</ClipboardCopy>);

  expect(screen.getByText('entryDelay: 100')).toBeVisible();
});

test('Passes entryDelay to ClipboardCopyButton when variant is inline-compact', () => {
  render(
    <ClipboardCopy variant="inline-compact" entryDelay={100}>
      {children}
    </ClipboardCopy>
  );

  expect(screen.getByText('entryDelay: 100')).toBeVisible();
});

test('Passes exitDelay to ClipboardCopyButton by default', () => {
  render(<ClipboardCopy exitDelay={100}>{children}</ClipboardCopy>);

  expect(screen.getByText('exitDelay: 100')).toBeVisible();
});

test('Passes exitDelay to ClipboardCopyButton when variant is inline-compact', () => {
  render(
    <ClipboardCopy variant="inline-compact" exitDelay={100}>
      {children}
    </ClipboardCopy>
  );

  expect(screen.getByText('exitDelay: 100')).toBeVisible();
});

test('Passes maxWidth to ClipboardCopyButton by default', () => {
  render(<ClipboardCopy maxWidth="100">{children}</ClipboardCopy>);

  expect(screen.getByText('maxWidth: 100')).toBeVisible();
});

test('Passes maxWidth to ClipboardCopyButton when variant is inline-compact', () => {
  render(
    <ClipboardCopy variant="inline-compact" maxWidth="100">
      {children}
    </ClipboardCopy>
  );

  expect(screen.getByText('maxWidth: 100')).toBeVisible();
});

test('Passes position to ClipboardCopyButton by default', () => {
  render(<ClipboardCopy position="bottom">{children}</ClipboardCopy>);

  expect(screen.getByText('position: bottom')).toBeVisible();
});

test('Passes position to ClipboardCopyButton when variant is inline-compact', () => {
  render(
    <ClipboardCopy variant="inline-compact" position="bottom">
      {children}
    </ClipboardCopy>
  );

  expect(screen.getByText('position: bottom')).toBeVisible();
});

test('Passes toggleAriaLabel to ClipboardCopyToggle when variant is expansion', () => {
  render(
    <ClipboardCopy variant="expansion" toggleAriaLabel="toggle label">
      {children}
    </ClipboardCopy>
  );

  expect(screen.getByText('toggle-ariaLabel: toggle label')).toBeVisible();
});

test('Does not set textinput to readonly when isReadOnly is not passed', () => {
  render(<ClipboardCopy>{children}</ClipboardCopy>);

  expect(screen.getByRole('textbox')).not.toHaveAttribute('readonly');
});

test('Passes isReadOnly to TextInput', () => {
  render(<ClipboardCopy isReadOnly>{children}</ClipboardCopy>);

  expect(screen.getByRole('textbox')).toHaveAttribute('readonly');
});

test('Passes textAriaLabel to TextInput', () => {
  render(<ClipboardCopy textAriaLabel="text label">{children}</ClipboardCopy>);

  expect(screen.getByRole('textbox')).toHaveAccessibleName('text label');
});

test('Calls onChange when ClipboardCopy textinput is typed in', async () => {
  const onChangeMock = jest.fn();
  const user = userEvent.setup();
  const typedText = 'stuff';

  render(<ClipboardCopy onChange={onChangeMock}>{children}</ClipboardCopy>);

  await user.type(screen.getByRole('textbox'), typedText);

  expect(onChangeMock).toHaveBeenCalledTimes(typedText.length);
});

test('Does not call onChange when ClipboardCopy textinput is not typed in', async () => {
  const onChangeMock = jest.fn();
  const user = userEvent.setup();
  const typedText = 'stuff';

  render(
    <>
      <ClipboardCopy onChange={onChangeMock}>{children}</ClipboardCopy>
      <input aria-label="native input" />
    </>
  );

  await user.type(screen.getByRole('textbox', { name: 'native input' }), typedText);

  expect(onChangeMock).not.toHaveBeenCalled();
});

test('Calls onCopy when ClipboardCopyButton is clicked', async () => {
  const onCopyMock = jest.fn();
  const user = userEvent.setup();

  render(<ClipboardCopy onCopy={onCopyMock}>{children}</ClipboardCopy>);

  await user.click(screen.getByRole('button', { name: 'Test CCB clicker' }));

  expect(onCopyMock).toHaveBeenCalledTimes(1);
});

test('Does not call onCopy when ClipboardCopyButton is not clicked', async () => {
  const onCopyMock = jest.fn();
  const user = userEvent.setup();

  render(
    <>
      <ClipboardCopy onCopy={onCopyMock}>{children}</ClipboardCopy>
      <button>Test native clicker</button>
    </>
  );

  await user.click(screen.getByRole('button', { name: 'Test native clicker' }));

  expect(onCopyMock).not.toHaveBeenCalled();
});

test('Can take array of strings as children', async () => {
  const onCopyMock = jest.fn();
  const user = userEvent.setup();
  const childrenArray = children.split(' ');

  // sanity check to ensure we are checking an array with at least 2 elements
  expect(childrenArray.length).toBeGreaterThan(1);

  render(<ClipboardCopy onCopy={onCopyMock}>{childrenArray}</ClipboardCopy>);

  await user.click(screen.getByRole('button', { name: 'Test CCB clicker' }));

  expect(onCopyMock).toHaveBeenCalledWith(expect.any(Object), children);
});

describe('ClipboardCopy with truncation', () => {
  test(`Does not render ClipboardCopy component with class ${styles.modifiers.truncate} by default`, () => {
    render(<ClipboardCopy data-testid={testId}>{children}</ClipboardCopy>);

    expect(screen.getByTestId(testId)).not.toHaveClass(styles.modifiers.truncate);
  });

  test(`Does not render ClipboardCopy component with class ${styles.modifiers.truncate} for expansion variant`, () => {
    render(
      <ClipboardCopy variant={ClipboardCopyVariant.expansion} data-testid={testId}>
        {children}
      </ClipboardCopy>
    );

    expect(screen.getByTestId(testId)).not.toHaveClass(styles.modifiers.truncate);
  });

  test(`Does not render ClipboardCopy component with class ${styles.modifiers.truncate} for inlinecompact variant and truncation is false`, () => {
    render(
      <ClipboardCopy variant={ClipboardCopyVariant.inlineCompact} data-testid={testId}>
        {children}
      </ClipboardCopy>
    );

    expect(screen.getByTestId(testId)).not.toHaveClass(styles.modifiers.truncate);
  });

  test(`Renders ClipboardCopy component with class ${styles.modifiers.truncate} when truncation is true and variant is inline-compact`, () => {
    render(
      <ClipboardCopy variant={ClipboardCopyVariant.inlineCompact} truncation data-testid={testId}>
        {children}
      </ClipboardCopy>
    );

    expect(screen.getByTestId(testId)).toHaveClass(styles.modifiers.truncate);
  });

  test(`Renders ClipboardCopy component with class ${styles.modifiers.truncate} when truncation is an object and variant is inlinecompact`, () => {
    render(
      <ClipboardCopy variant={ClipboardCopyVariant.inlineCompact} truncation={{}} data-testid={testId}>
        {children}
      </ClipboardCopy>
    );

    expect(screen.getByTestId(testId)).toHaveClass(styles.modifiers.truncate);
  });

  test('Does not render with Truncate component by default', () => {
    render(<ClipboardCopy>{children}</ClipboardCopy>);

    expect(screen.queryByTestId('Truncate-mock')).not.toBeInTheDocument();
  });

  test('Does not render with Truncate component when truncation is true and variant is not inline-compact', () => {
    render(<ClipboardCopy truncation>{children}</ClipboardCopy>);

    expect(screen.queryByTestId('Truncate-mock')).not.toBeInTheDocument();
  });

  test('Does not render with Truncate component when truncation is true and variant is expansion', () => {
    render(
      <ClipboardCopy variant={ClipboardCopyVariant.expansion} truncation>
        {children}
      </ClipboardCopy>
    );

    expect(screen.queryByTestId('Truncate-mock')).not.toBeInTheDocument();
  });

  test('Does not render with Truncate component when truncation is an object and variant is not inline-compact', () => {
    render(<ClipboardCopy truncation={{}}>{children}</ClipboardCopy>);

    expect(screen.queryByTestId('Truncate-mock')).not.toBeInTheDocument();
  });

  test('Does not render with Truncate component when truncation is an object and variant is expansion', () => {
    render(
      <ClipboardCopy variant={ClipboardCopyVariant.expansion} truncation={{}}>
        {children}
      </ClipboardCopy>
    );

    expect(screen.queryByTestId('Truncate-mock')).not.toBeInTheDocument();
  });

  test('Does not render with Truncate component when variant="inline-compact" and truncation is false', () => {
    render(<ClipboardCopy variant={ClipboardCopyVariant.inlineCompact}>{children}</ClipboardCopy>);

    expect(screen.queryByTestId('Truncate-mock')).not.toBeInTheDocument();
  });

  test('Renders with Truncate component when variant="inline-compact" and truncation is true', () => {
    render(
      <ClipboardCopy variant={ClipboardCopyVariant.inlineCompact} truncation>
        {children}
      </ClipboardCopy>
    );

    expect(screen.getByTestId('Truncate-mock')).toBeInTheDocument();
  });

  test('Passes children to Truncate content prop when variant="inline-compact" and truncation is true', () => {
    render(
      <ClipboardCopy variant={ClipboardCopyVariant.inlineCompact} truncation>
        {children}
      </ClipboardCopy>
    );

    expect(screen.getByText(`Truncate content: ${children}`)).toBeInTheDocument();
  });

  test('Renders with Truncate component when variant="inline-compact" and truncation is an object', () => {
    render(
      <ClipboardCopy variant={ClipboardCopyVariant.inlineCompact} truncation={{}}>
        {children}
      </ClipboardCopy>
    );

    expect(screen.getByTestId('Truncate-mock')).toBeInTheDocument();
  });

  test('Passes children to Truncate content prop when variant="inline-compact" and truncation is an object', () => {
    render(
      <ClipboardCopy variant={ClipboardCopyVariant.inlineCompact} truncation={{}}>
        {children}
      </ClipboardCopy>
    );

    expect(screen.getByText(`Truncate content: ${children}`)).toBeInTheDocument();
  });

  test('Passes className prop to Truncate when variant="inline-compact" and truncation is passed', () => {
    render(
      <ClipboardCopy variant={ClipboardCopyVariant.inlineCompact} truncation={{ className: 'clipboard-truncate' }}>
        {children}
      </ClipboardCopy>
    );

    expect(screen.getByText(`Truncate className: clipboard-truncate`)).toBeInTheDocument();
  });

  test('Passes trailingNumChars prop to Truncate when variant="inline-compact" and truncation is passed', () => {
    render(
      <ClipboardCopy variant={ClipboardCopyVariant.inlineCompact} truncation={{ trailingNumChars: 5 }}>
        {children}
      </ClipboardCopy>
    );

    expect(screen.getByText(`Truncate trailingNumChars: 5`)).toBeInTheDocument();
  });

  test('Passes position prop to Truncate when variant="inline-compact" and truncation is passed', () => {
    render(
      <ClipboardCopy variant={ClipboardCopyVariant.inlineCompact} truncation={{ position: 'start' }}>
        {children}
      </ClipboardCopy>
    );

    expect(screen.getByText(`Truncate position: start`)).toBeInTheDocument();
  });

  test('Passes tooltipPosition prop to Truncate when variant="inline-compact" and truncation is passed', () => {
    render(
      <ClipboardCopy variant={ClipboardCopyVariant.inlineCompact} truncation={{ tooltipPosition: 'bottom' }}>
        {children}
      </ClipboardCopy>
    );

    expect(screen.getByText(`Truncate tooltipPosition: bottom`)).toBeInTheDocument();
  });
});

test('Matches snapshot', () => {
  const { asFragment } = render(
    <ClipboardCopy id="snapshot" ouiaId="snapshot">
      {children}
    </ClipboardCopy>
  );
  expect(asFragment()).toMatchSnapshot();
});
