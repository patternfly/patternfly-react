/**
 * This test was generated
 */
import * as React from 'react';
import { render } from '@testing-library/react';
import { Title } from '../../Title';
// any missing imports can usually be resolved by adding them here
import {} from '../..';

it('Title should match snapshot (auto-generated)', () => {
  const view = render(<Title size={'md'} children={''} className={"''"} headingLevel={'h1'} />);
  expect(view.container).toMatchSnapshot();
});
