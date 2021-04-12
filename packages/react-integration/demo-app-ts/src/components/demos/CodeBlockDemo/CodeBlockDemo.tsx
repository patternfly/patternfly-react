import React from 'react';
import { CodeBlock, CodeBlockAction, CodeBlockCode, Button } from '@patternfly/react-core';
import CopyIcon from '@patternfly/react-icons/dist/js/icons/copy-icon';
import PlayIcon from '@patternfly/react-icons/dist/js/icons/play-icon';

export class CodeBlockDemo extends React.Component {
  static displayName = 'CodeBlockDemo';
  render() {
    const actions = (
      <React.Fragment>
        <CodeBlockAction>
          <Button variant="plain" aria-label="Copy icon">
            <CopyIcon />
          </Button>
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
        <CodeBlockCode>
          apiVersion: helm.openshift.io/v1beta1/
          <br />
          kind: HelmChartRepository
          <br />
          metadata:
          <br />
          name: azure-sample-repo
          <br />
          spec:
          <br />
          connectionConfig:
          <br />
          url: https://raw.githubusercontent.com/Azure-Samples/helm-charts/master/docs
        </CodeBlockCode>
      </CodeBlock>
    );
  }
}
