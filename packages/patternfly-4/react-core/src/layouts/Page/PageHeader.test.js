import React from 'react';
import { mount } from 'enzyme';
import PageHeader from './PageHeader';

jest.mock('./Page');

test('Check page vertical layout example against snapshot', () => {
  const Header = <PageHeader logo="Logo" toolbar="Toolbar" avatar=" | Avatar" onNavToggle={() => undefined} isTall />;
  const view = mount(Header);
  expect(view).toMatchSnapshot();
});
