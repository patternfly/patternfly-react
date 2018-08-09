/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { render } from 'enzyme';
import XTerm from './XTerm';

test('Render empty XTerm component', () => {
  const view = render(<XTerm cols={15} rows={60} onTitleChanged={jest.fn()} onData={jest.fn()} onResize={jest.fn()} />);
  expect(view).toMatchSnapshot();
});
