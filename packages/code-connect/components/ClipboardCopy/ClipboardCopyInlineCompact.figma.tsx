import figma from '@figma/code-connect';
import { ClipboardCopy } from '@patternfly/react-core';

// Documentation for ClipboardCopy can be found at https://www.patternfly.org/components/clipboard-copy

figma.connect(
  ClipboardCopy,
  'https://www.figma.com/design/VMEX8Xg2nzhBX8rfBx53jp/PatternFly-6--Components?node-id=2722-13543',
  {
    props: {
      children: figma.children('*')
    },
    example: (props) => (
      <ClipboardCopy onCopy={() => {}} variant="inline-compact">
        {props.children}
      </ClipboardCopy>
    )
  }
);
