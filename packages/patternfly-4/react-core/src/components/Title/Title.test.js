import Title, { TitleSize } from './Title';
import React from 'react';
import { shallow } from 'enzyme';

Object.values(TitleSize).forEach(size => {
  test(`${size} Title`, () => {
    const view = shallow(<Title size={size}>{size} Title</Title>);
    expect(view).toMatchSnapshot();
  });
});

test('Heading level defaults to h1', () => {
  const view = shallow(<Title size='lg'>Default H1 heading</Title>);
  const isH1 = view.find('h1').length === 1;
  expect(isH1).toBe(true);
});

test('Heading level can be set to h3', () => {
  const view = shallow(<Title size='lg' headingLevel="h3">H3 Heading</Title>);
  const isH3 = view.find('h3').length === 1;
  const isH1 = view.find('h1').length === 1;
  expect(isH1).toBe(false);
  expect(isH3).toBe(true);
});
