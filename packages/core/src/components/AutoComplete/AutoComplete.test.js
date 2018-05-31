import React from 'react';
import { shallow } from 'enzyme';
import AutoComplete from './AutoComplete';

test('AutoComplete is working !!', () => {
  const component = shallow(
    <AutoComplete
      clearButton
      multiple
      allowNew
      options={['One', 'Two', 'Three']}
    />
  );

  expect(component).toMatchSnapshot();
});
