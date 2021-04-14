---
id: Code block
section: components
cssPrefix: pf-c-code-block
propComponents: ['CodeBlock', 'CodeBlockAction', 'CodeBlockCode']
beta: true
---

import CopyIcon from '@patternfly/react-icons/dist/js/icons/copy-icon';
import PlayIcon from '@patternfly/react-icons/dist/js/icons/play-icon';

## Examples

### Basic

```js
import React from 'react';
import { CodeBlock, CodeBlockAction, CodeBlockCode, Button } from '@patternfly/react-core';
import CopyIcon from '@patternfly/react-icons/dist/js/icons/copy-icon';
import PlayIcon from '@patternfly/react-icons/dist/js/icons/play-icon';

class BasicCodeBlock extends React.Component {
  constructor(props) {
    super(props);
  }

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

    const code = `apiVersion: helm.openshift.io/v1beta1/
kind: HelmChartRepository
metadata:
name: azure-sample-repo
spec:
connectionConfig:
url: https://raw.githubusercontent.com/Azure-Samples/helm-charts/master/docs`;

    return (
      <CodeBlock actions={actions}>
        <CodeBlockCode>{code}</CodeBlockCode>
      </CodeBlock>
    );
  }
}
```

<!-- ### Expandable

```js
import React from 'react';
import { CodeBlock, CodeBlockAction, CodeBlockCode, Button } from '@patternfly/react-core';
import CopyIcon from '@patternfly/react-icons/dist/js/icons/copy-icon';
import PlayIcon from '@patternfly/react-icons/dist/js/icons/play-icon';

class BasicCodeBlock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isExpanded: false
    };
    this.onToggle = isExpanded => {
      this.setState({
        isExpanded
      });
    };
  }

  render() {
    const { isExpanded } = this.state;
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
          <ExpandableSection isExpanded={isExpanded} isDetached contentId="code-block-expand">
            spec:
            <br />
            connectionConfig:
            <br />
            url: https://raw.githubusercontent.com/Azure-Samples/helm-charts/master/docs{' '}
          </ExpandableSection>
        </CodeBlockCode>
        <ExpandableSectionToggle isExpanded={isExpanded} onToggle={this.onToggle} contentId="code-block-expand">
          {isExpanded ? 'Show Less' : 'Show More'}
        </ExpandableSectionToggle>
      </CodeBlock>
    );
  }
}
``` -->
