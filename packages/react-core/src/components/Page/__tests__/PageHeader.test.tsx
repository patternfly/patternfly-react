import * as React from 'react';
import { mount } from 'enzyme';
import { PageHeader } from '../PageHeader';

jest.mock('../Page');

test('Check page vertical layout example against snapshot', () => {
  const Header = <PageHeader logo="Logo" headerTools="PageHeaderTools | Avatar" onNavToggle={() => undefined} />;
  const view = mount(Header);
  expect(view).toMatchSnapshot();
});
