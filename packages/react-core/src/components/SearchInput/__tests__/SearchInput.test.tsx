import React from 'react';

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

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
    render(<SearchInput {...props} aria-label="simple text input" />);
    expect(screen.getByLabelText('simple text input').outerHTML).toMatchSnapshot();
  });

  test('search input with hint', () => {
    render(<SearchInput {...props} hint="test hint" aria-label="simple text input" />);
    expect(screen.getByLabelText('simple text input').parentElement.outerHTML).toContain('test hint');
  });

  test('result count', () => {
    render(<SearchInput {...props} resultsCount={3} aria-label="simple text input" data-testid="test-id" />);
    expect(screen.getByTestId('test-id').outerHTML).toContain('pf-c-badge');
  });

  test('navigable search results', () => {
    render(<SearchInput {...props} resultsCount="3 / 7" aria-label="simple text input" data-testid="test-id" />);

    expect(screen.getByTestId('test-id').outerHTML).toContain('pf-c-search-input__nav');
    expect(screen.getByTestId('test-id').outerHTML).toContain('pf-c-badge');

    userEvent.click(screen.getByRole('button', { name: 'Previous' }));
    expect(props.onPreviousClick).toBeCalled();

    userEvent.click(screen.getByRole('button', { name: 'Next' }));
    expect(props.onNextClick).toBeCalled();

    userEvent.click(screen.getByRole('button', { name: 'Reset' }));
    expect(props.onClear).toBeCalled();
  });

  test('hide clear button', () => {
    const { onClear, ...testProps } = props;

    render(<SearchInput {...testProps} resultsCount="3" aria-label="simple text input without on clear" />);
    expect(screen.queryByRole('button', { name: 'Reset' })).not.toBeInTheDocument();
  });

  test('advanced search', () => {
    render(
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
        data-testid="test-id"
      />
    );

    userEvent.click(screen.getByRole('button', { name: 'Search' }));
    expect(props.onSearch).toBeCalled();
    expect(screen.getByTestId('test-id').outerHTML).toMatchSnapshot();
  });

  test('advanced search with custom attributes', () => {
    render(
      <SearchInput
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
        data-testid="test-id"
      />
    );

    userEvent.click(screen.getByRole('button', { name: 'Search' }));
    expect(props.onSearch).toBeCalled();
    expect(screen.getByTestId('test-id').outerHTML).toMatchSnapshot();
  });
});
