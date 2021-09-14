import React from 'react';
import { mount } from 'enzyme';
import { SearchInput, FormGroup, Button, ExternalLinkSquareAltIcon } from '../SearchInput';


const props = {
  onChange: jest.fn(),
  value: 'test input',
  onNextClick: jest.fn(),
  onPreviousClick: jest.fn(),
  onClear: jest.fn(),
  onSearch: jest.fn()
};

test('simple search input', () => {
  const view = mount(<SearchInput {...props} aria-label="simple text input" />);
  expect(view.find('input')).toMatchSnapshot();
});

test('search input with hint', () => {
  const view = mount(<SearchInput {...props} hint="test hint" aria-label="simple text input" />);
  expect(view.find('input')).toMatchSnapshot();
});

test('result count', () => {
  const view = mount(<SearchInput {...props} resultsCount={3} aria-label="simple text input" />);
  expect(view.find('.pf-c-badge')).toMatchSnapshot();
});

test('navigable search results', () => {
  const view = mount(
    <SearchInput
      {...props}
      resultsCount='3 / 7'
      aria-label="simple text input"
    />);
  expect(view.find('.pf-c-search-input__nav')).toMatchSnapshot();
  expect(view.find('.pf-c-badge')).toMatchSnapshot();

  view.find('.pf-c-button').at(0).simulate('click', {});
  expect(props.onPreviousClick).toBeCalled();
  view.find('.pf-c-button').at(1).simulate('click', {});
  expect(props.onNextClick).toBeCalled();
  view.find('.pf-c-button').at(2).simulate('click', {});
  expect(props.onClear).toBeCalled();
});

test('hide clear button', () => {
  const { onClear, ...testProps } = props;
  const view = mount(
    <SearchInput {...testProps} resultsCount='3' aria-label="simple text input without on clear" />
  );
  expect(view.find('.pf-c-search-input__clear').length).toBe(0);
});

test('advanced search', () => {
  const view = mount(
    <SearchInput
      attributes={[{attr:"username", display:"Username"}, {attr: "firstname", display: "First name"}]}
      advancedSearchDelimiter=":"
      value='username:player firstname:john'
      onChange={props.onChange}
      onSearch={props.onSearch}
      onClear={props.onClear}
    />
  );
  view.find('.pf-c-button').at(2).simulate('click', {});
  expect(props.onSearch).toBeCalled();
  expect(view.find('input')).toMatchSnapshot();
});

test('advanced search with custom attributes', () => {
  const view = mount(
    <SearchInput
      attributes={[{attr:"username", display:"Username"}, {attr: "firstname", display: "First name"}]}
      advancedSearchDelimiter=":"
      formAdditionalItems={<FormGroup><Button variant="link" isInline icon={<ExternalLinkSquareAltIcon />} iconPosition="right">Link</Button></FormGroup>}
      value='username:player firstname:john'
      onChange={props.onChange}
      onSearch={props.onSearch}
      onClear={props.onClear}
    />
  );
  view.find('.pf-c-button').at(2).simulate('click', {});
  expect(props.onSearch).toBeCalled();
  expect(view.find('input')).toMatchSnapshot();
});
