/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { render } from '@testing-library/react';
import { VncConsole } from '../../VncConsole';

test('placeholder render test', () => {
  const view = render(<VncConsole host="my.unknown.host" />);
  expect(view.container).toMatchSnapshot();
});
