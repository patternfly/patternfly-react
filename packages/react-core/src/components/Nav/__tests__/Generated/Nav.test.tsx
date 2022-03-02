/**
 * This test was generated
 */
import * as React from 'react';
import { render } from '@testing-library/react';
import { Nav } from '../../Nav';
// any missing imports can usually be resolved by adding them here
import {} from '../..';

it('Nav should match snapshot (auto-generated)', () => {
  const view = render(
    <Nav
      children={<>ReactNode</>}
      className={"''"}
      onSelect={() => undefined}
      onToggle={() => undefined}
      aria-label={"''"}
      theme={'light'}
    />
  );
  expect(view.container).toMatchSnapshot();
});
