import * as React from 'react';
import { render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { SimpleSelect } from '../SimpleSelect';

test('renders simple select with options', async () => {
  const initialOptions = [
    { content: 'Option 1', value: 'option1' },
    { content: 'Option 2', value: 'option2' },
    { content: 'Option 3', value: 'option3' }
  ];

  const user = userEvent.setup();

  render(<SimpleSelect initialOptions={initialOptions} />);

  const toggle = screen.getByRole('button', { name: 'Select a value' });

  await user.click(toggle);

  const option1 = screen.getByText('Option 1');
  const option2 = screen.getByText('Option 2');
  const option3 = screen.getByText('Option 3');

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

  render(<SimpleSelect initialOptions={initialOptions} />);

  const toggle = screen.getByRole('button', { name: 'Select a value' });

  await user.click(toggle);

  const option1 = screen.getByText('Option 1');
  await user.click(option1);

  expect(option1).toBeInTheDocument();
});

test('calls the onSelect callback with the selected value when an option is selected', async () => {
  const initialOptions = [
    { content: 'Option 1', value: 'option1' },
    { content: 'Option 2', value: 'option2' },
    { content: 'Option 3', value: 'option3' }
  ];

  const user = userEvent.setup();
  const onSelectMock = jest.fn();

  render(<SimpleSelect initialOptions={initialOptions} onSelect={onSelectMock} />);

  const toggle = screen.getByRole('button', { name: 'Select a value' });

  await user.click(toggle);

  expect(onSelectMock).not.toHaveBeenCalled();

  const option1 = screen.getByText('Option 1');

  await user.click(option1);

  expect(onSelectMock).toHaveBeenCalledTimes(1);
  expect(onSelectMock).toHaveBeenCalledWith(expect.anything(), 'option1');
});

test('toggles the select menu when the toggle button is clicked', async () => {
  const initialOptions = [
    { content: 'Option 1', value: 'option1' },
    { content: 'Option 2', value: 'option2' },
    { content: 'Option 3', value: 'option3' }
  ];

  const user = userEvent.setup();

  render(<SimpleSelect initialOptions={initialOptions} />);

  const toggleButton = screen.getByRole('button', { name: 'Select a value' });

  await user.click(toggleButton);

  const listbox = screen.getByRole('listbox');
  expect(listbox).toBeInTheDocument();

  await user.click(toggleButton);

  await waitForElementToBeRemoved(listbox);

  expect(screen.queryByRole('listbox')).not.toBeInTheDocument();
});

test('displays custom toggle content', async () => {
  const initialOptions = [
    { content: 'Option 1', value: 'option1' },
    { content: 'Option 2', value: 'option2' },
    { content: 'Option 3', value: 'option3' }
  ];

  render(<SimpleSelect initialOptions={initialOptions} toggleContent="Custom Toggle" />);

  const toggleButton = screen.getByRole('button', { name: 'Custom Toggle' });

  expect(toggleButton).toBeInTheDocument();
});

test('Passes toggleWidth', () => {
  const initialOptions = [
    { content: 'Option 1', value: 'option1' },
    { content: 'Option 2', value: 'option2' },
    { content: 'Option 3', value: 'option3' }
  ];

  render(<SimpleSelect initialOptions={initialOptions} toggleContent="Custom Toggle" toggleWidth="500px" />);

  const toggleButton = screen.getByRole('button', { name: 'Custom Toggle' });
  expect(toggleButton).toHaveAttribute('style', 'width: 500px;');
});

test('Passes additional toggleProps', () => {
  const initialOptions = [
    { content: 'Option 1', value: 'option1' },
    { content: 'Option 2', value: 'option2' },
    { content: 'Option 3', value: 'option3' }
  ];

  render(<SimpleSelect initialOptions={initialOptions} toggleContent="Custom Toggle" toggleProps={{ id: 'toggle' }} />);

  const toggleButton = screen.getByRole('button', { name: 'Custom Toggle' });
  expect(toggleButton).toHaveAttribute('id', 'toggle');
});

test('calls the onToggle callback when the select opens or closes', async () => {
  const initialOptions = [
    { content: 'Option 1', value: 'option1' },
    { content: 'Option 2', value: 'option2' },
    { content: 'Option 3', value: 'option3' }
  ];

  const user = userEvent.setup();
  const onToggleMock = jest.fn();

  render(<SimpleSelect initialOptions={initialOptions} onToggle={onToggleMock} />);

  const toggle = screen.getByRole('button', { name: 'Select a value' });

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

  render(<SimpleSelect initialOptions={initialOptions} onToggle={onToggleMock} />);

  expect(onToggleMock).not.toHaveBeenCalled();
});

test('disables the select when isDisabled prop is true', async () => {
  const initialOptions = [
    { content: 'Option 1', value: 'option1' },
    { content: 'Option 2', value: 'option2' },
    { content: 'Option 3', value: 'option3' }
  ];

  const user = userEvent.setup();

  render(<SimpleSelect initialOptions={initialOptions} isDisabled={true} />);

  const toggleButton = screen.getByRole('button', { name: 'Select a value' });

  expect(toggleButton).toBeDisabled();

  await user.click(toggleButton);

  expect(screen.queryByRole('menu')).not.toBeInTheDocument();
});

test('passes other SelectOption props to the SelectOption component', async () => {
  const initialOptions = [{ content: 'Option 1', value: 'option1', isDisabled: true }];

  const user = userEvent.setup();

  render(<SimpleSelect initialOptions={initialOptions} />);

  const toggle = screen.getByRole('button', { name: 'Select a value' });

  await user.click(toggle);

  const option1 = screen.getByRole('option', { name: 'Option 1' });

  expect(option1).toBeDisabled();
});

jest.mock('@patternfly/react-core/dist/js/helpers/GenerateId/GenerateId', () => ({
  GenerateId: ({ children }) => children('generated-id')
}));

test('checkbox select with no props snapshot', () => {
  const { asFragment } = render(<SimpleSelect />);

  expect(asFragment()).toMatchSnapshot();
});

test('Matches snapshot', async () => {
  const initialOptions = [
    { content: 'Option 1', value: 'option1' },
    { content: 'Option 2', value: 'option2' },
    { content: 'Option 3', value: 'option3' }
  ];

  const user = userEvent.setup();

  const { asFragment } = render(<SimpleSelect initialOptions={initialOptions} toggleContent="Select" />);

  const toggle = screen.getByRole('button', { name: 'Select' });
  await user.click(toggle);

  expect(asFragment()).toMatchSnapshot();
});
