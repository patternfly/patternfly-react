import * as React from 'react';
import { render } from '@testing-library/react';
import { AboutModalBox } from '../AboutModalBox';

test('AboutModalBox Test', () => {
  const { asFragment } = render(<AboutModalBox aria-labelledby="id">This is a AboutModalBox</AboutModalBox>);
  expect(asFragment()).toMatchSnapshot();
});
