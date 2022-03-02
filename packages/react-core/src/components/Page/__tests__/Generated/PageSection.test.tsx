/**
 * This test was generated
 */
import * as React from 'react';
import { render } from '@testing-library/react';
import { PageSection } from '../../PageSection';
// any missing imports can usually be resolved by adding them here
import {} from '../..';

it('PageSection should match snapshot (auto-generated)', () => {
  const view = render(
    <PageSection
      children={<div>ReactNode</div>}
      className={"''"}
      variant={'default'}
      type={'default'}
      isFilled={true}
      padding={{ default: 'noPadding' }}
    />
  );
  expect(view.container).toMatchSnapshot();
});
