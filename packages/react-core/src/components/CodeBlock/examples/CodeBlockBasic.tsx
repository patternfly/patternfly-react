import React from 'react';
import { CodeBlock, CodeBlockAction, CodeBlockCode, ClipboardCopyButton, Button } from '@patternfly/react-core';
import PlayIcon from '@patternfly/react-icons/dist/esm/icons/play-icon';

export const BasicCodeBlock: React.FunctionComponent = () => {
  const [copied, setCopied] = React.useState(false);

  const clipboardCopyFunc = (event, text) => {
    navigator.clipboard.writeText(text.toString());
  };

  const onClick = (event, text) => {
    clipboardCopyFunc(event, text);
    setCopied(true);
  };

  const code = `apiVersion: helm.openshift.io/v1beta1/
kind: HelmChartRepository
metadata:
name: azure-sample-repo0oooo00ooo
spec:
connectionConfig:
url: https://raw.githubusercontent.com/Azure-Samples/helm-charts/master/docs`;

  const actions = (
    <React.Fragment>
      <CodeBlockAction>
        <ClipboardCopyButton
          id="basic-copy-button"
          textId="code-content"
          aria-label="Copy to clipboard"
          onClick={(e) => onClick(e, code)}
          exitDelay={copied ? 1500 : 600}
          maxWidth="110px"
          variant="plain"
          onTooltipHidden={() => setCopied(false)}
        >
          {copied ? 'Successfully copied to clipboard!' : 'Copy to clipboard'}
        </ClipboardCopyButton>
      </CodeBlockAction>
      <CodeBlockAction>
        <Button variant="plain" aria-label="Play icon">
          <PlayIcon />
        </Button>
      </CodeBlockAction>
    </React.Fragment>
  );

  return (
    <CodeBlock actions={actions}>
      <CodeBlockCode id="code-content">{code}</CodeBlockCode>
    </CodeBlock>
  );
};
