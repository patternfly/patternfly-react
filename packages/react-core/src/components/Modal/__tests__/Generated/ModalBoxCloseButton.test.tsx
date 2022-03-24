/**
 * This test was generated
 */
import * as React from 'react';
import { render } from '@testing-library/react';
import { ModalBoxCloseButton } from '../../ModalBoxCloseButton';
// any missing imports can usually be resolved by adding them here
import {} from '../..';

it('ModalBoxCloseButton should match snapshot (auto-generated)', () => {
  const view = render(<ModalBoxCloseButton className={"''"} onClose={() => undefined as any} />);
  expect(view.container).toMatchSnapshot();
});
