import React from 'react';
import { mount } from 'enzyme';
import PageSection from './PageSection';

jest.mock('./Page');

test('Check page section with no padding example against snapshot', () => {
  const Section = <PageSection noPadding={true} />;
  const view = mount(Section);
  expect(view).toMatchSnapshot();
});

test('Check page section with no padding on mobile example against snapshot', () => {
  const Section = <PageSection noPaddingMobile={true} />;
  const view = mount(Section);
  expect(view).toMatchSnapshot();
});
