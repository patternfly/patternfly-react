/**
 * This test was generated
 */
import * as React from 'react';
import { render } from '@testing-library/react';
import { Dropdown } from '../../Dropdown';
// any missing imports can usually be resolved by adding them here
import {} from '../..';

it('Dropdown should match snapshot (auto-generated)', () => {
  const view = render(
    <Dropdown
      children={<div>ReactNode</div>}
      className={'string'}
      dropdownItems={[]}
      isOpen={true}
      isPlain={true}
      position={'right'}
      direction={'up'}
      isGrouped={true}
      toggle={<p>ReactElement</p>}
      onSelect={(event?: React.SyntheticEvent<HTMLDivElement>) => undefined as void}
      autoFocus={true}
    />
  );
  expect(view.container).toMatchSnapshot();
});
