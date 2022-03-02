/**
 * This test was generated
 */
import * as React from 'react';
import { render } from '@testing-library/react';
import { ModalBoxDescription } from '../../ModalBoxDescription';
// any missing imports can usually be resolved by adding them here
import {} from '../..';

it('ModalBoxDescription should match snapshot (auto-generated)', () => {
  const view = render(<ModalBoxDescription children={<>ReactNode</>} className={"''"} id={"''"} />);
  expect(view.container).toMatchSnapshot();
});
