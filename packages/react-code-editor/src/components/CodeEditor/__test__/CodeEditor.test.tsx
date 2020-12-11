import { CodeEditor } from '../CodeEditor';
import React from 'react';
import { shallow } from 'enzyme';

test(`CodeEditor`, () => {
  const view = shallow(<CodeEditor>CodeEditor</CodeEditor>);
  expect(view).toMatchSnapshot();
});
