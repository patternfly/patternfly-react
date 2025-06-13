import figma from '@figma/code-connect';
import { CodeBlock, CodeBlockCode, ExpandableSectionToggle } from '@patternfly/react-core';

figma.connect(
  CodeBlock,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=9802-5857&m=dev',
  {
    props: {
      // TODO: FIGMA: Configure Editor Text as a base component for CodeBlock
      // Currently using placeholder string, but should be a multi-select property with options like "Copy", "Download", "Edit", "Share", "Delete"
      editorText: 'code block code',

      // TODO: FIGMA: Configure Actions layer to contain CodeBlockAction components
      // Currently using placeholder string, but should be a multi-select property with options like "Copy", "Download", "Edit", "Share", "Delete"
      actions: `action1, action2, action3, action4, action5`,

      // TODO: FIGMA: ExpandableSectionToggle needs proper configuration
      // Current implementation has undefined variables and function calls
      expandableSection: figma.boolean('Expandable', {
        true: (
          <ExpandableSectionToggle onToggle={() => {}} contentId="code-block-id">
            Show More
          </ExpandableSectionToggle>
        ),
        false: undefined
      })
    },
    example: (props) => (
      <CodeBlock actions={props.actions}>
        <CodeBlockCode>{props.editorText}</CodeBlockCode>
        {props.expandableSection}
      </CodeBlock>
    )
  }
);
