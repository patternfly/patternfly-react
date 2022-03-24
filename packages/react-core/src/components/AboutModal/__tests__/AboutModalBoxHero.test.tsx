import * as React from 'react';
import { render } from '@testing-library/react';
import { AboutModalBoxHero } from '../AboutModalBoxHero';

test('test About Modal Box SHero', () => {
  const view = render(<AboutModalBoxHero />);
  expect(view.container).toMatchSnapshot();
});
