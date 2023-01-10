import React from 'react';

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { SearchInput } from '../SearchInput';
import { FormGroup } from '../../Form';
import { Button } from '../../Button';
import { ExternalLinkSquareAltIcon } from '@patternfly/react-icons';

const props = {
  onChange: jest.fn(),
  value: 'test input',
  onNextClick: jest.fn(),
  onPreviousClick: jest.fn(),
  onClear: jest.fn(),
  onSearch: jest.fn()
};

describe('SearchInput', () => {
  test('simple search input', () => {
    const { asFragment } = render(<SearchInput {...props} aria-label="simple text input" />);
    expect(asFragment()).toMatchSnapshot();
  });

  test('search input with hint', () => {
    const { asFragment } = render(<SearchInput {...props} hint="test hint" aria-label="simple text input" />);
    expect(asFragment()).toMatchSnapshot();
  });

  test('result count', () => {
    render(<SearchInput {...props} resultsCount={3} aria-label="simple text input" data-testid="test-id" />);
    expect(screen.getByTestId('test-id').querySelector('.pf-c-badge')).toBeInTheDocument();
  });

  test('renders search input in strict mode', async () => {
    const user = userEvent.setup();

    const consoleError = jest.spyOn(console, 'error');
    const { asFragment } = render(
      <React.StrictMode>
        <SearchInput
          attributes={[
            { attr: 'username', display: 'Username' },
            { attr: 'firstname', display: 'First name' }
          ]}
          advancedSearchDelimiter=":"
          value="username:player firstname:john"
          onChange={props.onChange}
          onSearch={props.onSearch}
          onClear={props.onClear}
          removeFindDomNode
        />
      </React.StrictMode>
    );
    await user.click(screen.getByRole('button', { name: 'Search' }));
    expect(consoleError).not.toHaveBeenCalled();
    expect(props.onSearch).toHaveBeenCalled();
    expect(asFragment()).toMatchSnapshot();
  });

  test('navigable search results', async () => {
    const user = userEvent.setup();

    render(<SearchInput {...props} resultsCount="3 / 7" aria-label="simple text input" data-testid="test-id" />);

    const input = screen.getByTestId('test-id');
    expect(input.querySelector('.pf-c-text-input-group__group')).toBeInTheDocument();
    expect(input.querySelector('.pf-c-badge')).toBeInTheDocument();

    await user.click(screen.getByRole('button', { name: 'Previous' }));
    expect(props.onPreviousClick).toHaveBeenCalled();

    await user.click(screen.getByRole('button', { name: 'Next' }));
    expect(props.onNextClick).toHaveBeenCalled();

    await user.click(screen.getByRole('button', { name: 'Reset' }));
    expect(props.onClear).toHaveBeenCalled();
  });

  test('hide clear button', () => {
    const { onClear, ...testProps } = props;

    render(<SearchInput {...testProps} resultsCount="3" aria-label="simple text input without on clear" />);
    expect(screen.queryByRole('button', { name: 'Reset' })).not.toBeInTheDocument();
  });

  test('advanced search', async () => {
    const user = userEvent.setup();

    const { asFragment } = render(
      <SearchInput
        attributes={[
          { attr: 'username', display: 'Username' },
          { attr: 'firstname', display: 'First name' }
        ]}
        advancedSearchDelimiter=":"
        value="username:player firstname:john"
        onChange={props.onChange}
        onSearch={props.onSearch}
        onClear={props.onClear}
      />
    );

    await user.click(screen.getByRole('button', { name: 'Search' }));

    expect(props.onSearch).toHaveBeenCalled();
    expect(asFragment()).toMatchSnapshot();
  });

  test('advanced search with custom attributes', async () => {
    const user = userEvent.setup();

    const { asFragment } = render(
      <SearchInput
        data-testid="test-id"
        attributes={[
          { attr: 'username', display: 'Username' },
          { attr: 'firstname', display: 'First name' }
        ]}
        advancedSearchDelimiter=":"
        formAdditionalItems={
          <FormGroup fieldId="test-form-group">
            <Button variant="link" isInline icon={<ExternalLinkSquareAltIcon />} iconPosition="right">
              Link
            </Button>
          </FormGroup>
        }
        value="username:player firstname:john"
        onChange={props.onChange}
        onSearch={props.onSearch}
        onClear={props.onClear}
      />
    );

    await user.click(screen.getByRole('button', { name: 'Search' }));

    await user.click(screen.getByRole('button', { name: 'Open advanced search' }));
    expect(screen.getByTestId('test-id')).toContainElement(screen.getByText('First name'));

    expect(props.onSearch).toHaveBeenCalled();
    expect(asFragment()).toMatchSnapshot();
  });

  test('advanced search with custom attributes and appendTo="inline', async () => {
    const user = userEvent.setup();

    const { container } = render(
      <SearchInput data-testid="test-id" attributes={[{ attr: 'test', display: 'test' }]} appendTo="inline" />
    );

    await user.click(screen.getByRole('button', { name: 'Open advanced search' }));

    expect(screen.getByTestId('test-id')).toContainElement(screen.getByText('test'));
  });

  test('advanced search with custom attributes and appendTo external DOM element', async () => {
    const user = userEvent.setup();

    const { container } = render(
      <SearchInput data-testid="test-id" attributes={[{ attr: 'test', display: 'test' }]} appendTo={document.body} />
    );

    await user.click(screen.getByRole('button', { name: 'Open advanced search' }));

    expect(screen.getByTestId('test-id')).not.toContainElement(screen.getByText('test'));
    expect(document.body).toContainElement(screen.getByText('test'));
  });
});

test('expandable toggle does not render by default', () => {
  render(<SearchInput />);

  expect(screen.queryByRole('button')).not.toBeInTheDocument();
});

test('expandable toggle renders when a value is passed for expandableProps', () => {
  render(
    <SearchInput expandableInput={{ isExpanded: false, onToggleExpand: () => {}, toggleAriaLabel: 'Test label' }} />
  );

  expect(screen.getByRole('button')).toBeVisible();
});

test('expandable toggle is not aria-expanded when isExpanded is not true', () => {
  render(
    <SearchInput expandableInput={{ isExpanded: false, onToggleExpand: () => {}, toggleAriaLabel: 'Test label' }} />
  );

  expect(screen.getByRole('button', { expanded: false })).toBeVisible();
});

test('expandable toggle is aria-expanded when isExpanded is true', () => {
  render(
    <SearchInput expandableInput={{ isExpanded: true, onToggleExpand: () => {}, toggleAriaLabel: 'Test label' }} />
  );

  expect(screen.getByRole('button', { expanded: true })).toBeVisible();
});

test('text input is not rendered when isExpanded is not true', () => {
  render(
    <SearchInput expandableInput={{ isExpanded: false, onToggleExpand: () => {}, toggleAriaLabel: 'Test label' }} />
  );

  expect(screen.queryByRole('textbox')).not.toBeInTheDocument();
});

test('text input is rendered when isExpanded is true', () => {
  render(
    <SearchInput expandableInput={{ isExpanded: true, onToggleExpand: () => {}, toggleAriaLabel: 'Test label' }} />
  );

  expect(screen.getByRole('textbox')).toBeVisible();
});

test('onToggleExpand is not called if the expandable toggle is not clicked', () => {
  const mockOnToggleExpand = jest.fn();

  render(
    <SearchInput
      expandableInput={{ isExpanded: true, onToggleExpand: mockOnToggleExpand, toggleAriaLabel: 'Test label' }}
    />
  );

  expect(mockOnToggleExpand).not.toHaveBeenCalled();
});

test('onToggleExpand is called if the expandable toggle is clicked', async () => {
  const mockOnToggleExpand = jest.fn();
  const user = userEvent.setup();

  render(
    <SearchInput
      expandableInput={{ isExpanded: true, onToggleExpand: mockOnToggleExpand, toggleAriaLabel: 'Test label' }}
    />
  );

  await user.click(screen.getByRole('button'));

  expect(mockOnToggleExpand).toHaveBeenCalledTimes(1);
  expect(mockOnToggleExpand).toHaveBeenCalledWith(expect.objectContaining({ type: 'click' }), true);
});

test('toggleAriaLabel is applied to the expandable toggle', () => {
  render(
    <SearchInput expandableInput={{ isExpanded: true, onToggleExpand: () => {}, toggleAriaLabel: 'Test label' }} />
  );

  expect(screen.getByRole('button')).toHaveAccessibleName('Test label');
});
