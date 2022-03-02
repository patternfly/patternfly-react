/**
 * This test was generated
 */
import * as React from 'react';
import { render } from '@testing-library/react';
import { OptionsMenu } from '../../OptionsMenu';
// any missing imports can usually be resolved by adding them here
import {} from '../..';

it('OptionsMenu should match snapshot (auto-generated)', () => {
  const view = render(
    <OptionsMenu
      className={"''"}
      id={'string'}
      menuItems={[]}
      toggle={<p>ReactElement</p>}
      isPlain={true}
      isOpen={true}
      isText={false}
      isGrouped={false}
      position={'right'}
      direction={'up'}
    />
  );
  expect(view.container).toMatchSnapshot();
});
