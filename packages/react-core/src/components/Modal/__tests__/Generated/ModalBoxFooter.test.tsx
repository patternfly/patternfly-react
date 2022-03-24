/**
 * This test was generated
 */
import * as React from 'react';
import { render } from '@testing-library/react';
import { ModalBoxFooter } from '../../ModalBoxFooter';
// any missing imports can usually be resolved by adding them here
import {} from '../..';

it('ModalBoxFooter should match snapshot (auto-generated)', () => {
  const view = render(<ModalBoxFooter children={<>ReactNode</>} className={"''"} />);
  expect(view.container).toMatchSnapshot();
});
