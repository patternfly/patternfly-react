import React from 'react';
import { shallow } from 'enzyme';
import { Label as BsLabel } from 'react-bootstrap';
import Label from './Label';
import RemoveButton from './RemoveButton';

it('sets bsStyle to type', () => {
  const type = 'primary';
  const view = shallow(<Label type={type} />);
  expect(view.find(BsLabel).props().bsStyle).toBe(type);
});

it('spreads additional props to Bootstrap Label', () => {
  const view = shallow(<Label id="id" another="another" />);
  expect(view.find(BsLabel).props()).toMatchSnapshot('Bootstrap label has correct props.');
});

it('does not render RemoveButton if onRemoveClick is not present', () => {
  const view = shallow(<Label />);
  expect(view.find(RemoveButton).exists()).toBe(false);
});

it('renders RemoveButton if onRemoveClick is present', () => {
  const view = shallow(<Label onRemoveClick={jest.fn()} />);
  expect(view.find(RemoveButton).exists()).toBe(true);
});
