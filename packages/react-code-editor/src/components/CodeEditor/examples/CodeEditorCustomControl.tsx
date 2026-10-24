import { useState } from 'react';
import { CodeEditor, CodeEditorControl } from '@patternfly/react-code-editor';
import RhUiPlayFillIcon from '@patternfly/react-icons/dist/esm/icons/rh-ui-play-fill-icon';

export const CodeEditorCustomControl: React.FunctionComponent = () => {
  const [code, setCode] = useState('Some example content');

  const onChange = (code) => {
    setCode(code);
  };

  const onExecuteCode = (code) => {
    // eslint-disable-next-line no-console
    console.log(code);
  };

  const customControl = (
    <CodeEditorControl
      icon={<RhUiPlayFillIcon />}
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
      isHeaderPlain={code === ''}
    />
  );
};
