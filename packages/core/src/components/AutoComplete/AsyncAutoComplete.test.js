import React from 'react';
import { shallow } from 'enzyme';
import AsyncAutoComplete from './AsyncAutoComplete';

test('AsyncAutoComplete is working !!', () => {
  const optionsArray = ['One', 'Two', 'Three'];
  const timeout = 500;
  const handleSearch = () => {
    setTimeout(() => optionsArray, timeout);
  };
  const component = shallow(
    <AsyncAutoComplete
      useCache
      labelKey="login"
      minLength={0}
      placeholder="Search someone who have forked Patternfly-react.."
      onSearch={handleSearch}
      renderMenuItemChildren={option => <span>option</span>}
    />
  );

  expect(component).toMatchSnapshot();
  component.instance().handleSearch();
  setTimeout(() => {
    component.update();
    expect(component.state().options).toEqual(optionsArray);
    expect(component.state().isLoading).toEqual(false);
  }, timeout + 1000);
});
