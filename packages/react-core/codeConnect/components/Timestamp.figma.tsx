import React from 'react';
import { Timestamp } from 'src/components/Timestamp';
import figma from '@figma/code-connect';

/**
 * -- This file was auto-generated by Code Connect --
 * `props` includes a mapping from Figma properties and variants to
 * suggested values. You should update this to match the props of your
 * code component, and update the `example` function to return the
 * code example you'd like to see in Figma
 */

figma.connect(
  Timestamp,
  'https://www.figma.com/design/VMEX8Xg2nzhBX8rfBx53jp/branch/H3LonYnwH26v9zNEa2SXFk/PatternFly-6%3A-Components?m=auto&node-id=7472-6718',
  {
    props: {
      defaultTimestampContent: figma.string('✏️ Default timestamp content'),
      withoutTime: figma.string('✏️ Without time'),
      abbreviatedContent: figma.string('✏️ Abbreviated content'),
      withoutDay: figma.string('✏️ Without day'),
      numericContent: figma.string('✏️ Numeric content'),
      customContent: figma.string('✏️ Custom content '),
      withTooltipUnderline: figma.boolean('With tooltip underline'),
      format: figma.enum('Format', {
        Default: 'default',
        'Without time': 'without-time',
        'Without day': 'without-day',
        Abbreviated: 'abbreviated',
        Numeric: 'numeric',
        'Custom content': 'custom-content'
      })
    },
    example: (props) => <Timestamp />
  }
);
