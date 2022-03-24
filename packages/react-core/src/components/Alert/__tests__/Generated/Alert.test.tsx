/**
 * This test was generated
 */
import * as React from 'react';
import { render } from '@testing-library/react';
import { Alert } from '../../Alert';
// any missing imports can usually be resolved by adding them here
import {} from '../..';

it('Alert should match snapshot (auto-generated)', () => {
  const view = render(
    <Alert
      variant={'success'}
      isInline={false}
      title={<div>ReactNode</div>}
      actionClose={undefined}
      actionLinks={[]}
      children={''}
      className={"''"}
      aria-label={'string'}
      variantLabel={'string'}
      isLiveRegion={false}
    />
  );
  expect(view.container).toMatchSnapshot();
});
