/**
 * This test was generated
 */
import * as React from 'react';
import { render } from '@testing-library/react';
import { Form } from '../../Form';
// any missing imports can usually be resolved by adding them here
import {} from '../..';

it('Form should match snapshot (auto-generated)', () => {
  const view = render(<Form children={<>ReactNode</>} className={"''"} isHorizontal={false} />);
  expect(view.container).toMatchSnapshot();
});
