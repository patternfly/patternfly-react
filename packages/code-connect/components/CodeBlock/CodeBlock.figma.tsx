import figma from '@figma/code-connect';
import { CodeBlock, ExpandableSectionToggle } from '@patternfly/react-core';

figma.connect(
  CodeBlock,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=9802-5857',
  {
    props: {
      // TODO: FIGMA: configure options for actions
      actions: `action1, action2, action3, action4, action5`,

      // TODO: FIGMA: configure CodeBlockCode
      expandableSection: figma.boolean('Expandable', {
        true: (
          <ExpandableSectionToggle ontoggle={() => {}} contentId="code-block-id" direction="up">
            {isExpanded ? 'Show Less' : 'Show More'}
          </ExpandableSectionToggle>
        ),
        false: undefined
      })
      // children: figma.children('*')
    },
    example: (props) => (
      // Documentation for CodeBlock can be found at https://www.patternfly.org/components/code-block
      <CodeBlock actions={props.actions}>
        <CodeBlock>{/* {props.codeBlockCode} */}</CodeBlock>
        {props.expandableSection}
      </CodeBlock>
    )
  }
);
