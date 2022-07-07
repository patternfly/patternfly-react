import * as React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';

import { Alert, AlertVariant } from '../Alert';
import { AlertContext } from '../AlertContext';
import { capitalize } from '../../../helpers';

jest.mock('../AlertToggleExpandButton', () => ({
  AlertToggleExpandButton: ({ isExpanded, onToggleExpand, ...props }) => (
    <button onClick={onToggleExpand} {...props}>
      isExpanded: {`${isExpanded}`}
    </button>
  )
}));

jest.mock('../AlertIcon', () => ({
  AlertIcon: ({ variant, className, customIcon, ...props }) => (
    <div {...props} className={className}>
      <p>custom icon: {customIcon}</p>
      <p>variant: {variant}</p>
    </div>
  )
}));

test('Renders without children', () => {
  render(
    <div data-testid="container">
      <Alert title="Some title" />
    </div>
  );

  expect(screen.getByTestId('container').firstChild).toBeVisible();
});

test('Renders with class pf-c-alert on the containing div', () => {
  render(
    <Alert title="Some title" data-testid="Alert-test-id">
      Some alert
    </Alert>
  );
  expect(screen.getByTestId('Alert-test-id')).toHaveClass('pf-c-alert');
});

test('Renders with class pf-c-alert__title on the div containing the title', () => {
  render(<Alert title="Some title">Some alert</Alert>);
  expect(screen.getByRole('heading', { name: 'Default alert: Some title' })).toHaveClass('pf-c-alert__title');
});

test('Renders with a default aria label of Default Alert', () => {
  render(
    <Alert title="Some title" data-testid="Alert-test-id">
      Some alert
    </Alert>
  );
  expect(screen.getByTestId('Alert-test-id')).toHaveAccessibleName('Default Alert');
});

['success', 'danger', 'warning', 'info'].forEach(variant => {
  test(`Does not render with class pf-m-${variant} by default`, () => {
    render(
      <Alert title="Some title" data-testid="Alert-test-id">
        Some alert
      </Alert>
    );
    expect(screen.getByTestId('Alert-test-id')).not.toHaveClass(`pf-m-${variant}`);
  });

  test(`Renders with class pf-m-${variant} when variant = ${variant}`, () => {
    render(
      <Alert variant={`${variant as AlertVariant}`} title="Some title" data-testid="Alert-test-id">
        Some alert
      </Alert>
    );
    expect(screen.getByTestId('Alert-test-id')).toHaveClass(`pf-m-${variant}`);
  });

  test(`Renders with aria label ${capitalize(variant)} Alert when variant = ${variant}`, () => {
    render(
      <Alert variant={`${variant as AlertVariant}`} title="Some title" data-testid="Alert-test-id">
        Some alert
      </Alert>
    );
    expect(screen.getByTestId('Alert-test-id')).toHaveAccessibleName(`${capitalize(variant)} Alert`);
  });

  test(`Renders the title with an accessible name of '${capitalize(
    variant
  )} alert: Some title' when variant = ${variant}`, () => {
    render(
      <Alert variant={`${variant as AlertVariant}`} title="Some title">
        Some alert
      </Alert>
    );

    expect(screen.getByRole('heading')).toHaveAccessibleName(`${capitalize(variant)} alert: Some title`);
  });

  test(`Passes AlertToggleExpandButton an aria label of '${capitalize(
    variant
  )} alert details' when variant = ${variant} and it is expandable`, () => {
    render(
      <Alert variant={`${variant as AlertVariant}`} title="Some title" isExpandable>
        Some alert
      </Alert>
    );

    expect(screen.getByRole('button')).toHaveAccessibleName(`${capitalize(variant)} alert details`);
  });

  test(`Provides a variantLabel of '${capitalize(variant)} alert:' in a context when variant = ${variant}`, () => {
    const TestComponent: React.FunctionComponent = () => {
      const context = React.useContext(AlertContext);

      return (
        <p data-testid="Test-component" aria-label={context.variantLabel}>
          {context.title}
        </p>
      );
    };

    render(
      <Alert
        variant={`${variant as AlertVariant}`}
        title="Some title"
        data-testid="Alert-test-id"
        actionClose={<TestComponent />}
      >
        Some alert
      </Alert>
    );

    expect(screen.getByTestId('Test-component')).toHaveAccessibleName(`${capitalize(variant)} alert:`);
  });
});

test('Does not render with class pf-m-inline by default', () => {
  render(<Alert title="Some title">Some alert</Alert>);
  expect(screen.getByLabelText('Default Alert')).not.toHaveClass('pf-m-inline');
});

test('Renders with class pf-m-inline when isInline = true', () => {
  render(
    <Alert isInline title="Some title">
      Some alert
    </Alert>
  );
  expect(screen.getByLabelText('Default Alert')).toHaveClass('pf-m-inline');
});

test('Does not render with class pf-m-plain by default', () => {
  render(<Alert title="Some title">Some alert</Alert>);
  expect(screen.getByLabelText('Default Alert')).not.toHaveClass('pf-m-plain');
});

test('Renders with class pf-m-plain when isPlain = true', () => {
  render(
    <Alert isPlain title="Some title">
      Some alert
    </Alert>
  );
  expect(screen.getByLabelText('Default Alert')).toHaveClass('pf-m-plain');
});

test('Renders the title', () => {
  render(<Alert title="Some title">Some alert</Alert>);

  expect(screen.getByText('Some title')).toBeVisible();
});

test('Renders the title as an h4 by default', () => {
  render(<Alert title="Some title">Some alert</Alert>);

  expect(screen.getByRole('heading', { level: 4, name: 'Default alert: Some title' })).toBeVisible();
});

test('Renders the title as other heading levels when one is passed using titleHeadingLevel', () => {
  render(
    <Alert title="Some title" titleHeadingLevel="h1">
      Some alert
    </Alert>
  );

  expect(screen.getByRole('heading', { level: 1, name: 'Default alert: Some title' })).toBeVisible();
});

test('Renders the element passed via the actionClose prop', () => {
  render(
    <Alert title="Some title" actionClose={<button>Action close</button>}>
      Some alert
    </Alert>
  );

  expect(screen.getByRole('button', { name: 'Action close' })).toBeVisible();
});

test('Renders the actionClose element inside pf-c-alert__action', () => {
  render(
    <Alert title="Some title" actionClose="Action close">
      Some alert
    </Alert>
  );

  expect(screen.getByText('Action close')).toHaveClass('pf-c-alert__action');
});

test('Provides the actionClose element access to the title via a context', () => {
  const TestComponent: React.FunctionComponent = () => {
    const context = React.useContext(AlertContext);

    return (
      <p data-testid="Test-component" aria-label={context.variantLabel}>
        {context.title}
      </p>
    );
  };

  render(
    <Alert title="Some title" actionClose={<TestComponent />}>
      Some alert
    </Alert>
  );

  expect(screen.getByTestId('Test-component')).toHaveTextContent('Some title');
});

test('Renders the element passed via the actionLinks prop', () => {
  render(
    <Alert title="Some title" actionLinks={<button>Action link</button>}>
      Some alert
    </Alert>
  );

  expect(screen.getByRole('button', { name: 'Action link' })).toBeVisible();
});

test('Renders the actionLinks element inside pf-c-alert__action-group', () => {
  render(
    <Alert title="Some title" actionLinks="Action link">
      Some alert
    </Alert>
  );

  expect(screen.getByText('Action link')).toHaveClass('pf-c-alert__action-group');
});

test('Renders children', () => {
  render(<Alert title="Some title">Some alert</Alert>);

  expect(screen.getByText('Some alert')).toBeVisible();
});

test('Renders children inside pf-c-alert__description', () => {
  render(<Alert title="Some title">Some alert</Alert>);

  expect(screen.getByText('Some alert')).toHaveClass('pf-c-alert__description');
});

test('Renders with the aria label passed via prop', () => {
  render(
    <Alert aria-label="Test label" title="Some title" data-testid="Alert-test-id">
      Some alert
    </Alert>
  );

  expect(screen.getByTestId('Alert-test-id')).toHaveAccessibleName('Test label');
});

test('Renders with the variantLabel passed via prop', () => {
  const TestComponent: React.FunctionComponent = () => {
    const context = React.useContext(AlertContext);

    return (
      <p data-testid="Test-component" aria-label={context.variantLabel}>
        {context.title}
      </p>
    );
  };

  render(
    <Alert variantLabel="Test label" title="Some title" data-testid="Alert-test-id" actionClose={<TestComponent />}>
      Some alert
    </Alert>
  );

  expect(screen.getByTestId('Test-component')).toHaveAccessibleName('Test label');
});

test('Renders without aria-live and aria-atomic attributes by default', () => {
  render(
    <Alert title="Some title" data-testid="Alert-test-id">
      Some alert
    </Alert>
  );

  const alertContainer = screen.getByTestId('Alert-test-id');

  expect(alertContainer).not.toHaveAttribute('aria-live');
  expect(alertContainer).not.toHaveAttribute('aria-atomic');
});

test('Has an aria-live value of polite and aria-atomic value of false when isLiveRegion = true', () => {
  render(
    <Alert title="Some title" data-testid="Alert-test-id" isLiveRegion>
      Some alert
    </Alert>
  );

  const alertContainer = screen.getByTestId('Alert-test-id');

  expect(alertContainer).toHaveAttribute('aria-live', 'polite');
  expect(alertContainer).toHaveAttribute('aria-atomic', 'false');
});

test('Renders with no timeout by default', () => {
  jest.useFakeTimers();

  render(<Alert title="Some title">Some alert</Alert>);

  act(() => {
    jest.advanceTimersByTime(8000);
  });

  expect(screen.getByText('Some alert')).toBeVisible();
  jest.useRealTimers();
});

test('Removes the alert after 8000ms when timeout = true', () => {
  jest.useFakeTimers();

  render(
    <Alert title="Some title" timeout>
      Some alert
    </Alert>
  );

  act(() => {
    jest.advanceTimersByTime(7999);
  });

  expect(screen.getByText('Some alert')).toBeVisible();

  act(() => {
    jest.advanceTimersByTime(1);
  });

  expect(screen.queryByText('Some alert')).not.toBeInTheDocument();
  jest.useRealTimers();
});

test('Removes the alert after a custom time when timeout is passed with a number', () => {
  jest.useFakeTimers();

  render(
    <Alert title="Some title" timeout={2000}>
      Some alert
    </Alert>
  );

  act(() => {
    jest.advanceTimersByTime(1999);
  });

  expect(screen.getByText('Some alert')).toBeVisible();

  act(() => {
    jest.advanceTimersByTime(1);
  });

  expect(screen.queryByText('Some alert')).not.toBeInTheDocument();
  jest.useRealTimers();
});

test('Does not remove the alert on timeout if the user is focused on the alert', async () => {
  const user = userEvent.setup({
    advanceTimers: delay => jest.advanceTimersByTime(delay)
  });
  jest.useFakeTimers();

  render(
    <Alert title="Some title" timeout>
      Some alert
    </Alert>
  );

  const alert = screen.getByText('Some alert');

  await user.click(alert);

  act(() => {
    jest.advanceTimersByTime(8000);
  });

  expect(screen.getByText('Some alert')).toBeVisible();
  jest.useRealTimers();
});

test('Does not remove the alert on timeout if the user is hovered over the alert', async () => {
  const user = userEvent.setup({
    advanceTimers: delay => jest.advanceTimersByTime(delay)
  });
  jest.useFakeTimers();

  render(
    <Alert title="Some title" timeout>
      Some alert
    </Alert>
  );

  const alert = screen.getByText('Some alert');

  await user.hover(alert);

  act(() => {
    jest.advanceTimersByTime(8000);
  });

  expect(alert).toBeVisible();
  jest.useRealTimers();
});

test('Removes the alert after the user removes focus from the alert and 3000ms have passed', async () => {
  const user = userEvent.setup({
    advanceTimers: delay => jest.advanceTimersByTime(delay)
  });
  jest.useFakeTimers();

  render(
    <div>
      <input />
      <Alert title="Some title" timeout>
        Some alert
      </Alert>
    </div>
  );

  const alert = screen.getByText('Some alert');

  await user.click(alert);

  act(() => {
    jest.advanceTimersByTime(8000);
  });

  await user.click(screen.getByRole('textbox'));

  act(() => {
    jest.advanceTimersByTime(3000);
  });

  expect(screen.queryByText('Some alert')).not.toBeInTheDocument();
  jest.useRealTimers();
});

test('Removes the alert after the user removes hover from the alert and 3000ms have passed', async () => {
  const user = userEvent.setup({
    advanceTimers: delay => jest.advanceTimersByTime(delay)
  });
  jest.useFakeTimers();

  render(
    <div>
      <input />
      <Alert title="Some title" timeout>
        Some alert
      </Alert>
    </div>
  );

  const alert = screen.getByText('Some alert');

  await user.hover(alert);

  act(() => {
    jest.advanceTimersByTime(8000);
  });

  await user.hover(screen.getByRole('textbox'));

  act(() => {
    jest.advanceTimersByTime(3000);
  });

  expect(screen.queryByText('Some alert')).not.toBeInTheDocument();
  jest.useRealTimers();
});

test('Removes the alert after the user removes hover from the alert and timeoutAnimation time has passed', async () => {
  const user = userEvent.setup({
    advanceTimers: delay => jest.advanceTimersByTime(delay)
  });
  jest.useFakeTimers();

  render(
    <div>
      <input />
      <Alert title="Some title" timeout timeoutAnimation={1000}>
        Some alert
      </Alert>
    </div>
  );

  const alert = screen.getByText('Some alert');

  await user.hover(alert);

  act(() => {
    jest.advanceTimersByTime(8000);
  });

  await user.hover(screen.getByRole('textbox'));

  act(() => {
    jest.advanceTimersByTime(1000);
  });

  expect(screen.queryByText('Some alert')).not.toBeInTheDocument();
  jest.useRealTimers();
});

test('Does not call the onTimeout callback before the timeout period has expired', () => {
  jest.useFakeTimers();
  const onTimeoutMock = jest.fn();

  render(
    <Alert title="Some title" timeout onTimeout={onTimeoutMock}>
      Some alert
    </Alert>
  );

  act(() => {
    jest.advanceTimersByTime(7999);
  });

  expect(onTimeoutMock).not.toHaveBeenCalled();
  jest.useRealTimers();
});

test('Calls the onTimeout callback after the timeout period has expired', () => {
  jest.useFakeTimers();
  const onTimeoutMock = jest.fn();

  render(
    <Alert title="Some title" timeout onTimeout={onTimeoutMock}>
      Some alert
    </Alert>
  );

  act(() => {
    jest.advanceTimersByTime(8000);
  });

  expect(onTimeoutMock).toHaveBeenCalledTimes(1);
  jest.useRealTimers();
});

test('Renders titles without truncation styling by default', () => {
  render(<Alert title="Some title">Some alert</Alert>);

  const title = screen.getByRole('heading');

  expect(title).not.toHaveClass('pf-m-truncate');
  expect(title).not.toHaveAttribute('style');
});

test('Renders titles with the expected truncation styling when truncateTitle is a value', () => {
  render(
    <Alert title="Some title" truncateTitle={3}>
      Some alert
    </Alert>
  );

  const title = screen.getByRole('heading');

  expect(title).toHaveClass('pf-m-truncate');
  expect(title).toHaveAttribute('style', '--pf-c-alert__title--max-lines: 3;');
});

test('Passes customIcon value to AlertIcon', () => {
  render(
    <Alert title="Some title" customIcon="custom-icon-test">
      Some alert
    </Alert>
  );

  expect(screen.getByText('custom icon: custom-icon-test')).toBeVisible();
});

test('Does not render with class pf-m-expandable by default', () => {
  render(<Alert title="Some title">Some alert</Alert>);
  expect(screen.getByLabelText('Default Alert')).not.toHaveClass('pf-m-expandable');
});

test('Renders with class pf-m-expandable when isExpandable = true', () => {
  render(
    <Alert isExpandable title="Some title">
      Some alert
    </Alert>
  );
  expect(screen.getByLabelText('Default Alert')).toHaveClass('pf-m-expandable');
});

test('Renders AlertToggleExpandButton inside pf-c-alert__toggle', () => {
  render(
    <Alert isExpandable title="Some title">
      Some alert
    </Alert>
  );

  expect(screen.getByRole('button').parentElement).toHaveClass('pf-c-alert__toggle');
});

test('Does not render with class pf-m-expanded when AlertToggleExpandButton has not been clicked', () => {
  render(
    <Alert isExpandable title="Some title">
      Some alert
    </Alert>
  );

  expect(screen.getByLabelText('Default Alert')).not.toHaveClass('pf-m-expanded');
});

test('Renders with class pf-m-expanded once the AlertToggleExpandButton is clicked', async () => {
  const user = userEvent.setup();

  render(
    <Alert isExpandable title="Some title">
      Some alert
    </Alert>
  );

  await user.click(screen.getByRole('button'));

  expect(screen.getByLabelText('Default Alert')).toHaveClass('pf-m-expanded');
});

test('Does not render children when isExpandable = true and AlertToggleExpandButton has not been clicked', () => {
  render(
    <Alert isExpandable title="Some title">
      Some alert
    </Alert>
  );

  expect(screen.queryByText('Some alert')).not.toBeInTheDocument();
});

test('Renders children when isExpandable = true and AlertToggleExpandButton has been clicked', async () => {
  const user = userEvent.setup();

  render(
    <Alert isExpandable title="Some title">
      Some alert
    </Alert>
  );

  await user.click(screen.getByRole('button'));

  expect(screen.getByText('Some alert')).toBeVisible();
});

test('Passes AlertToggleExpandButton isExpanded = false when AlertToggleExpandButton has not been clicked', () => {
  render(
    <Alert isExpandable title="Some title">
      Some alert
    </Alert>
  );

  expect(screen.getByText('isExpanded: false')).toBeVisible();
});

test('Passes AlertToggleExpandButton isExpanded = true once the AlertToggleExpandButton is clicked', async () => {
  const user = userEvent.setup();

  render(
    <Alert isExpandable title="Some title">
      Some alert
    </Alert>
  );

  await user.click(screen.getByRole('button'));

  expect(screen.getByText('isExpanded: true')).toBeVisible();
});

test('Passes AlertToggleExpandButton the aria label provided via toggleAriaLabel', () => {
  render(
    <Alert isExpandable title="Some title" toggleAriaLabel="Test label">
      Some alert
    </Alert>
  );

  expect(screen.getByRole('button')).toHaveAccessibleName('Test label');
});

test('Passes the id prop to the top level returned element', () => {
  render(
    <Alert title="Some title" aria-label="Test label" id="test-id">
      Some alert
    </Alert>
  );

  expect(screen.getByLabelText('Test label')).toHaveAttribute('id', 'test-id');
});

test('Renders with inherited element props spread to the component', () => {
  render(
    <>
      <Alert title="Some title" aria-describedby="labelling-id" aria-label="Test label" />
      <p id="labelling-id">Described by text</p>
    </>
  );

  expect(screen.getByLabelText('Test label')).toHaveAccessibleDescription('Described by text');
});

test('Matches snapshot', () => {
  const { asFragment } = render(
    <Alert isLiveRegion={true} aria-label="Toast alert label" title="Some title" ouiaId="ouia-id">
      Some toast alert
    </Alert>
  );
  expect(asFragment()).toMatchSnapshot();
});
