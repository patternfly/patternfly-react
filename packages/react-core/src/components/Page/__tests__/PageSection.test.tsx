import * as React from 'react';
import { mount } from 'enzyme';
import { PageSection, PageSectionTypes } from '../PageSection';

jest.mock('../Page');

test('Check page section with no padding example against snapshot', () => {
  const Section = <PageSection padding={{ default: 'noPadding' }} />;
  const view = mount(Section);
  expect(view).toMatchSnapshot();
});

test('Check page section with limited width', () => {
  const Section = <PageSection isWidthLimited />;
  const view = mount(Section);
  expect(view).toMatchSnapshot();
});

test('Check page main tabs section against snapshot', () => {
  const Section = <PageSection type={PageSectionTypes.tabs} />;
  const view = mount(Section);
  expect(view).toMatchSnapshot();
});

test('Check page main nav section against snapshot', () => {
  const Section = <PageSection type={PageSectionTypes.nav} />;
  const view = mount(Section);
  expect(view).toMatchSnapshot();
});

test('Check page main subnav section against snapshot', () => {
  const Section = <PageSection type={PageSectionTypes.subNav} />;
  const view = mount(Section);
  expect(view).toMatchSnapshot();
});

test('Check page main breadcrumb section against snapshot', () => {
  const Section = <PageSection type={PageSectionTypes.breadcrumb} />;
  const view = mount(Section);
  expect(view).toMatchSnapshot();
});

test('Check page section with no fill example against snapshot', () => {
  const Section = <PageSection isFilled={false} />;
  const view = mount(Section);
  expect(view).toMatchSnapshot();
});

test('Check page section with fill example against snapshot', () => {
  const Section = <PageSection isFilled />;
  const view = mount(Section);
  expect(view).toMatchSnapshot();
});

test('Check page section with fill and no padding example against snapshot', () => {
  const Section = <PageSection isFilled padding={{ default: 'noPadding' }} />;
  const view = mount(Section);
  expect(view).toMatchSnapshot();
});

test('Verify page section top sticky', () => {
  const view = mount(<PageSection sticky="top">test</PageSection>);
  expect(view).toMatchSnapshot();
});

test('Verify page section bottom sticky', () => {
  const view = mount(<PageSection sticky="bottom">test</PageSection>);
  expect(view).toMatchSnapshot();
});

test('Verify page section top shadow', () => {
  const view = mount(<PageSection hasShadowTop>test</PageSection>);
  expect(view).toMatchSnapshot();
});

test('Verify page section bottom shadow', () => {
  const view = mount(<PageSection hasShadowBottom>test</PageSection>);
  expect(view).toMatchSnapshot();
});

test('Verify page section overflow scroll', () => {
  const view = mount(<PageSection hasOverflowScroll>test</PageSection>);
  expect(view).toMatchSnapshot();
});
