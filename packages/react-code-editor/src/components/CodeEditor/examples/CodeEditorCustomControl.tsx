import React from 'react';
import { CodeEditor, CodeEditorControl } from '@patternfly/react-code-editor';
import PlayIcon from '@patternfly/react-icons/dist/esm/icons/play-icon';

export const CodeEditorCustomControl: React.FunctionComponent = () => {
  const [code, setCode] = React.useState('');

  const onChange = (code) => {
    setCode(code);
  };

  const onExecuteCode = (code) => {
    // eslint-disable-next-line no-console
    console.log(code);
  };

  const customControl = (
    <CodeEditorControl
      icon={<PlayIcon />}
      aria-label="Execute code"
      tooltipProps={{ content: 'Execute code' }}
      onClick={onExecuteCode}
      isVisible={code !== ''}
    />
  );

  return (
    <CodeEditor
      isDownloadEnabled
      isCopyEnabled
      height="400px"
      customControls={customControl}
      code={code}
      onChange={onChange}
    />
  );
};
