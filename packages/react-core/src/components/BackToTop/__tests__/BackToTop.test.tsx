import React from 'react';
import { shallow, mount } from 'enzyme';
import { BackToTop } from '../BackToTop';

describe('BackToTop', () => {
  test('verify basic', () => {
    const view = shallow(<BackToTop />);
    expect(view).toMatchSnapshot();
  });

  test('verify custom class', () => {
    const view = mount(<BackToTop className="custom-css">test</BackToTop>);

    expect(view).toMatchSnapshot();
  });

  test('verify always show', () => {
    const view = mount(<BackToTop isAlwaysVisible>test</BackToTop>);

    expect(view).toMatchSnapshot();
  });
});