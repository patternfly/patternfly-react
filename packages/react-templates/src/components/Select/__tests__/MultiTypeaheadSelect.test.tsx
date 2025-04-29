import { render, screen, waitForElementToBeRemoved, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MultiTypeaheadSelect } from '../MultiTypeaheadSelect';
import styles from '@patternfly/react-styles/css/components/Menu/menu';

const getToggle = () => screen.getByRole('button', { name: 'Multi select Typeahead menu toggle' });

describe('MultiTypeaheadSelect', () => {
  it('renders MultiTypeaheadSelect with options', async () => {
    const initialOptions = [
      { content: 'Option 1', value: 'option1' },
      { content: 'Option 2', value: 'option2' },
      { content: 'Option 3', value: 'option3' }
    ];

    const user = userEvent.setup();

    render(<MultiTypeaheadSelect initialOptions={initialOptions} />);

    const toggle = getToggle();

    await user.click(toggle);

    const option1 = screen.getByText('Option 1');
    const option2 = screen.getByText('Option 2');
    const option3 = screen.getByText('Option 3');

    expect(option1).toBeInTheDocument();
    expect(option2).toBeInTheDocument();
    expect(option3).toBeInTheDocument();
  });

  it('selects options when clicked', async () => {
    const initialOptions = [
      { content: 'Option 1', value: 'option1' },
      { content: 'Option 2', value: 'option2' },
      { content: 'Option 3', value: 'option3' }
    ];

    const user = userEvent.setup();

    render(<MultiTypeaheadSelect initialOptions={initialOptions} />);

    const toggle = getToggle();

    await user.click(toggle);

    const option1 = screen.getByRole('option', { name: 'Option 1' });

    expect(option1).not.toHaveClass(styles.modifiers.selected);

    await user.click(option1);

    expect(option1).toHaveClass(styles.modifiers.selected);
  });

  it('calls the onSelectionChange callback with the selected value when an option is selected', async () => {
    const initialOptions = [
      { content: 'Option 1', value: 'option1' },
      { content: 'Option 2', value: 'option2' },
      { content: 'Option 3', value: 'option3' }
    ];

    const user = userEvent.setup();
    const onSelectionChangeMock = jest.fn();

    render(<MultiTypeaheadSelect initialOptions={initialOptions} onSelect={onSelectionChangeMock} />);

    const toggle = getToggle();

    await user.click(toggle);

    expect(onSelectionChangeMock).not.toHaveBeenCalled();

    const option1 = screen.getByRole('option', { name: 'Option 1' });

    await user.click(option1);

    expect(onSelectionChangeMock).toHaveBeenCalledTimes(1);
    expect(onSelectionChangeMock).toHaveBeenCalledWith(expect.anything(), 'option1');
  });

  it('deselects options when clear button is clicked', async () => {
    const initialOptions = [
      { content: 'Option 1', value: 'option1' },
      { content: 'Option 2', value: 'option2' },
      { content: 'Option 3', value: 'option3' }
    ];

    const user = userEvent.setup();

    render(<MultiTypeaheadSelect initialOptions={initialOptions} />);

    const toggle = getToggle();

    await user.click(toggle);

    const option1 = screen.getByRole('option', { name: 'Option 1' });
    await user.click(option1);
    expect(option1).toHaveClass(styles.modifiers.selected);

    const input = screen.getByRole('combobox');

    const clearButton = screen.getByRole('button', { name: 'Clear input value' });
    await user.click(clearButton);

    expect(input).toHaveValue('');

    await user.click(toggle);
    expect(screen.getByRole('option', { name: 'Option 1' })).not.toHaveClass(styles.modifiers.selected);
  });

  it('toggles the select menu when the toggle button is clicked', async () => {
    const initialOptions = [
      { content: 'Option 1', value: 'option1' },
      { content: 'Option 2', value: 'option2' },
      { content: 'Option 3', value: 'option3' }
    ];

    const user = userEvent.setup();

    render(<MultiTypeaheadSelect initialOptions={initialOptions} />);

    const toggle = getToggle();

    await user.click(toggle);

    const menu = screen.getByRole('listbox');
    expect(menu).toBeInTheDocument();

    await user.click(toggle);

    await waitForElementToBeRemoved(menu);

    expect(screen.queryByRole('listbox')).not.toBeInTheDocument();
  });

  it('calls the onToggle callback when the toggle is clicked', async () => {
    const initialOptions = [
      { content: 'Option 1', value: 'option1' },
      { content: 'Option 2', value: 'option2' },
      { content: 'Option 3', value: 'option3' }
    ];

    const user = userEvent.setup();
    const onToggleMock = jest.fn();

    render(<MultiTypeaheadSelect initialOptions={initialOptions} onToggle={onToggleMock} />);

    const toggle = getToggle();

    expect(onToggleMock).not.toHaveBeenCalled();

    await user.click(toggle);

    expect(onToggleMock).toHaveBeenCalledTimes(1);
    expect(onToggleMock).toHaveBeenCalledWith(true);

    await user.click(toggle);

    expect(onToggleMock).toHaveBeenCalledTimes(2);
    expect(onToggleMock).toHaveBeenCalledWith(false);
  });

  it('Passes toggleWidth', () => {
    const initialOptions = [
      { content: 'Option 1', value: 'option1' },
      { content: 'Option 2', value: 'option2' },
      { content: 'Option 3', value: 'option3' }
    ];

    render(<MultiTypeaheadSelect initialOptions={initialOptions} toggleWidth="500px" />);

    const toggle = getToggle();
    expect(toggle.parentElement).toHaveAttribute('style', 'width: 500px;');
  });

  it('Passes additional toggleProps', () => {
    const initialOptions = [
      { content: 'Option 1', value: 'option1' },
      { content: 'Option 2', value: 'option2' },
      { content: 'Option 3', value: 'option3' }
    ];

    render(<MultiTypeaheadSelect initialOptions={initialOptions} toggleProps={{ id: 'toggle' }} />);

    const toggle = getToggle();
    expect(toggle.parentElement).toHaveAttribute('id', 'toggle');
  });

  it('passes custom placeholder text', async () => {
    const initialOptions = [
      { content: 'Option 1', value: 'option1' },
      { content: 'Option 2', value: 'option2' },
      { content: 'Option 3', value: 'option3' }
    ];

    render(<MultiTypeaheadSelect initialOptions={initialOptions} placeholder="custom" />);

    const input = screen.getByRole('combobox');

    expect(input).toHaveAttribute('placeholder', 'custom');
  });

  it('displays noOptionsFoundMessage when filter returns no results', async () => {
    const initialOptions = [
      { content: 'Option 1', value: 'option1' },
      { content: 'Option 2', value: 'option2' },
      { content: 'Option 3', value: 'option3' }
    ];
    const user = userEvent.setup();

    render(<MultiTypeaheadSelect initialOptions={initialOptions} />);

    const toggle = getToggle();
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

  it('displays custom noOptionsFoundMessage', async () => {
    const initialOptions = [
      { content: 'Option 1', value: 'option1' },
      { content: 'Option 2', value: 'option2' },
      { content: 'Option 3', value: 'option3' }
    ];
    const user = userEvent.setup();

    render(<MultiTypeaheadSelect initialOptions={initialOptions} noOptionsFoundMessage="custom" />);

    const toggle = getToggle();
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

  it('disables the select when isDisabled prop is true', async () => {
    const initialOptions = [
      { content: 'Option 1', value: 'option1' },
      { content: 'Option 2', value: 'option2' },
      { content: 'Option 3', value: 'option3' }
    ];

    const user = userEvent.setup();

    render(<MultiTypeaheadSelect initialOptions={initialOptions} isDisabled={true} />);

    const toggle = getToggle();

    expect(toggle.parentElement).toHaveClass(styles.modifiers.disabled);

    await user.click(toggle);

    expect(screen.queryByRole('menu')).not.toBeInTheDocument();
  });

  it('passes other SelectOption props to the SelectOption component', async () => {
    const initialOptions = [{ content: 'Option 1', value: 'option1', isDisabled: true }];

    const user = userEvent.setup();

    render(<MultiTypeaheadSelect initialOptions={initialOptions} />);

    const toggle = getToggle();

    await user.click(toggle);

    const option1 = screen.getByRole('option', { name: 'Option 1' });
    expect(option1).toBeDisabled();
  });

  it('displays the option in chip when option is selected', async () => {
    const initialOptions = [
      { content: 'Option 1', value: 'option1' },
      { content: 'Option 2', value: 'option2' },
      { content: 'Option 3', value: 'option3' }
    ];

    const user = userEvent.setup();

    render(<MultiTypeaheadSelect initialOptions={initialOptions} />);

    const toggle = getToggle();
    const input = screen.getByRole('combobox');

    expect(input).toHaveAttribute('placeholder', 'Select an option');

    await user.click(toggle);

    const option1 = screen.getByRole('option', { name: 'Option 1' });

    await user.click(option1);

    await user.click(toggle);

    // TODO: How to find the chips?

    const clearButton = screen.getByRole('button', { name: 'Clear input value' });
    await user.click(clearButton);

    // TODO: How to find the chips?
  });

  it('typing in input filters options', async () => {
    const initialOptions = [
      { content: 'Option 1', value: 'option1' },
      { content: 'Option 2', value: 'option2' },
      { content: 'Option 3', value: 'option3' }
    ];

    const user = userEvent.setup();

    render(<MultiTypeaheadSelect initialOptions={initialOptions} />);

    const toggle = getToggle();
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

  it('typing in input triggers onInputChange callback', async () => {
    const initialOptions = [
      { content: 'Option 1', value: 'option1' },
      { content: 'Option 2', value: 'option2' },
      { content: 'Option 3', value: 'option3' }
    ];

    const user = userEvent.setup();
    const onInputChangeMock = jest.fn();

    render(<MultiTypeaheadSelect initialOptions={initialOptions} onInputChange={onInputChangeMock} />);

    const input = screen.getByRole('combobox');

    expect(input).toHaveAttribute('placeholder', 'Select an option');

    await user.type(input, '1');

    expect(input).toHaveValue('1');
    expect(onInputChangeMock).toHaveBeenCalledTimes(1);
    expect(onInputChangeMock).toHaveBeenCalledWith('1');
  });

  it('calls the onInputKeyDown callback only when keydown event occurs', async () => {
    const initialOptions = [
      { content: 'Option 1', value: 'option1' },
      { content: 'Option 2', value: 'option2' },
      { content: 'Option 3', value: 'option3' }
    ];

    const user = userEvent.setup();
    const onInputKeyDownMock = jest.fn();

    render(<MultiTypeaheadSelect initialOptions={initialOptions} onInputKeyDown={onInputKeyDownMock} />);

    const input = screen.getByRole('combobox');
    await user.click(input);
    expect(onInputKeyDownMock).not.toHaveBeenCalled();
    await user.keyboard('{Enter}');
    expect(onInputKeyDownMock).toHaveBeenCalledTimes(1);
  });

  it('text input is empty by default', async () => {
    render(<MultiTypeaheadSelect initialOptions={[]} />);

    const input = screen.getByRole('combobox');
    expect(input).toHaveValue('');
  });

  it('initialInputValue prop sets the default text input value', async () => {
    const initialOptions = [
      { content: 'Option 1', value: 'option1' },
      { content: 'Option 2', value: 'option2' },
      { content: 'Option 3', value: 'option3' }
    ];

    const user = userEvent.setup();

    render(<MultiTypeaheadSelect initialInputValue={'Option 1'} initialOptions={initialOptions} />);

    const input = screen.getByRole('combobox');
    expect(input).toHaveValue('Option 1');

    await user.click(input);

    const menu = screen.getByRole('listbox');
    const options = within(menu).getAllByRole('option');

    expect(options).toHaveLength(1);
    expect(options[0]).toHaveTextContent('Option 1');
  });

  it('Matches snapshot', async () => {
    const initialOptions = [
      { content: 'Option 1', value: 'option1' },
      { content: 'Option 2', value: 'option2' },
      { content: 'Option 3', value: 'option3' }
    ];

    const user = userEvent.setup();

    const { asFragment } = render(<MultiTypeaheadSelect initialOptions={initialOptions} />);

    const toggle = getToggle();
    await user.click(toggle);

    expect(asFragment()).toMatchSnapshot();
  });
});
