import React from 'react';
import { mount } from 'enzyme';
import Page from './Page';
import PageSection from './PageSection';

const props = {
  'aria-label': 'Page layout',
  id: 'PageId',
  className: 'my-page-class'
};

test('replace with useful test name', () => {
  const PageLogo = <div>Brand</div>;
  const PageNav = (
    <ul>
      <li>Nav Item</li>
      <li>Nav Item</li>
      <li>Nav Item</li>
    </ul>
  );
  const PageToolbar = <div>Toolbar</div>;
  const PageAvatar = <div>&nbsp;|&nbsp;Avatar</div>;
  const view = mount(
    <Page
      {...props}
      logo={PageLogo}
      toolbar={PageToolbar}
      avatar={PageAvatar}
      nav={PageNav}
      isNavOpen
      onNavToggle={() => undefined}
    >
      <PageSection variant="default">Section with default background</PageSection>
      <PageSection variant="light">Section with light background</PageSection>
      <PageSection variant="dark">Section with dark background</PageSection>
      <PageSection variant="darker">Section with darker background</PageSection>
    </Page>
  );
  expect(view).toMatchSnapshot();
});
