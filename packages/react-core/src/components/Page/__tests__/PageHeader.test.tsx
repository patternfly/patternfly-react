import * as React from 'react';
import { render } from '@testing-library/react';
import { PageHeader } from '../PageHeader';

jest.mock('../Page');

test('Check page vertical layout example against snapshot', () => {
  const Header = <PageHeader logo="Logo" headerTools="PageHeaderTools | Avatar" onNavToggle={() => undefined} />;
  const view = render(Header);
  expect(view.container).toMatchSnapshot();
});
