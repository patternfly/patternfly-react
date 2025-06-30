import figma from '@figma/code-connect';
import { CodeBlock, CodeBlockCode, ExpandableSection, ExpandableSectionToggle } from '@patternfly/react-core';

figma.connect(
  CodeBlock,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=9802-5857',
  {
    props: {
      // TODO: DESIGN: Configure Editor Text as a base component for CodeBlock
      // Currently using placeholder string, but should be a multi-select property with options like "Copy", "Download", "Edit", "Share", "Delete"
      editorText: 'code block code',

      // TODO: DESIGN: Configure Actions layer to contain CodeBlockAction components
      // Currently using placeholder string, but should be a multi-select property with options like "Copy", "Download", "Edit", "Share", "Delete"
      actions: `action1, action2, action3, action4, action5`,

      // TODO: DESIGN: ExpandableSectionToggle needs proper configuration
      // Current implementation has undefined variables and function calls
      expandableSectionContent: figma.boolean('Expandable', {
        true: (
          <ExpandableSection isExpanded={true} isDetached contentId="code-block-expand">
            Expandable content
          </ExpandableSection>
        ),
        false: undefined
      }),
      expandableSectionToggle: figma.boolean('Expandable', {
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
        <CodeBlockCode>
          {props.editorText}
          {props.expandableSectionToggle}
        </CodeBlockCode>
        {props.expandableSectionContent}
      </CodeBlock>
    )
  }
);
