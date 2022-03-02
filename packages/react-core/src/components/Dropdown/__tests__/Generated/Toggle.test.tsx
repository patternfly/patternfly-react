/**
 * This test was generated
 */
import * as React from 'react';
import { render } from '@testing-library/react';
import { Toggle } from '../../Toggle';
// any missing imports can usually be resolved by adding them here
import {} from '../..';

it('Toggle should match snapshot (auto-generated)', () => {
  const view = render(
    <Toggle
      id={'string'}
      type={'button'}
      children={<div>ReactNode</div>}
      className={"''"}
      isOpen={false}
      onToggle={() => {}}
      onEnter={() => {}}
      parentRef={'any'}
      isActive={false}
      isDisabled={false}
      isPlain={false}
      isPrimary={false}
      isSplitButton={false}
      aria-haspopup={true}
      bubbleEvent={false}
    />
  );
  expect(view.container).toMatchSnapshot();
});
