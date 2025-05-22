import figma from '@figma/code-connect';
import { ClipboardCopy } from '@patternfly/react-core';

/**
 * PatternFly ClipboardCopyInlineCompact component integration for Figma Code Connect
 */

figma.connect(
  ClipboardCopy,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=9914-75835&m=dev',
  {
    props: {
      // enum
      isActive: figma.enum('State', { Active: true }),
      isReadOnly: figma.enum('State', { 'Read only': true }),
      isExpanded: figma.enum('State', { Expanded: true }),

      children: figma.children('*')
    },
    example: (props) => (
      <ClipboardCopy isReadOnly={props.isReadOnly} isExpanded={props.isExpanded} isActive={props.isActive}>
        {props.children}
      </ClipboardCopy>
    )
  }
);
