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

test('Check page section with no fill example against snapshot', () => {
  const Section = <PageSection isFilled={false} />;
  const view = mount(Section);
  expect(view).toMatchSnapshot();
});

test('Check page section with fill example against snapshot', () => {
  const Section = <PageSection isFilled={true} />;
  const view = mount(Section);
  expect(view).toMatchSnapshot();
});

test('Check page section with fill and no padding example against snapshot', () => {
  const Section = <PageSection isFilled={true} noPadding={true} />;
  const view = mount(Section);
  expect(view).toMatchSnapshot();
});

