import figma from '@figma/code-connect';
import { ClipboardCopy } from '@patternfly/react-core';

/**
 * PatternFly ClipboardCopyInlineCompact component integration for Figma Code Connect
 */

figma.connect(
  ClipboardCopy,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=9914-75768&m=dev',
  {
    props: {
      children: figma.children('*')
    },
    example: (props) => <ClipboardCopy variant="inline-compact">{props.children}</ClipboardCopy>
  }
);
