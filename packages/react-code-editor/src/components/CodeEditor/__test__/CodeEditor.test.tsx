import { CodeEditor, Language } from '../CodeEditor';
import React from 'react';
import { shallow } from 'enzyme';

test(`CodeEditor`, () => {
  const view = shallow(<CodeEditor />);
  expect(view).toMatchSnapshot();
});

test(`CodeEditor with all flags`, () => {
  const view = shallow(
    <CodeEditor
      isReadOnly
      isDarkTheme
      isLineNumbers={false}
      isAllowUpload
      isLanguageLabel
      isAllowDownload
      isAllowCopy
      height="400px"
      code={'test'}
      language={Language.javascript}
    />
  );
  expect(view).toMatchSnapshot();
});
