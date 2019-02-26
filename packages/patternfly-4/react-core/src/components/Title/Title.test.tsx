import { Title } from './Title';
import { TitleSize } from '.';
import React from 'react';
import { shallow } from 'enzyme';

Object.values(TitleSize).forEach(size => {
  test(`${size} Title`, () => {
    const view = shallow(<Title size={size} headingLevel="h1">{size} Title</Title>);
    expect(view).toMatchSnapshot();
  });
});

test('Heading level can be set using a string value', () => {
  const view = shallow(
    <Title size="lg" headingLevel="h3">
      H3 Heading
    </Title>
  );
  const isH3 = view.find('h3').length === 1;
  const isH1 = view.find('h1').length === 1;
  expect(isH1).toBe(false);
  expect(isH3).toBe(true);
});
