import { render, screen, within } from '@testing-library/react';
import { Truncate, TruncatePosition } from '../Truncate';
import styles from '@patternfly/react-styles/css/components/Truncate/truncate';
import '@testing-library/jest-dom';

jest.mock('../../Tooltip', () => ({
  Tooltip: ({ content, position, children, triggerRef, ...props }) => (
    <div data-testid="Tooltip-mock" {...props}>
      <div data-testid="Tooltip-mock-content-container">Test {content}</div>
      <p>{`position: ${position}`}</p>
      {children}
    </div>
  )
}));

global.ResizeObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn()
}));

test('Renders with span wrapper by default', () => {
  render(<Truncate content={''} data-testid="test-id" />);

  expect(screen.getByTestId('test-id').tagName).toBe('SPAN');
});

test('Renders with anchor wrapper when href prop is passed', () => {
  render(<Truncate content={'Link content'} href="#" />);

  expect(screen.getByRole('link')).toHaveTextContent('Link content');
});

test('Passes href to anchor when href prop is passed', () => {
  render(<Truncate content={'Link content'} href="#home" />);

  expect(screen.getByRole('link')).toHaveAttribute('href', '#home');
});

test(`renders with class ${styles.truncate}`, () => {
  render(<Truncate content={''} aria-label="test-id" />);

  const test = screen.getByLabelText('test-id');

  expect(test).toHaveClass(styles.truncate, { exact: true });
});

test('renders with custom class name passed via prop', () => {
  render(<Truncate content={''} aria-label="test-id" className="custom-classname" />);

  const test = screen.getByLabelText('test-id');

  expect(test).toHaveClass('custom-classname');
});

test('renders truncate with empty content', () => {
  render(<Truncate content={''} aria-label="test-id" />);

  const test = screen.getByLabelText('test-id');

  expect(test).toHaveTextContent('');
});

test('renders truncate with content', () => {
  render(<Truncate content={'Test'} aria-label="test-id" />);

  const test = screen.getByLabelText('test-id');

  expect(test).toHaveTextContent('Test');
});

test(`only renders ${styles.truncateStart} with default position`, () => {
  render(<Truncate content={'Testing truncate content'} />);

  const start = screen.getByText('Testing truncate content');

  expect(start).toHaveClass(styles.truncateStart);
  expect(start).not.toHaveClass(styles.truncateEnd);
});

test('renders default truncation', () => {
  const { asFragment } = render(
    <Truncate content={'Vestibulum interdum risus et enim faucibus, sit amet molestie est accumsan.'} />
  );
  expect(asFragment()).toMatchSnapshot();
});

// If this snapshot fails and the output text doesn't seem like it's changed, it most likely
// is due to the &lrm; HTML entity isn't rendering correctly.
test('renders start truncation with &lrm; at start and end', () => {
  const { asFragment } = render(
    <Truncate
      content={'Vestibulum interdum risus et enim faucibus, sit amet molestie est accumsan.'}
      position={'start'}
    />
  );
  expect(asFragment()).toMatchSnapshot();
});

test('renders middle truncation', () => {
  render(
    <Truncate
      content={'Vestibulum interdum risus et enim faucibus, sit amet molestie est accumsan.'}
      position={'middle'}
    />
  );

  const start = screen.getByText('Vestibulum interdum risus et enim faucibus, sit amet molestie est ac');

  expect(start).toHaveClass(styles.truncateStart);

  const end = screen.getByText('cumsan.');

  expect(end).toHaveClass(styles.truncateEnd);
});

test('renders different content when trailingNumChars is passed with middle truncate', () => {
  render(
    <Truncate
      content={'Vestibulum interdum risus et enim faucibus, sit amet molestie est accumsan.'}
      trailingNumChars={3}
      position="middle"
    />
  );

  const start = screen.getByText('Vestibulum interdum risus et enim faucibus, sit amet molestie est accums');

  expect(start).toHaveClass(styles.truncateStart);

  const end = screen.getByText('an.');

  expect(end).toHaveClass(styles.truncateEnd);
});

test('renders full content when trailingNumChars exceeds the length of the original string using middle truncate', () => {
  render(
    <Truncate
      content={'Vestibulum interdum risus et enim faucibus, sit amet molestie est accumsan.'} // 75 chars
      trailingNumChars={80}
      position="middle"
    />
  );

  const start = screen.getByText('Vestibulum interdum risus et enim faucibus, sit amet molestie est accumsan.');

  expect(start).toHaveClass(styles.truncateStart);
  expect(start).not.toHaveClass(styles.truncateEnd);
});

test('renders tooltip position', () => {
  render(<Truncate content={''} tooltipPosition="top" />);

  const input = screen.getByText('position: top');

  expect(input).toBeVisible();
});

test('renders tooltip content', () => {
  render(<Truncate content={'Another Tooltip'} tooltipPosition="top" />);

  const input = screen.getByText('Test Another Tooltip');

  expect(input).toBeVisible();
});

test('Renders with additional tooltip props spread', () => {
  render(<Truncate content={''} tooltipProps={{ distance: 32 }} />);

  expect(screen.getByTestId('Tooltip-mock')).toHaveAttribute('distance', '32');
});

test('renders with inherited element props spread to the component', () => {
  render(<Truncate content={'Test'} data-testid="test-id" aria-label="labelling-id" />);

  expect(screen.getByTestId('test-id')).toHaveAccessibleName('labelling-id');
});

describe('Truncation with maxCharsDisplayed', () => {
  test(`Does not render with class ${styles.modifiers.fixed} when maxCharsDisplayed is 0`, () => {
    render(<Truncate maxCharsDisplayed={0} data-testid="truncate-component" content="Test content" />);

    expect(screen.getByTestId('truncate-component')).not.toHaveClass(styles.modifiers.fixed);
  });

  test(`Renders with class ${styles.modifiers.fixed} when maxCharsDisplayed is greater than 0`, () => {
    render(<Truncate maxCharsDisplayed={1} data-testid="truncate-component" content="Test content" />);

    expect(screen.getByTestId('truncate-component')).toHaveClass(styles.modifiers.fixed);
  });

  test('Renders with hidden truncated content at end by default when maxCharsDisplayed is passed', () => {
    render(<Truncate content="Default end position content truncated" maxCharsDisplayed={6} />);

    expect(screen.getByText('Defaul')).toHaveClass(`${styles.truncate}__text`, { exact: true });
    expect(screen.getByText('t end position content truncated')).toHaveClass('pf-v6-screen-reader');
  });

  test('Renders with hidden truncated content at middle position when maxCharsDisplayed is passed and position="middle"', () => {
    render(<Truncate position="middle" content="Middle position contents being truncated" maxCharsDisplayed={10} />);

    expect(screen.getByText('Middl')).toHaveClass(`${styles.truncate}__text`, { exact: true });
    expect(screen.getByText('e position contents being trun')).toHaveClass('pf-v6-screen-reader');
    expect(screen.getByText('cated')).toHaveClass(`${styles.truncate}__text`, { exact: true });
  });

  test('Renders with hidden truncated content at start when maxCharsDisplayed is passed and position="start"', () => {
    render(<Truncate position="start" content="Start position content truncated" maxCharsDisplayed={6} />);

    expect(screen.getByText('Start position content tru')).toHaveClass('pf-v6-screen-reader');
    expect(screen.getByText('ncated')).toHaveClass(`${styles.truncate}__text`, { exact: true });
  });

  test('Renders full content when maxCharsDisplayed exceeds the length of the content', () => {
    render(<Truncate content="This full content is rendered" maxCharsDisplayed={90} />);

    expect(screen.getByText('This full content is rendered')).toHaveClass(`${styles.truncate}__text`, { exact: true });
  });

  test('Renders ellipsis as omission content by default', () => {
    render(<Truncate content="Test truncation content" maxCharsDisplayed={5} />);

    expect(screen.getByText('\u2026')).toHaveClass(`${styles.truncate}__omission`, { exact: true });
    expect(screen.getByText('\u2026')).toHaveAttribute('aria-hidden', 'true');
  });

  test('Renders custom omission content when omissionContent is passed', () => {
    render(<Truncate omissionContent="---" content="Test truncation content" maxCharsDisplayed={5} />);

    expect(screen.getByText('---')).toHaveClass(`${styles.truncate}__omission`, { exact: true });
    expect(screen.getByText('---')).toHaveAttribute('aria-hidden', 'true');
  });

  test('Does not render omission content when maxCharsDisplayed exceeds the length of the content ', () => {
    render(<Truncate content="Test truncation content" maxCharsDisplayed={99} />);

    expect(screen.queryByText('\u2026')).not.toBeInTheDocument();
  });

  test('Matches snapshot with default position', () => {
    const { asFragment } = render(<Truncate content="Test truncation content" maxCharsDisplayed={3} />);

    expect(asFragment()).toMatchSnapshot();
  });
});
