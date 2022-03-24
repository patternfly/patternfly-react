import * as React from 'react';
import { render } from '@testing-library/react';
import { PageSection, PageSectionTypes } from '../PageSection';

jest.mock('../Page');

test('Check page section with no padding example against snapshot', () => {
  const Section = <PageSection padding={{ default: 'noPadding' }} />;
  const view = render(Section);
  expect(view.container).toMatchSnapshot();
});

test('Check page section with limited width', () => {
  const Section = <PageSection isWidthLimited />;
  const view = render(Section);
  expect(view.container).toMatchSnapshot();
});

test('Check page section with center alignment', () => {
  const Section = <PageSection isWidthLimited isCenterAligned />;
  const view = render(Section);
  expect(view.container).toMatchSnapshot();
});

test('Check page main tabs section against snapshot', () => {
  const Section = <PageSection type={PageSectionTypes.tabs} />;
  const view = render(Section);
  expect(view.container).toMatchSnapshot();
});

test('Check page main nav section against snapshot', () => {
  const Section = <PageSection type={PageSectionTypes.nav} />;
  const view = render(Section);
  expect(view.container).toMatchSnapshot();
});

test('Check page main subnav section against snapshot', () => {
  const Section = <PageSection type={PageSectionTypes.subNav} />;
  const view = render(Section);
  expect(view.container).toMatchSnapshot();
});

test('Check page main breadcrumb section against snapshot', () => {
  const Section = <PageSection type={PageSectionTypes.breadcrumb} />;
  const view = render(Section);
  expect(view.container).toMatchSnapshot();
});

test('Check page section with no fill example against snapshot', () => {
  const Section = <PageSection isFilled={false} />;
  const view = render(Section);
  expect(view.container).toMatchSnapshot();
});

test('Check page section with fill example against snapshot', () => {
  const Section = <PageSection isFilled />;
  const view = render(Section);
  expect(view.container).toMatchSnapshot();
});

test('Check page section with fill and no padding example against snapshot', () => {
  const Section = <PageSection isFilled padding={{ default: 'noPadding' }} />;
  const view = render(Section);
  expect(view.container).toMatchSnapshot();
});

test('Verify page section top sticky', () => {
  const view = render(<PageSection sticky="top">test</PageSection>);
  expect(view.container).toMatchSnapshot();
});

test('Verify page section bottom sticky', () => {
  const view = render(<PageSection sticky="bottom">test</PageSection>);
  expect(view.container).toMatchSnapshot();
});

test('Verify page section top shadow', () => {
  const view = render(<PageSection hasShadowTop>test</PageSection>);
  expect(view.container).toMatchSnapshot();
});

test('Verify page section bottom shadow', () => {
  const view = render(<PageSection hasShadowBottom>test</PageSection>);
  expect(view.container).toMatchSnapshot();
});

test('Verify page section overflow scroll', () => {
  const view = render(<PageSection hasOverflowScroll>test</PageSection>);
  expect(view.container).toMatchSnapshot();
});
