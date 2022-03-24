/**
 * This test was generated
 */
import * as React from 'react';
import { render } from '@testing-library/react';
import { ModalBoxHeader } from '../../ModalBoxHeader';
// any missing imports can usually be resolved by adding them here
import {} from '../..';

it('ModalBoxHeader should match snapshot (auto-generated)', () => {
  const view = render(<ModalBoxHeader children={<>ReactNode</>} className={"''"} />);
  expect(view.container).toMatchSnapshot();
});
