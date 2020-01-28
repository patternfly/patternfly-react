import * as React from 'react';
import { shallow, mount } from 'enzyme';
import { PageSection, PageSectionTypes } from '../PageSection';
// any missing imports can usually be resolved by adding them here
import {  } from '..';

it('PageSection should match snapshot (auto-generated)', () => {
  const view = shallow(
    <PageSection
      children={<div>ReactNode</div>}
			className={"''"}
			variant={'default'}
			type={'default'}
			isFilled={true}
			noPadding={false}
			noPaddingMobile={false}
    />);
  expect(view).toMatchSnapshot();
});

jest.mock('../Page');

test('Check page section with no padding example against snapshot', () => {
  const Section = <PageSection noPadding />;
  const view = mount(Section);
  expect(view).toMatchSnapshot();
});

test('Check page main nav section against snapshot', () => {
  const Section = <PageSection type={PageSectionTypes.nav} />;
  const view = mount(Section);
  expect(view).toMatchSnapshot();
});

test('Check page section with no padding on mobile example against snapshot', () => {
  const Section = <PageSection noPaddingMobile />;
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
  const Section = <PageSection isFilled noPadding />;
  const view = mount(Section);
  expect(view).toMatchSnapshot();
});
