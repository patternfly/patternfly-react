import * as React from 'react';
import { render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { TypeaheadSelect } from '../TypeaheadSelect';
import styles from '@patternfly/react-styles/css/components/Menu/menu';

test('renders typeahead select with options', async () => {
  const selectOptions = [
    { content: 'Option 1', value: 'option1' },
    { content: 'Option 2', value: 'option2' },
    { content: 'Option 3', value: 'option3' }
  ];

  const user = userEvent.setup();

  render(<TypeaheadSelect selectOptions={selectOptions} />);

  const toggle = screen.getByRole('button', { name: 'Typeahead menu toggle' });

  await user.click(toggle);

  const option1 = screen.getByText('Option 1');
  const option2 = screen.getByText('Option 2');
  const option3 = screen.getByText('Option 3');

  expect(option1).toBeInTheDocument();
  expect(option2).toBeInTheDocument();
  expect(option3).toBeInTheDocument();
});

test('shows the selected item as selected', async () => {
  const selectOptions = [
    { content: 'Option 1', value: 'option1' },
    { content: 'Option 2', value: 'option2' },
    { content: 'Option 3', value: 'option3' }
  ];

  const user = userEvent.setup();

  render(<TypeaheadSelect selectOptions={selectOptions} selected="option1" />);

  const toggle = screen.getByRole('button', { name: 'Typeahead menu toggle' });

  await user.click(toggle);

  const option1 = screen.getByRole('option', { name: 'Option 1' });

  expect(option1).toHaveClass(styles.modifiers.selected);
});

test('calls the onSelect callback with the selected value when an option is selected', async () => {
  const selectOptions = [
    { content: 'Option 1', value: 'option1' },
    { content: 'Option 2', value: 'option2' },
    { content: 'Option 3', value: 'option3' }
  ];

  const user = userEvent.setup();
  const onSelectMock = jest.fn();

  render(<TypeaheadSelect selectOptions={selectOptions} onSelect={onSelectMock} />);

  const toggle = screen.getByRole('button', { name: 'Typeahead menu toggle' });

  await user.click(toggle);

  expect(onSelectMock).not.toHaveBeenCalled();

  const option1 = screen.getByRole('option', { name: 'Option 1' });

  await user.click(option1);

  expect(onSelectMock).toHaveBeenCalledTimes(1);
  expect(onSelectMock).toHaveBeenCalledWith(expect.anything(), 'option1');
});

test('calls the onClearSelection callback when clear button is clicked', async () => {
  const selectOptions = [
    { content: 'Option 1', value: 'option1' },
    { content: 'Option 2', value: 'option2' },
    { content: 'Option 3', value: 'option3' }
  ];
  const onClearSelectionMock = jest.fn();

  const user = userEvent.setup();

  render(<TypeaheadSelect selectOptions={selectOptions} selected="option1" onClearSelection={onClearSelectionMock} />);

  const toggle = screen.getByRole('button', { name: 'Typeahead menu toggle' });

  await user.click(toggle);

  const option1 = screen.getByRole('option', { name: 'Option 1' });
  expect(option1).toHaveClass(styles.modifiers.selected);

  const input = screen.getByRole('combobox');
  expect(input).toHaveValue('Option 1');

  const clearButton = screen.getByRole('button', { name: 'Clear input value' });
  await user.click(clearButton);

  expect(onClearSelectionMock).toHaveBeenCalledTimes(1);
});

test('toggles the select menu when the toggle button is clicked', async () => {
  const selectOptions = [
    { content: 'Option 1', value: 'option1' },
    { content: 'Option 2', value: 'option2' },
    { content: 'Option 3', value: 'option3' }
  ];

  const user = userEvent.setup();

  render(<TypeaheadSelect selectOptions={selectOptions} />);

  const toggle = screen.getByRole('button', { name: 'Typeahead menu toggle' });

  await user.click(toggle);

  const menu = screen.getByRole('listbox');
  expect(menu).toBeInTheDocument();

  await user.click(toggle);

  await waitForElementToBeRemoved(menu);

  expect(screen.queryByRole('listbox')).not.toBeInTheDocument();
});

test('calls the onToggle callback when the toggle is clicked', async () => {
  const selectOptions = [
    { content: 'Option 1', value: 'option1' },
    { content: 'Option 2', value: 'option2' },
    { content: 'Option 3', value: 'option3' }
  ];

  const user = userEvent.setup();
  const onToggleMock = jest.fn();

  render(<TypeaheadSelect selectOptions={selectOptions} onToggle={onToggleMock} />);

  const toggle = screen.getByRole('button', { name: 'Typeahead menu toggle' });

  expect(onToggleMock).not.toHaveBeenCalled();

  await user.click(toggle);

  expect(onToggleMock).toHaveBeenCalledTimes(1);
  expect(onToggleMock).toHaveBeenCalledWith(true);

  await user.click(toggle);

  expect(onToggleMock).toHaveBeenCalledTimes(2);
  expect(onToggleMock).toHaveBeenCalledWith(false);
});

test('Passes toggleWidth', () => {
  const selectOptions = [
    { content: 'Option 1', value: 'option1' },
    { content: 'Option 2', value: 'option2' },
    { content: 'Option 3', value: 'option3' }
  ];

  render(<TypeaheadSelect selectOptions={selectOptions} toggleWidth="500px" />);

  const toggle = screen.getByRole('button', { name: 'Typeahead menu toggle' });
  expect(toggle.parentElement).toHaveAttribute('style', 'width: 500px;');
});

test('Passes additional toggleProps', () => {
  const selectOptions = [
    { content: 'Option 1', value: 'option1' },
    { content: 'Option 2', value: 'option2' },
    { content: 'Option 3', value: 'option3' }
  ];

  render(<TypeaheadSelect selectOptions={selectOptions} toggleProps={{ id: 'toggle' }} />);

  const toggle = screen.getByRole('button', { name: 'Typeahead menu toggle' });
  expect(toggle.parentElement).toHaveAttribute('id', 'toggle');
});

test('passes custom placeholder text', async () => {
  const selectOptions = [
    { content: 'Option 1', value: 'option1' },
    { content: 'Option 2', value: 'option2' },
    { content: 'Option 3', value: 'option3' }
  ];

  render(<TypeaheadSelect selectOptions={selectOptions} placeholder="custom" />);

  const input = screen.getByRole('combobox');

  expect(input).toHaveAttribute('placeholder', 'custom');
});

test('displays noOptionsFoundMessage when filter returns no results', async () => {
  const selectOptions = [
    { content: 'Option 1', value: 'option1' },
    { content: 'Option 2', value: 'option2' },
    { content: 'Option 3', value: 'option3' }
  ];
  const user = userEvent.setup();

  render(<TypeaheadSelect selectOptions={selectOptions} />);

  const toggle = screen.getByRole('button', { name: 'Typeahead menu toggle' });
  const input = screen.getByRole('combobox');

  expect(input).toHaveAttribute('placeholder', 'Select an option');

  await user.click(toggle);

  const option1 = screen.getByRole('option', { name: 'Option 1' });
  const option2 = screen.getByRole('option', { name: 'Option 2' });
  const option3 = screen.getByRole('option', { name: 'Option 3' });

  expect(option1).toBeInTheDocument();
  expect(option2).toBeInTheDocument();
  expect(option3).toBeInTheDocument();

  await user.type(input, '9');
  expect(input).toHaveValue('9');

  expect(option1).not.toBeInTheDocument();
  expect(option2).not.toBeInTheDocument();
  expect(option3).not.toBeInTheDocument();
  expect(screen.getByRole('option', { name: 'No results found for "9"' })).toBeInTheDocument();
});

test('displays custom noOptionsFoundMessage', async () => {
  const selectOptions = [
    { content: 'Option 1', value: 'option1' },
    { content: 'Option 2', value: 'option2' },
    { content: 'Option 3', value: 'option3' }
  ];
  const user = userEvent.setup();

  render(<TypeaheadSelect selectOptions={selectOptions} noOptionsFoundMessage="custom" />);

  const toggle = screen.getByRole('button', { name: 'Typeahead menu toggle' });
  const input = screen.getByRole('combobox');

  expect(input).toHaveAttribute('placeholder', 'Select an option');

  await user.click(toggle);

  const option1 = screen.getByRole('option', { name: 'Option 1' });
  const option2 = screen.getByRole('option', { name: 'Option 2' });
  const option3 = screen.getByRole('option', { name: 'Option 3' });

  expect(option1).toBeInTheDocument();
  expect(option2).toBeInTheDocument();
  expect(option3).toBeInTheDocument();

  await user.type(input, '9');
  expect(input).toHaveValue('9');

  expect(option1).not.toBeInTheDocument();
  expect(option2).not.toBeInTheDocument();
  expect(option3).not.toBeInTheDocument();
  expect(screen.getByRole('option', { name: 'custom' })).toBeInTheDocument();
});

test('disables the select when isDisabled prop is true', async () => {
  const selectOptions = [
    { content: 'Option 1', value: 'option1' },
    { content: 'Option 2', value: 'option2' },
    { content: 'Option 3', value: 'option3' }
  ];

  const user = userEvent.setup();

  render(<TypeaheadSelect selectOptions={selectOptions} isDisabled={true} />);

  const toggle = screen.getByRole('button', { name: 'Typeahead menu toggle' });

  expect(toggle.parentElement).toHaveClass(styles.modifiers.disabled);

  await user.click(toggle);

  expect(screen.queryByRole('menu')).not.toBeInTheDocument();
});

test('passes other SelectOption props to the SelectOption component', async () => {
  const selectOptions = [{ content: 'Option 1', value: 'option1', isDisabled: true }];

  const user = userEvent.setup();

  render(<TypeaheadSelect selectOptions={selectOptions} />);

  const toggle = screen.getByRole('button', { name: 'Typeahead menu toggle' });

  await user.click(toggle);

  const option1 = screen.getByRole('option', { name: 'Option 1' });
  expect(option1).toBeDisabled();
});

test('typing in input filters options', async () => {
  const selectOptions = [
    { content: 'Option 1', value: 'option1' },
    { content: 'Option 2', value: 'option2' },
    { content: 'Option 3', value: 'option3' }
  ];

  const user = userEvent.setup();

  render(<TypeaheadSelect selectOptions={selectOptions} />);

  const toggle = screen.getByRole('button', { name: 'Typeahead menu toggle' });
  const input = screen.getByRole('combobox');

  expect(input).toHaveAttribute('placeholder', 'Select an option');

  await user.click(toggle);

  const option1 = screen.getByRole('option', { name: 'Option 1' });
  const option2 = screen.getByRole('option', { name: 'Option 2' });
  const option3 = screen.getByRole('option', { name: 'Option 3' });

  expect(option1).toBeInTheDocument();
  expect(option2).toBeInTheDocument();
  expect(option3).toBeInTheDocument();

  await user.type(input, '1');
  expect(input).toHaveValue('1');

  expect(option1).toBeInTheDocument();
  expect(option2).not.toBeInTheDocument();
  expect(option3).not.toBeInTheDocument();
});

test('typing in input triggers onInputChange callback', async () => {
  const selectOptions = [
    { content: 'Option 1', value: 'option1' },
    { content: 'Option 2', value: 'option2' },
    { content: 'Option 3', value: 'option3' }
  ];

  const user = userEvent.setup();
  const onInputChangeMock = jest.fn();

  render(<TypeaheadSelect selectOptions={selectOptions} onInputChange={onInputChangeMock} />);

  const input = screen.getByRole('combobox');

  expect(input).toHaveAttribute('placeholder', 'Select an option');

  await user.type(input, '1');

  expect(input).toHaveValue('1');
  expect(onInputChangeMock).toHaveBeenCalledTimes(1);
  expect(onInputChangeMock).toHaveBeenCalledWith('1');
});

test('Matches snapshot', async () => {
  const selectOptions = [
    { content: 'Option 1', value: 'option1' },
    { content: 'Option 2', value: 'option2' },
    { content: 'Option 3', value: 'option3' }
  ];

  const user = userEvent.setup();

  const { asFragment } = render(<TypeaheadSelect selectOptions={selectOptions} />);

  const toggle = screen.getByRole('button', { name: 'Typeahead menu toggle' });
  await user.click(toggle);

  expect(asFragment()).toMatchSnapshot();
});
