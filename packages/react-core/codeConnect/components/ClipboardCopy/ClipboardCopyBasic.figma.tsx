import figma from '@figma/code-connect';
import { ClipboardCopy } from '@patternfly/react-core';

/**
 * PatternFly ClipboardCopyInlineCompact component integration for Figma Code Connect
 */

figma.connect(
  ClipboardCopyBasic,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=9914-75835&m=dev',
  {
    props: {
      // boolean
      expandable: figma.boolean('Expandable'),

      // enum
      isExpanded: figma.enum('State', { Expanded: true }),
      isReadOnly: figma.enum('State', { 'Read only': true }),

      children: figma.children('*')
    },
    example: (props) => <ClipboardCopy children={props.children} />
  }
);
