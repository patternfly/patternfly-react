import React from 'react';
import { shallow } from 'enzyme';
import Button from './Button';

test('Button renders properly', () => {
  const component = shallow(<Button id="button1">Default button</Button>).getElement();

  expect(component).toMatchSnapshot();
});

test('Button allows to specify size and style', () => {
  const component = shallow(
    <Button id="button1" bsStyle="primary" bsSize="large">
      Large Primary button
    </Button>
  ).getElement();

  expect(component).toMatchSnapshot();
});
