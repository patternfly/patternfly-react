import React from 'react';
import { Badge } from 'src/components/Badge';
import figma from '@figma/code-connect';

/**
 * -- This file was auto-generated by Code Connect --
 * `props` includes a mapping from Figma properties and variants to
 * suggested values. You should update this to match the props of your
 * code component, and update the `example` function to return the
 * code example you'd like to see in Figma
 */

figma.connect(
  Badge,
  'https://www.figma.com/design/VMEX8Xg2nzhBX8rfBx53jp/branch/H3LonYnwH26v9zNEa2SXFk/PatternFly-6%3A-Components?m=auto&node-id=1259-1132',
  {
    props: {
      text: figma.string('Text'),
      type: figma.enum('Type', {
        new: 'New',
        Unread: 'unread',
        Read: 'read',
        disabled: 'disabled'
      })
    },
    example: (props) => <Badge />
  }
);
