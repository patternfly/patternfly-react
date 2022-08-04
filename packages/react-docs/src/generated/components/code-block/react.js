import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import CopyIcon from '@patternfly/react-icons/dist/esm/icons/copy-icon';
import PlayIcon from '@patternfly/react-icons/dist/esm/icons/play-icon';
const pageData = {
  "id": "Code block",
  "section": "components",
  "source": "react",
  "slug": "/components/code-block/react",
  "sourceLink": "https://github.com/patternfly/patternfly-react/blob/main/packages/react-core/src/components/CodeBlock/examples/CodeBlock.md",
  "propComponents": [
    {
      "name": "CodeBlock",
      "description": "",
      "props": [
        {
          "name": "actions",
          "type": "React.ReactNode",
          "description": "Actions in the code block header. Should be wrapped with CodeBlockAction.",
          "defaultValue": "null"
        },
        {
          "name": "children",
          "type": "React.ReactNode",
          "description": "Content rendered inside the code block",
          "defaultValue": "null"
        },
        {
          "name": "className",
          "type": "string",
          "description": "Additional classes passed to the code block wrapper"
        }
      ]
    },
    {
      "name": "CodeBlockAction",
      "description": "",
      "props": [
        {
          "name": "children",
          "type": "React.ReactNode",
          "description": "Content rendered inside the code block action",
          "defaultValue": "null"
        },
        {
          "name": "className",
          "type": "string",
          "description": "Additional classes passed to the code block action"
        }
      ]
    },
    {
      "name": "CodeBlockCode",
      "description": "",
      "props": [
        {
          "name": "children",
          "type": "React.ReactNode",
          "description": "Code rendered inside the code block",
          "defaultValue": "null"
        },
        {
          "name": "className",
          "type": "string",
          "description": "Additional classes passed to the code block pre wrapper"
        },
        {
          "name": "codeClassName",
          "type": "string",
          "description": "Additional classes passed to the code block code"
        }
      ]
    }
  ],
  "cssPrefix": [
    "pf-c-code-block"
  ],
  "examples": [
    "Basic",
    "Expandable"
  ]
};
pageData.liveContext = {
  CopyIcon,
  PlayIcon
};
pageData.examples = {
  'Basic': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport { CodeBlock, CodeBlockAction, CodeBlockCode, ClipboardCopyButton, Button } from '@patternfly/react-core';\nimport PlayIcon from '@patternfly/react-icons/dist/esm/icons/play-icon';\n\nexport const BasicCodeBlock: React.FunctionComponent = () => {\n  const [copied, setCopied] = React.useState(false);\n\n  const clipboardCopyFunc = (event, text) => {\n    const clipboard = event.currentTarget.parentElement;\n    const el = document.createElement('textarea');\n    el.value = text.toString();\n    clipboard.appendChild(el);\n    el.select();\n    document.execCommand('copy');\n    clipboard.removeChild(el);\n  };\n\n  const onClick = (event, text) => {\n    clipboardCopyFunc(event, text);\n    setCopied(true);\n  };\n\n  const code = `apiVersion: helm.openshift.io/v1beta1/\nkind: HelmChartRepository\nmetadata:\nname: azure-sample-repo0oooo00ooo\nspec:\nconnectionConfig:\nurl: https://raw.githubusercontent.com/Azure-Samples/helm-charts/master/docs`;\n\n  const actions = (\n    <React.Fragment>\n      <CodeBlockAction>\n        <ClipboardCopyButton\n          id=\"copy-button\"\n          textId=\"code-content\"\n          aria-label=\"Copy to clipboard\"\n          onClick={e => onClick(e, code)}\n          exitDelay={600}\n          maxWidth=\"110px\"\n          variant=\"plain\"\n        >\n          {copied ? 'Successfully copied to clipboard!' : 'Copy to clipboard'}\n        </ClipboardCopyButton>\n      </CodeBlockAction>\n      <CodeBlockAction>\n        <Button variant=\"plain\" aria-label=\"Play icon\">\n          <PlayIcon />\n        </Button>\n      </CodeBlockAction>\n    </React.Fragment>\n  );\n\n  return (\n    <CodeBlock actions={actions}>\n      <CodeBlockCode id=\"code-content\">{code}</CodeBlockCode>\n    </CodeBlock>\n  );\n};\n","title":"Basic","lang":"ts"}}>
      
    </Example>,
  'Expandable': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport {\n  CodeBlock,\n  CodeBlockAction,\n  CodeBlockCode,\n  ClipboardCopyButton,\n  ExpandableSection,\n  ExpandableSectionToggle,\n  Button\n} from '@patternfly/react-core';\nimport PlayIcon from '@patternfly/react-icons/dist/esm/icons/play-icon';\n\nexport const ExpandableCodeBlock: React.FunctionComponent = () => {\n  const [isExpanded, setIsExpanded] = React.useState(false);\n  const [copied, setCopied] = React.useState(false);\n\n  const onToggle = isExpanded => {\n    setIsExpanded(isExpanded);\n  };\n\n  const clipboardCopyFunc = (event, text) => {\n    const clipboard = event.currentTarget.parentElement;\n    const el = document.createElement('textarea');\n    el.value = text.toString();\n    clipboard.appendChild(el);\n    el.select();\n    document.execCommand('copy');\n    clipboard.removeChild(el);\n  };\n\n  const onClick = (event, text) => {\n    clipboardCopyFunc(event, text);\n    setCopied(true);\n  };\n\n  const copyBlock = `apiVersion: helm.openshift.io/v1beta1/\nkind: HelmChartRepository\nmetadata:\nname: azure-sample-repo\nspec:\nconnectionConfig:\nurl: https://raw.githubusercontent.com/Azure-Samples/helm-charts/master/docs`;\n\n  const code = `apiVersion: helm.openshift.io/v1beta1/\nkind: HelmChartRepository\nmetadata:\nname: azure-sample-repo`;\n  const expandedCode = `spec:\nconnectionConfig:\nurl: https://raw.githubusercontent.com/Azure-Samples/helm-charts/master/docs`;\n\n  const actions = (\n    <React.Fragment>\n      <CodeBlockAction>\n        <ClipboardCopyButton\n          id=\"copy-button\"\n          textId=\"code-content\"\n          aria-label=\"Copy to clipboard\"\n          onClick={e => onClick(e, copyBlock)}\n          exitDelay={600}\n          maxWidth=\"110px\"\n          variant=\"plain\"\n        >\n          {copied ? 'Successfully copied to clipboard!' : 'Copy to clipboard'}\n        </ClipboardCopyButton>\n      </CodeBlockAction>\n      <CodeBlockAction>\n        <Button variant=\"plain\" aria-label=\"Play icon\">\n          <PlayIcon />\n        </Button>\n      </CodeBlockAction>\n    </React.Fragment>\n  );\n\n  return (\n    <CodeBlock actions={actions}>\n      <CodeBlockCode>\n        {code}\n        <ExpandableSection isExpanded={isExpanded} isDetached contentId=\"code-block-expand\">\n          {expandedCode}\n        </ExpandableSection>\n      </CodeBlockCode>\n      <ExpandableSectionToggle isExpanded={isExpanded} onToggle={onToggle} contentId=\"code-block-expand\" direction=\"up\">\n        {isExpanded ? 'Show Less' : 'Show More'}\n      </ExpandableSectionToggle>\n    </CodeBlock>\n  );\n};\n","title":"Expandable","lang":"ts"}}>
      
    </Example>
};

const Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"id":"examples","size":"h2","className":"ws-title ws-h2"}}>
      {`Examples`}
    </AutoLinkHeader>
    {React.createElement(pageData.examples["Basic"])}
    {React.createElement(pageData.examples["Expandable"])}
  </React.Fragment>
);
Component.displayName = 'ComponentsCodeBlockReactDocs';
Component.pageData = pageData;

export default Component;
