import React from 'react';
import { shallow } from 'enzyme';
import RemoveButton from './RemoveButton';

it('calls preventDefault on click', () => {
  const preventDefault = jest.fn();
  const view = shallow(<RemoveButton />);
  view.find('a').simulate('click', { preventDefault });
  expect(preventDefault).toBeCalled();
});

it('handles onRemoveClick having a falsy value', () => {
  const preventDefault = jest.fn();
  const view = shallow(<RemoveButton onRemoveClick={null} />);
  expect(() => {
    view.find('a').simulate('click', { preventDefault });
    expect(preventDefault).toBeCalled();
  }).not.toThrow();
});

it('spreads additional props and className to icon', () => {
  const view = shallow(<RemoveButton id="id" another="another" className="additional classes" />);
  expect(view).toMatchSnapshot('Icon has correct props.');
});
