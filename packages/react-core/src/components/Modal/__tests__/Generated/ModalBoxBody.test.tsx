/**
 * This test was generated
 */
import * as React from 'react';
import { render } from '@testing-library/react';
import { ModalBoxBody } from '../../ModalBoxBody';
// any missing imports can usually be resolved by adding them here
import {} from '../..';

it('ModalBoxBody should match snapshot (auto-generated)', () => {
  const view = render(<ModalBoxBody children={<>ReactNode</>} className={"''"} />);
  expect(view.container).toMatchSnapshot();
});
