import figma from '@figma/code-connect';
import { CodeBlock, CodeBlockCode, ExpandableSection, ExpandableSectionToggle } from '@patternfly/react-core';

// TODO: DESIGN: Configure Actions layer to contain CodeBlockAction components

figma.connect(
  CodeBlock,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=9802-5857',
  {
    props: {
      editorText: 'code block code',

      actions: `action1, action2, action3, action4, action5`,

      // boolean
      expandableSectionToggle: figma.boolean('Expandable', {
        true: (
          <ExpandableSectionToggle onToggle={() => {}} contentId="code-block-id">
            Show More
          </ExpandableSectionToggle>
        ),
        false: undefined
      }),
      expandableSectionContent: figma.boolean('Expandable', {
        true: (
          <ExpandableSection isExpanded={true} isDetached contentId="code-block-expand">
            Expandable content
          </ExpandableSection>
        ),
        false: undefined
      })
    },
    example: (props) => (
      <CodeBlock actions={props.actions}>
        <CodeBlockCode>
          {props.editorText}
          {props.expandableSectionContent}
        </CodeBlockCode>
        {props.expandableSectionToggle}
      </CodeBlock>
    )
  }
);
