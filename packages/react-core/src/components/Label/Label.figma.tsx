import React from 'react';
import { Label } from './Label';
import figma from '@figma/code-connect';

/**
 * -- This file was auto-generated by Code Connect --
 * `props` includes a mapping from Figma properties and variants to
 * suggested values. You should update this to match the props of your
 * code component, and update the `example` function to return the
 * code example you'd like to see in Figma
 */

figma.connect(
  Label,
  'https://www.figma.com/design/VMEX8Xg2nzhBX8rfBx53jp/branch/H3LonYnwH26v9zNEa2SXFk/PatternFly-6%3A-Components?m=auto&node-id=2800-609',
  {
    props: {
      hasIcon: figma.boolean('Has icon'),
      isEditable: figma.boolean('Is Editable'),
      text: figma.string('Text'),
      dismissable: figma.boolean('Dismissable'),
      color: figma.enum('Color', {
        Red: 'red',
        Orange: 'orange',
        'Orange Red': 'orange-red',
        Gold: 'gold',
        Green: 'green',
        Cyan: 'cyan',
        Blue: 'blue',
        Purple: 'purple',
        Grey: 'grey'
      }),
      type: figma.enum('Type', {
        Filled: 'filled',
        Outlined: 'outlined'
      }),
      size: figma.enum('Size', {
        Default: 'default',
        Compact: 'compact'
      }),
      state: figma.enum('State', {
        Default: 'default',
        Hover: 'hover'
      })
    },
    example: (props) => <Label />
  }
);

figma.connect(
  Label,
  'https://www.figma.com/design/VMEX8Xg2nzhBX8rfBx53jp/branch/H3LonYnwH26v9zNEa2SXFk/PatternFly-6%3A-Components?m=auto&node-id=2800-1075',
  {
    props: {
      labelGroupName: figma.string('Label group name'),
      hasCollapsedLabels: figma.boolean('Has collapsed labels'),
      type: figma.enum('Type', {
        Default: 'default',
        'Label management': 'label-management'
      })
    },
    example: (props) => <Label />
  }
);

figma.connect(
  Label,
  'https://www.figma.com/design/VMEX8Xg2nzhBX8rfBx53jp/branch/H3LonYnwH26v9zNEa2SXFk/PatternFly-6%3A-Components?m=auto&node-id=2800-1067',
  {
    props: {
      countText: figma.string('Count text'),
      hasCloseButton: figma.boolean('Has Close button'),
      hasCounter: figma.boolean('Has counter'),
      labelText: figma.string('Label text')
    },
    example: (props) => <Label />
  }
);

figma.connect(
  Label,
  'https://www.figma.com/design/VMEX8Xg2nzhBX8rfBx53jp/branch/H3LonYnwH26v9zNEa2SXFk/PatternFly-6%3A-Components?m=auto&node-id=2800-609',
  {
    props: {
      hasIcon: figma.boolean('Has icon'),
      isEditable: figma.boolean('Is Editable'),
      text: figma.string('Text'),
      dismissable: figma.boolean('Dismissable'),
      color: figma.enum('Color', {
        Red: 'red',
        Orange: 'orange',
        'Orange Red': 'orange-red',
        Gold: 'gold',
        Green: 'green',
        Cyan: 'cyan',
        Blue: 'blue',
        Purple: 'purple',
        Grey: 'grey'
      }),
      type: figma.enum('Type', {
        Filled: 'filled',
        Outlined: 'outlined'
      }),
      size: figma.enum('Size', {
        Default: 'default',
        Compact: 'compact'
      }),
      state: figma.enum('State', {
        Default: 'default',
        Hover: 'hover'
      })
    },
    example: (props) => <Label />
  }
);

figma.connect(
  Label,
  'https://www.figma.com/design/VMEX8Xg2nzhBX8rfBx53jp/branch/H3LonYnwH26v9zNEa2SXFk/PatternFly-6%3A-Components?m=auto&node-id=2800-1042',
  {
    props: {
      text: figma.string('Text'),
      type: figma.enum('Type', {
        Action: 'action'
      }),
      state: figma.enum('State', {
        Default: 'default',
        Hover: 'hover'
      }),
      size: figma.enum('Size', {
        Default: 'default',
        Compact: 'compact'
      })
    },
    example: (props) => <Label />
  }
);

figma.connect(
  Label,
  'https://www.figma.com/design/VMEX8Xg2nzhBX8rfBx53jp/branch/H3LonYnwH26v9zNEa2SXFk/PatternFly-6%3A-Components?m=auto&node-id=2800-488',
  {
    props: {
      text: figma.string('Text'),
      status: figma.enum('Status', {
        Danger: 'danger',
        Warning: 'warning',
        Success: 'success',
        Info: 'info',
        Custom: 'custom'
      }),
      type: figma.enum('Type', {
        Filled: 'filled',
        Outlined: 'outlined'
      }),
      size: figma.enum('Size', {
        Default: 'default',
        Compact: 'compact'
      }),
      state: figma.enum('State', {
        Default: 'default',
        Hover: 'hover'
      })
    },
    example: (props) => <Label />
  }
);
