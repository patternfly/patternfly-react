import figma from '@figma/code-connect';
import { Timestamp } from '@patternfly/react-core';

figma.connect(
  Timestamp,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=7472-6718',
  {
    props: {
      // string
      abbreviatedContent: figma.string('✏️ Abbreviated content'),
      defaultTimestampContent: figma.string('✏️ Default timestamp content'),
      numericContent: figma.string('✏️ Numeric content'),
      withoutDay: figma.string('✏️ Without day'),
      withoutTime: figma.string('✏️ Without time'),

      // boolean
      tooltipUnderline: figma.boolean('With tooltip underline'),

      // enum
      content: figma.enum('Format', {
        Default: figma.string('✏️ Default timestamp content'),
        'Without time': figma.string('✏️ Without time'),
        'Without day': figma.string('✏️ Without day'),
        Abbreviated: figma.string('✏️ Abbreviated content'),
        Numeric: figma.string('✏️ Numeric content')
      }),
      children: figma.children('*')
    },
    example: (props) => (
      // Documentation for Timestamp can be found at https://www.patternfly.org/components/timestamp
      <Timestamp date={props.content} tooltip={props.tooltipUnderline} />
    )
  }
);
