---
id: Code block
section: components
cssPrefix: pf-c-code-block
propComponents: ['CodeBlock', 'CodeBlockAction', 'CodeBlockCode']
---

import CopyIcon from '@patternfly/react-icons/dist/esm/icons/copy-icon';
import PlayIcon from '@patternfly/react-icons/dist/esm/icons/play-icon';

## Examples

### Basic

```js
import React from 'react';
import { CodeBlock, CodeBlockAction, CodeBlockCode, ClipboardCopyButton, Button } from '@patternfly/react-core';
import CopyIcon from '@patternfly/react-icons/dist/esm/icons/copy-icon';
import PlayIcon from '@patternfly/react-icons/dist/esm/icons/play-icon';

class BasicCodeBlock extends React.Component {
  constructor(props) {
    super(props);
    this.timer = null;

    this.state = {
      copied: false
    };

    this.clipboardCopyFunc = (event, text) => {
      const clipboard = event.currentTarget.parentElement;
      const el = document.createElement('textarea');
      el.value = text.toString();
      clipboard.appendChild(el);
      el.select();
      document.execCommand('copy');
      clipboard.removeChild(el);
    };

    this.onClick = (event, text) => {
      if (this.timer) {
        window.clearTimeout(this.timer);
        this.setState({ copied: false });
      }
      this.clipboardCopyFunc(event, text);
      this.setState({ copied: true }, () => {
        this.timer = window.setTimeout(() => {
          this.setState({ copied: false });
          this.timer = null;
        }, 1000);
      });
    };
  }

  render() {
    const code = `apiVersion: helm.openshift.io/v1beta1/
kind: HelmChartRepository
metadata:
name: azure-sample-repo
spec:
connectionConfig:
url: https://raw.githubusercontent.com/Azure-Samples/helm-charts/master/docs`;

    const actions = (
      <React.Fragment>
        <CodeBlockAction>
          <ClipboardCopyButton
            id="copy-button"
            textId="code-content"
            aria-label="Copy to clipboard"
            onClick={e => this.onClick(e, code)}
            exitDelay={600}
            maxWidth="110px"
            variant="plain"
          >
            {this.state.copied ? 'Successfully copied to clipboard!' : 'Copy to clipboard'}
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
  }
}
```

### Expandable

```js
import React from 'react';
import {
  CodeBlock,
  CodeBlockAction,
  CodeBlockCode,
  ClipboardCopyButton,
  ExpandableSection,
  ExpandableSectionToggle,
  Button
} from '@patternfly/react-core';
import CopyIcon from '@patternfly/react-icons/dist/esm/icons/copy-icon';
import PlayIcon from '@patternfly/react-icons/dist/esm/icons/play-icon';

class BasicCodeBlock extends React.Component {
  constructor(props) {
    super(props);
    this.timer = null;

    this.state = {
      isExpanded: false,
      copied: false
    };

    this.onToggle = isExpanded => {
      this.setState({
        isExpanded
      });
    };

    this.clipboardCopyFunc = (event, text) => {
      const clipboard = event.currentTarget.parentElement;
      const el = document.createElement('textarea');
      el.value = text.toString();
      clipboard.appendChild(el);
      el.select();
      document.execCommand('copy');
      clipboard.removeChild(el);
    };

    this.onClick = (event, text) => {
      if (this.timer) {
        window.clearTimeout(this.timer);
        this.setState({ copied: false });
      }
      this.clipboardCopyFunc(event, text);
      this.setState({ copied: true }, () => {
        this.timer = window.setTimeout(() => {
          this.setState({ copied: false });
          this.timer = null;
        }, 1000);
      });
    };
  }

  render() {
    const { isExpanded } = this.state;

    const copyBlock = `apiVersion: helm.openshift.io/v1beta1/
kind: HelmChartRepository
metadata:
name: azure-sample-repo
spec:
connectionConfig:
url: https://raw.githubusercontent.com/Azure-Samples/helm-charts/master/docs`;

    const code = `apiVersion: helm.openshift.io/v1beta1/
kind: HelmChartRepository
metadata:
name: azure-sample-repo`;
    const expandedCode = `spec:
connectionConfig:
url: https://raw.githubusercontent.com/Azure-Samples/helm-charts/master/docs`;

    const actions = (
      <React.Fragment>
        <CodeBlockAction>
          <ClipboardCopyButton
            id="copy-button"
            textId="code-content"
            aria-label="Copy to clipboard"
            onClick={e => this.onClick(e, copyBlock)}
            exitDelay={600}
            maxWidth="110px"
            variant="plain"
          >
            {this.state.copied ? 'Successfully copied to clipboard!' : 'Copy to clipboard'}
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
        <CodeBlockCode>
          {code}
          <ExpandableSection isExpanded={isExpanded} isDetached contentId="code-block-expand">
            {expandedCode}
          </ExpandableSection>
        </CodeBlockCode>
        <ExpandableSectionToggle
          isExpanded={isExpanded}
          onToggle={this.onToggle}
          contentId="code-block-expand"
          direction="up"
        >
          {isExpanded ? 'Show Less' : 'Show More'}
        </ExpandableSectionToggle>
      </CodeBlock>
    );
  }
}
```
