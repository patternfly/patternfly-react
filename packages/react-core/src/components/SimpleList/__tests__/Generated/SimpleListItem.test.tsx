/**
 * This test was generated
 */
import * as React from 'react';
import { render } from '@testing-library/react';
import { SimpleListItem } from '../../SimpleListItem';
// any missing imports can usually be resolved by adding them here
import {} from '../..';

it('SimpleListItem should match snapshot (auto-generated)', () => {
  const view = render(
    <SimpleListItem
      children={<>ReactNode</>}
      className={"''"}
      component={'button'}
      componentClassName={"''"}
      componentProps={'any'}
      isActive={false}
      onClick={() => {}}
      type={'button'}
      href={"''"}
    />
  );
  expect(view.container.outerHTML).toMatchSnapshot();
});
