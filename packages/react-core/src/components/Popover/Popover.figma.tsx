import React from 'react';
import { Popover } from './Popover';
import figma from '@figma/code-connect';

/**
 * -- This file was auto-generated by Code Connect --
 * `props` includes a mapping from Figma properties and variants to
 * suggested values. You should update this to match the props of your
 * code component, and update the `example` function to return the
 * code example you'd like to see in Figma
 */

figma.connect(
  Popover,
  'https://www.figma.com/design/VMEX8Xg2nzhBX8rfBx53jp/branch/H3LonYnwH26v9zNEa2SXFk/PatternFly-6%3A-Components?m=auto&node-id=5857-2066',
  {
    props: {
      hasFooter: figma.boolean('Has footer'),
      popoverDescription: figma.string('Popover description'),
      popoverHeading: figma.string('Popover Heading'),
      hasSecondaryButton: figma.boolean('Has Secondary button'),
      hasInlineButton: figma.boolean('Has inline button'),
      popoverFooter: figma.string('Popover footer'),
      showHeaderIcon: figma.boolean('Show header icon'),
      status: figma.enum('Status', {
        Default: 'default',
        Success: 'success',
        Info: 'info',
        Warning: 'warning',
        Danger: 'danger'
      }),
      position: figma.enum('Position', {
        'Top-left': 'top-left',
        'Top-middle': 'top-middle',
        'Top-right': 'top-right',
        'Bottom-left': 'bottom-left',
        'Bottom-middle': 'bottom-middle',
        'Bottom-right': 'bottom-right'
      })
    },
    example: (props) => <Popover />
  }
);
