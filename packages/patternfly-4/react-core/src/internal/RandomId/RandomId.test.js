import React from 'react';
import { shallow } from 'enzyme';
import RandomId from './RandomId';

test('generates id', () => {
  // const myComponent = randomId => <div id={randomId}>div with random ID</div>;
  const view = shallow(<RandomId>{id => <div id={id}>div with random ID</div>}</RandomId>);

  expect(view).toMatchSnapshot();
});
