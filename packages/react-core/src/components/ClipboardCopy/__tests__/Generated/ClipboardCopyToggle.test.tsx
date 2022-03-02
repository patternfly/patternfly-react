/**
 * This test was generated
 */
import * as React from 'react';
import { render } from '@testing-library/react';
import { ClipboardCopyToggle } from '../../ClipboardCopyToggle';
// any missing imports can usually be resolved by adding them here
import {} from '../..';

it('ClipboardCopyToggle should match snapshot (auto-generated)', () => {
  const view = render(
    <ClipboardCopyToggle
      onClick={(event: React.MouseEvent) => undefined as void}
      id={'string'}
      textId={'string'}
      contentId={'string'}
      isExpanded={false}
      className={"''"}
    />
  );
  expect(view.container).toMatchSnapshot();
});
