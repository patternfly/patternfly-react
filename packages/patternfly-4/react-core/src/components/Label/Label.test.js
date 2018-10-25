import React from 'react';
import { shallow } from 'enzyme';
import Label, { LabelVariant } from './Label';

Object.values(LabelVariant).forEach(variant => {
  test(`${variant} Label`, () => {
    const view = shallow(<Label variant={variant}>{variant} Label</Label>);
    expect(view).toMatchSnapshot();
  });
});

test(`simple Label`, () => {
  const view = shallow(<Label>simple Label</Label>);
  expect(view).toMatchSnapshot();
});
