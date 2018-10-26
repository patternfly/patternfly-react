import React from 'react';
import { shallow } from 'enzyme';
import PageHeader from './PageHeader';

test('Check page vertical layout example against snapshot', () => {
  const Header = (
    <PageHeader logo="Logo" toolbar="Toolbar" avatar=" | Avatar" onNavToggle={() => undefined} isCondensed />
  );
  const view = shallow(Header);
  expect(view).toMatchSnapshot();
});
