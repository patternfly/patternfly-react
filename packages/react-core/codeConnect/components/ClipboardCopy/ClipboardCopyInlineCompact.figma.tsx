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
      // boolean props
      isReadOnly: figma.boolean('Read only'),
      isExpanded: figma.boolean('Expanded'),
      isExpandable: figma.boolean('Expandable'),

      // string props
      hoverTip: figma.string('Hover tip'),
      clickTip: figma.string('Click tip'),
      textAriaLabel: figma.string('Text aria label'),
      toggleAriaLabel: figma.string('Toggle aria label'),

      // enum props
      position: figma.enum('Position', {
        Top: 'top',
        Bottom: 'bottom',
        Left: 'left',
        Right: 'right',
        'Top Start': 'top-start',
        'Top End': 'top-end',
        'Bottom Start': 'bottom-start',
        'Bottom End': 'bottom-end',
        'Left Start': 'left-start',
        'Left End': 'left-end',
        'Right Start': 'right-start',
        'Right End': 'right-end',
        Auto: 'auto'
      }),

      // The text which is copied
      children: figma.string('*')
    },
    example: (props) => (
      <ClipboardCopy
        variant="inline-compact"
        isReadOnly={props.isReadOnly}
        isExpanded={props.isExpanded}
        isCode={props.isCode}
        isBlock={props.isBlock}
        hoverTip={props.hoverTip}
        clickTip={props.clickTip}
        textAriaLabel={props.textAriaLabel}
        toggleAriaLabel={props.toggleAriaLabel}
        position={props.position}
      >
        {props.children}
      </ClipboardCopy>
    )
  }
);
