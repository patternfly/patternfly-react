/**
 * This test was generated
 */
import * as React from 'react';
import { render } from '@testing-library/react';
import { TabButton } from '../../TabButton';
// any missing imports can usually be resolved by adding them here
import {} from '../..';

it('TabButton should match snapshot (auto-generated)', () => {
  const view = render(
    <TabButton
      children={<div>ReactNode</div>}
      className={"''"}
      href={'string'}
      tabContentRef={{ current: document.createElement('div') }}
    />
  );
  expect(view.container).toMatchSnapshot();
});
