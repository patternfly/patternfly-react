import figma from '@figma/code-connect';
import { Tooltip } from '@patternfly/react-core';

figma.connect(
  Tooltip,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=6598-70985',
  {
    props: {
      // string
      content: figma.string('Text'),

      // enum
      position: figma.enum('Type', {
        'Bottom-left': 'bottom-start',
        'Bottom-middle': 'bottom',
        'Bottom-right': 'bottom-end',
        'Left-bottom': 'left-end',
        'Left-middle': 'left',
        'Left-top': 'left-start',
        'Right-bottom': 'right-end',
        'Right-middle': 'right',
        'Right-top': 'right-start',
        'Top-left': 'top-start',
        'Top-middle': 'top',
        'Top-right': 'top-end'
      }),

      children: figma.children('*')
    },
    example: (props) => (
      // Documentation for Tooltip can be found at https://www.patternfly.org/components/tooltip
      <Tooltip content={props.content} position={props.position}>
        {props.children}
      </Tooltip>
    )
  }
);
