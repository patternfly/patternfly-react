import * as React from 'react';
import { render } from '@testing-library/react';
import { AboutModalBoxHeader } from '../AboutModalBoxHeader';

test('AboutModalBoxHeader Test', () => {
  const view = render(
    <AboutModalBoxHeader productName="Product Name" id="id">
      This is a AboutModalBox header
    </AboutModalBoxHeader>
  );
  expect(view.container.outerHTML).toMatchSnapshot();
});
