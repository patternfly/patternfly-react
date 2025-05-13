import figma from '@figma/code-connect';
import { CodeBlock } from '@patternfly/react-core';

/**
 * PatternFly CodeBlock component integration for Figma Code Connect
 */

figma.connect(
  CodeBlock,
  "https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=9802-5857&t=IzSunfrnw18ti37Y-11",
  {
    props: {
      isExpandable: figma.boolean('Expandable'),
      children: figma.children('*')
    },
    example: (props) => <CodeBlock>{props.children}</CodeBlock>
  }
);
