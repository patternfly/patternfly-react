import figma from '@figma/code-connect';
import { Timestamp, TimestampTooltipVariant } from '@patternfly/react-core';

// TODO: FIGMA: Refine intent, enum/dropdown options confuse date and time formats. They shoudd be separated
// Documentation for Timestamp can be found at https://www.patternfly.org/components/timestamp

figma.connect(
  Timestamp,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=7472-6718',
  {
    props: {
      // string
      defaultTimestampContent: figma.string('✏️ Default timestamp content'),

      // boolean
      hasTooltip: figma.boolean('With tooltip underline', {
        true: {
          tooltip: { variant: TimestampTooltipVariant.default, suffix: 'Coordinated Universal Time (UTC)' }
        },
        false: undefined
      }),

      // enum
      dateFormat: figma.enum('Format', {
        Default: 'full',
        'Without time': 'medium',
        'Without day': undefined,
        Abbreviated: 'short',
        Numeric: 'numeric'
      }),
      timeFormat: figma.enum('Format', {
        'Without time': undefined,
        Abbreviated: 'short',
        Numeric: 'numeric'
      }),
      children: figma.children('*')
    },
    example: (props) => (
      <Timestamp
        date={props.defaultTimestampContent}
        timeFormat={props.timeFormat}
        dateFormat={props.dateFormat}
        dateContent={props.dateFormat}
        tooltip={props.hasTooltip}
      />
    )
  }
);
