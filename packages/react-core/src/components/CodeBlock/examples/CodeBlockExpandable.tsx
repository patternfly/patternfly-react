import { Fragment, useState } from 'react';
import {
  CodeBlock,
  CodeBlockAction,
  CodeBlockCode,
  ClipboardCopyButton,
  ExpandableSection,
  ExpandableSectionToggle,
  Button,
  Tooltip
} from '@patternfly/react-core';
import PlayIcon from '@patternfly/react-icons/dist/esm/icons/play-icon';

export const ExpandableCodeBlock: React.FunctionComponent = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [copied, setCopied] = useState(false);
  const [isRunning, setisRunning] = useState(false);
  const runText: string = 'Run in web terminal';
  const doneRunText: string = 'Running in web terminal';

  const onToggle = (isExpanded) => {
    setIsExpanded(isExpanded);
  };

  const clipboardCopyFunc = (event, text) => {
    navigator.clipboard.writeText(text.toString());
  };

  const onClick = (event, text) => {
    clipboardCopyFunc(event, text);
    setCopied(true);
  };

  const copyBlock = String.raw`apiVersion: helm.openshift.io/v1beta1/
kind: HelmChartRepository
metadata:
name: azure-sample-repo
spec:
connectionConfig:
url: https://raw.githubusercontent.com/Azure-Samples/helm-charts/master/docs`;

  const code = String.raw`apiVersion: helm.openshift.io/v1beta1/
kind: HelmChartRepository
metadata:
name: azure-sample-repo`;
  const expandedCode = String.raw`spec:
connectionConfig:
url: https://raw.githubusercontent.com/Azure-Samples/helm-charts/master/docs`;

  const actions = (
    <Fragment>
      <CodeBlockAction>
        <ClipboardCopyButton
          id="expandable-copy-button"
          textId="code-content"
          aria-label="Copy to clipboard"
          onClick={(e) => onClick(e, copyBlock)}
          exitDelay={copied ? 1500 : 600}
          maxWidth="110px"
          variant="plain"
          onTooltipHidden={() => setCopied(false)}
        >
          {copied ? 'Successfully copied to clipboard!' : 'Copy to clipboard'}
        </ClipboardCopyButton>
      </CodeBlockAction>
      <CodeBlockAction>
        <Tooltip
          aria="none"
          aria-live="polite"
          content={isRunning ? doneRunText : runText}
          onTooltipHidden={() => setisRunning(false)}
        >
          <Button
            variant="plain"
            aria-label="Run in web terminal"
            icon={<PlayIcon />}
            onClick={() => setisRunning(!isRunning)}
          />
        </Tooltip>
      </CodeBlockAction>
    </Fragment>
  );

  return (
    <CodeBlock actions={actions}>
      <CodeBlockCode>
        {code}
        <ExpandableSection isExpanded={isExpanded} isDetached contentId="code-block-expand">
          {expandedCode}
        </ExpandableSection>
      </CodeBlockCode>
      <ExpandableSectionToggle isExpanded={isExpanded} onToggle={onToggle} contentId="code-block-expand" direction="up">
        {isExpanded ? 'Show Less' : 'Show More'}
      </ExpandableSectionToggle>
    </CodeBlock>
  );
};
