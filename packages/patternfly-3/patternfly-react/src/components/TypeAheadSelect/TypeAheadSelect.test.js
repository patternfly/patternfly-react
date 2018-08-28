import React from 'react';
import { shallow } from 'enzyme';
import { TypeAheadSelect } from './index';

test('TypeAheadSelect is working !!', () => {
  const component = shallow(
    <p>
      <TypeAheadSelect clearButton multiple allowNew options={['One', 'Two', 'Three']} />
    </p>
  );

  expect(component).toMatchSnapshot();
});
