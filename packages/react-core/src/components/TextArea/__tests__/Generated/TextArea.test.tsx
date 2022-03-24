/**
 * This test was generated
 */
import * as React from 'react';
import { render } from '@testing-library/react';
import { TextArea } from '../../TextArea';
// any missing imports can usually be resolved by adding them here
import {} from '../..';

it('TextArea should match snapshot (auto-generated)', () => {
  const view = render(
    <TextArea
      className={"''"}
      isRequired={false}
      validated={'default'}
      value={'string'}
      onChange={(value: string, event: React.ChangeEvent<HTMLTextAreaElement>) => undefined as void}
      resizeOrientation={'both'}
      aria-label={'null'}
    />
  );
  expect(view.container).toMatchSnapshot();
});
