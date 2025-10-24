import figma from '@figma/code-connect';
import { Timestamp, TimestampTooltipVariant } from '@patternfly/react-core';

// TODO: DESIGN: Refine intent, enum/dropdown options confuse date and time formats. They shoudd be separated
// Documentation for Timestamp can be found at https://www.patternfly.org/components/timestamp

figma.connect(
  Timestamp,
  'https://www.figma.com/design/VMEX8Xg2nzhBX8rfBx53jp/PatternFly-6--Components?node-id=7472-6718',
  {
    props: {
      // string
      defaultTimestampContent: figma.string('✏️ Default timestamp content'),

      // boolean
      tooltip: figma.boolean('With tooltip underline', {
        true: { variant: TimestampTooltipVariant.default },
        false: undefined
      }),

      // enum
      date: figma.enum('Format', {
        Default: figma.string('✏️ Default timestamp content'),
        'Without time': figma.string('✏️ Without time'),
        'Without day': figma.string('✏️ Without day'),
        Abbreviated: figma.string('✏️ Without time'),
        Numberic: figma.string('✏️ Without time'),
        'Custom content': figma.string('✏️ Without time')
      })
    },
    example: (props) => <Timestamp tooltip={props.tooltip} date={props.date} />
  }
);
