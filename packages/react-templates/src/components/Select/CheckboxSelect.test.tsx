import * as React from 'react';
import { render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { CheckboxSelect } from './CheckboxSelect';
import styles from '@patternfly/react-styles/css/components/Badge/badge';

test('renders checkbox select with options', async () => {
  const initialOptions = [
    { content: 'Option 1', value: 'option1' },
    { content: 'Option 2', value: 'option2' },
    { content: 'Option 3', value: 'option3' }
  ];

  const user = userEvent.setup();

  render(<CheckboxSelect initialOptions={initialOptions} />);

  const toggle = screen.getByRole('button', { name: 'Filter by status' });

  await user.click(toggle);

  const option1 = screen.getByRole('checkbox', { name: 'Option 1' });
  const option2 = screen.getByRole('checkbox', { name: 'Option 2' });
  const option3 = screen.getByRole('checkbox', { name: 'Option 3' });

  expect(option1).toBeInTheDocument();
  expect(option2).toBeInTheDocument();
  expect(option3).toBeInTheDocument();
});

test('selects options when clicked', async () => {
  const initialOptions = [
    { content: 'Option 1', value: 'option1' },
    { content: 'Option 2', value: 'option2' },
    { content: 'Option 3', value: 'option3' }
  ];

  const user = userEvent.setup();

  render(<CheckboxSelect initialOptions={initialOptions} />);

  const toggle = screen.getByRole('button', { name: 'Filter by status' });

  await user.click(toggle);

  const option1 = screen.getByRole('checkbox', { name: 'Option 1' });

  expect(option1).not.toBeChecked();

  await user.click(option1);

  expect(option1).toBeChecked();
});

test('deselects options when an already selected option is clicked', async () => {
  const initialOptions = [
    { content: 'Option 1', value: 'option1' },
    { content: 'Option 2', value: 'option2' },
    { content: 'Option 3', value: 'option3' }
  ];

  const user = userEvent.setup();

  render(<CheckboxSelect initialOptions={initialOptions} />);

  const toggle = screen.getByRole('button', { name: 'Filter by status' });

  await user.click(toggle);

  const option1 = screen.getByRole('checkbox', { name: 'Option 1' });

  await user.click(option1);
  await user.click(option1);

  expect(option1).not.toBeChecked();
});

test('calls the onSelect callback with the selected value when an option is selected', async () => {
  const initialOptions = [
    { content: 'Option 1', value: 'option1' },
    { content: 'Option 2', value: 'option2' },
    { content: 'Option 3', value: 'option3' }
  ];

  const user = userEvent.setup();
  const onSelectMock = jest.fn();

  render(<CheckboxSelect initialOptions={initialOptions} onSelect={onSelectMock} />);

  const toggle = screen.getByRole('button', { name: 'Filter by status' });

  await user.click(toggle);

  const option1 = screen.getByRole('checkbox', { name: 'Option 1' });

  await user.click(option1);

  expect(onSelectMock).toHaveBeenCalledTimes(1);
  expect(onSelectMock).toHaveBeenCalledWith(expect.anything(), 'option1');
});

test('does not call the onSelect callback when no options are selected', async () => {
  const initialOptions = [
    { content: 'Option 1', value: 'option1' },
    { content: 'Option 2', value: 'option2' },
    { content: 'Option 3', value: 'option3' }
  ];

  const user = userEvent.setup();
  const onSelectMock = jest.fn();

  render(<CheckboxSelect initialOptions={initialOptions} onSelect={onSelectMock} />);

  const toggle = screen.getByRole('button', { name: 'Filter by status' });

  await user.click(toggle);

  expect(onSelectMock).not.toHaveBeenCalled();
});

test('toggles the select menu when the toggle button is clicked', async () => {
  const initialOptions = [
    { content: 'Option 1', value: 'option1' },
    { content: 'Option 2', value: 'option2' },
    { content: 'Option 3', value: 'option3' }
  ];

  const user = userEvent.setup();

  render(<CheckboxSelect initialOptions={initialOptions} />);

  const toggleButton = screen.getByRole('button', { name: 'Filter by status' });

  await user.click(toggleButton);

  expect(screen.getByRole('menu')).toBeInTheDocument();

  await user.click(toggleButton);

  await waitForElementToBeRemoved(() => screen.queryByRole('menu'));

  expect(screen.queryByRole('menu')).not.toBeInTheDocument();
});

test('displays custom toggle content', async () => {
  const initialOptions = [
    { content: 'Option 1', value: 'option1' },
    { content: 'Option 2', value: 'option2' },
    { content: 'Option 3', value: 'option3' }
  ];

  render(<CheckboxSelect initialOptions={initialOptions} toggleContent="Custom Toggle" />);

  const toggleButton = screen.getByRole('button', { name: 'Custom Toggle' });

  expect(toggleButton).toBeInTheDocument();
});

test('calls the onToggle callback when the select opens or closes', async () => {
  const initialOptions = [
    { content: 'Option 1', value: 'option1' },
    { content: 'Option 2', value: 'option2' },
    { content: 'Option 3', value: 'option3' }
  ];

  const user = userEvent.setup();
  const onToggleMock = jest.fn();

  render(<CheckboxSelect initialOptions={initialOptions} onToggle={onToggleMock} />);

  const toggle = screen.getByRole('button', { name: 'Filter by status' });

  await user.click(toggle);

  expect(onToggleMock).toHaveBeenCalledTimes(1);
  expect(onToggleMock).toHaveBeenCalledWith(true);

  await user.click(toggle);

  expect(onToggleMock).toHaveBeenCalledTimes(2);
  expect(onToggleMock).toHaveBeenCalledWith(false);
});

test('does not call the onToggle callback when the toggle is not clicked', async () => {
  const initialOptions = [
    { content: 'Option 1', value: 'option1' },
    { content: 'Option 2', value: 'option2' },
    { content: 'Option 3', value: 'option3' }
  ];

  const onToggleMock = jest.fn();

  render(<CheckboxSelect initialOptions={initialOptions} onToggle={onToggleMock} />);

  expect(onToggleMock).not.toHaveBeenCalled();
});

test('disables the select when isDisabled prop is true', async () => {
  const initialOptions = [
    { content: 'Option 1', value: 'option1' },
    { content: 'Option 2', value: 'option2' },
    { content: 'Option 3', value: 'option3' }
  ];

  const user = userEvent.setup();

  render(<CheckboxSelect initialOptions={initialOptions} isDisabled={true} />);

  const toggleButton = screen.getByRole('button', { name: 'Filter by status' });

  expect(toggleButton).toBeDisabled();

  await user.click(toggleButton);

  expect(screen.queryByRole('menu')).not.toBeInTheDocument();
});

test('passes other SelectOption props to the SelectOption component', async () => {
  const initialOptions = [{ content: 'Option 1', value: 'option1', isDisabled: true }];

  const user = userEvent.setup();

  render(<CheckboxSelect initialOptions={initialOptions} />);

  const toggle = screen.getByRole('button', { name: 'Filter by status' });

  await user.click(toggle);

  const option1 = screen.getByRole('checkbox', { name: 'Option 1' });

  expect(option1).toBeDisabled();
});

test('displays the badge count when options are selected', async () => {
  const initialOptions = [
    { content: 'Option 1', value: 'option1' },
    { content: 'Option 2', value: 'option2' },
    { content: 'Option 3', value: 'option3' }
  ];

  const user = userEvent.setup();

  render(<CheckboxSelect initialOptions={initialOptions} />);

  const toggle = screen.getByRole('button', { name: 'Filter by status' });

  await user.click(toggle);

  const option1 = screen.getByRole('checkbox', { name: 'Option 1' });

  expect(screen.queryByText('1')).not.toBeInTheDocument();

  await user.click(option1);

  expect(screen.getByText('1')).toHaveClass(styles.badge, 'pf-m-read');
});
