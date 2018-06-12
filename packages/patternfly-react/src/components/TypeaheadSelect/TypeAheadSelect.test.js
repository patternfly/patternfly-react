import React from 'react';
import { shallow } from 'enzyme';
import TypeAheadSelect from './TypeAheadSelect';

test('TypeAheadSelect is working !!', () => {
  const component = shallow(
    <TypeAheadSelect
      clearButton
      multiple
      allowNew
      options={['One', 'Two', 'Three']}
    />
  );

  expect(component).toMatchSnapshot();
});
