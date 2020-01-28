import * as React from 'react';
import { shallow, mount } from 'enzyme';
import { PageHeader } from '../PageHeader';
// any missing imports can usually be resolved by adding them here
import {  } from '..';

it('PageHeader should match snapshot (auto-generated)', () => {
  const view = shallow(
    <PageHeader
      className={"''"}
			logo={null}
			logoProps={null}
			logoComponent={'a'}
			toolbar={null}
			avatar={null}
			topNav={null}
			showNavToggle={false}
			isNavOpen={true}
			isManagedSidebar={true}
			onNavToggle={() => undefined as any}
			aria-label={"'Global navigation'"}
    />);
  expect(view).toMatchSnapshot();
});

jest.mock('../Page');

test('Check page vertical layout example against snapshot', () => {
  const Header = <PageHeader logo="Logo" toolbar="Toolbar" avatar=" | Avatar" onNavToggle={() => undefined} />;
  const view = mount(Header);
  expect(view).toMatchSnapshot();
});
