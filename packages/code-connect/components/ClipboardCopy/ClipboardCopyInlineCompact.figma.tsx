import figma from '@figma/code-connect';
import { ClipboardCopy } from '@patternfly/react-core';

// Documentation for ClipboardCopy can be found at https://www.patternfly.org/components/clipboard-copy

figma.connect(
  ClipboardCopy,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=9914-75768',
  {
    props: {
      children: figma.children('*')
    },
    example: (props) => <ClipboardCopy variant="inline-compact">{props.children}</ClipboardCopy>
  }
);
