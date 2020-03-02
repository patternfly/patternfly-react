import React from 'react';
import { shallow } from 'enzyme';
import AsyncTypeAheadSelect from './AsyncTypeAheadSelect';

test('AsyncTypeAheadSelect is working !!', () => {
  let typeaheadRef;

  const optionsArray = ['One', 'Two', 'Three'];
  const timeout = 500;
  const handleSearch = () => {
    setTimeout(() => optionsArray, timeout);
  };
  const component = shallow(
    <AsyncTypeAheadSelect
      useCache
      ref={r => {
        typeaheadRef = r;
      }}
      labelKey="login"
      minLength={0}
      placeholder="Search someone who have forked Patternfly-react.."
      onSearch={handleSearch}
      renderMenuItemChildren={option => <span>option</span>}
    />
  ).dive();

  expect(component).toMatchSnapshot();
  component.instance().handleSearch();
  expect(typeaheadRef).toBeUndefined();

  setTimeout(() => {
    component.update();
    expect(component.state().options).toEqual(optionsArray);
    expect(component.state().isLoading).toEqual(false);
    expect(typeaheadRef.getInstance()).toBeDefined();
  }, timeout + 1000);
});
