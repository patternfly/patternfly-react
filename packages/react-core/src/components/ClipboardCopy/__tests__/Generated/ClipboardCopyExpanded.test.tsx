/**
 * This test was generated
 */
import * as React from 'react';
import { render } from '@testing-library/react';
import { ClipboardCopyExpanded } from '../../ClipboardCopyExpanded';
// any missing imports can usually be resolved by adding them here
import {} from '../..';

it('ClipboardCopyExpanded should match snapshot (auto-generated)', () => {
  const view = render(
    <ClipboardCopyExpanded
      className={"''"}
      children={<div>ReactNode</div>}
      onChange={(): any => undefined}
      isReadOnly={false}
      isCode={false}
    />
  );
  expect(view.container).toMatchSnapshot();
});
